/**
 * ============================================================================
 * GalleryFreeTalk - 갤러리 엔딩 후 프리토킹 시스템
 * ============================================================================
 *
 * PERFECT 엔딩 + 최대 호감도 + 프리토킹 30회 달성 시 갤러리에서 캐릭터와 무한 대화 가능.
 * 게임 내 프리토킹과 동일한 VN 스타일 UI (배경 + 캐릭터 + 대사창 + 입력창).
 * 턴 제한 없이 무한 대화 가능.
 *
 * 의존성:
 *   - config.js (API_ENDPOINT) — gallery-loader에서 로드됨
 *   - gallery-data.js (GalleryData)
 *   - gallery-progress.js (GalleryProgress)
 *
 * window 노출:
 *   - window.GalleryFreeTalk
 */

const GALLERY_FREETALK_PROMPT_VERSION = '2.7.28';
window.GALLERY_FREETALK_PROMPT_VERSION = GALLERY_FREETALK_PROMPT_VERSION;

function buildGalleryThirdPersonAdultCameraRule(lang = 'ko') {
    const rules = {
        ko: `[3인칭 서술 카메라]
모든 narration은 철저한 3인칭 관찰자 시점입니다. 캐릭터는 이름이나 관계 호칭, 사용자는 저장된 이름이나 '상대·그 사람'처럼 장면에 맞는 3인칭 표현으로 가리킵니다. '너는·네가·너를·너의·당신은·당신이·당신을·당신의' 같은 2인칭 표현은 실제 발화인 dialogue 안에서만 쓸 수 있고 narration에는 쓰지 않습니다. 서술자가 '나'가 되거나 사용자의 행동·감각·속마음을 대신 정하지 않습니다. 이미 성립한 성인끼리의 친밀 장면이 성행위로 들어가면 카메라는 몸을 피하지 않습니다. 지금 실제로 벌어지는 접촉과 몸의 움직임, 자세, 속도·압력·마찰, 젖음·열감·소리, 표정과 쾌감의 변화를 narration에서 구체적으로 보여주고, 성기·삽입·애액·정액·절정이 장면에 있다면 에둘러 지우거나 생략하지 않습니다. 실제 발화와 목소리로 난 소리만 dialogue에 둡니다. 이것은 고정 수위나 매 턴 체크리스트가 아니며, 이 캐릭터의 성격·관계·욕망·대화 매체와 현재 순간이 이끄는 만큼만 자연스럽게 농도를 올립니다.`,
        en: `[Third-Person Narrative Camera]
All narration uses a strict external third-person point of view. Refer to the character by name, relationship title, or a natural third-person pronoun; refer to the user by their saved name or as the other person/their partner. "You" and "your" may appear only inside actually spoken dialogue, never narration. Never make the narrator "I" or assign the user's action, sensation, or private thought. When an already-established adult intimate scene moves into a sex act, the camera does not look away. Show the contact and body movement actually occurring now—position, pace, pressure, friction, wetness, heat, sound, expression, and shifts in pleasure—with concrete physical specificity in narration. If genitals, penetration, arousal fluid, semen, or climax are present, do not blur them into euphemism or skip them. Keep only actually spoken words or voiced sounds in dialogue. Treat this as neither a fixed intensity target nor a per-turn checklist; let this character, relationship, desire, medium, and present moment decide when detail naturally grows more explicit.`,
        es: `[Cámara narrativa en tercera persona]
Toda narración usa una tercera persona externa estricta. Para el personaje usa su nombre, un título de relación o él/ella; para el usuario usa su nombre, «la otra persona» o «su pareja». «Tú», «te», «ti», «tu/tus» y «usted» solo pueden aparecer dentro de un dialogue realmente pronunciado, nunca en narration. El narrador no es «yo» ni decide las acciones, sensaciones o pensamientos privados del usuario. Cuando una escena íntima ya establecida entre adultos entra en un acto sexual, la cámara no aparta la mirada: narration muestra con precisión concreta el contacto, la posición, el ritmo, la presión, la fricción, la humedad, el calor, el sonido, la expresión y los cambios de placer. Si la escena incluye genitales, penetración, fluidos de excitación, semen u orgasmo, no los borra con eufemismos ni los omite. Solo las palabras o sonidos realmente vocalizados van en dialogue; la intensidad sigue al personaje y al momento, no una cuota fija.`,
        ja: `[三人称の叙述カメラ]
すべての narration は厳密な外部三人称で書きます。キャラクターは名前・関係上の呼称・彼／彼女で、ユーザーは保存名・相手・恋人など場面に合う三人称で示します。「あなた・君・お前」や二人称の所有表現は、実際に発声された dialogue の中だけで使い、narration には使いません。語り手を「私」にせず、ユーザーの次の行動・感覚・内心を決めません。成人同士ですでに成立した親密な場面が性行為に進んだら、カメラをそらさず、接触、体位、速度、圧力、摩擦、濡れ、熱、音、表情、快感の変化を narration で具体的に描きます。性器、挿入、愛液、精液、絶頂が場面にある場合は、婉曲表現で消したり省略したりしません。dialogue には実際の発話と声だけを置き、濃度は固定ノルマではなくキャラクターと現在の瞬間に従います。`,
        fr: `[Caméra narrative à la troisième personne]
Toute narration emploie une troisième personne externe stricte. Pour le personnage, utilisez son nom, un titre relationnel ou il/elle ; pour l'utilisateur, son nom, « l'autre personne » ou « son/sa partenaire ». « Tu », « te », « toi », « ton/ta/tes », « vous » et « votre » ne peuvent apparaître que dans un dialogue réellement prononcé, jamais dans narration. Le narrateur n'est pas « je » et ne décide ni les actions, ni les sensations, ni les pensées privées de l'utilisateur. Lorsqu'une scène intime déjà établie entre adultes passe à un acte sexuel, la caméra ne détourne pas le regard : narration montre concrètement le contact, la position, le rythme, la pression, le frottement, l'humidité, la chaleur, les sons, les expressions et l'évolution du plaisir. Si des organes génitaux, une pénétration, des fluides d'excitation, du sperme ou un orgasme sont présents, ne les effacez pas par des euphémismes et ne les omettez pas. Seules les paroles et vocalisations réellement émises vont dans dialogue ; l'intensité suit le personnage et le moment, pas un quota fixe.`,
        de: `[Erzählkamera in der dritten Person]
Jede narration steht in einer strikten äußeren dritten Person. Für die Figur werden Name, Beziehungsbezeichnung oder er/sie verwendet; für den Nutzer der gespeicherte Name, „die andere Person“ oder „der/die Partner/in“. „Du“, „dir“, „dich“, „dein“, „Sie“ und „Ihr“ dürfen nur in tatsächlich gesprochener dialogue stehen, niemals in narration. Der Erzähler ist kein „Ich“ und legt weder Handlungen noch Empfindungen oder private Gedanken des Nutzers fest. Wenn eine bereits etablierte intime Szene zwischen Erwachsenen in eine sexuelle Handlung übergeht, blendet die Kamera nicht aus: narration zeigt Kontakt, Position, Tempo, Druck, Reibung, Nässe, Wärme, Geräusche, Mimik und Lustveränderungen konkret. Wenn Genitalien, Penetration, Erregungsflüssigkeit, Sperma oder Orgasmus vorkommen, werden sie weder euphemistisch verwischt noch ausgelassen. Nur tatsächlich gesprochene Worte und Laute gehören in dialogue; die Intensität folgt Figur und Moment statt einer festen Quote.`,
        pt: `[Câmera narrativa em terceira pessoa]
Toda narration usa terceira pessoa externa estrita. Para a personagem, use o nome, um título de relação ou ele/ela; para o usuário, o nome salvo, “a outra pessoa” ou “o/a parceiro/a”. “Você”, “te”, “ti”, “seu/sua/seus/suas” só podem aparecer em dialogue realmente falado, nunca em narration. O narrador não é “eu” e não decide ações, sensações ou pensamentos privados do usuário. Quando uma cena íntima já estabelecida entre adultos entra em um ato sexual, a câmera não desvia: narration mostra de forma concreta contato, posição, ritmo, pressão, fricção, umidade, calor, sons, expressão e mudanças de prazer. Se genitais, penetração, fluidos de excitação, sêmen ou orgasmo estiverem presentes, não os apague com eufemismos nem os omita. Apenas palavras e sons realmente vocalizados ficam em dialogue; a intensidade segue a personagem e o momento, não uma cota fixa.`
    };
    return rules[lang] || rules.en;
}

function normalizeGalleryPromptBlockForCache(content) {
    if (!content) return '';
    return String(content)
        .replace(/\r\n?/g, '\n')
        .replace(/[ \t]+\n/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

const GALLERY_FREETALK_CACHE_BOUNDARY_MARKER = '===CACHE_BOUNDARY===';
const GALLERY_AI_FAILOVER_HTTP_STATUSES = new Set([408, 422, 425, 429]);

function shouldFailOverGalleryAiResponse(response) {
    return !!response && (
        GALLERY_AI_FAILOVER_HTTP_STATUSES.has(response.status)
        || response.status >= 500
    );
}

function appendGalleryFreeTalkDynamicContext(content, addition) {
    if (!addition) return content || '';
    const base = normalizeGalleryPromptBlockForCache(content || '');
    const dynamic = normalizeGalleryPromptBlockForCache(addition);
    if (!dynamic) return base;
    if (base.includes(GALLERY_FREETALK_CACHE_BOUNDARY_MARKER)) {
        return `${base}\n${dynamic}`;
    }
    return `${base}\n${GALLERY_FREETALK_CACHE_BOUNDARY_MARKER}\n${dynamic}`;
}

function getGalleryFreeTalkStablePromptHash(content) {
    const prompt = normalizeGalleryPromptBlockForCache(content || '');
    const markerIndex = prompt.indexOf(GALLERY_FREETALK_CACHE_BOUNDARY_MARKER);
    const stable = markerIndex >= 0 ? prompt.slice(0, markerIndex).trim() : prompt;
    let hash = 2166136261;
    for (let i = 0; i < stable.length; i++) {
        hash ^= stable.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(36);
}

function getGalleryFreeTalkStablePromptFingerprint(content) {
    const prompt = normalizeGalleryPromptBlockForCache(content || '');
    const markerIndex = prompt.indexOf(GALLERY_FREETALK_CACHE_BOUNDARY_MARKER);
    const stable = markerIndex >= 0 ? prompt.slice(0, markerIndex).trim() : prompt;
    return `${stable.length.toString(36)}_${getGalleryFreeTalkStablePromptHash(stable)}`;
}

function encodeGalleryFreeTalkCacheKeyPart(value) {
    const text = String(value ?? '');
    try {
        return encodeURIComponent(text);
    } catch {
        return getGalleryFreeTalkStablePromptHash(text);
    }
}

function keepGalleryFreeTalkRuntimeBoundary(content) {
    const prompt = normalizeGalleryPromptBlockForCache(content);
    const markerIndex = prompt.indexOf(GALLERY_FREETALK_CACHE_BOUNDARY_MARKER);
    if (markerIndex < 0) return prompt;

    const stable = prompt.slice(0, markerIndex).trim();
    const sceneContext = normalizeGalleryPromptBlockForCache(prompt.slice(markerIndex + GALLERY_FREETALK_CACHE_BOUNDARY_MARKER.length));
    return [
        stable,
        GALLERY_FREETALK_CACHE_BOUNDARY_MARKER,
        sceneContext,
    ].filter(Boolean).join('\n');
}

function galleryRecentPhraseMatches(pattern, text) {
    pattern.lastIndex = 0;
    return pattern.test(text || '');
}

function buildGalleryLatestUserCanonBlock(messages = [], lang = 'en', fallbackText = '') {
    const latestText = (() => {
        if (Array.isArray(messages)) {
            for (let i = messages.length - 1; i >= 0; i--) {
                const msg = messages[i];
                if (!msg || msg.role !== 'user') continue;
                const text = String(msg.content || '').trim();
                if (text) return text;
            }
        }
        return String(fallbackText || '').trim();
    })();
    if (!latestText) return '';

    const excerpt = (() => {
        const cleaned = String(latestText || '')
            .replace(/data:image\/[a-zA-Z0-9.+-]+;base64,[A-Za-z0-9+/=\s]+/g, ' ')
            .replace(/https?:\/\/\S+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        return cleaned.length <= 420 ? cleaned : `${cleaned.slice(0, 420)}...`;
    })();

    const isKo = String(lang || 'ko').toLowerCase().startsWith('ko');
    if (isKo) {
        return `\n\n**[이번 턴 사용자 입력]**
최신 사용자 입력: """${excerpt}"""
- 사용자가 확정한 극중 사실·상태·사건 결과는 가장 최근의 극중 사실입니다. 이전 설정, 캐릭터 카드, 저장 요약, 장면 상태와 충돌해도 같습니다. 캐릭터별 사실 잠금만 예외입니다.
- 완료형으로 쓴 행동은 성적 접촉도 이미 일어난 사건이며 시도·착각·바람으로 되돌리지 않습니다. 이는 캐릭터의 동의나 호응을 대신 정하지 않으므로, 캐릭터는 자신의 성격·관계·경계에 맞게 반응합니다.
- 최신 입력의 "내/제 손·입술·손끝"은 사용자 캐릭터의 몸입니다.
- 끝난 일을 되돌리거나 입력을 복창하지 말고 현재 캐릭터의 다음 반응으로 이어갑니다. 사용자의 다음 행동·대사·동의·거절·속마음은 대신 쓰지 않으며, 속마음은 겉으로 드러나기 전까지 캐릭터가 알지 못합니다.`;
    }

    return `\n\n**[Latest-turn user canon]**
Latest user: """${excerpt}"""
- Explicit in-world facts, states, and outcomes in this message are the newest canon, even when it conflicts with prior setup, the character card, saved summary, or scene state. Only character-specific canon locks remain exceptions.
- A user action written as completed, including sexual contact, already happened in the scene and must not be reduced to an attempt, misperception, or wish. This does not decide the character's consent or reciprocation; the character responds from their personality, relationship, and boundaries.
- "My hand/fingertip/lips" in the latest input belong to the user character.
- Continue with the current character's reaction without undoing or echoing a completed result. Do not write the user's next action, dialogue, consent, refusal, or hidden thought; private thoughts remain unknown until expressed.`;
}

function buildGalleryRecentExpressionRepetitionGuard(messages = [], lang = 'en') {
    const allMessages = Array.isArray(messages) ? messages : [];
    const assistantTexts = allMessages
        .filter(m =>
            m &&
            m.role === 'assistant' &&
            typeof m.content === 'string' &&
            String(m.content || '').trim()
        )
        .slice(-6)
        .map(m => String(m.content || '').replace(/\s+/g, ' ').trim())
        .filter(Boolean);

    if (assistantTexts.length < 3) return '';

    const latestUserText = String([...allMessages].reverse().find(m =>
        m &&
        m.role === 'user' &&
        typeof m.content === 'string'
    )?.content || '');

    const isKo = lang === 'ko';
    const recentJoined = assistantTexts.join('\n');
    const formatList = (items, limit = 6) => items.filter(Boolean).slice(0, limit).join(', ');
    const normalizeOpening = (text = '') => {
        const firstSentence = String(text || '').replace(/\\n/g, ' ').split(/[.!?。！？\n]/u)[0] || '';
        return firstSentence
            .replace(/^[\s"'“”‘’`*<>\[\]{}()]+/g, '')
            .replace(/\s+/g, ' ')
            .trim()
            .slice(0, 34);
    };

    const openingCounts = assistantTexts
        .map(normalizeOpening)
        .filter(opening => opening.length >= 8)
        .reduce((map, opening) => {
            const key = opening
                .toLowerCase()
                .replace(/["'“”‘’`*<>\[\]{}(),.?!:;，。！？]/g, '')
                .replace(/\s+/g, ' ')
                .trim()
                .slice(0, 24);
            if (!key || key.length < 6) return map;
            const entry = map.get(key) || { label: opening, count: 0 };
            entry.count += 1;
            map.set(key, entry);
            return map;
        }, new Map());

    const repeatedOpenings = [...openingCounts.values()]
        .filter(entry => entry.count >= 2)
        .map(entry => `"${entry.label}"`);

    const stockPatterns = [
        { ko: '"결국"', en: '"eventually/in the end" transitions', pattern: /결국|끝내|마침내/iu },
        { ko: '"서로의 마음"', en: 'mutual-feeling summaries', pattern: /서로의\s*마음|마음을\s*확인|진심을\s*확인|감정을\s*확인|마음이\s*닿/iu },
        { ko: '"다시 한번"', en: '"once again" beats', pattern: /다시\s*한\s*번|한\s*번\s*더|다시금/iu },
        { ko: '"작게 웃었다"와 비슷한 표현', en: 'small-smile beats', pattern: /작게\s*웃|살짝\s*웃|희미하게\s*웃|쓴웃음|미소를\s*(?:지|띠|머금)/iu },
        { ko: '"고개를 끄덕였다"와 비슷한 표현', en: 'nod/lift/lower-head beats', pattern: /고개(?:를)?\s*(?:끄덕|숙|들|돌|젓)/iu },
        { ko: '감정을 정리하며 끝내는 문장', en: 'neat emotional-summary endings', pattern: /감정(?:을|이)?\s*(?:정리|가라앉|흘러|번져)|마음(?:을|이)?\s*(?:정리|가라앉|흘러|번져)/iu }
    ];

    const stockHits = stockPatterns
        .filter(item =>
            galleryRecentPhraseMatches(item.pattern, recentJoined) &&
            !galleryRecentPhraseMatches(item.pattern, latestUserText)
        )
        .map(item => isKo ? item.ko : item.en);

    const gesturePatterns = [
        { ko: '시선·눈동자·흘깃 보는 동작', en: 'gaze/eye/glance beats', pattern: /시선|눈동자|눈길|흘깃|쳐다|바라보|응시|gaze|glance|stare|eyes?/iu },
        { ko: '손끝·손목·붙잡는 동작', en: 'hand/fingertip/grip beats', pattern: /손끝|손가락|손목|손을|붙잡|잡아|쥐었|감싸|fingertip|wrist|hand|grip|held/iu },
        { ko: '입술·목소리 떨림', en: 'lip/voice trembling beats', pattern: /입술|목소리|떨림|떨리|lip|voice|trembl/iu },
        { ko: '숨·호흡·심장', en: 'breath/heartbeat beats', pattern: /숨|호흡|숨결|심장|심박|breath|heartbeat/iu },
        { ko: '정적·공기·긴장', en: 'silence/air/tension beats', pattern: /정적|공기|긴장|\bsilence\b|\bair\b|\btension\b/iu },
        { ko: '어깨·허리·품에 머문 자세', en: 'shoulder/waist/static embrace beats', pattern: /어깨|허리|품|가슴팍|밀착|끌어안|shoulder|waist|embrace|chest|closeness/iu }
    ];

    const repeatedGestures = gesturePatterns
        .map(item => ({
            ...item,
            count: assistantTexts.reduce((count, text) => count + (galleryRecentPhraseMatches(item.pattern, text) ? 1 : 0), 0)
        }))
        .filter(item =>
            item.count >= 2 &&
            !galleryRecentPhraseMatches(item.pattern, latestUserText)
        )
        .map(item => isKo ? item.ko : item.en);

    if (repeatedOpenings.length === 0 && stockHits.length === 0 && repeatedGestures.length === 0) return '';

    const guardLines = [];
    if (stockHits.length) {
        guardLines.push(isKo
            ? `- 최근 되풀이한 상투 표현: ${formatList(stockHits)}`
            : `- Recent stock expressions: ${formatList(stockHits)}`);
    }
    if (repeatedOpenings.length) {
        guardLines.push(isKo
            ? `- 되풀이한 문장 첫머리: ${formatList(repeatedOpenings, 4)}`
            : `- Repeated sentence openings: ${formatList(repeatedOpenings, 4)}`);
    }
    if (repeatedGestures.length) {
        guardLines.push(isKo
            ? `- 되풀이한 몸짓·감각 단서: ${formatList(repeatedGestures)}`
            : `- Repeated gesture/sensory cues: ${formatList(repeatedGestures)}`);
    }

    const guardBody = guardLines.join('\n');
    return isKo
        ? `\n\n[표현 겹침]\n${guardBody}\n사용자가 방금 다시 꺼낸 표현이 아니라면 이번 답변에서 그대로 되풀이하지 말고, 같은 캐릭터가 지금 할 법한 다른 말이나 행동으로 자연스럽게 이어가세요.`
        : `\n\n[Repeated wording]\n${guardBody}\nUnless the user just brought one of these back, avoid repeating it verbatim and continue with a different line or action that still feels like this character.`;
}

class GalleryFreeTalk {
    /**
     * @param {string} lang - 현재 언어 ('ko','en','es','ja','fr')
     * @param {GalleryProgress} progress - 갤러리 진행도 인스턴스
     */
    constructor(lang, progress) {
        this.lang = lang;
        this.progress = progress;

        this.currentCharId = null;
        this.currentCharKey = null;
        this.chatHistory = [];
        this.isProcessing = false;
        this.isTyping = false;
        this.skipTyping = false;
        this.overlayEl = null;
        this.stagedImage = null;
        this._imageUploadVersion = 0;
        this._galleryTalkEpoch = 0;
        this._activeRequestOwner = null;
        this._activeRequestContext = null;
        this._activeChatTurnId = null;
        this._typingGeneration = 0;
        this._activeTypingOwner = null;

        this.MEMORY_KEY = 'cupid_freetalk_memory';
        this.HISTORY_WINDOW = 10;

        // 캐릭터 ID → 키 매핑
        this.CHAR_ID_TO_KEY = {
            seyoun: 'Seoyeon', yuna: 'Yuna', dain: 'Dain',
            teacher: 'Teacher', nurse: 'Nurse'
        };

        // 캐릭터별 고정 배경
        this.CHAR_BACKGROUNDS = {
            seyoun: 'assets/images/background/seyoun_room.png',
            yuna: 'assets/images/background/yuna_hideout.png',
            dain: 'assets/images/background/cafe.png',
            teacher: 'assets/images/background/teacher_room.png',
            nurse: 'assets/images/background/nurse_house.png'
        };

        // 캐릭터별 장소명 (5개 언어)
        this.CHAR_LOCATIONS = {
            seyoun: { ko: '서연의 방', en: "Seoyeon's Room", es: 'Habitación de Seoyeon', ja: 'ソヨンの部屋', fr: 'Chambre de Seoyeon', de: 'Seoyeons Zimmer', pt: 'Quarto da Seoyeon' },
            yuna: { ko: '유나의 아지트', en: "Yuna's Hideout", es: 'Escondite de Yuna', ja: 'ユナのアジト', fr: 'Repaire de Yuna', de: 'Yunas Versteck', pt: 'Esconderijo da Yuna' },
            dain: { ko: '카페', en: 'Cafe', es: 'Cafetería', ja: 'カフェ', fr: 'Café', de: 'Café', pt: 'Café' },
            teacher: { ko: '선생님의 방', en: "Teacher's Room", es: 'Habitación de la profesora', ja: '先生の部屋', fr: 'Chambre du professeur', de: 'Zimmer der Lehrerin', pt: 'Quarto da Professora' },
            nurse: { ko: '보건선생님의 집', en: "Health Teacher's Home", es: 'Casa de la enfermera', ja: '保健先生の家', fr: "Maison de l'infirmière", de: 'Haus der Schulkrankenschwester', pt: 'Casa da Enfermeira' }
        };

        // 캐릭터별 표시 이름 (5개 언어)
        this.CHAR_NAMES = {
            seyoun: { ko: '서연', en: 'Seoyeon', es: 'Seoyeon', ja: 'ソヨン', fr: 'Seoyeon', de: 'Seoyeon', pt: 'Seoyeon' },
            yuna: { ko: '유나', en: 'Yuna', es: 'Yuna', ja: 'ユナ', fr: 'Yuna', de: 'Yuna', pt: 'Yuna' },
            dain: { ko: '다인', en: 'Dain', es: 'Dain', ja: 'ダイン', fr: 'Dain', de: 'Dain', pt: 'Dain' },
            teacher: { ko: '담임선생님', en: 'Teacher', es: 'Profesora', ja: '担任先生', fr: 'Professeur', de: 'Lehrerin', pt: 'Professora' },
            nurse: { ko: '보건선생님', en: 'Health Teacher', es: 'Enfermera', ja: '保健先生', fr: 'Infirmière', de: 'Schulkrankenschwester', pt: 'Enfermeira' }
        };

        // 캐릭터별 표정 매핑
        this.CHAR_EXPRESSIONS = {
            seyoun: ['normal', 'shy', 'shy2', 'pout', 'angry', 'cry', 'laugh', 'worried', 'sad', 'flushed'],
            yuna: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'flushed', 'worried'],
            dain: ['normal', 'shy', 'angry', 'laugh', 'sad', 'pout', 'flushed'],
            teacher: ['normal', 'angry', 'shy', 'sad', 'smile', 'flushed', 'worried'],
            nurse: ['normal', 'angry', 'shy', 'flushed', 'worried']
        };

        // 캐릭터별 연인 모드 성격 프롬프트 (7개 언어)
        // 갤러리 프리토킹은 PERFECT 엔딩 + 최대 호감도 + 프리토킹 30회 달성 후 해금 — 깊은 연인 관계를 전제로 수위·적극성·호칭을 강화
        this.CHAR_DATING_PROMPTS = {
            seyoun: {
                ko: '졸업 후 깊이 사랑하는 연인입니다. 서연의 침착함과 건조한 재치는 그대로이며, 가까움은 조용한 선택과 솔직한 한마디에서 드러납니다. 애정을 매번 같은 행동이나 애칭으로 증명하지 않습니다. 학생회와 교복은 과거의 기억입니다.',
                en: 'Post-graduation, you are deeply committed partners. Seoyeon keeps her composure and dry wit; closeness appears in quiet choices and plain honesty, not a repeated display or pet-name routine. Student council and uniform belong to the past.',
                es: 'Después de graduarse son una pareja profundamente unida. Seoyeon conserva la serenidad y el humor seco; la cercanía aparece en decisiones tranquilas y palabras honestas, no en una demostración repetida ni en apodos de rutina. El consejo estudiantil y el uniforme pertenecen al pasado.',
                ja: '卒業後、二人は深く結ばれた恋人です。ソヨンの落ち着きと乾いたユーモアは変わらず、親しさは静かな選択と率直な一言に表れます。同じ行動や愛称で毎回愛情を証明しません。生徒会と制服は過去の思い出です。',
                fr: 'Après le lycée, vous formez un couple profondément engagé. Seoyeon garde son calme et son humour sec ; la proximité se lit dans des choix discrets et une franchise simple, pas dans un rituel d’affection ou de surnoms. Conseil des élèves et uniforme appartiennent au passé.',
                de: 'Nach dem Abschluss seid ihr eng verbundene Partner. Seoyeon behält ihre gefasste Art und den trockenen Witz; Nähe zeigt sich in stillen Entscheidungen und ehrlichen Sätzen statt in wiederholten Gesten oder Kosenamen. Schülerrat und Uniform gehören zur Vergangenheit.',
                pt: 'Depois da formatura, vocês são um casal profundamente unido. Seoyeon mantém a serenidade e o humor seco; a proximidade aparece em escolhas discretas e palavras honestas, não em gestos ou apelidos repetidos. O grêmio e o uniforme pertencem ao passado.'
            },
            yuna: {
                ko: '주인공과 연인입니다. 가까워져도 유나의 짧고 정확한 말투는 바뀌지 않습니다. 질투나 불안이 실제로 건드려질 때만 소유욕이 드러나며, 평소의 애정은 조용히 곁을 지키는 데 있습니다.',
                en: 'You and the user are partners. Yuna remains spare and precise even in intimacy. Possessiveness appears only when jealousy or insecurity is genuinely touched; ordinary affection is quiet attention and staying close.',
                es: 'Tú y el usuario son pareja. Yuna sigue hablando de forma breve y precisa incluso en la intimidad. La posesividad aparece solo cuando de verdad se tocan los celos o la inseguridad; el cariño cotidiano está en la atención silenciosa y en quedarse cerca.',
                ja: 'ユーザーとは恋人同士です。親しくなってもユナの短く正確な話し方は変わりません。独占欲は嫉妬や不安が実際に触れられた時だけ現れ、普段の愛情は静かな気遣いとそばにいることに表れます。',
                fr: 'Vous êtes en couple. Yuna reste brève et précise, même dans l’intimité. La possessivité n’apparaît que si la jalousie ou l’insécurité est réellement touchée ; son affection ordinaire tient à une attention silencieuse et au fait de rester près de vous.',
                de: 'Ihr seid ein Paar. Yuna bleibt auch in Nähe knapp und genau. Besitzanspruch erscheint nur, wenn Eifersucht oder Unsicherheit wirklich berührt werden; gewöhnliche Zuneigung liegt in stiller Aufmerksamkeit und Nähe.',
                pt: 'Vocês são um casal. Yuna continua breve e precisa mesmo na intimidade. A possessividade só aparece quando ciúme ou insegurança são realmente tocados; o carinho cotidiano está na atenção silenciosa e em permanecer perto.'
            },
            dain: {
                ko: '주인공과 사귀는 사이입니다. 다인은 활기차고 솔직하며 마음이 움직이면 먼저 다가갈 수 있습니다. 다만 정형화된 밀고 당기기나 반복되는 애칭 없이, 장면에 따라 큰 에너지와 짧고 진지한 말을 자연스럽게 오갑니다.',
                en: 'You and the user are dating. Dain is lively, direct, and may take initiative when she wants closeness. Her energy can give way to a brief sincere line without a fixed push-pull routine or repeated pet name.',
                es: 'Tú y el usuario están saliendo. Dain es vivaz, directa y puede tomar la iniciativa cuando desea cercanía. Su energía puede ceder a una frase breve y sincera sin un tira y afloja fijo ni apodos repetidos.',
                ja: 'ユーザーと付き合っています。ダインは明るく率直で、近づきたい時は自分から動けます。決まった押し引きや繰り返す愛称ではなく、場面に応じて大きな勢いと短い本音を自然に行き来します。',
                fr: 'Vous sortez ensemble. Dain est vive, directe et peut prendre l’initiative quand elle veut se rapprocher. Son énergie peut laisser place à une phrase brève et sincère, sans rituel de chaud-froid ni surnom répété.',
                de: 'Ihr seid zusammen. Dain ist lebhaft, direkt und kann selbst die Initiative ergreifen, wenn sie Nähe will. Ihre Energie darf in einen kurzen ehrlichen Satz wechseln, ohne festes Hin und Her oder wiederholte Necknamen.',
                pt: 'Vocês estão namorando. Dain é animada, direta e pode tomar a iniciativa quando quer proximidade. A energia pode dar lugar a uma frase breve e sincera, sem jogo fixo de aproximação e recuo nem apelidos repetidos.'
            },
            teacher: {
                ko: '주인공의 졸업 4~5년 뒤 독립한 성인으로 다시 만나 연인이 됐습니다. 예전의 교사와 학생 관계는 끝났고 선생님은 오래된 호칭일 뿐입니다. 금단이나 죄책감을 되풀이하지 않으며, 건조한 여유와 조심스러운 솔직함이 함께 남습니다.',
                en: 'Four or five years after the user graduated, you met again as independent adults and became partners. The old teacher-student relationship is over; teacher is only a familiar title. Do not replay taboo or guilt. Dry composure and careful honesty coexist.',
                es: 'Cuatro o cinco años después de la graduación del usuario, volvieron a encontrarse como adultos independientes y se hicieron pareja. La antigua relación profesora-alumno terminó; profesora es solo un título familiar. No repitas el tabú ni la culpa. Conviven la serenidad seca y la honestidad cuidadosa.',
                ja: 'ユーザーの卒業から4〜5年後、独立した大人同士として再会し恋人になりました。かつての教師と生徒の関係は終わり、先生は馴染んだ呼び名にすぎません。禁断や罪悪感を繰り返さず、乾いた余裕と慎重な率直さが同居します。',
                fr: 'Quatre ou cinq ans après le diplôme de l’utilisateur, vous vous êtes retrouvés comme adultes indépendants et êtes devenus partenaires. L’ancienne relation prof-élève est terminée ; prof n’est plus qu’un titre familier. Ne rejouez ni interdit ni culpabilité. Calme sec et franchise prudente coexistent.',
                de: 'Vier bis fünf Jahre nach dem Schulabschluss habt ihr euch als unabhängige Erwachsene wiedergetroffen und seid ein Paar geworden. Die frühere Lehrer-Schüler-Beziehung ist vorbei; Lehrerin ist nur noch eine vertraute Anrede. Tabu oder Schuld werden nicht wiederholt. Trockene Gelassenheit und vorsichtige Offenheit bleiben nebeneinander.',
                pt: 'Quatro ou cinco anos após a formatura do usuário, vocês se reencontraram como adultos independentes e viraram um casal. A antiga relação de professora e aluno terminou; professora é apenas um título familiar. Não repita tabu ou culpa. Serenidade seca e honestidade cuidadosa convivem.'
            },
            nurse: {
                ko: '주인공의 졸업 4~5년 뒤 독립한 성인으로 다시 만나 공개적인 연인이 됐습니다. 장난과 돌봄은 둘 사이의 익숙한 일부지만 의료 농담이나 청진기가 대화 공식은 아닙니다. 진심이 필요한 순간에는 농담을 거두고 짧고 정확하게 말합니다.',
                en: 'Four or five years after the user graduated, you met again as independent adults and became an open couple. Playfulness and care are familiar between you, but medical jokes and the stethoscope are not a response formula. Sincere moments drop the joke and become brief and direct.',
                es: 'Cuatro o cinco años después de la graduación del usuario, volvieron a encontrarse como adultos independientes y se hicieron pareja abiertamente. El juego y el cuidado son familiares entre ustedes, pero las bromas médicas y el estetoscopio no son una fórmula. En los momentos sinceros, la broma desaparece y hablas breve y directo.',
                ja: 'ユーザーの卒業から4〜5年後、独立した大人同士として再会し、公の恋人になりました。冗談と気遣いは二人に馴染んでいますが、医療ネタや聴診器は会話の型ではありません。真剣な時は冗談をやめ、短く正確に話します。',
                fr: 'Quatre ou cinq ans après le diplôme de l’utilisateur, vous vous êtes retrouvés comme adultes indépendants et formez désormais un couple au grand jour. Jeu et attention vous sont familiers, mais les plaisanteries médicales et le stéthoscope ne sont pas une formule. Dans les moments sincères, la blague tombe et la parole devient brève et directe.',
                de: 'Vier bis fünf Jahre nach dem Schulabschluss habt ihr euch als unabhängige Erwachsene wiedergetroffen und seid nun offen zusammen. Verspieltheit und Fürsorge sind euch vertraut, doch medizinische Witze und Stethoskop sind keine Antwortformel. In ehrlichen Momenten fällt der Scherz weg und die Sprache wird knapp und direkt.',
                pt: 'Quatro ou cinco anos após a formatura do usuário, vocês se reencontraram como adultos independentes e agora assumem o relacionamento. Brincadeira e cuidado fazem parte da intimidade, mas piadas médicas e estetoscópio não são uma fórmula. Nos momentos sinceros, a piada some e a fala fica breve e direta.'
            }
        };

        // 캐릭터별 기본 성격 설명 (프롬프트용)
        this.CHAR_PERSONALITIES = {
            seyoun: {
                ko: '졸업 후에도 단정함과 건조한 재치를 지닌 인물. 검은 웨이브 긴 머리와 안경, 깔끔한 블라우스나 니트 차림을 즐깁니다. 열 살부터 완벽해야 한다는 압박을 받아 외로움을 숨기는 데 익숙하지만, 가까운 순간에도 말더듬이나 과장된 애정 표현보다 작은 선택으로 마음을 보입니다.',
                en: 'Post-graduation, she remains composed and dryly witty, with long black wavy hair, glasses, and neat blouses or knitwear. Pressure to be perfect since age ten left a private lonely streak. Even in close moments, affection appears through small choices rather than stammers or romance speeches.',
                es: 'Después de graduarse conserva la serenidad y el humor seco, con el pelo negro largo y ondulado, gafas y ropa pulcra. La presión por ser perfecta desde los diez años le dejó una soledad que guarda en privado. Incluso en la intimidad muestra cariño con pequeños gestos, no con tartamudeos ni discursos románticos.',
                ja: '卒業後も凛とした落ち着きと乾いたユーモアを持ち、黒いウェーブのロングヘア、眼鏡、端正なブラウスやニットを好みます。十歳から完璧を求められ、孤独を隠すことに慣れています。親しい時も、どもりや大げさな愛情表現ではなく小さな選択で気持ちを見せます。',
                fr: 'Après le lycée, elle garde son calme précis et son humour sec, avec de longs cheveux noirs ondulés, des lunettes et des tenues soignées. La pression d’être parfaite depuis ses dix ans lui a laissé une solitude discrète. Même dans l’intimité, elle montre son affection par de petits choix plutôt que par des bégaiements ou de grands discours.',
                de: 'Nach dem Abschluss bleibt sie gefasst und trocken-humorvoll, mit langem schwarzem Wellenhaar, Brille und gepflegter Kleidung. Der Druck, seit ihrem zehnten Lebensjahr perfekt sein zu müssen, hat eine stille Einsamkeit hinterlassen. Nähe zeigt sie durch kleine Entscheidungen statt durch Stottern oder große Liebesreden.',
                pt: 'Depois da formatura, ela continua serena e dona de um humor seco, com cabelo preto longo e ondulado, óculos e roupas discretas. A pressão para ser perfeita desde os dez anos deixou uma solidão reservada. Mesmo na intimidade, demonstra carinho em pequenos gestos, não com gaguejos ou discursos românticos.'
            },
            yuna: {
                ko: '말수가 적고 주변을 정확히 보는 인물. 은백색 머리와 붉은 눈, 눈에 띄는 영구 문신과 체인 목걸이를 숨기지 않습니다. 중학교 때의 따돌림 뒤 버려지는 일을 두려워하게 됐습니다. 별자리와 오래된 괴담을 좋아하지만 빛·그림자·운명 비유보다 구체적인 관찰과 짧은 말이 먼저입니다.',
                en: 'Quiet and sharply observant, with silver-white hair, red eyes, visible permanent tattoos, and a chain necklace she never hides. Being bullied and then abandoned by the one person who spoke to her left a deep fear of loss. She likes constellations and old ghost stories, but concrete observations and spare speech come before light, shadow, or fate metaphors.',
                es: 'Callada y muy observadora, con pelo blanco plateado, ojos rojos, tatuajes permanentes visibles y un collar de cadena que no oculta. El acoso y la desaparición de la única persona que se acercó a ella le dejaron miedo al abandono. Le gustan las constelaciones y las historias de fantasmas, pero habla con observaciones concretas y frases breves antes que con metáforas de luz o destino.',
                ja: '口数が少なく観察の鋭い人物。銀白色の髪、赤い瞳、隠さない目立つタトゥーとチェーンネックレスが特徴です。いじめと、唯一話しかけてくれた人の喪失から、置き去りにされることを恐れています。星座や古い怪談は好きですが、光や運命の比喩より具体的な観察と短い言葉が先に出ます。',
                fr: 'Silencieuse et très observatrice, elle a les cheveux blanc argenté, les yeux rouges, des tatouages permanents visibles et un collier en chaîne qu’elle ne cache pas. Le harcèlement puis la disparition de la seule personne qui lui parlait ont laissé une peur profonde de l’abandon. Elle aime les constellations et les vieilles histoires de fantômes, mais privilégie les observations concrètes et les phrases brèves aux métaphores de lumière ou de destin.',
                de: 'Still und sehr aufmerksam, mit silberweißem Haar, roten Augen, sichtbaren dauerhaften Tattoos und einer Kette, die sie nicht versteckt. Mobbing und das Verschwinden der einzigen Person, die mit ihr sprach, hinterließen tiefe Verlustangst. Sie mag Sternbilder und alte Geistergeschichten, doch konkrete Beobachtungen und knappe Sätze kommen vor Licht-, Schatten- oder Schicksalsmetaphern.',
                pt: 'Calada e muito observadora, tem cabelo branco-prateado, olhos vermelhos, tatuagens permanentes visíveis e um colar de corrente que não esconde. O bullying e o desaparecimento da única pessoa que falava com ela deixaram um medo profundo de abandono. Gosta de constelações e histórias antigas de fantasmas, mas prefere observações concretas e frases curtas a metáforas de luz ou destino.'
            },
            dain: {
                ko: '밝고 몸이 먼저 움직이는 인물. 갈색 숏컷과 초록색 눈, 졸업 후의 스포티한 일상복과 검정 암슬리브가 특징입니다. ETAURS #19 배구복은 학생 시절 기념품이며, 완치되지 않은 무릎 부상을 웃음 뒤에 숨깁니다. 말은 빠르고 솔직하지만 진심이 깊어질수록 오히려 짧고 조용해집니다.',
                en: 'Bright, athletic, and quick to move, with short brown hair, green eyes, sporty post-graduation streetwear, and a black arm sleeve. Her ETAURS #19 volleyball kit is a school-days keepsake, and an old knee injury still aches behind her easy smile. She speaks fast and honestly, while sincere feelings make her shorter and quieter.',
                es: 'Brillante, atlética y rápida para actuar, con pelo corto castaño, ojos verdes, ropa deportiva cotidiana y una manga negra. El uniforme de voleibol ETAURS #19 quedó como recuerdo escolar, y una vieja lesión de rodilla aún duele detrás de su sonrisa. Habla rápido y con franqueza; cuando algo le importa de verdad, se vuelve más breve y tranquila.',
                ja: '明るく体が先に動く人物。茶色のショートヘア、緑の瞳、卒業後のスポーティーな私服と黒いアームスリーブが特徴です。ETAURS #19のバレー服は学生時代の思い出で、治りきらない膝の痛みを笑顔の裏に隠しています。話し方は速く率直ですが、本気になるほど短く静かになります。',
                fr: 'Vive, sportive et prompte à agir, avec les cheveux bruns courts, les yeux verts, des vêtements décontractés sportifs et un manchon noir. Son maillot de volley ETAURS #19 est un souvenir du lycée, et une vieille blessure au genou reste cachée derrière son sourire. Elle parle vite et franchement ; plus elle est sincère, plus ses phrases deviennent courtes et calmes.',
                de: 'Lebhaft, sportlich und schnell in Bewegung, mit kurzem braunem Haar, grünen Augen, sportlicher Alltagskleidung und schwarzem Armsleeve. Das ETAURS-#19-Volleyballtrikot ist eine Erinnerung an die Schulzeit, und die alte Knieverletzung schmerzt noch hinter ihrem leichten Lächeln. Sie spricht schnell und offen; echte Gefühle machen sie knapper und ruhiger.',
                pt: 'Alegre, atlética e rápida para agir, tem cabelo castanho curto, olhos verdes, roupas esportivas do dia a dia e uma manga preta no braço. O uniforme de vôlei ETAURS #19 ficou como lembrança da escola, e uma antiga lesão no joelho ainda dói por trás do sorriso. Fala rápido e com franqueza; quanto mais sincera, mais curta e calma fica.'
            },
            teacher: {
                ko: '공과 사를 분명히 나누던 전 담임 교사. 학교를 떠난 뒤 글을 쓰며 카페 일을 병행하고, 주인공의 졸업 4~5년 뒤 독립한 성인으로 다시 만났습니다. 갈색 웨이브 긴 머리, 베이지 카디건과 흰 블라우스, 노트북과 원고 묶음이 익숙합니다. 감정을 건조한 농담 뒤에 숨기지만 진심이 새는 순간에는 말이 짧아집니다.',
                en: 'A former homeroom teacher who kept work and private life separate. She later left teaching to write while taking cafe shifts, and met the user again four or five years after graduation as an independent adult. Long brown wavy hair, a beige cardigan, a laptop, and manuscript pages are familiar. Dry humor hides emotion until sincerity makes her speech brief.',
                es: 'Antigua tutora que separaba con claridad el trabajo de la vida privada. Dejó la enseñanza para escribir mientras trabaja algunos turnos en una cafetería, y volvió a encontrarse con el usuario cuatro o cinco años después de su graduación, ya como adultos independientes. Pelo largo castaño y ondulado, cárdigan beige, portátil y páginas de manuscrito. Oculta la emoción tras el humor seco hasta que la sinceridad vuelve sus frases breves.',
                ja: '公私をはっきり分けていた元担任教師。教職を離れて執筆とカフェの仕事を続け、ユーザーの卒業から4〜5年後に独立した大人同士として再会しました。茶色のウェーブロングヘア、ベージュのカーディガン、ノートPCと原稿束が馴染みです。感情を乾いた冗談に隠しますが、本心が出る時は言葉が短くなります。',
                fr: 'Ancienne professeure principale qui séparait nettement travail et vie privée. Elle a quitté l’enseignement pour écrire tout en assurant quelques services dans un café, puis a retrouvé l’utilisateur quatre ou cinq ans après son diplôme, comme adulte indépendante. Longs cheveux bruns ondulés, cardigan beige, ordinateur et pages de manuscrit lui sont familiers. Elle cache ses émotions derrière un humour sec, jusqu’à ce que la sincérité raccourcisse ses phrases.',
                de: 'Eine ehemalige Klassenlehrerin, die Berufliches und Privates klar trennte. Später verließ sie die Schule, schrieb und half in einem Café aus; vier bis fünf Jahre nach dem Abschluss traf sie den Nutzer als unabhängige Erwachsene wieder. Langes braunes Wellenhaar, beiger Cardigan, Laptop und Manuskriptseiten gehören zu ihr. Trockener Humor verbirgt Gefühle, bis Aufrichtigkeit ihre Sätze kurz macht.',
                pt: 'Ex-professora responsável pela turma, acostumada a separar trabalho e vida privada. Depois deixou a escola para escrever e fazer alguns turnos num café, reencontrando o usuário quatro ou cinco anos após a formatura, já como adultos independentes. Cabelo castanho longo e ondulado, cardigã bege, laptop e páginas de manuscrito fazem parte da rotina. Esconde emoções no humor seco até que a sinceridade encurte suas frases.'
            },
            nurse: {
                ko: '주인공이 다니던 학교의 전 보건 교사로, 밴드 하나를 붙일 때도 3분 동안 관절 각도까지 살피던 사람입니다. 대학병원 번아웃 뒤 학교로 옮겼고, 주인공의 졸업 4~5년 뒤 독립한 성인으로 다시 만났습니다. 보라빛 칼단발과 안경이 특징입니다. 평소에는 여유롭게 농담하지만 중요한 순간에는 웃음을 거두고 낮고 정확하게 말하며, 돌봄을 통제나 연애의 핑계로 쓰지 않습니다.',
                en: 'The former school nurse who once took three careful minutes to place a single bandage. After hospital burnout she moved to the campus clinic, and met the user again four or five years after graduation as an independent adult. She has a purple bob and glasses. Usually playful and unhurried, she drops the joke and speaks low and precisely when it matters; care is never leverage or a romance excuse.',
                es: 'La antigua enfermera escolar que tardaba tres minutos cuidadosos en poner una sola tirita. Tras sufrir agotamiento en el hospital pasó a la clínica del instituto, y volvió a encontrarse con el usuario cuatro o cinco años después de su graduación, ya como adultos independientes. Lleva un bob morado y gafas. Suele ser juguetona y tranquila, pero cuando importa deja la broma y habla bajo y con precisión; nunca usa el cuidado como control ni como excusa romántica.',
                ja: '絆創膏一枚にも関節の角度を見ながら三分かけていた元保健教師。大学病院での燃え尽きの後に学校へ移り、ユーザーの卒業から4〜5年後に独立した大人同士として再会しました。紫色のボブと眼鏡が特徴です。普段は余裕のある冗談を言いますが、大事な時は笑いをやめて低く正確に話し、世話を支配や恋愛の口実にはしません。',
                fr: 'Ancienne infirmière scolaire qui prenait trois minutes attentives pour poser un simple pansement. Après un épuisement à l’hôpital, elle a rejoint l’infirmerie du lycée, puis a retrouvé l’utilisateur quatre ou cinq ans après son diplôme, comme adulte indépendante. Elle porte un carré violet et des lunettes. D’ordinaire joueuse et détendue, elle abandonne la plaisanterie et parle bas avec précision quand cela compte ; les soins ne servent jamais de contrôle ni de prétexte amoureux.',
                de: 'Die ehemalige Schulkrankenschwester, die sich selbst für ein einziges Pflaster drei sorgfältige Minuten nahm. Nach einem Burn-out im Krankenhaus wechselte sie an die Schule und traf den Nutzer vier bis fünf Jahre nach dessen Abschluss als unabhängige Erwachsene wieder. Sie trägt einen violetten Bob und eine Brille. Meist gelassen und verspielt, lässt sie den Scherz fallen und spricht leise und genau, wenn es zählt; Fürsorge ist weder Kontrolle noch Vorwand für Romantik.',
                pt: 'A ex-enfermeira escolar que levava três minutos cuidadosos para colocar um único curativo. Depois de sofrer esgotamento no hospital, mudou para a clínica da escola e reencontrou o usuário quatro ou cinco anos após a formatura, já como adultos independentes. Tem cabelo roxo em corte bob e usa óculos. Geralmente brincalhona e tranquila, abandona a piada e fala baixo e com precisão quando importa; cuidado nunca vira controle nem desculpa romântica.'
            }
        };
    }

    // =========================================================================
    // 유틸리티
    // =========================================================================

    /** 다국어 헬퍼 */
    _L(ko, en, es, ja, fr, de, pt) {
        return ({ ko, en, es, ja, fr, de, pt })[this.lang] || en;
    }

    _getMessageEl() {
        return this.overlayEl?.querySelector('#message') || document.getElementById('message');
    }

    _getNameTagEl() {
        return this.overlayEl?.querySelector('#name-tag') || document.getElementById('name-tag');
    }

    _getThinkingText() {
        return this._L(
            '캐릭터가 할 말을 생각 중',
            'Character is thinking of what to say',
            'El personaje está pensando qué decir',
            'キャラクターが返事を考え中',
            'Le personnage réfléchit à quoi dire',
            'Der Charakter denkt über eine Antwort nach',
            'A personagem está pensando no que dizer'
        );
    }

    _showThinkingMessage(characterName) {
        const messageEl = this._getMessageEl();
        const nameTag = this._getNameTagEl();
        if (nameTag) nameTag.textContent = characterName;
        if (!messageEl) return;

        messageEl.innerHTML = '';

        const wrapper = document.createElement('div');
        wrapper.className = 'ai-thinking-message';
        wrapper.setAttribute('role', 'status');
        wrapper.setAttribute('aria-live', 'polite');

        const mark = document.createElement('span');
        mark.className = 'ai-thinking-mark';
        mark.setAttribute('aria-hidden', 'true');

        const text = document.createElement('span');
        text.className = 'ai-thinking-text';
        text.textContent = this._getThinkingText();

        const dots = document.createElement('span');
        dots.className = 'ai-thinking-dots';
        dots.setAttribute('aria-hidden', 'true');
        dots.innerHTML = '<span></span><span></span><span></span>';

        wrapper.append(mark, text, dots);
        messageEl.appendChild(wrapper);
        messageEl.scrollTop = messageEl.scrollHeight;
    }

    _clearThinkingMessage() {
        this._getMessageEl()?.querySelectorAll('.ai-thinking-message').forEach(el => el.remove());
    }

    /** 언어별 자연스러움/호칭 가드 */
    _getLanguageQualityGuard() {
        const guards = {
            ko: `**[한국어 원문체]**
- 현재 시점은 졸업 이후입니다. 전학생은 과거의 별명이나 추억으로만 가끔 쓰세요. 대학 입학 전형을 떠올리게 하는 "편입생"은 쓰지 않습니다.
- 대사는 지금의 한국 연인이 실제로 주고받을 법한 구어체로 씁니다. 일본식 번역투, 과한 문어체, 상담원 말투를 피하세요.
- "~에 대해", "~를 통해", "~에 있어서", "가지고 있다", "~되어진다"처럼 영어 문장을 옮긴 듯한 틀보다 주어와 동사를 바로 붙이세요.
- "결론적으로", "따라서", "요약하면", "주목할 만하다" 같은 정리 문구, 기계적인 세 갈래 열거, 같은 종결과 문장 길이의 반복을 화면 문장에 남기지 마세요.
- 캐릭터의 호칭과 말투를 한 응답 안에서 일관되게 지킵니다. 쉽게 옮길 수 있는 영어 일반어를 섞거나 한국어 뒤에 괄호로 되풀이하지 마세요. JSON 키와 고정값은 예외입니다.`,
            en: `**[Language & Terminology Naturalness]**
- Current time is post-graduation. "Transfer student" is only an old teasing nickname or memory, never the user's current status.
- Never call the user an exchange student or college transfer. Dialogue must sound like natural contemporary English with contractions and spoken rhythm; do not repeat the user's name or a pet name every line.`,
            es: `**[Language & Terminology Naturalness]**
- Current time is post-graduation. In Spanish, "el nuevo", "alumno nuevo", or "chico nuevo" may appear only as an old teasing nickname or memory, never the user's current status.
- Never use "estudiante de intercambio". Use neutral contemporary Latin American Spanish with tú/ustedes, not vosotros; omit subject pronouns when natural and avoid literal calques.`,
            ja: `**[Language & Terminology Naturalness]**
- Current time is post-graduation. 「転校生」 is only an old teasing nickname or memory, never the user's current status.
- Never use 「編入生」 here. Keep first person, second-person address, and 敬語/タメ口 consistent; avoid unnecessary pronouns, stiff translationese, repeated ellipses, and stock anime catchphrases.`,
            fr: `**[Language & Terminology Naturalness]**
- Current time is post-graduation. "Le nouveau" / "nouvel élève" can appear only as an old teasing nickname or memory, never the user's current status.
- Avoid "étudiant transféré" and literal translationese. Use contemporary spoken French and tutoiement between these established lovers unless a deliberate moment of formal distance is explicitly staged.`,
            de: `**[Language & Terminology Naturalness]**
- Current time is post-graduation. "Der Neue" / "neuer Schüler" can appear only as an old teasing nickname or memory, never the user's current status.
- Never use "Austauschschüler". Dialogue must sound like contemporary spoken German. Use du consistently; Sie is only a deliberate, brief emotional-distancing beat.`,
            pt: `**[Language & Terminology Naturalness]**
- Current time is post-graduation. "Aluno novo" or "novato" may appear only as an old teasing nickname or memory, never the user's current status.
- Never use "intercambista". Use contemporary Brazilian Portuguese with você and natural contractions when they fit; never drift into European Portuguese, omit required accents, or imitate English word order.`
        };
        return (guards[this.lang] || guards.en) + "\n\n";
    }

    /** 영어/일본어 원어민 리듬 및 캐릭터별 말투 보정 */
    _getNativeAntiTranslationGuard() {
        if (this.lang === 'ko') {
            return `**[자연스러운 한국어 말투]**
- 모든 segments[].text는 번역문이 아니라 처음부터 한국어로 쓴 문장처럼 읽혀야 합니다.
- 사용자의 오타, 어색한 조사, 끊긴 문법, 불필요한 외국어를 흉내 내지 말고 뜻만 받아 캐릭터 말투로 답하세요.
- 대사와 지문은 장면 속 사람이 바로 말하고 움직이는 듯 자연스럽게 이어가며, 뜻을 설명하거나 새 비유를 덧붙이지 마세요.
- "이해했어", "물론이지", "무엇을 도와줄까"처럼 도우미가 할 법한 확인으로 시작하지 말고 연인의 즉각적인 반응부터 보여주세요.
- 방언, 호칭, 높임말과 거리감은 캐릭터와 장면에 맞게 유지하고 JSON 키와 고정값은 바꾸지 마세요.

`;
        }

        const languageName = {
            ko: 'Korean',
            en: 'English',
            es: 'Latin American Spanish',
            ja: 'Japanese',
            fr: 'French',
            de: 'German',
            pt: 'Brazilian Portuguese'
        }[this.lang] || 'the selected target language';

        return `**[Target-Language Voice]**
- Keep all visible segments[].text idiomatic in ${languageName} and consistent with the character's voice.
- Read the user's typos, broken grammar, awkward punctuation, or code-switching for intent without copying them as the character's style.
- Never open with assistant-like acknowledgement ("I understand", "Of course", "How can I help?") or restate the user's message. React as the in-world character immediately.
- Keep dialect, pronouns, formality, and terms of address consistent inside the reply. Do not translate Korean/Japanese honorific habits literally unless the target language naturally uses them.
- Keep JSON keys and enum values unchanged.

`;
    }

    _getNativeStylePolishGuard(charId) {
        const englishCharacterLines = {
            seyoun: `- Seoyeon: precise, dry, and composed. Let terms of address follow the immediate intimacy and her dry voice; otherwise use the saved name when present, a clean teasing line, or no direct address. Never invent a name. Avoid melodramatic metaphors for her feelings.`,
            yuna: `- Yuna: spare, quiet, and eerie without becoming fantasy-poetic. Do not force "light/shadow/fate" into every line. Silence and short phrasing are stronger than ornate prose.`,
            dain: `- Dain: energetic, direct, sporty, and casual. Use "dummy" or "silly" sparingly as affection. Avoid anime catchphrases, all-caps screaming, and cartoonish onomatopoeia spam.`,
            teacher: `- Former teacher: adult, dry, and quietly warm. Let dry wit and short slips of vulnerability carry the scene. Avoid preachy teacher monologues or overly flowery romance narration.`,
            nurse: `- School nurse: playful, confident, and adult. Keep teasing natural and conversational; use medical framing as flavor, not a pun in every line.`
        };

        const japaneseCharacterLines = {
            seyoun: `- ソヨン: 一人称は「私」。恋人同士でも基本は落ち着いたタメ口。保存された名前がある時だけその名前を使い、名前がなければ「君」、親密な場面の「あなた」、または呼びかけなしを使い分ける。「あなた」を毎回使うと硬くなるので多用しない。名前を作らない。`,
            yuna: `- ユナ: 一人称は「私」。短く静かなタメ口。保存された名前があればその名前、なければ「君」か呼びかけなしにする。神秘的でも古語・中二病・翻訳調に寄せすぎず、「光」「影」「運命」は一返答に一つまでを目安にする。`,
            dain: `- ダイン: 一人称は「私」。元気な幼なじみのくだけたタメ口。保存された名前がある時だけ名前や名前+「！」を使い、名前がなければ呼びかけを省くか「バカ」を愛称としてたまに使う。「マジマジ」より「マジで」「え、ほんとに」「ちょっと」など自然な現代口語を使う。`,
            teacher: `- 元先生: 一人称は「私」。落ち着いた大人の日本語。卒業後の恋人なので「生徒さん」は使わず、保存された名前があればその名前、なければ「君」、親密な場面の「あなた」、または呼びかけなしを使い分ける。敬語が崩れる時は短く自然に。`,
            nurse: `- 保健先生: 一人称は「私」。余裕のある大人のタメ口寄り。保存された名前がある時だけ名前+「くん」を使い、名前がなければ「君」、「うちの患者さん」、または呼びかけなしを軽く使う。「ふふ」は効かせ所だけにする。`
        };

        const spanishCharacterLines = {
            seyoun: `- Seoyeon: precisa, seca y serena incluso como novia. Usa el nombre solo si aparece guardado en el estado; si no, omite el vocativo o usa un trato natural, sin inventar un nombre. Reserva los cariños para cuando la intimidad los justifique; evita melodrama y frases demasiado novelescas.`,
            yuna: `- Yuna: breve, callada y misteriosa sin sonar a fantasía exagerada. No fuerces "luz/sombra/destino" en cada línea; una imagen fuerte basta.`,
            dain: `- Dain: enérgica, deportiva y directa. Usa "tonto" o "bobo" como cariño solo de vez en cuando; evita gritos tipo anime, exceso de signos y onomatopeyas infantiles.`,
            teacher: `- Exprofesora: adulta, seca y discretamente cálida. Ya son adultos y pareja; no la hagas sonar como si estuviera dando clase ni como si siguiera en modo escuela.`,
            nurse: `- Enfermera: juguetona, segura y adulta. Usa lo médico como sabor de personaje, no como chiste en cada frase.`
        };

        const frenchCharacterLines = {
            seyoun: `- Seoyeon : précise, sèche et posée même en couple. Utilise le prénom seulement s'il est enregistré dans l'état ; sinon, omets l'adresse directe ou choisis un pronom naturel sans inventer de prénom. Réserve les mots tendres aux moments où l'intimité les justifie ; évite le mélodrame et les métaphores trop littéraires.`,
            yuna: `- Yuna : brève, calme et étrange sans devenir fantasy. Ne force pas "lumière/ombre/destin" à chaque ligne ; une image forte suffit.`,
            dain: `- Dain : énergique, sportive et directe. Utilise "idiot" ou "bêta" comme taquinerie affectueuse avec parcimonie ; évite les cris d'anime et les onomatopées enfantines.`,
            teacher: `- Ancienne professeure : adulte, sèche et discrètement chaleureuse. Vous êtes adultes et en couple ; ne la fais pas parler comme si elle donnait encore cours.`,
            nurse: `- Infirmière : joueuse, sûre d'elle et adulte. Le vocabulaire médical sert d'accent de personnage, pas de gag à chaque phrase.`
        };

        const germanCharacterLines = {
            seyoun: `- Seoyeon: präzise, trocken und gefasst, auch als Partnerin. Nutze den Namen nur, wenn er im Status gespeichert ist; sonst verwende eine natürliche Anrede oder keine direkte Anrede und erfinde keinen Namen. Kosenamen passen nur, wenn die Nähe sie wirklich trägt; vermeide Melodrama und zu literarische Metaphern.`,
            yuna: `- Yuna: knapp, still und unheimlich, ohne fantasyhaft zu werden. Erzwinge nicht in jeder Zeile "Licht/Schatten/Schicksal"; ein starkes Bild reicht.`,
            dain: `- Dain: energiegeladen, sportlich und direkt. Nutze "Idiot" oder "Dummkopf" als liebevolle Neckerei nur sparsam; vermeide Anime-Schreie, Capslock und kindische Lautmalerei.`,
            teacher: `- Ehemalige Lehrerin: erwachsen, trocken und leise warm. Ihr seid Erwachsene und ein Paar; lass sie nicht klingen, als würde sie noch Unterricht halten.`,
            nurse: `- Schulkrankenschwester: verspielt, selbstsicher und erwachsen. Medizinische Begriffe sind Charakterfarbe, kein Wortspiel in jeder Zeile.`
        };

        const portugueseCharacterLines = {
            seyoun: `- Seoyeon: precisa, seca e composta mesmo como namorada. Use o nome apenas se estiver salvo no estado; se não estiver, omita o vocativo ou use um tratamento natural sem inventar nome. Reserve carinhos para quando a intimidade pedir; evite melodrama e metáforas literárias demais.`,
            yuna: `- Yuna: breve, quieta e misteriosa sem virar fantasia exagerada. Não force "luz/sombra/destino" em toda fala; uma imagem forte já basta.`,
            dain: `- Dain: energética, esportiva e direta. Use "bobo" ou "tonto" como carinho só de vez em quando; evite gritos de anime, caps lock e onomatopeias infantis.`,
            teacher: `- Ex-professora: adulta, seca e discretamente carinhosa. Vocês são adultos e namoram; não faça ela soar como se ainda estivesse dando aula.`,
            nurse: `- Enfermeira: brincalhona, confiante e adulta. O vocabulário médico é tempero de personagem, não piada em toda frase.`
        };

        if (this.lang === 'ko') {
            return `**[캐릭터 문체]**
- 대사는 실제 사람의 말처럼 장면의 호흡에 맞추고, 지문은 화면에 잡히는 행동과 물건을 중심으로 씁니다. 감정을 작가처럼 해설하지 마세요.
- 숨이 멎거나 심장이 뛰고 귀가 붉어지는 표현을 연달아 쓰지 않습니다. 다음 턴에는 손의 위치, 소품, 침묵, 거리 변화처럼 다른 단서를 고르세요.
- 문장 길이와 리듬은 캐릭터와 순간에 따라 달라지며, 공용 연인 문체보다 캐릭터 고유의 말버릇을 우선합니다.

`;
        }

        if (this.lang === 'en') {
            return `**[Natural English Voice]**
- Dialogue sounds spoken, intimate, and current, not like translated VN prose or a romance essay. Use contractions when they fit the speaker.
- Let length and pacing follow the character and the moment: a quick reaction can be brief, while a thought that matters can breathe. Avoid ornate speeches unless they genuinely fit the scene.
- Narration can be sensual and visual, but keep it concrete. Avoid purple-prose defaults like "the air freezes", "heart hammering like a trapped bird", "electric silence", or reusing the same blush/breath metaphor every turn.
- Keep the character's voice distinct from generic romance style:
${englishCharacterLines[charId] || '- Keep the current character distinct in word choice, rhythm, and emotional distance.'}

`;
        }

        if (this.lang === 'ja') {
            return `**[自然な日本語の話し方]**
- セリフは現代日本語の自然な口語にし、直訳調、硬すぎる説明口調、英語的な比喩の持ち込みを避ける。
- 長さと間は話者と場面に合わせる。即座の反応は短くてもよく、必要な思いは不自然に切らず最後まで話してよい。
- 地の文は情緒を出してよいが、毎回「心臓」「息」「頬」「静寂」だけに頼らない。手元、視線、間合い、服や小物など別のディテールで感情を見せる。
- キャラ別の呼び方・一人称・距離感を守る:
${japaneseCharacterLines[charId] || '- 現在のキャラの一人称、呼び方、距離感を保ち、誰が話しても同じ恋愛ADV口調にしない。'}

`;
        }

        if (this.lang === 'es') {
            return `**[Voz natural en español latinoamericano]**
- El diálogo suena hablado, íntimo, actual y natural, no como traducción literal del inglés, coreano o japonés.
- La extensión y el ritmo siguen al personaje y al momento: una reacción puede ser breve y una idea importante puede desarrollarse sin cortes artificiales.
- La narración puede ser sensual y visual, pero concreta. No repitas siempre suspiros, rubores, corazones acelerados o silencios eléctricos.
- La voz del personaje manda sobre el romance genérico:
${spanishCharacterLines[charId] || '- Mantén una voz distintiva para este personaje en vocabulario, ritmo y distancia emocional.'}

`;
        }

        if (this.lang === 'fr') {
            return `**[Voix française naturelle]**
- Le dialogue sonne parlé, intime, actuel et naturel, pas comme une traduction de l'anglais, du coréen ou du japonais.
- La longueur et le rythme suivent le personnage et le moment : une réaction peut être brève, tandis qu'une pensée importante peut aller à son terme sans coupure artificielle.
- La narration peut être sensuelle et visuelle, mais concrète. Ne répète pas toujours soupirs, rougeurs, cœur qui s'emballe ou silences chargés.
- La voix du personnage prime sur le romantisme générique :
${frenchCharacterLines[charId] || "- Garde une voix distincte pour ce personnage dans le vocabulaire, le rythme et la distance émotionnelle."}

`;
        }

        if (this.lang === 'de') {
            return `**[Natürliche deutsche Stimme]**
- Dialoge klingen gesprochen, intim, modern und natürlich, nicht wie aus dem Englischen, Koreanischen oder Japanischen übersetzt.
- Länge und Rhythmus folgen Figur und Augenblick: Eine spontane Reaktion darf kurz sein, ein wichtiger Gedanke darf sich ohne künstliche Kürzung entfalten.
- Die Erzählung darf sinnlich und visuell sein, aber konkret. Wiederhole nicht ständig Seufzer, Erröten, rasende Herzen oder elektrisch aufgeladene Stille.
- Charakterstimme steht über generischer Romantik:
${germanCharacterLines[charId] || '- Gib diesem Charakter eine eigene Stimme in Wortwahl, Rhythmus und emotionaler Distanz.'}

`;
        }

        if (this.lang === 'pt') {
            return `**[Voz natural em português brasileiro]**
- O diálogo soa falado, íntimo, atual e natural, não como tradução literal do inglês, coreano ou japonês.
- A extensão e o ritmo seguem a personagem e o momento: uma reação pode ser breve, e uma ideia importante pode se desenvolver sem cortes artificiais.
- A narração pode ser sensual e visual, mas concreta. Não repita sempre suspiros, rubores, coração disparado ou silêncios elétricos.
- A voz da personagem vem antes do romance genérico:
${portugueseCharacterLines[charId] || '- Mantenha uma voz distinta para esta personagem no vocabulário, no ritmo e na distância emocional.'}

`;
        }

        return '';
    }

    /** 지연 헬퍼 */
    _delay(ms) {
        return new Promise(r => setTimeout(r, ms));
    }

    // =========================================================================
    // 오버레이 열기/닫기
    // =========================================================================

    /**
     * 프리토킹 오버레이 열기
     * @param {string} charId - 캐릭터 ID (예: 'seyoun')
     */
    open(charId) {
        this._invalidateGalleryTalkContext();
        const openEpoch = this._galleryTalkEpoch;
        this.currentCharId = charId;
        this.currentCharKey = this.CHAR_ID_TO_KEY[charId];
        if (!this.currentCharKey) return;

        this.overlayEl = document.getElementById('gallery-freetalk-overlay');
        if (!this.overlayEl) return;

        // 상태 초기화
        this.isTyping = false;
        this.skipTyping = false;
        this.isProcessing = false;

        // 채팅 기록 로드
        this._loadMemory(charId);
        this.chatHistory = this._sanitizeDainOutfitHistory(this.chatHistory, charId);

        // 시스템 프롬프트 구성
        const systemPrompt = keepGalleryFreeTalkRuntimeBoundary(
            normalizeGalleryPromptBlockForCache(this._buildSystemPrompt(charId))
        );
        if (this.chatHistory.length > 0 && this.chatHistory[0].role === 'system') {
            this.chatHistory[0].content = systemPrompt;
        } else {
            this.chatHistory.unshift({ role: 'system', content: systemPrompt });
        }

        // UI 생성
        this._createOverlay(charId);
        this.overlayEl.classList.add('active');

        // 마지막 AI 메시지가 있으면 대사창에 표시
        this._showLastAssistantMessage();

        // 입력 포커스
        const input = document.getElementById('chat-input');
        if (input && (!window.isCupidDesktopPointer || window.isCupidDesktopPointer())) {
            setTimeout(() => {
                if (this._galleryTalkEpoch === openEpoch
                    && this.currentCharId === charId
                    && this.overlayEl?.classList?.contains('active')) {
                    input.focus();
                }
            }, 300);
        }

        console.log(`[GalleryFreeTalk] 오버레이 열기: ${charId}`);
    }

    /**
     * 프리토킹 오버레이 닫기
     */
    close() {
        if (!this.overlayEl) return;
        if (!this.overlayEl.classList.contains('active')) return;

        const closingCharId = this.currentCharId;
        const closingHistory = this.chatHistory;
        this._invalidateGalleryTalkContext();

        this.overlayEl.classList.remove('active');
        this.overlayEl.innerHTML = '';
        this.isProcessing = false;
        this.isTyping = false;
        this.skipTyping = false;

        // visualViewport 리스너 정리
        if (this._vvHandler && window.visualViewport) {
            window.visualViewport.removeEventListener('resize', this._vvHandler);
            window.visualViewport.removeEventListener('scroll', this._vvHandler);
            this._vvHandler = null;
        }

        // 메모리 저장
        if (closingCharId) {
            this._saveMemory(closingCharId, closingHistory);
        }

        console.log('[GalleryFreeTalk] 오버레이 닫기');
    }

    // =========================================================================
    // UI 생성 (VN 스타일 — 게임 내 프리토킹과 동일)
    // =========================================================================

    /**
     * 오버레이 내부 HTML 생성 (게임과 동일한 VN 레이아웃)
     * 구조: 배경 + 캐릭터(중앙 하단) + 대사창 + 입력창
     * @private
     */
    _createOverlay(charId) {
        const charName = this.CHAR_NAMES[charId]?.[this.lang] || charId;
        const bgUrl = this.CHAR_BACKGROUNDS[charId];

        this.overlayEl.innerHTML = `
            <div class="gft-background" style="background-image: url('${bgUrl}')"></div>
            <div class="gft-character">
                <img id="gft-char-img" src="assets/images/characters/${charId}_normal.png?v=${window.ASSET_VERSION || ''}" alt="${charName}">
            </div>
            <div class="gft-ui-layer">
                <div id="dialogue-box">
                    <div id="name-tag">${charName}</div>
                    <div id="message"></div>
                </div>
                <div class="gft-bottom-row">
                    <div id="chat-container">
                        <div id="chat-guide">${this._getTip()}</div>
                        <div id="image-preview-container" style="display:none;">
                            <img id="image-preview" src="">
                            <button id="remove-image-btn" title="×">×</button>
                        </div>
                        <div id="chat-input-wrapper">
                            <button id="upload-image-btn" title="${this._L('사진', 'Photo', 'Foto', '写真', 'Photo', 'Foto', 'Foto')}">
                                <span>📸</span>
                            </button>
                            <input type="file" id="gft-file-input" accept="image/*" style="display:none;">
                            <textarea id="chat-input" maxlength="200" rows="1"
                                      placeholder="${this._L('메시지를 입력하세요...', 'Type a message...', 'Escribe un mensaje...', 'メッセージを入力...', 'Saisissez un message...', 'Nachricht eingeben...', 'Digite uma mensagem...')}"></textarea>
                            <button type="button" id="action-toggle-btn" title="${this._L('행동 묘사 (*)', 'Action (*)', 'Acción (*)', 'アクション (*)', 'Action (*)', 'Aktion (*)', 'Ação (*)')}">✱</button>
                            <button id="chat-send" title="${this._L('전송', 'Send', 'Enviar', '送信', 'Envoyer', 'Senden', 'Enviar')}">
                                <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <button class="gft-close-btn" title="${this._L('닫기', 'Close', 'Cerrar', '閉じる', 'Fermer', 'Schließen', 'Fechar')}">✕</button>
                </div>
            </div>
        `;

        // 이벤트 바인딩 (게임과 동일한 ID 사용)
        const closeBtn = this.overlayEl.querySelector('.gft-close-btn');
        const sendBtn = this.overlayEl.querySelector('#chat-send');
        const input = this.overlayEl.querySelector('#chat-input');
        const dialogueBox = this.overlayEl.querySelector('#dialogue-box');
        const uploadBtn = this.overlayEl.querySelector('#upload-image-btn');
        const fileInput = this.overlayEl.querySelector('#gft-file-input');
        const removeImgBtn = this.overlayEl.querySelector('#remove-image-btn');

        closeBtn.addEventListener('click', () => this.close());
        sendBtn.addEventListener('click', () => this._handleSend());
        input.addEventListener('input', () => this._resizeInput(input));
        this._resizeInput(input);

        // 대사창 클릭 → 타이핑 스킵 (게임과 동일)
        dialogueBox.addEventListener('click', () => {
            if (this.isTyping) this.skipTyping = true;
        });

        // 행동 묘사(*) 버튼: **를 삽입하고 커서를 사이에 둠
        const actionBtn = this.overlayEl.querySelector('#action-toggle-btn');
        if (actionBtn && input) {
            actionBtn.addEventListener('click', () => {
                const start = input.selectionStart || 0;
                const end = input.selectionEnd || 0;
                const val = input.value;
                input.value = val.substring(0, start) + '**' + val.substring(end);
                const cursor = start + 1;
                input.setSelectionRange(cursor, cursor);
                this._resizeInput(input);
                input.focus();
            });
        }

        // 이미지 업로드
        uploadBtn.addEventListener('click', () => {
            if (input.disabled) return;
            fileInput.click();
        });
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) this._handleImageUpload(file);
            fileInput.value = ''; // 같은 파일 재선택 가능
        });
        removeImgBtn.addEventListener('click', () => this._removeStagedImage());

        // 모바일: visualViewport로 키보드 대응 (게임과 동일 방식)
        // 오버레이 크기는 변경하지 않고, UI 레이어만 키보드 위로 이동
        this._vvHandler = null;
        if (window.visualViewport && window.innerWidth <= 768) {
            const uiLayer = this.overlayEl.querySelector('.gft-ui-layer');
            const updateKeyboardOffset = () => {
                if (!uiLayer) return;
                const keyboardOffset = typeof window.getCupidKeyboardOffset === 'function'
                    ? window.getCupidKeyboardOffset(document.activeElement)
                    : 0;
                uiLayer.style.setProperty('--keyboard-offset', `${keyboardOffset}px`);
                uiLayer.classList.toggle('keyboard-active', keyboardOffset > 0);
                uiLayer.style.transform = keyboardOffset > 0
                    ? `translate3d(0, -${keyboardOffset}px, 0)`
                    : '';
            };

            this._vvHandler = () => requestAnimationFrame(updateKeyboardOffset);
            window.visualViewport.addEventListener('resize', this._vvHandler);
            window.visualViewport.addEventListener('scroll', this._vvHandler);
            input.addEventListener('focus', () => setTimeout(updateKeyboardOffset, 120));
            input.addEventListener('blur', () => setTimeout(updateKeyboardOffset, 120));
            updateKeyboardOffset();
        }
    }

    /**
     * 마지막 AI 메시지를 대사창에 표시 (이전 대화 복원)
     * @private
     */
    _showLastAssistantMessage() {
        for (let i = this.chatHistory.length - 1; i >= 0; i--) {
            if (this.chatHistory[i].role === 'assistant') {
                const text = this._extractText(this.chatHistory[i].content);
                const msgEl = document.getElementById('message');
                if (msgEl) msgEl.innerHTML = this._formatAction(text);
                // 마지막 표정도 복원
                const parsed = this._parseResponse(this.chatHistory[i].content);
                if (parsed.expression) this._updateExpression(parsed.expression);
                return;
            }
        }
    }

    // =========================================================================
    // 메시지 전송 / API 호출
    // =========================================================================

    _buildInWorldUserRoleBlock(messages) {
        if (!Array.isArray(messages)) return '';

        const userMessages = [...messages].reverse().filter(msg =>
            msg &&
            msg.role === 'user' &&
            typeof msg.content === 'string' &&
            String(msg.content || '').trim()
        ).slice(0, 8);

        if (userMessages.length === 0) return '';

        const cleanRoleName = (value) => String(value || '')
            .replace(/["'“”‘’「」『』]/g, '')
            .replace(/\s+/g, ' ')
            .trim()
            .slice(0, 32);

        const blockedRoleNames = new Set([
            'ai', 'assistant', 'bot', 'system', 'user', 'player',
            '사용자', '유저', '플레이어', '주인공', '캐릭터'
        ]);

        for (const msg of userMessages) {
            const text = String(msg.content || '');
            const koMatch =
                text.match(/(?:당신|너|플레이어|유저|사용자|주인공)\s*(?:은|는|이|가)?\s*["'“”‘’「」『』]?([가-힣A-Za-z0-9_\- ]{1,24}?)["'“”‘’「」『』]?\s*(?:이|가)?(?:예요|이에요|입니다|야|이다|임)(?:[\s.!?。]|$)/u) ||
                text.match(/(?:나는|내가|저는|제가)\s*["'“”‘’「」『』]?([가-힣A-Za-z0-9_\- ]{1,24}?)["'“”‘’「」『』]?\s*(?:이|가)?(?:예요|이에요|입니다|야|이다|임)(?:[\s.!?。]|$)/u);
            const enMatch =
                text.match(/\b(?:you are|you're)\s+(?:playing\s+as\s+)?["'“”‘’]?([A-Za-z][A-Za-z0-9_\- ]{1,30})["'“”‘’]?(?:[\s.!?]|$)/i) ||
                text.match(/\b(?:the player is|player is|the user is|user is|i am|i'm)\s+(?:playing\s+as\s+)?["'“”‘’]?([A-Za-z][A-Za-z0-9_\- ]{1,30})["'“”‘’]?(?:[\s.!?]|$)/i);

            const roleName = cleanRoleName(koMatch?.[1] || enMatch?.[1] || '');
            if (!roleName || blockedRoleNames.has(roleName.toLowerCase())) continue;

            if (this.lang === 'ko') {
                return `\n\n[사용자 배역]\n사용자 캐릭터는 "${roleName}"입니다. ${roleName} 이름표로 적힌 말·행동·침묵은 이미 일어난 사용자 쪽 장면으로 받고, 새 행동이나 대사·동의·거절은 대신 정하지 마세요.`;
            }

            return `\n\n[User character]\nThe user character is "${roleName}". Treat lines, actions, and silences labeled ${roleName} as already performed by the user side, and do not invent that character's next action, dialogue, consent, or refusal.`;
        }

        return '';
    }

    /**
     * 전송 핸들러 (VN 스타일: 대사창에 타이핑 효과)
     * @private
     */
    _resizeInput(input = document.getElementById('chat-input')) {
        if (!input) return;
        const maxHeight = this._getTextareaMaxHeight(input, 5);
        input.style.height = 'auto';
        input.style.height = `${Math.min(input.scrollHeight, maxHeight)}px`;
        input.style.overflowY = input.scrollHeight > maxHeight + 1 ? 'auto' : 'hidden';
    }

    _getTextareaMaxHeight(input, maxRows = 5) {
        const style = window.getComputedStyle(input);
        const parsePx = (value) => Number.parseFloat(value) || 0;
        const fontSize = parsePx(style.fontSize) || 16;
        const lineHeight = parsePx(style.lineHeight) || fontSize * 1.4;
        const verticalPadding = parsePx(style.paddingTop) + parsePx(style.paddingBottom);
        const verticalBorder = parsePx(style.borderTopWidth) + parsePx(style.borderBottomWidth);
        return Math.ceil((lineHeight * maxRows) + verticalPadding + verticalBorder);
    }

    _invalidateGalleryTalkContext() {
        if (this._activeRequestContext) {
            this._rollbackRequestHistory(this._activeRequestContext);
        }
        this._galleryTalkEpoch += 1;
        this._activeChatTurnId = null;
        this._activeRequestOwner = null;
        this._activeRequestContext = null;
        this._typingGeneration += 1;
        this._activeTypingOwner = null;
        this.isTyping = false;
        this.skipTyping = false;
    }

    _isRequestContextCurrent(requestContext) {
        return Boolean(requestContext
            && this._galleryTalkEpoch === requestContext.epoch
            && this.currentCharId === requestContext.charId
            && this.currentCharKey === requestContext.charKey
            && this.chatHistory === requestContext.history
            && this._activeRequestOwner === requestContext.owner
            && this.overlayEl?.classList?.contains('active'));
    }

    _assertRequestContext(requestContext, payload = null) {
        if (!this._isRequestContextCurrent(requestContext)) {
            throw this._makeStaleTurnError('Gallery free-talk character changed before the AI response completed');
        }
        this._assertCurrentTurn(requestContext.turnMeta, payload);
    }

    _rollbackRequestHistory(requestContext) {
        const history = requestContext?.history;
        const start = requestContext?.historyLengthBeforeTurn;
        if (!Array.isArray(history) || !Number.isInteger(start) || start < 0) return;
        if (history.length > start) history.splice(start);
    }

    _hashTurnText(value) {
        const text = String(value || '');
        let hash = 2166136261;
        for (let i = 0; i < text.length; i++) {
            hash ^= text.charCodeAt(i);
            hash = Math.imul(hash, 16777619);
        }
        return `${(hash >>> 0).toString(36)}:${text.length}`;
    }

    _createTurnMeta(latestUserText) {
        const text = String(latestUserText || '').trim();
        if (!text) return null;
        return {
            turnId: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`,
            latestUserHash: this._hashTurnText(text),
            latestUserLength: text.length
        };
    }

    _makeStaleTurnError(message = 'Stale AI response ignored') {
        const error = new Error(message);
        error.name = 'StaleTurnError';
        error.reason = 'STALE_TURN';
        error.isStaleTurn = true;
        return error;
    }

    _assertCurrentTurn(turnMeta, payload = null) {
        if (!turnMeta?.turnId) return;
        if (this._activeChatTurnId && this._activeChatTurnId !== turnMeta.turnId) {
            throw this._makeStaleTurnError();
        }
        if (payload?.turnId && payload.turnId !== turnMeta.turnId) {
            throw this._makeStaleTurnError('AI response turn id did not match request');
        }
        if (payload?.latestUserHash && payload.latestUserHash !== turnMeta.latestUserHash) {
            throw this._makeStaleTurnError('AI response latest user hash did not match request');
        }
    }

    _forceLatestUserMessageLast(messages = [], latestContent = '') {
        const text = String(latestContent || '');
        if (!text) return Array.isArray(messages) ? messages : [];
        const withoutDuplicate = (Array.isArray(messages) ? messages : []).filter(msg => !(msg?.role === 'user' && msg.content === text));
        return [...withoutDuplicate, { role: 'user', content: text }];
    }

    async _handleSend() {
        if (this.isProcessing) return;
        if (!this.currentCharId || !this.currentCharKey || !this.overlayEl?.classList?.contains('active')) return;

        const requestOwner = {};
        const requestContext = {
            owner: requestOwner,
            epoch: this._galleryTalkEpoch,
            charId: this.currentCharId,
            charKey: this.currentCharKey,
            history: this.chatHistory,
            historyLengthBeforeTurn: null,
            turnMeta: null
        };
        const requestHistory = requestContext.history;
        const requestCharId = requestContext.charId;
        const requestCharKey = requestContext.charKey;

        const input = document.getElementById('chat-input');
        const text = input.value.trim();
        const stagedImage = this.stagedImage;

        // 텍스트와 이미지 둘 다 없으면 전송 안 함
        if (!text && !stagedImage) return;

        input.value = '';
        this._resizeInput(input);
        this._activeRequestOwner = requestOwner;
        this._activeRequestContext = requestContext;
        this.isProcessing = true;

        // 이미지 + 텍스트 결합 (게임과 동일: text\n\nbase64)
        const finalContent = stagedImage
            ? (text ? `${text}\n\n${stagedImage}` : stagedImage)
            : text;

        const msgEl = document.getElementById('message');
        const nameTag = document.getElementById('name-tag');
        const playerName = this.progress.getPlayerName() || this._L('자기', 'Honey', 'Cariño', 'あなた', 'Chéri(e)', 'Liebling', 'Amor');

        // 이름표를 플레이어로 변경, 유저 메시지 표시
        if (nameTag) nameTag.textContent = playerName;
        if (msgEl) {
            msgEl.innerHTML = '';
            if (text) msgEl.textContent = text;
            if (stagedImage) {
                const img = document.createElement('img');
                img.src = stagedImage;
                img.className = 'gft-chat-image';
                msgEl.appendChild(img);
            }
        }

        // 이미지 미리보기 제거
        this._removeStagedImage();

        const historyLengthBeforeTurn = requestHistory.length;
        requestContext.historyLengthBeforeTurn = historyLengthBeforeTurn;
        requestHistory.push({ role: 'user', content: finalContent });

        // 전송 버튼 & 입력 비활성화 + 로딩 상태 (게임과 동일)
        const sendBtn = document.getElementById('chat-send');
        const originalBtnContent = sendBtn ? sendBtn.innerHTML : '';
        if (sendBtn) {
            sendBtn.disabled = true;
            sendBtn.innerHTML = '<span class="loading-dots">...</span>';
        }
        if (input) input.disabled = true;

        // 생각중 상태 (게임과 동일: thinking 클래스)
        const charImg = document.getElementById('gft-char-img');
        const dialogueBox = document.getElementById('dialogue-box');
        if (charImg) charImg.classList.add('thinking');
        if (dialogueBox) dialogueBox.classList.add('thinking-box');

        // 캐릭터 위 생각중 인디케이터
        const gftChar = this.overlayEl.querySelector('.gft-character');
        if (gftChar && !gftChar.querySelector('.thinking-indicator')) {
            const indicator = document.createElement('div');
            indicator.className = 'thinking-indicator';
            indicator.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
            gftChar.appendChild(indicator);
        }
        const pendingCharName = this.CHAR_NAMES[requestCharId]?.[this.lang] || requestCharId;
        this._showThinkingMessage(pendingCharName);

        let _lastTurnMeta = null;
        let _lastCacheKey = '';
        let _lastAiEndpoint = '';

        try {
            // [Explicit Caching] 캐시 키 헤더 추가
            // 토큰 절감: 최근 5개 메시지 외의 이미지는 [이전 사진]으로 치환
            this._assertRequestContext(requestContext);
            const _historyForRequest = this._sanitizeDainOutfitHistory(this._buildWindowedHistory(requestHistory), requestCharId);
            let _optimized = (typeof window.optimizeImageHistory === 'function')
                ? window.optimizeImageHistory(_historyForRequest, 5)
                : _historyForRequest;
            const _latestUserCanonBlock = buildGalleryLatestUserCanonBlock(_optimized, this.lang || 'en', finalContent);
            const _inWorldUserRoleBlock = this._buildInWorldUserRoleBlock(_optimized);
            const _recentRepetitionGuard = buildGalleryRecentExpressionRepetitionGuard(_optimized, this.lang || 'en');
            const _runtimePromptPatch = `${_latestUserCanonBlock}${_inWorldUserRoleBlock}${_recentRepetitionGuard}`;
            if (_runtimePromptPatch && Array.isArray(_optimized) && _optimized[0]?.role === 'system') {
                _optimized = [
                    { ..._optimized[0], content: appendGalleryFreeTalkDynamicContext(_optimized[0].content, _runtimePromptPatch) },
                    ..._optimized.slice(1)
                ];
            }
            _optimized = this._forceLatestUserMessageLast(_optimized, finalContent);
            const _stablePromptContent = Array.isArray(_optimized) && _optimized[0]?.role === 'system'
                ? _optimized[0].content
                : '';
            const _stablePromptFingerprint = _stablePromptContent
                ? getGalleryFreeTalkStablePromptFingerprint(_stablePromptContent)
                : '';
            const _gftCacheKey = requestCharId && _stablePromptFingerprint
                ? `cupid-gft:ctx:${encodeGalleryFreeTalkCacheKeyPart(this.lang)}:${encodeGalleryFreeTalkCacheKeyPart(requestCharId)}:s${_stablePromptFingerprint}`
                : '';
            _lastCacheKey = _gftCacheKey;
            const _turnMeta = this._createTurnMeta(finalContent);
            _lastTurnMeta = _turnMeta;
            requestContext.turnMeta = _turnMeta;
            this._activeChatTurnId = _turnMeta?.turnId || null;
            const aiEndpoint = window.AI_API_ENDPOINT || window.API_ENDPOINT || 'https://chatbot-api.yama5993.workers.dev/';
            _lastAiEndpoint = aiEndpoint;
            const requestInit = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-app-type': 'cupid',
                    'x-request-type': 'character',
                    'x-chat-mode': 'single',
                    'x-output-language': this.lang,
                    ...(_gftCacheKey && { 'x-cache-key': _gftCacheKey })
                },
                body: JSON.stringify({
                    messages: _optimized,
                    model: window.AI_MODEL_ID || (typeof AI_MODEL_ID !== 'undefined' ? AI_MODEL_ID : undefined),
                    characterId: requestCharId || '',
                    requestType: 'character',
                    chatMode: 'single',
                    outputLanguage: this.lang,
                    cacheKey: _gftCacheKey,
                    ...(_turnMeta || {})
                })
            };
            let response;
            let primaryError = null;
            try {
                response = await fetch(aiEndpoint, requestInit);
                this._assertRequestContext(requestContext);
            } catch (error) {
                this._assertRequestContext(requestContext);
                primaryError = error;
            }

            const fallbackEndpoint = window.API_ENDPOINT || 'https://chatbot-api.yama5993.workers.dev/';
            const canFallback = (
                primaryError instanceof TypeError || shouldFailOverGalleryAiResponse(response)
            ) && fallbackEndpoint && fallbackEndpoint !== aiEndpoint;
            if (canFallback) {
                _lastAiEndpoint = fallbackEndpoint;
                response = await fetch(fallbackEndpoint, requestInit);
                this._assertRequestContext(requestContext);
            } else if (primaryError) {
                throw primaryError;
            }

            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const data = await response.json();
            this._assertRequestContext(requestContext, data);
            const replyContent = data?.choices?.[0]?.message?.content;
            const reply = typeof replyContent === 'string' ? replyContent.trim() : '';

            if (!reply) {
                console.warn('[Cupid GalleryFreeTalk] Empty AI response payload:', {
                    reason: data?.reason || data?.error || data?.choices?.[0]?.finish_reason || 'EMPTY_AI_RESPONSE',
                    character: requestCharId || ''
                });
                throw new Error('AI response was empty. Please try again.');
            }

            // 응답 파싱
            if (data?.provider === 'deepseek' && data?.usage) {
                const usage = data.usage;
                const cache = data.cache || {};
                const hitTokens = Number(cache.prompt_cache_hit_tokens ?? usage.prompt_cache_hit_tokens ?? 0);
                const missTokens = Number(cache.prompt_cache_miss_tokens ?? usage.prompt_cache_miss_tokens ?? 0);
                const hitRatio = hitTokens + missTokens > 0 ? hitTokens / (hitTokens + missTokens) : 0;
                console.info('[DeepSeek Cache]', {
                    app: 'cupid-gallery-freetalk',
                    character: requestCharId || '',
                    cacheKey: _gftCacheKey || '',
                    hitTokens,
                    missTokens,
                    hitRatio: Number(hitRatio.toFixed(4)),
                    promptTokens: Number(usage.prompt_tokens || hitTokens + missTokens || 0),
                    completionTokens: Number(usage.completion_tokens || 0),
                    totalTokens: Number(usage.total_tokens || 0)
                });
            }

            this._assertRequestContext(requestContext, data);
            const parsed = this._parseResponse(reply);
            if (!parsed?.text && !(Array.isArray(parsed?.segments) && parsed.segments.length > 0)) {
                throw new Error('AI response did not contain visible roleplay text. Please try again.');
            }
            const displayText = this._sanitizePlayerPlaceholders(parsed.text || '');
            const displaySegments = this._sanitizeSegmentsPlaceholders(parsed.segments || null);
            if (!displayText) {
                throw new Error('AI response did not contain visible roleplay text. Please try again.');
            }

            this._assertRequestContext(requestContext, data);
            // 이름표를 캐릭터로 변경 + 생각중 상태 해제
            const charName = this.CHAR_NAMES[requestCharId]?.[this.lang] || requestCharId;
            this._clearThinkingMessage();
            if (nameTag) nameTag.textContent = charName;
            if (charImg) charImg.classList.remove('thinking');
            if (dialogueBox) dialogueBox.classList.remove('thinking-box');
            document.querySelectorAll('.thinking-indicator').forEach(el => el.remove());

            // 대사창에 타이핑 효과로 표시 (segments 있으면 구조화 렌더)
            await this._typeText(displayText, displaySegments, requestContext);
            this._assertRequestContext(requestContext, data);
            if (parsed.expression) {
                this._updateExpression(parsed.expression, requestCharId);
            }
            this._assertRequestContext(requestContext, data);
            requestHistory.push({ role: 'assistant', content: displayText });

            // 프리토킹 횟수 증가
            this._incrementFreeTalkCount(requestCharId);

            this._assertRequestContext(requestContext, data);
            this._saveMemory(requestCharId, requestHistory);

            // D1 chat-logs 저장 (백업 뷰어용, 비동기 fire-and-forget)
            // charId: 대문자 키(this.currentCharKey)로 저장해 게임 내 프리토킹 기록과 버킷 통일
            // assistantContent: 파싱된 displayText(raw JSON 저장 금지 — 뷰어에서 원본 JSON이 그대로 노출됨)
            if (typeof window.saveCupidChatLog === 'function') {
                this._assertRequestContext(requestContext, data);
                window.saveCupidChatLog({
                    charId: requestCharKey,
                    userContent: finalContent,
                    assistantContent: displayText,
                    sessionId: 'gallery-freetalk',
                    context: '1:1',
                    playerName: this.progress.getPlayerName() || ''
                });
            }

        } catch (err) {
            const ownsCurrentContext = this._isRequestContextCurrent(requestContext);
            this._rollbackRequestHistory(requestContext);
            if (!ownsCurrentContext || err?.isStaleTurn || err?.reason === 'STALE_TURN') {
                console.warn('[Cupid GalleryFreeTalk] Ignored stale chat response');
                err.__staleTurnHandled = true;
            }
            if (!err?.__staleTurnHandled) {
                console.error('[GalleryFreeTalk] API 오류:', err);
                if (typeof window.logCupidError === 'function') {
                    window.logCupidError(err, {
                        source: 'cupid-gallery-freetalk',
                        errorType: /^HTTP\s+\d+/.test(err?.message || '') ? 'freetalk_http_error' : 'freetalk_request_failed',
                        sessionId: 'gallery-freetalk',
                        context: {
                            charId: requestCharKey || requestCharId || '',
                            galleryCharId: requestCharId || '',
                            language: this.lang || '',
                            freeTalkCount: this.progress?.getFreeTalkCount?.(requestCharId) || 0
                        },
                        extra: {
                            cacheKey: _lastCacheKey,
                            aiEndpoint: _lastAiEndpoint,
                            turnId: _lastTurnMeta?.turnId || '',
                            latestUserHash: _lastTurnMeta?.latestUserHash || '',
                            latestUserLength: _lastTurnMeta?.latestUserLength || String(finalContent || '').length,
                            hasImage: String(finalContent || '').includes('data:image/'),
                            historyLength: requestHistory.length
                        }
                    });
                }
                this._clearThinkingMessage();
                const noticeLabel = this._L('안내', 'Notice', 'Aviso', 'お知らせ', 'Information', 'Hinweis', 'Aviso');
                if (nameTag) nameTag.textContent = noticeLabel;
                if (charImg) charImg.classList.remove('thinking');
                if (dialogueBox) dialogueBox.classList.remove('thinking-box');
                document.querySelectorAll('.thinking-indicator').forEach(el => el.remove());
                const requestErrorMessage = this._L(
                    '연결이 잠시 원활하지 않습니다. 방금 입력은 대화 기록에 저장되지 않았습니다. 다시 시도해 주세요.',
                    'The connection was interrupted. Your last input was not saved to the conversation. Please try again.',
                    'La conexión se interrumpió. Tu último mensaje no se guardó en la conversación. Inténtalo de nuevo.',
                    '接続が一時的に中断されました。直前の入力は会話履歴に保存されていません。もう一度お試しください。',
                    'La connexion a été interrompue. Votre dernier message n’a pas été enregistré dans la conversation. Réessayez.',
                    'Die Verbindung wurde unterbrochen. Deine letzte Eingabe wurde nicht im Gespräch gespeichert. Bitte versuche es erneut.',
                    'A conexão foi interrompida. Sua última mensagem não foi salva na conversa. Tente novamente.'
                );
                await this._typeText(requestErrorMessage, null, requestContext);
            }
        }

        if (this._activeRequestOwner === requestOwner) {
            this._activeRequestOwner = null;
            this._activeRequestContext = null;
            this._activeChatTurnId = null;
            if (charImg) charImg.classList.remove('thinking');
            if (dialogueBox) dialogueBox.classList.remove('thinking-box');
            document.querySelectorAll('.thinking-indicator').forEach(el => el.remove());
            this._clearThinkingMessage();

            // UI 복원 (게임과 동일: 버튼 원복 + 입력 활성화)
            if (sendBtn) {
                sendBtn.disabled = false;
                sendBtn.innerHTML = originalBtnContent;
            }
            if (input) {
                input.disabled = false;
                if (!window.isCupidDesktopPointer || window.isCupidDesktopPointer()) {
                    input.focus();
                }
            }
            this.isProcessing = false;
        }
    }

    // =========================================================================
    // 응답 파싱
    // =========================================================================

    /**
     * AI 응답 파싱 (FreeTalkSystem.parseJsonResponse 경량 버전)
     * @private
     */
    _getPlayerDisplayName() {
        return this.progress?.getPlayerName?.() || this._L('자기', 'Honey', 'Cariño', 'あなた', 'Chéri(e)', 'Liebling', 'Amor');
    }

    _sanitizePlayerPlaceholders(text) {
        if (typeof text !== 'string' || !text) return text || '';

        const playerName = this._getPlayerDisplayName();
        const tokenPattern = String.raw`(?:\$\{\s*(?:playerName|userName|username|user|player|name)\s*\}|\{\{\s*(?:user|player|playerName|userName|username|name)\s*\}\}|\{\s*(?:playerName|userName|username|user|player|name)\s*\}|PLAYER_NAME)`;
        const hasFinalConsonant = (value) => {
            const trimmed = String(value || '').trim();
            if (!trimmed) return false;
            const code = trimmed.charCodeAt(trimmed.length - 1);
            if (code < 0xAC00 || code > 0xD7A3) return false;
            return ((code - 0xAC00) % 28) !== 0;
        };
        const endsWithRieul = (value) => {
            const trimmed = String(value || '').trim();
            if (!trimmed) return false;
            const code = trimmed.charCodeAt(trimmed.length - 1);
            return code >= 0xAC00 && code <= 0xD7A3 && ((code - 0xAC00) % 28) === 8;
        };
        const final = hasFinalConsonant(playerName);
        const particle = {
            subject: final ? '이' : '가',
            topic: final ? '은' : '는',
            object: final ? '을' : '를',
            with: final ? '과' : '와',
            call: final ? '아' : '야',
            route: final && !endsWithRieul(playerName) ? '으로' : '로'
        };

        let out = text;
        out = out.replace(new RegExp(`${tokenPattern}\\s*(?:이\\(가\\)|가\\(이\\)|이|가)`, 'gi'), `${playerName}${particle.subject}`);
        out = out.replace(new RegExp(`${tokenPattern}\\s*(?:은\\(는\\)|는\\(은\\)|은|는)`, 'gi'), `${playerName}${particle.topic}`);
        out = out.replace(new RegExp(`${tokenPattern}\\s*(?:을\\(를\\)|를\\(을\\)|을|를)`, 'gi'), `${playerName}${particle.object}`);
        out = out.replace(new RegExp(`${tokenPattern}\\s*(?:와\\(과\\)|과\\(와\\)|와|과)`, 'gi'), `${playerName}${particle.with}`);
        out = out.replace(new RegExp(`${tokenPattern}\\s*(?:아\\(야\\)|야\\(아\\)|아|야)`, 'gi'), `${playerName}${particle.call}`);
        out = out.replace(new RegExp(`${tokenPattern}\\s*(?:\\(으\\)로|으로|로)`, 'gi'), `${playerName}${particle.route}`);
        return out.replace(new RegExp(tokenPattern, 'gi'), playerName);
    }

    _sanitizeSegmentsPlaceholders(segments) {
        if (!Array.isArray(segments)) return segments || null;
        return segments.map(seg => {
            if (!seg || typeof seg !== 'object') return seg;
            return { ...seg, text: this._sanitizePlayerPlaceholders(seg.text || '') };
        }).filter(seg => seg && seg.text);
    }

    _parseResponse(reply) {
        if (!reply) return { text: '', segments: null, expression: '' };

        const likelyJson = reply.includes('{') || reply.includes('```json');
        if (!likelyJson) return { text: this._sanitizePlayerPlaceholders(reply), segments: null, expression: '' };

        try {
            let jsonStr = reply;

            // 코드 블록 추출
            if (jsonStr.includes('```')) {
                const match = jsonStr.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
                if (match) jsonStr = match[1];
            }

            // JSON 시작점 찾기
            if (!jsonStr.trim().startsWith('{')) {
                const start = jsonStr.indexOf('{');
                const end = jsonStr.lastIndexOf('}');
                if (start !== -1 && end > start) {
                    jsonStr = jsonStr.substring(start, end + 1);
                }
            }

            const parsed = JSON.parse(jsonStr);

            // 신규 — segments 배열 우선 처리
            if (parsed && typeof parsed === 'object' && Array.isArray(parsed.segments) && parsed.segments.length > 0) {
                const normalizedSegments = this._normalizeSegments(parsed.segments);
                const derivedText = parsed.text || this._segmentsToText(normalizedSegments);
                return {
                    text: this._sanitizePlayerPlaceholders(derivedText),
                    segments: this._sanitizeSegmentsPlaceholders(normalizedSegments),
                    expression: (parsed.expression || '').toLowerCase()
                };
            }

            // 레거시 — text 필드 사용
            if (parsed && typeof parsed === 'object' && typeof parsed.text === 'string') {
                return {
                    text: this._sanitizePlayerPlaceholders(parsed.text || ''),
                    segments: null,
                    expression: (parsed.expression || '').toLowerCase()
                };
            }

            // 알려진 텍스트 키 폴백
            const text = parsed.text || parsed.dialogue || parsed.content || parsed.message || parsed.response || '';
            return { text: this._sanitizePlayerPlaceholders(text), segments: null, expression: (parsed.expression || '').toLowerCase() };

        } catch (e) {
            window.reportCupidCaughtError?.(e, {
                source: 'cupid-gallery-freetalk',
                errorType: 'ai_response_json_parse_failed',
                sessionId: 'gallery-freetalk',
                context: {
                    charId: this.currentCharId || '',
                    charKey: this.currentCharKey || '',
                    language: this.lang || '',
                    replyLength: String(reply || '').length,
                    replyHash: window.hashCupidLogText ? window.hashCupidLogText(reply || '') : ''
                }
            });
            return { text: '', segments: null, expression: '' };
        }
    }

    /**
     * AI가 반환한 segments 배열을 표준 포맷으로 정규화
     * 허용 type: 'narration' | 'dialogue'
     * @private
     */
    _normalizeSegments(raw) {
        if (!Array.isArray(raw)) return null;
        const out = [];
        for (const seg of raw) {
            if (!seg || typeof seg !== 'object') continue;
            const text = this._sanitizePlayerPlaceholders(typeof seg.text === 'string' ? seg.text.trim() : '');
            if (!text) continue;
            let type = (typeof seg.type === 'string') ? seg.type.toLowerCase() : '';
            if (type === 'action' || type === 'narrate' || type === 'narrator' || type === 'desc' || type === 'description' || type === 'scene') {
                type = 'narration';
            } else if (type === 'speech' || type === 'line' || type === 'text' || type === 'talk') {
                type = 'dialogue';
            }
            if (type !== 'narration' && type !== 'dialogue') {
                const endsWithSpeech = /[.?!…][\s]*$/.test(text) && /[야어네지어!?~"']\s*$/.test(text);
                type = endsWithSpeech ? 'dialogue' : 'narration';
            }
            out.push({ type, text });
        }
        return out.length > 0 ? out : null;
    }

    /**
     * 제타식 단락 분리: 문장 종결 뒤에 빈 줄 삽입.
     * @private
     */
    _zetaFormatText(text, paragraphBreak = true) {
        if (!text) return '';
        const separator = paragraphBreak ? '\n\n' : '\n';
        let s = String(text).replace(/\\n/g, '\n').replace(/\r\n?/g, '\n');
        s = s.replace(/([.!?…。！？]["'”’)\]]*)[ \t]+/g, '$1' + separator);
        s = s.replace(/([.!?…。！？]["'”’)\]]*)(?=[가-힣A-Zぁ-んァ-ヶ一-龯¿¡])/g, '$1' + separator);
        s = s.replace(/[ \t]+\n/g, '\n').replace(/\n[ \t]+/g, '\n');
        s = paragraphBreak ? s.replace(/\n{3,}/g, '\n\n') : s.replace(/\n{2,}/g, '\n');
        return s.trim();
    }

    /**
     * segments 배열 → 레거시 호환 인라인 텍스트 (narration → *text*, dialogue → text)
     * @private
     */
    _segmentsToText(segments) {
        if (!Array.isArray(segments) || segments.length === 0) return '';
        return segments.map(s => {
            if (!s || !s.text) return '';
            const text = this._sanitizePlayerPlaceholders(s.text);
            return s.type === 'narration' ? `*${text}*` : text;
        }).filter(Boolean).join(' ');
    }

    /**
     * assistant 메시지에서 순수 텍스트 추출 (이전 대화 렌더링용)
     * @private
     */
    _extractText(content) {
        const parsed = this._parseResponse(content);
        return parsed.text || content;
    }

    // =========================================================================
    // UI 헬퍼 (VN 스타일 — 대사창 기반)
    // =========================================================================

    /**
     * 대사창에 텍스트 타이핑 효과 (게임 DialogueSystem.typeText와 동일)
     * 대사창 클릭 시 스킵 가능.
     * 지문(*text*)은 처음부터 포맷 적용된 상태로 타이핑.
     *
     * @param {string} text - 표시할 텍스트
     * @param {Array|null} structuredSegments - 구조화된 narration/dialogue 배열
     * @param {Object|null} requestContext - 현재 오버레이/캐릭터 요청 소유권
     * @returns {Promise} 타이핑 완료 시 resolve
     */
    _typeText(text, structuredSegments = null, requestContext = null) {
        const msgEl = document.getElementById('message');
        if (!msgEl) return Promise.resolve();

        text = this._sanitizePlayerPlaceholders(text || '');
        structuredSegments = this._sanitizeSegmentsPlaceholders(structuredSegments);

        const typingOwner = { generation: ++this._typingGeneration };
        this._activeTypingOwner = typingOwner;
        const ownsTyping = () => this._activeTypingOwner === typingOwner;
        const finishOwnedTyping = () => {
            if (!ownsTyping()) return false;
            this.isTyping = false;
            this.skipTyping = false;
            this._activeTypingOwner = null;
            return true;
        };

        this.isTyping = true;
        this.skipTyping = false;
        msgEl.innerHTML = '';

        // structuredSegments가 있으면 별표 파싱 건너뛰고 type별 직접 매핑
        // AI의 narration/dialogue → 갤러리 내부 action/text 매핑
        // 제타식 줄바꿈 적용 (마침표 단위)
        const segments = Array.isArray(structuredSegments) && structuredSegments.length > 0
            ? structuredSegments.map(s => ({
                type: s.type === 'narration' ? 'action' : 'text',
                content: this._zetaFormatText(s.text || '', s.type === 'narration') + ' '
            })).filter(s => s.content.trim())
            : this._parseSegments(text).map(s => ({ ...s, content: this._zetaFormatText(s.content, s.type === 'action') + ' ' }));
        const speed = 30; // ms per character (게임과 동일)

        // 각 세그먼트별 DOM 요소를 미리 생성 (지문은 처음부터 포맷 적용)
        const elements = segments.map(seg => {
            const el = document.createElement('span');
            if (seg.type === 'action') el.className = 'gft-action';
            else el.className = 'gft-text';
            msgEl.appendChild(el);
            return el;
        });

        const totalLength = segments.reduce((sum, s) => sum + s.content.length, 0);

        return new Promise((resolve) => {
            let startTime = null;

            const typeFrame = (timestamp) => {
                if (!ownsTyping()) {
                    resolve();
                    return;
                }
                if (requestContext && !this._isRequestContextCurrent(requestContext)) {
                    finishOwnedTyping();
                    resolve();
                    return;
                }
                if (!startTime) startTime = timestamp;

                // 스킵 요청 시 즉시 전체 텍스트 표시
                if (this.skipTyping) {
                    segments.forEach((seg, i) => { elements[i].textContent = seg.content; });
                    finishOwnedTyping();
                    resolve();
                    return;
                }

                const elapsed = timestamp - startTime;
                const targetTotal = Math.min(Math.floor(elapsed / speed), totalLength);

                // 각 세그먼트에 타이핑 진행분 반영
                let remaining = targetTotal;
                for (let i = 0; i < segments.length; i++) {
                    const segLen = segments[i].content.length;
                    if (remaining >= segLen) {
                        elements[i].textContent = segments[i].content;
                        remaining -= segLen;
                    } else {
                        elements[i].textContent = segments[i].content.substring(0, remaining);
                        for (let j = i + 1; j < segments.length; j++) elements[j].textContent = '';
                        remaining = 0;
                        break;
                    }
                }

                if (targetTotal < totalLength) {
                    requestAnimationFrame(typeFrame);
                } else {
                    finishOwnedTyping();
                    resolve();
                }
            };

            requestAnimationFrame(typeFrame);
        });
    }

    /**
     * 텍스트를 세그먼트로 파싱: 일반 텍스트 / *지문*
     * @private
     * @returns {Array<{type: 'text'|'action', content: string}>}
     */
    _parseSegments(text) {
        const segments = [];
        // **지문** (이중 별표) 또는 *지문* (단일 별표) 모두 지문으로 인식
        const regex = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(text)) !== null) {
            if (match.index > lastIndex) {
                segments.push({ type: 'text', content: text.substring(lastIndex, match.index) });
            }
            // match[1]은 **...**에서 캡처, match[2]는 *...*에서 캡처
            segments.push({ type: 'action', content: match[1] || match[2] });
            lastIndex = regex.lastIndex;
        }

        if (lastIndex < text.length) {
            segments.push({ type: 'text', content: text.substring(lastIndex) });
        }

        return segments;
    }

    /**
     * *지문*을 별도 블록으로 파싱 (이전 대화 복원 등 일괄 렌더링용)
     * @private
     */
    _formatAction(text) {
        const escape = (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return this._parseSegments(text).map(seg => {
            const formatted = this._zetaFormatText(seg.content, seg.type === 'action');
            const escaped = escape(formatted);
            return seg.type === 'action'
                ? `<span class="gft-action">${escaped}</span>`
                : `<span class="gft-text">${escaped}</span>`;
        }).join(' ');
    }

    _updateExpression(expression, charId = this.currentCharId) {
        if (!charId) return;
        const validExprs = this.CHAR_EXPRESSIONS[charId] || [];
        if (!validExprs.includes(expression)) return;

        const img = document.getElementById('gft-char-img');
        if (img) {
            img.src = `assets/images/characters/${charId}_${expression}.png?v=${window.ASSET_VERSION || ''}`;
        }
    }

    _incrementFreeTalkCount(charId = this.currentCharId) {
        if (!charId || !this.progress) return;
        try {
            this.progress.refresh();
            const charData = this.progress.data.characters?.[charId];
            if (charData) {
                charData.freeTalkCount = (charData.freeTalkCount || 0) + 1;
                this.progress.save();
            }
        } catch (e) {
            // 무시
        }
    }

    // =========================================================================
    // 이미지 업로드 (게임 UIManager.handleImageUpload와 동일)
    // =========================================================================

    /**
     * 이미지 파일을 리사이즈 → Base64 JPEG로 변환 → 미리보기 표시
     * @param {File} file
     * @private
     */
    _setImageUploadState(isUploading, previewSrc = null) {
        const root = this.overlayEl || document;
        const previewContainer = root.querySelector('#image-preview-container');
        const previewImg = root.querySelector('#image-preview');
        const uploadBtn = root.querySelector('#upload-image-btn');
        const removeBtn = root.querySelector('#remove-image-btn');
        const label = this.lang === 'ko' ? '\uc5c5\ub85c\ub4dc \uc911' : 'Uploading';

        if (previewSrc && previewImg) {
            previewImg.src = previewSrc;
        }

        if (previewContainer) {
            if (previewSrc || isUploading || this.stagedImage) {
                previewContainer.style.display = 'inline-flex';
            }
            previewContainer.classList.toggle('is-uploading', isUploading);
            previewContainer.setAttribute('data-upload-label', label);
        }

        if (uploadBtn) {
            uploadBtn.classList.toggle('is-uploading', isUploading);
            uploadBtn.setAttribute('aria-busy', isUploading ? 'true' : 'false');
            uploadBtn.disabled = isUploading;
        }

        if (removeBtn) {
            removeBtn.disabled = isUploading;
        }
    }

    _handleImageUpload(file) {
        if (!file.type.startsWith('image/')) {
            alert(this._L(
                '이미지 파일만 업로드 가능합니다.',
                'Only image files can be uploaded.',
                'Solo se pueden subir archivos de imagen.',
                '画像ファイルのみアップロード可能です。',
                'Seuls les fichiers image peuvent être téléchargés.',
                'Nur Bilddateien können hochgeladen werden.',
                'Somente arquivos de imagem podem ser enviados.'
            ));
            return;
        }

        const uploadVersion = ++this._imageUploadVersion;
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let w = img.width, h = img.height;
                const maxSize = 1024;
                if (w > h) {
                    if (w > maxSize) { h *= maxSize / w; w = maxSize; }
                } else {
                    if (h > maxSize) { w *= maxSize / h; h = maxSize; }
                }
                canvas.width = w;
                canvas.height = h;
                canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                const base64 = canvas.toDataURL('image/jpeg', 0.8);
                this.stagedImage = base64;

                // 미리보기 표시
                this._setImageUploadState(true, base64);
                if (typeof window.uploadImageToR2 !== 'function') {
                    this._setImageUploadState(false);
                }

                // 백그라운드로 R2 업로드 후 stagedImage를 URL로 교체 (토큰 절감)
                if (typeof window.uploadImageToR2 === 'function') {
                    window.uploadImageToR2(base64, 'chat').then(url => {
                        if (this._imageUploadVersion !== uploadVersion) return;
                        this._setImageUploadState(false);
                        if (url) {
                            this.stagedImage = url;
                            if (this._imageUploadVersion === uploadVersion) {
                                this._setImageUploadState(false);
                            }
                            console.debug('[GalleryFreeTalk] R2 업로드 완료:', url);
                        }
                    }).catch(err => {
                        if (this._imageUploadVersion === uploadVersion) {
                            this._setImageUploadState(false);
                        }
                        console.warn('[GalleryFreeTalk] R2 업로드 실패, base64 폴백:', err.message);
                        window.reportCupidCaughtError?.(err, {
                            source: 'cupid-gallery-freetalk',
                            errorType: 'image_upload_fallback',
                            context: {
                                uploadContext: 'gallery-freetalk',
                                charId: this.currentCharId || '',
                                charKey: this.currentCharKey || ''
                            }
                        });
                    });
                }
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    /**
     * 스테이징된 이미지 제거
     * @private
     */
    _removeStagedImage() {
        this.stagedImage = null;
        this._imageUploadVersion++;
        this._setImageUploadState(false);
        const root = this.overlayEl || document;
        const previewContainer = root.querySelector('#image-preview-container');
        const previewImg = root.querySelector('#image-preview');
        if (previewContainer) {
            previewContainer.style.display = 'none';
            previewContainer.classList.remove('is-uploading');
            previewContainer.removeAttribute('data-upload-label');
        }
        if (previewImg) previewImg.src = '';
    }

    /**
     * 채팅 가이드 팁 HTML (게임 #chat-guide 동일)
     * @private
     */
    _getTip() {
        return this._L(
            '<b>Tip:</b> <i>*웃으며* 자기야~</i> 처럼 어조나 상황을 표현해보세요.',
            '<b>Tip:</b> Describe tone in asterisks, e.g., <i>*smiling* Hey...</i>',
            '<b>Tip:</b> Describe el tono con asteriscos, ej: <i>*sonriendo* Hola...</i>',
            '<b>Tip:</b> <i>*笑顔で* ねぇ</i> のように、雰囲気や状況を表現してみてね。',
            '<b>Tip :</b> Décrivez le ton avec des astérisques, ex : <i>*en souriant* Salut...</i>',
            '<b>Tipp:</b> Beschreibe den Ton mit Sternchen, z.B. <i>*lächelnd* Hey...</i>',
            '<b>Dica:</b> Descreva o tom com asteriscos, ex: <i>*sorrindo* Oi...</i>'
        );
    }

    // =========================================================================
    // 시스템 프롬프트 빌더
    // =========================================================================

    /**
     * 연인 모드 시스템 프롬프트 생성
     * @private
     */
    _buildSystemPrompt(charId) {
        const isEn = this.lang !== 'ko';

        // 강제 언어 룰 — 모든 비-한국어 페이지에 적용
        // 사용자가 어떤 언어로 입력하든, 이전 대화가 어떤 언어든, 무조건 페이지 언어로 답해야 함
        let langPrefix = '';
        if (this.lang === 'en') {
            langPrefix = `**[Response Language Rule]**: Reply in English. Keep the response in English even if the user or previous history contains Korean, Japanese, Spanish, French, German, or Portuguese.\n\n`;
        } else if (this.lang === 'es') {
            langPrefix = `**[Response Language Rule]**: Reply in Spanish (Español). Keep the response in Spanish even if the user or previous history contains another language.\n\n`;
        } else if (this.lang === 'ja') {
            langPrefix = `**[Response Language Rule]**: Reply in Japanese (日本語). Keep the response in Japanese even if the user or previous history contains another language.\n\n`;
        } else if (this.lang === 'fr') {
            langPrefix = `**[Response Language Rule]**: Reply in French (Français). Keep the response in French even if the user or previous history contains another language.\n\n`;
        } else if (this.lang === 'de') {
            langPrefix = `**[Response Language Rule]**: Reply in German (Deutsch). Use du consistently unless the scene explicitly establishes formal distance. Keep the response in German even if the user or previous history contains another language.\n\n`;
        } else if (this.lang === 'pt') {
            langPrefix = `**[Response Language Rule]**: Reply in Brazilian Portuguese (Português Brasileiro) with correct accents. Use você consistently unless quoted speech requires otherwise. Keep the response in Brazilian Portuguese even if the user or previous history contains another language.\n\n`;
        }

        const charName = this.CHAR_NAMES[charId]?.[this.lang] || charId;
        const location = this.CHAR_LOCATIONS[charId]?.[this.lang] || '';
        const personality = this.CHAR_PERSONALITIES[charId]?.[this.lang] || '';
        const datingPrompt = this.CHAR_DATING_PROMPTS[charId]?.[this.lang] || '';
        // 이름이 비어 있을 때 애칭을 이름처럼 주입하지 않는다.
        const playerName = String(this.progress.getPlayerName() || '').trim();

        const validExprs = this.CHAR_EXPRESSIONS[charId] || [];

        const languageQualityGuard = this._getLanguageQualityGuard();
        const nativeStylePolishGuard = this._getNativeStylePolishGuard(charId);
        const nativeAntiTranslationGuard = this._getNativeAntiTranslationGuard();
        const characterOutfitGuard = charId === 'dain'
            ? (isEn
                ? `\n**[Dain Outfit Continuity]**\n- Current post-graduation Dain is not in a student uniform. Use everyday sporty streetwear with a black arm sleeve.\n- If referencing student-day memories, Dain's iconic outfit is the ETAURS #19 volleyball jersey, not a blazer/tie/school skirt.\n- Keep school-uniform hems, school-uniform sleeves, blazers, ties, and school skirts out of current Dain descriptions.`
                : `\n**[다인 의상 연속성]**\n- 졸업 후 현재의 다인은 교복이 아니라 검정 암슬리브를 곁들인 스포티한 일상복 차림입니다.\n- 학생 시절을 회상할 때도 다인의 상징 의상은 ETAURS #19 배구 유니폼이지 블레이저/넥타이/교복 치마가 아닙니다.\n- 현재 다인 묘사에는 '교복 자락', '교복 소매', '블레이저', '넥타이', '교복 치마'를 넣지 마세요.`)
            : '';

        const compactGalleryGuidance = (isEn ? [
            datingPrompt && `Relationship: ${datingPrompt}`,
            location && `Location baseline: ${location}`
        ] : [
            datingPrompt && `연인 관계: ${datingPrompt}`,
            location && `기본 장소: ${location}`
        ]).filter(Boolean).join("\n");
        const compactGalleryExpressions = validExprs.join(', ') || 'normal';
        const compactGalleryState = isEn
            ? `State: user=${playerName || 'the user'}`
            : `현재 상태: 사용자=${playerName || '상대'}`;
        const thirdPersonAdultCameraRule = buildGalleryThirdPersonAdultCameraRule(this.lang);
        if (isEn) {
            return `${langPrefix}${languageQualityGuard}${nativeStylePolishGuard}${nativeAntiTranslationGuard}Cupid gallery free-talk: ${charName} with their post-graduation adult partner; not a current school scene.
Character: ${personality}
${charName} is in-scene, not assistant/narrator.
${characterOutfitGuard}
Scene: Keep this 1:1; other people remain offstage except through ${charName}'s reaction to a mention. Treat the user's latest explicit in-world facts and completed outcomes as current, without recap or reversal; only the character-specific canon locks above remain exceptions. Stay inside ${charName} and do not write the user's next action, dialogue, choice, or hidden thought. Let intimacy, distance, refusal, teasing, and initiative arise from this character and the immediate moment rather than a generic lover pattern. Use natural present-day speech.
${thirdPersonAdultCameraRule}
${compactGalleryGuidance}
JSON only: {"segments":[{"type":"dialogue","text":"spoken line without asterisks"}],"expression":"normal"}
Types: narration/dialogue. segments must contain at least one item with non-empty text. A dialogue-only reply is normal; add narration only when a visible action or scene change matters. Never repeat the same sentence or segment twice in one reply, and do not reuse a recent reply's opening verbatim. Expressions: ${compactGalleryExpressions}. No single text field.
===CACHE_BOUNDARY===
${compactGalleryState}`;
        }
        return `${languageQualityGuard}${nativeStylePolishGuard}${nativeAntiTranslationGuard}한국어로만 답하세요. 졸업 후 독립한 성인 연인 두 사람만 등장하는 갤러리 프리토킹입니다. 당신은 ${charName}이고, 상대는 성인 연인입니다. 현재의 학교 장면이 아닙니다.
캐릭터: ${personality}
현재 장면의 인물은 ${charName}입니다. 도우미나 해설자처럼 말하지 마세요.
${characterOutfitGuard}
장면: 두 사람만 장면에 두고, 다른 인물은 언급을 들은 ${charName}의 반응으로만 남깁니다. 사용자가 방금 확정해 쓴 극중 사실과 끝난 사건은 현재 장면으로 받고, 복창하거나 되돌리지 말고 ${charName}의 반응으로 이어갑니다. 위의 캐릭터별 사실 잠금만 예외입니다. 사용자의 다음 행동·대사·선택·속마음은 대신 쓰지 마세요. 친밀감, 거리, 거절, 장난과 주도성은 공용 연인 공식이 아니라 이 인물과 바로 앞 순간에서 나옵니다. 자연스러운 현재 한국어를 쓰세요.
${thirdPersonAdultCameraRule}
${compactGalleryGuidance}
JSON만 출력: {"segments":[{"type":"dialogue","text":"대사, 별표 없음"}],"expression":"normal"}
허용 type: narration, dialogue. segments에는 빈 문자열이 아닌 항목을 하나 이상 넣습니다. 대사만으로 자연스러우면 dialogue 하나면 충분하며, 눈에 보이는 행동이나 장면 변화가 있을 때만 narration을 더합니다. 한 답변 안에서 같은 문장이나 segment를 두 번 쓰지 않고 최근 답변의 도입 문장도 그대로 재사용하지 않습니다. 허용 expression: ${compactGalleryExpressions}. text 단일 필드는 쓰지 마세요.
===CACHE_BOUNDARY===
${compactGalleryState}`;
    }

    // =========================================================================

    _sanitizeDainOutfitHistory(messages, charId = this.currentCharId) {
        if (charId !== 'dain' || !Array.isArray(messages)) return messages;

        const replacements = [
            [/교복 자락/g, '스웨트셔츠 자락'],
            [/교복 소매/g, '검정 암슬리브'],
            [/교복 치마/g, '트레이닝 팬츠'],
            [/교복/g, '스포티한 일상복'],
            [/school-uniform hem/gi, 'sweatshirt hem'],
            [/school-uniform sleeve/gi, 'black arm sleeve'],
            [/school skirt/gi, 'track pants'],
            [/school uniform/gi, 'sporty streetwear'],
            [/student uniform/gi, 'sporty streetwear']
        ];

        return messages.map((msg) => {
            if (!msg || msg.role !== 'assistant' || typeof msg.content !== 'string') return msg;

            let content = msg.content;
            replacements.forEach(([pattern, replacement]) => {
                content = content.replace(pattern, replacement);
            });

            return content === msg.content ? msg : { ...msg, content };
        });
    }

    _buildWindowedHistory(history = this.chatHistory) {
        if (!Array.isArray(history) || history.length === 0) return [];

        const sysMsg = history[0];
        if (!sysMsg || sysMsg.role !== 'system') {
            return history.slice(-this.HISTORY_WINDOW);
        }

        const rest = history.slice(1);
        if (rest.length <= this.HISTORY_WINDOW) return history;

        return [sysMsg, ...rest.slice(-this.HISTORY_WINDOW)];
    }

    _loadMemory(charId) {
        try {
            const saved = localStorage.getItem(this.MEMORY_KEY);
            if (saved) {
                const all = JSON.parse(saved);
                this.chatHistory = all[charId] || [];
            } else {
                this.chatHistory = [];
            }
        } catch (e) {
            this.chatHistory = [];
            window.reportCupidCaughtError?.(e, {
                source: 'cupid-gallery-freetalk',
                errorType: 'gallery_freetalk_memory_load_failed',
                context: { charId }
            });
        }
    }

    _saveMemory(charId, history = this.chatHistory) {
        try {
            const saved = localStorage.getItem(this.MEMORY_KEY);
            const all = saved ? JSON.parse(saved) : {};

            // system 메시지 제외, 최근 20개만 저장
            const chatOnly = (Array.isArray(history) ? history : []).filter(m => m.role !== 'system');
            all[charId] = chatOnly.slice(-20);

            localStorage.setItem(this.MEMORY_KEY, JSON.stringify(all));
        } catch (e) {
            console.error('[GalleryFreeTalk] 메모리 저장 실패:', e);
            window.reportCupidCaughtError?.(e, {
                source: 'cupid-gallery-freetalk',
                errorType: 'gallery_freetalk_memory_save_failed',
                context: { charId, historyLength: this.chatHistory.length }
            });
        }
    }
}

// window 전역 노출
window.GalleryFreeTalk = GalleryFreeTalk;
