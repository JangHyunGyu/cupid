'use strict';
// Regression for 7eebb302: `let reply` became `const reply` in the Main FreeTalk reply path while the
// value is reassigned after parsing, so every 1:1 AI reply threw a TypeError ("connection lost").
// `node --check` does not catch const reassignment, so this test runs a scope-aware static check
// over every shipped runtime script and also proves the check flags the exact broken pattern.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const checker = path.join(root, 'scripts/check-const-reassign.cjs');

function runtimeScripts() {
    const files = [];
    const walk = dir => {
        for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
            const rel = path.join(dir, entry.name);
            if (entry.isDirectory()) walk(rel);
            else if (entry.name.endsWith('.js')) files.push(rel);
        }
    };
    walk('assets/js');
    walk('functions');
    files.push('service-worker.js');
    return files;
}

function runChecker(args, input) {
    return spawnSync(process.execPath, ['--expose-internals', checker, ...args], { cwd: root, encoding: 'utf8', input });
}

test('every shipped runtime script passes node --check', () => {
    for (const file of runtimeScripts()) {
        const result = spawnSync(process.execPath, ['--check', file], { cwd: root, encoding: 'utf8' });
        assert.equal(result.status, 0, `${file}: ${result.stderr}`);
    }
});

test('no shipped runtime script reassigns a const binding', () => {
    const files = runtimeScripts();
    assert.ok(files.includes(path.join('assets/js/modules/FreeTalkSystem.js')));
    assert.ok(files.includes(path.join('assets/js/gallery-freetalk.js')));
    const result = runChecker(files);
    assert.equal(result.status, 0, result.stderr || result.stdout);
});

test('the const checker flags the broken 7eebb302 reply path and accepts the fixed one', () => {
    const tmp = fs.mkdtempSync(path.join(require('node:os').tmpdir(), 'cupid-const-'));
    const broken = path.join(tmp, 'broken.js');
    const fixed = path.join(tmp, 'fixed.js');
    const body = kind => `class T { async send(core, data) {
        ${kind} reply = core.selectChatCompletionContent(data);
        if (!reply) throw new Error('empty');
        const parsed = JSON.parse(reply);
        if (parsed) { reply = String(parsed.text || ''); reply = reply.trim(); }
        for (const item of [1]) { let reply = item; reply += 1; }
        return reply;
    } }`;
    fs.writeFileSync(broken, body('const'));
    fs.writeFileSync(fixed, body('let'));
    const bad = runChecker([broken]);
    assert.equal(bad.status, 1);
    assert.match(bad.stderr, /broken\.js:5:\d+ assignment to const 'reply'/);
    assert.equal(runChecker([fixed]).status, 0);
    fs.rmSync(tmp, { recursive: true, force: true });
});

test('Main FreeTalk keeps the reassignable reply binding', () => {
    const source = fs.readFileSync(path.join(root, 'assets/js/modules/FreeTalkSystem.js'), 'utf8');
    assert.match(source, /let reply = CupidFreeTalkCore\.selectChatCompletionContent\(data\);/);
    assert.match(source, /reply = this\._sanitizeVisibleArtifacts\(this\._sanitizePlayerPlaceholders\(parsed\.text/);
});
