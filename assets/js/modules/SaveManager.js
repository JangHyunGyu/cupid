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
            localStorage.setItem(this.storageKey, JSON.stringify(saveData));
            console.log('[SaveManager] 저장 완료:', sceneId);
        } catch (e) {
            console.error('[SaveManager] 저장 실패:', e);
        }
    }

    /**
     * 저장된 게임 데이터 불러오기
     * @returns {Object|null} 저장된 데이터, 없으면 null
     */
    load() {
        const saved = localStorage.getItem(this.storageKey);

        // 저장된 데이터가 없으면 null 반환
        if (!saved) return null;

        try {
            return JSON.parse(saved);
        } catch (e) {
            // JSON 파싱 실패 (데이터 손상)
            console.error('[SaveManager] 파싱 오류:', e);
            return null;
        }
    }

    /**
     * 저장 데이터 존재 여부 확인
     * @returns {boolean} 저장된 게임이 있으면 true
     */
    hasSave() {
        try {
            return localStorage.getItem(this.storageKey) !== null;
        } catch (e) {
            return false;
        }
    }

    /**
     * 저장 데이터 삭제 (새 게임 시작 시 호출)
     */
    clear() {
        try {
            localStorage.removeItem(this.storageKey);
            console.log('[SaveManager] 저장 데이터 삭제됨');
        } catch (e) {
            console.error('[SaveManager] 삭제 실패:', e);
        }
    }
}

// ============================================================================
// window 전역 노출
// ============================================================================
window.SaveManager = SaveManager;
