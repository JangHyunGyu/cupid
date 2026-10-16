const fs = require('fs');
const path = require('path');
const vm = require('vm');

const i18nPath = path.join(__dirname, 'assets', 'js', 'i18n');
const scenarioPath = path.join(__dirname, 'assets', 'js', 'scenario');
const langs = fs.readdirSync(i18nPath)
    .filter(name => fs.statSync(path.join(i18nPath, name)).isDirectory())
    .sort();
const koPath = path.join(i18nPath, 'ko');

let addedScenarioKeys = 0;
let copiedMissingKeys = 0;
let rewrittenFiles = 0;
const warnings = [];

function loadJson(filePath) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function saveJson(filePath, data) {
    const next = JSON.stringify(data, null, 4) + '\n';
    const prev = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
    if (prev !== next) {
        fs.writeFileSync(filePath, next, 'utf8');
        rewrittenFiles++;
    }
}

function clone(value) {
    return JSON.parse(JSON.stringify(value));
}

function loadScenario(file) {
    const scenarioFile = path.join(scenarioPath, file.replace(/\.json$/, '.js'));
    if (!fs.existsSync(scenarioFile)) return {};

    const context = {
        SCENARIO: {},
        console: { log() {}, warn() {}, error() {} }
    };
    vm.createContext(context);
    vm.runInContext(fs.readFileSync(scenarioFile, 'utf8'), context, { filename: scenarioFile });

    return Object.values(context.SCENARIO).find(day => day && Object.keys(day).length) || {};
}

function hasTranslatablePayload(scene) {
    return !!scene && (
        ['name', 'text', 'context', 'personality', 'affinityText'].some(key => scene[key] !== undefined)
        || Array.isArray(scene.choices)
    );
}

fs.readdirSync(koPath).forEach(file => {
    if (!file.endsWith('.json')) return;

    const scenario = loadScenario(file);
    const scenarioKeys = Object.keys(scenario);
    const koFilePath = path.join(koPath, file);
    const koData = loadJson(koFilePath);

    let koModified = false;
    for (const key of scenarioKeys) {
        if (koData[key] !== undefined) continue;

        if (hasTranslatablePayload(scenario[key])) {
            warnings.push(`[ko] ${file}: scenario key '${key}' has text/choices but no ko i18n entry`);
            continue;
        }

        koData[key] = {};
        koModified = true;
        addedScenarioKeys++;
        console.log(`[ko] ${file}: Added branch-only scenario key '${key}'`);
    }

    const orderedKoData = {};
    for (const key of scenarioKeys) {
        if (koData[key] !== undefined) orderedKoData[key] = koData[key];
    }
    for (const key of Object.keys(koData)) {
        if (orderedKoData[key] === undefined) orderedKoData[key] = koData[key];
    }
    if (koModified || JSON.stringify(Object.keys(orderedKoData)) !== JSON.stringify(Object.keys(koData))) {
        saveJson(koFilePath, orderedKoData);
    }

    langs.forEach(lang => {
        if (lang === 'ko') return;

        const langFilePath = path.join(i18nPath, lang, file);
        if (!fs.existsSync(langFilePath)) return;

        const langData = loadJson(langFilePath);
        const newLangData = {};

        // Keep every locale in the same scenario/ko order, and add missing keys.
        for (const key of Object.keys(orderedKoData)) {
            if (langData[key] !== undefined) {
                newLangData[key] = langData[key];
            } else {
                newLangData[key] = clone(orderedKoData[key]);
                copiedMissingKeys++;
                console.log(`[${lang}] ${file}: Added missing key '${key}'`);
            }
        }

        // Preserve unexpected extra keys at the end instead of deleting user work.
        for (const key of Object.keys(langData)) {
            if (newLangData[key] === undefined) {
                newLangData[key] = langData[key];
                warnings.push(`[${lang}] ${file}: extra key preserved '${key}'`);
            }
        }

        saveJson(langFilePath, newLangData);
    });
});

console.log(`Done! Added ${addedScenarioKeys} ko scenario keys, copied ${copiedMissingKeys} locale keys, rewrote ${rewrittenFiles} files.`);
if (warnings.length) {
    console.log('\nWarnings:');
    warnings.forEach(warning => console.log(`- ${warning}`));
}
