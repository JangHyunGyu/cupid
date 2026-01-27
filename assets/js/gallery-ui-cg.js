/**
 * ============================================================================
 * GalleryUI - CG 갤러리 확장
 * ============================================================================
 * 
 * CG 그리드 렌더링, CG 모달 및 특수 효과를 담당합니다.
 * GalleryUI 클래스의 prototype에 메서드를 추가하는 방식으로 확장합니다.
 */

// =========================================================================
// CG 갤러리 렌더링
// =========================================================================

/**
 * CG 그리드 렌더링
 * 
 * CG가 없는 경우 빈 상태 메시지 표시
 * 해금된 CG는 썸네일 표시, 미해금은 자물쇠 표시
 */
GalleryUI.prototype.renderCG = function () {
    const grid = document.getElementById('cg-grid');
    if (!grid) return;

    const cgList = GalleryData.getCGList(this.lang);

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

    let html = '';
    cgList.forEach(cg => {
        const unlocked = this.progress.isUnlocked('cg', cg.id);

        html += `
            <div class="cg-card ${unlocked ? '' : 'locked'}" 
                 onclick="${unlocked ? `gallery.ui.openCGModal('${cg.id}')` : `gallery.ui.showCGLockPopup('${cg.id}')`}">
                
                <div class="card-image">
                    ${unlocked ?
                `<img src="${cg.thumbnail || cg.file}" alt="${cg.name}">` :
                `<div class="lock-overlay">🔒</div>`
            }
                </div>
                
                <div class="card-info">
                    <h4>${cg.name}</h4>
                    <p>${unlocked ? cg.character : (this.lang === 'ko' ? '미해금' : 'Locked')}</p>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
};

/**
 * CG 잠금 팝업 표시
 * 
 * @param {string} cgId - CG ID
 */
GalleryUI.prototype.showCGLockPopup = function (cgId) {
    this.showUnlockPopup({
        title: this.lang === 'ko' ? 'CG 미해금' : 'CG Locked',
        message: this.lang === 'ko'
            ? '이 이벤트 CG는 아직 해금되지 않았습니다.\n\n💕 해금 조건: 게임에서 해당 이벤트를 경험하세요!'
            : 'This event CG is not yet unlocked.\n\n💕 Condition: Experience this event in the game!',
        icon: '🖼️'
    });
};

// =========================================================================
// CG 모달
// =========================================================================

/**
 * CG 모달 열기
 * 
 * @param {string} cgId - 표시할 CG ID
 */
GalleryUI.prototype.openCGModal = function (cgId) {
    const cg = GalleryData.getCG(this.lang, cgId);
    if (!cg) return;

    const modal = document.getElementById('cg-modal') || this._createCGModal();

    const cgImage = document.getElementById('cg-modal-image');
    cgImage.src = cg.file;
    cgImage.classList.remove('cg-image-loaded');

    document.getElementById('cg-modal-title').textContent = cg.name;
    document.getElementById('cg-modal-desc').textContent = cg.description;

    modal.classList.add('active');

    cgImage.onload = () => {
        requestAnimationFrame(() => {
            cgImage.classList.add('cg-image-loaded');
        });
    };
};

/**
 * CG 모달 닫기
 */
GalleryUI.prototype.closeCGModal = function () {
    const modal = document.getElementById('cg-modal');
    if (modal) modal.classList.remove('active');
};

/**
 * CG 모달 동적 생성 (내부 메서드)
 * @private
 * @returns {HTMLElement} 생성된 모달 요소
 */
GalleryUI.prototype._createCGModal = function () {
    const modal = document.createElement('div');
    modal.id = 'cg-modal';
    modal.className = 'modal-overlay cg-modal-overlay';

    modal.onclick = (e) => {
        if (e.target === modal) this.closeCGModal();
    };

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

    document.body.appendChild(modal);
    this._createCGParticles(modal.querySelector('.cg-particles'));

    return modal;
};

/**
 * CG 모달 파티클 생성 (내부 메서드)
 * @private
 * @param {HTMLElement} container - 파티클을 넣을 컨테이너
 */
GalleryUI.prototype._createCGParticles = function (container) {
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
};
