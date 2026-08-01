'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const config = JSON.parse(fs.readFileSync(path.join(root, 'config/project.json'), 'utf8'));
const errors = [];

for (const page of config.localizedPages) {
    for (const lang of config.languages) {
        const suffix = lang === config.defaultLanguage ? '' : `-${lang}`;
        const relativePath = `${page}${suffix}.html`;
        if (!fs.existsSync(path.join(root, relativePath))) errors.push(`missing page: ${relativePath}`);
    }
}

const i18nRoot = path.join(root, 'assets/js/i18n');
const canonicalDir = path.join(i18nRoot, config.defaultLanguage);
const canonicalFiles = fs.readdirSync(canonicalDir).filter(file => file.endsWith('.json')).sort();
for (const lang of config.languages) {
    const langDir = path.join(i18nRoot, lang);
    if (!fs.existsSync(langDir)) {
        errors.push(`missing i18n directory: ${lang}`);
        continue;
    }
    const files = fs.readdirSync(langDir).filter(file => file.endsWith('.json')).sort();
    const missing = canonicalFiles.filter(file => !files.includes(file));
    const extra = files.filter(file => !canonicalFiles.includes(file));
    if (missing.length) errors.push(`${lang}: missing i18n files: ${missing.join(', ')}`);
    if (extra.length) errors.push(`${lang}: unexpected i18n files: ${extra.join(', ')}`);
    for (const file of files) {
        try {
            JSON.parse(fs.readFileSync(path.join(langDir, file), 'utf8'));
        } catch (error) {
            errors.push(`${lang}/${file}: invalid JSON (${error.message})`);
        }
    }
}

const gameLoader = fs.readFileSync(path.join(root, 'assets/js/loaders/game-loader.js'), 'utf8');
const galleryLoader = fs.readFileSync(path.join(root, 'assets/js/loaders/gallery-loader.js'), 'utf8');
for (const marker of ['freetalk-core.js', 'modules/FreeTalkSystem.js', 'modules/GameEngine.js']) {
    if (!gameLoader.includes(marker)) errors.push(`game loader missing ${marker}`);
}
for (const marker of ['freetalk-core.js', 'gallery-freetalk.js', 'gallery.js']) {
    if (!galleryLoader.includes(marker)) errors.push(`gallery loader missing ${marker}`);
}

if (errors.length) {
    console.error(errors.map(error => `[structure] ${error}`).join('\n'));
    process.exitCode = 1;
} else {
    console.log(`[structure] ${config.localizedPages.length * config.languages.length} localized pages and ${canonicalFiles.length * config.languages.length} i18n files verified`);
}
