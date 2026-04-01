/**
 * 25종 엔딩 라우팅 검증
 * - 실제 플레이 전수 시뮬레이션 대신 엔딩 라우팅 노드만 직접 검증
 * - DEBUG_COMMANDS.md의 프리셋과 현재 day5_4_night 분기 구조를 기준으로 함
 */
const fs = require('fs');
const path = require('path');

const SCENARIO = {};
for (let day = 0; day <= 5; day++) SCENARIO[day] = {};

const dir = path.join(__dirname, 'assets/js/scenario');
for (const file of fs.readdirSync(dir).filter(file => /^day\d/.test(file) && file.endsWith('.js'))) {
  new Function('SCENARIO', 'Object', fs.readFileSync(path.join(dir, file), 'utf8'))(SCENARIO, Object);
}

const allScenes = {};
for (const day of Object.keys(SCENARIO)) {
  for (const [sceneId, scene] of Object.entries(SCENARIO[day])) {
    allScenes[sceneId] = scene;
  }
}

class TestState {
  constructor() {
    this.stats = { Seoyeon: 0, Yuna: 0, Dain: 0, Teacher: 0, Nurse: 0 };
    this.flags = {};
  }

  getAffinity(character) {
    return this.stats[character] ?? 0;
  }

  setAffinity(character, value) {
    if (this.stats[character] !== undefined) this.stats[character] = value;
  }

  changeAffinity(character, delta) {
    if (this.stats[character] === undefined) return;
    this.stats[character] = Math.max(-100, Math.min(100, this.stats[character] + delta));
  }

  setFlag(name, value = true) {
    this.flags[name] = value;
  }

  getFlag(expression) {
    if (!expression) return false;
    if (expression.includes('||')) return expression.split('||').some(flag => this.getFlag(flag.trim()));
    if (expression.includes('&&')) return expression.split('&&').every(flag => this.getFlag(flag.trim()));
    return this.flags[expression] ?? false;
  }
}

function applyScene(scene, state) {
  if (scene.setFlag) state.setFlag(scene.setFlag);
  if (scene.setFlags) scene.setFlags.forEach(flag => state.setFlag(flag));
  if (scene.clearFlags) scene.clearFlags.forEach(flag => state.setFlag(flag, false));
  if (!scene.stats) return;

  for (const [character, value] of Object.entries(scene.stats)) {
    const delta = typeof value === 'number' ? value : (value?.affinity || 0);
    state.changeAffinity(character, delta);
  }
}

function resolveNext(scene, state) {
  if (!scene) return null;

  if (scene.affinityBranches?.length > 0) {
    if (scene.affinityChar) {
      const affinity = state.getAffinity(scene.affinityChar);
      const branches = [...scene.affinityBranches]
        .map((branch, index) => ({ ...branch, _index: index }))
        .sort((left, right) => (right.minAffinity || 0) - (left.minAffinity || 0) || left._index - right._index);

      for (const branch of branches) {
        if (affinity >= (branch.minAffinity || 0)) return branch.next;
      }
      return scene.next || scene.fallback || null;
    }

    let bestTargets = [];
    let bestAffinity = -Infinity;
    for (const branch of scene.affinityBranches) {
      if (!branch.char) continue;
      const affinity = state.getAffinity(branch.char);
      if (affinity < (branch.minAffinity || 0)) continue;

      if (affinity > bestAffinity) {
        bestAffinity = affinity;
        bestTargets = [branch.next];
      } else if (affinity === bestAffinity) {
        bestTargets.push(branch.next);
      }
    }

    if (bestTargets.length > 0) return bestTargets[0];
    return scene.next || scene.fallback || null;
  }

  if (scene.branches?.length > 0) {
    for (const branch of scene.branches) {
      if (branch.condition && !state.getFlag(branch.condition)) continue;
      if (branch.excludeCondition && state.getFlag(branch.excludeCondition)) continue;
      return branch.next;
    }
  }

  return scene.next || scene.fallback || null;
}

function follow(startSceneId, state, maxSteps = 200) {
  const trail = [];
  let sceneId = startSceneId;

  for (let step = 0; step < maxSteps && sceneId; step++) {
    if (sceneId.endsWith('.html')) break;
    trail.push(sceneId);

    const scene = allScenes[sceneId];
    if (!scene) break;
    applyScene(scene, state);

    if (scene.choices?.length > 0) break;

    const nextId = resolveNext(scene, state);
    if (!nextId || nextId === sceneId) break;
    sceneId = nextId;
  }

  return trail;
}

function buildState(config) {
  const state = new TestState();
  for (const [character, affinity] of Object.entries(config.affinities || {})) {
    state.setAffinity(character, affinity);
  }
  for (const flag of (config.flags || [])) {
    state.setFlag(flag);
  }
  return state;
}

const tests = [
  { name: 'Perfect(서연)', expected: 'perfect_seo_1', affinities: { Seoyeon: 90 }, flags: ['route_seoyeon', 'day4_confession_accepted'] },
  { name: 'Perfect(유나)', expected: 'perfect_yuna_1', affinities: { Yuna: 90 }, flags: ['route_yuna', 'day4_confession_accepted'] },
  { name: 'Perfect(다인)', expected: 'perfect_dain_1', affinities: { Dain: 90 }, flags: ['route_dain', 'day4_confession_accepted'] },

  { name: 'True(서연)', expected: 'true_seo_1', affinities: { Seoyeon: 70 }, flags: ['route_seoyeon', 'day4_confession_accepted'] },
  { name: 'True(유나)', expected: 'true_yuna_1', affinities: { Yuna: 70 }, flags: ['route_yuna', 'day4_confession_accepted'] },
  { name: 'True(다인)', expected: 'true_dain_1', affinities: { Dain: 70 }, flags: ['route_dain', 'day4_confession_accepted'] },

  { name: 'Good(서연)', expected: 'good_5_cg_seo', affinities: { Seoyeon: 50 }, flags: ['route_seoyeon', 'day4_confession_accepted', 'day3_has_multiple_dates'] },
  { name: 'Good(유나)', expected: 'good_5_cg_yuna', affinities: { Yuna: 50 }, flags: ['route_yuna', 'day4_confession_accepted', 'day3_has_multiple_dates'] },
  { name: 'Good(다인)', expected: 'good_5_cg_dain', affinities: { Dain: 50 }, flags: ['route_dain', 'day4_confession_accepted', 'day3_has_multiple_dates'] },

  { name: 'Bittersweet(서연)', expected: 'bitter_seo_1', affinities: { Seoyeon: 20 }, flags: ['route_seoyeon', 'day4_confession_accepted'] },
  { name: 'Bittersweet(유나)', expected: 'bitter_yuna_1', affinities: { Yuna: 20 }, flags: ['route_yuna', 'day4_confession_accepted'] },
  { name: 'Bittersweet(다인)', expected: 'bitter_dain_1', affinities: { Dain: 20 }, flags: ['route_dain', 'day4_confession_accepted'] },

  { name: 'Confess Fail(서연)', expected: 'day5_ending_confess_fail', affinities: { Seoyeon: 30 }, flags: ['route_seoyeon', 'day5_confessed'] },
  { name: 'Confess Fail(유나)', expected: 'day5_ending_confess_fail', affinities: { Yuna: 30 }, flags: ['route_yuna', 'day5_confessed'] },
  { name: 'Confess Fail(다인)', expected: 'day5_ending_confess_fail', affinities: { Dain: 30 }, flags: ['route_dain', 'day5_confessed'] },

  { name: 'Mayhem', expected: 'day5_ending_mayhem', flags: ['day3_has_multiple_dates'] },
  { name: 'Harem', expected: 'day5_ending_harem', flags: ['ending_harem'] },
  { name: 'Friend', expected: 'day5_ending_friend', flags: ['day4_waited'] },
  { name: 'Alone', expected: 'day5_ending_alone' },

  { name: 'Hidden Perfect(담임)', expected: 'hidden_perfect_homeroom_1', affinities: { Teacher: 90 }, flags: ['homeroom_day5'] },
  { name: 'Hidden True(담임)', expected: 'hidden_true_homeroom_1', affinities: { Teacher: 60 }, flags: ['homeroom_day5'] },
  { name: 'Hidden Good(담임)', expected: 'hidden_good_homeroom_1', affinities: { Teacher: 20 }, flags: ['homeroom_day5'] },

  { name: 'Hidden Perfect(보건)', expected: 'hidden_perfect_nurse_1', affinities: { Nurse: 90 }, flags: ['nurse_day5'] },
  { name: 'Hidden True(보건)', expected: 'hidden_true_nurse_1', affinities: { Nurse: 60 }, flags: ['nurse_day5'] },
  { name: 'Hidden Good(보건)', expected: 'hidden_good_nurse_1', affinities: { Nurse: 20 }, flags: ['nurse_day5'] }
];

let passed = 0;
let failed = 0;

for (const test of tests) {
  const state = buildState(test);
  const trail = follow('ending_start', state);
  const reached = trail.includes(test.expected);

  if (reached) {
    console.log('✅ ' + test.name + ' → ' + test.expected);
    passed++;
  } else {
    console.log('❌ ' + test.name + ' → ' + test.expected + ' 미도달');
    console.log('   경로: ' + trail.join(' → '));
    console.log('   플래그: ' + Object.keys(state.flags).filter(flag => state.flags[flag]).join(', '));
    console.log('   호감도: ' + JSON.stringify(state.stats));
    failed++;
  }
}

console.log('\n' + passed + '/' + tests.length + ' 통과');
if (failed > 0) process.exit(1);
