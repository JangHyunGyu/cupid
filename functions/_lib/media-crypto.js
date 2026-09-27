/**
 * Session-secret parsing and image MIME types. Images are streamed from private
 * R2; the legacy secret name remains only to preserve existing signed sessions.
 */

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

export function contentTypeForPath(assetPath) {
  const lower = String(assetPath || '').toLowerCase();
  if (lower.endsWith('.webp')) return 'image/webp';
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
  if (lower.endsWith('.png')) return 'image/png';
  return 'application/octet-stream';
}
