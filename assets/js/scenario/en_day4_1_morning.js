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
        text: "(...I open my eyes to Saturday morning. My heart is already racing.)",
        background: "assets/images/background/room_my.png",
        character: null,
        bgm: "morning.mp3",
        fade: true,
        next: "day4_morning_wake"
    },
    "day4_morning_wake": {
        name: "Me",
        text: "(Today is... finally the day. I barely slept last night.)",
        next: "day4_morning_mirror"
    },
    "day4_morning_mirror": {
        name: "Me",
        text: "(Standing in front of the mirror, I see my nervous face. I wish I could look a bit cooler...)",
        next: "day4_morning_outfit"
    },
    "day4_morning_outfit": {
        name: "Me",
        text: "(What should I wear? First impressions matter, so I need to choose carefully.)",
        choices: [
            {
                text: "Clean casual (white shirt + jeans)",
                next: "day4_outfit_casual",
                setFlag: "day4_outfit_casual"
            },
            {
                text: "Stylish look (jacket + slacks)",
                next: "day4_outfit_stylish",
                setFlag: "day4_outfit_stylish"
            }
        ]
    },
    "day4_outfit_casual": {
        name: "Me",
        text: "(Comfort is best. Dressing natural is my style.)",
        next: "day4_morning_phone"
    },
    "day4_outfit_stylish": {
        name: "Me",
        text: "(Today is special, after all. This should be good enough.)",
        next: "day4_morning_phone"
    },
    "day4_morning_phone": {
        name: "Me",
        text: "(I check my phone. There are messages.)",
        next: "day4_morning_message_branch"
    },

    // =========================================================================
    // 메시지 분기 (2단계)
    // =========================================================================
    "day4_morning_message_branch": {
        name: "System",
        text: "",
        branches: [
            { next: "day4_morning_date_route", condition: "day3_seoyeon_date_confirmed" },
            { next: "day4_morning_date_route", condition: "day3_yuna_date_confirmed" },
            { next: "day4_morning_date_route", condition: "day3_dain_date_confirmed" },
            { next: "day4_morning_date_route", condition: "day3_nurse_date_confirmed" },
            { next: "day4_morning_date_route", condition: "day3_teacher_date_confirmed" },
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

    // --- Seoyeon ---
    "day4_msg_seoyeon": {
        name: "Seoyeon",
        text: "\"You didn't forget our plans today, right? 😊 Meet me at the park fountain at 10! I'm so excited~\"",
        character: "assets/images/characters/seyoun_laugh.png",
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_seoyeon"
    },
    "day4_morning_reply_seoyeon": {
        name: "Me",
        text: "(A message from Seoyeon. The smiley emoji is cute.)",
        next: "day4_morning_depart"
    },

    // --- Yuna ---
    "day4_msg_yuna": {
        name: "Yuna",
        text: "\"...10 o'clock. Cafe in front of the station. Don't be late.\"",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_yuna"
    },
    "day4_morning_reply_yuna": {
        name: "Me",
        text: "(Short and simple, just like Yuna. But that's part of her charm.)",
        next: "day4_morning_depart"
    },

    // --- Dain ---
    "day4_msg_dain": {
        name: "Dain",
        text: "\"Hey!! Let's meet after practice today!! In front of the gym at 11!! Don't be late!!!! 🏐\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_dain"
    },
    "day4_morning_reply_dain": {
        name: "Me",
        text: "(So many exclamation marks... Dain's energy comes through even in texts.)",
        next: "day4_morning_depart"
    },

    // --- School Nurse ---
    "day4_msg_nurse": {
        name: "School Nurse",
        text: "\"If you're free today... how about the art museum downtown? There's an exhibit I want to see. Let's meet at 11 in front of the museum.\"",
        character: "assets/images/characters/nurse_normal.png",
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_nurse"
    },
    "day4_morning_reply_nurse": {
        name: "Me",
        text: "(An art museum with the school nurse... My heart races for some reason.)",
        next: "day4_morning_depart"
    },

    // --- Homeroom Teacher ---
    "day4_msg_teacher": {
        name: "Homeroom Teacher",
        text: "\"How about meeting at the cafe near school around lunch? I have something to talk about. Let's meet at noon.\"",
        character: "assets/images/characters/teacher_normal.png",
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_teacher"
    },
    "day4_morning_reply_teacher": {
        name: "Me",
        text: "(Meeting the homeroom teacher outside of school... I'm nervous.)",
        next: "day4_morning_depart"
    },

    // =========================================================================
    // Depart
    // =========================================================================
    "day4_morning_depart": {
        name: "Me",
        text: "(Alright, all ready. Let's go!)",
        fade: true,
        next: "day4_arrive"
    },

    // =========================================================================
    // 솔로 루트 - 데이트 없음
    // =========================================================================
    "day4_no_date_start": {
        name: "Me",
        text: "(...I checked my phone, but there are no messages.)",
        next: "day4_no_date_2"
    },
    "day4_no_date_2": {
        name: "Me",
        text: "(It's the weekend and I have no plans. It's been a week since I transferred... what have I been doing?)",
        next: "day4_no_date_3"
    },
    "day4_no_date_3": {
        name: "Me",
        text: "(Well, the weather's nice, so maybe I'll at least take a walk around the neighborhood.)",
        choices: [
            {
                text: "Buy snacks and go to the park",
                next: "day4_no_date_park"
            },
            {
                text: "Laze around at home",
                next: "day4_no_date_home"
            }
        ]
    },
    "day4_no_date_park": {
        name: "Me",
        text: "(I sat on a park bench eating snacks alone. There are so many couples around.)",
        background: "assets/images/background/park.png",
        next: "day4_no_date_lonely"
    },
    "day4_no_date_home": {
        name: "Me",
        text: "(I just lay in bed staring at the ceiling. Is this really okay?)",
        next: "day4_no_date_lonely"
    },
    "day4_no_date_lonely": {
        name: "Me",
        text: "(...Spending Saturday alone like this. I should change something when I go to school on Monday.)",
        next: "day4_no_date_evening"
    },
    "day4_no_date_evening": {
        name: "Me",
        text: "(Before I knew it, the sun had set. An uneventful Saturday is coming to an end.)",
        fade: true,
        next: "day4_night_start"
    }
});
