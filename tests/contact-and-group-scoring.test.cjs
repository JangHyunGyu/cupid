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
    const ko = /:\s*"(<b>Tip:<\/b> <i>\*[^"]*처럼[^"]*)"\);/u.exec(block);
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

test('Nurse keeps the legacy contact scoring unchanged', () => {
    for (const characterId of ['Nurse', 'nurse']) {
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(-12, '*손을 잡으며* 같이 가자.', 5, { characterId }), -12);
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(3, '*손을 잡으며* 같이 가자.', 5, { characterId }), -10);
        assert.equal(core.getCupidAffinityIntimacyBoundary('손잡고 갈래?', 5, { characterId }).mode, 'action');
        assert.equal(core.enforceCupidAffinityIntimacyBoundary(-12, '손 잡아도 돼?', 5, { characterId }), -12);
        assert.equal(core.getCupidAffinityIntimacyBoundary('아까 손잡아서 미안해', 5, { characterId }).blocked, true);
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
    return { system, applied, affinities };
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
