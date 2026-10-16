'use strict';
const {test,expect}=require('@playwright/test');
test.beforeEach(async({page})=>{
    await page.route(/^https?:\/\//,r=>new URL(r.request().url()).hostname==='127.0.0.1'?r.fallback():r.abort());
});

async function firstScene(page){
    await page.goto('/game.html',{waitUntil:'domcontentloaded'});
    await page.waitForFunction(()=>window.gameEngine?.sceneRenderer.currentSceneId&&!gameEngine._isRendering);
}

test('the first scene renders while prompts are held and never downloads gallery-only UI',async({page})=>{
    let release;const held=new Promise(resolve=>release=resolve);const requests=[];
    page.on('request',r=>requests.push(r.url()));
    await page.route('**/assets/js/prompts.js?*',async r=>{await held;r.continue();});
    await firstScene(page);
    expect(await page.evaluate(()=>!!window.gameScriptsLoaded&&!window.buildSystemPrompt&&!!window.FreeTalkSystem&&!!window.GalleryProgress)).toBe(true);
    expect(requests.some(url=>/\/gallery-ui-|\/gallery\.js\?/.test(url))).toBe(false);
    await expect(page.locator('#dialogue-box')).toBeVisible();
    release();await page.evaluate(()=>ensureCupidFreeTalkRuntime());
    expect(await page.evaluate(()=>!!window.getPromptData&&!!window.buildSystemPrompt&&!!window.CHARACTER_EXPRESSIONS)).toBe(true);
});

test('restoring a free-talk scene waits for its prompt definitions',async({page})=>{
    let release;const held=new Promise(resolve=>release=resolve);
    await page.route('**/assets/js/prompts.js?*',async r=>{await held;r.continue();});
    await firstScene(page);
    await page.evaluate(()=>{gameEngine.dialogueSystem.typingSpeed=0;window.__restoringTalk=gameEngine.renderScene('lunch_seo_freetalk',{restoring:true});});
    expect(await page.evaluate(()=>gameEngine._isRendering&&!gameEngine.freeTalkSystem.isFreeTalking)).toBe(true);
    release();await page.evaluate(()=>window.__restoringTalk);
    expect(await page.evaluate(()=>gameEngine.freeTalkSystem.isFreeTalking&&gameEngine.freeTalkSystem.freeTalkHistory.length>0)).toBe(true);
    expect(await page.evaluate(()=>gameEngine.sceneRenderer.currentSceneId)).toBe('lunch_seo_freetalk');
});

test('a stale free-talk render cannot replace a newer scene after delayed prompts finish',async({page})=>{
    let release;const held=new Promise(resolve=>release=resolve);
    await page.route('**/assets/js/prompts.js?*',async r=>{await held;r.continue();});
    await firstScene(page);
    await page.evaluate(()=>{window.__staleTalk=gameEngine.renderScene('lunch_seo_freetalk',{restoring:true});});
    await page.evaluate(()=>{gameEngine.dialogueSystem.typingSpeed=0;return gameEngine.renderScene('classroom_2_b',{restoring:true});});
    release();await page.evaluate(()=>window.__staleTalk);
    expect(await page.evaluate(()=>gameEngine.sceneRenderer.currentSceneId)).toBe('classroom_2_b');
    expect(await page.evaluate(()=>gameEngine.freeTalkSystem.isFreeTalking)).toBe(false);
});

test('a failed background prompt fetch leaves the scene usable and retries on demand',async({page})=>{
    let attempts=0;
    await page.route('**/assets/js/prompts.js?*',r=>++attempts<=3?r.abort():r.continue());
    await firstScene(page);
    await page.waitForFunction(()=>!!window.__cupidLastFreeTalkPrefetchError);
    expect(attempts).toBe(3);
    await expect(page.locator('[data-cupid-load-error]')).toHaveCount(0);
    await page.evaluate(()=>{gameEngine.dialogueSystem.typingSpeed=0;return gameEngine.renderScene('lunch_seo_freetalk',{restoring:true});});
    expect(attempts).toBe(4);
    expect(await page.evaluate(()=>gameEngine.freeTalkSystem.isFreeTalking&&window.CupidFreeTalkPromptsReady)).toBe(true);
});
