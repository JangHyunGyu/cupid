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
        sunset: true,
        next: "day3_afternoon_check"
    },
    "day3_afternoon_check": {
        name: "나",
        background: "assets/images/background/room_school.png",
        text: "(가방을 챙기려는데...)",
        sunset: true,
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
        sunset: true,
        next: "day3_afternoon_tension_2"
    },
    "day3_afternoon_tension_2": {
        name: "서연",
        text: "\"...{name}아, 잠깐 얘기 좀 하자.\"",
        character: "assets/images/characters/seyoun_sad.png",
        sunset: true,
        next: "day3_afternoon_confrontation"
    },
    "day3_afternoon_confrontation": {
        name: "나",
        character: "assets/images/characters/seyoun_sad.png",
        text: "(서연이가 복도로 나를 데리고 나왔다. 표정이 심상치 않다.)",
        background: "assets/images/background/load_school.png",
        sunset: true,
        next: "day3_afternoon_confrontation_2"
    },
    "day3_afternoon_confrontation_2": {
        name: "서연",
        background: "assets/images/background/load_school.png",
        text: "\"점심때 말이야... 너 정말 우리 다한테 주말 약속 한 거야?\"",
        character: "assets/images/characters/seyoun_sad.png",
        sunset: true,
        next: "day3_afternoon_confrontation_3"
    },
    "day3_afternoon_confrontation_3": {
        name: "나",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_sad.png",
        text: "(어떻게 대답해야 할까...)",
        sunset: true,
        choices: [
            { text: "솔직하게 인정한다", next: "day3_afternoon_admit" },
            { text: "시간대가 다르니까 괜찮다고 한다", next: "day3_afternoon_justify" },
            { text: "서연이만 진심이라고 한다", next: "day3_afternoon_lie_seoyeon" }
        ]
    },
    "day3_afternoon_admit": {
        name: "나",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_sad.png",
        text: "\"...응. 미안해. 다들 거절하기가 어려워서...\"",
        sunset: true,
        next: "day3_afternoon_admit_react"
    },
    "day3_afternoon_admit_react": {
        name: "서연",
        background: "assets/images/background/load_school.png",
        text: "\"...솔직한 건 고마워. 근데 나, 그런 거 싫어.\"",
        character: "assets/images/characters/seyoun_sad.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 5 } },
        next: "day3_afternoon_admit_react_2"
    },
    "day3_afternoon_admit_react_2": {
        name: "서연",
        background: "assets/images/background/load_school.png",
        text: "\"만약 내가 진짜 특별하면... 나만 만나. 아니면 나도 생각이 있어.\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        setFlag: "day3_seoyeon_ultimatum",
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_justify": {
        name: "나",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_sad.png",
        text: "\"시간대가 다 달라서... 다 만날 수 있을 것 같아서...\"",
        sunset: true,
        next: "day3_afternoon_justify_react"
    },
    "day3_afternoon_justify_react": {
        name: "서연",
        background: "assets/images/background/load_school.png",
        text: "\"...그게 문제라는 걸 모르겠어?\"",
        character: "assets/images/characters/seyoun_sad.png",
        sunset: true,
        stats: { Seoyeon: { affinity: -5 } },
        next: "day3_afternoon_justify_react_2"
    },
    "day3_afternoon_justify_react_2": {
        name: "서연",
        background: "assets/images/background/load_school.png",
        text: "\"...알았어. 주말에 보면 알겠지.\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_lie_seoyeon": {
        name: "나",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_sad.png",
        text: "\"서연아, 너만 진심이야. 다른 애들은 그냥 친구로서...\"",
        sunset: true,
        next: "day3_afternoon_lie_seoyeon_react"
    },
    "day3_afternoon_lie_seoyeon_react": {
        name: "서연",
        background: "assets/images/background/load_school.png",
        text: "\"...정말? 그 말... 믿어도 돼?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 3 } },
        setFlag: "day3_promised_seoyeon_only",
        next: "day3_afternoon_lie_warning"
    },
    "day3_afternoon_lie_warning": {
        name: "나",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "(서연이가 미소 짓는다. 하지만... 이게 맞는 걸까? 다른 애들에게 뭐라고 해야 하지?)",
        sunset: true,
        next: "day3_afternoon_transition"
    },

    // =========================================================================
    // 질투 발생 시 - 중간 긴장도
    // =========================================================================
    "day3_afternoon_jealousy_check": {
        name: "나",
        text: "(점심때 분위기가 좀 이상했는데... 괜찮겠지?)",
        sunset: true,
        next: "day3_afternoon_approach"
    },
    "day3_afternoon_approach": {
        name: "나",
        text: "(가방을 챙기고 일어서는데, 누군가 다가온다.)",
        sunset: true,
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
        sunset: true,
        next: "day3_afternoon_seoyeon_talk"
    },
    "day3_afternoon_seoyeon_talk": {
        name: "서연",
        text: "\"점심때... 미안해, 내가 좀 예민했던 것 같아.\"",
        character: "assets/images/characters/seyoun_sad.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_talk_2"
    },
    "day3_afternoon_seoyeon_talk_2": {
        name: "서연",
        text: "\"근데 솔직히... 너 유나나 다인이랑 친한 거 보면 마음이 좀 그래.\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        choices: [
            { text: "\"서연이가 제일 좋아\"", next: "day3_afternoon_seoyeon_comfort" },
            { text: "\"다들 소중한 친구야\"", next: "day3_afternoon_seoyeon_friend" },
            { text: "\"질투하는 거야?\"", next: "day3_afternoon_seoyeon_tease" }
        ]
    },
    "day3_afternoon_seoyeon_comfort": {
        name: "서연",
        text: "\"...진짜? 그 말 들으니까... 좀 안심이 돼.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 8 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_seoyeon_friend": {
        name: "서연",
        text: "\"...그래. 친구구나. 알았어.\"",
        character: "assets/images/characters/seyoun_sad.png",
        sunset: true,
        stats: { Seoyeon: { affinity: -3 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_seoyeon_tease": {
        name: "서연",
        text: "\"뭐, 뭐야! 그게 아니라... 아, 몰라!\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_yuna_approach": {
        name: "유나",
        text: "\"...{name}.\"",
        character: "assets/images/characters/yuna_normal.png",
        background: "assets/images/background/load_school.png",
        sunset: true,
        next: "day3_afternoon_yuna_talk"
    },
    "day3_afternoon_yuna_talk": {
        name: "유나",
        background: "assets/images/background/load_school.png",
        text: "\"점심때... 서연이 선택했네.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day3_afternoon_yuna_talk_2"
    },
    "day3_afternoon_yuna_talk_2": {
        name: "나",
        background: "assets/images/background/load_school.png",
        character: "assets/images/characters/yuna_normal.png",
        text: "(유나의 눈빛이 평소보다 더 차갑다.)",
        sunset: true,
        choices: [
            { text: "\"미안해, 유나\"", next: "day3_afternoon_yuna_apologize" },
            { text: "\"내일은 유나랑 있을게\"", next: "day3_afternoon_yuna_promise" },
            { text: "\"왜, 화났어?\"", next: "day3_afternoon_yuna_question" }
        ]
    },
    "day3_afternoon_yuna_apologize": {
        name: "유나",
        background: "assets/images/background/load_school.png",
        text: "\"...괜찮아. 내일이 있으니까.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        stats: { Yuna: { affinity: 5 } },
        next: "day3_afternoon_yuna_warning"
    },
    "day3_afternoon_yuna_promise": {
        name: "유나",
        background: "assets/images/background/load_school.png",
        text: "\"...그 말, 잊지 않을게.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        stats: { Yuna: { affinity: 8 } },
        setFlag: "day3_yuna_priority_promise",
        next: "day3_afternoon_yuna_warning"
    },
    "day3_afternoon_yuna_question": {
        name: "유나",
        background: "assets/images/background/load_school.png",
        text: "\"...화? 아니. 그냥... 확인하고 싶었어.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        stats: { Yuna: { affinity: -3 } },
        next: "day3_afternoon_yuna_warning"
    },
    "day3_afternoon_yuna_warning": {
        name: "유나",
        background: "assets/images/background/load_school.png",
        text: "\"기억해, {name}. 나한테 거짓말하면... 알지?\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_dain_approach": {
        name: "다인",
        text: "\"야, {name}아!\"",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "day3_afternoon_dain_talk"
    },
    "day3_afternoon_dain_talk": {
        name: "다인",
        text: "\"점심때 왜 나 안 끼워줬어?! 나도 같이 먹고 싶었단 말이야!\"",
        character: "assets/images/characters/dain_sad.png",
        sunset: true,
        next: "day3_afternoon_dain_talk_2"
    },
    "day3_afternoon_dain_talk_2": {
        name: "나",
        character: "assets/images/characters/dain_sad.png",
        text: "(다인이가 볼을 부풀리며 항의한다.)",
        sunset: true,
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
        sunset: true,
        stats: { Dain: { affinity: 5 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_dain_promise": {
        name: "다인",
        text: "\"진짜?! 그럼 용서해줄게! 내 스파이크 기대해!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        stats: { Dain: { affinity: 8 } },
        next: "day3_afternoon_transition"
    },
    "day3_afternoon_dain_tease": {
        name: "다인",
        text: "\"뭐, 뭐야! 귀엽긴 뭐가 귀여워! 바보!\"",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        stats: { Dain: { affinity: 5 } },
        next: "day3_afternoon_transition"
    },

    // =========================================================================
    // 일반 방과후
    // =========================================================================
    "day3_afternoon_normal": {
        name: "나",
        text: "(평화로운 방과후다. 집에 갈 준비를 하자.)",
        sunset: true,
        next: "day3_afternoon_transition"
    },

    // =========================================================================
    // 전환 - 집으로 가는 길
    // =========================================================================
    "day3_afternoon_transition": {
        name: "나",
        character: null,
        text: "(교문을 나서려는데...)",
        background: "assets/images/background/school.png",
        sunset: true,
        next: "day3_afternoon_gate"
    },
    "day3_afternoon_gate": {
        name: "나",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/seyoun_normal.png",
        text: "(누군가 기다리고 있는 것 같다.)",
        sunset: true,
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
        sunset: true,
        next: "day3_afternoon_multiple_scene"
    },
    "day3_afternoon_multiple_scene": {
        name: "서연",
        text: "\"어, {name}! 같이 가자... 어?\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
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
        sunset: true,
        next: "day3_afternoon_three_way_2"
    },
    "day3_afternoon_three_way_2": {
        name: "나",
        character: "assets/images/characters/yuna_normal.png",
        text: "(서연이와 유나가 서로를 노려보고 있다. 분위기가 살벌하다.)",
        sunset: true,
        next: "day3_afternoon_choose_walk"
    },
    "day3_afternoon_two_way_dain": {
        name: "다인",
        text: "\"오? 서연이도 여기 있네? 나도 {name}이랑 같이 가려고!\"",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "day3_afternoon_choose_walk"
    },
    "day3_afternoon_choose_walk": {
        name: "나",
        character: "assets/images/characters/yuna_normal.png",
        text: "(누구와 함께 갈까...?)",
        sunset: true,
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
        character: null,
        text: "\"서연아, 같이 가자.\"",
        sunset: true,
        stats: { Seoyeon: { affinity: 5 } },
        setFlag: "day3_walked_with_seoyeon",
        next: "day3_afternoon_seoyeon_walk_2"
    },
    "day3_afternoon_seoyeon_walk_2": {
        name: "서연",
        text: "\"응! 가자!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        background: "assets/images/background/school.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_walk_others"
    },
    "day3_afternoon_seoyeon_walk_others": {
        name: "나",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "(뒤에서 시선이 느껴지지만... 서연이와 걷는 지금이 좋다.)",
        sunset: true,
        branches: [
            { next: "day3_afternoon_seoyeon_walk_yuna_reaction", condition: "day3_yuna_date_confirmed" },
            { next: "day3_afternoon_seoyeon_walk_dain_reaction", condition: "day3_dain_date_confirmed" },
            { next: "day3_afternoon_seoyeon_talk_walk" }
        ]
    },
    "day3_afternoon_seoyeon_walk_yuna_reaction": {
        name: "나",
        text: "(유나가 멀찍이서 우리를 바라보고 있다. 그 눈빛이... 무섭다.)",
        sunset: true,
        stats: { Yuna: { affinity: -8 } },
        setFlag: "day3_yuna_witnessed_seoyeon",
        next: "day3_afternoon_seoyeon_talk_walk"
    },
    "day3_afternoon_seoyeon_walk_dain_reaction": {
        name: "다인",
        text: "\"흥! 나 먼저 간다!\"",
        character: "assets/images/characters/dain_sad.png",
        sunset: true,
        stats: { Dain: { affinity: -5 } },
        next: "day3_afternoon_seoyeon_talk_walk"
    },
    "day3_afternoon_seoyeon_talk_walk": {
        name: "서연",
        text: "\"…있잖아, {name}. 저기 강변길로 돌아가자. 오늘 석양 예쁜데.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_sunset"
    },
    "day3_afternoon_seoyeon_sunset": {
        name: "나",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "(석양이 강물에 반사되어 반짝인다. 서연이의 얼굴이 주황빛으로 물들어 눈부시다.)",
        background: "assets/images/background/school.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_sunset_2"
    },
    "day3_afternoon_seoyeon_sunset_2": {
        name: "서연",
        background: "assets/images/background/school.png",
        text: "(갑자기 발을 멈추고 내 앞에 서며) \"…{name}아. 나 한 가지 물어봐도 돼?\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_sunset_3"
    },
    "day3_afternoon_seoyeon_sunset_3": {
        name: "서연",
        background: "assets/images/background/school.png",
        text: "(석양을 배경으로 서연이의 눈이 빛난다) \"내일… 나만 만나줄 거지?\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        choices: [
            { text: "\"당연하지\"", next: "day3_afternoon_seoyeon_pinky", stats: { Seoyeon: { affinity: 8 } } },
            { text: "(서연이의 손을 잡는다)", next: "day3_afternoon_seoyeon_hand", stats: { Seoyeon: { affinity: 10 } } },
            { text: "\"…노력할게\"", next: "day3_afternoon_seoyeon_try", stats: { Seoyeon: { affinity: 3 } } }
        ]
    },
    "day3_afternoon_seoyeon_pinky": {
        name: "서연",
        background: "assets/images/background/school.png",
        text: "(서연이가 새끼손가락을 내밀며) \"그럼 새끼손가락 걸자. 약속 어기면… 바늘 만 개 삼키는 거다?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_freetalk"
    },
    "day3_afternoon_seoyeon_hand": {
        name: "서연",
        background: "assets/images/background/school.png",
        text: "(서연이의 손이 떨리다가 내 손을 꼭 잡는다) \"…바보. 이런 데서 손 잡으면 어떡해.\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_freetalk"
    },
    "day3_afternoon_seoyeon_try": {
        name: "서연",
        background: "assets/images/background/school.png",
        text: "(살짝 실망한 표정을 짓다가 억지로 웃는다) \"…그래. 노력하는 거다?\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_freetalk"
    },
    "day3_afternoon_seoyeon_freetalk": {
        name: "나",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "(석양 지는 강변길을 서연이와 나란히 걷는다. 주황빛이 점점 더 깊어진다.)",
        sunset: true,
        freeTalk: { turns: 4, context: "서연이와 석양 강변길을 걷는 중. 서연이가 '내일 나만 만나줘'라고 하며 새끼손가락/손잡기 스킨십 후. 달콤하고 로맨틱한 분위기." },
        next: "day3_afternoon_seoyeon_talk_walk_2"
    },
    "day3_afternoon_seoyeon_talk_walk_2": {
        name: "서연",
        background: "assets/images/background/school.png",
        text: "\"우리 둘만의 시간이잖아. 그치?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        branches: [
            { next: "day3_afternoon_seoyeon_guilt", condition: "day3_has_multiple_dates" },
            { next: "day3_afternoon_seoyeon_happy" }
        ]
    },
    "day3_afternoon_seoyeon_guilt": {
        name: "나",
        text: "(... '둘만의 시간'이라. 다른 약속들이 머릿속을 스친다.)",
        sunset: true,
        choices: [
            { text: "\"응, 기대돼\"", next: "day3_afternoon_seoyeon_happy", stats: { Seoyeon: { affinity: 5 } } },
            { text: "\"사실은...\" (솔직하게 말한다)", next: "day3_afternoon_seoyeon_confess_walk", stats: { Seoyeon: { affinity: -10 } } }
        ]
    },
    "day3_afternoon_seoyeon_happy": {
        name: "서연",
        text: "\"헤헤, 나도! 그럼 내일 봐! 잘 자!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_seoyeon_confess_walk": {
        name: "서연",
        text: "\"...뭐? 다른 약속도 있어?\"",
        character: "assets/images/characters/seyoun_sad.png",
        sunset: true,
        next: "day3_afternoon_seoyeon_angry"
    },
    "day3_afternoon_seoyeon_angry": {
        name: "서연",
        text: "\"...알았어. 주말에 보면 알겠지, 네가 누굴 진짜 좋아하는지.\"",
        character: "assets/images/characters/seyoun_sad.png",
        sunset: true,
        setFlag: "day3_seoyeon_knows_others",
        fade: true,
        next: "day3_night_start"
    },

    // =========================================================================
    // 유나와 귀가
    // =========================================================================
    "day3_afternoon_yuna_walk": {
        name: "나",
        character: "assets/images/characters/yuna_normal.png",
        text: "\"유나야, 같이 가자.\"",
        sunset: true,
        stats: { Yuna: { affinity: 5 } },
        setFlag: "day3_walked_with_yuna",
        next: "day3_afternoon_yuna_walk_2"
    },
    "day3_afternoon_yuna_walk_2": {
        name: "유나",
        text: "\"...응.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "day3_afternoon_yuna_walk_others"
    },
    "day3_afternoon_yuna_walk_others": {
        name: "서연",
        text: "\"...알았어. 조심히 가.\"",
        character: "assets/images/characters/seyoun_sad.png",
        sunset: true,
        stats: { Seoyeon: { affinity: -8 } },
        setFlag: "day3_seoyeon_witnessed_yuna",
        next: "day3_afternoon_yuna_talk_walk"
    },
    "day3_afternoon_yuna_talk_walk": {
        name: "나",
        character: null,
        text: "(유나와 함께 조용한 길을 걷는다. 그녀는 말이 없지만, 분위기가 편안하다.)",
        background: "assets/images/background/school.png",
        sunset: true,
        next: "day3_afternoon_yuna_cat"
    },
    "day3_afternoon_yuna_cat": {
        name: "나",
        background: "assets/images/background/school.png",
        character: null,
        text: "(길가에 작은 고양이 한 마리가 웅크리고 있다. 유나가 갑자기 멈춘다.)",
        sunset: true,
        next: "day3_afternoon_yuna_cat_2"
    },
    "day3_afternoon_yuna_cat_2": {
        name: "유나",
        background: "assets/images/background/school.png",
        text: "(조용히 무릎을 꿇고 고양이를 쓰다듬는다) \"…같이 있어줘서 다행이다.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "day3_afternoon_yuna_cat_3"
    },
    "day3_afternoon_yuna_cat_3": {
        name: "나",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/yuna_smile.png",
        text: "(유나가 고양이를 쓰다듬는 모습이… 너무 부드럽다.)",
        sunset: true,
        choices: [
            { text: "(나도 고양이를 쓰다듬는다)", next: "day3_afternoon_yuna_cat_pat", stats: { Yuna: { affinity: 3 } } },
            { text: "(유나의 머리를 쓰다듬는다)", next: "day3_afternoon_yuna_head_pat", stats: { Yuna: { affinity: 10 } } },
            { text: "(조용히 지켜본다)", next: "day3_afternoon_yuna_cat_watch", stats: { Yuna: { affinity: 5 } } }
        ]
    },
    "day3_afternoon_yuna_cat_pat": {
        name: "유나",
        background: "assets/images/background/school.png",
        text: "(두 사람의 손이 고양이 위에서 맞닿는다) \"…따뜻하네.\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        next: "day3_afternoon_yuna_freetalk"
    },
    "day3_afternoon_yuna_head_pat": {
        name: "유나",
        background: "assets/images/background/school.png",
        text: "(머리를 쓰다듬는 내 손에 멈춰선다) \"…나를 쓰다듬는 거야?\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        next: "day3_afternoon_yuna_head_pat_2"
    },
    "day3_afternoon_yuna_head_pat_2": {
        name: "유나",
        background: "assets/images/background/school.png",
        text: "(눈을 감으며) \"…멈추지 마. 조금만 더.\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        next: "day3_afternoon_yuna_freetalk"
    },
    "day3_afternoon_yuna_cat_watch": {
        name: "유나",
        background: "assets/images/background/school.png",
        text: "(고양이를 안아들며) \"…이 아이, {name}을 닮았어. 따뜻하고… 모자라.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "day3_afternoon_yuna_freetalk"
    },
    "day3_afternoon_yuna_freetalk": {
        name: "나",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/yuna_shy.png",
        text: "(유나와 나란히 길을 걷는다. 평소보다 유나의 표정이 부드럽다.)",
        sunset: true,
        freeTalk: { turns: 4, context: "유나와 귀가길에 고양이를 함께 쓰다듬은 후. 유나가 평소보다 부드러운 표정. 조용하고 편안한 분위기." },
        next: "day3_afternoon_yuna_talk_walk_2"
    },
    "day3_afternoon_yuna_talk_walk_2": {
        name: "유나",
        background: "assets/images/background/school.png",
        text: "\"...{name}. 내일 밤, 잊지 마.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day3_afternoon_yuna_talk_walk_3"
    },
    "day3_afternoon_yuna_talk_walk_3": {
        name: "유나",
        background: "assets/images/background/school.png",
        text: "\"학교 후문. 8시. 늦으면... 안 돼.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day3_afternoon_yuna_warning_walk"
    },
    "day3_afternoon_yuna_warning_walk": {
        name: "나",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/yuna_normal.png",
        text: "(유나의 목소리에 묘한 압박감이 느껴진다.)",
        sunset: true,
        choices: [
            { text: "\"절대 안 늦을게\"", next: "day3_afternoon_yuna_promise_keep", stats: { Yuna: { affinity: 8 } } },
            { text: "\"혹시 늦으면?\"", next: "day3_afternoon_yuna_late_question" }
        ]
    },
    "day3_afternoon_yuna_promise_keep": {
        name: "유나",
        background: "assets/images/background/school.png",
        text: "\"...좋아. 믿을게.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_yuna_late_question": {
        name: "유나",
        background: "assets/images/background/school.png",
        text: "\"...그럼 안 돼. 절대로.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day3_afternoon_yuna_late_warning"
    },
    "day3_afternoon_yuna_late_warning": {
        name: "나",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/yuna_normal.png",
        text: "(유나의 눈동자가 순간 이상하게 빛난 것 같았다... 착각이겠지?)",
        sunset: true,
        fade: true,
        next: "day3_night_start"
    },

    // =========================================================================
    // 다인과 귀가
    // =========================================================================
    "day3_afternoon_dain_walk": {
        name: "나",
        character: null,
        text: "\"다인아, 같이 가자.\"",
        sunset: true,
        stats: { Dain: { affinity: 5 } },
        setFlag: "day3_walked_with_dain",
        next: "day3_afternoon_dain_walk_2"
    },
    "day3_afternoon_dain_walk_2": {
        name: "다인",
        text: "\"야호! 가자 가자!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Seoyeon: { affinity: -5 }, Yuna: { affinity: -5 } },
        background: "assets/images/background/school.png",
        sunset: true,
        next: "day3_afternoon_dain_talk_walk"
    },
    "day3_afternoon_dain_talk_walk": {
        name: "다인",
        background: "assets/images/background/school.png",
        text: "\"야, {name}! 저기 편의점 보이지? 목마르다!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day3_afternoon_dain_store"
    },
    "day3_afternoon_dain_store": {
        name: "나",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/dain_laugh.png",
        text: "(다인이가 편의점으로 달려간다. 따라가보니 아이스크림 코너 앞에 멈춰선다.)",
        sunset: true,
        next: "day3_afternoon_dain_store_2"
    },
    "day3_afternoon_dain_store_2": {
        name: "다인",
        background: "assets/images/background/school.png",
        text: "\"니가 골라줘! 나 골라달라면 다 사고 싶어져서…\"",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        choices: [
            { text: "(하나만 골라준다)", next: "day3_afternoon_dain_ice_one", stats: { Dain: { affinity: 3 } } },
            { text: "(두 개 사서 하나 나눠먹는다)", next: "day3_afternoon_dain_ice_share", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day3_afternoon_dain_ice_one": {
        name: "다인",
        background: "assets/images/background/school.png",
        text: "(아이스크림을 받아들며) \"…고마워. 역시 {name}이 최고!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day3_afternoon_dain_park"
    },
    "day3_afternoon_dain_ice_share": {
        name: "다인",
        background: "assets/images/background/school.png",
        text: "(나눠먹기를 받아들며 얼굴이 빨개진다) \"…이, 이게 나눠먹기?! 간접키스잖아! 아, 아니다! 그냥 나눠먹는 거야!\"",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "day3_afternoon_dain_park"
    },
    "day3_afternoon_dain_park": {
        name: "나",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/dain_laugh.png",
        text: "(다인이와 근처 공원 벤치에 나란히 앉았다. 아이스크림을 먹으며 석양을 바라본다.)",
        sunset: true,
        next: "day3_afternoon_dain_park_2"
    },
    "day3_afternoon_dain_park_2": {
        name: "다인",
        background: "assets/images/background/school.png",
        text: "(갑자기 조용해지며) \"…{name}. 나, 사실 어제 잠 못 잤어.\"",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "day3_afternoon_dain_park_3"
    },
    "day3_afternoon_dain_park_3": {
        name: "다인",
        background: "assets/images/background/school.png",
        text: "\"…내일 연습 보러 와준다면서… 정말 올 거지? 바람 맞추는 거 아니지?\"",
        character: "assets/images/characters/dain_sad.png",
        sunset: true,
        choices: [
            { text: "\"절대 바람 맞추지 않아\"", next: "day3_afternoon_dain_promise_firm", stats: { Dain: { affinity: 8 } } },
            { text: "(다인이의 머리를 쓰다듬는다)", next: "day3_afternoon_dain_pat", stats: { Dain: { affinity: 10 } } }
        ]
    },
    "day3_afternoon_dain_promise_firm": {
        name: "다인",
        background: "assets/images/background/school.png",
        text: "(눈이 반짝이며) \"…진짜? 약속!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day3_afternoon_dain_freetalk"
    },
    "day3_afternoon_dain_pat": {
        name: "다인",
        background: "assets/images/background/school.png",
        text: "(머리를 쓰다듬으면 다인이가 얼굴을 붉힌다) \"야, 나 애기 아니거든! …근데 멈추지 마.\"",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "day3_afternoon_dain_freetalk"
    },
    "day3_afternoon_dain_freetalk": {
        name: "나",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/dain_laugh.png",
        text: "(공원 벤치에서 다인이와 아이스크림을 먹으며 이야기를 나눈다.)",
        sunset: true,
        freeTalk: { turns: 4, context: "다인이와 공원 벤치에서 아이스크림 나눠먹기 후. 다인이가 '잘 못 잤다'라며 진지한 모습. 평소의 활발함 대신 수줍어하는 분위기." },
        next: "day3_afternoon_dain_talk_walk_2"
    },
    "day3_afternoon_dain_talk_walk_2": {
        name: "다인",
        background: "assets/images/background/school.png",
        text: "\"나 {name}한테 멋진 모습 보여주고 싶거든!\"",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        choices: [
            { text: "\"기대할게!\"", next: "day3_afternoon_dain_excited", stats: { Dain: { affinity: 5 } } },
            { text: "\"내가 응원해줄게\"", next: "day3_afternoon_dain_cheer", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day3_afternoon_dain_excited": {
        name: "다인",
        background: "assets/images/background/school.png",
        text: "\"좋아! 각오해!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_dain_cheer": {
        name: "다인",
        background: "assets/images/background/school.png",
        text: "\"헤헤... 그 말 듣고 나니까 더 열심히 해야겠다!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        fade: true,
        next: "day3_night_start"
    },

    // =========================================================================
    // 혼자 귀가
    // =========================================================================
    "day3_afternoon_reject_all": {
        name: "나",
        character: "assets/images/characters/yuna_normal.png",
        text: "\"미안, 오늘은 혼자 가고 싶어.\"",
        sunset: true,
        setFlag: "day3_walked_alone",
        next: "day3_afternoon_reject_reaction"
    },
    "day3_afternoon_reject_reaction": {
        name: "나",
        character: "assets/images/characters/yuna_normal.png",
        text: "(모두의 표정이 굳는다. 실망한 눈빛이 느껴진다.)",
        sunset: true,
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_alone_walk": {
        name: "나",
        character: null,
        text: "(혼자 집으로 향한다. 내일은 어떤 하루가 될까...)",
        background: "assets/images/background/school.png",
        sunset: true,
        fade: true,
        next: "day3_night_start"
    },

    // =========================================================================
    // 단일 약속 시 - 해당 캐릭터만 대기
    // =========================================================================
    "day3_afternoon_single_wait": {
        name: "나",
        text: "(교문 앞에 누군가 서 있다.)",
        sunset: true,
        branches: [
            { next: "day3_afternoon_seoyeon_solo", condition: "day3_seoyeon_date_confirmed" },
            { next: "day3_afternoon_yuna_solo", condition: "day3_yuna_date_confirmed" },
            { next: "day3_afternoon_dain_solo", condition: "day3_dain_date_confirmed" }
        ]
    },
    "day3_afternoon_seoyeon_solo": {
        name: "서연",
        text: "\"{name}! 같이 가자!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "day3_afternoon_seoyeon_walk_2"
    },
    "day3_afternoon_yuna_solo": {
        name: "유나",
        text: "\"...기다렸어.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        stats: { Yuna: { affinity: 3 } },
        next: "day3_afternoon_yuna_talk_walk"
    },
    "day3_afternoon_dain_solo": {
        name: "다인",
        text: "\"야! 빨리 와! 같이 가자!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
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
        sunset: true,
        choices: [
            { text: "\"네, 감사합니다!\"", next: "day3_afternoon_teacher_ride", stats: { Teacher: { affinity: 5 } } },
            { text: "\"괜찮아요, 걸어갈게요\"", next: "day3_afternoon_alone_walk" }
        ]
    },
    "day3_afternoon_teacher_ride": {
        name: "나",
        text: "(선생님의 차에 탔다. 퇴근길 도로가 석양으로 물든다.)",
        character: "assets/images/characters/teacher_normal.png",
        background: "assets/images/background/school.png",
        sunset: true,
        next: "day3_afternoon_teacher_ride_2"
    },
    "day3_afternoon_teacher_ride_2": {
        name: "담임선생님",
        background: "assets/images/background/school.png",
        text: "(운전하며 조용히) \"…{name}야. 우리 이렇게 둘이만 있으니까… 뭔가 이상한 기분이야.\"",
        character: "assets/images/characters/teacher_shy.png",
        sunset: true,
        next: "day3_afternoon_teacher_ride_3"
    },
    "day3_afternoon_teacher_ride_3": {
        name: "나",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/teacher_shy.png",
        text: "(신호에 멈춘다. 선생님이 조용히 내 손등을 건드린다.)",
        sunset: true,
        choices: [
            { text: "(선생님 손을 잡는다)", next: "day3_afternoon_teacher_hold", stats: { Teacher: { affinity: 10 } } },
            { text: "\"선생님, 이러면 안 돼요\"", next: "day3_afternoon_teacher_stop", stats: { Teacher: { affinity: -3 } } },
            { text: "(조용히 어깨에 머리를 기댄다)", next: "day3_afternoon_teacher_lean", stats: { Teacher: { affinity: 8 } } }
        ]
    },
    "day3_afternoon_teacher_hold": {
        name: "담임선생님",
        background: "assets/images/background/school.png",
        text: "(선생님이 숨을 멈춘다) \"…신호 바뀌면 놓을 거야. 약속.\"",
        character: "assets/images/characters/teacher_shy.png",
        sunset: true,
        next: "day3_afternoon_teacher_freetalk"
    },
    "day3_afternoon_teacher_stop": {
        name: "담임선생님",
        background: "assets/images/background/school.png",
        text: "(선생님이 쓸쓸하게 웃는다) \"…그래, 맞아. 선생님이 정신 차려야지.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "day3_afternoon_teacher_freetalk"
    },
    "day3_afternoon_teacher_lean": {
        name: "담임선생님",
        background: "assets/images/background/school.png",
        text: "(놀라서 멈칫하더니… 조용히 내 머리를 쓰다듬는다) \"…아직 신호 안 바뀌었다.\"",
        character: "assets/images/characters/teacher_shy.png",
        sunset: true,
        next: "day3_afternoon_teacher_freetalk"
    },
    "day3_afternoon_teacher_freetalk": {
        name: "나",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/teacher_shy.png",
        text: "(담임선생님의 차 안에서 함께 집으로 향한다.)",
        sunset: true,
        freeTalk: { turns: 3, context: "담임선생님의 차 안에서 귀가 중. 석양 속에서 손을 잡거나 어깨에 기대는 스킨십 후. 금지된 사랑의 달콤함과 죄책감." },
        next: "day3_afternoon_teacher_arrive"
    },
    "day3_afternoon_teacher_arrive": {
        name: "담임선생님",
        background: "assets/images/background/school.png",
        text: "(집 앞에 도착하며) \"…모레 일요일에 박물관 약속 잊지 않았지? 기대하고 있을게.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        fade: true,
        next: "day3_night_start"
    },
    "day3_afternoon_nurse_wait": {
        name: "보건선생님",
        text: "\"어머, {name}. 퇴근하려고 나왔는데 딱 마주쳤네? 후훗.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        choices: [
            { text: "\"같이 가실래요?\"", next: "day3_afternoon_nurse_walk", stats: { Nurse: { affinity: 5 } } },
            { text: "\"안녕히 가세요\"", next: "day3_afternoon_alone_walk" }
        ]
    },
    "day3_afternoon_nurse_walk": {
        name: "나",
        text: "(보건선생님과 나란히 걷는다. 선생님이 내 손등을 본다.)",
        character: "assets/images/characters/nurse_normal.png",
        background: "assets/images/background/school.png",
        sunset: true,
        next: "day3_afternoon_nurse_band"
    },
    "day3_afternoon_nurse_band": {
        name: "보건선생님",
        background: "assets/images/background/school.png",
        text: "(갑자기 내 손을 잡고 밴드를 붙여준다) \"…여기 긁혔는데? 못 봤어.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day3_afternoon_nurse_band_2"
    },
    "day3_afternoon_nurse_band_2": {
        name: "나",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/nurse_normal.png",
        text: "(상처가 없는데… 선생님이 손을 잡고 싶었던 걸까?)",
        sunset: true,
        choices: [
            { text: "\"상처 없는데요?\"", next: "day3_afternoon_nurse_caught", stats: { Nurse: { affinity: 5 } } },
            { text: "(그냥 손을 잡아준다)", next: "day3_afternoon_nurse_hold", stats: { Nurse: { affinity: 10 } } }
        ]
    },
    "day3_afternoon_nurse_caught": {
        name: "보건선생님",
        background: "assets/images/background/school.png",
        text: "(들켰다는 듯 얼굴이 빨개진다) \"…훔, 눈치 빠르네? 그냥… 선생님 마크야.\"",
        character: "assets/images/characters/nurse_shy.png",
        sunset: true,
        next: "day3_afternoon_nurse_freetalk"
    },
    "day3_afternoon_nurse_hold": {
        name: "보건선생님",
        background: "assets/images/background/school.png",
        text: "(놀라서 멈춰서다가… 꼭 잡아온다) \"…위험한 애. 10초만 이러고 있자.\"",
        character: "assets/images/characters/nurse_shy.png",
        sunset: true,
        next: "day3_afternoon_nurse_freetalk"
    },
    "day3_afternoon_nurse_freetalk": {
        name: "나",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/nurse_shy.png",
        text: "(보건선생님과 나란히 퇴근길을 걷는다.)",
        sunset: true,
        freeTalk: { turns: 3, context: "보건선생님과 퇴근길. 선생님이 밴드를 구실로 손을 잡았다. 금지된 사랑의 설렘과 긴장감." },
        next: "day3_afternoon_nurse_arrive"
    },
    "day3_afternoon_nurse_arrive": {
        name: "보건선생님",
        background: "assets/images/background/school.png",
        text: "\"일요일 저녁 7시, 잊으면 안 돼? 선생님 기다리고 있을 테니까.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        fade: true,
        next: "day3_night_start"
    }
});
