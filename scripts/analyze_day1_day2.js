/**
 * Day 1 & Day 2 시나리오 구조 분석 스크립트
 * - 끊어지는 next 참조 (dangling references)
 * - 유령 노드 (아무데서도 참조되지 않는 노드)
 * - 막다른 노드 (exit 없음)
 * - 배경 누락 체크
 */

const fs = require('fs');
const path = require('path');

const scenarioDir = path.join(__dirname, '..', 'assets', 'js', 'scenario');

function analyzeDay(dayNum, files, entryPoints) {
    console.log(`\n${'='.repeat(70)}`);
    console.log(`  Day ${dayNum} 시나리오 구조 분석`);
    console.log(`${'='.repeat(70)}\n`);

    const allNodes = {};
    const nodeFile = {};

    for (const file of files) {
        const filePath = path.join(scenarioDir, file);
        if (!fs.existsSync(filePath)) {
            console.error(`  파일 없음: ${file}`);
            continue;
        }
        const content = fs.readFileSync(filePath, 'utf-8');

        // Find the SCENARIO assignment - try multiple patterns
        let body = null;
        const assignMatch = content.match(/Object\.assign\(SCENARIO\[\d+\],\s*\{([\s\S]*)\}\);/);
        if (assignMatch) {
            body = assignMatch[1];
        } else {
            console.error(`  Object.assign 패턴 미발견: ${file}`);
            continue;
        }

        // Find all node keys
        const anyKeyRegex = /^\s*"([^"]+)":\s*\{/gm;
        let anyMatch;
        const nodeKeys = [];
        while ((anyMatch = anyKeyRegex.exec(body)) !== null) {
            nodeKeys.push(anyMatch[1]);
        }

        for (const key of nodeKeys) {
            nodeFile[key] = file;
        }

        // Extract properties for each node
        for (const key of nodeKeys) {
            const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
                hasFade: /fade\s*:\s*true/.test(block),
                block: block
            };

            // Extract ALL next references (from next, choices, branches)
            const allNextRegex = /next\s*:\s*"([^"]+)"/g;
            let cn;
            while ((cn = allNextRegex.exec(block)) !== null) {
                if (!node.nextRefs.includes(cn[1])) {
                    node.nextRefs.push(cn[1]);
                }
            }

            // Check for exit types
            node.hasBranches = /branches\s*:/.test(block);
            node.hasChoices = /choices\s*:/.test(block);
            node.hasNext = /^\s*next\s*:/m.test(block);
            node.hasExit = node.hasNext || node.hasBranches || node.hasChoices;

            allNodes[key] = node;
        }
    }

    const totalNodes = Object.keys(allNodes).length;
    console.log(`  총 노드 수: ${totalNodes}`);
    console.log(`  파일: ${files.join(', ')}\n`);

    let issues = 0;

    // 1. Dangling references
    console.log(`--- 1. 끊어지는 참조 (next가 존재하지 않는 노드를 가리킴) ---`);
    const externalRefs = ['index.html'];
    const danglingRefs = [];

    for (const [key, node] of Object.entries(allNodes)) {
        for (const ref of node.nextRefs) {
            if (!allNodes[ref] && !externalRefs.includes(ref)) {
                danglingRefs.push({ from: key, to: ref, file: node.file });
            }
        }
    }

    if (danglingRefs.length === 0) {
        console.log('  없음 ✅\n');
    } else {
        for (const d of danglingRefs) {
            console.log(`  ❌ [${d.file}] "${d.from}" → "${d.to}" (존재하지 않는 노드)`);
            issues++;
        }
        console.log();
    }

    // 2. Orphan nodes
    console.log(`--- 2. 유령 노드 (아무데서도 참조되지 않는 노드) ---`);
    const referenced = new Set();
    const entrySet = new Set(entryPoints);

    for (const [key, node] of Object.entries(allNodes)) {
        for (const ref of node.nextRefs) {
            referenced.add(ref);
        }
    }

    const orphans = [];
    for (const key of Object.keys(allNodes)) {
        if (!referenced.has(key) && !entrySet.has(key)) {
            orphans.push({ key, file: allNodes[key].file });
        }
    }

    if (orphans.length === 0) {
        console.log('  없음 ✅\n');
    } else {
        for (const o of orphans) {
            console.log(`  👻 [${o.file}] "${o.key}"`);
            issues++;
        }
        console.log();
    }

    // 3. Dead-end nodes
    console.log(`--- 3. 막다른 노드 (next/choices/branches 없음) ---`);
    const deadEnds = [];
    for (const [key, node] of Object.entries(allNodes)) {
        if (!node.hasExit) {
            deadEnds.push({ key, file: node.file });
        }
    }

    if (deadEnds.length === 0) {
        console.log('  없음 ✅\n');
    } else {
        for (const d of deadEnds) {
            console.log(`  🛑 [${d.file}] "${d.key}"`);
            issues++;
        }
        console.log();
    }

    // 4. Background missing after fade
    console.log(`--- 4. 배경 누락 (fade 후 background 없는 노드) ---`);
    const fadeIssues = [];
    for (const [key, node] of Object.entries(allNodes)) {
        if (node.hasFade) {
            for (const ref of node.nextRefs) {
                if (allNodes[ref] && !allNodes[ref].hasBackground) {
                    fadeIssues.push({ fadeNode: key, target: ref, targetFile: allNodes[ref].file });
                }
            }
        }
    }

    if (fadeIssues.length === 0) {
        console.log('  없음 ✅\n');
    } else {
        for (const f of fadeIssues) {
            console.log(`  ⚠️  [${f.targetFile}] "${f.fadeNode}" (fade) → "${f.target}" (background 없음)`);
        }
        console.log();
    }

    // 5. Entry points without background
    console.log(`--- 5. 진입점에 배경 없는 노드 ---`);
    let entryIssues = 0;
    for (const ep of entryPoints) {
        if (allNodes[ep] && !allNodes[ep].hasBackground) {
            console.log(`  ⚠️  [${allNodes[ep].file}] 진입점 "${ep}" 에 background 없음`);
            entryIssues++;
            issues++;
        }
    }
    if (entryIssues === 0) {
        console.log('  없음 ✅\n');
    } else {
        console.log();
    }

    // 6. Formatting issues - properties on same line
    console.log(`--- 6. 포맷팅 오류 (한 줄에 여러 속성 합쳐짐) ---`);
    let formatIssues = 0;
    for (const file of files) {
        const filePath = path.join(scenarioDir, file);
        if (!fs.existsSync(filePath)) continue;
        const content = fs.readFileSync(filePath, 'utf-8');
        const lines = content.split('\n');
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            // Check for multiple property assignments on one line (property: value,   property: value)
            // Look for patterns like:  something: value,        something: value
            const multiPropMatch = line.match(/,\s{2,}(\w+)\s*:/g);
            if (multiPropMatch && multiPropMatch.length > 0) {
                // Exclude objects like stats: { Seoyeon: { affinity: 5 }, Yuna: { affinity: 3 } }
                // These are intentional single-line objects
                // Only flag if the duplicated part is a top-level node property
                const topProps = ['next', 'text', 'name', 'character', 'background', 'bgm', 'stats', 'setFlag', 'choices', 'branches', 'fade', 'night', 'silhouette', 'freeTalk'];
                for (const m of multiPropMatch) {
                    const propName = m.match(/,\s{2,}(\w+)\s*:/)[1];
                    if (topProps.includes(propName)) {
                        console.log(`  ⚠️  [${file}:${i + 1}] 한 줄에 합쳐진 속성: ...${m.trim()}`);
                        formatIssues++;
                        issues++;
                    }
                }
            }
        }
    }
    if (formatIssues === 0) {
        console.log('  없음 ✅\n');
    } else {
        console.log();
    }

    console.log(`  총 이슈: ${issues}개${issues === 0 ? ' ✅' : ' ❌'}\n`);
    return { issues, danglingRefs, orphans, deadEnds, fadeIssues, totalNodes };
}

// =============================================
// Day 1 분석
// =============================================
const day1Files = [
    'ko_day1_1_morning.js',
    'ko_day1_2_lunch.js',
    'ko_day1_3_afterschool.js',
    'ko_day1_4_night.js'
];
const day1EntryPoints = [
    'day1_start', 'day1_lunch_start', 'day1_afternoon_start', 'day1_night_start'
];
const day1Result = analyzeDay(1, day1Files, day1EntryPoints);

// =============================================
// Day 2 분석
// =============================================
const day2Files = [
    'ko_day2_1_morning.js',
    'ko_day2_2_lunch.js',
    'ko_day2_3_afterschool.js',
    'ko_day2_4_night.js'
];
const day2EntryPoints = [
    'day2_start', 'day2_lunch_start', 'day2_afternoon_start', 'day2_night_start'
];
const day2Result = analyzeDay(2, day2Files, day2EntryPoints);

// Summary
console.log(`${'='.repeat(70)}`);
console.log(`  전체 요약`);
console.log(`${'='.repeat(70)}`);
console.log(`  Day 1: ${day1Result.totalNodes}개 노드, ${day1Result.issues}개 이슈`);
console.log(`  Day 2: ${day2Result.totalNodes}개 노드, ${day2Result.issues}개 이슈`);
console.log(`${'='.repeat(70)}`);
