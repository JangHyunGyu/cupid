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
            assert.ok(copy[id].name && copy[id].text && copy[id].precedingHistory && copy[id].context && copy[id].personality);
            assert.ok(copy[id].precedingHistory.includes({
                Seoyeon: { ko: '내 심장, 뛰는 거 느껴져', en: 'Can you feel my heart beating', ja: '私の心臓、打つの分かる', es: '¿Sientes cómo late mi corazón', fr: 'Tu sens mon cœur battre', de: 'Spürst du, wie mein Herz schlägt', pt: 'Dá para sentir meu coração batendo' },
                Yuna: { ko: '천 한 장도 사이에 두고 싶지 않아', en: 'scrap of cloth between us', ja: '布一枚もあいだに置きたくない', es: 'ni una tela entre nosotros', fr: 'même pas un tissu entre nous', de: 'nicht mal einen Stoff zwischen uns', pt: 'nem um pano entre a gente' },
                Dain: { ko: '유니폼 안으로 손 넣어 봐', en: 'Put your hand inside my jersey', ja: 'ユニフォームの中に手を入れて', es: 'Mete la mano dentro del uniforme', fr: 'Glisse ta main dans le maillot', de: 'Steck deine Hand ins Trikot', pt: 'Enfia a mão dentro da camisa' }
            }[character][lang]));
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
            assert.ok(stable.includes(runtime.window.buildCupidTemptationSceneCanonRule(lang)) === false);
            assert.ok(copy[id].context.includes({
                Seoyeon: { ko: '맨가슴', en: 'bare chest', ja: '裸の胸', es: 'pecho desnudo', fr: 'poitrine nue', de: 'nackte Brust', pt: 'peito nu' },
                Yuna: { ko: '목깃을 끌어내려', en: 'pulled her collar down', ja: '襟を引き下げ', es: 'bajó el cuello', fr: 'baissé son col', de: 'den Kragen heruntergezogen', pt: 'puxou a gola' },
                Dain: { ko: '유니폼 앞자락을 아래로 당긴', en: 'pulled the front of her jersey down', ja: 'ユニフォームの前を下に引っ張り', es: 'tiró hacia abajo la parte delantera', fr: 'tiré le devant de son maillot', de: 'die Vorderseite ihres Trikots nach unten gezogen', pt: 'puxou a frente da camisa para baixo' }
            }[character][lang]));
            assert.doesNotMatch(copy[id].text, /앉을래|sit beside me|Come sit with me|¿Te sientas a mi lado|Siéntate aquí|Ven, siéntate|Tu t’assieds à côté|Assieds-toi ici|Viens t’asseoir|Setzt du dich neben mich|Setz dich hierher|setz dich zu mir|Senta aqui do meu lado|Senta aqui\.|Vem sentar|隣に座ってくれる|こっちに座って|隣に来て/);
            assert.ok(dynamic.includes(copy[id].context));
            assert.ok(runtime.window.buildCupidTemptationRomanceGuidance(lang).includes({
                ko: '직전 대본에서 이미 일어난 접촉과 유혹 대사',
                en: 'preceding scripted scene are present facts',
                es: 'ya establecidos en la escena anterior son hechos presentes',
                ja: '直前の脚本ですでに起きた接触と誘惑の台詞',
                fr: 'déjà établis dans la scène écrite précédente sont des faits présents',
                de: 'bereits geschehene Kontakt und die Verführungsworte sind jetzt Tatsache',
                pt: 'já estabelecidos na cena anterior são fatos presentes'
            }[lang]));
            assert.ok(!runtime.window.buildCupidTemptationRomanceGuidance(lang).includes('비노골'));
            assert.ok(!runtime.window.buildCupidTemptationRomanceGuidance(lang).includes('non-graphic'));
            assert.ok(!runtime.window.buildCupidTemptationRomanceGuidance(lang).includes('성행위가 시작됐다고 단정하지는'));
            assert.ok(runtime.window.buildCupidTemptationRomanceGuidance(lang).includes({
                ko: '성적 스킨십에 매우 적극',
                en: 'highly proactive about sexual skinship',
                es: 'muy activo en el contacto sexual',
                ja: '性的なスキンシップにとても積極的',
                fr: 'très actif dans le contact sexuel',
                de: 'sexuell sehr initiativ',
                pt: 'muito ativa no contato sexual'
            }[lang]));
            assert.ok(stable.includes(runtime.window.buildCupidThirdPersonAdultCameraRule(lang)));
        }
    }
});

test('interlude post-history keeps the scripted contact after the agency hand-holding example', () => {
    const canon = runtime.window.buildCupidTemptationSceneCanonRule('ko');
    const post = core.buildPostHistoryGuidance([{ role: 'user', content: '가슴에 내 손' }], 'ko', {
        boundaryRule: runtime.window.buildCupidTemptationRomanceGuidance('ko'),
        sceneCanonRule: canon
    });
    const agencyAt = post.indexOf('손을 잡았다고 단정한 지문');
    const canonAt = post.indexOf('장면 맥락의 직전 접촉은 이미 일어난 사실');
    assert.ok(agencyAt >= 0);
    assert.ok(canonAt > agencyAt);
    assert.match(read('assets/js/modules/FreeTalkSystem.js'), /buildCupidTemptationSceneCanonRule/);
    assert.match(read('assets/js/freetalk-core.js'), /sceneCanonRule/);
    const fingerprintBase = 'stable prefix\n===CACHE_BOUNDARY===\nlive';
    assert.equal(
        core.getStablePromptFingerprint(core.appendDynamicContext(fingerprintBase, post)),
        core.getStablePromptFingerprint(fingerprintBase)
    );
});

test('scripted temptation contact is seeded into 1:1 history and kept as the tempter’s private night in group prompts', () => {
    for (const lang of languages) {
        const copy = JSON.parse(read(`assets/js/i18n/${lang}/day4_4_night.json`));
        for (const character of characters) {
            const id = `day4_temptation_${character.toLowerCase()}_freetalk`;
            const scene = { ...runtime.SCENARIO[4][id], ...copy[id] };
            const seeded = prototype._withTemptationSceneHistory([], scene);
            assert.equal(seeded[0].role, 'user');
            assert.equal(seeded[0].content, copy[id].precedingHistory);
            const reopened = prototype._withTemptationSceneHistory([
                { role: 'assistant', content: copy[id].text },
                { role: 'user', content: 'why' }
            ], scene);
            assert.equal(reopened.map(message => message.role).join(','), 'user,assistant,user');
            assert.equal(reopened[0].content, copy[id].precedingHistory);
            assert.equal(reopened[1].content, copy[id].text);
            assert.equal(prototype._withTemptationSceneHistory(reopened, scene).length, reopened.length);
            const checkpoint = prototype._getFreeTalkCheckpoint.call(
                { stateManager: { freeTalkCheckpoint: null, getFlag: () => false } },
                scene,
                id,
                [...reopened, { role: 'assistant', content: 'continued' }]
            );
            assert.equal(checkpoint.turns, 1);
        }
    }

    const seoyeonHistory = JSON.parse(read('assets/js/i18n/ko/day4_4_night.json'))
        .day4_temptation_seoyeon_freetalk.precedingHistory;
    runtime.window.I18N_DATA = { day4_temptation_seoyeon_freetalk: { precedingHistory: seoyeonHistory } };
    const flags = { day4_took_seoyeon_counteroffer: true, day4_confession_accepted: true };
    const context = {
        stateManager: {
            playerName: 'Player',
            getFlag: flag => flags[flag] || false,
            getAffinity: () => 20,
            stats: { Seoyeon: { affinity: 20 }, Dain: { affinity: 20 } }
        },
        charNameMap: {},
        groupParticipants: [
            { id: 'Dain', name: '다인', role: 'lead' },
            { id: 'Seoyeon', name: '서연', role: 'tempter' }
        ],
        getGameContext: () => '',
        _getGroupChoiceState: prototype._getGroupChoiceState,
        _getLocalizedGroupLocation: prototype._getLocalizedGroupLocation,
        _buildTemptationNightMemoryBlock: prototype._buildTemptationNightMemoryBlock,
        _getTemptationPrecedingHistory: prototype._getTemptationPrecedingHistory
    };
    const prompt = prototype._buildCurrentGroupSystemPrompt.call(
        context,
        { groupParticipants: 'counteroffer_confrontation' },
        'ko'
    );
    const [stable, dynamic] = prompt.split(core.CACHE_BOUNDARY_MARKER);
    assert.ok(dynamic.includes(seoyeonHistory));
    assert.ok(dynamic.includes('이 인물만 아는 어젯밤'));
    assert.ok(dynamic.includes('원래 상대는 주인공이 직접 말하기 전에'));
    assert.ok(!stable.includes(seoyeonHistory));
    const ordinary = prototype._buildCurrentGroupSystemPrompt.call(context, { groupParticipants: 'counteroffer_confrontation' }, 'ko');
    flags.day4_took_seoyeon_counteroffer = false;
    const withoutNight = prototype._buildCurrentGroupSystemPrompt.call(context, { groupParticipants: 'counteroffer_confrontation' }, 'ko');
    assert.equal(core.getStablePromptFingerprint(ordinary), core.getStablePromptFingerprint(withoutNight));
    assert.ok(!withoutNight.split(core.CACHE_BOUNDARY_MARKER)[1].includes(seoyeonHistory));
});

test('confrontation history and relationship status change only the live prompt tail in every language', () => {
    for (const lang of languages) {
        const flags = { day4_confession_accepted: true };
        const context = {
            stateManager: { playerName: 'Player', getFlag: flag => flags[flag] || false, getAffinity: () => 20 },
            charNameMap: {},
            groupParticipants: [{ id: 'Seoyeon', name: 'Seoyeon', role: 'lead' }, { id: 'Dain', name: 'Dain', role: 'tempter' }],
            getGameContext: () => '',
            _getGroupChoiceState: prototype._getGroupChoiceState,
            _getLocalizedGroupLocation: prototype._getLocalizedGroupLocation,
            _buildTemptationNightMemoryBlock: prototype._buildTemptationNightMemoryBlock,
            _getTemptationPrecedingHistory: prototype._getTemptationPrecedingHistory
        };
        const scene = { groupParticipants: 'counteroffer_confrontation' };
        const ordinary = prototype._buildCurrentGroupSystemPrompt.call(context, scene, lang);
        const ordinaryState = context._getGroupChoiceState(scene, lang);
        flags.day3_caught_multiple_dates = true;
        const caughtState = context._getGroupChoiceState(scene, lang);
        assert.notEqual(caughtState, ordinaryState, lang);
        flags.harem_seed = true;
        flags.day4_confession_accepted = false;
        const incidentState = context._getGroupChoiceState(scene, lang);
        assert.notEqual(incidentState, caughtState, lang);
        const incident = prototype._buildCurrentGroupSystemPrompt.call(context, scene, lang);
        const [stable, dynamic] = incident.split(core.CACHE_BOUNDARY_MARKER);
        assert.equal(stable, ordinary.split(core.CACHE_BOUNDARY_MARKER)[0], lang);
        assert.ok(dynamic.includes(incidentState), lang);
        assert.equal(core.getStablePromptFingerprint(ordinary), core.getStablePromptFingerprint(incident), lang);
        flags.day5_lied_about_counteroffer = true;
        assert.notEqual(context._getGroupChoiceState(scene, lang), incidentState, lang);
        assert.equal(context._getGroupChoiceState({groupChoiceState:'Fixed social context'},lang), 'Fixed social context');
    }
});
