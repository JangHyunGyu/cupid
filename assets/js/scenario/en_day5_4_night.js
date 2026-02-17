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
        text: "(And so, my transfer student story comes to an end.)",
        background: null,
        character: null,
        night: true,
        bgm: null,
        fade: true,
        next: "day5_ending_true_2"
    },
    "day5_ending_true_2": {
        name: "Me",
        text: "(That one person I met at my new school.)",
        night: true,
        fade: true,
        bgm: "ending.mp3",
        next: "day5_ending_true_3"
    },
    "day5_ending_true_3": {
        name: "Me",
        text: "(From the very first moment we met, until this very moment— my heart never once wavered.)",
        night: true,
        fade: true,
        next: "day5_ending_true_4"
    },
    "day5_ending_true_4": {
        name: "Me",
        text: "(I remember it. That moment our eyes first met in the hallway. It felt like time had stopped.)",
        night: true,
        fade: true,
        next: "day5_ending_true_5"
    },
    "day5_ending_true_5": {
        name: "Me",
        text: "(I didn't know back then. That one brief glance would change the course of my entire life.)",
        night: true,
        fade: true,
        next: "day5_ending_true_6"
    },
    "day5_ending_true_6": {
        name: "Me",
        text: "(I can't pinpoint the exact moment I fell in love. I just— one day, I couldn't imagine a tomorrow without them.)",
        night: true,
        fade: true,
        next: "day5_ending_true_7"
    },
    "day5_ending_true_7": {
        name: "Me",
        text: "(Like warmth that still lingers on my lips, this feeling will never fade.)",
        night: true,
        fade: true,
        next: "day5_ending_true_8"
    },
    "day5_ending_true_8": {
        name: "Me",
        text: "(Some would say even feelings like this have an expiration date.)",
        night: true,
        fade: true,
        next: "day5_ending_true_9"
    },
    "day5_ending_true_9": {
        name: "Me",
        text: "(But I know the truth. This isn't something that cools— it's something that seeps deeper.)",
        night: true,
        fade: true,
        next: "day5_ending_true_10"
    },
    "day5_ending_true_10": {
        name: "Me",
        text: "(Tomorrow, the day after, even a year from now— I can see myself walking beside this person.)",
        night: true,
        fade: true,
        next: "day5_ending_true_11"
    },
    "day5_ending_true_11": {
        name: "Me",
        text: "(Let's make a promise. No matter what season comes, our story doesn't end here.)",
        night: true,
        fade: true,
        next: "day5_ending_true_12"
    },
    "day5_ending_true_12": {
        name: "Me",
        text: "(To love someone completely— is to hold one single certainty amid all the uncertainty in the world.)",
        night: true,
        fade: true,
        next: "day5_ending_true_13"
    },
    "day5_ending_true_13": {
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
        text: "(And so, my transfer student story comes to an end.)",
        background: null,
        character: null,
        night: true,
        bgm: null,
        fade: true,
        next: "day5_ending_good_route"
    },
    "day5_ending_good_route": {
        name: "System",
        text: "",
        night: true,
        branches: [
            { next: "day5_ending_good_faithful_2", condition: "day5_confessed" },
            { next: "day5_ending_good_2" }
        ]
    },
    // --- Late Confession (Faithful) Route Good Ending Narration ---
    "day5_ending_good_faithful_2": {
        name: "Me",
        text: "(It took me a long time to find the courage. But because I waited, this feeling is certain.)",
        night: true,
        fade: true,
        bgm: "ending.mp3",
        next: "day5_ending_good_faithful_3"
    },
    "day5_ending_good_faithful_3": {
        name: "Me",
        text: "(My heart was set from the beginning. It just took time to put it into words.)",
        night: true,
        fade: true,
        next: "day5_ending_good_faithful_4"
    },
    "day5_ending_good_faithful_4": {
        name: "Me",
        text: "(I hesitated because I was afraid of the answer. Afraid of rejection, afraid of ruining what we had.)",
        night: true,
        fade: true,
        next: "day5_ending_good_faithful_5"
    },
    "day5_ending_good_faithful_5": {
        name: "Me",
        text: "(But I finally said it. And the answer\u2014 was worth the wait.)",
        night: true,
        fade: true,
        next: "day5_ending_good_7"
    },
    "day5_ending_good_2": {
        name: "Me",
        text: "(My heart swayed at times, and I made mistakes.)",
        night: true,
        fade: true,
        bgm: "ending.mp3",
        next: "day5_ending_good_3"
    },
    "day5_ending_good_3": {
        name: "Me",
        text: "(But in the end— I found where my true feelings belonged.)",
        night: true,
        fade: true,
        next: "day5_ending_good_4"
    },
    "day5_ending_good_4": {
        name: "Me",
        text: "(Looking back, there were times I was careless with someone else's heart.)",
        night: true,
        fade: true,
        next: "day5_ending_good_5"
    },
    "day5_ending_good_5": {
        name: "Me",
        text: "(I may have given someone hope only to take it away. I'm sorry for that.)",
        night: true,
        fade: true,
        next: "day5_ending_good_6"
    },
    "day5_ending_good_6": {
        name: "Me",
        text: "(But it was because of that wavering that I came to understand what true feelings really are.)",
        night: true,
        fade: true,
        next: "day5_ending_good_7"
    },
    "day5_ending_good_7": {
        name: "Me",
        text: "(It doesn't have to be perfect. Because this is our beginning.)",
        night: true,
        fade: true,
        next: "day5_ending_good_8"
    },
    "day5_ending_good_8": {
        name: "Me",
        text: "(I wasn't lost. It just took a little longer to arrive.)",
        night: true,
        fade: true,
        next: "day5_ending_good_9"
    },
    "day5_ending_good_9": {
        name: "Me",
        text: "(If there had been no hesitation, there would be no conviction now.)",
        night: true,
        fade: true,
        next: "day5_ending_good_10"
    },
    "day5_ending_good_10": {
        name: "Me",
        text: "(Imperfect love is still love. No— perhaps it's more precious because it's imperfect.)",
        night: true,
        fade: true,
        next: "day5_ending_good_11"
    },
    "day5_ending_good_11": {
        name: "Me",
        text: "(I'll make mistakes again. We'll clash. But with this person, we can fall together and rise together.)",
        night: true,
        fade: true,
        next: "day5_ending_good_12"
    },
    "day5_ending_good_12": {
        name: "Me",
        text: "(So it's okay. This answer took a long time to find— that's exactly why it won't easily change.)",
        night: true,
        fade: true,
        next: "day5_ending_good_13"
    },
    "day5_ending_good_13": {
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
        text: "(And so, my transfer student story… is it really over?)",
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
        text: "(…not that excuses like that will stop them from chasing me.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_4"
    },
    "day5_ending_mayhem_4": {
        name: "Me",
        text: "(One day, three lunch boxes appeared behind the classroom at the same time. That day, I genuinely thought I was done for.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_5"
    },
    "day5_ending_mayhem_5": {
        name: "Me",
        text: "(\"Is she your girlfriend?\" \"No, I am!\" \"What are you talking about, it's me!\" …The hallway became a battlefield that day.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_6"
    },
    "day5_ending_mayhem_6": {
        name: "Me",
        text: "(I took the chance to sneak away to the rooftop. I'd never run that fast in my entire life.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_7"
    },
    "day5_ending_mayhem_7": {
        name: "Me",
        text: "(…But someone was already waiting for me on the rooftop. There really was no escape.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_8"
    },
    "day5_ending_mayhem_8": {
        name: "Me",
        text: "(Maybe it's selfish. Wanting to cherish everyone.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_9"
    },
    "day5_ending_mayhem_9": {
        name: "Me",
        text: "(But the wind never blows in just one direction, and more than one star shines in the sky.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_10"
    },
    "day5_ending_mayhem_10": {
        name: "Me",
        text: "(This chaotic everyday life… honestly, it's not bad. I wonder what kind of mayhem tomorrow will bring.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_11"
    },
    "day5_ending_mayhem_11": {
        name: "Me",
        text: "(Would I make the same choices if I were born again? …I won't answer that. But this smile is real.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_12"
    },
    "day5_ending_mayhem_12": {
        name: "Me",
        text: "(There's no conclusion. But well… this chaotic everyday life is my story.)",
        night: true,
        fade: true,
        next: "day5_ending_mayhem_13"
    },
    "day5_ending_mayhem_13": {
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
        text: "(And so, my transfer student story— hasn't ended.)",
        background: null,
        character: null,
        night: true,
        bgm: null,
        fade: true,
        next: "day5_ending_harem_2"
    },
    "day5_ending_harem_2": {
        name: "Me",
        text: "(Multiple lovers. An impossible reality unfolded before my eyes.)",
        night: true,
        fade: true,
        bgm: "ending.mp3",
        next: "day5_ending_harem_3"
    },
    "day5_ending_harem_3": {
        name: "Me",
        text: "(Every day is a war. Battles break out daily over who gets treated the best.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_4"
    },
    "day5_ending_harem_4": {
        name: "Me",
        text: "(Monday is the walking-to-school order, Tuesday is lunch boxes, Wednesday is the walk home… the weekly schedule is a diplomatic war.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_5"
    },
    "day5_ending_harem_5": {
        name: "Me",
        text: "(One of them watches over me with a quiet smile, another confidently links her arm with mine, and the last one secretly holds my hand from behind.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_6"
    },
    "day5_ending_harem_6": {
        name: "Me",
        text: "(Each of their charms is so different. That's why I can't compare them, and that's why I can't give any of them up.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_7"
    },
    "day5_ending_harem_7": {
        name: "Me",
        text: "(But strangely enough… all of them are smiling. And so am I.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_8"
    },
    "day5_ending_harem_8": {
        name: "Me",
        text: "(Call it greed if you want. As long as there's no lie in this heart.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_9"
    },
    "day5_ending_harem_9": {
        name: "Me",
        text: "(No regrets. As for reflection… I'll leave that to tomorrow's me.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_10"
    },
    "day5_ending_harem_10": {
        name: "Me",
        text: "(Of course, no one knows how long this balance will last. There was another subtle standoff today.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_11"
    },
    "day5_ending_harem_11": {
        name: "Me",
        text: "(But the fact that I even enjoy the tension— maybe I'm already past the point of no return.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_12"
    },
    "day5_ending_harem_12": {
        name: "Me",
        text: "(Tomorrow will be busy. The day after, even more so. But— these dazzling days, I love them.)",
        night: true,
        fade: true,
        next: "day5_ending_harem_13"
    },
    "day5_ending_harem_13": {
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
        text: "(And so, my transfer student story comes to an end.)",
        background: null,
        character: null,
        night: true,
        bgm: null,
        fade: true,
        next: "day5_ending_friend_2"
    },
    "day5_ending_friend_2": {
        name: "Me",
        text: "(I couldn't say what I felt. No— I chose not to.)",
        night: true,
        fade: true,
        bgm: "ending.mp3",
        next: "day5_ending_friend_3"
    },
    "day5_ending_friend_3": {
        name: "Me",
        text: "(The feelings I hid behind the word \"friend\" might surface on some quiet nights.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_4"
    },
    "day5_ending_friend_4": {
        name: "Me",
        text: "(I remember. That day on the rooftop, the way the wind swept their hair, and the fingertips that brushed it aside.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_5"
    },
    "day5_ending_friend_5": {
        name: "Me",
        text: "(If I had said \"I like you\" back then, would tonight be any different?)",
        night: true,
        fade: true,
        next: "day5_ending_friend_6"
    },
    "day5_ending_friend_6": {
        name: "Me",
        text: "(Unspoken feelings don't disappear. They simply glow quietly, deep within the heart.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_7"
    },
    "day5_ending_friend_7": {
        name: "Me",
        text: "(Sometimes the closest distance is also the farthest. The distance called \"friends.\")",
        night: true,
        fade: true,
        next: "day5_ending_friend_8"
    },
    "day5_ending_friend_8": {
        name: "Me",
        text: "(Still, it's not all bad. I can see their smile right beside me. That alone is enough to get through the day.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_9"
    },
    "day5_ending_friend_9": {
        name: "Me",
        text: "(Maybe this isn't cowardice, but a quiet kind of courage. Staying by their side while holding love inside.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_10"
    },
    "day5_ending_friend_10": {
        name: "Me",
        text: "(Still… I don't regret it. Someday, another chance to be brave will come.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_11"
    },
    "day5_ending_friend_11": {
        name: "Me",
        text: "(Someday— when the day comes that I can speak this heart, I won't hesitate.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_12"
    },
    "day5_ending_friend_12": {
        name: "Me",
        text: "(Some stories linger longer precisely because they're left unfinished. This season will be remembered that way.)",
        night: true,
        fade: true,
        next: "day5_ending_friend_13"
    },
    "day5_ending_friend_13": {
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
        text: "(And so, my transfer student story comes to an end.)",
        background: null,
        character: null,
        night: true,
        bgm: null,
        fade: true,
        next: "day5_ending_alone_2"
    },
    "day5_ending_alone_2": {
        name: "Me",
        text: "(No one special came along. But the time I spent at this school was precious.)",
        night: true,
        fade: true,
        bgm: "ending.mp3",
        next: "day5_ending_alone_3"
    },
    "day5_ending_alone_3": {
        name: "Me",
        text: "(I'm different now from who I was before I transferred— back when I felt like I couldn't do anything.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_4"
    },
    "day5_ending_alone_4": {
        name: "Me",
        text: "(What I learned at this school wasn't about romance. It was about facing myself.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_5"
    },
    "day5_ending_alone_5": {
        name: "Me",
        text: "(The laughter in the classroom, the chatter between classes, the sunlight during P.E.— all those ordinary things mattered.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_6"
    },
    "day5_ending_alone_6": {
        name: "Me",
        text: "(Solitude is not a punishment. It's time spent face to face with yourself.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_7"
    },
    "day5_ending_alone_7": {
        name: "Me",
        text: "(I learned that before you can love someone else, you must first understand yourself.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_8"
    },
    "day5_ending_alone_8": {
        name: "Me",
        text: "(Being alone doesn't mean being lonely. There are things you can only hear when you're on your own.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_9"
    },
    "day5_ending_alone_9": {
        name: "Me",
        text: "(The sound of the wind, my footsteps, my own heartbeat. Within that quiet rhythm, I was growing.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_10"
    },
    "day5_ending_alone_10": {
        name: "Me",
        text: "(Next time… I'll be a little braver. I'm sure another chance will come.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_11"
    },
    "day5_ending_alone_11": {
        name: "Me",
        text: "(There's no need to rush. I can walk at my own pace, on my own path.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_12"
    },
    "day5_ending_alone_12": {
        name: "Me",
        text: "(Walking alone on a night road isn't so bad. The stars shine brightest, after all, because of the darkness.)",
        night: true,
        fade: true,
        next: "day5_ending_alone_13"
    },
    "day5_ending_alone_13": {
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
        night: true,
        fade: true,
        choices: [
            { text: "Start Over from the Beginning", next: "index.html" }
        ]
    }
});
