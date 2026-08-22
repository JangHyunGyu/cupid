// ============================================================================
// GameEngine.js - 게임 전체 제어 메인 엔진 모듈
// ============================================================================
// 📌 파일 목적:
//   main.js에서 분리된 GameEngine 클래스 모듈입니다.
//   게임의 모든 하위 시스템을 통합하고 전체 흐름을 제어하는 최상위 클래스입니다.
//   사용자 입력 이벤트 처리, 씬 전환, 저장/불러오기, 전역 함수 제공 등을 담당합니다.
//
// 📌 의존성:
//   - window.StateManager    (StateManager.js)    : 게임 상태 관리
//   - window.SaveManager     (SaveManager.js)     : 저장/불러오기
//   - window.GalleryManager  (GalleryManager.js)  : 갤러리 해금
//   - window.UIManager       (UIManager.js)       : 화면 UI 제어
//   - window.SceneRenderer   (SceneRenderer.js)   : 씬 렌더링
//   - window.DialogueSystem  (DialogueSystem.js)  : 대화 출력
//   - window.FreeTalkSystem  (FreeTalkSystem.js)  : AI 프리토킹 대화
//   - soundManager           (sound.js)           : 사운드(BGM/SFX) 재생 관리
//
// 📌 window 노출:
//   window.GameEngine = GameEngine
// ============================================================================

// ============================================================================================
// 🎮 GameEngine 클래스 - 게임 전체 제어 (메인 엔진)
// ============================================================================================
// 📌 게임의 모든 시스템을 통합하고 전체 흐름을 제어하는 최상위 클래스입니다.
//    이 클래스가 모든 하위 시스템을 생성하고 연결합니다.

/**
 * 게임 엔진 클래스 (메인 컨트롤러)
 *
 * ▶ 역할:
 *   - 모든 하위 시스템 인스턴스 생성 및 관리
 *   - 사용자 입력 이벤트 처리 (클릭, 키보드 등)
 *   - 씬 전환 및 게임 흐름 제어
 *   - 저장/불러오기 트리거
 *   - HTML에서 호출하는 전역 함수 제공
 *
/**
 * ═══════════════════════════════════════════════════════════════════════════
 * 🎮 GameEngine 클래스 - 게임 전체 제어 (메인 엔진)
 * ═══════════════════════════════════════════════════════════════════════════
 * 📌 게임의 모든 시스템을 통합하고 전체 흐름을 제어하는 최상위 클래스입니다.
 *    이 클래스가 모든 하위 시스템을 생성하고 연결합니다.
 *
 * ▶ 역할:
 *   - 모든 하위 시스템 인스턴스 생성 및 관리
 *   - 사용자 입력 이벤트 처리 (클릭, 키보드 등)
 *   - 씬 전환 및 게임 흐름 제어
 *   - 저장/불러오기 트리거
 *   - HTML에서 호출하는 전역 함수 제공
 *
 * ▶ 클래스 관계도:
 *   GameEngine
 *   ├── StateManager      (게임 데이터)
 *   ├── SaveManager       (저장/불러오기)
 *   ├── GalleryManager    (갤러리 해금)
 *   ├── UIManager         (화면 UI)
 *   ├── SceneRenderer     (씬 렌더링)
 *   ├── DialogueSystem    (대화 출력)
 *   └── FreeTalkSystem    (AI 대화)
 *
 * ⚠️ 문제 해결 가이드:
 *
 *   1. "게임이 시작 안 됨"
 *      → 콘솔(F12)에서 오류 메시지 확인
 *      → scenario.js, prompts.js, characters.js가 먼저 로드되었는지 확인
 *      → SCENARIO 객체가 정의되어 있는지 확인
 *
 *   2. "이어하기가 작동 안 함"
 *      → localStorage에 'cupid_save' 키가 있는지 확인
 *      → 콘솔: console.log(window.CupidStorage.getItem('cupid_save'))
 *
 *   3. "버튼 클릭이 안 됨"
 *      → bindEvents() 메서드에서 해당 버튼 확인
 *      → DOM 요소가 제대로 로드되었는지 확인
 *
 *   4. "호감도가 저장 안 됨"
 *      → StateManager.changeAffinity() 로그 확인
 *      → saveGame() 호출 확인
 */
class GameEngine {
    /**
     * 생성자 - 게임 엔진 초기화
     *
     * ▶ 초기화 순서:
     *   1. 하위 시스템 인스턴스 생성 (의존성 순서 중요!)
     *   2. 이벤트 핸들러 연결
     *   3. 전역 함수 등록
     *
     * ⚠️ 의존성 순서:
     *   StateManager, GalleryManager가 먼저 생성되어야
     *   UIManager, SceneRenderer 등에서 참조할 수 있음
     */
    constructor() {
        // ════════════════════════════════════════════════════════════════
        // 📌 하위 시스템 인스턴스 생성 (의존성 순서대로!)
        // ════════════════════════════════════════════════════════════════

        /**
         * 게임 상태 관리자 - 이름, 호감도, 플래그 등
         * 🔧 디버깅: gameEngine.stateManager.exportState()로 전체 상태 확인
         */
        this.stateManager = new StateManager();

        /**
         * 저장 관리자 - localStorage 저장/불러오기
         * 🔧 디버깅: window.CupidStorage.getItem('cupid_save')로 저장 데이터 확인
         */
        this.saveManager = new SaveManager('cupid_save');

        /**
         * 갤러리 관리자 - CG, 캐릭터 해금
         * 🔧 디버깅: window.CupidStorage.getItem('cupid_gallery')로 해금 현황 확인
         */
        this.galleryManager = new GalleryManager('cupid_gallery');

        /**
         * UI 관리자 - DOM 요소 제어
         * 🔧 디버깅: 요소가 null이면 HTML에서 해당 ID 확인
         */
        this.uiManager = new UIManager(this.stateManager, this.galleryManager);

        /**
         * 씬 렌더러 - 배경, 캐릭터 렌더링
         * 🔧 디버깅: gameEngine.sceneRenderer.currentSceneId로 현재 씬 확인
         */
        this.sceneRenderer = new SceneRenderer(this.stateManager, this.galleryManager, this.uiManager);

        /**
         * 대화 시스템 - 타이핑 효과
         * 🔧 디버깅: gameEngine.dialogueSystem.isTyping으로 타이핑 상태 확인
         */
        this.dialogueSystem = new DialogueSystem(this.stateManager, this.uiManager);

        /**
         * 프리토킹 시스템 - AI 대화
         * 🔧 디버깅: gameEngine.freeTalkSystem.isFreeTalking으로 프리토킹 상태 확인
         */
        this.freeTalkSystem = new FreeTalkSystem(
            this.stateManager, this.galleryManager, this.uiManager, this.dialogueSystem
        );

        /** 씬 렌더링 중 클릭 방지 플래그 (비동기 로딩 완료 전 씬 스킵 방지) */
        this._isRendering = false;

        /** 엔딩 CG 감상 잠금 플래그 (CG 씬에서 N초간 클릭 무시) */
        this._cgLocked = false;

        // ════════════════════════════════════════════════════════════════
        // 📌 이벤트 핸들러 연결 및 전역 함수 등록
        // ════════════════════════════════════════════════════════════════
        this.bindEvents();          // 클릭, 키보드 이벤트 등
        this.exposeGlobalFunctions();  // window 객체에 함수 등록
    }

    _handleAsyncError(context, error) {
        console.error(`[GameEngine] ${context} error:`, error);
        this._reportCaughtError(context, error, 'game_engine_async_error');
        this._isRendering = false;
        if (this.freeTalkSystem) this.freeTalkSystem.isProcessingChat = false;
        if (this.uiManager?.chatSendBtn) this.uiManager.chatSendBtn.disabled = false;
        if (this.uiManager?.chatSkipBtn) this.uiManager.chatSkipBtn.disabled = false;
        if (this.uiManager?.chatInput) this.uiManager.chatInput.disabled = false;
        if (this.uiManager?.dialogueBox) this.uiManager.dialogueBox.classList.remove('thinking-box');
        document.querySelectorAll('.char-slot img').forEach(img => img.classList.remove('thinking'));
        document.querySelectorAll('.thinking-indicator').forEach(el => el.remove());
    }

    _reportCaughtError(context, error, errorType = 'game_engine_caught_error', extra = null) {
        try {
            const reporter = window.reportCupidCaughtError || window.logCupidError;
            if (typeof reporter === 'function') {
                reporter(error, {
                    source: 'cupid-game-engine',
                    errorType,
                    errorClass: error?.name || 'Error',
                    sessionId: this.sceneRenderer?.currentSceneId || '',
                    context: {
                        asyncContext: context,
                        sceneId: this.sceneRenderer?.currentSceneId || '',
                        day: this.stateManager?.currentDay || '',
                        language: window.GAME_LANG || document.documentElement?.lang || 'ko',
                        isFreeTalking: !!this.freeTalkSystem?.isFreeTalking
                    },
                    extra
                });
            }
        } catch (_) {}
    }

    _runAsync(context, task) {
        return Promise.resolve()
            .then(task)
            .catch(error => this._handleAsyncError(context, error));
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 🎯 bindEvents - 사용자 입력 이벤트 바인딩
     * ═══════════════════════════════════════════════════════════════
     *
     * ▶ 역할:
     *   화면의 각 요소에 클릭/키보드 이벤트 핸들러를 연결합니다.
     *   버튼을 눌렀을 때 어떤 동작을 할지 여기서 정의합니다.
     *
     * ⚠️ 버튼이 작동 안 하면?
     *   1. 해당 요소의 ID가 HTML에 있는지 확인
     *   2. 콘솔에서 this.uiManager.xxx가 null인지 확인
     *   3. 이벤트 핸들러 함수가 정의되어 있는지 확인
     */
    bindEvents() {
        // ─────────────────────────────────────────────────────────────
        // 📌 대화창(dialogue-box) 클릭 이벤트
        // ─────────────────────────────────────────────────────────────
        // 클릭하면 다음 대사로 넘어가거나, 타이핑 중이면 스킵
        if (this.uiManager.dialogueBox) {
            this.uiManager.dialogueBox.onclick = () => this._runAsync('dialogue click', () => this.handleDialogueClick());
        }

        // ─────────────────────────────────────────────────────────────
        // 📌 채팅(프리토킹) 관련 이벤트
        // ─────────────────────────────────────────────────────────────
        // 전송 버튼 클릭 → AI에게 메시지 전송
        if (this.uiManager.chatSendBtn) {
            this.uiManager.chatSendBtn.onclick = () => this._runAsync('chat send', () => this.freeTalkSystem.sendChatMessage(id => this.sceneRenderer.getScene(id)));
        }

        // 스킵 버튼 클릭 → 대화 중단 (버튼이 있는 경우에만)
        if (this.uiManager.chatSkipBtn) {
            this.uiManager.chatSkipBtn.onclick = () => this._runAsync('chat skip', () => this.freeTalkSystem.skipFreeTalk());
        }

        if (this.uiManager.chatInput) {
            this.uiManager.chatInput.addEventListener('input', () => this.uiManager.resizeChatInput());
            this.uiManager.chatInput.addEventListener('keydown', (event) => {
                if (!window.MessageComposerUtils?.shouldSubmitOnEnter(event)) return;

                event.preventDefault();
                if (this.uiManager.chatInput.disabled || this.uiManager.chatSendBtn?.disabled) return;
                this.uiManager.chatSendBtn?.click();
            });
            this.uiManager.resizeChatInput();
        }

        // ─────────────────────────────────────────────────────────────
        // 📌 이름 입력 관련 이벤트
        // ─────────────────────────────────────────────────────────────
        // 확인 버튼 클릭 → 이름 저장 후 다음 씬
        if (this.uiManager.nameConfirmBtn) {
            this.uiManager.nameConfirmBtn.onclick = () => this._runAsync('name confirm', () => this.handleNameConfirm());
        }

        // Enter 키로도 확인 가능
        if (this.uiManager.playerNameInput) {
            this.uiManager.playerNameInput.onkeypress = (e) => {
                if (e.key === 'Enter') this._runAsync('name enter', () => this.handleNameConfirm());
            };

            // 포커스가 빠져나가면 다시 잡아주기 (사용자 편의)
            // 단, 확인 버튼 클릭으로 포커스 이동한 경우는 제외
            this.uiManager.playerNameInput.onblur = (e) => {
                if (e.relatedTarget === this.uiManager.nameConfirmBtn) return;
                if (this.uiManager.nameInputContainer.style.display === 'block') {
                    setTimeout(() => this.uiManager.playerNameInput.focus(), 10);
                }
            };
        }
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 🌐 exposeGlobalFunctions - HTML에서 호출 가능한 전역 함수 등록
     * ═══════════════════════════════════════════════════════════════
     *
     * ▶ 왜 필요한가?
     *   HTML의 onclick="함수명()" 같은 인라인 이벤트에서
     *   클래스 메서드를 직접 호출할 수 없으므로
     *   window 객체에 함수를 등록해둡니다.
     *
     * ▶ 사용 예시 (HTML):
     *   <button onclick="goToHome()">홈으로</button>
     *   <button onclick="openSettingsModal()">설정</button>
     *
     * ⚠️ "xxx is not defined" 오류가 나면?
     *   → 여기에 해당 함수가 등록되어 있는지 확인
     *   → window.xxx = () => ... 형태로 추가
     */
    exposeGlobalFunctions() {
        // ─────────────────────────────────────────────────────────────
        // 🏠 홈/설정 관련 함수 (UI 모달 제어)
        // ─────────────────────────────────────────────────────────────
        window.showHomeConfirm = () => this.uiManager.showHomeConfirm();     // 홈 확인 모달 표시
        window.closeHomeConfirm = (e) => this.uiManager.closeHomeConfirm(e); // 홈 확인 모달 닫기
        window.goToHome = () => this.uiManager.goToHome();                   // 실제 홈으로 이동
        window.openSettingsModal = () => this.uiManager.openSettingsModal(); // 설정 모달 열기
        window.closeSettingsModal = (e) => this.uiManager.closeSettingsModal(e); // 설정 모달 닫기
        window.saveSettings = () => this.uiManager.saveSettings(
            this.sceneRenderer.currentSceneId,
            id => this.sceneRenderer.getScene(id)
        );

        // ─────────────────────────────────────────────────────────────
        // 💾 저장/불러오기 관련 함수
        // ─────────────────────────────────────────────────────────────
        window.saveGameState = () => this.saveGame();           // 수동 저장
        window.loadGameState = () => this.saveManager.load();   // 저장 데이터 불러오기
        window.hasSavedGame = () => this.saveManager.hasSave(); // 저장 데이터 유무 확인
        window.clearSavedGame = () => this.saveManager.clear(); // 저장 데이터 삭제

        // ─────────────────────────────────────────────────────────────
        // 🔧 gameState 프록시 설정 (하위 호환성)
        // ─────────────────────────────────────────────────────────────
        // 이전 버전에서 gameState.playerName처럼 접근하던 코드 지원
        // Proxy 객체를 사용해 속성 접근을 StateManager로 위임
        const self = this;
        window.gameState = new Proxy(this.stateManager, {
            // 속성 읽기: gameState.xxx → stateManager.xxx
            get(target, prop) {
                if (prop === 'playerName') return target.playerName;
                if (prop === 'currentDay') return target.currentDay;
                if (prop === 'stats') return target.stats;
                if (prop === 'chatMemories') return target.chatMemories;
                if (prop in target) return target[prop];
                return target.flags[prop];  // 그 외는 플래그로 간주
            },
            // 속성 쓰기: gameState.xxx = value → stateManager에 반영
            set(target, prop, value) {
                if (prop === 'playerName') target.playerName = value;
                else if (prop === 'currentDay') target.currentDay = value;
                else target.flags[prop] = value;  // 그 외는 플래그로 간주
                return true;
            }
        });
    }

    /**
     * 엔딩/에필로그 씬 판별
     * — 이 씬들은 타이핑 스킵 불가 (플레이어가 대사를 끝까지 읽도록 강제)
     */
    _isEndingScene(sceneId) {
        if (!sceneId) return false;
        return /^(perfect_|good_|bitter_|confess_fail_|harem_|hidden_perfect_|hidden_good_|ending_|day5_ending_)/.test(sceneId)
            || sceneId.includes('_epilogue_') || sceneId.includes('epilogue_');
    }

    /** 대화창 클릭 처리 */
    async handleDialogueClick() {
        // 씬 렌더링 중이면 클릭 무시 (배경/캐릭터 로딩 완료 전 스킵 방지)
        if (this._isRendering) return;

        // 엔딩 CG 감상 중이면 클릭 무시 (4초간 스킵 불가)
        if (this._cgLocked) return;

        // 타이핑 중이면 스킵 (단, 엔딩/에필로그는 스킵 불가 — 끝까지 감상)
        if (this.dialogueSystem.isCurrentlyTyping()) {
            if (this._isEndingScene(this.sceneRenderer.currentSceneId)) return;
            this.dialogueSystem.requestSkip();
            return;
        }

        // ─────────────────────────────────────────────────────────────
        // 💬 대화창 클릭 처리 로직
        //
        // 클릭 시 상황에 따라 다르게 동작:
        // 1. 프리토킹 종료 후 → 다음 씬으로 자동 진행
        // 2. 프리토킹 중/이름 입력 중 → 클릭 무시 (별도 UI 사용)
        // 3. 시네마틱 장면 → 클릭 무시 (자동 진행됨)
        // 4. 선택지 있음 → 선택지 버튼 표시
        // 5. 선택지 없음 → 다음 씬으로 진행
        // ─────────────────────────────────────────────────────────────

        // 현재 보고 있는 씬 데이터 가져오기
        const scene = this.sceneRenderer.getScene(this.sceneRenderer.currentSceneId);
        if (!scene) {
            // 씬 데이터 없으면 오류 메시지 표시
            const lang = window.GAME_LANG || document.documentElement.lang || 'ko';
            const errorMsg = { es: "Escena no encontrada. Verifica los datos del escenario.", ja: "シーンが見つかりません。シナリオデータを確認してください。", en: "Scene not found. Please check the scenario data.", fr: "Scène introuvable. Veuillez vérifier les données du scénario.", de: "Szene nicht gefunden. Bitte überprüfe die Szenariodaten.", pt: "Cena não encontrada. Verifique os dados do cenário." }[lang] || "씬을 찾을 수 없습니다. 시나리오 데이터를 확인하세요.";
            await this.uiManager.showModal(errorMsg, true);
            return;
        }

        // ✅ 케이스 1: 프리토킹이 방금 끝났을 때
        // - 프리토킹 종료 후 대화창을 클릭하면 다음 씬으로 넘어감
        if (scene.type === 'group_free_talk'
            && this.freeTalkSystem.isFreeTalking
            && this.freeTalkSystem.advanceGroupMessageQueue?.()) {
            return;
        }

        if ((scene.type === 'free_talk' || scene.type === 'group_free_talk')
            && !this.freeTalkSystem.isFreeTalking) {
            const nextId = this.sceneRenderer.resolveNextScene(scene);
            if (nextId) {
                await this.renderScene(nextId);
            } else {
                // 다음 씬이 없으면 오류 메시지
                const lang = window.GAME_LANG || document.documentElement.lang || 'ko';
                const errorMsg = { es: "Siguiente escena no definida. Verifica los datos del escenario.", ja: "次のシーンが定義されていません。シナリオデータを確認してください。", en: "Next scene not defined. Please check the scenario data.", fr: "Scène suivante non définie. Veuillez vérifier les données du scénario.", de: "Nächste Szene nicht definiert. Bitte überprüfe die Szenariodaten.", pt: "Próxima cena não definida. Verifique os dados do cenário." }[lang] || "다음 씬이 정의되지 않았습니다. 시나리오 데이터를 확인하세요.";
                await this.uiManager.showModal(errorMsg, true);
            }
            return;
        }

        // ✅ 케이스 2: 프리토킹 중이거나 이름 입력/크레딧 모드일 때
        // - 별도의 입력 UI를 사용하므로 클릭 무시
        if (this.freeTalkSystem.isFreeTalking || scene.type === 'input' || scene.type === 'credits') return;

        // ✅ 케이스 3: 시네마틱(연출) 장면일 때
        // - 텍스트도 없고 선택지도 없는 순수 연출 장면
        // - 자동 진행되므로 사용자 클릭 무시
        if (!scene.text && (!scene.choices || scene.choices.length === 0)) return;

        // ✅ 케이스 4 & 5: 선택지가 있거나 없는 일반 대화 장면
        if (scene.choices) {
            // 조건을 만족하는 선택지만 필터링
            const availableChoices = this.getAvailableChoices(scene.choices);

            // 🔄 선택지가 모두 조건을 충족하지 못하면 다음 씬으로
            if (availableChoices.length === 0) {
                const nextId = this.sceneRenderer.resolveNextScene(scene);
                if (nextId) {
                    await this.renderScene(nextId);
                } else {
                    // 다음 씬이 없으면 오류 메시지
                    const lang = window.GAME_LANG || document.documentElement.lang || 'ko';
                    const errorMsg = { es: "No hay opciones disponibles y no se ha definido la siguiente escena. Revisa los datos del escenario.", ja: "選択肢がなく、次のシーンが定義されていません。シナリオデータを確認してください。", en: "No choices are available, and the next scene is not defined. Please check the scenario data.", fr: "Aucun choix n'est disponible et la scène suivante n'est pas définie. Vérifiez les données du scénario.", de: "Es sind keine Auswahlmöglichkeiten verfügbar, und die nächste Szene ist nicht definiert. Überprüfe die Szenariodaten.", pt: "Não há opções disponíveis, e a próxima cena não foi definida. Verifique os dados do cenário." }[lang] || "선택지가 없고 다음 씬이 정의되지 않았습니다. 시나리오 데이터를 확인하세요.";
                    await this.uiManager.showModal(errorMsg, true);
                }
                return;
            }

            // 🔄 "다음" 버튼 하나만 있으면 자동으로 실행
            // - UX 개선: 의미없는 "다음" 클릭을 생략
            if (availableChoices.length === 1 &&
                (availableChoices[0].text === "다음" || availableChoices[0].text === "Next")) {
                await this.executeChoice(availableChoices[0]);
                return;
            }

            // 여러 선택지가 있으면 버튼으로 표시
            this.showChoices(availableChoices);
        } else {
            // 선택지 없으면 바로 다음 씬으로
            const nextId = this.sceneRenderer.resolveNextScene(scene);
            if (nextId) {
                await this.renderScene(nextId);
            } else {
                // 다음 씬이 없으면 오류 메시지
                const lang = window.GAME_LANG || document.documentElement.lang || 'ko';
                const errorMsg = { es: "Siguiente escena no definida. Verifica los datos del escenario.", ja: "次のシーンが定義されていません。シナリオデータを確認してください。", en: "Next scene not defined. Please check the scenario data.", fr: "Scène suivante non définie. Veuillez vérifier les données du scénario.", de: "Nächste Szene nicht definiert. Bitte überprüfe die Szenariodaten.", pt: "Próxima cena não definida. Verifique os dados do cenário." }[lang] || "다음 씬이 정의되지 않았습니다. 시나리오 데이터를 확인하세요.";
                await this.uiManager.showModal(errorMsg, true);
            }
        }
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 🔍 getAvailableChoices - 사용 가능한 선택지만 필터링
     * ═══════════════════════════════════════════════════════════════
     *
     * ▶ 목적:
     * 시나리오 JSON에 정의된 선택지들 중에서 현재 게임 상태에 따라
     * 플레이어에게 보여줄 수 있는 선택지만 골라냅니다.
     *
     * ▶ 선택지 조건 시스템:
     * - condition: 이 플래그가 true여야 선택지가 보임
     *   예: { condition: "hasKey" } → hasKey 플래그가 있어야 "문 열기" 보임
     *
     * - excludeCondition: 이 플래그가 true면 선택지가 숨겨짐
     *   예: { excludeCondition: "metBefore" } → 만난 적 있으면 "첫 인사" 숨김
     *
     * ▶ 사용 예시:
     *
     * [시나리오 JSON]
     * choices: [
     *   { text: "꽃 선물하기", condition: "boughtFlowers" },      // 꽃을 샀을 때만
     *   { text: "그냥 인사하기" },                                 // 항상 표시
     *   { text: "첫 만남 대화", excludeCondition: "metBefore" }   // 처음만
     * ]
     *
     * @param {Array} choices - 시나리오에 정의된 전체 선택지 배열
     * @returns {Array} 조건을 만족하는 선택지만 담긴 새 배열
     */
    getAvailableChoices(choices) {
        return choices.filter(choice => {
            // 📌 condition 체크: 필수 조건 플래그가 없으면 제외
            if (choice.condition && !this.stateManager.getFlag(choice.condition)) return false;

            // 📌 excludeCondition 체크: 제외 조건 플래그가 있으면 제외
            if (choice.excludeCondition && this.stateManager.getFlag(choice.excludeCondition)) return false;

            // 두 조건 모두 통과하면 선택지 표시
            return true;
        });
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 🎯 showChoices - 선택지 버튼들을 화면에 표시
     * ═══════════════════════════════════════════════════════════════
     *
     * ▶ 목적:
     * 플레이어가 선택할 수 있는 버튼들을 화면 중앙에 표시합니다.
     * 선택지를 무작위로 섞어서 매 플레이마다 위치가 달라지게 합니다.
     *
     * ▶ 처리 과정:
     * 1. 대화창 숨기기 (선택지에 집중하도록)
     * 2. 기존 선택지 버튼들 제거
     * 3. 선택지 순서 랜덤 셔플 (동일한 선택 패턴 방지)
     * 4. 각 선택지마다 버튼 생성
     * 5. {name} 플레이스홀더를 플레이어 이름으로 교체
     * 6. 클릭 이벤트 연결
     *
     * ▶ UI 구조:
     * <div id="choice-container">
     *   <button class="choice-btn">선택지 1</button>
     *   <button class="choice-btn">선택지 2</button>
     *   <button class="choice-btn">선택지 3</button>
     * </div>
     *
     * @param {Array} choices - 표시할 선택지 배열 [{text, next, ...}, ...]
     */
    showChoices(choices) {
        // 📌 대화창 숨기고 선택지 컨테이너 비우기
        this.uiManager.dialogueBox.style.display = 'none';
        this.uiManager.choiceContainer.innerHTML = "";

        // 🔀 선택지 순서 랜덤 셔플 (원본 배열을 변경하지 않도록 복사)
        choices = [...choices];
        for (let i = choices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [choices[i], choices[j]] = [choices[j], choices[i]];
        }

        // 📌 각 선택지마다 버튼 생성 (시차 애니메이션 적용)
        choices.forEach((choice, index) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';

            // 시차(stagger) 애니메이션: 각 버튼이 80ms 간격으로 순차 등장
            btn.style.animationDelay = `${index * 80}ms`;

            // {name} 플레이스홀더를 실제 플레이어 이름으로 치환
            let choiceText = (choice.text || '').replace(/{name}/g, this.stateManager.playerName);

            // 지문 파싱 적용 (일반 대화와 동일하게 *...* 를 지문 블록으로 변환)
            if (this.dialogueSystem && typeof this.dialogueSystem.parseNarration === 'function') {
                btn.innerHTML = this.dialogueSystem.parseNarration(choiceText);
            } else {
                btn.textContent = choiceText;
            }

            // 클릭하면 해당 선택지 실행 (async 함수이므로 에러 처리 포함)
            btn.onclick = async () => {
                try {
                    await this.executeChoice(choice);
                } catch (e) {
                    console.error('[GameEngine] executeChoice 오류:', e);
                    this._handleAsyncError('choice click', e);
                }
            };

            this.uiManager.choiceContainer.appendChild(btn);
        });

        // 📌 선택지 컨테이너 보이게 설정 (flex로 세로 정렬)
        this.uiManager.choiceContainer.style.display = 'flex';

        // 📌 렌파이 스타일 연타 방지: 마지막 버튼 애니메이션 완료 후 클릭 활성화
        // 마지막 버튼 stagger delay + 애니메이션 duration(1500ms)
        const totalDelay = (choices.length - 1) * 80 + 1500;
        setTimeout(() => {
            const buttons = this.uiManager.choiceContainer?.querySelectorAll('.choice-btn');
            if (buttons) {
                buttons.forEach(btn => btn.classList.add('choice-ready'));
            }
        }, totalDelay);
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * ⚡ executeChoice - 선택지 실행 및 결과 처리
     * ═══════════════════════════════════════════════════════════════
     *
     * ▶ 목적:
     * 플레이어가 선택지를 클릭했을 때 실행되는 핵심 로직입니다.
     * 선택에 따른 플래그 설정, 호감도 변화, 분기 처리를 담당합니다.
     *
     * ▶ 처리 순서:
     * 1. 플래그 설정 (setFlag, setFlags) - 게임 진행 상태 기록
     * 2. 스탯/호감도 변경 (stats) - 캐릭터별 호감도 증감 및 UI 반영
     * 3. 호감도 기반 분기 처리 (affinityBranches) - 조건에 따라 다음 씬 결정
     * 4. 다음 씬으로 이동 (next) - 결정된 씬 렌더링
     *
     * ▶ 선택지 데이터 구조 예시:
     * {
     *   text: "꽃을 선물한다",
     *   setFlag: "gaveFlower",                        // 단일 플래그 설정
     *   setFlags: ["romantic", "kind"],               // 복수 플래그 설정
     *   stats: {
     *     Seoyeon: { affinity: 10 },                  // 서연 호감도 +10
     *     Dain: { affinity: -5 },                     // 다인 호감도 -5 (질투)
     *     "#{current_character}": { affinity: 3 }     // 현재 대화중인 캐릭터 +3
     *   },
     *   affinityBranches: [                           // 호감도 기반 분기
     *     { minAffinity: 50, next: "good_ending" },   // 50 이상 → 굿엔딩
     *     { minAffinity: 20, next: "normal_ending" }  // 20 이상 → 노말엔딩
     *   ],
     *   affinityChar: "Seoyeon",                      // 분기 기준 캐릭터
     *   next: "bad_ending"                            // 기본 다음 씬 (조건 미달 시)
     * }
     *
     * @param {Object} choice - 실행할 선택지 객체
     */
    async executeChoice(choice) {
        // ─────────────────────────────────────────────────────────
        // 📌 1단계: 플래그 설정
        // ─────────────────────────────────────────────────────────
        // 플래그는 게임 진행 상황을 기록하는 true/false 값입니다.
        // 예: "gaveFlower" 플래그 → 이후 시나리오에서 "꽃을 줬는지" 확인 가능
        // 조건 분기: if (flag.gaveFlower) { "꽃 선물 받았던 장면이 기억나네요" }

        // 단일 플래그 설정 (setFlag: "flagName")
        if (choice.setFlag) this.stateManager.setFlag(choice.setFlag);

        // 플래그 초기화 (clearFlags: ["flag1", "flag2"])
        if (choice.clearFlags?.length) choice.clearFlags.forEach(flag => this.stateManager.setFlag(flag, false));

        // 복수 플래그 설정 (setFlags: ["flag1", "flag2"])
        // 하나의 선택으로 여러 플래그를 동시에 설정할 때 사용
        if (choice.setFlags?.length) choice.setFlags.forEach(flag => this.stateManager.setFlag(flag));

        // ─────────────────────────────────────────────────────────
        // 📌 2단계: 스탯(호감도) 변경
        // ─────────────────────────────────────────────────────────
        // 선택지에 따라 한 명 또는 여러 명의 호감도를 동시에 변경합니다.
        //
        // 처리 케이스:
        // 1. 일반 캐릭터: "Seoyeon", "Dain" 등 직접 지정
        // 2. 동적 캐릭터: "#{current_character}" → 현재 대화 중인 캐릭터로 자동 변환
        // 3. 복수 캐릭터: 한 선택지로 여러 캐릭터 호감도 동시 변경 가능
        //
        // 예시 상황:
        // - "서연을 칭찬한다" → Seoyeon +10, Dain -5 (질투)
        // - "선생님께 인사한다" → Teacher +5
        // - "현재 대화중인 캐릭터 선물" → #{current_character} +10

        if (choice.stats) {
            // stats 객체의 각 캐릭터별로 순회
            // 예: { Seoyeon: { affinity: 10 }, "#{current_character}": { affinity: 5 } }
            for (const [char, stats] of Object.entries(choice.stats)) {
                let charKey = char;

                // ───────────────────────────────────────────────────
                // 🔄 캐릭터 키 변환 처리
                // ───────────────────────────────────────────────────
                // char 값에 따라 두 가지 방식으로 처리:
                // 1. 동적 키인 경우: "#{current_character}" → 실제 캐릭터로 변환
                // 2. 일반 키인 경우: "Seoyeon", "소연" 등 → 정규화된 키로 변환

                if (char === "#{current_character}") {
                    // ═══════════════════════════════════════════════
                    // IF: 동적 키 처리 (런타임에 캐릭터 결정)
                    // ═══════════════════════════════════════════════
                    // "#{current_character}"는 현재 대화 중인 캐릭터를 가리키는 특수 키
                    // 예: 서연과 대화 중 → "Seoyeon"으로 변환
                    //     다인과 대화 중 → "Dain"으로 변환
                    //     유나와 대화 중 → "Yuna"로 변환
                    charKey = this.stateManager.getCurrentCharacter();

                    // 현재 대화중인 캐릭터가 없으면 스킵 (안전장치)
                    // 예: 내레이션 씬, 주인공 독백 등
                    if (!charKey) continue;

                } else {
                    // ═══════════════════════════════════════════════
                    // ELSE: 일반 키 처리 (고정된 캐릭터)
                    // ═══════════════════════════════════════════════
                    // 시나리오에 직접 지정된 캐릭터 이름을 정규화된 키로 변환
                    //
                    // charNameMap 예시:
                    // {
                    //   "소연": "Seoyeon",
                    //   "서연": "Seoyeon",  // 오타 허용
                    //   "Seoyeon": "Seoyeon", // 이미 정규화된 키
                    //   "다인": "Dain",
                    //   "Dain": "Dain"
                    // }
                    //
                    // 변환 예시:
                    // - "소연" 입력 → "Seoyeon" 반환
                    // - "Seoyeon" 입력 → "Seoyeon" 그대로 반환
                    // - 없는 키 입력 → 원본 그대로 반환 (|| char)
                    charKey = this.sceneRenderer.charNameMap[char] || char;
                }

                // ─────────────────────────────────────────────────
                // 💕 호감도 변경 및 UI 업데이트
                // ─────────────────────────────────────────────────
                // stats.affinity가 있고, 해당 캐릭터가 존재하는 경우만 처리
                if (stats.affinity && this.stateManager.stats[charKey]) {
                    // 1️⃣ 호감도 수치 변경
                    // changeAffinity(캐릭터, 변화량) → 새로운 호감도 반환
                    // 예: 현재 30 + 변화량 10 = 새 값 40
                    const newValue = this.stateManager.changeAffinity(charKey, stats.affinity);

                    // 2️⃣ 화면에 호감도 변화 애니메이션 표시
                    // +10이면 "♥ +10" 빨간색으로 띄움
                    // -5면 "💔 -5" 회색으로 띄움
                    this.uiManager.showAffinityChange(stats.affinity, charKey);

                    // 3️⃣ 갤러리 통계 업데이트
                    // 해당 캐릭터의 역대 최대 호감도 기록 업데이트
                    this.galleryManager.updateMaxAffinity(charKey, newValue);

                    // 4️⃣ 갤러리 해금 체크
                    // 호감도가 일정 수치 도달 시 갤러리 이미지 해금
                    // 예: 호감도 30 이상 → CG 1번 해금, 50 이상 → CG 2번 해금
                    this.galleryManager.checkAffinityUnlock(charKey, newValue);
                }
            }
        }

        // ─────────────────────────────────────────────────────────
        // 📌 3단계: 다음 씬 결정
        // 기본값은 choice.next, 호감도 분기가 있으면 덮어씀
        // ─────────────────────────────────────────────────────────
        let nextScene = choice.next;

        // 🔀 호감도 기반 분기 처리 (affinityBranches)
        // 특정 캐릭터의 현재 호감도에 따라 다른 씬으로 분기
        if (choice.affinityBranches && choice.affinityChar) {
            // 기준 캐릭터의 현재 호감도 가져오기
            const currentAff = this.sceneRenderer.getRoutingAffinity(
                choice.affinityChar,
                choice.affinityCandidates
            );

            // 호감도 높은 순으로 정렬 (내림차순)
            // → 가장 높은 조건부터 체크해서 첫 번째로 만족하는 것 선택
            // 동일한 minAffinity일 때는 배열 원래 순서 유지 (안정 정렬)
            const sortedBranches = [...choice.affinityBranches]
                .map((branch, index) => ({ ...branch, _originalIndex: index }))
                .sort((a, b) => b.minAffinity - a.minAffinity || a._originalIndex - b._originalIndex);

            for (const branch of sortedBranches) {
                // 현재 호감도가 최소 조건 이상이면 해당 분기로
                if (currentAff >= branch.minAffinity) {
                    nextScene = branch.next;
                    break;  // 첫 번째 매칭에서 종료
                }
            }
        }

        // ─────────────────────────────────────────────────────────
        // 📌 4단계: 씬 이동 실행
        // ─────────────────────────────────────────────────────────
        if (nextScene === 'index.html') {
            // 메인 메뉴로 돌아가기 (게임 종료) - 현재 언어에 맞는 index 페이지로 이동
            this.uiManager.goToHome();
        } else {
            // 다음 씬 렌더링
            await this.renderScene(nextScene);
        }
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 📝 handleNameConfirm - 플레이어 이름 입력 확인 처리
     * ═══════════════════════════════════════════════════════════════
     *
     * ▶ 목적:
     * 게임 시작 시 플레이어가 자신의 이름을 입력하면 이를 검증하고
     * 유효한 경우 저장한 뒤 다음 씬으로 진행합니다.
     *
     * ▶ 이름 규칙:
     * - 길이: 한글 1~6자, 영문 1~12자
     * - 허용 문자: 한글(가-힣), 영문(a-zA-Z)만
     * - 특수문자, 숫자, 공백 불가
     *
     * ▶ 정규식 설명:
     * /^[가-힣]{1,6}$/ 또는 /^[a-zA-Z]{1,12}$/
     *   ^          : 문자열 시작
     *   [a-zA-Z]   : 영문 대소문자 (1~12자)
     *   [가-힣]    : 한글 완성형 (1~6자)
     *   $          : 문자열 끝
     *
     * ▶ 처리 흐름:
     * 1. 입력값에서 앞뒤 공백 제거 (trim)
     * 2. 정규식으로 유효성 검사
     * 3. 실패 시 → 모달로 오류 메시지 표시
     * 4. 성공 시 → 이름 저장 → 입력창 숨김 → 다음 씬
     */
    async handleNameConfirm() {
        // 📌 입력값 가져와서 앞뒤 공백 제거
        const name = this.uiManager.playerNameInput.value.trim();

        // 📌 이름 유효성 검사 — 페이지 언어에 맞는 문자셋 허용
        //    (이전엔 한글/영문만 허용해서 ja/zh/악센트 이름 전원 거부 → 프리토킹 진입 차단)
        const lang = window.GAME_LANG || document.documentElement.lang || 'ko';
        const hasKorean = /[가-힣]/.test(name);
        const hasJamo = /[ㄱ-ㅎㅏ-ㅣ]/.test(name);
        const hasEnglish = /[a-zA-Z]/.test(name);
        const hasMixed = (hasKorean || hasJamo) && hasEnglish;

        let msg = '';

        if (hasMixed && lang === 'ko') {
            // 한영 혼합 입력
            msg = { es: "Por favor, usa solo coreano o solo inglés. No se permite mezclar.", ja: "名前は日本語（ひらがな・カタカナ・漢字）1〜8文字、または英字1〜12文字で入力してください。", en: "Please use only Korean or only English. Mixing is not allowed.", fr: "Veuillez utiliser uniquement le coréen ou uniquement l'anglais. Le mélange n'est pas autorisé.", de: "Bitte verwende nur Koreanisch oder nur Englisch. Mischen ist nicht erlaubt.", pt: "Use apenas coreano ou apenas inglês. Não é permitido misturar." }[lang] || "한글과 영문을 섞어서 사용할 수 없습니다.";
        } else if (hasJamo) {
            // 한글 자모만 입력 (ㄱ, ㅏ 등)
            msg = { es: "Por favor, ingresa caracteres coreanos completos (ej: 가, no ㄱ).", ja: "名前は日本語（ひらがな・カタカナ・漢字）1〜8文字、または英字1〜12文字で入力してください。", en: "Please enter complete Korean characters (e.g., 가, not ㄱ).", fr: "Veuillez entrer des caractères coréens complets (ex : 가, pas ㄱ).", de: "Bitte gib vollständige koreanische Zeichen ein (z.B. 가, nicht ㄱ).", pt: "Insira caracteres coreanos completos (ex.: 가, não ㄱ)." }[lang] || "완성된 한글을 입력해주세요. (예: ㄱ → 가)";
        } else if (lang === 'ko') {
            // KO 페이지: 한글 1-6자 또는 영문 1-12자
            const nameRegex = hasKorean ? /^[가-힣]{1,6}$/ : /^[a-zA-Z]{1,12}$/;
            if (!nameRegex.test(name)) {
                msg = "이름은 한글 1~6자 또는 영문 1~12자로 입력해주세요.";
            }
        } else if (lang === 'ja') {
            // JA 페이지: 히라가나/카타카나/한자 1-8자 또는 영문 1-12자
            const jaRegex = /^[\u3040-\u309F\u30A0-\u30FFー\u3005\u4E00-\u9FFF]{1,8}$/;
            const enRegex = /^[a-zA-Z]{1,12}$/;
            if (!jaRegex.test(name) && !enRegex.test(name)) {
                msg = "名前は日本語（ひらがな・カタカナ・漢字）1〜8文字、または英字1〜12文字で入力してください。";
            }
        } else {
            // en/es/fr/de/pt 페이지: Latin + 악센트 1-12자
            const latinRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿĀ-ſ]{1,12}$/;
            if (!latinRegex.test(name)) {
                msg = { en: "Please enter 1–12 letters (accents are allowed).", es: "Ingresa entre 1 y 12 letras (se permiten acentos).", fr: "Veuillez saisir entre 1 et 12 lettres (accents autorisés).", de: "Gib 1 bis 12 Buchstaben ein (Umlaute sind erlaubt).", pt: "Digite de 1 a 12 letras (acentos são permitidos)." }[lang] || "Please enter 1–12 letters.";
            }
        }

        // ❌ 유효하지 않은 이름인 경우
        if (msg) {

            // 모달로 오류 메시지 표시 (확인 버튼만)
            await this.uiManager.showModal(msg, true);

            // 다시 입력받을 수 있도록 포커스
            this.uiManager.playerNameInput.focus();
            return;
        }

        // ✅ 유효한 이름인 경우
        // 📌 플레이어 이름 저장 (전체 게임에서 사용)
        this.stateManager.setPlayerName(name);

        // 📌 이름 입력 UI 숨기기
        this.uiManager.nameInputContainer.style.display = 'none';

        // 📌 대화창 클릭 다시 활성화
        this.uiManager.dialogueBox.style.pointerEvents = 'auto';

        // 📌 현재 씬의 다음 씬으로 진행
        const scene = this.sceneRenderer.getScene(this.sceneRenderer.currentSceneId);
        const nextId = this.sceneRenderer.resolveNextScene(scene);
        if (nextId) await this.renderScene(nextId);
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 🎬 renderScene - 씬 렌더링 (게임의 핵심 함수!)
     * ═══════════════════════════════════════════════════════════════
     *
     * ▶ 목적:
     * 시나리오 JSON에서 특정 씬을 찾아 화면에 렌더링합니다.
     * 배경, 캐릭터, 대사, 선택지, BGM 등 모든 것을 처리하는 핵심 함수!
     *
     * ▶ 씬(Scene)이란?
     * 게임의 한 장면을 의미합니다. 소설의 한 문단과 비슷해요.
     * 각 씬에는 배경, 캐릭터, 대사, 선택지 등의 정보가 담겨 있습니다.
     *
     * ▶ 씬 데이터 구조 예시:
     * {
     *   id: "scene_cafe_01",
     *   background: "cafe.webp",
     *   character: "soyeon_smile",
     *   name: "소연",
     *   text: "안녕! 오늘 날씨가 좋네~",
     *   bgm: "happy.mp3",
     *   next: "scene_cafe_02"
     * }
     *
     * ▶ 씬 타입별 처리:
     * 1. 일반(dialogue): 대사 출력 → 클릭 대기 → 다음 씬
     * 2. 선택지(choices): 선택 버튼 표시 → 선택 대기
     * 3. 이름 입력(input): 입력창 표시 → 입력 대기
     * 4. 프리토킹(free_talk): AI 대화 모드 시작
     * 5. 시네마틱: 자동 진행 (연출용)
     *
     * ▶ 처리 순서 (워터폴):
     * 1. 씬 데이터 로드
     * 2. BGM/SFX 재생
     * 3. UI 초기화
     * 4. 페이드 효과 적용
     * 5. 배경 이미지 설정
     * 6. 플래그/스탯 처리
     * 7. 시간대 필터 적용
     * 8. 현재 캐릭터 호출
     * 9. 캐릭터 이미지 업데이트
     * 10. 이름 태그 설정
     * 11. 씬 타입별 분기 처리
     * 12. 게임 자동 저장
     *
     * @param {string} sceneId - 렌더링할 씬의 고유 ID
     */
    async renderScene(sceneId) {
        // 렌더링 락 활성화 (비동기 로딩 중 클릭 방지)
        this._isRendering = true;

        // ─────────────────────────────────────────────────────────
        // 📌 1단계: 씬 데이터 로드
        // ─────────────────────────────────────────────────────────
        let scene = this.sceneRenderer.getScene(sceneId);

        // 씬이 없으면 HTML 페이지 이동인지 확인
        if (!scene) {
            this._isRendering = false;
            if (sceneId?.endsWith('.html')) {
                // index.html 계열은 언어별 라우팅 적용
                if (sceneId === 'index.html') {
                    this.uiManager.goToHome();
                } else {
                    window.location.href = sceneId;
                }
            }
            return;
        }

        // 분기 전용 씬과 호감도 진입 가드는 배경·캐릭터·번역문을 그리기 전에 해석한다.
        // 약속 플래그가 남아 있어도 현재 관계가 악화됐다면 높은 친밀도 장면을 노출하지 않는다.
        const preRenderVisited = new Set();
        while (scene) {
            const guardedNext = this.sceneRenderer.resolveAffinityGuard(scene);
            const shouldRoute = scene.routeBeforeRender === true;
            if (!guardedNext && !shouldRoute) break;

            if (preRenderVisited.has(sceneId)) {
                console.error(`[GameEngine] 사전 분기 순환 감지: ${sceneId}`);
                this._isRendering = false;
                return;
            }
            preRenderVisited.add(sceneId);

            const nextId = guardedNext || this.sceneRenderer.resolveNextScene(scene);
            if (!nextId || nextId === sceneId) {
                console.error(`[GameEngine] 사전 분기 대상이 올바르지 않음: ${sceneId}`);
                this._isRendering = false;
                return;
            }

            sceneId = nextId;
            scene = this.sceneRenderer.getScene(sceneId);
            if (!scene) {
                console.error(`[GameEngine] 사전 분기 대상 씬을 찾을 수 없음: ${sceneId}`);
                this._isRendering = false;
                return;
            }
        }

        // 현재 씬 ID 저장 (다른 곳에서 참조용)
        this.sceneRenderer.currentSceneId = sceneId;

        // ─────────────────────────────────────────────────────────
        // 🎬 엔딩/에필로그 모드 토글
        // ─────────────────────────────────────────────────────────
        const isEnding = this._isEndingScene(sceneId);
        if (isEnding && !this.dialogueSystem._endingMode) {
            this.dialogueSystem._endingMode = true;
            if (this.uiManager.dialogueBox) {
                this.uiManager.dialogueBox.classList.add('ending-mode', 'ending-fade-in');
            }
        } else if (!isEnding && this.dialogueSystem._endingMode) {
            this.dialogueSystem._endingMode = false;
            if (this.uiManager.dialogueBox) {
                this.uiManager.dialogueBox.classList.remove('ending-mode', 'ending-fade-in');
            }
        }

        // GA4 가상 페이지뷰 전송 (SPA 보정)
        if (window.sendGAPageView) window.sendGAPageView(sceneId);
        if (window.sendGAGameMilestone) window.sendGAGameMilestone(sceneId);

        // ─────────────────────────────────────────────────────────
        // 📝 호감도 기반 대사 분기
        // ─────────────────────────────────────────────────────────
        // affinityTextChar + affinityText: 동일 노드에서 호감도에 따라
        // 대사 텍스트(+ 캐릭터 표정)를 분기. min 내림차순, 첫 매칭 적용.
        if (scene.affinityTextChar && scene.affinityText) {
            const affinity = this.stateManager.getAffinity(scene.affinityTextChar);
            for (const v of scene.affinityText) {
                if (affinity >= v.min) {
                    const __sf = scene.__sourceFile;
                    scene = { ...scene, text: v.text };
                    if (__sf) Object.defineProperty(scene, '__sourceFile', { value: __sf, enumerable: false });
                    if (v.character) scene.character = v.character;
                    break;
                }
            }
        }

        // ─────────────────────────────────────────────────────────
        // 🎵 2단계: BGM/SFX 처리
        // ─────────────────────────────────────────────────────────
        // bgm: "파일명" → 재생, bgm: null → 정지
        if (scene.bgm) {
            if (typeof soundManager !== 'undefined') soundManager.playBgm(`assets/audio/bgm/${scene.bgm}`);
            // 🔧 갤러리에 BGM 해금 (파일명에서 확장자 제거)
            const bgmId = scene.bgm.replace(/\.(mp3|ogg|wav)$/i, '');
            this.galleryManager.unlockBGM(bgmId);
        } else if (scene.bgm === null) {
            if (typeof soundManager !== 'undefined') soundManager.stopBgm();
        }

        // sfx: 효과음 1회 재생
        if (scene.sfx && typeof soundManager !== 'undefined') soundManager.playSfx(`assets/audio/sfx/${scene.sfx}`);

        // ─────────────────────────────────────────────────────────
        // 🖥️ 3단계: UI 초기화 (깨끗한 상태로 시작)
        // ─────────────────────────────────────────────────────────
        this.uiManager.messageEl.innerHTML = '';
        this.uiManager.dialogueBox.style.display = 'block';
        this.uiManager.dialogueBox.style.pointerEvents = 'auto';
        this.uiManager.choiceContainer.style.display = 'none';      // 선택지 숨김
        this.uiManager.chatContainer.style.display = 'none';        // 채팅 UI 숨김
        this.uiManager.nameInputContainer.style.display = 'none';   // 이름 입력 숨김
        this.freeTalkSystem.isFreeTalking = false;                  // 프리토킹 플래그 리셋

        // ─────────────────────────────────────────────────────────
        // 🌑 4단계: 페이드 효과 처리
        // ─────────────────────────────────────────────────────────
        // 특정 키워드가 있으면 페이드 아웃(어두워지는) 효과
        const shouldFade = scene.fade || scene.text?.includes("페이드 아웃") || scene.text?.includes("어두워집니다");
        this.uiManager.setFade(shouldFade, scene.tbc);

        // ─────────────────────────────────────────────────────────
        // 🖼️ 5단계: 배경 + 캐릭터 병렬 처리
        // ─────────────────────────────────────────────────────────
        // 배경 크로스페이드(최대 2.1초)와 캐릭터 업데이트를 동시에 시작
        // → CG 전환 시 캐릭터가 남아있는 현상 방지
        const bgPromise = scene.background
            ? this.sceneRenderer.setBackground(scene.background)
            : Promise.resolve();

        // ─────────────────────────────────────────────────────────
        // 🚩 6단계: 플래그/스탯 처리
        // ─────────────────────────────────────────────────────────
        // 씬에 정의된 setFlag, checkFlag, stats 등 처리
        this.sceneRenderer.processSceneFlags(scene);
        this.sceneRenderer.processSceneStats(scene);
        this.sceneRenderer.updateCompositeFlags();

        // ─────────────────────────────────────────────────────────
        // 🌅 7단계: 시간대 필터 적용
        // ─────────────────────────────────────────────────────────
        // night: true → 파란색 어두운 필터
        // sunset: true → 주황색 노을 필터
        // 등록된 CG 씬은 시간 필터 비활성화 (CG 자체가 완성된 장면이므로)
        const backgroundId = scene.background
            ? scene.background.split('/').pop().replace(/\.(png|jpg|jpeg|webp)$/i, '')
            : '';
        const isRegisteredCG = !!backgroundId
            && typeof REGISTERED_CG_IDS !== 'undefined'
            && REGISTERED_CG_IDS.has(backgroundId);
        const sourceFile = scene.__sourceFile || '';
        const nightFromFile = /_night$/.test(sourceFile);
        const sunsetFromFile = /_3_afterschool$/.test(sourceFile);
        const isNightScene = !!scene.night || nightFromFile;
        const isSunsetScene = !!scene.sunset || sunsetFromFile;
        console.log('[TimeFilter]', {
            sceneId,
            sourceFile,
            backgroundId,
            isRegisteredCG,
            sceneNight: scene.night,
            backgroundVariant: scene.backgroundVariant,
            nightFromFile,
            isNightScene,
            isSunsetScene,
            applied: {
                night: isRegisteredCG ? false : isNightScene,
                sunset: isRegisteredCG ? false : isSunsetScene,
                variant: isRegisteredCG ? null : scene.backgroundVariant
            }
        });
        if (scene.inheritVisualContext !== true) {
            this.sceneRenderer.setTimeFilter(
                isRegisteredCG ? false : isNightScene,
                isRegisteredCG ? false : isSunsetScene,
                isRegisteredCG ? null : scene.backgroundVariant
            );
            // CG 씬은 contain (가로 화면에서 잘림 방지)
            this.sceneRenderer.uiManager.bgLayer.classList.toggle('cg-fit', isRegisteredCG);
        }
        console.log('[TimeFilter] bgLayer.classList after setTimeFilter:', this.sceneRenderer.uiManager.bgLayer.className);

        // ─────────────────────────────────────────────────────────────
        // 📳 7.5단계: 메시지 씬 진동 효과
        // ─────────────────────────────────────────────────────────────
        if (isNightScene && /_(msg|reply)_/.test(sceneId)) {
            const box = this.uiManager.dialogueBox;
            box.classList.remove('msg-vibrate');
            void box.offsetWidth;
            box.classList.add('msg-vibrate');
            if (navigator.vibrate) navigator.vibrate(50);
        }

        // ─────────────────────────────────────────────────────────────
        // 📌 8단계: 현재 씬의 캐릭터를 "현재 캐릭터"로 설정
        // ─────────────────────────────────────────────────────────────
        if (scene.name) {
            const charKey = this.uiManager.charNameMap[scene.name];
            if (charKey) {
                this.stateManager.setCurrentCharacter(charKey);
            }
        }

        // ─────────────────────────────────────────────────────────
        // 👤 9단계: 캐릭터 이미지 업데이트 (배경과 병렬)
        // ─────────────────────────────────────────────────────────
        // character 또는 characters 속성에 따라 캐릭터 표시
        const charPromise = this.sceneRenderer.updateCharacters(scene, sceneId);

        // 배경 + 캐릭터 모두 완료 대기
        await Promise.all([bgPromise, charPromise]);

        // ⚠️ 비동기 작업 중 씬이 바뀌었으면 중단 (Race Condition 방지)
        if (this.sceneRenderer.currentSceneId !== sceneId) { this._isRendering = false; return; }

        // 비동기 로딩 완료 → 렌더링 락 해제 (이제 클릭 가능)
        this._isRendering = false;

        // 엔딩 CG 씬이면 4초간 클릭 잠금 (CG 감상 시간 보장)
        if (scene.background && scene.background.includes('ending_') && !scene.choices) {
            this._cgLocked = true;
            setTimeout(() => { this._cgLocked = false; }, 4000);
        }

        // ─────────────────────────────────────────────────────────
        // 🏷️ 10단계: 이름 태그 설정
        // ─────────────────────────────────────────────────────────
        // 대화창 위에 표시되는 캐릭터 이름 (예: "소연", "다인")
        // {name} 플레이스홀더를 실제 플레이어 이름으로 치환
        let displayName = scene.name;
        if (displayName && displayName.includes('{name}')) {
            displayName = displayName.replace(/{name}/g, this.stateManager.playerName);
        }
        this.uiManager.updateNameTag(displayName);

        // ─────────────────────────────────────────────────────────
        // ▶️ 다음 지시계 초기화
        // ─────────────────────────────────────────────────────────
        // 깜빡이는 삼각형 표시 숨김 (나중에 필요시 다시 표시)
        this.uiManager.showNextIndicator(false);

        // ─────────────────────────────────────────────────────────
        // 📌 11단계: 씬 타입별 분기 처리
        // ─────────────────────────────────────────────────────────

        // ═══════════════════════════════════════════════════════
        // 🗣️ 타입 A: 프리토킹 (AI와 자유 대화)
        // ═══════════════════════════════════════════════════════
        if (scene.type === 'free_talk' || scene.type === 'group_free_talk') {
            // AI 채팅 모드 시작 - 플레이어가 자유롭게 대화 가능
            try {
                await this.freeTalkSystem.startFreeTalk(scene, sceneId);
            } catch (error) {
                this._reportCaughtError('free talk start', error, 'freetalk_start_failed', {
                    sceneId,
                    sceneName: scene.name || '',
                    maxTurns: scene.maxTurns ?? DEFAULT_MAX_FREE_TALK_TURNS
                });
                throw error;
            }

            // ═══════════════════════════════════════════════════════
            // ✏️ 타입 B: 이름 입력
            // ═══════════════════════════════════════════════════════
        } else if (scene.type === 'input') {
            // 대화창 클릭 가능하게 유지
            this.uiManager.dialogueBox.style.pointerEvents = 'auto';

            // 안내 텍스트가 있으면 먼저 표시
            if (scene.text) {
                await this.dialogueSystem.typeText(scene.text, scene.name);
                if (this.sceneRenderer.currentSceneId !== sceneId) return;
            }

            // 이름 입력 UI 표시
            this.uiManager.nameInputContainer.style.display = 'block';
            this.uiManager.playerNameInput.value = "";
            this.uiManager.playerNameInput.focus();

            // ═══════════════════════════════════════════════════════
            // 🎬 타입 C: 엔딩 크레딧
            // ═══════════════════════════════════════════════════════
        } else if (scene.type === 'credits') {
            // 대화창 숨김
            this.uiManager.dialogueBox.style.display = 'none';
            this.uiManager.choiceContainer.style.display = 'none';

            // ── 갤러리 프리토킹 해금 (PERFECT 엔딩 한정) ──
            if (this.stateManager.getFlag('ending_perfect')) {
                const charMap = { Seoyeon: 'seyoun', Yuna: 'yuna', Dain: 'dain', Teacher: 'teacher', Nurse: 'nurse' };
                for (const [key, id] of Object.entries(charMap)) {
                    if (this.stateManager.getFlag(`isDating_${key}`)) {
                        try {
                            const gallery = JSON.parse(window.CupidStorage.getItem('cupid_gallery') || '{}');
                            gallery.affinityRebalanceVersion = window.GalleryData?.AFFINITY_REBALANCE_VERSION || 1;
                            if (!gallery.characters) gallery.characters = {};
                            if (!gallery.characters[id]) gallery.characters[id] = {};
                            gallery.characters[id].perfectEndingCleared = true;
                            gallery.playerName = this.stateManager.playerName;
                            window.CupidStorage.setItem('cupid_gallery', JSON.stringify(gallery));
                            console.log(`[GameEngine] 갤러리 프리토킹 해금: ${key}`);
                        } catch (e) {
                            console.error('[GameEngine] 갤러리 프리토킹 해금 실패:', e);
                            this._reportCaughtError('gallery freetalk unlock', e, 'gallery_unlock_failed', { charKey: key, charId: id });
                        }
                        break;
                    }
                }
            }

            // ── Nevergrad 크로스오버: 플레이 기록 저장 ──
            try {
                // 공략 히로인 판별: isDating 플래그 우선, 없으면 최고 호감도 캐릭터
                const heroineMap = { Seoyeon: 'seoyeon', Yuna: 'yuna', Dain: 'dain', Teacher: 'teacher', Nurse: 'nurse' };
                let heroineId = 'none';
                let maxAff = -Infinity;
                for (const [key, id] of Object.entries(heroineMap)) {
                    if (this.stateManager.getFlag(`isDating_${key}`)) {
                        heroineId = id;
                        break;
                    }
                    const aff = this.stateManager.getAffinity(key);
                    if (aff > maxAff) {
                        maxAff = aff;
                        heroineId = id;
                    }
                }

                // 순응도 점수: 최고 호감도를 0~100% 범위로 변환 (호감도 범위 -100~100)
                const topAffinity = Math.max(...Object.keys(heroineMap).map(k => this.stateManager.getAffinity(k)));
                const complianceScore = Math.max(0, Math.min(100, Math.round((topAffinity + 100) / 2)));

                window.CupidStorage.setItem('cupid_cycle_01', 'complete');
                window.CupidStorage.setItem('cupid_heroine', heroineId);
                window.CupidStorage.setItem('cupid_subject_compliance', String(complianceScore));

                console.log(`[GameEngine] Nevergrad 크로스오버 데이터 저장 완료 — heroine: ${heroineId}, compliance: ${complianceScore}%`);

                // Nevergrad 콘솔 메시지 출력
                console.log('\n' +
                    '╔══════════════════════════════════════╗\n' +
                    '  NEVERGRAD RESEARCH INSTITUTE\n' +
                    '  CYCLE_01 REPORT\n' +
                    '\n' +
                    '  피험자 순응도: ' + complianceScore + '%\n' +
                    '  상태: FAILED — 기억 소거 예약됨\n' +
                    '  다음 주기: SCHEDULED\n' +
                    '\n' +
                    '  [이 메시지를 보고 있다면 — 이미 늦었습니다]\n' +
                    '╚══════════════════════════════════════╝\n');
            } catch (e) {
                console.error('[GameEngine] Nevergrad 크로스오버 데이터 저장 실패:', e);
                this._reportCaughtError('nevergrad crossover save', e, 'nevergrad_crossover_save_failed');
            }

            // 크레딧 레이어 표시 (없으면 동적 생성 — 캐시된 구 HTML 대응)
            let creditsLayer = document.getElementById('credits-layer');
            if (!creditsLayer) {
                const lang = window.GAME_LANG || document.documentElement.lang || 'ko';
                const ct = (obj) => obj[lang] || obj.ko;
                creditsLayer = document.createElement('div');
                creditsLayer.id = 'credits-layer';
                creditsLayer.setAttribute('aria-hidden', 'true');
                creditsLayer.innerHTML = `
                    <div id="credits-content">
                        <div class="credits-title">CUPID</div>
                        <div class="credits-subtitle">${ct({ es: 'Donde cae la flecha de Cupido', ja: 'キューピッドの矢が届く場所', en: 'Where Cupid\'s Arrow Lands', fr: 'Là où la flèche de Cupidon se pose', de: 'Wo Amors Pfeil trifft', pt: 'Onde pousa a flecha de Cupido', ko: '사랑의 화살이 닿는 곳' })}</div>
                        <div class="credits-divider">─ ─ ─</div>
                        <div class="credits-section">
                            <div class="credits-role">${ct({ es: 'Planificación · Guion', ja: '企画・シナリオ', en: 'Planning · Writing', fr: 'Conception · Scénario', de: 'Konzept · Szenario', pt: 'Planejamento · Roteiro', ko: '기획 · 시나리오' })}</div>
                            <div class="credits-name">${ct({ es: 'Hyungyu Jang · Yujin Kim · Sanghun Lee', ja: 'Hyungyu Jang · Yujin Kim · Sanghun Lee', en: 'Hyungyu Jang · Yujin Kim · Sanghun Lee', fr: 'Hyungyu Jang · Yujin Kim · Sanghun Lee', de: 'Hyungyu Jang · Yujin Kim · Sanghun Lee', pt: 'Hyungyu Jang · Yujin Kim · Sanghun Lee', ko: '장현규 · 김유진 · 이상훈' })}</div>
                        </div>
                        <div class="credits-section">
                            <div class="credits-role">${ct({ es: 'Programación · Dirección', ja: 'プログラミング・演出', en: 'Programming · Direction', fr: 'Programmation · Direction', de: 'Programmierung · Regie', pt: 'Programação · Direção', ko: '프로그래밍 · 연출' })}</div>
                            <div class="credits-name">${ct({ es: 'Hyungyu Jang · Yujin Kim', ja: 'Hyungyu Jang · Yujin Kim', en: 'Hyungyu Jang · Yujin Kim', fr: 'Hyungyu Jang · Yujin Kim', de: 'Hyungyu Jang · Yujin Kim', pt: 'Hyungyu Jang · Yujin Kim', ko: '장현규 · 김유진' })}</div>
                        </div>
                        <div class="credits-section">
                            <div class="credits-role">${ct({ es: 'Arte · Diseño', ja: 'アート・デザイン', en: 'Art · Design', fr: 'Art · Design', de: 'Kunst · Design', pt: 'Arte · Design', ko: '아트 · 디자인' })}</div>
                            <div class="credits-name">${ct({ es: 'Hyungyu Jang · Yujin Kim', ja: 'Hyungyu Jang · Yujin Kim', en: 'Hyungyu Jang · Yujin Kim', fr: 'Hyungyu Jang · Yujin Kim', de: 'Hyungyu Jang · Yujin Kim', pt: 'Hyungyu Jang · Yujin Kim', ko: '장현규 · 김유진' })}</div>
                        </div>
                        <div class="credits-section">
                            <div class="credits-role">${ct({ es: 'Música · Sonido', ja: '音楽・サウンド', en: 'Music · Sound', fr: 'Musique · Son', de: 'Musik · Sound', pt: 'Música · Som', ko: '음악 · 사운드' })}</div>
                            <div class="credits-name">${ct({ es: 'Hyungyu Jang', ja: 'Hyungyu Jang', en: 'Hyungyu Jang', fr: 'Hyungyu Jang', de: 'Hyungyu Jang', pt: 'Hyungyu Jang', ko: '장현규' })}</div>
                        </div>
                        <div class="credits-divider">─ ─ ─</div>
                        <div class="credits-section">
                            <div class="credits-role">${ct({ es: 'Personajes', ja: '登場人物', en: 'Characters', fr: 'Personnages', de: 'Charaktere', pt: 'Personagens', ko: '등장인물' })}</div>
                            <div class="credits-name">${ct({ es: 'Seoyeon · Yuna · Dain', ja: 'ソヨン · ユナ · ダイン', en: 'Seoyeon · Yuna · Dain', fr: 'Seoyeon · Yuna · Dain', de: 'Seoyeon · Yuna · Dain', pt: 'Seoyeon · Yuna · Dain', ko: '서연 · 유나 · 다인' })}</div>
                            <div class="credits-name">${ct({ es: 'Enfermera escolar · Profesora tutora', ja: '保健室の先生・担任の先生', en: 'School Nurse · Homeroom Teacher', fr: 'Infirmière scolaire · Professeure principale', de: 'Schulkrankenschwester · Klassenlehrerin', pt: 'Enfermeira escolar · Professora da turma', ko: '보건선생님 · 담임선생님' })}</div>
                        </div>
                        <div class="credits-divider">─ ─ ─</div>
                        <div class="credits-section">
                            <div class="credits-role">${ct({ es: 'Producción', ja: '制作', en: 'Production', fr: 'Production', de: 'Produktion', pt: 'Produção', ko: '제작' })}</div>
                            <div class="credits-name">${ct({ es: 'Hyungyu Jang · Yujin Kim', ja: 'Hyungyu Jang · Yujin Kim', en: 'Hyungyu Jang · Yujin Kim', fr: 'Hyungyu Jang · Yujin Kim', de: 'Hyungyu Jang · Yujin Kim', pt: 'Hyungyu Jang · Yujin Kim', ko: '장현규 · 김유진' })}</div>
                        </div>
                        <div class="credits-divider">─ ─ ─</div>
                        <div class="credits-section">
                            <div class="credits-role">${ct({ es: 'Agradecimientos especiales', ja: 'スペシャルサンクス', en: 'Special Thanks', fr: 'Remerciements', de: 'Besonderer Dank', pt: 'Agradecimentos especiais', ko: 'Special Thanks' })}</div>
                            <div class="credits-name">${ct({ es: '¡Gracias por jugar!', ja: 'プレイしていただき、ありがとうございました。', en: 'Thank you for playing!', fr: 'Merci d\'avoir joué !', de: 'Vielen Dank fürs Spielen!', pt: 'Obrigado por jogar!', ko: '플레이해 주신 여러분께' })}</div>
                            <div class="credits-name">${ct({ es: 'Te lo agradecemos de corazón.', ja: '心より感謝申し上げます。', en: 'We truly appreciate your support.', fr: 'Merci du fond du cœur.', de: 'Wir danken dir von Herzen.', pt: 'Agradecemos de coração.', ko: '진심으로 감사드립니다' })}</div>
                        </div>
                        <div class="credits-spacer"></div>
                        <div class="credits-final">Cupid © 2026 ArcherLab</div>
                        <div class="credits-final">${ct({ es: 'Gracias por jugar', ja: 'プレイしていただき、ありがとうございました', en: 'Thank you for playing', fr: 'Merci d\'avoir joué', de: 'Vielen Dank fürs Spielen', pt: 'Obrigado por jogar', ko: '플레이해 주셔서 감사합니다' })}</div>
                        <div class="credits-spacer"></div>
                    </div>`;
                document.getElementById('game-container').appendChild(creditsLayer);
                console.log('[GameEngine] credits-layer를 동적으로 생성했습니다.');
            }

            // 이전 크레딧 상태 완전 초기화 (재진입 시 애니메이션 재시작 보장)
            creditsLayer.classList.remove('active');
            creditsLayer.setAttribute('aria-hidden', 'true');
            const content = document.getElementById('credits-content');
            if (content) {
                content.style.animation = 'none';
                content.style.transform = '';
            }

            // 이전 이벤트 리스너 제거 (누적 방지)
            const oldHandler = creditsLayer._creditsClickHandler;
            if (oldHandler) creditsLayer.removeEventListener('click', oldHandler);

            // 이전 타이머 제거
            if (creditsLayer._creditsTimer) clearTimeout(creditsLayer._creditsTimer);

            // reflow 강제 — 위의 초기화가 브라우저에 반영된 후 active 추가
            creditsLayer.offsetHeight;
            if (content) {
                content.style.animation = '';
                content.style.transform = '';
            }
            creditsLayer.setAttribute('aria-hidden', 'false');
            creditsLayer.classList.add('active');

            console.log('[GameEngine] 크레딧 레이어 활성화됨');

            // 스킵 버튼 생성 (없으면)
            let skipBtn = document.getElementById('credits-skip-btn');
            if (!skipBtn) {
                skipBtn = document.createElement('button');
                skipBtn.id = 'credits-skip-btn';
                const creditsLang = String(window.GAME_LANG || document.documentElement.lang || 'ko')
                    .toLowerCase()
                    .split('-')[0];
                skipBtn.textContent = {
                    ko: '건너뛰기 ▶',
                    en: 'Skip ▶',
                    es: 'Saltar ▶',
                    ja: 'スキップ ▶',
                    fr: 'Passer ▶',
                    de: 'Überspringen ▶',
                    pt: 'Pular ▶'
                }[creditsLang] || 'Skip ▶';
                creditsLayer.appendChild(skipBtn);
            }

            // 스킵 버튼 또는 크레딧 끝나면 다음 씬으로
            let creditsEnded = false;
            const endCredits = async () => {
                if (creditsEnded) return; // 중복 실행 방지
                creditsEnded = true;
                clearTimeout(creditsTimer);
                creditsLayer._creditsTimer = null;
                creditsLayer.classList.remove('active');
                creditsLayer.setAttribute('aria-hidden', 'true');
                // 크레딧 스크롤 애니메이션 리셋
                if (content) {
                    content.style.animation = 'none';
                    content.offsetHeight; // reflow
                    content.style.animation = '';
                }
                // 이벤트 리스너 정리
                creditsLayer.removeEventListener('click', clickHandler);
                creditsLayer._creditsClickHandler = null;
                if (scene.next) {
                    try {
                        await this.renderScene(scene.next);
                    } catch (e) {
                        console.error('[GameEngine] 크레딧 후 씬 전환 오류:', e);
                        this._reportCaughtError('credits next scene', e, 'credits_scene_transition_failed', { nextSceneId: scene.next });
                        this.uiManager.dialogueBox.style.display = '';
                    }
                }
            };

            skipBtn.onclick = () => this._runAsync('credits skip', endCredits);

            // 크레딧 레이어 클릭으로도 스킵 가능 (5초 후)
            let layerClickable = false;
            setTimeout(() => { layerClickable = true; }, 5000);
            const clickHandler = (e) => {
                if (layerClickable && e.target !== skipBtn) this._runAsync('credits click', endCredits);
            };
            creditsLayer.addEventListener('click', clickHandler);
            creditsLayer._creditsClickHandler = clickHandler;

            // 크레딧 애니메이션 종료 시 자동 전환 (25초)
            const creditsTimer = setTimeout(() => this._runAsync('credits timer', endCredits), 26000);
            creditsLayer._creditsTimer = creditsTimer;

            // ═══════════════════════════════════════════════════════
            // 💬 타입 D: 일반 대화/시네마틱/선택지
            // ═══════════════════════════════════════════════════════
        } else {
            // 📜 대사가 있으면 타이핑 효과로 출력
            if (scene.text) {
                await this.dialogueSystem.typeText(scene.text, scene.name);
                if (this.sceneRenderer.currentSceneId !== sceneId) return;
            } else {
                // 대사 없으면 메시지 영역 비우기
                this.uiManager.messageEl.textContent = "";
            }

            // ─────────────────────────────────────────────────────
            // ▶️ 다음 지시계 표시 여부 결정
            // ─────────────────────────────────────────────────────
            // 기본: 선택지가 없으면 표시
            let showNext = !scene.choices;

            // 예외: "다음" 선택지 하나만 있으면 표시 (자동 진행되니까)
            if (scene.choices) {
                const availableChoices = this.getAvailableChoices(scene.choices);
                if (availableChoices.length === 1 &&
                    (availableChoices[0].text === "다음" || availableChoices[0].text === "Next")) {
                    showNext = true;
                }
            }

            if (showNext) {
                // 시네마틱(연출) 씬은 딜레이 후 표시
                const delayed = !scene.text && (!scene.choices || scene.choices.length === 0);
                this.uiManager.showNextIndicator(true, delayed);
            }

            // ─────────────────────────────────────────────────────
            // 🔄 텍스트 없이 선택지만 있는 씬 → 바로 선택지 표시
            // ─────────────────────────────────────────────────────
            // 예: 엔딩 크레딧 후 "처음부터 다시 시작하기" 버튼만 보여야 하는 경우
            if (!scene.text && scene.choices && scene.choices.length > 0) {
                const availableChoices = this.getAvailableChoices(scene.choices);
                if (availableChoices.length > 0) {
                    this.showChoices(availableChoices);
                }
            }

            // ─────────────────────────────────────────────────────
            // 🎬 자동 진행 노드 (라우팅/시네마틱)
            // ─────────────────────────────────────────────────────
            // 대사도 없고 선택지도 없는 순수 라우팅/연출용 씬
            // 호감도 분기 등 라우팅 로직만 처리하고 즉시 다음 씬으로 진행
            // (배경/캐릭터 속성이 있어도 다음 씬에서 덮어쓰므로 클릭 대기 불필요)
            if (!scene.text && (!scene.choices || scene.choices.length === 0)) {
                const nextId = this.sceneRenderer.resolveNextScene(scene);

                // 무한 루프 방지 (자기 자신으로 돌아가지 않도록)
                if (nextId && nextId !== sceneId) {
                    // 즉시 다음 씬으로 진행
                    setTimeout(() => this._runAsync('auto render scene', () => this.renderScene(nextId)), 0);
                }
            }
        }

        // ─────────────────────────────────────────────────────────
        // 💾 11단계: 게임 자동 저장
        // ─────────────────────────────────────────────────────────
        // 매 씬마다 저장하여 브라우저 종료 시에도 이어하기 가능
        this.saveGame();
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 💾 saveGame - 현재 게임 상태를 localStorage에 저장
     * ═══════════════════════════════════════════════════════════════
     *
     * ▶ 목적:
     * 현재 게임 진행 상황을 브라우저의 localStorage에 저장합니다.
     * 브라우저를 닫아도 다음에 "이어하기"로 계속할 수 있어요!
     *
     * ▶ 저장되는 정보:
     * 1. 현재 씬 ID (어디까지 진행했는지)
     * 2. 배경 이미지 URL
     * 3. 표시 중인 캐릭터 정보
     * 4. 게임 상태 (플래그, 호감도, 이름 등)
     *
     * ▶ 호출 시점:
     * - renderScene() 완료 후 자동 호출
     * - 매 씬마다 저장되므로 데이터 손실 걱정 없음
     */
    saveGame() {
        // SceneRenderer에서 현재 렌더링 상태 내보내기
        const renderState = this.sceneRenderer.exportRenderState();

        // SaveManager를 통해 localStorage에 저장
        this.saveManager.save(
            renderState.sceneId,      // 현재 씬 ID
            renderState.bgUrl,        // 배경 이미지 URL
            renderState.characters,   // 캐릭터 슬롯별 이미지 URL
            this.stateManager.exportState()  // 전체 게임 상태
        );
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 🆕 startNewGame - 새 게임 시작
     * ═══════════════════════════════════════════════════════════════
     *
     * ▶ 목적:
     * 기존 저장 데이터를 삭제하고 처음부터 게임을 시작합니다.
     * index.html의 "새 게임" 버튼에서 호출됩니다.
     *
     * ▶ 처리 순서:
     * 1. 사운드 매니저 초기화 (사용자 인터랙션 필요)
     * 2. 실행 중인 본편 대화 문맥 무효화
     * 3. 본편 상태와 로컬 세이브 초기화
     * 4. "start" 씬부터 렌더링 시작
     *
     * 갤러리 메모리와 원격 D1 대화 로그는 새 회차에서도 보존합니다.
     */
    async startNewGame() {
        // 🔊 사운드 매니저 초기화
        // 브라우저 정책상 사용자 클릭 후에만 오디오 재생 가능
        if (typeof soundManager !== 'undefined') soundManager.init();

        // 진행 중인 응답이 초기화 뒤 이전 대화를 다시 저장하지 못하게 먼저 무효화
        this.freeTalkSystem.resetForNewGame();

        // 본편의 이름, 호감도, 플래그, 캐릭터별 대화 문맥을 새 회차 기본값으로 초기화
        this.stateManager.resetForNewGame();

        // 🗑️ 본편 로컬 세이브만 삭제 (갤러리와 D1 로그는 별도 보존)
        this.saveManager.clear();

        // 🎬 "start" 씬부터 게임 시작
        await this.renderScene("start");
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * ▶️ continueGame - 저장된 게임 이어하기
     * ═══════════════════════════════════════════════════════════════
     *
     * ▶ 목적:
     * localStorage에 저장된 데이터를 불러와서 게임을 이어합니다.
     * index.html의 "이어하기" 버튼에서 호출됩니다.
     *
     * ▶ 처리 순서:
     * 1. 사운드 매니저 초기화
     * 2. 저장 데이터 로드
     * 3. 게임 상태 복원 (플래그, 호감도, 이름 등)
     * 4. 씬 ID 복원
     * 5. 배경/캐릭터 이미지 즉시 표시 (로딩 없이)
     * 6. 저장된 씬부터 렌더링 재개
     *
     * ▶ 저장 데이터가 없으면?
     * 자동으로 새 게임을 시작합니다.
     */
    async continueGame() {
        // 🔊 사운드 매니저 초기화
        if (typeof soundManager !== 'undefined') soundManager.init();

        // 💾 저장 데이터 로드
        const saveData = this.saveManager.load();

        if (saveData) {
            // ═══════════════════════════════════════════════════
            // 📌 저장 데이터가 있는 경우: 상태 복원
            // ═══════════════════════════════════════════════════

            // 🎮 게임 상태 복원 (플레이어 이름, 플래그, 호감도, 채팅 기록)
            if (saveData.gameState) this.stateManager.importState(saveData.gameState);

            // 🎬 현재 씬 ID 복원
            if (saveData.currentSceneId) this.sceneRenderer.currentSceneId = saveData.currentSceneId;

            // 🖼️ 배경 이미지 즉시 표시 (로딩 화면 없이)
            if (saveData.lastBgUrl) {
                this.sceneRenderer.lastBgUrl = saveData.lastBgUrl;
                this.uiManager.bgLayer.style.backgroundImage = `url(${saveData.lastBgUrl})`;
            }

            // 👤 캐릭터 이미지 즉시 표시
            if (saveData.currentCharacters) {
                for (const [slot, src] of Object.entries(saveData.currentCharacters)) {
                    if (this.uiManager.charSlots[slot] && src) {
                        // 저장된 이미지 URL로 캐릭터 표시 (XSS 방지)
                        const img = document.createElement('img');
                        img.src = src;
                        img.alt = '';
                        img.setAttribute('aria-hidden', 'true');
                        this.uiManager.charSlots[slot].innerHTML = '';
                        this.uiManager.charSlots[slot].appendChild(img);
                    }
                }
            }

            // 🎬 저장된 씬부터 렌더링 재개
            await this.renderScene(this.sceneRenderer.currentSceneId);

        } else {
            // ═══════════════════════════════════════════════════
            // 📌 저장 데이터가 없는 경우: 새 게임 시작
            // ═══════════════════════════════════════════════════
            await this.startNewGame();
        }
    }
}

window.GameEngine = GameEngine;
