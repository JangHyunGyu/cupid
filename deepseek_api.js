const fs = require('fs');
const path = require('path');

const DEEPSEEK_ENDPOINT = 'https://api.deepseek.com/chat/completions';
const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || 'deepseek-v4-flash';

function readDeepSeekApiKey() {
    if (process.env.DEEPSEEK_API_KEY) return process.env.DEEPSEEK_API_KEY.trim();
    const candidates = [
        path.join(__dirname, '..', 'nevergrad', '.env'),
        path.join(__dirname, '..', '.env.txt'),
    ];
    for (const file of candidates) {
        const content = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
        const key = content.match(/^DEEPSEEK_API_KEY=(.+)$/m)?.[1]?.trim().replace(/^["']|["']$/g, '');
        if (key) return key;
    }
    throw new Error('DEEPSEEK_API_KEY not found');
}

async function callDeepSeek(prompt, options = {}) {
    const apiKey = readDeepSeekApiKey();
    const wantsJson = options.json === true;
    const response = await fetch(DEEPSEEK_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: DEEPSEEK_MODEL,
            messages: [{ role: 'user', content: prompt }],
            thinking: { type: 'disabled' },
            temperature: Number.isFinite(options.temperature) ? options.temperature : 0.2,
            max_tokens: Number.isFinite(options.maxTokens) ? options.maxTokens : 8192,
            ...(wantsJson ? { response_format: { type: 'json_object' } } : {}),
        }),
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
        throw new Error(`DeepSeek API error (${response.status}): ${detail}`);
    }
    const text = data?.choices?.[0]?.message?.content || '';
    if (!text.trim()) throw new Error('Empty DeepSeek response');
    return text;
}

module.exports = { callDeepSeek, readDeepSeekApiKey, DEEPSEEK_MODEL };
