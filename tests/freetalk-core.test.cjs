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

function read(relativePath) {
    return fs.readFileSync(path.join(__dirname, '..', relativePath), 'utf8');
}

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

test('affinity changes use the shared asymmetric -50 to +5 range', () => {
    assert.equal(core.AFFINITY_CHANGE_MIN, -50);
    assert.equal(core.AFFINITY_CHANGE_MAX, 5);
    assert.equal(core.normalizeAffinityChange(-999), -50);
    assert.equal(core.normalizeAffinityChange(-49.6), -50);
    assert.equal(core.normalizeAffinityChange(4.6), 5);
    assert.equal(core.normalizeAffinityChange(999), 5);
    assert.equal(core.normalizeAffinityChange('invalid'), 0);
    assert.match(core.buildAffinityChangeGuidance('ko'), /-50~\+5/);
    assert.match(core.buildAffinityChangeGuidance('en'), /-50 to \+5/);
    assert.match(core.buildAffinityChangeGuidance('ko'), /-6~-20/);
    assert.match(core.buildAffinityChangeGuidance('ko'), /-21~-50/);
});

test('outward expression remains independent from affinity direction', () => {
    const expressions = ['normal', 'smile', 'shy', 'angry', 'sad', 'worried'];
    assert.equal(core.normalizeAvailableExpression('smile', expressions), 'smile');
    assert.equal(core.normalizeAvailableExpression('sad', expressions), 'sad');
    assert.equal(core.normalizeAvailableExpression('ANGRY', expressions), 'angry');
    assert.equal(core.normalizeAvailableExpression('laugh', expressions), '');
    assert.equal(core.normalizeAvailableExpression('', expressions), '');
    assert.match(core.buildExpressionAffinityGuidance('ko'), /기계적으로 같은 방향에 맞추지 마세요/);
    assert.match(core.buildExpressionAffinityGuidance('en'), /Do not mechanically force them in the same direction/);
});

test('game and gallery affinity paths share the core normalizer', () => {
    assert.match(read('assets/js/modules/FreeTalkSystem.js'), /CupidFreeTalkCore\.normalizeAffinityChange\(change\)/);
    assert.match(read('assets/js/gallery-freetalk.js'), /GalleryFreeTalkCore\.normalizeAffinityChange\(value\)/);
    assert.match(read('assets/js/gallery-progress.js'), /CupidFreeTalkCore\.normalizeAffinityChange\(amount\)/);
    assert.match(read('assets/js/modules/FreeTalkSystem.js'), /normalizeAvailableExpression/);
    assert.match(read('assets/js/gallery-freetalk.js'), /normalizeAvailableExpression/);
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
