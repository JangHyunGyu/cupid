'use strict';
// iOS/macOS Safari < 16.4 rejects regex lookbehind ("invalid group specifier name"),
// which aborts the whole script (error_logs 7083-7107: freetalk-core.js on iOS 15.8).
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');

function browserScripts(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) return entry.name === 'vendor' ? [] : browserScripts(full);
        return entry.name.endsWith('.js') ? [full] : [];
    });
}

test('browser scripts avoid regex lookbehind for Safari 15', () => {
    const offenders = [];
    for (const file of browserScripts(path.join(root, 'assets/js'))) {
        fs.readFileSync(file, 'utf8').split('\n').forEach((line, index) => {
            if (/\(\?<[=!]/.test(line)) offenders.push(`${path.relative(root, file)}:${index + 1}`);
        });
    }
    assert.deepEqual(offenders, []);
});
