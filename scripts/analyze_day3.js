/**
 * Day 3 시나리오 구조 분석 스크립트
 * - 끊어지는 next 참조 (dangling references)
 * - 유령 노드 (아무데서도 참조되지 않는 노드)
 * - 배경 누락 체크 (첫 등장 시 background 없음)
 */

const fs = require('fs');
const path = require('path');

const files = [
    'ko_day3_1_morning.js',
    'ko_day3_2_lunch.js',
    'ko_day3_3_afterschool.js',
    'ko_day3_4_night.js'
];

const scenarioDir = path.join(__dirname, '..', 'assets', 'js', 'scenario');

// Collect all nodes
const allNodes = {};
const nodeFile = {}; // nodeId -> filename

for (const file of files) {
    const content = fs.readFileSync(path.join(scenarioDir, file), 'utf-8');
    
    // Parse node keys using regex
    const nodeRegex = /"([^"]+)":\s*\{/g;
    let match;
    const lines = content.split('\n');
    
    // More robust: extract node IDs and their properties
    // We'll use a simpler approach: evaluate the file in a sandbox
    // Actually, let's use regex to find all node definitions and their properties
    
    // Find all top-level node keys within Object.assign(SCENARIO[3], { ... })
    const assignMatch = content.match(/Object\.assign\(SCENARIO\[3\],\s*\{([\s\S]*)\}\);/);
    if (!assignMatch) {
        console.error(`Could not find Object.assign in ${file}`);
        continue;
    }
    
    const body = assignMatch[1];
    
    // Find node definitions - keys at the top level of the object
    // These are strings like "day3_xxx": {
    const nodeDefRegex = /^\s*"(day3_[^"]+)":\s*\{/gm;
    let nodeMatch;
    const nodeKeys = [];
    while ((nodeMatch = nodeDefRegex.exec(body)) !== null) {
        nodeKeys.push(nodeMatch[1]);
    }
    
    // Also check for non-day3 keys (like "day4_start")
    const anyKeyRegex = /^\s*"([^"]+)":\s*\{/gm;
    let anyMatch;
    while ((anyMatch = anyKeyRegex.exec(body)) !== null) {
        const key = anyMatch[1];
        if (!nodeKeys.includes(key)) {
            nodeKeys.push(key);
        }
    }
    
    for (const key of nodeKeys) {
        nodeFile[key] = file;
    }
    
    // Extract properties for each node
    // We need: next, choices, branches, background, character, name, text
    for (const key of nodeKeys) {
        const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        // Find the node's content block
        const nodeBlockRegex = new RegExp(`"${escapedKey}":\\s*\\{([\\s\\S]*?)\\n    \\}`, 'm');
        const blockMatch = body.match(nodeBlockRegex);
        
        if (!blockMatch) continue;
        
        const block = blockMatch[1];
        
        const node = {
            file: file,
            hasBackground: /background\s*:/.test(block),
            hasCharacter: /character\s*:/.test(block),
            hasText: /text\s*:/.test(block),
            hasName: /name\s*:/.test(block),
            nextRefs: [],
            hasBgm: /bgm\s*:/.test(block),
        };
        
        // Extract direct next
        const nextMatch = block.match(/^\s*next\s*:\s*"([^"]+)"/m);
        if (nextMatch) {
            node.nextRefs.push(nextMatch[1]);
        }
        
        // Extract choices next
        const choicesNextRegex = /next\s*:\s*"([^"]+)"/g;
        let cn;
        while ((cn = choicesNextRegex.exec(block)) !== null) {
            if (!node.nextRefs.includes(cn[1])) {
                node.nextRefs.push(cn[1]);
            }
        }
        
        // Check for branches
        node.hasBranches = /branches\s*:/.test(block);
        node.hasChoices = /choices\s*:/.test(block);
        node.hasNext = /^\s*next\s*:/m.test(block);
        
        // Check if node has any exit (next, choices, or branches)
        node.hasExit = node.hasNext || node.hasBranches || node.hasChoices;
        
        allNodes[key] = node;
    }
}

console.log(`\n=== Day 3 시나리오 구조 분석 ===\n`);
console.log(`총 노드 수: ${Object.keys(allNodes).length}\n`);

// 1. Find dangling references (next points to non-existent node)
console.log(`--- 1. 끊어지는 참조 (next가 존재하지 않는 노드를 가리킴) ---`);
const danglingRefs = [];
const externalRefs = ['index.html']; // Known external references

for (const [key, node] of Object.entries(allNodes)) {
    for (const ref of node.nextRefs) {
        if (!allNodes[ref] && !externalRefs.includes(ref)) {
            danglingRefs.push({ from: key, to: ref, file: node.file });
        }
    }
}

if (danglingRefs.length === 0) {
    console.log('없음 ✅\n');
} else {
    for (const d of danglingRefs) {
        console.log(`  ❌ [${d.file}] "${d.from}" → "${d.to}" (존재하지 않는 노드)`);
    }
    console.log();
}

// 2. Find orphan nodes (never referenced by anyone)
console.log(`--- 2. 유령 노드 (아무데서도 참조되지 않는 노드) ---`);
const referenced = new Set();
// Known entry points
const entryPoints = new Set([
    'day3_start',
    'day3_nurse_home_morning',
    'day3_lunch_start',
    'day3_afternoon_start',
    'day3_night_start',
    'day4_start'
]);

for (const [key, node] of Object.entries(allNodes)) {
    for (const ref of node.nextRefs) {
        referenced.add(ref);
    }
}

const orphans = [];
for (const key of Object.keys(allNodes)) {
    if (!referenced.has(key) && !entryPoints.has(key)) {
        orphans.push({ key, file: allNodes[key].file });
    }
}

if (orphans.length === 0) {
    console.log('없음 ✅\n');
} else {
    for (const o of orphans) {
        console.log(`  👻 [${o.file}] "${o.key}"`);
    }
    console.log();
}

// 3. Find nodes without exit (no next, no choices, no branches) - dead ends
console.log(`--- 3. 막다른 노드 (next/choices/branches 없음) ---`);
const deadEnds = [];
for (const [key, node] of Object.entries(allNodes)) {
    if (!node.hasExit) {
        deadEnds.push({ key, file: node.file });
    }
}

if (deadEnds.length === 0) {
    console.log('없음 ✅\n');
} else {
    for (const d of deadEnds) {
        console.log(`  🛑 [${d.file}] "${d.key}"`);
    }
    console.log();
}

// 4. Nodes without background that are potential scene starters
// Check for nodes that have text but their background might be missing
// when they follow a fade or scene change
console.log(`--- 4. 배경 누락 가능성 (fade 후 background 없는 노드) ---`);
const fadeNodes = [];
for (const [key, node] of Object.entries(allNodes)) {
    // Find nodes that have fade: true
    const block = getNodeBlock(key);
    if (block && /fade\s*:\s*true/.test(block)) {
        // Check what this node points to
        for (const ref of node.nextRefs) {
            if (allNodes[ref] && !allNodes[ref].hasBackground) {
                // The target after fade doesn't set a background
                fadeNodes.push({ fadeNode: key, target: ref, targetFile: allNodes[ref].file });
            }
        }
    }
}

if (fadeNodes.length === 0) {
    console.log('없음 ✅\n');
} else {
    for (const f of fadeNodes) {
        console.log(`  ⚠️  [${f.targetFile}] "${f.fadeNode}" (fade) → "${f.target}" (background 없음)`);
    }
    console.log();
}

// 5. Entry points / scene starters without background
console.log(`--- 5. 진입점에 배경 없는 노드 ---`);
for (const ep of entryPoints) {
    if (allNodes[ep] && !allNodes[ep].hasBackground) {
        console.log(`  ⚠️  [${allNodes[ep].file}] 진입점 "${ep}" 에 background 없음`);
    }
}
console.log();

// Helper function to get node block content
function getNodeBlock(key) {
    const file = nodeFile[key];
    if (!file) return null;
    const content = fs.readFileSync(path.join(scenarioDir, file), 'utf-8');
    const assignMatch = content.match(/Object\.assign\(SCENARIO\[3\],\s*\{([\s\S]*)\}\);/);
    if (!assignMatch) return null;
    const body = assignMatch[1];
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const nodeBlockRegex = new RegExp(`"${escapedKey}":\\s*\\{([\\s\\S]*?)\\n    \\}`, 'm');
    const blockMatch = body.match(nodeBlockRegex);
    return blockMatch ? blockMatch[1] : null;
}

console.log(`=== 분석 완료 ===`);
