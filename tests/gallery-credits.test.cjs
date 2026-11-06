'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
function fixture(){
 const listeners={},requests=[],nodes=[];let balance=1000,pendingOnce=false;
 const createElement=tag=>{const el={tag,children:[],setAttribute(){},append(...items){this.children.push(...items);},remove(){this.removed=true;},showModal(){this.open=true;},close(){this.open=false;},focus(){}};nodes.push(el);return el;};
 const root={GAME_LANG:'ko',archerlabAccount:{ready:Promise.resolve(),user:null},addEventListener:(name,fn)=>listeners[name]=fn};
 const document={documentElement:{lang:'ko'},createElement,head:createElement('head'),body:createElement('body'),querySelectorAll:()=>[],querySelector:()=>null};
 const fetch=async(url,init={})=>{
  const u=new URL(url),body=JSON.parse(init.body||'{}');requests.push({path:u.pathname,body,headers:new Headers(init.headers),signal:init.signal});
  if(u.pathname==='/api/status')return Response.json({user:root.archerlabAccount.user,csrf:'csrf'});
  if(u.pathname==='/api/session/start')return Response.json({request:'request',state:'state'});
  if(u.pathname==='/api/sso')return Response.json({code:'code'});
  if(u.pathname==='/api/session')return Response.json({user_id:body.guest?'gu:browser':'al:member',token:body.guest?'guest-token':'member-token',expires_at:Date.now()+3600000});
  if(u.pathname==='/api/credits')return Response.json({owner:root.archerlabAccount.user?'al:member':'gu:browser',balance,price:10});
  if(u.pathname==='/api/credits/cancel')return Response.json({ok:true});
  if(u.pathname==='/api/credits/chat'){
   if(pendingOnce){pendingOnce=false;return Response.json({error:'CREDIT_PENDING'},{status:409});}
   balance-=10;return Response.json({choices:[{message:{content:'Hello'}}]});
  }throw new Error(url);
 };
 vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../assets/js/gallery-credits.js'),'utf8'),{window:root,document,fetch,Headers,Response,Request,ReadableStream,AbortController,AbortSignal,DOMException,Intl,Date,setTimeout,clearTimeout,console});
 return {api:root.CupidGalleryCredits,root,listeners,requests,nodes,setBalance:value=>balance=value,setPending:()=>pendingOnce=true};
}
test('gallery preflight blocks insufficient funds and keeps the draft outside the request path',async()=>{
 const f=fixture();assert.equal(await f.api.beforeSend(),true);f.setBalance(0);assert.equal(await f.api.beforeSend(),false);
 assert.equal(f.requests.filter(r=>r.path==='/api/credits/chat').length,0);assert.ok(f.nodes.some(n=>n.tag==='dialog'&&n.open));
});
test('gallery transport keeps turn/cache lineage across pending retries and sends verified credentials',async()=>{
 const f=fixture();f.setPending();const body=JSON.stringify({turnId:'gallery_turn_001',messages:[{role:'user',content:'Hi'}],cacheKey:'cupid-gft:ctx:ko:nurse:s123'});
 const response=await f.api.chatFetch('ignored',{method:'POST',headers:{'x-app-type':'cupid','x-request-type':'character','x-cache-key':'cupid-gft:ctx:ko:nurse:s123'},body});await response.text();
 const requests=f.requests.filter(r=>r.path==='/api/credits/chat');assert.equal(requests.length,2);
 assert.deepEqual(requests[0].body,requests[1].body);assert.equal(requests[0].headers.get('authorization'),'Bearer guest-token');assert.equal(requests[0].headers.get('x-cache-key'),'cupid-gft:ctx:ko:nurse:s123');
});
test('account changes replace wallet identity instead of billing the previous account',async()=>{
 const f=fixture();await f.api.refresh();assert.equal(f.api.wallet.owner,'gu:browser');
 f.root.archerlabAccount.user={id:'member'};f.listeners['archerlab:session']();await f.api.refresh();assert.equal(f.api.wallet.owner,'al:member');
 const response=await f.api.chatFetch('ignored',{method:'POST',body:JSON.stringify({turnId:'account_turn_001'})});await response.text();
 assert.equal(f.requests.find(r=>r.path==='/api/credits/chat').headers.get('authorization'),'Bearer member-token');
});
test('an identity change during prompt preparation cannot charge the newly signed-in account',async()=>{
 const f=fixture();await f.api.beforeSend();const epoch=f.api.capture();f.root.archerlabAccount.user={id:'member'};f.listeners['archerlab:session']();
 await assert.rejects(f.api.chatFetch('ignored',{method:'POST',body:JSON.stringify({turnId:'old_draft_001'})},epoch),e=>e.name==='AbortError');
 assert.equal(f.requests.filter(r=>r.path==='/api/credits/chat').length,0);
});
test('chat-logs outbox attaches viewerIdentityProof from HaremLogIdentity and preserves queued subject across account switch',async()=>{
 const f=fixture();
 assert.equal(f.root.HaremLogIdentity.capture(),'guest');
 assert.equal(await f.root.HaremLogIdentity.proofFor('guest'),'guest-token');
 const source=fs.readFileSync(path.join(__dirname,'../assets/js/modules/config.js'),'utf8');
 const storage=new Map(),logRequests=[];
 const context=vm.createContext({
  window:{CupidStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v),removeItem:k=>storage.delete(k)},HaremLogIdentity:f.root.HaremLogIdentity,archerlabAccount:f.root.archerlabAccount},
  navigator:{onLine:true},API_ENDPOINT:'https://logs.test/',Date,console:{warn(){}},AbortController,Blob,setTimeout,clearTimeout,
  getCupidAppId:()=>'cupid',logCupidError(){},
  fetch:async(url,init)=>{const body=JSON.parse(init.body);logRequests.push({url,body});return new Response('{"ok":true}');}
 });
 vm.runInContext(source.slice(source.indexOf('const CUPID_CHAT_LOG_QUEUE_KEY'),source.indexOf('async function saveCupidChatLog(')),context);
 vm.runInContext("enqueueCupidChatLog({appId:'cupid',clientMsgId:'u1',role:'user',content:'hello'});enqueueCupidChatLog({appId:'cupid',clientMsgId:'a1',role:'assistant',content:'hi'});",context);
 await vm.runInContext('flushCupidChatLogQueue()',context);
 assert.equal(logRequests.length,2);
 assert.equal(logRequests[0].body.viewerIdentityProof,'guest-token');
 assert.equal(logRequests[0].body.viewerIdentitySubject,undefined);
 assert.equal(logRequests[1].body.viewerIdentityProof,undefined);
 context.navigator.onLine=false;
 vm.runInContext("enqueueCupidChatLog({appId:'cupid',clientMsgId:'u2',role:'user',content:'queued as guest'})",context);
 f.root.archerlabAccount.user={id:'member'};f.listeners['archerlab:session']();
 vm.runInContext("enqueueCupidChatLog({appId:'cupid',clientMsgId:'u2',role:'user',content:'queued as guest updated'});enqueueCupidChatLog({appId:'cupid',clientMsgId:'u3',role:'user',content:'sent as member'});",context);
 context.navigator.onLine=true;
 await vm.runInContext('flushCupidChatLogQueue()',context);
 const u2=logRequests.find(r=>r.body.clientMsgId==='u2');
 const u3=logRequests.find(r=>r.body.clientMsgId==='u3');
 assert.equal(u2.body.viewerIdentityProof,undefined);
 assert.equal(u3.body.viewerIdentityProof,'member-token');
});
