/**
 * ============================================================================
 * GalleryUI - 캐릭터 갤러리 확장
 * ============================================================================
 * 
 * 캐릭터 그리드 렌더링 및 캐릭터 상세 모달 기능을 담당합니다.
 * GalleryUI 클래스의 prototype에 메서드를 추가하는 방식으로 확장합니다.
 */

// =========================================================================
// 캐릭터 갤러리 렌더링
// =========================================================================

/**
 * 캐릭터 그리드 렌더링
 * 
 * 해금 단계:
 * 1. met (만남): 게임에서 캐릭터를 만난 적 있으면 카드 표시
 * 2. 표정 해금: 호감도에 따라 개별 표정 해금
 * 3. 소개/몸무게: 호감도 80 이상에서 해금
 * 4. 신체사이즈: 호감도 100에서 해금
 */
GalleryUI.prototype.renderCharacters = function () {
    const grid = document.getElementById('character-grid');
    if (!grid) return;

    const characters = GalleryData.getAllCharacters(this.lang);
    let html = '';

    Object.values(characters).forEach(char => {
        const met = this.progress.isMet(char.id);
        const expressionCount = char.expressions.length;

        html += `
            <div class="character-card ${met ? '' : 'not-met'}" 
                 onclick="gallery.ui.handleCharacterClick('${char.id}')">
                
                <div class="card-image">
                    <img src="assets/images/characters/${char.id}_normal.png" alt="${met ? char.name : '???'}" class="${met ? '' : 'silhouette'}">
                </div>
                
                <div class="card-info">
                    <h3>${met ? char.name : '???'}</h3>
                    <p>${met ? char.title : (this.lang === 'ko' ? '아직 만나지 못함' : 'Not yet met')}</p>
                    ${met ? `<span class="expression-count">${this.lang === 'ko' ? '표정' : 'Expressions'} ${expressionCount}</span>` : ''}
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
};

/**
 * 캐릭터 카드 클릭 핸들러
 * 
 * @param {string} charId - 클릭한 캐릭터 ID
 */
GalleryUI.prototype.handleCharacterClick = function (charId) {
    const met = this.progress.isMet(charId);

    if (!met) {
        this.showUnlockPopup({
            title: this.lang === 'ko' ? '캐릭터 미발견' : 'Character Not Found',
            message: this.lang === 'ko'
                ? '아직 이 캐릭터를 만나지 못했습니다.\n게임을 진행하여 캐릭터를 만나보세요!'
                : 'You haven\'t met this character yet.\nPlay the game to meet them!',
            icon: '❓'
        });
    } else {
        this.openCharacterModal(charId);
    }
};

// =========================================================================
// 캐릭터 상세 모달
// =========================================================================

/**
 * 캐릭터 상세 모달 열기
 * 
 * @param {string} charId - 표시할 캐릭터 ID
 */
GalleryUI.prototype.openCharacterModal = function (charId) {
    this.currentCharacter = charId;
    this.currentExpression = 'normal';

    const char = GalleryData.getCharacter(this.lang, charId);
    const modal = document.getElementById('character-modal');
    const affinity = this.progress.getAffinity(charId);

    document.getElementById('modal-char-name').textContent = char.name;
    document.getElementById('modal-char-title').textContent = char.title;

    // 소개 표시
    const descContainer = document.getElementById('modal-char-desc');
    if (affinity >= 80) {
        descContainer.innerHTML = char.description;
    } else {
        const moreBtn = this.lang === 'ko' ? '소개 더 보기' : 'Read More';
        descContainer.innerHTML = `${char.shortDescription} <button class="desc-more-btn" onclick="gallery.ui.showDescriptionLockPopup('${charId}')">${moreBtn}</button>`;
    }

    this._updateCharacterImage();
    this._renderExpressionButtons(char);
    this._renderCharacterStats(char);

    modal.classList.add('active');
};

/**
 * 캐릭터 상세 모달 닫기
 */
GalleryUI.prototype.closeCharacterModal = function () {
    document.getElementById('character-modal').classList.remove('active');
    this.currentCharacter = null;
};

/**
 * 캐릭터 이미지 업데이트 (내부 메서드)
 * @private
 */
GalleryUI.prototype._updateCharacterImage = function () {
    const img = document.getElementById('modal-char-image');
    img.src = `assets/images/characters/${this.currentCharacter}_${this.currentExpression}.png`;
};

/**
 * 표정 변경
 * 
 * @param {string} expr - 변경할 표정 코드
 */
GalleryUI.prototype.changeExpression = function (expr) {
    this.currentExpression = expr;
    this._updateCharacterImage();

    document.querySelectorAll('.expression-btn').forEach(btn => {
        const btnText = btn.textContent.trim();
        const exprName = GalleryData.getExpressionName(this.lang, expr);
        btn.classList.toggle('active', btnText === exprName);
    });
};

/**
 * 표정 선택 버튼 렌더링 (내부 메서드)
 * @private
 * @param {Object} char - 캐릭터 데이터 객체
 */
GalleryUI.prototype._renderExpressionButtons = function (char) {
    const container = document.getElementById('expression-buttons');
    const totalExpressions = char.expressions.length;
    let html = '';

    char.expressions.forEach((expr, index) => {
        const unlocked = this.progress.isExpressionUnlocked(char.id, index, totalExpressions, expr);
        const exprName = GalleryData.getExpressionName(this.lang, expr);

        if (unlocked) {
            html += `
                <button class="expression-btn ${expr === this.currentExpression ? 'active' : ''}"
                        onclick="gallery.ui.changeExpression('${expr}')">
                    ${exprName}
                </button>
            `;
        } else {
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
};

/**
 * 캐릭터 프로필 정보 렌더링 (내부 메서드)
 * @private
 * @param {Object} char - 캐릭터 데이터 객체
 */
GalleryUI.prototype._renderCharacterStats = function (char) {
    const container = document.getElementById('char-stats');
    const affinity = this.progress.getAffinity(char.id);

    const labels = this.lang === 'ko' ?
        { age: '나이', birthday: '생일', height: '키', weight: '몸무게', bust: '신체사이즈', hobby: '취미' } :
        { age: 'Age', birthday: 'Birthday', height: 'Height', weight: 'Weight', bust: 'Body Size', hobby: 'Hobby' };

    const lockText = '🔒';

    const weightValue = affinity >= 80 ? char.weight :
        `<span class="locked-stat" onclick="gallery.ui.showStatLockPopup('weight', '${char.name}')">${lockText}</span>`;

    const bustValue = affinity >= 100 ? char.bust :
        `<span class="locked-stat" onclick="gallery.ui.showStatLockPopup('bust', '${char.name}')">${lockText}</span>`;

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
};
