'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { createHash } = require('node:crypto');
const test = require('node:test');
const { readPlainMedia } = require('../scripts/lib/read-plain-media.cjs');

const root = path.resolve(__dirname, '..');
const characters = { Seoyeon: 'seyoun', Yuna: 'yuna', Dain: 'dain', Teacher: 'teacher', Nurse: 'nurse', Haeun: 'haeun', Minsu: 'minsu' };
const romanceIds = Object.values(characters).filter(id => id !== 'minsu');
const languages = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt', 'zh'];
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const image = { dataset: {} };
const calls = [];
const runtime = { window: {}, console, setTimeout, clearTimeout,
    document: { getElementById: () => image, documentElement: { lang: 'en' } } };
vm.createContext(runtime);
for (const file of ['assets/js/freetalk-core.js', 'assets/js/example-dialogues-ko.js', 'assets/js/prompts.js',
    'assets/js/gallery-data.js', 'assets/js/gallery-freetalk.js', 'assets/js/modules/FreeTalkSystem.js']) {
    vm.runInContext(read(file), runtime, { filename: file });
}
runtime.window.CupidMedia = {
    unlock: paths => calls.push(['unlock', ...paths]),
    unlockExpression: (id, expression) => calls.push(['expression', id, expression]),
    loadImageWithMediaFallback: (img, asset) => { img.selectedAsset = asset; calls.push(['load', asset]); }
};
const core = runtime.window.CupidFreeTalkCore;
const main = runtime.window.FreeTalkSystem.prototype;
const gallery = runtime.window.GalleryData;

test('missing expressions in Main, Group and Gallery preserve the current face', () => {
    const slot = { dataset: { groupCharId: 'Dain' }, querySelector: () => image };
    const system = Object.assign(Object.create(main), { uiManager: { charSlots: { center: slot } },
        groupParticipants: [{ id: 'Dain', name: 'Dain', side: 'left' }], charNameMap: {} });
    const gallerySystem = new runtime.window.GalleryFreeTalk('en', {});
    calls.length = 0;
    system.applyExpression('', { name: 'Dain' });
    system._applyGroupExpression('', 'Dain');
    gallerySystem._updateExpression('', 'dain');
    assert.deepEqual(calls, []);
    const parsed = system.parseGroupJsonResponse(JSON.stringify({ conversations: [
        { name: 'Dain', segments: [{ type: 'dialogue', text: 'Hello.' }] }
    ] }));
    assert.equal(parsed[0].expression, '');
});

test('all seven imported VN sprites retain native RGBA dimensions and catalog hashes', () => {
    const catalog = JSON.parse(read('config/media-storage.json'));
    for (const id of Object.values(characters)) {
        for (const ext of ['png', 'webp']) {
            const asset = `assets/images/characters/${id}_exhausted.${ext}`;
            const bytes = readPlainMedia(path.join(root, asset));
            assert.equal(createHash('sha256').update(bytes).digest('hex'), catalog[asset].sha256);
            if (ext === 'png') {
                const [expectedWidth, expectedHeight] = id === 'nurse' ? [1152, 1536] : [1086, 1448];
                assert.deepEqual([...bytes.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
                assert.equal(bytes[25], 6);
                assert.equal(bytes.readUInt32BE(16), expectedWidth);
                assert.equal(bytes.readUInt32BE(20), expectedHeight);
            } else {
                assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
                assert.equal(bytes.toString('ascii', 8, 12), 'WEBP');
            }
        }
    }
});

test('every supported gallery language exposes exhaustion without adding a supporting-character romance route', () => {
    for (const lang of languages) {
        assert.notEqual(gallery.getExpressionName(lang, 'exhausted'), 'exhausted');
        for (const id of romanceIds) {
            assert.equal(gallery.getCharacter(lang, id).expressions.filter(name => name === 'exhausted').length, 1);
        }
        assert.equal(gallery.getCharacter(lang, 'minsu'), null);
    }
});

test('Main and Group select exhaustion through the protected media loader and can recover normally', () => {
    for (const [name, id] of Object.entries(characters)) {
        const exhausted = `assets/images/characters/${id}_exhausted.png`;
        assert.equal(runtime.window.CHARACTER_EXPRESSIONS[name].exhausted, exhausted);
        const slot = { dataset: { groupCharId: name }, querySelector: () => image };
        const context = Object.assign(Object.create(main), { uiManager: { charSlots: { center: slot } } });
        for (const expression of ['exhausted', 'normal']) {
            const expected = runtime.window.CHARACTER_EXPRESSIONS[name][expression];
            calls.length = 0;
            main.applyExpression.call(context, expression, { name });
            assert.equal(image.selectedAsset, expected);
            assert.deepEqual(calls, [['unlock', expected], ['load', expected]]);
            calls.length = 0;
            main._applyGroupExpression.call(context, expression, name);
            assert.equal(image.selectedAsset, expected);
            assert.deepEqual(calls, [['unlock', expected], ['load', expected]]);
        }
    }
});

test('Gallery selects and grants exhaustion, then follows a normal reply', () => {
    const system = new runtime.window.GalleryFreeTalk('en', {});
    for (const id of romanceIds) {
        for (const expression of ['exhausted', 'normal']) {
            calls.length = 0;
            system._updateExpression(expression, id);
            const expected = `assets/images/characters/${id}_${expression}.png`;
            assert.equal(image.selectedAsset, expected);
            assert.deepEqual(calls, [['expression', id, expression], ['load', expected]]);
        }
    }
});

test('date/home outfit scenes never leak uniform exhaustion sprites and keep unlock requirements', () => {
    for (const [id, outfit] of [['seyoun', 'date'], ['yuna', 'date'], ['dain', 'date'], ['nurse', 'home']]) {
        const asset = `assets/images/characters/${id}_exhausted.png`;
        assert.match(
            gallery.resolveOutfitExpression({ character: `assets/images/characters/${id}_${outfit}_normal.webp` }, asset),
            new RegExp(`^assets/images/characters/${id}_${outfit}_[a-z0-9_]+\\.webp$`)
        );
        assert.equal(gallery.getExpressionRequirement(id, 'normal'), 0);
        assert.equal(gallery.getExpressionRequirement(id, 'date_shy'), gallery.getExpressionRequirement(id, 'shy'));
    }
    assert.equal(gallery.getExpressionRequirement('haeun', 'relieved'), 100);
    assert.equal(gallery.getExpressionRequirement('haeun', 'firm'), 67);
});

test('casual-outfit FreeTalk keeps date/home sprites across applyExpression, tags, group turns, and gallery', () => {
    const prevPicker = runtime.window.pickCharacterExpressionVariant;
    runtime.window.pickCharacterExpressionVariant = (charId, expr, base) =>
        base.replace(/\.(png|webp)$/, '_02.$1');
    try {
        for (const [name, id, outfit] of [
            ['Nurse', 'nurse', 'home'],
            ['Seoyeon', 'seyoun', 'date'],
            ['Yuna', 'yuna', 'date'],
            ['Dain', 'dain', 'date']
        ]) {
            const pattern = new RegExp(`^assets/images/characters/${id}_${outfit}_[a-z0-9_]+\\.webp$`);
            const slotImg = { dataset: { cupidAvatarAsset: `assets/images/characters/${id}_${outfit}_normal.webp` } };
            const slot = { dataset: { groupCharId: name }, querySelector: () => slotImg };
            const context = Object.assign(Object.create(main), {
                uiManager: { charSlots: { center: slot } },
                charNameMap: { [name]: name }
            });
            const scene = { name, character: `assets/images/characters/${id}_${outfit}_normal.webp` };
            for (const expr of ['normal', 'angry', 'shy', 'flushed', 'climax', 'ahegao', 'exhausted', 'pain', 'undressed_shy']) {
                const selection = main.applyExpression.call(context, expr, scene);
                assert.match(selection.path, pattern);
                assert.match(slotImg.selectedAsset, pattern);
                main.processExpressionTags.call(context, `test [EXPRESSION: ${expr}]`, scene);
                assert.match(slotImg.selectedAsset, pattern);
                main.applyExpression.call(context, expr, { name });
                assert.match(slotImg.selectedAsset, pattern);
                const groupSel = main._applyGroupExpression.call(context, expr, name);
                assert.match(groupSel.path, pattern);
                assert.match(slotImg.selectedAsset, pattern);
            }
        }
        const gft = new runtime.window.GalleryFreeTalk('en', {});
        const prevGetEl = runtime.document.getElementById;
        const gftImg = { dataset: { cupidAvatarAsset: 'assets/images/characters/nurse_home_smile.webp' } };
        runtime.document.getElementById = id => (id === 'gft-char-img' ? gftImg : image);
        try {
            for (const expr of ['normal', 'angry', 'climax', 'exhausted', 'pain']) {
                const sel = gft._updateExpression(expr, 'nurse');
                assert.match(sel.path, /^assets\/images\/characters\/nurse_home_[a-z0-9_]+\.webp$/);
                assert.match(gftImg.selectedAsset, /^assets\/images\/characters\/nurse_home_[a-z0-9_]+\.webp$/);
            }
        } finally {
            runtime.document.getElementById = prevGetEl;
        }
    } finally {
        runtime.window.pickCharacterExpressionVariant = prevPicker;
    }
});

test('Main, Group, and Gallery cache the broad fatigue rule in every language', () => {
    for (const lang of languages) {
        const rule = lang === 'ko' ? '몹시 지치면 exhausted.' : 'exhausted=very tired.';
        let player = 'Player';
        const gft = new runtime.window.GalleryFreeTalk(lang, { getPlayerName: () => player, getCurrentAffinity: () => 100 });
        for (const [name, id] of Object.entries(characters).filter(([name]) => name !== 'Minsu')) {
            const options = { lang, sceneName: name, displayName: name, locationName: 'Library',
                context: 'Current fatigue', affinity: 50, promptData: runtime.window.getPromptData(lang), playerName: player, knowsName: true };
            const prompts = [
                runtime.window.buildSystemPrompt(options),
                runtime.window.buildCupidGroupSystemPrompt({ lang, participants: [{ id: name, name, role: 'lead' }, { id: name === 'Dain' ? 'Seoyeon' : 'Dain', name: name === 'Dain' ? 'Seoyeon' : 'Dain', role: 'second' }],
                    locationName: 'Library', context: 'Current fatigue', affinities: { [name]: 50 }, promptData: options.promptData, playerName: player }),
                gft._buildSystemPrompt(id)
            ];
            for (const prompt of prompts) {
                assert.equal(prompt.split(core.CACHE_BOUNDARY_MARKER).length, 2);
                const stable = prompt.split(core.CACHE_BOUNDARY_MARKER)[0];
                assert.ok(stable.includes(rule), `${lang}/${name}: fatigue rule must be stable`);
                assert.notEqual(core.getStablePromptFingerprint(prompt), core.getStablePromptFingerprint(prompt.replace(rule, 'changed rule')));
                assert.equal(core.getStablePromptFingerprint(prompt), core.getStablePromptFingerprint(prompt + '\nRecovered now'));
            }
            const changed = runtime.window.buildSystemPrompt({ ...options, context: 'Recovered now', affinity: 10 });
            assert.equal(core.getStablePromptFingerprint(prompts[0]), core.getStablePromptFingerprint(changed));
            player = 'Another player';
            assert.equal(core.getStablePromptFingerprint(prompts[2]), core.getStablePromptFingerprint(gft._buildSystemPrompt(id)));
        }
    }
});
