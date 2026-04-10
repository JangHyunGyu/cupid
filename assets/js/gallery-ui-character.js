/**
 * ============================================================================
 * CharacterRenderer - 캐릭터 갤러리 렌더러
 * ============================================================================
 * 
 * 캐릭터 그리드 렌더링 및 캐릭터 상세 모달 기능을 담당합니다.
 * GalleryUI에서 Composition으로 주입받아 사용합니다.
 * 
 * 의존성:
 *   - GalleryData: 캐릭터 데이터 조회
 *   - GalleryProgress: 해금 상태 확인
 *   - GalleryUI (parent): 팝업 표시 기능
 */
class CharacterRenderer {
    /**
     * CharacterRenderer 생성자
     * 
     * @param {GalleryUI} ui - 부모 GalleryUI 인스턴스
     */
    constructor(ui) {
        /** @type {GalleryUI} 부모 UI 인스턴스 */
        this.ui = ui;

        /** @type {HTMLElement|null} 캐릭터 그리드 컨테이너 */
        this.gridEl = null;

        /** @type {HTMLElement|null} 캐릭터 모달 요소 */
        this.modalEl = null;

        /** @type {string|null} 현재 선택된 캐릭터 ID */
        this.currentCharacter = null;

        /** @type {string} 현재 선택된 표정 */
        this.currentExpression = 'normal';
    }

    /**
     * 초기화 - DOM 요소 캐싱 및 이벤트 위임 설정
     */
    init() {
        this.gridEl = document.getElementById('character-grid');
        this.modalEl = document.getElementById('character-modal');

        // 그리드 이벤트 위임
        if (this.gridEl) {
            this.gridEl.addEventListener('click', (e) => this._handleGridClick(e));
        }

        // 모달 내부 이벤트 위임
        if (this.modalEl) {
            this.modalEl.addEventListener('click', (e) => this._handleModalClick(e));
        }
    }

    /**
     * 그리드 클릭 이벤트 핸들러
     * @private
     */
    _handleGridClick(e) {
        const card = e.target.closest('.character-card');
        if (!card) return;

        const charId = card.dataset.charId;
        if (!charId) return;

        this._handleCharacterClick(charId);
    }

    /**
     * 모달 내부 클릭 이벤트 핸들러
     * @private
     */
    _handleModalClick(e) {
        const target = e.target;

        // 표정 버튼 클릭
        const exprBtn = target.closest('.expression-btn');
        if (exprBtn) {
            const expr = exprBtn.dataset.expr;
            const isLocked = exprBtn.classList.contains('locked');

            if (isLocked) {
                const isBikini = exprBtn.classList.contains('special');
                const charName = exprBtn.dataset.charName;
                const exprName = exprBtn.dataset.exprName;
                const requiredAffinity = parseInt(exprBtn.dataset.requiredAffinity) || 0;

                if (isBikini) {
                    this.ui.showBikiniLockPopup(charName);
                } else {
                    this.ui.showExpressionLockPopup(charName, exprName, requiredAffinity);
                }
            } else if (expr) {
                this.changeExpression(expr);
            }
            return;
        }

        // 프리토킹 버튼 클릭
        const ftBtn = target.closest('.freetalk-btn');
        if (ftBtn) {
            const charId = ftBtn.dataset.charId;
            if (ftBtn.classList.contains('locked')) {
                const charName = ftBtn.dataset.charName;
                this._showFreeTalkLockPopup(charId, charName);
            } else if (charId && window.galleryFreeTalk) {
                this.closeModal();
                window.galleryFreeTalk.open(charId);
            }
            return;
        }

        // 더보기 버튼 클릭
        const descBtn = target.closest('.desc-more-btn');
        if (descBtn) {
            const charId = descBtn.dataset.charId;
            if (charId) this.ui.showDescriptionLockPopup(charId);
            return;
        }

        // 잠긴 스탯 클릭
        const lockedStat = target.closest('.locked-stat');
        if (lockedStat) {
            const statType = lockedStat.dataset.statType;
            const charName = lockedStat.dataset.charName;
            if (statType && charName) this.ui.showStatLockPopup(statType, charName);
            return;
        }

        // 닫기 버튼 클릭
        if (target.closest('.modal-close')) {
            this.closeModal();
            return;
        }

        // 모달 배경 클릭 시 닫기
        if (target === this.modalEl) {
            this.closeModal();
        }
    }

    /**
     * 캐릭터 그리드 렌더링
     */
    render() {
        if (!this.gridEl) {
            this.gridEl = document.getElementById('character-grid');
            if (!this.gridEl) return;
            this.gridEl.addEventListener('click', (e) => this._handleGridClick(e));
        }

        const characters = GalleryData.getAllCharacters(this.ui.lang);
        let html = '';

        Object.values(characters).forEach(char => {
            const met = this.ui.progress.isMet(char.id);
            const expressionCount = char.expressions.length;

            // data 속성으로 ID 전달 (인라인 onclick 제거)
            html += `
                <div class="character-card ${met ? '' : 'not-met'}" data-char-id="${char.id}">
                    <div class="card-image">
                        <img src="assets/images/characters/${char.id}_normal.png?v=${window.ASSET_VERSION || ''}"
                             alt="${met ? char.name : '???'}" 
                             class="${met ? '' : 'silhouette'}">
                    </div>
                    <div class="card-info">
                        <h3>${met ? char.name : '???'}</h3>
                        <p>${met ? char.title : ({ ko: '아직 만나지 못함', en: 'Not yet met', es: 'Aún no conocido', ja: 'まだ出会っていない', fr: 'Pas encore rencontré(e)', de: 'Noch nicht getroffen', pt: 'Ainda não encontrado(a)' }[this.ui.lang] || 'Not yet met')}</p>
                        ${met ? `<span class="expression-count">${{ ko: '표정', en: 'Expressions', es: 'Expresiones', ja: '表情', fr: 'Expressions', de: 'Ausdrücke', pt: 'Expressões' }[this.ui.lang] || 'Expressions'} ${expressionCount}</span>` : ''}
                    </div>
                </div>
            `;
        });

        this.gridEl.innerHTML = html;
    }

    /**
     * 캐릭터 카드 클릭 핸들러
     * @private
     * @param {string} charId - 캐릭터 ID
     */
    _handleCharacterClick(charId) {
        const met = this.ui.progress.isMet(charId);

        if (!met) {
            const L = (ko, en, es, ja, fr, de, pt) => ({ ko, en, es, ja, fr, de, pt })[this.ui.lang] || en;
            this.ui.showUnlockPopup({
                title: L('캐릭터 미발견', 'Character Not Found', 'Personaje no encontrado', 'キャラクター未発見', 'Personnage non découvert', 'Charakter nicht gefunden', 'Personagem não encontrado'),
                message: L(
                    '아직 이 캐릭터를 만나지 못했습니다.<br>게임을 진행하여 캐릭터를 만나보세요!',
                    'You haven\'t met this character yet.<br>Play the game to meet them!',
                    'Aún no has conocido a este personaje.<br>¡Juega para conocerlo!',
                    'まだこのキャラクターに出会っていません。<br>ゲームを進めてキャラクターに会いましょう！',
                    'Vous n\'avez pas encore rencontré ce personnage.<br>Jouez pour le rencontrer !',
                    'Du hast diesen Charakter noch nicht getroffen.<br>Spiele das Spiel, um ihn kennenzulernen!',
                    'Você ainda não encontrou este personagem.<br>Jogue para conhecê-lo!'
                ),
                icon: '❓'
            });
        } else {
            this.openModal(charId);
        }
    }

    /**
     * 캐릭터 상세 모달 열기
     * @param {string} charId - 캐릭터 ID
     */
    openModal(charId) {
        this.currentCharacter = charId;
        this.currentExpression = 'normal';

        if (!this.modalEl) {
            this.modalEl = document.getElementById('character-modal');
            if (this.modalEl) {
                this.modalEl.addEventListener('click', (e) => this._handleModalClick(e));
            }
        }

        const char = GalleryData.getCharacter(this.ui.lang, charId);
        if (!char || !this.modalEl) return;

        const affinity = this.ui.progress.getAffinity(charId);

        document.getElementById('modal-char-name').textContent = char.name;
        document.getElementById('modal-char-title').textContent = char.title;

        // 소개 표시
        const descContainer = document.getElementById('modal-char-desc');
        if (affinity >= 80) {
            descContainer.innerHTML = char.description;
        } else {
            const moreBtn = { ko: '소개 더 보기', en: 'Read More', es: 'Leer más', ja: 'もっと見る', fr: 'En savoir plus', de: 'Mehr lesen', pt: 'Ler mais' }[this.ui.lang] || 'Read More';
            descContainer.innerHTML = `${char.shortDescription} <button class="desc-more-btn" data-char-id="${charId}">${moreBtn}</button>`;
        }

        this._updateImage();
        this._renderExpressionButtons(char);
        this._renderStats(char);
        this._renderFreeTalkButton(charId, char.name);

        this.modalEl.classList.add('active');
    }

    /**
     * 캐릭터 모달 닫기
     */
    closeModal() {
        if (this.modalEl) {
            this.modalEl.classList.remove('active');
        }
        this.currentCharacter = null;
    }

    /**
     * 캐릭터 이미지 업데이트
     * @private
     */
    _updateImage() {
        const img = document.getElementById('modal-char-image');
        if (img && this.currentCharacter) {
            img.src = `assets/images/characters/${this.currentCharacter}_${this.currentExpression}.png?v=${window.ASSET_VERSION || ''}`;
        }
    }

    /**
     * 표정 변경
     * @param {string} expr - 표정 코드
     */
    changeExpression(expr) {
        this.currentExpression = expr;
        this._updateImage();

        // 활성 버튼 업데이트
        if (this.modalEl) {
            this.modalEl.querySelectorAll('.expression-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.expr === expr);
            });
        }
    }

    /**
     * 표정 버튼 렌더링
     * @private
     * @param {Object} char - 캐릭터 데이터
     */
    _renderExpressionButtons(char) {
        const container = document.getElementById('expression-buttons');
        if (!container) return;

        const totalExpressions = char.expressions.length;
        let html = '';

        char.expressions.forEach((expr, index) => {
            const unlocked = this.ui.progress.isExpressionUnlocked(char.id, index, totalExpressions, expr);
            const exprName = GalleryData.getExpressionName(this.ui.lang, expr);

            if (unlocked) {
                html += `
                    <button class="expression-btn ${expr === this.currentExpression ? 'active' : ''}"
                            data-expr="${expr}">
                        ${exprName}
                    </button>
                `;
            } else {
                const isBikini = expr === 'bikini';
                const requiredAffinity = this.ui.progress.getExpressionRequirement(index, totalExpressions);

                html += `
                    <button class="expression-btn locked ${isBikini ? 'special' : ''}"
                            data-char-name="${char.name}"
                            data-expr-name="${exprName}"
                            data-required-affinity="${requiredAffinity}">
                        ${isBikini ? '💎' : '🔒'} ${exprName}
                    </button>
                `;
            }
        });

        container.innerHTML = html;
    }

    /**
     * 캐릭터 프로필 정보 렌더링
     * @private
     * @param {Object} char - 캐릭터 데이터
     */
    _renderStats(char) {
        const container = document.getElementById('char-stats');
        if (!container) return;

        const affinity = this.ui.progress.getAffinity(char.id);

        const labels = {
            ko: { age: '나이', birthday: '생일', height: '키', weight: '몸무게', bust: '신체사이즈', hobby: '취미' },
            en: { age: 'Age', birthday: 'Birthday', height: 'Height', weight: 'Weight', bust: 'Body Size', hobby: 'Hobby' },
            es: { age: 'Edad', birthday: 'Cumpleaños', height: 'Altura', weight: 'Peso', bust: 'Talla', hobby: 'Pasatiempo' },
            ja: { age: '年齢', birthday: '誕生日', height: '身長', weight: '体重', bust: '身体サイズ', hobby: '趣味' },
            fr: { age: 'Âge', birthday: 'Anniversaire', height: 'Taille', weight: 'Poids', bust: 'Mensurations', hobby: 'Loisir' },
            de: { age: 'Alter', birthday: 'Geburtstag', height: 'Größe', weight: 'Gewicht', bust: 'Körpermaße', hobby: 'Hobby' },
            pt: { age: 'Idade', birthday: 'Aniversário', height: 'Altura', weight: 'Peso', bust: 'Medidas', hobby: 'Hobby' }
        }[this.ui.lang] || { age: 'Age', birthday: 'Birthday', height: 'Height', weight: 'Weight', bust: 'Body Size', hobby: 'Hobby' };

        const lockText = '🔒';

        const weightValue = affinity >= 80 ? char.weight :
            `<span class="locked-stat" data-stat-type="weight" data-char-name="${char.name}">${lockText}</span>`;

        const bustValue = affinity >= 100 ? char.bust :
            `<span class="locked-stat" data-stat-type="bust" data-char-name="${char.name}">${lockText}</span>`;

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
    /**
     * 프리토킹 버튼 렌더링
     * @private
     * @param {string} charId - 캐릭터 ID
     * @param {string} charName - 캐릭터 표시 이름
     */
    _renderFreeTalkButton(charId, charName) {
        const container = document.getElementById('freetalk-button-container');
        if (!container) return;

        const unlocked = this.ui.progress.isFreeTalkUnlocked(charId);
        const L = (ko, en, es, ja, fr, de, pt) => ({ ko, en, es, ja, fr, de, pt })[this.ui.lang] || en;

        if (unlocked) {
            container.innerHTML = `
                <button class="freetalk-btn" data-char-id="${charId}">
                    💕 ${L('연인모드 비밀대화', 'Secret Love Chat', 'Chat Secreto de Amor', '恋人モード秘密会話', 'Chat Secret Amoureux', 'Geheimes Liebeschat', 'Chat Secreto de Amor')}
                </button>
            `;
        } else {
            container.innerHTML = `
                <button class="freetalk-btn locked" data-char-id="${charId}" data-char-name="${charName}">
                    🔒 ${L('연인모드 비밀대화', 'Secret Love Chat', 'Chat Secreto de Amor', '恋人モード秘密会話', 'Chat Secret Amoureux', 'Geheimes Liebeschat', 'Chat Secreto de Amor')}
                </button>
            `;
        }
    }

    /**
     * 프리토킹 잠금 팝업 표시
     * @private
     * @param {string} charId - 캐릭터 ID
     * @param {string} charName - 캐릭터 이름
     */
    _showFreeTalkLockPopup(charId, charName) {
        const L = (ko, en, es, ja, fr, de, pt) => ({ ko, en, es, ja, fr, de, pt })[this.ui.lang] || en;

        const perfectEnding = this.ui.progress.data.characters?.[charId]?.perfectEndingCleared || false;
        const currentAffinity = this.ui.progress.getAffinity(charId);
        const freeTalkCount = this.ui.progress.getFreeTalkCount(charId);

        const hiddenChars = ['teacher', 'nurse'];
        const affinityMax = hiddenChars.includes(charId) ? 80 : 100;
        const endingStatus = perfectEnding ? '✅' : '❌';
        const affinityStatus = currentAffinity >= affinityMax ? '✅' : '❌';
        const talkStatus = freeTalkCount >= 30 ? '✅' : '❌';

        this.ui.showUnlockPopup({
            title: L('대화 미해금', 'Chat Locked', 'Chat bloqueado', '会話未解放', 'Discussion verrouillée', 'Chat gesperrt', 'Chat bloqueado'),
            message: L(
                `${charName}의 비밀대화를 열려면<br>세 가지 조건을 모두 달성해야 합니다!<br><br><span class="condition-line">💘 PERFECT 엔딩 클리어 ${endingStatus}</span><span class="condition-line">💕 최대 호감도: ${currentAffinity}/${affinityMax} ${affinityStatus}</span><span class="condition-line">💬 프리토킹: ${freeTalkCount}/30회 ${talkStatus}</span>`,
                `To unlock ${charName}'s Secret Chat,<br>you need to achieve all three conditions!<br><br><span class="condition-line">💘 Clear PERFECT Ending ${endingStatus}</span><span class="condition-line">💕 Max Affinity: ${currentAffinity}/${affinityMax} ${affinityStatus}</span><span class="condition-line">💬 Free Talks: ${freeTalkCount}/30 ${talkStatus}</span>`,
                `Para desbloquear el chat secreto de ${charName},<br>debes cumplir las tres condiciones!<br><br><span class="condition-line">💘 Completar final PERFECT ${endingStatus}</span><span class="condition-line">💕 Afinidad max: ${currentAffinity}/${affinityMax} ${affinityStatus}</span><span class="condition-line">💬 Charlas libres: ${freeTalkCount}/30 ${talkStatus}</span>`,
                `${charName}の秘密会話を開くには<br>3つの条件をすべて達成する必要があります！<br><br><span class="condition-line">💘 PERFECTエンディングクリア ${endingStatus}</span><span class="condition-line">💕 最大好感度: ${currentAffinity}/${affinityMax} ${affinityStatus}</span><span class="condition-line">💬 フリートーク: ${freeTalkCount}/30回 ${talkStatus}</span>`,
                `Pour débloquer la discussion secrète de ${charName},<br>vous devez remplir les trois conditions !<br><br><span class="condition-line">💘 Fin PERFECT terminée ${endingStatus}</span><span class="condition-line">💕 Affinité max : ${currentAffinity}/${affinityMax} ${affinityStatus}</span><span class="condition-line">💬 Discussions libres : ${freeTalkCount}/30 ${talkStatus}</span>`,
                `Um ${charName}s geheimen Chat freizuschalten,<br>musst du alle drei Bedingungen erfüllen!<br><br><span class="condition-line">💘 PERFECT-Ende abgeschlossen ${endingStatus}</span><span class="condition-line">💕 Max. Zuneigung: ${currentAffinity}/${affinityMax} ${affinityStatus}</span><span class="condition-line">💬 Freie Gespräche: ${freeTalkCount}/30 ${talkStatus}</span>`,
                `Para desbloquear o Chat Secreto de ${charName},<br>você precisa cumprir todas as três condições!<br><br><span class="condition-line">💘 Final PERFECT concluído ${endingStatus}</span><span class="condition-line">💕 Afinidade máx.: ${currentAffinity}/${affinityMax} ${affinityStatus}</span><span class="condition-line">💬 Conversas livres: ${freeTalkCount}/30 ${talkStatus}</span>`
            ),
            icon: '🔒'
        });
    }
}

// 전역 접근을 위해 window에 노출
window.CharacterRenderer = CharacterRenderer;
