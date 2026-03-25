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

function loadJson(lang, file) {
    const fp = path.join(BASE_DIR, lang, file + '.json');
    if (!fs.existsSync(fp)) return null;
    return JSON.parse(fs.readFileSync(fp, 'utf8'));
}

// Also load scenario JS to get all node IDs
const SCENARIO_DIR = path.join(__dirname, 'assets', 'js', 'scenario');

function getScenarioNodes(file) {
    const fp = path.join(SCENARIO_DIR, file + '.js');
    if (!fs.existsSync(fp)) return [];
    const content = fs.readFileSync(fp, 'utf8');
    // Extract quoted keys from the SCENARIO object
    const matches = content.match(/"([a-z0-9_]+)"\s*:\s*\{/g) || [];
    return matches.map(m => m.match(/"([^"]+)"/)[1]);
}

let totalMissing = 0;
const allIssues = [];

console.log('=== 다국어 번역 노드 누락 전수검사 ===\n');

for (const file of FILES) {
    const ko = loadJson('ko', file);
    if (!ko) {
        console.log(`[CRITICAL] ${file}: 한국어 파일 없음!`);
        continue;
    }
    const koKeys = Object.keys(ko);
    const scenarioNodes = getScenarioNodes(file);
    
    // Check 1: Korean keys missing in each language
    for (const lang of LANGS) {
        const tr = loadJson(lang, file);
        if (!tr) {
            console.log(`[CRITICAL] ${file}: ${lang} 번역 파일 자체가 없음!`);
            allIssues.push({ file, lang, type: 'FILE_MISSING' });
            continue;
        }
        const trKeys = Object.keys(tr);
        
        // Keys in KO but not in lang
        const missingInLang = koKeys.filter(k => !tr[k]);
        if (missingInLang.length > 0) {
            for (const key of missingInLang) {
                console.log(`[MISSING] ${file} / ${lang}: "${key}" 누락`);
                console.log(`  KO: name="${ko[key].name}", text="${(ko[key].text || '').substring(0, 80)}"`);
                allIssues.push({ file, lang, node: key, type: 'MISSING_IN_LANG', ko_name: ko[key].name, ko_text: ko[key].text });
                totalMissing++;
            }
        }
        
        // Keys in lang but not in KO (extra)
        const extraInLang = trKeys.filter(k => !ko[k]);
        if (extraInLang.length > 0) {
            for (const key of extraInLang) {
                console.log(`[EXTRA] ${file} / ${lang}: "${key}" - 한국어에 없는 키가 번역에 존재`);
                allIssues.push({ file, lang, node: key, type: 'EXTRA_IN_LANG' });
            }
        }
    }
    
    // Check 2: Scenario nodes that exist in JS but not in any i18n
    // (some scenario nodes don't need text - like pure branch nodes)
    // Skip this for now as not all scenario nodes have text
    
    // Check 3: Missing text/name/choices fields
    for (const lang of LANGS) {
        const tr = loadJson(lang, file);
        if (!tr) continue;
        
        for (const key of koKeys) {
            if (!tr[key]) continue;
            const koNode = ko[key];
            const trNode = tr[key];
            
            // text exists in ko but empty/missing in lang
            if (koNode.text && (!trNode.text || trNode.text.trim() === '')) {
                console.log(`[EMPTY_TEXT] ${file} / ${lang} / ${key}: text가 비어있음`);
                console.log(`  KO text: "${koNode.text.substring(0, 80)}"`);
                allIssues.push({ file, lang, node: key, type: 'EMPTY_TEXT', ko_text: koNode.text });
                totalMissing++;
            }
            
            // choices count mismatch
            if (koNode.choices && trNode.choices && koNode.choices.length !== trNode.choices.length) {
                console.log(`[CHOICES_MISMATCH] ${file} / ${lang} / ${key}: choices 개수 불일치 (ko:${koNode.choices.length} vs ${lang}:${trNode.choices.length})`);
                allIssues.push({ file, lang, node: key, type: 'CHOICES_MISMATCH', 
                    ko_count: koNode.choices.length, lang_count: trNode.choices.length });
                totalMissing++;
            }
            
            // choices exists in ko but not in lang
            if (koNode.choices && !trNode.choices) {
                console.log(`[CHOICES_MISSING] ${file} / ${lang} / ${key}: choices 자체가 누락됨`);
                allIssues.push({ file, lang, node: key, type: 'CHOICES_MISSING' });
                totalMissing++;
            }
        }
    }
}

// Check key count consistency across all langs
console.log('\n=== 언어별 키 개수 비교 ===\n');
console.log('File'.padEnd(30), 'KO'.padEnd(6), 'EN'.padEnd(6), 'JA'.padEnd(6), 'ES'.padEnd(6), 'FR'.padEnd(6), 'DE'.padEnd(6));
console.log('-'.repeat(66));
for (const file of FILES) {
    const counts = {};
    const ko = loadJson('ko', file);
    counts['ko'] = ko ? Object.keys(ko).length : 0;
    for (const lang of LANGS) {
        const tr = loadJson(lang, file);
        counts[lang] = tr ? Object.keys(tr).length : 0;
    }
    const mismatch = LANGS.some(l => counts[l] !== counts['ko']);
    const marker = mismatch ? ' <<<' : '';
    console.log(
        file.padEnd(30),
        String(counts['ko']).padEnd(6),
        String(counts['en']).padEnd(6),
        String(counts['ja']).padEnd(6),
        String(counts['es']).padEnd(6),
        String(counts['fr']).padEnd(6),
        String(counts['de']).padEnd(6),
        marker
    );
}

console.log(`\n=== 총 누락/문제: ${totalMissing}건 ===`);
console.log(`총 이슈: ${allIssues.length}건\n`);

fs.writeFileSync(path.join(__dirname, 'missing_nodes_audit.json'), JSON.stringify(allIssues, null, 2), 'utf8');
console.log('상세 결과: missing_nodes_audit.json 저장 완료');
