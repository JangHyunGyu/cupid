import { contentTypeForPath } from './media-crypto.js';

// Shared by image reads and explicit progression grants. No public R2 URLs.
export function mediaCacheKey(origin, file) {
  return new Request(origin + '/api/media?__internal=r2-v1-' + file.sha256);
}

export async function warmGrantedMedia(context, files) {
  const cache = globalThis.caches?.default;
  if (!cache || !context.env.MEDIA_BUCKET) return;
  await Promise.all(files.slice(0, 3).map(async file => {
    try {
      const key = mediaCacheKey(new URL(context.request.url).origin, file);
      const cached = await cache.match(key);
      if (cached) { await cached.body?.cancel(); return; }
      const object = await context.env.MEDIA_BUCKET.get(file.key);
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
