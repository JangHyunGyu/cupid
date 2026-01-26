/**
 * ============================================================================
 * GalleryUI - 갤러리 UI 렌더링 클래스
 * ============================================================================
 * 
 * 이 클래스는 갤러리의 모든 UI 렌더링과 모달 관리를 담당합니다.
 * 
 * 주요 기능:
 * 1. 캐릭터 그리드 렌더링 및 상세 모달
 * 2. CG 그리드 렌더링 및 뷰어 모달
 * 3. 음악 목록 렌더링 및 재생 제어
 * 4. 각종 팝업 (해금 조건 안내 등)
 * 
 * 사용 예시:
 *   const ui = new GalleryUI(progress, 'ko');
 *   ui.renderCharacters();
 *   ui.openCharacterModal('seyoun');
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
        /**
         * 진행도 관리 인스턴스
         * @type {GalleryProgress}
         */
        this.progress = progress;

        /**
         * 현재 언어
         * @type {string}
         */
        this.lang = lang;

        /**
         * 현재 모달에서 보고 있는 캐릭터 ID
         * @type {string|null}
         */
        this.currentCharacter = null;

        /**
         * 현재 선택된 표정
         * @type {string}
         */
        this.currentExpression = 'normal';

        /**
         * 현재 재생 중인 BGM ID
         * @type {string|null}
         */
        this.currentBgm = null;

        /**
         * 현재 재생 중인 Audio 객체
         * @type {Audio|null}
         */
        this.bgmAudio = null;
    }

    /**
     * 언어 변경
     * 
     * @param {string} lang - 새로운 언어 ('ko' 또는 'en')
     */
    setLanguage(lang) {
        this.lang = lang;
    }

    // =========================================================================
    // 캐릭터 갤러리 렌더링
    // =========================================================================

    /**
     * 캐릭터 그리드 렌더링
     * 
     * 캐릭터 카드들을 HTML로 생성하여 화면에 표시합니다.
     * 
     * 해금 단계:
     * 1. met (만남): 게임에서 캐릭터를 만난 적 있으면 카드 표시, 상세 정보 열람 가능
     * 2. 표정 해금: 호감도에 따라 개별 표정 해금 (0~100 균등 분배)
     * 3. 소개/몸무게: 호감도 80 이상에서 해금
     * 4. 신체사이즈: 호감도 100에서 해금
     */
    renderCharacters() {
        // 캐릭터 그리드 컨테이너 가져오기
        const grid = document.getElementById('character-grid');
        if (!grid) return;  // 요소가 없으면 종료

        // 현재 언어에 맞는 캐릭터 데이터 가져오기
        const characters = GalleryData.getAllCharacters(this.lang);
        let html = '';

        // 각 캐릭터에 대해 카드 HTML 생성
        Object.values(characters).forEach(char => {
            const met = this.progress.isMet(char.id);           // 만난 적 있는지
            const expressionCount = char.expressions.length;

            // 캐릭터 카드 HTML 생성
            // met 여부에 따라 카드 표시
            html += `
                <div class="character-card ${met ? '' : 'not-met'}" 
                     onclick="gallery.ui.handleCharacterClick('${char.id}')">
                    
                    <!-- 캐릭터 이미지 영역 -->
                    <div class="card-image">
                        <!-- 항상 이미지 표시, 미만남 시 실루엣으로 -->
                        <img src="assets/images/characters/${char.id}_normal.png" alt="${met ? char.name : '???'}" class="${met ? '' : 'silhouette'}">
                    </div>
                    
                    <!-- 캐릭터 정보 영역 -->
                    <div class="card-info">
                        <!-- 만남 시 이름 표시, 미만남 시 ??? 표시 -->
                        <h3>${met ? char.name : '???'}</h3>
                        <!-- 만남 시 타이틀, 미만남 시 안내 메시지 -->
                        <p>${met ? char.title : (this.lang === 'ko' ? '아직 만나지 못함' : 'Not yet met')}</p>
                        <!-- 만남 시에만 표정 개수 표시 -->
                        ${met ? `<span class="expression-count">${this.lang === 'ko' ? '표정' : 'Expressions'} ${expressionCount}</span>` : ''}
                    </div>
                </div>
            `;
        });

        // 생성된 HTML을 그리드에 삽입
        grid.innerHTML = html;
    }

    /**
     * 캐릭터 카드 클릭 핸들러
     * 
     * met 상태에 따라 다른 동작 수행:
     * - 만난 적 없는 캐릭터: 안내 팝업 표시
     * - 만난 캐릭터: 상세 모달 열기 (표정은 호감도에 따라 개별 해금)
     * 
     * @param {string} charId - 클릭한 캐릭터 ID
     */
    handleCharacterClick(charId) {
        const met = this.progress.isMet(charId);

        if (!met) {
            // 아직 만나지 못한 캐릭터
            this.showUnlockPopup({
                title: this.lang === 'ko' ? '캐릭터 미발견' : 'Character Not Found',
                message: this.lang === 'ko'
                    ? '아직 이 캐릭터를 만나지 못했습니다.\n게임을 진행하여 캐릭터를 만나보세요!'
                    : 'You haven\'t met this character yet.\nPlay the game to meet them!',
                icon: '❓'
            });
        } else {
            // 만난 캐릭터 - 바로 상세 모달 열기
            this.openCharacterModal(charId);
        }
    }

    // =========================================================================
    // 캐릭터 상세 모달
    // =========================================================================

    /**
     * 캐릭터 상세 모달 열기
     * 
     * 모달에 표시되는 내용:
     * - 캐릭터 이름과 타이틀
     * - 캐릭터 소개 (호감도 80 미만시 짧은 소개 + 더보기 버튼)
     * - 표정 선택 버튼들 (호감도에 따라 개별 해금)
     * - 프로필 정보 (몸무게: 80+, 신체사이즈: 100)
     * 
     * @param {string} charId - 표시할 캐릭터 ID
     */
    openCharacterModal(charId) {
        // 현재 캐릭터 및 표정 상태 업데이트
        this.currentCharacter = charId;
        this.currentExpression = 'normal';  // 기본 표정으로 초기화

        // 캐릭터 데이터 가져오기
        const char = GalleryData.getCharacter(this.lang, charId);
        const modal = document.getElementById('character-modal');
        const affinity = this.progress.getAffinity(charId);

        // 모달 내용 업데이트
        document.getElementById('modal-char-name').textContent = char.name;
        document.getElementById('modal-char-title').textContent = char.title;

        // 소개 표시 (호감도 80 이상이면 전체, 미만이면 짧은 소개 + 더보기 버튼)
        const descContainer = document.getElementById('modal-char-desc');
        if (affinity >= 80) {
            descContainer.innerHTML = char.description;
        } else {
            const moreBtn = this.lang === 'ko' ? '소개 더 보기' : 'Read More';
            descContainer.innerHTML = `${char.shortDescription} <button class="desc-more-btn" onclick="gallery.ui.showDescriptionLockPopup('${charId}')">${moreBtn}</button>`;
        }

        // 캐릭터 이미지 업데이트
        this._updateCharacterImage();

        // 표정 선택 버튼들 렌더링
        this._renderExpressionButtons(char);

        // 프로필 정보 렌더링
        this._renderCharacterStats(char);

        // 모달 표시 (active 클래스 추가)
        modal.classList.add('active');
    }

    /**
     * 캐릭터 상세 모달 닫기
     */
    closeCharacterModal() {
        document.getElementById('character-modal').classList.remove('active');
        this.currentCharacter = null;
    }

    /**
     * 캐릭터 이미지 업데이트 (내부 메서드)
     * 
     * @private
     */
    _updateCharacterImage() {
        const img = document.getElementById('modal-char-image');
        img.src = `assets/images/characters/${this.currentCharacter}_${this.currentExpression}.png`;
    }

    /**
     * 표정 변경
     * 
     * @param {string} expr - 변경할 표정 코드 (normal, shy, angry 등)
     */
    changeExpression(expr) {
        this.currentExpression = expr;

        // 캐릭터 이미지 업데이트
        this._updateCharacterImage();

        // 버튼 활성화 상태 업데이트
        document.querySelectorAll('.expression-btn').forEach(btn => {
            const btnText = btn.textContent.trim();
            const exprName = GalleryData.getExpressionName(this.lang, expr);
            btn.classList.toggle('active', btnText === exprName);
        });
    }

    /**
     * 표정 선택 버튼 렌더링 (내부 메서드)
     * 
     * @private
     * @param {Object} char - 캐릭터 데이터 객체
     */
    _renderExpressionButtons(char) {
        const container = document.getElementById('expression-buttons');
        const totalExpressions = char.expressions.length;

        let html = '';

        // 캐릭터가 가진 각 표정에 대해 버튼 생성
        char.expressions.forEach((expr, index) => {
            const unlocked = this.progress.isExpressionUnlocked(char.id, index, totalExpressions, expr);
            const exprName = GalleryData.getExpressionName(this.lang, expr);

            if (unlocked) {
                // 해금된 표정: 정상 버튼
                html += `
                    <button class="expression-btn ${expr === this.currentExpression ? 'active' : ''}"
                            onclick="gallery.ui.changeExpression('${expr}')">
                        ${exprName}
                    </button>
                `;
            } else {
                // 미해금 표정: 잠긴 버튼 (특별 표정은 별도 팝업)
                if (expr === 'bikini') {
                    html += `
                        <button class="expression-btn locked special"
                                onclick="gallery.ui.showBikiniLockPopup('${char.name}')">
                            💎 ${exprName}
                        </button>
                    `;
                } else {
                    const requiredAffinity = this.progress.getExpressionRequirement(index, totalExpressions);
                    html += `
                        <button class="expression-btn locked"
                                onclick="gallery.ui.showExpressionLockPopup('${char.name}', '${exprName}', ${requiredAffinity})">
                            🔒 ${exprName}
                        </button>
                    `;
                }
            }
        });

        container.innerHTML = html;
    }

    /**
     * 캐릭터 프로필 정보 렌더링 (내부 메서드)
     * 
     * @private
     * @param {Object} char - 캐릭터 데이터 객체
     */
    _renderCharacterStats(char) {
        const container = document.getElementById('char-stats');
        const affinity = this.progress.getAffinity(char.id);

        // 현재 언어에 맞는 라벨
        const labels = this.lang === 'ko' ?
            { age: '나이', birthday: '생일', height: '키', weight: '몸무게', bust: '신체사이즈', hobby: '취미', personality: '성격' } :
            { age: 'Age', birthday: 'Birthday', height: 'Height', weight: 'Weight', bust: 'Body Size', hobby: 'Hobby', personality: 'Personality' };

        const lockText = '🔒';

        // 몸무게 표시 (호감도 80 이상)
        const weightValue = affinity >= 80 ? char.weight :
            `<span class="locked-stat" onclick="gallery.ui.showStatLockPopup('weight', '${char.name}')">${lockText}</span>`;

        // 신체사이즈 표시 (호감도 100)
        const bustValue = affinity >= 100 ? char.bust :
            `<span class="locked-stat" onclick="gallery.ui.showStatLockPopup('bust', '${char.name}')">${lockText}</span>`;

        // 프로필 정보 HTML 생성
        container.innerHTML = `
            <div class="stat-item">
                <div class="stat-label">${labels.age}</div>
                <div class="stat-value">${char.age}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">${labels.birthday}</div>
                <div class="stat-value">${char.birthday}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">${labels.height}</div>
                <div class="stat-value">${char.height}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">${labels.weight}</div>
                <div class="stat-value">${weightValue}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">${labels.bust}</div>
                <div class="stat-value">${bustValue}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">${labels.hobby}</div>
                <div class="stat-value">${char.hobby}</div>
            </div>
        `;
    }

    // =========================================================================
    // 팝업 관련 메서드
    // =========================================================================

    /**
     * 해금 조건 팝업 표시
     * 
     * 잠긴 콘텐츠 클릭 시 해금 조건을 알려주는 팝업을 표시합니다.
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
                <p class="unlock-popup-message">${options.message.replace(/\n/g, '<br>')}</p>
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

    // =========================================================================
    // CG 갤러리 렌더링
    // =========================================================================

    /**
     * CG 그리드 렌더링
     * 
     * CG가 없는 경우 빈 상태 메시지 표시
     * 해금된 CG는 썸네일 표시, 미해금은 자물쇠 표시
     */
    renderCG() {
        const grid = document.getElementById('cg-grid');
        if (!grid) return;

        // 현재 언어에 맞는 CG 목록 가져오기
        const cgList = GalleryData.getCGList(this.lang);

        // CG가 없는 경우 빈 상태 메시지 표시
        if (cgList.length === 0) {
            const emptyMsg = this.lang === 'ko' ?
                { title: '아직 이벤트 CG가 없습니다', desc: '게임을 진행하며 특별한 순간을 수집하세요!' } :
                { title: 'No Event CG yet', desc: 'Collect special moments as you play!' };

            grid.innerHTML = `
                <div class="empty-state" style="grid-column: 1/-1;">
                    <div class="icon">🖼️</div>
                    <h3>${emptyMsg.title}</h3>
                    <p>${emptyMsg.desc}</p>
                </div>
            `;
            return;
        }

        // CG 카드들 렌더링
        let html = '';
        cgList.forEach(cg => {
            const unlocked = this.progress.isUnlocked('cg', cg.id);

            html += `
                <div class="cg-card ${unlocked ? '' : 'locked'}" 
                     onclick="${unlocked ? `gallery.ui.openCGModal('${cg.id}')` : `gallery.ui.showCGLockPopup('${cg.id}')`}">
                    
                    <!-- CG 이미지 영역 -->
                    <div class="card-image">
                        ${unlocked ?
                    `<img src="${cg.thumbnail || cg.file}" alt="${cg.name}">` :
                    `<div class="lock-overlay">🔒</div>`
                }
                    </div>
                    
                    <!-- CG 정보 영역 -->
                    <div class="card-info">
                        <h4>${cg.name}</h4>
                        <p>${unlocked ? cg.character : (this.lang === 'ko' ? '미해금' : 'Locked')}</p>
                    </div>
                </div>
            `;
        });

        grid.innerHTML = html;
    }

    /**
     * CG 잠금 팝업 표시
     * 
     * @param {string} cgId - CG ID
     */
    showCGLockPopup(cgId) {
        this.showUnlockPopup({
            title: this.lang === 'ko' ? 'CG 미해금' : 'CG Locked',
            message: this.lang === 'ko'
                ? '이 이벤트 CG는 아직 해금되지 않았습니다.\n\n💕 해금 조건: 게임에서 해당 이벤트를 경험하세요!'
                : 'This event CG is not yet unlocked.\n\n💕 Condition: Experience this event in the game!',
            icon: '🖼️'
        });
    }

    /**
     * CG 모달 열기
     * 
     * @param {string} cgId - 표시할 CG ID
     */
    openCGModal(cgId) {
        // CG 데이터 찾기
        const cg = GalleryData.getCG(this.lang, cgId);
        if (!cg) return;

        // CG 모달 가져오기 (없으면 동적 생성)
        const modal = document.getElementById('cg-modal') || this._createCGModal();

        // 모달 내용 업데이트
        const cgImage = document.getElementById('cg-modal-image');
        cgImage.src = cg.file;
        cgImage.classList.remove('cg-image-loaded');

        document.getElementById('cg-modal-title').textContent = cg.name;
        document.getElementById('cg-modal-desc').textContent = cg.description;

        // 모달 표시 (애니메이션 트리거)
        modal.classList.add('active');

        // 이미지 로드 완료 시 효과 시작
        cgImage.onload = () => {
            requestAnimationFrame(() => {
                cgImage.classList.add('cg-image-loaded');
            });
        };
    }

    /**
     * CG 모달 닫기
     */
    closeCGModal() {
        const modal = document.getElementById('cg-modal');
        if (modal) modal.classList.remove('active');
    }

    /**
     * CG 모달 동적 생성 (내부 메서드)
     * 
     * @private
     * @returns {HTMLElement} 생성된 모달 요소
     */
    _createCGModal() {
        const modal = document.createElement('div');
        modal.id = 'cg-modal';
        modal.className = 'modal-overlay cg-modal-overlay';

        // 모달 외부 클릭 시 닫기
        modal.onclick = (e) => {
            if (e.target === modal) this.closeCGModal();
        };

        // 모달 내용 HTML (파티클 효과 포함)
        modal.innerHTML = `
            <div class="cg-particles"></div>
            <div class="cg-glow-effect"></div>
            <div class="modal-content cg-modal-content">
                <button class="modal-close cg-close-btn" onclick="gallery.ui.closeCGModal()">×</button>
                <div class="cg-viewer">
                    <img id="cg-modal-image" src="" alt="CG">
                </div>
                <div class="cg-info">
                    <h3 id="cg-modal-title"></h3>
                    <p id="cg-modal-desc"></p>
                </div>
            </div>
        `;

        // body에 추가
        document.body.appendChild(modal);

        // 파티클 생성
        this._createCGParticles(modal.querySelector('.cg-particles'));

        return modal;
    }

    /**
     * CG 모달 파티클 생성 (내부 메서드)
     * 
     * @private
     * @param {HTMLElement} container - 파티클을 넣을 컨테이너
     */
    _createCGParticles(container) {
        if (!container) return;

        const particles = ['✨', '💕', '💖', '⭐', '🌟', '💗'];
        const particleCount = 15;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('span');
            particle.className = 'cg-particle';
            particle.textContent = particles[Math.floor(Math.random() * particles.length)];
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (10 + Math.random() * 8) + 's';
            particle.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
            container.appendChild(particle);
        }
    }

    // =========================================================================
    // 음악실 렌더링
    // =========================================================================

    /**
     * 음악 목록 렌더링
     * 
     * 표시 정보:
     * - 해금된 BGM: 제목, 아티스트, 재생시간 표시
     * - 잠긴 BGM: ??? 표시, 클릭 시 해금 조건 팝업
     * - 재생 중인 BGM: playing 클래스 추가로 강조 표시
     */
    renderMusic() {
        const list = document.getElementById('music-list');
        if (!list) return;

        // 현재 언어에 맞는 BGM 목록 가져오기
        const bgmList = GalleryData.getBGMList(this.lang);
        let html = '';

        // 각 BGM에 대해 항목 HTML 생성
        bgmList.forEach(bgm => {
            const unlocked = this.progress.isUnlocked('bgm', bgm.id);
            const isPlaying = this.currentBgm === bgm.id;

            html += `
                <div class="music-item ${unlocked ? '' : 'locked'} ${isPlaying ? 'playing' : ''}"
                     onclick="${unlocked ? `gallery.ui.toggleBgm('${bgm.id}', '${bgm.file}')` : `gallery.ui.showMusicLockPopup('${bgm.id}')`}">
                    
                    <!-- 재생/잠금 아이콘 -->
                    <div class="music-icon">
                        ${isPlaying ? '⏸️' : (unlocked ? '▶️' : '🔒')}
                    </div>
                    
                    <!-- BGM 정보 -->
                    <div class="music-info">
                        <h4>${unlocked ? bgm.name : '???'}</h4>
                        <p>${unlocked ? bgm.artist : (this.lang === 'ko' ? '미해금' : 'Locked')}</p>
                    </div>
                    
                    <!-- 재생 시간 -->
                    <div class="music-duration">
                        ${unlocked ? bgm.duration : '--:--'}
                    </div>
                </div>
            `;
        });

        list.innerHTML = html;
    }

    /**
     * 음악 잠금 팝업 표시
     * 
     * @param {string} bgmId - BGM ID
     */
    showMusicLockPopup(bgmId) {
        this.showUnlockPopup({
            title: this.lang === 'ko' ? '음악 미해금' : 'Music Locked',
            message: this.lang === 'ko'
                ? '이 배경음악은 아직 해금되지 않았습니다.\n\n🎵 해금 조건: 게임에서 해당 음악이 재생되면 자동 해금됩니다!'
                : 'This BGM is not yet unlocked.\n\n🎵 Condition: Will unlock automatically when played in game!',
            icon: '🎵'
        });
    }

    /**
     * BGM 재생/정지 토글
     * 
     * 동작 설명:
     * 1. 현재 재생 중인 곡을 클릭한 경우: 재생 정지
     * 2. 다른 곡을 클릭한 경우: 기존 곡 정지 후 새 곡 재생
     * 
     * @param {string} id - BGM ID
     * @param {string} file - 오디오 파일 경로
     */
    toggleBgm(id, file) {
        if (this.currentBgm === id) {
            // 현재 재생 중인 곡을 클릭한 경우: 정지
            if (this.bgmAudio) {
                this.bgmAudio.pause();
                this.bgmAudio = null;
            }
            this.currentBgm = null;
        } else {
            // 다른 곡을 클릭한 경우: 재생

            // 기존에 재생 중인 곡이 있으면 정지
            if (this.bgmAudio) {
                this.bgmAudio.pause();
            }

            // 새 Audio 객체 생성
            this.bgmAudio = new Audio(file);

            // 볼륨 설정 (localStorage에서 저장된 볼륨 사용, 기본값 0.5)
            this.bgmAudio.volume = parseFloat(localStorage.getItem('bgmVolume') || 0.5);

            // 반복 재생 설정
            this.bgmAudio.loop = true;

            // 재생 시작 (실패 시 에러 무시)
            this.bgmAudio.play().catch(e => console.log('Audio play failed:', e));

            this.currentBgm = id;
        }

        // UI 업데이트 (재생 상태 반영)
        this.renderMusic();
    }

    /**
     * 오디오 정리
     * 페이지 떠나기 전 호출
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
