'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
for(const [name,file] of [['FreeTalkSystem','assets/js/modules/FreeTalkSystem.js'],['GalleryFreeTalk','assets/js/gallery-freetalk.js']]){
 const scope={window:{},console};
 vm.runInNewContext(fs.readFileSync(path.resolve(__dirname,'../assets/js/freetalk-core.js'),'utf8'),scope);
 vm.runInNewContext(fs.readFileSync(path.resolve(__dirname,'..',file),'utf8'),scope);
 const prototype=scope.window[name].prototype;
 for(const treatment of ['unspoken_control','mixed','ordinary','uncertain'])test(`Cupid ${name}/${treatment}: keep logs and project only the server-marked input`,()=>{
  const user={role:'user',content:'Original visible user text'},history=[{role:'system',content:'Canon'},user];
  const receiver=Object.assign(Object.create(prototype),{stateManager:{clearChatPromptEpoch(){}},HISTORY_WINDOW:20});
  const disposition={version:1,treatment,excludeCurrent:treatment==='unspoken_control',...(treatment==='mixed'?{content:'Accepted speech with nonfactual direction marked.'}:{})};
  const requestContext={history};receiver._applyInputHistoryDisposition(requestContext,{inputHistory:disposition});
  assert.equal(user.content,'Original visible user text');
  assert.equal(requestContext.aiUserContent,treatment==='unspoken_control'?'':disposition.content||user.content);
  history.push({role:'assistant',content:'Completed reply'},{role:'user',content:'Newest input'});
  const restored=JSON.parse(JSON.stringify(history)),projected=receiver._buildWindowedHistory(restored,'character');
  assert.equal(projected.some(row=>row.content==='Original visible user text'),!['unspoken_control','mixed'].includes(treatment));
  if(treatment==='mixed')assert.ok(projected.some(row=>row.content===disposition.content));
  assert.ok(projected.some(row=>row.content==='Newest input'));
  assert.equal(restored[1].content,'Original visible user text');
 });
}
