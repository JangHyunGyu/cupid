<#
.SYNOPSIS
    Cupid 시나리오 파일 분석 및 검증 도구

.DESCRIPTION
    - 모든 시나리오 파일(ko/en)의 노드와 연결 관계를 파싱
    - 끊긴 노드(Dead Ends) 탐지
    - 유령 노드(Ghost Nodes) 탐지
    - 깨진 참조(Broken References) 탐지
    - (옵션) Mermaid 플로우 차트 생성

.NOTES
    - PowerShell 5.1 환경에서 한글/이모지 깨짐을 방지하려면 UTF-8(BOM) 인코딩이 안전합니다.
    - 본 스크립트는 정규식만으로 노드를 뽑지 않고, Object.assign(..., { ... }) 블록을 괄호 매칭으로 파싱합니다.

.EXAMPLE
    .\scenario_analyzer.ps1
    .\scenario_analyzer.ps1 -ShowDetails
    .\scenario_analyzer.ps1 -GenerateGraph
#>

param(
    [string]$ScenarioPath = "..\assets\js\scenario",
    [switch]$GenerateGraph,
    [switch]$ShowDetails,
    [string]$OutputFile = "scenario_analysis.md"
)

$ErrorActionPreference = "Stop"

$specialReferences = @('index.html', 'index-en.html')

$colors = @{
    Success = "Green"
    Warning = "Yellow"
    Error   = "Red"
    Info    = "Cyan"
    Header  = "Magenta"
}

$nl = [System.Environment]::NewLine
$fence = ([char]96).ToString() * 3

function Write-ColorOutput {
    param([string]$Message, [string]$Type = "Info")
    Write-Host $Message -ForegroundColor $colors[$Type]
}

function Read-TextFileAuto {
    param([string]$Path)

    $stream = [System.IO.File]::Open($Path, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Read, [System.IO.FileShare]::ReadWrite)
    try {
        $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8, $true)
        return $reader.ReadToEnd()
    } finally {
        if ($reader) { $reader.Dispose() }
        if ($stream) { $stream.Dispose() }
    }
}

function Get-MatchingBraceIndex {
    param(
        [string]$Text,
        [int]$OpenIndex
    )

    if ($OpenIndex -lt 0 -or $OpenIndex -ge $Text.Length -or $Text[$OpenIndex] -ne '{') {
        throw "OpenIndex must point to '{'"
    }

    $depth = 0
    $inString = $false
    $escape = $false
    $inLineComment = $false
    $inBlockComment = $false

    for ($i = $OpenIndex; $i -lt $Text.Length; $i++) {
        $ch = $Text[$i]

        if ($inLineComment) {
            if ($ch -eq "`n") { $inLineComment = $false }
            continue
        }

        if ($inBlockComment) {
            if ($ch -eq '*' -and ($i + 1) -lt $Text.Length -and $Text[$i + 1] -eq '/') {
                $inBlockComment = $false
                $i++
            }
            continue
        }

        if ($inString) {
            if ($escape) {
                $escape = $false
                continue
            }
            if ($ch -eq '\\') {
                $escape = $true
                continue
            }
            if ($ch -eq '"') {
                $inString = $false
                continue
            }
            continue
        }

        # Comments (only when not in string)
        if ($ch -eq '/' -and ($i + 1) -lt $Text.Length) {
            $nextCh = $Text[$i + 1]
            if ($nextCh -eq '/') {
                $inLineComment = $true
                $i++
                continue
            }
            if ($nextCh -eq '*') {
                $inBlockComment = $true
                $i++
                continue
            }
        }

        if ($ch -eq '"') {
            $inString = $true
            continue
        }

        if ($ch -eq '{') {
            $depth++
            continue
        }

        if ($ch -eq '}') {
            $depth--
            if ($depth -eq 0) {
                return $i
            }
        }
    }

    return -1
}

function Get-ScenarioObjectBlock {
    param([string]$Content)

    $assignIdx = $Content.IndexOf('Object.assign(')
    if ($assignIdx -lt 0) { return $null }

    $openBraceIdx = $Content.IndexOf('{', $assignIdx)
    if ($openBraceIdx -lt 0) { return $null }

    $closeBraceIdx = Get-MatchingBraceIndex -Text $Content -OpenIndex $openBraceIdx
    if ($closeBraceIdx -lt 0) { return $null }

    return $Content.Substring($openBraceIdx + 1, $closeBraceIdx - $openBraceIdx - 1)
}

function Get-TopLevelScenarioNodes {
    param([string]$ScenarioBlock)

    $nodes = @{}

    $depth = 0
    $inString = $false
    $escape = $false
    $inLineComment = $false
    $inBlockComment = $false

    $i = 0
    while ($i -lt $ScenarioBlock.Length) {
        $ch = $ScenarioBlock[$i]

        if ($inLineComment) {
            if ($ch -eq "`n") { $inLineComment = $false }
            $i++
            continue
        }

        if ($inBlockComment) {
            if ($ch -eq '*' -and ($i + 1) -lt $ScenarioBlock.Length -and $ScenarioBlock[$i + 1] -eq '/') {
                $inBlockComment = $false
                $i += 2
                continue
            }
            $i++
            continue
        }

        if ($inString) {
            if ($escape) {
                $escape = $false
                $i++
                continue
            }
            if ($ch -eq '\\') {
                $escape = $true
                $i++
                continue
            }
            if ($ch -eq '"') {
                $inString = $false
                $i++
                continue
            }
            $i++
            continue
        }

        # Comments
        if ($ch -eq '/' -and ($i + 1) -lt $ScenarioBlock.Length) {
            $nextCh = $ScenarioBlock[$i + 1]
            if ($nextCh -eq '/') {
                $inLineComment = $true
                $i += 2
                continue
            }
            if ($nextCh -eq '*') {
                $inBlockComment = $true
                $i += 2
                continue
            }
        }

        if ($ch -eq '"') {
            # Top-level key only (depth==0)
            if ($depth -eq 0) {
                $keyStart = $i + 1
                $j = $keyStart
                $keyEsc = $false
                while ($j -lt $ScenarioBlock.Length) {
                    $c2 = $ScenarioBlock[$j]
                    if ($keyEsc) { $keyEsc = $false; $j++; continue }
                    if ($c2 -eq '\\') { $keyEsc = $true; $j++; continue }
                    if ($c2 -eq '"') { break }
                    $j++
                }
                if ($j -ge $ScenarioBlock.Length) { break }

                $nodeId = $ScenarioBlock.Substring($keyStart, $j - $keyStart)

                $k = $j + 1
                while ($k -lt $ScenarioBlock.Length -and [char]::IsWhiteSpace($ScenarioBlock[$k])) { $k++ }
                if ($k -ge $ScenarioBlock.Length -or $ScenarioBlock[$k] -ne ':') { $i = $j + 1; continue }

                $k++
                while ($k -lt $ScenarioBlock.Length -and [char]::IsWhiteSpace($ScenarioBlock[$k])) { $k++ }

                if ($k -lt $ScenarioBlock.Length -and $ScenarioBlock[$k] -eq '{') {
                    $objStart = $k
                    $objEnd = Get-MatchingBraceIndex -Text $ScenarioBlock -OpenIndex $objStart
                    if ($objEnd -gt $objStart) {
                        $objText = $ScenarioBlock.Substring($objStart + 1, $objEnd - $objStart - 1)
                        $nodes[$nodeId] = $objText
                        $i = $objEnd + 1
                        continue
                    }
                }

                $i = $j + 1
                continue
            }

            $inString = $true
            $i++
            continue
        }

        if ($ch -eq '{') { $depth++; $i++; continue }
        if ($ch -eq '}') { if ($depth -gt 0) { $depth-- }; $i++; continue }

        $i++
    }

    return $nodes
}

function Get-NextRefs {
    param([string]$NodeObjectText)

    return ([regex]::Matches($NodeObjectText, 'next\s*:\s*"([^"]+)"') | ForEach-Object { $_.Groups[1].Value })
}

function Test-SpecialReference {
    param([string]$Target)

    if (-not $Target) { return $true }
    return ($specialReferences -contains $Target)
}

function Test-EndishNode {
    param(
        [string]$NodeId,
        [string]$NodeObjectText
    )

    if ($NodeId -match '(end|ending|day\d+_end)') { return $true }
    if ($NodeObjectText -match 'changeDay\s*:') { return $true }
    return $false
}

function New-MermaidGraph {
    param(
        [hashtable]$NodesByFile,
        [string]$FileName
    )

    if (-not $NodesByFile.ContainsKey($FileName)) {
        return ""
    }

    $fileNodes = $NodesByFile[$FileName]

    $lines = New-Object System.Collections.Generic.List[string]
    $lines.Add($fence + 'mermaid')
    $lines.Add('flowchart TD')

    foreach ($nodeId in ($fileNodes.Keys | Sort-Object)) {
        $nodeText = $fileNodes[$nodeId]
        $label = $nodeId

        if ($nodeId -eq 'start') {
            $lines.Add("    $nodeId([START $label])")
        } elseif (Test-EndishNode -NodeId $nodeId -NodeObjectText $nodeText) {
            $lines.Add("    $nodeId([END $label])")
        } else {
            $lines.Add("    $nodeId[$label]")
        }

        foreach ($t in @(Get-NextRefs -NodeObjectText $nodeText) | Select-Object -Unique) {
            if ($fileNodes.ContainsKey($t)) {
                $lines.Add("    $nodeId --> $t")
            } else {
                $lines.Add("    $nodeId -.-> $t")
            }
        }
    }

    $lines.Add($fence)
    return ($lines -join $nl)
}

$scenarioFullPath = Join-Path $PSScriptRoot $ScenarioPath
$files = Get-ChildItem -Path $scenarioFullPath -Filter '*.js' | Where-Object { $_.Name -match '^(ko|en)_day\d+_' }

Write-ColorOutput "╔════════════════════════════════════════════════════════════╗" -Type Header
Write-ColorOutput "║   Cupid Scenario Analyzer                                   ║" -Type Header
Write-ColorOutput "║   Link checks + report/graph output                          ║" -Type Header
Write-ColorOutput "╚════════════════════════════════════════════════════════════╝" -Type Header

Write-ColorOutput ($nl + "Scanning scenario files...") -Type Info
Write-ColorOutput "Path: $scenarioFullPath" -Type Info

$nodesByFile = @{}
$globalNodeToFiles = @{}

foreach ($file in $files) {
    $content = Read-TextFileAuto -Path $file.FullName
    $block = Get-ScenarioObjectBlock -Content $content
    if (-not $block) {
        Write-ColorOutput "  WARN: Object.assign block not found: $($file.Name)" -Type Warning
        continue
    }

    $nodes = Get-TopLevelScenarioNodes -ScenarioBlock $block
    $nodesByFile[$file.Name] = $nodes

    foreach ($nodeId in $nodes.Keys) {
        if (-not $globalNodeToFiles.ContainsKey($nodeId)) { $globalNodeToFiles[$nodeId] = @() }
        $globalNodeToFiles[$nodeId] += $file.Name
    }
}

$globalNodeIds = $globalNodeToFiles.Keys

# Collect issues
$inboundCount = @{}
$brokenRefs = @()
$deadEnds = @()

foreach ($fileName in $nodesByFile.Keys) {
    $fileNodes = $nodesByFile[$fileName]

    foreach ($nodeId in $fileNodes.Keys) {
        $nodeText = $fileNodes[$nodeId]
        $nextRefs = @(Get-NextRefs -NodeObjectText $nodeText)

        foreach ($t in $nextRefs) {
            if (Test-SpecialReference -Target $t) { continue }

            if ($globalNodeToFiles.ContainsKey($t)) {
                if (-not $inboundCount.ContainsKey($t)) { $inboundCount[$t] = 0 }
                $inboundCount[$t]++
            } else {
                $brokenRefs += [pscustomobject]@{ File = $fileName; From = $nodeId; To = $t }
            }
        }

        if ($nextRefs.Count -eq 0 -and -not (Test-EndishNode -NodeId $nodeId -NodeObjectText $nodeText)) {
            $deadEnds += [pscustomobject]@{ File = $fileName; Node = $nodeId }
        }
    }
}

$ghostNodes = @()
foreach ($nodeId in $globalNodeIds) {
    if ($nodeId -eq 'start') { continue }

    $count = 0
    if ($inboundCount.ContainsKey($nodeId)) { $count = $inboundCount[$nodeId] }

    if ($count -eq 0) {
        foreach ($fileName in $globalNodeToFiles[$nodeId]) {
            $ghostNodes += [pscustomobject]@{ File = $fileName; Node = $nodeId }
        }
    }
}

Write-ColorOutput ($nl + "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━") -Type Header
Write-ColorOutput "RESULT" -Type Header
Write-ColorOutput "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -Type Header

Write-Host ("Files: {0}" -f $nodesByFile.Keys.Count)
Write-Host ("Nodes: {0}" -f $globalNodeIds.Count)

$brokenColor = if ($brokenRefs.Count -gt 0) { 'Red' } else { 'Green' }
$ghostColor = if ($ghostNodes.Count -gt 0) { 'Yellow' } else { 'Green' }
$deadEndColor = if ($deadEnds.Count -gt 0) { 'Yellow' } else { 'Green' }

Write-Host "Broken References: " -NoNewline
Write-Host $brokenRefs.Count -ForegroundColor $brokenColor

Write-Host "Ghost Nodes: " -NoNewline
Write-Host $ghostNodes.Count -ForegroundColor $ghostColor

Write-Host "Dead Ends: " -NoNewline
Write-Host $deadEnds.Count -ForegroundColor $deadEndColor

if ($ShowDetails) {
    if ($brokenRefs.Count -gt 0) {
        Write-ColorOutput ($nl + "Broken References (details)") -Type Error
        $brokenRefs | Sort-Object File, From, To | Format-Table -AutoSize
    }
    if ($ghostNodes.Count -gt 0) {
        Write-ColorOutput ($nl + "Ghost Nodes (details)") -Type Warning
        $ghostNodes | Sort-Object File, Node | Format-Table -AutoSize
    }
    if ($deadEnds.Count -gt 0) {
        Write-ColorOutput ($nl + "Dead Ends (details)") -Type Warning
        $deadEnds | Sort-Object File, Node | Format-Table -AutoSize
    }
}

# Report markdown
$reportPath = Join-Path (Split-Path $PSScriptRoot) $OutputFile

$mdLines = New-Object System.Collections.Generic.List[string]
$mdLines.Add('# Cupid Scenario Analysis Report')
$mdLines.Add('')
$mdLines.Add(("Generated: {0}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss')))
$mdLines.Add('')
$mdLines.Add('## Summary')
$mdLines.Add('')
$mdLines.Add(("- Files: {0}" -f $nodesByFile.Keys.Count))
$mdLines.Add(("- Nodes: {0}" -f $globalNodeIds.Count))
$mdLines.Add(("- Broken References: {0}" -f $brokenRefs.Count))
$mdLines.Add(("- Ghost Nodes: {0}" -f $ghostNodes.Count))
$mdLines.Add(("- Dead Ends: {0}" -f $deadEnds.Count))

$mdLines.Add('')
$mdLines.Add('## Broken References')
$mdLines.Add('')
if ($brokenRefs.Count -eq 0) {
    $mdLines.Add('OK - No issues found')
} else {
    $mdLines.Add('| File | From | To |')
    $mdLines.Add('|---|---|---|')
    foreach ($b in ($brokenRefs | Sort-Object File, From, To)) {
        $mdLines.Add(("| {0} | {1} | {2} |" -f $b.File, $b.From, $b.To))
    }
}

$mdLines.Add('')
$mdLines.Add('## Ghost Nodes')
$mdLines.Add('')
if ($ghostNodes.Count -eq 0) {
    $mdLines.Add('OK - No issues found')
} else {
    $mdLines.Add('| File | Node |')
    $mdLines.Add('|---|---|')
    foreach ($g in ($ghostNodes | Sort-Object File, Node)) {
        $mdLines.Add(("| {0} | {1} |" -f $g.File, $g.Node))
    }
}

$mdLines.Add('')
$mdLines.Add('## Dead Ends')
$mdLines.Add('')
if ($deadEnds.Count -eq 0) {
    $mdLines.Add('OK - No issues found')
} else {
    $mdLines.Add('| File | Node |')
    $mdLines.Add('|---|---|')
    foreach ($d in ($deadEnds | Sort-Object File, Node)) {
        $mdLines.Add(("| {0} | {1} |" -f $d.File, $d.Node))
    }
}

if ($GenerateGraph) {
    $mdLines.Add('')
    $mdLines.Add('## Mermaid Graphs')
    foreach ($fileName in ($nodesByFile.Keys | Sort-Object)) {
        $mdLines.Add('')
        $mdLines.Add(("### {0}" -f $fileName))
        $mdLines.Add('')
        $mdLines.Add((New-MermaidGraph -NodesByFile $nodesByFile -FileName $fileName))
    }
}

($mdLines -join $nl) | Out-File -FilePath $reportPath -Encoding UTF8
Write-ColorOutput ($nl + "Report saved: $reportPath") -Type Success

Write-ColorOutput ($nl + "Done.") -Type Success


