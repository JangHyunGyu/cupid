const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const source=fs.readFileSync(path.join(__dirname,'../assets/js/prompts.js'),'utf8');
function runtime(values=new Map()) {const window={localStorage:{getItem:k=>values.get(k),setItem:(k,v)=>values.set(k,v)}};const sandbox={window,console};vm.runInNewContext(source,sandbox);return window;}
test('all registered variant sets keep one image per response, exhaust each cycle, and survive reload',()=>{
 const catalog=runtime().CHARACTER_EXPRESSION_VARIANTS;
 for(const speaker of ['Seoyeon','Yuna','Dain','Teacher','Nurse','Haeun','Minsu'])for(const [expression,paths]of Object.entries(catalog[speaker])){
  const storage=new Map();let api=runtime(storage),last='';
  for(let cycle=0;cycle<3;cycle++){
   const selected=[];
   for(let i=0;i<paths.length;i++){
    const context={scope:'story:ko:scene',turn:`${cycle}:${i}`};
    const pick=()=>api.pickCharacterExpressionVariant(speaker,expression,paths[0],()=>.37,context);
    const asset=pick();assert.equal(pick(),asset);assert.notEqual(asset,last);selected.push(asset);
    api=runtime(storage);assert.equal(pick(),asset,'reload retains the active response');last=asset;
   }
   assert.deepEqual(new Set(selected),new Set(paths));
  }
  assert.equal(api.pickCharacterExpressionVariant(speaker,expression,paths[0],()=>.37,{scope:'story:ko:scene',reuse:true}),last);
 }
});
test('speaker aliases share a bag while scenes and languages keep independent bags',()=>{
 const api=runtime(),paths=api.CHARACTER_EXPRESSION_VARIANTS.Seoyeon.flushed;
 const pick=(name,scope,turn)=>api.pickCharacterExpressionVariant(name,'flushed',paths[0],()=>.37,{scope,turn});
 const first=pick('Seoyeon','one','a');assert.equal(pick('seyoun','one','a'),first);
 assert.notEqual(pick('seoyeon','one','b'),first);
 assert.equal(pick('Seoyeon','two','a'),first);
});
test('denied storage and newly registered assets preserve a valid bounded shuffle',()=>{
 const api=runtime();api.localStorage={getItem(){throw Error('denied')},setItem(){throw Error('denied')}};
 const original=api.CHARACTER_EXPRESSION_VARIANTS.Seoyeon.flushed;
 const pick=turn=>api.pickCharacterExpressionVariant('Seoyeon','flushed',original[0],()=>.37,{scope:'one',turn});
 const before=pick('old');assert.ok(original.includes(before));
 const updated=[...original,'assets/images/characters/seyoun_flushed_07.png'];
 api.CHARACTER_EXPRESSION_VARIANTS={...api.CHARACTER_EXPRESSION_VARIANTS,Seoyeon:{flushed:updated}};
 const selected=updated.map((_,i)=>pick('new-'+i));assert.deepEqual(new Set(selected),new Set(updated));
});

test('main, group and gallery rendering keep the selected image for one response and gallery restore',()=>{
 const img={dataset:{},src:''},slot={querySelector:()=>img},message={innerHTML:''};
 const window={GAME_LANG:'ko',localStorage:{getItem:()=>null,setItem(){}},CupidMedia:{loadImageWithMediaFallback:(node,path)=>{node.src=path;},unlockExpression(){}}};
 const sandbox={window,console,document:{getElementById:id=>id==='message'?message:img}};vm.createContext(sandbox);
 for(const file of ['freetalk-core.js','prompts.js','modules/FreeTalkSystem.js','gallery-freetalk.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'../assets/js',file),'utf8'),sandbox);
 const main=Object.create(window.FreeTalkSystem.prototype);Object.assign(main,{currentSceneId:'scene',_activeChatTurnId:'one',charNameMap:{Seoyeon:'Seoyeon'},uiManager:{charSlots:{center:slot}},_loadCupidProtectedImage:(node,path)=>{node.src=path;}});
 main.applyExpression('flushed',{name:'Seoyeon'});const first=img.src;main.applyExpression('flushed',{name:'Seoyeon'});assert.equal(img.src,first);
 main._activeChatTurnId='two';main.applyExpression('flushed',{name:'Seoyeon'});assert.notEqual(img.src,first);
 slot.dataset={groupCharId:'Seoyeon'};main._applyGroupExpression('flushed','Seoyeon');const group=img.src;main._applyGroupExpression('flushed','Seoyeon');assert.equal(img.src,group);
 const gallery=Object.create(window.GalleryFreeTalk.prototype);Object.assign(gallery,{lang:'ko',currentCharId:'seyoun',_activeChatTurnId:'gallery-one',CHAR_EXPRESSIONS:{seyoun:['normal','flushed']}});
 gallery._updateExpression('flushed');const saved=img.src;gallery._updateExpression('flushed');assert.equal(img.src,saved);
 gallery.chatHistory=[{role:'assistant',content:'Saved reply.',expression:'flushed',expressionTurn:'gallery-one'}];gallery._activeChatTurnId=null;
 gallery._parseResponse=()=>({text:'Saved reply.'});gallery._formatAction=text=>text;gallery._showLastAssistantMessage();assert.equal(img.src,saved);
});
