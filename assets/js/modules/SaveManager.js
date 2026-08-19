/**
 * ============================================================================
 * SaveManager.js - 게임 저장/불러오기 관리자
 * ============================================================================
 *
 * 브라우저의 localStorage를 사용해서 게임 진행 상황을 저장합니다.
 * 브라우저를 닫았다가 다시 열어도 이어하기가 가능합니다.
 *
 * 【localStorage란?】
 * 브라우저에 내장된 간단한 저장소입니다.
 * 키-값 쌍으로 데이터를 저장하며, 브라우저를 닫아도 유지됩니다.
 * 단, 같은 도메인에서만 접근 가능하고 용량 제한(약 5MB)이 있습니다.
 *
 * 【저장되는 데이터】
 * - currentSceneId: 마지막으로 본 씬의 ID
 * - lastBgUrl: 마지막 배경 이미지 URL
 * - currentCharacters: 화면에 표시된 캐릭터 이미지들
 * - gameState: StateManager의 전체 데이터 (이름, 호감도, 플래그 등)
 * - savedAt: 저장 시각 (Unix timestamp)
 *
 * 【외부 의존성】
 * - 없음 (독립 모듈)
 *
 * 【이 파일이 window에 노출하는 것】
 * - window.SaveManager → GameEngine과 index.js에서 사용
 *
 * @version 2.1.0
 */

class SaveManager {
    static AFFINITY_REBALANCE_VERSION = 1;

    /**
     * @param {string} storageKey - localStorage에 사용할 키 이름
     *                              기본값: 'cupid_save'
     */
    constructor(storageKey = 'cupid_save') {
        this.storageKey = storageKey;
    }

    /**
     * 현재 게임 상태를 localStorage에 저장
     *
     * @param {string} sceneId - 현재 씬 ID (예: "day1_school_1")
     * @param {string} bgUrl - 현재 배경 이미지 URL
     * @param {Object} characters - 현재 표시된 캐릭터들 {left, center, right}
     * @param {Object} gameStateData - StateManager.exportState()의 결과
     */
    save(sceneId, bgUrl, characters, gameStateData) {
        const saveData = {
            currentSceneId: sceneId,           // 어느 씬까지 진행했는지
            lastBgUrl: bgUrl,                  // 마지막 배경
            currentCharacters: characters,     // 마지막 캐릭터 배치
            gameState: gameStateData,          // 전체 게임 상태
            savedAt: Date.now()                // 저장 시각
        };

        // JSON 문자열로 변환해서 저장
        try {
            window.CupidStorage.setItem(this.storageKey, JSON.stringify(saveData));
            console.log('[SaveManager] 저장 완료:', sceneId);
        } catch (e) {
            console.error('[SaveManager] 저장 실패:', e);
            window.reportCupidCaughtError?.(e, {
                source: 'cupid-save-manager',
                errorType: 'save_failed',
                context: { storageKey: this.storageKey, sceneId }
            });
        }
    }

    /**
     * 저장된 게임 데이터 불러오기
     * @returns {Object|null} 저장된 데이터, 없으면 null
     */
    load() {
        const saved = window.CupidStorage.getItem(this.storageKey);

        // 저장된 데이터가 없으면 null 반환
        if (!saved) return null;

        try {
            const saveData = JSON.parse(saved);
            this._migrateAffinityRebalance(saveData);
            return saveData;
        } catch (e) {
            // JSON 파싱 실패 (데이터 손상)
            console.error('[SaveManager] 파싱 오류:', e);
            window.reportCupidCaughtError?.(e, {
                source: 'cupid-save-manager',
                errorType: 'save_parse_failed',
                context: { storageKey: this.storageKey, savedLength: saved.length }
            });
            return null;
        }
    }

    /**
     * 기존 세이브의 100점을 99로 내리고, 퍼펙트 구간 저장은 엔딩 판정 지점으로 되돌립니다.
     * 마이그레이션 버전을 세이브에 기록하므로 이후 새로 달성한 100점은 유지됩니다.
     *
     * @param {Object} saveData
     * @returns {{changed:boolean, downgradedCharacters:string[], reroutedScene:string}}
     * @private
     */
    _migrateAffinityRebalance(saveData) {
        const gameState = saveData?.gameState;
        if (!gameState || typeof gameState !== 'object') {
            return { changed: false, downgradedCharacters: [], reroutedScene: '' };
        }
        if ((Number(gameState.affinityRebalanceVersion) || 0) >= SaveManager.AFFINITY_REBALANCE_VERSION) {
            return { changed: false, downgradedCharacters: [], reroutedScene: '' };
        }

        const configs = [
            { key: 'Teacher', routeFlag: 'homeroom_day5', check: 'hidden_perfect_homeroom_check', pattern: /^(hidden_perfect_homeroom_|date_choice_perfect_teacher|day5_teacher_ending_freetalk_)/ },
            { key: 'Nurse', routeFlag: 'nurse_day5', check: 'hidden_perfect_nurse_check', pattern: /^(hidden_perfect_nurse_|date_choice_perfect_nurse|day5_nurse_ending_freetalk_)/ },
            { key: 'Seoyeon', routeFlag: 'route_seoyeon', check: 'ending_aff_check_seo', pattern: /^(perfect_seo_|perfect_epilogue_.*_seo|date_choice_perfect_seo|day5_seo_ending_freetalk_)/ },
            { key: 'Yuna', routeFlag: 'route_yuna', check: 'ending_aff_check_yuna', pattern: /^(perfect_yuna_|perfect_epilogue_.*_yuna|date_choice_perfect_yuna|day5_yuna_ending_freetalk_)/ },
            { key: 'Dain', routeFlag: 'route_dain', check: 'ending_aff_check_dain', pattern: /^(perfect_dain_|perfect_epilogue_.*_dain|date_choice_perfect_dain|day5_dain_ending_freetalk_)/ }
        ];
        const stats = gameState.stats && typeof gameState.stats === 'object' ? gameState.stats : {};
        const flags = gameState.flags && typeof gameState.flags === 'object' ? gameState.flags : {};
        gameState.flags = flags;
        const downgradedCharacters = [];
        const datingBeforeMigration = new Set(
            configs.filter(config => flags[`isDating_${config.key}`]).map(config => config.key)
        );

        for (const { key } of configs) {
            if ((Number(stats[key]?.affinity) || 0) < 100) continue;
            stats[key].affinity = 99;
            flags[`isDating_${key}`] = false;
            downgradedCharacters.push(key);
        }

        let reroutedScene = '';
        if (downgradedCharacters.length > 0) {
            const currentSceneId = String(saveData.currentSceneId || '');
            const isAffected = config => downgradedCharacters.includes(config.key);
            const activeConfig = configs.find(config => isAffected(config) && config.pattern.test(currentSceneId))
                || configs.find(config => isAffected(config) && datingBeforeMigration.has(config.key))
                || configs.find(config => isAffected(config) && flags[config.routeFlag]);
            const isInsidePerfectEnding = Boolean(flags.ending_perfect)
                || configs.some(config => config.pattern.test(currentSceneId));
            flags.ending_perfect = false;
            if (activeConfig && isInsidePerfectEnding) {
                reroutedScene = activeConfig.check;
                saveData.currentSceneId = reroutedScene;
                saveData.lastBgUrl = '';
                saveData.currentCharacters = {};
            }
        }

        gameState.affinityRebalanceVersion = SaveManager.AFFINITY_REBALANCE_VERSION;
        try {
            window.CupidStorage.setItem(this.storageKey, JSON.stringify(saveData));
        } catch (e) {
            console.warn('[SaveManager] 호감도 재조정 저장 실패:', e);
        }
        return { changed: true, downgradedCharacters, reroutedScene };
    }

    /**
     * 저장 데이터 존재 여부 확인
     * @returns {boolean} 저장된 게임이 있으면 true
     */
    hasSave() {
        try {
            return window.CupidStorage.getItem(this.storageKey) !== null;
        } catch (e) {
            return false;
        }
    }

    /**
     * 저장 데이터 삭제 (새 게임 시작 시 호출)
     */
    clear() {
        try {
            window.CupidStorage.removeItem(this.storageKey);
            console.log('[SaveManager] 저장 데이터 삭제됨');
        } catch (e) {
            console.error('[SaveManager] 삭제 실패:', e);
            window.reportCupidCaughtError?.(e, {
                source: 'cupid-save-manager',
                errorType: 'save_clear_failed',
                context: { storageKey: this.storageKey }
            });
        }
    }
}

// ============================================================================
// window 전역 노출
// ============================================================================
window.SaveManager = SaveManager;
