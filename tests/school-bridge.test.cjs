'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = fs.readFileSync(path.join(__dirname, '../assets/js/school-bridge.js'), 'utf8');
function runtime(url = 'https://harem.archerlab.dev/?lang=ko', stored = new Map()) {
    const storage = { getItem: key => stored.get(key) ?? null, setItem: (key, value) => stored.set(key, value) };
    const root = { location: { href: url }, sessionStorage: storage, localStorage: storage, CupidStorage: storage };
    root.history = { state: { retained: 1 }, replaceState(state, title, value) { root.location.href = new URL(value, root.location.href).href; } };
    vm.runInNewContext(source, { window: root, URL });
    return root;
}
test('all Cupid languages round trip through a supported school language without private state', () => {
    for (const lang of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt', 'zh']) {
        const from = runtime().SchoolBridge;
        const url = new URL(from.schoolUrl(lang));
        assert.equal(url.origin, 'https://harem.archerlab.dev');
        assert.equal(url.searchParams.get('lang'), ['ko', 'en', 'ja'].includes(lang) ? lang : 'en');
        assert.deepEqual([...url.searchParams.keys()].sort(), ['cupidLang', 'lang', 'school']);
        const school = runtime(url.href + '&keep=1#place');
        assert.equal(school.SchoolBridge.takeSchoolArrival(), true);
        assert.equal(school.SchoolBridge.takeSchoolArrival(), false);
        assert.ok(school.location.href.endsWith('&keep=1#place'));
        assert.deepEqual(school.history.state, { retained: 1 });
        const back = new URL(school.SchoolBridge.cupidUrl(school.SchoolBridge.getReturnLanguage('en')));
        assert.equal(back.origin, 'https://cupid.archerlab.dev');
        assert.equal(back.searchParams.get('lang'), lang);
        assert.equal(back.searchParams.get('from'), 'school');
    }
});
test('reloads retain only the return language; blocked storage has an in-memory fallback', () => {
    const storage = new Map();
    const school = runtime('https://harem.archerlab.dev/?school=cupid&cupidLang=fr', storage);
    school.SchoolBridge.takeSchoolArrival();
    assert.equal(runtime('https://harem.archerlab.dev/', storage).SchoolBridge.getReturnLanguage('ko'), 'fr');
    assert.deepEqual([...storage.entries()], [['harem:cupidReturnLanguage', 'fr']]);
    const blocked = runtime('https://harem.archerlab.dev/?school=cupid&cupidLang=ja');
    Object.defineProperty(blocked, 'sessionStorage', { get() { throw new Error('blocked'); } });
    assert.equal(blocked.SchoolBridge.takeSchoolArrival(), true);
    assert.equal(blocked.SchoolBridge.getReturnLanguage('ko'), 'ja');
});
test('malformed languages and arbitrary return URLs cannot redirect outside the two services', () => {
    for (const lang of [null, '', '../../evil', 'https://evil.example/', 'constructor', '__proto__']) {
        const bridge = runtime().SchoolBridge;
        assert.equal(new URL(bridge.cupidUrl(lang)).origin, 'https://cupid.archerlab.dev');
        assert.equal(new URL(bridge.schoolUrl(lang)).searchParams.get('cupidLang'), 'en');
    }
    const regular = runtime('https://harem.archerlab.dev/?school=other&return=https://evil.example');
    assert.equal(regular.SchoolBridge.takeSchoolArrival(), false);
    assert.equal(regular.SchoolBridge.getReturnLanguage('ja'), 'ja');
});
test('title departures never write or replace saves and reject memory-only progress', () => {
    const raw = JSON.stringify({ currentSceneId: 'saved_scene', gameState: { playerName: 'Existing' } });
    const stored = new Map([['cupid_save', raw]]);
    const root = runtime(undefined, stored);
    assert.equal(root.SchoolBridge.savedStory().gameState.playerName, 'Existing');
    assert.equal(root.SchoolBridge.hasDurableSave(), true);
    assert.equal(stored.get('cupid_save'), raw);
    root.CupidStorage = { getItem: () => raw + ' ' };
    assert.equal(root.SchoolBridge.hasDurableSave(), false);
    Object.defineProperty(root, 'localStorage', { get() { throw new Error('blocked'); } });
    assert.equal(root.SchoolBridge.hasDurableSave(), false);
});
test('fresh or corrupt saves do not trigger continuation', () => {
    for (const raw of [null, '{broken', '{}', '{"currentSceneId":""}', '{"currentSceneId":"start"}']) {
        const root = runtime(undefined, new Map([['cupid_save', raw]]));
        assert.equal(root.SchoolBridge.savedStory(), null);
    }
});
