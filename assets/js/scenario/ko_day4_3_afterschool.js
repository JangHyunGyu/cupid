/**
 * ============================================================================
 * CUPID - Day 4 Afterschool Scenario (Korean Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: ko_day4_3_afterschool.js
 * 언어: 한국어 (Korean)
 * 일차: Day 4 (4일차 - 토요일)
 * 시간대: Afterschool (오후 - 데이트 하이라이트)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 데이트의 하이라이트. 특별한 장소를 방문하고,
 * 석양을 배경으로 감정이 최고조에 달한다.
 * 고백을 할 것인지 선택하는 중요한 분기점.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 특별한 장소 방문 - 함께 추억 만들기
 * 2. 석양 씬 - 감정 최고조
 * 3. 고백 선택 - 마음을 전하는 순간
 * 
 *  설정 플래그 (Set Flags)
 * ----------------------------------------------------------------------------
 * day4_confessed       : 고백함
 * day4_confession_accepted : 고백 수락됨
 * day4_waited          : 고백을 미룸
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 고백 성공 시: 최고 호감도 히로인 +20
 * 고백 보류 시: +5
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
    // 오후 - 데이트 하이라이트
    // =========================================================================
    "day4_afternoon_start": {
        name: "나",
        text: "(카페를 나와 함께 거리를 걸었다. 어느새 오후가 되었다.)",
        background: "assets/images/background/street.png",
        bgm: "sunset2.mp3",
        sunset: true,
        next: "day4_afternoon_walk"
    },
    "day4_afternoon_walk": {
        name: "나",
        text: "(나란히 걷는 게 이렇게 좋은 거였나. 손끝이 스칠 때마다 심장이 쿵쾅거린다.)",
        next: "day4_afternoon_special"
    },
    "day4_afternoon_special": {
        name: "나",
        text: "(\"저기, 강변 공원 가볼래?\" 상대방이 먼저 제안했다.)",
        background: "assets/images/background/park.png",
        sunset: true,
        next: "day4_afternoon_park"
    },
    "day4_afternoon_park": {
        name: "나",
        text: "(강변 공원에 도착하니 석양이 물 위에 반짝이고 있었다. 마치 영화 속 한 장면 같았다.)",
        next: "day4_afternoon_sunset"
    },

    // =========================================================================
    // 석양 씬 - 감정 최고조
    // =========================================================================
    "day4_afternoon_sunset": {
        name: "나",
        text: "(석양빛이 그 사람의 얼굴을 비추고 있다. 이상하게 말이 나오질 않는다.)",
        bgm: "confession.mp3",
        sunset: true,
        next: "day4_afternoon_silence"
    },
    "day4_afternoon_silence": {
        name: "나",
        text: "(……)",
        next: "day4_afternoon_feeling"
    },
    "day4_afternoon_feeling": {
        name: "나",
        text: "(이 감정이 뭔지 이제는 확실히 알 것 같다. 전학 온 첫날부터 지금까지… 쭉 느끼고 있었던 거다.)",
        next: "day4_confession_choice"
    },

    // =========================================================================
    // 고백 선택
    // =========================================================================
    "day4_confession_choice": {
        name: "나",
        text: "(지금 이 순간… 마음을 전할까?)",
        choices: [
            {
                text: "\"할 말이 있어…\"  (고백한다)",
                next: "day4_confess",
                setFlag: "day4_confessed"
            },
            {
                text: "\"…이 풍경 진짜 예쁘다.\"  (아직은 아니야)",
                next: "day4_wait",
                setFlag: "day4_waited"
            }
        ]
    },

    // =========================================================================
    // 고백 루트
    // =========================================================================
    "day4_confess": {
        name: "나",
        text: "\"사실… 전학 오고 나서 매일 네 생각뿐이었어.\"",
        sunset: true,
        next: "day4_confess_2"
    },
    "day4_confess_2": {
        name: "나",
        text: "\"처음엔 그냥 좋은 사람이라고 생각했는데… 이제는 확실해.\"",
        next: "day4_confess_3"
    },
    "day4_confess_3": {
        name: "나",
        text: "\"나… 너를 좋아해.\"",
        next: "day4_confess_response"
    },
    "day4_confess_response": {
        name: "시스템",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_accept_seoyeon", character: "Seoyeon" },
            { next: "day4_accept_yuna", character: "Yuna" },
            { next: "day4_accept_dain", character: "Dain" },
            { next: "day4_accept_nurse", character: "Nurse" },
            { next: "day4_accept_teacher", character: "Teacher" }
        ]
    },

    // --- 고백 수락: 서연 ---
    "day4_accept_seoyeon": {
        name: "서연",
        text: "\"……나도. 나도 좋아해. 전학 온 첫날, 정문에서 처음 봤을 때부터.\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Seoyeon"],
        next: "day4_after_confess"
    },

    // --- 고백 수락: 유나 ---
    "day4_accept_yuna": {
        name: "유나",
        text: "\"……바보. 내가 먼저 말하려고 했는데.\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        stats: { Yuna: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Yuna"],
        next: "day4_after_confess"
    },

    // --- 고백 수락: 다인 ---
    "day4_accept_dain": {
        name: "다인",
        text: "\"……엥?! 진, 진짜?! 나도!! 나도 너 좋아해!! 우와아아!!\"",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        stats: { Dain: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Dain"],
        next: "day4_after_confess"
    },

    // --- 고백 수락: 보건선생님 ---
    "day4_accept_nurse": {
        name: "보건선생님",
        text: "\"…알고 있었어. 네 눈을 보면 다 알 수 있었거든. …나도 같은 마음이야.\"",
        character: "assets/images/characters/nurse_shy.png",
        sunset: true,
        stats: { Nurse: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Nurse"],
        next: "day4_after_confess"
    },

    // --- 고백 수락: 담임선생님 ---
    "day4_accept_teacher": {
        name: "담임선생님",
        text: "\"…하, 진짜 너는. 학생이 선생한테 이런 말 하면 안 되는 거 알지? …근데 나도 같은 마음이야, 바보.\"",
        character: "assets/images/characters/teacher_shy.png",
        sunset: true,
        stats: { Teacher: { affinity: 20 } },
        setFlags: ["day4_confession_accepted", "isDating_Teacher"],
        next: "day4_after_confess"
    },

    // =========================================================================
    // 고백 후
    // =========================================================================
    "day4_after_confess": {
        name: "나",
        text: "(석양 아래, 두 사람의 그림자가 하나로 겹쳐진다. 세상에서 가장 행복한 순간이었다.)",
        sunset: true,
        fade: true,
        next: "day4_night_start"
    },

    // =========================================================================
    // 고백 보류 루트
    // =========================================================================
    "day4_wait": {
        name: "나",
        text: "\"…이 풍경, 진짜 예쁘다.\"",
        sunset: true,
        next: "day4_wait_talk"
    },
    "day4_wait_talk": {
        name: "나",
        text: "\"…오늘 진짜 재밌었어. 고마워.\"",
        next: "day4_wait_response"
    },
    "day4_wait_response": {
        name: "시스템",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_wait_seoyeon", character: "Seoyeon" },
            { next: "day4_wait_yuna", character: "Yuna" },
            { next: "day4_wait_dain", character: "Dain" },
            { next: "day4_wait_nurse", character: "Nurse" },
            { next: "day4_wait_teacher", character: "Teacher" }
        ]
    },
    "day4_wait_seoyeon": {
        name: "서연",
        text: "\"나도! 또 만나자… 그치?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "day4_wait_end"
    },
    "day4_wait_yuna": {
        name: "유나",
        text: "\"…응. 나쁘지 않았어. …다음에 또 하자.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day4_wait_end"
    },
    "day4_wait_dain": {
        name: "다인",
        text: "\"당연 재밌었지!! 다음에 또 가자!!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day4_wait_end"
    },
    "day4_wait_nurse": {
        name: "보건선생님",
        text: "\"즐거운 시간이었어. …다음에 또 만날까?\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day4_wait_end"
    },
    "day4_wait_teacher": {
        name: "담임선생님",
        text: "\"…뭐, 나쁘지 않았네. 다음에 또 불러줘. 나가줄게.\"",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        next: "day4_wait_end"
    },
    "day4_wait_end": {
        name: "나",
        text: "(인사를 나누고 헤어졌다. 마음속에는… 하지 못한 말이 맴돌았다.)",
        sunset: true,
        fade: true,
        next: "day4_night_start"
    }
});
