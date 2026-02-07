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
        next: "day4_afternoon_walk"
    },
    "day4_afternoon_walk": {
        name: "Me",
        text: "(We strolled through a quiet park. Cherry blossoms were fluttering in the wind.)",
        background: "assets/images/background/park.png",
        next: "day4_afternoon_talk"
    },
    "day4_afternoon_talk": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_walk_seoyeon", character: "Seoyeon" },
            { next: "day4_walk_yuna", character: "Yuna" },
            { next: "day4_walk_dain", character: "Dain" },
            { next: "day4_walk_nurse", character: "Nurse" },
            { next: "day4_walk_teacher", character: "Teacher" }
        ]
    },

    // --- 오후 대화 ---
    "day4_walk_seoyeon": {
        name: "Seoyeon",
        text: "\"Look, the cherry blossoms! ...It's like a scene from a movie, isn't it?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day4_afternoon_highlight"
    },
    "day4_walk_yuna": {
        name: "Yuna",
        text: "\"...The petals are falling. It's beautiful. ...Like a book I once read.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day4_afternoon_highlight"
    },
    "day4_walk_dain": {
        name: "Dain",
        text: "\"Wow!! Cherry blossom shower!! Catch them, catch them!!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day4_afternoon_highlight"
    },
    "day4_walk_nurse": {
        name: "School Nurse",
        text: "\"Cherry blossoms... They bloom so beautifully, but fall so quickly. Just like youth.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day4_afternoon_highlight"
    },
    "day4_walk_teacher": {
        name: "Homeroom Teacher",
        text: "\"...Sigh, I feel like a character in a drama. Walking through cherry blossoms with a student...\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day4_afternoon_highlight"
    },

    // =========================================================================
    // 오후 하이라이트
    // =========================================================================
    "day4_afternoon_highlight": {
        name: "Me",
        text: "(A cherry blossom petal landed on their hair. I gently brushed it off.)",
        next: "day4_afternoon_highlight_2"
    },
    "day4_afternoon_highlight_2": {
        name: "Me",
        text: "(Our eyes met. In that moment— time seemed to stop.)",
        next: "day4_sunset"
    },

    // =========================================================================
    // 석양
    // =========================================================================
    "day4_sunset": {
        name: "Me",
        text: "(Before we knew it, the sun started to set. The sky was painted in shades of orange.)",
        sunset: true,
        next: "day4_sunset_bench"
    },
    "day4_sunset_bench": {
        name: "Me",
        text: "(We sat side by side on a park bench, watching the sunset.)",
        next: "day4_sunset_feeling"
    },
    "day4_sunset_feeling": {
        name: "Me",
        text: "(My heart is pounding. Today was so much fun. And this person next to me...)",
        next: "day4_confession_choice"
    },

    // =========================================================================
    // 고백 선택
    // =========================================================================
    "day4_confession_choice": {
        name: "Me",
        text: "(The words I've been holding back keep rising to my lips. Should I say it now...?)",
        choices: [
            {
                text: "\"I have something to tell you...\" (Confess)",
                next: "day4_confess_start",
                setFlag: "day4_confessed"
            },
            {
                text: "\"...Not yet.\" (Wait)",
                next: "day4_wait_start",
                setFlag: "day4_waited"
            }
        ]
    },

    // =========================================================================
    // 고백 루트
    // =========================================================================
    "day4_confess_start": {
        name: "Me",
        text: "\"I've been thinking about this since yesterday... No, maybe since we first met.\"",
        sunset: true,
        next: "day4_confess_words"
    },
    "day4_confess_words": {
        name: "Me",
        text: "\"I like you. Not as a friend, not as a classmate... I really like you.\"",
        sunset: true,
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
        text: "(My heart is about to explode. They accepted... They really accepted my feelings.)",
        sunset: true,
        next: "day4_after_confess_2"
    },
    "day4_after_confess_2": {
        name: "Me",
        text: "(Under the sunset, we held hands. Their hand was warm and trembling slightly.)",
        sunset: true,
        fade: true,
        next: "day4_night_start"
    },

    // =========================================================================
    // 보류 루트
    // =========================================================================
    "day4_wait_start": {
        name: "Me",
        text: "(Not yet... I need a little more time to sort out my feelings.)",
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
