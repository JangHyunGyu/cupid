import { toLogicalAssetId } from '../../../_lib/media-assets.js';
import { MEDIA_MANIFEST } from '../../../_lib/media-manifest.js';

export function onRequest(context) {
  let pathname;
  try { pathname = decodeURIComponent(new URL(context.request.url).pathname); }
  catch (_) { return new Response('Not found', { status: 404 }); }
  const id = toLogicalAssetId(pathname);
  if (id && Object.hasOwn(MEDIA_MANIFEST, id)) {
    return new Response('Not found', { status: 404, headers: { 'cache-control': 'no-store' } });
  }
  // Ordinary scene backgrounds remain public static assets.
  return context.next();
}
