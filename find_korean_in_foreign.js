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

// Korean character range: \uAC00-\uD7AF (Hangul Syllables)
const KOREAN_RE = /[\uAC00-\uD7AF]/;

const issues = [];

for (const file of FILES) {
    for (const lang of LANGS) {
        const fp = path.join(BASE_DIR, lang, file + '.json');
        if (!fs.existsSync(fp)) continue;
        const data = JSON.parse(fs.readFileSync(fp, 'utf8'));
        
        for (const [nodeId, node] of Object.entries(data)) {
            // Check name field
            if (node.name && KOREAN_RE.test(node.name)) {
                issues.push({
                    file, lang, node: nodeId, field: 'name',
                    value: node.name
                });
            }
            // Check text field
            if (node.text && KOREAN_RE.test(node.text)) {
                issues.push({
                    file, lang, node: nodeId, field: 'text',
                    value: node.text
                });
            }
            // Check choices
            if (node.choices) {
                node.choices.forEach((c, i) => {
                    if (KOREAN_RE.test(c)) {
                        issues.push({
                            file, lang, node: nodeId, field: `choices[${i}]`,
                            value: c
                        });
                    }
                });
            }
            // Check context, personality fields too
            if (node.context && KOREAN_RE.test(node.context)) {
                issues.push({
                    file, lang, node: nodeId, field: 'context',
                    value: node.context.substring(0, 80) + '...'
                });
            }
            if (node.personality && KOREAN_RE.test(node.personality)) {
                issues.push({
                    file, lang, node: nodeId, field: 'personality',
                    value: node.personality.substring(0, 80) + '...'
                });
            }
        }
    }
}

// Also check HTML files for Korean in foreign-language pages
const htmlFiles = LANGS.flatMap(l => [
    { file: `index-${l}.html`, lang: l },
    { file: `game-${l}.html`, lang: l },
    { file: `gallery-${l}.html`, lang: l },
]);

for (const { file: htmlFile, lang } of htmlFiles) {
    const fp = path.join(__dirname, htmlFile);
    if (!fs.existsSync(fp)) continue;
    const content = fs.readFileSync(fp, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, i) => {
        if (KOREAN_RE.test(line)) {
            // Skip comments
            if (line.trim().startsWith('<!--') || line.trim().startsWith('//')) return;
            issues.push({
                file: htmlFile, lang, node: `line ${i+1}`, field: 'html',
                value: line.trim().substring(0, 120)
            });
        }
    });
}

// Also check manifest files
for (const lang of LANGS) {
    const fp = path.join(__dirname, `manifest-${lang}.json`);
    if (!fs.existsSync(fp)) continue;
    const content = fs.readFileSync(fp, 'utf8');
    if (KOREAN_RE.test(content)) {
        issues.push({
            file: `manifest-${lang}.json`, lang, node: 'manifest', field: 'json',
            value: content.substring(0, 200)
        });
    }
}

console.log(`=== 외국어 파일 내 한글 잔존 전수검사 ===\n`);
console.log(`총 발견: ${issues.length}건\n`);

// Group by lang
for (const lang of LANGS) {
    const langIssues = issues.filter(i => i.lang === lang);
    if (langIssues.length === 0) continue;
    console.log(`\n--- ${lang.toUpperCase()} (${langIssues.length}건) ---`);
    for (const issue of langIssues) {
        console.log(`  ${issue.file} / ${issue.node} [${issue.field}]: "${issue.value}"`);
    }
}

fs.writeFileSync(path.join(__dirname, 'korean_in_foreign.json'), JSON.stringify(issues, null, 2), 'utf8');
console.log('\n\n상세 결과: korean_in_foreign.json 저장 완료');
