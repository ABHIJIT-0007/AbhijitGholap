param(
    [int]$Port = 3000
)

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
} catch {
    Write-Error "Failed to start listener on $prefix : $_"
    exit 1
}

Write-Host "Portfolio Web Server running at: $prefix"
Write-Host "Serving files from: $PSScriptRoot"
Write-Host "Press Ctrl+C to stop the server."

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".ico"  = "image/x-icon"
    ".pdf"  = "application/pdf"
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $decodedPath = [System.Net.WebUtility]::UrlDecode($request.Url.LocalPath)

        if ($decodedPath -eq "/" -or $decodedPath -eq "/index.html") {
            $filePath = Join-Path $PSScriptRoot "standalone-preview.html"
        } else {
            $relativePath = $decodedPath.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
            $filePath = Join-Path $PSScriptRoot $relativePath
            if (-not (Test-Path $filePath -PathType Leaf)) {
                $publicPath = Join-Path $PSScriptRoot (Join-Path "public" $relativePath)
                if (Test-Path $publicPath -PathType Leaf) {
                    $filePath = $publicPath
                }
            }
        }

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            
            $response.ContentType = $mime
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $decodedPath")
            $response.StatusCode = 404
            $response.ContentType = "text/plain; charset=utf-8"
            $response.ContentLength64 = $msg.Length
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }

        $response.OutputStream.Close()
    } catch {
        # Ignore client aborts or listener shutdown
    }
}
