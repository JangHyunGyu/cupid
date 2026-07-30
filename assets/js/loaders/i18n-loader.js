/**
 * i18n-loader.js
 * Fetches all extracted JSON translation strings and mounts them onto window.I18N_DATA
 */
(async function() {
    window.I18N_DATA = {};
    const lang = window.GAME_LANG || 'ko';
    // 폴백 언어는 페이지 언어에 따라 분기:
    //   ko 페이지 → ko만 로드
    //   en 페이지 → en만 로드
    //   그 외(es/ja/fr/de/pt) → en을 베이스로 로드 후 해당 언어로 덮어쓰기
    // (이전엔 ko를 베이스로 썼으나, 대상 언어에 키가 누락되면 한국어가 유출되는 문제가 있어 en으로 교체)
    let locales;
    if (lang === 'ko') locales = ['ko'];
    else if (lang === 'en') locales = ['en'];
    else locales = ['en', lang];
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

                // Promise.allSettled로 수집하므로 개별 rejection은 상위로 전파되지 않음
                // (bingbot 등 크롤러가 Cloudflare에 차단당해 403 받을 때 unhandled rejection 발생하던 문제 방지)
                const promise = fetchJsonWithRetry(`${basePath}/${file}`)
                    .then(data => {
                        Object.assign(localeData[locale], data);
                        return { locale, file, ok: true };
                    })
                    .catch(error => {
                        error.cupidI18nLocale = locale;
                        error.cupidI18nFile = file;
                        throw error;
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
    window._i18nReady = Promise.allSettled(fetchPromises).then(results => {
        const failures = results.filter(r => r.status === 'rejected');
        const targetSuccessCount = results.filter(r => (
            r.status === 'fulfilled' && r.value && r.value.locale === lang
        )).length;
        if (failures.length > 0) {
            failures.forEach(f => console.error('[i18n-loader] Failed after retries:', f.reason));
            if (typeof window.__cupidLogRuntimeError === 'function') {
                window.__cupidLogRuntimeError(
                    'I18nLoadFailure',
                    `[i18n-loader] ${failures.length} translation file(s) failed for lang=${lang}`,
                    failures.map(f => (f.reason && f.reason.stack) || (f.reason && f.reason.message) || String(f.reason)).join('\n'),
                    'i18n-loader'
                );
            }
            // 베이스 언어가 통째로 비면 초기화 실패로 간주 (빈 i18n 상태 방지)
            const baseLocale = lang === 'ko' ? 'ko' : 'en';
            if (Object.keys(localeData[baseLocale] || {}).length === 0) {
                throw new Error(`i18n base locale '${baseLocale}' empty after ${failures.length} failures`);
            }
        }
        // 대상 언어 파일 하나라도 빠지면 영어 폴백을 섞어 화면에 내보내지 않는다.
        // 서비스 워커 캐시까지 실패한 상태이므로, 호출부에서 현지어 재시도 안내를 표시한다.
        if (targetSuccessCount !== days.length * slots.length) {
            const missingTargetFiles = failures
                .map(f => f.reason)
                .filter(reason => reason && reason.cupidI18nLocale === lang)
                .map(reason => reason.cupidI18nFile)
                .join(', ');
            throw new Error(
                `i18n target locale '${lang}' incomplete: ${targetSuccessCount}/${days.length * slots.length}`
                + (missingTargetFiles ? `; missing=${missingTargetFiles}` : '')
            );
        }
        window.I18N_DATA = {};
        // 베이스 언어 먼저 적용: ko → ko, en → en, 그 외 → en (한국어 유출 방지)
        const baseLocale = lang === 'ko' ? 'ko' : 'en';
        Object.assign(window.I18N_DATA, localeData[baseLocale] || {});
        // 대상 언어가 베이스와 다르면 덮어쓰기
        if (lang !== baseLocale) {
            Object.assign(window.I18N_DATA, localeData[lang] || {});
        }
    });
    // 랜딩 페이지(index-*)에서는 initGame이 호출되기 전까지 _i18nReady를 await하는 곳이 없어
    // fetch 실패 시 UnhandledRejection이 발생함. 핸들러를 붙여 차단하되,
    // initGame 래퍼는 여전히 원본 프로미스를 await하므로 에러를 감지할 수 있음.
    window._i18nReady.catch(error => {
        if (typeof window.__cupidLogRuntimeError === 'function') {
            window.__cupidLogRuntimeError(
                'I18nReadyError',
                (error && error.message) || String(error || 'i18n ready failed'),
                (error && error.stack) || '',
                'i18n-loader'
            );
        }
    });

})();
