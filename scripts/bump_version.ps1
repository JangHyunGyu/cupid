# Cupid 프로젝트 캐시 버스팅 버전 업데이트 스크립트
# 실행 위치: cupid 폴더 루트
# - HTML의 ?v=X.Y.Z (CSS, JS 리소스)
# - main.js의 ASSET_VERSION (이미지 리소스)

$files = @("game.html", "game-en.html", "index.html", "index-en.html")
$mainJsPath = "assets\js\main.js"
$versionPattern = '\?v=(\d+\.\d+\.\d+)'

# game.html에서 현재 버전 추출
if (Test-Path "game.html") {
    $content = Get-Content "game.html" -Raw -Encoding UTF8
    if ($content -match $versionPattern) {
        $currentVersion = $Matches[1]
        $parts = $currentVersion.Split('.')
        
        # 패치 버전(마지막 숫자) 증가
        $newPatch = [int]$parts[2] + 1
        $newVersion = "$($parts[0]).$($parts[1]).$newPatch"
        
        Write-Host "------------------------------------------" -ForegroundColor Cyan
        Write-Host "현재 버전: $currentVersion"
        Write-Host "새로운 버전: $newVersion"
        Write-Host "------------------------------------------" -ForegroundColor Cyan
        
        # HTML 파일들 업데이트
        foreach ($file in $files) {
            if (Test-Path $file) {
                $fileContent = Get-Content $file -Raw -Encoding UTF8
                # 모든 ?v=X.Y.Z 패턴을 새 버전으로 교체
                $newContent = $fileContent -replace '\?v=\d+\.\d+\.\d+', "?v=$newVersion"
                Set-Content $file $newContent -Encoding UTF8 -NoNewline
                Write-Host "[성공] $file 업데이트 완료" -ForegroundColor Green
            }
        }
        
        # main.js의 ASSET_VERSION 업데이트
        if (Test-Path $mainJsPath) {
            $mainJsContent = Get-Content $mainJsPath -Raw -Encoding UTF8
            $mainJsContent = $mainJsContent -replace 'ASSET_VERSION\s*=\s*"[^"]+"', "ASSET_VERSION = `"$newVersion`""
            Set-Content $mainJsPath $mainJsContent -Encoding UTF8 -NoNewline
            Write-Host "[성공] $mainJsPath ASSET_VERSION 업데이트 완료" -ForegroundColor Green
        }
        
        Write-Host "------------------------------------------" -ForegroundColor Cyan
        Write-Host "모든 파일의 캐시 버스팅 버전이 $newVersion 으로 업데이트되었습니다." -ForegroundColor Green
        Write-Host ""
        Write-Host "적용 범위:" -ForegroundColor Yellow
        Write-Host "  - HTML: CSS, JS 파일 캐시" -ForegroundColor Gray
        Write-Host "  - ASSET_VERSION: 배경/캐릭터 이미지 캐시" -ForegroundColor Gray
    } else {
        Write-Error "game.html에서 버전 패턴(?v=X.Y.Z)을 찾을 수 없습니다."
    }
} else {
    Write-Error "game.html 파일을 찾을 수 없습니다. cupid 폴더에서 실행해주세요."
}
