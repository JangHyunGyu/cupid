const test = require('node:test'), assert = require('node:assert/strict'), fs = require('node:fs'), path = require('node:path'), vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const filename = fs.existsSync(path.join(root,'assets/js/modules/ChatManager.js')) ? 'ChatManager.js' : 'config.js';
const source = fs.readFileSync(path.join(root,'assets/js/modules',filename),'utf8');
const code = source.match(/class ChatLogOutbox \{[\s\S]*?\n\}/)[0];
function storage() { const data = new Map(); return { data, blocked: false, get length() { return data.size; }, key(i) { return [...data.keys()][i]; }, getItem(k) { return data.get(k) ?? null; }, setItem(k,v) { if(this.blocked) throw Error('QuotaExceededError'); data.set(k,v); }, removeItem(k) { if(this.blocked) throw Error('QuotaExceededError'); data.delete(k); } }; }
function tab(store) { const ctx = vm.createContext({ console: { warn() {} }, Date }); vm.runInContext(code+';globalThis.Outbox=ChatLogOutbox',ctx); return new ctx.Outbox(()=>store); }
const row = (id,content=id) => ({ clientMsgId:id,content,role:'assistant' });
const ids = q => [...q].map(x=>x.clientMsgId).sort();
test('two tabs enqueue from the same stale snapshot without erasing each other', () => {
 const store=storage(),a=tab(store),b=tab(store);a.read('q');b.read('q');
 a.write('q',[row('a')]);b.write('q',[row('b')]);
 assert.deepEqual(ids(tab(store).read('q')),['a','b']);
});
test('acknowledging an old in-flight preview cannot remove another tab final revision', () => {
 const store=storage(),a=tab(store),b=tab(store);a.write('q',[row('turn','partial')]);
 a.read('q');b.read('q');b.write('q',[row('turn','complete response')]);a.write('q',[]);
 const pending=tab(store).read('q');assert.equal(pending.length,1);assert.equal(pending[0].content,'complete response');
});
test('an acknowledgement marker prevents an old tab from resurrecting an acknowledged snapshot', () => {
 const store=storage(),a=tab(store),b=tab(store);a.write('q',[row('a')]);a.read('q');b.read('q');a.write('q',[]);b.write('q',[row('a'),row('b')]);
 assert.deepEqual(ids(tab(store).read('q')),['b']);
});
test('quota failure retains pending rows and persists them once storage recovers', () => {
 const store=storage(),a=tab(store);store.blocked=true;a.write('q',[row('a')]);assert.deepEqual(ids(a.read('q')),['a']);
 store.blocked=false;a.read('q');assert.deepEqual(ids(tab(store).read('q')),['a']);
});
test('legacy queues migrate without dropping old messages or receipts', () => {
 const store=storage();store.setItem('q',JSON.stringify([row('old')]));const a=tab(store);const q=a.read('q');a.write('q',[...q,row('new')]);
 assert.deepEqual(ids(tab(store).read('q')),['new','old']);a.write('q',[]);assert.deepEqual(ids(tab(store).read('q')),[]);
});
