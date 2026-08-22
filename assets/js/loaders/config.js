/**
 * ============================================================================
 * Cupid - 스크립트 로더 설정
 * ============================================================================
 * 
 * 모든 로더에서 공유하는 설정 값
 * 버전 업데이트는 이 파일만 수정하면 됨
 */

const LoaderConfig = {
    // 버전 (캐시 버스팅용)
    VERSION: '2.9.184',

    // 기본 경로
    BASE_PATH: 'assets/js/',

    /**
     * 스크립트 동기 로드
     * document.write 사용 (페이지 로드 중에만 동작)
     * 
     * @param {string} src - 스크립트 경로 (BASE_PATH 기준)
     */
    loadScript: function (src) {
        const fullPath = this.BASE_PATH + src + '?v=' + this.VERSION;
        document.write('<script src="' + fullPath + '"><\/script>');
    },

    /**
     * 여러 스크립트 순차 로드
     * 
     * @param {string[]} scripts - 스크립트 경로 배열
     */
    loadScripts: function (scripts) {
        scripts.forEach(src => this.loadScript(src));
    }
};

// 전역 접근
window.LoaderConfig = LoaderConfig;
