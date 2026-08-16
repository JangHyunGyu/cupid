'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const read = relativePath => fs.readFileSync(path.join(root, relativePath), 'utf8');

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
