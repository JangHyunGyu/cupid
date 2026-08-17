'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const config = JSON.parse(fs.readFileSync(path.join(root, 'config/project.json'), 'utf8'));
const write = process.argv.includes('--write');
const check = process.argv.includes('--check') || !write;
const changed = [];

function update(relativePath, transforms) {
    const fullPath = path.join(root, relativePath);
    const before = fs.readFileSync(fullPath, 'utf8');
    const after = transforms.reduce((content, transform) => transform(content), before);
    if (before === after) return;
    changed.push(relativePath);
    if (write) fs.writeFileSync(fullPath, after, 'utf8');
}

function replaceRequired(pattern, replacement, label) {
    return content => {
        if (!pattern.test(content)) throw new Error(`${label}: expected pattern not found`);
        pattern.lastIndex = 0;
        return content.replace(pattern, replacement);
    };
}

const version = config.assetVersion;
const cacheVersion = config.serviceWorkerCacheVersion;

update('assets/js/loaders/config.js', [
    replaceRequired(/VERSION:\s*['"][^'"]+['"]/, `VERSION: '${version}'`, 'loader config version')
]);
update('assets/js/loaders/game-loader.js', [
    replaceRequired(/const\s+version\s*=\s*['"][^'"]+['"]/, `const version = '${version}'`, 'game loader version')
]);
update('assets/js/loaders/gallery-loader.js', [
    replaceRequired(/assets\/js\/loaders\/config\.js\?v=[0-9.]+/, `assets/js/loaders/config.js?v=${version}`, 'gallery config reference'),
    replaceRequired(/const\s+version\s*=\s*['"][^'"]+['"]/, `const version = '${version}'`, 'gallery loader version')
]);
update('assets/js/modules/config.js', [
    replaceRequired(/ASSET_VERSION\s*=\s*['"][^'"]+['"]/, `ASSET_VERSION = "${version}"`, 'asset version')
]);
update('service-worker.js', [
    replaceRequired(/const\s+CACHE_VERSION\s*=\s*['"][^'"]+['"]/, `const CACHE_VERSION = '${cacheVersion}'`, 'service worker cache version')
]);

for (const page of config.localizedPages) {
    for (const lang of config.languages) {
        const suffix = lang === config.defaultLanguage ? '' : `-${lang}`;
        const relativePath = `${page}${suffix}.html`;
        const transforms = [
            content => content.replace(
                /(assets\/js\/loaders\/(?:game|gallery)-loader\.js\?v=)[0-9.]+/g,
                `$1${version}`
            ),
            content => content.replace(
                /(assets\/js\/sound\.js\?v=)[0-9.]+/g,
                `$1${version}`
            ),
            content => content.replace(
                /(assets\/js\/modal-accessibility\.js\?v=)[0-9.]+/g,
                `$1${version}`
            )
        ];
        if (page === 'index') {
            transforms.push(replaceRequired(
                /\(v[0-9.]+\)<\/p>/,
                `(v${version})</p>`,
                `${relativePath} visible version`
            ));
        }
        update(relativePath, transforms);
    }
}

if (write && changed.length) {
    console.log(`[build] metadata synchronized: ${changed.join(', ')}`);
} else if (write) {
    console.log('[build] metadata already synchronized');
}

if (check && changed.length) {
    console.error(`[build] generated metadata is stale: ${changed.join(', ')}`);
    process.exitCode = 1;
} else if (check) {
    console.log('[build] metadata check passed');
}
