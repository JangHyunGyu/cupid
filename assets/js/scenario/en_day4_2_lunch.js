/**
 * ============================================================================
 * CUPID - Day 4 Lunch Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day4_2_lunch.js
 * 언어: 영어 (English)
 * 일차: Day 4 (4일차 - 토요일)
 * 시간대: Lunch (점심 - 데이트)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 만남 장소에 도착하여 히로인과 데이트를 진행한다.
 * 히로인마다 데이트 장소와 분위기가 다르다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 도착 - 히로인과 만남
 * 2. 데이트 산책 - 함께하는 시간
 * 3. 점심 식사 - 대화 심화
 * 4. 다음 장소로 이동
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
    // 만남 장소 도착
    // =========================================================================
    "day4_arrive": {
        name: "Me",
        text: "(I arrived near the school. Where should I look for them?)",
        background: "assets/images/background/street.png",
        bgm: "date.mp3",
        next: "day4_meet_heroine"
    },
    "day4_meet_heroine": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_meet_seoyeon", character: "Seoyeon" },
            { next: "day4_meet_yuna", character: "Yuna" },
            { next: "day4_meet_dain", character: "Dain" },
            { next: "day4_meet_nurse", character: "Nurse" },
            { next: "day4_meet_teacher", character: "Teacher" }
        ]
    },

    // --- 서연 ---
    "day4_meet_seoyeon": {
        name: "Seoyeon",
        text: "\"Over here~! I found a nice café! Let's go together!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day4_seoyeon_react"
    },
    "day4_seoyeon_react": {
        name: "Me",
        text: "(Seoyeon is wearing casual clothes instead of her uniform. She looks different... and somehow more dazzling.)",
        next: "day4_date_walk"
    },

    // --- 유나 ---
    "day4_meet_yuna": {
        name: "Yuna",
        text: "\"...You came. Let's go. I know a quiet place.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day4_yuna_react"
    },
    "day4_yuna_react": {
        name: "Me",
        text: "(Yuna leads me to a small, tucked-away café. It's so like her.)",
        background: "assets/images/background/cafe.png",
        next: "day4_date_walk"
    },

    // --- 다인 ---
    "day4_meet_dain": {
        name: "Dain",
        text: "\"Hey!! I've been waiting!! Let's go to the gym! There's a cool climbing wall!!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day4_dain_react"
    },
    "day4_dain_react": {
        name: "Me",
        text: "(A date at the gym? Only Dain would suggest this. But it's exciting.)",
        background: "assets/images/background/gym.png",
        next: "day4_date_walk"
    },

    // --- 보건선생님 ---
    "day4_meet_nurse": {
        name: "School Nurse",
        text: "\"There's an exhibition I want to see today. Want to come with me?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day4_nurse_react"
    },
    "day4_nurse_react": {
        name: "Me",
        text: "(The school nurse is smiling and waving at the museum entrance. A museum date... it feels sophisticated and like her.)",
        background: "assets/images/background/museum.png",
        next: "day4_date_walk"
    },

    // --- 담임선생님 ---
    "day4_meet_teacher": {
        name: "Homeroom Teacher",
        text: "\"...Don't get the wrong idea. I just happened to know a good restaurant.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day4_teacher_react"
    },
    "day4_teacher_react": {
        name: "Me",
        text: "(The teacher is dressed casually and looking away awkwardly. I can see a hidden café behind her.)",
        background: "assets/images/background/cafe.png",
        next: "day4_date_walk"
    },

    // =========================================================================
    // 데이트 - 함께 걷기
    // =========================================================================
    "day4_date_walk": {
        name: "Me",
        text: "(We walked together. The conversation flowed naturally, and we laughed without even trying.)",
        next: "day4_date_talk_1"
    },
    "day4_date_talk_1": {
        name: "Me",
        text: "(It's been barely a few days since we met... yet it feels like we've known each other much longer.)",
        next: "day4_date_talk_2"
    },
    "day4_date_talk_2": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_talk_seoyeon", character: "Seoyeon" },
            { next: "day4_talk_yuna", character: "Yuna" },
            { next: "day4_talk_dain", character: "Dain" },
            { next: "day4_talk_nurse", character: "Nurse" },
            { next: "day4_talk_teacher", character: "Teacher" }
        ]
    },

    // --- 산책 대화 ---
    "day4_talk_seoyeon": {
        name: "Seoyeon",
        text: "\"You know, as student council president, I'm always busy worrying about others... But with you, I can just be me.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day4_date_lunch"
    },
    "day4_talk_yuna": {
        name: "Yuna",
        text: "\"...I usually don't like going out. But with you... it's okay. It's strange.\"",
        character: "assets/images/characters/yuna_shy.png",
        next: "day4_date_lunch"
    },
    "day4_talk_dain": {
        name: "Dain",
        text: "\"With you, I don't have to keep pretending to be cheerful! I can just... be myself!\"",
        character: "assets/images/characters/dain_shy.png",
        next: "day4_date_lunch"
    },
    "day4_talk_nurse": {
        name: "School Nurse",
        text: "\"Being outside school with you like this... it feels like our relationship isn't just teacher and student anymore.\"",
        character: "assets/images/characters/nurse_shy.png",
        next: "day4_date_lunch"
    },
    "day4_talk_teacher": {
        name: "Homeroom Teacher",
        text: "\"...Don't look at me like that. I'm just saying... it's not bad, hanging out outside of school.\"",
        character: "assets/images/characters/teacher_shy.png",
        next: "day4_date_lunch"
    },

    // =========================================================================
    // 데이트 - 점심 식사
    // =========================================================================
    "day4_date_lunch": {
        name: "Me",
        text: "(We stopped at a small restaurant for lunch. Sitting across from each other, our eyes met.)",
        next: "day4_date_lunch_talk"
    },
    "day4_date_lunch_talk": {
        name: "Me",
        text: "\"I'm really glad I transferred here. If I hadn't... I never would have met you.\"",
        next: "day4_date_response"
    },
    "day4_date_response": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_lunch_seoyeon", character: "Seoyeon" },
            { next: "day4_lunch_yuna", character: "Yuna" },
            { next: "day4_lunch_dain", character: "Dain" },
            { next: "day4_lunch_nurse", character: "Nurse" },
            { next: "day4_lunch_teacher", character: "Teacher" }
        ]
    },
    "day4_lunch_seoyeon": {
        name: "Seoyeon",
        text: "\"...Me too. When you first came, I just thought 'oh, a new transfer student.' But now... it's different.\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 10 } },
        next: "day4_afternoon_start"
    },
    "day4_lunch_yuna": {
        name: "Yuna",
        text: "\"...Same here. Before you came, my days were all the same. You changed that.\"",
        character: "assets/images/characters/yuna_shy.png",
        stats: { Yuna: { affinity: 10 } },
        next: "day4_afternoon_start"
    },
    "day4_lunch_dain": {
        name: "Dain",
        text: "\"I'm glad too!! If you hadn't come, I'd just be stuck playing volleyball by myself!!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 10 } },
        next: "day4_afternoon_start"
    },
    "day4_lunch_nurse": {
        name: "School Nurse",
        text: "\"...The infirmary used to be so quiet. But since you started coming by... I find myself looking forward to each day.\"",
        character: "assets/images/characters/nurse_shy.png",
        stats: { Nurse: { affinity: 10 } },
        next: "day4_afternoon_start"
    },
    "day4_lunch_teacher": {
        name: "Homeroom Teacher",
        text: "\"...Sigh. I never thought I'd hear something like that from a student. ...Thanks. Really.\"",
        character: "assets/images/characters/teacher_shy.png",
        stats: { Teacher: { affinity: 10 } },
        next: "day4_afternoon_start"
    }
});
