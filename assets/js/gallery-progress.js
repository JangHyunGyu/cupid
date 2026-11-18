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
 *       currentAffinity: 72,       // 갤러리 프리토킹 현재 호감도 (-100~100)
 *       freeTalkCount: 50,         // 프리토킹 횟수
 *       galleryIncident: {         // 갤러리 프리토킹 관계 사건 상태
 *         completedTurns: 120,
 *         quietTurns: 20,
 *         activeIncident: null
 *       }
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

let cupidGalleryAccepted = null;

function cupidGalleryMac(text) {
    let hash = 2166136261;
    for (let i = 0; i < text.length; i++) {
        hash ^= text.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(16).padStart(8, '0');
}

function cupidGalleryAffinityText(data) {
    const characters = ((data === null || data === void 0 ? void 0 : data.characters)) || {};
    return Object.keys(characters).sort().map(id => {
        const row = characters[id] || {};
        return `${id}:${Number(row.maxAffinity) || 0}:${Number(row.currentAffinity) || 0}`;
    }).join('|');
}

function cupidGalleryUnlockText(data) {
    const characters = ((data === null || data === void 0 ? void 0 : data.characters)) || {};
    const chars = Object.keys(characters).sort().map(id => {
        const row = characters[id] || {};
        return `${id}:${Number(row.freeTalkCount) || 0}:${row.unlocked ? 1 : 0}:${row.met ? 1 : 0}`;
    }).join('|');
    const ids = bucket => Object.keys(bucket || {}).filter(id => { var __oc0; return (
((__oc0 = bucket[id]) === null || __oc0 === void 0 ? void 0 : __oc0.unlocked)
); }).sort().join(',');
    return `${chars}#${ids(((data === null || data === void 0 ? void 0 : data.cg)))}#${ids(((data === null || data === void 0 ? void 0 : data.endings)))}#${ids(((data === null || data === void 0 ? void 0 : data.bgm)))}`;
}

function cupidGallerySeal(data, version) {
    const body = version >= 2
        ? `${cupidGalleryAffinityText(data)}#${cupidGalleryUnlockText(data)}`
        : cupidGalleryAffinityText(data);
    return cupidGalleryMac(`cupid-gallery-seal-v${version}:k9Qm4rV2pL8sN1wX6cH3dF0|${body}`);
}

function cupidGallerySealMatches(data) {
    if (!((data === null || data === void 0 ? void 0 : data.affinitySeal))) return !((data === null || data === void 0 ? void 0 : data.affinitySealed));
    const version = Number(data.affinitySealVersion) || 1;
    return data.affinitySeal === cupidGallerySeal(data, version);
}

function cupidGalleryWriteAllowed() {
    return /(?:SceneRenderer|GameEngine|UIManager|sound|FreeTalkSystem|gallery-freetalk)\.js/.test(new Error().stack || '');
}

function cupidGalleryStripRewards(data) {
    for (const row of Object.values(((data === null || data === void 0 ? void 0 : data.characters)) || {})) {
        if (!row || typeof row !== 'object') continue;
        row.maxAffinity = 0;
        row.currentAffinity = 0;
        row.freeTalkCount = 0;
        row.unlocked = false;
    }
    data.cg = {};
    data.endings = {};
    data.bgm = { intro: { unlocked: true } };
}

function cupidGalleryStamp(data) {
    data.affinitySealed = true;
    data.affinitySealVersion = 2;
    data.affinitySeal = cupidGallerySeal(data, 2);
}

function cupidGalleryRemember(data) {
    cupidGalleryAccepted = JSON.parse(JSON.stringify({
        characters: data.characters || {},
        cg: data.cg || {},
        endings: data.endings || {},
        bgm: data.bgm || {}
    }));
}

function cupidGalleryClampGrowth(data) { var __oc1, __oc2, __oc3, __oc4, __oc5, __oc6, __oc7, __oc8, __oc9, __oc10;
    const accepted = cupidGalleryAccepted;
    if (!accepted || cupidGalleryWriteAllowed()) return;
    for (const [id, row] of Object.entries(data.characters || {})) {
        if (!row || typeof row !== 'object') continue;
        const prev = (((__oc1 = accepted.characters) === null || __oc1 === void 0 ? void 0 : __oc1[id]));
        if (!prev) {
            row.maxAffinity = 0;
            row.currentAffinity = 0;
            row.freeTalkCount = 0;
            row.unlocked = false;
            row.met = false;
            continue;
        }
        if ((Number(row.maxAffinity) || 0) > (Number(prev.maxAffinity) || 0)) row.maxAffinity = prev.maxAffinity || 0;
        if ((Number(row.currentAffinity) || 0) > (Number(prev.currentAffinity) || 0)) row.currentAffinity = prev.currentAffinity || 0;
        if ((Number(row.freeTalkCount) || 0) > (Number(prev.freeTalkCount) || 0)) row.freeTalkCount = prev.freeTalkCount || 0;
        if (row.unlocked && !prev.unlocked) row.unlocked = false;
        if (row.met && !prev.met) row.met = false;
    }
    for (const id of Object.keys(data.cg || {})) {
        if ((((__oc2 = data.cg[id]) === null || __oc2 === void 0 ? void 0 : __oc2.unlocked)) && !(((__oc4 = (__oc3 = accepted.cg) === null || __oc3 === void 0 ? void 0 : __oc3[id]) === null || __oc4 === void 0 ? void 0 : __oc4.unlocked))) delete data.cg[id];
    }
    for (const id of Object.keys(data.endings || {})) {
        if ((((__oc5 = data.endings[id]) === null || __oc5 === void 0 ? void 0 : __oc5.unlocked)) && !(((__oc7 = (__oc6 = accepted.endings) === null || __oc6 === void 0 ? void 0 : __oc6[id]) === null || __oc7 === void 0 ? void 0 : __oc7.unlocked))) delete data.endings[id];
    }
    for (const id of Object.keys(data.bgm || {})) {
        if (id !== 'intro' && (((__oc8 = data.bgm[id]) === null || __oc8 === void 0 ? void 0 : __oc8.unlocked)) && !(((__oc10 = (__oc9 = accepted.bgm) === null || __oc9 === void 0 ? void 0 : __oc9[id]) === null || __oc10 === void 0 ? void 0 : __oc10.unlocked))) delete data.bgm[id];
    }
}

function cupidGalleryPersist(data) {
    window.CupidStorage.setItem('cupid_gallery', JSON.stringify(data));
}

window.CupidGalleryStore = {
    sanitize(data) {
        if (!data || typeof data !== 'object') return data;
        if (data.affinitySeal && !cupidGallerySealMatches(data)) {
            cupidGalleryStripRewards(data);
            cupidGalleryStamp(data);
            cupidGalleryPersist(data);
        }
        cupidGalleryRemember(data);
        return data;
    },
    commit(data) {
        if (!data || typeof data !== 'object') return data;
        if (!cupidGalleryAccepted) this.sanitize(data);
        cupidGalleryClampGrowth(data);
        cupidGalleryStamp(data);
        cupidGalleryRemember(data);
        cupidGalleryPersist(data);
        return data;
    }
};

class GalleryProgress {
    // =========================================================================
    // 생성자 및 초기화
    // =========================================================================

    /**
     * GalleryProgress 생성자
     * localStorage 키를 설정하고 데이터를 로드합니다.
     */
    constructor() { var __oc11, __oc12, __oc13, __oc14;
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

        /**
         * 로컬 개발 주소에서만 허용하는 갤러리 미리보기
         * @type {boolean}
         */
        Object.defineProperty(this, 'isAdmin', {
            value: ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname)
                && new URLSearchParams(window.location.search).has('admin'),
            writable: false
        });

        // 초기 데이터 로드
        this.load();
        try {
            (((__oc12 = (__oc11 = window.CupidMedia) === null || __oc11 === void 0 ? void 0 : __oc11.syncFromProgressObject) === null || __oc12 === void 0 ? void 0 : __oc12.call(__oc11, this.data)));
            (((__oc14 = (__oc13 = window.CupidMedia) === null || __oc13 === void 0 ? void 0 : __oc13.migrateFromLocalGallery) === null || __oc14 === void 0 ? void 0 : __oc14.call(__oc13)));
        } catch (_) {}
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
    load() { var __oc15;
        let saved = null;
        try {
            saved = window.CupidStorage.getItem(this.storageKey);
        } catch (e) {
            // 시크릿 모드 등 localStorage 접근 차단 시
            console.warn('[GalleryProgress] localStorage 접근 불가, 기본값 사용');
        }
        let needsReset = false;

        if (saved) {
            try {
                const parsed = JSON.parse(saved);

                // 버전 체크: 버전이 없거나 현재 버전보다 낮으면 리셋
                if (!parsed.version || parsed.version < GalleryData.VERSION) {
                    needsReset = true;
                    console.log('[GalleryProgress] 데이터 버전 업데이트로 인해 초기화됩니다.');
                } else {
                    this.data = window.CupidGalleryStore.sanitize(parsed);
                    // trueEndingCleared → perfectEndingCleared 마이그레이션
                    this._migratePerfectEndingKey();
                    // 기존 100점 및 퍼펙트 전용 해금을 새 기준에 맞춰 1회 재조정
                    this._migrateAffinityRebalance();
                    this._migrateEndingLedger();
                    // 기존 최고 호감도를 갤러리 프리토킹의 최초 현재값으로 사용
                    this._migrateCurrentAffinity();
                    return this.data;
                }
            } catch (e) {
                console.error('[GalleryProgress] 데이터 파싱 오류:', e);
                (((__oc15 = window.reportCupidCaughtError) === null || __oc15 === void 0 ? void 0 : __oc15.call(window, e, {
        source: 'cupid-gallery-progress',
        errorType: 'gallery_progress_parse_failed',
        context: { storageKey: this.storageKey, savedLength: saved.length }
    })));
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
     * trueEndingCleared → perfectEndingCleared 키 마이그레이션
     * 기존 유저 데이터 호환성 유지
     * @private
     */
    _migratePerfectEndingKey() { var __oc16;
        if (!(((__oc16 = this.data) === null || __oc16 === void 0 ? void 0 : __oc16.characters))) return;
        let migrated = false;
        for (const charData of Object.values(this.data.characters)) {
            if (charData.trueEndingCleared !== undefined) {
                charData.perfectEndingCleared = charData.trueEndingCleared;
                delete charData.trueEndingCleared;
                migrated = true;
            }
        }
        if (migrated) {
            this.save();
            console.log('[GalleryProgress] trueEndingCleared → perfectEndingCleared 마이그레이션 완료');
        }
    }

    /** @private */
    _migrateAffinityRebalance() { var __oc17;
        const result = (((__oc17 = GalleryData.migrateLegacyPerfectAffinity) === null || __oc17 === void 0 ? void 0 : __oc17.call(GalleryData, this.data)))
            || { changed: false, downgradedCharacters: [] };
        if (result.changed) {
            this.save();
            if (result.downgradedCharacters.length > 0) {
                console.log(`[GalleryProgress] 기존 100점 기록 재조정 완료: ${result.downgradedCharacters.join(', ')}`);
            }
        }
        return result;
    }

    /**
     * 갤러리 프리토킹 현재 호감도 필드 마이그레이션
     * 기존 이용자는 달성한 최고 호감도에서 시작하며, 이후 현재값만 오르내립니다.
     * @private
     */
    _migrateCurrentAffinity() { var __oc18;
        if (!(((__oc18 = this.data) === null || __oc18 === void 0 ? void 0 : __oc18.characters))) return false;

        let migrated = false;
        for (const charData of Object.values(this.data.characters)) {
            if (!charData || typeof charData !== 'object') continue;

            const maxAffinity = Math.max(0, Math.min(100, Number(charData.maxAffinity) || 0));
            const hasSavedCurrent = charData.currentAffinity !== undefined
                && charData.currentAffinity !== null
                && charData.currentAffinity !== '';
            const savedCurrent = Number(charData.currentAffinity);
            const currentAffinity = hasSavedCurrent && Number.isFinite(savedCurrent)
                ? Math.max(-100, Math.min(100, Math.round(savedCurrent)))
                : maxAffinity;

            if (charData.currentAffinity !== currentAffinity) {
                charData.currentAffinity = currentAffinity;
                migrated = true;
            }
        }

        if (migrated) {
            this.save();
            console.log('[GalleryProgress] 갤러리 현재 호감도 필드 마이그레이션 완료');
        }
        return migrated;
    }

    _migrateEndingLedger() { var __oc19, __oc20, __oc21;
        if (!this.data || typeof this.data !== 'object') return false;
        if (!this.data.endings || typeof this.data.endings !== 'object') this.data.endings = {};
        const legacyCgMap = {
            ending_perfect_seoyeon: 'perfect_seoyeon', ending_perfect_yuna: 'perfect_yuna', ending_perfect_dain: 'perfect_dain',
            ending_true_seoyeon: 'true_seoyeon', ending_true_yuna: 'true_yuna', ending_true_dain: 'true_dain',
            ending_good_seoyeon: 'good_seoyeon', ending_good_yuna: 'good_yuna', ending_good_dain: 'good_dain',
            ending_confess_fail_seoyeon: 'confess_fail_seoyeon', ending_confess_fail_yuna: 'confess_fail_yuna', ending_confess_fail_dain: 'confess_fail_dain',
            ending_friend: 'friend', ending_mayhem: 'mayhem', ending_harem: 'unresolved', ending_alone: 'alone',
            ending_perfect_teacher: 'perfect_teacher', ending_true_teacher: 'true_teacher', ending_good_teacher: 'good_teacher', ending_bittersweet_teacher: 'bittersweet_teacher',
            ending_perfect_nurse: 'perfect_nurse', ending_true_nurse: 'true_nurse', ending_good_nurse: 'good_nurse', ending_bittersweet_nurse: 'bittersweet_nurse'
        };
        let changed = false;
        for (const [cgId, endingId] of Object.entries(legacyCgMap)) {
            if (!(((__oc20 = (__oc19 = this.data.cg) === null || __oc19 === void 0 ? void 0 : __oc19[cgId]) === null || __oc20 === void 0 ? void 0 : __oc20.unlocked)) || (((__oc21 = this.data.endings[endingId]) === null || __oc21 === void 0 ? void 0 : __oc21.unlocked))) continue;
            this.data.endings[endingId] = {
                unlocked: true,
                unlockedAt: this.data.cg[cgId].unlockedAt || Date.now(),
                migratedFromCG: true
            };
            changed = true;
        }
        if (changed) this.save();
        return changed;
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
    _createDefaultData() { var __oc22;
        return {
            version: GalleryData.VERSION,
            affinityRebalanceVersion: GalleryData.AFFINITY_REBALANCE_VERSION,
            appliedAffinityCorrections: (((__oc22 = window.CupidAffinityCorrections) === null || __oc22 === void 0 ? void 0 : __oc22.ids())) || [],
            characters: {
                seyoun: { met: false, maxAffinity: 0, currentAffinity: 0, galleryFreeTalkAffinityInitialized: false, freeTalkCount: 0, galleryIncident: this._createDefaultGalleryIncidentState(), relationshipAftermath: null },
                yuna: { met: false, maxAffinity: 0, currentAffinity: 0, galleryFreeTalkAffinityInitialized: false, freeTalkCount: 0, galleryIncident: this._createDefaultGalleryIncidentState(), relationshipAftermath: null },
                dain: { met: false, maxAffinity: 0, currentAffinity: 0, galleryFreeTalkAffinityInitialized: false, freeTalkCount: 0, galleryIncident: this._createDefaultGalleryIncidentState(), relationshipAftermath: null },
                teacher: { met: false, maxAffinity: 0, currentAffinity: 0, galleryFreeTalkAffinityInitialized: false, freeTalkCount: 0, galleryIncident: this._createDefaultGalleryIncidentState(), relationshipAftermath: null },
                nurse: { met: false, maxAffinity: 0, currentAffinity: 0, galleryFreeTalkAffinityInitialized: false, freeTalkCount: 0, galleryIncident: this._createDefaultGalleryIncidentState(), relationshipAftermath: null }
            },
            cg: {},                           // CG는 기본적으로 없음 (게임 진행 시 추가)
            endings: {},
            bgm: {
                intro: { unlocked: true }      // intro BGM만 기본 해금
            }
        };
    }

    /**
     * 현재 진행 상태를 localStorage에 저장
     */
    _affinitySealText() { var __oc23;
        const characters = (((__oc23 = this.data) === null || __oc23 === void 0 ? void 0 : __oc23.characters)) || {};
        return Object.keys(characters).sort().map(id => {
            const row = characters[id] || {};
            return `${id}:${Number(row.maxAffinity) || 0}:${Number(row.currentAffinity) || 0}`;
        }).join('|');
    }

    _stampAffinitySeal() {
        if (!this.data) return;
        let hash = 2166136261;
        const text = `cupid-gallery-seal-v1:k9Qm4rV2pL8sN1wX6cH3dF0|${this._affinitySealText()}`;
        for (let i = 0; i < text.length; i++) {
            hash ^= text.charCodeAt(i);
            hash = Math.imul(hash, 16777619);
        }
        this.data.affinitySeal = (hash >>> 0).toString(16).padStart(8, '0');
    }

    _affinitySealMatches() { var __oc24, __oc25;
        if (!(((__oc24 = this.data) === null || __oc24 === void 0 ? void 0 : __oc24.affinitySeal))) return !(((__oc25 = this.data) === null || __oc25 === void 0 ? void 0 : __oc25.affinitySealed));
        const expected = this.data.affinitySeal;
        this._stampAffinitySeal();
        return this.data.affinitySeal === expected;
    }

    _clearUnsealedAffinity() { var __oc26;
        for (const row of Object.values((((__oc26 = this.data) === null || __oc26 === void 0 ? void 0 : __oc26.characters)) || {})) {
            if (!row || typeof row !== 'object') continue;
            row.maxAffinity = 0;
            row.currentAffinity = 0;
        }
        this.data.affinitySealed = true;
        this._stampAffinitySeal();
        this.save();
    }

    save() { var __oc27;
        try {
            window.CupidGalleryStore.commit(this.data);
        } catch (e) {
            (((__oc27 = window.reportCupidCaughtError) === null || __oc27 === void 0 ? void 0 : __oc27.call(window, e, {
        source: 'cupid-gallery-progress',
        errorType: 'gallery_progress_save_failed',
        context: { storageKey: this.storageKey }
    })));
        }
    }

    /**
     * 진행 데이터를 최신 상태로 다시 읽기
     * 다른 탭에서 변경된 경우 등에 사용
     * 
     * @returns {Object} 현재 저장된 진행 데이터
     */
    refresh() { var __oc28;
        let saved = null;
        try { saved = window.CupidStorage.getItem(this.storageKey); } catch (e) {}
        if (saved) {
            try {
                this.data = window.CupidGalleryStore.sanitize(JSON.parse(saved));
                this._migratePerfectEndingKey();
                this._migrateAffinityRebalance();
                this._migrateEndingLedger();
                this._migrateCurrentAffinity();
            } catch (e) {
                // 파싱 실패 시 현재 데이터 유지
                (((__oc28 = window.reportCupidCaughtError) === null || __oc28 === void 0 ? void 0 : __oc28.call(window, e, {
        source: 'cupid-gallery-progress',
        errorType: 'gallery_progress_refresh_parse_failed',
        context: { storageKey: this.storageKey, savedLength: saved.length }
    })));
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
    isMet(charId) { var __oc29, __oc30;
        if (this.isAdmin) return true;
        this.refresh();
        return (((__oc30 = (__oc29 = this.data.characters) === null || __oc29 === void 0 ? void 0 : __oc29[charId]) === null || __oc30 === void 0 ? void 0 : __oc30.met)) || false;
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
    getAffinity(charId) { var __oc31, __oc32;
        if (this.isAdmin) return 100;
        this.refresh();
        return (((__oc32 = (__oc31 = this.data.characters) === null || __oc31 === void 0 ? void 0 : __oc31[charId]) === null || __oc32 === void 0 ? void 0 : __oc32.maxAffinity)) || 0;
    }

    /**
     * 갤러리 프리토킹의 현재 호감도 가져오기
     * 해금용 최고 호감도와 별개이며 대화에 따라 -100~100 범위에서 변합니다.
     *
     * @param {string} charId - 캐릭터 ID
     * @returns {number} 현재 호감도 (-100 ~ 100)
     */
    getCurrentAffinity(charId) { var __oc33;
        this.refresh();
        const charData = (((__oc33 = this.data.characters) === null || __oc33 === void 0 ? void 0 : __oc33[charId]));
        if (!charData) return 0;

        const hasSavedCurrent = charData.currentAffinity !== undefined
            && charData.currentAffinity !== null
            && charData.currentAffinity !== '';
        const savedCurrent = Number(charData.currentAffinity);
        if (hasSavedCurrent && Number.isFinite(savedCurrent)) {
            return Math.max(-100, Math.min(100, Math.round(savedCurrent)));
        }
        return Math.max(0, Math.min(100, Number(charData.maxAffinity) || 0));
    }

    /**
     * 갤러리 프리토킹을 처음 열 때 현재 호감도를 달성한 최고 호감도로 초기화합니다.
     * 이미 대화를 진행한 기존 이용자는 실제로 변한 현재값을 그대로 보존합니다.
     *
     * @param {string} charId - 캐릭터 ID
     * @param {{hasConversation?: boolean}} options - 저장된 갤러리 대화 존재 여부
     * @returns {number} 초기화 또는 보존된 현재 호감도
     */
    initializeCurrentAffinityForFreeTalk(charId, { hasConversation = false } = {}) { var __oc34, __oc35;
        this.refresh();
        const charData = (((__oc34 = this.data.characters) === null || __oc34 === void 0 ? void 0 : __oc34[charId]));
        if (!charData) return 0;

        const maxAffinity = Math.max(0, Math.min(100, Number(charData.maxAffinity) || 0));
        const savedCurrent = Number(charData.currentAffinity);
        const currentAffinity = Number.isFinite(savedCurrent)
            ? Math.max(-100, Math.min(100, Math.round(savedCurrent)))
            : maxAffinity;

        if (charData.galleryFreeTalkAffinityInitialized === true) {
            return currentAffinity;
        }

        const completedTurns = Math.max(0, Number((((__oc35 = charData.galleryIncident) === null || __oc35 === void 0 ? void 0 : __oc35.completedTurns))) || 0);
        const hasChangedCurrentAffinity = Number.isFinite(savedCurrent) && currentAffinity !== 0;
        const hasPriorGalleryTalk = Boolean(hasConversation)
            || completedTurns > 0
            || hasChangedCurrentAffinity;
        const initializedAffinity = hasPriorGalleryTalk ? currentAffinity : maxAffinity;

        charData.currentAffinity = initializedAffinity;
        charData.galleryFreeTalkAffinityInitialized = true;
        this.save();

        return initializedAffinity;
    }

    /**
     * 갤러리 프리토킹 현재 호감도 변경
     * 변화량은 공용 정책에 따라 -50~+5로 제한하고, 최고 기록은 상승할 때만 갱신합니다.
     *
     * @param {string} charId - 캐릭터 ID
     * @param {number} amount - 요청 변화량
     * 실제 값은 -100~100에서 멈추지만 requestedChange는 상·하한에서도 유지되어
     * 변동 이펙트와 효과음을 표시할 수 있습니다.
     *
     * @returns {{value:number, change:number, requestedChange:number, maxAffinity:number}}
     */
    changeCurrentAffinity(charId, amount) { var __oc36, __oc37, __oc38, __oc39, __oc40, __oc41, __oc42;
        if (!/gallery-freetalk\.js/.test(new Error().stack || '')) {
            const current = Number((((__oc38 = (__oc37 = (__oc36 = this.data) === null || __oc36 === void 0 ? void 0 : __oc36.characters) === null || __oc37 === void 0 ? void 0 : __oc37[charId]) === null || __oc38 === void 0 ? void 0 : __oc38.currentAffinity))) || 0;
            return { value: current, change: 0, requestedChange: 0, maxAffinity: Number((((__oc41 = (__oc40 = (__oc39 = this.data) === null || __oc39 === void 0 ? void 0 : __oc39.characters) === null || __oc40 === void 0 ? void 0 : __oc40[charId]) === null || __oc41 === void 0 ? void 0 : __oc41.maxAffinity))) || 0 };
        }
        this.refresh();
        const charData = (((__oc42 = this.data.characters) === null || __oc42 === void 0 ? void 0 : __oc42[charId]));
        if (!charData) return { value: 0, change: 0, requestedChange: 0, maxAffinity: 0 };

        const safeChange = window.CupidFreeTalkCore.normalizeAffinityChange(amount);
        const savedCurrent = Number(charData.currentAffinity);
        const current = Number.isFinite(savedCurrent)
            ? Math.max(-100, Math.min(100, Math.round(savedCurrent)))
            : Math.max(0, Math.min(100, Number(charData.maxAffinity) || 0));
        const value = Math.max(-100, Math.min(100, current + safeChange));
        const actualChange = value - current;
        const previousMax = Math.max(0, Math.min(100, Number(charData.maxAffinity) || 0));
        const maxAffinity = Math.max(previousMax, value);

        charData.currentAffinity = value;
        charData.galleryFreeTalkAffinityInitialized = true;
        charData.maxAffinity = maxAffinity;
        this.save();

        return { value, change: actualChange, requestedChange: safeChange, maxAffinity };
    }

    /**
     * 프리토킹 횟수 가져오기
     * 
     * @param {string} charId - 캐릭터 ID
     * @returns {number} 프리토킹 횟수
     */
    getFreeTalkCount(charId) { var __oc43, __oc44;
        this.refresh();
        return (((__oc44 = (__oc43 = this.data.characters) === null || __oc43 === void 0 ? void 0 : __oc43[charId]) === null || __oc44 === void 0 ? void 0 : __oc44.freeTalkCount)) || 0;
    }

    getLastOuting(charId) { var __oc45, __oc46;
        this.refresh();
        return (((__oc46 = (__oc45 = this.data.characters) === null || __oc45 === void 0 ? void 0 : __oc45[charId]) === null || __oc46 === void 0 ? void 0 : __oc46.lastOuting)) || '';
    }

    setLastOuting(charId, placeId) {
        this.refresh();
        if (!this.data.characters[charId]) return;
        this.data.characters[charId].lastOuting = String(placeId || '');
        this.save();
    }

    /**
     * 갤러리 프리토킹 관계 사건 기본 상태
     * 사건 빈도는 세션이 아니라 캐릭터별 정상 완료 턴으로 계산합니다.
     *
     * @private
     * @returns {Object}
     */
    _createDefaultGalleryIncidentState() {
        return {
            version: 2,
            completedTurns: 0,
            quietTurns: 0,
            lastCrisisTurn: null,
            activeIncident: null,
            recentIncidents: [],
            negativeSignals: []
        };
    }

    /**
     * 캐릭터별 갤러리 관계 사건 상태를 정규화해 가져옵니다.
     * 기존 저장 데이터에는 필드가 없으므로 읽는 시점에 무손실로 추가합니다.
     *
     * @param {string} charId
     * @returns {Object}
     */
    getGalleryIncidentState(charId) { var __oc47, __oc48;
        this.refresh();
        const charData = (((__oc47 = this.data.characters) === null || __oc47 === void 0 ? void 0 : __oc47[charId]));
        if (!charData) return this._createDefaultGalleryIncidentState();

        const rawState = charData.galleryIncident || this._createDefaultGalleryIncidentState();
        const normalized = (((__oc48 = window.CupidFreeTalkCore) === null || __oc48 === void 0 ? void 0 : __oc48.normalizeGalleryIncidentState))
            ? window.CupidFreeTalkCore.normalizeGalleryIncidentState(rawState)
            : rawState;
        if (JSON.stringify(charData.galleryIncident || null) !== JSON.stringify(normalized)) {
            charData.galleryIncident = normalized;
            this.save();
        }
        return normalized;
    }

    /**
     * 캐릭터별 갤러리 관계 사건 상태를 저장합니다.
     *
     * @param {string} charId
     * @param {Object} state
     * @returns {Object}
     */
    setGalleryIncidentState(charId, state) { var __oc49, __oc50;
        this.refresh();
        const charData = (((__oc49 = this.data.characters) === null || __oc49 === void 0 ? void 0 : __oc49[charId]));
        if (!charData) return this._createDefaultGalleryIncidentState();

        const normalized = (((__oc50 = window.CupidFreeTalkCore) === null || __oc50 === void 0 ? void 0 : __oc50.normalizeGalleryIncidentState))
            ? window.CupidFreeTalkCore.normalizeGalleryIncidentState(state)
            : state;
        charData.galleryIncident = normalized;
        this.save();
        return normalized;
    }

    /**
     * 캐릭터별로 아직 풀리지 않은 감정의 여운을 가져옵니다.
     * 기존 저장 데이터는 필드가 없어도 그대로 호환됩니다.
     *
     * @param {string} charId
     * @returns {Object|null}
     */
    getRelationshipAftermath(charId) { var __oc51, __oc52;
        this.refresh();
        const charData = (((__oc51 = this.data.characters) === null || __oc51 === void 0 ? void 0 : __oc51[charId]));
        if (!charData) return null;

        const normalized = (((__oc52 = window.CupidFreeTalkCore) === null || __oc52 === void 0 ? void 0 : __oc52.normalizeRelationshipAftermath))
            ? window.CupidFreeTalkCore.normalizeRelationshipAftermath(charData.relationshipAftermath)
            : (charData.relationshipAftermath || null);
        if (JSON.stringify(charData.relationshipAftermath || null) !== JSON.stringify(normalized)) {
            charData.relationshipAftermath = normalized;
            this.save();
        }
        return normalized;
    }

    /**
     * 캐릭터별 감정의 여운을 저장합니다.
     *
     * @param {string} charId
     * @param {Object|null} state
     * @returns {Object|null}
     */
    setRelationshipAftermath(charId, state) { var __oc53, __oc54;
        this.refresh();
        const charData = (((__oc53 = this.data.characters) === null || __oc53 === void 0 ? void 0 : __oc53[charId]));
        if (!charData) return null;

        const normalized = (((__oc54 = window.CupidFreeTalkCore) === null || __oc54 === void 0 ? void 0 : __oc54.normalizeRelationshipAftermath))
            ? window.CupidFreeTalkCore.normalizeRelationshipAftermath(state)
            : (state || null);
        charData.relationshipAftermath = normalized;
        this.save();
        return normalized;
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
        if (this.isAdmin) return true;

        // 특별 표정 체크 (bikini)
        if (expressionName === 'bikini') {
            const affinity = this.getAffinity(charId);
            const freeTalkCount = this.getFreeTalkCount(charId);
            const hiddenChars = ['teacher', 'nurse'];
            const threshold = hiddenChars.includes(charId) ? 80 : 100;
            return affinity >= threshold && freeTalkCount >= 30;
        }

        // 일반 표정: 호감도 기준
        const requiredAffinity = expressionName && typeof GalleryData.getExpressionRequirement === 'function'
            ? GalleryData.getExpressionRequirement(charId, expressionName)
            : this.getExpressionRequirement(expressionIndex, totalExpressions);
        const currentAffinity = this.getAffinity(charId);
        return currentAffinity >= requiredAffinity;
    }

    // =========================================================================
    // 프리토킹 해금 관련 메서드
    // =========================================================================

    /**
     * 캐릭터의 갤러리 프리토킹이 해금되었는지 확인
     * PERFECT 엔딩 클리어 시 GameEngine에서 설정됨
     *
     * @param {string} charId - 캐릭터 ID (예: 'seyoun')
     * @returns {boolean} 해금 여부
     */
    isFreeTalkUnlocked(charId) { var __oc55, __oc56;
        if (this.isAdmin) return true;
        this.refresh();
        const perfectEnding = (((__oc56 = (__oc55 = this.data.characters) === null || __oc55 === void 0 ? void 0 : __oc55[charId]) === null || __oc56 === void 0 ? void 0 : __oc56.perfectEndingCleared)) || false;
        if (charId === 'haeun') return perfectEnding && this.getAffinity(charId) >= 100;
        const hiddenChars = ['teacher', 'nurse'];
        const affinityThreshold = hiddenChars.includes(charId) ? 80 : 100;
        const bikiniUnlocked = this.getAffinity(charId) >= affinityThreshold && this.getFreeTalkCount(charId) >= 30;
        return perfectEnding && bikiniUnlocked;
    }

    /**
     * 저장된 플레이어 이름 가져오기
     * 1순위: 갤러리 데이터 (PERFECT 엔딩 시 저장)
     * 2순위: 게임 세이브 데이터 (cupid_save)
     *
     * @returns {string|null} 플레이어 이름 또는 null
     */
    getPlayerName() { var __oc57;
        this.refresh();
        if (this.data.playerName) return this.data.playerName;

        // 갤러리에 없으면 게임 세이브에서 가져오기
        try {
            const save = JSON.parse(window.CupidStorage.getItem('cupid_save') || '{}');
            if ((((__oc57 = save.gameState) === null || __oc57 === void 0 ? void 0 : __oc57.playerName))) return save.gameState.playerName;
        } catch (e) { /* 무시 */ }

        return null;
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
    isUnlocked(type, id) { var __oc58, __oc59;
        if (this.isAdmin) return true;
        this.refresh();
        return (((__oc59 = (__oc58 = this.data[type]) === null || __oc58 === void 0 ? void 0 : __oc58[id]) === null || __oc59 === void 0 ? void 0 : __oc59.unlocked)) || false;
    }

    isEndingUnlocked(id) { var __oc60, __oc61;
        if (this.isAdmin) return true;
        this.refresh();
        return (((__oc61 = (__oc60 = this.data.endings) === null || __oc60 === void 0 ? void 0 : __oc60[id]) === null || __oc61 === void 0 ? void 0 : __oc61.unlocked)) || false;
    }

    getEndingRecord(id) { var __oc62;
        this.refresh();
        return (((__oc62 = this.data.endings) === null || __oc62 === void 0 ? void 0 : __oc62[id])) || null;
    }

    getUnlockedEndingCount() {
        if (this.isAdmin) return GalleryData.endingRoutes.length;
        this.refresh();
        const validIds = new Set(GalleryData.endingRoutes.map(ending => ending.id));
        return Object.entries(this.data.endings || {})
            .filter(([id, value]) => { return (
validIds.has(id) && ((value === null || value === void 0 ? void 0 : value.unlocked))
); })
            .length;
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
    unlockCG(cgId) { var __oc63, __oc64, __oc65, __oc66, __oc67;
        this.refresh();

        // CG 객체가 없으면 생성
        if (!this.data.cg) {
            this.data.cg = {};
        }

        // 이미 해금된 경우 false 반환
        if ((((__oc63 = this.data.cg[cgId]) === null || __oc63 === void 0 ? void 0 : __oc63.unlocked))) {
            return false;
        }

        // CG 해금
        this.data.cg[cgId] = {
            unlocked: true,
            unlockedAt: Date.now()
        };

        this.save();
        if (!(((__oc65 = (__oc64 = this.data.cg) === null || __oc64 === void 0 ? void 0 : __oc64[cgId]) === null || __oc65 === void 0 ? void 0 : __oc65.unlocked))) return false;
        console.log(`[GalleryProgress] CG 해금: ${cgId}`);
        try { (((__oc67 = (__oc66 = window.CupidMedia) === null || __oc66 === void 0 ? void 0 : __oc66.unlockCG) === null || __oc67 === void 0 ? void 0 : __oc67.call(__oc66, cgId))); } catch (_) {}
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
