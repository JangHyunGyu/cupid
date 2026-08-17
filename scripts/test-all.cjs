'use strict';

const { spawnSync } = require('child_process');
const path = require('path');

const root = path.resolve(__dirname, '..');
const commands = [
    ['node', ['scripts/sync-build-metadata.cjs', '--check']],
    ['node', ['scripts/verify-project-structure.cjs']],
    ['node', ['generate-scenario.js', '--check']],
    ['node', ['validate.js', '--seed=cupid-ci', '--no-report']],
    ['node', ['test_endings.js']],
    ['node', ['test_i18n_full.js']],
    ['node', ['--test', 'tests/choice-affinity-balance.test.cjs']],
    ['node', ['--test', 'tests/scenario-commercial-polish.test.cjs']],
    ['node', ['--test', 'tests/freetalk-core.test.cjs']],
    ['node', ['--test', 'tests/runtime-error-regressions.test.cjs']],
    ['node', ['scripts/verify-repetition-guards.cjs']],
    ['node', ['scripts/audit-media.cjs']]
];

for (const [command, args] of commands) {
    const result = spawnSync(command, args, { cwd: root, stdio: 'inherit', shell: false });
    if (result.status !== 0) process.exit(result.status ?? 1);
}
