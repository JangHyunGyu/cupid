'use strict';
const path = require('node:path');

// Keep source archives and their integrity checks independent of delivery encodings.
function resolveMediaDelivery(storage, variants = {}) {
  const result = { ...storage };
  for (const [relative, variant] of Object.entries(variants)) {
    const source = storage[relative];
    if (!source || !relative.endsWith('.webp') || variant.sourceSha256 !== source.sha256) {
      throw new Error('Delivery source changed: ' + relative);
    }
    if (!/^[a-f0-9]{64}$/.test(variant.sha256)
      || variant.key !== 'images/' + variant.sha256 + path.extname(relative)
      || !/^[a-f0-9]{32}$/.test(variant.etag)
      || !Number.isSafeInteger(variant.size) || variant.size <= 0 || variant.size >= source.size
      || !Number.isSafeInteger(variant.width) || variant.width <= 0
      || !Number.isSafeInteger(variant.height) || variant.height <= 0) {
      throw new Error('Invalid delivery variant: ' + relative);
    }
    result[relative] = { ...source, key: variant.key, sha256: variant.sha256, etag: variant.etag, size: variant.size };
  }
  return result;
}

module.exports = { resolveMediaDelivery };
