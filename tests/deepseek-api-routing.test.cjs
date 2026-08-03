'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const {
    callDeepSeek,
    normalizeOpenRouterModel,
    OPENROUTER_ENDPOINT,
    OFFICIAL_DEEPSEEK_ENDPOINT,
} = require('../deepseek_api');

function jsonResponse(status, body) {
    return {
        ok: status >= 200 && status < 300,
        status,
        text: async () => JSON.stringify(body),
    };
}

test('Cupid tools pin DeepSeek V4 Flash to DeepInfra through OpenRouter', async () => {
    const calls = [];
    const text = await callDeepSeek('hello', {
        openRouterApiKey: 'or-test',
        deepSeekApiKey: 'ds-test',
        fetchImpl: async (url, init) => {
            calls.push({ url, init, body: JSON.parse(init.body) });
            return jsonResponse(200, { choices: [{ message: { content: 'ok' } }] });
        },
    });

    assert.equal(text, 'ok');
    assert.equal(calls.length, 1);
    assert.equal(calls[0].url, OPENROUTER_ENDPOINT);
    assert.equal(calls[0].body.model, 'deepseek/deepseek-v4-flash-0731');
    assert.deepEqual(calls[0].body.provider, {
        order: ['deepinfra'],
        only: ['deepinfra'],
        allow_fallbacks: false,
    });
    assert.deepEqual(calls[0].body.thinking, { type: 'disabled' });
    assert.equal(normalizeOpenRouterModel('deepseek-v4-flash'), 'deepseek/deepseek-v4-flash-0731');
});

test('Cupid tools fall back to the official DeepSeek API after OpenRouter failure', async () => {
    const calls = [];
    const text = await callDeepSeek('hello', {
        openRouterApiKey: 'or-test',
        deepSeekApiKey: 'ds-test',
        fetchImpl: async (url, init) => {
            const body = JSON.parse(init.body);
            calls.push({ url, body });
            if (url === OPENROUTER_ENDPOINT) return jsonResponse(503, { error: { message: 'temporary' } });
            return jsonResponse(200, { choices: [{ message: { content: 'official-ok' } }] });
        },
    });

    assert.equal(text, 'official-ok');
    assert.deepEqual(calls.map((call) => call.url), [OPENROUTER_ENDPOINT, OFFICIAL_DEEPSEEK_ENDPOINT]);
    assert.equal(calls[1].body.model, 'deepseek-v4-flash');
    assert.equal('provider' in calls[1].body, false);
});
