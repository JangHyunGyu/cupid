import { parseMediaKey } from './media-crypto.js';
import { MEDIA_MANIFEST } from './media-manifest.js';

const COOKIE = '__Host-cupid-media-grant';
const TTL = 120;
const encoder = new TextEncoder();
const ids = Object.keys(MEDIA_MANIFEST).sort();
const hex = bytes => Array.from(new Uint8Array(bytes), b => b.toString(16).padStart(2, '0')).join('');
const unhex = value => Uint8Array.from(value.match(/../g) || [], pair => parseInt(pair, 16));

async function key(env) {
  const source = await crypto.subtle.importKey('raw', parseMediaKey(env.CUPID_MEDIA_KEY), 'HKDF', false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name: 'HKDF', hash: 'SHA-256',
    salt: encoder.encode('cupid-media-grant-v1'), info: encoder.encode('cookie-signing') },
  source, { name: 'HMAC', hash: 'SHA-256', length: 256 }, false, ['sign', 'verify']);
}

async function catalogVersion() {
  return hex(await crypto.subtle.digest('SHA-256', encoder.encode(ids.map(id => id + ':' + MEDIA_MANIFEST[id].version).join('\n')))).slice(0, 24);
}

// A short-lived receipt for a committed grant, bound to the HttpOnly session.
// It is an optimization only: missing/expired receipts use the normal D1 check.
export async function readMediaGrant(request, env, guest) {
  try {
    const value = (request.headers.get('Cookie') || '').split(';').map(s => s.trim())
      .find(s => s.startsWith(COOKIE + '='))?.slice(COOKIE.length + 1);
    if (!value || value.length > 512) return null;
    const [owner, expires, version, bits, signature, extra] = value.split('.');
    if (extra || owner !== guest || !/^\d{10}$/.test(expires || '')
      || Number(expires) <= Date.now() / 1000 || Number(expires) > Date.now() / 1000 + TTL
      || !/^[a-f0-9]{64}$/.test(signature || '') || !/^[a-f0-9]+$/.test(bits || '')
      || bits.length !== Math.ceil(ids.length / 8) * 2 || version !== await catalogVersion()) return null;
    const payload = [owner, expires, version, bits].join('.');
    if (!await crypto.subtle.verify('HMAC', await key(env), unhex(signature), encoder.encode(payload))) return null;
    const bytes = unhex(bits);
    return new Set(ids.filter((_, index) => bytes[index >> 3] & (1 << (index & 7))));
  } catch (_) { return null; }
}

export async function createMediaGrant(env, guest, accepted) {
  // Sign only this committed batch; older images use their cache or D1 grant.
  // Do not extend previous receipts when an unrelated image is unlocked.
  const granted = new Set(accepted);
  const bytes = new Uint8Array(Math.ceil(ids.length / 8));
  ids.forEach((id, index) => { if (granted.has(id)) bytes[index >> 3] |= 1 << (index & 7); });
  const payload = [guest, Math.floor(Date.now() / 1000) + TTL, await catalogVersion(), hex(bytes)].join('.');
  const signature = hex(await crypto.subtle.sign('HMAC', await key(env), encoder.encode(payload)));
  return `${COOKIE}=${payload}.${signature}; Path=/; Secure; HttpOnly; SameSite=Strict; Max-Age=${TTL}`;
}
