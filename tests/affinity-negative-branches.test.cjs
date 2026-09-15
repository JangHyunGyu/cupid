'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');

function loadScenario() {
    const scenario = {};
    for (let day = 0; day <= 5; day++) scenario[day] = {};
    for (const file of fs.readdirSync(path.join(ROOT, 'assets/js/scenario')).filter(name => /^day\d.*\.js$/.test(name)).sort()) {
        new Function('SCENARIO', 'Object', fs.readFileSync(path.join(ROOT, 'assets/js/scenario', file), 'utf8'))(scenario, Object);
    }
    return scenario;
}

function loadLocaleCopy(locale) {
    const dir = path.join(ROOT, 'assets/js/i18n', locale);
    const copy = {};
    for (const file of fs.readdirSync(dir).filter(name => name.endsWith('.json'))) {
        Object.assign(copy, JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')));
    }
    return copy;
}

function createSceneRenderer(affinities = {}, flags = {}) {
    const context = {
        CHAR_NAME_MAP: {},
        console,
        document: { createElement() { return { toDataURL: () => '' }; } },
        window: {}
    };
    vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'assets/js/modules/SceneRenderer.js'), 'utf8'), context);
    const stateManager = {
        getAffinity(character) {
            return affinities[character] ?? 0;
        },
        getFlag(name) {
            return flags[name] === true;
        },
        setFlag(name, value = true) {
            flags[name] = value;
        }
    };
    return new context.window.SceneRenderer(stateManager, null, null);
}

const scenes = Object.assign({}, ...Object.values(loadScenario()));

test('negative affinity uses a dedicated line instead of the default greeting', () => {
    const cases = [
        ['lunch_seo_1', 'Seoyeon', 'lunch_seo_1_aff_neg', 'lunch_seo_1_aff_default'],
        ['lunch2_seo_2', 'Seoyeon', 'lunch2_seo_2_neg', 'lunch2_seo_2_cool'],
        ['lunch2_dain_tone', 'Dain', 'lunch2_dain_2_neg', 'lunch2_dain_2_cool'],
        ['lunch2_yuna_3', 'Yuna', 'lunch2_yuna_3_neg', 'lunch2_yuna_3_cool'],
        ['night2_reply_seo_5', 'Seoyeon', 'night2_reply_seo_react_neg', 'night2_reply_seo_react_default'],
        ['night2_reply_dain_5', 'Dain', 'night2_reply_dain_react_neg', 'night2_reply_dain_react_default'],
        ['night2_reply_yuna_7', 'Yuna', 'night2_reply_yuna_react_neg', 'night2_reply_yuna_react_default'],
        ['night2_reply_dain_1_visit', 'Dain', 'night2_reply_dain_react_neg', 'night2_reply_dain_1_established'],
        ['night2_reply_yuna_4_visit', 'Yuna', 'night2_reply_yuna_react_neg', 'night2_reply_yuna_4_established'],
        ['morning3_seo_gate_1', 'Seoyeon', 'morning3_seo_gate_neg_1', 'morning3_seo_gate_cold_1'],
        ['morning3_yuna_gate_1', 'Yuna', 'morning3_yuna_gate_neg_1', 'morning3_yuna_gate_cold_1'],
        ['morning3_dain_gate_1', 'Dain', 'morning3_dain_gate_neg_1', 'morning3_dain_gate_cold_1'],
        ['after2_seo_neck_touch', 'Seoyeon', 'after2_seo_neck_neg', 'after2_seo_neck_low'],
        ['after3_seo_skip', 'Seoyeon', 'after3_seo_neg_1', 'after3_seo_low_1'],
        ['after3_yuna_skip', 'Yuna', 'after3_yuna_neg_1', 'after3_yuna_low_1'],
        ['after3_dain_skip', 'Dain', 'after3_dain_neg_1', 'after3_dain_low_1'],
        ['hidden_homeroom_d5_skip', 'Teacher', 'hidden_homeroom_d5_neg', 'hidden_homeroom_d5_low'],
        ['hidden_nurse_d5_skip', 'Nurse', 'hidden_nurse_d5_neg', 'hidden_nurse_d5_low'],
        ['wall_seo_1', 'Seoyeon', 'wall_seo_skip', 'wall_seo_pre_low_1'],
        ['wall_dain_1', 'Dain', 'wall_dain_skip', 'wall_dain_pre_low_1'],
        ['wall_yuna_1', 'Yuna', 'wall_yuna_skip', 'wall_yuna_pre_low_1'],
        ['confess_seo_yes_7', 'Seoyeon', 'confess_seo_yes_low_1', 'confess_seo_yes_low_1'],
        ['morning5_mood_check', 'selectByHighestAffinity', 'morning5_mood_neg', 'morning5_mood_low'],
        ['morning2_greet_none_tone', 'selectByHighestAffinity', 'morning2_greet_none_neg_1', 'morning2_greet_none_1']
    ];

    for (const [id, character, negNext, zeroNext] of cases) {
        const scene = scenes[id];
        assert.ok(scene, id);
        if (character === 'selectByHighestAffinity') {
            assert.equal(createSceneRenderer({
                Seoyeon: -3, Yuna: -8, Dain: -1, Teacher: -2, Nurse: -4
            }).resolveNextScene(scene), negNext, id);
            assert.equal(createSceneRenderer({
                Seoyeon: 0, Yuna: 0, Dain: 0, Teacher: 0, Nurse: 0
            }).resolveNextScene(scene), zeroNext, `${id} at 0`);
            continue;
        }
        assert.equal(createSceneRenderer({ [character]: -1 }).resolveNextScene(scene), negNext, id);
        assert.equal(createSceneRenderer({ [character]: 0 }).resolveNextScene(scene), zeroNext, `${id} at 0`);
    }
});

test('below-threshold date and farewell guards split zero from negative', () => {
    assert.equal(createSceneRenderer({ Seoyeon: 0 }).resolveNextScene(scenes.date_seo_skip), 'date_seo_low');
    assert.equal(createSceneRenderer({ Seoyeon: -4 }).resolveNextScene(scenes.date_seo_skip), 'date_seo_neg');
    assert.equal(createSceneRenderer({ Yuna: 10 }).resolveNextScene(scenes.morning3_date_yuna_skip), 'morning3_date_yuna_low');
    assert.equal(createSceneRenderer({ Yuna: -2 }).resolveNextScene(scenes.morning3_date_yuna_skip), 'morning3_date_yuna_neg');
    assert.equal(createSceneRenderer({ Dain: 5 }).resolveNextScene(scenes.after5_farewell_dain_skip), 'after5_farewell_dain_low');
    assert.equal(createSceneRenderer({ Dain: -1 }).resolveNextScene(scenes.after5_farewell_dain_skip), 'after5_farewell_dain_neg');
    assert.equal(createSceneRenderer({ Seoyeon: 12 }).resolveNextScene(scenes.after3_seo_skip), 'after3_seo_low_1');
    assert.equal(createSceneRenderer({ Seoyeon: -2 }).resolveNextScene(scenes.after3_seo_skip), 'after3_seo_neg_1');
    assert.equal(createSceneRenderer({ Teacher: 8 }).resolveNextScene(scenes.hidden_homeroom_d5_skip), 'hidden_homeroom_d5_low');
    assert.equal(createSceneRenderer({ Teacher: -3 }).resolveNextScene(scenes.hidden_homeroom_d5_skip), 'hidden_homeroom_d5_neg');
    assert.equal(createSceneRenderer({ Seoyeon: 12 }).resolveNextScene(scenes.after5_last_chance_seo_aff_check), 'after5_last_chance_seo_low_1');
    assert.equal(createSceneRenderer({ Seoyeon: -2 }).resolveNextScene(scenes.after5_last_chance_seo_aff_check), 'after5_last_chance_seo_neg');
    assert.equal(createSceneRenderer({ Dain: 8 }).resolveNextScene(scenes.after5_confess_aff_dain), 'after5_confess_react_dain_low');
    assert.equal(createSceneRenderer({ Dain: -3 }).resolveNextScene(scenes.after5_confess_aff_dain), 'after5_confess_react_dain_neg');
});

test('negative lunch and afterschool do not continue the warm hangout', () => {
    assert.equal(scenes.lunch2_seo_2_neg.next, 'lunch2_seo_neg_leave');
    assert.equal(scenes.lunch2_dain_2_neg.next, 'lunch2_dain_neg_leave');
    assert.equal(scenes.lunch2_yuna_3_neg.next, 'lunch2_yuna_neg_leave');
    assert.equal(scenes.lunch2_seo_neg_leave.next, 'after2_start');
    assert.equal(scenes.after2_seo_neg_1.next, 'after2_seo_neg_leave');
    assert.equal(scenes.after2_dain_neg_1.next, 'after2_dain_neg_leave');
    assert.equal(scenes.after2_yuna_neg_1.next, 'after2_yuna_neg_leave');
    assert.equal(scenes.after2_dain_neg_leave.next, 'after2_dain_rival_seo_check');
    assert.notEqual(scenes.after2_dain_neg_1.next, 'after2_dain_4');
    assert.notEqual(scenes.after2_yuna_neg_1.next, 'after2_yuna_3');
    assert.equal(scenes.lunch2_seo_2_cool.next, 'lunch2_seo_cool_cont');
    assert.notEqual(scenes.lunch2_seo_2_cool.next, 'lunch2_seo_3');
    assert.equal(scenes.lunch2_dain_2_cool.next, 'lunch2_dain_8');
    assert.equal(scenes.after2_yuna_cool_1.next, 'after2_yuna_6');
    assert.equal(scenes.after2_dain_cool_1.next, 'after2_dain_9');
    assert.equal(scenes.night2_reply_dain_react_neg.next, 'night2_hidden_check');
    assert.equal(scenes.night2_reply_seo_react_neg.next, 'night2_hidden_check');
    assert.equal(scenes.night2_reply_yuna_react_neg.next, 'night2_hidden_check');
});

test('negative-affinity copy exists in every language and differs from the zero-affinity line', () => {
    const pairs = [
        ['lunch_seo_1_aff_neg', 'lunch_seo_1_aff_default'],
        ['lunch2_seo_2_neg', 'lunch2_seo_2_cool'],
        ['date_seo_neg', 'date_seo_low'],
        ['morning3_date_seo_neg', 'morning3_date_seo_low'],
        ['wall_seo_skip', 'wall_seo_pre_low_1'],
        ['confess_seo_yes_low_1', 'confess_seo_yes_mid_1'],
        ['after5_farewell_seo_neg', 'after5_farewell_seo_low'],
        ['after5_hidden_teacher_neg', 'after5_hidden_teacher_low'],
        ['after3_seo_neg_1', 'after3_seo_low_1'],
        ['hidden_homeroom_d5_neg', 'hidden_homeroom_d5_low'],
        ['hidden_nurse_d5_neg', 'hidden_nurse_d5_low'],
        ['morning2_greet_none_neg_1', 'morning2_greet_none_1'],
        ['after2_seo_neck_neg_b', 'after2_seo_neck_low_2'],
        ['after5_last_chance_seo_neg', 'after5_last_chance_seo_low_2'],
        ['after5_confess_react_seo_neg', 'after5_confess_react_seo_low']
    ];
    for (const locale of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt']) {
        const copy = loadLocaleCopy(locale);
        for (const [negId, zeroId] of pairs) {
            assert.ok(copy[negId]?.text?.trim(), `${locale}:${negId}`);
            assert.ok(copy[zeroId]?.text?.trim(), `${locale}:${zeroId}`);
            assert.notEqual(copy[negId].text, copy[zeroId].text, `${locale}:${negId} vs ${zeroId}`);
        }
    }
});
