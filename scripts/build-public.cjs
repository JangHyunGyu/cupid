'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { listProtectedAssets } = require('./lib/cupid-protected-assets.cjs');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');

function buildPublic() {
  const protectedFiles = new Set(listProtectedAssets(root));
  const publicFiles = [];
  const topLevel = /^(?:(?:index|game|gallery)(?:-(?:ko|en|ja|es|fr|de|pt))?\.html|404\.html|manifest(?:-(?:ko|en|ja|es|fr|de|pt))?\.json|favicon(?:-(?:192|512))?\.(?:ico|png|webp)|cupid_link(?:_new)?\.(?:png|webp)|service-worker\.js|deepseek_api\.js|robots\.txt|llms\.txt|sitemap\.xml|_headers)$/;
  function walk(dir) {
    for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
      const rel = (dir ? dir + '/' : '') + entry.name;
      if (entry.isSymbolicLink()) throw new Error('Public build refuses symlinks: ' + rel);
      if (entry.isDirectory()) {
        if (!dir && !['assets', 'seo', 'model_adapters'].includes(entry.name)) continue;
        if (rel === 'assets/images/masters' || rel === 'assets/images/characters') continue;
        walk(rel);
      } else if (entry.isFile()) {
        if (!dir && !topLevel.test(entry.name)) continue;
        if (dir === 'seo' && !entry.name.endsWith('.html')) continue;
        if (protectedFiles.has(rel) || entry.name.startsWith('.')) continue;
        const bytes = fs.readFileSync(path.join(root, rel));
        if (bytes.subarray(0, 9).toString() === 'CUPIDENC1') throw new Error('Encrypted media in public build: ' + rel);
        publicFiles.push(rel);
      }
    }
  }
  walk('');
  // Only remove the fixed generated directory directly below this repository.
  if (path.dirname(output) !== root || path.basename(output) !== 'dist'
    || (fs.existsSync(output) && fs.lstatSync(output).isSymbolicLink())) throw new Error('Unsafe build directory');
  fs.rmSync(output, { recursive: true, force: true });
  for (const rel of publicFiles) {
    const target = path.join(output, rel);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(path.join(root, rel), target);
  }
  console.log(`[public] ${publicFiles.length} runtime files; protected images, masters and repository sources excluded`);
  return { output, publicFiles, protectedFiles: [...protectedFiles] };
}
module.exports = { buildPublic };
if (require.main === module) buildPublic();
