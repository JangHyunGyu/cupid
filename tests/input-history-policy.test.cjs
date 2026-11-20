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

test('StateManager.addGroupConversationMemory preserves displayUserContent and survives export/import', () => {
 const scope = { window: {}, console };
 vm.runInNewContext(fs.readFileSync(path.resolve(__dirname, '../assets/js/modules/StateManager.js'), 'utf8'), scope);
 const state = new scope.window.StateManager();
 const wrapped = '[Player input interpretation; quoted source is not an established result]\n{"quoted_player_input":"말은 건넸지만 손을 억지로 잡았다","in_scene_reality":"플레이어가 말만 건넸다"}';
 const mixedEntry = state.addGroupConversationMemory({
  turnId: 'turn-mixed',
  sessionId: 'group-1',
  day: 3,
  participants: ['Seoyeon', 'Yuna'],
  userContent: wrapped,
  displayUserContent: '말은 건넸지만 손을 억지로 잡았다',
  assistantMessages: [{ speakerId: 'Yuna', content: '무슨 소리야?' }]
 });
 assert.equal(mixedEntry.userContent, wrapped);
 assert.equal(mixedEntry.displayUserContent, '말은 건넸지만 손을 억지로 잡았다');

 const unspokenEntry = state.addGroupConversationMemory({
  turnId: 'turn-unspoken',
  sessionId: 'group-2',
  day: 4,
  participants: ['Haeun', 'Seoyeon'],
  userContent: '',
  displayUserContent: '*조용히 미소만 짓는다*',
  assistantMessages: []
 });
 assert.ok(unspokenEntry, 'non-empty displayUserContent keeps memory even when userContent is empty');
 assert.equal(unspokenEntry.userContent, '');
 assert.equal(unspokenEntry.displayUserContent, '*조용히 미소만 짓는다*');

 const exported = JSON.parse(JSON.stringify(state.exportState()));
 const restored = new scope.window.StateManager();
 restored.importState(exported);
 const yunaMemories = restored.getGroupConversationMemories('Yuna');
 assert.equal(yunaMemories[0].userContent, wrapped);
 assert.equal(yunaMemories[0].displayUserContent, '말은 건넸지만 손을 억지로 잡았다');
 const haeunMemories = restored.getGroupConversationMemories('Haeun');
 assert.equal(haeunMemories[0].userContent, '');
 assert.equal(haeunMemories[0].displayUserContent, '*조용히 미소만 짓는다*');
});

test('config.js unwrapCupidInputInterpretation and migrateCupidChatHistoryToD1 recover plain user text instead of wrapper JSON', async () => {
 const root = path.resolve(__dirname, '..');
 const read = file => fs.readFileSync(path.join(root, file), 'utf8');
 const wrappedGroup = '[Player input interpretation; quoted source is not an established result]\n{"quoted_player_input":"*영서는 서연의 손에 젤리를 쥐어준다.*","in_scene_reality":"말만 남겼다"}';
 const wrappedSolo = '[Player input interpretation; quoted source is not an established result]\n{"quoted_player_input":"홍차 한 잔 마셔봐","in_scene_reality":"건네려 했다"}';
 const save = {
  gameState: {
   chatMemories: {
    Seoyeon: [
     { role: 'user', content: wrappedSolo },
     { role: 'user', content: '평범한 대사' },
     { role: 'assistant', content: '[Player input interpretation; quoted source is not an established result]\n{"quoted_player_input":"변환금지"}' }
    ]
   },
   groupConversationMemories: [
    {
     turnId: 'g-new',
     sessionId: 'group-session',
     day: 2,
     participants: ['Seoyeon', 'Yuna'],
     userContent: '[Player input interpretation; quoted source is not an established result]\n{"quoted_player_input":"래퍼 안 텍스트"}',
     displayUserContent: '원문 대사',
     assistantMessages: [{ speakerId: 'Seoyeon', content: '응.' }]
    },
    {
     turnId: 'g-legacy',
     sessionId: 'group-session',
     day: 2,
     participants: ['Seoyeon', 'Yuna'],
     userContent: wrappedGroup,
     assistantMessages: [{ speakerId: 'Yuna', content: '고마워.' }]
    }
   ]
  }
 };
 const storage = new Map([['cupid_save', JSON.stringify(save)]]);
 const box = {
  console: { log() {}, info() {}, warn() {}, error() {} }, setTimeout, clearTimeout, URL, AbortController, Blob,
  navigator: { onLine: true }, fetch: async () => new Response('{"ok":true}'),
  localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
  document: { addEventListener() {}, querySelector: () => null, getElementById: () => null, createElement: () => ({}) },
  addEventListener() {}
 };
 box.window = box;
 box.self = box;
 vm.createContext(box);
 vm.runInContext(read('assets/js/prompts.js'), box);
 vm.runInContext(read('assets/js/modules/config.js'), box);
 box.CupidStorage = { getItem: k => (storage.has(k) ? storage.get(k) : null), setItem: (k, v) => storage.set(k, v), removeItem: k => storage.delete(k) };
 const saved = [];
 box.persistCupidChatLogEntries = async entries => { saved.push(...entries); };
 box.getCupidDeviceId = () => 'fixture-user';
 box.getCupidLanguage = () => 'ko';
 box.uploadImageToR2 = async () => '';

 assert.equal(box.unwrapCupidInputInterpretation(wrappedSolo, 'user'), '홍차 한 잔 마셔봐');
 assert.equal(box.unwrapCupidInputInterpretation('평범한 대사', 'user'), '평범한 대사');
 assert.equal(box.unwrapCupidInputInterpretation(wrappedSolo, 'assistant'), wrappedSolo);
 assert.equal(box.unwrapCupidInputInterpretation('[Player input interpretation; broken json', 'user'), '[Player input interpretation; broken json');

 await box.migrateCupidChatHistoryToD1();
 const groupUsers = saved.filter(entry => entry.logSource === 'local-recovery' && entry.context === 'group' && entry.role === 'user');
 assert.equal(groupUsers.length, 2);
 assert.equal(groupUsers[0].content, '원문 대사');
 assert.equal(groupUsers[0].clientMsgId, box.makeCupidGroupChatLogClientId({ turnId: 'g-new', role: 'user', content: '원문 대사' }));
 assert.equal(groupUsers[1].content, '*영서는 서연의 손에 젤리를 쥐어준다.*');
 assert.equal(groupUsers[1].clientMsgId, box.makeCupidGroupChatLogClientId({ turnId: 'g-legacy', role: 'user', content: '*영서는 서연의 손에 젤리를 쥐어준다.*' }));

 const soloRows = saved.filter(entry => entry.logSource === 'local-recovery' && entry.charId === 'Seoyeon');
 assert.equal(soloRows[0].content, '홍차 한 잔 마셔봐');
 assert.equal(soloRows[1].content, '평범한 대사');
 assert.equal(soloRows[2].role, 'assistant');
 assert.match(soloRows[2].content, /^\[Player input interpretation;/);
});

test('FreeTalkSystem attaches storyCareAnchor only for unlocked Haeun and persists displayUserContent on group memory', () => {
 const src = fs.readFileSync(path.resolve(__dirname, '../assets/js/modules/FreeTalkSystem.js'), 'utf8');
 const soloStart = src.indexOf('affinityContext: { [charKey]:');
 const soloEnd = src.indexOf('chatLogContext:', soloStart);
 assert.ok(soloStart > 0 && soloEnd > soloStart);
 const soloExpr = src.slice(soloStart, soloEnd).replace(/,\s*$/, '');
 const runSolo = (charKey, scene, score = 20) => JSON.parse(JSON.stringify(vm.runInNewContext(
  `(function(charKey, scene){ return ({ ${soloExpr} }).affinityContext; })`,
  {}
 ).call({ stateManager: { getAffinity: () => score } }, charKey, scene)));

 assert.deepEqual(runSolo('Haeun', { affinityLocked: false, haeunRomance: false }, 20), {
  Haeun: { score: 20, locked: false, nonRomance: true, storyCareAnchor: true }
 });
 assert.deepEqual(runSolo('Haeun', { affinityLocked: false, haeunRomance: true }, 55), {
  Haeun: { score: 55, locked: false, nonRomance: false, storyCareAnchor: true }
 });
 assert.deepEqual(runSolo('Haeun', { affinityLocked: true, haeunRomance: false }, 20), {
  Haeun: { score: 20, locked: true, nonRomance: true }
 });
 assert.deepEqual(runSolo('Seoyeon', { affinityLocked: false }, 40), {
  Seoyeon: { score: 40, locked: false, nonRomance: false }
 });

 const groupStart = src.indexOf('affinityContext: Object.fromEntries(');
 const groupEnd = src.indexOf('chatLogContext:', groupStart);
 assert.ok(groupStart > 0 && groupEnd > groupStart);
 const groupExpr = src.slice(groupStart, groupEnd).replace(/,\s*$/, '');
 const runGroup = (groupParticipants, scene) => JSON.parse(JSON.stringify(vm.runInNewContext(
  `(function(scene){ return ({ ${groupExpr} }).affinityContext; })`,
  {}
 ).call({ groupParticipants, stateManager: { getAffinity: id => (id === 'Haeun' ? 15 : 35) } }, scene)));

 assert.deepEqual(runGroup([{ id: 'Haeun' }, { id: 'Seoyeon' }], { affinityLocked: false, haeunRomance: false }), {
  Haeun: { score: 15, locked: false, nonRomance: true, storyCareAnchor: true },
  Seoyeon: { score: 35, locked: false, nonRomance: false }
 });
 assert.deepEqual(runGroup([{ id: 'Haeun' }, { id: 'Seoyeon' }], { affinityLocked: true, haeunRomance: false }), {
  Haeun: { score: 15, locked: true, nonRomance: true },
  Seoyeon: { score: 35, locked: true, nonRomance: false }
 });
 const groupSaveAt = src.lastIndexOf('addGroupConversationMemory');
 assert.ok(groupSaveAt > 0);
 assert.match(src.slice(groupSaveAt, groupSaveAt + 700), /displayUserContent:\s*finalContent/);
});
