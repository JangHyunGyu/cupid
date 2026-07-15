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
    '[캐릭터 문체]',
    '[대화 예시]'
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
    assert(!prompt.includes('유저'), `${label} still mixes the loanword 유저 into Korean instructions`);
    assert(!prompt.includes('<START>'), `${label} still contains the English example delimiter`);
    assert(!prompt.includes('{{user}}') && !prompt.includes('{{char}}'),
        `${label} still contains English example placeholders`);
    assert(!prompt.includes('enum'), `${label} still contains an avoidable English meta term`);
    assert(prompt.includes('예시 1') && prompt.includes('사용자:') && prompt.includes('캐릭터:'),
        `${label} does not use Korean example labels`);
    assert(!prompt.includes('undefined'), `${label} contains undefined`);
}

function verifyMainAndGalleryPrompts(context) {
    const promptData = context.window.getPromptData('ko', '민준');
    const progress = {
        getPlayerName: () => '민준',
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
            currentMaxTurns: 3,
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
        assert(galleryPrompt.includes('[성적]'), `[gallery/${character.key}] missing the adult example`);
        assert(galleryPrompt.includes('현재 장면의 인물은'), `[gallery/${character.key}] missing the in-world role rule`);
        assert(galleryPrompt.includes('연인 관계:'), `[gallery/${character.key}] missing the relationship label`);
    }

    assert(mainPrompts.Teacher.includes('공개 합평') && mainPrompts.Teacher.includes('따로 만날 일은 아니야'),
        'main Teacher prompt does not model the school-time professional boundary');
    assert(!mainPrompts.Teacher.includes('오늘은 그냥 안기고 싶어'),
        'main Teacher prompt leaked a post-graduation lover example');
    assert(galleryPrompts.Teacher.includes('오늘은 그냥 안기고 싶어'),
        'gallery Teacher prompt does not use the post-graduation example set');
    assert(!galleryPrompts.Teacher.includes('주말에 따로 원고 얘기하면 안 돼요'),
        'gallery Teacher prompt leaked a school-time boundary example');
    assert(!mainPrompts.Nurse.includes('오늘 좀 외로웠어'),
        'main Nurse prompt leaked a post-graduation lover example');
    assert(galleryPrompts.Nurse.includes('오늘 좀 외로웠어'),
        'gallery Nurse prompt does not use the post-graduation example set');

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
    assert(freeTalkSource.includes('this.stateManager.setChatMemory(charKey, this.freeTalkHistory);'),
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

verifyGalleryLoaderOrder();
const context = createPromptRuntime();
verifyMainAndGalleryPrompts(context);
verifyMemories(context);
verifyLatestUserCanon(context);
verifyWiringAndScenePrompts();
verifyAdultExamplesOwnUserActions();

console.log(`Verified Korean runtime prompts for ${CHARACTERS.length} characters, 10 scene prompts, loader order, memories, and user agency.`);
