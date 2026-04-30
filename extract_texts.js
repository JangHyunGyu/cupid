const fs = require('fs');
const path = require('path');

const scenarioDir = path.join(__dirname, 'assets', 'js', 'scenario');
const i18nRoot = path.join(__dirname, 'assets', 'js', 'i18n');
const esStringPattern = String.raw`((?:[^"\\]|\\.)*)`;
const esTextRe = new RegExp(String.raw`"es"\s*:\s*\{[\s\S]*?"text"\s*:\s*"${esStringPattern}"`, 'g');
const esChoicesRe = new RegExp(String.raw`"es"\s*:\s*\{[\s\S]*?"choices"\s*:\s*\[([\s\S]*?)\]`, 'g');
const quotedStringRe = new RegExp(String.raw`"${esStringPattern}"`, 'g');

const DEFAULT_FILES = ['day1_1_morning', 'day1_2_lunch'];

function normalizeStem(value) {
    return path.basename(value, path.extname(value));
}

function addNodeTexts(node, texts, choices) {
    if (!node || typeof node !== 'object') return;
    if (typeof node.text === 'string' && node.text) texts.add(node.text);
    if (Array.isArray(node.choices)) {
        node.choices
            .filter(choice => typeof choice === 'string' && choice)
            .forEach(choice => choices.add(choice));
    }
}

function extractFromI18nJson(locale, fileStem) {
    const filePath = path.join(i18nRoot, locale, `${fileStem}.json`);
    if (!fs.existsSync(filePath)) return null;

    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const texts = new Set();
    const choices = new Set();
    Object.values(data).forEach(node => addNodeTexts(node, texts, choices));
    return { texts: [...texts], choices: [...choices] };
}

function extractTexts(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Find all es text fields (which currently have English text)
    let m, texts = new Set();
    esTextRe.lastIndex = 0;
    while ((m = esTextRe.exec(content)) !== null) {
        texts.add(m[1]);
    }
    return [...texts];
}

// Also extract choices from es blocks  
function extractChoices(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    let m, texts = new Set();
    esChoicesRe.lastIndex = 0;
    while ((m = esChoicesRe.exec(content)) !== null) {
        quotedStringRe.lastIndex = 0;
        let choice;
        while ((choice = quotedStringRe.exec(m[1])) !== null) {
            texts.add(choice[1]);
        }
    }
    return [...texts];
}

function extractFile(locale, fileStem) {
    const fromJson = extractFromI18nJson(locale, fileStem);
    if (fromJson) return fromJson;

    const scenarioPath = path.join(scenarioDir, `${fileStem}.js`);
    return {
        texts: extractTexts(scenarioPath),
        choices: extractChoices(scenarioPath)
    };
}

const args = process.argv.slice(2);
const locale = args[0] && fs.existsSync(path.join(i18nRoot, args[0])) ? args.shift() : 'es';
const fileStems = args.length ? args.map(normalizeStem) : DEFAULT_FILES;

const extracted = fileStems.map(fileStem => extractFile(locale, fileStem));
const allTexts = [...new Set(extracted.flatMap(item => item.texts))];
const allChoices = [...new Set(extracted.flatMap(item => item.choices))];

console.log(`Locale: ${locale}`);
console.log(`Files: ${fileStems.join(', ')}`);
console.log('Unique text entries: ' + allTexts.length);
console.log('Unique choice entries: ' + allChoices.length);
console.log('\n=== TEXTS ===');
allTexts.forEach((t, i) => console.log(i + '|||' + t));
console.log('\n=== CHOICES ===');
allChoices.forEach((t, i) => console.log(i + '|||' + t));
