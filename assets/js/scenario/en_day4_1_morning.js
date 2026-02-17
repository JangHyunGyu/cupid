/**
 * ============================================================================
 * CUPID - Day 4 Morning Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day4_1_morning.js
 * 언어: 영어 (English)
 * 일차: Day 4 (4일차 - 토요일)
 * 시간대: Morning (아침)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 토요일 아침, 드디어 데이트 당일이 밝았다.
 * 주인공은 설레는 마음으로 준비하고, 약속 장소로 향한다.
 * 최고 호감도 히로인에 따라 만남이 달라진다.
 * 약속이 없는 경우, 혼자 나갔다가 우연히 히로인과 마주친다.
 * 
 *  주요 이벤트
 * ----------------------------------------------------------------------------
 * 1. 토요일 아침 기상 - 어젯밤 꿈, 설렘과 긴장
 * 2. 날씨 확인 - 화창한 토요일 아침 분위기
 * 3. 아침 식사와 준비 - 식사 선택, 세면, 긴장감
 * 4. 데이트 준비 - 옷차림 선택, 거울 확인
 * 5. 히로인 메시지 - 캐릭터별 다중 메시지 교환
 * 6. 출발 - 지갑, 핸드폰, 마지막 점검
 * 7. (약속 없음) 솔로 루트 - 우연한 만남, 호감도 빌드 기회
 * 
 *  조건 플래그 (Condition Flags)
 * ----------------------------------------------------------------------------
 * day3_seoyeon_date_confirmed : 서연과 데이트 약속
 * day3_yuna_date_confirmed    : 유나와 데이트 약속
 * day3_dain_date_confirmed    : 다인과 데이트 약속
 * day3_nurse_date_confirmed   : 보건선생님과 데이트 약속
 * day3_teacher_date_confirmed : 담임선생님과 데이트 약속
 * day3_has_multiple_dates     : 복수 약속 존재
 * day3_loyalty_bonus          : 단일 약속 보너스
 * 
 *  설정 플래그 (Set Flags)
 * ----------------------------------------------------------------------------
 * day4_outfit_casual     : 캐주얼 옷차림 선택
 * day4_outfit_stylish    : 스타일리시 옷차림 선택
 * day4_date_target_set   : 데이트 대상 확정
 * 
 *  호감도 변화 (Stats Changes)
 * ----------------------------------------------------------------------------
 * 옷차림 선택에 따라 해당 히로인 +3
 * 캐릭터별 메시지 교환: 해당 히로인 +3
 * 우연한 만남 대화: 해당 히로인 +5
 * 
 *  노드 수: 약 83개
 * 
 *  진입/퇴장
 * ----------------------------------------------------------------------------
 * Entry: day4_start
 * Exit (date):    day4_morning_depart → next: "day4_arrive"
 * Exit (no-date): day4_no_date_evening → next: "day4_night_start"
 * 
 * ============================================================================
 */

// SCENARIO 전역 객체 초기화
if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}

// Day 4 시나리오 그룹 초기화
if (!SCENARIO[4]) {
    SCENARIO[4] = {};
}

/**
 * [Day 4 - Morning] 씬 데이터 정의
 */
Object.assign(SCENARIO[4], {

    // =========================================================================
    // 1. 토요일 아침 기상 (7 노드)
    // =========================================================================

    "day4_start": {
        name: "Me",
        text: "(...I open my eyes. It's Saturday morning. My heart is already racing.)",
        background: "assets/images/background/room_my.png",
        character: null,
        bgm: "morning.mp3",
        fade: true,
        next: "day4_morning_dream"
    },

    "day4_morning_dream": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(Last night, I had a strange dream. Everything that happened at school flashed by like a panorama.)",
        next: "day4_morning_wake"
    },

    "day4_morning_wake": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(Today is... finally the day. I could barely sleep last night.)",
        next: "day4_morning_calendar"
    },

    "day4_morning_calendar": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(I check the calendar on my phone. 'Saturday' — the red letters stand out more than usual.)",
        next: "day4_morning_excitement"
    },

    "day4_morning_excitement": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(It's only been four days since I transferred here. I never expected such an exciting weekend. My heart is pounding.)",
        next: "day4_morning_stretch"
    },

    "day4_morning_stretch": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(I stretch wide and kick off the blankets. Today, I'm going to live without any regrets.)",
        next: "day4_morning_mirror"
    },

    "day4_morning_mirror": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(Standing in front of the mirror, I see my nervous face. I wish I could look a little cooler...)",
        next: "day4_morning_window"
    },

    // =========================================================================
    // 2. 날씨와 분위기 (3 노드)
    // =========================================================================

    "day4_morning_window": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(I pull back the curtains and bright sunlight pours in. It's so bright outside.)",
        next: "day4_morning_weather"
    },

    "day4_morning_weather": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(The sky is endlessly clear. Cherry blossom petals drift in the breeze, and birds are singing. A perfect Saturday morning.)",
        next: "day4_morning_weather2"
    },

    "day4_morning_weather2": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(Through the window, I can see the neighborhood streets. People out for walks, couples heading into cafés... I'll be out there too, soon.)",
        next: "day4_morning_kitchen"
    },

    // =========================================================================
    // 3. 아침 식사와 준비 (7 노드)
    // =========================================================================

    "day4_morning_kitchen": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(I head to the kitchen. Let me check what's in the fridge.)",
        next: "day4_morning_breakfast_choice"
    },

    "day4_morning_breakfast_choice": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(I have plenty of time, but... what should I do about breakfast?)",
        choices: [
            {
                text: "At least grab some toast before heading out",
                next: "day4_morning_breakfast_eat"
            },
            {
                text: "Too excited to eat — skip it",
                next: "day4_morning_breakfast_skip"
            }
        ]
    },

    "day4_morning_breakfast_eat": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(I spread jam on a slice of toast and take a bite. The crispy texture shakes off the drowsiness. Nothing beats a good breakfast.)",
        next: "day4_morning_breakfast_done"
    },

    "day4_morning_breakfast_skip": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(I'm hungry, but I'm too nervous to taste anything anyway. I'll grab something on the way.)",
        next: "day4_morning_breakfast_done"
    },

    "day4_morning_breakfast_done": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(Alright, time to wash up and get ready. I've got plenty of time.)",
        next: "day4_morning_groom"
    },

    "day4_morning_groom": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(I wash my face and fix my hair. I styled it more carefully than usual. Maybe... just a little cologne too.)",
        next: "day4_morning_nervous"
    },

    "day4_morning_nervous": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(I check my reflection in the mirror one more time. Not bad. ...But why am I shaking so much?)",
        next: "day4_morning_closet"
    },

    // =========================================================================
    // 4. 옷차림 선택 (7 노드)
    // =========================================================================

    "day4_morning_closet": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(I open the closet. Besides my school uniform, I don't have that many options. What should I wear?)",
        next: "day4_morning_outfit"
    },

    "day4_morning_outfit": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(What should I go with? First impressions matter, so I need to choose carefully.)",
        choices: [
            {
                text: "Clean casual (white shirt + jeans)",
                next: "day4_outfit_casual",
                setFlag: "day4_outfit_casual"
            },
            {
                text: "Sleek style (jacket + slacks)",
                next: "day4_outfit_stylish",
                setFlag: "day4_outfit_stylish"
            }
        ]
    },

    "day4_outfit_casual": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(Comfort is king. Dressing naturally is my style.)",
        next: "day4_casual_mirror"
    },

    "day4_casual_mirror": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(I do a spin in front of the mirror. White shirt and jeans... clean and effortless. Looks good.)",
        next: "day4_morning_outfit_done"
    },

    "day4_outfit_stylish": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(Today is special, after all. This should be fine, right?)",
        next: "day4_stylish_mirror"
    },

    "day4_stylish_mirror": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(The jacket fits just right, and the slacks make my legs look longer. I look different from usual, which feels a bit unfamiliar... but not bad.)",
        stats: { Seoyeon: { affinity: 1 }, Yuna: { affinity: 1 }, Dain: { affinity: 1 }, Teacher: { affinity: 1 }, Nurse: { affinity: 1 } },
        next: "day4_morning_outfit_done"
    },

    "day4_morning_outfit_done": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(Good, outfit decided. Now I just need to check my phone and head out.)",
        next: "day4_morning_phone"
    },

    // =========================================================================
    // 5. 히로인 메시지 확인 + 분기 (2 노드)
    // =========================================================================

    "day4_morning_phone": {
        name: "Me",
        background: "assets/images/background/room_my.png",
        text: "(I check my phone. There's a message waiting.)",
        next: "day4_morning_message_branch"
    },

    "day4_morning_message_branch": {
        name: "System",
        background: "assets/images/background/room_my.png",
        text: "",
        branches: [
            // 약속이 하나라도 있으면 → 최고 호감도 히로인 데이트
            { next: "day4_morning_date_route", condition: "day3_seoyeon_date_confirmed" },
            { next: "day4_morning_date_route", condition: "day3_yuna_date_confirmed" },
            { next: "day4_morning_date_route", condition: "day3_dain_date_confirmed" },
            { next: "day4_morning_date_route", condition: "day3_nurse_date_confirmed" },
            { next: "day4_morning_date_route", condition: "day3_teacher_date_confirmed" },
            // 약속 없음 → 솔로 루트
            { next: "day4_no_date_start" }
        ]
    },

    // =========================================================================
    // 6A. 데이트 루트 - 호감도 분기 + 캐릭터별 메시지 교환 (26 노드)
    // =========================================================================

    "day4_morning_date_route": {
        name: "System",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_msg_seoyeon", character: "Seoyeon", condition: "day3_seoyeon_date_confirmed" },
            { next: "day4_msg_yuna", character: "Yuna", condition: "day3_yuna_date_confirmed" },
            { next: "day4_msg_dain", character: "Dain", condition: "day3_dain_date_confirmed" },
            { next: "day4_msg_nurse", character: "Nurse", condition: "day3_nurse_date_confirmed" },
            { next: "day4_msg_teacher", character: "Teacher", condition: "day3_teacher_date_confirmed" }
        ]
    },

    // --- 서연 메시지 ---
    "day4_msg_seoyeon": {
        name: "Seoyeon",
        text: "\"You didn't forget about today, right? 😊 Meet me at the park fountain at 10! I can't wait~\"",
        character: "assets/images/characters/seyoun_laugh.png",
        silhouette: true,
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_seoyeon"
    },
    "day4_morning_reply_seoyeon": {
        name: "Me",
        character: "assets/images/characters/seyoun_laugh.png",
        silhouette: true,
        text: "(A message from Seoyeon. That smiley emoji is cute. What should I reply...)",
        next: "day4_msg_seoyeon_2"
    },
    "day4_msg_seoyeon_2": {
        name: "Seoyeon",
        text: "\"Oh, and the weather's so nice today! Perfect for a walk~ Don't forget sunscreen!\"",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        stats: { Seoyeon: { affinity: 3 } },
        next: "day4_reply_seoyeon_2"
    },
    "day4_reply_seoyeon_2": {
        name: "Me",
        character: "assets/images/characters/seyoun_normal.png",
        silhouette: true,
        text: "(She keeps sending messages back to back. She must be excited too. I should hurry up and get ready.)",
        next: "day4_seoyeon_ready"
    },
    "day4_seoyeon_ready": {
        name: "Seoyeon",
        text: "\"See you soon~!! 😆\"",
        character: "assets/images/characters/seyoun_laugh.png",
        next: "day4_morning_lastcheck"
    },

    // --- 유나 메시지 ---
    "day4_msg_yuna": {
        name: "Yuna",
        text: "\"...10 o'clock. Café by the station. Don't be late.\"",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_yuna"
    },
    "day4_morning_reply_yuna": {
        name: "Me",
        character: "assets/images/characters/yuna_normal.png",
        silhouette: true,
        text: "(Short and to the point — so typical of Yuna. But that's part of her charm. I type back, 'Got it, I won't be late!')",
        next: "day4_msg_yuna_2"
    },
    "day4_msg_yuna_2": {
        name: "Yuna",
        text: "\"...It's nothing special. I just wanted some coffee. ...It's just weird going alone.\"",
        character: "assets/images/characters/yuna_shy.png",
        silhouette: true,
        stats: { Yuna: { affinity: 3 } },
        next: "day4_reply_yuna_2"
    },
    "day4_reply_yuna_2": {
        name: "Me",
        character: "assets/images/characters/yuna_shy.png",
        silhouette: true,
        text: "(...That's Yuna-speak for 'I want to go together,' right? A smile spreads across my face.)",
        next: "day4_yuna_ready"
    },
    "day4_yuna_ready": {
        name: "Yuna",
        text: "\"...Hurry up.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "day4_morning_lastcheck"
    },

    // --- 다인 메시지 ---
    "day4_msg_dain": {
        name: "Dain",
        text: "\"HEY!! Let's meet up after practice today!! In front of the gym at 11!! Don't be late!!!! 🏐\"",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_dain"
    },
    "day4_morning_reply_dain": {
        name: "Me",
        character: "assets/images/characters/dain_laugh.png",
        silhouette: true,
        text: "(So many exclamation marks... Dain's energy comes through even in her texts. Better send a reply.)",
        next: "day4_msg_dain_2"
    },
    "day4_msg_dain_2": {
        name: "Dain",
        text: "\"Oh right!! I'm gonna be STARVING after practice!! Find us a good restaurant!! I want meat!!!\"",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        stats: { Dain: { affinity: 3 } },
        next: "day4_reply_dain_2"
    },
    "day4_reply_dain_2": {
        name: "Me",
        character: "assets/images/characters/dain_normal.png",
        silhouette: true,
        text: "(She's even making me look up restaurants... Then again, eating with Dain doesn't sound bad. No — I'm actually looking forward to it.)",
        next: "day4_dain_ready"
    },
    "day4_dain_ready": {
        name: "Dain",
        text: "\"See you later!! Get excited!!! 💪\"",
        character: "assets/images/characters/dain_laugh.png",
        next: "day4_morning_lastcheck"
    },

    // --- 보건선생님 메시지 ---
    "day4_msg_nurse": {
        name: "School Nurse",
        text: "\"If you're free today... how about the art museum downtown? There's an exhibition I'd like to see. Let's meet in front of the museum at 11.\"",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_nurse"
    },
    "day4_morning_reply_nurse": {
        name: "Me",
        character: "assets/images/characters/nurse_normal.png",
        silhouette: true,
        text: "(The art museum with the school nurse... My heart is fluttering. I replied, 'Yes, I'll definitely be there!')",
        next: "day4_msg_nurse_2"
    },
    "day4_msg_nurse_2": {
        name: "School Nurse",
        text: "\"I'll be looking forward to it. Oh, and... don't call me 'ma'am' today. Let's just meet casually.\"",
        character: "assets/images/characters/nurse_shy.png",
        silhouette: true,
        stats: { Nurse: { affinity: 3 } },
        next: "day4_reply_nurse_2"
    },
    "day4_reply_nurse_2": {
        name: "Me",
        character: "assets/images/characters/nurse_shy.png",
        silhouette: true,
        text: "(Don't call her 'ma'am'...? I thought my heart was going to stop. Today is going to be a truly special day.)",
        next: "day4_nurse_ready"
    },
    "day4_nurse_ready": {
        name: "School Nurse",
        text: "\"See you later then 😊\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "day4_morning_lastcheck"
    },

    // --- 담임선생님 메시지 ---
    "day4_msg_teacher": {
        name: "Homeroom Teacher",
        text: "\"Want to meet at the café near school around lunch? There's something I'd like to talk about. Let's meet at 12.\"",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        setFlag: "day4_date_target_set",
        next: "day4_morning_reply_teacher"
    },
    "day4_morning_reply_teacher": {
        name: "Me",
        character: "assets/images/characters/teacher_normal.png",
        silhouette: true,
        text: "(Meeting the homeroom teacher outside of school... I'm nervous. I sent a reply right away.)",
        next: "day4_msg_teacher_2"
    },
    "day4_msg_teacher_2": {
        name: "Homeroom Teacher",
        text: "\"I'll be in casual clothes, so don't be surprised if you don't recognize me. ...Just kidding. You probably will.\"",
        character: "assets/images/characters/teacher_smile.png",
        silhouette: true,
        stats: { Teacher: { affinity: 3 } },
        next: "day4_reply_teacher_2"
    },
    "day4_reply_teacher_2": {
        name: "Me",
        character: "assets/images/characters/teacher_smile.png",
        silhouette: true,
        text: "(The homeroom teacher cracking jokes? That's a side I've never seen before — it feels refreshing. I wonder what she looks like in casual clothes.)",
        next: "day4_teacher_ready"
    },
    "day4_teacher_ready": {
        name: "Homeroom Teacher",
        text: "\"Don't be late. I hate waiting.\"",
        character: "assets/images/characters/teacher_normal.png",
        next: "day4_morning_lastcheck"
    },

    // =========================================================================
    // 7. 출발 준비 (5 노드)
    // =========================================================================

    "day4_morning_lastcheck": {
        name: "Me",
        character: null,
        text: "(One last look in the mirror. ...I look fine. No — I actually look pretty good. Let's be confident.)",
        next: "day4_morning_wallet"
    },

    "day4_morning_wallet": {
        name: "Me",
        character: null,
        text: "(Wallet, phone, keys. I put each one in my pockets. Better bring a handkerchief too, just in case.)",
        next: "day4_morning_lock"
    },

    "day4_morning_lock": {
        name: "Me",
        character: null,
        text: "(I step out the front door and lock it behind me. Click — like the sound of a brand new day beginning.)",
        next: "day4_morning_outside"
    },

    "day4_morning_outside": {
        name: "Me",
        character: null,
        text: "(A warm breeze greets me outside. The scent of cherry blossoms brushes past. The streets are full of life.)",
        background: "assets/images/background/street.png",
        next: "day4_morning_depart"
    },

    "day4_morning_depart": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: null,
        text: "(Alright, all set. Let's go!)",
        fade: true,
        next: "day4_arrive"
    },

    // =========================================================================
    // 6B. 약속 없음 - 혼자 보내는 토요일 + 우연한 만남 (26 노드)
    // =========================================================================

    "day4_no_date_start": {
        name: "Me",
        text: "(...I check my phone, but there are no messages.)",
        next: "day4_no_date_2"
    },

    "day4_no_date_2": {
        name: "Me",
        text: "(It's the weekend and I have no plans. It's already been four days since I transferred... What have I been doing?)",
        next: "day4_no_date_3"
    },

    "day4_no_date_3": {
        name: "Me",
        text: "(Still, I can't just stay home on a beautiful day like this. Maybe I should go out somewhere.)",
        choices: [
            {
                text: "Grab snacks from the convenience store and head to the park",
                next: "day4_no_date_park"
            },
            {
                text: "Just laze around at home",
                next: "day4_no_date_home"
            },
            {
                text: "Kill time at a local café",
                next: "day4_no_date_cafe"
            }
        ]
    },

    // --- 공원 루트 ---
    "day4_no_date_park": {
        name: "Me",
        text: "(I buy a rice ball and a drink from the convenience store and head to the park. I sit on a bench, eating alone.)",
        background: "assets/images/background/park.png",
        next: "day4_no_date_park_weather"
    },

    "day4_no_date_park_weather": {
        name: "Me",
        background: "assets/images/background/park.png",
        text: "(Cherry blossom petals blown by the wind land on my shoulder. It's a beautiful scene... but sitting here alone, it feels a little lonely.)",
        next: "day4_no_date_lonely"
    },

    // --- 집 루트 ---
    "day4_no_date_home": {
        name: "Me",
        text: "(I lie in bed staring at the ceiling. Is this really how I should be spending my day?)",
        next: "day4_no_date_home_bored"
    },

    "day4_no_date_home_bored": {
        name: "Me",
        text: "(I open social media and it's filled with weekend photos from classmates. Everyone looks so happy... Am I the only one like this?)",
        next: "day4_no_date_lonely"
    },

    // --- 카페 루트 ---
    "day4_no_date_cafe": {
        name: "Me",
        text: "(I walk into a local café and order an Americano. I sit by the window and gaze outside.)",
        background: "assets/images/background/cafe.png",
        next: "day4_no_date_cafe_sit"
    },

    "day4_no_date_cafe_sit": {
        name: "Me",
        background: "assets/images/background/cafe.png",
        text: "(I watch couples passing by on the street, sipping my coffee. The bitterness feels particularly strong today.)",
        next: "day4_no_date_lonely"
    },

    // --- 합류 지점: 외로움 → 밖으로 나감 ---
    "day4_no_date_lonely": {
        name: "Me",
        background: "assets/images/background/park.png",
        text: "(...Spending Saturday all alone like this. But I can't just sit still. Let me take a walk.)",
        next: "day4_no_date_wander"
    },

    "day4_no_date_wander": {
        name: "Me",
        text: "(Walking aimlessly through the neighborhood, I end up in front of the convenience store near the park. That's when I notice a familiar figure from behind.)",
        background: "assets/images/background/street.png",
        next: "day4_no_date_encounter"
    },

    // --- 우연한 만남 - 호감도 분기 ---
    "day4_no_date_encounter": {
        name: "System",
        background: "assets/images/background/street.png",
        text: "",
        selectByHighestAffinity: true,
        branches: [
            { next: "day4_no_date_meet_seoyeon", character: "Seoyeon" },
            { next: "day4_no_date_meet_yuna", character: "Yuna" },
            { next: "day4_no_date_meet_dain", character: "Dain" },
            { next: "day4_no_date_meet_nurse", character: "Nurse" },
            { next: "day4_no_date_meet_teacher", character: "Teacher" }
        ]
    },

    // --- 서연 우연 만남 ---
    "day4_no_date_meet_seoyeon": {
        name: "Seoyeon",
        text: "\"Huh? What are you doing here? I just came out for a walk! Wanna join me?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "day4_no_date_chat_seoyeon"
    },
    "day4_no_date_chat_seoyeon": {
        name: "Me",
        text: "(Seoyeon walks up with a bright smile. I was feeling so lonely being alone, and now I run into her. Must be fate.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "day4_no_date_after_encounter"
    },

    // --- 유나 우연 만남 ---
    "day4_no_date_meet_yuna": {
        name: "Yuna",
        text: "\"...Oh. You're alone too? ...Same here.\"",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: 5 } },
        next: "day4_no_date_chat_yuna"
    },
    "day4_no_date_chat_yuna": {
        name: "Me",
        text: "(Yuna pulls out one earbud and looks up at me. Her quiet gaze feels strangely warm.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "day4_no_date_after_encounter"
    },

    // --- 다인 우연 만남 ---
    "day4_no_date_meet_dain": {
        name: "Dain",
        text: "\"Whoa?! Running into you here!! I came to grab a drink after practice!! Wanna hang out?!\"",
        character: "assets/images/characters/dain_laugh.png",
        stats: { Dain: { affinity: 5 } },
        next: "day4_no_date_chat_dain"
    },
    "day4_no_date_chat_dain": {
        name: "Me",
        text: "(Dain walks up energetically in her workout clothes. I'm glad for this lively encounter.)",
        character: "assets/images/characters/dain_normal.png",
        next: "day4_no_date_after_encounter"
    },

    // --- 보건선생님 우연 만남 ---
    "day4_no_date_meet_nurse": {
        name: "School Nurse",
        text: "\"Oh my, fancy meeting you here. I just stepped out for a walk too. Want to walk together?\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 5 } },
        next: "day4_no_date_chat_nurse"
    },
    "day4_no_date_chat_nurse": {
        name: "Me",
        text: "(I almost didn't recognize her in casual clothes. She looks so different outside of school. My heart starts racing.)",
        character: "assets/images/characters/nurse_shy.png",
        next: "day4_no_date_after_encounter"
    },

    // --- 담임선생님 우연 만남 ---
    "day4_no_date_meet_teacher": {
        name: "Homeroom Teacher",
        text: "\"...What are you doing here? Heh, teachers get weekends too, you know. Well, want to grab a coffee or something?\"",
        character: "assets/images/characters/teacher_normal.png",
        stats: { Teacher: { affinity: 5 } },
        next: "day4_no_date_chat_teacher"
    },
    "day4_no_date_chat_teacher": {
        name: "Me",
        text: "(The homeroom teacher says it with a straight face, but she's the one who started the conversation. I even caught the slight curve of a smile on her lips.)",
        character: "assets/images/characters/teacher_smile.png",
        next: "day4_no_date_after_encounter"
    },

    // --- 만남 이후 공통 루트 ---
    "day4_no_date_after_encounter": {
        name: "Me",
        character: null,
        text: "(We walked together for a while, chatting about this and that. I never imagined my weekend would turn out like this.)",
        next: "day4_no_date_reflect"
    },

    "day4_no_date_reflect": {
        name: "Me",
        character: null,
        text: "(It started as a day with no plans... but just this one chance encounter made today feel special.)",
        next: "day4_no_date_sunset"
    },

    "day4_no_date_sunset": {
        name: "Me",
        character: null,
        text: "(Before I know it, the sunset is starting to spread. The sky turns orange. It wasn't a bad day after all.)",
        background: "assets/images/background/street.png",
        next: "day4_no_date_evening"
    },

    "day4_no_date_evening": {
        name: "Me",
        background: "assets/images/background/street.png",
        character: null,
        text: "(On the way home. Thinking back on today, a smile naturally forms on my face. I'm already looking forward to Monday.)",
        fade: true,
        next: "day4_night_start"
    }
});
