'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { resolveMediaDelivery } = require('../scripts/lib/media-delivery.cjs');
const storage = require('../config/media-storage.json');
const variants = require('../config/media-delivery.json');

test('optimized media preserves every original archive identity and unchanged fallback', () => {
  const original = JSON.stringify(storage);
  const delivery = resolveMediaDelivery(storage, variants);
  assert.equal(JSON.stringify(storage), original);
  assert.equal(Object.keys(variants).length, 12);
  for (const [relative, source] of Object.entries(storage)) {
    assert.equal(delivery[relative].sourceHash, source.sourceHash);
    if (variants[relative]) {
      assert.equal(delivery[relative].sha256, variants[relative].sha256);
      assert.ok(delivery[relative].size < source.size);
    } else assert.deepEqual(delivery[relative], source);
  }
});

test('stale sources and invalid delivery identities fail before publication', () => {
  const [relative, variant] = Object.entries(variants)[0];
  for (const patch of [{ sourceSha256: '0'.repeat(64) }, { key: 'images/wrong.webp' }, { size: 0 }, { size: storage[relative].size }, { width: 0 }, { etag: '' }]) {
    assert.throws(() => resolveMediaDelivery(storage, { [relative]: { ...variant, ...patch } }));
  }
  assert.throws(() => resolveMediaDelivery(storage, { 'unknown.webp': variant }));
});

test('manifest points to optimized objects while untouched assets keep their versions', async () => {
  const { MEDIA_MANIFEST } = await import('../functions/_lib/media-manifest.js');
  for (const [relative, variant] of Object.entries(variants)) {
    const id = relative.replace('assets/images/', '').replace(/\.webp$/, '');
    const file = MEDIA_MANIFEST[id].files.find(f => f.path === relative);
    assert.equal(file.sha256, variant.sha256);
    assert.equal(file.size, variant.size);
  }
});
