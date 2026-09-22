const assert = require('node:assert/strict');
const { test } = require('node:test');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const code = fs.readFileSync(path.join(__dirname, '../assets/js/immersive.js'), 'utf8');

test('disabled immersive helper never enters fullscreen or moves the existing layout', async () => {
  for (const height of [375, 667, 800, 844]) {
    let calls = 0;
    const style = { transform: '', setProperty() { calls++; } };
    const window = {
      innerHeight: height,
      document: { documentElement: { style, requestFullscreen() { calls++; } },
        addEventListener() { calls++; }, exitFullscreen() { calls++; } },
      addEventListener() { calls++; },
      navigator: { standalone: true, virtualKeyboard: { boundingRect: { height: 320 } } },
      visualViewport: { height: height - 320 }
    };
    vm.runInNewContext(code, { window });
    const api = window.ArcherImmersive;
    for (const name of ['enter', 'autoEnter', 'exit', 'toggle']) assert.equal(await api[name](), false);
    for (const name of ['isFullscreen', 'isStandalone', 'supported']) assert.equal(api[name](), false);
    assert.equal(api.keyboardOverlap(), 0);
    assert.equal(api.keyboardOverlapFrom({ editing: true, innerHeight: height, vvHeight: height - 320, vkHeight: 320 }), 0);
    assert.equal(calls, 0);
    assert.equal(style.transform, '');
    assert.ok(Object.isFrozen(api));
  }
});

test('disabled helper remains safe without browser APIs and preserves an existing API on repeat loading', () => {
  const window = {};
  vm.runInNewContext(code, { window });
  const api = window.ArcherImmersive;
  vm.runInNewContext(code, { window });
  assert.equal(window.ArcherImmersive, api);
  const existing = { ArcherImmersive: { marker: true } };
  vm.runInNewContext(code, { window: existing });
  assert.equal(existing.ArcherImmersive.marker, true);
});

test('every localized game shell has a local immersive helper and an unrestricted app manifest', () => {
  const repo = path.resolve(__dirname, fs.existsSync(path.join(__dirname, '../../config/games.json')) ? '../..' : '..');
  let entries;
  if (fs.existsSync(path.join(repo, 'config/games.json'))) {
    const games = JSON.parse(fs.readFileSync(path.join(repo, 'config/games.json'), 'utf8')).games;
    entries = games.flatMap(game => fs.readdirSync(path.join(repo, game.id)).filter(name => /^index(?:-[a-z]+)?\.html$/.test(name)).map(name => `${game.id}/${name}`));
  } else if (fs.existsSync(path.join(repo, 'game.html'))) {
    entries = fs.readdirSync(repo).filter(name => /^(?:index|game|gallery)(?:-[a-z]+)?\.html$/.test(name));
  } else {
    entries = ['index.html', ...['en','ja','es','fr','de','pt'].map(lang => `${lang}/index.html`)];
  }
  for (const entry of entries) {
    let html = fs.readFileSync(path.join(repo, entry), 'utf8');
    const gzipPayload = html.match(/var b64 = "([A-Za-z0-9+/=]+)"/);
    if (gzipPayload) html = require('zlib').gunzipSync(Buffer.from(gzipPayload[1], 'base64')).toString('utf8');
    assert.match(html, /<script[^>]+src="[^"]*immersive\.js\?v=/, entry);
    assert.match(html, /name="apple-mobile-web-app-capable" content="yes"/, entry);
    assert.doesNotMatch(html, /<a\b(?=[^>]*href="https:\/\/archerlab\.dev\/?")(?=[^>]*target="_blank")[^>]*>/, entry);
    const ref = html.match(/rel="manifest" href="([^"]+)"/)[1];
    const manifestPath = ref.startsWith('/') ? path.join(repo, ref) : path.resolve(repo, path.dirname(entry), ref);
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    assert.equal(manifest.display, 'fullscreen', entry);
    assert.equal(manifest.orientation, 'any', entry);
    assert.deepEqual(manifest.display_override, ['fullscreen', 'standalone']);
    for (const icon of manifest.icons) {
      const iconPath = icon.src.startsWith('/') ? path.join(repo, icon.src) : path.resolve(path.dirname(manifestPath), icon.src);
      assert.ok(fs.existsSync(iconPath), `${entry}: missing install icon`);
    }
  }
});
