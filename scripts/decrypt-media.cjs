'use strict';

const path = require('path');
const { loadKeyFromEnvOrFile, decryptFileInPlace } = require('./lib/cupid-media-crypto.cjs');
const { listProtectedAssets } = require('./lib/cupid-protected-assets.cjs');

async function main() {
  const root = path.resolve(__dirname, '..');
  const key = loadKeyFromEnvOrFile();
  const assets = listProtectedAssets(root);
  let decrypted = 0;
  let skipped = 0;
  for (const rel of assets) {
    const full = path.join(root, rel);
    const result = decryptFileInPlace(full, key);
    if (result.skipped) skipped += 1;
    else {
      decrypted += 1;
      console.log('decrypted', rel);
    }
  }
  console.log(JSON.stringify({ total: assets.length, decrypted, skipped }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
