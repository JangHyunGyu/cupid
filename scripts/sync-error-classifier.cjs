'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const targets = ['assets/js/error-reporter.js', 'assets/js/loaders/game-loader.js', 'assets/js/loaders/gallery-loader.js', 'service-worker.js'];
const marker = /\/\/ BEGIN GENERATED CUPID ERROR CLASSIFIER[\s\S]*?\/\/ END GENERATED CUPID ERROR CLASSIFIER/;

function syncErrorClassifier(write = false) {
    const source = fs.readFileSync(path.join(root, 'assets/js/error-classifier.js'), 'utf8').replace(/\r\n/g, '\n').trim();
    const generated = '// BEGIN GENERATED CUPID ERROR CLASSIFIER\n' + source + '\n// END GENERATED CUPID ERROR CLASSIFIER';
    for (const relative of targets) {
        const file = path.join(root, relative);
        const before = fs.readFileSync(file, 'utf8');
        const normalized = before.replace(/\r\n/g, '\n');
        if (!marker.test(normalized)) throw new Error('Missing shared error-classifier marker: ' + relative);
        const updated = normalized.replace(marker, () => generated);
        if (updated === normalized) continue;
        if (!write) throw new Error('Shared error classifier is stale: ' + relative);
        fs.writeFileSync(file, before.includes('\r\n') ? updated.replace(/\n/g, '\r\n') : updated);
    }
    console.log('[errors] four embedded classifiers match their canonical source');
}

module.exports = { syncErrorClassifier };
if (require.main === module) syncErrorClassifier(process.argv.includes('--write'));
