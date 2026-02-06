/**
 * ============================================================================
 * CUPID - Day 5 Lunch Scenario (Korean Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: ko_day5_2_lunch.js
 * 언어: 한국어 (Korean)
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
        name: "나",
        text: "(학교 정문에 도착했다. 이 정문… 전학 온 첫날, 처음 이 학교를 본 곳이다.)",
        background: "assets/images/background/school.png",
        bgm: "date.mp3",
        next: "day5_school_memory"
    },
    "day5_school_memory": {
        name: "나",
        text: "(불과 며칠 전인데… 그때의 나는 긴장하고 불안했었지. 지금은 이렇게 달라졌다.)",
        next: "day5_school_meet"
    },
    "day5_school_meet": {
        name: "시스템",
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
        name: "서연",
        text: "\"여기서 처음 만났었지? 그때 길 잃은 강아지 같았어, 후후.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day5_walk_together"
    },

    // --- 유나 ---
    "day5_meet_yuna": {
        name: "유나",
        text: "\"…여기. 처음 봤을 때 기억나? …나는 기억해.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day5_walk_together"
    },

    // --- 다인 ---
    "day5_meet_dain": {
        name: "다인",
        text: "\"야! 학교 정문에 오니까 첫날 생각난다!! 그때 내가 배구공 날린 거 기억나?!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day5_walk_together"
    },

    // --- 보건선생님 ---
    "day5_meet_nurse": {
        name: "보건선생님",
        text: "\"주말에 학교에 오니까 기분이 묘하네. 이 학교에서 너를 만난 건… 운명이었을까.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day5_walk_together"
    },

    // --- 담임선생님 ---
    "day5_meet_teacher": {
        name: "담임선생님",
        text: "\"하, 주말에 학교 오니까 이상하네. 근데… 너랑 같이니까 나쁘지 않아.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day5_walk_together"
    },

    // =========================================================================
    // 학교 산책
    // =========================================================================
    "day5_walk_together": {
        name: "나",
        text: "(함께 학교를 걸었다. 교실, 복도, 급식실… 며칠 사이에 만들어진 추억들이 곳곳에 있었다.)",
        background: "assets/images/background/load_school.png",
        next: "day5_walk_memory"
    },
    "day5_walk_memory": {
        name: "나",
        text: "(\"여기서 이런 일이 있었지.\" 서로 웃으며 추억을 꺼낸다.)",
        next: "day5_walk_rooftop"
    },
    "day5_walk_rooftop": {
        name: "나",
        text: "(\"저기… 옥상 가볼래?\" 내가 물었다.)",
        next: "day5_rooftop"
    },

    // =========================================================================
    // 옥상
    // =========================================================================
    "day5_rooftop": {
        name: "나",
        text: "(옥상 문을 열자 탁 트인 하늘이 펼쳐졌다. 바람이 기분 좋게 불어온다.)",
        background: "assets/images/background/top_school.png",
        next: "day5_rooftop_view"
    },
    "day5_rooftop_view": {
        name: "나",
        text: "(여기서 보는 풍경이 이렇게 아름다운 거였나. 아니면… 옆에 있는 사람 때문일까.)",
        next: "day5_rooftop_talk"
    },
    "day5_rooftop_talk": {
        name: "나",
        text: "(나란히 난간에 기대어 서서 먼 곳을 바라봤다.)",
        fade: true,
        next: "day5_afternoon_start"
    }
});
