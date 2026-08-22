const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const characterIds = ['seyoun', 'yuna', 'dain', 'teacher', 'nurse'];
const dedicatedAssetIds = ['seyoun', 'yuna', 'dain', 'teacher', 'nurse'];
const languages = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt'];

function read(relativePath) {
    return fs.readFileSync(path.join(root, relativePath));
}

test('every romance character exposes the climax expression in every gallery language', () => {
    const sandbox = { window: {} };
    vm.runInNewContext(read('assets/js/gallery-data.js').toString('utf8'), sandbox);

    for (const language of languages) {
        for (const charId of characterIds) {
            assert.ok(
                sandbox.window.GalleryData.getCharacter(language, charId).expressions.includes('climax'),
                `${language}/${charId} is missing climax`
            );
        }
        assert.notEqual(sandbox.window.GalleryData.getExpressionName(language, 'climax'), 'climax');
    }
});

test('climax assets are valid transparent PNG and WebP files', () => {
    for (const charId of dedicatedAssetIds) {
        const png = read(`assets/images/characters/${charId}_climax.png`);
        const webp = read(`assets/images/characters/${charId}_climax.webp`);

        assert.deepEqual([...png.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
        assert.equal(png[25], 6, `${charId} PNG must use RGBA color`);
        assert.equal(webp.subarray(0, 4).toString('ascii'), 'RIFF');
        assert.equal(webp.subarray(8, 12).toString('ascii'), 'WEBP');
        assert.ok(webp.includes(Buffer.from('ALPH')), `${charId} WebP must preserve transparency`);
    }
});

test('main and gallery free talk register climax with a strict actual-climax guard', () => {
    const prompts = read('assets/js/prompts.js').toString('utf8');
    const gallery = read('assets/js/gallery-freetalk.js').toString('utf8');
    const core = read('assets/js/freetalk-core.js').toString('utf8');

    for (const charId of dedicatedAssetIds) {
        assert.match(prompts, new RegExp(`climax: 'assets/images/characters/${charId}_climax\\.png'`));
    }
    for (const charId of characterIds) {
        assert.match(gallery, new RegExp(`${charId}: \\[[^\\]]*'climax'`));
    }
    assert.match(core, /climax는 성인 간 성행위에서 이번 응답에 절정이 있을 때만/);
    assert.match(core, /Use climax only for an orgasm in this response during consensual adult sex/);
});
