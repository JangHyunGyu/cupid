const fs = require('fs');
const path = require('path');

const LANGS = ['en', 'ja', 'es', 'fr', 'de'];
const BASE_DIR = path.join(__dirname, 'assets', 'js', 'i18n');
const FILES = [
    'day1_1_morning', 'day1_2_lunch', 'day1_3_afterschool', 'day1_4_night',
    'day2_1_morning', 'day2_2_lunch', 'day2_3_afterschool', 'day2_4_night',
    'day3_1_morning', 'day3_2_lunch', 'day3_3_afterschool', 'day3_4_night',
    'day4_1_morning', 'day4_2_lunch', 'day4_3_afterschool', 'day4_4_night',
    'day5_1_morning', 'day5_2_lunch', 'day5_3_afterschool', 'day5_4_night',
];

const issues = [];

function loadJson(lang, file) {
    const fp = path.join(BASE_DIR, lang, file + '.json');
    if (!fs.existsSync(fp)) return null;
    return JSON.parse(fs.readFileSync(fp, 'utf8'));
}

function countPlaceholders(text) {
    if (!text) return {};
    const matches = text.match(/\{[^}]+\}/g) || [];
    const result = {};
    matches.forEach(m => { result[m] = (result[m] || 0) + 1; });
    return result;
}

function checkItalicFormat(text) {
    if (!text) return [];
    const problems = [];
    // Check for mismatched asterisks (italic markers)
    const asteriskCount = (text.match(/\*/g) || []).length;
    if (asteriskCount % 2 !== 0) {
        problems.push('홀수 개의 * (이탤릭 불일치)');
    }
    return problems;
}

function checkQuotes(ko_text, lang_text, lang) {
    const problems = [];
    if (!ko_text || !lang_text) return problems;
    const ko_has_quotes = /[""]/.test(ko_text) || /"/.test(ko_text);
    const lang_has_quotes = /[""\u00AB\u00BB\u201E\u201C\u300C\u300D「」]/.test(lang_text) || /"/.test(lang_text);
    // Korean has dialogue quotes but translation doesn't
    if (ko_has_quotes && !lang_has_quotes) {
        problems.push(`한국어에 대사(따옴표)가 있으나 ${lang} 번역에 없음`);
    }
    return problems;
}

// Known character name maps
const NAME_MAP = {
    '서연': { en: 'Seoyeon', ja: 'ソヨン', es: 'Seoyeon', fr: 'Seoyeon', de: 'Seoyeon' },
    '다인': { en: 'Dain', ja: 'ダイン', es: 'Dain', fr: 'Dain', de: 'Dain' },
    '유나': { en: 'Yuna', ja: 'ユナ', es: 'Yuna', fr: 'Yuna', de: 'Yuna' },
    '담임선생님': { en: 'Homeroom Teacher', ja: '担任先生', es: 'Profesora', fr: 'Professeure principale', de: 'Klassenlehrerin' },
    '보건선생님': { en: 'School Nurse', ja: '保健先生', es: 'Enfermera', fr: 'Infirmière', de: 'Schulkrankenschwester' },
    '나': { en: 'Me', ja: '僕', es: 'Yo', fr: 'Moi', de: 'Ich' },
    '시스템': { en: 'System', ja: 'システム', es: 'Sistema', fr: 'Système', de: 'System' },
    '{name}': { en: '{name}', ja: '{name}', es: '{name}', fr: '{name}', de: '{name}' },
};

let totalNodes = 0;
let missingCount = {};
LANGS.forEach(l => missingCount[l] = 0);

for (const file of FILES) {
    const ko = loadJson('ko', file);
    if (!ko) {
        issues.push({ file, severity: 'CRITICAL', issue: '한국어 파일 없음' });
        continue;
    }

    for (const lang of LANGS) {
        const tr = loadJson(lang, file);
        if (!tr) {
            issues.push({ file, lang, severity: 'CRITICAL', issue: `${lang} 번역 파일 없음` });
            continue;
        }

        const koKeys = Object.keys(ko);
        const trKeys = Object.keys(tr);
        totalNodes += koKeys.length;

        // Missing keys
        for (const key of koKeys) {
            if (!tr[key]) {
                issues.push({ file, lang, node: key, severity: 'CRITICAL', issue: '번역 누락' });
                missingCount[lang]++;
                continue;
            }

            const koNode = ko[key];
            const trNode = tr[key];

            // Missing text
            if (!trNode.text && koNode.text) {
                issues.push({ file, lang, node: key, severity: 'CRITICAL', issue: 'text 필드 누락' });
            }

            // Empty text
            if (trNode.text === '' && koNode.text !== '') {
                issues.push({ file, lang, node: key, severity: 'CRITICAL', issue: 'text가 빈 문자열' });
            }

            // Placeholder mismatch
            if (koNode.text && trNode.text) {
                const koPH = countPlaceholders(koNode.text);
                const trPH = countPlaceholders(trNode.text);
                const allPH = new Set([...Object.keys(koPH), ...Object.keys(trPH)]);
                for (const ph of allPH) {
                    if ((koPH[ph] || 0) !== (trPH[ph] || 0)) {
                        issues.push({ file, lang, node: key, severity: 'ERROR',
                            issue: `플레이스홀더 불일치: ${ph} (ko: ${koPH[ph]||0}, ${lang}: ${trPH[ph]||0})`,
                            ko_text: koNode.text, tr_text: trNode.text
                        });
                    }
                }
            }

            // Italic format check
            if (trNode.text) {
                const italicProblems = checkItalicFormat(trNode.text);
                for (const p of italicProblems) {
                    issues.push({ file, lang, node: key, severity: 'ERROR', issue: p, tr_text: trNode.text });
                }
            }

            // Quote consistency
            if (koNode.text && trNode.text) {
                const quoteProblems = checkQuotes(koNode.text, trNode.text, lang);
                for (const p of quoteProblems) {
                    issues.push({ file, lang, node: key, severity: 'WARNING', issue: p,
                        ko_text: koNode.text, tr_text: trNode.text
                    });
                }
            }

            // Choices count mismatch
            if (koNode.choices && trNode.choices) {
                if (koNode.choices.length !== trNode.choices.length) {
                    issues.push({ file, lang, node: key, severity: 'CRITICAL',
                        issue: `선택지 개수 불일치 (ko: ${koNode.choices.length}, ${lang}: ${trNode.choices.length})`
                    });
                }
            } else if (koNode.choices && !trNode.choices) {
                issues.push({ file, lang, node: key, severity: 'CRITICAL', issue: '선택지(choices) 누락' });
            }

            // Name translation check
            if (koNode.name && trNode.name) {
                const expectedName = NAME_MAP[koNode.name];
                if (expectedName && expectedName[lang] && trNode.name !== expectedName[lang]) {
                    // Allow {name} as alternate
                    if (trNode.name !== '{name}') {
                        issues.push({ file, lang, node: key, severity: 'WARNING',
                            issue: `캐릭터명 불일치: "${koNode.name}" → 예상: "${expectedName[lang]}", 실제: "${trNode.name}"`
                        });
                    }
                }
            }

            // Untranslated (Korean text in translation)
            if (trNode.text && /[가-힣]{3,}/.test(trNode.text) && lang !== 'ja') {
                issues.push({ file, lang, node: key, severity: 'ERROR',
                    issue: '번역에 한국어 텍스트 잔존', tr_text: trNode.text
                });
            }
        }

        // Extra keys in translation (not in Korean)
        for (const key of trKeys) {
            if (!ko[key]) {
                issues.push({ file, lang, node: key, severity: 'WARNING', issue: '한국어에 없는 키가 번역에 존재' });
            }
        }
    }
}

// Summary
console.log('=== CUPID 번역 전수검수 결과 ===\n');
console.log(`총 검사 노드 수: ${totalNodes / LANGS.length} (한국어 기준)\n`);

const critical = issues.filter(i => i.severity === 'CRITICAL');
const errors = issues.filter(i => i.severity === 'ERROR');
const warnings = issues.filter(i => i.severity === 'WARNING');

console.log(`CRITICAL: ${critical.length}`);
console.log(`ERROR: ${errors.length}`);
console.log(`WARNING: ${warnings.length}`);
console.log(`합계: ${issues.length}\n`);

// By language
for (const lang of LANGS) {
    const langIssues = issues.filter(i => i.lang === lang);
    console.log(`\n--- ${lang.toUpperCase()} (${langIssues.length}개 이슈) ---`);
    for (const issue of langIssues) {
        console.log(`  [${issue.severity}] ${issue.file} / ${issue.node || ''}: ${issue.issue}`);
        if (issue.ko_text) console.log(`    KO: ${issue.ko_text.substring(0, 100)}`);
        if (issue.tr_text) console.log(`    ${issue.lang}: ${issue.tr_text.substring(0, 100)}`);
    }
}

// Write full report to JSON
fs.writeFileSync(path.join(__dirname, 'translation_audit_result.json'), JSON.stringify(issues, null, 2), 'utf8');
console.log('\n\n상세 결과: translation_audit_result.json 저장 완료');
