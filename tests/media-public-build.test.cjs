const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { buildPublic } = require('../scripts/build-public.cjs');

test('public build includes runtime entrypoints but excludes protected media and private sources', () => {
  const { output, publicFiles, protectedFiles } = buildPublic();
  for (const file of protectedFiles) assert.equal(fs.existsSync(path.join(output, file)), false, file);
  for (const file of ['assets/images/masters', 'config', 'functions', 'tests', 'scripts', '.git', '.cupid-media-key', 'AGENTS.md']) {
    assert.equal(fs.existsSync(path.join(output, file)), false, file);
  }
  for (const file of ['index.html', 'game.html', 'gallery.html', 'index-ja.html', 'deepseek_api.js',
    'assets/js/media-gate.js', 'assets/js/modules/GameEngine.js', 'service-worker.js', 'manifest.json',
    'seo/cupid-visual-novel.html', 'favicon.ico', '_headers', '404.html']) {
    assert.ok(publicFiles.includes(file), 'Runtime dependency missing: ' + file);
  }
});
