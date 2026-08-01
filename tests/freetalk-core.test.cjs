'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '../assets/js/freetalk-core.js'), 'utf8');
const window = {};
vm.runInNewContext(source, { window, Set, Object, String, Number, Array, Map, Math, encodeURIComponent });
const core = window.CupidFreeTalkCore;

test('cache fingerprint ignores dynamic context after the boundary', () => {
    const first = core.appendDynamicContext('stable prompt', 'turn one');
    const second = core.appendDynamicContext('stable prompt', 'turn two');
    assert.equal(core.getStablePromptFingerprint(first), core.getStablePromptFingerprint(second));
});

test('retry and failover status contracts remain distinct', () => {
    assert.equal(core.shouldRetryAiResponse({ ok: false, status: 429 }), true);
    assert.equal(core.shouldFailOverAiResponse({ ok: false, status: 422 }), true);
    assert.equal(core.shouldRetryAiResponse({ ok: false, status: 422 }), false);
    assert.equal(core.shouldFailOverAiResponse({ ok: false, status: 400 }), false);
});

test('latest-user canon strips URLs and preserves the newest user turn', () => {
    const block = core.buildLatestUserCanonBlock([
        { role: 'user', content: 'old' },
        { role: 'assistant', content: 'reply' },
        { role: 'user', content: 'new https://example.com fact' }
    ], 'en');
    assert.match(block, /new fact/);
    assert.doesNotMatch(block, /example\.com/);
});

test('repetition guard is deterministic for equivalent history', () => {
    const history = [
        { role: 'assistant', content: '결국 그는 작게 웃었다.' },
        { role: 'assistant', content: '결국 그녀도 작게 웃었다.' },
        { role: 'assistant', content: '결국 둘은 작게 웃었다.' },
        { role: 'user', content: '계속 이야기한다.' }
    ];
    assert.equal(
        core.buildRecentExpressionRepetitionGuard(history, 'ko'),
        core.buildRecentExpressionRepetitionGuard(structuredClone(history), 'ko')
    );
});
