'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.resolve(__dirname, '../assets/js/i18n');
const languages = ['en', 'ja', 'es', 'fr', 'de', 'pt', 'zh'];
const names = { en: 'Sojeong', ja: 'ソジョン', es: 'Sojeong', fr: 'Sojeong', de: 'Sojeong', pt: 'Sojeong', zh: '素晶' };
const years = {
    en: [/Four years/, /Five years/], ja: [/四年/, /五年/],
    es: [/cuatro años/, /cinco años/], fr: [/Quatre ans/, /Cinq ans/],
    de: [/Vier Jahre/, /Fünf Jahre/], pt: [/quatro anos/, /Cinco anos/], zh: [/四年/, /五年/]
};
const sides = {
    en: [/left foot/, /right knee/], ja: [/左足/, /右膝/],
    es: [/pie izquierdo/, /rodilla derecha/], fr: [/pied gauche/, /genou droit/],
    de: [/linken Fuß/, /rechte Knie/], pt: [/pé esquerdo/, /joelho direito/], zh: [/左脚/, /右膝/]
};

for (const lang of languages) {
    test(`${lang}: revised copy preserves people, time skips, and injury mechanics`, () => {
        const read = file => require(path.join(root, lang, file + '.json'));
        const past = read('day2_4_night').night2_flashback_5.text;
        assert.ok(past.includes(names[lang]), `${lang}: Sojeong is not Seoyeon`);
        const endings = read('day5_4_night');
        assert.match(endings.hidden_true_homeroom_1.text, years[lang][0]);
        assert.match(endings.hidden_perfect_nurse_1.text, years[lang][1]);
        sides[lang].forEach(side => assert.match(endings.perfect_dain_5.text, side));
        const greeting = read('day2_1_morning').morning2_greet_seo_2.text;
        assert.doesNotMatch(greeting, /bookshelf|bookcase|本棚|estantería|étagère|Bücherregal|estante|书架/i);
        const drawer = read('day2_3_afterschool').hidden_nurse_d2_6.text;
        assert.doesNotMatch(drawer, /after lunch|昼食後|昼休みの後|después del almuerzo|après le déjeuner|nach dem Mittagessen|depois do almoço|午饭后|午餐后/i);
    });
}

test('Japanese Haeun retains polite speech and senior address in the changed scenes', () => {
    const day3 = require(path.join(root, 'ja/day3_3_afterschool.json'));
    const day4 = Object.assign({}, require(path.join(root, 'ja/day4_1_morning.json')), require(path.join(root, 'ja/day4_3_afterschool.json')));
    const day5 = Object.assign({}, require(path.join(root, 'ja/day5_2_lunch.json')), require(path.join(root, 'ja/day5_3_afterschool.json')));
    const nodes = { ...day3, ...day4, ...day5 };
    const report = require('../docs/qa/i18n-sync-20261027.json');
    for (const row of report.nodes) {
        const source = require(path.join(root, 'ko', row.file))[row.id];
        if (source.name !== '하은' || !nodes[row.id]) continue;
        const speech = nodes[row.id].text.replace(/\*[^*]*\*/g, '');
        assert.doesNotMatch(speech, /俺|僕/, row.id);
        assert.doesNotMatch(speech, /ソヨン(?!先輩)/, row.id);
    }
});
