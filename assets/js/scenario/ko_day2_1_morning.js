/**
 * ============================================================================
 * CUPID - Day 2 Morning Scenario (Korean Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: ko_day2_1_morning.js
 * 언어: 한국어 (Korean)
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
        name: "나",
        text: "(눈을 뜨자마자 어제 만난 얼굴들이 스쳐 지나간다. 전학 이틀째의 아침, 설렘 때문인지 알람이 울리기도 전에 잠에서 깨버렸다.)",
        background: "assets/images/background/room_my.png",
        bgm: "intro.mp3",
        character: null,
        next: "day2_start_2"
    },
    "day2_start_2": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(어제의 일들이 마치 꿈처럼 달콤하게 느껴지지만... 책상 위에 놓인 교복이 이곳이 현실임을 말해준다. 오늘도 좋은 일이 생길 것 같아.)",
        next: "day2_morning_phone"
    },

    // --- 아침 스마트폰 확인 ---
    "day2_morning_phone": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(침대 옆 스마트폰을 집어 든다. 혹시 어젯밤 사이에 누가 메시지를 보내지 않았을까... 화면을 확인해본다.)",
        next: "day2_morning_phone_2"
    },
    "day2_morning_phone_2": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(특별한 메시지는 없다. 괜히 기대한 건가... 하지만 오늘 학교에서 직접 만나면 되니까. 기대감을 안고 침대에서 일어난다.)",
        next: "day2_morning_routine"
    },

    // --- 아침 준비 ---
    "day2_morning_routine": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(세수를 하고 거울 앞에 선다. 어제보다 조금은 나아진 얼굴인 것 같다. 교복으로 갈아입고 머리를 정돈한다.)",
        next: "day2_morning_routine_2"
    },
    "day2_morning_routine_2": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(거울 속 교복 차림의 내 모습이 이제는 조금 익숙하다. 넥타이 매듭을 한 번 고쳐 매고, 흐트러진 옷깃을 바로잡는다.)",
        next: "day2_breakfast"
    },

    // --- 아침식사 ---
    "day2_breakfast": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(부엌에 내려오니 식탁 위에 밥과 계란후라이가 놓여 있다. 엄마는 벌써 출근한 모양이다. 혼자 먹는 아침이지만, 왠지 오늘은 외롭지 않다.)",
        next: "day2_breakfast_2"
    },
    "day2_breakfast_2": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(후다닥 아침을 해치우고 가방을 챙긴다. 시계를 보니 여유 있는 시간이다. 느긋하게 등교할 수 있겠어.)",
        next: "day2_start_3"
    },

    "day2_start_3": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(자, 가보자. 오늘은 또 어떤 떨림이 나를 기다리고 있을까?)",
        next: "day2_road_to_school"
    },

    // --- 등굣길 풍경 ---
    "day2_road_to_school": {
        name: "나",
        text: "(집을 나서자 아침 공기가 상쾌하게 폐를 채운다. 어제보다 부드러운 바람이 불어온다. 봄 냄새가 난다.)",
        background: "assets/images/background/street.png",
        next: "day2_road_to_school_2"
    },
    "day2_road_to_school_2": {
        name: "나",
        background: "assets/images/background/street.png",
        text: "(같은 교복을 입은 학생들이 삼삼오오 짝을 지어 학교 쪽으로 걸어간다. 어제는 낯설기만 하던 풍경인데, 오늘은 어딘가 반갑게 느껴진다.)",
        next: "day2_road_to_school_3"
    },
    "day2_road_to_school_3": {
        name: "나",
        background: "assets/images/background/street.png",
        text: "(길 건너편에서 우리 학교 학생 몇 명이 내 쪽을 보며 수군거린다. '아, 전학생이다!' 하는 소리가 바람에 실려 들려온다. 아직 학교의 핫이슈인 모양이다.)",
        next: "day2_school_gate"
    },

    // =========================================================================
    // 교문 앞 (School Gate)
    // =========================================================================

    "day2_school_gate": {
        name: "나",
        text: "(교문 앞에 도착하자 어제보다 훨씬 다정하게 느껴지는 풍경이 나를 반긴다. 왠지 모르게 발걸음이 가볍다.)",
        background: "assets/images/background/school.png",
        bgm: "daily2.mp3",
        next: "day2_school_gate_2"
    },
    "day2_school_gate_2": {
        name: "나",
        background: "assets/images/background/school.png",
        text: "(학교 정문 앞에서 익숙한 얼굴이 눈에 띈다.)",
        choices: [
            { text: "주위를 둘러본다.", next: "day2_meet_someone" }
        ]
    },

    // =========================================================================
    // 히로인 조우 분기 (Heroine Encounter Branch)
    // =========================================================================

    "day2_meet_someone": {
        name: "나",
        background: "assets/images/background/school.png",
        text: "(주위를 둘러보자 그곳에는...)",
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
        name: "나",
        text: "(교문 옆 커다란 느티나무 아래, 유나가 무심한 표정으로 서 있는 것이 보인다. 그녀는 책을 덮고 나를 가만히 바라본다.)",
        character: "assets/images/characters/yuna_normal.png",
        branches: [
            { next: "day2_yuna_talk_msg", condition: "sent_msg_day1_yuna" },
            { next: "day2_yuna_morning_talk" }
        ]
    },
    "day2_yuna_talk_msg": {
        name: "유나",
        text: "\"...안녕. 어젯밤 메시지... 고마웠어. 덕분에 조금은 따뜻한 밤이었어. 이따가... 쪽지 확인해봐.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_classroom_from_yuna"
    },
    "day2_yuna_morning_talk": {
        name: "유나",
        text: "\"...안녕. 오늘도 그 '빛'은 여전하네. 다행이야. 이따가... 쪽지 확인해봐.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day2_classroom_from_yuna"
    },

    // =========================================================================
    // 보건선생님 루트 (Nurse Route)
    // =========================================================================

    "day2_meet_nurse": {
        name: "시스템",
        text: "",
        affinityChar: "Nurse",
        affinityBranches: [
            { minAffinity: 20, next: "day2_meet_nurse_high" },
            { minAffinity: -5, next: "day2_meet_nurse_standard" },
            { minAffinity: -100, next: "day2_meet_nurse_low" }
        ]
    },
    "day2_meet_nurse_standard": {
        name: "보건선생님",
        text: "\"어머, {name}! 좋은 아침이야. 오늘따라 기운이 넘쳐 보이네?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_nurse_talk"
    },
    "day2_meet_nurse_high": {
        name: "보건선생님",
        text: "(선생님이 나를 보자마자 다가와 옷매무새를 다듬어준다.) \"우리 전학생, 밤새 무슨 꿈을 꿨길래 이렇게 반짝거릴까? 선생님은 네 생각 하느라 조금 늦잠 잤는데 말이야.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day2_nurse_talk"
    },
    "day2_meet_nurse_low": {
        name: "보건선생님",
        text: "(선생님이 나를 힐끗 보더니 무심하게 시선을 돌린다.) \"어머, 전학생... 안색이 안 좋아 보이네. 특별히 볼일 없으면 교실로 가서 쉬는 게 좋겠어.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_classroom"
    },
    "day2_nurse_talk": {
        name: "보건선생님",
        text: "(선생님이 나에게 다가와 살짝 윙크를 한다.)",
        character: "assets/images/characters/nurse_normal.png",
        branches: [
            { next: "day2_nurse_talk_msg", condition: "sent_msg_day1_nurse" },
            { next: "day2_nurse_talk_has_number", condition: "has_number_nurse" },
            { next: "day2_nurse_talk_no_number" }
        ]
    },
    "day2_nurse_talk_msg": {
        name: "보건선생님",
        text: "\"어젯밤에 메시지 보내준 거, 정말 귀엽더라. 덕분에 선생님도 기분 좋게 잠들었어. 오늘도 아프면 언제든 보건실로 오렴.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_classroom_from_nurse"
    },
    "day2_nurse_talk_has_number": {
        name: "보건선생님",
        text: "\"어젯밤에 내 생각 하느라 잠 못 이룬 건 아니지? 후훗, 농담이야. 오늘도 아프면 언제든 보건실로 오렴.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_classroom_from_nurse"
    },
    "day2_nurse_talk_no_number": {
        name: "보건선생님",
        text: "\"전학 이틀째인데 벌써 학교에 익숙해진 모양이네. 오늘도 무리하지 말고, 힘들면 보건실로 놀러 오렴.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_classroom_from_nurse"
    },

    // =========================================================================
    // 서연 루트 (Seoyeon Route)
    // =========================================================================

    "day2_meet_seoyeon": {
        name: "시스템",
        text: "",
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "day2_meet_seoyeon_high" },
            { minAffinity: -5, next: "day2_meet_seoyeon_standard" },
            { minAffinity: -100, next: "day2_meet_seoyeon_low" }
        ]
    },
    "day2_meet_seoyeon_standard": {
        name: "서연",
        text: "\"안녕, {name}! 잘 잤니? 오늘도 일찍 왔구나!\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day2_seoyeon_talk"
    },
    "day2_meet_seoyeon_high": {
        name: "서연",
        text: "(서연이가 교문 앞에서 서성이다가 나를 발견하자마자 환하게 웃으며 달려온다.) \"{name}! 기다리고 있었어! 어젯밤에 잘 잤는지 궁금해서 한숨도 못 잤다니까?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day2_seoyeon_talk"
    },
    "day2_meet_seoyeon_low": {
        name: "서연",
        text: "(서연이가 나를 발견하자마자 표정을 굳히며 고개를 돌린다.) \"...아, 왔어? 지각은 안 해서 다행이네. 난 먼저 갈게.\"",
        character: "assets/images/characters/seyoun_pout.png",
        next: "day2_classroom"
    },
    "day2_seoyeon_talk": {
        name: "서연",
        text: "(서연이는 나와 눈을 맞추며 살짝 미소 짓는다.)",
        character: "assets/images/characters/seyoun_normal.png",
        branches: [
            { next: "day2_seoyeon_talk_msg", condition: "sent_msg_day1_seyoun" },
            { next: "day2_seoyeon_talk_has_number", condition: "has_number_seyoun" },
            { next: "day2_seoyeon_talk_no_number" }
        ]
    },
    "day2_seoyeon_talk_msg": {
        name: "서연",
        text: "\"어제 메시지 정말 고마웠어! 덕분에 푹 잘 수 있었던 것 같아. 우리 오늘도 힘내자!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom_from_seoyeon"
    },
    "day2_seoyeon_talk_has_number": {
        name: "서연",
        text: "\"어제 잘 들어갔어? 연락처 교환하고 나서 메시지 보낼까 말까 수백 번은 고민했는데... 너무 방해될까 봐 꾹 참았어.\"",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            { text: "나도 서연이 메시지 엄청 기다렸는데! 지금이라도 보내줘!", next: "day2_seoyeon_happy", stats: { Seoyeon: { affinity: 5 } } },
            { text: "아, 그랬구나. 사실 나도 피곤해서 눕자마자 잠들었어.", next: "day2_seoyeon_normal", stats: { Seoyeon: { affinity: 1 } } }
        ]
    },
    "day2_seoyeon_talk_no_number": {
        name: "서연",
        text: "\"어제 잘 들어갔어? 전학 첫날이라 걱정 많이 했는데, 오늘 보니까 안심이 되네. 오늘도 힘내자!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom_from_seoyeon"
    },
    "day2_seoyeon_happy": {
        name: "서연",
        text: "\"정말? 그럼 오늘부터는 사소한 거라도 다 공유하기다? 자, 같이 교실로 가자!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom_from_seoyeon"
    },
    "day2_seoyeon_normal": {
        name: "서연",
        text: "\"그렇지? 전학 첫날이라 많이 피곤했을 거야. 자, 오늘도 힘내서 학교생활 해보자!\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day2_classroom_from_seoyeon"
    },

    // =========================================================================
    // 다인 루트 (Dain Route)
    // =========================================================================

    "day2_meet_dain": {
        name: "다인",
        text: "\"어어, {name}! 좋은 아침! 오늘따라 일찍 왔네?\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day2_dain_talk"
    },
    "day2_dain_talk": {
        name: "다인",
        text: "(다인이는 활기차게 내 어깨를 툭 친다.)",
        character: "assets/images/characters/dain_laugh.png",
        branches: [
            { next: "day2_dain_talk_msg", condition: "sent_msg_day1_dain" },
            { next: "day2_dain_talk_dated", condition: "dated_dain_day1" },
            { next: "day2_dain_talk_not_dated" }
        ]
    },
    "day2_dain_talk_msg": {
        name: "다인",
        text: "\"어제 메시지 잘 받았어! 너 은근히 다정하더라? 덕분에 기분 좋게 잤어. 오늘도 활기차게 보내자구!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_classroom_from_dain"
    },
    "day2_dain_talk_dated": {
        name: "다인",
        text: "\"어제 먹은 떡볶이 덕분에 오늘 컨디션 최고야! 너도 그렇지?\"",
        character: "assets/images/characters/dain_laugh.png",
        choices: [
            { text: "응! 나도 다인이 덕분에 잘 잤어.", next: "day2_dain_happy", stats: { Dain: { affinity: 5 } } },
            { text: "난 좀 피곤한데... 다인이는 체력이 정말 좋구나.", next: "day2_dain_normal", stats: { Dain: { affinity: 1 } } }
        ]
    },
    "day2_dain_talk_not_dated": {
        name: "다인",
        text: "\"어제 잘 들어갔어? 전학 첫날인데 학교 구경은 좀 했나 모르겠네! 오늘도 활기차게 보내자구!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_classroom_from_dain"
    },
    "day2_dain_happy": {
        name: "다인",
        text: "\"하하! 역시 내 에너지가 좀 넘치긴 하지? 좋아, 오늘 점심시간에도 체육관으로 와! 기다릴게!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_classroom_from_dain"
    },
    "day2_dain_normal": {
        name: "다인",
        text: "\"에이~ 엄살은! 학교생활 적응하려면 체력이 국력이라구! 자, 어서 교실로 가자!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day2_classroom_from_dain"
    },

    // =========================================================================
    // 담임선생님 루트 (Teacher Route)
    // =========================================================================

    "day2_meet_teacher": {
        name: "담임선생님",
        text: "\"어라, {name} 아니니? 전학 이틀째인데 벌써 학교에 적응한 모양이구나. 일찍 오는 모습이 보기 좋다.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day2_teacher_free_talk"
    },
    "day2_teacher_free_talk": {
        type: "free_talk",
        name: "담임선생님",
        text: "\"수업 시작 전까지 시간이 좀 남았네. 나한테 궁금한 거라도 있니?\"",
        context: "교문 앞에서 담임선생님과 마주쳐 교실로 함께 걸어가는 상황입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 선생님이 비상연락망을 위해 주인공의 연락처를 물어보는 상황으로 이어집니다. 대화의 마지막 턴에만 연락처를 물어볼 타이밍을 잡거나, 공적인 용무가 있다는 뉘앙스를 풍겨주세요.",
        personality: "공과 사가 뚜렷하지만 주인공에게는 은근히 약한 모습을 보이는 담임선생님.",
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
        name: "나",
        text: "(선생님과 즐겁게 대화를 나누며 교실로 향했다. 선생님은 아침부터 기분이 좋아 보인다며, 비상연락망 작성을 위해 내 연락처를 물어보셨다.)",
        character: "assets/images/characters/teacher_smile.png",
        choices: [
            { text: "네, 여기 제 번호예요.", next: "day2_teacher_contact_success_high", setFlags: ["has_number_teacher", "has_any_contact"] },
            { text: "나중에 교무실 가서 알려드릴게요.", next: "day2_classroom_from_teacher" }
        ]
    },
    "day2_teacher_contact_ask_low": {
        name: "나",
        text: "(선생님의 표정이 굳어졌다. 아침부터 내가 너무 무례하게 굴었나 보다. 선생님은 한숨을 내쉬며 비상연락망 작성을 위해 내 연락처를 알려달라고 하셨다.)",
        character: "assets/images/characters/teacher_angry.png",
        choices: [
            { text: "네, 여기 제 번호예요.", next: "day2_teacher_contact_success_low", setFlags: ["has_number_teacher", "has_any_contact"] },
            { text: "나중에 교무실 가서 알려드릴게요.", next: "day2_classroom_from_teacher" }
        ]
    },
    "day2_teacher_contact_ask": {
        name: "나",
        text: "(선생님과 이런저런 이야기를 나누며 교실로 걸어갔다. 선생님은 비상연락망 작성을 위해 내 연락처가 필요하다며 번호를 물어보셨다.)",
        character: "assets/images/characters/teacher_normal.png",
        choices: [
            { text: "네, 여기 제 번호예요.", next: "day2_teacher_contact_success_normal", setFlags: ["has_number_teacher", "has_any_contact"] },
            { text: "나중에 교무실 가서 알려드릴게요.", next: "day2_classroom_from_teacher" }
        ]
    },
    "day2_teacher_contact_success_high": {
        name: "담임선생님",
        text: "\"{name}, 번호 고마워! 후훗, 비상연락망 핑계로 물어보긴 했지만... 실은 나도 너랑 좀 더 친해지고 싶었거든. 학교생활 힘들면 언제든지 이 번호로 연락해?\"",
        character: "assets/images/characters/teacher_smile.png",
        stats: { Teacher: { affinity: 15 } },
        next: "day2_classroom_from_teacher"
    },
    "day2_teacher_contact_success_low": {
        name: "담임선생님",
        text: "\"...그래, 고맙다. 연락처는 공적인 용도로만 사용할 테니 걱정하지 마. 수업 늦지 않게 어서 들어가 봐.\"",
        character: "assets/images/characters/teacher_angry.png",
        stats: { Teacher: { affinity: 2 } },
        next: "day2_classroom_from_teacher"
    },
    "day2_teacher_contact_success_normal": {
        name: "담임선생님",
        text: "\"고마워. 그럼 무슨 일 있으면 연락할게. 자, 이제 교실로 가자.\"",
        character: "assets/images/characters/teacher_normal.png",
        stats: { Teacher: { affinity: 10 } },
        next: "day2_classroom_from_teacher"
    },

    // =========================================================================
    // 담임선생님과 함께 교실 입장 (Classroom Arrival - Teacher Route)
    // =========================================================================

    "day2_classroom_from_teacher": {
        name: "담임선생님",
        text: "\"자, 다 왔다. 오늘도 열심히 해보자.\"",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/teacher_smile.png",
        next: "day2_classroom_from_teacher_2"
    },
    "day2_classroom_from_teacher_2": {
        name: "나",
        text: "(선생님과 나란히 교실에 들어서자 아이들의 시선이 일제히 쏠린다. 선생님과 같이 온 게 꽤 눈에 띄었나 보다.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "day2_classroom_greet_teacher"
    },
    "day2_classroom_greet_teacher": {
        name: "반 친구",
        background: "assets/images/background/room_school.png",
        text: "\"오, 전학생! 좋은 아침! 헐, 담임 선생님이랑 같이 왔어? 벌써 특별 대우 받는 거야?\"",
        character: null,
        next: "day2_classroom_greet_teacher_2"
    },
    "day2_classroom_greet_teacher_2": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(몇몇 아이들이 킥킥대며 장난스러운 눈빛을 보낸다. 다행히 악의는 없어 보인다.)",
        next: "day2_classroom_settle_teacher"
    },
    "day2_classroom_settle_teacher": {
        name: "반 친구",
        background: "assets/images/background/room_school.png",
        text: "(옆자리 친구가 팔꿈치로 슬쩍 찌른다.) \"야, 너 담임 선생님이랑 무슨 사이야? 아침부터 같이 등교라니!\"",
        character: null,
        next: "day2_classroom_settle_teacher_2"
    },
    "day2_classroom_settle_teacher_2": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"아니야, 교문 앞에서 우연히 마주쳐서 같이 걸어왔을 뿐이야.\"",
        next: "day2_classroom_settle_teacher_3"
    },
    "day2_classroom_settle_teacher_3": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(적당히 둘러대고 자리에 앉는다. 선생님과 함께 들어왔다는 게 좀 민망하면서도... 나쁘지 않은 기분이다. 가방을 풀고 교과서를 꺼내려는데... 뭔가 이상하다.)",
        next: "day2_classroom_2"
    },

    // =========================================================================
    // 서연과 함께 교실 입장 (Classroom Arrival - Seoyeon Route)
    // =========================================================================

    "day2_classroom_from_seoyeon": {
        name: "서연",
        text: "\"자, 다 왔다! 오늘도 좋은 하루 보내자, {name}!\"",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_classroom_from_seoyeon_2"
    },
    "day2_classroom_from_seoyeon_2": {
        name: "나",
        text: "(서연이와 나란히 교실에 들어서자, 아이들의 시선이 일제히 우리를 향한다. 서연이가 자연스럽게 내 옆에 서 있으니 마치 오래된 친구처럼 보였을 거다.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "day2_classroom_greet_from_seoyeon"
    },
    "day2_classroom_greet_from_seoyeon": {
        name: "반 친구",
        background: "assets/images/background/room_school.png",
        text: "\"오, 전학생! 좋은 아침! 서연이랑 같이 왔네? 완전 단짝이다!\"",
        character: null,
        next: "day2_classroom_greet_from_seoyeon_2"
    },
    "day2_classroom_greet_from_seoyeon_2": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(아이들이 서연이와 나를 번갈아 보며 의미심장한 미소를 짓는다. 서연이는 아무렇지 않게 자기 자리로 향한다.)",
        next: "day2_classroom_settle_from_seoyeon"
    },
    "day2_classroom_settle_from_seoyeon": {
        name: "반 친구",
        background: "assets/images/background/room_school.png",
        text: "(앞자리 여학생이 돌아보며 속삭인다.) \"야, 서연이랑 벌써 같이 등교해? 너네 사귀는 거야?\"",
        character: null,
        next: "day2_classroom_settle_from_seoyeon_2"
    },
    "day2_classroom_settle_from_seoyeon_2": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"아니야, 교문 앞에서 우연히 만나서 같이 온 거야. 서연이가 많이 챙겨줘서 감사할 뿐이야.\"",
        next: "day2_classroom_settle_from_seoyeon_3"
    },
    "day2_classroom_settle_from_seoyeon_3": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(적당히 둘러대고 자리에 앉는다. 서연이가 자기 자리에서 살짝 손을 흔들어준다. 왠지 기분이 좋아지면서 가방을 풀고 교과서를 꺼내려는데... 뭔가 이상하다.)",
        next: "day2_classroom_2"
    },

    // =========================================================================
    // 다인과 함께 교실 입장 (Classroom Arrival - Dain Route)
    // =========================================================================

    "day2_classroom_from_dain": {
        name: "다인",
        text: "\"자! 교실 도착! 오늘도 파이팅이다, {name}!\"",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_classroom_from_dain_2"
    },
    "day2_classroom_from_dain_2": {
        name: "나",
        text: "(다인이가 활기차게 교실 문을 열고 들어서자, 교실 안의 분위기가 한층 밝아진다. 다인이의 에너지는 정말 전염성이 있다.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "day2_classroom_greet_from_dain"
    },
    "day2_classroom_greet_from_dain": {
        name: "반 친구",
        background: "assets/images/background/room_school.png",
        text: "\"오, 전학생! 좋은 아침! 다인이랑 같이 왔네? 벌써 절친 됐어?\"",
        character: null,
        next: "day2_classroom_greet_from_dain_2"
    },
    "day2_classroom_greet_from_dain_2": {
        name: "다인",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/dain_laugh.png",
        text: "\"당연하지! 우리 {name}이(가) 이제 우리 편이야! 자, {name}! 나중에 점심시간에 봐!\"",
        next: "day2_classroom_settle_from_dain"
    },
    "day2_classroom_settle_from_dain": {
        name: "반 친구",
        background: "assets/images/background/room_school.png",
        text: "(앞자리 여학생이 돌아보며 킥킥거린다.) \"다인이한테 붙잡히면 끝이야~ 체력 딸리면 조심해!\"",
        character: null,
        next: "day2_classroom_settle_from_dain_2"
    },
    "day2_classroom_settle_from_dain_2": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"아, 하하... 다인이 에너지를 따라가려면 체력 관리를 좀 해야 될 것 같아.\"",
        next: "day2_classroom_settle_from_dain_3"
    },
    "day2_classroom_settle_from_dain_3": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(적당히 둘러대고 자리에 앉는다. 다인이가 자기 자리에서 엄지를 치켜세워 보여준다. 에너지를 잔뜩 받은 기분으로 가방을 풀고 교과서를 꺼내려는데... 뭔가 이상하다.)",
        next: "day2_classroom_2"
    },

    // =========================================================================
    // 보건선생님과 헤어진 후 교실 입장 (Classroom Arrival - Nurse Route)
    // =========================================================================

    "day2_classroom_from_nurse": {
        name: "나",
        text: "(보건 선생님과 헤어지고 교실로 향한다. 선생님의 향수 냄새가 아직 코끝에 맴도는 것 같다.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "day2_classroom_from_nurse_2"
    },
    "day2_classroom_from_nurse_2": {
        name: "나",
        text: "(교실 문을 열자, 어제보다 훨씬 부드러운 공기가 나를 감싼다. 아이들의 시선에도 호의가 섞여 있다.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "day2_classroom_greet_from_nurse"
    },
    "day2_classroom_greet_from_nurse": {
        name: "반 친구",
        background: "assets/images/background/room_school.png",
        text: "\"오, 전학생! 좋은 아침! 어라, 방금 보건실 쪽에서 온 거야? 어디 아파?\"",
        character: null,
        next: "day2_classroom_greet_from_nurse_2"
    },
    "day2_classroom_greet_from_nurse_2": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"아니, 아프진 않아. 그냥 보건 선생님을 잠깐 마주쳤을 뿐이야.\"",
        next: "day2_classroom_settle_from_nurse"
    },
    "day2_classroom_settle_from_nurse": {
        name: "반 친구",
        background: "assets/images/background/room_school.png",
        text: "(앞자리 여학생이 돌아보며 말한다.) \"아까 보건 선생님이랑 이야기하는 거 봤는데, 꽤 친해 보이던데? 보건실 단골이야?\"",
        character: null,
        next: "day2_classroom_settle_from_nurse_2"
    },
    "day2_classroom_settle_from_nurse_2": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"아니야, 선생님이 전학생이라고 잘 적응하고 있는지 확인해주신 거야. 괜히 걱정까지 해주시고...\"",
        next: "day2_classroom_settle_from_nurse_3"
    },
    "day2_classroom_settle_from_nurse_3": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(적당히 둘러대고 자리에 앉는다. 보건 선생님의 따뜻한 미소가 아직도 머릿속을 맴돈다. 가방을 풀고 교과서를 꺼내려는데... 뭔가 이상하다.)",
        next: "day2_classroom_2"
    },

    // =========================================================================
    // 유나와 헤어진 후 교실 입장 (Classroom Arrival - Yuna Route)
    // =========================================================================

    "day2_classroom_from_yuna": {
        name: "나",
        text: "(유나와 헤어지고 교문을 지나 교실로 향한다. 그녀가 남긴 말들이 머릿속을 맴돈다. '쪽지 확인해봐'... 대체 무슨 쪽지일까.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "day2_classroom_from_yuna_2"
    },
    "day2_classroom_from_yuna_2": {
        name: "나",
        text: "(교실 문을 열자 익숙한 소란 속으로 들어선다. 하지만 유나의 말이 신경 쓰여 온전히 집중할 수가 없다.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "day2_classroom_greet_from_yuna"
    },
    "day2_classroom_greet_from_yuna": {
        name: "반 친구",
        background: "assets/images/background/room_school.png",
        text: "\"오, 전학생! 좋은 아침! 왠지 생각에 잠긴 표정인데, 무슨 고민 있어?\"",
        character: null,
        next: "day2_classroom_greet_from_yuna_2"
    },
    "day2_classroom_greet_from_yuna_2": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"아... 아니야, 아무것도 아니야.\"",
        next: "day2_classroom_settle_from_yuna"
    },
    "day2_classroom_settle_from_yuna": {
        name: "반 친구",
        background: "assets/images/background/room_school.png",
        text: "(앞자리 여학생이 돌아보며 말한다.) \"아까 교문 앞에서 누구랑 이야기하는 거 봤는데... 다른 반 애야? 좀 신비로워 보이던데.\"",
        character: null,
        next: "day2_classroom_settle_from_yuna_2"
    },
    "day2_classroom_settle_from_yuna_2": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"아... 그냥 같은 학교 학생인데, 나도 아직 잘 모르겠어.\"",
        next: "day2_classroom_settle_from_yuna_3"
    },
    "day2_classroom_settle_from_yuna_3": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(적당히 둘러대고 자리에 앉는다. 유나가 말한 '쪽지'가 뭔지 계속 신경 쓰인다. 가방을 풀고 교과서를 꺼내려는데... 뭔가 이상하다.)",
        next: "day2_classroom_2"
    },

    // =========================================================================
    // 혼자 교실 입장 - 폴백 (Classroom Arrival - Default/Low Affinity)
    // =========================================================================

    "day2_classroom": {
        name: "나",
        text: "(교실 문을 열자, 어제보다 훨씬 부드러운 공기가 나를 감싼다. 아이들의 시선에도 호의가 섞여 있다.)",
        background: "assets/images/background/room_school.png",
        character: null,
        next: "day2_classroom_greet"
    },
    "day2_classroom_greet": {
        name: "반 친구",
        background: "assets/images/background/room_school.png",
        text: "\"오, 전학생! 좋은 아침! 어제 잘 적응했어? 우리 반 분위기 괜찮지?\"",
        character: null,
        next: "day2_classroom_greet_2"
    },
    "day2_classroom_greet_2": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(몇몇 아이들이 가볍게 인사를 건네준다. 어제는 호기심 가득한 눈빛이었는데, 오늘은 편안한 미소가 섞여 있다.)",
        next: "day2_classroom_settle_alone"
    },
    "day2_classroom_settle_alone": {
        name: "반 친구",
        background: "assets/images/background/room_school.png",
        text: "(앞자리 여학생이 돌아보며 말한다.) \"전학 이틀째인데 벌써 적응한 거야? 대단하다!\"",
        character: null,
        next: "day2_classroom_settle_alone_2"
    },
    "day2_classroom_settle_alone_2": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"아, 하하... 다들 잘 해줘서 금방 적응했어.\"",
        next: "day2_classroom_settle_alone_3"
    },
    "day2_classroom_settle_alone_3": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(적당히 둘러대고 자리에 앉는다. 가방을 풀고 교과서를 꺼내려는데... 뭔가 이상하다.)",
        next: "day2_classroom_2"
    },
    "day2_classroom_2": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(자리에 앉아 가방을 정리하려는데, 책상 구석에 놓인 작은 쪽지가 눈에 들어온다.)",
        choices: [
            { text: "쪽지를 확인한다.", next: "day2_check_note" }
        ]
    },

    // =========================================================================
    // 쪽지 발견 & 유나 추측 (Note Discovery & Speculation)
    // =========================================================================

    "day2_check_note": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(조심스레 쪽지를 펼친다. 정갈하면서도 어딘가 차가운 글씨체가 눈에 띈다.)",
        next: "day2_note_content"
    },
    "day2_note_content": {
        name: "시스템",
        background: "assets/images/background/room_school.png",
        text: "\"'점심시간에 도서관 별관으로 와. 할 말이 있어.' - 유나\"",
        next: "day2_note_reaction"
    },
    "day2_note_reaction": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(유나...? 쪽지를 다시 한 번 읽어본다. '도서관 별관'이라... 학교 구석진 곳이잖아. 이런 방식으로 호출한다니, 뭔가 비밀스러운 느낌이 든다.)",
        next: "day2_note_speculation"
    },
    "day2_note_speculation": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(대체 무슨 말을 하려고 이런 쪽지를 남긴 걸까? 연락처라도 있다면 직접 물어볼 텐데... 쪽지라니, 어딘가 그녀답다는 생각이 든다.)",
        next: "day2_note_speculation_2"
    },
    "day2_note_speculation_2": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(혹시 유나에 대해 아는 사람이 있을까? 주변을 슬쩍 둘러본다. 하지만 쪽지 내용을 함부로 말할 순 없을 것 같다.)",
        next: "day2_note_speculation_3"
    },
    "day2_note_speculation_3": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(쪽지를 조심스럽게 접어 주머니에 넣는다. 점심시간이 벌써부터 기다려진다... 아니, 긴장된다는 표현이 더 맞으려나.)",
        next: "day2_note_ask_around"
    },
    "day2_note_ask_around": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(옆자리 친구에게 슬쩍 물어본다.)",
        branches: [
            { next: "day2_note_ask_around_met", condition: "met_yuna" },
            { next: "day2_note_ask_around_new" }
        ]
    },
    "day2_note_ask_around_met": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"혹시 유나라는 애에 대해 뭐 좀 아는 거 있어? 다른 반인 것 같은데...\"",
        next: "day2_note_ask_around_2"
    },
    "day2_note_ask_around_new": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"혹시... 유나라는 애 알아?\"",
        next: "day2_note_ask_around_2"
    },
    "day2_note_ask_around_2": {
        name: "반 친구",
        background: "assets/images/background/room_school.png",
        text: "\"유나? 음... 우리 반은 아닌데? 다른 반인가? 아니면 선배?\"",
        character: null,
        next: "day2_note_ask_around_3"
    },
    "day2_note_ask_around_3": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(역시 아는 사람이 없다. 유나라는 이름만으로는 정보가 부족하다. 점심시간에 직접 가보는 수밖에 없겠어.)",
        next: "day2_homeroom_start"
    },

    // =========================================================================
    // 조회 & 오전 수업 (Homeroom & Morning Classes)
    // =========================================================================

    "day2_homeroom_start": {
        name: "담임선생님",
        background: "assets/images/background/room_school.png",
        text: "\"자, 다들 자리에 앉아라. 조회 시작한다.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day2_homeroom_rollcall"
    },
    "day2_homeroom_rollcall": {
        name: "담임선생님",
        background: "assets/images/background/room_school.png",
        text: "(선생님이 출석부를 펼치며 이름을 하나하나 부르기 시작한다.) \"...{name}? 전학생, 여기 있지?\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day2_homeroom_rollcall_2"
    },
    "day2_homeroom_rollcall_2": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/teacher_normal.png",
        text: "\"네, 있습니다.\"",
        next: "day2_homeroom_rollcall_3"
    },
    "day2_homeroom_rollcall_3": {
        name: "담임선생님",
        background: "assets/images/background/room_school.png",
        text: "\"좋아. 전학 이틀째인데, 어제보다 표정이 밝아졌구나. 잘 적응하고 있나 보다.\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "day2_homeroom_notice"
    },
    "day2_homeroom_notice": {
        name: "담임선생님",
        background: "assets/images/background/room_school.png",
        text: "\"공지사항 하나 전달한다. 이번 주 금요일에 학교 축제 준비 회의가 있을 예정이니까, 관심 있는 학생들은 방과 후에 남아 줘.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day2_homeroom_notice_2"
    },
    "day2_homeroom_notice_2": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/teacher_normal.png",
        text: "(학교 축제라... 전학 온 지 얼마 안 됐는데 축제까지 있다니. 이 학교 생활이 점점 더 기대된다.)",
        next: "day2_homeroom_event"
    },
    "day2_homeroom_event": {
        name: "반 친구",
        background: "assets/images/background/room_school.png",
        text: "\"선생님, 질문요! 축제 때 반 대항 장기자랑도 하나요?\"",
        character: null,
        next: "day2_homeroom_event_2"
    },
    "day2_homeroom_event_2": {
        name: "담임선생님",
        background: "assets/images/background/room_school.png",
        text: "\"글쎄, 아직 결정된 건 없지만... 우리 반이 나가면 당연히 1등이겠지?\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "day2_homeroom_event_3"
    },
    "day2_homeroom_event_3": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/teacher_smile.png",
        text: "(교실이 킥킥대는 웃음으로 가득 찬다. 선생님도 은근히 유머가 있으시다.)",
        next: "day2_morning_class"
    },

    // =========================================================================
    // 오전 수업 & 유나 쪽지 독백 (Morning Class & Inner Monologue)
    // =========================================================================

    "day2_morning_class": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: "assets/images/characters/teacher_smile.png",
        text: "(수업 시간 내내 유나의 쪽지가 머릿속을 떠나지 않는다. 대체 무슨 할 말이 있는 걸까?)",
        branches: [
            { next: "day2_morning_class_yuna_msg", condition: "sent_msg_day1_yuna" },
            { next: "day2_morning_class_yuna_met", condition: "met_yuna" },
            { next: "day2_morning_class_yuna_new" }
        ]
    },
    "day2_morning_class_yuna_msg": {
        name: "나",
        text: "(어젯밤 메시지를 주고받았던 유나... 번호도 있는데 왜 굳이 쪽지를 남긴 걸까? 그녀다운 방식이라는 생각에 피식 웃음이 난다.)",
        next: "day2_morning_class_focus"
    },
    "day2_morning_class_yuna_met": {
        name: "나",
        text: "(어제 만났던 유나... 그녀가 나에게 이런 쪽지를 남긴 걸까? 비밀이라니... 대체 무엇인지 궁금해진다.)",
        next: "day2_morning_class_focus"
    },
    "day2_morning_class_yuna_new": {
        name: "나",
        text: "(유나...? 어제는 들어보지 못한 이름이다. 대체 누구길래 나에게 이런 쪽지를 남긴 걸까?)",
        next: "day2_morning_class_focus"
    },

    // --- 수업 중 집중과 산만함 ---
    "day2_morning_class_focus": {
        name: "나",
        text: "(칠판에 적히는 수학 공식이 눈에 들어오지 않는다. '도서관 별관 뒤뜰'이라는 단어만 머릿속을 맴돈다.)",
        next: "day2_morning_class_quiz"
    },
    "day2_morning_class_quiz": {
        name: "수학선생님",
        text: "\"자, 이 문제 풀어볼 사람? ...전학생, 한 번 해볼래?\"",
        character: null,
        next: "day2_morning_class_quiz_2"
    },
    "day2_morning_class_quiz_2": {
        name: "나",
        text: "(아뿔싸, 딴생각에 빠져 있었다. 황급히 칠판을 바라보지만, 공식이 도무지 머리에 들어오지 않는다.)",
        choices: [
            { text: "당당하게 나가서 도전해본다.", next: "day2_quiz_try" },
            { text: "솔직하게 모르겠다고 한다.", next: "day2_quiz_pass" }
        ]
    },
    "day2_quiz_try": {
        name: "나",
        text: "(칠판 앞에 서서 공식을 더듬더듬 써나간다. 다행히 어제 예습했던 부분이라 어렴풋이 기억이 난다.)",
        next: "day2_quiz_try_2"
    },
    "day2_quiz_try_2": {
        name: "수학선생님",
        text: "\"오, 전학생 실력이 꽤 되는데? 맞았어. 잘 했어, 자리로 돌아가.\"",
        character: null,
        next: "day2_quiz_result"
    },
    "day2_quiz_pass": {
        name: "나",
        text: "\"죄송합니다, 아직 수업 진도를 다 따라잡지 못해서...\"",
        next: "day2_quiz_pass_2"
    },
    "day2_quiz_pass_2": {
        name: "수학선생님",
        text: "\"괜찮아, 전학 온 지 얼마 안 됐으니까. 다음엔 예습해오렴.\"",
        character: null,
        next: "day2_quiz_result"
    },
    "day2_quiz_result": {
        name: "나",
        text: "(어찌저찌 수업이 넘어간다. 쪽지 때문에 집중이 안 되는 건 어쩔 수 없지만, 그래도 수업은 수업이니까.)",
        next: "day2_second_class"
    },

    // --- 2교시 ---
    "day2_second_class": {
        name: "나",
        text: "(쉬는 시간 없이 바로 2교시 국어 수업이 시작된다. 선생님이 어제 나눠준 유인물을 꺼내라고 한다.)",
        next: "day2_second_class_2"
    },
    "day2_second_class_2": {
        name: "나",
        text: "(유인물을 뒤적이다가, 아까 주머니에 넣은 쪽지가 손끝에 닿는다. 심장이 쿵 하고 뛴다.)",
        next: "day2_second_class_3"
    },
    "day2_second_class_3": {
        name: "나",
        text: "(점심시간까지 아직 두 시간이나 남았다. 이 시간이 왜 이렇게 안 가는 건지...)",
        next: "day2_last_class_before_lunch"
    },

    // =========================================================================
    // 점심 직전 수업 & 전환 (Pre-Lunch Transition)
    // =========================================================================

    "day2_last_class_before_lunch": {
        name: "나",
        text: "(3교시 영어 수업이 시작된다. 선생님의 발음이 귀에 들리긴 하는데, 머릿속은 온통 점심시간 생각뿐이다.)",
        next: "day2_last_class_before_lunch_2"
    },
    "day2_last_class_before_lunch_2": {
        name: "나",
        text: "(도서관 별관 뒤뜰... 가본 적도 없는 곳이다. 유나는 도대체 왜 그런 구석진 곳을 골랐을까?)",
        next: "day2_last_class_before_lunch_3"
    },
    "day2_last_class_before_lunch_3": {
        name: "나",
        text: "(혹시 위험한 건 아니겠지...? 아니, 같은 학교 학생이 보낸 쪽지인데 뭐가 위험해. 그래도 왠지 두근거린다.)",
        next: "day2_last_class_before_lunch_4"
    },
    "day2_last_class_before_lunch_4": {
        name: "나",
        text: "(시계를 슬쩍 본다. 11시 40분... 점심시간까지 20분 남았다. 아, 시간아 좀 빨리 가라.)",
        next: "day2_class_end_bell"
    },
    "day2_class_end_bell": {
        name: "시스템",
        text: "- 딩동댕동 -",
        next: "day2_class_end"
    },
    "day2_class_end": {
        name: "나",
        text: "(드디어 점심 종이 울린다! 교실이 순식간에 소란스러워진다. 아이들이 급식실로 우르르 몰려나간다.)",
        next: "day2_packing_up"
    },
    "day2_packing_up": {
        name: "나",
        text: "(나도 서둘러 교과서를 가방에 넣는다. 주머니 속 쪽지를 한 번 더 확인한다. '도서관 별관'... 좋아, 가보자.)",
        next: "day2_lunch_decision"
    },
    "day2_lunch_decision": {
        name: "나",
        text: "(점심시간이다. 누구와 함께할까...)",
        next: "day2_lunch_time"
    }
});
