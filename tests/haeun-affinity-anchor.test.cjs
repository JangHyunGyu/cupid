'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const fixture = require('./affinity-fixture.cjs');
const root = path.resolve(__dirname, '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const languages = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt', 'zh'];
const BOUNDARY = '===CACHE_BOUNDARY===';
// 언어별 기준 문구 머리표(헤더) — 하은이 말하는 장면 전체에 같은 기준이 붙는지 가리는 표지
const HEADER = {
    ko: '[하은 호감도 기준]', en: '[Haeun affinity anchors]', ja: '[ハウンの好感度基準]', es: '[Criterios de afinidad de Haeun]',
    fr: '[Repères d’affinité pour Haeun]', de: '[Maßstäbe für Haeuns Zuneigung]', pt: '[Referências de afinidade de Haeun]', zh: '[夏恩好感度标准]'
};
const SINGLE = [
    ['haeun_freetalk', 'day3_3_afterschool'], ['day4_haeun_personal', 'day4_1_morning'], ['day5_haeun_personal', 'day5_2_lunch'],
    ['day5_haeun_private_1', 'day5_3_afterschool'], ['day5_haeun_private_2', 'day5_3_afterschool']
];
const LOW_BAND = { ko: '0~+1', en: '0 to +1', ja: '0〜+1', es: '0 a +1', fr: '0 et +1', de: '0 bis +1', pt: '0 a +1', zh: '0到+1' };

function runtime() {
    const context = { window: {}, console, setTimeout, clearTimeout, URL, Blob, FormData, CHAR_NAME_MAP: {},
        document: { createElement: () => ({ toDataURL: () => '' }) } };
    vm.createContext(context);
    for (const file of ['freetalk-core.js', 'example-dialogues-ko.js', 'prompts.js', 'gallery-data.js',
        'gallery-freetalk.js', 'modules/StateManager.js', 'modules/SceneRenderer.js', 'modules/FreeTalkSystem.js',
        ...fs.readdirSync(path.join(root, 'assets/js/scenario')).filter(f => /^day.*\.js$/.test(f)).map(f => 'scenario/' + f)]) {
        vm.runInContext(read('assets/js/' + file), context, { filename: file });
    }
    const state = new context.window.StateManager();
    fixture.register(state, context);
    const scenes = Object.assign({}, ...Object.values(context.SCENARIO));
    return { context, state, scenes };
}
const copyOf = (lang, file) => JSON.parse(read(`assets/js/i18n/${lang}/${file}.json`));
function guidanceFor(context, state, scene, id, lang) {
    const p = context.window.FreeTalkSystem.prototype;
    const talk = { stateManager: state, charNameMap: context.window.FreeTalkSystem.CHAR_NAME_MAP || {}, _getLocalizedGroupCharacterName: p._getLocalizedGroupCharacterName, currentSceneId: id };
    return { talk, text: p._getHaeunStageGuidance.call(talk, scene, id, lang) };
}

test('Haeun anchor reaches every scene where Haeun speaks, in all eight languages', () => {
    const { context, state, scenes } = runtime();
    const groupIds = Object.keys(scenes).filter(id => scenes[id].type === 'group_free_talk'
        && Array.isArray(scenes[id].groupParticipants) && scenes[id].groupParticipants.some(p => p.id === 'Haeun'));
    assert.ok(groupIds.length >= 20, 'every Haeun group scene is covered');
    for (const lang of languages) {
        const files = fs.readdirSync(path.join(root, `assets/js/i18n/${lang}`)).filter(f => f.endsWith('.json'));
        const copy = Object.assign({}, ...files.map(f => JSON.parse(read(`assets/js/i18n/${lang}/${f}`))));
        const targets = [...SINGLE.map(([id]) => id), ...groupIds];
        for (const id of targets) {
            const scene = { ...scenes[id], ...copy[id] };
            const { text } = guidanceFor(context, state, scene, id, lang);
            assert.ok(text.includes(HEADER[lang]), `${lang}/${id} must carry the Haeun affinity anchor`);
            assert.ok(text.includes('+2') && text.includes('+3'), `${lang}/${id} keeps +2 and +3`);
            assert.ok(text.includes(LOW_BAND[lang]), `${lang}/${id} keeps empty praise at ${LOW_BAND[lang]}`);
        }
        // 감점 쪽 문구와 숫자는 이 기준에 들어 있지 않다(-50 하한·감점 티어는 freetalk-core가 맡는다)
        const sample = guidanceFor(context, state, { ...scenes.haeun_freetalk, ...copy.haeun_freetalk }, 'haeun_freetalk', lang).text;
        assert.ok(!/-(?:5|10|20|30|50)\b/.test(sample), `${lang} anchor must not touch penalty tiers`);
    }
});

test('Korean anchor states that only concrete, heartfelt care earns high scores', () => {
    const { context, state, scenes } = runtime();
    const copy = copyOf('ko', 'day3_3_afterschool');
    const { text } = guidanceFor(context, state, { ...scenes.haeun_freetalk, ...copy.haeun_freetalk }, 'haeun_freetalk', 'ko');
    assert.match(text, /높은 점수는 구체적이고 진심 어린 배려에만 준다/);
    assert.match(text, /진심이 담긴 말은 \+2/);
    assert.match(text, /구체적인 배려와 공감은 \+3까지 줄 수 있다/);
    assert.match(text, /빈말, 형식적인 칭찬, 하은이 마음을 연 직후의 평범한 예의는 0~\+1이다/);
    assert.match(text, /감점 기준과 한 턴 상한은 그대로 두고/);
});

test('anchor is not attached to other characters, locked after-ending talk, or non-Haeun groups', () => {
    const { context, state, scenes } = runtime();
    const p = context.window.FreeTalkSystem.prototype;
    for (const lang of languages) {
        for (const [id, scene] of Object.entries(scenes)) {
            if (scene.type !== 'free_talk' && scene.type !== 'group_free_talk') continue;
            const isHaeun = scene.type === 'group_free_talk'
                ? Array.isArray(scene.groupParticipants) && scene.groupParticipants.some(item => item.id === 'Haeun')
                : /(^|_)haeun_(freetalk|personal|private_[12])$|^haeun_freetalk$/.test(id);
            const talk = { stateManager: state, charNameMap: {}, _getLocalizedGroupCharacterName: p._getLocalizedGroupCharacterName };
            const text = p._getHaeunStageGuidance.call(talk, scene, id, lang);
            if (!isHaeun) assert.equal(text, '', `${id} must not receive Haeun guidance`);
        }
    }
    const locked = { type: 'free_talk', name: 'Haeun', affinityLocked: true };
    const talk = { stateManager: state, charNameMap: { Haeun: 'Haeun' }, _getLocalizedGroupCharacterName: p._getLocalizedGroupCharacterName };
    assert.equal(p._getHaeunStageGuidance.call(talk, locked, 'afterending_haeun_talk', 'ko'), '');
});

test('anchor lives after the cache boundary in group prompts and never splits the stable prefix', async () => {
    const { context, state, scenes } = runtime();
    const p = context.window.FreeTalkSystem.prototype;
    const ids = ['day5_haeun_seoyeon_group_talk', 'day4_haeun_concern_yuna_group_talk', 'day5_haeun_concern_nurse_group_talk', 'day5_haeun_switch_dain_group_talk'];
    for (const lang of languages) {
        const files = fs.readdirSync(path.join(root, `assets/js/i18n/${lang}`)).filter(f => f.endsWith('.json'));
        const copy = Object.assign({}, ...files.map(f => JSON.parse(read(`assets/js/i18n/${lang}/${f}`))));
        for (const id of ids) {
            const scene = { ...scenes[id], ...copy[id] };
            const talk = { stateManager: state, getGameContext: () => '', charNameMap: {},
                _getLocalizedGroupCharacterName: p._getLocalizedGroupCharacterName, _getLocalizedGroupLocation: p._getLocalizedGroupLocation,
                _getGroupChoiceState: p._getGroupChoiceState, _getHaeunStageGuidance: p._getHaeunStageGuidance, currentSceneId: id };
            talk.groupParticipants = p._resolveGroupParticipants.call(talk, scene, lang);
            fixture.seed(state, 'Haeun', 50);
            const prompt = p._buildCurrentGroupSystemPrompt.call(talk, scene, lang);
            const [stable, dynamic] = prompt.split(BOUNDARY);
            assert.equal(prompt.split(BOUNDARY).length, 2, `${lang}/${id}`);
            assert.ok(dynamic.includes(HEADER[lang]), `${lang}/${id} anchor after boundary`);
            assert.ok(!stable.includes(HEADER[lang]), `${lang}/${id} anchor must not enter the stable prefix`);
        }
    }
});

test('anchor changes keep the score ceilings, the gate, and the penalty tiers untouched', () => {
    const core = read('assets/js/freetalk-core.js');
    assert.match(core, /AFFINITY_CHANGE_MIN\s*=\s*-50/);
    const { context } = runtime();
    assert.match(context.window.CupidFreeTalkCore.buildAffinityChangeGuidance('ko'), /-36~-50/);
    assert.match(context.window.CupidFreeTalkCore.buildAffinityChangeGuidance('en'), /-36 to -50/);
    const src = read('assets/js/modules/FreeTalkSystem.js');
    assert.ok(!/\+[4-9]/.test(src.slice(src.indexOf('const ANCHOR'), src.indexOf('const GENERIC_OTHER'))), 'anchor never offers more than +3');
});

test('single Haeun free-talk prompt carries the anchor only in the live tail and keeps the stable prefix identical', () => {
    const { context, state, scenes } = runtime();
    const api = context.window;
    for (const lang of languages) {
        const files = fs.readdirSync(path.join(root, `assets/js/i18n/${lang}`)).filter(f => f.endsWith('.json'));
        const copy = Object.assign({}, ...files.map(f => JSON.parse(read(`assets/js/i18n/${lang}/${f}`))));
        const scene = { ...scenes.haeun_freetalk, ...copy.haeun_freetalk };
        const { text } = guidanceFor(context, state, scene, 'haeun_freetalk', lang);
        const withAnchor = api.buildSystemPrompt({ lang, sceneName: 'Haeun', displayName: scene.name || 'Haeun', affinity: 10,
            playerName: 'Player', context: text, promptData: api.getPromptData(lang, 'Player') });
        const without = api.buildSystemPrompt({ lang, sceneName: 'Haeun', displayName: scene.name || 'Haeun', affinity: 10,
            playerName: 'Player', context: '', promptData: api.getPromptData(lang, 'Player') });
        const [stableA, dynamicA] = withAnchor.split(BOUNDARY);
        const [stableB] = without.split(BOUNDARY);
        assert.equal(withAnchor.split(BOUNDARY).length, 2, lang);
        assert.equal(stableA, stableB, `${lang} anchor must not alter the stable prefix`);
        assert.ok(dynamicA.includes(HEADER[lang]), `${lang} anchor sits after the boundary`);
    }
});
