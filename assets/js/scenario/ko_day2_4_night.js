/**
 * ============================================================================
 * CUPID - Day 2 Night Scenario (Korean Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: ko_day2_4_night.js
 * 언어: 한국어 (Korean)
 * 일차: Day 2 (2일차)
 * 시간대: Night (밤)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 전학 이틀째 밤의 활동을 다룹니다.
 * 하교 후 귀가하며 오늘 하루를 되돌아보고, SNS를 확인한 뒤
 * 히로인들과 메시지 대화(free_talk)를 통해 관계를 돈독히 합니다.
 * 특정 조건을 만족할 경우 보건선생님 댁을 방문하는 특별 이벤트를 경험할 수 있습니다.
 * 취침 전 별을 보며 내일을 기대하고, 짧은 꿈 시퀀스 후 Day 3로 전환됩니다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 귀가 — 학교에서 집까지 걸어오며 저녁 분위기를 느끼고 방에 정착
 * 2. 하루 회상 — 유나의 비밀, 각 캐릭터와의 오늘 있었던 일 되돌아보기
 * 3. 야식 타임 — 부엌에서 간식을 챙기며 메시지에 대한 생각
 * 4. SNS 확인 — 메시지 보내기 전 소셜 미디어 둘러보기
 * 5. 메시지 보내기 — 연락처가 있는 히로인에게 메시지 발송 (경험한 이벤트에 따른 분기)
 * 6. 메시지 대화 (Free Talk) — AI와 실시간으로 메시지를 주고받으며 호감도 획득
 * 7. 보건샘 댁 방문 — 'invited_nurse_home' 플래그 보유 시 선택 가능한 특별 이벤트
 * 8. 호감도 확인 — 현재까지의 캐릭터별 호감도 리스트 조회
 * 9. 취침 준비 — 별 감상, 밤소리, 내일에 대한 기대
 * 10. 꿈 시퀀스 — Day 3를 암시하는 짧은 꿈
 * 11. 취침 및 일자 전환 — Day 3 아침으로 전환 (changeDay: 3)
 * 
 *  조건 플래그 설명 (Condition Flags)
 * ----------------------------------------------------------------------------
 * has_any_contact      : 한 명 이상 연락처를 가지고 있는지 확인
 * has_number_*         : 특정 히로인의 연락처를 가지고 있는지 확인
 * invited_nurse_home   : 보건샘의 집 초대를 받았는지 확인 (방문 이벤트 조건)
 * day2_met_*_after     : 방과 후 만남 여부 (메시지 내용 분기)
 * day2_ate_lunch_seoyeon : 서연과 점심 식사 여부 (메시지 내용 분기)
 * day2_met_yuna_lunch  : 유나와 점심 만남 여부 (메시지 내용 분기)
 * day2_met_dain_lunch  : 다인과 점심 만남 여부 (메시지 내용 분기)
 * day2_dain_bet        : 다인과 떡볶이 내기를 했는지 여부 (메시지 내용 분기)
 * woke_up_in_nurse_room : 보건실에서 깼는지 여부 (메시지 내용 분기)
 * sent_msg_day2_*      : 오늘 메시지를 이미 보냈는지 확인 (중복 방지)
 * 
 *  설정 플래그 설명 (Set Flags)
 * ----------------------------------------------------------------------------
 * sent_msg_day2_*             : 메시지 발송 기록
 * spent_night_at_nurse_home   : 보건샘 댁에서 하룻밤을 보냈음을 기록
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 메시지 대화 및 보건샘 댁 방문 결과에 따라 각 캐릭터별 호감도 소폭/대폭 상승
 * 보건샘 댁 방문 시 Nurse +15
 * 
 *  노드 수: 80개
 * 
 *  진입/퇴장
 * ----------------------------------------------------------------------------
 * Entry: day2_end
 * Exit:  day2_final_scene → changeDay: 3, next: "day3_start"
 *        day2_night_nurse_home_5 → next: "day3_nurse_home_morning" (특별 루트)
 * 
 *  특이 사항
 * ----------------------------------------------------------------------------
 * - free_talk: 메시지 앱 형식의 AI 대화 시스템 활용
 * - personality: 각 캐릭터의 성격 묘사 (free_talk 노드에서 사용)
 * - silhouette: true - 메시지 창에서 캐릭터를 실루엣으로 연출
 * - night: true - 밤 배경 및 분위기 적용
 * - changeDay: 3 - 게임 시스템상의 날짜를 Day 3으로 변경
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
 * [Day 2 - Night] 씬 데이터 정의
 */
Object.assign(SCENARIO[2], {

    // =========================================================================
    // 1. 귀가 — 학교에서 집으로 돌아오는 길 (7 노드)
    // =========================================================================

    "day2_end": {
        name: "나",
        text: "(교문을 나서자 저녁 공기가 얼굴을 감싼다. 어느새 하늘은 짙은 남색으로 물들어 가고 있다.)",
        background: "assets/images/background/street.png",
        bgm: "night2.mp3",
        character: null,
        night: true,
        next: "day2_end_walk_home"
    },
    "day2_end_walk_home": {
        name: "나",
        text: "(가로등이 하나둘씩 켜지기 시작한다. 이 거리도 어느새 낯이 익어서, 어디서 꺾어야 하는지 생각하지 않아도 발이 알아서 움직인다.)",
        background: "assets/images/background/street.png",
        night: true,
        next: "day2_end_evening_air"
    },
    "day2_end_evening_air": {
        name: "나",
        text: "(어딘가에서 저녁밥 짓는 냄새가 바람에 실려온다. 이웃집 창문 너머로 따뜻한 불빛이 새어나오고... 이런 평범한 풍경이 묘하게 마음을 편안하게 해준다.)",
        background: "assets/images/background/street.png",
        night: true,
        next: "day2_end_arrive_home"
    },
    "day2_end_arrive_home": {
        name: "나",
        text: "(현관문을 열고 들어섰다. 신발을 벗으며 '다녀왔습니다'라고 중얼거렸지만, 대답은 없다. 부모님은 아직 안 오신 모양이다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_end_change_clothes"
    },
    "day2_end_change_clothes": {
        name: "나",
        text: "(교복을 벗고 편한 옷으로 갈아입었다. 넥타이를 빼는 순간, 하루의 긴장이 한꺼번에 풀리는 기분이다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_end_settle"
    },
    "day2_end_settle": {
        name: "나",
        text: "(가방을 내려놓고 책상 앞에 앉았다. 오늘 받은 프린트물을 파일에 꽂고, 물 한 잔을 마신다. 조용한 방 안에 시계 소리만 똑딱거린다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_end_2"
    },
    "day2_end_2": {
        name: "나",
        text: "(침대에 기대앉아 천장을 올려다본다. 오늘은... 정말 많은 일이 있었어. 어제보다 훨씬 깊고 복잡한 하루였다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_reflect_start"
    },

    // =========================================================================
    // 2. 하루 회상 — 오늘의 사건들을 되돌아보기 (5 노드)
    // =========================================================================

    "day2_night_reflect_start": {
        name: "나",
        text: "(눈을 감으면 오늘 있었던 장면들이 파노라마처럼 스쳐 지나간다. 이틀째인데... 이미 이 학교가 내 일상의 일부가 된 것 같아.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_reflect_yuna_secret"
    },
    "day2_night_reflect_yuna_secret": {
        name: "나",
        text: "(유나가 속삭였던 비밀... 아직도 머릿속을 떠나지 않는다. 그 아이는 왜 나한테만 그런 이야기를 한 걸까? 저 신비로운 눈동자 속에 어떤 세계가 펼쳐져 있는 건지...)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_reflect_seoyeon"
    },
    "day2_night_reflect_seoyeon": {
        name: "나",
        text: "(서연이는 오늘도 변함없이 밝았어. 학생회 일로 바쁘면서도 나를 챙겨주려고 애쓰는 모습이... 사실 좀 미안하기도 하고, 고맙기도 하고.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_reflect_dain"
    },
    "day2_night_reflect_dain": {
        name: "나",
        text: "(다인이는... 아, 그 에너지. 같이 있으면 지칠 틈이 없어. 운동하는 모습이 정말 멋있었고, 장난치는 것도 즐거웠어. 내일은 또 무슨 도전을 걸어올까.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_reflect_adults"
    },
    "day2_night_reflect_adults": {
        name: "나",
        text: "(보건선생님은 오늘도 묘한 분위기를 풍기셨고, 담임선생님은 장난스러우면서도 은근히 나를 신경 쓰셨어. 어른이라서 더 복잡한 걸까, 아니면... 내가 너무 의식하는 걸까.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_snack_start"
    },

    // =========================================================================
    // 3. 야식 타임 — 부엌에서 간식 챙기기 (4 노드)
    // =========================================================================

    "day2_night_snack_start": {
        name: "나",
        text: "(생각에 잠겨 있었더니 어느새 배가 고파졌다. 저녁은 간단하게 때웠으니... 부엌에서 뭐라도 찾아볼까.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_snack_kitchen"
    },
    "day2_night_snack_kitchen": {
        name: "나",
        text: "(냉장고를 열어보니 엄마가 남겨둔 반찬 몇 가지와 라면이 보인다. 오늘은 라면 기분이야.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_snack_ramen"
    },
    "day2_night_snack_ramen": {
        name: "나",
        text: "(냄비에 물을 올리고 라면을 끓이기 시작한다. 보글보글 끓는 소리가 조용한 부엌을 채운다. 김이 모락모락 올라오는 걸 보고 있자니 마음이 편안해진다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_snack_think"
    },
    "day2_night_snack_think": {
        name: "나",
        text: "(라면을 후루룩 먹으며 생각한다. 오늘 연락처를 교환했던 사람들... 메시지를 보내볼까? 아니면 그냥 자버릴까. 설거지를 마치고 방으로 돌아왔다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_home"
    },

    // =========================================================================
    // 4. SNS 확인 — 메시지 전 소셜 미디어 둘러보기 (6 노드)
    // =========================================================================

    "day2_night_home": {
        name: "나",
        text: "(침대에 누워 습관적으로 스마트폰을 들었다.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        branches: [
            { next: "day2_night_goodnight_start", excludeCondition: "has_any_contact" },
            { next: "day2_night_social_media" }
        ]
    },
    "day2_night_social_media": {
        name: "나",
        text: "(메시지를 보내기 전에 SNS를 잠깐 훑어본다. 타임라인에 학교 친구들의 글이 올라와 있다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_social_media_scroll"
    },
    "day2_night_social_media_scroll": {
        name: "나",
        text: "(누군가가 올린 급식 사진, 체육 시간에 몰래 찍은 사진, 학교 운동장 석양 사진... 다들 나름의 하루를 보내고 있구나.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_social_media_post"
    },
    "day2_night_social_media_post": {
        name: "나",
        text: "(서연이가 올린 학생회 활동 인증샷에 좋아요가 잔뜩 눌려 있다. 다인이의 배구 연습 영상에는 '멋있다!'라는 댓글이 줄줄이 달려 있고...)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_social_media_react"
    },
    "day2_night_social_media_react": {
        name: "나",
        text: "(나도 모르게 미소가 지어진다. 좋아요를 몇 개 누르고 타임라인을 닫았다. ...이제 직접 메시지를 보내볼까.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_home_check_contact"
    },

    // =========================================================================
    // 5. 메시지 허브 — 캐릭터 선택 (2 노드)
    // =========================================================================

    "day2_night_home_check_contact": {
        name: "나",
        text: "(누군가에게 메시지를 보내볼까...?)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        choices: [
            { text: "서연이에게 메시지를 보낸다.", next: "day2_night_message_seyoun", condition: "has_number_seyoun", excludeCondition: "sent_msg_day2_seyoun" },
            { text: "유나에게 메시지를 보낸다.", next: "day2_night_message_yuna", condition: "has_number_yuna", excludeCondition: "sent_msg_day2_yuna" },
            { text: "다인이에게 메시지를 보낸다.", next: "day2_night_message_dain", condition: "has_number_dain", excludeCondition: "sent_msg_day2_dain" },
            { text: "보건선생님께 메시지를 보낸다.", next: "day2_night_message_nurse", condition: "has_number_nurse", excludeCondition: "sent_msg_day2_nurse" },
            { text: "담임선생님께 메시지를 보낸다.", next: "day2_night_message_teacher", condition: "has_number_teacher", excludeCondition: "sent_msg_day2_teacher" },
            { text: "보건선생님 댁으로 향한다.", next: "day2_night_nurse_home", condition: "invited_nurse_home" },
            { text: "호감도 확인하기", next: "day2_check_affinity" },
            { text: "그만 보내고 잠을 잔다.", next: "day2_night_goodnight_start" }
        ]
    },
    "day2_check_affinity": {
        name: "시스템",
        text: "현재 캐릭터들과의 호감도 상태입니다.{affinity_list}",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_home_check_contact"
    },

    // =========================================================================
    // 6. 보건선생님 댁 방문 — 특별 이벤트 (11 노드)
    // =========================================================================

    "day2_night_nurse_home": {
        name: "나",
        text: "(선생님이 알려준 주소로 향했다. 학교 근처의 조용한 오피스텔이다. 엘리베이터를 타고 올라가며 심장이 빨라지는 것을 느낀다.)",
        background: "assets/images/background/nurse_house.png",
        character: null,
        night: true,
        next: "day2_night_nurse_home_entrance"
    },
    "day2_night_nurse_home_entrance": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        text: "(초인종을 누르자 안에서 부스럭거리는 소리가 들린다. '잠깐만~'이라는 목소리와 함께 발걸음 소리가 가까워진다.)",
        background: "assets/images/background/nurse_house.png",
        night: true,
        next: "day2_night_nurse_home_casual"
    },
    "day2_night_nurse_home_casual": {
        name: "나",
        text: "(문 너머로 모습을 드러낸 선생님은... 학교에서와 전혀 다른 인상이었다. 흰 가운 대신 편한 니트와 긴 치마 차림. 살짝 젖은 머리카락에서 샴푸 향이 은은하게 풍겨온다.)",
        background: "assets/images/background/nurse_house.png",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day2_night_nurse_home_2"
    },
    "day2_night_nurse_home_2": {
        name: "보건선생님",
        text: "\"어머, 정말로 왔네? 어서 들어오렴. 밖이 많이 춥지?\"",
        background: "assets/images/background/nurse_house.png",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day2_night_nurse_home_tea"
    },
    "day2_night_nurse_home_tea": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        text: "(안으로 들어서자 아늑한 원룸이 눈에 들어온다. 은은한 간접조명, 작은 화분들, 따뜻한 색감의 인테리어. 선생님이 부엌에서 주전자를 올린다.)",
        background: "assets/images/background/nurse_house.png",
        night: true,
        next: "day2_night_nurse_home_3"
    },
    "day2_night_nurse_home_3": {
        name: "보건선생님",
        text: "\"자, 여기 앉으렴. 따뜻한 차 한 잔 줄게. 우리 전학생이랑 단둘이 있으니까... 왠지 기분이 묘하네?\"",
        background: "assets/images/background/nurse_house.png",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day2_night_nurse_home_talk_life"
    },
    "day2_night_nurse_home_talk_life": {
        name: "보건선생님",
        text: "\"학교에서는 항상 '선생님'이지만, 여기선 그냥 한 사람이야. 나도 퇴근하면 이렇게 차 마시면서 드라마 보거든. 의외지?\"",
        background: "assets/images/background/nurse_house.png",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day2_night_nurse_home_talk_alone"
    },
    "day2_night_nurse_home_talk_alone": {
        name: "보건선생님",
        text: "\"사실... 이 집에 학생을 초대한 건 네가 처음이야. 혼자 사니까 가끔 적적할 때가 있거든. 이렇게 차 마실 상대가 있으면 좋겠다고 생각했어.\"",
        background: "assets/images/background/nurse_house.png",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        stats: { Nurse: { affinity: 5 } },
        next: "day2_night_nurse_home_decision"
    },
    "day2_night_nurse_home_decision": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        text: "(시계를 보니 벌써 밤 11시가 넘었다. 찻잔은 비었고, 밤은 깊어졌다. 이대로 더 머무를까, 아니면 돌아갈까...)",
        background: "assets/images/background/nurse_house.png",
        night: true,
        choices: [
            { text: "조금 더 머무른다.", next: "day2_night_nurse_home_4" },
            { text: "늦었으니 돌아간다.", next: "day2_night_home_check_contact" }
        ]
    },
    "day2_night_nurse_home_4": {
        name: "보건선생님",
        text: null,
        background: "assets/images/background/nurse_home_event1.png",
        character: null,
        night: true,
        next: "day2_night_nurse_home_5"
    },
    "day2_night_nurse_home_5": {
        name: "나",
        text: "(선생님과 단둘이 남겨진 방... 심장 소리가 귓가에 울릴 정도로 크게 들려온다. 그녀의 향기가 코끝을 간지럽히고, 밤은 점점 깊어만 간다.)",
        background: "assets/images/background/nurse_house.png",
        character: null,
        night: true,
        fade: true,
        setFlag: "spent_night_at_nurse_home",
        stats: { Nurse: { affinity: 15 } },
        next: "day3_nurse_home_morning"
    },

    // =========================================================================
    // 7. 서연 메시지 — 이벤트 분기 + Free Talk (8 노드)
    // =========================================================================

    "day2_night_message_seyoun": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        text: "(서연이에게 어떤 메시지를 보낼까?)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "day2_night_message_seyoun_after", condition: "day2_met_seoyeon_after" },
            { next: "day2_night_message_seyoun_lunch", condition: "day2_ate_lunch_seoyeon" },
            { next: "day2_night_message_seyoun_generic" }
        ]
    },
    "day2_night_message_seyoun_after": {
        name: "나",
        text: "(서연이에게 메시지를 보냈다. '오늘 밤 노을부터 야근(?)까지, 너랑 함께해서 정말 행복했어. 내일 봐!')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_seyoun",
        next: "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_lunch": {
        name: "나",
        text: "(서연이에게 메시지를 보냈다. '오늘 점심 샌드위치 정말 맛있었어! 내일 봐.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_seyoun",
        next: "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_generic": {
        name: "나",
        text: "(서연이에게 메시지를 보냈다. '오늘 하루 잘 보냈어? 내일 학교에서 보자.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_seyoun",
        next: "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_reply": {
        type: "free_talk",
        maxTurns: 10,
        name: "서연",
        text: "(징~ 즉각적인 답장.) '나도 정말 즐거웠어! {name} 덕분에 든든해. 내일 점심 같이 먹는 거 잊지 마! 잘 자요.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        context: "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 서연이는 주인공의 메시지에 기뻐하며 답장을 보낸 상태입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
        personality: "밝고 다정하며 친근한 학생회장. 주인공에게 호감을 갖고 있으며 솔직하고 적극적으로 다가감.",
        night: true,
        stats: { Seoyeon: { affinity: 3 } },
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 25, next: "day2_night_message_seyoun_reply_high" },
            { minAffinity: 0, next: "day2_night_message_seyoun_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_seyoun_reply_low" }
        ],
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun_reply_high": {
        name: "나",
        text: "(서연이와의 대화는 언제나 즐겁다. 그녀의 다정한 말투에서 진심이 느껴져 가방을 챙기는 손길이 가볍다. 내일 점심시간이 벌써부터 기다려진다.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun_reply_normal": {
        name: "나",
        text: "(서연이와 무난하게 대화를 마쳤다. 내일 점심 약속을 잊지 말아야겠다.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun_reply_low": {
        name: "나",
        text: "(서연이의 반응이 평소보다 조금 사무적으로 느껴진다. 내가 무언가 실수한 걸까? 내일은 좀 더 조심스럽게 다가가야겠다.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },

    // =========================================================================
    // 8. 유나 메시지 — 이벤트 분기 + Free Talk (7 노드)
    // =========================================================================

    "day2_night_message_yuna": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        text: "(유나에게 어떤 메시지를 보낼까?)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "day2_night_message_yuna_met", condition: "day2_met_yuna_after" },
            { next: "day2_night_message_yuna_met", condition: "day2_met_yuna_lunch" },
            { next: "day2_night_message_yuna_generic" }
        ]
    },
    "day2_night_message_yuna_met": {
        name: "나",
        text: "(유나에게 메시지를 보냈다. '오늘 보여준 거... 잊지 않을게. 잘 자.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_yuna",
        next: "day2_night_message_yuna_reply"
    },
    "day2_night_message_yuna_generic": {
        name: "나",
        text: "(유나에게 메시지를 보냈다. '오늘 하루는 어땠어? 내일 학교에서 보자.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_yuna",
        next: "day2_night_message_yuna_reply"
    },
    "day2_night_message_yuna_reply": {
        type: "free_talk",
        maxTurns: 10,
        name: "유나",
        text: "(잠시 후 도착한 답장.) '...응. 네가 이해해줄 줄 알았어. 꿈속에서도 지켜보고 있을게, {name}.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        context: "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 유나는 주인공의 메시지에 짧지만 깊은 여운이 담긴 답장을 보낸 상태입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
        personality: "신비롭고 차가우며 비밀이 많은 소녀. 주인공에게 묘한 흥미를 느끼고 있으며, 짧고 의미심장한 말투를 사용함.",
        night: true,
        stats: { Yuna: { affinity: 3 } },
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 25, next: "day2_night_message_yuna_reply_high" },
            { minAffinity: 0, next: "day2_night_message_yuna_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_yuna_reply_low" }
        ],
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_yuna_reply_high": {
        name: "나",
        text: "(유나의 신비로운 분위기에 점점 빠져드는 것 같다. '꿈속에서도 지켜보겠다'는 그녀의 말이 무섭기보다는 묘하게 안심이 된다. 정말로 꿈에서 그녀를 만날 수 있을 것만 같다.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_yuna_reply_normal": {
        name: "나",
        text: "(유나와의 대화는 여전히 난해하지만, 조금은 가까워진 기분이다. 그녀가 말한 비밀들이 머릿속을 맴돈다.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_yuna_reply_low": {
        name: "나",
        text: "(유나의 태도가 너무나 차갑고 기괴하다. 그녀의 세계에 발을 들이는 것이 정말 옳은 선택인지, 한기가 느껴진다.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },

    // =========================================================================
    // 9. 다인 메시지 — 이벤트 분기 + Free Talk (10 노드)
    // =========================================================================

    "day2_night_message_dain": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        text: "(다인이에게 어떤 메시지를 보낼까?)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "day2_night_message_dain_after", condition: "day2_met_dain_after" },
            { next: "day2_night_message_dain_lunch", condition: "day2_met_dain_lunch" },
            { next: "day2_night_message_dain_generic" }
        ]
    },
    "day2_night_message_dain_after": {
        name: "나",
        text: "(방과 후 연습 때 일이 생각난다. 어떤 메시지를 보낼까?)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "day2_night_message_dain_bet", condition: "day2_dain_bet" },
            { next: "day2_night_message_dain_practice" }
        ]
    },
    "day2_night_message_dain_bet": {
        name: "나",
        text: "(다인이에게 메시지를 보냈다. '오늘 연습 수고했어! 내일 떡볶이 내기 잊지 마.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_practice": {
        name: "나",
        text: "(다인이에게 메시지를 보냈다. '오늘 연습 수고했어! 덕분에 즐거웠어. 내일 봐!')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_lunch": {
        name: "나",
        text: "(다인이에게 메시지를 보냈다. '오늘 매점에서 본 거 재밌었어! 내일 떡볶이 먹으러 가자.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_generic": {
        name: "나",
        text: "(다인이에게 메시지를 보냈다. '다인아, 오늘 하루 수고했어! 내일 보자.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_reply": {
        type: "free_talk",
        maxTurns: 10,
        name: "다인",
        text: "(활기찬 답장.) '당연하지! 내가 이길 거니까 지갑 준비해둬! 하하, 잘 자, {name}!'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        context: "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 다인이는 주인공의 메시지에 활기차게 답장을 보낸 상태입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
        personality: "털털하고 시원시원한 성격의 배구부 에이스. 주인공과 함께 있는 시간을 즐거워하며 장난스럽고 활기차게 대화함.",
        night: true,
        stats: { Dain: { affinity: 3 } },
        affinityChar: "Dain",
        affinityBranches: [
            { minAffinity: 25, next: "day2_night_message_dain_reply_high" },
            { minAffinity: 0, next: "day2_night_message_dain_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_dain_reply_low" }
        ],
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_dain_reply_high": {
        name: "나",
        text: "(다인이의 활기찬 에너지 덕분에 나까지 기운이 난다. '지갑 준비해둬'라며 장난치는 모습이 눈앞에 선하다. 내일 떡볶이 내기는 그녀를 위해서라도 꼭 져줘야 할까?)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_dain_reply_normal": {
        name: "나",
        text: "(다인이와 즐겁게 대화를 마쳤다. 내일 떡볶이 내기에서 지지 않도록 마음의 준비를 해야겠다.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_dain_reply_low": {
        name: "나",
        text: "(다인이의 반응이 평소보다 무미건조하다. 내가 보낸 메시지가 귀찮았던 건 아닐지, 핸드폰을 든 손이 어색해진다.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_sad.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },

    // =========================================================================
    // 10. 보건선생님 메시지 — 이벤트 분기 + Free Talk (7 노드)
    // =========================================================================

    "day2_night_message_nurse": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        text: "(보건선생님께 어떤 메시지를 보낼까?)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "day2_night_message_nurse_rest", condition: "day2_met_nurse_after" },
            { next: "day2_night_message_nurse_rest", condition: "woke_up_in_nurse_room" },
            { next: "day2_night_message_nurse_generic" }
        ]
    },
    "day2_night_message_nurse_rest": {
        name: "나",
        text: "(보건선생님께 메시지를 보냈다. '선생님, 오늘 감사했어요. 덕분에 잘 쉬었어요.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_nurse",
        next: "day2_night_message_nurse_reply"
    },
    "day2_night_message_nurse_generic": {
        name: "나",
        text: "(보건선생님께 메시지를 보냈다. '선생님, 오늘 하루 수고하셨어요. 안녕히 주무세요.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_nurse",
        next: "day2_night_message_nurse_reply"
    },
    "day2_night_message_nurse_reply": {
        type: "free_talk",
        maxTurns: 10,
        name: "보건선생님",
        text: "(매혹적인 답장.) '어머, 벌써 내 생각 하는 거니? 후훗, 오늘 푹 자고 내일 또 얼굴 보자. 잘 자요, {name}.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        context: "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 보건선생님은 주인공의 메시지에 장난스럽고 매혹적인 답장을 보낸 상태입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
        personality: "나른하고 섹시하면서도 다정한 보건선생님. 주인공에게 묘한 매력을 느끼며 대담하게 유혹하는 대범한 성격.",
        night: true,
        stats: { Nurse: { affinity: 3 } },
        affinityChar: "Nurse",
        affinityBranches: [
            { minAffinity: 40, next: "day2_night_message_nurse_reply_high" },
            { minAffinity: 0, next: "day2_night_message_nurse_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_nurse_reply_low" }
        ],
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_nurse_reply_high": {
        name: "나",
        text: "(선생님의 매혹적인 말투가 귓가에 맴도는 것 같다. 화면 너머로 그녀의 미소가 보이는 듯해 심장이 떨린다. 내일은 무슨 일이 있어도 보건실에 들러야겠다.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_nurse_reply_normal": {
        name: "나",
        text: "(선생님과 무사히 연락을 마쳤다. 내일 학교에서 뵈면 반갑게 인사드려야겠다.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_nurse_reply_low": {
        name: "나",
        text: "(선생님의 답장이 너무나 사무적이다. 단순히 학생 중 한 명으로만 대하시는 것 같아 씁쓸한 기분이 든다.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },

    // =========================================================================
    // 11. 담임선생님 메시지 — Free Talk (5 노드)
    // =========================================================================

    "day2_night_message_teacher": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        text: "(담임선생님께 메시지를 보냈다. '선생님, 오늘 하루 수고하셨습니다. 안녕히 주무세요.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_teacher",
        next: "day2_night_message_teacher_reply"
    },
    "day2_night_message_teacher_reply": {
        type: "free_talk",
        maxTurns: 10,
        name: "담임선생님",
        text: "(조금 늦게 도착한 답장.) '어머, {name}. 이 시간에 메시지라니 조금 놀랐네. 그래도 걱정해줘서 고마워. 너도 푹 자고 내일 지각하지 마렴.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        context: "밤, 각자의 집에서 스마트폰 메시지로 대화를 나누는 상황입니다. 담임선생님은 주인공의 메시지에 조금 당황하면서도 고마워하며 답장을 보낸 상태입니다. 대화가 완전히 마무리되기 전까지는 대화를 계속 이어나가세요. 대화가 끝나면 주인공이 내일을 기약하며 잠에 드는 상황으로 이어집니다. 대화의 마지막 턴에만 이제 늦었으니 잘 자라는 인사를 하거나, 내일 학교에서 보자고 하며 자연스럽게 대화를 종료해 주세요.",
        personality: "공과 사가 뚜렷하지만 주인공에게는 은근히 약한 모습을 보이는 담임선생님. 따뜻하고 세심하게 챙기면서도 선을 지키려 함.",
        night: true,
        stats: { Teacher: { affinity: 3 } },
        affinityChar: "Teacher",
        affinityBranches: [
            { minAffinity: 25, next: "day2_night_message_teacher_reply_high" },
            { minAffinity: 0, next: "day2_night_message_teacher_reply_normal" },
            { minAffinity: -100, next: "day2_night_message_teacher_reply_low" }
        ],
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_teacher_reply_high": {
        name: "나",
        text: "(선생님의 다정한 답장에 마음이 따뜻해진다. 학생으로서가 아니라, 조금은 한 명의 인격체로 존중받는 기분이 들어 내일 학교 가는 길이 기다려진다.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_teacher_reply_normal": {
        name: "나",
        text: "(선생님과 무사히 연락을 마쳤다. 내일은 지각하지 않도록 주의해야겠다.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_teacher_reply_low": {
        name: "나",
        text: "(선생님의 답장이 짧고 엄격하다. 사적인 시간에 연락한 것이 큰 실례였던 것 같아 후회가 밀려온다.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },

    // =========================================================================
    // 12. 취침 준비 — 별, 밤소리, 내일에 대한 기대 (5 노드)
    // =========================================================================

    "day2_night_goodnight_start": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        text: "(스마트폰을 내려놓고 창가로 다가갔다. 잠들기 전에 잠깐, 이 밤을 느껴보고 싶었다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_goodnight_stars"
    },
    "day2_night_goodnight_stars": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        text: "(창문을 열자 차가운 밤공기가 밀려든다. 하늘 위로 별들이 수놓아져 있다. 어제보다 더 선명하게 보이는 것 같아... 유나가 말했던 '세 번째 별'이 문득 떠오른다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_goodnight_sounds"
    },
    "day2_night_goodnight_sounds": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        text: "(벌레 소리가 끊임없이 이어진다. 먼 곳에서 자동차 경적 소리가 한 번 울리고 다시 고요해진다. 이 동네의 밤은... 참 조용하다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_goodnight_tomorrow"
    },
    "day2_night_goodnight_tomorrow": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        text: "(내일이면 벌써 전학 온 지 3일째. 서연이, 유나, 다인이, 선생님들... 그들과의 관계는 어떻게 변해갈까. 기대와 불안이 뒤섞인 묘한 설렘이 가슴을 채운다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_goodnight_close"
    },
    "day2_night_goodnight_close": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        text: "(창문을 닫고 커튼을 쳤다. 이불 속으로 파고들어 눈을 감았다. 오늘도 고생 많았어, 나...)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_dream_start"
    },

    // =========================================================================
    // 13. 꿈 시퀀스 — Day 3 예고 (3 노드)
    // =========================================================================

    "day2_night_dream_start": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        text: "(의식이 아스라하게 흐려진다... 꿈인지 현실인지 모를 공간에 서 있다. 학교 옥상인 것 같기도 하고, 어딘지 모를 정원 같기도 한 곳.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_dream_vision"
    },
    "day2_night_dream_vision": {
        name: "???",
        text: "(누군가의 목소리가 바람에 실려 온다. '내일... 너에게 보여주고 싶은 것이 있어.' 목소리의 주인공은 알 수 없지만, 따뜻하면서도 간절한 울림이 귓가에 맴돈다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_dream_end"
    },
    "day2_night_dream_end": {
        name: "나",
        character: "assets/images/characters/nurse_normal.png",
        text: "(손을 뻗었지만 아무것도 잡히지 않는다. 목소리는 서서히 멀어지고... 의식이 깊고 깊은 잠 속으로 가라앉는다.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_final_scene"
    },

    // =========================================================================
    // 14. Day 2 종료 — Day 3 전환
    // =========================================================================

    "day2_final_scene": {
        name: "나",
        text: "(어둠 속에서 희미한 빛이 번진다. 내일은 또 어떤 진실이 나를 기다리고 있을까... 무거운 눈꺼풀을 닫으며 깊은 잠에 빠져든다.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        fade: true,
        changeDay: 3,
        next: "day3_start"
    }
});
