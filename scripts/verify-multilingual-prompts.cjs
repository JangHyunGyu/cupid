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
    'assets/js/freetalk-core.js',
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
    fr: 'prénom seulement s’il est enregistré',
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
const sharedCastLabels = {
    Seoyeon: 'Seoyeon',
    Yuna: 'Yuna',
    Dain: 'Dain',
    Teacher: 'Homeroom Teacher',
    Nurse: 'School Nurse'
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
const adultVocalizationSignals = {
    en: '[Voice in an Adult Scene]',
    es: '[Voz en una escena adulta]',
    ja: '[成人向け場面の声]',
    fr: '[Voix dans une scène adulte]',
    de: '[Stimme in einer Erwachsenenszene]',
    pt: '[Voz em uma cena adulta]'
};
const emotionalRangeSignals = {
    en: '[Emotional Range and Aftermath]',
    es: '[Amplitud y huella emocional]',
    ja: '[感情の振れ幅と余韻]',
    fr: '[Amplitude et retombée émotionnelles]',
    de: '[Emotionale Spannweite und Nachwirkung]',
    pt: '[Amplitude e consequência emocional]'
};
const livingInitiativeSignals = {
    en: '[Living Initiative]',
    es: '[Iniciativa de una persona viva]',
    ja: '[生きた人物としての主体性]',
    fr: '[Initiative d’un personnage vivant]',
    de: '[Eigeninitiative einer lebendigen Figur]',
    pt: '[Iniciativa de uma pessoa viva]'
};
const briefContinuationSignals = {
    en: '[The Latest Input Is a Brief Continue Signal]',
    es: '[La última entrada es una señal breve para continuar]',
    ja: '[最新の入力は短い続行の合図]',
    fr: '[Le dernier message est un bref signal pour continuer]',
    de: '[Die letzte Eingabe ist ein kurzes Weitersignal]',
    pt: '[A última entrada é um breve sinal para continuar]'
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
const day5EndingFreeTalkIds = [
    'day5_seo_ending_freetalk_perfect',
    'day5_seo_ending_freetalk_true_love',
    'day5_seo_ending_freetalk_good',
    'day5_seo_ending_freetalk_bittersweet',
    'day5_seo_ending_freetalk_late_good',
    'day5_yuna_ending_freetalk_perfect',
    'day5_yuna_ending_freetalk_true_love',
    'day5_yuna_ending_freetalk_good',
    'day5_yuna_ending_freetalk_bittersweet',
    'day5_yuna_ending_freetalk_late_good',
    'day5_dain_ending_freetalk_perfect',
    'day5_dain_ending_freetalk_true_love',
    'day5_dain_ending_freetalk_good',
    'day5_dain_ending_freetalk_bittersweet',
    'day5_dain_ending_freetalk_late_good',
    'day5_teacher_ending_freetalk_perfect',
    'day5_teacher_ending_freetalk_true_love',
    'day5_teacher_ending_freetalk_good',
    'day5_nurse_ending_freetalk_perfect',
    'day5_nurse_ending_freetalk_true_love',
    'day5_nurse_ending_freetalk_good'
];
const activeFreeTalkIds = [
    'lunch_seo_freetalk',
    'lunch_dain_freetalk',
    'lunch_yuna_freetalk',
    'after_homeroom_freetalk',
    'after_nurse_freetalk',
    'hidden_homeroom_d2_freetalk',
    'hidden_nurse_d2_freetalk',
    'night2_dain_freetalk',
    'night2_seo_freetalk',
    'night2_yuna_freetalk',
    'hidden_homeroom_d3_freetalk',
    'hidden_nurse_d3_freetalk',
    'after3_seo_freetalk',
    'after3_yuna_freetalk',
    'after3_dain_freetalk',
    'hidden_homeroom_d4_freetalk',
    'hidden_nurse_d4_freetalk',
    'wall_seo_freetalk',
    'wall_dain_freetalk',
    'wall_yuna_freetalk',
    ...day5EndingFreeTalkIds
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
        const endingSignatures = new Map();
        for (const id of day5EndingFreeTalkIds) {
            const value = entries.get(id)?.value;
            assert(typeof value?.text === 'string' && value.text.trim(),
                `[${lang}/${id}] ending free-talk opening is missing or empty`);
            const signature = JSON.stringify([value.text.trim(), value.context.trim(), value.personality.trim()]);
            assert(!endingSignatures.has(signature),
                `[${lang}/${id}] duplicates ending prompt ${endingSignatures.get(signature)}`);
            endingSignatures.set(signature, id);
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
    const briefContinuationRule = context.window.buildCupidLowInformationContinuationRule('...', lang);
    assert(briefContinuationRule.includes(briefContinuationSignals[lang]),
        `[${lang}] brief continuation input is missing its localized runtime rule`);
    assert(context.window.buildCupidLowInformationContinuationRule('This message contains a concrete new request.', lang) === '',
        `[${lang}] substantive input incorrectly receives the brief continuation runtime rule`);
    galleryPlayerName = 'Alex';
    const data = context.window.getPromptData(lang, 'Alex');
    assert(data && typeof data === 'object', `[${lang}] getPromptData returned no data`);
    if (lang === 'ja') {
        assert(data.personalities['Homeroom Teacher'].includes('卒業後'),
            '[ja/Teacher] main personality is missing the post-graduation continuity guard');
        assert(data.personalities.Nurse.includes('卒業後'),
            '[ja/Nurse] main personality is missing the post-graduation continuity guard');
    }
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
        assert(systemPrompt.includes('JSON only:')
            && systemPrompt.includes('"segments":[{"type":"dialogue"')
            && systemPrompt.includes('Types: narration/dialogue.'),
            `[${lang}/${char}] main prompt changed the structural output contract`);
        assertNoEditorPressure(systemPrompt, `[${lang}/${char}] main prompt`);
        assert(systemPrompt.includes(adultVocalizationSignals[lang]),
            `[${lang}/${char}] main prompt is missing the conditional adult vocalization rule`);
        assert(systemPrompt.includes(emotionalRangeSignals[lang]),
            `[${lang}/${char}] main prompt is missing the emotional-range rule`);
        assert(systemPrompt.includes(livingInitiativeSignals[lang]),
            `[${lang}/${char}] main prompt is missing living initiative`);
        assert(!systemPrompt.includes('[CURRENT_PROGRESS]') && !systemPrompt.includes('; turns='),
            `[${lang}/${char}] main prompt still exposes a turn budget`);
        assert(systemPrompt.includes('[Shared cast knowledge]'),
            `[${lang}/${char}] main prompt is missing shared cast knowledge`);
        const sharedCastKnowledge = context.window.getCupidSharedCastKnowledge(lang, char, data);
        assert(systemPrompt.includes(sharedCastKnowledge),
            `[${lang}/${char}] main prompt does not contain the complete shared cast block`);
        assert(!sharedCastKnowledge.includes(`- ${sharedCastLabels[char]}: `),
            `[${lang}/${char}] main shared cast block redundantly includes the current character`);
        for (const other of characters.filter(candidate => candidate !== char)) {
            assert(sharedCastKnowledge.includes(`- ${sharedCastLabels[other]}: `),
                `[${lang}/${char}] main shared cast block is missing ${sharedCastLabels[other]}`);
        }
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
    const mainStableStateBaseline = context.window.buildSystemPrompt({
        isEn: true,
        lang,
        sceneName: 'Seoyeon',
        displayName: 'Seoyeon',
        locationName: 'CACHE_BASE_ROOM',
        context: 'CACHE_BASE_CONTEXT',
        affinity: 45,
        extraGuideline: 'CACHE_DYNAMIC_SCENE',
        gameContext: 'CACHE_BASE_MEMORY',
        socialContext: 'CACHE_BASE_SOCIAL',
        mediumInstruction: '',
        isRemote: false,
        promptData: data,
        playerName: 'CACHE_BASE_USER',
        knowsName: true,
        datingGuideline: 'CACHE_DYNAMIC_RELATIONSHIP'
    });
    const mainBaseParts = splitCacheBoundary(mainStableStateBaseline, `[${lang}] main cache baseline`);
    const mainVariantParts = splitCacheBoundary(mainDynamicVariant, `[${lang}] main cache dynamic variant`);
    assert(mainBaseParts.stable === mainVariantParts.stable,
        `[${lang}] main stable cache prefix changes with per-turn state`);
    assert(mainBaseParts.stable.includes('Addressing:') && mainBaseParts.stable.includes('Distance/interaction:'),
        `[${lang}] main static character guidance is not ahead of the cache boundary`);
    for (const signal of [
        'CACHE_DYNAMIC_ROOM', 'CACHE_DYNAMIC_CONTEXT', 'CACHE_DYNAMIC_MEMORY',
        'CACHE_DYNAMIC_SOCIAL', 'CACHE_DYNAMIC_USER', '-77'
    ]) {
        assert(!mainVariantParts.stable.includes(signal), `[${lang}] main stable prefix leaked: ${signal}`);
        assert(mainVariantParts.dynamic.includes(signal), `[${lang}] main dynamic suffix lost: ${signal}`);
    }
    for (const signal of ['CACHE_DYNAMIC_SCENE', 'CACHE_DYNAMIC_RELATIONSHIP']) {
        assert(mainVariantParts.stable.includes(signal), `[${lang}] main stable prefix lost: ${signal}`);
        assert(!mainVariantParts.dynamic.includes(signal), `[${lang}] main dynamic suffix retained: ${signal}`);
    }
    assert(getRuntimeStableHash('getFreeTalkStablePromptHash', mainStableStateBaseline)
        === getRuntimeStableHash('getFreeTalkStablePromptHash', mainDynamicVariant),
        `[${lang}] main stable prompt hash changes with per-turn state`);
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
        assert(systemPrompt.includes('JSON only:')
            && systemPrompt.includes('"segments":[{"type":"dialogue"')
            && systemPrompt.includes('Types: narration/dialogue.'),
            `[${lang}/${char}] gallery prompt changed the structural output contract`);
        assertNoEditorPressure(systemPrompt, `[${lang}/${char}] gallery prompt`);
        assert(systemPrompt.includes(adultVocalizationSignals[lang]),
            `[${lang}/${char}] gallery prompt is missing the conditional adult vocalization rule`);
        assert(systemPrompt.includes(emotionalRangeSignals[lang]),
            `[${lang}/${char}] gallery prompt is missing the emotional-range rule`);
        assert(systemPrompt.includes(livingInitiativeSignals[lang]),
            `[${lang}/${char}] gallery prompt is missing living initiative`);
        assert(languageSignals[lang].test(systemPrompt), `[${lang}/${char}] gallery prompt lacks target-language anchors`);
        assert(systemPrompt.includes('[Shared cast knowledge]'),
            `[${lang}/${char}] gallery prompt is missing shared cast knowledge`);
        const gallerySharedCastKnowledge = context.window.getCupidSharedCastKnowledge(lang, id, data);
        assert(systemPrompt.includes(gallerySharedCastKnowledge),
            `[${lang}/${char}] gallery prompt does not contain the complete shared cast block`);
        assert(!gallerySharedCastKnowledge.includes(`- ${sharedCastLabels[char]}: `),
            `[${lang}/${char}] gallery shared cast block redundantly includes the current character`);
        for (const other of characters.filter(candidate => candidate !== char)) {
            assert(gallerySharedCastKnowledge.includes(`- ${sharedCastLabels[other]}: `),
                `[${lang}/${char}] gallery shared cast block is missing ${sharedCastLabels[other]}`);
        }
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

const getQualityIssue = context.window.getCupidRoleplayQualityIssue;
assert(typeof getQualityIssue === 'function', 'Cupid roleplay output validator is missing');

const issueCodes = (parsed, lang, charKey) => getQualityIssue(parsed, { lang, charKey }).issues;
assert(issueCodes({
    text: 'Looking past you, Yuna closes the door.',
    segments: [{ type: 'narration', text: 'Looking past you, Yuna closes the door.' }]
}, 'en', 'Yuna').includes('narration_player_point_of_view'), 'English narration second person was not rejected');
assert(!issueCodes({
    text: 'Yuna says, "I was looking for you."',
    segments: [{ type: 'dialogue', text: 'I was looking for you.' }]
}, 'en', 'Yuna').includes('narration_player_point_of_view'), 'English dialogue second person was incorrectly rejected');
assert(issueCodes({
    text: 'Sie sieht dich ruhig an.',
    segments: [{ type: 'narration', text: 'Sie sieht dich ruhig an.' }]
}, 'de', 'Yuna').includes('narration_player_point_of_view'), 'German narration second person was not rejected');
assert(issueCodes({
    text: '유나가 나를 올려다보는 순간 숨을 멈춘다.',
    segments: [{ type: 'narration', text: '유나가 나를 올려다보는 순간 숨을 멈춘다.' }]
}, 'ko', 'Yuna').includes('narration_player_point_of_view'), 'Korean first-person player narration was not rejected');
assert(issueCodes({
    text: '어�너머로',
    segments: [{ type: 'dialogue', text: '어�너머로' }]
}, 'ko', 'Yuna').includes('unicode_replacement_character'), 'Unicode replacement character was not rejected');
assert(issueCodes({
    text: 'Ihr langes schwarzes Haar fällt über die Schulter.',
    segments: [{ type: 'narration', text: 'Ihr langes schwarzes Haar fällt über die Schulter.' }]
}, 'de', 'Yuna').includes('yuna_hair_canon'), 'Yuna black-hair hallucination was not rejected');
assert(issueCodes({
    text: 'Mit 36 erinnert sie sich an die erste Begegnung.',
    segments: [{ type: 'narration', text: 'Mit 36 erinnert sie sich an die erste Begegnung.' }]
}, 'de', 'Nurse').includes('nurse_age_canon'), 'Nurse age-36 hallucination was not rejected');
assert(issueCodes({
    text: 'Als sie sich kennenlernten, war der Nutzer siebzehn.',
    segments: [{ type: 'narration', text: 'Als sie sich kennenlernten, war der Nutzer siebzehn.' }]
}, 'de', 'Nurse').includes('nurse_user_age_canon'), 'Invented user age at the nurse meeting was not rejected');
assert(issueCodes({
    text: '彼女は学校の医者だった。',
    segments: [{ type: 'narration', text: '彼女は学校の医者だった。' }]
}, 'ja', 'Nurse').includes('nurse_profession_canon'), 'Japanese nurse-as-doctor hallucination was not rejected');
assert(!issueCodes({
    text: '体温は36.5度。念のため医師に診てもらって。',
    segments: [{ type: 'dialogue', text: '体温は36.5度。念のため医師に診てもらって。' }]
}, 'ja', 'Nurse').includes('nurse_age_canon'), 'Japanese body temperature was incorrectly treated as age 36');
assert(!issueCodes({
    text: '体温は36.5度。念のため医師に診てもらって。',
    segments: [{ type: 'dialogue', text: '体温は36.5度。念のため医師に診てもらって。' }]
}, 'ja', 'Nurse').includes('nurse_profession_canon'), 'Japanese referral to a doctor was incorrectly treated as a profession claim');
assert(!issueCodes({
    text: 'あの子は黒髪だった。',
    segments: [{ type: 'dialogue', text: 'あの子は黒髪だった。' }]
}, 'ja', 'Yuna').includes('yuna_hair_canon'), 'Another character’s black hair was incorrectly assigned to Yuna');
assert(issueCodes({
    text: 'Sie hält deinem stand.',
    segments: [{ type: 'narration', text: 'Sie hält deinem stand.' }]
}, 'de', 'Nurse').includes('german_blick_grammar'), 'Broken German standhalten phrase was not rejected');
assert(!getQualityIssue({
    text: 'Yuna hält dem Blick ihres Partners stand.',
    segments: [{ type: 'narration', text: 'Yuna hält dem Blick ihres Partners stand.' }]
}, { lang: 'de', charKey: 'Yuna' }).shouldRetry, 'Clean German third-person output was incorrectly rejected');
assert(context.window.buildCupidRoleplayQualityRepairBlock(
    { reason: 'narration_player_point_of_view' },
    'de',
    'Nurse'
).includes('hält seinem/deinem Blick stand'), 'German repair block lost the correct standhalten form');
const recoverQualityFallback = context.window.recoverCupidRoleplayQualityFallback;
assert(typeof recoverQualityFallback === 'function', 'Cupid roleplay quality fallback recovery is missing');
const recoveredKoreanReply = recoverQualityFallback({
    text: '*당신을 바라본다.* 괜찮아?',
    segments: [
        { type: 'narration', text: '당신을 바라본다.' },
        { type: 'dialogue', text: '괜찮아?' }
    ],
    expression: 'soft',
    affinity: 1
}, { lang: 'ko', charKey: 'Yuna' });
assert(recoveredKoreanReply?.text === '괜찮아?'
    && recoveredKoreanReply.segments.length === 1
    && recoveredKoreanReply.segments[0].type === 'dialogue',
'Persistent player-POV narration was not removed while preserving valid dialogue');
assert(recoverQualityFallback({
    text: '*당신을 바라본다.*',
    segments: [{ type: 'narration', text: '당신을 바라본다.' }]
}, { lang: 'ko', charKey: 'Yuna' }) === null,
'Quality fallback must not commit an empty response after removing invalid narration');
assert(recoverQualityFallback({
    text: 'Ihr langes schwarzes Haar fällt über die Schulter.',
    segments: [{ type: 'dialogue', text: 'Ihr langes schwarzes Haar fällt über die Schulter.' }]
}, { lang: 'de', charKey: 'Yuna' }) === null,
'Quality fallback must not bypass character canon failures');

verifyLocalizedFreeTalkInventory();

console.log(`Verified ${languages.length} non-Korean languages across ${characters.length} characters, plus ${activeFreeTalkIds.length} active scene prompts in all 7 languages.`);
