/**
 * ============================================================================
 * CUPID - Day 4 Afterschool Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day4_3_afterschool.js
 * 언어: 영어 (English)
 * 일차: Day 4 (4일차 - 토요일)
 * 시간대: Afterschool (오후 - 고백)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 데이트 후 오후 산책. 석양 고백 장면.
 * 플레이어가 고백할지 보류할지 선택한다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 오후 산책 - 공원 거닐기
 * 2. 석양 - 로맨틱한 분위기
 * 3. 고백 선택 - 고백 또는 보류
 * 4. 히로인 반응 (고백 시)
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
    // 오후 - 함께 걷기
    // =========================================================================
    "day4_afternoon_start": {
        name: "Me",
        text: "(After lunch, we took a leisurely walk. The spring breeze was refreshing.)",
        background: "assets/images/background/street.png",
        bgm: "sunset2.mp3",
        sunset: true,
        next: "day4_afternoon_walk"
    },
    "day4_afternoon_walk": {
        name: "Me",
        text: "(We strolled through a quiet park. Cherry blossoms were fluttering in the wind.)",
        next: "day4_afternoon_special"
    },
    "day4_afternoon_special": {
        name: "Me",
        text: "(\"Hey, want to go to the riverside park?\" They suggested first.)",
        background: "assets/images/background/park.png",
        sunset: true,
        next: "day4_afternoon_park"
    },
    "day4_afternoon_park": {
        name: "Me",
        text: "(When we arrived at the riverside park, the sunset was sparkling on the water. It was like a scene from a movie.)",
        next: "day4_afternoon_sunset"
    },

    // =========================================================================
    // 석양 씬 - 감정 최고조
    // =========================================================================
    "day4_afternoon_sunset": {
        name: "Me",
        text: "(The sunset light was illuminating their face. Strangely, I couldn't find the words.)",
        bgm: "confession.mp3",
        sunset: true,
        next: "day4_afternoon_silence"
    },
    "day4_afternoon_silence": {
        name: "Me",
        text: "(......)",
        next: "day4_afternoon_feeling"
    },
    "day4_afternoon_feeling": {
        name: "Me",
        text: "(I think I know what this feeling is now. From the first day I transferred here until now... I've been feeling it all along.)",
        next: "day4_confession_choice"
    },

    // =========================================================================
    // 고백 선택
    // =========================================================================
    "day4_confession_choice": {
        name: "Me",
        text: "(Right now, in this moment... should I tell them how I feel?)",
        choices: [
            {
                text: "\"I have something to tell you...\" (Confess)",
                next: "day4_confess",
                setFlag: "day4_confessed"
            },
            {
                text: "\"...This scenery is really beautiful.\" (Not yet)",
                next: "day4_wait",
                setFlag: "day4_waited"
            }
        ]
    },

    // =========================================================================
    // 고백 루트
    // =========================================================================
    "day4_confess": {
        name: "Me",
        text: "\"Actually... ever since I transferred here, all I could think about was you.\"",
        sunset: true,
        next: "day4_confess_2"
    },
    "day4_confess_2": {
        name: "Me",
        text: "\"At first I thought you were just a good person... but now I'm sure.\"",
        next: "day4_confess_3"
    },
    "day4_confess_3": {
        name: "Me",
        text: "\"I... like you.\"",
        next: "day4_confess_response"
    },
    "day4_confess_response": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_accept_seoyeon", character: "Seoyeon" },
            { next: "day4_accept_yuna", character: "Yuna" },
            { next: "day4_accept_dain", character: "Dain" },
            { next: "day4_accept_nurse", character: "Nurse" },
            { next: "day4_accept_teacher", character: "Teacher" }
        ]
    },

    // --- 수락 반응 ---
    "day4_accept_seoyeon": {
        name: "Seoyeon",
        text: "\"...I've been waiting for those words. Me too... I like you. A lot.\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Seoyeon"],
        next: "day4_after_confess"
    },
    "day4_accept_yuna": {
        name: "Yuna",
        text: "\"......I thought my heart would burst waiting. ...Me too. I like you.\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        stats: { Yuna: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Yuna"],
        next: "day4_after_confess"
    },
    "day4_accept_dain": {
        name: "Dain",
        text: "\"...!! R-really?! I... I like you too!! So much!!\"",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        stats: { Dain: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Dain"],
        next: "day4_after_confess"
    },
    "day4_accept_nurse": {
        name: "School Nurse",
        text: "\"...I know this isn't easy. Teacher and student... But my feelings are real. I like you too.\"",
        character: "assets/images/characters/nurse_shy.png",
        sunset: true,
        stats: { Nurse: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Nurse"],
        next: "day4_after_confess"
    },
    "day4_accept_teacher": {
        name: "Homeroom Teacher",
        text: "\"...Sigh. I know this is wrong as a teacher. But... I can't lie about how I feel. ...Me too.\"",
        character: "assets/images/characters/teacher_shy.png",
        sunset: true,
        stats: { Teacher: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Teacher"],
        next: "day4_after_confess"
    },

    // --- 고백 후 ---
    "day4_after_confess": {
        name: "Me",
        text: "(Under the sunset, our shadows merge into one. It was the happiest moment in the world.)",
        sunset: true,
        fade: true,
        next: "day4_night_start"
    },

    // =========================================================================
    // 보류 루트
    // =========================================================================
    "day4_wait": {
        name: "Me",
        text: "\"...This scenery is really beautiful.\"",
        sunset: true,
        next: "day4_wait_talk"
    },
    "day4_wait_talk": {
        name: "Me",
        text: "\"...Today was really fun. Thank you.\"",
        next: "day4_wait_response"
    },
    "day4_wait_response": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_wait_seoyeon", character: "Seoyeon" },
            { next: "day4_wait_yuna", character: "Yuna" },
            { next: "day4_wait_dain", character: "Dain" },
            { next: "day4_wait_nurse", character: "Nurse" },
            { next: "day4_wait_teacher", character: "Teacher" }
        ]
    },
    "day4_wait_seoyeon": {
        name: "Seoyeon",
        text: "\"Me too! Let's hang out again... right?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "day4_wait_end"
    },
    "day4_wait_yuna": {
        name: "Yuna",
        text: "\"...Yeah. It wasn't bad. ...Let's do this again sometime.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day4_wait_end"
    },
    "day4_wait_dain": {
        name: "Dain",
        text: "\"Of course it was fun!! Let's go again next time!!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day4_wait_end"
    },
    "day4_wait_nurse": {
        name: "School Nurse",
        text: "\"I had a lovely time. ...Shall we meet again sometime?\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day4_wait_end"
    },
    "day4_wait_teacher": {
        name: "Homeroom Teacher",
        text: "\"...Well, it wasn't terrible. If you ask, maybe I'll come out again.\"",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        next: "day4_wait_end"
    },
    "day4_wait_end": {
        name: "Me",
        text: "(We said goodbye and parted ways. In my heart... the words I couldn't say lingered.)",
        sunset: true,
        fade: true,
        next: "day4_night_start"
    }
});
