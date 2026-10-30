'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { listProtectedAssets } = require('./lib/cupid-protected-assets.cjs');
const { rewriteReferences } = require('./character-assets.cjs');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const { IMAGE, verifyPublished, prepareImageRoutes } = require('./image-assets.cjs');

function buildPublic() {
  verifyPublished(root);
  const protectedFiles = new Set(listProtectedAssets(root));
  const publicFiles = [];
  const topLevel = /^(?:(?:index|game|gallery)(?:-(?:ko|en|ja|es|fr|de|pt|zh))?\.html|404\.html|manifest(?:-(?:ko|en|ja|es|fr|de|pt|zh))?\.json|favicon(?:-(?:192|512))?\.(?:ico|png|webp)|cupid_link(?:_new)?\.(?:png|webp)|service-worker\.js|robots\.txt|llms(?:-full)?\.txt|sitemap\.xml|_headers)$/;
  function isRuntimeAsset(rel) {
    if (rel.startsWith('assets/js/i18n/')) return /^assets\/js\/i18n\/(ko|en|ja|es|fr|de|pt|zh)\/day[1-5]_[1-4]_(morning|lunch|afterschool|night)\.json$/.test(rel);
    if (rel.startsWith('assets/js/scenario/')) return /^assets\/js\/scenario\/day[1-5]_[1-4]_(morning|lunch|afterschool|night)\.js$/.test(rel);
    if (rel.startsWith('assets/js/')) return rel.endsWith('.js');
    if (rel.startsWith('assets/css/')) return rel.endsWith('.css');
    if (rel.startsWith('assets/vendor/pretendard/')) return /\.(css|woff2)$/.test(rel) || rel === 'assets/vendor/pretendard/LICENSE.txt';
    if (rel.startsWith('assets/images/')) return /\.(png|webp|jpg|jpeg|svg|ico|avif|gif)$/.test(rel);
    if (rel.startsWith('assets/audio/')) return /\.(mp3|ogg|wav|m4a)$/.test(rel);
    return false;
  }
  function walk(dir) {
    for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
      const rel = (dir ? dir + '/' : '') + entry.name;
      if (entry.isSymbolicLink()) throw new Error('Public build refuses symlinks: ' + rel);
      if (entry.isDirectory()) {
        if (!dir && !['assets', 'seo'].includes(entry.name)) continue;
        if (rel === 'assets/images/masters' || rel === 'assets/images/characters' || rel === 'assets/characters') continue;
        walk(rel);
      } else if (entry.isFile()) {
        if (IMAGE.test(rel)) continue;
        if (!dir && !topLevel.test(entry.name)) continue;
        if (dir === 'seo' && !entry.name.endsWith('.html')) continue;
        if (rel.startsWith('assets/') && !isRuntimeAsset(rel)) continue;
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
    if (/\.(html|js|css|json|xml|txt|svg)$/.test(rel)) {
      fs.writeFileSync(target, rewriteReferences(root, fs.readFileSync(path.join(root, rel), 'utf8')));
    } else fs.copyFileSync(path.join(root, rel), target);
  }
  prepareImageRoutes(root, output);
  console.log(`[public] ${publicFiles.length} runtime files; protected images, masters and repository sources excluded`);
  return { output, publicFiles, protectedFiles: [...protectedFiles] };
}
module.exports = { buildPublic };
if (require.main === module) buildPublic();
