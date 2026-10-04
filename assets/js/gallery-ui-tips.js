'use strict';

/**
 * ============================================================================
 * TipsRenderer - 프리토킹 팁 탭 + 레이어 팝업(모달)
 * ============================================================================
 *
 * - 데이터: GalleryTipsData (gallery-tips-data.js). 진행도와 무관하게 공개됩니다.
 * - 목록은 #tips-root에 그리고, 팁을 누르면 #tip-modal-backdrop 안의 대화상자를 엽니다.
 * - 대화상자: role="dialog" + aria-modal, 포커스 트랩, ESC·배경 클릭·닫기 버튼으로 닫기,
 *   스크롤 잠금, 닫을 때 호출한 버튼으로 포커스 복귀.
 * - 모달 뼈대(#tip-modal-backdrop)는 각 gallery*.html에 들어 있고, 없으면 스스로 만듭니다.
 */
class TipsRenderer {
    constructor(ui) {
        this.ui = ui;
        this.rootEl = null;
        this.backdropEl = null;
        this.dialogEl = null;
        this.openTipId = null;
        this.returnFocusEl = null;
        this.inertEls = [];
        this._onKeydown = (event) => this._handleKeydown(event);
    }

    get lang() {
        return this.ui.lang;
    }

    get copy() {
        return GalleryTipsData.getCopy(this.lang);
    }

    _tips() {
        return GalleryTipsData.getTips(this.lang, {
            getName: (charId) => GalleryData.getCharacter(this.lang, charId)?.name || charId,
            isMet: (charId) => this.ui.progress.isMet(charId)
        });
    }

    render() {
        this.rootEl = this.rootEl || document.getElementById('tips-root');
        if (!this.rootEl) return;
        const copy = this.copy;
        const tips = this._tips();

        const heading = document.createElement('h2');
        heading.className = 'tips-heading';
        heading.textContent = copy.heading;

        const intro = document.createElement('p');
        intro.className = 'tips-intro';
        intro.textContent = copy.intro;

        const sections = [
            this._renderGroup('general', copy.generalHeading, tips.filter(tip => tip.group === 'general')),
            this._renderGroup('character', copy.characterHeading, tips.filter(tip => tip.group === 'character'))
        ];
        this.rootEl.replaceChildren(heading, intro, ...sections);

        if (!this.rootEl.dataset.tipsBound) {
            this.rootEl.dataset.tipsBound = 'true';
            this.rootEl.addEventListener('click', (event) => {
                const card = event.target.closest('button.tip-card[data-tip-id]');
                if (card) this.open(card.dataset.tipId, card);
            });
        }
    }

    _renderGroup(group, title, tips) {
        const section = document.createElement('section');
        section.className = 'tips-group';
        section.dataset.tipGroup = group;
        const headingId = `tips-group-${group}`;

        const heading = document.createElement('h3');
        heading.id = headingId;
        heading.className = 'tips-group__title';
        heading.textContent = title;

        const list = document.createElement('ul');
        list.className = 'tips-list';
        list.setAttribute('aria-labelledby', headingId);

        for (const tip of tips) {
            const item = document.createElement('li');
            item.className = 'tips-list__item';
            const card = document.createElement(tip.locked ? 'div' : 'button');
            card.className = `tip-card${tip.locked ? ' is-locked' : ''}`;
            card.dataset.tipId = tip.id;
            if (tip.locked) {
                card.setAttribute('aria-disabled', 'true');
            } else {
                card.type = 'button';
                card.setAttribute('aria-haspopup', 'dialog');
            }

            const icon = document.createElement('span');
            icon.className = 'tip-card__icon';
            icon.setAttribute('aria-hidden', 'true');
            icon.textContent = tip.icon;

            const text = document.createElement('span');
            text.className = 'tip-card__text';
            const titleEl = document.createElement('span');
            titleEl.className = 'tip-card__title';
            titleEl.textContent = tip.title;
            const summaryEl = document.createElement('span');
            summaryEl.className = 'tip-card__summary';
            summaryEl.textContent = tip.summary;
            text.append(titleEl, summaryEl);

            card.append(icon, text);
            if (!tip.locked) {
                const chevron = document.createElement('span');
                chevron.className = 'tip-card__chevron';
                chevron.setAttribute('aria-hidden', 'true');
                chevron.textContent = '›';
                card.append(chevron);
            }
            item.append(card);
            list.append(item);
        }

        section.append(heading, list);
        return section;
    }

    // ------------------------------------------------------------------
    // 대화상자
    // ------------------------------------------------------------------

    _ensureDialog() {
        if (this.backdropEl && this.backdropEl.isConnected) return;
        let backdrop = document.getElementById('tip-modal-backdrop');
        if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.id = 'tip-modal-backdrop';
            backdrop.className = 'tip-modal-backdrop';
            backdrop.hidden = true;
            backdrop.innerHTML = `
                <div class="tip-modal" id="tip-modal" role="dialog" aria-modal="true" aria-labelledby="tip-modal-title" aria-describedby="tip-modal-body" tabindex="-1">
                    <button type="button" class="tip-modal__close" id="tip-modal-close" data-tip-close></button>
                    <div class="tip-modal__header">
                        <span class="tip-modal__icon" id="tip-modal-icon" aria-hidden="true"></span>
                        <div>
                            <p class="tip-modal__eyebrow" id="tip-modal-eyebrow"></p>
                            <h2 class="tip-modal__title" id="tip-modal-title"></h2>
                        </div>
                    </div>
                    <div class="tip-modal__body" id="tip-modal-body"></div>
                    <div class="tip-modal__footer">
                        <button type="button" class="tip-modal__done" id="tip-modal-done" data-tip-close></button>
                    </div>
                </div>`;
            document.body.appendChild(backdrop);
        }
        this.backdropEl = backdrop;
        this.dialogEl = backdrop.querySelector('.tip-modal');
        backdrop.addEventListener('mousedown', (event) => {
            this._pressStartedOnBackdrop = event.target === backdrop;
        });
        backdrop.addEventListener('click', (event) => {
            const onBackdrop = event.target === backdrop && this._pressStartedOnBackdrop !== false;
            this._pressStartedOnBackdrop = undefined;
            if (onBackdrop || event.target.closest('[data-tip-close]')) this.close();
        });
    }

    isOpen() {
        return Boolean(this.backdropEl && !this.backdropEl.hidden);
    }

    open(tipId, trigger = null) {
        const tip = this._tips().find(entry => entry.id === tipId);
        if (!tip || tip.locked) return false;
        this._ensureDialog();
        const copy = this.copy;

        this.dialogEl.querySelector('#tip-modal-icon').textContent = tip.icon;
        this.dialogEl.querySelector('#tip-modal-eyebrow').textContent = `${copy.dialogSuffix} · ${tip.group === 'general' ? copy.generalHeading : copy.characterHeading}`;
        this.dialogEl.querySelector('#tip-modal-title').textContent = tip.title;
        const summary = document.createElement('p');
        summary.className = 'tip-modal__summary';
        summary.textContent = tip.summary;
        const list = document.createElement('ul');
        list.className = 'tip-modal__points';
        for (const point of tip.points) {
            const li = document.createElement('li');
            li.textContent = point;
            list.append(li);
        }
        this.dialogEl.querySelector('#tip-modal-body').replaceChildren(summary, list);
        this.dialogEl.querySelector('#tip-modal-close').setAttribute('aria-label', copy.closeLabel);
        this.dialogEl.querySelector('#tip-modal-close').textContent = '✕';
        this.dialogEl.querySelector('#tip-modal-done').textContent = copy.closeLabel;
        this.dialogEl.setAttribute('lang', this.lang);

        if (this.isOpen()) {
            this.openTipId = tip.id;
            this.dialogEl.querySelector('.tip-modal__body').scrollTop = 0;
            return true;
        }

        this.openTipId = tip.id;
        this.returnFocusEl = trigger || (document.activeElement instanceof HTMLElement ? document.activeElement : null);
        this.backdropEl.hidden = false;
        this._lockScroll();
        this._setBackgroundInert(true);
        document.addEventListener('keydown', this._onKeydown, true);
        this.dialogEl.querySelector('.tip-modal__body').scrollTop = 0;
        this.dialogEl.scrollTop = 0;
        // 보이는 상태가 된 다음 프레임에 포커스를 옮깁니다.
        window.requestAnimationFrame(() => {
            if (!this.isOpen()) return;
            this.backdropEl.classList.add('is-open');
            this.dialogEl.querySelector('#tip-modal-close').focus({ preventScroll: true });
        });
        return true;
    }

    close() {
        if (!this.isOpen()) return false;
        this.backdropEl.classList.remove('is-open');
        this.backdropEl.hidden = true;
        document.removeEventListener('keydown', this._onKeydown, true);
        this._setBackgroundInert(false);
        this._unlockScroll();
        this.openTipId = null;
        const target = this.returnFocusEl;
        this.returnFocusEl = null;
        if (target && target.isConnected) target.focus({ preventScroll: true });
        return true;
    }

    _handleKeydown(event) {
        if (!this.isOpen()) return;
        if (event.key === 'Escape') {
            event.preventDefault();
            event.stopPropagation();
            this.close();
            return;
        }
        if (event.key !== 'Tab') return;
        const focusables = Array.from(this.dialogEl.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'))
            .filter(el => el.getClientRects().length > 0);
        if (!focusables.length) {
            event.preventDefault();
            this.dialogEl.focus({ preventScroll: true });
            return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;
        if (!this.dialogEl.contains(active)) {
            event.preventDefault();
            first.focus({ preventScroll: true });
        } else if (event.shiftKey && (active === first || active === this.dialogEl)) {
            event.preventDefault();
            last.focus({ preventScroll: true });
        } else if (!event.shiftKey && active === last) {
            event.preventDefault();
            first.focus({ preventScroll: true });
        }
    }

    _lockScroll() {
        document.documentElement.classList.add('tip-modal-open');
        document.body.classList.add('tip-modal-open');
    }

    _unlockScroll() {
        document.documentElement.classList.remove('tip-modal-open');
        document.body.classList.remove('tip-modal-open');
    }

    _setBackgroundInert(on) {
        if (on) {
            this.inertEls = Array.from(document.body.children).filter(el => (
                el !== this.backdropEl && !['SCRIPT', 'STYLE'].includes(el.tagName) && !el.hasAttribute('inert')
            ));
            for (const el of this.inertEls) {
                el.setAttribute('inert', '');
                el.setAttribute('data-tip-inert', 'true');
            }
        } else {
            for (const el of this.inertEls) {
                el.removeAttribute('inert');
                el.removeAttribute('data-tip-inert');
            }
            this.inertEls = [];
        }
    }
}

window.TipsRenderer = TipsRenderer;
