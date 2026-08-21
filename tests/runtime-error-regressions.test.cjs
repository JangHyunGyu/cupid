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

test('app entry pages load the storage adapter before inline storage access', () => {
    const pages = ['index', 'gallery'].flatMap(name => ['', '-en', '-es', '-ja', '-fr', '-de', '-pt'].map(suffix => `${name}${suffix}.html`));
    for (const page of pages) {
        const html = read(page);
        assert.match(html, /assets\/js\/storage-adapter\.js\?v=20260819-storage-fallback-v1/);
        assert.ok(
            html.indexOf('assets/js/storage-adapter.js') < html.indexOf('window.CupidStorage.'),
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
            if (url.endsWith('day1_1_morning.json') && count < 5) {
                throw new TypeError('Load failed');
            }
            return { ok: true, json: async () => ({ [url]: true }) };
        }
    };
    vm.runInNewContext(read('assets/js/loaders/i18n-loader.js'), sandbox, { filename: 'i18n-loader.js' });
    await sandbox.window._i18nReady;

    const retriedUrl = 'assets/js/i18n/ko/day1_1_morning.json';
    assert.equal(calls.get(retriedUrl), 5);
    assert.deepEqual(cacheModes.get(retriedUrl), ['default', 'reload', 'reload', 'reload', 'reload']);
    assert.ok(maxActive <= 4, `expected at most 4 concurrent fetches, saw ${maxActive}`);
    assert.equal(Object.keys(sandbox.window.I18N_DATA).length, 20);
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
