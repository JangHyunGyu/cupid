// BEGIN GENERATED CUPID ERROR CLASSIFIER
(function (root, factory) {
    var api = factory();
    if (root) root.CupidErrorClassifier = api;
    if (typeof module === 'object' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : null), function () {
    'use strict';

    function isExpectedTransientNetworkError(error) {
        var name = String(error && error.name || '');
        var message = String(error && error.message || error || '');
        return name === 'AbortError' || name === 'NetworkError'
            || name === 'TypeError' && /load failed|failed to fetch|network request failed|fetch failed/i.test(message);
    }

    function classify(type, message, stack, source, profile, errorName) {
        var msg = String(message || '');
        var trace = String(stack || '');
        var src = String(source || '');
        var text = [msg, trace, src].join('\n');
        var appStack = /(?:^|\/)assets\/js\/|modules\/|scenario\//i.test(trace + '\n' + src);
        if (profile === 'worker' && type === 'UnhandledRejection'
            && isExpectedTransientNetworkError({ name: errorName, message: msg })) return 'noise';
        if (!msg || msg === 'Script error.' && !trace || /ResizeObserver loop/.test(msg)) return 'noise';
        if (/chrome-extension:|moz-extension:|safari-extension:|safari-web-extension:|webkit-masked-url:\/\/hidden/i.test(text)) return 'external';
        // Injected browser wrappers can use ordinary HTTPS URLs instead of extension URLs.
        if (!appStack && /https?:\/\/[^/\s)]+\.z\d+\.web\.core\.windows\.net\/(?:js\/chrome\.js|assets\/app\.js)(?:[?:\s)]|$)/i.test(trace + '\n' + src)) return 'external';
        if (/googletagmanager|google-analytics|gtag\/js|cdn\.jsdelivr\.net|wcs\.pstatic\.net\/wcslog\.js|ssl\.pstatic\.net\/melona\/libs\/gfp-nac-module\/synchronizer\.js|static\.cloudflareinsights\.com\/beacon\.min\.js/i.test(text)) return 'external';
        if (type === 'UnhandledRejection') {
            var rejection = msg.replace(/^\[app:UnhandledRejection\]\s*/i, '').trim();
            if (/^[A-Za-z_$][\w$]{0,2}$/.test(rejection) && !/(?:^|\/)assets\/js\//i.test(trace)) return 'external';
            if (!appStack && (/^(\s*@\s*){1,4}$/.test(trace)
                || /^\s*(?:[A-Za-z_$][\w$]*@?\s*){1,4}$/.test(trace) && rejection.length <= 12)) return 'external';
        }
        if (!appStack && (/Can't find variable: (gmo|__gCrWeb|ytcfg|__)/.test(msg)
            || /window\.ethereum|window\.__firefox__|standardSelectors/.test(msg))) return 'noise';
        if (/^undefined:/.test(src) && !appStack) return 'external';
        if (type === 'ResourceError' || /Loading chunk|dynamically imported module|load failed|failed to fetch|network request failed|fetch failed/i.test(msg)) return 'network';
        if (type === 'SecurityPolicyViolation') return 'security';
        return 'app';
    }

    return { classify: classify, isExpectedTransientNetworkError: isExpectedTransientNetworkError };
});
// END GENERATED CUPID ERROR CLASSIFIER

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
    if (window.CupidRuntimeSupport && !window.CupidRuntimeSupport.supported) return;
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
    const version = '2.9.357';
    const LOAD_RETRIES = 3;

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
               : pathname.includes('-zh') ? 'zh'
               : pathname.includes('-en') ? 'en'
               : 'ko';
    const LOAD_RECOVERY_KEY = 'cupid:script-load-recovery:' + version + ':' + lang;

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
    const scenarioScriptsByDay = scenarioScripts.reduce(function(groups, src) {
        var match = src.match(/scenario\/day([1-5])_/);
        if (!match) return groups;
        var day = Number(match[1]);
        if (!groups[day]) groups[day] = [];
        groups[day].push(src);
        return groups;
    }, {});

    /**
     * 현재 언어를 전역으로 노출 → SceneRenderer에서 _i18n 텍스트 선택에 사용
     * 값: 'ko' (한국어) 또는 'en' (영어)
     */
    window.GAME_LANG = lang;

    // =========================================================================
    // 게임 엔진 스크립트 (Game Engine Scripts)
    // =========================================================================

    // Critical scene/storage modules stay eager; prompt definitions load after the first scene.
    const engineScripts = [
        'affinity-corrections.js',
        'progression-integrity.js',
        // 다국어 텍스트 로더
        'loaders/i18n-loader.js',

        'freetalk-core.js',

        // 갤러리 모듈 (게임에서 진행도 저장에도 사용됨)
        'media-gate.js',             // encrypted media unlock gate
        'gallery-data.js',           // 갤러리 데이터 정의
        'gallery-progress.js',       // 진행도 관리 (localStorage)

        // 게임 엔진 모듈 (의존성 순서대로 로드)
        'modules/config.js',         // 전역 상수 + getAssetUrl()
        'cross-world.js',
        'modules/RouteTelemetry.js',  // D1 story branch diagnostics
        'modules/MessageComposerUtils.js', // PC Enter 전송 / 수정키 줄바꿈 판정
        'modules/KoreanProcessor.js',// 한국어 조사 자동 처리
        'modules/StateManager.js',   // 게임 상태 관리
        'modules/SaveManager.js',    // 저장/불러오기
        'modules/GalleryManager.js', // 갤러리 해금 추적
        'modules/UIManager.js',      // UI/DOM 제어
        'modules/DialogueSystem.js', // 대사 타이핑 효과
        'modules/MessengerView.js',  // 밤 문자 메신저 말풍선
        'modules/CGTransition.js',
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
    var runtimePromise = null;
    var scriptPromises = new Map();
    var freeTalkRuntimePromise = null;
    var freeTalkPrefetchScheduled = false;
    const deferredFreeTalkScripts = ['example-dialogues-ko.js', 'prompts.js'];
    var loadedScenarioDays = new Set();
    var scenarioDayPromises = new Map();
    var requiredGlobals = [
        'CupidProgressIntegrity', 'StateManager', 'SaveManager', 'GalleryManager', 'KoreanProcessor',
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

    function delay(ms) {
        return new Promise(function(resolve) {
            setTimeout(resolve, ms);
        });
    }

    function buildScriptUrl(src, attempt) {
        var query = '?v=' + encodeURIComponent(version);
        if (src === 'prompts.js' || src === 'modules/FreeTalkSystem.js') query += '&expressions=20261026';
        if (src === 'modules/config.js' || src === 'modules/FreeTalkSystem.js') query += '&history=20260924';
        if (src === 'sound.js' || src === 'scenario/day5_4_night.js') query += '&history=20260926-bedline';
        if (src === 'modules/SceneRenderer.js') query += '&history=20260926-cross';
        if (src === 'modules/GameEngine.js' || src === 'progression-integrity.js' || src === 'modules/SaveManager.js') query += '&history=20261009-rebalance';
        if (src === 'loaders/i18n-loader.js') query += '&history=20261014-i18n';
        if (src === 'affinity-corrections.js' || src === 'progression-integrity.js' || src === 'modules/StateManager.js' || src === 'modules/RouteTelemetry.js' || src === 'modules/SceneRenderer.js' || src === 'modules/GameEngine.js' || src === 'modules/FreeTalkSystem.js' || src === 'modules/GalleryManager.js' || src === 'gallery-progress.js' || src === 'media-gate.js') query += '&guard=20260926-gallery-slot';
        if (attempt > 0) {
            query += '&retry=' + Date.now();
        }
        var relativeUrl = basePath + src + query;
        try {
            return new URL(relativeUrl, document.baseURI || window.location.href).href;
        } catch (_) {
            return relativeUrl;
        }
    }

    function loadScriptAttempt(src, attempt) {
        return new Promise(function(resolve, reject) {
            var scriptUrl = buildScriptUrl(src, attempt);
            var script = document.createElement('script');
            var settled = false;

            function cleanup() {
                script.onload = null;
                script.onerror = null;
            }

            function rejectLoad(reason) {
                if (settled) return;
                settled = true;
                cleanup();
                if (script.parentNode) {
                    script.parentNode.removeChild(script);
                }
                reject(new Error('[game-loader] Failed to load script: ' + scriptUrl + ' [' + reason + ']'));
            }

            script.async = false;
            script.setAttribute('data-cupid-managed-script', 'true');
            script.onload = function() {
                if (settled) return;
                settled = true;
                cleanup();
                resolve(src);
            };
            script.onerror = function() {
                rejectLoad('network');
            };
            script.src = scriptUrl;
            document.head.appendChild(script);
        });
    }

    async function loadScript(src) {
        if (scriptPromises.has(src)) return scriptPromises.get(src);
        var promise = (async function() {
            var lastError = null;
            for (var attempt = 0; attempt < LOAD_RETRIES; attempt++) {
                try {
                    return await loadScriptAttempt(src, attempt);
                } catch (error) {
                    lastError = error;
                    if (attempt < LOAD_RETRIES - 1) {
                        await delay(500 * (attempt + 1));
                    }
                }
            }
            throw lastError || new Error('[game-loader] Failed to load script: ' + src);
        })();
        scriptPromises.set(src, promise);
        try {
            return await promise;
        } catch (error) {
            scriptPromises.delete(src);
            throw error;
        }
    }

    window.ensureCupidFreeTalkRuntime = function() {
        if (window.CupidFreeTalkPromptsReady) return Promise.resolve(true);
        if (freeTalkRuntimePromise) return freeTalkRuntimePromise;
        freeTalkRuntimePromise = (async function() {
            for (const src of deferredFreeTalkScripts) await loadScript(src);
            if (!window.getPromptData || !window.buildSystemPrompt || !window.CHARACTER_EXPRESSIONS) {
                throw new Error('[game-loader] Free-talk prompt definitions are incomplete');
            }
            window.CupidFreeTalkPromptsReady = true;
            delete window.__cupidLastFreeTalkPrefetchError;
            return true;
        })().catch(function(error) {
            freeTalkRuntimePromise = null;
            throw error;
        });
        return freeTalkRuntimePromise;
    };

    window.prefetchCupidFreeTalkRuntime = function() {
        if (freeTalkPrefetchScheduled || window.CupidFreeTalkPromptsReady) return;
        freeTalkPrefetchScheduled = true;
        const run = function() {
            window.ensureCupidFreeTalkRuntime().catch(function(error) {
                window.__cupidLastFreeTalkPrefetchError = error.message || String(error);
                if (window.__cupidLogRuntimeError) window.__cupidLogRuntimeError('FreeTalkPrefetchFailure', error.message, error.stack || '', 'game-loader');
            });
        };
        if (typeof window.requestAnimationFrame === 'function') window.requestAnimationFrame(function() { window.requestAnimationFrame(run); });
        else setTimeout(run, 0);
    };

    async function ensureScenarioDay(day) {
        var normalizedDay = Number(day);
        if (!Number.isInteger(normalizedDay) || normalizedDay < 1 || normalizedDay > 5) return false;
        if (loadedScenarioDays.has(normalizedDay)) {
            if (window.CupidI18nLoader) await window.CupidI18nLoader.ensureDay(normalizedDay);
            return true;
        }
        if (scenarioDayPromises.has(normalizedDay)) return scenarioDayPromises.get(normalizedDay);

        var promise = (async function() {
            var scripts = scenarioScriptsByDay[normalizedDay] || [];
            for (var index = 0; index < scripts.length; index++) {
                await loadScript(scripts[index]);
            }
            if (window.CupidI18nLoader) await window.CupidI18nLoader.ensureDay(normalizedDay);
            loadedScenarioDays.add(normalizedDay);
            window.dispatchEvent(createEvent('cupidScenarioDayLoaded', { day: normalizedDay }));
            return true;
        })();
        scenarioDayPromises.set(normalizedDay, promise);
        try {
            return await promise;
        } catch (error) {
            scenarioDayPromises.delete(normalizedDay);
            throw error;
        }
    }

    async function loadNextScenarioDay() {
        for (var day = 1; day <= 5; day++) {
            if (!loadedScenarioDays.has(day)) return ensureScenarioDay(day);
        }
        return false;
    }

    window.CupidContentLoader = {
        ensureDay: ensureScenarioDay,
        prefetchDay: ensureScenarioDay,
        loadNextDay: loadNextScenarioDay,
        hasUnloadedDays: function() { return loadedScenarioDays.size < 5; },
        getLoadedDays: function() { return Array.from(loadedScenarioDays).sort(); }
    };

    function verifyRequiredGlobals() {
        var missing = requiredGlobals.filter(function(name) {
            return !window[name];
        });
        if (missing.length > 0) {
            throw new Error('[game-loader] Required module not registered: ' + missing.join(', '));
        }
    }

    async function loadStoryFont() {
        const homeFont = document.querySelector('link[href*="pretendard-home.css"]');
        if (!homeFont || document.querySelector('link[data-cupid-story-font]')) return;
        // Restore one complete shaping face before dialogue mixes uncommon glyphs.
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.dataset.cupidStoryFont = 'true';
        link.href = homeFont.href.replace('pretendard-home.css', 'pretendard.css');
        await new Promise(resolve => {
            const timer = setTimeout(() => { link.remove(); resolve(); }, 10000);
            link.onload = async () => {
                try { await document.fonts.load('400 16px "Pretendard"'); } catch (_) {}
                clearTimeout(timer);
                resolve();
            };
            link.onerror = () => { clearTimeout(timer); link.remove(); resolve(); };
            homeFont.parentNode.appendChild(link);
        });
    }

    async function loadAllScripts() {
        await loadStoryFont();
        for (var commonIndex = 0; commonIndex < commonScripts.length; commonIndex++) {
            await loadScript(commonScripts[commonIndex]);
        }
        await ensureScenarioDay(1);
        for (var engineIndex = 0; engineIndex < engineScripts.length; engineIndex++) {
            await loadScript(engineScripts[engineIndex]);
            if (engineScripts[engineIndex] === 'affinity-corrections.js') await window.CupidAffinityCorrections.ready;
        }
        if (window._i18nReady) await window._i18nReady;
        verifyRequiredGlobals();
        window.gameScriptsLoaded = true;
        window.dispatchEvent(new Event('gameScriptsLoaded'));
        const arrival = window.CrossWorld.takeArrival('cupid');
        if (arrival && !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
            const nodes = document.querySelectorAll('p');
            let versionNode = null;
            for (let i = 0; i < nodes.length; i++) {
                if (nodes[i].textContent.indexOf('ver. 0.13') !== -1) versionNode = nodes[i];
            }
            if (versionNode) {
                const original = versionNode.textContent;
                const cracked = original.replace('ver. 0.13', 'CYCLE_13');
                let step = 0;
                const tick = () => {
                    versionNode.textContent = step % 2 ? original : cracked;
                    step += 1;
                    if (step < 5) setTimeout(tick, step % 2 ? 160 : 80);
                    else versionNode.textContent = original;
                };
                setTimeout(tick, 700);
                setTimeout(() => {
                    try { if (window.soundManager && window.soundManager.playStaticCrackle) window.soundManager.playStaticCrackle(); } catch (_) {}
                    if (navigator.vibrate && (navigator.maxTouchPoints > 0 || 'ontouchstart' in window)) {
                        navigator.vibrate([45, 35, 40, 30, 110, 140, 45, 35, 40, 30, 110]);
                    }
                }, 700);
            }
        }
        if (arrival) {
            try { if (window.CupidRouteTelemetry) window.CupidRouteTelemetry.crossing('arrived'); } catch (_) { /* never block the arrival scene */ }
            window.__cupidCrossingName = arrival.name;
            document.documentElement.classList.remove('cupid-from-gate');
            var gateVeil = document.getElementById('cupid-gate-veil');
            if (gateVeil) gateVeil.remove();
            window.CrossWorld.show({
                world: 'cupid', lang: window.GAME_LANG || document.documentElement.lang || 'ko',
                image: 'assets/images/background/gate_bloom.jpg',
                hasSave: Boolean(window.hasSavedGame && window.hasSavedGame()),
                onContinue: function () {
                    window.__cupidArrivedFromGate = false;
                    if (window.continueGame) return window.continueGame();
                },
                onNew: function () {
                    window.__cupidArrivedFromGate = true;
                    if (window.startGame) return window.startGame();
                },
                onTitle: function () {
                    window.__cupidArrivedFromGate = false;
                    var start = document.getElementById('start-btn');
                    if (start) start.focus();
                }
            });
        }
    }

    function clearLoadRecoveryMarker() {
        try { sessionStorage.removeItem(LOAD_RECOVERY_KEY); } catch (_) { /* ignore */ }
    }

    function scheduleOneTimeLoadRecovery() {
        if (navigator.onLine === false) return false;
        try {
            if (sessionStorage.getItem(LOAD_RECOVERY_KEY) === '1') return false;
            sessionStorage.setItem(LOAD_RECOVERY_KEY, '1');
        } catch (_) {
            return false;
        }
        window.setTimeout(function() { window.location.reload(); }, 700);
        return true;
    }

    function showGameLoadError() {
        if (document.querySelector('[data-cupid-load-error]')) return;
        var pageLang = String(window.GAME_LANG || document.documentElement.lang || 'ko')
            .toLowerCase()
            .split('-')[0];
        var copies = {
            ko: {
                title: '게임을 불러오지 못했습니다',
                message: '인터넷이 연결됐는지 보고 다시 불러 주세요.',
                retry: '다시 불러오기'
            },
            en: {
                title: 'Game failed to load',
                message: 'Check your connection and try again.',
                retry: 'Reload'
            },
            es: {
                title: 'No se pudo cargar el juego',
                message: 'Revisa tu conexión a internet e inténtalo de nuevo.',
                retry: 'Volver a cargar'
            },
            ja: {
                title: 'ゲームを読み込めませんでした',
                message: '通信環境を確認して、もう一度お試しください。',
                retry: '再読み込み'
            },
            fr: {
                title: 'Impossible de charger le jeu',
                message: 'Vérifiez votre connexion internet, puis réessayez.',
                retry: 'Réessayer'
            },
            de: {
                title: 'Das Spiel konnte nicht geladen werden',
                message: 'Überprüfe deine Internetverbindung und versuche es erneut.',
                retry: 'Neu laden'
            },
            pt: {
                title: 'Não foi possível carregar o jogo',
                message: 'Verifique sua conexão com a internet e tente novamente.',
                retry: 'Recarregar'
            },
            zh: {
                title: '游戏加载失败',
                message: '请检查网络连接后重试。',
                retry: '重新加载'
            }
        };
        var copy = copies[pageLang] || copies.en;
        var overlay = document.createElement('div');
        overlay.id = 'cupid-load-error';
        overlay.setAttribute('data-cupid-load-error', 'true');
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
        function reloadGamePage() { window.location.reload(); }
        retry.addEventListener('click', reloadGamePage);

        panel.appendChild(title);
        panel.appendChild(message);
        panel.appendChild(retry);
        overlay.appendChild(panel);
        document.body.appendChild(overlay);
    }
    window.__cupidShowGameLoadError = showGameLoadError;

    function setLandingControlsReady(ready) {
        var startButton = document.getElementById('start-btn');
        var continueButton = document.getElementById('continue-btn');
        if (startButton) {
            startButton.disabled = !ready;
            startButton.style.opacity = ready ? '1' : '0.65';
            startButton.setAttribute('aria-busy', ready ? 'false' : 'true');
        }
        if (continueButton) {
            var hasSave = false;
            try { hasSave = window.CupidStorage.getItem('cupid_save') !== null; } catch (_) {}
            continueButton.disabled = !ready || !hasSave;
            continueButton.style.opacity = ready && hasSave ? '1' : '0.5';
            continueButton.style.cursor = ready && hasSave ? 'pointer' : 'default';
            continueButton.setAttribute('aria-busy', ready ? 'false' : 'true');
        }
    }

    function handleRuntimeLoadError(error) {
        document.documentElement.classList.remove('cupid-from-gate');
        var gateVeil = document.getElementById('cupid-gate-veil');
        if (gateVeil) gateVeil.remove();
        if (scheduleOneTimeLoadRecovery()) return;
        window.gameScriptsLoadError = error;
        if (typeof window.__cupidReportCaughtError === 'function') {
            window.__cupidReportCaughtError(error, {
                errorType: 'ScriptLoadError',
                source: 'game-loader'
            });
        } else if (typeof window.__cupidLogRuntimeError === 'function') {
            window.__cupidLogRuntimeError('ScriptLoadError', error && error.message, error && error.stack, 'game-loader');
        }
        console.error(error);
        showGameLoadError();
        window.dispatchEvent(createEvent('gameScriptsLoadError', { error: error }));
    }

    window.loadCupidGameRuntime = function() {
        if (window.gameScriptsLoaded) return Promise.resolve(true);
        if (runtimePromise) return runtimePromise;
        setLandingControlsReady(false);
        runtimePromise = loadAllScripts()
            .then(function() {
                clearLoadRecoveryMarker();
                setLandingControlsReady(true);
                return true;
            })
            .catch(function(error) {
                runtimePromise = null;
                setLandingControlsReady(true);
                handleRuntimeLoadError(error);
                throw error;
            });
        return runtimePromise;
    };

    if (window.preventAutoStart && new URLSearchParams(location.search).get('gate') !== '1') {
        setLandingControlsReady(true);
        loadScript('ga.js').catch(function(error) {
            if (typeof window.__cupidLogRuntimeError === 'function') {
                window.__cupidLogRuntimeError('AnalyticsLoadError', error && error.message, error && error.stack, 'game-loader');
            }
        });
    } else {
        window.loadCupidGameRuntime().catch(function() {});
    }

})();
// 즉시 실행 함수(IIFE)로 감싸서 전역 변수 오염 방지
// async=false 동적 스크립트는 삽입 순서대로 실행되며, Chrome Intervention 대상 아님

// ============================================================================
// 【글로벌 에러 핸들러】 프론트엔드 에러를 D1에 기록
// ============================================================================

(function() {
    if (window.__cupidErrorReporterInstalled) return;
    var ERROR_ENDPOINT = 'https://chatbot-api.yama5993.workers.dev/error-logs';
    var p = window.location.pathname;
    var lang = p.includes('-es') ? 'es' : p.includes('-ja') ? 'ja'
             : p.includes('-fr') ? 'fr' : p.includes('-de') ? 'de'
             : p.includes('-pt') ? 'pt' : p.includes('-zh') ? 'zh' : p.includes('-en') ? 'en' : 'ko';
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

    function _classifyError(type, msg, stack, src) {
        return window.CupidErrorClassifier.classify(type, msg, stack, src);
    }

    // error-reporter.js가 없을 때만 쓰는 예비 경로입니다. keepalive·sendBeacon은 진행 중인 본문이 64KB를 넘으면
    // 네트워크가 멀쩡해도 거절되므로 일반 요청으로 보냅니다. text/plain이면 사전 요청 없이 바로 전달됩니다.
    function _postErrorPayload(payload) {
        try {
            var body = JSON.stringify(payload);
            if (typeof fetch === 'function') {
                fetch(ERROR_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
                    body: body,
                    credentials: 'omit',
                    cache: 'no-store'
                }).then(function(response) { return response.text(); }).catch(function() {});
                return true;
            }
            if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
                try {
                    var beaconBody = typeof Blob !== 'undefined' ? new Blob([body], { type: 'text/plain;charset=UTF-8' }) : body;
                    return navigator.sendBeacon(ERROR_ENDPOINT, beaconBody);
                } catch (_) {}
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

        _postErrorPayload(payload);
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
        var msg = (reason && reason.message) || String(reason || 'Unhandled rejection');
        var stack = (reason && reason.stack) || '';
        _sendError('UnhandledRejection', msg, stack, window.location.href);
    });
})();
