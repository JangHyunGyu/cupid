'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '../assets/js/freetalk-core.js'), 'utf8');
const window = {};
vm.runInNewContext(source, {
    window,
    Set,
    Object,
    String,
    Number,
    Array,
    Map,
    Math,
    JSON,
    Promise,
    TextDecoder,
    Uint8Array,
    encodeURIComponent
});
const core = window.CupidFreeTalkCore;
const composer = require('../assets/js/modules/MessageComposerUtils.js');

function read(relativePath) {
    return fs.readFileSync(path.join(__dirname, '..', relativePath), 'utf8');
}

test('partial structured output becomes narration and dialogue before JSON completion', () => {
    const partial = '{"segments":[{"type":"narration","text":"창가에 비가 번졌다."},{"type":"dialogue","text":"조금만 더';
    const preview = core.extractStreamingSegmentsPreview(partial);
    assert.equal(preview.text, '창가에 비가 번졌다.\n\n조금만 더');
    assert.deepEqual(Array.from(preview.segments, segment => `${segment.type}:${segment.text}`), [
        'narration:창가에 비가 번졌다.',
        'dialogue:조금만 더'
    ]);
});

test('group streaming preview stays inside the first speaker object', () => {
    const source = JSON.stringify({
        conversations: [
            { name: '서연', segments: [{ type: 'dialogue', text: '첫 번째 응답' }] },
            { name: '다인', segments: [{ type: 'dialogue', text: '두 번째 응답' }] }
        ]
    });
    const preview = core.extractFirstStreamingConversationPreview(source);
    assert.equal(preview.name, '서연');
    assert.equal(preview.text, '첫 번째 응답');
    assert.doesNotMatch(preview.text, /두 번째/);
});

test('collection fallback keeps every streamed narration and dialogue segment after completion', () => {
    const payload = {
        sceneNarration: 'The hallway lights dim.',
        sceneMessages: [
            { name: 'Scene', type: 'scene', text: 'Rain taps against the glass.' },
            { name: 'A', segments: [{ type: 'dialogue', text: 'Stay close.' }] },
            { name: 'Scene', segments: [{ type: 'scene', text: 'The door opens slowly.' }] },
            { name: 'A', segments: [{ type: 'dialogue', text: 'We should move.' }] }
        ]
    };
    const preview = core.extractStreamingSegmentsPreview(JSON.stringify(payload));
    const completed = core.normalizeCupidResponsePayload(payload);
    const previewSegments = Array.from(preview.segments, segment => `${segment.type}:${segment.text}`);
    const completedSegments = Array.from(completed.segments, segment => `${segment.type}:${segment.text}`);

    assert.deepEqual(completedSegments, [
        'narration:The hallway lights dim.',
        'narration:Rain taps against the glass.',
        'dialogue:Stay close.',
        'narration:The door opens slowly.',
        'dialogue:We should move.'
    ]);
    assert.deepEqual(completedSegments, previewSegments);
});

test('paced preview starts immediately and then reveals at most two characters per animation frame', async () => {
    const scheduled = [];
    const rendered = [];
    const preview = core.createPacedStreamingPreview({
        onRender: frame => rendered.push(frame.text),
        characterDelayMs: 10,
        maxCharactersPerFrame: 2,
        now: () => 0,
        scheduleFrame(callback) {
            scheduled.push({ callback });
            return scheduled.length;
        },
        cancelFrame() {}
    });

    preview.update('가나다라마', [{ type: 'dialogue', text: '가나다라마' }]);
    assert.deepEqual(rendered, ['가']);
    scheduled.shift().callback(20);
    assert.equal(rendered.at(-1), '가나다');
    scheduled.shift().callback(40);
    assert.equal(rendered.at(-1), '가나다라마');
    await preview.drain();
    preview.stop();
});

test('SSE reader exposes deltas before returning final provider and cache metadata', async () => {
    const encoder = new TextEncoder();
    const pieces = [
        'data: {"choices":[{"delta":{"content":"{\\"segments\\":[{\\"type\\":\\"dialogue\\",\\"text\\":\\"안"}}]}\n\n',
        'data: {"choices":[{"delta":{"content":"녕\\"}]}"}}]}\n\n',
        'data: {"final":true,"provider":"local","model":"serenity-12b-q6","cache":{"prompt_cache_hit_tokens":12},"choices":[{"message":{"content":"{\\"segments\\":[{\\"type\\":\\"dialogue\\",\\"text\\":\\"안녕\\"}]}"}}]}\n\n',
        'data: [DONE]\n\n'
    ];
    const response = new Response(new ReadableStream({
        start(controller) {
            pieces.forEach(piece => controller.enqueue(encoder.encode(piece)));
            controller.close();
        }
    }), { headers: { 'content-type': 'text/event-stream' } });
    const deltas = [];
    const result = await core.readChatCompletionStream(response, {
        onDelta: frame => deltas.push(frame.content)
    });
    assert.deepEqual(deltas, ['{"segments":[{"type":"dialogue","text":"안', '{"segments":[{"type":"dialogue","text":"안녕"}]}']);
    assert.equal(result.streamedContent, deltas.at(-1));
    assert.equal(result.provider, 'local');
    assert.equal(result.model, 'serenity-12b-q6');
    assert.equal(result.cache.prompt_cache_hit_tokens, 12);
});

test('normal completion keeps raw streamed narration while recovery uses final content', async () => {
    const encoder = new TextEncoder();
    const streamedReply = JSON.stringify({
        segments: [
            { type: 'narration', text: 'Rain spread across the window.' },
            { text: 'She set the cup down.', type: 'narration' },
            { type: 'dialogue', text: 'You are late.' }
        ]
    });
    const rewrittenFinalReply = JSON.stringify({
        segments: [
            { type: 'narration', text: 'Rain spread across the window.' },
            { type: 'dialogue', text: 'You are late.' }
        ]
    });
    const midpoint = Math.floor(streamedReply.length / 2);
    const response = new Response(new ReadableStream({
        start(controller) {
            for (const content of [streamedReply.slice(0, midpoint), streamedReply.slice(midpoint)]) {
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ choices: [{ delta: { content } }] })}\n\n`));
            }
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({
                final: true,
                provider: 'openrouter',
                choices: [{ message: { content: rewrittenFinalReply }, finish_reason: 'stop' }]
            })}\n\n`));
            controller.enqueue(encoder.encode('data: [DONE]\n\n'));
            controller.close();
        }
    }), { headers: { 'content-type': 'text/event-stream' } });

    const result = await core.readChatCompletionStream(response);
    assert.equal(result.streamedContent, streamedReply);
    assert.equal(
        core.selectChatCompletionContent(result),
        streamedReply,
        'a normal completion must not delete narration already shown by the stream'
    );
    assert.equal(
        Object.prototype.propertyIsEnumerable.call(result, 'streamedContent'),
        false,
        'raw streamed text must not be duplicated into persisted response metadata'
    );
    assert.equal(
        core.selectChatCompletionContent({
            ...result,
            streamedContent: streamedReply,
            recovered: true,
            recoveryReason: 'INCOMPLETE_STRUCTURED_STREAM'
        }),
        rewrittenFinalReply,
        'a recovered completion must use the repaired final response'
    );
    assert.equal(
        core.selectChatCompletionContent({
            streamedContent: streamedReply.slice(0, -2),
            choices: [{ message: { content: rewrittenFinalReply }, finish_reason: 'length' }]
        }),
        rewrittenFinalReply,
        'an incomplete stream must use the safe final response'
    );
});

test('SSE reader rejects a transport that ends without final metadata', async () => {
    const encoder = new TextEncoder();
    const response = new Response(new ReadableStream({
        start(controller) {
            controller.enqueue(encoder.encode('data: {"choices":[{"delta":{"content":"partial"}}]}\n\n'));
            controller.close();
        }
    }), { headers: { 'content-type': 'text/event-stream' } });
    await assert.rejects(
        core.readChatCompletionStream(response),
        error => error?.reason === 'STREAM_INTERRUPTED'
    );
});

test('every Cupid free-talk surface uses SSE, fixed pacing, and non-blocking backup logs', () => {
    const main = read('assets/js/modules/FreeTalkSystem.js');
    const gallery = read('assets/js/gallery-freetalk.js');
    const dialogue = read('assets/js/modules/DialogueSystem.js');
    assert.ok((main.match(/stream:\s*wantsStream/g) || []).length >= 2, 'single and group requests must carry the stream flag');
    assert.match(gallery, /stream:\s*wantsStream/);
    assert.ok((main.match(/readChatCompletionStream/g) || []).length >= 2, 'single and group readers must consume SSE');
    assert.match(gallery, /readChatCompletionStream/);
    assert.ok((main.match(/selectChatCompletionContent\(data\)/g) || []).length >= 2, 'single and group completion must preserve valid raw streams');
    assert.match(gallery, /selectChatCompletionContent\(data\)/, 'gallery completion must preserve a valid raw stream');
    assert.ok((main.match(/characterDelayMs:\s*10/g) || []).length >= 2);
    assert.ok((main.match(/maxCharactersPerFrame:\s*2/g) || []).length >= 2);
    assert.match(gallery, /characterDelayMs:\s*10/);
    assert.match(gallery, /maxCharactersPerFrame:\s*2/);
    assert.match(dialogue, /renderStreamingText\(/);
    assert.match(main, /Promise\.resolve\(\)\.then\(\(\) => window\.saveCupidChatLog/);
    assert.match(main, /Promise\.resolve\(\)\.then\(\(\) => window\.saveCupidGroupChatLog/);
    assert.match(gallery, /Promise\.resolve\(\)\.then\(\(\) => window\.saveCupidChatLog/);
});

test('gallery outings stay after the cache boundary and birthdays are calendar-only', () => {
    const outingSource = read('assets/js/gallery-outings.js');
    const sandbox = { window: {}, Object, String, Date };
    vm.runInNewContext(outingSource, sandbox);
    const outings = sandbox.window.CupidGalleryOutings;
    assert.equal(outings.isBirthday('seyoun', new Date(2026, 2, 14)), true);
    assert.equal(outings.isBirthday('seyoun', new Date(2026, 2, 15)), false);
    const rooftop = outings.getPlace('seyoun', 'rooftop');
    const block = outings.buildOutingRuntimeBlock({
        lang: 'ko',
        characterName: '서연',
        place: rooftop,
        birthday: true
    });
    assert.match(block, /오늘 외출/);
    assert.match(block, /생일/);
    const freetalk = read('assets/js/gallery-freetalk.js');
    const boundary = freetalk.indexOf('===CACHE_BOUNDARY===');
    const tailHelper = freetalk.indexOf('_buildOutingDynamicTail');
    assert.ok(boundary !== -1 && tailHelper !== -1);
    assert.match(freetalk, /currentOuting/);
    assert.match(read('assets/js/gallery-ui-character.js'), /_showOutingPicker/);
    assert.match(read('assets/js/gallery-progress.js'), /perfectEndingCleared/);
    assert.doesNotMatch(read('assets/js/gallery-progress.js'), /trueEndingCleared && this\.isFreeTalkUnlocked/);
    assert.match(read('assets/js/scenario/day5_4_night.js'), /date_choice_perfect_yuna/);
    assert.equal(require('node:fs').existsSync(require('node:path').join(__dirname, '../assets/images/characters/junho_normal.png')), true);
});

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

test('low-affinity intimacy is classified, refused, and never rewarded', () => {
    assert.deepEqual(
        { ...core.classifyCupidIntimacyAdvance('키스하자') },
        { level: 'kiss', mode: 'request' }
    );
    assert.deepEqual(
        { ...core.classifyCupidIntimacyAdvance('*서연의 몸을 만진다.*') },
        { level: 'light', mode: 'action' }
    );
    assert.deepEqual(
        { ...core.classifyCupidIntimacyAdvance('(가슴을 만진다)') },
        { level: 'sexual', mode: 'action' }
    );
    assert.deepEqual(
        { ...core.classifyCupidIntimacyAdvance('가슴이 아파서 보건실에 왔어') },
        { level: 'none', mode: 'none' }
    );
    assert.deepEqual(
        { ...core.classifyCupidIntimacyAdvance('Can I kiss you?') },
        { level: 'kiss', mode: 'request' }
    );
    assert.deepEqual(
        { ...core.classifyCupidIntimacyAdvance('손을 잡아도 돼?') },
        { level: 'light', mode: 'request' }
    );
    assert.deepEqual(
        { ...core.classifyCupidIntimacyAdvance('손잡자') },
        { level: 'light', mode: 'request' }
    );
    assert.deepEqual(
        { ...core.classifyCupidIntimacyAdvance('볼에 뽀뽀하자') },
        { level: 'kiss', mode: 'request' }
    );
    assert.deepEqual(
        { ...core.classifyCupidIntimacyAdvance('(허리를 끌어안는다)') },
        { level: 'light', mode: 'action' }
    );
    assert.deepEqual(
        { ...core.classifyCupidIntimacyAdvance('I kiss her.') },
        { level: 'kiss', mode: 'action' }
    );
    assert.equal(core.classifyCupidIntimacyAdvance('키스하지 마').level, 'none');

    const requestedKiss = core.getCupidAffinityIntimacyBoundary('키스하자', 3);
    assert.equal(requestedKiss.blocked, true);
    assert.equal(requestedKiss.maxAffinityChange, 0);
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, '키스하자', 3), 0);

    const forcedKiss = core.getCupidAffinityIntimacyBoundary('(혀를 넣어 키스한다)', 3);
    assert.equal(forcedKiss.blocked, true);
    assert.equal(forcedKiss.maxAffinityChange, -12);
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, '(혀를 넣어 키스한다)', 3), -12);
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(-20, '(혀를 넣어 키스한다)', 3), -20);

    assert.equal(core.getCupidAffinityIntimacyBoundary('짧게 안아 준다', 25).blocked, false);
    assert.equal(core.getCupidAffinityIntimacyBoundary('키스한다', 25).blocked, true);
    assert.equal(core.getCupidAffinityIntimacyBoundary('키스한다', 40).blocked, false);
    assert.equal(core.getCupidAffinityIntimacyBoundary('손을 잡는다', 100, { nonRomance: true }).blocked, true);

    const gate = core.buildCupidLatestTurnIntimacyBoundaryGate('ko', 3, '(혀를 넣어 키스한다)', {
        characterName: '서연'
    });
    assert.match(gate, /이번 키스를 받아들이지 않습니다/);
    assert.match(gate, /밀어내려다 실패해 결국 받아들이는 식으로 뒤집지 않습니다/);
    assert.match(gate, /-12 이하/);

    const galleryGate = core.buildCupidLatestTurnIntimacyBoundaryGate('ko', 3, '(혀를 넣어 키스한다)', {
        characterName: '서연',
        completedActionIsFact: true
    });
    assert.match(galleryGate, /완료형 접촉은 이미 일어난 사건으로 다뤄도 됩니다/);
    assert.doesNotMatch(galleryGate, /접촉이 이루어진 것으로 쓰거나/);
});

test('the latest-turn boundary gate stays in the high-priority post-history task', () => {
    const boundaryRule = core.buildCupidLatestTurnIntimacyBoundaryGate('ko', 5, '키스하자', {
        characterName: '유나'
    });
    const prompt = core.appendDynamicContext(
        'stable prompt',
        core.buildPostHistoryGuidance([{ role: 'user', content: '키스하자' }], 'ko', { boundaryRule })
    );
    assert.match(prompt, /후단 과업 — 이번 친밀감 경계/);
    assert.match(prompt, /affinity는 양수로 주지 마세요/);
    assert.equal(core.getStablePromptFingerprint(prompt), core.getStablePromptFingerprint('stable prompt'));
});

test('main-story free talk keeps per-turn diminishing returns without a lifetime positive-gain cap', () => {
    assert.equal(core.STORY_FREETALK_TURN_GAIN_MAX, 3);
    assert.equal(core.STORY_FREETALK_HIGH_AFFINITY_GAIN_MAX, 2);
    assert.equal(core.normalizeStoryFreeTalkAffinityChange(5, 50, 0), 3);
    assert.equal(core.normalizeStoryFreeTalkAffinityChange(5, 90, 0), 2);
    assert.equal(core.normalizeStoryFreeTalkAffinityChange(5, 50, 22), 3);
    assert.equal(core.normalizeStoryFreeTalkAffinityChange(5, 90, 999), 2);
    assert.equal(core.normalizeStoryFreeTalkAffinityChange(-999, 99, 22), -50);

    const turnsToReachOneHundred = startAffinity => {
        let affinity = startAffinity;
        let turns = 0;
        while (affinity < 100 && turns < 30) {
            const gain = core.normalizeStoryFreeTalkAffinityChange(5, affinity);
            affinity = Math.min(100, affinity + gain);
            turns++;
        }
        return { affinity, turns };
    };

    assert.deepEqual(turnsToReachOneHundred(80), { affinity: 100, turns: 8 });
    assert.deepEqual(turnsToReachOneHundred(60), { affinity: 100, turns: 15 });

    let uncappedGain = 0;
    for (let turn = 0; turn < 20; turn++) {
        uncappedGain += core.normalizeStoryFreeTalkAffinityChange(5, uncappedGain);
    }
    assert.equal(uncappedGain, 60);
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
    assert.match(read('assets/js/modules/FreeTalkSystem.js'), /CupidFreeTalkCore\.normalizeStoryFreeTalkAffinityChange/);
    assert.ok((read('assets/js/modules/FreeTalkSystem.js').match(/enforceCupidAffinityIntimacyBoundary/g) || []).length >= 2);
    assert.match(read('assets/js/modules/FreeTalkSystem.js'), /buildCupidLatestTurnIntimacyBoundaryGate/);
    assert.match(read('assets/js/modules/FreeTalkSystem.js'), /updateStreamingPreview\(content\)/);
    assert.match(read('assets/js/modules/FreeTalkSystem.js'), /updateGroupStreamingPreview\(content\)/);
    assert.doesNotMatch(read('assets/js/modules/FreeTalkSystem.js'), /if \(!_latestTurnIntimacyBoundaryRule\) updateStreamingPreview/);
    assert.doesNotMatch(read('assets/js/modules/FreeTalkSystem.js'), /if \(!boundaryRule\) updateGroupStreamingPreview/);
    assert.doesNotMatch(read('assets/js/modules/FreeTalkSystem.js'), /Rejected affinity-boundary draft/);
    assert.match(read('assets/js/gallery-freetalk.js'), /GalleryFreeTalkCore\.normalizeAffinityChange\(value\)/);
    assert.match(read('assets/js/gallery-freetalk.js'), /enforceCupidAffinityIntimacyBoundary/);
    assert.match(read('assets/js/gallery-freetalk.js'), /buildCupidLatestTurnIntimacyBoundaryGate/);
    assert.match(read('assets/js/gallery-freetalk.js'), /completedActionIsFact: true/);
    assert.match(read('assets/js/gallery-freetalk.js'), /updateStreamingPreview\(content\)/);
    assert.doesNotMatch(read('assets/js/gallery-freetalk.js'), /if \(!_latestTurnIntimacyBoundaryRule\) updateStreamingPreview/);
    assert.doesNotMatch(read('assets/js/freetalk-core.js'), /getCupidAffinityIntimacyBoundaryIssue/);
    assert.doesNotMatch(read('assets/js/prompts.js'), /intimacy_boundary_refusal_missing/);
    assert.match(read('assets/js/gallery-progress.js'), /CupidFreeTalkCore\.normalizeAffinityChange\(amount\)/);
    assert.match(read('assets/js/modules/FreeTalkSystem.js'), /normalizeAvailableExpression/);
    assert.match(read('assets/js/gallery-freetalk.js'), /normalizeAvailableExpression/);
});

test('after-ending free talk ignores positive and negative affinity changes at runtime', () => {
    const runtimeWindow = { CupidFreeTalkCore: core };
    const sandbox = {
        window: runtimeWindow,
        CHAR_NAME_MAP: { 서연: 'Seoyeon' },
        DEFAULT_MAX_FREE_TALK_TURNS: 3,
        document: { documentElement: { lang: 'ko' } },
        console,
        setTimeout,
        clearTimeout,
        Object,
        String,
        Number,
        Array,
        Map,
        Set,
        Math,
        JSON,
        Promise,
        Error
    };
    vm.runInNewContext(read('assets/js/modules/FreeTalkSystem.js'), sandbox);

    let affinity = 64;
    let changeCalls = 0;
    const stateManager = {
        stats: { Seoyeon: { affinity } },
        getAffinity: () => affinity,
        changeAffinity: (_character, amount) => {
            changeCalls++;
            affinity += amount;
            return affinity;
        }
    };
    const galleryManager = {
        updateMaxAffinity: () => assert.fail('locked scene updated gallery affinity'),
        checkAffinityUnlock: () => assert.fail('locked scene checked an affinity unlock')
    };
    const uiManager = {
        showAffinityChange: () => assert.fail('locked scene displayed an affinity change')
    };
    const system = new runtimeWindow.FreeTalkSystem(stateManager, galleryManager, uiManager, {});
    const scene = { name: '서연', affinityLocked: true };

    for (const requestedChange of [5, -50]) {
        const result = system.applyAffinity(requestedChange, scene);
        assert.equal(result.change, 0);
        assert.equal(result.value, 64);
        assert.equal(result.requestedChange, 0);
        assert.equal(result.appliedChange, 0);
    }
    assert.equal(system.processStatsTags('계속 이야기해. [STATS: affinity -50]', scene), '계속 이야기해.');
    assert.equal(affinity, 64);
    assert.equal(changeCalls, 0);
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
    assert.match(prompts, /예시나 기본값 0을 복사하지 않습니다/);
    assert.match(prompts, /never a copied example or default 0/);
    assert.match(prompts, /function buildCupidJsonOutputContract\(/);
    assert.match(prompts, /const jsonOutputContract = buildCupidJsonOutputContract\(/);
    assert.match(gallery, /window\.buildCupidJsonOutputContract\(/);
    assert.doesNotMatch(prompts, /"affinity":-1/);
    assert.doesNotMatch(gallery, /"affinity":-1/);
});

test('after-ending prompt contract fixes affinity at zero', () => {
    const prompts = read('assets/js/prompts.js');
    const freeTalkSystem = read('assets/js/modules/FreeTalkSystem.js');
    assert.match(prompts, /affinityLocked = false/);
    assert.match(prompts, /affinity는 항상 0입니다/);
    assert.match(prompts, /affinity must always be 0 in this scene/);
    assert.match(freeTalkSystem, /affinityLocked: scene\.affinityLocked === true/);
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
    const implicit = core.buildImplicitActiveGalleryIncidentPayload(activeState);
    assert.equal(implicit.status, 'ongoing');
    assert.equal(implicit.summary, '해결되지 않은 약속 갈등');
});

test('quality fallback keeps a valid gallery reply when only the active incident JSON is missing', () => {
    const prompts = read('assets/js/prompts.js');
    const sandbox = {
        window: { CupidFreeTalkCore: core },
        console: { log() {}, warn() {} }
    };
    vm.runInNewContext(`${prompts}\nthis.recoverCupidRoleplayQualityFallback = window.recoverCupidRoleplayQualityFallback;`, sandbox);
    const parsed = {
        text: '窓の外を見て、少し息を整えた。',
        segments: [{ type: 'narration', text: '窓の外を見て、少し息を整えた。' }],
        affinity: 0,
        incident: null
    };
    const recovered = sandbox.recoverCupidRoleplayQualityFallback(parsed, {
        lang: 'ja',
        charKey: 'Seoyeon',
        incidentState: {
            completedTurns: 30,
            quietTurns: 0,
            activeIncident: {
                category: 'conflict',
                summary: '解決していない約束の食い違い',
                startedAtTurn: 30,
                turns: 1
            }
        }
    });
    assert.equal(recovered.incident.status, 'ongoing');
    assert.equal(recovered.incident.summary, '解決していない約束の食い違い');
    assert.equal(recovered.qualityRecovery.implicitIncident, 'ongoing');
    assert.equal(recovered.text, parsed.text);
});

test('forced sexual violation classification accepts only the scenario contract values', () => {
    assert.equal(core.normalizeForcedSexualViolation('none'), 'none');
    assert.equal(core.normalizeForcedSexualViolation(' MOLESTATION '), 'molestation');
    assert.equal(core.normalizeForcedSexualViolation('rape'), 'rape');
    assert.equal(core.normalizeForcedSexualViolation('harassment'), '');
    assert.equal(core.normalizeForcedSexualViolation(true), '');

    const mainFreeTalk = read('assets/js/modules/FreeTalkSystem.js');
    assert.match(mainFreeTalk, /setFlag\('forced_sexual_violation'/);
    assert.match(mainFreeTalk, /forcedSexualViolation === 'rape' \|\| forcedSexualViolation === 'molestation'/);
    assert.match(mainFreeTalk, /const affinityResult = this\.applyAffinity\(parsed\.affinity, scene, finalContent\)/);
    assert.match(mainFreeTalk, /if \(this\.freeTalkTurns >= this\.currentMaxTurns\)/);
    assert.doesNotMatch(mainFreeTalk, /violationAffinity/);
    assert.doesNotMatch(mainFreeTalk, /forcedSexualViolation !== 'none' \|\|/);
});

test('quality fallback keeps a valid gallery reply and defers a scheduled incident with no payload', () => {
    const prompts = read('assets/js/prompts.js');
    const sandbox = {
        window: { CupidFreeTalkCore: core },
        console: { log() {}, warn() {} }
    };
    vm.runInNewContext(`${prompts}\nthis.recoverCupidRoleplayQualityFallback = window.recoverCupidRoleplayQualityFallback;`, sandbox);
    const parsed = {
        text: '窓の外を見て、少し息を整えた。',
        segments: [{ type: 'narration', text: '窓の外を見て、少し息を整えた。' }],
        affinity: 0,
        incident: null
    };
    const recovered = sandbox.recoverCupidRoleplayQualityFallback(parsed, {
        lang: 'ja',
        charKey: 'Yuna',
        incidentState: {
            completedTurns: 30,
            quietTurns: 30,
            activeIncident: null
        },
        incidentPlan: { category: 'daily' }
    });
    assert.equal(recovered.incident, null);
    assert.equal(recovered.qualityRecovery.acceptedAfterRetries, true);
    assert.equal(recovered.qualityRecovery.deferredScheduledIncident, true);
    assert.equal(recovered.text, parsed.text);
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

test('main state affinity rebalance lowers only legacy 100-point saves once', () => {
    const stateWindow = { GAME_LANG: 'ko', CupidFreeTalkCore: core };
    vm.runInNewContext(read('assets/js/modules/StateManager.js'), {
        window: stateWindow,
        console: { log() {}, error() {} }
    });

    const legacy = new stateWindow.StateManager();
    const result = legacy.importState({
        stats: {
            Seoyeon: { affinity: 100 },
            Yuna: { affinity: 99 },
            Dain: { affinity: 100 },
            Teacher: { affinity: 42 },
            Nurse: { affinity: 100 }
        }
    });
    assert.equal(result.affinityRebalanced, true);
    assert.equal(legacy.getAffinity('Seoyeon'), 99);
    assert.equal(legacy.getAffinity('Yuna'), 99);
    assert.equal(legacy.getAffinity('Dain'), 99);
    assert.equal(legacy.getAffinity('Teacher'), 42);
    assert.equal(legacy.getAffinity('Nurse'), 99);
    assert.equal(legacy.exportState().affinityRebalanceVersion, 1);

    const current = new stateWindow.StateManager();
    const currentResult = current.importState({
        affinityRebalanceVersion: 1,
        stats: { Seoyeon: { affinity: 100 } }
    });
    assert.equal(currentResult.affinityRebalanced, false);
    assert.equal(current.getAffinity('Seoyeon'), 100);
});

test('Haeun affinity starts at zero, migrates into old saves, resets cleanly, and stays outside ending routes', () => {
    const stateWindow = { GAME_LANG: 'ko', CupidFreeTalkCore: core };
    vm.runInNewContext(read('assets/js/modules/StateManager.js'), {
        window: stateWindow,
        console: { log() {}, error() {} }
    });
    const state = new stateWindow.StateManager();
    assert.equal(state.stats.Haeun.affinity, 0);

    state.importState({
        stats: {
            Seoyeon: { affinity: 24 },
            Yuna: { affinity: 11 },
            Dain: { affinity: 7 },
            Teacher: { affinity: 3 },
            Nurse: { affinity: 5 }
        }
    });
    assert.equal(state.stats.Seoyeon.affinity, 24);
    assert.equal(state.stats.Haeun.affinity, 0, 'old saves must gain Haeun without losing existing affinity');
    state.stats.Haeun.affinity = 9;
    state.resetForNewGame();
    assert.equal(state.stats.Haeun.affinity, 0);

    const endingScenarioSource = read('assets/js/scenario/day5_4_night.js');
    assert.doesNotMatch(endingScenarioSource, /"affinityChar"\s*:\s*"Haeun"/,
        'Haeun must not become an ending affinity target');
    assert.equal(core.normalizeStoryFreeTalkAffinityChange(5, 0, 0), 3);
    assert.equal(core.normalizeStoryFreeTalkAffinityChange(5, 3, 3), 3);
});

test('group conversation memory persists once, stays linked to both participants, and does not pollute 1:1 roles', () => {
    const stateWindow = { GAME_LANG: 'ko', CupidFreeTalkCore: core };
    vm.runInNewContext(read('assets/js/modules/StateManager.js'), {
        window: stateWindow,
        console: { log() {}, error() {} }
    });
    const state = new stateWindow.StateManager();
    const memory = {
        turnId: 'group-turn-1',
        sessionId: 'morning5_counteroffer_group_talk',
        day: 5,
        participants: [{ id: 'Teacher' }, { id: 'Dain' }],
        playerName: '민준',
        userContent: '내가 두 사람에게 전부 설명할게.\n\ndata:image/png;base64,AAAA',
        assistantMessages: [
            { speakerId: 'Teacher', speakerName: '담임선생님', content: '그럼 숨기지 말고 말해.' },
            { speakerId: 'Dain', speakerName: '다인', content: '저도 끝까지 들을게요.' }
        ]
    };

    state.addGroupConversationMemory(memory);
    state.addGroupConversationMemory(memory);
    assert.equal(state.getGroupConversationMemories('Teacher').length, 1);
    assert.equal(state.getGroupConversationMemories('Dain').length, 1);
    assert.equal(state.getGroupConversationMemories('Seoyeon').length, 0);
    assert.equal(state.getChatMemory('Teacher').length, 0);

    const restored = new stateWindow.StateManager();
    restored.importState(state.exportState());
    assert.equal(restored.getGroupConversationMemories('Teacher')[0].assistantMessages[1].speakerId, 'Dain');
    assert.match(restored.getGroupConversationMemories('Dain')[0].userContent, /전부 설명/);
    assert.match(restored.getGroupConversationMemories('Dain')[0].userContent, /\[image attachment\]/);
    assert.doesNotMatch(restored.getGroupConversationMemories('Dain')[0].userContent, /data:image/);
    restored.resetForNewGame();
    assert.equal(restored.getGroupConversationMemories('Teacher').length, 0);
});

test('later 1:1 prompts receive labeled group history in every language without duplicating it inside group requests', () => {
    const stateWindow = { GAME_LANG: 'ko', CupidFreeTalkCore: core };
    vm.runInNewContext(read('assets/js/modules/StateManager.js'), {
        window: stateWindow,
        console: { log() {}, error() {} }
    });
    const state = new stateWindow.StateManager();
    state.addGroupConversationMemory({
        turnId: 'group-turn-context',
        sessionId: 'morning5_counteroffer_group_talk',
        participants: ['Teacher', 'Dain'],
        playerName: '민준',
        userContent: '내가 책임질게.',
        assistantMessages: [
            { speakerId: 'Teacher', speakerName: '담임선생님', content: '먼저 사실대로 말해.' },
            { speakerId: 'Dain', speakerName: '다인', content: '저도 듣고 있어요.' }
        ]
    });

    const freeTalkWindow = { CupidFreeTalkCore: core, GAME_LANG: 'ko', FLAG_MEMORIES: [] };
    const sandbox = {
        window: freeTalkWindow,
        document: { documentElement: { lang: 'ko' } },
        navigator: { onLine: true },
        console: { log() {}, info() {}, warn() {}, error() {} },
        DEFAULT_MAX_FREE_TALK_TURNS: 3,
        CHAR_NAME_MAP: {},
        setTimeout,
        clearTimeout,
        URL,
        URLSearchParams,
        Math,
        Date,
        Object,
        Array,
        String,
        Number,
        Set,
        Map,
        Promise
    };
    vm.runInNewContext(read('assets/js/modules/FreeTalkSystem.js'), sandbox);
    const system = new freeTalkWindow.FreeTalkSystem(state, {}, {}, {});
    const signals = {
        ko: ['[함께 있었던 대면 대화]', '누가 한 말인지 구분해 기억하세요'],
        en: ['[Past Face-to-Face Group Conversation]', 'Keep each speaker distinct'],
        es: ['[Conversación grupal presencial anterior]', 'Distingue siempre a cada hablante'],
        ja: ['[以前の対面グループ会話]', '誰の発言かを区別して記憶してください'],
        fr: ['[Ancienne conversation de groupe en face à face]', 'Distinguez clairement chaque personne qui parle'],
        de: ['[Früheres Gruppengespräch vor Ort]', 'Unterscheide klar, wer gesprochen hat'],
        pt: ['[Conversa presencial em grupo anterior]', 'Diferencie com clareza quem falou']
    };
    for (const [lang, expected] of Object.entries(signals)) {
        const context = system.getGameContext('Teacher', lang);
        for (const signal of expected) assert.ok(context.includes(signal), `${lang} group memory lost: ${signal}`);
    }
    const korean = system.getGameContext('Teacher', 'ko');
    assert.match(korean, /민준: 내가 책임질게/);
    assert.match(korean, /담임선생님: 먼저 사실대로 말해/);
    assert.match(korean, /다인: 저도 듣고 있어요/);
    assert.equal(system.getGameContext('Seoyeon', 'ko'), '');
    assert.equal(system.getGameContext('Teacher', 'ko', { includeGroupConversations: false }), '');
});

test('day-five confrontation uses two-speaker rendering, bounded recovery, and canonical group logs', () => {
    const scenario = read('assets/js/scenario/day5_1_morning.js');
    const freeTalk = read('assets/js/modules/FreeTalkSystem.js');
    const gameEngine = read('assets/js/modules/GameEngine.js');
    const config = read('assets/js/modules/config.js');
    const css = read('assets/css/style.css');

    assert.match(scenario, /"type": "group_free_talk"/);
    assert.equal((scenario.match(/"next": "morning5_counteroffer_group_talk"/g) || []).length, 10);
    assert.match(freeTalk, /'x-chat-mode': 'group'/);
    assert.match(freeTalk, /responseSpeakers: this\.groupParticipants/);
    assert.match(freeTalk, /responseSpeakers: \[\{ id: charKey, key: charKey, name: scene\.name \}\]/);
    assert.match(freeTalk, /speakerId: charKey,[\s\S]*?speakerName: scene\.name/);
    assert.match(freeTalk, /speakerStates: rendered\.map\(item => \(\{/);
    assert.match(freeTalk, /setChatMemory\(groupKey, requestHistory\)/);
    assert.match(freeTalk, /addGroupConversationMemory\?\.\(\{/);
    assert.match(freeTalk, /includeGroupConversations: false/);
    assert.match(freeTalk, /let positiveBudget = 3/);
    assert.match(freeTalk, /requestedChange = Math\.min\(3, positiveBudget\)/);
    assert.match(freeTalk, /advanceGroupMessageQueue\(\)/);
    assert.match(gameEngine, /scene\.type === 'group_free_talk'/);
    assert.match(config, /charId: 'group'/);
    assert.match(config, /context: 'group'/);
    assert.match(config, /speakerId: '__player__'/);
    assert.match(config, /conversationDay/);
    assert.match(config, /groupConversationMemories/);
    assert.match(config, /local-recovery/);
    assert.match(config, /pending queue retained/);
    assert.doesNotMatch(config, /errorType: 'chat_log_queue_transient_failure'/);
    assert.doesNotMatch(config, /group_chat_log_direct_transient_failure/);
    assert.match(freeTalk, /Promise\.resolve\(\)\.then\(\(\) => window\.saveCupidGroupChatLog\(\{/);
    assert.doesNotMatch(freeTalk, /await window\.saveCupidGroupChatLog\(\{/);
    assert.match(config, /window\.saveCupidGroupChatLog = saveCupidGroupChatLog/);
    assert.match(css, /group-freetalk-active/);
    assert.match(css, /data-group-speaker-side="right"/);
    assert.match(freeTalk, /chatContainer\?\.classList\.add\('group-freetalk-mode'\)/);
    assert.match(freeTalk, /chatContainer\?\.classList\.remove\('group-freetalk-mode'\)/);
    assert.match(freeTalk, /this\.groupParticipants\s*\.map\(participant => normalized\.find\(conversation => conversation\.speakerId === participant\.id\)\)/);
    assert.match(freeTalk, /ordered\.length !== this\.groupParticipants\.length/);
    assert.doesNotMatch(freeTalk, /_enforceGroupOpeningLoss/);
    assert.match(freeTalk, /const canContinueGroupChat = this\.isFreeTalking[\s\S]*?this\.freeTalkTurns < this\.currentMaxTurns/);
    assert.match(freeTalk, /chatInput\.disabled = !canContinueGroupChat/);
    assert.match(read('assets/js/prompts.js'), /두 사람을 반드시 모두 넣고/);
    assert.doesNotMatch(read('assets/js/prompts.js'), /그 순간 할 말이 있는 인물만/);
    assert.match(read('assets/js/prompts.js'), /두 인물 모두 매 응답에서 주인공을 직접 대면합니다/);
    assert.match(read('assets/js/prompts.js'), /처음부터 양다리였는지/);
    assert.match(read('assets/js/prompts.js'), /상대를 다치게 했다는 죄책감/);
    assert.match(read('assets/js/prompts.js'), /주인공을 놓치고 싶지 않고 자신이 선택받길 바라는 욕망/);
    assert.match(read('assets/js/prompts.js'), /둘은 서로에게 묻고 답하거나 반박할 수 있습니다/);
    assert.match(read('assets/js/prompts.js'), /Both characters must directly confront the protagonist in every response/);
    assert.match(read('assets/js/prompts.js'), /desire to keep the protagonist and be chosen/);
    assert.match(read('assets/js/prompts.js'), /They may question, answer, or challenge each other/);
    assert.match(read('assets/js/prompts.js'), /허용 표정:/);
    assert.match(css, /grid-template-areas:\s*"guide guide guide guide guide"\s*"upload input input input input"\s*"turn turn action send skip"/);
    assert.match(css, /#chat-container\.group-freetalk-mode #chat-input-wrapper\s*{\s*display: contents/);
    assert.match(css, /#chat-container\.group-freetalk-mode #chat-turn-indicator[\s\S]*?grid-area: turn/);
    assert.match(css, /@media \(max-height: 500px\) and \(orientation: landscape\)[\s\S]*?#character-layer\.group-freetalk-mode #char-left img/);

    const confrontationSignals = {
        ko: ['주인공에게 직접 질문하고', '양다리였는지', '죄책감', '선택받길 바라는 욕망'],
        en: ['question him directly', 'two-timing', 'guilt', 'desire to keep the protagonist'],
        es: ['preguntan directamente', 'jugaba a dos bandas', 'culpa', 'quiere quedarse con el protagonista'],
        ja: ['主人公へ直接問い', '二股', '罪悪感', '選ばれたい'],
        fr: ['l’interrogent directement', 'jouait sur les deux tableaux', 'culpabilité', 'désir de garder le protagoniste'],
        de: ['befragen ihn direkt', 'zweigleisig', 'Schuld', 'Wunsch, den Protagonisten'],
        pt: ['perguntas diretamente', 'levando as duas', 'culpa', 'desejo de ficar com o protagonista']
    };
    for (const lang of ['ko', 'en', 'es', 'ja', 'fr', 'de', 'pt']) {
        const i18n = JSON.parse(read(`assets/js/i18n/${lang}/day5_1_morning.json`));
        const groupScene = i18n.morning5_counteroffer_group_talk;
        assert.ok(groupScene?.text && groupScene?.context && groupScene?.personality && groupScene?.buttonText,
            `${lang} group confrontation localization is incomplete`);
        assert.match(groupScene.text, /[?？]/,
            `${lang} day-five group confrontation must ask for the protagonist's choice before input`);
        for (const signal of confrontationSignals[lang]) {
            assert.match(groupScene.personality, new RegExp(signal),
                `${lang} group confrontation lost direct explanation or guilt-and-desire tension: ${signal}`);
        }
    }
});

test('gallery free talk sends and retains explicit local actor ownership', () => {
    const galleryFreeTalk = read('assets/js/gallery-freetalk.js');
    assert.match(
        galleryFreeTalk,
        /responseSpeakers: \[\{ id: requestCharId, key: requestCharId, name: pendingCharName \}\]/
    );
    assert.match(
        galleryFreeTalk,
        /speakerId: requestCharId,[\s\S]*?speakerName: charName/
    );
});

test('day-two student rivalry and day-three adult social groups use the highest-affinity companion with deterministic ties', () => {
    const scenarioContext = { SCENARIO: {}, console };
    vm.runInNewContext(read('assets/js/scenario/day2_3_afterschool.js'), scenarioContext);
    vm.runInNewContext(read('assets/js/scenario/day3_3_afterschool.js'), scenarioContext);
    const day2 = scenarioContext.SCENARIO[2];
    const day3 = scenarioContext.SCENARIO[3];
    const studentGroups = {
        after2_group_seoyeon_companion: { focus: 'Seoyeon', firstTie: 'Dain', entry: 'after2_seo_return' },
        after2_group_yuna_companion: { focus: 'Yuna', firstTie: 'Seoyeon', entry: 'after2_yuna_return' },
        after2_group_dain_companion: { focus: 'Dain', firstTie: 'Yuna', entry: 'after2_dain_return' }
    };
    const adultGroups = {
        after3_group_teacher_companion: { focus: 'Teacher', firstTie: 'Seoyeon' },
        after3_group_nurse_companion: { focus: 'Nurse', firstTie: 'Dain' }
    };

    for (const [id, expected] of Object.entries(studentGroups)) {
        const scene = day2[id];
        assert.equal(day2[expected.entry].next, id, `${expected.entry} must enter its day-two group event`);
        assert.equal(scene.type, 'group_free_talk');
        assert.equal(scene.groupMode, 'route_rivalry');
        assert.equal(scene.dynamicGroupName, true);
        assert.equal(scene.groupParticipants.strategy, 'focus_with_highest_other_affinity');
        assert.equal(scene.groupParticipants.focus, expected.focus);
        assert.equal(scene.groupParticipants.tiePriority[0], expected.firstTie);
        assert.equal(scene.maxTurns, 3);
        assert.equal(scene.next, 'after2_group_return');
    }
    assert.equal(day2.after2_group_return.next, 'minsu_warn_gate');

    assert.equal(day3.after3_final.next, 'after3_group_route_check');
    assert.equal(day3.after3_group_route_check.routeBeforeRender, true);
    assert.deepEqual(
        Array.from(day3.after3_group_route_check.branches, branch => [branch.condition || '', branch.next]),
        [
            ['homeroom_route_unlocked', 'after3_group_teacher_companion'],
            ['nurse_route_unlocked', 'after3_group_nurse_companion'],
            ['', 'haeun_check']
        ]
    );
    for (const [id, expected] of Object.entries(adultGroups)) {
        const scene = day3[id];
        assert.equal(scene.type, 'group_free_talk');
        assert.equal(scene.groupMode, 'route_social');
        assert.equal(scene.dynamicGroupName, true);
        assert.equal(scene.groupParticipants.strategy, 'focus_with_highest_other_affinity');
        assert.equal(scene.groupParticipants.focus, expected.focus);
        assert.equal(scene.groupParticipants.tiePriority[0], expected.firstTie);
        assert.equal(scene.maxTurns, 3);
        assert.equal(scene.next, 'after3_group_return');
    }
    assert.equal(day3.after3_group_return.next, 'haeun_check');
    assert.equal(day3.haeun_warn_7_c.next, 'haeun_freetalk');
    assert.equal(day3.haeun_freetalk.type, 'free_talk');
    assert.equal(day3.haeun_freetalk.maxTurns, 5);
    assert.equal(day3.haeun_freetalk.next, 'haeun_affinity_check');

    for (const lang of ['ko', 'en', 'es', 'ja', 'fr', 'de', 'pt']) {
        const day2I18n = JSON.parse(read(`assets/js/i18n/${lang}/day2_3_afterschool.json`));
        const day3I18n = JSON.parse(read(`assets/js/i18n/${lang}/day3_3_afterschool.json`));
        for (const id of Object.keys(studentGroups)) {
            for (const field of ['name', 'text', 'context', 'personality', 'groupLocation', 'groupChoiceState', 'groupAftermathCause']) {
                assert.ok(typeof day2I18n[id]?.[field] === 'string' && day2I18n[id][field].trim(), `${lang}/${id} is missing ${field}`);
            }
        }
        for (const id of Object.keys(adultGroups)) {
            for (const field of ['name', 'text', 'context', 'personality', 'buttonText', 'groupLocation', 'groupChoiceState', 'groupAftermathCause']) {
                assert.ok(typeof day3I18n[id]?.[field] === 'string' && day3I18n[id][field].trim(), `${lang}/${id} is missing ${field}`);
            }
            assert.match(day3I18n[id].text, /[?？]/,
                `${lang}/${id} must ask for the protagonist's priority before input`);
        }
        for (const field of ['name', 'text', 'context', 'personality']) {
            assert.ok(typeof day3I18n.haeun_freetalk?.[field] === 'string' && day3I18n.haeun_freetalk[field].trim(), `${lang}/haeun_freetalk is missing ${field}`);
        }
    }

    const freeTalkWindow = { CupidFreeTalkCore: core, GAME_LANG: 'ko', FLAG_MEMORIES: [] };
    const sandbox = {
        window: freeTalkWindow,
        document: { documentElement: { lang: 'ko' } },
        navigator: { onLine: true },
        console: { log() {}, info() {}, warn() {}, error() {} },
        DEFAULT_MAX_FREE_TALK_TURNS: 3,
        CHAR_NAME_MAP: {},
        setTimeout,
        clearTimeout,
        URL,
        URLSearchParams,
        Math,
        Date,
        Object,
        Array,
        String,
        Number,
        Set,
        Map,
        Promise
    };
    vm.runInNewContext(read('assets/js/modules/FreeTalkSystem.js'), sandbox);
    const affinities = { Seoyeon: 0, Yuna: 0, Dain: 0, Teacher: 0, Nurse: 0 };
    const system = new freeTalkWindow.FreeTalkSystem({
        stats: Object.fromEntries(Object.entries(affinities).map(([id, affinity]) => [id, { affinity }])),
        getAffinity: id => affinities[id] ?? 0
    }, {}, {}, {});
    assert.deepEqual(
        Array.from(system._resolveGroupParticipants(day2.after2_group_seoyeon_companion, 'ko'), item => item.id),
        ['Seoyeon', 'Dain'],
        'Seoyeon tie must prefer Dain'
    );
    affinities.Yuna = 11;
    assert.deepEqual(
        Array.from(system._resolveGroupParticipants(day2.after2_group_seoyeon_companion, 'ko'), item => item.id),
        ['Seoyeon', 'Yuna'],
        'highest other affinity must override tie priority'
    );
    affinities.Yuna = 0;
    assert.deepEqual(
        Array.from(system._resolveGroupParticipants(day3.after3_group_teacher_companion, 'ko'), item => item.id),
        ['Teacher', 'Seoyeon'],
        'Teacher tie must prefer Seoyeon'
    );
    assert.deepEqual(
        Array.from(system._resolveGroupParticipants(day3.after3_group_nurse_companion, 'ko'), item => item.id),
        ['Nurse', 'Dain'],
        'Nurse tie must prefer Dain'
    );

    const freeTalk = read('assets/js/modules/FreeTalkSystem.js');
    const renderer = read('assets/js/modules/SceneRenderer.js');
    assert.match(freeTalk, /_resolveGroupParticipants\(scene, lang = 'ko'\)/);
    assert.match(freeTalk, /focus_with_highest_other_affinity/);
    assert.match(freeTalk, /right\.affinity - left\.affinity \|\| left\.priority - right\.priority/);
    assert.match(freeTalk, /scene\.dynamicGroupName/);
    assert.match(freeTalk, /scene\?\.groupAftermathCause/);
    assert.match(renderer, /'groupLocation'/);
    assert.match(renderer, /'groupChoiceState'/);
    assert.match(renderer, /'groupAftermathCause'/);
});

test('group reply order, per-speaker affinity, and Dain expression assets follow the active speaker', async () => {
    const freeTalkWindow = {
        CupidFreeTalkCore: core,
        CHARACTER_EXPRESSIONS: {
            Dain: {
                sad: 'assets/images/characters/dain_sad.png',
                angry: 'assets/images/characters/dain_angry.png'
            }
        }
    };
    const sandbox = {
        window: freeTalkWindow,
        document: { documentElement: { lang: 'ko' } },
        navigator: { onLine: true },
        console: { log() {}, info() {}, warn() {}, error() {} },
        DEFAULT_MAX_FREE_TALK_TURNS: 3,
        CHAR_NAME_MAP: {},
        getAssetUrl: value => `${value}?v=test`,
        setTimeout,
        clearTimeout,
        URL,
        URLSearchParams,
        Math,
        Date,
        Object,
        Array,
        String,
        Number,
        Set,
        Map,
        Promise
    };
    vm.runInNewContext(read('assets/js/modules/FreeTalkSystem.js'), sandbox);

    const dainImage = { src: '', dataset: {} };
    const leftSlot = { dataset: { groupCharId: 'Teacher' }, querySelector: () => ({ src: '', dataset: {} }) };
    const rightSlot = { dataset: { groupCharId: 'Dain' }, querySelector: () => dainImage };
    const system = new freeTalkWindow.FreeTalkSystem(
        {},
        {},
        { charSlots: { left: leftSlot, right: rightSlot } },
        {}
    );
    system.groupParticipants = [
        { id: 'Teacher', name: '담임선생님', side: 'left' },
        { id: 'Dain', name: '다인', side: 'right' }
    ];
    system.normalizeSegments = value => value;
    system._sanitizeSegmentsPlaceholders = value => value;
    system.segmentsToText = value => value.map(segment => segment.text).join(' ');
    system._sanitizeVisibleArtifacts = value => value;

    const ordered = system.parseGroupJsonResponse(JSON.stringify({
        conversations: [
            { name: '다인', segments: [{ type: 'dialogue', text: '제가 먼저 불렀어요.' }], expression: 'angry', affinity: -2 },
            { name: '담임선생님', segments: [{ type: 'dialogue', text: '내 말을 먼저 들어.' }], expression: 'sad', affinity: -3 }
        ]
    }));
    assert.deepEqual(Array.from(ordered, item => item.speakerId), ['Teacher', 'Dain']);

    system._applyGroupExpression('angry', 'Dain');
    assert.equal(dainImage.src, 'assets/images/characters/dain_angry.png?v=test');
    assert.equal(dainImage.dataset.rawSrc, 'assets/images/characters/dain_angry.png?v=test');
    system._applyGroupExpression('sad', 'Dain');
    assert.equal(dainImage.src, 'assets/images/characters/dain_sad.png?v=test');

    const events = [];
    system.stateManager = {
        getRelationshipAftermath: () => null,
        setRelationshipAftermath() {}
    };
    system.galleryManager = { incrementFreeTalkCount() {} };
    system.uiManager = {
        updateNameTag: name => events.push(`name:${name}`),
        showNextIndicator() {}
    };
    system.dialogueSystem = {
        async typeText(_text, name) { events.push(`text:${name}`); },
        getChatRenderReceipt: () => null
    };
    system._assertRequestContext = () => {};
    system._setGroupActiveSpeaker = speakerId => events.push(`active:${speakerId}`);
    system._applyGroupExpression = (_expression, speakerId) => events.push(`expression:${speakerId}`);
    system._applyGroupAffinity = (_change, speakerId) => {
        events.push(`affinity:${speakerId}`);
        return { change: 0, value: 0, requestedChange: 0, positiveUsed: 0 };
    };
    system._waitForGroupMessageAdvance = async () => { events.push('advance'); };
    await system._renderGroupConversations(ordered, {}, '내가 책임질게.', 'ko');
    assert.deepEqual(events, [
        'active:Teacher',
        'name:담임선생님',
        'expression:Teacher',
        'text:담임선생님',
        'affinity:Teacher',
        'advance',
        'active:Dain',
        'name:다인',
        'expression:Dain',
        'text:다인',
        'affinity:Dain'
    ]);
});

test('skipping a group chat warns first and lowers both participants by twenty only after confirmation', async () => {
    const freeTalkWindow = { CupidFreeTalkCore: core, GAME_LANG: 'ko' };
    const sandbox = {
        window: freeTalkWindow,
        document: {
            documentElement: { lang: 'ko' },
            getElementById: () => null
        },
        navigator: { onLine: true },
        console: { log() {}, info() {}, warn() {}, error() {} },
        DEFAULT_MAX_FREE_TALK_TURNS: 3,
        CHAR_NAME_MAP: {},
        setTimeout,
        clearTimeout,
        URL,
        URLSearchParams,
        Math,
        Date,
        Object,
        Array,
        String,
        Number,
        Set,
        Map,
        Promise
    };
    vm.runInNewContext(read('assets/js/modules/FreeTalkSystem.js'), sandbox);

    const affinities = { Teacher: 35, Dain: 22 };
    const modalResults = [false, true];
    const modalMessages = [];
    const displayedChanges = [];
    const state = {
        stats: { Teacher: { affinity: 35 }, Dain: { affinity: 22 } },
        getAffinity: id => affinities[id],
        changeAffinity(id, amount) {
            affinities[id] = Math.max(-100, Math.min(100, affinities[id] + amount));
            this.stats[id].affinity = affinities[id];
            return affinities[id];
        },
        setFlag() {}
    };
    const ui = {
        async showModal(message) {
            modalMessages.push(message);
            return modalResults.shift();
        },
        showAffinityChangeMulti(changes) {
            displayedChanges.push(changes.map(change => ({ ...change })));
        },
        chatContainer: { style: {}, classList: { remove() {} } },
        messageEl: { innerHTML: '' }
    };
    const system = new freeTalkWindow.FreeTalkSystem(state, {}, ui, {
        isCurrentlyTyping: () => false
    });
    const participants = [
        { id: 'Teacher', name: '담임선생님' },
        { id: 'Dain', name: '다인' }
    ];
    const beginGroupChat = () => {
        system.isFreeTalking = true;
        system.isGroupMode = true;
        system.currentSceneId = 'group_scene';
        system.freeTalkHistory = [];
        system.groupParticipants = participants;
    };

    beginGroupChat();
    await system.skipFreeTalk();
    assert.deepEqual(affinities, { Teacher: 35, Dain: 22 });
    assert.equal(system.isFreeTalking, true);
    assert.equal(displayedChanges.length, 0);

    beginGroupChat();
    await system.skipFreeTalk();
    assert.match(modalMessages[1], /담임선생님 · 다인/);
    assert.match(modalMessages[1], /각각 20씩 떨어집니다/);
    assert.deepEqual(affinities, { Teacher: 15, Dain: 2 });
    assert.deepEqual(displayedChanges[0], [
        { charKey: 'Teacher', amount: -20 },
        { charKey: 'Dain', amount: -20 }
    ]);
    assert.equal(system.isFreeTalking, false);
    assert.equal(system.isGroupMode, false);
});

test('group backup logs save one player row then one row per character with canonical speaker ids', async () => {
    const config = read('assets/js/modules/config.js');
    const helperStart = config.indexOf('function makeCupidMigratedClientMsgId');
    const helperEnd = config.indexOf('// ============================================================================', helperStart);
    const start = config.indexOf('async function saveCupidGroupChatLog');
    const end = config.indexOf('// ============================================================================', start);
    assert.ok(helperStart >= 0 && helperEnd > helperStart, 'group client id helper must remain extractable');
    assert.ok(start >= 0 && end > start, 'group log writer must remain extractable');

    const queued = [];
    const queueEvents = [];
    const logWindow = {
        CupidFreeTalkCore: { resolveCupidAssistantLogContent: value => value },
        gameEngine: { stateManager: { playerName: '민준' } }
    };
    const logSandbox = {
        window: logWindow,
        navigator: { onLine: true },
        getCupidDeviceId: () => 'cupid-test-user',
        getCupidLanguage: () => 'ko',
        getCupidAppId: () => 'cupid',
        resolveCupidConversationDay: (value, sessionId) => sessionId.startsWith('morning5_') ? 5 : value,
        getCupidResponseLogMetadata: (payload, fallbackOutputLanguage) => ({
            requestId: payload?.turnId || '',
            model: payload?.model || '',
            providerRoute: payload?.providerRoute || payload?.provider || '',
            outputLanguage: payload?.outputLanguage || fallbackOutputLanguage || ''
        }),
        hashCupidLogText: value => `hash-${String(value).length}:1`,
        makeCupidChatLogEntry: value => ({ ...value, clientMsgId: value.clientMsgId || `test-${queued.length}` }),
        persistCupidChatLogEntries: async entries => {
            queueEvents.push(`enqueue:${entries.map(entry => entry.role).join(',')}`);
            queued.push(...entries);
            queueEvents.push(`flush:${queued.length}`);
            return entries;
        },
        enqueueCupidRenderAck: () => true,
        makeCupidChatRenderAckPayload: () => ({}),
        flushCupidChatRenderAckQueue: async () => {},
        postCupidChatLogEntry: async () => {},
        postCupidChatRenderAck: async () => {},
        isTransientCupidChatLogError: () => true,
        logCupidError: () => {},
        String,
        Object,
        Array,
        Promise
    };
    vm.runInNewContext(
        `${config.slice(helperStart, helperEnd)}\n${config.slice(start, end)}\n` +
        'globalThis.__saveCupidGroupChatLog = saveCupidGroupChatLog;\n' +
        'globalThis.__makeCupidGroupChatLogClientId = makeCupidGroupChatLogClientId;',
        logSandbox
    );
    await logSandbox.__saveCupidGroupChatLog({
        userContent: '내가 책임질게.',
        assistantMessages: [
            { speakerId: 'Teacher', speakerName: '담임선생님', content: '먼저 내 말을 들어.', affinityChange: -2, affinityCurrent: 18 },
            { speakerId: 'Dain', speakerName: '다인', content: '저도 들을게요.', affinityChange: -1, affinityCurrent: 27 }
        ],
        participants: [{ id: 'Teacher' }, { id: 'Dain' }],
        sessionId: 'morning5_counteroffer_group_talk',
        turnId: 'group-turn-1',
        playerName: '민준',
        conversationDay: 5,
        responseMetadata: {
            turnId: 'turn-group-request',
            model: 'actual/provider-model',
            providerRoute: 'openrouter:provider:actual/provider-model',
            outputLanguage: 'ko'
        }
    });

    assert.equal(queued.length, 3);
    assert.deepEqual(Array.from(queued, entry => `${entry.role}:${entry.speakerId}`), [
        'user:__player__',
        'assistant:Teacher',
        'assistant:Dain'
    ]);
    assert.deepEqual(queueEvents, ['enqueue:user,assistant,assistant', 'flush:3']);
    for (const entry of queued) {
        assert.equal(entry.charId, 'group');
        assert.equal(entry.context, 'group');
        assert.deepEqual(Array.from(entry.groupParticipants), ['Teacher', 'Dain']);
        assert.equal(entry.groupPairId, 'cupid:Teacher:Dain');
        assert.equal(entry.conversationDay, 5);
        assert.equal(entry.requestId, 'turn-group-request');
        assert.equal(entry.model, 'actual/provider-model');
        assert.equal(entry.providerRoute, 'openrouter:provider:actual/provider-model');
        assert.equal(entry.outputLanguage, 'ko');
        assert.equal(entry.logSource, 'realtime');
    }
    assert.equal(queued[1].affinityCurrent, 18);
    assert.equal(queued[2].affinityCurrent, 27);
    assert.equal(queued[0].clientMsgId, logSandbox.__makeCupidGroupChatLogClientId({
        turnId: 'group-turn-1', role: 'user', content: '내가 책임질게.'
    }));
    assert.equal(queued[1].clientMsgId, logSandbox.__makeCupidGroupChatLogClientId({
        turnId: 'group-turn-1', role: 'assistant', speakerId: 'Teacher', messageIndex: 0, content: '먼저 내 말을 들어.'
    }));
    assert.equal(queued[2].clientMsgId, logSandbox.__makeCupidGroupChatLogClientId({
        turnId: 'group-turn-1', role: 'assistant', speakerId: 'Dain', messageIndex: 1, content: '저도 들을게요.'
    }));

    for (const routeGroup of [
        { day: 2, sessionId: 'after2_seo_group_talk', turnId: 'group-day2', participants: ['Seoyeon', 'Dain'] },
        { day: 3, sessionId: 'hidden_homeroom_d3_group_talk', turnId: 'group-day3', participants: ['Teacher', 'Seoyeon'] }
    ]) {
        queued.length = 0;
        queueEvents.length = 0;
        await logSandbox.__saveCupidGroupChatLog({
            userContent: '둘 다 솔직하게 말해 줘.',
            assistantMessages: routeGroup.participants.map((speakerId, index) => ({
                speakerId,
                content: `${routeGroup.day}일 차 답변 ${index + 1}`,
                affinityChange: index === 0 ? 1 : -1,
                affinityCurrent: 20 + index
            })),
            participants: routeGroup.participants.map(id => ({ id })),
            sessionId: routeGroup.sessionId,
            turnId: routeGroup.turnId,
            playerName: '민준',
            conversationDay: routeGroup.day
        });

        assert.deepEqual(Array.from(queued, entry => `${entry.role}:${entry.speakerId}`), [
            'user:__player__',
            `assistant:${routeGroup.participants[0]}`,
            `assistant:${routeGroup.participants[1]}`
        ]);
        assert.ok(queued.every(entry => entry.charId === 'group' && entry.context === 'group'));
        assert.ok(queued.every(entry => entry.conversationDay === routeGroup.day));
        assert.ok(queued.every(entry => entry.groupPairId === `cupid:${routeGroup.participants.join(':')}`));
    }
});

test('single Cupid turns stage user, assistant, and render receipt before flushing', async () => {
    const config = read('assets/js/modules/config.js');
    const start = config.indexOf('async function saveCupidChatLog');
    const end = config.indexOf('async function saveCupidGroupChatLog', start);
    assert.ok(start >= 0 && end > start, 'single chat log writer must remain extractable');

    const events = [];
    const sandbox = {
        window: {
            CupidFreeTalkCore: { resolveCupidAssistantLogContent: value => value },
            gameEngine: { stateManager: { playerName: 'player' } }
        },
        getCurrentCupidConversationDay: () => 5,
        getCupidDeviceId: () => 'cupid-test-user',
        getCupidLanguage: () => 'ko',
        getCupidAppId: () => 'cupid',
        resolveCupidConversationDay: value => value,
        getCupidResponseLogMetadata: () => ({ requestId: 'turn-1' }),
        makeCupidChatLogEntry: value => ({ ...value, clientMsgId: `${value.role}-1` }),
        makeCupidChatRenderAckPayload: entry => ({ clientMsgId: entry.clientMsgId }),
        enqueueCupidRenderAck: payload => { events.push(`ack:${payload.clientMsgId}`); return true; },
        persistCupidChatLogEntries: async entries => {
            events.push(`stage:${entries.map(entry => entry.role).join(',')}`);
            events.push('flush');
            return entries;
        },
        flushCupidChatRenderAckQueue: async () => { events.push('ack-flush'); },
        postCupidChatRenderAck: async () => { events.push('ack-direct'); },
        Boolean,
        String
    };
    vm.runInNewContext(
        `${config.slice(start, end)}\n` +
        'globalThis.__saveCupidChatLog = saveCupidChatLog;',
        sandbox
    );
    await sandbox.__saveCupidChatLog({
        charId: 'Seoyeon',
        userContent: 'user',
        assistantContent: 'assistant',
        assistantRenderReceipt: { status: 'rendered', renderedContent: 'assistant' }
    });

    assert.deepEqual(events, [
        'ack:assistant-1',
        'stage:user,assistant',
        'flush',
        'ack-flush'
    ]);
});

test('Cupid chat entries and every free-talk path preserve actual AI routing metadata', () => {
    const config = read('assets/js/modules/config.js');
    const freeTalk = read('assets/js/modules/FreeTalkSystem.js');
    const gallery = read('assets/js/gallery-freetalk.js');
    const start = config.indexOf('function getCupidResponseLogMetadata');
    const end = config.indexOf('async function postCupidChatLogEntry', start);
    assert.ok(start >= 0 && end > start, 'Cupid chat metadata helpers must remain extractable');

    const sandbox = {
        Date,
        Math,
        String,
        Number,
        Array,
        normalizeCupidConversationDay: value => Number(value) || null,
        normalizeCupidChatLogAffinity: value => Number.isFinite(Number(value)) ? Math.round(Number(value)) : null
    };
    vm.runInNewContext(
        `${config.slice(start, end)}\n` +
        'globalThis.__getCupidResponseLogMetadata = getCupidResponseLogMetadata;\n' +
        'globalThis.__makeCupidChatLogEntry = makeCupidChatLogEntry;',
        sandbox
    );
    const metadata = sandbox.__getCupidResponseLogMetadata({
        turnId: 'turn-cupid-request',
        model: 'actual/provider-model',
        providerRoute: 'openrouter:provider:actual/provider-model'
    }, 'ja');
    const entry = sandbox.__makeCupidChatLogEntry({
        userId: 'cupid-test-user',
        charId: 'Yuna',
        sessionId: 'session-test',
        role: 'assistant',
        content: 'response',
        context: '1:1',
        playerName: 'player',
        language: 'ja',
        appId: 'cupid-ja',
        ...metadata,
        logSource: 'realtime'
    });
    assert.equal(entry.requestId, 'turn-cupid-request');
    assert.equal(entry.model, 'actual/provider-model');
    assert.equal(entry.providerRoute, 'openrouter:provider:actual/provider-model');
    assert.equal(entry.outputLanguage, 'ja');
    assert.equal(entry.logSource, 'realtime');
    assert.equal((freeTalk.match(/responseMetadata: data/g) || []).length, 2);
    assert.equal((gallery.match(/responseMetadata: data/g) || []).length, 1);
});

test('existing local group turns are recovered even when the legacy migration flag is already set', async () => {
    const config = read('assets/js/modules/config.js');
    const helperStart = config.indexOf('function makeCupidMigratedClientMsgId');
    const helperEnd = config.indexOf('// ============================================================================', helperStart);
    const start = config.indexOf('async function migrateCupidChatHistoryToD1');
    const end = config.indexOf('const CUPID_CHAT_LOG_QUEUE_KEY', start);
    assert.ok(helperStart >= 0 && helperEnd > helperStart, 'group client id helper must remain extractable');
    assert.ok(start >= 0 && end > start, 'migration must remain extractable');

    const stored = new Map([
        ['cupid_chat_migrated_v1', '2026-04-09T00:00:00.000Z'],
        ['cupid_save', JSON.stringify({
            gameState: {
                groupConversationMemories: [{
                    turnId: 'group-turn-1',
                    sessionId: 'morning5_counteroffer_group_talk',
                    day: 1,
                    participants: [{ id: 'Teacher' }, { id: 'Dain' }],
                    playerName: '민준',
                    userContent: '둘 다 내 말을 들어줘.',
                    assistantMessages: [
                        { speakerId: 'Teacher', content: '먼저 설명해 봐.', affinityCurrent: 20 },
                        { speakerId: 'Dain', content: '저도 듣고 있어요.', affinityCurrent: 28 }
                    ]
                }, {
                    turnId: 'group-turn-2',
                    sessionId: 'morning5_counteroffer_group_talk',
                    day: 5,
                    participants: [{ id: 'Teacher' }, { id: 'Dain' }],
                    playerName: '민준',
                    userContent: '둘 다 내 말을 들어줘.',
                    assistantMessages: []
                }]
            }
        })]
    ]);
    const posted = [];
    const migrationStorage = {
        getItem: key => stored.get(key) || null,
        setItem: (key, value) => stored.set(key, String(value))
    };
    const migrationSandbox = {
        window: { CupidStorage: migrationStorage },
        getCupidDeviceId: () => 'cupid-existing-user',
        getCupidLanguage: () => 'ko',
        getCupidAppId: () => 'cupid',
        normalizeCupidConversationDay: value => Number(value) || null,
        resolveCupidConversationDay: (value, sessionId) => sessionId.startsWith('morning5_') ? 5 : Number(value) || null,
        hashCupidLogText: value => `hash-${String(value).length}:1`,
        makeCupidChatLogEntry: value => ({ ...value }),
        persistCupidChatLogEntries: async entries => { posted.push(...entries); return entries; },
        uploadImageToR2: async () => '',
        reportCupidCaughtError: () => {},
        CHAR_NAME_MAP: {},
        console: { info() {}, warn() {} },
        String,
        Number,
        Object,
        Array,
        JSON,
        Date,
        Promise
    };
    vm.runInNewContext(
        `${config.slice(helperStart, helperEnd)}\n${config.slice(start, end)}\n` +
        'globalThis.__migrateCupidChatHistoryToD1 = migrateCupidChatHistoryToD1;',
        migrationSandbox
    );

    await migrationSandbox.__migrateCupidChatHistoryToD1();
    const firstIds = posted.map(entry => entry.clientMsgId);
    assert.equal(posted.length, 4);
    assert.deepEqual(Array.from(posted, entry => `${entry.role}:${entry.speakerId}`), [
        'user:__player__',
        'assistant:Teacher',
        'assistant:Dain',
        'user:__player__'
    ]);
    assert.ok(posted.every(entry => entry.conversationDay === 5));
    assert.ok(posted.every(entry => entry.logSource === 'local-recovery'));
    assert.deepEqual(Array.from(posted, entry => entry.recoveryOccurrence), [1, 1, 1, 2]);

    posted.length = 0;
    await migrationSandbox.__migrateCupidChatHistoryToD1();
    assert.deepEqual(posted.map(entry => entry.clientMsgId), firstIds, 'recovery ids must be stable for D1 upsert');
});

test('conversation log day prefers the scene session over stale runtime day state', () => {
    const config = read('assets/js/modules/config.js');
    const start = config.indexOf('function normalizeCupidConversationDay');
    const end = config.indexOf('async function prepareCupidPromptMemoryRecall', start);
    assert.ok(start >= 0 && end > start, 'conversation day helpers must remain extractable');

    const daySandbox = {
        window: { gameEngine: { stateManager: { currentDay: 1 } } },
        String,
        Number
    };
    vm.runInNewContext(
        `${config.slice(start, end)}\nglobalThis.__resolveCupidConversationDay = resolveCupidConversationDay;`,
        daySandbox
    );

    assert.equal(daySandbox.window.gameEngine.stateManager.currentDay, 1);
    assert.equal(daySandbox.__resolveCupidConversationDay(1, 'lunch_seoyeon_freetalk'), 1);
    assert.equal(daySandbox.__resolveCupidConversationDay(1, 'after2_dain_freetalk'), 2);
    assert.equal(daySandbox.__resolveCupidConversationDay(1, 'hidden_yuna_d2_freetalk'), 2);
    assert.equal(daySandbox.__resolveCupidConversationDay(1, 'after3_dain_freetalk'), 3);
    assert.equal(daySandbox.__resolveCupidConversationDay(1, 'wall_teacher_freetalk'), 4);
    assert.equal(daySandbox.__resolveCupidConversationDay(1, 'tour_yuna_freetalk'), 5);
    assert.equal(daySandbox.__resolveCupidConversationDay(1, 'day5_yuna_ending_freetalk_perfect'), 5);
    assert.equal(daySandbox.__resolveCupidConversationDay(4, 'gallery-freetalk'), 4);
});

test('gallery relationship aftermath persists through its local save store', () => {
    const saved = new Map();
    const localStorage = {
        getItem(key) { return saved.has(key) ? saved.get(key) : null; },
        setItem(key, value) { saved.set(key, String(value)); }
    };
    const galleryWindow = {
        location: { search: '' },
        CupidFreeTalkCore: core,
        CupidStorage: localStorage
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

test('desktop Enter submits while Shift+Enter and Alt+Enter remain newlines', () => {
    const desktopEnvironment = {
        navigator: { userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        matchMedia: () => ({ matches: false })
    };

    assert.equal(composer.shouldSubmitOnEnter({ key: 'Enter' }, desktopEnvironment), true);
    assert.equal(composer.shouldSubmitOnEnter({ key: 'Enter', shiftKey: true }, desktopEnvironment), false);
    assert.equal(composer.shouldSubmitOnEnter({ key: 'Enter', altKey: true }, desktopEnvironment), false);
    assert.equal(composer.shouldSubmitOnEnter({ key: 'Enter', isComposing: true }, desktopEnvironment), false);
    assert.equal(composer.shouldSubmitOnEnter({ key: 'Enter', keyCode: 229 }, desktopEnvironment), false);
});

test('mobile and coarse-pointer Enter remain native textarea newlines', () => {
    assert.equal(composer.shouldSubmitOnEnter({ key: 'Enter' }, {
        navigator: { userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)' },
        matchMedia: () => ({ matches: false })
    }), false);
    assert.equal(composer.shouldSubmitOnEnter({ key: 'Enter' }, {
        navigator: { userAgent: 'Mozilla/5.0' },
        matchMedia: () => ({ matches: true })
    }), false);
});

test('game and gallery FreeTalk inputs use the shared keyboard rule', () => {
    const gameEngine = read('assets/js/modules/GameEngine.js');
    const gallery = read('assets/js/gallery-freetalk.js');

    assert.match(gameEngine, /chatInput\.addEventListener\('keydown',[\s\S]*MessageComposerUtils\?\.shouldSubmitOnEnter/);
    assert.match(gameEngine, /chatSendBtn\?\.click\(\)/);
    assert.match(gallery, /input\.addEventListener\('keydown',[\s\S]*MessageComposerUtils\?\.shouldSubmitOnEnter/);
    assert.match(gallery, /event\.preventDefault\(\);\s*this\._handleSend\(\);/);
});
