/**
 * ============================================================================
 * CUPID - Day 3 Morning Scenario (Korean Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: ko_day3_1_morning.js
 * 언어: 한국어 (Korean)
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
        name: "나",
        text: "(알람 소리에 눈을 뜬다. 전학 온 지 벌써 사흘째... 이제는 아침에 일어나는 것도 조금은 익숙해진 것 같다.)",
        background: "assets/images/background/room_my.png",
        bgm: "intro.mp3",
        character: null,
        next: "day3_start_2"
    },

    // =========================================================================
    // 보건선생님 집에서 간 밤 후
    // =========================================================================
    "day3_nurse_home_morning": {
        name: "나",
        text: "(눈을 뜬다... 여기가 어디지? 낯선 천장이 보인다.)",
        background: "assets/images/background/nurse_house.png",
        character: null,
        next: "day3_nurse_home_morning_2"
    },
    "day3_nurse_home_morning_2": {
        name: "나",
        text: "(순간 어젯밤의 기억이 머릿속을 스치고 지나간다. 선생님의 향기, 부드러운 손길, 그리고...)",
        next: "day3_nurse_home_morning_3"
    },
    "day3_nurse_home_morning_3": {
        name: "보건선생님",
        text: "\"어머, 일어났네? 후후후, 어젯밤엔 잘 자더라?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day3_nurse_home_morning_4"
    },
    "day3_nurse_home_morning_4": {
        name: "나",
        text: "(선생님이 커피 한 잔을 건네며 은은하게 웃는다. 얼굴이 뜨거워진다.)",
        choices: [
            { text: "\"감사합니다, 선생님...\"", next: "day3_nurse_home_morning_thanks", stats: { Nurse: { affinity: 3 } } },
            { text: "\"어젯밤... 정말 좋았어요\"", next: "day3_nurse_home_morning_bold", stats: { Nurse: { affinity: 8 } } },
            { text: "(부끄러워서 말을 못한다)", next: "day3_nurse_home_morning_shy", stats: { Nurse: { affinity: 5 } } }
        ]
    },
    "day3_nurse_home_morning_thanks": {
        name: "보건선생님",
        text: "\"후후, 너무 딱딱하게 굴지 말려무나~ 우리 사이에.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day3_nurse_home_morning_leave"
    },
    "day3_nurse_home_morning_bold": {
        name: "보건선생님",
        text: "\"어머... 아침부터 대담하네? 후후, 선생님도 좋았어.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day3_nurse_home_morning_leave"
    },
    "day3_nurse_home_morning_shy": {
        name: "보건선생님",
        text: "\"후후, 귀여워라. 부끄러워하는 모습도 너무 사랑스럽다?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day3_nurse_home_morning_leave"
    },
    "day3_nurse_home_morning_leave": {
        name: "보건선생님",
        text: "\"자, 어서 준비해. 학교 가야지? 오늘 학교에서 보면... 모른 척 해야 해, 알지?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day3_nurse_home_morning_leave_2"
    },
    "day3_nurse_home_morning_leave_2": {
        name: "나",
        text: "(선생님의 윙크에 심장이 또 뛴다. 서둘러 옷을 챙기고 선생님 집을 나섰다.)",
        setFlag: "day3_came_from_nurse_home",
        next: "day3_nurse_home_school_arrival"
    },

    // 학교 도착 - 히로인들의 의심
    "day3_nurse_home_school_arrival": {
        name: "나",
        text: "(학교에 도착했다. 오늘따라 아침 공기가 상쾌하다.)",
        background: "assets/images/background/school.png",
        next: "day3_nurse_home_suspicion"
    },
    "day3_nurse_home_suspicion": {
        name: "서연",
        text: "\"{name}! 좋은 아침... 어? 오늘 어디서 온 거야? 평소랑 다른 방향에서 온 것 같은데...\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day3_nurse_home_suspicion_2"
    },
    "day3_nurse_home_suspicion_2": {
        name: "나",
        text: "(서연이의 날카로운 질문에 당황한다.)",
        choices: [
            { text: "\"그냥 산책하다가...\"", next: "day3_nurse_home_lie", stats: { Seoyeon: { affinity: -3 } } },
            { text: "\"친척 집에서 자고 왔어\"", next: "day3_nurse_home_half_lie" },
            { text: "(말을 얼버무린다)", next: "day3_nurse_home_stutter" }
        ]
    },
    "day3_nurse_home_lie": {
        name: "서연",
        text: "\"...산책? 이 시간에? 글쎄...\"",
        character: "assets/images/characters/seyoun_normal.png",
        setFlag: "day3_seoyeon_suspicious",
        stats: { Seoyeon: { affinity: -8 } },
        next: "day3_nurse_home_yuna_appears"
    },
    "day3_nurse_home_half_lie": {
        name: "서연",
        text: "\"...친척? 여자 친척?\"",
        character: "assets/images/characters/seyoun_sad.png",
        setFlag: "day3_seoyeon_jealous",
        stats: { Seoyeon: { affinity: -5 } },
        next: "day3_nurse_home_yuna_appears"
    },
    "day3_nurse_home_stutter": {
        name: "서연",
        text: "\"...왜 말을 못 해? 숨기는 거 있지?\"",
        character: "assets/images/characters/seyoun_sad.png",
        setFlag: "day3_seoyeon_very_suspicious",
        stats: { Seoyeon: { affinity: -12 } },
        next: "day3_nurse_home_yuna_appears"
    },
    "day3_nurse_home_yuna_appears": {
        name: "유나",
        text: "\"...{name}. 오늘 향수 냄새가 다르네.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_nurse_home_yuna_appears_2"
    },
    "day3_nurse_home_yuna_appears_2": {
        name: "나",
        text: "(유나가 내 얼굴을 봤다. 그 눈빛이... 날카롭다.)",
        next: "day3_nurse_home_yuna_appears_3"
    },
    "day3_nurse_home_yuna_appears_3": {
        name: "유나",
        text: "\"...어른의 향수. 여자 향수.\"",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "day3_yuna_knows_secret",
        stats: { Yuna: { affinity: -20 } },
        next: "day3_nurse_home_tension"
    },
    "day3_nurse_home_tension": {
        name: "서연",
        text: "\"...뭣?!\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -8 } },
        next: "day3_nurse_home_tension_2"
    },
    "day3_nurse_home_tension_2": {
        name: "나",
        text: "(분위기가 싸늘해졌다. 어떻게든 이 자리를 벗어나야 한다.)",
        choices: [
            { text: "\"수업 늦겠다, 먼저 간다!\"", next: "day3_nurse_home_escape" },
            { text: "\"오해야, 어제 부모님 친구 집에...\"", next: "day3_nurse_home_excuse" }
        ]
    },
    "day3_nurse_home_escape": {
        name: "나",
        text: "(서둘러 교실로 향한다. 뒤에서 느껴지는 시선이 따갑다...)",
        background: "assets/images/background/school.png",
        next: "day3_classroom"
    },
    "day3_nurse_home_excuse": {
        name: "서연",
        text: "\"...부모님 친구? 그럼 왜 몰래 숨기는 것처럼 굴었어?\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -10 } },
        next: "day3_nurse_home_excuse_2"
    },
    "day3_nurse_home_excuse_2": {
        name: "나",
        text: "(서연이의 눈빛이 사나워 보인다. 일단 교실로 향하자.)",
        background: "assets/images/background/school.png",
        next: "day3_classroom"
    },

    // =========================================================================
    // 일반 아침 흐름
    // =========================================================================
    "day3_start_2": {
        name: "나",
        text: "(창밖을 보니 오늘은 날씨가 참 좋다. 벌써 금요일이라니... 주말에는 뭘 하지?)",
        next: "day3_start_3"
    },
    "day3_start_3": {
        name: "나",
        text: "(스마트폰을 확인하니 읽지 않은 메시지가 있다. 누구일까?)",
        branches: [
            { next: "day3_morning_message_check", condition: "has_any_contact" },
            { next: "day3_prepare_school_no_contact" }
        ]
    },
    
    "day3_morning_message_check": {
        name: "나",
        text: "(메시지를 확인해본다.)",
        choices: [
            { text: "서연이의 메시지 확인", next: "day3_show_message", condition: "has_number_seyoun", setFlags: ["viewing_seoyeon", "first_check"] },
            { text: "유나의 메시지 확인", next: "day3_show_message", condition: "has_number_yuna", setFlags: ["viewing_yuna", "first_check"] },
            { text: "다인이의 메시지 확인", next: "day3_show_message", condition: "has_number_dain", setFlags: ["viewing_dain", "first_check"] },
            { text: "보건선생님의 메시지 확인", next: "day3_show_message", condition: "has_number_nurse", setFlags: ["viewing_nurse", "first_check"] },
            { text: "담임선생님의 메시지 확인", next: "day3_show_message", condition: "has_number_teacher", setFlags: ["viewing_teacher", "first_check"] }
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
        name: "서연",
        text: "(새벽 6시에 온 메시지) '좋은 아침! {name}아, 오늘도 화이팅! 아, 그리고 혹시 같이 등교할래? 집 앞에서 기다릴게!'",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        branches: [
            { next: "day3_msg_response_first", condition: "first_check" },
            { next: "day3_msg_response_after_check", excludeCondition: "first_check" }
        ]
    },
    "day3_msg_yuna": {
        name: "유나",
        text: "(새벽 3시에 온 메시지) '...{name}. 오늘 아침 학교 뒷문에서 기다릴게. 같이 가자.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        branches: [
            { next: "day3_msg_response_first", condition: "first_check" },
            { next: "day3_msg_response_after_check", excludeCondition: "first_check" }
        ]
    },
    "day3_msg_dain": {
        name: "다인",
        text: "(아침 7시에 온 메시지) '야호! {name}! 같이 학교 가자! 집 어디야? 내가 찾아갈게! ><'",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        branches: [
            { next: "day3_msg_response_first", condition: "first_check" },
            { next: "day3_msg_response_after_check", excludeCondition: "first_check" }
        ]
    },
    "day3_msg_nurse": {
        name: "보건선생님",
        text: "(어젯밤 11시에 온 메시지) '후훗, {name}. 오늘 아침에 같이 등교할까? 선생님이랑 단둘이... 😉'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        branches: [
            { next: "day3_msg_response_first_teachers", condition: "first_check" },
            { next: "day3_msg_response_after_check", excludeCondition: "first_check" }
        ]
    },
    "day3_msg_teacher": {
        name: "담임선생님",
        text: "(어젯밤 10시에 온 메시지) '{name}, 혹시 내일 아침 일찍 등교하니? 선생님도 일찍 가는데 같이 걸어갈래?'",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        branches: [
            { next: "day3_msg_response_first_teachers", condition: "first_check" },
            { next: "day3_msg_response_after_check", excludeCondition: "first_check" }
        ]
    },
    "day3_msg_response_first": {
        name: "나",
        text: "(어떻게 답장할까?)",
        choices: [
            { text: "좋아! 같이 가자", next: "day3_accept_walk", stats: { "#{current_character}": { affinity: 3 } } },
            { text: "미안, 오늘은 혼자 갈게", next: "day3_reject_walk", stats: { "#{current_character}": { affinity: -5 } } },
            { text: "다른 메시지도 확인해본다", next: "day3_check_more_messages" }
        ]
    },
    "day3_msg_response_first_teachers": {
        name: "나",
        text: "(어떻게 답장할까?)",
        choices: [
            { text: "네! 같이 가요", next: "day3_accept_walk", stats: { "#{current_character}": { affinity: 3 } } },
            { text: "죄송하지만 오늘은 혼자 갈게요", next: "day3_reject_walk", stats: { "#{current_character}": { affinity: -5 } } },
            { text: "다른 메시지도 확인해본다", next: "day3_check_more_messages" }
        ]
    },    
    "day3_msg_response_after_check": {
        name: "나",
        text: "(이 메시지를 봤었지...)",
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
        name: "서연",
        text: "(답장) '아... 그렇구나. 괜찮아! 그럼 학교에서 봐!'",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        next: "day3_after_reject"
    },
    "day3_reject_msg_yuna": {
        name: "유나",
        text: "(답장) '...그래. 혼자 가는 게 더 편할 때도 있지.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        next: "day3_after_reject"
    },
    "day3_reject_msg_dain": {
        name: "다인",
        text: "(답장) '에이~ 아쉽다! 그래도 학교에서 보자!'",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        next: "day3_after_reject"
    },
    "day3_reject_msg_nurse": {
        name: "보건선생님",
        text: "(답장) '어머, 그래? 아쉽네. 그럼 학교에서 보자.'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        next: "day3_after_reject"
    },
    "day3_reject_msg_teacher": {
        name: "담임선생님",
        text: "(답장) '그래, 알았어. 학교에서 보자!'",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        next: "day3_after_reject"
    },
    
    // 거절 후
    "day3_after_reject": {
        name: "나",
        text: "(다른 메시지도 확인해볼까?)",
        choices: [
            { text: "다른 메시지 확인", next: "day3_check_more_after_reject" },
            { text: "그냥 혼자 등교한다", next: "day3_prepare_school" }
        ]
    },
    "day3_check_more_messages": {
        name: "나",
        text: "(다른 메시지도 확인해본다.)",
        choices: [
            { text: "서연이의 메시지 확인", next: "day3_show_message", condition: "has_number_seyoun", excludeCondition: "viewing_seoyeon", setFlags: ["viewing_seoyeon"] },
            { text: "유나의 메시지 확인", next: "day3_show_message", condition: "has_number_yuna", excludeCondition: "viewing_yuna", setFlags: ["viewing_yuna"] },
            { text: "다인이의 메시지 확인", next: "day3_show_message", condition: "has_number_dain", excludeCondition: "viewing_dain", setFlags: ["viewing_dain"] },
            { text: "보건선생님의 메시지 확인", next: "day3_show_message", condition: "has_number_nurse", excludeCondition: "viewing_nurse", setFlags: ["viewing_nurse"] },
            { text: "담임선생님의 메시지 확인", next: "day3_show_message", condition: "has_number_teacher", excludeCondition: "viewing_teacher", setFlags: ["viewing_teacher"] },
            { text: "서연이와 같이 간다", next: "day3_walk_with_seoyeon", condition: "viewing_seoyeon", stats: { Seoyeon: { affinity: 3 } } },
            { text: "유나와 같이 간다", next: "day3_walk_with_yuna", condition: "viewing_yuna", stats: { Yuna: { affinity: 3 } } },
            { text: "다인이와 같이 간다", next: "day3_walk_with_dain", condition: "viewing_dain", stats: { Dain: { affinity: 3 } } },
            { text: "보건선생님과 같이 간다", next: "day3_walk_with_nurse", condition: "viewing_nurse", stats: { Nurse: { affinity: 3 } } },
            { text: "담임선생님과 같이 간다", next: "day3_walk_with_teacher", condition: "viewing_teacher", stats: { Teacher: { affinity: 3 } } },
            { text: "혼자 간다", next: "day3_walk_alone" }
        ]
    },
    "day3_check_more_after_reject": {
        name: "나",
        text: "(다른 메시지도 확인해본다.)",
        choices: [
            { text: "서연이의 메시지 확인", next: "day3_show_message_after_reject", condition: "has_number_seyoun", excludeCondition: "rejected_seoyeon", setFlags: ["viewing_seoyeon"] },
            { text: "유나의 메시지 확인", next: "day3_show_message_after_reject", condition: "has_number_yuna", excludeCondition: "rejected_yuna", setFlags: ["viewing_yuna"] },
            { text: "다인이의 메시지 확인", next: "day3_show_message_after_reject", condition: "has_number_dain", excludeCondition: "rejected_dain", setFlags: ["viewing_dain"] },
            { text: "보건선생님의 메시지 확인", next: "day3_show_message_after_reject", condition: "has_number_nurse", excludeCondition: "rejected_nurse", setFlags: ["viewing_nurse"] },
            { text: "담임선생님의 메시지 확인", next: "day3_show_message_after_reject", condition: "has_number_teacher", excludeCondition: "rejected_teacher", setFlags: ["viewing_teacher"] },
            { text: "그냥 혼자 등교한다", next: "day3_prepare_school" }
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
        name: "서연",
        text: "(새벽 6시에 온 메시지) '좋은 아침! {name}아, 오늘도 화이팅! 아, 그리고 혹시 같이 등교할래? 집 앞에서 기다릴게!'",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        choices: [
            { text: "서연이와 같이 간다 (아까 거절했는데...)", next: "day3_change_mind", stats: { Seoyeon: { affinity: 1 } } },
            { text: "다른 메시지 확인", next: "day3_check_more_after_reject" },
            { text: "그냥 혼자 간다", next: "day3_prepare_school" }
        ]
    },
    "day3_msg_yuna_after_reject": {
        name: "유나",
        text: "(새벽 3시에 온 메시지) '...{name}. 오늘 아침 학교 뒷문에서 기다릴게. 같이 가자.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        choices: [
            { text: "유나와 같이 간다 (아까 거절했는데...)", next: "day3_change_mind", stats: { Yuna: { affinity: 1 } } },
            { text: "다른 메시지 확인", next: "day3_check_more_after_reject" },
            { text: "그냥 혼자 간다", next: "day3_prepare_school" }
        ]
    },
    "day3_msg_dain_after_reject": {
        name: "다인",
        text: "(아침 7시에 온 메시지) '야호! {name}! 같이 학교 가자! 집 어디야? 내가 찾아갈게! ><'",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        choices: [
            { text: "다인이와 같이 간다 (아까 거절했는데...)", next: "day3_change_mind", stats: { Dain: { affinity: 1 } } },
            { text: "다른 메시지 확인", next: "day3_check_more_after_reject" },
            { text: "그냥 혼자 간다", next: "day3_prepare_school" }
        ]
    },
    "day3_msg_nurse_after_reject": {
        name: "보건선생님",
        text: "(어젯밤 11시에 온 메시지) '후훗, {name}. 오늘 아침에 같이 등교할까? 선생님이랑 단둘이... 😉'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        choices: [
            { text: "보건선생님과 같이 간다 (아까 거절했는데...)", next: "day3_change_mind_teachers", stats: { Nurse: { affinity: 1 } } },
            { text: "다른 메시지 확인", next: "day3_check_more_after_reject" },
            { text: "그냥 혼자 간다", next: "day3_prepare_school" }
        ]
    },
    "day3_msg_teacher_after_reject": {
        name: "담임선생님",
        text: "(어젯밤 10시에 온 메시지) '{name}, 혹시 내일 아침 일찍 등교하니? 선생님도 일찍 가는데 같이 걸어갈래?'",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        choices: [
            { text: "담임선생님과 같이 간다 (아까 거절했는데...)", next: "day3_change_mind_teachers", stats: { Teacher: { affinity: 1 } } },
            { text: "다른 메시지 확인", next: "day3_check_more_after_reject" },
            { text: "그냥 혼자 간다", next: "day3_prepare_school" }
        ]
    },
    "day3_change_mind": {
        name: "나",
        text: "(다시 메시지를 보냈다. '미안, 방금 다른 메시지 확인하고 왔어. 역시 같이 가고 싶어!')",
        next: "day3_change_mind_reply"
    },
    "day3_change_mind_teachers": {
        name: "나",
        text: "(다시 메시지를 보냈다. '죄송해요, 역시 같이 가고 싶어요!')",
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
        name: "서연",
        text: "(즉각 답장이 왔다) '정말?! 좋아! 그럼 빨리 나와! 기다릴게!'",
        character: "assets/images/characters/seyoun_laugh.png",
        silhouette: true,
        next: "day3_walk_with_seoyeon"
    },
    "day3_change_mind_yuna": {
        name: "유나",
        text: "(잠시 후 답장이 왔다) '...알았어. 기다릴게.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        next: "day3_walk_with_yuna"
    },
    "day3_change_mind_dain": {
        name: "다인",
        text: "(곧바로 답장이 왔다) '오케이! 그럼 지금 출발할게! 기다려!'",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        next: "day3_walk_with_dain"
    },
    "day3_change_mind_nurse": {
        name: "보건선생님",
        text: "(답장) '후훗, 마음이 바뀌었구나? 좋아, 그럼 빨리 나와.'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        next: "day3_walk_with_nurse"
    },
    "day3_change_mind_teacher": {
        name: "담임선생님",
        text: "(답장) '그래? 괜찮아! 그럼 빨리 준비하렴.'",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        next: "day3_walk_with_teacher"
    },
    "day3_return_to_choice": {
        name: "나",
        text: "(음... 누구랑 같이 갈까?)",
        choices: [
            { text: "서연이와 같이 간다", next: "day3_walk_with_seoyeon", condition: "has_number_seyoun", stats: { Seoyeon: { affinity: 3 } } },
            { text: "유나와 같이 간다", next: "day3_walk_with_yuna", condition: "has_number_yuna", stats: { Yuna: { affinity: 3 } } },
            { text: "다인이와 같이 간다", next: "day3_walk_with_dain", condition: "has_number_dain", stats: { Dain: { affinity: 3 } } },
            { text: "보건선생님과 같이 간다", next: "day3_walk_with_nurse", condition: "has_number_nurse", stats: { Nurse: { affinity: 3 } } },
            { text: "담임선생님과 같이 간다", next: "day3_walk_with_teacher", condition: "has_number_teacher", stats: { Teacher: { affinity: 3 } } },
            { text: "혼자 간다", next: "day3_walk_alone" }
        ]
    },
    "day3_walk_with_seoyeon": {
        name: "나",
        text: "(서연이의 집 앞으로 향했다.)",
        next: "day3_walk_with_seoyeon_2"
    },
    "day3_walk_with_seoyeon_2": {
        name: "서연",
        text: "\"와! 진짜 왔네! 고마워!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day3_arrive_school"
    },
    
    "day3_walk_with_yuna": {
        name: "나",
        text: "(학교 가는길 골목 쪽으로 향했다. 나무 그늘 아래 유나가 서 있다.)",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_walk_yuna_greet"
                
    },
    "day3_walk_yuna_greet": {
        name: "유나",
        text: "\"...왔구나. (조용히 걸으며) 오늘 날씨가 좋네. 하지만... 평화롭게 보이는 것들이 가장 위험한 법이야.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_walk_yuna_talk"
    },
    "day3_walk_yuna_talk": {
        name: "유나",
        text: "(한적한 길을 걸으며 유나가 갑자기 입을 연다) \"{name}, 주말에... 너한테만 보여주고 싶은 곳이 있어.\"",
        character: "assets/images/characters/yuna_normal.png",
        choices: [
            { text: "어떤 곳인데?", next: "day3_yuna_weekend_ask", stats: { Yuna: { affinity: 3 } } },
            { text: "또 무슨 비밀이야?", next: "day3_yuna_weekend_curious", stats: { Yuna: { affinity: 1 } } },
            { text: "...좋아, 언제?", next: "day3_yuna_weekend_direct", stats: { Yuna: { affinity: 5 } } }
        ]
    },
    "day3_yuna_weekend_ask": {
        name: "유나",
        text: "\"...이 학교의 진짜 모습을 볼 수 있는 곳. 토요일 저녁 8시, 학교 뒷문에서 만나자. 절대 늦지 마. 어둠 속에서만 보이는 것들이 있어.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_yuna_weekend_choice"
    },
    "day3_yuna_weekend_curious": {
        name: "유나",
        text: "(유나가 차갑게 웃는다) \"비밀이라기보단... 진실에 가깝지. 토요일 저녁 8시. 해가 지고 나면 모든 게 달라져. 올 거지?\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day3_yuna_weekend_choice"
    },
    "day3_yuna_weekend_direct": {
        name: "유나",
        text: "(유나가 놀란 듯 나를 바라보다가 미소 짓는다) \"...역시 너야. 토요일 저녁 8시, 학교 뒷문. 어둠이 내려야만 볼 수 있는 것들이 있어. 꼭 와야 해.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day3_yuna_weekend_choice"
    },
    "day3_yuna_weekend_choice": {
        name: "나",
        text: "(유나의 진지한 눈빛이 나를 뚫어본다. 저녁 8시라니... 뭔가 심상치 않다.)",
        character: "assets/images/characters/yuna_normal.png",
        choices: [
            { text: "알았어, 꼭 갈게", next: "day3_yuna_weekend_yes", stats: { Yuna: { affinity: 8 } }, setFlag: "day3_yuna_date_confirmed" },
            { text: "생각해보고 답해줄게", next: "day3_yuna_weekend_later", stats: { Yuna: { affinity: -5 } } },
            { text: "너나 봐, 난 다른 약속이 있거든", next: "day3_yuna_weekend_no", stats: { Yuna: { affinity: -30 } } }
        ]
    },
    "day3_yuna_weekend_yes": {
        name: "유나",
        text: "(유나가 내 손을 살짝 잡았다가 놓는다) \"...고마워. 후회하지 않을 거야. 토요일 밤, 진실을 마주할 준비를 해둬.\"",
        character: "assets/images/characters/yuna_shy.png",
        next: "day3_arrive_school"
    },
    "day3_yuna_weekend_later": {
        name: "유나",
        text: "(유나가 실망한 듯 고개를 돌린다) \"...그래. 하지만 기회는 한 번뿐이야. 잘 생각해. 밤에만 열리는 문이 있거든.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_arrive_school"
    },
    "day3_yuna_weekend_no": {
        name: "유나",
        text: "(유나의 눈빛이 차갑게 식는다) \"......\"",
        character: "assets/images/characters/yuna_bored.png",
        next: "day3_arrive_school"
    },
    "day3_walk_with_dain": {
        name: "나",
        text: "(약속 장소로 가는 길. 멀리서 다인이가 손을 크게 흔들며 달려온다.)",
        background: "assets/images/background/school.png",
        bgm: "daily2.mp3",
        character: "assets/images/characters/dain_laugh.png",
        next: "day3_walk_dain_greet"
    },
    "day3_walk_dain_greet": {
        name: "다인",
        text: "\"{name}! 야호~! (숨을 헐떡이며) 드디어 찾았다! 같이 학교 가자! 오늘 날씨 완전 운동하기 좋은데?\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day3_walk_dain_talk"
    },
    "day3_walk_dain_talk": {
        name: "다인",
        text: "(신나게 걸으며) \"아! 맞다 {name}! 내일 아침 9시에 체육관에서 우리 팀 연습 경기 있거든? 와서 응원해주라!\"",
        character: "assets/images/characters/dain_normal.png",
        choices: [
            { text: "재밌겠다! 당연히 가야지!", next: "day3_dain_weekend_ask", stats: { Dain: { affinity: 3 } } },
            { text: "아침 9시? 좀 일찍 일어나야겠네", next: "day3_dain_weekend_early", stats: { Dain: { affinity: 1 } } },
            { text: "귀찮은데...", next: "day3_dain_weekend_hesitate", stats: { Dain: { affinity: -2 } } }
        ]
    },
    "day3_dain_weekend_ask": {
        name: "다인",
        text: "(다인이가 신나서 점프한다) \"진짜?! 와 대박! 그럼 연습 끝나고 같이 밥도 먹자! 떡볶이 먹으러 가자!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day3_dain_weekend_choice"
    },
    "day3_dain_weekend_early": {
        name: "다인",
        text: "(다인이가 웃으며) \"그치? 나도 일찍 일어나는 거 힘들긴 한데, 그래도 와주면 진짜 힘날 것 같아!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day3_dain_weekend_choice"
    },
    "day3_dain_weekend_hesitate": {
        name: "다인",
        text: "(다인이가 어깨동무를 하며) \"괜찮아! 그냥 와서 응원만 해주면 돼! 내 멋진 스파이크 보여줄게!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_dain_weekend_choice"
    },
    "day3_dain_weekend_choice": {
        name: "나",
        text: "(다인이가 기대에 찬 눈빛으로 나를 바라본다.)",
        character: "assets/images/characters/dain_normal.png",
        choices: [
            { text: "알았어! 토요일 9시에 체육관에서 보자", next: "day3_dain_weekend_yes", stats: { Dain: { affinity: 8 } }, setFlag: "day3_dain_date_confirmed" },
            { text: "생각해보고 연락할게", next: "day3_dain_weekend_later", stats: { Dain: { affinity: -3 } } },
            { text: "수고, 주말에 다른 일이 있어서...", next: "day3_dain_weekend_no", stats: { Dain: { affinity: -20 } } }
        ]
    },
    "day3_dain_weekend_yes": {
        name: "다인",
        text: "(다인이가 내 손을 잡고 흔든다) \"와! 최고야 {name}! 그럼 토요일에 꼭 보자! 늦지 마!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day3_arrive_school"
    },
    "day3_dain_weekend_later": {
        name: "다인",
        text: "(다인이가 조금 풀이 죽는다) \"에이... 그래도 꼭 와야 돼? 약속이다?\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_arrive_school"
    },
    "day3_dain_weekend_no": {
        name: "다인",
        text: "(다인이가 실망한 표정을 짓는다) \"아... 그렇구나. 그래도 나중에 시간 나면 꼭 놀러 와!\"",
        character: "assets/images/characters/dain_sad.png",
        next: "day3_arrive_school"
    },
    "day3_walk_with_nurse": {
        name: "나",
        text: "(선생님과 만나기로한 장소 앞으로 향했다. 보건선생님이 기다리고 계신다.)",
        background: "assets/images/background/school.png",
        bgm: "daily2.mp3",
        character: "assets/images/characters/nurse_normal.png",
        next: "day3_walk_nurse_greet"
    },
    "day3_walk_nurse_greet": {
        name: "보건선생님",
        text: "\"어머, {name}. 왔네? 후훗, 우리 전학생 참 착하네. 자, 같이 걸어가자.\"",
        character: "assets/images/characters/nurse_normal.png",
	    next: "day3_walk_nurse_talk"
	},
	"day3_walk_nurse_talk": {
		name: "보건선생님",
		text: "(학교로 걸어가며 선생님이 은근히 내 팔에 손을 올린다) \"저기, {name}야. 혹시 이번 주말에 시간 있니?\"",
		character: "assets/images/characters/nurse_normal.png",
		choices: [
			{ text: "네, 왜요? 무슨 일 있으세요?", next: "day3_nurse_weekend_ask", stats: { Nurse: { affinity: 3 } } },
			{ text: "글쎄요... 주말에 뭐 하실 건데요?", next: "day3_nurse_weekend_curious", stats: { Nurse: { affinity: 1 } } },
			{ text: "아직 계획 없는데요?", next: "day3_nurse_weekend_none", stats: { Nurse: { affinity: 2 } } }
		]
	},
	"day3_nurse_weekend_ask": {
		name: "보건선생님",
		text: "(선생님이 의미심장하게 웃는다) \"후훗, 사실... 일요일 저녁에 맛있는 레스토랑 예약해뒀거든. 혼자 가기 아까워서... 우리 같이 갈래? 일요일 저녁 7시 어때?\"",
		character: "assets/images/characters/nurse_normal.png",
		next: "day3_nurse_weekend_choice"
	},
	"day3_nurse_weekend_curious": {
		name: "보건선생님",
		text: "(선생님이 장난스럽게 윙크한다) \"음... 괜찮은 레스토랑 예약해뒀는데 같이 가고 싶어서. 괜찮으면... 일요일 저녁 7시에?\"",
		character: "assets/images/characters/nurse_normal.png",
		next: "day3_nurse_weekend_choice"
	},
	"day3_nurse_weekend_none": {
		name: "보건선생님",
		text: "(선생님이 만족스럽게 미소 짓는다) \"정말? 그럼 우리 일요일 저녁에 같이 저녁 먹자! 7시에 만날까? 주소 보낼게.\"",
		character: "assets/images/characters/nurse_normal.png",
		next: "day3_nurse_weekend_choice"
	},
	"day3_nurse_weekend_choice": {
		name: "나",
		text: "(선생님이 매혹적인 눈빛으로 나를 바라본다. 심장이 두근거린다...)",
		character: "assets/images/characters/nurse_normal.png",
		choices: [
			{ text: "좋아요! 일요일에 꼭 갈게요", next: "day3_nurse_weekend_yes", stats: { Nurse: { affinity: 8 } }, setFlag: "day3_nurse_date_confirmed" },
			{ text: "생각해보고 나중에 답할게요", next: "day3_nurse_weekend_later", stats: { Nurse: { affinity: -3 } } },
			{ text: "미안해요, 주말에 다른 약속이...", next: "day3_nurse_weekend_no", stats: { Nurse: { affinity: -10 } } }
		]
	},
	"day3_nurse_weekend_yes": {
		name: "보건선생님",
		text: "(선생님이 내 손을 살짝 쥐었다가 놓는다) \"후훗, 정말? 그럼 일요일 저녁 7시, 기대하고 있을게. 멋지게 입고 와야 해?\"",
		character: "assets/images/characters/nurse_normal.png",
		next: "day3_arrive_school"
	},
	"day3_nurse_weekend_later": {
		name: "보건선생님",
		text: "(선생님이 조금 아쉬운 표정을 짓는다) \"아... 그래? 그럼 점심시간에 보건실로 놀러 와. 다시 이야기하자.\"",
		character: "assets/images/characters/nurse_normal.png",
		next: "day3_arrive_school"
	},
	"day3_nurse_weekend_no": {
		name: "보건선생님",
		text: "(선생님의 미소가 살짝 굳어진다) \"...그렇구나. 괜찮아. 다음 기회에 보자.\"",
		character: "assets/images/characters/nurse_normal.png",
		next: "day3_arrive_school"
	},
    "day3_walk_with_teacher": {
        name: "나",
        text: "(약속 장소로 향했다. 담임선생님이 차에서 손을 흔들고 계신다.)",
        background: "assets/images/background/school.png",
        bgm: "daily2.mp3",
        character: "assets/images/characters/teacher_normal.png",
        next: "day3_walk_teacher_greet"
    },
    "day3_walk_teacher_greet": {
        name: "담임선생님",
        text: "\"{name}! 좋은 아침! 같이 차로 출근하니까 좋네. 자, 안전벨트 매렴.\"",
        character: "assets/images/characters/teacher_smile.png",
	    next: "day3_walk_teacher_car"
	},
	"day3_walk_teacher_car": {
		name: "나",
		text: "(선생님의 차에 탔다. 은은한 향수 냄새와 잔잔한 음악이 흐른다. 뭔가 어색하면서도 설레는 기분이다.)",
		character: "assets/images/characters/teacher_normal.png",
		next: "day3_walk_teacher_talk"
	},
	"day3_walk_teacher_talk": {
		name: "담임선생님",
		text: "(운전하며 선생님이 조심스럽게 말을 꺼낸다) \"저기, {name}야. 혹시 이번 주말에 시간 있니?\"",
		character: "assets/images/characters/teacher_normal.png",
		choices: [
			{ text: "네, 왜요? 무슨 일 있으세요?", next: "day3_teacher_weekend_ask", stats: { Teacher: { affinity: 3 } } },
			{ text: "글쎄요... 주말에 뭐 하실 건데요?", next: "day3_teacher_weekend_curious", stats: { Teacher: { affinity: 1 } } },
			{ text: "아직 계획 없는데요?", next: "day3_teacher_weekend_none", stats: { Teacher: { affinity: 2 } } }
		]
	},
	"day3_teacher_weekend_ask": {
		name: "담임선생님",
		text: "(선생님이 잠깐 나를 쳐다보며 미소 짓는다) \"사실... 박물관 전시회 티켓이 두 장 생겼거든. 혼자 가기 아까워서... 우리 같이 갈래? 일요일 오후 2시 어때?\"",
		character: "assets/images/characters/teacher_smile.png",
		next: "day3_teacher_weekend_choice"
	},
	"day3_teacher_weekend_curious": {
		name: "담임선생님",
		text: "\"음... 박물관 전시회 티켓이 있는데 같이 가고 싶어서. 괜찮으면... 일요일 오후 2시에?\"",
		character: "assets/images/characters/teacher_normal.png",
		next: "day3_teacher_weekend_choice"
	},
	"day3_teacher_weekend_none": {
		name: "담임선생님",
		text: "(선생님이 반색하며) \"정말? 그럼 우리 일요일 오후에 박물관 전시회 보러 가자! 2시에 박물관 앞에서 만날까?\"",
		character: "assets/images/characters/teacher_smile.png",
		next: "day3_teacher_weekend_choice"
	},
	"day3_teacher_weekend_choice": {
		name: "나",
		text: "(선생님이 기대에 찬 눈빛으로 잠깐 나를 본다. 차 안의 공기가 묘하게 따뜻하다...)",
		character: "assets/images/characters/teacher_normal.png",
		choices: [
			{ text: "좋아요! 일요일에 꼭 갈게요", next: "day3_teacher_weekend_yes", stats: { Teacher: { affinity: 8 } }, setFlag: "day3_teacher_date_confirmed" },
			{ text: "생각해보고 나중에 답할게요", next: "day3_teacher_weekend_later", stats: { Teacher: { affinity: -3 } } },
			{ text: "박물관 노잼인데.", next: "day3_teacher_weekend_no", stats: { Teacher: { affinity: -10 } } }
		]
	},
	"day3_teacher_weekend_yes": {
		name: "담임선생님",
		text: "(선생님이 환하게 웃으며) \"정말? 그럼 일요일 오후 2시, 꼭 보자. 재미있을 거야!\"",
		character: "assets/images/characters/teacher_smile.png",
		next: "day3_arrive_school"
	},
	"day3_teacher_weekend_later": {
		name: "담임선생님",
		text: "(선생님이 조금 아쉬운 표정을 짓는다) \"아... 그래? 그럼 점심시간에 다시 이야기하자.\"",
		character: "assets/images/characters/teacher_normal.png",
		next: "day3_arrive_school"
	},
	"day3_teacher_weekend_no": {
		name: "담임선생님",
		text: "(선생님의 표정이 순간 굳어진다) \"...실망이구나. 선생님은 너한테 거는 기대가 컸는데.\"",
		character: "assets/images/characters/teacher_normal.png",
		next: "day3_arrive_school"
	},
	"day3_prepare_school": {
        name: "나",
        text: "(학교 갈 준비를 서둘러 마쳤다.)",
        next: "day3_walk_alone"
    },
	"day3_prepare_school_no_contact": {
        name: "나",
        text: "(메시지를 확인해보니...)",
        next: "day3_prepare_school_ads"
    },
    "day3_prepare_school_ads": {
        name: "나",
        text: "('한정 특가! 지금 주문하시면...', '이벤트 당첨을 축하드립니다...') ...전부 광고 메시지네. 오늘도 혼자 등교하는 건가.",
        next: "day3_walk_alone"
    },   
    "day3_walk_alone": {
        name: "나",
        text: "(혼자 학교로 향했다. 아침 공기가 상쾌하다.)",
        next: "day3_arrive_school"
    },     
    "day3_arrive_school": {
        name: "나",
        text: "(어느덧 학교 정문에 도착했다. 오늘도 이 학교에서의 하루가 시작된다.)",
        background: "assets/images/background/school.png",
        character: null,
        next: "day3_classroom"
    },
    "day3_classroom": {
        name: "나",
        text: "(교실에 들어서니 아이들이 웅성거린다. 오늘은 무슨 일이 있나?)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "day3_morning_end"
    },
    "day3_morning_end": {
        name: "나",
        text: "(수업이 시작되고... 시간이 흘러 어느덧 점심시간이 되었다.)",
        fade: true,
        next: "day3_lunch_start"
    }
});
