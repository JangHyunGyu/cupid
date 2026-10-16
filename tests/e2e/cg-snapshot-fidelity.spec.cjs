'use strict';
const {test,expect}=require('@playwright/test');

for(const [width,height]of [[1440,1000],[390,844],[667,375]]){
    test(`CG snapshot retains legacy computed styles at ${width}x${height}`,async({page})=>{
        await page.setViewportSize({width,height});
        await page.route('**/*',r=>new URL(r.request().url()).hostname==='127.0.0.1'?r.continue():r.abort());
        await page.goto('/game.html');
        await page.waitForFunction(()=>!!window.gameEngine?.sceneRenderer);
        const result=await page.evaluate(async()=>{
            gameEngine.dialogueSystem.typingSpeed=0;
            await gameEngine.renderScene('classroom_2_b',{restoring:true});
            document.getAnimations().forEach(a=>a.pause());
            const transition=gameEngine.sceneRenderer.cgTransition;
            const legacy=source=>{
                const clone=source.cloneNode(true),originals=[source,...source.querySelectorAll('*')],copies=[clone,...clone.querySelectorAll('*')];
                originals.forEach((element,i)=>{const s=getComputedStyle(element);copies[i].removeAttribute('id');for(const p of s)copies[i].style.setProperty(p,s.getPropertyValue(p));Object.assign(copies[i].style,{animation:'none',transition:'none',pointerEvents:'none'});});
                return clone;
            };
            const differences=[];
            const compare=()=>{
                const properties=transition._snapshotProperties();
                for(const source of transition.layers){
                    const old=legacy(source),updated=transition._snapshot(source,properties),host=document.createElement('div');
                    Object.assign(host.style,{position:'absolute',inset:'0',opacity:'0',pointerEvents:'none'});document.body.append(host);host.append(old);
                    const previous=[old,...old.querySelectorAll('*')].map(n=>{const c=getComputedStyle(n);return Object.fromEntries(Array.from(c,p=>[p,c.getPropertyValue(p)]));});
                    old.remove();host.append(updated);
                    [updated,...updated.querySelectorAll('*')].forEach((n,i)=>{const c=getComputedStyle(n);for(const p of Object.keys(previous[i]))if(previous[i][p]!==c.getPropertyValue(p))differences.push({p,before:previous[i][p],after:c.getPropertyValue(p)});});
                    host.remove();
                }
            };
            compare();
            document.getElementById('background-layer').classList.add('night');compare();
            document.getElementById('background-layer').classList.remove('night');
            const style=document.createElement('style');style.textContent='#character-layer{--snapshot-test:0.6;opacity:var(--snapshot-test);clip-path:inset(1px)}';document.head.append(style);compare();style.remove();
            const animation=transition.layers[0].animate([{clipPath:'circle(25%)'},{clipPath:'circle(45%)'}],{duration:1000,fill:'both'});animation.pause();animation.currentTime=500;compare();animation.cancel();
            const selected=transition._snapshotProperties().size,full=getComputedStyle(transition.layers[0]).length;
            Object.defineProperty(document,'styleSheets',{configurable:true,value:[{get cssRules(){throw new DOMException('Cross-origin sheet','SecurityError');}}]});
            const crossOriginFallback=transition._snapshotProperties()===null;compare();delete document.styleSheets;
            style.textContent='.unused-reset{all:initial}';document.head.append(style);const resetFallback=transition._snapshotProperties()===null;compare();style.remove();
            return {differences,selected,full,crossOriginFallback,resetFallback};
        });
        expect(result.differences).toEqual([]);
        expect(result.selected).toBeLessThan(result.full);
        expect(result.crossOriginFallback).toBe(true);
        expect(result.resetFallback).toBe(true);
    });
}
