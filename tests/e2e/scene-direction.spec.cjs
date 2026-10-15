'use strict';
const {test,expect}=require('@playwright/test');
async function boot(page){
 const errors=[];page.on('pageerror',error=>errors.push(error.message));
 await page.route('**/*',route=>new URL(route.request().url()).hostname==='127.0.0.1'?route.continue():route.abort());
 await page.goto('/game.html');
 await page.waitForFunction(()=>window.gameEngine?.sceneRenderer&&!gameEngine._isRendering&&!gameEngine.dialogueSystem.isCurrentlyTyping());
 await page.evaluate(async()=>{for(const day of [2,3,4,5])await CupidContentLoader.ensureDay(day);gameEngine.dialogueSystem.typingSpeed=0;});
 return errors;
}
async function render(page,id){await page.evaluate(id=>gameEngine.renderScene(id,{restoring:true}),id);}
async function loaded(page,count){await expect(page.locator('#character-layer img')).toHaveCount(count);await expect.poll(()=>page.locator('#character-layer img').evaluateAll(images=>images.every(image=>image.complete&&image.naturalWidth>0))).toBe(true);}

for(const [width,height]of [[1440,900],[390,844],[844,390]])test.describe(`authored scene direction at ${width}x${height}`,()=>{
 test.use({viewport:{width,height},reducedMotion:'reduce'});
 test('distance changes are scoped and normal framing returns after close and intimate scenes',async({page},info)=>{
  const errors=await boot(page);
  await render(page,'morning2_seo_dust_3');await loaded(page,1);
  await expect(page.locator('#char-center img')).toHaveClass(/char-frame-close/);
  expect(await page.locator('#char-center img').evaluate(img=>Number(getComputedStyle(img).getPropertyValue('--char-distance-scale')))).toBe(1.14);
  await page.screenshot({path:info.outputPath('close.png'),animations:'disabled'});
  await render(page,'wall_seo_hug_1');await loaded(page,1);
  await expect(page.locator('#char-center img')).toHaveClass(/char-frame-intimate/);
  await expect(page.locator('#character-layer')).toHaveCSS('backdrop-filter','blur(1.6px)');
  expect(await page.locator('#background-layer').evaluate(el=>getComputedStyle(el).filter)).toContain('brightness');
  await page.screenshot({path:info.outputPath('intimate.png'),animations:'disabled'});
  await render(page,'morning2_seo_dust_6');
  await expect(page.locator('#char-center img')).toHaveClass(/char-frame-normal/);
  await expect(page.locator('#character-layer')).not.toHaveClass(/bg-depth-of-field/);
  await render(page,'after5_farewell_yuna_4');
  await expect(page.locator('#char-center img')).toHaveClass(/char-frame-far/);
  await page.screenshot({path:info.outputPath('far.png'),animations:'disabled'});
  expect(errors).toEqual([]);
 });

 test('three visible people retain their expressions and only the current speaker is emphasized',async({page},info)=>{
  const errors=await boot(page);
  await render(page,'lunch3_start');await loaded(page,3);
  await expect(page.locator('#char-center')).toHaveClass(/char-focused/);
  await expect(page.locator('#char-left')).toHaveClass(/char-dimmed/);
  await expect(page.locator('#char-right')).toHaveClass(/char-dimmed/);
  const centers=await page.locator('#character-layer img').evaluateAll(nodes=>nodes.map(node=>{const b=node.getBoundingClientRect();return b.x+b.width/2;}).sort((a,b)=>a-b));
  expect(centers[1]-centers[0]).toBeGreaterThan(width*0.1);
  expect(centers[2]-centers[1]).toBeGreaterThan(width*0.1);
  const bottoms=await page.locator('#character-layer img').evaluateAll(nodes=>nodes.map(node=>node.getBoundingClientRect().bottom));
  for(const bottom of bottoms)expect(bottom).toBeGreaterThanOrEqual(height-8);
  await page.screenshot({path:info.outputPath('three-people.png'),animations:'disabled'});
  await render(page,'lunch3_meal_3');
  await expect(page.locator('#char-left')).toHaveClass(/char-focused/);
  await expect(page.locator('#char-center')).toHaveClass(/char-dimmed/);
  await render(page,'lunch3_harem_1');
  await expect(page.locator('#character-layer .char-dimmed')).toHaveCount(0);
  await render(page,'lunch2_yuna_1');await loaded(page,1);
  await expect(page.locator('#character-layer')).not.toHaveClass(/multi-character-scene/);
  await expect(page.locator('#character-layer .char-dimmed')).toHaveCount(0);
  expect(errors).toEqual([]);
 });
});

test('the counteroffer staging uses the same saved identities as the group conversation',async({page})=>{
 await boot(page);
 for(const [flags,left,right]of [
  [{route_seoyeon:true,day4_took_yuna_counteroffer:true},'seyoun_sad','yuna_sad'],
  [{day4_counteroffer_target_teacher:true,day4_took_dain_counteroffer:true},'teacher_normal','dain_sad'],
  [{day4_counteroffer_target_nurse:true,day4_took_yuna_counteroffer:true},'nurse_normal','yuna_sad']
 ]){
  await page.evaluate(flags=>{gameEngine.stateManager.flags=flags;},flags);
  await render(page,'morning5_counteroffer_gather');await loaded(page,2);
  await expect(page.locator('#char-left img')).toHaveAttribute('src',new RegExp(left));
  await expect(page.locator('#char-right img')).toHaveAttribute('src',new RegExp(right));
  await render(page,'morning5_counteroffer_choice');await loaded(page,2);
 }
});

test('silence cues stop music with the authored duration and acceptance resumes the climax',async({page})=>{
 await boot(page);
 await page.evaluate(()=>{
  window.qaAudio=[];
  for(const method of ['playBgm','stopBgm','setAmbience','playSfx'])soundManager[method]=(...args)=>window.qaAudio.push({method,args});
  window.qaMusicUnlocks=[];gameEngine.galleryManager.unlockBGM=id=>window.qaMusicUnlocks.push(id);
 });
 await render(page,'lunch3_expose_1');
 expect(await page.evaluate(()=>window.qaAudio.some(x=>x.method==='stopBgm'&&x.args[0]===1))).toBe(true);
 expect(await page.evaluate(()=>window.qaMusicUnlocks.includes('none'))).toBe(false);
 await render(page,'lunch3_expose_4');
 expect(await page.evaluate(()=>window.qaAudio.some(x=>x.method==='playBgm'&&x.args[0].endsWith('/mystery.mp3')))).toBe(true);
 await render(page,'confess_dain_choice');
 expect(await page.evaluate(()=>window.qaAudio.some(x=>x.method==='stopBgm'&&x.args[0]===1.5))).toBe(true);
 expect(await page.evaluate(()=>window.qaAudio.some(x=>x.method==='playSfx'&&x.args[0]==='synth:volleyball'))).toBe(true);
 await render(page,'confess_dain_yes_9_b');
 expect(await page.evaluate(()=>window.qaAudio.some(x=>x.method==='playBgm'&&x.args[0].endsWith('/confession.mp3')))).toBe(true);
 await render(page,'morning5_caught_seoyeon_by_dain');
 expect(await page.evaluate(()=>window.qaAudio.some(x=>x.method==='stopBgm'&&x.args[0]===0))).toBe(true);
});

test('real WebAudio ambience loops and follows the existing mute control',async({page})=>{
 await boot(page);
 await page.mouse.click(10,100);
 await page.waitForFunction(()=>soundManager._unlocked&&soundManager.audioContext?.state==='running');
 await page.evaluate(()=>soundManager.setAmbience('library'));
 expect(await page.evaluate(()=>soundManager.ambientSource?.loop)).toBe(true);
 expect(await page.evaluate(()=>{
  const data=soundManager.ambientSource.buffer.getChannelData(0);
  return data.length>0&&data.some(value=>value!==0)&&data.every(Number.isFinite);
 })).toBe(true);
 await page.evaluate(()=>soundManager.setMuted(true));
 await expect.poll(()=>page.evaluate(()=>soundManager.ambientGain.gain.value)).toBeLessThan(0.001);
 await page.evaluate(()=>soundManager.setAmbience(null));
 expect(await page.evaluate(()=>soundManager.ambientSource)).toBe(null);
});
