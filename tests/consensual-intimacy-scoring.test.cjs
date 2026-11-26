'use strict';
// 2026-11-26 (user decision): a kiss or sexual act loses no affinity when the character ends the reply welcoming it,
// even if the act was forced or unasked ("강제라도 캐릭터 반응이 긍정적이면 호감도 깎지 마"). The shared worker asks
// the decision model how the character reacted and returns affinityEvaluation.reaction; it floors its own score at 0
// when the reaction is "welcomed". The client carries that reaction so its low-affinity contact cap (-10/-12/-18) does
// not add the penalty back, in 1:1, group and gallery FreeTalk. Positive scores are untouched; below the allowed tier a
// welcomed act gains nothing. Haeun is 17, so nothing is ever excused for her, before or after the declaration.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const coreSandbox = { window: {}, TextDecoder, Uint8Array };
vm.runInNewContext(read('assets/js/freetalk-core.js'), coreSandbox);
const core = coreSandbox.window.CupidFreeTalkCore;

// Paraphrases of the production Day 4 Teacher turns (affinity 61, 43, 25).
const UNDRESS = '*그녀의 손을 잡고 도서관 문을 잠근다* *그녀의 옷을 벗기고 다리를 벌려 혀로 핥는다*';
const FILMING = '*카메라를 켠다* 이 모습은 나만 간직할게. 보지 벌려줘';
const KISS = '*입을 맞춘다*';

test('the decision reaction is read only from affinityEvaluation and only in its three values', () => {
    assert.equal(core.decisionIntimacyReaction({ affinityEvaluation: { status: 'evaluated', reaction: 'welcomed' } }), 'welcomed');
    assert.equal(core.decisionIntimacyReaction({ affinityEvaluation: { reaction: ' RESISTED ' } }), 'resisted');
    assert.equal(core.decisionIntimacyReaction({ affinityEvaluation: { reaction: 'not_intimate' } }), 'not_intimate');
    for (const value of [null, {}, { reaction: 'welcomed' }, { affinityEvaluation: { reaction: 'yes' } }]) {
        assert.equal(core.decisionIntimacyReaction(value), '', JSON.stringify(value));
    }
});

test('a welcomed act is never penalised; other reactions, positive scores and Haeun keep their value', () => {
    const floor = core.applyWelcomedIntimacyFloor;
    for (const value of [-1, -9, -14, -18, -20, -50]) assert.equal(floor(value, { reaction: 'welcomed', characterId: 'Teacher' }), 0);
    for (const value of [0, 1, 3, 5]) assert.equal(floor(value, { reaction: 'welcomed', characterId: 'Teacher' }), value);
    for (const reaction of ['resisted', 'not_intimate', '', undefined]) assert.equal(floor(-18, { reaction, characterId: 'Teacher' }), -18);
    for (const characterId of ['Haeun', 'haeun', ' HAEUN ']) assert.equal(floor(-18, { reaction: 'welcomed', characterId }), -18);
    assert.equal(floor(-18, { reaction: 'welcomed', characterId: 'Seoyeon', nonRomance: true }), -18);
});

function storySystem({ affinity, scene = {}, sceneId = 'hidden_homeroom_d4_freetalk', charKey = 'Teacher', name = '담임' }) {
    const freeTalkWindow = { CupidFreeTalkCore: core, CHARACTER_EXPRESSIONS: {} };
    vm.runInNewContext(read('assets/js/modules/FreeTalkSystem.js'), {
        window: freeTalkWindow, document: { documentElement: { lang: 'ko' } }, navigator: { onLine: true },
        console: { log() {}, info() {}, warn() {}, error() {} }, DEFAULT_MAX_FREE_TALK_TURNS: 3, CHAR_NAME_MAP: {},
        getAssetUrl: value => value, setTimeout, clearTimeout, URL, URLSearchParams
    });
    const applied = [];
    const scores = { [charKey]: affinity };
    const system = new freeTalkWindow.FreeTalkSystem({}, {}, { charSlots: {} }, {});
    system.charNameMap = { [name]: charKey };
    system.stateManager = {
        stats: { [charKey]: { affinity } },
        getAffinity: id => scores[id],
        changeAffinity(id, amount) { applied.push([id, amount]); scores[id] += amount; return scores[id]; }
    };
    system.galleryManager = { updateMaxAffinity() {}, checkAffinityUnlock() {} };
    system.uiManager = { showAffinityChange() {} };
    system.currentSceneId = sceneId;
    system.currentMaxTurns = Number(scene.maxTurns) || 3;
    freeTalkWindow.CupidAffinityGate = { commitKey: () => `talk:${sceneId}:0`, grant: () => true };
    return { system, applied, scores, scene: { name, type: 'free_talk', maxTurns: 3, ...scene } };
}

test('the production turns all end at 0 when the teacher ends each reply welcoming the act', () => {
    // The worker floors its own -18/-18/-20 to 0 and reports "welcomed".
    for (const [affinity, line] of [[61, UNDRESS], [43, UNDRESS], [25, FILMING]]) {
        const { system, applied, scores, scene } = storySystem({ affinity });
        const result = system.applyAffinity(0, scene, line, { reaction: 'welcomed' });
        assert.deepEqual(applied, [], `affinity ${affinity}`);
        assert.equal(result.change, 0);
        assert.equal(scores.Teacher, affinity);
    }
    // At 25 the client cap used to turn even a worker 0 into -18 for this sexual line.
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(0, FILMING, 25, { characterId: 'Teacher' }), -18);
});

test('main-story applyAffinity keeps penalties for resisted acts, missing reactions, Haeun and locked scenes', () => {
    const resisted = storySystem({ affinity: 25 });
    resisted.system.applyAffinity(-5, resisted.scene, FILMING, { reaction: 'resisted' });
    assert.deepEqual(resisted.applied, [['Teacher', -18]]);

    const missing = storySystem({ affinity: 25 });
    missing.system.applyAffinity(0, missing.scene, FILMING, { reaction: '' });
    assert.deepEqual(missing.applied, [['Teacher', -18]]);

    const plain = storySystem({ affinity: 61 });
    plain.system.applyAffinity(-18, plain.scene, UNDRESS);
    assert.deepEqual(plain.applied, [['Teacher', -18]]);

    // A welcomed act at an allowed tier keeps a positive score.
    const positive = storySystem({ affinity: 61 });
    positive.system.applyAffinity(2, positive.scene, UNDRESS, { reaction: 'welcomed' });
    assert.deepEqual(positive.applied, [['Teacher', 2]]);

    const haeun = storySystem({ affinity: 90, charKey: 'Haeun', name: '하은', scene: { haeunRomance: true } });
    haeun.system.applyAffinity(-14, haeun.scene, KISS, { reaction: 'welcomed' });
    assert.deepEqual(haeun.applied, [['Haeun', -14]]);

    const locked = storySystem({ affinity: 61, scene: { affinityLocked: true } });
    assert.equal(locked.system.applyAffinity(-18, locked.scene, UNDRESS, { reaction: 'welcomed' }).change, 0);
    assert.deepEqual(locked.applied, []);
});

test('group FreeTalk applies the same reaction rule per speaker', () => {
    const { system, applied, scene } = storySystem({ affinity: 25 });
    system.groupParticipants = [{ id: 'Teacher', name: '담임' }];
    const group = { ...scene, type: 'group_free_talk' };
    system._applyGroupAffinity(0, 'Teacher', FILMING, group, 'welcomed');
    assert.deepEqual(applied, []);
    system._applyGroupAffinity(-3, 'Teacher', FILMING, group, 'resisted');
    assert.deepEqual(applied, [['Teacher', -18]]);
});

test('the parsed 1:1 reply carries the reaction, and every scoring path forwards it', () => {
    const { system } = storySystem({ affinity: 61 });
    const parsed = system.parseJsonResponse(JSON.stringify({
        segments: [{ type: 'dialogue', text: '…아니, 더.' }], expression: 'climax', affinity: 0,
        affinityEvaluation: { status: 'evaluated', reaction: 'welcomed' }
    }));
    assert.equal(parsed.intimacyReaction, 'welcomed');
    const source = read('assets/js/modules/FreeTalkSystem.js');
    assert.match(source, /this\.applyAffinity\(parsed\.affinity, scene, finalContent, \{\s*reaction: parsed\.intimacyReaction\s*\}\)/u);
    assert.match(source, /intimacyReaction: CupidFreeTalkCore\.decisionIntimacyReaction\(conversation\)/u);
    assert.match(source, /conversation\.speakerId,\s*latestUserText,\s*scene,\s*conversation\.intimacyReaction\s*\)/u);
    const gallery = read('assets/js/gallery-freetalk.js');
    assert.equal((gallery.match(/intimacyReaction: GalleryFreeTalkCore\.decisionIntimacyReaction\(parsed\)/gu) || []).length, 2);
    assert.match(gallery, /finalContent,\s*parsed\.intimacyReaction\s*\)/u);
    assert.match(gallery, /applyWelcomedIntimacyFloor\(\s*GalleryFreeTalkCore\.enforceCupidAffinityIntimacyBoundary\(/u);
});

// Review follow-up (2026-11-26): only the welcomed act's share is removed. The worker returns the turn's score without
// that act (an insult, a threat or jealousy stays), and the client cap may not push it lower or erase it.
test('a welcomed act removes only its own penalty; other conduct the worker kept stays', () => {
    const floor = core.applyWelcomedIntimacyFloor;
    assert.equal(floor(-12, { reaction: 'welcomed', characterId: 'Teacher', workerChange: -5 }), -5, 'kiss cap -12, insult -5 kept');
    assert.equal(floor(-18, { reaction: 'welcomed', characterId: 'Teacher', workerChange: 0 }), 0, 'act alone: nothing kept');
    assert.equal(floor(-12, { reaction: 'welcomed', characterId: 'Teacher', workerChange: 2 }), 0, 'below the tier a welcomed act gains nothing');
    assert.equal(floor(-5, { reaction: 'welcomed', characterId: 'Teacher', workerChange: -5 }), -5, 'no cap: the worker value stays');
    assert.equal(floor(-18, { reaction: 'welcomed', characterId: 'Haeun', workerChange: 0 }), -18, 'Haeun is never excused');

    const INSULT = '*입을 맞춘다* 근데 선생님 수업은 늘 지루해요';
    const { system, applied } = storySystem({ affinity: 25 });
    system.applyAffinity(-5, storySystem({ affinity: 25 }).scene, INSULT, { reaction: 'welcomed' });
    assert.deepEqual(applied, [['Teacher', -5]]);
});

function groupStory({ affinities, participants }) {
    const ids = Object.keys(affinities);
    const { system, applied, scores } = storySystem({ affinity: affinities[ids[0]], charKey: ids[0] });
    for (const id of ids) { system.stateManager.stats[id] = { affinity: affinities[id] }; scores[id] = affinities[id]; }
    system.groupParticipants = participants.map(id => ({ id, name: id }));
    const scene = { type: 'group_free_talk', groupParticipants: participants.map(id => ({ id })) };
    return { system, applied, scores, scene };
}

test('group FreeTalk: a kiss or sexual act for one heroine never costs the other one', () => {
    // Named target: deterministic, no decision reaction needed.
    const named = groupStory({ affinities: { Dain: 25, Yuna: 25 }, participants: ['Dain', 'Yuna'] });
    named.system._applyGroupAffinity(0, 'Yuna', '*다인에게 키스한다*', named.scene, '');
    named.system._applyGroupAffinity(0, 'Yuna', '*다인의 옷을 벗긴다*', named.scene, '');
    assert.deepEqual(named.applied, [], 'Yuna is not charged for Dain\'s kiss or undressing');
    named.system._applyGroupAffinity(0, 'Dain', '*다인에게 키스한다*', named.scene, '');
    assert.deepEqual(named.applied, [['Dain', -12]], 'the kissed heroine keeps her own cap when no reaction says she welcomed it');

    // Unnamed act: the decision model says nothing was done to Yuna, so her cap does not apply.
    const unnamed = groupStory({ affinities: { Dain: 25, Yuna: 25 }, participants: ['Dain', 'Yuna'] });
    unnamed.system._applyGroupAffinity(0, 'Dain', '*키스한다*', unnamed.scene, 'welcomed');
    unnamed.system._applyGroupAffinity(0, 'Yuna', '*키스한다*', unnamed.scene, 'not_intimate');
    assert.deepEqual(unnamed.applied, []);
    // A real penalty the decision model gave the bystander (jealousy) still applies.
    unnamed.system._applyGroupAffinity(-2, 'Yuna', '*키스한다*', unnamed.scene, 'not_intimate');
    assert.deepEqual(unnamed.applied, [['Yuna', -2]]);
    // Without a reaction an unnamed act stays hers.
    const silent = groupStory({ affinities: { Dain: 25, Yuna: 25 }, participants: ['Dain', 'Yuna'] });
    silent.system._applyGroupAffinity(0, 'Yuna', '*키스한다*', silent.scene, '');
    assert.deepEqual(silent.applied, [['Yuna', -12]]);
    // Her own name or "you" in the clause keeps the cap; 1:1 scenes pass no names.
    const own = groupStory({ affinities: { Dain: 25, Yuna: 25 }, participants: ['Dain', 'Yuna'] });
    own.system._applyGroupAffinity(0, 'Yuna', '*다인에게 키스하고 유나를 끌어안는다*', own.scene, '');
    own.system._applyGroupAffinity(0, 'Dain', '*너에게 키스한다*', own.scene, '');
    assert.deepEqual(own.applied, [['Yuna', -12], ['Dain', -12]]);
    assert.deepEqual({ ...vmFreeTalkSystem().getGroupContactTargetOptions('Yuna', { type: 'free_talk' }) }, {});
});

test('group writer gate does not tell a bystander to refuse a kiss aimed at someone else; Haeun keeps her rule', () => {
    const FreeTalk = vmFreeTalkSystem();
    const scene = { type: 'group_free_talk', groupParticipants: [{ id: 'Dain' }, { id: 'Yuna' }] };
    const gate = (id, line, affinity = 25, extra = {}) => core.buildCupidLatestTurnIntimacyBoundaryGate('ko', affinity, line,
        { characterName: id, characterId: id, ...FreeTalk.getGroupContactTargetOptions(id, scene), ...extra });
    assert.equal(gate('Yuna', '*다인에게 키스한다*'), '');
    assert.notEqual(gate('Dain', '*다인에게 키스한다*'), '');
    // Teacher and Nurse share "선생님": a shared title never proves the act went to the other one.
    const staff = { type: 'group_free_talk', groupParticipants: [{ id: 'Teacher' }, { id: 'Nurse' }] };
    const staffOptions = FreeTalk.getGroupContactTargetOptions('Teacher', staff);
    assert.ok(!staffOptions.contactOtherNames.includes('선생님'));
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(0, '*선생님에게 키스한다*', 25, { characterId: 'Teacher', ...staffOptions }), -12);
    // Haeun before the declaration: a kiss for someone else in the clause is still never exempt, and no reaction skips her cap.
    const haeunScene = { type: 'group_free_talk', groupParticipants: [{ id: 'Seoyeon' }, { id: 'Haeun' }] };
    const haeunOptions = { characterId: 'Haeun', nonRomance: true, ...FreeTalk.getGroupContactTargetOptions('Haeun', haeunScene) };
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(0, '*서연에게 키스한다*', 10, haeunOptions), -12);
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, '*서연의 손을 잡으며* 오해야', 10, haeunOptions), 3);
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(0, '*키스한다*', 10,
        { ...haeunOptions, groupScene: true, decisionReaction: 'not_intimate' }), -12);
});

function vmFreeTalkSystem() {
    const freeTalkWindow = { CupidFreeTalkCore: core, CHARACTER_EXPRESSIONS: {} };
    vm.runInNewContext(read('assets/js/modules/FreeTalkSystem.js'), {
        window: freeTalkWindow, document: { documentElement: { lang: 'ko' } }, navigator: { onLine: true },
        console: { log() {}, info() {}, warn() {}, error() {} }, DEFAULT_MAX_FREE_TALK_TURNS: 3, CHAR_NAME_MAP: {},
        getAssetUrl: value => value, setTimeout, clearTimeout, URL, URLSearchParams
    });
    return freeTalkWindow.FreeTalkSystem;
}
