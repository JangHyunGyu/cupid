/**
 * ============================================================================
 * CUPID - Day 4 Morning Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day4_1_morning.js
 * 언어: 영어 (English)
 * 일차: Day 4 (4일차 - 토요일)
 * 시간대: Morning (아침)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 토요일 아침. 메시지를 확인하고 데이트 계획을 결정한다.
 * 2단계 분기: 데이트 루트 vs 솔로 루트.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 아침 메시지 확인 - 데이트 초대
 * 2. 데이트 루트: 히로인별 만남
 * 3. 솔로 루트: 혼자 탐색
 * 
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[4]) {
    SCENARIO[4] = {};
}

Object.assign(SCENARIO[4], {

    // =========================================================================
    // 토요일 아침 - 기상
    // =========================================================================
    "day4_start": {
        name: "Me",
        text: "(Saturday morning. Finally the weekend. The sunlight feels warmer than usual.)",
        background: "assets/images/background/room_my.png",
        character: null,
        bgm: "morning.mp3",
        changeDay: 4,
        fade: true,
        next: "day4_morning_routine"
    },
    "day4_morning_routine": {
        name: "Me",
        text: "(I stretch and check my phone. Have any messages come in?)",
        next: "day4_morning_message_branch"
    },

    // =========================================================================
    // 메시지 분기 (2단계)
    // =========================================================================
    "day4_morning_message_branch": {
        name: "System",
        text: "",
        branches: [
            { next: "day4_morning_date_route", condition: "day3_date_seoyeon" },
            { next: "day4_morning_date_route", condition: "day3_date_yuna" },
            { next: "day4_morning_date_route", condition: "day3_date_dain" },
            { next: "day4_morning_date_route", condition: "day3_date_nurse" },
            { next: "day4_morning_date_route", condition: "day3_date_teacher" },
            { next: "day4_no_date_start" }
        ]
    },

    // =========================================================================
    // 데이트 루트 - 히로인 메시지
    // =========================================================================
    "day4_morning_date_route": {
        name: "System",
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

    // --- 서연 ---
    "day4_msg_seoyeon": {
        name: "Me",
        text: "(A message from Seoyeon. \"Good morning! Let's meet in front of school at noon~\")",
        character: null,
        setFlag: "day4_date_target_set",
        next: "day4_morning_prepare"
    },

    // --- 유나 ---
    "day4_msg_yuna": {
        name: "Me",
        text: "(A message from Yuna. \"…Noon. Front of school. Don't be late.\")",
        character: null,
        setFlag: "day4_date_target_set",
        next: "day4_morning_prepare"
    },

    // --- 다인 ---
    "day4_msg_dain": {
        name: "Me",
        text: "(A message from Dain. \"Hey!! Let's meet at noon at school!! Don't forget!!\")",
        character: null,
        setFlag: "day4_date_target_set",
        next: "day4_morning_prepare"
    },

    // --- 보건선생님 ---
    "day4_msg_nurse": {
        name: "Me",
        text: "(A message from the school nurse. \"Are you free today? Let's meet in front of school around noon. I have a place I want to take you.\")",
        character: null,
        setFlag: "day4_date_target_set",
        next: "day4_morning_prepare"
    },

    // --- 담임선생님 ---
    "day4_msg_teacher": {
        name: "Me",
        text: "(A message from the homeroom teacher. \"Hey, it's the weekend. Come to school by noon. ...I have something to tell you.\")",
        character: null,
        setFlag: "day4_date_target_set",
        next: "day4_morning_prepare"
    },

    // =========================================================================
    // 준비 & 출발
    // =========================================================================
    "day4_morning_prepare": {
        name: "Me",
        text: "(My heart races. I pick my outfit carefully and get ready.)",
        next: "day4_morning_depart"
    },
    "day4_morning_depart": {
        name: "Me",
        text: "(I step outside. The spring breeze is warm. I head towards school.)",
        fade: true,
        next: "day4_arrive"
    },

    // =========================================================================
    // 솔로 루트 - 데이트 없음
    // =========================================================================
    "day4_no_date_start": {
        name: "Me",
        text: "(Saturday. No messages from anyone. ...It's a quiet morning.)",
        next: "day4_no_date_walk"
    },
    "day4_no_date_walk": {
        name: "Me",
        text: "(I decide to take a walk. The streets are filled with couples and friends enjoying the weekend.)",
        background: "assets/images/background/street.png",
        next: "day4_no_date_think"
    },
    "day4_no_date_think": {
        name: "Me",
        text: "(I should have been more proactive... Should I have made plans with someone?)",
        next: "day4_no_date_park"
    },
    "day4_no_date_park": {
        name: "Me",
        text: "(I sat on a bench in the park. The warm sunlight and spring breeze feel nice.)",
        background: "assets/images/background/park.png",
        next: "day4_no_date_resolve"
    },
    "day4_no_date_resolve": {
        name: "Me",
        text: "(It's okay. Spending time alone isn't so bad. I still have time to figure out my feelings.)",
        next: "day4_no_date_evening"
    },
    "day4_no_date_evening": {
        name: "Me",
        text: "(Before I knew it, the sun was setting. I headed home, painting a small resolution in my heart.)",
        fade: true,
        next: "day4_night_start"
    }
});
