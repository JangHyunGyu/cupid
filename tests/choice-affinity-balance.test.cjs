'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const SCENARIO_DIR = path.join(ROOT, 'assets', 'js', 'scenario');
const KO_DIR = path.join(ROOT, 'assets', 'js', 'i18n', 'ko');

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

function createSceneRenderer(affinities) {
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
        getFlag() {
            return false;
        }
    };
    return new context.window.SceneRenderer(stateManager, null, null);
}

const scenario = loadScenario();
const korean = loadKoreanCopy();
const scenes = Object.assign({}, ...Object.values(scenario));

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

    assert.equal(total, 165);
    assert.deepEqual(counts, { positive: 59, negative: 42, neutral: 51, mixed: 13 });
});

test('two-option screens retain their original response and add the trap as a third choice', () => {
    const restoredOptions = [
        ['lunch_dain_choice', { Dain: 3 }, '아는 척한 거야.'],
        ['after_nurse_enter_choice', { Nurse: 3 }, '보건실은 조용하네요'],
        ['hidden_homeroom_d2_choice1', { Teacher: 3 }, '읽는 건 좋아해요'],
        ['lunch2_seo_choice', { Seoyeon: 3 }, '직접 닦을게'],
        ['after2_yuna_choice', { Yuna: 5 }, '조용해서 좋다'],
        ['hidden_homeroom_d4_cafe_choice', { Teacher: 5 }, '문예부 애들한테도 전부 보여주실 거죠?'],
        ['hidden_nurse_d4_name_choice', { Nurse: 3 }, '병원과 학교는 뭐가 제일 달라요?'],
        ['hidden_nurse_d4_choice', { Nurse: 3 }, '괜찮아요, 저 이만 갈게요'],
        ['date_seo_compliment_choice', { Seoyeon: 5 }, '신경 많이 썼다, 오늘.'],
        ['date_yuna_compliment_choice', { Yuna: 5 }, '오늘은 좀 달라 보이네.'],
        ['hidden_nurse_d5_choice', { Nurse: 5 }, '카드보다 상담실 예약 방법을 알려주세요.'],
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

test('negative-choice screens stay distributed across every story day', () => {
    const expected = {
        1: { choiceScreens: 11, negativeScreens: 7 },
        2: { choiceScreens: 13, negativeScreens: 8 },
        3: { choiceScreens: 18, negativeScreens: 11 },
        4: { choiceScreens: 21, negativeScreens: 15 },
        5: { choiceScreens: 5, negativeScreens: 3 }
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

test('day 4 rival temptations are explicit, strictly zero-sum, and localized', () => {
    const counteroffers = [
        {
            sceneId: 'wall_seo_glimpse_2',
            routeCharacter: 'Seoyeon',
            rivalCharacter: 'Dain',
            heldFlag: 'day4_held_route_seoyeon',
            temptedFlag: 'day4_took_dain_counteroffer',
            betrayedFlag: 'day4_betrayed_route_seoyeon',
            choices: ['서연과 한 약속을 지키고 돌아간다', '체육관으로 들어가 다인의 부탁을 받아준다']
        },
        {
            sceneId: 'wall_seo_yuna_tempt_2',
            routeCharacter: 'Seoyeon',
            rivalCharacter: 'Yuna',
            heldFlag: 'day4_held_route_seoyeon',
            temptedFlag: 'day4_took_yuna_counteroffer',
            betrayedFlag: 'day4_betrayed_route_seoyeon',
            choices: ['서연에게 답장하고 약속대로 돌아간다', '별관으로 가서 유나 곁에 남는다']
        },
        {
            sceneId: 'wall_dain_seo_tempt_2',
            routeCharacter: 'Dain',
            rivalCharacter: 'Seoyeon',
            heldFlag: 'day4_held_route_dain',
            temptedFlag: 'day4_took_seoyeon_counteroffer',
            betrayedFlag: 'day4_betrayed_route_dain',
            choices: ['다인에게 답장하고 약속대로 돌아간다', '서연을 따라 옥상에 올라가 손을 잡는다']
        },
        {
            sceneId: 'wall_dain_glimpse_4_c',
            routeCharacter: 'Dain',
            rivalCharacter: 'Yuna',
            heldFlag: 'day4_held_route_dain',
            temptedFlag: 'day4_took_yuna_counteroffer',
            betrayedFlag: 'day4_betrayed_route_dain',
            choices: ['다인에게 답장하고 약속대로 돌아간다', '학교 후문으로 돌아가 유나 곁에 남는다']
        },
        {
            sceneId: 'wall_yuna_glimpse_3_b',
            routeCharacter: 'Yuna',
            rivalCharacter: 'Seoyeon',
            heldFlag: 'day4_held_route_yuna',
            temptedFlag: 'day4_took_seoyeon_counteroffer',
            betrayedFlag: 'day4_betrayed_route_yuna',
            choices: ['유나에게 답장하고 약속대로 돌아간다', '서연을 따라 옥상으로 올라가 손을 잡는다']
        },
        {
            sceneId: 'wall_yuna_dain_tempt_2',
            routeCharacter: 'Yuna',
            rivalCharacter: 'Dain',
            heldFlag: 'day4_held_route_yuna',
            temptedFlag: 'day4_took_dain_counteroffer',
            betrayedFlag: 'day4_betrayed_route_yuna',
            choices: ['유나에게 답장하고 약속대로 돌아간다', '체육관으로 들어가 다인의 부탁을 받아준다']
        }
    ];
    const localizedCopies = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'].map(loadLocaleCopy);

    for (const counteroffer of counteroffers) {
        const scene = scenes[counteroffer.sceneId];
        assert.equal(scene?.competitiveAffinity, true, `${counteroffer.sceneId} must stay marked as competitive`);
        assert.equal(scene?.choices?.length, 2, `${counteroffer.sceneId} must present the route and rival`);
        assert.equal(scene.choices[0].stats?.[counteroffer.routeCharacter]?.affinity, 6);
        assert.equal(scene.choices[0].stats?.[counteroffer.rivalCharacter]?.affinity, -6);
        assert.ok(scene.choices[0].setFlags?.includes(counteroffer.heldFlag));
        assert.equal(scene.choices[1].stats?.[counteroffer.rivalCharacter]?.affinity, 15);
        assert.equal(scene.choices[1].stats?.[counteroffer.routeCharacter]?.affinity, -15);
        assert.ok(scene.choices[1].setFlags?.includes(counteroffer.temptedFlag));
        assert.ok(scene.choices[1].setFlags?.includes(counteroffer.betrayedFlag));
        assert.deepEqual(korean[counteroffer.sceneId]?.choices, counteroffer.choices);

        for (const choice of scene.choices) {
            const deltas = Object.values(choice.stats).map(stat => Number(stat.affinity));
            assert.equal(deltas.length, 2, `${counteroffer.sceneId} must affect exactly two rivals`);
            assert.equal(deltas.reduce((sum, value) => sum + value, 0), 0, `${counteroffer.sceneId} must stay zero-sum`);
        }
        for (const copy of localizedCopies) {
            assert.equal(copy[counteroffer.sceneId]?.choices?.length, 2, `${counteroffer.sceneId} must exist in every locale`);
        }
    }
});

test('every scene marked as competitive remains exactly zero-sum', () => {
    const competitiveScenes = Object.entries(scenes).filter(([, scene]) => scene.competitiveAffinity);
    assert.ok(competitiveScenes.length > 0, 'at least one competitive choice scene must exist');

    for (const [sceneId, scene] of competitiveScenes) {
        for (const choice of scene.choices || []) {
            const deltas = Object.values(choice.stats || {})
                .map(stat => Number(stat?.affinity))
                .filter(Number.isFinite);
            assert.equal(deltas.length, 2, `${sceneId} must affect exactly two characters`);
            assert.ok(deltas.some(value => value > 0) && deltas.some(value => value < 0), `${sceneId} must trade affinity between rivals`);
            assert.equal(deltas.reduce((sum, value) => sum + value, 0), 0, `${sceneId} must remain zero-sum`);
        }
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

test('accepting a ranked temptation forces the selected route into a day 5 breakup', () => {
    const breakupRoutes = [
        ['day4_betrayed_route_seoyeon', 'day5_betrayal_break_seo'],
        ['day4_betrayed_route_dain', 'day5_betrayal_break_dain'],
        ['day4_betrayed_route_yuna', 'day5_betrayal_break_yuna']
    ];
    for (const [condition, next] of breakupRoutes) {
        assert.ok(scenes.ending_start.branches.some(branch => branch.condition === condition && branch.next === next));
        assert.equal(scenes[next].next, 'confess_fail_1');
    }
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
