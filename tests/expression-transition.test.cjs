const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../assets/js/media-gate.js'), 'utf8');
const start = source.indexOf('async function fadeExpressionImage(');
const end = source.indexOf('  function loadImageWithMediaFallback(', start);
function harness(reduced = false) {
  const loads = new Map(), animations = [], commits = [];
  const scope = { window: { CSS: { supports: () => true }, matchMedia: () => ({ matches: reduced }), getComputedStyle: () => ({ opacity: '1', width: '100px', height: '100px' }) }, Image: class {
    decode() { return new Promise((resolve, reject) => loads.set(this.src, { resolve, reject })); }
  } };
  vm.runInNewContext(source.slice(start, end < 0 ? undefined : end), scope);
  const image = { src: 'old.webp', naturalWidth: 100, isConnected: true, style: { visibility: '' }, ownerDocument: { createElement() { return { style: {}, setAttribute() {}, appendChild() {}, remove() {} }; } }, parentElement: { appendChild() {} },
    cloneNode() { return { style: {}, removeAttribute() {}, setAttribute() {}, classList: { add() {} }, animate: this.animate, remove() {} }; },
    getAttribute() { return this.src; }, animate(frames, timing) {
      const animation = { frames, timing, cancelled: false, cancel() { this.cancelled = true; } };
      animation.finished = new Promise(resolve => animation.finish = resolve);
      animations.push(animation); return animation;
    } };
  return { image, loads, animations, commits, change: (src, options = {}) => scope.fadeExpressionImage(image, src, { onCommit: src => commits.push(src), ...options }) };
}
const tick = () => new Promise(resolve => setImmediate(resolve));
test('cold image loading keeps the previous face, then overlaps outgoing and incoming opacity', async () => {
  const h = harness(), done = h.change('sad.webp');
  assert.equal(h.image.src, 'old.webp'); assert.equal(h.animations.length, 0);
  h.loads.get('sad.webp').resolve(); await tick();
  assert.equal(h.image.src, 'sad.webp'); assert.equal(h.animations.length, 2);
  assert.deepEqual(JSON.parse(JSON.stringify(h.animations[0].frames)), [{ opacity: 1 }, { opacity: 0 }]);
  assert.deepEqual(JSON.parse(JSON.stringify(h.animations[1].frames)), [{ opacity: 0 }, { opacity: 1 }]);
  assert.equal(h.animations[0].timing.duration, h.animations[1].timing.duration);
  h.animations.forEach(a => a.finish()); assert.equal(await done, true);
  assert.equal(h.image.style.visibility, ''); assert.ok(h.animations.every(a => a.cancelled)); assert.deepEqual(h.commits, ['sad.webp']);
});
test('a new face waits for the active crossfade and a late preload never overwrites the latest face', async () => {
  const h = harness(), first = h.change('sad.webp');
  h.loads.get('sad.webp').resolve(); await tick();
  const second = h.change('angry.webp'); h.loads.get('angry.webp').resolve(); await tick();
  assert.equal(h.image.src, 'sad.webp'); assert.equal(h.animations.length, 2);
  h.animations.forEach(a => a.finish()); await first; await tick();
  assert.equal(h.image.src, 'angry.webp'); assert.equal(h.animations.length, 4);
  h.animations.forEach(a => a.finish()); await second;
  assert.deepEqual(h.commits, ['sad.webp', 'angry.webp']);
  const slow = h.change('slow.webp'), latest = h.change('latest.webp', { animate: false });
  h.loads.get('latest.webp').resolve(); await latest;
  h.loads.get('slow.webp').resolve(); assert.equal(await slow, false);
  assert.equal(h.image.src, 'latest.webp');
});
test('duplicate requests reuse a load; failed WebP and PNG keep the previous image and allow retry', async () => {
  const h = harness(), first = h.change('sad.webp'), same = h.change('sad.webp');
  assert.equal(h.loads.size, 1);
  h.loads.get('sad.webp').reject(Error('offline')); await tick();
  h.loads.get('sad.png').reject(Error('offline'));
  assert.equal(await first, false); assert.equal(await same, false);
  assert.equal(h.image.src, 'old.webp'); assert.equal(h.animations.length, 0);
  const retry = h.change('sad.webp', { animate: false }); h.loads.get('sad.webp').resolve();
  assert.equal(await retry, true); assert.equal(h.image.src, 'sad.webp');
});
test('reduced motion still waits for decoding and detached or invalidated scenes never commit', async () => {
  const h = harness(true), first = h.change('sad.webp');
  assert.equal(h.image.src, 'old.webp'); h.loads.get('sad.webp').resolve(); await first;
  assert.equal(h.animations.length, 0); assert.equal(h.image.src, 'sad.webp');
  const detached = h.change('angry.webp'); h.image.isConnected = false; h.loads.get('angry.webp').resolve();
  assert.equal(await detached, false); assert.equal(h.image.src, 'sad.webp');
  h.image.isConnected = true; let valid = true;
  const stale = h.change('old-room.webp', { isCurrent: () => valid }); valid = false;
  h.loads.get('old-room.webp').resolve(); assert.equal(await stale, false);
});

test('hidden lazy chat avatars never block a ready expression waiting for an offscreen download', async () => {
  const h = harness(true);
  Object.assign(h.image, { complete: false, loading: 'lazy', getClientRects: () => [], decode() { throw Error('must not decode hidden old image'); } });
  const done = h.change('sad.webp'); h.loads.get('sad.webp').resolve();
  assert.equal(await done, true); assert.equal(h.image.src, 'sad.webp');
});

test('the outgoing clone must decode before replacing the original visible image', async () => {
  const h = harness(); const clone = h.image.cloneNode.bind(h.image); const ready = [];
  h.image.cloneNode = () => ({ ...clone(), decode: () => new Promise(resolve => ready.push(resolve)) });
  const done = h.change('sad.webp'); h.loads.get('sad.webp').resolve(); await tick();
  assert.equal(h.image.src, 'old.webp'); assert.equal(h.animations.length, 0);
  ready.forEach(resolve => resolve()); await tick(); assert.equal(h.image.src, 'sad.webp');
  h.animations.forEach(a => a.finish()); assert.equal(await done, true);
});
