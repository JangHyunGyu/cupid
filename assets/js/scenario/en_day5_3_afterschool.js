/**
 * ============================================================================
 * CUPID - Day 5 Afterschool Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day5_3_afterschool.js
 * 언어: 영어 (English)
 * 일차: Day 5 (5일차 - 일요일)
 * 시간대: Afterschool (오후 - 에필로그)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 옥상에서의 에필로그. 엔딩 루트에 따라 다양한 결말이 펼쳐진다.
 * 
 *  엔딩 종류 (6가지)
 * ----------------------------------------------------------------------------
 * 1. 트루 엔딩  : 일편단심(loyalty) + Day4 고백 성공 → 키스씬
 * 2. 굿 엔딩   : Day4 고백 성공 (양다리였음) 또는 Day5 늦은 고백
 * 3. 수라장 엔딩 : 여러 명과 약속 + 고백 안 함 → 수라장
 * 4. 하렘 엔딩  : 여러 명과 약속 + 진심 고백 → 전원 수락
 * 5. 우정 엔딩  : Day4 고백 보류 + Day5에서도 고백 안 함
 * 6. 솔로 엔딩  : 아무와도 데이트 안 함 → 혼자 성장
 * 
 *  조건 플래그 (Condition Flags)
 * ----------------------------------------------------------------------------
 * day4_confession_accepted : Day4에서 고백 수락됨
 * day4_waited              : Day4에서 고백 보류
 * day3_loyalty_bonus       : 단일 약속 (일편단심)
 * day3_has_multiple_dates  : 여러 명과 약속 존재
 * 
 *  설정 플래그 (Set Flags)
 * ----------------------------------------------------------------------------
 * ending_true_love   : 트루 엔딩 도달
 * ending_good        : 굿 엔딩 도달
 * ending_mayhem      : 수라장 엔딩 도달
 * ending_harem       : 하렘 엔딩 도달
 * ending_friend      : 우정 엔딩 도달
 * ending_alone       : 솔로 엔딩 도달
 * day5_confessed     : Day5에서 고백함
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
    // 오후 - 옥상 에필로그 (엔딩 분기)
    // =========================================================================
    "day5_afternoon_start": {
        name: "Me",
        text: "(Before I knew it, afternoon arrived. The sky seen from the rooftop is beginning to turn orange.)",
        background: "assets/images/background/top_school.png",
        sunset: true,
        next: "day5_afternoon_branch"
    },
    "day5_afternoon_branch": {
        name: "System",
        text: "",
        branches: [
            // 트루 엔딩: 일편단심 + 고백 수락
            { next: "day5_true_love_start", condition: "day4_confession_accepted", excludeCondition: "day3_has_multiple_dates" },
            // 굿 엔딩: 양다리였지만 고백 수락
            { next: "day5_good_start", condition: "day4_confession_accepted" },
            // 수라장 엔딩: 여러 명과 약속 + 고백 안 함
            { next: "day5_mayhem_start", condition: "day3_has_multiple_dates" },
            // 우정 엔딩: 고백 보류 상태
            { next: "day5_friend_start", condition: "day4_waited" },
            // 솔로 엔딩: 아무 데이트도 없음
            { next: "day5_alone_start" }
        ]
    },


    // █████████████████████████████████████████████████████████████████████████
    //  Ending 1: True Love Ending
    //  Condition: Loyalty + Day4 Confession Success → Kiss Scene
    // █████████████████████████████████████████████████████████████████████████

    "day5_true_love_start": {
        name: "Me",
        text: "(Standing side by side under the sunset. I wish this moment could last forever.)",
        sunset: true,
        setFlag: "ending_true_love",
        next: "day5_true_talk_1"
    },
    "day5_true_talk_1": {
        name: "Me",
        text: "\"You know... Before I transferred here, I was scared of the new school.\"",
        next: "day5_true_talk_2"
    },
    "day5_true_talk_2": {
        name: "Me",
        text: "\"But now... I think transferring here was the best decision of my life.\"",
        next: "day5_true_response"
    },
    "day5_true_response": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_true_seoyeon", character: "Seoyeon" },
            { next: "day5_true_yuna", character: "Yuna" },
            { next: "day5_true_dain", character: "Dain" },
            { next: "day5_true_nurse", character: "Nurse" },
            { next: "day5_true_teacher", character: "Teacher" }
        ]
    },

    // --- 트루 엔딩 대사 ---
    "day5_true_seoyeon": {
        name: "Seoyeon",
        text: "\"Me too... I'm so glad you transferred here. Let's stay together... always.\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        next: "day5_true_kiss_buildup"
    },
    "day5_true_yuna": {
        name: "Yuna",
        text: "\"...I thought being alone was easier. But since you came... everything changed. Thank you.\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        next: "day5_true_kiss_buildup"
    },
    "day5_true_dain": {
        name: "Dain",
        text: "\"Every day became more fun since you came!! You'll keep cheering me on... right?!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day5_true_kiss_buildup"
    },
    "day5_true_nurse": {
        name: "School Nurse",
        text: "\"Our relationship won't be easy... But if it's with you, it's okay. Together, we can overcome anything.\"",
        character: "assets/images/characters/nurse_shy.png",
        sunset: true,
        next: "day5_true_kiss_buildup"
    },
    "day5_true_teacher": {
        name: "Homeroom Teacher",
        text: "\"...Honestly, a teacher shouldn't feel this way about a student. But what can I do, it's real. ...Let's make this work, us.\"",
        character: "assets/images/characters/teacher_shy.png",
        sunset: true,
        next: "day5_true_kiss_buildup"
    },

    // ─── 키스씬 (간접 연출) ───
    "day5_true_kiss_buildup": {
        name: "Me",
        text: "(The wind blows. Their face, bathed in the sunset glow, feels unusually close.)",
        sunset: true,
        next: "day5_true_kiss_2"
    },
    "day5_true_kiss_2": {
        name: "Me",
        text: "(We look into each other's eyes. No words are needed.)",
        sunset: true,
        next: "day5_true_kiss_3"
    },
    "day5_true_kiss_3": {
        name: "Me",
        text: "(Naturally... our faces draw closer.)",
        sunset: true,
        next: "day5_true_kiss_4"
    },
    "day5_true_kiss_4": {
        name: "Me",
        text: "(...I closed my eyes.)",
        sunset: true,
        fade: true,
        next: "day5_true_kiss_5"
    },
    "day5_true_kiss_5": {
        name: "Me",
        text: "(A soft warmth. Time seemed to stop.)",
        fade: true,
        next: "day5_true_kiss_6"
    },
    "day5_true_kiss_6": {
        name: "Me",
        text: "(......)",
        fade: true,
        next: "day5_true_kiss_after"
    },
    "day5_true_kiss_after": {
        name: "Me",
        text: "(When I opened my eyes, they were smiling in the sunset light. The most beautiful smile in the world.)",
        sunset: true,
        next: "day5_true_evening_branch"
    },

    // ─── 간접 베드씬: 히로인별 분기 ───
    "day5_true_evening_branch": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_bed_seoyeon_1", character: "Seoyeon" },
            { next: "day5_bed_yuna_1", character: "Yuna" },
            { next: "day5_bed_dain_1", character: "Dain" },
            { next: "day5_bed_nurse_1", character: "Nurse" },
            { next: "day5_bed_teacher_1", character: "Teacher" }
        ]
    },

    // ─── 서연: 부모님 부재, 서연의 방 ───
    "day5_bed_seoyeon_1": {
        name: "Me",
        text: "(The sun has set. I was going to walk her home... but Seoyeon grabbed my sleeve.)",
        night: true,
        next: "day5_bed_seoyeon_2"
    },
    "day5_bed_seoyeon_2": {
        name: "Seoyeon",
        text: "\"...Um, my parents aren't home today. Just for a bit... do you want to come in?\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        next: "day5_bed_seoyeon_3"
    },
    "day5_bed_seoyeon_3": {
        name: "Me",
        text: "(A quiet residential street. Seoyeon opened the front door. Past the spacious living room, up to her room on the second floor.)",
        night: true,
        fade: true,
        next: "day5_bed_seoyeon_4"
    },
    "day5_bed_seoyeon_4": {
        name: "Me",
        text: "(A neatly organized room. A bookshelf full of books, student council papers on the desk. Soft ambient lighting. The room was filled with Seoyeon's scent.)",
        background: "assets/images/background/seyoun_room.png",
        night: true,
        fade: true,
        next: "day5_bed_seoyeon_4b"
    },
    "day5_bed_seoyeon_4b": {
        name: "Seoyeon",
        text: "\"...My parents' room is on the first floor, so it's fine. Oh, no that's not what I meant... Just, come sit here.\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_seoyeon_5"
    },
    "day5_bed_seoyeon_5": {
        name: "Me",
        text: "(We sat side by side on the edge of the bed. Seoyeon's hands were trembling.)",
        night: true,
        fade: true,
        next: "day5_bed_seoyeon_6"
    },
    "day5_bed_seoyeon_6": {
        name: "Seoyeon",
        text: "\"...I always had to be perfect. Because I'm the student council president. But with you... I just want to be me.\"",
        character: "assets/images/characters/seyoun_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_seoyeon_7"
    },
    "day5_bed_seoyeon_7": {
        name: "Me",
        text: "(Seoyeon rested her head on my shoulder. My heart felt like it would burst.)",
        night: true,
        fade: true,
        next: "day5_bed_common_1"
    },

    // ─── 유나: 도서관 별관 비밀 다락방 ───
    "day5_bed_yuna_1": {
        name: "Me",
        text: "(The sun has set. I was about to leave... but Yuna held my hand.)",
        night: true,
        next: "day5_bed_yuna_2"
    },
    "day5_bed_yuna_2": {
        name: "Yuna",
        text: "\"...Not yet. There's a place I want to show you.\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        next: "day5_bed_yuna_3"
    },
    "day5_bed_yuna_3": {
        name: "Me",
        text: "(Yuna led me to the top of the library annex, a secret attic that no one knows about.)",
        night: true,
        fade: true,
        next: "day5_bed_yuna_4"
    },
    "day5_bed_yuna_4": {
        name: "Me",
        text: "(An old sofa, a single blanket, and stars visible through a small window. Yuna's secret space.)",
        background: "assets/images/background/yuna_hideout.png",
        night: true,
        fade: true,
        next: "day5_bed_yuna_5"
    },
    "day5_bed_yuna_5": {
        name: "Yuna",
        text: "\"...Only I know about this place. Well, now you do too.\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_yuna_6"
    },
    "day5_bed_yuna_6": {
        name: "Me",
        text: "(Yuna spread out the blanket. Sitting side by side on the narrow sofa, our shoulders touched.)",
        night: true,
        fade: true,
        next: "day5_bed_yuna_7"
    },
    "day5_bed_yuna_7": {
        name: "Yuna",
        text: "\"...Don't go. Tonight... stay here.\"",
        character: "assets/images/characters/yuna_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_common_1"
    },

    // ─── 다인: 빈 체육관 매트 위 ───
    "day5_bed_dain_1": {
        name: "Me",
        text: "(The sun has set. Dain waved a key around with a grin.)",
        night: true,
        next: "day5_bed_dain_2"
    },
    "day5_bed_dain_2": {
        name: "Dain",
        text: "\"Hey, I've got the key to the gym storage! Let's look at stars and talk!\"",
        character: "assets/images/characters/dain_laugh.png",
        night: true,
        next: "day5_bed_dain_3"
    },
    "day5_bed_dain_3": {
        name: "Me",
        text: "(The gym at night, empty. Dain laid out mats and opened the skylight in the ceiling.)",
        background: "assets/images/background/gym.png",
        night: true,
        fade: true,
        next: "day5_bed_dain_4"
    },
    "day5_bed_dain_4": {
        name: "Me",
        text: "(We lay side by side on the mats, looking up at the stars. I could hear Dain breathing close by.)",
        night: true,
        fade: true,
        next: "day5_bed_dain_5"
    },
    "day5_bed_dain_5": {
        name: "Dain",
        text: "\"...Hey, my heart is beating so fast right now. Put your hand here.\"",
        character: "assets/images/characters/dain_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_dain_6"
    },
    "day5_bed_dain_6": {
        name: "Me",
        text: "(Dain placed my hand over her chest. It really was... beating fast.)",
        night: true,
        fade: true,
        next: "day5_bed_dain_7"
    },
    "day5_bed_dain_7": {
        name: "Dain",
        text: "\"...Dummy, why are you looking at me like that. It's embarrassing...\"",
        character: "assets/images/characters/dain_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_common_1"
    },

    // ─── 보건선생님: 보건실, 문 잠금 ───
    "day5_bed_nurse_1": {
        name: "Me",
        text: "(The sun has set. The school nurse smiled meaningfully.)",
        night: true,
        next: "day5_bed_nurse_2"
    },
    "day5_bed_nurse_2": {
        name: "School Nurse",
        text: "\"...There should be no one at school yet. Want to stop by the infirmary?\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        next: "day5_bed_nurse_3"
    },
    "day5_bed_nurse_3": {
        name: "Me",
        text: "(Click. I heard the infirmary door lock.)",
        night: true,
        fade: true,
        next: "day5_bed_nurse_4"
    },
    "day5_bed_nurse_4": {
        name: "Me",
        text: "(The curtained bed area. Instead of disinfectant, a faint perfume scent lingered.)",
        background: "assets/images/background/nurse_room.jpg",
        night: true,
        fade: true,
        next: "day5_bed_nurse_5"
    },
    "day5_bed_nurse_5": {
        name: "School Nurse",
        text: "\"In here... I'm not 'Teacher.' Just a woman.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_nurse_6"
    },
    "day5_bed_nurse_6": {
        name: "Me",
        text: "(We sat side by side on the edge of the bed. Her hand rested on top of mine.)",
        night: true,
        fade: true,
        next: "day5_bed_nurse_7"
    },
    "day5_bed_nurse_7": {
        name: "School Nurse",
        text: "\"...Just for today, no student, no teacher. Just... us.\"",
        character: "assets/images/characters/nurse_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_common_1"
    },

    // ─── 담임선생님: 선생님의 차 안 → 선생님 자취방 ───
    "day5_bed_teacher_1": {
        name: "Me",
        text: "(The sun has set. The teacher took out her car keys and jingled them.)",
        night: true,
        next: "day5_bed_teacher_2"
    },
    "day5_bed_teacher_2": {
        name: "Homeroom Teacher",
        text: "\"...I'll give you a ride. It's late.\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        next: "day5_bed_teacher_3"
    },
    "day5_bed_teacher_3": {
        name: "Me",
        text: "(The car stopped... not at my house. It was in front of the teacher's apartment.)",
        night: true,
        fade: true,
        next: "day5_bed_teacher_4"
    },
    "day5_bed_teacher_4": {
        name: "Homeroom Teacher",
        text: "\"...Just one cup of coffee. I'll send you home after. Probably.\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_teacher_5"
    },
    "day5_bed_teacher_5": {
        name: "Me",
        text: "(A small but tidy apartment. Ungraded exam papers piled on the desk. We sat side by side on the sofa.)",
        background: "assets/images/background/teacher_room.png",
        night: true,
        fade: true,
        next: "day5_bed_teacher_6"
    },
    "day5_bed_teacher_6": {
        name: "Homeroom Teacher",
        text: "\"...Hah, I really am unfit to be a teacher. Bringing a student home...\"",
        character: "assets/images/characters/teacher_shy.png",
        night: true,
        fade: true,
        next: "day5_bed_teacher_7"
    },
    "day5_bed_teacher_7": {
        name: "Me",
        text: "(The teacher let down her hair and smiled wearily. The coffee... ended up going cold.)",
        night: true,
        fade: true,
        next: "day5_bed_common_1"
    },

    // ─── 공통: 암전 → 아침 ───
    "day5_bed_common_1": {
        name: "Me",
        text: "(Each other's warmth. Silently, naturally— the distance between us vanished.)",
        night: true,
        fade: true,
        next: "day5_bed_common_2"
    },
    "day5_bed_common_2": {
        name: "Me",
        text: "(......)",
        night: true,
        fade: true,
        next: "day5_bed_common_3"
    },
    "day5_bed_common_3": {
        name: "Me",
        text: "(..................)",
        night: true,
        fade: true,
        next: "day5_true_morning"
    },

    // ─── 다음날 아침 ───
    "day5_true_morning": {
        name: "Me",
        text: "(I opened my eyes. Morning sunlight was streaming through the window.)",
        fade: true,
        next: "day5_true_morning_2"
    },
    "day5_true_morning_2": {
        name: "Me",
        text: "(A face sleeping quietly next to me. Last night... wasn't a dream.)",
        fade: true,
        next: "day5_true_morning_3"
    },
    "day5_true_morning_3": {
        name: "Me",
        text: "(I gently pulled the blanket up over them. I thought— I want to see this sleeping face for the rest of my life.)",
        fade: true,
        next: "day5_true_final"
    },
    "day5_true_final": {
        name: "Me",
        text: "(This moment, this feeling, this warmth— I will never forget it.)",
        fade: true,
        next: "day5_ending_true"
    },


    // █████████████████████████████████████████████████████████████████████████
    //  엔딩 2: 굿 엔딩 (Good Ending)
    //  조건: Day4 고백 성공 (양다리 경험) 또는 Day5 늦은 고백
    // █████████████████████████████████████████████████████████████████████████

    "day5_good_start": {
        name: "Me",
        text: "(Standing side by side under the sunset. There were complications along the way... but in the end, I'm here with this person.)",
        sunset: true,
        setFlag: "ending_good",
        next: "day5_good_talk_1"
    },
    "day5_good_talk_1": {
        name: "Me",
        text: "\"...I'll be honest. At first, my heart wavered. There were so many wonderful people around.\"",
        next: "day5_good_talk_2"
    },
    "day5_good_talk_2": {
        name: "Me",
        text: "\"But in the end... the only one my heart points to is you.\"",
        next: "day5_good_response"
    },
    "day5_good_response": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_good_seoyeon", character: "Seoyeon" },
            { next: "day5_good_yuna", character: "Yuna" },
            { next: "day5_good_dain", character: "Dain" },
            { next: "day5_good_nurse", character: "Nurse" },
            { next: "day5_good_teacher", character: "Teacher" }
        ]
    },
    "day5_good_seoyeon": {
        name: "Seoyeon",
        text: "\"...I knew. That you were being nice to other girls too. But it's okay. You're by my side in the end.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "day5_good_final"
    },
    "day5_good_yuna": {
        name: "Yuna",
        text: "\"...I know you wavered. But you came to me in the end. ...That's enough.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day5_good_final"
    },
    "day5_good_dain": {
        name: "Dain",
        text: "\"Pfft~ I knew from the start! That you'd come to me in the end!! Hehe!\"",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "day5_good_final"
    },
    "day5_good_nurse": {
        name: "School Nurse",
        text: "\"I knew you were popular with the students. Hehe... But right now, just look at me.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day5_good_final"
    },
    "day5_good_teacher": {
        name: "Homeroom Teacher",
        text: "\"...Player. But since you came to me, that's enough. From now on, eyes on me only. Got it?\"",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        next: "day5_good_final"
    },
    "day5_good_final": {
        name: "Me",
        text: "(We held hands side by side, watching the sunset. It wasn't perfect... but this is our beginning.)",
        sunset: true,
        fade: true,
        next: "day5_ending_good"
    },


    // █████████████████████████████████████████████████████████████████████████
    //  엔딩 3: 수라장 엔딩 (Mayhem Ending)
    //  조건: 여러 명과 약속 + 고백 안 함 → 수라장
    // █████████████████████████████████████████████████████████████████████████

    "day5_mayhem_start": {
        name: "Me",
        text: "(I came up to the rooftop... Wait, huh?)",
        sunset: true,
        setFlag: "ending_mayhem",
        next: "day5_mayhem_2"
    },
    "day5_mayhem_2": {
        name: "Me",
        text: "(Why... why is everyone here?!)",
        character: null,
        next: "day5_mayhem_3"
    },
    "day5_mayhem_3": {
        name: "Seoyeon",
        text: "\"Oh, {player_name}! I was just about to come up to the rooftop too~\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day5_mayhem_4"
    },
    "day5_mayhem_4": {
        name: "Yuna",
        text: "\"...Why is Seoyeon here again.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day5_mayhem_5"
    },
    "day5_mayhem_5": {
        name: "Dain",
        text: "\"Hey!! I'm here too!! Wait, why is everyone here?!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day5_mayhem_6"
    },
    "day5_mayhem_6": {
        name: "Me",
        text: "(I have a feeling... this is going to be absolute chaos...)",
        next: "day5_mayhem_7"
    },
    "day5_mayhem_7": {
        name: "Seoyeon",
        text: "\"By the way {player_name}, you remember our plans for this weekend, right?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day5_mayhem_8"
    },
    "day5_mayhem_8": {
        name: "Yuna",
        text: "\"...What? You made plans with me too.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day5_mayhem_9"
    },
    "day5_mayhem_9": {
        name: "Dain",
        text: "\"Huh?! Hey! You told me you were free too!!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day5_mayhem_10"
    },
    "day5_mayhem_10": {
        name: "Me",
        text: "(Three pairs of eyes turn toward me simultaneously. ...I'm done for.)",
        character: null,
        next: "day5_mayhem_11"
    },
    "day5_mayhem_11": {
        name: "Seoyeon",
        text: "\"...{player_name}. Care to explain?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day5_mayhem_12"
    },
    "day5_mayhem_12": {
        name: "Me",
        text: "(What do I say?!)",
        choices: [
            {
                text: "\"C-can't I like all of you...?\"",
                next: "day5_mayhem_honest"
            },
            {
                text: "\"Let me speak from the heart.\"",
                next: "day5_mayhem_confess"
            },
            {
                text: "\"(Run for it!!)\"",
                next: "day5_mayhem_run"
            }
        ]
    },

    // --- 솔직 루트 ---
    "day5_mayhem_honest": {
        name: "Me",
        text: "\"A-actually... you're all such wonderful people that I couldn't choose...\"",
        next: "day5_mayhem_honest_2"
    },
    "day5_mayhem_honest_2": {
        name: "System",
        text: "(Silence fills the air.)",
        next: "day5_mayhem_honest_3"
    },
    "day5_mayhem_honest_3": {
        name: "Seoyeon",
        text: "\"......Hah.\"",
        next: "day5_mayhem_honest_4"
    },
    "day5_mayhem_honest_4": {
        name: "Yuna",
        text: "\"...The worst.\"",
        next: "day5_mayhem_honest_5"
    },
    "day5_mayhem_honest_5": {
        name: "Dain",
        text: "\"You really... you're really the worst!!!\"",
        next: "day5_mayhem_final"
    },

    // --- 도주 루트 ---
    "day5_mayhem_run": {
        name: "Me",
        text: "(I sprint toward the rooftop door without looking back!!)",
        next: "day5_mayhem_run_2"
    },
    "day5_mayhem_run_2": {
        name: "Seoyeon",
        text: "\"Wait, {player_name}!! Where are you going?!\"",
        next: "day5_mayhem_run_3"
    },
    "day5_mayhem_run_3": {
        name: "Yuna",
        text: "\"...Running makes it even worse, you know.\"",
        next: "day5_mayhem_run_4"
    },
    "day5_mayhem_run_4": {
        name: "Dain",
        text: "\"Hey wait!! I won first place in the dash!! You can't escape!!\"",
        next: "day5_mayhem_run_5"
    },
    "day5_mayhem_run_5": {
        name: "Me",
        text: "(Three people chase me down the stairs. Why is everyone so fast?!)",
        next: "day5_mayhem_final"
    },

    // --- 진심 고백 루트 (하렘) ---
    "day5_mayhem_confess": {
        name: "Me",
        text: "\"...I'm not joking. I sincerely like every single one of you here.\"",
        sunset: true,
        next: "day5_mayhem_confess_2"
    },
    "day5_mayhem_confess_2": {
        name: "Me",
        text: "\"It's not that I can't choose— I don't want to choose. If I pick one, I lose the others.\"",
        sunset: true,
        next: "day5_mayhem_confess_3"
    },
    "day5_mayhem_confess_3": {
        name: "System",
        text: "(A long silence follows.)",
        next: "day5_mayhem_confess_seoyeon"
    },
    "day5_mayhem_confess_seoyeon": {
        name: "Seoyeon",
        text: "\"...Hah. You've really got nerve. You know you'd normally get slapped for saying that, right?\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day5_mayhem_confess_yuna"
    },
    "day5_mayhem_confess_yuna": {
        name: "Yuna",
        text: "\"...The worst. But... I'll admit you're honest.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day5_mayhem_confess_dain"
    },
    "day5_mayhem_confess_dain": {
        name: "Dain",
        text: "\"Hey!! That doesn't even make sense!! ...But why don't I hate it?!\"",
        character: "assets/images/characters/dain_normal.png",
        next: "day5_mayhem_confess_silence"
    },
    "day5_mayhem_confess_silence": {
        name: "Me",
        text: "(The three of them exchange glances. A strange silence hangs in the air.)",
        sunset: true,
        next: "day5_mayhem_confess_seoyeon_2"
    },
    "day5_mayhem_confess_seoyeon_2": {
        name: "Seoyeon",
        text: "\"...I have one condition. You have to treat me the best.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day5_mayhem_confess_yuna_2"
    },
    "day5_mayhem_confess_yuna_2": {
        name: "Yuna",
        text: "\"...Treat me the best.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day5_mayhem_confess_dain_2"
    },
    "day5_mayhem_confess_dain_2": {
        name: "Dain",
        text: "\"Treat!! Me!! The best!!\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day5_mayhem_confess_react"
    },
    "day5_mayhem_confess_react": {
        name: "Me",
        text: "(...All three of them glare at me at once. Their eyes are terrifying.)",
        sunset: true,
        next: "day5_mayhem_confess_final"
    },
    "day5_mayhem_confess_final": {
        name: "Me",
        text: "(...This might be the beginning of hell. But in this moment— I'm the happiest man in the world.)",
        sunset: true,
        fade: true,
        setFlag: "ending_harem",
        next: "day5_ending_harem"
    },

    // --- 수라장 엔딩 마무리 ---
    "day5_mayhem_final": {
        name: "Me",
        text: "(The sunset fades. Is this how a peaceful Sunday afternoon ends...?)",
        sunset: true,
        character: null,
        next: "day5_mayhem_final_2"
    },
    "day5_mayhem_final_2": {
        name: "Me",
        text: "(...But why don't I feel so bad? This chaotic everyday life... is kind of its own happiness.)",
        sunset: true,
        fade: true,
        next: "day5_ending_mayhem"
    },


    // █████████████████████████████████████████████████████████████████████████
    //  엔딩 4: 우정 엔딩 (Friend Ending)
    //  조건: Day4 고백 보류 + Day5에서도 고백 안 함
    // █████████████████████████████████████████████████████████████████████████

    "day5_friend_start": {
        name: "Me",
        text: "(The sunset paints the rooftop. I look at the face of the person beside me.)",
        sunset: true,
        next: "day5_friend_choice"
    },
    "day5_friend_choice": {
        name: "Me",
        text: "(This is my last chance to tell them how I feel... What should I do?)",
        choices: [
            {
                text: "\"I need to tell you something...\" (Confess)",
                next: "day5_friend_confess",
                setFlag: "day5_confessed"
            },
            {
                text: "\"...I'm glad we're good friends.\" (Stay friends)",
                next: "day5_friend_stay"
            }
        ]
    },

    // --- 고백 → 굿 엔딩으로 합류 ---
    "day5_friend_confess": {
        name: "Me",
        text: "\"The truth is... I like you. I've been trying to say it since yesterday, and I finally found the courage.\"",
        sunset: true,
        next: "day5_friend_confess_response"
    },
    "day5_friend_confess_response": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_late_accept_seoyeon", character: "Seoyeon" },
            { next: "day5_late_accept_yuna", character: "Yuna" },
            { next: "day5_late_accept_dain", character: "Dain" },
            { next: "day5_late_accept_nurse", character: "Nurse" },
            { next: "day5_late_accept_teacher", character: "Teacher" }
        ]
    },
    "day5_late_accept_seoyeon": {
        name: "Seoyeon",
        text: "\"...Dummy. I've been waiting this whole time. I... like you too.\"",
        character: "assets/images/characters/seyoun_shy.png",
        sunset: true,
        stats: { Seoyeon: { affinity: 15 } },
        setFlag: "ending_good",
        next: "day5_good_final"
    },
    "day5_late_accept_yuna": {
        name: "Yuna",
        text: "\"...You're late. Really late. ...But it's okay. I feel the same way.\"",
        character: "assets/images/characters/yuna_shy.png",
        sunset: true,
        stats: { Yuna: { affinity: 15 } },
        setFlag: "ending_good",
        next: "day5_good_final"
    },
    "day5_late_accept_dain": {
        name: "Dain",
        text: "\"...!! Finally!! Do you know how long I've been waiting since yesterday?! I like you too, dummy!!\"",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        stats: { Dain: { affinity: 15 } },
        setFlag: "ending_good",
        next: "day5_good_final"
    },
    "day5_late_accept_nurse": {
        name: "School Nurse",
        text: "\"...You're finally saying it? Me too... I've felt the same way. For a long time.\"",
        character: "assets/images/characters/nurse_shy.png",
        sunset: true,
        stats: { Nurse: { affinity: 15 } },
        setFlag: "ending_good",
        next: "day5_good_final"
    },
    "day5_late_accept_teacher": {
        name: "Homeroom Teacher",
        text: "\"...Geez, seriously. Why didn't you say so yesterday. I was up all night thinking about it. ...I like you too, dummy.\"",
        character: "assets/images/characters/teacher_shy.png",
        sunset: true,
        stats: { Teacher: { affinity: 15 } },
        setFlag: "ending_good",
        next: "day5_good_final"
    },

    // --- 친구로 남는다 ---
    "day5_friend_stay": {
        name: "Me",
        text: "\"...I'm really glad I met someone like you at this school.\"",
        sunset: true,
        setFlag: "ending_friend",
        next: "day5_friend_response"
    },
    "day5_friend_response": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day5_friend_seoyeon", character: "Seoyeon" },
            { next: "day5_friend_yuna", character: "Yuna" },
            { next: "day5_friend_dain", character: "Dain" },
            { next: "day5_friend_nurse", character: "Nurse" },
            { next: "day5_friend_teacher", character: "Teacher" }
        ]
    },
    "day5_friend_seoyeon": {
        name: "Seoyeon",
        text: "\"...Yeah, me too! Let's stay good friends. ...Friends.\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "day5_friend_bitter"
    },
    "day5_friend_yuna": {
        name: "Yuna",
        text: "\"...Right. Friends. ...Thanks.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "day5_friend_bitter"
    },
    "day5_friend_dain": {
        name: "Dain",
        text: "\"...Yeah! You're the best friend ever! ...The best... friend.\"",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "day5_friend_bitter"
    },
    "day5_friend_nurse": {
        name: "School Nurse",
        text: "\"...Right. You're a good student. ...A good student.\"",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "day5_friend_bitter"
    },
    "day5_friend_teacher": {
        name: "Homeroom Teacher",
        text: "\"...Yeah, well. Teacher and student, so of course it's natural. ...Of course.\"",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        next: "day5_friend_bitter"
    },
    "day5_friend_bitter": {
        name: "Me",
        text: "(...Somehow, their smile looked a little sad. A corner of my heart ached too.)",
        sunset: true,
        character: null,
        next: "day5_friend_final"
    },
    "day5_friend_final": {
        name: "Me",
        text: "(Was this the right choice? ...I don't know. But this too is an ending.)",
        sunset: true,
        fade: true,
        next: "day5_ending_friend"
    },


    // █████████████████████████████████████████████████████████████████████████
    //  엔딩 5: 솔로 엔딩 (Alone Ending)
    //  조건: 아무와도 데이트/약속 없음
    // █████████████████████████████████████████████████████████████████████████

    "day5_alone_start": {
        name: "Me",
        text: "(I watch the sunset alone on the rooftop. Memories of my time at this school flash by.)",
        sunset: true,
        setFlag: "ending_alone",
        next: "day5_alone_2"
    },
    "day5_alone_2": {
        name: "Me",
        text: "(Seoyeon, Yuna, Dain, the teachers... There were so many wonderful people.)",
        next: "day5_alone_3"
    },
    "day5_alone_3": {
        name: "Me",
        text: "(Should I have told one of them how I felt? ...Probably.)",
        next: "day5_alone_4"
    },
    "day5_alone_4": {
        name: "Me",
        text: "(But I don't regret it. The time I spent here is precious in itself.)",
        next: "day5_alone_5"
    },
    "day5_alone_5": {
        name: "Me",
        text: "(I'm alone, but I'm not lonely. I've definitely changed from who I was before I transferred.)",
        next: "day5_alone_6"
    },
    "day5_alone_6": {
        name: "Me",
        text: "(Tomorrow is a fresh start. This time... I'll be a little braver.)",
        sunset: true,
        fade: true,
        next: "day5_ending_alone"
    }
});
