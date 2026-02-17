/**
 * ============================================================================
 * CUPID - Day 5 Lunch Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day5_2_lunch.js
 * 언어: English
 * 일차: Day 5 (5일차 - 일요일)
 * 시간대: Lunch (점심 - 학교에서의 재회와 추억)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 주말 학교 정문에서 호감도가 가장 높은 히로인과 재회한다.
 * 함께 학교를 걸으며 처음 만났던 장소들을 다시 방문하고,
 * 옥상에서 미래에 대한 대화를 나누고 간단한 점심을 함께한다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 학교 정문 도착 - 전학 첫날의 추억
 * 2. 히로인과의 재회 - 호감도 최고 캐릭터 분기
 * 3. 학교 산책 - 복도, 교실, 캐릭터별 추억 장소
 * 4. 옥상 방문 - 풍경과 미래에 대한 대화
 * 5. 함께하는 점심 - 옥상에서의 식사와 특별한 순간
 * 6. 오후로의 전환 - 다가오는 중요한 순간의 예감
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
 * met_Seoyeon / met_Yuna / met_Dain / met_Nurse / met_Teacher
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 복도 추억 회상: 전체 히로인 +3
 * 캐릭터별 추억 장소: 해당 히로인 +3
 * 옥상 깊은 대화: 해당 히로인 +5
 * 점심 특별한 순간: 해당 히로인 +5
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
    // 1. 학교 정문 도착 (4 노드)
    // =========================================================================
    "day5_school_arrive": {
        name: "Me",
        text: "(I walk through the school gate. The school is quiet on a Sunday.)",
        background: "assets/images/background/school.png",
        bgm: "date.mp3",
        next: "day5_school_arrive2"
    },
    "day5_school_arrive2": {
        name: "Me",
        background: "assets/images/background/school.png",
        text: "(This week went by so fast. I can't believe it's already the last day... The trees in the schoolyard sway gently in the breeze.)",
        next: "day5_school_arrive3"
    },
    "day5_school_arrive3": {
        name: "Me",
        background: "assets/images/background/school.png",
        text: "(It was only a few days ago, but it feels like ages. I was so nervous and anxious back then. Look how much has changed now.)",
        next: "day5_school_arrive4"
    },
    "day5_school_arrive4": {
        name: "Me",
        background: "assets/images/background/school.png",
        text: "(Looking back, someone is walking from afar. A familiar figure.)",
        next: "day5_school_meet"
    },

    // =========================================================================
    // 2. 히로인과의 재회 - 호감도 분기 (16 노드)
    // =========================================================================
    "day5_school_meet": {
        name: "System",
        background: "assets/images/background/school.png",
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

    // --- 서연 등장 ---
    "day5_meet_seoyeon": {
        name: "Seoyeon",
        text: "\"This is where we first met, right? You looked like a lost puppy back then, hehe.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day5_meet_seoyeon2"
    },
    "day5_meet_seoyeon2": {
        name: "Seoyeon",
        text: "\"But now... you seem different. There's a sense of ease about you. It's a nice change.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day5_react_seoyeon"
    },
    "day5_react_seoyeon": {
        name: "Me",
        character: "assets/images/characters/seyoun_normal.png",
        text: "(Seeing Seoyeon's smiling face makes my heart feel warm. She was the first person to reach out to me at this school.)",
        next: "day5_seoyeon_d4_check"
    },
    "day5_seoyeon_d4_check": {
        name: "System",
        text: "",
        background: "assets/images/background/school.png",
        branches: [
            { next: "day5_seoyeon_d4_warmth", condition: "day4_hugged_seoyeon" },
            { next: "day5_seoyeon_d4_warmth_pinky", condition: "day4_pinky_seoyeon" },
            { next: "day5_outfit_reaction_check" }
        ]
    },
    "day5_seoyeon_d4_warmth": {
        name: "Seoyeon",
        text: "\"...You know, when you hugged me last night... I was really grateful. It gave me courage.\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day5_outfit_reaction_check"
    },
    "day5_seoyeon_d4_warmth_pinky": {
        name: "Seoyeon",
        text: "\"The pinky promise from last night... my fingertip still feels warm. Please keep your promise, okay?\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day5_outfit_reaction_check"
    },

    // --- 유나 등장 ---
    "day5_meet_yuna": {
        name: "Yuna",
        text: "\"...Here. Do you remember when we first met? ...I do.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day5_meet_yuna2"
    },
    "day5_meet_yuna2": {
        name: "Yuna",
        text: "\"...When you were standing at the gate, you looked lonely. ...I was the same way, so I could tell.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day5_react_yuna"
    },
    "day5_react_yuna": {
        name: "Me",
        character: "assets/images/characters/yuna_smile.png",
        text: "(This is the first time Yuna has said so much. Does that mean today is a special day for her too?)",
        next: "day5_yuna_d4_check"
    },
    "day5_yuna_d4_check": {
        name: "System",
        text: "",
        background: "assets/images/background/school.png",
        branches: [
            { next: "day5_yuna_d4_warmth", condition: "day4_held_yuna_hand" },
            { next: "day5_yuna_d4_warmth_ally", condition: "day4_yuna_ally" },
            { next: "day5_outfit_reaction_check" }
        ]
    },
    "day5_yuna_d4_warmth": {
        name: "Yuna",
        text: "\"...Thank you for holding my hand last night. ...It was warm.\"",
        character: "assets/images/characters/yuna_shy.png",
        stats: { Yuna: { affinity: 3 } },
        next: "day5_outfit_reaction_check"
    },
    "day5_yuna_d4_warmth_ally": {
        name: "Yuna",
        text: "\"...For taking my side yesterday. ...I won't forget it.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 3 } },
        next: "day5_outfit_reaction_check"
    },

    // --- 다인 등장 ---
    "day5_meet_dain": {
        name: "Dain",
        text: "\"Hey! Being at the school gate reminds me of the first day!! Do you remember when I hit you with the volleyball?!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day5_meet_dain2"
    },
    "day5_meet_dain2": {
        name: "Dain",
        text: "\"I felt so bad about it, but looking back, maybe it was fate! If I hadn't hit you, I never would've talked to you!!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day5_react_dain"
    },
    "day5_react_dain": {
        name: "Me",
        character: "assets/images/characters/dain_normal.png",
        text: "(Getting hit by that volleyball did hurt... but if it's how I met Dain, maybe I should be grateful.)",
        next: "day5_dain_d4_check"
    },
    "day5_dain_d4_check": {
        name: "System",
        text: "",
        background: "assets/images/background/school.png",
        branches: [
            { next: "day5_dain_d4_warmth", condition: "day4_dain_tears" },
            { next: "day5_outfit_reaction_check" }
        ]
    },
    "day5_dain_d4_warmth": {
        name: "Dain",
        text: "\"...Me crying yesterday is a SECRET!! But... I'm glad I could cry in front of you.\"",
        character: "assets/images/characters/dain_shy.png",
        stats: { Dain: { affinity: 3 } },
        next: "day5_outfit_reaction_check"
    },

    // --- 보건선생님 등장 ---
    "day5_meet_nurse": {
        name: "School Nurse",
        text: "\"Coming to school on a weekend feels strange. Meeting you at this school... was it destiny, I wonder.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day5_meet_nurse2"
    },
    "day5_meet_nurse2": {
        name: "School Nurse",
        text: "\"When you came to the nurse's office on your first day, your nervous face was so cute. You've matured a lot since then.\"",
        character: "assets/images/characters/nurse_shy.png",
        next: "day5_react_nurse"
    },
    "day5_react_nurse": {
        name: "Me",
        character: "assets/images/characters/nurse_shy.png",
        text: "(Seeing her in casual clothes feels unfamiliar yet exciting. I had no idea she looked this beautiful underneath that usual lab coat.)",
        next: "day5_outfit_reaction_check"
    },

    // --- 담임선생님 등장 ---
    "day5_meet_teacher": {
        name: "Homeroom Teacher",
        text: "\"Ha, coming to school on a weekend is weird. But... being here with you, it's not so bad.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day5_meet_teacher2"
    },
    "day5_meet_teacher2": {
        name: "Homeroom Teacher",
        text: "\"When I first saw you in the staff room on your transfer day, your eyes looked so anxious. Now you seem like a completely different person.\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "day5_react_teacher"
    },
    "day5_react_teacher": {
        name: "Me",
        character: "assets/images/characters/teacher_smile.png",
        text: "(Getting a compliment from her is so rare that it makes me even happier. She has such a soft expression today too.)",
        next: "day5_outfit_reaction_check"
    },

    // =========================================================================
    // 2b. Outfit Reaction Check (2 nodes)
    // =========================================================================
    "day5_outfit_reaction_check": {
        name: "System",
        text: "",
        background: "assets/images/background/school.png",
        branches: [
            { next: "day5_outfit_compliment", condition: "day5_outfit_special" },
            { next: "day5_walk_together" }
        ]
    },
    "day5_outfit_compliment": {
        name: "Me",
        text: "(They look me up and down, eyes widening. \"Why do you look so nice today?\" The small compliment makes my heart flutter.)",
        background: "assets/images/background/school.png",
        next: "day5_walk_together"
    },

    // =========================================================================
    // 3. 학교 산책 - 복도 (4 노드)
    // =========================================================================
    "day5_walk_together": {
        name: "Me",
        character: null,
        text: "\"Want to go inside? There are a lot of places with memories here.\"",
        next: "day5_walk_enter"
    },
    "day5_walk_enter": {
        name: "Me",
        character: null,
        text: "(We walked into the school side by side. The school is empty on a Sunday, so only our footsteps echo through the halls.)",
        background: "assets/images/background/school_hallway.png",
        next: "day5_corridor1"
    },
    "day5_corridor1": {
        name: "Me",
        background: "assets/images/background/school_hallway.png",
        character: null,
        text: "(This hallway... On my first day as a transfer student, I wandered here trying to find my classroom. I couldn't bring myself to move, not knowing where to go.)",
        next: "day5_corridor2"
    },
    "day5_corridor2": {
        name: "Me",
        background: "assets/images/background/school_hallway.png",
        character: null,
        text: "(Someone spoke to me in this hallway back then. That small act of kindness led to everything that followed.)",
        next: "day5_classroom_enter"
    },

    // =========================================================================
    // 3. 학교 산책 - 교실 (4 노드)
    // =========================================================================
    "day5_classroom_enter": {
        name: "Me",
        character: null,
        text: "(I opened the classroom door. Sunlight streams in at an angle, painting the desks in a golden glow.)",
        background: "assets/images/background/room_school.png",
        next: "day5_classroom1"
    },
    "day5_classroom1": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(My seat. The same seat I first sat in when I transferred here is still here. I sat down in it for a moment.)",
        next: "day5_classroom2"
    },
    "day5_classroom2": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(Looking up at the blackboard from this seat... Ah, it's the same angle as back then. Somehow, it feels comforting.)",
        next: "day5_classroom3"
    },
    "day5_classroom3": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"A lot happened in this classroom. Getting caught dozing off during class, passing notes around...\"",
        next: "day5_classroom_react"
    },

    // =========================================================================
    // 3. 학교 산책 - 교실 반응 분기 (5 노드)
    // =========================================================================
    "day5_classroom_react": {
        name: "System",
        background: "assets/images/background/room_school.png",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_classroom_seoyeon", character: "Seoyeon" },
            { next: "day5_classroom_yuna", character: "Yuna" },
            { next: "day5_classroom_dain", character: "Dain" },
            { next: "day5_classroom_nurse", character: "Nurse" },
            { next: "day5_classroom_teacher", character: "Teacher" }
        ]
    },
    "day5_classroom_seoyeon": {
        name: "Seoyeon",
        text: "\"Yeah. When you first introduced yourself, I already thought 'This person seems nice.' Call it the student council president's intuition.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day5_memory_spot_suggest"
    },
    "day5_classroom_yuna": {
        name: "Yuna",
        text: "\"...Our eyes met here for the first time. I was looking out the window... and when you looked at me, my heart skipped a beat.\"",
        character: "assets/images/characters/yuna_shy.png",
        next: "day5_memory_spot_suggest"
    },
    "day5_classroom_dain": {
        name: "Dain",
        text: "\"We used to stretch in here before gym class!! You were so inflexible back then, lol. Has it gotten any better?\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day5_memory_spot_suggest"
    },
    "day5_classroom_nurse": {
        name: "School Nurse",
        text: "\"When I came for a class observation, I noticed you kept looking toward the nurse's office window, you know? Hehe.\"",
        character: "assets/images/characters/nurse_shy.png",
        next: "day5_memory_spot_suggest"
    },
    "day5_classroom_teacher": {
        name: "Homeroom Teacher",
        text: "\"Every day in this classroom, I called your name during roll call. Just when I was getting used to it... it's already the end.\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "day5_memory_spot_suggest"
    },

    // =========================================================================
    // 3. 학교 산책 - 캐릭터별 추억 장소 (5 캐릭터 × 2 = 10 노드)
    // =========================================================================
    "day5_memory_spot_suggest": {
        name: "Me",
        character: null,
        text: "\"Is there anywhere you'd like to go? Let's look around some more.\"",
        next: "day5_memory_spot_branch"
    },
    "day5_memory_spot_branch": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_memory_seoyeon", character: "Seoyeon" },
            { next: "day5_memory_yuna", character: "Yuna" },
            { next: "day5_memory_dain", character: "Dain" },
            { next: "day5_memory_nurse", character: "Nurse" },
            { next: "day5_memory_teacher", character: "Teacher" }
        ]
    },

    // --- 서연: 정원 / 화단 ---
    "day5_memory_seoyeon": {
        name: "Seoyeon",
        text: "\"Oh! Wait, let's go to the garden. Remember the flower bed I used to water every day?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        background: "assets/images/background/park.png",
        next: "day5_memory_seoyeon2"
    },
    "day5_memory_seoyeon2": {
        name: "Seoyeon",
        background: "assets/images/background/park.png",
        text: "\"Look, all the flowers I planted have bloomed. You helped me water them the first time you came here. That's when I... started to feel something.\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day5_memory_common"
    },

    // --- 유나: 도서관 구역 ---
    "day5_memory_yuna": {
        name: "Yuna",
        text: "\"...Wait. Can we go over there? The library.\"",
        character: "assets/images/characters/yuna_normal.png",
        background: "assets/images/background/library_old.png",
        next: "day5_memory_yuna2"
    },
    "day5_memory_yuna2": {
        name: "Yuna",
        background: "assets/images/background/library_old.png",
        text: "\"...This is where you first sat next to me. When you asked me about the book title... I was surprised. Nobody had ever talked to me before.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 3 } },
        next: "day5_memory_common"
    },

    // --- 다인: 체육관 ---
    "day5_memory_dain": {
        name: "Dain",
        text: "\"Wait!! Let's go to the gym!! That's where the whole thing started on the first day!!\"",
        character: "assets/images/characters/dain_laugh.png",
        background: "assets/images/background/gym.png",
        next: "day5_memory_dain2"
    },
    "day5_memory_dain2": {
        name: "Dain",
        background: "assets/images/background/gym.png",
        text: "\"I was practicing volleyball here and the ball went flying... and hit you right in the face! Sorry, haha! But I was grateful you didn't get mad.\"",
        character: "assets/images/characters/dain_shy.png",
        stats: { Dain: { affinity: 3 } },
        next: "day5_memory_common"
    },

    // --- 보건선생님: 보건실 ---
    "day5_memory_nurse": {
        name: "School Nurse",
        text: "\"Shall we stop by the nurse's office? I vividly remember the day you first came.\"",
        character: "assets/images/characters/nurse_normal.png",
        background: "assets/images/background/nurse_room.jpg",
        next: "day5_memory_nurse2"
    },
    "day5_memory_nurse2": {
        name: "School Nurse",
        background: "assets/images/background/nurse_room.jpg",
        text: "\"On your first day, you came in saying you had a headache because you were so nervous. When I put my hand on your forehead... your face turned bright red, hehe.\"",
        character: "assets/images/characters/nurse_shy.png",
        stats: { Nurse: { affinity: 3 } },
        next: "day5_memory_common"
    },

    // --- 담임선생님: 교탁 ---
    "day5_memory_teacher": {
        name: "Homeroom Teacher",
        text: "\"Wait. Stand in front of the podium. That's where you introduced yourself on your first day.\"",
        character: "assets/images/characters/teacher_normal.png",
        background: "assets/images/background/room_school.png",
        next: "day5_memory_teacher2"
    },
    "day5_memory_teacher2": {
        name: "Homeroom Teacher",
        background: "assets/images/background/room_school.png",
        text: "\"Your voice was trembling so much back then... I was thinking to myself, 'This kid, I'm a bit worried about him.' But you've really changed since then.\"",
        character: "assets/images/characters/teacher_smile.png",
        stats: { Teacher: { affinity: 3 } },
        next: "day5_memory_common"
    },

    // =========================================================================
    // 3. 학교 산책 - 공통 추억 마무리 (2 노드)
    // =========================================================================
    "day5_memory_common": {
        name: "Me",
        background: "assets/images/background/school.png",
        character: null,
        text: "(Memories of this place well up from deep within my heart. I knew nothing at first, but each passing day built up to who I am now.)",
        next: "day5_memory_common2"
    },
    "day5_memory_common2": {
        name: "Me",
        background: "assets/images/background/school.png",
        character: null,
        text: "(Every place holds a memory, and in every memory, this person was always there. I know what that means now.)",
        next: "day5_rooftop_suggest"
    },

    // =========================================================================
    // 4. 옥상 방문 - 올라가기 (3 노드)
    // =========================================================================
    "day5_rooftop_suggest": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"Hey... want to go up to the rooftop? The weather's nice today, and the view from up there should be great.\"",
        next: "day5_rooftop_stairs1"
    },
    "day5_rooftop_stairs1": {
        name: "Me",
        background: "assets/images/background/school_hallway.png",
        character: null,
        text: "(We climb the stairs. Two sets of footsteps echo through the empty stairwell. One floor, two floors.)",
        next: "day5_rooftop_stairs2"
    },
    "day5_rooftop_stairs2": {
        name: "Me",
        background: "assets/images/background/school_hallway.png",
        character: null,
        text: "(We reached the top of the last staircase and stood before the rooftop door. A breeze slips through the gap in the door.)",
        next: "day5_rooftop_door"
    },

    // =========================================================================
    // 4. 옥상 방문 - 풍경 (3 노드)
    // =========================================================================
    "day5_rooftop_door": {
        name: "Me",
        character: null,
        text: "(Creak. The rooftop door swings open to reveal a wide-open sky. A pleasant breeze greets us.)",
        background: "assets/images/background/top_school.png",
        next: "day5_rooftop_view1"
    },
    "day5_rooftop_view1": {
        name: "Me",
        background: "assets/images/background/top_school.png",
        character: null,
        text: "(Wow... Was the view from up here always this beautiful? The school grounds, the rooftops stretching into the distance, the streets we walked earlier.)",
        next: "day5_rooftop_view2"
    },
    "day5_rooftop_view2": {
        name: "Me",
        background: "assets/images/background/top_school.png",
        character: null,
        text: "(Or maybe... it feels this beautiful because of the person standing beside me.)",
        next: "day5_rooftop_lean"
    },

    // =========================================================================
    // 4. 옥상 - 난간에서 (2 노드)
    // =========================================================================
    "day5_rooftop_lean": {
        name: "Me",
        background: "assets/images/background/top_school.png",
        character: null,
        text: "(We leaned against the railing side by side. The wind tousles our hair.)",
        next: "day5_rooftop_silence"
    },
    "day5_rooftop_silence": {
        name: "Me",
        background: "assets/images/background/top_school.png",
        character: null,
        text: "(For a while, we just gazed at the scenery in silence. Strangely, the silence doesn't feel awkward. With this person, words aren't always necessary.)",
        next: "day5_rooftop_talk_branch"
    },

    // =========================================================================
    // 4. 옥상 - 미래에 대한 깊은 대화 (캐릭터별 분기, 5 × 1 = 5 노드)
    // =========================================================================
    "day5_rooftop_talk_branch": {
        name: "System",
        background: "assets/images/background/top_school.png",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_rooftop_seoyeon", character: "Seoyeon" },
            { next: "day5_rooftop_yuna", character: "Yuna" },
            { next: "day5_rooftop_dain", character: "Dain" },
            { next: "day5_rooftop_nurse", character: "Nurse" },
            { next: "day5_rooftop_teacher", character: "Teacher" }
        ]
    },

    // --- 서연과의 옥상 대화 ---
    "day5_rooftop_seoyeon": {
        name: "Seoyeon",
        text: "\"I have a dream. Even after graduating from this school, I want to be someone who works for others. Being on the student council made me think about that even more.\"",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day5_rooftop_future_talk"
    },

    // --- 유나와의 옥상 대화 ---
    "day5_rooftop_yuna": {
        name: "Yuna",
        text: "\"...I want to write. I can say things in writing that I can't say to people. ...I'd like it if you read what I write.\"",
        character: "assets/images/characters/yuna_shy.png",
        stats: { Yuna: { affinity: 5 } },
        next: "day5_rooftop_future_talk"
    },

    // --- 다인과의 옥상 대화 ---
    "day5_rooftop_dain": {
        name: "Dain",
        text: "\"You know what, I want to become a pro athlete! Compete in nationals, win the championship, be on TV! ...But sometimes I get scared. Like, can I really do it?\"",
        character: "assets/images/characters/dain_sad.png",
        stats: { Dain: { affinity: 5 } },
        next: "day5_rooftop_future_talk"
    },

    // --- 보건선생님과의 옥상 대화 ---
    "day5_rooftop_nurse": {
        name: "School Nurse",
        text: "\"At first, I wanted to be a hospital nurse. But after taking care of the kids at school, I felt like this is where I belong. ...And this is where I met you, too.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day5_rooftop_future_talk"
    },

    // --- 담임선생님과의 옥상 대화 ---
    "day5_rooftop_teacher": {
        name: "Homeroom Teacher",
        text: "\"When I first became a teacher, I had no confidence. But meeting students like you... honestly, it makes me feel like I made the right choice.\"",
        character: "assets/images/characters/teacher_shy.png",
        stats: { Teacher: { affinity: 5 } },
        next: "day5_rooftop_future_talk"
    },

    // =========================================================================
    // 4. 옥상 - 주인공의 감정과 응답 (3 노드)
    // =========================================================================
    "day5_rooftop_future_talk": {
        name: "Me",
        character: null,
        text: "\"Me too... honestly, before I transferred here, I didn't have the luxury to think about the future. It felt like I was just getting through each day.\"",
        next: "day5_rooftop_feeling1"
    },
    "day5_rooftop_feeling1": {
        name: "Me",
        character: null,
        text: "\"But things changed after I came here. I started looking forward to tomorrow. Meeting people became fun... and coming to school every day made me happy.\"",
        next: "day5_rooftop_feeling2"
    },
    "day5_rooftop_feeling2": {
        name: "Me",
        character: null,
        text: "(That's all... because of the person beside me. I can't put it all into words just yet, but someday, I will.)",
        next: "day5_lunch_suggest"
    },

    // =========================================================================
    // 5. 함께하는 점심 - 시작 (3 노드)
    // =========================================================================
    "day5_lunch_suggest": {
        name: "Me",
        character: null,
        text: "\"Are you hungry? I picked some things up from the convenience store earlier. Want to eat up here?\"",
        next: "day5_lunch_setup"
    },
    "day5_lunch_setup": {
        name: "Me",
        character: null,
        text: "(I pulled out some rice balls and drinks from my bag. It's a simple meal, but with this view, anything would feel special.)",
        next: "day5_lunch_sit"
    },
    "day5_lunch_sit": {
        name: "Me",
        character: null,
        text: "(We sat down side by side against the shaded wall near the railing. The concrete floor is a bit cold, but the warmth beside me makes up for it.)",
        next: "day5_lunch_eat1"
    },

    // =========================================================================
    // 5. 함께하는 점심 - 대화 (5 노드)
    // =========================================================================
    "day5_lunch_eat1": {
        name: "Me",
        character: null,
        text: "(I took a bite of the rice ball. It's just a simple convenience store rice ball, but today it tastes especially good.)",
        next: "day5_lunch_talk1"
    },
    "day5_lunch_talk1": {
        name: "Me",
        character: null,
        text: "\"You know, eating up here on the rooftop feels like we're on a picnic.\"",
        next: "day5_lunch_talk2"
    },
    "day5_lunch_talk2": {
        name: "Me",
        character: null,
        text: "(I heard a soft laugh from beside me. That laughter drifted away on the breeze, carried off somewhere far.)",
        next: "day5_lunch_talk3"
    },
    "day5_lunch_talk3": {
        name: "Me",
        character: null,
        text: "\"Before I transferred here, eating alone was just normal for me. In the classroom, at home. I thought I was fine with it.\"",
        next: "day5_lunch_talk4"
    },
    "day5_lunch_talk4": {
        name: "Me",
        character: null,
        text: "\"But now... I realize for the first time how nice it is to eat with someone.\"",
        next: "day5_lunch_moment_branch"
    },

    // =========================================================================
    // 5. 함께하는 점심 - 캐릭터별 특별한 순간 (5 × 2 = 10 노드)
    // =========================================================================
    "day5_lunch_moment_branch": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_lunch_moment_seoyeon", character: "Seoyeon" },
            { next: "day5_lunch_moment_yuna", character: "Yuna" },
            { next: "day5_lunch_moment_dain", character: "Dain" },
            { next: "day5_lunch_moment_nurse", character: "Nurse" },
            { next: "day5_lunch_moment_teacher", character: "Teacher" }
        ]
    },

    // --- 서연 특별한 순간 ---
    "day5_lunch_moment_seoyeon": {
        name: "Seoyeon",
        text: "\"Same here. I was always so busy with student council work that I just ate alone. But eating with you... it feels like time slows down.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day5_lunch_touch_seoyeon"
    },
    "day5_lunch_touch_seoyeon": {
        name: "Me",
        text: "(Seoyeon gently rested her head on my shoulder. Her cheeks flushed red. I feel like my heart is going to stop.)",
        character: "assets/images/characters/seyoun_shy2.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day5_lunch_after"
    },

    // --- 유나 특별한 순간 ---
    "day5_lunch_moment_yuna": {
        name: "Yuna",
        text: "\"...Me too. I thought eating alone was comfortable... but when I'm next to you, the food tastes better.\"",
        character: "assets/images/characters/yuna_shy.png",
        next: "day5_lunch_touch_yuna"
    },
    "day5_lunch_touch_yuna": {
        name: "Me",
        text: "(Yuna's hand quietly slid over mine. Her cold fingertips slowly grew warmer. I held her hand in mine.)",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 5 } },
        next: "day5_lunch_after"
    },

    // --- 다인 특별한 순간 ---
    "day5_lunch_moment_dain": {
        name: "Dain",
        text: "\"When I eat alone, I always eat super fast! But when I'm with you, I eat slowly. Isn't that weird...?\"",
        character: "assets/images/characters/dain_shy.png",
        next: "day5_lunch_touch_dain"
    },
    "day5_lunch_touch_dain": {
        name: "Me",
        text: "(Dain suddenly grabbed my arm tightly. \"Hey, don't go all quiet on me, it makes me worry!\" she said, but she didn't let go.)",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 5 } },
        next: "day5_lunch_after"
    },

    // --- 보건선생님 특별한 순간 ---
    "day5_lunch_moment_nurse": {
        name: "School Nurse",
        text: "\"As you grow up, moments like these become fewer and fewer. That's why... this moment right now is all the more precious.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day5_lunch_touch_nurse"
    },
    "day5_lunch_touch_nurse": {
        name: "Me",
        text: "(She pressed the drink can gently against my cheek. \"Cold, isn't it?\" she said with a smile brighter than the sunlight.)",
        character: "assets/images/characters/nurse_shy.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day5_lunch_after"
    },

    // --- 담임선생님 특별한 순간 ---
    "day5_lunch_moment_teacher": {
        name: "Homeroom Teacher",
        text: "\"This is my first time eating with a student like this. As a teacher, it's a bit... but today, I just want to be here as a person.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day5_lunch_touch_teacher"
    },
    "day5_lunch_touch_teacher": {
        name: "Me",
        text: "(She smiled and gently brushed her hand over my hair. Her usual strictness was nowhere to be found—only a warm, tender touch remained.)",
        character: "assets/images/characters/teacher_shy.png",
        stats: { Teacher: { affinity: 5 } },
        next: "day5_lunch_after"
    },

    // =========================================================================
    // 5. 점심 마무리 (2 노드)
    // =========================================================================
    "day5_lunch_after": {
        name: "Me",
        character: null,
        text: "(I finished the last of my drink. The cold can had already turned lukewarm in my hands. Time passed so quickly.)",
        next: "day5_lunch_cleanup"
    },
    "day5_lunch_cleanup": {
        name: "Me",
        character: null,
        text: "(I gathered the trash and tidied up. On the rooftop floor, a sunlit imprint remained where we had been sitting.)",
        next: "day5_pre_afternoon1"
    },

    // =========================================================================
    // 6. 오후 전환 시퀀스 (4 노드)
    // =========================================================================
    "day5_pre_afternoon1": {
        name: "Me",
        character: null,
        text: "(The sun has begun to pass its peak. The shadows are shorter than before.)",
        next: "day5_pre_afternoon2"
    },
    "day5_pre_afternoon2": {
        name: "Me",
        character: null,
        text: "(There's still time left today. No... more precisely, there are still words left unsaid.)",
        next: "day5_pre_afternoon3"
    },
    "day5_pre_afternoon3": {
        name: "Me",
        character: null,
        text: "(Something stirs deep inside my chest. This is a sign... that the time to gather my courage is approaching.)",
        next: "day5_pre_afternoon4"
    },
    "day5_pre_afternoon4": {
        name: "Me",
        character: null,
        text: "(To the person standing beside me. Today, there are feelings I absolutely must convey.)",
        fade: true,
        next: "day5_afternoon_start"
    }
});
