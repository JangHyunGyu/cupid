const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, 'assets', 'js', 'i18n');
const FILES = [
    'day1_1_morning', 'day1_2_lunch', 'day1_3_afterschool', 'day1_4_night',
    'day2_1_morning', 'day2_2_lunch', 'day2_3_afterschool', 'day2_4_night',
    'day3_1_morning', 'day3_2_lunch', 'day3_3_afterschool', 'day3_4_night',
    'day4_1_morning', 'day4_2_lunch', 'day4_3_afterschool', 'day4_4_night',
    'day5_1_morning', 'day5_2_lunch', 'day5_3_afterschool', 'day5_4_night',
];

const lang = process.argv[2] || 'en';

function loadJson(lang, file) {
    const fp = path.join(BASE_DIR, lang, file + '.json');
    if (!fs.existsSync(fp)) return null;
    return JSON.parse(fs.readFileSync(fp, 'utf8'));
}

const output = [];

for (const file of FILES) {
    const ko = loadJson('ko', file);
    const tr = loadJson(lang, file);
    if (!ko || !tr) continue;

    output.push(`\n========== ${file} ==========\n`);
    
    for (const [key, node] of Object.entries(ko)) {
        const trNode = tr[key] || {};
        const koName = node.name || '';
        const trName = trNode.name || '';
        const koText = node.text || '';
        const trText = trNode.text || '';
        
        output.push(`[${key}]`);
        output.push(`  KO (${koName}): ${koText}`);
        output.push(`  ${lang.toUpperCase()} (${trName}): ${trText}`);
        
        if (node.choices) {
            output.push(`  KO choices: ${JSON.stringify(node.choices)}`);
            output.push(`  ${lang.toUpperCase()} choices: ${JSON.stringify(trNode.choices || [])}`);
        }
        output.push('');
    }
}

const outFile = path.join(__dirname, `quality_review_${lang}.txt`);
fs.writeFileSync(outFile, output.join('\n'), 'utf8');
console.log(`Written to ${outFile} (${output.length} lines)`);
