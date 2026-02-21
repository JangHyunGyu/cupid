/**
 * merge-scenarios.js
 *
 * ko_dayX_Y_time.js + en_dayX_Y_time.js → dayX_Y_time.js (통합본)
 *
 * 변환 규칙:
 *   - language-specific 필드 (name, text, context, personality, choices[].text)
 *     → 각 노드의 _i18n: { ko: {...}, en: {...} } 블록으로 이동
 *   - language-neutral 필드 (background, bgm, character, next, stats, branches ...)
 *     → 그대로 유지
 *
 * 사용법:
 *   node scripts/merge-scenarios.js
 */

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

// ─────────────────────────────────────────────
// 설정
// ─────────────────────────────────────────────

const SCENARIO_DIR = path.join(__dirname, '..', 'assets', 'js', 'scenario');
const OUT_DIR      = path.join(SCENARIO_DIR, 'merged');

// 언어별로 분리할 필드 목록
const LANG_FIELDS = new Set(['name', 'text', 'context', 'personality']);

// 병합 대상 파일 쌍 (prefix 없는 이름)
const PAIRS = [
    'day1_1_morning',
    'day1_2_lunch',
    'day1_3_afterschool',
    'day1_4_night',
    'day2_1_morning',
    'day2_2_lunch',
    'day2_3_afterschool',
    'day2_4_night',
    'day3_1_morning',
    'day3_2_lunch',
    'day3_3_afterschool',
    'day3_4_night',
    'day4_1_morning',
    'day4_2_lunch',
    'day4_3_afterschool',
    'day4_4_night',
    'day5_1_morning',
    'day5_2_lunch',
    'day5_3_afterschool',
    'day5_4_night',
];

// ─────────────────────────────────────────────
// 헬퍼: JS 파일을 실행해 SCENARIO 객체 추출
// ─────────────────────────────────────────────

function extractScenario(filePath) {
    const code    = fs.readFileSync(filePath, 'utf-8');
    const sandbox = { SCENARIO: {}, window: {}, document: {}, console };

    try {
        vm.runInNewContext(code, sandbox);
    } catch (e) {
        console.error(`  ⚠  실행 오류: ${path.basename(filePath)}: ${e.message}`);
    }

    return sandbox.SCENARIO;
}

// ─────────────────────────────────────────────
// 헬퍼: 씬 노드 1개 병합
//   koNode  : 한국어 버전 노드
//   enNode  : 영어 버전 노드 (없으면 koNode 그대로)
// ─────────────────────────────────────────────

function mergeNode(koNode, enNode) {
    const en = enNode || koNode; // 영어 버전 없으면 한국어 fallback
    const merged = {};
    const koI18n = {};
    const enI18n = {};

    for (const key of Object.keys(koNode)) {
        // 언어 특화 필드 → _i18n 분리
        if (LANG_FIELDS.has(key)) {
            if (koNode[key] !== undefined) koI18n[key] = koNode[key];
            if (en[key]     !== undefined) enI18n[key] = en[key];
            continue;
        }

        // choices: 구조(next/stats/setFlags 등)는 유지, text만 _i18n으로 분리
        if (key === 'choices') {
            const koChoices = koNode.choices;
            const enChoices = en.choices || koChoices;

            // 언어 중립 구조: text 필드 제거
            merged.choices = koChoices.map((c) => {
                const { text, ...rest } = c; // eslint-disable-line no-unused-vars
                return rest;
            });

            // 텍스트만 추출 (없으면 null)
            koI18n.choices = koChoices.map((c) => c.text ?? null);
            enI18n.choices = enChoices.map((c) => c.text ?? null);
            continue;
        }

        // 나머지는 language-neutral → 그대로 복사
        merged[key] = koNode[key];
    }

    // _i18n 블록이 비어있지 않으면 추가
    const hasI18n =
        Object.keys(koI18n).length > 0 || Object.keys(enI18n).length > 0;

    if (hasI18n) {
        merged._i18n = {};
        if (Object.keys(koI18n).length > 0) merged._i18n.ko = koI18n;
        if (Object.keys(enI18n).length > 0) merged._i18n.en = enI18n;
    }

    return merged;
}

// ─────────────────────────────────────────────
// 헬퍼: SCENARIO 딕셔너리 전체 병합
//   koScenario : { [day]: { [sceneId]: node } }
//   enScenario : 동일 구조
// ─────────────────────────────────────────────

function mergeScenario(koScenario, enScenario) {
    const result = {};

    for (const day of Object.keys(koScenario)) {
        result[day] = {};
        const koDay = koScenario[day];
        const enDay = enScenario[day] || {};

        for (const sceneId of Object.keys(koDay)) {
            result[day][sceneId] = mergeNode(koDay[sceneId], enDay[sceneId]);
        }
    }

    return result;
}

// ─────────────────────────────────────────────
// 헬퍼: 병합된 SCENARIO → JS 파일 문자열 생성
// ─────────────────────────────────────────────

function generateFileContent(mergedScenario, baseName) {
    const dayNum = parseInt(baseName.match(/day(\d+)/)[1], 10);
    const data   = mergedScenario[dayNum] || {};

    const header = `/**
 * ============================================================================
 * CUPID - ${baseName} (통합 시나리오 / Merged Scenario)
 * ============================================================================
 *
 * 이 파일은 merge-scenarios.js 스크립트로 자동 생성되었습니다.
 * ko_${baseName}.js + en_${baseName}.js 를 합친 파일입니다.
 *
 * 언어 텍스트는 각 씬의 _i18n.ko / _i18n.en 블록에 있습니다.
 * 게임 로직(배경, 분기, 선택지 구조, 호감도)은 최상위에 그대로 있습니다.
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') var SCENARIO = {};
if (!SCENARIO[${dayNum}]) SCENARIO[${dayNum}] = {};

Object.assign(SCENARIO[${dayNum}], `;

    const footer = `);
`;

    const body = JSON.stringify(data, null, 4);

    return header + body + footer;
}

// ─────────────────────────────────────────────
// 메인 실행
// ─────────────────────────────────────────────

if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
}

let successCount = 0;
let errorCount   = 0;

for (const name of PAIRS) {
    const koPath  = path.join(SCENARIO_DIR, `ko_${name}.js`);
    const enPath  = path.join(SCENARIO_DIR, `en_${name}.js`);
    const outPath = path.join(OUT_DIR, `${name}.js`);

    console.log(`\n[${name}]`);

    if (!fs.existsSync(koPath)) {
        console.error(`  ✗ 한국어 파일 없음: ${koPath}`);
        errorCount++;
        continue;
    }
    if (!fs.existsSync(enPath)) {
        console.warn(`  ⚠ 영어 파일 없음 (한국어로 fallback): ${enPath}`);
    }

    const koScenario = extractScenario(koPath);
    const enScenario = fs.existsSync(enPath) ? extractScenario(enPath) : koScenario;

    const merged  = mergeScenario(koScenario, enScenario);
    const content = generateFileContent(merged, name);

    fs.writeFileSync(outPath, content, 'utf-8');

    // 간단한 통계
    const dayNum    = parseInt(name.match(/day(\d+)/)[1], 10);
    const nodeCount = Object.keys(merged[dayNum] || {}).length;
    console.log(`  ✓ ${nodeCount}개 씬 → ${path.relative(process.cwd(), outPath)}`);
    successCount++;
}

console.log(`\n${'─'.repeat(50)}`);
console.log(`완료: ${successCount}개 성공, ${errorCount}개 실패`);
console.log(`출력 디렉토리: ${OUT_DIR}`);
