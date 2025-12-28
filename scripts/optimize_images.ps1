Add-Type -AssemblyName System.Drawing

$imageDir = "$PSScriptRoot\..\assets\images\background"
$maxSize = 1280
$thresholdBytes = 500 * 1024 # 500KB

Write-Host "Checking background images in $imageDir..."

if (-not (Test-Path $imageDir)) {
    Write-Error "Image directory not found: $imageDir"
    exit 1
}

$files = Get-ChildItem $imageDir -Include *.png, *.jpg -Recurse

$count = 0

foreach ($file in $files) {
    if ($file.Length -gt $thresholdBytes) {
        Write-Host "Optimizing $($file.Name) ($([math]::round($file.Length/1KB)) KB)..."
        
        try {
            $img = new-object System.Drawing.Bitmap $file.FullName
            
            # Calculate new dimensions
            $newWidth = [int]$img.Width
            $newHeight = [int]$img.Height
            
            if ($img.Width -gt $maxSize -or $img.Height -gt $maxSize) {
                $ratio = $img.Width / $img.Height
                if ($ratio -gt 1) {
                    $newWidth = [int]$maxSize
                    $newHeight = [int][math]::Round($maxSize / $ratio)
                } else {
                    $newHeight = [int]$maxSize
                    $newWidth = [int][math]::Round($maxSize * $ratio)
                }
            }
            
            $newImg = new-object System.Drawing.Bitmap $newWidth, $newHeight
            $graph = [System.Drawing.Graphics]::FromImage($newImg)
            $graph.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            
            $graph.DrawImage($img, 0, 0, $newWidth, $newHeight)
            
            $img.Dispose()
            
            # Save overwriting the original
            if ($file.Extension -eq ".png") {
                $newImg.Save($file.FullName, [System.Drawing.Imaging.ImageFormat]::Png)
            } else {
                $newImg.Save($file.FullName, [System.Drawing.Imaging.ImageFormat]::Jpeg)
            }
            
            $newImg.Dispose()
            $graph.Dispose()
            
            $newFile = Get-Item $file.FullName
            Write-Host "  -> Done. New size: $([math]::round($newFile.Length/1KB)) KB"
            $count++
        }
        catch {
            Write-Host "  -> Error processing $($file.Name): $_"
        }
    }
}

if ($count -eq 0) {
    Write-Host "All images are already optimized!"
} else {
    Write-Host "Optimized $count images."
}
