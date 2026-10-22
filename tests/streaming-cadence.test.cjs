'use strict';
const test = require('node:test'), assert = require('node:assert/strict');
const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm');
const files = ["assets/js/freetalk-core.js", "assets/js/modules/DialogueSystem.js", "assets/js/gallery-freetalk.js"];
for (const file of files) {
  const source = fs.readFileSync(path.join(__dirname, '..', file), 'utf8');
  const start = source.indexOf('function advanceSteadyReveal('), brace = source.indexOf('{', start);
  let depth = 1, end = brace + 1;
  while (depth && end < source.length) { if (source[end] === '{') depth++; if (source[end] === '}') depth--; end++; }
  const sandbox = {};
  vm.runInNewContext(source.slice(start, end) + '\nglobalThis.step = advanceSteadyReveal;', sandbox);
  const step = sandbox.step;
  test(`${file}: 60, 120 and 144 Hz keep the same 30 ms cadence`, () => {
    const counts = [60, 120, 144].map(fps => {
      let state = { shown: 0, carry: 0 };
      for (let i = 0; i < fps * 3; i++) {
        const next = step(state.shown, 1000, 1000 / fps, state.carry, 30, 1, 0);
        assert.ok(next.shown - state.shown <= 1);
        state = next;
      }
      assert.ok(state.shown >= 99 && state.shown <= 100, `${fps} Hz: ${state.shown}`);
      return state.shown;
    });
    assert.ok(Math.max(...counts) - Math.min(...counts) <= 1);
  });
  test(`${file}: a long stall never dumps the rest or carries a catch-up burst`, () => {
    const stalled = step(5, 100, 2000, 20, 30, 1, 1000);
    assert.equal(stalled.shown, 6);
    assert.equal(stalled.carry, 0);
    assert.equal(step(stalled.shown, 100, 8, stalled.carry, 30, 1, 0).shown, 6);
    assert.equal(step(100, 100, 2000, 20, 30, 1, 0).carry, 0);
  });
}

const pacingSandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../assets/js/freetalk-core.js'), 'utf8'), pacingSandbox);
const makePacer = pacingSandbox.window.CupidFreeTalkCore.createPacedStreamingPreview;

test('short packets buffer briefly, refill without bursts, and final drains at the same pace', async () => {
  const queue = [], renders = [];
  let clock = 0, id = 0;
  const pacer = makePacer({ now: () => clock,
    onRender: frame => renders.push({ at: clock, text: frame.text.replace(/\s/g, '') }),
    scheduleFrame: callback => { queue.push(callback); return ++id; }, cancelFrame() {} });
  const pump = count => { for (let i = 0; i < count; i++) { clock += 16; const fn = queue.shift(); if (fn) fn(clock); } };
  pacer.update('abcde');
  pump(18);
  assert.equal(renders.length, 0, 'initial packets are buffered before reveal');
  pump(24);
  assert.equal(renders.at(-1).text, 'abcde');
  assert.ok(renders[0].at >= 320 && renders[0].at <= 368);
  const count = renders.length;
  pacer.update('abcdefghij');
  pump(18);
  assert.equal(renders.length, count, 'refill uses the same short buffer');
  pump(24);
  assert.equal(renders.at(-1).text, 'abcdefghij');
  for (let i = 1; i < renders.length; i++) assert.ok(renders[i].text.length - renders[i-1].text.length <= 1);
  pacer.reset();
  renders.length = 0;
  pacer.update('xyz');
  const drained = pacer.drain();
  pump(10);
  await drained;
  assert.equal(renders.at(-1).text, 'xyz');
  assert.deepEqual(renders.map(r => r.text.length), [1, 2, 3]);
  pacer.stop();
});
