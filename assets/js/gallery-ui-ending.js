'use strict';

class EndingRenderer {
    constructor(ui) {
        this.ui = ui;
        this.gridEl = null;
        this.summaryEl = null;
    }

    render() {
        this.gridEl = this.gridEl || document.getElementById('ending-grid');
        this.summaryEl = this.summaryEl || document.getElementById('ending-summary');
        if (!this.gridEl || !this.summaryEl) return;

        const catalog = GalleryData.getEndingCatalog(this.ui.lang);
        const copy = GalleryData.getEndingCopy(this.ui.lang);
        const unlockedCount = this.ui.progress.getUnlockedEndingCount();
        this.summaryEl.innerHTML = `<strong>${unlockedCount}/${catalog.length}</strong><span>${copy.discovered}</span>`;

        this.gridEl.replaceChildren(...catalog.map(ending => {
            const unlocked = this.ui.progress.isEndingUnlocked(ending.id);
            const card = document.createElement('article');
            card.className = `ending-card${unlocked ? ' is-unlocked' : ' is-locked'}`;
            card.dataset.endingId = ending.id;

            const number = document.createElement('span');
            number.className = 'ending-card__number';
            number.textContent = `ENDING ${String(ending.number).padStart(2, '0')}`;

            const icon = document.createElement('span');
            icon.className = 'ending-card__icon';
            icon.setAttribute('aria-hidden', 'true');
            icon.textContent = unlocked ? '🏆' : '🔒';

            const title = document.createElement('h3');
            title.textContent = unlocked ? ending.name : '???';

            const status = document.createElement('span');
            status.className = 'ending-card__status';
            status.textContent = unlocked ? copy.complete : copy.locked;

            const description = document.createElement('p');
            description.textContent = unlocked ? copy.complete : `${copy.hintLabel}: ${ending.hint}`;

            card.append(number, icon, title, status, description);
            return card;
        }));
    }
}

window.EndingRenderer = EndingRenderer;
