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
        'modules/SceneRenderer.js', 'modules/FreeTalkSystem.js', 'scenario/day3_3_afterschool.js', 'scenario/day4_1_morning.js', 'scenario/day5_1_morning.js', 'scenario/day5_2_lunch.js']) {
        vm.runInContext(read(`assets/js/${file}`), context, { filename: file });
    }
    const state = new context.window.StateManager();
    const renderer = new context.window.SceneRenderer(state, { updateMaxAffinity() {}, checkAffinityUnlock() {} }, { showAffinityChange() {} });
    return { context, state, renderer, scenes: { ...context.SCENARIO[4], ...context.SCENARIO[5] }, core: context.window.CupidFreeTalkCore };
}

test('Haeun uses negative / 0–7 / 8+ trust in both conversations and the festival', () => {
    const { context, state, renderer, scenes } = runtime();
    for (const [score, day3, day5] of [[-100, 'low', 'low_intro'], [-20, 'low', 'low_intro'], [-1, 'low', 'low_intro'],
        [0, 'neutral', 'resume'], [7, 'neutral', 'resume'], [8, 'high', 'select_rival'], [15, 'high', 'select_rival']]) {
        state.stats.Haeun.affinity = score;
        assert.equal(renderer.resolveNextScene(context.SCENARIO[3].haeun_affinity_check), `haeun_affinity_${day3}_1`);
        assert.equal(renderer.resolveNextScene(scenes.day5_haeun_trust_check), `day5_haeun_${day5}`);
        assert.equal(renderer.resolveNextScene(scenes.day4_haeun_trust_check), score < 0 ? 'day4_haeun_approach' : 'day4_haeun_personal_gate');
    }
    for (const id of ['morning5_end', 'morning5_committed_end']) assert.equal(scenes[id].next, 'day5_haeun_gate');
    state.setFlag('day5_haeun_event_done');
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_gate), 'day5_haeun_resume');
    state.setFlag('day4_haeun_event_done');
    assert.equal(renderer.resolveNextScene(scenes.day4_haeun_gate), 'morning4_end');
    for (const id of ['hidden_nurse_d4_freetalk', 'hidden_nurse_d4_low', 'hidden_nurse_d4_neg']) {
        assert.equal(scenes[id].next, 'day4_haeun_gate');
    }
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

test('Day 4 selection persists independently while Day 5 can choose a new highest-affinity character', () => {
    const { context, state, renderer, scenes } = runtime(0.999);
    state.stats.Yuna.affinity = state.stats.Nurse.affinity = 80;
    renderer.resolveNextScene(scenes.day4_haeun_select_concern);
    assert.equal(state.getFlag('day4_haeun_rival'), 'Nurse');
    state.changeAffinity('Nurse', -20);
    const restored = new context.window.StateManager();
    restored.importState(JSON.parse(JSON.stringify(state.exportState())));
    renderer.stateManager = restored;
    assert.equal(renderer.resolveNextScene(scenes.day4_haeun_concern_router), 'day4_haeun_concern_nurse_check');
    renderer.processSceneFlags(scenes.day4_haeun_finish);
    assert.equal(renderer.resolveNextScene(scenes.day4_haeun_gate), 'morning4_end');
    restored.stats.Haeun.affinity = 8;
    assert.equal(renderer.resolveNextScene(scenes.day5_haeun_trust_check), 'day5_haeun_select_rival');
    renderer.resolveNextScene(scenes.day5_haeun_select_rival);
    assert.equal(restored.getFlag('day5_haeun_rival'), 'Yuna');
    assert.equal(restored.getFlag('day4_haeun_rival'), 'Nurse');
    assert.equal(scenes.day5_haeun_select_concern.runtimeEntrypoint, true);
});

test('new and legacy events deduct 15 or 20 before five group turns without increasing the romance route ceiling', () => {
    for (const [day, mode] of [[5, ''], [5, 'concern_'], [4, 'concern_']]) for (const character of characters) for (const [suffix, loss] of [['', 15], ['_delay', 20]]) {
        const { state, renderer, scenes, core, context } = runtime();
        const prefix = `day${day}_haeun_${mode}${character.toLowerCase()}`;
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
        assert.equal(group.next, day === 4 ? 'day4_haeun_finish' : mode ? 'day5_haeun_low_intro' : 'day5_haeun_finish');
    }
});

test('every visible new scene has seven-language copy, valid choices and existing images', () => {
    const { scenes } = runtime();
    const added = Object.entries(scenes).filter(([id]) => /^day[45]_haeun_/.test(id));
    for (const lang of languages) {
        const copy = { ...JSON.parse(read(`assets/js/i18n/${lang}/day4_1_morning.json`)), ...JSON.parse(read(`assets/js/i18n/${lang}/day5_2_lunch.json`)) };
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

test('Haeun CGs use square lossless crops, retain original masters and register gallery assets in every language', () => {
    const { context, scenes } = runtime();
    vm.runInContext(read('assets/js/gallery-data.js'), context);
    const config = read('assets/js/modules/config.js');
    const registered = vm.runInNewContext(config.match(/const REGISTERED_CG_IDS = new Set\((\[[\s\S]*?\])\);/)[1]);
    for (const [id, sceneId, preceding, next] of [
        ['event_haeun_trust', 'day5_haeun_trust_cg', 'day5_haeun_defends', 'day5_haeun_escalation_router'],
        ['event_haeun_reputation', 'day4_haeun_reputation_cg', 'day4_haeun_concern_clarify', 'day4_haeun_concern_router']
    ]) {
        const scene = scenes[sceneId];
        assert.equal(scenes[preceding].next, sceneId);
        assert.equal(scene.next, next);
        assert.equal(scene.character, null);
        assert.equal(scene.stats, undefined);
        assert.equal(scene.background, `assets/images/background/${id}.png`);
        assert.ok(registered.includes(id));
        const png = fs.readFileSync(path.join(root, scene.background));
        assert.equal(png.subarray(1,4).toString(), 'PNG');
        const width = png.readUInt32BE(16), height = png.readUInt32BE(20);
        assert.equal(width, height);
        assert.ok(height >= 2160);
        const master = fs.readFileSync(path.join(root, `assets/images/masters/${id}_landscape.png`));
        assert.ok(master.readUInt32BE(16) >= 3840);
        assert.equal(master.readUInt32BE(20), height, 'side cropping must preserve native height without resizing');
        assert.ok(master.readUInt32BE(16) > width);
        assert.ok(png.length < 25 * 1024 * 1024);
        const webp = fs.readFileSync(path.join(root, scene.background.replace('.png', '.webp')));
        assert.equal(webp.subarray(8,12).toString(), 'WEBP');
        assert.ok(webp.length < 25 * 1024 * 1024);
        let dimensions = null;
        for (let offset = 12; offset + 8 <= webp.length;) {
            const size = webp.readUInt32LE(offset + 4);
            if (webp.subarray(offset, offset + 4).toString() === 'VP8L') {
                assert.equal(webp[offset + 8], 0x2f);
                const packed = webp.readUInt32LE(offset + 9);
                dimensions = [(packed & 0x3fff) + 1, ((packed >>> 14) & 0x3fff) + 1];
                break;
            }
            offset += 8 + size + (size % 2);
        }
        assert.deepEqual(dimensions, [width, height], 'lossless WebP must preserve the PNG master dimensions');
        for (const lang of languages) {
            const items = context.window.GalleryData.getCGList(lang).filter(cg => cg.id === id);
            assert.equal(items.length, 1, `${lang}/${id}`);
            const cg = items[0];
            assert.equal(cg.file, scene.background);
            assert.equal(cg.thumbnail, scene.background.replace('.png', '.webp'));
            for (const field of ['name','character','description','unlockHint']) assert.ok(cg[field]?.trim(), `${lang}/${id}/${field}`);
        }
    }
});

test('all new and legacy localized group prompts isolate scores, choices and real evidence from stable cache prefixes', () => {
    const { context, state, scenes, core } = runtime();
    const prototype = context.window.FreeTalkSystem.prototype;
    for (const lang of languages) for (const [day, mode] of [[5, ''], [5, 'concern_'], [4, 'concern_']]) for (const id of characters) {
        const key = `day${day}_haeun_${mode}${id.toLowerCase()}_group_talk`;
        const copy = JSON.parse(read(`assets/js/i18n/${lang}/${day === 4 ? 'day4_1_morning' : 'day5_2_lunch'}.json`));
        const scene = { ...scenes[key], ...copy[key] };
        const talk = { stateManager: state, getGameContext: () => '', _getLocalizedGroupCharacterName: prototype._getLocalizedGroupCharacterName,
            _getGroupChoiceState: prototype._getGroupChoiceState, _getLocalizedGroupLocation: prototype._getLocalizedGroupLocation };
        talk.groupParticipants = prototype._resolveGroupParticipants.call(talk, scene, lang);
        state.stats[id].affinity = 65;
        state.flags[scene.groupChoiceFlag || 'day5_haeun_delayed_explanation'] = false;
        state.setChatMemory('Haeun', [{ role: 'user', content: 'ACTUAL_HAEUN_EVIDENCE_1' }, { role: 'assistant', content: 'ACTUAL_HAEUN_REPLY_1' }]);
        const first = prototype._buildCurrentGroupSystemPrompt.call(talk, scene, lang);
        state.stats[id].affinity = 60;
        state.flags[scene.groupChoiceFlag || 'day5_haeun_delayed_explanation'] = true;
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
