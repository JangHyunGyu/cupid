/**
 * i18n-loader.js
 * Fetches all extracted JSON translation strings and mounts them onto window.I18N_DATA
 */
(async function() {
    window.I18N_DATA = {};
    const lang = window.GAME_LANG || 'ko';
    const locales = lang === 'ko' ? ['ko'] : ['ko', lang];
    const localeData = {};
    for (const locale of locales) localeData[locale] = {};
    
    // We have 20 scenario files. We could hardcode them or use a list.
    // Given Cupid's 5 days x 4 slots, they are:
    const slots = ['morning', 'lunch', 'afterschool', 'night'];
    const days = [1, 2, 3, 4, 5];
    const fetchPromises = [];

    for (const locale of locales) {
        const basePath = 'assets/js/i18n/' + locale;

        for (let day of days) {
            for (let i = 0; i < slots.length; i++) {
                const slot = slots[i];
                const file = `day${day}_${i+1}_${slot}.json`;
                
                const promise = fetch(`${basePath}/${file}`)
                    .then(res => {
                        if (res.ok) return res.json();
                        return {};
                    })
                    .then(data => {
                        Object.assign(localeData[locale], data);
                    })
                    .catch(e => console.error('Failed to load', `${locale}/${file}`, e));
                
                fetchPromises.push(promise);
            }
        }
    }
    
    // Load common strings or prompts if they exist (for future)
    
    // We must await these fetches before GameEngine starts.
    // However, this script is loaded synchronously via document.write, while fetch is async.
    // Store the i18n ready promise globally so that initGame/initGameFromSave can await it.
    // This avoids the race condition where window.initGame is not yet defined when this script runs.
    window._i18nReady = Promise.all(fetchPromises).then(() => {
        window.I18N_DATA = {};
        Object.assign(window.I18N_DATA, localeData.ko || {});
        if (lang !== 'ko') {
            Object.assign(window.I18N_DATA, localeData[lang] || {});
        }
    });

    // Patch initGame/initGameFromSave after all scripts have loaded (deferred).
    // By the time DOMContentLoaded fires, index.js has already defined window.initGame.
    document.addEventListener('DOMContentLoaded', function() {
        const originalInitGame = window.initGame;
        if (typeof originalInitGame === 'function') {
            window.initGame = async function(...args) {
                await window._i18nReady;
                await originalInitGame(...args);
            };
        }

        const originalInitGameFromSave = window.initGameFromSave;
        if (typeof originalInitGameFromSave === 'function') {
            window.initGameFromSave = async function(...args) {
                await window._i18nReady;
                await originalInitGameFromSave(...args);
            };
        }
    });
})();
