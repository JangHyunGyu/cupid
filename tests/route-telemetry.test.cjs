const fixture = require('./affinity-fixture.cjs');
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');

function harness(storage = new Map(), post = null) {
    const requests = [];
    const window = { GAME_LANG: 'ko', location: { hostname: 'cupid.archerlab.dev' },
        CupidStorage: { getItem: key => storage.get(key), setItem: (key, value) => storage.set(key, value) },
        getCupidAppId: () => 'cupid', getCupidDeviceId: () => 'test-device', addEventListener() {} };
    const context = { window, console, crypto: globalThis.crypto, AbortController, clearTimeout() {}, API_ENDPOINT: 'https://api.test/', ASSET_VERSION: '2.9.207',
        document: { addEventListener() {}, createElement: () => ({ toDataURL: () => '' }) }, CHAR_NAME_MAP: {},
        setTimeout: () => 1, fetch: async (url, options) => {
            const body = JSON.parse(options.body); requests.push(body);
            if (post) return post(body);
            return { ok: true, json: async () => ({ ok: true, eventIds: body.events.map(event => event.eventId) }) };
        } };
    vm.createContext(context);
    for (const file of ['StateManager', 'SceneRenderer', 'RouteTelemetry']) vm.runInContext(fs.readFileSync(path.join(root, 'assets/js/modules', file + '.js'), 'utf8'), context);
    for (const file of fs.readdirSync(path.join(root, 'assets/js/scenario')).filter(file => /^day[45].*\.js$/.test(file))) vm.runInContext(fs.readFileSync(path.join(root, 'assets/js/scenario', file), 'utf8'), context);
    const state = new window.StateManager();
    const renderer = new window.SceneRenderer(state, null, null);
    return { state, renderer, telemetry: window.CupidRouteTelemetry, requests, storage, scenes: Object.assign({}, ...Object.values(context.SCENARIO)), window };
}

test('Haeun selection, conversations and fallback retain accurate route snapshots', async () => {
    const h = harness();
    h.state.flags = { route_yuna: true, day5_haeun_route_offered: true };
    fixture.seed(h.state, 'Haeun', 45);
    const offer = h.scenes.day5_haeun_route_choice;
    h.telemetry.entered(h.state, 'day5_haeun_route_choice', offer);
    h.telemetry.choice(h.state, 'day5_haeun_route_choice', offer, offer.choices[1], offer.choices[1].next);
    h.state.setFlag('haeun_route_selected');
    h.state.setFlag('haeun_switch_declared');
    h.telemetry.choice(h.state, 'day5_haeun_route_choice', offer, offer.choices[0], offer.choices[0].next);
    const id = 'day5_haeun_switch_yuna_group_talk';
    h.telemetry.entered(h.state, id, h.scenes[id]);
    h.telemetry.transition(h.state, id, h.scenes[id], h.scenes[id].next);
    h.telemetry.entered(h.state, 'day5_haeun_private_1', h.scenes.day5_haeun_private_1);
    h.state.setFlag('haeun_route_selected', false);
    h.telemetry.transition(h.state, 'day5_haeun_romance_check', h.scenes.day5_haeun_romance_check, 'day5_haeun_fallback');
    await h.telemetry.flush();
    const events = h.requests[0].events;
    assert.deepEqual(events.map(e => e.eventType), ['offer_entered', 'offer_choice', 'offer_choice', 'freetalk_entered', 'freetalk_exited', 'freetalk_entered', 'gate_evaluated']);
    assert.equal(events[1].details.accepted, false);
    assert.equal(events[2].details.accepted, true);
    assert.ok(events.slice(2, 6).every(e => e.route === 'Haeun' && e.day === 5));
    assert.equal(events[3].details.maxTurns, 3);
    assert.equal(events[5].details.maxTurns, 5);
    assert.equal(events[3].details.affinities.Haeun, 45);
    assert.equal(events[3].details.flags.haeun_switch_declared, true);
    assert.equal(events[6].route, 'Yuna');
    assert.ok(!JSON.stringify(events).includes('playerName'));
});

test('logs actual gate outcome, negative rivals, and overriding day-five conditions', async () => {
    const h = harness();
    h.state.flags = { route_seoyeon: true, day4_confession_accepted: true };
    Object.assign(h.state.stats, { Seoyeon: { affinity: 80 }, Dain: { affinity: -1 }, Yuna: { affinity: -20 } });
    for (const id of ['wall_seo_rival_rank', 'day4_student_night_branch', 'morning5_start_branch']) {
        if (id === 'day4_student_night_branch') h.state.flags.day4_waited = true;
        if (id === 'morning5_start_branch') Object.assign(h.state.flags, { harem_seed: true, day4_counteroffer_penalty_deferred: true });
        h.telemetry.transition(h.state, id, h.scenes[id], h.renderer.resolveNextScene(h.scenes[id]));
    }
    await h.telemetry.flush();
    const events = h.requests[0].events;
    assert.equal(events[0].details.reason, 'rival_selected');
    assert.equal(events[0].details.wouldFailFormerZeroGate, true);
    assert.equal(events[0].nextSceneId, 'wall_seo_glimpse_1');
    assert.equal(events[1].details.reason, 'confession_deferred');
    assert.equal(events[1].nextSceneId, 'day4_waited_night_branch');
    assert.equal(events[2].details.reason, 'day4_counteroffer_penalty_deferred');
    assert.equal(events[2].nextSceneId, 'morning5_temptation_counteroffer_branch');
    assert.equal(new Set(events.map(event => event.runId)).size, 1);
    assert.ok(events.every(event => !event.isTest));
    assert.ok(!JSON.stringify(events).includes('playerName'));
});

test('offer choices and free-talk entry are separate from passage eligibility', async () => {
    const h = harness();
    const [id, scene] = Object.entries(h.scenes).find(([, scene]) => scene.choices?.some(choice => choice.setFlags?.includes('day4_counteroffer_penalty_deferred')));
    h.telemetry.entered(h.state, id, scene);
    const accept = scene.choices.find(choice => choice.setFlags?.includes('day4_counteroffer_penalty_deferred'));
    const reject = scene.choices.find(choice => choice !== accept);
    h.telemetry.choice(h.state, id, scene, reject, reject.next);
    h.telemetry.choice(h.state, id, scene, accept, accept.next);
    h.telemetry.entered(h.state, 'morning5_counteroffer_group_talk', h.scenes.morning5_counteroffer_group_talk);
    await h.telemetry.flush();
    const events = h.requests[0].events;
    assert.deepEqual(events.map(event => event.eventType), ['offer_entered', 'offer_choice', 'offer_choice', 'freetalk_entered']);
    assert.equal(events[1].details.accepted, false);
    assert.equal(events[2].details.accepted, true);
    assert.equal(events[3].day, 5);
});

test('monitoring keeps the established route when staff visits coexist with it', async () => {
    for (const character of ['Seoyeon', 'Yuna', 'Dain']) {
        const h = harness();
        h.state.flags = { [`route_${character.toLowerCase()}`]: true, nurse_day4: true, homeroom_day4: true, day4_confession_accepted: true };
        fixture.seed(h.state, character, 71);
        fixture.seed(h.state, 'Nurse', 16);
        const saved = h.state.exportState();
        h.state.importState(saved);
        h.telemetry.entered(h.state, 'day4_night_start', h.scenes.day4_night_start);
        const gate = h.scenes.day4_night_branch;
        h.telemetry.transition(h.state, 'day4_night_branch', gate, h.renderer.resolveNextScene(gate));
        fixture.seed(h.state, character, 10);
        fixture.seed(h.state, 'Nurse', 100);
        h.telemetry.entered(h.state, 'morning5_start', h.scenes.morning5_start);
        await h.telemetry.flush();
        const events = h.requests[0].events;
        assert.ok(events.every(event => event.route === character));
        assert.equal(events[1].details.reason, `route_${character.toLowerCase()}`);
        assert.equal(events[1].nextSceneId, 'day4_student_visit_branch');
        assert.equal(events[1].details.flags.nurse_day4, true);
        assert.equal(events[1].details.flags.homeroom_day4, true);
    }
    for (const [character, flag] of [['Teacher', 'homeroom_day4'], ['Nurse', 'nurse_day4']]) {
        const h = harness();
        h.state.flags = { [flag]: true };
        h.telemetry.entered(h.state, 'day4_night_start', h.scenes.day4_night_start);
        await h.telemetry.flush();
        assert.equal(h.requests[0].events[0].route, character);
    }
});

test('staff check-in completion is logged under the established main route without a rival reward', async () => {
    const h = harness();
    h.state.flags = { route_seoyeon: true, nurse_day4: true, homeroom_day4: true };
    fixture.seed(h.state, 'Seoyeon', 71);
    fixture.seed(h.state, 'Nurse', 16);
    for (const id of ['day4_student_visit_branch', 'day4_student_visit_teacher_branch']) {
        h.telemetry.transition(h.state, id, h.scenes[id], h.renderer.resolveNextScene(h.scenes[id]));
    }
    for (const id of ['day4_student_both_checkin', 'day4_student_checkin_return_home']) {
        for (const flag of h.scenes[id].setFlags) h.state.setFlag(flag);
        h.telemetry.entered(h.state, id, h.scenes[id]);
    }
    await h.telemetry.flush();
    const events = h.requests[0].events;
    assert.ok(events.every(event => event.route === 'Seoyeon'));
    const completed = events.find(event => event.eventType === 'scene_checkpoint');
    assert.equal(completed.sceneId, 'day4_student_checkin_return_home');
    assert.equal(completed.details.flags.day4_staff_checkin_completed, true);
    assert.equal(completed.details.flags.day4_staff_checkin_teacher, true);
    assert.equal(completed.details.flags.day4_staff_checkin_nurse, true);
    assert.equal(completed.details.affinities.Seoyeon, 71);
    assert.equal(completed.details.affinities.Nurse, 16);
    assert.equal(completed.details.flags.day4_counteroffer_penalty_deferred, undefined);
});

test('distance and deferred invitation decisions remain distinct in monitoring', async () => {
    const h = harness();
    h.state.flags = { route_yuna: true, day4_waited: true, day4_distance_yuna: true };
    const gate = h.scenes.day4_student_night_branch;
    h.telemetry.transition(h.state, 'day4_student_night_branch', gate, h.renderer.resolveNextScene(gate));
    h.state.flags.day4_distance_yuna = false;
    h.telemetry.transition(h.state, 'day4_student_night_branch', gate, h.renderer.resolveNextScene(gate));
    const invitation = h.scenes.day4_waited_night_branch;
    h.telemetry.transition(h.state, 'day4_waited_night_branch', invitation, h.renderer.resolveNextScene(invitation));
    await h.telemetry.flush();
    const events = h.requests[0].events;
    assert.deepEqual(events.map(event => event.details.reason), ['day4_distance_yuna', 'confession_deferred', 'route_yuna']);
    assert.equal(events[0].nextSceneId, 'day4_night_regret');
    assert.equal(events[2].nextSceneId, 'day4_waited_yuna_invite');
});

test('failed transmission survives reload with the same event IDs; acknowledgements clear it', async () => {
    const h = harness(new Map(), async () => { throw new Error('offline'); });
    h.telemetry.entered(h.state, 'day4_night_start', h.scenes.day4_night_start);
    await h.telemetry.flush();
    const original = h.requests[0].events[0];
    const restored = harness(h.storage);
    await restored.telemetry.flush();
    assert.equal(restored.requests[0].events[0].eventId, original.eventId);
    await restored.telemetry.flush();
    assert.equal(restored.requests.length, 1);
    const saved = h.state.exportState();
    restored.state.importState(saved);
    assert.equal(restored.state.telemetryRunId, original.runId);
    restored.state.resetForNewGame();
    assert.equal(restored.state.telemetryRunId, '');
});

test('temptation diagnostics distinguish the +8 reward and mutable real scores from dialogue affinity 100', async () => {
    const h = harness();
    const id = 'wall_dain_seo_tempt_2';
    const scene = h.scenes[id];
    const accept = scene.choices[1];
    fixture.seed(h.state, 'Seoyeon', 50);
    h.telemetry.choice(h.state, id, scene, accept, accept.next);
    const talkId = 'day4_temptation_seoyeon_freetalk';
    h.telemetry.entered(h.state, talkId, h.scenes[talkId]);
    fixture.seed(h.state, 'Seoyeon', 46);
    h.telemetry.transition(h.state, talkId, h.scenes[talkId], h.scenes[talkId].next);
    await h.telemetry.flush();
    const [choice, entry, exit] = h.requests[0].events;
    assert.equal(choice.details.affinityEffects.Seoyeon.affinity, 8);
    assert.equal(choice.details.affinityEffects.Dain.affinity, -10);
    assert.equal(entry.details.dialogueAffinity, 100);
    assert.equal(entry.details.affinityLocked, false);
    assert.equal(entry.details.affinities.Seoyeon, 50);
    assert.equal(exit.eventType, 'freetalk_exited');
    assert.equal(exit.details.affinities.Seoyeon, 46);
});

test('Android file-origin users are production data; local and explicit smoke tests are excluded', async () => {
    for (const [hostname, explicit, expected] of [['', false, false], ['127.0.0.1', false, true], ['cupid.archerlab.dev', true, true]]) {
        const h = harness();
        h.window.location.hostname = hostname;
        h.window.CUPID_ROUTE_TELEMETRY_TEST = explicit;
        h.telemetry.entered(h.state, 'day4_night_start', h.scenes.day4_night_start);
        await h.telemetry.flush();
        assert.equal(h.requests[0].events[0].isTest, expected);
    }
});

test('crossing markers carry only the direction through the existing route-event queue', async () => {
    const h = harness();
    h.window.location.hostname = 'cupid.archerlab.dev';
    assert.equal(h.telemetry.crossing('arrived'), undefined);
    assert.equal(h.telemetry.crossing('arrived'), undefined, 'a repeat inside the guard window is dropped');
    assert.equal(h.telemetry.crossing('sideways'), undefined, 'unknown kinds are ignored');
    h.state.flags = { route_nurse: true, nurse_day4: true };
    h.state.playerName = '비밀이름';
    h.state.currentDay = 5;
    h.telemetry.crossing('departed', h.state, 'nurse_perfect_pills_black_4');
    h.telemetry.crossing('departed', h.state, 'nurse_perfect_pills_black_4');
    // The first marker is already in flight (flushes are not awaited); the next flush carries the rest.
    await new Promise(resolve => setImmediate(resolve));
    await h.telemetry.flush();
    const events = h.requests.flatMap(request => request.events);
    assert.equal(events.length, 2);
    assert.ok(h.requests.every(request => request.appId === 'cupid' && request.userId === 'test-device'));
    const [arrived, departed] = events;
    assert.equal(arrived.eventType, 'crossing_arrived');
    assert.equal(arrived.sceneId, 'start');
    assert.equal(arrived.day, 1);
    assert.equal(arrived.route, '');
    assert.deepEqual(arrived.details, { from: 'nevergrad', to: 'cupid' });
    assert.equal(departed.eventType, 'crossing_departed');
    assert.equal(departed.sceneId, 'nurse_perfect_pills_black_4');
    assert.equal(departed.day, 5);
    assert.equal(departed.route, 'Nurse');
    assert.equal(departed.runId, h.state.telemetryRunId);
    assert.deepEqual(departed.details, { from: 'cupid', to: 'nevergrad' });
    for (const event of [arrived, departed]) {
        assert.equal(event.version, '2.9.207');
        assert.equal(event.isTest, false);
        assert.deepEqual(Object.keys(event).sort(), ['clientTime', 'day', 'details', 'eventId', 'eventType', 'isTest', 'nextSceneId', 'route', 'runId', 'sceneId', 'version']);
    }
    assert.notEqual(arrived.eventId, departed.eventId);
    assert.ok(!JSON.stringify(h.requests).includes('비밀이름'));
});

test('a failing or hanging crossing marker never throws, blocks, or loses the event', async () => {
    const h = harness(new Map(), () => new Promise(() => {}));
    const started = Date.now();
    h.telemetry.crossing('departed', h.state, 'nurse_perfect_pills_black_4');
    assert.ok(Date.now() - started < 200, 'crossing() returns without waiting for the network');
    assert.equal(JSON.parse(h.storage.get('cupid_pending_route_events_v1')).length, 1, 'queued for a later retry');
    // Broken storage or identity helpers must not leak an exception either.
    const broken = harness();
    broken.window.getCupidDeviceId = () => { throw new Error('storage blocked'); };
    assert.doesNotThrow(() => broken.telemetry.crossing('arrived'));
    // Test traffic stays flagged so the viewer ignores it.
    const local = harness();
    local.window.location.hostname = 'localhost';
    local.telemetry.crossing('arrived');
    await local.telemetry.flush();
    assert.equal(local.requests[0].events[0].isTest, true);
});

test('an unsent crossing marker is retried with the same event ID after a reload', async () => {
    const h = harness(new Map(), async () => { throw new Error('offline'); });
    h.telemetry.crossing('departed', h.state, 'nurse_perfect_pills_black_4');
    await h.telemetry.flush();
    const original = h.requests[h.requests.length - 1].events[0];
    const restored = harness(h.storage);
    await restored.telemetry.flush();
    assert.equal(restored.requests[0].events[0].eventId, original.eventId);
    assert.equal(restored.requests[0].events[0].eventType, 'crossing_departed');
});

test('the departure marker fires when the crossing starts, and the arrival marker only on a real arrival', () => {
    const engineSource = fs.readFileSync(path.join(root, 'assets/js/modules/GameEngine.js'), 'utf8');
    let options = null;
    const calls = [];
    const env = { window: { GAME_LANG: 'ko', CrossWorld: { show: o => { options = o; } },
        CupidRouteTelemetry: { crossing: (...args) => calls.push(['crossing', ...args]) },
        soundManager: { stopBgm: () => calls.push(['stopBgm']) }, matchMedia: () => ({ matches: false }) },
        document: { documentElement: { lang: 'ko' } }, console };
    vm.runInNewContext(engineSource, env);
    const engine = Object.create(env.window.GameEngine.prototype);
    engine.stateManager = { playerName: 'x' };
    engine.sceneRenderer = { currentSceneId: 'nurse_perfect_pills_black_4' };
    engine.saveManager = {};
    engine.uiManager = { dialogueBox: {} };
    engine._redirectToNevergrad();
    assert.equal(calls.length, 0, 'showing the confirmation alone records nothing');
    options.onLeave();
    assert.deepEqual(calls.map(call => call[0]), ['crossing', 'stopBgm']);
    assert.equal(calls[0][1], 'departed');
    assert.equal(calls[0][2], engine.stateManager);
    assert.equal(calls[0][3], 'nurse_perfect_pills_black_4');
    // A telemetry failure must not stop the audio fade or the crossing.
    env.window.CupidRouteTelemetry.crossing = () => { throw new Error('boom'); };
    calls.length = 0;
    assert.doesNotThrow(() => options.onLeave());
    assert.deepEqual(calls.map(call => call[0]), ['stopBgm']);

    const loader = fs.readFileSync(path.join(root, 'assets/js/loaders/game-loader.js'), 'utf8');
    assert.match(loader, /if \(arrival\) \{\s*try \{ if \(window\.CupidRouteTelemetry\) window\.CupidRouteTelemetry\.crossing\('arrived'\); \}/);
    assert.match(loader, /const arrival = window\.CrossWorld\.takeArrival\('cupid'\);/);
});
