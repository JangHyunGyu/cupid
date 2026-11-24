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

function loadRuntime(storageSeed = {}, { rewritePrompts = false } = {}) {
    const { rewriteReferences } = require('../scripts/character-assets.cjs');
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
    const promptsSrc = read('assets/js/prompts.js');
    vm.runInContext(rewritePrompts ? rewriteReferences(root, promptsSrc) : promptsSrc, box);
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
    const callAt = src.indexOf('window.recordCupidVisibleChat', at);
    const start = src.lastIndexOf('(((__oc', callAt);
    const end = src.indexOf('})));', start) + 5;
    const ocNames = [...new Set(src.slice(start, end).match(/\b__oc\d+\b/g) || [])];
    const decl = ocNames.length ? `var ${ocNames.join(',')}; ` : '';
    const fn = vm.runInContext(`(function (${Object.keys(scope).join(',')}) { ${decl}${src.slice(start, end)} })`, box);
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
    assert.match(src, /window\.pickCupidSpeakerAvatarAsset[\s\S]{0,60}call\(window,\s*charKey,/);
    assert.match(src, /window\.pickCupidSpeakerAvatarAsset[\s\S]{0,60}call\(window,\s*conversation\.speakerId,/);
    assert.match(read('assets/js/gallery-freetalk.js'), /window\.pickCupidSpeakerAvatarAsset[\s\S]{0,60}call\(window,\s*requestCharId,/);
    const { box } = loadRuntime();
    // The center slot still shows the nurse while Dain answers: the nurse file must not be logged.
    const slot = img('assets/images/characters/nurse_smile.png');
    const picked = box.pickCupidSpeakerAvatarAsset('Dain', box.getCupidChatAvatarAsset(slot), 'assets/images/characters/dain_happy.png');
    assert.equal(picked, 'assets/images/characters/dain_happy.webp');
});

test('1:1 opening record includes the shown expression and portrait', () => {
    const { box, saved } = loadRuntime();
    const self = { stateManager: { currentDay: 3 }, uiManager: { charSlots: { center: { querySelector: () => img('assets/images/characters/dain_shy_02.png') } } } };
    runOpeningStatement(box, "const displayReply =", {
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
    runOpeningStatement(box, "const displayReply =", {
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

test('rewritten dist CHARACTER_EXPRESSIONS paths still enforce speaker ownership and scene.character fallback', () => {
    const { box, saved } = loadRuntime({}, { rewritePrompts: true });

    assert.equal(box.isCupidAvatarAssetOwnedBy('assets/images/characters/yuna_normal.webp', 'Teacher'), false);
    assert.equal(box.isCupidAvatarAssetOwnedBy('assets/images/characters/seyoun_pout.webp', 'Dain'), false);
    assert.equal(box.isCupidAvatarAssetOwnedBy('assets/images/characters/teacher_soft_smile.webp', 'Teacher'), true);
    assert.equal(box.isCupidAvatarAssetOwnedBy('assets/images/characters/dain_relieved.webp', 'Dain'), true);

    // Reproduces D1 incident: center slot still holds yuna_normal.webp when hidden_homeroom_d2_freetalk opens for Teacher.
    const selfTeacher = {
        stateManager: { currentDay: 2 },
        uiManager: { charSlots: { center: { querySelector: () => img('assets/images/characters/yuna_normal.webp') } } }
    };
    runOpeningStatement(box, "const displayReply =", {
        self: selfTeacher,
        displayReply: null,
        charKey: 'Teacher',
        scene: { text: '교무실로 부른 건 다름이 아니라...', character: 'assets/characters/teacher/expressions/soft_smile/01/sprite.png' },
        sceneId: 'hidden_homeroom_d2_freetalk'
    });
    assert.equal(saved.length, 1);
    assert.equal(saved[0].charId, 'Teacher');
    assert.equal(saved[0].expression, 'soft_smile');
    assert.equal(saved[0].expressionVariant, '01');
    assert.equal(saved[0].avatarAsset, 'assets/images/characters/teacher_soft_smile.webp');

    // Reproduces D1 incident: center slot still holds seyoun_pout.webp when wall_dain_freetalk opens for Dain.
    const selfDain = {
        stateManager: { currentDay: 4 },
        uiManager: { charSlots: { center: { querySelector: () => img('assets/images/characters/seyoun_pout.webp') } } }
    };
    runOpeningStatement(box, "const displayReply =", {
        self: selfDain,
        displayReply: null,
        charKey: 'Dain',
        scene: { text: '왔어?', character: 'assets/characters/dain/expressions/relieved/01/sprite.png' },
        sceneId: 'wall_dain_freetalk'
    });
    assert.equal(saved.length, 2);
    assert.equal(saved[1].charId, 'Dain');
    assert.equal(saved[1].expression, 'relieved');
    assert.equal(saved[1].expressionVariant, '01');
    assert.equal(saved[1].avatarAsset, 'assets/images/characters/dain_relieved.webp');
});

test('casual outfit prefixes strip cleanly from portrait logs and foreign rejection drops variant', () => {
    const { box } = loadRuntime();
    const nurseFields = box.getCupidPortraitLogFields(img('assets/images/characters/nurse_home_smile.webp'), 'Nurse');
    assert.equal(nurseFields.expression, 'smile');
    assert.equal(nurseFields.expressionVariant, '01');
    assert.equal(nurseFields.avatarAsset, 'assets/images/characters/nurse_home_smile.webp');
    assert.equal(box.getCupidExpressionVariantId('assets/images/characters/nurse_home_smile.webp', 'smile'), '');

    const dateFields = box.getCupidPortraitLogFields(img('assets/images/characters/seyoun_date_shy.webp'), 'Seoyeon');
    assert.equal(dateFields.expression, 'shy');
    assert.equal(dateFields.expressionVariant, '01');

    const rejected = box.makeCupidChatLogEntry({
        userId: 'u',
        charId: 'Dain',
        sessionId: 'day4_temptation_dain_freetalk',
        role: 'assistant',
        content: 'test',
        context: '1:1',
        playerName: 'p',
        language: 'ko',
        appId: 'cupid',
        expression: 'seductive',
        expressionVariant: '02',
        avatarAsset: 'assets/images/characters/seyoun_soft_smile_02.webp'
    });
    assert.equal(rejected.avatarAsset, undefined);
    assert.equal(rejected.expressionVariant, undefined);
});

test('FreeTalkSystem clears _lastExpressionSelection on reset/interlude and passes group metadata + resolved day', async () => {
    const { box, saved } = loadRuntime();
    const recorded = [];
    vm.runInContext(read('assets/js/freetalk-core.js'), box);
    box.window.recordCupidVisibleChat = entry => { recorded.push(entry); return entry; };
    box.window.GAME_LANG = 'ko';
    box.window.CupidMedia = { loadImageWithMediaFallback: () => {} };
    box.DEFAULT_MAX_FREE_TALK_TURNS = 3;
    box.document = { ...box.document, documentElement: { lang: 'ko' }, querySelectorAll: () => [] };
    vm.runInContext(read('assets/js/modules/FreeTalkSystem.js'), box);

    const slotImg = img('assets/images/characters/seyoun_soft_smile_02.webp');
    const slot = { dataset: { groupCharId: 'Seoyeon' }, querySelector: () => slotImg };
    const ft = Object.create(box.window.FreeTalkSystem.prototype);
    Object.assign(ft, {
        charNameMap: { 서연: 'Seoyeon', 유나: 'Yuna', Seoyeon: 'Seoyeon', Yuna: 'Yuna' },
        stateManager: {
            currentDay: 1,
            getAffinity: () => 50,
            setAffinity() {},
            getRelationshipAftermath: () => null,
            setRelationshipAftermath() {},
            setFlag() {},
            getFlag: () => false
        },
        galleryManager: { incrementFreeTalkCount() {}, updateMaxAffinity() {}, checkAffinityUnlock() {} },
        dialogueSystem: {
            typeText: async () => {},
            getChatRenderReceipt: () => ({ status: 'rendered' }),
            finishStreamingText() {}
        },
        uiManager: {
            charSlots: { center: slot, left: slot, right: { dataset: { groupCharId: 'Yuna' }, querySelector: () => img('assets/images/characters/yuna_normal.webp') } },
            updateNameTag() {},
            showNextIndicator() {},
            showAffinityChange() {}
        },
        groupParticipants: [{ id: 'Seoyeon', name: '서연' }, { id: 'Yuna', name: '유나' }],
        _freeTalkEpoch: 1,
        currentSceneId: 'after2_group_seoyeon_companion',
        currentCharKey: 'group:Seoyeon:Yuna',
        isFreeTalking: true,
        freeTalkHistory: [],
        _activeRequestOwner: {},
        _lastExpressionSelection: { owner: 'Seoyeon', expression: 'soft_smile', avatarAsset: 'assets/images/characters/seyoun_soft_smile_02.webp', expressionVariant: '02' },
        _setGroupActiveSpeaker() {},
        _applyGroupExpression: expr => ({ owner: 'Seoyeon', expression: expr, path: 'assets/images/characters/seyoun_firm.webp', avatarAsset: 'assets/images/characters/seyoun_firm.webp', expressionVariant: '01' }),
        _applyGroupAffinity: () => ({ change: 1, requestedChange: 1, value: 51 }),
        _commitFreeTalkCheckpoint() {}
    });

    ft.applyExpression('seductive', { name: 'Seoyeon', romanticInterlude: true });
    assert.equal(ft._lastExpressionSelection, null);

    ft._lastExpressionSelection = { owner: 'Seoyeon', expressionVariant: '02' };
    ft._invalidateFreeTalkContext();
    assert.equal(ft._lastExpressionSelection, null);

    ft._lastExpressionSelection = { owner: 'Seoyeon', expressionVariant: '02' };
    ft.resetForNewGame();
    assert.equal(ft._lastExpressionSelection, null);

    ft.isFreeTalking = true;
    ft.currentSceneId = 'after2_group_seoyeon_companion';
    ft.currentCharKey = 'group:Seoyeon:Yuna';
    const requestContext = {
        owner: ft._activeRequestOwner,
        epoch: ft._freeTalkEpoch,
        sceneId: 'after2_group_seoyeon_companion',
        charKey: 'group:Seoyeon:Yuna',
        history: ft.freeTalkHistory,
        turnMeta: { turnId: 'group-turn-1' }
    };
    await ft._renderGroupConversations(
        [{ speakerId: 'Seoyeon', speakerName: '서연', text: '같이 정리하자.', segments: [{ type: 'dialogue', text: '같이 정리하자.' }], expression: 'firm', affinity: 1 }],
        requestContext,
        '응',
        'ko',
        { name: '서연' },
        null,
        null,
        { model: 'google/gemma-4-31b-it', providerRoute: 'openrouter:deepinfra/turbo', outputLanguage: 'ko' }
    );
    assert.equal(recorded.length, 1);
    assert.equal(recorded[0].conversationDay, 2);
    assert.equal(recorded[0].responseMetadata.model, 'google/gemma-4-31b-it');
    assert.equal(recorded[0].responseMetadata.providerRoute, 'openrouter:deepinfra/turbo');
});
