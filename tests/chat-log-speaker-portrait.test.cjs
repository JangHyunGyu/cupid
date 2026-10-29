'use strict';
// Cupid chat logs: opening and local-recovery rows carry the shown expression and portrait,
// and a saved portrait always belongs to the speaking character.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

function loadRuntime(storageSeed = {}) {
    const storage = new Map(Object.entries(storageSeed));
    const box = {
        console: { log() {}, info() {}, warn() {}, error() {} }, setTimeout, clearTimeout, URL, AbortController, Blob,
        navigator: { onLine: true }, fetch: async () => new Response('{"ok":true}'),
        localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
        document: { addEventListener() {}, querySelector: () => null, getElementById: () => null, createElement: () => ({}) },
        addEventListener() {}
    };
    box.window = box; box.self = box;
    vm.createContext(box);
    vm.runInContext(read('assets/js/prompts.js'), box);
    vm.runInContext(read('assets/js/modules/config.js'), box);
    box.CupidStorage = { getItem: k => storage.has(k) ? storage.get(k) : null, setItem: (k, v) => storage.set(k, v), removeItem: k => storage.delete(k) };
    const saved = [];
    box.persistCupidChatLogEntries = async entries => { saved.push(...entries); };
    box.getCupidDeviceId = () => 'fixture-user';
    box.getCupidLanguage = () => 'ko';
    box.uploadImageToR2 = async () => '';
    return { box, saved };
}

const img = src => ({ dataset: {}, getAttribute: name => (name === 'src' ? src : null) });

// Runs the exact opening record statement from FreeTalkSystem.js with a fake `this`.
function runOpeningStatement(box, marker, scope) {
    const src = read('assets/js/modules/FreeTalkSystem.js');
    const at = src.indexOf(marker);
    assert.ok(at >= 0, marker);
    const start = src.indexOf('window.recordCupidVisibleChat?.(', at);
    const end = src.indexOf('});', start) + 3;
    const fn = vm.runInContext(`(function (${Object.keys(scope).join(',')}) { ${src.slice(start, end)} })`, box);
    fn.call(scope.self, ...Object.values(scope));
}

test('speaker ownership: another character portrait is never accepted', () => {
    const { box } = loadRuntime();
    assert.equal(box.isCupidAvatarAssetOwnedBy('assets/images/characters/dain_smile.webp', 'Dain'), true);
    assert.equal(box.isCupidAvatarAssetOwnedBy('assets/images/characters/nurse_smile.webp', 'Dain'), false);
    assert.equal(box.isCupidAvatarAssetOwnedBy('assets/images/characters/teacher_smile.webp', 'Yuna'), false);
    assert.equal(box.isCupidAvatarAssetOwnedBy('assets/images/characters/seyoun_shy.webp', 'Seoyeon'), true);
    assert.equal(box.isCupidAvatarAssetOwnedBy('assets/images/characters/nurse_smile.webp', 'School Nurse'), true);
    assert.equal(box.pickCupidSpeakerAvatarAsset('Seoyeon', 'assets/images/characters/teacher_smile.png', 'assets/images/characters/seyoun_smile_02.png'),
        'assets/images/characters/seyoun_smile_02.webp');
    assert.equal(box.pickCupidSpeakerAvatarAsset('Yuna', 'assets/images/characters/nurse_normal.webp'), '');
    const entry = box.makeCupidChatLogEntry({ userId: 'u', charId: 'Dain', sessionId: 's', role: 'assistant', content: 'x',
        context: '1:1', playerName: 'p', language: 'ko', appId: 'cupid', expression: 'smile',
        avatarAsset: 'assets/images/characters/teacher_smile.webp' });
    assert.equal(entry.avatarAsset, undefined, 'teacher portrait dropped from a Dain row');
    const group = box.makeCupidChatLogEntry({ userId: 'u', charId: 'group', speakerId: 'Yuna', sessionId: 's', role: 'assistant', content: 'x',
        context: 'group', playerName: 'p', language: 'ko', appId: 'cupid', expression: 'smile',
        avatarAsset: 'assets/images/characters/yuna_smile_03.webp' });
    assert.equal(group.avatarAsset, 'assets/images/characters/yuna_smile_03.webp');
    assert.equal(group.expressionVariant, '03');
});

test('realtime 1:1 and group paths choose the speaker portrait over a stale slot', () => {
    const src = read('assets/js/modules/FreeTalkSystem.js');
    assert.match(src, /pickCupidSpeakerAvatarAsset\?\.\(charKey,/);
    assert.match(src, /pickCupidSpeakerAvatarAsset\?\.\(conversation\.speakerId,/);
    assert.match(read('assets/js/gallery-freetalk.js'), /pickCupidSpeakerAvatarAsset\?\.\(requestCharId,/);
    const { box } = loadRuntime();
    // The center slot still shows the nurse while Dain answers: the nurse file must not be logged.
    const slot = img('assets/images/characters/nurse_smile.png');
    const picked = box.pickCupidSpeakerAvatarAsset('Dain', box.getCupidChatAvatarAsset(slot), 'assets/images/characters/dain_happy.png');
    assert.equal(picked, 'assets/images/characters/dain_happy.webp');
});

test('1:1 opening record includes the shown expression and portrait', () => {
    const { box, saved } = loadRuntime();
    const self = { stateManager: { currentDay: 3 }, uiManager: { charSlots: { center: { querySelector: () => img('assets/images/characters/dain_shy_02.png') } } } };
    runOpeningStatement(box, "const displayReply = checkpoint?.lastReply;", {
        self, displayReply: null, charKey: 'Dain', scene: { text: '안녕, 왔구나.' }, sceneId: 'scene-1'
    });
    assert.equal(saved.length, 1);
    assert.equal(saved[0].logSource, 'opening');
    assert.equal(saved[0].expression, 'shy');
    assert.equal(saved[0].expressionVariant, '02');
    assert.equal(saved[0].avatarAsset, 'assets/images/characters/dain_shy_02.webp');
});

test('1:1 opening never logs another character shown in the center slot', () => {
    const { box, saved } = loadRuntime();
    const self = { stateManager: { currentDay: 3 }, uiManager: { charSlots: { center: { querySelector: () => img('assets/images/characters/nurse_smile.png') } } } };
    runOpeningStatement(box, "const displayReply = checkpoint?.lastReply;", {
        self, displayReply: null, charKey: 'Dain', scene: { text: '안녕.' }, sceneId: 'scene-1'
    });
    assert.equal(saved[0].avatarAsset, undefined);
    assert.ok(!saved[0].expression);
});

test('group opening record uses the speaker slot portrait', () => {
    const { box, saved } = loadRuntime();
    const slots = {
        left: { dataset: { groupCharId: 'Yuna' }, querySelector: () => img('assets/images/characters/yuna_happy.png') },
        right: { dataset: { groupCharId: 'Dain' }, querySelector: () => img('assets/images/characters/dain_angry_03.png') }
    };
    const self = { stateManager: { currentDay: 4 }, uiManager: { charSlots: slots } };
    runOpeningStatement(box, 'for (let index = 0; index < openingDialogues.length; index += 1) {', {
        self, line: { speakerId: 'Dain', content: '늦었잖아.' }, participants: ['Yuna', 'Dain'], sceneId: 'group-1'
    });
    assert.equal(saved.length, 1);
    assert.equal(saved[0].speakerId, 'Dain');
    assert.equal(saved[0].expression, 'angry');
    assert.equal(saved[0].expressionVariant, '03');
    assert.equal(saved[0].avatarAsset, 'assets/images/characters/dain_angry_03.webp');
});

test('local recovery keeps expression and portrait from saved history', async () => {
    const save = { gameState: {
        chatMemories: { Dain: [
            { role: 'user', content: '안녕' },
            { role: 'assistant', content: '{"text":"응, 안녕.","expression":"smile"}' }
        ] },
        groupConversationMemories: [{
            participants: ['Yuna', 'Dain'], sessionId: 'g1', turnId: 't1', userContent: '둘 다 안녕',
            assistantMessages: [
                { speakerId: 'Yuna', content: '안녕!', expression: 'happy', expressionVariant: '02', avatarAsset: 'assets/images/characters/yuna_happy_02.webp' },
                { speakerId: 'Dain', content: '응.', expression: 'smile', avatarAsset: 'assets/images/characters/nurse_smile.webp' }
            ]
        }]
    } };
    const { box, saved } = loadRuntime({ cupid_save: JSON.stringify(save) });
    await box.migrateCupidChatHistoryToD1();
    const recovered = saved.filter(e => e.logSource === 'local-recovery' && e.role === 'assistant');
    const yuna = recovered.find(e => e.speakerId === 'Yuna');
    assert.equal(yuna.expression, 'happy');
    assert.equal(yuna.expressionVariant, '02');
    assert.equal(yuna.avatarAsset, 'assets/images/characters/yuna_happy_02.webp');
    const dainGroup = recovered.find(e => e.speakerId === 'Dain');
    assert.equal(dainGroup.expression, 'smile');
    assert.equal(dainGroup.avatarAsset, undefined, 'nurse portrait is not saved on a Dain row');
    const dainSolo = recovered.find(e => e.charId === 'Dain');
    assert.equal(dainSolo.content, '응, 안녕.');
    assert.equal(dainSolo.expression, 'smile');
});
