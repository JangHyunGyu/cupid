const { test, expect } = require('@playwright/test');
const { execFileSync } = require('node:child_process');
const path = require('node:path');
const root=path.resolve(__dirname,'../..');
for(const viewport of [{width:1280,height:800},{width:390,height:844}]){
 test(`existing scene appearance stays unchanged at ${viewport.width}px`,async({browser})=>{
  test.setTimeout(90000);
  const screenshots=[];
  for(const baseline of [true,false]){
   const context=await browser.newContext({viewport,serviceWorkers:'block'});
   const page=await context.newPage();
   await page.route('**/*',route=>{
    const req=route.request();
    if(req.method()==='POST')return route.fulfill({json:{ok:true}});
    const file=new URL(req.url()).pathname.slice(1);
    if(baseline&&file.startsWith('assets/js/')&&file.endsWith('.js')){
     try{return route.fulfill({body:execFileSync('git',['show',`8d522164:${file}`],{cwd:root,maxBuffer:8*1024*1024,stdio:['ignore','pipe','ignore']}),contentType:'application/javascript'});}catch{}
    }
    return route.continue();
   });
   await page.goto('/game.html');
   await page.waitForFunction(()=>window.gameScriptsLoaded&&window.gameEngine?.sceneRenderer&&!window.gameEngine._isRendering);
   await page.evaluate(async()=>{
    const e=window.gameEngine;e.dialogueSystem.typingSpeed=0;e.stateManager.currentDay=5;e.stateManager.playerName='검증';
    await e.renderScene('day5_haeun_high_intro');await document.fonts.ready;
    await Promise.all([...document.images].map(img=>img.decode().catch(()=>{})));
   });
   await page.addStyleTag({content:'*,*::before,*::after { animation:none!important; transition:none!important; caret-color:transparent!important; }'});
   await page.waitForFunction(()=>!window.gameEngine.dialogueSystem.isCurrentlyTyping());
   screenshots.push(await page.screenshot({animations:'disabled',path:`D:/workspace/_workspace/cupid-affinity-audit-20260922/ui-${viewport.width}-${baseline?'before':'after'}.png`}));
   await context.close();
  }
  expect(screenshots[1].equals(screenshots[0])).toBe(true);
 });
}
