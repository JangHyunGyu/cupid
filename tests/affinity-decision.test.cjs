const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const window={};vm.runInNewContext(fs.readFileSync(require.resolve('../assets/js/freetalk-core.js'),'utf8'),{window,console,setTimeout,clearTimeout,TextDecoder,TextEncoder,AbortController,Response,Request,Headers,fetch,URL});
const core=window.CupidFreeTalkCore;
test('Cupid accepts every integer from -50 to +3 only from a completed decision',()=>{
 for(let delta=-50;delta<=3;delta++)assert.equal(core.decisionAffinityValue({affinity:delta,affinityEvaluation:{status:'evaluated'}}),delta);
 for(const delta of [-51,4,5,1.5,'-17',null])assert.equal(core.decisionAffinityValue({affinity:delta,affinityEvaluation:{status:'evaluated'}}),null);
 for(const status of ['failed','not_applicable','pending'])assert.equal(core.decisionAffinityValue({affinity:0,affinityEvaluation:{status}}),null);
 assert.equal(core.decisionAffinityValue({affinity:-17}),null);
});
test('main, group and gallery parsers preserve authoritative results and skip missing evaluation',()=>{
 const main=fs.readFileSync(require.resolve('../assets/js/modules/FreeTalkSystem.js'),'utf8');
 const gallery=fs.readFileSync(require.resolve('../assets/js/gallery-freetalk.js'),'utf8');
 assert.equal((main.match(/decisionAffinityValue\(/g)||[]).length,3);
 assert.equal((gallery.match(/decisionAffinityValue\(/g)||[]).length,2);
 assert.match(main, /if \(!Number\.isInteger\(change\)\) return null/);
 assert.match(gallery, /affinityChange: decisionEvaluated \? turnAffinity : affinityChange/);
 const normalized=core.normalizeCupidResponsePayload({sceneMessages:[{name:'Teacher',segments:[{type:'dialogue',text:'Stop.'}],affinity:-17,affinityEvaluation:{status:'evaluated'}}]});
 assert.equal(core.decisionAffinityValue(normalized),-17);
});
