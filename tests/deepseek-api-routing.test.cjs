'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {
    callDeepSeek,
    normalizeOpenRouterModel,
    parseTextModelRoutes,
    OPENROUTER_ENDPOINT,
    OFFICIAL_DEEPSEEK_ENDPOINT,
    OPENROUTER_MODEL,
    OPENROUTER_GEMMA_MAX_TOKENS,
    OPENROUTER_GEMMA_MODEL,
    OPENROUTER_GEMMA_PROVIDER,
    OPENROUTER_DEEPSEEK_MODEL,
    OPENROUTER_NEMOTRON_MODEL,
    OPENROUTER_QWEN_MODEL,
} = require('../deepseek_api');
const { resolveTextModelAdapter } = require('../model_adapters/index.cjs');

function jsonResponse(status, body) {
    return {
        ok: status >= 200 && status < 300,
        status,
        text: async () => JSON.stringify(body),
    };
}

test('Cupid tools use Gemma 4 31B text through Venice without fallback', async () => {
    const calls = [];
    const text = await callDeepSeek('hello', {
        openRouterApiKey: 'or-test',
        fetchImpl: async (url, init) => {
            calls.push({ url, body: JSON.parse(init.body) });
            return jsonResponse(200, { choices: [{ message: { content: 'ok' } }] });
        },
    });

    assert.equal(text, 'ok');
    assert.equal(calls.length, 1);
    assert.equal(calls[0].url, OPENROUTER_ENDPOINT);
    assert.equal(calls[0].body.model, OPENROUTER_MODEL);
    assert.equal(calls[0].body.model, OPENROUTER_GEMMA_MODEL);
    assert.deepEqual(calls[0].body.provider, {
        order: [OPENROUTER_GEMMA_PROVIDER],
        only: [OPENROUTER_GEMMA_PROVIDER],
        allow_fallbacks: false,
        require_parameters: true,
    });
    assert.deepEqual(calls[0].body.reasoning, { effort: 'none', exclude: true });
    assert.equal(calls[0].body.include_reasoning, false);
    assert.equal('thinking' in calls[0].body, false);
    assert.equal(calls[0].body.max_tokens, OPENROUTER_GEMMA_MAX_TOKENS);
    assert.equal(normalizeOpenRouterModel('deepseek-v4-flash'), OPENROUTER_DEEPSEEK_MODEL);
});

test('Cupid JSON tools use Gemma JSON mode', async () => {
    const calls = [];
    const text = await callDeepSeek('hello', {
        openRouterApiKey: 'or-test',
        json: true,
        fetchImpl: async (url, init) => {
            const body = JSON.parse(init.body);
            calls.push({ url, body });
            return jsonResponse(200, { choices: [{ message: { content: '{"ok":true}' } }] });
        },
    });

    assert.equal(text, '{"ok":true}');
    assert.deepEqual(calls[0].body.response_format, { type: 'json_object' });
    assert.equal('tools' in calls[0].body, false);
    assert.equal('thinking' in calls[0].body, false);
});

test('Cupid default route does not fall back to another model or provider', async () => {
    const calls = [];
    await assert.rejects(callDeepSeek('hello', {
        openRouterApiKey: 'or-test',
        fetchImpl: async (url, init) => {
            calls.push({ url, body: JSON.parse(init.body) });
            return jsonResponse(503, { error: { message: 'temporary' } });
        },
    }), /Text model routes exhausted/);
    assert.equal(calls.length, 1);
    assert.equal(calls[0].body.model, OPENROUTER_GEMMA_MODEL);
});

test('Cupid route configuration can switch to official DeepSeek or any OpenRouter model', async () => {
    assert.deepEqual(parseTextModelRoutes('official:deepseek-v4-flash,openrouter:mistralai/mistral-small'), [
        { provider: 'official', model: 'deepseek-v4-flash' },
        { provider: 'openrouter', model: 'mistralai/mistral-small' },
    ]);

    const calls = [];
    const text = await callDeepSeek('hello', {
        textModelRoutes: 'official:deepseek-v4-flash',
        deepSeekApiKey: 'ds-test',
        fetchImpl: async (url, init) => {
            calls.push({ url, body: JSON.parse(init.body) });
            return jsonResponse(200, { choices: [{ message: { content: 'official-ok' } }] });
        },
    });
    assert.equal(text, 'official-ok');
    assert.equal(calls[0].url, OFFICIAL_DEEPSEEK_ENDPOINT);
    assert.equal(calls[0].body.model, 'deepseek-v4-flash');
    assert.equal('provider' in calls[0].body, false);
});

test('Cupid direct tools keep model-native protocols behind isolated adapters', () => {
    const qwen = resolveTextModelAdapter({ provider: 'openrouter', model: OPENROUTER_QWEN_MODEL });
    const gemma = resolveTextModelAdapter({ provider: 'openrouter', model: OPENROUTER_GEMMA_MODEL });
    const nemotron = resolveTextModelAdapter({ provider: 'openrouter', model: OPENROUTER_NEMOTRON_MODEL });
    const openRouterDeepSeek = resolveTextModelAdapter({ provider: 'openrouter', model: OPENROUTER_DEEPSEEK_MODEL });
    const officialDeepSeek = resolveTextModelAdapter({ provider: 'official', model: 'deepseek-v4-flash' });
    assert.equal(qwen.id, 'openrouter-qwen');
    assert.equal(gemma.id, 'openrouter-generic');
    assert.equal(nemotron.id, 'openrouter-nemotron');
    assert.equal(openRouterDeepSeek.id, 'openrouter-deepseek');
    assert.equal(officialDeepSeek.id, 'official-deepseek');

    const qwenPayload = {};
    qwen.applyPayload(qwenPayload, { wantsJson: true });
    assert.deepEqual(qwenPayload.response_format, { type: 'json_object' });
    assert.deepEqual(qwenPayload.reasoning, { effort: 'none', exclude: true });
    assert.deepEqual(qwenPayload.provider.only, ['alibaba']);
    assert(!('tools' in qwenPayload));

    const gemmaPayload = { model: OPENROUTER_GEMMA_MODEL };
    gemma.applyPayload(gemmaPayload, { wantsJson: true });
    assert.deepEqual(gemmaPayload.provider.only, [OPENROUTER_GEMMA_PROVIDER]);
    assert.equal(gemmaPayload.provider.allow_fallbacks, false);
    assert.deepEqual(gemmaPayload.response_format, { type: 'json_object' });
    assert.deepEqual(gemmaPayload.reasoning, { effort: 'none', exclude: true });

    const nemotronPayload = {};
    nemotron.applyPayload(nemotronPayload, { wantsJson: true });
    assert('tools' in nemotronPayload);
    assert(!('response_format' in nemotronPayload));
    assert(!('thinking' in nemotronPayload));

    const deepSeekPayload = {};
    openRouterDeepSeek.applyPayload(deepSeekPayload, { wantsJson: true });
    assert('response_format' in deepSeekPayload);
    assert('thinking' in deepSeekPayload);
    assert(!('tools' in deepSeekPayload));

    const transportSource = fs.readFileSync(path.join(__dirname, '..', 'deepseek_api.js'), 'utf8');
    assert.doesNotMatch(transportSource, /response_format|tool_calls|tool_choice/);
    assert.match(transportSource, /adapter\.applyPayload/);
    assert.match(transportSource, /adapter\.extractText/);
});

test('Cupid browser FreeTalk requests keep game and gallery provider surfaces separate', () => {
    const mainSource = fs.readFileSync(path.join(__dirname, '..', 'assets/js/modules/FreeTalkSystem.js'), 'utf8');
    const gallerySource = fs.readFileSync(path.join(__dirname, '..', 'assets/js/gallery-freetalk.js'), 'utf8');
    const configSource = fs.readFileSync(path.join(__dirname, '..', 'assets/js/modules/config.js'), 'utf8');
    const serviceWorkerSource = fs.readFileSync(path.join(__dirname, '..', 'service-worker.js'), 'utf8');
    const mainSurfaceHeaders = mainSource.match(/["']x-roleplay-surface["']\s*:\s*["']game["']/g) || [];
    const mainSurfaceBodies = mainSource.match(/roleplaySurface\s*:\s*["']game["']/g) || [];
    const gallerySurfaceHeaders = gallerySource.match(/["']x-roleplay-surface["']\s*:\s*["']gallery["']/g) || [];
    const gallerySurfaceBodies = gallerySource.match(/roleplaySurface\s*:\s*["']gallery["']/g) || [];

    assert.equal(mainSurfaceHeaders.length, 2, 'single and group game FreeTalk must identify the game surface');
    assert.equal(mainSurfaceBodies.length, 2, 'single and group game bodies must preserve the surface contract');
    assert.equal(gallerySurfaceHeaders.length, 1, 'Gallery FreeTalk must identify the gallery surface');
    assert.equal(gallerySurfaceBodies.length, 1, 'Gallery FreeTalk body must preserve the surface contract');
    assert.match(mainSource, /`cupid:ctx:/, 'game cache lineage must remain unchanged');
    assert.match(gallerySource, /`cupid-gft:ctx:/, 'gallery cache lineage must remain unchanged');
    assert.match(configSource, /AI_API_ENDPOINT = "\/api\/ai"/);
    assert.doesNotMatch(mainSource, /openrouter-api\.yama5993\.workers\.dev/);
    assert.doesNotMatch(gallerySource, /openrouter-api\.yama5993\.workers\.dev/);
    assert.match(serviceWorkerSource, /if \(event\.request\.method !== 'GET'\) return;/);
});

test('Cupid Pages proxy forwards the roleplay contract without browser cookies', async () => {
    const proxySource = fs.readFileSync(path.join(__dirname, '..', 'functions/api/ai.js'), 'utf8');
    const executableSource = proxySource.replace('export async function onRequestPost', 'async function onRequestPost');
    let upstreamCall = null;
    const upstreamFetch = async (url, init) => {
        upstreamCall = { url, init };
        return new Response('streamed response', {
            status: 200,
            headers: { 'Content-Type': 'text/event-stream' }
        });
    };
    const createHandler = new Function(
        'Headers',
        'Response',
        'fetch',
        `${executableSource}\nreturn onRequestPost;`
    );
    const handler = createHandler(Headers, Response, upstreamFetch);
    const request = new Request('https://cupid.archerlab.dev/api/ai', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Cookie: 'session=private',
            'x-app-type': 'cupid',
            'x-roleplay-surface': 'game',
            'x-cache-key': 'cupid:ctx:test'
        },
        body: JSON.stringify({ stream: true })
    });

    const response = await handler({ request });
    assert.equal(upstreamCall.url, 'https://openrouter-api.yama5993.workers.dev/');
    assert.equal(upstreamCall.init.headers.get('x-app-type'), 'cupid');
    assert.equal(upstreamCall.init.headers.get('x-roleplay-surface'), 'game');
    assert.equal(upstreamCall.init.headers.get('x-cache-key'), 'cupid:ctx:test');
    assert.equal(upstreamCall.init.headers.has('cookie'), false);
    assert.equal(new TextDecoder().decode(upstreamCall.init.body), JSON.stringify({ stream: true }));
    assert.equal(response.headers.get('Cache-Control'), 'no-store');
    assert.equal(await response.text(), 'streamed response');
});
