/**
 * ============================================================================
 * CUPID - Day 3 Morning Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day3_1_morning.js
 * 언어: 영어 (English)
 * 일차: Day 3 (3일차)
 * 시간대: Morning (아침)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 전학 3일차이자 금요일 아침의 상황을 다룹니다.
 * 히로인들로부터 주말 데이트 제안 메시지를 받게 되며, 여러 명의 제안을 동시에
 * 수락할 경우 발생할 수 있는 '갈등(Date Conflict)'의 서막이 열리는 시점입니다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 아침 기상 및 일상 - 전학 사흘째의 익숙함과 금요일 아침의 환기
 * 2. 메시지 확인 (Weekend Invites) - 호감도가 있는 캐릭터들로부터의 주말 약속 제안
 * 3. 답장 및 약속 확정 - 각 캐릭터별 제안 수락/보류 선택 (호감도 변화)
 * 4. 등교 및 갈등 체크 - 주말 약속 중복 여부에 따른 교문 앞 연출 차별화
 * 
 *  조건 플래그 설명 (Condition Flags)
 * ----------------------------------------------------------------------------
 * has_any_contact      : 한 명이라도 연락처가 있는지 확인 (메시지 체크 진입 조건)
 * has_number_*         : 특정 히로인의 연락처가 있는지 확인 (개별 메시지 수신 조건)
 * day3_has_multiple_dates : 두 명 이상의 주말 약속을 확정했는지 체크 (갈등 연출 조건)
 * 
 *  설정 플래그 설명 (Set Flags)
 * ----------------------------------------------------------------------------
 * day3_*_weekend_invite : 주말 약속 제안을 받았음을 기록
 * day3_*_date_confirmed : 주말 데이트 약속이 확정되었음을 기록
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 제안 수락(+5) 또는 보류(+2) 선택에 따라 각 히로인의 호감도 소폭 상승
 * 
 *  특이 사항
 * ----------------------------------------------------------------------------
 * - silhouette: true - 메시지 대화 연출 시 신비로운 분위기 유지
 * - day3_has_multiple_dates: 향후 '배신' 또는 '수라장' 루트 진입을 위한 엔진 체크용 플래그
 * 
 * ============================================================================
 */

// SCENARIO 전역 객체 초기화
if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}

// Day 3 시나리오 그룹 초기화
if (!SCENARIO[3]) {
    SCENARIO[3] = {};
}

/**
 * [Day 3 - Morning] 씬 데이터 정의
 */
Object.assign(SCENARIO[3], {
    "day3_start": {
        name: "Me",
        text: "(I wake up to the sound of my alarm. It's already been three days since I transferred... I'm starting to get used to waking up in the morning.)",
        background: "assets/images/background/room_my.png",
        bgm: "intro.mp3",
        character: null,
        next: "day3_start_2"
    },

    // =========================================================================
    // After spending the night at the nurse's place
    // =========================================================================
    "day3_nurse_home_morning": {
        name: "Me",
        text: "(I open my eyes... Where am I? An unfamiliar ceiling.)",
        background: "assets/images/background/nurse_house.png",
        character: null,
        next: "day3_nurse_home_morning_2"
    },
    "day3_nurse_home_morning_2": {
        name: "Me",
        background: "assets/images/background/nurse_house.png",
        text: "(Memories of last night flash through my mind. Her scent, her soft touch, and...)",
        next: "day3_nurse_home_morning_3"
    },
    "day3_nurse_home_morning_3": {
        name: "School Nurse",
        background: "assets/images/background/nurse_house.png",
        text: "\"Oh my, you're awake? Hehe, did you sleep well last night?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day3_nurse_home_morning_4"
    },
    "day3_nurse_home_morning_4": {
        name: "Me",
        background: "assets/images/background/nurse_house.png",
        character: "assets/images/characters/nurse_normal.png",
        text: "(She hands me a cup of coffee with a knowing smile. My face feels hot.)",
        choices: [
            { text: "\"Thank you, teacher...\"", next: "day3_nurse_home_morning_thanks" },
            { text: "\"Last night... was amazing\"", next: "day3_nurse_home_morning_bold" },
            { text: "(Too embarrassed to speak)", next: "day3_nurse_home_morning_shy" }
        ]
    },
    "day3_nurse_home_morning_thanks": {
        name: "School Nurse",
        background: "assets/images/background/nurse_house.png",
        text: "\"Hehe, don't be so stiff~ Not after what we shared.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 3 } },
        next: "day3_nurse_home_morning_leave"
    },
    "day3_nurse_home_morning_bold": {
        name: "School Nurse",
        background: "assets/images/background/nurse_house.png",
        text: "\"Oh my... Bold thing to say in the morning. Hehe, teacher enjoyed it too.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 8 } },
        next: "day3_nurse_home_morning_leave"
    },
    "day3_nurse_home_morning_shy": {
        name: "School Nurse",
        background: "assets/images/background/nurse_house.png",
        text: "\"Hehe, so cute. Your shy face is adorable too.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day3_nurse_home_morning_leave"
    },
    "day3_nurse_home_morning_leave": {
        name: "School Nurse",
        background: "assets/images/background/nurse_house.png",
        text: "\"Now, hurry up and get ready. You need to go to school, right? When we see each other at school... pretend nothing happened, okay?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day3_nurse_home_morning_leave_2"
    },
    "day3_nurse_home_morning_leave_2": {
        name: "Me",
        background: "assets/images/background/nurse_house.png",
        character: "assets/images/characters/nurse_normal.png",
        text: "(My heart races at her wink. I quickly gather my things and leave her place.)",
        setFlag: "day3_came_from_nurse_home",
        next: "day3_nurse_home_school_arrival"
    },

    // Arriving at school - Heroines' suspicion
    "day3_nurse_home_school_arrival": {
        name: "Me",
        character: "assets/images/characters/nurse_normal.png",
        text: "(I arrived at school. The morning air feels especially refreshing today.)",
        background: "assets/images/background/school.png",
        next: "day3_nurse_home_suspicion"
    },
    "day3_nurse_home_suspicion": {
        name: "Seoyeon",
        background: "assets/images/background/school.png",
        text: "\"{name}! Good morning... Huh? Where did you come from today? It seems like you came from a different direction than usual...\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day3_nurse_home_suspicion_2"
    },
    "day3_nurse_home_suspicion_2": {
        name: "Me",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/seyoun_normal.png",
        text: "(I'm flustered by Seoyeon's sharp question.)",
        choices: [
            { text: "\"Just took a walk...\"", next: "day3_nurse_home_lie" },
            { text: "\"Stayed at a relative's house\"", next: "day3_nurse_home_half_lie" },
            { text: "(Stammer nervously)", next: "day3_nurse_home_stutter" }
        ]
    },
    "day3_nurse_home_lie": {
        name: "Seoyeon",
        background: "assets/images/background/school.png",
        text: "\"...A walk? At this hour? Hmm...\"",
        character: "assets/images/characters/seyoun_normal.png",
        setFlag: "day3_seoyeon_suspicious",
        stats: { Seoyeon: { affinity: -11 } },
        next: "day3_nurse_home_yuna_appears"
    },
    "day3_nurse_home_half_lie": {
        name: "Seoyeon",
        background: "assets/images/background/school.png",
        text: "\"...A relative? A female relative?\"",
        character: "assets/images/characters/seyoun_sad.png",
        setFlag: "day3_seoyeon_jealous",
        stats: { Seoyeon: { affinity: -5 } },
        next: "day3_nurse_home_yuna_appears"
    },
    "day3_nurse_home_stutter": {
        name: "Seoyeon",
        background: "assets/images/background/school.png",
        text: "\"...Why can't you answer? Are you hiding something?\"",
        character: "assets/images/characters/seyoun_sad.png",
        setFlag: "day3_seoyeon_very_suspicious",
        stats: { Seoyeon: { affinity: -12 } },
        next: "day3_nurse_home_yuna_appears"
    },
    "day3_nurse_home_yuna_appears": {
        name: "Yuna",
        background: "assets/images/background/school.png",
        text: "\"...{name}. You smell different today.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_nurse_home_yuna_appears_2"
    },
    "day3_nurse_home_yuna_appears_2": {
        name: "Me",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/yuna_normal.png",
        text: "(Yuna stares at my face. Her eyes are... piercing.)",
        next: "day3_nurse_home_yuna_appears_3"
    },
    "day3_nurse_home_yuna_appears_3": {
        name: "Yuna",
        background: "assets/images/background/school.png",
        text: "\"...An adult's perfume. A woman's perfume.\"",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "day3_yuna_knows_secret",
        stats: { Yuna: { affinity: -20 } },
        next: "day3_nurse_home_tension"
    },
    "day3_nurse_home_tension": {
        name: "Seoyeon",
        background: "assets/images/background/school.png",
        text: "\"...What?!\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -8 } },
        next: "day3_nurse_home_tension_2"
    },
    "day3_nurse_home_tension_2": {
        name: "Me",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/seyoun_sad.png",
        text: "(The atmosphere became tense. I need to get out of this situation somehow.)",
        choices: [
            { text: "\"I'll be late for class, gotta go!\"", next: "day3_nurse_home_escape" },
            { text: "\"It's a misunderstanding, I was at my parents' friend's place...\"", next: "day3_nurse_home_excuse" }
        ]
    },
    "day3_nurse_home_escape": {
        name: "Me",
        character: "assets/images/characters/seyoun_sad.png",
        text: "(I hurry to the classroom. The gazes from behind feel burning hot...)",
        background: "assets/images/background/school.png",
        next: "day3_classroom"
    },
    "day3_nurse_home_excuse": {
        name: "Seoyeon",
        background: "assets/images/background/school.png",
        text: "\"...Your parents' friend? Then why did you act like you were hiding something?\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -10 } },
        next: "day3_nurse_home_excuse_2"
    },
    "day3_nurse_home_excuse_2": {
        name: "Me",
        character: "assets/images/characters/seyoun_sad.png",
        text: "(Seoyeon looks upset. Let's just head to the classroom for now.)",
        background: "assets/images/background/school.png",
        next: "day3_classroom"
    },

    // =========================================================================
    // Normal morning flow
    // =========================================================================
    "day3_start_2": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(Looking outside, the weather is really nice today. It's already Friday... What should I do this weekend?)",
        next: "day3_start_3"
    },
    "day3_start_3": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(I check my smartphone and see there are unread messages. Who could it be?)",
        branches: [
            { next: "day3_morning_message_check", condition: "has_any_contact" },
            { next: "day3_prepare_school_no_contact" }
        ]
    },
    
    "day3_morning_message_check": {
        name: "Me",
        text: "(Let me check the messages.)",
        choices: [
            { text: "Check Seoyeon's message", next: "day3_show_message", condition: "has_number_seyoun", setFlags: ["viewing_seoyeon", "first_check"] },
            { text: "Check Yuna's message", next: "day3_show_message", condition: "has_number_yuna", setFlags: ["viewing_yuna", "first_check"] },
            { text: "Check Dain's message", next: "day3_show_message", condition: "has_number_dain", setFlags: ["viewing_dain", "first_check"] },
            { text: "Check Nurse's message", next: "day3_show_message", condition: "has_number_nurse", setFlags: ["viewing_nurse", "first_check"] },
            { text: "Check Homeroom Teacher's message", next: "day3_show_message", condition: "has_number_teacher", setFlags: ["viewing_teacher", "first_check"] }
        ]
    },
    "day3_show_message": {
        branches: [
            { next: "day3_msg_seoyeon", condition: "viewing_seoyeon" },
            { next: "day3_msg_yuna", condition: "viewing_yuna" },
            { next: "day3_msg_dain", condition: "viewing_dain" },
            { next: "day3_msg_nurse", condition: "viewing_nurse" },
            { next: "day3_msg_teacher", condition: "viewing_teacher" }
        ]
    },
    "day3_msg_seoyeon": {
        name: "Seoyeon",
        text: "(Message sent at 6 AM) 'Good morning! {name}, fighting for today too! Oh, and would you like to walk to school together? I'll wait for you in front of your house!'",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        next: "day3_msg_response_first"
    },
    "day3_msg_yuna": {
        name: "Yuna",
        text: "(Message sent at 3 AM) '...{name}. I'll wait for you at the back gate this morning. Let's go together.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        next: "day3_msg_response_first"
    },
    "day3_msg_dain": {
        name: "Dain",
        text: "(Message sent at 7 AM) 'Yay! {name}! Let's go to school together! Where do you live? I'll come find you! ><'",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        next: "day3_msg_response_first"
    },
    "day3_msg_nurse": {
        name: "School Nurse",
        text: "(Message sent last night at 11 PM) 'Hehe, {name}. How about walking to school together this morning? Just the two of us... 😉'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        next: "day3_msg_response_first_teachers"
    },
    "day3_msg_teacher": {
        name: "Homeroom Teacher",
        text: "(Message sent last night at 10 PM) '{name}, are you going to school early tomorrow morning? I'm going early too, would you like to walk together?'",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        next: "day3_msg_response_first_teachers"
    },
    "day3_msg_response_first": {
        name: "Me",
        text: "(How should I reply?)",
        choices: [
            { text: "Sure! Let's go together", next: "day3_accept_walk", stats: { "#{current_character}": { affinity: 3 } } },
            { text: "Sorry, I'll go alone today", next: "day3_reject_walk", stats: { "#{current_character}": { affinity: -5 } } },
            { text: "Check other messages", next: "day3_check_more_messages" }
        ]
    },
    "day3_msg_response_first_teachers": {
        name: "Me",
        text: "(How should I reply?)",
        choices: [
            { text: "Yes! Let's go together", next: "day3_accept_walk", stats: { "#{current_character}": { affinity: 3 } } },
            { text: "Sorry, I'll go alone today", next: "day3_reject_walk", stats: { "#{current_character}": { affinity: -5 } } },
            { text: "Check other messages", next: "day3_check_more_messages" }
        ]
    },    
    "day3_msg_response_after_check": {
        name: "Me",
        text: "(I already saw this message...)",
        next: "day3_return_to_choice"
    },
    "day3_accept_walk": {
        branches: [
            { next: "day3_walk_with_seoyeon", condition: "viewing_seoyeon" },
            { next: "day3_walk_with_yuna", condition: "viewing_yuna" },
            { next: "day3_walk_with_dain", condition: "viewing_dain" },
            { next: "day3_walk_with_nurse", condition: "viewing_nurse" },
            { next: "day3_walk_with_teacher", condition: "viewing_teacher" }
        ]
    },
    "day3_reject_walk": {
        branches: [
            { next: "day3_reject_msg_seoyeon", condition: "viewing_seoyeon", setFlags: ["rejected_seoyeon"] },
            { next: "day3_reject_msg_yuna", condition: "viewing_yuna", setFlags: ["rejected_yuna"] },
            { next: "day3_reject_msg_dain", condition: "viewing_dain", setFlags: ["rejected_dain"] },
            { next: "day3_reject_msg_nurse", condition: "viewing_nurse", setFlags: ["rejected_nurse"] },
            { next: "day3_reject_msg_teacher", condition: "viewing_teacher", setFlags: ["rejected_teacher"] }
        ]
    },
    "day3_reject_msg_seoyeon": {
        name: "Seoyeon",
        text: "(Reply) 'Oh... I see. It's okay! See you at school then!'",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        next: "day3_after_reject"
    },
    "day3_reject_msg_yuna": {
        name: "Yuna",
        text: "(Reply) '...Alright. Sometimes it's more comfortable to go alone.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        next: "day3_after_reject"
    },
    "day3_reject_msg_dain": {
        name: "Dain",
        text: "(Reply) 'Aw~ That's too bad! But see you at school!'",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        next: "day3_after_reject"
    },
    "day3_reject_msg_nurse": {
        name: "School Nurse",
        text: "(Reply) 'Oh my, really? That's a shame. See you at school then.'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        next: "day3_after_reject"
    },
    "day3_reject_msg_teacher": {
        name: "Homeroom Teacher",
        text: "(Reply) 'Okay, understood. See you at school!'",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        next: "day3_after_reject"
    },
    
    // 거절 후
    "day3_after_reject": {
        name: "Me",
        character: null,
        text: "(Should I check other messages?)",
        choices: [
            { text: "Check other messages", next: "day3_check_more_after_reject" },
            { text: "Just go to school alone", next: "day3_prepare_school" }
        ]
    },
    "day3_check_more_messages": {
        name: "Me",
        text: "(Let me check other messages.)",
        choices: [
            { text: "Check Seoyeon's message", next: "day3_msg_seoyeon", condition: "has_number_seyoun", excludeCondition: "viewing_seoyeon", clearFlags: ["viewing_yuna", "viewing_dain", "viewing_nurse", "viewing_teacher"], setFlags: ["viewing_seoyeon"] },
            { text: "Check Yuna's message", next: "day3_msg_yuna", condition: "has_number_yuna", excludeCondition: "viewing_yuna", clearFlags: ["viewing_seoyeon", "viewing_dain", "viewing_nurse", "viewing_teacher"], setFlags: ["viewing_yuna"] },
            { text: "Check Dain's message", next: "day3_msg_dain", condition: "has_number_dain", excludeCondition: "viewing_dain", clearFlags: ["viewing_seoyeon", "viewing_yuna", "viewing_nurse", "viewing_teacher"], setFlags: ["viewing_dain"] },
            { text: "Check Nurse's message", next: "day3_msg_nurse", condition: "has_number_nurse", excludeCondition: "viewing_nurse", clearFlags: ["viewing_seoyeon", "viewing_yuna", "viewing_dain", "viewing_teacher"], setFlags: ["viewing_nurse"] },
            { text: "Check Teacher's message", next: "day3_msg_teacher", condition: "has_number_teacher", excludeCondition: "viewing_teacher", clearFlags: ["viewing_seoyeon", "viewing_yuna", "viewing_dain", "viewing_nurse"], setFlags: ["viewing_teacher"] },
            { text: "Go with Seoyeon", next: "day3_walk_with_seoyeon", condition: "viewing_seoyeon", stats: { Seoyeon: { affinity: 3 } } },
            { text: "Go with Yuna", next: "day3_walk_with_yuna", condition: "viewing_yuna", stats: { Yuna: { affinity: 3 } } },
            { text: "Go with Dain", next: "day3_walk_with_dain", condition: "viewing_dain", stats: { Dain: { affinity: 3 } } },
            { text: "Go with Nurse", next: "day3_walk_with_nurse", condition: "viewing_nurse", stats: { Nurse: { affinity: 3 } } },
            { text: "Go with Teacher", next: "day3_walk_with_teacher", condition: "viewing_teacher", stats: { Teacher: { affinity: 3 } } },
            { text: "Go alone", next: "day3_walk_alone" }
        ]
    },
    "day3_check_more_after_reject": {
        name: "Me",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        text: "(Let me check other messages.)",
        choices: [
            { text: "Check Seoyeon's message", next: "day3_msg_seoyeon_after_reject", condition: "has_number_seyoun", excludeCondition: "rejected_seoyeon", clearFlags: ["viewing_yuna", "viewing_dain", "viewing_nurse", "viewing_teacher"], setFlags: ["viewing_seoyeon"] },
            { text: "Check Yuna's message", next: "day3_msg_yuna_after_reject", condition: "has_number_yuna", excludeCondition: "rejected_yuna", clearFlags: ["viewing_seoyeon", "viewing_dain", "viewing_nurse", "viewing_teacher"], setFlags: ["viewing_yuna"] },
            { text: "Check Dain's message", next: "day3_msg_dain_after_reject", condition: "has_number_dain", excludeCondition: "rejected_dain", clearFlags: ["viewing_seoyeon", "viewing_yuna", "viewing_nurse", "viewing_teacher"], setFlags: ["viewing_dain"] },
            { text: "Check Nurse's message", next: "day3_msg_nurse_after_reject", condition: "has_number_nurse", excludeCondition: "rejected_nurse", clearFlags: ["viewing_seoyeon", "viewing_yuna", "viewing_dain", "viewing_teacher"], setFlags: ["viewing_nurse"] },
            { text: "Check Teacher's message", next: "day3_msg_teacher_after_reject", condition: "has_number_teacher", excludeCondition: "rejected_teacher", clearFlags: ["viewing_seoyeon", "viewing_yuna", "viewing_dain", "viewing_nurse"], setFlags: ["viewing_teacher"] },
            { text: "Just go to school alone", next: "day3_prepare_school" }
        ]
    },
    "day3_show_message_after_reject": {
        branches: [
            { next: "day3_msg_seoyeon_after_reject", condition: "viewing_seoyeon" },
            { next: "day3_msg_yuna_after_reject", condition: "viewing_yuna" },
            { next: "day3_msg_dain_after_reject", condition: "viewing_dain" },
            { next: "day3_msg_nurse_after_reject", condition: "viewing_nurse" },
            { next: "day3_msg_teacher_after_reject", condition: "viewing_teacher" }
        ]
    },
    "day3_msg_seoyeon_after_reject": {
        name: "Seoyeon",
        text: "(Message sent at 6 AM) 'Good morning! {name}, fighting for today too! Oh, and would you like to walk to school together? I'll wait for you in front of your house!'",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        choices: [
            { text: "Go with Seoyeon (I rejected her earlier...)", next: "day3_change_mind", stats: { Seoyeon: { affinity: 1 } } },
            { text: "Check other messages", next: "day3_check_more_after_reject" },
            { text: "Just go alone", next: "day3_prepare_school" }
        ]
    },
    "day3_msg_yuna_after_reject": {
        name: "Yuna",
        text: "(Message sent at 3 AM) '...{name}. I'll wait for you at the back gate this morning. Let's go together.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        choices: [
            { text: "Go with Yuna (I rejected her earlier...)", next: "day3_change_mind", stats: { Yuna: { affinity: 1 } } },
            { text: "Check other messages", next: "day3_check_more_after_reject" },
            { text: "Just go alone", next: "day3_prepare_school" }
        ]
    },
    "day3_msg_dain_after_reject": {
        name: "Dain",
        text: "(Message sent at 7 AM) 'Yay! {name}! Let's go to school together! Where do you live? I'll come find you! ><'",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        choices: [
            { text: "Go with Dain (I rejected her earlier...)", next: "day3_change_mind", stats: { Dain: { affinity: 1 } } },
            { text: "Check other messages", next: "day3_check_more_after_reject" },
            { text: "Just go alone", next: "day3_prepare_school" }
        ]
    },
    "day3_msg_nurse_after_reject": {
        name: "School Nurse",
        text: "(Message sent last night at 11 PM) 'Hehe, {name}. How about walking to school together this morning? Just the two of us... 😉'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        choices: [
            { text: "Go with Nurse (I rejected her earlier...)", next: "day3_change_mind_teachers", stats: { Nurse: { affinity: 1 } } },
            { text: "Check other messages", next: "day3_check_more_after_reject" },
            { text: "Just go alone", next: "day3_prepare_school" }
        ]
    },
    "day3_msg_teacher_after_reject": {
        name: "Homeroom Teacher",
        text: "(Message sent last night at 10 PM) '{name}, are you going to school early tomorrow morning? I'm going early too, would you like to walk together?'",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        choices: [
            { text: "Go with Teacher (I rejected her earlier...)", next: "day3_change_mind_teachers", stats: { Teacher: { affinity: 1 } } },
            { text: "Check other messages", next: "day3_check_more_after_reject" },
            { text: "Just go alone", next: "day3_prepare_school" }
        ]
    },
    "day3_change_mind": {
        name: "Me",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        text: "(I sent another message. 'Sorry, I just checked other messages. I actually want to go together!')",
        next: "day3_change_mind_reply"
    },
    "day3_change_mind_teachers": {
        name: "Me",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        text: "(I sent another message. 'Sorry, I actually want to go together!')",
        next: "day3_change_mind_reply"
    },    
    "day3_change_mind_reply": {
        branches: [
            { next: "day3_change_mind_seoyeon", condition: "viewing_seoyeon" },
            { next: "day3_change_mind_yuna", condition: "viewing_yuna" },
            { next: "day3_change_mind_dain", condition: "viewing_dain" },
            { next: "day3_change_mind_nurse", condition: "viewing_nurse" },
            { next: "day3_change_mind_teacher", condition: "viewing_teacher" }
        ]
    },
    "day3_change_mind_seoyeon": {
        name: "Seoyeon",
        text: "(Immediate reply) 'Really?! Great! Then hurry up and come out! I'll wait!'",
        character: "assets/images/characters/seyoun_laugh.png",
        silhouette: true,
        next: "day3_walk_with_seoyeon"
    },
    "day3_change_mind_yuna": {
        name: "Yuna",
        text: "(Reply after a moment) '...Okay. I'll wait.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        next: "day3_walk_with_yuna"
    },
    "day3_change_mind_dain": {
        name: "Dain",
        text: "(Immediate reply) 'Okay! I'm leaving now! Wait for me!'",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        next: "day3_walk_with_dain"
    },
    "day3_change_mind_nurse": {
        name: "School Nurse",
        text: "(Reply) 'Hehe, changed your mind? Good, come out quickly.'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        next: "day3_walk_with_nurse"
    },
    "day3_change_mind_teacher": {
        name: "Homeroom Teacher",
        text: "(Reply) 'Really? That's fine! Get ready quickly.'",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        next: "day3_walk_with_teacher"
    },
    "day3_return_to_choice": {
        name: "Me",
        text: "(Hmm... who should I go with?)",
        choices: [
            { text: "Go with Seoyeon", next: "day3_walk_with_seoyeon", condition: "has_number_seyoun", stats: { Seoyeon: { affinity: 3 } } },
            { text: "Go with Yuna", next: "day3_walk_with_yuna", condition: "has_number_yuna", stats: { Yuna: { affinity: 3 } } },
            { text: "Go with Dain", next: "day3_walk_with_dain", condition: "has_number_dain", stats: { Dain: { affinity: 3 } } },
            { text: "Go with Nurse", next: "day3_walk_with_nurse", condition: "has_number_nurse", stats: { Nurse: { affinity: 3 } } },
            { text: "Go with Teacher", next: "day3_walk_with_teacher", condition: "has_number_teacher", stats: { Teacher: { affinity: 3 } } },
            { text: "Go alone", next: "day3_walk_alone" }
        ]
    },
    "day3_walk_with_seoyeon": {
        name: "Me",
        background: "assets/images/background/street.png",
        bgm: "daily2.mp3",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "(I headed to the front of Seoyeon's house.)",
        setFlag: "day3_morning_with_seoyeon",
        next: "day3_walk_with_seoyeon_2"
    },
    "day3_walk_with_seoyeon_2": {
        name: "Seoyeon",
        text: "\"Wow! You really came! Thank you!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day3_walk_seoyeon_dream"
    },
    "day3_walk_seoyeon_dream": {
        name: "Seoyeon",
        text: "(Walking side by side) \"Hey, {name}. Do you know what I dreamed about last night?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day3_walk_seoyeon_dream_choice"
    },
    "day3_walk_seoyeon_dream_choice": {
        name: "Me",
        character: "assets/images/characters/seyoun_normal.png",
        text: "(Seoyeon suddenly brings up a dream.)",
        choices: [
            { text: "What kind of dream?", next: "day3_walk_seoyeon_dream_ask" },
            { text: "Was I in it?", next: "day3_walk_seoyeon_dream_me" },
            { text: "A nightmare?", next: "day3_walk_seoyeon_dream_bad" }
        ]
    },
    "day3_walk_seoyeon_dream_ask": {
        name: "Seoyeon",
        text: "(Seoyeon's face turns red) \"I-it's a secret! It was nothing! Why are you asking?!\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day3_walk_seoyeon_crosswalk"
    },
    "day3_walk_seoyeon_dream_me": {
        name: "Seoyeon",
        text: "(Seoyeon freezes) \"W-what?! Why would you think that! ...Okay, maybe, but that's not the point!\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day3_walk_seoyeon_crosswalk"
    },
    "day3_walk_seoyeon_dream_bad": {
        name: "Seoyeon",
        text: "(Seoyeon sighs) \"Ugh, you totally killed the mood. It was a good dream, you know!\"",
        character: "assets/images/characters/seyoun_pout.png",
        stats: { Seoyeon: { affinity: -2 } },
        next: "day3_walk_seoyeon_crosswalk"
    },
    "day3_walk_seoyeon_crosswalk": {
        name: "Me",
        character: "assets/images/characters/seyoun_shy.png",
        text: "(We wait for the light at the crosswalk. Standing still, Seoyeon's hand is tantalizingly close to mine.)",
        next: "day3_walk_seoyeon_crosswalk_2"
    },
    "day3_walk_seoyeon_crosswalk_2": {
        name: "Me",
        text: "(Seoyeon lightly brushes my hand with her pinky finger. Our eyes meet, and we both look away at the same time.)",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day3_walk_seoyeon_freetalk"
    },
    "day3_walk_seoyeon_freetalk": {
        type: "free_talk",
        name: "Me",
        character: "assets/images/characters/seyoun_shy.png",
        text: "(We chat about various things on the way to school.)",
        context: "Walking to school with Seoyeon side by side. Our hands touched at the crosswalk, so there's a slightly self-conscious atmosphere. It's Friday morning, so weekend plans might come up.",
        maxTurns: 4,
        next: "day3_seoyeon_weekend_talk"
    },
    "day3_seoyeon_weekend_talk": {
        name: "Seoyeon",
        text: "(As the school gate comes into view, Seoyeon stutters as if trying to say something difficult) \"Um... {name}. Are you free this weekend? There's a café I've been wanting to visit...\"",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            { text: "What kind of café?", next: "day3_seoyeon_weekend_ask" },
            { text: "Just the two of us?", next: "day3_seoyeon_weekend_tease" },
            { text: "Sure, when should we go?", next: "day3_seoyeon_weekend_direct" }
        ]
    },
    "day3_seoyeon_weekend_ask": {
        name: "Seoyeon",
        text: "\"I saw it on social media, and it has a really pretty vibe. It's awkward going alone though... Let's meet at the park fountain at 2 PM on Saturday!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day3_seoyeon_weekend_choice"
    },
    "day3_seoyeon_weekend_tease": {
        name: "Seoyeon",
        text: "(Seoyeon's face turns bright red) \"W-what?! It's just friends hanging out! ...But I didn't invite anyone else. Saturday at 2 PM, at the park fountain.\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day3_seoyeon_weekend_choice"
    },
    "day3_seoyeon_weekend_direct": {
        name: "Seoyeon",
        text: "(Seoyeon beams) \"Really?! Saturday at 2 PM, at the park fountain! You better not be late!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day3_seoyeon_weekend_choice"
    },
    "day3_seoyeon_weekend_choice": {
        name: "Me",
        text: "(Seoyeon looks at me with eyes full of anticipation.)",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "Sure, I'll definitely be there", next: "day3_seoyeon_weekend_yes", setFlag: "day3_seoyeon_date_confirmed" },
            { text: "Let me think about it", next: "day3_seoyeon_weekend_later" },
            { text: "Sorry, I'm busy this weekend", next: "day3_seoyeon_weekend_no" }
        ]
    },
    "day3_seoyeon_weekend_yes": {
        name: "Seoyeon",
        text: "(Seoyeon nearly shouts but quickly covers her mouth) \"...Ahem! O-okay. See you Saturday then. You can look forward to it!\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 8 } },
        next: "day3_arrive_school"
    },
    "day3_seoyeon_weekend_later": {
        name: "Seoyeon",
        text: "(Seoyeon's expression dims slightly) \"...Okay, I see. Let me know later then.\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "day3_arrive_school"
    },
    "day3_seoyeon_weekend_no": {
        name: "Seoyeon",
        text: "(Seoyeon forces a smile) \"...Oh, is that so? It's fine! We can go some other time!\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -15 } },
        next: "day3_arrive_school"
    },
    
    "day3_walk_with_yuna": {
        name: "Me",
        background: "assets/images/background/street.png",
        bgm: "daily2.mp3",
        text: "(I headed toward the alley on the way to school. Yuna is standing under the shade of a tree.)",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "day3_morning_with_yuna",
        next: "day3_walk_yuna_greet"
                
    },
    "day3_walk_yuna_greet": {
        name: "Yuna",
        text: "\"...You came. (Walking quietly) The weather is nice today. But... things that look peaceful are often the most dangerous.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_walk_yuna_leaf"
    },
    "day3_walk_yuna_leaf": {
        name: "Me",
        text: "(A leaf blown by the wind lands on my head. Yuna quietly reaches out and picks it off.)",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_walk_yuna_leaf_2"
    },
    "day3_walk_yuna_leaf_2": {
        name: "Yuna",
        text: "\"...Prettier than a flower.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_walk_yuna_leaf_3"
    },
    "day3_walk_yuna_leaf_3": {
        name: "Me",
        character: "assets/images/characters/yuna_normal.png",
        text: "(My heart skips at Yuna's deadpan remark. Before I can respond, Yuna suddenly stops walking.)",
        next: "day3_walk_yuna_necktie"
    },
    "day3_walk_yuna_necktie": {
        name: "Yuna",
        text: "\"...Hey. Stay still.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_walk_yuna_necktie_2"
    },
    "day3_walk_yuna_necktie_2": {
        name: "Me",
        text: "(Yuna starts fixing my necktie. Her face is barely 10 centimeters away from mine.)",
        character: "assets/images/characters/yuna_normal.png",
        choices: [
            { text: "(Stay still)", next: "day3_walk_yuna_necktie_still" },
            { text: "Your hands are cold, Yuna", next: "day3_walk_yuna_necktie_cold" }
        ]
    },
    "day3_walk_yuna_necktie_still": {
        name: "Yuna",
        text: "\"...Dummy. How can you walk around with it this loose.\"",
        character: "assets/images/characters/yuna_shy.png",
        stats: { Yuna: { affinity: 5 } },
        next: "day3_walk_yuna_freetalk"
    },
    "day3_walk_yuna_necktie_cold": {
        name: "Yuna",
        text: "(Yuna's hands pause. After a moment of silence) \"...Want me to warm them up?\"",
        character: "assets/images/characters/yuna_shy.png",
        stats: { Yuna: { affinity: 8 } },
        next: "day3_walk_yuna_freetalk"
    },
    "day3_walk_yuna_freetalk": {
        type: "free_talk",
        name: "Me",
        character: "assets/images/characters/yuna_shy.png",
        text: "(I walk alongside Yuna toward school. A quiet but comfortable silence fills the air.)",
        context: "Walking to school with Yuna in the morning. She just fixed my necktie, creating an oddly intimate atmosphere. It's quiet but the distance between us feels close.",
        maxTurns: 3,
        next: "day3_walk_yuna_talk"
    },
    "day3_walk_yuna_talk": {
        name: "Yuna",
        text: "(Walking down the quiet path, Yuna suddenly speaks) \"{name}, this weekend... there's a place I want to show only you.\"",
        character: "assets/images/characters/yuna_normal.png",
        choices: [
            { text: "What kind of place?", next: "day3_yuna_weekend_ask" },
            { text: "Another secret?", next: "day3_yuna_weekend_curious" },
            { text: "...Okay, when?", next: "day3_yuna_weekend_direct" }
        ]
    },
    "day3_yuna_weekend_ask": {
        name: "Yuna",
        text: "\"...A place where you can see the real face of this school. Saturday evening at 8 PM, at the school's back gate. Don't be late. There are things that can only be seen in the darkness.\"",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: 3 } },
        next: "day3_yuna_weekend_choice"
    },
    "day3_yuna_weekend_curious": {
        name: "Yuna",
        text: "(Yuna smiles coldly) \"It's closer to the truth than a secret. Saturday evening at 8 PM. Everything changes after the sun sets. You'll come, right?\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 1 } },
        next: "day3_yuna_weekend_choice"
    },
    "day3_yuna_weekend_direct": {
        name: "Yuna",
        text: "(Yuna looks at me in surprise, then smiles) \"...That's so like you. Saturday evening at 8 PM, school back gate. There are things that can only be seen when darkness falls. You must come.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 5 } },
        next: "day3_yuna_weekend_choice"
    },
    "day3_yuna_weekend_choice": {
        name: "Me",
        text: "(Yuna's serious gaze pierces through me. 8 PM in the evening... Something feels ominous.)",
        character: "assets/images/characters/yuna_normal.png",
        choices: [
            { text: "Okay, I'll definitely come", next: "day3_yuna_weekend_yes", setFlag: "day3_yuna_date_confirmed" },
            { text: "Let me think about it and reply", next: "day3_yuna_weekend_later" },
            { text: "Sorry, I have other plans", next: "day3_yuna_weekend_no" }
        ]
    },
    "day3_yuna_weekend_yes": {
        name: "Yuna",
        text: "(Yuna briefly holds my hand then lets go) \"...Thank you. You won't regret it. Saturday night, be ready to face the truth.\"",
        character: "assets/images/characters/yuna_shy.png",
        stats: { Yuna: { affinity: 8 } },
        next: "day3_arrive_school"
    },
    "day3_yuna_weekend_later": {
        name: "Yuna",
        text: "(Yuna looks disappointed and turns her head away) \"...I see. But there's only one chance. Think carefully. There's a door that only opens at night.\"",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: -5 } },
        next: "day3_arrive_school"
    },
    "day3_yuna_weekend_no": {
        name: "Yuna",
        text: "(Yuna's gaze turns cold) \"......\"",
        character: "assets/images/characters/yuna_bored.png",
        stats: { Yuna: { affinity: -15 } },
        next: "day3_arrive_school"
    },
    "day3_walk_with_dain": {
        name: "Me",
        text: "(On the way to the meeting spot. From a distance, Dain is waving her hand widely and running toward me.)",
        background: "assets/images/background/street.png",
        bgm: "daily2.mp3",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "day3_morning_with_dain",
        next: "day3_walk_dain_bump"
    },
    "day3_walk_dain_bump": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "\"{name}!! Yay~!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day3_walk_dain_bump_2"
    },
    "day3_walk_dain_bump_2": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/dain_laugh.png",
        text: "(Dain charges at me full speed with no brakes. There's no time to dodge— CRASH!)",
        next: "day3_walk_dain_bump_3"
    },
    "day3_walk_dain_bump_3": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "\"Ow! S-sorry! I couldn't stop!\"",
        character: "assets/images/characters/dain_shy.png",
        next: "day3_walk_dain_bump_4"
    },
    "day3_walk_dain_bump_4": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/dain_shy.png",
        text: "(Dain fell on top of me. Our faces are barely 10 centimeters apart... I can feel her breath.)",
        choices: [
            { text: "\"Are you okay?\" (Help her up)", next: "day3_walk_dain_help" },
            { text: "\"Should we stay like this?\"", next: "day3_walk_dain_bold" },
            { text: "(Can't say anything)", next: "day3_walk_dain_freeze" }
        ]
    },
    "day3_walk_dain_help": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "(As I take her hand and help her up, Dain's face turns beet red) \"Th-thanks... My heart almost exploded! I mean from the crash! Not for any other reason!\"",
        character: "assets/images/characters/dain_shy.png",
        stats: { Dain: { affinity: 5 } },
        next: "day3_walk_dain_greet"
    },
    "day3_walk_dain_bold": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "\"Huh?! Y-you idiot! Get up now! People are watching!\"",
        character: "assets/images/characters/dain_shy.png",
        stats: { Dain: { affinity: 8 } },
        next: "day3_walk_dain_greet_shy"
    },
    "day3_walk_dain_freeze": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "\"Hey, what's wrong?! Who's blushing here?! ...Am I blushing too? Ugh, whatever!\"",
        character: "assets/images/characters/dain_shy.png",
        stats: { Dain: { affinity: 3 } },
        next: "day3_walk_dain_greet"
    },
    "day3_walk_dain_greet_shy": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "(Jumping up and dusting herself off) \"...Dummy. What are you doing first thing in the morning.\"",
        character: "assets/images/characters/dain_shy.png",
        next: "day3_walk_dain_greet"
    },
    "day3_walk_dain_greet": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "(Composing herself) \"A-anyway! Let's walk to school together! The weather is perfect for exercise today!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day3_walk_dain_freetalk"
    },
    "day3_walk_dain_freetalk": {
        type: "free_talk",
        name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/dain_laugh.png",
        text: "(I walk alongside Dain toward school. Perhaps because of the earlier collision, she's keeping a bit more distance than usual.)",
        context: "Walking to school with Dain. There was a bumping incident earlier so Dain is a bit shy. She's energetic but blushes occasionally.",
        maxTurns: 4,
        next: "day3_walk_dain_talk"
    },
    "day3_walk_dain_talk": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "(Walking excitedly) \"Oh! By the way {name}! Tomorrow at 9 AM, our team has a practice match at the gym. Come cheer for me!\"",
        character: "assets/images/characters/dain_normal.png",
        choices: [
            { text: "Sounds fun! Of course I'll go!", next: "day3_dain_weekend_ask" },
            { text: "9 AM? That's pretty early", next: "day3_dain_weekend_early" },
            { text: "That sounds troublesome...", next: "day3_dain_weekend_hesitate" }
        ]
    },
    "day3_dain_weekend_ask": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "(Dain jumps excitedly) \"Really?! Awesome! Then after practice, let's eat together! Let's go get tteokbokki!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 3 } },
        next: "day3_dain_weekend_choice"
    },
    "day3_dain_weekend_early": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "(Dain smiles) \"Right? It's hard for me to wake up early too, but it would really give me energy if you came!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 1 } },
        next: "day3_dain_weekend_choice"
    },
    "day3_dain_weekend_hesitate": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "(Dain puts her arm around my shoulder) \"It's okay! Just come and cheer! I'll show you my awesome spike!\"",
        character: "assets/images/characters/dain_normal.png",
        stats: { Dain: { affinity: -2 } },
        next: "day3_dain_weekend_choice"
    },
    "day3_dain_weekend_choice": {
        name: "Me",
        background: "assets/images/background/street.png",
        text: "(Dain looks at me with hopeful eyes.)",
        character: "assets/images/characters/dain_normal.png",
        choices: [
            { text: "Okay! See you Saturday at 9 at the gym", next: "day3_dain_weekend_yes", setFlag: "day3_dain_date_confirmed" },
            { text: "Let me think about it and contact you", next: "day3_dain_weekend_later" },
            { text: "Good luck, I have other plans this weekend...", next: "day3_dain_weekend_no" }
        ]
    },
    "day3_dain_weekend_yes": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "(Dain grabs my hand and shakes it) \"Wow! You're the best {name}! Then see you on Saturday! Don't be late!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 8 } },
        next: "day3_arrive_school"
    },
    "day3_dain_weekend_later": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "(Dain looks a bit down) \"Aw... But you have to come, okay? Promise?\"",
        character: "assets/images/characters/dain_normal.png",
        stats: { Dain: { affinity: -3 } },
        next: "day3_arrive_school"
    },
    "day3_dain_weekend_no": {
        name: "Dain",
        background: "assets/images/background/street.png",
        text: "(Dain makes a disappointed face) \"Oh... I see. But if you have time later, make sure to visit!\"",
        character: "assets/images/characters/dain_sad.png",
        stats: { Dain: { affinity: -10 } },
        next: "day3_arrive_school"
    },
    "day3_walk_with_nurse": {
        name: "Me",
        text: "(I headed to the meeting spot with the teacher. The school nurse is waiting.)",
        setFlag: "day3_morning_with_nurse",
        background: "assets/images/background/street.png",
        bgm: "daily2.mp3",
        character: "assets/images/characters/nurse_normal.png",
        next: "day3_walk_nurse_greet"
    },
    "day3_walk_nurse_greet": {
        name: "School Nurse",
        background: "assets/images/background/street.png",
        text: "\"Oh my, {name}. You came? Hehe, our transfer student is so nice. Come on, let's walk together.\"",
        character: "assets/images/characters/nurse_normal.png",
	    next: "day3_walk_nurse_arm"
	},
	"day3_walk_nurse_arm": {
		name: "Me",
        background: "assets/images/background/street.png",
		text: "(The teacher subtly places her hand on my arm as we walk side by side. What would people think if they saw us...)",
		character: "assets/images/characters/nurse_normal.png",
		choices: [
			{ text: "(Just enjoy it)", next: "day3_walk_nurse_enjoy" },
			{ text: "\"Teacher, people might see us...\"", next: "day3_walk_nurse_worry" }
		]
	},
	"day3_walk_nurse_enjoy": {
		name: "School Nurse",
        background: "assets/images/background/street.png",
		text: "(The teacher smiles with satisfaction) \"Hehe, this is nice. Walking together like this.\"",
		character: "assets/images/characters/nurse_shy.png",
		stats: { Nurse: { affinity: 5 } },
		next: "day3_walk_nurse_conflict"
	},
	"day3_walk_nurse_worry": {
		name: "School Nurse",
        background: "assets/images/background/street.png",
		text: "(The teacher sighs softly and removes her hand) \"You're right... We can't let anyone find out about us.\"",
		character: "assets/images/characters/nurse_normal.png",
		stats: { Nurse: { affinity: 2 } },
		next: "day3_walk_nurse_conflict"
	},
	"day3_walk_nurse_conflict": {
		name: "School Nurse",
        background: "assets/images/background/street.png",
		text: "(Looking lost in thought, she says quietly) \"...{name}, I know a teacher shouldn't be doing this with a student... but my heart won't listen.\"",
		character: "assets/images/characters/nurse_normal.png",
		next: "day3_walk_nurse_conflict_2"
	},
	"day3_walk_nurse_conflict_2": {
		name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/nurse_normal.png",
		text: "(There's an unusual seriousness in her voice. Is she struggling with this too?)",
		choices: [
			{ text: "\"I like you too, teacher\"", next: "day3_walk_nurse_confess", stats: { Nurse: { affinity: 8 } } },
			{ text: "(Quietly take her hand)", next: "day3_walk_nurse_hand", stats: { Nurse: { affinity: 10 } } },
			{ text: "\"But you're still a teacher\"", next: "day3_walk_nurse_boundary", stats: { Nurse: { affinity: -5 } } }
		]
	},
	"day3_walk_nurse_confess": {
		name: "School Nurse",
        background: "assets/images/background/street.png",
		text: "(Her eyes go wide) \"...You're really dangerous, you know? Making a teacher's heart waver like this.\"",
		character: "assets/images/characters/nurse_shy.png",
		next: "day3_walk_nurse_freetalk"
	},
	"day3_walk_nurse_hand": {
		name: "School Nurse",
        background: "assets/images/background/street.png",
		text: "(She looks down at our hands in surprise... then holds on tight) \"...Just five seconds. Let's stay like this for just five seconds.\"",
		character: "assets/images/characters/nurse_shy.png",
		next: "day3_walk_nurse_freetalk"
	},
	"day3_walk_nurse_boundary": {
		name: "School Nurse",
        background: "assets/images/background/street.png",
		text: "(Her expression freezes for a moment before she forces a smile) \"...Right. A teacher is a teacher, after all.\"",
		character: "assets/images/characters/nurse_normal.png",
		next: "day3_walk_nurse_freetalk"
	},
	"day3_walk_nurse_freetalk": {
		type: "free_talk",
		name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/nurse_shy.png",
		text: "(I walk toward school with the nurse. A strange mix of tension and excitement fills the air.)",
		context: "Walking to school with the school nurse. She confessed that she shouldn't feel this way about a student. The tension of a forbidden love hangs in the air.",
		maxTurns: 3,
		next: "day3_walk_nurse_talk"
	},
	"day3_walk_nurse_talk": {
		name: "School Nurse",
        background: "assets/images/background/street.png",
		text: "(Walking to school, the teacher subtly places her hand on my arm) \"Say, {name}. Do you have time this weekend?\"",
		character: "assets/images/characters/nurse_normal.png",
		choices: [
			{ text: "Yes, why? Is something going on?", next: "day3_nurse_weekend_ask" },
			{ text: "Well... what are your plans for the weekend?", next: "day3_nurse_weekend_curious" },
			{ text: "I don't have any plans yet?", next: "day3_nurse_weekend_none" }
		]
	},
	"day3_nurse_weekend_ask": {
		name: "School Nurse",
        background: "assets/images/background/street.png",
		text: "(The teacher smiles meaningfully) \"Hehe, actually... I reserved a nice restaurant for Sunday evening. It'd be a shame to go alone... Want to come with me? How about Sunday evening at 7?\"",
		character: "assets/images/characters/nurse_normal.png",
		stats: { Nurse: { affinity: 3 } },
		next: "day3_nurse_weekend_choice"
	},
	"day3_nurse_weekend_curious": {
		name: "School Nurse",
        background: "assets/images/background/street.png",
		text: "(The teacher winks playfully) \"Hmm... I have a nice restaurant reserved and I wanted to go together. If you're okay with it... Sunday evening at 7?\"",
		character: "assets/images/characters/nurse_normal.png",
		stats: { Nurse: { affinity: 1 } },
		next: "day3_nurse_weekend_choice"
	},
	"day3_nurse_weekend_none": {
		name: "School Nurse",
        background: "assets/images/background/street.png",
		text: "(The teacher smiles with satisfaction) \"Really? Then let's have dinner together on Sunday evening! How about meeting at 7? I'll send you the address.\"",
		character: "assets/images/characters/nurse_normal.png",
		stats: { Nurse: { affinity: 2 } },
		next: "day3_nurse_weekend_choice"
	},
	"day3_nurse_weekend_choice": {
		name: "Me",
        background: "assets/images/background/street.png",
		text: "(The teacher gazes at me with captivating eyes. My heart is racing...)",
		character: "assets/images/characters/nurse_normal.png",
		choices: [
			{ text: "Sure! I'll definitely be there on Sunday", next: "day3_nurse_weekend_yes", setFlag: "day3_nurse_date_confirmed" },
			{ text: "Let me think about it and reply later", next: "day3_nurse_weekend_later" },
			{ text: "Sorry, I have other plans this weekend...", next: "day3_nurse_weekend_no" }
		]
	},
	"day3_nurse_weekend_yes": {
		name: "School Nurse",
        background: "assets/images/background/street.png",
		text: "(The teacher gently squeezes my hand then lets go) \"Hehe, really? Then Sunday evening at 7, I'll be looking forward to it. Dress up nice, okay?\"",
		character: "assets/images/characters/nurse_normal.png",
		stats: { Nurse: { affinity: 8 } },
		next: "day3_arrive_school"
	},
	"day3_nurse_weekend_later": {
		name: "School Nurse",
        background: "assets/images/background/street.png",
		text: "(The teacher makes a slightly disappointed face) \"Oh... really? Then come visit the nurse's office at lunchtime. Let's talk again.\"",
		character: "assets/images/characters/nurse_normal.png",
		stats: { Nurse: { affinity: -3 } },
		next: "day3_arrive_school"
	},
	"day3_nurse_weekend_no": {
		name: "School Nurse",
        background: "assets/images/background/street.png",
		text: "(The teacher's smile stiffens slightly) \"...I see. That's okay. Maybe next time.\"",
		character: "assets/images/characters/nurse_normal.png",
		stats: { Nurse: { affinity: -10 } },
		next: "day3_arrive_school"
	},
    "day3_walk_with_teacher": {
        name: "Me",
        text: "(I headed to the meeting spot. The homeroom teacher is waving from the car.)",
        background: "assets/images/background/street.png",
        bgm: "daily2.mp3",
        character: "assets/images/characters/teacher_normal.png",
        setFlag: "day3_morning_with_teacher",
        next: "day3_walk_teacher_greet"
    },
    "day3_walk_teacher_greet": {
        name: "Homeroom Teacher",
        background: "assets/images/background/street.png",
        text: "\"{name}! Good morning! It's nice to commute together by car. Now, put on your seatbelt.\"",
        character: "assets/images/characters/teacher_smile.png",
	    next: "day3_walk_teacher_car"
	},
	"day3_walk_teacher_car": {
		name: "Me",
        background: "assets/images/background/street.png",
		text: "(I got into the teacher's car. A subtle perfume scent and soft music fills the air. It feels awkward yet exciting.)",
		character: "assets/images/characters/teacher_normal.png",
		next: "day3_walk_teacher_hair"
	},
	"day3_walk_teacher_hair": {
		name: "Homeroom Teacher",
        background: "assets/images/background/street.png",
		text: "(While stopped at a red light, the teacher suddenly reaches out to fix my hair) \"...Hold on. This part was messy.\"",
		character: "assets/images/characters/teacher_normal.png",
		next: "day3_walk_teacher_hair_2"
	},
	"day3_walk_teacher_hair_2": {
		name: "Homeroom Teacher",
        background: "assets/images/background/street.png",
		text: "(She pauses, whispering) \"...I shouldn't be doing this to a student.\"",
		character: "assets/images/characters/teacher_shy.png",
		next: "day3_walk_teacher_conflict"
	},
	"day3_walk_teacher_conflict": {
		name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/teacher_shy.png",
		text: "(Her touch is warm. The air inside the car shifts to something strange.)",
		choices: [
			{ text: "\"Your hands are warm, teacher\"", next: "day3_walk_teacher_warm", stats: { Teacher: { affinity: 5 } } },
			{ text: "(Quietly hold her hand)", next: "day3_walk_teacher_hold", stats: { Teacher: { affinity: 8 } } },
			{ text: "\"It's okay, teacher\"", next: "day3_walk_teacher_calm", stats: { Teacher: { affinity: 2 } } }
		]
	},
	"day3_walk_teacher_warm": {
		name: "Homeroom Teacher",
        background: "assets/images/background/street.png",
		text: "(The teacher pulls her hand back, flustered) \"Oh my, this kid... Surprising a teacher like that.\"",
		character: "assets/images/characters/teacher_shy.png",
		next: "day3_walk_teacher_freetalk"
	},
	"day3_walk_teacher_hold": {
		name: "Homeroom Teacher",
        background: "assets/images/background/street.png",
		text: "(She looks at our hands in surprise... but doesn't pull away) \"...When the light changes, I'm letting go. Promise.\"",
		character: "assets/images/characters/teacher_shy.png",
		next: "day3_walk_teacher_freetalk"
	},
	"day3_walk_teacher_calm": {
		name: "Homeroom Teacher",
        background: "assets/images/background/street.png",
		text: "(The teacher smiles wistfully) \"...Thank you. Was teacher being a bit strange?\"",
		character: "assets/images/characters/teacher_smile.png",
		next: "day3_walk_teacher_freetalk"
	},
	"day3_walk_teacher_freetalk": {
		type: "free_talk",
		name: "Me",
        background: "assets/images/background/street.png",
        character: "assets/images/characters/teacher_shy.png",
		text: "(Riding in the homeroom teacher's car on the way to school.)",
		context: "In the homeroom teacher's car on the way to school. She fixed my hair and said 'I shouldn't be doing this to a student.' The tension of a forbidden love hangs in the air.",
		maxTurns: 3,
		next: "day3_walk_teacher_talk"
	},
	"day3_walk_teacher_talk": {
		name: "Homeroom Teacher",
        background: "assets/images/background/street.png",
		text: "(While driving, the teacher carefully brings up a topic) \"Say, {name}. Do you have time this weekend?\"",
		character: "assets/images/characters/teacher_normal.png",
		choices: [
			{ text: "Yes, why? Is something going on?", next: "day3_teacher_weekend_ask" },
			{ text: "Well... what are your plans for the weekend?", next: "day3_teacher_weekend_curious" },
			{ text: "I don't have any plans yet?", next: "day3_teacher_weekend_none" }
		]
	},
	"day3_teacher_weekend_ask": {
		name: "Homeroom Teacher",
        background: "assets/images/background/street.png",
		text: "(The teacher glances at me and smiles) \"Actually... I got two tickets for a museum exhibition. It'd be a shame to go alone... Want to come with me? How about Sunday afternoon at 2?\"",
		character: "assets/images/characters/teacher_smile.png",
		stats: { Teacher: { affinity: 3 } },
		next: "day3_teacher_weekend_choice"
	},
	"day3_teacher_weekend_curious": {
		name: "Homeroom Teacher",
        background: "assets/images/background/street.png",
		text: "\"Hmm... I have museum exhibition tickets and I wanted to go together. If you're okay with it... Sunday afternoon at 2?\"",
		character: "assets/images/characters/teacher_normal.png",
		stats: { Teacher: { affinity: 1 } },
		next: "day3_teacher_weekend_choice"
	},
	"day3_teacher_weekend_none": {
		name: "Homeroom Teacher",
        background: "assets/images/background/street.png",
		text: "(The teacher's face lights up) \"Really? Then let's go see the museum exhibition on Sunday afternoon! How about meeting at the museum at 2?\"",
		character: "assets/images/characters/teacher_smile.png",
		stats: { Teacher: { affinity: 2 } },
		next: "day3_teacher_weekend_choice"
	},
	"day3_teacher_weekend_choice": {
		name: "Me",
        background: "assets/images/background/street.png",
		text: "(The teacher glances at me with hopeful eyes. The air in the car feels strangely warm...)",
		character: "assets/images/characters/teacher_normal.png",
		choices: [
			{ text: "Sure! I'll definitely be there on Sunday", next: "day3_teacher_weekend_yes", setFlag: "day3_teacher_date_confirmed" },
			{ text: "Let me think about it and reply later", next: "day3_teacher_weekend_later" },
			{ text: "Museums are boring though.", next: "day3_teacher_weekend_no" }
		]
	},
	"day3_teacher_weekend_yes": {
		name: "Homeroom Teacher",
        background: "assets/images/background/street.png",
		text: "(The teacher smiles brightly) \"Really? Then Sunday at 2 PM, it's a date. It'll be fun!\"",
		character: "assets/images/characters/teacher_smile.png",
		stats: { Teacher: { affinity: 8 } },
		next: "day3_arrive_school"
	},
	"day3_teacher_weekend_later": {
		name: "Homeroom Teacher",
        background: "assets/images/background/street.png",
		text: "(The teacher makes a slightly disappointed face) \"Oh... really? Then let's talk again at lunchtime.\"",
		character: "assets/images/characters/teacher_normal.png",
		stats: { Teacher: { affinity: -3 } },
		next: "day3_arrive_school"
	},
	"day3_teacher_weekend_no": {
		name: "Homeroom Teacher",
        background: "assets/images/background/street.png",
		text: "(The teacher's expression stiffens for a moment) \"...That's disappointing. I had high expectations for you.\"",
		character: "assets/images/characters/teacher_normal.png",
		stats: { Teacher: { affinity: -10 } },
		next: "day3_arrive_school"
	},
	"day3_prepare_school": {
        name: "Me",
        text: "(I hurried to get ready for school.)",
        next: "day3_walk_alone"
    },
	"day3_prepare_school_no_contact": {
        name: "Me",
        text: "(I check my messages...)",
        next: "day3_prepare_school_ads"
    },
    "day3_prepare_school_ads": {
        name: "Me",
        text: "('Limited time sale! Order now...', 'Congratulations on winning the event...') ...They're all spam messages. Looks like I'm going to school alone today.",
        next: "day3_walk_alone"
    },   
    "day3_walk_alone": {
        name: "Me",
        background: "assets/images/background/street.png",
        bgm: "daily2.mp3",
        character: null,
        text: "(I headed to school alone. The morning air is refreshing.)",
        next: "day3_arrive_school"
    },     
    "day3_arrive_school": {
        name: "Me",
        text: "(Before I knew it, I arrived at the school gate. Another lively day begins.)",
        background: "assets/images/background/school.png",
        character: null,
        next: "day3_classroom"
    },
    "day3_classroom": {
        name: "Me",
        text: "(As I enter the classroom, the kids are buzzing. I sit down at my desk and notice... something is on it.)",
        background: "assets/images/background/room_school.png",
        character: null,
        branches: [
            { next: "day3_classroom_note_seoyeon", condition: "day3_morning_with_seoyeon" },
            { next: "day3_classroom_note_yuna", condition: "day3_morning_with_yuna" },
            { next: "day3_classroom_note_dain", condition: "day3_morning_with_dain" },
            { next: "day3_classroom_empty" }
        ]
    },
    "day3_classroom_note_seoyeon": {
        name: "Me",
        text: "(There's a small note. 'Let's eat lunch together ♡ - Seoyeon' ... We were literally just together, and she left a note in advance?)",
        stats: { Seoyeon: { affinity: 2 } },
        next: "day3_classroom_class_start"
    },
    "day3_classroom_note_yuna": {
        name: "Me",
        text: "(There's an origami crow. I unfold its wings to find writing inside. '...Tomorrow night' — Looks like Yuna left it.)",
        stats: { Yuna: { affinity: 2 } },
        next: "day3_classroom_class_start"
    },
    "day3_classroom_note_dain": {
        name: "Me",
        text: "(There's an energy bar and a sticky note. 'If you don't exercise, at least eat this! - Dain' ... She must have left it earlier.)",
        stats: { Dain: { affinity: 2 } },
        next: "day3_classroom_class_start"
    },
    "day3_classroom_empty": {
        name: "Me",
        text: "(Nothing on my desk. Just an ordinary Friday morning.)",
        next: "day3_classroom_class_start"
    },
    "day3_classroom_class_start": {
        name: "Me",
        text: "(Class begins. The homeroom teacher starts writing problems on the board.)",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/teacher_normal.png",
        next: "day3_classroom_teacher_event"
    },
    "day3_classroom_teacher_event": {
        name: "Me",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/teacher_normal.png",
        text: "(When the teacher raises her arm to write on the board, a subtle whiff of perfume drifts over. No one else seems to notice... only me.)",
        branches: [
            { next: "day3_classroom_teacher_wink", condition: "isDating_Teacher" },
            { next: "day3_classroom_teacher_glance", condition: "day3_teacher_date_confirmed" },
            { next: "day3_classroom_nurse_visit" }
        ]
    },
    "day3_classroom_teacher_wink": {
        name: "Homeroom Teacher",
        text: "(While asking a question, her eyes meet mine... she gives a subtle wink) \"...{name}, your answer?\"",
        character: "assets/images/characters/teacher_shy.png",
        stats: { Teacher: { affinity: 3 } },
        next: "day3_classroom_nurse_visit"
    },
    "day3_classroom_teacher_glance": {
        name: "Me",
        text: "(The teacher glances my way and smiles faintly. Is she thinking about our Sunday plans?)",
        character: "assets/images/characters/teacher_smile.png",
        stats: { Teacher: { affinity: 2 } },
        next: "day3_classroom_nurse_visit"
    },
    "day3_classroom_nurse_visit": {
        name: "Me",
        text: "(Mid-class, the classroom door opens and the school nurse walks in.)",
        character: "assets/images/characters/nurse_normal.png",
        next: "day3_classroom_nurse_visit_2"
    },
    "day3_classroom_nurse_visit_2": {
        name: "School Nurse",
        text: "\"Sorry to interrupt, teacher. I'm here to hand out health surveys.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day3_classroom_nurse_visit_3"
    },
    "day3_classroom_nurse_visit_3": {
        name: "Me",
        character: "assets/images/characters/nurse_normal.png",
        text: "(The nurse pauses in front of me while handing out surveys. Her fingers lightly brush against my hand.)",
        branches: [
            { next: "day3_classroom_nurse_secret", condition: "isDating_Nurse" },
            { next: "day3_classroom_nurse_band", condition: "day3_nurse_date_confirmed" },
            { next: "day3_classroom_nurse_pass" }
        ]
    },
    "day3_classroom_nurse_secret": {
        name: "School Nurse",
        text: "(Without anyone noticing, she slips a small note between the survey pages. 'Come to the nurse's office at lunch. I've prepared something special 💋')",
        character: "assets/images/characters/nurse_shy.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day3_classroom_nurse_leave"
    },
    "day3_classroom_nurse_band": {
        name: "School Nurse",
        text: "(She hands me the survey and places a band-aid on the back of my hand) \"...You don't have a wound? Well... it's teacher's mark.\"",
        character: "assets/images/characters/nurse_shy.png",
        stats: { Nurse: { affinity: 3 } },
        next: "day3_classroom_nurse_leave"
    },
    "day3_classroom_nurse_pass": {
        name: "Me",
        text: "(The nurse smiles gently as she hands me the survey and moves on.)",
        next: "day3_classroom_nurse_leave"
    },
    "day3_classroom_nurse_leave": {
        name: "Me",
        character: "assets/images/characters/nurse_shy.png",
        text: "(The nurse leaves the classroom. None of the other students noticed a thing.)",
        next: "day3_break_time"
    },

    // =========================================================================
    // 쉬는 시간 - 주말 약속 메시지
    // =========================================================================
    // 아침에 동행하지 않은 히로인들이 주말 데이트를 제안하는 메시지를 보낸다.
    // 여러 명의 제안을 수락하면 day3_has_multiple_dates 플래그가 설정된다.
    // =========================================================================
    "day3_break_time": {
        name: "Me",
        character: "assets/images/characters/nurse_shy.png",
        silhouette: true,
        text: "(Break time. I check my phone — there are messages about weekend plans.)",
        branches: [
            { next: "day3_weekend_check_seoyeon", condition: "has_any_contact" },
            { next: "day3_morning_end" }
        ]
    },

    // --- 서연 주말 초대 체크 ---
    "day3_weekend_check_seoyeon": {
        name: "System",
        text: "",
        branches: [
            { next: "day3_weekend_invite_seoyeon", condition: "has_number_seyoun", excludeCondition: "day3_morning_with_seoyeon" },
            { next: "day3_weekend_check_yuna" }
        ]
    },
    "day3_weekend_invite_seoyeon": {
        name: "Seoyeon",
        text: "(Message) 'Hey {name}! Want to check out that new café this Saturday? I really want to go with you! ☕'",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        choices: [
            { text: "Sure! Let's go!", next: "day3_weekend_yes_seoyeon", setFlag: "day3_seoyeon_date_confirmed", stats: { Seoyeon: { affinity: 8 } } },
            { text: "Sorry, I'm busy this weekend", next: "day3_weekend_no_seoyeon", stats: { Seoyeon: { affinity: -3 } } }
        ]
    },
    "day3_weekend_yes_seoyeon": {
        name: "Seoyeon",
        text: "(Instant reply) 'Really?! See you Saturday then! You can look forward to it! ♡'",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        next: "day3_weekend_check_yuna"
    },
    "day3_weekend_no_seoyeon": {
        name: "Seoyeon",
        text: "(Reply after a long pause) '...That's okay! Maybe next time!'",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        next: "day3_weekend_check_yuna"
    },

    // --- 유나 주말 초대 체크 ---
    "day3_weekend_check_yuna": {
        name: "System",
        text: "",
        branches: [
            { next: "day3_weekend_invite_yuna", condition: "has_number_yuna", excludeCondition: "day3_morning_with_yuna" },
            { next: "day3_weekend_check_dain" }
        ]
    },
    "day3_weekend_invite_yuna": {
        name: "Yuna",
        text: "(Message) '...Saturday night. 8 PM. The warehouse behind school. Come if you want the truth. Alone.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        choices: [
            { text: "Got it, I'll be there", next: "day3_weekend_yes_yuna", setFlag: "day3_yuna_date_confirmed", stats: { Yuna: { affinity: 8 } } },
            { text: "That's creepy, no thanks", next: "day3_weekend_no_yuna", stats: { Yuna: { affinity: -3 } } }
        ]
    },
    "day3_weekend_yes_yuna": {
        name: "Yuna",
        text: "(Reply) '...Thank you. You won't regret it.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        next: "day3_weekend_check_dain"
    },
    "day3_weekend_no_yuna": {
        name: "Yuna",
        text: "(Read. No reply.)",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        next: "day3_weekend_check_dain"
    },

    // --- 다인 주말 초대 체크 ---
    "day3_weekend_check_dain": {
        name: "System",
        text: "",
        branches: [
            { next: "day3_weekend_invite_dain", condition: "has_number_dain", excludeCondition: "day3_morning_with_dain" },
            { next: "day3_weekend_check_nurse" }
        ]
    },
    "day3_weekend_invite_dain": {
        name: "Dain",
        text: "(Message) '{name}!!! Wanna work out with me at the gym on Saturday?! See you at 9!! 💪🔥'",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        choices: [
            { text: "Sure! See you Saturday!", next: "day3_weekend_yes_dain", setFlag: "day3_dain_date_confirmed", stats: { Dain: { affinity: 8 } } },
            { text: "Working out isn't really my thing...", next: "day3_weekend_no_dain", stats: { Dain: { affinity: -3 } } }
        ]
    },
    "day3_weekend_yes_dain": {
        name: "Dain",
        text: "(Reply in 0.5 seconds) 'AWESOME!! Don't forget your gym clothes!! 🏃‍♂️'",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        next: "day3_weekend_check_nurse"
    },
    "day3_weekend_no_dain": {
        name: "Dain",
        text: "(Reply) 'Aww~ Too bad! But let's definitely do it next time!'",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        next: "day3_weekend_check_nurse"
    },

    // --- 보건선생님 주말 초대 체크 ---
    "day3_weekend_check_nurse": {
        name: "System",
        text: "",
        branches: [
            { next: "day3_weekend_invite_nurse", condition: "has_number_nurse", excludeCondition: "day3_morning_with_nurse" },
            { next: "day3_weekend_check_teacher" }
        ]
    },
    "day3_weekend_invite_nurse": {
        name: "School Nurse",
        text: "(Message) 'Are you free this Sunday evening? I know a great restaurant I'd love to take you to... 😉'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        choices: [
            { text: "Sure! I'd love to go!", next: "day3_weekend_yes_nurse", setFlag: "day3_nurse_date_confirmed", stats: { Nurse: { affinity: 8 } } },
            { text: "Sorry, I have plans on Sunday...", next: "day3_weekend_no_nurse", stats: { Nurse: { affinity: -3 } } }
        ]
    },
    "day3_weekend_yes_nurse": {
        name: "School Nurse",
        text: "(Reply) 'Great~ I'll be waiting. Sunday at 7 PM 💋'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        next: "day3_weekend_check_teacher"
    },
    "day3_weekend_no_nurse": {
        name: "School Nurse",
        text: "(Reply) 'That's a shame... Maybe next time then.'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        next: "day3_weekend_check_teacher"
    },

    // --- 담임선생님 주말 초대 체크 ---
    "day3_weekend_check_teacher": {
        name: "System",
        text: "",
        branches: [
            { next: "day3_weekend_invite_teacher", condition: "has_number_teacher", excludeCondition: "day3_morning_with_teacher" },
            { next: "day3_check_multiple_dates" }
        ]
    },
    "day3_weekend_invite_teacher": {
        name: "Homeroom Teacher",
        text: "(Message) '{name}, there's a special exhibition at the city museum this Sunday. Want to go together? I'll give you extra credit too lol'",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        choices: [
            { text: "Sure! I'll definitely be there!", next: "day3_weekend_yes_teacher", setFlag: "day3_teacher_date_confirmed", stats: { Teacher: { affinity: 8 } } },
            { text: "Museums aren't really my thing...", next: "day3_weekend_no_teacher", stats: { Teacher: { affinity: -3 } } }
        ]
    },
    "day3_weekend_yes_teacher": {
        name: "Homeroom Teacher",
        text: "(Reply) 'Great! Let's meet Sunday at 2 PM. It'll be fun!'",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        next: "day3_check_multiple_dates"
    },
    "day3_weekend_no_teacher": {
        name: "Homeroom Teacher",
        text: "(Reply) 'Alright. Maybe next time then.'",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        next: "day3_check_multiple_dates"
    },

    // =========================================================================
    // 복수 데이트 체크
    // =========================================================================
    // 캐스케이드 분기로 2명 이상 약속 확정 여부를 감지한다.
    // 첫 번째 확정된 캐릭터를 찾고 → 두 번째가 있으면 day3_has_multiple_dates 설정.
    // =========================================================================
    "day3_check_multiple_dates": {
        name: "System",
        text: "",
        branches: [
            { next: "day3_multi_from_seoyeon", condition: "day3_seoyeon_date_confirmed" },
            { next: "day3_multi_from_yuna", condition: "day3_yuna_date_confirmed" },
            { next: "day3_multi_from_dain", condition: "day3_dain_date_confirmed" },
            { next: "day3_multi_from_nurse", condition: "day3_nurse_date_confirmed" },
            { next: "day3_morning_end" }
        ]
    },
    "day3_multi_from_seoyeon": {
        name: "System",
        text: "",
        branches: [
            { next: "day3_set_multiple_dates", condition: "day3_yuna_date_confirmed" },
            { next: "day3_set_multiple_dates", condition: "day3_dain_date_confirmed" },
            { next: "day3_set_multiple_dates", condition: "day3_nurse_date_confirmed" },
            { next: "day3_set_multiple_dates", condition: "day3_teacher_date_confirmed" },
            { next: "day3_morning_end" }
        ]
    },
    "day3_multi_from_yuna": {
        name: "System",
        text: "",
        branches: [
            { next: "day3_set_multiple_dates", condition: "day3_dain_date_confirmed" },
            { next: "day3_set_multiple_dates", condition: "day3_nurse_date_confirmed" },
            { next: "day3_set_multiple_dates", condition: "day3_teacher_date_confirmed" },
            { next: "day3_morning_end" }
        ]
    },
    "day3_multi_from_dain": {
        name: "System",
        text: "",
        branches: [
            { next: "day3_set_multiple_dates", condition: "day3_nurse_date_confirmed" },
            { next: "day3_set_multiple_dates", condition: "day3_teacher_date_confirmed" },
            { next: "day3_morning_end" }
        ]
    },
    "day3_multi_from_nurse": {
        name: "System",
        text: "",
        branches: [
            { next: "day3_set_multiple_dates", condition: "day3_teacher_date_confirmed" },
            { next: "day3_morning_end" }
        ]
    },
    "day3_set_multiple_dates": {
        name: "Me",
        text: "(...Wait. Did I just make plans with multiple people this weekend? I'm starting to feel uneasy.)",
        setFlag: "day3_has_multiple_dates",
        next: "day3_morning_end"
    },

    // =========================================================================
    // 아침 종료
    // =========================================================================
    "day3_morning_end": {
        name: "Me",
        text: "(Classes began... and before I knew it, it was lunchtime.)",
        fade: true,
        next: "day3_lunch_start"
    }
});

