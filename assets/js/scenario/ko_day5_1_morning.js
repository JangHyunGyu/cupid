/**
 * ============================================================================
 * CUPID - Day 5 Morning Scenario (Korean Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: ko_day5_1_morning.js
 * 언어: 한국어 (Korean)
 * 일차: Day 5 (5일차 - 일요일)
 * 시간대: Morning (아침)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 일요일 아침. 이야기의 마지막 날이 밝았다.
 * 고백한 경우 연인으로서, 아직인 경우 마지막 기회로 하루를 시작한다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 일요일 기상 - 마지막 날의 아침
 * 2. 메시지 확인 - 히로인과의 약속
 * 3. 특별한 장소로 출발
 * 
 * ============================================================================
 */

if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}
if (!SCENARIO[5]) {
    SCENARIO[5] = {};
}

Object.assign(SCENARIO[5], {

    // =========================================================================
    // 일요일 아침
    // =========================================================================
    "day5_start": {
        name: "나",
        text: "(일요일 아침. 창문으로 햇살이 쏟아진다. 오늘은… 특별한 하루가 될 것 같다.)",
        background: "assets/images/background/room_my.png",
        character: null,
        bgm: "morning.mp3",
        fade: true,
        next: "day5_morning_wake"
    },
    "day5_morning_wake": {
        name: "나",
        text: "(어제의 일이 아직도 생생하다. 오늘은 어떤 하루가 될까.)",
        next: "day5_morning_msg_branch"
    },

    // =========================================================================
    // 아침 메시지
    // =========================================================================
    "day5_morning_msg_branch": {
        name: "시스템",
        text: "",
        branches: [
            { next: "day5_morning_couple_msg", condition: "day4_confession_accepted" },
            { next: "day5_morning_pending_msg", condition: "day4_waited" },
            { next: "day5_morning_default_msg" }
        ]
    },

    // --- 연인 루트 ---
    "day5_morning_couple_msg": {
        name: "나",
        text: "(핸드폰을 확인하니 연인에게서 메시지가 와 있다. \"좋은 아침 ☀️ 오늘 어디서 만날까?\")",
        next: "day5_morning_couple_reply"
    },
    "day5_morning_couple_reply": {
        name: "나",
        text: "(\"학교 정문 앞에서 만나자. 보여주고 싶은 곳이 있어.\" 라고 답했다.)",
        next: "day5_morning_depart"
    },

    // --- 고백 보류 루트 ---
    "day5_morning_pending_msg": {
        name: "나",
        text: "(핸드폰에 메시지가 와 있다. \"오늘 시간 돼? 학교 앞에서 만나자!\")",
        next: "day5_morning_pending_reply"
    },
    "day5_morning_pending_reply": {
        name: "나",
        text: "(오늘이 마지막 기회다. 반드시 마음을 전하자. \"응, 가자!\")",
        next: "day5_morning_depart"
    },

    // --- 기본 루트 ---
    "day5_morning_default_msg": {
        name: "나",
        text: "(조용한 일요일 아침. 학교 앞을 산책하고 싶어졌다.)",
        next: "day5_morning_depart"
    },

    // =========================================================================
    // 출발
    // =========================================================================
    "day5_morning_depart": {
        name: "나",
        text: "(준비를 마치고 집을 나섰다. 봄바람이 기분 좋게 불어온다.)",
        fade: true,
        next: "day5_school_arrive"
    }
});
