'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function harness() {
    let now = 1000;
    const frames = [];
    const context = vm.createContext({
        window: {}, console, CHAR_NAME_MAP: {}, KoreanProcessor: class {},
        performance: { now: () => now }, requestAnimationFrame: fn => frames.push(fn),
        setTimeout, clearTimeout
    });
    for (const name of ['DialogueSystem', 'MessengerView', 'GameEngine']) {
        vm.runInContext(fs.readFileSync(path.join(__dirname, '../assets/js/modules', name + '.js'), 'utf8'), context);
    }
    const messageEl = { innerHTML: '', scrollHeight: 0, scrollTop: 0 };
    const dialogue = new context.window.DialogueSystem({}, { messageEl });
    dialogue.processPlaceholders = text => text;
    dialogue.parseNarration = text => text;
    dialogue.updateTalkingAnimation = () => {};
    let advances = 0;
    const engine = Object.assign(Object.create(context.window.GameEngine.prototype), {
        dialogueSystem: dialogue, freeTalkSystem: { isFreeTalking: false },
        sceneRenderer: { currentSceneId: 'current', getScene: () => ({ text: 'Full line', next: 'next' }) },
        _resolveNextScene: () => 'next', renderScene: async () => { advances++; }
    });
    return { context, dialogue, engine, messageEl, setTime: value => { now = value; },
        frame: () => { const fn = frames.shift(); assert.ok(fn); fn(now); }, advances: () => advances };
}

test('the 250ms guard starts when skipped text is rendered, not when skip is requested', async () => {
    const h = harness();
    const pending = h.dialogue.typeText('Full line', 'Actor');
    h.dialogue.requestSkip();
    assert.equal(h.dialogue.isAdvanceCoolingDown(), false);
    h.setTime(1100);
    h.frame();
    await pending;
    assert.equal(h.messageEl.innerHTML, 'Full line');
    h.setTime(1349);
    for (let i = 0; i < 10; i++) await h.engine.handleDialogueClick();
    assert.equal(h.advances(), 0);
    h.setTime(1350);
    assert.equal(h.advances(), 0, 'ignored input must not be queued');
    await h.engine.handleDialogueClick();
    assert.equal(h.advances(), 1, 'ignored input must not extend the deadline');
});

test('natural typing completion does not arm a cooldown', async () => {
    const h = harness();
    h.dialogue.typingSpeed = 1;
    const pending = h.dialogue.typeText('X', 'Actor');
    h.frame();
    h.setTime(1001);
    h.frame();
    await pending;
    assert.equal(h.dialogue.isAdvanceCoolingDown(), false);
    await h.engine.handleDialogueClick();
    assert.equal(h.advances(), 1);
});

test('scene reset clears the previous manual reveal cooldown', () => {
    const h = harness();
    h.dialogue.armAdvanceCooldown();
    h.dialogue.resetAdvanceCooldown();
    assert.equal(h.dialogue.isAdvanceCoolingDown(), false);
});

test('ending typing remains unskippable', async () => {
    const h = harness();
    h.engine._isEndingScene = () => true;
    h.dialogue.isTyping = true;
    await h.engine.handleDialogueClick();
    assert.equal(h.dialogue.skipTyping, false);
    assert.equal(h.dialogue.isAdvanceCoolingDown(), false);
});

function messenger(h) {
    const view = new h.context.window.MessengerView({}, h.dialogue);
    const rows = [];
    view._speaker = () => ({ kind: 'contact', key: 'Yuna' });
    view._split = () => ({ spoken: 'Full message', narration: '' });
    view._openThread = () => {};
    view._appendRow = (kind, text) => rows.push({ kind, text });
    view._showTyping = () => new Promise(resolve => { view._finishAnimation = resolve; });
    return { view, rows };
}

test('skipping messenger typing arms the same guard after the bubble arrives', async () => {
    const h = harness();
    const { view, rows } = messenger(h);
    const pending = view.present({ name: 'Yuna', text: 'Full message' });
    h.setTime(1100);
    view.skip();
    await pending;
    assert.equal(rows.length, 1);
    assert.equal(h.dialogue.isAdvanceCoolingDown(), true);
    h.setTime(1350);
    assert.equal(h.dialogue.isAdvanceCoolingDown(), false);
});

test('natural and restored messenger arrivals do not arm a cooldown', async () => {
    for (const restoring of [false, true]) {
        const h = harness();
        const { view, rows } = messenger(h);
        const pending = view.present({ name: 'Yuna', text: 'Full message' }, { restoring });
        if (!restoring) view._finishAnimation(false);
        await pending;
        assert.equal(rows.length, 1);
        assert.equal(h.dialogue.isAdvanceCoolingDown(), false);
    }
});

test('cancelling messenger typing cannot block the next scene', async () => {
    const h = harness();
    const { view, rows } = messenger(h);
    const pending = view.present({ name: 'Yuna', text: 'Full message' });
    view.hide();
    await pending;
    assert.equal(rows.length, 0);
    assert.equal(h.dialogue.isAdvanceCoolingDown(), false);
});
