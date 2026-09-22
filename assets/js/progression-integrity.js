(function (root, createIntegrity) {
    'use strict';
    if (typeof module !== 'undefined' && module.exports) module.exports = createIntegrity;
    if (root) root.CupidProgressIntegrity = createIntegrity({ storage: root.CupidStorage, locks: root.navigator?.locks, crypto: root.crypto });
})(typeof window !== 'undefined' ? window : null, function (options) {
    'use strict';
    const { storage, locks, crypto } = options || {};
    const key = 'cupid_progress_integrity_v1';
    const copy = value => JSON.parse(JSON.stringify(value));
    const fields = ['playerName', 'currentDay', 'stats', 'flags', 'freeTalkCheckpoint', 'progressionRunId', 'progressionRevision', 'telemetryRunId', 'appliedAffinityCorrections'];
    const critical = state => Object.fromEntries(fields.filter(field => state[field] !== undefined).map(field => [field, copy(state[field])]));
    const uuid = () => crypto?.randomUUID?.() || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
    function read() {
        try { const value = JSON.parse(storage?.getItem(key) || 'null'); return value?.version === 1 && value.runId ? value : null; } catch (_) { return null; }
    }
    function persist(value) { storage?.setItem(key, JSON.stringify(value)); }
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
            return { applied: true, value };
        } catch (error) {
            Object.assign(state, before);
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
        if (record?.runId === saveData.gameState.progressionRunId && record.pendingNextScene) {
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
