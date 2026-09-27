// Editing masters are never delivery assets. Preserve them in the repository,
// but do not expose an unencrypted alternate URL on the deployed site.
export function onRequest() {
  return new Response('Not found', { status: 404, headers: { 'cache-control': 'no-store' } });
}
