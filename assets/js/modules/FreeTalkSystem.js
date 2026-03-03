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
        if (!lang) lang = document.documentElement.lang || 'ko';

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
                (charName === "보건선생님" && m.char === "School Nurse") ||
                (charName === "School Nurse" && m.char === "보건선생님") ||
                // Spanish name matching
                (charName === "Profesora" && (m.char === "담임선생님" || m.char === "Teacher")) ||
                (charName === "Enfermera" && (m.char === "보건선생님" || m.char === "Nurse")) ||
                // Japanese name matching
                (charName === "担任先生" && (m.char === "담임선생님" || m.char === "Teacher")) ||
                (charName === "保健先生" && (m.char === "보건선생님" || m.char === "Nurse")) ||
                // French name matching
                (charName === "Professeur Principal" && (m.char === "담임선생님" || m.char === "Teacher")) ||
                (charName === "Infirmière Scolaire" && (m.char === "보건선생님" || m.char === "Nurse"));
            // 플래그가 true인 기억만 포함
            return charMatch && this.stateManager.getFlag(m.flag);
        });

        // 기억이 없으면 빈 문자열
        if (memories.length === 0) return "";

        // 기억들을 리스트 형태로 포맷팅
        const header = { es: "\n\n[Eventos y Recuerdos Recientes]:\n", ja: "\n\n[最近の出来事と記憶]:\n", en: "\n\n[Recent Events & Memories]:\n", fr: "\n\n[Événements et Souvenirs Récents] :\n" }[lang] || "\n\n[최근 사건 및 기억]:\n";
        return header + memories.map(m => {
            let text = { es: m.es, ja: m.ja, en: m.en, fr: m.fr }[lang] || m.ko;
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
        const lang = document.documentElement.lang || 'ko';

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
                    status = { es: " (Actualmente SALIENDO con el usuario)", ja: " (現在ユーザーと交際中)", en: " (Currently DATING the user)", fr: " (Actuellement en COUPLE avec l'utilisateur)" }[lang] || " (현재 사용자와 사귀는 사이)";
                } else if (affinity >= 70) {
                    status = { es: " (Convencida de estar saliendo con el usuario)", ja: " (ユーザーと交際していると確信)", en: " (Convinced they are dating the user)", fr: " (Convaincue de sortir avec l'utilisateur)" }[lang] || " (사용자와 사귀는 사이라고 확신함)";
                } else if (affinity >= 50) {
                    status = { es: " (Sospecha que está saliendo con el usuario)", ja: " (ユーザーと交際しているか疑っている)", en: " (Suspecting they are dating the user)", fr: " (Suspecte qu'elle sort avec l'utilisateur)" }[lang] || " (사용자와 사귀는 사이인지 의심함)";
                }

                const affinityText = { es: ` (Afinidad: ${affinity})`, ja: ` (好感度: ${affinity})`, en: ` (Affinity: ${affinity})`, fr: ` (Affinité : ${affinity})` }[lang] || ` (호감도: ${affinity})`;
                return `- ${name}: ${desc}${affinityText}${status}`;
            })
            .join("\n");

        const header = { es: "\n\n[Otros Personajes en la Escuela y Tu Conocimiento]:\n", ja: "\n\n[学校の他のキャラクターとあなたの認知状態]:\n", en: "\n\n[Other Characters in School & Your Awareness]:\n", fr: "\n\n[Autres Personnages de l'École et Votre Perception] :\n" }[lang] || "\n\n[학교의 다른 인물들 및 당신의 인지 상태]:\n";

        // 질투 반응 지침
        const jealousyInstruction = { es: "\nNota: Eres consciente de la relación del usuario con otros. Si su afinidad es alta (50+), puedes sentir celos, sospechas u obsesión según tu personalidad.", ja: "\n注意: あなたはユーザーと他のキャラクターとの関係を認知しています。他のキャラクターの好感度が高い場合(50以上)、あなたの性格に応じて嫉妬、疑念、または執着を見せることがあります。", en: "\nNote: You are aware of the user's relationship with others. If their affinity is high (50+), you may feel jealous, suspicious, or obsessive depending on your personality.", fr: "\nNote : Vous êtes consciente de la relation de l'utilisateur avec les autres. Si leur affinité est élevée (50+), vous pouvez ressentir de la jalousie." }[lang] || "\n참고: 당신은 사용자와 다른 캐릭터들의 관계를 인지하고 있습니다. 다른 캐릭터의 호감도가 높을 경우(50 이상), 당신의 성격에 따라 질투, 의심, 또는 집착을 보일 수 있습니다.";

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

        const lang = document.documentElement.lang || 'ko';
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
            default:        { es: "Escuela", ja: "学校", en: "School", fr: "École", ko: "학교" },
            room_school:    { es: "Aula", ja: "教室", en: "Classroom", fr: "Salle de classe", ko: "교실" },
            school_hallway: { es: "Pasillo", ja: "廊下", en: "Hallway", fr: "Couloir", ko: "복도" },
            'school.png':   { es: "Puerta de la escuela", ja: "校門前", en: "School Gate", fr: "Portail de l'école", ko: "교문 앞" },
            top_school:     { es: "Azotea", ja: "屋上", en: "Rooftop", fr: "Toit", ko: "학교 옥상" },
            playground:     { es: "Patio", ja: "運動場", en: "Playground", fr: "Cour de récréation", ko: "운동장" },
            gym:            { es: "Gimnasio", ja: "体育館", en: "Gym", fr: "Gymnase", ko: "체육관" },
            nurse_room:     { es: "Enfermería", ja: "保健室", en: "Nurse's Office", fr: "Infirmerie", ko: "보건실" },
            library:        { es: "Biblioteca", ja: "図書館", en: "Library", fr: "Bibliothèque", ko: "도서관" },
            arcade:         { es: "Sala de juegos", ja: "ゲームセンター", en: "Arcade", fr: "Salle d'arcade", ko: "오락실" },
            bookstore:      { es: "Librería", ja: "書店", en: "Bookstore", fr: "Librairie", ko: "서점" },
            home_room:      { es: "Mi habitación", ja: "自分の部屋", en: "My Room", fr: "Ma chambre", ko: "주인공의 방" }
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
                fr: `\n- SPÉCIAL : Vous sortez actuellement avec l'utilisateur. Utilisez des surnoms extrêmement intimes et affectueux.`
            }[lang] || `\n- SPECIAL: You are currently DATING the user. Use extremely intimate and affectionate nicknames regardless of the affinity tiers below.`);

            // 양다리 감지
            const otherDatingChars = Object.keys(this.charNameMap).filter(name => {
                const key = this.charNameMap[name];
                return key !== charKey && (this.stateManager.getFlag(`isDating_${key}`) || this.stateManager.getFlag(`isDating_${name}`));
            });

            if (otherDatingChars.length > 0) {
                datingGuideline += ({
                    ko: `\n- 질투 지침: 사용자가 다른 사람들(${otherDatingChars.join(", ")})과도 사귀고 있습니다.`,
                    en: `\n- JEALOUSY: You noticed the user is also dating others (${otherDatingChars.join(", ")}).`,
                    es: `\n- CELOS: Has notado que el usuario también está saliendo con otros (${otherDatingChars.join(", ")}).`,
                    ja: `\n- 嫉妬指示: ユーザーが他の人(${otherDatingChars.join("、")})とも付き合っていることに気づいています。`,
                    fr: `\n- JALOUSIE : Vous avez remarqué que l'utilisateur sort aussi avec d'autres (${otherDatingChars.join(", ")}).`
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

        const mediumInstruction = isRemote
            ? ({ es: "\n- MEDIO: Comunicándose por TELÉFONO/MENSAJERÍA.", ja: "\n- メディア: 電話/メッセンジャーで連絡中。", en: "\n- MEDIUM: Communicating via PHONE/MESSENGER.", fr: "\n- MOYEN : Communication par TÉLÉPHONE/MESSAGERIE." }[lang] || "\n- 매체 지침: 전화/메시지로 연락 중.")
            : ({ es: "\n- MEDIO: Hablando CARA A CARA.", ja: "\n- メディア: 対面で会話中。", en: "\n- MEDIUM: Talking FACE-TO-FACE.", fr: "\n- MOYEN : Conversation EN PERSONNE." }[lang] || "\n- 매체 지침: 대면 대화 중.");

        // 시스템 프롬프트 생성
        const systemPrompt = window.buildSystemPrompt ? window.buildSystemPrompt({
            isEn,
            lang,
            sceneName: charKey,
            displayName: scene.name,
            locationName,
            context: scene.context || ({ es: "Hablando con el usuario.", ja: "ユーザーと会話中です。", en: "Talking with the user.", fr: "En conversation avec l'utilisateur." }[lang] || "사용자와 대화 중입니다."),
            affinity: charStats.affinity,
            extraGuideline: scene.extra_guideline || "",
            gameContext,
            socialContext,
            mediumInstruction,
            promptData,
            currentMaxTurns: this.currentMaxTurns,
            playerName: this.stateManager.playerName,
            knowsName,
            datingGuideline
        }) : "";

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
                    : "<b>Tip :</b> Décrivez la scène ou les actions, ex : <i>*prend la main* Allons-y.</i>"
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

        // ─────────────────────────────────────────────────────────────
        // 초기 대사 표시 (씬에 text가 있는 경우)
        // ─────────────────────────────────────────────────────────────
        // 캐릭터가 먼저 말을 거는 상황 (예: "안녕! 무슨 일이야?")
        // → 타이핑 효과로 표시하고, AI 대화 기록에도 추가
        if (scene.text) {
            await this.dialogueSystem.typeText(scene.text, scene.name);
            this.freeTalkHistory.push({ role: "assistant", content: scene.text });
        }
    }

    /** 프리토킹 스킵 */
    async skipFreeTalk() {
        if (this.dialogueSystem.isCurrentlyTyping() || !this.isFreeTalking) return;

        const lang = document.documentElement.lang || 'ko';
        const confirmMsg = { es: "¿Detener la conversación y continuar?", ja: "会話を中断して次のシーンに進みますか？", en: "Stop the conversation and proceed?", fr: "Arrêter la conversation et continuer ?" }[lang] || "대화를 중단하고 다음 장면으로 넘어가시겠습니까?";

        const confirmed = await this.uiManager.showModal(confirmMsg);
        if (confirmed) {
            this.freeTalkTurns = this.currentMaxTurns;
            this.stateManager.setFlag(`messaged_${this.currentSceneId}`);
            this.uiManager.chatContainer.style.display = 'none';
            this.isFreeTalking = false;

            const endMsg = { es: "\n\n(La conversación ha terminado.)", ja: "\n\n（会話が終了しました。）", en: "\n\n(Conversation ended. Click to continue.)", fr: "\n\n(La conversation est terminée.)" }[lang] || "\n\n(대화가 종료되었습니다. 화면을 클릭하여 계속하세요.)";
            this.uiManager.messageEl.textContent += endMsg;
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
    async sendChatMessage(getSceneFn) {
        // 이미 처리 중이면 무시 (중복 호출 방지)
        if (this.isProcessingChat) return;

        const stagedImageEarly = this.uiManager.stagedImage;
        const text = this.uiManager.chatInput.value.trim();
        // 텍스트가 없고 이미지도 없으면 전송하지 않음
        if ((!text && !stagedImageEarly) || this.freeTalkTurns >= this.currentMaxTurns || this.dialogueSystem.isCurrentlyTyping()) return;

        this.isProcessingChat = true;

        this.uiManager.chatInput.value = "";
        this.freeTalkTurns++;
        if (this.uiManager.turnCountEl) this.uiManager.turnCountEl.textContent = this.currentMaxTurns - this.freeTalkTurns;

        // 프리토킹 횟수 증가
        const scene = getSceneFn(this.currentSceneId);
        const charKey = this.charNameMap[scene.name] || scene.name;
        this.galleryManager.incrementFreeTalkCount(charKey);

        // 진행 상황 업데이트
        if (this.freeTalkHistory.length > 0 && this.freeTalkHistory[0].role === "system") {
            const lang = document.documentElement.lang || 'ko';
            const remaining = this.currentMaxTurns - this.freeTalkTurns;
            const progressTag = { es: `\n[Progreso del escenario]: ${this.freeTalkTurns}/${this.currentMaxTurns} turnos. ${remaining} restantes.`, ja: `\n[シナリオ進行度]: ${this.freeTalkTurns}/${this.currentMaxTurns}ターン。残り${remaining}ターン。`, en: `\n[CURRENT_PROGRESS]: ${this.freeTalkTurns}/${this.currentMaxTurns} turns. ${remaining} remaining.`, fr: `\n[Progression du scénario] : ${this.freeTalkTurns}/${this.currentMaxTurns} tours. ${remaining} restants.` }[lang] || `\n[현재 진행 상황]: ${this.freeTalkTurns}/${this.currentMaxTurns}턴. ${remaining}턴 남음.`;

            const baseContent = this.freeTalkHistory[0].content.split('\n[CURRENT_PROGRESS]')[0].split('\n[현재 진행 상황]')[0].split('\n[Progreso del escenario]')[0].split('\n[シナリオ進行度]')[0].split('\n[Progression du scénario]')[0];
            this.freeTalkHistory[0].content = baseContent + progressTag;
        }

        // 사용자 메시지 표시
        const playerLabelByLang = { en: "Me", es: "Yo", ja: "僕", fr: "Moi" };
        const playerLabel = playerLabelByLang[document.documentElement.lang] || "나";
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

        this.freeTalkHistory.push({ role: "user", content: finalContent });

        // 이미지 미리보기 제거
        this.uiManager.removeStagedImage();

        // 로딩 상태
        this.uiManager.chatSendBtn.disabled = true;
        if (this.uiManager.chatSkipBtn) this.uiManager.chatSkipBtn.disabled = true;
        this.uiManager.chatInput.disabled = true;
        const originalBtnContent = this.uiManager.chatSendBtn.innerHTML;
        this.uiManager.chatSendBtn.innerHTML = `<span class="loading-dots">...</span>`;

        // 생각중 상태
        document.querySelectorAll('.char-slot img').forEach(img => img.classList.add('thinking'));
        this.uiManager.dialogueBox.classList.add('thinking-box');

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
            // [Explicit Caching] 캐시 키 헤더 추가
            const _lang = document.documentElement.lang || 'ko';
            const _cacheKey = charKey ? `cupid:${_lang}:${charKey}` : '';
            const response = await fetch(API_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-app-type": "cupid", ...(_cacheKey && { "x-cache-key": _cacheKey }) },
                body: JSON.stringify({ messages: this.freeTalkHistory })
            });

            // HTTP 상태 코드 확인 (200번대가 아니면 오류)
            // 400: 잘못된 요청, 401: 인증 실패, 429: 요청 제한, 500: 서버 오류
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            // JSON 파싱
            const data = await response.json();

            // OpenAI API 응답 구조에서 대답 텍스트 추출
            // 구조: { choices: [{ message: { content: "대답 내용" } }] }
            let reply = data?.choices?.[0]?.message?.content?.trim();

            // JSON 응답 파싱 → {text, expression, affinity} 구조체 반환
            const parsed = this.parseJsonResponse(reply);

            if (parsed) {
                // ─────────────────────────────────────────────────────────
                // 🛡️ NSFW 안전장치: 저호감도에서 신체적/성적 행동 시 호감도 증가 차단
                // ─────────────────────────────────────────────────────────
                // AI가 프롬프트를 무시하고 긍정적으로 반응할 경우를 대비한 코드 레벨 방어
                const currentAffinity = (this.stateManager.stats[charKey] || {}).affinity || 0;
                const isDatingCurrent = this.stateManager.getFlag(`isDating_${charKey}`) || this.stateManager.getFlag(`isDating_${scene.name}`);
                if (!isDatingCurrent && parsed.affinity > 0 && text) {
                    // * 안 내용에서 신체적/성적 키워드 감지
                    const parenContent = (text.match(/\*([^*]+)\*/g) || []).join(' ').toLowerCase();
                    if (parenContent) {
                        const nsfwKeywords = /키스|뽀뽀|껴안|포옹|안아|만지|잡아|스킨십|가슴|엉덩이|허벅지|입술|핥|빨|벗|더듬|쓰다듬|몸|허리|볼[에를]|kiss|hug|embrac|touch|grab|grope|fond|caress|strip|undress|breast|butt|thigh|lip|lick|suck|body|waist|cheek/i;
                        if (nsfwKeywords.test(parenContent)) {
                            if (currentAffinity <= 30) {
                                // 저호감도: 호감도 증가 완전 차단, 강제 감소
                                parsed.affinity = Math.min(parsed.affinity, -5);
                                if (parsed.expression === 'shy' || parsed.expression === 'shy2') {
                                    parsed.expression = 'angry';
                                }
                            } else if (currentAffinity <= 70) {
                                // 중간 호감도: 호감도 증가를 0으로 캡
                                parsed.affinity = Math.min(parsed.affinity, 0);
                                if (parsed.expression === 'shy' || parsed.expression === 'shy2') {
                                    parsed.expression = 'pout';
                                }
                            }
                        }
                    }
                }

                // JSON 필드에서 표정 변화 처리
                if (parsed.expression) {
                    this.applyExpression(parsed.expression, scene);
                }
                // JSON 필드에서 호감도 변화 처리
                if (parsed.affinity !== 0) {
                    this.applyAffinity(parsed.affinity, scene);
                }

                reply = parsed.text || "...";

                // 레거시 폴백: 인라인 태그가 텍스트에 남아있을 경우 처리
                reply = this.processExpressionTags(reply, scene);
                reply = this.processStatsTags(reply, scene);

                if (!reply) reply = "...";

                this.uiManager.updateNameTag(scene.name);

                // 생각중 상태 해제
                document.querySelectorAll('.char-slot img').forEach(img => img.classList.remove('thinking'));
                this.uiManager.dialogueBox.classList.remove('thinking-box');

                await this.dialogueSystem.typeText(reply, scene.name);
                this.freeTalkHistory.push({ role: "assistant", content: reply });

                // 대화 기록 저장
                this.stateManager.setChatMemory(scene.name, this.freeTalkHistory);
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
            console.error("AI Chat Error:", error);

            // 현재 언어 확인
            const langErr = document.documentElement.lang || 'ko';
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

            this.uiManager.chatInput.focus();
        }
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
    parseJsonResponse(reply) {
        // 📌 빈 응답이면 기본 구조체 반환
        if (!reply) return { text: "", expression: "", affinity: 0 };

        // 📌 JSON일 가능성 체크 (중괄호, 대괄호, 또는 코드블록 포함 여부)
        const likelyJson = reply.includes('{') || reply.includes('[') || reply.includes('```json');
        if (!likelyJson) return { text: reply, expression: "", affinity: 0 };  // 순수 텍스트면 그대로

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

            // 📌 cupid 스키마 형식 {text, expression, affinity} 인지 확인
            if (parsed && typeof parsed === 'object' && !Array.isArray(parsed) && typeof parsed.text === 'string') {
                return {
                    text: parsed.text || "",
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
                return { text: fallbackText, expression: "", affinity: 0 };
            }
        } catch (e) {
            // 📌 JSON 파싱 실패 시 경고 로그 (원본 반환됨)
            console.warn("JSON parsing failed:", e);
        }

        // 📌 파싱 실패하거나 텍스트 추출 실패 시 fallback 메시지 반환
        const langFallback = document.documentElement.lang || 'ko';
        return {
            text: { es: "No pude entender la respuesta. Intentaré de nuevo.", ja: "応答を理解できませんでした。もう一度試みます。", en: "I couldn't understand the response. Let me try again.", fr: "Je n'ai pas pu comprendre la réponse. Laissez-moi réessayer." }[langFallback] || "응답을 이해할 수 없습니다. 다시 시도하겠습니다.",
            expression: "",
            affinity: 0,
        };
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
        if (centerSlot.firstChild) {
            centerSlot.firstChild.src = exprUrl;
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
                    if (centerSlot.firstChild) {
                        centerSlot.firstChild.src = exprUrl;
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
            const langEnd = document.documentElement.lang || 'ko';
            const endMsg = { es: "\n\n(La conversación ha terminado.)", ja: "\n\n（会話が終了しました。）", en: "\n\n(Conversation ended. Click to continue.)", fr: "\n\n(La conversation est terminée.)" }[langEnd] || "\n\n(대화가 종료되었습니다. 화면을 클릭하여 계속하세요.)";
            this.uiManager.messageEl.textContent += endMsg;
        }, 500);
    }
}

window.FreeTalkSystem = FreeTalkSystem;
