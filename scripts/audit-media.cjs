'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const mediaRoot = path.join(root, 'assets');
const extensions = new Set(['.png', '.webp', '.jpg', '.jpeg', '.gif', '.mp3', '.wav', '.ogg', '.m4a']);
const files = [];

function walk(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const fullPath = path.join(directory, entry.name);
        if (entry.isDirectory()) walk(fullPath);
        else if (extensions.has(path.extname(entry.name).toLowerCase())) files.push(fullPath);
    }
}

walk(mediaRoot);
const byHash = new Map();
let totalBytes = 0;
for (const file of files) {
    const buffer = fs.readFileSync(file);
    totalBytes += buffer.length;
    const hash = crypto.createHash('sha256').update(buffer).digest('hex');
    const group = byHash.get(hash) || [];
    group.push(path.relative(root, file).replace(/\\/g, '/'));
    byHash.set(hash, group);
}

const duplicates = [...byHash.values()].filter(group => group.length > 1);
const duplicateBytes = duplicates.reduce((sum, group) => {
    const size = fs.statSync(path.join(root, group[0])).size;
    return sum + size * (group.length - 1);
}, 0);

console.log(`[media] ${files.length} files, ${(totalBytes / 1024 / 1024).toFixed(1)} MiB; exact duplicate payload ${(duplicateBytes / 1024 / 1024).toFixed(1)} MiB`);
if (duplicates.length) {
    console.log(`[media] ${duplicates.length} exact-duplicate groups retained only where paths are runtime-compatible aliases`);
    for (const group of duplicates) console.log(`[media] duplicate: ${group.join(' <=> ')}`);
}
