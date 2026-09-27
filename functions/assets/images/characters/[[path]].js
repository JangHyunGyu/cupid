// Block legacy static URLs even when an older deployment warmed the CDN cache.
// All delivered sprites, including public title normals, use /api/media.
export function onRequest() {
  return new Response('Not found', { status: 404, headers: { 'cache-control': 'no-store' } });
}
