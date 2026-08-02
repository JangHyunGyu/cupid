/**
 * ============================================================================
 * Cupid - 갤러리 로더
 * ============================================================================
 * 
 * gallery.html, gallery-en.html에서 사용
 * 갤러리 관련 모든 스크립트를 순서대로 로드
 * 
 * 사용법:
 *   <script src="assets/js/loaders/gallery-loader.js"></script>
 */

(function() {
    if (window.__cupidErrorReporterInstalled) return;
    var ERROR_ENDPOINT = 'https://chatbot-api.yama5993.workers.dev/error-logs';
    var p = window.location.pathname;
    var lang = p.includes('-es') ? 'es' : p.includes('-ja') ? 'ja'
             : p.includes('-fr') ? 'fr' : p.includes('-de') ? 'de'
             : p.includes('-pt') ? 'pt' : p.includes('-en') ? 'en' : 'ko';
    var APP_ID = lang === 'ko' ? 'cupid' : 'cupid-' + lang;
    var _lastError = '';
    var _errorCount = 0;
    var _session = Math.random().toString(36).substring(2, 8);

    function _hasAppStack(stack) {
        return /\/assets\/js\/|\/assets\/|gallery|modules\//.test(stack || '');
    }

    function _classifyError(type, msg, stack, src) {
        if (!msg) return 'noise';
        if (msg === 'Script error.' && !stack) return 'noise';
        if (/ResizeObserver loop/.test(msg)) return 'noise';
        if (/googletagmanager|google-analytics|gtag\/js|cloudflare|chrome-extension|moz-extension|safari-extension/.test(src || '')) return 'external';
        if (type === 'UnhandledRejection' && !_hasAppStack(stack) && /^[A-Za-z_$][\w$]{0,2}$/.test(String(msg || '').trim())) return 'external';
        return 'app';
    }

    function _postErrorPayload(payload) {
        try {
            var body = JSON.stringify(payload);
            if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
                try {
                    var beaconBody = typeof Blob !== 'undefined' ? new Blob([body], { type: 'application/json' }) : body;
                    var sent = navigator.sendBeacon(ERROR_ENDPOINT, beaconBody);
                    if (sent) return true;
                } catch (_) {}
            }
            if (typeof fetch === 'function') {
                fetch(ERROR_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: body,
                    keepalive: true
                }).catch(function() {});
                return true;
            }
        } catch (_) {}
        return false;
    }

    function _sendError(type, msg, stack, src) {
        var errClass = _classifyError(type, msg, stack, src);
        if (!msg || errClass === 'noise' || errClass === 'external') return;
        var key = msg + '|' + src;
        if (key === _lastError) { _errorCount++; if (_errorCount > 5) return; }
        else { _lastError = key; _errorCount = 1; }

        _postErrorPayload({
            appId: APP_ID,
            userId: '',
            message: ('[' + errClass + ':' + type + '] ' + msg).substring(0, 500),
            stack: (
                '[ctx] sess:' + _session + ' | path:' + window.location.pathname + ' | gallery:true | vw:' + window.innerWidth + 'x' + window.innerHeight +
                '\n[src] ' + (src || 'N/A') +
                '\n[ua] ' + navigator.userAgent.substring(0, 150) +
                '\n[time] ' + new Date().toISOString() +
                '\n[trace]\n' + (stack || 'no stack')
            ).substring(0, 2000),
            url: (src || window.location.href).substring(0, 500)
        });
    }

    window.__cupidLogRuntimeError = function(type, msg, stack, src) {
        _sendError(type || 'Error', msg || 'Unknown runtime error', stack || '', src || window.location.href);
    };

    window.addEventListener('error', function(e) {
        var src = (e.filename || '') + ':' + e.lineno + ':' + e.colno;
        var error = e.error;
        _sendError((error && error.name) || 'Error', e.message, (error && error.stack) || '', src);
    });

    window.addEventListener('unhandledrejection', function(e) {
        var reason = e.reason;
        _sendError(
            'UnhandledRejection',
            (reason && reason.message) || String(reason || 'Unhandled rejection'),
            (reason && reason.stack) || '',
            window.location.href
        );
    });
})();

window.__cupidShowGalleryLoadError = function() {
    if (document.querySelector('[data-cupid-gallery-load-error]')) return;
    var pageLang = String(document.documentElement.lang || 'ko').toLowerCase().split('-')[0];
    var copies = {
        ko: {
            title: '갤러리를 불러오지 못했습니다',
            message: '인터넷 연결을 확인한 뒤 페이지를 다시 불러와 주세요.',
            retry: '다시 불러오기'
        },
        en: {
            title: 'Gallery failed to load',
            message: 'Check your connection and reload the page.',
            retry: 'Reload'
        },
        es: {
            title: 'No se pudo cargar la galería',
            message: 'Revisa tu conexión a internet y vuelve a cargar la página.',
            retry: 'Volver a cargar'
        },
        ja: {
            title: 'ギャラリーを読み込めませんでした',
            message: '通信環境を確認して、ページを再読み込みしてください。',
            retry: '再読み込み'
        },
        fr: {
            title: 'Impossible de charger la galerie',
            message: 'Vérifiez votre connexion internet, puis rechargez la page.',
            retry: 'Recharger'
        },
        de: {
            title: 'Die Galerie konnte nicht geladen werden',
            message: 'Überprüfe deine Internetverbindung und lade die Seite neu.',
            retry: 'Neu laden'
        },
        pt: {
            title: 'Não foi possível carregar a galeria',
            message: 'Verifique sua conexão com a internet e recarregue a página.',
            retry: 'Recarregar'
        }
    };
    var copy = copies[pageLang] || copies.en;
    var overlay = document.createElement('div');
    overlay.id = 'cupid-gallery-load-error';
    overlay.setAttribute('data-cupid-gallery-load-error', 'true');
    overlay.setAttribute('role', 'alert');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:100000;background:#09070d;color:#fff;display:flex;align-items:center;justify-content:center;padding:24px;font-family:sans-serif;text-align:center;';

    var panel = document.createElement('div');
    var title = document.createElement('h1');
    title.textContent = copy.title;
    title.style.cssText = 'font-size:1.35rem;margin:0 0 12px;';
    var message = document.createElement('p');
    message.textContent = copy.message;
    message.style.cssText = 'margin:0 0 20px;color:#ddd;line-height:1.6;';
    var retry = document.createElement('button');
    retry.type = 'button';
    retry.textContent = copy.retry;
    retry.style.cssText = 'border:1px solid #ff8fab;border-radius:999px;background:#2a1824;color:#fff;padding:10px 20px;font:inherit;cursor:pointer;';
    function reloadGalleryPage() { window.location.reload(); }
    retry.addEventListener('click', reloadGalleryPage);

    panel.appendChild(title);
    panel.appendChild(message);
    panel.appendChild(retry);
    overlay.appendChild(panel);
    document.body.appendChild(overlay);
};

(function () {
    // 로더 설정 로드 (동기)
    document.write('<script src="assets/js/loaders/config.js?v=2.9.114" onerror="window.__cupidShowGalleryLoadError && window.__cupidShowGalleryLoadError()"><\/script>');
})();

// config.js 로드 후 실행
document.addEventListener('DOMContentLoaded', function () {
    // 이미 document.write로 로드됨
}, false);

// 갤러리 스크립트 로드 (document.write는 동기적)
(function () {
    const basePath = 'assets/js/';
    const version = '2.9.114';

    const scripts = [
        // 0. 모듈 설정 (ASSET_VERSION 등)
        'modules/config.js',
        // 갤러리 프리토킹·음악실 효과음
        'sound.js',
        // 1. 데이터 및 진행도
        'gallery-data.js',
        'gallery-progress.js',
        // 한국어 대화 예시와 공통 프롬프트 규칙
        'freetalk-core.js',
        'example-dialogues-ko.js',
        'prompts.js',

        // 2. 서브 렌더러 (GalleryUI에서 사용)
        'gallery-ui-character.js',
        'gallery-ui-cg.js',
        'gallery-ui-music.js',

        // 3. UI 코어 (서브 렌더러 의존)
        'gallery-ui-core.js',

        // 4. 갤러리 프리토킹 (UI 코어 의존)
        'gallery-freetalk.js',

        // 5. 메인 컨트롤러 (UI 의존)
        'gallery.js'
    ];

    scripts.forEach(function (src) {
        document.write('<script src="' + basePath + src + '?v=' + version + '" onerror="window.__cupidShowGalleryLoadError && window.__cupidShowGalleryLoadError()"><\/script>');
    });
})();
