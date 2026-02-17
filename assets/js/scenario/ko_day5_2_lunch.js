/**
 * ============================================================================
 * CUPID - Day 5 Lunch Scenario (Korean Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: ko_day5_2_lunch.js
 * 언어: 한국어 (Korean)
 * 일차: Day 5 (5일차 - 일요일)
 * 시간대: Lunch (점심 - 학교에서의 재회와 추억)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 주말 학교 정문에서 호감도가 가장 높은 히로인과 재회한다.
 * 함께 학교를 걸으며 처음 만났던 장소들을 다시 방문하고,
 * 옥상에서 미래에 대한 대화를 나누고 간단한 점심을 함께한다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 학교 정문 도착 - 전학 첫날의 추억
 * 2. 히로인과의 재회 - 호감도 최고 캐릭터 분기
 * 3. 학교 산책 - 복도, 교실, 캐릭터별 추억 장소
 * 4. 옥상 방문 - 풍경과 미래에 대한 대화
 * 5. 함께하는 점심 - 옥상에서의 식사와 특별한 순간
 * 6. 오후로의 전환 - 다가오는 중요한 순간의 예감
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
 * met_Seoyeon / met_Yuna / met_Dain / met_Nurse / met_Teacher
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 복도 추억 회상: 전체 히로인 +3
 * 캐릭터별 추억 장소: 해당 히로인 +3
 * 옥상 깊은 대화: 해당 히로인 +5
 * 점심 특별한 순간: 해당 히로인 +5
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
    // 1. 학교 정문 도착 (4 노드)
    // =========================================================================
    "day5_school_arrive": {
        name: "나",
        text: "(교문으로 들어선다. 일요일 학교는 조용하다.)",
        background: "assets/images/background/school.png",
        bgm: "date.mp3",
        next: "day5_school_arrive2"
    },
    "day5_school_arrive2": {
        name: "나",
        background: "assets/images/background/school.png",
        text: "(이번 주가 정말 빨리 지나갔다. 벌써 마지막 날이라니... 교정의 나무들이 바람에 살랑인다.)",
        next: "day5_school_arrive3"
    },
    "day5_school_arrive3": {
        name: "나",
        background: "assets/images/background/school.png",
        text: "(불과 며칠 전인데 까마득하게 느껴진다. 그때의 나는 긴장하고 불안했었지. 지금은 이렇게 달라졌다.)",
        next: "day5_school_arrive4"
    },
    "day5_school_arrive4": {
        name: "나",
        background: "assets/images/background/school.png",
        text: "(뒤를 돌아보니 저 멀리서 누군가 걸어오고 있다. 낯익은 모습이다.)",
        next: "day5_school_meet"
    },

    // =========================================================================
    // 2. 히로인과의 재회 - 호감도 분기 (16 노드)
    // =========================================================================
    "day5_school_meet": {
        name: "시스템",
        background: "assets/images/background/school.png",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_meet_seoyeon", character: "Seoyeon" },
            { next: "day5_meet_yuna", character: "Yuna" },
            { next: "day5_meet_dain", character: "Dain" },
            { next: "day5_meet_nurse", character: "Nurse" },
            { next: "day5_meet_teacher", character: "Teacher" }
        ]
    },

    // --- 서연 등장 ---
    "day5_meet_seoyeon": {
        name: "서연",
        text: "\"여기서 처음 만났었지? 그때 길 잃은 강아지 같았어, 후후.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day5_meet_seoyeon2"
    },
    "day5_meet_seoyeon2": {
        name: "서연",
        text: "\"근데 지금은… 달라 보여. 얼굴에 여유가 생겼달까? 좋은 변화야.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day5_react_seoyeon"
    },
    "day5_react_seoyeon": {
        name: "나",
        character: "assets/images/characters/seyoun_normal.png",
        text: "(서연이의 웃는 얼굴을 보니 가슴이 따뜻해진다. 이 학교에서 가장 처음 다가와준 사람이었지.)",
        next: "day5_seoyeon_d4_check"
    },
    "day5_seoyeon_d4_check": {
        name: "시스템",
        text: "",
        background: "assets/images/background/school.png",
        branches: [
            { next: "day5_seoyeon_d4_warmth", condition: "day4_hugged_seoyeon" },
            { next: "day5_seoyeon_d4_warmth_pinky", condition: "day4_pinky_seoyeon" },
            { next: "day5_outfit_reaction_check" }
        ]
    },
    "day5_seoyeon_d4_warmth": {
        name: "서연",
        text: "\"…있잖아. 어젯밤에 안아줬을 때… 정말 고마웠어. 덕분에 용기가 났거든.\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day5_outfit_reaction_check"
    },
    "day5_seoyeon_d4_warmth_pinky": {
        name: "서연",
        text: "\"어젯밤 새끼손가락 걸었던 거… 아직도 손끝이 따뜻해. 약속, 꼭 지켜줘.\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day5_outfit_reaction_check"
    },

    // --- 유나 등장 ---
    "day5_meet_yuna": {
        name: "유나",
        text: "\"…여기. 처음 봤을 때 기억나? …나는 기억해.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day5_meet_yuna2"
    },
    "day5_meet_yuna2": {
        name: "유나",
        text: "\"…네가 교문에 서 있었을 때, 좀 외로워 보였어. …나도 그랬으니까, 알아봤어.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day5_react_yuna"
    },
    "day5_react_yuna": {
        name: "나",
        character: "assets/images/characters/yuna_smile.png",
        text: "(유나가 이렇게 많은 말을 한 건 처음이다. 그만큼 오늘이 특별한 날이라는 뜻일까.)",
        next: "day5_yuna_d4_check"
    },
    "day5_yuna_d4_check": {
        name: "시스템",
        text: "",
        background: "assets/images/background/school.png",
        branches: [
            { next: "day5_yuna_d4_warmth", condition: "day4_held_yuna_hand" },
            { next: "day5_yuna_d4_warmth_ally", condition: "day4_yuna_ally" },
            { next: "day5_outfit_reaction_check" }
        ]
    },
    "day5_yuna_d4_warmth": {
        name: "유나",
        text: "\"…어젯밤에 손 잡아줘서 고마웠어. …따뜻했어.\"",
        character: "assets/images/characters/yuna_shy.png",
        stats: { Yuna: { affinity: 3 } },
        next: "day5_outfit_reaction_check"
    },
    "day5_yuna_d4_warmth_ally": {
        name: "유나",
        text: "\"…어제 내 편이 되어줘서. …잊지 않을게.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 3 } },
        next: "day5_outfit_reaction_check"
    },

    // --- 다인 등장 ---
    "day5_meet_dain": {
        name: "다인",
        text: "\"야! 학교 정문에 오니까 첫날 생각난다!! 그때 내가 배구공 날린 거 기억나?!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day5_meet_dain2"
    },
    "day5_meet_dain2": {
        name: "다인",
        text: "\"미안했었는데, 지금 생각하면 그게 인연이었나 봐! 안 맞았으면 말도 못 걸었을 텐데!!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day5_react_dain"
    },
    "day5_react_dain": {
        name: "나",
        character: "assets/images/characters/dain_normal.png",
        text: "(배구공에 맞은 건 아팠지만… 그 덕분에 다인이를 만났다면, 감사해야 하나.)",        next: "day5_dain_d4_check"
    },
    "day5_dain_d4_check": {
        name: "시스템",
        text: "",
        background: "assets/images/background/school.png",
        branches: [
            { next: "day5_dain_d4_warmth", condition: "day4_dain_tears" },
            { next: "day5_outfit_reaction_check" }
        ]
    },
    "day5_dain_d4_warmth": {
        name: "다인",
        text: "\"…어제 운 거 비밀이야!! 근데… 네 앞에서 울 수 있어서, 다행이었어.\"",
        character: "assets/images/characters/dain_shy.png",
        stats: { Dain: { affinity: 3 } },        next: "day5_outfit_reaction_check"
    },

    // --- 보건선생님 등장 ---
    "day5_meet_nurse": {
        name: "보건선생님",
        text: "\"주말에 학교에 오니까 기분이 묘하네. 이 학교에서 너를 만난 건… 운명이었을까.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day5_meet_nurse2"
    },
    "day5_meet_nurse2": {
        name: "보건선생님",
        text: "\"전학 온 첫날 보건실에 왔을 때, 긴장한 얼굴이 귀여웠어. 지금은 좀 의젓해졌네.\"",
        character: "assets/images/characters/nurse_shy.png",
        next: "day5_react_nurse"
    },
    "day5_react_nurse": {
        name: "나",
        character: "assets/images/characters/nurse_shy.png",
        text: "(사복 차림의 선생님이 낯설면서도 설렌다. 평소 가운 속에 가려진 모습이 이렇게 아름다울 줄이야.)",
        next: "day5_outfit_reaction_check"
    },

    // --- 담임선생님 등장 ---
    "day5_meet_teacher": {
        name: "담임선생님",
        text: "\"하, 주말에 학교 오니까 이상하네. 근데… 너랑 같이니까 나쁘지 않아.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day5_meet_teacher2"
    },
    "day5_meet_teacher2": {
        name: "담임선생님",
        text: "\"전학 온 첫날 교무실에서 처음 봤을 때, 불안한 눈이었는데. 지금은 완전히 다른 사람 같아.\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "day5_react_teacher"
    },
    "day5_react_teacher": {
        name: "나",
        character: "assets/images/characters/teacher_smile.png",
        text: "(칭찬을 듣는 건 드문 일이라 더 기쁘다. 선생님도 오늘은 부드러운 표정이다.)",
        next: "day5_outfit_reaction_check"
    },

    // =========================================================================
    // 2b. 복장 반응 체크 (2 노드)
    // =========================================================================
    "day5_outfit_reaction_check": {
        name: "시스템",
        text: "",
        background: "assets/images/background/school.png",
        branches: [
            { next: "day5_outfit_compliment", condition: "day5_outfit_special" },
            { next: "day5_walk_together" }
        ]
    },
    "day5_outfit_compliment": {
        name: "나",
        text: "(상대가 내 옷차림을 보더니 눈을 동그랗게 떴다. \"오늘 왜 이렇게 멋져?\" 라는 말에 괜히 뿌듯해진다.)",
        background: "assets/images/background/school.png",
        next: "day5_walk_together"
    },

    // =========================================================================
    // 3. 학교 산책 - 복도 (4 노드)
    // =========================================================================
    "day5_walk_together": {
        name: "나",
        character: null,
        text: "\"안으로 들어가 볼까? 추억의 장소들이 많잖아.\"",
        next: "day5_walk_enter"
    },
    "day5_walk_enter": {
        name: "나",
        character: null,
        text: "(나란히 학교 안으로 들어섰다. 일요일 학교는 텅 비어 있어서 우리 발소리만 울린다.)",
        background: "assets/images/background/school_hallway.png",
        next: "day5_corridor1"
    },
    "day5_corridor1": {
        name: "나",
        background: "assets/images/background/school_hallway.png",
        character: null,
        text: "(이 복도… 전학 온 첫날, 교실을 찾지 못해서 헤맸던 곳이다. 어디로 가야 할지 몰라 발이 떨어지지 않았었지.)",
        next: "day5_corridor2"
    },
    "day5_corridor2": {
        name: "나",
        background: "assets/images/background/school_hallway.png",
        character: null,
        text: "(그때 이 복도에서 누군가가 말을 걸어줬다. 그 작은 친절이 지금까지 이어진 거다.)",
        next: "day5_classroom_enter"
    },

    // =========================================================================
    // 3. 학교 산책 - 교실 (4 노드)
    // =========================================================================
    "day5_classroom_enter": {
        name: "나",
        character: null,
        text: "(교실 문을 열었다. 빈 교실에 햇살이 비스듬히 들어와 책상 위를 물들인다.)",
        background: "assets/images/background/room_school.png",
        next: "day5_classroom1"
    },
    "day5_classroom1": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(내 자리. 전학 와서 처음 앉았던 그 자리가 그대로 있다. 잠깐 다시 앉아봤다.)",
        next: "day5_classroom2"
    },
    "day5_classroom2": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "(이 자리에서 칠판을 올려다보면… 아, 그때와 같은 각도다. 이상하게 편안해진다.)",
        next: "day5_classroom3"
    },
    "day5_classroom3": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"여기서 참 많은 일이 있었지. 수업 시간에 졸다가 걸리기도 하고, 쪽지도 돌리고…\"",
        next: "day5_classroom_react"
    },

    // =========================================================================
    // 3. 학교 산책 - 교실 반응 분기 (5 노드)
    // =========================================================================
    "day5_classroom_react": {
        name: "시스템",
        background: "assets/images/background/room_school.png",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_classroom_seoyeon", character: "Seoyeon" },
            { next: "day5_classroom_yuna", character: "Yuna" },
            { next: "day5_classroom_dain", character: "Dain" },
            { next: "day5_classroom_nurse", character: "Nurse" },
            { next: "day5_classroom_teacher", character: "Teacher" }
        ]
    },
    "day5_classroom_seoyeon": {
        name: "서연",
        text: "\"맞아. 네가 처음 자기소개 했을 때, 나는 이미 '이 사람 괜찮다' 생각했거든. 학생회장의 직감이랄까.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day5_memory_spot_suggest"
    },
    "day5_classroom_yuna": {
        name: "유나",
        text: "\"…여기서 처음으로 눈이 마주쳤어. 창밖 보고 있었는데… 네가 나를 봤을 때, 심장이 뛰었어.\"",
        character: "assets/images/characters/yuna_shy.png",
        next: "day5_memory_spot_suggest"
    },
    "day5_classroom_dain": {
        name: "다인",
        text: "\"여기서 체육 수업 전에 스트레칭 했잖아!! 너 유연성 진짜 없었는데 ㅋㅋ 지금은 좀 나아졌어?\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day5_memory_spot_suggest"
    },
    "day5_classroom_nurse": {
        name: "보건선생님",
        text: "\"이 교실에 수업 참관 왔을 때, 네가 자꾸 보건실 쪽 창문을 보는 거 알았거든? 후후.\"",
        character: "assets/images/characters/nurse_shy.png",
        next: "day5_memory_spot_suggest"
    },
    "day5_classroom_teacher": {
        name: "담임선생님",
        text: "\"매일 이 교실에서 출석 부르면서 네 이름을 불렀는데. 슬슬 익숙해질 만하면… 벌써 마지막이네.\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "day5_memory_spot_suggest"
    },

    // =========================================================================
    // 3. 학교 산책 - 캐릭터별 추억 장소 (5 캐릭터 × 2 = 10 노드)
    // =========================================================================
    "day5_memory_spot_suggest": {
        name: "나",
        character: null,
        text: "\"가고 싶은 데 있어? 더 둘러보자.\"",
        next: "day5_memory_spot_branch"
    },
    "day5_memory_spot_branch": {
        name: "시스템",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_memory_seoyeon", character: "Seoyeon" },
            { next: "day5_memory_yuna", character: "Yuna" },
            { next: "day5_memory_dain", character: "Dain" },
            { next: "day5_memory_nurse", character: "Nurse" },
            { next: "day5_memory_teacher", character: "Teacher" }
        ]
    },

    // --- 서연: 정원 / 화단 ---
    "day5_memory_seoyeon": {
        name: "서연",
        text: "\"아! 잠깐, 정원 쪽으로 가보자. 내가 매일 물 주던 화단 기억나?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        background: "assets/images/background/park.png",
        next: "day5_memory_seoyeon2"
    },
    "day5_memory_seoyeon2": {
        name: "서연",
        background: "assets/images/background/park.png",
        text: "\"봐, 내가 심은 꽃들이 다 피었어. 네가 처음 여기 왔을 때 같이 물 줬었잖아. 그때부터… 느꼈어.\"",
        character: "assets/images/characters/seyoun_shy.png",
        stats: { Seoyeon: { affinity: 3 } },
        next: "day5_memory_common"
    },

    // --- 유나: 도서관 구역 ---
    "day5_memory_yuna": {
        name: "유나",
        text: "\"…잠깐. 저기 가볼래. 도서관.\"",
        character: "assets/images/characters/yuna_normal.png",
        background: "assets/images/background/library_old.png",
        next: "day5_memory_yuna2"
    },
    "day5_memory_yuna2": {
        name: "유나",
        background: "assets/images/background/library_old.png",
        text: "\"…여기서 처음으로 옆자리에 앉았었지. 네가 책 제목 물어봤을 때… 놀랐어. 아무도 말 건 적 없었으니까.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 3 } },
        next: "day5_memory_common"
    },

    // --- 다인: 체육관 ---
    "day5_memory_dain": {
        name: "다인",
        text: "\"잠깐!! 체육관 가자!! 첫날 여기서 사건이 일어났잖아!!\"",
        character: "assets/images/characters/dain_laugh.png",
        background: "assets/images/background/gym.png",
        next: "day5_memory_dain2"
    },
    "day5_memory_dain2": {
        name: "다인",
        background: "assets/images/background/gym.png",
        text: "\"여기서 내가 배구 연습하다가 공이 날아갔는데… 네 얼굴에 맞았지! 미안ㅋㅋ 근데 그때 화 안 내서 고마웠어.\"",
        character: "assets/images/characters/dain_shy.png",
        stats: { Dain: { affinity: 3 } },
        next: "day5_memory_common"
    },

    // --- 보건선생님: 보건실 ---
    "day5_memory_nurse": {
        name: "보건선생님",
        text: "\"보건실 한번 들러볼까? 네가 처음 온 날 기억이 새롭네.\"",
        character: "assets/images/characters/nurse_normal.png",
        background: "assets/images/background/nurse_room.jpg",
        next: "day5_memory_nurse2"
    },
    "day5_memory_nurse2": {
        name: "보건선생님",
        background: "assets/images/background/nurse_room.jpg",
        text: "\"전학 첫날 긴장해서 머리 아프다고 왔었잖아. 그때 네 이마에 손 올려줬는데… 네 얼굴이 새빨갛더라, 후후.\"",
        character: "assets/images/characters/nurse_shy.png",
        stats: { Nurse: { affinity: 3 } },
        next: "day5_memory_common"
    },

    // --- 담임선생님: 교탁 ---
    "day5_memory_teacher": {
        name: "담임선생님",
        text: "\"잠깐. 교탁 앞에 좀 서 봐. 전학 와서 자기소개 했던 그 자리야.\"",
        character: "assets/images/characters/teacher_normal.png",
        background: "assets/images/background/room_school.png",
        next: "day5_memory_teacher2"
    },
    "day5_memory_teacher2": {
        name: "담임선생님",
        background: "assets/images/background/room_school.png",
        text: "\"그때 목소리가 많이 떨렸는데… 내가 속으로 '이 녀석, 좀 걱정되네' 했어. 근데 지금은 달라졌잖아.\"",
        character: "assets/images/characters/teacher_smile.png",
        stats: { Teacher: { affinity: 3 } },
        next: "day5_memory_common"
    },

    // =========================================================================
    // 3. 학교 산책 - 공통 추억 마무리 (2 노드)
    // =========================================================================
    "day5_memory_common": {
        name: "나",
        background: "assets/images/background/school.png",
        character: null,
        text: "(이곳에서의 기억이 가슴 깊은 곳에서 올라온다. 처음엔 아무것도 몰랐는데, 하루하루가 쌓여서 지금의 나를 만들었다.)",
        next: "day5_memory_common2"
    },
    "day5_memory_common2": {
        name: "나",
        background: "assets/images/background/school.png",
        character: null,
        text: "(모든 장소에 추억이 있고, 그 추억에는 언제나 이 사람이 있었다. 그게 뭘 의미하는지, 나는 이제 안다.)",
        next: "day5_rooftop_suggest"
    },

    // =========================================================================
    // 4. 옥상 방문 - 올라가기 (3 노드)
    // =========================================================================
    "day5_rooftop_suggest": {
        name: "나",
        background: "assets/images/background/room_school.png",
        character: null,
        text: "\"저기… 옥상 한번 가볼래? 오늘 날씨도 좋고, 위에서 보면 경치가 좋을 것 같아.\"",
        next: "day5_rooftop_stairs1"
    },
    "day5_rooftop_stairs1": {
        name: "나",
        background: "assets/images/background/school_hallway.png",
        character: null,
        text: "(계단을 올라간다. 발소리 두 개가 텅 빈 계단통에 울려 퍼진다. 한 층, 두 층.)",
        next: "day5_rooftop_stairs2"
    },
    "day5_rooftop_stairs2": {
        name: "나",
        background: "assets/images/background/school_hallway.png",
        character: null,
        text: "(마지막 계단을 올라 옥상 문 앞에 섰다. 문 틈 사이로 바람이 새어 들어온다.)",
        next: "day5_rooftop_door"
    },

    // =========================================================================
    // 4. 옥상 방문 - 풍경 (3 노드)
    // =========================================================================
    "day5_rooftop_door": {
        name: "나",
        character: null,
        text: "(삐걱. 옥상 문을 열자 탁 트인 하늘이 펼쳐졌다. 바람이 기분 좋게 불어온다.)",
        background: "assets/images/background/top_school.png",
        next: "day5_rooftop_view1"
    },
    "day5_rooftop_view1": {
        name: "나",
        background: "assets/images/background/top_school.png",
        character: null,
        text: "(와… 여기서 보는 풍경이 이렇게 아름다운 거였나. 학교 운동장, 저 멀리 이어진 지붕들, 아까 걸었던 거리.)",
        next: "day5_rooftop_view2"
    },
    "day5_rooftop_view2": {
        name: "나",
        background: "assets/images/background/top_school.png",
        character: null,
        text: "(아니면… 이렇게 아름답게 느껴지는 건, 옆에 있는 사람 덕분일까.)",
        next: "day5_rooftop_lean"
    },

    // =========================================================================
    // 4. 옥상 - 난간에서 (2 노드)
    // =========================================================================
    "day5_rooftop_lean": {
        name: "나",
        background: "assets/images/background/top_school.png",
        character: null,
        text: "(나란히 난간에 기대어 섰다. 바람에 머리카락이 흩날린다.)",
        next: "day5_rooftop_silence"
    },
    "day5_rooftop_silence": {
        name: "나",
        background: "assets/images/background/top_school.png",
        character: null,
        text: "(한동안 아무 말 없이 풍경을 바라봤다. 이상하게 침묵이 어색하지 않다. 이 사람과는 말이 없어도 편하다.)",
        next: "day5_rooftop_talk_branch"
    },

    // =========================================================================
    // 4. 옥상 - 미래에 대한 깊은 대화 (캐릭터별 분기, 5 × 1 = 5 노드)
    // =========================================================================
    "day5_rooftop_talk_branch": {
        name: "시스템",
        background: "assets/images/background/top_school.png",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_rooftop_seoyeon", character: "Seoyeon" },
            { next: "day5_rooftop_yuna", character: "Yuna" },
            { next: "day5_rooftop_dain", character: "Dain" },
            { next: "day5_rooftop_nurse", character: "Nurse" },
            { next: "day5_rooftop_teacher", character: "Teacher" }
        ]
    },

    // --- 서연과의 옥상 대화 ---
    "day5_rooftop_seoyeon": {
        name: "서연",
        text: "\"나, 꿈이 있어. 이 학교를 졸업하고 나서도 누군가를 위해 일하는 사람이 되고 싶어. 학생회 하면서 그런 생각을 더 하게 됐거든.\"",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day5_rooftop_future_talk"
    },

    // --- 유나와의 옥상 대화 ---
    "day5_rooftop_yuna": {
        name: "유나",
        text: "\"…나는, 글을 쓰고 싶어. 사람한테 못 하는 말을 글로는 할 수 있으니까. …네가 읽어줬으면 좋겠어.\"",
        character: "assets/images/characters/yuna_shy.png",
        stats: { Yuna: { affinity: 5 } },
        next: "day5_rooftop_future_talk"
    },

    // --- 다인과의 옥상 대화 ---
    "day5_rooftop_dain": {
        name: "다인",
        text: "\"나 있지, 프로 선수가 되고 싶어! 전국대회 나가서 우승하고, TV에도 나오고! …근데 가끔 불안해. 진짜 할 수 있을까 하고.\"",
        character: "assets/images/characters/dain_sad.png",
        stats: { Dain: { affinity: 5 } },
        next: "day5_rooftop_future_talk"
    },

    // --- 보건선생님과의 옥상 대화 ---
    "day5_rooftop_nurse": {
        name: "보건선생님",
        text: "\"처음엔 병원 간호사가 되고 싶었어. 근데 학교에서 아이들을 돌보다 보니, 이곳이 내 자리인 것 같아. …너를 만난 것도 이곳이었고.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day5_rooftop_future_talk"
    },

    // --- 담임선생님과의 옥상 대화 ---
    "day5_rooftop_teacher": {
        name: "담임선생님",
        text: "\"처음 교사가 됐을 때는 자신이 없었어. 근데 너 같은 학생들을 만나니까… 이 길 선택하길 잘했다고 느껴. 솔직히.\"",
        character: "assets/images/characters/teacher_shy.png",
        stats: { Teacher: { affinity: 5 } },
        next: "day5_rooftop_future_talk"
    },

    // =========================================================================
    // 4. 옥상 - 주인공의 감정과 응답 (3 노드)
    // =========================================================================
    "day5_rooftop_future_talk": {
        name: "나",
        character: null,
        text: "\"나도… 솔직히 전학 오기 전엔 미래 같은 거 생각할 여유 없었어. 그냥 하루하루 버티는 느낌이었거든.\"",
        next: "day5_rooftop_feeling1"
    },
    "day5_rooftop_feeling1": {
        name: "나",
        character: null,
        text: "\"근데 여기 와서 달라졌어. 내일이 기대되기 시작했다. 누군가를 만나는 게 즐거워졌고… 매일 학교 오는 게 행복해졌어.\"",
        next: "day5_rooftop_feeling2"
    },
    "day5_rooftop_feeling2": {
        name: "나",
        character: null,
        text: "(그건… 전부 옆에 있는 이 사람 덕분이다. 아직 말로 다 표현하진 못하겠지만, 언젠가 꼭.)",
        next: "day5_lunch_suggest"
    },

    // =========================================================================
    // 5. 함께하는 점심 - 시작 (3 노드)
    // =========================================================================
    "day5_lunch_suggest": {
        name: "나",
        character: null,
        text: "\"배 안 고파? 나 아까 편의점에서 사 온 게 있는데. 여기서 먹을까?\"",
        next: "day5_lunch_setup"
    },
    "day5_lunch_setup": {
        name: "나",
        character: null,
        text: "(가방에서 삼각김밥이랑 음료수를 꺼냈다. 소박하지만, 이 풍경 앞에서 먹으면 뭐든 특별해질 것 같다.)",
        next: "day5_lunch_sit"
    },
    "day5_lunch_sit": {
        name: "나",
        character: null,
        text: "(난간 옆 그늘진 벽에 나란히 앉았다. 콘크리트 바닥이 좀 차갑지만, 옆 온기가 따뜻하다.)",
        next: "day5_lunch_eat1"
    },

    // =========================================================================
    // 5. 함께하는 점심 - 대화 (5 노드)
    // =========================================================================
    "day5_lunch_eat1": {
        name: "나",
        character: null,
        text: "(삼각김밥을 한 입 베어 물었다. 간단한 편의점 김밥인데, 오늘따라 유독 맛있게 느껴진다.)",
        next: "day5_lunch_talk1"
    },
    "day5_lunch_talk1": {
        name: "나",
        character: null,
        text: "\"있잖아, 이렇게 옥상에서 먹으니까 소풍 온 기분이다.\"",
        next: "day5_lunch_talk2"
    },
    "day5_lunch_talk2": {
        name: "나",
        character: null,
        text: "(옆에서 작게 웃는 소리가 들렸다. 그 웃음이 바람에 실려 어딘가로 퍼져간다.)",
        next: "day5_lunch_talk3"
    },
    "day5_lunch_talk3": {
        name: "나",
        character: null,
        text: "\"전학 오기 전엔 혼자 밥 먹는 게 당연했거든. 교실에서도, 집에서도. 그게 편한 줄 알았어.\"",
        next: "day5_lunch_talk4"
    },
    "day5_lunch_talk4": {
        name: "나",
        character: null,
        text: "\"근데 지금은… 누군가랑 같이 먹는 게 이렇게 좋은 건지 처음 알았어.\"",
        next: "day5_lunch_moment_branch"
    },

    // =========================================================================
    // 5. 함께하는 점심 - 캐릭터별 특별한 순간 (5 × 2 = 10 노드)
    // =========================================================================
    "day5_lunch_moment_branch": {
        name: "시스템",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_lunch_moment_seoyeon", character: "Seoyeon" },
            { next: "day5_lunch_moment_yuna", character: "Yuna" },
            { next: "day5_lunch_moment_dain", character: "Dain" },
            { next: "day5_lunch_moment_nurse", character: "Nurse" },
            { next: "day5_lunch_moment_teacher", character: "Teacher" }
        ]
    },

    // --- 서연 특별한 순간 ---
    "day5_lunch_moment_seoyeon": {
        name: "서연",
        text: "\"나도 그래. 학생회 일로 바빠서 밥도 대충 혼자 먹었거든. 근데 너랑 먹으니까… 시간이 천천히 가는 것 같아.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day5_lunch_touch_seoyeon"
    },
    "day5_lunch_touch_seoyeon": {
        name: "나",
        text: "(서연이가 살며시 내 어깨에 머리를 기댔다. 뺨이 발갛게 물든 채로. 심장이 멈출 것 같다.)",
        character: "assets/images/characters/seyoun_shy2.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day5_lunch_after"
    },

    // --- 유나 특별한 순간 ---
    "day5_lunch_moment_yuna": {
        name: "유나",
        text: "\"…나도. 혼자 먹는 게 편한 줄 알았는데… 네 옆에 있으면 밥이 더 맛있어.\"",
        character: "assets/images/characters/yuna_shy.png",
        next: "day5_lunch_touch_yuna"
    },
    "day5_lunch_touch_yuna": {
        name: "나",
        text: "(유나의 손이 슬며시 내 손 위에 올라왔다. 차갑던 손끝이 점점 따뜻해진다. 손을 감싸 쥐었다.)",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 5 } },
        next: "day5_lunch_after"
    },

    // --- 다인 특별한 순간 ---
    "day5_lunch_moment_dain": {
        name: "다인",
        text: "\"나 혼자 먹을 때는 빨리빨리 먹었거든?! 근데 너랑 먹으면 천천히 먹게 돼. 이상하지…?\"",
        character: "assets/images/characters/dain_shy.png",
        next: "day5_lunch_touch_dain"
    },
    "day5_lunch_touch_dain": {
        name: "나",
        text: "(다인이가 갑자기 내 팔을 꽉 잡았다. \"뭐야, 갑자기 말이 없으면 걱정되잖아!\" 하면서도 손을 놓지 않는다.)",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 5 } },
        next: "day5_lunch_after"
    },

    // --- 보건선생님 특별한 순간 ---
    "day5_lunch_moment_nurse": {
        name: "보건선생님",
        text: "\"어른이 되면 이런 시간이 점점 줄어들거든. 그래서… 지금 이 순간이 더 소중한 거야.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day5_lunch_touch_nurse"
    },
    "day5_lunch_touch_nurse": {
        name: "나",
        text: "(선생님이 음료수 캔을 내 볼에 살짝 갖다 댔다. \"차갑지?\" 하며 웃는 얼굴이 햇살보다 눈부시다.)",
        character: "assets/images/characters/nurse_shy.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day5_lunch_after"
    },

    // --- 담임선생님 특별한 순간 ---
    "day5_lunch_moment_teacher": {
        name: "담임선생님",
        text: "\"이렇게 학생이랑 밥 먹는 건 처음이야. 교사로서는 좀 그렇지만… 오늘은 그냥 한 사람으로 있고 싶어.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day5_lunch_touch_teacher"
    },
    "day5_lunch_touch_teacher": {
        name: "나",
        text: "(선생님이 미소를 지으며 내 머리를 한 번 쓱 쓸었다. 평소의 엄격함은 온데간데없고, 따뜻한 손길만 남았다.)",
        character: "assets/images/characters/teacher_shy.png",
        stats: { Teacher: { affinity: 5 } },
        next: "day5_lunch_after"
    },

    // =========================================================================
    // 5. 점심 마무리 (2 노드)
    // =========================================================================
    "day5_lunch_after": {
        name: "나",
        character: null,
        text: "(음료수를 마저 마셨다. 차가운 캔이 어느새 손 안에서 미지근해졌다. 시간이 이렇게 빨리 흘렀다니.)",
        next: "day5_lunch_cleanup"
    },
    "day5_lunch_cleanup": {
        name: "나",
        character: null,
        text: "(쓰레기를 챙겨서 자리를 정리했다. 옥상 바닥에 우리가 앉았던 자리에 햇살 자국이 남아 있다.)",
        next: "day5_pre_afternoon1"
    },

    // =========================================================================
    // 6. 오후 전환 시퀀스 (4 노드)
    // =========================================================================
    "day5_pre_afternoon1": {
        name: "나",
        character: null,
        text: "(해가 중천을 넘기기 시작했다. 아까보다 그림자가 짧아졌다.)",
        next: "day5_pre_afternoon2"
    },
    "day5_pre_afternoon2": {
        name: "나",
        character: null,
        text: "(오늘 하루가 아직 남았다. 아니… 정확히 말하면, 아직 하지 못한 말이 남았다.)",
        next: "day5_pre_afternoon3"
    },
    "day5_pre_afternoon3": {
        name: "나",
        character: null,
        text: "(가슴 안쪽에서 무언가가 꿈틀거린다. 이건… 용기를 내야 할 때가 다가오고 있다는 신호다.)",
        next: "day5_pre_afternoon4"
    },
    "day5_pre_afternoon4": {
        name: "나",
        character: null,
        text: "(옆에 서 있는 이 사람에게. 오늘, 반드시 전하고 싶은 마음이 있다.)",
        fade: true,
        next: "day5_afternoon_start"
    }
});
