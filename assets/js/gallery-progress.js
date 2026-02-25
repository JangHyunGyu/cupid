/**
 * ============================================================================
 * GalleryProgress - 갤러리 진행도 관리 클래스
 * ============================================================================
 * 
 * 이 클래스는 갤러리의 해금 상태를 localStorage를 통해 관리합니다.
 * 
 * 저장 구조 (localStorage key: 'cupid_gallery'):
 * {
 *   version: 2,                    // 데이터 버전
 *   characters: {                  // 캐릭터별 상태
 *     seyoun: { 
 *       met: true,                 // 만남 여부
 *       maxAffinity: 75,           // 최대 호감도
 *       freeTalkCount: 50          // 프리토킹 횟수
 *     },
 *     ...
 *   },
 *   cg: { nurse_home_event1: { unlocked: true } },  // CG 해금 상태
 *   bgm: { intro: { unlocked: true } }              // BGM 해금 상태
 * }
 * 
 * 사용 예시:
 *   const progress = new GalleryProgress();
 *   progress.load();
 *   progress.isMet('seyoun');     // true/false
 *   progress.getAffinity('seyoun'); // 0~100
 */

class GalleryProgress {
    // =========================================================================
    // 생성자 및 초기화
    // =========================================================================

    /**
     * GalleryProgress 생성자
     * localStorage 키를 설정하고 데이터를 로드합니다.
     */
    constructor() {
        /**
         * localStorage에 저장할 때 사용하는 키
         * @type {string}
         */
        this.storageKey = 'cupid_gallery';

        /**
         * 현재 메모리에 로드된 진행 데이터
         * @type {Object}
         */
        this.data = null;

        // 초기 데이터 로드
        this.load();
    }

    // =========================================================================
    // 데이터 로드/저장
    // =========================================================================

    /**
     * localStorage에서 진행 상태 로드
     * 
     * 동작:
     * 1. localStorage에서 데이터 읽기
     * 2. 버전 체크 (다르면 초기화)
     * 3. 데이터가 없으면 기본값 생성
     * 
     * @returns {Object} 로드된 또는 새로 생성된 진행 데이터
     */
    load() {
        const saved = localStorage.getItem(this.storageKey);
        let needsReset = false;

        if (saved) {
            try {
                const parsed = JSON.parse(saved);

                // 버전 체크: 버전이 없거나 현재 버전보다 낮으면 리셋
                if (!parsed.version || parsed.version < GalleryData.VERSION) {
                    needsReset = true;
                    console.log('[GalleryProgress] 데이터 버전 업데이트로 인해 초기화됩니다.');
                } else {
                    this.data = parsed;
                    return this.data;
                }
            } catch (e) {
                console.error('[GalleryProgress] 데이터 파싱 오류:', e);
                needsReset = true;
            }
        } else {
            needsReset = true;
        }

        // 초기화가 필요한 경우 기본값 생성
        if (needsReset) {
            this.data = this._createDefaultData();
            this.save();
        }

        return this.data;
    }

    /**
     * 기본 진행 데이터 생성
     * 
     * 기본 상태:
     * - 모든 캐릭터: 미만남, 호감도 0
     * - 모든 CG: 미해금
     * - intro BGM만 해금
     * 
     * @private
     * @returns {Object} 기본 진행 데이터
     */
    _createDefaultData() {
        return {
            version: GalleryData.VERSION,
            characters: {
                seyoun: { met: false, maxAffinity: 0, freeTalkCount: 0 },
                yuna: { met: false, maxAffinity: 0, freeTalkCount: 0 },
                dain: { met: false, maxAffinity: 0, freeTalkCount: 0 },
                teacher: { met: false, maxAffinity: 0, freeTalkCount: 0 },
                nurse: { met: false, maxAffinity: 0, freeTalkCount: 0 }
            },
            cg: {},                           // CG는 기본적으로 없음 (게임 진행 시 추가)
            bgm: {
                intro: { unlocked: true }      // intro BGM만 기본 해금
            }
        };
    }

    /**
     * 현재 진행 상태를 localStorage에 저장
     */
    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }

    /**
     * 진행 데이터를 최신 상태로 다시 읽기
     * 다른 탭에서 변경된 경우 등에 사용
     * 
     * @returns {Object} 현재 저장된 진행 데이터
     */
    refresh() {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
            try {
                this.data = JSON.parse(saved);
            } catch (e) {
                // 파싱 실패 시 현재 데이터 유지
            }
        }
        return this.data;
    }

    // =========================================================================
    // 캐릭터 관련 메서드
    // =========================================================================

    /**
     * 캐릭터를 만난 적이 있는지 확인
     * 
     * @param {string} charId - 캐릭터 ID (예: 'seyoun', 'yuna')
     * @returns {boolean} 만난 적 있으면 true
     * 
     * @example
     * if (progress.isMet('seyoun')) {
     *   // 서연을 만난 적 있음 - 상세 정보 표시
     * }
     */
    isMet(charId) {
        this.refresh();
        return this.data.characters?.[charId]?.met || false;
    }

    /**
     * 현재 호감도 가져오기 (최고점 기준)
     * 
     * 항상 localStorage에 저장된 최대 호감도(maxAffinity)를 사용
     * 한 번 달성한 호감도는 떨어지지 않으므로 영구 해금 방식
     * 
     * @param {string} charId - 캐릭터 ID
     * @returns {number} 최대 호감도 (0 ~ 100)
     * 
     * @example
     * const affinity = progress.getAffinity('seyoun');
     * if (affinity >= 80) {
     *   // 호감도 80 이상 - 전체 소개 표시
     * }
     */
    getAffinity(charId) {
        this.refresh();
        return this.data.characters?.[charId]?.maxAffinity || 0;
    }

    /**
     * 프리토킹 횟수 가져오기
     * 
     * @param {string} charId - 캐릭터 ID
     * @returns {number} 프리토킹 횟수
     */
    getFreeTalkCount(charId) {
        this.refresh();
        return this.data.characters?.[charId]?.freeTalkCount || 0;
    }

    // =========================================================================
    // 표정 해금 관련 메서드
    // =========================================================================

    /**
     * 표정별 해금 필요 호감도 계산
     * 
     * 호감도 0~100을 표정 개수에 따라 균등 분배
     * 예시: 5개 표정이면 각각 0, 25, 50, 75, 100에서 해금
     * 첫 번째 표정(normal)은 항상 해금 (0 필요)
     * 
     * @param {number} expressionIndex - 표정 인덱스 (0부터 시작, 0=normal)
     * @param {number} totalExpressions - 전체 표정 개수
     * @returns {number} 해금에 필요한 호감도 (0~100)
     * 
     * @example
     * // 5개 표정 중 3번째
     * getExpressionRequirement(2, 5); // 50
     */
    getExpressionRequirement(expressionIndex, totalExpressions) {
        // 표정이 1개 이하면 무조건 해금
        if (totalExpressions <= 1) return 0;

        // 첫 번째 표정(normal, index=0)은 항상 해금
        if (expressionIndex === 0) return 0;

        // 나머지 표정은 균등 분배
        // 예: 5개 표정일 때 index 1 -> 25, index 2 -> 50, ...
        return Math.round((expressionIndex / (totalExpressions - 1)) * 100);
    }

    /**
     * 특정 표정이 해금되었는지 확인
     * 
     * 일반 표정: 호감도 기준 균등 분배
     * 특별 표정 (bikini): 호감도 100 + 프리토킹 100회 필요
     * 
     * @param {string} charId - 캐릭터 ID
     * @param {number} expressionIndex - 표정 인덱스
     * @param {number} totalExpressions - 전체 표정 개수
     * @param {string} expressionName - 표정 코드명 (선택적, 'bikini' 체크용)
     * @returns {boolean} 해금 여부
     * 
     * @example
     * // 일반 표정 체크
     * isExpressionUnlocked('seyoun', 2, 11); // 호감도 기준
     * 
     * // 비키니 표정 체크
     * isExpressionUnlocked('seyoun', 10, 11, 'bikini'); // 특별 조건
     */
    isExpressionUnlocked(charId, expressionIndex, totalExpressions, expressionName = null) {
        // 특별 표정 체크 (bikini)
        if (expressionName === 'bikini') {
            const affinity = this.getAffinity(charId);
            const freeTalkCount = this.getFreeTalkCount(charId);
            return affinity >= 100 && freeTalkCount >= 100;
        }

        // 일반 표정: 호감도 기준
        const requiredAffinity = this.getExpressionRequirement(expressionIndex, totalExpressions);
        const currentAffinity = this.getAffinity(charId);
        return currentAffinity >= requiredAffinity;
    }

    // =========================================================================
    // 프리토킹 해금 관련 메서드
    // =========================================================================

    /**
     * 캐릭터의 갤러리 프리토킹이 해금되었는지 확인
     * TRUE LOVE 엔딩 클리어 시 GameEngine에서 설정됨
     *
     * @param {string} charId - 캐릭터 ID (예: 'seyoun')
     * @returns {boolean} 해금 여부
     */
    isFreeTalkUnlocked(charId) {
        this.refresh();
        return this.data.characters?.[charId]?.trueEndingCleared || false;
    }

    /**
     * 저장된 플레이어 이름 가져오기
     * TRUE LOVE 엔딩 클리어 시 GameEngine에서 저장됨
     *
     * @returns {string|null} 플레이어 이름 또는 null
     */
    getPlayerName() {
        this.refresh();
        return this.data.playerName || null;
    }

    // =========================================================================
    // 해금 상태 확인/변경
    // =========================================================================

    /**
     * 특정 항목의 해금 여부 확인
     * 
     * @param {string} type - 항목 유형 ('cg' 또는 'bgm')
     * @param {string} id - 항목 ID (예: 'nurse_home_event1', 'intro')
     * @returns {boolean} 해금되었으면 true
     * 
     * @example
     * if (progress.isUnlocked('cg', 'nurse_home_event1')) {
     *   // CG 해금됨 - 이미지 표시
     * }
     */
    isUnlocked(type, id) {
        this.refresh();
        return this.data[type]?.[id]?.unlocked || false;
    }

    /**
     * CG 해금 (게임에서 CG 배경 도달 시 호출)
     * 
     * 배경 이미지 경로에서 CG ID를 추출하여 해금 상태를 저장
     * main.js에서 배경 설정 시 호출됨
     * 
     * @param {string} cgId - CG 고유 식별자 (예: 'nurse_home_event1')
     * @returns {boolean} 새로 해금되었으면 true, 이미 해금되어 있었으면 false
     * 
     * @example
     * // 게임에서 CG 장면에 도달했을 때
     * if (progress.unlockCG('nurse_home_event1')) {
     *   console.log('새로운 CG 해금!');
     * }
     */
    unlockCG(cgId) {
        this.refresh();

        // CG 객체가 없으면 생성
        if (!this.data.cg) {
            this.data.cg = {};
        }

        // 이미 해금된 경우 false 반환
        if (this.data.cg[cgId]?.unlocked) {
            return false;
        }

        // CG 해금
        this.data.cg[cgId] = {
            unlocked: true,
            unlockedAt: Date.now()
        };

        this.save();
        console.log(`[GalleryProgress] CG 해금: ${cgId}`);
        return true;
    }

    /**
     * 배경 이미지 경로에서 CG ID 추출
     * 
     * CG 이미지 경로가 'assets/images/cg/' 또는 'assets/images/background/'에 있고
     * GalleryData.cg에 등록된 ID와 매칭되면 해당 ID를 반환
     * 
     * @param {string} bgPath - 배경 이미지 경로
     * @returns {string|null} CG ID 또는 null
     * 
     * @example
     * getCGIdFromPath('assets/images/background/nurse_home_event1.png');
     * // 'nurse_home_event1'
     */
    getCGIdFromPath(bgPath) {
        if (!bgPath) return null;

        // 파일명 추출 (확장자 제외)
        const filename = bgPath.split('/').pop().replace(/\.[^.]+$/, '');

        // GalleryData에서 해당 ID가 존재하는지 확인
        const allCGIds = GalleryData.getAllCGIds();

        // 파일명이 CG ID와 일치하면 반환
        if (allCGIds.has(filename)) {
            return filename;
        }

        // '_thumb' 접미사 제거 후 다시 확인
        const baseFilename = filename.replace(/_thumb$/, '');
        if (allCGIds.has(baseFilename)) {
            return baseFilename;
        }

        return null;
    }
}

// ============================================================================
// 전역 함수 (하위 호환성)
// ============================================================================
// main.js 등 다른 스크립트에서 사용할 수 있도록 전역으로 노출
// 기존 코드와의 호환성을 위해 유지

/**
 * 전역 GalleryProgress 인스턴스
 * 다른 스크립트에서 window.galleryProgress로 접근 가능
 */
window.GalleryProgress = GalleryProgress;

/**
 * CG 해금 함수 (전역)
 * main.js에서 배경 설정 시 호출됨
 * 
 * @param {string} cgId - CG ID
 * @returns {boolean} 새로 해금되었으면 true
 */
window.unlockCG = function (cgId) {
    if (window.galleryProgressInstance) {
        return window.galleryProgressInstance.unlockCG(cgId);
    }
    // 인스턴스가 없으면 임시로 생성하여 해금
    const temp = new GalleryProgress();
    return temp.unlockCG(cgId);
};

/**
 * 배경 경로에서 CG ID 추출 (전역)
 * 
 * @param {string} bgPath - 배경 이미지 경로
 * @returns {string|null} CG ID 또는 null
 */
window.getCGIdFromPath = function (bgPath) {
    if (window.galleryProgressInstance) {
        return window.galleryProgressInstance.getCGIdFromPath(bgPath);
    }
    const temp = new GalleryProgress();
    return temp.getCGIdFromPath(bgPath);
};
