'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');

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
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.mp3': 'audio/mpeg'
};

http.createServer((request, response) => {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
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
