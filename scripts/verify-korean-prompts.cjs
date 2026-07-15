const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const CHARACTERS = [
    { key: 'Seoyeon', mainName: '서연', galleryId: 'seyoun', cardSignal: '학생회장' },
    { key: 'Yuna', mainName: '유나', galleryId: 'yuna', cardSignal: '영구 문신' },
    { key: 'Dain', mainName: '다인', galleryId: 'dain', cardSignal: '배구부 선수' },
    { key: 'Teacher', mainName: '담임', galleryId: 'teacher', cardSignal: '담임 교사' },
    { key: 'Nurse', mainName: '보건', galleryId: 'nurse', cardSignal: '보건 교사' }
];
const REQUIRED_BLOCKS = [
    '[한국어 원문체]',
    '[자연스러운 한국어 말투]',
    '[캐릭터 문체]'
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
    assert(prompt.includes('대사만으로 자연스러우면 dialogue 하나면 충분하며'),
        `${label} does not keep narration optional`);
    assert(prompt.includes('===CACHE_BOUNDARY==='), `${label} is missing the cache boundary`);
    assert(prompt.includes('현재 상태:'), `${label} is missing the Korean state label`);
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
        assert(mainPrompt.includes(character.cardSignal), `[main/${character.key}] used the generic card`);
        assert(!mainPrompt.includes('[성적]'), `[main/${character.key}] injected an adult sexual example`);
        assert(mainPrompt.includes('캐릭터:'), `[main/${character.key}] missing the Korean character label`);
        assert(mainPrompt.includes('장면 맥락:'), `[main/${character.key}] missing the Korean context label`);

        const adultExamples = context.window.getFreeTalkVoiceExamples(
            'ko', character.key, character.key, 3, true
        );
        assert(adultExamples.includes('[성적]'), `[gallery/${character.key}] missing the adult example`);

        const galleryPrompt = gallery._buildSystemPrompt(character.galleryId);
        galleryPrompts[character.key] = galleryPrompt;
        assertCommonKoreanPrompt(galleryPrompt, `gallery/${character.key}`);
        assert(!galleryPrompt.includes('[성적]'), `[gallery/${character.key}] injected the adult example`);
        assert(galleryPrompt.includes('현재 장면의 인물은'), `[gallery/${character.key}] missing the in-world role rule`);
        assert(galleryPrompt.includes('연인 관계:'), `[gallery/${character.key}] missing the relationship label`);
    }

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
    const mainBaseParts = splitCacheBoundary(mainPrompts.Seoyeon, 'main cache baseline');
    const mainVariantParts = splitCacheBoundary(mainDynamicVariant, 'main cache dynamic variant');
    assert(mainBaseParts.stable === mainVariantParts.stable,
        'main stable cache prefix changes with live scene, affinity, memory, relationship, or player state');
    for (const signal of [
        'CACHE_DYNAMIC_ROOM', 'CACHE_DYNAMIC_CONTEXT', 'CACHE_DYNAMIC_SCENE',
        'CACHE_DYNAMIC_MEMORY', 'CACHE_DYNAMIC_SOCIAL', 'CACHE_DYNAMIC_USER',
        'CACHE_DYNAMIC_RELATIONSHIP', '-77'
    ]) {
        assert(!mainVariantParts.stable.includes(signal), `main stable cache prefix leaked dynamic value: ${signal}`);
        assert(mainVariantParts.dynamic.includes(signal), `main dynamic cache suffix lost value: ${signal}`);
    }
    assert(!mainDynamicVariant.includes('턴=') && !mainDynamicVariant.includes('[현재 진행 상황]'),
        'main prompt still exposes a turn budget to the roleplay model');
    assert(mainBaseParts.stable.includes('호칭:') && mainBaseParts.stable.includes('거리와 상호작용:'),
        'main static character guidance is not promoted ahead of the cache boundary');
    assert(getRuntimeStableHash(context, 'getFreeTalkStablePromptHash', mainPrompts.Seoyeon)
        === getRuntimeStableHash(context, 'getFreeTalkStablePromptHash', mainDynamicVariant),
        'main stable prompt hash changes with dynamic state');
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
    assert(gallery.CHAR_PERSONALITIES.teacher.ko.includes('4~5년'), 'teacher adult reunion timing is missing');
    assert(gallery.CHAR_PERSONALITIES.nurse.ko.includes('4~5년'), 'nurse adult reunion timing is missing');
}

function verifyMemories(context) {
    const memories = context.window.FLAG_MEMORIES;
    const byFlag = flag => memories.filter(memory => memory.flag === flag);
    const one = (flag, char) => memories.find(memory => memory.flag === flag && (!char || memory.char === char));

    assert(one('invited_nurse_home', '보건선생님')?.ko.includes('경계가 흐려진 일'),
        'legacy nurse-home event is not retained with a professional boundary');
    assert(one('invited_nurse_home', '보건선생님')?.ko.includes('주소가 오갔습니다'),
        'legacy nurse-home event lost its established fact');

    const teacherDating = one('isDating_Teacher', '담임선생님')?.ko || '';
    const nurseDating = one('isDating_Nurse', '보건선생님')?.ko || '';
    assert(teacherDating.includes('4~5년') && teacherDating.includes('독립한 성인') && teacherDating.includes('교사와 학생 관계는 끝났습니다'),
        'teacher dating memory does not enforce the adult reunion canon');
    assert(nurseDating.includes('4~5년') && nurseDating.includes('독립한 성인') && nurseDating.includes('비밀 연애가 아닙니다'),
        'nurse dating memory does not enforce the adult reunion canon');

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
    const cupid = vm.runInContext(`buildCupidLatestUserCanonBlock(${source}, 'ko', '')`, context);
    const gallery = vm.runInContext(`buildGalleryLatestUserCanonBlock(${source}, 'ko', '')`, context);
    for (const [label, block] of [['main', cupid], ['gallery', gallery]]) {
        assert(block.includes('[이번 턴 사용자 입력]'), `${label} canon block has the old heading`);
        assert(block.includes('최신 사용자 입력:'), `${label} canon block has the old user label`);
        assert(block.includes('이전 설정, 캐릭터 카드, 저장 요약, 장면 상태와 충돌해도 같습니다'),
            `${label} canon block lost latest-user precedence`);
        assert(block.includes('"내/제 손·입술·손끝"은 사용자 캐릭터의 몸입니다'),
            `${label} canon block lost user-body ownership`);
        assert(block.includes('다음 행동·대사·동의·거절·속마음은 대신 쓰지 않으며'),
            `${label} canon block lost user agency`);
        assert(!block.includes('Latest user:'), `${label} canon block still has an English meta label`);
    }

    const negativeAffinity = vm.runInContext(
        `buildCupidAffinityIntimacyProgressionPatch('ko', -1, false)`, context
    );
    assert(negativeAffinity.includes('현재 의사나 동의를 대신하지 않습니다'),
        'affinity guidance still treats score as consent');
    assert(negativeAffinity.includes('affinity를 올리지 말고 유지하거나 낮추세요'),
        'negative affinity still rewards an unwanted physical approach');
}

function verifyWiringAndScenePrompts() {
    const configSource = read('assets/js/modules/config.js');
    const freeTalkSource = read('assets/js/modules/FreeTalkSystem.js');
    assert(/"담임"\s*:\s*"Teacher"/.test(configSource), 'CHAR_NAME_MAP is missing the 담임 alias');
    assert(/"보건"\s*:\s*"Nurse"/.test(configSource), 'CHAR_NAME_MAP is missing the 보건 alias');
    assert(freeTalkSource.includes('const gameContext = this.getGameContext(charKey, lang);'),
        'game memories do not use the canonical character key');
    assert(freeTalkSource.includes('this.stateManager.getChatMemory(charKey)'),
        'chat history does not read the canonical character key');
    assert(freeTalkSource.includes('this.stateManager.setChatMemory(charKey, requestHistory);'),
        'chat history does not save the canonical character key');
    assert(freeTalkSource.includes('[scene.personality, scene.extra_guideline].filter(Boolean).join("\\n")'),
        'scene personality is not passed into the system prompt');

    const sceneFiles = [
        'assets/js/i18n/ko/day1_2_lunch.json',
        'assets/js/i18n/ko/day1_3_afterschool.json',
        'assets/js/i18n/ko/day3_1_morning.json',
        'assets/js/i18n/ko/day3_3_afterschool.json'
    ];
    const scenePrompts = [];
    function collect(value) {
        if (Array.isArray(value)) return value.forEach(collect);
        if (!value || typeof value !== 'object') return;
        if (value.personality) scenePrompts.push(`${value.context || ''}\n${value.personality}`);
        Object.values(value).forEach(collect);
    }
    sceneFiles.forEach(file => collect(JSON.parse(read(file))));
    assert(scenePrompts.length === 10, `expected 10 active Korean scene prompts, found ${scenePrompts.length}`);
    const joined = scenePrompts.join('\n');
    for (const stalePhrase of ['Day 1', 'Day 3', '톤:', '티키타카', '쿨뷰티', '신비주의 문학소녀', '체육계']) {
        assert(!joined.includes(stalePhrase), `active Korean scene prompt still contains: ${stalePhrase}`);
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
        && main.includes('getFreeTalkStablePromptHash(_stablePromptContent)')
        && main.includes('const _cacheKey = charKey && _stablePromptHash'),
        'main cache key is not gated by an actual system prompt stable prefix');
    assert(gallery.includes("_optimized[0]?.role === 'system'")
        && gallery.includes('getGalleryFreeTalkStablePromptHash(_stablePromptContent)')
        && gallery.includes('const _gftCacheKey = requestCharId && _stablePromptHash'),
        'gallery cache key is not gated by an actual system prompt stable prefix');
    assert(!main.includes('getFreeTalkStablePromptHash(_optimized[0]?.content || finalContent)'),
        'main cache key can still hash the latest user message when the system prompt is missing');
    assert(!gallery.includes('getGalleryFreeTalkStablePromptHash(_optimized[0]?.content || finalContent)'),
        'gallery cache key can still hash the latest user message when the system prompt is missing');
    for (const dimension of [
        'encodeFreeTalkCacheKeyPart(_lang)',
        'encodeFreeTalkCacheKeyPart(charKey)',
        "this._isRemote ? 'r' : 'f'",
        ':s${_stablePromptHash}'
    ]) {
        assert(main.includes(dimension), `main cache key lost required stable dimension: ${dimension}`);
    }
    for (const dimension of [
        'encodeGalleryFreeTalkCacheKeyPart(this.lang)',
        'encodeGalleryFreeTalkCacheKeyPart(requestCharId)',
        ':s${_stablePromptHash}'
    ]) {
        assert(gallery.includes(dimension), `gallery cache key lost required stable dimension: ${dimension}`);
    }
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
verifyTypingOwnerIsolation(context);

console.log(`Verified Korean runtime prompts for ${CHARACTERS.length} characters, 10 scene prompts, loader order, memories, user agency, and stale-turn ownership.`);
