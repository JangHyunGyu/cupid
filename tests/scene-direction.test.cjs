'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const read=name=>fs.readFileSync(path.join(__dirname,'..',name),'utf8');
const {validateDirection}=require('../scripts/lib/scene-direction-contract.cjs');
test('scene direction validation accepts registered synthesis and rejects typos and invalid durations',()=>{
 assert.deepEqual(validateDirection({bgm:'none',bgmFadeOut:1.5,sfx:'synth:volleyball',ambient:'gym',framing:'close'}),[]);
 for(const data of [{sfx:'synth:not_registered'},{framing:'intimatte'},{characters:{left:{framing:'wrong'}}},{bgmFadeOut:-1},{bgmFadeOut:NaN},{ambient:'missing'},{staging:'unknown'}])assert.ok(validateDirection(data).length>0);
});
function classes(){const set=new Set();return{add:(...names)=>names.forEach(n=>set.add(n)),remove:(...names)=>names.forEach(n=>set.delete(n)),contains:n=>set.has(n),toggle(n,on){if(on)set.add(n);else set.delete(n);}};}
function visualHarness(){
 const layer={classList:classes()},bg={classList:classes()};
 const slots=Object.fromEntries(['left','center','right'].map(pos=>[pos,{classList:classes(),img:null,querySelector(){return this.img;},querySelectorAll(){return this.img?[this.img]:[];}}]));
 const ctx=vm.createContext({window:{},console,CHAR_NAME_MAP:{},KoreanProcessor:class{},document:{createElement:()=>({toDataURL:()=>''}),getElementById:()=>layer}});
 for(const name of ['SceneRenderer','DialogueSystem'])vm.runInContext(read(`assets/js/modules/${name}.js`),ctx);
 const ui={charSlots:slots,bgLayer:bg};
 const renderer=new ctx.window.SceneRenderer({}, {}, ui);
 const dialogue=new ctx.window.DialogueSystem({},ui);
 const image=prefix=>({src:`assets/images/characters/${prefix}_normal.png`,classList:classes()});
 return{layer,bg,slots,renderer,dialogue,image};
}

test('distance resets and per-slot framing overrides scene framing without leaving background blur',()=>{
 const h=visualHarness();h.slots.center.img=h.image('yuna');
 h.renderer.syncPresentation({framing:'intimate'});
 assert.equal(h.slots.center.img.classList.contains('char-frame-intimate'),true);
 assert.equal(h.bg.classList.contains('bg-depth-of-field'),true);
 h.renderer.syncPresentation({framing:'far',characters:{center:{framing:'close'}}});
 assert.equal(h.slots.center.img.classList.contains('char-frame-close'),true);
 assert.equal(h.bg.classList.contains('bg-depth-of-field'),false);
 h.renderer.syncPresentation({});
 assert.equal(h.slots.center.img.classList.contains('char-frame-normal'),true);
 assert.equal(h.slots.center.img.classList.contains('char-frame-close'),false);
 h.slots.center.img=null;h.renderer.syncPresentation({framing:'intimate'});
 assert.equal(h.layer.classList.contains('bg-depth-of-field'),false);
});

test('authored multi-character speech keeps focus after reveal and narration clears dimming',()=>{
 const h=visualHarness();
 for(const[pos,key]of [['left','seyoun'],['center','yuna'],['right','dain']])h.slots[pos].img=h.image(key);
 h.renderer.syncPresentation({});
 assert.equal(h.layer.classList.contains('multi-character-scene'),true);
 for(const name of ['서연','Seoyeon','ソヨン','书妍']){
  h.dialogue.updateTalkingAnimation(name,true);
  assert.equal(h.slots.left.classList.contains('char-focused'),true);
  assert.equal(h.slots.center.classList.contains('char-dimmed'),true);
  assert.equal(h.slots.right.classList.contains('char-dimmed'),true);
  h.dialogue.updateTalkingAnimation(name,false);
  assert.equal(h.slots.left.img.classList.contains('char-talking'),false);
  assert.equal(h.slots.left.classList.contains('char-focused'),true);
 }
 h.dialogue.updateTalkingAnimation('{name}',true);
 for(const slot of Object.values(h.slots))assert.equal(slot.classList.contains('char-dimmed'),false);
});

test('existing group free-talk presentation keeps ownership of its own focus rules',()=>{
 const h=visualHarness();h.slots.left.img=h.image('seyoun');h.slots.right.img=h.image('dain');
 h.layer.classList.add('group-freetalk-mode');
 h.dialogue.updateTalkingAnimation('서연',true);
 assert.equal(h.slots.left.classList.contains('char-focused'),false);
 assert.equal(h.slots.right.classList.contains('char-dimmed'),false);
});

test('speaker focus identifies protected blob images from their canonical source',()=>{
 const h=visualHarness();h.slots.left.img=h.image('seyoun');h.slots.right.img=h.image('dain');
 h.slots.left.img.dataset={rawSrc:h.slots.left.img.src};h.slots.left.img.src='blob:private-art';
 h.dialogue.updateTalkingAnimation('서연',true);
 assert.equal(h.slots.left.classList.contains('char-focused'),true);
 assert.equal(h.slots.left.img.classList.contains('char-talking'),true);
 assert.equal(h.slots.right.classList.contains('char-dimmed'),true);
});

function soundHarness(){
 const timers=[];const nodes=[];
 const context={state:'running',sampleRate:8000,currentTime:10,destination:{},
  createBuffer(_channels,length,rate){const data=new Float32Array(length);return{length,duration:length/rate,getChannelData:()=>data};},
  createGain(){const events=[];return{events,connect(){},disconnect(){},gain:{value:0.5,cancelScheduledValues(){},setValueAtTime(value,time){events.push(['set',value,time]);},linearRampToValueAtTime(value,time){events.push(['ramp',value,time]);}}};},
  createBufferSource(){const node={stops:[],connect(){},disconnect(){},start(){this.started=true;},stop(at){this.stops.push(at);}};nodes.push(node);return node;}
 };
 const ctx=vm.createContext({window:{CupidStorage:{getItem:()=>null}},console:{log(){},warn(){},error(){}},setTimeout:fn=>{timers.push(fn);return timers.length;},clearTimeout(){}});
 vm.runInContext(read('assets/js/sound.js'),ctx);
 const sound=ctx.window.soundManager;sound.audioContext=context;sound._unlocked=true;
 return{sound,context,nodes,timers};
}

test('soundscape presets generate cached, finite, non-clipping audio and unknown optional effects are silent',()=>{
 const h=soundHarness();
 for(const name of ['page_turn','door','notification','volleyball','heartbeat','library','gym','rain']){
  const buffer=h.sound._createSoundscapeBuffer(name);const data=buffer.getChannelData(0);
  assert.ok(data.length>0);assert.ok(data.some(value=>value!==0));
  assert.ok(data.every(value=>Number.isFinite(value)&&Math.abs(value)<=1));
  assert.equal(h.sound._createSoundscapeBuffer(name),buffer);
 }
 assert.equal(h.sound._createSoundscapeBuffer('missing'),null);
});

test('ambience is independent, does not restart in the same room and follows mute and SFX volume',()=>{
 const h=soundHarness();h.sound.setAmbience('library');
 const source=h.sound.ambientSource,gain=h.sound.ambientGain;
 assert.equal(source.loop,true);assert.equal(source.started,true);
 h.sound.setAmbience('library');assert.equal(h.sound.ambientSource,source);
 h.sound.setMuted(true);assert.equal(gain.events.at(-1)[1],0);
 h.sound.setSfxVolume(0.8);h.sound.setMuted(false);assert.equal(gain.events.at(-1)[1],0.12);
 h.sound.setAmbience('gym');const next=h.sound.ambientSource;
 assert.notEqual(next,source);assert.deepEqual(source.stops,[10.2]);source.onended();
 assert.equal(h.sound.ambientSource,next);
 h.sound.setAmbience(null);assert.equal(h.sound.ambientSource,null);
});

test('BGM fade duration is exact and old cleanup cannot stop newly selected music',()=>{
 const h=soundHarness();const source=h.context.createBufferSource(),gain=h.context.createGain();
 h.sound.bgmSourceNode=source;h.sound.bgmGain=gain;h.sound.currentBgmPath='old.mp3';
 h.sound.stopBgm(1.5);
 assert.deepEqual(gain.events.at(-1),['ramp',0,11.5]);
 assert.equal(h.sound.currentBgmPath,'');
 const next=h.context.createBufferSource();h.sound.bgmSourceNode=next;
 h.timers.forEach(fn=>fn());assert.equal(next.stops.length,0);assert.equal(source.stops.length,1);
 h.sound.bgmGain=h.context.createGain();h.sound.currentBgmPath='new.mp3';h.sound.stopBgm(0);
 assert.equal(next.stops.length,1);
});

test('missing optional SFX does not persist an application error',async()=>{
 const h=soundHarness();let reports=0;
 h.sound._fetchAudioArrayBuffer=async()=>{throw new Error('HTTP 404');};
 h.sound._reportSoundLoadError=()=>{reports++;};
 assert.equal(await h.sound._loadBuffer('assets/audio/sfx/missing.wav'),null);
 assert.equal(reports,0);
});
