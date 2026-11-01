'use strict';
// Existing reply-path tests mock the AI provider separately; this supplies only
// the wallet identity/preflight introduced by gallery billing.
async function installGalleryCreditMock(page){
 await page.addInitScript(()=>{
  window.archerlabAccount={ready:Promise.resolve(),user:null};
  let id=0;const slots=new Map();window.turnstile={render(host,options){slots.set(++id,options);return id;},execute(key){setTimeout(()=>slots.get(key)?.callback('test-proof'),0);},remove(key){slots.delete(key);}};
 });
 await page.route('https://avatar.archerlab.dev/api/**',async route=>{
  const req=route.request(),p=new URL(req.url()).pathname;
  if(p==='/api/credits/chat')return route.fallback();
  const origin=new URL(page.url()).origin;
  const headers={'access-control-allow-origin':origin,'access-control-allow-credentials':'true','access-control-allow-methods':'GET,POST,OPTIONS','access-control-allow-headers':'content-type,authorization,x-app-type,x-roleplay-surface,x-request-type,x-chat-mode,x-output-language,x-cache-key,x-ai-proof','content-type':'application/json'};
  if(req.method()==='OPTIONS')return route.fulfill({status:204,headers});
  const body=p==='/api/session'?{token:'gallery-token',user_id:'gu:test-gallery',expires_at:Date.now()+3600000}:p==='/api/credits'?{owner:'gu:test-gallery',balance:1000,price:10}:{ok:true};
  return route.fulfill({headers,body:JSON.stringify(body)});
 });
}
module.exports={installGalleryCreditMock};
