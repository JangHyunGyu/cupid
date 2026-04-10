/**
 * ============================================================================
 * CGRenderer - CG 갤러리 렌더러
 * ============================================================================
 * 
 * CG 그리드 렌더링, 모달 및 특수 효과를 담당합니다.
 * GalleryUI에서 Composition으로 주입받아 사용합니다.
 * 
 * 의존성:
 *   - GalleryData: CG 데이터 조회
 *   - GalleryProgress: 해금 상태 확인
 *   - GalleryUI (parent): 팝업 표시 기능
 */
class CGRenderer {
    /**
     * CGRenderer 생성자
     * 
     * @param {GalleryUI} ui - 부모 GalleryUI 인스턴스
     */
    constructor(ui) {
        /** @type {GalleryUI} 부모 UI 인스턴스 (팝업 등 공통 기능 사용) */
        this.ui = ui;

        /** @type {HTMLElement|null} CG 그리드 컨테이너 */
        this.gridEl = null;

        /** @type {HTMLElement|null} CG 모달 요소 */
        this.modalEl = null;
    }

    /**
     * 초기화 - DOM 요소 캐싱 및 이벤트 위임 설정
     */
    init() {
        this.gridEl = document.getElementById('cg-grid');

        // 이벤트 위임: 그리드 전체에 한 번만 이벤트 등록
        if (this.gridEl) {
            this.gridEl.addEventListener('click', (e) => this._handleGridClick(e));
        }
    }

    /**
     * 그리드 클릭 이벤트 핸들러 (이벤트 위임)
     * @private
     * @param {Event} e - 클릭 이벤트
     */
    _handleGridClick(e) {
        const card = e.target.closest('.cg-card');
        if (!card) return;

        const cgId = card.dataset.cgId;
        if (!cgId) return;

        const isLocked = card.classList.contains('locked');

        if (isLocked) {
            this.showLockPopup(cgId);
        } else {
            this.openModal(cgId);
        }
    }

    /**
     * CG 그리드 렌더링
     */
    render() {
        if (!this.gridEl) {
            this.gridEl = document.getElementById('cg-grid');
            if (!this.gridEl) return;

            // 첫 렌더링 시 이벤트 위임 설정
            this.gridEl.addEventListener('click', (e) => this._handleGridClick(e));
        }

        const cgList = GalleryData.getCGList(this.ui.lang);

        // CG가 없는 경우 빈 상태 표시
        if (cgList.length === 0) {
            const emptyMsg = {
                ko: { title: '아직 이벤트 CG가 없습니다', desc: '게임을 진행하며 특별한 순간을 수집하세요!' },
                en: { title: 'No Event CG yet', desc: 'Collect special moments as you play!' },
                es: { title: 'Aún no hay CG registrados', desc: '¡Colecciona momentos especiales mientras juegas!' },
                ja: { title: 'まだ登録されたCGはありません', desc: 'ゲームを進めて特別な瞬間を集めましょう！' },
                fr: { title: "Pas encore de CG d'événement", desc: 'Collectionnez des moments spéciaux en jouant !' },
                de: { title: 'Noch keine Event-CGs', desc: 'Sammle besondere Momente beim Spielen!' },
                pt: { title: 'Nenhum CG de Evento ainda', desc: 'Colete momentos especiais enquanto joga!' }
            }[this.ui.lang] || { title: 'No Event CG yet', desc: 'Collect special moments as you play!' };

            this.gridEl.innerHTML = `
                <div class="empty-state" style="grid-column: 1/-1;">
                    <div class="icon">🖼️</div>
                    <h3>${emptyMsg.title}</h3>
                    <p>${emptyMsg.desc}</p>
                </div>
            `;
            return;
        }

        // CG 카드 렌더링 - data 속성으로 ID 전달 (인라인 onclick 제거)
        let html = '';
        cgList.forEach(cg => {
            const unlocked = this.ui.progress.isUnlocked('cg', cg.id);

            html += `
                <div class="cg-card ${unlocked ? '' : 'locked'}" data-cg-id="${cg.id}">
                    <div class="card-image">
                        ${unlocked ?
                    `<img src="${(cg.thumbnail || cg.file)}?v=${window.ASSET_VERSION || ''}" alt="${cg.name}">` :
                    `<div class="lock-overlay">🔒</div>`
                }
                    </div>
                    <div class="card-info">
                        <h4>${cg.name}</h4>
                        <p>${unlocked ? cg.character : ({ ko: '미해금', en: 'Locked', es: 'Bloqueado', ja: '未解放', fr: 'Verrouillé', de: 'Gesperrt', pt: 'Bloqueado' }[this.ui.lang] || 'Locked')}</p>
                    </div>
                </div>
            `;
        });

        this.gridEl.innerHTML = html;
    }

    /**
     * CG 잠금 팝업 표시
     * @param {string} cgId - CG ID
     */
    showLockPopup(cgId) {
        const L = (ko, en, es, ja, fr, de) => ({ ko, en, es, ja, fr, de })[this.ui.lang] || en;

        // CG별 해금 힌트 가져오기
        const cgList = GalleryData.getCGList(this.ui.lang);
        const cgData = cgList.find(c => c.id === cgId);
        const hint = cgData?.unlockHint ?? L(
            '게임에서 해당 이벤트를 경험하세요!',
            'Experience this event in the game!',
            '¡Experimenta este evento en el juego!',
            'ゲームでこのイベントを体験しましょう！',
            'Vivez cet événement dans le jeu !',
            'Erlebe dieses Event im Spiel!'
        );

        this.ui.showUnlockPopup({
            title: L('CG 미해금', 'CG Locked', 'CG bloqueado', 'CG未解放', 'CG verrouillé', 'CG gesperrt'),
            message: L(
                `이 이벤트 CG는 아직 해금되지 않았습니다.<br><br><span class="condition-line">💕 해금 조건: ${hint}</span>`,
                `This event CG is not yet unlocked.<br><br><span class="condition-line">💕 Condition: ${hint}</span>`,
                `Este CG de evento aún no está desbloqueado.<br><br><span class="condition-line">💕 Condición: ${hint}</span>`,
                `このイベントCGはまだ解放されていません。<br><br><span class="condition-line">💕 解放条件: ${hint}</span>`,
                `Ce CG d'événement n'est pas encore débloqué.<br><br><span class="condition-line">💕 Condition : ${hint}</span>`,
                `Dieses Event-CG ist noch nicht freigeschaltet.<br><br><span class="condition-line">💕 Bedingung: ${hint}</span>`
            ),
            icon: '🖼️'
        });
    }

    /**
     * CG 모달 열기
     * @param {string} cgId - 표시할 CG ID
     */
    openModal(cgId) {
        const cg = GalleryData.getCG(this.ui.lang, cgId);
        if (!cg) return;

        const modal = this.modalEl || this._createModal();

        const cgImage = document.getElementById('cg-modal-image');
        cgImage.src = `${cg.file}?v=${window.ASSET_VERSION || ''}`;
        cgImage.classList.remove('cg-image-loaded');

        document.getElementById('cg-modal-title').textContent = cg.name;
        document.getElementById('cg-modal-desc').textContent = cg.description;

        modal.classList.add('active');

        cgImage.onload = () => {
            requestAnimationFrame(() => {
                cgImage.classList.add('cg-image-loaded');
            });
        };
    }

    /**
     * CG 모달 닫기
     */
    closeModal() {
        if (this.modalEl) {
            this.modalEl.classList.remove('active');
        }
    }

    /**
     * CG 모달 동적 생성
     * @private
     * @returns {HTMLElement} 생성된 모달 요소
     */
    _createModal() {
        const modal = document.createElement('div');
        modal.id = 'cg-modal';
        modal.className = 'modal-overlay cg-modal-overlay';

        // 모달 외부 클릭 시 닫기
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.closeModal();
        });

        modal.innerHTML = `
            <div class="cg-particles"></div>
            <div class="cg-glow-effect"></div>
            <div class="modal-content cg-modal-content">
                <button class="modal-close cg-close-btn" id="cg-close-btn">×</button>
                <div class="cg-viewer">
                    <img id="cg-modal-image" src="" alt="CG">
                </div>
                <div class="cg-info">
                    <h3 id="cg-modal-title"></h3>
                    <p id="cg-modal-desc"></p>
                </div>
            </div>
        `;

        // 닫기 버튼 이벤트
        modal.querySelector('#cg-close-btn').addEventListener('click', () => this.closeModal());

        document.body.appendChild(modal);
        this._createParticles(modal.querySelector('.cg-particles'));

        this.modalEl = modal;
        return modal;
    }

    /**
     * CG 모달 파티클 생성
     * @private
     * @param {HTMLElement} container - 파티클을 넣을 컨테이너
     */
    _createParticles(container) {
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
}

// 전역 접근을 위해 window에 노출
window.CGRenderer = CGRenderer;
