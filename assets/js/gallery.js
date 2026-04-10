/**
 * ============================================================================
 * Gallery - 갤러리 메인 컨트롤러 클래스
 * ============================================================================
 * 
 * Cupid 게임의 갤러리 시스템 전체를 관리하는 메인 컨트롤러입니다.
 * 
 * 역할:
 *   1. 초기화 및 설정
 *   2. 탭 전환 관리
 *   3. 전역 이벤트 리스너 등록
 *   4. 모듈 조율 (GalleryData, GalleryProgress, GalleryUI)
 * 
 * 모듈 구조:
 *   Gallery (이 파일)
 *     ├── GalleryData     (gallery-data.js)     - 정적 데이터
 *     ├── GalleryProgress (gallery-progress.js) - 진행도 관리
 *     └── GalleryUI       (gallery-ui-core.js)  - UI 렌더링
 *           ├── CharacterRenderer (gallery-ui-character.js)
 *           ├── CGRenderer        (gallery-ui-cg.js)
 *           └── MusicRenderer     (gallery-ui-music.js)
 */

class Gallery {
    // =========================================================================
    // 생성자 및 초기화
    // =========================================================================

    /**
     * Gallery 생성자
     */
    constructor() {
        /** @type {string} 현재 선택된 언어 */
        this.lang = 'ko';

        /** @type {string} 현재 선택된 탭 */
        this.tab = 'characters';

        /** @type {GalleryProgress|null} 진행도 관리 인스턴스 */
        this.progress = null;

        /** @type {GalleryUI|null} UI 관리 인스턴스 */
        this.ui = null;

        /** @type {HTMLElement|null} 탭 네비게이션 컨테이너 */
        this._tabNav = null;
    }

    /**
     * 갤러리 초기화
     * 
     * DOMContentLoaded 이벤트에서 호출됩니다.
     */
    init() {
        // 1. URL에서 언어 감지
        const pathname = window.location.pathname;
        this.lang = pathname.includes('-es') ? 'es'
                  : pathname.includes('-fr') ? 'fr'
                  : pathname.includes('-ja') ? 'ja'
                  : pathname.includes('-en') ? 'en'
                  : pathname.includes('-de') ? 'de'
                  : pathname.includes('-pt') ? 'pt'
                  : 'ko';

        // 2. 진행도 관리 인스턴스 생성 및 로드
        this.progress = new GalleryProgress();
        window.galleryProgressInstance = this.progress;

        // 3. UI 인스턴스 생성
        this.ui = new GalleryUI(this.progress, this.lang);

        // 4. 탭 버튼 이벤트 등록 (이벤트 위임)
        this._initTabs();

        // 5. 초기 콘텐츠 렌더링
        this.ui.renderCharacters();

        // 6. 전역 이벤트 리스너 등록
        this._setupEventListeners();

        // 7. 갤러리 프리토킹 시스템 초기화 (갤러리 페이지에서만)
        if (typeof GalleryFreeTalk !== 'undefined') {
            this.freeTalk = new GalleryFreeTalk(this.lang, this.progress);
            window.galleryFreeTalk = this.freeTalk;
        }

        console.log('[Gallery] 초기화 완료 - 언어:', this.lang);
    }

    // =========================================================================
    // 탭 관리
    // =========================================================================

    /**
     * 탭 네비게이션 초기화
     * 이벤트 위임 방식으로 탭 전환 처리
     * @private
     */
    _initTabs() {
        this._tabNav = document.querySelector('.tab-nav');

        if (this._tabNav) {
            // 이벤트 위임: 탭 네비게이션 전체에 한 번만 이벤트 등록
            this._tabNav.addEventListener('click', (e) => {
                const btn = e.target.closest('.tab-btn');
                if (btn && btn.dataset.tab) {
                    this.switchTab(btn.dataset.tab);
                }
            });
        }
    }

    /**
     * 탭 전환
     * @param {string} tab - 전환할 탭 이름 ('characters', 'cg', 'music')
     */
    switchTab(tab) {
        this.tab = tab;

        // 탭 버튼 활성화 상태 업데이트
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab);
        });

        // 탭 콘텐츠 표시 상태 업데이트
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.toggle('active', content.id === `tab-${tab}`);
        });

        // 해당 탭의 콘텐츠 렌더링
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
     * 전역 이벤트 리스너 등록
     * @private
     */
    _setupEventListeners() {
        // 키보드 단축키 (ESC로 모달 닫기)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (this.freeTalk) this.freeTalk.close();
                this.ui.closeCharacterModal();
                this.ui.closeCGModal();
                this.ui.closeUnlockPopup();
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

/** 전역 Gallery 인스턴스 */
const gallery = new Gallery();

/** DOM 로드 완료 시 갤러리 초기화 */
document.addEventListener('DOMContentLoaded', () => {
    gallery.init();
});

// 전역 접근을 위해 window에 노출
window.Gallery = Gallery;
window.gallery = gallery;

// HTML onclick에서 호출되는 전역 함수
function closeCharacterModal() {
    gallery.ui.closeCharacterModal();
}
