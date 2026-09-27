'use strict';
const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

test('all localized entry pages run the compatibility guard before application scripts', () => {
    const config = JSON.parse(read('config/project.json'));
    for (const page of config.localizedPages) for (const lang of config.languages) {
        const html = read(`${page}${lang === 'ko' ? '' : '-' + lang}.html`);
        const scripts = [...html.matchAll(/<script[^>]*src="([^"]+)"/g)];
        assert.equal(scripts[0][1], `assets/js/runtime-support.js?v=${config.assetVersion}`);
    }
});

test('unsupported browsers do not load the game or gallery runtime', () => {
    for (const file of ['game-loader.js', 'gallery-loader.js']) {
        let writes = 0;
        const window = { CupidRuntimeSupport: { supported: false }, __cupidErrorReporterInstalled: true };
        vm.runInNewContext(read(`assets/js/loaders/${file}`), {
            window, document: { write() { writes++; }, addEventListener() {} }
        });
        assert.equal(writes, 0);
        assert.equal(window.gameScriptsLoaded, undefined);
    }
});

test('entry scripts contain no optional chaining or nullish syntax outside the guard', () => {
    for (const file of ['runtime-support.js', 'modal-accessibility.js', 'loaders/game-loader.js', 'loaders/gallery-loader.js']) {
        const source = read('assets/js/' + file);
        assert.doesNotMatch(source, /\?\.|\?\?/);
        new vm.Script(source);
    }
});

test('modern browsers are accepted without DOM work and missing runtime APIs are rejected', () => {
    const source = read('assets/js/runtime-support.js');
    const supported = { window: {} };
    vm.runInNewContext(source, supported);
    assert.equal(supported.window.CupidRuntimeSupport.supported, true);
    let listener;
    const unsupported = { window: {}, document: { readyState: 'loading', addEventListener: (event, fn) => { listener = fn; } } };
    vm.runInNewContext('Object.hasOwn = undefined;\n' + source, unsupported);
    assert.equal(unsupported.window.CupidRuntimeSupport.supported, false);
    assert.equal(typeof listener, 'function');
});
