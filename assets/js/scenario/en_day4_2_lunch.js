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
 * 캐릭터별 고유 데이트 활동, 점심 식사, 사진 촬영 등 다채로운 이벤트.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 약속 장소 도착 - 긴장 속 대기, 주변 관찰
 * 2. 히로인과의 첫 만남 - 캐릭터별 등장 및 칭찬 선택
 * 3. 함께 걸으며 대화 - 서로를 더 알아가는 시간
 * 4. 캐릭터별 데이트 활동 - 각 히로인 고유 장소에서 특별한 시간
 * 5. 점심 식사 - 분위기 있는 대화, 주문, 재미있는 순간
 * 6. 사진 촬영 / 특별한 순간 - 추억 만들기
 * 
 *  조건 플래그 (Condition Flags)
 * ----------------------------------------------------------------------------
 * (없음 - selectByHighestAffinity 사용)
 * 
 *  설정 플래그 (Set Flags)
 * ----------------------------------------------------------------------------
 * day4_honest_talk : 솔직한 대화를 선택했을 때
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 최고 호감도 히로인: 대화 선택에 따라 +3 ~ +10
 * 
 *  노드 수: 약 80개
 * 
 *  진입/퇴장
 * ----------------------------------------------------------------------------
 * Entry: day4_arrive
 * Exit:  day4_date_response → next: "day4_afternoon_start"
 * 
 * ============================================================================
 */

// SCENARIO 전역 객체 초기화
if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}

// Day 4 시나리오 그룹 초기화
if (!SCENARIO[4]) {
    SCENARIO[4] = {};
}

/**
 * [Day 4 - Lunch] 씬 데이터 정의
 */
Object.assign(SCENARIO[4], {

    // =========================================================================
    // 1. 약속 장소 도착 — 긴장 속 대기 (6 노드)
    // =========================================================================

    "day4_arrive": {
        name: "Me",
        text: "(I arrived at the meeting spot. I'm a bit early.)",
        background: "assets/images/background/street.png",
        character: null,
        bgm: "date.mp3",
        next: "day4_arrive_nervous"
    },

    "day4_arrive_nervous": {
        name: "Me",
        background: "assets/images/background/street.png",
        text: "(My hands are sweaty in my pockets. Why am I so nervous... Let me take a deep breath.)",
        next: "day4_arrive_people"
    },

    "day4_arrive_people": {
        name: "Me",
        background: "assets/images/background/street.png",
        text: "(I look around. On the street, there are couples walking and laughing, a family eating ice cream, someone walking their dog...)",
        next: "day4_arrive_phone"
    },

    "day4_arrive_phone": {
        name: "Me",
        background: "assets/images/background/street.png",
        text: "(I take out my phone. No messages yet. I check the time — I arrived 15 minutes early.)",
        next: "day4_arrive_look"
    },

    "day4_arrive_look": {
        name: "Me",
        background: "assets/images/background/street.png",
        text: "(I sneak a glance at my reflection in a window. Not bad... I think.)",
        next: "day4_arrive_wait"
    },

    "day4_arrive_wait": {
        name: "Me",
        background: "assets/images/background/street.png",
        text: "(My heart is racing. Have I ever been this nervous before...)",
        next: "day4_heroine_arrive"
    },

    // =========================================================================
    // 2. 히로인 등장 — 최고 호감도 기준 분기 (1 노드)
    // =========================================================================

    "day4_heroine_arrive": {
        name: "System",
        background: "assets/images/background/street.png",
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

    // =========================================================================
    // 서연 루트 (5 노드)
    // =========================================================================

    "day4_meet_seoyeon": {
        name: "Seoyeon",
        text: "\"Oh, you're already here? I came early too... Hehe.\"",
        background: "assets/images/background/park.png",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day4_seoyeon_react"
    },

    "day4_seoyeon_react": {
        name: "Me",
        background: "assets/images/background/park.png",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "(Seoyeon walks over with a smile. Meeting outside of school... she looks different from usual.)",
        next: "day4_seoyeon_compliment"
    },

    "day4_seoyeon_compliment": {
        name: "Me",
        background: "assets/images/background/park.png",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "(What should I say?)",
        choices: [
            {
                text: "\"You look really pretty today.\"",
                next: "day4_seoyeon_blush",
                stats: { Seoyeon: { affinity: 10 } }
            },
            {
                text: "\"You look really cheerful today!\"",
                next: "day4_seoyeon_happy",
                stats: { Seoyeon: { affinity: 5 } }
            }
        ]
    },

    "day4_seoyeon_blush": {
        name: "Seoyeon",
        background: "assets/images/background/park.png",
        text: "\"W-what... You can't just say that out of nowhere... Thanks.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day4_date_walk"
    },

    "day4_seoyeon_happy": {
        name: "Seoyeon",
        background: "assets/images/background/park.png",
        text: "\"Really? I put a lot of effort in today! I'm glad you noticed~\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day4_date_walk"
    },

    // =========================================================================
    // 유나 루트 (5 노드)
    // =========================================================================

    "day4_meet_yuna": {
        name: "Yuna",
        text: "\"...You're here.\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/yuna_normal.png",
        next: "day4_yuna_react"
    },

    "day4_yuna_react": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/yuna_normal.png",
        text: "(Yuna was standing in front of the café. She gives off a different vibe outside of school.)",
        next: "day4_yuna_compliment"
    },

    "day4_yuna_compliment": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/yuna_normal.png",
        text: "(What should I say?)",
        choices: [
            {
                text: "\"You look different today. Pretty.\"",
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
        background: "assets/images/background/cafe.png",
        text: "\"...No one's ever said that to me before. ...Thanks.\"",
        character: "assets/images/characters/yuna_shy.png",
        next: "day4_date_walk"
    },

    "day4_yuna_cool": {
        name: "Yuna",
        background: "assets/images/background/cafe.png",
        text: "\"...I just got here. Let's go in.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day4_date_walk"
    },

    // =========================================================================
    // 다인 루트 (5 노드)
    // =========================================================================

    "day4_meet_dain": {
        name: "Dain",
        text: "\"Hey!! Over here, over here!!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_laugh.png",
        next: "day4_dain_react"
    },

    "day4_dain_react": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/dain_laugh.png",
        text: "(Dain waves and runs over. Meeting outside of school, the vibe is totally different.)",
        next: "day4_dain_compliment"
    },

    "day4_dain_compliment": {
        name: "Me",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_laugh.png",
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
        background: "assets/images/background/gym.png",
        text: "\"H-hehe... Really?! I spent so long deciding what to wear!! What a relief~!!\"",
        character: "assets/images/characters/dain_shy.png",
        next: "day4_date_walk"
    },

    "day4_dain_energy": {
        name: "Dain",
        background: "assets/images/background/gym.png",
        text: "\"It was totally perfect!! I'm in top shape today!! Come on, let's go!!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day4_date_walk"
    },

    // =========================================================================
    // 보건선생님 루트 (5 노드)
    // =========================================================================

    "day4_meet_nurse": {
        name: "School Nurse",
        text: "\"Oh my, you're already here? Have you been waiting long?\"",
        background: "assets/images/background/museum.png",
        character: "assets/images/characters/nurse_normal.png",
        next: "day4_nurse_react"
    },

    "day4_nurse_react": {
        name: "Me",
        background: "assets/images/background/museum.png",
        character: "assets/images/characters/nurse_normal.png",
        text: "(The school nurse is waving and smiling at the museum entrance. Meeting outside of school, the atmosphere feels completely different.)",
        next: "day4_nurse_compliment"
    },

    "day4_nurse_compliment": {
        name: "Me",
        background: "assets/images/background/museum.png",
        character: "assets/images/characters/nurse_normal.png",
        text: "(What should I say?)",
        choices: [
            {
                text: "\"You look... really beautiful today.\"",
                next: "day4_nurse_blush",
                stats: { Nurse: { affinity: 10 } }
            },
            {
                text: "\"It's kind of strange meeting outside of school.\"",
                next: "day4_nurse_smile",
                stats: { Nurse: { affinity: 5 } }
            }
        ]
    },

    "day4_nurse_blush": {
        name: "School Nurse",
        background: "assets/images/background/museum.png",
        text: "\"Hehe... Thank you. Can I see you as just a man today, not a student?\"",
        character: "assets/images/characters/nurse_shy.png",
        next: "day4_date_walk"
    },

    "day4_nurse_smile": {
        name: "School Nurse",
        background: "assets/images/background/museum.png",
        text: "\"Right, I'm a bit nervous too. Today, I'm not a teacher — just me.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day4_date_walk"
    },

    // =========================================================================
    // 담임선생님 루트 (5 노드)
    // =========================================================================

    "day4_meet_teacher": {
        name: "Homeroom Teacher",
        text: "\"Oh, you made it. I thought you'd be late, but you're surprisingly early.\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/teacher_normal.png",
        next: "day4_teacher_react"
    },

    "day4_teacher_react": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/teacher_normal.png",
        text: "(The homeroom teacher is smiling in front of the café. She looks so different outside of school that I almost didn't recognize her.)",
        next: "day4_teacher_compliment"
    },

    "day4_teacher_compliment": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/teacher_normal.png",
        text: "(What should I say?)",
        choices: [
            {
                text: "\"You look really pretty today.\"",
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
        background: "assets/images/background/cafe.png",
        text: "\"...What, all of a sudden. Stop it, compliments make me feel weird.\"",
        character: "assets/images/characters/teacher_shy.png",
        next: "day4_date_walk"
    },

    "day4_teacher_casual": {
        name: "Homeroom Teacher",
        background: "assets/images/background/cafe.png",
        text: "\"Right? The coffee here is great. Come on, let's go in.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day4_date_walk"
    },

    // =========================================================================
    // 3. 공통 데이트 시작 — 함께 걷기 (3 노드)
    // =========================================================================

    "day4_date_walk": {
        name: "Me",
        character: null,
        text: "(We walked side by side, chatting about all sorts of things. A relaxed atmosphere, different from school.)",
        background: "assets/images/background/street.png",
        next: "day4_date_talk_1"
    },

    "day4_date_talk_1": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: null,
        text: "(Things we could never talk about at school... favorite music, childhood dreams, little hobbies.)",
        next: "day4_date_talk_2"
    },

    "day4_date_talk_2": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: null,
        text: "(The more we talk, the closer I feel. I wish this moment could last forever.)",
        next: "day4_date_weather"
    },

    // =========================================================================
    // 4. 분위기 — 날씨와 주변 묘사 (4 노드)
    // =========================================================================

    "day4_date_weather": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: null,
        text: "(A gentle breeze blows. Cotton candy clouds drift slowly across the sky.)",
        next: "day4_date_surroundings"
    },

    "day4_date_surroundings": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: null,
        text: "(I see other couples around, just like us. I suddenly wonder, 'Do we look like that too?')",
        next: "day4_date_time_pass"
    },

    "day4_date_time_pass": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: null,
        text: "(I have no idea how time flew by so fast. I check my phone and realize an hour has already passed.)",
        next: "day4_date_sunshine"
    },

    "day4_date_sunshine": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: null,
        text: "(Sunlight pours through the leaves. The light falling on the face of the person walking beside me is... beautiful.)",
        next: "day4_date_activity_branch"
    },

    // =========================================================================
    // 5. 캐릭터별 데이트 활동 분기 (1 + 20 = 21 노드)
    // =========================================================================

    "day4_date_activity_branch": {
        name: "System",
        background: "assets/images/background/street.png",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_activity_seoyeon_1", character: "Seoyeon" },
            { next: "day4_activity_yuna_1", character: "Yuna" },
            { next: "day4_activity_dain_1", character: "Dain" },
            { next: "day4_activity_nurse_1", character: "Nurse" },
            { next: "day4_activity_teacher_1", character: "Teacher" }
        ]
    },

    // --- 서연: 공원 데이트 (꽃밭 산책, 오리 먹이주기, 사진) ---

    "day4_activity_seoyeon_1": {
        name: "Seoyeon",
        text: "\"Wow, look over there! A flower garden! Let's go!!\"",
        background: "assets/images/background/park.png",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day4_activity_seoyeon_2"
    },

    "day4_activity_seoyeon_2": {
        name: "Me",
        background: "assets/images/background/park.png",
        text: "(Seoyeon grabs my hand and runs into the flower garden. She beams brightly among the colorful flowers.)",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day4_activity_seoyeon_3"
    },

    "day4_activity_seoyeon_3": {
        name: "Seoyeon",
        background: "assets/images/background/park.png",
        text: "\"Oh, look, ducks! Should we give them some bread? I bought some at the convenience store!\"",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day4_activity_seoyeon_4"
    },

    "day4_activity_seoyeon_4": {
        name: "Me",
        background: "assets/images/background/park.png",
        text: "(We sat side by side, tossing bread to the ducks in the pond. When the ducks waddled over, Seoyeon burst out laughing.)",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day4_activity_converge"
    },

    // --- 유나: 카페 & 서점 데이트 (책 구경, 조용한 카페, 이어폰 나눠 끼기) ---

    "day4_activity_yuna_1": {
        name: "Yuna",
        text: "\"...Can we stop by the bookstore? There's a book I want to read.\"",
        background: "assets/images/background/bookstore.png",
        character: "assets/images/characters/yuna_normal.png",
        next: "day4_activity_yuna_2"
    },

    "day4_activity_yuna_2": {
        name: "Me",
        background: "assets/images/background/bookstore.png",
        character: "assets/images/characters/yuna_normal.png",
        text: "(We flipped through books side by side in the bookstore. Yuna gets really serious when she's picking out a book.)",
        next: "day4_activity_yuna_3"
    },

    "day4_activity_yuna_3": {
        name: "Yuna",
        background: "assets/images/background/bookstore.png",
        text: "\"...Do you like this song? Want to listen with one earbud?\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 3 } },
        next: "day4_activity_yuna_4"
    },

    "day4_activity_yuna_4": {
        name: "Me",
        background: "assets/images/background/bookstore.png",
        text: "(Yuna handed me one of her earbuds. We sat close together, listening to the same music. Her shoulder gently touched mine.)",
        character: "assets/images/characters/yuna_shy.png",
        stats: { Yuna: { affinity: 5 } },
        next: "day4_activity_converge"
    },

    // --- 다인: 오락실 & 스포츠 데이트 (아케이드 게임, 대결, 승부욕) ---

    "day4_activity_dain_1": {
        name: "Dain",
        text: "\"Hey hey hey, there's an arcade over there!! Let's go let's go let's go!!\"",
        background: "assets/images/background/arcade.png",
        character: "assets/images/characters/dain_laugh.png",
        next: "day4_activity_dain_2"
    },

    "day4_activity_dain_2": {
        name: "Me",
        background: "assets/images/background/arcade.png",
        character: "assets/images/characters/dain_laugh.png",
        text: "(Dain's eyes light up as she dashes into the arcade. She stops in front of a rhythm game and gives me a challenging look.)",
        next: "day4_activity_dain_3"
    },

    "day4_activity_dain_3": {
        name: "Dain",
        background: "assets/images/background/arcade.png",
        text: "\"It's a showdown!! Loser buys ice cream!! I'm NOT losing!!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 3 } },
        next: "day4_activity_dain_4"
    },

    "day4_activity_dain_4": {
        name: "Me",
        background: "assets/images/background/arcade.png",
        text: "(I ended up losing. Dain pumps both fists in the air and cheers. I lost, but... seeing her that happy is a pretty good sight.)",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 5 } },
        next: "day4_activity_converge"
    },

    // --- 보건선생님: 미술관 데이트 (그림 감상, 인생 이야기, 가까워지는 순간) ---

    "day4_activity_nurse_1": {
        name: "School Nurse",
        text: "\"Don't you love this painting? The colors are so warm.\"",
        background: "assets/images/background/museum.png",
        character: "assets/images/characters/nurse_normal.png",
        next: "day4_activity_nurse_2"
    },

    "day4_activity_nurse_2": {
        name: "Me",
        background: "assets/images/background/museum.png",
        character: "assets/images/characters/nurse_normal.png",
        text: "(The museum was quiet and spacious. We walked slowly, viewing the paintings side by side. I like moments like this.)",
        next: "day4_activity_nurse_3"
    },

    "day4_activity_nurse_3": {
        name: "School Nurse",
        background: "assets/images/background/museum.png",
        text: "\"When I was a student, I had so many dreams too. I still do, but... they've just changed a little.\"",
        character: "assets/images/characters/nurse_shy.png",
        stats: { Nurse: { affinity: 3 } },
        next: "day4_activity_nurse_4"
    },

    "day4_activity_nurse_4": {
        name: "Me",
        background: "assets/images/background/museum.png",
        text: "(She stopped in front of one painting. Her profile, gazing at the landscape in the painting... was strangely beautiful.)",
        character: "assets/images/characters/nurse_shy.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day4_activity_converge"
    },

    // --- 담임선생님: 카페 데이트 (꿈 이야기, 과거, 음식 나눠 먹기) ---

    "day4_activity_teacher_1": {
        name: "Homeroom Teacher",
        text: "\"What do you want to do after you graduate? Do you have a dream or anything?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/teacher_normal.png",
        next: "day4_activity_teacher_2"
    },

    "day4_activity_teacher_2": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/teacher_normal.png",
        text: "(We sat across from each other in the café, talking. She has a softer expression than usual.)",
        next: "day4_activity_teacher_3"
    },

    "day4_activity_teacher_3": {
        name: "Homeroom Teacher",
        background: "assets/images/background/cafe.png",
        text: "\"When I was a student, I never thought I'd become a teacher. Life doesn't go as planned. But now... it's not bad.\"",
        character: "assets/images/characters/teacher_smile.png",
        stats: { Teacher: { affinity: 3 } },
        next: "day4_activity_teacher_4"
    },

    "day4_activity_teacher_4": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        text: "(She cut a piece of her cake and placed it on my plate. \"Try it, the desserts here are really good.\" My heart skipped a beat at that casual gesture.)",
        character: "assets/images/characters/teacher_smile.png",
        stats: { Teacher: { affinity: 5 } },
        next: "day4_activity_converge"
    },

    // =========================================================================
    // 6. 활동 수렴 지점 (1 노드)
    // =========================================================================

    "day4_activity_converge": {
        name: "Me",
        character: null,
        text: "(Time flew by so fast. Before I knew it, it was already lunchtime.)",
        background: "assets/images/background/street.png",
        next: "day4_date_lunch"
    },

    // =========================================================================
    // 7. 점심 식사 — 확장 (10 노드)
    // =========================================================================

    "day4_date_lunch": {
        name: "Me",
        character: null,
        text: "(We went into a cute café nearby. Sitting across from each other by the window — is it just me, or does this feel even more exciting?)",
        background: "assets/images/background/cafe.png",
        next: "day4_lunch_menu"
    },

    "day4_lunch_menu": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "(I look at the menu. Pasta, sandwiches, brunch set... What should I order?)",
        next: "day4_lunch_order"
    },

    "day4_lunch_order": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "\"I'll go with the pasta. What would you like?\"",
        next: "day4_lunch_order_react"
    },

    "day4_lunch_order_react": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "(They picked something too. After ordering, there's a brief awkward silence.)",
        next: "day4_lunch_awkward"
    },

    "day4_lunch_awkward": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "(I feel like I should say something... What would be natural to talk about at a time like this?)",
        next: "day4_lunch_funny"
    },

    "day4_lunch_funny": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "(The food arrived. The pasta I ordered is way bigger than I expected. They can't hold back their laughter at the sight.)",
        next: "day4_lunch_funny_react"
    },

    "day4_lunch_funny_react": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "\"Why are you laughing! I can totally handle this much!\"",
        next: "day4_lunch_share"
    },

    "day4_lunch_share": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "(We ended up sharing each other's food. Every time our forks bump on the same plate, we can't help but laugh.)",
        next: "day4_date_lunch_talk"
    },

    "day4_date_lunch_talk": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "(The conversation blossomed. Laughing together, thinking together... So this is what happiness feels like.)",
        next: "day4_lunch_learn"
    },

    "day4_lunch_learn": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "(The more we talk, the more I learn about sides of them I never knew. Favorite season, food they dislike, childhood nicknames... These little things feel so precious.)",
        next: "day4_date_lunch_choice"
    },

    // =========================================================================
    // 8. 점심 대화 선택 (5 노드)
    // =========================================================================

    "day4_date_lunch_choice": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "(Should I bring up something more personal?)",
        choices: [
            {
                text: "\"To be honest... I was pretty lonely before I transferred here.\"",
                next: "day4_date_honest",
                setFlag: "day4_honest_talk"
            },
            {
                text: "\"I've met really great people since coming to this school.\"",
                next: "day4_date_grateful"
            }
        ]
    },

    "day4_date_honest": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "\"The new environment scared me... but thanks to you, now I look forward to every day.\"",
        next: "day4_date_honest_react"
    },

    "day4_date_honest_react": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "(They listened quietly to my story. Did my sincerity get through? They nod with warm eyes.)",
        stats: { Seoyeon: { affinity: 3 }, Yuna: { affinity: 3 }, Dain: { affinity: 3 }, Nurse: { affinity: 3 }, Teacher: { affinity: 3 } },
        next: "day4_date_response"
    },

    "day4_date_grateful": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "\"Especially... right now, this moment is the best.\"",
        next: "day4_date_grateful_react"
    },

    "day4_date_grateful_react": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "(They look away slightly, smiling. They're definitely happy about what I said.)",
        next: "day4_date_response"
    },

    // =========================================================================
    // 9. 반응 및 사진/특별한 순간 (5 노드)
    // =========================================================================

    "day4_date_response": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "(Their eyes softened. It feels like something connected between us.)",
        next: "day4_date_cafe_exit"
    },

    "day4_date_cafe_exit": {
        name: "Me",
        character: null,
        text: "(As we step out of the café, warm afternoon sunlight pours down. It feels like the distance between us has gotten smaller.)",
        background: "assets/images/background/street.png",
        next: "day4_date_photo_moment"
    },

    "day4_date_photo_moment": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: null,
        text: "(I suddenly want to capture this moment.)",
        choices: [
            {
                text: "\"Want to take a photo together?\"",
                next: "day4_date_photo_yes",
                stats: { Seoyeon: { affinity: 5 }, Yuna: { affinity: 5 }, Dain: { affinity: 5 }, Nurse: { affinity: 5 }, Teacher: { affinity: 5 } }
            },
            {
                text: "(I'll keep this moment in my heart.)",
                next: "day4_date_photo_no",
                stats: { Seoyeon: { affinity: 3 }, Yuna: { affinity: 3 }, Dain: { affinity: 3 }, Nurse: { affinity: 3 }, Teacher: { affinity: 3 } }
            }
        ]
    },

    "day4_date_photo_yes": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: null,
        text: "(We stood side by side and took a selfie. Two people smiling together on the screen. I want to keep this photo forever.)",
        next: "day4_date_ending_moment"
    },

    "day4_date_photo_no": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: null,
        text: "(More vivid than any photo, I engrave this moment into my memory. The scent of the breeze, the warmth of the sun, the smile of the person beside me.)",
        next: "day4_date_ending_moment"
    },

    // =========================================================================
    // 10. 마무리 — 오후로의 전환 (3 노드)
    // =========================================================================

    "day4_date_ending_moment": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: null,
        text: "(Walking side by side, a brief silence falls. It's not awkward — it's a comfortable silence. It feels like we've become the kind of people who are okay without saying a word.)",
        next: "day4_date_ending_feel"
    },

    "day4_date_ending_feel": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: null,
        text: "(Today feels like a dream. I never imagined such a wonderful day would come after transferring here... truly.)",
        next: "day4_date_transition"
    },

    "day4_date_transition": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: null,
        text: "(The afternoon still awaits. This date... isn't over yet.)",
        fade: true,
        next: "day4_afternoon_start"
    }

});
