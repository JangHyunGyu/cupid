const { resolveAssetSource } = require('../scripts/character-assets.cjs');
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
const languages = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt', 'zh'];
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
test('the best path has a 172-point budget (33 turns x3, +24 pre-gate and +21 post-gate completion bonuses, +20 declaration, +8 stage choices), stored cap 100, mostly personal conversation', async () => {
    const { context, state, scenes } = runtime();
    const FreeTalk = context.window.FreeTalkSystem;
    const personal = ['haeun_freetalk', 'day4_haeun_personal', 'day5_haeun_personal', 'day5_haeun_private_1', 'day5_haeun_private_2'];
    const preGatePersonal = Array.from(FreeTalk.HAEUN_PRE_GATE_PERSONAL_SCENE_IDS);
    const postGatePersonal = Array.from(FreeTalk.HAEUN_POST_GATE_PERSONAL_SCENE_IDS);
    const preBonus = FreeTalk.HAEUN_PRE_GATE_COMPLETION_BONUS;
    const postBonus = FreeTalk.HAEUN_POST_GATE_COMPLETION_BONUS;
    assert.deepEqual(preGatePersonal, ['haeun_freetalk', 'day4_haeun_personal', 'day5_haeun_personal']);
    assert.deepEqual(postGatePersonal, ['day5_haeun_private_1', 'day5_haeun_private_2']);
    assert.equal(preBonus, 6);
    assert.equal(postBonus, 7);
    assert.deepEqual({ ...FreeTalk.HAEUN_COMPLETION_BONUS_GROUP_MODES }, { haeun_misunderstanding: 6, haeun_switch: 7 });
    assert.equal(personal.reduce((n, id) => n + scenes[id].maxTurns, 0), 25);
    // Every Haeun conversation on the best route carries a bonus; the off-route reputation groups do not.
    const rivals = ['seoyeon', 'yuna', 'dain', 'teacher', 'nurse'];
    for (const rival of rivals) {
        assert.equal(FreeTalk.getHaeunCompletionBonusAmount(scenes[`day5_haeun_${rival}_group_talk`], `day5_haeun_${rival}_group_talk`), preBonus);
        assert.equal(FreeTalk.getHaeunCompletionBonusAmount(scenes[`day5_haeun_switch_${rival}_group_talk`], `day5_haeun_switch_${rival}_group_talk`), postBonus);
        assert.equal(FreeTalk.getHaeunCompletionBonusAmount(scenes[`day4_haeun_concern_${rival}_group_talk`], `day4_haeun_concern_${rival}_group_talk`), 0);
    }
    for (const [id, scene] of Object.entries(scenes)) {
        const amount = FreeTalk.getHaeunCompletionBonusAmount(scene, id);
        if (!amount) continue;
        const onRoute = personal.includes(id) || /^day5_haeun_(?:switch_)?(?:seoyeon|yuna|dain|teacher|nurse)_group_talk$/.test(id);
        assert.ok(onRoute, `${id} must not carry a Haeun completion bonus`);
    }
    let raw = 0;
    const stageBest = ['haeun_cheer_choice', 'day4_haeun_notice_choice', 'day5_haeun_waver_choice', 'day5_haeun_guilt_choice']
        .reduce((sum, id) => sum + Math.max(...scenes[id].choices.map(c => Number(c.stats.Haeun.affinity))), 0);
    assert.equal(stageBest, 8);
    await fixture.award(state, 'Haeun', stageBest); raw += stageBest;
    const p = FreeTalk.prototype;
    const makeTalk = (id, scene, turns) => ({
        stateManager: state,
        charNameMap: { Haeun: 'Haeun' },
        currentSceneId: id,
        currentMaxTurns: scene.maxTurns,
        freeTalkTurns: turns,
        uiManager: { showAffinityChange() {} },
        galleryManager: { updateMaxAffinity() {}, checkAffinityUnlock() {} },
        _applyHaeunCompletionBonus: p._applyHaeunCompletionBonus
    });
    const bonusScenes = [
        ...preGatePersonal.map(id => [id, { ...scenes[id], name: 'Haeun' }, preBonus]),
        ['day5_haeun_seoyeon_group_talk', scenes.day5_haeun_seoyeon_group_talk, preBonus],
        ['day5_haeun_switch_seoyeon_group_talk', scenes.day5_haeun_switch_seoyeon_group_talk, postBonus],
        ...postGatePersonal.map(id => [id, { ...scenes[id], name: 'Haeun' }, postBonus])
    ];
    assert.equal(bonusScenes.length, 7);
    for (const [id, scene, expected] of bonusScenes) {
        fixture.seed(state, 'Haeun', 10);
        const talk = makeTalk(id, scene, scene.maxTurns - 1);
        const early = await state.commitProgressEvent(`talk:${id}:${scene.maxTurns - 2}`, function commitTurn() {
            return talk._applyHaeunCompletionBonus(scene, id);
        });
        assert.equal(early.applied, true, `${id} early commit ran`);
        assert.equal(early.value.bonus, 0, `${id} must not grant completion bonus before final turn`);
        talk.freeTalkTurns = scene.maxTurns;
        const outOfRange = await state.commitProgressEvent(`talk:${id}:${scene.maxTurns}`, function commitTurn() {
            return talk._applyHaeunCompletionBonus(scene, id);
        });
        assert.equal(outOfRange.value.bonus, 0, `${id} ignores a turn index outside the scene`);
        const finalTurn = await state.commitProgressEvent(`talk:${id}:${scene.maxTurns - 1}`, function commitTurn() {
            return talk._applyHaeunCompletionBonus(scene, id);
        });
        assert.equal(finalTurn.value.bonus, expected, `${id} grants +${expected} on completing the final turn`);
        assert.equal(state.getAffinity('Haeun'), 10 + expected);
        assert.equal(state.getFlag(`completed_bonus_${id}`), true);
        raw += finalTurn.value.bonus;
        // A replayed scene reaches the final turn again under a fresh commit key; the flag still blocks it.
        const replay = await state.commitProgressEvent(`talk:${id}:0`, function commitTurn() {
            return talk._applyHaeunCompletionBonus(scene, id);
        });
        assert.equal(replay.applied, true, `${id} replay commit ran`);
        assert.equal(replay.value.bonus, 0, `${id} completion bonus never applies twice`);
        assert.equal(state.getAffinity('Haeun'), 10 + expected);
    }
    {
        const id = 'day5_haeun_private_1';
        const locked = { ...scenes[id], name: 'Haeun', affinityLocked: true };
        state.setFlag(`completed_bonus_${id}`, false);
        const talk = makeTalk(id, locked, locked.maxTurns);
        const result = await state.commitProgressEvent(`talk:${id}:1`, function commitTurn() {
            return talk._applyHaeunCompletionBonus(locked, id);
        });
        assert.equal(result.applied, true);
        assert.equal(result.value.bonus, 0, 'a locked scene never grants the bonus');
        state.setFlag(`completed_bonus_${id}`, true);
    }
    fixture.seed(state, 'Haeun', stageBest);
    for (let turn = 0; turn < 33; turn++) {
        if (turn === 20) { await fixture.award(state, 'Haeun', 20); raw += 20; }
        const gain = context.window.CupidFreeTalkCore.normalizeStoryFreeTalkAffinityChange(5, state.getAffinity('Haeun'));
        raw += gain;
        await fixture.award(state, 'Haeun', gain);
    }
    assert.equal(raw, 172);
    assert.equal(raw, 33 * 3 + 4 * preBonus + 3 * postBonus + 20 + stageBest, 'flat +3 per turn plus seven completion bonuses');
    assert.equal(state.getAffinity('Haeun'), 100);
    // Entering at exactly 45: the declaration and three post-gate bonuses leave 14 points for 13 turns,
    // so +1 on every turn ends one short and at least one better turn is needed.
    fixture.seed(state, 'Haeun', 45);
    await fixture.award(state, 'Haeun', 20);
    await fixture.award(state, 'Haeun', 3 * postBonus);
    assert.equal(state.getAffinity('Haeun'), 86);
    for (let turn = 0; turn < 13; turn++) await fixture.award(state, 'Haeun', 1);
    assert.equal(state.getAffinity('Haeun'), 99);
    await fixture.award(state, 'Haeun', 1);
    assert.equal(state.getAffinity('Haeun'), 100);
    for (const id of personal) assert.equal(scenes[id].stats, undefined);
});
test('a final reply shown as display fallback still completes the conversation; an empty reply does not', async () => {
    const { context, state, scenes } = runtime();
    const p = context.window.FreeTalkSystem.prototype;
    const cases = [
        ['haeun_freetalk', { empty: false, partial: true }, 6],
        ['day5_haeun_private_2', { empty: false, partial: true }, 7],
        ['day4_haeun_personal', { empty: true }, null],
        ['day5_haeun_private_1', null, 7]
    ];
    for (const [id, displayFallback, expected] of cases) {
        fixture.seed(state, 'Haeun', 50);
        const scene = { ...scenes[id], name: 'Haeun' };
        const talk = {
            stateManager: state,
            charNameMap: { Haeun: 'Haeun' },
            currentSceneId: id,
            currentMaxTurns: scene.maxTurns,
            freeTalkTurns: scene.maxTurns,
            uiManager: { showAffinityChange() {} },
            galleryManager: { updateMaxAffinity() {}, checkAffinityUnlock() {} },
            _applyHaeunCompletionBonus: p._applyHaeunCompletionBonus,
            _applyHaeunCompletionBonusAfterReply: p._applyHaeunCompletionBonusAfterReply
        };
        const result = await state.commitProgressEvent(`talk:${id}:${scene.maxTurns - 1}`, function commitTurn() {
            return talk._applyHaeunCompletionBonusAfterReply(scene, id, displayFallback);
        });
        if (expected === null) {
            assert.equal(result.value, null, `${id}: an empty reply grants nothing`);
            assert.equal(state.getAffinity('Haeun'), 50);
            assert.notEqual(state.getFlag(`completed_bonus_${id}`), true, `${id}: the scene can still be completed later`);
        } else {
            assert.equal(result.value.bonus, expected, `${id}: +${expected} with fallback ${JSON.stringify(displayFallback)}`);
            assert.equal(state.getAffinity('Haeun'), 50 + expected);
            assert.equal(state.getFlag(`completed_bonus_${id}`), true);
        }
    }
    const source = read('assets/js/modules/FreeTalkSystem.js');
    assert.equal((source.match(/this\._applyHaeunCompletionBonusAfterReply\(/g) || []).length, 2,
        'the personal and group commits both use the shared fallback rule');
});
test('all locales have Haeun route copy, registered expressions and gallery prompt cache isolation', async () => {
    const { context, scenes } = runtime();
    const Gallery = context.window.GalleryData;
    assert.equal(Gallery.resolveEndingId('day5_ending_haeun'), 'perfect_haeun');
    for (const lang of languages) {
        const copy = Object.assign({}, ...['day4_1_morning', 'day5_2_lunch', 'day5_3_afterschool'].map(f => JSON.parse(read(`assets/js/i18n/${lang}/${f}.json`))));
        for (const [id, scene] of Object.entries(scenes).filter(([id]) => /^day[45]_(?:haeun_|ending_haeun)/.test(id))) {
            if (!scene.routeBeforeRender) assert.ok(copy[id]?.text, `${lang}/${id}`);
        }
        assert.deepEqual(Array.from(Gallery.characters[lang].haeun.expressions).filter(e => !/_[0-9]{2}$/.test(e)), ['normal', 'worried', 'firm', 'relieved', 'shy', 'smile', 'sad', 'climax', 'soft_smile', 'dry_smile', 'bored', 'tired', 'very_shy', 'angry', 'flushed', 'laugh', 'pout', 'surprised', 'scared', 'aegyo', 'ahegao', 'fainted', 'dazed', 'disgusted', 'smirk', 'furious', 'confused', 'sob', 'scream', 'choking', 'dead', 'humiliated', 'dumbfounded', 'pleading', 'entranced', 'seductive', 'active', 'sweat', 'jealous', 'cold', 'suspicious', 'lovestruck', 'kiss', 'afterglow', 'enduring', 'oral_service', 'undressed_shy', 'dominant_aroused', 'messy_afterglow', 'begging_lust', 'betrayed', 'combat_ready', 'groggy', 'scheming', 'touched', 'sleeping', 'awkward', 'thinking', 'proud', 'obsessed', 'tipsy', 'secret_enduring', 'sensitive_shiver', 'hungry_lust', 'submissive_lust', 'conflicted_pleasure', 'overwhelmed_pleasure', 'breathless_kiss', 'cry', 'pain', 'exhausted']);
        for (const expression of Gallery.characters[lang].haeun.expressions) assert.ok(fs.existsSync(resolveAssetSource(root, `assets/images/characters/haeun_${expression}.webp`)));
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
        const talk={stateManager:state,getGameContext:()=>'',_getLocalizedGroupCharacterName:p._getLocalizedGroupCharacterName,_getLocalizedGroupLocation:p._getLocalizedGroupLocation,_getGroupChoiceState:p._getGroupChoiceState,_getHaeunStageGuidance:p._getHaeunStageGuidance,currentSceneId:id};
        talk.groupParticipants=p._resolveGroupParticipants.call(talk,scene,lang);
        const first=p._buildCurrentGroupSystemPrompt.call(talk,scene,lang);
        fixture.seed(state, 'Haeun', 68);fixture.seed(state, character, 47);
        const second=p._buildCurrentGroupSystemPrompt.call(talk,scene,lang);
        assert.equal(first.split('===CACHE_BOUNDARY===')[0],second.split('===CACHE_BOUNDARY===')[0]);
        assert.notEqual(first.split('===CACHE_BOUNDARY===')[1],second.split('===CACHE_BOUNDARY===')[1]);
        assert.ok(first.split('===CACHE_BOUNDARY===')[1].includes(scene.groupChoiceState));
        assert.ok(first.split('===CACHE_BOUNDARY===')[1].includes(lang === 'ko' ? '[하은의 현재 단계: 죄책감과 설렘]' : "Haeun's current stage") || lang !== 'ko' && /Haeun|夏恩|ハウン/.test(first.split('===CACHE_BOUNDARY===')[1]), 'stage guidance must live after the cache boundary');
        assert.ok(!first.split('===CACHE_BOUNDARY===')[0].includes(lang === 'ko' ? '하은의 현재 단계' : "Haeun's current stage"), 'stage guidance must not enter the stable prefix');
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
