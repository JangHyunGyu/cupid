'use strict';

/**
 * AES-256-GCM media packaging for Cupid gallery assets.
 * On-disk format: magic "CUPIDENC1" (8) + IV (12) + ciphertext||tag
 * Threat note: guest unlock POSTs are forgeable; this blocks direct static URL
 * spoiling, not determined API abuse. Public repo may retain plaintext in git history.
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const MAGIC = Buffer.from('CUPIDENC1', 'ascii');
const IV_LEN = 12;
const KEY_LEN = 32;

function loadKeyFromEnvOrFile(explicitPath) {
  const env = process.env.CUPID_MEDIA_KEY;
  if (env && String(env).trim()) {
    return normalizeKey(String(env).trim());
  }
  const keyPath = explicitPath || path.resolve(process.cwd(), '.cupid-media-key');
  if (!fs.existsSync(keyPath)) {
    throw new Error(`CUPID_MEDIA_KEY missing (env or ${keyPath})`);
  }
  return normalizeKey(fs.readFileSync(keyPath, 'utf8').trim());
}

function normalizeKey(raw) {
  let key;
  try {
    key = Buffer.from(raw, 'base64');
  } catch (_) {
    key = null;
  }
  if (!key || key.length !== KEY_LEN) {
    if (/^[0-9a-fA-F]{64}$/.test(raw)) {
      key = Buffer.from(raw, 'hex');
    }
  }
  if (!key || key.length !== KEY_LEN) {
    throw new Error('CUPID_MEDIA_KEY must be 32 bytes (base64 or hex)');
  }
  return key;
}

function isEncryptedBuffer(buf) {
  return Buffer.isBuffer(buf) && buf.length >= MAGIC.length + IV_LEN + 16
    && buf.subarray(0, MAGIC.length).equals(MAGIC);
}

function encryptBuffer(plaintext, key) {
  const iv = crypto.randomBytes(IV_LEN);
  const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
  const enc = Buffer.concat([cipher.update(plaintext), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([MAGIC, iv, enc, tag]);
}

function decryptBuffer(packed, key) {
  if (!isEncryptedBuffer(packed)) {
    throw new Error('Not a CUPIDENC1 payload');
  }
  const iv = packed.subarray(MAGIC.length, MAGIC.length + IV_LEN);
  const body = packed.subarray(MAGIC.length + IV_LEN);
  if (body.length < 16) throw new Error('Truncated ciphertext');
  const tag = body.subarray(body.length - 16);
  const data = body.subarray(0, body.length - 16);
  const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
  decipher.setAuthTag(tag);
  return Buffer.concat([decipher.update(data), decipher.final()]);
}

function encryptFileInPlace(filePath, key) {
  const existing = fs.readFileSync(filePath);
  if (isEncryptedBuffer(existing)) return { skipped: true, reason: 'already-encrypted' };
  const packed = encryptBuffer(existing, key);
  fs.writeFileSync(filePath, packed);
  return { skipped: false, bytesIn: existing.length, bytesOut: packed.length };
}

function decryptFileInPlace(filePath, key) {
  const existing = fs.readFileSync(filePath);
  if (!isEncryptedBuffer(existing)) return { skipped: true, reason: 'plaintext' };
  const plain = decryptBuffer(existing, key);
  fs.writeFileSync(filePath, plain);
  return { skipped: false, bytesIn: existing.length, bytesOut: plain.length };
}

module.exports = {
  MAGIC,
  IV_LEN,
  KEY_LEN,
  loadKeyFromEnvOrFile,
  normalizeKey,
  isEncryptedBuffer,
  encryptBuffer,
  decryptBuffer,
  encryptFileInPlace,
  decryptFileInPlace
};
