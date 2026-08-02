'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

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

    assert.equal(total, 141);
    assert.deepEqual(counts, { positive: 48, negative: 42, neutral: 50, mixed: 1 });
});

test('negative-choice screens stay distributed across every story day', () => {
    const expected = {
        1: { choiceScreens: 11, negativeScreens: 7 },
        2: { choiceScreens: 13, negativeScreens: 8 },
        3: { choiceScreens: 18, negativeScreens: 11 },
        4: { choiceScreens: 15, negativeScreens: 9 },
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

test('character-specific trap choices retain their understated Korean wording and penalties', () => {
    const traps = [
        ['lunch_seo_choice', 1, { Seoyeon: -2 }, '직접 먹는 게 더 맛있을걸'],
        ['lunch_dain_choice', 1, { Dain: -3 }, '그냥 분위기 맞춰 본 거야.'],
        ['lunch_yuna_choice', 1, { Yuna: -2 }, '조용히 책만 읽는 거 좋아하나 봐.'],
        ['after_homeroom_honest_choice2', 1, { Teacher: -2 }, '그럼 다음에도 주스로 부탁드릴게요, 선생님.'],
        ['after_nurse_enter_choice', 1, { Nurse: -3 }, '여긴 선생님 혼자 계셔서 편하시겠어요.'],
        ['hidden_homeroom_d2_choice1', 1, { Teacher: -3 }, '선생님은 어려운 책만 읽으시죠?'],
        ['lunch2_seo_choice', 1, { Seoyeon: -2 }, '이 정도는 혼자 할 수 있어.'],
        ['lunch2_yuna_choice', 0, { Yuna: -3 }, '그 사람, 지금은?'],
        ['hidden_nurse_d2_choice1', 1, { Nurse: -2 }, '밴드 하나도 꼼꼼하시네요.'],
        ['hidden_nurse_d2_choice2', 1, { Nurse: -3 }, '네, 안 봤어요'],
        ['after2_seo_choice1', 1, { Seoyeon: -3 }, '매일 하는 거면 익숙하겠네.'],
        ['after2_yuna_choice', 1, { Yuna: -3 }, '너랑 있으면 굳이 말 안 해도 돼서 편해.'],
        ['hidden_homeroom_d3_choice', 1, { Teacher: -3 }, '죄송합니다, 안 봤어요.'],
        ['hidden_homeroom_d4_cafe_choice', 1, { Teacher: -4 }, '선생님 글이면 애들도 좋다고 하겠네요.'],
        ['hidden_nurse_d4_name_choice', 1, { Nurse: -3 }, '학교에선 크게 다칠 일도 드물어서 마음은 좀 편하시겠어요.'],
        ['hidden_nurse_d4_choice', 1, { Nurse: -4 }, '선생님이 하시는 게 더 빠르겠어요.'],
        ['date_seo_compliment_choice', 1, { Seoyeon: -4 }, '역시 학생회장은 데이트도 빈틈없네.'],
        ['date_yuna_compliment_choice', 1, { Yuna: -3 }, '오늘은 좀 달라 보이네.'],
        ['date_dain_compliment_choice', 1, { Dain: -3 }, '역시 운동복이 제일 너답다.'],
        ['wall_seo_line_choice', 2, { Seoyeon: -4 }, '굳이 설명 안 해도 알 것 같아.'],
        ['wall_dain_choice', 2, { Dain: -4 }, '공부터 정리하자. 내일 병원도 예약하고.'],
        ['hidden_nurse_d5_choice', 1, { Nurse: -6 }, '이 카드만 있으면 상담실까지는 안 가도 되겠네요.'],
        ['after5_last_chance_choice', 1, { '#{current_character}': -4 }, '지금은 분위기를 깨지 않는다.']
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
        lunch_dain_c2_1: '관심 없으면 없다고 해. 맞춰주는 건 더 싫어.',
        after_nurse_enter_choice_b: '편해 보였구나. 여긴 조용할수록 긴장하는 곳인데.',
        hidden_homeroom_d2_choice1_b: '선생님이라고 취향까지 어려울 필요는 없지.',
        after2_yuna_quiet: '…여기가 아니라, 내 얘기인 줄 알았는데.',
        date_seo_bright: '*가방끈에서 손을 뗀다.* 오늘은 학생회장으로 나온 거 아닌데.',
        date_dain_bright: '*웃던 다인이 모자챙을 한 번 더 눌러쓴다.* ...그렇지. 운동복이 편하니까.',
        hidden_homeroom_d4_cafe_choice_b: '그런 합평이면 받을 이유가 없지. 선생님 글이라고 봐주는 건 싫어.',
        hidden_nurse_d4_name_choice_b: '크게 다치는 일만 일이면 좋겠네. 말 못 하고 버티는 애들이 더 많아.',
        hidden_nurse_d4_pass: '빠르긴 하겠지. 그래도 같이 하자고 물은 건 속도 때문이 아니었는데.',
        wall_seo_line_react_3: '아는 척하지 마.',
        wall_dain_lastspike_2: '*공 보관함을 보다가 다인이 고개를 든다.* 잠깐. 왜 네가 다 정해.',
        hidden_nurse_d5_choice_b: '반대야. 혼자 버티라고 만든 카드가 아니야.'
    };

    for (const [sceneId, text] of Object.entries(reactions)) {
        assert.equal(korean[sceneId]?.text, text, `${sceneId} Korean reaction drifted`);
    }

    const authoredReactionAvatars = {
        lunch_dain_c2_1: 'dain_normal.png',
        after2_yuna_quiet: 'yuna_normal.png',
        after2_yuna_quiet_react: 'yuna_normal.png',
        date_seo_bright: 'seyoun_normal.png',
        date_yuna_bright: 'yuna_normal.png'
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
