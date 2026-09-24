'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');
const { readPlainMedia } = require('../scripts/lib/read-plain-media.cjs');

const root = path.resolve(__dirname, '..');
const port = Number.parseInt(process.env.CUPID_E2E_PORT || '4173', 10);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`Invalid CUPID_E2E_PORT: ${process.env.CUPID_E2E_PORT}`);
}
const mime = {
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.mp3': 'audio/mpeg'
};

const plainCache = new Map();

function contentTypeForAsset(assetPath) {
    const lower = String(assetPath || '').toLowerCase();
    if (lower.endsWith('.webp')) return 'image/webp';
    if (lower.endsWith('.png')) return 'image/png';
    if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
    return 'application/octet-stream';
}

function mediaCandidates(assetParam) {
    const raw = String(assetParam || '').split('?')[0].replace(/^\/+/, '');
    const stripped = raw.replace(/^assets\/images\//, '').replace(/\.(png|webp|jpe?g)$/i, '');
    if (!stripped || stripped.includes('..')) return [];
    const extensions = ['.webp', '.png', '.jpg', '.jpeg'];
    if (/\.png$/i.test(raw)) extensions.sort((a, b) => Number(b === '.png') - Number(a === '.png'));
    return extensions.map((ext) => ({
        relative: `assets/images/${stripped}${ext}`,
        full: path.join(root, 'assets', 'images', `${stripped}${ext}`)
    }));
}

function sendMedia(assetParam, response) {
    try {
    for (const candidate of mediaCandidates(assetParam)) {
        if (!fs.existsSync(candidate.full) || !fs.statSync(candidate.full).isFile()) continue;
        const plain = plainCache.get(candidate.full) || readPlainMedia(candidate.full);
        plainCache.set(candidate.full, plain);
        if (plain.subarray(0, 9).toString('ascii') === 'CUPIDENC1') continue;
        response.writeHead(200, {
            'content-type': contentTypeForAsset(candidate.relative),
            'cache-control': 'private, max-age=60'
        });
        response.end(plain);
        return;
    }
    response.writeHead(404, { 'content-type': 'application/json; charset=utf-8' });
    response.end(JSON.stringify({ error: 'asset_missing' }));
    } catch (err) {
        response.writeHead(500, { 'content-type': 'application/json; charset=utf-8' });
        response.end(JSON.stringify({ error: 'decrypt_failed', message: String(err && err.message || err) }));
    }
}

http.createServer((request, response) => {
    const requestUrl = new URL(request.url, 'http://localhost');
    const pathname = decodeURIComponent(requestUrl.pathname);
    if (pathname === '/api/media') {
        sendMedia(requestUrl.searchParams.get('asset') || '', response);
        return;
    }
    if (pathname === '/api/gallery/unlocks') {
        response.writeHead(200, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' });
        response.end(JSON.stringify({ upserted: 1, assets: [] }));
        return;
    }
    if (pathname === '/__cupid_e2e_health') {
        response.writeHead(200, {
            'cache-control': 'no-store',
            'content-type': 'text/plain; charset=utf-8'
        }).end('cupid-e2e-static-server');
        return;
    }
    const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
    let fullPath = path.resolve(root, relative);
    if (!fs.existsSync(fullPath) && !path.extname(fullPath) && fs.existsSync(`${fullPath}.html`)) {
        fullPath = `${fullPath}.html`;
    }
    if (!fullPath.startsWith(root + path.sep) || !fs.existsSync(fullPath) || fs.statSync(fullPath).isDirectory()) {
        response.writeHead(404).end('not found');
        return;
    }
    response.writeHead(200, { 'content-type': mime[path.extname(fullPath).toLowerCase()] || 'application/octet-stream' });
    fs.createReadStream(fullPath).pipe(response);
}).listen(port, '127.0.0.1');
