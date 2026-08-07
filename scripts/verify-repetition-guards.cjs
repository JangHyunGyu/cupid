const fs = require('fs');
const path = require('path');
const assert = require('assert');
const vm = require('vm');

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
const context = { window: {}, Set, Object, String, Number, Array, Map, Math, encodeURIComponent };
vm.createContext(context);
vm.runInContext(read('assets/js/freetalk-core.js'), context);
const sharedGuard = context.window.CupidFreeTalkCore.buildRecentExpressionRepetitionGuard;
const shapeGuard = context.window.CupidFreeTalkCore.buildResponseShapeRepetitionGuard;
const responsePace = context.window.CupidFreeTalkCore.buildResponsePaceBlock;
const postHistoryGuidance = context.window.CupidFreeTalkCore.buildPostHistoryGuidance;
const isNearDuplicateReply = context.window.CupidFreeTalkCore.isNearDuplicateReply;

assert(mainSource.includes('CupidFreeTalkCore.buildRecentExpressionRepetitionGuard'),
    'main free-talk is not wired to the shared repetition guard');
assert(gallerySource.includes('GalleryFreeTalkCore.buildRecentExpressionRepetitionGuard'),
    'gallery free-talk is not wired to the shared repetition guard');
assert(mainSource.includes('CupidFreeTalkCore.buildPostHistoryGuidance'),
    'main free-talk is not wired to shared post-history guidance');
assert(gallerySource.includes('GalleryFreeTalkCore.buildPostHistoryGuidance'),
    'gallery free-talk is not wired to shared post-history guidance');
verifyGuard('shared main/gallery core', sharedGuard);

assert(
    shapeGuard(messages([
        '서연은 창가를 바라봤다.\n\n빗소리가 조금 잦아들었다.',
        '서연은 책을 덮었다.\n\n복도는 여전히 조용했다.',
        '서연은 시계를 확인했다.\n\n전등이 한 번 깜빡였다.'
    ]), 'ko').includes('[최근 응답 형태 반복]'),
    'three identical reply shapes did not trigger the shared shape guard'
);
assert.strictEqual(
    shapeGuard(messages([
        '"이쪽으로 와."',
        '서연은 책을 덮었다.\n\n복도는 여전히 조용했다.',
        '*서연이 먼저 문을 열었다.*'
    ]), 'ko'),
    '',
    'different response shapes incorrectly triggered the shared shape guard'
);
assert(responsePace(messages([], '*복도로 나가 문을 연다*'), 'ko').includes('[응답 호흡 — action]'),
    'action input did not receive action-paced guidance');
assert(responsePace(messages([], '다음 날 아침으로 장면 전환'), 'ko').includes('[응답 호흡 — transition]'),
    'time transition did not receive transition-paced guidance');
assert(responsePace(messages([], '오늘 어땠어?'), 'ko').includes('[응답 호흡 — dialogue]'),
    'conversation input did not receive dialogue-paced guidance');
const postHistory = postHistoryGuidance(messages([], '*문을 열고 들어간다*'), 'ko');
assert(postHistory.includes('[후단 과업 — 이번 응답]')
    && postHistory.includes('[후단 출력 지침 — 이번 응답]')
    && postHistory.includes('[응답 호흡 — action]'),
    'shared post-history task/output guidance is incomplete');

const repeatedSleepBeat = [
    {
        role: 'assistant',
        content: '유나는 그가 아직 잠든 것을 확인하고 이불을 다시 덮어 주었다. 따뜻한 물은 그가 깨어난 뒤 건네기로 했다.'
    },
    { role: 'user', content: '*깨어난다*' }
];
assert(isNearDuplicateReply(
    '유나는 그가 아직 잠든 것을 확인하고 이불을 다시 덮어 주었다. 따뜻한 물은 그가 깨어난 뒤 건네기로 했다.',
    repeatedSleepBeat
), 'near-identical roleplay body was not detected after the latest user turn');
assert(!isNearDuplicateReply(
    '유나는 눈이 마주치자 물잔을 내밀며 밤새 기다렸다고 솔직하게 말했다.',
    repeatedSleepBeat
), 'a genuinely new reaction was incorrectly classified as a duplicate');

assert(
    sharedGuard(messages([
        '유나는 그가 아직 잠든 것을 확인하고 이불을 다시 덮어 주었다. 따뜻한 물은 그가 깨어난 뒤 건네기로 했다.',
        '유나는 그가 아직 잠든 것을 확인하고 이불을 조심스럽게 다시 덮어 주었다. 따뜻한 물은 그가 깨어난 뒤 건네기로 했다.',
        '창밖이 밝아지는 동안 유나는 침대 곁에 머물렀다. 방 안에는 물잔을 내려놓는 소리만 작게 울렸다.'
    ])).includes('[표현 겹침]'),
    'near-duplicate reply choreography did not trigger the shared guard'
);

console.log('Verified shared Cupid turn guidance: wording, reply shape, and response pace are scene-aware.');
