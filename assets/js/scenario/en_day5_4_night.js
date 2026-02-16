/**
 * ============================================================================
 * CUPID - Day 5 Night Scenario (English Version)
 * ============================================================================
 * 
 *  파일 정보
 * ----------------------------------------------------------------------------
 * 파일명: en_day5_4_night.js
 * 언어: 영어 (English)
 * 일차: Day 5 (5일차 - 일요일)
 * 시간대: Night (밤 - 엔딩 & 크레딧)
 * 
 *  시나리오 개요
 * ----------------------------------------------------------------------------
 * 이야기의 마지막. 엔딩 타입별 나레이션 후 화면이 어두워지며
 * 엔딩 크레딧이 올라간다.
 * 
 *  엔딩별 나레이션
 * ----------------------------------------------------------------------------
 * 1. 트루 엔딩  : 진정한 사랑을 찾은 이야기
 * 2. 굿 엔딩   : 우여곡절 끝에 이룬 사랑
 * 3. 수라장 엔딩 : 소란스럽지만 즐거운 일상
 * 4. 하렘 엔딩  : 모두와 사귀는 황홀한 날들
 * 5. 우정 엔딩  : 전하지 못한 마음, 쓸쓸한 우정
 * 6. 솔로 엔딩  : 혼자지만 성장한 나
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

    // █████████████████████████████████████████████████████████████████████████
    //  트루 엔딩 나레이션
    // █████████████████████████████████████████████████████████████████████████
    "day5_ending_true": {
        name: "Me",
        text: "(And so, my transfer story comes to a close.)",
        background: null,
        character: null,
        night: true,
        bgm: null,
        fade: true,
        next: "day5_ending_true_2"
    },
    "day5_ending_true_2": {
        name: "Me",
        text: "(One person I met at a new school.)",
        night: true,
        fade: true,
        bgm: "ending.mp3",
        next: "day5_ending_true_3"
    },
    "day5_ending_true_3": {
        name: "Me",
        text: "(From the moment we first met to this very moment— my heart never wavered. Not once.)",
        night: true,
        fade: true,
        next: "day5_ending_true_4"
    },
    "day5_ending_true_4": {
        name: "Me",
        text: "(Like the warmth still lingering on my lips, this feeling will never fade.)",
        night: true,
        fade: true,
        next: "day5_ending_true_5"
    },
    "day5_ending_true_5": {
        name: "Me",
        text: "(Some would say even feelings like these have an expiration date.)",
        night: true,
        fade: true,
        next: "day5_ending_true_6"
    },
    "day5_ending_true_6": {
        name: "Me",
        text: "(But I know. This doesn't cool down— it seeps in deeper.)",
        night: true,
        fade: true,
        next: "day5_ending_true_7"
    },
    "day5_ending_true_7": {
        name: "Me",
        text: "(To love someone completely— is to hold one certainty amidst all the uncertainties of the world.)",
        night: true,
        fade: true,
        next: "day5_ending_true_8"
    },
    "day5_ending_true_8": {
        name: "System",
        text: "─── TRUE LOVE END ───",
        night: true,
        fade: true,
        next: "day5_credits"
    },

    // █████████████████████████████████████████████████████████████████████████
    //  굿 엔딩 나레이션
    // █████████████████████████████████████████████████████████████████████████
    "day5_ending_good": {
        name: "Me",
        text: "(And so, my transfer story comes to a close.)",
        background: null,
        character: null,
        night: true,
        bgm: null,
        fade: true,
        next: "day5_ending_good_2"
    },
    "day5_ending_good_2": {
        name: "Me",
        text: "(My heart wavered, and I made mistakes.)",
        night: true,
        fade: true,
        bgm: "ending.mp3",
        next: "day5_ending_good_3"
    },
    "day5_ending_good_3": {
        name: "Me",
        text: "(But in the end— I found where my heart truly belongs.)",
        night: true,
        fade: true,
        next: "day5_ending_good_4"
    },
    "day5_ending_good_4": {
        name: "Me",
        text: "(It doesn't have to be perfect. This is our beginning.)",
        night: true,
        fade: true,
        next: "day5_ending_good_5"
    },
    "day5_ending_good_5": {
        name: "Me",
        text: "(I wasn't lost. It just took a little longer to arrive.)",
        night: true,
        fade: true,
        next: "day5_ending_good_6"
    },
    "day5_ending_good_6": {
        name: "Me",
        text: "(Without the hesitation, there would be no certainty now.)",
        night: true,
        fade: true,
        next: "day5_ending_good_7"
    },
    "day5_ending_good_7": {
        name: "Me",
        text: "(So it's okay. An answer that took this long won't change easily.)",
        night: true,
        fade: true,
        next: "day5_ending_good_8"
    },
    "day5_ending_good_8": {
        name: "System",
        text: "─── GOOD END ───",
        night: true,
        fade: true,
        next: "day5_credits"
    },

    // █████████████████████████████████████████████████████████████████████████
    //  수라장 엔딩 나레이션
    // █████████████████████████████████████████████████████████████████████████
    "day5_ending_mayhem": {
        name: "Me",
        text: "(And so, my transfer story... is it over?)",
        background: null,
        character: null,
        night: true,
        bgm: null,
        fade: true,
        next: "day5_ending_mayhem_2"
    },
    "day5_ending_mayhem_2": {
        name: "Me",
        text: "(The night sky was too beautiful to gaze at just one star.)",
        night: true,
        fade: true,
        bgm: "ending.mp3",
        next: "day5_ending_mayhem_3"
    },
    "day5_ending_mayhem_3": {
        name: "Me",
        text: "(...Not that excuses will stop me from being chased.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_4"
    },
    "day5_ending_mayhem_4": {
        name: "Me",
        text: "(This chaotic daily life... honestly, it's not bad. I wonder what mayhem tomorrow will bring.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_5"
    },
    "day5_ending_mayhem_5": {
        name: "Me",
        text: "(Maybe it's greedy. Wanting to cherish everyone.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_6"
    },
    "day5_ending_mayhem_6": {
        name: "Me",
        text: "(But the wind doesn't blow in just one direction, and the stars don't shine alone.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_7"
    },
    "day5_ending_mayhem_7": {
        name: "Me",
        text: "(There's no conclusion. But hey... this chaotic everyday life is my story.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_8"
    },
    "day5_ending_mayhem_8": {
        name: "System",
        text: "─── MAYHEM END ───",
        night: true,
        fade: true,
        next: "day5_credits"
    },

    // █████████████████████████████████████████████████████████████████████████
    //  하렘 엔딩 나레이션
    // █████████████████████████████████████████████████████████████████████████
    "day5_ending_harem": {
        name: "Me",
        text: "(And so, my transfer story— didn't end.)",
        background: null,
        character: null,
        night: true,
        bgm: null,
        fade: true,
        next: "day5_ending_harem_2"
    },
    "day5_ending_harem_2": {
        name: "Me",
        text: "(Three girlfriends. An absurd reality unfolded before me.)",
        night: true,
        fade: true,
        bgm: "ending.mp3",
        next: "day5_ending_harem_3"
    },
    "day5_ending_harem_3": {
        name: "Me",
        text: "(Every day is a battlefield. A daily war over who gets treated the best.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_4"
    },
    "day5_ending_harem_4": {
        name: "Me",
        text: "(But strangely... all three of them are smiling. And so am I.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_5"
    },
    "day5_ending_harem_5": {
        name: "Me",
        text: "(Call it greed if you want. As long as these feelings are genuine.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_6"
    },
    "day5_ending_harem_6": {
        name: "Me",
        text: "(No regrets. Reflection... I'll leave that to tomorrow's me.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_7"
    },
    "day5_ending_harem_7": {
        name: "Me",
        text: "(Tomorrow will be busy. The day after, even busier. But— I love these dazzling days.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_8"
    },
    "day5_ending_harem_8": {
        name: "System",
        text: "─── HAREM END ───",
        night: true,
        fade: true,
        next: "day5_credits"
    },

    // █████████████████████████████████████████████████████████████████████████
    //  우정 엔딩 나레이션
    // █████████████████████████████████████████████████████████████████████████
    "day5_ending_friend": {
        name: "Me",
        text: "(And so, my transfer story comes to a close.)",
        background: null,
        character: null,
        night: true,
        bgm: null,
        fade: true,
        next: "day5_ending_friend_2"
    },
    "day5_ending_friend_2": {
        name: "Me",
        text: "(I couldn't tell them how I felt. No— I chose not to.)",
        night: true,
        fade: true,
        bgm: "ending.mp3",
        next: "day5_ending_friend_3"
    },
    "day5_ending_friend_3": {
        name: "Me",
        text: "(The feelings hidden behind the word \"friend\" might surface on some nights.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_4"
    },
    "day5_ending_friend_4": {
        name: "Me",
        text: "(Still... I don't regret it. Someday, another chance to be brave will come.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_5"
    },
    "day5_ending_friend_5": {
        name: "Me",
        text: "(Unspoken feelings don't disappear. They just glow quietly, deep in the heart.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_6"
    },
    "day5_ending_friend_6": {
        name: "Me",
        text: "(Sometimes the closest distance is also the farthest. The distance called \"friend.\")",
        night: true,
        fade: true,
        next: "day5_ending_friend_7"
    },
    "day5_ending_friend_7": {
        name: "Me",
        text: "(Some stories linger longer because they never found an ending. This season will be remembered that way.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_8"
    },
    "day5_ending_friend_8": {
        name: "System",
        text: "─── FRIEND END ───",
        night: true,
        fade: true,
        next: "day5_credits"
    },

    // █████████████████████████████████████████████████████████████████████████
    //  솔로 엔딩 나레이션
    // █████████████████████████████████████████████████████████████████████████
    "day5_ending_alone": {
        name: "Me",
        text: "(And so, my transfer story comes to a close.)",
        background: null,
        character: null,
        night: true,
        bgm: null,
        fade: true,
        next: "day5_ending_alone_2"
    },
    "day5_ending_alone_2": {
        name: "Me",
        text: "(I didn't find anyone special. But the time I spent at this school was precious.)",
        night: true,
        fade: true,
        bgm: "ending.mp3",
        next: "day5_ending_alone_3"
    },
    "day5_ending_alone_3": {
        name: "Me",
        text: "(I've changed from who I was before I transferred— someone who couldn't do anything.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_4"
    },
    "day5_ending_alone_4": {
        name: "Me",
        text: "(Next time... I'll be a little braver. Another chance will come.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_5"
    },
    "day5_ending_alone_5": {
        name: "Me",
        text: "(Solitude isn't a punishment. It's time spent facing yourself.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_6"
    },
    "day5_ending_alone_6": {
        name: "Me",
        text: "(Before loving someone else, I learned that I must first understand myself.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_7"
    },
    "day5_ending_alone_7": {
        name: "Me",
        text: "(Walking alone on a night road isn't so bad.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_8"
    },
    "day5_ending_alone_8": {
        name: "System",
        text: "─── ALONE END ───",
        night: true,
        fade: true,
        next: "day5_credits"
    },

    // █████████████████████████████████████████████████████████████████████████
    //  공통: 엔딩 크레딧
    // █████████████████████████████████████████████████████████████████████████
    "day5_credits": {
        name: "",
        text: "",
        background: null,
        character: null,
        night: true,
        fade: true,
        type: "credits",
        next: "day5_ending_restart"
    },

    // =========================================================================
    // 엔딩 크레딧 후 - 다시 시작
    // =========================================================================
    "day5_ending_restart": {
        name: "System",
        text: "",
        background: null,
        character: null,
        fade: true,
        choices: [
            { text: "Start Over from the Beginning", next: "index.html" }
        ]
    }
});
