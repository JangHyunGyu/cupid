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
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 약속 장소 도착 - 히로인과의 첫 만남
 * 2. 함께 걸으며 대화 - 서로를 더 알아가는 시간
 * 3. 점심 식사 - 분위기 있는 대화
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 최고 호감도 히로인: 대화 선택에 따라 +5 ~ +15
 * 
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[4]) {
    SCENARIO[4] = {};
}

Object.assign(SCENARIO[4], {

    // =========================================================================
    // 약속 장소 도착
    // =========================================================================
    "day4_arrive": {
        name: "나",
        text: "(약속 장소에 도착했다. 아직 시간이 조금 이르네.)",
        background: "assets/images/background/street.png",
        character: null,
        bgm: "date.mp3",
        next: "day4_arrive_wait"
    },
    "day4_arrive_wait": {
        name: "나",
        text: "(심장이 빠르게 뛴다. 평소에 이렇게 긴장한 적이 있었나…)",
        next: "day4_heroine_arrive"
    },

    // =========================================================================
    // 히로인 등장 (최고 호감도 기준)
    // =========================================================================
    "day4_heroine_arrive": {
        name: "시스템",
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

    // --- 서연 루트 ---
    "day4_meet_seoyeon": {
        name: "서연",
        text: "\"앗, 벌써 와 있었어? 나도 좀 일찍 나왔는데… 헤헤.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day4_seoyeon_react"
    },
    "day4_seoyeon_react": {
        name: "나",
        text: "(서연이가 웃으며 다가온다. 학교 밖에서 만나니… 평소와 다르게 보인다.)",
        next: "day4_seoyeon_compliment"
    },
    "day4_seoyeon_compliment": {
        name: "나",
        text: "(뭐라고 해야 하지?)",
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
        text: "\"에, 에이… 갑자기 그런 말 하면 어떡해… 고마워.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day4_date_walk"
    },
    "day4_seoyeon_happy": {
        name: "서연",
        text: "\"정말? 오늘 좀 신경 썼거든! 알아봐줘서 기쁘다~\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day4_date_walk"
    },

    // --- 유나 루트 ---
    "day4_meet_yuna": {
        name: "유나",
        text: "\"…왔어.\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/yuna_normal.png",
        next: "day4_yuna_react"
    },
    "day4_yuna_react": {
        name: "나",
        text: "(유나가 카페 앞에 서 있었다. 학교 밖에서 보니 분위기가 달라.)",
        next: "day4_yuna_compliment"
    },
    "day4_yuna_compliment": {
        name: "나",
        text: "(뭐라고 해야 하지?)",
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
        text: "\"……그런 말 처음 들어. …고마워.\"",
        character: "assets/images/characters/yuna_shy.png",
        next: "day4_date_walk"
    },
    "day4_yuna_cool": {
        name: "유나",
        text: "\"…방금 왔어. 들어가자.\"",
        next: "day4_date_walk"
    },

    // --- 다인 루트 ---
    "day4_meet_dain": {
        name: "다인",
        text: "\"야!! 여기여기!!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_laugh.png",
        next: "day4_dain_react"
    },
    "day4_dain_react": {
        name: "나",
        text: "(다인이가 손을 흔들며 뛰어온다. 학교 밖에서 만나니 분위기가 또 다르다.)",
        next: "day4_dain_compliment"
    },
    "day4_dain_compliment": {
        name: "나",
        text: "(뭐라고 해야 하지?)",
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
        text: "\"헤, 헤헤… 진짜?! 나 오늘 엄청 고민했거든!! 다행이다~!!\"",
        character: "assets/images/characters/dain_shy.png",
        next: "day4_date_walk"
    },
    "day4_dain_energy": {
        name: "다인",
        text: "\"완전 완벽했지!! 오늘 컨디션 최고야!! 자, 빨리 가자!!\"",
        next: "day4_date_walk"
    },

    // --- 보건선생님 루트 ---
    "day4_meet_nurse": {
        name: "보건선생님",
        text: "\"어머, 벌써 와 있었네? 오래 기다렸어?\"",
        background: "assets/images/background/museum.png",
        character: "assets/images/characters/nurse_normal.png",
        next: "day4_nurse_react"
    },
    "day4_nurse_react": {
        name: "나",
        text: "(미술관 입구에서 보건선생님이 웃으며 손을 흔들고 있다. 학교 밖에서 만나니까 왠지 분위기가 다르게 느껴진다.)",
        next: "day4_nurse_compliment"
    },
    "day4_nurse_compliment": {
        name: "나",
        text: "(뭐라고 해야 하지?)",
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
        text: "\"후후… 고마워. 오늘은 학생이 아니라 그냥 남자로 봐도 될까?\"",
        character: "assets/images/characters/nurse_shy.png",
        next: "day4_date_walk"
    },
    "day4_nurse_smile": {
        name: "보건선생님",
        text: "\"맞아, 나도 좀 긴장돼. 오늘은 선생님이 아니라 그냥 나야.\"",
        next: "day4_date_walk"
    },

    // --- 담임선생님 루트 ---
    "day4_meet_teacher": {
        name: "담임선생님",
        text: "\"오, 왔구나. 늦을 줄 알았는데 의외로 빠르네?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/teacher_normal.png",
        next: "day4_teacher_react"
    },
    "day4_teacher_react": {
        name: "나",
        text: "(담임선생님이 카페 앞에서 웃고 있다. 학교 밖에서 만나니 느낌이 달라서 순간 누구인지 못 알아볼 뻔했다.)",
        next: "day4_teacher_compliment"
    },
    "day4_teacher_compliment": {
        name: "나",
        text: "(뭐라고 해야 하지?)",
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
        text: "\"…뭐야, 갑자기. 칭찬하면 기분이 이상해지니까 그만해.\"",
        character: "assets/images/characters/teacher_shy.png",
        next: "day4_date_walk"
    },
    "day4_teacher_casual": {
        name: "담임선생님",
        text: "\"그치? 여기 커피가 맛있어. 자, 들어가자.\"",
        next: "day4_date_walk"
    },

    // =========================================================================
    // 공통 데이트 진행
    // =========================================================================
    "day4_date_walk": {
        name: "나",
        text: "(나란히 걸으며 이런저런 이야기를 나눴다. 학교에서와는 다른, 편안한 분위기.)",
        background: "assets/images/background/street.png",
        next: "day4_date_talk_1"
    },
    "day4_date_talk_1": {
        name: "나",
        text: "(평소에는 할 수 없었던 이야기들… 좋아하는 음악, 어릴 때 꿈, 사소한 취미.)",
        next: "day4_date_talk_2"
    },
    "day4_date_talk_2": {
        name: "나",
        text: "(이야기를 나눌수록 마음이 가까워지는 게 느껴진다. 이 시간이 영원했으면 좋겠다.)",
        next: "day4_date_lunch"
    },

    // =========================================================================
    // 점심 식사
    // =========================================================================
    "day4_date_lunch": {
        name: "나",
        text: "(근처 예쁜 카페에 들어갔다. 창가 자리에 마주 앉으니 더 설레는 건 기분 탓일까.)",
        background: "assets/images/background/cafe.png",
        next: "day4_date_lunch_talk"
    },
    "day4_date_lunch_talk": {
        name: "나",
        text: "(이야기꽃이 피었다. 같이 웃고, 같이 고민하고… 이런 게 행복이구나.)",
        next: "day4_date_lunch_choice"
    },
    "day4_date_lunch_choice": {
        name: "나",
        text: "(뭔가 더 특별한 이야기를 꺼내볼까?)",
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
        text: "\"새로운 환경이 무서웠는데… 덕분에 이젠 매일이 기대돼.\"",
        next: "day4_date_response"
    },
    "day4_date_grateful": {
        name: "나",
        text: "\"특히… 지금 이 순간이 가장 좋아.\"",
        next: "day4_date_response"
    },
    "day4_date_response": {
        name: "나",
        text: "(상대방의 눈이 부드러워졌다. 뭔가 통한 것 같은 느낌이 든다.)",
        fade: true,
        next: "day4_afternoon_start"
    }
});
