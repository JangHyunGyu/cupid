/**
 * ============================================================================
 * CUPID - Day 4 Night Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day4_4_night.js
 * 언어: 영어 (English)
 * 일차: Day 4 (4일차 - 토요일)
 * 시간대: Night (밤)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 토요일 밤. 하루를 되돌아본다.
 * 고백 결과에 따라 분기: happy / regret / reflect.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 밤 회상 - 데이트 되돌아보기
 * 2. 분기: happy(수락) / regret(보류) / reflect(기본)
 * 3. 수면 - Day 5 전환
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
    // 밤 - 귀가
    // =========================================================================
    "day4_night_start": {
        name: "Me",
        text: "(I'm back in my room. Today was... an unforgettable day.)",
        background: "assets/images/background/room_my.png",
        bgm: "night.mp3",
        night: true,
        next: "day4_night_branch"
    },
    "day4_night_branch": {
        name: "System",
        text: "",
        branches: [
            { next: "day4_night_happy", condition: "day4_confession_accepted" },
            { next: "day4_night_regret", condition: "day4_waited" },
            { next: "day4_night_reflect" }
        ]
    },

    // =========================================================================
    // 행복 루트 (고백 수락)
    // =========================================================================
    "day4_night_happy": {
        name: "Me",
        text: "(I can't stop grinning. They accepted my confession... We're a couple now.)",
        night: true,
        next: "day4_night_happy_2"
    },
    "day4_night_happy_2": {
        name: "Me",
        text: "(A message arrives. \"Good night ♥ I can't wait to see you tomorrow.\")",
        night: true,
        next: "day4_night_happy_3"
    },
    "day4_night_happy_3": {
        name: "Me",
        text: "(My heart pounds just reading it. I replied \"Good night\" and held the phone to my chest.)",
        night: true,
        next: "day4_night_happy_4"
    },
    "day4_night_happy_4": {
        name: "Me",
        text: "(Tomorrow... We'll meet again as a couple. I can't wait for morning.)",
        night: true,
        fade: true,
        next: "day4_sleep"
    },

    // =========================================================================
    // 후회 루트 (보류)
    // =========================================================================
    "day4_night_regret": {
        name: "Me",
        text: "(I should have said it... The words were right there on the tip of my tongue.)",
        night: true,
        next: "day4_night_regret_2"
    },
    "day4_night_regret_2": {
        name: "Me",
        text: "(Their face keeps flashing before my eyes. The way they smiled... the warmth of being next to them.)",
        night: true,
        next: "day4_night_regret_3"
    },
    "day4_night_regret_3": {
        name: "Me",
        text: "(I know how I feel now. I won't hesitate tomorrow.)",
        night: true,
        next: "day4_night_regret_4"
    },
    "day4_night_regret_4": {
        name: "Me",
        text: "(Tomorrow... I'll definitely say it. For sure.)",
        night: true,
        fade: true,
        next: "day4_sleep"
    },

    // =========================================================================
    // 성찰 루트 (솔로 / 기본)
    // =========================================================================
    "day4_night_reflect": {
        name: "Me",
        text: "(A quiet night. The ceiling stares back at me. What kind of day was today?)",
        night: true,
        fade: true,
        next: "day4_sleep"
    },

    // =========================================================================
    // 수면
    // =========================================================================
    "day4_sleep": {
        name: "Me",
        text: "(My eyelids grow heavy... Tomorrow is the last day. Sunday...)",
        night: true,
        fade: true,
        next: "day4_final"
    },
    "day4_final": {
        name: "System",
        text: "",
        night: true,
        fade: true,
        next: "day5_start"
    }
});
