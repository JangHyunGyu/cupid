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
        h.state.stats[character].affinity = 71;
        h.state.stats.Nurse.affinity = 16;
        const saved = h.state.exportState();
        h.state.importState(saved);
        h.telemetry.entered(h.state, 'day4_night_start', h.scenes.day4_night_start);
        const gate = h.scenes.day4_night_branch;
        h.telemetry.transition(h.state, 'day4_night_branch', gate, h.renderer.resolveNextScene(gate));
        h.state.stats[character].affinity = 10;
        h.state.stats.Nurse.affinity = 100;
        h.telemetry.entered(h.state, 'morning5_start', h.scenes.morning5_start);
        await h.telemetry.flush();
        const events = h.requests[0].events;
        assert.ok(events.every(event => event.route === character));
        assert.equal(events[1].details.reason, `route_${character.toLowerCase()}`);
        assert.equal(events[1].nextSceneId, 'day4_student_night_branch');
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

test('temptation diagnostics distinguish the +30 reward and mutable real scores from dialogue affinity 100', async () => {
    const h = harness();
    const id = 'wall_dain_seo_tempt_2';
    const scene = h.scenes[id];
    const accept = scene.choices[1];
    h.state.stats.Seoyeon.affinity = 50;
    h.telemetry.choice(h.state, id, scene, accept, accept.next);
    const talkId = 'day4_temptation_seoyeon_freetalk';
    h.telemetry.entered(h.state, talkId, h.scenes[talkId]);
    h.state.stats.Seoyeon.affinity = 46;
    h.telemetry.transition(h.state, talkId, h.scenes[talkId], h.scenes[talkId].next);
    await h.telemetry.flush();
    const [choice, entry, exit] = h.requests[0].events;
    assert.equal(choice.details.affinityEffects.Seoyeon.affinity, 30);
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
