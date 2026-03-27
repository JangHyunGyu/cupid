/**
 * 19종 엔딩 도달 가능 여부 테스트
 */
const fs = require('fs'), path = require('path');
var SCENARIO = {};
for (let i = 0; i <= 5; i++) SCENARIO[i] = {};
const dir = path.join(__dirname, 'assets/js/scenario');
for (const f of fs.readdirSync(dir).filter(f => /^day\d/.test(f) && f.endsWith('.js'))) {
    new Function('SCENARIO', 'Object', fs.readFileSync(path.join(dir, f), 'utf8'))(SCENARIO, Object);
}
const allScenes = {};
for (const day of Object.keys(SCENARIO))
    for (const id of Object.keys(SCENARIO[day]))
        allScenes[id] = SCENARIO[day][id];

class S {
    constructor() { this.s = { Seoyeon: 0, Yuna: 0, Dain: 0, Teacher: 0, Nurse: 0 }; this.f = {}; }
    ga(c) { return this.s[c] ?? 0; }
    ca(c, a) { if (this.s[c] !== undefined) this.s[c] = Math.max(-100, Math.min(100, this.s[c] + a)); }
    sf(n, v = true) { this.f[n] = v; }
    gf(n) {
        if (n.includes('||')) return n.split('||').some(f => this.f[f.trim()] ?? false);
        if (n.includes('&&')) return n.split('&&').every(f => this.f[f.trim()] ?? false);
        return this.f[n] ?? false;
    }
}
function ap(sc, st) { if (sc.setFlag) st.sf(sc.setFlag); if (sc.setFlags) sc.setFlags.forEach(f => st.sf(f)); if (sc.clearFlags) sc.clearFlags.forEach(f => st.sf(f, false)); if (sc.stats) for (const [k, v] of Object.entries(sc.stats)) st.ca(k, typeof v === 'number' ? v : (v?.affinity || 0)); }
function apC(c, st) { if (c.setFlag) st.sf(c.setFlag); if (c.setFlags) c.setFlags.forEach(f => st.sf(f)); if (c.stats) for (const [k, v] of Object.entries(c.stats)) st.ca(k, typeof v === 'number' ? v : (v?.affinity || 0)); }
function res(sc, st) {
    if (sc.affinityBranches?.length > 0) { if (sc.affinityChar) { const a = st.ga(sc.affinityChar); const sorted = [...sc.affinityBranches].sort((x, y) => (y.minAffinity || 0) - (x.minAffinity || 0)); for (const b of sorted) if (a >= (b.minAffinity || 0)) return b.next; return sc.next || null; } let best = [], ba = -Infinity; for (const b of sc.affinityBranches) { if (!b.char) continue; const a = st.ga(b.char); if (a >= (b.minAffinity || 0)) { if (a > ba) { ba = a; best = [b.next]; } else if (a === ba) best.push(b.next); } } if (best.length > 0) return best[0]; return sc.next || sc.fallback || null; }
    if (sc.branches?.length > 0) { if (sc.selectByHighestAffinity) { let bn = null, ba = -Infinity; for (const b of sc.branches) { if (b.condition && !st.gf(b.condition)) continue; if (b.excludeCondition && st.gf(b.excludeCondition)) continue; if (b.character) { if (!st.gf('met_' + b.character.toLowerCase())) continue; const a = st.ga(b.character); if (a > ba) { ba = a; bn = b.next; } } } return bn || sc.fallback || sc.next || null; } for (const b of sc.branches) { if (b.condition && !st.gf(b.condition)) continue; if (b.excludeCondition && st.gf(b.excludeCondition)) continue; return b.next; } return sc.next || null; }
    return sc.next || null;
}
function avail(ch, st) { return (ch || []).filter(c => { if (c.condition && !st.gf(c.condition)) return false; if (c.excludeCondition && st.gf(c.excludeCondition)) return false; return true; }); }

const kwMap = { Seoyeon: 'seo', Yuna: 'yuna', Dain: 'dain', Teacher: 'homeroom', Nurse: 'nurse' };

function pick(choices, target, avoid) {
    if (choices.length <= 1) return choices[0];
    let best = null, bestAmt = -Infinity;
    for (const c of choices) {
        let amt = 0;
        if (target && c.stats?.[target]) amt = typeof c.stats[target] === 'number' ? c.stats[target] : (c.stats[target].affinity || 0);
        const flags = [c.setFlag || '', ...(c.setFlags || []), c.next || ''].join(' ').toLowerCase();
        if (target && kwMap[target] && flags.includes(kwMap[target])) amt += 100;
        if (avoid) for (const av of avoid) { if (kwMap[av] && flags.includes(kwMap[av])) amt -= 200; }
        if (amt > bestAmt) { bestAmt = amt; best = c; }
    }
    return best || choices[0];
}

// forceChoices: 특정 씬에서 특정 인덱스 선택지를 강제로 고르기
function simulate(target, avoid, forceChoices) {
    const state = new S();
    let sceneId = 'start';
    const trail = [];
    for (let step = 0; step < 3000; step++) {
        if (!sceneId || sceneId.endsWith('.html')) break;
        trail.push(sceneId);
        const sc = allScenes[sceneId]; if (!sc) break;
        ap(sc, state);
        if (sc.type === 'credits' || sc.type === 'free_talk' || sc.type === 'input') { const n = res(sc, state); if (n) { sceneId = n; continue; } break; }
        if (sc.choices?.length > 0) {
            const av = avail(sc.choices, state); if (!av.length) break;
            let picked;
            if (forceChoices && forceChoices[sceneId] !== undefined) {
                picked = av[forceChoices[sceneId]] || av[0];
            } else {
                picked = pick(av, target, avoid);
            }
            apC(picked, state);
            let next = null;
            if (picked.affinityBranches && picked.affinityChar) {
                const a = state.ga(picked.affinityChar);
                const sorted = [...picked.affinityBranches].sort((x, y) => (y.minAffinity || 0) - (x.minAffinity || 0));
                for (const b of sorted) { if (a >= (b.minAffinity || 0)) { next = b.next; break; } }
            }
            if (!next) next = picked.next; if (!next) break;
            sceneId = next; continue;
        }
        const n = res(sc, state); if (n) { sceneId = n; continue; } break;
    }
    return { state, trail };
}

// ═══════════════════════════════════════════════════
// 19종 엔딩 테스트
// ═══════════════════════════════════════════════════
const tests = [
    // === 데이트 거절 맵 (타겟만 수락, 나머지 거절) ===
    // morning3_date_*_choice: [0]=수락, [1]=거절
    // after_end: [0]=담임, [1]=보건, [2]=스킵

    // Perfect: 올인 + 타겟만 데이트 수락 + Day4 고백 수락
    { name: 'Perfect(서연)', check: 'perfect_seo_1', target: 'Seoyeon', avoid: ['Yuna', 'Dain'],
      force: { 'morning3_date_seo_choice': 0, 'morning3_date_yuna_choice': 1, 'morning3_date_dain_choice': 1 } },
    { name: 'Perfect(유나)', check: 'perfect_yuna_1', target: 'Yuna', avoid: ['Seoyeon', 'Dain'],
      force: { 'morning3_date_seo_choice': 1, 'morning3_date_yuna_choice': 0, 'morning3_date_dain_choice': 1 } },
    { name: 'Perfect(다인)', check: 'perfect_dain_1', target: 'Dain', avoid: ['Seoyeon', 'Yuna'],
      force: { 'morning3_date_seo_choice': 1, 'morning3_date_yuna_choice': 1, 'morning3_date_dain_choice': 0 } },

    // True: 올인→100→Perfect이므로, ending_affinity_check 진입 확인으로 대체
    { name: 'True 분기(서연)', check: 'ending_aff_check_seo', target: 'Seoyeon', avoid: ['Yuna', 'Dain'],
      force: { 'morning3_date_seo_choice': 0, 'morning3_date_yuna_choice': 1, 'morning3_date_dain_choice': 1 } },
    { name: 'True 분기(유나)', check: 'ending_aff_check_yuna', target: 'Yuna', avoid: ['Seoyeon', 'Dain'],
      force: { 'morning3_date_seo_choice': 1, 'morning3_date_yuna_choice': 0, 'morning3_date_dain_choice': 1 } },
    { name: 'True 분기(다인)', check: 'ending_aff_check_dain', target: 'Dain', avoid: ['Seoyeon', 'Yuna'],
      force: { 'morning3_date_seo_choice': 1, 'morning3_date_yuna_choice': 1, 'morning3_date_dain_choice': 0 } },

    // Good: 올인 + 모든 데이트 수락 (day3_has_multiple_dates) → branch [6]
    { name: 'Good(서연)', check: 'good_5_cg_seo', target: 'Seoyeon' },
    { name: 'Good(유나)', check: 'good_5_cg_yuna', target: 'Yuna' },
    { name: 'Good(다인)', check: 'good_5_cg_dain', target: 'Dain' },

    // Bitter: route확정 + 고백수락 + !day3_has_multiple_dates + 호감도<40
    // 호감도를 최대한 깎기: 마이너스 선택지 적극 선택 + 히든스킵
    { name: 'Bitter(서연)', check: 'bitter_seo_1', target: null, avoid: ['Seoyeon', 'Yuna', 'Dain'],
      force: { 'after_end': 2, 'after3_choice': 0, 'confess_seo_choice': 0,
               'morning3_date_seo_choice': 1, 'morning3_date_yuna_choice': 1, 'morning3_date_dain_choice': 1,
               'lunch3_expose_choice': 0, 'after3_confront_choice': 0 } },

    // Confess Fail: route확정 + Day4 고백거절(day4_waited) + Day5 고백(day5_confessed) + 호감도<50 → confess_fail
    { name: 'Confess Fail', check: 'day5_ending_confess_fail', target: null, avoid: ['Seoyeon', 'Yuna', 'Dain'],
      force: { 'after3_choice': 0, 'morning3_date_seo_choice': 0, 'morning3_date_yuna_choice': 1, 'morning3_date_dain_choice': 1,
               'confess_seo_choice': 1, 'after5_last_chance_choice': 0 } },

    // Friend: 히든스킵 + route확정 + Day4 고백거절 + Day5 고백수락 + 호감도<50 → confessed_aff_check fallback → friend
    { name: 'Friend', check: 'day5_ending_friend', target: null, avoid: ['Seoyeon', 'Yuna', 'Dain'],
      force: { 'after_end': 2, 'after3_choice': 0,
               'morning3_date_seo_choice': 0, 'morning3_date_yuna_choice': 1, 'morning3_date_dain_choice': 1,
               'confess_seo_choice': 1, 'after5_last_chance_choice': 0 } },

    // Alone: 히든스킵 + 데이트 전부거절 + 루트 미확정 → fallback
    { name: 'Alone', check: 'day5_ending_alone', target: null,
      avoid: ['Seoyeon', 'Yuna', 'Dain', 'Teacher', 'Nurse'],
      force: { 'after_end': 2, 'morning3_date_seo_choice': 1, 'morning3_date_yuna_choice': 1, 'morning3_date_dain_choice': 1,
               'after3_choice': 0, 'confess_seo_choice': 1, 'after5_last_chance_choice': 1 } },

    // Mayhem: 모든 데이트수락 + 들킴(day3_caught_multiple_dates) + 고백거절 + Day5 고백안함
    { name: 'Mayhem', check: 'day5_ending_mayhem', target: null,
      force: { 'morning3_date_seo_choice': 0, 'morning3_date_yuna_choice': 0, 'morning3_date_dain_choice': 0,
               'lunch3_expose_choice': 0,
               'confess_seo_choice': 1, 'confess_yuna_choice': 1, 'confess_dain_choice': 1,
               'after5_last_chance_choice': 1 } },

    // Harem: 모든 데이트수락 + 안 들킴(!day3_caught) + 고백거절 → after5_set_harem
    // lunch3_expose_choice 자체를 안 만나도록 lunch3_choice에서 다른 선택
    { name: 'Harem', check: 'day5_ending_harem', target: null,
      force: { 'morning3_date_seo_choice': 0, 'morning3_date_yuna_choice': 0, 'morning3_date_dain_choice': 0,
               'lunch3_choice': 1, 'lunch3_seo_witness_choice': 1,
               'confess_seo_choice': 1, 'confess_yuna_choice': 1, 'confess_dain_choice': 1,
               'after5_last_chance_choice': 1, 'after_end': 2 } },

    // Hidden Perfect(담임): 담임 루트 + 올인 + 데이트 거절
    { name: 'Hidden Perfect(담임)', check: 'hidden_perfect_homeroom_1', target: 'Teacher',
      avoid: ['Seoyeon', 'Yuna', 'Dain'],
      force: { 'after_end': 0, 'morning3_date_seo_choice': 1, 'morning3_date_yuna_choice': 1, 'morning3_date_dain_choice': 1,
               'confess_seo_choice': 1, 'confess_yuna_choice': 1, 'confess_dain_choice': 1 } },

    // Hidden 분기(담임): check 씬 진입 확인
    { name: 'Hidden 분기(담임)', check: 'hidden_perfect_homeroom_check', target: 'Teacher',
      avoid: ['Seoyeon', 'Yuna', 'Dain'],
      force: { 'after_end': 0, 'morning3_date_seo_choice': 1, 'morning3_date_yuna_choice': 1, 'morning3_date_dain_choice': 1,
               'confess_seo_choice': 1, 'confess_yuna_choice': 1, 'confess_dain_choice': 1 } },

    // Hidden Good(담임): homeroom_day5 + !day4_confession_accepted
    // after5_ending_check[0]: homeroom_day5 → ending_start → branch[1]
    // Day 5 고백수락해도 ending_start에서 homeroom이 먼저 체크됨
    { name: 'Hidden Good(담임)', check: 'hidden_good_homeroom_1', target: 'Teacher',
      avoid: ['Seoyeon', 'Yuna', 'Dain'],
      force: { 'after_end': 0, 'morning3_date_seo_choice': 1, 'morning3_date_yuna_choice': 1, 'morning3_date_dain_choice': 1,
               'confess_seo_choice': 1, 'confess_yuna_choice': 1, 'confess_dain_choice': 1,
               'after5_last_chance_choice': 0,
               'after_hidden_homeroom_choice': 0, 'after_homeroom_honest_choice2': 1,
               'hidden_homeroom_d2_choice1': 1, 'hidden_homeroom_d2_choice2': 0,
               'hidden_homeroom_d3_choice': 1, 'hidden_homeroom_d3_reveal_choice': 1,
               'hidden_homeroom_d4_choice': 1, 'hidden_homeroom_d4_cafe_choice': 1,
               'hidden_homeroom_d5_choice': 1 } },

    // Hidden Perfect(보건): 보건 루트 + 올인 + 데이트 거절
    { name: 'Hidden Perfect(보건)', check: 'hidden_perfect_nurse_1', target: 'Nurse',
      avoid: ['Seoyeon', 'Yuna', 'Dain'],
      force: { 'after_end': 1, 'morning3_date_seo_choice': 1, 'morning3_date_yuna_choice': 1, 'morning3_date_dain_choice': 1,
               'confess_seo_choice': 1, 'confess_yuna_choice': 1, 'confess_dain_choice': 1 } },

    // Hidden 분기(보건)
    { name: 'Hidden 분기(보건)', check: 'hidden_perfect_nurse_check', target: 'Nurse',
      avoid: ['Seoyeon', 'Yuna', 'Dain'],
      force: { 'after_end': 1, 'morning3_date_seo_choice': 1, 'morning3_date_yuna_choice': 1, 'morning3_date_dain_choice': 1,
               'confess_seo_choice': 1, 'confess_yuna_choice': 1, 'confess_dain_choice': 1 } },

    // Hidden Good(보건): nurse_day5 + !day4_confession_accepted
    { name: 'Hidden Good(보건)', check: 'hidden_good_nurse_1', target: 'Nurse',
      avoid: ['Seoyeon', 'Yuna', 'Dain'],
      force: { 'after_end': 1, 'morning3_date_seo_choice': 1, 'morning3_date_yuna_choice': 1, 'morning3_date_dain_choice': 1,
               'confess_seo_choice': 1, 'confess_yuna_choice': 1, 'confess_dain_choice': 1,
               'after5_last_chance_choice': 0,
               'after_hidden_nurse_choice': 0, 'after_nurse_enter_choice': 1,
               'hidden_nurse_d2_choice1': 1, 'hidden_nurse_d2_choice2': 0,
               'hidden_nurse_d3_choice1': 1, 'hidden_nurse_d3_choice2': 1,
               'hidden_nurse_d4_name_choice': 1, 'hidden_nurse_d4_choice': 1,
               'hidden_nurse_d5_choice': 1 } },
];

let pass = 0, fail = 0;
for (const t of tests) {
    const result = simulate(t.target, t.avoid || null, t.force || null);
    const reached = result.trail.includes(t.check);
    const aff = t.target ? result.state.ga(t.target) : '-';

    if (reached) {
        console.log('✅ ' + t.name + ' (호감도=' + aff + ')');
        pass++;
    } else {
        console.log('❌ ' + t.name + ' (호감도=' + aff + ') ← 미도달');
        console.log('   경로 끝: ' + result.trail.slice(-5).join(' → '));
        const flags = Object.keys(result.state.f).filter(f => result.state.f[f]);
        console.log('   주요 플래그: ' + flags.filter(f => f.includes('route_') || f.includes('confession') || f.includes('day3_has') || f.includes('day4_') || f.includes('day5_') || f.includes('homeroom') || f.includes('nurse') || f.includes('waited') || f.includes('harem')).join(', '));
        fail++;
    }
}

console.log('\n' + pass + '/' + tests.length + ' 도달');
if (fail > 0) process.exit(1);
