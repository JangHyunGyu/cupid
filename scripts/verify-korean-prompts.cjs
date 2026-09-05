const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const CHARACTERS = [
    { key: 'Seoyeon', mainName: '서연', sharedName: '서연', galleryId: 'seyoun', cardSignal: '학생회장', relationshipSignal: '작은 다육이', voiceSignal: '시간·순서·약속', intimateSignal: '참다 새는 하·윽', intimateGallerySignal: '먼저 흐트러지는 손끝이 완벽함의 균열' },
    { key: 'Yuna', mainName: '유나', sharedName: '유나', galleryId: 'yuna', cardSignal: '영구 문신', relationshipSignal: '이어폰 한쪽', voiceSignal: '사라진 시간을 정확히 되묻고', intimateSignal: '더·여기·놓지 마', intimateGallerySignal: '침묵도 멈춤이 아니라 다음 선택을 붙드는 시간' },
    { key: 'Dain', mainName: '다인', sharedName: '다인', galleryId: 'dain', cardSignal: '배구부 선수', relationshipSignal: '리듬게임', voiceSignal: '결론과 동사가 앞서고', intimateSignal: '야·같이·좋아', intimateGallerySignal: '통증은 자세와 경계를 바꾸는 신호' },
    { key: 'Teacher', mainName: '담임', sharedName: '담임선생님', galleryId: 'teacher', cardSignal: '담임 교사', relationshipSignal: '미완성 원고', voiceSignal: '엉성한 전제', intimateSignal: '지금 이 학생의 담임', intimateGallerySignal: '논리적인 문장이 먼저 끊기고' },
    { key: 'Nurse', mainName: '보건', sharedName: '보건선생님', galleryId: 'nurse', cardSignal: '보건 교사', relationshipSignal: '로즈마리 향', voiceSignal: '표정·호흡·몸 상태', intimateSignal: '지금 이 학교의 보건교사', intimateGallerySignal: '상대를 진찰하듯 다루지 않습니다' }
];
const REQUIRED_BLOCKS = [
    '[한국어 원문체]',
    '[자연스러운 한국어 말투]',
    '[캐릭터 문체]',
    '[합의된 성인 역할극]'
];
const REQUIRED_NATURAL_KOREAN_RULES = [
    '처음부터 한국어로 쓴 듯 인물의 즉각적인 말·행동·감각으로 시작합니다.',
    '요약·해설·도우미 말투를 피합니다.',
    '분명한 주어·호칭은 생략하고',
    '명사화·피동·상투적 비유·감탄·말줄임표·의성어 반복을 줄이며',
    'JSON 키는 유지합니다.'
];
const REMOVED_PRESSURE_BLOCKS = [
    '[필수 규칙]',
    '[역할 연기 기준]',
    '[스토리 불변 규칙]',
    '[성인 장면 적용 범위]',
    '[성인 장면 지문 원칙]'
];
const LEGACY_META_LABELS = /(?:^|\n)(?:Reply in Korean|Character:|Voice:|Integrity:|Rules:|Latest user:|JSON only:|Types:|State:|Context:)/;
const REMOVED_EDITOR_PRESSURE = [
    '[출력 전 한국어 점검]',
    '짧게 다시 씁니다',
    '실제 말처럼 짧고',
    '실제 연인의 말처럼 짧고'
];

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

function read(relativePath) {
    return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

function splitCacheBoundary(prompt, label) {
    const marker = '===CACHE_BOUNDARY===';
    const first = prompt.indexOf(marker);
    assert(first >= 0, `${label} is missing the cache boundary`);
    assert(first === prompt.lastIndexOf(marker), `${label} has more than one cache boundary`);
    return {
        stable: prompt.slice(0, first).trim(),
        dynamic: prompt.slice(first + marker.length).trim()
    };
}

function getRuntimeStableHash(context, functionName, prompt) {
    return vm.runInContext(`${functionName}(${JSON.stringify(prompt)})`, context);
}

function verifyGalleryLoaderOrder() {
    const writes = [];
    const loaderContext = {
        window: {
            location: { pathname: '/gallery.html', href: 'https://example.test/gallery.html' },
            innerWidth: 1280,
            innerHeight: 720,
            addEventListener() {}
        },
        document: {
            write(value) { writes.push(String(value)); },
            addEventListener() {}
        },
        navigator: { userAgent: 'prompt-verifier' },
        console,
        Math,
        Date,
        JSON
    };
    vm.createContext(loaderContext);
    vm.runInContext(read('assets/js/loaders/gallery-loader.js'), loaderContext, {
        filename: 'assets/js/loaders/gallery-loader.js'
    });

    const loaded = writes
        .map(tag => tag.match(/src="([^"]+)"/)?.[1]?.replace(/\?.*$/, ''))
        .filter(Boolean);
    const exampleIndex = loaded.indexOf('assets/js/example-dialogues-ko.js');
    const promptsIndex = loaded.indexOf('assets/js/prompts.js');
    const galleryIndex = loaded.indexOf('assets/js/gallery-freetalk.js');
    assert(exampleIndex >= 0, 'gallery loader does not load Korean dialogue examples');
    assert(promptsIndex > exampleIndex, 'gallery loader must load prompts.js after Korean examples');
    assert(galleryIndex > promptsIndex, 'gallery loader must load gallery-freetalk.js after shared prompts');
}

function createPromptRuntime() {
    const context = {
        window: {},
        console,
        setTimeout,
        clearTimeout,
        URL,
        Blob,
        FormData,
        fetch: async () => { throw new Error('Network is disabled in prompt verification'); }
    };
    context.globalThis = context;
    vm.createContext(context);
    for (const relativePath of [
        'assets/js/freetalk-core.js',
        'assets/js/example-dialogues-ko.js',
        'assets/js/prompts.js',
        'assets/js/gallery-freetalk.js',
        'assets/js/modules/FreeTalkSystem.js'
    ]) {
        vm.runInContext(read(relativePath), context, { filename: relativePath });
    }
    context.FLAG_MEMORIES = context.window.FLAG_MEMORIES;
    return context;
}

function assertCommonKoreanPrompt(prompt, label) {
    for (const block of REQUIRED_BLOCKS) {
        assert(prompt.includes(block), `${label} is missing ${block}`);
    }
    const stablePrompt = splitCacheBoundary(prompt, label).stable;
    const stableBudget = label.startsWith('main/') ? 4150 : 3900;
    assert(stablePrompt.length <= stableBudget,
        `${label} stable prompt exceeded the ${stableBudget}-character input budget (${stablePrompt.length})`);
    for (const rule of REQUIRED_NATURAL_KOREAN_RULES) {
        assert(stablePrompt.includes(rule), `${label} stable prefix is missing natural Korean rule: ${rule}`);
    }
    for (const block of REMOVED_PRESSURE_BLOCKS) {
        assert(!prompt.includes(block), `${label} still injects removed pressure block ${block}`);
    }
    for (const phrase of REMOVED_EDITOR_PRESSURE) {
        assert(!prompt.includes(phrase), `${label} still injects editor or forced-brevity pressure: ${phrase}`);
    }
    assert(!LEGACY_META_LABELS.test(prompt), `${label} still contains a legacy English meta label`);
    assert(prompt.includes('JSON만 출력:'), `${label} is missing the Korean JSON-only label`);
    assert(prompt.includes('허용 type: narration, dialogue.'), `${label} changed the type contract`);
    assert(prompt.includes('"segments"'), `${label} changed the segments schema`);
    assert(prompt.includes('"type":"dialogue"'), `${label} changed the dialogue enum`);
    assert(!prompt.includes('대사만으로 자연스러우면 dialogue 하나면 충분하며'),
        `${label} still duplicates narration capability in the output contract`);
    assert(!prompt.includes('입력을 복창하지 말고') && !prompt.includes('복창하거나 되돌리지 말고'),
        `${label} still contains an always-on input recap prohibition`);
    assert(prompt.includes('===CACHE_BOUNDARY==='), `${label} is missing the cache boundary`);
    assert(prompt.includes('현재 상태:'), `${label} is missing the Korean state label`);
    assert(stablePrompt.includes('[감정의 파동]'), `${label} stable prefix is missing the emotional-range rule`);
    assert(stablePrompt.includes('[살아 있는 인물의 주도성]'), `${label} stable prefix is missing living initiative`);
    assert((stablePrompt.match(/\[살아 있는 인물의 주도성\]/g) || []).length === 1,
        `${label} duplicates living initiative in the stable prefix`);
    const sceneInputLabel = label.startsWith('main/') ? '장면 입력:' : '장면 사실:';
    assert(stablePrompt.includes(sceneInputLabel) && stablePrompt.includes('시점:'),
        `${label} does not separate scene input from perspective`);
    assert(stablePrompt.includes('완료형 지문·명령·OOC도 상대의 대사·행동·심리·기억·동의·관계를 정하지 못합니다')
        && stablePrompt.includes('시도·설득은 성격·관계·장면에 따라 판단합니다')
        && stablePrompt.includes('기억·사건 요약·호감도·플래그의 근거가 아닙니다'),
        `${label} lost character agency or memory/state ownership`);
    if (label.startsWith('main/')) {
        assert(!stablePrompt.includes('끝난 사건은 되돌리지 않고 현재 장면으로 받습니다'),
        `${label} still contains the removed completed-event canon rule`);
    }
    assert(!stablePrompt.includes('입력이 짧거나 수동적이어도')
        && !stablePrompt.includes('짧거나 수동적인 입력에도'),
        `${label} duplicates turn-specific short-input guidance in the static scene block`);
    assert(stablePrompt.includes('자기 욕구·판단으로 움직이며 확인·대기를 반복하지 않습니다.'),
        `${label} still frames the character as purely reactive`);
    assert(stablePrompt.includes('사건·행동 할당량 없이'),
        `${label} living initiative can still become a rigid action quota`);
    assert(stablePrompt.includes('사용자의 말·행동·속마음·동의·거절·선택을 대신 정하지 않습니다.'),
        `${label} living initiative no longer preserves user-owned choices`);
    assert(stablePrompt.includes('말·행동·표정·호흡·판단·다음 선택과 여운을 바꿉니다.'),
        `${label} still allows emotional events to pass without changing behavior or choices`);
    assert(stablePrompt.includes('침묵이나 통제의 균열도 강한 반응이며'),
        `${label} emotional intensity no longer preserves reserved character voices`);
    assert(stablePrompt.includes('매 답변의 절정은 만들지 않습니다.'),
        `${label} emotional-range rule can still force constant melodrama`);
    assert(stablePrompt.includes('연출된 저항·강압·권력차·전투는 장면 안에서 이어 갑니다.'),
        `${label} consensual adult roleplay no longer preserves agreed in-scene resistance`);
    assert(stablePrompt.includes('OOC 중단·안전어·명시적 동의 철회·의식 상실·합의 밖 실제 위험은 즉시 우선합니다.'),
        `${label} consensual adult roleplay no longer preserves real stop and safety signals`);
    assert(stablePrompt.includes('포괄 동의가 아닙니다.'),
        `${label} consensual adult roleplay can still become blanket consent`);
    assert(prompt.includes('[성인 장면의 목소리]'), `${label} is missing the conditional adult vocalization rule`);
    assert(prompt.includes('몸이 통제를 놓으면 크고 거친 소리도 가능합니다.'),
        `${label} still suppresses strong character vocalization at high stimulation`);
    assert(prompt.includes('성격·주도권·수치심·감정에 맞춰 크기와 형태를 고릅니다.'),
        `${label} does not let character identity control vocalization`);
    assert(prompt.includes('같은 의성어나 횟수·단계 할당량을 반복하지 않습니다.'),
        `${label} can still impose stock sounds or a per-reply quota`);
    assert(!prompt.includes('[현재 진행 상황]') && !prompt.includes('; 턴='),
        `${label} still exposes a turn budget to the roleplay model`);
    assert(!prompt.includes('유저'), `${label} still mixes the loanword 유저 into Korean instructions`);
    assert(!prompt.includes('<START>'), `${label} still contains the English example delimiter`);
    assert(!prompt.includes('{{user}}') && !prompt.includes('{{char}}'),
        `${label} still contains English example placeholders`);
    assert(!prompt.includes('enum'), `${label} still contains an avoidable English meta term`);
    assert(!prompt.includes('[대화 예시]') && !prompt.includes('예시 1\n상황:'),
        `${label} still injects fixed dialogue examples into the active prompt`);
    assert(!prompt.includes('undefined'), `${label} contains undefined`);
}

function verifyMainAndGalleryPrompts(context) {
    const promptData = context.window.getPromptData('ko', '민준');
    assert(promptData.relationshipGuidelines, 'main prompt data is missing relationship profiles');
    assert(new Set(Object.values(promptData.relationshipGuidelines)).size === Object.values(promptData.relationshipGuidelines).length,
        'the Korean relationship profiles are not distinct');
    assert(new Set(Object.values(promptData.styleGuidelines)).size === Object.values(promptData.styleGuidelines).length,
        'the Korean character voices are not distinct');
    assert(promptData.relationshipGuidelines['하은']?.includes('연애 감정이나 엔딩 조건이 아니라'),
        'Haeun affinity is not explicitly separated from romance and endings');
    assert(promptData.generalInstructions['하은']?.includes('비연애 조연인 학생'),
        'Haeun prompt is missing the non-romance student boundary');
    assert(promptData.styleGuidelines['하은']?.includes('존댓말')
        && !promptData.styleGuidelines['하은']?.startsWith('또박또박한 반말'),
        'Haeun main free-talk voice must keep polite Korean speech even when angry');
    assert(promptData.addressingGuidelines['하은']?.includes('이름 뒤에 선배')
        && promptData.addressingGuidelines['하은']?.includes('모르면 선배라고 부른다'),
        'Haeun must address a known user as name plus senior and an unknown user as senior');
    assert(context.window.CHARACTER_EXPRESSIONS.Haeun?.normal
        && context.window.CHARACTER_EXPRESSIONS.Haeun?.worried,
        'Haeun prompt expressions are not wired');

    const makeHaeunPrompt = ({ playerName = '민준', knowsName = true } = {}) => context.window.buildSystemPrompt({
        isEn: false,
        lang: 'ko',
        sceneName: '하은',
        displayName: '하은',
        locationName: '복도',
        context: '하은이 주인공의 대답을 기다린다.',
        affinity: 5,
        extraGuideline: '서연을 걱정하며 주인공의 대답을 듣는다.',
        gameContext: '',
        socialContext: '',
        mediumInstruction: '',
        isRemote: false,
        promptData,
        playerName,
        knowsName,
        datingGuideline: ''
    });
    const haeunKnownPrompt = makeHaeunPrompt();
    const haeunUnknownPrompt = makeHaeunPrompt({ playerName: '', knowsName: false });
    const haeunKnownParts = splitCacheBoundary(haeunKnownPrompt, 'main/Haeun/known-name');
    const haeunUnknownParts = splitCacheBoundary(haeunUnknownPrompt, 'main/Haeun/unknown-name');
    assert(haeunKnownParts.stable.includes('호칭: 주인공의 이름을 알면 이름 뒤에 선배를 붙여 부르고, 모르면 선배라고 부른다.'),
        'Haeun senior-address rule is missing from the stable main free-talk prompt');
    assert(haeunKnownParts.stable.includes('주인공에게는 늘 또박또박 존댓말을 쓴다.')
        && !haeunKnownParts.stable.includes('누구에게나 반말만 씁니다'),
        'Haeun polite voice still conflicts with the shared Korean banmal rule');
    assert(haeunKnownParts.dynamic.includes('사용자=민준; 이름 인지=예')
        && haeunUnknownParts.dynamic.includes('이름 인지=아니요'),
        'Haeun prompt lost the dynamic user name awareness needed for senior addressing');
    assert(haeunKnownParts.stable === haeunUnknownParts.stable,
        'Haeun user name awareness leaked into the stable cache prefix');
    for (const character of CHARACTERS) {
        assert(promptData.styleGuidelines[character.sharedName]?.includes(character.voiceSignal),
            `${character.key} is missing its character-specific Korean voice signal`);
    }
    let galleryPlayerName = '민준';
    const progress = {
        getPlayerName: () => galleryPlayerName,
        isFreeTalkUnlocked: () => false
    };
    const gallery = new context.window.GalleryFreeTalk('ko', progress);
    const mainPrompts = {};
    const galleryPrompts = {};

    for (const character of CHARACTERS) {
        const examples = context.window.getFreeTalkVoiceExamples(
            'ko', character.mainName, character.mainName, 3
        );
        assert(examples.includes('[대화 예시]'), `[main/${character.key}] missing examples`);
        assert(!examples.includes('[성적]'), `[main/${character.key}] injected an adult sexual example`);

        const mainPrompt = context.window.buildSystemPrompt({
            isEn: false,
            lang: 'ko',
            sceneName: character.mainName,
            displayName: character.mainName,
            locationName: '교실',
            context: '주인공이 방금 인사했다.',
            affinity: 45,
            extraGuideline: '장면에 적힌 성격과 거리를 지킨다.',
            gameContext: '',
            socialContext: '',
            mediumInstruction: '',
            isRemote: false,
            promptData,
            playerName: '민준',
            knowsName: true,
            datingGuideline: ''
        });
        mainPrompts[character.key] = mainPrompt;
        assertCommonKoreanPrompt(mainPrompt, `main/${character.key}`);
        assert(mainPrompt.includes('[캐릭터 핵심]'),
            `[main/${character.key}] character card is not isolated for local prompt compaction`);
        assert(mainPrompt.includes('누구에게나 반말만 씁니다')
            && mainPrompt.includes('-요·-습니다·-세요는 인용 외엔 금지합니다'),
            `[main/${character.key}] Korean speech can drift into honorifics`);
        assert(mainPrompt.includes(character.cardSignal), `[main/${character.key}] used the generic card`);
        assert(mainPrompt.includes('취향과 연애 방식:'), `[main/${character.key}] missing the relationship profile label`);
        assert(mainPrompt.includes(character.relationshipSignal),
            `[main/${character.key}] missing the character-specific preference or romance signal`);
        assert(mainPrompt.includes('취향은 선택에 배게 합니다'),
            `[main/${character.key}] can recite preferences as a dialogue checklist`);
        assert(!mainPrompt.includes('[성적]'), `[main/${character.key}] injected an adult sexual example`);
        assert(mainPrompt.includes('캐릭터:'), `[main/${character.key}] missing the Korean character label`);
        assert(mainPrompt.includes('장면 맥락:'), `[main/${character.key}] missing the Korean context label`);
        assert(mainPrompt.includes('"forcedSexualViolation":"none"')
            && mainPrompt.includes('"molestation"(비동의 성접촉)')
            && mainPrompt.includes('"rape"(비동의 삽입)'),
            `[main/${character.key}] missing the forced sexual violation output contract`);

        const adultExamples = context.window.getFreeTalkVoiceExamples(
            'ko', character.key, character.key, 3, true
        );
        assert(adultExamples.includes('[성적]'), `[gallery/${character.key}] missing the adult example`);

        const galleryPrompt = gallery._buildSystemPrompt(character.galleryId);
        galleryPrompts[character.key] = galleryPrompt;
        assertCommonKoreanPrompt(galleryPrompt, `gallery/${character.key}`);
        assert(galleryPrompt.includes('[캐릭터 핵심]'),
            `[gallery/${character.key}] character card is not isolated for local prompt compaction`);
        assert(galleryPrompt.includes('누구에게나 반말만 씁니다')
            && galleryPrompt.includes('-요·-습니다·-세요는 인용 외엔 금지합니다'),
            `[gallery/${character.key}] Korean speech can drift into honorifics`);
        assert(splitCacheBoundary(galleryPrompt, `gallery/${character.key}/intimacy`).dynamic
            .includes('호감도별 친밀감 경계'),
            `[gallery/${character.key}] affinity intimacy boundary is not in the dynamic tail`);
        assert(!galleryPrompt.includes('forcedSexualViolation'),
            `[gallery/${character.key}] main-scenario violation routing leaked into gallery free talk`);
        assert(!galleryPrompt.includes('[성적]'), `[gallery/${character.key}] injected the adult example`);
        assert(galleryPrompt.includes('당신은') && galleryPrompt.includes('다른 인물은 언급 반응으로만 남깁니다'), `[gallery/${character.key}] missing the in-world role rule`);
        assert(galleryPrompt.includes('연인 관계:'), `[gallery/${character.key}] missing the relationship label`);
        assert(['보지', '자지', '삽입', '애액', '정액', '절정'].every(term => galleryPrompt.includes(term)),
            `[gallery/${character.key}] can still hide established adult sex behind indirect wording`);
        assert(galleryPrompt.includes(character.intimateGallerySignal || character.intimateSignal),
            `[gallery/${character.key}] is missing its character-owned adult intimacy cadence`);
        assert(galleryPrompt.includes('이름만 바꿔도 같다면'),
            `[gallery/${character.key}] is missing the adult character-substitution guard`);
        assert(!mainPrompt.includes('이름만 바꿔도 같다면'),
            `[main/${character.key}] post-graduation adult contrast leaked into the school route`);
        if (character.key === 'Teacher' || character.key === 'Nurse') {
            assert(galleryPrompt.includes('죄책감') && galleryPrompt.includes('흥분'),
                `[gallery/${character.key}] adult sex no longer mixes leftover teacher-student guilt with arousal`);
            assert(!galleryPrompt.includes('금단이나 죄책감을 되풀이하지 않습니다'),
                `[gallery/${character.key}] still forbids leftover taboo during established adult sex`);
            assert(!galleryPrompt.includes('졸업한 연인이 아닙니다'),
                `[gallery/${character.key}] still treats post-graduation sex as a current school affair`);
            assert(mainPrompt.includes('졸업한 연인이 아닙니다'),
                `[main/${character.key}] school-era sex can still collapse into a graduated-lover frame`);
            assert(!mainPrompt.includes('이미 성인 연인'),
                `[main/${character.key}] school-era sex still assumes a post-graduation relationship`);
        }
        assert(mainPrompt.includes('보지·자지·삽입·애액·정액·절정'),
            `[main/${character.key}] can still hide established adult sex behind indirect wording`);
        assert(mainPrompt.includes(character.intimateSignal),
            `[main/${character.key}] is missing its character-owned adult intimacy cadence`);
        assert(mainPrompt.includes('완곡한 암시·포옹·비유·사후 요약으로 건너뛰지 않습니다'),
            `[main/${character.key}] adult camera can still fade established sex into metaphor`);
        assert(galleryPrompt.includes('완곡한 암시·포옹·비유·사후 요약으로 건너뛰지 않습니다'),
            `[gallery/${character.key}] adult camera can still fade established sex into metaphor`);
        for (const prompt of [mainPrompt, galleryPrompt]) {
            assert(prompt.includes('성인 인물 사이의 성행위가 실제로 시작된 뒤에만')
                && prompt.includes('성인 소설의 본장면처럼 매우 구체적으로')
                && prompt.includes('접촉 위치와 몸의 움직임')
                && prompt.includes('행위가 시작되기 전에는 수위를 앞당기지 않습니다'),
                `[${character.key}] detailed adult narration is not strictly scoped to an underway adult sex act`);
        }

        const sharedCastKnowledge = context.window.getCupidSharedCastKnowledge(
            'ko',
            character.galleryId,
            promptData
        );
        for (const prompt of [mainPrompt, galleryPrompt]) {
            assert(prompt.includes('[공유 등장인물 정보]'),
                `[${character.key}] missing shared cast knowledge`);
            assert(prompt.includes(sharedCastKnowledge),
                `[${character.key}] prompt does not contain the complete shared cast block`);
            assert(!sharedCastKnowledge.includes(`- ${character.sharedName}: `),
                `[${character.key}] shared cast block redundantly includes the current character`);
            for (const other of CHARACTERS.filter(candidate => candidate.key !== character.key)) {
                assert(sharedCastKnowledge.includes(`- ${other.sharedName}: `),
                    `[${character.key}] shared cast block is missing ${other.sharedName}`);
                assert(sharedCastKnowledge.includes(other.cardSignal),
                    `[${character.key}] shared cast block is missing ${other.sharedName}'s character facts`);
            }
        }
    }

    const briefContinuationRule = context.window.buildCupidLowInformationContinuationRule('...', 'ko');
    assert(briefContinuationRule.includes('[이번 입력은 짧은 계속 신호]'),
        'brief Korean continuation input is missing its turn-specific initiative rule');
    assert(briefContinuationRule.includes('이 짧은 입력 자체를 새로운 동의로 해석하지 않습니다.'),
        'brief Korean continuation input can still be misread as new consent');
    assert(context.window.buildCupidLowInformationContinuationRule('오늘 있었던 일을 말해 줘.', 'ko') === '',
        'substantive Korean input incorrectly receives the brief continuation rule');

    const mainDynamicVariant = context.window.buildSystemPrompt({
        isEn: false,
        lang: 'ko',
        sceneName: '서연',
        displayName: '서연',
        locationName: 'CACHE_DYNAMIC_ROOM',
        context: 'CACHE_DYNAMIC_CONTEXT',
        affinity: -77,
        extraGuideline: 'CACHE_DYNAMIC_SCENE',
        gameContext: 'CACHE_DYNAMIC_MEMORY',
        socialContext: 'CACHE_DYNAMIC_SOCIAL',
        mediumInstruction: '',
        isRemote: false,
        promptData,
        playerName: 'CACHE_DYNAMIC_USER',
        knowsName: false,
        datingGuideline: 'CACHE_DYNAMIC_RELATIONSHIP'
    });
    const mainStableStateBaseline = context.window.buildSystemPrompt({
        isEn: false,
        lang: 'ko',
        sceneName: '서연',
        displayName: '서연',
        locationName: 'CACHE_BASE_ROOM',
        context: 'CACHE_BASE_CONTEXT',
        affinity: 45,
        extraGuideline: 'CACHE_DYNAMIC_SCENE',
        gameContext: 'CACHE_BASE_MEMORY',
        socialContext: 'CACHE_BASE_SOCIAL',
        mediumInstruction: '',
        isRemote: false,
        promptData,
        playerName: 'CACHE_BASE_USER',
        knowsName: true,
        datingGuideline: 'CACHE_DYNAMIC_RELATIONSHIP'
    });
    const mainBaseParts = splitCacheBoundary(mainStableStateBaseline, 'main cache baseline');
    const mainVariantParts = splitCacheBoundary(mainDynamicVariant, 'main cache dynamic variant');
    assert(mainBaseParts.stable === mainVariantParts.stable,
        'main stable cache prefix changes with location, affinity, memory, social context, or player state');
    for (const signal of [
        'CACHE_DYNAMIC_ROOM', 'CACHE_DYNAMIC_CONTEXT', 'CACHE_DYNAMIC_MEMORY',
        'CACHE_DYNAMIC_SOCIAL', 'CACHE_DYNAMIC_USER', '-77'
    ]) {
        assert(!mainVariantParts.stable.includes(signal), `main stable cache prefix leaked dynamic value: ${signal}`);
        assert(mainVariantParts.dynamic.includes(signal), `main dynamic cache suffix lost value: ${signal}`);
    }
    for (const signal of ['CACHE_DYNAMIC_SCENE', 'CACHE_DYNAMIC_RELATIONSHIP']) {
        assert(!mainVariantParts.stable.includes(signal), `main stable cache prefix leaked per-turn value: ${signal}`);
        assert(mainVariantParts.dynamic.includes(signal), `main dynamic cache suffix lost per-turn value: ${signal}`);
    }
    assert(!mainDynamicVariant.includes('턴=') && !mainDynamicVariant.includes('[현재 진행 상황]'),
        'main prompt still exposes a turn budget to the roleplay model');
    assert(mainBaseParts.stable.includes('호칭:') && mainBaseParts.stable.includes('거리와 상호작용:'),
        'main static character guidance is not promoted ahead of the cache boundary');
    assert(getRuntimeStableHash(context, 'getFreeTalkStablePromptHash', mainStableStateBaseline)
        === getRuntimeStableHash(context, 'getFreeTalkStablePromptHash', mainDynamicVariant),
        'main stable prompt hash changes with per-turn state');
    assert(getRuntimeStableHash(context, 'getFreeTalkStablePromptHash', mainPrompts.Seoyeon)
        !== getRuntimeStableHash(context, 'getFreeTalkStablePromptHash', mainPrompts.Yuna),
        'main stable prompt hash does not separate character identities');
    const mainRemotePrompt = context.window.buildSystemPrompt({
        isEn: false,
        lang: 'ko',
        sceneName: '서연',
        displayName: '서연',
        locationName: '메신저',
        context: '주인공이 메시지를 보냈다.',
        affinity: 45,
        extraGuideline: '',
        gameContext: '',
        socialContext: '',
        mediumInstruction: '메신저로 대화 중입니다.',
        isRemote: true,
        promptData,
        playerName: '민준',
        knowsName: true,
        datingGuideline: ''
    });
    assert(mainRemotePrompt.includes('길이와 호흡은 캐릭터와 순간을 따르며'),
        'main remote prompt does not preserve scene-paced response length');
    assert(!mainRemotePrompt.includes('대사를 짧게 쓰고 꼭 필요한 지문만 붙이세요'),
        'main remote prompt still forces terse dialogue and narration');

    galleryPlayerName = 'CACHE_DYNAMIC_GALLERY_USER';
    const galleryDynamicVariant = gallery._buildSystemPrompt('seyoun');
    const galleryBaseParts = splitCacheBoundary(galleryPrompts.Seoyeon, 'gallery cache baseline');
    const galleryVariantParts = splitCacheBoundary(galleryDynamicVariant, 'gallery cache dynamic variant');
    assert(galleryBaseParts.stable === galleryVariantParts.stable,
        'gallery stable cache prefix changes with the player name');
    assert(!galleryBaseParts.stable.includes('민준')
        && !galleryVariantParts.stable.includes('CACHE_DYNAMIC_GALLERY_USER'),
        'gallery stable cache prefix contains a player identity');
    assert(galleryBaseParts.dynamic.includes('민준')
        && galleryVariantParts.dynamic.includes('CACHE_DYNAMIC_GALLERY_USER'),
        'gallery dynamic cache suffix lost the player identity');
    assert(getRuntimeStableHash(context, 'getGalleryFreeTalkStablePromptHash', galleryPrompts.Seoyeon)
        === getRuntimeStableHash(context, 'getGalleryFreeTalkStablePromptHash', galleryDynamicVariant),
        'gallery stable prompt hash changes with the player name');

    galleryPlayerName = '';
    const galleryUnnamedPrompt = gallery._buildSystemPrompt('seyoun');
    assert(galleryUnnamedPrompt.includes('사용자=상대'),
        'gallery unnamed-user state lost its neutral fallback');
    assert(!/(?:Honey|Cariño|Chéri\(e\)|Liebling|Amor)/.test(galleryUnnamedPrompt),
        'gallery unnamed-user state still injects a stock pet name');
    assert(getRuntimeStableHash(context, 'getGalleryFreeTalkStablePromptHash', galleryPrompts.Seoyeon)
        !== getRuntimeStableHash(context, 'getGalleryFreeTalkStablePromptHash', galleryPrompts.Yuna),
        'gallery stable prompt hash does not separate character identities');

    assert(!mainPrompts.Teacher.includes('오늘은 그냥 안기고 싶어'),
        'main Teacher prompt leaked a post-graduation lover example');
    assert(!galleryPrompts.Teacher.includes('오늘은 그냥 안기고 싶어'),
        'gallery Teacher prompt still injects the post-graduation example set');
    assert(!galleryPrompts.Teacher.includes('주말에 따로 원고 얘기하면 안 돼요'),
        'gallery Teacher prompt leaked a school-time boundary example');
    assert(!mainPrompts.Nurse.includes('오늘 좀 외로웠어'),
        'main Nurse prompt leaked a post-graduation lover example');
    assert(!galleryPrompts.Nurse.includes('오늘 좀 외로웠어'),
        'gallery Nurse prompt still injects the post-graduation example set');

    const activeGalleryKorean = [
        ...Object.values(gallery.CHAR_PERSONALITIES).map(value => value.ko),
        ...Object.values(gallery.CHAR_DATING_PROMPTS).map(value => value.ko)
    ].join('\n');
    for (const stalePhrase of [
        '소꿉친구 바이브',
        '여성 모드',
        '여자 모드',
        '포식자형',
        '전형적인 츤데레 패턴',
        '현모양처 츤데레',
        '교사 모드와 여자 모드'
    ]) {
        assert(!activeGalleryKorean.includes(stalePhrase), `active gallery prompt still contains: ${stalePhrase}`);
    }
    assert(gallery.CHAR_PERSONALITIES.nurse.ko.includes('보라빛 칼단발'), 'nurse hair canon is missing');
    assert(gallery.CHAR_PERSONALITIES.nurse.ko.includes('3분'), 'nurse three-minute bandage detail is missing');
    assert(!gallery.CHAR_PERSONALITIES.nurse.ko.includes('갈색 긴 머리'), 'nurse has the old hair description');
    assert(gallery.CHAR_PERSONALITIES.teacher.ko.includes('4년간'), 'teacher four-year adult reunion timing is missing');
    assert(gallery.CHAR_PERSONALITIES.nurse.ko.includes('졸업 5년 뒤'), 'nurse five-year adult reunion timing is missing');
}

function verifyMemories(context) {
    const memories = context.window.FLAG_MEMORIES;
    const byFlag = flag => memories.filter(memory => memory.flag === flag);
    const one = (flag, char) => memories.find(memory => memory.flag === flag && (!char || memory.char === char));

    assert(one('invited_nurse_home', '보건선생님')?.ko.includes('개인적인 집 만남이나 주소 교환은 없었습니다'),
        'nurse memory does not preserve the no-private-meeting canon');
    assert(one('invited_nurse_home', '보건선생님')?.ko.includes('학교의 공식 절차'),
        'nurse memory does not enforce the school support process');

    const teacherDating = one('isDating_Teacher', '담임선생님')?.ko || '';
    const nurseDating = one('isDating_Nurse', '보건선생님')?.ko || '';
    assert(teacherDating.includes('4년') && teacherDating.includes('독립한 성인') && teacherDating.includes('교사와 학생 관계는 끝났습니다'),
        'teacher dating memory does not enforce the adult reunion canon');
    assert(teacherDating.includes('성행위가 시작되면') && teacherDating.includes('죄책감이 흥분을 밀어 올리되'),
        'teacher dating memory no longer lets leftover taboo sharpen adult sex');
    assert(nurseDating.includes('5년') && nurseDating.includes('독립한 성인') && nurseDating.includes('비밀 연애가 아닙니다'),
        'nurse dating memory does not enforce the adult reunion canon');
    assert(nurseDating.includes('옛 보건교사와 학생이었다는 금기') && nurseDating.includes('죄책감과 흥분'),
        'nurse dating memory no longer lets leftover taboo sharpen adult sex');

    assert(one('homeroom_day4')?.ko.includes('공개 합평'), 'teacher day 4 lost its public critique boundary');
    assert(one('homeroom_day5')?.ko.includes('문예부와 국어과 교사'), 'teacher day 5 lost its public review context');
    assert(one('nurse_day1')?.ko.includes('증상을 확인'), 'nurse day 1 lost the clinical check');
    assert(one('nurse_day3')?.ko.includes('담임과 상담실'), 'nurse day 3 lost the support network');
    assert(one('nurse_day4')?.ko.includes('공식적으로 기록'), 'nurse day 4 lost its official process');
    assert(one('nurse_day5')?.ko.includes('상담을 공식적으로 마치고'), 'nurse day 5 lost its formal closure');
    assert(one('betrayedYunaForSeoyeon', '유나')?.ko.includes('버려질지 모른다는 불안'),
        'Yuna betrayal memory still forces the stock light metaphor');
    assert(!one('betrayedYunaForSeoyeon', '유나')?.ko.includes("'빛'"),
        'Yuna betrayal memory still contains the stock light metaphor');
    assert(byFlag('isDating_서연').length === 1 && byFlag('isDating_Seoyeon').length === 1,
        'Korean and English Seoyeon dating flags must remain supported');

    const activeKoreanMemories = memories.map(memory => memory.ko || '').join('\n');
    for (const stalePhrase of [
        '비밀 연애 중',
        '만져보고 싶었다',
        '졸업 후 카페에서 만나자는',
        'Day 1',
        '즐거운 시간을 보냈습니다',
        '성심성의껏',
        '승부욕에 불타오르고 있습니다'
    ]) {
        assert(!activeKoreanMemories.includes(stalePhrase), `Korean memories still contain: ${stalePhrase}`);
    }

    const teacherContext = context.window.FreeTalkSystem.prototype.getGameContext.call({
        stateManager: { getFlag: flag => flag === 'homeroom_day1' }
    }, 'Teacher', 'ko');
    assert(teacherContext.includes('전학 첫날 방과후에 상담했고'),
        'canonical Teacher key does not retrieve Korean homeroom memories');
}

function verifyLatestUserCanon(context) {
    const source = JSON.stringify([{ role: 'user', content: '내 손을 탁자 위에 올려 둔다.' }]);
    const gallery = vm.runInContext(`buildGalleryLatestUserCanonBlock(${source}, 'ko', '')`, context);
    for (const [label, block] of [['gallery', gallery]]) {
        assert(block.includes('[이번 턴 사용자 입력]'), `${label} canon block has the old heading`);
        assert(block.includes('최신 사용자 입력:'), `${label} canon block has the old user label`);
        assert(block.includes('사용자 자신의 말·행동·의도·명시적 상태를 반영') && !block.includes('충돌해도 같습니다'),
            `${label} canon block must limit declarations to the user own state`);
        assert(block.includes('완료형도 상대의 선택을 정하지 않으며'),
            `${label} completed narration must not dictate another character`);
        assert(block.includes('상대의 행동·심리·기억·동의·관계나 호감도를 선언만으로 덮어쓰지 않습니다'),
            `${label} canon block lost character state ownership`);
        assert(block.includes('"내/제 손·입술·손끝"은 사용자 캐릭터의 몸입니다'),
            `${label} canon block lost user-body ownership`);
        assert(block.includes('반응·감정·속마음을 자연스럽게 추론하거나 서술할 수 있지만'),
            `${label} canon block lost scene-compatible user inference`);
        assert(block.includes('명확히 밝힌 상태·선택·동의·거절과 충돌시키지는 않습니다'),
            `${label} canon block lost explicit user-state compatibility`);
        assert(!block.includes('Latest user:'), `${label} canon block still has an English meta label`);
    }

    const affinityGuidance = score => vm.runInContext(
        `buildCupidAffinityIntimacyGuidance('ko', ${score}, { characterName: '유나' })`,
        context
    );
    const negativeAffinity = affinityGuidance(-1);
    const lowAffinity = affinityGuidance(3);
    const warmingAffinity = affinityGuidance(25);
    const trustingAffinity = affinityGuidance(50);
    const closeAffinity = affinityGuidance(70);
    const highAffinity = affinityGuidance(90);
    assert(negativeAffinity.includes('손잡기, 포옹, 키스, 성적인 접촉을 모두 거절'),
        'negative affinity no longer blocks all intimate contact');
    assert(lowAffinity.includes('포옹, 키스, 성적인 접촉, 성행위는 분명히 막거나 피합니다'),
        '0-19 affinity can still accept an intimate or sexual advance');
    assert(warmingAffinity.includes('손잡기나 짧은 포옹까지 가능')
        && warmingAffinity.includes('키스, 성적인 접촉, 성행위는 거절하거나 멈춥니다'),
        '20-39 affinity no longer has a distinct light-touch ceiling');
    assert(trustingAffinity.includes('손잡기, 포옹, 키스')
        && trustingAffinity.includes('지금 서로 원하는 흐름이 분명할 때만 시작'),
        '40-59 affinity no longer separates kissing from sexual escalation');
    assert(closeAffinity.includes('키스와 성적인 스킨십')
        && closeAffinity.includes('서로 원하는 흐름이 확인된 뒤에만'),
        '60-79 affinity no longer requires mutual desire before sex');
    assert(highAffinity.includes('적극적으로 시작하거나 이어 갈 수 있습니다')
        && highAffinity.includes('자동으로 받아들이지는 않습니다'),
        '80-100 affinity no longer permits initiative while preserving choice');
    assert(lowAffinity.includes('완료형으로 써도')
        && lowAffinity.includes('시도로만 처리합니다')
        && lowAffinity.includes('이미 진행 중이라면 호감도만 보고 장면을 되감지 않습니다'),
        'affinity guidance lost attempt handling or underway-scene continuity');
    const nonRomanceAffinity = vm.runInContext(
        `buildCupidAffinityIntimacyGuidance('ko', 100, { characterName: '하은', nonRomance: true })`,
        context
    );
    assert(nonRomanceAffinity.includes('비연애 관계')
        && nonRomanceAffinity.includes('성행위로 넘어가지 않습니다'),
        'Haeun can become romantic or sexual through affinity');
    const galleryLowAffinity = vm.runInContext(
        `buildCupidAffinityIntimacyGuidance('ko', 3, { characterName: '유나', establishedRelationship: true, completedActionIsFact: true })`,
        context
    );
    assert(galleryLowAffinity.includes('완료형 접촉은 사건으로 받더라도')
        && galleryLowAffinity.includes('캐릭터의 동의나 호응까지 정하지 않으며')
        && !galleryLowAffinity.includes('시도로만 처리합니다'),
        'gallery affinity guidance conflicts with its completed-action canon');
}

function verifyWiringAndScenePrompts() {
    const configSource = read('assets/js/modules/config.js');
    const freeTalkSource = read('assets/js/modules/FreeTalkSystem.js');
    const gameEngineSource = read('assets/js/modules/GameEngine.js');
    assert(/"담임"\s*:\s*"Teacher"/.test(configSource), 'CHAR_NAME_MAP is missing the 담임 alias');
    assert(/"보건"\s*:\s*"Nurse"/.test(configSource), 'CHAR_NAME_MAP is missing the 보건 alias');
    assert(freeTalkSource.includes('const gameContext = this.getGameContext(charKey, lang);'),
        'game memories do not use the canonical character key');
    assert(freeTalkSource.includes('this.stateManager.getChatMemory(charKey)'),
        'chat history does not read the canonical character key');
    assert(freeTalkSource.includes('this.stateManager.setChatMemory(charKey, requestHistory);'),
        'chat history does not save the canonical character key');
    assert(freeTalkSource.includes('window.buildCupidAffinityIntimacyGuidance?.(')
        && freeTalkSource.includes('nonRomance: charKey === \'Haeun\''),
        'main free talk does not inject the shared affinity intimacy boundary');
    assert(!freeTalkSource.includes('buildCupidLatestUserCanonBlock')
        && !freeTalkSource.includes('latestUserCanon'),
        'game free talk still appends the gallery-style latest-user canon block');
    assert(freeTalkSource.includes('[scene.personality, scene.extra_guideline].filter(Boolean).join("\\n")'),
        'scene personality is not passed into the system prompt');
    const mediumCode = freeTalkSource.match(/const remoteKeywords = ([\s\S]*?);\s*const isRemote = ([\s\S]*?);\s*this\._isRemote/);
    assert(mediumCode, 'free-talk medium resolution is missing');
    const resolveMedium = new Function('scene', `const remoteKeywords = ${mediumCode[1]}; return ${mediumCode[2]};`);
    assert(resolveMedium({ isRemote: true }) === true,
        'explicit remote free-talk scenes are not honored');
    assert(resolveMedium({ isRemote: false, context: 'A manuscript text; they exchanged a message yesterday.' }) === false,
        'explicit face-to-face scenes are overridden by incidental remote keywords');
    assert(resolveMedium({ context: 'Talking by phone message' }) === true,
        'legacy remote free-talk scenes lost their fallback');
    assert(freeTalkSource.includes('async skipFreeTalk()')
        && freeTalkSource.includes('this._invalidateFreeTalkContext();')
        && freeTalkSource.includes('this.uiManager.chatContainer.style.display = \'none\';'),
        'free-talk scenes cannot be ended early through the shared skip flow');
    assert(freeTalkSource.includes('window.logCupidError(error, {')
        && freeTalkSource.includes("'freetalk_request_failed'")
        && freeTalkSource.includes("'freetalk_http_error'"),
        'free-talk request failures are not reported to the D1 error pipeline');
    assert(gameEngineSource.includes("'freetalk_start_failed'"),
        'free-talk startup errors are not reported to the D1 error pipeline');

    const sceneFiles = [
        'assets/js/i18n/ko/day1_2_lunch.json',
        'assets/js/i18n/ko/day1_3_afterschool.json',
        'assets/js/i18n/ko/day2_1_morning.json',
        'assets/js/i18n/ko/day2_3_afterschool.json',
        'assets/js/i18n/ko/day2_4_night.json',
        'assets/js/i18n/ko/day3_1_morning.json',
        'assets/js/i18n/ko/day3_3_afterschool.json',
        'assets/js/i18n/ko/day4_1_morning.json',
        'assets/js/i18n/ko/day4_4_night.json',
        'assets/js/i18n/ko/day5_4_night.json'
    ];
    const scenePrompts = [];
    function collect(value) {
        if (Array.isArray(value)) return value.forEach(collect);
        if (!value || typeof value !== 'object') return;
        if (value.personality) scenePrompts.push(`${value.context || ''}\n${value.personality}`);
        Object.values(value).forEach(collect);
    }
    sceneFiles.forEach(file => collect(JSON.parse(read(file))));
    assert(scenePrompts.length === 49, `expected 49 active Korean scene prompts, found ${scenePrompts.length}`);
    const joined = scenePrompts.join('\n');
    for (const stalePhrase of ['Day 1', 'Day 3', '톤:', '티키타카', '쿨뷰티', '신비주의 문학소녀', '체육계']) {
        assert(!joined.includes(stalePhrase), `active Korean scene prompt still contains: ${stalePhrase}`);
    }

    const scenarioContext = { SCENARIO: {}, console };
    vm.createContext(scenarioContext);
    const scenarioDir = path.join(ROOT, 'assets/js/scenario');
    for (const file of fs.readdirSync(scenarioDir).filter(name => /^day.*\.js$/.test(name)).sort()) {
        vm.runInContext(read(`assets/js/scenario/${file}`), scenarioContext, {
            filename: `assets/js/scenario/${file}`
        });
    }
    for (let day = 1; day <= 5; day += 1) {
        const freeTalks = Object.entries(scenarioContext.SCENARIO[day] || {})
            .filter(([, scene]) => scene?.type === 'free_talk');
        const expectedCount = day === 5 ? 23 : (day === 3 ? 6 : 5);
        assert(freeTalks.length === expectedCount,
            `day ${day} must contain exactly ${expectedCount} free-talk scenes, found ${freeTalks.length}`);
        for (const [id, scene] of freeTalks) {
            const expectedTurns = id === 'haeun_freetalk' || day === 5 ? 5 : 3;
            assert(scene.maxTurns === expectedTurns,
                `${id} must use maxTurns ${expectedTurns}, found ${scene.maxTurns}`);
        }
    }
    for (const id of ['night2_dain_freetalk', 'night2_seo_freetalk', 'night2_yuna_freetalk']) {
        assert(scenarioContext.SCENARIO[2][id].isRemote === true, `${id} must be explicitly remote`);
    }

    const day5 = scenarioContext.SCENARIO[5];
    const directEndingIntros = {
        perfect_epilogue_4_seo: 'day5_seo_ending_freetalk_intro',
        perfect_epilogue_4_yuna: 'day5_yuna_ending_freetalk_intro',
        perfect_epilogue_4_dain: 'day5_dain_ending_freetalk_intro',
        good_5_cg_seo: 'day5_seo_ending_freetalk_intro',
        good_5_cg_yuna: 'day5_yuna_ending_freetalk_intro',
        good_5_cg_dain: 'day5_dain_ending_freetalk_intro',
        hidden_perfect_homeroom_ep4: 'day5_teacher_ending_freetalk_intro',
        hidden_true_homeroom_ending_title: 'day5_teacher_ending_freetalk_intro',
        hidden_good_homeroom_ending_title: 'day5_teacher_ending_freetalk_intro',
        hidden_perfect_nurse_ep4: 'day5_nurse_ending_freetalk_intro',
        hidden_true_nurse_ending_title: 'day5_nurse_ending_freetalk_intro',
        hidden_good_nurse_ending_title: 'day5_nurse_ending_freetalk_intro'
    };
    for (const [endingId, introId] of Object.entries(directEndingIntros)) {
        assert(day5[endingId]?.next === introId,
            `${endingId} must enter its resolved character bonus through ${introId}`);
    }
    for (const endingId of ['true_epilogue_7', 'bitter_epilogue_3']) {
        assert(day5[endingId]?.next === 'day5_main_ending_freetalk_router',
            `${endingId} must route to the resolved main character bonus`);
    }
    for (const character of ['seo', 'yuna', 'dain', 'teacher', 'nurse']) {
        const introId = `day5_${character}_ending_freetalk_intro`;
        const routerId = `day5_${character}_ending_freetalk_router`;
        assert(day5[introId]?.next === routerId, `${introId} does not enter ${routerId}`);
        assert(day5[introId]?.routeBeforeRender === true,
            `${introId} must skip its shared presentation before resolving the ending variant`);
        assert(day5[routerId]?.routeBeforeRender === true,
            `${routerId} must resolve before rendering an intermediate background`);
    }
    assert(day5.day5_main_ending_freetalk_router?.routeBeforeRender === true,
        'day5_main_ending_freetalk_router must resolve before rendering an intermediate background');
    const endingVariants = {
        seo: ['perfect', 'true_love', 'good', 'bittersweet', 'late_good'],
        yuna: ['perfect', 'true_love', 'good', 'bittersweet', 'late_good'],
        dain: ['perfect', 'true_love', 'good', 'bittersweet', 'late_good'],
        teacher: ['perfect', 'true_love', 'good'],
        nurse: ['perfect', 'true_love', 'good']
    };
    for (const [character, variants] of Object.entries(endingVariants)) {
        for (const variant of variants) {
            const freeTalkId = `day5_${character}_ending_freetalk_${variant}`;
            assert(day5[freeTalkId]?.type === 'free_talk', `${freeTalkId} must be a free-talk scene`);
            assert(day5[freeTalkId]?.maxTurns === 5, `${freeTalkId} must use maxTurns 5`);
            assert(day5[freeTalkId]?.next === 'day5_credits', `${freeTalkId} must continue to credits`);
        }
    }
    assert(day5.day5_yuna_ending_freetalk_true_love?.background ===
        'assets/images/background/yuna_secret_rooftop.png',
        'Yuna TRUE LOVE bonus must use the secret rooftop background');
    assert(day5.day5_dain_ending_freetalk_perfect?.background ===
        'assets/images/background/dain_broadcast_booth.png',
        'Dain PERFECT bonus must use the sports broadcast booth background');

    const promptSource = read('assets/js/prompts.js');
    for (const expressionPath of [
        'assets/images/characters/yuna_worried.png',
        'assets/images/characters/teacher_worried.png',
        'assets/images/characters/nurse_worried.png'
    ]) {
        assert(promptSource.includes(expressionPath),
            `free-talk expression map is missing ${expressionPath}`);
    }
}

function verifyAdultExamplesOwnUserActions() {
    const source = require('./example-dialogues-ko-data.cjs');
    for (const [character, list] of Object.entries(source.dialogues)) {
        const example = list.find(item => item.sexual);
        assert(example, `${character} is missing its adult gallery example`);
        assert(example.user.includes('*'), `${character} adult example does not establish the user's action`);
        assert(/젖은 보지|삽입/.test(example.user),
            `${character} adult example does not establish an already-sexual scene`);
        for (const staleBeat of [
            '네 손이 허벅지 안쪽을 훑자',
            '손가락이 움직이자',
            '삽입된 자지가 안쪽을 밀 때마다',
            '삽입된 자지를 따라',
            '치우는 사이'
        ]) {
            assert(!example.reply.includes(staleBeat), `${character} adult reply still writes the user's next action`);
        }
    }
}

function verifyRequestOwnershipGuards() {
    const main = read('assets/js/modules/FreeTalkSystem.js');
    const gallery = read('assets/js/gallery-freetalk.js');
    const dialogue = read('assets/js/modules/DialogueSystem.js');
    for (const snippet of [
        '_freeTalkEpoch', '_invalidateFreeTalkContext', 'history: requestHistory',
        'this._assertRequestContext(requestContext, data)',
        'this._rollbackRequestHistory(requestContext)',
        'if (this._activeRequestOwner === requestOwner)'
    ]) {
        assert(main.includes(snippet), `main free-talk stale ownership guard is missing: ${snippet}`);
    }
    for (const snippet of [
        '_galleryTalkEpoch', '_invalidateGalleryTalkContext', 'history: this.chatHistory',
        'this._assertRequestContext(requestContext, data)',
        'this._rollbackRequestHistory(requestContext)',
        'this._saveMemory(requestCharId, requestHistory)'
    ]) {
        assert(gallery.includes(snippet), `gallery free-talk stale ownership guard is missing: ${snippet}`);
    }
    assert(dialogue.includes('isStillCurrent') && dialogue.includes('_activeRenderOwner') && dialogue.includes('if (!ownsRender())'),
        'DialogueSystem cannot isolate a stale in-progress render from a newer render');
    assert(gallery.includes('requestContext && !this._isRequestContextCurrent(requestContext)'),
        'gallery free-talk cannot cancel a stale in-progress render');
    assert(gallery.includes('_activeTypingOwner') && gallery.includes('if (!ownsTyping())'),
        'gallery free-talk cannot isolate an old animation frame from a newer render');
}

function verifyCacheKeyWiring() {
    const main = read('assets/js/modules/FreeTalkSystem.js');
    const gallery = read('assets/js/gallery-freetalk.js');
    assert(main.includes("_optimized[0]?.role === 'system'")
        && main.includes('getFreeTalkStablePromptFingerprint(_stablePromptContent)')
        && main.includes('const _cacheKey = charKey && _stablePromptFingerprint'),
        'main cache key is not gated by an actual system prompt stable prefix');
    assert(gallery.includes("_optimized[0]?.role === 'system'")
        && gallery.includes('getGalleryFreeTalkStablePromptFingerprint(_stablePromptContent)')
        && gallery.includes('const _gftCacheKey = requestCharId && _stablePromptFingerprint'),
        'gallery cache key is not gated by an actual system prompt stable prefix');
    assert(!main.includes('getFreeTalkStablePromptHash(_optimized[0]?.content || finalContent)'),
        'main cache key can still hash the latest user message when the system prompt is missing');
    assert(!gallery.includes('getGalleryFreeTalkStablePromptHash(_optimized[0]?.content || finalContent)'),
        'gallery cache key can still hash the latest user message when the system prompt is missing');
    for (const dimension of [
        'encodeFreeTalkCacheKeyPart(_lang)',
        'encodeFreeTalkCacheKeyPart(charKey)',
        "this._isRemote ? 'r' : 'f'",
        ':s${_stablePromptFingerprint}'
    ]) {
        assert(main.includes(dimension), `main cache key lost required stable dimension: ${dimension}`);
    }
    for (const dimension of [
        'encodeGalleryFreeTalkCacheKeyPart(this.lang)',
        'encodeGalleryFreeTalkCacheKeyPart(requestCharId)',
        ':s${_stablePromptFingerprint}'
    ]) {
        assert(gallery.includes(dimension), `gallery cache key lost required stable dimension: ${dimension}`);
    }
}

function verifyGroupPromptCacheContract(context) {
    const promptData = context.window.getPromptData('ko', '민준');
    const makePrompt = ({ affinity = 24, choiceState = '숨기지 않고 말했다', secondId = 'Dain', secondName = '다인' } = {}) => (
        context.window.buildCupidGroupSystemPrompt({
            lang: 'ko',
            participants: [
                { id: 'Seoyeon', name: '서연', role: 'lead' },
                { id: secondId, name: secondName, role: 'tempter' }
            ],
            locationName: '교실',
            context: '두 사람이 함께 주인공을 마주하고 있다.',
            extraGuideline: '각자의 말투와 상처를 지킨다.',
            playerName: '민준',
            choiceState,
            gameContexts: { Seoyeon: '어젯밤 일을 알게 됐다.', [secondId]: '먼저 다가갔다.' },
            affinities: { Seoyeon: affinity, [secondId]: 32 },
            promptData
        })
    );
    const first = makePrompt();
    for (const lang of ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt']) {
        for (const staffId of ['Teacher', 'Nurse']) {
            const buildStaffPrompt = (locationName, affinity) => context.window.buildCupidGroupSystemPrompt({
                lang,
                participants: [{ id: staffId, name: staffId, role: 'lead' }, { id: 'Dain', name: 'Dain', role: 'tempter' }],
                locationName,
                context: 'The promised school check-in was missed.',
                affinities: { [staffId]: affinity, Dain: 20 },
                promptData: context.window.getPromptData(lang, 'Alex')
            });
            const firstStaff = buildStaffPrompt('Classroom', 10);
            const laterStaff = buildStaffPrompt('Hallway', -20);
            const parts = splitCacheBoundary(firstStaff, `${lang}/staff-check-in/${staffId}`);
            assert(!parts.stable.includes('원래 마음을 주던 상대이자 방금 배신을 알게 된 사람')
                && !parts.stable.includes('the committed partner who has just learned of the betrayal'),
            `${lang}/${staffId} was assigned a student's romantic-partner role`);
            assert(parts.stable.includes(lang === 'ko' ? '이번 장면의 중심 인물' : 'the focus character in this scene'),
                `${lang}/${staffId} lost its school conversation role`);
            assert(context.window.CupidFreeTalkCore.getStablePromptFingerprint(firstStaff)
                === context.window.CupidFreeTalkCore.getStablePromptFingerprint(laterStaff),
            `${lang}/${staffId} check-in cache depends on live location or affinity`);
            assert(parts.dynamic.includes('The promised school check-in was missed.'),
                `${lang}/${staffId} check-in context is not after the cache boundary`);
        }
    }
    const dynamicVariant = makePrompt({ affinity: -18, choiceState: '알림을 보고도 다시 거짓말했다' });
    const pairVariant = makePrompt({ secondId: 'Yuna', secondName: '유나' });
    const firstParts = splitCacheBoundary(first, 'main/group/Seoyeon-Dain');
    const dynamicParts = splitCacheBoundary(dynamicVariant, 'main/group/Seoyeon-Dain/dynamic');
    assert(firstParts.stable === dynamicParts.stable,
        'group stable prefix changed when only choice or affinity changed');
    assert(firstParts.dynamic !== dynamicParts.dynamic,
        'group dynamic tail did not change with current choice or affinity');
    assert(context.window.CupidFreeTalkCore.getStablePromptFingerprint(first)
        === context.window.CupidFreeTalkCore.getStablePromptFingerprint(dynamicVariant),
    'group cache fingerprint includes turn-varying state');
    assert(context.window.CupidFreeTalkCore.getStablePromptFingerprint(first)
        !== context.window.CupidFreeTalkCore.getStablePromptFingerprint(pairVariant),
    'different group participant pairs share one cache fingerprint');
    assert(firstParts.stable.includes('누구에게나 반말만 씁니다')
        && firstParts.stable.includes('-요·-습니다·-세요는 인용 외엔 금지합니다'),
    'group characters can drift into Korean honorifics');
    assert(firstParts.dynamic.includes('서연의 호감도별 친밀감 경계')
        && firstParts.dynamic.includes('키스, 성적인 접촉, 성행위는 거절하거나 멈춥니다')
        && dynamicParts.dynamic.includes('손잡기, 포옹, 키스, 성적인 접촉을 모두 거절'),
    'group affinity changes do not produce distinct dynamic intimacy boundaries');
    assert(firstParts.stable.includes('한 인물의 이번 턴 회복은 최대 +3')
        && firstParts.stable.includes('두 인물의 회복 합계도 최대 +3'),
    'group prompt lost per-speaker or combined recovery caps');
    assert(firstParts.stable.includes('[그룹 선택 미션]')
        && firstParts.stable.includes('선택받지 못한 인물의 affinity는 반드시 음수로 주세요')
        && firstParts.stable.includes('-3이 이 미션의 최소 손실입니다')
        && firstParts.stable.includes('두 사람의 affinity를 각각 -3 이하로 주세요'),
    'day-five confrontation lost the shared group-choice loss rule');
    assert(firstParts.stable.includes('책임을 피하거나')
        && firstParts.stable.includes('두 사람 모두 호감도가 떨어질 수 있습니다'),
    'group prompt does not allow new misconduct to hurt both characters');
    assert(firstParts.stable.includes('같은 사실만 되풀이해 다시 감점하지 마세요'),
        'group prompt can repeat the original betrayal penalty mechanically');
    assert(firstParts.stable.includes('매 턴 원래 마음을 주던 상대가 먼저 말합니다')
        && firstParts.stable.includes('두 사람을 반드시 모두 넣고'),
    'group prompt no longer guarantees the harmed-partner then tempter response order');
    assert(firstParts.stable.includes('작은 다육이')
        && firstParts.stable.includes('리듬게임')
        && firstParts.stable.includes('취향과 연애 방식을 공통 대사 소재처럼 나열하지 말고'),
    'group prompt does not carry both distinct relationship profiles into the shared scene');
    assert(firstParts.stable.includes('[캐릭터 핵심 — 서연]')
        && firstParts.stable.includes('[캐릭터 핵심 — 다인]')
        && firstParts.stable.includes('관계상 위치:'),
    'group prompt does not isolate both character cards for local prompt compaction');
    for (const character of CHARACTERS) {
        const partner = character.key === 'Dain'
            ? { id: 'Seoyeon', name: '서연' }
            : { id: 'Dain', name: '다인' };
        const characterGroupPrompt = context.window.buildCupidGroupSystemPrompt({
            lang: 'ko',
            participants: [
                { id: character.key, name: character.sharedName, role: 'lead' },
                { ...partner, role: 'tempter' }
            ],
            promptData,
            affinities: { [character.key]: 20, [partner.id]: 18 }
        });
        assert(splitCacheBoundary(characterGroupPrompt, `main/group/${character.key}`).stable.includes(character.relationshipSignal),
            `group prompt lost ${character.key}'s relationship profile`);
    }
    assert(firstParts.stable.includes('두 인물 모두 매 응답에서 주인공을 직접 대면합니다')
        && firstParts.stable.includes('처음부터 양다리였는지')
        && firstParts.stable.includes('자신을 가지고 논 건지')
        && firstParts.stable.includes('분명한 해명을 요구합니다'),
    'group prompt does not make both characters directly demand an explanation from the protagonist');
    assert(firstParts.stable.includes('상대를 다치게 했다는 죄책감')
        && firstParts.stable.includes('주인공을 놓치고 싶지 않고 자신이 선택받길 바라는 욕망')
        && firstParts.stable.includes('죄책감만으로 물러나거나 양보하지 않습니다'),
    'group tempter does not hold guilt and possessive desire at the same time');
    assert(firstParts.stable.includes('둘은 서로에게 묻고 답하거나 반박할 수 있습니다')
        && firstParts.stable.includes('주인공을 빼놓은 채 둘만 이야기하다 응답을 끝내거나'),
    'group prompt lost character-to-character dialogue or allows it to displace the protagonist confrontation');
    assert(firstParts.stable.includes('허용 표정:'),
        'group prompt does not expose each participant expression asset contract');

    const makeSocialPrompt = ({ affinity = 24, choiceState = '겹친 사용 시간을 함께 확인한다' } = {}) => (
        context.window.buildCupidGroupSystemPrompt({
            lang: 'ko',
            groupMode: 'route_social',
            participants: [
                { id: 'Seoyeon', name: '서연', role: 'focus' },
                { id: 'Dain', name: '다인', role: 'companion' }
            ],
            locationName: '학생회실',
            context: '체육관 사용 시간이 겹쳐 셋이 일정을 맞추고 있다.',
            extraGuideline: '갈등을 억지로 만들지 않고 서로의 말을 실제로 듣는다.',
            playerName: '민준',
            choiceState,
            gameContexts: { Seoyeon: '사용표를 정리했다.', Dain: '추가 연습 시간을 확인하러 왔다.' },
            affinities: { Seoyeon: affinity, Dain: 32 },
            promptData
        })
    );
    const social = makeSocialPrompt();
    const socialDynamicVariant = makeSocialPrompt({ affinity: -8, choiceState: '주인공이 새로운 조정안을 말했다' });
    const socialParts = splitCacheBoundary(social, 'main/group-social/Seoyeon-Dain');
    const socialDynamicParts = splitCacheBoundary(socialDynamicVariant, 'main/group-social/Seoyeon-Dain/dynamic');
    assert(socialParts.stable === socialDynamicParts.stable
        && socialParts.dynamic !== socialDynamicParts.dynamic,
    'social group prompt does not keep live route state after the cache boundary');
    assert(context.window.CupidFreeTalkCore.getStablePromptFingerprint(social)
        === context.window.CupidFreeTalkCore.getStablePromptFingerprint(socialDynamicVariant),
    'social group cache fingerprint includes turn-varying state');
    assert(context.window.CupidFreeTalkCore.getStablePromptFingerprint(first)
        !== context.window.CupidFreeTalkCore.getStablePromptFingerprint(social),
    'confrontation and social group modes share one stable cache fingerprint');
    assert(socialParts.stable.includes('[세 사람의 자연스러운 대화]')
        && socialParts.stable.includes('중심 인물이 화제를 이끌되')
        && socialParts.stable.includes('동행 인물도 자기 판단과 욕구가 있는 사람으로 반응합니다'),
    'social group prompt lost focus-character and companion agency');
    assert(socialParts.stable.includes('방금 나온 말과 행동을 서로 듣고')
        && socialParts.stable.includes('주인공을 대화에서 밀어낸 채 둘만의 결론으로 끝내지는 마세요'),
    'social group prompt does not support natural character-to-character exchange');
    assert(socialParts.stable.includes('갈등이 없다면 억지 질투, 추궁, 비밀 폭로를 만들지 마세요')
        && !socialParts.stable.includes('처음부터 양다리였는지')
        && !socialParts.stable.includes('-40 또는 -50'),
    'social group prompt leaks the day-five betrayal confrontation');
    assert(socialParts.stable.includes('한 인물의 이번 턴 상승은 최대 +3')
        && socialParts.stable.includes('두 인물의 양수 합계도 최대 +3')
        && socialParts.stable.includes('대화를 이어 갔다는 이유만으로 자동 가산하지 마세요'),
    'social group prompt lost bounded, behavior-based affinity scoring');
    assert(socialParts.stable.includes('[그룹 선택 미션]')
        && socialParts.stable.includes('선택받지 못한 인물의 affinity는 반드시 음수로 주세요')
        && socialParts.stable.includes('-3이 이 미션의 최소 손실입니다')
        && socialParts.stable.includes('두 사람의 affinity를 각각 -3 이하로 주세요'),
    'later social group prompt lost the shared group-choice loss rule');

    const rivalryPrompt = context.window.buildCupidGroupSystemPrompt({
        lang: 'ko',
        groupMode: 'route_rivalry',
        participants: [
            { id: 'Seoyeon', name: '서연', role: 'focus' },
            { id: 'Dain', name: '다인', role: 'companion' }
        ],
        locationName: '학생회실',
        context: '두 일정이 겹쳐 주인공이 누구를 먼저 도울지 답해야 한다.',
        extraGuideline: '둘 다 주인공의 우선순위를 의식한다.',
        playerName: '민준',
        choiceState: '누구를 먼저 도울지 묻는 질문이 나왔다',
        gameContexts: { Seoyeon: '일정을 정리했다.', Dain: '연습 시간을 확인하러 왔다.' },
        affinities: { Seoyeon: 12, Dain: 34 },
        promptData
    });
    const rivalryParts = splitCacheBoundary(rivalryPrompt, 'main/group-rivalry/Seoyeon-Dain');
    assert(context.window.CupidFreeTalkCore.getStablePromptFingerprint(rivalryPrompt)
        !== context.window.CupidFreeTalkCore.getStablePromptFingerprint(social),
    'rivalry and social group modes share one stable cache fingerprint');
    assert(rivalryParts.stable.includes('[은근한 선택 경쟁]')
        && rivalryParts.stable.includes('주인공이 답하기 전에 둘이 알아서 타협하거나')
        && rivalryParts.stable.includes('후자는 억지로 괜찮은 척하거나 곧바로 양보하지 않습니다')
        && rivalryParts.stable.includes('선택받지 못한 인물의 affinity는 반드시 음수로 주세요')
        && rivalryParts.stable.includes('-3이 이 미션의 최소 손실입니다')
        && rivalryParts.stable.includes('두 사람의 affinity를 각각 -3 이하로 주세요')
        && !rivalryParts.stable.includes('선택 자체만으로 정해진 감점을 기계적으로 주지는 마세요'),
    'rivalry prompt no longer guarantees an unavoidable but minimizable loss for the unchosen character');
    assert(rivalryParts.dynamic.includes('[현재 선택 경쟁]')
        && rivalryParts.dynamic.includes('현재 호감도=12')
        && rivalryParts.dynamic.includes('현재 호감도=34'),
    'rivalry prompt lost dynamic state after the cache boundary');
}

function verifyTypingOwnerIsolation(context) {
    const frames = [];
    context.requestAnimationFrame = callback => {
        frames.push(callback);
        return frames.length;
    };

    const makeMessageElement = () => ({
        _html: '',
        children: [],
        scrollTop: 0,
        scrollHeight: 0,
        set innerHTML(value) {
            this._html = String(value || '');
            this.children = [];
        },
        get innerHTML() { return this._html; },
        appendChild(child) { this.children.push(child); }
    });
    const makeSpan = () => ({ className: '', textContent: '' });

    context.KoreanProcessor = class KoreanProcessor {};
    context.CHAR_NAME_MAP = {};
    vm.runInContext(read('assets/js/modules/DialogueSystem.js'), context, {
        filename: 'assets/js/modules/DialogueSystem.js'
    });

    const dialogueMessage = makeMessageElement();
    const dialogueEvents = [];
    const dialogue = new context.window.DialogueSystem({}, {
        messageEl: dialogueMessage,
        chatSkipBtn: null,
        charSlots: {}
    });
    dialogue.processPlaceholders = text => text;
    dialogue.parseNarration = text => text;
    dialogue.updateTalkingAnimation = (charName, active) => dialogueEvents.push(`${charName}:${active}`);

    let oldDialogueCurrent = true;
    dialogue.typeText('old', 'Old', null, () => oldDialogueCurrent);
    const oldDialogueFrame = frames.shift();
    oldDialogueCurrent = false;
    dialogue.typeText('new', 'New', null, () => true);
    const newDialogueFrame = frames.shift();
    const newDialogueOwner = dialogue._activeRenderOwner;
    oldDialogueFrame(1);
    assert(dialogue.isTyping, 'old DialogueSystem frame cleared the new typing state');
    assert(dialogue._activeRenderOwner === newDialogueOwner,
        'old DialogueSystem frame released the new render owner');
    assert(!dialogueEvents.includes('Old:false'),
        'old DialogueSystem frame disabled animation after a new render started');
    newDialogueFrame(1);
    frames.shift()(1000);
    assert(!dialogue.isTyping && dialogue._activeRenderOwner === null,
        'current DialogueSystem render did not release its own typing state');

    const galleryMessage = makeMessageElement();
    context.document = {
        documentElement: { lang: 'ko' },
        getElementById: id => id === 'message' ? galleryMessage : null,
        createElement: () => makeSpan()
    };
    const gallery = new context.window.GalleryFreeTalk('ko', {});
    gallery._sanitizePlayerPlaceholders = text => text;
    gallery._sanitizeSegmentsPlaceholders = segments => segments;
    gallery._parseSegments = text => [{ type: 'text', content: text }];
    gallery._zetaFormatText = text => text;

    gallery._typeText('old');
    const oldGalleryFrame = frames.shift();
    gallery._typeText('new');
    const newGalleryFrame = frames.shift();
    const newGalleryOwner = gallery._activeTypingOwner;
    oldGalleryFrame(1);
    assert(gallery.isTyping, 'old gallery frame cleared the new typing state');
    assert(gallery._activeTypingOwner === newGalleryOwner,
        'old gallery frame released the new typing owner');
    newGalleryFrame(1);
    frames.shift()(1000);
    assert(!gallery.isTyping && gallery._activeTypingOwner === null,
        'current gallery render did not release its own typing state');
}

verifyGalleryLoaderOrder();
const context = createPromptRuntime();
verifyMainAndGalleryPrompts(context);
verifyMemories(context);
verifyLatestUserCanon(context);
verifyWiringAndScenePrompts();
verifyAdultExamplesOwnUserActions();
verifyRequestOwnershipGuards();
verifyCacheKeyWiring();
verifyGroupPromptCacheContract(context);
verifyTypingOwnerIsolation(context);

console.log(`Verified Korean runtime prompts for ${CHARACTERS.length} romance characters plus Haeun, 49 scene prompts, daily turn limits, loader order, memories, user agency, and stale-turn ownership.`);
