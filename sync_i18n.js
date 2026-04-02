const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, 'assets', 'js', 'i18n');
const langs = ['en', 'ja', 'es', 'fr', 'de'];
const koPath = path.join(i18nPath, 'ko');

let addedKeysCount = 0;

fs.readdirSync(koPath).forEach(file => {
    if (!file.endsWith('.json')) return;
    
    const koData = JSON.parse(fs.readFileSync(path.join(koPath, file), 'utf8'));
    
    langs.forEach(lang => {
        const langFilePath = path.join(i18nPath, lang, file);
        if (!fs.existsSync(langFilePath)) return;
        
        let langData = JSON.parse(fs.readFileSync(langFilePath, 'utf8'));
        let modified = false;

        // Ensure keys in langData are in the exact same order as koData, and insert missing keys
        const newLangData = {};

        for (const key in koData) {
            if (langData[key]) {
                // Key exists, check if name or text needs translation fallback (optional)
                newLangData[key] = langData[key];
            } else {
                // Key is missing!
                newLangData[key] = koData[key]; // Copy deeply?
                modified = true;
                addedKeysCount++;
                console.log(`[${lang}] ${file}: Added missing key '${key}'`);
            }
        }

        if (modified) {
            // Check if we need to do multi-line stringification for nice formatting
            fs.writeFileSync(langFilePath, JSON.stringify(newLangData, null, 4), 'utf8');
        }
    });
});

console.log(`Done! Added ${addedKeysCount} missing keys across all languages.`);
