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

test('shared-server attribution correction survives the Cupid request and response path',async()=>{
 const calls=[];
 const entry={name:'Teacher',segments:[{type:'dialogue',text:'Thank you for helping.'}],affinity:0,affinityEvaluation:{status:'evaluated',source:'decision'}};
 const audit={status:'evaluated',evaluations:[{proposedDelta:-10,delta:0,negativeBasis:'other_actor',correction:'negative_not_attributed_to_user'}]};
 const result=await core.requestChatCompletion('https://api.example.test/chat',()=>({method:'POST',body:JSON.stringify({messages:[{role:'user',content:'Here is gauze to stop the bleeding.'}],responseSpeakers:[{id:'Teacher',name:'Teacher'}]})}),{
  fetchImpl:async(_url,init)=>{calls.push(JSON.parse(init.body));return Response.json({affinityDecision:audit,choices:[{message:{content:JSON.stringify({sceneMessages:[entry]})}}]});}
 });
 assert.equal(calls.length,1);
 assert.equal(calls[0].affinityDecision,true);
 const normalized=core.normalizeCupidResponsePayload(JSON.parse(result.choices[0].message.content));
 assert.equal(core.decisionAffinityValue(normalized),0,'use corrected score, never the proposed penalty');
 assert.equal(result.affinityDecision.evaluations[0].proposedDelta,-10,'retain cause audit separately');
});
