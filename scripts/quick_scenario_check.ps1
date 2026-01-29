# Cupid Scenario Quick Checker
# 시나리오 파일의 노드 연결 상태를 빠르게 체크

param(
    [string]$Pattern = "ko_*.js"
)

$scenarioPath = Join-Path $PSScriptRoot "..\assets\js\scenario"

Write-Host "`n=== Cupid Scenario Node Checker ===" -ForegroundColor Cyan
Write-Host "Checking: $Pattern`n" -ForegroundColor Gray

$files = Get-ChildItem -Path $scenarioPath -Filter $Pattern

foreach ($file in $files) {
    Write-Host "`n[$($file.Name)]" -ForegroundColor Yellow
    
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # 모든 노드 ID 추출
    $nodeIds = [regex]::Matches($content, '"([^"]+)":\s*\{') | ForEach-Object { $_.Groups[1].Value }
    
    # next로 참조되는 노드 추출
    $nextNodes = [regex]::Matches($content, 'next:\s*"([^"]+)"') | ForEach-Object { $_.Groups[1].Value }
    
    Write-Host "  Total Nodes: $($nodeIds.Count)" -ForegroundColor White
    Write-Host "  Referenced Nodes: $($nextNodes.Count)" -ForegroundColor White
    
    # 유령 노드 찾기 (참조되지 않는 노드)
    $unreferenced = $nodeIds | Where-Object { 
        $node = $_
        ($node -ne "start") -and 
        ($nextNodes -notcontains $node) -and
        ($node -notmatch '(lunch_time|after_school|end|day\d+_)')
    }
    
    if ($unreferenced) {
        Write-Host "`n  Ghost Nodes (unreferenced):" -ForegroundColor Magenta
        $unreferenced | ForEach-Object {
            Write-Host "    - $_" -ForegroundColor Red
        }
    }
    
    # 깨진 참조 찾기 (존재하지 않는 노드 참조)
    $broken = $nextNodes | Where-Object {
        $next = $_
        ($nodeIds -notcontains $next) -and
        ($next -notmatch '(lunch_time|after_school|night_|day\d+_)')
    } | Select-Object -Unique
    
    if ($broken) {
        Write-Host "`n  Broken References:" -ForegroundColor Red
        $broken | ForEach-Object {
            Write-Host "    - $_" -ForegroundColor Red
        }
    }
    
    # 끊긴 노드 찾기 (next가 없는 노드)
    $deadEnds = $nodeIds | Where-Object {
        $node = $_
        $nodePattern = [regex]::Escape($node)
        $nodeBlock = [regex]::Match($content, "`"$nodePattern`":\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}").Groups[1].Value
        
        ($nodeBlock -notmatch 'next:') -and
        ($nodeBlock -notmatch 'choices:') -and
        ($node -notmatch '(lunch_time|after_school|end|ending|day\d+_end)')
    }
    
    if ($deadEnds) {
        Write-Host "`n  Dead Ends (no next node):" -ForegroundColor Yellow
        $deadEnds | ForEach-Object {
            Write-Host "    - $_" -ForegroundColor Yellow
        }
    }
    
    if (-not $unreferenced -and -not $broken -and -not $deadEnds) {
        Write-Host "  OK - No issues found!" -ForegroundColor Green
    }
}

Write-Host "`n=== Check Complete ===" -ForegroundColor Cyan

# Node 목록을 파일로 출력
Write-Host "`nGenerating all_nodes.txt..." -ForegroundColor Gray
$allNodesPath = Join-Path (Split-Path $scenarioPath) "all_nodes.txt"
$allContent = ""

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $nodeIds = [regex]::Matches($content, '"([^"]+)":\s*\{') | ForEach-Object { $_.Groups[1].Value }
    
    $allContent += "`n=== $($file.Name) ===`n"
    $allContent += ($nodeIds -join "`n") + "`n"
}

$allContent | Out-File -FilePath $allNodesPath -Encoding UTF8
Write-Host "Saved: $allNodesPath`n" -ForegroundColor Green
