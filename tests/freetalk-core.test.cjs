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

test('gallery incident timing is turn-based with a 60-turn guard and 100-turn ceiling', () => {
    assert.equal(core.getGalleryIncidentTriggerChance(59), 0);
    assert.equal(core.getGalleryIncidentTriggerChance(60), 0.02);
    assert.equal(core.getGalleryIncidentTriggerChance(79), 0.02);
    assert.equal(core.getGalleryIncidentTriggerChance(80), 0.05);
    assert.equal(core.getGalleryIncidentTriggerChance(98), 0.05);
    assert.equal(core.getGalleryIncidentTriggerChance(99), 1);

    const beforeCeiling = core.normalizeGalleryIncidentState({ completedTurns: 98, quietTurns: 98 });
    assert.equal(core.planGalleryIncident(beforeCeiling, 0.99, 0.1), null);
    const atCeiling = core.normalizeGalleryIncidentState({ completedTurns: 99, quietTurns: 99 });
    assert.equal(core.planGalleryIncident(atCeiling, 0.99, 0.1).category, 'daily');
});

test('gallery incident categories preserve 60/30/10 weighting when crisis is eligible', () => {
    assert.equal(core.selectGalleryIncidentCategory(0.59, true), 'daily');
    assert.equal(core.selectGalleryIncidentCategory(0.6, true), 'conflict');
    assert.equal(core.selectGalleryIncidentCategory(0.8999, true), 'conflict');
    assert.equal(core.selectGalleryIncidentCategory(0.9, true), 'crisis');
    assert.equal(core.selectGalleryIncidentCategory(0.99, false), 'conflict');
});

test('trust crises require actual negative evidence and enforce the 300-turn cooldown', () => {
    const eligible = core.normalizeGalleryIncidentState({
        completedTurns: 500,
        quietTurns: 99,
        negativeSignals: [
            { turn: 470, weight: 3, excerpt: '첫 번째 실제 입력' },
            { turn: 480, weight: 3, excerpt: '두 번째 실제 입력' }
        ]
    });
    assert.equal(core.isGalleryCrisisEligible(eligible), true);
    assert.equal(core.planGalleryIncident(eligible, 0, 0.95).category, 'crisis');

    const coolingDown = { ...eligible, lastCrisisTurn: 250 };
    assert.equal(core.isGalleryCrisisEligible(coolingDown), false);
    assert.equal(core.planGalleryIncident(coolingDown, 0, 0.95).category, 'conflict');
});

test('incident impact is clamped by category and a trust crisis always starts at -50', () => {
    assert.equal(core.normalizeGalleryIncidentImpact('daily', -999), -2);
    assert.equal(core.normalizeGalleryIncidentImpact('daily', 999), 0);
    assert.equal(core.normalizeGalleryIncidentImpact('conflict', -999), -5);
    assert.equal(core.normalizeGalleryIncidentImpact('conflict', 999), -2);
    assert.equal(core.normalizeGalleryIncidentImpact('crisis', 5), -50);
    assert.equal(core.normalizeGalleryIncidentImpact('crisis', -999), -50);
});

test('incident evidence stores real user excerpts and positive turns reduce it', () => {
    let state = core.normalizeGalleryIncidentState({ completedTurns: 80 });
    state = core.updateGalleryIncidentEvidence(state, -20, '약속을 또 무시할게.');
    assert.equal(state.negativeSignals.length, 1);
    assert.equal(state.negativeSignals[0].weight, 3);
    assert.match(state.negativeSignals[0].excerpt, /약속/);
    state = core.updateGalleryIncidentEvidence(state, 2, '미안해. 다음부터 확인할게.');
    assert.equal(state.negativeSignals[0].weight, 1);
    state = core.updateGalleryIncidentEvidence(state, 1, '행동으로 보여줄게.');
    assert.equal(state.negativeSignals.length, 0);
});

test('gallery incident prompt delegates specifics to AI without inventing user actions', () => {
    const state = core.normalizeGalleryIncidentState({
        completedTurns: 400,
        quietTurns: 99,
        negativeSignals: [{ turn: 390, weight: 6, excerpt: '네가 싫어하는 걸 알아도 강요할 거야.' }]
    });
    const block = core.buildGalleryIncidentRuntimeBlock({
        lang: 'ko',
        characterName: '유나',
        state,
        plan: { category: 'crisis' }
    });
    assert.match(block, /구체적인 사건은 유나의 설정/);
    assert.match(block, /사용자가 하지 않은 말·행동·약속 위반을 사실로 지어내지 마세요/);
    assert.match(block, /"impact":-50/);
    assert.match(block, /강요할 거야/);
});

test('gallery runtime wires incident planning, persistence, and AI payload parsing', () => {
    const gallery = read('assets/js/gallery-freetalk.js');
    const progress = read('assets/js/gallery-progress.js');
    assert.match(gallery, /_prepareGalleryIncidentRuntime/);
    assert.match(gallery, /_commitGalleryIncidentTurn/);
    assert.match(gallery, /normalizeGalleryIncidentPayload\(parsed\.incident\)/);
    assert.match(progress, /getGalleryIncidentState\(charId\)/);
    assert.match(progress, /setGalleryIncidentState\(charId, state\)/);
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
