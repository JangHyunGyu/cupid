'use strict';
// 2026-11-26: consensual intimacy reconciliation for main-story 1:1 FreeTalk.
// Production case (Day 4 homeroom teacher): turn 2 at affinity 43 was an unasked sexual act whose reply had the
// teacher embrace him, take part on her own and say "싫지 않아"; the worker's separate scorer still picked its
// "non-consensual sexual assault" band (-18). An assault-band score (-14 or lower) is lifted to 0 only when every
// signal agrees: writer forcedSexualViolation "none", a face showing the act with the character engaged in it, a user
// line that names the act without coercion, violence, threat, recording or insult, a reply without force, refusal or
// distress, and a romance character other than Haeun at 40 or more. Turn 1 (reply: "다리가 강제로 벌려지고",
// "고개를 젓지만", "그만") and turn 3 (filming, "거부하지 못하고", affinity 25) keep the scorer's value.
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
const reconcile = core.reconcileConsensualIntimacyAffinity;

// Paraphrases of the production turns.
const UNDRESS_AND_ORAL = '*그녀의 손을 잡고 도서관 문을 잠근다* *그녀의 옷을 벗기고 다리 사이를 혀로 핥는다* 우리 어디까지 했죠?';
const PENETRATION = '사랑해 *그녀의 질 안에 단단해진 물건을 밀어넣는다* 너와 매일 하고 싶었어';
const FILMING = '*카메라를 켠다* 이 모습은 나만 간직할게. 다 보여줘';
const KISS = '*입을 맞춘다*';
const WILLING_REPLY = '*깊이 밀고 들어오자 숨을 들이켜며 그의 등을 꽉 끌어안는다. 스스로 허리를 맞춰 움직이며 젖은 숨을 몰아쉰다.* 너 진짜… 미쳤어… 하지만, 싫지 않아.';
const FORCED_THEN_PLEASURE_REPLY = '*다리가 강제로 벌려지자 수치심에 얼굴을 붉히며 고개를 젓지만, 몸은 이미 기억하고 있었다.* 읏, 그만… 아니, 더…';
const COERCED_COMPLIANCE_REPLY = '*수치심으로 눈동자가 떨리지만, 쾌락에 절은 몸은 거부하지 못하고 그의 요구에 따른다.* 이런 걸 찍어서… 정말 못됐어.';
const KISS_REPLY = '*입술이 닿자 눈을 감고 그의 목을 끌어당긴다.* …조금만 더.';
const ok = (extra = {}) => ({ forcedSexualViolation: 'none', expression: 'climax', replyText: WILLING_REPLY, characterId: 'Teacher', ...extra });

test('the production turns: only the turn whose reply plainly welcomes the act is lifted', () => {
    // Turn 2 (43, oral_service): the cues miss "질 안에 … 밀어넣는다", the explicit-act cue names it.
    assert.equal(core.classifyCupidIntimacyAdvance(PENETRATION).level, 'none');
    assert.equal(reconcile(-18, PENETRATION, 43, ok({ expression: 'oral_service' })), 0);
    // Turn 1 (61): the reply itself narrates force, a head-shake and "그만", so the scorer's band stands.
    assert.equal(reconcile(-18, UNDRESS_AND_ORAL, 61, ok({ replyText: FORCED_THEN_PLEASURE_REPLY })), -18);
    // Turn 3: below 40 it stands; even at 61 filming and coerced compliance keep it.
    assert.equal(reconcile(-20, FILMING, 25, ok({ replyText: COERCED_COMPLIANCE_REPLY })), -20);
    assert.equal(reconcile(-20, FILMING, 61, ok({ replyText: COERCED_COMPLIANCE_REPLY })), -20);
    assert.equal(reconcile(-20, FILMING, 61, ok()), -20, 'recording alone keeps the penalty');
    // With a willing reply every assault-band value is lifted.
    for (const value of [-14, -15, -17, -18, -20, -35, -50]) {
        assert.equal(reconcile(value, UNDRESS_AND_ORAL, 70, ok({ expression: 'afterglow' })), 0, String(value));
    }
});

test('penalties above the assault band, positive and zero scores are never changed', () => {
    for (const value of [-13, -10, -9, -6, -3, -1, 0, 1, 2, 3, 5]) {
        assert.equal(reconcile(value, UNDRESS_AND_ORAL, 70, ok()), value, String(value));
    }
    assert.equal(reconcile(9, UNDRESS_AND_ORAL, 61, ok()), 5, 'still normalised to +5');
});

test('below 40 the scorer value stays', () => {
    assert.equal(reconcile(-18, UNDRESS_AND_ORAL, 39, ok()), -18);
    assert.equal(reconcile(-14, KISS, 39, ok({ expression: 'kiss', replyText: KISS_REPLY })), -14);
    assert.equal(reconcile(-14, KISS, 40, ok({ expression: 'kiss', replyText: KISS_REPLY })), 0);
    assert.equal(reconcile(-14, KISS, -5, ok({ expression: 'kiss', replyText: KISS_REPLY })), -14);
});

test('the user line must name the act itself; a face alone never stands in for it', () => {
    for (const line of ['*손을 잡는다*', '*안아준다*', '오늘 수업 어땠어?', '']) {
        assert.equal(reconcile(-18, line, 70, ok()), -18, line);
    }
    // A kiss face does not cover a sexual act; it covers the kiss.
    assert.equal(reconcile(-18, UNDRESS_AND_ORAL, 70, ok({ expression: 'kiss', replyText: KISS_REPLY })), -18);
    assert.equal(reconcile(-14, KISS, 70, ok({ expression: 'breathless_kiss', replyText: KISS_REPLY })), 0);
});

test('violence, threats, recording, sharing and insults in the user line keep the penalty', () => {
    for (const line of [
        '*뺨을 세게 때린다*',
        '*뺨을 때리고 옷을 벗긴다*',
        '*목을 조르며 박는다*',
        '한 번만 더 그러면 죽여버릴 거야 *옷을 벗긴다*',
        '안 벗으면 다 소문낼 거야 *옷을 벗긴다*',
        '*옷을 벗기고 사진을 찍어 단톡방에 올린다*',
        '*옷을 벗긴다* 넌 그냥 걸레야',
        '*몰래 녹음기를 켜고 옷을 벗긴다*',
        '*I slap her and undress her*',
        '*fucks her while filming it*',
        '*彼女を殴って服を脱がせる*',
        '*一边拍视频一边插入*'
    ]) {
        assert.equal(reconcile(-18, line, 70, ok()), -18, line);
    }
});

test('coercion cues in the user line keep the penalty in every supported phrasing', () => {
    for (const line of [
        '*강제로 옷을 벗긴다*',
        '*잠든 사이에 옷을 벗긴다*',
        '싫어도 할 거야 *옷을 벗긴다*',
        '*I force her clothes off*',
        '*undresses her while she is unconscious*',
        '*無理やり服を脱がせる*',
        '*强行脱掉她的衣服*'
    ]) {
        assert.equal(reconcile(-18, line, 70, ok()), -18, line);
    }
});

test('force, refusal, fear, pain or crying in the reply keeps the penalty', () => {
    for (const replyText of [
        FORCED_THEN_PLEASURE_REPLY,
        COERCED_COMPLIANCE_REPLY,
        '*그를 밀어내며* 하지 마!',
        '*몸을 비틀며 고개를 저었다.* 싫어.',
        '*눈물이 맺힌 채 숨을 삼킨다.*',
        '*억지로 벌려진 다리가 떨린다.*',
        '*She pushes him away.* Stop. Please stop.',
        '*She starts to cry.*',
        '*顔を背けて* やめて…',
        '*她哭着推开他* 不要…',
        '' // no visible reply: nothing to read, nothing lifted
    ]) {
        assert.equal(reconcile(-18, UNDRESS_AND_ORAL, 70, ok({ replyText })), -18, replyText);
    }
});

test('a forced, missing or unknown writer classification keeps the penalty', () => {
    for (const forcedSexualViolation of ['rape', 'molestation', '', undefined, 'unknown']) {
        assert.equal(reconcile(-18, UNDRESS_AND_ORAL, 61, ok({ forcedSexualViolation })), -18, String(forcedSexualViolation));
    }
    assert.equal(reconcile(-18, UNDRESS_AND_ORAL, 61, ok({ forcedSexualViolation: ' NONE ' })), 0);
});

test('only the participation faces qualify, whether or not the contact cues catch the line', () => {
    const kept = ['smile', 'soft_smile', 'laugh', 'aegyo', 'touched', 'relieved', 'lovestruck', 'pout', 'smirk',
        'shy', 'very_shy', 'flushed', 'undressed_shy', 'sensitive_shiver', 'seductive', 'submissive_lust',
        'scared', 'angry', 'furious', 'disgusted', 'cold', 'cry', 'sob', 'pain', 'humiliated', 'betrayed',
        'firm', 'sad', 'worried', 'surprised', 'normal', 'enduring', 'secret_enduring', 'conflicted_pleasure',
        'choking', 'pleading', 'dazed', 'exhausted', 'tipsy', 'sleeping', 'fainted', 'groggy', 'obsessed', ''];
    for (const expression of kept) {
        assert.equal(reconcile(-18, UNDRESS_AND_ORAL, 61, ok({ expression })), -18, `${expression} / cue line`);
        assert.equal(reconcile(-18, PENETRATION, 61, ok({ expression })), -18, `${expression} / uncaught line`);
    }
    assert.deepEqual([...core.CONSENSUAL_INTIMACY_PARTICIPATION_EXPRESSIONS].sort(), [
        'afterglow', 'ahegao', 'begging_lust', 'breathless_kiss', 'climax', 'dominant_aroused', 'entranced',
        'hungry_lust', 'kiss', 'messy_afterglow', 'oral_service', 'overwhelmed_pleasure'
    ]);
    for (const expression of core.CONSENSUAL_INTIMACY_PARTICIPATION_EXPRESSIONS) {
        const isKiss = ['kiss', 'breathless_kiss'].includes(expression);
        assert.equal(reconcile(-18, isKiss ? KISS : PENETRATION, 61, ok({ expression, replyText: isKiss ? KISS_REPLY : WILLING_REPLY })), 0, expression);
    }
});

test('Haeun keeps the scorer value at every stage', () => {
    assert.equal(reconcile(-18, UNDRESS_AND_ORAL, 80, ok({ nonRomance: true, characterId: '' })), -18);
    // Haeun is 17: even after the romance declaration (nonRomance false) nothing intimate is reconciled.
    for (const characterId of ['Haeun', 'haeun', ' HAEUN ']) {
        assert.equal(reconcile(-14, KISS, 90, ok({ expression: 'kiss', replyText: KISS_REPLY, characterId })), -14, characterId);
        assert.equal(reconcile(-18, UNDRESS_AND_ORAL, 90, ok({ characterId, nonRomance: false })), -18, characterId);
    }
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

const consent = (extra = {}) => ({ forcedSexualViolation: 'none', expression: 'climax', replyText: WILLING_REPLY, ...extra });

test('main-story applyAffinity lifts the contradiction only when the 1:1 consent evidence is passed', () => {
    const lifted = storySystem({ affinity: 61 });
    const result = lifted.system.applyAffinity(-18, lifted.scene, UNDRESS_AND_ORAL, consent());
    assert.deepEqual(lifted.applied, []);
    assert.equal(result.change, 0);
    assert.equal(result.requestedChange, 0);
    assert.equal(lifted.scores.Teacher, 61);

    const forced = storySystem({ affinity: 61 });
    forced.system.applyAffinity(-18, forced.scene, UNDRESS_AND_ORAL, consent({ forcedSexualViolation: 'rape' }));
    assert.deepEqual(forced.applied, [['Teacher', -18]]);

    const refused = storySystem({ affinity: 61 });
    refused.system.applyAffinity(-18, refused.scene, UNDRESS_AND_ORAL, consent({ replyText: FORCED_THEN_PLEASURE_REPLY }));
    assert.deepEqual(refused.applied, [['Teacher', -18]]);

    // Without consent evidence (every caller other than the 1:1 reply) the scorer value is applied as before.
    const plain = storySystem({ affinity: 61 });
    plain.system.applyAffinity(-18, plain.scene, UNDRESS_AND_ORAL);
    assert.deepEqual(plain.applied, [['Teacher', -18]]);

    // A blocked tier still uses the existing contact cap (-18 or lower) even with willing-looking evidence.
    const blocked = storySystem({ affinity: 25 });
    blocked.system.applyAffinity(-5, blocked.scene, UNDRESS_AND_ORAL, consent());
    assert.deepEqual(blocked.applied, [['Teacher', -18]]);

    // Haeun after the romance declaration is never reconciled by the main-story path either.
    const haeun = storySystem({ affinity: 90, charKey: 'Haeun', name: '하은', scene: { haeunRomance: true } });
    haeun.system.applyAffinity(-14, haeun.scene, KISS, consent({ expression: 'kiss', replyText: KISS_REPLY }));
    assert.deepEqual(haeun.applied, [['Haeun', -14]]);

    // Locked (after-ending) scenes stay locked.
    const locked = storySystem({ affinity: 61, scene: { affinityLocked: true } });
    assert.equal(locked.system.applyAffinity(-18, locked.scene, UNDRESS_AND_ORAL, consent()).change, 0);
    assert.deepEqual(locked.applied, []);
});

test('the Day 4 temptation interlude judges the tier by its scene attitude (affinity 100), like the contact gate', () => {
    const sceneId = 'day4_temptation_seoyeon_freetalk';
    const scene = { romanticInterlude: true, affinityLocked: false, maxTurns: 5 };
    const lifted = storySystem({ affinity: 35, sceneId, charKey: 'Seoyeon', name: '서연', scene });
    lifted.system.applyAffinity(-18, lifted.scene, UNDRESS_AND_ORAL, consent());
    assert.deepEqual(lifted.applied, []);
    const refused = storySystem({ affinity: 35, sceneId, charKey: 'Seoyeon', name: '서연', scene });
    refused.system.applyAffinity(-18, refused.scene, UNDRESS_AND_ORAL, consent({ replyText: '*그를 밀어내며* 하지 마.' }));
    assert.deepEqual(refused.applied, [['Seoyeon', -18]]);
});

test('the group path never reconciles: it has no writer classification', () => {
    const { system, applied, scene } = storySystem({ affinity: 61 });
    system.groupParticipants = [{ id: 'Teacher', name: '담임' }];
    system._applyGroupAffinity(-18, 'Teacher', UNDRESS_AND_ORAL, { ...scene, type: 'group_free_talk' });
    assert.deepEqual(applied, [['Teacher', -18]]);
});

test('the 1:1 reply passes the writer classification, the selected face and the visible reply to applyAffinity', () => {
    const source = read('assets/js/modules/FreeTalkSystem.js');
    assert.match(source, /this\.applyAffinity\(parsed\.affinity, scene, finalContent, \{\s*forcedSexualViolation,\s*expression: parsed\.expression,\s*replyText: reply\s*\}\)/u);
});
