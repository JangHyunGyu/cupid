/**
 * ============================================================================
 * CUPID - Day 5 Morning Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day5_1_morning.js
 * 언어: 영어 (English)
 * 일차: Day 5 (5일차 - 일요일)
 * 시간대: Morning (아침)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 일요일 아침. 이야기의 마지막 날이 밝았다.
 * 고백한 경우 연인으로서, 아직인 경우 마지막 기회로 하루를 시작한다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 일요일 기상 - 마지막 날의 아침
 * 2. 메시지 확인 - 히로인과의 약속
 * 3. 특별한 장소로 출발
 * 
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[5]) {
    SCENARIO[5] = {};
}

Object.assign(SCENARIO[5], {

    // =========================================================================
    // 일요일 아침
    // =========================================================================
    "day5_start": {
        name: "Me",
        text: "(Sunday morning. Sunlight pours through the window. Today feels like... it's going to be a special day.)",
        background: "assets/images/background/room_my.png",
        character: null,
        bgm: "morning.mp3",
        changeDay: 5,
        fade: true,
        next: "day5_morning_wake"
    },
    "day5_morning_wake": {
        name: "Me",
        text: "(Yesterday still feels so vivid. What kind of day will today be?)",
        next: "day5_morning_msg_branch"
    },

    // =========================================================================
    // 아침 메시지
    // =========================================================================
    "day5_morning_msg_branch": {
        name: "System",
        text: "",
        branches: [
            { next: "day5_morning_couple_msg", condition: "day4_confession_accepted" },
            { next: "day5_morning_pending_msg", condition: "day4_waited" },
            { next: "day5_morning_default_msg" }
        ]
    },

    // --- 연인 루트 ---
    "day5_morning_couple_msg": {
        name: "Me",
        text: "(I check my phone and see a message from my partner. \"Good morning ☀️ Where should we meet today?\")",
        next: "day5_morning_couple_reply"
    },
    "day5_morning_couple_reply": {
        name: "Me",
        text: "(I replied, \"Let's meet in front of school. There's a place I want to show you.\")",
        next: "day5_morning_depart"
    },

    // --- 고백 보류 루트 ---
    "day5_morning_pending_msg": {
        name: "Me",
        text: "(There's a message on my phone. \"Are you free today? Let's meet in front of school!\")",
        next: "day5_morning_pending_reply"
    },
    "day5_morning_pending_reply": {
        name: "Me",
        text: "(Today is my last chance. I have to tell them how I feel. \"Yeah, let's go!\")",
        next: "day5_morning_depart"
    },

    // --- 기본 루트 ---
    "day5_morning_default_msg": {
        name: "Me",
        text: "(A quiet Sunday morning. I feel like taking a walk near school.)",
        next: "day5_morning_depart"
    },

    // =========================================================================
    // 출발
    // =========================================================================
    "day5_morning_depart": {
        name: "Me",
        text: "(I finished getting ready and stepped outside. The spring breeze feels wonderful.)",
        fade: true,
        next: "day5_school_arrive"
    }
});
