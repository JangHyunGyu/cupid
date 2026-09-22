'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const characters = ['Seoyeon', 'Yuna', 'Dain', 'Teacher', 'Nurse'];
const languages = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'];
function runtime(random = 0) {
    const context = { window: {}, console, setTimeout, clearTimeout, CHAR_NAME_MAP: {},
        Math: Object.assign(Object.create(Math), { random: () => random }),
        document: { createElement: () => ({ toDataURL: () => '' }) } };
    vm.createContext(context);
    for (const file of ['freetalk-core.js', 'example-dialogues-ko.js', 'prompts.js', 'modules/StateManager.js',
        'modules/SceneRenderer.js', 'modules/FreeTalkSystem.js', 'scenario/day3_3_afterschool.js', 'scenario/day5_1_morning.js', 'scenario/day5_2_lunch.js']) {
        vm.runInContext(read(`assets/js/${file}`), context, { filename: file });
    }
    const state = new context.window.StateManager();
    const renderer = new context.window.SceneRenderer(state, { updateMaxAffinity() {}, checkAffinityUnlock() {} }, { showAffinityChange() {} });
    return { context, state, renderer, scenes: context.SCENARIO[5], core: context.window.CupidFreeTalkCore };
}

test('Haeun uses negative / 0–7 / 8+ trust in both conversations and the festival', () => {
    const { context, state, renderer, scenes } = runtime();
    for (const [score, day3, day5] of [[-100, 'low', 'select_concern'], [-20, 'low', 'select_concern'], [-1, 'low', 'select_concern'],
        [0, 'neutral', 'resume'], [7, 'neutral', 'resume'], [8, 'high', 'select_rival'], [15, 'high', 'select_rival']]) {
        state.stats.Haeun.affinity = score;
        assert.equal(renderer.resolveNextScene(context.SCENARIO[3].haeun_affinity_check), `haeun_affinity_${day3}_1`);
        assert.equal(renderer.resolveNextScene(scenes.day5_haeun_trust_check), `day5_haeun_${day5}`);
    }
    for (const id of ['morning5_end', 'morning5_committed_end']) assert.equal(scenes[id].next, 'day5_haeun_gate');
    state.setFlag('day5_haeun_event_done');
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_gate), 'day5_haeun_resume');
});

test('highest affinity is selected from all five; tied selection survives penalties and save/load', () => {
    for (const selected of characters) {
        const { state, renderer, scenes } = runtime();
        state.stats[selected].affinity = 70;
        renderer.resolveNextScene(scenes.day5_haeun_select_rival);
        assert.equal(state.getFlag('day5_haeun_rival'), selected);
    }
    for (const [random, selected] of [[0, 'Yuna'], [0.999, 'Nurse']]) {
        const { context, state, renderer, scenes } = runtime(random);
        state.stats.Yuna.affinity = state.stats.Nurse.affinity = 80;
        renderer.resolveNextScene(scenes.day5_haeun_select_rival);
        assert.equal(state.getFlag('day5_haeun_rival'), selected);
        state.changeAffinity(selected, -20);
        const restored = new context.window.StateManager();
        restored.importState(JSON.parse(JSON.stringify(state.exportState())));
        renderer.stateManager = restored;
        assert.equal(renderer.resolveNextScene(scenes.day5_haeun_arrival_router), `day5_haeun_${selected.toLowerCase()}_arrival`);
        assert.equal(renderer.resolveNextScene(scenes.day5_haeun_concern_router), `day5_haeun_concern_${selected.toLowerCase()}_check`);
    }
});

test('both events deduct 15 or 20 before five group turns and cannot increase the romance route ceiling', () => {
    for (const mode of ['', 'concern_']) for (const character of characters) for (const [suffix, loss] of [['', 15], ['_delay', 20]]) {
        const { state, renderer, scenes, core, context } = runtime();
        const prefix = `day5_haeun_${mode}${character.toLowerCase()}`;
        const entry = scenes[`${prefix}_escalation${suffix}`];
        const group = scenes[entry.next];
        state.stats[character].affinity = 80;
        renderer.processSceneStats(entry);
        assert.equal(state.getAffinity(character), 80 - loss);
        assert.equal(group.maxTurns, 5);
        const prototype = context.window.FreeTalkSystem.prototype;
        const participants = prototype._resolveGroupParticipants.call({ _getLocalizedGroupCharacterName: prototype._getLocalizedGroupCharacterName }, group, 'ko');
        assert.deepEqual(Array.from(participants, participant => participant.id), [character, 'Haeun']);
        assert.equal(participants[1].name, '하은');
        for (let turn = 0; turn < group.maxTurns; turn++) state.changeAffinity(character, core.normalizeStoryFreeTalkAffinityChange(5, state.getAffinity(character)));
        assert.ok(state.getAffinity(character) <= 80);
        assert.ok(group.maxTurns * 3 - loss <= 0);
        assert.equal(group.next, mode ? 'day5_haeun_low_intro' : 'day5_haeun_finish');
    }
});

test('every visible new scene has seven-language copy, valid choices and existing images', () => {
    const { scenes } = runtime();
    const added = Object.entries(scenes).filter(([id]) => id.startsWith('day5_haeun_'));
    for (const lang of languages) {
        const copy = JSON.parse(read(`assets/js/i18n/${lang}/day5_2_lunch.json`));
        for (const [id, scene] of added) {
            if (!scene.routeBeforeRender) {
                assert.ok(copy[id]?.name && copy[id]?.text, `${lang}/${id}`);
                if (scene.choices) assert.equal(copy[id].choices.length, scene.choices.length);
            }
            if (scene.type === 'group_free_talk') {
                for (const field of ['context', 'personality', 'groupLocation']) assert.ok(copy[id][field], `${lang}/${id}/${field}`);
                assert.ok(copy[id].groupChoiceState.open && copy[id].groupChoiceState.delay);
            }
            for (const asset of [scene.character, scene.background].filter(Boolean)) assert.ok(fs.existsSync(path.join(root, asset)), asset);
        }
    }
});

test('all ten localized group prompts isolate live scores, choices and real Haeun evidence from stable cache prefixes', () => {
    const { context, state, scenes, core } = runtime();
    const prototype = context.window.FreeTalkSystem.prototype;
    for (const lang of languages) for (const mode of ['', 'concern_']) for (const id of characters) {
        const key = `day5_haeun_${mode}${id.toLowerCase()}_group_talk`;
        const copy = JSON.parse(read(`assets/js/i18n/${lang}/day5_2_lunch.json`));
        const scene = { ...scenes[key], ...copy[key] };
        const talk = { stateManager: state, getGameContext: () => '', _getLocalizedGroupCharacterName: prototype._getLocalizedGroupCharacterName,
            _getGroupChoiceState: prototype._getGroupChoiceState, _getLocalizedGroupLocation: prototype._getLocalizedGroupLocation };
        talk.groupParticipants = prototype._resolveGroupParticipants.call(talk, scene, lang);
        state.stats[id].affinity = 65;
        state.flags.day5_haeun_delayed_explanation = false;
        state.setChatMemory('Haeun', [{ role: 'user', content: 'ACTUAL_HAEUN_EVIDENCE_1' }, { role: 'assistant', content: 'ACTUAL_HAEUN_REPLY_1' }]);
        const first = prototype._buildCurrentGroupSystemPrompt.call(talk, scene, lang);
        state.stats[id].affinity = 60;
        state.flags.day5_haeun_delayed_explanation = true;
        state.setChatMemory('Haeun', [{ role: 'user', content: 'ACTUAL_HAEUN_EVIDENCE_2' }]);
        const second = prototype._buildCurrentGroupSystemPrompt.call(talk, scene, lang);
        const [stable, dynamic] = first.split('===CACHE_BOUNDARY===');
        assert.equal(first.split('===CACHE_BOUNDARY===').length, 2);
        assert.equal(stable, second.split('===CACHE_BOUNDARY===')[0]);
        assert.equal(core.getStablePromptFingerprint(first), core.getStablePromptFingerprint(second));
        assert.ok(dynamic.includes(scene.context));
        assert.ok(dynamic.includes(scene.groupChoiceState.open));
        assert.ok(second.includes(scene.groupChoiceState.delay));
        assert.ok(!stable.includes('ACTUAL_HAEUN'));
        if (mode) {
            assert.ok(dynamic.includes('ACTUAL_HAEUN_EVIDENCE_1'));
            assert.ok(second.includes('ACTUAL_HAEUN_EVIDENCE_2'));
            state.setChatMemory('Haeun', []);
            assert.ok(!prototype._buildCurrentGroupSystemPrompt.call(talk, scene, lang).includes('ACTUAL_HAEUN'));
        }
        if (lang === 'ko') {
            assert.ok(stable.includes('하은은 주인공과 선배, 교직원에게 존댓말을 유지'));
            assert.ok(!stable.includes('누구에게나 반말만 씁니다'));
        }
        const changed = prototype._buildCurrentGroupSystemPrompt.call({ ...talk, groupParticipants: [...talk.groupParticipants].reverse() }, scene, lang);
        assert.notEqual(core.getStablePromptFingerprint(first), core.getStablePromptFingerprint(changed));
    }
});
