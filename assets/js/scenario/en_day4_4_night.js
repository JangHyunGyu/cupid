/**
 * ============================================================================
 * CUPID - Day 4 Night Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day4_4_night.js
 * 언어: 영어 (English)
 * 일차: Day 4 (4일차 - 토요일)
 * 시간대: Night (밤 - 데이트 마무리)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 데이트가 끝나고 집으로 돌아온 토요일 밤.
 * 고백 결과에 따라 행복한 밤 또는 고민하는 밤을 보낸다.
 * [유나 루트] 학교 야간 잠입 — 재단 비리 문서 발견, 선배의 죽음의 진실,
 *            주인공을 닮은 선배에 대한 유나의 고백, 함께 싸우겠다는 결의
 * Day 5(일요일)로 이어진다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 귀가 - 데이트 마무리
 * 2. 밤 회상 - 오늘 하루를 돌아보며
 * 3. 취침 - 내일에 대한 기대와 함께
 * [유나 루트]
 * 1. 학교 후문 집결 — 야간 잠입
 * 2. 지하 자료실에서 재단 비자금 장부 발견
 * 3. 이준호 선배의 추락사 진실 — 비리를 은폐한 재단
 * 4. 유나의 동기 고백 — 선배를 닮은 주인공
 * 5. 함께 싸우겠다는 결의
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 고백 수락 시: 추가 +5 (메시지 교환)
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
    // 토요일 밤
    // =========================================================================
    "day4_night_start": {
        name: "Me",
        text: "(I'm back home. Lying in bed, today's memories replay like a film.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        bgm: "night2.mp3",
        next: "day4_night_branch"
    },
    "day4_night_branch": {
        name: "System",
        text: "",
        branches: [
            { next: "day4_night_yuna_sneak", condition: "isDating_Yuna" },
            { next: "day4_night_happy", condition: "day4_confession_accepted" },
            { next: "day4_night_regret", condition: "day4_waited" },
            { next: "day4_night_reflect" }
        ]
    },

    // =========================================================================
    // 유나 루트 — 학교 야간 잠입 & 비리 진실
    // =========================================================================
    "day4_night_yuna_sneak": {
        name: "Me",
        text: "(10 PM. A message came from Yuna. 'School back gate. Come now.')",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        bgm: "mystery.mp3",
        next: "day4_night_yuna_sneak_2"
    },
    "day4_night_yuna_sneak_2": {
        name: "Me",
        text: "(My heart is pounding. The 'truth' Yuna mentioned... am I finally going to find out?)",
        night: true,
        next: "day4_night_yuna_arrive"
    },
    "day4_night_yuna_arrive": {
        name: "Yuna",
        text: "\"...You came. I thought you'd be late.\"",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_arrive_2"
    },
    "day4_night_yuna_arrive_2": {
        name: "Me",
        text: "(The school back gate. Yuna stood under a streetlight. Her expression looked more resolute than usual.)",
        night: true,
        next: "day4_night_yuna_arrive_3"
    },
    "day4_night_yuna_arrive_3": {
        name: "Yuna",
        text: "\"...I have something to show you today. Are you prepared?\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_choice"
    },
    "day4_night_yuna_choice": {
        name: "Me",
        text: "(The look in Yuna's eyes is serious.)",
        night: true,
        choices: [
            {
                text: "\"Of course. That's why I came.\"",
                next: "day4_night_yuna_enter",
                stats: { Yuna: { affinity: 8 } }
            },
            {
                text: "\"...Honestly, I'm a little scared.\"",
                next: "day4_night_yuna_enter_honest",
                stats: { Yuna: { affinity: 5 } }
            }
        ]
    },
    "day4_night_yuna_enter": {
        name: "Yuna",
        text: "\"...Good. Follow me.\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        next: "day4_night_yuna_corridor"
    },
    "day4_night_yuna_enter_honest": {
        name: "Yuna",
        text: "\"...I like that you're honest. It's okay—I'm right here beside you.\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        next: "day4_night_yuna_corridor"
    },

    // =========================================================================
    // 학교 야간 잠입
    // =========================================================================
    "day4_night_yuna_corridor": {
        name: "Me",
        text: "(Yuna opened the back gate lock with practiced ease. As if she'd done this many times before.)",
        background: "assets/images/background/load_school.png",
        night: true,
        next: "day4_night_yuna_corridor_2"
    },
    "day4_night_yuna_corridor_2": {
        name: "Me",
        text: "(The empty school hallway. Only the dim emergency lights were on. The place that was so noisy during the day now felt like even a breath would echo.)",
        night: true,
        next: "day4_night_yuna_corridor_3"
    },
    "day4_night_yuna_corridor_3": {
        name: "Yuna",
        text: "\"...The underground archives. A section the school sealed off. Everything's in here.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_basement"
    },

    // =========================================================================
    // 지하 자료실 — 비리 문서 발견
    // =========================================================================
    "day4_night_yuna_basement": {
        name: "Me",
        text: "(As we descended underground, the air turned cold. The smell of dust and old documents stung my nose.)",
        background: "assets/images/background/library_old.png",
        night: true,
        next: "day4_night_yuna_basement_2"
    },
    "day4_night_yuna_basement_2": {
        name: "Yuna",
        text: "\"This school's foundation... 'Sungjin Academy.' They claim to be an elite educational institution, but they've been operating a slush fund systematically for the past ten years.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_basement_3"
    },
    "day4_night_yuna_basement_3": {
        name: "Me",
        text: "\"...A slush fund?\"",
        night: true,
        next: "day4_night_yuna_basement_4"
    },
    "day4_night_yuna_basement_4": {
        name: "Yuna",
        text: "\"Embezzling student welfare funds, false claims for facility repair costs, misappropriation of donations... It's all here.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_documents"
    },
    "day4_night_yuna_documents": {
        name: "Me",
        text: "(Yuna pulled out a worn file from the shelf. Dense numbers and stamps filled the pages. This is... a real ledger.)",
        night: true,
        next: "day4_night_yuna_documents_2"
    },
    "day4_night_yuna_documents_2": {
        name: "Yuna",
        text: "\"Especially this building... the east staircase of the main hall. Records say it was renovated three years ago, but in reality, not a single penny was spent.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_documents_3"
    },
    "day4_night_yuna_documents_3": {
        name: "Yuna",
        text: "\"...And on those stairs, an accident happened one year ago.\"",
        character: "assets/images/characters/yuna_sad.png",
        night: true,
        next: "day4_night_yuna_truth_choice"
    },
    "day4_night_yuna_truth_choice": {
        name: "Me",
        text: "(Yuna's voice is trembling.)",
        night: true,
        choices: [
            {
                text: "\"...Who got hurt?\"",
                next: "day4_night_yuna_senpai_reveal",
                stats: { Yuna: { affinity: 5 } }
            },
            {
                text: "\"Yuna... are you okay?\"",
                next: "day4_night_yuna_senpai_concern",
                stats: { Yuna: { affinity: 10 } }
            }
        ]
    },

    // =========================================================================
    // 선배의 진실
    // =========================================================================
    "day4_night_yuna_senpai_concern": {
        name: "Yuna",
        text: "\"...You're the first person to ask me that.\"",
        character: "assets/images/characters/yuna_sad.png",
        night: true,
        next: "day4_night_yuna_senpai_reveal"
    },
    "day4_night_yuna_senpai_reveal": {
        name: "Yuna",
        text: "\"...Lee Junho, a senior. He was the student council president at the time. He found out about the foundation's corruption and was gathering evidence.\"",
        character: "assets/images/characters/yuna_sad.png",
        night: true,
        next: "day4_night_yuna_senpai_2"
    },
    "day4_night_yuna_senpai_2": {
        name: "Yuna",
        text: "\"He was... a person with a strong sense of justice. Almost foolishly so. He could never look away when someone was being wronged.\"",
        night: true,
        next: "day4_night_yuna_senpai_3"
    },
    "day4_night_yuna_senpai_3": {
        name: "Yuna",
        text: "\"Then one day... he fell from that east staircase. The school ruled it an 'accidental fall.'\"",
        character: "assets/images/characters/yuna_sad.png",
        night: true,
        next: "day4_night_yuna_senpai_4"
    },
    "day4_night_yuna_senpai_4": {
        name: "Me",
        text: "\"...An accidental fall? The person who was investigating the corruption?\"",
        night: true,
        next: "day4_night_yuna_senpai_5"
    },
    "day4_night_yuna_senpai_5": {
        name: "Yuna",
        text: "\"...The old staircase railing that was never repaired broke. If the foundation hadn't embezzled the repair funds, that accident would never have happened.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_senpai_6"
    },
    "day4_night_yuna_senpai_6": {
        name: "Yuna",
        text: "\"It was the day before he planned to take the evidence to the Board of Education. Whether it was coincidence or not... I still don't know.\"",
        night: true,
        next: "day4_night_yuna_senpai_death"
    },
    "day4_night_yuna_senpai_death": {
        name: "Yuna",
        text: "\"He... passed away in the hospital a few days later. He never woke up.\"",
        character: "assets/images/characters/yuna_sad.png",
        night: true,
        next: "day4_night_yuna_silence"
    },
    "day4_night_yuna_silence": {
        name: "Me",
        text: "(Yuna's hands were shaking. Her fingertips, gripping the documents, had turned white.)",
        night: true,
        next: "day4_night_yuna_silence_choice"
    },
    "day4_night_yuna_silence_choice": {
        name: "Me",
        text: "(...)",
        night: true,
        choices: [
            {
                text: "Take Yuna's hand",
                next: "day4_night_yuna_hand",
                stats: { Yuna: { affinity: 15 } },
                setFlag: "day4_held_yuna_hand"
            },
            {
                text: "\"...Keep talking. I'm listening.\"",
                next: "day4_night_yuna_listen",
                stats: { Yuna: { affinity: 10 } }
            }
        ]
    },

    // =========================================================================
    // 유나의 고백 — 선배와 닮은 주인공
    // =========================================================================
    "day4_night_yuna_hand": {
        name: "Yuna",
        text: "\"...!\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        next: "day4_night_yuna_hand_2"
    },
    "day4_night_yuna_hand_2": {
        name: "Me",
        text: "(Yuna's hand was cold. But she didn't pull away.)",
        night: true,
        next: "day4_night_yuna_resemblance"
    },
    "day4_night_yuna_listen": {
        name: "Yuna",
        text: "\"...Thank you.\"",
        character: "assets/images/characters/yuna_sad.png",
        night: true,
        next: "day4_night_yuna_resemblance"
    },
    "day4_night_yuna_resemblance": {
        name: "Yuna",
        text: "\"...Actually, there's one more thing I need to tell you.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_resemblance_2"
    },
    "day4_night_yuna_resemblance_2": {
        name: "Yuna",
        text: "\"When you first transferred here... I almost stopped breathing.\"",
        night: true,
        next: "day4_night_yuna_resemblance_3"
    },
    "day4_night_yuna_resemblance_3": {
        name: "Me",
        text: "\"...Why?\"",
        night: true,
        next: "day4_night_yuna_resemblance_4"
    },
    "day4_night_yuna_resemblance_4": {
        name: "Yuna",
        text: "\"You... look like Junho. Your eyes, your aura. Even that feeling of never being able to stand by when something's wrong.\"",
        character: "assets/images/characters/yuna_sad.png",
        night: true,
        next: "day4_night_yuna_resemblance_5"
    },
    "day4_night_yuna_resemblance_5": {
        name: "Yuna",
        text: "\"...So at first, I was scared. Afraid the same thing would happen again. Afraid you'd be in danger too.\"",
        night: true,
        next: "day4_night_yuna_resemblance_6"
    },
    "day4_night_yuna_resemblance_6": {
        name: "Yuna",
        text: "\"But at the same time... with you by my side, I felt like I could finish what he couldn't.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_resemblance_7"
    },
    "day4_night_yuna_resemblance_7": {
        name: "Me",
        text: "(So that's why. The reason Yuna showed interest in me from the start. When she called me a 'special light'... was I just the senior's shadow?)",
        night: true,
        next: "day4_night_yuna_critical_choice"
    },
    "day4_night_yuna_critical_choice": {
        name: "Me",
        text: "(...What should I say?)",
        night: true,
        choices: [
            {
                text: "\"I'm not him. I'm me. But still... I'll fight alongside you.\"",
                next: "day4_night_yuna_moved",
                stats: { Yuna: { affinity: 20 } },
                setFlag: "day4_yuna_ally"
            },
            {
                text: "\"Even if I'm his stand-in, that's fine. I want to be the person you need.\"",
                next: "day4_night_yuna_touched",
                stats: { Yuna: { affinity: 15 } },
                setFlag: "day4_yuna_ally"
            },
            {
                text: "\"...So you approached me because of him? As a replacement?\"",
                next: "day4_night_yuna_confronted",
                stats: { Yuna: { affinity: -10 } }
            }
        ]
    },

    // =========================================================================
    // 분기 — 결의
    // =========================================================================
    "day4_night_yuna_moved": {
        name: "Yuna",
        text: "\"...I know. You are you. Maybe at first I was chasing the senior's shadow. But now...\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        next: "day4_night_yuna_moved_2"
    },
    "day4_night_yuna_moved_2": {
        name: "Yuna",
        text: "\"...Now I see you. Only you.\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        next: "day4_night_yuna_resolve"
    },
    "day4_night_yuna_touched": {
        name: "Yuna",
        text: "\"Idiot... you can't just say things like that.\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        next: "day4_night_yuna_touched_2"
    },
    "day4_night_yuna_touched_2": {
        name: "Yuna",
        text: "\"You're not a stand-in. You... are already more than enough, just as yourself.\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        next: "day4_night_yuna_resolve"
    },
    "day4_night_yuna_confronted": {
        name: "Yuna",
        text: "\"...\"",
        character: "assets/images/characters/yuna_sad.png",
        night: true,
        next: "day4_night_yuna_confronted_2"
    },
    "day4_night_yuna_confronted_2": {
        name: "Yuna",
        text: "\"...I won't deny it. At first, that's how it was. But... as we spent time together, that changed. This is real.\"",
        character: "assets/images/characters/yuna_sad.png",
        night: true,
        next: "day4_night_yuna_confronted_3"
    },
    "day4_night_yuna_confronted_3": {
        name: "Yuna",
        text: "\"...Even if you don't believe me, I'll prove it.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        setFlag: "day4_yuna_ally",
        next: "day4_night_yuna_resolve"
    },

    // =========================================================================
    // 결의 & 증거 확보
    // =========================================================================
    "day4_night_yuna_resolve": {
        name: "Yuna",
        text: "\"...I made copies of these documents. The originals stay here.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_resolve_2"
    },
    "day4_night_yuna_resolve_2": {
        name: "Yuna",
        text: "\"What the senior couldn't finish... I want to see it through this time. I'm reporting it to the Board of Education.\"",
        night: true,
        next: "day4_night_yuna_resolve_3"
    },
    "day4_night_yuna_resolve_3": {
        name: "Me",
        text: "(Determination filled Yuna's eyes. This wasn't mere curiosity. She'd been uncovering the truth alone for an entire year.)",
        night: true,
        next: "day4_night_yuna_resolve_4"
    },
    "day4_night_yuna_resolve_4": {
        name: "Yuna",
        text: "\"...But it could be dangerous. The foundation won't sit still.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_resolve_5"
    },
    "day4_night_yuna_resolve_5": {
        name: "Me",
        text: "\"...Let's do this together. Don't carry it all alone.\"",
        night: true,
        next: "day4_night_yuna_resolve_end"
    },
    "day4_night_yuna_resolve_end": {
        name: "Yuna",
        text: "\"...Okay.\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        setFlag: "day4_yuna_truth_revealed",
        next: "day4_night_yuna_exit"
    },

    // =========================================================================
    // 학교 밖 — 밤하늘 아래
    // =========================================================================
    "day4_night_yuna_exit": {
        name: "Me",
        text: "(We slipped out of the school. The cold night breeze blew, but it felt less cold with Yuna beside me.)",
        background: "assets/images/background/street.png",
        night: true,
        bgm: "night1.mp3",
        next: "day4_night_yuna_exit_2"
    },
    "day4_night_yuna_exit_2": {
        name: "Yuna",
        text: "\"...Thank you for today. It's the first time I've told anyone what I've been carrying alone.\"",
        character: "assets/images/characters/yuna_normal.png",
        night: true,
        next: "day4_night_yuna_exit_3"
    },
    "day4_night_yuna_exit_3": {
        name: "Yuna",
        text: "\"...It was a heavy day, wasn't it?\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        next: "day4_night_yuna_exit_choice"
    },
    "day4_night_yuna_exit_choice": {
        name: "Me",
        text: "(Under the night sky, Yuna smiles awkwardly.)",
        night: true,
        choices: [
            {
                text: "\"No. Because I got to know you better.\"",
                next: "day4_night_yuna_exit_warm",
                stats: { Yuna: { affinity: 10 } }
            },
            {
                text: "\"Next time, let's go on a real date. Somewhere like a café.\"",
                next: "day4_night_yuna_exit_promise",
                stats: { Yuna: { affinity: 8 } }
            }
        ]
    },
    "day4_night_yuna_exit_warm": {
        name: "Yuna",
        text: "\"...That's not fair, saying something like that.\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        next: "day4_night_yuna_farewell"
    },
    "day4_night_yuna_exit_promise": {
        name: "Yuna",
        text: "\"...A café. I'd like that. Can I pick the place this time?\"",
        character: "assets/images/characters/yuna_smile.png",
        night: true,
        next: "day4_night_yuna_farewell"
    },
    "day4_night_yuna_farewell": {
        name: "Me",
        text: "(Yuna started to turn away but hesitated. Then she spoke in a very small voice.)",
        night: true,
        next: "day4_night_yuna_farewell_2"
    },
    "day4_night_yuna_farewell_2": {
        name: "Yuna",
        text: "\"...Thank you for coming tonight. Really.\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        next: "day4_night_yuna_farewell_3"
    },
    "day4_night_yuna_farewell_3": {
        name: "Me",
        text: "(The night breeze tousled Yuna's hair. I thought to myself that I wanted to remember this moment for a long time.)",
        night: true,
        next: "day4_night_yuna_home"
    },
    "day4_night_yuna_home": {
        name: "Me",
        text: "(I'm back home. Everything I learned today swirls in my head. The foundation's corruption, the senior's death, and Yuna's tears...)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        next: "day4_night_yuna_home_2"
    },
    "day4_night_yuna_home_2": {
        name: "Me",
        text: "(The weight Yuna carried alone for a whole year. Now it's my turn to help bear it.)",
        night: true,
        fade: true,
        next: "day4_final"
    },

    // =========================================================================
    // 고백 성공 루트
    // =========================================================================
    "day4_night_happy": {
        name: "Me",
        text: "(...I still can't believe it. I never thought a day like this would come for me.)",
        night: true,
        next: "day4_night_happy_2"
    },
    "day4_night_happy_2": {
        name: "Me",
        text: "(The warmth of holding hands, the smiling face, the words 'I like you too'... It all feels like a dream.)",
        night: true,
        next: "day4_night_happy_msg"
    },
    "day4_night_happy_msg": {
        name: "Me",
        text: "(A message came on my phone. \"I was so happy today. Let's meet again tomorrow. 🌙\")",
        night: true,
        next: "day4_night_happy_reply"
    },
    "day4_night_happy_reply": {
        name: "Me",
        text: "(I replied \"Me too. Let's definitely meet tomorrow.\" My heart is still racing.)",
        night: true,
        next: "day4_night_sleep"
    },

    // =========================================================================
    // 고백 보류 루트
    // =========================================================================
    "day4_night_regret": {
        name: "Me",
        text: "(...I could have said it today. Under that sunset, it was the perfect moment.)",
        night: true,
        next: "day4_night_regret_2"
    },
    "day4_night_regret_2": {
        name: "Me",
        text: "(It's okay. There's tomorrow. Tomorrow, I'll definitely... tell them how I feel.)",
        night: true,
        next: "day4_night_regret_msg"
    },
    "day4_night_regret_msg": {
        name: "Me",
        text: "(A message came on my phone. \"I had fun today. Are you free tomorrow too?\")",
        night: true,
        next: "day4_night_regret_reply"
    },
    "day4_night_regret_reply": {
        name: "Me",
        text: "(\"Yeah, let's meet tomorrow.\" I'll definitely say it tomorrow.)",
        night: true,
        next: "day4_night_sleep"
    },

    // =========================================================================
    // 기본 루트 (약속 없이 온 경우)
    // =========================================================================
    "day4_night_reflect": {
        name: "Me",
        text: "(And just like that, Saturday passed. Tomorrow... what should I do?)",
        night: true,
        next: "day4_night_sleep"
    },

    // =========================================================================
    // 취침
    // =========================================================================
    "day4_night_sleep": {
        name: "Me",
        text: "(When I close my eyes, their face appears. I wouldn't mind falling asleep like this.)",
        night: true,
        fade: true,
        next: "day4_final"
    },
    "day4_final": {
        name: "Me",
        text: "(Saturday night deepens... Tomorrow is Sunday, the last day.)",
        background: null,
        character: null,
        night: true,
        fade: true,
        next: "day5_start"
    }
});
