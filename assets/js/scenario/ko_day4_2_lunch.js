/**
 * ============================================================================
 * CUPID - Day 4 Lunch Scenario (Korean Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: ko_day4_2_lunch.js
 * 언어: 한국어 (Korean)
 * 일차: Day 4 (4일차 - 토요일)
 * 시간대: Lunch (점심 - 데이트 시작)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 약속 장소에 도착해 히로인과 만난다.
 * 데이트가 시작되고 함께 시간을 보내며 특별한 순간을 만든다.
 * 캐릭터별 고유 데이트 활동, 점심 식사, 사진 촬영 등 다채로운 이벤트.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 약속 장소 도착 - 긴장 속 대기, 주변 관찰
 * 2. 히로인과의 첫 만남 - 캐릭터별 등장 및 칭찬 선택
 * 3. 함께 걸으며 대화 - 서로를 더 알아가는 시간
 * 4. 캐릭터별 데이트 활동 - 각 히로인 고유 장소에서 특별한 시간
 * 5. 점심 식사 - 분위기 있는 대화, 주문, 재미있는 순간
 * 6. 사진 촬영 / 특별한 순간 - 추억 만들기
 * 
 *  조건 플래그 (Condition Flags)
 * ----------------------------------------------------------------------------
 * (없음 - selectByHighestAffinity 사용)
 * 
 *  설정 플래그 (Set Flags)
 * ----------------------------------------------------------------------------
 * day4_honest_talk : 솔직한 대화를 선택했을 때
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 최고 호감도 히로인: 대화 선택에 따라 +3 ~ +10
 * 
 *  노드 수: 약 80개
 * 
 *  진입/퇴장
 * ----------------------------------------------------------------------------
 * Entry: day4_arrive
 * Exit:  day4_date_response → next: "day4_afternoon_start"
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
 * [Day 4 - Lunch] 씬 데이터 정의
 */
Object.assign(SCENARIO[4], {

    // =========================================================================
    // 1. 약속 장소 도착 — 긴장 속 대기 (6 노드)
    // =========================================================================

    "day4_arrive": {
        name: "나",
        text: "*약속 장소에 도착했다. 아직 시간이 조금 이르네.*",
        background: "assets/images/background/street.png",
        character: null,
        bgm: "date.mp3",
        next: "day4_arrive_nervous"
    },

    "day4_arrive_nervous": {
        name: "나",
        background: "assets/images/background/street.png",
        text: "*주머니에 넣은 손이 축축하다. 왜 이렇게 긴장되는 거지… 심호흡 좀 하자.*",
        next: "day4_arrive_people"
    },

    "day4_arrive_people": {
        name: "나",
        background: "assets/images/background/street.png",
        text: "*주변을 둘러본다. 거리에는 웃으며 걷는 커플들, 아이스크림을 먹는 가족, 강아지를 산책시키는 사람…*",
        next: "day4_arrive_phone"
    },

    "day4_arrive_phone": {
        name: "나",
        background: "assets/images/background/street.png",
        text: "*핸드폰을 꺼내본다. 아직 연락은 없다. 시간을 확인하니 약속보다 15분 일찍 도착했다.*",
        next: "day4_arrive_look"
    },

    "day4_arrive_look": {
        name: "나",
        background: "assets/images/background/street.png",
        text: "*유리창에 비친 내 모습을 슬쩍 확인한다. 괜찮아, 나쁘지 않아… 아마.*",
        next: "day4_arrive_wait"
    },

    "day4_arrive_wait": {
        name: "나",
        background: "assets/images/background/street.png",
        text: "*단순한 약속이 아니다. 오늘 누구의 손을 잡느냐에 따라, 내 일상은 완전히 다른 궤도로 진입하게 될 것이다. 묘한 갈증이 목을 조여온다.*",
        next: "day4_heroine_arrive"
    },

    // =========================================================================
    // 2. 히로인 등장 — 최고 호감도 기준 분기 (1 노드)
    // =========================================================================

    "day4_heroine_arrive": {
        name: "시스템",
        background: "assets/images/background/street.png",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_meet_seoyeon", character: "Seoyeon" },
            { next: "day4_meet_yuna", character: "Yuna" },
            { next: "day4_meet_dain", character: "Dain" },
            { next: "day4_meet_nurse", character: "Nurse" },
            { next: "day4_meet_teacher", character: "Teacher" }
        ]
    },

    // =========================================================================
    // 서연 루트 (5 노드)
    // =========================================================================

    "day4_meet_seoyeon": {
        name: "서연",
        text: "\"앗, 벌써 와 있었어? 나도 좀 일찍 나왔는데… 후훗.\"",
        background: "assets/images/background/park.png",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day4_seoyeon_react"
    },

    "day4_seoyeon_react": {
        name: "나",
        background: "assets/images/background/park.png",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "*서연이가 웃으며 다가온다. 학교 밖에서 만나니… 평소와 다르게 보인다.*",
        next: "day4_seoyeon_compliment"
    },

    "day4_seoyeon_compliment": {
        name: "나",
        background: "assets/images/background/park.png",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "*뭐라고 해야 하지?*",
        choices: [
            {
                text: "\"오늘 되게 예쁘다.\"",
                next: "day4_seoyeon_blush",
                stats: { Seoyeon: { affinity: 10 } }
            },
            {
                text: "\"오늘 되게 밝아 보인다!\"",
                next: "day4_seoyeon_happy",
                stats: { Seoyeon: { affinity: 5 } }
            }
        ]
    },

    "day4_seoyeon_blush": {
        name: "서연",
        background: "assets/images/background/park.png",
        text: "\"에, 에이… 갑자기 그런 말 하면 어떡해… 고마워.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day4_date_walk"
    },

    "day4_seoyeon_happy": {
        name: "서연",
        background: "assets/images/background/park.png",
        text: "\"정말? 오늘 좀 신경 썼거든! 알아봐줘서 기쁘다~\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day4_date_walk"
    },

    // =========================================================================
    // 유나 루트 (5 노드)
    // =========================================================================

    "day4_meet_yuna": {
        name: "유나",
        text: "\"…왔어.\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/yuna_normal.png",
        next: "day4_yuna_react"
    },

    "day4_yuna_react": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/yuna_normal.png",
        text: "*유나가 카페 앞에 서 있었다. 학교 밖에서 보니 분위기가 달라.*",
        next: "day4_yuna_compliment"
    },

    "day4_yuna_compliment": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/yuna_normal.png",
        text: "*뭐라고 해야 하지?*",
        choices: [
            {
                text: "\"오늘 분위기 다르다. 예쁘네.\"",
                next: "day4_yuna_blush",
                stats: { Yuna: { affinity: 10 } }
            },
            {
                text: "\"기다렸어? 미안.\"",
                next: "day4_yuna_cool",
                stats: { Yuna: { affinity: 5 } }
            }
        ]
    },

    "day4_yuna_blush": {
        name: "유나",
        background: "assets/images/background/cafe.png",
        text: "\"……그런 말 처음 들어. …고마워.\"",
        character: "assets/images/characters/yuna_shy.png",
        next: "day4_date_walk"
    },

    "day4_yuna_cool": {
        name: "유나",
        background: "assets/images/background/cafe.png",
        text: "\"…방금 왔어. 들어가자.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day4_date_walk"
    },

    // =========================================================================
    // 다인 루트 (5 노드)
    // =========================================================================

    "day4_meet_dain": {
        name: "다인",
        text: "\"야!! 여기여기!!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_laugh.png",
        next: "day4_dain_react"
    },

    "day4_dain_react": {
        name: "나",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_laugh.png",
        text: "*다인이가 손을 흔들며 뛰어온다. 학교 밖에서 만나니 분위기가 또 다르다.*",
        next: "day4_dain_compliment"
    },

    "day4_dain_compliment": {
        name: "나",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_laugh.png",
        text: "*뭐라고 해야 하지?*",
        choices: [
            {
                text: "\"오늘 완전 귀엽다!\"",
                next: "day4_dain_blush",
                stats: { Dain: { affinity: 10 } }
            },
            {
                text: "\"연습은 잘 끝났어?\"",
                next: "day4_dain_energy",
                stats: { Dain: { affinity: 5 } }
            }
        ]
    },

    "day4_dain_blush": {
        name: "다인",
        background: "assets/images/background/gym.png",
        text: "\"헤, 후훗… 진짜?! 나 오늘 엄청 고민했거든!! 다행이다~!!\"",
        character: "assets/images/characters/dain_shy.png",
        next: "day4_date_walk"
    },

    "day4_dain_energy": {
        name: "다인",
        background: "assets/images/background/gym.png",
        text: "\"완전 완벽했지!! 오늘 컨디션 최고야!! 자, 빨리 가자!!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day4_date_walk"
    },

    // =========================================================================
    // 보건선생님 루트 (5 노드)
    // =========================================================================

    "day4_meet_nurse": {
        name: "보건선생님",
        text: "\"어머, 벌써 와 있었네? 오래 기다렸어?\"",
        background: "assets/images/background/museum.png",
        character: "assets/images/characters/nurse_normal.png",
        next: "day4_nurse_react"
    },

    "day4_nurse_react": {
        name: "나",
        background: "assets/images/background/museum.png",
        character: "assets/images/characters/nurse_normal.png",
        text: "*미술관 입구에서 보건선생님이 웃으며 손을 흔들고 있다. 학교 밖에서 만나니까 왠지 분위기가 다르게 느껴진다.*",
        next: "day4_nurse_compliment"
    },

    "day4_nurse_compliment": {
        name: "나",
        background: "assets/images/background/museum.png",
        character: "assets/images/characters/nurse_normal.png",
        text: "*뭐라고 해야 하지?*",
        choices: [
            {
                text: "\"선생님… 오늘 정말 예쁘세요.\"",
                next: "day4_nurse_blush",
                stats: { Nurse: { affinity: 10 } }
            },
            {
                text: "\"학교 밖에서 만나니까 신기하네요.\"",
                next: "day4_nurse_smile",
                stats: { Nurse: { affinity: 5 } }
            }
        ]
    },

    "day4_nurse_blush": {
        name: "보건선생님",
        background: "assets/images/background/museum.png",
        text: "\"후후… 고마워. 오늘은 학생이 아니라 그냥 남자로 봐도 될까?\"",
        character: "assets/images/characters/nurse_shy.png",
        next: "day4_date_walk"
    },

    "day4_nurse_smile": {
        name: "보건선생님",
        background: "assets/images/background/museum.png",
        text: "\"맞아, 나도 좀 긴장돼. 오늘은 선생님이 아니라 그냥 나야.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day4_date_walk"
    },

    // =========================================================================
    // 담임선생님 루트 (5 노드)
    // =========================================================================

    "day4_meet_teacher": {
        name: "담임선생님",
        text: "\"오, 왔구나. 늦을 줄 알았는데 의외로 빠르네?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/teacher_normal.png",
        next: "day4_teacher_react"
    },

    "day4_teacher_react": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/teacher_normal.png",
        text: "*담임선생님이 카페 앞에서 웃고 있다. 학교 밖에서 만나니 느낌이 달라서 순간 누구인지 못 알아볼 뻔했다.*",
        next: "day4_teacher_compliment"
    },

    "day4_teacher_compliment": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/teacher_normal.png",
        text: "*뭐라고 해야 하지?*",
        choices: [
            {
                text: "\"선생님 오늘 되게 예쁘세요.\"",
                next: "day4_teacher_blush",
                stats: { Teacher: { affinity: 10 } }
            },
            {
                text: "\"카페가 분위기 좋네요.\"",
                next: "day4_teacher_casual",
                stats: { Teacher: { affinity: 5 } }
            }
        ]
    },

    "day4_teacher_blush": {
        name: "담임선생님",
        background: "assets/images/background/cafe.png",
        text: "\"…뭐야, 갑자기. 칭찬하면 기분이 이상해지니까 그만해.\"",
        character: "assets/images/characters/teacher_shy.png",
        next: "day4_date_walk"
    },

    "day4_teacher_casual": {
        name: "담임선생님",
        background: "assets/images/background/cafe.png",
        text: "\"그치? 여기 커피가 맛있어. 자, 들어가자.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day4_date_walk"
    },

    // =========================================================================
    // 3. 공통 데이트 시작 — 함께 걷기 (3 노드)
    // =========================================================================

    "day4_date_walk": {
        name: "나",
        character: null,
        text: "*나란히 걸으며 이런저런 이야기를 나눴다. 학교에서와는 다른, 편안한 분위기.*",
        background: "assets/images/background/street.png",
        next: "day4_date_talk_1"
    },

    "day4_date_talk_1": {
        name: "나",
        background: "assets/images/background/street.png",
        character: null,
        text: "*평소에는 할 수 없었던 이야기들… 좋아하는 음악, 어릴 때 꿈, 사소한 취미.*",
        next: "day4_date_talk_2"
    },

    "day4_date_talk_2": {
        name: "나",
        background: "assets/images/background/street.png",
        character: null,
        text: "*이야기를 나눌수록 마음이 가까워지는 게 느껴진다. 이 시간이 영원했으면 좋겠다.*",
        next: "day4_date_weather"
    },

    // =========================================================================
    // 4. 분위기 — 날씨와 주변 묘사 (4 노드)
    // =========================================================================

    "day4_date_weather": {
        name: "나",
        background: "assets/images/background/street.png",
        character: null,
        text: "*바람이 살랑살랑 분다. 하늘에는 솜사탕 같은 구름이 천천히 흘러간다.*",
        next: "day4_date_surroundings"
    },

    "day4_date_surroundings": {
        name: "나",
        background: "assets/images/background/street.png",
        character: null,
        text: "*거리에는 우리 같은 커플들이 여기저기 보인다. 문득 '우리도 저렇게 보일까?' 하는 생각이 든다.*",
        next: "day4_date_time_pass"
    },

    "day4_date_time_pass": {
        name: "나",
        background: "assets/images/background/street.png",
        character: null,
        text: "*시간이 어떻게 흘러가는지 모르겠다. 핸드폰을 꺼내 시간을 확인하니 벌써 한 시간이 지나 있었다.*",
        next: "day4_date_sunshine"
    },

    "day4_date_sunshine": {
        name: "나",
        background: "assets/images/background/street.png",
        character: null,
        text: "*햇살이 나뭇잎 사이로 쏟아져 내린다. 옆에 걷는 사람의 얼굴에 빛이 내려앉는 게… 예쁘다.*",
        next: "day4_date_activity_branch"
    },

    // =========================================================================
    // 5. 캐릭터별 데이트 활동 분기 (1 + 20 = 21 노드)
    // =========================================================================

    "day4_date_activity_branch": {
        name: "시스템",
        background: "assets/images/background/street.png",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_activity_seoyeon_1", character: "Seoyeon" },
            { next: "day4_activity_yuna_1", character: "Yuna" },
            { next: "day4_activity_dain_1", character: "Dain" },
            { next: "day4_activity_nurse_1", character: "Nurse" },
            { next: "day4_activity_teacher_1", character: "Teacher" }
        ]
    },

    // --- 서연: 공원 데이트 (꽃밭 산책, 오리 먹이주기, 사진) ---

    "day4_activity_seoyeon_1": {
        name: "서연",
        text: "\"와, 저기 봐! 꽃밭이다! 가보자!!\"",
        background: "assets/images/background/park.png",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day4_activity_seoyeon_2"
    },

    "day4_activity_seoyeon_2": {
        name: "나",
        background: "assets/images/background/park.png",
        text: "*서연이가 내 손을 잡고 꽃밭 사이로 뛰어간다. 알록달록한 꽃들 사이에서 서연이가 환하게 웃는다.*",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day4_activity_seoyeon_3"
    },

    "day4_activity_seoyeon_3": {
        name: "서연",
        background: "assets/images/background/park.png",
        text: "\"앗, 저기 오리들이다! 빵 좀 줄까? 편의점에서 사온 거 있어!\"",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day4_activity_seoyeon_4"
    },

    "day4_activity_seoyeon_4": {
        name: "나",
        background: "assets/images/background/park.png",
        text: "*나란히 앉아 연못의 오리들에게 빵을 던져줬다. 오리들이 쪼르르 달려오니 서연이가 까르르 웃는다.*",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day4_activity_converge"
    },

    // --- 유나: 카페 & 서점 데이트 (책 구경, 조용한 카페, 이어폰 나눠 끼기) ---

    "day4_activity_yuna_1": {
        name: "유나",
        text: "\"…저기, 서점 들러도 돼? 읽고 싶은 책이 있어서.\"",
        background: "assets/images/background/bookstore.png",
        character: "assets/images/characters/yuna_normal.png",
        next: "day4_activity_yuna_2"
    },

    "day4_activity_yuna_2": {
        name: "나",
        background: "assets/images/background/bookstore.png",
        character: "assets/images/characters/yuna_normal.png",
        text: "*서점 안에서 유나와 나란히 책장을 넘겼다. 유나는 책을 고를 때 정말 진지한 표정이 된다.*",
        next: "day4_activity_yuna_3"
    },

    "day4_activity_yuna_3": {
        name: "유나",
        background: "assets/images/background/bookstore.png",
        text: "\"…이 노래 좋아해? 한쪽 들어볼래.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 3 } },
        next: "day4_activity_yuna_4"
    },

    "day4_activity_yuna_4": {
        name: "나",
        background: "assets/images/background/bookstore.png",
        text: "*유나가 이어폰 한쪽을 건네줬다. 가까이 붙어 앉아 같은 음악을 듣는다. 유나의 어깨가 내 어깨에 살짝 닿았다.*",
        character: "assets/images/characters/yuna_shy.png",
        stats: { Yuna: { affinity: 5 } },
        next: "day4_activity_converge"
    },

    // --- 다인: 오락실 & 스포츠 데이트 (아케이드 게임, 대결, 승부욕) ---

    "day4_activity_dain_1": {
        name: "다인",
        text: "\"야야야, 저기 오락실이다!! 가자가자가자!!\"",
        background: "assets/images/background/arcade.png",
        character: "assets/images/characters/dain_laugh.png",
        next: "day4_activity_dain_2"
    },

    "day4_activity_dain_2": {
        name: "나",
        background: "assets/images/background/arcade.png",
        character: "assets/images/characters/dain_laugh.png",
        text: "*다인이가 눈을 반짝이며 오락실 안으로 뛰어간다. 리듬게임 앞에 서더니 도전적으로 날 쳐다본다.*",
        next: "day4_activity_dain_3"
    },

    "day4_activity_dain_3": {
        name: "다인",
        background: "assets/images/background/arcade.png",
        text: "\"대결이다!! 지는 사람이 아이스크림 사기!! 절대 안 져!!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 3 } },
        next: "day4_activity_dain_4"
    },

    "day4_activity_dain_4": {
        name: "나",
        background: "assets/images/background/arcade.png",
        text: "*결국 내가 졌다. 다인이가 양 주먹을 불끈 쥐며 환호한다. 지긴 했지만… 저렇게 좋아하는 모습은 보기 좋다.*",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 5 } },
        next: "day4_activity_converge"
    },

    // --- 보건선생님: 미술관 데이트 (그림 감상, 인생 이야기, 가까워지는 순간) ---

    "day4_activity_nurse_1": {
        name: "보건선생님",
        text: "\"이 그림 좋지 않아? 색감이 참 따뜻해.\"",
        background: "assets/images/background/museum.png",
        character: "assets/images/characters/nurse_normal.png",
        next: "day4_activity_nurse_2"
    },

    "day4_activity_nurse_2": {
        name: "나",
        background: "assets/images/background/museum.png",
        character: "assets/images/characters/nurse_normal.png",
        text: "*미술관 안은 조용하고 넓었다. 선생님과 나란히 그림을 보며 천천히 걸었다. 이런 시간이 좋다.*",
        next: "day4_activity_nurse_3"
    },

    "day4_activity_nurse_3": {
        name: "보건선생님",
        background: "assets/images/background/museum.png",
        text: "\"나도 학생 때는 꿈이 많았어. 지금도 있긴 하지만… 조금 달라졌을 뿐이야.\"",
        character: "assets/images/characters/nurse_shy.png",
        stats: { Nurse: { affinity: 3 } },
        next: "day4_activity_nurse_4"
    },

    "day4_activity_nurse_4": {
        name: "나",
        background: "assets/images/background/museum.png",
        text: "*선생님이 한 점의 그림 앞에서 멈춰 섰다. 그림 속 풍경을 바라보는 선생님의 옆모습이… 묘하게 아름답다.*",
        character: "assets/images/characters/nurse_shy.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day4_activity_converge"
    },

    // --- 담임선생님: 카페 데이트 (꿈 이야기, 과거, 음식 나눠 먹기) ---

    "day4_activity_teacher_1": {
        name: "담임선생님",
        text: "\"너, 졸업하면 뭐 하고 싶어? 꿈 같은 거 있어?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/teacher_normal.png",
        next: "day4_activity_teacher_2"
    },

    "day4_activity_teacher_2": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/teacher_normal.png",
        text: "*카페에 마주 앉아 이야기를 나눈다. 선생님은 평소와 달리 부드러운 표정이다.*",
        next: "day4_activity_teacher_3"
    },

    "day4_activity_teacher_3": {
        name: "담임선생님",
        background: "assets/images/background/cafe.png",
        text: "\"나도 학생 때는 선생님이 되겠다는 생각 안 했어. 인생은 뜻대로 안 되거든. 근데 지금은… 나쁘지 않아.\"",
        character: "assets/images/characters/teacher_smile.png",
        stats: { Teacher: { affinity: 3 } },
        next: "day4_activity_teacher_4"
    },

    "day4_activity_teacher_4": {
        name: "나",
        background: "assets/images/background/cafe.png",
        text: "(선생님이 자기 케이크를 한 조각 잘라서 내 접시에 올려줬다. \"먹어봐, 여기 디저트 진짜 맛있어.\" 그 자연스러운 행동에 심장이 뛰었다.)",
        character: "assets/images/characters/teacher_smile.png",
        stats: { Teacher: { affinity: 5 } },
        next: "day4_activity_converge"
    },

    // =========================================================================
    // 6. 활동 수렴 지점 (1 노드)
    // =========================================================================

    "day4_activity_converge": {
        name: "나",
        character: null,
        text: "*시간이 정말 빠르게 흘렀다. 어느새 점심시간이 다 됐다.*",
        background: "assets/images/background/street.png",
        next: "day4_date_lunch"
    },

    // =========================================================================
    // 7. 점심 식사 — 확장 (10 노드)
    // =========================================================================

    "day4_date_lunch": {
        name: "나",
        character: null,
        text: "*근처 예쁜 카페에 들어갔다. 창가 자리에 마주 앉으니 더 설레는 건 기분 탓일까.*",
        background: "assets/images/background/cafe.png",
        next: "day4_lunch_menu"
    },

    "day4_lunch_menu": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "*메뉴판을 들여다본다. 파스타, 샌드위치, 브런치 세트… 뭘 시킬까.*",
        next: "day4_lunch_order"
    },

    "day4_lunch_order": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "\"나는 파스타로 할게. 뭐 먹을래?\"",
        next: "day4_lunch_order_react"
    },

    "day4_lunch_order_react": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "*상대방도 메뉴를 골랐다. 주문을 하고 나니 어색한 침묵이 잠깐 흐른다.*",
        next: "day4_lunch_awkward"
    },

    "day4_lunch_awkward": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "*뭔가 이야기를 꺼내야 할 것 같은데… 이럴 때 뭘 얘기해야 자연스러울까.*",
        next: "day4_lunch_funny"
    },

    "day4_lunch_funny": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "*음식이 나왔다. 내가 시킨 파스타가 생각보다 양이 엄청 많다. 상대방이 그걸 보고 웃음을 참지 못한다.*",
        next: "day4_lunch_funny_react"
    },

    "day4_lunch_funny_react": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "\"왜 웃어! 이 정도는 거뜬하다고!\"",
        next: "day4_lunch_share"
    },

    "day4_lunch_share": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "*결국 서로 음식을 나눠 먹게 됐다. 같은 접시에서 포크가 부딪힐 때마다 괜히 웃음이 난다.*",
        next: "day4_date_lunch_talk"
    },

    "day4_date_lunch_talk": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "*이야기꽃이 피었다. 같이 웃고, 같이 고민하고… 이런 게 행복이구나.*",
        next: "day4_lunch_learn"
    },

    "day4_lunch_learn": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "*대화를 하면 할수록 몰랐던 면을 알게 된다. 좋아하는 계절, 싫어하는 음식, 어릴 때 별명… 사소한 것들이 소중하게 느껴진다.*",
        next: "day4_date_lunch_choice"
    },

    // =========================================================================
    // 8. 점심 대화 선택 (5 노드)
    // =========================================================================

    "day4_date_lunch_choice": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "*뭔가 더 특별한 이야기를 꺼내볼까?*",
        choices: [
            {
                text: "\"나 사실… 전학 오기 전에 좀 외로웠어.\"",
                next: "day4_date_honest",
                setFlag: "day4_honest_talk"
            },
            {
                text: "\"이 학교에 와서 정말 좋은 사람들을 만났어.\"",
                next: "day4_date_grateful"
            }
        ]
    },

    "day4_date_honest": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "\"새로운 환경이 무서웠는데… 덕분에 이젠 매일이 기대돼.\"",
        next: "day4_date_honest_react"
    },

    "day4_date_honest_react": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "*상대방이 조용히 내 이야기를 들어주었다. 진심이 통한 걸까, 따뜻한 눈빛으로 고개를 끄덕인다.*",
        stats: { Seoyeon: { affinity: 3 }, Yuna: { affinity: 3 }, Dain: { affinity: 3 }, Nurse: { affinity: 3 }, Teacher: { affinity: 3 } },
        next: "day4_date_response"
    },

    "day4_date_grateful": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "\"특히… 지금 이 순간이 가장 좋아.\"",
        next: "day4_date_grateful_react"
    },

    "day4_date_grateful_react": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "*상대방이 살짝 눈을 피하며 미소를 짓는다. 분명 기뻐하는 것 같다.*",
        next: "day4_date_response"
    },

    // =========================================================================
    // 9. 반응 및 사진/특별한 순간 (5 노드)
    // =========================================================================

    "day4_date_response": {
        name: "나",
        background: "assets/images/background/cafe.png",
        character: null,
        text: "*상대방의 눈이 부드러워졌다. 뭔가 통한 것 같은 느낌이 든다.*",
        next: "day4_date_cafe_exit"
    },

    "day4_date_cafe_exit": {
        name: "나",
        character: null,
        text: "*카페를 나서자 따사로운 오후 햇살이 내리쬔다. 아까보다 거리가 더 가까워진 것 같다.*",
        background: "assets/images/background/street.png",
        next: "day4_date_photo_moment"
    },

    "day4_date_photo_moment": {
        name: "나",
        background: "assets/images/background/street.png",
        character: null,
        text: "*문득 이 순간을 남기고 싶다는 생각이 든다.*",
        choices: [
            {
                text: "\"우리 사진 한 장 찍을까?\"",
                next: "day4_date_photo_yes",
                stats: { Seoyeon: { affinity: 5 }, Yuna: { affinity: 5 }, Dain: { affinity: 5 }, Nurse: { affinity: 5 }, Teacher: { affinity: 5 } }
            },
            {
                text: "*마음속에 담아두자.*",
                next: "day4_date_photo_no",
                stats: { Seoyeon: { affinity: 3 }, Yuna: { affinity: 3 }, Dain: { affinity: 3 }, Nurse: { affinity: 3 }, Teacher: { affinity: 3 } }
            }
        ]
    },

    "day4_date_photo_yes": {
        name: "나",
        background: "assets/images/background/street.png",
        character: null,
        text: "*나란히 서서 셀카를 찍었다. 화면 속에 나란히 웃고 있는 두 사람. 이 사진, 오래오래 간직하고 싶다.*",
        next: "day4_date_ending_moment"
    },

    "day4_date_photo_no": {
        name: "나",
        background: "assets/images/background/street.png",
        character: null,
        text: "*사진보다 더 선명하게, 이 순간을 기억에 새긴다. 바람 냄새, 햇살의 온도, 옆에 있는 사람의 미소.*",
        next: "day4_date_ending_moment"
    },

    // =========================================================================
    // 10. 마무리 — 오후로의 전환 (3 노드)
    // =========================================================================

    "day4_date_ending_moment": {
        name: "나",
        background: "assets/images/background/street.png",
        character: null,
        text: "*나란히 걸으며 잠깐 침묵이 흐른다. 어색한 게 아니라, 편안한 침묵이다. 서로 말 안 해도 괜찮은 그런 사이가 된 것 같다.*",
        next: "day4_date_ending_feel"
    },

    "day4_date_ending_feel": {
        name: "나",
        background: "assets/images/background/street.png",
        character: null,
        text: "*오늘의 시간이 꿈처럼 느껴진다. 전학 와서 이렇게 좋은 날이 올 줄은… 진짜 몰랐어.*",
        next: "day4_date_transition"
    },

    "day4_date_transition": {
        name: "나",
        background: "assets/images/background/street.png",
        character: null,
        text: "*아직 오후가 남았다. 이 데이트는… 아직 끝나지 않았다.*",
        fade: true,
        next: "day4_afternoon_start"
    }

});
