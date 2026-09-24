'use strict';

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
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
