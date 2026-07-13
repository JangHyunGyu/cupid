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
        _sendError(e.error?.name || 'Error', e.message, e.error?.stack || '', src);
    });

    window.addEventListener('unhandledrejection', function(e) {
        var reason = e.reason;
        _sendError('UnhandledRejection', reason?.message || String(reason || 'Unhandled rejection'), reason?.stack || '', window.location.href);
    });
})();

(function () {
    // 로더 설정 로드 (동기)
    document.write('<script src="assets/js/loaders/config.js?v=2.9.79"><\/script>');
})();

// config.js 로드 후 실행
document.addEventListener('DOMContentLoaded', function () {
    // 이미 document.write로 로드됨
}, false);

// 갤러리 스크립트 로드 (document.write는 동기적)
(function () {
    const basePath = 'assets/js/';
    const version = '2.9.79';

    const scripts = [
        // 0. 모듈 설정 (ASSET_VERSION 등)
        'modules/config.js',
        // 1. 데이터 및 진행도 (의존성 없음)
        'gallery-data.js',
        'gallery-progress.js',
        // 한국어 대화 예시와 공통 프롬프트 규칙
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
        document.write('<script src="' + basePath + src + '?v=' + version + '"><\/script>');
    });
})();
