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
            { next: "day4_night_seoyeon_call", condition: "isDating_Seoyeon" },
            { next: "day4_night_dain_gym", condition: "isDating_Dain" },
            { next: "day4_night_teacher_call", condition: "isDating_Teacher" },
            { next: "day4_night_nurse_msg", condition: "isDating_Nurse" },
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
    // Seoyeon Route — The Price of Perfection, Seoyeon's True Self
    // =========================================================================
    "day4_night_seoyeon_call": {
        name: "Me",
        text: "(9 PM. A call from Seoyeon.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        bgm: "night1.mp3",
        next: "day4_night_seoyeon_call_2"
    },
    "day4_night_seoyeon_call_2": {
        name: "Seoyeon",
        text: "\"...Hey, it's me. If you're not busy... could you come out for a bit?\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "day4_night_seoyeon_call_3"
    },
    "day4_night_seoyeon_call_3": {
        name: "Me",
        text: "(Seoyeon's voice sounds different from usual. No warmth, and it seems like she's trembling.)",
        night: true,
        next: "day4_night_seoyeon_call_4"
    },
    "day4_night_seoyeon_call_4": {
        name: "Seoyeon",
        text: "\"...You know the park near my house, right? I'll wait there.\"",
        night: true,
        next: "day4_night_seoyeon_park"
    },
    "day4_night_seoyeon_park": {
        name: "Me",
        text: "(I arrived at the park. Seoyeon was sitting alone on a bench. Instead of her usual neat uniform, she wore casual clothes.)",
        background: "assets/images/background/park.png",
        character: "assets/images/characters/seyoun_sad.png",
        night: true,
        next: "day4_night_seoyeon_park_2"
    },
    "day4_night_seoyeon_park_2": {
        name: "Seoyeon",
        text: "\"...You came. Sorry for calling you out so suddenly.\"",
        character: "assets/images/characters/seyoun_sad.png",
        night: true,
        next: "day4_night_seoyeon_park_3"
    },
    "day4_night_seoyeon_park_3": {
        name: "Me",
        text: "(Seoyeon's eyes are red. ...Was she crying?)",
        night: true,
        choices: [
            {
                text: "\"What happened? Are you okay?\"",
                next: "day4_night_seoyeon_concern",
                stats: { Seoyeon: { affinity: 5 } }
            },
            {
                text: "Sit next to her without saying anything",
                next: "day4_night_seoyeon_silent_sit",
                stats: { Seoyeon: { affinity: 8 } }
            }
        ]
    },
    "day4_night_seoyeon_concern": {
        name: "Seoyeon",
        text: "\"...If I said I was fine, that would be a lie.\"",
        character: "assets/images/characters/seyoun_sad.png",
        night: true,
        next: "day4_night_seoyeon_open"
    },
    "day4_night_seoyeon_silent_sit": {
        name: "Seoyeon",
        text: "\"...Thank you. Just sitting next to me... that's the best thing.\"",
        character: "assets/images/characters/seyoun_sad.png",
        night: true,
        next: "day4_night_seoyeon_open"
    },

    // =========================================================================
    // Seoyeon's Confession — The Prison of Perfection
    // =========================================================================
    "day4_night_seoyeon_open": {
        name: "Seoyeon",
        text: "\"...Mom called today. She and Dad had another fight.\"",
        character: "assets/images/characters/seyoun_sad.png",
        night: true,
        next: "day4_night_seoyeon_open_2"
    },
    "day4_night_seoyeon_open_2": {
        name: "Seoyeon",
        text: "\"Our house... looks perfect from the outside, right? Big house, nice car, student council president daughter.\"",
        night: true,
        next: "day4_night_seoyeon_open_3"
    },
    "day4_night_seoyeon_open_3": {
        name: "Seoyeon",
        text: "\"But actually... Mom and Dad haven't lived under the same roof for a year now. They just haven't filed for divorce yet.\"",
        character: "assets/images/characters/seyoun_sad.png",
        night: true,
        next: "day4_night_seoyeon_open_4"
    },
    "day4_night_seoyeon_open_4": {
        name: "Me",
        text: "\"...Seoyeon.\"",
        night: true,
        next: "day4_night_seoyeon_open_5"
    },
    "day4_night_seoyeon_open_5": {
        name: "Seoyeon",
        text: "\"Mom said, 'At least you need to be perfect for this family to hold together.' So... student council, grades, I couldn't let go of any of it.\"",
        character: "assets/images/characters/seyoun_cry.png",
        night: true,
        next: "day4_night_seoyeon_open_6"
    },
    "day4_night_seoyeon_open_6": {
        name: "Seoyeon",
        text: "\"I had to smile for everyone. 'Seoyeon is always so bright,' 'Seoyeon is good at everything.' Those words... started to feel like a prison.\"",
        night: true,
        next: "day4_night_seoyeon_open_7"
    },
    "day4_night_seoyeon_open_7": {
        name: "Seoyeon",
        text: "\"I wasn't smiling—I was 'performing' a smile. Every single day.\"",
        character: "assets/images/characters/seyoun_cry.png",
        night: true,
        next: "day4_night_seoyeon_tear"
    },
    "day4_night_seoyeon_tear": {
        name: "Me",
        text: "(Tears spilled from Seoyeon's eyes. Glistening under the streetlight. It was the first time I'd ever seen her cry.)",
        night: true,
        next: "day4_night_seoyeon_tear_choice"
    },
    "day4_night_seoyeon_tear_choice": {
        name: "Me",
        text: "(Seoyeon is crying. I've never seen this side of her.)",
        night: true,
        choices: [
            {
                text: "Hug Seoyeon",
                next: "day4_night_seoyeon_hug",
                stats: { Seoyeon: { affinity: 15 } },
                setFlag: "day4_hugged_seoyeon"
            },
            {
                text: "Offer a pinky promise",
                next: "day4_night_seoyeon_pinky",
                stats: { Seoyeon: { affinity: 20 } },
                setFlag: "day4_pinky_seoyeon"
            }
        ]
    },
    "day4_night_seoyeon_hug": {
        name: "Seoyeon",
        text: "\"...... !\"",
        character: "assets/images/characters/seyoun_cry.png",
        night: true,
        next: "day4_night_seoyeon_hug_2"
    },
    "day4_night_seoyeon_hug_2": {
        name: "Me",
        text: "(Seoyeon buried her face in my chest. Her small shoulders were trembling.)",
        night: true,
        next: "day4_night_seoyeon_hug_3"
    },
    "day4_night_seoyeon_hug_3": {
        name: "Seoyeon",
        text: "\"...It's been so long since I cried like this. Crying in front of someone... this is the first time.\"",
        character: "assets/images/characters/seyoun_cry.png",
        night: true,
        next: "day4_night_seoyeon_real"
    },
    "day4_night_seoyeon_pinky": {
        name: "Me",
        text: "\"I promise. Whenever you want to cry, you can cry with me.\"",
        night: true,
        next: "day4_night_seoyeon_pinky_2"
    },
    "day4_night_seoyeon_pinky_2": {
        name: "Seoyeon",
        text: "\"...A pinky promise?\"",
        character: "assets/images/characters/seyoun_cry.png",
        night: true,
        next: "day4_night_seoyeon_pinky_3"
    },
    "day4_night_seoyeon_pinky_3": {
        name: "Me",
        text: "(Seoyeon locked her trembling pinky with mine. And then the tears she'd been holding back poured out.)",
        night: true,
        next: "day4_night_seoyeon_pinky_4"
    },
    "day4_night_seoyeon_pinky_4": {
        name: "Seoyeon",
        text: "\"...You fool, why are you... so kind to me...\"",
        character: "assets/images/characters/seyoun_cry.png",
        night: true,
        next: "day4_night_seoyeon_real"
    },

    // =========================================================================
    // Seoyeon's True Self
    // =========================================================================
    "day4_night_seoyeon_real": {
        name: "Seoyeon",
        text: "\"...Even during our date today, I was scared. Am I allowed to be this happy? Will this happiness crumble too?\"",
        character: "assets/images/characters/seyoun_sad.png",
        night: true,
        next: "day4_night_seoyeon_real_2"
    },
    "day4_night_seoyeon_real_2": {
        name: "Seoyeon",
        text: "\"Are you... okay with a me that's not perfect?\"",
        character: "assets/images/characters/seyoun_sad.png",
        night: true,
        next: "day4_night_seoyeon_real_choice"
    },
    "day4_night_seoyeon_real_choice": {
        name: "Me",
        text: "(Seoyeon is looking up at me with trembling eyes.)",
        night: true,
        choices: [
            {
                text: "\"I like the Seoyeon right now more than the perfect one.\"",
                next: "day4_night_seoyeon_accept",
                stats: { Seoyeon: { affinity: 20 } }
            },
            {
                text: "\"Not the class president Seoyeon—just Seoyeon is my girlfriend.\"",
                next: "day4_night_seoyeon_gf",
                stats: { Seoyeon: { affinity: 15 } }
            },
            {
                text: "\"Honestly, I always thought you were perfect. But... thank you for showing me this side too.\"",
                next: "day4_night_seoyeon_honest",
                stats: { Seoyeon: { affinity: 10 } }
            }
        ]
    },
    "day4_night_seoyeon_accept": {
        name: "Seoyeon",
        text: "\"...Really?\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "day4_night_seoyeon_accept_2"
    },
    "day4_night_seoyeon_accept_2": {
        name: "Seoyeon",
        text: "\"...I'll never forget those words. If I do... we made a pinky promise, after all.\"",
        character: "assets/images/characters/seyoun_shy2.png",
        night: true,
        next: "day4_night_seoyeon_resolve"
    },
    "day4_night_seoyeon_gf": {
        name: "Seoyeon",
        text: "\"G-girlfriend......\"",
        character: "assets/images/characters/seyoun_shy2.png",
        night: true,
        next: "day4_night_seoyeon_gf_2"
    },
    "day4_night_seoyeon_gf_2": {
        name: "Seoyeon",
        text: "\"...Ah, my heart is pounding so hard I might die. You can't just say things like that...\"",
        character: "assets/images/characters/seyoun_shy2.png",
        night: true,
        next: "day4_night_seoyeon_resolve"
    },
    "day4_night_seoyeon_honest": {
        name: "Seoyeon",
        text: "\"...Thank you. Do you mean it?\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "day4_night_seoyeon_honest_2"
    },
    "day4_night_seoyeon_honest_2": {
        name: "Seoyeon",
        text: "\"From now on... I won't act in front of you. I promise.\"",
        character: "assets/images/characters/seyoun_normal.png",
        night: true,
        next: "day4_night_seoyeon_resolve"
    },

    // =========================================================================
    // Seoyeon's Resolve — Finding Herself
    // =========================================================================
    "day4_night_seoyeon_resolve": {
        name: "Seoyeon",
        text: "\"...You know what? I've made up my mind.\"",
        character: "assets/images/characters/seyoun_normal.png",
        night: true,
        next: "day4_night_seoyeon_resolve_2"
    },
    "day4_night_seoyeon_resolve_2": {
        name: "Seoyeon",
        text: "\"I'm going to tell Mom. That I want to be myself before being 'the perfect daughter.'\"",
        night: true,
        next: "day4_night_seoyeon_resolve_3"
    },
    "day4_night_seoyeon_resolve_3": {
        name: "Seoyeon",
        text: "\"I'm scared, but... I'm not alone anymore.\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "day4_night_seoyeon_resolve_4"
    },
    "day4_night_seoyeon_resolve_4": {
        name: "Me",
        text: "\"Let's go together. Anywhere.\"",
        night: true,
        next: "day4_night_seoyeon_resolve_end"
    },
    "day4_night_seoyeon_resolve_end": {
        name: "Seoyeon",
        text: "\"...Yeah.\"",
        character: "assets/images/characters/seyoun_shy2.png",
        night: true,
        setFlag: "day4_seoyeon_real_self",
        next: "day4_night_seoyeon_farewell"
    },

    // =========================================================================
    // Farewell with Seoyeon — Night Walk
    // =========================================================================
    "day4_night_seoyeon_farewell": {
        name: "Me",
        text: "(We left the park and walked together to her house. Seoyeon gently leaned on my arm as we walked.)",
        background: "assets/images/background/street.png",
        night: true,
        next: "day4_night_seoyeon_farewell_2"
    },
    "day4_night_seoyeon_farewell_2": {
        name: "Seoyeon",
        text: "\"...I showed you such an embarrassing side of me, but you didn't run away.\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "day4_night_seoyeon_farewell_3"
    },
    "day4_night_seoyeon_farewell_3": {
        name: "Me",
        text: "\"Run away? I actually like you more now.\"",
        night: true,
        next: "day4_night_seoyeon_farewell_4"
    },
    "day4_night_seoyeon_farewell_4": {
        name: "Seoyeon",
        text: "\"...You really are unfair.\"",
        character: "assets/images/characters/seyoun_shy2.png",
        night: true,
        next: "day4_night_seoyeon_farewell_5"
    },
    "day4_night_seoyeon_farewell_5": {
        name: "Me",
        text: "(As Seoyeon turned to leave, she said in a small voice.)",
        night: true,
        next: "day4_night_seoyeon_farewell_6"
    },
    "day4_night_seoyeon_farewell_6": {
        name: "Seoyeon",
        text: "\"...Today, for the first time, I felt like 'being myself is okay.' Thank you.\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "day4_night_seoyeon_home"
    },
    "day4_night_seoyeon_home": {
        name: "Me",
        text: "(Back home. Seoyeon's tears keep coming back to me. The real face behind the perfect student council president... I want to share that heavy burden.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        next: "day4_night_seoyeon_home_2"
    },
    "day4_night_seoyeon_home_2": {
        name: "Me",
        text: "(Tomorrow... I want her smile to come from the heart, not from acting.)",
        night: true,
        fade: true,
        next: "day4_final"
    },

    // =========================================================================
    // Dain Route — Price of a Dream, Secret of the Knee
    // =========================================================================
    "day4_night_dain_gym": {
        name: "Me",
        text: "(9:30 PM. A message from Dain. 'Hey, you free rn?? lol Can you come to school??')",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        bgm: "night1.mp3",
        next: "day4_night_dain_gym_2"
    },
    "day4_night_dain_gym_2": {
        name: "Me",
        text: "(Another message right away. 'Nvm just come lol! Gym back door is open!')",
        night: true,
        next: "day4_night_dain_gym_3"
    },
    "day4_night_dain_gym_3": {
        name: "Me",
        text: "(Dain at the school gym at this hour? Something feels off... Let's go check.)",
        night: true,
        next: "day4_night_dain_arrive"
    },
    "day4_night_dain_arrive": {
        name: "Me",
        text: "(I entered the gym. In the darkness lit only by emergency lights, Dain was alone, bumping a volleyball.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        night: true,
        next: "day4_night_dain_arrive_2"
    },
    "day4_night_dain_arrive_2": {
        name: "Dain",
        text: "\"Oh! You actually came?! Hehe, that's my boyfriend!\"",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "day4_night_dain_arrive_3"
    },
    "day4_night_dain_arrive_3": {
        name: "Me",
        text: "(But... something's off. Dain seems to be smiling harder than usual.)",
        night: true,
        next: "day4_night_dain_spike"
    },
    "day4_night_dain_spike": {
        name: "Dain",
        text: "\"Toss for me! Just once! I'll show you my spike!!\"",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "day4_night_dain_spike_2"
    },
    "day4_night_dain_spike_2": {
        name: "Me",
        text: "(I tossed the ball to Dain. She jumped high and slammed the spike down.)",
        night: true,
        next: "day4_night_dain_spike_3"
    },
    "day4_night_dain_spike_3": {
        name: "Me",
        text: "(The moment she landed—Dain grabbed her right knee and crumpled to the floor.)",
        night: true,
        next: "day4_night_dain_hurt"
    },
    "day4_night_dain_hurt": {
        name: "Dain",
        text: "\"...... !!\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_hurt_2"
    },
    "day4_night_dain_hurt_2": {
        name: "Me",
        text: "\"Dain!!\"",
        night: true,
        next: "day4_night_dain_hurt_3"
    },
    "day4_night_dain_hurt_3": {
        name: "Dain",
        text: "\"Ow ow!! I'm fine!! Just tweaked it a little haha, no biggie...\"",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "day4_night_dain_hurt_4"
    },
    "day4_night_dain_hurt_4": {
        name: "Me",
        text: "(Dain is smiling, but her hand gripping her knee has gone white.)",
        night: true,
        choices: [
            {
                text: "\"Don't lie. Let me see.\"",
                next: "day4_night_dain_check",
                stats: { Dain: { affinity: 8 } }
            },
            {
                text: "\"Dain. You're not okay.\"",
                next: "day4_night_dain_serious",
                stats: { Dain: { affinity: 10 } }
            }
        ]
    },

    // =========================================================================
    // Dain's Secret — Knee Injury
    // =========================================================================
    "day4_night_dain_check": {
        name: "Me",
        text: "(When I tried to look at Dain's knee, she flinched and pulled away.)",
        night: true,
        next: "day4_night_dain_secret"
    },
    "day4_night_dain_serious": {
        name: "Dain",
        text: "\"......\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_secret"
    },
    "day4_night_dain_secret": {
        name: "Dain",
        text: "\"...Fine. I was trying to hide it.\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_secret_2"
    },
    "day4_night_dain_secret_2": {
        name: "Me",
        text: "(Dain rolled up her knee brace. Her knee was badly swollen.)",
        night: true,
        next: "day4_night_dain_secret_3"
    },
    "day4_night_dain_secret_3": {
        name: "Dain",
        text: "\"...Torn ACL. I injured it last year. Had surgery but... it never fully healed.\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_secret_4"
    },
    "day4_night_dain_secret_4": {
        name: "Me",
        text: "\"...Last year?\"",
        night: true,
        next: "day4_night_dain_secret_5"
    },
    "day4_night_dain_secret_5": {
        name: "Dain",
        text: "\"The doctor said, 'Daily life is fine, but playing like before is too much.'\"",
        night: true,
        next: "day4_night_dain_secret_6"
    },
    "day4_night_dain_secret_6": {
        name: "Dain",
        text: "\"Athletic scholarship, going pro... All gone. Just like that.\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_dream"
    },

    // =========================================================================
    // Dain's Dream and Frustration
    // =========================================================================
    "day4_night_dain_dream": {
        name: "Me",
        text: "(...For Dain, who lived for volleyball, that must have been a death sentence.)",
        night: true,
        next: "day4_night_dain_dream_2"
    },
    "day4_night_dain_dream_2": {
        name: "Dain",
        text: "\"...You know how I always smile? Nobody knows it's an act.\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_dream_3"
    },
    "day4_night_dain_dream_3": {
        name: "Dain",
        text: "\"'Dain is always so energetic!' Every time I hear that... I laugh for real. But inside, my knee burns every single day.\"",
        night: true,
        next: "day4_night_dain_dream_4"
    },
    "day4_night_dain_dream_4": {
        name: "Dain",
        text: "\"Even on our date today, when we were running around... it actually hurt. But I didn't want to show it.\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_dream_5"
    },
    "day4_night_dain_dream_5": {
        name: "Dain",
        text: "\"I know I need to let go. But... I just wanted to jump one more time. On this court.\"",
        night: true,
        next: "day4_night_dain_cry"
    },
    "day4_night_dain_cry": {
        name: "Me",
        text: "(Dain hugged the volleyball tight and lowered her head. Her shoulders were shaking. The girl who was always bright and cheerful... was crying.)",
        night: true,
        next: "day4_night_dain_cry_choice"
    },
    "day4_night_dain_cry_choice": {
        name: "Me",
        text: "(...What do I say?)",
        night: true,
        choices: [
            {
                text: "\"Your dream isn't just volleyball. Let's find a new dream together.\"",
                next: "day4_night_dain_future",
                stats: { Dain: { affinity: 15 } }
            },
            {
                text: "\"You can cry. You don't have to pretend to be okay. Not with me.\"",
                next: "day4_night_dain_tears_ok",
                stats: { Dain: { affinity: 20 } },
                setFlag: "day4_dain_tears"
            },
            {
                text: "\"...Want me to toss one more? One last time.\"",
                next: "day4_night_dain_last_spike",
                stats: { Dain: { affinity: 12 } }
            }
        ]
    },
    "day4_night_dain_future": {
        name: "Dain",
        text: "\"...A new dream?\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_future_2"
    },
    "day4_night_dain_future_2": {
        name: "Dain",
        text: "\"...I've thought about it. Coaching, training... I do love teaching people.\"",
        character: "assets/images/characters/dain_normal.png",
        night: true,
        next: "day4_night_dain_future_3"
    },
    "day4_night_dain_future_3": {
        name: "Me",
        text: "\"You'd be the most passionate coach in the world.\"",
        night: true,
        next: "day4_night_dain_future_4"
    },
    "day4_night_dain_future_4": {
        name: "Dain",
        text: "\"...Dummy, if you say things like that I'll cry again...\"",
        character: "assets/images/characters/dain_shy.png",
        night: true,
        next: "day4_night_dain_resolve"
    },
    "day4_night_dain_tears_ok": {
        name: "Dain",
        text: "\"......\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_tears_ok_2"
    },
    "day4_night_dain_tears_ok_2": {
        name: "Dain",
        text: "\"...You dummy... if you say that... I'll actually cry...!!\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_tears_ok_3"
    },
    "day4_night_dain_tears_ok_3": {
        name: "Me",
        text: "(Dain buried her face in my chest and started sobbing. Her cries echoed through the empty gym.)",
        night: true,
        next: "day4_night_dain_tears_ok_4"
    },
    "day4_night_dain_tears_ok_4": {
        name: "Dain",
        text: "\"...I couldn't tell anyone... every day, alone... I was so scared...\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_resolve"
    },
    "day4_night_dain_last_spike": {
        name: "Dain",
        text: "\"...One last time?\"",
        character: "assets/images/characters/dain_sad.png",
        night: true,
        next: "day4_night_dain_last_spike_2"
    },
    "day4_night_dain_last_spike_2": {
        name: "Me",
        text: "\"Not 'last'—it's 'the last one before a new beginning.'\"",
        night: true,
        next: "day4_night_dain_last_spike_3"
    },
    "day4_night_dain_last_spike_3": {
        name: "Me",
        text: "(I tossed the ball. Dain gritted her teeth and jumped, slamming down the best spike I'd ever seen. She grabbed her knee on landing... but she was smiling.)",
        night: true,
        next: "day4_night_dain_last_spike_4"
    },
    "day4_night_dain_last_spike_4": {
        name: "Dain",
        text: "\"...Haha. It hurts. But... it felt amazing.\"",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "day4_night_dain_last_spike_5"
    },
    "day4_night_dain_last_spike_5": {
        name: "Dain",
        text: "\"...Thank you. I think I can really let go now.\"",
        character: "assets/images/characters/dain_shy.png",
        night: true,
        next: "day4_night_dain_resolve"
    },

    // =========================================================================
    // Dain's Resolve — A New Path
    // =========================================================================
    "day4_night_dain_resolve": {
        name: "Dain",
        text: "\"...Hey.\"",
        character: "assets/images/characters/dain_normal.png",
        night: true,
        next: "day4_night_dain_resolve_2"
    },
    "day4_night_dain_resolve_2": {
        name: "Dain",
        text: "\"I've decided. I'm going to talk to my doctor properly and focus on rehabilitation.\"",
        night: true,
        next: "day4_night_dain_resolve_3"
    },
    "day4_night_dain_resolve_3": {
        name: "Dain",
        text: "\"Even if I can't play... this court is still my place.\"",
        character: "assets/images/characters/dain_normal.png",
        night: true,
        next: "day4_night_dain_resolve_4"
    },
    "day4_night_dain_resolve_4": {
        name: "Me",
        text: "\"On or off the court, Dain is still Dain.\"",
        night: true,
        next: "day4_night_dain_resolve_end"
    },
    "day4_night_dain_resolve_end": {
        name: "Dain",
        text: "\"...Okay, I'll admit it. You really are boyfriend material.\"",
        character: "assets/images/characters/dain_shy.png",
        night: true,
        setFlag: "day4_dain_truth_revealed",
        next: "day4_night_dain_farewell"
    },

    // =========================================================================
    // Farewell with Dain — Outside the Gym
    // =========================================================================
    "day4_night_dain_farewell": {
        name: "Me",
        text: "(We left the gym. The night air was cold, but Dain hooked her arm through mine as we walked.)",
        background: "assets/images/background/street.png",
        night: true,
        next: "day4_night_dain_farewell_2"
    },
    "day4_night_dain_farewell_2": {
        name: "Dain",
        text: "\"...Hey. I totally lost my cool today. Crying and making a mess of myself.\"",
        character: "assets/images/characters/dain_pout.png",
        night: true,
        next: "day4_night_dain_farewell_3"
    },
    "day4_night_dain_farewell_3": {
        name: "Me",
        text: "\"I liked that side of you too.\"",
        night: true,
        next: "day4_night_dain_farewell_4"
    },
    "day4_night_dain_farewell_4": {
        name: "Dain",
        text: "\"...Huh? Who says 'I liked it' about their crying girlfriend? Weirdo.\"",
        character: "assets/images/characters/dain_pout.png",
        night: true,
        next: "day4_night_dain_farewell_5"
    },
    "day4_night_dain_farewell_5": {
        name: "Dain",
        text: "\"...But thanks. Really. Without you, I would've kept carrying this alone forever.\"",
        character: "assets/images/characters/dain_shy.png",
        night: true,
        next: "day4_night_dain_farewell_6"
    },
    "day4_night_dain_farewell_6": {
        name: "Dain",
        text: "\"...Starting tomorrow, I'll smile for real. Not fake—for real.\"",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "day4_night_dain_home"
    },
    "day4_night_dain_home": {
        name: "Me",
        text: "(Back home. Dain's tears from the gym keep flashing before my eyes. The pain she hid behind her constant brightness... it weighs heavy on my heart.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        next: "day4_night_dain_home_2"
    },
    "day4_night_dain_home_2": {
        name: "Me",
        text: "(Tomorrow... I want it to be a day where Dain can smile from the heart. I'll be right there beside her.)",
        night: true,
        fade: true,
        next: "day4_final"
    },

    // =========================================================================
    // Homeroom Teacher Route — The Weight of a Secret, A Woman Behind the Teacher
    // =========================================================================
    "day4_night_teacher_call": {
        name: "Me",
        text: "(9 PM. A call from the teacher.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        bgm: "night1.mp3",
        next: "day4_night_teacher_call_2"
    },
    "day4_night_teacher_call_2": {
        name: "Homeroom Teacher",
        text: "\"...Hello? It's me. Are you... free right now?\"",
        character: "assets/images/characters/teacher_normal.png",
        night: true,
        next: "day4_night_teacher_call_3"
    },
    "day4_night_teacher_call_3": {
        name: "Me",
        text: "(Her voice sounds different from usual. Not the confident voice from the classroom... it sounds like she's about to break.)",
        night: true,
        next: "day4_night_teacher_call_4"
    },
    "day4_night_teacher_call_4": {
        name: "Homeroom Teacher",
        text: "\"...There's a café near the school. Can we meet there?\"",
        night: true,
        next: "day4_night_teacher_cafe"
    },
    "day4_night_teacher_cafe": {
        name: "Me",
        text: "(I arrived at the café. She was sitting in a corner booth. Instead of her usual neat outfit, she was in casual clothes.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_cafe_2"
    },
    "day4_night_teacher_cafe_2": {
        name: "Homeroom Teacher",
        text: "\"...Thanks for coming. Sorry for calling you out so suddenly.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_cafe_3"
    },
    "day4_night_teacher_cafe_3": {
        name: "Me",
        text: "(Her eyes are red. ...Was she crying?)",
        night: true,
        choices: [
            {
                text: "\"Did something happen?\"",
                next: "day4_night_teacher_concern",
                stats: { Teacher: { affinity: 5 } }
            },
            {
                text: "Offer her coffee and wait quietly",
                next: "day4_night_teacher_wait",
                stats: { Teacher: { affinity: 8 } }
            }
        ]
    },
    "day4_night_teacher_concern": {
        name: "Homeroom Teacher",
        text: "\"...It's not so much that something happened. I just... thought a lot today.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_open"
    },
    "day4_night_teacher_wait": {
        name: "Homeroom Teacher",
        text: "\"...Thank you. Just sitting next to me without saying anything... I really like that about you.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_open"
    },

    // =========================================================================
    // Teacher's Confession — The Weight of a Secret
    // =========================================================================
    "day4_night_teacher_open": {
        name: "Homeroom Teacher",
        text: "\"...At the faculty meeting today, the vice principal said, 'Be careful about getting too personally close to students.'\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_open_2"
    },
    "day4_night_teacher_open_2": {
        name: "Homeroom Teacher",
        text: "\"Maybe it wasn't about us directly. But... my heart nearly stopped.\"",
        night: true,
        next: "day4_night_teacher_open_3"
    },
    "day4_night_teacher_open_3": {
        name: "Homeroom Teacher",
        text: "\"I'm... a teacher. Your homeroom teacher. I know this isn't right.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_open_4"
    },
    "day4_night_teacher_open_4": {
        name: "Me",
        text: "\"......\"",
        night: true,
        next: "day4_night_teacher_open_5"
    },
    "day4_night_teacher_open_5": {
        name: "Homeroom Teacher",
        text: "\"But on the way home, I kept thinking about you. 'What is he doing right now?' 'Did he eat?'...\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_open_6"
    },
    "day4_night_teacher_open_6": {
        name: "Homeroom Teacher",
        text: "\"Am I not qualified to be a teacher? Or... is it because these feelings are real that I feel this way?\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_tear"
    },
    "day4_night_teacher_tear": {
        name: "Me",
        text: "(She gripped her coffee cup tightly and lowered her head. Her shoulders were trembling ever so slightly.)",
        night: true,
        next: "day4_night_teacher_tear_2"
    },
    "day4_night_teacher_tear_2": {
        name: "Homeroom Teacher",
        text: "\"...Ha, sorry. A teacher shouldn't be like this in front of a student.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_tear_choice"
    },
    "day4_night_teacher_tear_choice": {
        name: "Me",
        text: "(There are tears glistening at the corner of her eyes.)",
        night: true,
        choices: [
            {
                text: "Hold her hand",
                next: "day4_night_teacher_hold",
                stats: { Teacher: { affinity: 15 } },
                setFlag: "day4_held_teacher_hand"
            },
            {
                text: "\"Right now, you're not my teacher—you're a woman I care about\"",
                next: "day4_night_teacher_woman",
                stats: { Teacher: { affinity: 20 } },
                setFlag: "day4_teacher_as_woman"
            }
        ]
    },
    "day4_night_teacher_hold": {
        name: "Homeroom Teacher",
        text: "\"......!\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_hold_2"
    },
    "day4_night_teacher_hold_2": {
        name: "Me",
        text: "(I reached under the table and held her hand. Her cold fingers slowly grew warm.)",
        night: true,
        next: "day4_night_teacher_hold_3"
    },
    "day4_night_teacher_hold_3": {
        name: "Homeroom Teacher",
        text: "\"...We shouldn't do this here. Someone might see.\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_hold_4"
    },
    "day4_night_teacher_hold_4": {
        name: "Homeroom Teacher",
        text: "\"...But I don't want to let go.\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_real"
    },
    "day4_night_teacher_woman": {
        name: "Homeroom Teacher",
        text: "\"...What?\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_woman_2"
    },
    "day4_night_teacher_woman_2": {
        name: "Me",
        text: "\"Before you're a teacher, you're a person. It's okay to cry when you want to cry.\"",
        night: true,
        next: "day4_night_teacher_woman_3"
    },
    "day4_night_teacher_woman_3": {
        name: "Homeroom Teacher",
        text: "\"...You, honestly.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_woman_4"
    },
    "day4_night_teacher_woman_4": {
        name: "Homeroom Teacher",
        text: "\"...If you say things like that, I'll really start crying, you dummy.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_real"
    },

    // =========================================================================
    // Teacher's True Feelings — Between Teacher and Woman
    // =========================================================================
    "day4_night_teacher_real": {
        name: "Homeroom Teacher",
        text: "\"...You know, when I first became a teacher, I promised myself I'd never catch feelings for a student.\"",
        character: "assets/images/characters/teacher_normal.png",
        night: true,
        next: "day4_night_teacher_real_2"
    },
    "day4_night_teacher_real_2": {
        name: "Homeroom Teacher",
        text: "\"But then you came along... and broke that promise before I even noticed.\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_real_3"
    },
    "day4_night_teacher_real_3": {
        name: "Homeroom Teacher",
        text: "\"When I scolded you for being late, you just smiled and said, 'You look tired today, are you okay?' instead of making excuses.\"",
        night: true,
        next: "day4_night_teacher_real_4"
    },
    "day4_night_teacher_real_4": {
        name: "Homeroom Teacher",
        text: "\"That's when... I started noticing you.\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_real_choice"
    },
    "day4_night_teacher_real_choice": {
        name: "Me",
        text: "(She's speaking her heart with a trembling voice.)",
        night: true,
        choices: [
            {
                text: "\"After I graduate, I'll stand proudly by your side\"",
                next: "day4_night_teacher_graduate",
                stats: { Teacher: { affinity: 20 } }
            },
            {
                text: "\"This moment right now is precious. That's enough for me\"",
                next: "day4_night_teacher_present",
                stats: { Teacher: { affinity: 15 } }
            },
            {
                text: "\"If it's too hard for you, we can stop\"",
                next: "day4_night_teacher_give_up",
                stats: { Teacher: { affinity: 5 } }
            }
        ]
    },
    "day4_night_teacher_graduate": {
        name: "Homeroom Teacher",
        text: "\"...After you graduate?\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_graduate_2"
    },
    "day4_night_teacher_graduate_2": {
        name: "Homeroom Teacher",
        text: "\"...Will you wait until then?\"",
        night: true,
        next: "day4_night_teacher_graduate_3"
    },
    "day4_night_teacher_graduate_3": {
        name: "Me",
        text: "\"I'm not waiting—I'm going to become someone even better by then.\"",
        night: true,
        next: "day4_night_teacher_graduate_4"
    },
    "day4_night_teacher_graduate_4": {
        name: "Homeroom Teacher",
        text: "\"...God, seriously. You're way more mature than I am.\"",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        next: "day4_night_teacher_resolve"
    },
    "day4_night_teacher_present": {
        name: "Homeroom Teacher",
        text: "\"...This moment right now?\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_present_2"
    },
    "day4_night_teacher_present_2": {
        name: "Me",
        text: "\"We can worry about tomorrow when it comes. Right now, I just want to be here with you.\"",
        night: true,
        next: "day4_night_teacher_present_3"
    },
    "day4_night_teacher_present_3": {
        name: "Homeroom Teacher",
        text: "\"...You're right. Right now... this time together is what matters.\"",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        next: "day4_night_teacher_resolve"
    },
    "day4_night_teacher_give_up": {
        name: "Homeroom Teacher",
        text: "\"...Stop?\"",
        character: "assets/images/characters/teacher_angry.png",
        night: true,
        next: "day4_night_teacher_give_up_2"
    },
    "day4_night_teacher_give_up_2": {
        name: "Homeroom Teacher",
        text: "\"...You dummy. I'm not struggling because I want to stop.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_give_up_3"
    },
    "day4_night_teacher_give_up_3": {
        name: "Homeroom Teacher",
        text: "\"It's because my feelings are real... that's what scares me.\"",
        character: "assets/images/characters/teacher_sad.png",
        night: true,
        next: "day4_night_teacher_resolve"
    },

    // =========================================================================
    // Teacher's Resolve
    // =========================================================================
    "day4_night_teacher_resolve": {
        name: "Homeroom Teacher",
        text: "\"...You know what?\"",
        character: "assets/images/characters/teacher_normal.png",
        night: true,
        next: "day4_night_teacher_resolve_2"
    },
    "day4_night_teacher_resolve_2": {
        name: "Homeroom Teacher",
        text: "\"I've made up my mind. I'm not going to be ashamed of these feelings anymore.\"",
        night: true,
        next: "day4_night_teacher_resolve_3"
    },
    "day4_night_teacher_resolve_3": {
        name: "Homeroom Teacher",
        text: "\"In the classroom, I'm your teacher. But in moments like this... I'll just be me.\"",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        next: "day4_night_teacher_resolve_4"
    },
    "day4_night_teacher_resolve_4": {
        name: "Me",
        text: "\"That's the version of you I've always wanted to see.\"",
        night: true,
        next: "day4_night_teacher_resolve_end"
    },
    "day4_night_teacher_resolve_end": {
        name: "Homeroom Teacher",
        text: "\"...Thank you. Really, thank you.\"",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        setFlag: "day4_teacher_secret_shared",
        next: "day4_night_teacher_farewell"
    },

    // =========================================================================
    // Farewell with Teacher — Night Street
    // =========================================================================
    "day4_night_teacher_farewell": {
        name: "Me",
        text: "(We left the café. Walking side by side down the night street. It's the first time we've walked together outside of school.)",
        background: "assets/images/background/street.png",
        night: true,
        next: "day4_night_teacher_farewell_2"
    },
    "day4_night_teacher_farewell_2": {
        name: "Homeroom Teacher",
        text: "\"...It feels strange. Walking together outside of school... it actually feels like we're a real couple.\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_farewell_3"
    },
    "day4_night_teacher_farewell_3": {
        name: "Me",
        text: "\"We are a real couple.\"",
        night: true,
        next: "day4_night_teacher_farewell_4"
    },
    "day4_night_teacher_farewell_4": {
        name: "Homeroom Teacher",
        text: "\"...If you say that like it's the most obvious thing in the world... what am I supposed to do.\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_farewell_5"
    },
    "day4_night_teacher_farewell_5": {
        name: "Homeroom Teacher",
        text: "\"...At school tomorrow, I'll be back in 'teacher mode.' I apologize in advance if I seem cold—please understand.\"",
        character: "assets/images/characters/teacher_smile.png",
        night: true,
        next: "day4_night_teacher_farewell_6"
    },
    "day4_night_teacher_farewell_6": {
        name: "Homeroom Teacher",
        text: "\"...But my heart will always be with you. Don't forget that.\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day4_night_teacher_home"
    },
    "day4_night_teacher_home": {
        name: "Me",
        text: "(Back home. The image of her at the café keeps coming back to me. The always confident, perfect teacher... showing her tears and vulnerability as just a woman.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        next: "day4_night_teacher_home_2"
    },
    "day4_night_teacher_home_2": {
        name: "Me",
        text: "(This secret is daunting... but it's precious. I'll never take her feelings lightly.)",
        night: true,
        fade: true,
        next: "day4_final"
    },

    // =========================================================================
    // School Nurse Route — Loneliness Behind the Mask, Real Warmth
    // =========================================================================
    "day4_night_nurse_msg": {
        name: "Me",
        text: "(10 PM. A message from the nurse. 'Still up? Can you come out for a bit if you have time?')",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        bgm: "night1.mp3",
        next: "day4_night_nurse_msg_2"
    },
    "day4_night_nurse_msg_2": {
        name: "Me",
        text: "(...Her usual playful message, but why this late? Something feels off.)",
        night: true,
        next: "day4_night_nurse_msg_3"
    },
    "day4_night_nurse_msg_3": {
        name: "Me",
        text: "(I replied right away. 'Where should I go?')",
        night: true,
        next: "day4_night_nurse_msg_4"
    },
    "day4_night_nurse_msg_4": {
        name: "Me",
        text: "('The nurse's office at school. I'll leave the back door open.' ...The nurse's office?)",
        night: true,
        next: "day4_night_nurse_arrive"
    },
    "day4_night_nurse_arrive": {
        name: "Me",
        text: "(I arrived at the school. When I opened the nurse's office door, the room was dark with only a small lamp on. She was there.)",
        background: "assets/images/background/school.png",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_arrive_2"
    },
    "day4_night_nurse_arrive_2": {
        name: "School Nurse",
        text: "\"Wow, you actually came. Even though I called you out this late?\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_arrive_3"
    },
    "day4_night_nurse_arrive_3": {
        name: "Me",
        text: "(She's smiling as usual, but... there are dark circles under her eyes. And several empty coffee cans on the desk.)",
        night: true,
        choices: [
            {
                text: "\"You look really tired\"",
                next: "day4_night_nurse_tired",
                stats: { Nurse: { affinity: 8 } }
            },
            {
                text: "\"What's the real reason you called me here?\"",
                next: "day4_night_nurse_real_reason",
                stats: { Nurse: { affinity: 5 } }
            }
        ]
    },
    "day4_night_nurse_tired": {
        name: "School Nurse",
        text: "\"Think so? It's been a hectic week. I'm fine though, really.\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_mask"
    },
    "day4_night_nurse_real_reason": {
        name: "School Nurse",
        text: "\"...The real reason? ...I wanted to see you.\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_mask"
    },

    // =========================================================================
    // Nurse's Mask — Loneliness Behind the Jokes
    // =========================================================================
    "day4_night_nurse_mask": {
        name: "Me",
        text: "(She's smiling, but something feels forced. Like she's pushing too hard.)",
        night: true,
        next: "day4_night_nurse_mask_2"
    },
    "day4_night_nurse_mask_2": {
        name: "School Nurse",
        text: "\"...Actually, something kind of tough happened at school today.\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_mask_3"
    },
    "day4_night_nurse_mask_3": {
        name: "School Nurse",
        text: "\"The other teachers said, 'The nurse is always so cheerful—must be nice having no worries.'\"",
        night: true,
        next: "day4_night_nurse_mask_4"
    },
    "day4_night_nurse_mask_4": {
        name: "School Nurse",
        text: "\"...'No worries.' Haha. That one... actually stung the most.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_mask_5"
    },
    "day4_night_nurse_mask_5": {
        name: "School Nurse",
        text: "\"I was struggling too... but nobody asked. Not even once. Not a single 'are you okay?'\"",
        night: true,
        next: "day4_night_nurse_mask_6"
    },
    "day4_night_nurse_mask_6": {
        name: "School Nurse",
        text: "\"In the nurse's office, kids come in and I smile for them, take care of them. But... who takes care of me?\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_lonely"
    },
    "day4_night_nurse_lonely": {
        name: "School Nurse",
        text: "\"...When I go home, there's nobody. I live alone.\"",
        night: true,
        next: "day4_night_nurse_lonely_2"
    },
    "day4_night_nurse_lonely_2": {
        name: "School Nurse",
        text: "\"So... I started staying late at school. At least in this nurse's office, I don't feel so alone.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_lonely_3"
    },
    "day4_night_nurse_lonely_3": {
        name: "Me",
        text: "(Her smile faded. For the first time, she's showing me her real face—without the jokes, without the teasing.)",
        night: true,
        next: "day4_night_nurse_lonely_choice"
    },
    "day4_night_nurse_lonely_choice": {
        name: "Me",
        text: "(I can see the real her now. What do I say?)",
        night: true,
        choices: [
            {
                text: "Sit beside her and hold her",
                next: "day4_night_nurse_hug",
                stats: { Nurse: { affinity: 20 } },
                setFlag: "day4_hugged_nurse"
            },
            {
                text: "\"From now on, I'll be the one to take care of you\"",
                next: "day4_night_nurse_care",
                stats: { Nurse: { affinity: 15 } },
                setFlag: "day4_nurse_cared"
            }
        ]
    },
    "day4_night_nurse_hug": {
        name: "School Nurse",
        text: "\"......!!\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_hug_2"
    },
    "day4_night_nurse_hug_2": {
        name: "School Nurse",
        text: "\"...Hey, all of a sudden... what are you...\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_hug_3"
    },
    "day4_night_nurse_hug_3": {
        name: "Me",
        text: "(She was startled at first... but soon her hands gripped my clothes tightly.)",
        night: true,
        next: "day4_night_nurse_hug_4"
    },
    "day4_night_nurse_hug_4": {
        name: "School Nurse",
        text: "\"...This is weird. Have I ever wanted someone to hold me like this before?\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_hug_5"
    },
    "day4_night_nurse_hug_5": {
        name: "School Nurse",
        text: "\"...Let's just stay like this. Just a little while.\"",
        night: true,
        next: "day4_night_nurse_truth"
    },
    "day4_night_nurse_care": {
        name: "School Nurse",
        text: "\"...What? You'll take care of me?\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_care_2"
    },
    "day4_night_nurse_care_2": {
        name: "Me",
        text: "\"You always take care of everyone else. It's your turn to be taken care of.\"",
        night: true,
        next: "day4_night_nurse_care_3"
    },
    "day4_night_nurse_care_3": {
        name: "School Nurse",
        text: "\"...Ha. How do you always hit me right where it hurts?\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_care_4"
    },
    "day4_night_nurse_care_4": {
        name: "School Nurse",
        text: "\"...Do you really mean that?\"",
        night: true,
        next: "day4_night_nurse_truth"
    },

    // =========================================================================
    // Nurse's Truth — Behind the Mask
    // =========================================================================
    "day4_night_nurse_truth": {
        name: "School Nurse",
        text: "\"...Actually, there's a reason I became a school nurse.\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_truth_2"
    },
    "day4_night_nurse_truth_2": {
        name: "School Nurse",
        text: "\"In high school, a close friend of mine got sick and was absent for a long time. The school nurse back then really took care of her.\"",
        night: true,
        next: "day4_night_nurse_truth_3"
    },
    "day4_night_nurse_truth_3": {
        name: "School Nurse",
        text: "\"I wanted to be someone like that too. Someone who's there for kids when they're hurting.\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_truth_4"
    },
    "day4_night_nurse_truth_4": {
        name: "School Nurse",
        text: "\"But in reality... they just saw me as 'the nurse who jokes around.' Not a real teacher.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_truth_5"
    },
    "day4_night_nurse_truth_5": {
        name: "School Nurse",
        text: "\"They said being serious would ruin the vibe, so... I naturally started hiding behind laughs.\"",
        night: true,
        next: "day4_night_nurse_truth_6"
    },
    "day4_night_nurse_truth_6": {
        name: "School Nurse",
        text: "\"...I did the same with you. Approaching you with jokes and teasing. Because showing my real feelings... was terrifying.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_truth_choice"
    },
    "day4_night_nurse_truth_choice": {
        name: "Me",
        text: "(Her voice is trembling.)",
        night: true,
        choices: [
            {
                text: "\"I love the playful you and the real you—all of it\"",
                next: "day4_night_nurse_accept_all",
                stats: { Nurse: { affinity: 20 } }
            },
            {
                text: "\"Thank you for showing me the real you\"",
                next: "day4_night_nurse_thanks",
                stats: { Nurse: { affinity: 15 } }
            },
            {
                text: "\"You don't have to be scared anymore. I'm here\"",
                next: "day4_night_nurse_safe",
                stats: { Nurse: { affinity: 18 } }
            }
        ]
    },
    "day4_night_nurse_accept_all": {
        name: "School Nurse",
        text: "\"...All of it?\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_accept_all_2"
    },
    "day4_night_nurse_accept_all_2": {
        name: "School Nurse",
        text: "\"...You're the first person who's ever said that to me.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_accept_all_3"
    },
    "day4_night_nurse_accept_all_3": {
        name: "School Nurse",
        text: "\"...I don't even know how to react. This is a first.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_resolve"
    },
    "day4_night_nurse_thanks": {
        name: "School Nurse",
        text: "\"...Thankful? To me?\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_thanks_2"
    },
    "day4_night_nurse_thanks_2": {
        name: "School Nurse",
        text: "\"...I didn't know being honest with you could feel this comfortable.\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_resolve"
    },
    "day4_night_nurse_safe": {
        name: "School Nurse",
        text: "\"...I don't have to be scared?\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_safe_2"
    },
    "day4_night_nurse_safe_2": {
        name: "School Nurse",
        text: "\"...Maybe you're the person I feel most at ease with. Funny how that works.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_resolve"
    },

    // =========================================================================
    // Nurse's Resolve — A Real Smile
    // =========================================================================
    "day4_night_nurse_resolve": {
        name: "School Nurse",
        text: "\"...You know what?\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_resolve_2"
    },
    "day4_night_nurse_resolve_2": {
        name: "School Nurse",
        text: "\"From now on, I won't wear a mask around you. When I'm happy, I'll really smile. When I'm sad, I'll say so.\"",
        night: true,
        next: "day4_night_nurse_resolve_3"
    },
    "day4_night_nurse_resolve_3": {
        name: "School Nurse",
        text: "\"With you... I think I can show the real me.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_resolve_4"
    },
    "day4_night_nurse_resolve_4": {
        name: "Me",
        text: "\"I've been waiting for that. The real you.\"",
        night: true,
        next: "day4_night_nurse_resolve_end"
    },
    "day4_night_nurse_resolve_end": {
        name: "School Nurse",
        text: "\"...... You really... if you keep this up, there's no going back for me.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        setFlag: "day4_nurse_mask_off",
        next: "day4_night_nurse_farewell"
    },

    // =========================================================================
    // Farewell with Nurse — Outside School
    // =========================================================================
    "day4_night_nurse_farewell": {
        name: "Me",
        text: "(We left the nurse's office and walked outside the school. She hooked her arm through mine.)",
        background: "assets/images/background/street.png",
        night: true,
        next: "day4_night_nurse_farewell_2"
    },
    "day4_night_nurse_farewell_2": {
        name: "School Nurse",
        text: "\"...Tonight was pretty embarrassing, wasn't it? Someone who's always laughing, suddenly falling apart like that.\"",
        character: "assets/images/characters/nurse_normal.png",
        night: true,
        next: "day4_night_nurse_farewell_3"
    },
    "day4_night_nurse_farewell_3": {
        name: "Me",
        text: "\"That wasn't uncool—that was honest.\"",
        night: true,
        next: "day4_night_nurse_farewell_4"
    },
    "day4_night_nurse_farewell_4": {
        name: "School Nurse",
        text: "\"...It's strange. Around you, I keep getting honest. That's not like me at all.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_farewell_5"
    },
    "day4_night_nurse_farewell_5": {
        name: "School Nurse",
        text: "\"...At school tomorrow, I'll act normal again. But my eyes won't be able to hide it.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_farewell_6"
    },
    "day4_night_nurse_farewell_6": {
        name: "School Nurse",
        text: "\"...So pay attention. When you walk past the nurse's office... just once.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day4_night_nurse_home"
    },
    "day4_night_nurse_home": {
        name: "Me",
        text: "(Back home. The real face she showed me in the nurse's office keeps replaying. The person who was always joking and laughing... was actually the loneliest one of all.)",
        background: "assets/images/background/room_my.png",
        character: null,
        night: true,
        next: "day4_night_nurse_home_2"
    },
    "day4_night_nurse_home_2": {
        name: "Me",
        text: "(She's not alone anymore. I'm here. Tomorrow, I want to see her real smile.)",
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
        changeDay: 5,
        next: "day5_start"
    }
});
