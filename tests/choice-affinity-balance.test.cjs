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
    assert.deepEqual(counts, { positive: 61, negative: 28, neutral: 51, mixed: 1 });
});

test('character-specific trap choices retain their understated Korean wording and mild penalties', () => {
    const traps = [
        ['lunch_seo_choice', 1, 'Seoyeon', -2, '직접 먹는 게 더 맛있을걸'],
        ['after2_seo_choice1', 1, 'Seoyeon', -3, '매일 하는 거면 익숙하겠네.'],
        ['date_dain_compliment_choice', 1, 'Dain', -3, '역시 운동복이 제일 너답다.'],
        ['lunch_yuna_choice', 1, 'Yuna', -2, '조용히 책만 읽는 거 좋아하나 봐.'],
        ['lunch2_yuna_choice', 0, 'Yuna', -3, '그 사람, 지금은?'],
        ['after_homeroom_honest_choice2', 1, 'Teacher', -2, '그럼 다음에도 주스로 부탁드릴게요, 선생님.'],
        ['hidden_homeroom_d3_choice', 1, 'Teacher', -3, '죄송합니다, 안 봤어요.'],
        ['hidden_nurse_d2_choice1', 1, 'Nurse', -2, '밴드 하나도 꼼꼼하시네요.'],
        ['hidden_nurse_d2_choice2', 1, 'Nurse', -3, '네, 안 봤어요']
    ];

    for (const [sceneId, choiceIndex, character, affinity, text] of traps) {
        const choice = scenes[sceneId]?.choices?.[choiceIndex];
        assert.ok(choice, `${sceneId}[${choiceIndex}] is missing`);
        assert.equal(choice.stats?.[character]?.affinity, affinity, `${sceneId} affinity drifted`);
        assert.equal(korean[sceneId]?.choices?.[choiceIndex], text, `${sceneId} Korean copy drifted`);
    }

    assert.equal(
        korean.date_dain_bright?.text,
        '*웃던 다인이 모자챙을 한 번 더 눌러쓴다.* ...그렇지. 운동복이 편하니까.',
        'Dain trap reaction must reveal the disappointment without explaining the score'
    );
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
