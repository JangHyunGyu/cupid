/**
 * Gallery unlock ledger API.
 * POST /api/gallery/unlocks  { guestId, assets: string[] }
 * GET  /api/gallery/unlocks?guest=...
 *
 * Threat note: unlock POSTs are forgeable. This gates direct static URL spoiling,
 * not determined API abuse. Public git history may still hold plaintext blobs.
 */

import {
  toLogicalAssetId,
  isProtectedLogicalId,
  isValidGuestId,
  jsonResponse
} from '../../_lib/media-assets.js';

const BATCH_CAP = 100;

function corsHeaders(request) {
  const origin = request.headers.get('Origin') || '';
  const headers = {
    'cache-control': 'no-store',
    'access-control-allow-methods': 'GET, POST, OPTIONS',
    'access-control-allow-headers': 'content-type, x-cupid-guest'
  };
  if (origin) headers['access-control-allow-origin'] = origin;
  return headers;
}

export async function onRequestOptions(context) {
  return new Response(null, { status: 204, headers: corsHeaders(context.request) });
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const guestId = (
    request.headers.get('X-Cupid-Guest')
    || url.searchParams.get('guest')
    || url.searchParams.get('guestId')
    || ''
  ).trim();

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
  if (!env.DB) {
    return jsonResponse({ error: 'db_unavailable' }, 503, corsHeaders(request));
  }

  let body;
  try {
    body = await request.json();
  } catch (_) {
    return jsonResponse({ error: 'invalid_json' }, 400, corsHeaders(request));
  }

  const guestId = String(body?.guestId || body?.guest || request.headers.get('X-Cupid-Guest') || '').trim();
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
    if (!id || !isProtectedLogicalId(id) || seen.has(id)) continue;
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
  await env.DB.batch(stmts);

  return jsonResponse({
    guestId,
    upserted: logicalIds.length,
    assets: logicalIds
  }, 200, corsHeaders(request));
}
