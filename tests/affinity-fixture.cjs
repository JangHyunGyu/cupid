'use strict';
// Seed restored states and exercise production authorization, never direct setters.
const contexts = new WeakMap();
function register(state, context) { contexts.set(state, context); }
function seed(state, character, affinity) {
    state.restoreCommittedAffinities({ [character]: { affinity } });
}
async function award(state, character, amount) {
    const context = contexts.get(state);
    const result = await state.commitProgressEvent('talk:fixture:0', function commitTurn() {
        if (!context.window.CupidAffinityGate.grant(character, amount)) throw new Error('Fixture grant refused');
        return state.changeAffinity(character, amount);
    });
    return result.value;
}
async function scene(context, state, renderer, scenes, node) {
    const id = Object.keys(scenes).find(id => scenes[id] === node);
    if (!id) throw new Error('Fixture scene missing');
    renderer.currentSceneId = id;
    await state.commitProgressEvent(`scene:${id}`, () => renderer.processSceneStats(node));
}
async function talk(context, ...args) {
    const result = await context.stateManager.commitProgressEvent(`talk:${context.currentSceneId}:0`, function commitTurn() {
        return context.applyAffinity(...args);
    });
    return result.value;
}
module.exports = { register, seed, award, scene, talk };
