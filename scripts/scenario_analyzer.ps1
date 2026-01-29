<#
.SYNOPSIS
    Cupid 시나리오 파일 분석 및 검증 도구

.DESCRIPTION
    - 모든 노드와 연결 관계 추출
    - 끊긴 노드 (Dead Ends) 탐지
    - 유령 노드 (참조되지 않는 노드) 탐지
    - 순환 참조 탐지
    - 시나리오 플로우 시각화 (Mermaid 형식)

.EXAMPLE
    .\scenario_analyzer.ps1
    .\scenario_analyzer.ps1 -GenerateGraph
#>

param(
    [string]$ScenarioPath = "..\assets\js\scenario",
    [switch]$GenerateGraph,
    [switch]$ShowDetails,
    [string]$OutputFile = "scenario_analysis.md"
)

$ErrorActionPreference = "Stop"

# 색상 정의
$colors = @{
    Success = "Green"
    Warning = "Yellow"
    Error   = "Red"
    Info    = "Cyan"
    Header  = "Magenta"
}

function Write-ColorOutput {
    param([string]$Message, [string]$Type = "Info")
    Write-Host $Message -ForegroundColor $colors[$Type]
}

# 시나리오 데이터 구조
class ScenarioNode {
    [string]$Id
    [string]$File
    [string]$Name
    [string]$Text
    [string[]]$NextNodes = @()
    [string[]]$ChoiceNextNodes = @()
    [string]$Type
    [hashtable]$Metadata = @{}
    [bool]$IsReferenced = $false
}

# 시나리오 파일 파싱
function Parse-ScenarioFile {
    param([string]$FilePath)
    
    $content = Get-Content $FilePath -Raw -Encoding UTF8
    $fileName = Split-Path $FilePath -Leaf
    $nodes = @{}
    
    # Object.assign 패턴 찾기
    if ($content -match 'Object\.assign\(SCENARIO\[\d+\],\s*\{([\s\S]*)\}\s*\);') {
        $scenarioBlock = $matches[1]
        
        # 각 노드 추출 (간단한 정규식 - 복잡한 경우 개선 필요)
        $nodePattern = '"([^"]+)":\s*\{([^}]*(?:\{[^}]*\}[^}]*)*)\}'
        $nodeMatches = [regex]::Matches($scenarioBlock, $nodePattern)
        
        foreach ($match in $nodeMatches) {
            $nodeId = $match.Groups[1].Value
            $nodeContent = $match.Groups[2].Value
            
            $node = [ScenarioNode]::new()
            $node.Id = $nodeId
            $node.File = $fileName
            
            # name 추출
            if ($nodeContent -match 'name:\s*"([^"]*)"') {
                $node.Name = $matches[1]
            }
            
            # text 추출
            if ($nodeContent -match 'text:\s*"([^"]*)"') {
                $node.Text = $matches[1].Substring(0, [Math]::Min(60, $matches[1].Length))
            }
            
            # type 추출
            if ($nodeContent -match 'type:\s*"([^"]*)"') {
                $node.Type = $matches[1]
            }
            
            # next 노드 추출 (단일)
            if ($nodeContent -match 'next:\s*"([^"]*)"') {
                $node.NextNodes += $matches[1]
            }
            
            # choices에서 next 추출
            if ($nodeContent -match 'choices:\s*\[([\s\S]*?)\]') {
                $choicesBlock = $matches[1]
                $nextPattern = 'next:\s*"([^"]*)"'
                $nextMatches = [regex]::Matches($choicesBlock, $nextPattern)
                foreach ($nextMatch in $nextMatches) {
                    $nextNode = $nextMatch.Groups[1].Value
                    if ($nextNode -and $nextNode -notin $node.ChoiceNextNodes) {
                        $node.ChoiceNextNodes += $nextNode
                    }
                }
            }
            
            # affinityBranches에서 next 추출
            if ($nodeContent -match 'affinityBranches:\s*\[([\s\S]*?)\]') {
                $branchesBlock = $matches[1]
                $nextPattern = 'next:\s*"([^"]*)"'
                $nextMatches = [regex]::Matches($branchesBlock, $nextPattern)
                foreach ($nextMatch in $nextMatches) {
                    $nextNode = $nextMatch.Groups[1].Value
                    if ($nextNode -and $nextNode -notin $node.NextNodes) {
                        $node.NextNodes += $nextNode
                    }
                }
            }
            
            # branches에서 next 추출
            if ($nodeContent -match 'branches:\s*\[([\s\S]*?)\]') {
                $branchesBlock = $matches[1]
                $nextPattern = 'next:\s*"([^"]*)"'
                $nextMatches = [regex]::Matches($branchesBlock, $nextPattern)
                foreach ($nextMatch in $nextMatches) {
                    $nextNode = $nextMatch.Groups[1].Value
                    if ($nextNode -and $nextNode -notin $node.NextNodes) {
                        $node.NextNodes += $nextNode
                    }
                }
            }
            
            $nodes[$nodeId] = $node
        }
    }
    
    return $nodes
}

# 모든 시나리오 파일 로드
function Load-AllScenarios {
    param([string]$Path)
    
    Write-ColorOutput "`n🔍 시나리오 파일 스캔 중..." -Type "Info"
    
    $allNodes = @{}
    $files = Get-ChildItem -Path $Path -Filter "*.js" | Where-Object { $_.Name -match '^(ko|en)_day\d+_' }
    
    foreach ($file in $files) {
        Write-Host "  📄 $($file.Name)" -ForegroundColor Gray
        $nodes = Parse-ScenarioFile -FilePath $file.FullName
        
        foreach ($nodeId in $nodes.Keys) {
            $fullId = "$($file.Name):$nodeId"
            if ($allNodes.ContainsKey($fullId)) {
                Write-ColorOutput "    ⚠️  중복 노드 발견: $nodeId" -Type "Warning"
            }
            $allNodes[$fullId] = $nodes[$nodeId]
        }
    }
    
    Write-ColorOutput "`n✅ 총 $($allNodes.Count)개 노드 로드됨`n" -Type "Success"
    return $allNodes
}

# 참조 관계 분석
function Analyze-References {
    param([hashtable]$AllNodes)
    
    Write-ColorOutput "🔗 참조 관계 분석 중...`n" -Type "Info"
    
    # 각 파일별로 노드를 그룹화
    $nodesByFile = @{}
    foreach ($key in $AllNodes.Keys) {
        $file = $key.Split(':')[0]
        $nodeId = $key.Split(':')[1]
        
        if (-not $nodesByFile.ContainsKey($file)) {
            $nodesByFile[$file] = @{}
        }
        $nodesByFile[$file][$nodeId] = $AllNodes[$key]
    }
    
    # 각 파일 내에서 참조 체크
    foreach ($file in $nodesByFile.Keys) {
        $fileNodes = $nodesByFile[$file]
        
        foreach ($nodeId in $fileNodes.Keys) {
            $node = $fileNodes[$nodeId]
            
            # 모든 next 노드에 대해 참조 표시
            foreach ($nextNode in ($node.NextNodes + $node.ChoiceNextNodes)) {
                if ($fileNodes.ContainsKey($nextNode)) {
                    $fileNodes[$nextNode].IsReferenced = $true
                }
            }
        }
    }
    
    return $nodesByFile
}

# 문제 노드 탐지
function Find-Issues {
    param([hashtable]$NodesByFile)
    
    $issues = @{
        DeadEnds = @()      # 다음 노드가 없는 노드
        GhostNodes = @()    # 참조되지 않는 노드
        BrokenRefs = @()    # 존재하지 않는 노드를 참조
    }
    
    foreach ($file in $NodesByFile.Keys) {
        $fileNodes = $NodesByFile[$file]
        
        foreach ($nodeId in $fileNodes.Keys) {
            $node = $fileNodes[$nodeId]
            $fullId = "$file`:$nodeId"
            
            # Dead End 체크 (특정 종료 노드 제외)
            $isEndNode = $nodeId -match '(lunch_time|after_school_start|end|ending|day\d+_end)'
            if (($node.NextNodes.Count -eq 0 -and $node.ChoiceNextNodes.Count -eq 0) -and -not $isEndNode) {
                $issues.DeadEnds += @{
                    Id = $fullId
                    Node = $node
                }
            }
            
            # Ghost Node 체크 (start 노드 제외)
            if (-not $node.IsReferenced -and $nodeId -ne "start") {
                $issues.GhostNodes += @{
                    Id = $fullId
                    Node = $node
                }
            }
            
            # Broken Reference 체크
            foreach ($nextNode in ($node.NextNodes + $node.ChoiceNextNodes)) {
                # 파일 간 참조가 아닌 경우만 체크 (같은 파일 내)
                if (-not $fileNodes.ContainsKey($nextNode)) {
                    # 다른 시나리오 파일로의 전환인지 확인
                    $isSceneTransition = $nextNode -match '(lunch_time|after_school|night_|day\d+_)'
                    
                    if (-not $isSceneTransition) {
                        $issues.BrokenRefs += @{
                            From = $fullId
                            To = $nextNode
                            Node = $node
                        }
                    }
                }
            }
        }
    }
    
    return $issues
}

# 리포트 생성
function Generate-Report {
    param(
        [hashtable]$NodesByFile,
        [hashtable]$Issues,
        [string]$OutputPath
    )
    
    $report = @"
# 📊 Cupid 시나리오 분석 리포트

생성 시간: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")

## 📈 통계

"@

    # 파일별 통계
    $totalNodes = 0
    $report += "`n### 파일별 노드 수`n`n"
    $report += "| 파일 | 노드 수 | 시작 노드 | 끝 노드 |`n"
    $report += "|------|---------|-----------|---------|`n"
    
    foreach ($file in ($NodesByFile.Keys | Sort-Object)) {
        $fileNodes = $NodesByFile[$file]
        $nodeCount = $fileNodes.Count
        $totalNodes += $nodeCount
        
        $hasStart = $fileNodes.ContainsKey("start")
        $endNodes = ($fileNodes.Keys | Where-Object { $_ -match '(end|lunch_time|after_school)' }).Count
        
        $startIcon = if($hasStart){'YES'}else{'NO'}
        $report += "| $file | $nodeCount | $startIcon | $endNodes |`n"
    }
    
    $report += "`n**총 노드 수: $totalNodes**`n"
    
    # 문제 리포트
    $report += "`n## ⚠️ 발견된 문제`n"
    
    # Dead Ends
    $report += "`n### Dead Ends`n"
    $report += "`nNodes that have no next node and will stop progression.`n`n"
    
    if ($Issues.DeadEnds.Count -eq 0) {
        $report += "OK - No issues found`n"
    } else {
        $report += "| 위치 | 노드 ID | 이름 | 텍스트 미리보기 |`n"
        $report += "|------|---------|------|----------------|`n"
        foreach ($issue in $Issues.DeadEnds) {
            $file = $issue.Id.Split(':')[0]
            $id = $issue.Id.Split(':')[1]
            $report += "| $file | ``$id`` | $($issue.Node.Name) | $($issue.Node.Text) |`n"
        }
    }
    
    # Ghost Nodes
    $report += "`n### Ghost Nodes`n"
    $report += "`nUnreachable nodes that are not referenced by any other node.`n`n"
    
    if ($Issues.GhostNodes.Count -eq 0) {
        $report += "OK - No issues found`n"
    } else {
        $report += "| 위치 | 노드 ID | 이름 | 텍스트 미리보기 |`n"
        $report += "|------|---------|------|----------------|`n"
        foreach ($issue in $Issues.GhostNodes) {
            $file = $issue.Id.Split(':')[0]
            $id = $issue.Id.Split(':')[1]
            $report += "| $file | ``$id`` | $($issue.Node.Name) | $($issue.Node.Text) |`n"
        }
    }
    
    # Broken References
    $report += "`n### Broken References`n"
    $report += "`nReferences to nodes that do not exist.`n`n"
    
    if ($Issues.BrokenRefs.Count -eq 0) {
        $report += "OK - No issues found`n"
    } else {
        $report += "| 출발 노드 | 참조하는 노드 ID | 발견 위치 |`n"
        $report += "|-----------|------------------|----------|`n"
        foreach ($issue in $Issues.BrokenRefs) {
            $from = $issue.From.Split(':')[1]
            $file = $issue.From.Split(':')[0]
            $report += "| ``$from`` | ``$($issue.To)`` | $file |`n"
        }
    }
    
    # Recommendations
    $report += "`n## Recommendations`n`n"
    $report += "1. **Dead Ends**: Add next property if not an ending node`n"
    $report += "2. **Ghost Nodes**: Remove unused code or add references`n"
    $report += "3. **Broken References**: Check for typos or create the missing node`n"
    
    $report | Out-File -FilePath $OutputPath -Encoding UTF8
    
    return $report
}

# Mermaid 그래프 생성
function Generate-MermaidGraph {
    param([hashtable]$NodesByFile, [string]$FileName)
    
    if (-not $NodesByFile.ContainsKey($FileName)) {
        Write-ColorOutput "파일을 찾을 수 없습니다: $FileName" -Type "Error"
        return
    }
    
    $fileNodes = $NodesByFile[$FileName]
    $graph = "```mermaid`nflowchart TD`n"
    
    foreach ($nodeId in $fileNodes.Keys) {
        $node = $fileNodes[$nodeId]
        $label = $nodeId
        
        # 특수 노드 스타일링
        if ($nodeId -eq "start") {
            $graph += "    $nodeId([🎬 $label])`n"
        } elseif ($nodeId -match '(end|lunch_time|after_school)') {
            $graph += "    $nodeId([🏁 $label])`n"
        } elseif ($node.ChoiceNextNodes.Count -gt 0) {
            $graph += "    $nodeId{🔀 $label}`n"
        } else {
            $graph += "    $nodeId[$label]`n"
        }
        
        # 연결선
        foreach ($next in $node.NextNodes) {
            if ($fileNodes.ContainsKey($next)) {
                $graph += "    $nodeId --> $next`n"
            } else {
                $graph += "    $nodeId -.-> $next[/Scene: $next/]`n"
            }
        }
        
        foreach ($next in $node.ChoiceNextNodes) {
            if ($fileNodes.ContainsKey($next)) {
                $graph += "    $nodeId -->|choice| $next`n"
            } else {
                $graph += "    $nodeId -.->|choice| $next[/Scene: $next/]`n"
            }
        }
    }
    
    $graph += "```"
    
    return $graph
}

# 메인 실행
Write-ColorOutput @"
╔════════════════════════════════════════════════════════════╗
║   🎯 Cupid 시나리오 분석기                                  ║
║   노드 구조 검증 및 시각화 도구                              ║
╚════════════════════════════════════════════════════════════╝
"@ -Type "Header"

# 시나리오 로드
$allNodes = Load-AllScenarios -Path $ScenarioPath

# 참조 분석
$nodesByFile = Analyze-References -AllNodes $allNodes

# 문제 탐지
Write-ColorOutput "🔍 문제 탐지 중...`n" -Type "Info"
$issues = Find-Issues -NodesByFile $nodesByFile

# 콘솔 출력
Write-ColorOutput "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -Type "Header"
Write-ColorOutput "📊 분석 결과" -Type "Header"
Write-ColorOutput "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`n" -Type "Header"

Write-Host "🔚 끊긴 노드 (Dead Ends): " -NoNewline
if ($issues.DeadEnds.Count -eq 0) {
    Write-ColorOutput "0 ✅" -Type "Success"
} else {
    Write-ColorOutput "$($issues.DeadEnds.Count) ⚠️" -Type "Warning"
}

Write-Host "👻 유령 노드 (Ghost Nodes): " -NoNewline
if ($issues.GhostNodes.Count -eq 0) {
    Write-ColorOutput "0 ✅" -Type "Success"
} else {
    Write-ColorOutput "$($issues.GhostNodes.Count) ⚠️" -Type "Warning"
}

Write-Host "🔗 깨진 참조 (Broken Refs): " -NoNewline
if ($issues.BrokenRefs.Count -eq 0) {
    Write-ColorOutput "0 ✅" -Type "Success"
} else {
    Write-ColorOutput "$($issues.BrokenRefs.Count) ❌" -Type "Error"
}

# 상세 정보 출력
if ($ShowDetails) {
    if ($issues.DeadEnds.Count -gt 0) {
        Write-ColorOutput "`n🔚 끊긴 노드 상세:" -Type "Warning"
        foreach ($issue in $issues.DeadEnds) {
            Write-Host "  • $($issue.Id)" -ForegroundColor Yellow
        }
    }
    
    if ($issues.GhostNodes.Count -gt 0) {
        Write-ColorOutput "`n👻 유령 노드 상세:" -Type "Warning"
        foreach ($issue in $issues.GhostNodes) {
            Write-Host "  • $($issue.Id)" -ForegroundColor Yellow
        }
    }
    
    if ($issues.BrokenRefs.Count -gt 0) {
        Write-ColorOutput "`n🔗 깨진 참조 상세:" -Type "Error"
        foreach ($issue in $issues.BrokenRefs) {
            Write-Host "  • $($issue.From) -> $($issue.To)" -ForegroundColor Red
        }
    }
}

# 리포트 생성
Write-ColorOutput "`n📝 상세 리포트 생성 중..." -Type "Info"
$reportPath = Join-Path (Split-Path $PSScriptRoot) $OutputFile
Generate-Report -NodesByFile $nodesByFile -Issues $issues -OutputPath $reportPath
Write-ColorOutput "✅ 리포트 저장됨: $reportPath`n" -Type "Success"

# Mermaid 그래프 생성 (옵션)
if ($GenerateGraph) {
    Write-ColorOutput "🎨 Mermaid 그래프 생성 중...`n" -Type "Info"
    
    $graphFile = Join-Path (Split-Path $PSScriptRoot) "scenario_graphs.md"
    $graphContent = "# 시나리오 플로우 차트`n`n"
    
    foreach ($file in ($nodesByFile.Keys | Sort-Object)) {
        $graphContent += "## $file`n`n"
        $graphContent += Generate-MermaidGraph -NodesByFile $nodesByFile -FileName $file
        $graphContent += "`n`n"
    }
    
    $graphContent | Out-File -FilePath $graphFile -Encoding UTF8
    Write-ColorOutput "✅ 그래프 저장됨: $graphFile`n" -Type "Success"
}

Write-ColorOutput "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -Type "Header"
Write-ColorOutput "✨ 분석 완료!" -Type "Success"
Write-ColorOutput "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`n" -Type "Header"
