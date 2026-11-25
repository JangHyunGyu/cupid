'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
function runtime(cookie='',search='?gate=1&lang=ja#record') {
  const env={window:{},document:{cookie},location:{href:`https://cupid.archerlab.dev/${search}`,hostname:'cupid.archerlab.dev',protocol:'https:'},URL,Date,
    history:{state:{entry:1},replaceState(state,title,url){this.url=url;env.location.href='https://cupid.archerlab.dev'+url;}}};
  vm.createContext(env);vm.runInContext(fs.readFileSync(path.join(__dirname,'../assets/js/cross-world.js'),'utf8'),env);return env;
}
test('a fresh handoff carries a bounded name once and preserves unrelated URL state',()=>{
  const record={target:'cupid',name:'<지민>\n',at:Date.now()};
  const env=runtime('archer_crossing_v1='+encodeURIComponent(JSON.stringify(record)));
  assert.equal(env.window.CrossWorld.takeArrival('cupid').name,'지민');
  assert.equal(env.history.url,'/?lang=ja#record');
  assert.match(env.document.cookie,/Max-Age=0/);
  assert.equal(env.window.CrossWorld.takeArrival('cupid'),null);
});
test('expired, malformed, future and wrong-destination cookies never supply a name',()=>{
  for(const data of ['%broken',JSON.stringify({target:'cupid',name:'old',at:Date.now()-600001}),JSON.stringify({target:'cupid',name:'future',at:Date.now()+60000}),JSON.stringify({target:'nevergrad',name:'wrong',at:Date.now()})]){
    const env=runtime('archer_crossing_v1='+encodeURIComponent(data));
    assert.equal(env.window.CrossWorld.takeArrival('cupid').name,'');
  }
});
test('blocked cookies still permit arrival and non-arrival visits do not touch storage',()=>{
  const env=runtime();Object.defineProperty(env.document,'cookie',{get(){throw Error('blocked')},set(){throw Error('blocked')}});
  assert.equal(env.window.CrossWorld.takeArrival('cupid').name,'');
  const regular=runtime('untouched','?lang=ko');assert.equal(regular.window.CrossWorld.takeArrival('cupid'),null);assert.equal(regular.document.cookie,'untouched');
});
test('every explicit visit gets an arrival without a permanent session suppression flag',()=>{
  const env=runtime('', '?from=riin');assert.ok(env.window.CrossWorld.takeArrival('nevergrad'));
  env.location.href='https://nevergrad.archerlab.dev/?from=riin';assert.ok(env.window.CrossWorld.takeArrival('nevergrad'));
});

test('Cupid completion cookies reach sibling games and never claim a lookalike domain',()=>{
  for(const host of ['cupid.archerlab.dev','archerlab.dev','notarcherlab.dev','archerlab.dev.example.org','localhost']) {
    const cookies=[];
    const env={window:{location:{hostname:host,protocol:'https:'},document:{set cookie(value){cookies.push(value)}},localStorage:{getItem(){return null},setItem(){}}}};
    vm.createContext(env);vm.runInContext(fs.readFileSync(path.join(__dirname,'../assets/js/storage-adapter.js'),'utf8'),env);
    env.window.CupidStorage.setItem('cupid_cycle_01','complete');
    assert.equal(cookies.length,1);
    assert.equal(cookies[0].includes('Domain=.archerlab.dev'),host==='cupid.archerlab.dev'||host==='archerlab.dev');
    assert.match(cookies[0],/SameSite=Lax.*Secure/);
  }
});

test('consecutive lab dialogue keeps one reveal and never filters the dialogue container',()=>{
  const nodes = new Map();
  const node = () => ({classList:{values:new Set(),add(...v){v.forEach(x=>this.values.add(x));},remove(...v){v.forEach(x=>this.values.delete(x));}}});
  for (const id of ['background-layer','game-container']) nodes.set(id,node());
  const env = {window:{matchMedia:()=>({matches:false})},document:{getElementById:id=>nodes.get(id),createElement:()=>({}),head:{appendChild(el){nodes.set(el.id,el);}}}};
  vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../assets/js/modules/GameEngine.js'),'utf8'),env);
  const engine = Object.create(env.window.GameEngine.prototype);
  let sounds=0; engine._crackleAndBuzz=()=>sounds++;
  engine._applyLabGlitch({labGlitch:'lab-flicker'});
  engine._applyLabGlitch({labGlitch:'lab-dark'});
  const layer=nodes.get('background-layer');
  let restarts=0; const originalAdd=layer.classList.add.bind(layer.classList);
  layer.classList.add=(...args)=>{restarts++;originalAdd(...args);};
  engine._applyLabGlitch({labGlitch:'lab-dark'});
  assert.equal(restarts,0); assert.equal(sounds,1);
  assert.equal(nodes.get('game-container').classList.values.size,0);
  engine._applyLabGlitch({}); assert.equal(layer.classList.values.size,0);
});

function engineWithTimers() {
  const pending = new Map();
  let seq = 1;
  const env = {
    window: {},
    setTimeout(fn, ms) { const id = seq++; pending.set(id, { fn, ms: Number(ms) || 0 }); return id; },
    clearTimeout(id) { pending.delete(id); }
  };
  vm.createContext(env);
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../assets/js/modules/GameEngine.js'), 'utf8'), env);
  const engine = Object.create(env.window.GameEngine.prototype);
  engine.sceneRenderer = { currentSceneId: 'ending_cg' };
  return {
    engine,
    pending,
    fire(ms) {
      for (const [id, item] of [...pending.entries()]) {
        item.ms -= ms;
        if (item.ms <= 0) { pending.delete(id); item.fn(); }
      }
    }
  };
}

test('an ending illustration keeps the full four-second lock and a stale timer cannot open the next scene', () => {
  const { engine, pending, fire } = engineWithTimers();
  engine._armCgLock('ending_cg', 900);
  engine._armCgLock('ending_cg', 4000);
  assert.equal(pending.size, 1);
  fire(900);
  assert.equal(engine._cgLocked, true);
  fire(3100);
  assert.equal(engine._cgLocked, false);

  engine.sceneRenderer.currentSceneId = 'nurse_perfect_pills_1';
  engine._armCgLock('nurse_perfect_pills_1', 1800);
  engine.sceneRenderer.currentSceneId = 'after';
  fire(1800);
  assert.equal(engine._cgLocked, true);
  engine._clearCgLock();
  assert.equal(engine._cgLocked, false);
  fire(5000);
  assert.equal(engine._cgLocked, false);
  assert.equal(pending.size, 0);
});

test('a gate arrival still hitches the school gate after the query is removed', () => {
  const nodes = new Map();
  const node = () => ({ classList: { values: new Set(), add(...v) { v.forEach(x => this.values.add(x)); }, remove(...v) { v.forEach(x => this.values.delete(x)); } }, dataset: {} });
  nodes.set('background-layer', node());
  const env = {
    window: { __cupidArrivedFromGate: true, matchMedia: () => ({ matches: false }) },
    document: { getElementById: id => nodes.get(id) || null, createElement: () => ({}), head: { appendChild() {} } },
    location: { search: '' },
    setTimeout, clearTimeout
  };
  vm.createContext(env);
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../assets/js/modules/GameEngine.js'), 'utf8'), env);
  const engine = Object.create(env.window.GameEngine.prototype);
  let sounds = 0;
  engine._crackleAndBuzz = () => sounds++;
  engine._releaseGateVeil = () => { engine.released = true; };
  engine._applyCrossHitch('start');
  assert.equal(env.window.__cupidArrivedFromGate, false);
  assert.equal(engine.released, true);
  assert.equal(sounds, 1);
  assert.ok(nodes.get('background-layer').classList.values.has('lab-flicker'));
  engine._applyCrossHitch('start');
  assert.equal(sounds, 1);
});

test('the arrival overlay arms the gate hitch only for a new game', () => {
  const loader = fs.readFileSync(path.join(__dirname, '../assets/js/loaders/game-loader.js'), 'utf8');
  assert.match(loader, /onNew:\s*function \(\) \{\s*window\.__cupidArrivedFromGate = true;/);
  assert.match(loader, /onContinue:\s*function \(\) \{\s*window\.__cupidArrivedFromGate = false;/);
  assert.match(loader, /onTitle:\s*function \(\) \{\s*window\.__cupidArrivedFromGate = false;/);
  assert.equal(loader.includes('?.'), false);
});

test('takeArrival arms a Back-button guard via pushState and popstate', () => {
  const pushed = [];
  const listeners = new Map();
  const env = {
    window: { addEventListener(evt, fn) { listeners.set(evt, fn); }, matchMedia: () => ({ matches: false }) },
    document: { cookie: '' },
    location: { href: 'https://cupid.archerlab.dev/?gate=1', pathname: '/', search: '', hash: '', hostname: 'cupid.archerlab.dev', protocol: 'https:' },
    URL, Date,
    history: {
      state: { entry: 1 },
      replaceState(s, t, url) { this.replaced = url; },
      pushState(s, t, url) { pushed.push({ s, url }); }
    }
  };
  env.window.addEventListener = (evt, fn) => listeners.set(evt, fn);
  vm.createContext(env);
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../assets/js/cross-world.js'), 'utf8'), env);
  assert.ok(env.window.CrossWorld.takeArrival('cupid'));
  assert.equal(pushed.length, 1);
  assert.equal(pushed[0].s.crossWorldGuard, 'cupid');
  assert.equal(typeof listeners.get('popstate'), 'function');
  listeners.get('popstate')();
  assert.equal(pushed.length, 2);
});

test('nurse black pill triggers immediate 3-CG crossing and zh maps to /zh/', () => {
  const pillSceneEnv = {
    SCENARIO: { 5: {} }
  };
  const nightSrc = fs.readFileSync(path.join(__dirname, '../assets/js/scenario/day5_4_night.js'), 'utf8');
  vm.runInNewContext(nightSrc, pillSceneEnv);
  const pillChoice = pillSceneEnv.SCENARIO[5].nurse_perfect_pills_2.choices[1];
  assert.equal(pillChoice.next, 'nurse_perfect_pills_black_1');
  assert.equal(pillChoice.redirectNevergrad, true);
  assert.equal(pillChoice.immediateCross, true);

  let departOpts = null;
  const flags = new Set();
  const stored = {};
  const telemetry = [];
  let bgmStopped = 0;
  let savedCount = 0;
  const engineSrc = fs.readFileSync(path.join(__dirname, '../assets/js/modules/GameEngine.js'), 'utf8');
  const env = {
    window: {
      GAME_LANG: 'zh',
      CrossWorld: { departSequence: o => { departOpts = o; }, show: () => {} },
      CupidStorage: { setItem: (k, v) => { stored[k] = v; } },
      CupidRouteTelemetry: { crossing: (...args) => telemetry.push(args) },
      soundManager: { stopBgm: () => { bgmStopped += 1; } },
      matchMedia: () => ({ matches: false })
    },
    document: { documentElement: { lang: 'zh' } },
    console
  };
  vm.runInNewContext(engineSrc, env);
  const engine = Object.create(env.window.GameEngine.prototype);
  engine.stateManager = { playerName: 'Tester', setFlag: f => flags.add(f) };
  engine.sceneRenderer = { currentSceneId: 'nurse_perfect_pills_2' };
  engine.saveManager = { storageKey: 'cupid_save' };
  engine.saveGame = () => { savedCount += 1; };
  engine._crackleAndBuzz = () => {};
  engine._redirectToNevergrad({ immediate: true, sourceSceneId: 'nurse_perfect_pills_2' });

  assert.ok(departOpts);
  assert.equal(departOpts.url, 'https://nevergrad.archerlab.dev/zh/?from=riin');
  assert.equal(departOpts.frames.length, 3);
  assert.match(departOpts.frames[1].image, /cross_to_nevergrad\.webp$/);
  assert.equal(departOpts.save(), true);
  assert.equal(savedCount, 1);
  assert.ok(flags.has('crossed_to_nevergrad'));
  assert.equal(engine.sceneRenderer.currentSceneId, 'hidden_perfect_nurse_ending_title');
  assert.equal(stored.cupid_cycle_01, 'complete');
  departOpts.onLeave();
  assert.equal(bgmStopped, 1);
  assert.equal(telemetry[0][0], 'departed');
  assert.equal(telemetry[0][2], 'nurse_perfect_pills_2');

  const cwSrc = fs.readFileSync(path.join(__dirname, '../assets/js/cross-world.js'), 'utf8');
  assert.equal(cwSrc.includes('?.'), false);
  const siblingCw = path.resolve(__dirname, '../../nevergrad/assets/js/cross-world.js');
  if (fs.existsSync(siblingCw)) {
    assert.equal(cwSrc, fs.readFileSync(siblingCw, 'utf8'));
  }
});
