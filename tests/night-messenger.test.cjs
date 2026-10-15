'use strict';
// 밤 문자 메신저 화면과 Day 2~3 중복 지문 정리 회귀 테스트
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const LANGS = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt', 'zh'];
const BASES = [];
for (let day = 1; day <= 5; day++) for (const part of ['1_morning', '2_lunch', '3_afterschool', '4_night']) BASES.push(`day${day}_${part}`);

// 시나리오 전체 + 언어별 문구 로드
const scenarioContext = { SCENARIO: {}, console };
for (const base of BASES) vm.runInNewContext(read(`assets/js/scenario/${base}.js`), scenarioContext);
const scenes = Object.assign({}, ...Object.values(scenarioContext.SCENARIO));
const copy = lang => Object.assign({}, ...BASES.map(base => JSON.parse(read(`assets/js/i18n/${lang}/${base}.json`))));
const ko = copy('ko');

// 브라우저 전역 최소 대역 (DOM 없이 판단 로직만 검증)
function loadMessenger(lang = 'ko') {
    const context = {
        window: { GAME_LANG: lang },
        document: { documentElement: { lang } },
        console,
        setTimeout,
        clearTimeout
    };
    context.window.window = context.window;
    vm.createContext(context);
    vm.runInContext(read('assets/js/modules/config.js').replace(/^[\s\S]*?(const CHAR_NAME_MAP = Object\.freeze\(\{[\s\S]*?\}\);)[\s\S]*$/, '$1'), context);
    vm.runInContext(read('assets/js/modules/KoreanProcessor.js'), context);
    vm.runInContext(read('assets/js/modules/DialogueSystem.js'), context);
    vm.runInContext(read('assets/js/modules/MessengerView.js'), context);
    const state = { playerName: '지훈', getFlag: () => false };
    const dialogue = new context.window.DialogueSystem(state, { charSlots: {}, messageEl: {} });
    return new context.window.MessengerView({ dialogueBox: null }, dialogue);
}

// 장면 데이터 + 한국어 문구 결합 (런타임 _applyI18n과 같은 필드)
function localized(id) {
    const scene = { ...scenes[id], ...(ko[id] || {}) };
    Object.defineProperty(scene, '__sourceFile', { value: scenes[id].__sourceFile, enumerable: false });
    return scene;
}

test('night text messages become bubbles while narration, notices and calls stay in the dialogue box', () => {
    const view = loadMessenger();
    for (const id of ['night_msg_seo_1', 'night_msg_yuna_1', 'night_msg_dain_1', 'night2_msg_dain_specific', 'night3_cheat_msg_2', 'day4_waited_yuna_invite', 'wall_dain_2']) {
        assert.equal(view.shouldBubble(localized(id)), true, `${id} should render as a messenger bubble`);
    }
    // 주인공 답장은 반투명 스프라이트로 대화 상대를 추정
    assert.equal(view.shouldBubble(localized('night2_reply_seo_1')), true);
    assert.equal(view._inferContact(localized('night2_reply_seo_1')), 'Seoyeon');

    // 지문만 있는 휴대폰 장면은 화면만 유지
    assert.equal(view.isPhoneContext(localized('night2_reply_dain_5')), true);
    assert.equal(view.shouldBubble(localized('night2_reply_dain_5')), false);

    // 학교 앱 공지(담임·보건)는 개인 메시지로 보이지 않게 제외
    for (const id of ['night_homeroom_msg_1', 'night_nurse_msg_1']) assert.equal(view.shouldBubble(localized(id)), false, id);

    // 통화 장면은 명시적으로 제외
    for (const id of ['wall_seo_pre_high_1', 'wall_seo_pre_high_2', 'wall_seo_pre_low_2', 'wall_seo_2']) {
        assert.equal(scenes[id].messenger, false, id);
        assert.equal(view.isPhoneContext(localized(id)), false, id);
    }
    // 스프라이트 없는 주인공 답장 문자는 명시적으로 포함
    for (const id of ['day4_waited_seoyeon_promise', 'day4_waited_dain_promise', 'day4_waited_yuna_promise']) {
        assert.equal(scenes[id].messenger, true, id);
        assert.equal(view.isPhoneContext(localized(id)), true, id);
        assert.equal(view.shouldBubble(localized(id)), true, `${id} must restore without an open thread`);
    }

    // 낮 장면·5일차 엔딩·프리토킹은 대상 아님
    assert.equal(view.isPhoneContext(localized('lunch2_dain_11')), false);
    assert.equal(view.isPhoneContext(localized('mayhem_2')), false);
    const freeTalk = Object.keys(scenes).find(id => /_4_night$/.test(scenes[id].__sourceFile) && scenes[id].type === 'free_talk' && scenes[id].characters?.center?.opacity < 1);
    if (freeTalk) assert.equal(view.isPhoneContext(localized(freeTalk)), false);
});

test('mixed message lines split spoken text into the bubble and narration into the dialogue box', () => {
    const view = loadMessenger();
    const scene = localized('night2_reply_dain_react_neg');
    const { spoken, narration } = view._split(scene.text);
    assert.ok(spoken.length > 0);
    assert.ok(!spoken.includes('*'));
    assert.match(narration, /^\*.+\*$/);
});

test('typing profiles keep Yuna hesitant and Dain rapid without new dialogue text', () => {
    const source = read('assets/js/modules/MessengerView.js');
    assert.match(source, /Yuna: \{ base: 1300[^}]*pause: 450/);
    assert.match(source, /Dain: \{ base: 260[^}]*pause: 0/);
    assert.match(source, /MESSENGER_CONTACT_KEYS = new Set\(\['Seoyeon', 'Yuna', 'Dain', 'Haeun'\]\)/);
    for (const lang of LANGS) assert.match(source, new RegExp(`\\b${lang}: \\{ panel: `), `${lang} messenger labels`);
});

test('game engine routes bubbles through the messenger and lets a click skip the typing indicator', () => {
    const engine = read('assets/js/modules/GameEngine.js');
    const loader = read('assets/js/loaders/game-loader.js');
    assert.match(loader, /'modules\/DialogueSystem\.js',[^\n]*\n\s*'modules\/MessengerView\.js'/);
    assert.match(engine, /this\.messengerView\?\.isAnimating\(\)\) \{\s*this\.messengerView\.skip\(\);\s*return;/);
    assert.match(engine, /scene\.text && this\.messengerView\?\.shouldBubble\(scene\)/);
    assert.match(engine, /if \(!this\.messengerView\?\.isPhoneContext\(scene\)\) this\.messengerView\?\.hide\(\);/);
    assert.match(read('assets/css/style.css'), /#messenger-panel \{/);
});

test('trimmed day 2-3 bridge nodes are gone in every language and old saves are forwarded', () => {
    const renderer = read('assets/js/modules/SceneRenderer.js');
    const table = renderer.match(/const REMOVED_SCENE_REDIRECTS = Object\.freeze\(\{([\s\S]*?)\}\);/)[1];
    const redirects = Object.fromEntries([...table.matchAll(/(\w+): '(\w+)'/g)].map(match => [match[1], match[2]]));
    assert.equal(Object.keys(redirects).length, 43);
    const removed = new Set(Object.keys(redirects));
    const copies = Object.fromEntries(LANGS.map(lang => [lang, copy(lang)]));
    for (const [id, target] of Object.entries(redirects)) {
        assert.equal(scenes[id], undefined, `${id} must be removed from scenario data`);
        assert.ok(scenes[target], `${id} redirect target ${target} must exist`);
        for (const lang of LANGS) assert.equal(copies[lang][id], undefined, `${lang}:${id} must be removed`);
    }
    // 남은 장면 어디에서도 지운 장면을 가리키지 않음
    const dangling = [];
    for (const [id, scene] of Object.entries(scenes)) {
        JSON.stringify(scene, (key, value) => {
            if (typeof value === 'string' && removed.has(value) && key !== 'condition') dangling.push(`${id}.${key}`);
            return value;
        });
    }
    assert.deepEqual(dangling, []);
    assert.match(read('assets/js/modules/GameEngine.js'), /sceneId = this\.sceneRenderer\.resolveSceneAlias\?\.\(sceneId\) \?\? sceneId;/);
});
