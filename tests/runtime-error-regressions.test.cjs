'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const read = relativePath => fs.readFileSync(path.join(root, relativePath), 'utf8');

test('storage adapter falls back when localStorage is missing or blocked', () => {
    const createCupidStorageAdapter = require(path.join(root, 'assets/js/storage-adapter.js'));
    const missing = createCupidStorageAdapter(() => null);
    missing.setItem('language', 'en');
    assert.equal(missing.getItem('language'), 'en');
    assert.equal(missing.length, 1);
    missing.removeItem('language');
    assert.equal(missing.getItem('language'), null);

    const blocked = createCupidStorageAdapter(() => {
        throw new DOMException('Access is denied', 'SecurityError');
    });
    blocked.setItem('volume', 0.5);
    assert.equal(blocked.getItem('volume'), '0.5');
});

function recoverableStorage() {
    const createAdapter = require('../assets/js/storage-adapter.js');
    const data = new Map();
    let failWrites = false;
    let failReads = false;
    const native = {
        getItem(key) { if (failReads) throw new DOMException('Blocked', 'SecurityError'); return data.get(key) ?? null; },
        setItem(key, value) { if (failWrites) throw new DOMException('Full', 'QuotaExceededError'); data.set(key, String(value)); },
        removeItem(key) { if (failWrites) throw new DOMException('Blocked', 'SecurityError'); data.delete(key); },
        clear() { if (failWrites) throw new DOMException('Blocked', 'SecurityError'); data.clear(); },
        key(index) { return [...data.keys()][index] ?? null; },
        get length() { return data.size; }
    };
    return { data, native, adapter: createAdapter(() => native),
        failWrites(value) { failWrites = value; }, failReads(value) { failReads = value; } };
}

test('a quota error preserves readable saves, receipts and identity and retries the pending write', () => {
    const h = recoverableStorage();
    h.data.set('cupid_save', 'existing save');
    h.data.set('cupid_progress_integrity_v1', 'existing receipts');
    h.data.set('cupid_device_id', 'existing device');
    h.failWrites(true);
    h.adapter.setItem('volume', '0.5');
    for (const key of ['cupid_save', 'cupid_progress_integrity_v1', 'cupid_device_id']) {
        assert.equal(h.adapter.getItem(key), h.data.get(key), key);
    }
    h.adapter.setItem('cupid_save', 'new save');
    assert.equal(h.adapter.getItem('cupid_save'), 'new save');
    h.failWrites(false);
    assert.equal(h.adapter.getItem('cupid_save'), 'new save');
    assert.equal(h.data.get('cupid_save'), 'new save', 'recovered storage receives the pending save');
    assert.equal(h.adapter.getItem('volume'), '0.5');
    assert.equal(h.data.get('volume'), '0.5');
});

test('transient read failures retain known data and recover without hiding newer native values', () => {
    const h = recoverableStorage();
    h.adapter.setItem('cupid_save', 'old');
    assert.equal(h.adapter.getItem('cupid_save'), 'old');
    h.failReads(true);
    assert.equal(h.adapter.getItem('cupid_save'), 'old');
    h.failReads(false);
    h.data.set('cupid_save', 'newer tab');
    assert.equal(h.adapter.getItem('cupid_save'), 'newer tab');
});

test('failed deletion and clear stay deleted in memory and are persisted after recovery', () => {
    const h = recoverableStorage();
    h.adapter.setItem('cupid_save', 'old');
    h.failWrites(true);
    h.adapter.removeItem('cupid_save');
    assert.equal(h.adapter.getItem('cupid_save'), null);
    h.failWrites(false);
    assert.equal(h.adapter.getItem('cupid_save'), null);
    assert.equal(h.data.has('cupid_save'), false);
    h.adapter.setItem('cupid_save', 'new');
    h.failWrites(true);
    h.adapter.clear();
    assert.equal(h.adapter.getItem('cupid_save'), null);
    h.failWrites(false);
    assert.equal(h.adapter.getItem('cupid_save'), null);
    assert.equal(h.data.size, 0);
});

test('quota fallback retains affinity receipts and restored progress after recovery and reload', () => {
    const createIntegrity = require('../assets/js/progression-integrity.js');
    const createAdapter = require('../assets/js/storage-adapter.js');
    const h = recoverableStorage();
    const api = createIntegrity({ storage: h.adapter });
    const state = { stats: { Seoyeon: { affinity: 0 } }, flags: {} };
    api.start(state);
    api.commit(state, 'talk:lunch:0', () => { state.stats.Seoyeon.affinity += 3; });
    h.failWrites(true);
    h.adapter.setItem('unrelated', 'full');
    assert.equal(api.commit(state, 'talk:lunch:0', () => { state.stats.Seoyeon.affinity += 3; }).applied, false);
    api.commit(state, 'talk:lunch:1', () => { state.stats.Seoyeon.affinity += 3; });
    assert.equal(state.stats.Seoyeon.affinity, 6);
    h.failWrites(false);
    api.restoreState(state);
    const reloaded = createIntegrity({ storage: createAdapter(() => h.native) });
    const restored = { stats: { Seoyeon: { affinity: 0 } }, flags: {} };
    reloaded.restoreState(restored);
    assert.equal(restored.stats.Seoyeon.affinity, 6);
    assert.equal(reloaded.commit(restored, 'talk:lunch:1', () => { restored.stats.Seoyeon.affinity += 3; }).applied, false);
});

test('pending affinity writes cannot replace a newer run committed by another tab', () => {
    const createIntegrity = require('../assets/js/progression-integrity.js');
    const createAdapter = require('../assets/js/storage-adapter.js');
    const h = recoverableStorage();
    const api = createIntegrity({ storage: h.adapter });
    const old = { stats: { Seoyeon: { affinity: 0 } }, flags: {} };
    api.start(old);
    h.failWrites(true);
    api.commit(old, 'talk:lunch:0', () => { old.stats.Seoyeon.affinity += 3; });
    h.failWrites(false);
    const other = createIntegrity({ storage: createAdapter(() => h.native) });
    const fresh = { stats: { Seoyeon: { affinity: 0 } }, flags: {} };
    other.start(fresh);
    const latest = h.data.get('cupid_progress_integrity_v1');
    assert.throws(() => api.commit(old, 'talk:lunch:1', () => { old.stats.Seoyeon.affinity += 3; }), { name: 'ProgressConflictError' });
    assert.equal(h.data.get('cupid_progress_integrity_v1'), latest);
    api.restoreState(old);
    assert.equal(old.progressionRunId, fresh.progressionRunId);
    assert.equal(old.stats.Seoyeon.affinity, 0);
});

test('app entry pages load the storage adapter before inline storage access', () => {
    const pages = ['index', 'game', 'gallery'].flatMap(name => ['', '-en', '-es', '-ja', '-fr', '-de', '-pt', '-zh'].map(suffix => `${name}${suffix}.html`));
    for (const page of pages) {
        const html = read(page);
        const version = JSON.parse(read('config/project.json')).assetVersion;
        assert.ok(html.includes(`assets/js/storage-adapter.js?v=${version}`), `${page}: storage cache version`);
        const firstInlineUse = html.indexOf('window.CupidStorage.');
        assert.ok(
            firstInlineUse === -1 || html.indexOf('assets/js/storage-adapter.js') < firstInlineUse,
            `${page} must install the adapter before first use`
        );
    }
});

test('audio decode failures enter the bounded BGM recovery path', () => {
    const sandbox = {
        window: { addEventListener() {} },
        document: { addEventListener() {}, visibilityState: 'visible' },
        navigator: { onLine: true },
        localStorage: { getItem() { return null; }, setItem() {} },
        console: { log() {}, warn() {}, error() {} },
        setTimeout,
        clearTimeout,
        Promise,
        Error,
        String,
        Number,
        Math
    };
    vm.runInNewContext(read('assets/js/sound.js'), sandbox, { filename: 'sound.js' });
    assert.equal(
        sandbox.window.soundManager._isRetryableAudioError({
            name: 'EncodingError',
            message: 'Unable to decode audio data'
        }),
        true
    );
});

test('i18n loading limits concurrency and survives a longer transient interruption', async () => {
    let active = 0;
    let maxActive = 0;
    const calls = new Map();
    const cacheModes = new Map();
    const sandbox = {
        window: { GAME_LANG: 'ko' },
        console: { error() {} },
        setTimeout(callback) { callback(); return 0; },
        Math,
        Promise,
        Object,
        Array,
        Error,
        String,
        fetch: async (url, options) => {
            const count = (calls.get(url) || 0) + 1;
            calls.set(url, count);
            cacheModes.set(url, [...(cacheModes.get(url) || []), options.cache]);
            active += 1;
            maxActive = Math.max(maxActive, active);
            await Promise.resolve();
            active -= 1;
            if (url.split('?')[0].endsWith('day1_1_morning.json') && count < 5) {
                throw new TypeError('Load failed');
            }
            return { ok: true, json: async () => ({ [url]: true }) };
        }
    };
    vm.runInNewContext(read('assets/js/loaders/i18n-loader.js'), sandbox, { filename: 'i18n-loader.js' });
    await sandbox.window._i18nReady;

    const retriedUrl = [...calls.keys()].find(url => url.split('?')[0] === 'assets/js/i18n/ko/day1_1_morning.json');
    assert.equal(calls.get(retriedUrl), 5);
    assert.deepEqual(cacheModes.get(retriedUrl), ['default', 'reload', 'reload', 'reload', 'reload']);
    assert.ok(maxActive <= 4, `expected at most 4 concurrent fetches, saw ${maxActive}`);
    assert.equal(Object.keys(sandbox.window.I18N_DATA).length, 4);
    await sandbox.window.CupidI18nLoader.ensureDay(2);
    assert.equal(Object.keys(sandbox.window.I18N_DATA).length, 8);
});

test('blocked localStorage migration cannot leak an unhandled rejection', () => {
    const source = read('assets/js/modules/config.js');
    assert.match(
        source,
        /Promise\.resolve\(migrateCupidChatHistoryToD1\(\)\)\.catch\(\(\) => \{\}\)/
    );
});

test('legacy chat migration uses the durable queue before network access', () => {
    const source = read('assets/js/modules/config.js');
    const migrationPost = source.slice(source.indexOf('async function postOne'), source.indexOf('async function convertBase64ToR2'));
    assert.match(migrationPost, /await persistCupidChatLogEntries\(\[entry\]/);
    assert.doesNotMatch(migrationPost, /await postCupidChatLogEntry\(entry\)/);
});

test('same-origin script and stylesheet failures retry twice before reporting a persistent failure', async () => {
    const listeners = new Map();
    const timers = [];
    const reports = [];
    const storage = new Map();
    const window = {
        location: {
            href: 'https://cupid.archerlab.dev/index-en',
            origin: 'https://cupid.archerlab.dev',
            pathname: '/index-en'
        },
        innerWidth: 392,
        innerHeight: 786,
        crypto: { randomUUID: () => 'test-event-id' },
        localStorage: {
            getItem(key) { return storage.get(key) || null; },
            setItem(key, value) { storage.set(key, value); },
            removeItem(key) { storage.delete(key); }
        },
        sessionStorage: {
            getItem() { return null; },
            setItem() {}
        },
        console: { error() {}, warn() {}, log() {} },
        addEventListener(type, listener) { listeners.set(type, listener); },
        setTimeout(callback, delay) {
            timers.push({ callback, delay });
            return timers.length;
        },
        fetch: async (_url, options) => {
            reports.push(JSON.parse(options.body));
            return { ok: true };
        }
    };
    const document = {
        documentElement: { lang: 'en' },
        visibilityState: 'visible',
        referrer: '',
        addEventListener() {}
    };
    const sandbox = {
        window,
        document,
        navigator: { userAgent: 'Chrome/151', onLine: true, sendBeacon() { return false; } },
        URL,
        Date,
        Math,
        JSON,
        String,
        Error,
        WeakSet,
        Array,
        Promise
    };
    vm.runInNewContext(read('assets/js/error-reporter.js'), sandbox, { filename: 'error-reporter.js' });

    const attributes = new Map();
    const target = {
        tagName: 'SCRIPT',
        src: 'https://cupid.archerlab.dev/assets/js/modal-accessibility.js?v=2.9.166',
        getAttribute(name) { return attributes.get(name) || null; },
        setAttribute(name, value) { attributes.set(name, value); }
    };
    const fireResourceError = () => listeners.get('error')({ target });

    fireResourceError();
    assert.equal(reports.length, 0);
    assert.equal(attributes.get('data-cupid-script-retries'), '1');
    timers.find(timer => timer.delay === 300).callback();
    assert.match(target.src, /[?&]retry=/);

    fireResourceError();
    assert.equal(reports.length, 0);
    assert.equal(attributes.get('data-cupid-script-retries'), '2');
    timers.find(timer => timer.delay === 600).callback();

    fireResourceError();
    await Promise.resolve();
    assert.equal(reports.length, 1);
    assert.equal(reports[0].errorType, 'ResourceError');

    const stylesheetAttributes = new Map();
    const stylesheetTarget = {
        tagName: 'LINK',
        rel: 'stylesheet',
        href: 'https://cupid.archerlab.dev/assets/css/style.css?v=2.9.7',
        getAttribute(name) { return stylesheetAttributes.get(name) || null; },
        setAttribute(name, value) { stylesheetAttributes.set(name, value); }
    };
    const fireStylesheetError = () => listeners.get('error')({ target: stylesheetTarget });

    fireStylesheetError();
    assert.equal(reports.length, 1);
    assert.equal(stylesheetAttributes.get('data-cupid-stylesheet-retries'), '1');
    timers.filter(timer => timer.delay === 300).at(-1).callback();
    assert.match(stylesheetTarget.href, /[?&]retry=/);

    fireStylesheetError();
    assert.equal(reports.length, 1);
    assert.equal(stylesheetAttributes.get('data-cupid-stylesheet-retries'), '2');
    timers.filter(timer => timer.delay === 600).at(-1).callback();

    fireStylesheetError();
    await Promise.resolve();
    assert.equal(reports.length, 2);
    assert.equal(reports[1].errorType, 'ResourceError');
});

test('gallery back button survives an opener that throws and falls back to the link', () => {
    // 2026-10-08 Edge(Android): window.opener 접근이 'TypeError: no access'를 던져 돌아가기 버튼이 오류로 끝났다.
    const pages = fs.readdirSync(root).filter(name => /^gallery(?:-[a-z]{2})?\.html$/u.test(name));
    assert.equal(pages.length, 8);
    for (const page of pages) {
        const match = read(page).match(/class="back-btn" onclick="([^"]+)"/u);
        assert.ok(match, `${page} back button handler`);
        const handler = new Function('window', match[1]);
        const denied = {};
        Object.defineProperty(denied, 'opener', { get() { throw new TypeError('no access'); } });
        assert.doesNotThrow(() => handler(denied), `${page} must not throw`);
        assert.notEqual(handler(denied), false, `${page} follows the href when opener is not accessible`);

        let closeCalls = 0;
        const closable = { opener: { closed: false }, closed: false, close() { closeCalls += 1; this.closed = true; } };
        assert.equal(handler(closable), false, `${page} closes a tab opened by the game`);
        assert.equal(closeCalls, 1);

        const blockedClose = { opener: { closed: false }, closed: false, close() {} };
        assert.notEqual(handler(blockedClose), false, `${page} follows the href when the browser refuses to close`);
        assert.notEqual(handler({ opener: null }), false);
    }
});
