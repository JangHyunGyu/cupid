/**
 * Cupid 시나리오 전체 검증 스크립트
 * - 모든 노드 연결 확인 (끊어진 링크)
 * - 도달 불가능한 노드 탐지
 * - 데드엔드 탐지 (next 없는 비-엔딩 노드)
 * - 선택지 분기 검증
 * - i18n 텍스트 누락 확인
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ─── 1. 시나리오 로드 ───
const SCENARIO = {};
const scenarioDir = 'assets/js/scenario';
const files = fs.readdirSync(scenarioDir).filter(f => f.endsWith('.js') && f.startsWith('day'));

for (const file of files) {
    const code = fs.readFileSync(path.join(scenarioDir, file), 'utf8');
    try {
        vm.runInNewContext(code, { SCENARIO, Object });
    } catch (e) {
        console.error(`❌ JS 파싱 에러: ${file} — ${e.message}`);
    }
}

// 모든 노드를 하나의 맵으로 합침
const allNodes = {};
const nodeToFile = {};
for (const [segKey, segment] of Object.entries(SCENARIO)) {
    for (const [nodeId, nodeData] of Object.entries(segment)) {
        if (allNodes[nodeId]) {
            console.warn(`⚠️  중복 노드 ID: "${nodeId}" (segment ${segKey})`);
        }
        allNodes[nodeId] = nodeData;
        nodeToFile[nodeId] = `segment ${segKey}`;
    }
}

console.log(`\n📊 총 노드 수: ${Object.keys(allNodes).length}`);
console.log(`📁 시나리오 파일: ${files.length}개\n`);

// ─── 2. 연결 검증 ───
const errors = [];
const warnings = [];
const reachable = new Set();
const allNodeIds = new Set(Object.keys(allNodes));

// 모든 노드에서 참조하는 next/choices/branches 수집
function getTargets(nodeId, node) {
    const targets = [];

    // next
    if (node.next && typeof node.next === 'string') {
        targets.push({ type: 'next', target: node.next });
    }

    // choices
    if (node.choices && Array.isArray(node.choices)) {
        node.choices.forEach((choice, i) => {
            if (typeof choice === 'object' && choice.next) {
                targets.push({ type: `choice[${i}]`, target: choice.next });
            }
        });
    }

    // branches
    if (node.branches && Array.isArray(node.branches)) {
        node.branches.forEach((branch, i) => {
            if (branch.next) {
                targets.push({ type: `branch[${i}]`, target: branch.next });
            }
        });
    }

    return targets;
}

// 끊어진 링크 검사
let brokenLinks = 0;
for (const [nodeId, node] of Object.entries(allNodes)) {
    const targets = getTargets(nodeId, node);
    for (const { type, target } of targets) {
        if (!allNodeIds.has(target)) {
            errors.push(`❌ 끊어진 링크: "${nodeId}" → "${target}" (${type}) [${nodeToFile[nodeId]}]`);
            brokenLinks++;
        }
    }
}

// ─── 3. 도달 가능성 검사 (BFS from "start") ───
function bfs(startNode) {
    const queue = [startNode];
    const visited = new Set();

    while (queue.length > 0) {
        const current = queue.shift();
        if (visited.has(current)) continue;
        visited.add(current);

        const node = allNodes[current];
        if (!node) continue;

        const targets = getTargets(current, node);
        for (const { target } of targets) {
            if (!visited.has(target) && allNodes[target]) {
                queue.push(target);
            }
        }
    }

    return visited;
}

const reachableFromStart = bfs('start');
const unreachable = [];
for (const nodeId of allNodeIds) {
    if (!reachableFromStart.has(nodeId)) {
        unreachable.push(nodeId);
    }
}

// ─── 4. 데드엔드 검사 ───
const deadEnds = [];
const endingTypes = ['credits', 'input'];
for (const [nodeId, node] of Object.entries(allNodes)) {
    const hasNext = node.next || (node.choices && node.choices.length > 0) || (node.branches && node.branches.length > 0);
    const isSpecialType = endingTypes.includes(node.type) || node.type === 'free_talk';

    if (!hasNext && !isSpecialType) {
        // free_talk은 next가 있어야 함
        if (node.type === 'free_talk') {
            errors.push(`❌ free_talk에 next 없음: "${nodeId}"`);
        } else {
            deadEnds.push(nodeId);
        }
    }
}

// ─── 5. free_talk 노드 검증 ───
const freeTalkNodes = [];
for (const [nodeId, node] of Object.entries(allNodes)) {
    if (node.type === 'free_talk') {
        freeTalkNodes.push(nodeId);
        if (!node.next) {
            errors.push(`❌ free_talk 노드에 next 없음: "${nodeId}"`);
        }
        if (!node.background) {
            warnings.push(`⚠️  free_talk 노드에 background 없음: "${nodeId}"`);
        }
        if (!node.character) {
            warnings.push(`⚠️  free_talk 노드에 character 없음: "${nodeId}"`);
        }
    }
}

// ─── 6. i18n 텍스트 누락 검사 ───
const i18nDir = 'assets/js/i18n';
const langs = fs.readdirSync(i18nDir).filter(d => fs.statSync(path.join(i18nDir, d)).isDirectory());
const i18nMissing = [];

// ko를 기준으로 체크
const koDir = path.join(i18nDir, 'ko');
const koFiles = fs.readdirSync(koDir).filter(f => f.endsWith('.json'));

for (const jsonFile of koFiles) {
    const koData = JSON.parse(fs.readFileSync(path.join(koDir, jsonFile), 'utf8'));
    const koKeys = new Set(Object.keys(koData));

    // 다른 언어에서 누락된 키 체크
    for (const lang of langs) {
        if (lang === 'ko') continue;
        const langFile = path.join(i18nDir, lang, jsonFile);
        if (!fs.existsSync(langFile)) {
            i18nMissing.push(`⚠️  i18n 파일 없음: ${lang}/${jsonFile}`);
            continue;
        }
        const langData = JSON.parse(fs.readFileSync(langFile, 'utf8'));
        for (const key of koKeys) {
            if (!langData[key]) {
                i18nMissing.push(`⚠️  i18n 누락: ${lang}/${jsonFile} — "${key}"`);
            }
        }
    }

    // 시나리오 노드에 i18n 텍스트가 있는지 (reachable 노드만)
    for (const key of koKeys) {
        if (!allNodeIds.has(key) && !key.includes('freetalk')) {
            // i18n에는 있는데 시나리오에 없는 키 (고아 텍스트)
            // warnings.push(`⚠️  i18n 키가 시나리오에 없음: ko/${jsonFile} — "${key}"`);
        }
    }
}

// 시나리오 노드에 i18n 텍스트가 없는 경우
for (const nodeId of reachableFromStart) {
    const node = allNodes[nodeId];
    if (!node) continue;
    // input, credits 등 특수 타입은 건너뜀
    if (node.type === 'input' || node.type === 'credits') continue;

    let found = false;
    for (const jsonFile of koFiles) {
        const koData = JSON.parse(fs.readFileSync(path.join(koDir, jsonFile), 'utf8'));
        if (koData[nodeId]) { found = true; break; }
    }
    if (!found && node.type !== 'free_talk') {
        // 시나리오에는 있는데 i18n에 없는 노드
        warnings.push(`⚠️  i18n 텍스트 없음 (ko): "${nodeId}" [도달 가능]`);
    }
}

// ─── 7. 결과 출력 ───
console.log('═══════════════════════════════════════');
console.log('  CUPID 시나리오 검증 결과');
console.log('═══════════════════════════════════════\n');

console.log(`🔗 끊어진 링크: ${brokenLinks}개`);
if (errors.length > 0) {
    errors.forEach(e => console.log(e));
}

console.log(`\n🏝️  도달 불가능 노드: ${unreachable.length}개`);
if (unreachable.length > 0 && unreachable.length <= 30) {
    unreachable.forEach(n => console.log(`   - ${n} [${nodeToFile[n]}]`));
} else if (unreachable.length > 30) {
    unreachable.slice(0, 30).forEach(n => console.log(`   - ${n} [${nodeToFile[n]}]`));
    console.log(`   ... 외 ${unreachable.length - 30}개`);
}

console.log(`\n🚫 데드엔드 (next 없는 노드): ${deadEnds.length}개`);
if (deadEnds.length > 0 && deadEnds.length <= 20) {
    deadEnds.forEach(n => console.log(`   - ${n} [${nodeToFile[n]}]`));
} else if (deadEnds.length > 20) {
    deadEnds.slice(0, 20).forEach(n => console.log(`   - ${n} [${nodeToFile[n]}]`));
    console.log(`   ... 외 ${deadEnds.length - 20}개`);
}

console.log(`\n🎙️  free_talk 노드: ${freeTalkNodes.length}개`);
freeTalkNodes.forEach(n => console.log(`   - ${n}`));

console.log(`\n🌍 i18n 누락: ${i18nMissing.length}개`);
if (i18nMissing.length > 0 && i18nMissing.length <= 20) {
    i18nMissing.forEach(m => console.log(m));
} else if (i18nMissing.length > 20) {
    i18nMissing.slice(0, 20).forEach(m => console.log(m));
    console.log(`   ... 외 ${i18nMissing.length - 20}개`);
}

console.log(`\n⚠️  경고: ${warnings.length}개`);
if (warnings.length > 0 && warnings.length <= 20) {
    warnings.forEach(w => console.log(w));
} else if (warnings.length > 20) {
    warnings.slice(0, 20).forEach(w => console.log(w));
    console.log(`   ... 외 ${warnings.length - 20}개`);
}

// 도달 가능 노드 수
console.log(`\n📈 도달 가능 노드: ${reachableFromStart.size}/${Object.keys(allNodes).length}`);

const totalIssues = errors.length + (deadEnds.length > 0 ? deadEnds.length : 0);
if (totalIssues === 0) {
    console.log('\n✅ 시나리오 검증 통과! 오류 없음.');
} else {
    console.log(`\n🔴 총 ${errors.length}개 에러, ${deadEnds.length}개 데드엔드 발견.`);
}
