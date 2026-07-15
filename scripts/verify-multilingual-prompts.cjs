const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
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
    'assets/js/prompts.js',
    'assets/js/gallery-freetalk.js',
    'assets/js/modules/FreeTalkSystem.js'
]) {
    const source = fs.readFileSync(path.join(root, relativePath), 'utf8');
    vm.runInContext(source, context, { filename: relativePath });
}
context.FLAG_MEMORIES = context.window.FLAG_MEMORIES;

const languages = ['en', 'es', 'ja', 'fr', 'de', 'pt'];
const unnamedPlayerGuardByLanguage = {
    en: 'saved name when present',
    es: 'nombre solo si aparece guardado',
    ja: '保存された名前がある時だけ',
    fr: "prénom seulement s'il est enregistré",
    de: 'Namen nur, wenn er im Status gespeichert ist',
    pt: 'nome apenas se estiver salvo'
};
const characters = ['Seoyeon', 'Yuna', 'Dain', 'Teacher', 'Nurse'];
const promptKeys = {
    Seoyeon: 'Seoyeon',
    Yuna: 'Yuna',
    Dain: 'Dain',
    Teacher: 'Homeroom Teacher',
    Nurse: 'Nurse'
};
const galleryIds = {
    Seoyeon: 'seyoun',
    Yuna: 'yuna',
    Dain: 'dain',
    Teacher: 'teacher',
    Nurse: 'nurse'
};
const languageSignals = {
    en: /\b(?:you|your|the|today)\b/i,
    es: /[¿¡áéíóúñ]/i,
    ja: /[\u3040-\u30ff\u4e00-\u9fff]/u,
    fr: /[àâçéèêëîïôùûüœ’]/i,
    de: /[äöüß]|\b(?:ich|du|dein|heute)\b/i,
    pt: /[ãõáéíóúçêô]/i
};
const removedEditorPressure = [
    'answer in polished target-language prose',
    'silently rewrite every dialogue and narration line',
    'Before outputting JSON, do a native English rewrite pass',
    'Most spoken lines should be one or two short sentences',
    '10〜35字程度',
    'haz una pasada como editor',
    'una o dos frases cortas',
    'fais une passe comme un éditeur',
    'une ou deux phrases courtes',
    'Prüfe den JSON vor der Ausgabe wie ein muttersprachlicher deutscher Lektor',
    'ein oder zwei kurze Sätze',
    'faça uma passada como editor',
    'uma ou duas frases curtas'
];
const activeFreeTalkIds = [
    'lunch_seo_freetalk',
    'lunch_dain_freetalk',
    'lunch_yuna_freetalk',
    'after_homeroom_freetalk',
    'after_nurse_freetalk',
    'hidden_homeroom_d3_freetalk',
    'hidden_nurse_d3_freetalk',
    'after3_seo_freetalk',
    'after3_yuna_freetalk',
    'after3_dain_freetalk'
];
const freeTalkPressureByLanguage = {
    ko: /장난과 짧은 문답|문장이 짧|답이 짧|감탄부호|클립보드|손끝|책갈피를 만|접었다 펴|손목 보호대|유일한 방어|무거운 과거는 꺼내지|꾸며 낸 단계/,
    en: /Keep it to banter and short exchanges|uses lots of exclamation marks|sentences get longer|sentences grow shorter|trails off or deflects with actions|answers grow shorter|clipboard grip|fingertip movements|fidgets with a note or bookmark|folding and unfolding notes|touching the ball or wrist guard|only defense|Fewer exclamation marks|Do not bring up heavy backstory|\bTone:/i,
    es: /intercambios breves|usa muchas exclamaciones|sus frases se alargan|frases más cortas|se desvía o evade con acciones|respuestas se acortan|portapapeles|doblar y desdoblar|muñequera|Menos exclamaciones significan|\bTono:/i,
    ja: /短いやり取り中心|短いやりとり中心|感嘆符が多い|心を開くと文が長くなる|文が短くなる|言葉を濁したり行動で逸らす|返答が短くなり|クリップボード|メモや栞|折ったり開いたり|リストガード|唯一の防衛機制|感嘆符が減れば|トーン[：:]/,
    fr: /échanges courts|beaucoup de points d'exclamation|ses phrases s'allongent|ses phrases raccourcissent|détourne avec des actions|réponses raccourcissent|porte-documents|plier et déplier|protège-poignet|Moins de points d'exclamation signifient|\bTon\s*:/i,
    de: /kurzen Wechseln|viele Ausrufezeichen|Sätze länger|kürzeren Sätzen|lenkt mit Handlungen ab|Antworten werden kürzer|Klemmbrett|falten und aufzufalten|Handgelenkbandage|Weniger Ausrufezeichen bedeuten|\bTon:/i,
    pt: /trocas curtas|usa muitas exclamações|frases ficam mais longas|frases mais curtas|evita com ações|respostas ficam mais curtas|prancheta|dobrar e desdobrar|munhequeira|Menos exclamações significam|\bTom:/i
};

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

function assertNoEditorPressure(prompt, label) {
    for (const phrase of removedEditorPressure) {
        assert(!prompt.includes(phrase), `${label} still injects editor or forced-brevity pressure: ${phrase}`);
    }
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

function getRuntimeStableHash(functionName, prompt) {
    return vm.runInContext(`${functionName}(${JSON.stringify(prompt)})`, context);
}

function verifyLocalizedFreeTalkInventory() {
    const scenarioContext = { SCENARIO: {}, console };
    vm.createContext(scenarioContext);
    const scenarioDir = path.join(root, 'assets/js/scenario');
    for (const file of fs.readdirSync(scenarioDir).filter(name => /^day.*\.js$/.test(name)).sort()) {
        vm.runInContext(fs.readFileSync(path.join(scenarioDir, file), 'utf8'), scenarioContext, {
            filename: `assets/js/scenario/${file}`
        });
    }
    const runtimeIds = Object.values(scenarioContext.SCENARIO)
        .flatMap(day => Object.entries(day || {}))
        .filter(([, scene]) => scene?.type === 'free_talk')
        .map(([id]) => id)
        .sort();
    assert(JSON.stringify(runtimeIds) === JSON.stringify([...activeFreeTalkIds].sort()),
        `base free_talk inventory changed: ${runtimeIds.join(', ')}`);

    for (const lang of ['ko', ...languages]) {
        const entries = new Map();
        const langDir = path.join(root, 'assets/js/i18n', lang);
        for (const file of fs.readdirSync(langDir).filter(name => name.endsWith('.json')).sort()) {
            const data = JSON.parse(fs.readFileSync(path.join(langDir, file), 'utf8'));
            for (const [id, value] of Object.entries(data)) {
                if (!value || (!Object.hasOwn(value, 'context') && !Object.hasOwn(value, 'personality'))) continue;
                assert(!entries.has(id), `[${lang}/${id}] duplicate context/personality prompt fragment`);
                entries.set(id, { value, file });
            }
        }
        assert(entries.size === activeFreeTalkIds.length,
            `[${lang}] context/personality inventory must contain exactly ${activeFreeTalkIds.length} active free-talk nodes, found ${entries.size}`);
        for (const id of activeFreeTalkIds) {
            const entry = entries.get(id);
            assert(entry, `[${lang}/${id}] missing active context/personality`);
            assert(typeof entry.value.context === 'string' && entry.value.context.trim(),
                `[${lang}/${id}] context is missing or empty`);
            assert(typeof entry.value.personality === 'string' && entry.value.personality.trim(),
                `[${lang}/${id}] personality is missing or empty`);
            const injectedPrompt = `${entry.value.context}\n${entry.value.personality}`;
            const pressureMatch = injectedPrompt.match(freeTalkPressureByLanguage[lang]);
            assert(!pressureMatch,
                `[${lang}/${id}] robotic scene pressure remains in ${entry.file}: ${pressureMatch?.[0]}`);
        }
        for (const id of entries.keys()) {
            assert(activeFreeTalkIds.includes(id), `[${lang}/${id}] dead context/personality prompt fragment remains`);
        }
    }
}

let galleryPlayerName = 'Alex';
const progress = {
    getPlayerName: () => galleryPlayerName,
    isFreeTalkUnlocked: () => false
};

for (const lang of languages) {
    galleryPlayerName = 'Alex';
    const data = context.window.getPromptData(lang, 'Alex');
    assert(data && typeof data === 'object', `[${lang}] getPromptData returned no data`);
    const canonSource = JSON.stringify([{ role: 'user', content: '*I kissed her.*' }]);
    const mainCanonBlock = vm.runInContext(`buildCupidLatestUserCanonBlock(${canonSource}, '${lang}', '')`, context);
    const galleryCanonBlock = vm.runInContext(`buildGalleryLatestUserCanonBlock(${canonSource}, '${lang}', '')`, context);
    for (const [label, block] of [['main', mainCanonBlock], ['gallery', galleryCanonBlock]]) {
        assert(block.includes('including sexual contact, already happened in the scene'),
            `[${lang}/${label}] canon block can still erase a completed sexual action`);
        assert(block.includes("This does not decide the character's consent or reciprocation"),
            `[${lang}/${label}] canon block no longer separates event fact from character consent`);
    }
    let mainCacheBaseline = '';

    for (const char of characters) {
        const key = promptKeys[char];
        assert(data.personalities[key], `[${lang}/${char}] missing main personality`);
        assert(data.styleGuidelines[key], `[${lang}/${char}] missing main voice`);
        assert(data.generalInstructions[key], `[${lang}/${char}] missing main instructions`);

        const examples = context.window.getFreeTalkVoiceExamples(lang, char, char, 3);
        assert(examples.includes('[Example Dialogue]'), `[${lang}/${char}] missing voice examples`);
        assert(languageSignals[lang].test(examples), `[${lang}/${char}] examples do not look localized`);

        const systemPrompt = context.window.buildSystemPrompt({
            isEn: lang !== 'ko',
            lang,
            sceneName: char,
            displayName: char,
            locationName: 'Test room',
            context: 'The user just greeted the character.',
            affinity: 45,
            extraGuideline: '',
            gameContext: '',
            socialContext: '',
            mediumInstruction: '',
            isRemote: false,
            promptData: data,
            playerName: 'Alex',
            knowsName: true,
            datingGuideline: ''
        });
        assert(!systemPrompt.includes('A character from the school'), `[${lang}/${char}] fell back to generic main personality`);
        assert(!systemPrompt.includes('Voice: Use a natural style for the character.'), `[${lang}/${char}] fell back to generic main voice`);
        assert(!systemPrompt.includes('undefined'), `[${lang}/${char}] main prompt contains undefined`);
        assert(!systemPrompt.includes('[Example Dialogue]'), `[${lang}/${char}] main prompt still injects voice examples`);
        assert(systemPrompt.includes('A dialogue-only reply is normal; add narration only'),
            `[${lang}/${char}] main prompt does not keep narration optional`);
        assertNoEditorPressure(systemPrompt, `[${lang}/${char}] main prompt`);
        assert(!systemPrompt.includes('[CURRENT_PROGRESS]') && !systemPrompt.includes('; turns='),
            `[${lang}/${char}] main prompt still exposes a turn budget`);
        if (char === 'Seoyeon') mainCacheBaseline = systemPrompt;
    }

    const mainDynamicVariant = context.window.buildSystemPrompt({
        isEn: true,
        lang,
        sceneName: 'Seoyeon',
        displayName: 'Seoyeon',
        locationName: 'CACHE_DYNAMIC_ROOM',
        context: 'CACHE_DYNAMIC_CONTEXT',
        affinity: -77,
        extraGuideline: 'CACHE_DYNAMIC_SCENE',
        gameContext: 'CACHE_DYNAMIC_MEMORY',
        socialContext: 'CACHE_DYNAMIC_SOCIAL',
        mediumInstruction: '',
        isRemote: false,
        promptData: data,
        playerName: 'CACHE_DYNAMIC_USER',
        knowsName: false,
        datingGuideline: 'CACHE_DYNAMIC_RELATIONSHIP'
    });
    const mainBaseParts = splitCacheBoundary(mainCacheBaseline, `[${lang}] main cache baseline`);
    const mainVariantParts = splitCacheBoundary(mainDynamicVariant, `[${lang}] main cache dynamic variant`);
    assert(mainBaseParts.stable === mainVariantParts.stable,
        `[${lang}] main stable cache prefix changes with live state`);
    assert(mainBaseParts.stable.includes('Addressing:') && mainBaseParts.stable.includes('Distance/interaction:'),
        `[${lang}] main static character guidance is not ahead of the cache boundary`);
    for (const signal of [
        'CACHE_DYNAMIC_ROOM', 'CACHE_DYNAMIC_CONTEXT', 'CACHE_DYNAMIC_SCENE',
        'CACHE_DYNAMIC_MEMORY', 'CACHE_DYNAMIC_SOCIAL', 'CACHE_DYNAMIC_USER',
        'CACHE_DYNAMIC_RELATIONSHIP', '-77'
    ]) {
        assert(!mainVariantParts.stable.includes(signal), `[${lang}] main stable prefix leaked: ${signal}`);
        assert(mainVariantParts.dynamic.includes(signal), `[${lang}] main dynamic suffix lost: ${signal}`);
    }
    assert(getRuntimeStableHash('getFreeTalkStablePromptHash', mainCacheBaseline)
        === getRuntimeStableHash('getFreeTalkStablePromptHash', mainDynamicVariant),
        `[${lang}] main stable prompt hash changes with live state`);
    const mainRemotePrompt = context.window.buildSystemPrompt({
        isEn: true,
        lang,
        sceneName: 'Seoyeon',
        displayName: 'Seoyeon',
        locationName: 'Messenger',
        context: 'The user sent a message.',
        affinity: 45,
        extraGuideline: '',
        gameContext: '',
        socialContext: '',
        mediumInstruction: 'Remote conversation.',
        isRemote: true,
        promptData: data,
        playerName: 'Alex',
        knowsName: true,
        datingGuideline: ''
    });
    assert(mainRemotePrompt.includes('Let length and rhythm follow the character and moment'),
        `[${lang}] main remote prompt does not preserve scene-paced response length`);
    assert(!mainRemotePrompt.includes('use compact dialogue and only helpful narration'),
        `[${lang}] main remote prompt still forces terse dialogue and narration`);

    const gallery = new context.window.GalleryFreeTalk(lang, progress);
    let galleryCacheBaseline = '';
    for (const char of characters) {
        const id = galleryIds[char];
        assert(gallery.CHAR_PERSONALITIES[id]?.[lang], `[${lang}/${char}] missing gallery personality`);
        assert(gallery.CHAR_DATING_PROMPTS[id]?.[lang], `[${lang}/${char}] missing gallery relationship prompt`);

        const systemPrompt = gallery._buildSystemPrompt(id);
        assert(systemPrompt.includes('Character:'), `[${lang}/${char}] gallery prompt has no character block`);
        assert(!systemPrompt.includes('[Example Dialogue]'), `[${lang}/${char}] gallery prompt still injects voice examples`);
        assert(!systemPrompt.includes('undefined'), `[${lang}/${char}] gallery prompt contains undefined`);
        assert(systemPrompt.includes('A dialogue-only reply is normal; add narration only'),
            `[${lang}/${char}] gallery prompt does not keep narration optional`);
        assertNoEditorPressure(systemPrompt, `[${lang}/${char}] gallery prompt`);
        assert(languageSignals[lang].test(systemPrompt), `[${lang}/${char}] gallery prompt lacks target-language anchors`);
        if (char === 'Seoyeon') galleryCacheBaseline = systemPrompt;
    }

    galleryPlayerName = `CACHE_DYNAMIC_GALLERY_USER_${lang}`;
    const galleryDynamicVariant = gallery._buildSystemPrompt('seyoun');
    const galleryBaseParts = splitCacheBoundary(galleryCacheBaseline, `[${lang}] gallery cache baseline`);
    const galleryVariantParts = splitCacheBoundary(galleryDynamicVariant, `[${lang}] gallery cache dynamic variant`);
    assert(galleryBaseParts.stable === galleryVariantParts.stable,
        `[${lang}] gallery stable cache prefix changes with the player name`);
    assert(!galleryBaseParts.stable.includes('Alex')
        && !galleryVariantParts.stable.includes(`CACHE_DYNAMIC_GALLERY_USER_${lang}`),
        `[${lang}] gallery stable cache prefix contains a player identity`);
    assert(galleryBaseParts.dynamic.includes('Alex')
        && galleryVariantParts.dynamic.includes(`CACHE_DYNAMIC_GALLERY_USER_${lang}`),
        `[${lang}] gallery dynamic cache suffix lost the player identity`);
    assert(getRuntimeStableHash('getGalleryFreeTalkStablePromptHash', galleryCacheBaseline)
        === getRuntimeStableHash('getGalleryFreeTalkStablePromptHash', galleryDynamicVariant),
        `[${lang}] gallery stable prompt hash changes with the player name`);

    galleryPlayerName = '';
    const galleryUnnamedPrompt = gallery._buildSystemPrompt('seyoun');
    assert(galleryUnnamedPrompt.includes('user=the user'),
        `[${lang}] gallery unnamed-user state lost its neutral fallback`);
    assert(galleryUnnamedPrompt.includes(unnamedPlayerGuardByLanguage[lang]),
        `[${lang}] gallery prompt does not condition name use on a saved player name`);
    assert(!/(?:Honey|Cariño|Chéri\(e\)|Liebling|Amor)/.test(galleryUnnamedPrompt),
        `[${lang}] gallery unnamed-user state still injects a stock pet name`);

    if (lang === 'pt') {
        const activePortuguesePromptData = [
            ...Object.values(gallery.CHAR_PERSONALITIES).map(value => value.pt),
            ...Object.values(gallery.CHAR_DATING_PROMPTS).map(value => value.pt)
        ].join('\n');
        assert(!/\b(?:voce|voces|nao|usuario|oculos|coracao|intimo|estao|so)\b/i.test(activePortuguesePromptData),
            '[pt] active gallery prompt data still contains common missing-accent forms');
    }
}

verifyLocalizedFreeTalkInventory();

console.log(`Verified ${languages.length} non-Korean languages across ${characters.length} characters, plus ${activeFreeTalkIds.length} active scene prompts in all 7 languages.`);
