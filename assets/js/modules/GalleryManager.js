// ============================================================================================
// GalleryManager.js - 갤러리 해금 시스템 모듈
// ============================================================================================
// 이 파일은 main.js에서 분리된 GalleryManager 클래스를 포함합니다.
// 갤러리에서 해금할 수 있는 콘텐츠(캐릭터, CG, BGM)를 관리합니다.
//
// 의존성:
//   - config.js → REGISTERED_CG_IDS (등록된 CG ID 목록, unlockCG에서 사용)
//
// window 노출:
//   - window.GalleryManager : GalleryManager 클래스를 전역에서 사용 가능하게 합니다.
// ============================================================================================

// ============================================================================================
// 🖼️ GalleryManager 클래스 - 갤러리 해금 시스템
// ============================================================================================
// 📌 갤러리에서 해금할 수 있는 콘텐츠들을 관리합니다.
//    캐릭터를 만나거나, 특정 CG를 보거나, BGM을 듣는 등의 이벤트가
//    발생하면 여기에 기록되어 갤러리 페이지에서 확인할 수 있습니다.

/**
 * 갤러리 해금 관리 클래스
 *
 * ▶ 갤러리에서 확인 가능한 것들:
 *   - 캐릭터: 만난 캐릭터 목록, 각 캐릭터의 최대 호감도, 프리토킹 횟수
 *   - CG: 게임 중 본 이벤트 이미지들
 *   - BGM: 게임 중 들은 배경음악
 *
 * ▶ 데이터 저장 위치:
 *   localStorage의 'cupid_gallery' 키에 JSON으로 저장됩니다.
 *   게임 세이브와는 별개로, 뉴게임을 해도 갤러리 해금은 유지됩니다.
 */
class GalleryManager {
    /**
     * @param {string} storageKey - localStorage 키 (기본: 'cupid_gallery')
     */
    constructor(storageKey = 'cupid_gallery') {
        this.storageKey = storageKey;

        /**
         * 데이터 버전 (구조 변경 시 마이그레이션용)
         */
        this.dataVersion = 2;

        /**
         * 캐릭터 이름 → 내부 ID 매핑 테이블
         * - 한국어/영어 이름 모두 같은 캐릭터로 인식하기 위함
         * - 예: '서연' → 'seyoun', 'Seoyeon' → 'seyoun'
         */
        this.charIdMap = {
            'Seoyeon': 'seyoun', 'Yuna': 'yuna', 'Dain': 'dain',
            'Teacher': 'teacher', 'Nurse': 'nurse',
            '서연': 'seyoun', '유나': 'yuna', '다인': 'dain',
            '담임선생님': 'teacher', '보건선생님': 'nurse',
            'Minsu': 'minsu', '민수': 'minsu',
            'Haeun': 'haeun', '하은': 'haeun',
            'Lee Junho': 'junho', '이준호': 'junho', 'イ・ジュンホ': 'junho'
        };
    }

    /**
     * 저장된 갤러리 진행 상황 불러오기
     *
     * @returns {Object} 갤러리 데이터 구조:
     *   {
     *     version: 2,
     *     characters: { seyoun: { unlocked: true, maxAffinity: 50, freeTalkCount: 10 }, ... },
     *     cg: { nurse_home_event1: { unlocked: true }, ... },
     *     bgm: { intro: { unlocked: true }, ... }
     *   }
     */
    getProgress() { var __oc0, __oc1, __oc2, __oc3, __oc4, __oc5, __oc6, __oc7;
        const saved = window.CupidStorage.getItem(this.storageKey);

        // 저장된 데이터가 없으면 기본 구조 반환
        if (!saved) {
            return {
                version: this.dataVersion,
                affinityRebalanceVersion: (((__oc0 = window.GalleryData) === null || __oc0 === void 0 ? void 0 : __oc0.AFFINITY_REBALANCE_VERSION)) || 1,
                appliedAffinityCorrections: (((__oc1 = window.CupidAffinityCorrections) === null || __oc1 === void 0 ? void 0 : __oc1.ids())) || [],
                characters: {},
                cg: {},
                endings: {},
                bgm: { intro: { unlocked: true } }  // 인트로 BGM은 기본 해금
            };
        }

        // 🔧 JSON.parse 에러 핸들링 추가 (데이터 손상 대비)
        try {
            const data = (((__oc2 = window.CupidGalleryStore) === null || __oc2 === void 0 ? void 0 : __oc2.sanitize))
                ? window.CupidGalleryStore.sanitize(JSON.parse(saved))
                : JSON.parse(saved);

            // 구버전 데이터면 버전 정보 추가
            if (!data.version) data.version = this.dataVersion;

            const migration = (((__oc4 = (__oc3 = window.GalleryData) === null || __oc3 === void 0 ? void 0 : __oc3.migrateLegacyPerfectAffinity) === null || __oc4 === void 0 ? void 0 : __oc4.call(__oc3, data)));
            if (((migration === null || migration === void 0 ? void 0 : migration.changed))) this.saveProgress(data);

            return data;
        } catch (e) {
            console.error('[GalleryManager] 갤러리 데이터 파싱 오류:', e);
            (((__oc5 = window.reportCupidCaughtError) === null || __oc5 === void 0 ? void 0 : __oc5.call(window, e, {
        source: 'cupid-gallery-manager',
        errorType: 'gallery_progress_parse_failed',
        context: { storageKey: this.storageKey, savedLength: saved.length }
    })));
            // 손상된 데이터는 무시하고 기본 구조 반환
            return {
                version: this.dataVersion,
                affinityRebalanceVersion: (((__oc6 = window.GalleryData) === null || __oc6 === void 0 ? void 0 : __oc6.AFFINITY_REBALANCE_VERSION)) || 1,
                appliedAffinityCorrections: (((__oc7 = window.CupidAffinityCorrections) === null || __oc7 === void 0 ? void 0 : __oc7.ids())) || [],
                characters: {},
                cg: {},
                endings: {},
                bgm: { intro: { unlocked: true } }
            };
        }
    }

    /**
     * 갤러리 진행 상황 저장
     * @param {Object} progress - 저장할 갤러리 데이터
     */
    saveProgress(progress) { var __oc8, __oc9;
        try {
            if ((((__oc8 = window.CupidGalleryStore) === null || __oc8 === void 0 ? void 0 : __oc8.commit))) {
                window.CupidGalleryStore.commit(progress);
                return;
            }
            window.CupidStorage.setItem(this.storageKey, JSON.stringify(progress));
        } catch (e) {
            console.error('[GalleryManager] 갤러리 데이터 저장 실패:', e);
            (((__oc9 = window.reportCupidCaughtError) === null || __oc9 === void 0 ? void 0 : __oc9.call(window, e, {
        source: 'cupid-gallery-manager',
        errorType: 'gallery_progress_save_failed',
        context: { storageKey: this.storageKey }
    })));
        }
    }

    /**
     * 캐릭터를 만났을 때 호출 - 갤러리에 캐릭터 해금
     * @param {string} charName - 캐릭터 이름 (한국어/영어 모두 가능)
     */
    markCharacterMet(charName) { var __oc10, __oc11, __oc12;
        // 이름을 내부 ID로 변환 (예: '서연' → 'seyoun')
        const charId = this.charIdMap[charName];
        if (!charId) return;  // 등록되지 않은 캐릭터는 무시

        const progress = this.getProgress();

        // 이미 만난 캐릭터면 무시
        if ((((__oc10 = progress.characters[charId]) === null || __oc10 === void 0 ? void 0 : __oc10.met))) return;

        // 캐릭터 데이터 초기화 및 만남 기록
        if (!progress.characters[charId]) progress.characters[charId] = {};
        progress.characters[charId].met = true;
        progress.characters[charId].metAt = Date.now();

        this.saveProgress(progress);
        console.log(`[GalleryManager] 캐릭터 만남: ${charId}`);
        try { (((__oc12 = (__oc11 = window.CupidMedia) === null || __oc11 === void 0 ? void 0 : __oc11.unlockCharacterMet) === null || __oc12 === void 0 ? void 0 : __oc12.call(__oc11, charId))); } catch (_) {}
    }

    /**
     * 최대 호감도 갱신 - 갤러리 통계용
     * @param {string} charKey - 캐릭터 키 (예: "Seoyeon")
     * @param {number} currentAffinity - 현재 호감도
     */
    updateMaxAffinity(charKey, currentAffinity) { var __oc13, __oc14, __oc15, __oc16, __oc17;
        const charId = this.charIdMap[charKey];
        if (!charId) return;

        const progress = this.getProgress();
        if (!progress.characters[charId]) progress.characters[charId] = {};

        // 현재 기록된 최대 호감도보다 높을 때만 갱신
        const storyAffinity = Number((((__oc15 = (__oc14 = (__oc13 = window.gameEngine) === null || __oc13 === void 0 ? void 0 : __oc13.stateManager) === null || __oc14 === void 0 ? void 0 : __oc14.getAffinity) === null || __oc15 === void 0 ? void 0 : __oc15.call(__oc14, charKey))));
        const cappedAffinity = Number.isFinite(storyAffinity) ? Math.min(currentAffinity, storyAffinity) : currentAffinity;
        const currentMax = progress.characters[charId].maxAffinity || 0;
        if (cappedAffinity > currentMax) {
            progress.characters[charId].maxAffinity = cappedAffinity;
            this.saveProgress(progress);
            console.log(`[GalleryManager] 최대 호감도: ${charId} = ${currentAffinity}`);
            try { (((__oc17 = (__oc16 = window.CupidMedia) === null || __oc16 === void 0 ? void 0 : __oc16.syncFromProgressObject) === null || __oc17 === void 0 ? void 0 : __oc17.call(__oc16, progress))); } catch (_) {}
        }
    }

    /**
     * 캐릭터 갤러리 완전 해금 (호감도 100 달성 등 특별 조건)
     * @param {string} charKey - 캐릭터 키
     */
    unlockCharacter(charKey) { var __oc18;
        const charId = this.charIdMap[charKey];
        if (!charId) return;

        const progress = this.getProgress();

        // 이미 해금됐으면 무시
        if ((((__oc18 = progress.characters[charId]) === null || __oc18 === void 0 ? void 0 : __oc18.unlocked))) return;

        // 캐릭터 데이터가 없으면 초기화
        if (!progress.characters[charId]) {
            progress.characters[charId] = { met: true, metAt: Date.now() };
        }
        progress.characters[charId].unlocked = true;
        progress.characters[charId].unlockedAt = Date.now();

        this.saveProgress(progress);
        console.log(`[GalleryManager] 캐릭터 해금: ${charId}`);
    }

    /**
     * CG(이벤트 그림) 해금
     * - REGISTERED_CG_IDS에 등록된 CG만 해금 가능
     *
     * @param {string} cgId - CG 파일명 (확장자 제외)
     */
    unlockCG(cgId) { var __oc19, __oc20, __oc21, __oc22;
        // 등록된 CG인지 확인
        if (!REGISTERED_CG_IDS.has(cgId)) return;

        const progress = this.getProgress();

        // 이미 해금됐으면 무시
        if ((((__oc19 = progress.cg[cgId]) === null || __oc19 === void 0 ? void 0 : __oc19.unlocked))) return;

        progress.cg[cgId] = { unlocked: true, unlockedAt: Date.now() };
        this.saveProgress(progress);
        if (!(((__oc20 = progress.cg[cgId]) === null || __oc20 === void 0 ? void 0 : __oc20.unlocked))) return;
        console.log(`[GalleryManager] CG 해금: ${cgId}`);
        try { (((__oc22 = (__oc21 = window.CupidMedia) === null || __oc21 === void 0 ? void 0 : __oc21.unlockCG) === null || __oc22 === void 0 ? void 0 : __oc22.call(__oc21, cgId))); } catch (_) {}
    }

    recordEndingScene(sceneId, stateManager) { var __oc23, __oc24, __oc25;
        const endingId = (((__oc24 = (__oc23 = window.GalleryData) === null || __oc23 === void 0 ? void 0 : __oc23.resolveEndingId) === null || __oc24 === void 0 ? void 0 : __oc24.call(__oc23, sceneId, flag => {
        var __oc223;
        return ((((__oc223 = stateManager === null || stateManager === void 0 ? void 0 : stateManager.getFlag) === null || __oc223 === void 0 ? void 0 : __oc223.call(stateManager, flag))) === true);
    })));
        if (!endingId) return false;

        const progress = this.getProgress();
        if (!progress.endings) progress.endings = {};
        if ((((__oc25 = progress.endings[endingId]) === null || __oc25 === void 0 ? void 0 : __oc25.unlocked))) return false;
        progress.endings[endingId] = { unlocked: true, unlockedAt: Date.now() };
        this.saveProgress(progress);
        return true;
    }

    /**
     * BGM(배경음악) 해금
     * @param {string} bgmId - BGM ID
     */
    unlockBGM(bgmId) { var __oc26;
        const progress = this.getProgress();

        // 이미 해금됐으면 무시
        if ((((__oc26 = progress.bgm[bgmId]) === null || __oc26 === void 0 ? void 0 : __oc26.unlocked))) return;

        progress.bgm[bgmId] = { unlocked: true, unlockedAt: Date.now() };
        this.saveProgress(progress);
        console.log(`[GalleryManager] BGM 해금: ${bgmId}`);
    }

    /** 프리토킹 횟수 증가 - 갤러리 통계용 */
    incrementFreeTalkCount(charKey) { var __oc27, __oc28;
        const charId = this.charIdMap[charKey];
        if (!charId) return;

        const progress = this.getProgress();
        if (!progress.characters[charId]) progress.characters[charId] = {};

        // 프리토킹 횟수 +1
        const newCount = (progress.characters[charId].freeTalkCount || 0) + 1;
        progress.characters[charId].freeTalkCount = newCount;

        this.saveProgress(progress);
        console.log(`[GalleryManager] 프리토킹: ${charId} = ${newCount}회`);
        try { (((__oc28 = (__oc27 = window.CupidMedia) === null || __oc27 === void 0 ? void 0 : __oc27.syncFromProgressObject) === null || __oc28 === void 0 ? void 0 : __oc28.call(__oc27, progress))); } catch (_) {}
    }

    /**
     * 호감도 100 달성 시 캐릭터 자동 해금
     * @param {string} charKey - 캐릭터 키
     * @param {number} affinity - 현재 호감도
     */
    checkAffinityUnlock(charKey, affinity) {
        if (affinity >= 100) this.unlockCharacter(charKey);
    }
}

window.GalleryManager = GalleryManager;
