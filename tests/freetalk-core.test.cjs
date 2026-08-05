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

test('near-duplicate roleplay replies are rejected without blocking a new reaction', () => {
    const recentMessages = [{
        role: 'assistant',
        content: '유나는 그가 아직 잠든 것을 확인하고 이불을 다시 덮어 주었다. 따뜻한 물은 그가 깨어난 뒤 건네기로 했다.'
    }];
    assert.equal(core.isNearDuplicateReply(
        '유나는 그가 아직 잠든 것을 확인하고 이불을 다시 덮어 주었다. 따뜻한 물은 그가 깨어난 뒤 건네기로 했다.',
        recentMessages
    ), true);
    assert.equal(core.isNearDuplicateReply(
        '유나는 눈이 마주치자 물잔을 내밀며 밤새 기다렸다고 솔직하게 말했다.',
        recentMessages
    ), false);
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
    assert.match(core.buildAffinityChangeGuidance('ko'), /0을 기본값으로 삼지 말고/);
    assert.match(core.buildAffinityChangeGuidance('ko'), /겉으로 웃거나 태연하게 넘겨도/);
    assert.match(core.buildAffinityChangeGuidance('en'), /Do not treat 0 as the default/);
    assert.match(core.buildAffinityChangeGuidance('en'), /outwardly laughs it off or stays composed/);
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

test('visible payload guard blocks nested or malformed JSON protocol text', () => {
    assert.equal(
        core.getVisibleProtocolIssue({
            segments: [{ type: 'dialogue', text: '{"segments":[{"type":"dialogue","text":"Still here."}]}' }]
        }).reason,
        'embedded_json_value'
    );
    assert.equal(
        core.getVisibleProtocolIssue({ text: '{"Yuna pauses.":""}' }).reason,
        'embedded_json_value'
    );
    assert.equal(
        core.getVisibleProtocolIssue({ text: '{"segments":[{"type":"dialogue","text":"cut off"}' }).reason,
        'malformed_json_protocol'
    );
    assert.equal(
        core.getVisibleProtocolIssue({ text: '{"Yuna pauses.": .}' }).reason,
        'malformed_json_protocol'
    );
    assert.equal(
        core.getVisibleProtocolIssue({
            text: 'Yuna pauses, then looks up.',
            segments: [{ type: 'narration', text: 'Yuna pauses, then looks up.' }]
        }),
        null
    );
});

test('chat log content follows the text that actually rendered on screen', () => {
    assert.equal(
        core.resolveCupidAssistantLogContent('Expected structured response', {
            renderedContent: 'Actually visible response'
        }),
        'Actually visible response'
    );
    assert.equal(
        core.resolveCupidAssistantLogContent('Expected structured response', { renderedContent: '   ' }),
        'Expected structured response'
    );
});

test('gallery incident timing is turn-based with a 15-turn guard and 40-turn ceiling', () => {
    assert.equal(core.getGalleryIncidentTriggerChance(14), 0);
    assert.equal(core.getGalleryIncidentTriggerChance(15), 0.05);
    assert.equal(core.getGalleryIncidentTriggerChance(24), 0.05);
    assert.equal(core.getGalleryIncidentTriggerChance(25), 0.12);
    assert.equal(core.getGalleryIncidentTriggerChance(38), 0.12);
    assert.equal(core.getGalleryIncidentTriggerChance(39), 1);

    const beforeCeiling = core.normalizeGalleryIncidentState({ completedTurns: 38, quietTurns: 38 });
    assert.equal(core.planGalleryIncident(beforeCeiling, 0.99, 0.1), null);
    const atCeiling = core.normalizeGalleryIncidentState({ completedTurns: 39, quietTurns: 39 });
    assert.equal(core.planGalleryIncident(atCeiling, 0.99, 0.1).category, 'daily');

    let survival = 1;
    let expectedTurn = 0;
    for (let quietTurns = 0; quietTurns < core.GALLERY_INCIDENT_POLICY.guaranteedTurn; quietTurns++) {
        const chance = core.getGalleryIncidentTriggerChance(quietTurns);
        expectedTurn += (quietTurns + 1) * survival * chance;
        survival *= (1 - chance);
    }
    assert.ok(expectedTurn >= 25 && expectedTurn <= 29, `unexpected incident cadence: ${expectedTurn}`);
});

test('main and gallery prompts tell the model not to default affinity to zero', () => {
    const prompts = read('assets/js/prompts.js');
    const gallery = read('assets/js/gallery-freetalk.js');
    assert.match(prompts, /0을 관성적으로 넣지 말고 위 판정 기준에 따라 고르세요/);
    assert.match(gallery, /0을 관성적으로 넣지 말고 위 판정 기준에 따라 고르세요/);
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
    const eligiblePlan = core.planGalleryIncident(eligible, 0, 0.95);
    assert.equal(eligiblePlan.category, 'crisis');
    assert.equal(Object.hasOwn(eligiblePlan, 'crisisSeverityCap'), false);

    const coolingDown = { ...eligible, lastCrisisTurn: 250 };
    assert.equal(core.isGalleryCrisisEligible(coolingDown), false);
    assert.equal(core.planGalleryIncident(coolingDown, 0, 0.95).category, 'conflict');
});

test('incident impact is clamped by category and crisis severity', () => {
    assert.equal(core.normalizeGalleryIncidentImpact('daily', -999), -2);
    assert.equal(core.normalizeGalleryIncidentImpact('daily', 999), 0);
    assert.equal(core.normalizeGalleryIncidentImpact('conflict', -999), -5);
    assert.equal(core.normalizeGalleryIncidentImpact('conflict', 999), -2);
    assert.equal(core.normalizeGalleryIncidentImpact('crisis', -50, {
        severity: 'low'
    }), -29);
    assert.equal(core.normalizeGalleryIncidentImpact('crisis', -35, {
        severity: 'medium'
    }), -35);
    assert.equal(core.normalizeGalleryIncidentImpact('crisis', -999, {
        severity: 'high'
    }), -50);
    assert.equal(core.normalizeGalleryIncidentImpact('crisis', -50, { severity: '' }), 0);
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
    assert.match(block, /"severity":"low 또는 medium 또는 high"/);
    assert.match(block, /"impact":-25/);
    assert.match(block, /코드는 AI가 고른 강도를 다른 단계로 바꾸지 않는다|앱에서 다시 낮추거나 높이지 않으므로/);
    assert.doesNotMatch(block, /허용되는 최대 위기 강도/);
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

test('main story keeps every character message for the current run', () => {
    const stateWindow = { GAME_LANG: 'ko' };
    vm.runInNewContext(read('assets/js/modules/StateManager.js'), {
        window: stateWindow,
        console: { log() {}, error() {} }
    });
    const state = new stateWindow.StateManager();
    const fullHistory = [{ role: 'system', content: 'current scene prompt' }];
    for (let i = 0; i < 18; i++) {
        fullHistory.push({ role: 'user', content: `user-${i}` });
        fullHistory.push({ role: 'assistant', content: `assistant-${i}` });
    }

    state.setChatMemory('Seoyeon', fullHistory);

    assert.equal(state.getChatMemory('Seoyeon').length, 36);
    assert.equal(state.getChatMemory('Seoyeon')[0].content, 'user-0');
    assert.equal(state.getChatMemory('Seoyeon')[35].content, 'assistant-17');

    const freeTalk = read('assets/js/modules/FreeTalkSystem.js');
    const builderStart = freeTalk.indexOf('    _buildWindowedHistory(');
    const builderEnd = freeTalk.indexOf('    _buildInWorldUserRoleBlock(', builderStart);
    const builder = freeTalk.slice(builderStart, builderEnd);
    assert.match(builder, /return history\.slice\(\);/);
    assert.doesNotMatch(builder, /HISTORY_WINDOW|buildCupidPromptEpoch|slice\(-/);

    const latestStart = freeTalk.indexOf('    _forceLatestUserMessageLast(');
    const latestEnd = freeTalk.indexOf('    async sendChatMessage(', latestStart);
    const latest = freeTalk.slice(latestStart, latestEnd);
    assert.doesNotMatch(latest, /\.filter\(/);
    assert.match(latest, /lastMessage\?\.role === 'user'/);
});

test('new game clears only main-run state while gallery and D1 remain separate', () => {
    const stateWindow = { GAME_LANG: 'en' };
    vm.runInNewContext(read('assets/js/modules/StateManager.js'), {
        window: stateWindow,
        console: { log() {}, error() {} }
    });
    const state = new stateWindow.StateManager();
    state.playerName = 'Previous Player';
    state.currentDay = 5;
    state.stats.Seoyeon.affinity = 87;
    state.flags.ending_perfect_seoyeon = true;
    state.chatMemories.Seoyeon = [{ role: 'user', content: 'old run' }];
    state.chatPromptEpochs.Seoyeon = { version: 1, carryover: 'old run' };

    state.resetForNewGame();

    assert.equal(state.playerName, 'Protagonist');
    assert.equal(state.currentDay, 1);
    assert.equal(state.stats.Seoyeon.affinity, 0);
    assert.equal(Object.keys(state.flags).length, 0);
    assert.equal(Object.keys(state.chatMemories).length, 0);
    assert.equal(Object.keys(state.chatPromptEpochs).length, 0);

    const gameEngine = read('assets/js/modules/GameEngine.js');
    const start = gameEngine.indexOf('    async startNewGame()');
    const end = gameEngine.indexOf('    async continueGame()', start);
    const newGame = gameEngine.slice(start, end);
    assert.match(newGame, /this\.freeTalkSystem\.resetForNewGame\(\)/);
    assert.match(newGame, /this\.stateManager\.resetForNewGame\(\)/);
    assert.match(newGame, /this\.saveManager\.clear\(\)/);
    assert.doesNotMatch(newGame, /cupid_freetalk_memory|chat-logs|fetch\(/);

    const gallery = read('assets/js/gallery-freetalk.js');
    assert.match(gallery, /this\.MEMORY_KEY = 'cupid_freetalk_memory'/);
    assert.match(gallery, /all\[charId\] = chatOnly\.slice\(-20\)/);
});
