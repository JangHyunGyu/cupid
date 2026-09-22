const { test, expect } = require('@playwright/test');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '../..');
const ready = page => page.waitForFunction(() => window.gameScriptsLoaded && window.gameEngine?.sceneRenderer && !window.gameEngine._isRendering);
async function mock(page, requests) {
    await page.route('**/*', route => {
        if (route.request().method() !== 'POST') return route.continue();
        const body = route.request().postDataJSON() || {};
        if (new URL(route.request().url()).pathname === '/api/ai') {
            requests.push(body);
            return route.fulfill({ json: { choices: [{ message: { content: JSON.stringify({ segments: [{type:'dialogue',text:'Thanks for telling me. I understand.'}], expression:'normal', affinity:3, forcedSexualViolation:'none' }) } }] } });
        }
        return route.fulfill({json:{ok:true,eventIds:(body.events || []).map(e=>e.eventId)}});
    });
}
test('reload and an old save cannot duplicate a completed personal turn', async ({page}) => {
    const requests=[];await mock(page,requests);
    await page.goto('/game-en.html');await ready(page);
    const oldSave=await page.evaluate(async()=>{
        const e=window.gameEngine;e.dialogueSystem.typingSpeed=0;e.stateManager.stats.Seoyeon.affinity=10;
        await e.renderScene('lunch_seo_freetalk');
        return window.CupidStorage.getItem('cupid_save');
    });
    async function send(){
        await page.waitForFunction(()=>!window.gameEngine.dialogueSystem.isCurrentlyTyping());
        await page.evaluate(async()=>{const e=window.gameEngine;e.dialogueSystem.typingSpeed=0;e.uiManager.chatInput.value='Let me explain what happened.';await e.freeTalkSystem.sendChatMessage(id=>e.sceneRenderer.getScene(id));});
    }
    await send();expect(requests).toHaveLength(1);
    expect(await page.evaluate(()=>window.gameEngine.stateManager.getAffinity('Seoyeon'))).toBe(13);
    await page.evaluate(value=>window.CupidStorage.setItem('cupid_save',value),oldSave);
    await page.reload();await ready(page);
    expect(await page.evaluate(()=>window.gameEngine.stateManager.getAffinity('Seoyeon'))).toBe(13);
    expect(await page.evaluate(()=>window.gameEngine.freeTalkSystem.freeTalkTurns)).toBe(1);
    await send();await send();
    expect(requests).toHaveLength(3);
    expect(await page.evaluate(()=>window.gameEngine.stateManager.getAffinity('Seoyeon'))).toBe(19);
    await page.reload();await ready(page);
    expect(await page.evaluate(()=>window.gameEngine.freeTalkSystem.freeTalkTurns)).toBe(3);
    expect(await page.evaluate(()=>window.gameEngine.stateManager.getAffinity('Seoyeon'))).toBe(19);
});
test('simultaneous choice executions and scene re-entry cannot repeat rewards', async ({page})=>{
    await mock(page,[]);await page.goto('/game-en.html');await ready(page);
    const result=await page.evaluate(async()=>{
        const e=window.gameEngine;e.dialogueSystem.typingSpeed=0;e.stateManager.stats.Seoyeon.affinity=0;
        SCENARIO[1].integrity_choice={name:'Test',text:'Choose',choices:[{stats:{Seoyeon:{affinity:7}},next:'integrity_after'}]};
        SCENARIO[1].integrity_after={name:'Test',text:'Done',stats:{Seoyeon:{affinity:2}},next:'integrity_choice'};
        await e.renderScene('integrity_choice');
        const choice=e.sceneRenderer.getScene('integrity_choice').choices[0];
        await Promise.all([e.executeChoice(choice),e.executeChoice(choice),e.executeChoice(choice)]);
        const first=e.stateManager.getAffinity('Seoyeon');
        await e.renderScene('integrity_after');
        return {first,repeated:e.stateManager.getAffinity('Seoyeon')};
    });
    expect(result).toEqual({first:9,repeated:9});
});
test('public admin query and direct gallery open cannot bypass unlock requirements',async({page})=>{
    await page.route('**/*',route=>{
        const url=new URL(route.request().url());
        if(url.hostname!=='cupid.test'||route.request().method()==='POST')return route.fulfill({json:{ok:true}});
        const file=path.join(root,url.pathname.replace(/^\//,''));
        if(!fs.existsSync(file))return route.fulfill({status:404,body:''});
        const mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.webp':'image/webp'}[path.extname(file)]||'application/octet-stream';
        return route.fulfill({body:fs.readFileSync(file),contentType:mime});
    });
    await page.goto('https://cupid.test/gallery-en.html?admin=1');
    await page.waitForFunction(()=>window.gallery?.freeTalk&&window.galleryProgressInstance);
    const result=await page.evaluate(()=>{
        const p=window.galleryProgressInstance,t=window.gallery.freeTalk;
        p.isAdmin=true;
        t.open('seyoun');
        return {admin:p.isAdmin,unlocked:p.isFreeTalkUnlocked('seyoun'),active:document.getElementById('gallery-freetalk-overlay').classList.contains('active')};
    });
    expect(result).toEqual({admin:false,unlocked:false,active:false});
});
