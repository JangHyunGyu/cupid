/**
 * ============================================================================
 * Gallery - 갤러리 메인 컨트롤러 클래스
 * ============================================================================
 * 
 * 이 클래스는 Cupid 게임의 갤러리 시스템 전체를 관리하는 메인 컨트롤러입니다.
 * 
 * 역할:
 * 1. 초기화 및 설정
 * 2. 탭 전환 관리
 * 3. 이벤트 리스너 등록
 * 4. 다른 모듈들(GalleryData, GalleryProgress, GalleryUI) 조율
 * 
 * 파일 구조:
 * - gallery-data.js    : 정적 데이터 (캐릭터, CG, BGM)
 * - gallery-progress.js: 진행도 관리 (localStorage)
 * - gallery-ui.js      : UI 렌더링 및 모달
 * - gallery.js         : 메인 컨트롤러 (이 파일)
 * 
 * 사용 예시:
 *   const gallery = new Gallery();
 *   gallery.init();
 */

class Gallery {
    // =========================================================================
    // 생성자 및 초기화
    // =========================================================================

    /**
     * Gallery 생성자
     * 
     * 각 서브 모듈을 초기화하고 상태 변수를 설정합니다.
     */
    constructor() {
        /**
         * 현재 선택된 언어
         * URL에서 자동 감지 (gallery-en.html이면 'en', 그 외 'ko')
         * @type {string}
         */
        this.lang = 'ko';

        /**
         * 현재 선택된 탭
         * @type {string}
         */
        this.tab = 'characters';

        /**
         * 진행도 관리 인스턴스
         * @type {GalleryProgress}
         */
        this.progress = null;

        /**
         * UI 관리 인스턴스
         * @type {GalleryUI}
         */
        this.ui = null;
    }

    /**
     * 갤러리 초기화
     * 
     * DOMContentLoaded 이벤트에서 호출됩니다.
     * 
     * 초기화 순서:
     * 1. URL에서 언어 감지
     * 2. 진행도 로드
     * 3. UI 인스턴스 생성
     * 4. 탭 버튼 이벤트 등록
     * 5. 초기 콘텐츠 렌더링
     * 6. 전역 이벤트 리스너 등록
     */
    init() {
        // 1. URL에서 언어 감지
        // gallery-en.html이면 영어, gallery.html이면 한국어
        this.lang = window.location.pathname.includes('-en') ? 'en' : 'ko';

        // 2. 진행도 관리 인스턴스 생성 및 로드
        this.progress = new GalleryProgress();

        // 전역에서 접근 가능하도록 설정 (하위 호환성)
        window.galleryProgressInstance = this.progress;

        // 3. UI 인스턴스 생성
        this.ui = new GalleryUI(this.progress, this.lang);

        // 4. 탭 버튼 이벤트 등록
        this._initTabs();

        // 5. 초기 콘텐츠 렌더링 (캐릭터 탭)
        this.ui.renderCharacters();

        // 6. 전역 이벤트 리스너 등록
        this._setupEventListeners();

        console.log('[Gallery] 초기화 완료 - 언어:', this.lang);
    }

    // =========================================================================
    // 탭 관리
    // =========================================================================

    /**
     * 탭 네비게이션 초기화 (내부 메서드)
     * 
     * 각 탭 버튼에 클릭 이벤트 리스너를 등록합니다.
     * 
     * @private
     */
    _initTabs() {
        // 모든 .tab-btn 요소를 가져옴
        const tabBtns = document.querySelectorAll('.tab-btn');

        // 각 버튼에 클릭 이벤트 등록
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // data-tab 속성에서 탭 이름 가져오기
                const tab = btn.dataset.tab;
                // 해당 탭으로 전환
                this.switchTab(tab);
            });
        });
    }

    /**
     * 탭 전환
     * 
     * 선택된 탭에 맞는 콘텐츠를 렌더링합니다.
     * 
     * @param {string} tab - 전환할 탭 이름 ('characters', 'cg', 'music')
     * 
     * @example
     * gallery.switchTab('cg');  // CG 탭으로 전환
     */
    switchTab(tab) {
        // 현재 탭 상태 업데이트
        this.tab = tab;

        // 1. 탭 버튼 활성화 상태 업데이트
        // 선택된 탭 버튼에만 'active' 클래스 추가
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab);
        });

        // 2. 탭 콘텐츠 표시 상태 업데이트
        // 선택된 탭 콘텐츠만 'active' 클래스 추가 (CSS에서 display: block)
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.toggle('active', content.id === `tab-${tab}`);
        });

        // 3. 해당 탭의 콘텐츠 렌더링
        switch (tab) {
            case 'characters':
                this.ui.renderCharacters();
                break;
            case 'cg':
                this.ui.renderCG();
                break;
            case 'music':
                this.ui.renderMusic();
                break;
        }
    }

    // =========================================================================
    // 이벤트 리스너
    // =========================================================================

    /**
     * 전역 이벤트 리스너 등록 (내부 메서드)
     * 
     * @private
     */
    _setupEventListeners() {
        // 모달 외부 클릭 시 닫기
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                this.ui.closeCharacterModal();
            }
        });

        // 키보드 단축키 지원 (ESC로 모달 닫기)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.ui.closeCharacterModal();
                this.ui.closeCGModal();
            }
        });

        // 페이지 떠나기 전 오디오 정리
        window.addEventListener('beforeunload', () => {
            this.ui.cleanup();
        });
    }
}

// ============================================================================
// 전역 인스턴스 생성 및 초기화
// ============================================================================

/**
 * 전역 Gallery 인스턴스
 * 
 * 다른 스크립트나 HTML onclick에서 접근 가능:
 * - gallery.switchTab('cg')
 * - gallery.ui.openCharacterModal('seyoun')
 */
const gallery = new Gallery();

/**
 * DOM 로드 완료 시 갤러리 초기화
 * 
 * DOMContentLoaded 이벤트: HTML 파싱이 완료되면 발생 (이미지 로드 전)
 */
document.addEventListener('DOMContentLoaded', () => {
    gallery.init();
});

// 전역 접근을 위해 window에 노출
window.Gallery = Gallery;
window.gallery = gallery;

// ============================================================================
// 하위 호환성을 위한 전역 함수
// ============================================================================
// 기존 gallery.js에서 전역으로 사용하던 함수들
// HTML onclick 속성 등에서 호출될 수 있으므로 유지

/**
 * 캐릭터 모달 닫기 (전역)
 * HTML에서 onclick="closeCharacterModal()" 형태로 사용
 */
function closeCharacterModal() {
    gallery.ui.closeCharacterModal();
}

/**
 * CG 모달 닫기 (전역)
 */
function closeCGModal() {
    gallery.ui.closeCGModal();
}

/**
 * 해금 조건 팝업 닫기 (전역)
 */
function closeUnlockConditionPopup() {
    gallery.ui.closeUnlockPopup();
}
