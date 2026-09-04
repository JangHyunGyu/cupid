'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');

function read(relativePath) {
    return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function loadGalleryData() {
    const window = {};
    return new Function('window', `${read('assets/js/gallery-data.js')}\nreturn window.GalleryData;`)(window);
}

test('landing pages defer the game runtime and the initial content bundle contains only day one', () => {
    const gameLoader = read('assets/js/loaders/game-loader.js');
    const i18nLoader = read('assets/js/loaders/i18n-loader.js');
    assert.match(gameLoader, /if \(window\.preventAutoStart\)/u);
    assert.match(gameLoader, /await ensureScenarioDay\(1\)/u);
    assert.match(gameLoader, /window\.loadCupidGameRuntime/u);
    assert.doesNotMatch(gameLoader, /concat\(commonScripts, scenarioScripts, engineScripts\)/u);
    assert.match(i18nLoader, /window\._i18nReady = loadDay\(1\)/u);

    for (const language of ['', '-en', '-es', '-ja', '-fr', '-de', '-pt']) {
        const html = read(`index${language}.html`);
        assert.match(html, /await window\.loadCupidGameRuntime\(\)/u);
    }
});

test('ending collection exposes 32 unique localized routes and resolves route variants', () => {
    const GalleryData = loadGalleryData();
    const ids = GalleryData.endingRoutes.map(ending => ending.id);
    assert.equal(ids.length, 32);
    assert.equal(new Set(ids).size, 32);
    for (const language of ['ko', 'en', 'es', 'ja', 'fr', 'de', 'pt']) {
        const catalog = GalleryData.getEndingCatalog(language);
        assert.equal(catalog.length, 32);
        assert(catalog.every(ending => ending.name && ending.hint));
    }

    const flags = new Set();
    const getFlag = flag => flags.has(flag);
    assert.equal(GalleryData.resolveEndingId('day5_seo_ending_freetalk_perfect', getFlag), 'perfect_seoyeon');
    assert.equal(GalleryData.resolveEndingId('day5_seo_ending_freetalk_bittersweet', getFlag), 'bittersweet_seoyeon');
    flags.add('day5_abandoned_seoyeon');
    assert.equal(GalleryData.resolveEndingId('day5_seo_ending_freetalk_bittersweet', getFlag), 'counteroffer_seoyeon');
    flags.clear();
    flags.add('route_yuna');
    assert.equal(GalleryData.resolveEndingId('day5_ending_confess_fail', getFlag), 'confess_fail_yuna');
});

test('every localized gallery includes the ending collection tab and content region', () => {
    for (const language of ['', '-en', '-es', '-ja', '-fr', '-de', '-pt']) {
        const html = read(`gallery${language}.html`);
        assert.match(html, /data-tab="endings"/u);
        assert.match(html, /id="tab-endings"/u);
        assert.match(html, /id="ending-summary"/u);
        assert.match(html, /id="ending-grid"/u);
    }
});
