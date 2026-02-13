/**
 * ============================================================================
 * CUPID - Day 4 Morning Scenario (Korean Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: ko_day4_1_morning.js
 * 언어: 한국어 (Korean)
 * 일차: Day 4 (4일차 - 토요일)
 * 시간대: Morning (아침)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 토요일 아침, 드디어 데이트 당일이 밝았다.
 * 주인공은 설레는 마음으로 준비하고, 약속 장소로 향한다.
 * 최고 호감도 히로인에 따라 만남이 달라진다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 토요일 아침 기상 - 설렘과 긴장
 * 2. 데이트 준비 - 옷차림 선택
 * 3. 약속 장소 출발 - 히로인별 분기
 * 
 *  조건 플래그 (Condition Flags)
 * ----------------------------------------------------------------------------
 * day3_seoyeon_date_confirmed : 서연과 데이트 약속
 * day3_yuna_date_confirmed    : 유나와 데이트 약속
 * day3_dain_date_confirmed    : 다인과 데이트 약속
 * day3_nurse_date_confirmed   : 보건선생님과 데이트 약속
 * day3_teacher_date_confirmed : 담임선생님과 데이트 약속
 * day3_has_multiple_dates     : 복수 약속 존재
 * day3_loyalty_bonus          : 단일 약속 보너스
 * 
 *  설정 플래그 (Set Flags)
 * ----------------------------------------------------------------------------
 * day4_outfit_casual     : 캐주얼 옷차림 선택
 * day4_outfit_stylish    : 스타일리시 옷차림 선택
 * day4_date_target_set   : 데이트 대상 확정
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 옷차림 선택에 따라 해당 히로인 +3 ~ +5
 * 
 * ============================================================================
 */

// SCENARIO 전역 객체 초기화
if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}

// Day 4 시나리오 그룹 초기화
if (!SCENARIO[4]) {
    SCENARIO[4] = {};
}

/**
 * [Day 4 - Morning] 씬 데이터 정의
 */
Object.assign(SCENARIO[4], {

    // =========================================================================
    // 토요일 아침 기상
    // =========================================================================
    "day4_start": {
        name: "나",
        text: "(…눈을 뜨니 토요일 아침이다. 심장이 벌써부터 뛴다.)",
        background: "assets/images/background/room_my.png",
        character: null,
        bgm: "morning.mp3",
        fade: true,
        next: "day4_morning_wake"
    },
    "day4_morning_wake": {
        name: "나",
        text: "(오늘은… 드디어 그날이다. 어제 밤엔 잠도 제대로 못 잤어.)",
        next: "day4_morning_mirror"
    },
    "day4_morning_mirror": {
        name: "나",
        text: "(거울 앞에 서니 긴장된 내 얼굴이 보인다. 좀 더 멋있어 보이고 싶은데…)",
        next: "day4_morning_outfit"
    },

    // =========================================================================
    // 옷차림 선택
    // =========================================================================
    "day4_morning_outfit": {
        name: "나",
        text: "(뭘 입고 나가지? 첫인상이 중요하니까 신중하게 골라야 해.)",
        choices: [
            {
                text: "깔끔한 캐주얼 (흰 셔츠 + 청바지)",
                next: "day4_outfit_casual",
                setFlag: "day4_outfit_casual"
            },
            {
                text: "세련된 스타일 (자켓 + 슬랙스)",
                next: "day4_outfit_stylish",
                setFlag: "day4_outfit_stylish"
            }
        ]
    },
    "day4_outfit_casual": {
        name: "나",
        text: "(역시 편한 게 최고지. 자연스럽게 입는 게 내 스타일이야.)",
        next: "day4_morning_phone"
    },
    "day4_outfit_stylish": {
        name: "나",
        text: "(오늘은 좀 특별하니까. 이 정도면 괜찮겠지?)",
        next: "day4_morning_phone"
    },

    // =========================================================================
    // 히로인 메시지 확인 + 출발
    // =========================================================================
    "day4_morning_phone": {
        name: "나",
        text: "(핸드폰을 확인하니 메시지가 와 있다.)",
        next: "day4_morning_message_branch"
    },
    "day4_morning_message_branch": {
        name: "시스템",
        text: "",
        branches: [
            // 약속이 하나라도 있으면 → 최고 호감도 히로인 데이트
            { next: "day4_morning_date_route", condition: "day3_seoyeon_date_confirmed" },
            { next: "day4_morning_date_route", condition: "day3_yuna_date_confirmed" },
            { next: "day4_morning_date_route", condition: "day3_dain_date_confirmed" },
            { next: "day4_morning_date_route", condition: "day3_nurse_date_confirmed" },
            { next: "day4_morning_date_route", condition: "day3_teacher_date_confirmed" },
            // 약속 없음 → 솔로 루트
            { next: "day4_no_date_start" }
        ]
    },
    "day4_morning_date_route": {
        name: "시스템",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_msg_seoyeon", character: "Seoyeon" },
            { next: "day4_msg_yuna", character: "Yuna" },
            { next: "day4_msg_dain", character: "Dain" },
            { next: "day4_msg_nurse", character: "Nurse" },
            { next: "day4_msg_teacher", character: "Teacher" }
        ]
    },

    // --- 서연 메시지 ---
    "day4_msg_seoyeon": {
        name: "서연",
        text: "\"오늘 약속 잊지 않았지? 😊 공원 분수대 앞에서 10시에 만나! 기대된다~\"",
        character: "assets/images/characters/seyoun_laugh.png",
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_seoyeon"
    },
    "day4_morning_reply_seoyeon": {
        name: "나",
        text: "(서연이한테서 메시지가 왔다. 웃는 이모티콘이 귀엽네.)",
        next: "day4_morning_depart"
    },

    // --- 유나 메시지 ---
    "day4_msg_yuna": {
        name: "유나",
        text: "\"…10시. 역 앞 카페. 늦으면 모른다.\"",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_yuna"
    },
    "day4_morning_reply_yuna": {
        name: "나",
        text: "(유나답게 짧고 간결하다. 근데 이런 게 유나의 매력이지.)",
        next: "day4_morning_depart"
    },

    // --- 다인 메시지 ---
    "day4_msg_dain": {
        name: "다인",
        text: "\"야!! 오늘 연습 끝나고 만나자!! 체육관 앞에서 11시!! 늦지 마!!!! 🏐\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_dain"
    },
    "day4_morning_reply_dain": {
        name: "나",
        text: "(느낌표가 엄청 많네… 다인이의 에너지가 메시지에서도 느껴진다.)",
        next: "day4_morning_depart"
    },

    // --- 보건선생님 메시지 ---
    "day4_msg_nurse": {
        name: "보건선생님",
        text: "\"오늘 괜찮으면… 시내 미술관은 어때? 보고 싶은 전시가 있거든. 11시에 미술관 앞에서 만나자.\"",
        character: "assets/images/characters/nurse_normal.png",
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_nurse"
    },
    "day4_morning_reply_nurse": {
        name: "나",
        text: "(보건선생님과 미술관이라… 왠지 두근거린다.)",
        next: "day4_morning_depart"
    },

    // --- 담임선생님 메시지 ---
    "day4_msg_teacher": {
        name: "담임선생님",
        text: "\"오늘 점심쯤에 학교 근처 카페에서 볼까? 할 얘기가 있어서. 12시에 만나자.\"",
        character: "assets/images/characters/teacher_normal.png",
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_teacher"
    },
    "day4_morning_reply_teacher": {
        name: "나",
        text: "(담임선생님이랑 학교 밖에서 만나다니… 긴장된다.)",
        next: "day4_morning_depart"
    },

    // =========================================================================
    // 출발
    // =========================================================================
    "day4_morning_depart": {
        name: "나",
        text: "(좋아, 준비 완료. 가자!)",
        fade: true,
        next: "day4_arrive"
    },

    // =========================================================================
    // 약속 없음 - 혼자 보내는 토요일
    // =========================================================================
    "day4_no_date_start": {
        name: "나",
        text: "(…핸드폰을 확인했지만, 메시지는 없다.)",
        next: "day4_no_date_2"
    },
    "day4_no_date_2": {
        name: "나",
        text: "(주말인데 약속이 없다니. 전학 와서 벌써 일주일이 지났는데… 뭘 한 걸까.)",
        next: "day4_no_date_3"
    },
    "day4_no_date_3": {
        name: "나",
        text: "(그래도 날씨가 좋으니까, 동네라도 산책이나 할까.)",
        choices: [
            {
                text: "편의점에서 간식 사서 공원 가기",
                next: "day4_no_date_park"
            },
            {
                text: "집에서 뒹굴뒹굴하기",
                next: "day4_no_date_home"
            }
        ]
    },
    "day4_no_date_park": {
        name: "나",
        text: "(공원 벤치에 앉아 혼자 과자를 먹었다. 주변에는 연인들이 많다.)",
        background: "assets/images/background/park.png",
        next: "day4_no_date_lonely"
    },
    "day4_no_date_home": {
        name: "나",
        text: "(침대에 누워서 천장만 바라봤다. 이래도 되나 싶다.)",
        next: "day4_no_date_lonely"
    },
    "day4_no_date_lonely": {
        name: "나",
        text: "(…이렇게 혼자 토요일을 보내다니. 월요일에 학교 가면 좀 달라져야겠다.)",
        next: "day4_no_date_evening"
    },
    "day4_no_date_evening": {
        name: "나",
        text: "(어느새 해가 졌다. 특별할 것 없는 토요일이 끝나간다.)",
        fade: true,
        next: "day4_night_start"
    }
});
