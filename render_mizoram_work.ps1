# Script to render mizoram bhavan work.pdf and Mizoram State Bhavan.pdf
Add-Type -AssemblyName System.Runtime.WindowsRuntime
$asTaskGeneric = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' })[0]
Function AwaitTask($WinRtTask, $ResultType) {
    $asTask = $asTaskGeneric.MakeGenericMethod($ResultType)
    $netTask = $asTask.Invoke($null, @($WinRtTask))
    $netTask.Wait(-1) | Out-Null
    $netTask.Result
}

[Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null

$pdfPath = (Resolve-Path ".\public\documents\mizoram bhavan work.pdf").Path
$outDir = Join-Path $PSScriptRoot "public\images\mizoram-state-bhavan"

if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

$storageFile = AwaitTask ([Windows.Storage.StorageFile]::GetFileFromPathAsync($pdfPath)) ([Windows.Storage.StorageFile])
$pdfDoc = AwaitTask ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($storageFile)) ([Windows.Data.Pdf.PdfDocument])

Write-Host "Rendering 'mizoram bhavan work.pdf': $($pdfDoc.PageCount) pages" -ForegroundColor Cyan

$asTaskNoResult = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncAction' }

for ($i = 0; $i -lt $pdfDoc.PageCount; $i++) {
    $page = $pdfDoc.GetPage($i)
    $pageNum = $i + 1
    $fileName = ("page-{0:D2}.png" -f $pageNum)
    $destPath = Join-Path $outDir $fileName

    $folder = AwaitTask ([Windows.Storage.StorageFolder]::GetFolderFromPathAsync((Resolve-Path $outDir).Path)) ([Windows.Storage.StorageFolder])
    $destFile = AwaitTask ($folder.CreateFileAsync($fileName, [Windows.Storage.CreationCollisionOption]::ReplaceExisting)) ([Windows.Storage.StorageFile])

    $stream = AwaitTask ($destFile.OpenAsync([Windows.Storage.FileAccessMode]::ReadWrite)) ([Windows.Storage.Streams.IRandomAccessStream])

    $renderOptions = New-Object Windows.Data.Pdf.PdfPageRenderOptions
    $renderOptions.DestinationWidth = [uint32]($page.Dimensions.ArtBox.Width * 2)

    $renderTask = $page.RenderToStreamAsync($stream, $renderOptions)
    $netRenderTask = $asTaskNoResult[0].Invoke($null, @($renderTask))
    $netRenderTask.Wait(-1) | Out-Null

    $flushTask = $stream.FlushAsync()
    $netFlushTask = $asTaskGeneric.MakeGenericMethod([bool]).Invoke($null, @($flushTask))
    $netFlushTask.Wait(-1) | Out-Null
    $stream.Dispose()

    Write-Host "Rendered page $pageNum to $fileName" -ForegroundColor Green
}
Write-Host "Done rendering mizoram bhavan work.pdf!" -ForegroundColor Yellow
