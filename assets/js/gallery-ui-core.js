/**
 * ============================================================================
 * GalleryUI - 갤러리 UI 코어 클래스
 * ============================================================================
 * 
 * 이 클래스는 갤러리 UI의 기본 기능과 팝업 관리를 담당합니다.
 * 
 * 파일 구조:
 * - gallery-ui-core.js      : 코어 클래스, 생성자, 팝업 (이 파일)
 * - gallery-ui-character.js : 캐릭터 렌더링 및 모달
 * - gallery-ui-cg.js        : CG 렌더링 및 모달
 * - gallery-ui-music.js     : 음악실 렌더링
 * 
 * 사용 예시:
 *   const ui = new GalleryUI(progress, 'ko');
 *   ui.renderCharacters();
 */

class GalleryUI {
    // =========================================================================
    // 생성자 및 초기화
    // =========================================================================

    /**
     * GalleryUI 생성자
     * 
     * @param {GalleryProgress} progress - 진행도 관리 인스턴스
     * @param {string} lang - 현재 언어 ('ko' 또는 'en')
     */
    constructor(progress, lang) {
        /** @type {GalleryProgress} 진행도 관리 인스턴스 */
        this.progress = progress;

        /** @type {string} 현재 언어 */
        this.lang = lang;

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
    // 팝업 관련 메서드
    // =========================================================================

    /**
     * 해금 조건 팝업 표시
     * 
     * @param {Object} options - 팝업 옵션
     * @param {string} options.title - 팝업 제목
     * @param {string} options.message - 해금 조건 설명 (개행문자 \n 지원)
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
        popup.onclick = (e) => {
            if (e.target === popup) this.closeUnlockPopup();
        };

        const okText = this.lang === 'ko' ? '확인' : 'OK';

        popup.innerHTML = `
            <div class="unlock-popup-content">
                <div class="unlock-popup-icon">${options.icon}</div>
                <h3 class="unlock-popup-title">${options.title}</h3>
                <p class="unlock-popup-message">${options.message.replace(/\\n/g, '<br>')}</p>
                <button class="unlock-popup-btn" onclick="gallery.ui.closeUnlockPopup()">
                    ${okText}
                </button>
            </div>
        `;

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
        const currentAffinity = this.progress.getAffinity(this.currentCharacter);

        this.showUnlockPopup({
            title: this.lang === 'ko' ? '표정 미해금' : 'Expression Locked',
            message: this.lang === 'ko'
                ? `"${exprName}" 표정을 해금하려면\n호감도 ${requiredAffinity}이(가) 필요합니다.\n\n💕 최대 호감도: ${currentAffinity}\n🎯 필요 호감도: ${requiredAffinity}`
                : `To unlock "${exprName}" expression,\nyou need ${requiredAffinity} affinity.\n\n💕 Max Affinity: ${currentAffinity}\n🎯 Required: ${requiredAffinity}`,
            icon: '🔒'
        });
    }

    /**
     * 비키니 특별 표정 잠금 팝업 표시
     * 
     * @param {string} charName - 캐릭터 이름
     */
    showBikiniLockPopup(charName) {
        const currentAffinity = this.progress.getAffinity(this.currentCharacter);
        const freeTalkCount = this.progress.getFreeTalkCount(this.currentCharacter);

        this.showUnlockPopup({
            title: this.lang === 'ko' ? '💎 특별 표정' : '💎 Special Expression',
            message: this.lang === 'ko'
                ? `${charName}의 특별한 모습을 보려면\n두 가지 조건을 모두 달성해야 합니다!\n\n💕 최대 호감도: ${currentAffinity}/100 ${currentAffinity >= 100 ? '✅' : '❌'}\n💬 프리토킹: ${freeTalkCount}/100회 ${freeTalkCount >= 100 ? '✅' : '❌'}`
                : `To see ${charName}'s special look,\nyou need to achieve both conditions!\n\n💕 Max Affinity: ${currentAffinity}/100 ${currentAffinity >= 100 ? '✅' : '❌'}\n💬 Free Talks: ${freeTalkCount}/100 ${freeTalkCount >= 100 ? '✅' : '❌'}`,
            icon: '👙'
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

        this.showUnlockPopup({
            title: this.lang === 'ko' ? '소개 미해금' : 'Description Locked',
            message: this.lang === 'ko'
                ? `${char.name}의 전체 소개를 보려면\n호감도 80이 필요합니다.\n\n💕 최대 호감도: ${currentAffinity}\n🎯 필요 호감도: 80`
                : `To view ${char.name}'s full description,\nyou need 80 affinity.\n\n💕 Max Affinity: ${currentAffinity}\n🎯 Required: 80`,
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
        const currentAffinity = this.progress.getAffinity(this.currentCharacter);

        if (statType === 'weight') {
            this.showUnlockPopup({
                title: this.lang === 'ko' ? '몸무게 미해금' : 'Weight Locked',
                message: this.lang === 'ko'
                    ? `${charName}의 몸무게를 보려면\n호감도 80이 필요합니다.\n\n💕 최대 호감도: ${currentAffinity}\n🎯 필요 호감도: 80`
                    : `To view ${charName}'s weight,\nyou need 80 affinity.\n\n💕 Max Affinity: ${currentAffinity}\n🎯 Required: 80`,
                icon: '⚖️'
            });
        } else if (statType === 'bust') {
            this.showUnlockPopup({
                title: this.lang === 'ko' ? '신체사이즈 미해금' : 'Body Size Locked',
                message: this.lang === 'ko'
                    ? `${charName}의 신체사이즈를 보려면\n호감도 100이 필요합니다.\n\n💕 최대 호감도: ${currentAffinity}\n🎯 필요 호감도: 100`
                    : `To view ${charName}'s body size,\nyou need 100 affinity.\n\n💕 Max Affinity: ${currentAffinity}\n🎯 Required: 100`,
                icon: '💝'
            });
        }
    }

    /**
     * 오디오 정리 (페이지 떠나기 전 호출)
     */
    cleanup() {
        if (this.bgmAudio) {
            this.bgmAudio.pause();
            this.bgmAudio = null;
        }
    }
}

// 전역 접근을 위해 window에 노출
window.GalleryUI = GalleryUI;
