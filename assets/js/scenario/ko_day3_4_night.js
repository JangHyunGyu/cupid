/**
 * ============================================================================
 * CUPID - Day 3 Night Scenario (Korean Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: ko_day3_4_night.js
 * 언어: 한국어 (Korean)
 * 일차: Day 3 (3일차)
 * 시간대: Night (밤)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 금요일 밤. 주말 데이트를 앞두고 히로인들과의 메시지 대화.
 * 복수의 약속을 한 경우, 히로인들의 의심 메시지가 오기 시작하며
 * 갈등이 심화됩니다. 선택에 따라 Day 4(토요일)의 전개가 달라집니다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 귀가 후 휴식 - 하루를 되돌아보는 시간
 * 2. 메시지 확인 - 히로인들로부터 메시지 수신
 * 3. 갈등 메시지 - 복수 약속 시 의심/질투 메시지
 * 4. 주말 전야 - 내일 약속에 대한 기대와 불안
 * 5. 취침 - Day 4(토요일)로 전환
 * 
 *  조건 플래그
 * ----------------------------------------------------------------------------
 * day3_*_date_confirmed : 해당 캐릭터와 주말 약속 확정
 * day3_has_multiple_dates : 복수 약속 존재
 * day3_caught_multiple_dates : 점심에 복수 약속이 발각됨
 * day3_*_knows_others : 해당 캐릭터가 다른 약속을 알고 있음
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
 * [Day 3 - Night] 씬 데이터 정의
 */
Object.assign(SCENARIO[3], {
    // =========================================================================
    // 밤 시작
    // =========================================================================
    "day3_night_start": {
        name: "나",
        text: "(집에 도착했다. 금요일 밤... 내일부터 주말이다.)",
        background: "assets/images/background/room_my.png",
        bgm: "night2.mp3",
        character: null,
        night: true,
        next: "day3_night_reflect"
    },
    "day3_night_reflect": {
        name: "나",
        text: "(침대에 누워 오늘 하루를 되돌아본다. 점심때 일... 방과후에 있었던 일들...)",
        night: true,
        branches: [
            { next: "day3_night_reflect_trouble", condition: "day3_caught_multiple_dates" },
            { next: "day3_night_reflect_tension", condition: "day3_has_multiple_dates" },
            { next: "day3_night_reflect_normal" }
        ]
    },
    "day3_night_reflect_trouble": {
        name: "나",
        text: "(점심때 다 들켜버렸다... 주말이 무사히 지나갈 수 있을까?)",
        night: true,
        next: "day3_night_phone_check"
    },
    "day3_night_reflect_tension": {
        name: "나",
        text: "(여러 약속을 잡아버렸는데... 시간 배분을 잘 해야겠다.)",
        night: true,
        next: "day3_night_phone_check"
    },
    "day3_night_reflect_normal": {
        name: "나",
        text: "(내일이 기대된다. 어떤 하루가 될까?)",
        night: true,
        next: "day3_night_phone_check"
    },

    // =========================================================================
    // 메시지 확인
    // =========================================================================
    "day3_night_phone_check": {
        name: "나",
        text: "(스마트폰을 확인한다. 메시지가 와 있다.)",
        night: true,
        branches: [
            { next: "day3_night_multiple_messages", condition: "day3_has_multiple_dates" },
            { next: "day3_night_single_message", condition: "day3_seoyeon_date_confirmed" },
            { next: "day3_night_single_message", condition: "day3_yuna_date_confirmed" },
            { next: "day3_night_single_message", condition: "day3_dain_date_confirmed" },
            { next: "day3_night_single_message", condition: "day3_nurse_date_confirmed" },
            { next: "day3_night_single_message", condition: "day3_teacher_date_confirmed" },
            { next: "day3_night_no_message" }
        ]
    },

    // =========================================================================
    // 복수 약속 - 갈등 메시지
    // =========================================================================
    "day3_night_multiple_messages": {
        name: "나",
        text: "(메시지가 여러 개 와 있다... 심장이 두근거린다.)",
        night: true,
        next: "day3_night_check_messages"
    },
    "day3_night_check_messages": {
        name: "나",
        text: "(어떤 메시지부터 확인할까?)",
        night: true,
        choices: [
            { text: "서연이의 메시지", next: "day3_night_msg_seoyeon", condition: "day3_seoyeon_date_confirmed" },
            { text: "유나의 메시지", next: "day3_night_msg_yuna", condition: "day3_yuna_date_confirmed" },
            { text: "다인이의 메시지", next: "day3_night_msg_dain", condition: "day3_dain_date_confirmed" },
            { text: "보건선생님의 메시지", next: "day3_night_msg_nurse", condition: "day3_nurse_date_confirmed" },
            { text: "담임선생님의 메시지", next: "day3_night_msg_teacher", condition: "day3_teacher_date_confirmed" },
            { text: "그냥 자버린다", next: "day3_night_ignore_all" }
        ]
    },

    // =========================================================================
    // 서연 메시지
    // =========================================================================
    "day3_night_msg_seoyeon": {
        name: "서연",
        text: "(메시지: 밤 10시) '{name}, 아직 안 자지? 내일 정말 기대돼!'",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        night: true,
        setFlag: "checked_seoyeon_msg",
        branches: [
            { next: "day3_night_seoyeon_suspicious", condition: "day3_seoyeon_knows_others" },
            { next: "day3_night_seoyeon_jealous", condition: "day3_caught_multiple_dates" },
            { next: "day3_night_seoyeon_normal" }
        ]
    },
    "day3_night_seoyeon_suspicious": {
        name: "서연",
        text: "(추가 메시지) '근데... 나만 만나는 거 맞지? 다른 약속 없는 거지?'",
        character: "assets/images/characters/seyoun_sad.png",
        silhouette: true,
        night: true,
        choices: [
            { text: "'응, 서연이만 만나!'", next: "day3_night_seoyeon_lie", stats: { Seoyeon: { affinity: 5 } }, setFlag: "day3_lied_to_seoyeon" },
            { text: "'솔직히 말할게...'", next: "day3_night_seoyeon_honest", stats: { Seoyeon: { affinity: -8 } } },
            { text: "(읽씹)", next: "day3_night_seoyeon_ignore", stats: { Seoyeon: { affinity: -5 } } }
        ]
    },
    "day3_night_seoyeon_lie": {
        name: "서연",
        text: "'진짜? 믿을게! 그럼 내일 봐! 💕'",
        character: "assets/images/characters/seyoun_laugh.png",
        silhouette: true,
        night: true,
        next: "day3_night_back_to_messages"
    },
    "day3_night_seoyeon_honest": {
        name: "서연",
        text: "'...뭐? 다른 약속도 있어? 누구랑?'",
        character: "assets/images/characters/seyoun_sad.png",
        silhouette: true,
        night: true,
        next: "day3_night_seoyeon_angry"
    },
    "day3_night_seoyeon_angry": {
        name: "서연",
        text: "'...알았어. 주말에 보면 알겠지.'",
        character: "assets/images/characters/seyoun_sad.png",
        silhouette: true,
        night: true,
        setFlag: "day3_seoyeon_angry",
        next: "day3_night_back_to_messages"
    },
    "day3_night_seoyeon_ignore": {
        name: "나",
        text: "(답장을 하지 않았다. 서연이가 실망할 것 같다...)",
        night: true,
        setFlag: "day3_ignored_seoyeon",
        next: "day3_night_back_to_messages"
    },
    "day3_night_seoyeon_jealous": {
        name: "서연",
        text: "(추가 메시지) '오늘 점심때 일... 아직도 마음에 걸려. 나한테 솔직하게 말해줘.'",
        character: "assets/images/characters/seyoun_sad.png",
        silhouette: true,
        night: true,
        choices: [
            { text: "'미안해, 다들 거절 못 해서...'", next: "day3_night_seoyeon_apologize", stats: { Seoyeon: { affinity: 3 } } },
            { text: "'서연이가 제일 중요해'", next: "day3_night_seoyeon_reassure", stats: { Seoyeon: { affinity: 8 } } },
            { text: "(읽씹)", next: "day3_night_seoyeon_ignore", stats: { Seoyeon: { affinity: -5 } } }
        ]
    },
    "day3_night_seoyeon_apologize": {
        name: "서연",
        text: "'...솔직한 건 고마워. 근데 나, 다른 애들이랑 공유하는 건 싫어.'",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_back_to_messages"
    },
    "day3_night_seoyeon_reassure": {
        name: "서연",
        text: "'...정말? 그 말, 기억할게. 내일 꼭 증명해줘.'",
        character: "assets/images/characters/seyoun_laugh.png",
        silhouette: true,
        night: true,
        setFlag: "day3_seoyeon_expects_priority",
        next: "day3_night_back_to_messages"
    },
    "day3_night_seoyeon_normal": {
        name: "서연",
        text: "'내일 어디로 갈지 정했어? 나한테 맡겨도 돼! 잘 자! 😊'",
        character: "assets/images/characters/seyoun_laugh.png",
        silhouette: true,
        night: true,
        choices: [
            { text: "'맡길게! 잘 자!'", next: "day3_night_seoyeon_good", stats: { Seoyeon: { affinity: 3 } } },
            { text: "'고마워, 내일 봐!'", next: "day3_night_seoyeon_good", stats: { Seoyeon: { affinity: 2 } } }
        ]
    },
    "day3_night_seoyeon_good": {
        name: "나",
        text: "(서연이와의 대화를 마쳤다.)",
        night: true,
        next: "day3_night_back_to_messages"
    },

    // =========================================================================
    // 유나 메시지
    // =========================================================================
    "day3_night_msg_yuna": {
        name: "유나",
        text: "(메시지: 밤 11시 59분) '...{name}. 내일 밤. 잊으면 안 돼.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        setFlag: "checked_yuna_msg",
        branches: [
            { next: "day3_night_yuna_witnessed", condition: "day3_yuna_witnessed_seoyeon" },
            { next: "day3_night_yuna_knows", condition: "day3_caught_multiple_dates" },
            { next: "day3_night_yuna_normal" }
        ]
    },
    "day3_night_yuna_witnessed": {
        name: "유나",
        text: "(추가 메시지) '오늘 방과후... 서연이랑 같이 가는 거 봤어.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_yuna_warning"
    },
    "day3_night_yuna_warning": {
        name: "유나",
        text: "'나한테 거짓말하면... 후회할 거야.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        choices: [
            { text: "'유나가 제일 중요해'", next: "day3_night_yuna_reassure", stats: { Yuna: { affinity: 10 } }, setFlag: "day3_lied_to_yuna" },
            { text: "'서연이랑은 그냥 친구야'", next: "day3_night_yuna_excuse", stats: { Yuna: { affinity: 3 } } },
            { text: "'...미안'", next: "day3_night_yuna_apologize", stats: { Yuna: { affinity: -3 } } }
        ]
    },
    "day3_night_yuna_reassure": {
        name: "유나",
        text: "'...정말? 그 말... 믿을게. 하지만 배신하면...'",
        character: "assets/images/characters/yuna_smile.png",
        silhouette: true,
        night: true,
        next: "day3_night_yuna_threat"
    },
    "day3_night_yuna_threat": {
        name: "유나",
        text: "'...알지? 😊'",
        character: "assets/images/characters/yuna_smile.png",
        silhouette: true,
        night: true,
        setFlag: "day3_yuna_threatened",
        next: "day3_night_back_to_messages"
    },
    "day3_night_yuna_excuse": {
        name: "유나",
        text: "'...그래. 친구. 믿을게.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_back_to_messages"
    },
    "day3_night_yuna_apologize": {
        name: "유나",
        text: "'...내일 만나면 얘기해. 도망치면 안 돼.'",
        character: "assets/images/characters/yuna_sad.png",
        silhouette: true,
        night: true,
        setFlag: "day3_yuna_upset",
        next: "day3_night_back_to_messages"
    },
    "day3_night_yuna_knows": {
        name: "유나",
        text: "(추가 메시지) '...너, 다른 애들한테도 약속했지?'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_yuna_knows_2"
    },
    "day3_night_yuna_knows_2": {
        name: "유나",
        text: "'괜찮아. 결국 넌 나한테 올 테니까.'",
        character: "assets/images/characters/yuna_smile.png",
        silhouette: true,
        night: true,
        setFlag: "day3_yuna_confident",
        next: "day3_night_back_to_messages"
    },
    "day3_night_yuna_normal": {
        name: "유나",
        text: "'...꿈에서 봐.'",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        choices: [
            { text: "'응, 잘 자'", next: "day3_night_yuna_sleep", stats: { Yuna: { affinity: 3 } } },
            { text: "'무슨 꿈?'", next: "day3_night_yuna_dream", stats: { Yuna: { affinity: 5 } } }
        ]
    },
    "day3_night_yuna_dream": {
        name: "유나",
        text: "'...비밀. 내일 밤 알려줄게.'",
        character: "assets/images/characters/yuna_smile.png",
        silhouette: true,
        night: true,
        next: "day3_night_back_to_messages"
    },
    "day3_night_yuna_sleep": {
        name: "나",
        text: "(유나와의 대화를 마쳤다.)",
        night: true,
        next: "day3_night_back_to_messages"
    },

    // =========================================================================
    // 다인 메시지
    // =========================================================================
    "day3_night_msg_dain": {
        name: "다인",
        text: "(메시지: 밤 9시) '야!! 내일 9시 체육관!! 절대 늦지 마!!! 😤'",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        night: true,
        setFlag: "checked_dain_msg",
        branches: [
            { next: "day3_night_dain_suspicious", condition: "day3_caught_multiple_dates" },
            { next: "day3_night_dain_normal" }
        ]
    },
    "day3_night_dain_suspicious": {
        name: "다인",
        text: "(추가 메시지) '근데... 너 진짜 다른 애들이랑도 약속한 거야? 점심때 들었거든.'",
        character: "assets/images/characters/dain_sad.png",
        silhouette: true,
        night: true,
        choices: [
            { text: "'다인이 연습이 제일 중요해!'", next: "day3_night_dain_priority", stats: { Dain: { affinity: 8 } }, setFlag: "day3_lied_to_dain" },
            { text: "'다른 약속도 있긴 해...'", next: "day3_night_dain_honest", stats: { Dain: { affinity: -5 } } },
            { text: "'시간대가 달라서 괜찮아'", next: "day3_night_dain_excuse", stats: { Dain: { affinity: 2 } } }
        ]
    },
    "day3_night_dain_priority": {
        name: "다인",
        text: "'진짜?! 헤헤, 그럼 됐어! 내일 멋진 거 보여줄게!'",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        night: true,
        setFlag: "day3_dain_expects_priority",
        next: "day3_night_back_to_messages"
    },
    "day3_night_dain_honest": {
        name: "다인",
        text: "'...그래? 흥, 뭐 어쩔 수 없지. 근데 내 연습은 꼭 와야 해!'",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_back_to_messages"
    },
    "day3_night_dain_excuse": {
        name: "다인",
        text: "'음... 뭐, 시간 맞으면 괜찮긴 한데. 나한테 집중해줘야 돼!'",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_back_to_messages"
    },
    "day3_night_dain_normal": {
        name: "다인",
        text: "(추가 메시지) '연습 끝나고 떡볶이 먹으러 가자! 내가 쏠게! 🍜'",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        night: true,
        choices: [
            { text: "'좋아! 기대할게!'", next: "day3_night_dain_good", stats: { Dain: { affinity: 5 } } },
            { text: "'ㅋㅋ 알았어!'", next: "day3_night_dain_good", stats: { Dain: { affinity: 3 } } }
        ]
    },
    "day3_night_dain_good": {
        name: "나",
        text: "(다인이와의 대화를 마쳤다.)",
        night: true,
        next: "day3_night_back_to_messages"
    },

    // =========================================================================
    // 보건선생님 메시지
    // =========================================================================
    "day3_night_msg_nurse": {
        name: "보건선생님",
        text: "(메시지: 밤 11시) '우리 귀여운 전학생, 아직 안 잤어? 후훗.'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        setFlag: "checked_nurse_msg",
        next: "day3_night_nurse_2"
    },
    "day3_night_nurse_2": {
        name: "보건선생님",
        text: "'일요일 저녁, 잊지 않았지? 선생님 특별한 거 준비해둘게. 😉'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        choices: [
            { text: "'기대할게요!'", next: "day3_night_nurse_excited", stats: { Nurse: { affinity: 5 } } },
            { text: "'뭔데요?'", next: "day3_night_nurse_curious", stats: { Nurse: { affinity: 3 } } }
        ]
    },
    "day3_night_nurse_excited": {
        name: "보건선생님",
        text: "'기대해도 좋아. 그럼 푹 자고 일요일에 보자, {name}. 💋'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_back_to_messages"
    },
    "day3_night_nurse_curious": {
        name: "보건선생님",
        text: "'비밀~ 일요일에 알게 될 거야. 기대해도 좋아.'",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_back_to_messages"
    },

    // =========================================================================
    // 담임선생님 메시지
    // =========================================================================
    "day3_night_msg_teacher": {
        name: "담임선생님",
        text: "(메시지: 밤 10시) '{name}, 내일 박물관 약속 잊지 않았지?'",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        night: true,
        setFlag: "checked_teacher_msg",
        next: "day3_night_teacher_2"
    },
    "day3_night_teacher_2": {
        name: "담임선생님",
        text: "'선생님도 오랜만에 나들이라 기대되네. 일요일 오후 2시, 박물관 정문에서 보자.'",
        character: "assets/images/characters/teacher_smile.png",
        silhouette: true,
        night: true,
        choices: [
            { text: "'네, 기대돼요!'", next: "day3_night_teacher_good", stats: { Teacher: { affinity: 5 } } },
            { text: "'안녕히 주무세요!'", next: "day3_night_teacher_good", stats: { Teacher: { affinity: 3 } } }
        ]
    },
    "day3_night_teacher_good": {
        name: "담임선생님",
        text: "'그래, 푹 자고 일요일에 보자. 잘 자렴.'",
        character: "assets/images/characters/teacher_smile.png",
        silhouette: true,
        night: true,
        next: "day3_night_back_to_messages"
    },

    // =========================================================================
    // 메시지 선택으로 돌아가기
    // =========================================================================
    "day3_night_back_to_messages": {
        name: "나",
        text: "(다른 메시지도 확인할까?)",
        night: true,
        choices: [
            { text: "서연이의 메시지", next: "day3_night_msg_seoyeon", condition: "day3_seoyeon_date_confirmed", excludeCondition: "checked_seoyeon_msg" },
            { text: "유나의 메시지", next: "day3_night_msg_yuna", condition: "day3_yuna_date_confirmed", excludeCondition: "checked_yuna_msg" },
            { text: "다인이의 메시지", next: "day3_night_msg_dain", condition: "day3_dain_date_confirmed", excludeCondition: "checked_dain_msg" },
            { text: "보건선생님의 메시지", next: "day3_night_msg_nurse", condition: "day3_nurse_date_confirmed", excludeCondition: "checked_nurse_msg" },
            { text: "담임선생님의 메시지", next: "day3_night_msg_teacher", condition: "day3_teacher_date_confirmed", excludeCondition: "checked_teacher_msg" },
            { text: "이제 잔다", next: "day3_night_sleep" }
        ]
    },

    // =========================================================================
    // 단일 약속 메시지
    // =========================================================================
    "day3_night_single_message": {
        name: "나",
        text: "(메시지가 왔다.)",
        night: true,
        branches: [
            { next: "day3_night_seoyeon_normal", condition: "day3_seoyeon_date_confirmed" },
            { next: "day3_night_yuna_normal", condition: "day3_yuna_date_confirmed" },
            { next: "day3_night_dain_normal", condition: "day3_dain_date_confirmed" },
            { next: "day3_night_msg_nurse", condition: "day3_nurse_date_confirmed" },
            { next: "day3_night_msg_teacher", condition: "day3_teacher_date_confirmed" }
        ]
    },

    // =========================================================================
    // 메시지 없음
    // =========================================================================
    "day3_night_no_message": {
        name: "나",
        text: "(특별한 메시지는 없다. 주말에 뭘 할까...)",
        night: true,
        next: "day3_night_sleep"
    },

    // =========================================================================
    // 메시지 무시
    // =========================================================================
    "day3_night_ignore_all": {
        name: "나",
        text: "(메시지를 확인하지 않고 그냥 자기로 했다. 내일 아침에 봐야지...)",
        night: true,
        setFlag: "day3_ignored_all_messages",
        stats: { Seoyeon: { affinity: -3 }, Yuna: { affinity: -3 }, Dain: { affinity: -3 } },
        next: "day3_night_sleep"
    },

    // =========================================================================
    // 취침 - Day 4로 전환
    // =========================================================================
    "day3_night_sleep": {
        name: "나",
        text: "(눈이 감기려는 순간… 스마트폰이 울린다. 전화다.)",
        night: true,
        branches: [
            { next: "day3_night_phone_seoyeon", condition: "day3_walked_with_seoyeon" },
            { next: "day3_night_phone_yuna", condition: "day3_walked_with_yuna" },
            { next: "day3_night_phone_dain", condition: "day3_walked_with_dain" },
            { next: "day3_night_phone_nurse", condition: "day3_nurse_date_confirmed" },
            { next: "day3_night_phone_teacher", condition: "day3_teacher_date_confirmed" },
            { next: "day3_night_sleep_2" }
        ]
    },
    "day3_night_phone_seoyeon": {
        name: "서연",
        text: "(전화를 받으니 서연이의 목소리가 들린다) \"…{name}야? 잘 시간인 거 알아. 근데… 목소리가 듣고 싶었어.\"",
        character: "assets/images/characters/seyoun_shy.png",
        silhouette: true,
        night: true,
        next: "day3_night_phone_seoyeon_freetalk"
    },
    "day3_night_phone_seoyeon_freetalk": {
        name: "나",
        text: "(서연이와 심야 전화를 한다. 어두운 방에서 듣는 서연이의 목소리가 평소보다 부드럽다.)",
        freeTalk: { turns: 3, context: "심야 전화. 서연이가 잘 시간에 '목소리가 듣고 싶었어'라며 전화함. 달콤한 심야 통화. 서연이가 잘다가 갑자기 전화한 것." },
        night: true,
        next: "day3_night_phone_end"
    },
    "day3_night_phone_yuna": {
        name: "유나",
        text: "(전화를 받으니 유나의 목소리가 들린다) \"…잘 시간인 거 알아. 근데… 잠이 안 와.\"",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_phone_yuna_freetalk"
    },
    "day3_night_phone_yuna_freetalk": {
        name: "나",
        text: "(유나와 심야 전화를 한다. 유나의 작은 숨소리가 귀에 닿는다.)",
        freeTalk: { turns: 2, context: "심야 전화. 유나가 '잠이 안 와'라며 전화함. 조용하고 친밀한 심야 통화. 유나의 작은 숨소리가 가까이 들릴 듯한 분위기." },
        night: true,
        next: "day3_night_phone_end"
    },
    "day3_night_phone_dain": {
        name: "다인",
        text: "(전화를 받으니 다인이의 목소리가 들린다) \"…야, 잘 시간인 거 알아. 근데 내일 생각하니까 잠이 안 와!\"",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_phone_dain_freetalk"
    },
    "day3_night_phone_dain_freetalk": {
        name: "나",
        text: "(다인이와 심야 전화를 한다. 평소의 에너지 대신 조용한 다인이의 목소리가 새롭다.)",
        freeTalk: { turns: 3, context: "심야 전화. 다인이가 '내일 생각하니까 잠이 안 와'라며 전화함. 평소와 달리 조용한 다인이. 심야의 부드러운 분위기." },
        night: true,
        next: "day3_night_phone_end"
    },
    "day3_night_phone_nurse": {
        name: "보건선생님",
        text: "(전화를 받으니 선생님 목소리가 들린다) \"…{name}? 아직 안 자? 선생님도 잠이 안 와서.\"",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_phone_nurse_freetalk"
    },
    "day3_night_phone_nurse_freetalk": {
        name: "나",
        text: "(보건선생님과 심야 전화를 한다. 선생님의 나직한 목소리가 귀에 닿는다.)",
        freeTalk: { turns: 2, context: "심야 전화. 보건선생님이 '잠이 안 와서' 전화함. 선생님의 나직한 목소리. 금지된 사랑의 심야 통화." },
        night: true,
        next: "day3_night_phone_end"
    },
    "day3_night_phone_teacher": {
        name: "담임선생님",
        text: "(전화를 받으니 선생님 목소리가 들린다) \"…{name}? 아직 안 자? 선생님이 잘 시간인 거 알면서도…\"",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_phone_teacher_freetalk"
    },
    "day3_night_phone_teacher_freetalk": {
        name: "나",
        text: "(담임선생님과 심야 전화를 한다. 선생님의 조용한 목소리가 가까이 들린다.)",
        freeTalk: { turns: 2, context: "심야 전화. 담임선생님이 '잘 시간인 거 알면서도' 전화함. 선생님의 조용한 목소리. 금지된 사랑의 심야 통화." },
        night: true,
        next: "day3_night_phone_end"
    },
    "day3_night_phone_end": {
        name: "나",
        text: "(전화를 끊고 스마트폰을 내려놓았다. 귀에 남은 목소리의 여운이… 심장을 뛴다.)",
        night: true,
        fade: true,
        next: "day3_night_sleep_2"
    },
    "day3_night_sleep_2": {
        name: "나",
        text: "(눈이 감긴다. 내일은 토요일… 어떤 하루가 될까.)",
        night: true,
        fade: true,
        next: "day3_night_sleep_final"
    },
    "day3_night_sleep_final": {
        name: "나",
        text: "(여러 약속들이 머릿속을 맴돈다. 모두를 만족시킬 수 있을까...?)",
        night: true,
        branches: [
            { next: "day3_night_nightmare", condition: "day3_has_multiple_dates" },
            { next: "day3_night_peaceful" }
        ]
    },
    "day3_night_nightmare": {
        name: "나",
        text: "(…꿈을 꾼다. 어두운 공간에서 목소리가 들린다.)",
        night: true,
        next: "day3_night_nightmare_voice1"
    },
    "day3_night_nightmare_voice1": {
        name: "???",
        text: "(서연이의 목소리가 울려퍼진다) \"…나만 볼 거지? 약속했잖아. 새끼손가락 걸었잖아…\"",
        character: "assets/images/characters/seyoun_sad.png",
        silhouette: true,
        night: true,
        next: "day3_night_nightmare_voice2"
    },
    "day3_night_nightmare_voice2": {
        name: "???",
        text: "(유나의 목소리가 차갑게 속삭인다) \"…배신하면 후회할 거라고 했지? 기억하지?\"",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day3_night_nightmare_voice3"
    },
    "day3_night_nightmare_voice3": {
        name: "???",
        text: "(다인이의 목소리가 떨린다) \"…바보! 온다고! 바람 맞추는 거 아니라며서…\"",
        character: "assets/images/characters/dain_sad.png",
        silhouette: true,
        night: true,
        next: "day3_night_nightmare_choice"
    },
    "day3_night_nightmare_choice": {
        name: "나",
        text: "(세 목소리가 동시에 울린다. 어두운 공간에서 손이 뻗어져 나온다. 누구의 손을 잡을 것인가…)",
        night: true,
        choices: [
            { text: "(서연이의 손을 잡는다)", next: "day3_night_nightmare_end" },
            { text: "(유나의 손을 잡는다)", next: "day3_night_nightmare_end" },
            { text: "(다인이의 손을 잡는다)", next: "day3_night_nightmare_end" },
            { text: "(아무도 잡지 않는다)", next: "day3_night_nightmare_end" }
        ]
    },
    "day3_night_nightmare_end": {
        name: "나",
        text: "(손을 뻗었지만… 잡힌 것은 없었다. 모두가 사라지고, 남은 것은 어둠과 후회뿐이었다.)",
        night: true,
        next: "day3_night_nightmare_wake"
    },
    "day3_night_nightmare_wake": {
        name: "나",
        text: "(…땅으로. 심장이 미친 듯이 뛴다. 꿈이었다. 하지만… 내일은 어떻게 될까?)",
        night: true,
        fade: true,
        next: "day3_final_scene"
    },
    "day3_night_peaceful": {
        name: "나",
        text: "(편안한 밤이다. 내일이 기대된다.)",
        night: true,
        branches: [
            { next: "day3_night_loyalty_seoyeon", condition: "day3_seoyeon_date_confirmed", excludeCondition: "day3_has_multiple_dates" },
            { next: "day3_night_loyalty_yuna", condition: "day3_yuna_date_confirmed", excludeCondition: "day3_has_multiple_dates" },
            { next: "day3_night_loyalty_dain", condition: "day3_dain_date_confirmed", excludeCondition: "day3_has_multiple_dates" },
            { next: "day3_night_loyalty_nurse", condition: "day3_nurse_date_confirmed", excludeCondition: "day3_has_multiple_dates" },
            { next: "day3_night_loyalty_teacher", condition: "day3_teacher_date_confirmed", excludeCondition: "day3_has_multiple_dates" },
            { next: "day3_final_scene" }
        ]
    },
    "day3_night_loyalty_seoyeon": {
        name: "나",
        text: "(…서연이만 생각하면 자연스레 웃음이 나온다. 내일은 서연이와 둘이만의 시간이다. 후회 없이 진심을 전해야지.)",
        night: true,
        stats: { Seoyeon: { affinity: 10 } },
        setFlag: "day3_loyalty_bonus",
        fade: true,
        next: "day3_final_scene"
    },
    "day3_night_loyalty_yuna": {
        name: "나",
        text: "(…유나만 생각하면 심장이 뛴다. 내일 밤, 유나와 둘이만의 시간. 유나의 진짜 모습을 볼 수 있을까.)",
        night: true,
        stats: { Yuna: { affinity: 10 } },
        setFlag: "day3_loyalty_bonus",
        fade: true,
        next: "day3_final_scene"
    },
    "day3_night_loyalty_dain": {
        name: "나",
        text: "(…다인이의 웃음을 떠올리면 나도 웃게 된다. 내일 연습을 보러 가면 다인이가 얼마나 기뻐할까.)",
        night: true,
        stats: { Dain: { affinity: 10 } },
        setFlag: "day3_loyalty_bonus",
        fade: true,
        next: "day3_final_scene"
    },
    "day3_night_loyalty_nurse": {
        name: "나",
        text: "(…보건선생님의 얼굴이 떠오른다. 금지된 사랑이지만… 이 감정을 숨길 수 없다.)",
        night: true,
        stats: { Nurse: { affinity: 10 } },
        setFlag: "day3_loyalty_bonus",
        fade: true,
        next: "day3_final_scene"
    },
    "day3_night_loyalty_teacher": {
        name: "나",
        text: "(…담임선생님의 웃는 얼굴이 떠오른다. 선생님과 학생이지만… 내 맘은 진짜니까.)",
        night: true,
        stats: { Teacher: { affinity: 10 } },
        setFlag: "day3_loyalty_bonus",
        fade: true,
        next: "day3_final_scene"
    },

    // =========================================================================
    // Day 3 종료
    // =========================================================================
    "day3_final_scene": {
        name: "나",
        text: "(금요일 밤이 깊어간다... 내일은 드디어 토요일이다.)",
        background: null,
        character: null,
        night: true,
        fade: true,
        changeDay: 4,
        next: "day4_start"
    },
    
    // Day 4 진입점 → ko_day4_1_morning.js의 day4_start로 연결됨
});
