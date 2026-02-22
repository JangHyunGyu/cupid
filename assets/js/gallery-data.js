/**
 * ============================================================================
 * GalleryData - 갤러리 데이터 클래스
 * ============================================================================
 * 
 * 이 클래스는 Cupid 게임의 갤러리에서 사용하는 모든 정적 데이터를 관리합니다.
 * 
 * 포함 데이터:
 * - 캐릭터 정보 (이름, 설명, 프로필, 표정 목록)
 * - 표정 이름 매핑 (코드 → 표시명)
 * - CG 목록 (이벤트 CG 정보)
 * - BGM 목록 (배경음악 정보)
 * 
 * 사용 예시:
 *   GalleryData.getCharacter('ko', 'seyoun');  // 서연 캐릭터 데이터
 *   GalleryData.getExpressionName('ko', 'shy'); // '수줍음'
 */

class GalleryData {
    // =========================================================================
    // 버전 정보
    // =========================================================================

    /**
     * 갤러리 데이터 버전
     * 데이터 구조가 변경되면 버전을 올려서 자동 리셋 유도
     */
    static VERSION = 2;

    // =========================================================================
    // 캐릭터 데이터 (Character Data)
    // =========================================================================
    // 
    // 각 캐릭터의 상세 정보를 담고 있는 객체
    // 'ko'(한국어)와 'en'(영어) 두 가지 언어를 지원
    // 
    // 구조 설명:
    // - id: 캐릭터 고유 식별자 (이미지 파일명에 사용)
    // - name: 캐릭터 이름
    // - title: 캐릭터의 별명/칭호
    // - shortDescription: 짧은 소개 (호감도 80 미만에서 표시)
    // - description: 전체 소개 (호감도 80 이상에서 표시)
    // - age, birthday, height, weight, bust: 프로필 정보
    // - hobby, personality: 취미와 성격
    // - expressions: 사용 가능한 표정 목록 (이미지 파일명에 사용)
    //   예: 'normal' → 'seyoun_normal.png'

    static characters = {
        // ===== 한국어 데이터 =====
        ko: {
            // 서연 - 완벽한 학생회장 (메가데레)
            seyoun: {
                id: 'seyoun',
                name: '서연',
                title: '완벽한 학생회장',
                shortDescription: '모두에게 친절한 완벽한 학생회장.',
                description: '모두에게 친절한 완벽한 학생회장. 사실 외로움을 잘 타며, 단둘이 있을 때는 부끄러움을 많이 탄다. 규칙을 중시하지만, 당신을 위해서라면 가끔 규칙을 어기고 싶어 한다.',
                age: '18세',
                birthday: '3월 14일',
                height: '165cm',
                weight: '48kg',
                bust: '34-22-35 65E',
                hobby: '음악 감상, 독서',
                personality: '메가데레, 수줍음',
                expressions: ['normal', 'shy', 'shy2', 'angry', 'sad', 'laugh', 'cry', 'pout', 'worried', 'back', 'bikini']
            },

            // 유나 - 신비로운 쿨데레
            yuna: {
                id: 'yuna',
                name: '유나',
                title: '신비로운 쿨데레',
                shortDescription: '무표정하고 차가운 쿨데레의 정석.',
                description: '무표정하고 차가운 쿨데레의 정석. 당신의 "특별한 빛"에 깊고 집착적인 관심을 보이며, 가끔씩 툭 던지는 신비롭고 설레는 대사가 특징. 당신을 지키려는 묘한 분위기를 풍긴다.',
                age: '18세',
                birthday: '7월 22일',
                height: '162cm',
                weight: '47kg',
                bust: '33-21-34 65E',
                hobby: '별 보기, 시 쓰기',
                personality: '쿨데레, 신비',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'bikini']
            },

            // 다인 - 햇살 같은 소꿉친구 (현모양처형 츤데레)
            dain: {
                id: 'dain',
                name: '다인',
                title: '햇살 같은 소꿉친구',
                shortDescription: '밝고 활기찬 현모양처형 츤데레.',
                description: '밝고 활기찬 현모양처형 츤데레. 당신을 편한 친구처럼 대하지만, 로맨틱한 분위기가 되면 금방 얼굴이 빨개지며 당황한다. 감정에 솔직하지만 표현이 서툰 귀여운 매력이 있다.',
                age: '18세',
                birthday: '12월 25일',
                height: '158cm',
                weight: '46kg',
                bust: '35-23-36 65F',
                hobby: '요리, 운동',
                personality: '츤데레, 활발',
                expressions: ['normal', 'shy', 'angry', 'sad', 'laugh', 'pout', 'active', 'sweat', 'bikini']
            },

            // 담임선생님 - 갭 모에
            teacher: {
                id: 'teacher',
                name: '담임선생님',
                title: '의외의 허당 선생님',
                shortDescription: '공과 사가 뚜렷한 전문적인 교사.',
                description: '공과 사가 뚜렷한 전문적인 교사지만, 사실 허당끼가 있다. 당신의 예상치 못한 어른스러운 모습에 가슴 설레어 하며, 은근히 당신에게 의지하고 싶어 하는 갭 모에가 있다.',
                age: '28세',
                birthday: '5월 5일',
                height: '170cm',
                weight: '58kg',
                bust: '38-24-38 70G',
                hobby: '독서, 영화 감상',
                personality: '전문적, 허당',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bikini']
            },

            // 보건선생님 - 장난꾸러기 누나
            nurse: {
                id: 'nurse',
                name: '보건선생님',
                title: '장난꾸러기 보건교사',
                shortDescription: '성숙하고 장난기 많은 보건 교사.',
                description: '성숙하고 장난기 많은 보건 교사. 도발적인 말로 당신을 놀리는 것을 즐기지만, 사실 누구보다 학생들을 아끼고 보호하려 한다. 당신이 당황하는 모습에 귀여움을 느낀다.',
                age: '26세',
                birthday: '9월 12일',
                height: '168cm',
                weight: '60kg',
                bust: '40-24-40 70H',
                hobby: '원예, 명상',
                personality: '장난기, 성숙',
                expressions: ['normal', 'shy', 'angry', 'bikini']
            }
        },

        // ===== 영어 데이터 (English Data) =====
        // 한국어 데이터와 동일한 구조, 영어로 번역된 텍스트
        en: {
            // Seyoun - 완벽한 학생회장 (메가데레)
            seyoun: {
                id: 'seyoun',
                name: 'Seoyeon',
                title: 'The Perfect President',
                shortDescription: 'A perfect student council president who is kind to everyone.',
                description: 'A perfect student council president who is kind to everyone. Actually gets lonely easily and becomes very shy when alone with you. Values rules, but sometimes wants to break them for you.',
                age: '18 years old',
                birthday: 'March 14',
                height: '165cm',
                weight: '48kg',
                bust: '34-22-35 65E',
                hobby: 'Music, Reading',
                personality: 'Megadere, Shy',
                expressions: ['normal', 'shy', 'shy2', 'angry', 'sad', 'laugh', 'cry', 'pout', 'worried', 'back', 'bikini']
            },

            // Yuna - 신비로운 쿨데레 (Kuudere)
            yuna: {
                id: 'yuna',
                name: 'Yuna',
                title: 'Mysterious Kuudere',
                shortDescription: 'The epitome of a cold, expressionless kuudere.',
                description: 'The epitome of a cold, expressionless kuudere. Shows deep, obsessive interest in your "special light". Known for occasional mysterious and heart-fluttering remarks. Gives off an aura of wanting to protect you.',
                age: '18 years old',
                birthday: 'July 22',
                height: '162cm',
                weight: '47kg',
                bust: '33-21-34 65E',
                hobby: 'Stargazing, Poetry',
                personality: 'Kuudere, Mysterious',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bored', 'bikini']
            },

            // Dain - 햇살 같은 소꿉친구 (Tsundere)
            dain: {
                id: 'dain',
                name: 'Dain',
                title: 'Sunny Childhood Friend',
                shortDescription: 'A bright and lively "nurturing" tsundere.',
                description: 'A bright and lively "nurturing" tsundere. Treats you like a comfortable friend, but quickly turns red and flustered in romantic moments. Honest about feelings but clumsy at expressing them.',
                age: '18 years old',
                birthday: 'December 25',
                height: '158cm',
                weight: '46kg',
                bust: '35-23-36 65F',
                hobby: 'Cooking, Sports',
                personality: 'Tsundere, Cheerful',
                expressions: ['normal', 'shy', 'angry', 'sad', 'laugh', 'pout', 'active', 'sweat', 'bikini']
            },

            // Teacher (Ms. Kim) - 의외의 허당 선생님 (Gap Moe)
            teacher: {
                id: 'teacher',
                name: 'Ms. Kim',
                title: 'The Clumsy Teacher',
                shortDescription: 'A professional teacher who separates work and personal life.',
                description: 'A professional teacher who separates work and personal life, but actually has a clumsy side. Her heart flutters at your unexpectedly mature moments. Has a charming contrast of secretly wanting to rely on you.',
                age: '28 years old',
                birthday: 'May 5',
                height: '170cm',
                weight: '58kg',
                bust: '38-24-38 70G',
                hobby: 'Reading, Movies',
                personality: 'Professional, Clumsy',
                expressions: ['normal', 'smile', 'shy', 'angry', 'sad', 'bikini']
            },

            // Nurse (School Nurse) - 장난꾸러기 보건교사 (Playful)
            nurse: {
                id: 'nurse',
                name: 'School Nurse',
                title: 'Playful Health Teacher',
                shortDescription: 'A mature and playful school nurse.',
                description: 'A mature and playful school nurse. Enjoys teasing you with provocative words, but actually cares for and protects students more than anyone. Finds your flustered reactions adorable.',
                age: '26 years old',
                birthday: 'September 12',
                height: '168cm',
                weight: '60kg',
                bust: '40-24-40 70H',
                hobby: 'Gardening, Meditation',
                personality: 'Playful, Mature',
                expressions: ['normal', 'shy', 'angry', 'bikini']
            }
        }
    };

    // =========================================================================
    // 표정 이름 매핑 (Expression Name Mappings)
    // =========================================================================
    // 표정 코드(예: 'shy')를 사용자에게 표시할 이름(예: '수줍음')으로 변환
    // 표정 선택 버튼에 텍스트로 표시됨

    static expressions = {
        // 한국어 표정 이름
        ko: {
            normal: '기본',      // 기본 표정
            shy: '수줍음',       // 수줍은 표정
            shy2: '수줍음2',     // 수줍은 표정 변형
            angry: '화남',       // 화난 표정
            sad: '슬픔',         // 슬픈 표정
            laugh: '웃음',       // 웃는 표정
            cry: '울음',         // 우는 표정
            pout: '삐짐',        // 삐친 표정
            worried: '걱정',     // 걱정하는 표정
            back: '뒷모습',      // 뒷모습
            smile: '미소',       // 미소짓는 표정
            bored: '지루함',     // 지루해하는 표정
            active: '활발',      // 활발한 표정
            sweat: '땀흘림',     // 땀에 젖은 표정
            bikini: '비키니'     // 특별 표정 (호감도 100 + 프리토킹 100회)
        },

        // 영어 표정 이름
        en: {
            normal: 'Normal',
            shy: 'Shy',
            shy2: 'Shy 2',
            angry: 'Angry',
            sad: 'Sad',
            laugh: 'Laugh',
            cry: 'Cry',
            pout: 'Pout',
            worried: 'Worried',
            back: 'Back',
            smile: 'Smile',
            bored: 'Bored',
            active: 'Active',
            sweat: 'Nervous',
            bikini: 'Bikini'     // Special expression (Affinity 100 + 100 Free Talks)
        }
    };

    // =========================================================================
    // CG 데이터 (이벤트 CG 목록)
    // =========================================================================
    // 게임 내 특별 이벤트에서 표시되는 일러스트(CG) 목록
    // 
    // 구조 설명:
    // - id: CG 고유 식별자 (해금 상태 저장에 사용)
    // - name: CG 제목
    // - character: 해당 CG에 등장하는 캐릭터
    // - description: CG 설명
    // - file: 원본 이미지 경로
    // - thumbnail: 썸네일 이미지 경로 (목록에서 표시용)

    static cg = {
        ko: [
            {
                id: 'nurse_home_event1',
                name: '보건선생님과의 특별한 만남',
                character: '보건선생님',
                description: '보건선생님의 집에서 일어난 특별한 이벤트',
                file: 'assets/images/background/nurse_home_event1.png',
                thumbnail: 'assets/images/background/nurse_home_event1.png'
            }
            // 새 CG를 추가하려면 여기에 같은 형식으로 객체 추가
        ],
        en: [
            {
                id: 'nurse_home_event1',
                name: 'Special Moment with the Nurse',
                character: 'School Nurse',
                description: 'A special event at the nurse\'s home',
                file: 'assets/images/background/nurse_home_event1.png',
                thumbnail: 'assets/images/background/nurse_home_event1.png'
            }
        ]
    };

    // =========================================================================
    // BGM 데이터 (배경음악 목록)
    // =========================================================================
    // 게임에서 사용되는 배경음악 목록
    // 게임 내에서 해당 BGM이 재생되면 자동으로 갤러리에서 해금됨
    //
    // 구조 설명:
    // - id: BGM 고유 식별자 (파일명과 동일하게 설정 권장)
    // - name: BGM 제목
    // - artist: 작곡가/아티스트
    // - duration: 재생 시간
    // - file: 오디오 파일 경로

    static bgm = {
        ko: [
            { id: 'intro', name: '메인 테마', artist: 'Cupid OST', duration: '2:30', file: 'assets/audio/bgm/intro.mp3' },
            { id: 'morning', name: '상쾌한 아침', artist: 'Cupid OST', duration: '3:25', file: 'assets/audio/bgm/morning.mp3' },
            { id: 'daily', name: '학교 일상', artist: 'Cupid OST', duration: '3:15', file: 'assets/audio/bgm/daily.mp3' },
            { id: 'daily2', name: '평화로운 오후', artist: 'Cupid OST', duration: '3:00', file: 'assets/audio/bgm/daily2.mp3' },
            { id: 'sunset1', name: '노을 지는 하교길', artist: 'Cupid OST', duration: '2:45', file: 'assets/audio/bgm/sunset1.mp3' },
            { id: 'sunset2', name: '설레는 순간', artist: 'Cupid OST', duration: '2:50', file: 'assets/audio/bgm/sunset2.mp3' },
            { id: 'date', name: '두근두근 데이트', artist: 'Cupid OST', duration: '4:16', file: 'assets/audio/bgm/date.mp3' },
            { id: 'night1', name: '고요한 밤', artist: 'Cupid OST', duration: '3:20', file: 'assets/audio/bgm/night1.mp3' },
            { id: 'night2', name: '비밀스러운 밤', artist: 'Cupid OST', duration: '3:10', file: 'assets/audio/bgm/night2.mp3' },
            { id: 'mystery', name: '수상한 기운', artist: 'Cupid OST', duration: '5:16', file: 'assets/audio/bgm/mystery.mp3' },
            { id: 'confession', name: '고백', artist: 'Cupid OST', duration: '6:43', file: 'assets/audio/bgm/confession.mp3' },
            { id: 'ending', name: '엔딩 테마', artist: 'Cupid OST', duration: '4:56', file: 'assets/audio/bgm/ending.mp3' }
        ],
        en: [
            { id: 'intro', name: 'Main Theme', artist: 'Cupid OST', duration: '2:30', file: 'assets/audio/bgm/intro.mp3' },
            { id: 'morning', name: 'Fresh Morning', artist: 'Cupid OST', duration: '3:25', file: 'assets/audio/bgm/morning.mp3' },
            { id: 'daily', name: 'School Days', artist: 'Cupid OST', duration: '3:15', file: 'assets/audio/bgm/daily.mp3' },
            { id: 'daily2', name: 'Peaceful Afternoon', artist: 'Cupid OST', duration: '3:00', file: 'assets/audio/bgm/daily2.mp3' },
            { id: 'sunset1', name: 'Sunset Walk Home', artist: 'Cupid OST', duration: '2:45', file: 'assets/audio/bgm/sunset1.mp3' },
            { id: 'sunset2', name: 'Romantic Moment', artist: 'Cupid OST', duration: '2:50', file: 'assets/audio/bgm/sunset2.mp3' },
            { id: 'date', name: 'Heart-Racing Date', artist: 'Cupid OST', duration: '4:16', file: 'assets/audio/bgm/date.mp3' },
            { id: 'night1', name: 'Quiet Night', artist: 'Cupid OST', duration: '3:20', file: 'assets/audio/bgm/night1.mp3' },
            { id: 'night2', name: 'Secret Night', artist: 'Cupid OST', duration: '3:10', file: 'assets/audio/bgm/night2.mp3' },
            { id: 'mystery', name: 'Suspicious Aura', artist: 'Cupid OST', duration: '5:16', file: 'assets/audio/bgm/mystery.mp3' },
            { id: 'confession', name: 'Confession', artist: 'Cupid OST', duration: '6:43', file: 'assets/audio/bgm/confession.mp3' },
            { id: 'ending', name: 'Ending Theme', artist: 'Cupid OST', duration: '4:56', file: 'assets/audio/bgm/ending.mp3' }
        ]
    };

    // =========================================================================
    // 헬퍼 메서드 (Helper Methods)
    // =========================================================================

    /**
     * 특정 캐릭터 데이터 가져오기
     * 
     * @param {string} lang - 언어 코드 ('ko' 또는 'en')
     * @param {string} charId - 캐릭터 ID (예: 'seyoun', 'yuna')
     * @returns {Object|null} 캐릭터 데이터 객체 또는 null
     * 
     * @example
     * const char = GalleryData.getCharacter('ko', 'seyoun');
     * console.log(char.name); // '서연'
     */
    static getCharacter(lang, charId) {
        return this.characters[lang]?.[charId] || null;
    }

    /**
     * 모든 캐릭터 목록 가져오기
     * 
     * @param {string} lang - 언어 코드 ('ko' 또는 'en')
     * @returns {Object} 해당 언어의 모든 캐릭터 객체
     * 
     * @example
     * const allChars = GalleryData.getAllCharacters('ko');
     * Object.values(allChars).forEach(char => console.log(char.name));
     */
    static getAllCharacters(lang) {
        return this.characters[lang] || {};
    }

    /**
     * 표정 코드를 표시 이름으로 변환
     * 
     * @param {string} lang - 언어 코드 ('ko' 또는 'en')
     * @param {string} expr - 표정 코드 (예: 'shy', 'angry')
     * @returns {string} 표정 표시 이름 (예: '수줍음', 'Angry')
     * 
     * @example
     * GalleryData.getExpressionName('ko', 'shy'); // '수줍음'
     * GalleryData.getExpressionName('en', 'shy'); // 'Shy'
     */
    static getExpressionName(lang, expr) {
        return this.expressions[lang]?.[expr] || expr;
    }

    /**
     * CG 목록 가져오기
     * 
     * @param {string} lang - 언어 코드 ('ko' 또는 'en')
     * @returns {Array} CG 객체 배열
     */
    static getCGList(lang) {
        return this.cg[lang] || [];
    }

    /**
     * 특정 CG 찾기
     * 
     * @param {string} lang - 언어 코드
     * @param {string} cgId - CG ID
     * @returns {Object|null} CG 객체 또는 null
     */
    static getCG(lang, cgId) {
        return this.cg[lang]?.find(cg => cg.id === cgId) || null;
    }

    /**
     * 모든 CG ID 목록 가져오기 (언어 무관)
     * CG 경로에서 ID 추출 시 유효성 검증에 사용
     * 
     * @returns {Set} 모든 CG ID의 Set
     */
    static getAllCGIds() {
        return new Set([
            ...this.cg.ko.map(cg => cg.id),
            ...this.cg.en.map(cg => cg.id)
        ]);
    }

    /**
     * BGM 목록 가져오기
     * 
     * @param {string} lang - 언어 코드 ('ko' 또는 'en')
     * @returns {Array} BGM 객체 배열
     */
    static getBGMList(lang) {
        return this.bgm[lang] || [];
    }
}

// 전역 접근을 위해 window에 노출 (다른 스크립트에서 사용 가능)
window.GalleryData = GalleryData;
