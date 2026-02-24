const fs = require('fs');
const content = fs.readFileSync('d:/workspace/cupid/assets/js/scenario/day4_4_night.js', 'utf8');
const lines = content.split('\n');

let inI18n = false, inEn = false, hasFr = false;
let i18nBraceDepth = 0, enBraceDepth = 0;
let currentEnName = '', currentEnText = '', currentEnChoices = [];
let currentEnContext = '', currentEnPersonality = '';
let enBlock = [];
let blockCount = 0;
let results = [];
let allTexts = new Set();

const textRe = new RegExp('"text"\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"');
const choicesRe = new RegExp('"choices"\\s*:\\s*\\[([\\s\\S]*?)\\]');
const choiceItemRe = new RegExp('"((?:[^"\\\\]|\\\\.)*)"', 'g');
const contextRe = new RegExp('"context"\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"');
const personalityRe = new RegExp('"personality"\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"');

function parseEnBlock(block) {
    let text = block.join('\n');
    let nameMatch = text.match(/"name"\s*:\s*"([^"]*)"/);
    let textMatch = text.match(textRe);
    let choicesMatch = text.match(choicesRe);
    let contextMatch = text.match(contextRe);
    let personalityMatch = text.match(personalityRe);

    currentEnName = nameMatch ? nameMatch[1] : '';
    currentEnText = textMatch ? textMatch[1] : '';
    currentEnChoices = [];
    currentEnContext = contextMatch ? contextMatch[1] : '';
    currentEnPersonality = personalityMatch ? personalityMatch[1] : '';

    if (choicesMatch) {
        let items = choicesMatch[1].match(choiceItemRe);
        if (items) currentEnChoices = items.map(c => c.slice(1, -1));
    }
}

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!inI18n) {
        if (line.includes('"_i18n"') && line.includes('{')) {
            inI18n = true;
            hasFr = false;
            i18nBraceDepth = (line.match(/\{/g)||[]).length - (line.match(/\}/g)||[]).length;
            currentEnName = ''; currentEnText = ''; currentEnChoices = [];
            currentEnContext = ''; currentEnPersonality = '';
            inEn = false;
            enBlock = [];
        }
        continue;
    }

    i18nBraceDepth += (line.match(/\{/g)||[]).length - (line.match(/\}/g)||[]).length;

    if (/^\s*"fr"\s*:/.test(line)) hasFr = true;

    if (!inEn && /^\s*"en"\s*:\s*\{/.test(line)) {
        inEn = true;
        enBlock = [line];
        enBraceDepth = (line.match(/\{/g)||[]).length - (line.match(/\}/g)||[]).length;
        if (enBraceDepth <= 0) { inEn = false; parseEnBlock(enBlock); }
    } else if (inEn) {
        enBlock.push(line);
        enBraceDepth += (line.match(/\{/g)||[]).length - (line.match(/\}/g)||[]).length;
        if (enBraceDepth <= 0) { inEn = false; parseEnBlock(enBlock); }
    }

    if (i18nBraceDepth <= 0) {
        inI18n = false;
        if (!hasFr && (currentEnName || currentEnText)) {
            blockCount++;
            let entry = { name: currentEnName, text: currentEnText };
            if (currentEnText) allTexts.add(currentEnText);
            if (currentEnChoices.length > 0) {
                entry.choices = currentEnChoices;
                currentEnChoices.forEach(c => allTexts.add(c));
            }
            if (currentEnContext) {
                entry.context = currentEnContext;
                allTexts.add(currentEnContext);
            }
            if (currentEnPersonality) {
                entry.personality = currentEnPersonality;
                allTexts.add(currentEnPersonality);
            }
            results.push(entry);
        }
    }
}

let uniqueTexts = [...allTexts].filter(t => t.length > 0);
console.log('Total blocks missing fr:', blockCount);
console.log('Unique texts needing translation:', uniqueTexts.length);

fs.writeFileSync('d:/workspace/cupid/en_texts_day4_4.json', JSON.stringify(uniqueTexts, null, 2), 'utf8');
fs.writeFileSync('d:/workspace/cupid/en_entries_day4_4.json', JSON.stringify(results, null, 2), 'utf8');
