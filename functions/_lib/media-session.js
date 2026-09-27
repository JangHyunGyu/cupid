import { parseMediaKey } from './media-crypto.js';
import { isValidGuestId, jsonResponse } from './media-assets.js';

const COOKIE = '__Host-cupid-media';
const LIFETIME = 365 * 86400;
const encoder = new TextEncoder();

export async function readSmallJson(request, limit = 16384) {
  if (Number(request.headers.get('Content-Length')) > limit) throw new Error('body_too_large');
  const reader = request.body?.getReader();
  if (!reader) throw new Error('invalid_json');
  const chunks = [];
  let length = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > limit) { await reader.cancel(); throw new Error('body_too_large'); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
  return JSON.parse(new TextDecoder().decode(bytes));
}

export function sameOriginRequest(request, mutation = false) {
  const origin = new URL(request.url).origin;
  const supplied = request.headers.get('Origin');
  const site = request.headers.get('Sec-Fetch-Site');
  if (supplied && supplied !== origin) return false;
  if (site && site !== 'same-origin' && site !== 'none') return false;
  return !mutation || supplied === origin;
}

async function signingKey(env) {
  const source = await crypto.subtle.importKey('raw', parseMediaKey(env.CUPID_MEDIA_KEY), 'HKDF', false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name: 'HKDF', hash: 'SHA-256',
    salt: encoder.encode('cupid-media-session-v1'), info: encoder.encode('cookie-signing') },
  source, { name: 'HMAC', hash: 'SHA-256', length: 256 }, false, ['sign', 'verify']);
}

export async function readMediaSession(request, env) {
  const value = (request.headers.get('Cookie') || '').split(';')
    .map(part => part.trim()).find(part => part.startsWith(COOKIE + '='))?.slice(COOKIE.length + 1);
  if (!value || value.length > 200) return null;
  const [guest, expires, signature, extra] = value.split('.');
  if (extra || !isValidGuestId(guest) || !/^\d{10}$/.test(expires || '')
    || Number(expires) <= Date.now() / 1000 || !/^[0-9a-f]{64}$/.test(signature || '')) return null;
  const bytes = Uint8Array.from(signature.match(/../g), pair => parseInt(pair, 16));
  const valid = await crypto.subtle.verify('HMAC', await signingKey(env), bytes, encoder.encode(guest + '.' + expires));
  return valid ? guest : null;
}

export async function createMediaSession(request, env) {
  if (!sameOriginRequest(request, true)) return jsonResponse({ error: 'forbidden_origin' }, 403);
  if (!env.CUPID_MEDIA_KEY) return jsonResponse({ error: 'media_unavailable' }, 503);
  const existing = await readMediaSession(request, env);
  if (existing) return jsonResponse({ guestId: existing });
  // Never sign a caller-selected guest ID: a leaked URL must not grant access.
  const guestId = crypto.randomUUID();
  const payload = guestId + '.' + (Math.floor(Date.now() / 1000) + LIFETIME);
  const bytes = new Uint8Array(await crypto.subtle.sign('HMAC', await signingKey(env), encoder.encode(payload)));
  const signature = Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
  return jsonResponse({ guestId }, 200, {
    'set-cookie': `${COOKIE}=${payload}.${signature}; Path=/; Secure; HttpOnly; SameSite=Strict; Max-Age=${LIFETIME}`
  });
}
