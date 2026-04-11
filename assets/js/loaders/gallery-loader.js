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

(function () {
    // 로더 설정 로드 (동기)
    document.write('<script src="assets/js/loaders/config.js"><\/script>');
})();

// config.js 로드 후 실행
document.addEventListener('DOMContentLoaded', function () {
    // 이미 document.write로 로드됨
}, false);

// 갤러리 스크립트 로드 (document.write는 동기적)
(function () {
    const basePath = 'assets/js/';
    const version = '2.4.1';

    const scripts = [
        // 0. 모듈 설정 (ASSET_VERSION 등)
        'modules/config.js',
        // 1. 데이터 및 진행도 (의존성 없음)
        'gallery-data.js',
        'gallery-progress.js',

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
