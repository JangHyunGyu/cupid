'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadCorpus, inspect } = require('../scripts/audit-scene-visuals.cjs');
const root = path.resolve(__dirname, '..');

test('new relationship artwork is connected without changing existing Haeun unlock thresholds', () => {
    const festival = fs.readFileSync(path.join(root, 'assets/images/background/school_festival.png'));
    assert.equal(festival.readUInt32BE(16), 2880);
    assert.equal(festival.readUInt32BE(20), 2880);
    const { rows, GalleryData } = loadCorpus();
    const scene = id => rows.find(row => row.id === id).scene;
    assert.match(scene('date_seo_1').character, /seyoun_date_normal/);
    assert.match(scene('date_seo_pretty_high_3').character, /seyoun_date_shy/);
    assert.match(scene('date_seo_tentative_1').character, /seyoun_date_worried/);
    assert.match(scene('date_seo_tentative_2').character, /seyoun_date_sad/);
    assert.match(scene('date_seo_succulent_3').background, /event_seoyeon_succulent/);
    assert.equal(scene('date_seo_succulent_3').character, null);
    assert.match(scene('lunch_yuna_18').background, /event_yuna_reading/);
    assert.equal(scene('lunch_yuna_18').character, null);
    assert.match(scene('lunch_yuna_20').background, /library_old/);
    assert.match(scene('tour_seo_7').background, /school_festival/);
    assert.match(scene('day5_haeun_private_1').character, /haeun_shy/);
    assert.match(scene('day5_haeun_guilt_choice').character, /haeun_sad/);
    assert.match(scene('day5_ending_haeun_apology_seoyeon').character, /haeun_smile/);
    for (const [expression, requirement] of Object.entries({ normal: 0, worried: 33, firm: 67, relieved: 100, shy: 45, smile: 60, sad: 20 })) {
        assert.equal(GalleryData.getExpressionRequirement('haeun', expression), requirement);
    }
    for (const lang of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt', 'zh']) {
        assert.deepEqual(Array.from(GalleryData.getCharacter(lang, 'haeun').expressions), ['normal', 'worried', 'firm', 'relieved', 'shy', 'smile', 'sad', 'climax', 'cry', 'exhausted']);
        for (const id of ['event_seoyeon_succulent', 'event_yuna_reading']) {
            const cg = GalleryData.cg[lang].filter(cg => cg.id === id);
            assert.equal(cg.length, 1);
            assert.ok(cg[0].name && cg[0].description && cg[0].unlockHint);
        }
    }
    const date = scene('date_seo_pretty_high_3');
    assert.match(GalleryData.resolveOutfitExpression(date, 'assets/images/characters/seyoun_shy2.png'), /seyoun_date_shy/);
    assert.match(GalleryData.resolveOutfitExpression(date, 'assets/images/characters/seyoun_angry.png'), /seyoun_date_worried/);
});

test('every authored scene and localized gallery image has a real matching asset', () => {
    const result = inspect();
    assert.deepEqual(result.errors, []);
    assert.equal(new Set(result.ledger.map(row => row.id)).size, result.rows.length);
    assert.ok(result.ledger.every(row => Object.keys(row.dialogueHashes).length === 8));
});

test('departed speakers, remote messages and room transitions retain the corrected visual bindings', () => {
    const { rows } = loadCorpus();
    const get = id => rows.find(row => row.id === id).scene;
    assert.match(get('lunch3_expose_12').characters.center, /minsu_normal/);
    for (const id of ['haeun_warn_8', 'haeun_warn_8b', 'after5_farewell_seo_7', 'hidden_perfect_homeroom_4c', 'lunch3_give_dain_yuna_neg']) assert.equal(get(id).character, null, id);
    assert.match(get('night3_cheat_msg_7').characters.center.src, /yuna_normal/);
    assert.equal(get('night3_nightmare_3').characters.center.opacity, 0.35);
    assert.match(get('after3_seo_pity_trap_10').background, /school_hallway/);
    assert.match(get('after2_yuna_rival_seo_high').background, /school_hallway/);
    assert.match(get('after2_group_yuna_companion').background, /library_old/);
    assert.match(get('wall_seo_yuna_tempt_1').background, /street/);
    assert.equal(get('wall_seo_yuna_tempt_1').characters.center.opacity, 0.35);
    assert.match(get('morning4_start').background, /room_my_day/);
    assert.match(get('morning4_hidden_check').background, /street/);
    assert.match(get('date_seo_flower_2').background, /flower_shop/);
    assert.match(get('after2_dain_end_b').background, /snack_shop/);
    assert.match(get('lunch2_yuna_1').background, /annex_exhibit_hallway/);
    assert.match(get('lunch2_yuna_13').background, /yuna_hideout_day/);
    assert.equal(get('hidden_good_homeroom_1').timeOfDay, 'day');
});

test('outfit variants never lower or raise existing expression unlock thresholds', () => {
    const { GalleryData } = loadCorpus();
    for (const lang of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt', 'zh']) {
        for (const [id, outfits] of Object.entries(GalleryData.OUTFIT_EXPRESSIONS)) {
            const char = GalleryData.getCharacter(lang, id);
            const base = char.expressions.filter(expr => expr !== 'exhausted' && !/^(date|home)_/.test(expr));
            assert.equal(GalleryData.getExpressionRequirement(id, 'exhausted'), 100);
            for (const [index, expr] of base.entries()) {
                const expected = Math.round(index / (base.length - 1) * 100);
                assert.equal(GalleryData.getExpressionRequirement(id, expr), expected);
            }
            for (const [outfit, expressions] of Object.entries(outfits)) for (const expr of expressions) {
                const variant = `${outfit}_${expr}`;
                assert.ok(char.expressions.includes(variant));
                assert.notEqual(GalleryData.getExpressionName(lang, variant), variant);
                assert.equal(GalleryData.getExpressionRequirement(id, variant), GalleryData.getExpressionRequirement(id, expr));
            }
        }
    }
});

test('conversation expressions preserve authored outfits without replacing existing special expressions', () => {
    const { GalleryData } = loadCorpus();
    const scene = { character: 'assets/images/characters/nurse_home_normal.webp' };
    assert.match(GalleryData.resolveOutfitExpression(scene, 'assets/images/characters/nurse_angry.png'), /nurse_home_angry\.webp$/);
    assert.match(GalleryData.resolveOutfitExpression(scene, 'assets/images/characters/nurse_shy.png'), /nurse_home_shy\.webp$/);
    for (const expression of ['bikini', 'climax']) {
        const original = `assets/images/characters/nurse_${expression}.png`;
        assert.equal(GalleryData.resolveOutfitExpression(scene, original), original);
    }
    assert.equal(GalleryData.resolveOutfitExpression({}, 'assets/images/characters/dain_sad.png'), 'assets/images/characters/dain_sad.png');
});

test('all new protected outfit files have deterministic native-resolution recovery fixtures', () => {
    const { GalleryData } = loadCorpus();
    const { readPlainMedia } = require('../scripts/lib/read-plain-media.cjs');
    for (const [id, outfits] of Object.entries(GalleryData.OUTFIT_EXPRESSIONS)) for (const [outfit, expressions] of Object.entries(outfits)) for (const expression of expressions) {
        const relative = `assets/images/characters/${id}_${outfit}_${expression}.webp`;
        const packed = fs.readFileSync(path.join(root, relative));
        assert.equal(packed.subarray(0, 9).toString(), 'CUPIDENC1');
        const bytes = readPlainMedia(path.join(root, relative));
        assert.equal(bytes.subarray(0, 4).toString(), 'RIFF');
        assert.equal(bytes.subarray(8, 12).toString(), 'WEBP');
        assert.deepEqual(bytes, fs.readFileSync(path.join(root, 'tests/fixtures/corrected-media', relative)));
    }
});
