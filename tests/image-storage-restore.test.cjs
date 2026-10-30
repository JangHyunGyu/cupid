const test = require('node:test'), assert = require('node:assert/strict');
const fs = require('node:fs'), path = require('node:path'), os = require('node:os');
const { execFileSync, spawnSync } = require('node:child_process');
const { createHash } = require('node:crypto');
test('Git recovery preserves exact binary and CRLF SVG originals, rejects corruption and protects local edits', t => {
 const root = fs.mkdtempSync(path.join(os.tmpdir(), 'r2-restore-'));
 t.after(() => fs.rmSync(root, { recursive:true, force:true }));
 const git = (...args) => execFileSync('git', args, { cwd:root, encoding:'utf8', stdio:['ignore','pipe','pipe'] }).trim();
 git('init','-b','main'); git('config','user.name','Restore Test'); git('config','user.email','restore@example.test'); git('config','core.autocrlf','false'); git('config','commit.gpgsign','false');
 fs.mkdirSync(path.join(root,'assets'),{recursive:true}); fs.mkdirSync(path.join(root,'scripts')); fs.mkdirSync(path.join(root,'config'));
 fs.copyFileSync(path.join(__dirname,'../scripts/image-storage.py'),path.join(root,'scripts/image-storage.py'));
 const svg = Buffer.from('<svg>\r\n<path />\r\n</svg>\r\n'); const png = Buffer.from([137,80,78,71,13,10,26,10,0,255]);
 fs.writeFileSync(path.join(root,'assets/image.svg'),svg.toString().replace(/\r\n/g,'\n')); fs.writeFileSync(path.join(root,'assets/image.png'),png);
 fs.writeFileSync(path.join(root,'assets/lf.svg'),'<svg>\n</svg>\n');
 git('add','.'); git('commit','-m','Image baseline'); const commit = git('rev-parse','HEAD');
 git('config','core.autocrlf','true');
 const sources = { schemaVersion:1, parts:[], files:{} };
 for (const [name, bytes] of [['assets/image.svg',svg],['assets/image.png',png],['assets/lf.svg',Buffer.from('<svg>\n</svg>\n')]]) {
  sources.files[name] = { sha256:createHash('sha256').update(bytes).digest('hex'), bytes:bytes.length, sourceCommit:commit };
  fs.unlinkSync(path.join(root,name));
 }
 const manifest = path.join(root,'config/image-sources.json'); fs.writeFileSync(manifest,JSON.stringify(sources));
 const run = () => spawnSync('python',['scripts/image-storage.py','restore','--from-git'],{cwd:root,encoding:'utf8'});
 let result=run(); assert.equal(result.status,0,result.stderr);
 assert.deepEqual(fs.readFileSync(path.join(root,'assets/lf.svg')),Buffer.from('<svg>\n</svg>\n'));
 assert.deepEqual(fs.readFileSync(path.join(root,'assets/image.svg')),svg); assert.deepEqual(fs.readFileSync(path.join(root,'assets/image.png')),png);
 fs.writeFileSync(path.join(root,'assets/image.png'),'local edit'); result=run(); assert.notEqual(result.status,0); assert.match(result.stderr,/checksum mismatch/);
 assert.equal(fs.readFileSync(path.join(root,'assets/image.png'),'utf8'),'local edit');
 fs.unlinkSync(path.join(root,'assets/image.png')); sources.files['assets/image.png'].sha256='0'.repeat(64); fs.writeFileSync(manifest,JSON.stringify(sources));
 result=run(); assert.notEqual(result.status,0); assert.match(result.stderr,/checksum mismatch/); assert.equal(fs.existsSync(path.join(root,'assets/image.png')),false);
});
