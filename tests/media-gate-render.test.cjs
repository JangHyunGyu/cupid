const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');
const test = require('node:test');
const vm = require('node:vm');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');

function bootMediaGate(options = {}) {
    const store = new Map();
    const sandbox = {
        URL,
        console,
        setTimeout(fn) { fn(); },
        fetch: options.fetch || (async url => ({ ok: true, json: async () => url === '/api/media-session'
            ? { guestId: '11111111-1111-4111-8111-111111111111' } : {} })),
        location: { href: 'http://127.0.0.1/' },
        document: {
            readyState: 'complete',
            addEventListener() {},
            querySelectorAll() { return []; }
        },
        localStorage: {
            getItem: (key) => store.get(key) ?? null,
            setItem: (key, value) => store.set(key, String(value))
        },
        sessionStorage: {
            getItem: (key) => store.get(`session:${key}`) ?? null,
            setItem: (key, value) => store.set(`session:${key}`, String(value))
        },
        crypto: { randomUUID: () => '11111111-1111-4111-8111-111111111111' }
    };
    if (options.Image) sandbox.Image = options.Image;
    sandbox.window = sandbox;
    sandbox.globalThis = sandbox;
    vm.runInNewContext(
        fs.readFileSync(path.join(root, 'assets/js/media-gate.js'), 'utf8'),
        sandbox,
        { filename: 'media-gate.js' }
    );
    return sandbox.window.CupidMedia;
}

test('protected gameplay paths request WebP through the media API', () => {
    const media = bootMediaGate();
    const url = media.resolveUrl('assets/images/characters/seyoun_normal.png');
    assert.match(url, /^\/api\/media\?/);
    assert.match(url, /seyoun_normal\.webp/);
    assert.doesNotMatch(url, /seyoun_normal\.png/);
    assert.equal(
        media.preferWebpUrl('/api/media?asset=assets%2Fimages%2Fcharacters%2Fdain_angry.png&guest=11111111-1111-4111-8111-111111111111'),
        '/api/media?asset=assets%2Fimages%2Fcharacters%2Fdain_angry.webp&guest=11111111-1111-4111-8111-111111111111'
    );
});

test('image reads and failed reads never register an unlock', async () => {
    const calls = [];
    const media = bootMediaGate({ fetch: async (url, init) => {
        calls.push(url);
        return { ok: true, json: async () => ({ guestId: '11111111-1111-4111-8111-111111111111' }) };
    } });
    await media.ensureSession();
    const img = {};
    media.loadImageWithMediaFallback(img, 'characters/dain_bikini');
    await new Promise(resolve => setImmediate(resolve));
    assert.match(img.src, /dain_bikini/);
    img.onerror();
    await new Promise(resolve => setImmediate(resolve));
    assert.deepEqual(calls, ['/api/media-session']);
});

test('concurrent explicit grants share a batch and image loading waits for acknowledgement', async () => {
    const calls = [];
    let acknowledge;
    const media = bootMediaGate({ fetch: async (url, init) => {
        calls.push(url);
        if (url === '/api/media-session') return { ok: true, json: async () => ({ guestId: '11111111-1111-4111-8111-111111111111' }) };
        const body = JSON.parse(init.body);
        await new Promise(resolve => { acknowledge = resolve; });
        return { ok: true, json: async () => ({ assets: body.assets }) };
    } });
    await media.ensureSession();
    const a = media.unlock(['characters/dain_laugh']);
    const b = media.unlock(['characters/dain_laugh', 'characters/dain_angry']);
    const img = {};
    media.loadImageWithMediaFallback(img, 'characters/dain_laugh');
    await new Promise(resolve => setImmediate(resolve));
    assert.equal(img.src, undefined);
    assert.equal(calls.filter(url => url === '/api/gallery/unlocks').length, 1);
    acknowledge();
    await Promise.all([a, b]);
    await new Promise(resolve => setImmediate(resolve));
    assert.match(img.src, /dain_laugh/);
    await media.unlock(['characters/dain_laugh']);
    assert.equal(calls.filter(url => url === '/api/gallery/unlocks').length, 1);
});

test('preloading skips locked media and content URLs stay stable across app versions', async () => {
    const images = [];
    function Image() { images.push(this); }
    const media = bootMediaGate({ Image });
    media.preloadUnlocked(['characters/dain_bikini']);
    assert.equal(images.length, 0);
    media.preloadUnlocked(['characters/dain_normal', 'characters/yuna_normal']);
    media.preloadUnlocked(['characters/teacher_normal']);
    assert.equal(images.length, 2, 'at most two concurrent speculative image loads');
    const url = media.mediaUrl('characters/dain_normal');
    assert.match(url, /&v=[a-f0-9]{24}$/);
    assert.doesNotMatch(url, /guest=/);
});

test('title normals are public and story CGs stay unlock-gated', () => {
    const media = bootMediaGate();
    assert.equal(media.isPublicLogical('characters/dain_normal'), true);
    assert.equal(media.isPublicLogical('characters/dain_bikini'), false);
    assert.equal(media.isProtectedPath('assets/images/characters/dain_bikini.png'), true);
    assert.equal(media.isProtectedPath('assets/images/background/ending_perfect_haeun.png'), true);
    assert.equal(media.isProtectedPath('assets/images/background/school_hallway.png'), false);
    const title = media.resolveUrl('assets/images/characters/yuna_normal.png');
    assert.match(title, /yuna_normal\.webp/);
});

test('server candidate order and public ids match the client', async () => {
    const server = await import(pathToFileURL(path.join(root, 'functions/_lib/media-assets.js')).href);
    const publicIds = [
        'characters/dain_normal',
        'characters/teacher_normal',
        'characters/seyoun_normal',
        'characters/nurse_normal',
        'characters/yuna_normal'
    ];
    assert.deepEqual([...server.PUBLIC_LOGICAL_IDS], publicIds);
    for (const id of publicIds) assert.equal(server.isPublicLogicalId(id), true);
    assert.equal(server.isPublicLogicalId('characters/dain_bikini'), false);
    assert.equal(server.isProtectedLogicalId('background/ending_perfect_haeun'), true);
    assert.equal(server.isProtectedLogicalId('background/school_hallway'), false);
    assert.equal(server.candidateStaticPaths('characters/seyoun_smile')[0], 'assets/images/characters/seyoun_smile.webp');
});
