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

test('selective memory retrieval searches old recall needs but skips live or recently covered context', () => {
    assert.equal(core.getPromptMemoryRetrievalDecision('오늘은 같이 옥상에 갈까?', []).reason, 'live_scene');
    assert.equal(core.getPromptMemoryRetrievalDecision('지난번에 내가 준 열쇠를 기억해?', [
        { role: 'user', content: '지난번에 내가 준 열쇠를 기억해?' }
    ]).reason, 'older_memory_needed');
    assert.equal(core.getPromptMemoryRetrievalDecision('그 열쇠를 어디에 뒀는지 기억해?', [
        { role: 'assistant', content: '네가 준 열쇠는 책상 서랍 안에 넣어 뒀어.' },
        { role: 'user', content: '그 열쇠를 어디에 뒀는지 기억해?' }
    ]).reason, 'covered_by_recent_context');
    assert.equal(core.getPromptMemoryRetrievalDecision('What key did I give you last time?', [
        { role: 'assistant', content: 'A monkey climbed past the window.' },
        { role: 'user', content: 'What key did I give you last time?' }
    ]).retrieve, true, 'key must not match as a substring of monkey');
});

test('memory recall query and candidates stay compact, relevant, and explicitly non-canonical', () => {
    const messages = [
        { role: 'assistant', content: '오늘은 비가 많이 오네.' },
        { role: 'user', content: '그러게. 우산을 가져오길 잘했어.' },
        { role: 'user', content: '지난번 약속을 기억해?' }
    ];
    const query = core.buildPromptMemoryQuery('지난번 약속을 기억해?', messages);
    assert.match(query, /character: 오늘은 비가 많이 오네/);
    assert.match(query, /user: 지난번 약속을 기억해\?/);
    assert.ok(query.length <= 900);

    const hits = core.filterPromptMemoryHits([
        { id: 1, score: 0.61, role: 'assistant', content: '점수가 낮아서 제외되어야 하는 오래된 답변입니다.' },
        { id: 2, score: 0.91, role: 'user', content: '졸업식 날 옥상에서 다시 만나자고 약속했어.', created_at: '2026-01-01 10:00:00' },
        { id: 3, score: 0.88, role: 'assistant', content: '그 약속은 분홍색 리본과 함께 기억하고 있어.', created_at: '2026-01-01 10:01:00' },
        { id: 4, score: 0.87, role: 'assistant', content: '오늘은 비가 많이 오네.' },
        { id: 5, score: 0.86, role: 'assistant', content: '세 번째로 남겨 둘 충분히 구체적인 과거 기억이야.', created_at: '2026-01-02 10:00:00' },
        { id: 6, score: 0.85, role: 'assistant', content: '네 번째 후보는 최대 세 개 제한 때문에 제외되어야 해.', created_at: '2026-01-03 10:00:00' }
    ], query, messages);
    assert.equal(hits.length, 3);
    assert.equal(hits[0].id, 2);
    assert.equal(hits[1].id, 3);
    assert.equal(hits[2].id, 5);

    const block = core.buildDataBankRecallBlock(hits, {
        lang: 'ko',
        playerName: '민준',
        characterName: '유나'
    });
    assert.match(block, /Data Bank 회상 후보 — 비정본/);
    assert.match(block, /민준: 졸업식 날/);
    assert.match(block, /유나: 그 약속은/);
    assert.match(block, /현재 동의로 간주하지 않으며/);
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
    assert.match(core.buildAffinityChangeGuidance('ko'), /-5~-9/);
    assert.match(core.buildAffinityChangeGuidance('ko'), /-10~-20/);
    assert.match(core.buildAffinityChangeGuidance('ko'), /-21~-35/);
    assert.match(core.buildAffinityChangeGuidance('ko'), /-36~-50/);
    assert.match(core.buildAffinityChangeGuidance('ko'), /사용자가 이번 턴 안에서 실제로 사과·해명·수습한 경우만/);
    assert.match(core.buildAffinityChangeGuidance('ko'), /실제 감점이라면 -1로 축소하지 마세요/);
    assert.match(core.buildAffinityChangeGuidance('ko'), /겉으로 웃거나 태연하게 넘겨도/);
    assert.match(core.buildAffinityChangeGuidance('en'), /-36 to -50/);
    assert.match(core.buildAffinityChangeGuidance('en'), /count recovery only when the user actually apologizes/);
    assert.match(core.buildAffinityChangeGuidance('en'), /do not shrink it to -1/);
    assert.match(core.buildAffinityChangeGuidance('en'), /outwardly laughs it off or stays composed/);
});

test('relationship hurt lingers across topic changes and softens without an instant reset', () => {
    const hurt = core.updateRelationshipAftermath(
        null,
        -8,
        '싫다고 했는데도 또 그런 농담을 했어.'
    );
    assert.equal(hurt.intensity, 8);
    assert.equal(hurt.remainingTurns, 5);
    assert.equal(hurt.causes.length, 1);

    const afterTopicChange = core.updateRelationshipAftermath(hurt, 0, '그런데 오늘 저녁은 뭐 먹을까?');
    assert.ok(afterTopicChange);
    assert.equal(afterTopicChange.intensity, 7);
    assert.equal(afterTopicChange.remainingTurns, 4);
    assert.match(afterTopicChange.causes[0].excerpt, /그런 농담/);
    assert.doesNotMatch(afterTopicChange.causes[0].excerpt, /저녁/);

    const afterRepair = core.updateRelationshipAftermath(afterTopicChange, 5, '미안해. 다시는 안 할게.');
    assert.ok(afterRepair, 'one positive repair must not erase the prior hurt immediately');
    assert.equal(afterRepair.intensity, 2);
    assert.equal(afterRepair.remainingTurns, 2);

    const block = core.buildRelationshipAftermathBlock({ lang: 'ko', state: afterRepair });
    assert.match(block, /아직 풀리지 않은 감정의 여운/);
    assert.match(block, /화제가 바뀌거나/);
    assert.match(block, /한 번의 수습만으로 자동 초기화하지 마세요/);
    assert.match(block, /이 여운 자체를 새 감점 사유로 삼지는 마세요/);

    let expired = afterRepair;
    for (let turn = 0; turn < 10 && expired; turn++) {
        expired = core.updateRelationshipAftermath(expired, 0, '평범한 다음 대화');
    }
    assert.equal(expired, null);
});

test('repeated harm accumulates causes and emotional aftermath stays outside the cache fingerprint', () => {
    const first = core.updateRelationshipAftermath(null, -6, '약속을 또 잊었어.');
    const repeated = core.updateRelationshipAftermath(first, -12, '거짓말로 들키지 않으려 했어.');
    assert.ok(repeated.intensity > first.intensity);
    assert.ok(repeated.remainingTurns > first.remainingTurns);
    assert.equal(repeated.causes.length, 2);
    assert.match(repeated.causes[0].excerpt, /거짓말/);
    assert.match(repeated.causes[1].excerpt, /약속/);

    const incident = core.updateRelationshipAftermath(
        null,
        -25,
        '서로의 신뢰를 흔든 관계 사건',
        { source: 'incident' }
    );
    const incidentBlock = core.buildRelationshipAftermathBlock({ lang: 'ko', state: incident });
    assert.match(incidentBlock, /관계 사건/);

    const firstPrompt = core.appendDynamicContext('stable prompt', core.buildRelationshipAftermathBlock({
        lang: 'ko',
        state: first
    }));
    const repeatedPrompt = core.appendDynamicContext('stable prompt', core.buildRelationshipAftermathBlock({
        lang: 'ko',
        state: repeated
    }));
    assert.equal(
        core.getStablePromptFingerprint(firstPrompt),
        core.getStablePromptFingerprint(repeatedPrompt)
    );
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

test('chat log preserves narration formatting after the source renders successfully', () => {
    assert.equal(
        core.resolveCupidAssistantLogContent('*서연이 잠시 걸음을 멈췄다.* 그래. 같이 가자.', {
            expectedContent: '서연이 잠시 걸음을 멈췄다. 그래. 같이 가자.',
            renderedContent: '서연이 잠시 걸음을 멈췄다.그래.같이 가자.',
            status: 'rendered'
        }),
        '*서연이 잠시 걸음을 멈췄다.* 그래. 같이 가자.'
    );
    assert.equal(
        core.resolveCupidAssistantLogContent('Expected structured response', {
            renderedContent: 'Actually visible response',
            status: 'mismatch'
        }),
        'Actually visible response'
    );
    assert.equal(
        core.resolveCupidAssistantLogContent('Expected structured response', { renderedContent: '   ' }),
        'Expected structured response'
    );
});

test('gallery incident timing is turn-based with a 10-turn guard and 30-turn ceiling', () => {
    assert.equal(core.getGalleryIncidentTriggerChance(9), 0);
    assert.equal(core.getGalleryIncidentTriggerChance(10), 0.08);
    assert.equal(core.getGalleryIncidentTriggerChance(17), 0.08);
    assert.equal(core.getGalleryIncidentTriggerChance(18), 0.18);
    assert.equal(core.getGalleryIncidentTriggerChance(28), 0.18);
    assert.equal(core.getGalleryIncidentTriggerChance(29), 1);

    const beforeCeiling = core.normalizeGalleryIncidentState({ completedTurns: 28, quietTurns: 28 });
    assert.equal(core.planGalleryIncident(beforeCeiling, 0.99, 0.1), null);
    const atCeiling = core.normalizeGalleryIncidentState({ completedTurns: 29, quietTurns: 29 });
    assert.equal(core.planGalleryIncident(atCeiling, 0.99, 0.1).category, 'daily');

    let survival = 1;
    let expectedTurn = 0;
    for (let quietTurns = 0; quietTurns < core.GALLERY_INCIDENT_POLICY.guaranteedTurn; quietTurns++) {
        const chance = core.getGalleryIncidentTriggerChance(quietTurns);
        expectedTurn += (quietTurns + 1) * survival * chance;
        survival *= (1 - chance);
    }
    assert.ok(expectedTurn >= 18 && expectedTurn <= 22, `unexpected incident cadence: ${expectedTurn}`);
});

test('main and gallery prompts avoid a single numeric affinity anchor', () => {
    const prompts = read('assets/js/prompts.js');
    const gallery = read('assets/js/gallery-freetalk.js');
    assert.match(prompts, /<판정한 정수>/);
    assert.match(gallery, /<판정한 정수>/);
    assert.match(prompts, /예시 점수를 복사하거나 0을 관성적으로 넣지 마세요/);
    assert.match(gallery, /예시 점수를 복사하거나 0을 관성적으로 넣지 마세요/);
    assert.doesNotMatch(prompts, /"affinity":-1/);
    assert.doesNotMatch(gallery, /"affinity":-1/);
});

test('gallery incident categories preserve 45/45/10 weighting when crisis is eligible', () => {
    assert.equal(core.selectGalleryIncidentCategory(0.4499, true), 'daily');
    assert.equal(core.selectGalleryIncidentCategory(0.45, true), 'conflict');
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
    assert.equal(core.normalizeGalleryIncidentImpact('daily', -999), -3);
    assert.equal(core.normalizeGalleryIncidentImpact('daily', 999), -1);
    assert.equal(core.normalizeGalleryIncidentImpact('daily', undefined), -2);
    assert.equal(core.normalizeGalleryIncidentImpact('conflict', -999), -10);
    assert.equal(core.normalizeGalleryIncidentImpact('conflict', 999), -5);
    assert.equal(core.normalizeGalleryIncidentImpact('conflict', undefined), -7);
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

test('scheduled and active gallery incidents cannot commit without their required payload', () => {
    const state = core.normalizeGalleryIncidentState({ completedTurns: 29, quietTurns: 29 });
    const plan = core.planGalleryIncident(state, 0.99, 0.5);
    assert.equal(plan.category, 'conflict');
    assert.deepEqual(
        Array.from(core.getGalleryIncidentContractIssue({ state, plan, payload: null }).issues),
        ['scheduled_gallery_incident_payload_missing']
    );
    assert.equal(core.getGalleryIncidentContractIssue({
        state,
        plan,
        payload: { status: 'started', summary: '약속의 해석을 두고 충돌이 시작됐다.', impact: -7 }
    }).shouldRetry, false);

    const activeState = core.normalizeGalleryIncidentState({
        completedTurns: 30,
        quietTurns: 0,
        activeIncident: {
            category: 'conflict',
            summary: '해결되지 않은 약속 갈등',
            startedAtTurn: 30,
            turns: 1
        }
    });
    assert.deepEqual(
        Array.from(core.getGalleryIncidentContractIssue({ state: activeState, payload: { status: 'started' } }).issues),
        ['active_gallery_incident_payload_missing']
    );
    assert.equal(core.getGalleryIncidentContractIssue({
        state: activeState,
        payload: { status: 'ongoing', summary: '두 사람이 조건을 좁혔지만 아직 합의하지 못했다.' }
    }).shouldRetry, false);
});

test('gallery runtime wires incident planning, persistence, and AI payload parsing', () => {
    const gallery = read('assets/js/gallery-freetalk.js');
    const prompts = read('assets/js/prompts.js');
    const progress = read('assets/js/gallery-progress.js');
    assert.match(gallery, /_prepareGalleryIncidentRuntime/);
    assert.match(gallery, /_commitGalleryIncidentTurn/);
    assert.match(gallery, /normalizeGalleryIncidentPayload\(parsed\.incident\)/);
    assert.match(gallery, /incidentState: requestContext\.incidentRuntime\?\.state/);
    assert.match(prompts, /scheduled_gallery_incident_payload_missing/);
    assert.match(prompts, /active_gallery_incident_payload_missing/);
    assert.match(progress, /getGalleryIncidentState\(charId\)/);
    assert.match(progress, /setGalleryIncidentState\(charId, state\)/);
    assert.match(gallery, /buildRelationshipAftermathBlock/);
    assert.match(gallery, /updateRelationshipAftermath/);
    assert.match(progress, /getRelationshipAftermath\(charId\)/);
    assert.match(progress, /setRelationshipAftermath\(charId, state\)/);
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

test('main relationship aftermath survives save import and is isolated per character', () => {
    const stateWindow = { GAME_LANG: 'ko', CupidFreeTalkCore: core };
    vm.runInNewContext(read('assets/js/modules/StateManager.js'), {
        window: stateWindow,
        console: { log() {}, error() {} }
    });
    const state = new stateWindow.StateManager();
    const aftermath = core.updateRelationshipAftermath(null, -15, '경계를 분명히 무시했다.');
    state.setRelationshipAftermath('Yuna', aftermath);

    const exported = state.exportState();
    const restored = new stateWindow.StateManager();
    restored.importState(exported);

    assert.equal(restored.getRelationshipAftermath('Seoyeon'), null);
    assert.equal(restored.getRelationshipAftermath('Yuna').intensity, 15);
    assert.match(restored.getRelationshipAftermath('Yuna').causes[0].excerpt, /경계/);
    assert.match(read('assets/js/modules/FreeTalkSystem.js'), /buildRelationshipAftermathBlock/);
    assert.match(read('assets/js/modules/FreeTalkSystem.js'), /updateRelationshipAftermath/);
    assert.match(read('assets/js/modules/FreeTalkSystem.js'), /window\.saveGameState\?\.\(\)/);
});

test('gallery relationship aftermath persists through its local save store', () => {
    const saved = new Map();
    const localStorage = {
        getItem(key) { return saved.has(key) ? saved.get(key) : null; },
        setItem(key, value) { saved.set(key, String(value)); }
    };
    const galleryWindow = {
        location: { search: '' },
        CupidFreeTalkCore: core
    };
    vm.runInNewContext(read('assets/js/gallery-progress.js'), {
        window: galleryWindow,
        localStorage,
        GalleryData: { VERSION: 2 },
        URLSearchParams,
        console: { log() {}, warn() {}, error() {} }
    });

    const progress = new galleryWindow.GalleryProgress();
    const aftermath = core.updateRelationshipAftermath(null, -22, '서로의 신뢰가 흔들린 사건', {
        source: 'incident'
    });
    progress.setRelationshipAftermath('seyoun', aftermath);

    const restored = new galleryWindow.GalleryProgress();
    assert.equal(restored.getRelationshipAftermath('yuna'), null);
    assert.equal(restored.getRelationshipAftermath('seyoun').intensity, 22);
    assert.equal(restored.getRelationshipAftermath('seyoun').causes[0].source, 'incident');
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
    state.relationshipAftermaths.Seoyeon = core.updateRelationshipAftermath(null, -10, 'old hurt');

    state.resetForNewGame();

    assert.equal(state.playerName, 'Protagonist');
    assert.equal(state.currentDay, 1);
    assert.equal(state.stats.Seoyeon.affinity, 0);
    assert.equal(Object.keys(state.flags).length, 0);
    assert.equal(Object.keys(state.chatMemories).length, 0);
    assert.equal(Object.keys(state.chatPromptEpochs).length, 0);
    assert.equal(Object.keys(state.relationshipAftermaths).length, 0);

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
