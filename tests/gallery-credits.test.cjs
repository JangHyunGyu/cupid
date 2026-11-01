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
