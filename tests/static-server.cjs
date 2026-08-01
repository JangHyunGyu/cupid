'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');

const root = path.resolve(__dirname, '..');
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
}).listen(4173, '127.0.0.1');
