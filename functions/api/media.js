import { contentTypeForPath } from '../_lib/media-crypto.js';
import { toLogicalAssetId, isPublicLogicalId, jsonResponse } from '../_lib/media-assets.js';
import { MEDIA_MANIFEST } from '../_lib/media-manifest.js';
import { readMediaSession, sameOriginRequest } from '../_lib/media-session.js';
import { readMediaGrant } from '../_lib/media-grant.js';
import { mediaCacheKey } from '../_lib/media-storage.js';

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const asset = url.searchParams.get('asset') || '';
  const id = toLogicalAssetId(asset);
  const entry = id && Object.hasOwn(MEDIA_MANIFEST, id) ? MEDIA_MANIFEST[id] : null;
  if (!entry) return jsonResponse({ error: 'invalid_asset' }, 400);
  const publicAsset = isPublicLogicalId(id);
  if (!sameOriginRequest(request)) return jsonResponse({ error: 'forbidden_origin' }, 403);
  if (!env.MEDIA_BUCKET) return jsonResponse({ error: 'media_unavailable' }, 503);

  const timings = [];
  let started = performance.now();
  if (!publicAsset) {
    if (!env.CUPID_MEDIA_KEY) return jsonResponse({ error: 'media_unavailable' }, 503);
    const guest = await readMediaSession(request, env);
    const claimed = request.headers.get('X-Cupid-Guest') || url.searchParams.get('guest') || url.searchParams.get('guestId');
    if (!guest || (claimed && claimed !== guest)) return jsonResponse({ error: 'unauthorized' }, 401);
    if (!env.DB) return jsonResponse({ error: 'db_unavailable' }, 503);
    const receipt = await readMediaGrant(request, env, guest);
    const unlocked = receipt?.has(id) || await env.DB.prepare(
      'SELECT 1 AS ok FROM cupid_gallery_unlocks WHERE guest_id = ? AND asset_id = ? LIMIT 1'
    ).bind(guest, id).first();
    if (!unlocked) return jsonResponse({ error: 'forbidden' }, 403);
  }
  timings.push(`authorize;dur=${(performance.now() - started).toFixed(2)}`);

  // Only manifest-listed objects can be read; never accept a caller-supplied R2 key.
  const requestedExt = asset.match(/\.(webp|png|jpe?g)$/i)?.[0].toLowerCase();
  const file = entry.files.find(item => requestedExt && item.path.endsWith(requestedExt))
    || entry.files.find(item => item.path.endsWith('.webp')) || entry.files[0];
  // This synthetic key is never served directly. Authorization always precedes cache lookup.
  const cacheKey = mediaCacheKey(url.origin, file);
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
    'x-cupid-media-source': 'private-r2',
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
    const object = await env.MEDIA_BUCKET.get(file.key);
    if (!object) return jsonResponse({ error: 'asset_missing' }, 404);
    // Uploads are verified single-part objects. Check their identity without buffering
    // the image; immutable SHA-256 keys are never overwritten with different bytes.
    if (object.etag !== file.etag || object.size !== file.size || !object.body) {
      await object.body?.cancel();
      return jsonResponse({ error: 'media_version_mismatch' }, 503);
    }
    timings.push(`storage;dur=${(performance.now() - started).toFixed(2)}`);
    const response = new Response(object.body, { headers: {
      ...responseHeaders, 'content-length': String(object.size),
      'x-cupid-media-cache': 'MISS', 'server-timing': timings.join(', ')
    } });
    if (cache) {
      const cachedResponse = response.clone();
      cachedResponse.headers.set('cache-control', 'public, max-age=86400');
      cachedResponse.headers.delete('vary');
      context.waitUntil(cache.put(cacheKey, cachedResponse).catch(() => {}));
    }
    return response;
  } catch (_) {
    return jsonResponse({ error: 'media_unavailable' }, 503);
  }
}
