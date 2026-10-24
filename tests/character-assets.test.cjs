'use strict';
const test = require('node:test'), assert = require('node:assert/strict');
const fs = require('node:fs'), path = require('node:path'), os = require('node:os'), crypto = require('node:crypto');
const api = require('../scripts/character-assets.cjs');
function fixture(t) {
 const root = fs.mkdtempSync(path.join(os.tmpdir(), 'character-assets-'));
 t.after(() => fs.rmSync(root, { recursive: true, force: true }));
 const source = 'assets/characters/alex/expressions/smile/01/sprite.webp';
 const bytes = Buffer.from('unchanged-image-bytes');
 fs.mkdirSync(path.dirname(path.join(root, source)), { recursive: true });
 fs.writeFileSync(path.join(root, source), bytes);
 const data = { schemaVersion: 1, assets: [{ id: 'alex/expressions/smile/01', characterId: 'alex', role: 'expression', expression: 'smile', variant: '01', files: { 'sprite.webp': { source, publicPaths: ['assets/images/alex-smile.webp', source], bytes: bytes.length, sha256: crypto.createHash('sha256').update(bytes).digest('hex') } } }] };
 fs.mkdirSync(path.join(root, 'config')); fs.writeFileSync(path.join(root, 'config/character-assets.json'), JSON.stringify(data));
 return { root, source, bytes, data };
}
test('legacy URLs and canonical URLs preserve identical bytes; build rewrites queries without network work', t => {
 const {root, source, bytes} = fixture(t);
 assert.equal(api.verify(root).files, 1);
 assert.equal(api.resolveAssetSource(root, 'assets/images/alex-smile.webp'), path.join(root, source));
 const out = path.join(root, 'dist'); assert.equal(api.materialize(root, out), 2);
 for (const file of [source, 'assets/images/alex-smile.webp']) assert.deepEqual(fs.readFileSync(path.join(out, file)), bytes);
 assert.equal(api.rewriteReferences(root, '"assets/images/alex-smile.webp?v=3"'), `"${source}?v=3"`);
 assert.throws(() => api.materialize(root, root), /source tree/);
 fs.writeFileSync(path.join(root, source), 'corrupted'); assert.throws(() => api.verify(root), /content changed/);
});
test('new numeric variants and outfits register independently without renumbering prior variants', t => {
 const {root} = fixture(t);
 for (const file of ['alex/expressions/smile/02/sprite.webp','alex/outfits/date/expressions/sad/01/chat.png']) {
  const full=path.join(root,'assets/characters',file); fs.mkdirSync(path.dirname(full),{recursive:true}); fs.writeFileSync(full,'new');
 }
 assert.throws(()=>api.verify(root),/Unregistered/); api.sync(root);
 const assets=api.catalog(root).data.assets;
 assert.equal(assets.length,3); assert.equal(assets.find(a=>a.outfit==='date').characterId,'alex');
 assert.ok(assets.some(a=>a.variant==='02')); assert.equal(api.verify(root).files,3);
});
test('path traversal and duplicate public URLs are rejected', t => {
 const {root,data}=fixture(t);
 for(const value of ['../outside','assets/../outside','C:/outside','assets\\outside']) assert.throws(()=>api.inside(root,value));
 data.assets[0].files['sprite.webp'].publicPaths.push('assets/images/alex-smile.webp');
 fs.writeFileSync(path.join(root,'config/character-assets.json'),JSON.stringify(data));
 assert.throws(()=>api.catalog(root),/Duplicate asset URL/);
});
