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
 * 전학 온 지 5일째, 주인공은 새로운 학교에서의 시간을 되돌아본다.
 * 전날 고백 결과에 따라 연인으로서 혹은 마지막 기회를 잡기 위해 하루를 시작한다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 일요일 기상 - 마지막 날의 아침, 지난 날들을 회상
 * 2. 거울 앞에서 - 전학 첫날과 달라진 자신을 느끼며
 * 3. 메시지 확인 - 히로인과의 약속 (커플/보류/기본 루트 분기)
 * 4. 외출 준비 - 복장 선택, 아침 식사, 마지막 점검
 * 5. 등교길 - 루트별 분기 (커플 동행/보류 긴장/혼자 회상)
 * 6. 학교 도착 - 전학 첫날의 추억, 다음 씬으로 전환
 * 
 *  조건 플래그 (Condition Flags)
 * ----------------------------------------------------------------------------
 * day4_confession_accepted : 4일차에 고백 성공 (커플 루트)
 * day4_waited              : 4일차에 고백 보류 (보류 루트)
 * isDating_Seoyeon         : 서연과 연인 관계
 * isDating_Yuna            : 유나와 연인 관계
 * isDating_Dain            : 다인과 연인 관계
 * isDating_Nurse           : 보건선생님과 연인 관계
 * isDating_Teacher         : 담임선생님과 연인 관계
 * 
 *  설정 플래그 (Set Flags)
 * ----------------------------------------------------------------------------
 * day5_outfit_casual       : 캐주얼 복장 선택
 * day5_outfit_special      : 신경 쓴 복장 선택
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 커플 메시지 수신 시: 해당 히로인 +3
 * 커플 등교 동행 시: 해당 히로인 +5
 * 
 *  노드 수: 약 80개
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
    // 1. 기상 시퀀스 (6 노드)
    // =========================================================================
    "day5_start": {
        name: "나",
        text: "(일요일 아침. 따스한 햇살이 커튼 사이로 스며든다.)",
        background: "assets/images/background/room_my.png",
        character: null,
        bgm: "morning.mp3",
        fade: true,
        next: "day5_morning_wake"
    },
    "day5_morning_wake": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(눈을 떴다. 알람 없이 저절로 깬 건 오랜만이다. 시계를 보니 아침 8시.)",
        next: "day5_morning_stretch"
    },
    "day5_morning_stretch": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(기지개를 켜며 천장을 바라본다. 오늘이 일요일이라는 게 실감이 안 난다.)",
        next: "day5_morning_think"
    },
    "day5_morning_think": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(이 학교에 전학 온 게 겨우 5일 전이라니. 마치 한 달은 된 것 같은데.)",
        next: "day5_morning_mirror"
    },
    "day5_morning_mirror": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(세수를 하고 거울 앞에 섰다. 거울 속의 나는… 전학 오기 전과는 뭔가 다른 얼굴을 하고 있다.)",
        next: "day5_morning_mirror2"
    },
    "day5_morning_mirror2": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(4일 동안 참 많은 일이 있었다. 새로운 반, 새로운 사람들… 그리고 특별한 만남들.)",
        next: "day5_morning_phone_check"
    },

    // =========================================================================
    // 2. 핸드폰 확인 → 루트 분기 (2 노드)
    // =========================================================================
    "day5_morning_phone_check": {
        name: "나",
        background: "assets/images/background/room_my.png",
        text: "(침대 위에 놓인 핸드폰을 집어 들었다. 화면에 알림이 떠 있다.)",
        next: "day5_morning_msg_branch"
    },
    "day5_morning_msg_branch": {
        name: "시스템",
        background: "assets/images/background/room_my.png",
        text: "",
        branches: [
            { next: "day5_couple_msg_branch", condition: "day4_confession_accepted" },
            { next: "day5_pending_msg_branch", condition: "day4_waited" },
            { next: "day5_default_msg_start" }
        ]
    },

    // =========================================================================
    // 3-A. 연인 루트: 캐릭터별 아침 메시지 (16 노드)
    // =========================================================================
    "day5_couple_msg_branch": {
        name: "시스템",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_couple_msg_seoyeon", character: "Seoyeon", condition: "isDating_Seoyeon" },
            { next: "day5_couple_msg_yuna", character: "Yuna", condition: "isDating_Yuna" },
            { next: "day5_couple_msg_dain", character: "Dain", condition: "isDating_Dain" },
            { next: "day5_couple_msg_nurse", character: "Nurse", condition: "isDating_Nurse" },
            { next: "day5_couple_msg_teacher", character: "Teacher", condition: "isDating_Teacher" }
        ]
    },

    // --- 서연 커플 메시지 ---
    "day5_couple_msg_seoyeon": {
        name: "서연",
        text: "\"좋은 아침 ☀️ 오늘 날씨 진짜 좋다! 학교 정원에 꽃이 피었을 것 같아. 같이 보러 갈래?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        silhouette: true,
        next: "day5_couple_react_seoyeon"
    },
    "day5_couple_react_seoyeon": {
        name: "나",
        character: "assets/images/characters/seyoun_laugh.png",
        silhouette: true,
        text: "(서연이 메시지를 보니 저절로 웃음이 나온다. 아침부터 꽃 이야기라니, 서연이답다.)",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day5_couple_reply_seoyeon"
    },
    "day5_couple_reply_seoyeon": {
        name: "나",
        character: "assets/images/characters/seyoun_laugh.png",
        silhouette: true,
        text: "(\"좋아! 학교 정문 앞에서 만나자. 보여주고 싶은 곳도 있어 😊\" 라고 답했다.)",
        next: "day5_morning_ready"
    },

    // --- 유나 커플 메시지 ---
    "day5_couple_msg_yuna": {
        name: "유나",
        text: "\"…일어났어? 오늘 학교 갈 거지? …나도 갈게. 정문 앞. 10시.\"",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        next: "day5_couple_react_yuna"
    },
    "day5_couple_react_yuna": {
        name: "나",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        text: "(유나답게 짧지만… 자세히 보면 \"나도 갈게\"라는 말에 설렘이 담겨 있다.)",
        stats: { Yuna: { affinity: 3 } },
        next: "day5_couple_reply_yuna"
    },
    "day5_couple_reply_yuna": {
        name: "나",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        text: "(\"응, 갈게. 기다리고 있어.\" 담담하게 답했지만, 심장이 빨리 뛴다.)",
        next: "day5_morning_ready"
    },

    // --- 다인 커플 메시지 ---
    "day5_couple_msg_dain": {
        name: "다인",
        text: "\"좋은 아침!! ☀️🏐 오늘 학교 가자!! 정문 앞에서 만나!! 뛰어올게!! 절대 늦지 마!!!\"",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        next: "day5_couple_react_dain"
    },
    "day5_couple_react_dain": {
        name: "나",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        text: "(…느낌표가 잔뜩. 아침부터 에너지가 넘치는 다인이. 그런데 이런 메시지를 보면 나까지 기운이 나네.)",
        stats: { Dain: { affinity: 3 } },
        next: "day5_couple_reply_dain"
    },
    "day5_couple_reply_dain": {
        name: "나",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        text: "(\"ㅋㅋ 알겠어! 안 늦을게. 뛰지 말고 조심해서 와!\" 라고 답장을 보냈다.)",
        next: "day5_morning_ready"
    },

    // --- 보건선생님 커플 메시지 ---
    "day5_couple_msg_nurse": {
        name: "보건선생님",
        text: "\"잘 잤어? 오늘 날씨가 좋아서 기분이 설레네. 학교 앞에서 볼까? …주말에 만나는 건 또 다른 느낌이지? 💕\"",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        next: "day5_couple_react_nurse"
    },
    "day5_couple_react_nurse": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        text: "(선생님이 보낸 하트 이모티콘에 얼굴이 빨개졌다. 학교 밖에서 만나는 건 확실히 다른 느낌이다.)",
        stats: { Nurse: { affinity: 3 } },
        next: "day5_couple_reply_nurse"
    },
    "day5_couple_reply_nurse": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        text: "(\"네, 기대돼요. 정문 앞에서 10시에 만나요!\" 존댓말로 쓰다가… 뭔가 어색하다.)",
        next: "day5_morning_ready"
    },

    // --- 담임선생님 커플 메시지 ---
    "day5_couple_msg_teacher": {
        name: "담임선생님",
        text: "\"오늘 학교 올 거지? 주말인데 뭐… 잠깐 볼 일이 있어서. 정문 앞에서 10시. 늦으면 혼난다.\"",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        next: "day5_couple_react_teacher"
    },
    "day5_couple_react_teacher": {
        name: "나",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        text: "(\"볼 일이 있어서\"라니. 쿨한 척 하지만 만나자고 먼저 연락한 건 선생님인데. 그런 선생님이 좋다.)",
        stats: { Teacher: { affinity: 3 } },
        next: "day5_couple_reply_teacher"
    },
    "day5_couple_reply_teacher": {
        name: "나",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        text: "(\"안 늦을게요. 꼭 갈게요!\" 라고 답장을 보내며 살짝 웃었다.)",
        next: "day5_morning_ready"
    },

    // =========================================================================
    // 3-B. 고백 보류 루트: 캐릭터별 힌트 메시지 (16 노드)
    // =========================================================================
    "day5_pending_msg_branch": {
        name: "시스템",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_pending_msg_seoyeon", character: "Seoyeon" },
            { next: "day5_pending_msg_yuna", character: "Yuna" },
            { next: "day5_pending_msg_dain", character: "Dain" },
            { next: "day5_pending_msg_nurse", character: "Nurse" },
            { next: "day5_pending_msg_teacher", character: "Teacher" }
        ]
    },

    // --- 서연 보류 메시지 ---
    "day5_pending_msg_seoyeon": {
        name: "서연",
        text: "\"오늘 시간 있어? 정원 손질 도와줄 사람이 필요한데… 아, 물론 강제는 아니야! 😅\"",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        next: "day5_pending_react_seoyeon"
    },
    "day5_pending_react_seoyeon": {
        name: "나",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        text: "(서연이가 나를 부른다. \"강제는 아니야\"라면서도… 가고 싶다는 마음은 확실하다.)",
        next: "day5_pending_reply_seoyeon"
    },
    "day5_pending_reply_seoyeon": {
        name: "나",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        text: "(오늘은 꼭 내 마음을 전해야 해. \"갈게! 정문 앞에서 만나자.\" 라고 답했다.)",
        next: "day5_morning_ready"
    },

    // --- 유나 보류 메시지 ---
    "day5_pending_msg_yuna": {
        name: "유나",
        text: "\"…오늘 학교. 올 수 있어? …할 말이 있어.\"",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        next: "day5_pending_react_yuna"
    },
    "day5_pending_react_yuna": {
        name: "나",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        text: "(\"할 말이 있어\"라니. 심장이 쿵 뛰었다. 혹시 유나도 나한테…?)",
        next: "day5_pending_reply_yuna"
    },
    "day5_pending_reply_yuna": {
        name: "나",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        text: "(나도 할 말이 있다. \"응, 갈게.\" 간결하게 답하고 핸드폰을 내려놓았다.)",
        next: "day5_morning_ready"
    },

    // --- 다인 보류 메시지 ---
    "day5_pending_msg_dain": {
        name: "다인",
        text: "\"야! 오늘 학교 올래?! 연습 끝나고 잠깐만 시간 돼? 중요한 거야!!\"",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        next: "day5_pending_react_dain"
    },
    "day5_pending_react_dain": {
        name: "나",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        text: "(\"중요한 거\"라고 했다. 다인이가 진지하게 말하는 건 드문 일인데. 무슨 일일까.)",
        next: "day5_pending_reply_dain"
    },
    "day5_pending_reply_dain": {
        name: "나",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        text: "(그리고 나도… 오늘 꼭 하고 싶은 말이 있다. \"갈게!! 기다려!\" 라고 답했다.)",
        next: "day5_morning_ready"
    },

    // --- 보건선생님 보류 메시지 ---
    "day5_pending_msg_nurse": {
        name: "보건선생님",
        text: "\"오늘 혹시 학교에 올 일 있어? 보건실 정리 좀 해야 하는데… 같이 와주면 좋겠다.\"",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        next: "day5_pending_react_nurse"
    },
    "day5_pending_react_nurse": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        text: "(주말에 보건실 정리라… 핑계 같기도 하지만, 만날 수 있다면 이유는 상관없다.)",
        next: "day5_pending_reply_nurse"
    },
    "day5_pending_reply_nurse": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        text: "(오늘, 꼭 마음을 전하자. \"갈게요! 정문 앞에서 만나요.\" 라고 답했다.)",
        next: "day5_morning_ready"
    },

    // --- 담임선생님 보류 메시지 ---
    "day5_pending_msg_teacher": {
        name: "담임선생님",
        text: "\"오늘 학교에 잠깐 올 수 있어? 서류 정리 좀 도와줄래. …다른 뜻은 없으니까 이상한 생각 하지 마.\"",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        next: "day5_pending_react_teacher"
    },
    "day5_pending_react_teacher": {
        name: "나",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        text: "(\"다른 뜻은 없다\"는 말이 오히려 의미심장하게 느껴진다. 선생님도 마찬가지인 걸까.)",
        next: "day5_pending_reply_teacher"
    },
    "day5_pending_reply_teacher": {
        name: "나",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        text: "(오늘이 지나면 기회가 없을지도 모른다. \"갈게요!\" 라고 답장을 보냈다.)",
        next: "day5_morning_ready"
    },

    // =========================================================================
    // 3-C. 기본 루트: 메시지 없음 (6 노드)
    // =========================================================================
    "day5_default_msg_start": {
        name: "나",
        text: "(핸드폰 화면을 켰지만… 새 메시지는 없다.)",
        next: "day5_default_msg_scroll"
    },
    "day5_default_msg_scroll": {
        name: "나",
        text: "(대화 목록을 스크롤해 본다. 며칠 동안 나눈 대화들이 쭉 이어져 있다.)",
        next: "day5_default_msg_reflect"
    },
    "day5_default_msg_reflect": {
        name: "나",
        text: "(전학 와서 여러 사람들을 만났다. 서연, 유나, 다인, 보건선생님, 담임선생님…)",
        next: "day5_default_msg_reflect2"
    },
    "day5_default_msg_reflect2": {
        name: "나",
        text: "(다들 따뜻하게 대해줬는데… 결국 확실하게 마음을 전하지 못했다.)",
        next: "day5_default_msg_resolve"
    },
    "day5_default_msg_resolve": {
        name: "나",
        text: "(…아니, 아직 끝이 아니야. 오늘은 일요일. 학교에 가면 누군가를 만날 수 있을지도.)",
        next: "day5_default_msg_decide"
    },
    "day5_default_msg_decide": {
        name: "나",
        text: "(마지막 날이니까. 학교 주변이라도 산책하자. 뭔가 달라질 수도 있으니까.)",
        next: "day5_morning_ready"
    },

    // =========================================================================
    // 4. 외출 준비 - 복장 선택 / 아침 식사 / 점검 (8 노드)
    // =========================================================================
    "day5_morning_ready": {
        name: "나",
        character: null,
        text: "(이제 준비를 해야 한다. 옷장 앞에 섰다.)",
        next: "day5_morning_closet"
    },
    "day5_morning_closet": {
        name: "나",
        character: null,
        text: "(일요일이니까 교복은 안 입어도 되는데… 뭘 입을까.)",
        next: "day5_outfit_choice"
    },
    "day5_outfit_choice": {
        name: "나",
        character: null,
        text: "(오늘 뭘 입고 나갈까?)",
        choices: [
            {
                text: "깔끔한 캐주얼 (편하고 자연스럽게)",
                next: "day5_outfit_casual",
                setFlag: "day5_outfit_casual"
            },
            {
                text: "살짝 신경 쓴 코디 (오늘은 특별하니까)",
                next: "day5_outfit_special",
                setFlag: "day5_outfit_special"
            }
        ]
    },
    "day5_outfit_casual": {
        name: "나",
        character: null,
        text: "(깨끗한 셔츠에 청바지. 편하면서도 단정한 느낌이다. 역시 자연스러운 게 나답지.)",
        next: "day5_breakfast"
    },
    "day5_outfit_special": {
        name: "나",
        character: null,
        text: "(평소보다 좀 더 신경 써서 골랐다. 거울 앞에서 한 번 더 확인한다. …괜찮은 것 같다.)",
        next: "day5_breakfast"
    },
    "day5_breakfast": {
        name: "나",
        character: null,
        text: "(간단하게 토스트를 구워 먹었다. 일요일 아침, 조용한 부엌. 밖에서 새소리가 들린다.)",
        next: "day5_outfit_check"
    },
    "day5_outfit_check": {
        name: "나",
        character: null,
        text: "(거울 속 내 모습을 마지막으로 확인한다. 전학 첫날과는 확실히 다른 눈빛이다.)",
        next: "day5_morning_items"
    },
    "day5_morning_items": {
        name: "나",
        character: null,
        text: "(지갑, 핸드폰, 열쇠. 준비 완료. 현관문 앞에 섰다.)",
        next: "day5_morning_depart"
    },

    // =========================================================================
    // 5. 출발 → 등교길 루트 분기
    // =========================================================================
    "day5_morning_depart": {
        name: "나",
        character: null,
        text: "(문을 열고 밖으로 나섰다. 봄바람이 기분 좋게 불어온다.)",
        background: "assets/images/background/street.png",
        fade: true,
        next: "day5_walk_route_branch"
    },
    "day5_walk_route_branch": {
        name: "시스템",
        background: "assets/images/background/street.png",
        text: "",
        branches: [
            { next: "day5_walk_couple_branch", condition: "day4_confession_accepted" },
            { next: "day5_walk_pending_start", condition: "day4_waited" },
            { next: "day5_walk_default_start" }
        ]
    },

    // =========================================================================
    // 5-A. 등교길 - 연인 루트 (22 노드)
    // =========================================================================
    "day5_walk_couple_branch": {
        name: "시스템",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_walk_couple_seoyeon", character: "Seoyeon", condition: "isDating_Seoyeon" },
            { next: "day5_walk_couple_yuna", character: "Yuna", condition: "isDating_Yuna" },
            { next: "day5_walk_couple_dain", character: "Dain", condition: "isDating_Dain" },
            { next: "day5_walk_couple_nurse", character: "Nurse", condition: "isDating_Nurse" },
            { next: "day5_walk_couple_teacher", character: "Teacher", condition: "isDating_Teacher" }
        ]
    },

    // --- 서연과 함께 걷기 ---
    "day5_walk_couple_seoyeon": {
        name: "서연",
        text: "\"여기! 여기!!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day5_walk_seoyeon_2"
    },
    "day5_walk_seoyeon_2": {
        name: "나",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "(약속 장소에 서연이가 이미 와 있었다. 햇살 아래 서 있는 서연이가 눈부시다.)",
        next: "day5_walk_seoyeon_talk"
    },
    "day5_walk_seoyeon_talk": {
        name: "서연",
        text: "\"오늘 날씨 진짜 좋다. 같이 걸으니까 더 좋고. 봄에는 이 길에 벚꽃이 핀다던데, 알아?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day5_walk_seoyeon_react"
    },
    "day5_walk_seoyeon_react": {
        name: "나",
        character: "assets/images/characters/seyoun_normal.png",
        text: "(서연이와 나란히 걷는다. 따로 말하지 않아도 자연스럽게 보폭이 맞춰진다.)",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day5_walk_couple_common"
    },

    // --- 유나와 함께 걷기 ---
    "day5_walk_couple_yuna": {
        name: "나",
        text: "(약속 장소에 도착하니 유나가 벽에 기대서 있었다. 이어폰 한쪽을 귀에 꽂은 채.)",
        character: "assets/images/characters/yuna_normal.png",
        next: "day5_walk_yuna_2"
    },
    "day5_walk_yuna_2": {
        name: "유나",
        text: "\"…왔어.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day5_walk_yuna_talk"
    },
    "day5_walk_yuna_talk": {
        name: "나",
        character: "assets/images/characters/yuna_normal.png",
        text: "(유나가 이어폰 한쪽을 빼서 내게 내밀었다. 아무 말 없이 같이 들으라는 뜻이다.)",
        next: "day5_walk_yuna_react"
    },
    "day5_walk_yuna_react": {
        name: "나",
        character: "assets/images/characters/yuna_normal.png",
        text: "(이어폰을 나눠 끼고 나란히 걸었다. 말은 없지만, 이 침묵이 불편하지 않다. 오히려 좋다.)",
        stats: { Yuna: { affinity: 5 } },
        next: "day5_walk_couple_common"
    },

    // --- 다인과 함께 걷기 ---
    "day5_walk_couple_dain": {
        name: "다인",
        text: "\"야!! 여기야 여기!! 빨리 와!!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day5_walk_dain_2"
    },
    "day5_walk_dain_2": {
        name: "나",
        character: "assets/images/characters/dain_laugh.png",
        text: "(다인이가 저 멀리서 두 팔을 흔들고 있다. 아침부터 저 에너지는 대체 어디서 나오는 걸까.)",
        next: "day5_walk_dain_talk"
    },
    "day5_walk_dain_talk": {
        name: "다인",
        text: "\"일요일에 학교 가는 건 좀 이상하긴 한데, 너랑 같이니까 소풍 느낌이다! 가자가자!!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day5_walk_dain_react"
    },
    "day5_walk_dain_react": {
        name: "나",
        character: "assets/images/characters/dain_laugh.png",
        text: "(다인이의 손에 이끌려 걸었다. 어느새 나까지 웃고 있었다. 이 에너지는 전염되나 보다.)",
        stats: { Dain: { affinity: 5 } },
        next: "day5_walk_couple_common"
    },

    // --- 보건선생님과 함께 걷기 ---
    "day5_walk_couple_nurse": {
        name: "나",
        text: "(약속 장소에 도착하니 선생님이 사복 차림으로 서 있었다. 학교에서 볼 때와는 또 다른 느낌이다.)",
        character: "assets/images/characters/nurse_normal.png",
        next: "day5_walk_nurse_2"
    },
    "day5_walk_nurse_2": {
        name: "보건선생님",
        text: "\"왔구나. 주말에 보니까 또 새롭네. 평소 가운 입은 나만 봤으니까.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day5_walk_nurse_talk"
    },
    "day5_walk_nurse_talk": {
        name: "보건선생님",
        text: "\"이 길로 가면 학교 가는 지름길이야. …아는 사람이 없는 길이기도 하고.\"",
        character: "assets/images/characters/nurse_shy.png",
        next: "day5_walk_nurse_react"
    },
    "day5_walk_nurse_react": {
        name: "나",
        character: "assets/images/characters/nurse_shy.png",
        text: "(살짝 수줍어하는 선생님의 표정이 새롭다. 나란히 걷는 것만으로도 심장이 뛴다.)",
        stats: { Nurse: { affinity: 5 } },
        next: "day5_walk_couple_common"
    },

    // --- 담임선생님과 함께 걷기 ---
    "day5_walk_couple_teacher": {
        name: "나",
        text: "(약속 장소에 도착하니 선생님이 캐주얼 차림으로 서 있었다. 교실에서 보던 엄격한 모습과는 딴판이다.)",
        character: "assets/images/characters/teacher_normal.png",
        next: "day5_walk_teacher_2"
    },
    "day5_walk_teacher_2": {
        name: "담임선생님",
        text: "\"늦을 줄 알았는데 시간 딱 맞게 왔네. …칭찬이야, 일단.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day5_walk_teacher_talk"
    },
    "day5_walk_teacher_talk": {
        name: "담임선생님",
        text: "\"주말에 같이 걷는 건 처음이네. …학교에서랑은 좀 다르지? 난 지금… 선생님이 아니라 그냥 한 사람이야.\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "day5_walk_teacher_react"
    },
    "day5_walk_teacher_react": {
        name: "나",
        character: "assets/images/characters/teacher_smile.png",
        text: "(\"그냥 한 사람\"이라. 그 말에 가슴이 뜨거워졌다. 이렇게 솔직한 선생님은 처음 본다.)",
        stats: { Teacher: { affinity: 5 } },
        next: "day5_walk_couple_common"
    },

    // --- 커플 공통 ---
    "day5_walk_couple_common": {
        name: "나",
        character: null,
        text: "(나란히 걸으며 지난 며칠간의 이야기를 나누었다. 처음 만났을 때 이야기, 웃겼던 일들, 가슴 뛰었던 순간들.)",
        next: "day5_walk_couple_common2"
    },
    "day5_walk_couple_common2": {
        name: "나",
        character: null,
        text: "(어느새 학교가 보이기 시작했다. 작별이 아쉬울 줄 알았는데, 오늘은 함께하는 하루의 시작이다.)",
        next: "day5_arrive_start"
    },

    // =========================================================================
    // 5-B. 등교길 - 보류 루트 (8 노드)
    // =========================================================================
    "day5_walk_pending_start": {
        name: "나",
        text: "(집을 나서서 학교 쪽으로 걷기 시작했다.)",
        next: "day5_walk_pending_think"
    },
    "day5_walk_pending_think": {
        name: "나",
        text: "(어제 고백하지 못한 게 자꾸 머릿속에 맴돈다. 오늘은… 오늘은 반드시.)",
        next: "day5_walk_pending_plan"
    },
    "day5_walk_pending_plan": {
        name: "나",
        text: "(뭐라고 말하지? \"좋아해\"? \"사귀자\"? 아니, 자연스럽게 분위기를 보고…)",
        next: "day5_walk_pending_nervous"
    },
    "day5_walk_pending_nervous": {
        name: "나",
        text: "(아, 벌써 손이 떨린다. 걸음을 옮길수록 심장이 빨라진다.)",
        next: "day5_walk_pending_resolve"
    },
    "day5_walk_pending_resolve": {
        name: "나",
        text: "(괜찮아. 4일 동안 함께한 시간들이 있잖아. 그 시간들이 나에게 용기를 준다.)",
        next: "day5_walk_pending_memory"
    },
    "day5_walk_pending_memory": {
        name: "나",
        text: "(첫날 어색했던 인사, 함께 웃었던 점심시간, 방과후의 대화… 모든 순간이 소중했다.)",
        next: "day5_walk_pending_ready"
    },
    "day5_walk_pending_ready": {
        name: "나",
        text: "(그래, 후회하지 않으려면 오늘 말해야 해.)",
        next: "day5_walk_pending_almost"
    },
    "day5_walk_pending_almost": {
        name: "나",
        text: "(저 앞에 학교가 보인다. 심호흡을 한 번 크게 했다.)",
        next: "day5_arrive_start"
    },

    // =========================================================================
    // 5-C. 등교길 - 기본 루트 (5 노드)
    // =========================================================================
    "day5_walk_default_start": {
        name: "나",
        text: "(혼자 걷는 일요일 아침 거리. 평소 같으면 이 시간에 아직 자고 있었을 텐데.)",
        next: "day5_walk_default_reflect"
    },
    "day5_walk_default_reflect": {
        name: "나",
        text: "(전학 오기 전에는 일요일 아침에 집에서 뒹굴거리는 게 전부였다.)",
        next: "day5_walk_default_change"
    },
    "day5_walk_default_change": {
        name: "나",
        text: "(그런데 지금은 달라졌다. 일요일에도 학교에 가고 싶다는 생각을 하게 될 줄이야.)",
        next: "day5_walk_default_people"
    },
    "day5_walk_default_people": {
        name: "나",
        text: "(서연이의 다정함, 유나의 신비로움, 다인이의 밝음, 보건선생님의 따스함, 담임선생님의 진심… 다 소중한 인연이었다.)",
        next: "day5_walk_default_arrive"
    },
    "day5_walk_default_arrive": {
        name: "나",
        text: "(저 앞에 학교 건물이 보인다. 전학 첫날 봤던 그 풍경이다.)",
        next: "day5_arrive_start"
    },

    // =========================================================================
    // 6. 학교 도착 - 공통 (4 노드)
    // =========================================================================
    "day5_arrive_start": {
        name: "나",
        character: null,
        text: "(학교 정문 앞에 섰다.)",
        background: "assets/images/background/school.png",
        next: "day5_arrive_nostalgia"
    },
    "day5_arrive_nostalgia": {
        name: "나",
        background: "assets/images/background/school.png",
        character: null,
        text: "(이 정문… 5일 전, 처음 이 학교에 왔을 때도 이 자리에 섰었다.)",
        next: "day5_arrive_firstday"
    },
    "day5_arrive_firstday": {
        name: "나",
        background: "assets/images/background/school.png",
        character: null,
        text: "(그때는 모든 게 낯설었다. 새로운 학교, 새로운 교실, 모르는 얼굴들. 긴장으로 발이 떨어지지 않았는데.)",
        next: "day5_arrive_now"
    },
    "day5_arrive_now": {
        name: "나",
        background: "assets/images/background/school.png",
        character: null,
        text: "(지금은 다르다. 이곳에 내가 아는 사람들이 있고, 내가 돌아올 곳이 있다. 정문을 지나 안으로 들어갔다.)",
        fade: true,
        next: "day5_school_arrive"
    }
});
