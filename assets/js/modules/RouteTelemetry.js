/** Day 4 temptation / Day 5 confrontation diagnostics. No dialogue or player names. */
(() => {
    const KEY = 'cupid_pending_route_events_v1';
    const CHARACTERS = ['Seoyeon', 'Yuna', 'Dain', 'Teacher', 'Nurse'];
    const GATES = new Set(['day4_night_branch', 'day4_student_night_branch', 'morning5_start_branch', 'morning5_temptation_discovery_branch', 'morning5_temptation_counteroffer_branch']);
    let pending = [];
    let busy = false;
    let timer = null;
    let retryMs = 2000;
    const uuid = () => crypto.randomUUID();
    function readQueue() {
        try {
            const value = JSON.parse(window.CupidStorage.getItem(KEY) || '[]');
            return Array.isArray(value) ? value.filter(item => item?.event?.eventId && item.appId && item.userId) : [];
        }
        catch (_) { return []; }
    }
    pending = readQueue();
    function persist(acknowledged = new Set()) {
        const merged = new Map([...readQueue(), ...pending].map(item => [item.event.eventId, item]));
        pending = [...merged.values()].filter(item => !acknowledged.has(item.event.eventId)).slice(-500);
        try { window.CupidStorage.setItem(KEY, JSON.stringify(pending)); } catch (_) { /* In-memory retries still work. */ }
    }
    function schedule(delay = 200) {
        if (timer || !pending.length) return;
        timer = setTimeout(() => { timer = null; void flush(); }, delay);
    }
    async function flush() {
        if (busy || !pending.length) return;
        busy = true;
        const first = pending[0];
        const batch = pending.filter(item => item.appId === first.appId && item.userId === first.userId).slice(0, 8);
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000);
        try {
            const response = await fetch(API_ENDPOINT + 'cupid-route-events', {
                method: 'POST', headers: { 'Content-Type': 'application/json', 'x-app-id': first.appId },
                body: JSON.stringify({ appId: first.appId, userId: first.userId, events: batch.map(item => item.event) }),
                credentials: 'omit', cache: 'no-store', keepalive: true, signal: controller.signal
            });
            if (!response.ok) throw new Error('route telemetry HTTP ' + response.status);
            const result = await response.json();
            if (!result.ok || !Array.isArray(result.eventIds)) throw new Error('route telemetry missing acknowledgement');
            const acknowledged = new Set(result.eventIds);
            pending = pending.filter(item => !acknowledged.has(item.event.eventId));
            persist(acknowledged);
            retryMs = 2000;
        } catch (_) {
            retryMs = Math.min(retryMs * 2, 60000);
        } finally {
            clearTimeout(timeout);
            busy = false;
            schedule(retryMs);
        }
    }
    function route(state) {
        if (state.getFlag('homeroom_day4')) return 'Teacher';
        if (state.getFlag('nurse_day4')) return 'Nurse';
        return CHARACTERS.find(name => state.getFlag('route_' + name.toLowerCase())) || '';
    }
    function emit(state, sceneId, eventType, details = {}, nextSceneId = '') {
        try {
            if (!state.telemetryRunId) state.telemetryRunId = uuid();
            const affinities = Object.fromEntries(CHARACTERS.map(name => [name, state.getAffinity(name)]));
            const flags = Object.fromEntries(Object.entries(state.flags || {}).filter(([key, value]) =>
                typeof value === 'boolean' && /^(day4_|route_|day3_caught_multiple_dates$|harem_seed$|homeroom_day4$|nurse_day4$)/.test(key)));
            pending.push({ appId: window.getCupidAppId(), userId: window.getCupidDeviceId(), event: {
                eventId: uuid(), runId: state.telemetryRunId, eventType, sceneId, nextSceneId,
                day: /^(morning5_|day5_)/.test(sceneId) ? 5 : 4,
                route: route(state), version: ASSET_VERSION, clientTime: new Date().toISOString(),
                isTest: window.CUPID_ROUTE_TELEMETRY_TEST === true
                    || /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname)
                    || window.location.hostname.endsWith('.pages.dev'),
                details: { ...details, affinities, flags }
            } });
            pending = pending.slice(-500);
            persist();
            schedule();
        } catch (_) { /* Diagnostics must never interrupt a scene. */ }
    }
    function isOffer(scene) {
        return scene?.choices?.some(choice => choice.setFlags?.includes('day4_counteroffer_penalty_deferred'));
    }
    function entered(state, sceneId, scene, restoring = false) {
        const milestones = { morning4_start: 'day4_entered', day4_night_start: 'night_entered', morning5_start: 'morning_entered' };
        if (milestones[sceneId]) emit(state, sceneId, milestones[sceneId], { restoring });
        if (isOffer(scene)) emit(state, sceneId, 'offer_entered', { restoring });
        if (/^(wall_|day4_|morning5_)/.test(sceneId) && (scene.type === 'free_talk' || scene.type === 'group_free_talk')) {
            emit(state, sceneId, 'freetalk_entered', { restoring, sceneType: scene.type });
        }
        if (['day4_night_regret', 'day4_night_reflect', 'morning5_caught_fallout_1', 'morning5_harem_fallout_1'].includes(sceneId)) {
            emit(state, sceneId, 'scene_checkpoint', { restoring });
        }
    }
    function transition(state, sceneId, scene, nextSceneId, guarded = false) {
        if (!scene || !/^(wall_|day4_|morning5_)/.test(sceneId)) return;
        const conditions = (scene.branches || []).map(branch => ({
            condition: branch.condition || '', excludeCondition: branch.excludeCondition || '', next: branch.next,
            passed: (!branch.condition || !!state.getFlag(branch.condition)) && (!branch.excludeCondition || !state.getFlag(branch.excludeCondition)),
            selected: branch.next === nextSceneId
        }));
        if (guarded || GATES.has(sceneId) || scene.rankedRivalBranches || sceneId.startsWith('morning5_caught_by_')) {
            const selected = conditions.find(condition => condition.selected);
            const rivals = (scene.rankedRivalBranches || []).map(branch => ({ character: branch.character, affinity: state.getAffinity(branch.character), selected: branch.next === nextSceneId }));
            let reason = guarded ? 'affinity_guard' : selected?.condition || 'fallback';
            if (rivals.length) reason = rivals.some(rival => rival.selected) ? 'rival_selected' : 'no_eligible_rival';
            if (sceneId === 'day4_student_night_branch' && reason === 'fallback') reason = 'no_student_route';
            if (sceneId === 'morning5_start_branch' && !state.getFlag('day4_counteroffer_penalty_deferred')
                && !['day3_caught_multiple_dates', 'harem_seed'].includes(reason)) reason = 'no_counteroffer_accepted';
            emit(state, sceneId, 'gate_evaluated', {
                reason, conditions, rivals, guard: guarded ? scene.affinityGuard : null,
                minimumRivalAffinity: scene.minRivalAffinity ?? null,
                wouldFailFormerZeroGate: rivals.length ? rivals.every(rival => rival.affinity < 0) : null
            }, nextSceneId);
        }
        if (scene.type === 'free_talk' || scene.type === 'group_free_talk') emit(state, sceneId, 'freetalk_exited', {}, nextSceneId);
    }
    function choice(state, sceneId, scene, selected, nextSceneId) {
        if (!isOffer(scene)) return;
        emit(state, sceneId, 'offer_choice', {
            accepted: selected.setFlags?.includes('day4_counteroffer_penalty_deferred') || false,
            choiceIndex: scene.choices.findIndex(choice => choice.next === selected.next
                && JSON.stringify(choice.setFlags || []) === JSON.stringify(selected.setFlags || [])), setFlags: selected.setFlags || [],
            affinityBranches: selected.affinityBranches || []
        }, nextSceneId);
    }
    window.CupidRouteTelemetry = { entered, transition, choice, flush };
    window.addEventListener('online', () => { void flush(); });
    window.addEventListener('pagehide', () => { void flush(); });
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') void flush(); });
    schedule();
})();
