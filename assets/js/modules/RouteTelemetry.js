/** Day 4 temptation / Day 5 confrontation diagnostics and Nevergrad crossing markers. No dialogue or player names. */
(() => {
    const KEY = 'cupid_pending_route_events_v1';
    const CHARACTERS = ['Seoyeon', 'Yuna', 'Dain', 'Teacher', 'Nurse', 'Haeun'];
    const isHaeunScene = id => /^day[45]_(?:haeun_|ending_haeun)/.test(id);
    const GATES = new Set(['morning4_end', 'day4_date_branch', 'day4_night_branch', 'day4_student_visit_branch', 'day4_student_visit_teacher_branch', 'day4_student_checkin_return_home', 'day4_student_night_branch', 'day4_waited_night_branch', 'morning5_start_branch', 'morning5_temptation_discovery_branch', 'morning5_temptation_counteroffer_branch']);
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
    const MAX_ATTEMPTS = 6;
    function reportFailure(error, batch, errorType, extra = {}) {
        try {
            window.logCupidError?.(error instanceof Error ? error : new Error(String(error || errorType)), {
                source: 'CupidRouteTelemetry.flush',
                errorType,
                errorClass: error?.cupidStatus ? 'http' : (error?.cupidClientException ? 'client' : (error?.name || 'route-events')),
                context: { eventTypes: [...new Set(batch.map(item => item.event.eventType))].slice(0, 8) },
                extra: {
                    eventIds: batch.map(item => item.event.eventId).slice(0, 8),
                    httpStatus: Number(error?.cupidStatus || 0),
                    attempts: Math.max(...batch.map(item => Number(item.attempts || 0)), 0),
                    ...extra
                }
            });
        } catch (_) { /* Diagnostics must never interrupt a scene. */ }
    }
    function nextBatch(skip = new Set()) {
        const first = pending.find(item => !skip.has(item.event.eventId));
        if (!first) return [];
        return pending.filter(item => !skip.has(item.event.eventId)
            && item.appId === first.appId && item.userId === first.userId).slice(0, 8);
    }
    // keepalive는 pagehide에서만, error-reporter.js가 관리하는 한도 안에서 씁니다. 평소에는 일반 요청(15초 시간 제한)입니다.
    async function sendBatch(batch, options = {}) {
        const first = batch[0];
        const result = await window.sendCupidLogRequest(API_ENDPOINT + 'cupid-route-events', {
            label: 'cupid-route-events',
            headers: { 'Content-Type': 'application/json', 'x-app-id': first.appId },
            body: JSON.stringify({ appId: first.appId, userId: first.userId, events: batch.map(item => item.event) }),
            keepalive: options.keepalive === true,
            keepaliveOnly: options.keepalive === true
        });
        let parsed = null;
        try { parsed = JSON.parse(result.text || 'null'); } catch (_) { parsed = null; }
        if (!parsed?.ok || !Array.isArray(parsed.eventIds)) {
            const error = new Error('route telemetry missing acknowledgement');
            error.cupidClientException = true;
            throw error;
        }
        const acknowledged = new Set(parsed.eventIds);
        pending = pending.filter(item => !acknowledged.has(item.event.eventId));
        persist(acknowledged);
        return acknowledged.size;
    }
    function handleFailure(error, batch) {
        const ids = new Set(batch.map(item => item.event.eventId));
        const attempts = Math.max(...batch.map(item => Number(item.attempts || 0)), 0) + 1;
        const transient = window.isCupidLogTransientError?.(error) === true;
        const retryableHttp = window.isCupidLogRetryableHttpStatus?.(error?.cupidStatus) === true;
        // 네트워크 단절·시간 초과가 아닌 실패는 첫 발생 때 바로 D1 오류 로그로 남깁니다.
        if (!transient && attempts === 1) {
            reportFailure(error, batch, error?.cupidClientException ? 'route_events_client_exception' : 'route_events_send_failed');
        }
        if ((transient || retryableHttp) && attempts < MAX_ATTEMPTS) {
            const lastError = String(error?.message || error).substring(0, 200);
            pending = pending.map(item => ids.has(item.event.eventId) ? { ...item, attempts, lastError } : item);
            persist();
            return Math.min(15000 * attempts, 120000);
        }
        const firstError = batch[0]?.lastError || '';
        pending = pending.filter(item => !ids.has(item.event.eventId));
        persist(ids);
        reportFailure(error, batch.map(item => ({ ...item, attempts })), 'route_events_queue_dropped', {
            reason: (transient || retryableHttp) ? 'max_attempts' : 'non_retryable',
            maxAttempts: MAX_ATTEMPTS,
            firstError
        });
        return 200;
    }
    async function flush() {
        if (busy || !pending.length) return;
        if (typeof window.sendCupidLogRequest !== 'function') return;
        if (typeof navigator !== 'undefined' && navigator.onLine === false) return;
        busy = true;
        const batch = nextBatch();
        let delay = 200;
        try {
            await sendBatch(batch);
            retryMs = 2000;
        } catch (error) {
            delay = handleFailure(error, batch);
            retryMs = delay;
        } finally {
            busy = false;
            schedule(pending.length ? delay : retryMs);
        }
    }
    // 페이지를 떠날 때: 한도 안에서만 keepalive로 보내고, 남은 것은 큐에 두어 다음 방문 때 보냅니다.
    function flushOnPageHide() {
        try {
            if (!pending.length || typeof window.sendCupidLogRequest !== 'function') return;
            if (typeof navigator !== 'undefined' && navigator.onLine === false) return;
            const sentIds = new Set();
            for (let i = 0; i < 4; i++) {
                const batch = nextBatch(sentIds);
                if (!batch.length) break;
                batch.forEach(item => sentIds.add(item.event.eventId));
                sendBatch(batch, { keepalive: true }).catch(() => { /* 큐에 남겨 다음 방문 때 보냅니다. */ });
            }
        } catch (error) {
            reportFailure(error, [], 'route_events_client_exception', { stage: 'pagehide' });
        }
    }
    function route(state) {
        if (state.getFlag('haeun_route_selected') || state.getFlag('route_haeun')) return 'Haeun';
        const establishedRoute = CHARACTERS.find(name => state.getFlag('route_' + name.toLowerCase()));
        if (establishedRoute) return establishedRoute;
        if (state.getFlag('homeroom_day4')) return 'Teacher';
        if (state.getFlag('nurse_day4')) return 'Nurse';
        return '';
    }
    function isTestTraffic() {
        return window.CUPID_ROUTE_TELEMETRY_TEST === true
            || /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname)
            || window.location.hostname.endsWith('.pages.dev');
    }
    // Nevergrad <-> Cupid crossing markers. Same queue, endpoint and fields as the other route events;
    // the payload only names the direction. Fire-and-forget: the flush is never awaited (pagehide sends
    // what is still queued with keepalive), a failure leaves the event in the persisted queue for the next visit, and nothing here
    // can throw into the game or delay the page change. The guard drops a repeat of the same direction
    // within 30 s (a retried departure click); an arrival cannot repeat on reload because takeArrival
    // strips ?gate=1 from the URL.
    const crossingSeen = {};
    let crossingRunId = '';
    function crossing(kind, state = null, sceneId = '') {
        try {
            if (kind !== 'arrived' && kind !== 'departed') return;
            const now = Date.now();
            if (crossingSeen[kind] && now - crossingSeen[kind] < 30000) return;
            crossingSeen[kind] = now;
            const arrived = kind === 'arrived';
            if (state && !state.telemetryRunId) state.telemetryRunId = uuid();
            if (!state && !crossingRunId) crossingRunId = uuid();
            const day = Number(state?.currentDay);
            const scene = String(sceneId || (arrived ? 'start' : '')).replace(/[^a-zA-Z0-9_.:-]/g, '').slice(0, 120) || (arrived ? 'start' : 'unknown');
            pending.push({ appId: window.getCupidAppId(), userId: window.getCupidDeviceId(), event: {
                eventId: uuid(), runId: state?.telemetryRunId || crossingRunId, eventType: 'crossing_' + kind,
                sceneId: scene, nextSceneId: '',
                day: Number.isInteger(day) && day >= 1 && day <= 5 ? day : (arrived ? 1 : 5),
                route: state ? route(state) : '', version: ASSET_VERSION, clientTime: new Date().toISOString(),
                isTest: isTestTraffic(),
                details: arrived ? { from: 'nevergrad', to: 'cupid' } : { from: 'cupid', to: 'nevergrad' }
            } });
            pending = pending.slice(-500);
            persist();
            void flush();
        } catch (_) { /* Diagnostics must never interrupt a crossing. */ }
    }
    function emit(state, sceneId, eventType, details = {}, nextSceneId = '', dayOverride = null) {
        try {
            if (!state.telemetryRunId) state.telemetryRunId = uuid();
            const affinities = Object.fromEntries(CHARACTERS.map(name => [name, state.getAffinity(name)]));
            const flags = Object.fromEntries(Object.entries(state.flags || {}).filter(([key, value]) =>
                typeof value === 'boolean' && /^(day4_|day5_haeun_|haeun_|route_|day3_caught_multiple_dates$|harem_seed$|homeroom_day4$|nurse_day4$)/.test(key)));
            pending.push({ appId: window.getCupidAppId(), userId: window.getCupidDeviceId(), event: {
                eventId: uuid(), runId: state.telemetryRunId, eventType, sceneId, nextSceneId,
                day: Number.isInteger(dayOverride) ? dayOverride : (/^(morning5_|day5_)/.test(sceneId) ? 5 : 4),
                route: route(state), version: ASSET_VERSION, clientTime: new Date().toISOString(),
                isTest: isTestTraffic(),
                details: { ...details, affinities, flags }
            } });
            pending = pending.slice(-500);
            persist();
            schedule();
        } catch (_) { /* Diagnostics must never interrupt a scene. */ }
    }
    function isOffer(scene) {
        return scene?.choices?.some(choice => choice.setFlags?.some(flag => ['day4_counteroffer_penalty_deferred', 'haeun_route_selected'].includes(flag)));
    }
    function entered(state, sceneId, scene, restoring = false) {
        const milestones = { morning4_start: 'day4_entered', day4_night_start: 'night_entered', morning5_start: 'morning_entered' };
        if (milestones[sceneId]) emit(state, sceneId, milestones[sceneId], { restoring });
        if (isOffer(scene)) emit(state, sceneId, 'offer_entered', { restoring });
        if ((/^(wall_|day4_|morning5_)/.test(sceneId) || isHaeunScene(sceneId)) && (scene.type === 'free_talk' || scene.type === 'group_free_talk')) {
            emit(state, sceneId, 'freetalk_entered', {
                restoring, sceneType: scene.type, maxTurns: scene.maxTurns,
                ...(scene.romanticInterlude === true && { dialogueAffinity: 100, affinityLocked: scene.affinityLocked === true })
            });
        }
        if (['day4_student_checkin_return_home', 'day4_caught_fallout_4', 'day4_harem_fallout_4', 'morning5_counteroffer_gather', 'morning5_after_counteroffer', 'day4_night_regret', 'day4_night_reflect', 'morning5_caught_fallout_1', 'morning5_harem_fallout_1'].includes(sceneId)) {
            emit(state, sceneId, 'scene_checkpoint', { restoring });
        }
    }
    function transition(state, sceneId, scene, nextSceneId, guarded = false) {
        if (!scene || (!/^(wall_|day4_|morning4_|morning5_)/.test(sceneId) && !isHaeunScene(sceneId))) return;
        let selectedConditionFound = false;
        const conditions = (scene.branches || []).map(branch => {
            const passed = (!branch.condition || !!state.getFlag(branch.condition))
                && (!branch.excludeCondition || !state.getFlag(branch.excludeCondition));
            const selected = !selectedConditionFound && passed && branch.next === nextSceneId;
            if (selected) selectedConditionFound = true;
            return { condition: branch.condition || '', excludeCondition: branch.excludeCondition || '',
                next: branch.next, passed, selected };
        });
        if (guarded || GATES.has(sceneId) || scene.rankedRivalBranches || sceneId.startsWith('morning5_caught_by_')
            || (isHaeunScene(sceneId) && scene.routeBeforeRender)) {
            const selected = conditions.find(condition => condition.selected);
            const rivals = (scene.rankedRivalBranches || []).map(branch => ({ character: branch.character, affinity: state.getAffinity(branch.character), selected: branch.next === nextSceneId }));
            let reason = guarded ? 'affinity_guard' : selected?.condition || 'fallback';
            if (rivals.length) reason = rivals.some(rival => rival.selected) ? 'rival_selected' : 'no_eligible_rival';
            if (['day4_student_night_branch', 'day4_waited_night_branch'].includes(sceneId) && reason === 'fallback') reason = 'no_student_route';
            if (sceneId === 'day4_student_night_branch' && nextSceneId === 'day4_waited_night_branch') reason = 'confession_deferred';
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
            accepted: selected.setFlags?.some(flag => ['day4_counteroffer_penalty_deferred', 'haeun_route_selected'].includes(flag)) || false,
            choiceIndex: scene.choices.findIndex(choice => choice.next === selected.next
                && JSON.stringify(choice.setFlags || []) === JSON.stringify(selected.setFlags || [])), setFlags: selected.setFlags || [],
            affinityBranches: selected.affinityBranches || [], affinityEffects: selected.stats || {}
        }, nextSceneId);
    }
    function auditAffinity(state, report = {}) {
        const day = Math.min(5, Math.max(1, Number(state?.currentDay) || 1));
        const sceneId = String(report.eventKey || 'affinity').replace(/[^a-zA-Z0-9_.:-]/g, '').slice(0, 120) || 'affinity';
        if (Array.isArray(report.changes) && report.changes.length) emit(state, sceneId, 'affinity_commit', { changes: report.changes }, '', day);
        if (Array.isArray(report.reverted) && report.reverted.length) emit(state, sceneId, 'affinity_reverted', { reverted: report.reverted }, '', day);
    }
    window.CupidRouteTelemetry = { entered, transition, choice, auditAffinity, crossing, flush };
    window.addEventListener('online', () => { void flush(); });
    window.addEventListener('pagehide', flushOnPageHide);
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') void flush(); });
    schedule();
})();
