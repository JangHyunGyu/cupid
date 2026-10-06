'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const LANGUAGES = ['ko', 'en', 'es', 'ja', 'fr', 'de', 'pt', 'zh'];

function read(relativePath) {
    return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function load(file, exportName) {
    const window = {};
    return new Function('window', `${read(file)}\nreturn window.${exportName};`)(window);
}

const TipsData = load('assets/js/gallery-tips-data.js', 'GalleryTipsData');
const GalleryData = load('assets/js/gallery-data.js', 'GalleryData');

test('tips cover general advice plus every character in all eight gallery languages', () => {
    const ids = TipsData.items.map(item => item.id);
    assert.equal(new Set(ids).size, ids.length);
    assert.deepEqual([...TipsData.LANGUAGES], LANGUAGES);
    const generalCount = TipsData.items.filter(item => item.group === 'general').length;
    assert(generalCount >= 6);
    const characterIds = TipsData.items.filter(item => item.group === 'character').map(item => item.charId);
    for (const required of ['seyoun', 'yuna', 'dain', 'teacher', 'nurse']) assert(characterIds.includes(required), required);

    for (const lang of LANGUAGES) {
        const copy = TipsData.copy[lang];
        for (const key of ['tab', 'heading', 'intro', 'generalHeading', 'characterHeading', 'lockedTitle', 'lockedHint', 'closeLabel', 'openLabel', 'dialogSuffix']) {
            assert(copy[key] && copy[key].trim(), `${lang}.${key}`);
        }
        assert.deepEqual(Object.keys(copy.items).sort(), [...ids].sort(), `${lang} item ids`);
        for (const item of TipsData.items) {
            const text = copy.items[item.id];
            assert(text.summary && text.summary.trim(), `${lang}.${item.id}.summary`);
            assert(Array.isArray(text.points) && text.points.length >= 2, `${lang}.${item.id}.points`);
            assert(text.points.every(point => typeof point === 'string' && point.trim().length > 10), `${lang}.${item.id} point text`);
            if (item.group === 'general') assert(text.title && text.title.trim(), `${lang}.${item.id}.title`);
            if (item.charId) assert(GalleryData.getCharacter(lang, item.charId)?.name, `${lang} gallery name for ${item.charId}`);
        }
    }
});

test('tips stay accurate to the game code values', () => {
    const freeTalk = read('assets/js/modules/FreeTalkSystem.js');
    const skipPenalty = Number(/GROUP_FREE_TALK_SKIP_AFFINITY_PENALTY\s*=\s*(-?\d+)/u.exec(freeTalk)[1]);
    const groupBudget = Number(/GROUP_FREE_TALK_PER_CHARACTER_TURN_GAIN_MAX\s*=\s*(\d+)/u.exec(freeTalk)[1]);
    assert.equal(skipPenalty, -20);
    assert.equal(groupBudget, 3);

    const scenarioTurns = new Set();
    for (const file of fs.readdirSync(path.join(root, 'assets/js/scenario'))) {
        for (const match of read(`assets/js/scenario/${file}`).matchAll(/"maxTurns":\s*(\d+)/gu)) scenarioTurns.add(Number(match[1]));
    }
    assert.deepEqual([...scenarioTurns].sort(), [3, 5]);

    for (const lang of LANGUAGES) {
        const { basics, group, perfect } = TipsData.copy[lang].items;
        const basicsText = basics.points.join(' ');
        assert(/\+3/u.test(basicsText), `${lang} basics mentions the +3 cap`);
        assert(/3/u.test(basicsText) && /5/u.test(basicsText), `${lang} basics mentions 3 or 5 messages`);
        const groupText = `${group.summary} ${group.points.join(' ')}`;
        assert(/\+3/u.test(groupText), `${lang} group mentions the per-character +3`);
        assert(groupText.includes(String(Math.abs(skipPenalty))), `${lang} group mentions the skip penalty`);
        const perfectText = perfect.points.join(' ');
        assert(/100/u.test(perfectText) && /4/u.test(perfectText) && /5/u.test(perfectText), `${lang} perfect rules`);
    }
});

test('tips are localized without leaking other scripts and never copy internal prompts', () => {
    const hangul = /[\uAC00-\uD7A3]/u;
    const allowedLatin = /\b(?:AI|PERFECT|IA|KI)\b|[A-Za-z]/u;
    const prompts = read('assets/js/prompts.js');
    const collect = lang => {
        const copy = TipsData.copy[lang];
        const strings = [copy.tab, copy.heading, copy.intro, copy.generalHeading, copy.characterHeading, copy.lockedHint, copy.closeLabel, copy.openLabel, copy.dialogSuffix];
        for (const text of Object.values(copy.items)) strings.push(text.title || '', text.summary, ...text.points);
        return strings;
    };

    for (const lang of LANGUAGES.filter(entry => entry !== 'ko')) {
        assert(!collect(lang).some(text => hangul.test(text)), `${lang} contains Hangul`);
    }
    // 일본어 UI는 일본어만: 라틴 문자는 AI 표기만 허용한다.
    const jaLatin = collect('ja').join(' ').replace(/AI/gu, '').replace(/[+\-]?\d+/gu, '');
    assert(!/[A-Za-z]/u.test(jaLatin), 'ja uses Japanese only (besides AI)');
    // 한국어 UI는 외래어를 한글(원어)로: 영문 단독 표기는 AI, PERFECT(퍼펙트 뒤 괄호)만 허용한다.
    const koLatin = collect('ko').join(' ').replace(/퍼펙트\(PERFECT\)/gu, '').replace(/AI/gu, '');
    assert(!/[A-Za-z]/u.test(koLatin), `ko foreign terms must be Hangul(original): ${koLatin.match(/[A-Za-z]+/u)}`);
    assert(allowedLatin.test('AI'));

    for (const lang of LANGUAGES) {
        for (const text of Object.values(TipsData.copy[lang].items)) {
            for (const point of text.points) {
                for (const sentence of point.split(/(?<=[.。!?])\s*/u).filter(entry => entry.length >= 14)) {
                    assert(!prompts.includes(sentence), `${lang}: sentence copied from prompts.js: ${sentence}`);
                }
            }
        }
    }
});

test('spoiler-light: the hidden-in-gallery character is locked until met and exposes no text', () => {
    const none = () => false;
    const locked = TipsData.getTips('ko', { getName: id => id, isMet: none }).find(tip => tip.id === 'haeun');
    assert.equal(locked.locked, true);
    assert.equal(locked.title, '???');
    assert.deepEqual(locked.points, []);
    assert(!locked.summary.includes('후배'));

    const met = TipsData.getTips('ko', { getName: id => GalleryData.getCharacter('ko', id).name, isMet: () => true });
    assert(met.every(tip => !tip.locked && tip.title && tip.points.length >= 2));
    // 공개 SEO 가이드에 이미 소개된 히든 루트 인물(담임·보건)은 진행도와 무관하게 읽을 수 있다.
    for (const lang of LANGUAGES) {
        const open = TipsData.getTips(lang, { getName: id => GalleryData.getCharacter(lang, id).name, isMet: none });
        for (const id of ['seyoun', 'yuna', 'dain', 'teacher', 'nurse']) assert.equal(open.find(tip => tip.id === id).locked, false, `${lang}.${id}`);
    }
});

test('every localized gallery page ships the tips tab, region and accessible popup markup', () => {
    for (const lang of LANGUAGES) {
        const file = lang === 'ko' ? 'gallery.html' : `gallery-${lang}.html`;
        const html = read(file);
        assert(html.includes(`data-tab="tips">${TipsData.copy[lang].tab}</button>`), `${file} tab`);
        assert.match(html, /id="tab-tips" class="tab-content"/u, `${file} section`);
        assert.match(html, /id="tips-root"/u, `${file} root`);
        const modal = /<div id="tip-modal"[^>]*>/u.exec(html)?.[0] || '';
        assert.match(modal, /role="dialog"/u, `${file} role`);
        assert.match(modal, /aria-modal="true"/u, `${file} aria-modal`);
        assert.match(modal, /aria-labelledby="tip-modal-title"/u, `${file} labelledby`);
        assert.match(modal, /aria-describedby="tip-modal-body"/u, `${file} describedby`);
        assert.match(html, /id="tip-modal-backdrop" class="tip-modal-backdrop" hidden/u, `${file} backdrop`);
        assert(html.includes(`aria-label="${TipsData.copy[lang].closeLabel}"`), `${file} close label`);
    }
    const loader = read('assets/js/loaders/gallery-loader.js');
    assert(loader.indexOf("'gallery-tips-data.js'") > loader.indexOf("'gallery-data.js'"));
    assert(loader.indexOf("'gallery-ui-tips.js'") < loader.indexOf("'gallery-ui-core.js'"));
});

test('gallery wiring keeps the game page safe when the tips renderer is not loaded', () => {
    const core = read('assets/js/gallery-ui-core.js');
    assert.match(core, /typeof TipsRenderer === 'function' \? new TipsRenderer\(this\) : null/u);
    assert.match(read('assets/js/gallery.js'), /case 'tips':\s*this\.ui\.renderTips\(\);/u);
    const gameLoader = read('assets/js/loaders/game-loader.js');
    assert(!gameLoader.includes('gallery-ui-tips.js'));
});
