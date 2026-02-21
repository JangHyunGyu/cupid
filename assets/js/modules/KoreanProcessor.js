/**
 * ============================================================================
 * KoreanProcessor.js - 한국어 조사 자동 처리기
 * ============================================================================
 *
 * 한국어에서 "은/는", "이/가", "을/를" 등의 조사는
 * 앞 글자의 받침(종성) 유무에 따라 달라집니다.
 *   예: "민수는" (받침 없음) vs "철민은" (받침 있음)
 *
 * 이 클래스는 플레이어 이름에 맞게 조사를 자동으로 변환해줍니다.
 * 시나리오에서 "{name}이가 왔다"라고 쓰면,
 *   이름이 "유나"면 → "유나가 왔다"
 *   이름이 "철민"이면 → "철민이 왔다" 로 자동 변환됩니다.
 *
 * 【외부 의존성】
 * - 없음 (독립 모듈)
 *
 * 【이 파일이 window에 노출하는 것】
 * - window.KoreanProcessor → DialogueSystem에서 new KoreanProcessor()로 사용
 *
 * @version 2.1.0
 */

class KoreanProcessor {
    constructor() {
        /**
         * 조사 변환 규칙 테이블
         * - pattern: 시나리오에서 사용하는 표기 (예: "은는", "이가")
         * - with: 받침이 있을 때 사용할 조사
         * - without: 받침이 없을 때 사용할 조사
         *
         * 긴 패턴을 먼저 검사해야 "이라고"가 "이"로 잘못 매칭되지 않습니다
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
     * 한글 유니코드 구조:
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

        // '으로/로' 특별 처리
        //   ㄹ 받침은 '로'를 사용 (서울로, 일로)
        //   다른 받침은 '으로'를 사용 (부산으로)
        //   받침 없으면 '로' 사용 (제주로)
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
     * 처리 과정:
     *   1. 텍스트에서 {name} 또는 {name?} 패턴을 찾음
     *   2. 패턴을 실제 이름으로 교체
     *   3. 이름 뒤에 조사 패턴이 있으면 받침에 맞게 교정
     *
     * 사용 예시:
     *   processName("{name}은는 착하다", "유나", "{name}")
     *   → "유나는 착하다" (유나: 받침 없음 → 는)
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

            // '님', '학생' 같은 호칭이 바로 뒤에 오면 조사 처리 건너뜀
            //   예: "{name}님" → "민수님" (조사 처리 안 함)
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

// ============================================================================
// window 전역 노출
// ============================================================================
window.KoreanProcessor = KoreanProcessor;
