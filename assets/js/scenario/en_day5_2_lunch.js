/**
 * ============================================================================
 * CUPID - Day 5 Lunch Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day5_2_lunch.js
 * 언어: 영어 (English)
 * 일차: Day 5 (5일차 - 일요일)
 * 시간대: Lunch (점심 - 학교에서의 재회)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 주말이지만 학교 정문 앞에서 만나 특별한 장소로 향한다.
 * 처음 만났던 장소를 다시 방문하며 추억을 되짚는다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 학교 정문 재회 - 처음 만났던 그 장소
 * 2. 학교 산책 - 추억의 장소들
 * 3. 옥상으로 - 특별한 장소
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
    // 학교 정문
    // =========================================================================
    "day5_school_arrive": {
        name: "Me",
        text: "(I arrived at the school gate. This gate... This is where I first saw this school on my first day as a transfer student.)",
        background: "assets/images/background/school.png",
        bgm: "date.mp3",
        next: "day5_school_memory"
    },
    "day5_school_memory": {
        name: "Me",
        text: "(It was only a few days ago... Back then I was nervous and anxious. Now everything has changed so much.)",
        next: "day5_school_meet"
    },
    "day5_school_meet": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_meet_seoyeon", character: "Seoyeon" },
            { next: "day5_meet_yuna", character: "Yuna" },
            { next: "day5_meet_dain", character: "Dain" },
            { next: "day5_meet_nurse", character: "Nurse" },
            { next: "day5_meet_teacher", character: "Teacher" }
        ]
    },

    // --- 서연 ---
    "day5_meet_seoyeon": {
        name: "Seoyeon",
        text: "\"This is where we first met, right? You looked like a lost puppy back then, hehe.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day5_walk_together"
    },

    // --- 유나 ---
    "day5_meet_yuna": {
        name: "Yuna",
        text: "\"...Here. Do you remember when we first met? ...I remember.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day5_walk_together"
    },

    // --- 다인 ---
    "day5_meet_dain": {
        name: "Dain",
        text: "\"Hey! Being at the school gate reminds me of the first day!! Remember when I hit you with a volleyball?!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day5_walk_together"
    },

    // --- 보건선생님 ---
    "day5_meet_nurse": {
        name: "School Nurse",
        text: "\"Being at school on the weekend feels strange. Meeting you at this school... was it fate?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day5_walk_together"
    },

    // --- 담임선생님 ---
    "day5_meet_teacher": {
        name: "Homeroom Teacher",
        text: "\"Hah, coming to school on the weekend is weird. But... since I'm with you, it's not so bad.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day5_walk_together"
    },

    // =========================================================================
    // 학교 산책
    // =========================================================================
    "day5_walk_together": {
        name: "Me",
        text: "(We walked through the school together. The classroom, hallways, cafeteria... Memories we made in just a few days were everywhere.)",
        background: "assets/images/background/load_school.png",
        next: "day5_walk_memory"
    },
    "day5_walk_memory": {
        name: "Me",
        text: "(\"Remember what happened here?\" We laughed together, pulling out memories.)",
        next: "day5_walk_rooftop"
    },
    "day5_walk_rooftop": {
        name: "Me",
        text: "(\"Hey... want to go to the rooftop?\" I asked.)",
        next: "day5_rooftop"
    },

    // =========================================================================
    // 옥상
    // =========================================================================
    "day5_rooftop": {
        name: "Me",
        text: "(When we opened the rooftop door, a wide open sky greeted us. The breeze felt wonderful.)",
        background: "assets/images/background/top_school.png",
        next: "day5_rooftop_view"
    },
    "day5_rooftop_view": {
        name: "Me",
        text: "(Was the view from here always this beautiful? Or is it because of the person next to me?)",
        next: "day5_rooftop_talk"
    },
    "day5_rooftop_talk": {
        name: "Me",
        text: "(We leaned on the railing side by side, gazing into the distance.)",
        fade: true,
        next: "day5_afternoon_start"
    }
});
