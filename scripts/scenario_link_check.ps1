# Scenario link checker for Cupid
# - Detects broken references (next -> missing node)
# - Detects ghost nodes (defined but never referenced by any other node)
# - Detects dead ends (node has no outgoing next refs)
# This script avoids regex-based node extraction pitfalls by parsing the Object.assign(...) block
# and extracting ONLY top-level node objects.

param(
    [string]$ScenarioPath = "..\assets\js\scenario",
    [string]$Pattern = "ko_*.js"
)

$ErrorActionPreference = "Stop"

$specialReferences = @('index.html', 'index-en.html')

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
    $stringQuote = '"'
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
            if ($ch -eq $stringQuote) {
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
            $stringQuote = $ch
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

    # Find the Object.assign(SCENARIO[...], { ... }); block
    $assignIdx = $Content.IndexOf('Object.assign(')
    if ($assignIdx -lt 0) { return $null }

    $openBraceIdx = $Content.IndexOf('{', $assignIdx)
    if ($openBraceIdx -lt 0) { return $null }

    $closeBraceIdx = Get-MatchingBraceIndex -Text $Content -OpenIndex $openBraceIdx
    if ($closeBraceIdx -lt 0) { return $null }

    return $Content.Substring($openBraceIdx + 1, $closeBraceIdx - $openBraceIdx - 1)
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

function Extract-TopLevelNodes {
    param([string]$ScenarioBlock)

    $nodes = @{}

    $depth = 0
    $inString = $false
    $quote = '"'
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
            if ($ch -eq $quote) {
                $inString = $false
                $i++
                continue
            }
            $i++
            continue
        }

        # Comments (only when not in string)
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
            # Potentially a property key when depth==0
            if ($depth -eq 0 -and $ch -eq '"') {
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

                # Move past closing quote
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
            $quote = $ch
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

    # Collect every next: "..." inside the node object (covers choices/branches/etc)
    return ([regex]::Matches($NodeObjectText, 'next\s*:\s*"([^"]+)"') | ForEach-Object { $_.Groups[1].Value })
}

function Is-SpecialReference {
    param([string]$Target)
    if (-not $Target) { return $true }
    return ($specialReferences -contains $Target)
}

$scenarioFullPath = Join-Path $PSScriptRoot $ScenarioPath
$files = Get-ChildItem -Path $scenarioFullPath -Filter $Pattern

if (-not $files -or $files.Count -eq 0) {
    Write-Host "No scenario files matched pattern: $Pattern" -ForegroundColor Yellow
    exit 1
}

Write-Host "" 
Write-Host "=== Cupid Scenario Link Check ===" -ForegroundColor Cyan
Write-Host "Path: $scenarioFullPath" -ForegroundColor Gray
Write-Host "Pattern: $Pattern" -ForegroundColor Gray
Write-Host "Files: $($files.Count)" -ForegroundColor Gray

# Parse all files
$nodesByFile = @{}
$globalNodeToFiles = @{}

foreach ($file in $files) {
    $content = Read-TextFileAuto -Path $file.FullName
    $block = Get-ScenarioObjectBlock -Content $content
    if (-not $block) {
        Write-Host "[WARN] Could not find scenario block in $($file.Name)" -ForegroundColor Yellow
        continue
    }

    $nodes = Extract-TopLevelNodes -ScenarioBlock $block
    $nodesByFile[$file.Name] = $nodes

    foreach ($nodeId in $nodes.Keys) {
        if (-not $globalNodeToFiles.ContainsKey($nodeId)) { $globalNodeToFiles[$nodeId] = @() }
        $globalNodeToFiles[$nodeId] += $file.Name
    }
}

$globalNodeIds = $globalNodeToFiles.Keys

# Collect references and issues
$inboundCount = @{}
$brokenRefs = @()
$deadEnds = @()

foreach ($fileName in $nodesByFile.Keys) {
    $fileNodes = $nodesByFile[$fileName]

    foreach ($nodeId in $fileNodes.Keys) {
        $objText = $fileNodes[$nodeId]
        $nextRefs = @(Get-NextRefs -NodeObjectText $objText)

        # Count inbound references
        foreach ($t in $nextRefs) {
            if (Is-SpecialReference -Target $t) { continue }

            if ($globalNodeToFiles.ContainsKey($t)) {
                if (-not $inboundCount.ContainsKey($t)) { $inboundCount[$t] = 0 }
                $inboundCount[$t]++
            } else {
                $brokenRefs += [pscustomobject]@{ File = $fileName; From = $nodeId; To = $t }
            }
        }

        # Dead end detection: no next refs at all, and not an explicit ending/transition node
        $isEndishId = ($nodeId -match '(end|ending|day\d+_end|lunch_time|after_school|night_)')
        $hasChangeDay = ($objText -match 'changeDay\s*:')
        if ($nextRefs.Count -eq 0 -and -not $isEndishId -and -not $hasChangeDay) {
            $deadEnds += [pscustomobject]@{ File = $fileName; Node = $nodeId }
        }
    }
}

# Ghost nodes: defined, never referenced by any other node (global), excluding start
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

# Output summary
Write-Host "" 
Write-Host ("Global nodes: {0}" -f $globalNodeIds.Count) -ForegroundColor White

$brokenColor = if ($brokenRefs.Count -gt 0) { 'Red' } else { 'Green' }
$ghostColor = if ($ghostNodes.Count -gt 0) { 'Yellow' } else { 'Green' }
$deadEndColor = if ($deadEnds.Count -gt 0) { 'Yellow' } else { 'Green' }

Write-Host ("Broken references: {0}" -f $brokenRefs.Count) -ForegroundColor $brokenColor
Write-Host ("Ghost nodes (never referenced): {0}" -f $ghostNodes.Count) -ForegroundColor $ghostColor
Write-Host ("Dead ends (no next refs): {0}" -f $deadEnds.Count) -ForegroundColor $deadEndColor

if ($brokenRefs.Count -gt 0) {
    Write-Host "" 
    Write-Host "Broken references:" -ForegroundColor Red
    $brokenRefs | Sort-Object File, From, To | Format-Table -AutoSize
}

if ($ghostNodes.Count -gt 0) {
    Write-Host "" 
    Write-Host "Ghost nodes:" -ForegroundColor Magenta
    $ghostNodes | Sort-Object File, Node | Format-Table -AutoSize
}

if ($deadEnds.Count -gt 0) {
    Write-Host "" 
    Write-Host "Dead ends:" -ForegroundColor Yellow
    $deadEnds | Sort-Object File, Node | Select-Object -First 200 | Format-Table -AutoSize
    if ($deadEnds.Count -gt 200) {
        Write-Host ("(Showing first 200 of {0})" -f $deadEnds.Count) -ForegroundColor Gray
    }
}

Write-Host "" 
Write-Host "=== Done ===" -ForegroundColor Cyan
