'use strict';

const path = require('path');
const { loadKeyFromEnvOrFile, encryptFileInPlace, isEncryptedBuffer } = require('./lib/cupid-media-crypto.cjs');
const { listProtectedAssets } = require('./lib/cupid-protected-assets.cjs');
const fs = require('fs');

async function main() {
  const root = path.resolve(__dirname, '..');
  const key = loadKeyFromEnvOrFile();
  const assets = listProtectedAssets(root);
  let encrypted = 0;
  let skipped = 0;
  let bytesIn = 0;
  let bytesOut = 0;
  for (const rel of assets) {
    const full = path.join(root, rel);
    const before = fs.readFileSync(full);
    if (isEncryptedBuffer(before)) {
      skipped += 1;
      continue;
    }
    const result = encryptFileInPlace(full, key);
    if (result.skipped) {
      skipped += 1;
    } else {
      encrypted += 1;
      bytesIn += result.bytesIn;
      bytesOut += result.bytesOut;
      console.log('encrypted', rel);
    }
  }
  console.log(JSON.stringify({
    total: assets.length,
    encrypted,
    skipped,
    bytesIn,
    bytesOut
  }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
