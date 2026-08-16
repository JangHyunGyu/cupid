(function () {
    'use strict';

    const modalConfigs = [
        {
            id: 'newGameConfirmModal',
            role: 'alertdialog',
            titleSelector: '.modal-title',
            descriptionSelector: '.modal-container > p',
            cancelSelector: '.modal-btn.cancel'
        },
        {
            id: 'homeConfirmModal',
            role: 'alertdialog',
            titleSelector: '.modal-title',
            descriptionSelector: '.modal-container > p',
            cancelSelector: '.modal-btn.cancel'
        },
        {
            id: 'settingsModal',
            role: 'dialog',
            titleSelector: '.modal-title'
        },
        {
            id: 'contactModal',
            role: 'dialog',
            titleSelector: '.modal-title',
            descriptionSelector: '.modal-container > p'
        },
        {
            id: 'custom-modal',
            role: 'alertdialog',
            titleSelector: '#modal-message',
            cancelSelector: '#modal-cancel-btn'
        }
    ];

    const modalStates = new WeakMap();
    const openStack = [];
    const modalObservers = [];

    function isVisible(modal) {
        if (!modal || !modal.isConnected || modal.hidden) return false;
        const style = window.getComputedStyle(modal);
        return style.display !== 'none' && style.visibility !== 'hidden';
    }

    function getFocusable(modal) {
        return Array.from(modal.querySelectorAll([
            'button:not([disabled])',
            'a[href]',
            'input:not([disabled])',
            'select:not([disabled])',
            'textarea:not([disabled])',
            '[tabindex]:not([tabindex="-1"])'
        ].join(','))).filter(element => (
            element.getAttribute('aria-hidden') !== 'true'
            && element.getClientRects().length > 0
        ));
    }

    function removeFromStack(modal) {
        const index = openStack.lastIndexOf(modal);
        if (index !== -1) openStack.splice(index, 1);
    }

    function focusInitialControl(modal, state) {
        window.requestAnimationFrame(() => {
            if (!state.open || !isVisible(modal)) return;
            const focusables = getFocusable(modal);
            const preferred = modal.querySelector('[data-modal-initial-focus]');
            const target = preferred && focusables.includes(preferred)
                ? preferred
                : focusables[0] || modal;
            target.focus({ preventScroll: true });
        });
    }

    function activateModal(modal) {
        const state = modalStates.get(modal) || { open: false, returnFocus: null };
        modalStates.set(modal, state);
        modal.setAttribute('aria-hidden', 'false');

        if (state.open) return;
        state.open = true;
        state.returnFocus = document.activeElement instanceof HTMLElement && !modal.contains(document.activeElement)
            ? document.activeElement
            : null;
        removeFromStack(modal);
        openStack.push(modal);
        focusInitialControl(modal, state);
    }

    function deactivateModal(modal) {
        const state = modalStates.get(modal);
        modal.setAttribute('aria-hidden', 'true');
        removeFromStack(modal);
        if (!state || !state.open) return;

        state.open = false;
        const returnFocus = state.returnFocus;
        state.returnFocus = null;
        window.requestAnimationFrame(() => {
            const anotherModalIsOpen = openStack.some(isVisible);
            if (!anotherModalIsOpen && returnFocus?.isConnected) {
                returnFocus.focus({ preventScroll: true });
            }
        });
    }

    function syncModal(modal) {
        if (isVisible(modal)) activateModal(modal);
        else deactivateModal(modal);
    }

    function dismissModal(modal) {
        const cancel = modal.querySelector('[data-modal-cancel]');
        if (cancel && !cancel.disabled) {
            cancel.click();
            return;
        }
        modal.click();
    }

    function getTopModal() {
        for (let index = openStack.length - 1; index >= 0; index -= 1) {
            if (isVisible(openStack[index])) return openStack[index];
        }
        return null;
    }

    function handleKeydown(event) {
        const modal = getTopModal();
        if (!modal) return;

        if (event.key === 'Escape') {
            event.preventDefault();
            event.stopPropagation();
            dismissModal(modal);
            return;
        }

        if (event.key !== 'Tab') return;
        const focusables = getFocusable(modal);
        if (!focusables.length) {
            event.preventDefault();
            modal.focus({ preventScroll: true });
            return;
        }

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;
        if (event.shiftKey && (active === first || !modal.contains(active))) {
            event.preventDefault();
            last.focus({ preventScroll: true });
        } else if (!event.shiftKey && (active === last || !modal.contains(active))) {
            event.preventDefault();
            first.focus({ preventScroll: true });
        }
    }

    function ensureElementId(element, fallbackId) {
        if (!element) return '';
        if (!element.id) element.id = fallbackId;
        return element.id;
    }

    function setupModal(config) {
        const modal = document.getElementById(config.id);
        if (!modal) return;

        modal.dataset.cupidModal = 'true';
        modal.setAttribute('role', config.role);
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('tabindex', '-1');

        const title = modal.querySelector(config.titleSelector);
        const titleId = ensureElementId(title, `${config.id}-title`);
        if (titleId) modal.setAttribute('aria-labelledby', titleId);

        if (config.descriptionSelector) {
            const description = modal.querySelector(config.descriptionSelector);
            const descriptionId = ensureElementId(description, `${config.id}-description`);
            if (descriptionId && description !== title) {
                modal.setAttribute('aria-describedby', descriptionId);
            }
        }

        if (config.cancelSelector) {
            const cancel = modal.querySelector(config.cancelSelector);
            if (cancel) {
                cancel.dataset.modalCancel = 'true';
                cancel.dataset.modalInitialFocus = 'true';
            }
        }

        const observer = new MutationObserver(() => syncModal(modal));
        observer.observe(modal, {
            attributes: true,
            attributeFilter: ['class', 'style', 'hidden']
        });
        modalObservers.push(observer);
        syncModal(modal);
    }

    function cleanup() {
        document.removeEventListener('keydown', handleKeydown, true);
        modalObservers.forEach(observer => observer.disconnect());
        modalObservers.length = 0;
    }

    function initialize() {
        modalConfigs.forEach(setupModal);
        document.addEventListener('keydown', handleKeydown, true);
        window.addEventListener('pagehide', cleanup, { once: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize, { once: true });
    } else {
        initialize();
    }
})();
