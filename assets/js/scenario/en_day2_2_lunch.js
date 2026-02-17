/**
 * ============================================================================
 * CUPID - Day 2 Lunch Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day2_2_lunch.js
 * 언어: 영어 (English)
 * 일차: Day 2 (2일차)
 * 시간대: Lunch (점심)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 2일차 점심시간의 다채로운 활동과 캐릭터 간의 복잡한 관계를 다룹니다.
 * 히로인들 간의 신경전(서연-다인), 유나와의 비밀 조사, 보건샘과의 대담한 교감 등 
 * 본격적인 갈등과 로맨스 분기가 발생하는 핵심 시나리오입니다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 학생회실 점심 (서연) - 직접 만든 샌드위치 취식 및 다인과의 조우(신경전 발생)
 * 2. 별관 뒤뜰 약속 (유나) - 쪽지 약속 이행, 학교 창고의 비밀 조사 제안
 * 3. 매점 데이트 (다인) - 시끌벅적한 매점 방문 및 서연과의 조우(긴장감 조성)
 * 4. 보건실 휴식 (보건샘) - 치료 중 깊은 수면, 담임 선생님과의 통화 엿듣기, 홈 데이트 초대
 * 5. 교무실 방문 (선생님) - 도시락 반 나눠 먹기 및 사제 간의 다정한 교류
 * 
 *  조건 플래그 설명 (Condition Flags)
 * ----------------------------------------------------------------------------
 * met_yuna             : 유나와 구면인지 확인 (쪽지 내용 및 대사 분기)
 * met_dain             : 다인과 구면인지 확인 (매점 동행 및 서연 반응 분기)
 * met_nurse            : 보건샘과 구면인지 확인 (친밀도 대사 분기)
 * has_number_nurse     : 보건샘 연락처 보유 여부 (유혹 분기)
 * day2_ate_lunch_seoyeon : 서연과 점심을 먹었는지 여부 (다인과의 만남 시 언급)
 * 
 *  설정 플래그 설명 (Set Flags)
 * ----------------------------------------------------------------------------
 * knows_name_dain      : 다인의 이름을 알게 됨 (초면일 경우)
 * knows_name_yuna      : 유나의 이름을 알게 됨 (초면일 경우)
 * day2_ate_lunch_seoyeon : 서연과 점심을 먹었음을 기록
 * day2_met_yuna_lunch  : 점심에 유나를 만났음을 기록
 * day2_met_dain_lunch  : 점심에 다인을 만났음을 기록
 * visited_warehouse_at_lunch : 유나와 함께 창고 비밀을 조사하기로 함
 * invited_nurse_home   : 보건샘의 집으로 정식 초대를 받음 (핵심 루특 분기)
 * has_number_nurse     : 보건샘 연락처 획득 시 설정
 * has_any_contact      : 보건샘 연락처 획득 시 설정
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 모든 히로인들에 대해 선택지에 따라 대폭 상승/하락 가능 (갈등 선택지 주의)
 * 
 *  특이 사항
 * ----------------------------------------------------------------------------
 * - 캐릭터 간 조우(Double Character): 서연-다인 간의 긴장감 넘치는 2인 씬 포함
 * - sunset: true (보건실 씬 후반): 낮잠 후 노을 지는 시간대로의 연출 전환
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
 * [Day 2 - Lunch] 씬 데이터 정의
 */
Object.assign(SCENARIO[2], {
    "day2_lunch_time": {
        name: "Me",
        text: "(Ding-dong-dang-dong! Finally, lunch break. The classroom is buzzing with energy, and my heart starts to race.)",
        bgm: "daily.mp3",
        character: null,
        choices: [
            { text: "Go to see Seoyeon and her radiant smile.", next: "day2_lunch_seoyeon" },
            { text: "Head to the library annex backyard as promised.", next: "day2_lunch_yuna", condition: "met_yuna" },
            { text: "Find out who left that mysterious note.", next: "day2_lunch_yuna", excludeCondition: "met_yuna" },
            { text: "Go to the gym to see Dain.", next: "day2_lunch_dain", condition: "met_dain" },
            { text: "Follow the lively sounds from the gymnasium.", next: "day2_lunch_dain", excludeCondition: "met_dain" },
            { text: "I need some rest. Heading to the nurse's office.", next: "day2_lunch_nurse" },
            { text: "Go to the faculty room to see the teacher.", next: "day2_lunch_teacher" }
        ]
    },
    "day2_lunch_teacher": {
        name: "Me",
        text: "(I open the faculty room door. My teacher, who was about to eat, smiles warmly when she sees me.)",
        background: "assets/images/background/teacher_office.png",
        character: "assets/images/characters/teacher_smile.png",
        next: "day2_lunch_teacher_2"
    },
    "day2_lunch_teacher_2": {
        name: "Homeroom Teacher",
        background: "assets/images/background/teacher_office.png",
        text: "\"Oh, {name}! Did you have a good lunch? I was just about to start mine.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day2_lunch_teacher_3"
    },
    "day2_lunch_teacher_3": {
        name: "Homeroom Teacher",
        background: "assets/images/background/teacher_office.png",
        text: "\"Did you come all this way just to eat with me? Hehe, just kidding.\"",
        character: "assets/images/characters/teacher_smile.png",
        choices: [
            { text: "Actually, yes. Can I sit next to you?", next: "day2_lunch_teacher_eat", stats: { Teacher: { affinity: 15 } } },
            { text: "Your lunch looks so good, I couldn't resist.", next: "day2_lunch_teacher_food", stats: { Teacher: { affinity: 5 } } },
            { text: "I was just passing by and thought of you.", next: "day2_lunch_teacher_pass", stats: { Teacher: { affinity: 3 } } }
        ]
    },
    "day2_lunch_teacher_eat": {
        name: "Homeroom Teacher",
        background: "assets/images/background/teacher_office.png",
        text: "\"My, my... you're a bold student, aren't you? Fine, I'll share some. Here, say 'Ah~'.\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "day2_lunch_teacher_end"
    },
    "day2_lunch_teacher_food": {
        name: "Homeroom Teacher",
        background: "assets/images/background/teacher_office.png",
        text: "\"Hehe, my mother is quite the cook. I'd love to let you taste her cooking properly sometime.\"",
        character: "assets/images/characters/teacher_smile.png",
        next: "day2_lunch_teacher_end"
    },
    "day2_lunch_teacher_pass": {
        name: "Homeroom Teacher",
        background: "assets/images/background/teacher_office.png",
        text: "\"Is that so? Well, thank you for stopping by. Have a great lunch break!\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day2_lunch_teacher_end"
    },
    "day2_lunch_teacher_end": {
        name: "Me",
        background: "assets/images/background/teacher_office.png",
        text: "(After a brief but sweet chat, I head back. Her gentle smile stays with me.)",
        character: null,
        next: "day2_afternoon_class"
    },
    "day2_lunch_seoyeon": {
        name: "Seoyeon",
        text: "(I open the student council room. Seoyeon, eating her lunch, blinks in surprise and then beams.)",
        background: "assets/images/background/student_room.png",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_seoyeon_lunch_talk"
    },
    "day2_seoyeon_lunch_talk": {
        name: "Seoyeon",
        background: "assets/images/background/student_room.png",
        text: "\"{name}! I was just hoping you'd come. Sit here. I made some extra sandwiches today.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        choices: [
            { text: "They look amazing! You're a natural, Seoyeon.", next: "day2_seoyeon_lunch_praise", stats: { Seoyeon: { affinity: 8 } } },
            { text: "Aren't you tired from all the work? Don't overdo it.", next: "day2_seoyeon_lunch_worry", stats: { Seoyeon: { affinity: 5 } } },
            { text: "You've got a crumb... hold still. (Wipe it off)", next: "day2_seoyeon_lunch_touch", stats: { Seoyeon: { affinity: 10 } } }
        ]
    },
    "day2_seoyeon_lunch_praise": {
        name: "Seoyeon",
        background: "assets/images/background/student_room.png",
        text: "\"Really? I was worried they might not be to your taste. Eat up!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        setFlag: "day2_ate_lunch_seoyeon",
        next: "day2_seoyeon_lunch_dain_event"
    },
    "day2_seoyeon_lunch_worry": {
        name: "Seoyeon",
        background: "assets/images/background/student_room.png",
        text: "\"I'm okay. Seeing you enjoy the food makes all the fatigue disappear. Truly.\"",
        character: "assets/images/characters/seyoun_normal.png",
        setFlag: "day2_ate_lunch_seoyeon",
        next: "day2_seoyeon_lunch_dain_event"
    },
    "day2_seoyeon_lunch_touch": {
        name: "Seoyeon",
        background: "assets/images/background/student_room.png",
        text: "\"Ah... T-thank you. I must have been eating too greedily... (She blushes slightly)\"",
        character: "assets/images/characters/seyoun_shy.png",
        setFlag: "day2_ate_lunch_seoyeon",
        next: "day2_seoyeon_lunch_dain_event"
    },
    "day2_seoyeon_lunch_dain_event": {
        name: "Me",
        background: "assets/images/background/student_room.png",
        text: "(Just then, someone passing by the student council room window waves at us.)",
        character: "assets/images/characters/seyoun_normal.png",
        branches: [
            { next: "day2_seoyeon_lunch_dain_known", condition: "met_dain" },
            { next: "day2_seoyeon_lunch_dain_unknown" }
        ]
    },
    "day2_seoyeon_lunch_dain_known": {
        name: "Dain",
        text: "\"Oh? {name}! Hey~! See you later!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_seoyeon_lunch_dain_react"
    },
    "day2_seoyeon_lunch_dain_unknown": {
        name: "???",
        text: "\"Huh? Who's that? A boy in the student council room... Anyway, hi~!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_seoyeon_lunch_dain_react"
    },
    "day2_seoyeon_lunch_dain_react": {
        name: "Me",
        text: "(When I look at Seoyeon, she has a subtle expression different from before.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day2_seoyeon_lunch_dain_ask"
    },
    "day2_seoyeon_lunch_dain_ask": {
        name: "Seoyeon",
        text: "\"...That's Dain from the volleyball club. {name}, are you close with her?\"",
        character: "assets/images/characters/seyoun_normal.png",
        branches: [
            { next: "day2_seoyeon_lunch_dain_yes", condition: "met_dain" },
            { next: "day2_seoyeon_lunch_dain_no" }
        ]
    },
    "day2_seoyeon_lunch_dain_yes": {
        name: "Me",
        text: "(I wonder how to answer Seoyeon's question.)",
        character: "assets/images/characters/seyoun_normal.png",
        choices: [
            { text: "Yeah, we met yesterday. She's bright and fun.", next: "day2_seoyeon_lunch_dain_honest", stats: { Seoyeon: { affinity: -3 }, Dain: { affinity: 2 } } },
            { text: "Just acquaintances. You're more important to me, Seoyeon.", next: "day2_seoyeon_lunch_dain_deny", stats: { Seoyeon: { affinity: 5 }, Dain: { affinity: -2 } } },
            { text: "Why? Are you jealous?", next: "day2_seoyeon_lunch_dain_tease", stats: { Seoyeon: { affinity: 3 } } }
        ]
    },
    "day2_seoyeon_lunch_dain_no": {
        name: "Me",
        text: "\"(Dain Jung... I'll remember that.) No, first time seeing her. Why?\"",
        character: "assets/images/characters/seyoun_normal.png",
        setFlag: "knows_name_dain",
        next: "day2_seoyeon_lunch_dain_no_react"
    },
    "day2_seoyeon_lunch_dain_no_react": {
        name: "Seoyeon",
        text: "\"Oh, nothing. Just curious. (Seoyeon smiles with relief) ...Let's keep eating!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_lunch_dain_honest": {
        name: "Seoyeon",
        text: "\"...I see. (Seoyeon looks out the window for a moment, then smiles) It's good to have many friends. I should... try harder too.\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_lunch_dain_deny": {
        name: "Seoyeon",
        text: "\"(Seoyeon's expression brightens slightly) ...Really? Hehe, hearing that makes me happy. Thanks, {name}.\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_lunch_dain_tease": {
        name: "Seoyeon",
        text: "\"J-jealous?! No way! I was just... curious! (Seoyeon turns her head away, blushing)\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "day2_seoyeon_lunch_end"
    },
    "day2_seoyeon_lunch_end": {
        name: "Me",
        text: "(After a lovely lunch with her, I return. The taste of her sandwiches is still lingering sweet.)",
        character: null,
        next: "day2_afternoon_class"
    },
    "day2_lunch_yuna": {
        name: "Me",
        text: "(Inside the old library. In the quiet, dust-filled space, Yuna stands like part of the scenery.)",
        background: "assets/images/background/library_old.png",
        bgm: "mystery.mp3",
        character: "assets/images/characters/yuna_normal.png",
        next: "day2_yuna_talk"
    },
    "day2_yuna_talk": {
        name: "Yuna",
        background: "assets/images/background/library_old.png",
        text: "\"...You came. I didn't think you'd actually show up for a note.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day2_yuna_talk_2"
    },
    "day2_yuna_talk_2": {
        name: "Yuna",
        background: "assets/images/background/library_old.png",
        text: "(She gazes at me with an unreadable expression.)",
        character: "assets/images/characters/yuna_normal.png",
        next: "day2_yuna_free_talk"
    },
    "day2_yuna_free_talk": {
        type: "free_talk",
        name: "Yuna",
        background: "assets/images/background/library_old.png",
        text: "\"...Do you have questions for me? Or do you want to know more about this school?\"",
        context: "Quiet library annex backyard, private conversation with the mysterious Yuna. Keep the conversation going actively until it's finished. After the conversation, Yuna will talk about the school's secrets and suggest that there is something she only wants to show the protagonist. ONLY at the final turn of the conversation, please create a mysterious atmosphere and stimulate the protagonist's curiosity.",
        personality: "Mysterious, cold, and secretive. She feels a strange interest in the protagonist.",
        character: "assets/images/characters/yuna_normal.png",
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 20, next: "day2_yuna_talk_branch_high" },
            { minAffinity: 0, next: "day2_yuna_talk_branch" },
            { minAffinity: -100, next: "day2_yuna_talk_branch_low" }
        ],
        next: "day2_yuna_talk_branch"
    },
    "day2_yuna_talk_branch_high": {
        name: "Me",
        text: "(Yuna's expression softens as she looks at me.)",
        character: "assets/images/characters/yuna_smile.png",
        branches: [
            { next: "day2_yuna_talk_2_met_high", condition: "met_yuna" },
            { next: "day2_yuna_talk_2_new_high" }
        ]
    },
    "day2_yuna_talk_branch_low": {
        name: "Me",
        text: "(Yuna gazes at me with cold, disappointed eyes.)",
        character: "assets/images/characters/yuna_normal.png",
        branches: [
            { next: "day2_yuna_talk_2_met_low", condition: "met_yuna" },
            { next: "day2_yuna_talk_2_new_low" }
        ]
    },
    "day2_yuna_talk_2_met_high": {
        name: "Me",
        text: "(Yuna says she feels at ease talking to me. She mentions the 'secret' and says there's something she only wants to show me.)",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "What is it? I'm curious.", next: "day2_yuna_secret_high", stats: { Yuna: { affinity: 5 } } },
            { text: "I'm more interested in talking to you.", next: "day2_yuna_normal_high", stats: { Yuna: { affinity: 4 } } }
        ]
    },
    "day2_yuna_talk_2_met_low": {
        name: "Me",
        text: "(Yuna's gaze is icy. She says I might not handle the truth, but tells me to follow her anyway since we promised.)",
        character: "assets/images/characters/yuna_normal.png",
        choices: [
            { text: "Show me. I can handle it.", next: "day2_yuna_secret_low", stats: { Yuna: { affinity: 5 } } },
            { text: "I'm not interested in secrets. I'll pass.", next: "day2_yuna_normal_low", stats: { Yuna: { affinity: 4 } } }
        ]
    },
    "day2_yuna_talk_2_new_high": {
        name: "Me",
        text: "(Yuna says she feels a strange pull toward me. She mentions a deep secret in this school and wants to show me.)",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "met_yuna",
        choices: [
            { text: "Are you the Yuna from the note? What secret?", next: "day2_yuna_new_name_ask_high", stats: { Yuna: { affinity: 5 } } },
            { text: "I just came because of the note. Who are you?", next: "day2_yuna_new_name_ask_high", stats: { Yuna: { affinity: 3 } } }
        ]
    },
    "day2_yuna_talk_2_new_low": {
        name: "Me",
        text: "(Yuna's eyes are cold. She says I don't look like I can handle the truth, but tells me to follow her since I'm here.)",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "met_yuna",
        choices: [
            { text: "What's the secret? Show me.", next: "day2_yuna_new_name_ask_low", stats: { Yuna: { affinity: 5 } } },
            { text: "I'm leaving. This feels weird.", next: "day2_yuna_new_name_ask_low", stats: { Yuna: { affinity: 3 } } }
        ]
    },
    "day2_yuna_talk_branch": {
        name: "Me",
        background: "assets/images/background/library_old.png",
        text: "(Yuna looks at me and begins to speak.)",
        character: "assets/images/characters/yuna_normal.png",
        branches: [
            { next: "day2_yuna_talk_2_met_normal", condition: "met_yuna" },
            { next: "day2_yuna_talk_2_new_normal" }
        ]
    },
    "day2_yuna_talk_2_met_normal": {
        name: "Me",
        text: "(Yuna mentions the secret she told me yesterday and says she has something to show me.)",
        character: "assets/images/characters/yuna_normal.png",
        choices: [
            { text: "What is it? I want to see.", next: "day2_yuna_secret_normal", stats: { Yuna: { affinity: 5 } } },
            { text: "I just wanted to talk to you.", next: "day2_yuna_normal_normal", stats: { Yuna: { affinity: 4 } } }
        ]
    },
    "day2_yuna_talk_2_new_normal": {
        name: "Me",
        text: "(Yuna says I must be curious about her. She offers to show me a deep secret of the school.)",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "met_yuna",
        choices: [
            { text: "Are you the Yuna from the note? What secret?", next: "day2_yuna_new_name_ask_normal", stats: { Yuna: { affinity: 5 } } },
            { text: "I just came because of the note. Who are you?", next: "day2_yuna_new_name_ask_normal", stats: { Yuna: { affinity: 3 } } }
        ]
    },
    "day2_yuna_new_name_ask_high": {
        name: "Yuna",
        text: "(She bows her head shyly.) \"...By the way, what's your name? I felt drawn to you enough to share this secret. I want to know you.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_yuna_new_name_share_high"
    },
    "day2_yuna_new_name_share_high": {
        name: "Me",
        text: "\"My name is {name}.\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "knows_name_yuna",
        next: "day2_yuna_secret_high"
    },
    "day2_yuna_new_name_ask_low": {
        name: "Yuna",
        text: "(She asks coldly.) \"...I should probably know your name before we go further. What is it?\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day2_yuna_new_name_share_low"
    },
    "day2_yuna_new_name_share_low": {
        name: "Me",
        text: "\"My name is {name}.\"",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "knows_name_yuna",
        next: "day2_yuna_secret_low"
    },
    "day2_yuna_new_name_ask_normal": {
        name: "Yuna",
        text: "\"...I forgot to ask your name. I only wrote mine on the note.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day2_yuna_new_name_share_normal"
    },
    "day2_yuna_new_name_share_normal": {
        name: "Me",
        text: "\"My name is {name}.\"",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "knows_name_yuna",
        next: "day2_yuna_secret_normal"
    },
    "day2_yuna_secret_high": {
        name: "Yuna",
        text: "(Yuna gently interlocks her fingers with mine. I can feel her heart through her warm hand.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_yuna_secret_2_high"
    },
    "day2_yuna_secret_2_high": {
        name: "Yuna",
        text: "\"I think... you're the one who can share this burden with me. {name}, will you follow me? The world ahead is different from what you know.\"",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "I'll be with you. Let's see it together.", next: "day2_yuna_secret_read_high", stats: { Yuna: { affinity: 20 } }, setFlag: "visited_warehouse_at_lunch" },
            { text: "I'm sorry, I can't handle this yet.", next: "day2_yuna_secret_stop_high", stats: { Yuna: { affinity: -10 } } }
        ]
    },
    "day2_yuna_secret_low": {
        name: "Yuna",
        text: "(Yuna grabs my sleeve and pulls me forward.)",
        character: "assets/images/characters/yuna_normal.png",
        next: "day2_yuna_secret_2_low"
    },
    "day2_yuna_secret_2_low": {
        name: "Yuna",
        text: "\"Just watch. Not like you'll understand, but you're here already. Don't get in my way.\"",
        character: "assets/images/characters/yuna_normal.png",
        choices: [
            { text: "Show me. What is it?", next: "day2_yuna_secret_read_low", stats: { Yuna: { affinity: 5 } }, setFlag: "visited_warehouse_at_lunch" },
            { text: "I'm out. This is too dangerous.", next: "day2_yuna_secret_stop_low", stats: { Yuna: { affinity: -20 } } }
        ]
    },
    "day2_yuna_secret_normal": {
        name: "Yuna",
        text: "(Yuna leads me toward the old warehouse. Her cold touch makes me shiver.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "day2_yuna_secret_2_normal"
    },
    "day2_yuna_secret_2_normal": {
        name: "Yuna",
        text: "\"Inside are records the school has hidden for a long time. Once you see them... everything will change.\"",
        character: "assets/images/characters/yuna_smile.png",
        choices: [
            { text: "Can I see them too?", next: "day2_yuna_secret_read", stats: { Yuna: { affinity: 15 } }, setFlag: "visited_warehouse_at_lunch" },
            { text: "Is it safe? Maybe we should leave it.", next: "day2_yuna_secret_stop", stats: { Yuna: { affinity: -20 } } },
            { text: "Why are you doing this, Yuna?", next: "day2_yuna_secret_why", stats: { Yuna: { affinity: 3 } } }
        ]
    },
    "day2_yuna_secret_read": {
        name: "Me",
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 25, next: "day2_yuna_secret_read_high" },
            { minAffinity: -999, next: "day2_yuna_secret_read_low" }
        ]
    },
    "day2_yuna_secret_stop": {
        name: "Me",
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 25, next: "day2_yuna_secret_stop_high" },
            { minAffinity: -999, next: "day2_yuna_secret_stop_low" }
        ]
    },
    "day2_yuna_secret_why": {
        name: "Me",
        affinityChar: "Yuna",
        affinityBranches: [
            { minAffinity: 25, next: "day2_yuna_secret_why_high" },
            { minAffinity: -999, next: "day2_yuna_secret_why_low" }
        ]
    },
    "day2_yuna_secret_why_high": {
        name: "Yuna",
        text: "\"Curious? Honestly... I'm not sure. But since the day you transferred, I had a feeling you'd be the one. Funny, right?\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_why_low": {
        name: "Yuna",
        text: "\"What's it to you? Just watch or leave. No need to poke your nose into my business.\"",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_read_high": {
        name: "Yuna",
        text: "\"Thank you, {name}. With you, I'm not afraid. Shall we?\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_read_low": {
        name: "Yuna",
        text: "\"You really want to see? Don't regret it. I won't help you if you start crying.\"",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_stop_high": {
        name: "Yuna",
        text: "\"...I see. You must be scared. I understand. Tell me if you change your mind later.\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_secret_stop_low": {
        name: "Yuna",
        text: "\"I knew it. You're a coward. Don't show your face again.\"",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_normal_high": {
        name: "Yuna",
        text: "\"You came just to talk to me...? Hehe, you really say sweet things. Fine, stay with me a little longer then.\"",
        character: "assets/images/characters/yuna_smile.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_normal_low": {
        name: "Yuna",
        text: "\"To talk? Pathetic. Don't waste my time and get lost.\"",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_normal_normal": {
        name: "Yuna",
        text: "\"...Is that so? You're a strange one. Most people are afraid. Fine, let's just stay like this for today.\"",
        character: "assets/images/characters/yuna_normal.png",
        setFlag: "day2_met_yuna_lunch",
        next: "day2_yuna_lunch_end"
    },
    "day2_yuna_lunch_end": {
        name: "Me",
        text: "(I head back. Her mysterious words haunt me, making it hard to focus on class.)",
        character: null,
        next: "day2_afternoon_class"
    },
    "day2_lunch_dain": {
        name: "Me",
        text: "(I open the gym. Dain, practicing hard, runs over with a wide grin.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_laugh.png",
        branches: [
            { next: "day2_dain_lunch_talk", condition: "met_dain" },
            { next: "day2_lunch_dain_new" }
        ]
    },
    "day2_lunch_dain_new": {
        name: "???",
        text: "\"Oh! A new face! You're the transfer student, right? I'm Dain from the volleyball club!\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "met_dain",
        next: "day2_lunch_dain_new_name_ask"
    },
    "day2_lunch_dain_new_name_ask": {
        name: "Dain",
        text: "\"By the way, what's your name? I'm the only one who didn't introduce myself properly!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_lunch_dain_new_name_share"
    },
    "day2_lunch_dain_new_name_share": {
        name: "Me",
        text: "\"My name is {name}.\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "knows_name_dain",
        next: "day2_dain_lunch_talk_new"
    },
    "day2_dain_lunch_talk_new": {
        name: "Dain",
        text: "\"Oh! {name}? Cool name! Great, to celebrate, lunch is on me! Let's go to the snack bar!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_store"
    },
    "day2_dain_lunch_talk": {
        name: "Dain",
        text: "\"Oh! You really came! Great, lunch is on me today! Let's go to the snack bar!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day2_dain_store"
    },
    "day2_dain_store": {
        name: "Me",
        text: "(We head to the snack bar. It's packed with students.)",
        background: "assets/images/background/store.png",
        character: "assets/images/characters/dain_normal.png",
        next: "day2_dain_store_seoyeon"
    },
    "day2_dain_store_seoyeon": {
        name: "Me",
        background: "assets/images/background/store.png",
        text: "(Just then, I spot a familiar face across the store. Seoyeon is buying a drink.)",
        character: "assets/images/characters/dain_normal.png",
        next: "day2_dain_store_seoyeon_2"
    },
    "day2_dain_store_seoyeon_2": {
        name: "Dain",
        background: "assets/images/background/store.png",
        text: "\"Oh? That girl... Isn't she the student council president? She has this unapproachable aura. {name}, do you know her?\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day2_dain_store_seoyeon_approach"
    },
    "day2_dain_store_seoyeon_approach": {
        name: "Me",
        background: "assets/images/background/store.png",
        text: "(Just then, Seoyeon notices us and walks over.)",
        character: "assets/images/characters/seyoun_normal.png",
        branches: [
            { next: "day2_dain_seoyeon_both_met", condition: "met_seoyeon" },
            { next: "day2_dain_seoyeon_both_new" }
        ]
    },
    "day2_dain_seoyeon_both_met": {
        name: "Seoyeon",
        text: "\"Oh? {name}! Fancy seeing you here. Did you enjoy lunch earlier? (Glances at Dain) ...?\"",
        characters: {
            left: "assets/images/characters/dain_normal.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_tension"
    },
    "day2_dain_seoyeon_both_new": {
        name: "Seoyeon",
        text: "\"Oh my, the transfer student? Nice to see you here. I'm Seoyeon. (Glances at Dain) ...?\"",
        characters: {
            left: "assets/images/characters/dain_normal.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_tension"
    },
    "day2_dain_seoyeon_tension": {
        name: "Dain",
        text: "\"(Dain looks slightly on guard) Oh, hi Miss President. We're just finishing up lunch here...\"",
        characters: {
            left: "assets/images/characters/dain_normal.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_tension_2"
    },
    "day2_dain_seoyeon_tension_2": {
        name: "Seoyeon",
        text: "\"(Seoyeon smiles brightly) Heh, is that so? Enjoy yourselves. {name}, come visit the student council room later, okay?\"",
        characters: {
            left: "assets/images/characters/dain_normal.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_choice"
    },
    "day2_dain_seoyeon_choice": {
        name: "Me",
        text: "(Seoyeon and Dain seem to be having some kind of subtle standoff over me. What should I say?)",
        characters: {
            left: "assets/images/characters/dain_normal.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        choices: [
            { text: "Sure, Seoyeon! I'll definitely come by later.", next: "day2_dain_seoyeon_favor_seoyeon", stats: { Seoyeon: { affinity: 5 }, Dain: { affinity: -5 } } },
            { text: "I've got plans with Dain today... Maybe next time!", next: "day2_dain_seoyeon_favor_dain", stats: { Dain: { affinity: 5 }, Seoyeon: { affinity: -3 } } },
            { text: "(Smile vaguely) Would be nice to hang with both of you.", next: "day2_dain_seoyeon_favor_both", stats: { Seoyeon: { affinity: -5 }, Dain: { affinity: -5 } } }
        ]
    },
    "day2_dain_seoyeon_favor_seoyeon": {
        name: "Dain",
        text: "\"(Dain looks a bit dejected) ...Huh, really? Already making other plans while you're with me?\"",
        character: "assets/images/characters/dain_pout.png",
        next: "day2_dain_seoyeon_favor_seoyeon_2"
    },
    "day2_dain_seoyeon_favor_seoyeon_2": {
        name: "Seoyeon",
        text: "\"(Seoyeon smiles satisfied) Hehe, thanks {name}. See you later then.\"",
        characters: {
            left: "assets/images/characters/dain_pout.png",
            right: "assets/images/characters/seyoun_laugh.png"
        },
        next: "day2_dain_seoyeon_end"
    },
    "day2_dain_seoyeon_favor_dain": {
        name: "Dain",
        text: "\"(Dain beams and grabs my arm) Hear that? {name}'s all mine today!\"",
        characters: {
            left: "assets/images/characters/dain_laugh.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_favor_dain_2"
    },
    "day2_dain_seoyeon_favor_dain_2": {
        name: "Seoyeon",
        text: "\"(Seoyeon's expression stiffens slightly) ...I see. Have fun then. See you later, {name}.\"",
        characters: {
            left: "assets/images/characters/dain_laugh.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_end"
    },
    "day2_dain_seoyeon_favor_both": {
        name: "Me",
        text: "(Both their expressions freeze at the same time.)",
        characters: {
            left: "assets/images/characters/dain_normal.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_favor_both_2"
    },
    "day2_dain_seoyeon_favor_both_2": {
        name: "Dain",
        text: "\"...Both of us? Ha, the popular type, huh?\"",
        characters: {
            left: "assets/images/characters/dain_pout.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_favor_both_3"
    },
    "day2_dain_seoyeon_favor_both_3": {
        name: "Seoyeon",
        text: "\"(Seoyeon smiles coldly) Heh... Being nice to everyone might mean you end up losing both.\"",
        characters: {
            left: "assets/images/characters/dain_pout.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_favor_both_4"
    },
    "day2_dain_seoyeon_favor_both_4": {
        name: "Dain",
        text: "\"(Dain looks at Seoyeon in surprise) Whoa, Miss President's pretty blunt, huh? But I actually agree.\"",
        characters: {
            left: "assets/images/characters/dain_normal.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_favor_both_5"
    },
    "day2_dain_seoyeon_favor_both_5": {
        name: "Me",
        text: "(The two of them exchange glances while staring at me. Things just got really awkward...)",
        characters: {
            left: "assets/images/characters/dain_normal.png",
            right: "assets/images/characters/seyoun_normal.png"
        },
        next: "day2_dain_seoyeon_end"
    },
    "day2_dain_seoyeon_end": {
        name: "Me",
        text: "(Seoyeon waves and walks away. Dain watches me intently for a moment, then smiles again.)",
        character: "assets/images/characters/dain_normal.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_free_talk"
    },
    "day2_dain_free_talk": {
        type: "free_talk",
        name: "Dain",
        text: "\"Wow, it's crowded! Right? Let's chat while we wait. Anything you want to know?\"",
        context: "In front of the crowded school store, standing in line with Dain to buy snacks. Keep the conversation going actively until it's finished. After the conversation, you will choose snacks at the store. ONLY at the final turn of the conversation, please naturally lead into the next situation by mentioning that it's almost our turn or by deciding what to eat.",
        personality: "A straight-forward volleyball club ace with an easy-going personality. Enjoys spending time with the protagonist.",
        character: "assets/images/characters/dain_normal.png",
        affinityChar: "Dain",
        affinityBranches: [
            { minAffinity: 25, next: "day2_dain_store_choices_high" },
            { minAffinity: 0, next: "day2_dain_store_choices" },
            { minAffinity: -100, next: "day2_dain_store_choices_low" }
        ],
        next: "day2_dain_store_choices"
    },
    "day2_dain_store_choices_high": {
        name: "Me",
        text: "(Chatting with Dain made waiting in line not boring at all. It's our turn now, and Dain's in such a good mood she said she'd treat me.)",
        character: "assets/images/characters/dain_laugh.png",
        choices: [
            { text: "I'll buy yours too, Dain. What do you want?", next: "day2_dain_store_buy_high", stats: { Dain: { affinity: 5 } } },
            { text: "It's really crowded... Should we just go to the rooftop?", next: "day2_dain_store_rooftop_high", stats: { Dain: { affinity: 3 } } },
            { text: "Dain, there's the last pizza bread! Let me grab it first!", next: "day2_dain_store_race_high", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day2_dain_store_choices_low": {
        name: "Me",
        text: "(Dain seems upset. I must have been too rude while she was tired from waiting. She sighed and told me to just pick something.)",
        character: "assets/images/characters/dain_sad.png",
        choices: [
            { text: "I'll buy yours too, Dain. What do you want?", next: "day2_dain_store_buy_low", stats: { Dain: { affinity: 5 } } },
            { text: "It's really crowded... Should we just go to the rooftop?", next: "day2_dain_store_rooftop_low", stats: { Dain: { affinity: 3 } } },
            { text: "Dain, there's the last pizza bread! Let me grab it first!", next: "day2_dain_store_race_low", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day2_dain_store_choices": {
        name: "Me",
        text: "(While talking with Dain, it's finally our turn. She asked what I want to eat.)",
        character: "assets/images/characters/dain_normal.png",
        choices: [
            { text: "I'll buy yours too, Dain. What do you want?", next: "day2_dain_store_buy_normal", stats: { Dain: { affinity: 5 } } },
            { text: "It's really crowded... Should we just go to the rooftop?", next: "day2_dain_store_rooftop_normal", stats: { Dain: { affinity: 3 } } },
            { text: "Dain, there's the last pizza bread! Let me grab it first!", next: "day2_dain_store_race_normal", stats: { Dain: { affinity: 8 } } }
        ]
    },
    "day2_dain_store_buy_high": {
        name: "Dain",
        text: "\"Hey~ {name}! Why are you paying? I said I'm treating! Hehe, but thanks for the thought. You pay today, and I'll get you something even better tomorrow! Promise!\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_buy_low": {
        name: "Dain",
        text: "\"Whatever. I said I'd pay, so that's that. Just eat.\"",
        character: "assets/images/characters/dain_angry.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_buy_normal": {
        name: "Dain",
        text: "\"Hey~ I said I'm treating! What money does a transfer student have? Today I'll treat you so just enjoy!\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_rooftop_high": {
        name: "Dain",
        text: "\"Oh! A rooftop date?! Nice nice! It'll taste better eating just the two of us! Let's buy quickly and go up!\"",
        character: "assets/images/characters/dain_laugh.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_rooftop_low": {
        name: "Dain",
        text: "\"The rooftop... why bother going so far. Let's just eat here.\"",
        character: "assets/images/characters/dain_angry.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_rooftop_normal": {
        name: "Dain",
        text: "\"Rooftop? Oh, that's good too! It'll taste better with the cool breeze. Okay, let's just grab some bread and go up!\"",
        character: "assets/images/characters/dain_normal.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_race_high": {
        name: "Dain",
        text: "\"Oho! Feeling competitive? Alright! {name}, no mercy from me either? Loser buys all of today's lunch! Ready, set, go!\"",
        character: "assets/images/characters/dain_active.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_race_low": {
        name: "Dain",
        text: "\"Not in the mood for that... Just be quiet.\"",
        character: "assets/images/characters/dain_sad.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_store_race_normal": {
        name: "Dain",
        text: "\"Oho! That's my partner! Okay, let's race for it! Loser buys drinks!\"",
        character: "assets/images/characters/dain_normal.png",
        setFlag: "day2_met_dain_lunch",
        next: "day2_dain_lunch_end"
    },
    "day2_dain_lunch_end": {
        name: "Me",
        text: "(Had a lively lunch with Dain and headed back to class. Her bright energy should help me get through the afternoon.)",
        character: null,
        next: "day2_afternoon_class"
    },
    "day2_lunch_nurse": {
        name: "Me",
        text: "(Maybe from nerves, my head is throbbing. I unconsciously walked to the quiet nurse's office.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_lunch_nurse_talk"
    },
    "day2_lunch_nurse_talk": {
        name: "School Nurse",
        background: "assets/images/background/nurse_room.jpg",
        text: "\"Oh my, hello? Coming to the nurse's office during lunch, are you not feeling well?\"",
        character: "assets/images/characters/nurse_normal.png",
        branches: [
            { next: "day2_lunch_nurse_met", condition: "met_nurse" },
            { next: "day2_lunch_nurse_new" }
        ]
    },
    "day2_lunch_nurse_met": {
        name: "School Nurse",
        text: "\"Oh my, isn't this our {name}? Are you feeling sick, or is your heart racing from wanting to see me?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        affinityChar: "Nurse",
        affinityBranches: [
            { minAffinity: 15, next: "day2_lunch_nurse_met_high" },
            { minAffinity: 0, next: "day2_lunch_nurse_met_normal" },
            { minAffinity: -100, next: "day2_lunch_nurse_met_low" }
        ],
        stats: { Nurse: { affinity: 6 } },
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_met_high": {
        name: "School Nurse",
        text: "(The teacher smiles subtly looking at my face.) \"Hehe, {name}. You're here again? Goodness... you're the only student who visits me this often.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_met_normal": {
        name: "School Nurse",
        text: "\"Oh my, {name}. The nurse's office during lunch... are you not feeling well?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_met_low": {
        name: "School Nurse",
        text: "(The teacher looks at me and tilts her head as if unsure.) \"Uh... {name}, right? Are you sick? Come in.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_new": {
        name: "School Nurse",
        text: "\"Oh my, a face I haven't seen before? Are you the new transfer student? I'm the school nurse.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        setFlag: "met_nurse",
        next: "day2_lunch_nurse_new_name_ask"
    },
    "day2_lunch_nurse_new_name_ask": {
        name: "School Nurse",
        background: "assets/images/background/nurse_room.jpg",
        text: "\"By the way, what's your name? Will you tell just me?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_lunch_nurse_new_name_share"
    },
    "day2_lunch_nurse_new_name_share": {
        name: "Me",
        background: "assets/images/background/nurse_room.jpg",
        text: "\"My name is {name}.\"",
        character: "assets/images/characters/nurse_normal.png",
        setFlag: "knows_name_nurse",
        next: "day2_lunch_nurse_3"
    },
    "day2_lunch_nurse_3": {
        name: "School Nurse",
        text: "(The teacher guides me to the bed with a soft smile. The gentle herbal scent soothes my nerves.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_lunch_nurse_4"
    },
    "day2_lunch_nurse_4": {
        name: "School Nurse",
        background: "assets/images/background/nurse_room.jpg",
        text: "\"Here, lie down comfortably. Let me see what's bothering you.\"",
        character: "assets/images/characters/nurse_normal.png",
        choices: [
            { text: "I have a headache.", next: "day2_lunch_nurse_head", stats: { Nurse: { affinity: 3 } } },
            { text: "I just want to rest.", next: "day2_lunch_nurse_rest", stats: { Nurse: { affinity: 3 } } },
            { text: "Is this how you seduce students, Teacher?", next: "day2_lunch_nurse_trap", stats: { Nurse: { affinity: -50 } } }
        ]
    },
    "day2_lunch_nurse_trap": {
        name: "School Nurse",
        text: "(The smile instantly vanishes from the teacher's face. The air in the nurse's office turns heavy and cold.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_angry.png",
        next: "day2_lunch_nurse_trap_2"
    },
    "day2_lunch_nurse_trap_2": {
        name: "School Nurse",
        text: "\"My... {name}, I must have been too lenient with you. Such rude comments to an adult don't sound like a joke. Would you please leave today? I'm in a terrible mood now.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_angry.png",
        next: "day2_afternoon_class"
    },
    "day2_lunch_nurse_head": {
        name: "School Nurse",
        text: "\"Sounds like a tension headache. Take this and get some good sleep, you'll feel better.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        choices: [
            { text: "Could you feed it to me, Teacher?", next: "day2_lunch_nurse_head_tease", stats: { Nurse: { affinity: 5 } } },
            { text: "Thank you. (Takes the medicine)", next: "day2_lunch_nurse_sleep", stats: { Nurse: { affinity: 3 } } }
        ]
    },
    "day2_lunch_nurse_head_tease": {
        name: "School Nurse",
        text: "\"My... {name}, you're really something, aren't you? Alright, say 'ah'. Good students deserve rewards, right?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_rest": {
        name: "School Nurse",
        text: "\"Hehe, sometimes you have days like that. Lie down comfortably here with the curtain drawn. By the way... {name}, you have such strong energy. Just looking at you makes my body feel hot.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        choices: [
            { text: "Next", next: "day2_lunch_nurse_rest_yuna", condition: "met_yuna" },
            { text: "Next", next: "day2_lunch_nurse_sleep", excludeCondition: "met_yuna" }
        ]
    },
    "day2_lunch_nurse_rest_yuna": {
        name: "Me",
        text: "\"(Strong energy...? It reminds me of what Yuna said. Is there really something going on at this school?)\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_lunch_nurse_sleep"
    },
    "day2_lunch_nurse_sleep": {
        name: "Me",
        text: "(The warmth of the blanket the teacher covered me with makes my consciousness drift. The exhaustion from the past two days hits all at once.)",
        background: "assets/images/background/nurse_room.jpg",
        character: null,
        next: "day2_lunch_nurse_sleep_teacher"
    },
    "day2_lunch_nurse_sleep_teacher": {
        name: "School Nurse",
        text: "(I faintly hear the teacher's voice.) \"...Yes, homeroom teacher. The student {name} isn't feeling well so I let them skip afternoon classes.\"",
        background: "assets/images/background/nurse_room.jpg",
        characters: {
            left: "assets/images/characters/nurse_normal.png",
            right: { src: "assets/images/characters/teacher_normal.png", opacity: 0.4 }
        },
        next: "day2_lunch_nurse_sleep_teacher_2"
    },
    "day2_lunch_nurse_sleep_teacher_2": {
        name: "School Nurse",
        text: "(The voice gets a bit lower.) \"...What? You want to come pick them up yourself? Hehe, it's fine. This is my domain. I'll take good care of them, I promise.\"",
        background: "assets/images/background/nurse_room.jpg",
        characters: {
            left: "assets/images/characters/nurse_normal.png",
            right: { src: "assets/images/characters/teacher_normal.png", opacity: 0.4 }
        },
        next: "day2_lunch_nurse_sleep_teacher_3"
    },
    "day2_lunch_nurse_sleep_teacher_3": {
        name: "School Nurse",
        text: "(Sound of hanging up the phone.) \"...Hehe, the homeroom teacher too. It's nice that she cares about her students... but in the nurse's office, I'm the law.\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_lunch_nurse_sleep_end"
    },
    "day2_lunch_nurse_sleep_end": {
        name: "Me",
        text: "(...Before I know it, everything goes quiet. I slowly regain consciousness and open my eyes.)",
        background: "assets/images/background/nurse_room.jpg",
        character: null,
        next: "day2_lunch_nurse_wake_1"
    },
    "day2_lunch_nurse_wake_1": {
        name: "Me",
        text: "(Outside the window, the sky is already filled with blazing orange sunset. I fell asleep during lunch and it's already after school... How deeply did I sleep.)",
        background: "assets/images/background/nurse_room.jpg",
        character: null,
        sunset: true,
        next: "day2_lunch_nurse_wake_2"
    },
    "day2_lunch_nurse_wake_2": {
        name: "School Nurse",
        text: "\"(The teacher smiles softly.) Oh my, you're awake? You slept so soundly. I already notified your homeroom teacher about the afternoon classes, so don't worry. It's almost time to go home. How are you feeling?\"",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "nurse_wake_free_talk"
    },
    "nurse_wake_free_talk": {
        type: "free_talk",
        name: "School Nurse",
        background: "assets/images/background/nurse_room.jpg",
        text: "\"Hehe, you still look sleepy. Want to chat with me a bit before going home?\"",
        context: "In the nurse's office at sunset, the protagonist just woke up and is alone with the nurse. Keep the conversation going actively until it's finished. After the conversation, the nurse will offer her number and tease about contacting her at night. ONLY at the final turn, hint that it's time to go home or suggest private contact.",
        personality: "Languid and seductive yet caring school nurse. Feels a peculiar attraction to the protagonist and boldly flirts with daring confidence.",
        extra_guideline: "As a mature adult, openly flirt with the protagonist and create a thrilling atmosphere. Don't be flustered by the user's adult jokes or provocative comments, instead respond with composure and even make the protagonist more flustered with bold and provocative responses. Exude mature charm and heighten the romantic tension to its peak.",
        character: "assets/images/characters/nurse_normal.png",
        affinityChar: "Nurse",
        affinityBranches: [
            { minAffinity: 40, next: "nurse_contact_exchange_high" },
            { minAffinity: 0, next: "nurse_contact_exchange" },
            { minAffinity: -100, next: "nurse_contact_exchange_low" }
        ],
        next: "nurse_contact_exchange"
    },
    "nurse_contact_exchange_high": {
        name: "Me",
        text: "(The nurse looks at me with a playful yet seductive smile.)",
        character: "assets/images/characters/nurse_normal.png",
        branches: [
            { next: "nurse_contact_already_have_high", condition: "has_number_nurse" },
            { next: "nurse_contact_ask_high" }
        ]
    },
    "nurse_contact_exchange_low": {
        name: "Me",
        text: "(The nurse looks at me with a somewhat tired expression.)",
        character: "assets/images/characters/nurse_normal.png",
        branches: [
            { next: "nurse_contact_already_have_low", condition: "has_number_nurse" },
            { next: "nurse_contact_ask_low" }
        ]
    },
    "nurse_contact_already_have_high": {
        name: "Me",
        text: "(The teacher reminded me we already exchanged numbers and whispered in my ear. She said she'll want to hear my voice tonight, so I should definitely contact her.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        choices: [
            { text: "Yes, I will.", next: "day2_afternoon_nurse_skip" },
            {
                text: "Instead of just a call... can I come to your house tonight?",
                next: "nurse_contact_home_fail_high",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 40, next: "nurse_contact_home_success_high" }
                ]
            }
        ]
    },
    "nurse_contact_already_have_low": {
        name: "Me",
        text: "(The teacher said we already exchanged numbers, but given my rude behavior, it might be better not to contact her. She coldly told me to leave.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        choices: [
            { text: "Yes, I will.", next: "day2_afternoon_nurse_skip" },
            {
                text: "Instead of just a call... can I come to your house tonight?",
                next: "nurse_contact_home_fail_low",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 40, next: "nurse_contact_home_success_low" }
                ]
            }
        ]
    },
    "nurse_contact_ask_high": {
        name: "Me",
        text: "(The teacher said she wants to talk with me more and gently held my hand. She offered to give me her number for when I can't sleep at night.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        choices: [
            { text: "Yes, I want to know.", next: "nurse_contact_success_high", setFlags: ["has_number_nurse", "has_any_contact"] },
            {
                text: "Instead of just a number... can I come to your house?",
                next: "nurse_contact_home_fail_high",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 40, next: "nurse_contact_home_success_high" }
                ]
            }
        ]
    },
    "nurse_contact_ask_low": {
        name: "Me",
        text: "(The teacher sighed saying I'm a handful. She said she'll give me her number for emergencies, but warned me not to play pranks.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        choices: [
            { text: "Yes, I want to know.", next: "nurse_contact_success_low", setFlags: ["has_number_nurse", "has_any_contact"] },
            {
                text: "Instead of just a number... can I come to your house?",
                next: "nurse_contact_home_fail_low",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 40, next: "nurse_contact_home_success_low" }
                ]
            }
        ]
    },
    "nurse_contact_exchange": {
        name: "Me",
        background: "assets/images/background/nurse_room.jpg",
        text: "(The nurse looks at me and speaks.)",
        character: "assets/images/characters/nurse_normal.png",
        branches: [
            { next: "nurse_contact_already_have", condition: "has_number_nurse" },
            { next: "nurse_contact_ask" }
        ]
    },
    "nurse_contact_already_have": {
        name: "Me",
        text: "(The teacher reminded me we already exchanged numbers and leaned in to whisper. She said she'll be waiting, so definitely contact her if I'm bored at night.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        choices: [
            { text: "Yes, I will.", next: "day2_afternoon_nurse_skip" },
            {
                text: "Instead of just a call... can I come to your house tonight?",
                next: "nurse_contact_home_fail",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 40, next: "nurse_contact_home_success" }
                ]
            }
        ]
    },
    "nurse_contact_ask": {
        name: "Me",
        text: "(The teacher leaned in to whisper, offering her number for when I can't sleep at night.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        choices: [
            { text: "Yes, I want to know.", next: "nurse_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            {
                text: "Instead of just a number... can I come to your house?",
                next: "nurse_contact_home_fail",
                affinityChar: "Nurse",
                affinityBranches: [
                    { minAffinity: 40, next: "nurse_contact_home_success" }
                ]
            },
            { text: "Ah, I'm okay.", next: "nurse_contact_fail", stats: { Nurse: { affinity: -15 } } }
        ]
    },
    "nurse_contact_success_high": {
        name: "School Nurse",
        background: "assets/images/background/nurse_room.jpg",
        text: "(She writes her number on the back of my hand and winks.) \"Hehe, this number... don't lose it, okay? I'm already looking forward to what message you'll send tonight.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 15 } },
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_success_low": {
        name: "School Nurse",
        background: "assets/images/background/nurse_room.jpg",
        text: "\"...Here. Only for emergencies. If you send nonsense at dawn, I'll block you immediately, so be careful.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_success": {
        name: "School Nurse",
        background: "assets/images/background/nurse_room.jpg",
        text: "(She smiles seductively and saves the number.) \"Hehe, then I'll be waiting for you at night? If you're slow to reply, I might get upset.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 18 } },
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_success_high": {
        name: "School Nurse",
        text: "(She wraps her arms around my neck and breathes hotly in my ear.) \"My... {name}. You really have no patience, do you? Alright, tonight... I'll invite you to my secret room. Just the two of us... let's have a very deep conversation.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 20 } },
        setFlags: ["has_number_nurse", "has_any_contact", "invited_nurse_home"],
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_success_low": {
        name: "School Nurse",
        text: "\"...Are you in your right mind? How dare you make such a joke to a teacher... Write a reflection today. I'll give you my number, but don't even think about coming near my house.\"",
        character: "assets/images/characters/nurse_angry.png",
        stats: { Nurse: { affinity: -10 } },
        setFlags: ["has_number_nurse", "has_any_contact"],
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_success": {
        name: "School Nurse",
        text: "(The teacher's eyes widen, then she gives a seductive smile and whispers in my ear.) \"My... {name}, you're much bolder than I thought? Alright, want to come to my house tonight? I'll give you the address. But... it's our secret from your parents?\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 15 } },
        setFlags: ["has_number_nurse", "has_any_contact", "invited_nurse_home"],
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_fail_high": {
        name: "School Nurse",
        background: "assets/images/background/nurse_room.jpg",
        text: "(The teacher lightly pinches my cheek and laughs.) \"Hehe, you're really forward! But the teacher needs some preparation today too... Let's settle for the number for now?\"",
        character: "assets/images/characters/nurse_normal.png",
        setFlags: ["has_number_nurse", "has_any_contact"],
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_fail_low": {
        name: "School Nurse",
        background: "assets/images/background/nurse_room.jpg",
        text: "\"Watch your mouth. Say that one more time and I'll ban you from the nurse's office.\"",
        character: "assets/images/characters/nurse_angry.png",
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_home_fail": {
        name: "School Nurse",
        background: "assets/images/background/nurse_room.jpg",
        text: "(The teacher bursts into giggles.) \"My goodness {name}! You're so cute. But my house is a bit early, don't you think? Let's exchange numbers first.\"",
        character: "assets/images/characters/nurse_normal.png",
        setFlags: ["has_number_nurse", "has_any_contact"],
        next: "day2_afternoon_nurse_skip"
    },
    "nurse_contact_fail": {
        name: "School Nurse",
        background: "assets/images/background/nurse_room.jpg",
        text: "(The teacher pouts a bit.) \"Tch... Playing hard to get? Alright. Tell me if you change your mind.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day2_afternoon_nurse_skip"
    }
});
