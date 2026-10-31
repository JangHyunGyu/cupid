import { contentTypeForPath } from './media-crypto.js';

// Shared by image reads and explicit progression grants. No public R2 URLs.
export function mediaCacheKey(origin, file) {
  return new Request(origin + '/api/media?__internal=r2-v1-' + file.sha256);
}

export function sharedMediaObjectKey(file) {
  const ext = file.path.match(/\.(webp|png|jpe?g)$/i)?.[0].toLowerCase() || '';
  return 'objects/' + file.sha256 + ext;
}

export async function readMediaObject(env, file) {
  if (env.MEDIA_BUCKET) {
    const object = await env.MEDIA_BUCKET.get(file.key);
    if (object) return object;
  }
  if (env.PUBLIC_IMAGE_BUCKET) {
    return env.PUBLIC_IMAGE_BUCKET.get(sharedMediaObjectKey(file));
  }
  return null;
}

export async function warmGrantedMedia(context, files) {
  const cache = globalThis.caches?.default;
  if (!cache || (!context.env.MEDIA_BUCKET && !context.env.PUBLIC_IMAGE_BUCKET)) return;
  await Promise.all(files.slice(0, 3).map(async file => {
    try {
      const key = mediaCacheKey(new URL(context.request.url).origin, file);
      const cached = await cache.match(key);
      if (cached) { await cached.body?.cancel(); return; }
      const object = await readMediaObject(context.env, file);
      if (!object?.body || object.etag !== file.etag || object.size !== file.size) {
        await object?.body?.cancel(); return;
      }
      await cache.put(key, new Response(object.body, { headers: {
        'Content-Type': contentTypeForPath(file.path),
        'Cache-Control': 'public, max-age=86400'
      } }));
    } catch (_) { /* Warming is optional; ordinary image reads retry storage. */ }
  }));
}
