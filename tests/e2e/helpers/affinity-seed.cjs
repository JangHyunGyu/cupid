'use strict';

// Since d42fcee2 the game ignores direct affinity writes and reverts any value that
// differs from the sealed progress snapshot on the next commit or save. E2E cases that
// need a starting score seed it the way a restored save does (restoreCommittedAffinities)
// and then re-anchor the progress record, mirroring tests/affinity-fixture.cjs.
// Use this only to set up preconditions; score changes under test must go through play.
async function installAffinitySeeder(page) {
    await page.addInitScript(() => {
        Object.defineProperty(window, 'cupidTestSeedAffinities', {
            configurable: true,
            value(values, state = window.gameEngine?.stateManager) {
                if (!state?.restoreCommittedAffinities) throw new Error('StateManager is not ready');
                const stats = Object.fromEntries(Object.entries(values).map(([key, affinity]) => [key, { affinity }]));
                state.restoreCommittedAffinities(stats);
                window.CupidProgressIntegrity?.start(state);
                for (const [key, affinity] of Object.entries(values)) {
                    if (state.getAffinity(key) !== Math.max(-100, Math.min(100, Math.round(affinity)))) {
                        throw new Error(`Affinity seed for ${key} did not stick`);
                    }
                }
                return state;
            }
        });
    });
}

module.exports = { installAffinitySeeder };
