// Images stay on their historical same-origin URLs. Only manifest-listed public
// objects are accessible; the backup and Cupid protected buckets are not bound.
export async function serveImage(context, manifest, edgeCache = caches.default) {
  const { request, env, waitUntil } = context;
  const url = new URL(request.url);
  let pathname;
  try { pathname = decodeURIComponent(url.pathname).replace(/^\//, ''); }
  catch { return new Response('Not found', { status: 404 }); }
  const id = Object.hasOwn(manifest.routes, pathname) && manifest.routes[pathname];
  if (!id) {
    if (/\.(?:png|webp|jpe?g|gif|avif|svg|ico)$/i.test(pathname)) return new Response('Not found', { status: 404 });
    return context.next();
  }
  if (!['GET', 'HEAD'].includes(request.method)) return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
  const item = manifest.objects[id];
  const etag = '"' + item.sha256 + '"';
  const headers = new Headers({
    'Content-Type': item.contentType,
    'Cache-Control': 'public, max-age=3600',
    'ETag': etag,
    'X-Content-Type-Options': 'nosniff',
    'X-Image-Source': 'private-r2',
    'Access-Control-Allow-Origin': '*'
  });
  if (request.headers.get('If-None-Match')?.split(',').map(v => v.trim().replace(/^W\//, '')).some(v => v === etag || v === '*')) {
    return new Response(null, { status: 304, headers });
  }
  const cacheURL = new URL('/__r2_public_images/' + id, url.origin);
  const cacheKey = new Request(cacheURL, { method: 'GET' });
  const cached = await edgeCache.match(cacheKey);
  if (cached) {
    headers.set('Content-Length', String(item.bytes));
    headers.set('X-Image-Cache', 'HIT');
    return new Response(request.method === 'HEAD' ? null : cached.body, { headers });
  }
  if (!env.PUBLIC_IMAGE_BUCKET) return new Response('Image storage unavailable', { status: 503, headers: { 'Cache-Control': 'no-store' } });
  const object = request.method === 'HEAD'
    ? await env.PUBLIC_IMAGE_BUCKET.head(item.key)
    : await env.PUBLIC_IMAGE_BUCKET.get(item.key);
  if (!object || object.size !== item.bytes || object.etag !== item.etag) {
    if (object && 'body' in object) await object.body.cancel();
    return new Response('Image unavailable', { status: 503, headers: { 'Cache-Control': 'no-store' } });
  }
  headers.set('Content-Length', String(item.bytes));
  headers.set('X-Image-Cache', 'MISS');
  if (request.method === 'HEAD') return new Response(null, { headers });
  const response = new Response(object.body, { headers });
  const copy = response.clone();
  copy.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  waitUntil(edgeCache.put(cacheKey, copy));
  return response;
}
