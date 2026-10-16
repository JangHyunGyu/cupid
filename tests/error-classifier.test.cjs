'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const canonical = require('../assets/js/error-classifier.js');

const cases = [
    ['Error', 'Script error.', '', '', 'noise'],
    ['Error', 'ResizeObserver loop limit exceeded', '', '', 'noise'],
    ['UnhandledRejection', 'Yd', 'Yd@https://cupid.archerlab.dev/game.html', '', 'external'],
    ['UnhandledRejection', 'Yd', 'at /assets/js/modules/GameEngine.js:10', '', 'app'],
    ['ReferenceError', 'standardSelectors is missing', 'at /assets/js/modules/GameEngine.js:10', '', 'app'],
    ['ReferenceError', 'missingState is not defined', 'at /assets/js/modules/StateManager.js:20', '', 'app'],
    ['TypeError', 'Unexpected failure', '', 'chrome-extension://abc/content.js', 'external'],
    ['TypeError', 'Unexpected failure', '', 'https://ssl.pstatic.net/melona/libs/gfp-nac-module/synchronizer.js', 'external'],
    ['TypeError', 'Unexpected failure', '', 'https://static.cloudflareinsights.com/beacon.min.js', 'external'],
    ['ResourceError', 'Script failed', '', '/assets/js/modules/GameEngine.js', 'network'],
    ['TypeError', 'Failed to fetch', 'at /assets/js/modules/GameEngine.js:1', '', 'network'],
    ['SecurityPolicyViolation', 'Blocked by CSP', '', '/game.html', 'security']
];

test('browser reporters and loader fallbacks classify the same corpus identically', () => {
    const source = fs.readFileSync(path.join(root, 'assets/js/error-classifier.js'), 'utf8').replace(/\r\n/g, '\n').trim();
    for (const relative of ['assets/js/error-reporter.js', 'assets/js/loaders/game-loader.js', 'assets/js/loaders/gallery-loader.js', 'service-worker.js']) {
        const code = fs.readFileSync(path.join(root, relative), 'utf8').replace(/\r\n/g, '\n');
        const embedded = code.match(/\/\/ BEGIN GENERATED CUPID ERROR CLASSIFIER\n([\s\S]*?)\n\/\/ END GENERATED CUPID ERROR CLASSIFIER/)[1];
        assert.equal(embedded, source);
        const scope = relative === 'service-worker.js' ? { self: {} } : { window: {} };
        vm.runInNewContext(embedded, scope);
        const api = (scope.self || scope.window).CupidErrorClassifier;
        for (const [type, msg, stack, src, expected] of cases) assert.equal(api.classify(type, msg, stack, src), expected, `${relative}: ${msg}`);
    }
});

test('workers suppress only expected interrupted-network rejections while preserving real faults', () => {
    assert.equal(canonical.classify('UnhandledRejection', 'Load failed', '', '', 'worker', 'TypeError'), 'noise');
    assert.equal(canonical.classify('UnhandledRejection', 'Missing variable', '/service-worker.js:4', '', 'worker', 'ReferenceError'), 'app');
    assert.equal(canonical.classify('UnhandledRejection', 'Load failed', '/service-worker.js:4', '', 'worker', 'ReferenceError'), 'network');
    assert.equal(canonical.isExpectedTransientNetworkError({ name: 'AbortError', message: 'cancelled' }), true);
    assert.equal(canonical.isExpectedTransientNetworkError({ name: 'ReferenceError', message: 'Load failed' }), false);
});

test('a newer bundle replaces a classifier left by a cached earlier bootstrap', () => {
    const window = { CupidErrorClassifier: { classify: () => 'stale' } };
    vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/js/error-classifier.js'), 'utf8'), { window });
    assert.equal(window.CupidErrorClassifier.classify('ReferenceError', 'missingState is not defined', '/assets/js/state.js', ''), 'app');
});

for (const relative of ['assets/js/loaders/game-loader.js', 'assets/js/loaders/gallery-loader.js']) {
    test(`${relative}: fallback reporting works when the primary reporter is unavailable`, async () => {
        const reports = [];
        const window = {
            CupidRuntimeSupport: { supported: false },
            location: { pathname: '/game.html', href: 'https://example.test/game.html' },
            innerWidth: 1280, innerHeight: 800, addEventListener() {}
        };
        vm.runInNewContext(fs.readFileSync(path.join(root, relative), 'utf8'), {
            window, document: {}, navigator: { userAgent: 'fallback-test' }, console,
            fetch: async (_url, options) => { reports.push(JSON.parse(options.body)); return { text: async () => '' }; }
        });
        window.__cupidLogRuntimeError('ReferenceError', 'missingState is not defined', 'at /assets/js/modules/StateManager.js:10', '/assets/js/modules/StateManager.js');
        window.__cupidLogRuntimeError('UnhandledRejection', 'Yd', '@https://example.test/game.html', window.location.href);
        await Promise.resolve();
        assert.equal(reports.length, 1);
        assert.match(reports[0].message, /^\[app:ReferenceError\]/);
    });
}
