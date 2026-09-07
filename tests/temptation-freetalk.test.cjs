const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const runtime = { window: {}, console, setTimeout, clearTimeout };
vm.createContext(runtime);
for (const file of ['assets/js/freetalk-core.js', 'assets/js/example-dialogues-ko.js', 'assets/js/prompts.js', 'assets/js/modules/StateManager.js', 'assets/js/modules/FreeTalkSystem.js', 'assets/js/scenario/day4_4_night.js']) {
    vm.runInContext(read(file), runtime, { filename: file });
}
const core = runtime.window.CupidFreeTalkCore;
const prototype = runtime.window.FreeTalkSystem.prototype;
const characters = ['Seoyeon', 'Yuna', 'Dain'];
const languages = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'];

test('only the three five-turn interludes use dialogue affinity 100; stored scores and other scenes remain independent', () => {
    for (const character of characters) {
        const id = `day4_temptation_${character.toLowerCase()}_freetalk`;
        const scene = { ...runtime.SCENARIO[4][id], name: character };
        assert.equal(scene.maxTurns, 5);
        for (const affinity of [-100, 0, 8, 90, 100]) {
            const stateManager = { stats: { [character]: { affinity } }, getAffinity: () => affinity };
            const context = { charNameMap: {}, stateManager };
            const policy = prototype._getSceneDialoguePolicy.call(context, scene, id);
            assert.equal(policy.affinity, 100);
            assert.equal(policy.actualAffinity, affinity);
            assert.equal(policy.romanticInterlude, true);
            assert.equal(stateManager.stats[character].affinity, affinity, 'reading the dialogue policy must not overwrite the stored score');
            for (const otherId of ['wall_seo_freetalk', 'morning5_counteroffer_group_talk', 'day5_seo_ending_freetalk_perfect', 'gallery', '']) {
                const normal = prototype._getSceneDialoguePolicy.call(context, scene, otherId);
                assert.equal(normal.affinity, affinity);
                assert.equal(normal.romanticInterlude, false);
            }
            assert.equal(prototype._getSceneDialoguePolicy.call(context, { ...scene, romanticInterlude: false }, id).romanticInterlude, false);
            assert.equal(prototype._getSceneDialoguePolicy.call(context, { ...scene, name: 'Teacher' }, id).romanticInterlude, false);
        }
    }
});

test('interludes score positive and negative turns using real point caps while keeping dialogue affinity 100', () => {
    for (const character of characters) {
        const id = `day4_temptation_${character.toLowerCase()}_freetalk`;
        const scene = runtime.SCENARIO[4][id];
        assert.equal(scene.affinityLocked, false);
        const stateManager = new runtime.window.StateManager();
        const context = Object.assign(Object.create(prototype), {
            currentSceneId: id, charNameMap: {}, stateManager,
            uiManager: { showAffinityChange() {} },
            galleryManager: { updateMaxAffinity() {}, checkAffinityUnlock() {} }
        });
        stateManager.stats[character].affinity = 0;
        for (let turn = 1; turn <= 5; turn++) {
            assert.equal(context.applyAffinity(5, scene, '손을 잡아도 돼?').change, 3);
            assert.equal(stateManager.getAffinity(character), turn * 3);
            assert.equal(context._getSceneDialoguePolicy(scene).affinity, 100);
        }
        assert.equal(context.applyAffinity(-4, scene).change, -4);
        assert.equal(stateManager.getAffinity(character), 11);
        assert.equal(context._getSceneDialoguePolicy(scene).affinity, 100);
        stateManager.stats[character].affinity = 89;
        assert.equal(context.applyAffinity(5, scene).change, 3);
        assert.equal(context.applyAffinity(5, scene).change, 2);
        assert.equal(stateManager.getAffinity(character), 94);
        stateManager.stats[character].affinity = 99;
        assert.equal(context.applyAffinity(50, scene).change, 1);
        assert.equal(context.applyAffinity(5, scene).change, 0);
        stateManager.stats[character].affinity = -99;
        assert.equal(context.applyAffinity(-50, scene).change, -1);
        assert.equal(context.applyAffinity(5, scene, '손을 잡아도 돼?').change, 3);
        assert.equal(stateManager.getAffinity(character), -97);
        const saved = stateManager.exportState();
        const restored = new runtime.window.StateManager();
        restored.importState(saved);
        assert.equal(restored.getAffinity(character), -97);
        const ending = { ...scene, affinityLocked: true };
        assert.equal(context.applyAffinity(5, ending).change, 0);
        assert.equal(context.applyAffinity(-50, ending).change, 0);
        context.currentSceneId = 'wall_seo_freetalk';
        const normal = { name: character, type: 'free_talk' };
        assert.equal(context._getSceneDialoguePolicy(normal).affinity, -97);
        assert.equal(context.applyAffinity(5, normal, '손을 잡아도 돼?').change, 0);
    }
});

test('every interlude preserves its CG and localized character voice with a separate stable cache prefix', () => {
    for (const lang of languages) {
        const copy = JSON.parse(read(`assets/js/i18n/${lang}/day4_4_night.json`));
        for (const character of characters) {
            const id = `day4_temptation_${character.toLowerCase()}_freetalk`;
            const scene = runtime.SCENARIO[4][id];
            assert.equal(scene.background, `assets/images/background/event_temptation_${character.toLowerCase()}.png`);
            assert.equal(scene.character, null);
            assert.equal(scene.next, 'day4_temptation_return_home');
            assert.ok(copy[id].name && copy[id].text && copy[id].context && copy[id].personality);
            const params = { lang, sceneName: character, displayName: copy[id].name,
                locationName: scene.locationKey, context: copy[id].context, extraGuideline: copy[id].personality,
                affinity: 100, affinityLocked: false, romanticInterlude: true,
                promptData: runtime.window.getPromptData(lang, 'Player'), playerName: 'Player', knowsName: true, isRemote: false };
            const prompt = runtime.window.buildSystemPrompt(params);
            const variant = runtime.window.buildSystemPrompt({ ...params, playerName: 'Other', context: 'Changed current scene', gameContext: 'Different saved memories' });
            assert.equal(prompt.split(core.CACHE_BOUNDARY_MARKER).length, 2);
            assert.equal(core.getStablePromptFingerprint(prompt), core.getStablePromptFingerprint(variant));
            const normal = runtime.window.buildSystemPrompt({ ...params, affinity: 0, romanticInterlude: false, affinityLocked: false });
            assert.notEqual(core.getStablePromptFingerprint(prompt), core.getStablePromptFingerprint(normal));
            const [stable, dynamic] = prompt.split(core.CACHE_BOUNDARY_MARKER);
            assert.ok(stable.includes(runtime.window.buildCupidTemptationRomanceGuidance(lang)));
            assert.ok(dynamic.includes('100'));
            assert.ok(dynamic.includes(copy[id].personality));
            assert.ok(!stable.includes(copy[id].context));
            assert.ok(!prompt.includes('This after-ending conversation'));
            assert.ok(!prompt.includes('엔딩 후 대화에서는'));
            assert.ok(prompt.includes(core.buildAffinityChangeGuidance(lang)));
            assert.ok(!prompt.includes('This interlude does not change affinity.'));
            assert.ok(!prompt.includes('이 장면 대화는 호감도를 바꾸지 않습니다.'));
            prototype.applyExpression.call({}, 'happy', scene);
            assert.equal(prototype.processExpressionTags.call({}, '[EXPRESSION:happy]Hello', scene), 'Hello');
        }
    }
});
