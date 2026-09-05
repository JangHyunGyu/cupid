'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

function runtime() {
    const window = { GAME_LANG: 'ko' };
    const context = vm.createContext({
        window, console: { log() {}, warn() {}, error() {} },
        document: { documentElement: { lang: 'ko' } },
        DEFAULT_MAX_FREE_TALK_TURNS: 3, CHAR_NAME_MAP: {},
        setTimeout, clearTimeout, URL, TextDecoder, Uint8Array
    });
    for (const file of ['freetalk-core.js', 'modules/StateManager.js', 'modules/FreeTalkSystem.js']) {
        vm.runInContext(read(`assets/js/${file}`), context);
    }
    const state = new window.StateManager();
    const talk = new window.FreeTalkSystem(state, {}, {}, {});
    return { window, state, talk, context };
}

test('committed dialogue progress survives save import while a pending turn does not', () => {
    const { window, state, talk } = runtime();
    talk.currentSceneId = 'night2_yuna_freetalk';
    talk.currentMaxTurns = 3;
    talk.freeTalkTurns = 1;
    talk._commitFreeTalkCheckpoint({ content: '세 번째 곡은 어땠어?', speakerId: 'Yuna' });
    talk.freeTalkTurns += 1; // A request has started but has not produced a valid response.
    const loaded = new window.StateManager();
    loaded.importState(JSON.parse(JSON.stringify(state.exportState())));
    assert.equal(loaded.freeTalkCheckpoint.turns, 1);
    assert.equal(loaded.freeTalkCheckpoint.lastReply.content, '세 번째 곡은 어땠어?');
    loaded.freeTalkCheckpoint.lastReply.content = 'changed';
    assert.equal(state.freeTalkCheckpoint.lastReply.content, '세 번째 곡은 어땠어?');
    loaded.resetForNewGame();
    assert.equal(loaded.freeTalkCheckpoint, null);
});

test('last-turn completion is saved together with the response and cannot grant another turn', () => {
    const { state, talk } = runtime();
    talk.currentSceneId = 'after3_seo_freetalk';
    talk.currentMaxTurns = 3;
    talk.freeTalkTurns = 3;
    talk._commitFreeTalkCheckpoint({ content: '내일 봐.' });
    const save = JSON.parse(JSON.stringify(state.exportState()));
    assert.equal(save.flags.messaged_after3_seo_freetalk, true);
    assert.equal(save.freeTalkCheckpoint.completed, true);
    assert.equal(save.freeTalkCheckpoint.turns, 3);
});

test('legacy individual saves recover only replies after this scene’s opening', () => {
    const { talk } = runtime();
    const history = [
        { role: 'assistant', content: 'Earlier scene' },
        { role: 'user', content: 'Earlier question' },
        { role: 'assistant', content: 'Opening' },
        { role: 'user', content: 'Current question' },
        { role: 'assistant', content: 'Current reply' }
    ];
    const checkpoint = talk._getFreeTalkCheckpoint({ text: 'Opening', maxTurns: 3 }, 'scene', history);
    assert.equal(checkpoint.turns, 1);
    assert.equal(checkpoint.lastReply.content, 'Current reply');
    assert.equal(talk._getFreeTalkCheckpoint({ text: 'Unseen opening' }, 'other', history), null);
});

test('legacy group save preserves its original speakers even after affinity ranks change', () => {
    const { state, talk } = runtime();
    state.addGroupConversationMemory({
        sessionId: 'group_scene', turnId: 'one', participants: ['Dain', 'Yuna'],
        userContent: '들어볼게.', assistantMessages: [{ speakerId: 'Yuna', content: '내 말도 들어.' }]
    });
    state.stats.Seoyeon.affinity = 99;
    const restored = talk._getFreeTalkCheckpoint({ type: 'group_free_talk', maxTurns: 3 }, 'group_scene');
    assert.deepEqual(Array.from(restored.participants, p => [p.id, p.side]), [['Dain', 'left'], ['Yuna', 'right']]);
    assert.equal(restored.turns, 1);
    assert.equal(restored.lastReply.content, '내 말도 들어.');
});

test('interrupting a group between speakers commits no partial affinity or gallery reward', async () => {
    const { talk } = runtime();
    const rewards = [];
    talk._assertRequestContext = () => {};
    talk._setGroupActiveSpeaker = () => {};
    talk._applyGroupExpression = () => {};
    talk._applyGroupAffinity = (...args) => { rewards.push(args); return { positiveUsed: 1 }; };
    talk.galleryManager = { incrementFreeTalkCount: id => rewards.push(id) };
    talk.uiManager = { updateNameTag() {}, showNextIndicator() {} };
    talk.dialogueSystem = { async typeText() {}, getChatRenderReceipt() { return {}; } };
    talk._waitForGroupMessageAdvance = async () => { throw Error('Scene changed'); };
    const messages = ['Dain', 'Yuna'].map(id => ({ speakerId: id, speakerName: id, text: id, affinity: 3 }));
    await assert.rejects(talk._renderGroupConversations(messages, {}, '', 'ko'), /Scene changed/);
    assert.deepEqual(rewards, []);
});

function scenarios() {
    const context = vm.createContext({ console });
    for (const file of fs.readdirSync(path.join(root, 'assets/js/scenario')).filter(file => /^day[1-5]_/.test(file))) {
        vm.runInContext(read(`assets/js/scenario/${file}`), context);
    }
    return Object.assign({}, ...Object.values(context.SCENARIO));
}

test('all authored conversations declare their medium independently of localized wording', () => {
    const all = scenarios();
    for (const [id, scene] of Object.entries(all)) {
        if (!['free_talk', 'group_free_talk'].includes(scene.type)) continue;
        assert.equal(scene.isRemote, /^night2_(dain|seo|yuna)_freetalk$/.test(id), id);
    }
});

test('Day 3 departure paths route to exits without resurrecting the departed character', () => {
    const all = scenarios();
    for (const id of ['after3_seo_end', 'after3_yuna_end', 'after3_dain_departed_end']) {
        assert.equal(all[id].routeBeforeRender, true, id);
        assert.equal(all[id].character, undefined, id);
    }
    for (const id of ['after3_dain_pity_trap_10', 'after3_dain_tell_confirm_3']) {
        assert.equal(all[id].next, 'after3_dain_departed_end');
    }
    assert.equal(all.night3_faithful_check.branches[0].condition, 'seo_trust_deep');
    assert.equal(all.night3_faithful_check.branches[1].condition, 'yuna_trust_deep');
    assert.equal(all.night3_faithful_check.branches[2].condition, 'dain_trust_deep');
});

test('history-dependent night messages have complete alternatives in every language', () => {
    const all = scenarios();
    for (const [id, flag] of [
        ['night2_reply_dain_1', 'chose_dain_after2'],
        ['night2_reply_yuna_1', 'chose_yuna_lunch'],
        ['night2_reply_yuna_4', 'chose_yuna_after2'],
        ['night2_msg_generic_3', 'chose_yuna_lunch']
    ]) {
        assert.equal(all[id].routeBeforeRender, true);
        assert.equal(all[id].branches[0].condition, flag);
        for (const lang of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt']) {
            const copy = JSON.parse(read(`assets/js/i18n/${lang}/day2_4_night.json`));
            assert.ok(copy[`${id}_established`].text.trim(), `${lang}:${id}:established`);
            assert.ok(copy[`${id}_first`].text.trim(), `${lang}:${id}:first`);
            assert.notEqual(copy[`${id}_established`].text, copy[`${id}_first`].text);
        }
    }
});

test('history routers select only established memories and preserve rewards on either path', () => {
    const { window, state, context } = runtime();
    vm.runInContext(read('assets/js/modules/SceneRenderer.js'), context);
    const renderer = new window.SceneRenderer(state, {}, {});
    const all = scenarios();
    for (const [id, flag] of [
        ['night2_reply_dain_1', 'chose_dain_after2'],
        ['night2_reply_yuna_1', 'chose_yuna_lunch'],
        ['night2_reply_yuna_4', 'chose_yuna_after2'],
        ['night2_msg_generic_3', 'chose_yuna_lunch'],
        ['true_yuna_5', 'heard_yuna_third_song'],
        ['true_yuna_6', 'heard_yuna_third_song'],
        ['good_epilogue_1_yuna', 'chose_yuna_lunch']
    ]) {
        state.setFlag(flag, false);
        assert.equal(renderer.resolveNextScene(all[id]), `${id}_first`);
        state.setFlag(flag, true);
        assert.equal(renderer.resolveNextScene(all[id]), `${id}_established`);
        assert.deepEqual(all[`${id}_first`].stats, all[`${id}_established`].stats, id);
        assert.equal(all[`${id}_first`].next, all[`${id}_established`].next, id);
        assert.equal(all[id].stats, undefined, 'routing itself must not grant the reward twice');
    }
});

test('trust messages do not follow rejection paths merely because the route event happened', () => {
    const { window, state, context } = runtime();
    vm.runInContext(read('assets/js/modules/SceneRenderer.js'), context);
    const renderer = new window.SceneRenderer(state, {}, {});
    const all = scenarios();
    for (const [character, flag, target] of [
        ['seo', 'seo_trust_deep', 'night3_faithful_msg_seo_1'],
        ['yuna', 'yuna_trust_deep', 'night3_faithful_msg_yuna_1'],
        ['dain', 'dain_trust_deep', 'night3_faithful_msg_dain_1']
    ]) {
        state.flags = { [`${character}_day3`]: true };
        assert.equal(renderer.resolveNextScene(all.night3_faithful_check), 'night3_dream_1');
        state.setFlag(flag);
        assert.equal(renderer.resolveNextScene(all.night3_faithful_check), target);
    }
});

test('adult route counteroffers occur after the check-in promise and return home before messages', () => {
    const all = scenarios();
    for (const role of ['teacher', 'nurse']) {
        assert.equal(all[`day4_${role}_checkin`].next, `day4_adult_${role}_student_rank`);
        for (const student of ['seoyeon', 'yuna', 'dain']) {
            const scene = all[`day4_${role}_${student}_counteroffer`];
            for (const index of [0, 2, 3]) assert.equal(scene.choices[index].next, 'day4_adult_return_home');
        }
    }
    assert.equal(all.day4_adult_return_home.next, 'day4_hidden_msg_branch');
    assert.equal(all.day4_adult_counteroffer_soft_return_home.next, 'day4_adult_night_regret_target_branch');
});

test('Minsu recalls a warning only on paths where he actually gave it', () => {
    const { window, state, context } = runtime();
    vm.runInContext(read('assets/js/modules/SceneRenderer.js'), context);
    const renderer = new window.SceneRenderer(state, {}, {});
    const all = scenarios();
    const flags = ['chose_seoyeon_lunch', 'chose_seo_after2', 'chose_dain_lunch', 'chose_dain_after2', 'chose_yuna_lunch', 'chose_yuna_after2'];
    for (let combination = 0; combination < 64; combination++) {
        state.flags = Object.fromEntries(flags.map((flag, i) => [flag, !!(combination & (1 << i))]));
        const wasWarned = renderer.resolveNextScene(all.minsu_warn_gate) === 'minsu_warn_1';
        assert.equal(renderer.resolveNextScene(all.minsu_d3_4), wasWarned ? 'minsu_d3_4_established' : 'minsu_d3_4_first', String(combination));
    }
});

test('the same invitation flag recalls school supervision or romance according to the actual route', () => {
    const { state, talk, context, window } = runtime();
    vm.runInContext(read('assets/js/prompts.js'), context);
    const names = { seoyeon: 'Seoyeon', yuna: 'Yuna', dain: 'Dain' };
    for (const [id, char] of Object.entries(names)) {
        const flag = `day4_took_${id}_counteroffer`;
        const memory = window.FLAG_MEMORIES.find(m => m.flag === flag);
        for (const lang of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt']) {
            state.flags = { [flag]: true };
            const student = talk.getGameContext(char, lang, { includeGroupConversations: false });
            assert.ok(student.includes(memory[lang]), `${lang}/${id}/student`);
            for (const role of ['teacher', 'nurse']) {
                state.flags = { [flag]: true, [`day4_counteroffer_target_${role}`]: true };
                const staff = talk.getGameContext(char, lang, { includeGroupConversations: false });
                assert.ok(staff.includes(memory.variants[0][lang]), `${lang}/${id}/${role}`);
                assert.ok(!staff.includes(memory[lang]), 'school support must not become a romantic betrayal');
            }
        }
    }
});
