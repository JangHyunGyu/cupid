'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..');
test('all archived maintenance files retain their original bytes and stay outside active entrypoints',()=>{
    const rows=JSON.parse(fs.readFileSync(path.join(root,'archive/maintenance-20261016/manifest.json'),'utf8'));
    assert.equal(rows.length,114);
    for(const row of rows){
        assert.equal(path.basename(row.original),row.original);
        const file=path.resolve(root,row.archived);
        assert.ok(file.startsWith(path.join(root,'archive')+path.sep));
        const bytes=fs.readFileSync(file);
        assert.equal(bytes.length,row.bytes);
        assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),row.sha256);
        assert.equal(fs.existsSync(path.join(root,row.original)),false,row.original+' returned to the root');
    }
    for(const file of ['validate.js','generate-scenario.js','test_endings.js','test_i18n_full.js','deepseek_api.js','model_adapters/index.cjs'])assert.ok(fs.existsSync(path.join(root,file)));
});
