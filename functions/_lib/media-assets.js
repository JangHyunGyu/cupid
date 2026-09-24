/**
 * Protected asset path helpers shared by Pages Functions.
 */

const IMAGE_EXT = ['.webp', '.png', '.jpg', '.jpeg'];

/** Keep in sync with REGISTERED_CG_IDS / gallery-data CG filenames. */
export const GALLERY_CG_BASES = Object.freeze([
  'ending_perfect_haeun',
  'event_haeun_trust',
  'event_haeun_reputation',
  'nurse_home_event1',
  'dain_hurt_event1',
  'dain_depression_event1',
  'ending_perfect_seoyeon',
  'ending_perfect_yuna',
  'ending_perfect_dain',
  'ending_bittersweet',
  'ending_true_teacher',
  'ending_true_nurse',
  'ending_harem',
  'ending_alone',
  'ending_friend',
  'ending_good_seoyeon',
  'ending_good_yuna',
  'ending_good_dain',
  'ending_confess_fail_seoyeon',
  'ending_confess_fail_yuna',
  'ending_confess_fail_dain',
  'ending_mayhem',
  'event_temptation_seoyeon',
  'event_temptation_yuna',
  'event_temptation_dain',
  'ending_bittersweet_teacher',
  'ending_bittersweet_nurse',
  'ending_good_teacher',
  'ending_good_nurse',
  'ending_true_seoyeon',
  'ending_true_yuna',
  'ending_true_dain',
  'ending_perfect_teacher',
  'ending_perfect_nurse'
]);

const CG_SET = new Set(GALLERY_CG_BASES);

export function normalizeAssetInput(raw) {
  return String(raw || '').split('?')[0].replace(/^\/+/, '').replace(/\\/g, '/');
}

export function toLogicalAssetId(raw) {
  let p = normalizeAssetInput(raw);
  if (!p || p.includes('..')) return null;
  if (p.startsWith('assets/images/')) p = p.slice('assets/images/'.length);
  p = p.replace(/\.(png|webp|jpg|jpeg)$/i, '');
  return p;
}

export function isProtectedLogicalId(logicalId) {
  if (!logicalId || logicalId.includes('..')) return false;
  if (logicalId.startsWith('characters/')) return true;
  const base = logicalId.startsWith('background/')
    ? logicalId.slice('background/'.length)
    : logicalId;
  return CG_SET.has(base);
}

export function candidateStaticPaths(logicalId) {
  const id = toLogicalAssetId(logicalId);
  if (!id) return [];
  const paths = [];
  for (const ext of IMAGE_EXT) {
    paths.push(`assets/images/${id}${ext}`);
  }
  return paths;
}

export function isValidGuestId(guestId) {
  return typeof guestId === 'string'
    && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(guestId.trim());
}

export function jsonResponse(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      ...extraHeaders
    }
  });
}
