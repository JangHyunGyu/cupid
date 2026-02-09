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
 * 시간대: Lunch (점심 - 데이트 시작)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 약속 장소에 도착해 히로인과 만난다.
 * 데이트가 시작되고 함께 시간을 보내며 특별한 순간을 만든다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 약속 장소 도착 - 히로인과의 첫 만남
 * 2. 함께 걸으며 대화 - 서로를 더 알아가는 시간
 * 3. 점심 식사 - 분위기 있는 대화
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 최고 호감도 히로인: 대화 선택에 따라 +5 ~ +15
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
    // 약속 장소 도착
    // =========================================================================
    "day4_arrive": {
        name: "Me",
        text: "(I arrived at the meeting place. I'm still a bit early.)",
        background: "assets/images/background/street.png",
        character: null,
        bgm: "date.mp3",
        next: "day4_arrive_wait"
    },
    "day4_arrive_wait": {
        name: "Me",
        text: "(My heart is racing. Have I ever been this nervous before...?)",
        next: "day4_heroine_arrive"
    },

    // =========================================================================
    // 히로인 등장 (최고 호감도 기준)
    // =========================================================================
    "day4_heroine_arrive": {
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

    // --- 서연 루트 ---
    "day4_meet_seoyeon": {
        name: "Seoyeon",
        text: "\"Oh, you're already here? I came a bit early too... Hehe.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day4_seoyeon_react"
    },
    "day4_seoyeon_react": {
        name: "Me",
        text: "(Seoyeon walks over with a smile. Meeting her outside of school... she looks different from usual.)",
        next: "day4_seoyeon_compliment"
    },
    "day4_seoyeon_compliment": {
        name: "Me",
        text: "(What should I say?)",
        choices: [
            {
                text: "\"You look really pretty today.\"",
                next: "day4_seoyeon_blush",
                stats: { Seoyeon: { affinity: 10 } }
            },
            {
                text: "\"You seem really cheerful today!\"",
                next: "day4_seoyeon_happy",
                stats: { Seoyeon: { affinity: 5 } }
            }
        ]
    },
    "day4_seoyeon_blush": {
        name: "Seoyeon",
        text: "\"W-what... You can't just say that out of nowhere... Thanks.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day4_date_walk"
    },
    "day4_seoyeon_happy": {
        name: "Seoyeon",
        text: "\"Really? I put in a lot of effort today! I'm glad you noticed~\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day4_date_walk"
    },

    // --- 유나 루트 ---
    "day4_meet_yuna": {
        name: "Yuna",
        text: "\"...You're here.\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/yuna_normal.png",
        next: "day4_yuna_react"
    },
    "day4_yuna_react": {
        name: "Me",
        text: "(Yuna was standing in front of the café. She looks different outside of school.)",
        next: "day4_yuna_compliment"
    },
    "day4_yuna_compliment": {
        name: "Me",
        text: "(What should I say?)",
        choices: [
            {
                text: "\"You have a different vibe today. You look pretty.\"",
                next: "day4_yuna_blush",
                stats: { Yuna: { affinity: 10 } }
            },
            {
                text: "\"Were you waiting? Sorry.\"",
                next: "day4_yuna_cool",
                stats: { Yuna: { affinity: 5 } }
            }
        ]
    },
    "day4_yuna_blush": {
        name: "Yuna",
        text: "\"...Nobody's ever said that to me before. ...Thanks.\"",
        character: "assets/images/characters/yuna_shy.png",
        next: "day4_date_walk"
    },
    "day4_yuna_cool": {
        name: "Yuna",
        text: "\"...I just got here too. Let's go inside.\"",
        next: "day4_date_walk"
    },

    // --- 다인 루트 ---
    "day4_meet_dain": {
        name: "Dain",
        text: "\"Hey!! Over here!!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_laugh.png",
        next: "day4_dain_react"
    },
    "day4_dain_react": {
        name: "Me",
        text: "(Dain waves and comes running over. Meeting her outside school gives a totally different vibe.)",
        next: "day4_dain_compliment"
    },
    "day4_dain_compliment": {
        name: "Me",
        text: "(What should I say?)",
        choices: [
            {
                text: "\"You look super cute today!\"",
                next: "day4_dain_blush",
                stats: { Dain: { affinity: 10 } }
            },
            {
                text: "\"Did practice go well?\"",
                next: "day4_dain_energy",
                stats: { Dain: { affinity: 5 } }
            }
        ]
    },
    "day4_dain_blush": {
        name: "Dain",
        text: "\"H-hehe... Really?! I spent forever picking this outfit!! I'm so glad~!!\"",
        character: "assets/images/characters/dain_shy.png",
        next: "day4_date_walk"
    },
    "day4_dain_energy": {
        name: "Dain",
        text: "\"It was perfect!! I'm in top condition today!! Come on, let's go!!\"",
        next: "day4_date_walk"
    },

    // --- 보건선생님 루트 ---
    "day4_meet_nurse": {
        name: "School Nurse",
        text: "\"Oh my, you're already here? Have you been waiting long?\"",
        background: "assets/images/background/museum.png",
        character: "assets/images/characters/nurse_normal.png",
        next: "day4_nurse_react"
    },
    "day4_nurse_react": {
        name: "Me",
        text: "(The school nurse is smiling and waving at the museum entrance. Meeting her outside of school somehow feels different.)",
        next: "day4_nurse_compliment"
    },
    "day4_nurse_compliment": {
        name: "Me",
        text: "(What should I say?)",
        choices: [
            {
                text: "\"You look really beautiful today.\"",
                next: "day4_nurse_blush",
                stats: { Nurse: { affinity: 10 } }
            },
            {
                text: "\"It feels strange meeting outside of school.\"",
                next: "day4_nurse_smile",
                stats: { Nurse: { affinity: 5 } }
            }
        ]
    },
    "day4_nurse_blush": {
        name: "School Nurse",
        text: "\"Fufu... Thank you. Can you see me as just a man today, instead of a student?\"",
        character: "assets/images/characters/nurse_shy.png",
        next: "day4_date_walk"
    },
    "day4_nurse_smile": {
        name: "School Nurse",
        text: "\"I know, I'm a bit nervous too. Today I'm not a teacher—just me.\"",
        next: "day4_date_walk"
    },

    // --- 담임선생님 루트 ---
    "day4_meet_teacher": {
        name: "Homeroom Teacher",
        text: "\"Oh, you made it. I thought you'd be late, but you're surprisingly early.\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/teacher_normal.png",
        next: "day4_teacher_react"
    },
    "day4_teacher_react": {
        name: "Me",
        text: "(The homeroom teacher is smiling in front of a café. She looks so different outside school that I almost didn't recognize her.)",
        next: "day4_teacher_compliment"
    },
    "day4_teacher_compliment": {
        name: "Me",
        text: "(What should I say?)",
        choices: [
            {
                text: "\"You look really pretty today, teacher.\"",
                next: "day4_teacher_blush",
                stats: { Teacher: { affinity: 10 } }
            },
            {
                text: "\"This café has a nice atmosphere.\"",
                next: "day4_teacher_casual",
                stats: { Teacher: { affinity: 5 } }
            }
        ]
    },
    "day4_teacher_blush": {
        name: "Homeroom Teacher",
        text: "\"...What's with you, all of a sudden. Stop complimenting me, it makes me feel weird.\"",
        character: "assets/images/characters/teacher_shy.png",
        next: "day4_date_walk"
    },
    "day4_teacher_casual": {
        name: "Homeroom Teacher",
        text: "\"Right? The coffee here is great. Come on, let's go in.\"",
        next: "day4_date_walk"
    },

    // =========================================================================
    // 공통 데이트 진행
    // =========================================================================
    "day4_date_walk": {
        name: "Me",
        text: "(We walked side by side, chatting about this and that. A relaxed atmosphere, different from school.)",
        background: "assets/images/background/street.png",
        next: "day4_date_talk_1"
    },
    "day4_date_talk_1": {
        name: "Me",
        text: "(Things we couldn't talk about at school... Favorite music, childhood dreams, little hobbies.)",
        next: "day4_date_talk_2"
    },
    "day4_date_talk_2": {
        name: "Me",
        text: "(The more we talked, the closer I felt our hearts becoming. I wish this moment would last forever.)",
        next: "day4_date_lunch"
    },

    // =========================================================================
    // 점심 식사
    // =========================================================================
    "day4_date_lunch": {
        name: "Me",
        text: "(We stepped into a cute café nearby. Sitting across from each other by the window made my heart flutter.)",
        background: "assets/images/background/cafe.png",
        next: "day4_date_lunch_talk"
    },
    "day4_date_lunch_talk": {
        name: "Me",
        text: "(The conversation blossomed. Laughing together, sharing worries together... So this is what happiness feels like.)",
        next: "day4_date_lunch_choice"
    },
    "day4_date_lunch_choice": {
        name: "Me",
        text: "(Should I bring up something more personal?)",
        choices: [
            {
                text: "\"To be honest... I was kind of lonely before I transferred here.\"",
                next: "day4_date_honest",
                setFlag: "day4_honest_talk"
            },
            {
                text: "\"I've met such wonderful people since coming to this school.\"",
                next: "day4_date_grateful"
            }
        ]
    },
    "day4_date_honest": {
        name: "Me",
        text: "\"The new environment scared me... but thanks to you, I look forward to every day now.\"",
        next: "day4_date_response"
    },
    "day4_date_grateful": {
        name: "Me",
        text: "\"Especially... this moment right now is the best.\"",
        next: "day4_date_response"
    },
    "day4_date_response": {
        name: "Me",
        text: "(Their eyes softened. I felt like something connected between us.)",
        fade: true,
        next: "day4_afternoon_start"
    }
});
