/**
 * ============================================================================
 * CUPID - Day 3 Lunch Scenario (Korean Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: ko_day3_2_lunch.js
 * 언어: 한국어 (Korean)
 * 일차: Day 3 (3일차)
 * 시간대: Lunch (점심)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 금요일 점심시간. 주말 데이트 약속을 여러 명과 한 경우,
 * 히로인들 사이에 미묘한 긴장감이 감돌기 시작합니다.
 * 누구와 점심을 먹을지 선택해야 하며, 선택받지 못한 히로인들의
 * 질투와 의심이 시작되는 시점입니다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 점심시간 시작 - 여러 히로인이 동시에 주인공에게 다가옴
 * 2. 점심 파트너 선택 - 누구와 먹을지 결정 (호감도 변화)
 * 3. 갈등의 시작 - 복수 약속 시 히로인들이 서로를 의식하기 시작
 * 4. 주말 약속 재확인 - 선택한 히로인과의 대화에서 주말 언급
 * 
 *  조건 플래그 설명 (Condition Flags)
 * ----------------------------------------------------------------------------
 * day3_*_date_confirmed : 해당 히로인과 주말 약속이 확정되었는지
 * day3_has_multiple_dates : 두 명 이상과 주말 약속을 했는지
 * 
 *  설정 플래그 설명 (Set Flags)
 * ----------------------------------------------------------------------------
 * day3_lunch_with_* : 점심을 함께한 히로인 기록
 * day3_jealousy_* : 질투 이벤트 발생 기록
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 점심 파트너 선택: 선택된 히로인 +5, 선택 안 된 히로인 -2~-5
 * 갈등 상황 대처에 따라 추가 변동
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
 * [Day 3 - Lunch] 씬 데이터 정의
 */
Object.assign(SCENARIO[3], {
    // =========================================================================
    // 점심시간 시작
    // =========================================================================
    "day3_lunch_start": {
        name: "나",
        text: "(점심시간을 알리는 종이 울렸다. 오늘은 금요일... 내일부터 주말이다.)",
        background: "assets/images/background/room_school.png",
        bgm: "daily.mp3",
        character: null,
        next: "day3_lunch_check_dates"
    },
    
    // 복수 약속 체크
    "day3_lunch_check_dates": {
        name: "나",
        text: "(책상에서 일어나려는데, 갑자기 여러 명의 시선이 느껴진다.)",
        branches: [
            { next: "day3_lunch_multiple_approach", condition: "day3_has_multiple_dates" },
            { next: "day3_lunch_single_approach", condition: "day3_seoyeon_date_confirmed" },
            { next: "day3_lunch_single_approach", condition: "day3_yuna_date_confirmed" },
            { next: "day3_lunch_single_approach", condition: "day3_dain_date_confirmed" },
            { next: "day3_lunch_normal" }
        ]
    },

    // =========================================================================
    // 복수 약속 시 - 히로인들 동시 접근 (갈등의 시작)
    // =========================================================================
    "day3_lunch_multiple_approach": {
        name: "나",
        text: "(어... 잠깐, 왜 다들 이쪽으로...?)",
        character: null,
        next: "day3_lunch_collision"
    },
    "day3_lunch_collision": {
        name: "서연",
        text: "\"어, {name}! 점심 같이... 어?\"",
        character: "assets/images/characters/seyoun_normal.png",
        branches: [
            { next: "day3_lunch_collision_seoyeon_yuna", condition: "day3_yuna_date_confirmed" },
            { next: "day3_lunch_collision_seoyeon_dain", condition: "day3_dain_date_confirmed" },
            { next: "day3_lunch_seoyeon_only" }
        ]
    },
    "day3_lunch_collision_seoyeon_yuna": {
        name: "유나",
        text: "\"...{name}. 같이 가.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_lunch_tension_1"
    },
    "day3_lunch_collision_seoyeon_dain": {
        name: "다인",
        text: "\"야, {name}! 밥 먹으러 가자! 어... 서연이도?\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_lunch_tension_1"
    },
    "day3_lunch_tension_1": {
        name: "나",
        text: "(순간, 교실 안에 미묘한 긴장감이 감돈다. 서로를 바라보는 눈빛이 예사롭지 않다.)",
        character: null,
        next: "day3_lunch_tension_2"
    },
    "day3_lunch_tension_2": {
        name: "서연",
        text: "\"...저기, 나 먼저 {name}한테 말 걸었는데?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day3_lunch_tension_3"
    },
    "day3_lunch_tension_3": {
        name: "나",
        text: "(분위기가 심상치 않다... 어떡하지?)",
        choices: [
            { text: "서연이와 점심을 먹는다", next: "day3_lunch_choose_seoyeon" },
            { text: "유나와 점심을 먹는다", next: "day3_lunch_choose_yuna", condition: "day3_yuna_date_confirmed" },
            { text: "다인이와 점심을 먹는다", next: "day3_lunch_choose_dain", condition: "day3_dain_date_confirmed" },
            { text: "다 같이 먹자고 제안한다", next: "day3_lunch_together_propose" },
            { text: "혼자 먹겠다고 도망친다", next: "day3_lunch_escape", stats: { Seoyeon: { affinity: -3 }, Yuna: { affinity: -3 }, Dain: { affinity: -3 } } }
        ]
    },

    // =========================================================================
    // 서연 선택
    // =========================================================================
    "day3_lunch_choose_seoyeon": {
        name: "나",
        text: "\"서연아, 같이 가자. 어제 약속한 거 있잖아.\"",
        stats: { Seoyeon: { affinity: 5 } },
        setFlag: "day3_lunch_with_seoyeon",
        next: "day3_lunch_seoyeon_others_react"
    },
    "day3_lunch_seoyeon_others_react": {
        name: "나",
        text: "(다른 애들의 표정이 굳는 게 느껴진다.)",
        branches: [
            { next: "day3_lunch_yuna_jealous", condition: "day3_yuna_date_confirmed" },
            { next: "day3_lunch_dain_jealous", condition: "day3_dain_date_confirmed" },
            { next: "day3_lunch_with_seoyeon_start" }
        ]
    },
    "day3_lunch_yuna_jealous": {
        name: "유나",
        text: "\"...그래. 재밌게 먹어.\"",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: -5 } },
        setFlag: "day3_jealousy_yuna",
        next: "day3_lunch_yuna_jealous_2"
    },
    "day3_lunch_yuna_jealous_2": {
        name: "나",
        text: "(유나가 아무 말 없이 교실을 나간다. 그녀의 뒷모습이 왠지 쓸쓸해 보인다.)",
        character: null,
        next: "day3_lunch_with_seoyeon_start"
    },
    "day3_lunch_dain_jealous": {
        name: "다인",
        text: "\"뭐야, 난 안 끼워줘? 흥, 알았어!\"",
        character: "assets/images/characters/dain_sad.png",
        stats: { Dain: { affinity: -5 } },
        setFlag: "day3_jealousy_dain",
        next: "day3_lunch_dain_jealous_2"
    },
    "day3_lunch_dain_jealous_2": {
        name: "나",
        text: "(다인이가 투덜거리며 다른 친구들에게로 가버린다. 신경 쓰인다...)",
        character: null,
        next: "day3_lunch_with_seoyeon_start"
    },
    "day3_lunch_with_seoyeon_start": {
        name: "서연",
        text: "\"후... 드디어 둘이네. 솔직히 말할게, {name}. 요즘 너한테 관심 있는 애들 너무 많은 거 아니야?\"",
        character: "assets/images/characters/seyoun_normal.png",
        background: "assets/images/background/store.png",
        next: "day3_lunch_seoyeon_jealous_talk"
    },
    "day3_lunch_seoyeon_jealous_talk": {
        name: "나",
        text: "(서연이의 목소리에 평소와 다른 날이 서 있다.)",
        choices: [
            { text: "\"서연이가 제일 소중해\"", next: "day3_lunch_seoyeon_reassure" },
            { text: "\"그냥 친구들이야\"", next: "day3_lunch_seoyeon_deny" },
            { text: "\"왜, 질투해?\"", next: "day3_lunch_seoyeon_tease" }
        ]
    },
    "day3_lunch_seoyeon_reassure": {
        name: "서연",
        text: "\"...정말? 그 말... 기억할게.\"",
        character: "assets/images/characters/seyoun_happy.png",
        stats: { Seoyeon: { affinity: 8 } },
        next: "day3_lunch_seoyeon_weekend"
    },
    "day3_lunch_seoyeon_deny": {
        name: "서연",
        text: "\"...그래, 그렇겠지. 미안, 이상한 말 했어.\"",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: 2 } },
        next: "day3_lunch_seoyeon_weekend"
    },
    "day3_lunch_seoyeon_tease": {
        name: "서연",
        text: "\"뭐, 뭐야! 누가 질투래! ...조금.\"",
        character: "assets/images/characters/seyoun_blush.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day3_lunch_seoyeon_weekend"
    },
    "day3_lunch_seoyeon_weekend": {
        name: "서연",
        text: "\"그나저나 주말에 뭐 해? 나... 시간 있으면 같이 어디 가고 싶은데.\"",
        character: "assets/images/characters/seyoun_normal.png",
        branches: [
            { next: "day3_lunch_seoyeon_caught", condition: "day3_has_multiple_dates" },
            { next: "day3_lunch_seoyeon_promise" }
        ]
    },
    "day3_lunch_seoyeon_caught": {
        name: "나",
        text: "(잠깐, 나 이미 다른 약속이... 어떡하지?)",
        choices: [
            { text: "\"일요일은 어때?\" (거짓말)", next: "day3_lunch_seoyeon_lie", setFlag: "day3_seoyeon_sunday_promise" },
            { text: "솔직하게 말한다", next: "day3_lunch_seoyeon_honest" },
            { text: "얼버무린다", next: "day3_lunch_seoyeon_dodge" }
        ]
    },
    "day3_lunch_seoyeon_lie": {
        name: "서연",
        text: "\"진짜?! 그럼 일요일에 만나자! 어디 갈지 내가 정해도 돼?\"",
        character: "assets/images/characters/seyoun_happy.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day3_lunch_seoyeon_end"
    },
    "day3_lunch_seoyeon_honest": {
        name: "서연",
        text: "\"...뭐? 다른 약속이 있어? 누구랑?\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -5 } },
        next: "day3_lunch_seoyeon_honest_2"
    },
    "day3_lunch_seoyeon_honest_2": {
        name: "나",
        text: "(서연이의 눈빛이 차갑게 변한다. 분위기가 급격히 얼어붙었다.)",
        next: "day3_lunch_seoyeon_end"
    },
    "day3_lunch_seoyeon_dodge": {
        name: "서연",
        text: "\"왜 그래, 대답을 못 해? ...혹시 다른 약속 있어?\"",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: -2 } },
        next: "day3_lunch_seoyeon_end"
    },
    "day3_lunch_seoyeon_promise": {
        name: "나",
        text: "\"좋아, 주말에 같이 놀자.\"",
        stats: { Seoyeon: { affinity: 5 } },
        setFlag: "day3_seoyeon_weekend_promise",
        next: "day3_lunch_seoyeon_end"
    },
    "day3_lunch_seoyeon_end": {
        name: "나",
        text: "(점심시간이 끝나간다. 서연이와의 시간은 달콤하면서도 어딘가 불안하다.)",
        fade: true,
        next: "day3_afternoon_start"
    },

    // =========================================================================
    // 유나 선택
    // =========================================================================
    "day3_lunch_choose_yuna": {
        name: "나",
        text: "\"유나야, 같이 가자.\"",
        stats: { Yuna: { affinity: 5 } },
        setFlag: "day3_lunch_with_yuna",
        next: "day3_lunch_yuna_others_react"
    },
    "day3_lunch_yuna_others_react": {
        name: "서연",
        text: "\"...그래? 알았어.\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -5 } },
        setFlag: "day3_jealousy_seoyeon",
        next: "day3_lunch_with_yuna_start"
    },
    "day3_lunch_with_yuna_start": {
        name: "유나",
        text: "\"...따라와.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_lunch_yuna_rooftop"
    },
    "day3_lunch_yuna_rooftop": {
        name: "나",
        text: "(유나를 따라 옥상으로 올라왔다. 여기서 먹는 건가?)",
        background: "assets/images/background/top_school.png",
        next: "day3_lunch_yuna_talk_1"
    },
    "day3_lunch_yuna_talk_1": {
        name: "유나",
        text: "\"...{name}. 넌 나한테만 잘해주는 줄 알았어.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_lunch_yuna_talk_2"
    },
    "day3_lunch_yuna_talk_2": {
        name: "나",
        text: "(유나의 말에 가시가 돋쳐 있다.)",
        choices: [
            { text: "\"유나가 특별해\"", next: "day3_lunch_yuna_special" },
            { text: "\"모두에게 잘해주려고 해\"", next: "day3_lunch_yuna_everyone" },
            { text: "\"왜 그런 말을 해?\"", next: "day3_lunch_yuna_question" }
        ]
    },
    "day3_lunch_yuna_special": {
        name: "유나",
        text: "\"...정말? 그 말... 증명해줘. 내일 밤.\"",
        character: "assets/images/characters/yuna_happy.png",
        stats: { Yuna: { affinity: 10 } },
        next: "day3_lunch_yuna_warning"
    },
    "day3_lunch_yuna_everyone": {
        name: "유나",
        text: "\"...그래. 역시 그렇구나. 난 그냥 '모두' 중 하나야.\"",
        character: "assets/images/characters/yuna_sad.png",
        stats: { Yuna: { affinity: -3 } },
        next: "day3_lunch_yuna_warning"
    },
    "day3_lunch_yuna_question": {
        name: "유나",
        text: "\"...몰라도 돼. 아직은.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_lunch_yuna_warning"
    },
    "day3_lunch_yuna_warning": {
        name: "유나",
        text: "\"하나만 기억해. 나를 배신하면... 후회할 거야.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_lunch_yuna_warning_2"
    },
    "day3_lunch_yuna_warning_2": {
        name: "나",
        text: "(유나의 눈동자가 순간 섬뜩하게 빛났다... 농담인 거겠지?)",
        fade: true,
        next: "day3_afternoon_start"
    },

    // =========================================================================
    // 다인 선택
    // =========================================================================
    "day3_lunch_choose_dain": {
        name: "나",
        text: "\"다인아, 같이 밥 먹으러 가자.\"",
        stats: { Dain: { affinity: 5 } },
        setFlag: "day3_lunch_with_dain",
        next: "day3_lunch_dain_others_react"
    },
    "day3_lunch_dain_others_react": {
        name: "서연",
        text: "\"...알았어. 나중에 봐.\"",
        character: "assets/images/characters/seyoun_sad.png",
        stats: { Seoyeon: { affinity: -4 } },
        setFlag: "day3_jealousy_seoyeon",
        next: "day3_lunch_with_dain_start"
    },
    "day3_lunch_with_dain_start": {
        name: "다인",
        text: "\"야호! 역시 {name}이 최고야! 빨리 가자, 오늘 급식 치킨이래!\"",
        character: "assets/images/characters/dain_laugh.png",
        background: "assets/images/background/store.png",
        next: "day3_lunch_dain_talk_1"
    },
    "day3_lunch_dain_talk_1": {
        name: "다인",
        text: "\"근데 있잖아... 아까 서연이 표정 봤어? 완전 질투하는 거 같던데?\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_lunch_dain_talk_2"
    },
    "day3_lunch_dain_talk_2": {
        name: "나",
        text: "(다인이가 주변을 힐끗거리며 목소리를 낮춘다.)",
        next: "day3_lunch_dain_talk_3"
    },
    "day3_lunch_dain_talk_3": {
        name: "다인",
        text: "\"야, 솔직히 말해봐. 너 서연이랑 사귀어? 아님 유나? 걔네 둘 다 너한테 관심 있는 거 다 알아.\"",
        character: "assets/images/characters/dain_normal.png",
        choices: [
            { text: "\"아니, 다인이가 좋아\"", next: "day3_lunch_dain_confess" },
            { text: "\"그냥 친구야\"", next: "day3_lunch_dain_friends" },
            { text: "\"왜, 다인이도 질투해?\"", next: "day3_lunch_dain_jealous_tease" }
        ]
    },
    "day3_lunch_dain_confess": {
        name: "다인",
        text: "\"뭐, 뭐라고?! 갑자기 그런 말 하면... 아, 진짜!\"",
        character: "assets/images/characters/dain_blush.png",
        stats: { Dain: { affinity: 10 } },
        next: "day3_lunch_dain_end"
    },
    "day3_lunch_dain_friends": {
        name: "다인",
        text: "\"흠~ 정말? 근데 걔네 표정은 그게 아닌데... 뭐, 상관없지만!\"",
        character: "assets/images/characters/dain_normal.png",        stats: { Dain: { affinity: 2 } },        next: "day3_lunch_dain_end"
    },
    "day3_lunch_dain_jealous_tease": {
        name: "다인",
        text: "\"하?! 누가 질투래! 난 그냥 궁금한 거야! ...조금 신경 쓰이긴 하지만!\"",
        character: "assets/images/characters/dain_blush.png",
        stats: { Dain: { affinity: 5 } },
        next: "day3_lunch_dain_end"
    },
    "day3_lunch_dain_end": {
        name: "다인",
        text: "\"어쨌든! 내일 연습 보러 올 거지? 약속했잖아!\"",
        character: "assets/images/characters/dain_laugh.png",
        branches: [
            { next: "day3_lunch_dain_conflict", condition: "day3_has_multiple_dates" },
            { next: "day3_lunch_dain_promise" }
        ]
    },
    "day3_lunch_dain_conflict": {
        name: "나",
        text: "(내일... 다른 약속도 있는데...)",
        choices: [
            { text: "\"당연하지!\"", next: "day3_lunch_dain_promise" },
            { text: "\"시간이 되면...\"", next: "day3_lunch_dain_maybe" }
        ]
    },
    "day3_lunch_dain_promise": {
        name: "다인",
        text: "\"좋아! 기대할게! 내 멋진 스파이크 보여줄 테니까!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 5 } },
        fade: true,
        next: "day3_afternoon_start"
    },
    "day3_lunch_dain_maybe": {
        name: "다인",
        text: "\"...뭐야, 시간이 되면? 다른 약속 있어?\"",
        character: "assets/images/characters/dain_sad.png",
        stats: { Dain: { affinity: -3 } },
        next: "day3_lunch_dain_suspicious"
    },
    "day3_lunch_dain_suspicious": {
        name: "다인",
        text: "\"흥, 알았어. 근데 바람 맞추면 나 진짜 화낼 거야!\"",
        character: "assets/images/characters/dain_normal.png",
        fade: true,
        next: "day3_afternoon_start"
    },

    // =========================================================================
    // 다 같이 먹자고 제안
    // =========================================================================
    "day3_lunch_together_propose": {
        name: "나",
        text: "\"다, 다 같이 먹으면 안 돼?\"",
        next: "day3_lunch_together_react"
    },
    "day3_lunch_together_react": {
        name: "나",
        text: "(순간 정적이 흐른다. 세 명의 시선이 서로를 훑는다.)",
        next: "day3_lunch_together_awkward"
    },
    "day3_lunch_together_awkward": {
        name: "서연",
        text: "\"...그래, 뭐. 다 같이 먹지.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day3_lunch_together_2"
    },
    "day3_lunch_together_2": {
        name: "나",
        text: "(급식실에서의 점심. 분위기가 묘하게 살벌하다.)",
        background: "assets/images/background/store.png",
        next: "day3_lunch_together_3"
    },
    "day3_lunch_together_3": {
        name: "다인",
        text: "\"야, {name}. 내일 배구 연습 보러 올 거지?\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_lunch_together_4"
    },
    "day3_lunch_together_4": {
        name: "서연",
        text: "\"어? {name} 내일 나랑 약속 있는데?\"",
        character: "assets/images/characters/seyoun_normal.png",
        branches: [
            { next: "day3_lunch_together_yuna", condition: "day3_yuna_date_confirmed" },
            { next: "day3_lunch_together_explosion" }
        ]
    },
    "day3_lunch_together_yuna": {
        name: "유나",
        text: "\"...{name}은 나랑 약속했어. 내일 밤.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day3_lunch_together_explosion"
    },
    "day3_lunch_together_explosion": {
        name: "나",
        text: "(공기가 급속도로 얼어붙는다. 모두의 시선이 나에게 쏠린다.)",
        stats: { Seoyeon: { affinity: -5 }, Yuna: { affinity: -5 }, Dain: { affinity: -5 } },
        setFlag: "day3_caught_multiple_dates",
        next: "day3_lunch_together_confront"
    },
    "day3_lunch_together_confront": {
        name: "서연",
        text: "\"잠깐... {name}, 너 우리한테 다 약속한 거야?\"",
        character: "assets/images/characters/seyoun_sad.png",
        choices: [
            { text: "솔직하게 사과한다", next: "day3_lunch_apologize", stats: { Seoyeon: { affinity: -8 }, Yuna: { affinity: -8 }, Dain: { affinity: -8 } } },
            { text: "시간대가 다르다고 변명한다", next: "day3_lunch_excuse", stats: { Seoyeon: { affinity: -15 }, Yuna: { affinity: -15 }, Dain: { affinity: -15 } } },
            { text: "도망친다", next: "day3_lunch_run", stats: { Seoyeon: { affinity: -20 }, Yuna: { affinity: -20 }, Dain: { affinity: -20 } } }
        ]
    },
    "day3_lunch_apologize": {
        name: "나",
        text: "\"미안해... 다들 거절하기가 어려워서...\"",
        next: "day3_lunch_apologize_react"
    },
    "day3_lunch_apologize_react": {
        name: "다인",
        text: "\"...솔직한 건 좋은데, 좀 짜증나네.\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day3_lunch_together_end"
    },
    "day3_lunch_excuse": {
        name: "나",
        text: "\"아, 시간대가 다 달라서... 다인이는 오전, 다른 약속은 저녁...\"",
        next: "day3_lunch_excuse_react"
    },
    "day3_lunch_excuse_react": {
        name: "유나",
        text: "\"...그래서 우리 모두랑 만나겠다고?\"",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: -5 } },
        next: "day3_lunch_together_end"
    },
    "day3_lunch_run": {
        name: "나",
        text: "(밥을 급하게 먹고 도망치듯 자리를 피했다. 최악의 선택이었다.)",
        setFlag: "day3_lunch_escaped",
        fade: true,
        next: "day3_afternoon_start"
    },
    "day3_lunch_together_end": {
        name: "나",
        text: "(어색한 분위기 속에서 점심시간이 끝났다. 주말이 걱정된다...)",
        fade: true,
        next: "day3_afternoon_start"
    },

    // =========================================================================
    // 도망 선택
    // =========================================================================
    "day3_lunch_escape": {
        name: "나",
        text: "\"아, 나 갑자기 할 일이 생각났어! 먼저 갈게!\"",
        setFlag: "day3_lunch_escaped",
        next: "day3_lunch_escape_2"
    },
    "day3_lunch_escape_2": {
        name: "나",
        text: "(도망치듯 교실을 빠져나왔다. 뒤에서 한숨 소리가 들리는 것 같다...)",
        fade: true,
        next: "day3_afternoon_start"
    },

    // =========================================================================
    // 단일 약속 시 (갈등 없음)
    // =========================================================================
    "day3_lunch_single_approach": {
        name: "나",
        text: "(점심시간이다. 누구와 먹을까?)",
        choices: [
            { text: "서연이와 먹는다", next: "day3_lunch_seoyeon_only", condition: "has_number_seyoun" },
            { text: "유나와 먹는다", next: "day3_lunch_yuna_only", condition: "has_number_yuna" },
            { text: "다인이와 먹는다", next: "day3_lunch_dain_only", condition: "has_number_dain" },
            { text: "혼자 먹는다", next: "day3_lunch_alone" }
        ]
    },
    "day3_lunch_seoyeon_only": {
        name: "서연",
        text: "\"{name}! 같이 밥 먹자!\"",
        character: "assets/images/characters/seyoun_happy.png",
        background: "assets/images/background/store.png",
        stats: { Seoyeon: { affinity: 3 } },
        setFlag: "day3_lunch_with_seoyeon",
        next: "day3_lunch_seoyeon_weekend"
    },
    "day3_lunch_yuna_only": {
        name: "유나",
        text: "\"...{name}. 옥상.\"",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: 3 } },
        setFlag: "day3_lunch_with_yuna",
        next: "day3_lunch_yuna_rooftop"
    },
    "day3_lunch_dain_only": {
        name: "다인",
        text: "\"밥 먹으러 가자! 오늘 치킨이래!\"",
        character: "assets/images/characters/dain_laugh.png",
        background: "assets/images/background/store.png",
        stats: { Dain: { affinity: 3 } },
        setFlag: "day3_lunch_with_dain",
        next: "day3_lunch_dain_talk_1"
    },

    // =========================================================================
    // 일반 점심 (약속 없음)
    // =========================================================================
    "day3_lunch_normal": {
        name: "나",
        text: "(특별한 약속도 없고... 오늘은 평범하게 점심을 먹어야겠다.)",
        background: "assets/images/background/store.png",
        next: "day3_lunch_normal_2"
    },
    "day3_lunch_normal_2": {
        name: "나",
        text: "(주변에서 웃음소리가 들린다. 다들 친구들과 즐거워 보인다.)",
        next: "day3_lunch_alone"
    },
    "day3_lunch_alone": {
        name: "나",
        text: "(혼자 조용히 점심을 먹었다. 주말에는 뭘 할까...)",
        fade: true,
        next: "day3_afternoon_start"
    }
});
