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

    assert.equal(total, 273);
    assert.deepEqual(counts, { positive: 59, negative: 66, neutral: 123, mixed: 25 });
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
        1: { choiceScreens: 16, negativeScreens: 8 },
        2: { choiceScreens: 18, negativeScreens: 10 },
        3: { choiceScreens: 24, negativeScreens: 14 },
        4: { choiceScreens: 32, negativeScreens: 23 },
        5: { choiceScreens: 28, negativeScreens: 11 }
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
            heldGain: 4,
            heldFlag: 'day4_held_route_seoyeon',
            temptedFlag: 'day4_took_dain_counteroffer',
            choices: ['서연과 한 약속을 지키고 돌아간다', '체육관으로 들어가 다인의 부탁을 받아준다']
        },
        {
            sceneId: 'wall_seo_yuna_tempt_2',
            routeCharacter: 'Seoyeon',
            rivalCharacter: 'Yuna',
            heldGain: 4,
            heldFlag: 'day4_held_route_seoyeon',
            temptedFlag: 'day4_took_yuna_counteroffer',
            choices: ['서연에게 답장하고 약속대로 돌아간다', '별관으로 가서 유나 곁에 남는다']
        },
        {
            sceneId: 'wall_dain_seo_tempt_2',
            routeCharacter: 'Dain',
            rivalCharacter: 'Seoyeon',
            heldGain: 5,
            heldFlag: 'day4_held_route_dain',
            temptedFlag: 'day4_took_seoyeon_counteroffer',
            choices: ['다인에게 답장하고 약속대로 돌아간다', '서연을 따라 옥상에 올라가 손을 잡는다']
        },
        {
            sceneId: 'wall_dain_glimpse_4_c',
            routeCharacter: 'Dain',
            rivalCharacter: 'Yuna',
            heldGain: 5,
            heldFlag: 'day4_held_route_dain',
            temptedFlag: 'day4_took_yuna_counteroffer',
            choices: ['다인에게 답장하고 약속대로 돌아간다', '학교 후문으로 돌아가 유나 곁에 남는다']
        },
        {
            sceneId: 'wall_yuna_glimpse_3_b',
            routeCharacter: 'Yuna',
            rivalCharacter: 'Seoyeon',
            heldGain: 4,
            heldFlag: 'day4_held_route_yuna',
            temptedFlag: 'day4_took_seoyeon_counteroffer',
            choices: ['유나에게 답장하고 약속대로 돌아간다', '서연을 따라 옥상으로 올라가 손을 잡는다']
        },
        {
            sceneId: 'wall_yuna_dain_tempt_2',
            routeCharacter: 'Yuna',
            rivalCharacter: 'Dain',
            heldGain: 4,
            heldFlag: 'day4_held_route_yuna',
            temptedFlag: 'day4_took_dain_counteroffer',
            choices: ['유나에게 답장하고 약속대로 돌아간다', '체육관으로 들어가 다인의 부탁을 받아준다']
        }
    ];
    const localizedCopies = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'].map(loadLocaleCopy);

    for (const counteroffer of counteroffers) {
        const scene = scenes[counteroffer.sceneId];
        assert.equal(scene?.competitiveAffinity, true, `${counteroffer.sceneId} must stay marked as competitive`);
        assert.equal(scene?.choices?.length, 2, `${counteroffer.sceneId} must present the route and rival`);
        assert.equal(scene.choices[0].stats?.[counteroffer.routeCharacter]?.affinity, counteroffer.heldGain);
        assert.equal(scene.choices[0].stats?.[counteroffer.rivalCharacter]?.affinity, -6);
        assert.ok(scene.choices[0].setFlags?.includes(counteroffer.heldFlag));
        assert.equal(scene.choices[1].stats?.[counteroffer.rivalCharacter]?.affinity, 8);
        assert.equal(scene.choices[1].stats?.[counteroffer.routeCharacter]?.affinity, -10);
        assert.ok(scene.choices[1].setFlags?.includes(counteroffer.temptedFlag));
        assert.ok(scene.choices[1].setFlags?.includes('day4_counteroffer_penalty_deferred'));
        assert.deepEqual(korean[counteroffer.sceneId]?.choices, counteroffer.choices);

        for (const choice of scene.choices) {
            const deltas = Object.values(choice.stats).map(stat => Number(stat.affinity));
            assert.equal(deltas.length, 2, `${counteroffer.sceneId} must affect exactly two rivals`);
            assert.ok(deltas.reduce((sum, value) => sum + value, 0) <= 0, `${counteroffer.sceneId} must not create net affinity`);
        }
        for (const copy of localizedCopies) {
            assert.equal(copy[counteroffer.sceneId]?.choices?.length, 2, `${counteroffer.sceneId} must exist in every locale`);
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
            .filter(choice => choice.next === sceneId);
        const expectedIncoming = sceneId.startsWith('day4_adult_counteroffer_accept_') ? 2 : 1;
        assert.equal(incomingChoices.length, expectedIncoming, `${sceneId} acceptance entry count drifted`);
        for (const incomingChoice of incomingChoices) {
            assert.ok(
                incomingChoice.setFlags?.some(flag => /^day4_took_.+_counteroffer$/.test(flag)),
                `${sceneId} must be gated by an accepted counteroffer`
            );
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
        assert.equal(caught.choices.length, 2, `${caughtSceneId} must allow honesty or another lie`);
        assert.equal(caught.choices[0].next, honestNext);
        assert.equal(caught.choices[0].stats[lead].affinity, -40);
        assert.equal(caught.choices[1].next, lieNext);
        assert.equal(caught.choices[1].stats[lead].affinity, -50);
        assert.equal(acceptance.stats[lead].affinity + caught.choices[0].stats[lead].affinity, -50);
        assert.equal(acceptance.stats[lead].affinity + caught.choices[1].stats[lead].affinity, -60);

        for (const copy of localizedCopies) {
            assert.equal(copy[caughtSceneId]?.choices?.length, 2, `${caughtSceneId} choices must exist in every locale`);
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
            assert.equal(copy[acceptSceneId]?.choices?.length, 2, `${acceptSceneId} choices must exist in every locale`);
            assert.equal(copy[caughtSceneId]?.choices?.length, 2, `${caughtSceneId} choices must exist in every locale`);
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

test('every competitive scene remains a non-positive relationship tradeoff', () => {
    const competitiveScenes = Object.entries(scenes).filter(([, scene]) => scene.competitiveAffinity);
    assert.ok(competitiveScenes.length > 0, 'at least one competitive choice scene must exist');

    for (const [sceneId, scene] of competitiveScenes) {
        for (const choice of scene.choices || []) {
            const deltas = Object.values(choice.stats || {})
                .map(stat => Number(stat?.affinity))
                .filter(Number.isFinite);
            assert.equal(deltas.length, 2, `${sceneId} must affect exactly two characters`);
            assert.ok(deltas.some(value => value > 0) && deltas.some(value => value < 0), `${sceneId} must trade affinity between rivals`);
            assert.ok(deltas.reduce((sum, value) => sum + value, 0) <= 0, `${sceneId} must not create net affinity`);
        }
    }
});

test('optimal authored routes give every romance character 84 points before free talk', () => {
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

    const expectedTotals = { Seoyeon: 84, Yuna: 84, Dain: 84, Teacher: 84, Nurse: 84 };
    for (const [character, effects] of Object.entries(optimalRouteEffects)) {
        const total = effects.reduce((sum, [sceneId, choiceIndex]) => {
            const source = Number.isInteger(choiceIndex) ? scenes[sceneId]?.choices?.[choiceIndex] : scenes[sceneId];
            const affinity = Number(source?.stats?.[character]?.affinity);
            assert.ok(Number.isFinite(affinity) && affinity > 0, `${sceneId} must grant ${character} positive affinity`);
            return sum + affinity;
        }, 0);
        assert.equal(total, expectedTotals[character], `${character} optimal authored route budget drifted`);
    }

    assert.equal(scenes.after3_seo_choice.choices[1].stats.Seoyeon.affinity, 16);
    assert.equal(scenes.wall_seo_line_choice.choices[0].stats.Seoyeon.affinity, 6);
    assert.equal(scenes.wall_seo_line_choice.choices[1].stats.Seoyeon.affinity, 6);
    assert.equal(scenes.after3_yuna_choice.choices[1].stats.Yuna.affinity, 17);
    assert.equal(scenes.wall_yuna_choice.choices[0].stats.Yuna.affinity, 4);
    assert.equal(scenes.after3_dain_choice.choices[1].stats.Dain.affinity, 17);
    assert.equal(scenes.wall_dain_choice.choices[1].stats.Dain.affinity, 5);
    assert.equal(scenes.hidden_homeroom_d4_choice.choices[0].stats.Teacher.affinity, 7);
    assert.equal(scenes.hidden_homeroom_d4_cafe_choice.choices[0].stats.Teacher.affinity, 7);
    assert.equal(scenes.hidden_homeroom_d5_choice.choices[1].stats.Teacher.affinity, 11);
    assert.equal(scenes.hidden_nurse_d4_name_choice.choices[0].stats.Nurse.affinity, 4);
    assert.equal(scenes.hidden_nurse_d4_choice.choices[0].stats.Nurse.affinity, 7);
    assert.equal(scenes.hidden_nurse_d5_choice.choices[0].stats.Nurse.affinity, 7);
    assert.equal(scenes.hidden_homeroom_d5_8.stats.Teacher.affinity, 15);
    assert.equal(scenes.hidden_nurse_d5_7.stats.Nurse.affinity, 15);
    assert.equal(scenes.hidden_nurse_d5_7_both.stats.Nurse.affinity, 15);
});

test('playable free-talk capacity keeps the documented 84 + 22 = 106 balance', () => {
    const personalFreeTalkRoutes = {
        Seoyeon: ['lunch_seo_freetalk', 'night2_seo_freetalk', 'after3_seo_freetalk', 'wall_seo_freetalk', 'day5_seo_ending_freetalk_perfect'],
        Yuna: ['lunch_yuna_freetalk', 'night2_yuna_freetalk', 'after3_yuna_freetalk', 'wall_yuna_freetalk', 'day5_yuna_ending_freetalk_perfect'],
        Dain: ['lunch_dain_freetalk', 'night2_dain_freetalk', 'after3_dain_freetalk', 'wall_dain_freetalk', 'day5_dain_ending_freetalk_perfect'],
        Teacher: ['after_homeroom_freetalk', 'hidden_homeroom_d2_freetalk', 'hidden_homeroom_d3_freetalk', 'hidden_homeroom_d4_freetalk', 'day5_teacher_ending_freetalk_perfect'],
        Nurse: ['after_nurse_freetalk', 'hidden_nurse_d2_freetalk', 'hidden_nurse_d3_freetalk', 'hidden_nurse_d4_freetalk', 'day5_nurse_ending_freetalk_perfect'],
        Haeun: ['haeun_freetalk']
    };
    const authoredMaximum = { Seoyeon: 84, Yuna: 84, Dain: 84, Teacher: 84, Nurse: 84, Haeun: 0 };
    const expectedBalance = {
        Seoyeon: { authored: 84, freeTalk: 22, theoretical: 106, stored: 100 },
        Yuna: { authored: 84, freeTalk: 22, theoretical: 106, stored: 100 },
        Dain: { authored: 84, freeTalk: 22, theoretical: 106, stored: 100 },
        Teacher: { authored: 84, freeTalk: 22, theoretical: 106, stored: 100 },
        Nurse: { authored: 84, freeTalk: 22, theoretical: 106, stored: 100 },
        Haeun: { authored: 0, freeTalk: 9, theoretical: 9, stored: 9 }
    };

    const actualBalance = {};
    for (const [character, sceneIds] of Object.entries(personalFreeTalkRoutes)) {
        const turns = sceneIds.reduce((sum, sceneId) => {
            const scene = scenes[sceneId];
            assert.equal(scene?.type, 'free_talk', `${sceneId} must remain a personal free-talk scene`);
            assert.ok(Number.isInteger(scene.maxTurns) && scene.maxTurns > 0, `${sceneId} must have a positive turn limit`);
            return sum + scene.maxTurns;
        }, 0);

        let earned = 0;
        let affinity = 0;
        for (let turn = 0; turn < turns; turn += 1) {
            const gain = freeTalkCore.normalizeStoryFreeTalkAffinityChange(5, affinity, earned);
            affinity += gain;
            earned += gain;
        }

        const authored = authoredMaximum[character];
        const theoretical = authored + earned;
        actualBalance[character] = {
            authored,
            freeTalk: earned,
            theoretical,
            stored: Math.min(100, theoretical)
        };
    }

    assert.deepEqual(actualBalance, expectedBalance);
});

test('all five character routes share the 90/60/40/bittersweet ending tiers', () => {
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
            [[90, targets[0]], [60, targets[1]], [40, targets[2]], [-100, targets[3]]],
            `${sceneId} ending thresholds drifted`
        );
        assert.equal(scene.next, targets[3], `${sceneId} must default to the bittersweet route`);
    }
});

test('ranked rival routing uses the live second-highest affinity with deterministic ties', () => {
    const affinities = { Seoyeon: 80, Dain: 50, Yuna: 70 };
    const renderer = createSceneRenderer(affinities);

    assert.equal(renderer.resolveNextScene(scenes.wall_seo_rival_rank), 'wall_seo_yuna_tempt_1');
    affinities.Dain = 70;
    assert.equal(renderer.resolveNextScene(scenes.wall_seo_rival_rank), 'wall_seo_glimpse_1', 'authored order must break rival ties');

    Object.assign(affinities, { Seoyeon: 70, Dain: 80, Yuna: 60 });
    assert.equal(renderer.resolveNextScene(scenes.wall_dain_rival_rank), 'wall_dain_seo_tempt_1');
    Object.assign(affinities, { Seoyeon: 60, Dain: 70, Yuna: 80 });
    assert.equal(renderer.resolveNextScene(scenes.wall_yuna_rival_rank), 'wall_yuna_dain_tempt_1');

    Object.assign(affinities, { Seoyeon: 59, Dain: 20, Yuna: 30 });
    assert.equal(renderer.resolveNextScene(scenes.wall_seo_rival_rank), 'day4_hidden_msg_branch', 'low-affinity routes must skip the temptation');
    Object.assign(affinities, { Seoyeon: 70, Dain: 80, Yuna: 30 });
    assert.equal(renderer.resolveNextScene(scenes.wall_seo_rival_rank), 'day4_hidden_msg_branch', 'a route that is not the live leader must not claim to be one');

    Object.assign(affinities, { Seoyeon: 80, Dain: 59, Yuna: 20 });
    assert.equal(renderer.resolveNextScene(scenes.wall_seo_rival_rank), 'day4_hidden_msg_branch', 'rivals below 60 must not initiate an intimate counteroffer');
});

test('live affinity guards block personal scenes and provide localized low-affinity exits', () => {
    const guardedEntries = [
        ['hidden_homeroom_d2_1', 'Teacher', 15, 'hidden_homeroom_d2_low'],
        ['hidden_nurse_d2_1', 'Nurse', 15, 'hidden_nurse_d2_low'],
        ['hidden_homeroom_d3_1', 'Teacher', 15, 'hidden_homeroom_d3_low'],
        ['hidden_nurse_d3_1', 'Nurse', 15, 'hidden_nurse_d3_low'],
        ['morning3_date_seo_1', 'Seoyeon', 15, 'morning3_date_seo_low'],
        ['morning3_date_dain_1', 'Dain', 15, 'morning3_date_dain_low'],
        ['morning3_date_yuna_1', 'Yuna', 15, 'morning3_date_yuna_low'],
        ['hidden_homeroom_d4_1', 'Teacher', 15, 'hidden_homeroom_d4_low'],
        ['hidden_nurse_d4_morning_1', 'Nurse', 15, 'hidden_nurse_d4_low'],
        ['hidden_nurse_d4_1', 'Nurse', 15, 'hidden_nurse_d4_low'],
        ['date_seo_1', 'Seoyeon', 15, 'date_seo_low'],
        ['date_yuna_1', 'Yuna', 15, 'date_yuna_low'],
        ['date_dain_1', 'Dain', 15, 'date_dain_low'],
        ['confess_seo_2', 'Seoyeon', 40, 'confess_seo_low'],
        ['confess_yuna_1', 'Yuna', 40, 'confess_yuna_low'],
        ['confess_dain_1', 'Dain', 40, 'confess_dain_low'],
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

test('free-talk exits re-check live affinity before later romance or temptation scenes', () => {
    assert.equal(scenes.hidden_nurse_d3_freetalk.next, 'morning3_date_seo_1');
    assert.equal(scenes.morning3_date_seo_1.affinityGuard.minAffinity, 15);

    const studentRoutes = [
        ['wall_seo_freetalk', 'wall_seo_rival_rank'],
        ['wall_dain_freetalk', 'wall_dain_rival_rank'],
        ['wall_yuna_freetalk', 'wall_yuna_rival_rank']
    ];
    for (const [freeTalkId, rankId] of studentRoutes) {
        assert.equal(scenes[freeTalkId].next, rankId);
        assert.equal(scenes[rankId].minLeadAffinity, 60);
        assert.equal(scenes[rankId].minRivalAffinity, 60);
        assert.ok(scenes[rankId].rankedRivalFallback);
    }

    for (const rankId of ['day4_adult_teacher_student_rank', 'day4_adult_nurse_student_rank']) {
        assert.equal(scenes[rankId].minLeadAffinity, 60);
        assert.equal(scenes[rankId].minRivalAffinity, 60);
        assert.equal(scenes[rankId].rankedRivalFallback, 'day4_student_night_branch');
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
        assert.equal(flags.forced_sexual_violation.returnScene, freeTalk.next);

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

        assert.equal(renderer.resolveNextScene(scenario[day][resumeId]), freeTalk.next);
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

test('an adult day-four lead who is highest overall is tempted by the highest-affinity student', () => {
    const affinities = { Teacher: 80, Nurse: 70, Seoyeon: 55, Dain: 65, Yuna: 60 };
    const renderer = createSceneRenderer(affinities);

    assert.deepEqual(scenes.day4_night_branch.branches, [
        { condition: 'homeroom_day4', next: 'day4_adult_teacher_overall_rank' },
        { condition: 'nurse_day4', next: 'day4_adult_nurse_overall_rank' },
        { next: 'day4_student_night_branch' }
    ]);
    assert.equal(renderer.resolveNextScene(scenes.day4_adult_teacher_overall_rank), 'day4_adult_teacher_student_rank');
    assert.equal(renderer.resolveNextScene(scenes.day4_adult_teacher_student_rank), 'day4_teacher_dain_counteroffer');

    Object.assign(affinities, { Teacher: 75, Nurse: 85, Seoyeon: 70, Dain: 60, Yuna: 65 });
    assert.equal(renderer.resolveNextScene(scenes.day4_adult_teacher_overall_rank), 'day4_adult_nurse_flag_check');
    assert.equal(renderer.resolveNextScene(scenes.day4_adult_nurse_overall_rank), 'day4_adult_nurse_student_rank');
    assert.equal(renderer.resolveNextScene(scenes.day4_adult_nurse_student_rank), 'day4_nurse_seoyeon_counteroffer');

    Object.assign(affinities, { Teacher: 59, Nurse: 30, Seoyeon: 20, Dain: 15, Yuna: 10 });
    assert.equal(renderer.resolveNextScene(scenes.day4_adult_teacher_overall_rank), 'day4_adult_nurse_flag_check', 'adult leads below 60 must skip the temptation');

    Object.assign(affinities, { Teacher: 85, Nurse: 30, Seoyeon: 59, Dain: 20, Yuna: 10 });
    assert.equal(renderer.resolveNextScene(scenes.day4_adult_teacher_student_rank), 'day4_student_night_branch', 'student rivals below 60 must not tempt an adult lead');
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
        ko: 'dce2dd2800036771e0ea9f8be4c78780c9123e66a06d4c6ef60504e9b084d447',
        en: 'ed8f85e5336561aac8f1cce6db72f3e610701c5e2e692f69a5ea827f841bfd6d',
        ja: '1798763fe5743f3b0b77b27f1c7c0737228a343861c91ae3735253a5cefb05c5',
        es: 'e90e5fc8c28bfe916c9302d475b8fe898c0f547f0591b33d5b941b6cd421e18e',
        fr: 'cc84b6d96545c7a1d37149f7231273fc37c4f3994a16c96c7bf1756a2d0ca20d',
        de: '7cc4d4d6c4d342927abc9a25ac696627863137d738d200634e57af2a274110e3',
        pt: '3bfa5c0b5032d443714c97ff19a50d1f2c67f5c945121c31dc6e93c20c4e45e7'
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
        after5_defer_dain: '*배구공을 다시 끌어안는다.* ...그래. 기다린 쪽은 나였지만.',
        after5_defer_yuna: '*책을 다시 품에 안는다.* 알겠어. 기다리라고 한 건 너였지만.'
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
