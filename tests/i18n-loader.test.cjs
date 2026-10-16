'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'assets/js/loaders/i18n-loader.js'), 'utf8');
const version = require('../config/project.json').assetVersion;

function runtime(lang, intercept) {
    const requests = [];
    const window = { GAME_LANG: lang };
    const context = {
        window, console: { error() {} }, setTimeout: callback => queueMicrotask(callback),
        fetch: async (url, options) => {
            requests.push({ url, options });
            if (intercept) await intercept(url, options);
            return { ok: true, json: async () => JSON.parse(fs.readFileSync(path.join(root, url.split('?')[0]), 'utf8')) };
        }
    };
    vm.runInNewContext(source, context);
    return { window, requests };
}

for (const lang of ['ko', 'en', 'es', 'ja', 'fr', 'de', 'pt', 'zh']) {
    test(`${lang}: loads four files per day with complete unchanged localized content`, async () => {
        const { window, requests } = runtime(lang);
        await window._i18nReady;
        assert.equal(requests.length, 4);
        await Promise.all([window.CupidI18nLoader.ensureDay(2), window.CupidI18nLoader.ensureDay(2)]);
        assert.equal(requests.length, 8);
        for (let day = 3; day <= 5; day++) await window.CupidI18nLoader.ensureDay(day);
        assert.equal(requests.length, 20);
        assert.ok(requests.every(({ url }) => url.includes(`/i18n/${lang}/`) && url.endsWith(`?v=${version}`)));
        const expected = {};
        const files = fs.readdirSync(path.join(root, 'assets/js/i18n', lang)).filter(file => /^day.*\.json$/.test(file)).sort();
        for (const file of files) {
            const english = JSON.parse(fs.readFileSync(path.join(root, 'assets/js/i18n/en', file), 'utf8'));
            const target = JSON.parse(fs.readFileSync(path.join(root, 'assets/js/i18n', lang, file), 'utf8'));
            assert.ok(Object.keys(english).every(key => Object.hasOwn(target, key)), `${lang}/${file}: missing localized key`);
            Object.assign(expected, target);
        }
        assert.deepEqual(JSON.parse(JSON.stringify(window.I18N_DATA)), expected);
        assert.equal(await window.CupidI18nLoader.ensureDay(0), false);
        assert.equal(await window.CupidI18nLoader.ensureDay(6), false);
    });
}

test('a missing target file never commits a partial day or an English fallback, and can be retried', async () => {
    let blocked = true;
    const { window, requests } = runtime('ja', url => {
        if (blocked && url.includes('day2_2_lunch')) throw new Error('Temporary outage');
    });
    await window._i18nReady;
    const before = JSON.stringify(window.I18N_DATA);
    await assert.rejects(window.CupidI18nLoader.ensureDay(2), /target locale 'ja' incomplete/);
    assert.equal(JSON.stringify(window.I18N_DATA), before);
    assert.equal(JSON.stringify(window.CupidI18nLoader.getLoadedDays()), '[1]');
    assert.equal(requests.filter(({ url }) => url.includes('day2_2_lunch')).length, 5);
    blocked = false;
    assert.equal(await window.CupidI18nLoader.ensureDay(2), true);
    assert.equal(JSON.stringify(window.CupidI18nLoader.getLoadedDays()), '[1,2]');
    assert.ok(requests.every(({ url }) => !url.includes('/en/')));
});
