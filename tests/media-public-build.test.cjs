const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { buildPublic } = require('../scripts/build-public.cjs');

test('public build includes runtime entrypoints but excludes protected media and private sources', () => {
  const { output, publicFiles, protectedFiles } = buildPublic();
  const images = require('../config/public-images.json');
  const routes = JSON.parse(fs.readFileSync(path.join(output, '_routes.json'), 'utf8'));
  assert.ok(routes.include.includes('/api/*'), 'Private media APIs remain routed');
  assert.ok(routes.include.includes('/assets/images/*'), 'Public images are routed to R2');
  assert.ok(routes.include.includes('/favicon.ico'), 'Favicon is routed to R2');
  assert.ok(images.objects[images.routes['favicon.ico']], 'Favicon has a verified R2 identity');
  assert.equal(publicFiles.some(file => /\.(png|webp|jpe?g|svg|ico|avif|gif)$/i.test(file)), false, 'No image binaries in Pages output');
  for (const file of protectedFiles) assert.equal(Object.hasOwn(images.routes, file), false, 'Protected image in public manifest: ' + file);
  for (const file of protectedFiles) assert.equal(fs.existsSync(path.join(output, file)), false, file);
  for (const file of ['assets/images/masters', 'config', 'functions', 'tests', 'scripts', 'archive', '.git', '.cupid-media-key', 'AGENTS.md',
    'deepseek_api.js', 'model_adapters', 'assets/js/all_nodes.txt', 'assets/js/scenario/extract_all.js',
    'assets/js/scenario/extract_for_translation.js', 'assets/js/scenario/to_translate.json',
    'assets/audio/sfx/README.md', 'assets/images/ui/petal-frame.md']) {
    assert.equal(fs.existsSync(path.join(output, file)), false, file);
  }
  for (const file of ['index.html', 'game.html', 'gallery.html', 'index-ja.html',
    'assets/js/media-gate.js', 'assets/js/modules/GameEngine.js', 'service-worker.js', 'manifest.json',
    'seo/cupid-visual-novel.html', '_headers', '404.html',
    'assets/vendor/pretendard/LICENSE.txt', 'assets/vendor/pretendard/PretendardVariable.woff2']) {
    assert.ok(publicFiles.includes(file), 'Runtime dependency missing: ' + file);
  }
  assert.ok(publicFiles.every(file => !/\.(cjs|md)$/.test(file)), 'Development formats in public output');
  for (const lang of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt', 'zh']) {
    const translations = publicFiles.filter(file => file.startsWith(`assets/js/i18n/${lang}/`));
    assert.equal(translations.length, 20, `${lang}: complete translation bundle`);
  }
  for (const file of publicFiles.filter(file => file.endsWith('.html'))) {
    const html = fs.readFileSync(path.join(output, file), 'utf8');
    for (const match of html.matchAll(/(?:src|href)=["']([^"']+)["']/g)) {
      const url = new URL(match[1], `https://example.test/${file}`);
      if (url.origin !== 'https://example.test' || !url.pathname.startsWith('/assets/')) continue;
      const asset = decodeURIComponent(url.pathname.slice(1));
      if (protectedFiles.includes(asset)) continue;
      assert.ok(publicFiles.includes(asset) || images.objects[images.routes[asset]], `${file}: missing runtime asset ${asset}`);
    }
  }
});
