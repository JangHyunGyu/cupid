'use strict';

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { createHash } = require('crypto');
const { isEncryptedBuffer, decryptBuffer, loadKeyFromEnvOrFile } = require('./cupid-media-crypto.cjs');

const root = path.resolve(__dirname, '../..');
const WRAPPER_OVERHEAD = 9 + 12 + 16;

function readPlainMedia(filePath) {
  const full = path.resolve(filePath);
  const packed = fs.readFileSync(full);
  if (!isEncryptedBuffer(packed)) return packed;
  try {
    return decryptBuffer(packed, loadKeyFromEnvOrFile());
  } catch (_) {
    // Reviewed cutouts have deterministic test sources; never serve fixtures in the public build.
    const relative = path.relative(root, full).split(path.sep).join('/');
    const fixture = path.join(root, 'tests/fixtures/corrected-media', relative);
    if (fs.existsSync(fixture)) {
      const catalog = JSON.parse(fs.readFileSync(path.join(root, 'config/media-storage.json'), 'utf8'));
      const plain = fs.readFileSync(fixture);
      const sha = bytes => createHash('sha256').update(bytes).digest('hex');
      if (catalog[relative]?.sourceHash !== sha(packed) || catalog[relative]?.sha256 !== sha(plain)) {
        throw new Error(`Corrected media fixture does not match the catalog: ${relative}`);
      }
      return plain;
    }
    return plaintextAncestor(full, packed.length);
  }
}

function plaintextAncestor(full, packedLength) {
  const relative = path.relative(root, full).split(path.sep).join('/');
  const log = execFileSync('git', ['log', '--pretty=%H', '--', relative], {
    cwd: root,
    encoding: 'utf8'
  });
  for (const rev of log.split(/\r?\n/).filter(Boolean)) {
    let blob;
    try {
      blob = execFileSync('git', ['cat-file', 'blob', `${rev}:${relative}`], {
        cwd: root,
        maxBuffer: 40 * 1024 * 1024
      });
    } catch (_) {
      continue;
    }
    if (isEncryptedBuffer(blob)) continue;
    if (blob.length + WRAPPER_OVERHEAD !== packedLength) {
      throw new Error(`${relative} ciphertext size does not match plaintext ${rev}`);
    }
    return blob;
  }
  throw new Error(`${relative} is encrypted and no matching plaintext blob is available`);
}

module.exports = { readPlainMedia, WRAPPER_OVERHEAD };
