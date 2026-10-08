'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const zlib = require('node:zlib');
const { createRequire } = require('node:module');
const { readPlainMedia } = require('../scripts/lib/read-plain-media.cjs');
const root = path.resolve(__dirname, '..');

test('all collectible CGs have authored backgrounds, including appended multilingual entries', () => {
    const context = { window: {} };
    vm.createContext(context);
    vm.runInContext(fs.readFileSync(path.join(root, 'assets/js/gallery-data.js'), 'utf8'), context);
    for (const file of fs.readdirSync(path.join(root, 'assets/js/scenario')).filter(f => /^day.*\.js$/.test(f))) {
        vm.runInContext(fs.readFileSync(path.join(root, 'assets/js/scenario', file), 'utf8'), context);
    }
    const backgrounds = new Set(Object.values(context.SCENARIO).flatMap(day => Object.values(day).map(scene => scene.background)));
    const gallery = context.window.GalleryData;
    for (const lang of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt', 'zh']) {
        const list = gallery.getCGList(lang);
        assert.equal(list.length, 33);
        assert.equal(list.some(cg => cg.id === 'nurse_home_event1'), false);
        for (const cg of list) assert.ok(backgrounds.has(cg.file), `${lang}/${cg.id}`);
    }
    assert.equal(context.SCENARIO[2].lunch2_seo_end_c1.character, 'assets/images/characters/dain_normal.png');
    assert.equal(context.SCENARIO[5].hidden_perfect_nurse_ep1.background, 'assets/images/background/ending_perfect_nurse.png');
});

function pngAlpha(bytes) {
    let width, height, compressed = [];
    for (let offset = 8; offset < bytes.length;) {
        const size = bytes.readUInt32BE(offset), type = bytes.toString('ascii', offset + 4, offset + 8);
        const chunk = bytes.subarray(offset + 8, offset + 8 + size);
        if (type === 'IHDR') {
            width = chunk.readUInt32BE(0); height = chunk.readUInt32BE(4);
            assert.equal(chunk[8], 8); assert.equal(chunk[9], 6); assert.equal(chunk[12], 0);
        }
        if (type === 'IDAT') compressed.push(chunk);
        offset += 12 + size;
    }
    const raw = zlib.inflateSync(Buffer.concat(compressed)), stride = width * 4;
    let previous = Buffer.alloc(stride), transparent = 0, opaque = 0;
    for (let y = 0; y < height; y++) {
        const filter = raw[y * (stride + 1)], row = Buffer.from(raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1)));
        for (let x = 0; x < stride; x++) {
            const left = x >= 4 ? row[x - 4] : 0, up = previous[x], corner = x >= 4 ? previous[x - 4] : 0;
            const estimate = left + up - corner;
            const pa = Math.abs(estimate - left), pb = Math.abs(estimate - up), pc = Math.abs(estimate - corner);
            const predictor = [0, left, up, Math.floor((left + up) / 2), pa <= pb && pa <= pc ? left : pb <= pc ? up : corner][filter];
            assert.notEqual(predictor, undefined);
            row[x] = (row[x] + predictor) & 255;
            if (x % 4 === 3) { if (row[x] === 0) transparent++; if (row[x] >= 248) opaque++; }
        }
        previous = row;
    }
    return { width, height, transparent, opaque };
}

test('repaired standing expressions contain real alpha without changing native dimensions', () => {
    for (const name of ['yuna_laugh', 'yuna_pout', 'nurse_smile', 'nurse_sad']) {
        const rel = `assets/images/characters/${name}.png`;
        const decoded = readPlainMedia(path.join(root, rel));
        const { width, height, transparent, opaque } = pngAlpha(decoded);
        assert.equal(width, 864); assert.equal(height, 1152);
        assert.ok(transparent > width * height * 0.1, name);
        assert.ok(opaque > width * height * 0.3, name);
        assert.deepEqual(decoded, fs.readFileSync(path.join(root, 'tests/fixtures/corrected-media', rel)));
    }
});

for (const newline of ['\n', '\r\n']) test(`metadata check accepts ${JSON.stringify(newline)} and still detects stale versions`, () => {
    const filename = path.join(root, 'scripts/sync-build-metadata.cjs');
    const realRequire = createRequire(filename);
    const code = fs.readFileSync(filename, 'utf8');
    for (const stale of [false, true]) {
        const processStub = { argv: ['node', filename, '--check'] };
        vm.runInNewContext(code, {
            __dirname: path.dirname(filename), process: processStub, console: { log() {}, error() {} },
            require(name) {
                if (name !== 'fs') return realRequire(name);
                return { ...fs, readFileSync(file, encoding) {
                    let value = fs.readFileSync(file, encoding);
                    if (typeof value === 'string' && String(file).endsWith('.html')) {
                        value = value.replace(/\r\n/g, '\n').replace(/\n/g, newline);
                        if (stale) value = value.replace(/runtime-support\.js\?v=[0-9.]+/, 'runtime-support.js?v=0.0.0');
                    }
                    return value;
                }, writeFileSync() { throw new Error('Check mode must not write'); } };
            }
        });
        assert.equal(processStub.exitCode || 0, stale ? 1 : 0);
    }
});

test('validator returns a failure status for an injected missing background', () => {
    const file = path.join(root, 'validate.js'), realRequire = createRequire(file);
    const processStub = { argv: ['node', file, '--no-report', '--seed=cupid-ci'], execPath: process.execPath, env: process.env };
    const output = [];
    vm.runInNewContext(fs.readFileSync(file, 'utf8'), {
        __dirname: root, process: processStub, Buffer, URL, console: { log: (...args) => output.push(args.join(' ')), warn() {}, error() {} },
        require(name) {
            if (name !== 'fs') return realRequire(name);
            return { ...fs, readFileSync(filePath, encoding) {
                const value = fs.readFileSync(filePath, encoding);
                return String(filePath).endsWith('day1_1_morning.js') && typeof value === 'string'
                    ? value.replace('assets/images/background/school.png', 'assets/images/background/missing-audit-fixture.png') : value;
            } };
        }
    });
    assert.ok(output.some(line => line.includes('missing-audit-fixture')));
    assert.equal(processStub.exitCode, 1);
});
