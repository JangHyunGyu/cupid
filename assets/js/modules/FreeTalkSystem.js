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
const CupidFreeTalkCore = window.CupidFreeTalkCore;
if (!CupidFreeTalkCore) {
    throw new Error('CupidFreeTalkCore must be loaded before FreeTalkSystem');
}

const FREE_TALK_CACHE_BOUNDARY_MARKER = CupidFreeTalkCore.CACHE_BOUNDARY_MARKER;
const FREE_TALK_AI_FAILOVER_HTTP_STATUSES = CupidFreeTalkCore.FAILOVER_HTTP_STATUSES;
const FREE_TALK_AI_RETRY_HTTP_STATUSES = CupidFreeTalkCore.RETRY_HTTP_STATUSES;
const normalizeFreeTalkPromptBlockForCache = CupidFreeTalkCore.normalizePromptBlockForCache;
const shouldFailOverFreeTalkAiResponse = CupidFreeTalkCore.shouldFailOverAiResponse;
const shouldRetryFreeTalkAiResponse = CupidFreeTalkCore.shouldRetryAiResponse;
const appendFreeTalkDynamicContext = CupidFreeTalkCore.appendDynamicContext;
const getFreeTalkStablePromptHash = CupidFreeTalkCore.getStablePromptHash;
const getFreeTalkStablePromptFingerprint = CupidFreeTalkCore.getStablePromptFingerprint;
const encodeFreeTalkCacheKeyPart = CupidFreeTalkCore.encodeCacheKeyPart;
const buildCupidRecentExpressionRepetitionGuard = CupidFreeTalkCore.buildRecentExpressionRepetitionGuard;

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

const cupidSanitizeLatestUserText = CupidFreeTalkCore.sanitizeLatestUserText;
const cupidTruncateLatestUserText = CupidFreeTalkCore.truncateLatestUserText;
const cupidFindLatestUserText = CupidFreeTalkCore.findLatestUserText;
const buildCupidLatestUserCanonBlock = CupidFreeTalkCore.buildLatestUserCanonBlock;

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
            en: 'The character is thinking about what to say',
            es: 'El personaje está pensando qué decir',
            ja: 'キャラクターが返事を考えています',
            fr: 'Le personnage réfléchit à sa réponse',
            de: 'Die Figur überlegt, was sie sagen soll',
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
                ((charName === "担任先生" || charName === "担任の先生") && (m.char === "담임선생님" || m.char === "Teacher")) ||
                ((charName === "保健先生" || charName === "保健室の先生") && (m.char === "보건선생님" || m.char === "Nurse")) ||
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
        const header = { es: "\n\n[Eventos y Recuerdos Recientes]:\n", ja: "\n\n[直近の出来事と記憶]\n", en: "\n\n[Recent Events & Memories]:\n", fr: "\n\n[Événements et souvenirs récents] :\n", de: "\n\n[Aktuelle Ereignisse & Erinnerungen]:\n", pt: "\n\n[Eventos e Memórias Recentes]:\n" }[lang] || "\n\n[최근 사건과 기억]\n";
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
            default:        { es: "Escuela", ja: "学校", en: "School", fr: "Lycée", de: "Schule", pt: "Escola", ko: "학교" },
            room_school:    { es: "Aula", ja: "教室", en: "Classroom", fr: "Salle de classe", de: "Klassenzimmer", pt: "Sala de aula", ko: "교실" },
            school_hallway: { es: "Pasillo", ja: "廊下", en: "Hallway", fr: "Couloir", de: "Flur", pt: "Corredor", ko: "복도" },
            'school.png':   { es: "Puerta de la escuela", ja: "校門前", en: "School Gate", fr: "Portail du lycée", de: "Schultor", pt: "Portão da escola", ko: "교문 앞" },
            top_school:     { es: "Azotea", ja: "屋上", en: "Rooftop", fr: "Toit du lycée", de: "Schuldach", pt: "Terraço", ko: "학교 옥상" },
            playground:     { es: "Patio", ja: "運動場", en: "Playground", fr: "Cour de récréation", de: "Schulhof", pt: "Pátio", ko: "운동장" },
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
                ja: `\n- 恋人関係の文脈: あなたは現在ユーザーと付き合っています。親密さは保ちつつ、愛称は場面とそのキャラクターらしさに自然に合う時だけ使ってください。`,
                fr: `\n- Contexte amoureux : Vous sortez actuellement avec l'utilisateur. Préservez votre complicité, mais n'employez de surnoms tendres que lorsque la scène et la manière de parler du personnage s'y prêtent vraiment.`,
                de: `\n- Beziehungskontext: Du bist mit dem Nutzer zusammen. Bewahre die Vertrautheit, aber nutze Kosenamen nur, wenn Szene und Charakterstimme wirklich dazu passen.`,
                pt: `\n- Contexto de namoro: Você está atualmente namorando o usuário. Mantenha a intimidade, mas use apelidos carinhosos só quando a cena e a voz da personagem pedirem.`
            }[lang] || `\n- Dating context: You are currently dating the user. Keep the relationship intimate, but use pet names only when the scene and character voice naturally call for them.`);

        }

        // 통신 매체 판단
        const remoteKeywords = [
            "연락", "메시지", "전화", "톡", "문자", "전송",
            "contact", "message", "call", "text", "send",
            "llamada", "teléfono", "enviar",
            "appel", "téléphone", "envoyer",
            "nachricht", "anruf", "telefon", "chat", "senden",
            "mensagem", "ligação", "telefone", "enviar"
        ];
        const isRemote = scene.isRemote === true || remoteKeywords.some(k =>
            (scene.context && scene.context.toLowerCase().includes(k)) ||
            (scene.buttonText && scene.buttonText.toLowerCase().includes(k)) ||
            (scene.text && scene.text.toLowerCase().includes(k))
        );
        this._isRemote = isRemote;

        const mediumInstruction = isRemote
            ? ({ es: "\n- MEDIO: Conversación por TELÉFONO o MENSAJES.", ja: "\n- 会話形式: 電話またはメッセージでやり取りしている。", en: "\n- MEDIUM: Communicating via PHONE/MESSENGER.", fr: "\n- MOYEN : Échange par TÉLÉPHONE ou MESSAGERIE.", de: "\n- MEDIUM: Gespräch per TELEFON oder CHAT.", pt: "\n- MEIO: Conversa por TELEFONE ou MENSAGENS." }[lang] || "\n- 현재 전화나 메시지로 연락하고 있습니다.")
            : ({ es: "\n- MEDIO: Conversación CARA A CARA.", ja: "\n- 会話形式: 対面で話している。", en: "\n- MEDIUM: Talking FACE-TO-FACE.", fr: "\n- MOYEN : Conversation EN FACE À FACE.", de: "\n- MEDIUM: Persönliches Gespräch VOR ORT.", pt: "\n- MEIO: Conversa PRESENCIAL." }[lang] || "\n- 현재 서로 마주 보고 이야기하고 있습니다.");

        // 시스템 프롬프트 생성
        const rawSystemPrompt = window.buildSystemPrompt ? window.buildSystemPrompt({
            isEn,
            lang,
            sceneName: charKey,
            displayName: scene.name,
            locationName,
            context: scene.context || ({ es: "La escena continúa a partir de la última intervención del protagonista.", ja: "主人公が直前に発した言葉や取った行動を受けて、場面を続けます。", en: "Continuing the scene from the protagonist's latest line or action.", fr: "La scène reprend après la dernière parole ou action du protagoniste.", de: "Die Szene wird nach der letzten Äußerung oder Handlung des Protagonisten fortgesetzt.", pt: "A cena continua a partir da última fala ou ação do protagonista." }[lang] || "주인공이 방금 한 말이나 행동에서 장면을 이어갑니다."),
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
                    ? "<b>ヒント：</b>「<i>*笑顔で* ねえ</i>」のように、雰囲気や状況も添えてみてね。"
                    : "<b>ヒント：</b>「<i>*手を握って* 行こう</i>」のように、動作も添えて話してみてね。",
                en: isRemote
                    ? "<b>Tip:</b> Describe the tone in asterisks, e.g., <i>*smiling* Hey...</i>"
                    : "<b>Tip:</b> Describe the scene or an action, e.g., <i>*holds her hand* Let's go.</i>",
                fr: isRemote
                    ? "<b>Astuce :</b> Décrivez le ton entre astérisques, par ex. : <i>*en souriant* Salut…</i>"
                    : "<b>Astuce :</b> Décrivez la scène ou les actions, par ex. : <i>*prend la main* Allons-y.</i>",
                de: isRemote
                    ? "<b>Tipp:</b> Beschreibe den Ton in Sternchen, z. B. <i>*lächelt* Hey ...</i>"
                    : "<b>Tipp:</b> Beschreibe die Szene oder eine Handlung, z. B. <i>*nimmt ihre Hand* Komm mit.</i>",
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
            this.stateManager.setChatMemory(charKey, startHistory);
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
        const confirmMsg = { es: "¿Terminar esta conversación y continuar?", ja: "この会話を終えて、次のシーンへ進みますか？", en: "End this conversation and continue?", fr: "Terminer cette conversation et continuer ?", de: "Dieses Gespräch beenden und fortfahren?", pt: "Encerrar esta conversa e continuar?" }[lang] || "이 장면 삽입을 끝내고 다음 장면으로 넘어가시겠습니까?";

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

            const endMsg = { es: "<br><br>(La conversación ha terminado. Haz clic para continuar.)", ja: "<br><br>（会話が終了しました。画面をクリックして先へ進んでください。）", en: "<br><br>(The conversation has ended. Click to continue.)", fr: "<br><br>(La conversation est terminée. Cliquez pour continuer.)", de: "<br><br>(Das Gespräch ist beendet. Klicke, um fortzufahren.)", pt: "<br><br>(A conversa terminou. Clique para continuar.)" }[lang] || "<br><br>(장면 삽입이 종료되었습니다. 화면을 클릭하여 계속하세요.)";
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

    /**
     * 새 게임 시작 시 본편 프리토킹의 실행 중 상태와 로컬 문맥만 초기화합니다.
     * 원격 D1 로그와 별도 갤러리 메모리는 이 시스템에서 삭제하지 않습니다.
     */
    resetForNewGame() {
        this._invalidateFreeTalkContext();
        this.isFreeTalking = false;
        this.isProcessingChat = false;
        this.freeTalkTurns = 0;
        this.currentMaxTurns = DEFAULT_MAX_FREE_TALK_TURNS;
        this.freeTalkHistory = [];
        this.currentSceneId = null;
        this.currentCharKey = null;
        this._isRemote = false;
        this._activeChatTurnId = null;
        this.uiManager?.removeStagedImage?.();
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
        const completeHistory = Array.isArray(messages) ? messages.slice() : [];
        const lastMessage = completeHistory[completeHistory.length - 1];
        if (lastMessage?.role === 'user' && lastMessage.content === text) return completeHistory;
        return [...completeHistory, { role: 'user', content: text }];
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
        const playerLabelByLang = { en: "Me", es: "Yo", ja: "俺", fr: "Moi", de: "Ich", pt: "Eu" };
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
            const imageLang = String(window.GAME_LANG || document.documentElement.lang || 'ko')
                .toLowerCase()
                .split('-')[0];
            img.alt = {
                ko: '첨부 이미지',
                en: 'Attached image',
                es: 'Imagen adjunta',
                ja: '添付画像',
                fr: 'Image jointe',
                de: 'Angehängtes Bild',
                pt: 'Imagem anexada'
            }[imageLang] || 'Attached image';
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
            // 같은 회차에서 이 캐릭터와 나눈 본편 대화 전체를 순서대로 전달합니다.
            this._assertRequestContext(requestContext);
            const _completeHistory = this._sanitizeDainOutfitHistory(this._buildWindowedHistory(requestHistory, charKey), charKey);
            // 토큰 절감: 최근 5개 메시지 외의 이미지는 [이전 사진]으로 치환
            let _optimized = (typeof window.optimizeImageHistory === 'function')
                ? window.optimizeImageHistory(_completeHistory, 5)
                : _completeHistory;
            const _latestUserCanonBlock = buildCupidLatestUserCanonBlock(_optimized, _lang, finalContent);
            const _inWorldUserRoleBlock = this._buildInWorldUserRoleBlock(_optimized);
            const _recentRepetitionGuard = buildCupidRecentExpressionRepetitionGuard(_optimized, _lang);
            const _currentAffinity = this.stateManager.getAffinity
                ? this.stateManager.getAffinity(charKey)
                : (this.stateManager.stats?.[charKey]?.affinity || 0);
            const _isDatingCurrentForBoundary = this.stateManager.getFlag(`isDating_${charKey}`) || this.stateManager.getFlag(`isDating_${scene.name}`);
            const _affinityIntimacyProgressionPatch = buildCupidAffinityIntimacyProgressionPatch(_lang, _currentAffinity, _isDatingCurrentForBoundary);
            const _lowInformationContinuationRule = typeof window.buildCupidLowInformationContinuationRule === 'function'
                ? window.buildCupidLowInformationContinuationRule(finalContent, _lang)
                : '';
            const _runtimePromptPatch = `${_latestUserCanonBlock}${_inWorldUserRoleBlock}${_affinityIntimacyProgressionPatch}${_recentRepetitionGuard}${_lowInformationContinuationRule}`;
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
            const aiEndpoint = (typeof AI_API_ENDPOINT !== 'undefined' && AI_API_ENDPOINT)
                ? AI_API_ENDPOINT
                : 'https://openrouter-api.yama5993.workers.dev/';
            _lastAiEndpoint = aiEndpoint;
            const fallbackEndpoint = ''; // AI text must not fall back to the legacy Gemini endpoint.
            const requestCupidReplyData = async (messages) => {
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
                        messages,
                        model: (typeof AI_MODEL_ID !== 'undefined' && AI_MODEL_ID) ? AI_MODEL_ID : (window.AI_MODEL_ID || undefined),
                        characterId: charKey,
                        requestType: "character",
                        chatMode: "single",
                        outputLanguage: _lang,
                        cacheKey: _cacheKey,
                        ...(_turnMeta || {})
                    })
                };
                const fetchWithTransientRetry = async (endpoint) => {
                    let lastError = null;
                    for (let attempt = 0; attempt < 3; attempt += 1) {
                        try {
                            const response = await fetch(endpoint, requestInit);
                            if (!shouldRetryFreeTalkAiResponse(response)
                                || navigator.onLine === false
                                || attempt >= 2) {
                                return response;
                            }
                            try { await response.body?.cancel?.(); } catch (_) { /* best-effort cleanup */ }
                        } catch (error) {
                            lastError = error;
                            this._assertRequestContext(requestContext);
                            const isTransientFetchError = error instanceof TypeError
                                || /^(?:Failed to fetch|Load failed|NetworkError)$/i.test(error?.message || '');
                            if (!isTransientFetchError || navigator.onLine === false || attempt >= 2) throw error;
                        }
                        await new Promise(resolve => window.setTimeout(resolve, 400 * (attempt + 1)));
                        this._assertRequestContext(requestContext);
                    }
                    throw lastError;
                };
                let response;
                let primaryError = null;
                _lastAiEndpoint = aiEndpoint;
                try {
                    response = await fetchWithTransientRetry(aiEndpoint);
                    this._assertRequestContext(requestContext);
                } catch (error) {
                    this._assertRequestContext(requestContext);
                    primaryError = error;
                }

                const canFallback = (
                    primaryError instanceof TypeError || shouldFailOverFreeTalkAiResponse(response)
                ) && fallbackEndpoint && fallbackEndpoint !== aiEndpoint;
                if (canFallback) {
                    _lastAiEndpoint = fallbackEndpoint;
                    response = await fetchWithTransientRetry(fallbackEndpoint);
                    this._assertRequestContext(requestContext);
                } else if (primaryError) {
                    throw primaryError;
                }

                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return await response.json();
            };

            // JSON 파싱
            let data = await requestCupidReplyData(_optimized);
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
            let parsed = this.parseJsonResponse(reply);

            for (let repairAttempt = 0; repairAttempt < 2; repairAttempt += 1) {
                const qualityIssue = window.getCupidRoleplayQualityIssue?.(parsed, {
                    lang: _lang,
                    charKey,
                    recentMessages: _optimized,
                    latestUserText: finalContent
                });
                if (!qualityIssue?.shouldRetry) break;

                console.warn('[Cupid FreeTalk] Rejected roleplay draft; regenerating before display', qualityIssue);
                const repairBlock = window.buildCupidRoleplayQualityRepairBlock?.(
                    qualityIssue,
                    _lang,
                    charKey
                );
                if (!repairBlock || !_optimized[0] || _optimized[0].role !== 'system') break;

                let repairMessages = [
                    {
                        ..._optimized[0],
                        content: appendFreeTalkDynamicContext(_optimized[0].content, repairBlock)
                    },
                    ..._optimized.slice(1)
                ];
                repairMessages = this._forceLatestUserMessageLast(repairMessages, finalContent);
                data = await requestCupidReplyData(repairMessages);
                this._assertRequestContext(requestContext, data);
                const repairedContent = data?.choices?.[0]?.message?.content;
                reply = typeof repairedContent === 'string' ? repairedContent.trim() : '';
                if (!reply) throw new Error('AI response was empty. Please try again.');
                parsed = this.parseJsonResponse(reply);
            }

            let finalQualityIssue = window.getCupidRoleplayQualityIssue?.(parsed, {
                lang: _lang,
                charKey,
                recentMessages: _optimized,
                latestUserText: finalContent
            });
            if (finalQualityIssue?.shouldRetry) {
                const recovered = window.recoverCupidRoleplayQualityFallback?.(parsed, {
                    lang: _lang,
                    charKey,
                    recentMessages: _optimized,
                    latestUserText: finalContent
                });
                if (recovered) {
                    console.warn('[Cupid FreeTalk] Kept the valid response segments after quality retries were exhausted', recovered.qualityRecovery);
                    parsed = recovered;
                    finalQualityIssue = window.getCupidRoleplayQualityIssue?.(parsed, {
                        lang: _lang,
                        charKey,
                        recentMessages: _optimized,
                        latestUserText: finalContent
                    });
                }
            }
            if (finalQualityIssue?.shouldRetry) {
                const qualityError = new Error('AI response failed roleplay quality validation. Please try again.');
                qualityError.reason = 'ROLEPLAY_QUALITY_REJECTED';
                qualityError.qualityIssue = finalQualityIssue;
                throw qualityError;
            }

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
                const assistantRenderReceipt = this.dialogueSystem.getChatRenderReceipt(
                    reply,
                    scene.name,
                    parsedSegments
                );

                // 화면 렌더가 성공한 응답에만 표정과 호감도를 적용한다.
                this._assertRequestContext(requestContext, data);
                this.applyExpression(parsed.expression, scene);
                const affinityResult = this.applyAffinity(parsed.affinity, scene);
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
                        context: '1:1',
                        affinityChange: affinityResult?.change,
                        affinityCurrent: affinityResult?.value,
                        assistantRenderReceipt
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
            const langErr = window.GAME_LANG || document.documentElement.lang || 'ko';

            const isTransientTransportFailure = error instanceof TypeError
                || /^(?:Failed to fetch|Load failed|NetworkError|HTTP (?:408|425|429|5\d\d))$/i.test(error?.message || '');
            const isOfflineTransportFailure = navigator.onLine === false
                && (error instanceof TypeError || /^(?:Failed to fetch|Load failed|NetworkError)$/i.test(error?.message || ''));
            if (isTransientTransportFailure) console.warn("AI Chat transport interruption:", error?.message || error);
            else console.error("AI Chat Error:", error);
            if (typeof window.logCupidError === 'function' && !isOfflineTransportFailure) {
                window.logCupidError(error, {
                    source: 'cupid-freetalk',
                    errorType: error?.reason === 'ROLEPLAY_QUALITY_REJECTED'
                        ? 'freetalk_roleplay_quality_rejected'
                        : (/^HTTP\s+\d+/.test(error?.message || '') ? 'freetalk_http_error' : 'freetalk_request_failed'),
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
                        historyLength: requestHistory.length,
                        qualityReason: error?.qualityIssue?.reason || ''
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
            [/制服の裾/g, 'スポーティーな服の裾'],
            [/制服の袖/g, '黒いアームスリーブ'],
            [/(?:制服のスカート|制服スカート)/g, 'スポーツ用のボトムス'],
            [/ブレザー/g, 'スポーティーな上着'],
            [/ネクタイ/g, 'ウェアの襟元'],
            [/制服/g, 'スポーティーな服'],
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

    /** 같은 회차의 캐릭터별 본편 대화 전체를 원래 순서대로 반환합니다. */
    _buildWindowedHistory(history = this.freeTalkHistory, charKey = this.currentCharKey) {
        if (!Array.isArray(history) || history.length === 0) return [];
        this.stateManager.clearChatPromptEpoch?.(charKey);
        return history.slice();
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
                return `\n\n[사용자 배역]\n사용자 캐릭터는 "${roleName}"입니다. ${roleName} 이름표로 적힌 말·행동·침묵은 이미 일어난 사용자 쪽 장면으로 받습니다. 그 맥락에서 ${roleName}의 자연스러운 반응·감정·속마음을 추론해 서술할 수 있지만, 사용자가 명시한 상태·선택·동의·거절과 충돌시키지는 마세요.`;
            }

            return `\n\n[User character]\nThe user character is "${roleName}". Treat lines, actions, and silences labeled ${roleName} as already performed by the user side. You may infer and narrate a natural response, emotion, or inner thought for ${roleName} from that context, but keep it compatible with any state, choice, consent, or refusal the user explicitly states.`;
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

        const locale = String(window.GAME_LANG || document.documentElement.lang || 'ko')
            .toLowerCase()
            .split('-')[0];
        const interestText = {
            ko: '흥미롭네',
            ja: '面白いね。',
            en: 'Interesting.',
            es: 'Qué interesante.',
            fr: 'Intéressant.',
            de: 'Interessant.',
            pt: 'Interessante.'
        }[locale] || 'Interesting.';
        let out = text;

        // Keep stat changes internal to JSON fields. Never let them appear as character dialogue.
        out = out
            .replace(/\bInterest\s*[+-]\s*\d+\b\.?/gi, interestText)
            .replace(/\bAffinity\s*[+-]\s*\d+\b\.?/gi, '')
            .replace(/\bSTAT(?:S)?\s*[+-]\s*\d+\b\.?/gi, '')
            .replace(/(?:흥미|관심)\s*[+-]\s*\d+\s*(?:이니까|이라서|라고|이라며|이라니까)?/g, (match) => (
                /이니까|이라서/.test(match) ? '재미있으니까' :
                /라고|이라며|이라니까/.test(match) ? '흥미롭다며' :
                '흥미롭네'
            ))
            .replace(/(?:호감도|호감|친밀도)\s*[+-]\s*\d+\s*(?:이니까|이라서|라고|이라며|이라니까)?/g, '')
            .replace(/(?:興味|関心)\s*[+-]\s*\d+/g, locale === 'ja' ? '面白いね。' : interestText)
            .replace(/(?:好感度|好感|親密度)\s*[+-]\s*\d+/g, '')
            .replace(/(?:Δ|delta)\s*[+-]\s*\d+/gi, '')
            .replace(/\s{2,}/g, ' ')
            .trim();

        // Replace exact measured pauses with qualitative beats in the active locale.
        const pauseBeat = {
            ja: '*しばし沈黙が流れる。*',
            en: '*A brief silence follows.*',
            es: '*Se hace un breve silencio.*',
            fr: '*Un bref silence s’installe.*',
            de: '*Für einen Moment herrscht Stille.*',
            pt: '*Um breve silêncio se instala.*'
        }[locale] || '*잠깐 정적이 흐른다.*';
        const shortPause = {
            ja: 'しばらく',
            en: 'a brief pause',
            es: 'una breve pausa',
            fr: 'un bref instant',
            de: 'einen Moment',
            pt: 'uma breve pausa'
        }[locale] || '잠깐';
        out = out
            .replace(/\*\s*\d+(?:[.,]\d+)?\s*(?:초간|초|秒|sec(?:onds?)?|second(?:s)?|seg(?:undos?)?|Sek(?:unden)?)\.?\s*\*/gi, pauseBeat)
            .replace(/\b\d+(?:[.,]\d+)?\s*(?:sec(?:onds?)?|second(?:s)?|seg(?:undos?)?|Sek(?:unden)?)\b\.?/gi, shortPause)
            .replace(/\d+(?:[.,]\d+)?\s*(?:초간|초|秒)\.?/g, shortPause);

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

            throw new Error('Unsupported Cupid response JSON schema');
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
        if (!window.CHARACTER_EXPRESSIONS) return;
        const charExprs = typeof getCharacterExpressionSet === 'function'
            ? getCharacterExpressionSet(scene.name)
            : window.CHARACTER_EXPRESSIONS[scene.name];
        const name = CupidFreeTalkCore.normalizeAvailableExpression(
            exprName,
            Object.keys(charExprs || {})
        );
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
            img.alt = '';
            img.setAttribute('aria-hidden', 'true');
            centerSlot.appendChild(img);
        }
    }

    /**
     * 📊 applyAffinity - JSON 필드에서 받은 호감도 변화량 적용
     * @param {number} change - 호감도 변화량 (정수)
     * @param {Object} scene - 현재 씬 데이터
     */
    applyAffinity(change, scene) {
        const charKey = this.charNameMap[scene.name] || scene.name;
        if (!this.stateManager.stats[charKey]) return null;

        const previousValue = this.stateManager.getAffinity(charKey);
        // 게임·갤러리 공용 턴당 호감도 범위: -50 ~ +5
        const requestedChange = CupidFreeTalkCore.normalizeAffinityChange(change);
        if (requestedChange === 0) {
            return { change: 0, value: previousValue, requestedChange: 0 };
        }

        const newValue = this.stateManager.changeAffinity(charKey, requestedChange);
        const actualChange = newValue - previousValue;
        if (actualChange !== 0) this.uiManager.showAffinityChange(actualChange, charKey);
        this.galleryManager.updateMaxAffinity(charKey, newValue);
        this.galleryManager.checkAffinityUnlock(charKey, newValue);
        return { change: actualChange, value: newValue, requestedChange };
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
                        img.alt = '';
                        img.setAttribute('aria-hidden', 'true');
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
            const endMsg = { es: "<br><br>(La conversación ha terminado. Haz clic para continuar.)", ja: "<br><br>（会話が終了しました。画面をクリックして先へ進んでください。）", en: "<br><br>(The conversation has ended. Click to continue.)", fr: "<br><br>(La conversation est terminée. Cliquez pour continuer.)", de: "<br><br>(Das Gespräch ist beendet. Klicke, um fortzufahren.)", pt: "<br><br>(A conversa terminou. Clique para continuar.)" }[langEnd] || "<br><br>(장면 삽입이 종료되었습니다. 화면을 클릭하여 계속하세요.)";
            this.uiManager.messageEl.innerHTML += endMsg;
        }, 500);
    }
}

window.FreeTalkSystem = FreeTalkSystem;
