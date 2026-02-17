/**
 * ============================================================================
 * CUPID - Day 2 Morning Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day2_1_morning.js
 * 언어: English
 * 일차: Day 2 (2일차)
 * 시간대: Morning (아침)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 전학 이틀째 아침의 풍경을 다룹니다.
 * 교문 앞에서 어제 만났던 히로인들 중 가장 호감도가 높거나 조건이 맞는 캐릭터와 
 * 조우하며, 교실에서 유나가 보낸 의문의 쪽지를 발견하게 됩니다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 아침 기상 및 등교 - 2일차의 설렘과 학교 정문 도착
 * 2. 히로인과의 재회 (Highest Affinity) - 호감도가 가장 높은 히로인과 조우
 * 3. 등굣길 대화 - 어젯밤 메시지 전송 여부에 따른 차별화된 대화 전개
 * 4. 교실 입장 및 쪽지 발견 - 유나가 보낸 '도서관 별관 뒤뜰' 호출 쪽지 확인
 * 5. 수업 시간 독백 - 유나의 정체와 쪽지 내용에 대한 주인공의 생각
 * 
 *  조건 플래그 설명 (Condition Flags)
 * ----------------------------------------------------------------------------
 * met_*                : 어제 해당 히로인을 만났는지 여부 (조우 우선순위 결정)
 * sent_msg_day1_*      : 어젯밤 해당 히로인에게 메시지를 보냈는지 여부 (대사 분기)
 * has_number_*         : 해당 히로인의 연락처를 가지고 있는지 여부 (대사 분기)
 * dated_dain_day1      : 다인과 함께 떡볶이를 먹었는지 여부
 * 
 *  설정 플래그 설명 (Set Flags)
 * ----------------------------------------------------------------------------
 * has_number_teacher   : 담임 선생님과 등교하며 대화 후 연락처 획득 시 설정
 * has_any_contact      : 담임 선생님 연락처 획득 시 설정
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 보건샘 (Nurse)        : 아침 인사 및 옷매무새 정리 중 +5
 * 서연 (Seoyeon)        : 아침 대화 및 등굣길 반응에 따라 +5
 * 다인 (Dain)           : 재회 인사 및 반응에 따라 +5
 * 담임 (Teacher)        : 연락처 교환 성공 여부에 따라 +10 ~ +15
 * 
 *  특이 사항
 * ----------------------------------------------------------------------------
 * - selectByHighestAffinity: true - 조건이 맞는 캐릭터 중 호감도가 높은 대상 자동 선택
 * 
 * ============================================================================
 */

// SCENARIO 전역 객체 초기화
if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}

// Day 2 시나리오 그룹 초기화
if (!SCENARIO[2]) {
    SCENARIO[2] = {};
}

/**
 * [Day 2 - Morning] 씬 데이터 정의
 */
Object.assign(SCENARIO[2], {

    // =========================================================================
    // 아침 기상 시퀀스 (Wake-up Sequence) - day2_start ~ day2_school_gate
    // =========================================================================

    "day2_start": {
        name: "Me",
        text: "(The moment I open my eyes, the faces I met yesterday flash through my mind. The morning of my second day at the new school — I woke up before the alarm, probably because of the excitement.)",
        background: "assets/images/background/room_my.png",
        bgm: "intro.mp3",
        character: null,
        next: "day2_start_2"
    },
    "day2_start_2": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(Yesterday feels as sweet as a dream... but the school uniform on my desk reminds me this is reality. I have a feeling something good will happen today too.)",
        next: "day2_morning_phone"
    },

    // --- 아침 스마트폰 확인 ---
    "day2_morning_phone": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(I pick up the smartphone beside my bed. Maybe someone sent me a message overnight... I check the screen.)",
        next: "day2_morning_phone_2"
    },
    "day2_morning_phone_2": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(No messages. Was I hoping for nothing...? But I'll see everyone at school today anyway. I get out of bed, filled with anticipation.)",
        next: "day2_morning_routine"
    },

    // --- 아침 준비 ---
    "day2_morning_routine": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(I wash my face and stand in front of the mirror. I think I look a bit better than yesterday. I change into my uniform and fix my hair.)",
        next: "day2_morning_routine_2"
    },
    "day2_morning_routine_2": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(My reflection in the uniform looks a little more familiar now. I retie my necktie and straighten my collar.)",
        next: "day2_breakfast"
    },

    // --- 아침식사 ---
    "day2_breakfast": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(I come down to the kitchen and find rice and a fried egg on the table. Mom must have already left for work. Eating alone, but somehow I don't feel lonely today.)",
        next: "day2_breakfast_2"
    },
    "day2_breakfast_2": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(I scarf down breakfast and grab my bag. Checking the clock, I have plenty of time. I can take a leisurely walk to school.)",
        next: "day2_start_3"
    },

    "day2_start_3": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(Alright, let's go. I wonder what kind of excitement awaits me today?)",
        next: "day2_road_to_school"
    },

    // --- 등굣길 풍경 ---
    "day2_road_to_school": {
        name: "Me",
        text: "(Stepping outside, the fresh morning air fills my lungs. A softer breeze than yesterday blows by. It smells like spring.)",
        background: "assets/images/background/street.png",
        next: "day2_road_to_school_2"
    },
    "day2_road_to_school_2": {
        name: "Me",
        background: "assets/images/background/street.png",
        text: "(Students in the same uniform walk toward school in small groups. Yesterday it all felt so unfamiliar, but today it somehow feels welcoming.)",
        next: "day2_road_to_school_3"
    },
    "day2_road_to_school_3": {
        name: "Me",
        background: "assets/images/background/street.png",
        text: "(Across the street, a few students from our school glance my way and whisper. I can hear 'Oh, it's the transfer student!' carried by the wind. Looks like I'm still the hot topic.)",
        next: "day2_school_gate"
    },

    // =========================================================================
    // 교문 앞 (School Gate)
    // =========================================================================

    "day2_school_gate": {
        name: "Me",
        text: "(Arriving at the school gate, the scenery greets me far more warmly than yesterday. My steps feel light for some reason.)",
        background: "assets/images/background/school.png",
        bgm: "daily2.mp3",
        next: "day2_school_gate_2"
    },
    "day2_school_gate_2": {
        name: "Me",
        background: "assets/images/background/school.png",
        text: "(As I'm about to pass through the gate, someone taps me on the shoulder.)",
        choices: [
            { text: "Turn around.", next: "day2_meet_someone" }
        ]
    },

    // =========================================================================
    // 히로인 조우 분기 (Heroine Encounter Branch)
    // =========================================================================

    "day2_meet_someone": {
        name: "Me",
        background: "assets/images/background/school.png",
        text: "(I turn around and there stands...)",
        branches: [
            { next: "day2_meet_yuna", character: "Yuna", condition: "met_yuna" },
            { next: "day2_meet_nurse", character: "Nurse", condition: "met_nurse" },
            { next: "day2_meet_dain", character: "Dain", condition: "met_dain" },
            { next: "day2_meet_seoyeon", character: "Seoyeon", condition: "met_seoyeon" },
            { next: "day2_meet_teacher" }
        ],
        selectByHighestAffinity: true
    },

    // =========================================================================
    // 유나 루트 (Yuna Route)
    // =========================================================================

    "day2_meet_yuna": {
        name: "Me",
        text: "(Under the large zelkova tree beside the school gate, I spot Yuna standing with an indifferent expression. She closes her book and gazes at me quietly.)",
        character: "assets/images/characters/yuna_normal.png",
        branches: [
            { next: "day2_yuna_talk_msg", condition: "sent_msg_day1_yuna" },
            { next: "day2_yuna_morning_talk" }
        ]
    },
    "day2_yuna_talk_msg": {
        name: "Yuna",
        text: "\"...Hi. Thanks for the message last night. It made the night a little warmer. Later... check the note on your desk.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_classroom"
    },
    "day2_yuna_morning_talk": {
        name: "Yuna",
        text: "\"...Hi. That 'light' of yours is still the same today. Good. Later... check the note on your desk.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day2_classroom"
    },

    // =========================================================================
    // 보건선생님 루트 (Nurse Route)
    // =========================================================================

    "day2_meet_nurse": {
        name: "System",
        text: "",
        affinityChar: "Nurse",
        affinityBranches: [
            { minAffinity: 20, next: "day2_meet_nurse_high" },
            { minAffinity: -5, next: "day2_meet_nurse_standard" },
            { minAffinity: -100, next: "day2_meet_nurse_low" }
        ]
    },
    "day2_meet_nurse_standard": {
        name: "School Nurse",
        text: "\"Oh my, {name}! Good morning. You look extra energetic today, don't you?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_nurse_talk"
    },
    "day2_meet_nurse_high": {
        name: "School Nurse",
        text: "(She walks up to me and straightens my clothes.) \"My dear transfer student, what did you dream about to be glowing like this? I overslept a little because I was up thinking about you.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day2_nurse_talk"
    },
    "day2_meet_nurse_low": {
        name: "School Nurse",
        text: "(She sighs and turns her head as soon as she sees me.) \"Oh, transfer student... It's hard enough seeing your face this early in the morning. If you don't have any business, please head to class.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_classroom"
    },
    "day2_nurse_talk": {
        name: "School Nurse",
        text: "(She walks up to me and gives a little wink.)",
        character: "assets/images/characters/nurse_normal.png",
        branches: [
            { next: "day2_nurse_talk_msg", condition: "sent_msg_day1_nurse" },
            { next: "day2_nurse_talk_has_number", condition: "has_number_nurse" },
            { next: "day2_nurse_talk_no_number" }
        ]
    },
    "day2_nurse_talk_msg": {
        name: "School Nurse",
        text: "\"That message you sent last night was really cute. Thanks to you, I fell asleep in a good mood. If you're not feeling well today, come visit the nurse's office anytime.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_classroom"
    },
    "day2_nurse_talk_has_number": {
        name: "School Nurse",
        text: "\"You didn't lose sleep thinking about me last night, did you? Hehe, just kidding. If you're not feeling well today, come visit the nurse's office anytime.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_classroom"
    },
    "day2_nurse_talk_no_number": {
        name: "School Nurse",
        text: "\"It's only your second day, but you already look right at home. Don't push yourself too hard, and come hang out at the nurse's office if you need a break.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_classroom"
    },

    // =========================================================================
    // 서연 루트 (Seoyeon Route)
    // =========================================================================

    "day2_meet_seoyeon": {
        name: "System",
        text: "",
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "day2_meet_seoyeon_high" },
            { minAffinity: -5, next: "day2_meet_seoyeon_standard" },
            { minAffinity: -100, next: "day2_meet_seoyeon_low" }
        ]
    },
    "day2_meet_seoyeon_standard": {
        name: "Seoyeon",
        text: "\"Hi, {name}! Did you sleep well? You're here early again today!\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day2_seoyeon_talk"
    },
    "day2_meet_seoyeon_high": {
        name: "Seoyeon",
        text: "(Seoyeon was lingering by the school gate, and the moment she spots me, she beams and runs over.) \"{name}! I was waiting for you! I couldn't sleep a wink because I was wondering if you slept well last night!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day2_seoyeon_talk"
    },
    "day2_meet_seoyeon_low": {
        name: "Seoyeon",
        text: "(Seoyeon's expression hardens as soon as she spots me, and she turns her head away.) \"...Oh, you're here? At least you're not late. Well, take care.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_talk": {
        name: "Seoyeon",
        text: "(Seoyeon meets my eyes and smiles softly.)",
        character: "assets/images/characters/seyoun_normal.png",
        branches: [
            { next: "day2_seoyeon_talk_msg", condition: "sent_msg_day1_seyoun" },
            { next: "day2_seoyeon_talk_has_number", condition: "has_number_seyoun" },
            { next: "day2_seoyeon_talk_no_number" }
        ]
    },
    "day2_seoyeon_talk_msg": {
        name: "Seoyeon",
        text: "\"Thank you so much for the message yesterday! I think I slept well because of it. Let's do our best today too!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_talk_has_number": {
        name: "Seoyeon",
        text: "\"Did you get home okay yesterday? After we exchanged numbers, I must have debated a hundred times whether to text you... but I held back because I didn't want to bother you.\"",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            { text: "I was waiting for your message too! Go ahead and send one now.", next: "day2_seoyeon_happy", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Oh, I see. Honestly, I was so tired I fell asleep the moment I lay down.", next: "day2_seoyeon_normal", stats: { Seoyeon: { affinity: 1 } } }
        ]
    },
    "day2_seoyeon_talk_no_number": {
        name: "Seoyeon",
        text: "\"Did you get home okay yesterday? I was really worried since it was your first day, but seeing you today puts me at ease. Let's do our best today too!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_happy": {
        name: "Seoyeon",
        text: "\"Really? Then starting today, we share everything, even the little things, deal? Come on, let's head to class together!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_normal": {
        name: "Seoyeon",
        text: "\"Right? Your first day at a new school must have been exhausting. Come on, let's have another great day!\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day2_classroom"
    },

    // =========================================================================
    // 다인 루트 (Dain Route)
    // =========================================================================

    "day2_meet_dain": {
        name: "Dain",
        text: "\"Hey, {name}! Good morning! You're here early today!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day2_dain_talk"
    },
    "day2_dain_talk": {
        name: "Dain",
        text: "(Dain cheerfully bumps my shoulder.)",
        character: "assets/images/characters/dain_laugh.png",
        branches: [
            { next: "day2_dain_talk_msg", condition: "sent_msg_day1_dain" },
            { next: "day2_dain_talk_dated", condition: "dated_dain_day1" },
            { next: "day2_dain_talk_not_dated" }
        ]
    },
    "day2_dain_talk_msg": {
        name: "Dain",
        text: "\"Got your message yesterday! You're surprisingly sweet, you know that? Thanks to you, I slept great. Let's make today awesome too!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_classroom"
    },
    "day2_dain_talk_dated": {
        name: "Dain",
        text: "\"Thanks to the tteokbokki yesterday, I'm in top shape today! Same for you, right?\"",
        character: "assets/images/characters/dain_laugh.png",
        choices: [
            { text: "Yeah! I slept well thanks to you, Dain.", next: "day2_dain_happy", stats: { Dain: { affinity: 5 } } },
            { text: "I'm a bit tired actually... Dain, you really have amazing stamina.", next: "day2_dain_normal", stats: { Dain: { affinity: 1 } } }
        ]
    },
    "day2_dain_talk_not_dated": {
        name: "Dain",
        text: "\"Did you get home okay yesterday? It was your first day, so I hope you got to explore the school a bit! Let's make today awesome too!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_classroom"
    },
    "day2_dain_happy": {
        name: "Dain",
        text: "\"Haha! I guess my energy is a bit over the top, huh? Alright, come to the gym at lunch today too! I'll be waiting!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_classroom"
    },
    "day2_dain_normal": {
        name: "Dain",
        text: "\"Oh come on, don't be a wimp! Stamina is everything when you're adjusting to school life! Now let's get to class!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day2_classroom"
    },

    // =========================================================================
    // 담임선생님 루트 (Teacher Route)
    // =========================================================================

    "day2_meet_teacher": {
        name: "Homeroom Teacher",
        text: "\"Oh, isn't that {name}? Only your second day and you're already fitting right in. It's nice to see you here early.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day2_teacher_free_talk"
    },
    "day2_teacher_free_talk": {
        type: "free_talk",
        name: "Homeroom Teacher",
        text: "\"We still have some time before class starts. Is there anything you'd like to ask me?\"",
        context: "You've run into the homeroom teacher at the school gate and are walking to the classroom together. Keep the conversation going until it naturally wraps up. At the very end of the conversation, the teacher will ask for the protagonist's contact info for the emergency contact list. Only on the final turn should you hint at needing to ask about contact information or suggest there's some official business.",
        personality: "A homeroom teacher who strictly separates work from personal matters, but has a secret soft spot for the protagonist.",
        character: "assets/images/characters/teacher_normal.png",
        affinityChar: "Teacher",
        affinityBranches: [
            { minAffinity: 20, next: "day2_teacher_contact_ask_high" },
            { minAffinity: 0, next: "day2_teacher_contact_ask" },
            { minAffinity: -100, next: "day2_teacher_contact_ask_low" }
        ],
        next: "day2_teacher_contact_ask"
    },
    "day2_teacher_contact_ask_high": {
        name: "Me",
        text: "(I had a nice chat with the teacher on the way to class. She said I looked like I was in a great mood this morning and asked for my phone number for the emergency contact list.)",
        character: "assets/images/characters/teacher_smile.png",
        choices: [
            { text: "Sure, here's my number.", next: "day2_teacher_contact_success_high", setFlags: ["has_number_teacher", "has_any_contact"] },
            { text: "I'll stop by the teacher's office later to give it to you.", next: "day2_classroom_from_teacher" }
        ]
    },
    "day2_teacher_contact_ask_low": {
        name: "Me",
        text: "(The teacher's expression hardened. I must have been too rude this early in the morning. She sighed and asked me to provide my phone number for the emergency contact list.)",
        character: "assets/images/characters/teacher_angry.png",
        choices: [
            { text: "Sure, here's my number.", next: "day2_teacher_contact_success_low", setFlags: ["has_number_teacher", "has_any_contact"] },
            { text: "I'll stop by the teacher's office later to give it to you.", next: "day2_classroom_from_teacher" }
        ]
    },
    "day2_teacher_contact_ask": {
        name: "Me",
        text: "(I chatted with the teacher about various things on the walk to class. She said she needed my phone number for the emergency contact list.)",
        character: "assets/images/characters/teacher_normal.png",
        choices: [
            { text: "Sure, here's my number.", next: "day2_teacher_contact_success_normal", setFlags: ["has_number_teacher", "has_any_contact"] },
            { text: "I'll stop by the teacher's office later to give it to you.", next: "day2_classroom_from_teacher" }
        ]
    },
    "day2_teacher_contact_success_high": {
        name: "Homeroom Teacher",
        text: "\"{name}, thanks for the number! Hehe, I used the emergency contact list as an excuse, but... truth is, I wanted to get closer to you too. If school life gets tough, don't hesitate to call me anytime, okay?\"",
        character: "assets/images/characters/teacher_smile.png",
        stats: { Teacher: { affinity: 15 } },
        next: "day2_classroom_from_teacher"
    },
    "day2_teacher_contact_success_low": {
        name: "Homeroom Teacher",
        text: "\"...Alright, thank you. I'll only use your contact info for official purposes, so don't worry. Now hurry up and get to class before you're late.\"",
        character: "assets/images/characters/teacher_angry.png",
        stats: { Teacher: { affinity: 2 } },
        next: "day2_classroom_from_teacher"
    },
    "day2_teacher_contact_success_normal": {
        name: "Homeroom Teacher",
        text: "\"Thank you. I'll reach out if anything comes up. Now, let's head to class.\"",
        character: "assets/images/characters/teacher_normal.png",
        stats: { Teacher: { affinity: 10 } },
        next: "day2_classroom_from_teacher"
    },

    // =========================================================================
    // Classroom Arrival - Teacher Route
    // =========================================================================

    "day2_classroom_from_teacher": {
        name: "Homeroom Teacher",
        text: "\"Alright, we're here. Let's have another great day.\"",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/teacher_smile.png",
        next: "day2_classroom_from_teacher_2"
    },
    "day2_classroom_from_teacher_2": {
        name: "Me",
        text: "(Walking into the classroom alongside the teacher, all eyes turn to us. Walking in with the homeroom teacher definitely drew some attention.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "day2_classroom_greet_teacher"
    },
    "day2_classroom_greet_teacher": {
        name: "Classmate",
        background: "assets/images/background/room_school.png",
        text: "\"Hey, transfer student! Good morning! Whoa, you came with the homeroom teacher? Getting special treatment already?\"",
        character: null,
        next: "day2_classroom_greet_teacher_2"
    },
    "day2_classroom_greet_teacher_2": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(A few students snicker with playful looks. At least there's no malice behind it.)",
        next: "day2_classroom_settle_teacher"
    },
    "day2_classroom_settle_teacher": {
        name: "Classmate",
        background: "assets/images/background/room_school.png",
        text: "(The student next to me nudges my elbow.) \"Dude, what's the deal with you and the homeroom teacher? Walking to school together first thing in the morning!\"",
        character: null,
        next: "day2_classroom_settle_teacher_2"
    },
    "day2_classroom_settle_teacher_2": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"It's nothing, we just happened to run into each other at the school gate and walked in together.\"",
        next: "day2_classroom_settle_teacher_3"
    },
    "day2_classroom_settle_teacher_3": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(I brush it off and take my seat. Walking in with the teacher was a bit embarrassing, but... it didn't feel bad. I start unpacking my bag to get my textbooks out when... something seems off.)",
        next: "day2_classroom_2"
    },

    // =========================================================================
    // Classroom Arrival (General Routes)
    // =========================================================================

    "day2_classroom": {
        name: "Me",
        text: "(Opening the classroom door, a much softer atmosphere than yesterday wraps around me. Even the students' gazes carry a hint of friendliness.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "day2_classroom_greet"
    },
    "day2_classroom_greet": {
        name: "Classmate",
        background: "assets/images/background/room_school.png",
        text: "\"Hey, transfer student! Good morning! Did you settle in okay yesterday? Our class is pretty chill, right?\"",
        character: null,
        next: "day2_classroom_greet_2"
    },
    "day2_classroom_greet_2": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(A few classmates greet me casually. Yesterday they looked at me with pure curiosity, but today their smiles are relaxed. I feel like I'm gradually becoming part of this school.)",
        next: "day2_classroom_settle"
    },
    "day2_classroom_settle": {
        name: "System",
        background: "assets/images/background/room_school.png",
        text: "",
        branches: [
            { next: "day2_classroom_settle_seoyeon", character: "Seoyeon", condition: "met_seoyeon" },
            { next: "day2_classroom_settle_dain", character: "Dain", condition: "met_dain" },
            { next: "day2_classroom_settle_nurse", character: "Nurse", condition: "met_nurse" },
            { next: "day2_classroom_settle_yuna", character: "Yuna", condition: "met_yuna" },
            { next: "day2_classroom_settle_default" }
        ],
        selectByHighestAffinity: true
    },
    "day2_classroom_settle_seoyeon": {
        name: "Classmate",
        background: "assets/images/background/room_school.png",
        text: "(The girl in the front row turns around and says,) \"I saw you coming in with Seoyeon earlier! Are you two already that close?\"",
        character: null,
        next: "day2_classroom_settle_2_seoyeon"
    },
    "day2_classroom_settle_2_seoyeon": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"Oh, haha... Seoyeon's been really looking out for me, so I settled in pretty quickly.\"",
        next: "day2_classroom_settle_3"
    },
    "day2_classroom_settle_dain": {
        name: "Classmate",
        background: "assets/images/background/room_school.png",
        text: "(The girl in the front row turns around and says,) \"I saw you walking in with Dain earlier! Are you two already best friends?\"",
        character: null,
        next: "day2_classroom_settle_2_dain"
    },
    "day2_classroom_settle_2_dain": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"Oh, haha... Dain's so energetic, we just naturally hit it off.\"",
        next: "day2_classroom_settle_3"
    },
    "day2_classroom_settle_nurse": {
        name: "Classmate",
        background: "assets/images/background/room_school.png",
        text: "(The girl in the front row turns around and says,) \"I saw you talking with the school nurse earlier. Are you feeling sick or something?\"",
        character: null,
        next: "day2_classroom_settle_2_nurse"
    },
    "day2_classroom_settle_2_nurse": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"No, I'm fine. She was just checking if I'm settling in okay.\"",
        next: "day2_classroom_settle_3"
    },
    "day2_classroom_settle_yuna": {
        name: "Classmate",
        background: "assets/images/background/room_school.png",
        text: "(The girl in the front row turns around and says,) \"I saw you talking to some girl at the gate earlier... Do you know her?\"",
        character: null,
        next: "day2_classroom_settle_2_yuna"
    },
    "day2_classroom_settle_2_yuna": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"Oh... she's just another student here. I don't really know her well yet.\"",
        next: "day2_classroom_settle_3"
    },
    "day2_classroom_settle_default": {
        name: "Classmate",
        background: "assets/images/background/room_school.png",
        text: "(The girl in the front row turns around and says,) \"Only your second day and you've already settled in? That's impressive!\"",
        character: null,
        next: "day2_classroom_settle_2_default"
    },
    "day2_classroom_settle_2_default": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"Oh, haha... Everyone's been so nice, it was easy to adjust.\"",
        next: "day2_classroom_settle_3"
    },
    "day2_classroom_settle_3": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(I give a vague answer and sit down. Opening my bag to take out my textbooks... something feels off.)",
        next: "day2_classroom_2"
    },
    "day2_classroom_2": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(As I'm settling in at my desk, I notice a small note tucked in the corner.)",
        choices: [
            { text: "Check the note.", next: "day2_check_note" }
        ]
    },

    // =========================================================================
    // 쪽지 발견 & 유나 추측 (Note Discovery & Speculation)
    // =========================================================================

    "day2_check_note": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(I carefully unfold the note. The handwriting is neat yet somehow cold.)",
        next: "day2_note_content"
    },
    "day2_note_content": {
        name: "System",
        background: "assets/images/background/room_school.png",
        text: "\"'Come to the courtyard behind the library annex at lunch. I have something to tell you.' - Yuna\"",
        next: "day2_note_reaction"
    },
    "day2_note_reaction": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(Yuna...? I read the note again. 'The courtyard behind the library annex'... that's a secluded spot at school. Summoning me with a note like this — it feels secretive.)",
        next: "day2_note_speculation"
    },
    "day2_note_speculation": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(What could she possibly want to say that she'd leave a note like this? If I had her number, I could just ask her directly... but a note — that somehow feels very like her.)",
        next: "day2_note_speculation_2"
    },
    "day2_note_speculation_2": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(Is there anyone who might know about Yuna? I discreetly glance around. But I don't think I should mention the note to just anyone.)",
        next: "day2_note_speculation_3"
    },
    "day2_note_speculation_3": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(I carefully fold the note and slip it into my pocket. I can't wait for lunch already... or maybe 'nervous' is more accurate.)",
        next: "day2_note_ask_around"
    },
    "day2_note_ask_around": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(I casually ask the person sitting next to me.) \"Hey, do you know anyone named Yuna?\"",
        next: "day2_note_ask_around_2"
    },
    "day2_note_ask_around_2": {
        name: "Classmate",
        background: "assets/images/background/room_school.png",
        text: "\"Yuna? Hmm... she's not in our class. Maybe another class? Or an upperclassman?\"",
        character: null,
        next: "day2_note_ask_around_3"
    },
    "day2_note_ask_around_3": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(As expected, nobody knows. Just the name 'Yuna' isn't enough to go on. I'll just have to go there myself at lunch.)",
        next: "day2_homeroom_start"
    },

    // =========================================================================
    // 조회 & 오전 수업 (Homeroom & Morning Classes)
    // =========================================================================

    "day2_homeroom_start": {
        name: "Homeroom Teacher",
        background: "assets/images/background/room_school.png",
        text: "\"Alright, everyone take your seats. Homeroom is starting.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day2_homeroom_rollcall"
    },
    "day2_homeroom_rollcall": {
        name: "Homeroom Teacher",
        background: "assets/images/background/room_school.png",
        text: "(The teacher opens the attendance book and starts calling names one by one.) \"...{name}? Transfer student, you're here, right?\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day2_homeroom_rollcall_2"
    },
    "day2_homeroom_rollcall_2": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/teacher_normal.png",
        text: "\"Yes, I'm here.\"",
        next: "day2_homeroom_rollcall_3"
    },
    "day2_homeroom_rollcall_3": {
        name: "Homeroom Teacher",
        background: "assets/images/background/room_school.png",
        text: "\"Good. It's only your second day, but you look brighter than yesterday. Seems like you're adjusting well.\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "day2_homeroom_notice"
    },
    "day2_homeroom_notice": {
        name: "Homeroom Teacher",
        background: "assets/images/background/room_school.png",
        text: "\"One announcement. There will be a school festival planning meeting this Friday, so anyone interested should stay after school.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day2_homeroom_notice_2"
    },
    "day2_homeroom_notice_2": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/teacher_normal.png",
        text: "(A school festival... I just transferred and there's already a festival coming up. I'm getting more and more excited about this school.)",
        next: "day2_homeroom_event"
    },
    "day2_homeroom_event": {
        name: "Classmate",
        background: "assets/images/background/room_school.png",
        text: "\"Teacher, question! Will there be a class talent show at the festival?\"",
        character: null,
        next: "day2_homeroom_event_2"
    },
    "day2_homeroom_event_2": {
        name: "Homeroom Teacher",
        background: "assets/images/background/room_school.png",
        text: "\"Well, nothing's decided yet, but... if our class enters, we'd obviously win first place, right?\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "day2_homeroom_event_3"
    },
    "day2_homeroom_event_3": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/teacher_smile.png",
        text: "(The classroom fills with chuckles. The teacher actually has a pretty good sense of humor.)",
        next: "day2_morning_class"
    },

    // =========================================================================
    // 오전 수업 & 유나 쪽지 독백 (Morning Class & Inner Monologue)
    // =========================================================================

    "day2_morning_class": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/teacher_smile.png",
        text: "(Throughout the entire class, Yuna's note won't leave my mind. What on earth does she want to tell me?)",
        branches: [
            { next: "day2_morning_class_yuna_msg", condition: "sent_msg_day1_yuna" },
            { next: "day2_morning_class_yuna_met", condition: "met_yuna" },
            { next: "day2_morning_class_yuna_new" }
        ]
    },
    "day2_morning_class_yuna_msg": {
        name: "Me",
        text: "(Yuna, who I exchanged messages with last night... She has my number, so why leave a note? The thought that this is so very her makes me chuckle.)",
        next: "day2_morning_class_focus"
    },
    "day2_morning_class_yuna_met": {
        name: "Me",
        text: "(Yuna, who I met yesterday... Did she really leave this note for me? A secret... I can't help but wonder what it could be.)",
        next: "day2_morning_class_focus"
    },
    "day2_morning_class_yuna_new": {
        name: "Me",
        text: "(Yuna...? That's a name I didn't hear yesterday. Who is she, and why would she leave a note like this for me?)",
        next: "day2_morning_class_focus"
    },

    // --- 수업 중 집중과 산만함 ---
    "day2_morning_class_focus": {
        name: "Me",
        text: "(The math formulas on the blackboard aren't registering at all. The words 'courtyard behind the library annex' just keep echoing in my head.)",
        next: "day2_morning_class_quiz"
    },
    "day2_morning_class_quiz": {
        name: "Math Teacher",
        text: "\"Alright, who wants to try this problem? ...Transfer student, how about you?\"",
        character: null,
        next: "day2_morning_class_quiz_2"
    },
    "day2_morning_class_quiz_2": {
        name: "Me",
        text: "(Oh no, I was completely zoned out. I hastily look at the blackboard, but the formulas won't register at all.)",
        choices: [
            { text: "Boldly walk up and give it a shot.", next: "day2_quiz_try" },
            { text: "Honestly say I don't know.", next: "day2_quiz_pass" }
        ]
    },
    "day2_quiz_try": {
        name: "Me",
        text: "(Standing at the blackboard, I fumble through the formula. Luckily, it's something I previewed yesterday, so it vaguely comes back to me.)",
        next: "day2_quiz_try_2"
    },
    "day2_quiz_try_2": {
        name: "Math Teacher",
        text: "\"Oh, not bad, transfer student! That's correct. Well done — go back to your seat.\"",
        character: null,
        next: "day2_quiz_result"
    },
    "day2_quiz_pass": {
        name: "Me",
        text: "\"I'm sorry, I haven't quite caught up with the material yet...\"",
        next: "day2_quiz_pass_2"
    },
    "day2_quiz_pass_2": {
        name: "Math Teacher",
        text: "\"That's alright, you just transferred. Try to preview the material next time.\"",
        character: null,
        next: "day2_quiz_result"
    },
    "day2_quiz_result": {
        name: "Me",
        text: "(The class moves on, one way or another. I can't help being distracted by the note, but class is class.)",
        next: "day2_second_class"
    },

    // --- 2교시 ---
    "day2_second_class": {
        name: "Me",
        text: "(Without a break, the second period starts — Korean language class. The teacher tells us to take out the handout from yesterday.)",
        next: "day2_second_class_2"
    },
    "day2_second_class_2": {
        name: "Me",
        text: "(Rummaging through the handouts, my fingertips brush against the note in my pocket. My heart skips a beat.)",
        next: "day2_second_class_3"
    },
    "day2_second_class_3": {
        name: "Me",
        text: "(There are still two hours until lunch. Why is time crawling so slowly...)",
        next: "day2_last_class_before_lunch"
    },

    // =========================================================================
    // 점심 직전 수업 & 전환 (Pre-Lunch Transition)
    // =========================================================================

    "day2_last_class_before_lunch": {
        name: "Me",
        text: "(Third period, English class. The teacher's pronunciation reaches my ears, but my mind is consumed with thoughts of lunchtime.)",
        next: "day2_last_class_before_lunch_2"
    },
    "day2_last_class_before_lunch_2": {
        name: "Me",
        text: "(The courtyard behind the library annex... I've never even been there. Why would Yuna pick such a secluded place?)",
        next: "day2_last_class_before_lunch_3"
    },
    "day2_last_class_before_lunch_3": {
        name: "Me",
        text: "(It's not dangerous or anything, right...? No, it's just a note from a fellow student. But still, my heart is pounding.)",
        next: "day2_last_class_before_lunch_4"
    },
    "day2_last_class_before_lunch_4": {
        name: "Me",
        text: "(I sneak a glance at the clock. 11:40... twenty minutes until lunch. Come on, time, move faster.)",
        next: "day2_class_end_bell"
    },
    "day2_class_end_bell": {
        name: "System",
        text: "- Ding dong dang dong -",
        next: "day2_class_end"
    },
    "day2_class_end": {
        name: "Me",
        text: "(The lunch bell finally rings! The classroom instantly erupts into commotion. Students rush out toward the cafeteria.)",
        next: "day2_packing_up"
    },
    "day2_packing_up": {
        name: "Me",
        text: "(I hurriedly pack my textbooks into my bag. I check the note in my pocket one more time. 'The courtyard behind the library annex'... Alright, let's go.)",
        next: "day2_lunch_decision"
    },
    "day2_lunch_decision": {
        name: "Me",
        text: "(It's lunch time. Who should I spend it with...)",
        next: "day2_lunch_time"
    }
});
