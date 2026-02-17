/**
 * ============================================================================
 * CUPID - Day 2 Night Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day2_4_night.js
 * 언어: 영어 (English)
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
        name: "Me",
        text: "(As I step out of the school gate, the evening air wraps around my face. The sky is already fading into a deep navy blue.)",
        background: "assets/images/background/street.png",
        bgm: "night2.mp3",
        character: null,
        night: true,
        next: "day2_end_walk_home"
    },
    "day2_end_walk_home": {
        name: "Me",
        text: "(The streetlights begin flickering on one by one. This road has become so familiar that my feet know where to turn without thinking.)",
        background: "assets/images/background/street.png",
        night: true,
        next: "day2_end_evening_air"
    },
    "day2_end_evening_air": {
        name: "Me",
        text: "(The smell of someone cooking dinner drifts on the breeze. Warm light seeps through a neighbor's window... Something about this ordinary scene puts my mind strangely at ease.)",
        background: "assets/images/background/street.png",
        night: true,
        next: "day2_end_arrive_home"
    },
    "day2_end_arrive_home": {
        name: "Me",
        text: "(I open the front door and step inside. I mutter 'I'm home' as I take off my shoes, but there's no reply. Looks like my parents aren't back yet.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_end_change_clothes"
    },
    "day2_end_change_clothes": {
        name: "Me",
        text: "(I change out of my uniform into something comfortable. The moment the tie comes off, it feels like all the tension from the day melts away at once.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_end_settle"
    },
    "day2_end_settle": {
        name: "Me",
        text: "(I set my bag down and sit at my desk. I file away the printouts from today and drink a glass of water. The only sound in the quiet room is the ticking of the clock.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_end_2"
    },
    "day2_end_2": {
        name: "Me",
        text: "(I lean back against my bed and stare at the ceiling. Today was... really something. A much deeper and more complicated day than yesterday.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_reflect_start"
    },

    // =========================================================================
    // 2. 하루 회상 — 오늘의 사건들을 되돌아보기 (5 노드)
    // =========================================================================

    "day2_night_reflect_start": {
        name: "Me",
        text: "(When I close my eyes, the scenes from today flash by like a panorama. It's only been two days... but this school already feels like part of my everyday life.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_reflect_yuna_check"
    },
    "day2_night_reflect_yuna_check": {
        name: "System",
        text: "",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "day2_night_reflect_yuna_secret", condition: "met_yuna" },
            { next: "day2_night_reflect_seoyeon_check" }
        ]
    },
    "day2_night_reflect_yuna_secret": {
        name: "Me",
        text: "(The secret Yuna whispered to me... it still lingers in my mind. Why did she tell only me something like that? What kind of world lies behind those mysterious eyes of hers...)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_reflect_seoyeon_check"
    },
    "day2_night_reflect_seoyeon_check": {
        name: "System",
        text: "",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "day2_night_reflect_seoyeon", condition: "met_seoyeon" },
            { next: "day2_night_reflect_dain_check" }
        ]
    },
    "day2_night_reflect_seoyeon": {
        name: "Me",
        text: "(Seoyeon was her usual cheerful self today. Even though she's busy with student council work, she tries so hard to look after me... I feel a bit guilty, but also grateful.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_reflect_dain_check"
    },
    "day2_night_reflect_dain_check": {
        name: "System",
        text: "",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "day2_night_reflect_dain", condition: "met_dain" },
            { next: "day2_night_reflect_adults" }
        ]
    },
    "day2_night_reflect_dain": {
        name: "Me",
        text: "(Dain is... ah, that energy. There's never a dull moment with her. Watching her play sports was really cool, and messing around with her was fun. I wonder what challenge she'll throw at me tomorrow.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_reflect_adults"
    },
    "day2_night_reflect_adults": {
        name: "Me",
        text: "(The School Nurse had that mysterious aura about her again today, and the Homeroom Teacher was playful yet subtly attentive toward me. Is it more complicated because they're adults, or... am I just overthinking it?)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_snack_start"
    },

    // =========================================================================
    // 3. 야식 타임 — 부엌에서 간식 챙기기 (4 노드)
    // =========================================================================

    "day2_night_snack_start": {
        name: "Me",
        text: "(Lost in thought, I realize I've gotten hungry. I barely ate dinner... maybe I should find something in the kitchen.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_snack_kitchen"
    },
    "day2_night_snack_kitchen": {
        name: "Me",
        text: "(I open the fridge and find a few side dishes Mom left behind and some instant noodles. I'm in the mood for ramen tonight.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_snack_ramen"
    },
    "day2_night_snack_ramen": {
        name: "Me",
        text: "(I put water in the pot and start boiling the ramen. The bubbling sound fills the quiet kitchen. Watching the steam curl up makes me feel at ease.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_snack_think"
    },
    "day2_night_snack_think": {
        name: "Me",
        text: "(I slurp the ramen and think. The people I exchanged numbers with today... should I send them a message? Or just go to sleep? After finishing the dishes, I head back to my room.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_home"
    },

    // =========================================================================
    // 4. SNS 확인 — 메시지 전 소셜 미디어 둘러보기 (6 노드)
    // =========================================================================

    "day2_night_home": {
        name: "Me",
        text: "(I lie on my bed and pick up my phone out of habit.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        branches: [
            { next: "day2_night_goodnight_start", excludeCondition: "has_any_contact" },
            { next: "day2_night_social_media" }
        ]
    },
    "day2_night_social_media": {
        name: "Me",
        text: "(Before sending any messages, I quickly scroll through social media. My school friends' posts fill the timeline.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_social_media_scroll"
    },
    "day2_night_social_media_scroll": {
        name: "Me",
        text: "(Someone's photo of school lunch, a sneaky shot taken during PE class, a picture of the sunset over the school field... Everyone's living their own version of the day.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_social_media_post"
    },
    "day2_night_social_media_post": {
        name: "Me",
        text: "(Seoyeon's student council activity photo is loaded with likes. Dain's volleyball practice video has a flood of comments saying 'So cool!'...)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_social_media_react"
    },
    "day2_night_social_media_react": {
        name: "Me",
        text: "(I smile without realizing it. I tap a few likes and close the timeline. ...Maybe it's time to send a message directly.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_home_check_contact"
    },

    // =========================================================================
    // 5. 메시지 허브 — 캐릭터 선택 (2 노드)
    // =========================================================================

    "day2_night_home_check_contact": {
        name: "Me",
        text: "(Should I send a message to someone...?)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        choices: [
            { text: "Send a message to Seoyeon.", next: "day2_night_message_seyoun", condition: "has_number_seyoun", excludeCondition: "sent_msg_day2_seyoun" },
            { text: "Send a message to Yuna.", next: "day2_night_message_yuna", condition: "has_number_yuna", excludeCondition: "sent_msg_day2_yuna" },
            { text: "Send a message to Dain.", next: "day2_night_message_dain", condition: "has_number_dain", excludeCondition: "sent_msg_day2_dain" },
            { text: "Send a message to the School Nurse.", next: "day2_night_message_nurse", condition: "has_number_nurse", excludeCondition: "sent_msg_day2_nurse" },
            { text: "Send a message to the Homeroom Teacher.", next: "day2_night_message_teacher", condition: "has_number_teacher", excludeCondition: "sent_msg_day2_teacher" },
            { text: "Head to the School Nurse's place.", next: "day2_night_nurse_home", condition: "invited_nurse_home" },
            { text: "Check affinity", next: "day2_check_affinity" },
            { text: "Stop messaging and go to sleep.", next: "day2_night_goodnight_start" }
        ]
    },
    "day2_check_affinity": {
        name: "System",
        text: "Here is your current affinity status with each character.{affinity_list}",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_home_check_contact"
    },

    // =========================================================================
    // 6. 보건선생님 댁 방문 — 특별 이벤트 (11 노드)
    // =========================================================================

    "day2_night_nurse_home": {
        name: "Me",
        text: "(I head to the address she gave me. It's a quiet studio apartment building near the school. My heart beats faster as I ride the elevator up.)",
        background: "assets/images/background/nurse_house.png",
        character: null,
        night: true,
        next: "day2_night_nurse_home_entrance"
    },
    "day2_night_nurse_home_entrance": {
        name: "Me",
        character: "assets/images/characters/nurse_normal.png",
        text: "(I press the doorbell and hear rustling from inside. A voice calls out 'Just a moment~' followed by footsteps drawing closer.)",
        background: "assets/images/background/nurse_house.png",
        night: true,
        next: "day2_night_nurse_home_casual"
    },
    "day2_night_nurse_home_casual": {
        name: "Me",
        text: "(The figure that appears from behind the door is... completely different from how she looks at school. Instead of her white coat, she's wearing a cozy knit sweater and a long skirt. A faint scent of shampoo drifts from her slightly damp hair.)",
        background: "assets/images/background/nurse_house.png",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day2_night_nurse_home_2"
    },
    "day2_night_nurse_home_2": {
        name: "School Nurse",
        text: "\"Oh my, you actually came? Come on in. It must be cold outside, right?\"",
        background: "assets/images/background/nurse_house.png",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day2_night_nurse_home_tea"
    },
    "day2_night_nurse_home_tea": {
        name: "Me",
        character: "assets/images/characters/nurse_normal.png",
        text: "(Stepping inside, a cozy studio apartment comes into view. Soft indirect lighting, small potted plants, warm-toned décor. She puts the kettle on in the kitchen.)",
        background: "assets/images/background/nurse_house.png",
        night: true,
        next: "day2_night_nurse_home_3"
    },
    "day2_night_nurse_home_3": {
        name: "School Nurse",
        text: "\"Here, sit down. I'll make you a warm cup of tea. Being alone with my cute transfer student... it feels kind of special, don't you think?\"",
        background: "assets/images/background/nurse_house.png",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day2_night_nurse_home_talk_life"
    },
    "day2_night_nurse_home_talk_life": {
        name: "School Nurse",
        text: "\"At school, I'm always 'the teacher,' but here, I'm just a person. When I get home, I drink tea and watch dramas like this. Surprised?\"",
        background: "assets/images/background/nurse_house.png",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day2_night_nurse_home_talk_alone"
    },
    "day2_night_nurse_home_talk_alone": {
        name: "School Nurse",
        text: "\"Actually... you're the first student I've ever invited to this place. Living alone, it gets lonely sometimes. I thought it would be nice to have someone to share tea with.\"",
        background: "assets/images/background/nurse_house.png",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        stats: { Nurse: { affinity: 5 } },
        next: "day2_night_nurse_home_decision"
    },
    "day2_night_nurse_home_decision": {
        name: "Me",
        character: "assets/images/characters/nurse_normal.png",
        text: "(I glance at the clock — it's already past 11 PM. The teacup is empty, and the night has grown deep. Should I stay a bit longer, or head back...)",
        background: "assets/images/background/nurse_house.png",
        night: true,
        choices: [
            { text: "Stay a little longer.", next: "day2_night_nurse_home_4" },
            { text: "It's late, I should head back.", next: "day2_night_home_check_contact" }
        ]
    },
    "day2_night_nurse_home_4": {
        name: "Me",
        text: "(Her room... a quiet moment for just the two of us, under the dim lighting.)",
        background: "assets/images/background/nurse_home_event1.png",
        character: null,
        night: true,
        next: "day2_night_nurse_home_5"
    },
    "day2_night_nurse_home_5": {
        name: "Me",
        text: "(Alone with her in this room... my heartbeat pounds so loudly it echoes in my ears. Her scent tickles the tip of my nose, and the night only grows deeper.)",
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
        name: "Me",
        character: null,
        text: "(What should I text Seoyeon?)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "day2_night_message_seyoun_after", condition: "day2_met_seoyeon_after" },
            { next: "day2_night_message_seyoun_lunch", condition: "day2_ate_lunch_seoyeon" },
            { next: "day2_night_message_seyoun_generic" }
        ]
    },
    "day2_night_message_seyoun_after": {
        name: "Me",
        text: "(I sent Seoyeon a message. 'From tonight's sunset to your overtime(?), I was really happy to spend it all with you. See you tomorrow!')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_seyoun",
        next: "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_lunch": {
        name: "Me",
        text: "(I sent Seoyeon a message. 'The sandwich at lunch today was really delicious! See you tomorrow.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_seyoun",
        next: "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_generic": {
        name: "Me",
        text: "(I sent Seoyeon a message. 'How was your day? See you at school tomorrow.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_seyoun",
        next: "day2_night_message_seyoun_reply"
    },
    "day2_night_message_seyoun_reply": {
        type: "free_talk",
        maxTurns: 10,
        name: "Seoyeon",
        text: "(Ding~ An instant reply.) 'I had so much fun too! I feel reassured having you around, {name}. Don't forget about lunch together tomorrow! Good night.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        context: "It's nighttime, and they are chatting via smartphone messages from their respective homes. Seoyeon was happy to receive the protagonist's message and has sent a reply. Please continue the conversation until it naturally wraps up. Once the conversation concludes, the protagonist will drift off to sleep looking forward to tomorrow. Only on the final turn, say goodnight or suggest seeing each other at school tomorrow to end the conversation naturally.",
        personality: "A bright, affectionate, and friendly student council president. She has feelings for the protagonist and approaches him honestly and proactively.",
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
        name: "Me",
        text: "(Talking with Seoyeon is always a joy. I can feel the sincerity in her warm words, and it makes packing my bag feel lighter. I'm already looking forward to lunchtime tomorrow.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun_reply_normal": {
        name: "Me",
        text: "(I finished chatting with Seoyeon without any issues. I'd better not forget our lunch plans tomorrow.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_seyoun_reply_low": {
        name: "Me",
        text: "(Seoyeon's response feels more businesslike than usual. Did I do something wrong? I should approach her more carefully tomorrow.)",
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
        name: "Me",
        character: null,
        text: "(What should I text Yuna?)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "day2_night_message_yuna_met", condition: "day2_met_yuna_after" },
            { next: "day2_night_message_yuna_met", condition: "day2_met_yuna_lunch" },
            { next: "day2_night_message_yuna_generic" }
        ]
    },
    "day2_night_message_yuna_met": {
        name: "Me",
        text: "(I sent Yuna a message. 'What you showed me today... I won't forget it. Good night.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_yuna",
        next: "day2_night_message_yuna_reply"
    },
    "day2_night_message_yuna_generic": {
        name: "Me",
        text: "(I sent Yuna a message. 'How was your day today? See you at school tomorrow.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_yuna",
        next: "day2_night_message_yuna_reply"
    },
    "day2_night_message_yuna_reply": {
        type: "free_talk",
        maxTurns: 10,
        name: "Yuna",
        text: "(A reply arrives after a moment.) '...Yeah. I knew you'd understand. I'll be watching over you, even in your dreams, {name}.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        context: "It's nighttime, and they are chatting via smartphone messages from their respective homes. Yuna has sent a brief but deeply lingering reply to the protagonist's message. Please continue the conversation until it naturally wraps up. Once the conversation concludes, the protagonist will drift off to sleep looking forward to tomorrow. Only on the final turn, say goodnight or suggest seeing each other at school tomorrow to end the conversation naturally.",
        personality: "A mysterious, cool, and secretive girl. She feels a strange fascination toward the protagonist and uses short, enigmatic phrases.",
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
        name: "Me",
        text: "(I feel myself being drawn deeper into Yuna's mysterious aura. Her words about watching over me in my dreams feel less frightening and more strangely comforting. It almost feels like I really could meet her in a dream.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_yuna_reply_normal": {
        name: "Me",
        text: "(Talking with Yuna is still puzzling, but I feel like we've gotten a little closer. The secrets she mentioned keep swirling in my mind.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_yuna_reply_low": {
        name: "Me",
        text: "(Yuna's attitude is so cold and unsettling. A chill runs through me, and I wonder if stepping into her world was really the right choice.)",
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
        name: "Me",
        character: null,
        text: "(What should I text Dain?)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "day2_night_message_dain_after", condition: "day2_met_dain_after" },
            { next: "day2_night_message_dain_lunch", condition: "day2_met_dain_lunch" },
            { next: "day2_night_message_dain_generic" }
        ]
    },
    "day2_night_message_dain_after": {
        name: "Me",
        text: "(I'm reminded of what happened during after-school practice. What should I text her?)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "day2_night_message_dain_bet", condition: "day2_dain_bet" },
            { next: "day2_night_message_dain_practice" }
        ]
    },
    "day2_night_message_dain_bet": {
        name: "Me",
        text: "(I sent Dain a message. 'Great job at practice today! Don't forget our tteokbokki bet tomorrow.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_practice": {
        name: "Me",
        text: "(I sent Dain a message. 'Great job at practice today! I had a blast thanks to you. See you tomorrow!')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_lunch": {
        name: "Me",
        text: "(I sent Dain a message. 'Running into you at the snack bar today was fun! Let's go grab tteokbokki tomorrow.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_generic": {
        name: "Me",
        text: "(I sent Dain a message. 'Hey Dain, great job today! See you tomorrow.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_dain",
        next: "day2_night_message_dain_reply"
    },
    "day2_night_message_dain_reply": {
        type: "free_talk",
        maxTurns: 10,
        name: "Dain",
        text: "(An energetic reply.) 'Of course! I'm gonna win, so have your wallet ready! Haha, good night, {name}!'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        context: "It's nighttime, and they are chatting via smartphone messages from their respective homes. Dain has sent an energetic reply to the protagonist's message. Please continue the conversation until it naturally wraps up. Once the conversation concludes, the protagonist will drift off to sleep looking forward to tomorrow. Only on the final turn, say goodnight or suggest seeing each other at school tomorrow to end the conversation naturally.",
        personality: "An easygoing and refreshingly straightforward volleyball team ace. She enjoys spending time with the protagonist and converses in a playful, energetic manner.",
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
        name: "Me",
        text: "(Dain's vibrant energy lifts my spirits too. I can practically see her grinning as she teases 'have your wallet ready.' Should I maybe lose the tteokbokki bet on purpose just for her tomorrow?)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_dain_reply_normal": {
        name: "Me",
        text: "(I had a fun chat with Dain. I should mentally prepare so I don't lose the tteokbokki bet tomorrow.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_dain_reply_low": {
        name: "Me",
        text: "(Dain's response is more lifeless than usual. I wonder if my message annoyed her. The hand holding my phone feels awkward.)",
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
        name: "Me",
        character: null,
        text: "(What should I text the School Nurse?)",
        background: "assets/images/background/room_my.png",
        night: true,
        branches: [
            { next: "day2_night_message_nurse_rest", condition: "day2_met_nurse_after" },
            { next: "day2_night_message_nurse_rest", condition: "woke_up_in_nurse_room" },
            { next: "day2_night_message_nurse_generic" }
        ]
    },
    "day2_night_message_nurse_rest": {
        name: "Me",
        text: "(I sent the School Nurse a message. 'Thank you for today, ma'am. I got a good rest thanks to you.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_nurse",
        next: "day2_night_message_nurse_reply"
    },
    "day2_night_message_nurse_generic": {
        name: "Me",
        text: "(I sent the School Nurse a message. 'Thank you for your hard work today, ma'am. Good night.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_nurse",
        next: "day2_night_message_nurse_reply"
    },
    "day2_night_message_nurse_reply": {
        type: "free_talk",
        maxTurns: 10,
        name: "School Nurse",
        text: "(A captivating reply.) 'Oh my, already thinking about me? Hehe, get a good night's sleep and let me see that face again tomorrow. Good night, {name}.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        context: "It's nighttime, and they are chatting via smartphone messages from their respective homes. The School Nurse has sent a playful and alluring reply to the protagonist's message. Please continue the conversation until it naturally wraps up. Once the conversation concludes, the protagonist will drift off to sleep looking forward to tomorrow. Only on the final turn, say goodnight or suggest seeing each other at school tomorrow to end the conversation naturally.",
        personality: "A languid, alluring, yet warmhearted school nurse. She feels a mysterious attraction to the protagonist and has a bold, daringly flirtatious personality.",
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
        name: "Me",
        text: "(Her alluring tone seems to linger in my ears. I can almost see her smile through the screen, and my heart trembles. No matter what happens tomorrow, I have to stop by the nurse's office.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_nurse_reply_normal": {
        name: "Me",
        text: "(I finished texting the School Nurse without any issues. I should greet her warmly if I see her at school tomorrow.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_nurse_reply_low": {
        name: "Me",
        text: "(Her reply is painfully matter-of-fact. It feels like she's treating me as just another student, and a bitter feeling sinks in.)",
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
        name: "Me",
        character: null,
        text: "(I sent the Homeroom Teacher a message. 'Thank you for your hard work today, ma'am. Good night.')",
        background: "assets/images/background/room_my.png",
        night: true,
        setFlag: "sent_msg_day2_teacher",
        next: "day2_night_message_teacher_reply"
    },
    "day2_night_message_teacher_reply": {
        type: "free_talk",
        maxTurns: 10,
        name: "Homeroom Teacher",
        text: "(A slightly delayed reply.) 'Oh my, {name}. A message at this hour — I'm a little surprised. But thank you for thinking of me. You get a good night's sleep too, and don't be late tomorrow.'",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        context: "It's nighttime, and they are chatting via smartphone messages from their respective homes. The Homeroom Teacher was a bit flustered but grateful for the protagonist's message, and has sent a reply. Please continue the conversation until it naturally wraps up. Once the conversation concludes, the protagonist will drift off to sleep looking forward to tomorrow. Only on the final turn, say goodnight or suggest seeing each other at school tomorrow to end the conversation naturally.",
        personality: "A homeroom teacher who keeps a clear line between professional and personal, yet has a soft spot for the protagonist. She cares warmly and attentively while trying to maintain boundaries.",
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
        name: "Me",
        text: "(The warmth in her reply makes my heart feel full. It's not just being treated as a student — I feel a little respected as a person, and it makes me look forward to going to school tomorrow.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_teacher_reply_normal": {
        name: "Me",
        text: "(I finished chatting with the Homeroom Teacher without any problems. I'd better make sure I'm not late tomorrow.)",
        background: "assets/images/background/room_my.png",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        night: true,
        next: "day2_night_home_check_contact"
    },
    "day2_night_message_teacher_reply_low": {
        name: "Me",
        text: "(Her reply is short and strict. The regret of texting her during her personal time washes over me.)",
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
        name: "Me",
        character: null,
        text: "(I set my phone down and walk over to the window. Before falling asleep, I just want to take in this night for a moment.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_goodnight_stars"
    },
    "day2_night_goodnight_stars": {
        name: "Me",
        character: null,
        text: "(Opening the window, cold night air rushes in. Stars are scattered across the sky above. They seem even brighter than yesterday... Yuna's mention of 'the third star' crosses my mind.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_goodnight_sounds"
    },
    "day2_night_goodnight_sounds": {
        name: "Me",
        character: null,
        text: "(The chirping of insects continues endlessly. A car horn sounds once from somewhere far away, then silence returns. The nights in this neighborhood... are really quiet.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_goodnight_tomorrow"
    },
    "day2_night_goodnight_tomorrow": {
        name: "Me",
        character: null,
        text: "(Tomorrow will already be my third day since transferring. Seoyeon, Yuna, Dain, the teachers... How will my relationships with them change? A strange flutter of anticipation and anxiety fills my chest.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_goodnight_close"
    },
    "day2_night_goodnight_close": {
        name: "Me",
        character: null,
        text: "(I close the window and draw the curtains. I burrow into my blanket and shut my eyes. Good job today, me...)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_dream_start"
    },

    // =========================================================================
    // 13. 꿈 시퀀스 — Day 3 예고 (3 노드)
    // =========================================================================

    "day2_night_dream_start": {
        name: "Me",
        character: null,
        text: "(My consciousness fades into a haze... I'm standing in a space where I can't tell if it's a dream or reality. It looks like the school rooftop, or maybe some unknown garden.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_dream_vision"
    },
    "day2_night_dream_vision": {
        name: "???",
        text: "(Someone's voice drifts in on the wind. 'Tomorrow... there's something I want to show you.' I can't tell who the voice belongs to, but its warm yet desperate resonance lingers in my ears.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_night_dream_end"
    },
    "day2_night_dream_end": {
        name: "Me",
        character: null,
        text: "(I reach out my hand, but nothing is there. The voice slowly fades away... and my consciousness sinks into a deep, deep sleep.)",
        background: "assets/images/background/room_my.png",
        night: true,
        next: "day2_final_scene"
    },

    // =========================================================================
    // 14. Day 2 종료 — Day 3 전환
    // =========================================================================

    "day2_final_scene": {
        name: "Me",
        text: "(A faint light bleeds through the darkness. What truths await me tomorrow... I close my heavy eyelids and drift into a deep slumber.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        fade: true,
        changeDay: 3,
        next: "day3_start"
    }
});
