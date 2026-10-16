'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(require('node:path').join(__dirname, '../assets/js/loaders/gallery-loader.js'), 'utf8');

function runtime({ failures = 0, storage = new Map(), supported = true } = {}) {
    const requests = [], successes = [], reports = [];
    let targetAttempts = 0, reloads = 0, overlays = 0;
    const window = {
        __cupidErrorReporterInstalled: true, CupidRuntimeSupport: { supported },
        location: { pathname: '/gallery-ja.html', href: 'https://example.test/gallery-ja.html', reload() { reloads++; } },
        LoaderConfig: {}, GalleryData: {}, GalleryProgress: {}, GalleryUI: {}, GalleryFreeTalk: {}, Gallery: {},
        gallery: {}, CupidGalleryReady: Promise.resolve(),
        __cupidLogRuntimeError(...args) { reports.push(args); }
    };
    const head = {
        appendChild(script) {
            script.parentNode = head;
            requests.push(script.src);
            if (script.src.includes('/gallery-ui-core.js') && ++targetAttempts <= failures) script.onerror();
            else { successes.push(script.src.split('?')[0]); script.onload(); }
        },
        removeChild(script) { script.parentNode = null; }
    };
    const document = { head, body: {}, createElement() { return { setAttribute() {} }; } };
    const sessionStorage = { getItem: key => storage.get(key), setItem: (key, value) => storage.set(key, value), removeItem: key => storage.delete(key) };
    const context = vm.createContext({ window, document, navigator: { onLine: true }, sessionStorage, setTimeout: callback => queueMicrotask(callback), console, Date });
    vm.runInContext(source, context);
    window.__cupidShowGalleryLoadError = () => { overlays++; };
    return { window, context, requests, successes, storage, reports, get targetAttempts() { return targetAttempts; }, get reloads() { return reloads; }, get overlays() { return overlays; } };
}

test('transient script failures retry only the failed dependency and preserve initialization order', async () => {
    const r = runtime({ failures: 2 });
    vm.runInContext(source, r.context);
    r.window.__cupidShowGalleryLoadError = () => { throw new Error('Unexpected error overlay'); };
    await r.window.CupidGalleryLoaderReady;
    assert.equal(r.targetAttempts, 3);
    assert.equal(r.window.galleryScriptsLoaded, true);
    assert.equal(r.reloads, 0);
    assert.equal(r.reports.length, 0);
    assert.equal(r.successes.length, new Set(r.successes).size);
    const index = name => r.successes.indexOf('assets/js/' + name);
    assert.equal(index('loaders/config.js'), 0);
    assert.equal(r.requests[0], 'assets/js/loaders/config.js?v=' + require('../config/project.json').assetVersion);
    assert.ok(index('example-dialogues-ko.js') < index('prompts.js'));
    assert.ok(index('prompts.js') < index('gallery-freetalk.js'));
    assert.ok(index('gallery-ui-core.js') < index('gallery.js'));
    assert.ok(r.requests.filter(url => url.includes('/gallery-ui-core.js')).slice(1).every(url => url.includes('&retry=')));
});

test('persistent failures allow one reload, then show the existing recovery UI instead of looping', async () => {
    const storage = new Map();
    const first = runtime({ failures: Infinity, storage });
    await assert.rejects(first.window.CupidGalleryLoaderReady, /gallery-ui-core/);
    await Promise.resolve();
    assert.equal(first.targetAttempts, 3);
    assert.equal(first.reloads, 1);
    assert.equal(first.overlays, 0);
    assert.ok(!first.successes.includes('assets/js/gallery.js'));
    const second = runtime({ failures: Infinity, storage });
    await assert.rejects(second.window.CupidGalleryLoaderReady, /gallery-ui-core/);
    await Promise.resolve();
    assert.equal(second.targetAttempts, 3);
    assert.equal(second.reloads, 0);
    assert.equal(second.overlays, 1);
    assert.equal(second.reports.length, 1);
    const recovered = runtime({ storage });
    await recovered.window.CupidGalleryLoaderReady;
    assert.equal(storage.size, 0);
});

test('unsupported browsers do not request or initialize gallery modules', () => {
    const r = runtime({ supported: false });
    assert.equal(r.requests.length, 0);
    assert.equal(r.window.CupidGalleryLoaderReady, undefined);
});
