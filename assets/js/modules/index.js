/**
 * ============================================================================
 * index.js - 게임 초기화 및 전역 함수 등록
 * ============================================================================
 *
 * 이 파일은 게임 엔진의 초기화 코드와 전역(window) 함수들을 정의합니다.
 * 모든 모듈이 로드된 후 마지막으로 실행되어야 합니다.
 *
 * 【의존 모듈】
 * - StateManager        : 게임 상태 관리
 * - SaveManager         : 저장/불러오기
 * - GalleryManager      : 갤러리 관리
 * - KoreanProcessor     : 한국어 조사 처리
 * - UIManager           : UI 렌더링 및 제어
 * - DialogueSystem      : 대화 시스템
 * - FreeTalkSystem      : 프리토킹 시스템
 * - SceneRenderer       : 씬 렌더링
 * - GameEngine          : 게임 엔진 메인 클래스
 * - soundManager        : 사운드 매니저 인스턴스
 *
 * 【window 전역 노출】
 * - window.gameEngine        : 게임 엔진 인스턴스 (개발자 도구용)
 * - window.initGame()        : 새 게임 시작 (index.html "새 게임" 버튼)
 * - window.initGameFromSave(): 이어하기 (index.html "이어하기" 버튼)
 * - window.hasSavedGame()    : 저장 데이터 유무 확인 (버튼 활성화용)
 * - window.loadGameState()   : 저장 데이터 로드 (갤러리 등에서 사용)
 * - window.openImageModal()  : 이미지 확대 모달 열기
 *
 * @version 2.0.0
 */

// ════════════════════════════════════════════════════════════════════════════
// 모듈 로드 검증
// ════════════════════════════════════════════════════════════════════════════

/**
 * 모듈 로드 검증
 * - 모든 필수 모듈이 정상적으로 로드되었는지 확인
 * - 누락된 모듈이 있으면 콘솔에 경고 메시지 출력
 */
(function checkModulesLoaded() {
    const requiredModules = [
        'StateManager', 'SaveManager', 'GalleryManager', 'KoreanProcessor',
        'UIManager', 'DialogueSystem', 'FreeTalkSystem', 'SceneRenderer', 'GameEngine'
    ];
    const missing = requiredModules.filter(name => !window[name]);
    if (missing.length > 0) {
        console.error('[index.js] 누락된 모듈:', missing.join(', '));
        console.error('[index.js] game-loader.js의 로드 순서를 확인하세요.');
    } else {
        console.log('[index.js] 모든 모듈 로드 확인 완료 ✓');
    }
})();

// ════════════════════════════════════════════════════════════════════════════
// 🌍 전역 인스턴스 및 초기화 함수
// ════════════════════════════════════════════════════════════════════════════
//
// ▶ 왜 전역(window) 함수가 필요한가?
// HTML 파일에서 onclick="initGame()" 같은 인라인 이벤트로 호출하려면
// JavaScript 함수가 전역 스코프(window)에 있어야 합니다.
//
// ▶ 함수별 역할:
// - initGame(): 새 게임 시작 (index.html "새 게임" 버튼)
// - initGameFromSave(): 이어하기 (index.html "이어하기" 버튼)
// - hasSavedGame(): 저장 데이터 유무 확인 (버튼 활성화용)
// - loadGameState(): 저장 데이터 로드 (갤러리 등에서 사용)
//
// ▶ 자동 시작:
// game.html에서 직접 로드 시 DOMContentLoaded에서 자동으로 게임 시작
// ════════════════════════════════════════════════════════════════════════════

/**
 * 게임 엔진 전역 인스턴스
 * - 모든 곳에서 접근 가능하도록 전역 변수로 선언
 * - 초기값 null, 게임 시작 시 생성됨
 * - window.gameEngine으로도 접근 가능 (개발자 도구용)
 */
let gameEngine = null;

// 개발자 도구에서 접근 가능하도록 window에 노출
// 사용법: gameEngine.renderScene('씬ID')
window.gameEngine = null;

/**
 * 🆕 새 게임 시작 (index.html에서 호출)
 *
 * 사용 예시 (HTML):
 * <button onclick="initGame()">새 게임</button>
 */
/**
 * 📱 모바일 가로모드 전용 풀스크린
 * - 세로모드 풀스크린에서는 Chrome 자동완성 바 위치가 깨지므로 가로만 적용
 * - 화면 회전 시 자동 진입/해제
 */
function setupLandscapeFullscreen() {
    const isMobile = ('ontouchstart' in window || navigator.maxTouchPoints > 0) && window.innerWidth <= 1024;
    if (!isMobile) return;

    const tryEnter = () => {
        if (window.innerWidth <= window.innerHeight) return; // 세로면 스킵
        const el = document.documentElement;
        const rfs = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
        if (rfs && !document.fullscreenElement && !document.webkitFullscreenElement) {
            rfs.call(el).catch(() => {});
        }
    };

    const tryExit = () => {
        if (window.innerWidth > window.innerHeight) return; // 가로면 스킵
        if (document.fullscreenElement || document.webkitFullscreenElement) {
            (document.exitFullscreen || document.webkitExitFullscreen).call(document).catch(() => {});
        }
    };

    // 최초 진입
    tryEnter();

    // 화면 회전 감지
    screen.orientation?.addEventListener('change', () => {
        setTimeout(() => {
            if (screen.orientation.type.startsWith('landscape')) tryEnter();
            else tryExit();
        }, 100);
    });
}

window.initGame = async () => {
    setupLandscapeFullscreen();
    gameEngine = new GameEngine();  // 게임 엔진 인스턴스 생성
    window.gameEngine = gameEngine; // 개발자 도구에서 접근 가능
    await gameEngine.startNewGame();  // 처음부터 시작
};

/**
 * ▶️ 저장된 게임에서 시작 (index.html에서 호출)
 *
 * 사용 예시 (HTML):
 * <button onclick="initGameFromSave()">이어하기</button>
 */
window.initGameFromSave = async (saveData) => {
    setupLandscapeFullscreen();
    gameEngine = new GameEngine();  // 게임 엔진 인스턴스 생성
    window.gameEngine = gameEngine; // 개발자 도구에서 접근 가능
    await gameEngine.continueGame();  // 저장 지점부터 재개
};

/**
 * 💾 저장 데이터 유무 확인 (게임 엔진 생성 전에도 사용 가능)
 *
 * ▶ 사용 목적:
 * index.html에서 "이어하기" 버튼을 표시할지 결정할 때 사용
 * 저장 데이터가 없으면 버튼을 숨기거나 비활성화
 *
 * ▶ 특이 사항:
 * 게임 엔진이 생성되기 전에도 호출될 수 있어서
 * gameEngine이 없으면 임시로 SaveManager를 생성해서 확인
 *
 * @returns {boolean} 저장 데이터가 있으면 true
 */
window.hasSavedGame = () => {
    if (gameEngine) return gameEngine.saveManager.hasSave();
    // 게임 엔진 없으면 임시 SaveManager로 확인
    return new SaveManager('cupid_save').hasSave();
};

/**
 * 📂 저장된 게임 상태 로드 (게임 엔진 생성 전에도 사용 가능)
 *
 * ▶ 사용 목적:
 * - 갤러리 페이지에서 해금 현황 확인
 * - index.html에서 "이어하기" 버튼 정보 표시
 *
 * @returns {Object|null} 저장된 게임 상태 객체 또는 null
 */
window.loadGameState = () => {
    if (gameEngine) return gameEngine.saveManager.load();
    // 게임 엔진 없으면 임시 SaveManager로 로드
    return new SaveManager('cupid_save').load();
};

/**
 * 🎮 자동 시작 (game.html에서 직접 로드 시)
 *
 * ▶ 동작 조건:
 * - window.preventAutoStart가 설정되지 않은 경우에만 실행
 * - index.html에서는 preventAutoStart = true로 설정하여 자동 시작 방지
 *
 * ▶ 동작:
 * DOM 로드 완료 후 게임 엔진 생성하고 "start" 씬부터 시작
 */
if (!window.preventAutoStart) {
    // 동적 스크립트 로딩 시 DOMContentLoaded가 이미 fired 되었을 수 있으므로
    // readyState를 확인하여 즉시 실행 또는 이벤트 대기를 결정
    async function _cupidAutoStart() {
        try {
            // i18n 데이터 로딩 완료 대기 (비한국어 페이지에서 번역 누락 방지)
            if (window._i18nReady) await window._i18nReady;
            gameEngine = new GameEngine();  // 게임 엔진 생성
            window.gameEngine = gameEngine; // 개발자 도구에서 접근 가능
            if (typeof soundManager !== 'undefined') soundManager.init();  // 사운드 매니저 초기화
            await gameEngine.renderScene("start");  // 첫 씬 렌더링
        } catch (e) {
            console.error('[Cupid Engine] 초기화 오류:', e);
        }
    }

    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', _cupidAutoStart);
    } else {
        _cupidAutoStart();
    }
}

// 🎉 로드 완료 메시지 (개발자 도구 콘솔에서 확인 가능)
console.log('[Cupid Engine] 객체지향 버전 v2.0.0 로드 완료');

/**
 * 이미지 확대 모달 열기
 * @param {string} src - 이미지 소스 URL
 */
window.openImageModal = (src, alt) => {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('image-modal-img');
    if (modal && modalImg) {
        modalImg.src = src;
        if (alt) modalImg.alt = alt;
        modal.style.display = 'flex';
    }
};
