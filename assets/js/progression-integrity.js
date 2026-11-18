(function (root, createIntegrity) {
    'use strict'; var __oc0;
    if (typeof module !== 'undefined' && module.exports) module.exports = createIntegrity;
    if (root) root.CupidProgressIntegrity = createIntegrity({ storage: root.CupidStorage, locks: (((__oc0 = root.navigator) === null || __oc0 === void 0 ? void 0 : __oc0.locks)), crypto: root.crypto });
})(typeof window !== 'undefined' ? window : null, function (options) {
    'use strict';
    const { storage, locks, crypto } = options || {};
    const key = 'cupid_progress_integrity_v1';
    const sealKey = 'cupid-affinity-seal-v1:k9Qm4rV2pL8sN1wX6cH3dF0';
    function sealText(snapshot, runId, revision) {
        const stats = ((snapshot === null || snapshot === void 0 ? void 0 : snapshot.stats)) || {};
        const body = Object.keys(stats).sort().map(name => { var __oc1; return (
`${name}=${Number((((__oc1 = stats[name]) === null || __oc1 === void 0 ? void 0 : __oc1.affinity))) || 0}`
); }).join(',');
        return `${sealKey}|${runId}|${revision}|${body}`;
    }
    function sealMac(text) {
        let hash = 2166136261;
        for (let i = 0; i < text.length; i++) {
            hash ^= text.charCodeAt(i);
            hash = Math.imul(hash, 16777619);
        }
        return (hash >>> 0).toString(16).padStart(8, '0');
    }
    function stamp(record) {
        if (!record) return;
        record.sealed = true;
        record.seal = sealMac(sealText(record.snapshot, record.runId, record.revision));
    }
    function sealMatches(record) {
        return !!((record === null || record === void 0 ? void 0 : record.seal)) && record.seal === sealMac(sealText(record.snapshot, record.runId, record.revision));
    }
    function clearSealedAffinities(record) { var __oc2;
        for (const stat of Object.values((((__oc2 = record === null || record === void 0 ? void 0 : record.snapshot) === null || __oc2 === void 0 ? void 0 : __oc2.stats)) || {})) {
            if (stat && typeof stat === 'object') stat.affinity = 0;
        }
        stamp(record);
        ((storage === null || storage === void 0 ? void 0 : storage.setItem(key, JSON.stringify(record))));
    }
    const copy = value => JSON.parse(JSON.stringify(value));
    const fields = ['playerName', 'currentDay', 'stats', 'flags', 'freeTalkCheckpoint', 'progressionRunId', 'progressionRevision', 'telemetryRunId', 'appliedAffinityCorrections'];
    const critical = state => Object.fromEntries(fields.filter(field => state[field] !== undefined).map(field => [field, copy(state[field])]));
    const uuid = () => { var __oc3; return (
(((__oc3 = crypto === null || crypto === void 0 ? void 0 : crypto.randomUUID) === null || __oc3 === void 0 ? void 0 : __oc3.call(crypto))) || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
); };
    function read() {
        try {
            const value = JSON.parse(((storage === null || storage === void 0 ? void 0 : storage.getItem(key))) || 'null');
            if (!(((value === null || value === void 0 ? void 0 : value.version)) === 1 && value.runId)) return null;
            if (value.sealed && !sealMatches(value)) {
                clearSealedAffinities(value);
            }
            return value;
        } catch (_) { return null; }
    }
    function persist(value) { stamp(value); ((storage === null || storage === void 0 ? void 0 : storage.setItem(key, JSON.stringify(value)))); }
    function start(state) {
        state.progressionRunId = uuid();
        state.progressionRevision = 0;
        persist({ version: 1, runId: state.progressionRunId, revision: 0, receipts: {}, checkpoints: {}, snapshot: critical(state) });
    }
    function restoreState(state) {
        const record = read();
        if (!record) return false;
        if (state.progressionRunId !== record.runId || Number(state.progressionRevision || 0) !== record.revision
            || JSON.stringify(critical(state)) !== JSON.stringify(record.snapshot)) {
            Object.assign(state, copy(record.snapshot));
            return true;
        }
        return false;
    }
    function conflict() {
        const error = new Error('A newer game progress revision already owns this action');
        error.name = 'ProgressConflictError';
        error.isStaleTurn = true;
        error.reason = 'STALE_TURN';
        return error;
    }
    function affinityMap(stats) {
        const out = {};
        if (!stats || typeof stats !== 'object') return out;
        for (const [key, value] of Object.entries(stats)) {
            const score = Number(((value === null || value === void 0 ? void 0 : value.affinity)));
            if (Number.isFinite(score)) out[key] = score;
        }
        return out;
    }
    function uncommittedAffinityEdits(state, snapshot) {
        const saved = affinityMap(((snapshot === null || snapshot === void 0 ? void 0 : snapshot.stats)));
        const live = affinityMap(((state === null || state === void 0 ? void 0 : state.stats)));
        return Object.entries(saved)
            .filter(([key, expected]) => live[key] !== undefined && live[key] !== expected)
            .map(([key, expected]) => ({ character: key, from: live[key], to: expected }));
    }
    function restoreUncommittedAffinities(state, snapshot) {
        if (typeof ((state === null || state === void 0 ? void 0 : state.restoreCommittedAffinities)) === 'function') {
            state.restoreCommittedAffinities(((snapshot === null || snapshot === void 0 ? void 0 : snapshot.stats)));
            return;
        }
        const saved = ((snapshot === null || snapshot === void 0 ? void 0 : snapshot.stats));
        const live = ((state === null || state === void 0 ? void 0 : state.stats));
        if (!saved || !live) return;
        for (const [key, snap] of Object.entries(saved)) {
            if (!live[key] || snap == null || !Object.prototype.hasOwnProperty.call(snap, 'affinity')) continue;
            live[key].affinity = snap.affinity;
        }
    }
    function affinityChanges(beforeStats, afterStats) {
        const before = affinityMap(beforeStats);
        const after = affinityMap(afterStats);
        return [...new Set([...Object.keys(before), ...Object.keys(after)])].flatMap(key => { var __oc4;
            if (after[key] === undefined || before[key] === after[key]) return [];
            const from = (((__oc4 = before[key]) !== null && __oc4 !== void 0 ? __oc4 : 0));
            return [{ character: key, before: from, delta: after[key] - from, after: after[key] }];
        });
    }
    function auditAffinity(state, eventKey, report) { var __oc5;
        const telemetry = typeof window !== 'undefined' ? window.CupidRouteTelemetry : null;
        try { (((__oc5 = telemetry === null || telemetry === void 0 ? void 0 : telemetry.auditAffinity) === null || __oc5 === void 0 ? void 0 : __oc5.call(telemetry, state, { eventKey, ...report }))); } catch (_) { /* A log must not block play. */ }
    }
    function commit(state, eventKey, operation, metadata = {}) { var __oc6;
        if (!storage) return { applied: true, value: operation() };
        let record = read();
        if (!record) {
            if (!state.progressionRunId) state.progressionRunId = uuid();
            state.progressionRevision = Number(state.progressionRevision) || 0;
            record = { version: 1, runId: state.progressionRunId, revision: state.progressionRevision, receipts: {}, checkpoints: {}, snapshot: critical(state) };
        }
        if (!state.progressionRunId) restoreState(state);
        if (state.progressionRunId !== record.runId || Number(state.progressionRevision || 0) !== record.revision) throw conflict();
        if (metadata.arrivedScene && record.pendingNextScene) record.pendingNextScene = metadata.arrivedScene;
        if (Object.hasOwn(record.receipts, eventKey)) {
            if (metadata.arrivedScene) persist(record);
            return { applied: false, value: record.receipts[eventKey] };
        }
        const reverted = uncommittedAffinityEdits(state, record.snapshot);
        restoreUncommittedAffinities(state, record.snapshot);
        if (reverted.length) auditAffinity(state, eventKey, { reverted });
        const before = critical(state);
        try {
            const value = operation();
            if (((value === null || value === void 0 ? void 0 : value.then))) throw new Error('Progress operations must be synchronous');
            state.progressionRevision = record.revision + 1;
            record.receipts[eventKey] = typeof value === 'string' ? value : true;
            if (metadata.checkpoint) {
                const checkpoint = typeof metadata.checkpoint === 'function' ? metadata.checkpoint() : metadata.checkpoint;
                state.freeTalkCheckpoint = copy(checkpoint);
                record.checkpoints[checkpoint.sceneId] = copy(checkpoint);
            }
            if (metadata.transition && typeof value === 'string') record.pendingNextScene = value;
            record.revision = state.progressionRevision;
            record.snapshot = critical(state);
            persist(record);
            const changes = affinityChanges(before.stats, record.snapshot.stats);
            if (changes.length) auditAffinity(state, eventKey, { changes });
            return { applied: true, value };
        } catch (error) {
            Object.assign(state, before);
            (((__oc6 = state._installAffinityGuards) === null || __oc6 === void 0 ? void 0 : __oc6.call(state)));
            throw error;
        }
    }
    function checkpoint(state, sceneId) { var __oc7;
        const record = read();
        return ((record === null || record === void 0 ? void 0 : record.runId)) === state.progressionRunId && (((__oc7 = record.checkpoints) === null || __oc7 === void 0 ? void 0 : __oc7[sceneId])) ? copy(record.checkpoints[sceneId]) : null;
    }
    function save(saveData) {
        const record = read();
        if (!record) return true;
        const state = saveData.gameState;
        if (((state === null || state === void 0 ? void 0 : state.progressionRunId)) !== record.runId || Number(state.progressionRevision || 0) !== record.revision) return false;
        const reverted = uncommittedAffinityEdits(state, record.snapshot);
        restoreUncommittedAffinities(state, record.snapshot);
        if (reverted.length) auditAffinity(state, 'save', { reverted });
        record.snapshot = critical(state);
        record.sceneId = saveData.currentSceneId;
        record.lastBgUrl = saveData.lastBgUrl;
        record.currentCharacters = saveData.currentCharacters;
        if (record.pendingNextScene === record.sceneId) delete record.pendingNextScene;
        persist(record);
        return true;
    }
    function restoreSave(saveData) {
        if (!((saveData === null || saveData === void 0 ? void 0 : saveData.gameState))) return false;
        const changed = restoreState(saveData.gameState);
        const record = read();
        if (changed && ((record === null || record === void 0 ? void 0 : record.sceneId))) {
            saveData.currentSceneId = record.sceneId;
            saveData.lastBgUrl = record.lastBgUrl || '';
            saveData.currentCharacters = record.currentCharacters || {};
        }
        if (record && record.runId === saveData.gameState.progressionRunId && record.pendingNextScene) {
            saveData.currentSceneId = record.pendingNextScene;
            saveData.pendingEntryEffects = true;
            return true;
        }
        return changed;
    }
    // 일회성 호감도 재조정은 봉인된 스냅샷과 다를 수 있다. 같은 회차의 저장을
    // 재조정 결과로 다시 봉인해야 다음 불러오기가 예전 100점으로 되돌리지 않는다.
    function commitMigration(saveData) {
        const record = read();
        const state = ((saveData === null || saveData === void 0 ? void 0 : saveData.gameState));
        if (!record || !state) return false;
        if (!state.progressionRunId || state.progressionRunId !== record.runId) return false;
        if (Number(state.progressionRevision || 0) !== record.revision) return false;
        record.snapshot = critical(state);
        record.sceneId = saveData.currentSceneId;
        record.lastBgUrl = saveData.lastBgUrl || '';
        record.currentCharacters = saveData.currentCharacters || {};
        delete record.pendingNextScene;
        persist(record);
        return true;
    }
    let queue = Promise.resolve();
    let locksDenied = false;
    function withQueue(operation) {
        const result = queue.then(operation, operation);
        queue = result.catch(() => {});
        return result;
    }
    function withLock(operation) {
        if (!((locks === null || locks === void 0 ? void 0 : locks.request)) || locksDenied) return withQueue(operation);
        let started = false;
        const run = lock => {
            started = true;
            return operation(lock);
        };
        // 쿠키·사이트 데이터를 막은 브라우저는 Web Locks 요청을 SecurityError('The request was denied.')로
        // 거절합니다. 잠금을 못 받았을 뿐 작업은 아직 돌지 않았으니, 탭 안 대기열로 순서만 지키고 이어갑니다.
        // 작업이 시작된 뒤 난 오류나 다른 종류의 오류는 그대로 올려 코드 버그로 남깁니다.
        const fallback = error => {
            if (started || ((error === null || error === void 0 ? void 0 : error.name)) !== 'SecurityError') throw error;
            locksDenied = true;
            return withQueue(operation);
        };
        try {
            return Promise.resolve(locks.request('cupid-progress-integrity', { mode: 'exclusive' }, run)).catch(fallback);
        } catch (error) {
            return new Promise(resolve => resolve(fallback(error)));
        }
    }
    return Object.freeze({ start, commit, checkpoint, save, restoreState, restoreSave, commitMigration, withLock });
});
