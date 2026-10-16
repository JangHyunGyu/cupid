const {test,expect}=require('@playwright/test');

async function setup(page) {
    await page.route('**/*',r=>new URL(r.request().url()).hostname==='127.0.0.1'?r.continue():r.abort());
    await page.goto('/game.html');
    await page.waitForFunction(()=>window.gameEngine?.sceneRenderer&&!gameEngine._isRendering);
    await page.evaluate(async()=>{
        gameEngine.dialogueSystem.typingSpeed=0;
        Object.assign(SCENARIO[1],{
            qa_before:{background:'assets/images/background/school_hallway.png',character:null,text:'Before',next:'qa_cg'},
            qa_cg:{background:'assets/images/background/event_haeun_trust.png',character:null,text:'CG',next:'qa_same'},
            qa_same:{background:'assets/images/background/event_haeun_trust.png',character:null,text:'Same CG',next:'qa_after'},
            qa_after:{background:'assets/images/background/gym.png',character:null,text:'After',next:'qa_before'},
            qa_second:{background:'assets/images/background/event_haeun_reputation.png',character:null,text:'Second CG',next:'qa_after'},
            qa_instant:{background:'assets/images/background/event_haeun_reputation.png',cgTransition:false,character:null,text:'Hard cut',next:'qa_after'}
        });
        await gameEngine.renderScene('qa_before',{restoring:true});
    });
}

for(const [width,height]of [[1280,800],[1024,768],[768,1024],[375,812],[667,375]]){
    test(`CG fades and click protection at ${width}x${height}`,async({page},info)=>{
        await page.setViewportSize({width,height});await setup(page);
        await page.locator('#dialogue-box').dispatchEvent('click');
        await expect(page.locator('[data-cg-transition]')).toHaveAttribute('data-duration','2000');
        await page.waitForTimeout(450);
        const middle=await page.locator('[data-cg-transition]').evaluate(el=>Number(getComputedStyle(el).opacity));
        expect(middle).toBeGreaterThan(0);expect(middle).toBeLessThan(1);
        expect(await page.locator('#message').textContent()).not.toBe('CG');
        for(let i=0;i<10;i++)await page.locator('#dialogue-box').dispatchEvent('click');
        expect(await page.evaluate(()=>gameEngine.sceneRenderer.currentSceneId)).toBe('qa_cg');
        await page.screenshot({path:info.outputPath('enter-midpoint.png')});
        await page.waitForFunction(()=>!gameEngine._isRendering&&!gameEngine.dialogueSystem.isTyping&&!gameEngine.dialogueSystem.isAdvanceCoolingDown());
        await expect(page.locator('#message')).toHaveText('CG');
        await page.locator('#dialogue-box').dispatchEvent('click');
        await page.waitForFunction(()=>gameEngine.sceneRenderer.currentSceneId==='qa_same'&&!gameEngine._isRendering&&!gameEngine.dialogueSystem.isTyping&&!gameEngine.dialogueSystem.isAdvanceCoolingDown());
        await expect(page.locator('[data-cg-transition]')).toHaveCount(0);
        await page.locator('#dialogue-box').dispatchEvent('click');
        await expect(page.locator('[data-cg-transition]')).toHaveAttribute('data-duration','1000');
        for(let i=0;i<10;i++)await page.locator('#dialogue-box').dispatchEvent('click');
        expect(await page.evaluate(()=>gameEngine.sceneRenderer.currentSceneId)).toBe('qa_after');
        await page.waitForFunction(()=>!gameEngine._isRendering);
        await expect(page.locator('[data-cg-transition]')).toHaveCount(0);
        await expect(page.locator('#message')).toHaveText('After');
        expect(await page.locator('#dialogue-box').evaluate(el=>Number(getComputedStyle(el).opacity))).toBe(1);
        await page.screenshot({path:info.outputPath('exit-complete.png'),animations:'disabled'});
    });
}

test('CG replacement, interruption and explicit hard cuts clean up all transitions',async({page})=>{
    await setup(page);
    await page.evaluate(()=>gameEngine.renderScene('qa_cg',{restoring:true}));
    await page.evaluate(()=>{window.qaSecond=gameEngine.renderScene('qa_second',{restoring:true});});
    await expect(page.locator('[data-cg-transition]')).toHaveAttribute('data-duration','1000');
    await expect(page.locator('[data-cg-transition]')).toHaveAttribute('data-duration','2000');
    await page.evaluate(()=>window.qaSecond);
    await page.evaluate(()=>{void gameEngine.renderScene('qa_cg',{restoring:true});void gameEngine.renderScene('qa_after',{restoring:true});});
    await page.waitForFunction(()=>!gameEngine._isRendering);
    await page.waitForTimeout(2100);
    expect(await page.evaluate(()=>gameEngine.sceneRenderer.currentSceneId)).toBe('qa_after');
    await expect(page.locator('[data-cg-transition]')).toHaveCount(0);
    await expect(page.locator('#message')).toHaveText('After');
    await page.evaluate(()=>gameEngine.renderScene('qa_instant',{restoring:true}));
    await expect(page.locator('[data-cg-transition]')).toHaveCount(0);
});
