/**
 * ============================================================================
 * StateManager.js - 게임 상태(데이터) 관리자
 * ============================================================================
 *
 * 게임의 모든 "변하는 데이터"를 이 클래스가 관리합니다.
 * 플레이어 이름, 캐릭터 호감도, 이벤트 발생 여부(플래그) 등
 * 게임을 저장하거나 불러올 때도 이 클래스의 데이터가 사용됩니다.
 *
 * 【외부 의존성】
 * - 없음 (독립 모듈)
 *
 * 【이 파일이 window에 노출하는 것】
 * - window.StateManager → GameEngine에서 new StateManager()로 사용
 *
 * @version 2.1.0
 */

class StateManager {
    constructor() {
        /**
         * 플레이어 이름
         * - 게임 시작 시 이름 입력 씬에서 설정됨
         * - 시나리오의 {name} 패턴이 이 값으로 치환됨
         */
        const lang = window.GAME_LANG || 'ko';
        this.playerName = { en: "Protagonist", es: "Protagonista", ja: "主人公", fr: "Protagoniste", de: "Protagonist", pt: "Protagonista" }[lang] || "주인공";

        /**
         * 현재 게임 내 날짜
         * - 시나리오에서 changeDay로 변경 가능
         * - SCENARIO[currentDay]에서 해당 날짜의 씬을 검색
         */
        this.currentDay = 1;

        /**
         * 캐릭터별 호감도 데이터
         * - affinity: 호감도 수치 (-100 ~ 100)
         * - 0: 중립, 양수: 호감, 음수: 비호감
         */
        this.stats = {
            Seoyeon: { affinity: 0 },   // 서연 (학생회장)
            Yuna: { affinity: 0 },       // 유나 (신비로운 소녀)
            Dain: { affinity: 0 },       // 다인 (활기찬 소녀)
            Teacher: { affinity: 0 },    // 담임선생님
            Nurse: { affinity: 0 }       // 보건선생님
        };

        /** 분기별 선택지에서 선택된 캐릭터를 추적 */
        this.currentCharacter = null;

        /**
         * 캐릭터별 AI 대화 기록
         * - 프리토킹에서 주고받은 대화를 저장
         * - 같은 캐릭터와 다시 대화할 때 이전 맥락을 AI에게 전달
         */
        this.chatMemories = {};

        /** Character-specific API prompt epoch checkpoints. */
        this.chatPromptEpochs = {};

        /** 캐릭터별로 아직 풀리지 않은 상처와 감정의 여운 */
        this.relationshipAftermaths = {};

        /**
         * 게임 플래그들 (이벤트 발생 여부 기록)
         * - 예: { metSeoyeon: true, knowsName_Seoyeon: true, ... }
         * - 시나리오의 condition/excludeCondition에서 참조됨
         */
        this.flags = {};
    }

    /**
     * 새 회차를 위한 본편 상태 초기화
     * - 같은 StateManager 인스턴스를 참조하는 하위 시스템을 유지하면서
     *   이름, 날짜, 호감도, 플래그, 본편 AI 대화 문맥만 초기화합니다.
     * - 갤러리 localStorage와 D1 대화 로그는 이 클래스의 소유가 아니므로 건드리지 않습니다.
     */
    resetForNewGame() {
        const lang = window.GAME_LANG || 'ko';
        this.playerName = { en: "Protagonist", es: "Protagonista", ja: "主人公", fr: "Protagoniste", de: "Protagonist", pt: "Protagonista" }[lang] || "주인공";
        this.currentDay = 1;
        this.stats = {
            Seoyeon: { affinity: 0 },
            Yuna: { affinity: 0 },
            Dain: { affinity: 0 },
            Teacher: { affinity: 0 },
            Nurse: { affinity: 0 }
        };
        this.currentCharacter = null;
        this.chatMemories = {};
        this.chatPromptEpochs = {};
        this.relationshipAftermaths = {};
        this.flags = {};
    }

    /**
     * 플레이어 이름 설정
     * @param {string} name - 새로운 이름 (한글 1~6글자 / 영문 1~12글자)
     */
    setPlayerName(name) {
        this.playerName = name;
    }

    /**
     * 게임 내 날짜 변경
     * @param {number} day - 변경할 날짜 (1, 2, 3...)
     */
    setDay(day) {
        this.currentDay = day;
        console.log(`[StateManager] 날짜 변경: ${day}일차`);
    }

    /**
     * 호감도 변경
     * - 범위를 -100 ~ 100으로 제한
     *
     * @param {string} charKey - 캐릭터 키 (예: "Seoyeon", "Yuna")
     * @param {number} amount - 변경량 (양수: 증가, 음수: 감소)
     * @returns {number} 변경 후 호감도 값
     */
    changeAffinity(charKey, amount) {
        if (!this.stats[charKey]) return 0;

        // 범위 제한: -100 ~ 100
        let newValue = Math.max(-100, Math.min(100, this.stats[charKey].affinity + amount));
        this.stats[charKey].affinity = newValue;

        console.log(`[StateManager] ${charKey} 호감도: ${amount > 0 ? '+' : ''}${amount} → 총 ${newValue}`);
        return newValue;
    }

    /**
     * 특정 캐릭터의 현재 호감도 조회
     * @param {string} charKey - 캐릭터 키
     * @returns {number} 호감도 값 (없으면 0)
     */
    getAffinity(charKey) {
        // ?? 0 사용: 음수 호감도(-50 등)도 올바르게 반환
        // || 0은 falsy 값(-50, 0 등)을 모두 0으로 처리하는 버그 발생
        return this.stats[charKey]?.affinity ?? 0;
    }

    /**
     * 플래그 설정 (이벤트 발생 기록)
     * @param {string} flagName - 플래그 이름 (예: "metSeoyeon")
     * @param {boolean} value - 값 (기본: true)
     */
    setFlag(flagName, value = true) {
        this.flags[flagName] = value;
        console.log(`[StateManager] 플래그: ${flagName} = ${value}`);
    }

    /**
     * 플래그 조회
     * @param {string} flagName - 플래그 이름
     * @returns {boolean} 플래그 값 (없으면 false)
     */
    getFlag(flagName) {
        // || 를 먼저 분리 (OR가 낮은 우선순위), 각 OR 그룹 안에서 && 처리
        if (flagName.includes('||')) {
            return flagName.split('||').some(orPart => {
                if (orPart.includes('&&')) {
                    return orPart.split('&&').every(f => this.flags[f.trim()] ?? false);
                }
                return this.flags[orPart.trim()] ?? false;
            });
        }
        if (flagName.includes('&&')) {
            return flagName.split('&&').every(f => this.flags[f.trim()] ?? false);
        }
        return this.flags[flagName] ?? false;
    }

    /** 현재 캐릭터 설정 */
    setCurrentCharacter(charKey) {
        this.currentCharacter = charKey;
    }

    /** 현재 캐릭터 조회 */
    getCurrentCharacter() {
        return this.currentCharacter;
    }

    /**
     * AI 대화 기록 저장
     * - 현재 회차에서 캐릭터와 나눈 전체 대화를 엔딩까지 누적
     * - 시스템 프롬프트는 제외하고 저장
     *
     * @param {string} charName - 캐릭터 이름
     * @param {Array} history - 대화 기록 배열 [{role, content}, ...]
     */
    setChatMemory(charName, history) {
        // 시스템 메시지를 제외한 본편 원문 로그는 자르지 않습니다.
        const chatOnly = (Array.isArray(history) ? history : []).filter(m => m.role !== "system");
        this.chatMemories[charName] = chatOnly.slice();
        if (chatOnly.length === 0) delete this.chatPromptEpochs[charName];
    }

    /**
     * AI 대화 기록 조회
     * @param {string} charName - 캐릭터 이름
     * @returns {Array} 대화 기록 (없으면 빈 배열)
     */
    getChatMemory(charName) { return this.chatMemories[charName] || []; }

    setChatPromptEpoch(charName, state) {
        if (!charName) return;
        if (!state || state.version !== 1) {
            delete this.chatPromptEpochs[charName];
            return;
        }
        this.chatPromptEpochs[charName] = JSON.parse(JSON.stringify(state));
    }

    getChatPromptEpoch(charName) {
        return this.chatPromptEpochs[charName] || null;
    }

    clearChatPromptEpoch(charName) {
        delete this.chatPromptEpochs[charName];
    }

    setRelationshipAftermath(charName, state) {
        if (!charName) return null;
        const normalized = window.CupidFreeTalkCore?.normalizeRelationshipAftermath
            ? window.CupidFreeTalkCore.normalizeRelationshipAftermath(state)
            : (state || null);
        if (!normalized) {
            delete this.relationshipAftermaths[charName];
            return null;
        }
        this.relationshipAftermaths[charName] = JSON.parse(JSON.stringify(normalized));
        return this.relationshipAftermaths[charName];
    }

    getRelationshipAftermath(charName) {
        if (!charName) return null;
        const rawState = this.relationshipAftermaths[charName] || null;
        const normalized = window.CupidFreeTalkCore?.normalizeRelationshipAftermath
            ? window.CupidFreeTalkCore.normalizeRelationshipAftermath(rawState)
            : rawState;
        if (!normalized) {
            delete this.relationshipAftermaths[charName];
            return null;
        }
        this.relationshipAftermaths[charName] = JSON.parse(JSON.stringify(normalized));
        return this.relationshipAftermaths[charName];
    }

    /**
     * 전체 게임 상태를 객체로 내보내기 (저장용)
     *
     * JSON.parse(JSON.stringify(...))로 딥 카피하는 이유:
     * 저장 시점의 데이터를 그대로 보존하려면 원본과 무관한 독립 복사본이 필요합니다.
     *
     * @returns {Object} 저장 가능한 형태의 게임 상태 객체
     */
    exportState() {
        return {
            playerName: this.playerName,
            currentDay: this.currentDay,
            stats: JSON.parse(JSON.stringify(this.stats)),
            chatMemories: JSON.parse(JSON.stringify(this.chatMemories)),
            chatPromptEpochs: JSON.parse(JSON.stringify(this.chatPromptEpochs)),
            relationshipAftermaths: JSON.parse(JSON.stringify(this.relationshipAftermaths)),
            flags: { ...this.flags }
        };
    }

    /**
     * 저장된 데이터로 게임 상태 복원
     *
     * 각 필드 존재 여부를 확인 후 복원합니다. (방어적 프로그래밍)
     * 저장 데이터가 손상되어 일부 필드가 없어도 오류 없이 동작합니다.
     *
     * @param {Object} data - exportState()로 생성된 저장 데이터
     */
    importState(data) {
        if (data.playerName) this.playerName = data.playerName;
        if (data.currentDay !== undefined) this.currentDay = data.currentDay;
        if (data.stats) this.stats = data.stats;
        if (data.chatMemories) this.chatMemories = data.chatMemories;
        if (data.chatPromptEpochs) this.chatPromptEpochs = data.chatPromptEpochs;
        this.relationshipAftermaths = data.relationshipAftermaths && typeof data.relationshipAftermaths === 'object'
            ? data.relationshipAftermaths
            : {};
        if (data.flags) this.flags = data.flags;

        console.log('[StateManager] 상태 복원 완료');
    }

    /**
     * 하위 호환성을 위한 접근자 메서드
     * 이전 버전에서 gameState.playerName처럼 접근하던 코드를 지원합니다.
     */
    get(key) {
        if (key === 'playerName') return this.playerName;
        if (key === 'currentDay') return this.currentDay;
        if (key === 'stats') return this.stats;
        if (key === 'chatMemories') return this.chatMemories;
        if (key === 'chatPromptEpochs') return this.chatPromptEpochs;
        if (key === 'relationshipAftermaths') return this.relationshipAftermaths;
        return this.flags[key];
    }

    set(key, value) {
        if (key === 'playerName') this.playerName = value;
        else if (key === 'currentDay') this.currentDay = value;
        else this.flags[key] = value;
    }
}

// ============================================================================
// window 전역 노출
// ============================================================================
window.StateManager = StateManager;
