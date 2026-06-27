/**
 * ============================================================================
 * Cupid - 게임 로더 (Game Loader)
 * ============================================================================
 * 
 * 설명:
 *   게임에 필요한 모든 JavaScript 파일을 순서대로 동적 로드하는 스크립트.
 *   HTML 파일에서 여러 개의 script 태그를 작성할 필요 없이,
 *   이 파일 하나만 포함하면 모든 의존성이 자동으로 로드됩니다.
 * 
 * 사용되는 페이지:
 *   - index.html     (한국어 메인 페이지)
 *   - index-en.html  (영문 메인 페이지)
 *   - index-es.html  (스페인어 메인 페이지)
 *   - index-ja.html  (일본어 메인 페이지)
 *   - game.html      (한국어 게임 페이지)
 *   - game-en.html   (영문 게임 페이지)
 *   - game-es.html   (스페인어 게임 페이지)
 *   - game-ja.html   (일본어 게임 페이지)
 * 
 * 사용법:
 *   HTML의 body 하단에 아래 한 줄만 추가:
 *   <script src="assets/js/loaders/game-loader.js"></script>
 * 
 * 로드 순서:
 *   1. 공통 스크립트: ga.js (Google Analytics), sound.js (사운드 관리)
 *   2. 시나리오: 현재 언어에 맞는 시나리오 파일들 (ko_* 또는 en_*)
 *   3. 게임 엔진: prompts.js, gallery 모듈들, modules/*.js
 * 
 * 버전 관리:
 *   version 변수만 수정하면 모든 스크립트에 ?v= 쿼리가 자동 적용되어
 *   브라우저 캐시 문제를 해결할 수 있습니다.
 * 
 * ============================================================================
 */

(function () {
    // =========================================================================
    // 설정 (Configuration)
    // =========================================================================

    /**
     * basePath: 모든 스크립트 파일의 기본 경로
     * HTML 파일 위치 기준 상대 경로
     */
    const basePath = 'assets/js/';

    /**
     * version: 캐시 버스팅용 버전 번호
     * 
     * 스크립트 수정 후 배포 시 이 값을 증가시키면
     * 브라우저가 캐시된 파일 대신 새 파일을 다운로드합니다.
     * 
     * 예: 2.2.0 → 2.2.1 또는 2.3.1
     */
        const version = '2.9.52';

    // =========================================================================
    // 언어 감지 (Language Detection)
    // =========================================================================

    /**
     * 현재 페이지 URL을 분석하여 언어를 감지합니다.
     *
     * 판단 기준:
     *   - URL에 '-en'이 포함되면 영문 (예: index-en.html, game-en.html)
     *   - URL에 '-es'이 포함되면 스페인어 (예: index-es.html, game-es.html)
     *   - URL에 '-ja'이 포함되면 일본어 (예: index-ja.html, game-ja.html)
     *   - 그 외에는 한국어 (예: index.html, game.html)
     *
     * lang: 'en', 'es', 'ja', 또는 'ko' 문자열 (다른 곳에서 참조용)
     */
    const pathname = window.location.pathname;
    const lang = pathname.includes('-es') ? 'es'
               : pathname.includes('-ja') ? 'ja'
               : pathname.includes('-fr') ? 'fr'
               : pathname.includes('-de') ? 'de'
               : pathname.includes('-pt') ? 'pt'
               : pathname.includes('-en') ? 'en'
               : 'ko';

    // =========================================================================
    // 공통 스크립트 (Common Scripts)
    // =========================================================================

    /**
     * 모든 페이지에서 공통으로 필요한 스크립트
     * 
     * ga.js    : Google Analytics 초기화 및 이벤트 추적
     * sound.js : 배경음악(BGM) 및 효과음(SE) 재생 관리
     */
    const commonScripts = [
        'ga.js',
        'sound.js'
    ];

    // =========================================================================
    // 시나리오 스크립트 목록 (통합 버전 - ko/en 합본)
    // =========================================================================

    /**
     * 통합 시나리오 파일 목록
     *
     * 파일명 규칙: dayX_Y_time.js  (언어 접두사 없음)
     *   - 각 파일 내 씬 노드에 _i18n: { ko: {...}, en: {...} } 블록 포함
     *   - 게임 엔진이 window.GAME_LANG 값을 보고 런타임에 텍스트 주입
     *
     * [!] 새 시나리오 추가 시:
     *     1. 이 배열에 파일 경로만 추가하면 됨 (언어별 별도 파일 불필요)
     *     2. 파일 내 각 씬의 _i18n.ko / _i18n.en 에 텍스트 작성
     */
    const scenarioScripts = [
        // -----------------------------------------------------------------
        // Day 1 (1일차) - 전학 첫날
        // -----------------------------------------------------------------
        'scenario/day1_1_morning.js',
        'scenario/day1_2_lunch.js',
        'scenario/day1_3_afterschool.js',
        'scenario/day1_4_night.js',

        // -----------------------------------------------------------------
        // Day 2 (2일차) - 적응기
        // -----------------------------------------------------------------
        'scenario/day2_1_morning.js',
        'scenario/day2_2_lunch.js',
        'scenario/day2_3_afterschool.js',
        'scenario/day2_4_night.js',

        // -----------------------------------------------------------------
        // Day 3 (3일차) - 주말 약속
        // -----------------------------------------------------------------
        'scenario/day3_1_morning.js',
        'scenario/day3_2_lunch.js',
        'scenario/day3_3_afterschool.js',
        'scenario/day3_4_night.js',

        // -----------------------------------------------------------------
        // Day 4 (4일차) - 토요일 데이트
        // -----------------------------------------------------------------
        'scenario/day4_1_morning.js',
        'scenario/day4_2_lunch.js',
        'scenario/day4_3_afterschool.js',
        'scenario/day4_4_night.js',

        // -----------------------------------------------------------------
        // Day 5 (5일차) - 일요일 에필로그
        // -----------------------------------------------------------------
        'scenario/day5_1_morning.js',
        'scenario/day5_2_lunch.js',
        'scenario/day5_3_afterschool.js',
        'scenario/day5_4_night.js',
    ];

    /**
     * 현재 언어를 전역으로 노출 → SceneRenderer에서 _i18n 텍스트 선택에 사용
     * 값: 'ko' (한국어) 또는 'en' (영어)
     */
    window.GAME_LANG = lang;

    // =========================================================================
    // 게임 엔진 스크립트 (Game Engine Scripts)
    // =========================================================================

    /**
     * 게임 실행에 필요한 핵심 엔진 스크립트
     *
     * 로드 순서가 중요합니다!
     * 의존성이 있는 파일은 의존하는 파일보다 먼저 로드되어야 합니다.
     *
     * 1. prompts.js              : AI 캐릭터 프롬프트 정의
     * 2. gallery-*.js            : 갤러리 페이지 모듈들
     * 3. modules/config.js       : 전역 상수 + 유틸 함수
     * 4. modules/KoreanProcessor : 한국어 조사 처리
     * 5. modules/StateManager    : 게임 상태(이름, 호감도, 플래그)
     * 6. modules/SaveManager     : localStorage 저장/불러오기
     * 7. modules/GalleryManager  : 갤러리 해금 추적
     * 8. modules/UIManager       : DOM/UI 제어
     * 9. modules/DialogueSystem  : 대사 타이핑 효과
     * 10. modules/SceneRenderer  : 씬 렌더링 (배경, 캐릭터, 분기)
     * 11. modules/FreeTalkSystem : AI 자유대화
     * 12. modules/GameEngine     : 메인 오케스트레이터
     * 13. modules/index.js       : 초기화 + 모듈 검증 (항상 마지막)
     */
    const engineScripts = [
        // 다국어 텍스트 로더
        'loaders/i18n-loader.js',

        // AI 캐릭터 프롬프트
        'prompts.js',

        // 갤러리 모듈 (게임에서 진행도 저장에도 사용됨)
        'gallery-data.js',           // 갤러리 데이터 정의
        'gallery-progress.js',       // 진행도 관리 (localStorage)
        'gallery-ui-core.js',        // UI 코어: 팝업, 기본 기능
        'gallery-ui-character.js',   // UI: 캐릭터 도감
        'gallery-ui-cg.js',          // UI: CG 갤러리
        'gallery-ui-music.js',       // UI: 음악실
        'gallery.js',                // 갤러리 초기화 및 이벤트

        // 게임 엔진 모듈 (의존성 순서대로 로드)
        'modules/config.js',         // 전역 상수 + getAssetUrl()
        'modules/KoreanProcessor.js',// 한국어 조사 자동 처리
        'modules/StateManager.js',   // 게임 상태 관리
        'modules/SaveManager.js',    // 저장/불러오기
        'modules/GalleryManager.js', // 갤러리 해금 추적
        'modules/UIManager.js',      // UI/DOM 제어
        'modules/DialogueSystem.js', // 대사 타이핑 효과
        'modules/SceneRenderer.js',  // 씬 렌더링
        'modules/FreeTalkSystem.js', // AI 자유대화
        'modules/GameEngine.js',     // 메인 오케스트레이터
        'modules/index.js'           // 초기화 + 모듈 검증 (항상 마지막)
    ];

    // =========================================================================
    // 스크립트 로드 함수 (Script Loading Function)
    // =========================================================================

    /**
     * 동적 스크립트 로딩 (Dynamic Script Loading)
     *
     * document.write() 대신 createElement('script') + async=false 사용.
     *   - async=false: 브라우저가 스크립트를 병렬 다운로드하되, 삽입 순서대로 실행
     *   - document.write()와 달리 느린 모바일 연결에서 Chrome 차단(Intervention) 없음
     *   - 모든 스크립트 로드 완료 시 'gameScriptsLoaded' 이벤트 발생
     *
     * 주의: 스크립트가 비동기 로드되므로 DOMContentLoaded 이전에 실행되지 않을 수 있음.
     *       게임 스크립트에 의존하는 코드는 window.gameScriptsLoaded 플래그 또는
     *       'gameScriptsLoaded' 이벤트를 사용해야 합니다.
     */

    // =========================================================================
    // 스크립트 로드 실행 (Execute Script Loading)
    // =========================================================================

    /**
     * 모든 스크립트를 순서대로 로드
     *
     * 실행 순서:
     *   1. commonScripts   - 공통 스크립트 (ga.js, sound.js)
     *   2. scenarioScripts - 현재 언어의 시나리오 파일들
     *   3. engineScripts   - 게임 엔진 스크립트들
     *
     * 하나씩 로드해 의존성 순서와 필수 모듈 등록을 보장합니다.
     */
    var allScripts = [].concat(commonScripts, scenarioScripts, engineScripts);
    var requiredGlobals = [
        'StateManager', 'SaveManager', 'GalleryManager', 'KoreanProcessor',
        'UIManager', 'DialogueSystem', 'FreeTalkSystem', 'SceneRenderer', 'GameEngine'
    ];

    function createEvent(name, detail) {
        if (typeof CustomEvent === 'function') {
            return new CustomEvent(name, { detail: detail });
        }
        var event = document.createEvent('CustomEvent');
        event.initCustomEvent(name, false, false, detail);
        return event;
    }

    function loadScript(src) {
        return new Promise(function(resolve, reject) {
            var script = document.createElement('script');
            script.async = false;
            script.onload = function() {
                resolve(src);
            };
            script.onerror = function() {
                reject(new Error('[game-loader] Failed to load script: ' + src));
            };
            script.src = basePath + src + '?v=' + version;
            document.head.appendChild(script);
        });
    }

    function verifyRequiredGlobals() {
        var missing = requiredGlobals.filter(function(name) {
            return !window[name];
        });
        if (missing.length > 0) {
            throw new Error('[game-loader] Required module not registered: ' + missing.join(', '));
        }
    }

    async function loadAllScripts() {
        for (var i = 0; i < allScripts.length; i++) {
            await loadScript(allScripts[i]);
        }
        verifyRequiredGlobals();
        window.gameScriptsLoaded = true;
        window.dispatchEvent(new Event('gameScriptsLoaded'));
    }

    loadAllScripts().catch(function(error) {
        window.gameScriptsLoadError = error;
        console.error(error);
        window.dispatchEvent(createEvent('gameScriptsLoadError', { error: error }));
    });

})();
// 즉시 실행 함수(IIFE)로 감싸서 전역 변수 오염 방지
// async=false 동적 스크립트는 삽입 순서대로 실행되며, Chrome Intervention 대상 아님

// ============================================================================
// 【글로벌 에러 핸들러】 프론트엔드 에러를 D1에 기록
// ============================================================================

(function() {
    var ERROR_ENDPOINT = 'https://chatbot-api.yama5993.workers.dev/error-logs';
    var p = window.location.pathname;
    var lang = p.includes('-es') ? 'es' : p.includes('-ja') ? 'ja'
             : p.includes('-fr') ? 'fr' : p.includes('-de') ? 'de'
             : p.includes('-pt') ? 'pt' : p.includes('-en') ? 'en' : 'ko';
    var APP_ID = lang === 'ko' ? 'cupid' : 'cupid-' + lang;
    var _lastError = '';
    var _errorCount = 0;
    var _session = Math.random().toString(36).substring(2, 8);

    function _getContext() {
        try {
            var parts = ['sess:' + _session];
            var p = window.location.pathname;
            parts.push('path:' + p);
            parts.push('online:' + navigator.onLine);
            if (window.gameEngine) {
                var g = window.gameEngine;
                if (g.stateManager) {
                    if (g.stateManager.currentDay) parts.push('day:' + g.stateManager.currentDay);
                }
                if (g.sceneRenderer) {
                    if (g.sceneRenderer.currentSceneId) parts.push('scene:' + g.sceneRenderer.currentSceneId);
                }
            }
            parts.push('vw:' + window.innerWidth + 'x' + window.innerHeight);
            return parts.join(' | ');
        } catch (_) { return 'ctx-error'; }
    }

    function _hasAppStack(stack) {
        return /\/assets\/js\/|\/assets\/|modules\/|scenario\/|index-(ko|en|es|ja|fr|de|pt)|game-(ko|en|es|ja|fr|de|pt)|index\.html|game\.html/.test(stack || '');
    }

    function _isOpaqueExternalRejection(type, msg, stack) {
        if (type !== 'UnhandledRejection') return false;
        if (_hasAppStack(stack)) return false;

        var text = String(msg || '').trim();
        // Google App / in-app browser injected scripts sometimes reject minified
        // sentinel values such as "Yd" with stacks like "@" or "$i@".
        if (/^[A-Za-z_$][\w$]{0,2}$/.test(text)) return true;
        if (/^(\s*@\s*){1,4}$/.test(stack || '')) return true;
        if (/^\s*(?:[A-Za-z_$][\w$]*@?\s*){1,4}$/.test(stack || '') && text.length <= 12) return true;
        return false;
    }

    function _classifyError(type, msg, stack, src) {
        if (!msg) return 'noise';
        if (msg === 'Script error.' && !stack) return 'noise';
        if (_isOpaqueExternalRejection(type, msg, stack)) return 'external';
        if (/Can't find variable: (gmo|__gCrWeb|ytcfg|__)/.test(msg)) return 'noise';
        if (/ResizeObserver loop/.test(msg)) return 'noise';
        if (/window\.ethereum|window\.__firefox__/.test(msg)) return 'noise';
        if (/standardSelectors/.test(msg)) return 'noise';
        // External scripts
        if (src && /googletagmanager|google-analytics|gtag\/js|cloudflare|chrome-extension|moz-extension|safari-extension/.test(src)) return 'external';
        if (src && /^undefined:/.test(src) && !_hasAppStack(stack)) return 'external';
        if (/Loading chunk|dynamically imported module/.test(msg)) return 'network';
        return 'app';
    }

    function _sendError(type, msg, stack, src) {
        var errClass = _classifyError(type, msg, stack, src);
        if (!msg || errClass === 'noise' || errClass === 'external') return;
        var key = msg + '|' + src;
        if (key === _lastError) { _errorCount++; if (_errorCount > 5) return; }
        else { _lastError = key; _errorCount = 1; }

        var ctx = _getContext();
        var payload = {
            appId: APP_ID, userId: '',
            message: ('[' + errClass + ':' + type + '] ' + (msg || '')).substring(0, 500),
            stack: (
                '[ctx] ' + ctx +
                '\n[src] ' + (src || 'N/A') +
                '\n[ua] ' + navigator.userAgent.substring(0, 150) +
                '\n[ref] ' + (document.referrer || 'direct') +
                '\n[time] ' + new Date().toISOString() +
                '\n[trace]\n' + (stack || 'no stack')
            ).substring(0, 2000),
            url: (src || window.location.href).substring(0, 500)
        };

        try { navigator.sendBeacon(ERROR_ENDPOINT, JSON.stringify(payload)); } catch (_) {}
    }

    window.addEventListener('error', function(e) {
        var src = (e.filename || '') + ':' + e.lineno + ':' + e.colno;
        _sendError(e.error?.name || 'Error', e.message, e.error?.stack || '', src);
    });

    window.addEventListener('unhandledrejection', function(e) {
        var reason = e.reason;
        var msg = reason?.message || String(reason || 'Unhandled rejection');
        var stack = reason?.stack || '';
        _sendError('UnhandledRejection', msg, stack, window.location.href);
    });
})();
