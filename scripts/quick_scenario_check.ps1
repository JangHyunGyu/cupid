# Cupid Scenario Quick Checker
# 시나리오 파일의 노드 연결 상태를 빠르게 체크

param(
    [string]$Pattern = "day*.js"
)

$scenarioPath = Join-Path $PSScriptRoot "..\assets\js\scenario"

Write-Host "`n=== Cupid Scenario Node Checker ===" -ForegroundColor Cyan
Write-Host "Checking: $Pattern`n" -ForegroundColor Gray

$files = Get-ChildItem -Path $scenarioPath -Filter $Pattern | Sort-Object Name

if ($files.Count -eq 0) {
    Write-Host "No scenario files matched the pattern." -ForegroundColor Yellow
    return
}

$script = @'
const fs = require('fs');
const path = require('path');

const scenarioPath = process.argv[2];
const pattern = process.argv[3];

function globToRegex(glob) {
    const escaped = glob.replace(/[.+^${}()|[\]\\]/g, '\\$&');
    return new RegExp('^' + escaped.replace(/\*/g, '.*').replace(/\?/g, '.') + '$');
}

function collectTargets(scene) {
    const targets = [];
    const addTarget = (value) => {
        if (typeof value === 'string' && value.trim()) targets.push(value);
    };

    addTarget(scene.next);
    addTarget(scene.fallback);

    (scene.choices || []).forEach(choice => {
        addTarget(choice.next);
        addTarget(choice.fallback);
        (choice.affinityBranches || []).forEach(branch => addTarget(branch.next));
    });

    (scene.branches || []).forEach(branch => addTarget(branch.next));
    (scene.affinityBranches || []).forEach(branch => addTarget(branch.next));

    return targets;
}

const fileRegex = globToRegex(pattern);
const files = fs.readdirSync(scenarioPath)
    .filter(file => fileRegex.test(file))
    .sort((left, right) => left.localeCompare(right));

if (files.length === 0) {
    console.log('[NO_FILES] Pattern matched no scenario files.');
    process.exit(0);
}

const allScenes = new Map();
const fileSceneIds = new Map();
const loadErrors = [];

for (const file of files) {
    const localScenario = {};
    for (let day = 0; day <= 5; day++) localScenario[day] = {};

    try {
        const source = fs.readFileSync(path.join(scenarioPath, file), 'utf8');
        new Function('SCENARIO', 'Object', source)(localScenario, Object);
    } catch (error) {
        loadErrors.push({ file, message: error.message });
        continue;
    }

    const sceneIds = [];
    for (const [day, scenes] of Object.entries(localScenario)) {
        for (const [sceneId, scene] of Object.entries(scenes)) {
            allScenes.set(sceneId, { day: Number(day), file, scene });
            sceneIds.push(sceneId);
        }
    }

    fileSceneIds.set(file, sceneIds);
}

const allSceneIds = new Set(allScenes.keys());
const globalReferences = new Set();
for (const { scene } of allScenes.values()) {
    for (const target of collectTargets(scene)) globalReferences.add(target);
}

const entryScenes = new Set([
    'start', 'morning2_start', 'morning3_start', 'morning4_start', 'morning5_start',
    'lunch_start', 'lunch2_start', 'lunch3_start', 'lunch4_start', 'lunch5_start',
    'after_start', 'after2_start', 'after3_start', 'after4_start', 'after5_start',
    'night_start', 'night2_start', 'night3_start', 'night4_start', 'night5_start'
]);

console.log('GLOBAL_NODE_COUNT=' + allSceneIds.size);
for (const error of loadErrors) {
    console.log('LOAD_ERROR=' + error.file + '|' + error.message);
}

for (const file of files) {
    const sceneIds = fileSceneIds.get(file) || [];
    const references = [];
    for (const sceneId of sceneIds) {
        const scene = allScenes.get(sceneId)?.scene;
        if (!scene) continue;
        references.push(...collectTargets(scene));
    }

    const broken = [...new Set(references.filter(target => !target.endsWith('.html') && !allSceneIds.has(target)))];
    const ghost = sceneIds.filter(sceneId => !entryScenes.has(sceneId) && !globalReferences.has(sceneId));
    const deadEnds = sceneIds.filter(sceneId => {
        const scene = allScenes.get(sceneId)?.scene;
        if (!scene) return false;
        const hasTransition = Boolean(scene.next || scene.fallback || (scene.choices && scene.choices.length) || (scene.branches && scene.branches.length) || (scene.affinityBranches && scene.affinityBranches.length));
        return !hasTransition && scene.type !== 'credits' && scene.type !== 'input' && scene.type !== 'free_talk';
    });

    console.log('FILE=' + file);
    console.log('TOTAL=' + sceneIds.length);
    console.log('REFERENCES=' + references.length);
    console.log('GHOST=' + ghost.join(','));
    console.log('BROKEN=' + broken.join(','));
    console.log('DEAD=' + deadEnds.join(','));
}

console.log('ALL_NODES_BEGIN');
for (const file of files) {
    const sceneIds = fileSceneIds.get(file) || [];
    console.log('=== ' + file + ' ===');
    sceneIds.forEach(sceneId => console.log(sceneId));
}
console.log('ALL_NODES_END');
'@

$result = $script | node - $scenarioPath $Pattern

$globalCount = 0
$currentFile = $null
$captureAllNodes = $false
$allNodeLines = New-Object System.Collections.Generic.List[string]
$summary = @{}

foreach ($line in $result) {
    if ($line -eq 'ALL_NODES_BEGIN') {
        $captureAllNodes = $true
        continue
    }

    if ($line -eq 'ALL_NODES_END') {
        $captureAllNodes = $false
        continue
    }

    if ($captureAllNodes) {
        $allNodeLines.Add($line)
        continue
    }

    if ($line.StartsWith('GLOBAL_NODE_COUNT=')) {
        $globalCount = [int]$line.Substring('GLOBAL_NODE_COUNT='.Length)
        continue
    }

    if ($line.StartsWith('LOAD_ERROR=')) {
        $payload = $line.Substring('LOAD_ERROR='.Length)
        $parts = $payload -split '\|', 2
        Write-Host "[LOAD ERROR] $($parts[0]): $($parts[1])" -ForegroundColor Red
        continue
    }

    if ($line.StartsWith('FILE=')) {
        $currentFile = $line.Substring('FILE='.Length)
        $summary[$currentFile] = [ordered]@{ Total = 0; References = 0; Ghost = @(); Broken = @(); Dead = @() }
        continue
    }

    if (-not $currentFile) { continue }

    if ($line.StartsWith('TOTAL=')) {
        $summary[$currentFile].Total = [int]$line.Substring('TOTAL='.Length)
    } elseif ($line.StartsWith('REFERENCES=')) {
        $summary[$currentFile].References = [int]$line.Substring('REFERENCES='.Length)
    } elseif ($line.StartsWith('GHOST=')) {
        $payload = $line.Substring('GHOST='.Length)
        $summary[$currentFile].Ghost = if ($payload) { $payload -split ',' } else { @() }
    } elseif ($line.StartsWith('BROKEN=')) {
        $payload = $line.Substring('BROKEN='.Length)
        $summary[$currentFile].Broken = if ($payload) { $payload -split ',' } else { @() }
    } elseif ($line.StartsWith('DEAD=')) {
        $payload = $line.Substring('DEAD='.Length)
        $summary[$currentFile].Dead = if ($payload) { $payload -split ',' } else { @() }
    }
}

Write-Host "Building global node index..." -ForegroundColor Gray
Write-Host "Total global nodes: $globalCount`n" -ForegroundColor Green

foreach ($file in $files | Sort-Object Name) {
    $item = $summary[$file.Name]
    if (-not $item) { continue }

    Write-Host "`n[$($file.Name)]" -ForegroundColor Yellow
    Write-Host "  Total Nodes: $($item.Total)" -ForegroundColor White
    Write-Host "  Referenced Nodes: $($item.References)" -ForegroundColor White

    if ($item.Ghost.Count -gt 0) {
        Write-Host "`n  Ghost Nodes (unreferenced globally):" -ForegroundColor Magenta
        foreach ($node in $item.Ghost) {
            Write-Host "    - $node" -ForegroundColor Red
        }
    }

    if ($item.Broken.Count -gt 0) {
        Write-Host "`n  Broken References (not found globally):" -ForegroundColor Red
        foreach ($node in $item.Broken) {
            Write-Host "    - $node" -ForegroundColor Red
        }
    }

    if ($item.Dead.Count -gt 0) {
        Write-Host "`n  Dead Ends (no next node):" -ForegroundColor Yellow
        foreach ($node in $item.Dead) {
            Write-Host "    - $node" -ForegroundColor Yellow
        }
    }

    if ($item.Ghost.Count -eq 0 -and $item.Broken.Count -eq 0 -and $item.Dead.Count -eq 0) {
        Write-Host "  OK - No issues found!" -ForegroundColor Green
    }
}

Write-Host "`n=== Check Complete ===" -ForegroundColor Cyan

Write-Host "`nGenerating all_nodes.txt..." -ForegroundColor Gray
$allNodesPath = Join-Path (Split-Path $scenarioPath) "all_nodes.txt"
$allNodeLines | Out-File -FilePath $allNodesPath -Encoding UTF8
Write-Host "Saved: $allNodesPath`n" -ForegroundColor Green
