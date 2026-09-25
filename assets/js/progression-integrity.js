(function (root, createIntegrity) {
    'use strict';
    if (typeof module !== 'undefined' && module.exports) module.exports = createIntegrity;
    if (root) root.CupidProgressIntegrity = createIntegrity({ storage: root.CupidStorage, locks: root.navigator?.locks, crypto: root.crypto });
})(typeof window !== 'undefined' ? window : null, function (options) {
    'use strict';
    const { storage, locks, crypto } = options || {};
    const key = 'cupid_progress_integrity_v1';
    const sealKey = 'cupid-affinity-seal-v1:k9Qm4rV2pL8sN1wX6cH3dF0';
    function sealText(snapshot, runId, revision) {
        const stats = snapshot?.stats || {};
        const body = Object.keys(stats).sort().map(name => `${name}=${Number(stats[name]?.affinity) || 0}`).join(',');
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
        return !!record?.seal && record.seal === sealMac(sealText(record.snapshot, record.runId, record.revision));
    }
    function clearSealedAffinities(record) {
        for (const stat of Object.values(record?.snapshot?.stats || {})) {
            if (stat && typeof stat === 'object') stat.affinity = 0;
        }
        stamp(record);
        storage?.setItem(key, JSON.stringify(record));
    }
    const copy = value => JSON.parse(JSON.stringify(value));
    const fields = ['playerName', 'currentDay', 'stats', 'flags', 'freeTalkCheckpoint', 'progressionRunId', 'progressionRevision', 'telemetryRunId', 'appliedAffinityCorrections'];
    const critical = state => Object.fromEntries(fields.filter(field => state[field] !== undefined).map(field => [field, copy(state[field])]));
    const uuid = () => crypto?.randomUUID?.() || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
    function read() {
        try {
            const value = JSON.parse(storage?.getItem(key) || 'null');
            if (!(value?.version === 1 && value.runId)) return null;
            if (value.sealed && !sealMatches(value)) {
                clearSealedAffinities(value);
            }
            return value;
        } catch (_) { return null; }
    }
    function persist(value) { stamp(value); storage?.setItem(key, JSON.stringify(value)); }
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
            const score = Number(value?.affinity);
            if (Number.isFinite(score)) out[key] = score;
        }
        return out;
    }
    function uncommittedAffinityEdits(state, snapshot) {
        const saved = affinityMap(snapshot?.stats);
        const live = affinityMap(state?.stats);
        return Object.entries(saved)
            .filter(([key, expected]) => live[key] !== undefined && live[key] !== expected)
            .map(([key, expected]) => ({ character: key, from: live[key], to: expected }));
    }
    function restoreUncommittedAffinities(state, snapshot) {
        if (typeof state?.restoreCommittedAffinities === 'function') {
            state.restoreCommittedAffinities(snapshot?.stats);
            return;
        }
        const saved = snapshot?.stats;
        const live = state?.stats;
        if (!saved || !live) return;
        for (const [key, snap] of Object.entries(saved)) {
            if (!live[key] || snap == null || !Object.prototype.hasOwnProperty.call(snap, 'affinity')) continue;
            live[key].affinity = snap.affinity;
        }
    }
    function affinityChanges(beforeStats, afterStats) {
        const before = affinityMap(beforeStats);
        const after = affinityMap(afterStats);
        return [...new Set([...Object.keys(before), ...Object.keys(after)])].flatMap(key => {
            if (after[key] === undefined || before[key] === after[key]) return [];
            const from = before[key] ?? 0;
            return [{ character: key, before: from, delta: after[key] - from, after: after[key] }];
        });
    }
    function auditAffinity(state, eventKey, report) {
        const telemetry = typeof window !== 'undefined' ? window.CupidRouteTelemetry : null;
        try { telemetry?.auditAffinity?.(state, { eventKey, ...report }); } catch (_) { /* A log must not block play. */ }
    }
    function commit(state, eventKey, operation, metadata = {}) {
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
            if (value?.then) throw new Error('Progress operations must be synchronous');
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
            state._installAffinityGuards?.();
            throw error;
        }
    }
    function checkpoint(state, sceneId) {
        const record = read();
        return record?.runId === state.progressionRunId && record.checkpoints?.[sceneId] ? copy(record.checkpoints[sceneId]) : null;
    }
    function save(saveData) {
        const record = read();
        if (!record) return true;
        const state = saveData.gameState;
        if (state?.progressionRunId !== record.runId || Number(state.progressionRevision || 0) !== record.revision) return false;
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
        if (!saveData?.gameState) return false;
        const changed = restoreState(saveData.gameState);
        const record = read();
        if (changed && record?.sceneId) {
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
    let queue = Promise.resolve();
    function withLock(operation) {
        if (locks?.request) return locks.request('cupid-progress-integrity', { mode: 'exclusive' }, operation);
        const result = queue.then(operation, operation);
        queue = result.catch(() => {});
        return result;
    }
    return Object.freeze({ start, commit, checkpoint, save, restoreState, restoreSave, withLock });
});
