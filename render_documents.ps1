# Render PDF pages in public/documents to PNGs in public/images
param()

Add-Type -AssemblyName System.Runtime.WindowsRuntime
$asTaskGeneric = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' })[0]
Function Await($WinRtTask, $ResultType) {
    $asTask = $asTaskGeneric.MakeGenericMethod($ResultType)
    $netTask = $asTask.Invoke($null, @($WinRtTask))
    $netTask.Wait(-1) | Out-Null
    $netTask.Result
}

[Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null

$items = @(
    @{ pdf = ".\public\documents\mizoram bhavan work.pdf"; outDir = ".\public\images\mizoram-state-bhavan" },
    @{ pdf = ".\public\documents\The Evolution of Museum.pdf"; outDir = ".\public\images\the-evolving-museum" }
)

foreach ($item in $items) {
    if (-not (Test-Path $item.pdf)) { continue }
    $resolvedPdf = (Resolve-Path $item.pdf).Path
    
    if (-not (Test-Path $item.outDir)) {
        New-Item -ItemType Directory -Path $item.outDir -Force | Out-Null
    }
    $outputDir = (Resolve-Path $item.outDir).Path
    
    $storageFileTask = [Windows.Storage.StorageFile]::GetFileFromPathAsync($resolvedPdf)
    $storageFile = Await $storageFileTask ([Windows.Storage.StorageFile])
    $pdfDocTask = [Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($storageFile)
    $pdfDoc = Await $pdfDocTask ([Windows.Data.Pdf.PdfDocument])
    
    Write-Host "PDF Loaded: $($item.pdf) - Pages: $($pdfDoc.PageCount)" -ForegroundColor Cyan
    
    for ($i = 0; $i -lt $pdfDoc.PageCount; $i++) {
        $page = $pdfDoc.GetPage($i)
        $pageNum = $i + 1
        $fileName = ("page_{0:D2}.png" -f $pageNum)
        
        $folderTask = [Windows.Storage.StorageFolder]::GetFolderFromPathAsync($outputDir)
        $folder = Await $folderTask ([Windows.Storage.StorageFolder])
        $destFileTask = $folder.CreateFileAsync($fileName, [Windows.Storage.CreationCollisionOption]::ReplaceExisting)
        $destFile = Await $destFileTask ([Windows.Storage.StorageFile])
        
        $streamTask = $destFile.OpenAsync([Windows.Storage.FileAccessMode]::ReadWrite)
        $stream = Await $streamTask ([Windows.Storage.Streams.IRandomAccessStream])
        
        $renderOptions = New-Object Windows.Data.Pdf.PdfPageRenderOptions
        $renderOptions.DestinationWidth = [uint32]($page.Dimensions.ArtBox.Width * 2)
        
        $renderTask = $page.RenderToStreamAsync($stream, $renderOptions)
        $asTaskNoResult = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncAction' }
        $netRenderTask = $asTaskNoResult[0].Invoke($null, @($renderTask))
        $netRenderTask.Wait(-1) | Out-Null
        
        $flushTask = $stream.FlushAsync()
        $netFlushTask = $asTaskGeneric.MakeGenericMethod([bool]).Invoke($null, @($flushTask))
        $netFlushTask.Wait(-1) | Out-Null
        # Copy/save both page-XX.png and page_XX.png for compatibility
        $altFileName = ("page-{0:D2}.png" -f $pageNum)
        $altDestFileTask = $folder.CreateFileAsync($altFileName, [Windows.Storage.CreationCollisionOption]::ReplaceExisting)
        $altDestFile = Await $altDestFileTask ([Windows.Storage.StorageFile])
        $copyTask = $destFile.CopyAndReplaceAsync($altDestFile)
        $asTaskNoResult = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncAction' }
        $netCopyTask = $asTaskNoResult[0].Invoke($null, @($copyTask))
        $netCopyTask.Wait(-1) | Out-Null

        Write-Host "  -> $fileName & $altFileName rendered" -ForegroundColor Green
    }
}
