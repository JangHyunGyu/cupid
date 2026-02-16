/**
 * ============================================================================
 * CUPID - Day 1 Night Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day1_4_night.js
 * 언어: 영어 (English)
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
        name: "Me",
        text: "(I walk through the darkened streets. The streetlights cast long shadows across the road.)",
        background: "assets/images/background/street.png",
        bgm: "night1.mp3",
        character: null,
        night: true,
        next: "after_home_walk"
    },
    "after_home_walk": {
        name: "Me",
        text: "(This neighborhood is starting to feel a little familiar already. Past the alley by the convenience store is my house... and I noticed that vending machine earlier too.)",
        background: "assets/images/background/street.png",
        night: true,
        next: "after_home_neighborhood"
    },
    "after_home_neighborhood": {
        name: "Me",
        text: "(A quiet residential area. The smell of dinner drifts from somewhere nearby. It's an unfamiliar neighborhood... so why does it feel so comfortable?)",
        background: "assets/images/background/street.png",
        night: true,
        next: "after_home_arrive"
    },
    "after_home_arrive": {
        name: "Me",
        text: "(I've arrived at the front door. I fish the key out of my pocket and unlock it. Looks like my parents aren't home yet.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "after_home_2"
    },
    "after_home_2": {
        name: "Me",
        text: "(I flick on the light in my room and flop onto the bed. The unfamiliar ceiling feels strangely cozy tonight... maybe it's just the mood.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "after_home_settle"
    },
    "after_home_settle": {
        name: "Me",
        text: "(I change out of my uniform into something comfortable. I set down my bag and organize the handouts I got today on the desk.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "after_home_3"
    },
    "after_home_3": {
        name: "Me",
        text: "(What's waiting for me tomorrow? A strange excitement makes me feel like sleep won't come easily tonight.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_reflect_start"
    },

    // =========================================================================
    // 2. 하루 되돌아보기 — 만났던 인물만 회상 (조건 분기)
    // =========================================================================

    "night_reflect_start": {
        name: "Me",
        text: "(I stare at the ceiling, thinking back on the day. For a first day at a new school... a lot really happened.)",
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
        name: "Me",
        text: "(Seoyeon... she was bright and kind. She came up to me without hesitation, even though I was a complete stranger. We're in the same class, so I'll be seeing her a lot. I'm looking forward to it.)",
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
        name: "Me",
        text: "(Yuna... a girl with a mysterious aura. She didn't say much, but I keep thinking about those eyes. What was she thinking...? I want to know more about her.)",
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
        name: "Me",
        text: "(Dain... so full of energy. I don't think I'd ever be bored around her. She looked really cool playing volleyball.)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "night_reflect_nurse", condition: "met_nurse" },
            { next: "night_reflect_teacher", condition: "met_teacher" },
            { next: "night_reflect_end" }
        ]
    },
    "night_reflect_nurse": {
        name: "Me",
        text: "(The school nurse had... how do I put it, a certain charm. I kind of want to visit again.)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "night_reflect_teacher", condition: "met_teacher" },
            { next: "night_reflect_end" }
        ]
    },
    "night_reflect_teacher": {
        name: "Me",
        text: "(The homeroom teacher was surprisingly caring. I'm glad to have someone like her as my teacher.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_reflect_end"
    },
    "night_reflect_end": {
        name: "Me",
        text: "(This school might not be so bad after all. I wonder what tomorrow will bring...)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_diary_choice"
    },

    // =========================================================================
    // 3. 일기 작성 (선택) — 오늘 하루 기록 (4 노드)
    // =========================================================================

    "night_diary_choice": {
        name: "Me",
        text: "(I spot a new notebook in the desk drawer. Did Mom slip it in as a transfer gift...?)",
        background: "assets/images/background/room_my.png",
        night: true,
        choices: [
            { text: "Write about what happened today.", next: "night_diary_write_1" },
            { text: "Skip it.", next: "night_home" }
        ]
    },
    "night_diary_write_1": {
        name: "Me",
        text: "(I pick up a pen and open to the first page. 'Month X, Day X. First day at the new school. It was better than I expected.')",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_diary_write_2"
    },
    "night_diary_write_2": {
        name: "Me",
        text: "(Wrote in the diary. First day at the new school... Met various people. Don't know what kind of connections they'll turn into yet, but it wasn't a bad day.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_diary_write_3"
    },
    "night_diary_write_3": {
        name: "Me",
        text: "('Will I be able to get closer to them tomorrow? I can't wait.' ...I set the pen down and close the notebook. Writing it out helped clear my mind.)",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "wrote_diary_day1",
        next: "night_home"
    },

    // =========================================================================
    // 4. 스마트폰 확인 — 메시지 허브 (3 노드)
    // =========================================================================

    "night_home": {
        name: "Me",
        text: "(Before falling asleep, I check my phone out of habit.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        branches: [
            { next: "night_goodnight_start", excludeCondition: "has_any_contact" },
            { next: "night_home_check_contact" }
        ]
    },
    "night_home_check_contact": {
        name: "Me",
        character: null,
        text: "(The people I exchanged numbers with today... who should I message first?)",
        background: "assets/images/background/room_my.png",
        night: true,
        choices: [
            { text: "Send a message to Seoyeon.", next: "night_message_seyoun", condition: "has_number_seyoun", excludeCondition: "sent_msg_day1_seyoun" },
            { text: "Send a message to Yuna.", next: "night_message_yuna", condition: "has_number_yuna", excludeCondition: "sent_msg_day1_yuna" },
            { text: "Send a message to Dain.", next: "night_message_dain", condition: "has_number_dain", excludeCondition: "sent_msg_day1_dain" },
            { text: "Send a message to the School Nurse.", next: "night_message_nurse", condition: "has_number_nurse", excludeCondition: "sent_msg_day1_nurse" },
            { text: "Send a message to the Homeroom Teacher.", next: "night_message_teacher", condition: "has_number_teacher", excludeCondition: "sent_msg_day1_teacher" },
            { text: "Check affinity levels", next: "day1_check_affinity" },
            { text: "Stop messaging and go to sleep.", next: "night_goodnight_start" }
        ]
    },
    "day1_check_affinity": {
        name: "System",
        text: "Here are your current affinity levels with each character.{affinity_list}",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_home_check_contact"
    },

    // =========================================================================
    // 5. 담임선생님 메시지 — 따뜻한 교류 (6 노드)
    // =========================================================================

    "night_message_teacher": {
        name: "Me",
        character: "assets/images/characters/teacher_normal.png",
        text: "(I sent a message to the Homeroom Teacher. 'Thank you for looking after me today, Teacher. I think I adjusted well on my first day thanks to you!')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day1_teacher",
        next: "night_message_teacher_reply"
    },
    "night_message_teacher_reply": {
        name: "Homeroom Teacher",
        text: "(A warm reply arrived.) 'Oh my, {name}! It must have been tough on your first day as a transfer student, and you even sent a message like this. How sweet.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        stats: { Teacher: { affinity: 3 } },
        next: "night_message_teacher_extra_1"
    },
    "night_message_teacher_extra_1": {
        name: "Homeroom Teacher",
        text: "'By the way, I noticed an expression on your face during class today... were you thinking about something funny? I saw everything~'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        next: "night_message_teacher_extra_2"
    },
    "night_message_teacher_extra_2": {
        name: "Me",
        character: "assets/images/characters/teacher_smile.png",
        text: "(Uh oh... she noticed? I type a reply. 'Oh, that was... the classroom was so different from my old school, I was just fascinated!')",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_message_teacher_extra_3"
    },
    "night_message_teacher_extra_3": {
        name: "Homeroom Teacher",
        text: "'Haha, I see~ Anyway, the real start is tomorrow, so take care of yourself and get a good rest. See you tomorrow!'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/teacher_normal.png",
        night: true,
        next: "night_message_teacher_extra_4"
    },
    "night_message_teacher_extra_4": {
        name: "Me",
        character: "assets/images/characters/teacher_normal.png",
        text: "(What a warm person... I'm glad to have a homeroom teacher like her. I set my phone down with a small smile.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_home_check_contact"
    },

    // =========================================================================
    // 6. 서연 메시지 — 후속 대화 포함 (12 노드)
    // =========================================================================

    "night_message_seyoun": {
        name: "Me",
        character: null,
        text: "(What should I write to Seoyeon?)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "night_message_seyoun_lunch", condition: "ate_lunch_seoyeon" },
            { next: "night_message_seyoun_after", condition: "helped_seoyeon" },
            { next: "night_message_seyoun_generic" }
        ]
    },
    "night_message_seyoun_lunch": {
        name: "Me",
        text: "(I sent a message to Seoyeon. 'I really enjoyed having lunch together today. Thanks, Seoyeon.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day1_seyoun",
        next: "night_message_seyoun_reply_lunch"
    },
    "night_message_seyoun_after": {
        name: "Me",
        text: "(I sent a message to Seoyeon. 'I had fun helping with the student council stuff today. Hope it wasn't too tiring for you? See you tomorrow!')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day1_seyoun",
        next: "night_message_seyoun_reply_generic"
    },
    "night_message_seyoun_generic": {
        name: "Me",
        text: "(I sent a message to Seoyeon. 'Did you have a good day? See you at school tomorrow.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day1_seyoun",
        next: "night_message_seyoun_reply_generic"
    },
    "night_message_seyoun_reply_lunch": {
        name: "Seoyeon",
        text: "(Ding~ An instant reply.) 'Really? I'm glad! I should be thanking you for enjoying the food. Look forward to tomorrow too!'",
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
        name: "Seoyeon",
        text: "(Ding~ An instant reply.) 'I had a great time too! Having you around made me feel so reassured, {name}. See you at school tomorrow~'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_normal.png",
        night: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "night_message_seyoun_followup"
    },
    "night_message_seyoun_reply_high": {
        name: "Seoyeon",
        text: "(A reply came with a heart emoji.) 'You know... I keep thinking about the time we spent together today. I can't help it. I want to see you, even if it's in a dream.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        stats: { Seoyeon: { affinity: 5 } },
        next: "night_message_seyoun_followup"
    },
    "night_message_seyoun_reply_low": {
        name: "Seoyeon",
        text: "(A short reply arrived after a while.) 'Oh... yeah. See you at school tomorrow.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_normal.png",
        night: true,
        stats: { Seoyeon: { affinity: -5 } },
        next: "night_home_check_contact"
    },
    "night_message_seyoun_followup": {
        name: "Me",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "(I stared at Seoyeon's reply for a long time. I want to say something more...)",
        background: "assets/images/background/room_my.png",
        night: true,
        choices: [
            { text: "Send 'What do you want to eat tomorrow?'", next: "night_message_seyoun_followup_food" },
            { text: "Send 'Good night, Seoyeon.'", next: "night_message_seyoun_followup_goodnight" },
            { text: "Don't send anything more.", next: "night_home_check_contact" }
        ]
    },
    "night_message_seyoun_followup_food": {
        name: "Seoyeon",
        text: "(Instant reply.) 'Oh, already worried about tomorrow's lunch? How cute lol. Just wait and see — I might pack a surprise lunchbox!'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_laugh.png",
        night: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "night_message_seyoun_followup_end"
    },
    "night_message_seyoun_followup_goodnight": {
        name: "Seoyeon",
        text: "(A reply after a moment.) 'Yeah... good night, {name}. Sweet dreams.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "night_message_seyoun_followup_end"
    },
    "night_message_seyoun_followup_end": {
        name: "Me",
        character: "assets/images/characters/seyoun_laugh.png",
        text: "(I can't believe how natural it feels talking with Seoyeon. Making a friend like this on the very first day... it makes me happy.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_home_check_contact"
    },

    // =========================================================================
    // 7. 유나 메시지 — 수수께끼 메시지 포함 (9 노드)
    // =========================================================================

    "night_message_yuna": {
        name: "Me",
        character: null,
        text: "(I sent a message to Yuna. 'I had a nice time today. Sleep well.')",
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
        name: "Yuna",
        text: "(A reply arrived after a while.) '...Yeah. You too, good night. See you at school tomorrow, {name}.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        stats: { Yuna: { affinity: 3 } },
        next: "night_message_yuna_cryptic"
    },
    "night_message_yuna_reply_high": {
        name: "Yuna",
        text: "(A reply arrived after a while.) 'Today... yeah, thank you. I think I was able to smile a little because of you. Good night.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        stats: { Yuna: { affinity: 5 } },
        next: "night_message_yuna_cryptic"
    },
    "night_message_yuna_reply_low": {
        name: "Yuna",
        text: "(No reply. Only the 'read' indicator is showing.)",
        background: "assets/images/background/room_my.png",
        night: true,
        stats: { Yuna: { affinity: -5 } },
        next: "night_home_check_contact"
    },
    "night_message_yuna_cryptic": {
        name: "Yuna",
        text: "(Another message arrived.) '...By the way, {name}. If you can see the stars tonight, look at the third one. I'll tell you why later.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "night_message_yuna_cryptic_react"
    },
    "night_message_yuna_cryptic_react": {
        name: "Me",
        character: "assets/images/characters/yuna_normal.png",
        text: "(The third star...? What does she mean? Yuna says these riddle-like things sometimes.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_message_yuna_cryptic_choice"
    },
    "night_message_yuna_cryptic_choice": {
        name: "Me",
        character: "assets/images/characters/yuna_normal.png",
        text: "(What should I reply?)",
        background: "assets/images/background/room_my.png",
        night: true,
        choices: [
            { text: "Send 'Got it, I'll make sure to look.'", next: "night_message_yuna_cryptic_reply" },
            { text: "Send 'Why? What does it mean?'", next: "night_message_yuna_cryptic_ask" }
        ]
    },
    "night_message_yuna_cryptic_reply": {
        name: "Me",
        character: "assets/images/characters/yuna_normal.png",
        text: "(I replied 'Got it. I'll make sure to look.' ...I actually glance out the window, and a few stars are visible. The third star is... that one?)",
        background: "assets/images/background/room_my.png",
        night: true,
        stats: { Yuna: { affinity: 3 } },
        next: "night_message_yuna_cryptic_end"
    },
    "night_message_yuna_cryptic_ask": {
        name: "Yuna",
        text: "(Reply.) '...If I tell you now, the wish won't come true. Just look.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "night_message_yuna_cryptic_end"
    },
    "night_message_yuna_cryptic_end": {
        name: "Yuna",
        text: "(One last reply.) '...Did you see it? Then that's enough. You'll have good dreams, probably.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        next: "night_home_check_contact"
    },

    // =========================================================================
    // 8. 다인 메시지 — 셀카 & 내일 도전 포함 (9 노드)
    // =========================================================================

    "night_message_dain": {
        name: "Me",
        character: null,
        text: "(What should I write to Dain?)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "night_message_dain_date", condition: "dated_dain_day1" },
            { next: "night_message_dain_generic" }
        ]
    },
    "night_message_dain_date": {
        name: "Me",
        text: "(I sent a message to Dain. 'The tteokbokki today was seriously good! Let's go again sometime haha')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day1_dain",
        next: "night_message_dain_reply_date"
    },
    "night_message_dain_generic": {
        name: "Me",
        text: "(I sent a message to Dain. 'You looked awesome at practice today! See you tomorrow.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day1_dain",
        next: "night_message_dain_reply_generic"
    },
    "night_message_dain_reply_date": {
        name: "Dain",
        text: "(An enthusiastic reply came instantly.) 'Right?! I told you I know all the best spots! Next time we're adding sundae too!'",
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
        name: "Dain",
        text: "(An enthusiastic reply came instantly.) 'Oh~ You were watching? How embarrassing! Haha, I'll show you something even cooler tomorrow. Good night, {name}!'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_normal.png",
        night: true,
        stats: { Dain: { affinity: 3 } },
        next: "night_message_dain_selfie"
    },
    "night_message_dain_reply_high": {
        name: "Dain",
        text: "(An enthusiastic reply came instantly.) 'Already fallen for my skills? Hehe, I'll make you fall even harder tomorrow! Don't be shocked if I show up in your dreams~'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        stats: { Dain: { affinity: 5 } },
        next: "night_message_dain_selfie"
    },
    "night_message_dain_selfie": {
        name: "Dain",
        text: "(A photo arrived. It's a selfie of her flashing a peace sign in the gym.) 'Today's me! Pretty cool, right? lol'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "night_message_dain_selfie_react"
    },
    "night_message_dain_selfie_react": {
        name: "Me",
        character: "assets/images/characters/dain_laugh.png",
        text: "(Dain's selfie... her energy practically radiates from the photo. I couldn't help but smile.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_message_dain_challenge"
    },
    "night_message_dain_challenge": {
        name: "Dain",
        text: "(Another message.) 'Oh, right! How about a race up the stairs behind the school tomorrow morning? Loser buys snacks! You in?'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_normal.png",
        night: true,
        next: "night_message_dain_challenge_choice"
    },
    "night_message_dain_challenge_choice": {
        name: "Me",
        character: "assets/images/characters/dain_normal.png",
        text: "(A challenge from Dain. What should I do?)",
        background: "assets/images/background/room_my.png",
        night: true,
        choices: [
            { text: "Send 'You're on, I accept!'", next: "night_message_dain_challenge_accept" },
            { text: "Send 'What if YOU lose? lol'", next: "night_message_dain_challenge_tease" }
        ]
    },
    "night_message_dain_challenge_accept": {
        name: "Dain",
        text: "(Instant reply.) 'Ooh!! That's the spirit!! You gotta come early tomorrow, okay? Oversleep and it's a forfeit! Good night, fighting!'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        stats: { Dain: { affinity: 3 } },
        next: "night_home_check_contact"
    },
    "night_message_dain_challenge_tease": {
        name: "Dain",
        text: "(Instant reply.) 'What?! lol Big talk! Alright, we'll see about that!! Meet me at the front gate tomorrow morning! Good niiiight!!'",
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
        name: "Me",
        character: null,
        text: "(I sent a message to the School Nurse. 'Thank you for today, Teacher. I was able to rest comfortably.')",
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
        name: "School Nurse",
        text: "(A charming reply arrived.) 'Oh my, you actually messaged? Our transfer student is so sweet~'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        stats: { Nurse: { affinity: 3 } },
        next: "night_message_nurse_extra_1"
    },
    "night_message_nurse_reply_high": {
        name: "School Nurse",
        text: "(A charming reply arrived.) 'My goodness... a message like this at night? Are you trying to keep me up? Just kidding~ I really like this sweet side of you.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        stats: { Nurse: { affinity: 5 } },
        next: "night_message_nurse_extra_1"
    },
    "night_message_nurse_extra_1": {
        name: "School Nurse",
        text: "'By the way, aren't you worn out from adjusting to the new school? Don't push yourself too hard~ If you get a headache or anything, come straight to the nurse's office.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "night_message_nurse_extra_2"
    },
    "night_message_nurse_extra_2": {
        name: "Me",
        character: "assets/images/characters/nurse_normal.png",
        text: "(I replied 'Yes, thank you! Please get a good rest too, Teacher.' ...It's really warm how she quietly looks out for me.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_message_nurse_extra_3"
    },
    "night_message_nurse_extra_3": {
        name: "School Nurse",
        text: "'Thank you~ Well then, good night, {name}. I'll wish you sweet dreams.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "night_message_nurse_extra_4"
    },
    "night_message_nurse_extra_4": {
        name: "Me",
        character: "assets/images/characters/nurse_shy.png",
        text: "(Her saying 'I'll wish you sweet dreams' lingers in my mind. She's a teacher, but... why is my heart racing like this?)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_home_check_contact"
    },

    // =========================================================================
    // 10. 취침 준비 — 창 밖 풍경, 밤소리 (5 노드)
    // =========================================================================

    "night_goodnight_start": {
        name: "Me",
        character: null,
        text: "(I set my phone down and sit up in bed. Maybe I'll open the window for a moment before I sleep.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_goodnight_window"
    },
    "night_goodnight_window": {
        name: "Me",
        character: null,
        text: "(I open the window, and a cool night breeze brushes my face. A few stars are scattered across the night sky. You can see the stars so much better here than in the city.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_goodnight_sounds"
    },
    "night_goodnight_sounds": {
        name: "Me",
        character: null,
        text: "(I can hear crickets chirping. A faint train whistle in the distance... this quiet night feels somehow peaceful.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_goodnight_think"
    },
    "night_goodnight_think": {
        name: "Me",
        character: null,
        text: "(Tomorrow... Seoyeon, Yuna, Dain, and the teachers. I'll get to see them again. I wonder what stories are waiting for me.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_goodnight_close"
    },
    "night_goodnight_close": {
        name: "Me",
        character: null,
        text: "(I close the window and crawl under the covers. If I close my eyes... sleep should come soon.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "night_surprise_check"
    },

    // =========================================================================
    // 11. 심야 서프라이즈 메시지 — 호감도 최고 캐릭터 (8 노드)
    // =========================================================================

    "night_surprise_check": {
        name: "Me",
        character: null,
        text: "(Just as I'm about to close my eyes — ding! My phone buzzes with a notification. Who could it be at this hour...?)",
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
        name: "Seoyeon",
        text: "(A message from Seoyeon.) 'I can't sleep so... do you want to meet at the front gate tomorrow and walk to school together?'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "night_surprise_seyoun_react"
    },
    "night_surprise_seyoun_react": {
        name: "Me",
        character: "assets/images/characters/seyoun_shy.png",
        text: "(I replied 'Sure! I'll see you at the front gate tomorrow.' ...Seoyeon reached out first. That somehow makes me feel really happy.)",
        background: "assets/images/background/room_my.png",
        night: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "night_surprise_react"
    },
    "night_surprise_yuna": {
        name: "Yuna",
        text: "(A message from Yuna.) '...Are you still awake? The stars are pretty tonight. That's all I wanted to say.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "night_surprise_yuna_react"
    },
    "night_surprise_yuna_react": {
        name: "Me",
        character: "assets/images/characters/yuna_normal.png",
        text: "(I replied 'I was just looking at the stars too.' ...The thought that we're looking at the same sky feels strangely exciting.)",
        background: "assets/images/background/room_my.png",
        night: true,
        stats: { Yuna: { affinity: 3 } },
        next: "night_surprise_react"
    },
    "night_surprise_dain": {
        name: "Dain",
        text: "(A message from Dain.) 'You're still up, right?! Don't forget about tomorrow's race!! You should probably stretch beforehand lol. Good night!'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "night_surprise_dain_react"
    },
    "night_surprise_dain_react": {
        name: "Me",
        character: "assets/images/characters/dain_laugh.png",
        text: "(I replied 'Don't worry, I'm ready!' Dain's energy really never fades, even at night.)",
        background: "assets/images/background/room_my.png",
        night: true,
        stats: { Dain: { affinity: 3 } },
        next: "night_surprise_react"
    },
    "night_surprise_nurse": {
        name: "School Nurse",
        text: "(A message from the School Nurse.) 'If you're still up, that's no good~ Should I give you a sleep consultation at the nurse's office tomorrow? Just kidding. Good night.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "night_surprise_nurse_react"
    },
    "night_surprise_nurse_react": {
        name: "Me",
        character: "assets/images/characters/nurse_shy.png",
        text: "(I replied 'I'm going to sleep now! Thank you, Teacher.' ...She's playful, but she's genuinely worried about me, isn't she?)",
        background: "assets/images/background/room_my.png",
        night: true,
        stats: { Nurse: { affinity: 3 } },
        next: "night_surprise_react"
    },
    "night_surprise_teacher": {
        name: "Homeroom Teacher",
        text: "(A message from the Homeroom Teacher.) 'Are you still awake by any chance? I wanted to let you know the schedule changed. 3rd period is PE now. Good night!'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        next: "night_surprise_teacher_react"
    },
    "night_surprise_teacher_react": {
        name: "Me",
        character: "assets/images/characters/teacher_smile.png",
        text: "(I replied 'Thank you, Teacher! Good night~' She's so attentive and thoughtful. What a kind person.)",
        background: "assets/images/background/room_my.png",
        night: true,
        stats: { Teacher: { affinity: 3 } },
        next: "night_surprise_react"
    },
    "night_surprise_react": {
        name: "Me",
        character: null,
        text: "(That surprised me, but... it made me happy. I flip my phone face-down and pull up the covers. Today was truly a wonderful day.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day1_end"
    },

    // =========================================================================
    // 12. Day 1 종료 — Day 2 전환
    // =========================================================================

    "day1_end": {
        name: "Me",
        text: "(As I close my eyes, the faces of the girls I met today drift through my mind one by one. Seoyeon's smile, Yuna's gaze, Dain's laughter... will I grow closer to them tomorrow...?)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        fade: true,
        changeDay: 2,
        next: "day2_start"
    }
});
