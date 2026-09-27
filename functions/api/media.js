import { parseMediaKey, importAesKey, decryptCupidEnc1, isEncryptedBytes, contentTypeForPath } from '../_lib/media-crypto.js';
import { toLogicalAssetId, isPublicLogicalId, jsonResponse } from '../_lib/media-assets.js';
import { MEDIA_MANIFEST } from '../_lib/media-manifest.js';
import { readMediaSession, sameOriginRequest } from '../_lib/media-session.js';

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const asset = url.searchParams.get('asset') || '';
  const id = toLogicalAssetId(asset);
  const entry = id && Object.hasOwn(MEDIA_MANIFEST, id) ? MEDIA_MANIFEST[id] : null;
  if (!entry) return jsonResponse({ error: 'invalid_asset' }, 400);
  const publicAsset = isPublicLogicalId(id);
  if (!sameOriginRequest(request)) return jsonResponse({ error: 'forbidden_origin' }, 403);
  if (!env.CUPID_MEDIA_KEY) return jsonResponse({ error: 'media_unavailable' }, 503);

  const timings = [];
  let started = performance.now();
  if (!publicAsset) {
    const guest = await readMediaSession(request, env);
    const claimed = request.headers.get('X-Cupid-Guest') || url.searchParams.get('guest') || url.searchParams.get('guestId');
    if (!guest || (claimed && claimed !== guest)) return jsonResponse({ error: 'unauthorized' }, 401);
    if (!env.DB) return jsonResponse({ error: 'db_unavailable' }, 503);
    const unlocked = await env.DB.prepare(
      'SELECT 1 AS ok FROM cupid_gallery_unlocks WHERE guest_id = ? AND asset_id = ? LIMIT 1'
    ).bind(guest, id).first();
    if (!unlocked) return jsonResponse({ error: 'forbidden' }, 403);
  }
  timings.push(`authorize;dur=${(performance.now() - started).toFixed(2)}`);

  // Pick only a generated, encrypted file; no speculative extension fetches.
  const requestedExt = asset.match(/\.(webp|png|jpe?g)$/i)?.[0].toLowerCase();
  const file = entry.files.find(item => requestedExt && item.path.endsWith(requestedExt))
    || entry.files.find(item => item.path.endsWith('.webp')) || entry.files[0];
  const keyBytes = parseMediaKey(env.CUPID_MEDIA_KEY);
  const keyDigest = new Uint8Array(await crypto.subtle.digest('SHA-256', keyBytes));
  const keyVersion = Array.from(keyDigest, byte => byte.toString(16).padStart(2, '0')).join('');
  // This synthetic key is never served directly. Authorization always precedes cache lookup.
  const cacheKey = new Request(url.origin + '/api/media?__internal=v2-' + file.hash + '-' + keyVersion);
  const cache = globalThis.caches?.default;
  const versioned = url.searchParams.get('v') === entry.version;
  const responseHeaders = {
    'content-type': contentTypeForPath(file.path),
    'cache-control': versioned
      ? (publicAsset ? 'public, max-age=31536000, immutable' : 'private, max-age=86400')
      : (publicAsset ? 'public, max-age=300' : 'private, no-cache'),
    'x-content-type-options': 'nosniff',
    'cross-origin-resource-policy': 'same-origin',
    'x-cupid-asset': id,
    'x-cupid-media-version': entry.version,
    ...(publicAsset ? {} : { vary: 'Cookie' })
  };
  started = performance.now();
  let cached;
  try { cached = await cache?.match(cacheKey); } catch (_) { /* cache is optional */ }
  timings.push(`edge;dur=${(performance.now() - started).toFixed(2)}`);
  if (cached) return new Response(cached.body, { headers: {
    ...responseHeaders, 'x-cupid-media-cache': 'HIT', 'server-timing': timings.join(', ')
  } });

  try {
    started = performance.now();
    const staticUrl = new URL('/' + file.path, url.origin);
    const response = env.ASSETS ? await env.ASSETS.fetch(new Request(staticUrl)) : await fetch(staticUrl);
    if (!response.ok) return jsonResponse({ error: 'asset_missing' }, 404);
    const packed = new Uint8Array(await response.arrayBuffer());
    if (!isEncryptedBytes(packed)) return jsonResponse({ error: 'invalid_media' }, 503);
    const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', packed));
    const hash = Array.from(digest, byte => byte.toString(16).padStart(2, '0')).join('');
    if (hash !== file.hash) return jsonResponse({ error: 'media_version_mismatch' }, 503);
    timings.push(`asset;dur=${(performance.now() - started).toFixed(2)}`);
    started = performance.now();
    const plain = await decryptCupidEnc1(packed, await importAesKey(keyBytes));
    timings.push(`decrypt;dur=${(performance.now() - started).toFixed(2)}`);
    if (cache) {
      const write = cache.put(cacheKey, new Response(plain, { headers: {
        'content-type': responseHeaders['content-type'], 'cache-control': 'public, max-age=86400'
      } })).catch(() => {});
      context.waitUntil(write);
    }
    return new Response(plain, { headers: {
      ...responseHeaders, 'x-cupid-media-cache': 'MISS', 'server-timing': timings.join(', ')
    } });
  } catch (_) {
    return jsonResponse({ error: 'media_unavailable' }, 503);
  }
}
