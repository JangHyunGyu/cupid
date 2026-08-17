/**
 * Ending route smoke test for Day 5.
 *
 * Covers:
 * - accepted-route endings
 * - late-confession branch from after5_ending_check
 * - caught vs uncaught multiple-date endings
 * - hidden teacher/nurse endings
 */
const fs = require('fs');
const path = require('path');

const SCENARIO = {};
for (let day = 0; day <= 5; day++) SCENARIO[day] = {};

const scenarioDir = path.join(__dirname, 'assets/js/scenario');
for (const file of fs.readdirSync(scenarioDir).filter(file => /^day\d/.test(file) && file.endsWith('.js'))) {
  new Function('SCENARIO', 'Object', fs.readFileSync(path.join(scenarioDir, file), 'utf8'))(SCENARIO, Object);
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

function follow(startSceneId, state, options = {}) {
  const trail = [];
  let sceneId = startSceneId;
  const maxSteps = options.maxSteps || 200;
  const choiceSelections = options.choiceSelections || {};

  for (let step = 0; step < maxSteps && sceneId; step++) {
    if (sceneId.endsWith('.html')) break;
    trail.push(sceneId);

    const scene = allScenes[sceneId];
    if (!scene) break;
    applyScene(scene, state);

    if (scene.choices?.length > 0) {
      let choiceIndex = choiceSelections[sceneId];
      if (choiceIndex === undefined && String(sceneId).startsWith('date_choice_')) choiceIndex = 0;
      if (choiceIndex === undefined) break;

      const choice = scene.choices[choiceIndex];
      if (!choice) break;

      applyScene(choice, state);
      const nextId = choice.next;
      if (!nextId || nextId === sceneId) break;
      sceneId = nextId;
      continue;
    }

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
  { name: 'Perfect(Seoyeon)', expected: 'day5_seo_ending_freetalk_perfect', affinities: { Seoyeon: 90 }, flags: ['route_seoyeon', 'day4_confession_accepted'], required: ['perfect_seo_1'] },
  { name: 'Perfect(Yuna)', expected: 'day5_yuna_ending_freetalk_perfect', affinities: { Yuna: 90 }, flags: ['route_yuna', 'day4_confession_accepted'], required: ['perfect_yuna_1'] },
  { name: 'Perfect(Dain)', expected: 'day5_dain_ending_freetalk_perfect', affinities: { Dain: 90 }, flags: ['route_dain', 'day4_confession_accepted'], required: ['perfect_dain_1'] },

  { name: 'True(Seoyeon)', expected: 'day5_seo_ending_freetalk_true_love', affinities: { Seoyeon: 70 }, flags: ['route_seoyeon', 'day4_confession_accepted'], required: ['true_seo_1'] },
  { name: 'True(Yuna)', expected: 'day5_yuna_ending_freetalk_true_love', affinities: { Yuna: 70 }, flags: ['route_yuna', 'day4_confession_accepted'], required: ['true_yuna_1'] },
  { name: 'True(Dain)', expected: 'day5_dain_ending_freetalk_true_love', affinities: { Dain: 70 }, flags: ['route_dain', 'day4_confession_accepted'], required: ['true_dain_1'] },

  {
    name: 'Good Accepted(Seoyeon)',
    start: 'after5_ending_check',
    expected: 'day5_seo_ending_freetalk_good',
    affinities: { Seoyeon: 50 },
    flags: ['route_seoyeon', 'day4_confession_accepted'],
    required: ['good_5_cg_seo'],
    forbidden: ['after5_last_chance_1', 'after5_last_chance_choice']
  },
  {
    name: 'Good Accepted(Yuna)',
    start: 'after5_ending_check',
    expected: 'day5_yuna_ending_freetalk_good',
    affinities: { Yuna: 50 },
    flags: ['route_yuna', 'day4_confession_accepted'],
    required: ['good_5_cg_yuna'],
    forbidden: ['after5_last_chance_1', 'after5_last_chance_choice']
  },
  {
    name: 'Good Accepted(Dain)',
    start: 'after5_ending_check',
    expected: 'day5_dain_ending_freetalk_good',
    affinities: { Dain: 50 },
    flags: ['route_dain', 'day4_confession_accepted'],
    required: ['good_5_cg_dain'],
    forbidden: ['after5_last_chance_1', 'after5_last_chance_choice']
  },

  {
    name: 'Counteroffer blocks Perfect(Seoyeon)',
    expected: 'day5_seo_ending_freetalk_bittersweet',
    affinities: { Seoyeon: 95 },
    flags: ['route_seoyeon', 'day4_confession_accepted', 'day4_took_yuna_counteroffer', 'day4_counteroffer_penalty_deferred', 'day5_confessed_counteroffer', 'day5_abandoned_seoyeon'],
    required: ['co_bitter_seo_1', 'bitter_epilogue_1'],
    forbidden: ['perfect_seo_1', 'true_seo_1', 'day5_ending_good', 'bitter_seo_2']
  },
  {
    name: 'Counteroffer blocks hidden teacher Perfect',
    expected: 'day5_teacher_ending_freetalk_bittersweet',
    affinities: { Teacher: 95, Seoyeon: 80 },
    flags: ['day4_took_seoyeon_counteroffer', 'day4_counteroffer_target_teacher', 'day4_counteroffer_penalty_deferred', 'homeroom_day5', 'day5_abandoned_teacher'],
    required: ['co_bitter_teacher_1', 'hidden_bitter_homeroom_ending_title'],
    forbidden: ['hidden_perfect_homeroom_1', 'hidden_true_homeroom_1', 'hidden_good_homeroom_1']
  },
  { name: 'Bittersweet(Seoyeon)', expected: 'day5_seo_ending_freetalk_bittersweet', affinities: { Seoyeon: 20 }, flags: ['route_seoyeon', 'day4_confession_accepted'], required: ['bitter_seo_1'] },
  { name: 'Bittersweet(Yuna)', expected: 'day5_yuna_ending_freetalk_bittersweet', affinities: { Yuna: 20 }, flags: ['route_yuna', 'day4_confession_accepted'], required: ['bitter_yuna_1'] },
  { name: 'Bittersweet(Dain)', expected: 'day5_dain_ending_freetalk_bittersweet', affinities: { Dain: 20 }, flags: ['route_dain', 'day4_confession_accepted'], required: ['bitter_dain_1'] },

  {
    name: 'Late Confess Good(Seoyeon)',
    start: 'after5_ending_check',
    expected: 'day5_seo_ending_freetalk_late_good',
    affinities: { Seoyeon: 55 },
    flags: ['route_seoyeon', 'day4_waited'],
    choices: { after5_last_chance_choice: 0 },
    required: ['after5_confess_react_seo', 'good_5_cg_seo'],
    forbidden: ['after5_confess_react_seo_low']
  },
  {
    name: 'Late Confess Good(Yuna)',
    start: 'after5_ending_check',
    expected: 'day5_yuna_ending_freetalk_late_good',
    affinities: { Yuna: 55 },
    flags: ['route_yuna', 'day4_waited'],
    choices: { after5_last_chance_choice: 0 },
    required: ['after5_confess_react_yuna', 'good_5_cg_yuna'],
    forbidden: ['after5_confess_react_yuna_low']
  },
  {
    name: 'Late Confess Good(Dain)',
    start: 'after5_ending_check',
    expected: 'day5_dain_ending_freetalk_late_good',
    affinities: { Dain: 55 },
    flags: ['route_dain', 'day4_waited'],
    choices: { after5_last_chance_choice: 0 },
    required: ['after5_confess_react_dain', 'good_5_cg_dain'],
    forbidden: ['after5_confess_react_dain_low']
  },
  {
    name: 'Confess Fail(Seoyeon)',
    start: 'after5_ending_check',
    expected: 'day5_ending_confess_fail',
    affinities: { Seoyeon: 30 },
    flags: ['route_seoyeon', 'day4_waited'],
    choices: { after5_last_chance_choice: 0 },
    required: ['after5_last_chance_seo_low_1', 'after5_confess_react_seo_low'],
    forbidden: ['after5_confess_react_seo']
  },
  {
    name: 'Friend(Yuna Waited)',
    start: 'after5_ending_check',
    expected: 'day5_ending_friend',
    flags: ['route_yuna', 'day4_waited'],
    choices: { after5_last_chance_choice: 1 },
    required: ['after5_last_chance_yuna_low_1', 'friend_4_yuna']
  },

  {
    name: 'Mayhem',
    start: 'after5_ending_check',
    expected: 'day5_ending_mayhem',
    flags: ['day3_has_multiple_dates', 'day3_caught_multiple_dates'],
    forbidden: ['day5_ending_harem']
  },
  {
    name: 'Unresolved',
    start: 'after5_ending_check',
    expected: 'day5_ending_harem',
    flags: ['day3_has_multiple_dates', 'ending_harem'],
    forbidden: ['day5_ending_mayhem']
  },
  { name: 'Alone', expected: 'day5_ending_alone' },

  { name: 'Hidden Perfect(Teacher)', expected: 'day5_teacher_ending_freetalk_perfect', affinities: { Teacher: 90 }, flags: ['homeroom_day5'], required: ['hidden_perfect_homeroom_1'] },
  { name: 'Hidden True(Teacher)', expected: 'day5_teacher_ending_freetalk_true_love', affinities: { Teacher: 60 }, flags: ['homeroom_day5'], required: ['hidden_true_homeroom_1'] },
  { name: 'Hidden Good(Teacher)', expected: 'day5_teacher_ending_freetalk_good', affinities: { Teacher: 40 }, flags: ['homeroom_day5'], required: ['hidden_good_homeroom_1'] },
  { name: 'Hidden Bittersweet(Teacher)', expected: 'day5_teacher_ending_freetalk_bittersweet', affinities: { Teacher: 20 }, flags: ['homeroom_day5'], required: ['hidden_bitter_homeroom_1'] },

  { name: 'Hidden Perfect(Nurse)', expected: 'day5_nurse_ending_freetalk_perfect', affinities: { Nurse: 90 }, flags: ['nurse_day5'], required: ['hidden_perfect_nurse_1'] },
  { name: 'Hidden True(Nurse)', expected: 'day5_nurse_ending_freetalk_true_love', affinities: { Nurse: 60 }, flags: ['nurse_day5'], required: ['hidden_true_nurse_1'] },
  { name: 'Hidden Good(Nurse)', expected: 'day5_nurse_ending_freetalk_good', affinities: { Nurse: 40 }, flags: ['nurse_day5'], required: ['hidden_good_nurse_1'] },
  { name: 'Hidden Bittersweet(Nurse)', expected: 'day5_nurse_ending_freetalk_bittersweet', affinities: { Nurse: 20 }, flags: ['nurse_day5'], required: ['hidden_bitter_nurse_1'] }
];

let passed = 0;
let failed = 0;

for (const test of tests) {
  const state = buildState(test);
  const trail = follow(test.start || 'ending_start', state, { choiceSelections: test.choices || {} });
  const reached = trail.includes(test.expected);
  const requiredMisses = (test.required || []).filter(sceneId => !trail.includes(sceneId));
  const forbiddenHits = (test.forbidden || []).filter(sceneId => trail.includes(sceneId));

  if (reached && requiredMisses.length === 0 && forbiddenHits.length === 0) {
    console.log('PASS ' + test.name + ' -> ' + test.expected);
    passed++;
  } else {
    console.log('FAIL ' + test.name + ' -> ' + test.expected);
    console.log('  trail: ' + trail.join(' -> '));
    if (requiredMisses.length > 0) console.log('  missing: ' + requiredMisses.join(', '));
    if (forbiddenHits.length > 0) console.log('  forbidden: ' + forbiddenHits.join(', '));
    console.log('  flags: ' + Object.keys(state.flags).filter(flag => state.flags[flag]).join(', '));
    console.log('  affinity: ' + JSON.stringify(state.stats));
    failed++;
  }
}

console.log('\n' + passed + '/' + tests.length + ' passed');
if (failed > 0) process.exit(1);
