'use strict';

const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const SCENARIO_DIR = path.join(ROOT, 'assets', 'js', 'scenario');
const KO_DIR = path.join(ROOT, 'assets', 'js', 'i18n', 'ko');

function loadFreeTalkCore() {
    const context = { window: {} };
    vm.runInNewContext(
        fs.readFileSync(path.join(ROOT, 'assets', 'js', 'freetalk-core.js'), 'utf8'),
        context,
        { filename: 'freetalk-core.js' }
    );
    return context.window.CupidFreeTalkCore;
}

function loadScenario() {
    const scenario = {};
    for (let day = 0; day <= 5; day++) scenario[day] = {};

    const files = fs.readdirSync(SCENARIO_DIR)
        .filter(file => /^day\d.*\.js$/.test(file))
        .sort();
    for (const file of files) {
        const source = fs.readFileSync(path.join(SCENARIO_DIR, file), 'utf8');
        new Function('SCENARIO', 'Object', source)(scenario, Object);
    }
    return scenario;
}

function loadKoreanCopy() {
    const copy = {};
    const files = fs.readdirSync(KO_DIR)
        .filter(file => /^day\d.*\.json$/.test(file))
        .sort();
    for (const file of files) {
        Object.assign(copy, JSON.parse(fs.readFileSync(path.join(KO_DIR, file), 'utf8')));
    }
    return copy;
}

function loadLocaleCopy(locale) {
    const copy = {};
    const localeDir = path.join(ROOT, 'assets', 'js', 'i18n', locale);
    const files = fs.readdirSync(localeDir)
        .filter(file => /^day\d.*\.json$/.test(file))
        .sort();
    for (const file of files) {
        Object.assign(copy, JSON.parse(fs.readFileSync(path.join(localeDir, file), 'utf8')));
    }
    return copy;
}

function createSceneRenderer(affinities, flags = {}) {
    const source = fs.readFileSync(path.join(ROOT, 'assets', 'js', 'modules', 'SceneRenderer.js'), 'utf8');
    const context = {
        CHAR_NAME_MAP: {},
        console,
        document: {
            createElement() {
                return { toDataURL: () => '' };
            }
        },
        window: {}
    };
    vm.runInNewContext(source, context, { filename: 'SceneRenderer.js' });
    const stateManager = {
        getAffinity(character) {
            return affinities[character] ?? 0;
        },
        getFlag(flagName) {
            return flags[flagName] ?? false;
        },
        setFlag(flagName, value = true) {
            flags[flagName] = value;
        }
    };
    return new context.window.SceneRenderer(stateManager, null, null);
}

const scenario = loadScenario();
const korean = loadKoreanCopy();
const scenes = Object.assign({}, ...Object.values(scenario));
const freeTalkCore = loadFreeTalkCore();

test('direct choice affinity distribution keeps subtle penalties meaningful but secondary', () => {
    const counts = { positive: 0, negative: 0, neutral: 0, mixed: 0 };
    let total = 0;

    for (const dayScenes of Object.values(scenario)) {
        for (const scene of Object.values(dayScenes || {})) {
            for (const choice of scene.choices || []) {
                total++;
                const values = Object.values(choice.stats || {})
                    .map(stat => Number(stat?.affinity))
                    .filter(Number.isFinite);
                const hasPositive = values.some(value => value > 0);
                const hasNegative = values.some(value => value < 0);
                const kind = hasPositive && hasNegative
                    ? 'mixed'
                    : hasPositive ? 'positive' : hasNegative ? 'negative' : 'neutral';
                counts[kind]++;
            }
        }
    }

    assert.equal(total, 368);
    assert.deepEqual(counts, { positive: 59, negative: 154, neutral: 130, mixed: 25 });
});

test('day 2 afterschool rivalry scales with the live relationship instead of inventing plans', () => {
    const checks = [
        ['Seoyeon', 'after2_dain_rival_seo_check', 'after2_dain_rival_seo'],
        ['Yuna', 'after2_dain_rival_yuna_check', 'after2_dain_rival_yuna'],
        ['Dain', 'after2_seo_rival_dain_check', 'after2_seo_rival_dain'],
        ['Yuna', 'after2_seo_rival_yuna_check', 'after2_seo_rival_yuna'],
        ['Dain', 'after2_yuna_rival_dain_check', 'after2_yuna_rival_dain'],
        ['Seoyeon', 'after2_yuna_rival_seo_check', 'after2_yuna_rival_seo']
    ];

    for (const [character, checkId, prefix] of checks) {
        assert.equal(createSceneRenderer({ [character]: 9 }).resolveNextScene(scenes[checkId]), `${prefix}_low`);
        assert.equal(createSceneRenderer({ [character]: 15 }).resolveNextScene(scenes[checkId]), `${prefix}_mid`);
        assert.equal(createSceneRenderer({ [character]: 30 }).resolveNextScene(scenes[checkId]), `${prefix}_high`);
        assert.equal(scenes[`${prefix}_low`].stats, undefined);
        assert.equal(Object.values(scenes[`${prefix}_mid`].stats)[0].affinity, -2);
        assert.equal(Object.values(scenes[`${prefix}_high`].stats)[0].affinity, -5);
    }

    for (const endpoint of ['after2_dain_end_3e', 'after2_seo_end', 'after2_yuna_end']) {
        assert.equal(scenes[endpoint].stats, undefined, `${endpoint} must not apply telepathic rivalry penalties`);
    }
    for (const endpoint of ['lunch2_seo_end_c1', 'lunch2_seo_end_c2', 'lunch2_dain_end', 'lunch2_yuna_end']) {
        assert.equal(scenes[endpoint].stats, undefined, `${endpoint} must defer rivalry costs until an observed reaction`);
    }
    assert.doesNotMatch(korean.after2_yuna_end.text, /기다렸|일정 바뀌면/);
    assert.doesNotMatch(korean.lunch2_seo_9.text, /오늘도 나 빼고/);

    const localizedNodes = checks.flatMap(([, , prefix]) => [`${prefix}_low`, `${prefix}_mid`, `${prefix}_high`]);
    for (const locale of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt']) {
        const copy = loadLocaleCopy(locale);
        for (const nodeId of localizedNodes) {
            assert.ok(copy[nodeId]?.text?.trim(), `${locale}:${nodeId} must be localized`);
        }
    }
});

test('the first affinity callback is reachable before day 1 lunch', () => {
    assert.equal(scenes.lunch_seo_1.affinityBranches[0].minAffinity, 4);
    assert.equal(createSceneRenderer({ Seoyeon: 4 }).resolveNextScene(scenes.lunch_seo_1), 'lunch_seo_1_aff_high');
    assert.equal(createSceneRenderer({ Seoyeon: 2 }).resolveNextScene(scenes.lunch_seo_1), 'lunch_seo_1_aff_default');
});

test('midgame relationship tiers preserve promises, distance, and locked fallout', () => {
    assert.equal(scenes.after3_choice.choices.length, 4);
    assert.equal(scenes.after3_choice.choices[3].next, 'after3_walk_home');
    assert.equal(scenes.after3_choice.choices[3].setFlags.includes('route_seoyeon'), false);
    assert.deepEqual([...scenes.morning3_date_seo_low.clearFlags], ['accepted_seoyeon_date']);
    assert.deepEqual([...scenes.morning3_date_yuna_low.clearFlags], ['accepted_yuna_date']);
    assert.deepEqual([...scenes.morning3_date_dain_low.clearFlags], ['accepted_dain_date']);

    const unpromised = createSceneRenderer({ Dain: 40 });
    assert.equal(unpromised.resolveNextScene(scenes.after3_rival_dain_check), 'after3_rival_dain_affinity');
    const promised = createSceneRenderer({ Dain: 40 }, { accepted_dain_date: true });
    assert.equal(promised.resolveNextScene(scenes.after3_rival_dain_check), 'after3_rival_dain_promised_dispatch');

    for (const [character, checkId, lowId, partialId, fullId] of [
        ['Seoyeon', 'after3_seo_affinity_check', 'after3_seo_low_1', 'after3_seo_partial_1', 'after3_seo_1'],
        ['Yuna', 'after3_yuna_affinity_check', 'after3_yuna_low_1', 'after3_yuna_partial_1', 'after3_yuna_1'],
        ['Dain', 'after3_dain_affinity_check', 'after3_dain_low_1', 'after3_dain_partial_1', 'after3_dain_1']
    ]) {
        assert.equal(createSceneRenderer({ [character]: -1 }).resolveNextScene(scenes[checkId]), lowId);
        assert.equal(createSceneRenderer({ [character]: 10 }).resolveNextScene(scenes[checkId]), partialId);
        assert.equal(createSceneRenderer({ [character]: 40 }).resolveNextScene(scenes[checkId]), fullId);
        assert.ok(scenes[lowId].clearFlags.includes(`accepted_${character === 'Seoyeon' ? 'seoyeon' : character.toLowerCase()}_date`));
    }

    for (const [character, checkId, tentativeId, normalId, highId] of [
        ['Seoyeon', 'date_seo_tier_check', 'date_seo_tentative_1', 'date_seo_compliment_choice', 'date_seo_high_1'],
        ['Yuna', 'date_yuna_tier_check', 'date_yuna_tentative_1', 'date_yuna_compliment_choice', 'date_yuna_high_1'],
        ['Dain', 'date_dain_tier_check', 'date_dain_tentative_1', 'date_dain_2', 'date_dain_high_1']
    ]) {
        assert.equal(createSceneRenderer({ [character]: 25 }).resolveNextScene(scenes[checkId]), tentativeId);
        assert.equal(createSceneRenderer({ [character]: 45 }).resolveNextScene(scenes[checkId]), normalId);
        assert.equal(createSceneRenderer({ [character]: 65 }).resolveNextScene(scenes[checkId]), highId);
    }

    const caught = createSceneRenderer({}, { day3_caught_multiple_dates: true });
    assert.equal(caught.resolveNextScene(scenes.morning4_end), 'day4_caught_fallout_1');
    assert.equal(caught.resolveNextScene(scenes.morning5_start_branch), 'morning5_caught_fallout_1');
    const unresolved = createSceneRenderer({}, { harem_seed: true });
    assert.equal(unresolved.resolveNextScene(scenes.morning4_end), 'day4_harem_fallout_1');
    assert.equal(unresolved.resolveNextScene(scenes.morning5_start_branch), 'morning5_harem_fallout_1');
});

test('neutral student routes continue through confession into rival temptation routing', () => {
    const cases = [
        {
            character: 'Seoyeon',
            routeFlag: 'route_seoyeon',
            routeCheck: 'after3_seo_affinity_check',
            partialScene: 'after3_seo_partial_1',
            dateEntry: 'date_seo_1',
            dateTier: 'date_seo_tier_check',
            tentativeScene: 'date_seo_tentative_1',
            tentativeEnd: 'date_seo_tentative_3',
            tentativeFlag: 'day4_tentative_seoyeon',
            confession: 'confess_seo_2',
            rivalRouter: 'wall_seo_rival_rank',
            counteroffer: 'wall_seo_glimpse_1'
        },
        {
            character: 'Yuna',
            routeFlag: 'route_yuna',
            routeCheck: 'after3_yuna_affinity_check',
            partialScene: 'after3_yuna_partial_1',
            dateEntry: 'date_yuna_1',
            dateTier: 'date_yuna_tier_check',
            tentativeScene: 'date_yuna_tentative_1',
            tentativeEnd: 'date_yuna_tentative_3',
            tentativeFlag: 'day4_tentative_yuna',
            confession: 'confess_yuna_1',
            rivalRouter: 'wall_yuna_rival_rank',
            counteroffer: 'wall_yuna_glimpse_1'
        },
        {
            character: 'Dain',
            routeFlag: 'route_dain',
            routeCheck: 'after3_dain_affinity_check',
            partialScene: 'after3_dain_partial_1',
            dateEntry: 'date_dain_1',
            dateTier: 'date_dain_tier_check',
            tentativeScene: 'date_dain_tentative_1',
            tentativeEnd: 'date_dain_tentative_3',
            tentativeFlag: 'day4_tentative_dain',
            confession: 'confess_dain_1',
            rivalRouter: 'wall_dain_rival_rank',
            counteroffer: 'wall_dain_seo_tempt_1'
        }
    ];

    for (const route of cases) {
        const renderer = createSceneRenderer(
            { Seoyeon: 0, Yuna: 0, Dain: 0 },
            { [route.routeFlag]: true }
        );
        assert.equal(renderer.resolveNextScene(scenes[route.routeCheck]), route.partialScene);
        assert.equal(renderer.resolveAffinityGuard(scenes[route.dateEntry]), null);
        assert.equal(renderer.resolveNextScene(scenes[route.dateTier]), route.tentativeScene);
        assert.deepEqual(scenes[route.tentativeEnd].setFlags, [route.tentativeFlag]);
        assert.equal(scenes[route.tentativeEnd].next, 'pre_confess_minsu');
        assert.equal(renderer.resolveAffinityGuard(scenes[route.confession]), null);
        assert.equal(renderer.resolveNextScene(scenes.day4_student_night_branch), route.rivalRouter);
        assert.equal(renderer.resolveNextScene(scenes[route.rivalRouter]), route.counteroffer);
    }
});

test('late confession and final-day callbacks use aligned live-affinity thresholds', () => {
    for (const id of ['ending_confessed_aff_seo', 'ending_confessed_aff_yuna', 'ending_confessed_aff_dain']) {
        assert.equal(scenes[id].affinityBranches[0].minAffinity, 50);
    }
    assert.doesNotMatch(korean.morning5_mood_high.text, /옥상|열쇠/);

    for (const [character, checkId, midId, highId] of [
        ['Seoyeon', 'tour_seo_affinity_check', 'tour_seo_affinity_60', 'tour_seo_affinity_80'],
        ['Yuna', 'tour_yuna_affinity_check', 'tour_yuna_affinity_60', 'tour_yuna_affinity_80'],
        ['Dain', 'tour_dain_affinity_check', 'tour_dain_affinity_60', 'tour_dain_affinity_80']
    ]) {
        assert.equal(createSceneRenderer({ [character]: 65 }).resolveNextScene(scenes[checkId]), midId);
        assert.equal(createSceneRenderer({ [character]: 85 }).resolveNextScene(scenes[checkId]), highId);
    }

    const tieredRivalNodes = [
        ['lunch3_give_seo_dain_mid', -2],
        ['lunch3_give_seo_dain_low', -1],
        ['lunch3_give_dain_seo_mid', -2],
        ['lunch3_give_dain_seo_low', -1],
        ['lunch3_give_yuna_dain_mid', -2],
        ['lunch3_give_yuna_dain_low', -1]
    ];
    for (const [id, expected] of tieredRivalNodes) {
        const affinity = Object.values(scenes[id].stats)[0].affinity;
        assert.equal(affinity, expected, `${id} affinity tier drifted`);
    }
});

test('every affinity screen that had only two options now adds two localized negative traps', () => {
    const expandedSceneIds = [
        'lunch_seo_choice',
        'lunch_yuna_choice',
        'after1_jealousy_seo_choice',
        'after_homeroom_honest_choice2',
        'after_hidden_nurse_choice',
        'lunch2_yuna_choice',
        'hidden_nurse_d2_choice1',
        'hidden_nurse_d2_choice2',
        'after2_seo_choice1',
        'hidden_homeroom_d3_choice',
        'morning3_date_seo_choice',
        'morning3_date_dain_choice',
        'morning3_date_yuna_choice',
        'lunch3_seo_witness_choice',
        'after3_seo_choice',
        'after3_yuna_choice',
        'after3_dain_choice',
        'after3_dain_dilemma_final',
        'date_dain_compliment_choice',
        'wall_seo_hug_choice',
        'confess_seo_choice',
        'confess_yuna_choice',
        'confess_dain_choice',
        'day4_teacher_seoyeon_counteroffer',
        'day4_teacher_dain_counteroffer',
        'day4_teacher_yuna_counteroffer',
        'day4_nurse_seoyeon_counteroffer',
        'day4_nurse_dain_counteroffer',
        'day4_nurse_yuna_counteroffer',
        'wall_seo_glimpse_2',
        'wall_seo_yuna_tempt_2',
        'wall_dain_glimpse_4_c',
        'wall_dain_seo_tempt_2',
        'wall_yuna_glimpse_3_b',
        'wall_yuna_dain_tempt_2',
        'morning5_caught_teacher_counteroffer',
        'morning5_caught_nurse_counteroffer',
        'morning5_caught_seoyeon_by_dain',
        'morning5_caught_seoyeon_by_yuna',
        'morning5_caught_dain_by_seoyeon',
        'morning5_caught_dain_by_yuna',
        'morning5_caught_yuna_by_seoyeon',
        'morning5_caught_yuna_by_dain',
        'hidden_homeroom_d5_choice'
    ];
    const localizedCopies = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'].map(loadLocaleCopy);

    assert.equal(expandedSceneIds.length, 44);
    for (const sceneId of expandedSceneIds) {
        const scene = scenes[sceneId];
        assert.equal(scene?.choices?.length, 4, `${sceneId} must expose four choices`);
        for (const trap of scene.choices.slice(2)) {
            const deltas = Object.values(trap.stats || {})
                .map(stat => Number(stat?.affinity))
                .filter(Number.isFinite);
            assert.ok(deltas.length > 0, `${sceneId} traps must change affinity`);
            assert.ok(deltas.every(value => value < 0), `${sceneId} traps must be strictly negative`);
        }
        for (const copy of localizedCopies) {
            assert.equal(copy[sceneId]?.choices?.length, 4, `${sceneId} must have four choices in every locale`);
            assert.ok(copy[sceneId].choices.slice(2).every(choice => choice.trim().length > 0));
        }
    }

    const remainingTwoChoiceAffinityScreens = Object.entries(scenes)
        .filter(([, scene]) => scene.choices?.length === 2)
        .filter(([, scene]) => scene.choices.some(choice =>
            Object.values(choice.stats || {}).some(stat => Number(stat?.affinity) !== 0)
        ))
        .map(([sceneId]) => sceneId);
    assert.deepEqual(remainingTwoChoiceAffinityScreens, []);
});

test('the only remaining two-choice screens are deliberate structural binary decisions', () => {
    const remaining = Object.entries(scenes)
        .filter(([, scene]) => scene.choices?.length === 2);

    assert.equal(remaining.length, 37);
    for (const [sceneId, scene] of remaining) {
        assert.ok(
            /^forced_violation_day[1-5]_after_/.test(sceneId)
                || /^date_choice_(perfect|true)_/.test(sceneId)
                || sceneId === 'hidden_dual_route_choice',
            `${sceneId} is not an approved structural two-choice screen`
        );
        assert.equal(
            scene.choices.some(choice => Object.values(choice.stats || {})
                .some(stat => Number(stat?.affinity) !== 0)),
            false,
            `${sceneId} must remain affinity-neutral`
        );
    }
});

test('audited trap copy follows the selected intent into a matching reaction', () => {
    assert.deepEqual(korean.after_homeroom_honest_choice2.choices.slice(2), [
        '저만 특별히 챙겨주시는 거라고 생각해도 돼요?',
        '다음에도 선생님이 골라주신 걸로 부탁드릴게요'
    ]);
    assert.equal(korean.hidden_nurse_d2_choice1.choices[3], '선생님한테 치료받으면 다친 것도 나쁘진 않네요');
    assert.equal(korean.hidden_homeroom_d5_choice.choices[2], '어려운 부분은 선생님 의도일 테니 그대로 둘게요');

    assert.equal(scenes.lunch2_yuna_choice.choices[2].next, 'lunch2_yuna_trap_compare');
    assert.equal(scenes.lunch2_yuna_choice.choices[3].next, 'lunch2_yuna_trap_exclusive');
    assert.equal(scenes.lunch2_yuna_trap_compare.next, 'lunch2_yuna_c2_1');
    assert.equal(scenes.lunch2_yuna_trap_exclusive.next, 'lunch2_yuna_c2_1');
    assert.match(korean.lunch2_yuna_trap_compare.text, /비교할 일이 아니야/);
    assert.match(korean.lunch2_yuna_trap_exclusive.text, /내가 정해/);

    for (const [sceneId, character, flag] of [
        ['confess_seo_choice', 'Seoyeon', 'postponed_seoyeon'],
        ['confess_yuna_choice', 'Yuna', 'postponed_yuna'],
        ['confess_dain_choice', 'Dain', 'postponed_dain']
    ]) {
        for (const [index, penalty] of [[2, -4], [3, -5]]) {
            const choice = scenes[sceneId].choices[index];
            assert.equal(choice.stats[character].affinity, penalty);
            assert.equal(choice.next, `${sceneId.replace('_choice', '')}_no_2`);
            assert.ok(choice.setFlags.includes(flag));
        }
    }

    for (const copy of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'].map(loadLocaleCopy)) {
        assert.ok(copy.lunch2_yuna_trap_compare?.name && copy.lunch2_yuna_trap_compare?.text);
        assert.ok(copy.lunch2_yuna_trap_exclusive?.name && copy.lunch2_yuna_trap_exclusive?.text);
    }
});

test('two-option screens retain their original response and add the trap as a third choice', () => {
    const restoredOptions = [
        ['lunch_dain_choice', { Dain: 2 }, '아는 척한 거야.'],
        ['after_nurse_enter_choice', { Nurse: 2 }, '보건실은 조용하네요'],
        ['hidden_homeroom_d2_choice1', { Teacher: 2 }, '읽는 건 좋아해요'],
        ['lunch2_seo_choice', { Seoyeon: 2 }, '직접 닦을게'],
        ['after2_yuna_choice', { Yuna: 4 }, '조용해서 좋다'],
        ['hidden_homeroom_d4_cafe_choice', { Teacher: 4 }, '문예부 애들한테도 전부 보여주실 거죠?'],
        ['hidden_nurse_d4_name_choice', { Nurse: 2 }, '병원과 학교는 뭐가 제일 달라요?'],
        ['hidden_nurse_d4_choice', { Nurse: 2 }, '괜찮아요, 저 이만 갈게요'],
        ['date_seo_compliment_choice', { Seoyeon: 4 }, '신경 많이 썼다, 오늘.'],
        ['date_yuna_compliment_choice', { Yuna: 4 }, '오늘은 좀 달라 보이네.'],
        ['hidden_nurse_d5_choice', { Nurse: 4 }, '카드보다 상담실 예약 방법을 알려주세요.'],
        ['after5_last_chance_choice', {}, '아직 말하지 않는다']
    ];

    for (const [sceneId, effects, text] of restoredOptions) {
        assert.equal(scenes[sceneId]?.choices?.length, 3, `${sceneId} must expose the added trap separately`);
        const choice = scenes[sceneId].choices[1];
        for (const [character, affinity] of Object.entries(effects)) {
            assert.equal(choice.stats?.[character]?.affinity, affinity, `${sceneId} restored affinity drifted`);
        }
        assert.equal(korean[sceneId]?.choices?.[1], text, `${sceneId} restored Korean copy drifted`);
    }
});

test('ordinary safe-only dialogue screens add a localized third trap without changing the best route', () => {
    const traps = [
        ['after_hidden_homeroom_choice', 'Teacher', -2, '전학생이라고 특별히 챙기실 필요는 없는데요.', 'after_homeroom_choice_trap', 'teacher_worried.png'],
        ['hidden_homeroom_d2_choice2', 'Teacher', -3, '그럼 저한테 커피까지 주신 것도 업무예요?', 'hidden_homeroom_d2_choice2_trap', 'teacher_angry.png'],
        ['after2_seo_choice2', 'Seoyeon', -3, '이 정도는 혼자 마무리할 수 있지?', 'after2_seo_choice2_trap', 'seyoun_pout.png'],
        ['hidden_homeroom_d3_reveal_choice', 'Teacher', -4, '7년이면 이제 접을 때도 되지 않았어요?', 'hidden_homeroom_d3_reveal_choice_trap', 'teacher_sad.png'],
        ['hidden_nurse_d3_choice1', 'Nurse', -3, '병원이 싫어서 학교로 오신 거예요?', 'hidden_nurse_d3_choice1_c', 'nurse_worried.png'],
        ['hidden_nurse_d3_choice2', 'Nurse', -4, '다 말하고 나면 오히려 편해지지 않아요?', 'hidden_nurse_d3_choice2_c', 'nurse_worried.png'],
        ['hidden_homeroom_d4_choice', 'Teacher', -4, '저만 따로 불러내셔도 됐을 텐데요.', 'hidden_homeroom_d4_choice_trap', 'teacher_worried.png'],
        ['hidden_nurse_d4_morning_choice', 'Nurse', -5, '선생님한테만 말하면 안 돼요?', 'hidden_nurse_d4_morning_choice_trap', 'nurse_worried.png']
    ];
    const localizedCopies = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'].map(loadLocaleCopy);

    for (const [sceneId, character, penalty, text, reactionId, avatar] of traps) {
        const scene = scenes[sceneId];
        assert.equal(scene?.choices?.length, 3, `${sceneId} must offer three distinct tones`);
        assert.equal(scene.choices[2].stats?.[character]?.affinity, penalty);
        assert.equal(scene.choices[2].next, reactionId);
        assert.equal(korean[sceneId]?.choices?.[2], text);
        assert.ok(scenes[reactionId]?.character?.endsWith(avatar), `${reactionId} must use the matching reaction expression`);
        for (const copy of localizedCopies) {
            assert.equal(copy[sceneId]?.choices?.length, 3, `${sceneId} must have three choices in every locale`);
            assert.ok(copy[reactionId]?.name && copy[reactionId]?.text, `${reactionId} must be localized`);
        }
    }

    assert.deepEqual(korean.hidden_nurse_d3_choice1.choices, [
        '그때 무슨 일이 있었어요?',
        '말하기 힘드시면 안 하셔도 돼요.',
        '병원이 싫어서 학교로 오신 거예요?'
    ], 'the hospital follow-up must answer the preceding question coherently');
});

test('negative-choice screens stay distributed across every story day', () => {
    const expected = {
        1: { choiceScreens: 16, negativeScreens: 9 },
        2: { choiceScreens: 18, negativeScreens: 10 },
        3: { choiceScreens: 24, negativeScreens: 14 },
        4: { choiceScreens: 32, negativeScreens: 27 },
        5: { choiceScreens: 30, negativeScreens: 11 }
    };

    for (const [day, expectedCounts] of Object.entries(expected)) {
        const choiceScenes = Object.values(scenario[day] || {}).filter(scene => scene.choices?.length);
        const negativeScenes = choiceScenes.filter(scene => scene.choices.some(choice =>
            Object.values(choice.stats || {}).some(stat => Number(stat?.affinity) < 0)
        ));

        assert.deepEqual(
            { choiceScreens: choiceScenes.length, negativeScreens: negativeScenes.length },
            expectedCounts,
            `day ${day} negative-choice coverage drifted`
        );
    }
});

test('day 4 rival temptations use asymmetric relationship costs and stay localized', () => {
    const counteroffers = [
        {
            sceneId: 'wall_seo_glimpse_2',
            routeCharacter: 'Seoyeon',
            rivalCharacter: 'Dain',
            heldGain: 3,
            heldFlag: 'day4_held_route_seoyeon',
            temptedFlag: 'day4_took_dain_counteroffer',
            choices: ['공원으로 가서 서연과의 약속을 지킨다', '체육관으로 들어가 다인의 부탁을 받아준다']
        },
        {
            sceneId: 'wall_seo_yuna_tempt_2',
            routeCharacter: 'Seoyeon',
            rivalCharacter: 'Yuna',
            heldGain: 4,
            heldFlag: 'day4_held_route_seoyeon',
            temptedFlag: 'day4_took_yuna_counteroffer',
            choices: ['서연에게 답장하고 공원으로 간다', '별관으로 가서 유나 곁에 남는다']
        },
        {
            sceneId: 'wall_dain_seo_tempt_2',
            routeCharacter: 'Dain',
            rivalCharacter: 'Seoyeon',
            heldGain: 5,
            heldFlag: 'day4_held_route_dain',
            temptedFlag: 'day4_took_seoyeon_counteroffer',
            choices: ['다인에게 답장하고 체육관으로 간다', '서연을 따라 옥상에 올라가 손을 잡는다']
        },
        {
            sceneId: 'wall_dain_glimpse_4_c',
            routeCharacter: 'Dain',
            rivalCharacter: 'Yuna',
            heldGain: 5,
            heldFlag: 'day4_held_route_dain',
            temptedFlag: 'day4_took_yuna_counteroffer',
            choices: ['다인에게 답장하고 체육관으로 간다', '학교 후문으로 돌아가 유나 곁에 남는다']
        },
        {
            sceneId: 'wall_yuna_glimpse_3_b',
            routeCharacter: 'Yuna',
            rivalCharacter: 'Seoyeon',
            heldGain: 4,
            heldFlag: 'day4_held_route_yuna',
            temptedFlag: 'day4_took_seoyeon_counteroffer',
            choices: ['유나에게 답장하고 학교 후문으로 간다', '서연을 따라 옥상으로 올라가 손을 잡는다']
        },
        {
            sceneId: 'wall_yuna_dain_tempt_2',
            routeCharacter: 'Yuna',
            rivalCharacter: 'Dain',
            heldGain: 4,
            heldFlag: 'day4_held_route_yuna',
            temptedFlag: 'day4_took_dain_counteroffer',
            choices: ['유나에게 답장하고 학교 후문으로 간다', '체육관으로 들어가 다인의 부탁을 받아준다']
        }
    ];
    const localizedCopies = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'].map(loadLocaleCopy);

    for (const counteroffer of counteroffers) {
        const scene = scenes[counteroffer.sceneId];
        assert.equal(scene?.competitiveAffinity, true, `${counteroffer.sceneId} must stay marked as competitive`);
        assert.equal(scene?.choices?.length, 4, `${counteroffer.sceneId} must present two routes and two traps`);
        assert.equal(scene.choices[0].stats?.[counteroffer.routeCharacter]?.affinity, counteroffer.heldGain);
        assert.equal(scene.choices[0].stats?.[counteroffer.rivalCharacter]?.affinity, -6);
        assert.ok(scene.choices[0].setFlags?.includes(counteroffer.heldFlag));
        assert.equal(scene.choices[1].stats?.[counteroffer.rivalCharacter]?.affinity, 8);
        assert.equal(scene.choices[1].stats?.[counteroffer.routeCharacter]?.affinity, -10);
        assert.ok(scene.choices[1].setFlags?.includes(counteroffer.temptedFlag));
        assert.ok(scene.choices[1].setFlags?.includes('day4_counteroffer_penalty_deferred'));
        assert.deepEqual(korean[counteroffer.sceneId]?.choices?.slice(0, 2), counteroffer.choices);

        for (const choice of scene.choices) {
            const deltas = Object.values(choice.stats).map(stat => Number(stat.affinity));
            assert.equal(deltas.length, 2, `${counteroffer.sceneId} must affect exactly two rivals`);
            assert.ok(deltas.reduce((sum, value) => sum + value, 0) <= 0, `${counteroffer.sceneId} must not create net affinity`);
        }
        for (const copy of localizedCopies) {
            assert.equal(copy[counteroffer.sceneId]?.choices?.length, 4, `${counteroffer.sceneId} must exist in every locale`);
        }
    }
});

test('rival temptation CG rewards appear only after accepting the rival offer', () => {
    const acceptanceScenes = {
        wall_seo_glimpse_4: 'event_temptation_dain',
        wall_seo_yuna_tempt_accept: 'event_temptation_yuna',
        wall_dain_glimpse_4: 'event_temptation_yuna',
        wall_dain_seo_tempt_accept: 'event_temptation_seoyeon',
        wall_yuna_glimpse_4: 'event_temptation_seoyeon',
        wall_yuna_dain_tempt_accept: 'event_temptation_dain',
        day4_adult_counteroffer_accept_seoyeon: 'event_temptation_seoyeon',
        day4_adult_counteroffer_accept_dain: 'event_temptation_dain',
        day4_adult_counteroffer_accept_yuna: 'event_temptation_yuna'
    };
    const temptationCgIds = new Set(Object.values(acceptanceScenes));
    const actualUses = [];

    for (const [sceneId, scene] of Object.entries(scenes)) {
        const cgId = path.basename(scene.background || '', path.extname(scene.background || ''));
        if (temptationCgIds.has(cgId)) actualUses.push(sceneId);
    }

    assert.deepEqual(actualUses.sort(), Object.keys(acceptanceScenes).sort());
    for (const [sceneId, cgId] of Object.entries(acceptanceScenes)) {
        assert.equal(scenes[sceneId].background, `assets/images/background/${cgId}.png`);
        assert.equal(scenes[sceneId].character, null, `${sceneId} must display the CG without a sprite overlay`);

        const incomingChoices = Object.values(scenes)
            .flatMap(scene => scene.choices || [])
            .filter(choice => choice.next === sceneId || choice.affinityBranches?.some(branch => branch.next === sceneId));
        const expectedIncoming = sceneId.startsWith('day4_adult_counteroffer_accept_') ? 2 : 1;
        assert.equal(incomingChoices.length, expectedIncoming, `${sceneId} acceptance entry count drifted`);
        for (const incomingChoice of incomingChoices) {
            assert.ok(
                incomingChoice.setFlags?.some(flag => /^day4_took_.+_counteroffer$/.test(flag)),
                `${sceneId} must be gated by an accepted counteroffer`
            );
            assert.equal(incomingChoice.affinityBranches?.[0]?.minAffinity, 0, `${sceneId} must allow the CG after accepting a nonnegative rival offer`);
            assert.equal(incomingChoice.affinityBranches?.[0]?.next, sceneId);
            assert.match(incomingChoice.next, /^day4_(?:adult|student)_counteroffer_soft_/);
        }
    }
});

test('accepted temptations damage trust in two causal stages when the lead sees the notification', () => {
    const cases = [
        ['wall_seo_glimpse_2', 'Seoyeon', 'morning5_caught_seoyeon_by_dain', 'morning5_caught_seoyeon_honest', 'morning5_caught_seoyeon_lie'],
        ['wall_seo_yuna_tempt_2', 'Seoyeon', 'morning5_caught_seoyeon_by_yuna', 'morning5_caught_seoyeon_honest', 'morning5_caught_seoyeon_lie'],
        ['wall_dain_seo_tempt_2', 'Dain', 'morning5_caught_dain_by_seoyeon', 'morning5_caught_dain_honest', 'morning5_caught_dain_lie'],
        ['wall_dain_glimpse_4_c', 'Dain', 'morning5_caught_dain_by_yuna', 'morning5_caught_dain_honest', 'morning5_caught_dain_lie'],
        ['wall_yuna_glimpse_3_b', 'Yuna', 'morning5_caught_yuna_by_seoyeon', 'morning5_caught_yuna_honest', 'morning5_caught_yuna_lie'],
        ['wall_yuna_dain_tempt_2', 'Yuna', 'morning5_caught_yuna_by_dain', 'morning5_caught_yuna_honest', 'morning5_caught_yuna_lie']
    ];
    const localizedCopies = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'].map(loadLocaleCopy);

    assert.deepEqual(
        scenes.morning5_temptation_counteroffer_branch.branches.map(branch => branch.condition || 'fallback'),
        ['day4_counteroffer_target_teacher', 'day4_counteroffer_target_nurse', 'day4_took_seoyeon_counteroffer', 'day4_took_yuna_counteroffer', 'day4_took_dain_counteroffer', 'fallback']
    );
    assert.deepEqual(scenes.morning5_temptation_discovery_branch.branches, [
        { condition: 'day4_counteroffer_penalty_deferred', next: 'morning5_temptation_counteroffer_branch' },
        { next: 'morning5_committed_start' }
    ]);

    for (const [acceptSceneId, lead, caughtSceneId, honestNext, lieNext] of cases) {
        const acceptance = scenes[acceptSceneId].choices[1];
        const caught = scenes[caughtSceneId];
        assert.equal(acceptance.stats[lead].affinity, -10, `${acceptSceneId} must apply only the unanswered-message hurt`);
        assert.equal(caught.choices.length, 4, `${caughtSceneId} must allow honesty, a lie, and two deceptive traps`);
        assert.equal(caught.choices[0].next, honestNext);
        assert.equal(caught.choices[0].stats[lead].affinity, -40);
        assert.equal(caught.choices[1].next, lieNext);
        assert.equal(caught.choices[1].stats[lead].affinity, -50);
        assert.equal(acceptance.stats[lead].affinity + caught.choices[0].stats[lead].affinity, -50);
        assert.equal(acceptance.stats[lead].affinity + caught.choices[1].stats[lead].affinity, -60);

        for (const copy of localizedCopies) {
            assert.equal(copy[caughtSceneId]?.choices?.length, 4, `${caughtSceneId} choices must exist in every locale`);
            assert.ok(copy[honestNext]?.text, `${honestNext} text must exist in every locale`);
            assert.ok(copy[lieNext]?.text, `${lieNext} text must exist in every locale`);
        }
    }

    const adultCases = [
        ['day4_teacher_seoyeon_counteroffer', 'Teacher', 'morning5_caught_teacher_counteroffer', 'morning5_caught_teacher_honest', 'morning5_caught_teacher_lie'],
        ['day4_teacher_dain_counteroffer', 'Teacher', 'morning5_caught_teacher_counteroffer', 'morning5_caught_teacher_honest', 'morning5_caught_teacher_lie'],
        ['day4_teacher_yuna_counteroffer', 'Teacher', 'morning5_caught_teacher_counteroffer', 'morning5_caught_teacher_honest', 'morning5_caught_teacher_lie'],
        ['day4_nurse_seoyeon_counteroffer', 'Nurse', 'morning5_caught_nurse_counteroffer', 'morning5_caught_nurse_honest', 'morning5_caught_nurse_lie'],
        ['day4_nurse_dain_counteroffer', 'Nurse', 'morning5_caught_nurse_counteroffer', 'morning5_caught_nurse_honest', 'morning5_caught_nurse_lie'],
        ['day4_nurse_yuna_counteroffer', 'Nurse', 'morning5_caught_nurse_counteroffer', 'morning5_caught_nurse_honest', 'morning5_caught_nurse_lie']
    ];
    for (const [acceptSceneId, lead, caughtSceneId, honestNext, lieNext] of adultCases) {
        const acceptance = scenes[acceptSceneId].choices[1];
        const caught = scenes[caughtSceneId];
        assert.equal(acceptance.stats[lead].affinity, -10);
        assert.equal(caught.choices[0].stats[lead].affinity, -40);
        assert.equal(caught.choices[1].stats[lead].affinity, -50);
        assert.equal(acceptance.stats[lead].affinity + caught.choices[0].stats[lead].affinity, -50);
        assert.equal(acceptance.stats[lead].affinity + caught.choices[1].stats[lead].affinity, -60);
        for (const copy of localizedCopies) {
            assert.equal(copy[acceptSceneId]?.choices?.length, 4, `${acceptSceneId} choices must exist in every locale`);
            assert.equal(copy[caughtSceneId]?.choices?.length, 4, `${caughtSceneId} choices must exist in every locale`);
            assert.ok(copy[honestNext]?.text, `${honestNext} text must exist in every locale`);
            assert.ok(copy[lieNext]?.text, `${lieNext} text must exist in every locale`);
        }
    }

    const rankedRivals = [
        ...scenes.wall_seo_rival_rank.rankedRivalBranches,
        ...scenes.wall_dain_rival_rank.rankedRivalBranches,
        ...scenes.wall_yuna_rival_rank.rankedRivalBranches
    ].map(branch => branch.character);
    assert.equal(rankedRivals.includes('Teacher'), false);
    assert.equal(rankedRivals.includes('Nurse'), false);
});

test('new temptation and bittersweet CGs are registered and localized in every gallery', () => {
    const source = fs.readFileSync(path.join(ROOT, 'assets', 'js', 'gallery-data.js'), 'utf8');
    const context = { window: {} };
    vm.runInNewContext(source, context, { filename: 'gallery-data.js' });
    const cgIds = [
        'event_temptation_seoyeon',
        'event_temptation_yuna',
        'event_temptation_dain',
        'ending_bittersweet_teacher',
        'ending_bittersweet_nurse'
    ];

    for (const locale of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt']) {
        for (const cgId of cgIds) {
            const entry = context.window.GalleryData.getCG(locale, cgId);
            assert.ok(entry, `${locale}:${cgId} must be present in the gallery`);
            assert.ok(entry.name && entry.description && entry.unlockHint, `${locale}:${cgId} copy must be complete`);
            assert.equal(fs.existsSync(path.join(ROOT, entry.file)), true, `${cgId} image must exist`);
        }
    }
});

test('competitive scenes retain both relationship tradeoffs and add two all-negative traps', () => {
    const competitiveScenes = Object.entries(scenes).filter(([, scene]) => scene.competitiveAffinity);
    assert.ok(competitiveScenes.length > 0, 'at least one competitive choice scene must exist');

    for (const [sceneId, scene] of competitiveScenes) {
        assert.equal(scene.choices?.length, 4, `${sceneId} must expose four choices`);
        for (const choice of scene.choices.slice(0, 2)) {
            const deltas = Object.values(choice.stats || {})
                .map(stat => Number(stat?.affinity))
                .filter(Number.isFinite);
            assert.equal(deltas.length, 2, `${sceneId} must affect exactly two characters`);
            assert.ok(deltas.some(value => value > 0) && deltas.some(value => value < 0), `${sceneId} must trade affinity between rivals`);
            assert.ok(deltas.reduce((sum, value) => sum + value, 0) <= 0, `${sceneId} must not create net affinity`);
        }
        for (const choice of scene.choices.slice(2)) {
            const deltas = Object.values(choice.stats || {})
                .map(stat => Number(stat?.affinity))
                .filter(Number.isFinite);
            assert.equal(deltas.length, 2, `${sceneId} traps must affect both characters`);
            assert.ok(deltas.every(value => value < 0), `${sceneId} traps must reduce both relationships`);
        }
    }
});

test('authored routes preserve the shared 120 ceiling after added group turns', () => {
    const optimalRouteEffects = {
        Seoyeon: [
            ['seoyeon_choice', 0], ['lunch_seo_3'], ['lunch_seo_choice', 0],
            ['lunch2_seo_2b'], ['lunch2_seo_choice', 0], ['after2_seo_1'],
            ['after2_seo_choice1', 0], ['after2_seo_choice2', 0], ['night2_reply_seo_1'],
            ['night2_reply_seo_react_high'], ['morning3_date_seo_choice', 0],
            ['lunch3_give_seo_1'], ['after3_seo_choice', 1], ['night3_dream_seo_bonus'],
            ['date_seo_compliment_choice', 1], ['date_seo_pretty_high'],
            ['wall_seo_hug_choice', 0], ['wall_seo_line_choice', 0],
            ['wall_seo_glimpse_2', 0], ['tour_seo_14']
        ],
        Yuna: [
            ['lunch_yuna_4'], ['lunch_yuna_choice', 0], ['lunch2_yuna_3_yuna'],
            ['lunch2_yuna_choice', 1], ['after2_yuna_2'], ['after2_yuna_choice', 0],
            ['night2_reply_yuna_1'], ['night2_reply_yuna_react_high'],
            ['morning3_date_yuna_choice', 0], ['lunch3_give_yuna_1'],
            ['after3_yuna_choice', 1], ['night3_dream_yuna_bonus'],
            ['date_yuna_compliment_choice', 1], ['date_yuna_pretty_high'],
            ['wall_yuna_choice', 0], ['wall_yuna_glimpse_3_b', 0], ['tour_yuna_11']
        ],
        Dain: [
            ['lunch_dain_2'], ['lunch_dain_choice', 0], ['lunch2_dain_2'],
            ['lunch2_dain_choice', 2], ['after2_dain_1'], ['night2_reply_dain_1'],
            ['night2_reply_dain_react_high'], ['morning3_date_dain_choice', 0],
            ['lunch3_give_dain_1'], ['after3_dain_choice', 1],
            ['after3_dain_dilemma_final', 1], ['night3_dream_dain_bonus'],
            ['date_dain_pretty_high'], ['wall_dain_choice', 1],
            ['wall_dain_glimpse_4_c', 0], ['tour_dain_end']
        ],
        Teacher: [
            ['after_hidden_homeroom_choice', 1], ['after_homeroom_honest_choice2', 0],
            ['hidden_homeroom_d2_choice1', 0], ['hidden_homeroom_d2_choice2', 0],
            ['hidden_homeroom_d3_choice', 0], ['hidden_homeroom_d3_reveal_choice', 0],
            ['hidden_homeroom_d4_choice', 0], ['hidden_homeroom_d4_cafe_choice', 0],
            ['hidden_homeroom_d5_choice', 1], ['hidden_homeroom_d5_8']
        ],
        Nurse: [
            ['after_nurse_enter_2'], ['after_nurse_enter_choice', 0],
            ['hidden_nurse_d2_choice1', 0], ['hidden_nurse_d2_choice2', 0],
            ['hidden_nurse_d3_choice1', 0], ['hidden_nurse_d3_choice2', 0],
            ['hidden_nurse_d4_morning_choice', 0], ['hidden_nurse_d4_name_choice', 0],
            ['hidden_nurse_d4_choice', 0], ['hidden_nurse_d5_choice', 0],
            ['hidden_nurse_d5_7']
        ]
    };

    const expectedTotals = { Seoyeon: 71, Yuna: 71, Dain: 72, Teacher: 69, Nurse: 69 };
    for (const [character, effects] of Object.entries(optimalRouteEffects)) {
        const total = effects.reduce((sum, [sceneId, choiceIndex]) => {
            const source = Number.isInteger(choiceIndex) ? scenes[sceneId]?.choices?.[choiceIndex] : scenes[sceneId];
            const affinity = Number(source?.stats?.[character]?.affinity);
            assert.ok(Number.isFinite(affinity) && affinity > 0, `${sceneId} must grant ${character} positive affinity`);
            return sum + affinity;
        }, 0);
        assert.equal(total, expectedTotals[character], `${character} optimal authored route budget drifted`);
    }

    assert.equal(scenes.after2_seo_1.stats.Seoyeon.affinity, 3);
    assert.equal(scenes.after2_yuna_2.stats.Yuna.affinity, 3);
    assert.equal(scenes.after2_dain_1.stats.Dain.affinity, 3);
    assert.equal(scenes.hidden_homeroom_d2_choice1.choices[0].stats.Teacher.affinity, 5);
    assert.equal(scenes.hidden_nurse_d2_choice1.choices[0].stats.Nurse.affinity, 5);
    assert.equal(scenes.after3_seo_choice.choices[1].stats.Seoyeon.affinity, 9);
    assert.equal(scenes.wall_seo_line_choice.choices[0].stats.Seoyeon.affinity, 6);
    assert.equal(scenes.wall_seo_line_choice.choices[1].stats.Seoyeon.affinity, 6);
    assert.equal(scenes.wall_seo_glimpse_2.choices[0].stats.Seoyeon.affinity, 3);
    assert.equal(scenes.tour_seo_14.stats.Seoyeon.affinity, 1);
    assert.equal(scenes.tour_yuna_11.stats.Yuna.affinity, 1);
    assert.equal(scenes.tour_dain_end.stats.Dain.affinity, 3);
    assert.equal(scenes.after3_yuna_choice.choices[1].stats.Yuna.affinity, 10);
    assert.equal(scenes.wall_yuna_choice.choices[0].stats.Yuna.affinity, 4);
    assert.equal(scenes.after3_dain_choice.choices[1].stats.Dain.affinity, 10);
    assert.equal(scenes.hidden_homeroom_d3_choice.choices[0].stats.Teacher.affinity, 6);
    assert.equal(scenes.hidden_nurse_d3_choice1.choices[0].stats.Nurse.affinity, 3);
    assert.ok(scenes.after3_dain_dilemma_final.choices[1].setFlags.includes('dain_planned_nurse_visit'));
    assert.equal(scenes.after3_dain_dilemma_final.choices[1].setFlags.includes('ignored_dain_knee'), false);
    assert.equal(korean.after3_dain_dilemma_final.choices[1], '알겠어. 네가 직접 말해. 대신 보건실엔 같이 갈게.');
    assert.equal(korean.after3_dain_choice1_react3.text, '고마워. 보건실 갈 때... 옆에 있어 줘.');
    assert.equal(scenes.wall_dain_choice.choices[1].stats.Dain.affinity, 5);
    assert.equal(scenes.hidden_homeroom_d4_choice.choices[0].stats.Teacher.affinity, 5);
    assert.equal(scenes.hidden_homeroom_d4_cafe_choice.choices[0].stats.Teacher.affinity, 7);
    assert.equal(scenes.hidden_homeroom_d5_choice.choices[1].stats.Teacher.affinity, 9);
    assert.equal(scenes.hidden_nurse_d4_name_choice.choices[0].stats.Nurse.affinity, 4);
    assert.equal(scenes.hidden_nurse_d4_choice.choices[0].stats.Nurse.affinity, 5);
    assert.equal(scenes.hidden_nurse_d5_choice.choices[0].stats.Nurse.affinity, 5);
    assert.equal(scenes.hidden_homeroom_d5_8.stats.Teacher.affinity, 10);
    assert.equal(scenes.hidden_nurse_d5_7.stats.Nurse.affinity, 10);
    assert.equal(scenes.hidden_nurse_d5_7_both.stats.Nurse.affinity, 10);
});

test('every after-ending free-talk scene locks affinity changes', () => {
    const endingFreeTalkScenes = Object.entries(scenes).filter(([sceneId, scene]) => (
        /^day5_(?:seo|yuna|dain|teacher|nurse)_ending_freetalk_(?!intro|router)/.test(sceneId)
        && scene?.type === 'free_talk'
    ));

    assert.equal(endingFreeTalkScenes.length, 23);
    for (const [sceneId, scene] of endingFreeTalkScenes) {
        assert.equal(scene.affinityLocked, true, `${sceneId} must not change affinity`);
    }
});

test('personal free-talk routes keep earning positive affinity without a lifetime cap', () => {
    const personalFreeTalkRoutes = {
        Seoyeon: ['lunch_seo_freetalk', 'night2_seo_freetalk', 'after3_seo_freetalk', 'wall_seo_freetalk'],
        Yuna: ['lunch_yuna_freetalk', 'night2_yuna_freetalk', 'after3_yuna_freetalk', 'wall_yuna_freetalk'],
        Dain: ['lunch_dain_freetalk', 'night2_dain_freetalk', 'after3_dain_freetalk', 'wall_dain_freetalk'],
        Teacher: ['after_homeroom_freetalk', 'hidden_homeroom_d2_freetalk', 'hidden_homeroom_d3_freetalk', 'hidden_homeroom_d4_freetalk'],
        Nurse: ['after_nurse_freetalk', 'hidden_nurse_d2_freetalk', 'hidden_nurse_d3_freetalk', 'hidden_nurse_d4_freetalk'],
        Haeun: ['haeun_freetalk']
    };
    const authoredMaximum = { Seoyeon: 71, Yuna: 71, Dain: 72, Teacher: 69, Nurse: 69, Haeun: 0 };
    const expectedBalance = {
        Seoyeon: { authored: 71, freeTalk: 36, theoretical: 107, stored: 100 },
        Yuna: { authored: 71, freeTalk: 36, theoretical: 107, stored: 100 },
        Dain: { authored: 72, freeTalk: 36, theoretical: 108, stored: 100 },
        Teacher: { authored: 69, freeTalk: 36, theoretical: 105, stored: 100 },
        Nurse: { authored: 69, freeTalk: 36, theoretical: 105, stored: 100 },
        Haeun: { authored: 0, freeTalk: 15, theoretical: 15, stored: 15 }
    };

    const actualBalance = {};
    for (const [character, sceneIds] of Object.entries(personalFreeTalkRoutes)) {
        const turns = sceneIds.reduce((sum, sceneId) => {
            const scene = scenes[sceneId];
            assert.equal(scene?.type, 'free_talk', `${sceneId} must remain a personal free-talk scene`);
            assert.ok(Number.isInteger(scene.maxTurns) && scene.maxTurns > 0, `${sceneId} must have a positive turn limit`);
            return sum + scene.maxTurns;
        }, 0);

        let affinity = 0;
        for (let turn = 0; turn < turns; turn += 1) {
            const gain = freeTalkCore.normalizeStoryFreeTalkAffinityChange(5, affinity);
            affinity += gain;
        }

        const authored = authoredMaximum[character];
        const theoretical = authored + affinity;
        actualBalance[character] = {
            authored,
            freeTalk: affinity,
            theoretical,
            stored: Math.min(100, theoretical)
        };
    }

    assert.deepEqual(actualBalance, expectedBalance);
});

test('optimal routes preserve the 120 ceiling after affinity-locked ending free talk', () => {
    const routes = {
        Seoyeon: [
            ['authored', 10], ['free', 'lunch_seo_freetalk'],
            ['authored', 21], ['group', 'after2_group_seoyeon_companion'],
            ['authored', 3], ['free', 'night2_seo_freetalk'],
            ['authored', 17], ['free', 'after3_seo_freetalk'], ['group', 'after3_group_teacher_companion'],
            ['authored', 1],
            ['authored', 18], ['free', 'wall_seo_freetalk'],
            ['authored', 1], ['ending'], ['free', 'day5_seo_ending_freetalk_perfect']
        ],
        Yuna: [
            ['authored', 8], ['free', 'lunch_yuna_freetalk'],
            ['authored', 19], ['group', 'after2_group_yuna_companion'],
            ['authored', 5], ['free', 'night2_yuna_freetalk'],
            ['authored', 19], ['free', 'after3_yuna_freetalk'], ['group', 'after3_group_teacher_companion'],
            ['authored', 4],
            ['authored', 15], ['free', 'wall_yuna_freetalk'],
            ['authored', 1], ['ending'], ['free', 'day5_yuna_ending_freetalk_perfect']
        ],
        Dain: [
            ['authored', 13], ['free', 'lunch_dain_freetalk'],
            ['authored', 13], ['group', 'after2_group_dain_companion'],
            ['authored', 6], ['free', 'night2_dain_freetalk'],
            ['authored', 23], ['free', 'after3_dain_freetalk'], ['group', 'after3_group_teacher_companion'],
            ['authored', 2],
            ['authored', 12], ['free', 'wall_dain_freetalk'],
            ['authored', 3], ['ending'], ['free', 'day5_dain_ending_freetalk_perfect']
        ],
        Teacher: [
            ['authored', 14], ['free', 'after_homeroom_freetalk'],
            ['authored', 11], ['free', 'hidden_homeroom_d2_freetalk'], ['group', 'after2_group_seoyeon_companion'],
            ['authored', 13], ['free', 'hidden_homeroom_d3_freetalk'], ['group', 'after3_group_teacher_companion'],
            ['authored', 12], ['free', 'hidden_homeroom_d4_freetalk'],
            ['authored', 19], ['ending'], ['free', 'day5_teacher_ending_freetalk_perfect']
        ],
        Nurse: [
            ['authored', 14], ['free', 'after_nurse_freetalk'],
            ['authored', 11], ['free', 'hidden_nurse_d2_freetalk'], ['group', 'after2_group_seoyeon_companion'],
            ['authored', 12], ['free', 'hidden_nurse_d3_freetalk'], ['group', 'after3_group_nurse_companion'],
            ['authored', 17], ['free', 'hidden_nurse_d4_freetalk'],
            ['authored', 15], ['ending'], ['free', 'day5_nurse_ending_freetalk_perfect']
        ]
    };
    const expected = {
        Seoyeon: { authored: 71, freeTalk: 49, preEnding: 120, theoretical: 120 },
        Yuna: { authored: 71, freeTalk: 49, preEnding: 120, theoretical: 120 },
        Dain: { authored: 72, freeTalk: 48, preEnding: 120, theoretical: 120 },
        Teacher: { authored: 69, freeTalk: 51, preEnding: 120, theoretical: 120 },
        Nurse: { authored: 69, freeTalk: 51, preEnding: 120, theoretical: 120 }
    };

    for (const [character, steps] of Object.entries(routes)) {
        let affinity = 0;
        let authored = 0;
        let freeTalk = 0;
        let preEnding = null;

        for (const [type, value] of steps) {
            if (type === 'authored') {
                authored += value;
                affinity += value;
                continue;
            }
            if (type === 'ending') {
                preEnding = affinity;
                continue;
            }

            const scene = scenes[value];
            assert.equal(scene?.type, type === 'group' ? 'group_free_talk' : 'free_talk', `${value} type drifted`);
            assert.ok(Number.isInteger(scene.maxTurns) && scene.maxTurns > 0, `${value} must have a positive turn limit`);
            for (let turn = 0; turn < scene.maxTurns; turn += 1) {
                const gain = scene.affinityLocked === true
                    ? 0
                    : freeTalkCore.normalizeStoryFreeTalkAffinityChange(type === 'group' ? 3 : 5, affinity);
                affinity += gain;
                freeTalk += gain;
            }
        }

        assert.equal(authored, expected[character].authored, `${character} authored route total drifted`);
        assert.equal(freeTalk, expected[character].freeTalk, `${character} combined free-talk maximum drifted`);
        assert.equal(preEnding, expected[character].preEnding, `${character} pre-ending maximum drifted`);
        assert.ok(preEnding >= 100, `${character} must be able to reach the perfect ending threshold`);
        assert.equal(affinity, expected[character].theoretical, `${character} theoretical maximum drifted`);
        assert.equal(Math.min(100, affinity), 100, `${character} stored affinity must cap at 100`);
    }
});

test('all five character routes share the 100/60/40/bittersweet ending tiers', () => {
    const routeChecks = [
        ['ending_aff_check_seo', 'Seoyeon', ['perfect_seo_1', 'true_seo_1', 'day5_ending_good', 'bitter_seo_1']],
        ['ending_aff_check_yuna', 'Yuna', ['perfect_yuna_1', 'true_yuna_1', 'day5_ending_good', 'bitter_yuna_1']],
        ['ending_aff_check_dain', 'Dain', ['perfect_dain_1', 'true_dain_1', 'day5_ending_good', 'bitter_dain_1']],
        ['hidden_perfect_homeroom_check', 'Teacher', ['hidden_perfect_homeroom_1', 'hidden_true_homeroom_1', 'hidden_good_homeroom_1', 'hidden_bitter_homeroom_1']],
        ['hidden_perfect_nurse_check', 'Nurse', ['hidden_perfect_nurse_1', 'hidden_true_nurse_1', 'hidden_good_nurse_1', 'hidden_bitter_nurse_1']]
    ];

    for (const [sceneId, character, targets] of routeChecks) {
        const scene = scenes[sceneId];
        assert.equal(scene?.affinityChar, character, `${sceneId} must evaluate ${character}`);
        assert.deepEqual(
            scene.affinityBranches.map(branch => [branch.minAffinity, branch.next]),
            [[100, targets[0]], [60, targets[1]], [40, targets[2]], [-100, targets[3]]],
            `${sceneId} ending thresholds drifted`
        );
        assert.equal(scene.next, targets[3], `${sceneId} must default to the bittersweet route`);
    }
});

test('ranked rival routing selects the strongest nonnegative rival without checking the lead rank', () => {
    const affinities = { Seoyeon: 80, Dain: 50, Yuna: 70 };
    const renderer = createSceneRenderer(affinities);

    assert.equal(renderer.resolveNextScene(scenes.wall_seo_rival_rank), 'wall_seo_yuna_tempt_1');
    affinities.Dain = 70;
    assert.equal(renderer.resolveNextScene(scenes.wall_seo_rival_rank), 'wall_seo_glimpse_1', 'authored order must break rival ties');

    Object.assign(affinities, { Seoyeon: 70, Dain: 80, Yuna: 60 });
    assert.equal(renderer.resolveNextScene(scenes.wall_dain_rival_rank), 'wall_dain_seo_tempt_1');
    Object.assign(affinities, { Seoyeon: 60, Dain: 70, Yuna: 80 });
    assert.equal(renderer.resolveNextScene(scenes.wall_yuna_rival_rank), 'wall_yuna_dain_tempt_1');

    Object.assign(affinities, { Seoyeon: 59, Dain: -1, Yuna: -30 });
    assert.equal(renderer.resolveNextScene(scenes.wall_seo_rival_rank), 'wall_seo_1', 'a rival below zero must skip the temptation and continue the lead route');
    Object.assign(affinities, { Seoyeon: 80, Dain: 0, Yuna: -20 });
    assert.equal(renderer.resolveNextScene(scenes.wall_seo_rival_rank), 'wall_seo_glimpse_1', 'a rival at zero must satisfy the threshold');
    Object.assign(affinities, { Seoyeon: 50, Dain: 80, Yuna: 30 });
    assert.equal(renderer.resolveNextScene(scenes.wall_seo_rival_rank), 'wall_seo_glimpse_1', 'a nonnegative rival may tempt a lower-ranked route lead');

    Object.assign(affinities, { Seoyeon: 50, Dain: 80, Yuna: 70 });
    assert.equal(renderer.resolveNextScene(scenes.wall_seo_rival_rank), 'wall_seo_glimpse_1', 'the route lead rank must not block the strongest rival');

    Object.assign(affinities, { Seoyeon: 80, Dain: -1, Yuna: -10 });
    assert.equal(renderer.resolveNextScene(scenes.wall_seo_rival_rank), 'wall_seo_1', 'negative rivals must not initiate an intimate counteroffer');
});

test('day-five continuity keeps availability, history, affinity, and final choice separate', () => {
    const acceptedHidden = createSceneRenderer({}, {
        homeroom_day5: true,
        day4_confession_accepted: true,
        route_seoyeon: true
    });
    assert.equal(acceptedHidden.resolveNextScene(scenes.after5_hidden_route_choice_check), 'ending_start');
    assert.equal(acceptedHidden.resolveNextScene(scenes.ending_start), 'ending_affinity_check');

    const waitedHidden = createSceneRenderer({}, { homeroom_day5: true, day4_waited: true, route_seoyeon: true });
    assert.equal(waitedHidden.resolveNextScene(scenes.after5_hidden_route_choice_check), 'after5_hidden_route_choice');
    assert.equal(scenes.after5_hidden_route_choice.choices.length, 3);
    assert.equal(scenes.after5_hidden_route_choice.choices[0].condition, undefined);
    assert.deepEqual([...scenes.after5_hidden_route_choice.choices[1].setFlags], ['hidden_route_chosen_teacher']);
    assert.deepEqual([...scenes.after5_hidden_route_choice.choices[2].setFlags], ['hidden_route_chosen_nurse']);

    const teacherChosen = createSceneRenderer({}, {
        homeroom_day5: true,
        day4_waited: true,
        hidden_route_chosen_teacher: true
    });
    assert.equal(teacherChosen.resolveNextScene(scenes.ending_start), 'hidden_perfect_homeroom_check');
    const nurseChosen = createSceneRenderer({}, {
        nurse_day5: true,
        day4_waited: true,
        hidden_route_chosen_nurse: true
    });
    assert.equal(nurseChosen.resolveNextScene(scenes.ending_start), 'hidden_perfect_nurse_check');

    for (const [character, sceneId, highNext, regularNext] of [
        ['Seoyeon', 'after5_farewell_seo_affinity_check', 'after5_farewell_seo_high_1', 'after5_farewell_seo_2'],
        ['Yuna', 'after5_farewell_yuna_affinity_check', 'after5_farewell_yuna_high_1', 'after5_farewell_yuna_2'],
        ['Dain', 'after5_farewell_dain_affinity_check', 'after5_farewell_dain_high_1', 'after5_farewell_dain_2']
    ]) {
        assert.equal(createSceneRenderer({ [character]: 80 }).resolveNextScene(scenes[sceneId]), highNext);
        assert.equal(createSceneRenderer({ [character]: 79 }).resolveNextScene(scenes[sceneId]), regularNext);
    }

    for (const [route, character] of [['seo', 'seoyeon'], ['dain', 'dain'], ['yuna', 'yuna']]) {
        const historyScene = scenes[`after5_last_chance_${route}_history_check`];
        assert.equal(
            createSceneRenderer({}, { [`postponed_${character}`]: true }).resolveNextScene(historyScene),
            `after5_last_chance_${route}_postponed`
        );
        assert.equal(
            createSceneRenderer({}, { [`day4_tentative_${character}`]: true }).resolveNextScene(historyScene),
            `after5_last_chance_${route}_tentative`
        );
        assert.equal(
            createSceneRenderer({}, { [`day4_distance_${character}`]: true }).resolveNextScene(historyScene),
            `after5_last_chance_${route}_distance`
        );
    }

    assert.equal(createSceneRenderer({ Teacher: 60 }).resolveNextScene(scenes.after5_hidden_teacher_affinity_check), 'after5_hidden_teacher_high');
    assert.equal(createSceneRenderer({ Teacher: 40 }).resolveNextScene(scenes.after5_hidden_teacher_affinity_check), 'after5_hidden_teacher_mid');
    assert.equal(createSceneRenderer({ Nurse: 39 }).resolveNextScene(scenes.after5_hidden_nurse_affinity_check), 'after5_hidden_nurse_low');

    assert.equal(scenes.morning5_counteroffer_group_talk.next, 'morning5_counteroffer_choice');
    assert.deepEqual(
        scenes.morning5_counteroffer_choice.choices.map(choice => choice.setFlags[0]),
        ['day5_counteroffer_choice_lead', 'day5_counteroffer_choice_tempter', 'day5_counteroffer_choice_neither']
    );
    assert.deepEqual(
        scenes.ending_counteroffer_bitter.branches.slice(0, 3).map(branch => branch.condition),
        ['day5_counteroffer_choice_lead', 'day5_counteroffer_choice_tempter', 'day5_counteroffer_choice_neither']
    );

    const requiredCopy = [
        'day4_adult_counteroffer_soft_seoyeon',
        'morning5_counteroffer_choice',
        'after5_farewell_seo_high_1',
        'after5_hidden_teacher_high',
        'after5_last_chance_yuna_distance',
        'after5_hidden_return_to_park',
        'ending_counteroffer_choice_neither'
    ];
    for (const locale of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt']) {
        const localized = loadLocaleCopy(locale);
        for (const sceneId of requiredCopy) {
            assert.ok(localized[sceneId]?.text?.trim(), `${locale}:${sceneId} must be localized`);
        }
    }
});

test('live affinity guards reject negative relationships and provide localized low-affinity exits', () => {
    const guardedEntries = [
        ['hidden_homeroom_d2_1', 'Teacher', 0, 'hidden_homeroom_d2_low'],
        ['hidden_nurse_d2_1', 'Nurse', 0, 'hidden_nurse_d2_low'],
        ['hidden_homeroom_d3_1', 'Teacher', 0, 'hidden_homeroom_d3_low'],
        ['hidden_nurse_d3_1', 'Nurse', 0, 'hidden_nurse_d3_low'],
        ['morning3_date_seo_1', 'Seoyeon', 0, 'morning3_date_seo_low'],
        ['morning3_date_dain_1', 'Dain', 0, 'morning3_date_dain_low'],
        ['morning3_date_yuna_1', 'Yuna', 0, 'morning3_date_yuna_low'],
        ['hidden_homeroom_d4_1', 'Teacher', 0, 'hidden_homeroom_d4_low'],
        ['hidden_nurse_d4_morning_1', 'Nurse', 0, 'hidden_nurse_d4_low'],
        ['hidden_nurse_d4_1', 'Nurse', 0, 'hidden_nurse_d4_low'],
        ['date_seo_1', 'Seoyeon', 0, 'date_seo_low'],
        ['date_yuna_1', 'Yuna', 0, 'date_yuna_low'],
        ['date_dain_1', 'Dain', 0, 'date_dain_low'],
        ['confess_seo_2', 'Seoyeon', 0, 'confess_seo_low'],
        ['confess_yuna_1', 'Yuna', 0, 'confess_yuna_low'],
        ['confess_dain_1', 'Dain', 0, 'confess_dain_low'],
        ['hidden_homeroom_d5_1', 'Teacher', 15, 'hidden_homeroom_d5_low'],
        ['hidden_nurse_d5_1', 'Nurse', 15, 'hidden_nurse_d5_low'],
        ['tour_seo_1', 'Seoyeon', 40, 'tour_seo_low'],
        ['tour_yuna_1_check', 'Yuna', 40, 'tour_yuna_low'],
        ['tour_dain_1_check', 'Dain', 40, 'tour_dain_low'],
        ['after5_farewell_seo_1', 'Seoyeon', 40, 'after5_farewell_seo_low'],
        ['after5_farewell_yuna_1', 'Yuna', 40, 'after5_farewell_yuna_low'],
        ['after5_farewell_dain_1', 'Dain', 40, 'after5_farewell_dain_low']
    ];
    const localizedCopies = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'].map(loadLocaleCopy);
    const affinities = { Seoyeon: 0, Yuna: 0, Dain: 0, Teacher: 0, Nurse: 0 };
    const renderer = createSceneRenderer(affinities);

    for (const [sceneId, character, minAffinity, fallback] of guardedEntries) {
        const scene = scenes[sceneId];
        assert.deepEqual(scene?.affinityGuard, { character, minAffinity, fallback }, `${sceneId} guard drifted`);

        affinities[character] = minAffinity - 1;
        assert.equal(renderer.resolveAffinityGuard(scene), fallback, `${sceneId} must reject affinity below ${minAffinity}`);
        affinities[character] = minAffinity;
        assert.equal(renderer.resolveAffinityGuard(scene), null, `${sceneId} must allow affinity at ${minAffinity}`);

        for (const copy of localizedCopies) {
            assert.ok(copy[fallback]?.name && copy[fallback]?.text, `${fallback} must have complete copy in every locale`);
        }
    }
});

test('rival affinity is checked before the wall scene and free talk exits cleanly', () => {
    assert.equal(scenes.hidden_nurse_d3_freetalk.next, 'morning3_date_seo_1');
    assert.equal(scenes.morning3_date_seo_1.affinityGuard.minAffinity, 0);

    const studentRoutes = [
        ['seoyeon', 'seo'],
        ['dain', 'dain'],
        ['yuna', 'yuna']
    ];
    for (const [route, short] of studentRoutes) {
        const rankId = `wall_${short}_rival_rank`;
        const routeBranch = scenes.day4_student_night_branch.branches.find(branch => branch.condition === `route_${route}`);
        assert.equal(routeBranch.next, rankId);
        assert.equal(scenes[`wall_${short}_freetalk`].next, 'day4_student_return_home');
        assert.equal(scenes.day4_student_return_home.next, 'day4_hidden_msg_branch');
        assert.equal(scenes[rankId].minLeadAffinity, undefined);
        assert.equal(scenes[rankId].minRivalAffinity, 0);
        assert.equal(scenes[rankId].leadCharacter, undefined);
        assert.equal(scenes[rankId].maxLeadRank, undefined);
        assert.equal(scenes[rankId].rankedRivalFallback, `wall_${short}_1`);
    }

    for (const rankId of ['day4_adult_teacher_student_rank', 'day4_adult_nurse_student_rank']) {
        assert.equal(scenes[rankId].minLeadAffinity, undefined);
        assert.equal(scenes[rankId].minRivalAffinity, 0);
        assert.equal(scenes[rankId].leadCharacter, undefined);
        assert.equal(scenes[rankId].maxLeadRank, undefined);
        assert.equal(scenes[rankId].rankedRivalFallback, 'day4_student_night_branch');
    }
});

test('Haeun free talk branches by personal trust before rejoining the Seoyeon route', () => {
    const router = scenes.haeun_affinity_check;
    assert.equal(scenes.haeun_freetalk.next, 'haeun_affinity_check');
    assert.equal(scenes.haeun_freetalk.forcedSexualViolationNext, 'haeun_warn_8b');
    assert.equal(router.routeBeforeRender, true);
    assert.equal(router.affinityChar, 'Haeun');
    assert.deepEqual(
        router.affinityBranches.map(branch => [branch.minAffinity, branch.next]),
        [
            [8, 'haeun_affinity_high_1'],
            [0, 'haeun_affinity_neutral_1'],
            [-100, 'haeun_affinity_low_1']
        ]
    );

    const affinities = { Haeun: 8 };
    const renderer = createSceneRenderer(affinities);
    assert.equal(renderer.resolveNextScene(router), 'haeun_affinity_high_1');
    affinities.Haeun = 0;
    assert.equal(renderer.resolveNextScene(router), 'haeun_affinity_neutral_1');
    affinities.Haeun = -1;
    assert.equal(renderer.resolveNextScene(router), 'haeun_affinity_low_1');

    for (const copy of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'].map(loadLocaleCopy)) {
        for (const id of [
            'haeun_affinity_high_1', 'haeun_affinity_high_2',
            'haeun_affinity_neutral_1', 'haeun_affinity_neutral_2',
            'haeun_affinity_low_1', 'haeun_affinity_low_2'
        ]) {
            assert.ok(copy[id]?.name && copy[id]?.text, `${id} must be localized in every language`);
        }
    }
});

test('forced sexual violation aftermath covers every day and resumes every free-talk next scene', () => {
    const gameEngineSource = fs.readFileSync(path.join(ROOT, 'assets', 'js', 'modules', 'GameEngine.js'), 'utf8');
    assert.match(gameEngineSource, /if \(scene\.inheritVisualContext !== true\) \{/);

    const characterSlugs = {
        Seoyeon: 'seoyeon',
        Yuna: 'yuna',
        Dain: 'dain',
        Teacher: 'teacher',
        Nurse: 'nurse',
        Haeun: 'haeun'
    };
    function inferFreeTalkCharacter(sceneId, scene) {
        const identity = `${sceneId} ${scene.character || ''}`.toLowerCase();
        if (identity.includes('homeroom') || identity.includes('teacher')) return 'Teacher';
        if (identity.includes('nurse')) return 'Nurse';
        if (identity.includes('seo') || identity.includes('seyoun')) return 'Seoyeon';
        if (identity.includes('yuna')) return 'Yuna';
        if (identity.includes('dain')) return 'Dain';
        if (identity.includes('haeun')) return 'Haeun';
        return null;
    }

    const routes = [];
    for (let day = 1; day <= 5; day++) {
        const dayCharacters = new Set();
        for (const [freeTalkId, freeTalk] of Object.entries(scenario[day])) {
            if (freeTalk.type !== 'free_talk') continue;
            const character = inferFreeTalkCharacter(freeTalkId, freeTalk);
            assert.ok(character, `unable to infer free-talk character for ${freeTalkId}`);
            dayCharacters.add(character);
            routes.push([day, character, freeTalkId]);
        }
        const expectedCharacters = Object.keys(characterSlugs)
            .filter(character => character !== 'Haeun' || day === 3)
            .sort();
        assert.deepEqual([...dayCharacters].sort(), expectedCharacters,
            `day ${day} forced-violation coverage drifted`);
    }
    assert.equal(routes.length, 44, 'every authored main-story free talk must be covered');

    const localizedCopies = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'].map(loadLocaleCopy);

    for (const [day, character, freeTalkId] of routes) {
        const characterSlug = characterSlugs[character];
        const aftermathId = `forced_violation_day${day}_after_${characterSlug}`;
        const resumeId = `forced_violation_day${day}_resume`;
        const freeTalk = scenario[day][freeTalkId];
        const flags = {
            forced_sexual_violation: {
                character,
                type: 'molestation',
                sceneId: freeTalkId,
                day
            }
        };
        const renderer = createSceneRenderer({}, flags);
        renderer.currentSceneId = freeTalkId;

        assert.equal(renderer.resolveNextScene(freeTalk), aftermathId);
        assert.equal(flags.forced_sexual_violation.handled, true);
        const expectedReturnScene = freeTalk.forcedSexualViolationNext || freeTalk.next;
        assert.equal(flags.forced_sexual_violation.returnScene, expectedReturnScene);

        const aftermath = scenario[day][aftermathId];
        assert.equal(aftermath.runtimeEntrypoint, true);
        assert.equal(aftermath.inheritVisualContext, true);
        assert.equal(aftermath.choices.length, 2);
        assert.equal(aftermath.stats, undefined);
        for (const choice of aftermath.choices) {
            const reaction = scenario[day][choice.next];
            assert.equal(reaction.inheritVisualContext, true);
            assert.equal(reaction.next, resumeId);
            assert.equal(reaction.stats, undefined);
        }

        for (const copy of localizedCopies) {
            assert.ok(copy[aftermathId]?.name && copy[aftermathId]?.text);
            assert.equal(copy[aftermathId].choices?.length, 2);
            for (const choice of aftermath.choices) {
                assert.ok(copy[choice.next]?.name && copy[choice.next]?.text);
            }
        }

        assert.equal(renderer.resolveNextScene(scenario[day][resumeId]), expectedReturnScene);
        renderer.currentSceneId = freeTalkId;
        assert.equal(renderer.resolveNextScene(freeTalk), freeTalk.next, `${freeTalkId} aftermath must run only once`);
    }

    const staleFlags = {
        forced_sexual_violation: {
            character: 'Seoyeon',
            type: 'rape',
            sceneId: 'another_freetalk',
            day: 4
        }
    };
    const staleRenderer = createSceneRenderer({}, staleFlags);
    staleRenderer.currentSceneId = 'wall_seo_freetalk';
    assert.equal(staleRenderer.resolveNextScene(scenes.wall_seo_freetalk), scenes.wall_seo_freetalk.next);

    const invalidDayFlags = {
        forced_sexual_violation: {
            character: 'Seoyeon',
            type: 'rape',
            sceneId: 'lunch_seo_freetalk',
            day: 0
        }
    };
    const invalidDayRenderer = createSceneRenderer({}, invalidDayFlags);
    invalidDayRenderer.currentSceneId = 'lunch_seo_freetalk';
    assert.equal(
        invalidDayRenderer.resolveNextScene(scenes.lunch_seo_freetalk),
        scenes.lunch_seo_freetalk.next
    );
});

test('day-five mood uses the highest live affinity instead of a pseudo-character key', () => {
    const affinities = { Seoyeon: 82, Yuna: 25, Dain: -40, Teacher: 10, Nurse: 15 };
    const renderer = createSceneRenderer(affinities);

    assert.deepEqual(scenes.morning5_mood_check.affinityCandidates, ['Seoyeon', 'Yuna', 'Dain', 'Teacher', 'Nurse']);
    assert.equal(renderer.resolveNextScene(scenes.morning5_mood_check), 'morning5_mood_high');
    affinities.Seoyeon = 55;
    assert.equal(renderer.resolveNextScene(scenes.morning5_mood_check), 'morning5_mood_mid');
    affinities.Seoyeon = 35;
    assert.equal(renderer.resolveNextScene(scenes.morning5_mood_check), 'morning5_mood_low');
});

test('adult day-four routes use the strongest nonnegative student rival without rank gates', () => {
    const affinities = { Teacher: 80, Nurse: 70, Seoyeon: 55, Dain: 65, Yuna: 60 };
    const renderer = createSceneRenderer(affinities);

    assert.deepEqual(scenes.day4_night_branch.branches, [
        { condition: 'homeroom_day4', next: 'day4_adult_teacher_student_rank' },
        { condition: 'nurse_day4', next: 'day4_adult_nurse_student_rank' },
        { next: 'day4_student_night_branch' }
    ]);
    assert.equal(scenes.day4_adult_teacher_overall_rank, undefined);
    assert.equal(scenes.day4_adult_nurse_flag_check, undefined);
    assert.equal(scenes.day4_adult_nurse_overall_rank, undefined);
    assert.equal(renderer.resolveNextScene(scenes.day4_adult_teacher_student_rank), 'day4_teacher_dain_counteroffer');

    Object.assign(affinities, { Teacher: 75, Nurse: 85, Seoyeon: 70, Dain: 60, Yuna: 65 });
    assert.equal(renderer.resolveNextScene(scenes.day4_adult_teacher_student_rank), 'day4_teacher_seoyeon_counteroffer');
    assert.equal(renderer.resolveNextScene(scenes.day4_adult_nurse_student_rank), 'day4_nurse_seoyeon_counteroffer');

    Object.assign(affinities, { Teacher: 50, Nurse: 30, Seoyeon: 0, Dain: -10, Yuna: -20 });
    assert.equal(renderer.resolveNextScene(scenes.day4_adult_teacher_student_rank), 'day4_teacher_seoyeon_counteroffer', 'a student rival at zero may tempt the adult lead');

    Object.assign(affinities, { Teacher: 40, Nurse: 30, Seoyeon: 70, Dain: 65, Yuna: 10 });
    assert.equal(renderer.resolveNextScene(scenes.day4_adult_teacher_student_rank), 'day4_teacher_seoyeon_counteroffer', 'the adult lead rank must not block the strongest student rival');

    Object.assign(affinities, { Teacher: 85, Nurse: 30, Seoyeon: -1, Dain: -10, Yuna: -30 });
    assert.equal(renderer.resolveNextScene(scenes.day4_adult_teacher_student_rank), 'day4_student_night_branch', 'negative student rivals must not tempt an adult lead');
});

test('prior-lunch dialogue is reachable only through the flag that proves the lunch happened', () => {
    const branchScene = scenes.lunch2_seo_12;
    assert.deepEqual(branchScene.branches, [
        { condition: 'chose_dain_lunch', next: 'lunch2_seo_13' },
        { next: 'lunch2_seo_13b' }
    ]);
    assert.match(korean.lunch2_seo_13.text, /어제는 나랑 먹었잖아/);
    assert.doesNotMatch(korean.lunch2_seo_13b.text, /어제|나랑 먹었/);

    const flagProducers = Object.values(scenario[1])
        .flatMap(scene => scene.choices || [])
        .filter(choice => choice.setFlags?.includes('chose_dain_lunch'));
    assert.equal(flagProducers.length, 1);
    assert.equal(flagProducers[0].next, 'lunch_dain_1');
});

test('day 2 through 5 rivalry copy stays synchronized across every supported locale', () => {
    const nodeIds = [
        'lunch2_seo_9', 'lunch2_seo_10', 'lunch2_seo_11', 'lunch2_seo_13',
        'lunch2_seo_13b', 'lunch2_seo_13b_b', 'lunch2_seo_14', 'lunch2_seo_16',
        'lunch2_seo_17', 'lunch2_seo_19', 'lunch2_seo_20',
        'after2_dain_rival_seo_low', 'after2_dain_rival_seo_mid', 'after2_dain_rival_seo_high',
        'after2_dain_rival_yuna_low', 'after2_dain_rival_yuna_mid', 'after2_dain_rival_yuna_high',
        'after2_seo_rival_dain_low', 'after2_seo_rival_dain_mid', 'after2_seo_rival_dain_high',
        'after2_seo_rival_yuna_low', 'after2_seo_rival_yuna_mid', 'after2_seo_rival_yuna_high',
        'after2_yuna_rival_dain_low', 'after2_yuna_rival_dain_mid', 'after2_yuna_rival_dain_high',
        'after2_yuna_rival_seo_low', 'after2_yuna_rival_seo_mid', 'after2_yuna_rival_seo_high',
        'morning3_date_seo_1', 'morning3_date_seo_choice', 'morning3_date_seo_accept',
        'morning3_date_seo_decline', 'morning3_date_dain_1', 'morning3_date_dain_2',
        'morning3_date_dain_choice', 'morning3_date_dain_accept', 'morning3_date_dain_decline',
        'morning3_date_yuna_1', 'morning3_date_yuna_1_b', 'morning3_date_yuna_2',
        'morning3_date_yuna_choice', 'morning3_date_yuna_accept',
        'lunch3_start', 'lunch3_start_2_b', 'lunch3_meal_1', 'lunch3_meal_3',
        'lunch3_meal_7_b',
        'after5_farewell_seo_4', 'after5_farewell_seo_6', 'after5_farewell_yuna_3',
        'after5_farewell_dain_2', 'after5_farewell_dain_4', 'after5_farewell_dain_4_c'
    ];
    const expectedDigests = {
        ko: 'b3281d8c667b0af80a4c29a02478fb2ddd0cb14ed773b48f9903ced6137eca77',
        en: 'c6c552353f4fd6b2ff8afe6e954c6bc1104f8750e168559dddb93ebab7cc4adb',
        ja: 'ff0cc94f7f3b5fc7fe80ccce53103dc5ca5d7b6e7ed7528fedd426a3190081f6',
        es: '1f683e4e13756b44ef335c8aa307259dd5a574cdf4d1ff56e3b26d82b02d487e',
        fr: 'e7cbcbc51cd0f8b54290a310a0edc76bd9c7e2fa0195af4747056c5d2d0c6632',
        de: '7ace751517f545c4596fa9541828a546f768b79f5d9870129fc3a20f47e02542',
        pt: '022b8b91941226ede4a05823b52c4a40e55875eaa12005b4ffe302e84849510d'
    };

    for (const [locale, expectedDigest] of Object.entries(expectedDigests)) {
        const copy = loadLocaleCopy(locale);
        const projection = nodeIds.map(nodeId => {
            const node = copy[nodeId];
            assert.ok(node, `${locale}:${nodeId} must exist`);
            return [nodeId, node.name, node.text, node.choices ?? null];
        });
        const digest = crypto.createHash('sha256')
            .update(JSON.stringify(projection))
            .digest('hex');
        assert.equal(digest, expectedDigest, `${locale} rivalry copy changed without synchronizing the locale set`);
    }
});

test('ranked temptation outcomes stay affinity-driven without a forced breakup flag', () => {
    const allSetFlags = Object.values(scenes)
        .flatMap(scene => [scene, ...(scene.choices || [])])
        .flatMap(item => item.setFlags || []);
    assert.equal(allSetFlags.some(flag => flag.startsWith('day4_betrayed_route_')), false);
    assert.equal(scenes.ending_start.branches.some(branch => branch.condition?.startsWith('day4_betrayed_route_')), false);
});

test('character-specific trap choices retain their understated Korean wording and penalties', () => {
    const traps = [
        ['lunch_seo_choice', 1, { Seoyeon: -2 }, '직접 먹는 게 더 맛있을걸'],
        ['lunch_dain_choice', 2, { Dain: -3 }, '그냥 분위기 맞춰 본 거야.'],
        ['lunch_yuna_choice', 1, { Yuna: -2 }, '조용히 책만 읽는 거 좋아하나 봐.'],
        ['after_homeroom_honest_choice2', 1, { Teacher: -2 }, '그럼 다음에도 주스로 부탁드릴게요, 선생님.'],
        ['after_nurse_enter_choice', 2, { Nurse: -3 }, '여긴 선생님 혼자 계셔서 편하시겠어요.'],
        ['hidden_homeroom_d2_choice1', 2, { Teacher: -3 }, '선생님은 어려운 책만 읽으시죠?'],
        ['lunch2_seo_choice', 2, { Seoyeon: -2 }, '이 정도는 혼자 할 수 있어.'],
        ['lunch2_yuna_choice', 0, { Yuna: -3 }, '그 사람, 지금은?'],
        ['hidden_nurse_d2_choice1', 1, { Nurse: -2 }, '밴드 하나도 꼼꼼하시네요.'],
        ['hidden_nurse_d2_choice2', 1, { Nurse: -3 }, '네, 안 봤어요'],
        ['after2_seo_choice1', 1, { Seoyeon: -3 }, '매일 하는 거면 익숙하겠네.'],
        ['after2_yuna_choice', 2, { Yuna: -3 }, '너랑 있으면 굳이 말 안 해도 돼서 편해.'],
        ['hidden_homeroom_d3_choice', 1, { Teacher: -3 }, '죄송합니다, 안 봤어요.'],
        ['hidden_homeroom_d4_cafe_choice', 2, { Teacher: -4 }, '선생님 글이면 애들도 좋다고 하겠네요.'],
        ['hidden_nurse_d4_name_choice', 2, { Nurse: -3 }, '학교에선 크게 다칠 일도 드물어서 마음은 좀 편하시겠어요.'],
        ['hidden_nurse_d4_choice', 2, { Nurse: -4 }, '선생님이 하시는 게 더 빠르겠어요.'],
        ['date_seo_compliment_choice', 2, { Seoyeon: -4 }, '역시 학생회장은 데이트도 빈틈없네.'],
        ['date_yuna_compliment_choice', 2, { Yuna: -3 }, '평소보다 훨씬 말 걸기 편해 보여.'],
        ['date_dain_compliment_choice', 1, { Dain: -3 }, '역시 운동복이 제일 너답다.'],
        ['wall_seo_line_choice', 2, { Seoyeon: -4 }, '굳이 설명 안 해도 알 것 같아.'],
        ['wall_dain_choice', 2, { Dain: -4 }, '공부터 정리하자. 내일 병원도 예약하고.'],
        ['hidden_nurse_d5_choice', 2, { Nurse: -6 }, '이 카드만 있으면 상담실까지는 안 가도 되겠네요.'],
        ['after5_last_chance_choice', 2, { '#{current_character}': -4 }, '오늘은 서로 생각할 시간을 갖자.']
    ];

    for (const [sceneId, choiceIndex, effects, text] of traps) {
        const choice = scenes[sceneId]?.choices?.[choiceIndex];
        assert.ok(choice, `${sceneId}[${choiceIndex}] is missing`);
        for (const [character, affinity] of Object.entries(effects)) {
            assert.equal(choice.stats?.[character]?.affinity, affinity, `${sceneId} ${character} affinity drifted`);
        }
        assert.equal(korean[sceneId]?.choices?.[choiceIndex], text, `${sceneId} Korean copy drifted`);
    }

    const reactions = {
        lunch_dain_trap_1: '관심 없으면 없다고 해. 맞춰주는 건 더 싫어.',
        after_nurse_enter_trap: '편해 보였구나. 여긴 조용할수록 긴장하는 곳인데.',
        hidden_homeroom_d2_choice1_trap: '선생님이라고 취향까지 어려울 필요는 없지.',
        lunch2_seo_trap_1: '*물티슈를 거둔다.* 그래. 혼자서 잘하니까.',
        after2_yuna_trap: '…여기가 아니라, 내 얘기인 줄 알았는데.',
        date_seo_role_trap: '*가방끈에서 손을 뗀다.* 오늘은 학생회장으로 나온 거 아닌데.',
        date_yuna_trap: '평소에는 말 걸기 불편했나 보네.',
        date_dain_bright: '*웃던 다인이 모자챙을 한 번 더 눌러쓴다.* ...그렇지. 운동복이 편하니까.',
        hidden_homeroom_d4_cafe_trap: '그런 합평이면 받을 이유가 없지. 선생님 글이라고 봐주는 건 싫어.',
        hidden_nurse_d4_name_trap: '크게 다치는 일만 일이면 좋겠네. 말 못 하고 버티는 애들이 더 많아.',
        hidden_nurse_d4_trap: '빠르긴 하겠지. 그래도 같이 하자고 물은 건 속도 때문이 아니었는데.',
        wall_seo_line_react_3: '아는 척하지 마.',
        wall_dain_lastspike_2: '*공 보관함을 보다가 다인이 고개를 든다.* 잠깐. 왜 네가 다 정해.',
        hidden_nurse_d5_choice_trap: '반대야. 혼자 버티라고 만든 카드가 아니야.',
        after5_defer_seo: '*펴고 있던 손을 천천히 거둔다.* 그래. 네가 정했으면.',
        after5_defer_dain: '*배구공을 다시 끌어안는다.* 그래. 오늘도 여기서 멈추는 거네.',
        after5_defer_yuna: '*책을 다시 품에 안는다.* 알겠어. 오늘도 여기서 멈추는 거네.'
    };

    for (const [sceneId, text] of Object.entries(reactions)) {
        assert.equal(korean[sceneId]?.text, text, `${sceneId} Korean reaction drifted`);
    }

    const authoredReactionAvatars = {
        lunch_dain_trap_1: 'dain_normal.png',
        after2_yuna_trap: 'yuna_normal.png',
        after2_yuna_trap_react: 'yuna_normal.png',
        date_seo_role_trap: 'seyoun_normal.png',
        date_yuna_trap: 'yuna_normal.png'
    };
    for (const [sceneId, filename] of Object.entries(authoredReactionAvatars)) {
        assert.ok(
            scenes[sceneId]?.character?.endsWith(filename),
            `${sceneId} must keep its deliberately authored reaction avatar`
        );
    }
});

test('every character has at least two direct negative affinity effects', () => {
    const negativeCounts = { Seoyeon: 0, Yuna: 0, Dain: 0, Teacher: 0, Nurse: 0 };

    for (const dayScenes of Object.values(scenario)) {
        for (const scene of Object.values(dayScenes || {})) {
            for (const choice of scene.choices || []) {
                for (const [character, stat] of Object.entries(choice.stats || {})) {
                    if (Number(stat?.affinity) < 0 && character in negativeCounts) negativeCounts[character]++;
                }
            }
        }
    }

    for (const [character, count] of Object.entries(negativeCounts)) {
        assert.ok(count >= 2, `${character} has only ${count} negative choice effects`);
    }
});
