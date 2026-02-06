/**
 * 전체 시나리오 (Day 1~3) 종합 구조 분석 스크립트
 * =============================================
 * 이전 분석에서 발견된 False Positive 패턴을 모두 반영:
 * - affinityBranches 패턴 인식
 * - 크로스 파일 참조 (day1→day2, day2→day3 등)
 * - choices 내부 next 참조 추적
 * - 엔진 직접 호출 진입점 (start, dayN_start 등)
 */

const fs = require('fs');
const path = require('path');

const scenarioDir = path.join(__dirname, '..', 'assets', 'js', 'scenario');

// =========================================================================
// 1단계: 전체 노드 수집 (Day 1~3 모두)
// =========================================================================
const allFiles = [];
for (let day = 1; day <= 3; day++) {
    for (const period of ['morning', 'lunch', 'afterschool', 'night']) {
        allFiles.push({ file: `ko_day${day}_1_morning.js`.replace('morning', period).replace('_1_', `_${['morning','lunch','afterschool','night'].indexOf(period)+1}_`), day });
    }
}
// Fix file naming
const fileList = [];
for (let day = 1; day <= 3; day++) {
    fileList.push({ file: `ko_day${day}_1_morning.js`, day, period: 'morning' });
    fileList.push({ file: `ko_day${day}_2_lunch.js`, day, period: 'lunch' });
    fileList.push({ file: `ko_day${day}_3_afterschool.js`, day, period: 'afterschool' });
    fileList.push({ file: `ko_day${day}_4_night.js`, day, period: 'night' });
}

const globalNodes = {};   // nodeId -> { file, day, period, props... }
const globalReferenced = new Set();  // 다른 노드에서 참조되는 nodeId 집합
let parseErrors = 0;

for (const { file, day, period } of fileList) {
    const filePath = path.join(scenarioDir, file);
    if (!fs.existsSync(filePath)) {
        console.error(`  ❌ 파일 없음: ${file}`);
        parseErrors++;
        continue;
    }
    const content = fs.readFileSync(filePath, 'utf-8');

    const assignMatch = content.match(/Object\.assign\(SCENARIO\[\d+\],\s*\{([\s\S]*)\}\);/);
    if (!assignMatch) {
        console.error(`  ❌ Object.assign 패턴 미발견: ${file}`);
        parseErrors++;
        continue;
    }
    const body = assignMatch[1];

    // 모든 노드 키 수집
    const anyKeyRegex = /^\s*"([^"]+)":\s*\{/gm;
    let m;
    const nodeKeys = [];
    while ((m = anyKeyRegex.exec(body)) !== null) {
        nodeKeys.push(m[1]);
    }

    for (const key of nodeKeys) {
        const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const nodeBlockRegex = new RegExp(`"${escapedKey}":\\s*\\{([\\s\\S]*?)\\n\\s{4}\\}`, 'm');
        const blockMatch = body.match(nodeBlockRegex);
        if (!blockMatch) {
            // 탭 들여쓰기 파일도 시도
            const tabBlockRegex = new RegExp(`"${escapedKey}":\\s*\\{([\\s\\S]*?)\\n\\t\\}`, 'm');
            const tabMatch = body.match(tabBlockRegex);
            if (!tabMatch) continue;
            var block = tabMatch[1];
        } else {
            var block = blockMatch[1];
        }

        const node = {
            file, day, period, block,
            hasBackground: /background\s*:/.test(block),
            hasCharacter: /character\s*:/.test(block),
            hasText: /text\s*:/.test(block),
            hasName: /name\s*:/.test(block),
            hasBgm: /bgm\s*:/.test(block),
            hasFade: /fade\s*:\s*true/.test(block),
            hasNight: /night\s*:\s*true/.test(block),
            nextRefs: [],
            // Exit 유형
            hasDirectNext: false,
            hasBranches: /branches\s*:/.test(block),
            hasChoices: /choices\s*:/.test(block),
            hasAffinityBranches: /affinityBranches\s*:/.test(block),
            hasChangeDay: /changeDay\s*:/.test(block),
            hasType: /type\s*:/.test(block),
        };

        // 모든 next 참조 수집 (direct next, choices 내부, branches 내부)
        const allNextRegex = /next\s*:\s*"([^"]+)"/g;
        let cn;
        while ((cn = allNextRegex.exec(block)) !== null) {
            if (!node.nextRefs.includes(cn[1])) {
                node.nextRefs.push(cn[1]);
            }
        }

        // direct next 확인 (choices/branches 외부의 next)
        // 블록에서 choices/branches 이전의 next가 있는지 확인
        node.hasDirectNext = /^\s*next\s*:/m.test(block);

        // 종합 exit 판단
        node.hasExit = node.hasDirectNext || node.hasBranches || node.hasChoices || node.hasAffinityBranches || node.hasChangeDay;

        if (globalNodes[key]) {
            console.error(`  ⚠️  중복 노드 ID: "${key}" in ${globalNodes[key].file} AND ${file}`);
        }
        globalNodes[key] = node;
    }
}

// referenced 집합 구성 (모든 노드의 모든 nextRefs)
for (const [key, node] of Object.entries(globalNodes)) {
    for (const ref of node.nextRefs) {
        globalReferenced.add(ref);
    }
}

// =========================================================================
// 2단계: 분석
// =========================================================================
const totalNodes = Object.keys(globalNodes).length;

console.log(`\n${'═'.repeat(70)}`);
console.log(`  CUPID 시나리오 종합 구조 분석 (Day 1~3)`);
console.log(`${'═'.repeat(70)}`);
console.log(`  총 노드: ${totalNodes}개 (12개 파일)\n`);

// 알려진 엔진 진입점
const engineEntryPoints = new Set([
    'start',
    'day1_start', 'day1_lunch_start', 'day1_afternoon_start', 'day1_night_start',
    'day2_start', 'day2_lunch_start', 'day2_afternoon_start', 'day2_night_start',
    'day3_start', 'day3_lunch_start', 'day3_afternoon_start', 'day3_night_start',
    'day3_nurse_home_morning',
    'day4_start',
]);

let totalIssues = 0;
const realIssues = [];

// ── 검사 1: 끊어지는 참조 ──
console.log(`── 1. 끊어지는 참조 (존재하지 않는 노드를 가리킴) ──`);
const knownExternal = new Set(['index.html']);
const danglingRefs = [];

for (const [key, node] of Object.entries(globalNodes)) {
    for (const ref of node.nextRefs) {
        if (!globalNodes[ref] && !knownExternal.has(ref)) {
            danglingRefs.push({ from: key, to: ref, file: node.file });
        }
    }
}

if (danglingRefs.length === 0) {
    console.log('  없음 ✅\n');
} else {
    for (const d of danglingRefs) {
        console.log(`  ❌ [${d.file}] "${d.from}" → "${d.to}"`);
        realIssues.push({ type: 'dangling', ...d });
        totalIssues++;
    }
    console.log();
}

// ── 검사 2: 유령 노드 (아무도 참조하지 않는 노드) ──
console.log(`── 2. 유령 노드 (아무데서도 참조되지 않는 노드) ──`);
const orphans = [];

for (const key of Object.keys(globalNodes)) {
    if (!globalReferenced.has(key) && !engineEntryPoints.has(key)) {
        orphans.push({ key, file: globalNodes[key].file });
    }
}

if (orphans.length === 0) {
    console.log('  없음 ✅\n');
} else {
    for (const o of orphans) {
        console.log(`  👻 [${o.file}] "${o.key}"`);
        realIssues.push({ type: 'orphan', ...o });
        totalIssues++;
    }
    console.log();
}

// ── 검사 3: 막다른 노드 (exit 없음) ──
console.log(`── 3. 막다른 노드 (next/choices/branches/affinityBranches 없음) ──`);
const deadEnds = [];

for (const [key, node] of Object.entries(globalNodes)) {
    if (!node.hasExit) {
        deadEnds.push({ key, file: node.file });
    }
}

if (deadEnds.length === 0) {
    console.log('  없음 ✅\n');
} else {
    for (const d of deadEnds) {
        console.log(`  🛑 [${d.file}] "${d.key}"`);
        realIssues.push({ type: 'dead-end', ...d });
        totalIssues++;
    }
    console.log();
}

// ── 검사 4: 중복 노드 ID ──
console.log(`── 4. 중복 노드 ID ──`);
{
    const seen = {};
    let dupes = 0;
    for (const { file } of fileList) {
        const filePath = path.join(scenarioDir, file);
        if (!fs.existsSync(filePath)) continue;
        const content = fs.readFileSync(filePath, 'utf-8');
        const assignMatch = content.match(/Object\.assign\(SCENARIO\[\d+\],\s*\{([\s\S]*)\}\);/);
        if (!assignMatch) continue;
        const body = assignMatch[1];
        const anyKeyRegex = /^\s*"([^"]+)":\s*\{/gm;
        let m;
        while ((m = anyKeyRegex.exec(body)) !== null) {
            const key = m[1];
            if (seen[key]) {
                console.log(`  ❌ "${key}" → ${seen[key]} AND ${file}`);
                realIssues.push({ type: 'duplicate', key, file1: seen[key], file2: file });
                totalIssues++;
                dupes++;
            } else {
                seen[key] = file;
            }
        }
    }
    if (dupes === 0) console.log('  없음 ✅\n');
    else console.log();
}

// ── 검사 5: 배경 누락 (fade 후 background 없는 노드) ──
console.log(`── 5. fade 후 배경 누락 ──`);
let fadeIssueCount = 0;
for (const [key, node] of Object.entries(globalNodes)) {
    if (node.hasFade) {
        for (const ref of node.nextRefs) {
            const target = globalNodes[ref];
            if (target && !target.hasBackground) {
                // night 씬은 배경 없이 fade가 일반적이므로 제외
                if (target.hasNight) continue;
                console.log(`  ⚠️  [${target.file}] "${key}" (fade) → "${ref}" (background 없음)`);
                fadeIssueCount++;
            }
        }
    }
}
if (fadeIssueCount === 0) console.log('  없음 ✅\n');
else console.log();

// ── 검사 6: 포맷팅 오류 (한 줄에 여러 속성) ──
console.log(`── 6. 포맷팅 오류 (한 줄에 여러 속성 합쳐짐) ──`);
let formatIssues = 0;
const topProps = ['next', 'text', 'name', 'character', 'background', 'bgm', 'stats', 'setFlag', 'choices', 'branches', 'fade', 'night', 'silhouette', 'freeTalk', 'affinityBranches'];

for (const { file } of fileList) {
    const filePath = path.join(scenarioDir, file);
    if (!fs.existsSync(filePath)) continue;
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const multiPropMatch = line.match(/,\s{2,}(\w+)\s*:/g);
        if (multiPropMatch) {
            for (const m of multiPropMatch) {
                const propName = m.match(/,\s{2,}(\w+)\s*:/)[1];
                if (topProps.includes(propName)) {
                    console.log(`  ⚠️  [${file}:${i + 1}] ...${m.trim()}`);
                    formatIssues++;
                    totalIssues++;
                }
            }
        }
    }
}
if (formatIssues === 0) console.log('  없음 ✅\n');
else console.log();

// ── 검사 7: 시간대 간 연결 확인 ──
console.log(`── 7. 시간대 간 연결 (morning→lunch→afterschool→night→next day) ──`);
const transitions = [
    { from: 'day1_morning', to: 'day1_lunch_start', label: 'Day1 아침→점심' },
    { from: 'day1_lunch', to: 'day1_afternoon_start', label: 'Day1 점심→방과후' },
    { from: 'day1_afterschool', to: 'day1_night_start', label: 'Day1 방과후→밤' },
    { from: 'day1_night', to: 'day2_start', label: 'Day1 밤→Day2' },
    { from: 'day2_morning', to: 'day2_lunch_start', label: 'Day2 아침→점심' },
    { from: 'day2_lunch', to: 'day2_afternoon_start', label: 'Day2 점심→방과후' },
    { from: 'day2_afterschool', to: 'day2_night_start', label: 'Day2 방과후→밤' },
    { from: 'day2_night', to: 'day3_start', label: 'Day2 밤→Day3' },
    { from: 'day3_morning', to: 'day3_lunch_start', label: 'Day3 아침→점심' },
    { from: 'day3_lunch', to: 'day3_afternoon_start', label: 'Day3 점심→방과후' },
    { from: 'day3_afterschool', to: 'day3_night_start', label: 'Day3 방과후→밤' },
];

for (const t of transitions) {
    // t.to 노드가 존재하는지, 그리고 어딘가에서 참조되는지 확인
    if (!globalNodes[t.to]) {
        console.log(`  ❌ ${t.label}: 대상 노드 "${t.to}" 존재하지 않음`);
        totalIssues++;
    } else if (!globalReferenced.has(t.to) && !engineEntryPoints.has(t.to)) {
        console.log(`  ⚠️  ${t.label}: "${t.to}" 존재하지만 아무도 참조하지 않음`);
    } else {
        console.log(`  ✅ ${t.label}: "${t.to}" 연결 OK`);
    }
}
console.log();

// ── 검사 8: 진입점 배경 확인 ──
console.log(`── 8. 진입점 배경 확인 ──`);
let entryBgIssues = 0;
for (const ep of engineEntryPoints) {
    if (globalNodes[ep] && !globalNodes[ep].hasBackground) {
        // night_start는 밤이므로 배경 없어도 OK
        if (ep.includes('night')) continue;
        console.log(`  ⚠️  [${globalNodes[ep].file}] "${ep}" background 없음`);
        entryBgIssues++;
    }
}
if (entryBgIssues === 0) console.log('  없음 ✅\n');
else console.log();

// ── 검사 9: text/name 누락 ──
console.log(`── 9. text 또는 name 누락 ──`);
let missingTextName = 0;
for (const [key, node] of Object.entries(globalNodes)) {
    if (!node.hasText) {
        console.log(`  ⚠️  [${node.file}] "${key}" text 없음`);
        missingTextName++;
    }
    if (!node.hasName) {
        console.log(`  ⚠️  [${node.file}] "${key}" name 없음`);
        missingTextName++;
    }
}
if (missingTextName === 0) console.log('  없음 ✅\n');
else console.log();

// ── 검사 10: JS 문법 오류 체크 (require 시도) ──
console.log(`── 10. JS 문법 오류 (require 로드 테스트) ──`);
let syntaxErrors = 0;
for (const { file } of fileList) {
    const filePath = path.join(scenarioDir, file);
    if (!fs.existsSync(filePath)) continue;
    try {
        // 전역 SCENARIO 모킹
        if (typeof global.SCENARIO === 'undefined') {
            global.SCENARIO = {};
        }
        for (let d = 1; d <= 3; d++) {
            if (!global.SCENARIO[d]) global.SCENARIO[d] = {};
        }
        // 캐시 삭제 후 로드
        delete require.cache[require.resolve(filePath)];
        require(filePath);
        console.log(`  ✅ ${file}`);
    } catch (e) {
        console.log(`  ❌ ${file}: ${e.message.split('\n')[0]}`);
        syntaxErrors++;
        totalIssues++;
    }
}
console.log();

// =========================================================================
// 요약
// =========================================================================
console.log(`${'═'.repeat(70)}`);
console.log(`  요약`);
console.log(`${'═'.repeat(70)}`);

const dayStats = {};
for (let d = 1; d <= 3; d++) {
    dayStats[d] = { nodes: 0, files: 0 };
}
for (const [key, node] of Object.entries(globalNodes)) {
    dayStats[node.day].nodes++;
}
for (const { day } of fileList) {
    if (dayStats[day]) dayStats[day].files++;
}

for (let d = 1; d <= 3; d++) {
    console.log(`  Day ${d}: ${dayStats[d].nodes}개 노드 (${dayStats[d].files}개 파일)`);
}
console.log(`  ─────────────────`);
console.log(`  합계: ${totalNodes}개 노드`);
console.log();

if (totalIssues === 0 && syntaxErrors === 0 && parseErrors === 0) {
    console.log(`  🎉 문제 없음! 모든 시나리오 연결이 정상입니다.`);
} else {
    console.log(`  ⚠️  발견된 이슈: ${totalIssues}개`);
    if (syntaxErrors > 0) console.log(`  ❌ 문법 오류: ${syntaxErrors}개`);
    if (danglingRefs.length > 0) console.log(`  ❌ 끊어진 참조: ${danglingRefs.length}개`);
    if (orphans.length > 0) console.log(`  👻 유령 노드: ${orphans.length}개`);
    if (deadEnds.length > 0) console.log(`  🛑 막다른 노드: ${deadEnds.length}개`);
}
console.log(`${'═'.repeat(70)}\n`);
