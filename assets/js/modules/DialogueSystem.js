// ============================================================================================
// 📁 DialogueSystem.js
// ============================================================================================
// 📌 대화(타이핑) 시스템 모듈
//    대사를 한 글자씩 타이핑하는 효과, 플레이스홀더 치환, 말하기 애니메이션 등을 담당합니다.
//
// 📦 의존성:
//    - config.js        → CHAR_NAME_MAP (캐릭터 표시 이름 ↔ 내부 키 매핑 상수)
//    - KoreanProcessor.js → KoreanProcessor (한국어 조사 "은/는", "이/가" 등 자동 처리)
//
// 🌐 외부 노출:
//    - window.DialogueSystem
// ============================================================================================

// ============================================================================================
// 💬 DialogueSystem 클래스 - 대화 시스템
// ============================================================================================
// 📌 대사를 한 글자씩 타이핑하는 효과와 관련 기능을 담당합니다.
//    클릭하면 타이핑을 스킵하고 전체 텍스트를 바로 표시합니다.

/**
 * 대화 시스템 클래스
 *
 * ▶ 주요 기능:
 *   - 타이핑 효과: 대사를 한 글자씩 출력
 *   - 이름 치환: {name}을 플레이어 이름으로 교체
 *   - 조사 처리: 한국어 "은/는" 등 자동 교정
 *   - 캐릭터 애니메이션: 말하는 캐릭터에 효과 적용
 *
 * ▶ 타이핑 스킵:
 *   타이핑 중 화면을 클릭하면 즉시 전체 텍스트 표시
 */
class DialogueSystem {
    /**
     * @param {StateManager} stateManager - 게임 상태 관리자
     * @param {UIManager} uiManager - UI 관리자
     */
    constructor(stateManager, uiManager) {
        this.stateManager = stateManager;
        this.uiManager = uiManager;
        this.koreanProcessor = new KoreanProcessor();  // 조사 처리기

        /** 현재 타이핑 진행 중 여부 */
        this.isTyping = false;

        /** 타이핑 스킵 요청 플래그 */
        this.skipTyping = false;

        /**
         * 타이핑 속도 (밀리초 단위)
         * - 30 = 한 글자당 30ms = 초당 약 33글자
         * - 숫자가 작을수록 빠름
         */
        this.typingSpeed = 30;

        /** 엔딩 모드 — 느린 타이핑 + 스킵 불가 */
        this._endingMode = false;
        this._endingTypingSpeed = 50;  // 엔딩: 한 글자당 50ms (약 1.7배 느림)

        /** 캐릭터 표시 이름 → 내부 키 매핑 (공통 상수 참조) */
        this.charNameMap = CHAR_NAME_MAP;

        /** 캐릭터 이름 → 이미지 파일명 매핑 (말하기 애니메이션용) */
        this.charFileMap = {
            // Korean
            "서연": "seyoun", "유나": "yuna", "다인": "dain",
            "담임선생님": "teacher", "보건선생님": "nurse",
            // English
            "Seoyeon": "seyoun", "Yuna": "yuna", "Dain": "dain",
            "Teacher": "teacher", "Nurse": "nurse",
            "Homeroom Teacher": "teacher", "School Nurse": "nurse",
            // Spanish
            "Profesora": "teacher", "Enfermera": "nurse",
            // Japanese
            "ソヨン": "seyoun", "ユナ": "yuna", "ダイン": "dain",
            "担任先生": "teacher", "保健先生": "nurse",
            // French
            "Professeur Principal": "teacher", "Infirmière Scolaire": "nurse",
            // German
            "Klassenlehrerin": "teacher", "Lehrerin": "teacher", "Schulkrankenschwester": "nurse",
            // Unknown
            "???": "seyoun"
        };
    }

    /**
     * 말하는 캐릭터에 애니메이션 효과 적용
     * - 대사 시작 시 캐릭터 이미지에 'char-talking' 클래스 추가
     * - 대사 완료 시 클래스 제거
     *
     * @param {string} charName - 말하는 캐릭터 이름
     * @param {boolean} isStarting - true: 대사 시작, false: 대사 끝
     */
    updateTalkingAnimation(charName, isStarting) {
        const charSlots = this.uiManager.charSlots;

        // 주인공이나 시스템 메시지는 애니메이션 없음
        if (!charName || charName === "나" || charName === "Me" || charName === "시스템" || charName === "System") {
            // 모든 캐릭터의 말하기 애니메이션 제거
            Object.values(charSlots).forEach(slot => {
                if (!slot) return;
                slot.querySelectorAll('img').forEach(img => img.classList.remove('char-talking'));
            });
            return;
        }

        // 캐릭터 이름으로 이미지 파일명 키 찾기
        const targetKey = this.charFileMap[charName] || charName.toLowerCase();

        // 해당 캐릭터의 이미지에만 애니메이션 적용
        Object.values(charSlots).forEach(slot => {
            if (!slot) return;
            slot.querySelectorAll('img').forEach(img => {
                const src = img.src.toLowerCase();
                if (src.includes(targetKey)) {
                    // 이 캐릭터가 말하는 중
                    if (isStarting) img.classList.add('char-talking');
                    else img.classList.remove('char-talking');
                } else {
                    // 다른 캐릭터는 말하기 애니메이션 끄기
                    img.classList.remove('char-talking');
                }
            });
        });
    }

    /**
     * 대사 텍스트의 플레이스홀더를 실제 값으로 치환
     *
     * ▶ 처리하는 패턴:
     *   - {name}: 플레이어 이름으로 치환
     *   - {name?}: 캐릭터가 이름을 알면 이름, 모르면 "전학생"
     *   - {affinity_list}: 전체 캐릭터 호감도 현황표
     *
     * @param {string} text - 원본 텍스트
     * @param {string} charName - 말하는 캐릭터 이름
     * @returns {string} 처리된 텍스트
     */
    processPlaceholders(text, charName) {
        const lang = window.GAME_LANG || document.documentElement.lang || 'ko';
        const isEn = lang === 'en';

        // 주인공/시스템 메시지인지 확인
        const isPlayer = charName === "나" || charName === "Me" || charName === "시스템" || charName === "System";
        const charKey = charName && (this.charNameMap[charName] || charName);

        // 이 캐릭터가 플레이어 이름을 알고 있는지 확인
        const nameKnown = charKey && this.stateManager.getFlag(`knows_name_${charKey.toLowerCase()}`);
        const defaultTitle = { es: "Estudiante Transferido", ja: "転校生", en: "Transfer Student", fr: "Élève transféré", de: "Austauschschüler", pt: "Aluno Transferido" }[lang] || "전학생";

        let processedText = text;

        // 한국어: 조사 처리 포함
        if (lang === 'ko' && !isPlayer) {
            // {name?}: 이름을 아는지에 따라 다르게 표시
            const nameForQuestion = nameKnown ? this.stateManager.playerName : defaultTitle;
            processedText = this.koreanProcessor.processName(text, nameForQuestion, "{name\\?}");
            // {name}: 항상 플레이어 이름으로
            processedText = this.koreanProcessor.processName(processedText, this.stateManager.playerName, "{name}");
        } else {
            // 영어/스페인어/일본어: 단순 치환
            const nameToUse = nameKnown ? this.stateManager.playerName : defaultTitle;
            processedText = text.replace(/{name\?}/g, nameToUse).replace(/{name}/g, this.stateManager.playerName);
        }

        // {affinity_list}: 호감도 현황표 생성
        if (processedText.includes("{affinity_list}")) {
            processedText = processedText.replace(/{affinity_list}/g, this.generateAffinityList(isEn));
        }

        return processedText;
    }

    /**
     * 호감도 현황표 생성 (텍스트 형태)
     * - 만난 적 있는 캐릭터만 표시
     * - 하트 이모지로 게이지 표현
     *
     * @param {boolean} isEn - 영어 버전 여부
     * @returns {string} 호감도 현황 텍스트
     */
    generateAffinityList(isEn) {
        const lang = window.GAME_LANG || document.documentElement.lang || 'ko';
        const charNamesByLang = {
            en: { Seoyeon: "Seoyeon", Yuna: "Yuna", Dain: "Dain", Teacher: "Teacher", Nurse: "Nurse" },
            es: { Seoyeon: "Seoyeon", Yuna: "Yuna", Dain: "Dain", Teacher: "Profesora", Nurse: "Enfermera" },
            ja: { Seoyeon: "ソヨン", Yuna: "ユナ", Dain: "ダイン", Teacher: "担任先生", Nurse: "保健先生" },
            fr: { Seoyeon: "Seoyeon", Yuna: "Yuna", Dain: "Dain", Teacher: "Professeur Principal", Nurse: "Infirmière Scolaire" },
            de: { Seoyeon: "Seoyeon", Yuna: "Yuna", Dain: "Dain", Teacher: "Homeroom", Nurse: "Health Room" },
            ko: { Seoyeon: "서연", Yuna: "유나", Dain: "다인", Teacher: "담임선생님", Nurse: "보건선생님" }
        };
        const charNames = charNamesByLang[lang] || charNamesByLang.ko;

        let listStr = { es: "\n\n[Estado de Afinidad]\n", ja: "\n\n[好感度状況]\n", en: "\n\n[Affinity Status]\n", fr: "\n\n[État d'Affinité]\n", de: "\n\n[Zuneigungsstatus]\n", pt: "\n\n[Status de Afinidade]\n" }[lang] || "\n\n[호감도 현황]\n";

        for (const [key, name] of Object.entries(charNames)) {
            // 만난 적 없는 캐릭터는 건너뛰기
            if (!this.stateManager.getFlag("met_" + key.toLowerCase())) continue;

            const affinity = this.stateManager.getAffinity(key);
            let bar = "";

            // 호감도에 따라 하트 게이지 생성
            if (affinity >= 0) {
                const filled = Math.min(10, Math.floor(affinity / 10));
                bar = "❤️".repeat(filled) + "🤍".repeat(10 - filled);
            } else {
                const broken = Math.min(10, Math.floor(Math.abs(affinity) / 10));
                bar = "💔".repeat(broken) + "🤍".repeat(10 - broken);
            }

            listStr += `${name}: ${bar} (${affinity}%)\n`;
        }

        return listStr;
    }

    /**
     * 텍스트 파싱 헬퍼 함수: **지문** 형태를 별도의 블록 박스로 변환
     * @param {string} text
     * @returns {string}
     */
    parseNarration(text) {
        // HTML 이스케이프 처리 (사용자 입력 등에서 태그 깨짐 방지)
        let escapedText = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');

        // * 로 시작해서 * 로 끝나거나, 문자열 끝까지 가는 부분을 매칭
        // 타이핑 중에는 닫는 * 가 아직 없을 수 있으므로 (\*)? 로 처리
        // 앞뒤의 공백(\s*)도 함께 매칭하여 제거 (블록 요소이므로 여백은 CSS margin으로 처리)
        return escapedText.replace(/\s*\*([^*]+)(?:\*)?\s*/g, '<div style="background: rgba(0, 0, 0, 0.4); padding: 12px 16px; border-radius: 8px; margin: 8px 0; font-size: 0.95em; color: rgba(255, 255, 255, 0.85); line-height: 1.6; font-style: italic; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">$1</div>');
    }

    /**
     * 텍스트 타이핑 효과 (한 글자씩 출력)
     *
     * ▶ 작동 방식:
     *   requestAnimationFrame을 사용해 부드러운 타이핑 효과 구현
     *   typingSpeed 간격으로 한 글자씩 추가
     *
     * ▶ 스킵:
     *   타이핑 중 클릭하면 skipTyping = true가 되어 즉시 완료
     *
     * @param {string} text - 출력할 텍스트
     * @param {string} charName - 말하는 캐릭터 이름
     * @returns {Promise} 타이핑 완료 시 resolve
     */
    typeText(text, charName) {
        // 텍스트가 없으면 바로 완료
        if (text === undefined || text === null) {
            console.warn("[DialogueSystem] typeText: 텍스트 없음");
            return Promise.resolve();
        }

        // 플레이스홀더 처리
        const processedText = this.processPlaceholders(text, charName);

        // 말하기 애니메이션 시작
        this.updateTalkingAnimation(charName, true);

        return new Promise((resolve) => {
            this.isTyping = true;
            this.skipTyping = false;

            // 스킵 버튼은 타이핑/AI 응답 대기 중에도 활성 유지

            // 대사창 초기화
            this.uiManager.messageEl.innerHTML = "";

            // 이미지 포함 여부 확인 (Base64 데이터가 있으면 이미지)
            const hasImage = processedText.includes('data:image/');
            let textPart = processedText;
            let imagePart = "";

            if (hasImage) {
                if (processedText.includes('\n\ndata:image/')) {
                    const parts = processedText.split('\n\ndata:image/');
                    textPart = parts[0];
                    imagePart = 'data:image/' + parts[1];
                } else if (processedText.startsWith('data:image/')) {
                    textPart = "";
                    imagePart = processedText;
                }
            }

            let charIndex = 0;      // 현재까지 표시한 글자 수
            let startTime = null;   // 타이핑 시작 시각

            // 애니메이션 프레임 함수
            const typeFrame = (timestamp) => {
                if (!startTime) startTime = timestamp;

                // 스킵 요청이 들어오면 즉시 전체 텍스트 표시
                if (this.skipTyping) {
                    this.uiManager.messageEl.innerHTML = this.parseNarration(textPart);
                    this.isTyping = false;
                    if (this.uiManager.chatSkipBtn) this.uiManager.chatSkipBtn.disabled = false;
                    this.skipTyping = false;
                    this.updateTalkingAnimation(charName, false);
                    const msgEl = this.uiManager.messageEl;
                    if (msgEl) msgEl.scrollTop = msgEl.scrollHeight;
                    resolve();
                    return;
                }

                const elapsed = timestamp - startTime;
                const speed = this._endingMode ? this._endingTypingSpeed : this.typingSpeed;
                const targetIndex = Math.min(Math.floor(elapsed / speed), textPart.length);

                if (charIndex < targetIndex) {
                    const currentText = textPart.substring(0, targetIndex);
                    this.uiManager.messageEl.innerHTML = this.parseNarration(currentText);
                    charIndex = targetIndex;
                    // 대사가 길어지면 대화창을 최신 텍스트로 자동 스크롤
                    const msgEl = this.uiManager.messageEl;
                    if (msgEl) msgEl.scrollTop = msgEl.scrollHeight;
                }

                if (charIndex < textPart.length) {
                    requestAnimationFrame(typeFrame);
                } else {
                    this.isTyping = false;
                    if (this.uiManager.chatSkipBtn) this.uiManager.chatSkipBtn.disabled = false;
                    this.updateTalkingAnimation(charName, false);

                    // 이미지가 있으면 추가
                    if (imagePart) {
                        const img = document.createElement('img');
                        img.src = imagePart;
                        img.className = 'chat-image';
                        img.onclick = () => {
                            if (window.openImageModal) window.openImageModal(imagePart);
                        };
                        this.uiManager.messageEl.appendChild(img);
                    }

                    // 타이핑 완료 후 최신 내용으로 스크롤
                    const msgEl = this.uiManager.messageEl;
                    if (msgEl) msgEl.scrollTop = msgEl.scrollHeight;

                    resolve();
                }
            };

            requestAnimationFrame(typeFrame);
        });
    }

    /**
     * 타이핑 스킵 요청
     * - 대화창 클릭 시 호출됨
     * - 타이핑 중이면 즉시 완료 플래그 설정
     */
    requestSkip() {
        if (this.isTyping) this.skipTyping = true;
    }

    /**
     * 현재 타이핑 중인지 확인
     * @returns {boolean} 타이핑 중이면 true
     */
    isCurrentlyTyping() {
        return this.isTyping;
    }
}

window.DialogueSystem = DialogueSystem;
