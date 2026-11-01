const {test,expect}=require('@playwright/test');
const sizes=[[1440,900],[1024,768],[768,1024],[320,568],[430,932],[667,375]];
for(const lang of ['ko','en','ja','es','fr','de','pt','zh'])for(const [width,height] of (['ko','en','ja'].includes(lang)?sizes:[[320,568]])){
 test(`${lang} gallery billing and balance dialog ${width}x${height}`,async({page},info)=>{
  await page.setViewportSize({width,height});await page.emulateMedia({reducedMotion:'reduce'});
  let signedIn=false;const balances={guest:1000,member:1000},receipts=new Map(),calls=[];
  const origin='http://127.0.0.1:'+String(process.env.CUPID_E2E_PORT||'4173');
  await page.addInitScript(()=>{
   window.archerlabAccount={ready:Promise.resolve(),user:null};
   let seq=0;const widgets=new Map();window.turnstile={render(host,options){widgets.set(++seq,options);return seq;},execute(id){setTimeout(()=>widgets.get(id)?.callback('test-browser-proof'),0);},remove(id){widgets.delete(id);}};
   localStorage.setItem('cupid_gallery',JSON.stringify({version:2,affinityRebalanceVersion:1,characters:{nurse:{met:true,maxAffinity:90,currentAffinity:60,galleryFreeTalkAffinityInitialized:true,perfectEndingCleared:true,freeTalkCount:30}},cg:{},endings:{},bgm:{}}));
  });
  await page.route('**/*',async route=>{
   const req=route.request(),url=new URL(req.url()),p=url.pathname;
   const headers={'access-control-allow-origin':origin,'access-control-allow-credentials':'true','access-control-allow-methods':'POST,GET,OPTIONS','access-control-allow-headers':'content-type,authorization,x-app-type,x-roleplay-surface,x-request-type,x-chat-mode,x-output-language,x-cache-key,x-ai-proof'};
   const reply=(body,status=200)=>route.fulfill({status,headers:{...headers,'content-type':'application/json'},body:JSON.stringify(body)});
   if(req.method()==='OPTIONS')return route.fulfill({status:204,headers});
   const owner=req.headers().authorization==='Bearer member-token'?'member':'guest';
   const wallet=()=>({owner:owner==='guest'?'gu:browser':'al:member',balance:balances[owner],price:10});
   if(url.hostname==='avatar.archerlab.dev'){
    const body=req.method()==='POST'?req.postDataJSON():{};
    if(p==='/api/session/start')return reply({request:'request',state:'state'});
    if(p==='/api/session')return reply({token:body.guest?'guest-token':'member-token',user_id:body.guest?'gu:browser':'al:member',expires_at:Date.now()+3600000});
    if(p==='/api/credits')return reply(wallet());
    if(p==='/api/credits/cancel')return reply({ok:true});
    if(p==='/api/credits/chat'){
     expect(req.headers()['x-ai-proof']).toBe('test-browser-proof');expect(req.headers()['x-app-type']).toBe('cupid');
     calls.push({body,headers:req.headers()});
     const key=owner+body.turnId;if(receipts.has(key))return reply(receipts.get(key));
     if(balances[owner]<10)return reply({error:'INSUFFICIENT_CREDITS',wallet:wallet()},402);
     balances[owner]-=10;
     const result={turnId:body.turnId,latestUserHash:body.latestUserHash,choices:[{message:{content:JSON.stringify({segments:[{type:'dialogue',text:'Thank you for coming by.'}],expression:'neutral',affinity:0,affinityEvaluation:{status:'evaluated'}})}}]};
     receipts.set(key,result);return reply(result);
    }
   }
   if(url.hostname==='account.archerlab.dev')return reply(p==='/api/status'?{user:signedIn?{id:'member'}:null,csrf:'csrf'}:{code:'code'});
   if(req.method()==='POST')return reply({ok:true,events:[]});
   if(url.origin!==origin)return route.abort();return route.continue();
  });
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/gallery'+(lang==='ko'?'':'-'+lang)+'.html');await page.waitForFunction(()=>window.galleryFreeTalk&&window.CupidGalleryCredits);
  expect(await page.evaluate(()=>galleryFreeTalk.open('nurse'))).not.toBe(false);
  await page.waitForFunction(()=>CupidGalleryCredits.wallet?.balance===1000);
  const pill=page.locator('.cupid-gallery-balance');await expect(pill).toBeVisible();await pill.click();
  const dialog=page.locator('.cupid-gallery-credit-dialog');await expect(dialog).toBeVisible();
  const box=await dialog.boundingBox();expect(box.x).toBeGreaterThanOrEqual(0);expect(box.y).toBeGreaterThanOrEqual(0);expect(box.x+box.width).toBeLessThanOrEqual(width+1);expect(box.y+box.height).toBeLessThanOrEqual(height+1);
  await page.screenshot({path:info.outputPath('balance-dialog.png')});await dialog.locator('button').click();
  await page.evaluate(async()=>{document.getElementById('chat-input').value='Hello, how was your day?';await galleryFreeTalk._handleSend();});
  await page.waitForFunction(()=>CupidGalleryCredits.wallet?.balance===990);expect(calls.length).toBe(1);
  expect(calls[0].headers['x-cache-key']).toMatch(/^cupid-gft:ctx:/);expect(balances.guest).toBe(990);
  balances.guest=0;
  await page.evaluate(async()=>{document.getElementById('chat-input').value='Keep this unsent draft';await galleryFreeTalk._handleSend();});
  expect(calls.length).toBe(1);expect(await page.locator('#chat-input').inputValue()).toBe('Keep this unsent draft');await expect(dialog).toBeVisible();
  signedIn=true;await page.evaluate(()=>{archerlabAccount.user={id:'member'};window.dispatchEvent(new CustomEvent('archerlab:session',{detail:archerlabAccount.user}));});
  await page.waitForFunction(()=>CupidGalleryCredits.wallet?.owner==='al:member'&&CupidGalleryCredits.wallet.balance===1000);expect(balances.guest).toBe(0);
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth+1)).toBe(true);expect(errors).toEqual([]);
 });
}
