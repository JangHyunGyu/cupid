/**
 * Worker/Pages AES-256-GCM helpers for CUPIDENC1 payloads.
 * Threat note: guest unlock POSTs are forgeable; blocks direct static URL spoiling.
 */

const MAGIC = new TextEncoder().encode('CUPIDENC1');
const IV_LEN = 12;

function b64ToBytes(b64) {
  const bin = atob(String(b64 || '').trim());
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function hexToBytes(hex) {
  const clean = String(hex || '').trim();
  if (!/^[0-9a-fA-F]{64}$/.test(clean)) return null;
  const out = new Uint8Array(32);
  for (let i = 0; i < 32; i++) out[i] = parseInt(clean.slice(i * 2, i * 2 + 2), 16);
  return out;
}

export function parseMediaKey(raw) {
  if (!raw) throw new Error('CUPID_MEDIA_KEY missing');
  let key = null;
  try { key = b64ToBytes(raw); } catch (_) { key = null; }
  if (!key || key.length !== 32) key = hexToBytes(raw);
  if (!key || key.length !== 32) throw new Error('CUPID_MEDIA_KEY must be 32 bytes');
  return key;
}

export function isEncryptedBytes(bytes) {
  if (!bytes || bytes.length < MAGIC.length + IV_LEN + 16) return false;
  for (let i = 0; i < MAGIC.length; i++) {
    if (bytes[i] !== MAGIC[i]) return false;
  }
  return true;
}

export async function importAesKey(rawKeyBytes) {
  return crypto.subtle.importKey('raw', rawKeyBytes, { name: 'AES-GCM' }, false, ['decrypt']);
}

export async function decryptCupidEnc1(packed, aesKey) {
  if (!isEncryptedBytes(packed)) throw new Error('Not CUPIDENC1');
  const iv = packed.subarray(MAGIC.length, MAGIC.length + IV_LEN);
  const body = packed.subarray(MAGIC.length + IV_LEN);
  // WebCrypto expects ciphertext||tag as one buffer for AES-GCM
  const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, aesKey, body);
  return new Uint8Array(plain);
}

export function contentTypeForPath(assetPath) {
  const lower = String(assetPath || '').toLowerCase();
  if (lower.endsWith('.webp')) return 'image/webp';
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
  if (lower.endsWith('.png')) return 'image/png';
  return 'application/octet-stream';
}
