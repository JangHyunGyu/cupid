# Cupid Scenario Visualizer
# 특정 시나리오 파일의 노드 연결을 Mermaid 그래프로 시각화

param(
    [Parameter(Mandatory=$true)]
    [string]$FileName,
    
    [switch]$Simplified  # 간소화된 그래프 (선택지만 표시)
)

$scenarioPath = Join-Path $PSScriptRoot "..\assets\js\scenario"
$outputPath = Join-Path $PSScriptRoot "..\scenario_flow_${FileName}.md"

$filePath = Join-Path $scenarioPath $FileName

if (-not (Test-Path $filePath)) {
    Write-Host "Error: File not found - $FileName" -ForegroundColor Red
    Write-Host "Available files:" -ForegroundColor Yellow
    Get-ChildItem -Path $scenarioPath -Filter "*.js" | ForEach-Object { Write-Host "  - $($_.Name)" }
    exit 1
}

Write-Host "`n=== Generating Flow Chart for $FileName ===" -ForegroundColor Cyan

$content = Get-Content $filePath -Raw -Encoding UTF8

# 모든 노드 추출
$nodePattern = '"([^"]+)":\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}'
$nodeMatches = [regex]::Matches($content, $nodePattern)

$nodes = @{}
foreach ($match in $nodeMatches) {
    $nodeId = $match.Groups[1].Value
    $nodeContent = $match.Groups[2].Value
    
    # 기본 정보 추출
    $name = if ($nodeContent -match 'name:\s*"([^"]*)"') { $matches[1] } else { "" }
    $text = if ($nodeContent -match 'text:\s*"([^"]*)"') { $matches[1].Substring(0, [Math]::Min(30, $matches[1].Length)) } else { "" }
    $type = if ($nodeContent -match 'type:\s*"([^"]*)"') { $matches[1] } else { "dialogue" }
    
    # next 노드 추출
    $nextNodes = @()
    if ($nodeContent -match 'next:\s*"([^"]*)"') {
        $nextNodes += $matches[1]
    }
    
    # choices 추출
    $hasChoices = $false
    if ($nodeContent -match 'choices:\s*\[') {
        $hasChoices = $true
        $choiceMatches = [regex]::Matches($nodeContent, 'next:\s*"([^"]*)"')
        foreach ($cm in $choiceMatches) {
            $nextNodes += $cm.Groups[1].Value
        }
    }
    
    # affinityBranches 추출
    $hasAffinityBranch = $false
    if ($nodeContent -match 'affinityBranches:\s*\[') {
        $hasAffinityBranch = $true
        $branchMatches = [regex]::Matches($nodeContent, 'next:\s*"([^"]*)"')
        foreach ($bm in $branchMatches) {
            $nn = $bm.Groups[1].Value
            if ($nn -notin $nextNodes) {
                $nextNodes += $nn
            }
        }
    }
    
    # branches 추출
    if ($nodeContent -match 'branches:\s*\[') {
        $branchMatches = [regex]::Matches($nodeContent, 'next:\s*"([^"]*)"')
        foreach ($bm in $branchMatches) {
            $nn = $bm.Groups[1].Value
            if ($nn -notin $nextNodes) {
                $nextNodes += $nn
            }
        }
    }
    
    $nodes[$nodeId] = @{
        Name = $name
        Text = $text
        Type = $type
        Next = $nextNodes
        HasChoices = $hasChoices
        HasAffinityBranch = $hasAffinityBranch
    }
}

Write-Host "Found $($nodes.Count) nodes" -ForegroundColor Green

# Mermaid 그래프 생성
$mermaid = @"
# Scenario Flow: $FileName

``````mermaid
flowchart TB

"@

# 노드 정의
foreach ($nodeId in $nodes.Keys) {
    $node = $nodes[$nodeId]
    $label = $nodeId
    
    # 간소화 모드면 중요한 노드만
    if ($Simplified -and -not $node.HasChoices -and $nodeId -ne "start" -and $nodeId -notmatch '(end|lunch|after_school)') {
        continue
    }
    
    # 노드 스타일링
    if ($nodeId -eq "start") {
        $mermaid += "    $nodeId([START])`n"
        $mermaid += "    style $nodeId fill:#90EE90,stroke:#333,stroke-width:3px`n"
    }
    elseif ($nodeId -match '(lunch_time|after_school|night_|day\d+_end|end)') {
        $mermaid += "    $nodeId([END: $label])`n"
        $mermaid += "    style $nodeId fill:#FFB6C1,stroke:#333,stroke-width:3px`n"
    }
    elseif ($node.HasChoices) {
        $mermaid += "    $nodeId{CHOICE: $label}`n"
        $mermaid += "    style $nodeId fill:#FFD700,stroke:#333,stroke-width:2px`n"
    }
    elseif ($node.HasAffinityBranch) {
        $mermaid += "    $nodeId{AFFINITY: $label}`n"
        $mermaid += "    style $nodeId fill:#87CEEB,stroke:#333,stroke-width:2px`n"
    }
    elseif ($node.Type -eq "input") {
        $mermaid += "    $nodeId[/INPUT: $label/]`n"
        $mermaid += "    style $nodeId fill:#DDA0DD,stroke:#333,stroke-width:2px`n"
    }
    else {
        if (-not $Simplified) {
            $truncatedLabel = if ($label.Length -gt 25) { $label.Substring(0, 25) + "..." } else { $label }
            $mermaid += "    $nodeId[$truncatedLabel]`n"
        }
    }
}

$mermaid += "`n"

# 연결 정의
$processedLinks = @{}
foreach ($nodeId in $nodes.Keys) {
    $node = $nodes[$nodeId]
    
    # 간소화 모드 스킵
    if ($Simplified -and -not $node.HasChoices -and $nodeId -ne "start" -and $nodeId -notmatch '(end|lunch|after_school)') {
        # 중요 노드끼리만 연결
        if ($node.Next.Count -gt 0) {
            foreach ($next in $node.Next) {
                if ($nodes.ContainsKey($next) -and 
                    ($nodes[$next].HasChoices -or $next -eq "start" -or $next -match '(end|lunch|after_school)')) {
                    $linkKey = "$nodeId->$next"
                    if (-not $processedLinks.ContainsKey($linkKey)) {
                        $mermaid += "    $nodeId -.-> $next`n"
                        $processedLinks[$linkKey] = $true
                    }
                }
            }
        }
        continue
    }
    
    foreach ($next in $node.Next) {
        $linkKey = "$nodeId->$next"
        if ($processedLinks.ContainsKey($linkKey)) {
            continue
        }
        $processedLinks[$linkKey] = $true
        
        # 연결선 스타일
        if ($nodes.ContainsKey($next)) {
            if ($node.HasChoices) {
                $mermaid += "    $nodeId -->|choice| $next`n"
            }
            elseif ($node.HasAffinityBranch) {
                $mermaid += "    $nodeId -->|branch| $next`n"
            }
            else {
                $mermaid += "    $nodeId --> $next`n"
            }
        }
        else {
            # 외부 씬으로의 전환
            $mermaid += "    $nodeId -.->|scene| ${next}_ext[/Scene: $next/]`n"
            $mermaid += "    style ${next}_ext fill:#E0E0E0,stroke:#999`n"
        }
    }
}

$mermaid += "``````n`n"

# 통계 추가
$mermaid += "## Statistics`n`n"
$mermaid += "- **Total Nodes:** $($nodes.Count)`n"
$mermaid += "- **Choice Nodes:** $(($nodes.Values | Where-Object { $_.HasChoices }).Count)`n"
$mermaid += "- **Affinity Branches:** $(($nodes.Values | Where-Object { $_.HasAffinityBranch }).Count)`n"
$mermaid += "- **Input Nodes:** $(($nodes.Values | Where-Object { $_.Type -eq 'input' }).Count)`n"

# Dead Ends 찾기
$deadEnds = $nodes.Keys | Where-Object {
    $nodeId = $_
    $node = $nodes[$nodeId]
    ($node.Next.Count -eq 0) -and ($nodeId -notmatch '(lunch_time|after_school|end|ending|day\d+_end)')
}

if ($deadEnds) {
    $mermaid += "`n## Dead Ends (No Next Node)`n`n"
    foreach ($de in $deadEnds) {
        $mermaid += "- ``$de```n"
    }
}

# Ghost Nodes 찾기
$referenced = @{}
foreach ($node in $nodes.Values) {
    foreach ($next in $node.Next) {
        $referenced[$next] = $true
    }
}

$ghostNodes = $nodes.Keys | Where-Object {
    -not $referenced.ContainsKey($_) -and $_ -ne "start"
}

if ($ghostNodes) {
    $mermaid += "`n## Ghost Nodes (Not Referenced)`n`n"
    foreach ($gn in $ghostNodes) {
        $mermaid += "- ``$gn```n"
    }
}

# Legend
$mermaid += @"

## Legend

- 🟢 **Green (START)** - Entry point
- 🔴 **Pink (END)** - Exit point / Scene transition
- 🟡 **Yellow (CHOICE)** - Player choice
- 🔵 **Blue (AFFINITY)** - Affinity-based branch
- 🟣 **Purple (INPUT)** - User input
- ⚪ **Gray** - Regular dialogue node
- **Dotted line** - Scene transition / Simplified connection

---

**Generated:** $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")  
**Tool:** scenario_visualizer.ps1
"@

# 파일 저장
$mermaid | Out-File -FilePath $outputPath -Encoding UTF8

Write-Host "`nFlow chart saved to:" -ForegroundColor Green
Write-Host "  $outputPath" -ForegroundColor White
Write-Host "`nYou can view this file in:" -ForegroundColor Yellow
Write-Host "  - VS Code (with Markdown Preview or Mermaid extension)" -ForegroundColor Gray
Write-Host "  - GitHub (paste the content)" -ForegroundColor Gray
Write-Host "  - https://mermaid.live (paste the mermaid code)" -ForegroundColor Gray

# VS Code에서 열기
if (Get-Command code -ErrorAction SilentlyContinue) {
    Write-Host "`nOpening in VS Code..." -ForegroundColor Cyan
    & code $outputPath
}

Write-Host "`n=== Done! ===" -ForegroundColor Cyan
