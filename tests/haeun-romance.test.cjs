'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
const languages = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'];
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
    const renderer = new context.window.SceneRenderer(state, { updateMaxAffinity() {}, checkAffinityUnlock() {} }, { showAffinityChange() {} });
    return { context, state, renderer, scenes: Object.assign({}, ...Object.values(context.SCENARIO)) };
}
test('Haeun choice requires her conversation and 45, with a persisted highest-affinity rival', () => {
    const { state, renderer, scenes } = runtime();
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_route_gate), 'after5_original_start');
    state.setFlag('messaged_day5_haeun_personal');
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_route_gate), 'day5_haeun_route_affinity');
    for (const score of [0, 30, 44, 45, 100]) {
        state.stats.Haeun.affinity = score;
        assert.equal(renderer.resolveNextScene(scenes.day5_haeun_route_affinity), score >= 45 ? 'day5_haeun_route_rival' : 'after5_original_start');
    }
    state.stats.Yuna.affinity = 90;
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_route_rival), 'day5_haeun_offer_yuna');
    state.stats.Seoyeon.affinity = 100;
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_choose_rival), 'day5_haeun_leave_yuna');
    renderer.processSceneStats(scenes.day5_haeun_leave_yuna);
    assert.equal(state.getAffinity('Yuna'), 80);
});
test('100 dates Haeun; 99 returns to the unchanged ending conditions and does not erase incidents', () => {
    const { state, renderer, scenes } = runtime();
    state.setFlag('haeun_route_selected');
    state.setFlag('day3_caught_multiple_dates');
    state.setFlag('route_seoyeon');
    state.stats.Haeun.affinity = 99;
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_romance_check), 'day5_haeun_fallback');
    renderer.processSceneFlags(scenes.day5_haeun_fallback);
    assert.equal(state.getFlag('haeun_route_selected'), false);
    assert.equal(state.getFlag('route_seoyeon'), true);
    assert.equal(renderer.resolveNextScene(scenes.ending_start), 'day5_ending_mayhem');
    state.stats.Haeun.affinity = 100;
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_romance_check), 'day5_ending_haeun');
    state.setFlag('isDating_Seoyeon');
    renderer.processSceneFlags(scenes.day5_ending_haeun);
    assert.equal(state.getFlag('isDating_Haeun'), true);
    assert.equal(state.getFlag('isDating_Seoyeon'), false);
    assert.equal(state.getFlag('ending_perfect'), true);
});
test('the best path has a 110-point budget, stored cap 100, mostly personal conversation', () => {
    const { context, state, scenes } = runtime();
    const personal = ['haeun_freetalk', 'day4_haeun_personal', 'day5_haeun_personal', 'day5_haeun_private_1', 'day5_haeun_private_2'];
    assert.equal(personal.reduce((n, id) => n + scenes[id].maxTurns, 0), 35);
    let raw = 0;
    for (let turn = 0; turn < 40; turn++) {
        const gain = context.window.CupidFreeTalkCore.normalizeStoryFreeTalkAffinityChange(5, state.getAffinity('Haeun'));
        raw += gain;
        state.changeAffinity('Haeun', gain);
    }
    assert.equal(raw, 110);
    assert.equal(state.getAffinity('Haeun'), 100);
    state.stats.Haeun.affinity = 45;
    for (let turn = 0; turn < 20; turn++) state.changeAffinity('Haeun', context.window.CupidFreeTalkCore.normalizeStoryFreeTalkAffinityChange(5, state.getAffinity('Haeun')));
    assert.equal(state.getAffinity('Haeun'), 100);
    for (const id of personal) assert.equal(scenes[id].stats, undefined);
});
test('all seven locales have Haeun route copy, four existing expressions and gallery prompt cache isolation', () => {
    const { context, scenes } = runtime();
    const Gallery = context.window.GalleryData;
    assert.equal(Gallery.resolveEndingId('day5_ending_haeun'), 'perfect_haeun');
    for (const lang of languages) {
        const copy = Object.assign({}, ...['day4_1_morning', 'day5_2_lunch', 'day5_3_afterschool'].map(f => JSON.parse(read(`assets/js/i18n/${lang}/${f}.json`))));
        for (const [id, scene] of Object.entries(scenes).filter(([id]) => /^day[45]_(?:haeun_|ending_haeun)/.test(id))) {
            if (!scene.routeBeforeRender) assert.ok(copy[id]?.text, `${lang}/${id}`);
        }
        assert.deepEqual(Array.from(Gallery.characters[lang].haeun.expressions), ['normal', 'worried', 'firm', 'relieved']);
        for (const expression of Gallery.characters[lang].haeun.expressions) assert.ok(fs.existsSync(path.join(root, `assets/images/characters/haeun_${expression}.webp`)));
        let affinity = 100;
        const talk = new context.window.GalleryFreeTalk(lang, { getPlayerName: () => 'TEST_PLAYER', getAffinity: () => affinity, getCurrentAffinity: () => affinity });
        const a = talk._buildSystemPrompt('haeun');
        affinity = 99;
        const b = talk._buildSystemPrompt('haeun');
        assert.equal(a.split('===CACHE_BOUNDARY===').length, 2);
        assert.equal(a.split('===CACHE_BOUNDARY===')[0], b.split('===CACHE_BOUNDARY===')[0]);
        assert.notEqual(a.split('===CACHE_BOUNDARY===')[1], b.split('===CACHE_BOUNDARY===')[1]);
        assert.ok(a.includes(talk.CHAR_DATING_PROMPTS.haeun[lang]));
        if (lang === 'ko') assert.ok(!a.includes('모든 대사는 반말'));
    }
});
