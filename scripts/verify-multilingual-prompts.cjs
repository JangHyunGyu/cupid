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

for (const relativePath of ['assets/js/prompts.js', 'assets/js/gallery-freetalk.js']) {
    const source = fs.readFileSync(path.join(root, relativePath), 'utf8');
    vm.runInContext(source, context, { filename: relativePath });
}

const languages = ['en', 'es', 'ja', 'fr', 'de', 'pt'];
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

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

const progress = {
    getPlayerName: () => 'Alex',
    isFreeTalkUnlocked: () => false
};

for (const lang of languages) {
    const data = context.window.getPromptData(lang, 'Alex');
    assert(data && typeof data === 'object', `[${lang}] getPromptData returned no data`);

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
            currentMaxTurns: 3,
            playerName: 'Alex',
            knowsName: true,
            datingGuideline: ''
        });
        assert(!systemPrompt.includes('A character from the school'), `[${lang}/${char}] fell back to generic main personality`);
        assert(!systemPrompt.includes('Voice: Use a natural style for the character.'), `[${lang}/${char}] fell back to generic main voice`);
        assert(!systemPrompt.includes('undefined'), `[${lang}/${char}] main prompt contains undefined`);
    }

    const gallery = new context.window.GalleryFreeTalk(lang, progress);
    for (const char of characters) {
        const id = galleryIds[char];
        assert(gallery.CHAR_PERSONALITIES[id]?.[lang], `[${lang}/${char}] missing gallery personality`);
        assert(gallery.CHAR_DATING_PROMPTS[id]?.[lang], `[${lang}/${char}] missing gallery relationship prompt`);
        assert(gallery.CHAR_SPEECH_STYLES[id]?.[lang], `[${lang}/${char}] missing gallery speech style`);

        const systemPrompt = gallery._buildSystemPrompt(id);
        assert(systemPrompt.includes('Voice:'), `[${lang}/${char}] gallery prompt has no voice block`);
        assert(!systemPrompt.includes('undefined'), `[${lang}/${char}] gallery prompt contains undefined`);
        assert(languageSignals[lang].test(systemPrompt), `[${lang}/${char}] gallery prompt lacks target-language anchors`);
    }

    if (lang === 'pt') {
        const activePortuguesePromptData = [
            ...Object.values(gallery.CHAR_PERSONALITIES).map(value => value.pt),
            ...Object.values(gallery.CHAR_DATING_PROMPTS).map(value => value.pt),
            ...Object.values(gallery.CHAR_SPEECH_STYLES).map(value => value.pt)
        ].join('\n');
        assert(!/\b(?:voce|voces|nao|usuario|oculos|coracao|intimo|estao|so)\b/i.test(activePortuguesePromptData),
            '[pt] active gallery prompt data still contains common missing-accent forms');
    }
}

console.log(`Verified ${languages.length} non-Korean languages across ${characters.length} characters in main and gallery free-talk prompts.`);
