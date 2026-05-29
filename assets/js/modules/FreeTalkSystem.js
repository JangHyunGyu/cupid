// ============================================================================================
// FreeTalkSystem.js - AI 자유 대화 시스템 모듈
// ============================================================================================
// 📌 이 파일은 main.js에서 FreeTalkSystem 클래스를 분리한 모듈입니다.
//    AI API를 호출하여 캐릭터와 자유롭게 대화할 수 있는 시스템을 담당합니다.
//
// 📦 의존성:
//    - config.js → CHAR_NAME_MAP, DEFAULT_MAX_FREE_TALK_TURNS, SEND_ICON, API_ENDPOINT, getAssetUrl
//    - prompts.js → FLAG_MEMORIES, getPromptData, buildSystemPrompt, getFallbackReply, CHARACTER_EXPRESSIONS
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

        /** 현재 씬의 통신 매체 (대면 vs 원격) — 캐시 키 분기용 */
        this._isRemote = false;

        /** 캐릭터 이름 매핑 (공통 상수 참조) */
        this.charNameMap = CHAR_NAME_MAP;
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
        const header = { es: "\n\n[Eventos y Recuerdos Recientes]:\n", ja: "\n\n[最近の出来事と記憶]:\n", en: "\n\n[Recent Events & Memories]:\n", fr: "\n\n[Événements et Souvenirs Récents] :\n", de: "\n\n[Aktuelle Ereignisse & Erinnerungen]:\n", pt: "\n\n[Eventos e Memórias Recentes]:\n" }[lang] || "\n\n[최근 사건 및 기억]:\n";
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
    getSocialContext(currentCharName, isEn) {
        return '';

        const lang = window.GAME_LANG || document.documentElement.lang || 'ko';

        // 각 캐릭터의 기본 설명
        const charactersByLang = {
            en: {
                "Seoyeon": "Student Council President. Kind but lonely.",
                "Yuna": "Mysterious girl. Interested in the user's 'light'.",
                "Dain": "Energetic girl. Close friend of the user.",
                "Homeroom Teacher": "Professional but has a clumsy side.",
                "Nurse": "A mature and playful health teacher who cares deeply for her students."
            },
            es: {
                "Seoyeon": "Presidenta del consejo estudiantil. Amable pero solitaria.",
                "Yuna": "Chica misteriosa. Interesada en la 'luz' del usuario.",
                "Dain": "Chica enérgica. Amiga cercana del usuario.",
                "Profesora": "Profesional pero tiene un lado torpe.",
                "Enfermera": "Una profesora de salud madura y juguetona que se preocupa profundamente por sus estudiantes."
            },
            ja: {
                "ソヨン": "生徒会長。みんなに優しいが孤独を感じやすい。",
                "ユナ": "神秘的な少女。主人公の「光」に執着する。",
                "ダイン": "活発な少女。主人公と気楽な友達関係。",
                "担任先生": "プロフェッショナルな教師だがドジな一面がある。",
                "保健先生": "魅力的で茶目っ気のある保健教師。"
            },
            fr: {
                "Seoyeon": "Présidente du conseil des élèves. Gentille mais solitaire.",
                "Yuna": "Fille mystérieuse. Intéressée par la 'lumière' de l'utilisateur.",
                "Dain": "Fille énergique. Amie proche de l'utilisateur.",
                "Professeur Principal": "Professionnelle mais a un côté maladroit.",
                "Infirmière Scolaire": "Une enseignante de santé mature et joueuse."
            },
            de: {
                "Seoyeon": "Schülerratspräsidentin. Freundlich, aber einsam.",
                "Yuna": "Mysteriöses Mädchen. Interessiert am 'Licht' des Benutzers.",
                "Dain": "Energisches Mädchen. Enge Freundin des Benutzers.",
                "Lehrerin": "Professionell, aber hat eine tollpatschige Seite.",
                "Schulkrankenschwester": "Eine reife und verspielte Gesundheitslehrerin."
            },
            pt: {
                "Seoyeon": "Presidente do grêmio estudantil. Gentil, mas solitária.",
                "Yuna": "Garota misteriosa. Interessada na 'luz' do usuário.",
                "Dain": "Garota animada. Amiga próxima do usuário.",
                "Professora": "Profissional, mas tem um lado desastrado.",
                "Enfermeira": "Uma professora de saúde madura e brincalhona que se preocupa com seus alunos."
            },
            ko: {
                "서연": "학생회장. 모두에게 친절하지만 외로움을 잘 탐.",
                "유나": "신비로운 소녀. 주인공의 '빛'에 집착함.",
                "다인": "활기찬 소녀. 주인공과 편한 친구 사이.",
                "담임선생님": "전문적인 교사지만 허당끼가 있음.",
                "보건선생님": "매혹적이고 장난기 많은 보건 교사."
            }
        };

        const characters = charactersByLang[lang] || charactersByLang.ko;

        // 현재 대화 상대 제외한 다른 캐릭터들 정보 생성
        const otherChars = Object.entries(characters)
            .filter(([name]) => name !== currentCharName)
            .map(([name, desc]) => {
                const charKey = this.charNameMap[name] || name;
                const affinity = this.stateManager.getAffinity(charKey);

                // 관계 상태 텍스트 생성
                let status = "";
                if (this.stateManager.getFlag(`isDating_${charKey}`) || this.stateManager.getFlag(`isDating_${name}`)) {
                    status = { es: " (Actualmente SALIENDO con el usuario)", ja: " (現在ユーザーと交際中)", en: " (Currently dating the user)", fr: " (Actuellement en COUPLE avec l'utilisateur)", de: " (Derzeit mit dem Benutzer ZUSAMMEN)", pt: " (Atualmente NAMORANDO com o usuário)" }[lang] || " (현재 사용자와 사귀는 사이)";
                } else if (affinity >= 70) {
                    status = { es: " (Convencida de estar saliendo con el usuario)", ja: " (ユーザーと交際していると確信)", en: " (Certain they're dating the user)", fr: " (Convaincue de sortir avec l'utilisateur)", de: " (Überzeugt, mit dem Benutzer zusammen zu sein)", pt: " (Convencida de que está namorando com o usuário)" }[lang] || " (사용자와 사귀는 사이라고 확신함)";
                } else if (affinity >= 50) {
                    status = { es: " (Sospecha que está saliendo con el usuario)", ja: " (ユーザーと交際しているか疑っている)", en: " (Suspects they're dating the user)", fr: " (Suspecte qu'elle sort avec l'utilisateur)", de: " (Vermutet, mit dem Benutzer zusammen zu sein)", pt: " (Suspeitando que está namorando com o usuário)" }[lang] || " (사용자와 사귀는 사이인지 의심함)";
                }

                const affinityText = { es: ` (Afinidad: ${affinity})`, ja: ` (好感度: ${affinity})`, en: ` (Affinity: ${affinity})`, fr: ` (Affinité : ${affinity})`, de: ` (Zuneigung: ${affinity})`, pt: ` (Afinidade: ${affinity})` }[lang] || ` (호감도: ${affinity})`;
                return `- ${name}: ${desc}${affinityText}${status}`;
            })
            .join("\n");

        const header = { es: "\n\n[Otros Personajes en la Escuela y Tu Conocimiento]:\n", ja: "\n\n[学校の他のキャラクターとあなたの認知状態]:\n", en: "\n\n[Other Characters in the Current Setting & What You Know]:\n", fr: "\n\n[Autres Personnages de l'École et Votre Perception] :\n", de: "\n\n[Andere Charaktere in der Schule & Dein Bewusstsein]:\n", pt: "\n\n[Outros Personagens na Escola e Sua Percepção]:\n" }[lang] || "\n\n[현재 설정의 다른 인물들 및 당신의 인지 상태]:\n";

        // 질투 반응 지침
        const jealousyInstruction = { es: "\nNota: Eres consciente de la relación del usuario con otros. Si su afinidad es alta (50+), puedes sentir celos, sospechas u obsesión según tu personalidad.", ja: "\n注意: あなたはユーザーと他のキャラクターとの関係を認知しています。他のキャラクターの好感度が高い場合(50以上)、あなたの性格に応じて嫉妬、疑念、または執着を見せることがあります。", en: "\nNote: You are aware of the user's relationship with others. If their affinity is high (50+), you may feel jealous, suspicious, or obsessive depending on your personality.", fr: "\nNote : Vous êtes consciente de la relation de l'utilisateur avec les autres. Si leur affinité est élevée (50+), vous pouvez ressentir de la jalousie.", de: "\nHinweis: Du bist dir der Beziehung des Benutzers zu anderen bewusst. Wenn deren Zuneigung hoch ist (50+), kannst du je nach deiner Persönlichkeit eifersüchtig, misstrauisch oder besessen reagieren.", pt: "\nNota: Você está ciente do relacionamento do usuário com outros. Se a afinidade deles for alta (50+), você pode sentir ciúmes, suspeitas ou obsessão dependendo da sua personalidade." }[lang] || "\n참고: 당신은 사용자와 다른 캐릭터들의 관계를 인지하고 있습니다. 다른 캐릭터의 호감도가 높을 경우(50 이상), 당신의 성격에 따라 질투, 의심, 또는 집착을 보일 수 있습니다.";

        return header + otherChars + jealousyInstruction;
    }

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

        this.isFreeTalking = true;
        this.freeTalkTurns = 0;
        this.currentMaxTurns = scene.maxTurns || DEFAULT_MAX_FREE_TALK_TURNS;
        this.currentSceneId = sceneId;

        const lang = window.GAME_LANG || document.documentElement.lang || 'ko';
        const isEn = lang === 'en';
        const isEs = lang === 'es';
        const isJa = lang === 'ja';

        // 게임 내 이벤트 기억 수집
        const gameContext = this.getGameContext(scene.name, lang);

        // 다른 캐릭터들과의 관계 정보
        const socialContext = this.getSocialContext(scene.name, isEn);

        // 이전 대화 기록 불러오기 (같은 캐릭터와의 이전 대화)
        this.freeTalkHistory = [...this.stateManager.getChatMemory(scene.name)];

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
        const charKey = this.charNameMap[scene.name] || scene.name;
        this.freeTalkHistory = this._sanitizeDainOutfitHistory(this.freeTalkHistory, charKey);
        this.freeTalkHistory = this._sanitizeVisibleArtifactsHistory(this.freeTalkHistory);
        const knowsName = this.stateManager.getFlag(`knows_name_${charKey.toLowerCase()}`);
        const charStats = this.stateManager.stats[charKey] || { affinity: 0 };

        // 🔧 프롬프트 데이터 가져오기 (prompts.js에서)
        const promptData = window.getPromptData ? window.getPromptData(lang !== 'ko', this.stateManager.playerName) : {};

        // 연인 관계 가이드라인
        let datingGuideline = "";
        const isDatingCurrent = this.stateManager.getFlag(`isDating_${charKey}`) || this.stateManager.getFlag(`isDating_${scene.name}`);

        if (isDatingCurrent) {
            datingGuideline = ({
                ko: `\n- 특별 지침: 당신은 현재 사용자와 사귀는 사이입니다. 매우 친밀하고 애정 어린 호칭을 사용하세요.`,
                en: `\n- SPECIAL: You are currently DATING the user. Use extremely intimate and affectionate nicknames regardless of the affinity tiers below.`,
                es: `\n- ESPECIAL: Actualmente estás SALIENDO con el usuario. Usa apodos extremadamente íntimos y cariñosos.`,
                ja: `\n- 特別指示: あなたは現在ユーザーと付き合っています。非常に親密で愛情のこもった呼び方を使ってください。`,
                fr: `\n- SPÉCIAL : Vous sortez actuellement avec l'utilisateur. Utilisez des surnoms extrêmement intimes et affectueux.`,
                pt: `\n- ESPECIAL: Você está atualmente NAMORANDO com o usuário. Use apelidos extremamente íntimos e carinhosos.`
            }[lang] || `\n- SPECIAL: You are currently DATING the user. Use extremely intimate and affectionate nicknames regardless of the affinity tiers below.`);

            // 양다리 감지
            const otherDatingChars = [];

            if (otherDatingChars.length > 0) {
                datingGuideline += ({
                    ko: `\n- 질투 지침: 사용자가 다른 사람들(${otherDatingChars.join(", ")})과도 사귀고 있습니다.`,
                    en: `\n- JEALOUSY: You noticed the user is also dating others (${otherDatingChars.join(", ")}).`,
                    es: `\n- CELOS: Has notado que el usuario también está saliendo con otros (${otherDatingChars.join(", ")}).`,
                    ja: `\n- 嫉妬指示: ユーザーが他の人(${otherDatingChars.join("、")})とも付き合っていることに気づいています。`,
                    fr: `\n- JALOUSIE : Vous avez remarqué que l'utilisateur sort aussi avec d'autres (${otherDatingChars.join(", ")}).`,
                    pt: `\n- CIÚMES: Você percebeu que o usuário também está namorando com outros (${otherDatingChars.join(", ")}).`
                }[lang] || `\n- JEALOUSY: You noticed the user is also dating others (${otherDatingChars.join(", ")}).`);
            }
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
            ? ({ es: "\n- MEDIO: Comunicándose por TELÉFONO/MENSAJERÍA.", ja: "\n- メディア: 電話/メッセンジャーで連絡中。", en: "\n- MEDIUM: Communicating via PHONE/MESSENGER.", fr: "\n- MOYEN : Communication par TÉLÉPHONE/MESSAGERIE.", de: "\n- MEDIUM: Kommunikation per TELEFON/MESSENGER.", pt: "\n- MEIO: Comunicando via TELEFONE/MENSAGEIRO." }[lang] || "\n- 매체 지침: 전화/메시지로 연락 중.")
            : ({ es: "\n- MEDIO: Hablando CARA A CARA.", ja: "\n- メディア: 対面で会話中。", en: "\n- MEDIUM: Talking FACE-TO-FACE.", fr: "\n- MOYEN : Conversation EN PERSONNE.", de: "\n- MEDIUM: Gespräch VON ANGESICHT ZU ANGESICHT.", pt: "\n- MEIO: Conversando PESSOALMENTE." }[lang] || "\n- 매체 지침: 대면 대화 중.");

        // 시스템 프롬프트 생성
        const rawSystemPrompt = window.buildSystemPrompt ? window.buildSystemPrompt({
            isEn,
            lang,
            sceneName: charKey,
            displayName: scene.name,
            locationName,
            context: scene.context || ({ es: "Continuando la escena con el protagonista.", ja: "主人公の挿入に続いて場面を進行中です。", en: "Continuing the scene from the protagonist's latest insert.", fr: "La scène continue après l'insertion du protagoniste.", de: "Die Szene wird nach dem Einsatz des Protagonisten fortgesetzt.", pt: "Continuando a cena após a inserção do protagonista." }[lang] || "주인공의 삽입에 이어 장면을 진행 중입니다."),
            affinity: charStats.affinity,
            extraGuideline: scene.extra_guideline || "",
            gameContext,
            socialContext,
            mediumInstruction,
            isRemote,
            promptData,
            currentMaxTurns: this.currentMaxTurns,
            playerName: this.stateManager.playerName,
            knowsName,
            datingGuideline
        }) : "";
        const systemPrompt = normalizeFreeTalkPromptBlockForCache(rawSystemPrompt);

        this.freeTalkHistory = [{ role: "system", content: systemPrompt }, ...this.freeTalkHistory.filter(m => m.role !== "system")];

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
            await this.dialogueSystem.typeText(scene.text, scene.name);
            this.freeTalkHistory.push({ role: "assistant", content: scene.text });
        }

        // 초기 대사 출력 후 입력창에 포커스 (모바일 키보드 활성화)
        if (this.uiManager.chatInput && (!window.isCupidDesktopPointer || window.isCupidDesktopPointer())) {
            this.uiManager.chatInput.focus();
        }
    }

    /** 프리토킹 스킵 */
    async skipFreeTalk() {
        if (!this.isFreeTalking) return;

        const lang = window.GAME_LANG || document.documentElement.lang || 'ko';
        const confirmMsg = { es: "¿Cerrar esta inserción de escena y continuar?", ja: "この場面挿入を終了して次のシーンに進みますか？", en: "Close this scene insert and proceed?", fr: "Terminer cette insertion de scène et continuer ?", de: "Diesen Szeneneinsatz beenden und fortfahren?", pt: "Encerrar esta inserção de cena e continuar?" }[lang] || "이 장면 삽입을 끝내고 다음 장면으로 넘어가시겠습니까?";

        const confirmed = await this.uiManager.showModal(confirmMsg);
        if (confirmed) {
            // 타이핑 중이면 중단
            if (this.dialogueSystem.isCurrentlyTyping()) {
                this.dialogueSystem.requestSkip();
            }
            this.freeTalkTurns = this.currentMaxTurns;
            this.stateManager.setFlag(`messaged_${this.currentSceneId}`);
            this.uiManager.chatContainer.style.display = 'none';
            this.isFreeTalking = false;
            this.isProcessingChat = false;

            const endMsg = { es: "<br><br>(La inserción de escena ha terminado.)", ja: "<br><br>（場面挿入が終了しました。）", en: "<br><br>(Scene insert ended. Click to continue.)", fr: "<br><br>(L'insertion de scène est terminée.)", de: "<br><br>(Szeneneinsatz beendet. Klicke, um fortzufahren.)", pt: "<br><br>(A inserção de cena terminou. Clique para continuar.)" }[lang] || "<br><br>(장면 삽입이 종료되었습니다. 화면을 클릭하여 계속하세요.)";
            this.uiManager.messageEl.innerHTML += endMsg;
        }
    }

    /** 폴백 응답 생성 */
    getFallbackReply(charName, isEn, getSceneFn) {
        const charKey = this.charNameMap[charName] || charName;
        const affinity = this.stateManager.getAffinity(charKey);
        const isDating = this.stateManager.getFlag(`isDating_${charKey}`) || this.stateManager.getFlag(`isDating_${charName}`);

        const scene = getSceneFn(this.currentSceneId);
        const remoteKeywords = ["연락", "메시지", "전화", "톡", "문자", "Contact", "Message", "Call", "Text", "전송"];
        const isRemote = scene && remoteKeywords.some(k =>
            (scene.context && scene.context.includes(k)) ||
            (scene.buttonText && scene.buttonText.includes(k)) ||
            (scene.text && scene.text.includes(k))
        );

        // prompts.js의 함수 호출
        if (window.getFallbackReply) {
            return window.getFallbackReply(charKey, isEn, isDating, affinity, isRemote, this.stateManager.playerName);
        }
        return "...";
    }

    /** 채팅 메시지 전송 */
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

        const scene = getSceneFn(this.currentSceneId);
        if (!scene) return;

        this.isProcessingChat = true;

        this.uiManager.chatInput.value = "";
        this.uiManager.resizeChatInput?.();
        this.freeTalkTurns++;
        if (this.uiManager.turnCountEl) this.uiManager.turnCountEl.textContent = this.currentMaxTurns - this.freeTalkTurns;

        // 프리토킹 횟수 증가
        const charKey = this.charNameMap[scene.name] || scene.name;
        this.galleryManager.incrementFreeTalkCount(charKey);

        // 진행 상황 업데이트
        if (this.freeTalkHistory.length > 0 && this.freeTalkHistory[0].role === "system") {
            const lang = window.GAME_LANG || document.documentElement.lang || 'ko';
            const remaining = this.currentMaxTurns - this.freeTalkTurns;
            const progressTag = { es: `\n[Progreso del escenario]: ${this.freeTalkTurns}/${this.currentMaxTurns} turnos. ${remaining} restantes.`, ja: `\n[シナリオ進行度]: ${this.freeTalkTurns}/${this.currentMaxTurns}ターン。残り${remaining}ターン。`, en: `\n[CURRENT_PROGRESS]: ${this.freeTalkTurns}/${this.currentMaxTurns} turns. ${remaining} remaining.`, fr: `\n[Progression du scénario] : ${this.freeTalkTurns}/${this.currentMaxTurns} tours. ${remaining} restants.`, de: `\n[Szenariofortschritt]: ${this.freeTalkTurns}/${this.currentMaxTurns} Runden. ${remaining} übrig.`, pt: `\n[Progresso do cenário]: ${this.freeTalkTurns}/${this.currentMaxTurns} turnos. ${remaining} restantes.` }[lang] || `\n[현재 진행 상황]: ${this.freeTalkTurns}/${this.currentMaxTurns}턴. ${remaining}턴 남음.`;

            const baseContent = this.freeTalkHistory[0].content.split('\n[CURRENT_PROGRESS]')[0].split('\n[현재 진행 상황]')[0].split('\n[Progreso del escenario]')[0].split('\n[シナリオ進行度]')[0].split('\n[Progression du scénario]')[0].split('\n[Szenariofortschritt]')[0].split('\n[Progresso do cenário]')[0];
            this.freeTalkHistory[0].content = appendFreeTalkDynamicContext(baseContent, progressTag);
        }

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

        this.freeTalkHistory.push({ role: "user", content: finalContent });

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
            const _pv = (typeof PROMPT_VERSION !== 'undefined') ? PROMPT_VERSION : '0';
            const _cacheKey = charKey ? `cupid:${_pv}:${_lang}:${charKey}:${this._isRemote ? 'r' : 'f'}` : '';
            // [슬라이딩 윈도우] system + 누적 요약 주입 + 최근 N개 메시지만 전송 (토큰 폭증 방지)
            const _windowed = this._sanitizeDainOutfitHistory(this._buildWindowedHistory(), charKey);
            // 토큰 절감: 최근 5개 메시지 외의 이미지는 [이전 사진]으로 치환
            let _optimized = (typeof window.optimizeImageHistory === 'function')
                ? window.optimizeImageHistory(_windowed, 5)
                : _windowed;
            const _outsideCueOverride = this._buildLatestOutsideCueNarrationOverride(finalContent);
            const _inWorldUserRoleBlock = this._buildInWorldUserRoleBlock(_optimized);
            const _runtimePromptPatch = `${_outsideCueOverride}${_inWorldUserRoleBlock}`;
            if (_runtimePromptPatch && Array.isArray(_optimized) && _optimized[0]?.role === 'system') {
                _optimized = [
                    { ..._optimized[0], content: appendFreeTalkDynamicContext(_optimized[0].content, _runtimePromptPatch) },
                    ..._optimized.slice(1)
                ];
            }
            _optimized = this._forceLatestUserMessageLast(_optimized, finalContent);
            const _turnMeta = this._createTurnMeta(finalContent);
            this._activeChatTurnId = _turnMeta?.turnId || null;
            const aiEndpoint = (typeof AI_API_ENDPOINT !== 'undefined' && AI_API_ENDPOINT) ? AI_API_ENDPOINT : API_ENDPOINT;
            const response = await fetch(aiEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-app-type": "cupid",
                    "x-request-type": "character",
                    "x-chat-mode": "single",
                    ...(_cacheKey && { "x-cache-key": _cacheKey })
                },
                body: JSON.stringify({
                    messages: _optimized,
                    model: (typeof AI_MODEL_ID !== 'undefined' && AI_MODEL_ID) ? AI_MODEL_ID : (window.AI_MODEL_ID || undefined),
                    characterId: charKey,
                    requestType: "character",
                    chatMode: "single",
                    cacheKey: _cacheKey,
                    ...(_turnMeta || {})
                })
            });

            // HTTP 상태 코드 확인 (200번대가 아니면 오류)
            // 400: 잘못된 요청, 401: 인증 실패, 429: 요청 제한, 500: 서버 오류
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            // JSON 파싱
            const data = await response.json();
            this._assertCurrentTurn(_turnMeta, data);

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

            const parsed = this.parseJsonResponse(reply);

            // ─────────────────────────────────────────────────────────
            // 🔑 히든 키워드 시스템: 캐릭터 트라우마/비밀 관련 키워드 감지
            // ─────────────────────────────────────────────────────────
            // 플레이어가 캐릭터의 민감한 주제를 언급하면 AI 응답을
            // 사전 스크립팅된 특수 반응으로 교체한다. 캐릭터당 1회 한정.
            if (parsed && text) {
                const _kwLang = window.GAME_LANG || document.documentElement.lang || 'ko';
                const _lowerText = text.toLowerCase();
                const _kwFlag = `keyword_${charKey.toLowerCase()}`;

                // 캐릭터별 히든 키워드 정의
                const HIDDEN_KEYWORDS = {
                    "Yuna": {
                        flag: "keyword_yuna_junho",
                        keywords: { ko: ["준호", "이준호"], en: ["junho", "lee junho"], ja: ["ジュンホ"], es: ["junho"], fr: ["junho"], de: ["junho"], pt: ["junho"] },
                        response: {
                            ko: "*긴 침묵이 내려앉는다.* \"...그 이름. 어디서 들었어.\" *말끝이 잠깐 끊긴다.* \"...아무것도 아니야.\"",
                            en: "*A long silence settles in.* \"...That name. Where did you hear it.\" *The end of the sentence catches for a moment.* \"...It's nothing.\"",
                            ja: "*長い沈黙が落ちる。* \"...その名前。どこで聞いたの。\" *言葉尻が一瞬途切れる。* \"...なんでもない。\"",
                            es: "*Se instala un largo silencio.* \"...Ese nombre. ¿Dónde lo escuchaste?\" *El final de la frase se corta por un momento.* \"...No es nada.\"",
                            fr: "*Un long silence tombe.* \"...Ce nom. Où l'as-tu entendu ?\" *La fin de la phrase se brise un instant.* \"...Ce n'est rien.\"",
                            de: "*Ein langes Schweigen senkt sich.* \"...Dieser Name. Wo hast du den gehört?\" *Das Satzende stockt kurz.* \"...Es ist nichts.\"",
                            pt: "*Um longo silêncio cai.* \"...Esse nome. Onde você ouviu isso?\" *O fim da frase falha por um instante.* \"...Não é nada.\""
                        },
                        expression: "sad", affinity: 5
                    },
                    "Seoyeon": {
                        flag: "keyword_seo_family",
                        keywords: { ko: ["엄마", "부모님", "이혼"], en: ["mom", "mother", "parents", "divorce"], ja: ["お母さん", "両親", "離婚"], es: ["mamá", "padres", "divorcio"], fr: ["maman", "parents", "divorce"], de: ["mama", "eltern", "scheidung"], pt: ["mãe", "pais", "divórcio"] },
                        response: {
                            ko: "*젓가락을 내려놓는다.* \"...그 얘기는.\" *짧은 정적 뒤에 미소가 돌아온다. 연습된 미소다.* \"왜 갑자기?\"",
                            en: "*Sets down chopsticks.* \"...That topic.\" *After a brief hush, the smile returns. A practiced smile.* \"Why suddenly?\"",
                            ja: "*箸を置く。* \"...その話は。\" *短い静けさのあと、笑顔が戻る。練習された笑顔だ。* \"なんで急に？\"",
                            es: "*Deja los palillos.* \"...Ese tema.\" *Tras un breve silencio, la sonrisa regresa. Una sonrisa ensayada.* \"¿Por qué de repente?\"",
                            fr: "*Pose les baguettes.* \"...Ce sujet.\" *Après un bref silence, le sourire revient. Un sourire répété.* \"Pourquoi soudainement ?\"",
                            de: "*Legt die Stäbchen ab.* \"...Das Thema.\" *Nach einer kurzen Stille kehrt das Lächeln zurück. Ein einstudiertes Lächeln.* \"Warum plötzlich?\"",
                            pt: "*Coloca os hashis na mesa.* \"...Esse assunto.\" *Depois de um breve silêncio, o sorriso volta. Um sorriso ensaiado.* \"Por que de repente?\""
                        },
                        expression: "sad", affinity: 5
                    },
                    "Dain": {
                        flag: "keyword_dain_knee",
                        keywords: { ko: ["무릎", "인대", "수술", "프로"], en: ["knee", "ligament", "surgery", "pro"], ja: ["膝", "靭帯", "手術", "プロ"], es: ["rodilla", "ligamento", "cirugía", "profesional"], fr: ["genou", "ligament", "chirurgie", "pro"], de: ["knie", "band", "operation", "profi"], pt: ["joelho", "ligamento", "cirurgia", "profissional"] },
                        response: {
                            ko: "*웃음이 멈춘다.* \"...\" *잠깐 숨을 고른 뒤, 목소리가 다시 밝아진다.* \"괜찮아!! 별거 아냐!!\" *느낌표가 돌아왔지만 목소리가 반 톤 높다.*",
                            en: "*The smile stops.* \"...\" *After a brief breath, the voice brightens again.* \"I'm fine!! It's nothing!!\" *The exclamation marks are back, but half a tone too high.*",
                            ja: "*笑顔が止まる。* \"...\" *短く息を整えたあと、声がまた明るくなる。* \"大丈夫!! 何でもないよ!!\" *ビックリマークは戻ったが、声が半トーン高い。*",
                            es: "*La sonrisa se detiene.* \"...\" *Después de tomar aire un momento, la voz vuelve a iluminarse.* \"¡¡Estoy bien!! ¡¡No es nada!!\" *Los signos de exclamación volvieron, pero medio tono más alto.*",
                            fr: "*Le sourire s'arrête.* \"...\" *Après une brève inspiration, la voix redevient claire.* \"Ça va !! C'est rien !!\" *Les points d'exclamation sont revenus, mais d'un demi-ton trop haut.*",
                            de: "*Das Lächeln stoppt.* \"...\" *Nach einem kurzen Atemzug hellt sich die Stimme wieder auf.* \"Mir geht's gut!! Ist nichts!!\" *Die Ausrufezeichen sind zurück, aber einen halben Ton zu hoch.*",
                            pt: "*O sorriso para.* \"...\" *Depois de uma breve respiração, a voz volta a ficar clara.* \"Tô bem!! Não é nada!!\" *As exclamações voltaram, mas meio tom acima.*"
                        },
                        expression: "sad", affinity: 5
                    },
                    "Teacher": {
                        flag: "keyword_homeroom_writing",
                        keywords: { ko: ["원고", "소설", "등단"], en: ["manuscript", "novel", "debut"], ja: ["原稿", "小説", "デビュー"], es: ["manuscrito", "novela", "debut"], fr: ["manuscrit", "roman", "début"], de: ["manuskript", "roman", "debüt"], pt: ["manuscrito", "romance", "estreia"] },
                        response: {
                            ko: "*볼펜을 만지작거리던 손이 멈춘다.* \"...누구한테 들었어?\" *짧은 정적이 지나간다.* \"아무것도 아니야. 업무 서류야.\"",
                            en: "*The hand fidgeting with the pen stops.* \"...Who told you?\" *A brief stillness passes.* \"It's nothing. Just paperwork.\"",
                            ja: "*ボールペンをいじっていた手が止まる。* \"...誰に聞いたの？\" *短い静けさが過ぎる。* \"何でもない。業務書類だよ。\"",
                            es: "*La mano que jugueteaba con el bolígrafo se detiene.* \"...¿Quién te lo dijo?\" *Pasa una breve quietud.* \"No es nada. Solo papeleo.\"",
                            fr: "*La main qui jouait avec le stylo s'arrête.* \"...Qui t'a dit ça ?\" *Un bref silence passe.* \"Ce n'est rien. Juste de la paperasse.\"",
                            de: "*Die Hand, die mit dem Kugelschreiber spielte, hält inne.* \"...Wer hat dir das erzählt?\" *Eine kurze Stille vergeht.* \"Es ist nichts. Nur Papierkram.\"",
                            pt: "*A mão que brincava com a caneta para.* \"...Quem te contou?\" *Uma breve quietude passa.* \"Não é nada. Só papelada.\""
                        },
                        expression: "shy", affinity: 5
                    },
                    "Nurse": {
                        flag: "keyword_nurse_hospital",
                        keywords: { ko: ["환자", "대학병원", "응급실"], en: ["patient", "hospital", "er", "emergency"], ja: ["患者", "大学病院", "救急"], es: ["paciente", "hospital", "emergencia"], fr: ["patient", "hôpital", "urgences"], de: ["patient", "krankenhaus", "notaufnahme"], pt: ["paciente", "hospital", "emergência"] },
                        response: {
                            ko: "*청진기를 만지는 손이 멈춘다.* *목소리가 한 톤 낮아진다.* \"...옛날 얘기야.\" *다시 웃는다.* \"여기선 다 괜찮아~\"",
                            en: "*The hand touching the stethoscope stops.* *Voice drops a tone.* \"...That's an old story.\" *Smiles again.* \"Everyone's fine here~\"",
                            ja: "*聴診器に触れていた手が止まる。* *声が一トーン低くなる。* \"...昔の話だよ。\" *また笑う。* \"ここではみんな大丈夫~\"",
                            es: "*La mano que toca el estetoscopio se detiene.* *La voz baja un tono.* \"...Es una vieja historia.\" *Sonríe de nuevo.* \"Aquí todos están bien~\"",
                            fr: "*La main touchant le stéthoscope s'arrête.* *La voix baisse d'un ton.* \"...C'est une vieille histoire.\" *Sourit à nouveau.* \"Ici tout le monde va bien~\"",
                            de: "*Die Hand am Stethoskop hält inne.* *Die Stimme senkt sich um einen Ton.* \"...Das ist eine alte Geschichte.\" *Lächelt wieder.* \"Hier ist alles gut~\"",
                            pt: "*A mão no estetoscópio para.* *A voz abaixa um tom.* \"...Isso é história antiga.\" *Sorri de novo.* \"Aqui todo mundo tá bem~\""
                        },
                        expression: "shy", affinity: 3
                    }
                };

                const kwData = HIDDEN_KEYWORDS[charKey];
                if (kwData && !this.stateManager.getFlag(kwData.flag)) {
                    const kwList = kwData.keywords[_kwLang] || kwData.keywords['en'] || [];
                    const triggered = kwList.some(kw => _lowerText.includes(kw.toLowerCase()));
                    if (triggered) {
                        // 키워드 발동: AI 응답을 스크립팅된 반응으로 교체
                        parsed.text = kwData.response[_kwLang] || kwData.response['en'];
                        parsed.expression = kwData.expression;
                        parsed.affinity = kwData.affinity;
                        this.stateManager.setFlag(kwData.flag, true);

                        // 시스템 프롬프트에 민감 주제 언급 컨텍스트 추가
                        if (this.freeTalkHistory.length > 0 && this.freeTalkHistory[0].role === "system") {
                            const sensitiveNote = {
                                ko: "\n[주의: 플레이어가 민감한 주제를 언급했습니다. 약간 경계하는 톤을 유지하되, 자연스럽게 대화를 이어가세요.]",
                                en: "\n[NOTE: The player mentioned a sensitive topic. Maintain a slightly guarded tone while continuing naturally.]",
                                ja: "\n[注意: プレイヤーがデリケートな話題に触れました。少し警戒しつつ、自然に会話を続けてください。]",
                                es: "\n[NOTA: El jugador mencionó un tema sensible. Mantén un tono ligeramente cauteloso mientras continúas naturalmente.]",
                                fr: "\n[NOTE : Le joueur a mentionné un sujet sensible. Gardez un ton légèrement réservé tout en continuant naturellement.]",
                                de: "\n[HINWEIS: Der Spieler hat ein sensibles Thema angesprochen. Behalten Sie einen leicht vorsichtigen Ton bei.]",
                                pt: "\n[NOTA: O jogador mencionou um assunto sensível. Mantenha um tom levemente cauteloso enquanto continua naturalmente.]"
                            };
                            this.freeTalkHistory[0].content += sensitiveNote[_kwLang] || sensitiveNote['en'];
                        }
                    }
                }
            }

            if (parsed) {
                // NSFW 판단은 AI 프롬프트에 위임 (코드 레벨 강제 차단 없음)

                // JSON 필드에서 표정 변화 처리
                if (parsed.expression) {
                    this.applyExpression(parsed.expression, scene);
                }
                // JSON 필드에서 호감도 변화 처리
                if (parsed.affinity !== 0) {
                    this.applyAffinity(parsed.affinity, scene);
                }

                reply = this._sanitizeVisibleArtifacts(this._sanitizePlayerPlaceholders(parsed.text || "..."));
                const parsedSegments = this._sanitizeSegmentsPlaceholders(parsed.segments || null);

                // 레거시 폴백: 인라인 태그가 텍스트에 남아있을 경우 처리
                reply = this.processExpressionTags(reply, scene);
                reply = this.processStatsTags(reply, scene);

                if (!reply) reply = "...";

                this.uiManager.updateNameTag(scene.name);

                // 생각중 상태 해제
                document.querySelectorAll('.char-slot img').forEach(img => img.classList.remove('thinking'));
                this.uiManager.dialogueBox.classList.remove('thinking-box');
                document.querySelectorAll('.thinking-indicator').forEach(el => el.remove());

                // segments가 있으면 typeText에 전달 (별표 파싱 건너뛰고 구조화 렌더)
                await this.dialogueSystem.typeText(reply, scene.name, parsedSegments);
                this.freeTalkHistory.push({ role: "assistant", content: reply, segments: parsedSegments });

                // 대화 기록 저장 (로컬)
                this.stateManager.setChatMemory(scene.name, this.freeTalkHistory);

                // D1 chat-logs 저장 (백업 뷰어용, 비동기 fire-and-forget)
                if (typeof window.saveCupidChatLog === 'function') {
                    window.saveCupidChatLog({
                        charId: charKey,
                        userContent: finalContent,
                        assistantContent: reply,
                        sessionId: this.currentSceneId || '',
                        context: '1:1'
                    });
                }
            } else {
                this.uiManager.updateNameTag(scene.name);
                await this.dialogueSystem.typeText("...", scene.name);
            }

            // 대화 종료 체크
            if (this.freeTalkTurns >= this.currentMaxTurns) {
                this.endFreeTalk();
            }
            // ─────────────────────────────────────────────────────────────
            // ❌ 오류 발생 시: 폴백 메시지로 대체
            // ─────────────────────────────────────────────────────────────
            // 폴백 메시지: AI 연결 실패 시 미리 정의된 대답을 보여줌
            // 사용자가 오류 화면을 보지 않고 게임을 계속할 수 있음
            // ─────────────────────────────────────────────────────────────
        } catch (error) {
            // 🔍 오류 내용을 콘솔에 기록 (디버깅용)
            // F12 → Console 탭에서 확인 가능
            if (error?.isStaleTurn || error?.reason === 'STALE_TURN') {
                console.warn('[Cupid FreeTalk] Ignored stale chat response');
                return;
            }
            console.error("AI Chat Error:", error);

            // 현재 언어 확인
            const langErr = window.GAME_LANG || document.documentElement.lang || 'ko';
            const isEnErr = langErr === 'en';

            // 폴백 메시지 가져오기 (prompts.js에서 정의)
            const fallbackMsg = this.getFallbackReply(scene.name, isEnErr, getSceneFn);

            // 폴백 메시지를 화면에 표시
            this.uiManager.updateNameTag(scene.name);
            await this.dialogueSystem.typeText(fallbackMsg, scene.name);
            this.freeTalkHistory.push({ role: "assistant", content: fallbackMsg });

            // 대화 종료 처리 (오류 발생해도 게임은 계속)
            this.freeTalkTurns = this.currentMaxTurns;
            this.endFreeTalk();
        } finally {
            this.isProcessingChat = false;  // 처리 완료 플래그 해제
            this.uiManager.chatSendBtn.disabled = false;
            if (this.uiManager.chatSkipBtn) this.uiManager.chatSkipBtn.disabled = false;
            this.uiManager.chatInput.disabled = false;
            this.uiManager.chatSendBtn.innerHTML = originalBtnContent;

            document.querySelectorAll('.char-slot img').forEach(img => img.classList.remove('thinking'));
            this.uiManager.dialogueBox.classList.remove('thinking-box');
            document.querySelectorAll('.thinking-indicator').forEach(el => el.remove());

            if (!window.isCupidDesktopPointer || window.isCupidDesktopPointer()) {
                this.uiManager.chatInput.focus();
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
    _buildWindowedHistory() {
        if (!this.freeTalkHistory || this.freeTalkHistory.length === 0) return [];
        const sysMsg = this.freeTalkHistory[0];
        if (!sysMsg || sysMsg.role !== 'system') return this.freeTalkHistory;

        const rest = this.freeTalkHistory.slice(1);
        if (rest.length <= this.HISTORY_WINDOW) return this.freeTalkHistory;

        return [sysMsg, ...rest.slice(-this.HISTORY_WINDOW)];
    }

    _buildLatestOutsideCueNarrationOverride(content) {
        const text = String(content || '')
            .replace(/data:image\/[a-zA-Z0-9.+-]+;base64,[A-Za-z0-9+/=\s]+/g, ' ')
            .replace(/https?:\/\/\S+/g, ' ')
            .toLowerCase()
            .replace(/\s+/g, ' ')
            .trim();
        if (!text) return '';

        const outsideCuePattern = /(문(?:틈|밖|앞|너머|소리|을|이|에|로|에서|두드|열리|닫히)|노크|발소리|또각|웅성|수군|복도|주변|시선|쳐다|눈길|알림|진동|벨|전화|메시지|문자|초침|시계|시간|마감|소품|책상|의자|문서|서류|봉투|카드|창밖|door|knock|footstep|hallway|corridor|gaze|stare|glance|murmur|whisper|notification|phone|vibration|message|clock|timer|deadline|prop|desk|chair|paper|envelope|card|window)/i;
        if (!outsideCuePattern.test(text)) return '';

        const lang = window.GAME_LANG || document.documentElement.lang || 'ko';
        if (lang === 'ko') {
            return `

**[이번 턴 런타임 장면 단서 OVERRIDE]**
최신 유저 입력에는 캐릭터 반응보다 먼저 발생한 외부 장면 단서가 있습니다. Cupid 프리토킹 출력 형식은 narration/dialogue만 허용하므로, 이번 응답은 그 단서를 첫 1~2개 segments 안의 비어 있지 않은 narration으로 먼저 회수하세요.
- 문소리, 발소리, 주변 시선, 알림, 시간 압박, 놓인 소품 변화 중 실제 입력에 있는 단서가 움직이는 순간을 씁니다.
- 그 다음 narration/dialogue에서 현재 캐릭터가 그 단서를 알아차리고 몸/내면 반응을 거친 뒤 짧게 말하게 하세요.
- scene 타입, sceneNarration 필드, 단일 text 필드, 임의 키를 새로 만들지 말고 기존 JSON segments 계약만 지키세요.`;
        }

        return `

**[Runtime scene-cue override for this turn]**
The latest user input contains an outside scene cue that happens before the character reacts. Cupid free-talk allows narration/dialogue only, so this response must pick up that cue as a non-empty narration segment within the first 1-2 segments.
- Use only object, phone, time-pressure, door, or placed-prop cues that can exist without another person. Do not turn the cue into footsteps, voices, gazes, crowds, or any third-party presence.
- Then let the current character notice it, show body/interior reaction, and speak a short line.
- Do not add scene type, sceneNarration, a single text field, or arbitrary keys. Keep the existing JSON segments contract.`;
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

            const sourceText = text
                .replace(/data:image\/[a-zA-Z0-9.+-]+;base64,[A-Za-z0-9+/=\s]+/g, ' ')
                .replace(/https?:\/\/\S+/g, ' ')
                .replace(/\s+/g, ' ')
                .trim()
                .slice(0, 180);
            const lang = String(
                (typeof window !== 'undefined' && window.GAME_LANG) ||
                (typeof document !== 'undefined' && document.documentElement?.lang) ||
                'ko'
            ).toLowerCase();

            if (lang.startsWith('ko')) {
                return `\n\n**[이번 턴 유저 극중 화자 LOCK]**\n최근 유저 로그가 유저/주인공의 극중 배역을 "${roleName}"로 지정했습니다. "당신은 ${roleName}..."에서 "당신"은 응답 캐릭터가 아니라 유저/주인공을 뜻합니다. 이후 "${roleName}" 이름표, "${roleName}"의 행동 지문, 침묵, 도망, 망설임, 선택은 모두 유저 캐릭터가 이미 한 장면 사건으로 취급하세요. 단, 응답자가 ${roleName}의 새 행동, 대사, 동의, 거절을 대신 결정하지는 마세요. 현재 캐릭터는 ${roleName}가 방금 남긴 말/행동과 Cupid 학교/연애 시나리오 고유 압력에 반응합니다.\n감지된 역할 선언 근거: ${sourceText}\n`;
            }

            return `\n\n**[Current-Turn User In-World Speaker LOCK]**\nRecent user log assigns the user/protagonist's in-world role as "${roleName}". In phrases like "you are ${roleName}", "you" means the user/protagonist, not the responding character. Any "${roleName}" name label, action prose, silence, escape, hesitation, or choice is a real scene event already performed by the user character. However, the responder must not decide ${roleName}'s new actions, dialogue, consent, or refusal. The current character reacts to what ${roleName} just did and to Cupid school/romance scenario-native pressure.\nDetected role declaration source: ${sourceText}\n`;
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
        // 📌 빈 응답이면 기본 구조체 반환
        if (!reply) return { text: "", segments: null, expression: "", affinity: 0 };

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
            // 📌 JSON 파싱 실패 시 경고 로그 (원본 반환됨)
            console.warn("JSON parsing failed:", e);
        }

        // 📌 파싱 실패하거나 텍스트 추출 실패 시 fallback 메시지 반환
        const langFallback = window.GAME_LANG || document.documentElement.lang || 'ko';
        return {
            text: { es: "No pude entender la respuesta. Intentaré de nuevo.", ja: "応答を理解できませんでした。もう一度試みます。", en: "I couldn't understand the response. Let me try again.", fr: "Je n'ai pas pu comprendre la réponse. Laissez-moi réessayer.", de: "Ich konnte die Antwort nicht verstehen. Lass mich es nochmal versuchen.", pt: "Não consegui entender a resposta. Deixa eu tentar de novo." }[langFallback] || "응답을 이해할 수 없습니다. 다시 시도하겠습니다.",
            segments: null,
            expression: "",
            affinity: 0,
        };
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
        const charExprs = CHARACTER_EXPRESSIONS[scene.name];
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
                const charExprs = CHARACTER_EXPRESSIONS[scene.name];

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
    endFreeTalk() {
        // 이 프리토킹을 완료했다는 플래그 설정
        this.stateManager.setFlag(`messaged_${this.currentSceneId}`);

        setTimeout(() => {
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
