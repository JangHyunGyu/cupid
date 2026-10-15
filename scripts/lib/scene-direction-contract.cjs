'use strict';
const fs=require('node:fs');
const path=require('node:path');
const source=fs.readFileSync(path.resolve(__dirname,'../../assets/js/sound.js'),'utf8');
const registry=source.match(/const SOUND_SCAPE_PRESETS = Object\.freeze\((\{[^;]+\})\);/);
if(!registry)throw new Error('Missing runtime soundscape registry');
const soundscapes=JSON.parse(registry[1]);
function validateDirection(scene){
 const errors=[];
 const frames=new Set(['far','normal','close','intimate']);
 if(scene.framing!==undefined&&!frames.has(scene.framing))errors.push('unsupported framing: '+scene.framing);
 for(const[pos,actor]of Object.entries(scene.characters||{}))if(actor&&typeof actor==='object'&&actor.framing!==undefined&&!frames.has(actor.framing))errors.push('unsupported '+pos+' framing: '+actor.framing);
 if(scene.staging!==undefined&&scene.staging!=='counteroffer')errors.push('unsupported staging: '+scene.staging);
 if(scene.ambient!==undefined&&scene.ambient!==null&&!['library','gym','rain','none'].includes(scene.ambient))errors.push('unsupported ambience: '+scene.ambient);
 if(scene.bgmFadeOut!==undefined&&(!Number.isFinite(scene.bgmFadeOut)||scene.bgmFadeOut<0||scene.bgmFadeOut>30))errors.push('BGM fade must be between 0 and 30 seconds');
 if(typeof scene.sfx==='string'&&scene.sfx.startsWith('synth:')&&!Object.prototype.hasOwnProperty.call(soundscapes,scene.sfx.slice(6)))errors.push('unknown synthesized effect: '+scene.sfx);
 return errors;
}
module.exports={soundscapes,validateDirection};
