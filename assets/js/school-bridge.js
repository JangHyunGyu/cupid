/* Cupid title / Harem school handoff. Keep both copies identical. */
(function (root) {
    'use strict';
    const LANGUAGES = ['ko', 'en', 'ja', 'es', 'fr', 'de', 'pt', 'zh'];
    const RETURN_KEY = 'harem:cupidReturnLanguage';
    const COPY = {
        ko: ['학교 둘러보기', '공개방', '교문 · 나의 이야기로', 'Cupid에서 저장한 이야기 이어가기', '진행 기록을 저장하지 못했어요. 저장 공간을 확인한 뒤 다시 눌러 주세요.', '이야기를 열지 못했어요. 계속하기를 다시 눌러 주세요.'],
        en: ['Visit the school', 'Public room', 'School gate · My story', 'Continue your saved story in Cupid', 'Your progress could not be saved. Check your storage space and try again.', 'Your story could not be opened. Try Continue again.'],
        ja: ['学校を訪ねる', '公開ルーム', '校門 · 自分の物語へ', 'Cupidで保存した物語の続きを遊ぶ', '進行を保存できませんでした。空き容量を確認して、もう一度お試しください。', '物語を開けませんでした。「続きから」をもう一度押してください。'],
        es: ['Visitar la escuela', 'Sala pública', 'Puerta · Mi historia', 'Continuar tu historia guardada en Cupid', 'No se pudo guardar tu progreso. Comprueba el espacio disponible e inténtalo de nuevo.', 'No se pudo abrir tu historia. Pulsa Continuar otra vez.'],
        fr: ['Visiter l’école', 'Salon public', 'Portail · Mon histoire', 'Reprendre ton histoire sauvegardée dans Cupid', 'Ta progression n’a pas pu être sauvegardée. Vérifie l’espace disponible et réessaie.', 'Ton histoire n’a pas pu être ouverte. Appuie de nouveau sur Continuer.'],
        de: ['Die Schule besuchen', 'Öffentlicher Raum', 'Schultor · Meine Geschichte', 'Deine gespeicherte Geschichte in Cupid fortsetzen', 'Dein Fortschritt konnte nicht gespeichert werden. Prüfe den freien Speicherplatz und versuche es erneut.', 'Deine Geschichte konnte nicht geöffnet werden. Versuche es erneut mit Fortsetzen.'],
        pt: ['Visitar a escola', 'Sala pública', 'Portão · Minha história', 'Continuar sua história salva em Cupid', 'Não foi possível salvar seu progresso. Confira o espaço disponível e tente novamente.', 'Não foi possível abrir sua história. Toque em Continuar novamente.'],
        zh: ['去学校逛逛', '公开房间', '校门 · 我的故事', '继续在Cupid中保存的故事', '未能保存进度。请检查存储空间后重试。', '未能打开故事。请再次点击继续。']
    };
    const language = value => LANGUAGES.includes(value) ? value : 'en';
    const copy = lang => COPY[language(lang)];
    const cupidUrl = lang => {
        lang = language(lang);
        return `https://cupid.archerlab.dev/${lang === 'ko' ? '' : `index-${lang}`}?from=school&lang=${lang}`;
    };
    const schoolUrl = lang => {
        lang = language(lang);
        const schoolLang = ['ko', 'en', 'ja'].includes(lang) ? lang : 'en';
        return `https://harem.archerlab.dev/${schoolLang === 'ko' ? '' : `index-${schoolLang}`}?school=cupid&cupidLang=${lang}&lang=${schoolLang}`;
    };
    function consume(keys) {
        const url = new URL(root.location.href);
        keys.forEach(key => url.searchParams.delete(key));
        root.history.replaceState(root.history.state, '', url.pathname + url.search + url.hash);
    }
    function takeSchoolArrival() {
        const url = new URL(root.location.href);
        if (url.searchParams.get('school') !== 'cupid') return false;
        const lang = language(url.searchParams.get('cupidLang'));
        bridge.returnLanguage = lang;
        try { root.sessionStorage.setItem(RETURN_KEY, lang); } catch (_) { /* In-memory fallback for blocked storage. */ }
        consume(['school', 'cupidLang']);
        return true;
    }
    function returnLanguage(fallback) {
        if (bridge.returnLanguage) return language(bridge.returnLanguage);
        try {
            const saved = root.sessionStorage.getItem(RETURN_KEY);
            if (LANGUAGES.includes(saved)) return saved;
        } catch (_) { /* Use the current school language. */ }
        return language(fallback);
    }
    function savedStory() {
        try {
            const raw = root.CupidStorage?.getItem('cupid_save');
            const save = JSON.parse(raw || 'null');
            return typeof save?.currentSceneId === 'string' && save.currentSceneId && save.gameState ? save : null;
        } catch (_) { return null; }
    }
    function hasDurableSave() {
        try {
            const value = root.CupidStorage?.getItem('cupid_save');
            return !value || root.localStorage.getItem('cupid_save') === value;
        } catch (_) { return false; }
    }
    async function initCupid() {
        const document = root.document;
        const landing = document.getElementById('landing-container');
        const links = landing?.querySelector('.title-actions');
        if (!links || document.getElementById('school-visit-link')) return;
        const lang = language(document.documentElement.lang.toLowerCase().split('-')[0]);
        const text = copy(lang);
        const link = document.createElement('a');
        link.id = 'school-visit-link';
        link.className = 'contact-link';
        link.href = schoolUrl(lang);
        link.textContent = `${text[0]} · ${text[1]}`;
        link.style.cssText = 'display:inline-flex;align-items:center;justify-content:center;text-decoration:none;max-width:100%;letter-spacing:0;padding:8px 18px;';
        const row = document.createElement('div');
        row.id = 'school-visit-row';
        row.style.cssText = 'margin:10px auto 0;text-align:center;';
        row.appendChild(link);
        const showError = message => {
            let status = document.getElementById('school-bridge-status');
            if (!status) {
                status = document.createElement('p');
                status.id = 'school-bridge-status';
                status.setAttribute('role', 'alert');
                row.after(status);
            }
            status.textContent = message;
        };
        link.addEventListener('click', event => {
            if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
            if (!hasDurableSave()) {
                event.preventDefault();
                showError(text[4]);
            }
        });
        links.after(row);
        if (new URL(root.location.href).searchParams.get('from') !== 'school') return;
        consume(['from']);
        if (!savedStory() || typeof root.continueGame !== 'function') {
            document.getElementById('start-btn')?.focus();
            return;
        }
        try {
            await root.continueGame();
        } catch (_) {
            landing.style.display = '';
            const game = document.getElementById('game-container');
            if (game) game.style.display = 'none';
            const switcher = document.querySelector('.lang-switch');
            if (switcher) switcher.style.display = '';
            showError(text[5]);
            document.getElementById('continue-btn')?.focus();
        }
    }
    const bridge = { language, copy, cupidUrl, schoolUrl, takeSchoolArrival, getReturnLanguage: returnLanguage, savedStory, hasDurableSave, initCupid };
    root.SchoolBridge = bridge;
    if (root.document?.addEventListener) {
        if (root.document.readyState === 'loading') root.document.addEventListener('DOMContentLoaded', initCupid, { once: true });
        else void initCupid();
    }
})(typeof window !== 'undefined' ? window : globalThis);
