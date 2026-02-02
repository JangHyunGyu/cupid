/**
 * ============================================================================
 * CUPID - Day 3 Afterschool Scenario (Korean Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: ko_day3_3_afterschool.js
 * 언어: 한국어 (Korean)
 * 일차: Day 3 (3일차)
 * 시간대: Afterschool (방과후)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 금요일 방과후. 히로인들이 본격적으로 주인공을 차지하려는 경쟁이 시작됩니다.
 * 점심에 벌어진 일로 인해 분위기가 더욱 긴장되며,
 * 각 히로인들이 개별적으로 주인공에게 접근합니다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 방과후 시작 - 종례 직후, 히로인들의 견제전
 * 2. 동행 선택 - 누구와 집에 갈지, 어디로 갈지 결정
 * 3. 심화 갈등 - 선택받지 못한 히로인들의 반응
 * 4. 주말 전야 - 내일 약속에 대한 기대와 불안
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 동행 선택: 선택된 히로인 +5~10
 * 갈등 상황: 선택 안 된 히로인 -3~-10
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
 * [Day 3 - Afterschool] 씬 데이터 정의
 */
Object.assign(SCENARIO[3], {
    // =========================================================================
    // 방과후 시작
    // =========================================================================
    "day3_afternoon_start": {
        name: "나",
        text: "(드디어 종례가 끝났다. 금요일 방과후... 해방감과 함께 묘한 긴장감이 느껴진다.)",
        background: "assets/images/background/room_school.png",
        bgm: "daily2.mp3",
        character: null,
        next: "day3_afternoon_check"
    },
    "day3_afternoon_check": {
        name: "나",
        text: "(가방을 챙기려는데...)",
        branches: [
            { next: "day3_afternoon_tension", condition: "day3_caught_multiple_dates" },
            { next: "day3_afternoon_jealousy_check", condition: "day3_jealousy_seoyeon" },
            { next: "day3_afternoon_jealousy_check", condition: "day3_jealousy_yuna" },
            { next: "day3_afternoon_jealousy_check", condition: "day3_jealousy_dain" },
            { next: "day3_afternoon_normal" }
        ]
    },

    // =========================================================================
    // 점심에 들킨 경우 - 최악의 상황
    // =========================================================================
    "day3_afternoon_tension": {
        name: "나",
        text: "(교실 분위기가 무겁다. 아까 점심때 일 때문인 것 같다...)",
        next: "day3_afternoon_tension_2"
    },
    "day3_afternoon_tension_2": {
        name: "서연",
        text: "\"...{name}, 잠깐 얘기 좀 하자.\"",
        character: "assets/images/characters/seyoun_sad.png",
        next: "day3_afternoon_confrontation"
    },
    "day3_afternoon_confrontation": {
        name: "나",
        text: "(서연이가 복도로 나를 데리고 나왔다. 표정이 심상치 않다.)",
        background: "assets/images/background/load_school.png",
        next: "day3_afternoon_confrontation_2"
    },
    "day3_afternoon_confrontation_2": {
        name: "서연",
        text: "\"점심때 말이야... 너 정말 우리 다한테 주말 약속 한 거야?\"",
        character: "assets/images/characters/seyoun_sad.png",
        next: "day3_afternoon_confrontation_3"
    },
    "day3_afternoon_confrontation_3": {
        name: "나",
        text: "(어떻게 대답해야 할까...)",
        choices: [
            { text: "솔직하게 인정한다", next: "day3_afternoon_admit" },
            { text: "시간대가 다르니까 괜찮다고 한다", next: "day3_afternoon_justify" },
            { text: "서연이만 진심이라고 한다", next: "day3_afternoon_lie_seoyeon" }
        ]
    },
    "day3_afternoon_admit": {
        name: "나",
        text: "\"...응. 미안해. 다들 거절하기가 어려워서...\"",
        next: "day3_afternoon_admit_react"
    },
    "day3_afternoon_admit_react": {
        name: "서연",
        text: "\"...솔직한 건 고마워. 근데 나, 그런 거 싫어.\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day3_afternoon_admit_react_2"
    },
    "day3_afternoon_admit_react_2": {
        name: "서연",
        text: "\"만약 내가 진짜 특별하면... 나만 만나. 아니면 나도 생각이 있어.\"",
        character: "assets/images/characters/seyoun_normal.png",
        setFlag: "day3_seoyeon_ultimatum",
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_justify": {
        name: "나",
        text: "\"시간대가 다 달라서... 다 만날 수 있을 것 같아서...\"",
        next: "day3_afternoon_justify_react"
    },
    "day3_afternoon_justify_react": {
        name: "서연",
        text: "\"...그게 문제라는 걸 모르겠어?\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "day3_afternoon_justify_react_2"
    },
    "day3_afternoon_justify_react_2": {
        name: "서연",
        text: "\"...알았어. 주말에 보면 알겠지.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_lie_seoyeon": {
        name: "나",
        text: "\"서연아, 너만 진심이야. 다른 애들은 그냥 친구로서...\"",
        next: "day3_afternoon_lie_seoyeon_react"
    },
    "day3_afternoon_lie_seoyeon_react": {
        name: "서연",
        text: "\"...정말? 그 말... 믿어도 돼?\"",
        character: "assets/images/characters/seyoun_happy.png",
        stats: { Seoyeon: { affinity: 3 } },
        setFlag: "day3_promised_seoyeon_only",
        next: "day3_afternoon_lie_warning"
    },
    "day3_afternoon_lie_warning": {
        name: "나",
        text: "(서연이가 미소 짓는다. 하지만... 이게 맞는 걸까? 다른 애들에게 뭐라고 해야 하지?)",
        next: "day3_afternoon_transition"
    },

    // =========================================================================
    // 질투 발생 시 - 중간 긴장도
    // =========================================================================
    "day3_afternoon_jealousy_check": {
        name: "나",
        text: "(점심때 분위기가 좀 이상했는데... 괜찮겠지?)",
        next: "day3_afternoon_approach"
    },
    "day3_afternoon_approach": {
        name: "나",
        text: "(가방을 챙기고 일어서는데, 누군가 다가온다.)",
        branches: [
            { next: "day3_afternoon_seoyeon_approach", condition: "day3_jealousy_seoyeon" },
            { next: "day3_afternoon_yuna_approach", condition: "day3_jealousy_yuna" },
            { next: "day3_afternoon_dain_approach", condition: "day3_jealousy_dain" }
        ]
    },
    "day3_afternoon_seoyeon_approach": {
        name: "서연",
        text: "\"...{name}, 잠깐 시간 돼?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day3_afternoon_seoyeon_talk"
    },
    "day3_afternoon_seoyeon_talk": {
        name: "서연",
        text: "\"점심때... 미안해, 내가 좀 예민했던 것 같아.\"",
        character: "assets/images/characters/seyoun_sad.png",
        next: "day3_afternoon_seoyeon_talk_2"
    },
    "day3_afternoon_seoyeon_talk_2": {
        name: "서연",
        text: "\"근데 솔직히... 너 유나나 다인이랑 친한 거 보면 마음이 좀 그래.\"",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "\"서연이가 제일 좋아\"", next: "day3_afternoon_seoyeon_comfort" },
            { text: "\"다들 소중한 친구야\"", next: "day3_afternoon_seoyeon_friend" },
            { text: "\"질투하는 거야?\"", next: "day3_afternoon_seoyeon_tease" }
        ]
    },
    "day3_afternoon_seoyeon_comfort": {
        name: "서연",
        text: "\"...진짜? 그 말 들으니까... 좀 안심이 돼.\"",
        character: "assets/images/characters/seyoun_happy.png",
        stats: { Seoyeon: { affinity: 8 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_seoyeon_friend": {
        name: "서연",
        text: "\"...그래. 친구구나. 알았어.\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -3 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_seoyeon_tease": {
        name: "서연",
        text: "\"뭐, 뭐야! 그게 아니라... 아, 몰라!\"",
        character: "assets/images/characters/seyoun_blush.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_yuna_approach": {
        name: "유나",
        text: "\"...{name}.\"",
        character: "assets/images/characters/yuna_normal.png",
        background: "assets/images/background/load_school.png",
        next: "day3_afternoon_yuna_talk"
    },
    "day3_afternoon_yuna_talk": {
        name: "유나",
        text: "\"점심때... 서연이 선택했네.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_afternoon_yuna_talk_2"
    },
    "day3_afternoon_yuna_talk_2": {
        name: "나",
        text: "(유나의 눈빛이 평소보다 더 차갑다.)",
        choices: [
            { text: "\"미안해, 유나\"", next: "day3_afternoon_yuna_apologize" },
            { text: "\"내일은 유나랑 있을게\"", next: "day3_afternoon_yuna_promise" },
            { text: "\"왜, 화났어?\"", next: "day3_afternoon_yuna_question" }
        ]
    },
    "day3_afternoon_yuna_apologize": {
        name: "유나",
        text: "\"...괜찮아. 내일이 있으니까.\"",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: 5 } },
        next: "day3_afternoon_yuna_warning"
    },
    "day3_afternoon_yuna_promise": {
        name: "유나",
        text: "\"...그 말, 잊지 않을게.\"",
        character: "assets/images/characters/yuna_happy.png",
        stats: { Yuna: { affinity: 8 } },
        setFlag: "day3_yuna_priority_promise",
        next: "day3_afternoon_yuna_warning"
    },
    "day3_afternoon_yuna_question": {
        name: "유나",
        text: "\"...화? 아니. 그냥... 확인하고 싶었어.\"",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: -3 } },
        next: "day3_afternoon_yuna_warning"
    },
    "day3_afternoon_yuna_warning": {
        name: "유나",
        text: "\"기억해, {name}. 나한테 거짓말하면... 알지?\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_dain_approach": {
        name: "다인",
        text: "\"야, {name}!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_afternoon_dain_talk"
    },
    "day3_afternoon_dain_talk": {
        name: "다인",
        text: "\"점심때 왜 나 안 끼워줬어?! 나도 같이 먹고 싶었단 말이야!\"",
        character: "assets/images/characters/dain_sad.png",
        next: "day3_afternoon_dain_talk_2"
    },
    "day3_afternoon_dain_talk_2": {
        name: "나",
        text: "(다인이가 볼을 부풀리며 항의한다.)",
        choices: [
            { text: "\"미안, 다음엔 같이 먹자\"", next: "day3_afternoon_dain_sorry" },
            { text: "\"내일 연습 보러 갈게\"", next: "day3_afternoon_dain_promise" },
            { text: "\"귀엽네, 화난 거야?\"", next: "day3_afternoon_dain_tease" }
        ]
    },
    "day3_afternoon_dain_sorry": {
        name: "다인",
        text: "\"흥, 꼭 그래야 해! 약속이다!\"",
        character: "assets/images/characters/dain_normal.png",
        stats: { Dain: { affinity: 5 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_dain_promise": {
        name: "다인",
        text: "\"진짜?! 그럼 용서해줄게! 내 스파이크 기대해!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 8 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_dain_tease": {
        name: "다인",
        text: "\"뭐, 뭐야! 귀엽긴 뭐가 귀여워! 바보!\"",
        character: "assets/images/characters/dain_blush.png",
        stats: { Dain: { affinity: 5 } },
        next: "day3_afternoon_transition"
    },

    // =========================================================================
    // 일반 방과후
    // =========================================================================
    "day3_afternoon_normal": {
        name: "나",
        text: "(평화로운 방과후다. 집에 갈 준비를 하자.)",
        next: "day3_afternoon_transition"
    },

    // =========================================================================
    // 전환 - 집으로 가는 길
    // =========================================================================
    "day3_afternoon_transition": {
        name: "나",
        text: "(교문을 나서려는데...)",
        background: "assets/images/background/school.png",
        next: "day3_afternoon_gate"
    },
    "day3_afternoon_gate": {
        name: "나",
        text: "(누군가 기다리고 있는 것 같다.)",
        branches: [
            { next: "day3_afternoon_multiple_wait", condition: "day3_has_multiple_dates" },
            { next: "day3_afternoon_single_wait", condition: "day3_seoyeon_date_confirmed" },
            { next: "day3_afternoon_single_wait", condition: "day3_yuna_date_confirmed" },
            { next: "day3_afternoon_single_wait", condition: "day3_dain_date_confirmed" },
            { next: "day3_afternoon_teacher_wait", condition: "day3_teacher_date_confirmed" },
            { next: "day3_afternoon_nurse_wait", condition: "day3_nurse_date_confirmed" },
            { next: "day3_afternoon_alone_walk" }
        ]
    },

    // =========================================================================
    // 복수 약속 시 - 교문 앞 대기
    // =========================================================================
    "day3_afternoon_multiple_wait": {
        name: "나",
        text: "(어... 왜 다들 교문 앞에...?)",
        next: "day3_afternoon_multiple_scene"
    },
    "day3_afternoon_multiple_scene": {
        name: "서연",
        text: "\"어, {name}! 같이 가자... 어?\"",
        character: "assets/images/characters/seyoun_normal.png",
        branches: [
            { next: "day3_afternoon_three_way", condition: "day3_yuna_date_confirmed" },
            { next: "day3_afternoon_two_way_dain", condition: "day3_dain_date_confirmed" },
            { next: "day3_afternoon_seoyeon_walk" }
        ]
    },
    "day3_afternoon_three_way": {
        name: "유나",
        text: "\"...또 만났네.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_afternoon_three_way_2"
    },
    "day3_afternoon_three_way_2": {
        name: "나",
        text: "(서연이와 유나가 서로를 노려보고 있다. 분위기가 살벌하다.)",
        next: "day3_afternoon_choose_walk"
    },
    "day3_afternoon_two_way_dain": {
        name: "다인",
        text: "\"오? 서연이도 여기 있네? 나도 {name}이랑 같이 가려고!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_afternoon_choose_walk"
    },
    "day3_afternoon_choose_walk": {
        name: "나",
        text: "(누구와 함께 갈까...?)",
        choices: [
            { text: "서연이와 간다", next: "day3_afternoon_seoyeon_walk" },
            { text: "유나와 간다", next: "day3_afternoon_yuna_walk", condition: "day3_yuna_date_confirmed" },
            { text: "다인이와 간다", next: "day3_afternoon_dain_walk", condition: "day3_dain_date_confirmed" },
            { text: "혼자 간다", next: "day3_afternoon_reject_all", stats: { Seoyeon: { affinity: -5 }, Yuna: { affinity: -5 }, Dain: { affinity: -5 } } }
        ]
    },

    // =========================================================================
    // 서연과 귀가
    // =========================================================================
    "day3_afternoon_seoyeon_walk": {
        name: "나",
        text: "\"서연아, 같이 가자.\"",
        stats: { Seoyeon: { affinity: 5 } },
        setFlag: "day3_walked_with_seoyeon",
        next: "day3_afternoon_seoyeon_walk_2"
    },
    "day3_afternoon_seoyeon_walk_2": {
        name: "서연",
        text: "\"응! 가자!\"",
        character: "assets/images/characters/seyoun_happy.png",
        background: "assets/images/background/school.png",
        next: "day3_afternoon_seoyeon_walk_others"
    },
    "day3_afternoon_seoyeon_walk_others": {
        name: "나",
        text: "(뒤에서 시선이 느껴지지만... 서연이와 걷는 지금이 좋다.)",
        branches: [
            { next: "day3_afternoon_seoyeon_walk_yuna_reaction", condition: "day3_yuna_date_confirmed" },
            { next: "day3_afternoon_seoyeon_walk_dain_reaction", condition: "day3_dain_date_confirmed" },
            { next: "day3_afternoon_seoyeon_talk_walk" }
        ]
    },
    "day3_afternoon_seoyeon_walk_yuna_reaction": {
        name: "나",
        text: "(유나가 멀찍이서 우리를 바라보고 있다. 그 눈빛이... 무섭다.)",
        stats: { Yuna: { affinity: -8 } },
        setFlag: "day3_yuna_witnessed_seoyeon",
        next: "day3_afternoon_seoyeon_talk_walk"
    },
    "day3_afternoon_seoyeon_walk_dain_reaction": {
        name: "다인",
        text: "\"흥! 나 먼저 간다!\"",
        character: "assets/images/characters/dain_sad.png",
        stats: { Dain: { affinity: -5 } },
        next: "day3_afternoon_seoyeon_talk_walk"
    },
    "day3_afternoon_seoyeon_talk_walk": {
        name: "서연",
        text: "\"있잖아, {name}. 내일... 정말 기대돼.\"",
        character: "assets/images/characters/seyoun_happy.png",
        next: "day3_afternoon_seoyeon_talk_walk_2"
    },
    "day3_afternoon_seoyeon_talk_walk_2": {
        name: "서연",
        text: "\"우리 둘만의 시간이잖아. 그치?\"",
        character: "assets/images/characters/seyoun_happy.png",
        branches: [
            { next: "day3_afternoon_seoyeon_guilt", condition: "day3_has_multiple_dates" },
            { next: "day3_afternoon_seoyeon_happy" }
        ]
    },
    "day3_afternoon_seoyeon_guilt": {
        name: "나",
        text: "(... '둘만의 시간'이라. 다른 약속들이 머릿속을 스친다.)",
        choices: [
            { text: "\"응, 기대돼\"", next: "day3_afternoon_seoyeon_happy", stats: { Seoyeon: { affinity: 5 } } },
            { text: "\"사실은...\" (솔직하게 말한다)", next: "day3_afternoon_seoyeon_confess_walk", stats: { Seoyeon: { affinity: -10 } } }
        ]
    },
    "day3_afternoon_seoyeon_happy": {
        name: "서연",
        text: "\"헤헤, 나도! 그럼 내일 봐! 잘 자!\"",
        character: "assets/images/characters/seyoun_happy.png",
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_seoyeon_confess_walk": {
        name: "서연",
        text: "\"...뭐? 다른 약속도 있어?\"",
        character: "assets/images/characters/seyoun_sad.png",
        next: "day3_afternoon_seoyeon_angry"
    },
    "day3_afternoon_seoyeon_angry": {
        name: "서연",
        text: "\"...알았어. 주말에 보면 알겠지, 네가 누굴 진짜 좋아하는지.\"",
        character: "assets/images/characters/seyoun_sad.png",
        setFlag: "day3_seoyeon_knows_others",
        fade: true,
        next: "day3_night_start"
    },

    // =========================================================================
    // 유나와 귀가
    // =========================================================================
    "day3_afternoon_yuna_walk": {
        name: "나",
        text: "\"유나야, 같이 가자.\"",
        stats: { Yuna: { affinity: 5 } },
        setFlag: "day3_walked_with_yuna",
        next: "day3_afternoon_yuna_walk_2"
    },
    "day3_afternoon_yuna_walk_2": {
        name: "유나",
        text: "\"...응.\"",
        character: "assets/images/characters/yuna_happy.png",
        next: "day3_afternoon_yuna_walk_others"
    },
    "day3_afternoon_yuna_walk_others": {
        name: "서연",
        text: "\"...알았어. 조심히 가.\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -8 } },
        setFlag: "day3_seoyeon_witnessed_yuna",
        next: "day3_afternoon_yuna_talk_walk"
    },
    "day3_afternoon_yuna_talk_walk": {
        name: "나",
        text: "(유나와 함께 걷는다. 그녀는 말이 없지만, 분위기가 편안하다.)",
        background: "assets/images/background/school.png",
        next: "day3_afternoon_yuna_talk_walk_2"
    },
    "day3_afternoon_yuna_talk_walk_2": {
        name: "유나",
        text: "\"...{name}. 내일 밤, 잊지 마.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_afternoon_yuna_talk_walk_3"
    },
    "day3_afternoon_yuna_talk_walk_3": {
        name: "유나",
        text: "\"학교 후문. 8시. 늦으면... 안 돼.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_afternoon_yuna_warning_walk"
    },
    "day3_afternoon_yuna_warning_walk": {
        name: "나",
        text: "(유나의 목소리에 묘한 압박감이 느껴진다.)",
        choices: [
            { text: "\"절대 안 늦을게\"", next: "day3_afternoon_yuna_promise_keep", stats: { Yuna: { affinity: 8 } } },
            { text: "\"혹시 늦으면?\"", next: "day3_afternoon_yuna_late_question" }
        ]
    },
    "day3_afternoon_yuna_promise_keep": {
        name: "유나",
        text: "\"...좋아. 믿을게.\"",
        character: "assets/images/characters/yuna_happy.png",
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_yuna_late_question": {
        name: "유나",
        text: "\"...그럼 안 돼. 절대로.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_afternoon_yuna_late_warning"
    },
    "day3_afternoon_yuna_late_warning": {
        name: "나",
        text: "(유나의 눈동자가 순간 이상하게 빛난 것 같았다... 착각이겠지?)",
        fade: true,
        next: "day3_night_start"
    },

    // =========================================================================
    // 다인과 귀가
    // =========================================================================
    "day3_afternoon_dain_walk": {
        name: "나",
        text: "\"다인아, 같이 가자.\"",
        stats: { Dain: { affinity: 5 } },
        setFlag: "day3_walked_with_dain",
        next: "day3_afternoon_dain_walk_2"
    },
    "day3_afternoon_dain_walk_2": {
        name: "다인",
        text: "\"야호! 가자가자!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Seoyeon: { affinity: -5 }, Yuna: { affinity: -5 } },
        background: "assets/images/background/school.png",
        next: "day3_afternoon_dain_talk_walk"
    },
    "day3_afternoon_dain_talk_walk": {
        name: "다인",
        text: "\"내일 진짜 올 거지? 아침 9시, 체육관! 잊으면 안 돼!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_afternoon_dain_talk_walk_2"
    },
    "day3_afternoon_dain_talk_walk_2": {
        name: "다인",
        text: "\"나 {name}한테 멋진 모습 보여주고 싶거든!\"",
        character: "assets/images/characters/dain_blush.png",
        choices: [
            { text: "\"기대할게!\"", next: "day3_afternoon_dain_excited", stats: { Dain: { affinity: 5 } } },
            { text: "\"내가 응원해줄게\"", next: "day3_afternoon_dain_cheer", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day3_afternoon_dain_excited": {
        name: "다인",
        text: "\"좋아! 각오해!\"",
        character: "assets/images/characters/dain_laugh.png",
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_dain_cheer": {
        name: "다인",
        text: "\"헤헤... 그 말 듣고 나니까 더 열심히 해야겠다!\"",
        character: "assets/images/characters/dain_happy.png",
        fade: true,
        next: "day3_night_start"
    },

    // =========================================================================
    // 혼자 귀가
    // =========================================================================
    "day3_afternoon_reject_all": {
        name: "나",
        text: "\"미안, 오늘은 혼자 가고 싶어.\"",
        setFlag: "day3_walked_alone",
        next: "day3_afternoon_reject_reaction"
    },
    "day3_afternoon_reject_reaction": {
        name: "나",
        text: "(모두의 표정이 굳는다. 실망한 눈빛이 느껴진다.)",
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_alone_walk": {
        name: "나",
        text: "(혼자 집으로 향한다. 내일은 어떤 하루가 될까...)",
        background: "assets/images/background/school.png",
        fade: true,
        next: "day3_night_start"
    },

    // =========================================================================
    // 단일 약속 시 - 해당 캐릭터만 대기
    // =========================================================================
    "day3_afternoon_single_wait": {
        name: "나",
        text: "(교문 앞에 누군가 서 있다.)",
        branches: [
            { next: "day3_afternoon_seoyeon_solo", condition: "day3_seoyeon_date_confirmed" },
            { next: "day3_afternoon_yuna_solo", condition: "day3_yuna_date_confirmed" },
            { next: "day3_afternoon_dain_solo", condition: "day3_dain_date_confirmed" }
        ]
    },
    "day3_afternoon_seoyeon_solo": {
        name: "서연",
        text: "\"{name}! 같이 가자!\"",
        character: "assets/images/characters/seyoun_happy.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day3_afternoon_seoyeon_walk_2"
    },
    "day3_afternoon_yuna_solo": {
        name: "유나",
        text: "\"...기다렸어.\"",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: 3 } },
        next: "day3_afternoon_yuna_talk_walk"
    },
    "day3_afternoon_dain_solo": {
        name: "다인",
        text: "\"야! 빨리 와! 같이 가자!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 3 } },
        next: "day3_afternoon_dain_talk_walk"
    },

    // =========================================================================
    // 선생님들 대기
    // =========================================================================
    "day3_afternoon_teacher_wait": {
        name: "담임선생님",
        text: "\"{name}, 잠깐 시간 있니? 선생님이 데려다줄까?\"",
        character: "assets/images/characters/teacher_smile.png",
        choices: [
            { text: "\"네, 감사합니다!\"", next: "day3_afternoon_teacher_ride", stats: { Teacher: { affinity: 5 } } },
            { text: "\"괜찮아요, 걸어갈게요\"", next: "day3_afternoon_alone_walk" }
        ]
    },
    "day3_afternoon_teacher_ride": {
        name: "담임선생님",
        text: "\"모레 일요일에 박물관 약속 잊지 않았지? 기대하고 있을게.\"",
        character: "assets/images/characters/teacher_smile.png",
        background: "assets/images/background/school.png",
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_nurse_wait": {
        name: "보건선생님",
        text: "\"어머, {name}. 퇴근하려고 나왔는데 딱 마주쳤네? 후훗.\"",
        character: "assets/images/characters/nurse_normal.png",
        choices: [
            { text: "\"같이 가실래요?\"", next: "day3_afternoon_nurse_walk", stats: { Nurse: { affinity: 5 } } },
            { text: "\"안녕히 가세요\"", next: "day3_afternoon_alone_walk" }
        ]
    },
    "day3_afternoon_nurse_walk": {
        name: "보건선생님",
        text: "\"일요일 저녁 7시, 잊으면 안 돼요? 선생님 기다리고 있을 테니까.\"",
        character: "assets/images/characters/nurse_normal.png",
        background: "assets/images/background/school.png",
        fade: true,
        next: "day3_night_start"
    }
});
