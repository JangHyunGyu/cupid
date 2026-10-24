'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const cache = new Map();
const slash = value => value.split(path.sep).join('/');
function inside(root, relative) {
    if (typeof relative !== 'string' || relative.includes('\\') || relative.split('/').includes('..') || path.isAbsolute(relative)) throw new Error('Unsafe asset path: ' + relative);
    const target = path.resolve(root, relative);
    if (!target.startsWith(path.resolve(root) + path.sep)) throw new Error('Asset escaped repository');
    return target;
}
function catalog(root) {
    root = path.resolve(root);
    if (cache.has(root)) return cache.get(root);
    const file = path.join(root, 'config/character-assets.json');
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (data.schemaVersion !== 1 || !Array.isArray(data.assets)) throw new Error('Unsupported character asset schema');
    const aliases = new Map(), sources = new Set(), ids = new Set();
    for (const asset of data.assets) {
        if (ids.has(asset.id)) throw new Error('Duplicate asset ID: ' + asset.id);
        ids.add(asset.id);
        for (const [name, item] of Object.entries(asset.files)) {
            if (item.source !== `assets/characters/${asset.id}/${name}` || !/^(portrait|sprite|chat|thumb)\.(webp|png|jpg|jpeg)$/.test(name)) throw new Error('Noncanonical asset filename: ' + item.source);
            inside(root, item.source);
            if (sources.has(item.source)) throw new Error('Duplicate source: ' + item.source);
            sources.add(item.source);
            if (!item.publicPaths.includes(item.source)) throw new Error('Canonical URL missing');
            for (const url of item.publicPaths) {
                inside(root, url);
                if (aliases.has(url)) throw new Error('Duplicate asset URL: ' + url);
                aliases.set(url, item.source);
            }
        }
    }
    const result = { data, aliases, sources };
    cache.set(root, result);
    return result;
}
function resolveAssetSource(root, relative) {
    const normalized = slash(path.isAbsolute(relative) ? path.relative(root, relative) : relative);
    return inside(root, catalog(root).aliases.get(normalized) || normalized);
}
function allFiles(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
        const file = path.join(dir, entry.name);
        if (entry.isSymbolicLink()) throw new Error('Symlink not allowed in character assets');
        return entry.isDirectory() ? allFiles(file) : [file];
    });
}
function verify(root) {
    const { data, sources, aliases } = catalog(root);
    for (const asset of data.assets) for (const item of Object.values(asset.files)) {
        const bytes = fs.readFileSync(inside(root, item.source));
        if (bytes.length !== item.bytes || crypto.createHash('sha256').update(bytes).digest('hex') !== item.sha256) throw new Error('Asset content changed; run characters:sync: ' + item.source);
    }
    for (const file of allFiles(path.join(root, 'assets/characters'))) {
        if (!sources.has(slash(path.relative(root, file)))) throw new Error('Unregistered character asset: ' + file);
    }
    console.log(`[characters] ${data.assets.length} variants, ${sources.size} source files, ${aliases.size} compatible URLs verified`);
    return { variants: data.assets.length, files: sources.size, urls: aliases.size };
}
function materialize(root, target, { include = () => true } = {}) {
    if (path.resolve(target) === path.resolve(root)) throw new Error('Build character URLs in an output directory, never in the source tree');
    let count = 0;
    for (const [url, source] of catalog(root).aliases) {
        if (!include(source)) continue;
        const dest = inside(target, url);
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.copyFileSync(inside(root, source), dest);
        count++;
    }
    return count;
}
function rewriteReferences(root, text) {
    const data = catalog(root);
    if (!data.pattern) {
        const escape = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        data.pattern = new RegExp([...data.aliases].filter(([url, source]) => url !== source)
            .map(([url]) => url).sort((a, b) => b.length - a.length).map(escape).join('|') || '(?!)', 'g');
    }
    return text.replace(data.pattern, url => data.aliases.get(url));
}
function sync(root) {
    const { data, sources } = catalog(root);
    for (const file of allFiles(path.join(root, 'assets/characters'))) {
        const relative = slash(path.relative(root, file));
        if (sources.has(relative)) continue;
        const match = relative.match(/^assets\/characters\/(.+?)\/(avatar|expressions\/([a-z0-9_-]+))\/(\d{2,})\/((?:portrait|sprite|chat|thumb)\.(?:webp|png|jpg|jpeg))$/);
        if (!match) throw new Error('Unsupported new character path: ' + relative);
        const [, owner, section, expression, variant, filename] = match;
        const id = `${owner}/${section}/${variant}`;
        let asset = data.assets.find(item => item.id === id);
        if (!asset) { asset = { id, characterId: owner.split('/outfits/')[0], ...(owner.includes('/outfits/') ? { outfit: owner.split('/outfits/')[1] } : {}), role: expression ? 'expression' : 'avatar', ...(expression ? { expression } : {}), variant, files: {} }; data.assets.push(asset); }
        asset.files[filename] = { source: relative, publicPaths: [relative] };
    }
    for (const asset of data.assets) for (const item of Object.values(asset.files)) {
        const bytes = fs.readFileSync(inside(root, item.source));
        item.sha256 = crypto.createHash('sha256').update(bytes).digest('hex');
        item.bytes = bytes.length;
    }
    data.assets.sort((a, b) => a.id.localeCompare(b.id, 'en'));
    fs.writeFileSync(path.join(root, 'config/character-assets.json'), JSON.stringify(data, null, 2) + '\n');
    cache.delete(path.resolve(root));
    return verify(root);
}
module.exports = { catalog, resolveAssetSource, verify, materialize, rewriteReferences, inside, sync };
if (require.main === module) {
    const root = path.resolve(__dirname, '..');
    try {
        if (process.argv.includes('--sync')) sync(root);
        else if (process.argv.includes('--list')) console.log(JSON.stringify(catalog(root).data.assets.map(({ files, ...asset }) => ({ ...asset, files: Object.values(files).map(item => item.source) })), null, 2));
        else verify(root);
    } catch (error) { console.error(error.message); process.exitCode = 1; }
}
