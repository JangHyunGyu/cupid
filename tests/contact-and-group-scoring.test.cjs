'use strict';
// 2026-10-06 (user-approved): free-talk tip examples, contact scoring and independent group scoring.
// - The face-to-face chat tip no longer suggests hand-holding (which is penalised under affinity 20);
//   every language shows the same non-physical, concrete caring line.
// - Asking for consent and apologising are not unilateral contact; polite requests score 0 or -1,
//   unasked light contact at affinity 0-19 scores -5 to -9, and strict caps stay for negative affinity,
//   non-romance (Haeun), kisses and sexual contact. Nurse keeps the legacy contact scoring.
// - Each group speaker is scored independently with its own +3 per-turn cap.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const LANGS = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt', 'zh'];
const coreSandbox = { window: {}, TextDecoder, Uint8Array };
vm.runInNewContext(read('assets/js/freetalk-core.js'), coreSandbox);
const core = coreSandbox.window.CupidFreeTalkCore;

function faceToFaceTips() {
    const source = read('assets/js/modules/FreeTalkSystem.js');
    const start = source.indexOf('const tips = {');
    const end = source.indexOf('chatGuideEl.innerHTML', start);
    const block = source.slice(start, source.indexOf(';', source.indexOf('처럼', end)) + 1);
    const tips = {};
    for (const lang of LANGS.filter(entry => entry !== 'ko')) {
        const match = new RegExp(`${lang}: isRemote\\s*\\?\\s*"[^"]*"\\s*:\\s*"([^"]*)"`, 'u').exec(block);
        assert.ok(match, `${lang} face-to-face tip`);
        tips[lang] = match[1];
    }
    const ko = /:\s*"(<i>\*[^"]*)"\);/u.exec(block);
    assert.ok(ko, 'ko face-to-face tip');
    tips.ko = ko[1];
    return tips;
}

const EXPECTED_TIP_EXAMPLES = {
    ko: '*음료수를 건네며* 아까 좀 지쳐 보이더라. 이거 마시고 잠깐 쉬어.',
    en: '*hands her a drink* You looked worn out earlier. Take a break with this.',
    ja: '*飲み物を差し出して* さっき疲れてるみたいだったから。これ飲んで少し休んで',
    es: '*le ofrece una bebida* Antes se te veía cansada. Tómate esto y descansa un poco.',
    fr: '*lui tend une boisson* Tu avais l’air épuisée tout à l’heure. Bois ça et fais une pause.',
    de: '*reicht ihr ein Getränk* Du sahst vorhin ziemlich erschöpft aus. Trink das und mach kurz Pause.',
    pt: '*oferece uma bebida* Você parecia cansada mais cedo. Toma isto e descansa um pouco.',
    zh: '*递给她一瓶饮料* 刚才看你挺累的。喝点这个，歇一会儿吧。'
};

test('the face-to-face tip shows the same non-physical caring example in all eight languages', () => {
    const tips = faceToFaceTips();
    assert.deepEqual(Object.keys(tips).sort(), [...LANGS].sort());
    for (const lang of LANGS) {
        const example = /<i>(.*?)<\/i>/u.exec(tips[lang])?.[1];
        assert.equal(example, EXPECTED_TIP_EXAMPLES[lang], `${lang} tip example`);
        assert.doesNotMatch(example, /손을?\s*잡|손잡|\bhand\b|\bmano\b|\bmain\b|mão|手を握|牵|拉.*手/iu, `${lang} tip suggests hand-holding`);
        // The example must not trigger any contact boundary even at affinity 0, for any character.
        for (const affinity of [0, 5, 19]) {
            for (const options of [{}, { nonRomance: true }, { characterId: 'Nurse' }]) {
                const boundary = core.getCupidAffinityIntimacyBoundary(example, affinity, options);
                assert.equal(boundary.level, 'none', `${lang} tip is classified as contact`);
                assert.equal(boundary.blocked, false);
                assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, example, affinity, options), 3);
            }
        }
    }
});

test('consent requests and apologies are not scored as unilateral contact, in every language', () => {
    const requests = ['손잡고 갈래?', '손 잡아도 돼?', '손잡자', 'Can I hold your hand?', '手を握ってもいい？',
        '¿Puedo tomarte la mano?', 'Darf ich deine Hand halten?', 'Posso segurar sua mão?', '我可以牵你的手吗？'];
    for (const text of requests) {
        const boundary = core.getCupidAffinityIntimacyBoundary(text, 5);
        assert.equal(boundary.mode, 'request', text);
        assert.equal(boundary.blocked, true, text);
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(-12, text, 5), -1, `${text}: polite request floor`);
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(-1, text, 5), -1);
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(0, text, 5), 0);
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, text, 5), 0, `${text}: refusal is never rewarded`);
    }
    // Pestering is not floored at -1.
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(-6, '제발 손잡자, 왜 안 돼?', 5), -6);

    const apologies = ['아까 손잡아서 미안해', '아까 갑자기 안아서 미안해. 놀랐지?', 'Sorry I grabbed your hand earlier.',
        'さっき手を握ってごめん', 'Lo siento por tomar tu mano.', 'Désolé de t’avoir pris la main.', '对不起，刚才拉了你的手。'];
    for (const text of apologies) {
        const boundary = core.getCupidAffinityIntimacyBoundary(text, 5);
        assert.equal(boundary.mode, 'apology', text);
        assert.equal(boundary.blocked, false, text);
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(2, text, 5), 2, `${text}: apology scored normally`);
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(-3, text, 5), -3);
        assert.equal(core.buildCupidLatestTurnIntimacyBoundaryGate('ko', 5, text), '');
    }
});

test('unasked light contact is softened but the boundary stays; strict caps are unchanged', () => {
    for (const text of ['*손을 잡으며* 같이 가자.', '*그녀를 끌어안는다*', '*holds her hand* Let\'s go.', '*toma la mano* Vamos.',
        '*prend la main* Allons-y.', '*nimmt ihre Hand* Komm mit.', '*segura a mão* Vamos.', '*牵起她的手* 走吧。']) {
        const boundary = core.getCupidAffinityIntimacyBoundary(text, 5);
        assert.deepEqual([boundary.level, boundary.mode, boundary.blocked], ['light', 'action', true], text);
        assert.deepEqual([boundary.maxAffinityChange, boundary.minAffinityChange], [-5, -9], text);
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, text, 5), -5);
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(-12, text, 5), -9);
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(-7, text, 5), -7);
        // At affinity 20+ light contact is no longer blocked.
        assert.equal(core.getCupidAffinityIntimacyBoundary(text, 20).blocked, false);
    }
    // Negative affinity and non-romance relationships keep -10 or lower without a floor.
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, '*손을 잡으며* 같이 가자.', -5), -10);
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(-20, '*손을 잡으며* 같이 가자.', -5), -20);
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, '*손을 잡으며* 같이 가자.', 50, { nonRomance: true }), -10);
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(-1, '손 잡아도 돼?', 50, { nonRomance: true }), -1);
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(-4, '손 잡아도 돼?', 50, { nonRomance: true }), -4,
        'non-romance (Haeun) requests are not floored');
    // Kisses and sexual contact keep their caps.
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, '(혀를 넣어 키스한다)', 3), -12);
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(-20, '(혀를 넣어 키스한다)', 3), -20);
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, '(가슴을 만진다)', 3), -18);
    assert.equal(core.getCupidAffinityIntimacyBoundary('키스한다', 25).blocked, true);
});

test('Nurse uses the same non-contact idiom filtering and non-negative touch rules as Teacher', () => {
    for (const characterId of ['Nurse', 'nurse']) {
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(-12, '*손을 잡으며* 같이 가자.', 5, { characterId }), -9);
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, '*손을 잡으며* 같이 가자.', 5, { characterId }), -5);
        assert.equal(core.getCupidAffinityIntimacyBoundary('손잡고 갈래?', 5, { characterId }).mode, 'request');
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(-12, '손 잡아도 돼?', 5, { characterId }), -1);
        assert.equal(core.getCupidAffinityIntimacyBoundary('아까 손잡아서 미안해', 5, { characterId }).blocked, false);
    }
    const main = read('assets/js/modules/FreeTalkSystem.js');
    const gallery = read('assets/js/gallery-freetalk.js');
    assert.match(main, /\{ characterId: charKey, nonRomance: charKey === 'Haeun'/);
    assert.match(main, /\{ characterId: speakerId, nonRomance: speakerId === 'Haeun'/);
    assert.match(main, /characterId: participant\.id,/);
    assert.match(main, /characterName: scene\.name \|\| charKey,\s*characterId: charKey,/);
    assert.match(gallery, /characterId: requestCharId,/);
    assert.match(gallery, /currentAffinity,\s*\{ characterId: charId \}/);
});

test('boundary gate wording matches the code ranges in Korean and English', () => {
    const koRequest = core.buildCupidLatestTurnIntimacyBoundaryGate('ko', 5, '손 잡아도 돼?', { characterName: '서연' });
    const enRequest = core.buildCupidLatestTurnIntimacyBoundaryGate('en', 5, 'Can I hold your hand?', { characterName: 'Seoyeon' });
    assert.match(koRequest, /affinity는 양수로 주지 마세요\. 0이나 -1로 둡니다\./);
    assert.match(enRequest, /affinity is 0 or -1/);
    const koAction = core.buildCupidLatestTurnIntimacyBoundaryGate('ko', 5, '*손을 잡으며* 같이 가자.', { characterName: '서연' });
    const enAction = core.buildCupidLatestTurnIntimacyBoundaryGate('en', 5, '*holds her hand* Let\'s go.', { characterName: 'Seoyeon' });
    assert.match(koAction, /-9~-5 사이 음수/);
    assert.match(enAction, /between -9 and -5/);
    const koPressing = core.buildCupidLatestTurnIntimacyBoundaryGate('ko', 5, '제발 손잡자, 왜 안 돼?', { characterName: '서연' });
    assert.match(koPressing, /조르거나 압박했다면 그만큼 낮춥니다/);
    // The latest-turn gate stays after the cache boundary (dynamic), so the stable fingerprint is unchanged.
    const prompt = core.appendDynamicContext('stable prompt', core.buildPostHistoryGuidance(
        [{ role: 'user', content: '손 잡아도 돼?' }], 'ko', { boundaryRule: koRequest }));
    assert.equal(core.getStablePromptFingerprint(prompt), core.getStablePromptFingerprint('stable prompt'));
});

function groupSystem({ affinities }) {
    const freeTalkWindow = { CupidFreeTalkCore: core, CHARACTER_EXPRESSIONS: {} };
    const sandbox = {
        window: freeTalkWindow, document: { documentElement: { lang: 'ko' } }, navigator: { onLine: true },
        console: { log() {}, info() {}, warn() {}, error() {} }, DEFAULT_MAX_FREE_TALK_TURNS: 3, CHAR_NAME_MAP: {},
        getAssetUrl: value => value, setTimeout, clearTimeout, URL, URLSearchParams, Math, Date, Object, Array,
        String, Number, Set, Map, Promise
    };
    vm.runInNewContext(read('assets/js/modules/FreeTalkSystem.js'), sandbox);
    const applied = [];
    const system = new freeTalkWindow.FreeTalkSystem({}, {}, { charSlots: {} }, {});
    system.stateManager = {
        stats: Object.fromEntries(Object.keys(affinities).map(id => [id, { affinity: affinities[id] }])),
        getAffinity: id => affinities[id],
        changeAffinity(id, amount) { applied.push([id, amount]); affinities[id] += amount; return affinities[id]; },
        getRelationshipAftermath: () => null,
        setRelationshipAftermath() {}
    };
    system.galleryManager = { updateMaxAffinity() {}, checkAffinityUnlock() {}, incrementFreeTalkCount() {} };
    system.uiManager = { showAffinityChange() {}, updateNameTag() {}, showNextIndicator() {} };
    system.dialogueSystem = { async typeText() {}, getChatRenderReceipt: () => null };
    system._assertRequestContext = () => {};
    system._setGroupActiveSpeaker = () => {};
    system._applyGroupExpression = () => {};
    system._waitForGroupMessageAdvance = async () => {};
    system._commitFreeTalkCheckpoint = () => {};
    system.currentSceneId = 'group_scene';
    system.currentMaxTurns = 3;
    freeTalkWindow.CupidAffinityGate = { commitKey: () => 'talk:group_scene:0', grant: () => true };
    system.__window = freeTalkWindow;
    return { system, applied, affinities };
}

let cachedFreeTalk = null;
function vmFreeTalk() {
    if (cachedFreeTalk) return cachedFreeTalk;
    const freeTalkWindow = { CupidFreeTalkCore: core, CHARACTER_EXPRESSIONS: {} };
    vm.runInNewContext(read('assets/js/modules/FreeTalkSystem.js'), {
        window: freeTalkWindow, document: { documentElement: { lang: 'ko' } }, navigator: { onLine: true },
        console: { log() {}, info() {}, warn() {}, error() {} }, DEFAULT_MAX_FREE_TALK_TURNS: 3, CHAR_NAME_MAP: {},
        getAssetUrl: value => value, setTimeout, clearTimeout, URL, URLSearchParams
    });
    cachedFreeTalk = freeTalkWindow.FreeTalkSystem;
    return cachedFreeTalk;
}

function coreSandboxGate(system, gate) {
    system.__window.CupidAffinityGate = gate;
}

test('each group speaker gets its own independent affinity change (up to +3 each)', async () => {
    const cases = [
        { scores: [3, 3], expected: [['Seoyeon', 3], ['Dain', 3]] },
        { scores: [3, -3], expected: [['Seoyeon', 3], ['Dain', -3]] },
        { scores: [5, 4], expected: [['Seoyeon', 3], ['Dain', 3]] },
        { scores: [-2, 2], expected: [['Seoyeon', -2], ['Dain', 2]] },
        { scores: [1, 0], expected: [['Seoyeon', 1]] }
    ];
    for (const { scores, expected } of cases) {
        const { system, applied } = groupSystem({ affinities: { Seoyeon: 30, Dain: 30 } });
        const conversations = [
            { speakerId: 'Seoyeon', speakerName: '서연', text: '고마워.', segments: null, affinity: scores[0] },
            { speakerId: 'Dain', speakerName: '다인', text: '나도.', segments: null, affinity: scores[1] }
        ];
        const rendered = await system._renderGroupConversations(conversations, {}, '오늘 둘 다 고생 많았어. 매점에서 음료 사 왔어.', 'ko');
        assert.deepEqual(applied, expected, `scores ${scores}`);
        assert.equal(rendered.length, 2);
    }
});

test('group contact boundaries still apply per speaker', async () => {
    const { system, applied } = groupSystem({ affinities: { Seoyeon: 5, Dain: 30 } });
    await system._renderGroupConversations([
        { speakerId: 'Seoyeon', speakerName: '서연', text: '…', segments: null, affinity: 2 },
        { speakerId: 'Dain', speakerName: '다인', text: '…', segments: null, affinity: 2 }
    ], {}, '*서연의 손을 잡는다*', 'ko');
    // Seoyeon (affinity 5) is blocked at -5; Dain (affinity 30) is not blocked and keeps +2.
    assert.deepEqual(applied, [['Seoyeon', -5], ['Dain', 2]]);
});

// 2026-11-25: production lines that the light-touch cue misread as contact, and touches aimed at someone else.
// These options stand for a group scene with Seoyeon and the homeroom teacher present.
const HAEUN_NON_ROMANCE = {
    characterId: 'Haeun',
    nonRomance: true,
    contactSelfNames: ['하은', 'Haeun', 'ハウン', '夏恩'],
    contactOtherNames: ['서연', 'Seoyeon', 'ソヨン', '书妍', '선생님', '쌤', 'teacher']
};

test('look-alike phrases are not contact, while real contact with a non-romance Haeun stays penalised', () => {
    const notContact = [
        '*심호흡을 하고 학생회실 문손잡이를 잡는다*',
        '하은이도 혼자 걱정만 안고 있지는 않았으면 해',
        '너 어릴 때 나 이사 가서 안아쉬웠어?',
        '괜찮아? 어디 안아파?',
        '배 안고파? 매점 갈래?',
        '*당황해서 말을 더듬으며* 미안, 그게 아니라',
        '네 말이 마음을 어루만져 줬어',
        '혼자 안고 있지 말고 나한테 털어놔.',
        '*음료수 캔을 만지작거리며* 요즘 바쁘지',
        'Your words really touched me.',
        'I was touched that you defended me. Are you okay?',
        '*a small blush touches my cheeks*',
        'Je suis vraiment touché par ton aide.',
        'Das hat mich sehr berührt.',
        "J'étais vraiment touchée par ton aide.",
        'Il était très touché.',
        "Tes mots m'ont touchée.",
        '*더듬거리며 대답한다* 아, 아니야',
        'その話題に触れなくてもいいよ'
    ];
    for (const line of notContact) {
        const boundary = core.getCupidAffinityIntimacyBoundary(line, 10, HAEUN_NON_ROMANCE);
        assert.equal(boundary.level, 'none', line);
        assert.equal(boundary.blocked, false, line);
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, line, 10, HAEUN_NON_ROMANCE), 3, line);
    }
    const stillContact = [
        ['*머리를 쓰다듬으며* 고생했어.', -10],
        ['*하은의 손을 잡고 다정하게 웃는다*', -10],
        ['*꽉 안아준다*', -10],
        ['*안아준다* 어디 안아파?', -10],
        ['걱정하는 하은을 안고 있다', -10],
        ['*touches her shoulder*', -10],
        ['I touched her hand', -10],
        ['Elle me touche la main', -10],
        ['Sie berührt mich am Arm', -10],
        ['손 잡아도 돼?', 0],
        // Review 2026-11-25: real contact that an over-broad look-alike rule had cleared.
        ['*하은의 허벅지를 더듬거리며 웃는다*', -10],
        ['*하은의 몸을 더듬더듬 훑는다*', -10],
        ['*하은의 블라우스 단추를 만지작거린다*', -10],
        ['*하은의 안경을 만지작거린다*', -10],
        ['하은아 보고파, 안고파', -10],
        ['*하은을 안고픈 마음에 팔을 벌린다*', -10]
    ];
    for (const [line, expected] of stillContact) {
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, line, 10, HAEUN_NON_ROMANCE), expected, line);
    }
    // Nurse also ignores non-contact idioms such as "안아파요" just like Teacher and Seoyeon.
    assert.equal(core.getCupidAffinityIntimacyBoundary('하나도 안아파요!', 5, { characterId: 'Nurse' }).level, 'none');
});

test('a light touch aimed only at another named character is not contact with a non-romance Haeun', () => {
    const aimedAtOther = [
        '*서연의 손을 잡으며* 오해야, 내 말 좀 들어 줘.',
        '*서연이 머리를 쓰다듬는다* 괜찮아',
        '*선생님의 손을 잡는다.*',
        '서연을 꽉 안아준다.',
        '하은이 앞에서 미안해. *서연의 손을 잡는다*'
    ];
    for (const line of aimedAtOther) {
        const boundary = core.getCupidAffinityIntimacyBoundary(line, 10, HAEUN_NON_ROMANCE);
        assert.equal(boundary.aimedAtOthers, true, line);
        assert.equal(boundary.blocked, false, line);
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(2, line, 10, HAEUN_NON_ROMANCE), 2, line);
        assert.equal(core.buildCupidLatestTurnIntimacyBoundaryGate('ko', 10, line, HAEUN_NON_ROMANCE), '', line);
    }
    const stillHers = [
        ['*손을 잡으며* 미안', -10],
        // Review 2026-11-25: "you" means the listener, a name inside another word is not that person,
        // and a name without an object or possessive marker does not say who was touched.
        ['*서연 선배 몰래 네 허벅지를 쓰다듬는다*', -10],
        ['하은아, 서연 선배한테 하듯이 너도 안아줄게.', -10],
        ['*서연 선배의 손을 놓고 너를 안는다*', -10],
        ['*서연 선배 몰래 허벅지를 쓰다듬는다*', -10],
        ['이유나 변명 없이 그냥 꼭 안아줄게', -10],
        ['*hugs you without a hint of disdain*', -10],
        ['*I stroke your hair like a kindergarten teacher*', -10],
        ['*쌤통이라며 꼭 안아준다*', -10],
        ['서연아, *손을 잡으며* 미안', -10],
        ['*하은의 손을 잡고 서연을 본다*', -10],
        ['*서연의 손을 잡으며* *머리를 쓰다듬는다*', -10],
        ['*서연에게 키스한다*', -12]
    ];
    for (const [line, expected] of stillHers) {
        const boundary = core.getCupidAffinityIntimacyBoundary(line, 10, HAEUN_NON_ROMANCE);
        assert.equal(boundary.aimedAtOthers, false, line);
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, line, 10, HAEUN_NON_ROMANCE), expected, line);
    }
    // The exemption needs names from the caller, which passes them only for characters present in a group scene.
    const options = scene => vmFreeTalk().getHaeunContactTargetOptions('Haeun', scene);
    const misunderstanding = { type: 'group_free_talk', groupMode: 'haeun_misunderstanding',
        groupParticipants: [{ id: 'Seoyeon' }, { id: 'Haeun' }] };
    assert.deepEqual({ ...options({ type: 'free_talk' }) }, {}, '1:1 scenes pass no names');
    assert.deepEqual({ ...options({ ...misunderstanding, haeunRomance: true }) }, {}, 'romance stage passes no names');
    const groupOptions = options(misunderstanding);
    assert.ok(groupOptions.contactOtherNames.includes('서연'));
    assert.ok(!groupOptions.contactOtherNames.includes('선생님'), 'absent staff are not listed');
    const solo = { characterId: 'Haeun', nonRomance: true, ...options({ type: 'free_talk' }) };
    const grouped = { characterId: 'Haeun', nonRomance: true, ...groupOptions };
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, '*서연의 손을 잡으며* 오해야', 10, solo), -10);
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, '*서연의 손을 잡으며* 오해야', 10, grouped), 3);
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, '*선생님의 손을 잡는다*', 10, grouped), -10);
    // Without the name lists, and for romance characters, nothing changes.
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, '*서연의 손을 잡으며* 오해야', 10, { characterId: 'Haeun', nonRomance: true }), -10);
    assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, '*서연의 손을 잡는다*', 5, { characterId: 'Seoyeon' }), -5);
});

function haeunGroupSystem({ sceneId, scene, turnsDone, affinities }) {
    const { system, applied } = groupSystem({ affinities });
    const flags = {};
    system.stateManager.getFlag = flag => flags[flag];
    system.stateManager.setFlag = (flag, value = true) => { flags[flag] = value; };
    system.currentSceneId = sceneId;
    system.currentMaxTurns = scene.maxTurns;
    system.freeTalkTurns = turnsDone;
    system.groupParticipants = scene.groupParticipants.map(item => ({ id: item.id, name: item.id }));
    return { system, applied, flags };
}

test('Haeun group conversations grant their completion bonus once, on the final turn only', async () => {
    const misunderstanding = {
        type: 'group_free_talk', groupMode: 'haeun_misunderstanding', maxTurns: 5,
        groupParticipants: [{ id: 'Seoyeon', role: 'focus' }, { id: 'Haeun', role: 'companion' }]
    };
    const lines = () => [
        { speakerId: 'Seoyeon', speakerName: '서연', text: '…', segments: null, affinity: 1 },
        { speakerId: 'Haeun', speakerName: '하은', text: '…', segments: null, affinity: 2 }
    ];
    const sceneId = 'day5_haeun_seoyeon_group_talk';
    const gate = key => ({ commitKey: () => key, grant: () => true });

    const early = haeunGroupSystem({ sceneId, scene: misunderstanding, turnsDone: 4, affinities: { Seoyeon: 60, Haeun: 20 } });
    coreSandboxGate(early.system, gate(`talk:${sceneId}:3`));
    await early.system._renderGroupConversations(lines(), { sceneId }, '오해야. 하은이는 나를 감싸 주려던 거야.', 'ko', misunderstanding);
    assert.deepEqual(early.applied, [['Seoyeon', 1], ['Haeun', 2]], 'no bonus before the final turn');

    const final = haeunGroupSystem({ sceneId, scene: misunderstanding, turnsDone: 5, affinities: { Seoyeon: 60, Haeun: 20 } });
    coreSandboxGate(final.system, gate(`talk:${sceneId}:4`));
    const rendered = await final.system._renderGroupConversations(lines(), { sceneId }, '오해야. 하은이는 나를 감싸 주려던 거야.', 'ko', misunderstanding);
    assert.deepEqual(final.applied, [['Seoyeon', 1], ['Haeun', 2], ['Haeun', 3]]);
    const haeunLine = rendered.find(item => item.speakerId === 'Haeun');
    assert.equal(haeunLine.affinityResult.change, 5, 'the logged Haeun change carries the +3 bonus');
    assert.equal(haeunLine.affinityResult.completionBonus, 3);
    assert.equal(haeunLine.affinityResult.value, 25);
    assert.equal(final.flags[`completed_bonus_${sceneId}`], true);
    await final.system._renderGroupConversations(lines(), { sceneId }, '고마워.', 'ko', misunderstanding);
    assert.deepEqual(final.applied.filter(entry => entry[1] === 3), [['Haeun', 3]], 'the bonus never applies twice');

    const switchScene = { ...misunderstanding, groupMode: 'haeun_switch', haeunRomance: true, maxTurns: 3 };
    const switchId = 'day5_haeun_switch_seoyeon_group_talk';
    const post = haeunGroupSystem({ sceneId: switchId, scene: switchScene, turnsDone: 3, affinities: { Seoyeon: 30, Haeun: 65 } });
    coreSandboxGate(post.system, gate(`talk:${switchId}:2`));
    await post.system._renderGroupConversations(lines(), { sceneId: switchId }, '하은이를 선택한 건 내 결정이야.', 'ko', switchScene);
    assert.deepEqual(post.applied, [['Seoyeon', 1], ['Haeun', 2], ['Haeun', 4]]);

    const reputation = { ...misunderstanding, groupMode: 'haeun_reputation' };
    const repId = 'day4_haeun_concern_seoyeon_group_talk';
    const none = haeunGroupSystem({ sceneId: repId, scene: reputation, turnsDone: 5, affinities: { Seoyeon: 60, Haeun: -5 } });
    coreSandboxGate(none.system, gate(`talk:${repId}:4`));
    await none.system._renderGroupConversations(lines(), { sceneId: repId }, '내 잘못이야.', 'ko', reputation);
    assert.deepEqual(none.applied, [['Seoyeon', 1], ['Haeun', 2]], 'reputation groups are outside the best route and carry no bonus');

    // A broken final reply still finishes the conversation; an empty one rolls the turn back.
    const fallback = haeunGroupSystem({ sceneId, scene: misunderstanding, turnsDone: 5, affinities: { Seoyeon: 60, Haeun: 20 } });
    coreSandboxGate(fallback.system, gate(`talk:${sceneId}:4`));
    await fallback.system._renderGroupConversations(lines(), { sceneId, freeTalkTurnsBefore: 4 }, '오해야.', 'ko', misunderstanding, null, { empty: false });
    assert.deepEqual(fallback.applied, [['Haeun', 3]]);
    const empty = haeunGroupSystem({ sceneId, scene: misunderstanding, turnsDone: 5, affinities: { Seoyeon: 60, Haeun: 20 } });
    coreSandboxGate(empty.system, gate(`talk:${sceneId}:4`));
    empty.system.uiManager.turnCountEl = null;
    await empty.system._renderGroupConversations(lines(), { sceneId, freeTalkTurnsBefore: 4 }, '오해야.', 'ko', misunderstanding, null, { empty: true });
    assert.deepEqual(empty.applied, []);
});

test('a hand held with the other heroine no longer costs a non-romance Haeun in group scenes', async () => {
    const scene = {
        type: 'group_free_talk', groupMode: 'haeun_misunderstanding', maxTurns: 5,
        groupParticipants: [{ id: 'Seoyeon', role: 'focus' }, { id: 'Haeun', role: 'companion' }]
    };
    const lines = () => [
        { speakerId: 'Seoyeon', speakerName: '서연', text: '…', segments: null, affinity: 3 },
        { speakerId: 'Haeun', speakerName: '하은', text: '…', segments: null, affinity: 2 }
    ];
    const sceneId = 'day5_haeun_seoyeon_group_talk';
    const gate = { commitKey: () => `talk:${sceneId}:0`, grant: () => true };
    const other = haeunGroupSystem({ sceneId, scene, turnsDone: 1, affinities: { Seoyeon: 60, Haeun: 20 } });
    coreSandboxGate(other.system, gate);
    await other.system._renderGroupConversations(lines(), { sceneId }, '*서연의 손을 잡으며* 오해야, 내 말 좀 들어 줘.', 'ko', scene);
    assert.deepEqual(other.applied, [['Seoyeon', 3], ['Haeun', 2]]);
    const unnamed = haeunGroupSystem({ sceneId, scene, turnsDone: 1, affinities: { Seoyeon: 60, Haeun: 20 } });
    coreSandboxGate(unnamed.system, gate);
    await unnamed.system._renderGroupConversations(lines(), { sceneId }, '*손을 잡으며* 오해야.', 'ko', scene);
    assert.deepEqual(unnamed.applied, [['Seoyeon', 3], ['Haeun', -10]]);
});

test('group prompts and budget docs describe independent per-character scoring', () => {
    const prompts = read('assets/js/prompts.js');
    assert.doesNotMatch(prompts, /양수 합계|회복 합계|sum of positive affinity values|\+3 total across both characters/);
    assert.equal((prompts.match(/affinity는 인물마다 따로 정하는 -50~\+3의 정수입니다\./g) || []).length, 2);
    assert.equal((prompts.match(/integer affinity from -50 to \+3 on every item, scored separately for each character\./g) || []).length, 2);
    assert.match(prompts, /affinity는 인물마다 따로 판정합니다\. 각자 이번 턴 최대 \+3이며/);
    assert.match(prompts, /Score affinity separately for each character\. Each may gain at most \+3 in this turn/);
    assert.match(prompts, /회복은 인물마다 따로 판정하며 각자 이번 턴 최대 \+3입니다/);
    assert.match(prompts, /Score recovery separately for each character: each may recover at most \+3/);
    const agents = read('AGENTS.md');
    assert.match(agents, /그룹 프리토킹\(2026-10-06 사용자 승인\)/);
    assert.match(agents, /18턴 × 3 = 54/);
    assert.match(read('docs/GAME_DESIGN.md'), /그룹 참여 6턴\(2장면 × 3턴\)/);
    assert.doesNotMatch(read('docs/GAME_DESIGN.md'), /나눠 받는다/);
});
