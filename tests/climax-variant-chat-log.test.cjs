'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function loadCupidLogRuntime() {
    const config = fs.readFileSync(path.join(__dirname, '../assets/js/modules/config.js'), 'utf8');
    const prompts = fs.readFileSync(path.join(__dirname, '../assets/js/prompts.js'), 'utf8');
    const storage = new Map();
    const requests = [];
    const saved = [];
    const context = vm.createContext({
        window: {
            CupidStorage: {
                getItem: key => storage.get(key) || null,
                setItem: (key, value) => storage.set(key, value),
                removeItem: key => storage.delete(key)
            },
            CHARACTER_EXPRESSIONS: null,
            CHARACTER_EXPRESSION_VARIANTS: null,
            pickCharacterExpressionVariant: null
        },
        navigator: { onLine: true },
        API_ENDPOINT: 'https://logs.test/',
        console,
        AbortController,
        Blob,
        setTimeout,
        clearTimeout,
        URL,
        fetch: async (url, init) => {
            requests.push({ url, body: JSON.parse(init.body) });
            return new Response('{"ok":true}');
        }
    });
    // prompts.js registers CHARACTER_EXPRESSION_VARIANTS + pickCharacterExpressionVariant on window.
    const promptStart = prompts.indexOf('const makeCharacterExpressionVariants');
    const promptEnd = prompts.indexOf('window.pickCharacterExpressionVariant = pickCharacterExpressionVariant;');
    assert.ok(promptStart >= 0 && promptEnd > promptStart);
    vm.runInContext(
        prompts.slice(promptStart, promptEnd) + '\nwindow.pickCharacterExpressionVariant = pickCharacterExpressionVariant;\n',
        context
    );
    // normalizePromptCharacterKey is referenced by pick; stub if missing from the slice.
    if (typeof context.normalizePromptCharacterKey !== 'function') {
        vm.runInContext(
            'function normalizePromptCharacterKey(key){return String(key||"").trim();}',
            context
        );
    }
    vm.runInContext(
        config.slice(
            config.indexOf('const CUPID_CHAT_LOG_QUEUE_KEY'),
            config.indexOf('function limitCupidLogText(')
        ),
        context
    );
    Object.assign(context, {
        getCupidDeviceId: () => 'fixture-user',
        getCupidLanguage: () => 'en',
        getCupidAppId: () => 'cupid',
        getCurrentCupidConversationDay: () => 5,
        resolveCupidConversationDay: day => day,
        normalizeCupidConversationDay: day => day,
        getCupidResponseLogMetadata: () => ({}),
        normalizeCupidChatLogAffinity: value => (value == null ? null : value),
        persistCupidChatLogEntries: async entries => { saved.push(...entries); }
    });
    return { context, requests, saved, storage };
}

test('runtime path: pick climax variant then saveCupidChatLog writes expressionVariant and avatarAsset', async () => {
    const { context, requests, saved } = loadCupidLogRuntime();
    const pick = context.window.pickCharacterExpressionVariant;
    assert.equal(typeof pick, 'function');

    const base = 'assets/images/characters/dain_climax.png';
    const selectedPath = pick('Dain', 'climax', base, () => 0.37, {
        scope: 'test:climax-save',
        turn: 'turn-climax-1'
    });
    assert.match(selectedPath, /dain_climax(?:_\d{2})?\.png$/);
    assert.ok(context.window.CHARACTER_EXPRESSION_VARIANTS.Dain.climax.includes(selectedPath));

    const avatarAsset = context.getCupidChatAvatarAssetFromPath(selectedPath);
    const expressionVariant = context.normalizeCupidExpressionVariant(
        context.getCupidExpressionVariantId(selectedPath, 'climax')
    );
    assert.match(avatarAsset, /^assets\/images\/characters\/dain_climax(?:_\d{2})?\.webp$/);
    assert.match(expressionVariant, /^(?:01|\d{2})$/);
    if (/_(\d{2})\.png$/.test(selectedPath)) {
        assert.equal(expressionVariant, selectedPath.match(/_(\d{2})\.png$/)[1]);
    } else {
        assert.equal(expressionVariant, '01');
    }

    // Mirror FreeTalkSystem / gallery-freetalk save call after selection.
    await context.saveCupidChatLog({
        charId: 'Dain',
        assistantContent: 'climax reply',
        sessionId: 'gallery-freetalk',
        expression: 'climax',
        expressionVariant,
        avatarAsset
    });

    assert.equal(saved.length, 1);
    assert.equal(saved[0].expression, 'climax');
    assert.equal(saved[0].expressionVariant, expressionVariant);
    assert.equal(saved[0].avatarAsset, avatarAsset);
    assert.notEqual(saved[0].expressionVariant, '');
    assert.notEqual(saved[0].avatarAsset, '');

    context.enqueueCupidChatLog(saved[0]);
    await context.flushCupidChatLogQueue();
    assert.equal(requests.at(-1).body.expression, 'climax');
    assert.equal(requests.at(-1).body.expressionVariant, expressionVariant);
    assert.equal(requests.at(-1).body.avatarAsset, avatarAsset);
});

test('makeCupidChatLogEntry rejects empty climax rows that previously leaked into D1', () => {
    const { context } = loadCupidLogRuntime();
    const broken = context.makeCupidChatLogEntry({
        userId: 'u', charId: 'Dain', sessionId: 's', role: 'assistant', content: 'x',
        context: '1:1', playerName: 'p', language: 'en', appId: 'cupid',
        expression: 'climax', expressionVariant: '', avatarAsset: ''
    });
    assert.equal(broken.expression, 'climax');
    assert.equal(broken.expressionVariant, undefined);
    assert.equal(broken.avatarAsset, undefined);

    const fixed = context.makeCupidChatLogEntry({
        userId: 'u', charId: 'Dain', sessionId: 's', role: 'assistant', content: 'x',
        context: '1:1', playerName: 'p', language: 'en', appId: 'cupid',
        expression: 'climax',
        expressionVariant: '02',
        avatarAsset: 'assets/images/characters/dain_climax_02.webp'
    });
    assert.equal(fixed.expressionVariant, '02');
    assert.equal(fixed.avatarAsset, 'assets/images/characters/dain_climax_02.webp');
});
