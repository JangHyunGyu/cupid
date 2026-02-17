/**
 * ============================================================================================
 * 💘 Cupid Visual Novel Game Engine (큐피드 비주얼 노벨 게임 엔진)
 * ============================================================================================
 * 
 * ▶ 파일 설명:
 *   이 파일은 Cupid 연애 시뮬레이션 게임의 핵심 엔진입니다.
 *   비주얼 노벨 형식의 스토리 진행, AI 캐릭터와의 자유 대화,
 *   호감도 시스템, 갤러리 해금 등 게임의 모든 핵심 기능을 담당합니다.
 * 
 * ▶ 버전 히스토리:
 *   - v1.0.0: 초기 버전 (전역 함수/변수 방식)
 *   - v2.0.0: 객체지향 리팩토링 (2026.01.24)
 *             클래스 기반 구조로 전면 재설계
 * 
 * ▶ 클래스 구조도:
 * ┌─────────────────────────────────────────────────────────────────────┐
 * │  GameEngine (게임 전체를 관리하는 최상위 컨트롤러)                      │
 * │  ├── StateManager     → 플레이어 이름, 플래그, 호감도 등 데이터 관리    │
 * │  ├── SaveManager      → localStorage 저장/불러오기                    │
 * │  ├── GalleryManager   → CG 해금, 통계 기록                            │
 * │  ├── SceneRenderer    → 배경, 캐릭터, 씬 전환 렌더링                   │
 * │  ├── DialogueSystem   → 텍스트 타이핑 효과, 이름 치환                  │
 * │  ├── FreeTalkSystem   → AI API 호출, 자유 대화                        │
 * │  ├── UIManager        → 버튼, 모달, 게이지 등 UI 제어                  │
 * │  └── KoreanProcessor  → 한국어 "은/는", "이/가" 등 조사 처리           │
 * └─────────────────────────────────────────────────────────────────────┘
 * 
 * ▶ 외부 의존성 (이 파일보다 먼저 로드되어야 함):
 *   - scenario.js    → SCENARIO 객체 (게임 시나리오 데이터)
 *   - prompts.js     → getPromptData(), buildSystemPrompt() (AI 프롬프트)
 *   - characters.js  → CHARACTER_EXPRESSIONS 객체 (캐릭터 표정 이미지)
 *   - sound.js       → soundManager 객체 (BGM/효과음 재생)
 * 
 * @author ArcherLab
 * @version 2.0.0
 */

// ============================================================================================
// 전역 설정 상수 (Global Configuration Constants)
// ============================================================================================
// 📌 게임 전체에서 공통으로 사용하는 설정값들입니다.
//    이 값들을 수정하면 게임 전체에 영향을 미칩니다.

/**
 * API 엔드포인트
 * - Cloudflare Worker에서 동작하는 AI 채팅 서버 주소
 * - FreeTalkSystem에서 이 주소로 HTTP POST 요청을 보내 AI 응답을 받아옵니다
 */
const API_ENDPOINT = "https://chatbot-api.yama5993.workers.dev/";

/**
 * 에셋 버전 번호
 * - 이미지, 오디오 등 에셋 파일 URL 뒤에 "?v=1.0.15" 형태로 붙습니다
 * - 버전을 바꾸면 브라우저가 캐시를 무시하고 새 파일을 다운로드합니다
 * - 이미지나 오디오를 수정했는데 반영이 안 될 때 이 숫자를 올리세요
 */
const ASSET_VERSION = "2.2.3";

/**
 * 프리토킹(자유 대화) 기본 최대 턴 수
 * - AI 캐릭터와 주고받을 수 있는 대화 횟수의 기본값
 * - 시나리오에서 scene.maxTurns로 개별 설정 가능
 * - 3으로 설정하면 플레이어가 3번 말할 수 있음
 */
const DEFAULT_MAX_FREE_TALK_TURNS = 3;

/**
 * 채팅 전송 버튼의 SVG 아이콘 (종이비행기 모양)
 * - 프리토킹 UI의 전송 버튼에 표시됩니다
 */
const SEND_ICON = `<svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>`;

/**
 * 갤러리에 등록된 CG(이벤트 그림) ID 목록
 * - 여기에 등록된 CG만 갤러리에서 해금 및 표시됩니다
 * - 새로운 CG를 추가하면 이 Set에 ID를 추가해야 갤러리에 나타납니다
 * - 예: 'nurse_home_event1' → assets/images/cg/nurse_home_event1.webp
 */
const REGISTERED_CG_IDS = new Set([
    'nurse_home_event1'
    // 🔧 새 CG 추가 시 여기에 ID 추가 (예: 'seoyeon_rooftop_cg')
]);

/**
 * 캐릭터 표시 이름 → 내부 키 매핑 (공통 상수)
 * - 한국어/영어 이름 모두 내부 키로 변환
 * - UIManager, DialogueSystem, FreeTalkSystem, SceneRenderer 등에서 공유
 * - 캐릭터 추가/변경 시 여기만 수정하면 전체 반영
 */
const CHAR_NAME_MAP = Object.freeze({
    "서연": "Seoyeon", "유나": "Yuna", "다인": "Dain",
    "담임선생님": "Teacher", "보건선생님": "Nurse",
    "Seoyeon": "Seoyeon", "Yuna": "Yuna", "Dain": "Dain",
    "Teacher": "Teacher", "Nurse": "Nurse",
    "Homeroom Teacher": "Teacher", "School Nurse": "Nurse"
});


// ============================================================================================
// 유틸리티 함수 (Utility Functions)
// ============================================================================================
// 📌 여러 곳에서 공통으로 사용하는 헬퍼 함수들

/**
 * 에셋 URL에 버전 쿼리 파라미터를 추가하는 함수
 * 
 * ▶ 사용 이유:
 *   브라우저는 같은 URL의 파일을 캐시해서 재사용합니다.
 *   이미지를 수정해도 URL이 같으면 예전 이미지가 보일 수 있습니다.
 *   URL 뒤에 ?v=버전 을 붙이면 브라우저가 새 파일로 인식합니다.
 * 
 * ▶ 사용 예시:
 *   getAssetUrl("images/char.png")  
 *   → "images/char.png?v=1.0.15"
 * 
 * @param {string} url - 원본 URL (예: "assets/images/bg.webp")
 * @returns {string} 버전이 추가된 URL (예: "assets/images/bg.webp?v=1.0.15")
 */
function getAssetUrl(url) {
    // URL이 없으면 그대로 반환
    if (!url) return url;

    // URL에 이미 ?가 있으면 &로 연결, 없으면 ?로 연결
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}v=${ASSET_VERSION}`;
}


// ============================================================================================
// 📚 KoreanProcessor 클래스 - 한국어 조사 자동 처리기
// ============================================================================================
// 📌 한국어에서 "은/는", "이/가", "을/를" 등의 조사는 앞 글자의 받침 유무에 따라 달라집니다.
//    예: "민수는" (받침 없음) vs "철민은" (받침 있음)
//    이 클래스는 플레이어 이름에 맞게 조사를 자동으로 변환해줍니다.

/**
 * 한국어 조사 처리 클래스
 * 
 * ▶ 사용 목적:
 *   플레이어가 입력한 이름 뒤에 붙는 조사를 자동으로 맞춰줍니다.
 *   시나리오에서 "{name}이가 왔다"라고 쓰면,
 *   이름이 "유나"면 "유나가 왔다"로,
 *   이름이 "철민"이면 "철민이 왔다"로 자동 변환됩니다.
 * 
 * ▶ 작동 원리:
 *   1. 한글의 유니코드를 분석해서 받침(종성)이 있는지 확인
 *   2. 받침이 있으면 "은/이/을" 사용, 없으면 "는/가/를" 사용
 * 
 * ▶ 사용 예시:
 *   const processor = new KoreanProcessor();
 *   processor.processName("{name}이가 학교에 갔다", "민수", "{name}");
 *   → "민수가 학교에 갔다"
 */
class KoreanProcessor {
    constructor() {
        /**
         * 조사 변환 규칙 테이블
         * - pattern: 시나리오에서 사용하는 표기 (예: "은는", "이가")
         * - with: 받침이 있을 때 사용할 조사
         * - without: 받침이 없을 때 사용할 조사
         * 
         * 💡 긴 패턴을 먼저 검사해야 "이라고"가 "이"로 잘못 매칭되지 않습니다
         */
        this.particles = [
            // 복합 조사 (긴 것부터)
            { pattern: '이라고', with: '이라고', without: '라고' },   // "~이라고 했다" / "~라고 했다"
            { pattern: '라고', with: '이라고', without: '라고' },
            { pattern: '이라', with: '이라', without: '라' },          // "~이라는" / "~라는"

            // 기본 조사
            { pattern: '은는', with: '은', without: '는' },            // 주격 보조사
            { pattern: '이가', with: '이', without: '가' },            // 주격 조사
            { pattern: '을를', with: '을', without: '를' },            // 목적격 조사
            { pattern: '이랑', with: '이랑', without: '랑' },          // "~이랑 같이" / "~랑 같이"
            { pattern: '이나', with: '이나', without: '나' },          // "~이나 마찬가지" / "~나 마찬가지"
            { pattern: '이다', with: '이다', without: '다' },          // "~이다" / "~다"

            // 단일 글자 조사
            { pattern: '랑', with: '이랑', without: '랑' },
            { pattern: '나', with: '이나', without: '나' },
            { pattern: '다', with: '이다', without: '다' },
            { pattern: '은', with: '은', without: '는' },
            { pattern: '는', with: '은', without: '는' },
            { pattern: '이', with: '이', without: '가' },
            { pattern: '가', with: '이', without: '가' },
            { pattern: '을', with: '을', without: '를' },
            { pattern: '를', with: '을', without: '를' },
            { pattern: '과', with: '과', without: '와' },              // "~과 함께" / "~와 함께"
            { pattern: '와', with: '과', without: '와' },
            { pattern: '아', with: '아', without: '야' },              // 호칭 "철수야" / "민수아"
            { pattern: '야', with: '아', without: '야' }
        ];
    }

    /**
     * 문자열의 마지막 글자에 받침(종성)이 있는지 확인
     * 
     * ▶ 한글 유니코드 구조:
     *   한글 글자 = (초성 × 588) + (중성 × 28) + 종성 + 0xAC00
     *   종성 인덱스가 0이면 받침 없음 (예: "가", "나", "유")
     *   종성 인덱스가 1~27이면 받침 있음 (예: "각", "남", "윤")
     * 
     * @param {string} str - 받침을 확인할 문자열
     * @returns {Object} { hasBatchim: 받침있음여부, isRieul: ㄹ받침여부 }
     */
    getBatchimInfo(str) {
        // 빈 문자열이면 받침 없음으로 처리
        if (!str || str.length === 0) return { hasBatchim: false, isRieul: false };

        const lastChar = str[str.length - 1];   // 마지막 글자
        const code = lastChar.charCodeAt(0);    // 유니코드 값

        // 한글 범위 확인 (가: 0xAC00 ~ 힣: 0xD7A3)
        // 영어나 숫자는 받침 없음으로 처리
        if (code < 0xAC00 || code > 0xD7A3) {
            return { hasBatchim: false, isRieul: false };
        }

        // 받침(종성) 인덱스 계산: (유니코드 - 0xAC00) % 28
        // 0=없음, 1=ㄱ, 2=ㄲ, 3=ㄳ, 4=ㄴ, ..., 8=ㄹ, ...
        const batchimIndex = (code - 0xAC00) % 28;

        return {
            hasBatchim: batchimIndex !== 0,  // 0이면 받침 없음
            isRieul: batchimIndex === 8       // 8이면 'ㄹ' 받침 (으로/로 처리용)
        };
    }

    /**
     * 이름 뒤에 올 적절한 조사를 결정
     * 
     * @param {string} name - 플레이어 이름 (예: "민수", "유나")
     * @param {string} nextChars - 이름 바로 뒤에 오는 문자들 (예: "은는 좋아")
     * @returns {Object|null} { correct: 올바른조사, removeLength: 제거할글자수 }
     *                        조사 패턴이 없으면 null 반환
     */
    getProperParticle(name, nextChars) {
        const { hasBatchim, isRieul } = this.getBatchimInfo(name);

        // 🔧 '으로/로' 특별 처리
        //    ㄹ 받침은 '로'를 사용 (서울로, 일로)
        //    다른 받침은 '으로'를 사용 (부산으로)
        //    받침 없으면 '로' 사용 (제주로)
        if (nextChars.startsWith('으로')) {
            return { correct: (hasBatchim && !isRieul) ? '으로' : '로', removeLength: 2 };
        }
        if (nextChars.startsWith('로')) {
            return { correct: (hasBatchim && !isRieul) ? '으로' : '로', removeLength: 1 };
        }

        // 일반 조사 처리 - 테이블에서 매칭되는 패턴 찾기
        for (const p of this.particles) {
            if (nextChars.startsWith(p.pattern)) {
                return {
                    correct: hasBatchim ? p.with : p.without,
                    removeLength: p.pattern.length
                };
            }
        }

        // 매칭되는 조사 패턴 없음
        return null;
    }

    /**
     * 텍스트에서 {name} 패턴을 이름으로 바꾸고 뒤따르는 조사를 교정
     * 
     * ▶ 처리 과정:
     *   1. 텍스트에서 {name} 또는 {name?} 패턴을 찾음
     *   2. 패턴을 실제 이름으로 교체
     *   3. 이름 뒤에 조사 패턴이 있으면 받침에 맞게 교정
     * 
     * ▶ 사용 예시:
     *   processName("{name}은는 착하다", "유나", "{name}")
     *   → "유나는 착하다" (유나: 받침 없음 → 는)
     * 
     *   processName("{name}은는 착하다", "민수", "{name}")
     *   → "민수는 착하다" (민수: 받침 없음 → 는)
     * 
     *   processName("{name}이가 왔다", "철민", "{name}")
     *   → "철민이 왔다" (철민: 받침 있음 → 이)
     * 
     * @param {string} text - 원본 텍스트 (예: "{name}은는 학교에 갔다")
     * @param {string} nameToUse - 대체할 이름 (예: "민수")
     * @param {string} patternStr - 찾을 정규식 패턴 (기본: "{name(\\?)?}")
     * @returns {string} 처리 완료된 텍스트
     */
    processName(text, nameToUse, patternStr = "{name(\\?)?}") {
        let result = '';           // 결과 문자열
        let lastIndex = 0;         // 마지막 처리 위치
        const namePattern = new RegExp(patternStr, 'g');
        let match;

        // 텍스트에서 {name} 패턴을 모두 찾아서 처리
        while ((match = namePattern.exec(text)) !== null) {
            // 패턴 앞부분 복사
            result += text.substring(lastIndex, match.index);

            // 패턴 뒤에 오는 문자들
            const afterMatch = text.substring(match.index + match[0].length);

            // 💡 '님', '학생' 같은 호칭이 바로 뒤에 오면 조사 처리 건너뜀
            //    예: "{name}님" → "민수님" (조사 처리 안 함)
            if (afterMatch.startsWith('님') || afterMatch.startsWith('학생')) {
                result += nameToUse;
                lastIndex = match.index + match[0].length;
                continue;
            }

            // 조사 처리
            const particleResult = this.getProperParticle(nameToUse, afterMatch);
            if (particleResult) {
                result += nameToUse + particleResult.correct;
                lastIndex = match.index + match[0].length + particleResult.removeLength;
            } else {
                // 조사 패턴이 없으면 그냥 이름만 넣기
                result += nameToUse;
                lastIndex = match.index + match[0].length;
            }
        }

        // 남은 텍스트 추가
        result += text.substring(lastIndex);
        return result;
    }
}


// ============================================================================================
// 💾 StateManager 클래스 - 게임 상태(데이터) 관리자
// ============================================================================================
// 📌 게임의 모든 "변하는 데이터"를 이 클래스가 관리합니다.
//    플레이어 이름, 캐릭터 호감도, 이벤트 발생 여부(플래그) 등
//    게임을 저장하거나 불러올 때도 이 클래스의 데이터가 사용됩니다.

/**
 * 게임 상태 관리 클래스
 * 
 * ▶ 관리하는 데이터:
 *   - playerName: 플레이어가 입력한 이름 (예: "민수")
 *   - currentDay: 현재 게임 내 날짜 (1일차, 2일차...)
 *   - stats: 각 캐릭터의 호감도 (-100 ~ 100)
 *   - flags: 이벤트 발생 여부 (예: "metSeoyeon": true)
 *   - chatMemories: AI 캐릭터와의 대화 기록
 * 
 * ▶ 플래그(flags)란?
 *   게임에서 "이 이벤트가 이미 발생했는가?"를 기록하는 변수입니다.
 *   예: metSeoyeon = true → 서연을 만난 적 있음
 *       isDating_Yuna = true → 유나와 사귀는 중
 *   시나리오에서 condition으로 플래그를 체크해서 분기를 나눕니다.
 */
class StateManager {
    constructor() {
        /** 
         * 플레이어 이름 
         * - 게임 시작 시 이름 입력 씬에서 설정됨
         * - 시나리오의 {name} 패턴이 이 값으로 치환됨
         */
        this.playerName = "주인공";

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
         * - 50 이상이면 "사귀는 사이인지 의심"
         * - 70 이상이면 "사귀는 사이라고 확신"
         */
        this.stats = {
            Seoyeon: { affinity: 0 },   // 서연 (학생회장)
            Yuna: { affinity: 0 },       // 유나 (신비로운 소녀)
            Dain: { affinity: 0 },       // 다인 (활기찬 소녀)
            Teacher: { affinity: 0 },    // 담임선생님
            Nurse: { affinity: 0 }       // 보건선생님
        };

        /**
         * 분기별 선택지에서 선택된 캐릭터를 사용
         */
        this.currentCharacter = null;

        /** 
         * 캐릭터별 AI 대화 기록
         * - 프리토킹에서 주고받은 대화를 저장
         * - 같은 캐릭터와 다시 대화할 때 이전 맥락을 AI에게 전달
         */
        this.chatMemories = {};

        /** 
         * 게임 플래그들 (이벤트 발생 여부 기록)
         * - 예: { metSeoyeon: true, knowsName_Seoyeon: true, ... }
         * - 시나리오의 condition/excludeCondition에서 참조됨
         */
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
     * - 100을 넘거나 -100 미만으로 내려가지 않음
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
        // 🔧 || 0 대신 ?? 0 사용: 음수 호감도(-50 등)도 올바르게 반환
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
        return this.flags[flagName] || false;
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
     * - 최근 10개의 대화만 유지 (메모리 절약)
     * - 시스템 프롬프트는 제외하고 저장
     * 
     * @param {string} charName - 캐릭터 이름
     * @param {Array} history - 대화 기록 배열 [{role, content}, ...]
     */
    setChatMemory(charName, history) {
        // 시스템 메시지 제외, 최근 10개만 저장
        const chatOnly = history.filter(m => m.role !== "system");
        this.chatMemories[charName] = chatOnly.slice(-10);
    }

    /** 
     * AI 대화 기록 조회
     * @param {string} charName - 캐릭터 이름
     * @returns {Array} 대화 기록 (없으면 빈 배열)
     */
    getChatMemory(charName) { return this.chatMemories[charName] || []; }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 📤 exportState - 전체 게임 상태를 객체로 내보내기
     * ═══════════════════════════════════════════════════════════════
     * 
     * ▶ 용도:
     *   게임을 저장할 때 현재 모든 데이터를 하나의 객체로 묶어서 반환합니다.
     *   SaveManager.save()에서 이 함수를 호출해 localStorage에 저장합니다.
     * 
     * ▶ 딥 카피(Deep Copy)를 하는 이유:
     *   JSON.parse(JSON.stringify(...))를 사용하는 이유는 "깊은 복사"를 위해서입니다.
     *   - 얕은 복사: 원본 객체의 참조만 복사 → 원본이 바뀌면 복사본도 바뀜
     *   - 깊은 복사: 완전히 새로운 독립된 객체 생성 → 원본과 무관
     *   저장 시점의 데이터를 그대로 보존하려면 깊은 복사가 필요합니다.
     * 
     * ▶ 반환 객체 구조:
     *   {
     *     playerName: "민수",           // 플레이어 이름
     *     currentDay: 2,                // 현재 날짜 (2일차)
     *     stats: { Seoyeon: {...}, ... },  // 캐릭터별 호감도
     *     chatMemories: { 서연: [...] },   // AI 대화 기록
     *     flags: { metSeoyeon: true, ... } // 이벤트 플래그들
     *   }
     * 
     * ⚠️ 디버깅 팁:
     *   - 저장이 안 되면 콘솔에 exportState() 결과를 찍어보세요
     *   - console.log(gameEngine.stateManager.exportState())
     * 
     * @returns {Object} 저장 가능한 형태의 게임 상태 객체
     */
    exportState() {
        return {
            playerName: this.playerName,           // 플레이어 이름 (문자열)
            currentDay: this.currentDay,           // 현재 게임 날짜 (숫자)
            stats: JSON.parse(JSON.stringify(this.stats)),           // 딥 카피: 호감도 데이터
            chatMemories: JSON.parse(JSON.stringify(this.chatMemories)), // 딥 카피: 대화 기록
            flags: { ...this.flags }               // 스프레드: 플래그 복사 (1단계 객체라 얕은 복사 OK)
        };
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 📥 importState - 저장된 데이터로 게임 상태 복원
     * ═══════════════════════════════════════════════════════════════
     * 
     * ▶ 용도:
     *   "이어하기"를 누르면 이 함수가 호출되어 저장된 데이터를 불러옵니다.
     *   SaveManager.load()로 가져온 데이터를 여기에 전달합니다.
     * 
     * ▶ 방어적 프로그래밍:
     *   if (data.xxx)로 각 필드 존재 여부를 확인합니다.
     *   저장 데이터가 손상되어 일부 필드가 없어도 오류 없이 동작합니다.
     * 
     * ⚠️ 흔한 오류 상황:
     *   1. "이어하기"를 눌렀는데 처음부터 시작됨
     *      → localStorage에 데이터가 없거나 손상됨
     *      → 콘솔: console.log(localStorage.getItem('cupid_save'))
     *   
     *   2. 호감도가 초기화됨
     *      → data.stats가 없거나 형식이 다름
     *      → 콘솔에서 data 객체 구조 확인
     *   
     *   3. 플래그가 사라짐
     *      → data.flags 확인 필요
     * 
     * @param {Object} data - exportState()로 생성된 저장 데이터
     */
    importState(data) {
        // 📌 각 필드가 존재하는지 확인 후 복원 (방어적 프로그래밍)
        if (data.playerName) this.playerName = data.playerName;   // 플레이어 이름 복원
        if (data.currentDay !== undefined) this.currentDay = data.currentDay;   // 게임 날짜 복원 (0도 유효한 값)
        if (data.stats) this.stats = data.stats;                  // 호감도 데이터 복원
        if (data.chatMemories) this.chatMemories = data.chatMemories;  // AI 대화 기록 복원
        if (data.flags) this.flags = data.flags;                  // 이벤트 플래그 복원

        // 디버깅용 로그 - 개발자 도구 콘솔에서 확인 가능
        console.log('[StateManager] 상태 복원 완료');
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 🔧 get/set - 하위 호환성을 위한 접근자 메서드
     * ═══════════════════════════════════════════════════════════════
     * 
     * ▶ 왜 필요한가?
     *   이전 버전(v1.0)에서는 gameState.playerName = "민수" 처럼
     *   직접 속성에 접근했습니다. v2.0에서 클래스로 바꾸면서
     *   기존 코드와의 호환성을 위해 이 메서드들을 제공합니다.
     * 
     * ▶ 사용 예시:
     *   stateManager.get('playerName')  // "민수" 반환
     *   stateManager.get('metSeoyeon')  // 플래그 값 반환
     *   stateManager.set('metYuna', true)  // 플래그 설정
     * 
     * ⚠️ 주의:
     *   가능하면 직접 메서드를 사용하세요:
     *   - this.playerName (O)
     *   - this.getFlag('metSeoyeon') (O)
     *   - this.get('playerName') (구버전 호환용)
     */
    get(key) {
        // 예약된 키들은 해당 속성 반환
        if (key === 'playerName') return this.playerName;
        if (key === 'currentDay') return this.currentDay;
        if (key === 'stats') return this.stats;
        if (key === 'chatMemories') return this.chatMemories;
        // 그 외는 플래그로 간주
        return this.flags[key];
    }

    set(key, value) {
        // 예약된 키들은 해당 속성에 설정
        if (key === 'playerName') this.playerName = value;
        else if (key === 'currentDay') this.currentDay = value;
        // 그 외는 플래그로 간주
        else this.flags[key] = value;
    }
}


// ============================================================================================
// 💾 SaveManager 클래스 - 게임 저장/불러오기 관리자
// ============================================================================================
// 📌 브라우저의 localStorage를 사용해서 게임 진행 상황을 저장합니다.
//    브라우저를 닫았다가 다시 열어도 이어하기가 가능합니다.
//    저장 데이터는 JSON 문자열로 변환되어 저장됩니다.

/**
 * 게임 저장 관리 클래스
 * 
 * ▶ localStorage란?
 *   브라우저에 내장된 간단한 저장소입니다.
 *   키-값 쌍으로 데이터를 저장하며, 브라우저를 닫아도 유지됩니다.
 *   단, 같은 도메인에서만 접근 가능하고 용량 제한(약 5MB)이 있습니다.
 * 
 * ▶ 저장되는 데이터:
 *   - currentSceneId: 마지막으로 본 씬의 ID
 *   - lastBgUrl: 마지막 배경 이미지 URL
 *   - currentCharacters: 화면에 표시된 캐릭터 이미지들
 *   - gameState: StateManager의 전체 데이터 (이름, 호감도, 플래그 등)
 *   - savedAt: 저장 시각 (Unix timestamp)
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
     * 
     * @returns {Object|null} 저장된 데이터, 없으면 null
     */
    load() {
        const saved = localStorage.getItem(this.storageKey);

        // 저장된 데이터가 없으면 null 반환
        if (!saved) return null;

        try {
            // JSON 문자열을 객체로 변환
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
            '담임선생님': 'teacher', '보건선생님': 'nurse'
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
    getProgress() {
        const saved = localStorage.getItem(this.storageKey);

        // 저장된 데이터가 없으면 기본 구조 반환
        if (!saved) {
            return {
                version: this.dataVersion,
                characters: {},
                cg: {},
                bgm: { intro: { unlocked: true } }  // 인트로 BGM은 기본 해금
            };
        }

        // 🔧 JSON.parse 에러 핸들링 추가 (데이터 손상 대비)
        try {
            const data = JSON.parse(saved);

            // 구버전 데이터면 버전 정보 추가
            if (!data.version) data.version = this.dataVersion;

            return data;
        } catch (e) {
            console.error('[GalleryManager] 갤러리 데이터 파싱 오류:', e);
            // 손상된 데이터는 무시하고 기본 구조 반환
            return {
                version: this.dataVersion,
                characters: {},
                cg: {},
                bgm: { intro: { unlocked: true } }
            };
        }
    }

    /** 
     * 갤러리 진행 상황 저장
     * @param {Object} progress - 저장할 갤러리 데이터
     */
    saveProgress(progress) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(progress));
        } catch (e) {
            console.error('[GalleryManager] 갤러리 데이터 저장 실패:', e);
        }
    }

    /** 
     * 캐릭터를 만났을 때 호출 - 갤러리에 캐릭터 해금
     * @param {string} charName - 캐릭터 이름 (한국어/영어 모두 가능)
     */
    markCharacterMet(charName) {
        // 이름을 내부 ID로 변환 (예: '서연' → 'seyoun')
        const charId = this.charIdMap[charName];
        if (!charId) return;  // 등록되지 않은 캐릭터는 무시

        const progress = this.getProgress();

        // 이미 만난 캐릭터면 무시
        if (progress.characters[charId]?.met) return;

        // 캐릭터 데이터 초기화 및 만남 기록
        if (!progress.characters[charId]) progress.characters[charId] = {};
        progress.characters[charId].met = true;
        progress.characters[charId].metAt = Date.now();

        this.saveProgress(progress);
        console.log(`[GalleryManager] 캐릭터 만남: ${charId}`);
    }

    /** 
     * 최대 호감도 갱신 - 갤러리 통계용
     * @param {string} charKey - 캐릭터 키 (예: "Seoyeon")
     * @param {number} currentAffinity - 현재 호감도
     */
    updateMaxAffinity(charKey, currentAffinity) {
        const charId = this.charIdMap[charKey];
        if (!charId) return;

        const progress = this.getProgress();
        if (!progress.characters[charId]) progress.characters[charId] = {};

        // 현재 기록된 최대 호감도보다 높을 때만 갱신
        const currentMax = progress.characters[charId].maxAffinity || 0;
        if (currentAffinity > currentMax) {
            progress.characters[charId].maxAffinity = currentAffinity;
            this.saveProgress(progress);
            console.log(`[GalleryManager] 최대 호감도: ${charId} = ${currentAffinity}`);
        }
    }

    /** 
     * 캐릭터 갤러리 완전 해금 (호감도 100 달성 등 특별 조건)
     * @param {string} charKey - 캐릭터 키
     */
    unlockCharacter(charKey) {
        const charId = this.charIdMap[charKey];
        if (!charId) return;

        const progress = this.getProgress();

        // 이미 해금됐으면 무시
        if (progress.characters[charId]?.unlocked) return;

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
    unlockCG(cgId) {
        // 등록된 CG인지 확인
        if (!REGISTERED_CG_IDS.has(cgId)) return;

        const progress = this.getProgress();

        // 이미 해금됐으면 무시
        if (progress.cg[cgId]?.unlocked) return;

        progress.cg[cgId] = { unlocked: true, unlockedAt: Date.now() };
        this.saveProgress(progress);
        console.log(`[GalleryManager] CG 해금: ${cgId}`);
    }

    /** 
     * BGM(배경음악) 해금
     * @param {string} bgmId - BGM ID
     */
    unlockBGM(bgmId) {
        const progress = this.getProgress();

        // 이미 해금됐으면 무시
        if (progress.bgm[bgmId]?.unlocked) return;

        progress.bgm[bgmId] = { unlocked: true, unlockedAt: Date.now() };
        this.saveProgress(progress);
        console.log(`[GalleryManager] BGM 해금: ${bgmId}`);
    }

    /** 프리토킹 횟수 증가 - 갤러리 통계용 */
    incrementFreeTalkCount(charKey) {
        const charId = this.charIdMap[charKey];
        if (!charId) return;

        const progress = this.getProgress();
        if (!progress.characters[charId]) progress.characters[charId] = {};

        // 프리토킹 횟수 +1
        const newCount = (progress.characters[charId].freeTalkCount || 0) + 1;
        progress.characters[charId].freeTalkCount = newCount;

        this.saveProgress(progress);
        console.log(`[GalleryManager] 프리토킹: ${charId} = ${newCount}회`);
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


// ============================================================================================
// 🎨 UIManager 클래스 - UI(사용자 인터페이스) 관리자
// ============================================================================================
// 📌 화면에 보이는 모든 것을 관리합니다.
//    대화창, 선택지 버튼, 이름 태그, 호감도 게이지, 설정 모달 등
//    DOM 요소에 대한 접근과 조작을 담당합니다.

/**
 * UI 관리 클래스
 * 
 * ▶ 역할:
 *   - HTML의 DOM 요소들을 JavaScript에서 쉽게 접근할 수 있게 캐싱
 *   - 이름 태그에 캐릭터 이름과 호감도 게이지 표시
 *   - 모달(팝업) 창 표시 및 사용자 입력 처리
 *   - 설정 창 열기/닫기, 설정 저장
 * 
 * ▶ DOM 요소 캐싱이란?
 *   document.getElementById()는 호출할 때마다 DOM을 검색합니다.
 *   자주 사용하는 요소는 변수에 저장해두면 성능이 향상됩니다.
 */
class UIManager {
    /**
     * @param {StateManager} stateManager - 게임 상태 관리자
     * @param {GalleryManager} galleryManager - 갤러리 관리자
     */
    constructor(stateManager, galleryManager) {
        this.stateManager = stateManager;
        this.galleryManager = galleryManager;

        // ====== DOM 요소 캐싱 (자주 사용하는 요소들) ======

        // 📜 대화 관련
        this.messageEl = document.getElementById('message');           // 대사 텍스트가 표시되는 영역
        this.nameTagEl = document.getElementById('name-tag');         // 캐릭터 이름 + 호감도 게이지
        this.dialogueBox = document.getElementById('dialogue-box');   // 대화창 전체 박스
        this.choiceContainer = document.getElementById('choice-container');  // 선택지 버튼들의 컨테이너

        // 💬 채팅(프리토킹) 관련
        this.chatContainer = document.getElementById('chat-container');  // 채팅 UI 전체
        this.chatInput = document.getElementById('chat-input');          // 채팅 입력 필드
        this.chatSendBtn = document.getElementById('chat-send');         // 전송 버튼
        this.chatSkipBtn = document.getElementById('chat-skip-btn');     // 스킵 버튼
        this.turnCountEl = document.getElementById('turn-count');        // 남은 턴 수 표시

        // 🖼️ 이미지 업로드 관련
        this.imageUploadBtn = document.getElementById('upload-image-btn');
        this.imageUploadInput = document.getElementById('upload-image-input');
        this.imagePreviewContainer = document.getElementById('image-preview-container');
        this.imagePreview = document.getElementById('image-preview');
        this.removeImageBtn = document.getElementById('remove-image-btn');
        this.stagedImage = null; // 현재 업로드 준비된 이미지 (Base64)

        // ✏️ 이름 입력 관련
        this.nameInputContainer = document.getElementById('name-input-container');
        this.playerNameInput = document.getElementById('player-name-input');
        this.nameConfirmBtn = document.getElementById('name-confirm-btn');

        // 🖼️ 배경/효과 관련
        this.bgLayer = document.getElementById('background-layer');      // 배경 이미지 레이어
        this.fadeLayer = document.getElementById('fade-layer');          // 페이드 효과 레이어
        this.tbcText = document.getElementById('tbc-text');              // "To Be Continued" 텍스트
        this.nextIndicator = document.getElementById('next-indicator');  // "클릭하세요" 화살표

        // 👤 캐릭터 슬롯 (좌/중앙/우)
        this.charSlots = {
            left: document.getElementById('char-left'),      // 왼쪽 캐릭터
            center: document.getElementById('char-center'),  // 중앙 캐릭터
            right: document.getElementById('char-right')     // 오른쪽 캐릭터
        };

        // 🔔 모달(팝업) 관련
        this.customModal = document.getElementById('custom-modal');
        this.modalMessage = document.getElementById('modal-message');
        this.modalConfirmBtn = document.getElementById('modal-confirm-btn');
        this.modalCancelBtn = document.getElementById('modal-cancel-btn');

        // 캐릭터 표시 이름 → 내부 키 매핑 (공통 상수 참조)
        this.charNameMap = CHAR_NAME_MAP;

        // 설정 관련 이벤트 초기화
        this.bindSettingsEvents();

        // 이미지 업로드 관련 이벤트 초기화
        this.bindImageUploadEvents();
    }

    /** 
     * 설정 관련 이벤트 바인딩
     * - 볼륨 슬라이더 조작 시 실시간으로 사운드에 반영
     */
    bindSettingsEvents() {
        // 볼륨 슬라이더 실시간 반영 (input 이벤트는 드래그 중에도 발생)
        window.addEventListener('input', (e) => {
            // BGM 볼륨 조절
            if (e.target.id === 'bgmVolume') {
                const vol = e.target.value / 100;  // 0~100 → 0~1로 변환
                document.getElementById('bgmVolumeVal').textContent = e.target.value + '%';
                if (window.soundManager) soundManager.setBgmVolume(vol);
            }
            // 효과음 볼륨 조절
            else if (e.target.id === 'sfxVolume') {
                const vol = e.target.value / 100;
                document.getElementById('sfxVolumeVal').textContent = e.target.value + '%';
                if (window.soundManager) soundManager.setSfxVolume(vol);
            }
        });
    }

    /**
     * 이미지 업로드 관련 이벤트 바인딩
     */
    bindImageUploadEvents() {
        // 만약 요소가 아직 DOM에 추가되지 않았다면 MutationObserver로 대기
        if (!this.imageUploadBtn || !this.imageUploadInput) {
            const observer = new MutationObserver((mutations, obs) => {
                this.imageUploadBtn = document.getElementById('upload-image-btn');
                this.imageUploadInput = document.getElementById('upload-image-input');
                this.imagePreviewContainer = document.getElementById('image-preview-container');
                this.imagePreview = document.getElementById('image-preview');
                this.removeImageBtn = document.getElementById('remove-image-btn');

                if (this.imageUploadBtn && this.imageUploadInput) {
                    obs.disconnect();
                    // 버튼 아이콘을 카메라 이모지로 맞춤
                    try { this.imageUploadBtn.innerHTML = '<span aria-hidden="true">📸</span>'; } catch (e) {}
                    // 요소가 생겼으면 실제 바인딩 로직을 다시 실행
                    this.bindImageUploadEvents();
                }
            });

            observer.observe(document.body, { childList: true, subtree: true });
            // 폴백: 일정 시간(1.5s) 후에도 요소가 없으면 자동으로 생성하여 바인딩
            setTimeout(() => {
                this.imageUploadBtn = document.getElementById('upload-image-btn');
                this.imageUploadInput = document.getElementById('upload-image-input');
                if (!this.imageUploadBtn || !this.imageUploadInput) {
                    const container = document.getElementById('chat-container') || document.getElementById('chat-input-wrapper');
                    if (container) {
                        // input 생성
                        if (!document.getElementById('upload-image-input')) {
                            const input = document.createElement('input');
                            input.type = 'file';
                            input.id = 'upload-image-input';
                            input.accept = 'image/*';
                            input.style.display = 'none';
                            container.appendChild(input);
                            this.imageUploadInput = input;
                        }
                        // 버튼 생성
                        if (!document.getElementById('upload-image-btn')) {
                            const btn = document.createElement('button');
                            btn.type = 'button';
                            btn.id = 'upload-image-btn';
                            btn.title = document.documentElement.lang === 'en' ? 'Upload image' : '이미지 업로드';
                            btn.innerHTML = '<span aria-hidden="true">📸</span>';
                            container.appendChild(btn);
                            this.imageUploadBtn = btn;
                        }

                        // 미리보기 컨테이너가 없으면 생성 (img + 제거 버튼 포함)
                        if (!document.getElementById('image-preview-container')) {
                            const previewDiv = document.createElement('div');
                            previewDiv.id = 'image-preview-container';
                            previewDiv.style.display = 'none';
                            previewDiv.style.alignItems = 'center';
                            previewDiv.style.justifyContent = 'center';
                            previewDiv.style.flexDirection = 'column';

                            const img = document.createElement('img');
                            img.id = 'image-preview';
                            img.src = '';
                            img.alt = '';
                            previewDiv.appendChild(img);

                            const remBtn = document.createElement('button');
                            remBtn.id = 'remove-image-btn';
                            remBtn.type = 'button';
                            remBtn.title = document.documentElement.lang === 'en' ? 'Remove image' : '미리보기 제거';
                            remBtn.textContent = '×';
                            previewDiv.appendChild(remBtn);

                            container.appendChild(previewDiv);

                            this.imagePreviewContainer = previewDiv;
                            this.imagePreview = img;
                            this.removeImageBtn = remBtn;
                        }
                    }
                }
            }, 1500);

            return;
        }

        // 업로드 버튼 클릭 시 파일 선택창 열기
        // 버튼이 채팅 입력 래퍼 안에 있는지 확인 — 그렇지 않으면 적절한 위치로 이동
        const chatInputWrapper = document.getElementById('chat-input-wrapper');
        if (chatInputWrapper && this.imageUploadBtn && this.imageUploadBtn.parentElement !== chatInputWrapper) {
            chatInputWrapper.insertBefore(this.imageUploadBtn, chatInputWrapper.firstChild);
        }

        // 버튼 안의 아이콘을 카메라 이모지로 통일
        try { this.imageUploadBtn.innerHTML = '<span aria-hidden="true">📸</span>'; } catch (e) {}

        this.imageUploadBtn.addEventListener('click', () => {
            if (this.chatInput && this.chatInput.disabled) return;
            this.imageUploadInput.click();
        });

        // input 역시 채팅 입력 래퍼 안으로 이동
        if (chatInputWrapper && this.imageUploadInput && this.imageUploadInput.parentElement !== chatInputWrapper) {
            chatInputWrapper.appendChild(this.imageUploadInput);
        }

        // 파일 선택 시 처리
        this.imageUploadInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) this.handleImageUpload(file);
        });

        // 미리보기 제거 버튼 클릭 시
        if (this.removeImageBtn) {
            this.removeImageBtn.addEventListener('click', () => {
                this.removeStagedImage();
            });
        }
    }

    /**
     * 이미지 파일을 읽어서 Base64로 변환 및 리사이징
     * @param {File} file - 선택된 파일 객체
     */
    handleImageUpload(file) {
        if (!file.type.startsWith('image/')) {
            alert(document.documentElement.lang === 'en' ? 'Only image files can be uploaded.' : '이미지 파일만 업로드 가능합니다.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                // 이미지 리사이징 (최대 1024px)
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                const max_size = 1024;

                if (width > height) {
                    if (width > max_size) {
                        height *= max_size / width;
                        width = max_size;
                    }
                } else {
                    if (height > max_size) {
                        width *= max_size / height;
                        height = max_size;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                // JPEG 품질 0.8로 압축
                const base64 = canvas.toDataURL('image/jpeg', 0.8);
                console.debug('[UIManager] handleImageUpload: prepared base64, size=', base64.length);
                this.updateImagePreview(base64);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    /**
     * 이미지 미리보기 영역 업데이트
     * @param {string|null} base64Data - 이미지 데이터 (null이면 제거)
     */
    updateImagePreview(base64Data) {
        console.debug('[UIManager] updateImagePreview called. hasData=', !!base64Data);
        if (base64Data) {
            this.stagedImage = base64Data;
            if (this.imagePreview) {
                this.imagePreview.src = base64Data;
                this.imagePreview.alt = 'Selected image';
            }
            if (this.imagePreviewContainer) {
                this.imagePreviewContainer.style.display = 'inline-flex';
                this.imagePreviewContainer.style.visibility = 'visible';
            }

            // Ensure remove button is bound
            if (this.removeImageBtn && !this.removeImageBtn.dataset.bound) {
                this.removeImageBtn.addEventListener('click', () => {
                    console.debug('[UIManager] removeImageBtn clicked');
                    this.removeStagedImage();
                });
                this.removeImageBtn.dataset.bound = '1';
            }
        } else {
            this.stagedImage = null;
            if (this.imagePreview) this.imagePreview.src = '';
            if (this.imagePreviewContainer) {
                this.imagePreviewContainer.style.display = 'none';
                this.imagePreviewContainer.style.visibility = 'hidden';
            }
        }
    }

    /**
     * 업로드 대기 중인 이미지 제거
     */
    removeStagedImage() {
        this.updateImagePreview(null);
        if (this.imageUploadInput) this.imageUploadInput.value = '';
    }

    /** 
     * 이름 태그 업데이트 (캐릭터 이름 + 호감도 게이지)
     * 
     * ▶ 대화할 때마다 호출되어 현재 말하는 캐릭터의 정보를 표시
     * ▶ 설정에서 호감도 게이지를 끌 수 있음
     * 
     * @param {string} name - 캐릭터 이름 (null이면 이름 태그 숨김)
     */
    updateNameTag(name) {
        // 기존 내용 초기화
        this.nameTagEl.innerHTML = "";

        // 이름이 없으면 태그 숨기고 종료
        if (!name) {
            this.nameTagEl.style.display = 'none';
            return;
        }

        // 이름 텍스트 추가
        const nameSpan = document.createElement('span');
        nameSpan.textContent = name;
        this.nameTagEl.appendChild(nameSpan);

        // 🔧 갤러리에 캐릭터 만남 기록 (최초 1회만 기록됨)
        this.galleryManager.markCharacterMet(name);

        // 호감도 게이지 표시 여부 확인 (설정에서 끌 수 있음)
        const showAffinity = localStorage.getItem('showAffinity') !== 'false';
        const charKey = this.charNameMap[name];  // 예: "서연" → "Seoyeon"

        // 캐릭터가 호감도 대상이고 설정이 켜져있으면 게이지 표시
        if (showAffinity && charKey && this.stateManager.stats[charKey]) {
            const affinity = this.stateManager.getAffinity(charKey);
            const gaugeBox = this.createAffinityGauge(affinity);
            this.nameTagEl.appendChild(gaugeBox);
        }

        this.nameTagEl.style.display = 'block';
    }

    /** 
     * 호감도 게이지 UI 생성
     * 
     * ▶ 이름 태그 옆에 표시되는 막대형 게이지
     * ▶ -100 ~ 100 범위를 0% ~ 100%로 변환
     * ▶ 호감도에 따라 색상이 변함:
     *    - 70 이상: 분홍색 (매우 친밀)
     *    - 0 이상: 연한 분홍 (호감)
     *    - -40 이상: 청록색 (비호감)
     *    - -40 미만: 파란색 (매우 비호감)
     * 
     * @param {number} affinity - 호감도 값 (-100 ~ 100)
     * @returns {HTMLElement} 게이지가 담긴 span 요소
     */
    createAffinityGauge(affinity) {
        // 게이지 컨테이너
        const gaugeBox = document.createElement('span');
        gaugeBox.style.cssText = 'display:inline-flex;align-items:center;margin-left:15px;padding-left:10px;border-left:1px solid rgba(255,255,255,0.3);vertical-align:middle;';

        // 호감도 수치 텍스트 (예: "+50", "-30")
        const valText = document.createElement('span');
        valText.textContent = (affinity > 0 ? "+" : "") + affinity;
        valText.style.cssText = 'font-size:0.8rem;margin-right:8px;min-width:30px;text-align:right;color:#fff;text-shadow:1px 1px 2px rgba(0,0,0,0.5);';

        // 게이지 트랙 (배경)
        const track = document.createElement('span');
        track.style.cssText = 'display:inline-block;width:80px;height:6px;background:rgba(255,255,255,0.2);border-radius:3px;position:relative;overflow:hidden;border:1px solid rgba(0,0,0,0.4);';

        // 게이지 바 (채워지는 부분)
        const bar = document.createElement('span');
        bar.style.cssText = 'position:absolute;height:100%;top:0;left:0;';

        // -100~100 → 0%~100%로 변환 (0이 50% 지점)
        const percent = (affinity + 100) / 2;
        bar.style.width = percent + '%';

        // 🎨 호감도별 색상 지정
        if (affinity >= 70) bar.style.backgroundColor = '#ff7675';      // 분홍색 💗
        else if (affinity >= 0) bar.style.backgroundColor = '#fab1a0'; // 연분홍 💕
        else if (affinity > -40) bar.style.backgroundColor = '#81ecec'; // 청록색 💔
        else bar.style.backgroundColor = '#74b9ff';                     // 파란색 💙

        track.appendChild(bar);

        // 중앙선 표시 (0점 기준선)
        const mid = document.createElement('span');
        mid.style.cssText = 'position:absolute;left:50%;top:0;width:1px;height:100%;background:rgba(255,255,255,0.5);';
        track.appendChild(mid);

        gaugeBox.appendChild(valText);
        gaugeBox.appendChild(track);
        return gaugeBox;
    }

    /** 
     * 호감도 변화 팝업 애니메이션
     * 
     * ▶ 호감도가 변할 때 화면에 "+10 💕" 같은 팝업이 뜸
     * ▶ 5초 후 자동으로 사라짐
     * ▶ CSS 애니메이션으로 위로 떠오르면서 사라지는 효과
     * 
     * @param {number} amount - 변화량 (양수: 증가, 음수: 감소)
     * @param {string} charName - 캐릭터 이름 (선택사항)
     */
    showAffinityChange(amount, charName = null) {
        // 변화량이 0이면 표시 안 함
        if (amount === 0) return;

        // 효과음 재생 (soundManager가 존재하는 경우에만)
        if (typeof soundManager !== 'undefined') {
            const sfxPath = amount > 0 
                ? 'assets/audio/sfx/affinity_up.mp3'
                : 'assets/audio/sfx/affinity_down.mp3';
            soundManager.playSfx(sfxPath);
        }

        // 팝업 요소 생성
        const popup = document.createElement('div');
        popup.className = `affinity-popup ${amount > 0 ? 'positive' : 'negative'}`;

        // 이모지 (증가: 💕, 감소: 💔)
        const emoji = document.createElement('span');
        emoji.className = 'emoji';
        emoji.textContent = amount > 0 ? '💕' : '💔';

        // 변화량 텍스트
        const value = document.createElement('span');
        value.className = 'value';
        value.textContent = amount > 0 ? `+${amount}` : `${amount}`;

        popup.appendChild(emoji);
        popup.appendChild(value);
        document.body.appendChild(popup);

        // 8초 후 자동 제거 (더 오래 유지)
        setTimeout(() => popup.remove(), 8000);
    }

    /** 
     * 커스텀 모달(팝업) 표시
     * 
     * ▶ 브라우저 기본 alert/confirm 대신 사용하는 예쁜 팝업
     * ▶ Promise를 반환해서 async/await로 사용 가능
     * 
     * @param {string} message - 표시할 메시지
     * @param {boolean} isAlert - true면 확인 버튼만, false면 확인+취소
     * @returns {Promise<boolean>} 확인 클릭 시 true, 취소 시 false
     */
    showModal(message, isAlert = false) {
        return new Promise((resolve) => {
            this.modalMessage.textContent = message;
            this.customModal.style.display = 'flex';

            // alert 모드면 취소 버튼 숨김
            this.modalCancelBtn.style.display = isAlert ? 'none' : 'inline-block';

            // 버튼 클릭 핸들러
            const cleanup = () => {
                this.modalConfirmBtn.removeEventListener('click', onConfirm);
                this.modalCancelBtn.removeEventListener('click', onCancel);
                this.customModal.style.display = 'none';
            };
            const onConfirm = () => { cleanup(); resolve(true); };
            const onCancel = () => { cleanup(); resolve(false); };

            this.modalConfirmBtn.addEventListener('click', onConfirm);
            this.modalCancelBtn.addEventListener('click', onCancel);
        });
    }

    /** 
     * "클릭하세요" 다음 지시계 표시/숨김
     * @param {boolean} show - 표시 여부
     * @param {boolean} delayed - true면 1.5초 후 표시 (시네마틱용)
     */
    showNextIndicator(show, delayed = false) {
        if (show) {
            if (delayed) {
                // 시네마틱 장면에서 자연스럽게 지연 표시
                setTimeout(() => {
                    this.nextIndicator.style.display = 'block';
                    this.nextIndicator.classList.add('fade-in');
                }, 1500);
            } else {
                this.nextIndicator.style.display = 'block';
            }
        } else {
            this.nextIndicator.style.display = 'none';
            this.nextIndicator.classList.remove('fade-in');
        }
    }

    /** 
     * 페이드 효과 (화면 어두워짐)
     * @param {boolean} active - 페이드 활성화 여부
     * @param {boolean} showTbc - "To Be Continued" 텍스트 표시 여부
     */
    setFade(active, showTbc = false) {
        if (active) {
            this.fadeLayer.classList.add('active');
            // TBC 텍스트는 1초 후 표시 (페이드 완료 후)
            if (showTbc) setTimeout(() => this.tbcText.classList.add('show'), 1000);
        } else {
            this.fadeLayer.classList.remove('active');
            this.tbcText.classList.remove('show');
        }
    }

    /** 홈으로 돌아가기 확인 모달 표시 */
    showHomeConfirm() {
        const modal = document.getElementById('homeConfirmModal');
        if (modal) modal.style.display = 'flex';
    }

    /** 
     * 홈 확인 모달 닫기
     * @param {Event} e - 클릭 이벤트 (배경 클릭으로 닫기 방지용)
     */
    closeHomeConfirm(e) {
        // 모달 외부 클릭 시에만 닫기
        if (e && e.target !== e.currentTarget && e.target.id !== 'homeConfirmModal') return;
        const modal = document.getElementById('homeConfirmModal');
        if (modal) modal.style.display = 'none';
    }

    /** 홈으로 이동 (BGM 정지 후 메인 페이지로) */
    goToHome() {
        if (window.soundManager) soundManager.stopBgm();
        const isEn = document.documentElement.lang === 'en';
        window.location.href = isEn ? 'index-en.html' : 'index.html';
    }

    /** 
     * 설정 모달 열기
     * - 저장된 설정값을 불러와서 UI에 반영
     */
    openSettingsModal() {
        const modal = document.getElementById('settingsModal');
        if (!modal) return;

        modal.style.display = 'flex';

        // 호감도 표시 설정 불러오기
        try {
            const savedSetting = localStorage.getItem('showAffinity');
            document.getElementById('affinityToggle').checked = savedSetting === null ? true : savedSetting === 'true';

            // 볼륨 설정 불러오기
            const bgmVol = localStorage.getItem('bgmVolume') || 0.5;
            const sfxVol = localStorage.getItem('sfxVolume') || 0.5;

            document.getElementById('bgmVolume').value = bgmVol * 100;
            document.getElementById('sfxVolume').value = sfxVol * 100;
            document.getElementById('bgmVolumeVal').textContent = Math.round(bgmVol * 100) + '%';
            document.getElementById('sfxVolumeVal').textContent = Math.round(sfxVol * 100) + '%';
        } catch (e) {
            // 프라이빗 브라우징 등에서 localStorage 사용 불가 시 기본값 사용
            document.getElementById('affinityToggle').checked = true;
            document.getElementById('bgmVolume').value = 50;
            document.getElementById('sfxVolume').value = 50;
            document.getElementById('bgmVolumeVal').textContent = '50%';
            document.getElementById('sfxVolumeVal').textContent = '50%';
        }
    }

    /** 설정 모달 닫기 */
    closeSettingsModal(e) {
        if (e && e.target !== e.currentTarget && e.target.id !== 'settingsModal') return;
        document.getElementById('settingsModal').style.display = 'none';
    }

    /** 
     * 설정 저장
     * @param {string} currentSceneId - 현재 씬 ID (이름 태그 갱신용)
     * @param {Function} getSceneFn - 씬 조회 함수
     */
    saveSettings(currentSceneId, getSceneFn) {
        // 호감도 표시 설정 저장
        const showAffinity = document.getElementById('affinityToggle').checked;
        try {
            localStorage.setItem('showAffinity', showAffinity);
        } catch (e) {
            // 프라이빗 브라우징 등에서 localStorage 사용 불가 시 무시
        }

        // 볼륨 설정 저장 및 적용
        const bgmVol = document.getElementById('bgmVolume').value / 100;
        const sfxVol = document.getElementById('sfxVolume').value / 100;

        if (window.soundManager) {
            soundManager.setBgmVolume(bgmVol);
            soundManager.setSfxVolume(sfxVol);
        }

        // 볼륨 설정도 localStorage에 저장 (새로고침 후에도 유지)
        try {
            localStorage.setItem('bgmVolume', bgmVol);
            localStorage.setItem('sfxVolume', sfxVol);
        } catch (e) {
            // 프라이빗 브라우징 등에서 localStorage 사용 불가 시 무시
        }

        this.closeSettingsModal();

        // 호감도 표시 설정이 바뀌었을 수 있으니 이름 태그 갱신
        const scene = getSceneFn(currentSceneId);
        if (scene) this.updateNameTag(scene.name);
    }
}


// ============================================================================================
// 💬 DialogueSystem 클래스 - 대화 시스템
// ============================================================================================
// 📌 대사를 한 글자씩 타이핑하는 효과와 관련 기능을 담당합니다.
//    클릭하면 타이핑을 스킵하고 전체 텍스트를 바로 표시합니다.

/**
 * 대화 시스템 클래스
 * 
 * ▶ 주요 기능:
 *   - 타이핑 효과: 대사를 한 글자씩 출력
 *   - 이름 치환: {name}을 플레이어 이름으로 교체
 *   - 조사 처리: 한국어 "은/는" 등 자동 교정
 *   - 캐릭터 애니메이션: 말하는 캐릭터에 효과 적용
 * 
 * ▶ 타이핑 스킵:
 *   타이핑 중 화면을 클릭하면 즉시 전체 텍스트 표시
 */
class DialogueSystem {
    /**
     * @param {StateManager} stateManager - 게임 상태 관리자
     * @param {UIManager} uiManager - UI 관리자
     */
    constructor(stateManager, uiManager) {
        this.stateManager = stateManager;
        this.uiManager = uiManager;
        this.koreanProcessor = new KoreanProcessor();  // 조사 처리기

        /** 현재 타이핑 진행 중 여부 */
        this.isTyping = false;

        /** 타이핑 스킵 요청 플래그 */
        this.skipTyping = false;

        /** 
         * 타이핑 속도 (밀리초 단위)
         * - 30 = 한 글자당 30ms = 초당 약 33글자
         * - 숫자가 작을수록 빠름
         */
        this.typingSpeed = 30;

        /** 캐릭터 표시 이름 → 내부 키 매핑 (공통 상수 참조) */
        this.charNameMap = CHAR_NAME_MAP;

        /** 캐릭터 이름 → 이미지 파일명 매핑 (말하기 애니메이션용) */
        this.charFileMap = {
            "서연": "seyoun", "유나": "yuna", "다인": "dain",
            "담임선생님": "teacher", "보건선생님": "nurse",
            "Seoyeon": "seyoun", "Yuna": "yuna", "Dain": "dain",
            "Teacher": "teacher", "Nurse": "nurse",
            "Homeroom Teacher": "teacher", "School Nurse": "nurse",
            "???": "seyoun"
        };
    }

    /** 
     * 말하는 캐릭터에 애니메이션 효과 적용
     * - 대사 시작 시 캐릭터 이미지에 'char-talking' 클래스 추가
     * - 대사 완료 시 클래스 제거
     * 
     * @param {string} charName - 말하는 캐릭터 이름
     * @param {boolean} isStarting - true: 대사 시작, false: 대사 끝
     */
    updateTalkingAnimation(charName, isStarting) {
        const charSlots = this.uiManager.charSlots;

        // 주인공이나 시스템 메시지는 애니메이션 없음
        if (!charName || charName === "나" || charName === "Me" || charName === "시스템" || charName === "System") {
            // 모든 캐릭터의 말하기 애니메이션 제거
            Object.values(charSlots).forEach(slot => {
                if (!slot) return;
                slot.querySelectorAll('img').forEach(img => img.classList.remove('char-talking'));
            });
            return;
        }

        // 캐릭터 이름으로 이미지 파일명 키 찾기
        const targetKey = this.charFileMap[charName] || charName.toLowerCase();

        // 해당 캐릭터의 이미지에만 애니메이션 적용
        Object.values(charSlots).forEach(slot => {
            if (!slot) return;
            slot.querySelectorAll('img').forEach(img => {
                const src = img.src.toLowerCase();
                if (src.includes(targetKey)) {
                    // 이 캐릭터가 말하는 중
                    if (isStarting) img.classList.add('char-talking');
                    else img.classList.remove('char-talking');
                } else {
                    // 다른 캐릭터는 말하기 애니메이션 끄기
                    img.classList.remove('char-talking');
                }
            });
        });
    }

    /** 
     * 대사 텍스트의 플레이스홀더를 실제 값으로 치환
     * 
     * ▶ 처리하는 패턴:
     *   - {name}: 플레이어 이름으로 치환
     *   - {name?}: 캐릭터가 이름을 알면 이름, 모르면 "전학생"
     *   - {affinity_list}: 전체 캐릭터 호감도 현황표
     * 
     * @param {string} text - 원본 텍스트
     * @param {string} charName - 말하는 캐릭터 이름
     * @returns {string} 처리된 텍스트
     */
    processPlaceholders(text, charName) {
        const isEn = document.documentElement.lang === 'en';

        // 주인공/시스템 메시지인지 확인
        const isPlayer = charName === "나" || charName === "Me" || charName === "시스템" || charName === "System";
        const charKey = charName && (this.charNameMap[charName] || charName);

        // 이 캐릭터가 플레이어 이름을 알고 있는지 확인
        const nameKnown = charKey && this.stateManager.getFlag(`knows_name_${charKey.toLowerCase()}`);
        const defaultTitle = isEn ? "Transfer Student" : "전학생";

        let processedText = text;

        // 한국어: 조사 처리 포함
        if (!isEn && !isPlayer) {
            // {name?}: 이름을 아는지에 따라 다르게 표시
            const nameForQuestion = nameKnown ? this.stateManager.playerName : defaultTitle;
            processedText = this.koreanProcessor.processName(text, nameForQuestion, "{name\\?}");
            // {name}: 항상 플레이어 이름으로
            processedText = this.koreanProcessor.processName(processedText, this.stateManager.playerName, "{name}");
        } else {
            // 영어: 단순 치환
            const nameToUse = nameKnown ? this.stateManager.playerName : defaultTitle;
            processedText = text.replace(/{name\?}/g, nameToUse).replace(/{name}/g, this.stateManager.playerName);
        }

        // {affinity_list}: 호감도 현황표 생성
        if (processedText.includes("{affinity_list}")) {
            processedText = processedText.replace(/{affinity_list}/g, this.generateAffinityList(isEn));
        }

        return processedText;
    }

    /** 
     * 호감도 현황표 생성 (텍스트 형태)
     * - 만난 적 있는 캐릭터만 표시
     * - 하트 이모지로 게이지 표현
     * 
     * @param {boolean} isEn - 영어 버전 여부
     * @returns {string} 호감도 현황 텍스트
     */
    generateAffinityList(isEn) {
        const charNames = isEn ?
            { Seoyeon: "Seoyeon", Yuna: "Yuna", Dain: "Dain", Teacher: "Teacher", Nurse: "Nurse" } :
            { Seoyeon: "서연", Yuna: "유나", Dain: "다인", Teacher: "담임선생님", Nurse: "보건선생님" };

        let listStr = isEn ? "\n\n[Affinity Status]\n" : "\n\n[호감도 현황]\n";

        for (const [key, name] of Object.entries(charNames)) {
            // 만난 적 없는 캐릭터는 건너뛰기
            if (!this.stateManager.getFlag("met_" + key.toLowerCase())) continue;

            const affinity = this.stateManager.getAffinity(key);
            let bar = "";

            // 호감도에 따라 하트 게이지 생성
            if (affinity >= 0) {
                const filled = Math.min(10, Math.floor(affinity / 10));
                bar = "❤️".repeat(filled) + "🤍".repeat(10 - filled);
            } else {
                const broken = Math.min(10, Math.floor(Math.abs(affinity) / 10));
                bar = "💔".repeat(broken) + "🤍".repeat(10 - broken);
            }

            listStr += `${name}: ${bar} (${affinity}%)\n`;
        }

        return listStr;
    }

    /** 
     * 텍스트 타이핑 효과 (한 글자씩 출력)
     * 
     * ▶ 작동 방식:
     *   requestAnimationFrame을 사용해 부드러운 타이핑 효과 구현
     *   typingSpeed 간격으로 한 글자씩 추가
     * 
     * ▶ 스킵:
     *   타이핑 중 클릭하면 skipTyping = true가 되어 즉시 완료
     * 
     * @param {string} text - 출력할 텍스트
     * @param {string} charName - 말하는 캐릭터 이름
     * @returns {Promise} 타이핑 완료 시 resolve
     */
    typeText(text, charName) {
        // 텍스트가 없으면 바로 완료
        if (text === undefined || text === null) {
            console.warn("[DialogueSystem] typeText: 텍스트 없음");
            return Promise.resolve();
        }

        // 플레이스홀더 처리
        const processedText = this.processPlaceholders(text, charName);

        // 말하기 애니메이션 시작
        this.updateTalkingAnimation(charName, true);

        return new Promise((resolve) => {
            this.isTyping = true;
            this.skipTyping = false;

            // 스킵 버튼 비활성화 (타이핑 중 프리토킹 스킵 방지)
            if (this.uiManager.chatSkipBtn) this.uiManager.chatSkipBtn.disabled = true;

            // 대사창 초기화
            this.uiManager.messageEl.textContent = "";

            // 이미지 포함 여부 확인 (Base64 데이터가 있으면 이미지)
            const hasImage = processedText.includes('data:image/');
            let textPart = processedText;
            let imagePart = "";

            if (hasImage) {
                if (processedText.includes('\n\ndata:image/')) {
                    const parts = processedText.split('\n\ndata:image/');
                    textPart = parts[0];
                    imagePart = 'data:image/' + parts[1];
                } else if (processedText.startsWith('data:image/')) {
                    textPart = "";
                    imagePart = processedText;
                }
            }

            let charIndex = 0;      // 현재까지 표시한 글자 수
            let startTime = null;   // 타이핑 시작 시각

            // 애니메이션 프레임 함수
            const typeFrame = (timestamp) => {
                if (!startTime) startTime = timestamp;

                // 스킵 요청이 들어오면 즉시 전체 텍스트 표시
                if (this.skipTyping) {
                    this.uiManager.messageEl.textContent = processedText;
                    this.isTyping = false;
                    if (this.uiManager.chatSkipBtn) this.uiManager.chatSkipBtn.disabled = false;
                    this.skipTyping = false;
                    this.updateTalkingAnimation(charName, false);
                    resolve();
                    return;
                }

                const elapsed = timestamp - startTime;
                const targetIndex = Math.min(Math.floor(elapsed / this.typingSpeed), processedText.length);

                if (charIndex < targetIndex) {
                    this.uiManager.messageEl.textContent = textPart.substring(0, targetIndex);
                    charIndex = targetIndex;
                }

                if (charIndex < textPart.length) {
                    requestAnimationFrame(typeFrame);
                } else {
                    this.isTyping = false;
                    if (this.uiManager.chatSkipBtn) this.uiManager.chatSkipBtn.disabled = false;
                    this.updateTalkingAnimation(charName, false);

                    // 이미지가 있으면 추가
                    if (imagePart) {
                        const img = document.createElement('img');
                        img.src = imagePart;
                        img.className = 'chat-image';
                        img.onclick = () => {
                            if (window.openImageModal) window.openImageModal(imagePart);
                        };
                        this.uiManager.messageEl.appendChild(img);
                    }

                    resolve();
                }
            };

            requestAnimationFrame(typeFrame);
        });
    }

    /** 
     * 타이핑 스킵 요청
     * - 대화창 클릭 시 호출됨
     * - 타이핑 중이면 즉시 완료 플래그 설정
     */
    requestSkip() {
        if (this.isTyping) this.skipTyping = true;
    }

    /** 
     * 현재 타이핑 중인지 확인
     * @returns {boolean} 타이핑 중이면 true
     */
    isCurrentlyTyping() {
        return this.isTyping;
    }
}


// ============================================================================================
// 🤖 FreeTalkSystem 클래스 - AI 자유 대화 시스템
// ============================================================================================
// 📌 AI API를 호출하여 캐릭터와 자유롭게 대화할 수 있는 시스템입니다.
//    시나리오에서 type: 'free_talk'인 씬에서 활성화됩니다.
//    대화 내용에 따라 호감도가 실시간으로 변화합니다.

/**
 * 자유 대화(프리토킹) 시스템 클래스
 * 
 * ▶ 작동 방식:
 *   1. 시나리오에서 free_talk 씬 진입
 *   2. 캐릭터 성격, 현재 상황, 대화 기록 등을 담은 시스템 프롬프트 생성
 *   3. 플레이어 입력을 받아 AI API로 전송
 *   4. AI 응답에서 [EXPRESSION:표정], [STATS:affinity +10] 같은 태그 처리
 *   5. 정해진 턴 수만큼 대화 후 종료
 * 
 * ▶ AI 응답 특수 태그:
 *   - [EXPRESSION: happy] → 캐릭터 표정 이미지 변경
 *   - [STATS: affinity +10] → 호감도 변경
 */
class FreeTalkSystem {
    /**
     * @param {StateManager} stateManager - 게임 상태 관리자
     * @param {GalleryManager} galleryManager - 갤러리 관리자
     * @param {UIManager} uiManager - UI 관리자
     * @param {DialogueSystem} dialogueSystem - 대화 시스템
     */
    constructor(stateManager, galleryManager, uiManager, dialogueSystem) {
        this.stateManager = stateManager;
        this.galleryManager = galleryManager;
        this.uiManager = uiManager;
        this.dialogueSystem = dialogueSystem;

        /** 현재 프리토킹 진행 중 여부 */
        this.isFreeTalking = false;

        /** 현재 채팅 처리 중 여부 (중복 호출 방지) */
        this.isProcessingChat = false;

        /** 현재까지 진행한 턴 수 */
        this.freeTalkTurns = 0;

        /** 이 대화의 최대 턴 수 */
        this.currentMaxTurns = DEFAULT_MAX_FREE_TALK_TURNS;

        /** 
         * 대화 기록 배열
         * - OpenAI API 형식: [{role: "system", content: "..."}, {role: "user", content: "..."}, ...]
         */
        this.freeTalkHistory = [];

        /** 현재 프리토킹 씬의 ID */
        this.currentSceneId = null;

        /** 캐릭터 이름 매핑 (공통 상수 참조) */
        this.charNameMap = CHAR_NAME_MAP;
    }

    /** 
     * 게임 내 플래그 기반으로 캐릭터의 "기억"을 생성
     * 
     * ▶ FLAG_MEMORIES란?
     *   prompts.js에 정의된 배열로, 게임 이벤트와 그에 대한 기억을 매핑
     *   예: { flag: "sharedLunch", char: "Seoyeon", ko: "{name}과 점심을 함께 먹었다", en: "Had lunch with {name}" }
     * 
     * @param {string} charName - 대화 상대 캐릭터
     * @param {boolean} isEn - 영어 버전 여부
     * @returns {string} AI에게 전달할 기억 텍스트
     */
    getGameContext(charName, isEn) {
        // FLAG_MEMORIES가 없으면 빈 문자열 반환
        if (!window.FLAG_MEMORIES) return "";

        // 이 캐릭터와 관련된 기억 중 플래그가 true인 것만 필터링
        const memories = FLAG_MEMORIES.filter(m => {
            // 캐릭터 매칭 (한/영 모두 체크)
            // 다국어 지원: 한국어↔영어 모드 전환 시에도 플래그 기억이 정상 로드되도록
            // 캐릭터 이름을 양방향으로 매칭
            const charMatch = m.char === charName ||
                (charName === "서연" && m.char === "Seoyeon") ||
                (charName === "Seoyeon" && m.char === "서연") ||
                (charName === "유나" && m.char === "Yuna") ||
                (charName === "Yuna" && m.char === "유나") ||
                (charName === "다인" && m.char === "Dain") ||
                (charName === "Dain" && m.char === "다인") ||
                (charName === "담임선생님" && m.char === "Teacher") ||
                (charName === "Teacher" && m.char === "담임선생님") ||
                (charName === "담임선생님" && m.char === "Homeroom Teacher") ||
                (charName === "Homeroom Teacher" && m.char === "담임선생님") ||
                (charName === "보건선생님" && m.char === "Nurse") ||
                (charName === "Nurse" && m.char === "보건선생님") ||
                (charName === "보건선생님" && m.char === "School Nurse") ||
                (charName === "School Nurse" && m.char === "보건선생님");
            // 플래그가 true인 기억만 포함
            return charMatch && this.stateManager.getFlag(m.flag);
        });

        // 기억이 없으면 빈 문자열
        if (memories.length === 0) return "";

        // 기억들을 리스트 형태로 포맷팅
        const header = isEn ? "\n\n[Recent Events & Memories]:\n" : "\n\n[최근 사건 및 기억]:\n";
        return header + memories.map(m => {
            let text = isEn ? m.en : m.ko;
            return `- ${text.replace(/{name}/g, this.stateManager.playerName)}`;
        }).join("\n");
    }

    /** 
     * 다른 캐릭터들의 정보 생성 (질투/관계 인식용)
     * 
     * ▶ AI가 다른 캐릭터들의 존재와 플레이어와의 관계를 인지하게 함
     *   다른 캐릭터의 호감도가 높으면 질투 반응을 보일 수 있음
     * 
     * @param {string} currentCharName - 현재 대화 중인 캐릭터
     * @param {boolean} isEn - 영어 버전 여부
     * @returns {string} AI에게 전달할 소셜 컨텍스트
     */
    getSocialContext(currentCharName, isEn) {
        // 각 캐릭터의 기본 설명
        const characters = isEn ? {
            "Seoyeon": "Student Council President. Kind but lonely.",
            "Yuna": "Mysterious girl. Interested in the user's 'light'.",
            "Dain": "Energetic girl. Close friend of the user.",
            "Homeroom Teacher": "Professional but has a clumsy side.",
            "Nurse": "A mature and playful health teacher who cares deeply for her students."
        } : {
            "서연": "학생회장. 모두에게 친절하지만 외로움을 잘 탐.",
            "유나": "신비로운 소녀. 주인공의 '빛'에 집착함.",
            "다인": "활기찬 소녀. 주인공과 편한 친구 사이.",
            "담임선생님": "전문적인 교사지만 허당끼가 있음.",
            "보건선생님": "매혹적이고 장난기 많은 보건 교사."
        };

        // 현재 대화 상대 제외한 다른 캐릭터들 정보 생성
        const otherChars = Object.entries(characters)
            .filter(([name]) => name !== currentCharName)
            .map(([name, desc]) => {
                const charKey = this.charNameMap[name] || name;
                const affinity = this.stateManager.getAffinity(charKey);

                // 관계 상태 텍스트 생성
                let status = "";
                if (this.stateManager.getFlag(`isDating_${charKey}`) || this.stateManager.getFlag(`isDating_${name}`)) {
                    status = isEn ? " (Currently DATING the user)" : " (현재 사용자와 사귀는 사이)";
                } else if (affinity >= 70) {
                    status = isEn ? " (Convinced they are dating the user)" : " (사용자와 사귀는 사이라고 확신함)";
                } else if (affinity >= 50) {
                    status = isEn ? " (Suspecting they are dating the user)" : " (사용자와 사귀는 사이인지 의심함)";
                }

                const affinityText = isEn ? ` (Affinity: ${affinity})` : ` (호감도: ${affinity})`;
                return `- ${name}: ${desc}${affinityText}${status}`;
            })
            .join("\n");

        const header = isEn ? "\n\n[Other Characters in School & Your Awareness]:\n" : "\n\n[학교의 다른 인물들 및 당신의 인지 상태]:\n";

        // 질투 반응 지침
        const jealousyInstruction = isEn ?
            "\nNote: You are aware of the user's relationship with others. If their affinity is high (50+), you may feel jealous, suspicious, or obsessive depending on your personality." :
            "\n참고: 당신은 사용자와 다른 캐릭터들의 관계를 인지하고 있습니다. 다른 캐릭터의 호감도가 높을 경우(50 이상), 당신의 성격에 따라 질투, 의심, 또는 집착을 보일 수 있습니다.";

        return header + otherChars + jealousyInstruction;
    }

    /** 
     * 프리토킹 시작
     * 
     * ▶ 처리 순서:
     *   1. 기존 대화 기록 불러오기
     *   2. 현재 장소, 캐릭터 상태 등 컨텍스트 수집
     *   3. 시스템 프롬프트 생성 (캐릭터 성격 + 상황 + 지침)
     *   4. 채팅 UI 표시
     *   5. 초기 대사 출력 (있는 경우)
     * 
     * @param {Object} scene - 씬 데이터
     * @param {string} sceneId - 씬 ID
     */
    async startFreeTalk(scene, sceneId) {
        // 이미 프리토킹 중이면 무시 (중복 호출 방지)
        if (this.isFreeTalking) return;

        this.isFreeTalking = true;
        this.freeTalkTurns = 0;
        this.currentMaxTurns = scene.maxTurns || DEFAULT_MAX_FREE_TALK_TURNS;
        this.currentSceneId = sceneId;

        const isEn = document.documentElement.lang === 'en';

        // 게임 내 이벤트 기억 수집
        const gameContext = this.getGameContext(scene.name, isEn);

        // 다른 캐릭터들과의 관계 정보
        const socialContext = this.getSocialContext(scene.name, isEn);

        // 이전 대화 기록 불러오기 (같은 캐릭터와의 이전 대화)
        this.freeTalkHistory = [...this.stateManager.getChatMemory(scene.name)];

        // 🔍 현재 배경 이미지로 장소 유추
        let locationName = isEn ? "School" : "학교";
        const bgUrl = this.uiManager.bgLayer.style.backgroundImage;
        if (bgUrl.includes('room_school')) locationName = isEn ? "Classroom" : "교실";
        else if (bgUrl.includes('load_school')) locationName = isEn ? "Hallway" : "복도";
        else if (bgUrl.includes('school.png')) locationName = isEn ? "School Gate" : "교문 앞";
        else if (bgUrl.includes('top_school')) locationName = isEn ? "Rooftop" : "학교 옥상";
        else if (bgUrl.includes('playground')) locationName = isEn ? "Playground" : "운동장";
        else if (bgUrl.includes('gym')) locationName = isEn ? "Gym" : "체육관";
        else if (bgUrl.includes('nurse_room')) locationName = isEn ? "Nurse's Office" : "보건실";
        else if (bgUrl.includes('library')) locationName = isEn ? "Library" : "도서관";
        else if (bgUrl.includes('home_room')) locationName = isEn ? "My Room" : "주인공의 방";

        // 캐릭터 정보 수집
        const charKey = this.charNameMap[scene.name] || scene.name;
        const knowsName = this.stateManager.getFlag(`knows_name_${charKey.toLowerCase()}`);
        const charStats = this.stateManager.stats[charKey] || { affinity: 0 };

        // 🔧 프롬프트 데이터 가져오기 (prompts.js에서)
        const promptData = window.getPromptData ? window.getPromptData(isEn, this.stateManager.playerName) : {};

        // 연인 관계 가이드라인
        let datingGuideline = "";
        const isDatingCurrent = this.stateManager.getFlag(`isDating_${charKey}`) || this.stateManager.getFlag(`isDating_${scene.name}`);

        if (isDatingCurrent) {
            datingGuideline = isEn ?
                `\n- SPECIAL: You are currently DATING the user. Use extremely intimate and affectionate nicknames regardless of the affinity tiers below.` :
                `\n- 특별 지침: 당신은 현재 사용자와 사귀는 사이입니다. 매우 친밀하고 애정 어린 호칭을 사용하세요.`;

            // 양다리 감지
            const otherDatingChars = Object.keys(this.charNameMap).filter(name => {
                const key = this.charNameMap[name];
                return key !== charKey && (this.stateManager.getFlag(`isDating_${key}`) || this.stateManager.getFlag(`isDating_${name}`));
            });

            if (otherDatingChars.length > 0) {
                datingGuideline += isEn ?
                    `\n- JEALOUSY: You noticed the user is also dating others (${otherDatingChars.join(", ")}).` :
                    `\n- 질투 지침: 사용자가 다른 사람들(${otherDatingChars.join(", ")})과도 사귀고 있습니다.`;
            }
        }

        // 통신 매체 판단
        const remoteKeywords = ["연락", "메시지", "전화", "톡", "문자", "Contact", "Message", "Call", "Text", "전송"];
        const isRemote = remoteKeywords.some(k =>
            (scene.context && scene.context.includes(k)) ||
            (scene.buttonText && scene.buttonText.includes(k)) ||
            (scene.text && scene.text.includes(k))
        );

        const mediumInstruction = isEn ?
            (isRemote ? "\n- MEDIUM: Communicating via PHONE/MESSENGER." : "\n- MEDIUM: Talking FACE-TO-FACE.") :
            (isRemote ? "\n- 매체 지침: 전화/메시지로 연락 중." : "\n- 매체 지침: 대면 대화 중.");

        // 시스템 프롬프트 생성
        const systemPrompt = window.buildSystemPrompt ? window.buildSystemPrompt({
            isEn,
            sceneName: charKey,
            displayName: scene.name,
            locationName,
            context: scene.context || (isEn ? "Talking with the user." : "사용자와 대화 중입니다."),
            affinity: charStats.affinity,
            extraGuideline: scene.extra_guideline || "",
            gameContext,
            socialContext,
            mediumInstruction,
            promptData,
            currentMaxTurns: this.currentMaxTurns,
            playerName: this.stateManager.playerName,
            knowsName,
            datingGuideline
        }) : "";

        this.freeTalkHistory = [{ role: "system", content: systemPrompt }, ...this.freeTalkHistory.filter(m => m.role !== "system")];

        // UI 설정
        this.uiManager.chatContainer.style.display = 'block';

        const chatGuideEl = document.getElementById('chat-guide');
        if (chatGuideEl) {
            if (isEn) {
                chatGuideEl.innerHTML = isRemote
                    ? "<b>Tip:</b> Describe tone in brackets, e.g., <i>(smiling) Hey...</i>"
                    : "<b>Tip:</b> Describe scene or actions, e.g., <i>(holds hand) Let's go.</i>";
            } else {
                chatGuideEl.innerHTML = isRemote
                    ? "<b>Tip:</b> <i>(웃으며) 자?</i> 처럼 어조나 상황을 표현해보세요."
                    : "<b>Tip:</b> <i>(손을 잡으며) 같이 가자.</i> 처럼 말해보세요.";
            }
        }

        // ─────────────────────────────────────────────────────────────
        // 전송 버튼 스타일 설정
        // ─────────────────────────────────────────────────────────────
        // 기본 버튼 텍스트 목록 (이 텍스트들은 아이콘 버튼으로 표시)
        const iconButtons = ["말하기", "전송", "전송하기", "Send"];

        if (scene.buttonText && !iconButtons.includes(scene.buttonText)) {
            // 커스텀 버튼 텍스트가 있는 경우 (예: "고백하기", "대답하기")
            // → 텍스트 버튼으로 표시 (직사각형, 가변 너비)
            this.uiManager.chatSendBtn.textContent = scene.buttonText;
            this.uiManager.chatSendBtn.style.cssText = 'border-radius:8px;width:auto;padding:0 20px;';
        } else {
            // 기본 버튼인 경우
            // → 아이콘 버튼으로 표시 (원형, 고정 크기)
            this.uiManager.chatSendBtn.innerHTML = SEND_ICON;
            this.uiManager.chatSendBtn.style.cssText = 'border-radius:50%;width:45px;padding:0;';
        }

        // ─────────────────────────────────────────────────────────────
        // UI 상태 초기화
        // ─────────────────────────────────────────────────────────────
        // 남은 대화 턴 수 표시 (요소가 있는 경우에만)
        if (this.uiManager.turnCountEl) this.uiManager.turnCountEl.textContent = this.currentMaxTurns;

        // 스킵 버튼 활성화 (대화 중단 가능하도록)
        if (this.uiManager.chatSkipBtn) this.uiManager.chatSkipBtn.disabled = false;

        // ─────────────────────────────────────────────────────────────
        // 초기 대사 표시 (씬에 text가 있는 경우)
        // ─────────────────────────────────────────────────────────────
        // 캐릭터가 먼저 말을 거는 상황 (예: "안녕! 무슨 일이야?")
        // → 타이핑 효과로 표시하고, AI 대화 기록에도 추가
        if (scene.text) {
            await this.dialogueSystem.typeText(scene.text, scene.name);
            this.freeTalkHistory.push({ role: "assistant", content: scene.text });
        }
    }

    /** 프리토킹 스킵 */
    async skipFreeTalk() {
        if (this.dialogueSystem.isCurrentlyTyping() || !this.isFreeTalking) return;

        const isEn = document.documentElement.lang === 'en';
        const confirmMsg = isEn ? "Stop the conversation and proceed?" : "대화를 중단하고 다음 장면으로 넘어가시겠습니까?";

        const confirmed = await this.uiManager.showModal(confirmMsg);
        if (confirmed) {
            this.freeTalkTurns = this.currentMaxTurns;
            this.stateManager.setFlag(`messaged_${this.currentSceneId}`);
            this.uiManager.chatContainer.style.display = 'none';
            this.isFreeTalking = false;

            const endMsg = isEn ?
                "\n\n(Conversation ended. Click to continue.)" :
                "\n\n(대화가 종료되었습니다. 화면을 클릭하여 계속하세요.)";
            this.uiManager.messageEl.textContent += endMsg;
        }
    }

    /** 폴백 응답 생성 */
    getFallbackReply(charName, isEn, getSceneFn) {
        const charKey = this.charNameMap[charName] || charName;
        const affinity = this.stateManager.getAffinity(charKey);
        const isDating = this.stateManager.getFlag(`isDating_${charKey}`) || this.stateManager.getFlag(`isDating_${charName}`);

        const scene = getSceneFn(this.currentSceneId);
        const remoteKeywords = ["연락", "메시지", "전화", "톡", "문자", "Contact", "Message", "Call", "Text", "전송"];
        const isRemote = scene && remoteKeywords.some(k =>
            (scene.context && scene.context.includes(k)) ||
            (scene.buttonText && scene.buttonText.includes(k)) ||
            (scene.text && scene.text.includes(k))
        );

        // prompts.js의 함수 호출
        if (window.getFallbackReply) {
            return window.getFallbackReply(charKey, isEn, isDating, affinity, isRemote, this.stateManager.playerName);
        }
        return "...";
    }

    /** 채팅 메시지 전송 */
    async sendChatMessage(getSceneFn) {
        // 이미 처리 중이면 무시 (중복 호출 방지)
        if (this.isProcessingChat) return;

        const stagedImageEarly = this.uiManager.stagedImage;
        const text = this.uiManager.chatInput.value.trim();
        // 텍스트가 없고 이미지도 없으면 전송하지 않음
        if ((!text && !stagedImageEarly) || this.freeTalkTurns >= this.currentMaxTurns || this.dialogueSystem.isCurrentlyTyping()) return;

        this.isProcessingChat = true;

        this.uiManager.chatInput.value = "";
        this.freeTalkTurns++;
        if (this.uiManager.turnCountEl) this.uiManager.turnCountEl.textContent = this.currentMaxTurns - this.freeTalkTurns;

        // 프리토킹 횟수 증가
        const scene = getSceneFn(this.currentSceneId);
        const charKey = this.charNameMap[scene.name] || scene.name;
        this.galleryManager.incrementFreeTalkCount(charKey);

        // 진행 상황 업데이트
        if (this.freeTalkHistory.length > 0 && this.freeTalkHistory[0].role === "system") {
            const isEn = document.documentElement.lang === 'en';
            const remaining = this.currentMaxTurns - this.freeTalkTurns;
            const progressTag = isEn ?
                `\n[CURRENT_PROGRESS]: ${this.freeTalkTurns}/${this.currentMaxTurns} turns. ${remaining} remaining.` :
                `\n[현재 진행 상황]: ${this.freeTalkTurns}/${this.currentMaxTurns}턴. ${remaining}턴 남음.`;

            const baseContent = this.freeTalkHistory[0].content.split('\n[CURRENT_PROGRESS]')[0].split('\n[현재 진행 상황]')[0];
            this.freeTalkHistory[0].content = baseContent + progressTag;
        }

        // 사용자 메시지 표시
        this.uiManager.updateNameTag("나");

        // 이미지와 메시지 결합 처리
        const stagedImage = this.uiManager.stagedImage;
        const finalContent = stagedImage
            ? (text ? `${text}\n\n${stagedImage}` : stagedImage)
            : text;

        // 텍스트 표시
        this.uiManager.messageEl.textContent = text || '';
        if (stagedImage) {
            const img = document.createElement('img');
            img.src = stagedImage;
            img.className = 'chat-image';
            this.uiManager.messageEl.appendChild(img);
        }

        this.freeTalkHistory.push({ role: "user", content: finalContent });

        // 이미지 미리보기 제거
        this.uiManager.removeStagedImage();

        // 로딩 상태
        this.uiManager.chatSendBtn.disabled = true;
        if (this.uiManager.chatSkipBtn) this.uiManager.chatSkipBtn.disabled = true;
        this.uiManager.chatInput.disabled = true;
        const originalBtnContent = this.uiManager.chatSendBtn.innerHTML;
        this.uiManager.chatSendBtn.innerHTML = `<span class="loading-dots">...</span>`;

        // 생각중 상태
        document.querySelectorAll('.char-slot img').forEach(img => img.classList.add('thinking'));
        this.uiManager.dialogueBox.classList.add('thinking-box');

        // ─────────────────────────────────────────────────────────────
        // 🌐 AI API 호출 (try-catch로 오류 처리)
        // ─────────────────────────────────────────────────────────────
        // ⚠️ 흔한 오류 상황:
        //   1. "AI가 응답하지 않아요" - 네트워크 오류 또는 API 서버 다운
        //   2. "...만 나와요" - API 응답 파싱 실패
        //   3. "방금 당했어요" - API 키 문제 또는 요청 제한
        //
        // 확인 방법:
        //   - F12 → Network 탭에서 API 요청/응답 확인
        //   - Console 탭에서 "AI Chat Error" 메시지 확인
        // ─────────────────────────────────────────────────────────────
        try {
            // 📡 API 서버에 HTTP POST 요청
            // - API_ENDPOINT: 파일 상단에 정의된 서버 주소
            // - messages: 대화 기록 전체 (시스템 프롬프트 + 대화 내용)
            const response = await fetch(API_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-app-type": "cupid" },
                body: JSON.stringify({ messages: this.freeTalkHistory })
            });

            // HTTP 상태 코드 확인 (200번대가 아니면 오류)
            // 400: 잘못된 요청, 401: 인증 실패, 429: 요청 제한, 500: 서버 오류
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            // JSON 파싱
            const data = await response.json();

            // OpenAI API 응답 구조에서 대답 텍스트 추출
            // 구조: { choices: [{ message: { content: "대답 내용" } }] }
            let reply = data?.choices?.[0]?.message?.content?.trim();

            // JSON 응답 파싱 → {text, expression, affinity} 구조체 반환
            const parsed = this.parseJsonResponse(reply);

            if (parsed) {
                // ─────────────────────────────────────────────────────────
                // 🛡️ NSFW 안전장치: 저호감도에서 신체적/성적 행동 시 호감도 증가 차단
                // ─────────────────────────────────────────────────────────
                // AI가 프롬프트를 무시하고 긍정적으로 반응할 경우를 대비한 코드 레벨 방어
                const currentAffinity = (this.stateManager.stats[charKey] || {}).affinity || 0;
                const isDatingCurrent = this.stateManager.getFlag(`isDating_${charKey}`) || this.stateManager.getFlag(`isDating_${scene.name}`);
                if (!isDatingCurrent && parsed.affinity > 0 && text) {
                    // 괄호 안 내용에서 신체적/성적 키워드 감지
                    const parenContent = (text.match(/\(([^)]+)\)/g) || []).join(' ').toLowerCase();
                    if (parenContent) {
                        const nsfwKeywords = /키스|뽀뽀|껴안|포옹|안아|만지|잡아|스킨십|가슴|엉덩이|허벅지|입술|핥|빨|벗|더듬|쓰다듬|몸|허리|볼[에를]|kiss|hug|embrac|touch|grab|grope|fond|caress|strip|undress|breast|butt|thigh|lip|lick|suck|body|waist|cheek/i;
                        if (nsfwKeywords.test(parenContent)) {
                            if (currentAffinity <= 30) {
                                // 저호감도: 호감도 증가 완전 차단, 강제 감소
                                parsed.affinity = Math.min(parsed.affinity, -5);
                                if (parsed.expression === 'shy' || parsed.expression === 'shy2') {
                                    parsed.expression = 'angry';
                                }
                            } else if (currentAffinity <= 70) {
                                // 중간 호감도: 호감도 증가를 0으로 캡
                                parsed.affinity = Math.min(parsed.affinity, 0);
                                if (parsed.expression === 'shy' || parsed.expression === 'shy2') {
                                    parsed.expression = 'pout';
                                }
                            }
                        }
                    }
                }

                // JSON 필드에서 표정 변화 처리
                if (parsed.expression) {
                    this.applyExpression(parsed.expression, scene);
                }
                // JSON 필드에서 호감도 변화 처리
                if (parsed.affinity !== 0) {
                    this.applyAffinity(parsed.affinity, scene);
                }

                reply = parsed.text || "...";

                // 레거시 폴백: 인라인 태그가 텍스트에 남아있을 경우 처리
                reply = this.processExpressionTags(reply, scene);
                reply = this.processStatsTags(reply, scene);

                if (!reply) reply = "...";

                this.uiManager.updateNameTag(scene.name);

                // 생각중 상태 해제
                document.querySelectorAll('.char-slot img').forEach(img => img.classList.remove('thinking'));
                this.uiManager.dialogueBox.classList.remove('thinking-box');

                await this.dialogueSystem.typeText(reply, scene.name);
                this.freeTalkHistory.push({ role: "assistant", content: reply });

                // 대화 기록 저장
                this.stateManager.setChatMemory(scene.name, this.freeTalkHistory);
            } else {
                this.uiManager.updateNameTag(scene.name);
                await this.dialogueSystem.typeText("...", scene.name);
            }

            // 대화 종료 체크
            if (this.freeTalkTurns >= this.currentMaxTurns) {
                this.endFreeTalk();
            }
            // ─────────────────────────────────────────────────────────────
            // ❌ 오류 발생 시: 폴백 메시지로 대체
            // ─────────────────────────────────────────────────────────────
            // 폴백 메시지: AI 연결 실패 시 미리 정의된 대답을 보여줌
            // 사용자가 오류 화면을 보지 않고 게임을 계속할 수 있음
            // ─────────────────────────────────────────────────────────────
        } catch (error) {
            // 🔍 오류 내용을 콘솔에 기록 (디버깅용)
            // F12 → Console 탭에서 확인 가능
            console.error("AI Chat Error:", error);

            // 현재 언어 확인 (한국어/영어)
            const isEn = document.documentElement.lang === 'en';

            // 폴백 메시지 가져오기 (prompts.js에서 정의)
            const fallbackMsg = this.getFallbackReply(scene.name, isEn, getSceneFn);

            // 폴백 메시지를 화면에 표시
            this.uiManager.updateNameTag(scene.name);
            await this.dialogueSystem.typeText(fallbackMsg, scene.name);
            this.freeTalkHistory.push({ role: "assistant", content: fallbackMsg });

            // 대화 종료 처리 (오류 발생해도 게임은 계속)
            this.freeTalkTurns = this.currentMaxTurns;
            this.endFreeTalk();
        } finally {
            this.isProcessingChat = false;  // 처리 완료 플래그 해제
            this.uiManager.chatSendBtn.disabled = false;
            if (this.uiManager.chatSkipBtn) this.uiManager.chatSkipBtn.disabled = false;
            this.uiManager.chatInput.disabled = false;
            this.uiManager.chatSendBtn.innerHTML = originalBtnContent;

            document.querySelectorAll('.char-slot img').forEach(img => img.classList.remove('thinking'));
            this.uiManager.dialogueBox.classList.remove('thinking-box');

            this.uiManager.chatInput.focus();
        }
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 🔄 parseJsonResponse - AI 응답에서 JSON 파싱 및 텍스트 추출
     * ═══════════════════════════════════════════════════════════════
     * 
     * ▶ 왜 필요한가?
     *   AI가 가끔 JSON 형식으로 응답을 보내는 경우가 있습니다.
     *   예: {"text": "안녕!", "emotion": "happy"}
     *   이런 경우 JSON을 파싱해서 텍스트만 추출해야 합니다.
     * 
     * ▶ 처리하는 케이스:
     *   1. ```json ... ``` 형태의 코드 블록
     *   2. 순수 JSON 문자열 { ... } 또는 [ ... ]
     *   3. 텍스트 중간에 포함된 JSON
     * 
     * ▶ 텍스트 추출 우선순위:
     *   text → dialogue → content → message → response → msg → result
     *   → 위 키가 없으면 가장 긴 문자열 값 사용
     * 
     * ⚠️ 흔한 오류 상황:
     *   1. AI 응답이 "..."로만 나옴
     *      → JSON 파싱은 성공했지만 텍스트 키를 찾지 못함
     *      → 콘솔에서 실제 응답 확인: console.log(reply)
     *   
     *   2. 이상한 문자가 표시됨
     *      → JSON이 아닌데 파싱 시도한 경우
     *      → 정상적으로 원본 텍스트가 반환되어야 함
     * 
     * @param {string} reply - AI 응답 원문
     * @returns {string} 추출된 텍스트 또는 원본 그대로
     */
    parseJsonResponse(reply) {
        // 📌 빈 응답이면 기본 구조체 반환
        if (!reply) return { text: "", expression: "", affinity: 0 };

        // 📌 JSON일 가능성 체크 (중괄호, 대괄호, 또는 코드블록 포함 여부)
        const likelyJson = reply.includes('{') || reply.includes('[') || reply.includes('```json');
        if (!likelyJson) return { text: reply, expression: "", affinity: 0 };  // 순수 텍스트면 그대로

        try {
            let jsonStr = reply;

            // 📌 케이스 1: ```json ... ``` 코드 블록에서 JSON 추출
            if (jsonStr.includes('```')) {
                const match = jsonStr.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
                if (match) jsonStr = match[1];  // 코드 블록 내용만 추출
            }

            // 📌 케이스 2: JSON 시작점 찾기 (텍스트 중간에 JSON이 있는 경우)
            if (!jsonStr.trim().startsWith('{') && !jsonStr.trim().startsWith('[')) {
                const startExpr = jsonStr.indexOf('{');   // { 위치 찾기
                const startArray = jsonStr.indexOf('[');  // [ 위치 찾기

                // 둘 중 더 앞에 있는 것 선택 (둘 다 없으면 -1)
                let start = startExpr !== -1 && startArray !== -1 ? Math.min(startExpr, startArray) : Math.max(startExpr, startArray);

                if (start !== -1) {
                    // JSON 끝 위치 찾기
                    const end = Math.max(jsonStr.lastIndexOf('}'), jsonStr.lastIndexOf(']'));
                    if (end > start) jsonStr = jsonStr.substring(start, end + 1);
                }
            }

            // 📌 JSON 파싱 시도
            const parsed = JSON.parse(jsonStr);

            // 📌 cupid 스키마 형식 {text, expression, affinity} 인지 확인
            if (parsed && typeof parsed === 'object' && !Array.isArray(parsed) && typeof parsed.text === 'string') {
                return {
                    text: parsed.text || "",
                    expression: (parsed.expression || "").toLowerCase(),
                    affinity: parseInt(parsed.affinity) || 0,
                };
            }

            /**
             * 📌 레거시: 객체에서 텍스트 추출 (구 형식 호환)
             * 여러 가능한 키 이름을 순서대로 시도
             */
            const getTextFromObj = (obj) => {
                // 문자열이면 그대로 반환
                if (typeof obj === 'string') return obj;

                // 알려진 텍스트 키들 확인 (우선순위순)
                let text = obj.text || obj.dialogue || obj.content || obj.message || obj.response || obj.msg || obj.result;

                // 위 키들이 없으면 가장 긴 문자열 값 찾기
                if (!text) {
                    let longestStr = "";
                    for (const key in obj) {
                        if (typeof obj[key] === 'string' && obj[key].length > longestStr.length) {
                            longestStr = obj[key];
                        }
                    }
                    // 5자 이상이면 유효한 텍스트로 간주
                    if (longestStr.length > 5) text = longestStr;
                }
                return text;
            };

            // 📌 배열인 경우 첫 번째 요소에서 추출
            let fallbackText;
            if (Array.isArray(parsed) && parsed.length > 0) {
                fallbackText = getTextFromObj(parsed[0]);
            } else {
                fallbackText = getTextFromObj(parsed);
            }
            if (fallbackText && typeof fallbackText === 'string') {
                return { text: fallbackText, expression: "", affinity: 0 };
            }
        } catch (e) {
            // 📌 JSON 파싱 실패 시 경고 로그 (원본 반환됨)
            console.warn("JSON parsing failed:", e);
        }

        // 📌 파싱 실패하거나 텍스트 추출 실패 시 fallback 메시지 반환
        const isEn = document.documentElement.lang === 'en';
        return {
            text: isEn ? "I couldn't understand the response. Let me try again." : "응답을 이해할 수 없습니다. 다시 시도하겠습니다.",
            expression: "",
            affinity: 0,
        };
    }

    /**
     * 😊 applyExpression - JSON 필드에서 받은 표정을 캐릭터 이미지에 적용
     * @param {string} exprName - 표정 이름 (예: shy, angry, laugh)
     * @param {Object} scene - 현재 씬 데이터
     */
    applyExpression(exprName, scene) {
        if (!exprName || !window.CHARACTER_EXPRESSIONS) return;
        const name = exprName.toLowerCase();
        const charExprs = CHARACTER_EXPRESSIONS[scene.name];
        if (!charExprs || !charExprs[name]) return;

        const centerSlot = this.uiManager.charSlots.center;
        if (!centerSlot) return;

        const exprUrl = getAssetUrl(charExprs[name]);
        if (centerSlot.firstChild) {
            centerSlot.firstChild.src = exprUrl;
        } else {
            const img = document.createElement('img');
            img.src = exprUrl;
            centerSlot.appendChild(img);
        }
    }

    /**
     * 📊 applyAffinity - JSON 필드에서 받은 호감도 변화량 적용
     * @param {number} change - 호감도 변화량 (정수)
     * @param {Object} scene - 현재 씬 데이터
     */
    applyAffinity(change, scene) {
        if (!change || change === 0) return;
        const charKey = this.charNameMap[scene.name] || scene.name;
        if (this.stateManager.stats[charKey]) {
            const newValue = this.stateManager.changeAffinity(charKey, change);
            this.uiManager.showAffinityChange(change, charKey);
            this.galleryManager.updateMaxAffinity(charKey, newValue);
            this.galleryManager.checkAffinityUnlock(charKey, newValue);
        }
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 😊 processExpressionTags - AI 응답에서 표정 태그 처리
     * ═══════════════════════════════════════════════════════════════
     * 
     * ▶ 역할:
     *   AI 응답에 [EXPRESSION: happy] 같은 태그가 있으면
     *   캐릭터의 표정 이미지를 변경합니다.
     * 
     * ▶ 태그 형식:
     *   [EXPRESSION: 표정이름]
     *   예: [EXPRESSION: happy], [EXPRESSION: sad], [EXPRESSION: angry]
     * 
     * ▶ 표정 이미지 출처:
     *   characters.js의 CHARACTER_EXPRESSIONS 객체에 정의됨
     *   예: CHARACTER_EXPRESSIONS["서연"]["happy"] = "assets/images/char/seyoun_happy.webp"
     * 
     * ⚠️ 표정이 바뀌지 않는다면?
     *   1. 표정 이름 철자 확인 (대소문자 무관)
     *   2. CHARACTER_EXPRESSIONS에 해당 표정이 있는지 확인
     *   3. 이미지 파일이 실제로 존재하는지 확인
     * 
     * @param {string} reply - AI 응답 텍스트
     * @param {Object} scene - 현재 씬 데이터 (캐릭터 이름 포함)
     * @returns {string} 표정 태그가 제거된 텍스트
     */
    processExpressionTags(reply, scene) {
        // 📌 정규식: [EXPRESSION: xxx] 형태 찾기 (대소문자 무시)
        const exprRegex = /\[EXPRESSION:\s*(\w+)\]/gi;
        let exprMatch;

        // 📌 모든 표정 태그를 찾아서 처리
        while ((exprMatch = exprRegex.exec(reply)) !== null) {
            const exprName = exprMatch[1].toLowerCase();  // 표정 이름 (소문자로 변환)

            // CHARACTER_EXPRESSIONS 객체가 있는지 확인
            if (window.CHARACTER_EXPRESSIONS) {
                // 현재 캐릭터의 표정 목록 가져오기
                const charExprs = CHARACTER_EXPRESSIONS[scene.name];

                // 해당 표정이 정의되어 있으면 이미지 변경
                if (charExprs && charExprs[exprName]) {
                    const centerSlot = this.uiManager.charSlots.center;  // 중앙 캐릭터 슬롯

                    // 🔧 centerSlot이 없으면 표정 변경 스킵
                    if (!centerSlot) continue;

                    const exprUrl = getAssetUrl(charExprs[exprName]);    // 버전 쿼리 추가

                    // 이미 이미지가 있으면 src만 변경, 없으면 새로 생성
                    if (centerSlot.firstChild) {
                        centerSlot.firstChild.src = exprUrl;
                    } else {
                        const img = document.createElement('img');
                        img.src = exprUrl;
                        centerSlot.appendChild(img);
                    }
                }
            }
        }

        // 📌 태그를 텍스트에서 제거하고 반환
        return reply.replace(exprRegex, "").trim();
    }

    /** 
     * 스탯(호감도) 변화 태그 처리
     * 
     * ▶ AI 응답에 "[STATS: affinity +10]" 같은 태그가 있으면
     *   실제로 호감도를 변경하고 팝업 애니메이션 표시
     * 
     * @param {string} reply - AI 응답 텍스트
     * @param {Object} scene - 현재 씬 데이터
     * @returns {string} 태그가 제거된 텍스트
     */
    processStatsTags(reply, scene) {
        const statsRegex = /\[STATS:\s*affinity\s*([+-]?\d+)\]/gi;
        let statMatch;

        // 모든 스탯 태그 찾아서 처리
        while ((statMatch = statsRegex.exec(reply)) !== null) {
            const affinityChange = parseInt(statMatch[1]);
            const charKey = this.charNameMap[scene.name] || scene.name;

            // 캐릭터 호감도 변경
            if (this.stateManager.stats[charKey]) {
                const newValue = this.stateManager.changeAffinity(charKey, affinityChange);
                this.uiManager.showAffinityChange(affinityChange, charKey);
                this.galleryManager.updateMaxAffinity(charKey, newValue);
                this.galleryManager.checkAffinityUnlock(charKey, newValue);
            }
        }

        // 태그 제거 후 반환
        return reply.replace(statsRegex, "").trim();
    }

    /** 
     * 프리토킹 종료 처리
     * - 대화 완료 플래그 설정
     * - 채팅 UI 숨김
     * - 다음 씬으로 넘어가라는 안내 메시지 표시
     */
    endFreeTalk() {
        // 이 프리토킹을 완료했다는 플래그 설정
        this.stateManager.setFlag(`messaged_${this.currentSceneId}`);

        setTimeout(() => {
            this.uiManager.chatContainer.style.display = 'none';
            this.isFreeTalking = false;

            // 종료 안내 메시지
            const isEn = document.documentElement.lang === 'en';
            const endMsg = isEn ?
                "\n\n(Conversation ended. Click to continue.)" :
                "\n\n(대화가 종료되었습니다. 화면을 클릭하여 계속하세요.)";
            this.uiManager.messageEl.textContent += endMsg;
        }, 500);
    }
}


// ============================================================================================
// 🎬 SceneRenderer 클래스 - 씬(장면) 렌더링
// ============================================================================================
// 📌 게임의 각 장면(씬)을 화면에 그리는 역할을 합니다.
//    배경 이미지, 캐릭터 배치, 시간 필터(밤/석양) 등을 처리합니다.

/**
 * 씬 렌더링 클래스
 * 
 * ▶ 역할:
 *   - 시나리오 데이터에서 씬 검색
 *   - 배경 이미지 설정 및 프리로딩
 *   - 캐릭터 이미지 배치 (좌/중앙/우)
 *   - 시간 필터 적용 (night, sunset)
 *   - 분기 조건 처리 (호감도, 플래그 기반)
 */
class SceneRenderer {
    /**
     * @param {StateManager} stateManager - 게임 상태 관리자
     * @param {GalleryManager} galleryManager - 갤러리 관리자
     * @param {UIManager} uiManager - UI 관리자
     */
    constructor(stateManager, galleryManager, uiManager) {
        this.stateManager = stateManager;
        this.galleryManager = galleryManager;
        this.uiManager = uiManager;

        /** 현재 표시 중인 씬 ID */
        this.currentSceneId = "start";

        /** 마지막으로 설정한 배경 URL (중복 로딩 방지용) */
        this.lastBgUrl = "";

        /** 캐릭터 이름 매핑 (공통 상수 참조) */
        this.charNameMap = CHAR_NAME_MAP;
    }

    /** 
     * 시나리오에서 씬 데이터 찾기
     * 
     * ▶ 검색 순서:
     *   1. 현재 날짜의 시나리오 (SCENARIO[currentDay])
     *   2. 모든 날짜 검색
     *   3. 공통 시나리오 (SCENARIO[0])
     *   4. 루트 레벨 (하위 호환성)
     * 
     * @param {string} id - 씬 ID
     * @returns {Object|null} 씬 데이터, 없으면 null
     */
    getScene(id) {
        if (!id) return null;

        // 1. 현재 날짜 시나리오에서 먼저 검색
        if (SCENARIO[this.stateManager.currentDay]?.[id]) {
            return SCENARIO[this.stateManager.currentDay][id];
        }

        // 2. 모든 날짜 검색 (다른 날짜의 씬으로 점프할 경우)
        for (const day in SCENARIO) {
            if (SCENARIO[day]?.[id]) return SCENARIO[day][id];
        }

        // 3. 공통 시나리오(0)에서 검색 (날짜 무관한 씬들)
        if (SCENARIO[0]?.[id]) return SCENARIO[0][id];

        // 4. 루트 레벨 검색 (구버전 호환)
        if (SCENARIO[id]) return SCENARIO[id];

        return null;
    }

    /** 
     * 다음 씬 ID 결정 (분기 로직 처리)
     * 
     * ▶ 분기 유형:
     *   1. 호감도 분기 (affinityBranches): 호감도에 따라 다른 씬으로
     *   2. 플래그 분기 (branches): 조건에 따라 다른 씬으로
     *   3. 최고 호감도 분기 (selectByHighestAffinity): 가장 친한 캐릭터로
     *   4. 단순 다음 씬 (next)
     * 
     * @param {Object} scene - 현재 씬 데이터
     * @returns {string|null} 다음 씬 ID
     */
    resolveNextScene(scene) {
        if (!scene) return null;

        // 🔀 호감도 분기: 특정 캐릭터의 호감도에 따라 분기
        if (scene.affinityBranches && scene.affinityChar) {
            const currentAff = this.stateManager.getAffinity(scene.affinityChar);
            // 높은 기준부터 검사 (minAffinity 내림차순 정렬)
            // 동일한 minAffinity일 때는 배열 원래 순서 유지 (안정 정렬)
            const sortedBranches = [...scene.affinityBranches]
                .map((branch, index) => ({ ...branch, _originalIndex: index }))
                .sort((a, b) => b.minAffinity - a.minAffinity || a._originalIndex - b._originalIndex);
            for (const branch of sortedBranches) {
                if (currentAff >= branch.minAffinity) return branch.next;
            }
        }

        // 🔀 branches 분기: 플래그 조건에 따라 분기
        if (scene.branches && Array.isArray(scene.branches)) {
            // 최고 호감도 캐릭터 선택 분기
            if (scene.selectByHighestAffinity) {
                // condition 플래그 필터링: condition이 있으면 해당 플래그가 true여야 후보에 포함
                const eligibleBranches = scene.branches.filter(branch =>
                    !branch.condition || this.stateManager.getFlag(branch.condition)
                );

                let winnerNext = null;
                let maxAffinity = -999;
                let metAnyone = false;

                for (const branch of eligibleBranches) {
                    const metFlag = "met_" + (branch.character || "").toLowerCase();
                    // 만난 적 있는 캐릭터만 후보에 포함
                    if (this.stateManager.getFlag(metFlag) && branch.character) {
                        metAnyone = true;
                        const currentAff = this.stateManager.getAffinity(branch.character);
                        if (currentAff > maxAffinity) {
                            maxAffinity = currentAff;
                            winnerNext = branch.next;
                        }
                    }
                }
                if (metAnyone) return winnerNext;
            }

            // 일반 조건 분기
            for (const branch of scene.branches) {
                // condition이 있으면 그 플래그가 true여야 함
                if (branch.condition && !this.stateManager.getFlag(branch.condition)) continue;
                // excludeCondition이 있으면 그 플래그가 false여야 함
                if (branch.excludeCondition && this.stateManager.getFlag(branch.excludeCondition)) continue;
                return branch.next;
            }
        }

        // 분기 없으면 단순히 next 반환
        return scene.next || "error";  // next가 없으면 error 씬으로 fallback
    }

    /** 
     * 배경 이미지 설정
     * - 이미지를 프리로드한 후 화면에 적용 (깜빡임 방지)
     * - CG 이미지면 갤러리에 해금 기록
     * 
     * @param {string} bgPath - 배경 이미지 경로
     */
    async setBackground(bgPath) {
        if (!bgPath) return;

        const bgUrl = getAssetUrl(bgPath);
        this.lastBgUrl = bgUrl;

        // CG 해금 체크 (파일명으로 판단)
        const cgFileName = bgPath.split('/').pop().replace(/\.(png|jpg|jpeg|webp)$/i, '');
        this.galleryManager.unlockCG(cgFileName);

        // 이미지 프리로드 후 적용
        await new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                // 다른 씬으로 넘어간 경우 적용 취소
                if (this.lastBgUrl === bgUrl) {
                    this.uiManager.bgLayer.style.backgroundImage = `url(${bgUrl})`;
                }
                resolve();
            };
            img.onerror = resolve;
            img.src = bgUrl;
        });
    }

    /** 
     * 시간 필터 적용 (밤/석양 효과)
     * - CSS 클래스로 배경에 색상 오버레이 적용
     * 
     * @param {boolean} night - 밤 효과 여부
     * @param {boolean} sunset - 석양 효과 여부
     */
    setTimeFilter(night, sunset) {
        this.uiManager.bgLayer.classList.remove('night', 'sunset');
        if (night) this.uiManager.bgLayer.classList.add('night');
        else if (sunset) this.uiManager.bgLayer.classList.add('sunset');
    }

    /** 
     * 캐릭터 이미지 업데이트
     * 
     * ▶ 처리 과정:
     *   1. 씬 데이터에서 캐릭터 정보 파싱
     *   2. 변경된 슬롯만 파악
     *   3. 새 이미지 프리로드
     *   4. 화면에 적용
     * 
     * @param {Object} scene - 씬 데이터
     * @param {string} sceneId - 씬 ID (씬 전환 체크용)
     */
    async updateCharacters(scene, sceneId) {
        // 캐릭터 정보가 없으면 리턴
        if (!scene.hasOwnProperty('characters') && !scene.hasOwnProperty('character')) return;

        const newCharMap = {};     // 슬롯별 새 이미지 URL
        const charOptions = {};    // 슬롯별 옵션 (투명도 등)

        // 씬 데이터 파싱
        if (scene.characters) {
            // 다중 캐릭터: { left: "url", center: {src: "url", opacity: 0.5}, ... }
            Object.entries(scene.characters).forEach(([pos, value]) => {
                const posKey = pos.toLowerCase();
                if (typeof value === 'object' && value?.src) {
                    // 객체 형태: {src, opacity} 
                    newCharMap[posKey] = getAssetUrl(value.src);
                    charOptions[posKey] = { opacity: value.opacity ?? 1 };
                } else {
                    // 문자열: 단순 URL
                    newCharMap[posKey] = getAssetUrl(value);
                    charOptions[posKey] = { opacity: 1 };
                }
            });
        } else if (scene.character) {
            // 단일 캐릭터: 중앙에 배치
            newCharMap['center'] = getAssetUrl(scene.character);
            charOptions['center'] = { opacity: 1 };
        }

        // 변경 필요한 슬롯 확인
        const changedSlots = [];
        Object.entries(this.uiManager.charSlots).forEach(([pos, slot]) => {
            if (!slot) return;
            const existingImg = slot.querySelector('img');
            const newUrl = newCharMap[pos];

            if (existingImg) {
                if (!newUrl || existingImg.dataset.rawSrc !== newUrl) changedSlots.push(pos);
            } else {
                if (newUrl) changedSlots.push(pos);
            }
        });

        if (changedSlots.length === 0) {
            // 이미지 변경 없어도 silhouette/thinking 상태는 업데이트
            Object.entries(this.uiManager.charSlots).forEach(([pos, slot]) => {
                if (!slot) return;
                const img = slot.querySelector('img');
                if (!img) return;
                if (scene.silhouette) img.classList.add('silhouette');
                else img.classList.remove('silhouette');
                if (scene.thinking) img.classList.add('thinking');
                else img.classList.remove('thinking');
            });
            return;
        }

        // 이미지 프리로드
        const charPromises = Object.entries(newCharMap)
            .filter(([pos]) => changedSlots.includes(pos))
            .map(([pos, charUrl]) => {
                return new Promise((resolve) => {
                    const img = document.createElement('img');
                    img.onload = () => {
                        img.dataset.rawSrc = charUrl;
                        const options = charOptions[pos] || { opacity: 1 };
                        if (options.opacity !== 1) img.style.opacity = options.opacity;
                        resolve({ pos, img, sceneId });
                    };
                    img.onerror = () => resolve(null);
                    img.src = charUrl;
                    if (scene.silhouette) img.classList.add('silhouette');
                    if (scene.thinking) img.classList.add('thinking');
                    img.classList.add('char-breathing');
                });
            });

        const loadedChars = await Promise.all(charPromises);
        if (this.currentSceneId !== sceneId) return;

        // 이미지 교체
        loadedChars.forEach(result => {
            if (result && this.uiManager.charSlots[result.pos]) {
                this.uiManager.charSlots[result.pos].innerHTML = '';
                this.uiManager.charSlots[result.pos].appendChild(result.img);
            }
        });

        // 퇴장 캐릭터 처리 (새 씬에 없는 캐릭터 제거)
        Object.keys(this.uiManager.charSlots).forEach(pos => {
            if (!newCharMap[pos] && changedSlots.includes(pos)) {
                if (this.uiManager.charSlots[pos]) this.uiManager.charSlots[pos].innerHTML = '';
            }
        });
    }
    // ============================================================================================
    // 🚩 연락처 합성 플래그 계산
    // ============================================================================================
    // 📌 여러 개의 기본 플래그를 조합해서
    //    시나리오에서 쓰기 좋은 단일 플래그를 생성합니다.
    //    예: has_any_contact = 서연/유나/다인/선생님 중 누구라도 연락처가 있음
    updateCompositeFlags() {
        const contactFlags = [
            "has_number_seyoun",
            "has_number_yuna",
            "has_number_dain",
            "has_number_nurse",
            "has_number_teacher"
        ];
    
        // 하나라도 true면 has_any_contact = true
        const hasAnyContact = contactFlags.some(
            flag => this.stateManager.getFlag(flag)
        );
    
        if (hasAnyContact) {
            this.stateManager.setFlag("has_any_contact");
        }
    }

    /** 
     * 씬의 플래그/날짜 변경 처리
     * @param {Object} scene - 씬 데이터
     */
    processSceneFlags(scene) {
        // 플래그 초기화 (false로 설정)
        if (scene.clearFlags?.length) scene.clearFlags.forEach(flag => this.stateManager.setFlag(flag, false));
        // 단일 플래그 설정
        if (scene.setFlag) this.stateManager.setFlag(scene.setFlag);
        // 복수 플래그 설정
        if (scene.setFlags?.length) scene.setFlags.forEach(flag => this.stateManager.setFlag(flag));
        // 날짜 변경
        if (scene.changeDay) this.stateManager.setDay(scene.changeDay);
    }

    /** 
     * 씬의 스탯(호감도) 변화 처리
     * @param {Object} scene - 씬 데이터
     */
    processSceneStats(scene) {
        if (!scene.stats) return;

        // { Seoyeon: { affinity: 10 }, ... } 또는 { Seoyeon: 10, ... } 형태 모두 지원
        for (const [char, stats] of Object.entries(scene.stats)) {
            const charKey = this.charNameMap[char] || char;
            // 숫자 직접 지정(예: { Seoyeon: 3 }) 또는 객체 지정(예: { Seoyeon: { affinity: 3 } }) 모두 처리
            const affinityChange = typeof stats === 'number' ? stats : stats?.affinity;
            if (affinityChange && this.stateManager.stats[charKey]) {
                const newValue = this.stateManager.changeAffinity(charKey, affinityChange);
                this.uiManager.showAffinityChange(affinityChange, charKey);
                this.galleryManager.updateMaxAffinity(charKey, newValue);
                this.galleryManager.checkAffinityUnlock(charKey, newValue);
            }
        }
    }

    /** 
     * 현재 렌더링 상태 내보내기 (저장용)
     * @returns {Object} 현재 화면 상태 {sceneId, bgUrl, characters}
     */
    exportRenderState() {
        // 현재 표시된 캐릭터들 수집
        const currentCharacters = {};
        for (const [slot, el] of Object.entries(this.uiManager.charSlots)) {
            const img = el?.querySelector('img');
            if (img && img.src) currentCharacters[slot] = img.src;
        }

        return {
            sceneId: this.currentSceneId,
            bgUrl: this.lastBgUrl,
            characters: currentCharacters
        };
    }
}


// ============================================================================================
// 🎮 GameEngine 클래스 - 게임 전체 제어 (메인 엔진)
// ============================================================================================
// 📌 게임의 모든 시스템을 통합하고 전체 흐름을 제어하는 최상위 클래스입니다.
//    이 클래스가 모든 하위 시스템을 생성하고 연결합니다.

/**
 * 게임 엔진 클래스 (메인 컨트롤러)
 * 
 * ▶ 역할:
 *   - 모든 하위 시스템 인스턴스 생성 및 관리
 *   - 사용자 입력 이벤트 처리 (클릭, 키보드 등)
 *   - 씬 전환 및 게임 흐름 제어
 *   - 저장/불러오기 트리거
 *   - HTML에서 호출하는 전역 함수 제공
 * 
/**
 * ═══════════════════════════════════════════════════════════════════════════
 * 🎮 GameEngine 클래스 - 게임 전체 제어 (메인 엔진)
 * ═══════════════════════════════════════════════════════════════════════════
 * 📌 게임의 모든 시스템을 통합하고 전체 흐름을 제어하는 최상위 클래스입니다.
 *    이 클래스가 모든 하위 시스템을 생성하고 연결합니다.
 *
 * ▶ 역할:
 *   - 모든 하위 시스템 인스턴스 생성 및 관리
 *   - 사용자 입력 이벤트 처리 (클릭, 키보드 등)
 *   - 씬 전환 및 게임 흐름 제어
 *   - 저장/불러오기 트리거
 *   - HTML에서 호출하는 전역 함수 제공
 * 
 * ▶ 클래스 관계도:
 *   GameEngine
 *   ├── StateManager      (게임 데이터)
 *   ├── SaveManager       (저장/불러오기)
 *   ├── GalleryManager    (갤러리 해금)
 *   ├── UIManager         (화면 UI)
 *   ├── SceneRenderer     (씬 렌더링)
 *   ├── DialogueSystem    (대화 출력)
 *   └── FreeTalkSystem    (AI 대화)
 * 
 * ⚠️ 문제 해결 가이드:
 *   
 *   1. "게임이 시작 안 됨"
 *      → 콘솔(F12)에서 오류 메시지 확인
 *      → scenario.js, prompts.js, characters.js가 먼저 로드되었는지 확인
 *      → SCENARIO 객체가 정의되어 있는지 확인
 *   
 *   2. "이어하기가 작동 안 함"
 *      → localStorage에 'cupid_save' 키가 있는지 확인
 *      → 콘솔: console.log(localStorage.getItem('cupid_save'))
 *   
 *   3. "버튼 클릭이 안 됨"
 *      → bindEvents() 메서드에서 해당 버튼 확인
 *      → DOM 요소가 제대로 로드되었는지 확인
 *   
 *   4. "호감도가 저장 안 됨"
 *      → StateManager.changeAffinity() 로그 확인
 *      → saveGame() 호출 확인
 */
class GameEngine {
    /**
     * 생성자 - 게임 엔진 초기화
     * 
     * ▶ 초기화 순서:
     *   1. 하위 시스템 인스턴스 생성 (의존성 순서 중요!)
     *   2. 이벤트 핸들러 연결
     *   3. 전역 함수 등록
     * 
     * ⚠️ 의존성 순서:
     *   StateManager, GalleryManager가 먼저 생성되어야
     *   UIManager, SceneRenderer 등에서 참조할 수 있음
     */
    constructor() {
        // ════════════════════════════════════════════════════════════════
        // 📌 하위 시스템 인스턴스 생성 (의존성 순서대로!)
        // ════════════════════════════════════════════════════════════════

        /** 
         * 게임 상태 관리자 - 이름, 호감도, 플래그 등
         * 🔧 디버깅: gameEngine.stateManager.exportState()로 전체 상태 확인
         */
        this.stateManager = new StateManager();

        /** 
         * 저장 관리자 - localStorage 저장/불러오기
         * 🔧 디버깅: localStorage.getItem('cupid_save')로 저장 데이터 확인
         */
        this.saveManager = new SaveManager('cupid_save');

        /** 
         * 갤러리 관리자 - CG, 캐릭터 해금
         * 🔧 디버깅: localStorage.getItem('cupid_gallery')로 해금 현황 확인
         */
        this.galleryManager = new GalleryManager('cupid_gallery');

        /** 
         * UI 관리자 - DOM 요소 제어
         * 🔧 디버깅: 요소가 null이면 HTML에서 해당 ID 확인
         */
        this.uiManager = new UIManager(this.stateManager, this.galleryManager);

        /** 
         * 씬 렌더러 - 배경, 캐릭터 렌더링
         * 🔧 디버깅: gameEngine.sceneRenderer.currentSceneId로 현재 씬 확인
         */
        this.sceneRenderer = new SceneRenderer(this.stateManager, this.galleryManager, this.uiManager);

        /** 
         * 대화 시스템 - 타이핑 효과
         * 🔧 디버깅: gameEngine.dialogueSystem.isTyping으로 타이핑 상태 확인
         */
        this.dialogueSystem = new DialogueSystem(this.stateManager, this.uiManager);

        /** 
         * 프리토킹 시스템 - AI 대화
         * 🔧 디버깅: gameEngine.freeTalkSystem.isFreeTalking으로 프리토킹 상태 확인
         */
        this.freeTalkSystem = new FreeTalkSystem(
            this.stateManager, this.galleryManager, this.uiManager, this.dialogueSystem
        );

        // ════════════════════════════════════════════════════════════════
        // 📌 이벤트 핸들러 연결 및 전역 함수 등록
        // ════════════════════════════════════════════════════════════════
        this.bindEvents();          // 클릭, 키보드 이벤트 등
        this.exposeGlobalFunctions();  // window 객체에 함수 등록
    }

    /** 
     * ═══════════════════════════════════════════════════════════════
     * 🎯 bindEvents - 사용자 입력 이벤트 바인딩
     * ═══════════════════════════════════════════════════════════════
     * 
     * ▶ 역할:
     *   화면의 각 요소에 클릭/키보드 이벤트 핸들러를 연결합니다.
     *   버튼을 눌렀을 때 어떤 동작을 할지 여기서 정의합니다.
     * 
     * ⚠️ 버튼이 작동 안 하면?
     *   1. 해당 요소의 ID가 HTML에 있는지 확인
     *   2. 콘솔에서 this.uiManager.xxx가 null인지 확인
     *   3. 이벤트 핸들러 함수가 정의되어 있는지 확인
     */
    bindEvents() {
        // ─────────────────────────────────────────────────────────────
        // 📌 대화창(dialogue-box) 클릭 이벤트
        // ─────────────────────────────────────────────────────────────
        // 클릭하면 다음 대사로 넘어가거나, 타이핑 중이면 스킵
        this.uiManager.dialogueBox.onclick = () => this.handleDialogueClick();

        // ─────────────────────────────────────────────────────────────
        // 📌 채팅(프리토킹) 관련 이벤트
        // ─────────────────────────────────────────────────────────────
        // 전송 버튼 클릭 → AI에게 메시지 전송
        this.uiManager.chatSendBtn.onclick = () => this.freeTalkSystem.sendChatMessage(id => this.sceneRenderer.getScene(id));

        // 스킵 버튼 클릭 → 대화 중단 (버튼이 있는 경우에만)
        if (this.uiManager.chatSkipBtn) {
            this.uiManager.chatSkipBtn.onclick = () => this.freeTalkSystem.skipFreeTalk();
        }

        // 입력창에서 Enter 키 → 전송
        this.uiManager.chatInput.onkeydown = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();  // 기본 동작(줄바꿈) 방지
                this.freeTalkSystem.sendChatMessage(id => this.sceneRenderer.getScene(id));
            }
        };

        // ─────────────────────────────────────────────────────────────
        // 📌 이름 입력 관련 이벤트
        // ─────────────────────────────────────────────────────────────
        // 확인 버튼 클릭 → 이름 저장 후 다음 씬
        this.uiManager.nameConfirmBtn.onclick = () => this.handleNameConfirm();

        // Enter 키로도 확인 가능
        this.uiManager.playerNameInput.onkeypress = (e) => {
            if (e.key === 'Enter') this.handleNameConfirm();
        };

        // 포커스가 빠져나가면 다시 잡아주기 (사용자 편의)
        // 단, 확인 버튼 클릭으로 포커스 이동한 경우는 제외
        this.uiManager.playerNameInput.onblur = (e) => {
            if (e.relatedTarget === this.uiManager.nameConfirmBtn) return;
            if (this.uiManager.nameInputContainer.style.display === 'block') {
                setTimeout(() => this.uiManager.playerNameInput.focus(), 10);
            }
        };
    }

    /** 
     * ═══════════════════════════════════════════════════════════════
     * 🌐 exposeGlobalFunctions - HTML에서 호출 가능한 전역 함수 등록
     * ═══════════════════════════════════════════════════════════════
     * 
     * ▶ 왜 필요한가?
     *   HTML의 onclick="함수명()" 같은 인라인 이벤트에서
     *   클래스 메서드를 직접 호출할 수 없으므로
     *   window 객체에 함수를 등록해둡니다.
     * 
     * ▶ 사용 예시 (HTML):
     *   <button onclick="goToHome()">홈으로</button>
     *   <button onclick="openSettingsModal()">설정</button>
     * 
     * ⚠️ "xxx is not defined" 오류가 나면?
     *   → 여기에 해당 함수가 등록되어 있는지 확인
     *   → window.xxx = () => ... 형태로 추가
     */
    exposeGlobalFunctions() {
        // ─────────────────────────────────────────────────────────────
        // 🏠 홈/설정 관련 함수 (UI 모달 제어)
        // ─────────────────────────────────────────────────────────────
        window.showHomeConfirm = () => this.uiManager.showHomeConfirm();     // 홈 확인 모달 표시
        window.closeHomeConfirm = (e) => this.uiManager.closeHomeConfirm(e); // 홈 확인 모달 닫기
        window.goToHome = () => this.uiManager.goToHome();                   // 실제 홈으로 이동
        window.openSettingsModal = () => this.uiManager.openSettingsModal(); // 설정 모달 열기
        window.closeSettingsModal = (e) => this.uiManager.closeSettingsModal(e); // 설정 모달 닫기
        window.saveSettings = () => this.uiManager.saveSettings(
            this.sceneRenderer.currentSceneId,
            id => this.sceneRenderer.getScene(id)
        );

        // ─────────────────────────────────────────────────────────────
        // 💾 저장/불러오기 관련 함수
        // ─────────────────────────────────────────────────────────────
        window.saveGameState = () => this.saveGame();           // 수동 저장
        window.loadGameState = () => this.saveManager.load();   // 저장 데이터 불러오기
        window.hasSavedGame = () => this.saveManager.hasSave(); // 저장 데이터 유무 확인
        window.clearSavedGame = () => this.saveManager.clear(); // 저장 데이터 삭제

        // ─────────────────────────────────────────────────────────────
        // 🔧 gameState 프록시 설정 (하위 호환성)
        // ─────────────────────────────────────────────────────────────
        // 이전 버전에서 gameState.playerName처럼 접근하던 코드 지원
        // Proxy 객체를 사용해 속성 접근을 StateManager로 위임
        const self = this;
        window.gameState = new Proxy(this.stateManager, {
            // 속성 읽기: gameState.xxx → stateManager.xxx
            get(target, prop) {
                if (prop === 'playerName') return target.playerName;
                if (prop === 'currentDay') return target.currentDay;
                if (prop === 'stats') return target.stats;
                if (prop === 'chatMemories') return target.chatMemories;
                if (prop in target) return target[prop];
                return target.flags[prop];  // 그 외는 플래그로 간주
            },
            // 속성 쓰기: gameState.xxx = value → stateManager에 반영
            set(target, prop, value) {
                if (prop === 'playerName') target.playerName = value;
                else if (prop === 'currentDay') target.currentDay = value;
                else target.flags[prop] = value;  // 그 외는 플래그로 간주
                return true;
            }
        });
    }

    /** 대화창 클릭 처리 */
    async handleDialogueClick() {
        // 타이핑 중이면 스킵
        if (this.dialogueSystem.isCurrentlyTyping()) {
            this.dialogueSystem.requestSkip();
            return;
        }

        // ─────────────────────────────────────────────────────────────
        // 💬 대화창 클릭 처리 로직
        // 
        // 클릭 시 상황에 따라 다르게 동작:
        // 1. 프리토킹 종료 후 → 다음 씬으로 자동 진행
        // 2. 프리토킹 중/이름 입력 중 → 클릭 무시 (별도 UI 사용)
        // 3. 시네마틱 장면 → 클릭 무시 (자동 진행됨)
        // 4. 선택지 있음 → 선택지 버튼 표시
        // 5. 선택지 없음 → 다음 씬으로 진행
        // ─────────────────────────────────────────────────────────────

        // 현재 보고 있는 씬 데이터 가져오기
        const scene = this.sceneRenderer.getScene(this.sceneRenderer.currentSceneId);
        if (!scene) {
            // 씬 데이터 없으면 오류 메시지 표시
            const isEn = document.documentElement.lang === 'en';
            const errorMsg = isEn ? "Scene not found. Please check the scenario data." : "씬을 찾을 수 없습니다. 시나리오 데이터를 확인하세요.";
            await this.uiManager.showModal(errorMsg, true);
            return;
        }

        // ✅ 케이스 1: 프리토킹이 방금 끝났을 때
        // - 프리토킹 종료 후 대화창을 클릭하면 다음 씬으로 넘어감
        if (scene.type === 'free_talk' && !this.freeTalkSystem.isFreeTalking) {
            const nextId = this.sceneRenderer.resolveNextScene(scene);
            if (nextId) {
                await this.renderScene(nextId);
            } else {
                // 다음 씬이 없으면 오류 메시지
                const isEn = document.documentElement.lang === 'en';
                const errorMsg = isEn ? "Next scene not defined. Please check the scenario data." : "다음 씬이 정의되지 않았습니다. 시나리오 데이터를 확인하세요.";
                await this.uiManager.showModal(errorMsg, true);
            }
            return;
        }

        // ✅ 케이스 2: 프리토킹 중이거나 이름 입력/크레딧 모드일 때
        // - 별도의 입력 UI를 사용하므로 클릭 무시
        if (this.freeTalkSystem.isFreeTalking || scene.type === 'input' || scene.type === 'credits') return;

        // ✅ 케이스 3: 시네마틱(연출) 장면일 때
        // - 텍스트도 없고 선택지도 없는 순수 연출 장면
        // - 자동 진행되므로 사용자 클릭 무시
        if (!scene.text && (!scene.choices || scene.choices.length === 0)) return;

        // ✅ 케이스 4 & 5: 선택지가 있거나 없는 일반 대화 장면
        if (scene.choices) {
            // 조건을 만족하는 선택지만 필터링
            const availableChoices = this.getAvailableChoices(scene.choices);

            // � 선택지가 모두 조건을 충족하지 못하면 다음 씬으로
            if (availableChoices.length === 0) {
                const nextId = this.sceneRenderer.resolveNextScene(scene);
                if (nextId) {
                    await this.renderScene(nextId);
                } else {
                    // 다음 씬이 없으면 오류 메시지
                    const isEn = document.documentElement.lang === 'en';
                    const errorMsg = isEn ? "No available choices and next scene not defined. Please check the scenario data." : "선택지가 없고 다음 씬이 정의되지 않았습니다. 시나리오 데이터를 확인하세요.";
                    await this.uiManager.showModal(errorMsg, true);
                }
                return;
            }

            // 🔄 "다음" 버튼 하나만 있으면 자동으로 실행
            // - UX 개선: 의미없는 "다음" 클릭을 생략
            if (availableChoices.length === 1 &&
                (availableChoices[0].text === "다음" || availableChoices[0].text === "Next")) {
                await this.executeChoice(availableChoices[0]);
                return;
            }

            // 여러 선택지가 있으면 버튼으로 표시
            this.showChoices(availableChoices);
        } else {
            // 선택지 없으면 바로 다음 씬으로
            const nextId = this.sceneRenderer.resolveNextScene(scene);
            if (nextId) {
                await this.renderScene(nextId);
            } else {
                // 다음 씬이 없으면 오류 메시지
                const isEn = document.documentElement.lang === 'en';
                const errorMsg = isEn ? "Next scene not defined. Please check the scenario data." : "다음 씬이 정의되지 않았습니다. 시나리오 데이터를 확인하세요.";
                await this.uiManager.showModal(errorMsg, true);
            }
        }
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 🔍 getAvailableChoices - 사용 가능한 선택지만 필터링
     * ═══════════════════════════════════════════════════════════════
     * 
     * ▶ 목적:
     * 시나리오 JSON에 정의된 선택지들 중에서 현재 게임 상태에 따라
     * 플레이어에게 보여줄 수 있는 선택지만 골라냅니다.
     * 
     * ▶ 선택지 조건 시스템:
     * - condition: 이 플래그가 true여야 선택지가 보임
     *   예: { condition: "hasKey" } → hasKey 플래그가 있어야 "문 열기" 보임
     * 
     * - excludeCondition: 이 플래그가 true면 선택지가 숨겨짐
     *   예: { excludeCondition: "metBefore" } → 만난 적 있으면 "첫 인사" 숨김
     * 
     * ▶ 사용 예시:
     * 
     * [시나리오 JSON]
     * choices: [
     *   { text: "꽃 선물하기", condition: "boughtFlowers" },      // 꽃을 샀을 때만
     *   { text: "그냥 인사하기" },                                 // 항상 표시
     *   { text: "첫 만남 대화", excludeCondition: "metBefore" }   // 처음만
     * ]
     * 
     * @param {Array} choices - 시나리오에 정의된 전체 선택지 배열
     * @returns {Array} 조건을 만족하는 선택지만 담긴 새 배열
     */
    getAvailableChoices(choices) {
        return choices.filter(choice => {
            // 📌 condition 체크: 필수 조건 플래그가 없으면 제외
            if (choice.condition && !this.stateManager.getFlag(choice.condition)) return false;

            // 📌 excludeCondition 체크: 제외 조건 플래그가 있으면 제외
            if (choice.excludeCondition && this.stateManager.getFlag(choice.excludeCondition)) return false;

            // 두 조건 모두 통과하면 선택지 표시
            return true;
        });
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 🎯 showChoices - 선택지 버튼들을 화면에 표시
     * ═══════════════════════════════════════════════════════════════
     * 
     * ▶ 목적:
     * 플레이어가 선택할 수 있는 버튼들을 화면 중앙에 표시합니다.
     * 선택지를 무작위로 섞어서 매 플레이마다 위치가 달라지게 합니다.
     * 
     * ▶ 처리 과정:
     * 1. 대화창 숨기기 (선택지에 집중하도록)
     * 2. 기존 선택지 버튼들 제거
     * 3. 선택지 순서 랜덤 셔플 (동일한 선택 패턴 방지)
     * 4. 각 선택지마다 버튼 생성
     * 5. {name} 플레이스홀더를 플레이어 이름으로 교체
     * 6. 클릭 이벤트 연결
     * 
     * ▶ UI 구조:
     * <div id="choice-container">
     *   <button class="choice-btn">선택지 1</button>
     *   <button class="choice-btn">선택지 2</button>
     *   <button class="choice-btn">선택지 3</button>
     * </div>
     * 
     * @param {Array} choices - 표시할 선택지 배열 [{text, next, ...}, ...]
     */
    showChoices(choices) {
        // 📌 대화창 숨기고 선택지 컨테이너 비우기
        this.uiManager.dialogueBox.style.display = 'none';
        this.uiManager.choiceContainer.innerHTML = "";

        // 🔀 선택지 순서 랜덤 셔플
        // - Math.random() - 0.5는 양수/음수가 랜덤하게 나옴
        // - sort()가 이 값으로 비교하면 무작위 정렬됨
        // - 같은 씬을 다시 봐도 선택지 위치가 달라짐
        choices.sort(() => Math.random() - 0.5);

        // 📌 각 선택지마다 버튼 생성
        choices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';

            // {name} 플레이스홀더를 실제 플레이어 이름으로 치환
            // 예: "{name}(와)과 데이트하기" → "유진(와)과 데이트하기"
            btn.textContent = choice.text.replace(/{name}/g, this.stateManager.playerName);

            // 클릭하면 해당 선택지 실행 (async 함수이므로 에러 처리 포함)
            btn.onclick = async () => {
                try {
                    await this.executeChoice(choice);
                } catch (e) {
                    console.error('[GameEngine] executeChoice 오류:', e);
                }
            };

            this.uiManager.choiceContainer.appendChild(btn);
        });

        // 📌 선택지 컨테이너 보이게 설정 (flex로 세로 정렬)
        this.uiManager.choiceContainer.style.display = 'flex';
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * ⚡ executeChoice - 선택지 실행 및 결과 처리
     * ═══════════════════════════════════════════════════════════════
     * 
     * ▶ 목적:
     * 플레이어가 선택지를 클릭했을 때 실행되는 핵심 로직입니다.
     * 선택에 따른 플래그 설정, 호감도 변화, 분기 처리를 담당합니다.
     * 
     * ▶ 처리 순서:
     * 1. 플래그 설정 (setFlag, setFlags) - 게임 진행 상태 기록
     * 2. 스탯/호감도 변경 (stats) - 캐릭터별 호감도 증감 및 UI 반영
     * 3. 호감도 기반 분기 처리 (affinityBranches) - 조건에 따라 다음 씬 결정
     * 4. 다음 씬으로 이동 (next) - 결정된 씬 렌더링
     * 
     * ▶ 선택지 데이터 구조 예시:
     * {
     *   text: "꽃을 선물한다",
     *   setFlag: "gaveFlower",                        // 단일 플래그 설정
     *   setFlags: ["romantic", "kind"],               // 복수 플래그 설정
     *   stats: {
     *     Seoyeon: { affinity: 10 },                  // 서연 호감도 +10
     *     Dain: { affinity: -5 },                     // 다인 호감도 -5 (질투)
     *     "#{current_character}": { affinity: 3 }     // 현재 대화중인 캐릭터 +3
     *   },
     *   affinityBranches: [                           // 호감도 기반 분기
     *     { minAffinity: 50, next: "good_ending" },   // 50 이상 → 굿엔딩
     *     { minAffinity: 20, next: "normal_ending" }  // 20 이상 → 노말엔딩
     *   ],
     *   affinityChar: "Seoyeon",                      // 분기 기준 캐릭터
     *   next: "bad_ending"                            // 기본 다음 씬 (조건 미달 시)
     * }
     * 
     * @param {Object} choice - 실행할 선택지 객체
     */
    async executeChoice(choice) {
        // ─────────────────────────────────────────────────────────
        // 📌 1단계: 플래그 설정
        // ─────────────────────────────────────────────────────────
        // 플래그는 게임 진행 상황을 기록하는 true/false 값입니다.
        // 예: "gaveFlower" 플래그 → 이후 시나리오에서 "꽃을 줬는지" 확인 가능
        // 조건 분기: if (flag.gaveFlower) { "꽃 선물 받았던 장면이 기억나네요" }

        // 단일 플래그 설정 (setFlag: "flagName")
        if (choice.setFlag) this.stateManager.setFlag(choice.setFlag);

        // 플래그 초기화 (clearFlags: ["flag1", "flag2"])
        if (choice.clearFlags?.length) choice.clearFlags.forEach(flag => this.stateManager.setFlag(flag, false));

        // 복수 플래그 설정 (setFlags: ["flag1", "flag2"])
        // 하나의 선택으로 여러 플래그를 동시에 설정할 때 사용
        if (choice.setFlags?.length) choice.setFlags.forEach(flag => this.stateManager.setFlag(flag));

        // ─────────────────────────────────────────────────────────
        // 📌 2단계: 스탯(호감도) 변경
        // ─────────────────────────────────────────────────────────
        // 선택지에 따라 한 명 또는 여러 명의 호감도를 동시에 변경합니다.
        // 
        // 처리 케이스:
        // 1. 일반 캐릭터: "Seoyeon", "Dain" 등 직접 지정
        // 2. 동적 캐릭터: "#{current_character}" → 현재 대화 중인 캐릭터로 자동 변환
        // 3. 복수 캐릭터: 한 선택지로 여러 캐릭터 호감도 동시 변경 가능
        //
        // 예시 상황:
        // - "서연을 칭찬한다" → Seoyeon +10, Dain -5 (질투)
        // - "선생님께 인사한다" → Teacher +5
        // - "현재 대화중인 캐릭터 선물" → #{current_character} +10
        
        if (choice.stats) {
            // stats 객체의 각 캐릭터별로 순회
            // 예: { Seoyeon: { affinity: 10 }, "#{current_character}": { affinity: 5 } }
            for (const [char, stats] of Object.entries(choice.stats)) {
                let charKey = char;
                
                // ───────────────────────────────────────────────────
                // 🔄 캐릭터 키 변환 처리
                // ───────────────────────────────────────────────────
                // char 값에 따라 두 가지 방식으로 처리:
                // 1. 동적 키인 경우: "#{current_character}" → 실제 캐릭터로 변환
                // 2. 일반 키인 경우: "Seoyeon", "소연" 등 → 정규화된 키로 변환
                
                if (char === "#{current_character}") {
                    // ═══════════════════════════════════════════════
                    // IF: 동적 키 처리 (런타임에 캐릭터 결정)
                    // ═══════════════════════════════════════════════
                    // "#{current_character}"는 현재 대화 중인 캐릭터를 가리키는 특수 키
                    // 예: 서연과 대화 중 → "Seoyeon"으로 변환
                    //     다인과 대화 중 → "Dain"으로 변환
                    //     유나와 대화 중 → "Yuna"로 변환
                    charKey = this.stateManager.getCurrentCharacter();
                    
                    // 현재 대화중인 캐릭터가 없으면 스킵 (안전장치)
                    // 예: 내레이션 씬, 주인공 독백 등
                    if (!charKey) continue;
                    
                } else {
                    // ═══════════════════════════════════════════════
                    // ELSE: 일반 키 처리 (고정된 캐릭터)
                    // ═══════════════════════════════════════════════
                    // 시나리오에 직접 지정된 캐릭터 이름을 정규화된 키로 변환
                    // 
                    // charNameMap 예시:
                    // {
                    //   "소연": "Seoyeon",
                    //   "서연": "Seoyeon",  // 오타 허용
                    //   "Seoyeon": "Seoyeon", // 이미 정규화된 키
                    //   "다인": "Dain",
                    //   "Dain": "Dain"
                    // }
                    //
                    // 변환 예시:
                    // - "소연" 입력 → "Seoyeon" 반환
                    // - "Seoyeon" 입력 → "Seoyeon" 그대로 반환
                    // - 없는 키 입력 → 원본 그대로 반환 (|| char)
                    charKey = this.sceneRenderer.charNameMap[char] || char;
                }
                
                // ─────────────────────────────────────────────────
                // 💕 호감도 변경 및 UI 업데이트
                // ─────────────────────────────────────────────────
                // stats.affinity가 있고, 해당 캐릭터가 존재하는 경우만 처리
                if (stats.affinity && this.stateManager.stats[charKey]) {
                    // 1️⃣ 호감도 수치 변경
                    // changeAffinity(캐릭터, 변화량) → 새로운 호감도 반환
                    // 예: 현재 30 + 변화량 10 = 새 값 40
                    const newValue = this.stateManager.changeAffinity(charKey, stats.affinity);

                    // 2️⃣ 화면에 호감도 변화 애니메이션 표시
                    // +10이면 "♥ +10" 빨간색으로 띄움
                    // -5면 "💔 -5" 회색으로 띄움
                    this.uiManager.showAffinityChange(stats.affinity, charKey);

                    // 3️⃣ 갤러리 통계 업데이트
                    // 해당 캐릭터의 역대 최대 호감도 기록 업데이트
                    this.galleryManager.updateMaxAffinity(charKey, newValue);
                    
                    // 4️⃣ 갤러리 해금 체크
                    // 호감도가 일정 수치 도달 시 갤러리 이미지 해금
                    // 예: 호감도 30 이상 → CG 1번 해금, 50 이상 → CG 2번 해금
                    this.galleryManager.checkAffinityUnlock(charKey, newValue);
                }
            }
        }

        // ─────────────────────────────────────────────────────────
        // 📌 3단계: 다음 씬 결정
        // 기본값은 choice.next, 호감도 분기가 있으면 덮어씀
        // ─────────────────────────────────────────────────────────
        let nextScene = choice.next;

        // 🔀 호감도 기반 분기 처리 (affinityBranches)
        // 특정 캐릭터의 현재 호감도에 따라 다른 씬으로 분기
        if (choice.affinityBranches && choice.affinityChar) {
            // 기준 캐릭터의 현재 호감도 가져오기
            const currentAff = this.stateManager.getAffinity(choice.affinityChar);

            // 호감도 높은 순으로 정렬 (내림차순)
            // → 가장 높은 조건부터 체크해서 첫 번째로 만족하는 것 선택
            // 동일한 minAffinity일 때는 배열 원래 순서 유지 (안정 정렬)
            const sortedBranches = [...choice.affinityBranches]
                .map((branch, index) => ({ ...branch, _originalIndex: index }))
                .sort((a, b) => b.minAffinity - a.minAffinity || a._originalIndex - b._originalIndex);

            for (const branch of sortedBranches) {
                // 현재 호감도가 최소 조건 이상이면 해당 분기로
                if (currentAff >= branch.minAffinity) {
                    nextScene = branch.next;
                    break;  // 첫 번째 매칭에서 종료
                }
            }
        }

        // ─────────────────────────────────────────────────────────
        // 📌 4단계: 씬 이동 실행
        // ─────────────────────────────────────────────────────────
        if (nextScene === 'index.html') {
            // 메인 메뉴로 돌아가기 (게임 종료)
            location.href = 'index.html';
        } else {
            // 다음 씬 렌더링
            await this.renderScene(nextScene);
        }
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 📝 handleNameConfirm - 플레이어 이름 입력 확인 처리
     * ═══════════════════════════════════════════════════════════════
     * 
     * ▶ 목적:
     * 게임 시작 시 플레이어가 자신의 이름을 입력하면 이를 검증하고
     * 유효한 경우 저장한 뒤 다음 씬으로 진행합니다.
     * 
     * ▶ 이름 규칙:
     * - 길이: 한글 1~6자, 영문 1~12자
     * - 허용 문자: 한글(가-힣), 영문(a-zA-Z)만
     * - 특수문자, 숫자, 공백 불가
     * 
     * ▶ 정규식 설명:
     * /^[가-힣]{1,6}$/ 또는 /^[a-zA-Z]{1,12}$/
     *   ^          : 문자열 시작
     *   [a-zA-Z]   : 영문 대소문자 (1~12자)
     *   [가-힣]    : 한글 완성형 (1~6자)
     *   $          : 문자열 끝
     * 
     * ▶ 처리 흐름:
     * 1. 입력값에서 앞뒤 공백 제거 (trim)
     * 2. 정규식으로 유효성 검사
     * 3. 실패 시 → 모달로 오류 메시지 표시
     * 4. 성공 시 → 이름 저장 → 입력창 숨김 → 다음 씬
     */
    async handleNameConfirm() {
        // 📌 입력값 가져와서 앞뒤 공백 제거
        const name = this.uiManager.playerNameInput.value.trim();

        // 📌 이름 유효성 검사 (한글 1~6자 또는 영문 1~12자)
        const isEn = document.documentElement.lang === 'en';
        const hasKorean = /[가-힣]/.test(name);
        const hasJamo = /[ㄱ-ㅎㅏ-ㅣ]/.test(name);
        const hasEnglish = /[a-zA-Z]/.test(name);
        const hasMixed = (hasKorean || hasJamo) && hasEnglish;

        let msg = '';

        if (hasMixed) {
            // 한영 혼합 입력
            msg = isEn
                ? "Please use only Korean or only English. Mixing is not allowed."
                : "한글과 영문을 섞어서 사용할 수 없습니다.";
        } else if (hasJamo) {
            // 한글 자모만 입력 (ㄱ, ㅏ 등)
            msg = isEn
                ? "Please enter complete Korean characters (e.g., 가, not ㄱ)."
                : "완성된 한글을 입력해주세요. (예: ㄱ → 가)";
        } else {
            // 일반 유효성 검사
            const nameRegex = hasKorean ? /^[가-힣]{1,6}$/ : /^[a-zA-Z]{1,12}$/;
            if (!nameRegex.test(name)) {
                msg = isEn
                    ? "Please enter a name: 1-12 English letters or 1-6 Korean characters."
                    : "이름은 한글 1~6자 또는 영문 1~12자로 입력해주세요.";
            }
        }

        // ❌ 유효하지 않은 이름인 경우
        if (msg) {

            // 모달로 오류 메시지 표시 (확인 버튼만)
            await this.uiManager.showModal(msg, true);

            // 다시 입력받을 수 있도록 포커스
            this.uiManager.playerNameInput.focus();
            return;
        }

        // ✅ 유효한 이름인 경우
        // 📌 플레이어 이름 저장 (전체 게임에서 사용)
        this.stateManager.setPlayerName(name);

        // 📌 이름 입력 UI 숨기기
        this.uiManager.nameInputContainer.style.display = 'none';

        // 📌 대화창 클릭 다시 활성화
        this.uiManager.dialogueBox.style.pointerEvents = 'auto';

        // 📌 현재 씬의 다음 씬으로 진행
        const scene = this.sceneRenderer.getScene(this.sceneRenderer.currentSceneId);
        const nextId = this.sceneRenderer.resolveNextScene(scene);
        if (nextId) await this.renderScene(nextId);
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 🎬 renderScene - 씬 렌더링 (게임의 핵심 함수!)
     * ═══════════════════════════════════════════════════════════════
     * 
     * ▶ 목적:
     * 시나리오 JSON에서 특정 씬을 찾아 화면에 렌더링합니다.
     * 배경, 캐릭터, 대사, 선택지, BGM 등 모든 것을 처리하는 핵심 함수!
     * 
     * ▶ 씬(Scene)이란?
     * 게임의 한 장면을 의미합니다. 소설의 한 문단과 비슷해요.
     * 각 씬에는 배경, 캐릭터, 대사, 선택지 등의 정보가 담겨 있습니다.
     * 
     * ▶ 씬 데이터 구조 예시:
     * {
     *   id: "scene_cafe_01",
     *   background: "cafe.webp",
     *   character: "soyeon_smile",
     *   name: "소연",
     *   text: "안녕! 오늘 날씨가 좋네~",
     *   bgm: "happy.mp3",
     *   next: "scene_cafe_02"
     * }
     * 
     * ▶ 씬 타입별 처리:
     * 1. 일반(dialogue): 대사 출력 → 클릭 대기 → 다음 씬
     * 2. 선택지(choices): 선택 버튼 표시 → 선택 대기
     * 3. 이름 입력(input): 입력창 표시 → 입력 대기
     * 4. 프리토킹(free_talk): AI 대화 모드 시작
     * 5. 시네마틱: 자동 진행 (연출용)
     * 
     * ▶ 처리 순서 (워터폴):
     * 1. 씬 데이터 로드
     * 2. BGM/SFX 재생
     * 3. UI 초기화
     * 4. 페이드 효과 적용
     * 5. 배경 이미지 설정
     * 6. 플래그/스탯 처리
     * 7. 시간대 필터 적용
     * 8. 현재 캐릭터 호출
     * 9. 캐릭터 이미지 업데이트
     * 10. 이름 태그 설정
     * 11. 씬 타입별 분기 처리
     * 12. 게임 자동 저장
     * 
     * @param {string} sceneId - 렌더링할 씬의 고유 ID
     */
    async renderScene(sceneId) {
        // ─────────────────────────────────────────────────────────
        // 📌 1단계: 씬 데이터 로드
        // ─────────────────────────────────────────────────────────
        const scene = this.sceneRenderer.getScene(sceneId);

        // 씬이 없으면 HTML 페이지 이동인지 확인
        if (!scene) {
            if (sceneId?.endsWith('.html')) window.location.href = sceneId;
            return;
        }

        // 현재 씬 ID 저장 (다른 곳에서 참조용)
        this.sceneRenderer.currentSceneId = sceneId;

        // ─────────────────────────────────────────────────────────
        // 🎵 2단계: BGM/SFX 처리
        // ─────────────────────────────────────────────────────────
        // bgm: "파일명" → 재생, bgm: null → 정지
        if (scene.bgm) {
            soundManager.playBgm(`assets/audio/bgm/${scene.bgm}`);
            // 🔧 갤러리에 BGM 해금 (파일명에서 확장자 제거)
            const bgmId = scene.bgm.replace(/\.(mp3|ogg|wav)$/i, '');
            this.galleryManager.unlockBGM(bgmId);
        } else if (scene.bgm === null) {
            soundManager.stopBgm();
        }

        // sfx: 효과음 1회 재생
        if (scene.sfx) soundManager.playSfx(`assets/audio/sfx/${scene.sfx}`);

        // ─────────────────────────────────────────────────────────
        // 🖥️ 3단계: UI 초기화 (깨끗한 상태로 시작)
        // ─────────────────────────────────────────────────────────
        this.uiManager.dialogueBox.style.display = 'block';
        this.uiManager.dialogueBox.style.pointerEvents = 'auto';
        this.uiManager.choiceContainer.style.display = 'none';      // 선택지 숨김
        this.uiManager.chatContainer.style.display = 'none';        // 채팅 UI 숨김
        this.uiManager.nameInputContainer.style.display = 'none';   // 이름 입력 숨김
        this.freeTalkSystem.isFreeTalking = false;                  // 프리토킹 플래그 리셋

        // ─────────────────────────────────────────────────────────
        // 🌑 4단계: 페이드 효과 처리
        // ─────────────────────────────────────────────────────────
        // 특정 키워드가 있으면 페이드 아웃(어두워지는) 효과
        const shouldFade = scene.fade || scene.text?.includes("페이드 아웃") || scene.text?.includes("어두워집니다");
        this.uiManager.setFade(shouldFade, scene.tbc);

        // ─────────────────────────────────────────────────────────
        // 🖼️ 5단계: 배경 이미지 설정
        // ─────────────────────────────────────────────────────────
        if (scene.background) await this.sceneRenderer.setBackground(scene.background);

        // ⚠️ 비동기 작업 중 씬이 바뀌었으면 중단 (Race Condition 방지)
        // 예: 빠르게 클릭해서 다른 씬으로 넘어간 경우
        if (this.sceneRenderer.currentSceneId !== sceneId) return;

        // ─────────────────────────────────────────────────────────
        // 🚩 6단계: 플래그/스탯 처리
        // ─────────────────────────────────────────────────────────
        // 씬에 정의된 setFlag, checkFlag, stats 등 처리
        this.sceneRenderer.processSceneFlags(scene);
        this.sceneRenderer.processSceneStats(scene);
        this.sceneRenderer.updateCompositeFlags();

        // ─────────────────────────────────────────────────────────
        // 🌅 7단계: 시간대 필터 적용
        // ─────────────────────────────────────────────────────────
        // night: true → 파란색 어두운 필터
        // sunset: true → 주황색 노을 필터
        this.sceneRenderer.setTimeFilter(scene.night, scene.sunset);

        // ─────────────────────────────────────────────────────────────
        // 📌 8단계: 현재 씬의 캐릭터를 "현재 캐릭터"로 설정
        // ─────────────────────────────────────────────────────────────
        if (scene.name) {
            const charKey = this.uiManager.charNameMap[scene.name];
            if (charKey) {
                this.stateManager.setCurrentCharacter(charKey);
            }
        }

        // ─────────────────────────────────────────────────────────
        // 👤 9단계: 캐릭터 이미지 업데이트
        // ─────────────────────────────────────────────────────────
        // character 또는 characters 속성에 따라 캐릭터 표시
        await this.sceneRenderer.updateCharacters(scene, sceneId);

        // ⚠️ 다시 한번 Race Condition 체크
        if (this.sceneRenderer.currentSceneId !== sceneId) return;

        // ─────────────────────────────────────────────────────────
        // 🏷️ 10단계: 이름 태그 설정
        // ─────────────────────────────────────────────────────────
        // 대화창 위에 표시되는 캐릭터 이름 (예: "소연", "다인")
        this.uiManager.updateNameTag(scene.name);

        // ─────────────────────────────────────────────────────────
        // ▶️ 다음 지시계 초기화
        // ─────────────────────────────────────────────────────────
        // 깜빡이는 삼각형 표시 숨김 (나중에 필요시 다시 표시)
        this.uiManager.showNextIndicator(false);

        // ─────────────────────────────────────────────────────────
        // 📌 11단계: 씬 타입별 분기 처리
        // ─────────────────────────────────────────────────────────

        // ═══════════════════════════════════════════════════════
        // 🗣️ 타입 A: 프리토킹 (AI와 자유 대화)
        // ═══════════════════════════════════════════════════════
        if (scene.type === 'free_talk') {
            // AI 채팅 모드 시작 - 플레이어가 자유롭게 대화 가능
            await this.freeTalkSystem.startFreeTalk(scene, sceneId);

            // ═══════════════════════════════════════════════════════
            // ✏️ 타입 B: 이름 입력
            // ═══════════════════════════════════════════════════════
        } else if (scene.type === 'input') {
            // 대화창 클릭 가능하게 유지
            this.uiManager.dialogueBox.style.pointerEvents = 'auto';

            // 안내 텍스트가 있으면 먼저 표시
            if (scene.text) {
                await this.dialogueSystem.typeText(scene.text, scene.name);
                if (this.sceneRenderer.currentSceneId !== sceneId) return;
            }

            // 이름 입력 UI 표시
            this.uiManager.nameInputContainer.style.display = 'block';
            this.uiManager.playerNameInput.value = "";
            this.uiManager.playerNameInput.focus();

            // ═══════════════════════════════════════════════════════
            // 🎬 타입 C: 엔딩 크레딧
            // ═══════════════════════════════════════════════════════
        } else if (scene.type === 'credits') {
            // 대화창 숨김
            this.uiManager.dialogueBox.style.display = 'none';
            this.uiManager.choiceContainer.style.display = 'none';

            // 크레딧 레이어 표시 (없으면 동적 생성 — 캐시된 구 HTML 대응)
            let creditsLayer = document.getElementById('credits-layer');
            if (!creditsLayer) {
                const isEn = document.documentElement.lang === 'en';
                creditsLayer = document.createElement('div');
                creditsLayer.id = 'credits-layer';
                creditsLayer.innerHTML = `
                    <div id="credits-content">
                        <div class="credits-title">CUPID</div>
                        <div class="credits-subtitle">${isEn ? 'Where Cupid\'s Arrow Lands' : '사랑의 화살이 닿는 곳'}</div>
                        <div class="credits-divider">─ ─ ─</div>
                        <div class="credits-section">
                            <div class="credits-role">${isEn ? 'Planning · Scenario' : '기획 · 시나리오'}</div>
                            <div class="credits-name">${isEn ? 'Hyungyu Jang · Yujin Kim · Sanghun Lee' : '장현규 · 김유진 · 이상훈'}</div>
                        </div>
                        <div class="credits-section">
                            <div class="credits-role">${isEn ? 'Programming · Direction' : '프로그래밍 · 연출'}</div>
                            <div class="credits-name">${isEn ? 'Hyungyu Jang · Yujin Kim' : '장현규 · 김유진'}</div>
                        </div>
                        <div class="credits-section">
                            <div class="credits-role">${isEn ? 'Art · Design' : '아트 · 디자인'}</div>
                            <div class="credits-name">${isEn ? 'Hyungyu Jang · Yujin Kim' : '장현규 · 김유진'}</div>
                        </div>
                        <div class="credits-section">
                            <div class="credits-role">${isEn ? 'Music · Sound' : '음악 · 사운드'}</div>
                            <div class="credits-name">${isEn ? 'Hyungyu Jang' : '장현규'}</div>
                        </div>
                        <div class="credits-divider">─ ─ ─</div>
                        <div class="credits-section">
                            <div class="credits-role">${isEn ? 'Characters' : '등장인물'}</div>
                            <div class="credits-name">${isEn ? 'Seoyeon · Yuna · Dain' : '서연 · 유나 · 다인'}</div>
                            <div class="credits-name">${isEn ? 'School Nurse · Homeroom Teacher' : '보건선생님 · 담임선생님'}</div>
                        </div>
                        <div class="credits-divider">─ ─ ─</div>
                        <div class="credits-section">
                            <div class="credits-role">${isEn ? 'Production' : '제작'}</div>
                            <div class="credits-name">${isEn ? 'Hyungyu Jang · Yujin Kim' : '장현규 · 김유진'}</div>
                        </div>
                        <div class="credits-divider">─ ─ ─</div>
                        <div class="credits-section">
                            <div class="credits-role">Special Thanks</div>
                            <div class="credits-name">${isEn ? 'Thank you for playing!' : '플레이해 주신 여러분께'}</div>
                            <div class="credits-name">${isEn ? 'We sincerely appreciate it.' : '진심으로 감사드립니다'}</div>
                        </div>
                        <div class="credits-spacer"></div>
                        <div class="credits-final">Cupid © 2026 ArcherLab</div>
                        <div class="credits-final">Thank you for playing</div>
                        <div class="credits-spacer"></div>
                    </div>`;
                document.getElementById('game-container').appendChild(creditsLayer);
                console.log('[GameEngine] credits-layer를 동적으로 생성했습니다.');
            }

            // 이전 크레딧 상태 완전 초기화 (재진입 시 애니메이션 재시작 보장)
            creditsLayer.classList.remove('active');
            const content = document.getElementById('credits-content');
            if (content) {
                content.style.animation = 'none';
                content.style.transform = '';
            }

            // 이전 이벤트 리스너 제거 (누적 방지)
            const oldHandler = creditsLayer._creditsClickHandler;
            if (oldHandler) creditsLayer.removeEventListener('click', oldHandler);

            // 이전 타이머 제거
            if (creditsLayer._creditsTimer) clearTimeout(creditsLayer._creditsTimer);

            // reflow 강제 — 위의 초기화가 브라우저에 반영된 후 active 추가
            creditsLayer.offsetHeight;
            if (content) {
                content.style.animation = '';
                content.style.transform = '';
            }
            creditsLayer.classList.add('active');

            console.log('[GameEngine] 크레딧 레이어 활성화됨');

            // 스킵 버튼 생성 (없으면)
            let skipBtn = document.getElementById('credits-skip-btn');
            if (!skipBtn) {
                skipBtn = document.createElement('button');
                skipBtn.id = 'credits-skip-btn';
                skipBtn.textContent = 'SKIP ▶';
                creditsLayer.appendChild(skipBtn);
            }

            // 스킵 버튼 또는 크레딧 끝나면 다음 씬으로
            let creditsEnded = false;
            const endCredits = async () => {
                if (creditsEnded) return; // 중복 실행 방지
                creditsEnded = true;
                clearTimeout(creditsTimer);
                creditsLayer._creditsTimer = null;
                creditsLayer.classList.remove('active');
                // 크레딧 스크롤 애니메이션 리셋
                if (content) {
                    content.style.animation = 'none';
                    content.offsetHeight; // reflow
                    content.style.animation = '';
                }
                // 이벤트 리스너 정리
                creditsLayer.removeEventListener('click', clickHandler);
                creditsLayer._creditsClickHandler = null;
                if (scene.next) {
                    try {
                        await this.renderScene(scene.next);
                    } catch (e) {
                        console.error('[GameEngine] 크레딧 후 씬 전환 오류:', e);
                        this.uiManager.dialogueBox.style.display = '';
                    }
                }
            };

            skipBtn.onclick = endCredits;

            // 크레딧 레이어 클릭으로도 스킵 가능 (5초 후)
            let layerClickable = false;
            setTimeout(() => { layerClickable = true; }, 5000);
            const clickHandler = (e) => {
                if (layerClickable && e.target !== skipBtn) endCredits();
            };
            creditsLayer.addEventListener('click', clickHandler);
            creditsLayer._creditsClickHandler = clickHandler;

            // 크레딧 애니메이션 종료 시 자동 전환 (25초)
            const creditsTimer = setTimeout(endCredits, 26000);
            creditsLayer._creditsTimer = creditsTimer;

            // ═══════════════════════════════════════════════════════
            // 💬 타입 D: 일반 대화/시네마틱/선택지
            // ═══════════════════════════════════════════════════════
        } else {
            // 📜 대사가 있으면 타이핑 효과로 출력
            if (scene.text) {
                await this.dialogueSystem.typeText(scene.text, scene.name);
                if (this.sceneRenderer.currentSceneId !== sceneId) return;
            } else {
                // 대사 없으면 메시지 영역 비우기
                this.uiManager.messageEl.textContent = "";
            }

            // ─────────────────────────────────────────────────────
            // ▶️ 다음 지시계 표시 여부 결정
            // ─────────────────────────────────────────────────────
            // 기본: 선택지가 없으면 표시
            let showNext = !scene.choices;

            // 예외: "다음" 선택지 하나만 있으면 표시 (자동 진행되니까)
            if (scene.choices) {
                const availableChoices = this.getAvailableChoices(scene.choices);
                if (availableChoices.length === 1 &&
                    (availableChoices[0].text === "다음" || availableChoices[0].text === "Next")) {
                    showNext = true;
                }
            }

            if (showNext) {
                // 시네마틱(연출) 씬은 딜레이 후 표시
                const delayed = !scene.text && (!scene.choices || scene.choices.length === 0);
                this.uiManager.showNextIndicator(true, delayed);
            }

            // ─────────────────────────────────────────────────────
            // � 텍스트 없이 선택지만 있는 씬 → 바로 선택지 표시
            // ─────────────────────────────────────────────────────
            // 예: 엔딩 크레딧 후 "처음부터 다시 시작하기" 버튼만 보여야 하는 경우
            if (!scene.text && scene.choices && scene.choices.length > 0) {
                const availableChoices = this.getAvailableChoices(scene.choices);
                if (availableChoices.length > 0) {
                    this.showChoices(availableChoices);
                }
            }

            // ─────────────────────────────────────────────────────
            // 🎬 자동 진행 노드 (라우팅/시네마틱)
            // ─────────────────────────────────────────────────────
            // 대사도 없고 선택지도 없는 순수 라우팅/연출용 씬
            // 호감도 분기 등 라우팅 로직만 처리하고 즉시 다음 씬으로 진행
            // (배경/캐릭터 속성이 있어도 다음 씬에서 덮어쓰므로 클릭 대기 불필요)
            if (!scene.text && (!scene.choices || scene.choices.length === 0)) {
                const nextId = this.sceneRenderer.resolveNextScene(scene);

                // 무한 루프 방지 (자기 자신으로 돌아가지 않도록)
                if (nextId && nextId !== sceneId) {
                    // 즉시 다음 씬으로 진행
                    setTimeout(() => this.renderScene(nextId), 0);
                }
            }
        }

        // ─────────────────────────────────────────────────────────
        // 💾 11단계: 게임 자동 저장
        // ─────────────────────────────────────────────────────────
        // 매 씬마다 저장하여 브라우저 종료 시에도 이어하기 가능
        this.saveGame();
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 💾 saveGame - 현재 게임 상태를 localStorage에 저장
     * ═══════════════════════════════════════════════════════════════
     * 
     * ▶ 목적:
     * 현재 게임 진행 상황을 브라우저의 localStorage에 저장합니다.
     * 브라우저를 닫아도 다음에 "이어하기"로 계속할 수 있어요!
     * 
     * ▶ 저장되는 정보:
     * 1. 현재 씬 ID (어디까지 진행했는지)
     * 2. 배경 이미지 URL
     * 3. 표시 중인 캐릭터 정보
     * 4. 게임 상태 (플래그, 호감도, 이름 등)
     * 
     * ▶ 호출 시점:
     * - renderScene() 완료 후 자동 호출
     * - 매 씬마다 저장되므로 데이터 손실 걱정 없음
     */
    saveGame() {
        // SceneRenderer에서 현재 렌더링 상태 내보내기
        const renderState = this.sceneRenderer.exportRenderState();

        // SaveManager를 통해 localStorage에 저장
        this.saveManager.save(
            renderState.sceneId,      // 현재 씬 ID
            renderState.bgUrl,        // 배경 이미지 URL
            renderState.characters,   // 캐릭터 슬롯별 이미지 URL
            this.stateManager.exportState()  // 전체 게임 상태
        );
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * 🆕 startNewGame - 새 게임 시작
     * ═══════════════════════════════════════════════════════════════
     * 
     * ▶ 목적:
     * 기존 저장 데이터를 삭제하고 처음부터 게임을 시작합니다.
     * index.html의 "새 게임" 버튼에서 호출됩니다.
     * 
     * ▶ 처리 순서:
     * 1. 사운드 매니저 초기화 (사용자 인터랙션 필요)
     * 2. 기존 세이브 데이터 삭제
     * 3. "start" 씬부터 렌더링 시작
     */
    async startNewGame() {
        // 🔊 사운드 매니저 초기화
        // 브라우저 정책상 사용자 클릭 후에만 오디오 재생 가능
        soundManager.init();

        // 🗑️ 기존 저장 데이터 모두 삭제
        this.saveManager.clear();

        // 🎬 "start" 씬부터 게임 시작
        await this.renderScene("start");
    }

    /**
     * ═══════════════════════════════════════════════════════════════
     * ▶️ continueGame - 저장된 게임 이어하기
     * ═══════════════════════════════════════════════════════════════
     * 
     * ▶ 목적:
     * localStorage에 저장된 데이터를 불러와서 게임을 이어합니다.
     * index.html의 "이어하기" 버튼에서 호출됩니다.
     * 
     * ▶ 처리 순서:
     * 1. 사운드 매니저 초기화
     * 2. 저장 데이터 로드
     * 3. 게임 상태 복원 (플래그, 호감도, 이름 등)
     * 4. 씬 ID 복원
     * 5. 배경/캐릭터 이미지 즉시 표시 (로딩 없이)
     * 6. 저장된 씬부터 렌더링 재개
     * 
     * ▶ 저장 데이터가 없으면?
     * 자동으로 새 게임을 시작합니다.
     */
    async continueGame() {
        // 🔊 사운드 매니저 초기화
        soundManager.init();

        // 💾 저장 데이터 로드
        const saveData = this.saveManager.load();

        if (saveData) {
            // ═══════════════════════════════════════════════════
            // 📌 저장 데이터가 있는 경우: 상태 복원
            // ═══════════════════════════════════════════════════

            // 🎮 게임 상태 복원 (플레이어 이름, 플래그, 호감도, 채팅 기록)
            if (saveData.gameState) this.stateManager.importState(saveData.gameState);

            // 🎬 현재 씬 ID 복원
            if (saveData.currentSceneId) this.sceneRenderer.currentSceneId = saveData.currentSceneId;

            // 🖼️ 배경 이미지 즉시 표시 (로딩 화면 없이)
            if (saveData.lastBgUrl) {
                this.sceneRenderer.lastBgUrl = saveData.lastBgUrl;
                this.uiManager.bgLayer.style.backgroundImage = `url(${saveData.lastBgUrl})`;
            }

            // 👤 캐릭터 이미지 즉시 표시
            if (saveData.currentCharacters) {
                for (const [slot, src] of Object.entries(saveData.currentCharacters)) {
                    if (this.uiManager.charSlots[slot] && src) {
                        // 저장된 이미지 URL로 캐릭터 표시 (XSS 방지)
                        const img = document.createElement('img');
                        img.src = src;
                        img.alt = 'character';
                        this.uiManager.charSlots[slot].innerHTML = '';
                        this.uiManager.charSlots[slot].appendChild(img);
                    }
                }
            }

            // 🎬 저장된 씬부터 렌더링 재개
            await this.renderScene(this.sceneRenderer.currentSceneId);

        } else {
            // ═══════════════════════════════════════════════════
            // 📌 저장 데이터가 없는 경우: 새 게임 시작
            // ═══════════════════════════════════════════════════
            await this.startNewGame();
        }
    }
}


// ════════════════════════════════════════════════════════════════════════════
// 🌍 전역 인스턴스 및 초기화 함수
// ════════════════════════════════════════════════════════════════════════════
//
// ▶ 왜 전역(window) 함수가 필요한가?
// HTML 파일에서 onclick="initGame()" 같은 인라인 이벤트로 호출하려면
// JavaScript 함수가 전역 스코프(window)에 있어야 합니다.
//
// ▶ 함수별 역할:
// - initGame(): 새 게임 시작 (index.html "새 게임" 버튼)
// - initGameFromSave(): 이어하기 (index.html "이어하기" 버튼)
// - hasSavedGame(): 저장 데이터 유무 확인 (버튼 활성화용)
// - loadGameState(): 저장 데이터 로드 (갤러리 등에서 사용)
//
// ▶ 자동 시작:
// game.html에서 직접 로드 시 DOMContentLoaded에서 자동으로 게임 시작
// ════════════════════════════════════════════════════════════════════════════

/** 
 * 게임 엔진 전역 인스턴스
 * - 모든 곳에서 접근 가능하도록 전역 변수로 선언
 * - 초기값 null, 게임 시작 시 생성됨
 * - window.gameEngine으로도 접근 가능 (개발자 도구용)
 */
let gameEngine = null;

// 개발자 도구에서 접근 가능하도록 window에 노출
// 사용법: gameEngine.renderScene('씬ID')
window.gameEngine = null;

/**
 * 🆕 새 게임 시작 (index.html에서 호출)
 * 
 * 사용 예시 (HTML):
 * <button onclick="initGame()">새 게임</button>
 */
window.initGame = async () => {
    gameEngine = new GameEngine();  // 게임 엔진 인스턴스 생성
    window.gameEngine = gameEngine; // 개발자 도구에서 접근 가능
    await gameEngine.startNewGame();  // 처음부터 시작
};

/**
 * ▶️ 저장된 게임에서 시작 (index.html에서 호출)
 * 
 * 사용 예시 (HTML):
 * <button onclick="initGameFromSave()">이어하기</button>
 */
window.initGameFromSave = async (saveData) => {
    gameEngine = new GameEngine();  // 게임 엔진 인스턴스 생성
    window.gameEngine = gameEngine; // 개발자 도구에서 접근 가능
    await gameEngine.continueGame();  // 저장 지점부터 재개
};

/**
 * 💾 저장 데이터 유무 확인 (게임 엔진 생성 전에도 사용 가능)
 * 
 * ▶ 사용 목적:
 * index.html에서 "이어하기" 버튼을 표시할지 결정할 때 사용
 * 저장 데이터가 없으면 버튼을 숨기거나 비활성화
 * 
 * ▶ 특이 사항:
 * 게임 엔진이 생성되기 전에도 호출될 수 있어서
 * gameEngine이 없으면 임시로 SaveManager를 생성해서 확인
 * 
 * @returns {boolean} 저장 데이터가 있으면 true
 */
window.hasSavedGame = () => {
    if (gameEngine) return gameEngine.saveManager.hasSave();
    // 게임 엔진 없으면 임시 SaveManager로 확인
    return new SaveManager('cupid_save').hasSave();
};

/**
 * 📂 저장된 게임 상태 로드 (게임 엔진 생성 전에도 사용 가능)
 * 
 * ▶ 사용 목적:
 * - 갤러리 페이지에서 해금 현황 확인
 * - index.html에서 "이어하기" 버튼 정보 표시
 * 
 * @returns {Object|null} 저장된 게임 상태 객체 또는 null
 */
window.loadGameState = () => {
    if (gameEngine) return gameEngine.saveManager.load();
    // 게임 엔진 없으면 임시 SaveManager로 로드
    return new SaveManager('cupid_save').load();
};

/**
 * 🎮 자동 시작 (game.html에서 직접 로드 시)
 * 
 * ▶ 동작 조건:
 * - window.preventAutoStart가 설정되지 않은 경우에만 실행
 * - index.html에서는 preventAutoStart = true로 설정하여 자동 시작 방지
 * 
 * ▶ 동작:
 * DOM 로드 완료 후 게임 엔진 생성하고 "start" 씬부터 시작
 */
if (!window.preventAutoStart) {
    window.addEventListener('DOMContentLoaded', async () => {
        try {
            gameEngine = new GameEngine();  // 게임 엔진 생성
            window.gameEngine = gameEngine; // 개발자 도구에서 접근 가능
            soundManager.init();             // 사운드 매니저 초기화
            await gameEngine.renderScene("start");  // 첫 씬 렌더링
        } catch (e) {
            console.error('[Cupid Engine] 초기화 오류:', e);
        }
    });
}

// 🎉 로드 완료 메시지 (개발자 도구 콘솔에서 확인 가능)
console.log('[Cupid Engine] 객체지향 버전 v2.0.0 로드 완료');

/**
 * 이미지 확대 모달 열기
 * @param {string} src - 이미지 소스 URL
 */
window.openImageModal = (src) => {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('image-modal-img');
    if (modal && modalImg) {
        modalImg.src = src;
        modal.style.display = 'flex';
    }
};
