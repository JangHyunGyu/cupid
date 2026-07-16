// ============================================================================================
// FreeTalkSystem.js - AI 자유 대화 시스템 모듈
// ============================================================================================
// 📌 이 파일은 main.js에서 FreeTalkSystem 클래스를 분리한 모듈입니다.
//    AI API를 호출하여 캐릭터와 자유롭게 대화할 수 있는 시스템을 담당합니다.
//
// 📦 의존성:
//    - config.js → CHAR_NAME_MAP, DEFAULT_MAX_FREE_TALK_TURNS, SEND_ICON, API_ENDPOINT, getAssetUrl
//    - prompts.js → FLAG_MEMORIES, getPromptData, buildSystemPrompt, CHARACTER_EXPRESSIONS
//
// 🌐 window 노출:
//    - window.FreeTalkSystem
// ============================================================================================

// ============================================================================================
// 🤖 FreeTalkSystem 클래스 - AI 자유 대화 시스템
// ============================================================================================
// 📌 AI API를 호출하여 캐릭터와 자유롭게 대화할 수 있는 시스템입니다.
//    시나리오에서 type: 'free_talk'인 씬에서 활성화됩니다.
//    대화 내용에 따라 호감도가 실시간으로 변화합니다.

/**
 * 자유 대화(프리토킹) 시스템 클래스
 *
 * ▶ 작동 방식:
 *   1. 시나리오에서 free_talk 씬 진입
 *   2. 캐릭터 성격, 현재 상황, 대화 기록 등을 담은 시스템 프롬프트 생성
 *   3. 플레이어 입력을 받아 AI API로 전송
 *   4. AI 응답에서 [EXPRESSION:표정], [STATS:affinity +10] 같은 태그 처리
 *   5. 정해진 턴 수만큼 대화 후 종료
 *
 * ▶ AI 응답 특수 태그:
 *   - [EXPRESSION: happy] → 캐릭터 표정 이미지 변경
 *   - [STATS: affinity +10] → 호감도 변경
 */
function normalizeFreeTalkPromptBlockForCache(content) {
    if (!content) return '';
    return String(content)
        .replace(/\r\n?/g, '\n')
        .replace(/[ \t]+\n/g, '\n')
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

const FREE_TALK_CACHE_BOUNDARY_MARKER = '===CACHE_BOUNDARY===';
const FREE_TALK_AI_FAILOVER_HTTP_STATUSES = new Set([408, 422, 425, 429]);

function shouldFailOverFreeTalkAiResponse(response) {
    return !!response && (
        FREE_TALK_AI_FAILOVER_HTTP_STATUSES.has(response.status)
        || response.status >= 500
    );
}

function appendFreeTalkDynamicContext(content, addition) {
    if (!addition) return content || '';
    const base = normalizeFreeTalkPromptBlockForCache(content || '');
    const dynamic = normalizeFreeTalkPromptBlockForCache(addition);
    if (!dynamic) return base;
    if (base.includes(FREE_TALK_CACHE_BOUNDARY_MARKER)) {
        return `${base}\n${dynamic}`;
    }
    return `${base}\n${FREE_TALK_CACHE_BOUNDARY_MARKER}\n${dynamic}`;
}

function getFreeTalkStablePromptHash(content) {
    const prompt = normalizeFreeTalkPromptBlockForCache(content || '');
    const markerIndex = prompt.indexOf(FREE_TALK_CACHE_BOUNDARY_MARKER);
    const stable = markerIndex >= 0 ? prompt.slice(0, markerIndex).trim() : prompt;
    let hash = 2166136261;
    for (let i = 0; i < stable.length; i++) {
        hash ^= stable.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(36);
}

function getFreeTalkStablePromptFingerprint(content) {
    const prompt = normalizeFreeTalkPromptBlockForCache(content || '');
    const markerIndex = prompt.indexOf(FREE_TALK_CACHE_BOUNDARY_MARKER);
    const stable = markerIndex >= 0 ? prompt.slice(0, markerIndex).trim() : prompt;
    return `${stable.length.toString(36)}_${getFreeTalkStablePromptHash(stable)}`;
}

function encodeFreeTalkCacheKeyPart(value) {
    const text = String(value ?? '');
    try {
        return encodeURIComponent(text);
    } catch {
        return getFreeTalkStablePromptHash(text);
    }
}

function cupidRecentPhraseMatches(pattern, text) {
    pattern.lastIndex = 0;
    return pattern.test(text || '');
}

function buildCupidRecentExpressionRepetitionGuard(messages = [], lang = 'ko') {
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
            cupidRecentPhraseMatches(item.pattern, recentJoined) &&
            !cupidRecentPhraseMatches(item.pattern, latestUserText)
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
            count: assistantTexts.reduce((count, text) => count + (cupidRecentPhraseMatches(item.pattern, text) ? 1 : 0), 0)
        }))
        .filter(item =>
            item.count >= 2 &&
            !cupidRecentPhraseMatches(item.pattern, latestUserText)
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

function buildCupidAffinityIntimacyProgressionPatch(lang = 'ko', affinity = 0, isDating = false) {
    const score = Number(affinity);
    if (!Number.isFinite(score)) return '';

    const tier = score < 0
        ? 'negative'
        : score < 30
            ? 'low'
            : score < 60
                ? 'warming'
                : score < 80
                    ? 'close'
                    : 'high';

    const isKo = String(lang || 'ko').toLowerCase().startsWith('ko');
    if (isKo) {
        const datingNote = isDating
            ? '사귀는 사이지만 지금의 거리감은 현재 호감도를 따릅니다.'
            : '사귀는 사이는 아니며 지금의 거리감은 현재 호감도를 따릅니다.';
        const tierText = {
            negative: '불편함이나 반감이 자연스럽고, 신체적 접근에는 선을 긋거나 거리를 둡니다. affinity를 올리지 말고 유지하거나 낮추세요.',
            low: '아직 중립에 가까워 친밀한 접근을 선뜻 받아들이지 않습니다.',
            warming: '호기심과 가벼운 설렘은 가능하지만 깊은 친밀감으로 건너뛰지 않습니다.',
            close: '친밀한 접근을 더 따뜻하게 받아들일 수 있으나 성격과 상황의 속도를 지킵니다.',
            high: '원한다면 따뜻하고 적극적으로 반응하거나 먼저 다가갈 수 있습니다.'
        }[tier];
        return `\n\n[현재 관계 거리]\n${datingNote} ${tierText} 호감도는 현재 의사나 동의를 대신하지 않습니다. 사용자가 이미 끝냈다고 쓴 사건은 지우지 말고, 이 거리감에 맞는 캐릭터 반응으로 이어갑니다.`;
    }

    const datingNote = isDating
        ? 'You are dating, while the present distance still follows current affinity.'
        : 'You are not dating; the present distance follows current affinity.';
    const tierText = {
        negative: 'Discomfort or aversion is natural; physical approaches meet a boundary or distance, with affinity held or lowered.',
        low: 'The relationship is near neutral, so intimate approaches are not readily welcomed.',
        warming: 'Curiosity and mild attraction are possible without jumping to deep intimacy.',
        close: 'Intimate approaches can be received more warmly at the character and scene\'s pace.',
        high: 'The character may respond warmly, actively, or take initiative when it fits.'
    }[tier];
    return `\n\n[Current relationship distance]\n${datingNote} ${tierText} Affinity never substitutes for present choice or consent. Keep completed user-stated events and continue with a character response at this distance.`;
}

function cupidSanitizeLatestUserText(text) {
    return String(text || '')
        .replace(/data:image\/[a-zA-Z0-9.+-]+;base64,[A-Za-z0-9+/=\s]+/g, ' ')
        .replace(/https?:\/\/\S+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function cupidTruncateLatestUserText(text, maxChars = 420) {
    const cleaned = cupidSanitizeLatestUserText(text);
    if (cleaned.length <= maxChars) return cleaned;
    return `${cleaned.slice(0, maxChars)}...`;
}

function cupidFindLatestUserText(messages = [], fallbackText = '') {
    if (Array.isArray(messages)) {
        for (let i = messages.length - 1; i >= 0; i--) {
            const msg = messages[i];
            if (!msg || msg.role !== 'user') continue;
            const text = String(msg.content || '').trim();
            if (text) return text;
        }
    }
    return String(fallbackText || '').trim();
}

function buildCupidLatestUserCanonBlock(messages = [], lang = 'ko', fallbackText = '') {
    const latestText = cupidFindLatestUserText(messages, fallbackText);
    if (!latestText) return '';

    const excerpt = cupidTruncateLatestUserText(latestText);
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

window.buildCupidLatestUserCanonBlock = buildCupidLatestUserCanonBlock;

class FreeTalkSystem {
    /**
     * @param {StateManager} stateManager - 게임 상태 관리자
     * @param {GalleryManager} galleryManager - 갤러리 관리자
     * @param {UIManager} uiManager - UI 관리자
     * @param {DialogueSystem} dialogueSystem - 대화 시스템
     */
    constructor(stateManager, galleryManager, uiManager, dialogueSystem) {
        this.stateManager = stateManager;
        this.galleryManager = galleryManager;
        this.uiManager = uiManager;
        this.dialogueSystem = dialogueSystem;

        /** 현재 프리토킹 진행 중 여부 */
        this.isFreeTalking = false;

        /** 현재 채팅 처리 중 여부 (중복 호출 방지) */
        this.isProcessingChat = false;

        /** 현재까지 진행한 턴 수 */
        this.freeTalkTurns = 0;

        /** 이 대화의 최대 턴 수 */
        this.currentMaxTurns = DEFAULT_MAX_FREE_TALK_TURNS;

        /**
         * 대화 기록 배열
         * - OpenAI API 형식: [{role: "system", content: "..."}, {role: "user", content: "..."}, ...]
         */
        this.freeTalkHistory = [];

        /** 슬라이딩 윈도우: 시스템 메시지 외 최근 N개만 fetch에 전송 (토큰 폭증 방지) */
        this.HISTORY_WINDOW = 10;

        /** 현재 프리토킹 씬의 ID */
        this.currentSceneId = null;

        /** 장면 전환 뒤 늦게 도착한 응답을 무효화하는 단조 증가 세대값 */
        this._freeTalkEpoch = 0;
        this._activeRequestOwner = null;
        this._activeRequestContext = null;
        this._activeChatTurnId = null;
        this.currentCharKey = null;

        /** 현재 씬의 통신 매체 (대면 vs 원격) — 캐시 키 분기용 */
        this._isRemote = false;

        /** 캐릭터 이름 매핑 (공통 상수 참조) */
        this.charNameMap = CHAR_NAME_MAP;
    }

    _getThinkingText() {
        const lang = (window.GAME_LANG || document.documentElement.lang || 'ko').toLowerCase();
        const messages = {
            ko: '캐릭터가 할 말을 생각 중',
            en: 'Character is thinking of what to say',
            es: 'El personaje está pensando qué decir',
            ja: 'キャラクターが返事を考え中',
            fr: 'Le personnage réfléchit à quoi dire',
            de: 'Der Charakter denkt über eine Antwort nach',
            pt: 'A personagem está pensando no que dizer'
        };
        return messages[lang] || messages[lang.slice(0, 2)] || messages.ko;
    }

    _showThinkingMessage(characterName) {
        const messageEl = this.uiManager?.messageEl;
        if (!messageEl) return;

        this.uiManager.updateNameTag?.(characterName);
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
        this.uiManager?.messageEl?.querySelectorAll('.ai-thinking-message').forEach(el => el.remove());
    }

    /**
     * 게임 내 플래그 기반으로 캐릭터의 "기억"을 생성
     *
     * ▶ FLAG_MEMORIES란?
     *   prompts.js에 정의된 배열로, 게임 이벤트와 그에 대한 기억을 매핑
     *   예: { flag: "sharedLunch", char: "Seoyeon", ko: "{name}과 점심을 함께 먹었다", en: "Had lunch with {name}" }
     *
     * @param {string} charName - 대화 상대 캐릭터
     * @param {boolean} isEn - 영어 버전 여부
     * @returns {string} AI에게 전달할 기억 텍스트
     */
    getGameContext(charName, lang) {
        // lang 파라미터가 boolean(이전 isEn)으로 전달되는 경우 하위 호환
        if (lang === true) lang = 'en';
        else if (lang === false) lang = 'ko';
        if (!lang) lang = window.GAME_LANG || document.documentElement.lang || 'ko';

        // FLAG_MEMORIES가 없으면 빈 문자열 반환
        if (!window.FLAG_MEMORIES) return "";

        // 이 캐릭터와 관련된 기억 중 플래그가 true인 것만 필터링
        const memories = FLAG_MEMORIES.filter(m => {
            // 캐릭터 매칭 (한/영 모두 체크)
            // 다국어 지원: 한국어↔영어 모드 전환 시에도 플래그 기억이 정상 로드되도록
            // 캐릭터 이름을 양방향으로 매칭
            const charMatch = m.char === charName ||
                (charName === "서연" && m.char === "Seoyeon") ||
                (charName === "Seoyeon" && m.char === "서연") ||
                (charName === "유나" && m.char === "Yuna") ||
                (charName === "Yuna" && m.char === "유나") ||
                (charName === "다인" && m.char === "Dain") ||
                (charName === "Dain" && m.char === "다인") ||
                (charName === "담임선생님" && m.char === "Teacher") ||
                (charName === "Teacher" && m.char === "담임선생님") ||
                (charName === "담임선생님" && m.char === "Homeroom Teacher") ||
                (charName === "Homeroom Teacher" && m.char === "담임선생님") ||
                (charName === "보건선생님" && m.char === "Nurse") ||
                (charName === "Nurse" && m.char === "보건선생님") ||
                (charName === "보건선생님" && (m.char === "School Nurse" || m.char === "Health Teacher")) ||
                ((charName === "School Nurse" || charName === "Health Teacher") && m.char === "보건선생님") ||
                // Spanish name matching
                (charName === "Profesora" && (m.char === "담임선생님" || m.char === "Teacher")) ||
                (charName === "Enfermera" && (m.char === "보건선생님" || m.char === "Nurse")) ||
                // Japanese name matching
                (charName === "担任先生" && (m.char === "담임선생님" || m.char === "Teacher")) ||
                (charName === "保健先生" && (m.char === "보건선생님" || m.char === "Nurse")) ||
                // French name matching
                (charName === "Professeur Principal" && (m.char === "담임선생님" || m.char === "Teacher")) ||
                (charName === "Infirmière Scolaire" && (m.char === "보건선생님" || m.char === "Nurse")) ||
                // German name matching
                (charName === "Lehrerin" && (m.char === "담임선생님" || m.char === "Teacher")) ||
                (charName === "Schulkrankenschwester" && (m.char === "보건선생님" || m.char === "Nurse")) ||
                // Portuguese name matching
                (charName === "Professora" && (m.char === "담임선생님" || m.char === "Teacher")) ||
                (charName === "Enfermeira" && (m.char === "보건선생님" || m.char === "Nurse"));
            // 플래그가 true인 기억만 포함
            return charMatch && this.stateManager.getFlag(m.flag);
        });

        // 기억이 없으면 빈 문자열
        if (memories.length === 0) return "";

        // 기억들을 리스트 형태로 포맷팅
        const header = { es: "\n\n[Eventos y Recuerdos Recientes]:\n", ja: "\n\n[最近の出来事と記憶]:\n", en: "\n\n[Recent Events & Memories]:\n", fr: "\n\n[Événements et Souvenirs Récents] :\n", de: "\n\n[Aktuelle Ereignisse & Erinnerungen]:\n", pt: "\n\n[Eventos e Memórias Recentes]:\n" }[lang] || "\n\n[최근 사건과 기억]\n";
        return header + memories.map(m => {
            let text = { es: m.es, ja: m.ja, en: m.en, fr: m.fr, de: m.de, pt: m.pt }[lang] || m.ko;
            if (!text) text = m.en || m.ko;
            return `- ${text.replace(/{name}/g, this.stateManager.playerName)}`;
        }).join("\n");
    }

    /**
     * 다른 캐릭터들의 정보 생성 (질투/관계 인식용)
     *
     * ▶ AI가 다른 캐릭터들의 존재와 플레이어와의 관계를 인지하게 함
     *   다른 캐릭터의 호감도가 높으면 질투 반응을 보일 수 있음
     *
     * @param {string} currentCharName - 현재 대화 중인 캐릭터
     * @param {boolean} isEn - 영어 버전 여부
     * @returns {string} AI에게 전달할 소셜 컨텍스트
     */
    /**
     * 프리토킹 시작
     *
     * ▶ 처리 순서:
     *   1. 기존 대화 기록 불러오기
     *   2. 현재 장소, 캐릭터 상태 등 컨텍스트 수집
     *   3. 시스템 프롬프트 생성 (캐릭터 성격 + 상황 + 지침)
     *   4. 채팅 UI 표시
     *   5. 초기 대사 출력 (있는 경우)
     *
     * @param {Object} scene - 씬 데이터
     * @param {string} sceneId - 씬 ID
     */
    async startFreeTalk(scene, sceneId) {
        // 이미 프리토킹 중이면 무시 (중복 호출 방지)
        if (this.isFreeTalking) return;

        this._invalidateFreeTalkContext();
        const startEpoch = this._freeTalkEpoch;
        this.isFreeTalking = true;
        this.isProcessingChat = false;
        this.freeTalkTurns = 0;
        this.currentMaxTurns = scene.maxTurns || DEFAULT_MAX_FREE_TALK_TURNS;
        this.currentSceneId = sceneId;

        const lang = window.GAME_LANG || document.documentElement.lang || 'ko';
        const isEn = lang === 'en';
        const isEs = lang === 'es';
        const isJa = lang === 'ja';

        const charKey = this.charNameMap[scene.name] || scene.name;
        this.currentCharKey = charKey;

        // 게임 내 이벤트 기억 수집
        const gameContext = this.getGameContext(charKey, lang);

        // 이전 대화 기록 불러오기 (표시명이 달라도 같은 캐릭터로 이어짐)
        const canonicalMemory = this.stateManager.getChatMemory(charKey);
        const legacyMemory = charKey !== scene.name ? this.stateManager.getChatMemory(scene.name) : [];
        this.freeTalkHistory = [...(canonicalMemory.length ? canonicalMemory : legacyMemory)];

        // 🔍 현재 배경 이미지로 장소 유추
        const locNames = {
            default:        { es: "Escuela", ja: "学校", en: "School", fr: "École", de: "Schule", pt: "Escola", ko: "학교" },
            room_school:    { es: "Aula", ja: "教室", en: "Classroom", fr: "Salle de classe", de: "Klassenzimmer", pt: "Sala de aula", ko: "교실" },
            school_hallway: { es: "Pasillo", ja: "廊下", en: "Hallway", fr: "Couloir", de: "Flur", pt: "Corredor", ko: "복도" },
            'school.png':   { es: "Puerta de la escuela", ja: "校門前", en: "School Gate", fr: "Portail de l'école", de: "Schultor", pt: "Portão da escola", ko: "교문 앞" },
            top_school:     { es: "Azotea", ja: "屋上", en: "Rooftop", fr: "Toit", de: "Dach", pt: "Terraço", ko: "학교 옥상" },
            playground:     { es: "Patio", ja: "運動場", en: "Playground", fr: "Cour de récréation", de: "Spielplatz", pt: "Pátio", ko: "운동장" },
            gym:            { es: "Gimnasio", ja: "体育館", en: "Gym", fr: "Gymnase", de: "Turnhalle", pt: "Ginásio", ko: "체육관" },
            nurse_room:     { es: "Enfermería", ja: "保健室", en: "Nurse's Office", fr: "Infirmerie", de: "Krankenzimmer", pt: "Enfermaria", ko: "보건실" },
            library:        { es: "Biblioteca", ja: "図書館", en: "Library", fr: "Bibliothèque", de: "Bibliothek", pt: "Biblioteca", ko: "도서관" },
            arcade:         { es: "Sala de juegos", ja: "ゲームセンター", en: "Arcade", fr: "Salle d'arcade", de: "Spielhalle", pt: "Fliperama", ko: "오락실" },
            bookstore:      { es: "Librería", ja: "書店", en: "Bookstore", fr: "Librairie", de: "Buchhandlung", pt: "Livraria", ko: "서점" },
            home_room:      { es: "Mi habitación", ja: "自分の部屋", en: "My Room", fr: "Ma chambre", de: "Mein Zimmer", pt: "Meu quarto", ko: "주인공의 방" }
        };
        let locationName = locNames.default[lang] || locNames.default.ko;
        const bgUrl = this.uiManager.bgLayer.style.backgroundImage;
        const locKeys = ['room_school', 'school_hallway', 'school.png', 'top_school', 'playground', 'gym', 'nurse_room', 'library', 'arcade', 'bookstore', 'home_room'];
        for (const key of locKeys) {
            if (bgUrl.includes(key)) {
                locationName = locNames[key][lang] || locNames[key].ko;
                break;
            }
        }

        // 캐릭터 정보 수집
        this.freeTalkHistory = this._sanitizeDainOutfitHistory(this.freeTalkHistory, charKey);
        this.freeTalkHistory = this._sanitizeVisibleArtifactsHistory(this.freeTalkHistory);
        const knowsName = this.stateManager.getFlag(`knows_name_${charKey.toLowerCase()}`);
        const charStats = this.stateManager.stats[charKey] || { affinity: 0 };

        // 🔧 프롬프트 데이터 가져오기 (prompts.js에서)
        const promptData = window.getPromptData ? window.getPromptData(lang, this.stateManager.playerName) : {};

        // 연인 관계 가이드라인
        let datingGuideline = "";
        const isDatingCurrent = this.stateManager.getFlag(`isDating_${charKey}`) || this.stateManager.getFlag(`isDating_${scene.name}`);

        if (isDatingCurrent) {
            datingGuideline = ({
                ko: `\n- 현재 사용자와 사귀는 사이입니다. 장면과 캐릭터 말투에 어울릴 때만 애칭을 쓰고, 그 밖에는 가까운 호칭을 자연스럽게 고르세요.`,
                en: `\n- Dating context: You are currently dating the user. Keep the relationship intimate, but use pet names only when the scene and character voice naturally call for them.`,
                es: `\n- Contexto de pareja: Actualmente estás saliendo con el usuario. Mantén la cercanía, pero usa apodos cariñosos solo cuando la escena y la voz del personaje lo pidan.`,
                ja: `\n- 恋人関係の文脈: あなたは現在ユーザーと付き合っています。親密さは保ちつつ、愛称は場面とキャラの声に自然に合う時だけ使ってください。`,
                fr: `\n- Contexte amoureux : Vous sortez actuellement avec l'utilisateur. Gardez l'intimité, mais utilisez les surnoms tendres seulement quand la scène et la voix du personnage les appellent.`,
                de: `\n- Beziehungskontext: Du bist mit dem Nutzer zusammen. Bewahre die Vertrautheit, aber nutze Kosenamen nur, wenn Szene und Charakterstimme wirklich dazu passen.`,
                pt: `\n- Contexto de namoro: Você está atualmente namorando o usuário. Mantenha a intimidade, mas use apelidos carinhosos só quando a cena e a voz da personagem pedirem.`
            }[lang] || `\n- Dating context: You are currently dating the user. Keep the relationship intimate, but use pet names only when the scene and character voice naturally call for them.`);

        }

        // 통신 매체 판단
        const remoteKeywords = ["연락", "메시지", "전화", "톡", "문자", "Contact", "Message", "Call", "Text", "전송"];
        const isRemote = remoteKeywords.some(k =>
            (scene.context && scene.context.includes(k)) ||
            (scene.buttonText && scene.buttonText.includes(k)) ||
            (scene.text && scene.text.includes(k))
        );
        this._isRemote = isRemote;

        const mediumInstruction = isRemote
            ? ({ es: "\n- MEDIO: Conversación por TELÉFONO o MENSAJES.", ja: "\n- メディア: 電話またはメッセージで会話中。", en: "\n- MEDIUM: Communicating via PHONE/MESSENGER.", fr: "\n- MOYEN : Échange par TÉLÉPHONE ou MESSAGERIE.", de: "\n- MEDIUM: Gespräch per TELEFON oder CHAT.", pt: "\n- MEIO: Conversa por TELEFONE ou MENSAGENS." }[lang] || "\n- 현재 전화나 메시지로 연락하고 있습니다.")
            : ({ es: "\n- MEDIO: Conversación CARA A CARA.", ja: "\n- メディア: 対面で会話中。", en: "\n- MEDIUM: Talking FACE-TO-FACE.", fr: "\n- MOYEN : Conversation EN FACE À FACE.", de: "\n- MEDIUM: Persönliches Gespräch VOR ORT.", pt: "\n- MEIO: Conversa PRESENCIAL." }[lang] || "\n- 현재 서로 마주 보고 이야기하고 있습니다.");

        // 시스템 프롬프트 생성
        const rawSystemPrompt = window.buildSystemPrompt ? window.buildSystemPrompt({
            isEn,
            lang,
            sceneName: charKey,
            displayName: scene.name,
            locationName,
            context: scene.context || ({ es: "La escena continúa a partir de la última intervención del protagonista.", ja: "主人公の直前の発言や行動から場面を続けています。", en: "Continuing the scene from the protagonist's latest line or action.", fr: "La scène reprend après la dernière parole ou action du protagoniste.", de: "Die Szene wird nach der letzten Äußerung oder Handlung des Protagonisten fortgesetzt.", pt: "A cena continua a partir da última fala ou ação do protagonista." }[lang] || "주인공이 방금 한 말이나 행동에서 장면을 이어갑니다."),
            affinity: charStats.affinity,
            extraGuideline: [scene.personality, scene.extra_guideline].filter(Boolean).join("\n"),
            gameContext,
            mediumInstruction,
            isRemote,
            promptData,
            playerName: this.stateManager.playerName,
            knowsName,
            datingGuideline
        }) : "";
        const systemPrompt = normalizeFreeTalkPromptBlockForCache(rawSystemPrompt);

        this.freeTalkHistory = [{ role: "system", content: systemPrompt }, ...this.freeTalkHistory.filter(m => m.role !== "system")];
        const startHistory = this.freeTalkHistory;

        // UI 설정
        this.uiManager.chatContainer.style.display = 'block';

        const chatGuideEl = document.getElementById('chat-guide');
        if (chatGuideEl) {
            const tips = {
                es: isRemote
                    ? "<b>Tip:</b> Describe el tono con asteriscos, ej: <i>*sonriendo* Hola...</i>"
                    : "<b>Tip:</b> Describe la escena o acciones, ej: <i>*toma la mano* Vamos.</i>",
                ja: isRemote
                    ? "<b>Tip:</b> <i>*笑顔で* ねぇ</i> のように、雰囲気や状況を表現してみてね。"
                    : "<b>Tip:</b> <i>*手を握って* 行こう。</i> のように話してみてね。",
                en: isRemote
                    ? "<b>Tip:</b> Describe tone in asterisks, e.g., <i>*smiling* Hey...</i>"
                    : "<b>Tip:</b> Describe scene or actions, e.g., <i>*holds hand* Let's go.</i>",
                fr: isRemote
                    ? "<b>Tip :</b> Décrivez le ton avec des astérisques, ex : <i>*en souriant* Salut...</i>"
                    : "<b>Tip :</b> Décrivez la scène ou les actions, ex : <i>*prend la main* Allons-y.</i>",
                pt: isRemote
                    ? "<b>Dica:</b> Descreva o tom com asteriscos, ex: <i>*sorrindo* Oi...</i>"
                    : "<b>Dica:</b> Descreva a cena ou ações, ex: <i>*segura a mão* Vamos.</i>"
            };
            chatGuideEl.innerHTML = tips[lang] || (isRemote
                ? "<b>Tip:</b> <i>*웃으며* 자?</i> 처럼 어조나 상황을 표현해보세요."
                : "<b>Tip:</b> <i>*손을 잡으며* 같이 가자.</i> 처럼 말해보세요.");
        }

        // ─────────────────────────────────────────────────────────────
        // 전송 버튼 스타일 설정
        // ─────────────────────────────────────────────────────────────
        // 기본 버튼 텍스트 목록 (이 텍스트들은 아이콘 버튼으로 표시)
        const iconButtons = ["말하기", "전송", "전송하기", "Send"];

        if (scene.buttonText && !iconButtons.includes(scene.buttonText)) {
            // 커스텀 버튼 텍스트가 있는 경우 (예: "고백하기", "대답하기")
            // → 텍스트 버튼으로 표시 (직사각형, 가변 너비)
            this.uiManager.chatSendBtn.textContent = scene.buttonText;
            this.uiManager.chatSendBtn.style.cssText = 'border-radius:8px;width:auto;padding:0 20px;';
        } else {
            // 기본 버튼인 경우
            // → 아이콘 버튼으로 표시 (원형, 고정 크기)
            this.uiManager.chatSendBtn.innerHTML = SEND_ICON;
            this.uiManager.chatSendBtn.style.cssText = 'border-radius:50%;width:45px;padding:0;';
        }

        // ─────────────────────────────────────────────────────────────
        // UI 상태 초기화
        // ─────────────────────────────────────────────────────────────
        // 남은 대화 턴 수 표시 (요소가 있는 경우에만)
        if (this.uiManager.turnCountEl) this.uiManager.turnCountEl.textContent = this.currentMaxTurns;

        // 스킵 버튼 활성화 (대화 중단 가능하도록)
        if (this.uiManager.chatSkipBtn) this.uiManager.chatSkipBtn.disabled = false;

        // 채팅 입력창 활성화 (이전 세션에서 disabled 상태로 남아있을 수 있음)
        if (this.uiManager.chatInput) {
            this.uiManager.chatInput.disabled = false;
            this.uiManager.chatInput.readOnly = false;
        }
        if (this.uiManager.chatSendBtn) this.uiManager.chatSendBtn.disabled = false;

        // ─────────────────────────────────────────────────────────────
        // 초기 대사 표시 (씬에 text가 있는 경우)
        // ─────────────────────────────────────────────────────────────
        // 캐릭터가 먼저 말을 거는 상황 (예: "안녕! 무슨 일이야?")
        // → 타이핑 효과로 표시하고, AI 대화 기록에도 추가
        if (scene.text) {
            await this.dialogueSystem.typeText(scene.text, scene.name, null, () => (
                this._freeTalkEpoch === startEpoch
                && this.currentSceneId === sceneId
                && this.currentCharKey === charKey
                && this.freeTalkHistory === startHistory
                && this.isFreeTalking
            ));
            if (this._freeTalkEpoch !== startEpoch
                || this.currentSceneId !== sceneId
                || this.currentCharKey !== charKey
                || this.freeTalkHistory !== startHistory
                || !this.isFreeTalking) {
                return;
            }
            startHistory.push({ role: "assistant", content: scene.text });
        }

        // 초기 대사 출력 후 입력창에 포커스 (모바일 키보드 활성화)
        if (this.uiManager.chatInput && (!window.isCupidDesktopPointer || window.isCupidDesktopPointer())) {
            this.uiManager.chatInput.focus();
        }
    }

    /** 프리토킹 스킵 */
    async skipFreeTalk() {
        if (!this.isFreeTalking) return;

        const skipEpoch = this._freeTalkEpoch;
        const skipSceneId = this.currentSceneId;
        const skipHistory = this.freeTalkHistory;

        const lang = window.GAME_LANG || document.documentElement.lang || 'ko';
        const confirmMsg = { es: "¿Cerrar esta inserción de escena y continuar?", ja: "この場面挿入を終了して次のシーンに進みますか？", en: "Close this scene insert and proceed?", fr: "Terminer cette insertion de scène et continuer ?", de: "Diesen Szeneneinsatz beenden und fortfahren?", pt: "Encerrar esta inserção de cena e continuar?" }[lang] || "이 장면 삽입을 끝내고 다음 장면으로 넘어가시겠습니까?";

        const confirmed = await this.uiManager.showModal(confirmMsg);
        if (confirmed) {
            if (this._freeTalkEpoch !== skipEpoch
                || this.currentSceneId !== skipSceneId
                || this.freeTalkHistory !== skipHistory
                || !this.isFreeTalking) {
                return;
            }
            // 타이핑 중이면 중단
            if (this.dialogueSystem.isCurrentlyTyping()) {
                this.dialogueSystem.requestSkip();
            }
            this._invalidateFreeTalkContext();
            this.freeTalkTurns = this.currentMaxTurns;
            this.stateManager.setFlag(`messaged_${this.currentSceneId}`);
            this.uiManager.chatContainer.style.display = 'none';
            this.isFreeTalking = false;
            this.isProcessingChat = false;

            const endMsg = { es: "<br><br>(La inserción de escena ha terminado.)", ja: "<br><br>（場面挿入が終了しました。）", en: "<br><br>(Scene insert ended. Click to continue.)", fr: "<br><br>(L'insertion de scène est terminée.)", de: "<br><br>(Szeneneinsatz beendet. Klicke, um fortzufahren.)", pt: "<br><br>(A inserção de cena terminou. Clique para continuar.)" }[lang] || "<br><br>(장면 삽입이 종료되었습니다. 화면을 클릭하여 계속하세요.)";
            this.uiManager.messageEl.innerHTML += endMsg;
        }
    }

    /** 채팅 메시지 전송 */
    _invalidateFreeTalkContext({ preserveRequestOwner = false } = {}) {
        if (!preserveRequestOwner && this._activeRequestContext) {
            this._rollbackRequestHistory(this._activeRequestContext);
            if (this.uiManager?.messageEl) this.uiManager.messageEl.innerHTML = '';
        }
        this._freeTalkEpoch += 1;
        this._activeChatTurnId = null;
        if (!preserveRequestOwner) {
            this._activeRequestOwner = null;
            this._activeRequestContext = null;
        }
    }

    _isRequestContextCurrent(requestContext) {
        return Boolean(requestContext
            && this._freeTalkEpoch === requestContext.epoch
            && this.currentSceneId === requestContext.sceneId
            && this.currentCharKey === requestContext.charKey
            && this.freeTalkHistory === requestContext.history
            && this._activeRequestOwner === requestContext.owner
            && this.isFreeTalking);
    }

    _assertRequestContext(requestContext, payload = null) {
        if (!this._isRequestContextCurrent(requestContext)) {
            throw this._makeStaleTurnError('Free-talk scene changed before the AI response completed');
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

    async sendChatMessage(getSceneFn) {
        // 이미 처리 중이면 무시 (중복 호출 방지)
        if (this.isProcessingChat) return;
        if (!this.uiManager?.chatInput || !this.uiManager?.chatSendBtn || !this.uiManager?.dialogueBox) return;

        const stagedImageEarly = this.uiManager.stagedImage;
        const text = this.uiManager.chatInput.value.trim();
        // 텍스트가 없고 이미지도 없으면 전송하지 않음
        if ((!text && !stagedImageEarly) || this.freeTalkTurns >= this.currentMaxTurns || this.dialogueSystem.isCurrentlyTyping()) return;

        const requestSceneId = this.currentSceneId;
        const requestHistory = this.freeTalkHistory;
        const requestEpoch = this._freeTalkEpoch;
        const scene = getSceneFn(requestSceneId);
        if (!scene) return;

        const charKey = this.charNameMap[scene.name] || scene.name;
        if (this.currentCharKey !== charKey) return;

        const requestOwner = {};
        const requestContext = {
            owner: requestOwner,
            epoch: requestEpoch,
            sceneId: requestSceneId,
            charKey,
            history: requestHistory,
            historyLengthBeforeTurn: null,
            freeTalkTurnsBefore: this.freeTalkTurns,
            turnMeta: null
        };
        this._activeRequestOwner = requestOwner;
        this._activeRequestContext = requestContext;
        this.isProcessingChat = true;

        this.uiManager.chatInput.value = "";
        this.uiManager.resizeChatInput?.();
        this.freeTalkTurns++;
        if (this.uiManager.turnCountEl) this.uiManager.turnCountEl.textContent = this.currentMaxTurns - this.freeTalkTurns;

        // 사용자 메시지 표시
        const playerLabelByLang = { en: "Me", es: "Yo", ja: "僕", fr: "Moi", de: "Ich", pt: "Eu" };
        const playerLabel = playerLabelByLang[window.GAME_LANG || document.documentElement.lang] || "나";
        this.uiManager.updateNameTag(playerLabel);

        // 이미지와 메시지 결합 처리
        const stagedImage = this.uiManager.stagedImage;
        const finalContent = stagedImage
            ? (text ? `${text}\n\n${stagedImage}` : stagedImage)
            : text;

        // 텍스트 표시
        this.uiManager.messageEl.innerHTML = text ? this.dialogueSystem.parseNarration(text) : '';
        if (stagedImage) {
            const img = document.createElement('img');
            img.src = stagedImage;
            img.className = 'chat-image';
            this.uiManager.messageEl.appendChild(img);
        }
        // 유저 메시지 표시 후 대화창 최하단으로 스크롤
        if (this.uiManager.messageEl) this.uiManager.messageEl.scrollTop = this.uiManager.messageEl.scrollHeight;

        const historyLengthBeforeTurn = requestHistory.length;
        requestContext.historyLengthBeforeTurn = historyLengthBeforeTurn;
        requestHistory.push({ role: "user", content: finalContent });

        // 이미지 미리보기 제거
        this.uiManager.removeStagedImage();

        // 로딩 상태
        this.uiManager.chatSendBtn.disabled = true;
        this.uiManager.chatInput.disabled = true;
        const originalBtnContent = this.uiManager.chatSendBtn.innerHTML;
        this.uiManager.chatSendBtn.innerHTML = `<span class="loading-dots">...</span>`;

        // 생각중 상태
        document.querySelectorAll('.char-slot img').forEach(img => img.classList.add('thinking'));
        this.uiManager.dialogueBox.classList.add('thinking-box');

        // 캐릭터 위 생각중 인디케이터 표시
        const charSlot = document.getElementById('char-center') || document.querySelector('.char-slot');
        if (charSlot && !charSlot.querySelector('.thinking-indicator')) {
            const indicator = document.createElement('div');
            indicator.className = 'thinking-indicator';
            indicator.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
            charSlot.appendChild(indicator);
        }
        this._showThinkingMessage(scene.name);

        let _lastTurnMeta = null;
        let _lastCacheKey = '';
        let _lastAiEndpoint = '';

        // ─────────────────────────────────────────────────────────────
        // 🌐 AI API 호출 (try-catch로 오류 처리)
        // ─────────────────────────────────────────────────────────────
        // ⚠️ 흔한 오류 상황:
        //   1. "AI가 응답하지 않아요" - 네트워크 오류 또는 API 서버 다운
        //   2. "...만 나와요" - API 응답 파싱 실패
        //   3. "방금 당했어요" - API 키 문제 또는 요청 제한
        //
        // 확인 방법:
        //   - F12 → Network 탭에서 API 요청/응답 확인
        //   - Console 탭에서 "AI Chat Error" 메시지 확인
        // ─────────────────────────────────────────────────────────────
        try {
            // 📡 API 서버에 HTTP POST 요청
            // - API_ENDPOINT: 파일 상단에 정의된 서버 주소
            // - messages: 대화 기록 전체 (시스템 프롬프트 + 대화 내용)
            // [Explicit Caching] 캐시 키 — static 영역이 유저 중립(placeholder 유지)이라 전체 유저 공유 캐시 가능
            const _lang = window.GAME_LANG || document.documentElement.lang || 'ko';
            // [슬라이딩 윈도우] system + 누적 요약 주입 + 최근 N개 메시지만 전송 (토큰 폭증 방지)
            this._assertRequestContext(requestContext);
            const _windowed = this._sanitizeDainOutfitHistory(this._buildWindowedHistory(requestHistory), charKey);
            // 토큰 절감: 최근 5개 메시지 외의 이미지는 [이전 사진]으로 치환
            let _optimized = (typeof window.optimizeImageHistory === 'function')
                ? window.optimizeImageHistory(_windowed, 5)
                : _windowed;
            const _latestUserCanonBlock = buildCupidLatestUserCanonBlock(_optimized, _lang, finalContent);
            const _inWorldUserRoleBlock = this._buildInWorldUserRoleBlock(_optimized);
            const _recentRepetitionGuard = buildCupidRecentExpressionRepetitionGuard(_optimized, _lang);
            const _currentAffinity = this.stateManager.getAffinity
                ? this.stateManager.getAffinity(charKey)
                : (this.stateManager.stats?.[charKey]?.affinity || 0);
            const _isDatingCurrentForBoundary = this.stateManager.getFlag(`isDating_${charKey}`) || this.stateManager.getFlag(`isDating_${scene.name}`);
            const _affinityIntimacyProgressionPatch = buildCupidAffinityIntimacyProgressionPatch(_lang, _currentAffinity, _isDatingCurrentForBoundary);
            const _runtimePromptPatch = `${_latestUserCanonBlock}${_inWorldUserRoleBlock}${_affinityIntimacyProgressionPatch}${_recentRepetitionGuard}`;
            if (_runtimePromptPatch && Array.isArray(_optimized) && _optimized[0]?.role === 'system') {
                _optimized = [
                    { ..._optimized[0], content: appendFreeTalkDynamicContext(_optimized[0].content, _runtimePromptPatch) },
                    ..._optimized.slice(1)
                ];
            }
            _optimized = this._forceLatestUserMessageLast(_optimized, finalContent);
            const _stablePromptContent = Array.isArray(_optimized) && _optimized[0]?.role === 'system'
                ? _optimized[0].content
                : '';
            const _stablePromptFingerprint = _stablePromptContent
                ? getFreeTalkStablePromptFingerprint(_stablePromptContent)
                : '';
            const _cacheKey = charKey && _stablePromptFingerprint
                ? `cupid:ctx:${encodeFreeTalkCacheKeyPart(_lang)}:${encodeFreeTalkCacheKeyPart(charKey)}:${this._isRemote ? 'r' : 'f'}:s${_stablePromptFingerprint}`
                : '';
            _lastCacheKey = _cacheKey;
            const _turnMeta = this._createTurnMeta(finalContent);
            _lastTurnMeta = _turnMeta;
            requestContext.turnMeta = _turnMeta;
            this._activeChatTurnId = _turnMeta?.turnId || null;
            const aiEndpoint = (typeof AI_API_ENDPOINT !== 'undefined' && AI_API_ENDPOINT) ? AI_API_ENDPOINT : API_ENDPOINT;
            _lastAiEndpoint = aiEndpoint;
            const requestInit = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-app-type": "cupid",
                    "x-request-type": "character",
                    "x-chat-mode": "single",
                    "x-output-language": _lang,
                    ...(_cacheKey && { "x-cache-key": _cacheKey })
                },
                body: JSON.stringify({
                    messages: _optimized,
                    model: (typeof AI_MODEL_ID !== 'undefined' && AI_MODEL_ID) ? AI_MODEL_ID : (window.AI_MODEL_ID || undefined),
                    characterId: charKey,
                    requestType: "character",
                    chatMode: "single",
                    outputLanguage: _lang,
                    cacheKey: _cacheKey,
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

            const fallbackEndpoint = (typeof API_ENDPOINT !== 'undefined' && API_ENDPOINT) ? API_ENDPOINT : window.API_ENDPOINT;
            const canFallback = (
                primaryError instanceof TypeError || shouldFailOverFreeTalkAiResponse(response)
            ) && fallbackEndpoint && fallbackEndpoint !== aiEndpoint;
            if (canFallback) {
                _lastAiEndpoint = fallbackEndpoint;
                response = await fetch(fallbackEndpoint, requestInit);
                this._assertRequestContext(requestContext);
            } else if (primaryError) {
                throw primaryError;
            }

            // HTTP 상태 코드 확인 (200번대가 아니면 오류)
            // 400: 잘못된 요청, 401: 인증 실패, 429: 요청 제한, 500: 서버 오류
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            // JSON 파싱
            const data = await response.json();
            this._assertRequestContext(requestContext, data);

            // OpenAI API 응답 구조에서 대답 텍스트 추출
            // 구조: { choices: [{ message: { content: "대답 내용" } }] }
            const replyContent = data?.choices?.[0]?.message?.content;
            let reply = typeof replyContent === 'string' ? replyContent.trim() : '';

            if (!reply) {
                console.warn('[Cupid FreeTalk] Empty AI response payload:', {
                    reason: data?.reason || data?.error || data?.choices?.[0]?.finish_reason || 'EMPTY_AI_RESPONSE',
                    character: charKey || ''
                });
                throw new Error('AI response was empty. Please try again.');
            }

            // JSON 응답 파싱 → {text, expression, affinity} 구조체 반환
            if (data?.provider === 'deepseek' && data?.usage) {
                const usage = data.usage;
                const cache = data.cache || {};
                const hitTokens = Number(cache.prompt_cache_hit_tokens ?? usage.prompt_cache_hit_tokens ?? 0);
                const missTokens = Number(cache.prompt_cache_miss_tokens ?? usage.prompt_cache_miss_tokens ?? 0);
                const hitRatio = hitTokens + missTokens > 0 ? hitTokens / (hitTokens + missTokens) : 0;
                console.info('[DeepSeek Cache]', {
                    app: 'cupid-freetalk',
                    character: charKey || '',
                    cacheKey: _cacheKey || '',
                    hitTokens,
                    missTokens,
                    hitRatio: Number(hitRatio.toFixed(4)),
                    promptTokens: Number(usage.prompt_tokens || hitTokens + missTokens || 0),
                    completionTokens: Number(usage.completion_tokens || 0),
                    totalTokens: Number(usage.total_tokens || 0)
                });
            }

            this._assertRequestContext(requestContext, data);
            const parsed = this.parseJsonResponse(reply);

            if (!parsed?.text && !(Array.isArray(parsed?.segments) && parsed.segments.length > 0)) {
                throw new Error('AI response did not contain visible roleplay text. Please try again.');
            }

            if (parsed) {
                // NSFW 판단은 AI 프롬프트에 위임 (코드 레벨 강제 차단 없음)

                reply = this._sanitizeVisibleArtifacts(this._sanitizePlayerPlaceholders(parsed.text || ""));
                const parsedSegments = this._sanitizeSegmentsPlaceholders(parsed.segments || null);

                // 레거시 인라인 메타 태그는 화면에서만 제거하고 상태에는 적용하지 않는다.
                // 표정과 호감도는 검증된 JSON 필드만 렌더 성공 후 반영한다.
                reply = reply
                    .replace(/\[EXPRESSION:\s*\w+\]/gi, '')
                    .replace(/\[STATS:\s*affinity\s*[+-]?\d+\]/gi, '')
                    .trim();

                if (!reply) {
                    throw new Error('AI response did not contain visible roleplay text. Please try again.');
                }

                this._assertRequestContext(requestContext, data);
                this._clearThinkingMessage();
                this.uiManager.updateNameTag(scene.name);

                // 생각중 상태 해제
                document.querySelectorAll('.char-slot img').forEach(img => img.classList.remove('thinking'));
                this.uiManager.dialogueBox.classList.remove('thinking-box');
                document.querySelectorAll('.thinking-indicator').forEach(el => el.remove());

                // segments가 있으면 typeText에 전달 (별표 파싱 건너뛰고 구조화 렌더)
                await this.dialogueSystem.typeText(
                    reply,
                    scene.name,
                    parsedSegments,
                    () => this._isRequestContextCurrent(requestContext)
                );

                // 화면 렌더가 성공한 응답에만 표정과 호감도를 적용한다.
                this._assertRequestContext(requestContext, data);
                if (parsed.expression) {
                    this.applyExpression(parsed.expression, scene);
                }
                if (parsed.affinity !== 0) {
                    this.applyAffinity(parsed.affinity, scene);
                }
                this._assertRequestContext(requestContext, data);
                requestHistory.push({ role: "assistant", content: reply, segments: parsedSegments });
                this.galleryManager.incrementFreeTalkCount(charKey);

                // 대화 기록 저장 (로컬)
                this._assertRequestContext(requestContext, data);
                this.stateManager.setChatMemory(charKey, requestHistory);

                // D1 chat-logs 저장 (백업 뷰어용, 비동기 fire-and-forget)
                if (typeof window.saveCupidChatLog === 'function') {
                    this._assertRequestContext(requestContext, data);
                    window.saveCupidChatLog({
                        charId: charKey,
                        userContent: finalContent,
                        assistantContent: reply,
                        sessionId: requestSceneId || '',
                        context: '1:1'
                    });
                }
            }

            // 대화 종료 체크
            if (this.freeTalkTurns >= this.currentMaxTurns) {
                this._assertRequestContext(requestContext, data);
                this.endFreeTalk(requestOwner);
            }
        } catch (error) {
            const ownsCurrentContext = this._isRequestContextCurrent(requestContext);
            this._rollbackRequestHistory(requestContext);
            if (ownsCurrentContext) {
                this.freeTalkTurns = requestContext.freeTalkTurnsBefore;
                if (this.uiManager.turnCountEl) {
                    this.uiManager.turnCountEl.textContent = this.currentMaxTurns - this.freeTalkTurns;
                }
            }

            // 🔍 오류 내용을 콘솔에 기록 (디버깅용)
            // F12 → Console 탭에서 확인 가능
            if (!ownsCurrentContext || error?.isStaleTurn || error?.reason === 'STALE_TURN') {
                console.warn('[Cupid FreeTalk] Ignored stale chat response');
                return;
            }
            console.error("AI Chat Error:", error);

            const langErr = window.GAME_LANG || document.documentElement.lang || 'ko';

            if (typeof window.logCupidError === 'function') {
                window.logCupidError(error, {
                    source: 'cupid-freetalk',
                    errorType: /^HTTP\s+\d+/.test(error?.message || '') ? 'freetalk_http_error' : 'freetalk_request_failed',
                    sessionId: requestSceneId || '',
                    context: {
                        charId: charKey || '',
                        sceneId: requestSceneId || '',
                        sceneName: scene?.name || '',
                        language: langErr,
                        chatMode: this._isRemote ? 'remote' : 'face',
                        freeTalkTurns: this.freeTalkTurns
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
            const requestErrorMessage = {
                ko: '연결이 잠시 원활하지 않습니다. 방금 입력은 대화 기록에 저장되지 않았습니다. 다시 시도해 주세요.',
                en: 'The connection was interrupted. Your last input was not saved to the conversation. Please try again.',
                es: 'La conexión se interrumpió. Tu último mensaje no se guardó en la conversación. Inténtalo de nuevo.',
                ja: '接続が一時的に中断されました。直前の入力は会話履歴に保存されていません。もう一度お試しください。',
                fr: 'La connexion a été interrompue. Votre dernier message n’a pas été enregistré dans la conversation. Réessayez.',
                de: 'Die Verbindung wurde unterbrochen. Deine letzte Eingabe wurde nicht im Gespräch gespeichert. Bitte versuche es erneut.',
                pt: 'A conexão foi interrompida. Sua última mensagem não foi salva na conversa. Tente novamente.'
            }[langErr] || 'The connection was interrupted. Your last input was not saved to the conversation. Please try again.';

            if (typeof this.uiManager.showModal === 'function') {
                await this.uiManager.showModal(requestErrorMessage, true);
            } else if (typeof window.alert === 'function') {
                window.alert(requestErrorMessage);
            }
        } finally {
            if (this._activeRequestOwner === requestOwner) {
                this._activeRequestOwner = null;
                this._activeRequestContext = null;
                this._activeChatTurnId = null;
                this.isProcessingChat = false;
                this.uiManager.chatSendBtn.disabled = false;
                if (this.uiManager.chatSkipBtn) this.uiManager.chatSkipBtn.disabled = false;
                this.uiManager.chatInput.disabled = false;
                this.uiManager.chatSendBtn.innerHTML = originalBtnContent;

                document.querySelectorAll('.char-slot img').forEach(img => img.classList.remove('thinking'));
                this.uiManager.dialogueBox.classList.remove('thinking-box');
                document.querySelectorAll('.thinking-indicator').forEach(el => el.remove());
                this._clearThinkingMessage();

                if (!window.isCupidDesktopPointer || window.isCupidDesktopPointer()) {
                    this.uiManager.chatInput.focus();
                }
            }
        }
    }

    /**
     * Normalize stale assistant history for Dain so old school-uniform wording
     * does not get resent as conversation context.
     */
    _sanitizeDainOutfitHistory(messages, charKey) {
        if (charKey !== 'Dain' || !Array.isArray(messages)) return messages;

        const replacements = [
            [/교복 자락/g, '배구 유니폼 자락'],
            [/교복 소매/g, '검정 암슬리브'],
            [/교복 치마/g, '스포츠 하의'],
            [/교복/g, '배구 유니폼'],
            [/school-uniform hem/gi, 'volleyball-jersey hem'],
            [/school-uniform sleeve/gi, 'black arm sleeve'],
            [/school skirt/gi, 'sports shorts'],
            [/school uniform/gi, 'volleyball uniform']
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

    /**
     * Builds a bounded request history: system plus the latest HISTORY_WINDOW messages.
     */
    _buildWindowedHistory(history = this.freeTalkHistory) {
        if (!Array.isArray(history) || history.length === 0) return [];
        const sysMsg = history[0];
        if (!sysMsg || sysMsg.role !== 'system') return history;

        const rest = history.slice(1);
        if (rest.length <= this.HISTORY_WINDOW) return history;

        return [sysMsg, ...rest.slice(-this.HISTORY_WINDOW)];
    }

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

            const lang = String(
                (typeof window !== 'undefined' && window.GAME_LANG) ||
                (typeof document !== 'undefined' && document.documentElement?.lang) ||
                'ko'
            ).toLowerCase();

            if (lang.startsWith('ko')) {
                return `\n\n[사용자 배역]\n사용자 캐릭터는 "${roleName}"입니다. ${roleName} 이름표로 적힌 말·행동·침묵은 이미 일어난 사용자 쪽 장면으로 받고, 새 행동이나 대사·동의·거절은 대신 정하지 마세요.`;
            }

            return `\n\n[User character]\nThe user character is "${roleName}". Treat lines, actions, and silences labeled ${roleName} as already performed by the user side, and do not invent that character's next action, dialogue, consent, or refusal.`;
        }

        return '';
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 🔄 parseJsonResponse - AI 응답에서 JSON 파싱 및 텍스트 추출
     * ═══════════════════════════════════════════════════════════════
     *
     * ▶ 왜 필요한가?
     *   AI가 가끔 JSON 형식으로 응답을 보내는 경우가 있습니다.
     *   예: {"text": "안녕!", "emotion": "happy"}
     *   이런 경우 JSON을 파싱해서 텍스트만 추출해야 합니다.
     *
     * ▶ 처리하는 케이스:
     *   1. ```json ... ``` 형태의 코드 블록
     *   2. 순수 JSON 문자열 { ... } 또는 [ ... ]
     *   3. 텍스트 중간에 포함된 JSON
     *
     * ▶ 텍스트 추출 우선순위:
     *   text → dialogue → content → message → response → msg → result
     *   → 위 키가 없으면 가장 긴 문자열 값 사용
     *
     * ⚠️ 흔한 오류 상황:
     *   1. AI 응답이 "..."로만 나옴
     *      → JSON 파싱은 성공했지만 텍스트 키를 찾지 못함
     *      → 콘솔에서 실제 응답 확인: console.log(reply)
     *
     *   2. 이상한 문자가 표시됨
     *      → JSON이 아닌데 파싱 시도한 경우
     *      → 정상적으로 원본 텍스트가 반환되어야 함
     *
     * @param {string} reply - AI 응답 원문
     * @returns {string} 추출된 텍스트 또는 원본 그대로
     */
    _getPlayerDisplayName() {
        return this.stateManager?.playerName || '주인공';
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

    _sanitizeVisibleArtifacts(text) {
        if (typeof text !== 'string' || !text) return text || '';

        let out = text;

        // Keep stat changes internal to JSON fields. Never let them appear as character dialogue.
        out = out
            .replace(/\bInterest\s*[+-]\s*\d+\b\.?/gi, 'Interesting.')
            .replace(/\bAffinity\s*[+-]\s*\d+\b\.?/gi, '')
            .replace(/\bSTAT(?:S)?\s*[+-]\s*\d+\b\.?/gi, '')
            .replace(/(?:흥미|관심)\s*[+-]\s*\d+\s*(?:이니까|이라서|라고|이라며|이라니까)?/g, (match) => (
                /이니까|이라서/.test(match) ? '재미있으니까' :
                /라고|이라며|이라니까/.test(match) ? '흥미롭다며' :
                '흥미롭네'
            ))
            .replace(/(?:호감도|호감|친밀도)\s*[+-]\s*\d+\s*(?:이니까|이라서|라고|이라며|이라니까)?/g, '')
            .replace(/(?:Δ|delta)\s*[+-]\s*\d+/gi, '')
            .replace(/\s{2,}/g, ' ')
            .trim();

        // Replace exact measured pauses with qualitative beats.
        out = out
            .replace(/\*\s*\d+(?:[.,]\d+)?\s*(?:초간|초|秒|sec(?:onds?)?|second(?:s)?|seg(?:undos?)?|Sek(?:unden)?)\.?\s*\*/gi, '*잠깐 정적이 흐른다.*')
            .replace(/\b\d+(?:[.,]\d+)?\s*(?:sec(?:onds?)?|second(?:s)?|seg(?:undos?)?|Sek(?:unden)?)\b\.?/gi, 'a brief pause')
            .replace(/\d+(?:[.,]\d+)?\s*(?:초간|초|秒)\.?/g, '잠깐');

        return out.replace(/\s+([.?!,;:])/g, '$1').trim();
    }

    _sanitizeVisibleArtifactsHistory(messages) {
        if (!Array.isArray(messages)) return messages || [];

        return messages.map((msg) => {
            if (!msg || msg.role !== 'assistant') return msg;

            const next = { ...msg };
            if (typeof next.content === 'string') {
                next.content = this._sanitizeVisibleArtifacts(next.content);
            }
            if (Array.isArray(next.segments)) {
                next.segments = next.segments.map((seg) => {
                    if (!seg || typeof seg !== 'object') return seg;
                    return { ...seg, text: this._sanitizeVisibleArtifacts(seg.text || '') };
                }).filter(seg => seg && seg.text);
            }
            return next;
        });
    }

    _sanitizeSegmentsPlaceholders(segments) {
        if (!Array.isArray(segments)) return segments || null;
        return segments.map(seg => {
            if (!seg || typeof seg !== 'object') return seg;
            return { ...seg, text: this._sanitizeVisibleArtifacts(this._sanitizePlayerPlaceholders(seg.text || '')) };
        }).filter(seg => seg && seg.text);
    }

    parseJsonResponse(reply) {
        if (!reply) {
            throw new Error('AI response was empty. Please try again.');
        }

        // 📌 JSON일 가능성 체크 (중괄호, 대괄호, 또는 코드블록 포함 여부)
        const likelyJson = reply.includes('{') || reply.includes('[') || reply.includes('```json');
        if (!likelyJson) return { text: this._sanitizePlayerPlaceholders(reply), segments: null, expression: "", affinity: 0 };  // 순수 텍스트면 그대로

        try {
            let jsonStr = reply;

            // 📌 케이스 1: ```json ... ``` 코드 블록에서 JSON 추출
            if (jsonStr.includes('```')) {
                const match = jsonStr.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
                if (match) jsonStr = match[1];  // 코드 블록 내용만 추출
            }

            // 📌 케이스 2: JSON 시작점 찾기 (텍스트 중간에 JSON이 있는 경우)
            if (!jsonStr.trim().startsWith('{') && !jsonStr.trim().startsWith('[')) {
                const startExpr = jsonStr.indexOf('{');   // { 위치 찾기
                const startArray = jsonStr.indexOf('[');  // [ 위치 찾기

                // 둘 중 더 앞에 있는 것 선택 (둘 다 없으면 -1)
                let start = startExpr !== -1 && startArray !== -1 ? Math.min(startExpr, startArray) : Math.max(startExpr, startArray);

                if (start !== -1) {
                    // JSON 끝 위치 찾기
                    const end = Math.max(jsonStr.lastIndexOf('}'), jsonStr.lastIndexOf(']'));
                    if (end > start) jsonStr = jsonStr.substring(start, end + 1);
                }
            }

            // 📌 JSON 파싱 시도
            const parsed = JSON.parse(jsonStr);

            // 📌 신규 — segments 배열 우선 처리 {segments, expression, affinity}
            if (parsed && typeof parsed === 'object' && !Array.isArray(parsed) && Array.isArray(parsed.segments) && parsed.segments.length > 0) {
                const normalizedSegments = this.normalizeSegments(parsed.segments);
                const derivedText = this.segmentsToText(normalizedSegments);
                return {
                    text: this._sanitizePlayerPlaceholders(derivedText),
                    segments: this._sanitizeSegmentsPlaceholders(normalizedSegments),
                    expression: (parsed.expression || "").toLowerCase(),
                    affinity: parseInt(parsed.affinity) || 0,
                };
            }

            // 📌 cupid 레거시 스키마 {text, expression, affinity}
            if (parsed && typeof parsed === 'object' && !Array.isArray(parsed) && typeof parsed.text === 'string') {
                return {
                    text: this._sanitizePlayerPlaceholders(parsed.text || ""),
                    segments: null,
                    expression: (parsed.expression || "").toLowerCase(),
                    affinity: parseInt(parsed.affinity) || 0,
                };
            }

            /**
             * 📌 레거시: 객체에서 텍스트 추출 (구 형식 호환)
             * 여러 가능한 키 이름을 순서대로 시도
             */
            const getTextFromObj = (obj) => {
                // 문자열이면 그대로 반환
                if (typeof obj === 'string') return obj;

                // 알려진 텍스트 키들 확인 (우선순위순)
                let text = obj.text || obj.dialogue || obj.content || obj.message || obj.response || obj.msg || obj.result;

                // 위 키들이 없으면 가장 긴 문자열 값 찾기
                if (!text) {
                    let longestStr = "";
                    for (const key in obj) {
                        if (typeof obj[key] === 'string' && obj[key].length > longestStr.length) {
                            longestStr = obj[key];
                        }
                    }
                    // 5자 이상이면 유효한 텍스트로 간주
                    if (longestStr.length > 5) text = longestStr;
                }
                return text;
            };

            // 📌 배열인 경우 첫 번째 요소에서 추출
            let fallbackText;
            if (Array.isArray(parsed) && parsed.length > 0) {
                fallbackText = getTextFromObj(parsed[0]);
            } else {
                fallbackText = getTextFromObj(parsed);
            }
            if (fallbackText && typeof fallbackText === 'string') {
                return { text: this._sanitizePlayerPlaceholders(fallbackText), segments: null, expression: "", affinity: 0 };
            }
        } catch (e) {
            // 📌 JSON 파싱 실패 시 경고 로그
            console.warn("JSON parsing failed:", e);
            window.reportCupidCaughtError?.(e, {
                source: 'cupid-freetalk',
                errorType: 'ai_response_json_parse_failed',
                sessionId: this.currentSceneId || '',
                context: {
                    sceneId: this.currentSceneId || '',
                    language: window.GAME_LANG || document.documentElement.lang || 'ko',
                    replyLength: String(reply || '').length,
                    replyHash: window.hashCupidLogText ? window.hashCupidLogText(reply || '') : ''
                }
            });
        }

        throw new Error('AI response format could not be parsed. Please try again.');
    }

    /**
     * AI가 반환한 segments 배열을 표준 포맷으로 정규화
     * 허용 type: 'narration' | 'dialogue'
     */
    normalizeSegments(raw) {
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
     * segments 배열을 레거시 호환 인라인 텍스트로 변환
     * narration → *text*, dialogue → text
     */
    segmentsToText(segments) {
        if (!Array.isArray(segments) || segments.length === 0) return '';
        return segments.map(s => {
            if (!s || !s.text) return '';
            const text = this._sanitizePlayerPlaceholders(s.text);
            return s.type === 'narration' ? `*${text}*` : text;
        }).filter(Boolean).join(' ');
    }

    /**
     * 😊 applyExpression - JSON 필드에서 받은 표정을 캐릭터 이미지에 적용
     * @param {string} exprName - 표정 이름 (예: shy, angry, laugh)
     * @param {Object} scene - 현재 씬 데이터
     */
    applyExpression(exprName, scene) {
        if (!exprName || !window.CHARACTER_EXPRESSIONS) return;
        const name = exprName.toLowerCase();
        const charExprs = typeof getCharacterExpressionSet === 'function'
            ? getCharacterExpressionSet(scene.name)
            : window.CHARACTER_EXPRESSIONS[scene.name];
        if (!charExprs || !charExprs[name]) return;

        const centerSlot = this.uiManager.charSlots.center;
        if (!centerSlot) return;

        const exprUrl = getAssetUrl(charExprs[name]);
        const existingImg = centerSlot.querySelector('img');
        if (existingImg) {
            existingImg.src = exprUrl;
        } else {
            const img = document.createElement('img');
            img.src = exprUrl;
            centerSlot.appendChild(img);
        }
    }

    /**
     * 📊 applyAffinity - JSON 필드에서 받은 호감도 변화량 적용
     * @param {number} change - 호감도 변화량 (정수)
     * @param {Object} scene - 현재 씬 데이터
     */
    applyAffinity(change, scene) {
        if (!change || change === 0) return;
        // 턴당 호감도 범위 제한: -5 ~ +5
        change = Math.max(-5, Math.min(5, change));
        const charKey = this.charNameMap[scene.name] || scene.name;
        if (this.stateManager.stats[charKey]) {
            const newValue = this.stateManager.changeAffinity(charKey, change);
            this.uiManager.showAffinityChange(change, charKey);
            this.galleryManager.updateMaxAffinity(charKey, newValue);
            this.galleryManager.checkAffinityUnlock(charKey, newValue);
        }
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 😊 processExpressionTags - AI 응답에서 표정 태그 처리
     * ═══════════════════════════════════════════════════════════════
     *
     * ▶ 역할:
     *   AI 응답에 [EXPRESSION: happy] 같은 태그가 있으면
     *   캐릭터의 표정 이미지를 변경합니다.
     *
     * ▶ 태그 형식:
     *   [EXPRESSION: 표정이름]
     *   예: [EXPRESSION: happy], [EXPRESSION: sad], [EXPRESSION: angry]
     *
     * ▶ 표정 이미지 출처:
     *   characters.js의 CHARACTER_EXPRESSIONS 객체에 정의됨
     *   예: CHARACTER_EXPRESSIONS["서연"]["happy"] = "assets/images/char/seyoun_happy.webp"
     *
     * ⚠️ 표정이 바뀌지 않는다면?
     *   1. 표정 이름 철자 확인 (대소문자 무관)
     *   2. CHARACTER_EXPRESSIONS에 해당 표정이 있는지 확인
     *   3. 이미지 파일이 실제로 존재하는지 확인
     *
     * @param {string} reply - AI 응답 텍스트
     * @param {Object} scene - 현재 씬 데이터 (캐릭터 이름 포함)
     * @returns {string} 표정 태그가 제거된 텍스트
     */
    processExpressionTags(reply, scene) {
        // 📌 정규식: [EXPRESSION: xxx] 형태 찾기 (대소문자 무시)
        const exprRegex = /\[EXPRESSION:\s*(\w+)\]/gi;
        let exprMatch;

        // 📌 모든 표정 태그를 찾아서 처리
        while ((exprMatch = exprRegex.exec(reply)) !== null) {
            const exprName = exprMatch[1].toLowerCase();  // 표정 이름 (소문자로 변환)

            // CHARACTER_EXPRESSIONS 객체가 있는지 확인
            if (window.CHARACTER_EXPRESSIONS) {
                // 현재 캐릭터의 표정 목록 가져오기
                const charExprs = typeof getCharacterExpressionSet === 'function'
                    ? getCharacterExpressionSet(scene.name)
                    : window.CHARACTER_EXPRESSIONS[scene.name];

                // 해당 표정이 정의되어 있으면 이미지 변경
                if (charExprs && charExprs[exprName]) {
                    const centerSlot = this.uiManager.charSlots.center;  // 중앙 캐릭터 슬롯

                    // 🔧 centerSlot이 없으면 표정 변경 스킵
                    if (!centerSlot) continue;

                    const exprUrl = getAssetUrl(charExprs[exprName]);    // 버전 쿼리 추가

                    // 이미 이미지가 있으면 src만 변경, 없으면 새로 생성
                    const existingImg = centerSlot.querySelector('img');
                    if (existingImg) {
                        existingImg.src = exprUrl;
                    } else {
                        const img = document.createElement('img');
                        img.src = exprUrl;
                        centerSlot.appendChild(img);
                    }
                }
            }
        }

        // 📌 태그를 텍스트에서 제거하고 반환
        return reply.replace(exprRegex, "").trim();
    }

    /**
     * 스탯(호감도) 변화 태그 처리
     *
     * ▶ AI 응답에 "[STATS: affinity +10]" 같은 태그가 있으면
     *   실제로 호감도를 변경하고 팝업 애니메이션 표시
     *
     * @param {string} reply - AI 응답 텍스트
     * @param {Object} scene - 현재 씬 데이터
     * @returns {string} 태그가 제거된 텍스트
     */
    processStatsTags(reply, scene) {
        const statsRegex = /\[STATS:\s*affinity\s*([+-]?\d+)\]/gi;
        let statMatch;

        // 모든 스탯 태그 찾아서 처리
        while ((statMatch = statsRegex.exec(reply)) !== null) {
            const affinityChange = parseInt(statMatch[1]);
            const charKey = this.charNameMap[scene.name] || scene.name;

            // 캐릭터 호감도 변경
            if (this.stateManager.stats[charKey]) {
                const newValue = this.stateManager.changeAffinity(charKey, affinityChange);
                this.uiManager.showAffinityChange(affinityChange, charKey);
                this.galleryManager.updateMaxAffinity(charKey, newValue);
                this.galleryManager.checkAffinityUnlock(charKey, newValue);
            }
        }

        // 태그 제거 후 반환
        return reply.replace(statsRegex, "").trim();
    }

    /**
     * 프리토킹 종료 처리
     * - 대화 완료 플래그 설정
     * - 채팅 UI 숨김
     * - 다음 씬으로 넘어가라는 안내 메시지 표시
     */
    endFreeTalk(requestOwner = null) {
        const endingSceneId = this.currentSceneId;
        const preserveRequestOwner = Boolean(requestOwner && this._activeRequestOwner === requestOwner);
        this._invalidateFreeTalkContext({ preserveRequestOwner });
        if (!preserveRequestOwner) this.isProcessingChat = false;
        const endingEpoch = this._freeTalkEpoch;

        // 이 프리토킹을 완료했다는 플래그 설정
        this.stateManager.setFlag(`messaged_${endingSceneId}`);

        setTimeout(() => {
            if (this._freeTalkEpoch !== endingEpoch || this.currentSceneId !== endingSceneId) return;
            this.uiManager.chatContainer.style.display = 'none';
            this.isFreeTalking = false;

            // 종료 안내 메시지
            const langEnd = window.GAME_LANG || document.documentElement.lang || 'ko';
            const endMsg = { es: "<br><br>(La inserción de escena ha terminado.)", ja: "<br><br>（場面挿入が終了しました。）", en: "<br><br>(Scene insert ended. Click to continue.)", fr: "<br><br>(L'insertion de scène est terminée.)", de: "<br><br>(Szeneneinsatz beendet. Klicke, um fortzufahren.)", pt: "<br><br>(A inserção de cena terminou. Clique para continuar.)" }[langEnd] || "<br><br>(장면 삽입이 종료되었습니다. 화면을 클릭하여 계속하세요.)";
            this.uiManager.messageEl.innerHTML += endMsg;
        }, 500);
    }
}

window.FreeTalkSystem = FreeTalkSystem;
