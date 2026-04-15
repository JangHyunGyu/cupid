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

    // 개별 파일 fetch + 재시도 (네트워크 순간 실패로 name 필드가 비어있는 씬 방지)
    async function fetchJsonWithRetry(url, retries = 3) {
        let lastErr;
        for (let attempt = 0; attempt < retries; attempt++) {
            try {
                const res = await fetch(url, { cache: 'no-store' });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return await res.json();
            } catch (e) {
                lastErr = e;
                // 지수 백오프: 200ms, 400ms, 800ms
                if (attempt < retries - 1) {
                    await new Promise(r => setTimeout(r, 200 * Math.pow(2, attempt)));
                }
            }
        }
        throw lastErr;
    }

    for (const locale of locales) {
        const basePath = 'assets/js/i18n/' + locale;

        for (let day of days) {
            for (let i = 0; i < slots.length; i++) {
                const slot = slots[i];
                const file = `day${day}_${i+1}_${slot}.json`;

                const promise = fetchJsonWithRetry(`${basePath}/${file}`)
                    .then(data => {
                        Object.assign(localeData[locale], data);
                    })
                    .catch(e => {
                        // 3회 재시도 후에도 실패 → 에러를 상위로 전파 (초기화가 실패하면
                        // 유저가 새로고침하도록 유도하는 것이, 빈 i18n 상태로 진행하는 것보다 안전)
                        console.error('[i18n-loader] Failed to load after retries:', `${locale}/${file}`, e);
                        throw e;
                    });

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
    // 랜딩 페이지(index-*)에서는 initGame이 호출되기 전까지 _i18nReady를 await하는 곳이 없어
    // fetch 실패 시 UnhandledRejection이 발생함. 핸들러를 붙여 차단하되,
    // initGame 래퍼는 여전히 원본 프로미스를 await하므로 에러를 감지할 수 있음.
    window._i18nReady.catch(() => {});

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
