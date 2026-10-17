'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const source=fs.readFileSync(require.resolve('../assets/js/modules/GameEngine.js'),'utf8');
const start=source.indexOf('    async handleNameConfirm() {'),end=source.indexOf('\n    }',start)+6;

test('every language rejects special characters before saving a protagonist name or changing scenes',async()=>{
 for(const lang of ['ko','en','es','ja','fr','de','pt','zh'])for(const name of ['Alex!','지원♡','a\u200bb','王·明','ミナ・ト']){
  let warnings=0,saved=0,moved=0;
  const context={window:{GAME_LANG:lang},document:{documentElement:{lang}}};
  vm.runInNewContext('globalThis.confirm=({'+source.slice(start,end)+'}).handleNameConfirm;',context);
  await context.confirm.call({uiManager:{playerNameInput:{value:name,focus(){}},async showModal(){warnings++;}},stateManager:{setPlayerName(){saved++;}},sceneRenderer:{getScene(){moved++;}}});
  assert.equal(warnings,1);assert.equal(saved,0);assert.equal(moved,0);
 }
});
