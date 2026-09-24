'use strict';

const fs = require('fs');
const path = require('path');

const IMAGE_EXT = new Set(['.png', '.webp', '.jpg', '.jpeg']);

function listCharacterImages(rootDir) {
  const dir = path.join(rootDir, 'assets/images/characters');
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (!fs.statSync(full).isFile()) continue;
    const ext = path.extname(name).toLowerCase();
    if (!IMAGE_EXT.has(ext)) continue;
    out.push(path.relative(rootDir, full).split(path.sep).join('/'));
  }
  return out.sort();
}

function extractGalleryCgBasenames(galleryDataPath) {
  const src = fs.readFileSync(galleryDataPath, 'utf8');
  const names = new Set();
  const re = /assets\/images\/background\/([a-z0-9_\-]+)\.(?:png|webp|jpg|jpeg)/gi;
  let m;
  while ((m = re.exec(src))) names.add(m[1]);
  return [...names].sort();
}

function listGalleryCgImages(rootDir) {
  const galleryDataPath = path.join(rootDir, 'assets/js/gallery-data.js');
  const bases = extractGalleryCgBasenames(galleryDataPath);
  const bgDir = path.join(rootDir, 'assets/images/background');
  const out = [];
  for (const base of bases) {
    for (const ext of ['.png', '.webp', '.jpg', '.jpeg']) {
      const full = path.join(bgDir, base + ext);
      if (fs.existsSync(full) && fs.statSync(full).isFile()) {
        out.push(path.relative(rootDir, full).split(path.sep).join('/'));
      }
    }
  }
  return out.sort();
}

function listProtectedAssets(rootDir) {
  return [...new Set([...listCharacterImages(rootDir), ...listGalleryCgImages(rootDir)])].sort();
}

function toLogicalAssetId(relPath) {
  const norm = String(relPath || '').replace(/^\/+/, '').replace(/\\/g, '/');
  const noQuery = norm.split('?')[0];
  let p = noQuery;
  if (p.startsWith('assets/images/')) p = p.slice('assets/images/'.length);
  p = p.replace(/\.(png|webp|jpg|jpeg)$/i, '');
  return p;
}

function logicalIdVariants(logicalId) {
  const id = String(logicalId || '').replace(/^\/+/, '').replace(/\\/g, '/');
  const cleaned = id.replace(/\.(png|webp|jpg|jpeg)$/i, '');
  const withPrefix = cleaned.startsWith('assets/images/')
    ? cleaned.slice('assets/images/'.length)
    : cleaned;
  return [...new Set([cleaned, withPrefix, `assets/images/${withPrefix}`])];
}

function resolveCandidatePaths(assetParam) {
  const raw = String(assetParam || '').split('?')[0].replace(/^\/+/, '').replace(/\\/g, '/');
  if (!raw || raw.includes('..')) return [];
  const noExt = raw.replace(/\.(png|webp|jpg|jpeg)$/i, '');
  const stripped = noExt.startsWith('assets/images/')
    ? noExt.slice('assets/images/'.length)
    : noExt;
  const bases = [...new Set([
    raw,
    noExt,
    stripped,
    `assets/images/${stripped}`,
    `${stripped}.webp`,
    `${stripped}.png`,
    `assets/images/${stripped}.webp`,
    `assets/images/${stripped}.png`
  ])];
  return bases.filter((p) => !p.includes('..'));
}

module.exports = {
  IMAGE_EXT,
  listCharacterImages,
  extractGalleryCgBasenames,
  listGalleryCgImages,
  listProtectedAssets,
  toLogicalAssetId,
  logicalIdVariants,
  resolveCandidatePaths
};
