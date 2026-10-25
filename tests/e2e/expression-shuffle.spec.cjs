'use strict';
const {test,expect}=require('@playwright/test');
const {isMediaFixtureRequest}=require('./helpers/media-fixture.cjs');
for(const [width,height]of [[320,568],[430,932],[667,375],[768,1024],[1440,900]])for(const surface of ['main','gallery'])test(`${surface}/${width}: one response keeps one variant across redraws`,async({page},testInfo)=>{
 test.setTimeout(90000);await page.setViewportSize({width,height});await page.emulateMedia({reducedMotion:'reduce'});
 await page.route('**/*',async route=>{const request=route.request();if(request.method()!=='POST'||isMediaFixtureRequest(request))return route.continue();return route.fulfill({json:{ok:true}});});
 if(surface==='gallery'){
  await page.addInitScript(()=>localStorage.setItem('cupid_gallery',JSON.stringify({version:2,affinityRebalanceVersion:1,characters:{seyoun:{met:true,maxAffinity:100,currentAffinity:100,galleryFreeTalkAffinityInitialized:true,perfectEndingCleared:true,freeTalkCount:30}},cg:{},endings:{},bgm:{}})));
  await page.goto('/gallery.html');await page.waitForFunction(()=>window.galleryFreeTalk);await page.evaluate(()=>window.galleryFreeTalk.open('seyoun'));
 }else{
  await page.goto('/game.html');await page.waitForFunction(()=>window.gameScriptsLoaded&&window.gameEngine?.sceneRenderer&&!window.gameEngine._isRendering);
  await page.evaluate(async()=>{window.gameEngine.dialogueSystem.typingSpeed=0;await window.gameEngine.renderScene('lunch_seo_freetalk');await window.ensureCupidFreeTalkRuntime?.();});
 }
 const selected=await page.evaluate(surface=>{
  const owner=surface==='gallery'?window.galleryFreeTalk:window.gameEngine.freeTalkSystem;
  const getImage=()=>surface==='gallery'?document.getElementById('gft-char-img'):window.gameEngine.uiManager.charSlots.center.querySelector('img');
  const draw=()=>{if(surface==='gallery')owner._updateExpression('flushed','seyoun');else owner.applyExpression('flushed',{name:'Seoyeon'});return getImage().dataset.cupidAvatarAsset;};
  const assets=[];for(let turn=0;turn<7;turn++){owner._activeChatTurnId='variant-e2e-'+turn;const first=draw();if(draw()!==first)throw Error('same reply redrew');assets.push(first);}return assets;
 },surface);
 expect(new Set(selected.slice(0,6)).size).toBe(6);expect(selected[5]).not.toBe(selected[6]);
 await expect.poll(()=>page.evaluate(surface=>{const img=surface==='gallery'?document.getElementById('gft-char-img'):window.gameEngine.uiManager.charSlots.center.querySelector('img');return img.complete&&img.naturalWidth>0;},surface)).toBe(true);
 await page.setViewportSize({width,height:Math.max(320,height-100)});
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);
 if([320,1440].includes(width))await page.screenshot({path:testInfo.outputPath(`${surface}-${width}.png`)});
});
