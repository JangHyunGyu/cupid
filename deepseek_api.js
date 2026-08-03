const fs = require('fs');
const path = require('path');

const OPENROUTER_ENDPOINT = 'https://openrouter.ai/api/v1/chat/completions';
const OFFICIAL_DEEPSEEK_ENDPOINT = 'https://api.deepseek.com/chat/completions';
const OPENROUTER_MODEL = 'deepseek/deepseek-v4-flash-0731';
const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || 'deepseek-v4-flash';
const OPENROUTER_PROVIDER = 'deepinfra';

const ENV_FILES = [
    path.join(__dirname, '.env'),
    path.join(__dirname, '..', 'nevergrad', '.env'),
    path.join(__dirname, '..', '.env.txt'),
];

function readOptionalApiKey(name) {
    if (process.env[name]) return process.env[name].trim();
    for (const file of ENV_FILES) {
        const content = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
        const key = content.match(new RegExp(`^${name}=(.+)$`, 'm'))?.[1]?.trim().replace(/^["']|["']$/g, '');
        if (key) return key;
    }
    return '';
}

function readDeepSeekApiKey() {
    const key = readOptionalApiKey('DEEPSEEK_API_KEY');
    if (!key) throw new Error('DEEPSEEK_API_KEY not found');
    return key;
}

function readOpenRouterApiKey() {
    const key = readOptionalApiKey('OPENROUTER_API_KEY');
    if (!key) throw new Error('OPENROUTER_API_KEY not found');
    return key;
}

function normalizeOpenRouterModel(value) {
    const model = String(value || '').trim();
    if (!model || model === 'deepseek-v4-flash' || model === 'deepseek/deepseek-v4-flash') {
        return OPENROUTER_MODEL;
    }
    return model.includes('/') ? model : `deepseek/${model}`;
}

async function requestDeepSeekRoute(route, prompt, options) {
    const wantsJson = options.json === true;
    const payload = {
        model: route.model,
        messages: [{ role: 'user', content: prompt }],
        thinking: { type: 'disabled' },
        temperature: Number.isFinite(options.temperature) ? options.temperature : 0.2,
        max_tokens: Number.isFinite(options.maxTokens) ? options.maxTokens : 8192,
        ...(wantsJson ? { response_format: { type: 'json_object' } } : {}),
    };
    if (route.provider === 'openrouter') {
        payload.provider = {
            order: [OPENROUTER_PROVIDER],
            only: [OPENROUTER_PROVIDER],
            allow_fallbacks: false,
        };
    }

    const response = await options.fetchImpl(route.endpoint, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${route.apiKey}`,
            'Content-Type': 'application/json',
            ...(route.provider === 'openrouter' ? {
                'HTTP-Referer': 'https://cupid.archerlab.dev',
                'X-Title': 'Cupid DeepSeek Tools',
            } : {}),
        },
        body: JSON.stringify(payload),
    });
    const responseText = await response.text();
    let data;
    try {
        data = responseText ? JSON.parse(responseText) : {};
    } catch {
        data = {};
    }
    if (!response.ok) {
        const detail = data?.error?.message || responseText.slice(0, 500);
        throw new Error(`${route.provider} API error (${response.status}): ${detail}`);
    }
    const text = data?.choices?.[0]?.message?.content || '';
    if (!text.trim()) throw new Error(`${route.provider} returned an empty response`);
    return text;
}

async function callDeepSeek(prompt, options = {}) {
    const fetchImpl = options.fetchImpl || globalThis.fetch;
    if (typeof fetchImpl !== 'function') throw new Error('fetch is unavailable');

    const openRouterApiKey = options.openRouterApiKey ?? readOptionalApiKey('OPENROUTER_API_KEY');
    const deepSeekApiKey = options.deepSeekApiKey ?? readOptionalApiKey('DEEPSEEK_API_KEY');
    const routes = [
        ...(openRouterApiKey ? [{
            provider: 'openrouter',
            endpoint: OPENROUTER_ENDPOINT,
            model: normalizeOpenRouterModel(
                options.openRouterModel || process.env.OPENROUTER_MODEL || process.env.DEEPSEEK_MODEL
            ),
            apiKey: openRouterApiKey,
        }] : []),
        ...(deepSeekApiKey ? [{
            provider: 'official',
            endpoint: OFFICIAL_DEEPSEEK_ENDPOINT,
            model: options.deepSeekModel || DEEPSEEK_MODEL,
            apiKey: deepSeekApiKey,
        }] : []),
    ];
    if (!routes.length) throw new Error('OPENROUTER_API_KEY and DEEPSEEK_API_KEY not found');

    const errors = [];
    for (const route of routes) {
        try {
            return await requestDeepSeekRoute(route, prompt, { ...options, fetchImpl });
        } catch (error) {
            errors.push(`${route.provider}: ${error?.message || String(error)}`);
        }
    }
    throw new Error(`DeepSeek providers exhausted: ${errors.join(' | ')}`);
}

module.exports = {
    callDeepSeek,
    readDeepSeekApiKey,
    readOpenRouterApiKey,
    OPENROUTER_ENDPOINT,
    OFFICIAL_DEEPSEEK_ENDPOINT,
    OPENROUTER_MODEL,
    DEEPSEEK_MODEL,
    OPENROUTER_PROVIDER,
    normalizeOpenRouterModel,
};
