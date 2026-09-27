/**
 * Gallery unlock ledger API.
 * POST /api/gallery/unlocks  { guestId, assets: string[] }
 * GET  /api/gallery/unlocks?guest=...
 *
 * Anonymous grants remain client-reported progression. A signed, same-origin
 * session prevents guest URL impersonation, not fabrication of one's own play.
 */

import {
  toLogicalAssetId,
  isProtectedLogicalId,
  isValidGuestId,
  jsonResponse
} from '../../_lib/media-assets.js';
import { readMediaSession, sameOriginRequest, readSmallJson } from '../../_lib/media-session.js';
import { MEDIA_MANIFEST } from '../../_lib/media-manifest.js';
import { createMediaGrant } from '../../_lib/media-grant.js';
import { warmGrantedMedia } from '../../_lib/media-storage.js';

const BATCH_CAP = 100;

function corsHeaders(request) {
  const origin = request.headers.get('Origin') || '';
  const headers = {
    'cache-control': 'no-store',
    'access-control-allow-methods': 'GET, POST, OPTIONS',
    'access-control-allow-headers': 'content-type, x-cupid-guest'
  };
  if (origin === new URL(request.url).origin) headers['access-control-allow-origin'] = origin;
  return headers;
}

export async function onRequestOptions(context) {
  if (!sameOriginRequest(context.request, true)) return jsonResponse({ error: 'forbidden_origin' }, 403);
  return new Response(null, { status: 204, headers: corsHeaders(context.request) });
}

export async function onRequestGet(context) {
  const { request, env } = context;
  if (!sameOriginRequest(request)) return jsonResponse({ error: 'forbidden_origin' }, 403);
  if (!env.CUPID_MEDIA_KEY) return jsonResponse({ error: 'media_unavailable' }, 503);
  const sessionGuest = await readMediaSession(request, env);
  const url = new URL(request.url);
  const guestId = (
    request.headers.get('X-Cupid-Guest')
    || url.searchParams.get('guest')
    || url.searchParams.get('guestId')
    || ''
  ).trim();

  if (!sessionGuest || sessionGuest !== guestId) return jsonResponse({ error: 'unauthorized' }, 401);

  if (!isValidGuestId(guestId)) {
    return jsonResponse({ error: 'invalid_guest' }, 400, corsHeaders(request));
  }
  if (!env.DB) {
    return jsonResponse({ error: 'db_unavailable' }, 503, corsHeaders(request));
  }

  const { results } = await env.DB.prepare(
    'SELECT asset_id, unlocked_at FROM cupid_gallery_unlocks WHERE guest_id = ? ORDER BY unlocked_at ASC'
  ).bind(guestId).all();

  return jsonResponse({
    guestId,
    assets: (results || []).map((row) => row.asset_id),
    rows: results || []
  }, 200, corsHeaders(request));
}

export async function onRequestPost(context) {
  const { request, env } = context;
  if (!sameOriginRequest(request, true)) return jsonResponse({ error: 'forbidden_origin' }, 403);
  if (!env.CUPID_MEDIA_KEY) return jsonResponse({ error: 'media_unavailable' }, 503);
  const sessionGuest = await readMediaSession(request, env);
  if (!sessionGuest) return jsonResponse({ error: 'unauthorized' }, 401);
  if (!(request.headers.get('Content-Type') || '').startsWith('application/json')) {
    return jsonResponse({ error: 'invalid_content_type' }, 415);
  }
  if (!env.DB) {
    return jsonResponse({ error: 'db_unavailable' }, 503, corsHeaders(request));
  }

  let body;
  try {
    body = await readSmallJson(request);
  } catch (error) {
    if (error.message === 'body_too_large') return jsonResponse({ error: 'body_too_large' }, 413);
    return jsonResponse({ error: 'invalid_json' }, 400, corsHeaders(request));
  }

  const guestId = String(body?.guestId || body?.guest || request.headers.get('X-Cupid-Guest') || '').trim();
  if (guestId !== sessionGuest) return jsonResponse({ error: 'unauthorized' }, 401);
  if (!isValidGuestId(guestId)) {
    return jsonResponse({ error: 'invalid_guest' }, 400, corsHeaders(request));
  }

  const rawAssets = Array.isArray(body?.assets) ? body.assets : [];
  if (rawAssets.length === 0) {
    return jsonResponse({ error: 'assets_required' }, 400, corsHeaders(request));
  }
  if (rawAssets.length > BATCH_CAP) {
    return jsonResponse({ error: 'batch_cap', cap: BATCH_CAP }, 400, corsHeaders(request));
  }

  const logicalIds = [];
  const seen = new Set();
  for (const item of rawAssets) {
    const id = toLogicalAssetId(item);
    if (!id || !Object.hasOwn(MEDIA_MANIFEST, id) || !isProtectedLogicalId(id) || seen.has(id)) continue;
    seen.add(id);
    logicalIds.push(id);
  }

  if (logicalIds.length === 0) {
    return jsonResponse({ error: 'no_valid_assets' }, 400, corsHeaders(request));
  }

  const now = Date.now();
  const stmts = logicalIds.map((assetId) =>
    env.DB.prepare(
      `INSERT INTO cupid_gallery_unlocks (guest_id, asset_id, unlocked_at)
       VALUES (?, ?, ?)
       ON CONFLICT(guest_id, asset_id) DO NOTHING`
    ).bind(guestId, assetId, now)
  );
  // Overlap storage with the grant write, rather than starting both after it.
  // No bytes/receipt reach the caller unless the D1 transaction commits.
  if (context.waitUntil && logicalIds.length <= 3) context.waitUntil(warmGrantedMedia(context, logicalIds.map(id => {
    const files = MEDIA_MANIFEST[id].files;
    return files.find(file => file.path.endsWith('.webp')) || files[0];
  })));
  await env.DB.batch(stmts);

  return jsonResponse({
    guestId,
    upserted: logicalIds.length,
    assets: logicalIds
  }, 200, { ...corsHeaders(request), 'set-cookie': await createMediaGrant(env, guestId, logicalIds) });
}
