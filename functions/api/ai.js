const AI_UPSTREAM_URL = 'https://openrouter-api.yama5993.workers.dev/';
const FORWARDED_HEADERS = [
    'accept',
    'content-type',
    'x-app-type',
    'x-roleplay-surface',
    'x-request-type',
    'x-chat-mode',
    'x-response-schema',
    'x-output-language',
    'x-cache-key'
];

export async function onRequestPost({ request }) {
    const headers = new Headers();
    FORWARDED_HEADERS.forEach(name => {
        const value = request.headers.get(name);
        if (value) headers.set(name, value);
    });

    const response = await fetch(AI_UPSTREAM_URL, {
        method: 'POST',
        headers,
        body: await request.arrayBuffer(),
        redirect: 'manual'
    });
    const responseHeaders = new Headers(response.headers);
    responseHeaders.set('Cache-Control', 'no-store');
    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders
    });
}
