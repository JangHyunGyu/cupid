/**
 * ============================================================================
 * Cupid - 게임 로더
 * ============================================================================
 * 
 * index.html, index-en.html, game.html, game-en.html에서 사용
 * 게임에 필요한 모든 스크립트를 순서대로 로드
 * 
 * 사용법:
 *   <script src="assets/js/loaders/game-loader.js"></script>
 * 
 * 로드 순서:
 *   1. 공통: ga.js, sound.js
 *   2. 시나리오: 한국어/영문 시나리오 파일들
 *   3. 게임 엔진: prompts.js, gallery 모듈들, main.js
 */

(function () {
    const basePath = 'assets/js/';
    const version = '2.2.0';

    // 언어 감지
    const isEnglish = window.location.pathname.includes('-en');
    const lang = isEnglish ? 'en' : 'ko';

    // 공통 스크립트
    const commonScripts = [
        'ga.js',
        'sound.js'
    ];

    // 시나리오 스크립트 (한국어)
    const koScenarioScripts = [
        'scenario/ko_day1_1_morning.js',
        'scenario/ko_day1_2_lunch.js',
        'scenario/ko_day1_3_afterschool.js',
        'scenario/ko_day1_4_night.js',
        'scenario/ko_day2_1_morning.js',
        'scenario/ko_day2_2_lunch.js',
        'scenario/ko_day2_3_afterschool.js',
        'scenario/ko_day2_4_night.js',
        'scenario/ko_day3_1_morning.js'
    ];

    // 시나리오 스크립트 (영문)
    const enScenarioScripts = [
        'scenario/en_day1_1_morning.js',
        'scenario/en_day1_2_lunch.js',
        'scenario/en_day1_3_afterschool.js',
        'scenario/en_day1_4_night.js',
        'scenario/en_day2_1_morning.js',
        'scenario/en_day2_2_lunch.js',
        'scenario/en_day2_3_afterschool.js',
        'scenario/en_day2_4_night.js'
    ];

    const scenarioScripts = isEnglish ? enScenarioScripts : koScenarioScripts;

    // 게임 엔진 스크립트
    const engineScripts = [
        'prompts.js',
        // 갤러리 모듈 (게임에서 진행도 저장에 사용)
        'gallery-data.js',
        'gallery-progress.js',
        'gallery-ui-core.js',
        'gallery-ui-character.js',
        'gallery-ui-cg.js',
        'gallery-ui-music.js',
        'gallery.js',
        // 메인 게임 엔진
        'main.js'
    ];

    // 모든 스크립트 로드
    function loadScript(src) {
        document.write('<script src="' + basePath + src + '?v=' + version + '"><\/script>');
    }

    commonScripts.forEach(loadScript);
    scenarioScripts.forEach(loadScript);
    engineScripts.forEach(loadScript);
})();
