// Comprehensive deviation scanner: Compare ALL KO vs EN texts
// Finds nodes where EN translation significantly differs from KO original
const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, 'assets', 'js', 'i18n');
const langs = ['en', 'ja', 'es', 'fr', 'de'];

const scenarioFiles = [
    'day1_1_morning', 'day1_2_lunch', 'day1_3_afterschool', 'day1_4_night',
    'day2_1_morning', 'day2_2_lunch', 'day2_3_afterschool', 'day2_4_night',
    'day3_1_morning', 'day3_2_lunch', 'day3_3_afterschool', 'day3_4_night',
    'day4_1_morning', 'day4_2_lunch', 'day4_3_afterschool', 'day4_4_night',
    'day5_1_morning', 'day5_2_lunch', 'day5_3_afterschool', 'day5_4_night'
];

// Heuristic checks for deviation
function hasKoreanChars(str) {
    return /[\uAC00-\uD7AF\u1100-\u11FF]/.test(str);
}

function isDevText(str) {
    // Debug/developer text patterns
    return /check|condition|flag|entry|END\b|フラグ|条件|확인|condiciones|conditions|Bedingungen/i.test(str) 
        && /affinity|好感度|afinidad|affinité|Zuneigung/i.test(str);
}

function stripFormatting(str) {
    return str.replace(/\*/g, '').replace(/"/g, '').replace(/「/g,'').replace(/」/g,'').trim();
}

const issues = [];

for (const file of scenarioFiles) {
    const koPath = path.join(i18nDir, 'ko', `${file}.json`);
    if (!fs.existsSync(koPath)) continue;
    const koData = JSON.parse(fs.readFileSync(koPath, 'utf8'));
    
    // Check EN primarily for semantic deviations
    const enPath = path.join(i18nDir, 'en', `${file}.json`);
    if (!fs.existsSync(enPath)) continue;
    const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
    
    for (const nodeId of Object.keys(koData)) {
        const ko = koData[nodeId];
        const en = enData[nodeId];
        if (!ko || !en) continue;
        
        const koText = ko.text || '';
        const enText = en.text || '';
        
        // Skip empty nodes (system/check nodes)
        if (!koText.trim() && !enText.trim()) continue;
        
        // 1. Check for dev/debug text in translations
        if (isDevText(enText) && !isDevText(koText)) {
            issues.push({
                severity: 'CRITICAL',
                file, nodeId,
                type: 'DEV_TEXT_IN_TRANSLATION',
                ko: koText,
                en: enText
            });
            continue;
        }
        
        // 2. KO has text but EN is empty
        if (koText.trim() && !enText.trim()) {
            issues.push({
                severity: 'ERROR',
                file, nodeId,
                type: 'MISSING_TRANSLATION',
                ko: koText,
                en: enText
            });
            continue;
        }
        
        // 3. EN has text but KO is empty (should be system node?)
        if (!koText.trim() && enText.trim()) {
            issues.push({
                severity: 'WARNING',
                file, nodeId,
                type: 'EXTRA_EN_TEXT',
                ko: koText,
                en: enText
            });
            continue;
        }
        
        // 4. Korean text remaining in EN
        if (hasKoreanChars(enText)) {
            issues.push({
                severity: 'ERROR',
                file, nodeId,
                type: 'KOREAN_IN_EN',
                ko: koText,
                en: enText
            });
        }
        
        // 5. Significant length ratio deviation (potential content mismatch)
        const koClean = stripFormatting(koText);
        const enClean = stripFormatting(enText);
        if (koClean.length > 10 && enClean.length > 0) {
            // Korean chars are ~2x the info density of English chars
            const expectedRatio = koClean.length * 1.5; // EN should be roughly 1-2x KO length
            const actualRatio = enClean.length / koClean.length;
            
            if (actualRatio < 0.3 && koClean.length > 20) {
                issues.push({
                    severity: 'WARNING',
                    file, nodeId,
                    type: 'EN_MUCH_SHORTER',
                    ko: koText.substring(0, 80),
                    en: enText.substring(0, 80),
                    ratio: actualRatio.toFixed(2)
                });
            }
        }
        
        // 6. Choices count mismatch
        if (ko.choices && en.choices) {
            if (ko.choices.length !== en.choices.length) {
                issues.push({
                    severity: 'CRITICAL',
                    file, nodeId,
                    type: 'CHOICES_MISMATCH',
                    koChoices: ko.choices,
                    enChoices: en.choices
                });
            }
        }
    }
}

// Sort by severity
const sevOrder = { CRITICAL: 0, ERROR: 1, WARNING: 2 };
issues.sort((a, b) => sevOrder[a.severity] - sevOrder[b.severity]);

console.log(`\n=== Translation Deviation Scan Results ===\n`);
console.log(`Total issues: ${issues.length}`);
console.log(`  CRITICAL: ${issues.filter(i => i.severity === 'CRITICAL').length}`);
console.log(`  ERROR: ${issues.filter(i => i.severity === 'ERROR').length}`);
console.log(`  WARNING: ${issues.filter(i => i.severity === 'WARNING').length}`);

for (const issue of issues) {
    console.log(`\n[${issue.severity}] ${issue.file} > ${issue.nodeId}`);
    console.log(`  Type: ${issue.type}`);
    if (issue.ko !== undefined) console.log(`  KO: ${issue.ko.substring(0, 100)}`);
    if (issue.en !== undefined) console.log(`  EN: ${issue.en.substring(0, 100)}`);
    if (issue.ratio) console.log(`  Ratio: ${issue.ratio}`);
    if (issue.koChoices) console.log(`  KO choices: ${JSON.stringify(issue.koChoices)}`);
    if (issue.enChoices) console.log(`  EN choices: ${JSON.stringify(issue.enChoices)}`);
}
