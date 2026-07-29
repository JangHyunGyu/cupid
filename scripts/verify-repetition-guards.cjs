const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT = path.resolve(__dirname, '..');

function read(relativePath) {
    return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

function readFunctionDeclaration(source, name) {
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const declaration = source.match(
        new RegExp(`^function ${escapedName}\\([^\\n]*\\) \\{[\\s\\S]*?^\\}`, 'm')
    )?.[0];
    assert(declaration, `missing function declaration: ${name}`);
    return declaration;
}

function loadGuard(source, matcherName, guardName) {
    const matcher = readFunctionDeclaration(source, matcherName);
    const guard = readFunctionDeclaration(source, guardName);
    return Function(
        `"use strict";\n${matcher}\n${guard}\nreturn ${guardName};`
    )();
}

function messages(assistantTexts, latestUser = '계속해.') {
    return [
        ...assistantTexts.map(content => ({ role: 'assistant', content })),
        { role: 'user', content: latestUser }
    ];
}

function verifyGuard(label, guard) {
    const singleStockUse = messages([
        '첫 장면에서 그녀는 작게 웃었다. 잔을 내려놓았다.',
        '문가에 선 채 잠시 기다렸다. 빗소리가 이어졌다.',
        '창밖의 불빛이 천천히 번졌다. 방 안은 고요했다.'
    ]);
    assert.strictEqual(
        guard(singleStockUse, 'ko'),
        '',
        `${label}: one stock-expression use must not trigger a repetition guard`
    );

    const broadGestureReuse = messages([
        '그녀의 손끝이 찻잔을 옆으로 밀었다. 자리가 조금 넓어졌다.',
        '잠시 뒤 손목이 소매 밖으로 드러났다. 움직임은 느긋했다.',
        '창가에 기대 선 몸이 빛을 가렸다. 목소리는 평온했다.'
    ]);
    assert.strictEqual(
        guard(broadGestureReuse, 'ko'),
        '',
        `${label}: broad hand/body categories are not actual repeated wording`
    );

    const repeatedStockUse = messages([
        '첫 장면에서 그녀는 작게 웃었다. 잔을 내려놓았다.',
        '문가에 선 채 잠시 기다렸다. 빗소리가 이어졌다.',
        '다음 순간 그녀는 살짝 웃었다. 어깨의 힘이 풀렸다.'
    ]);
    assert(
        guard(repeatedStockUse, 'ko').includes('[표현 겹침]'),
        `${label}: a stock expression repeated across two replies must trigger the guard`
    );

    const repeatedOpening = messages([
        '조용한 목소리로 말했다. 첫 번째 대답이었다.',
        '창밖의 빗소리가 잦아들었다. 둘 사이의 거리는 그대로였다.',
        '조용한 목소리로 말했다. 이번에는 더 솔직한 대답이었다.'
    ]);
    assert(
        guard(repeatedOpening, 'ko').includes('[표현 겹침]'),
        `${label}: a genuinely repeated opening must trigger the guard`
    );

    assert.strictEqual(
        guard(repeatedStockUse.slice(0, -1).concat({
            role: 'user',
            content: '그녀가 다시 작게 웃는 모습을 보고 싶어.'
        }), 'ko'),
        '',
        `${label}: wording deliberately brought back by the user must remain available`
    );
}

const mainSource = read('assets/js/modules/FreeTalkSystem.js');
const gallerySource = read('assets/js/gallery-freetalk.js');

verifyGuard(
    'main',
    loadGuard(mainSource, 'cupidRecentPhraseMatches', 'buildCupidRecentExpressionRepetitionGuard')
);
verifyGuard(
    'gallery',
    loadGuard(gallerySource, 'galleryRecentPhraseMatches', 'buildGalleryRecentExpressionRepetitionGuard')
);

console.log('Verified Cupid repetition guards: one-off and broad gesture reuse stay free; genuine repeats trigger.');
