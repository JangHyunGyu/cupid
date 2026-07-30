/**
 * ============================================================================
 * GalleryUI - 갤러리 UI 코어 클래스
 * ============================================================================
 * 
 * 갤러리 UI의 기본 기능과 팝업 관리를 담당합니다.
 * Composition 패턴으로 서브 렌더러들을 통합합니다.
 * 
 * 모듈 구조:
 *   GalleryUI (이 파일)
 *     ├── CharacterRenderer (gallery-ui-character.js)
 *     ├── CGRenderer (gallery-ui-cg.js)
 *     └── MusicRenderer (gallery-ui-music.js)
 * 
 * 사용 예시:
 *   const ui = new GalleryUI(progress, 'ko');
 *   ui.renderCharacters();  // 내부적으로 this.character.render() 호출
 */

class GalleryUI {
    // =========================================================================
    // 생성자 및 초기화
    // =========================================================================

    /**
     * GalleryUI 생성자
     * 
     * Composition 패턴: 서브 렌더러들을 생성하고 주입받습니다.
     * 
     * @param {GalleryProgress} progress - 진행도 관리 인스턴스
     * @param {string} lang - 현재 언어 ('ko' 또는 'en')
     */
    constructor(progress, lang) {
        /** @type {GalleryProgress} 진행도 관리 인스턴스 */
        this.progress = progress;

        /** @type {string} 현재 언어 */
        this.lang = lang;

        // ─────────────────────────────────────────────────────────────────────
        // Composition: 서브 렌더러 인스턴스 생성
        // 각 렌더러는 this(GalleryUI)를 부모로 받아 공통 기능 사용
        // ─────────────────────────────────────────────────────────────────────

        /** @type {CharacterRenderer} 캐릭터 갤러리 렌더러 */
        this.character = new CharacterRenderer(this);

        /** @type {CGRenderer} CG 갤러리 렌더러 */
        this.cg = new CGRenderer(this);

        /** @type {MusicRenderer} 음악실 렌더러 */
        this.music = new MusicRenderer(this);

        // ─────────────────────────────────────────────────────────────────────
        // 하위 호환성: 기존 코드에서 사용하던 속성들 유지
        // ─────────────────────────────────────────────────────────────────────

        /** @type {string|null} 현재 모달에서 보고 있는 캐릭터 ID */
        this.currentCharacter = null;

        /** @type {string} 현재 선택된 표정 */
        this.currentExpression = 'normal';

        /** @type {string|null} 현재 재생 중인 BGM ID */
        this.currentBgm = null;

        /** @type {Audio|null} 현재 재생 중인 Audio 객체 */
        this.bgmAudio = null;
    }

    /**
     * 언어 변경
     * @param {string} lang - 새로운 언어 ('ko' 또는 'en')
     */
    setLanguage(lang) {
        this.lang = lang;
    }

    // =========================================================================
    // 렌더링 래퍼 메서드 (하위 호환성)
    // =========================================================================
    // 기존 코드에서 ui.renderCharacters() 형태로 호출하던 것을 유지

    /**
     * 캐릭터 그리드 렌더링
     * 내부적으로 CharacterRenderer.render() 호출
     */
    renderCharacters() {
        this.character.render();
    }

    /**
     * CG 그리드 렌더링
     * 내부적으로 CGRenderer.render() 호출
     */
    renderCG() {
        this.cg.render();
    }

    /**
     * 음악 목록 렌더링
     * 내부적으로 MusicRenderer.render() 호출
     */
    renderMusic() {
        this.music.render();
    }

    // =========================================================================
    // 모달/팝업 래퍼 메서드 (하위 호환성)
    // =========================================================================

    /**
     * 캐릭터 모달 열기
     * @param {string} charId - 캐릭터 ID
     */
    openCharacterModal(charId) {
        this.currentCharacter = charId;
        this.character.openModal(charId);
    }

    /**
     * 캐릭터 모달 닫기
     */
    closeCharacterModal() {
        this.character.closeModal();
        this.currentCharacter = null;
    }

    /**
     * CG 모달 열기
     * @param {string} cgId - CG ID
     */
    openCGModal(cgId) {
        this.cg.openModal(cgId);
    }

    /**
     * CG 모달 닫기
     */
    closeCGModal() {
        this.cg.closeModal();
    }

    /**
     * BGM 토글
     * @param {string} id - BGM ID
     * @param {string} file - 파일 경로
     */
    toggleBgm(id, file) {
        this.music.toggle(id, file);
        this.currentBgm = this.music.currentBgmId;
    }

    // =========================================================================
    // 팝업 관련 메서드
    // =========================================================================

    /**
     * 해금 조건 팝업 표시
     * 
     * @param {Object} options - 팝업 옵션
     * @param {string} options.title - 팝업 제목
     * @param {string} options.message - 해금 조건 설명 (HTML 지원)
     * @param {string} options.icon - 팝업 상단에 표시되는 이모지
     */
    showUnlockPopup(options) {
        // 기존 팝업이 있으면 제거
        const existingPopup = document.getElementById('unlock-condition-popup');
        if (existingPopup) existingPopup.remove();

        // 팝업 생성
        const popup = document.createElement('div');
        popup.id = 'unlock-condition-popup';
        popup.className = 'unlock-popup-overlay';

        // 배경 클릭 시 닫기
        popup.addEventListener('click', (e) => {
            if (e.target === popup) this.closeUnlockPopup();
        });

        const okText = { ko: '확인', en: 'OK', es: 'Aceptar', ja: 'OK', fr: 'OK', de: 'OK', pt: 'OK' }[this.lang] || 'OK';

        popup.innerHTML = `
            <div class="unlock-popup-content">
                <div class="unlock-popup-icon">${options.icon}</div>
                <h3 class="unlock-popup-title">${options.title}</h3>
                <p class="unlock-popup-message">${options.message.replace(/\n/g, '<br>')}</p>
                <button class="unlock-popup-btn" id="unlock-popup-ok-btn">
                    ${okText}
                </button>
            </div>
        `;

        // 확인 버튼 이벤트
        popup.querySelector('#unlock-popup-ok-btn').addEventListener('click', () => this.closeUnlockPopup());

        document.body.appendChild(popup);

        // 애니메이션을 위해 약간의 딜레이 후 active 클래스 추가
        requestAnimationFrame(() => {
            popup.classList.add('active');
        });
    }

    /**
     * 해금 조건 팝업 닫기
     */
    closeUnlockPopup() {
        const popup = document.getElementById('unlock-condition-popup');
        if (popup) {
            popup.classList.remove('active');
            setTimeout(() => popup.remove(), 300);
        }
    }

    /**
     * 표정 잠금 팝업 표시
     * 
     * @param {string} charName - 캐릭터 이름
     * @param {string} exprName - 표정 이름
     * @param {number} requiredAffinity - 해금에 필요한 호감도
     */
    showExpressionLockPopup(charName, exprName, requiredAffinity) {
        const charId = this.currentCharacter || this.character.currentCharacter;
        const currentAffinity = this.progress.getAffinity(charId);
        const L = (ko, en, es, ja, fr, de, pt) => ({ ko, en, es, ja, fr, de, pt })[this.lang] || en;

        this.showUnlockPopup({
            title: L('표정 미해금', 'Expression Locked', 'Expresión bloqueada', '未解放の表情', 'Expression verrouillée', 'Ausdruck gesperrt', 'Expressão bloqueada'),
            message: L(
                `"${exprName}" 표정을 해금하려면<br>호감도 ${requiredAffinity}이(가) 필요합니다.<br><br><span class="condition-line">💕 최대 호감도: ${currentAffinity}</span><span class="condition-line">🎯 필요 호감도: ${requiredAffinity}</span>`,
                `To unlock "${exprName}" expression,<br>you need ${requiredAffinity} affinity.<br><br><span class="condition-line">💕 Max Affinity: ${currentAffinity}</span><span class="condition-line">🎯 Required: ${requiredAffinity}</span>`,
                `Para desbloquear la expresión "${exprName}",<br>necesitas ${requiredAffinity} de afinidad.<br><br><span class="condition-line">💕 Afinidad máxima: ${currentAffinity}</span><span class="condition-line">🎯 Requerida: ${requiredAffinity}</span>`,
                `表情「${exprName}」を解放するには、<br>好感度が${requiredAffinity}以上必要です。<br><br><span class="condition-line">💕 最大好感度：${currentAffinity}</span><span class="condition-line">🎯 必要好感度：${requiredAffinity}</span>`,
                `Pour débloquer l'expression « ${exprName} »,<br>vous avez besoin de ${requiredAffinity} d'affinité.<br><br><span class="condition-line">💕 Affinité max : ${currentAffinity}</span><span class="condition-line">🎯 Requise : ${requiredAffinity}</span>`,
                `Um den Ausdruck „${exprName}" freizuschalten,<br>benötigst du ${requiredAffinity} Zuneigung.<br><br><span class="condition-line">💕 Max. Zuneigung: ${currentAffinity}</span><span class="condition-line">🎯 Benötigt: ${requiredAffinity}</span>`,
                `Para desbloquear a expressão "${exprName}",<br>você precisa de ${requiredAffinity} de afinidade.<br><br><span class="condition-line">💕 Afinidade máx.: ${currentAffinity}</span><span class="condition-line">🎯 Necessário: ${requiredAffinity}</span>`
            ),
            icon: '🔒'
        });
    }

    /**
     * 비키니 특별 표정 잠금 팝업 표시
     * 
     * @param {string} charName - 캐릭터 이름
     */
    showBikiniLockPopup(charName) {
        const charId = this.currentCharacter || this.character.currentCharacter;
        const currentAffinity = this.progress.getAffinity(charId);
        const freeTalkCount = this.progress.getFreeTalkCount(charId);

        const affinityStatus = currentAffinity >= 100 ? '✅' : '❌';
        const talkStatus = freeTalkCount >= 30 ? '✅' : '❌';
        const L = (ko, en, es, ja, fr, de, pt) => ({ ko, en, es, ja, fr, de, pt })[this.lang] || en;

        this.showUnlockPopup({
            title: L('💎 특별 표정', '💎 Special Expression', '💎 Expresión especial', '💎 特別な表情', '💎 Expression spéciale', '💎 Besonderer Ausdruck', '💎 Expressão especial'),
            message: L(
                `${charName}의 특별한 모습을 보려면<br>두 가지 조건을 모두 달성해야 합니다!<br><br><span class="condition-line">💕 최대 호감도: ${currentAffinity}/100 ${affinityStatus}</span><span class="condition-line">💬 프리토킹: ${freeTalkCount}/30회 ${talkStatus}</span>`,
                `To see ${charName}'s special look,<br>you need to achieve both conditions!<br><br><span class="condition-line">💕 Max Affinity: ${currentAffinity}/100 ${affinityStatus}</span><span class="condition-line">💬 Free Talks: ${freeTalkCount}/30 ${talkStatus}</span>`,
                `Para ver el look especial de ${charName},<br>¡debes cumplir ambas condiciones!<br><br><span class="condition-line">💕 Afinidad máxima: ${currentAffinity}/100 ${affinityStatus}</span><span class="condition-line">💬 Charlas libres: ${freeTalkCount}/30 ${talkStatus}</span>`,
                `${charName}の特別な姿を見るには、<br>次の2つの条件を両方達成してください。<br><br><span class="condition-line">💕 最大好感度：${currentAffinity}/100 ${affinityStatus}</span><span class="condition-line">💬 フリートーク：${freeTalkCount}/30回 ${talkStatus}</span>`,
                `Pour voir le look spécial de ${charName},<br>vous devez remplir les deux conditions !<br><br><span class="condition-line">💕 Affinité max : ${currentAffinity}/100 ${affinityStatus}</span><span class="condition-line">💬 Discussions libres : ${freeTalkCount}/30 ${talkStatus}</span>`,
                `Um ${charName}s besonderes Aussehen zu sehen,<br>musst du beide Bedingungen erfüllen!<br><br><span class="condition-line">💕 Max. Zuneigung: ${currentAffinity}/100 ${affinityStatus}</span><span class="condition-line">💬 Freie Gespräche: ${freeTalkCount}/30 ${talkStatus}</span>`,
                `Para ver o visual especial de ${charName},<br>você precisa cumprir as duas condições!<br><br><span class="condition-line">💕 Afinidade máx.: ${currentAffinity}/100 ${affinityStatus}</span><span class="condition-line">💬 Conversas livres: ${freeTalkCount}/30 ${talkStatus}</span>`
            ),
            icon: '💎'
        });
    }

    /**
     * 소개 더보기 잠금 팝업 표시
     * 
     * @param {string} charId - 캐릭터 ID
     */
    showDescriptionLockPopup(charId) {
        const currentAffinity = this.progress.getAffinity(charId);
        const char = GalleryData.getCharacter(this.lang, charId);
        const L = (ko, en, es, ja, fr, de, pt) => ({ ko, en, es, ja, fr, de, pt })[this.lang] || en;

        this.showUnlockPopup({
            title: L('소개 미해금', 'Description Locked', 'Descripción bloqueada', 'プロフィールは未解放です', 'Description verrouillée', 'Beschreibung gesperrt', 'Descrição bloqueada'),
            message: L(
                `${char.name}의 전체 소개를 보려면<br>호감도 80이 필요합니다.<br><br><span class="condition-line">💕 최대 호감도: ${currentAffinity}</span><span class="condition-line">🎯 필요 호감도: 80</span>`,
                `To view ${char.name}'s full description,<br>you need 80 affinity.<br><br><span class="condition-line">💕 Max Affinity: ${currentAffinity}</span><span class="condition-line">🎯 Required: 80</span>`,
                `Para ver la descripción completa de ${char.name},<br>necesitas 80 de afinidad.<br><br><span class="condition-line">💕 Afinidad máxima: ${currentAffinity}</span><span class="condition-line">🎯 Requerida: 80</span>`,
                `${char.name}のプロフィールをすべて見るには、<br>好感度が80以上必要です。<br><br><span class="condition-line">💕 最大好感度：${currentAffinity}</span><span class="condition-line">🎯 必要好感度：80</span>`,
                `Pour voir la description complète de ${char.name},<br>vous avez besoin de 80 d'affinité.<br><br><span class="condition-line">💕 Affinité max : ${currentAffinity}</span><span class="condition-line">🎯 Requise : 80</span>`,
                `Um ${char.name}s vollständige Beschreibung zu sehen,<br>benötigst du 80 Zuneigung.<br><br><span class="condition-line">💕 Max. Zuneigung: ${currentAffinity}</span><span class="condition-line">🎯 Benötigt: 80</span>`,
                `Para ver a descrição completa de ${char.name},<br>você precisa de 80 de afinidade.<br><br><span class="condition-line">💕 Afinidade máx.: ${currentAffinity}</span><span class="condition-line">🎯 Necessário: 80</span>`
            ),
            icon: '📖'
        });
    }

    /**
     * 프로필 스탯 잠금 팝업 표시
     * 
     * @param {string} statType - 스탯 종류 ('weight' 또는 'bust')
     * @param {string} charName - 캐릭터 이름
     */
    showStatLockPopup(statType, charName) {
        const charId = this.currentCharacter || this.character.currentCharacter;
        const currentAffinity = this.progress.getAffinity(charId);
        const L = (ko, en, es, ja, fr, de, pt) => ({ ko, en, es, ja, fr, de, pt })[this.lang] || en;

        if (statType === 'weight') {
            this.showUnlockPopup({
                title: L('몸무게 미해금', 'Weight Locked', 'Peso bloqueado', '体重は未解放です', 'Poids verrouillé', 'Gewicht gesperrt', 'Peso bloqueado'),
                message: L(
                    `${charName}의 몸무게를 보려면<br>호감도 80이 필요합니다.<br><br><span class="condition-line">💕 최대 호감도: ${currentAffinity}</span><span class="condition-line">🎯 필요 호감도: 80</span>`,
                    `To view ${charName}'s weight,<br>you need 80 affinity.<br><br><span class="condition-line">💕 Max Affinity: ${currentAffinity}</span><span class="condition-line">🎯 Required: 80</span>`,
                    `Para ver el peso de ${charName},<br>necesitas 80 de afinidad.<br><br><span class="condition-line">💕 Afinidad máxima: ${currentAffinity}</span><span class="condition-line">🎯 Requerida: 80</span>`,
                    `${charName}の体重を見るには、<br>好感度が80以上必要です。<br><br><span class="condition-line">💕 最大好感度：${currentAffinity}</span><span class="condition-line">🎯 必要好感度：80</span>`,
                    `Pour voir le poids de ${charName},<br>vous avez besoin de 80 d'affinité.<br><br><span class="condition-line">💕 Affinité max : ${currentAffinity}</span><span class="condition-line">🎯 Requise : 80</span>`,
                    `Um ${charName}s Gewicht zu sehen,<br>benötigst du 80 Zuneigung.<br><br><span class="condition-line">💕 Max. Zuneigung: ${currentAffinity}</span><span class="condition-line">🎯 Benötigt: 80</span>`,
                    `Para ver o peso de ${charName},<br>você precisa de 80 de afinidade.<br><br><span class="condition-line">💕 Afinidade máx.: ${currentAffinity}</span><span class="condition-line">🎯 Necessário: 80</span>`
                ),
                icon: '⚖️'
            });
        } else if (statType === 'bust') {
            this.showUnlockPopup({
                title: L('신체사이즈 미해금', 'Body Size Locked', 'Talla bloqueada', 'スリーサイズは未解放です', 'Mensurations verrouillées', 'Körpergröße gesperrt', 'Medidas bloqueadas'),
                message: L(
                    `${charName}의 신체사이즈를 보려면<br>호감도 100이 필요합니다.<br><br><span class="condition-line">💕 최대 호감도: ${currentAffinity}</span><span class="condition-line">🎯 필요 호감도: 100</span>`,
                    `To view ${charName}'s body size,<br>you need 100 affinity.<br><br><span class="condition-line">💕 Max Affinity: ${currentAffinity}</span><span class="condition-line">🎯 Required: 100</span>`,
                    `Para ver la talla de ${charName},<br>necesitas 100 de afinidad.<br><br><span class="condition-line">💕 Afinidad máxima: ${currentAffinity}</span><span class="condition-line">🎯 Requerida: 100</span>`,
                    `${charName}のスリーサイズを見るには、<br>好感度が100以上必要です。<br><br><span class="condition-line">💕 最大好感度：${currentAffinity}</span><span class="condition-line">🎯 必要好感度：100</span>`,
                    `Pour voir les mensurations de ${charName},<br>vous avez besoin de 100 d'affinité.<br><br><span class="condition-line">💕 Affinité max : ${currentAffinity}</span><span class="condition-line">🎯 Requise : 100</span>`,
                    `Um ${charName}s Körpermaße zu sehen,<br>benötigst du 100 Zuneigung.<br><br><span class="condition-line">💕 Max. Zuneigung: ${currentAffinity}</span><span class="condition-line">🎯 Benötigt: 100</span>`,
                    `Para ver as medidas de ${charName},<br>você precisa de 100 de afinidade.<br><br><span class="condition-line">💕 Afinidade máx.: ${currentAffinity}</span><span class="condition-line">🎯 Necessário: 100</span>`
                ),
                icon: '💝'
            });
        }
    }

    // =========================================================================
    // 리소스 정리
    // =========================================================================

    /**
     * 오디오 정리 (페이지 떠나기 전 호출)
     */
    cleanup() {
        // 음악 렌더러 정리
        if (this.music) {
            this.music.cleanup();
        }

        // 하위 호환성: 기존 속성 정리
        if (this.bgmAudio) {
            this.bgmAudio.pause();
            this.bgmAudio = null;
        }
    }
}

// 전역 접근을 위해 window에 노출
window.GalleryUI = GalleryUI;
