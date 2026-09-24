/**
 * GET /api/media?asset=...
 * Decrypts a protected gallery/character asset when D1 shows the guest unlocked it.
 * Guest: header X-Cupid-Guest or query guest / guestId
 */

import { parseMediaKey, importAesKey, decryptCupidEnc1, isEncryptedBytes, contentTypeForPath } from '../_lib/media-crypto.js';
import {
  toLogicalAssetId,
  isProtectedLogicalId,
  candidateStaticPaths,
  isValidGuestId,
  jsonResponse
} from '../_lib/media-assets.js';

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const assetParam = url.searchParams.get('asset') || '';
  const guestId = (
    request.headers.get('X-Cupid-Guest')
    || url.searchParams.get('guest')
    || url.searchParams.get('guestId')
    || ''
  ).trim();

  const logicalId = toLogicalAssetId(assetParam);
  if (!logicalId || !isProtectedLogicalId(logicalId)) {
    return jsonResponse({ error: 'invalid_asset' }, 400);
  }
  if (!isValidGuestId(guestId)) {
    return jsonResponse({ error: 'invalid_guest' }, 400);
  }
  if (!env.DB) {
    return jsonResponse({ error: 'db_unavailable' }, 503);
  }
  if (!env.CUPID_MEDIA_KEY) {
    return jsonResponse({ error: 'media_key_missing' }, 503);
  }

  const unlocked = await env.DB.prepare(
    'SELECT 1 AS ok FROM cupid_gallery_unlocks WHERE guest_id = ? AND asset_id = ? LIMIT 1'
  ).bind(guestId, logicalId).first();

  if (!unlocked) {
    return jsonResponse({ error: 'forbidden', asset: logicalId }, 403);
  }

  const candidates = candidateStaticPaths(logicalId);
  // Prefer requested extension order if present
  const requested = String(assetParam || '');
  if (/\.png$/i.test(requested)) {
    candidates.sort((a, b) => Number(b.endsWith('.png')) - Number(a.endsWith('.png')));
  } else if (/\.webp$/i.test(requested)) {
    candidates.sort((a, b) => Number(b.endsWith('.webp')) - Number(a.endsWith('.webp')));
  }

  let packed = null;
  let usedPath = null;
  for (const rel of candidates) {
    const assetUrl = new URL('/' + rel, url.origin);
    const assetResp = env.ASSETS
      ? await env.ASSETS.fetch(new Request(assetUrl.toString(), { method: 'GET' }))
      : await fetch(assetUrl.toString(), { method: 'GET' });
    if (!assetResp.ok) continue;
    const bytes = new Uint8Array(await assetResp.arrayBuffer());
    if (!isEncryptedBytes(bytes)) {
      // Refuse to tunnel plaintext through the media API.
      continue;
    }
    packed = bytes;
    usedPath = rel;
    break;
  }

  if (!packed || !usedPath) {
    return jsonResponse({ error: 'asset_missing', asset: logicalId }, 404);
  }

  try {
    const keyBytes = parseMediaKey(env.CUPID_MEDIA_KEY);
    const aesKey = await importAesKey(keyBytes);
    const plain = await decryptCupidEnc1(packed, aesKey);
    return new Response(plain, {
      status: 200,
      headers: {
        'content-type': contentTypeForPath(usedPath),
        'cache-control': 'private, max-age=300',
        'x-cupid-asset': logicalId
      }
    });
  } catch (err) {
    return jsonResponse({ error: 'decrypt_failed', message: String(err?.message || err) }, 500);
  }
}
