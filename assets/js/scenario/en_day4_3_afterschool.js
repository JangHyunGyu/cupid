/**
 * ============================================================================
 * CUPID - Day 4 Afterschool Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day4_3_afterschool.js
 * 언어: English
 * 일차: Day 4 (4일차 - 토요일)
 * 시간대: Afterschool (오후 - 데이트 하이라이트)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 데이트의 하이라이트. 함께 거리를 걸으며 추억을 쌓고,
 * 캐릭터별 특별한 장소를 방문한 뒤,
 * 석양을 배경으로 감정이 최고조에 달한다.
 * 고백을 할 것인지 선택하는 중요한 분기점.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 오후 산책 - 거리 구경, 시장, 길거리 간식
 * 2. 특별한 장소 방문 - 캐릭터별 고유 장소에서 추억 만들기
 * 3. 석양 씬 - 감정 최고조, 분위기 묘사
 * 4. 고백 선택 - 마음을 전하는 순간
 * 5. 고백 수락 - 캐릭터별 로맨틱 모먼트
 * 6. 고백 보류 - 아쉬운 귀가, 미련
 * 
 *  설정 플래그 (Set Flags)
 * ----------------------------------------------------------------------------
 * day4_confessed           : 고백함
 * day4_confession_accepted : 고백 수락됨
 * day4_waited              : 고백을 미룸
 * isDating_Seoyeon         : 서연과 사귀기 시작
 * isDating_Yuna            : 유나와 사귀기 시작
 * isDating_Dain            : 다인과 사귀기 시작
 * isDating_Nurse           : 보건선생님과 사귀기 시작
 * isDating_Teacher         : 담임선생님과 사귀기 시작
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 특별한 장소: 선택에 따라 +3~5
 * 고백 성공 시: 최고 호감도 히로인 +20
 * 고백 보류 시: +5
 * 
 *  노드 수: 81개
 * 
 *  진입/퇴장
 * ----------------------------------------------------------------------------
 * Entry: day4_afternoon_start
 * Exit:  day4_after_confess → next: "day4_night_start"
 *        day4_wait_end      → next: "day4_night_start"
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
 * [Day 4 - Afterschool] 씬 데이터 정의
 */
Object.assign(SCENARIO[4], {

    // =========================================================================
    // 1. 오후 시작 — 함께 걷기 (10 노드)
    // =========================================================================

    "day4_afternoon_start": {
        name: "Me",
        text: "(We left the café and walked together through the streets. Before I knew it, afternoon had arrived.)",
        background: "assets/images/background/street.png",
        bgm: "sunset2.mp3",
        sunset: true,
        next: "day4_walk_together"
    },

    "day4_walk_together": {
        name: "Me",
        background: "assets/images/background/street.png",
        text: "(We walked side by side, looking around at the scenery. It was the weekend, so the streets were pretty crowded. Laughter, music, and sweet aromas all blended together.)",
        next: "day4_walk_street"
    },

    "day4_walk_street": {
        name: "Me",
        background: "assets/images/background/street.png",
        text: "(I caught our reflection in a shop window. We looked just like a real couple… My heart started racing.)",
        next: "day4_walk_market"
    },

    "day4_walk_market": {
        name: "Me",
        background: "assets/images/background/street.png",
        text: "(A small market came into view down a side alley. Delicious smells drifted in on the breeze. My mouth was watering.)",
        next: "day4_walk_food_choice"
    },

    "day4_walk_food_choice": {
        name: "Me",
        background: "assets/images/background/street.png",
        text: "(A street food stall caught my eye. What should I do?)",
        choices: [
            {
                text: "\"Want to share one?\"",
                next: "day4_walk_food_share"
            },
            {
                text: "\"Looks delicious… Let's just browse for a bit.\"",
                next: "day4_walk_food_look"
            }
        ]
    },

    "day4_walk_food_share": {
        name: "Me",
        background: "assets/images/background/street.png",
        text: "(I bought a fish-shaped pastry and split it in half. Warm steam rose from it. \"Here, half for you.\" My hand trembled slightly as I offered it.)",
        next: "day4_walk_close"
    },

    "day4_walk_food_look": {
        name: "Me",
        background: "assets/images/background/street.png",
        text: "(As we browsed in front of the stall, our shoulders brushed against each other. My heart lurched. I pretended not to notice, but I'm pretty sure I was blushing up to my ears.)",
        next: "day4_walk_close"
    },

    "day4_walk_close": {
        name: "Me",
        background: "assets/images/background/street.png",
        text: "(We walked side by side back out to the main road. The streets had grown quieter. The sunset's glow stretched long between the buildings.)",
        sunset: true,
        next: "day4_walk_feelings"
    },

    "day4_walk_feelings": {
        name: "Me",
        background: "assets/images/background/street.png",
        text: "(I can't believe just walking together like this can make me this happy. I stole a glance at the person beside me. Something… an emotion I couldn't put into words was welling up inside me.)",
        next: "day4_afternoon_walk"
    },

    "day4_afternoon_walk": {
        name: "Me",
        background: "assets/images/background/street.png",
        text: "(I never knew walking side by side could feel this good. Every time our fingertips brushed, my heart pounded.)",
        next: "day4_special_notice"
    },

    // =========================================================================
    // 2. 특별한 장소 방문 — 캐릭터별 고유 장소 (13 노드)
    // =========================================================================

    "day4_special_notice": {
        name: "Me",
        background: "assets/images/background/street.png",
        text: "(As we walked, some charming shops tucked away in the alley caught my eye. My companion pointed at one of them.)",
        next: "day4_special_visit"
    },

    "day4_special_visit": {
        name: "System",
        background: "assets/images/background/street.png",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_special_seoyeon", character: "Seoyeon" },
            { next: "day4_special_yuna", character: "Yuna" },
            { next: "day4_special_dain", character: "Dain" },
            { next: "day4_special_nurse", character: "Nurse" },
            { next: "day4_special_teacher", character: "Teacher" }
        ]
    },

    // --- Seoyeon: Flower Shop ---
    "day4_special_seoyeon": {
        name: "Seoyeon",
        text: "\"Look over there, a flower shop! Let's go check it out!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day4_special_seoyeon_react"
    },

    "day4_special_seoyeon_react": {
        name: "Me",
        text: "(Seoyeon beamed among the flowers, picked out a single blossom, and held it out to me. \"This one's for you. The flower meaning is… a secret.\")",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            {
                text: "\"You're prettier than any flower.\"",
                next: "day4_afternoon_special",
                stats: { Seoyeon: { affinity: 5 } }
            },
            {
                text: "\"Thank you, I'll treasure it.\"",
                next: "day4_afternoon_special",
                stats: { Seoyeon: { affinity: 3 } }
            }
        ]
    },

    // --- Yuna: Used Bookstore ---
    "day4_special_yuna": {
        name: "Yuna",
        text: "\"…There's a used bookstore over there. Would it be okay if we stopped in?\"",
        background: "assets/images/background/bookstore.png",
        character: "assets/images/characters/yuna_normal.png",
        next: "day4_special_yuna_react"
    },

    "day4_special_yuna_react": {
        name: "Me",
        text: "(Yuna carefully pulled a book from the old shelves. \"This book… I wanted to read it together with you.\" Her eyes shimmered softly.)",
        background: "assets/images/background/bookstore.png",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            {
                text: "\"Let's read it together. One chapter a day.\"",
                next: "day4_afternoon_special",
                stats: { Yuna: { affinity: 5 } }
            },
            {
                text: "\"If you picked it, I'm sure it's a great book.\"",
                next: "day4_afternoon_special",
                stats: { Yuna: { affinity: 3 } }
            }
        ]
    },

    // --- Dain: Sports Store ---
    "day4_special_dain": {
        name: "Dain",
        text: "\"Oh! A sports store!! Hold on, there's something I need to check out!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day4_special_dain_react"
    },

    "day4_special_dain_react": {
        name: "Me",
        text: "(Dain came running over excitedly with matching wristbands. \"Look at these, couple wristbands! Let's each wear one!\" Her face was slightly flushed.)",
        character: "assets/images/characters/dain_shy.png",
        choices: [
            {
                text: "\"Sure! Let's match!\"",
                next: "day4_afternoon_special",
                stats: { Dain: { affinity: 5 } }
            },
            {
                text: "\"You pick them out, you've got great taste.\"",
                next: "day4_afternoon_special",
                stats: { Dain: { affinity: 3 } }
            }
        ]
    },

    // --- School Nurse: Antique Shop ---
    "day4_special_nurse": {
        name: "School Nurse",
        text: "\"Oh my, an antique shop over there. Shall we have a look?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day4_special_nurse_react"
    },

    "day4_special_nurse_react": {
        name: "Me",
        text: "(She held up a vintage brooch, tilting it in the sunlight with a smile. \"Isn't this pretty? Something about it… makes me want to keep it forever.\")",
        character: "assets/images/characters/nurse_shy.png",
        choices: [
            {
                text: "\"It would look great on you. Can I buy it for you?\"",
                next: "day4_afternoon_special",
                stats: { Nurse: { affinity: 5 } }
            },
            {
                text: "\"You have a good eye. It's really beautiful.\"",
                next: "day4_afternoon_special",
                stats: { Nurse: { affinity: 3 } }
            }
        ]
    },

    // --- Homeroom Teacher: Stationery Store ---
    "day4_special_teacher": {
        name: "Homeroom Teacher",
        text: "\"Wait, can we stop by that stationery store? I need a pen.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day4_special_teacher_react"
    },

    "day4_special_teacher_react": {
        name: "Me",
        text: "(She was picking out a pen when she paused and grabbed another one. \"…This one's for you. Make sure you take good notes in class. …It's a gift.\" She turned away, but the tips of her ears were red.)",
        character: "assets/images/characters/teacher_shy.png",
        choices: [
            {
                text: "\"Thank you. I'll use it every day.\"",
                next: "day4_afternoon_special",
                stats: { Teacher: { affinity: 5 } }
            },
            {
                text: "\"It's even more special because you picked it out.\"",
                next: "day4_afternoon_special",
                stats: { Teacher: { affinity: 3 } }
            }
        ]
    },

    // --- Common Merge ---
    "day4_afternoon_special": {
        name: "Me",
        character: null,
        text: "(It was a special time together. \"Hey, want to head to the riverside park?\" My companion suggested it first.)",
        background: "assets/images/background/park.png",
        sunset: true,
        next: "day4_afternoon_park"
    },

    // =========================================================================
    // 3. 강변 공원 — 석양 씬 확장 (10 노드)
    // =========================================================================

    "day4_afternoon_park": {
        name: "Me",
        background: "assets/images/background/park.png",
        character: null,
        text: "(We arrived at the riverside park. The sunset was sparkling on the water. It looked like a scene straight out of a movie.)",
        next: "day4_sunset_approach"
    },

    "day4_sunset_approach": {
        name: "Me",
        background: "assets/images/background/park.png",
        character: null,
        text: "(We walked slowly along the riverbank. The sunset light shimmered across the water, painting golden ripples. Time seemed to slow down.)",
        sunset: true,
        next: "day4_sunset_colors"
    },

    "day4_sunset_colors": {
        name: "Me",
        background: "assets/images/background/park.png",
        character: null,
        text: "(The sky shifted from orange to pink, and then to violet. I don't think I've ever seen a sky this beautiful in my entire life.)",
        sunset: true,
        next: "day4_sunset_wind"
    },

    "day4_sunset_wind": {
        name: "Me",
        background: "assets/images/background/park.png",
        character: null,
        text: "(A warm breeze brushed past us. The wind from the river carried the scent of grass and water. The gentle sound of flowing water played like background music.)",
        sunset: true,
        next: "day4_sunset_stare"
    },

    "day4_sunset_stare": {
        name: "System",
        background: "assets/images/background/park.png",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_sunset_stare_seoyeon", character: "Seoyeon" },
            { next: "day4_sunset_stare_yuna", character: "Yuna" },
            { next: "day4_sunset_stare_dain", character: "Dain" },
            { next: "day4_sunset_stare_nurse", character: "Nurse" },
            { next: "day4_sunset_stare_teacher", character: "Teacher" }
        ]
    },

    "day4_sunset_stare_seoyeon": {
        name: "Me",
        text: "(Seoyeon was leaning on the railing, gazing at the sunset. Her hair fluttered in the breeze. Her profile, bathed in the glow of the setting sun… was breathtakingly beautiful.)",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        next: "day4_afternoon_sunset"
    },

    "day4_sunset_stare_yuna": {
        name: "Me",
        text: "(Yuna was quietly watching the sunset. Her usually expressionless face had softened gently. I've… never seen her look like this before.)",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day4_afternoon_sunset"
    },

    "day4_sunset_stare_dain": {
        name: "Me",
        text: "(Dain let out a small gasp of awe. Unlike her usual energetic self, she stood still, gazing at the sunset. She looked unexpectedly mature.)",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "day4_afternoon_sunset"
    },

    "day4_sunset_stare_nurse": {
        name: "Me",
        text: "(She gazed at the sunset with her eyes gently narrowed. Bathed in the glow of the setting sun, she looked like a painting come to life.)",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day4_afternoon_sunset"
    },

    "day4_sunset_stare_teacher": {
        name: "Me",
        text: "(She leaned quietly against the railing, looking down at the river. Her usual strictness was nowhere to be seen, replaced by a soft, gentle smile.)",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        next: "day4_afternoon_sunset"
    },

    // =========================================================================
    // 4. 석양 씬 — 감정 최고조 (4 노드)
    // =========================================================================

    "day4_afternoon_sunset": {
        name: "Me",
        character: null,
        text: "(The sunset was illuminating their face. Strangely, I couldn't find any words to say.)",
        bgm: "confession.mp3",
        sunset: true,
        next: "day4_afternoon_silence"
    },

    "day4_afternoon_silence": {
        name: "Me",
        character: null,
        text: "(……)",
        sunset: true,
        next: "day4_afternoon_feeling"
    },

    "day4_afternoon_feeling": {
        name: "Me",
        character: null,
        text: "(I think I finally know what this feeling is. From the very first day I transferred here until now… I've been feeling it all along.)",
        sunset: true,
        next: "day4_confession_choice"
    },

    // =========================================================================
    // 5. 고백 선택 (1 노드)
    // =========================================================================

    "day4_confession_choice": {
        name: "Me",
        character: null,
        text: "(Right now, in this moment… should I tell them how I feel?)",
        sunset: true,
        choices: [
            {
                text: "\"There's something I need to tell you…\"  (Confess)",
                next: "day4_confess",
                setFlag: "day4_confessed"
            },
            {
                text: "\"…This view is really beautiful.\"  (Not yet)",
                next: "day4_wait",
                setFlag: "day4_waited"
            }
        ]
    },

    // =========================================================================
    // 6. 고백 루트 — 감정 빌드업 + 캐릭터별 고유 대사 (12 노드)
    // =========================================================================

    "day4_confess": {
        name: "Me",
        character: null,
        text: "\"The truth is… ever since I transferred here, all I've thought about every day is you.\"",
        sunset: true,
        next: "day4_confess_heartbeat"
    },

    "day4_confess_heartbeat": {
        name: "Me",
        character: null,
        text: "(My heart was pounding like crazy. Thump, thump, thump. Can they hear it too?)",
        sunset: true,
        next: "day4_confess_2"
    },

    "day4_confess_2": {
        name: "Me",
        character: null,
        text: "\"At first, I just thought you were a good person… but now I'm sure.\"",
        sunset: true,
        next: "day4_confess_breathe"
    },

    "day4_confess_breathe": {
        name: "Me",
        character: null,
        text: "(I took a deep breath. I clenched my fists. If not now… I'll regret it for the rest of my life.)",
        sunset: true,
        next: "day4_confess_3"
    },

    "day4_confess_3": {
        name: "Me",
        character: null,
        text: "\"I… I like you.\"",
        sunset: true,
        next: "day4_confess_silence"
    },

    "day4_confess_silence": {
        name: "Me",
        character: null,
        text: "(As soon as the words left my mouth, silence fell. The world bathed in the sunset's glow seemed to stop. Every second felt like an hour.)",
        sunset: true,
        next: "day4_confess_response"
    },

    "day4_confess_response": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_confess_to_seoyeon", character: "Seoyeon" },
            { next: "day4_confess_to_yuna", character: "Yuna" },
            { next: "day4_confess_to_dain", character: "Dain" },
            { next: "day4_confess_to_nurse", character: "Nurse" },
            { next: "day4_confess_to_teacher", character: "Teacher" }
        ]
    },

    // --- Character-Specific Confession Lines ---

    "day4_confess_to_seoyeon": {
        name: "Me",
        text: "\"Seoyeon… seeing your smile every morning has become the reason I start my day. I've never felt anything like this before.\"",
        character: "assets/images/characters/seyoun_shy2.png",
        sunset: true,
        next: "day4_accept_seoyeon"
    },

    "day4_confess_to_yuna": {
        name: "Me",
        text: "\"Yuna… when I'm with you, the world feels quiet. I love that stillness. It's special because it's you.\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        next: "day4_accept_yuna"
    },

    "day4_confess_to_dain": {
        name: "Me",
        text: "\"Dain… when you smile, I can't help but smile too. Your bright energy is contagious. At some point, it started feeling empty without you around.\"",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "day4_accept_dain"
    },

    "day4_confess_to_nurse": {
        name: "Me",
        text: "\"I'm not saying this as a student… I'm saying this as a person. I like you. I truly mean it.\"",
        character: "assets/images/characters/nurse_shy.png",
        sunset: true,
        next: "day4_accept_nurse"
    },

    "day4_confess_to_teacher": {
        name: "Me",
        text: "\"Whether you're being strict or smiling… I've liked every side of you. These feelings are genuine, and they're only for you.\"",
        character: "assets/images/characters/teacher_shy.png",
        sunset: true,
        next: "day4_accept_teacher"
    },

    // =========================================================================
    // 7. 고백 수락 — 캐릭터별 로맨틱 모먼트 (15 노드)
    // =========================================================================

    // --- Seoyeon Accepts ---
    "day4_accept_seoyeon": {
        name: "Seoyeon",
        text: "\"…Me too. I like you too. Ever since the first day you transferred in, when I first saw you at the school gate.\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Seoyeon"],
        next: "day4_accept_seoyeon_moment"
    },

    "day4_accept_seoyeon_moment": {
        name: "Me",
        text: "(Tears were welling up in Seoyeon's eyes. Those tears, sparkling in the sunset's glow… were like the most beautiful jewels in the world.)",
        character: "assets/images/characters/seyoun_shy2.png",
        sunset: true,
        next: "day4_accept_seoyeon_close"
    },

    "day4_accept_seoyeon_close": {
        name: "Seoyeon",
        text: "\"…Can I hold your hand?\"  (Seoyeon gently wrapped her hand around mine. It was warm, and trembling slightly.)",
        character: "assets/images/characters/seyoun_shy2.png",
        sunset: true,
        next: "day4_after_confess"
    },

    // --- Yuna Accepts ---
    "day4_accept_yuna": {
        name: "Yuna",
        text: "\"…Dummy. I was going to say it first.\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        stats: { Yuna: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Yuna"],
        next: "day4_accept_yuna_moment"
    },

    "day4_accept_yuna_moment": {
        name: "Me",
        text: "(Yuna slightly lowered her head. I could see the blush spreading all the way to the tips of her ears. This was completely different from how she usually is… my heart felt like it would burst.)",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        next: "day4_accept_yuna_close"
    },

    "day4_accept_yuna_close": {
        name: "Yuna",
        text: "\"…Stay still.\"  (Yuna moved right next to me and stood close. Our shoulders were touching. A small warmth radiated between us.)",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        next: "day4_after_confess"
    },

    // --- Dain Accepts ---
    "day4_accept_dain": {
        name: "Dain",
        text: "\"…Huh?! F-for real?! Me too!! I like you too!! Oh my gosh!!\"",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        stats: { Dain: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Dain"],
        next: "day4_accept_dain_moment"
    },

    "day4_accept_dain_moment": {
        name: "Me",
        text: "(Dain grabbed my arm with both hands. Her face was flushed bright red, but her eyes were sparkling with joy.)",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "day4_accept_dain_close"
    },

    "day4_accept_dain_close": {
        name: "Dain",
        text: "\"Hehe, so we're officially dating now, right?! Really?! Ahh, my heart's gonna explode!!\"  (Dain bounced up and down, grabbing my hand and shaking it.)",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day4_after_confess"
    },

    // --- School Nurse Accepts ---
    "day4_accept_nurse": {
        name: "School Nurse",
        text: "\"…I already knew. I could tell just by looking into your eyes. …I feel the same way.\"",
        character: "assets/images/characters/nurse_shy.png",
        sunset: true,
        stats: { Nurse: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Nurse"],
        next: "day4_accept_nurse_moment"
    },

    "day4_accept_nurse_moment": {
        name: "Me",
        text: "(She took a step closer. A faint, gentle fragrance brushed past my nose. My heart felt like it might stop.)",
        character: "assets/images/characters/nurse_shy.png",
        sunset: true,
        next: "day4_accept_nurse_close"
    },

    "day4_accept_nurse_close": {
        name: "School Nurse",
        text: "\"It's a secret, just between us.\"  (She gently took my hand. Her soft, warm hand… was trembling.)",
        character: "assets/images/characters/nurse_shy.png",
        sunset: true,
        next: "day4_after_confess"
    },

    // --- Homeroom Teacher Accepts ---
    "day4_accept_teacher": {
        name: "Homeroom Teacher",
        text: "\"…Honestly, you. You know a student shouldn't say things like that to a teacher, right? …But I feel the same way, you dummy.\"",
        character: "assets/images/characters/teacher_shy.png",
        sunset: true,
        stats: { Teacher: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Teacher"],
        next: "day4_accept_teacher_moment"
    },

    "day4_accept_teacher_moment": {
        name: "Me",
        text: "(Her eyes were wavering. Getting to see this vulnerable side of someone who's always so guarded… I must be the only one who gets to see this.)",
        character: "assets/images/characters/teacher_shy.png",
        sunset: true,
        next: "day4_accept_teacher_close"
    },

    "day4_accept_teacher_close": {
        name: "Homeroom Teacher",
        text: "\"…Just this much.\"  (She linked her pinky finger with mine. \"At school… it's a secret.\")",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "day4_after_confess"
    },

    // =========================================================================
    // 8. 고백 후 — 종료 (1 노드)
    // =========================================================================

    "day4_after_confess": {
        name: "Me",
        character: null,
        text: "(Beneath the sunset, our two shadows merged into one. It was the happiest moment in the world.)",
        sunset: true,
        fade: true,
        next: "day4_night_start"
    },

    // =========================================================================
    // 9. 고백 보류 루트 — 감정 갈등과 아쉬운 귀가 (16 노드)
    // =========================================================================

    "day4_wait": {
        name: "Me",
        character: null,
        text: "\"…This view is really beautiful.\"",
        sunset: true,
        next: "day4_wait_conflict"
    },

    "day4_wait_conflict": {
        name: "Me",
        character: null,
        text: "(The words I wanted to say rose all the way to the tip of my tongue… but I swallowed them back down. Not yet… it's not the right time yet.)",
        sunset: true,
        next: "day4_wait_walk"
    },

    "day4_wait_walk": {
        name: "Me",
        character: null,
        text: "(We walked side by side along the riverbank. Neither of us said a word, but strangely, the silence wasn't uncomfortable at all.)",
        sunset: true,
        next: "day4_wait_talk"
    },

    "day4_wait_talk": {
        name: "Me",
        character: null,
        text: "\"…Today was really fun. Thank you.\"",
        sunset: true,
        next: "day4_wait_linger"
    },

    "day4_wait_linger": {
        name: "Me",
        character: null,
        text: "(We'd have to part ways at the crosswalk up ahead. I never knew taking a single step could be this hard.)",
        sunset: true,
        next: "day4_wait_feelings"
    },

    "day4_wait_feelings": {
        name: "Me",
        character: null,
        text: "(The words I swallowed earlier came surging back up. 'I like you.' Those three words were pounding against the walls of my heart.)",
        sunset: true,
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
        text: "\"Me too! Let's hang out again… okay?\"  (Seoyeon smiled brightly, but somewhere deep in her eyes, a hint of longing showed.)",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 5 } },
        next: "day4_wait_goodbye"
    },

    "day4_wait_yuna": {
        name: "Yuna",
        text: "\"…Yeah. It wasn't bad. …Let's do this again sometime.\"  (Yuna turned her head slightly. Was she trying to hide her expression?)",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        stats: { Yuna: { affinity: 5 } },
        next: "day4_wait_goodbye"
    },

    "day4_wait_dain": {
        name: "Dain",
        text: "\"Of course it was fun!! Let's go out again next time!!\"  (Dain smiled brightly, but for a moment, I caught her biting her lip.)",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        stats: { Dain: { affinity: 5 } },
        next: "day4_wait_goodbye"
    },

    "day4_wait_nurse": {
        name: "School Nurse",
        text: "\"It was a lovely time. …Shall we meet up again?\"  (Her smile seemed just a bit weaker than usual.)",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        stats: { Nurse: { affinity: 5 } },
        next: "day4_wait_goodbye"
    },

    "day4_wait_teacher": {
        name: "Homeroom Teacher",
        text: "\"…Well, it wasn't bad. Call me again next time. I'll come.\"  (She smiled, but her steps as she turned away were slow.)",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        stats: { Teacher: { affinity: 5 } },
        next: "day4_wait_goodbye"
    },

    "day4_wait_goodbye": {
        name: "Me",
        character: null,
        text: "(We said our goodbyes and I turned to walk away. I wanted to look back… but I held myself back.)",
        sunset: true,
        next: "day4_wait_regret"
    },

    "day4_wait_regret": {
        name: "Me",
        character: null,
        text: "(I couldn't help it anymore and looked back. They had turned around too. The moment our eyes met, we both quickly looked away.)",
        sunset: true,
        next: "day4_wait_home"
    },

    "day4_wait_home": {
        name: "Me",
        character: null,
        text: "(On the way home. The words I couldn't say today sat heavy in a corner of my chest. 'Next time… I'll definitely say it. I have to.')",
        sunset: true,
        next: "day4_wait_end"
    },

    "day4_wait_end": {
        name: "Me",
        character: null,
        text: "(In my heart… the unspoken words lingered.)",
        sunset: true,
        fade: true,
        next: "day4_night_start"
    }

});
