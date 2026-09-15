# Render all pages of each Works PDF to PNG using Windows.Data.Pdf
# Output goes to public/works/<project-slug>/page-XX.png

$WorksDir = Join-Path $PSScriptRoot "Works"
$OutputBase = Join-Path $PSScriptRoot "public\works"

if (!(Test-Path $OutputBase)) {
    New-Item -ItemType Directory -Path $OutputBase -Force | Out-Null
}

Add-Type -AssemblyName System.Runtime.WindowsRuntime
$asTaskGeneric = ([System.WindowsRuntimeSystemExtensions].GetMethods() | 
    Where-Object { 
        $_.Name -eq 'AsTask' -and 
        $_.GetParameters().Count -eq 1 -and 
        $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' 
    })[0]

Function Await($WinRtTask, $ResultType) {
    $asTask = $asTaskGeneric.MakeGenericMethod($ResultType)
    $netTask = $asTask.Invoke($null, @($WinRtTask))
    $netTask.Wait(-1) | Out-Null
    $netTask.Result
}

[Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null

# Map PDF names to URL-friendly slugs
$slugMap = @{
    "Bunglow Design.pdf"           = "bungalow-design"
    "Mizoram State Bhavan.pdf"     = "mizoram-state-bhavan"
    "NGO Learning Centre.pdf"      = "ngo-learning-centre"
    "Rural Development Centre.pdf" = "rural-development-centre"
    "SPORTS COMPLEX UFFFD GOA.pdf" = "sports-complex-goa"
    "The Evolution of Museum.pdf"  = "the-evolving-museum"
    "Tiny House.pdf"               = "tiny-house"
    "Working Drawing.pdf"          = "working-drawing"
}

$pdfs = Get-ChildItem -Path $WorksDir -Filter "*.pdf"

foreach ($pdf in $pdfs) {
    $slug = $slugMap[$pdf.Name]
    if (-not $slug) {
        $slug = $pdf.BaseName.ToLower() -replace '[^a-z0-9]+', '-'
    }

    $outputDir = Join-Path $OutputBase $slug
    if (!(Test-Path $outputDir)) {
        New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
    }

    Write-Host "=== Rendering: $($pdf.Name) -> works/$slug/ ===" -ForegroundColor Cyan

    try {
        $resolvedPdf = $pdf.FullName
        $storageFileTask = [Windows.Storage.StorageFile]::GetFileFromPathAsync($resolvedPdf)
        $storageFile = Await $storageFileTask ([Windows.Storage.StorageFile])

        $pdfDocTask = [Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($storageFile)
        $pdfDoc = Await $pdfDocTask ([Windows.Data.Pdf.PdfDocument])

        Write-Host "  Pages: $($pdfDoc.PageCount)"

        $resolvedOutputDir = (Resolve-Path $outputDir).Path

        for ($i = 0; $i -lt $pdfDoc.PageCount; $i++) {
            $page = $pdfDoc.GetPage($i)
            $pageNum = $i + 1
            $fileName = "page-{0:D2}.png" -f $pageNum

            $renderFileTask = [Windows.Storage.StorageFolder]::GetFolderFromPathAsync($resolvedOutputDir)
            $folder = Await $renderFileTask ([Windows.Storage.StorageFolder])

            $destFileTask = $folder.CreateFileAsync($fileName, [Windows.Storage.CreationCollisionOption]::ReplaceExisting)
            $destFile = Await $destFileTask ([Windows.Storage.StorageFile])

            $streamTask = $destFile.OpenAsync([Windows.Storage.FileAccessMode]::ReadWrite)
            $stream = Await $streamTask ([Windows.Storage.Streams.IRandomAccessStream])

            $renderOptions = New-Object Windows.Data.Pdf.PdfPageRenderOptions
            $renderOptions.DestinationWidth = [uint32]($page.Dimensions.ArtBox.Width * 2)

            $renderTask = $page.RenderToStreamAsync($stream, $renderOptions)
            $asTaskNoResult = [System.WindowsRuntimeSystemExtensions].GetMethods() | 
                Where-Object { 
                    $_.Name -eq 'AsTask' -and 
                    $_.GetParameters().Count -eq 1 -and 
                    $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncAction' 
                }
            $netRenderTask = $asTaskNoResult[0].Invoke($null, @($renderTask))
            $netRenderTask.Wait(-1) | Out-Null

            $flushTask = $stream.FlushAsync()
            $netFlushTask = $asTaskGeneric.MakeGenericMethod([bool]).Invoke($null, @($flushTask))
            $netFlushTask.Wait(-1) | Out-Null
            $stream.Dispose()

            Write-Host "  -> $fileName" -ForegroundColor Green
        }
        Write-Host "  Done: $($pdfDoc.PageCount) pages rendered." -ForegroundColor Green
    } catch {
        Write-Host "  ERROR: $_" -ForegroundColor Red
    }
}

Write-Host "All Works PDFs rendered!" -ForegroundColor Yellow
Get-ChildItem -Path $OutputBase -Recurse -Filter "*.png" | Sort-Object FullName | ForEach-Object {
    $rel = $_.FullName.Substring((Resolve-Path $OutputBase).Path.Length + 1)
    Write-Host "  ./works/$($rel -replace '\\','/')"
}
