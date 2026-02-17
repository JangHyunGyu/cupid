/**
 * ============================================================================
 * CUPID - Day 4 Morning Scenario (Korean Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: ko_day4_1_morning.js
 * 언어: 한국어 (Korean)
 * 일차: Day 4 (4일차 - 토요일)
 * 시간대: Morning (아침)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 토요일 아침, 드디어 데이트 당일이 밝았다.
 * 주인공은 설레는 마음으로 준비하고, 약속 장소로 향한다.
 * 최고 호감도 히로인에 따라 만남이 달라진다.
 * 약속이 없는 경우, 혼자 나갔다가 우연히 히로인과 마주친다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 토요일 아침 기상 - 어젯밤 꿈, 설렘과 긴장
 * 2. 날씨 확인 - 화창한 토요일 아침 분위기
 * 3. 아침 식사와 준비 - 식사 선택, 세면, 긴장감
 * 4. 데이트 준비 - 옷차림 선택, 거울 확인
 * 5. 히로인 메시지 - 캐릭터별 다중 메시지 교환
 * 6. 출발 - 지갑, 핸드폰, 마지막 점검
 * 7. (약속 없음) 솔로 루트 - 우연한 만남, 호감도 빌드 기회
 * 
 *  조건 플래그 (Condition Flags)
 * ----------------------------------------------------------------------------
 * day3_seoyeon_date_confirmed : 서연과 데이트 약속
 * day3_yuna_date_confirmed    : 유나와 데이트 약속
 * day3_dain_date_confirmed    : 다인과 데이트 약속
 * day3_nurse_date_confirmed   : 보건선생님과 데이트 약속
 * day3_teacher_date_confirmed : 담임선생님과 데이트 약속
 * day3_has_multiple_dates     : 복수 약속 존재
 * day3_loyalty_bonus          : 단일 약속 보너스
 * 
 *  설정 플래그 (Set Flags)
 * ----------------------------------------------------------------------------
 * day4_outfit_casual     : 캐주얼 옷차림 선택
 * day4_outfit_stylish    : 스타일리시 옷차림 선택
 * day4_date_target_set   : 데이트 대상 확정
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 옷차림 선택에 따라 해당 히로인 +3
 * 캐릭터별 메시지 교환: 해당 히로인 +3
 * 우연한 만남 대화: 해당 히로인 +5
 * 
 *  노드 수: 약 83개
 * 
 *  진입/퇴장
 * ----------------------------------------------------------------------------
 * Entry: day4_start
 * Exit (date):    day4_morning_depart → next: "day4_arrive"
 * Exit (no-date): day4_no_date_evening → next: "day4_night_start"
 * 
 * ============================================================================
 */

// SCENARIO 전역 객체 초기화
if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}

// Day 4 시나리오 그룹 초기화
if (!SCENARIO[4]) {
    SCENARIO[4] = {};
}

/**
 * [Day 4 - Morning] 씬 데이터 정의
 */
Object.assign(SCENARIO[4], {

    // =========================================================================
    // 1. 토요일 아침 기상 (7 노드)
    // =========================================================================

    "day4_start": {
        name: "나",
        text: "(…눈을 뜨니 토요일 아침이다. 심장이 벌써부터 뛴다.)",
        background: "assets/images/background/room_my.png",
        character: null,
        bgm: "morning.mp3",
        fade: true,
        next: "day4_morning_dream"
    },

    "day4_morning_dream": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(어젯밤, 이상한 꿈을 꿨다. 학교에서 있었던 일들이 파노라마처럼 스쳐 지나갔어.)",
        next: "day4_morning_wake"
    },

    "day4_morning_wake": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(오늘은… 드디어 그날이다. 어제 밤엔 잠도 제대로 못 잤어.)",
        next: "day4_morning_calendar"
    },

    "day4_morning_calendar": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(핸드폰 달력을 확인한다. '토요일' — 빨간 글씨가 유난히 눈에 띈다.)",
        next: "day4_morning_excitement"
    },

    "day4_morning_excitement": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(전학 온 지 나흘째. 이렇게 설레는 주말이 올 줄은 몰랐어. 가슴이 쿵쾅거린다.)",        next: "day4_morning_guilt_check"
    },

    "day4_morning_guilt_check": {
        name: "시스템",
        text: "",
        background: "assets/images/background/room_my.png",
        branches: [
            { next: "day4_morning_guilt", condition: "day3_has_multiple_dates" },
            { next: "day4_morning_stretch" }
        ]
    },

    "day4_morning_guilt": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(…잘깜. 여러 명에게 약속한 게 마음에 걸린다. 다들 나를 믿고 약속한 건데... 결국 한 사람밖에 만나지 못할 텐데.)",        next: "day4_morning_stretch"
    },

    "day4_morning_stretch": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(크게 기지개를 켜고 이불을 걷어찬다. 오늘 하루, 절대 후회 없이 보내야지.)",
        next: "day4_morning_mirror"
    },

    "day4_morning_mirror": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(거울 앞에 서니 긴장된 내 얼굴이 보인다. 좀 더 멋있어 보이고 싶은데…)",
        next: "day4_morning_window"
    },

    // =========================================================================
    // 2. 날씨와 분위기 (3 노드)
    // =========================================================================

    "day4_morning_window": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(커튼을 젖히자 눈부신 햇살이 쏟아진다. 밖이 환하다.)",
        next: "day4_morning_weather"
    },

    "day4_morning_weather": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(하늘이 끝없이 맑다. 벚꽃 잎이 바람에 날리고, 새들이 지저귄다. 완벽한 토요일 아침이야.)",
        next: "day4_morning_weather2"
    },

    "day4_morning_weather2": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(창 너머로 동네 거리가 보인다. 산책하는 사람들, 카페에 들어서는 커플… 나도 곧 저기 있겠지.)",
        next: "day4_morning_kitchen"
    },

    // =========================================================================
    // 3. 아침 식사와 준비 (7 노드)
    // =========================================================================

    "day4_morning_kitchen": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(부엌으로 향한다. 냉장고에 뭐가 있나 확인해 볼까.)",
        next: "day4_morning_breakfast_choice"
    },

    "day4_morning_breakfast_choice": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(시간이 넉넉하긴 한데… 아침은 어떡하지?)",
        choices: [
            {
                text: "토스트라도 먹고 가자",
                next: "day4_morning_breakfast_eat"
            },
            {
                text: "배보다 설렘이 더 크다, 패스",
                next: "day4_morning_breakfast_skip"
            }
        ]
    },

    "day4_morning_breakfast_eat": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(토스트에 잼을 발라 한 입 베어 문다. 바삭한 식감이 잠을 확 깨운다. 역시 먹어야 힘이 나지.)",
        next: "day4_morning_breakfast_done"
    },

    "day4_morning_breakfast_skip": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(배가 고프긴 한데, 긴장돼서 뭘 먹어도 맛을 모르겠다. 나가서 뭔가 사 먹자.)",
        next: "day4_morning_breakfast_done"
    },

    "day4_morning_breakfast_done": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(좋아, 이제 씻고 준비하자. 시간은 충분해.)",
        next: "day4_morning_groom"
    },

    "day4_morning_groom": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(세수하고, 머리를 정리한다. 평소보다 신경 써서 스타일링했다. 향수도… 살짝만 뿌릴까.)",
        next: "day4_morning_nervous"
    },

    "day4_morning_nervous": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(거울에 비친 내 모습을 한 번 더 확인한다. 괜찮아, 나쁘지 않아. …그래도 왜 이렇게 떨리지.)",
        next: "day4_morning_closet"
    },

    // =========================================================================
    // 4. 옷차림 선택 (7 노드)
    // =========================================================================

    "day4_morning_closet": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(옷장을 열었다. 교복 말고 입을 옷이… 생각보다 많지 않다. 뭘 입어야 할까.)",
        next: "day4_morning_outfit"
    },

    "day4_morning_outfit": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(뭘 입고 나가지? 첫인상이 중요하니까 신중하게 골라야 해.)",
        choices: [
            {
                text: "깔끔한 캐주얼 (흰 셔츠 + 청바지)",
                next: "day4_outfit_casual",
                setFlag: "day4_outfit_casual"
            },
            {
                text: "세련된 스타일 (자켓 + 슬랙스)",
                next: "day4_outfit_stylish",
                setFlag: "day4_outfit_stylish"
            }
        ]
    },

    "day4_outfit_casual": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(역시 편한 게 최고지. 자연스럽게 입는 게 내 스타일이야.)",
        next: "day4_casual_mirror"
    },

    "day4_casual_mirror": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(거울 앞에서 한 바퀴 돌아본다. 흰 셔츠에 청바지… 깔끔하고 부담 없어 보인다. 괜찮아.)",
        next: "day4_morning_outfit_done"
    },

    "day4_outfit_stylish": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(오늘은 좀 특별하니까. 이 정도면 괜찮겠지?)",
        next: "day4_stylish_mirror"
    },

    "day4_stylish_mirror": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(자켓 기장도 맞고, 슬랙스도 다리가 길어 보인다. 평소와 다른 내 모습이 낯설지만… 나쁘지 않다.)",
        stats: { Seoyeon: { affinity: 1 }, Yuna: { affinity: 1 }, Dain: { affinity: 1 }, Teacher: { affinity: 1 }, Nurse: { affinity: 1 } },
        next: "day4_morning_outfit_done"
    },

    "day4_morning_outfit_done": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(좋아, 옷은 결정했다. 이제 핸드폰 확인하고 나가면 돼.)",
        next: "day4_morning_phone"
    },

    // =========================================================================
    // 5. 히로인 메시지 확인 + 분기 (2 노드)
    // =========================================================================

    "day4_morning_phone": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(핸드폰을 확인하니 메시지가 와 있다.)",
        next: "day4_morning_message_branch"
    },

    "day4_morning_message_branch": {
        name: "시스템",
        background: "assets/images/background/room_my.png",
        text: "",
        branches: [
            // 약속이 하나라도 있으면 → 최고 호감도 히로인 데이트
            { next: "day4_morning_date_route", condition: "day3_seoyeon_date_confirmed" },
            { next: "day4_morning_date_route", condition: "day3_yuna_date_confirmed" },
            { next: "day4_morning_date_route", condition: "day3_dain_date_confirmed" },
            { next: "day4_morning_date_route", condition: "day3_nurse_date_confirmed" },
            { next: "day4_morning_date_route", condition: "day3_teacher_date_confirmed" },
            // 약속 없음 → 솔로 루트
            { next: "day4_no_date_start" }
        ]
    },

    // =========================================================================
    // 6A. 데이트 루트 - 호감도 분기 + 캐릭터별 메시지 교환 (26 노드)
    // =========================================================================

    "day4_morning_date_route": {
        name: "시스템",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_msg_seoyeon", character: "Seoyeon", condition: "day3_seoyeon_date_confirmed" },
            { next: "day4_msg_yuna", character: "Yuna", condition: "day3_yuna_date_confirmed" },
            { next: "day4_msg_dain", character: "Dain", condition: "day3_dain_date_confirmed" },
            { next: "day4_msg_nurse", character: "Nurse", condition: "day3_nurse_date_confirmed" },
            { next: "day4_msg_teacher", character: "Teacher", condition: "day3_teacher_date_confirmed" }
        ]
    },

    // --- 서연 메시지 ---
    "day4_msg_seoyeon": {
        name: "서연",
        text: "\"오늘 약속 잊지 않았지? 😊 공원 분수대 앞에서 10시에 만나! 기대된다~\"",
        character: "assets/images/characters/seyoun_laugh.png",
        silhouette: true,
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_seoyeon"
    },
    "day4_morning_reply_seoyeon": {
        name: "나",
        character: "assets/images/characters/seyoun_laugh.png",
        silhouette: true,
        text: "(서연이한테서 메시지가 왔다. 웃는 이모티콘이 귀엽네. 뭐라고 답장하지…)",
        next: "day4_msg_seoyeon_2"
    },
    "day4_msg_seoyeon_2": {
        name: "서연",
        text: "\"아 참, 오늘 날씨 진짜 좋다! 산책하기 딱이야~ 선크림 바르고 와!\"",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "day4_reply_seoyeon_2"
    },
    "day4_reply_seoyeon_2": {
        name: "나",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        text: "(연달아 메시지가 온다. 서연이도 기대하고 있나 보다. 나도 빨리 준비해서 나가야지.)",
        next: "day4_seoyeon_ready"
    },
    "day4_seoyeon_ready": {
        name: "서연",
        text: "\"그럼 이따 봐~!! 😆\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day4_morning_loyalty_check"
    },

    // --- 유나 메시지 ---
    "day4_msg_yuna": {
        name: "유나",
        text: "\"…10시. 역 앞 카페. 늦으면 모른다.\"",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_yuna"
    },
    "day4_morning_reply_yuna": {
        name: "나",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        text: "(유나답게 짧고 간결하다. 근데 이런 게 유나의 매력이지. '알겠어, 안 늦을게!' 라고 보내자.)",
        next: "day4_msg_yuna_2"
    },
    "day4_msg_yuna_2": {
        name: "유나",
        text: "\"…별거 아닌데. 그냥 커피 마시고 싶었을 뿐이야. …혼자는 좀 그래서.\"",
        character: "assets/images/characters/yuna_shy.png",
        silhouette: true,
        stats: { Yuna: { affinity: 3 } },
        next: "day4_reply_yuna_2"
    },
    "day4_reply_yuna_2": {
        name: "나",
        character: "assets/images/characters/yuna_shy.png",
        silhouette: true,
        text: "(…이게 유나식 '같이 가고 싶다'인 거지? 입가에 미소가 번진다.)",
        next: "day4_yuna_ready"
    },
    "day4_yuna_ready": {
        name: "유나",
        text: "\"…빨리 와.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day4_morning_loyalty_check"
    },

    // --- 다인 메시지 ---
    "day4_msg_dain": {
        name: "다인",
        text: "\"야!! 오늘 연습 끝나고 만나자!! 체육관 앞에서 11시!! 늦지 마!!!! 🏐\"",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_dain"
    },
    "day4_morning_reply_dain": {
        name: "나",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        text: "(느낌표가 엄청 많네… 다인이의 에너지가 메시지에서도 느껴진다. 답장을 보내야지.)",
        next: "day4_msg_dain_2"
    },
    "day4_msg_dain_2": {
        name: "다인",
        text: "\"아 맞다!! 오늘 연습 끝나면 배 엄청 고플 거야!! 맛집 알아봐 줘!! 고기 먹고 싶어!!!\"",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        stats: { Dain: { affinity: 3 } },
        next: "day4_reply_dain_2"
    },
    "day4_reply_dain_2": {
        name: "나",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        text: "(맛집 검색까지 시키는 건가… 하긴, 다인이랑 밥 먹는 것도 나쁘지 않다. 아니, 기대된다.)",
        next: "day4_dain_ready"
    },
    "day4_dain_ready": {
        name: "다인",
        text: "\"그럼 이따 보자!! 기대해!!! 💪\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day4_morning_loyalty_check"
    },

    // --- 보건선생님 메시지 ---
    "day4_msg_nurse": {
        name: "보건선생님",
        text: "\"오늘 괜찮으면… 시내 미술관은 어때? 보고 싶은 전시가 있거든. 11시에 미술관 앞에서 만나자.\"",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_nurse"
    },
    "day4_morning_reply_nurse": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        text: "(보건선생님과 미술관이라… 왠지 두근거린다. '네, 꼭 갈게요!'라고 보냈다.)",
        next: "day4_msg_nurse_2"
    },
    "day4_msg_nurse_2": {
        name: "보건선생님",
        text: "\"기대하고 있을게. 아, 그리고… 오늘은 선생님이라고 부르지 마. 그냥 편하게 만나는 거야.\"",
        character: "assets/images/characters/nurse_shy.png",
        silhouette: true,
        stats: { Nurse: { affinity: 3 } },
        next: "day4_reply_nurse_2"
    },
    "day4_reply_nurse_2": {
        name: "나",
        character: "assets/images/characters/nurse_shy.png",
        silhouette: true,
        text: "(선생님이라고 부르지 말라니… 심장이 멈추는 줄 알았다. 오늘은 정말 특별한 날이 될 것 같다.)",
        next: "day4_nurse_ready"
    },
    "day4_nurse_ready": {
        name: "보건선생님",
        text: "\"그럼 이따 봐 😊\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day4_morning_loyalty_check"
    },

    // --- 담임선생님 메시지 ---
    "day4_msg_teacher": {
        name: "담임선생님",
        text: "\"오늘 점심쯤에 학교 근처 카페에서 볼까? 할 얘기가 있어서. 12시에 만나자.\"",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_teacher"
    },
    "day4_morning_reply_teacher": {
        name: "나",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        text: "(담임선생님이랑 학교 밖에서 만나다니… 긴장된다. 바로 답장을 보냈다.)",
        next: "day4_msg_teacher_2"
    },
    "day4_msg_teacher_2": {
        name: "담임선생님",
        text: "\"사복으로 갈 테니까 못 알아봐도 놀라지 마. …농담이야. 아마 알아볼 거야.\"",
        character: "assets/images/characters/teacher_smile.png",
        silhouette: true,
        stats: { Teacher: { affinity: 3 } },
        next: "day4_reply_teacher_2"
    },
    "day4_reply_teacher_2": {
        name: "나",
        character: "assets/images/characters/teacher_smile.png",
        silhouette: true,
        text: "(담임선생님이 농담을 하다니. 평소에 보여주지 않던 모습이라 더 신선하다. 사복 모습은 어떨까.)",
        next: "day4_teacher_ready"
    },
    "day4_teacher_ready": {
        name: "담임선생님",
        text: "\"늦지 마라. 기다리는 건 싫어하니까.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day4_morning_loyalty_check"
    },

    // =========================================================================
    // 6C. 일편단심 보너스 체크 (2 노드)
    // =========================================================================

    "day4_morning_loyalty_check": {
        name: "시스템",
        text: "",
        background: "assets/images/background/room_my.png",
        branches: [
            { next: "day4_morning_loyalty_boost", condition: "day3_loyalty_bonus" },
            { next: "day4_morning_lastcheck" }
        ]
    },

    "day4_morning_loyalty_boost": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(한 사람만을 위해 준비하고 있다는 사실이… 오히려 마음을 단단하게 해준다. 오늘은 오직 그 사람만 생각하자.)",
        stats: { Seoyeon: { affinity: 3 }, Yuna: { affinity: 3 }, Dain: { affinity: 3 }, Teacher: { affinity: 3 }, Nurse: { affinity: 3 } },
        next: "day4_morning_lastcheck"
    },

    // =========================================================================
    // 7. 출발 준비 (5 노드)
    // =========================================================================

    "day4_morning_lastcheck": {
        name: "나",
        character: null,
        text: "(마지막으로 거울을 본다. …괜찮다. 아니, 꽤 괜찮아 보인다. 자신감을 갖자.)",
        next: "day4_morning_wallet"
    },

    "day4_morning_wallet": {
        name: "나",
        character: null,
        text: "(지갑, 핸드폰, 열쇠. 하나씩 주머니에 넣는다. 혹시 모르니까 손수건도 챙기자.)",
        next: "day4_morning_lock"
    },

    "day4_morning_lock": {
        name: "나",
        character: null,
        text: "(현관문을 나서며 열쇠로 문을 잠근다. 딸깍 — 마치 새로운 하루의 시작을 알리는 소리 같다.)",
        next: "day4_morning_outside"
    },

    "day4_morning_outside": {
        name: "나",
        character: null,
        text: "(밖으로 나오자 따사로운 바람이 불어온다. 벚꽃 향기가 코끝을 스친다. 거리에는 활기가 넘친다.)",
        background: "assets/images/background/street.png",
        next: "day4_morning_depart"
    },

    "day4_morning_depart": {
        name: "나",
        background: "assets/images/background/street.png",
        character: null,
        text: "(좋아, 준비 완료. 가자!)",
        fade: true,
        next: "day4_arrive"
    },

    // =========================================================================
    // 6B. 약속 없음 - 혼자 보내는 토요일 + 우연한 만남 (26 노드)
    // =========================================================================

    "day4_no_date_start": {
        name: "나",
        text: "(…핸드폰을 확인했지만, 메시지는 없다.)",
        next: "day4_no_date_2"
    },

    "day4_no_date_2": {
        name: "나",
        text: "(주말인데 약속이 없다니. 전학 와서 벌써 나흘이 지났는데… 뭘 한 걸까.)",
        next: "day4_no_date_3"
    },

    "day4_no_date_3": {
        name: "나",
        text: "(그래도 이 좋은 날씨에 집에만 있을 수는 없지. 어디라도 나가 볼까.)",
        choices: [
            {
                text: "편의점에서 간식 사서 공원 가기",
                next: "day4_no_date_park"
            },
            {
                text: "집에서 뒹굴뒹굴하기",
                next: "day4_no_date_home"
            },
            {
                text: "동네 카페에 가서 시간 보내기",
                next: "day4_no_date_cafe"
            }
        ]
    },

    // --- 공원 루트 ---
    "day4_no_date_park": {
        name: "나",
        text: "(편의점에서 삼각김밥과 음료수를 사서 공원으로 향했다. 벤치에 앉아 혼자 간식을 먹는다.)",
        background: "assets/images/background/park.png",
        next: "day4_no_date_park_weather"
    },

    "day4_no_date_park_weather": {
        name: "나",
        background: "assets/images/background/park.png",
        text: "(벚꽃 잎이 바람에 날려 어깨 위에 내려앉는다. 아름다운 풍경인데… 혼자 보니까 좀 쓸쓸하다.)",
        next: "day4_no_date_lonely"
    },

    // --- 집 루트 ---
    "day4_no_date_home": {
        name: "나",
        text: "(침대에 누워서 천장만 바라봤다. 이래도 되나 싶다.)",
        next: "day4_no_date_home_bored"
    },

    "day4_no_date_home_bored": {
        name: "나",
        text: "(SNS를 열었더니 동급생들이 올린 주말 사진이 가득하다. 다들 즐거워 보이는데… 나만 이런 건가.)",
        next: "day4_no_date_lonely"
    },

    // --- 카페 루트 ---
    "day4_no_date_cafe": {
        name: "나",
        text: "(동네 카페에 들어가 아메리카노를 시켰다. 창가 자리에 앉아 밖을 내다본다.)",
        background: "assets/images/background/cafe.png",
        next: "day4_no_date_cafe_sit"
    },

    "day4_no_date_cafe_sit": {
        name: "나",
        background: "assets/images/background/cafe.png",
        text: "(커플들이 지나가는 거리를 바라보며 커피를 홀짝인다. 쓴맛이 유독 진하게 느껴진다.)",
        next: "day4_no_date_lonely"
    },

    // --- 합류 지점: 외로움 → 밖으로 나감 ---
    "day4_no_date_lonely": {
        name: "나",
        background: "assets/images/background/park.png",
        text: "(…이렇게 혼자 토요일을 보내다니. 그래도 가만히만 있을 수는 없어. 좀 걸어 보자.)",
        next: "day4_no_date_wander"
    },

    "day4_no_date_wander": {
        name: "나",
        text: "(별생각 없이 동네를 걷다 보니 공원 근처 편의점 앞에 와 있다. 그때, 낯익은 뒷모습이 눈에 들어온다.)",
        background: "assets/images/background/street.png",
        next: "day4_no_date_encounter"
    },

    // --- 우연한 만남 - 호감도 분기 ---
    "day4_no_date_encounter": {
        name: "시스템",
        background: "assets/images/background/street.png",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_no_date_meet_seoyeon", character: "Seoyeon" },
            { next: "day4_no_date_meet_yuna", character: "Yuna" },
            { next: "day4_no_date_meet_dain", character: "Dain" },
            { next: "day4_no_date_meet_nurse", character: "Nurse" },
            { next: "day4_no_date_meet_teacher", character: "Teacher" }
        ]
    },

    // --- 서연 우연 만남 ---
    "day4_no_date_meet_seoyeon": {
        name: "서연",
        text: "\"어? 너 여기 웬일이야? 나도 산책 나왔거든! 같이 걸을래?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day4_no_date_chat_seoyeon"
    },
    "day4_no_date_chat_seoyeon": {
        name: "나",
        text: "(서연이가 활짝 웃으며 다가온다. 혼자라서 쓸쓸했는데, 서연이를 만나다니. 운명인가.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day4_no_date_after_encounter"
    },

    // --- 유나 우연 만남 ---
    "day4_no_date_meet_yuna": {
        name: "유나",
        text: "\"…어. 너도 혼자야? …나도.\"",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: 5 } },
        next: "day4_no_date_chat_yuna"
    },
    "day4_no_date_chat_yuna": {
        name: "나",
        text: "(유나가 이어폰 한쪽을 빼며 나를 올려다본다. 조용한 눈빛이 왠지 따뜻하게 느껴진다.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "day4_no_date_after_encounter"
    },

    // --- 다인 우연 만남 ---
    "day4_no_date_meet_dain": {
        name: "다인",
        text: "\"엥?! 여기서 만나다니!! 나 연습 끝나고 음료수 사러 왔거든!! 같이 뭐 할래?!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 5 } },
        next: "day4_no_date_chat_dain"
    },
    "day4_no_date_chat_dain": {
        name: "나",
        text: "(다인이가 운동복 차림으로 씩씩하게 다가온다. 이 에너지 넘치는 만남이 반갑다.)",
        character: "assets/images/characters/dain_normal.png",
        next: "day4_no_date_after_encounter"
    },

    // --- 보건선생님 우연 만남 ---
    "day4_no_date_meet_nurse": {
        name: "보건선생님",
        text: "\"어머, 이런 데서 만나네. 나도 잠깐 산책 나온 거야. 같이 걸을까?\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day4_no_date_chat_nurse"
    },
    "day4_no_date_chat_nurse": {
        name: "나",
        text: "(선생님의 사복 차림을 금방은 못 알아볼 뻔했다. 학교 밖에서 보니 분위기가 다르다. 심장이 뛴다.)",
        character: "assets/images/characters/nurse_shy.png",
        next: "day4_no_date_after_encounter"
    },

    // --- 담임선생님 우연 만남 ---
    "day4_no_date_meet_teacher": {
        name: "담임선생님",
        text: "\"…너 여기서 뭐 해? 하, 선생도 주말은 있거든. 뭐, 잠깐 차라도 마실래?\"",
        character: "assets/images/characters/teacher_normal.png",
        stats: { Teacher: { affinity: 5 } },
        next: "day4_no_date_chat_teacher"
    },
    "day4_no_date_chat_teacher": {
        name: "나",
        text: "(담임선생님이 무표정하게 말하지만, 먼저 말을 걸어준 거잖아. 입꼬리가 살짝 올라간 것도 봤다.)",
        character: "assets/images/characters/teacher_smile.png",
        next: "day4_no_date_after_encounter"
    },

    // --- 만남 이후 공통 루트 ---
    "day4_no_date_after_encounter": {
        name: "나",
        character: null,
        text: "(잠시 같이 걸으며 이런저런 얘기를 나눴다. 주말이 이렇게 바뀔 줄이야.)",
        next: "day4_no_date_reflect"
    },

    "day4_no_date_reflect": {
        name: "나",
        character: null,
        text: "(약속도 없이 시작한 하루였는데… 이 우연 하나만으로도 오늘이 특별해진 기분이다.)",
        next: "day4_no_date_sunset"
    },

    "day4_no_date_sunset": {
        name: "나",
        character: null,
        text: "(어느새 노을이 번지기 시작한다. 하늘이 주황빛으로 물든다. 나쁘지 않은 하루였어.)",
        background: "assets/images/background/street.png",
        next: "day4_no_date_evening"
    },

    "day4_no_date_evening": {
        name: "나",
        background: "assets/images/background/street.png",
        character: null,
        text: "(집으로 돌아가는 길. 오늘을 떠올리면 자연스럽게 미소가 지어진다. 월요일이 기대된다.)",
        fade: true,
        next: "day4_night_start"
    }
});
