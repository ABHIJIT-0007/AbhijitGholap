# Render all pages of Portfolio.pdf to PNG using Windows.Data.Pdf
param(
    [string]$PdfPath = ".\Portfolio.pdf",
    [string]$OutputDir = ".\public\portfolio-pages"
)

$resolvedPdf = Resolve-Path $PdfPath
if (!(Test-Path $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}

Add-Type -AssemblyName System.Runtime.WindowsRuntime
$asTaskGeneric = ([System.WindowsRuntimeSystemExtensions].GetMethods() | ? { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' })[0]

Function Await($WinRtTask, $ResultType) {
    $asTask = $asTaskGeneric.MakeGenericMethod($ResultType)
    $netTask = $asTask.Invoke($null, @($WinRtTask))
    $netTask.Wait(-1) | Out-Null
    $netTask.Result
}

[Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null

$storageFileTask = [Windows.Storage.StorageFile]::GetFileFromPathAsync($resolvedPdf)
$storageFile = Await $storageFileTask ([Windows.Storage.StorageFile])

$pdfDocTask = [Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($storageFile)
$pdfDoc = Await $pdfDocTask ([Windows.Data.Pdf.PdfDocument])

Write-Host "Portfolio PDF loaded. Total pages: $($pdfDoc.PageCount)"

for ($i = 0; $i -lt $pdfDoc.PageCount; $i++) {
    $page = $pdfDoc.GetPage($i)
    $pageNum = $i + 1
    $outPath = Join-Path $OutputDir ("page-{0:D2}.png" -f $pageNum)
    
    $renderFileTask = [Windows.Storage.StorageFolder]::GetFolderFromPathAsync((Resolve-Path $OutputDir))
    $folder = Await $renderFileTask ([Windows.Storage.StorageFolder])
    
    $destFileTask = $folder.CreateFileAsync(("page-{0:D2}.png" -f $pageNum), [Windows.Storage.CreationCollisionOption]::ReplaceExisting)
    $destFile = Await $destFileTask ([Windows.Storage.StorageFile])
    
    $streamTask = $destFile.OpenAsync([Windows.Storage.FileAccessMode]::ReadWrite)
    $stream = Await $streamTask ([Windows.Storage.Streams.IRandomAccessStream])
    
    $renderOptions = New-Object Windows.Data.Pdf.PdfPageRenderOptions
    # Render with higher resolution (2x width for crisp display)
    $renderOptions.DestinationWidth = [uint32]($page.Dimensions.ArtBox.Width * 2)
    
    $renderTask = $page.RenderToStreamAsync($stream, $renderOptions)
    $asTaskNoResult = [System.WindowsRuntimeSystemExtensions].GetMethods() | ? { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncAction' }
    $netRenderTask = $asTaskNoResult[0].Invoke($null, @($renderTask))
    $netRenderTask.Wait(-1) | Out-Null
    
    $flushTask = $stream.FlushAsync()
    $netFlushTask = $asTaskGeneric.MakeGenericMethod([bool]).Invoke($null, @($flushTask))
    $netFlushTask.Wait(-1) | Out-Null
    $stream.Dispose()
    
    Write-Host "Rendered page $pageNum to $outPath"
}
Write-Host "All pages rendered successfully!"
