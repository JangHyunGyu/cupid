#!/usr/bin/env node
'use strict';
// 하은 루트 호감도 예산 시뮬레이션 (2026-11-25, docs/haeun-balance-20261125.md).
// 실측 D1 턴 점수를 채점 시기와 입력 길이 구간별 히스토그램으로만 담았다(대화 내용과 사용자 식별값 없음).
// 스킨십 가드에 걸린 턴은 뺐다. 가드는 플레이어가 피할 수 있는 감점이고, 오탐은 같은 변경에서 고쳤다.
//   node scripts/haeun-balance-sim.cjs            전체 표
//   node scripts/haeun-balance-sim.cjs --runs=N   표본 수 변경 (기본 20000)
const RUNS = Number((process.argv.find(arg => arg.startsWith('--runs=')) || '').slice(7)) || 20000;

// 채점 시기: B2 = 2026-11-22 이후 한국어(현재 채점기), B1 = 11-20~21 한국어, A_ko = 10-17~10-31 한국어,
// A_other = 10-17~10-31 비한국어. 길이 구간: short 10자 이하, ordinary 11~30자, attentive 31~80자, devoted 81자 이상.
const HISTOGRAMS = {"B2":{"short":{"personal":{"-12":1,"-9":1,"-6":1,"0":44,"1":10,"3":1},"group":{"0":2}},"ordinary":{"personal":{"-10":2,"-6":2,"-4":1,"0":67,"1":58,"2":8},"group":{"-2":2,"0":14,"1":5,"2":1}},"attentive":{"personal":{"-18":1,"-7":1,"-3":3,"0":26,"1":65,"2":20,"3":1},"group":{"-10":1,"0":14,"1":12,"2":2,"3":1}},"devoted":{"personal":{"1":15,"2":11},"group":{"-2":1,"0":2,"1":4,"2":4}}},"B1":{"short":{"personal":{"0":8,"1":3,"2":4},"group":{}},"ordinary":{"personal":{"0":12,"1":16,"2":7},"group":{"0":7,"1":3}},"attentive":{"personal":{"-45":1,"0":6,"1":7,"2":13},"group":{"0":3,"1":8,"2":1}},"devoted":{"personal":{"1":2,"2":25},"group":{"1":1,"2":12}}},"A_ko":{"short":{"personal":{"-15":1,"-5":4,"-4":1,"-3":1,"-2":7,"0":81,"1":14,"2":13,"3":7},"group":{"0":1}},"ordinary":{"personal":{"-7":1,"-5":2,"-4":1,"-3":2,"-2":9,"0":32,"1":30,"2":28,"3":11},"group":{"-3":2,"-2":1,"-1":1,"0":16,"1":6,"2":7,"3":1}},"attentive":{"personal":{"-15":2,"-2":2,"0":5,"1":9,"2":20,"3":17},"group":{"-3":1,"-2":1,"0":8,"1":3,"2":8}},"devoted":{"personal":{"-7":1,"-5":1,"1":5,"2":2,"3":3},"group":{"0":3,"1":2,"2":4}}},"A_other":{"short":{"personal":{"-4":1,"-2":2,"-1":3,"0":19,"1":21,"2":8,"3":16},"group":{"0":3,"1":2,"3":4}},"ordinary":{"personal":{"-2":3,"-1":1,"0":11,"1":31,"2":17,"3":35},"group":{"0":8,"1":1,"2":3,"3":11}},"attentive":{"personal":{"-1":3,"0":19,"1":22,"2":22,"3":26},"group":{"0":1,"1":3,"2":3,"3":20}},"devoted":{"personal":{"-1":1,"0":5,"1":17,"2":15,"3":14},"group":{"1":4,"2":4,"3":17}}}};

// 2026-10-17 이후 실제 선택 분포(cupid_route_events choice:* 691건).
const CHOICES = {
    cheer: [[1, 223], [-1, 33]],
    notice: [[2, 55], [1, 90], [-1, 27], [-2, 70]],
    waver: [[2, 27], [1, 32], [-1, 32], [-2, 13]],
    guilt: [[3, 47], [2, 27], [-3, 8], [-2, 7]]
};
const POLICIES = {
    before: { label: '이전(142)', pre: 5, group: 0, declaration: 20, switchGroup: 0, private1: 0, private2: 0 },
    draft: { label: '첫 조정안(175)', pre: 6, group: 6, declaration: 20, switchGroup: 8, private1: 8, private2: 8 },
    mid172: { label: '중간(172)', pre: 6, group: 6, declaration: 20, switchGroup: 7, private1: 7, private2: 7 },
    after: { label: '담임 수준(151)', pre: 3, group: 3, declaration: 20, switchGroup: 4, private1: 4, private2: 4 }
};

function mulberry32(seed) {
    let state = seed >>> 0;
    return () => {
        state = (state + 0x6D2B79F5) >>> 0;
        let t = state;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}
function expand(histogram) {
    const values = [];
    for (const [score, count] of Object.entries(histogram || {})) {
        for (let index = 0; index < count; index++) values.push(Number(score));
    }
    return values;
}
function pools(regime, tier, wellBehaved) {
    const entry = HISTOGRAMS[regime][tier];
    const keep = value => !wellBehaved || value >= 0;
    let personal = expand(entry.personal).filter(keep);
    let group = expand(entry.group).filter(keep);
    const all = personal.concat(group);
    if (personal.length < 8) personal = all;
    if (group.length < 8) group = all;
    return { personal, group };
}
function weighted(random, pairs) {
    let roll = random() * pairs.reduce((sum, pair) => sum + pair[1], 0);
    for (const [value, weight] of pairs) {
        roll -= weight;
        if (roll < 0) return value;
    }
    return pairs[pairs.length - 1][0];
}
function choose(random, name, mode) {
    const pairs = CHOICES[name];
    if (mode === 'best') return Math.max(...pairs.map(pair => pair[0]));
    if (mode === 'careful') return weighted(random, pairs.filter(pair => pair[0] > 0));
    return weighted(random, pairs);
}
const clamp = value => Math.max(-100, Math.min(100, value));

// options.penaltyTurn: replace that pre-gate scored turn (0-19) with -10.
// options.missBonus: 'day3' drops the Day 3 completion bonus, 'private2' drops the last one.
// options.postAsGroup: score the 13 post-declaration turns from the group pool.
function playRoute(random, pool, policy, choiceMode, options = {}) {
    const draw = kind => pool[kind][Math.floor(random() * pool[kind].length)];
    let affinity = 0;
    let preGateTurn = 0;
    const add = amount => { affinity = clamp(affinity + amount); };
    const talk = (kind, turns, bonus, preGate) => {
        for (let turn = 0; turn < turns; turn++) {
            const score = draw(kind);
            add(preGate && preGateTurn === options.penaltyTurn ? -10 : score);
            if (preGate) preGateTurn++;
        }
        add(bonus);
    };
    const postKind = options.postAsGroup ? 'group' : 'personal';
    add(choose(random, 'cheer', choiceMode));
    talk('personal', 5, options.missBonus === 'day3' ? 0 : policy.pre, true);
    add(choose(random, 'notice', choiceMode));
    talk('personal', 5, policy.pre, true);
    if (affinity < 8) return { offered: false, perfect: false };
    talk('group', 5, policy.group, true);
    add(choose(random, 'waver', choiceMode));
    talk('personal', 5, policy.pre, true);
    if (affinity >= 8) add(choose(random, 'guilt', choiceMode));
    if (affinity < 45) return { offered: false, perfect: false };
    add(policy.declaration);
    talk('group', 3, policy.switchGroup, false);
    talk(postKind, 5, policy.private1, false);
    talk(postKind, 5, options.missBonus === 'private2' ? 0 : policy.private2, false);
    return { offered: true, perfect: affinity >= 100 };
}
function rate(regime, tier, policy, choiceMode, wellBehaved, options = {}) {
    const random = mulberry32(20261125);
    const pool = pools(regime, tier, wellBehaved);
    let offered = 0;
    let perfect = 0;
    for (let run = 0; run < RUNS; run++) {
        const result = playRoute(random, pool, policy, choiceMode, options);
        if (result.offered) offered++;
        if (result.perfect) perfect++;
    }
    const percent = count => `${Math.round(count / RUNS * 100)}`;
    return `${percent(offered)} / ${percent(perfect)}`;
}

function main() {
    const tiers = [['short', '10자 이하'], ['ordinary', '11~30자'], ['attentive', '31~80자'], ['devoted', '81자 이상']];
    const regimes = [['B2', '현재 채점기(11-22~, 한국어)'], ['B1', '11-20~21 한국어'], ['A_ko', '10월 한국어'], ['A_other', '10월 비한국어']];
    const modes = [['careful', '긍정 선택지만'], ['real', '실제 선택 분포'], ['best', '최선 선택']];
    console.log(`표본 ${RUNS}회. 칸 = 45 게이트 통과율 % / 100 달성률 %. 모든 하은 대화를 끝까지 마친 플레이어 기준.\n`);
    for (const [mode, modeLabel] of modes) {
        console.log(`## 선택: ${modeLabel}\n`);
        console.log('| 채점 시기 | 입력 길이 | 이전(142) | 중간(172) | 담임 수준(151) | 담임 수준, 감점 턴 없음 |');
        console.log('| --- | --- | --- | --- | --- | --- |');
        for (const [regime, regimeLabel] of regimes) {
            for (const [tier, tierLabel] of tiers) {
                console.log(`| ${regimeLabel} | ${tierLabel} | ${rate(regime, tier, POLICIES.before, mode, false)} | ${rate(regime, tier, POLICIES.mid172, mode, false)} | ${rate(regime, tier, POLICIES.after, mode, false)} | ${rate(regime, tier, POLICIES.after, mode, true)} |`);
            }
        }
        console.log('');
    }
    console.log('## 민감도: 담임 수준(151), 현재 채점기\n');
    console.log('| 입력 길이 | 선택 | 기준 | 게이트 전 -10 한 번(10번째 턴) | 3일차 보너스 놓침 | 마지막 보너스 놓침 | 선언 뒤 턴을 그룹 풀로 |');
    console.log('| --- | --- | --- | --- | --- | --- | --- |');
    for (const [tier, tierLabel] of [['attentive', '31~80자'], ['devoted', '81자 이상']]) {
        for (const [mode, modeLabel] of [['careful', '긍정 선택지만'], ['real', '실제 선택 분포']]) {
            const cell = options => rate('B2', tier, POLICIES.after, mode, false, options);
            console.log(`| ${tierLabel} | ${modeLabel} | ${cell({})} | ${cell({ penaltyTurn: 10 })} | ${cell({ missBonus: 'day3' })} | ${cell({ missBonus: 'private2' })} | ${cell({ postAsGroup: true })} |`);
        }
    }
    console.log('');
}

if (require.main === module) main();
module.exports = { HISTOGRAMS, CHOICES, POLICIES, playRoute, pools, mulberry32 };
