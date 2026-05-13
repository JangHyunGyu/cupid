/**
 * CUPID 다국어 전수 시뮬레이션 테스트
 * 7가지 검증: 키완전성, 텍스트필드, 선택지, 캐릭터명, 시나리오동기화, JSON유효성, 따옴표
 */
const fs = require('fs');
const path = require('path');

const LANGS = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'];
const BASE = path.join(__dirname, 'assets', 'js', 'i18n');
const SCENARIO_DIR = path.join(__dirname, 'assets', 'js', 'scenario');

const NAME_MAP = {
    '서연': { en: 'Seoyeon', ja: 'ソヨン', es: 'Seoyeon', fr: 'Seoyeon', de: 'Seoyeon', pt: 'Seoyeon' },
    '다인': { en: 'Dain', ja: 'ダイン', es: 'Dain', fr: 'Dain', de: 'Dain', pt: 'Dain' },
    '유나': { en: 'Yuna', ja: 'ユナ', es: 'Yuna', fr: 'Yuna', de: 'Yuna', pt: 'Yuna' },
    '담임선생님': { en: 'Homeroom Teacher', ja: '担任先生', es: 'Profesora', fr: 'Professeure principale', de: 'Klassenlehrerin', pt: 'Professora' },
    '보건선생님': { en: 'School Nurse', ja: '保健先生', es: 'Enfermera', fr: 'Infirmière', de: 'Schulkrankenschwester', pt: 'Enfermeira' },
    '나': { en: 'Me', ja: '僕', es: 'Yo', fr: 'Moi', de: 'Ich', pt: 'Eu' },
    '시스템': { en: 'System', ja: 'システム', es: 'Sistema', fr: 'Système', de: 'System', pt: 'Sistema' },
    '{name}': { en: '{name}', ja: '{name}', es: '{name}', fr: '{name}', de: '{name}', pt: '{name}' },
    '민수': { en: 'Minsu', ja: 'ミンス', es: 'Minsu', fr: 'Minsu', de: 'Minsu', pt: 'Minsu' },
    '해은': { en: 'Haeun', ja: 'ヘウン', es: 'Haeun', fr: 'Haeun', de: 'Haeun', pt: 'Haeun' },
};

const FILES = [
    'day1_1_morning','day1_2_lunch','day1_3_afterschool','day1_4_night',
    'day2_1_morning','day2_2_lunch','day2_3_afterschool','day2_4_night',
    'day3_1_morning','day3_2_lunch','day3_3_afterschool','day3_4_night',
    'day4_1_morning','day4_2_lunch','day4_3_afterschool','day4_4_night',
    'day5_1_morning','day5_2_lunch','day5_3_afterschool','day5_4_night',
];

// Load all i18n data
const i18n = {};
for (const lang of LANGS) {
    i18n[lang] = {};
    for (const file of FILES) {
        const fp = path.join(BASE, lang, file + '.json');
        if (fs.existsSync(fp)) {
            i18n[lang][file] = JSON.parse(fs.readFileSync(fp, 'utf8'));
        }
    }
}

// Load all scenarios
const scenarios = {};
for (const file of FILES) {
    const fp = path.join(SCENARIO_DIR, file + '.js');
    if (fs.existsSync(fp)) {
        const content = fs.readFileSync(fp, 'utf8');
        const match = content.match(/(?:const|let|var)\s+\w+\s*=\s*(\{[\s\S]*\})\s*;?\s*$/m);
        if (match) {
            try { scenarios[file] = JSON.parse(match[1]); } catch(e) {
                try {
                    const fn = new Function('return ' + match[1]);
                    scenarios[file] = fn();
                } catch(e2) { /* skip */ }
            }
        }
    }
}

function countPlaceholders(text) {
    if (!text) return {};
    const matches = text.match(/\{[^}]+\}/g) || [];
    const result = {};
    matches.forEach(m => { result[m] = (result[m] || 0) + 1; });
    return result;
}

const issues = [];
let totalChecks = 0;
const stats = { byLang: {}, bySeverity: {}, byType: {} };
LANGS.forEach(l => stats.byLang[l] = 0);

function addIssue(severity, type, lang, file, node, detail) {
    issues.push({ severity, type, lang, file, node, detail });
    stats.byLang[lang] = (stats.byLang[lang] || 0) + 1;
    stats.bySeverity[severity] = (stats.bySeverity[severity] || 0) + 1;
    stats.byType[type] = (stats.byType[type] || 0) + 1;
}

// ===== TEST 1: Key completeness =====
console.log('[TEST 1] 키 완전성 검사...');
for (const file of FILES) {
    const koData = i18n['ko'][file];
    if (!koData) continue;
    const koKeys = Object.keys(koData);
    for (const lang of LANGS.filter(l => l !== 'ko')) {
        const trData = i18n[lang][file];
        if (!trData) {
            addIssue('CRITICAL', 'FILE_MISSING', lang, file, '-', lang + '/' + file + '.json 파일 없음');
            continue;
        }
        for (const key of koKeys) {
            totalChecks++;
            if (!trData[key]) {
                addIssue('CRITICAL', 'KEY_MISSING', lang, file, key, '번역 키 누락');
            }
        }
        for (const key of Object.keys(trData)) {
            if (!koData[key]) {
                addIssue('WARNING', 'EXTRA_KEY', lang, file, key, 'ko에 없는 키');
            }
        }
    }
}

// ===== TEST 2: Text field validation =====
console.log('[TEST 2] 텍스트 필드 검증...');
for (const file of FILES) {
    const koData = i18n['ko'][file];
    if (!koData) continue;
    for (const [key, koNode] of Object.entries(koData)) {
        for (const lang of LANGS.filter(l => l !== 'ko')) {
            const trData = i18n[lang][file];
            if (!trData || !trData[key]) continue;
            const trNode = trData[key];
            totalChecks++;

            if (koNode.text && !trNode.text) {
                addIssue('ERROR', 'EMPTY_TEXT', lang, file, key, 'text 비어있음');
            }
            if (!koNode.text && trNode.text && trNode.text.length > 0) {
                addIssue('WARNING', 'EXTRA_TEXT', lang, file, key, 'ko 빈 텍스트인데 번역 존재: "' + trNode.text.substring(0,50) + '"');
            }

            // Placeholder mismatch
            if (koNode.text && trNode.text) {
                const koPH = countPlaceholders(koNode.text);
                const trPH = countPlaceholders(trNode.text);
                const allPH = new Set([...Object.keys(koPH), ...Object.keys(trPH)]);
                for (const ph of allPH) {
                    if ((koPH[ph] || 0) !== (trPH[ph] || 0)) {
                        addIssue('ERROR', 'PLACEHOLDER', lang, file, key,
                            ph + ' (ko:' + (koPH[ph]||0) + ' ' + lang + ':' + (trPH[ph]||0) + ')');
                    }
                }
            }

            // Italic
            if (koNode.text && trNode.text) {
                const koI = (koNode.text.match(/\*/g) || []).length;
                const trI = (trNode.text.match(/\*/g) || []).length;
                if (koI > 0 && trI === 0) {
                    addIssue('WARNING', 'ITALIC_MISSING', lang, file, key, 'ko에 *' + koI + '개, ' + lang + '에 0개');
                }
                if (trI % 2 !== 0) {
                    addIssue('ERROR', 'ITALIC_BROKEN', lang, file, key, '홀수 * (' + trI + '개)');
                }
            }

            // Merged content
            if (trNode.text && trNode.text.includes('\n\n')) {
                addIssue('WARNING', 'MERGED_TEXT', lang, file, key, '\\n\\n 포함 (병합 콘텐츠?)');
            }

            // Korean residue
            if (lang !== 'ja' && trNode.text && /[가-힣]{4,}/.test(trNode.text)) {
                addIssue('ERROR', 'KO_RESIDUE', lang, file, key, '한국어 잔존');
            }
        }
    }
}

// ===== TEST 3: Choices validation =====
console.log('[TEST 3] 선택지 검증...');
for (const file of FILES) {
    const koData = i18n['ko'][file];
    if (!koData) continue;
    for (const [key, koNode] of Object.entries(koData)) {
        if (!koNode.choices) continue;
        for (const lang of LANGS.filter(l => l !== 'ko')) {
            const trData = i18n[lang][file];
            if (!trData || !trData[key]) continue;
            const trNode = trData[key];
            totalChecks++;
            if (!trNode.choices) {
                addIssue('CRITICAL', 'CHOICES_MISSING', lang, file, key, '선택지 배열 누락');
            } else if (koNode.choices.length !== trNode.choices.length) {
                addIssue('CRITICAL', 'CHOICES_COUNT', lang, file, key,
                    '선택지 수 불일치 (ko:' + koNode.choices.length + ' ' + lang + ':' + trNode.choices.length + ')');
            } else {
                for (let idx = 0; idx < trNode.choices.length; idx++) {
                    if (!trNode.choices[idx] || trNode.choices[idx].trim() === '') {
                        addIssue('ERROR', 'CHOICE_EMPTY', lang, file, key, '선택지[' + idx + '] 빈 문자열');
                    }
                }
            }
        }
    }
}

// ===== TEST 4: Character name consistency =====
console.log('[TEST 4] 캐릭터명 일관성 검사...');
for (const file of FILES) {
    const koData = i18n['ko'][file];
    if (!koData) continue;
    for (const [key, koNode] of Object.entries(koData)) {
        if (!koNode.name) continue;
        const expected = NAME_MAP[koNode.name];
        if (!expected) continue;
        for (const lang of LANGS.filter(l => l !== 'ko')) {
            const trData = i18n[lang][file];
            if (!trData || !trData[key]) continue;
            totalChecks++;
            if (trData[key].name !== expected[lang] && trData[key].name !== '{name}') {
                addIssue('WARNING', 'NAME_MISMATCH', lang, file, key,
                    '"' + koNode.name + '" -> 예상:"' + expected[lang] + '" 실제:"' + trData[key].name + '"');
            }
        }
    }
}

// ===== TEST 5: Scenario-i18n sync =====
console.log('[TEST 5] 시나리오-i18n 동기화 검사...');
for (const file of FILES) {
    const scenario = scenarios[file];
    if (!scenario) continue;
    const scenarioKeys = Object.keys(scenario);
    for (const lang of LANGS) {
        const trData = i18n[lang][file];
        if (!trData) continue;
        for (const key of scenarioKeys) {
            totalChecks++;
            if (!trData[key]) {
                addIssue('ERROR', 'SCENARIO_SYNC', lang, file, key, '시나리오에 있는 키가 i18n에 없음');
            }
        }
    }
}

// ===== TEST 6: JSON validity =====
console.log('[TEST 6] JSON 유효성 검사...');
for (const lang of LANGS) {
    for (const file of FILES) {
        const fp = path.join(BASE, lang, file + '.json');
        totalChecks++;
        try {
            JSON.parse(fs.readFileSync(fp, 'utf8'));
        } catch(e) {
            addIssue('CRITICAL', 'JSON_INVALID', lang, file, '-', 'JSON 파싱 실패: ' + e.message);
        }
    }
}

// ===== TEST 7: Quote consistency =====
console.log('[TEST 7] 따옴표 일관성 검사...');
for (const file of FILES) {
    const koData = i18n['ko'][file];
    if (!koData) continue;
    for (const [key, koNode] of Object.entries(koData)) {
        if (!koNode.text) continue;
        const koQuotes = /["\u201C\u201D]/.test(koNode.text);
        if (!koQuotes) continue;
        for (const lang of LANGS.filter(l => l !== 'ko')) {
            const trData = i18n[lang][file];
            if (!trData || !trData[key] || !trData[key].text) continue;
            totalChecks++;
            const trQuotes = /["\u201C\u201D\u00AB\u00BB\u300C\u300D]/.test(trData[key].text);
            if (!trQuotes) {
                addIssue('WARNING', 'QUOTE_MISSING', lang, file, key, 'ko에 따옴표 있으나 번역에 없음');
            }
        }
    }
}

// ===== REPORT =====
console.log('\n' + '='.repeat(60));
console.log('  CUPID 다국어 전수 시뮬레이션 테스트 결과');
console.log('='.repeat(60));
console.log('\n총 검사 항목: ' + totalChecks.toLocaleString());
console.log('총 이슈: ' + issues.length);

console.log('\n--- 심각도별 ---');
for (const [sev, count] of Object.entries(stats.bySeverity).sort()) {
    console.log('  ' + sev + ': ' + count);
}

console.log('\n--- 유형별 ---');
for (const [type, count] of Object.entries(stats.byType).sort((a,b) => b[1]-a[1])) {
    console.log('  ' + type + ': ' + count);
}

console.log('\n--- 언어별 ---');
for (const lang of LANGS) {
    console.log('  ' + lang + ': ' + (stats.byLang[lang] || 0) + '개 이슈');
}

if (issues.length > 0) {
    console.log('\n--- 상세 이슈 ---');
    for (const i of issues) {
        console.log('  [' + i.severity + '] ' + i.lang + '/' + i.file + '/' + i.node + ': [' + i.type + '] ' + i.detail);
    }
}

console.log('\n' + '='.repeat(60));
const critErr = issues.filter(i => i.severity === 'CRITICAL' || i.severity === 'ERROR').length;
if (critErr === 0) {
    console.log('  PASS: CRITICAL/ERROR 0건 -- 전수 테스트 통과');
} else {
    console.log('  FAIL: CRITICAL/ERROR ' + critErr + '건 -- 수정 필요');
}
console.log('='.repeat(60));

fs.writeFileSync('test_i18n_result.json', JSON.stringify({ stats, issues }, null, 2), 'utf8');
console.log('\n상세 결과: test_i18n_result.json');
