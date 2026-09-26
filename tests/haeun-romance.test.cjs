const fixture = require('./affinity-fixture.cjs');
'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { readPlainMedia } = require('../scripts/lib/read-plain-media.cjs');
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
    fixture.register(state, context);
    const renderer = new context.window.SceneRenderer(state, { updateMaxAffinity() {}, checkAffinityUnlock() {} }, { showAffinityChange() {}, showAffinityChangeMulti() {} });
    return { context, state, renderer, scenes: Object.assign({}, ...Object.values(context.SCENARIO)) };
}
test('Haeun choice requires her conversation and 45, with a persisted highest-affinity rival', async () => {
    const { context, state, renderer, scenes } = runtime();
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_route_gate), 'after5_original_start');
    state.setFlag('messaged_day5_haeun_personal');
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_route_gate), 'day5_haeun_route_affinity');
    for (const score of [0, 30, 44, 45, 100]) {
        fixture.seed(state, 'Haeun', score);
        assert.equal(renderer.resolveNextScene(scenes.day5_haeun_route_affinity), score >= 45 ? 'day5_haeun_route_rival' : 'after5_original_start');
    }
    fixture.seed(state, 'Yuna', 90);
    fixture.seed(state, 'Haeun', 60);
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_route_rival), 'day5_haeun_offer_yuna');
    fixture.seed(state, 'Seoyeon', 100);
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_choose_rival), 'day5_haeun_leave_yuna');
    await fixture.scene(context, state, renderer, scenes, scenes.day5_haeun_leave_yuna);
    assert.equal(state.getAffinity('Yuna'), 60);
    assert.equal(state.getAffinity('Haeun'), 80);
    assert.equal(scenes.day5_haeun_leave_yuna.next, 'day5_haeun_switch_yuna_entry');
    assert.equal(scenes.day5_haeun_switch_yuna_group_talk.maxTurns, 3);
});

test('Day 4 group exit stays at the gate until Haeun finishes her personal conversation', async () => {
    const { state, scenes, renderer } = runtime();
    state.setFlag('messaged_haeun_freetalk');
    assert.equal(scenes.day4_haeun_finish.background, scenes.day4_haeun_personal.background);
    assert.equal(renderer.resolveNextScene(scenes.day4_haeun_finish), 'day4_haeun_personal_gate');
    assert.equal(renderer.resolveNextScene(scenes.day4_haeun_personal_gate), 'day4_haeun_personal');
    assert.equal(scenes.day4_haeun_personal.next, 'morning4_end');
});
test('100 dates Haeun; 99 returns to the unchanged ending conditions and does not erase incidents', async () => {
    const { context, state, renderer, scenes } = runtime();
    state.setFlag('haeun_route_selected');
    state.setFlag('day3_caught_multiple_dates');
    state.setFlag('route_seoyeon');
    fixture.seed(state, 'Haeun', 99);
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_romance_check), 'day5_haeun_fallback');
    renderer.processSceneFlags(scenes.day5_haeun_fallback);
    assert.equal(state.getFlag('haeun_route_selected'), false);
    assert.equal(state.getFlag('route_seoyeon'), true);
    assert.equal(renderer.resolveNextScene(scenes.ending_start), 'day5_ending_mayhem');
    fixture.seed(state, 'Haeun', 100);
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_romance_check), 'day5_ending_haeun');
    state.setFlag('isDating_Seoyeon');
    renderer.processSceneFlags(scenes.day5_ending_haeun);
    assert.equal(state.getFlag('isDating_Haeun'), true);
    assert.equal(state.getFlag('isDating_Seoyeon'), false);
    assert.equal(state.getFlag('ending_perfect'), true);
});
test('the best path has a 110-point budget, stored cap 100, mostly personal conversation', async () => {
    const { context, state, scenes } = runtime();
    const personal = ['haeun_freetalk', 'day4_haeun_personal', 'day5_haeun_personal', 'day5_haeun_private_1', 'day5_haeun_private_2'];
    assert.equal(personal.reduce((n, id) => n + scenes[id].maxTurns, 0), 25);
    let raw = 0;
    for (let turn = 0; turn < 33; turn++) {
        if (turn === 20) { await fixture.award(state, 'Haeun', 20); raw += 20; }
        const gain = context.window.CupidFreeTalkCore.normalizeStoryFreeTalkAffinityChange(5, state.getAffinity('Haeun'));
        raw += gain;
        await fixture.award(state, 'Haeun', gain);
    }
    assert.equal(raw, 110);
    assert.equal(state.getAffinity('Haeun'), 100);
    fixture.seed(state, 'Haeun', 45);
    await fixture.award(state, 'Haeun', 20);
    for (let turn = 0; turn < 13; turn++) await fixture.award(state, 'Haeun', context.window.CupidFreeTalkCore.normalizeStoryFreeTalkAffinityChange(5, state.getAffinity('Haeun')));
    assert.equal(state.getAffinity('Haeun'), 100);
    for (const id of personal) assert.equal(scenes[id].stats, undefined);
});
test('all seven locales have Haeun route copy, four existing expressions and gallery prompt cache isolation', async () => {
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

test('switch groups preserve senior addresses and keep live relationship facts beyond the cache boundary', async () => {
    const { context, state, scenes, renderer } = runtime();
    const p=context.window.FreeTalkSystem.prototype;
    for (const lang of languages) for (const character of ['Seoyeon','Yuna','Dain','Teacher','Nurse']) {
        const id=`day5_haeun_switch_${character.toLowerCase()}_group_talk`;
        const copy=JSON.parse(read(`assets/js/i18n/${lang}/day5_3_afterschool.json`));
        const scene={...scenes[id],...copy[id]};
        fixture.seed(state, 'Haeun', 45);fixture.seed(state, character, 80);
        await fixture.scene(context, state, renderer, scenes, scenes[`day5_haeun_leave_${character.toLowerCase()}`]);
        assert.equal(state.getAffinity('Haeun'),65);assert.equal(state.getAffinity(character),50);
        assert.equal(scene.maxTurns,3);assert.equal(scene.haeunRomance,true);
        const talk={stateManager:state,getGameContext:()=>'',_getLocalizedGroupCharacterName:p._getLocalizedGroupCharacterName,_getLocalizedGroupLocation:p._getLocalizedGroupLocation,_getGroupChoiceState:p._getGroupChoiceState};
        talk.groupParticipants=p._resolveGroupParticipants.call(talk,scene,lang);
        const first=p._buildCurrentGroupSystemPrompt.call(talk,scene,lang);
        fixture.seed(state, 'Haeun', 68);fixture.seed(state, character, 47);
        const second=p._buildCurrentGroupSystemPrompt.call(talk,scene,lang);
        assert.equal(first.split('===CACHE_BOUNDARY===')[0],second.split('===CACHE_BOUNDARY===')[0]);
        assert.notEqual(first.split('===CACHE_BOUNDARY===')[1],second.split('===CACHE_BOUNDARY===')[1]);
        assert.ok(first.split('===CACHE_BOUNDARY===')[1].includes(scene.groupChoiceState));
        if(lang==='ko') for(const name of ['서연','유나','다인']) assert.ok(first.includes(name+' 선배'));
    }
    for(const file of fs.readdirSync(path.join(root,'assets/js/i18n/ko')).filter(f=>f.endsWith('.json'))) {
        for(const [id,value] of Object.entries(JSON.parse(read('assets/js/i18n/ko/'+file)))) {
            if(value.name!=='하은')continue;
            const spoken=(value.text||'').split('*').filter((_,i)=>i%2===0).join(' ');
            assert.doesNotMatch(spoken,/(서연|유나|다인)(?!\s*선배)/,id);
        }
    }
});

test('Haeun ending has one native square CG registered in every locale', async () => {
    const {context,scenes}=runtime();
    const id='ending_perfect_haeun';
    assert.equal(scenes.day5_ending_haeun.background,`assets/images/background/${id}.png`);
    assert.equal(scenes.day5_ending_haeun.character,null);
    assert.equal(context.window.GalleryData.PERFECT_CG_BY_CHARACTER.haeun,id);
    const png=readPlainMedia(path.join(root,`assets/images/background/${id}.png`));
    assert.equal(png.readUInt32BE(16),2880);assert.equal(png.readUInt32BE(20),2880);
    for(const lang of languages)assert.equal(context.window.GalleryData.cg[lang].filter(cg=>cg.id===id).length,1);
});
