/**
 * ============================================================================
 * CUPID - Day 1 Night Scenario (Korean Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: ko_day1_4_night.js
 * 언어: 한국어 (Korean)
 * 일차: Day 1 (1일차)
 * 시간대: Night (밤)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 전학 첫날을 마무리하며 자신의 방에서 히로인들과 메시지를 주고받는 단계입니다.
 * 플레이어가 낮 동안 획득한 연락처를 바탕으로 대화를 나누며 호감도를 높일 수 있으며,
 * 하루를 종료하고 2일차로 전환되는 시스템 로직이 포함되어 있습니다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 방으로 귀가 - 하루를 되돌아보는 주인공의 독백
 * 2. 하루 회상 - 만났던 캐릭터들에 대한 감상
 * 3. 일기 작성 (선택) - 오늘 하루를 기록
 * 4. 메시지 보내기 - 연락처가 있는 캐릭터에게 메시지 발송 (선택형 브랜칭)
 * 5. 답장 수신 - 보낸 메시지 내용 및 호감도 상태에 따른 답장 확인
 * 6. 호감도 확인 - 현재까지 쌓인 캐릭터별 호감도 리스트 보기
 * 7. 취침 준비 - 창 밖 풍경, 내일에 대한 기대
 * 8. 심야 서프라이즈 메시지 - 호감도 최고 캐릭터의 깜짝 연락
 * 9. 취침 및 일자 전환 - Day 2 아침으로 게임 상태 이동 (changeDay: 2)
 * 
 *  조건 플래그 설명 (Condition Flags)
 * ----------------------------------------------------------------------------
 * has_any_contact      : 최소 한 명 이상의 연락처를 확보했는지 확인
 * has_number_*         : 특정 히로인의 연락처를 가지고 있는지 확인
 * sent_msg_day1_*      : 오늘 해당 히로인에게 이미 메시지를 보냈는지 확인 (중복 발송 방지)
 * ate_lunch_seoyeon    : 서연과 점심을 먹었는지 여부 (메시지 분기용)
 * helped_seoyeon       : 서연의 일을 도와주었는지 여부 (메시지 분기용)
 * dated_dain_day1      : 다인과 데이트(떡볶이 등)를 했는지 여부 (메시지 분기용)
 * 
 *  설정 플래그 설명 (Set Flags)
 * ----------------------------------------------------------------------------
 * sent_msg_day1_*      : 해당 히로인에게 메시지를 보냈음을 기록
 * wrote_diary_day1     : 일기를 작성했음을 기록
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 답장 수신 시 각 히로인의 호감도가 소폭(+3 ~ +5) 또는 대폭 변화
 * 
 *  노드 수: 약 80개
 * 
 *  진입/퇴장
 * ----------------------------------------------------------------------------
 * Entry: after_home
 * Exit:  day1_end → changeDay: 2, next: "day2_start"
 * 
 *  특이 사항
 * ----------------------------------------------------------------------------
 * - night: true - 밤 분위기 연출용 속성
 * - changeDay: 2 - 게임 시스템상의 날짜를 변경하는 핵심 속성
 * 
 * ============================================================================
 */

// SCENARIO 전역 객체 초기화
if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}

// Day 1 시나리오 그룹 초기화
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

/**
 * [Day 1 - Night] 씬 데이터 정의
 */
Object.assign(SCENARIO[1], {

    // =========================================================================
    // 1. 귀가 — 집으로 돌아오는 길 (6 노드)
    // =========================================================================

    "after_home": {
        name: "나",
        text: "(어둠이 깔린 거리를 걷는다. 가로등 불빛이 길 위에 길게 그림자를 만들어낸다.)",
        background: "assets/images/background/street.png",
        bgm: "night1.mp3",
        character: null,
        night: true,
        next: "after_home_walk"
    },
    "after_home_walk": {
        name: "나",
        text: "(이 동네도 어느새 조금은 익숙해진 것 같아. 편의점 옆 골목을 지나면 우리 집이고... 저 자판기도 아까 본 적 있어.)",
        background: "assets/images/background/street.png",
        night: true,
        next: "after_home_neighborhood"
    },
    "after_home_neighborhood": {
        name: "나",
        text: "(조용한 주택가. 어딘가에서 저녁 반찬 냄새가 풍겨온다. 낯선 동네인데... 왜 이렇게 편안한 기분이 들지?)",
        background: "assets/images/background/street.png",
        night: true,
        next: "after_home_arrive"
    },
    "after_home_arrive": {
        name: "나",
        text: "(집 앞에 도착했다. 주머니에서 열쇠를 꺼내 현관문을 연다. 부모님은 아직 안 계신 것 같아.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "after_home_2"
    },
    "after_home_2": {
        name: "나",
        text: "(방 안에 불을 켰다. 침대에 털썩 눕는다. 낯선 천장이 오늘따라 포근하게 느껴지는 건, 기분 탓일까...)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "after_home_settle"
    },
    "after_home_settle": {
        name: "나",
        text: "(교복을 벗고 편한 옷으로 갈아입었다. 가방을 내려놓고, 책상 위에 오늘 받은 유인물들을 정리한다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "after_home_3"
    },
    "after_home_3": {
        name: "나",
        text: "(내일은 어떤 일들이 기다리고 있을까? 묘한 설렘에 쉽게 잠이 올 것 같지 않아.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_reflect_start"
    },

    // =========================================================================
    // 2. 하루 되돌아보기 — 만났던 인물만 회상 (조건 분기)
    // =========================================================================

    "night_reflect_start": {
        name: "나",
        text: "(천장을 바라보며 오늘 하루를 떠올린다. 전학 첫날치고는... 정말 많은 일이 있었어.)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "night_reflect_seoyeon", condition: "met_seoyeon" },
            { next: "night_reflect_yuna", condition: "met_yuna" },
            { next: "night_reflect_dain", condition: "met_dain" },
            { next: "night_reflect_nurse", condition: "met_nurse" },
            { next: "night_reflect_teacher", condition: "met_teacher" },
            { next: "night_reflect_end" }
        ]
    },
    "night_reflect_seoyeon": {
        name: "나",
        text: "(서연이... 밝고 다정한 아이였어. 처음 보는 나한테도 스스럼없이 다가와줬지. 같은 반이라 앞으로도 많이 볼 텐데, 왠지 기대가 돼.)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "night_reflect_yuna", condition: "met_yuna" },
            { next: "night_reflect_dain", condition: "met_dain" },
            { next: "night_reflect_nurse", condition: "met_nurse" },
            { next: "night_reflect_teacher", condition: "met_teacher" },
            { next: "night_reflect_end" }
        ]
    },
    "night_reflect_yuna": {
        name: "나",
        text: "(유나... 신비로운 분위기의 소녀. 말 수는 적었지만, 그 눈빛이 자꾸 떠올라. 무슨 생각을 하고 있었을까... 왠지 더 알고 싶어.)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "night_reflect_dain", condition: "met_dain" },
            { next: "night_reflect_nurse", condition: "met_nurse" },
            { next: "night_reflect_teacher", condition: "met_teacher" },
            { next: "night_reflect_end" }
        ]
    },
    "night_reflect_dain": {
        name: "나",
        text: "(다인이... 에너지가 넘치는 아이. 같이 있으면 절대 심심하지 않을 것 같아. 배구하는 모습이 정말 멋있었어.)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "night_reflect_nurse", condition: "met_nurse" },
            { next: "night_reflect_teacher", condition: "met_teacher" },
            { next: "night_reflect_end" }
        ]
    },
    "night_reflect_nurse": {
        name: "나",
        text: "(보건실 선생님은... 뭐랄까, 묘한 매력이 있었어. 괜히 한 번 더 들러보고 싶은 곳이 됐네.)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "night_reflect_teacher", condition: "met_teacher" },
            { next: "night_reflect_end" }
        ]
    },
    "night_reflect_teacher": {
        name: "나",
        text: "(담임선생님은 은근히 챙겨주셔서 좋았어. 이런 분이 담임이라 다행이야.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_reflect_end"
    },
    "night_reflect_end": {
        name: "나",
        text: "(이 학교, 생각보다 나쁘지 않아. 내일은 어떤 일이 생길까...)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_diary_choice"
    },

    // =========================================================================
    // 3. 일기 작성 (선택) — 오늘 하루 기록 (4 노드)
    // =========================================================================

    "night_diary_choice": {
        name: "나",
        text: "(책상 서랍에서 새 노트가 보인다. 전학 기념으로 엄마가 넣어주신 건가...)",
        background: "assets/images/background/room_my.png",
        night: true,
        choices: [
            { text: "오늘 있었던 일을 적어본다.", next: "night_diary_write_1" },
            { text: "그냥 넘어간다.", next: "night_home" }
        ]
    },
    "night_diary_write_1": {
        name: "나",
        text: "(펜을 들고 첫 페이지를 열었다. '○월 ○일. 전학 첫날. 새로운 학교는 생각보다 괜찮았다.')",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_diary_write_2"
    },
    "night_diary_write_2": {
        name: "나",
        text: "(일기를 썼다. 전학 온 첫날... 새로운 학교에서 여러 사람을 만났다. 어떤 인연이 될지 아직 모르겠지만, 나쁘지 않은 하루였다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_diary_write_3"
    },
    "night_diary_write_3": {
        name: "나",
        text: "('내일은 이 사람들과 더 가까워질 수 있을까? 기대된다.' ...펜을 내려놓고 노트를 닫았다. 쓰고 나니 기분이 좀 정리되는 것 같아.)",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "wrote_diary_day1",
        next: "night_home"
    },

    // =========================================================================
    // 4. 스마트폰 확인 — 메시지 허브 (3 노드)
    // =========================================================================

    "night_home": {
        name: "나",
        text: "(잠들기 전, 습관적으로 스마트폰을 확인한다.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        branches: [
            { next: "night_goodnight_start", excludeCondition: "has_any_contact" },
            { next: "night_home_check_contact" }
        ]
    },
    "night_home_check_contact": {
        name: "나",
        character: null,
        text: "(오늘 연락처를 교환했던 사람들... 누구에게 먼저 메시지를 보내볼까?)",
        background: "assets/images/background/room_my.png",
        night: true,
        choices: [
            { text: "서연이에게 메시지를 보낸다.", next: "night_message_seyoun", condition: "has_number_seyoun", excludeCondition: "sent_msg_day1_seyoun" },
            { text: "유나에게 메시지를 보낸다.", next: "night_message_yuna", condition: "has_number_yuna", excludeCondition: "sent_msg_day1_yuna" },
            { text: "다인이에게 메시지를 보낸다.", next: "night_message_dain", condition: "has_number_dain", excludeCondition: "sent_msg_day1_dain" },
            { text: "보건선생님께 메시지를 보낸다.", next: "night_message_nurse", condition: "has_number_nurse", excludeCondition: "sent_msg_day1_nurse" },
            { text: "담임선생님께 메시지를 보낸다.", next: "night_message_teacher", condition: "has_number_teacher", excludeCondition: "sent_msg_day1_teacher" },
            { text: "호감도 확인하기", next: "day1_check_affinity" },
            { text: "그만 보내고 잠을 잔다.", next: "night_goodnight_start" }
        ]
    },
    "day1_check_affinity": {
        name: "시스템",
        text: "현재 캐릭터들과의 호감도 상태입니다.{affinity_list}",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_home_check_contact"
    },

    // =========================================================================
    // 5. 담임선생님 메시지 — 따뜻한 교류 (6 노드)
    // =========================================================================

    "night_message_teacher": {
        name: "나",
        character: "assets/images/characters/teacher_normal.png",
        text: "(담임선생님께 메시지를 보냈다. '선생님, 오늘 챙겨주셔서 감사해요. 덕분에 첫날 잘 적응한 것 같아요!')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day1_teacher",
        next: "night_message_teacher_reply"
    },
    "night_message_teacher_reply": {
        name: "담임선생님",
        text: "(다정한 답장이 왔다.) '어머, {name}! 전학 첫날이라 힘들었을 텐데 이런 메시지까지 보내주다니 기특하네.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        stats: { Teacher: { affinity: 3 } },
        next: "night_message_teacher_extra_1"
    },
    "night_message_teacher_extra_1": {
        name: "담임선생님",
        text: "'그런데 오늘 수업 시간에 네가 한 표정이 있었는데... 뭔가 재밌는 생각 하고 있었지? 선생님 다 봤다~'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        next: "night_message_teacher_extra_2"
    },
    "night_message_teacher_extra_2": {
        name: "나",
        character: "assets/images/characters/teacher_smile.png",
        text: "(어... 들켰나? 답장을 보낸다. '아, 그게... 교실이 전 학교랑 달라서 신기했어요!')",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_message_teacher_extra_3"
    },
    "night_message_teacher_extra_3": {
        name: "담임선생님",
        text: "'하하, 그렇구나~ 어쨌든 내일부터가 진짜 시작이니까, 몸 관리 잘 하고 푹 쉬어. 내일 보자!'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/teacher_normal.png",
        night: true,
        next: "night_message_teacher_extra_4"
    },
    "night_message_teacher_extra_4": {
        name: "나",
        character: "assets/images/characters/teacher_normal.png",
        text: "(따뜻한 분이시네... 담임선생님이 이런 분이라 다행이야. 스마트폰을 내려놓으며 빙긋 웃었다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_home_check_contact"
    },

    // =========================================================================
    // 6. 서연 메시지 — 후속 대화 포함 (12 노드)
    // =========================================================================

    "night_message_seyoun": {
        name: "나",
        character: null,
        text: "(서연이에게 어떤 메시지를 보낼까?)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "night_message_seyoun_lunch", condition: "ate_lunch_seoyeon" },
            { next: "night_message_seyoun_after", condition: "helped_seoyeon" },
            { next: "night_message_seyoun_generic" }
        ]
    },
    "night_message_seyoun_lunch": {
        name: "나",
        text: "(서연이에게 메시지를 보냈다. '오늘 같이 점심 먹어서 정말 좋았어. 고마워, 서연아.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day1_seyoun",
        next: "night_message_seyoun_reply_lunch"
    },
    "night_message_seyoun_after": {
        name: "나",
        text: "(서연이에게 메시지를 보냈다. '오늘 학생회 일 돕는 거 즐거웠어. 힘든 건 없었어? 내일 봐!')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day1_seyoun",
        next: "night_message_seyoun_reply_generic"
    },
    "night_message_seyoun_generic": {
        name: "나",
        text: "(서연이에게 메시지를 보냈다. '오늘 하루 잘 보냈어? 내일 학교에서 보자.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day1_seyoun",
        next: "night_message_seyoun_reply_generic"
    },
    "night_message_seyoun_reply_lunch": {
        name: "서연",
        text: "(징~ 즉각적인 답장이 왔다.) '정말? 다행이다! 맛있게 먹어줘서 내가 더 고마워. 내일도 기대해줘!'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_laugh.png",
        night: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "night_message_seyoun_followup"
    },
    "night_message_seyoun_reply_generic": {
        background: "assets/images/background/room_my.png",
        affinityChar: "Seoyeon",
        night: true,
        affinityBranches: [
            { minAffinity: 15, next: "night_message_seyoun_reply_high" },
            { minAffinity: 0, next: "night_message_seyoun_reply_standard" },
            { minAffinity: -100, next: "night_message_seyoun_reply_low" }
        ]
    },
    "night_message_seyoun_reply_standard": {
        name: "서연",
        text: "(징~ 즉각적인 답장이 왔다.) '나도 정말 즐거웠어! {name} 덕분에 든든해. 내일 학교에서 보자~'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_normal.png",
        night: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "night_message_seyoun_followup"
    },
    "night_message_seyoun_reply_high": {
        name: "서연",
        text: "(하트 이모티콘과 함께 온 답장.) '있잖아... 오늘 너랑 같이 보낸 시간, 자꾸 생각나서 큰일이야. 꿈에서라도 보고 싶어.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        stats: { Seoyeon: { affinity: 5 } },
        next: "night_message_seyoun_followup"
    },
    "night_message_seyoun_reply_low": {
        name: "서연",
        text: "(잠시 후 도착한 짧은 답장.) '아... 응. 내일 학교에서 보자.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_normal.png",
        night: true,
        stats: { Seoyeon: { affinity: -5 } },
        next: "night_home_check_contact"
    },
    "night_message_seyoun_followup": {
        name: "나",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "(서연이의 답장을 보고 한참을 들여다봤다. 뭔가 더 보내고 싶은데...)",
        background: "assets/images/background/room_my.png",
        night: true,
        choices: [
            { text: "'내일 뭐 먹고 싶어?' 라고 보낸다.", next: "night_message_seyoun_followup_food" },
            { text: "'잘 자, 서연아.' 라고 보낸다.", next: "night_message_seyoun_followup_goodnight" },
            { text: "더 보내지 않는다.", next: "night_home_check_contact" }
        ]
    },
    "night_message_seyoun_followup_food": {
        name: "서연",
        text: "(바로 답장.) '오 벌써 내일 점심 걱정? 귀여워ㅋㅋ 내일 봐바, 깜짝 도시락 싸올지도?'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_laugh.png",
        night: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "night_message_seyoun_followup_end"
    },
    "night_message_seyoun_followup_goodnight": {
        name: "서연",
        text: "(잠시 후 답장.) '응... 잘 자, {name}. 좋은 꿈 꿔.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "night_message_seyoun_followup_end"
    },
    "night_message_seyoun_followup_end": {
        name: "나",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "(서연이와의 대화가 이렇게 자연스러울 줄이야. 첫날부터 이런 친구가 생기다니... 기분이 좋아.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_home_check_contact"
    },

    // =========================================================================
    // 7. 유나 메시지 — 수수께끼 메시지 포함 (9 노드)
    // =========================================================================

    "night_message_yuna": {
        name: "나",
        character: null,
        text: "(유나에게 메시지를 보냈다. '오늘 즐거웠어. 잘 자.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day1_yuna",
        next: "night_message_yuna_reply"
    },
    "night_message_yuna_reply": {
        background: "assets/images/background/room_my.png",
        affinityChar: "Yuna",
        night: true,
        affinityBranches: [
            { minAffinity: 10, next: "night_message_yuna_reply_high" },
            { minAffinity: 0, next: "night_message_yuna_reply_standard" },
            { minAffinity: -100, next: "night_message_yuna_reply_low" }
        ]
    },
    "night_message_yuna_reply_standard": {
        name: "유나",
        text: "(잠시 후 도착한 답장.) '...응. 너도 잘 자. 내일 학교에서 봐, {name}.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        stats: { Yuna: { affinity: 3 } },
        next: "night_message_yuna_cryptic"
    },
    "night_message_yuna_reply_high": {
        name: "유나",
        text: "(잠시 후 도착한 답장.) '오늘... 응, 고마웠어. 덕분에 조금 웃을 수 있었던 것 같아. 잘 자.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        stats: { Yuna: { affinity: 5 } },
        next: "night_message_yuna_cryptic"
    },
    "night_message_yuna_reply_low": {
        name: "유나",
        text: "(답장이 없다. 읽음 표시만 떠 있을 뿐이다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        stats: { Yuna: { affinity: -5 } },
        next: "night_home_check_contact"
    },
    "night_message_yuna_cryptic": {
        name: "유나",
        text: "(추가 메시지가 도착했다.) '...그런데 {name}. 혹시 오늘 밤, 별이 보이면 세 번째 별을 봐줘. 이유는 나중에.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "night_message_yuna_cryptic_react"
    },
    "night_message_yuna_cryptic_react": {
        name: "나",
        character: "assets/images/characters/yuna_normal.png",
        text: "(세 번째 별...? 무슨 뜻일까. 유나는 가끔 이런 수수께끼 같은 말을 하는구나.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_message_yuna_cryptic_choice"
    },
    "night_message_yuna_cryptic_choice": {
        name: "나",
        character: "assets/images/characters/yuna_normal.png",
        text: "(뭐라고 답장할까?)",
        background: "assets/images/background/room_my.png",
        night: true,
        choices: [
            { text: "'알겠어, 꼭 볼게.' 라고 보낸다.", next: "night_message_yuna_cryptic_reply" },
            { text: "'왜? 무슨 뜻이야?' 라고 보낸다.", next: "night_message_yuna_cryptic_ask" }
        ]
    },
    "night_message_yuna_cryptic_reply": {
        name: "나",
        character: "assets/images/characters/yuna_normal.png",
        text: "('알겠어. 꼭 볼게.' 라고 답장했다. ...정말로 창밖을 보니 별이 몇 개 떠 있다. 세 번째 별은... 저건가?)",
        background: "assets/images/background/room_my.png",
        night: true,
        stats: { Yuna: { affinity: 3 } },
        next: "night_message_yuna_cryptic_end"
    },
    "night_message_yuna_cryptic_ask": {
        name: "유나",
        text: "(답장.) '...지금 말하면 소원이 안 이루어져. 그냥 봐줘.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "night_message_yuna_cryptic_end"
    },
    "night_message_yuna_cryptic_end": {
        name: "유나",
        text: "(마지막 답장.) '...봤어? 그럼 됐어. 좋은 꿈 꿀 거야, 아마.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        next: "night_home_check_contact"
    },

    // =========================================================================
    // 8. 다인 메시지 — 셀카 & 내일 도전 포함 (9 노드)
    // =========================================================================

    "night_message_dain": {
        name: "나",
        character: null,
        text: "(다인이에게 어떤 메시지를 보낼까?)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "night_message_dain_date", condition: "dated_dain_day1" },
            { next: "night_message_dain_generic" }
        ]
    },
    "night_message_dain_date": {
        name: "나",
        text: "(다인이에게 메시지를 보냈다. '오늘 떡볶이 진짜 맛있었어! 다음에 또 가자ㅎㅎ')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day1_dain",
        next: "night_message_dain_reply_date"
    },
    "night_message_dain_generic": {
        name: "나",
        text: "(다인이에게 메시지를 보냈다. '오늘 연습하는 거 멋있더라! 내일 봐.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day1_dain",
        next: "night_message_dain_reply_generic"
    },
    "night_message_dain_reply_date": {
        name: "다인",
        text: "(활기찬 답장이 즉시 왔다.) '그치?! 내가 맛집은 다 꿰고 있다니까! 다음엔 순대도 추가다!'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        stats: { Dain: { affinity: 3 } },
        next: "night_message_dain_selfie"
    },
    "night_message_dain_reply_generic": {
        background: "assets/images/background/room_my.png",
        affinityChar: "Dain",
        night: true,
        affinityBranches: [
            { minAffinity: 15, next: "night_message_dain_reply_high" },
            { minAffinity: -100, next: "night_message_dain_reply_standard" }
        ]
    },
    "night_message_dain_reply_standard": {
        name: "다인",
        text: "(활기찬 답장이 즉시 왔다.) '오~ 지켜보고 있었냐? 부끄럽게! 하하, 내일은 더 멋진 모습 보여줄게. 잘 자, {name}!'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_normal.png",
        night: true,
        stats: { Dain: { affinity: 3 } },
        next: "night_message_dain_selfie"
    },
    "night_message_dain_reply_high": {
        name: "다인",
        text: "(활기찬 답장이 즉시 왔다.) '내 활약에 벌써 반한 거야? 후후, 내일은 더 반하게 만들어줄게! 꿈에 나 나와도 놀라지 마~'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        stats: { Dain: { affinity: 5 } },
        next: "night_message_dain_selfie"
    },
    "night_message_dain_selfie": {
        name: "다인",
        text: "(사진 한 장이 도착했다. 체육관에서 브이를 하며 찍은 셀카다.) '오늘의 나! 멋지지?ㅋㅋ'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "night_message_dain_selfie_react"
    },
    "night_message_dain_selfie_react": {
        name: "나",
        character: "assets/images/characters/dain_laugh.png",
        text: "(다인이 셀카... 에너지가 사진에서도 넘쳐흐른다. 나도 모르게 웃음이 나왔어.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_message_dain_challenge"
    },
    "night_message_dain_challenge": {
        name: "다인",
        text: "(추가 메시지.) '아 참! 내일 아침에 학교 뒷산 계단 올라가기 시합 어때? 지면 간식 사기다! 도전?'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_normal.png",
        night: true,
        next: "night_message_dain_challenge_choice"
    },
    "night_message_dain_challenge_choice": {
        name: "나",
        character: "assets/images/characters/dain_normal.png",
        text: "(다인이의 도전장이다. 어떻게 할까?)",
        background: "assets/images/background/room_my.png",
        night: true,
        choices: [
            { text: "'좋아, 받아들이지!' 라고 보낸다.", next: "night_message_dain_challenge_accept" },
            { text: "'나한테 지면 어쩌려고 ㅋㅋ' 라고 보낸다.", next: "night_message_dain_challenge_tease" }
        ]
    },
    "night_message_dain_challenge_accept": {
        name: "다인",
        text: "(즉시 답장.) '오오!! 좋은 자세다!! 내일 일찍 와야 한다? 늦잠 자면 부전패임! 잘 자, 파이팅!'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        stats: { Dain: { affinity: 3 } },
        next: "night_home_check_contact"
    },
    "night_message_dain_challenge_tease": {
        name: "다인",
        text: "(즉시 답장.) '뭐?! ㅋㅋㅋ 큰소리 치네! 좋아 두고 보자!! 내일 아침 정문에서 만나! 잘 자아!!'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        stats: { Dain: { affinity: 3 } },
        next: "night_home_check_contact"
    },

    // =========================================================================
    // 9. 보건선생님 메시지 — 케어 & 따뜻한 관심 (7 노드)
    // =========================================================================

    "night_message_nurse": {
        name: "나",
        character: null,
        text: "(보건선생님께 메시지를 보냈다. '선생님, 오늘 감사했어요. 편하게 쉴 수 있었어요.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day1_nurse",
        next: "night_message_nurse_reply"
    },
    "night_message_nurse_reply": {
        background: "assets/images/background/room_my.png",
        affinityChar: "Nurse",
        night: true,
        affinityBranches: [
            { minAffinity: 10, next: "night_message_nurse_reply_high" },
            { minAffinity: -100, next: "night_message_nurse_reply_standard" }
        ]
    },
    "night_message_nurse_reply_standard": {
        name: "보건선생님",
        text: "(매혹적인 답장이 왔다.) '어머, 정말로 연락했네? 우리 전학생, 정말 착하다~'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        stats: { Nurse: { affinity: 3 } },
        next: "night_message_nurse_extra_1"
    },
    "night_message_nurse_reply_high": {
        name: "보건선생님",
        text: "(매혹적인 답장이 왔다.) '어머나... 밤에 이런 메시지라니, 선생님 잠 못 자게 하려는 거니? 장난이야~ 너의 다정한 면이 참 좋구나.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        stats: { Nurse: { affinity: 5 } },
        next: "night_message_nurse_extra_1"
    },
    "night_message_nurse_extra_1": {
        name: "보건선생님",
        text: "'그나저나, 새 학교 적응하느라 피곤하지 않아? 무리하면 안 돼~ 머리 아프거나 하면 바로 보건실로 오렴.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "night_message_nurse_extra_2"
    },
    "night_message_nurse_extra_2": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        text: "('네, 감사해요! 선생님도 푹 쉬세요.' 라고 답장했다. ...은근히 챙겨주시는 게 따뜻하다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_message_nurse_extra_3"
    },
    "night_message_nurse_extra_3": {
        name: "보건선생님",
        text: "'고마워~ 그럼 잘 자렴, {name}. 선생님이 좋은 꿈 빌어줄게.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "night_message_nurse_extra_4"
    },
    "night_message_nurse_extra_4": {
        name: "나",
        character: "assets/images/characters/nurse_shy.png",
        text: "(보건선생님의 '좋은 꿈 빌어줄게'라는 말이 유독 마음에 남는다. 선생님인데... 왜 이렇게 두근거리지.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_home_check_contact"
    },

    // =========================================================================
    // 10. 취침 준비 — 창 밖 풍경, 밤소리 (5 노드)
    // =========================================================================

    "night_goodnight_start": {
        name: "나",
        character: null,
        text: "(스마트폰을 내려놓고 침대에서 일어났다. 잠들기 전에 잠깐 창문을 열어볼까.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_goodnight_window"
    },
    "night_goodnight_window": {
        name: "나",
        character: null,
        text: "(창문을 열자 서늘한 밤바람이 얼굴을 스친다. 밤하늘에 별이 몇 개 보인다. 이 동네는 도시보다 별이 잘 보이네.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_goodnight_sounds"
    },
    "night_goodnight_sounds": {
        name: "나",
        character: null,
        text: "(귀뚜라미 소리가 들려온다. 멀리서 기차 소리도 희미하게... 이 조용한 밤이, 어쩐지 좋다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_goodnight_think"
    },
    "night_goodnight_think": {
        name: "나",
        character: null,
        text: "(내일은... 서연이, 유나, 다인이, 선생님들. 다시 만날 수 있겠지. 어떤 이야기가 기다리고 있을까.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_goodnight_close"
    },
    "night_goodnight_close": {
        name: "나",
        character: null,
        text: "(창문을 닫고 이불 속으로 들어갔다. 눈을 감으면... 잠이 올 것 같아.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_surprise_check"
    },

    // =========================================================================
    // 11. 심야 서프라이즈 메시지 — 호감도 최고 캐릭터 (8 노드)
    // =========================================================================

    "night_surprise_check": {
        name: "나",
        character: null,
        text: "(눈을 감으려는 순간 — 징! 스마트폰에 알림이 울렸다. 이 시간에 누구지...?)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "night_surprise_msg", condition: "has_any_contact" },
            { next: "day1_end" }
        ]
    },
    "night_surprise_msg": {
        selectByHighestAffinity: true,
        night: true,
        branches: [
            { character: "Seoyeon", next: "night_surprise_seyoun", condition: "has_number_seyoun" },
            { character: "Yuna", next: "night_surprise_yuna", condition: "has_number_yuna" },
            { character: "Dain", next: "night_surprise_dain", condition: "has_number_dain" },
            { character: "Nurse", next: "night_surprise_nurse", condition: "has_number_nurse" },
            { character: "Teacher", next: "night_surprise_teacher", condition: "has_number_teacher" },
            { next: "day1_end" }
        ]
    },
    "night_surprise_seyoun": {
        name: "서연",
        text: "(서연이의 메시지.) '잠 안 와서 그러는데... 내일 등교할 때 정문에서 만날래? 같이 가자!'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "night_surprise_seyoun_react"
    },
    "night_surprise_seyoun_react": {
        name: "나",
        character: "assets/images/characters/seyoun_shy.png",
        text: "('좋아! 내일 정문에서 보자.' 라고 답장했다. ...서연이가 먼저 연락을 해오다니. 왠지 기분이 좋아졌다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "night_surprise_react"
    },
    "night_surprise_yuna": {
        name: "유나",
        text: "(유나의 메시지.) '...아직 깨어 있어? 별이 예뻐서. 그것만 말하고 싶었어.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "night_surprise_yuna_react"
    },
    "night_surprise_yuna_react": {
        name: "나",
        character: "assets/images/characters/yuna_normal.png",
        text: "('나도 방금 별 보고 있었어.' 라고 답장했다. ...같은 하늘을 보고 있다는 게, 묘하게 설레는 느낌이다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        stats: { Yuna: { affinity: 3 } },
        next: "night_surprise_react"
    },
    "night_surprise_dain": {
        name: "다인",
        text: "(다인이의 메시지.) '아직 안 잤지?! 내일 시합 잊지 마!! 미리 스트레칭 해둬야 할 걸?ㅋㅋ 잘 자!'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "night_surprise_dain_react"
    },
    "night_surprise_dain_react": {
        name: "나",
        character: "assets/images/characters/dain_laugh.png",
        text: "('걱정 마, 준비 되어 있어!' 라고 답장했다. 다인이의 에너지는 밤에도 변함이 없구나.)",
        background: "assets/images/background/room_my.png",
        night: true,
        stats: { Dain: { affinity: 3 } },
        next: "night_surprise_react"
    },
    "night_surprise_nurse": {
        name: "보건선생님",
        text: "(보건선생님의 메시지.) '아직 안 잤으면 큰일이야~ 내일 보건실에서 수면 상담해줄까? 농담이야. 잘 자렴.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "night_surprise_nurse_react"
    },
    "night_surprise_nurse_react": {
        name: "나",
        character: "assets/images/characters/nurse_shy.png",
        text: "('네, 지금 잘게요! 감사해요 선생님.' 라고 답장했다. ...장난스럽지만 은근히 걱정해주시는 거겠지?)",
        background: "assets/images/background/room_my.png",
        night: true,
        stats: { Nurse: { affinity: 3 } },
        next: "night_surprise_react"
    },
    "night_surprise_teacher": {
        name: "담임선생님",
        text: "(담임선생님의 메시지.) '혹시 아직 안 잤니? 내일 시간표 바뀐 거 미리 알려주려고. 3교시가 체육이야. 잘 자!'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        next: "night_surprise_teacher_react"
    },
    "night_surprise_teacher_react": {
        name: "나",
        character: "assets/images/characters/teacher_smile.png",
        text: "('감사합니다 선생님! 잘 자요~' 라고 답장했다. 세심하게 신경 써주셔서 따뜻한 분이야.)",
        background: "assets/images/background/room_my.png",
        night: true,
        stats: { Teacher: { affinity: 3 } },
        next: "night_surprise_react"
    },
    "night_surprise_react": {
        name: "나",
        character: null,
        text: "(깜짝 놀랐지만... 기분이 좋아졌다. 스마트폰을 뒤집어 놓고 이불을 덮었다. 오늘은 진짜 좋은 하루였어.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day1_end"
    },

    // =========================================================================
    // 12. Day 1 종료 — Day 2 전환
    // =========================================================================

    "day1_end": {
        name: "나",
        text: "(눈을 감자 오늘 만난 소녀들의 얼굴이 하나둘씩 스쳐 지나간다. 서연이의 미소, 유나의 눈빛, 다인이의 웃음소리... 내일은 그녀들과 더 가까워질 수 있을까...)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        fade: true,
        changeDay: 2,
        next: "day2_start"
    }
});
