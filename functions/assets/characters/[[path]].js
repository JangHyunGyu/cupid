// Canonical source paths are private too; images must pass the media API's grants.
export function onRequest() {
    return new Response('Not found', { status: 404, headers: { 'cache-control': 'no-store' } });
}
