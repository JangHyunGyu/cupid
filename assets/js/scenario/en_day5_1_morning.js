/**
 * ============================================================================
 * CUPID - Day 5 Morning Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day5_1_morning.js
 * 언어: English
 * 일차: Day 5 (5일차 - 일요일)
 * 시간대: Morning (아침)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 일요일 아침. 이야기의 마지막 날이 밝았다.
 * 전학 온 지 5일째, 주인공은 새로운 학교에서의 시간을 되돌아본다.
 * 전날 고백 결과에 따라 연인으로서 혹은 마지막 기회를 잡기 위해 하루를 시작한다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 일요일 기상 - 마지막 날의 아침, 지난 날들을 회상
 * 2. 거울 앞에서 - 전학 첫날과 달라진 자신을 느끼며
 * 3. 메시지 확인 - 히로인과의 약속 (커플/보류/기본 루트 분기)
 * 4. 외출 준비 - 복장 선택, 아침 식사, 마지막 점검
 * 5. 등교길 - 루트별 분기 (커플 동행/보류 긴장/혼자 회상)
 * 6. 학교 도착 - 전학 첫날의 추억, 다음 씬으로 전환
 * 
 *  조건 플래그 (Condition Flags)
 * ----------------------------------------------------------------------------
 * day4_confession_accepted : 4일차에 고백 성공 (커플 루트)
 * day4_waited              : 4일차에 고백 보류 (보류 루트)
 * isDating_Seoyeon         : 서연과 연인 관계
 * isDating_Yuna            : 유나와 연인 관계
 * isDating_Dain            : 다인과 연인 관계
 * isDating_Nurse           : 보건선생님과 연인 관계
 * isDating_Teacher         : 담임선생님과 연인 관계
 * 
 *  설정 플래그 (Set Flags)
 * ----------------------------------------------------------------------------
 * day5_outfit_casual       : 캐주얼 복장 선택
 * day5_outfit_special      : 신경 쓴 복장 선택
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 커플 메시지 수신 시: 해당 히로인 +3
 * 커플 등교 동행 시: 해당 히로인 +5
 * 
 *  노드 수: 약 80개
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
    // 1. 기상 시퀀스 (6 노드)
    // =========================================================================
    "day5_start": {
        name: "Me",
        text: "*Sunday morning. Warm sunlight filters through the curtains.*",
        background: "assets/images/background/room_my.png",
        character: null,
        bgm: "morning.mp3",
        fade: true,
        next: "day5_morning_wake"
    },
    "day5_morning_wake": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "*I opened my eyes. It's been a while since I woke up on my own without an alarm. The clock reads 8 AM.*",
        next: "day5_morning_stretch"
    },
    "day5_morning_stretch": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "*I stretch and stare at the ceiling. It doesn't feel real that today is Sunday.*",
        next: "day5_morning_think"
    },
    "day5_morning_think": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "*It's only been five days since I transferred to this school. It feels like it's been at least a month.*",
        next: "day5_morning_mirror"
    },
    "day5_morning_mirror": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "*I washed my face and stood in front of the mirror. The face staring back at me looks... different from before I transferred.*",
        next: "day5_morning_mirror2"
    },
    "day5_morning_mirror2": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "*So much happened over the past four days. A new class, new people... and some very special encounters.*",
        next: "day5_morning_phone_check"
    },

    // =========================================================================
    // 2. 핸드폰 확인 → 루트 분기 (2 노드)
    // =========================================================================
    "day5_morning_phone_check": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "*I picked up the phone from my bed. There are notifications on the screen.*",
        next: "day5_morning_msg_branch"
    },
    "day5_morning_msg_branch": {
        name: "System",
        background: "assets/images/background/room_my.png",
        text: "",
        branches: [
            { next: "day5_couple_msg_branch", condition: "day4_confession_accepted" },
            { next: "day5_pending_msg_branch", condition: "day4_waited" },
            { next: "day5_default_msg_start" }
        ]
    },

    // =========================================================================
    // 3-A. 연인 루트: 캐릭터별 아침 메시지 (16 노드)
    // =========================================================================
    "day5_couple_msg_branch": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_couple_msg_seoyeon", character: "Seoyeon", condition: "isDating_Seoyeon" },
            { next: "day5_couple_msg_yuna", character: "Yuna", condition: "isDating_Yuna" },
            { next: "day5_couple_msg_dain", character: "Dain", condition: "isDating_Dain" },
            { next: "day5_couple_msg_nurse", character: "Nurse", condition: "isDating_Nurse" },
            { next: "day5_couple_msg_teacher", character: "Teacher", condition: "isDating_Teacher" }
        ]
    },

    // --- Seoyeon Couple Message ---
    "day5_couple_msg_seoyeon": {
        name: "Seoyeon",
        text: "\"Good morning ☀️ The weather's amazing today! I bet the flowers in the school garden are blooming. Wanna go see them together?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        silhouette: true,
        next: "day5_couple_react_seoyeon"
    },
    "day5_couple_react_seoyeon": {
        name: "Me",
        character: "assets/images/characters/seyoun_laugh.png",
        silhouette: true,
        text: "*Reading Seoyeon's message makes me smile without even trying. Talking about flowers first thing in the morning—that's so like her.*",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day5_couple_reply_seoyeon"
    },
    "day5_couple_reply_seoyeon": {
        name: "Me",
        character: "assets/images/characters/seyoun_laugh.png",
        silhouette: true,
        text: "(I replied, \"Sounds great! Let's meet at the school front gate. There's a place I want to show you too 😊\")",
        next: "day5_morning_ready"
    },

    // --- Yuna Couple Message ---
    "day5_couple_msg_yuna": {
        name: "Yuna",
        text: "\"...You up? You're going to school today, right? ...I'll go too. Front gate. 10 o'clock.\"",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        next: "day5_couple_react_yuna"
    },
    "day5_couple_react_yuna": {
        name: "Me",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        text: "(Short and sweet, just like Yuna... But if you look closely, there's a hint of excitement in the words \"I'll go too.\")",
        stats: { Yuna: { affinity: 3 } },
        next: "day5_couple_reply_yuna"
    },
    "day5_couple_reply_yuna": {
        name: "Me",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        text: "(\"Yeah, I'll be there. Wait for me.\" I replied calmly, but my heart is racing.)",
        next: "day5_morning_ready"
    },

    // --- Dain Couple Message ---
    "day5_couple_msg_dain": {
        name: "Dain",
        text: "\"Good morning!! ☀️🏐 Let's go to school today!! Meet me at the front gate!! I'll run over!! Don't you DARE be late!!!\"",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        next: "day5_couple_react_dain"
    },
    "day5_couple_react_dain": {
        name: "Me",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        text: "*...So many exclamation marks. Dain's overflowing with energy from the crack of dawn. But somehow, messages like this give me energy too.*",
        stats: { Dain: { affinity: 3 } },
        next: "day5_couple_reply_dain"
    },
    "day5_couple_reply_dain": {
        name: "Me",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        text: "(I texted back, \"Haha, got it! I won't be late. Don't run—be careful on your way!\")",
        next: "day5_morning_ready"
    },

    // --- School Nurse Couple Message ---
    "day5_couple_msg_nurse": {
        name: "School Nurse",
        text: "\"Did you sleep well? The weather's so nice today, I'm feeling a little giddy. Want to meet in front of the school? ...Meeting on a weekend feels different, doesn't it? 💕\"",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        next: "day5_couple_react_nurse"
    },
    "day5_couple_react_nurse": {
        name: "Me",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        text: "*My face turned red at the heart emoji she sent. Meeting outside of school definitely feels different.*",
        stats: { Nurse: { affinity: 3 } },
        next: "day5_couple_reply_nurse"
    },
    "day5_couple_reply_nurse": {
        name: "Me",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        text: "(\"Yes, I'm looking forward to it. Let's meet at the front gate at 10!\" I started writing formally but... it felt a bit awkward.)",
        next: "day5_morning_ready"
    },

    // --- Homeroom Teacher Couple Message ---
    "day5_couple_msg_teacher": {
        name: "Homeroom Teacher",
        text: "\"Are you coming to school today? It's the weekend, but... I have something to see you about. Front gate, 10 o'clock. You'll be in trouble if you're late.\"",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        next: "day5_couple_react_teacher"
    },
    "day5_couple_react_teacher": {
        name: "Me",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        text: "(\"Something to see me about,\" she says. Playing it cool, but she's the one who reached out first. I like that about her.)",
        stats: { Teacher: { affinity: 3 } },
        next: "day5_couple_reply_teacher"
    },
    "day5_couple_reply_teacher": {
        name: "Me",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        text: "(I texted back, \"I won't be late. I'll definitely be there!\" and let out a small smile.)",
        next: "day5_morning_ready"
    },

    // =========================================================================
    // 3-B. 고백 보류 루트: 캐릭터별 힌트 메시지 (16 노드)
    // =========================================================================
    "day5_pending_msg_branch": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_pending_msg_seoyeon", character: "Seoyeon" },
            { next: "day5_pending_msg_yuna", character: "Yuna" },
            { next: "day5_pending_msg_dain", character: "Dain" },
            { next: "day5_pending_msg_nurse", character: "Nurse" },
            { next: "day5_pending_msg_teacher", character: "Teacher" }
        ]
    },

    // --- Seoyeon Pending Message ---
    "day5_pending_msg_seoyeon": {
        name: "Seoyeon",
        text: "\"Are you free today? I need someone to help with the garden... Oh, no pressure though! 😅\"",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        next: "day5_pending_react_seoyeon"
    },
    "day5_pending_react_seoyeon": {
        name: "Me",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        text: "(Seoyeon's asking me to come. She says \"no pressure,\" but... I know I want to go.)",
        next: "day5_pending_reply_seoyeon"
    },
    "day5_pending_reply_seoyeon": {
        name: "Me",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        text: "(Today, I have to tell her how I feel. I replied, \"I'll be there! Let's meet at the front gate.\")",
        next: "day5_morning_ready"
    },

    // --- Yuna Pending Message ---
    "day5_pending_msg_yuna": {
        name: "Yuna",
        text: "\"...School. Today. Can you come? ...I have something to tell you.\"",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        next: "day5_pending_react_yuna"
    },
    "day5_pending_react_yuna": {
        name: "Me",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        text: "(\"I have something to tell you.\" My heart skipped a beat. Could Yuna also feel the same way about me...?)",
        next: "day5_pending_reply_yuna"
    },
    "day5_pending_reply_yuna": {
        name: "Me",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        text: "(I have something to say too. \"Yeah, I'll be there.\" I replied briefly and set my phone down.)",
        next: "day5_morning_ready"
    },

    // --- Dain Pending Message ---
    "day5_pending_msg_dain": {
        name: "Dain",
        text: "\"Hey! Wanna come to school today?! Do you have a sec after practice? It's important!!\"",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        next: "day5_pending_react_dain"
    },
    "day5_pending_react_dain": {
        name: "Me",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        text: "(She said \"it's important.\" Dain being serious is rare. I wonder what it could be.)",
        next: "day5_pending_reply_dain"
    },
    "day5_pending_reply_dain": {
        name: "Me",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        text: "(And I have something I need to say today too. I replied, \"I'll be there!! Wait for me!\")",
        next: "day5_morning_ready"
    },

    // --- School Nurse Pending Message ---
    "day5_pending_msg_nurse": {
        name: "School Nurse",
        text: "\"Are you coming to school today by any chance? I need to organize the nurse's office... It'd be nice if you could come help.\"",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        next: "day5_pending_react_nurse"
    },
    "day5_pending_react_nurse": {
        name: "Me",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        text: "*Organizing the nurse's office on a weekend... It sounds like an excuse, but if it means I can see her, the reason doesn't matter.*",
        next: "day5_pending_reply_nurse"
    },
    "day5_pending_reply_nurse": {
        name: "Me",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        text: "(Today, I have to tell her how I feel. I replied, \"I'll be there! Let's meet at the front gate.\")",
        next: "day5_morning_ready"
    },

    // --- Homeroom Teacher Pending Message ---
    "day5_pending_msg_teacher": {
        name: "Homeroom Teacher",
        text: "\"Can you come by school today? I could use help organizing some paperwork. ...Don't get any ideas, there's no hidden meaning.\"",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        next: "day5_pending_react_teacher"
    },
    "day5_pending_react_teacher": {
        name: "Me",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        text: "(\"No hidden meaning\"—somehow that makes it feel even more meaningful. Could she be feeling the same way?)",
        next: "day5_pending_reply_teacher"
    },
    "day5_pending_reply_teacher": {
        name: "Me",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        text: "(If today passes, I might never get another chance. I texted back, \"I'll be there!\")",
        next: "day5_morning_ready"
    },

    // =========================================================================
    // 3-C. 기본 루트: 메시지 없음 (6 노드)
    // =========================================================================
    "day5_default_msg_start": {
        name: "Me",
        text: "*I turned on my phone... but there are no new messages.*",
        next: "day5_default_msg_scroll"
    },
    "day5_default_msg_scroll": {
        name: "Me",
        text: "*I scroll through my chat list. Conversations from the past few days stretch on and on.*",
        next: "day5_default_msg_reflect"
    },
    "day5_default_msg_reflect": {
        name: "Me",
        text: "*Since transferring, I've met so many people. Seoyeon, Yuna, Dain, the school nurse, the homeroom teacher...*",
        next: "day5_default_msg_reflect2"
    },
    "day5_default_msg_reflect2": {
        name: "Me",
        text: "*They were all so kind to me... but in the end, I never managed to properly tell any of them how I feel.*",
        next: "day5_default_msg_resolve"
    },
    "day5_default_msg_resolve": {
        name: "Me",
        text: "*...No, it's not over yet. Today is Sunday. If I go to school, maybe I'll run into someone.*",
        next: "day5_default_msg_decide"
    },
    "day5_default_msg_decide": {
        name: "Me",
        text: "*It's the last day. I'll at least take a walk around the school. Something might change.*",
        next: "day5_morning_ready"
    },

    // =========================================================================
    // 4. 외출 준비 - 복장 선택 / 아침 식사 / 점검 (8 노드)
    // =========================================================================
    "day5_morning_ready": {
        name: "Me",
        character: null,
        text: "*Time to get ready. I stood in front of my closet.*",
        next: "day5_morning_closet"
    },
    "day5_morning_closet": {
        name: "Me",
        character: null,
        text: "*It's Sunday, so I don't have to wear the school uniform... but what should I wear?*",
        next: "day5_outfit_choice"
    },
    "day5_outfit_choice": {
        name: "Me",
        character: null,
        text: "*What should I wear today?*",
        choices: [
            {
                text: "Clean casual *comfortable and natural*",
                next: "day5_outfit_casual",
                setFlag: "day5_outfit_casual"
            },
            {
                text: "A little dressed up *today's special, after all*",
                next: "day5_outfit_special",
                setFlag: "day5_outfit_special"
            }
        ]
    },
    "day5_outfit_casual": {
        name: "Me",
        character: null,
        text: "*A crisp shirt and jeans. Comfortable yet neat. Yeah, keeping it natural is more my style.*",
        next: "day5_breakfast"
    },
    "day5_outfit_special": {
        name: "Me",
        character: null,
        text: "*I picked my outfit more carefully than usual. One last check in the mirror. ...Looks good, I think.*",
        next: "day5_breakfast"
    },
    "day5_breakfast": {
        name: "Me",
        character: null,
        text: "*I made some quick toast and ate. A quiet kitchen on a Sunday morning. I can hear birds singing outside.*",
        next: "day5_outfit_check"
    },
    "day5_outfit_check": {
        name: "Me",
        character: null,
        text: "*One final look at myself in the mirror. My eyes are definitely different from the first day I transferred.*",
        next: "day5_morning_items"
    },
    "day5_morning_items": {
        name: "Me",
        character: null,
        text: "*Wallet, phone, keys. All set. I stood at the front door.*",
        next: "day5_morning_depart"
    },

    // =========================================================================
    // 5. 출발 → 등교길 루트 분기
    // =========================================================================
    "day5_morning_depart": {
        name: "Me",
        character: null,
        text: "*I opened the door and stepped outside. A pleasant spring breeze greeted me.*",
        background: "assets/images/background/street.png",
        fade: true,
        next: "day5_walk_route_branch"
    },
    "day5_walk_route_branch": {
        name: "System",
        background: "assets/images/background/street.png",
        text: "",
        branches: [
            { next: "day5_walk_couple_branch", condition: "day4_confession_accepted" },
            { next: "day5_walk_pending_start", condition: "day4_waited" },
            { next: "day5_walk_default_start" }
        ]
    },

    // =========================================================================
    // 5-A. 등교길 - 연인 루트 (22 노드)
    // =========================================================================
    "day5_walk_couple_branch": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_walk_couple_seoyeon", character: "Seoyeon", condition: "isDating_Seoyeon" },
            { next: "day5_walk_couple_yuna", character: "Yuna", condition: "isDating_Yuna" },
            { next: "day5_walk_couple_dain", character: "Dain", condition: "isDating_Dain" },
            { next: "day5_walk_couple_nurse", character: "Nurse", condition: "isDating_Nurse" },
            { next: "day5_walk_couple_teacher", character: "Teacher", condition: "isDating_Teacher" }
        ]
    },

    // --- Walking with Seoyeon ---
    "day5_walk_couple_seoyeon": {
        name: "Seoyeon",
        text: "\"Over here! Over here!!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day5_walk_seoyeon_2"
    },
    "day5_walk_seoyeon_2": {
        name: "Me",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "*Seoyeon was already there at our meeting spot. Standing in the sunlight, she looked radiant.*",
        next: "day5_walk_seoyeon_talk"
    },
    "day5_walk_seoyeon_talk": {
        name: "Seoyeon",
        text: "\"The weather's so nice today. Even nicer walking together. Did you know cherry blossoms bloom along this path in spring?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day5_walk_seoyeon_react"
    },
    "day5_walk_seoyeon_react": {
        name: "Me",
        character: "assets/images/characters/seyoun_normal.png",
        text: "*I walked side by side with Seoyeon. Without saying a word, our steps naturally fell in sync.*",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day5_walk_couple_common"
    },

    // --- Walking with Yuna ---
    "day5_walk_couple_yuna": {
        name: "Me",
        text: "*When I arrived at our meeting spot, Yuna was leaning against the wall. One earbud in her ear.*",
        character: "assets/images/characters/yuna_normal.png",
        next: "day5_walk_yuna_2"
    },
    "day5_walk_yuna_2": {
        name: "Yuna",
        text: "\"...You came.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day5_walk_yuna_talk"
    },
    "day5_walk_yuna_talk": {
        name: "Me",
        character: "assets/images/characters/yuna_normal.png",
        text: "*Yuna pulled out one earbud and held it out to me. No words needed—she wanted me to listen along.*",
        next: "day5_walk_yuna_react"
    },
    "day5_walk_yuna_react": {
        name: "Me",
        character: "assets/images/characters/yuna_normal.png",
        text: "*We shared the earbuds and walked side by side. No words, but this silence isn't uncomfortable. If anything, it's nice.*",
        stats: { Yuna: { affinity: 5 } },
        next: "day5_walk_couple_common"
    },

    // --- Walking with Dain ---
    "day5_walk_couple_dain": {
        name: "Dain",
        text: "\"Hey!! Over here!! Hurry up!!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day5_walk_dain_2"
    },
    "day5_walk_dain_2": {
        name: "Me",
        character: "assets/images/characters/dain_laugh.png",
        text: "*Dain was waving both arms from way over there. Where does she get all that energy this early in the morning?*",
        next: "day5_walk_dain_talk"
    },
    "day5_walk_dain_talk": {
        name: "Dain",
        text: "\"Going to school on a Sunday is kinda weird, but since I'm with you, it feels like a field trip! Let's go, let's go!!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day5_walk_dain_react"
    },
    "day5_walk_dain_react": {
        name: "Me",
        character: "assets/images/characters/dain_laugh.png",
        text: "*I walked along, pulled by Dain's hand. Before I knew it, I was smiling too. Her energy must be contagious.*",
        stats: { Dain: { affinity: 5 } },
        next: "day5_walk_couple_common"
    },

    // --- Walking with School Nurse ---
    "day5_walk_couple_nurse": {
        name: "Me",
        text: "*When I arrived at the meeting spot, she was standing there in casual clothes. She looks so different from how she does at school.*",
        character: "assets/images/characters/nurse_normal.png",
        next: "day5_walk_nurse_2"
    },
    "day5_walk_nurse_2": {
        name: "School Nurse",
        text: "\"You made it. Seeing you on the weekend feels different. You've only ever seen me in my lab coat, after all.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day5_walk_nurse_talk"
    },
    "day5_walk_nurse_talk": {
        name: "School Nurse",
        text: "\"If we go this way, it's a shortcut to school. ...It's also a path where nobody we know would see us.\"",
        character: "assets/images/characters/nurse_shy.png",
        next: "day5_walk_nurse_react"
    },
    "day5_walk_nurse_react": {
        name: "Me",
        character: "assets/images/characters/nurse_shy.png",
        text: "*The slightly shy look on her face was something new. Just walking side by side was enough to make my heart race.*",
        stats: { Nurse: { affinity: 5 } },
        next: "day5_walk_couple_common"
    },

    // --- Walking with Homeroom Teacher ---
    "day5_walk_couple_teacher": {
        name: "Me",
        text: "*When I arrived at the meeting spot, she was standing in casual clothes. A far cry from the strict teacher I see in the classroom.*",
        character: "assets/images/characters/teacher_normal.png",
        next: "day5_walk_teacher_2"
    },
    "day5_walk_teacher_2": {
        name: "Homeroom Teacher",
        text: "\"I thought you'd be late, but you're right on time. ...That's a compliment, by the way.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day5_walk_teacher_talk"
    },
    "day5_walk_teacher_talk": {
        name: "Homeroom Teacher",
        text: "\"This is the first time we've walked together on a weekend. ...It's different from school, isn't it? Right now, I'm not a teacher. I'm just... a person.\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "day5_walk_teacher_react"
    },
    "day5_walk_teacher_react": {
        name: "Me",
        character: "assets/images/characters/teacher_smile.png",
        text: "(\"Just a person.\" Those words made my chest feel warm. I've never seen her this honest before.)",
        stats: { Teacher: { affinity: 5 } },
        next: "day5_walk_couple_common"
    },

    // --- Couple Common ---
    "day5_walk_couple_common": {
        name: "Me",
        character: null,
        text: "*Walking side by side, we talked about everything that happened the past few days. How we first met, the funny moments, the times our hearts raced.*",
        next: "day5_walk_couple_common2"
    },
    "day5_walk_couple_common2": {
        name: "Me",
        character: null,
        text: "*Before I knew it, the school came into view. I thought I'd dread saying goodbye, but today marks the beginning of a day we're spending together.*",
        next: "day5_arrive_start"
    },

    // =========================================================================
    // 5-B. 등교길 - 보류 루트 (8 노드)
    // =========================================================================
    "day5_walk_pending_start": {
        name: "Me",
        text: "*I left the house and started walking toward school.*",
        next: "day5_walk_pending_think"
    },
    "day5_walk_pending_think": {
        name: "Me",
        text: "*I can't stop thinking about how I didn't confess yesterday. Today... today I absolutely will.*",
        next: "day5_walk_pending_plan"
    },
    "day5_walk_pending_plan": {
        name: "Me",
        text: "(What should I say? \"I like you\"? \"Will you go out with me\"? No, maybe I should just play it by ear...)",
        next: "day5_walk_pending_nervous"
    },
    "day5_walk_pending_nervous": {
        name: "Me",
        text: "*My hands are already trembling. With every step, my heart beats faster.*",
        next: "day5_walk_pending_resolve"
    },
    "day5_walk_pending_resolve": {
        name: "Me",
        text: "*It's okay. I have four days' worth of memories together. Those moments give me courage.*",
        next: "day5_walk_pending_memory"
    },
    "day5_walk_pending_memory": {
        name: "Me",
        text: "*The awkward greeting on the first day, laughing together at lunch, our after-school conversations... every moment was precious.*",
        next: "day5_walk_pending_ready"
    },
    "day5_walk_pending_ready": {
        name: "Me",
        text: "*Right. If I don't want any regrets, I have to say it today.*",
        next: "day5_walk_pending_almost"
    },
    "day5_walk_pending_almost": {
        name: "Me",
        text: "*The school is just up ahead. I took one deep breath.*",
        next: "day5_arrive_start"
    },

    // =========================================================================
    // 5-C. 등교길 - 기본 루트 (5 노드)
    // =========================================================================
    "day5_walk_default_start": {
        name: "Me",
        text: "*Walking alone on a Sunday morning. Normally, I'd still be in bed at this hour.*",
        next: "day5_walk_default_reflect"
    },
    "day5_walk_default_reflect": {
        name: "Me",
        text: "*Before I transferred, my Sunday mornings were nothing but lounging around at home.*",
        next: "day5_walk_default_change"
    },
    "day5_walk_default_change": {
        name: "Me",
        text: "*But now things have changed. I never thought the day would come when I'd actually want to go to school on a Sunday.*",
        next: "day5_walk_default_people"
    },
    "day5_walk_default_people": {
        name: "Me",
        text: "*Seoyeon's warmth, Yuna's mysteriousness, Dain's brightness, the school nurse's gentleness, the homeroom teacher's sincerity... They were all meaningful connections.*",
        next: "day5_walk_default_arrive"
    },
    "day5_walk_default_arrive": {
        name: "Me",
        text: "*The school building comes into view up ahead. The same scenery I saw on my very first day here.*",
        next: "day5_arrive_start"
    },

    // =========================================================================
    // 6. 학교 도착 - 공통 (4 노드)
    // =========================================================================
    "day5_arrive_start": {
        name: "Me",
        character: null,
        text: "*I stood in front of the school gate.*",
        background: "assets/images/background/school.png",
        next: "day5_arrive_nostalgia"
    },
    "day5_arrive_nostalgia": {
        name: "Me",
        background: "assets/images/background/school.png",
        character: null,
        text: "*This gate... Five days ago, when I first came to this school, I stood in this exact spot.*",
        next: "day5_arrive_firstday"
    },
    "day5_arrive_firstday": {
        name: "Me",
        background: "assets/images/background/school.png",
        character: null,
        text: "*Back then, everything was unfamiliar. A new school, a new classroom, faces I didn't recognize. I was so nervous my feet wouldn't move.*",
        next: "day5_arrive_now"
    },
    "day5_arrive_now": {
        name: "Me",
        background: "assets/images/background/school.png",
        character: null,
        text: "*Now it's different. There are people I know here, and a place I can come back to. I walked past the gate and headed inside.*",
        fade: true,
        next: "day5_school_arrive"
    }
});
