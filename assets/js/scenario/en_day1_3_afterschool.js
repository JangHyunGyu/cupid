/**
 * ============================================================================
 * CUPID - Day 1 After School Scenario (English Version)
 * ============================================================================
 * 
 *  ?�일 ?�보
 * ----------------------------------------------------------------------------
 * ?�일�? en_day1_3_afterschool.js
 * ?�어: ?�어 (English)
 * ?�차: Day 1 (1?�차)
 * ?�간?�: After School (방과 ??
 * 
 *  ?�나리오 개요
 * ----------------------------------------------------------------------------
 * ?�학 첫날 ?�과가 ?�난 ?�의 ?�동???�룹?�다. ?�교 곳곳???�유�?�� ?�색?�며
 * ?�로?�들??방과 ???�동??참여?�거?? ?�임 ?�생?�과???�담, ?��? 바로 귀가?�는 
 * 경로�??�택?????�습?�다. �??�소?�서???�동?� ?�감?��? ?�후 ?�락�??�인 
 * ?�벤?�에 ???�향??미칩?�다.
 * 
 *  주요 ?�벤??
 * ----------------------------------------------------------------------------
 * 1. ?�소 ?�택 - ?�생?�실(?�연), ?�서관(?�나), 체육관(?�인), 보건??보건??, 교무???�임??, 귀가
 * 2. ?�연???�생???�무 - ?�류 ?�리 ?�기, 카페 ?�이???�안, ?�락�?교환
 * 3. ?�나???�서관 별�? - ?�교??진실???�??경고, ?�나?�???�서??교감, ?�락�?교환
 * 4. ?�인??배구부 ?�습 - ?�원 ?�는 ?�습 ?�기(체력 중시), ?�볶???�이?? ?�락�?교환
 * 5. 보건 ?�생???�임 ?�생??- ?�담 �??�적???�?? ?�락�?교환 기회
 * 6. ?�교 �??�의??- ?�과 마무�?�??�일???�한 ?�식
 * 
 *  조건 ?�래�??�명 (Condition Flags)
 * ----------------------------------------------------------------------------
 * met_*                : ?�심?�간???�당 ?�로?�을 만났?��? ?�인 (구면/초면 ?�??분기)
 * has_number_*         : ?��? ?�락처�? 가지�??�는지 ?�인 (중복 교환 방�?)
 * 
 *  ?�정 ?�래�??�명 (Set Flags)
 * ----------------------------------------------------------------------------
 * met_*                : (초면??경우) ?�로?�과 처음 만났?�을 기록
 * knows_name_*         : ?�로?�의 ?�름???�게 ??
 * helped_seoyeon       : ?�연???�무�??��?주었?�을 기록
 * dated_*_day1         : 방과 ???�정 ?�로?�과 ?�이??카페 ??�??�음??기록
 * has_number_*         : ?�정 ?�로?�의 ?�락처�? ?�득??
 * has_any_contact      : 최소 ??�??�상???�락처�? ?�보??
 * 
 *  ?�감??변??(Stats Changes)
 * ----------------------------------------------------------------------------
 * 모든 ?�로?�들???�???�택지???�라 ?�감???�승/?�락 가??
 * 
 *  ?�이 ?�항
 * ----------------------------------------------------------------------------
 * - sunset: true - 방과 ???�을 분위�??�출???�한 ?�역 배경 ?�성
 * - excludeCondition: ?�정 조건??만족?��? ?�을 ?�만 ?�행?�는 분기 ?�용
 * 
 * ============================================================================
 */

// SCENARIO ?�역 객체 초기??
if (typeof SCENARIO === 'undefined') {
    var SCENARIO = {};
}

// Day 1 ?�나리오 그룹 초기??
if (!SCENARIO[1]) {
    SCENARIO[1] = {};
}

/**
 * [Day 1 - After School] ???�이???�의
 */
Object.assign(SCENARIO[1], {
    "after_school_start": {
        name: "Me",
        text: "(School's over. The crimson sunset seeps through the window. It was a rather special day today.)",
        background: "assets/images/background/room_school.png",
        bgm: "sunset1.mp3",
        character: null,
        sunset: true,
        next: "after_school_start_2"
    },
    "after_school_start_2": {
        name: "Me",
        text: "(As I pack my bag, I feel a sense of regret. I kind of want to see someone more...)",
        sunset: true,
        next: "after_school_start_3"
    },
    "after_school_start_3": {
        name: "Me",
        text: "(What should I do? The sunset is too beautiful to just head home.)",
        sunset: true,
        choices: [
            { text: "Go to the student council room to see Seoyeon.", next: "after_seoyeon" },
            { text: "Go to the library to see Yuna.", next: "after_yuna", condition: "met_yuna" },
            { text: "Take a look around the library annex.", next: "after_yuna_new", excludeCondition: "met_yuna" },
            { text: "Go to the gym to check on Dain.", next: "after_dain", condition: "met_dain" },
            { text: "Head towards the noisy gymnasium.", next: "after_dain_new", excludeCondition: "met_dain" },
            { text: "Go to the nurse's office.", next: "after_nurse", condition: "met_nurse" },
            { text: "Explore the nurse's office.", next: "after_nurse_new", excludeCondition: "met_nurse" },
            { text: "Go to the faculty room to see the teacher.", next: "after_teacher" },
            { text: "That's it for today, I'm heading home.", next: "after_home" }
        ]
    },
    "after_teacher": {
        name: "Me",
        text: "(I open the faculty room door. My teacher is organizing documents alone.)",
        background: "assets/images/background/teacher_office.png",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        next: "after_teacher_2"
    },
    "after_teacher_2": {
        name: "Homeroom Teacher",
        text: "\"Oh, {name}! What brings you here so late?\"",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        next: "after_teacher_3"
    },
    "after_teacher_3": {
        name: "Homeroom Teacher",
        text: "\"You must have many questions since it's your first day. Is there anything on your mind?\"",
        character: "assets/images/characters/teacher_normal.png",
        sunset: true,
        choices: [
            { text: "When are you leaving? I'd love to help.", next: "after_teacher_help", stats: { Teacher: { affinity: 5 } } },
            { text: "I just wanted to see you again before I left.", next: "after_teacher_miss", stats: { Teacher: { affinity: 15 } } },
            { text: "Any secret spots in this school?", next: "after_teacher_info", stats: { Teacher: { affinity: 3 } } }
        ]
    },
    "after_teacher_help": {
        name: "Homeroom Teacher",
        text: "\"Hehe, that's sweet of you. But this is my job. You should go home and rest, {name}.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "after_teacher_contact"
    },
    "after_teacher_miss": {
        name: "Homeroom Teacher",
        text: "\"Oh my... you're really something. It's a bit embarrassing, but I'm glad you came... Hehe.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "after_teacher_contact"
    },
    "after_teacher_info": {
        name: "Homeroom Teacher",
        text: "\"This school has a long history. There are many hidden places. I'll show you around sometime.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        next: "after_teacher_contact"
    },
    "after_teacher_contact": {
        name: "Homeroom Teacher",
        text: "\"Oh, by the way. Contact me if anything urgent comes up. Let me give you my number.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        branches: [
            { next: "after_home", condition: "has_number_teacher" },
            { next: "after_teacher_contact_ask" }
        ]
    },
    "after_teacher_contact_ask": {
        name: "Homeroom Teacher",
        text: "\"Here's my number. Make sure to save it.\"",
        character: "assets/images/characters/teacher_smile.png",
        sunset: true,
        setFlags: ["has_number_teacher", "has_any_contact"],
        stats: { Teacher: { affinity: 5 } },
        next: "after_home"
    },
    "after_seoyeon": {
        name: "Me",
        text: "(I open the student council room door. Seoyeon is buried in paperwork.)",
        background: "assets/images/background/student_room.png",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        next: "after_seoyeon_2"
    },
    "after_seoyeon_2": {
        affinityChar: "Seoyeon",
        affinityBranches: [
            { minAffinity: 15, next: "after_seoyeon_3_high" },
            { minAffinity: -5, next: "after_seoyeon_3_standard" },
            { minAffinity: -100, next: "after_seoyeon_3_low" }
        ]
    },
    "after_seoyeon_3_standard": {
        name: "Seoyeon",
        text: "\"Oh? {name}! You're still here? Were you... waiting for me? (Playful smile)\"",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        choices: [
            { text: "Yeah, I wanted to go together. Need help?", next: "after_seoyeon_help", setFlag: "helped_seoyeon", stats: { Seoyeon: { affinity: 5 } } },
            { text: "I wanted to see you. Don't push yourself too hard.", next: "after_seoyeon_worry", stats: { Seoyeon: { affinity: 3 } } },
            { text: "Just a misunderstanding. I took a wrong turn.", next: "after_seoyeon_rude", stats: { Seoyeon: { affinity: -30 } } }
        ]
    },
    "after_seoyeon_3_high": {
        name: "Seoyeon",
        text: "(Seoyeon puts down her documents and beams.) \"{name}! I knew you'd come. No... I was desperately hoping you would. Shall we go together?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        choices: [
            { text: "Yeah, I wanted to go with you too. I'll help.", next: "after_seoyeon_help", setFlag: "helped_seoyeon", stats: { Seoyeon: { affinity: 5 } } },
            { text: "You waited for me? I'm touched. I'm really happy.", next: "after_seoyeon_worry", stats: { Seoyeon: { affinity: 8 } } },
            { text: "You look much prettier under the sunset.", next: "after_seoyeon_help", stats: { Seoyeon: { affinity: 10 } } }
        ]
    },
    "after_seoyeon_3_low": {
        name: "Seoyeon",
        text: "(Seoyeon glances at me with an annoyed expression.) \"...{name}? Why are you here? I'm busy, so please leave if you don't have business.\"",
        character: "assets/images/characters/seyoun_pout.png",
        sunset: true,
        choices: [
            { text: "Sorry, I didn't mean to disturb you.", next: "after_home", stats: { Seoyeon: { affinity: -5 } } },
            { text: "I'm busy too. I'll leave without you asking.", next: "after_home", stats: { Seoyeon: { affinity: -15 } } }
        ]
    },
    "after_seoyeon_rude": {
        name: "Seoyeon",
        text: "(Seoyeon's expression hardens instantly. She turns back to her documents.)",
        character: "assets/images/characters/seyoun_angry.png",
        sunset: true,
        next: "after_seoyeon_rude_2"
    },
    "after_seoyeon_rude_2": {
        name: "Seoyeon",
        text: "\"Oh... okay? Then please leave. I'm quite busy.\"",
        character: "assets/images/characters/seyoun_angry.png",
        sunset: true,
        next: "after_home"
    },
    "after_seoyeon_help": {
        name: "Seoyeon",
        text: "(She looks moved and her eyes widen. Soon she smiles brightly and offers the seat next to her.)",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "after_seoyeon_help_dialogue"
    },
    "after_seoyeon_help_dialogue": {
        name: "Seoyeon",
        text: "\"Really? Thanks! With your help, it'll be done in no time. Here, can you organize this?\"",
        character: "assets/images/characters/seyoun_laugh.png",
        sunset: true,
        next: "after_seoyeon_help_action"
    },
    "after_seoyeon_help_action": {
        name: "Seoyeon",
        text: "(As I organize the documents in silence, I feel a strange connection. Outside, the sunset is already falling.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "after_seoyeon_help_3"
    },
    "after_seoyeon_help_3": {
        name: "Seoyeon",
        text: "\"Let's go get something delicious after we finish this!\"",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_seoyeon_cafe"
    },
    "after_seoyeon_worry": {
        name: "Seoyeon",
        text: "(She shyly scratches her head and smiles.)",
        character: "assets/images/characters/seyoun_normal.png",
        next: "after_seoyeon_worry_2"
    },
    "after_seoyeon_worry_2": {
        name: "Seoyeon",
        text: "\"Hehe, you caught me. Being student council president is more work than expected. But now that you're worried about me, I feel energized! Wait just a bit, I'll finish soon and we can go together!\"",
        character: "assets/images/characters/seyoun_normal.png",
        next: "after_seoyeon_cafe"
    },
    "after_seoyeon_cafe": {
        name: "Seoyeon",
        text: "(After finishing work, we stopped by a small café in front of school.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        next: "after_seoyeon_cafe_2"
    },
    "after_seoyeon_cafe_2": {
        name: "Seoyeon",
        text: "(Seoyeon drinks her beverage topped with whipped cream and looks happy.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        next: "after_seoyeon_cafe_2_2"
    },
    "after_seoyeon_cafe_2_2": {
        name: "Seoyeon",
        text: "\"Ahhh~ I feel alive now. Thanks so much for today, {name}.\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        next: "after_seoyeon_cafe_3"
    },
    "after_seoyeon_cafe_3": {
        name: "Seoyeon",
        text: "\"Thanks to you, today became really special. Hey... can we go home together tomorrow too?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/seyoun_normal.png",
        sunset: true,
        choices: [
            { text: "Of course. I'm already looking forward to tomorrow.", next: "after_seoyeon_promise", stats: { Seoyeon: { affinity: 5 } } },
            { text: "Well, we'll see? Just kidding. Let's definitely go together.", next: "after_seoyeon_tease", stats: { Seoyeon: { affinity: 4 } } }
        ]
    },
    "after_seoyeon_promise": {
        name: "Seoyeon",
        text: "(She holds out her pinky and smiles brightly...)",
        character: "assets/images/characters/seyoun_shy.png",
        next: "after_seoyeon_promise_2"
    },
    "after_seoyeon_promise_2": {
        name: "Seoyeon",
        text: "\"Promise? No backing out! See you tomorrow, {name}. Get home safely!\"",
        character: "assets/images/characters/seyoun_shy.png",
        branches: [
            { next: "after_home", condition: "has_number_seyoun" },
            { next: "after_seoyeon_contact_ask" }
        ]
    },
    "after_seoyeon_tease": {
        name: "Seoyeon",
        text: "(She puffs up her cheeks and glares at me.)",
        character: "assets/images/characters/seyoun_pout.png",
        next: "after_seoyeon_tease_2"
    },
    "after_seoyeon_tease_2": {
        name: "Seoyeon",
        text: "\"Hmph... You're so mean! But you have to come. If you don't, as student council president I'll... Just kidding. See you tomorrow!\"",
        character: "assets/images/characters/seyoun_pout.png",
        branches: [
            { next: "after_home", condition: "has_number_seyoun" },
            { next: "after_seoyeon_contact_ask" }
        ]
    },
    "after_seoyeon_contact_ask": {
        name: "Seoyeon",
        text: "\"Oh wait! We haven't exchanged numbers yet. I might have something to tell you... Could I get your number?\"",
        character: "assets/images/characters/seyoun_shy.png",
        choices: [
            { text: "Sure, contact me anytime. Here's my number.", next: "after_seoyeon_contact_success", setFlags: ["has_number_seyoun", "has_any_contact"] },
            { text: "Sorry, I'll give it when we're closer.", next: "after_seoyeon_contact_fail" }
        ]
    },
    "after_seoyeon_contact_success": {
        name: "Seoyeon",
        text: "\"Thanks! Then I'll really message you later. Take care!\"",
        character: "assets/images/characters/seyoun_laugh.png",
        stats: { Seoyeon: { affinity: 5 } },
        next: "after_home"
    },
    "after_seoyeon_contact_fail": {
        name: "Seoyeon",
        text: "\"Oh... okay! I asked too suddenly, right? Sorry. Then see you at school tomorrow!\"",
        character: "assets/images/characters/seyoun_normal.png",
        stats: { Seoyeon: { affinity: -10 } },
        next: "after_home"
    },
    "after_yuna_new": {
        name: "Me",
        text: "(Walking through the quiet parts of school, I arrive at the library annex. In the sunset light, a girl sits by the window.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "after_yuna_new_2"
    },
    "after_yuna_new_2": {
        name: "???",
        text: "\"Huh? Coming here at this hour... You're quite unusual. I'm Yuna.\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        setFlag: "met_yuna",
        next: "after_yuna_3"
    },
    "after_yuna": {
        name: "Yuna",
        text: "(The library annex is darker and quieter than before. There, a girl sits by the window, gazing at the sunset.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "after_yuna_2"
    },
    "after_yuna_2": {
        name: "Yuna",
        text: "(She knows I've arrived but stares outside for a long time.)",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "after_yuna_3"
    },
    "after_yuna_3": {
        name: "Yuna",
        text: "\"Oh, hello... The library after school is so quiet, I like it. Why did you come?\"",
        background: "assets/images/background/library_old.png",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        branches: [
            { next: "yuna_after_talk", condition: "knows_name_yuna" },
            { next: "yuna_name_share_pre" }
        ]
    },
    "yuna_after_talk": {
        name: "Yuna",
        text: "\"Meeting again, {name}. This place is still quiet... and still heavy. Don't you feel that weight?\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "yuna_after_choices"
    },
    "yuna_after_choices": {
        name: "Yuna",
        text: "\"Is there something you're curious about? Or... did you just come because I'm interesting?\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        choices: [
            {
                text: "Tell me about the school's secrets.",
                next: "after_yuna_secret",
                affinityChar: "Yuna",
                affinityBranches: [
                    { minAffinity: 30, next: "after_yuna_secret_deep" },
                    { minAffinity: 11, next: "after_yuna_secret" },
                    { minAffinity: -999, next: "after_yuna_secret_fail" }
                ]
            },
            { text: "Today's cafeteria food was delicious, right?", next: "after_yuna_boring" },
            { text: "Have you been here since morning?", next: "after_yuna_rude" }
        ]
    },
    "yuna_name_share_pre": {
        name: "Me",
        text: "\"My name is '{name}'. I want to get close to you.\"",
        setFlag: "knows_name_yuna",
        next: "yuna_name_share"
    },
    "yuna_name_share": {
        name: "Yuna",
        text: "(She quietly murmurs my name.) \"...{name}. I'll remember it. But in this school, names... might mean nothing.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "yuna_after_choices"
    },
    "after_yuna_know": {
        name: "Yuna",
        text: "(She slowly turns her head to look at me. A faint smile spreads across her lips.)",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "after_yuna_know_2"
    },
    "after_yuna_know_2": {
        name: "Yuna",
        text: "(She takes my hand and leads me to the annex rooftop.)",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_know_2_2"
    },
    "after_yuna_know_2_2": {
        name: "Yuna",
        text: "\"You want to know about me...? Hmm, I don't know if you're brave or reckless.\"",
        character: "assets/images/characters/yuna_smile.png",
        next: "after_yuna_know_3"
    },
    "after_yuna_know_3": {
        name: "Yuna",
        text: "\"Alright. Before the sunset fades... I'll tell you little by little. Follow me.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "after_yuna_move_rooftop"
    },
    "after_yuna_move_rooftop": {
        name: "Me",
        text: "(I follow her up the creaking stairs. The red sunset seeps through the windows, and when we reach the rooftop, a cool breeze blows.)",
        background: "assets/images/background/top_school.png",
        character: null,
        sunset: true,
        next: "after_yuna_rooftop"
    },
    "after_yuna_rooftop": {
        name: "Yuna",
        text: "(Looking down at the school from the annex rooftop, it's dyed in sunset and gives off a mysterious atmosphere.)",
        background: "assets/images/background/top_school.png",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "after_yuna_rooftop_2"
    },
    "after_yuna_rooftop_2": {
        name: "Yuna",
        text: "(Yuna leans against the railing and stares at me.)",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "after_yuna_rooftop_2_2"
    },
    "after_yuna_rooftop_2_2": {
        name: "Yuna",
        text: "\"People think this school is perfect. But perfection is just an illusion.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "after_yuna_rooftop_3"
    },
    "after_yuna_rooftop_3": {
        name: "Yuna",
        text: "\"Problems that don't show on the surface are just festering. The heavy energy filling this school... don't you feel those changes?\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        choices: [
            { text: "Anywhere is fine as long as I'm with you.", next: "after_yuna_together" },
            { text: "Darkness... that sounds a bit scary.", next: "after_yuna_scared" }
        ]
    },
    "after_yuna_together": {
        name: "Yuna",
        text: "(She squeezes my hand tight. Looking into her eyes, she gives a sad smile...)",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "after_yuna_together_2"
    },
    "after_yuna_together_2": {
        name: "Yuna",
        text: "\"Such foolish words... but I don't dislike it. Alright, then... how about we become people who share each other's secrets?\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "yuna_contact_exchange"
    },
    "yuna_contact_exchange": {
        name: "Yuna",
        text: "(Yuna pulls away from the railing and nonchalantly holds out her smartphone.) \"To share secrets... we need a way to contact each other. Leave your number here.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        choices: [
            { text: "Sure. I want to know everything about you.", next: "yuna_contact_success", setFlags: ["has_number_yuna", "has_any_contact"] },
            { text: "Sorry, I'm still a bit cautious.", next: "yuna_contact_fail", stats: { Yuna: { affinity: -25 } } }
        ]
    },
    "yuna_contact_success": {
        name: "Yuna",
        text: "(Yuna saves my number and smiles faintly.) \"...Done. Now we're connected. When I call... you have to come anytime.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        stats: { Yuna: { affinity: 15 } },
        next: "after_home"
    },
    "yuna_contact_fail": {
        name: "Yuna",
        text: "(Yuna looks at me with cold eyes and puts away her smartphone.) \"...Fine. I won't force you. But remember that opportunities don't come often.\"",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "after_home"
    },
    "after_yuna_scared": {
        name: "Yuna",
        text: "(She laughs coldly and lets go of my hand. She turns her gaze back outside and pushes me away.)",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "after_yuna_scared_2"
    },
    "after_yuna_scared_2": {
        name: "Yuna",
        text: "\"Hmm, I thought so. It's too heavy a story for an ordinary student. Go home today. Don't try to dig any deeper.\"",
        character: "assets/images/characters/yuna_smile.png",
        sunset: true,
        next: "after_home"
    },
    "after_yuna_secret": {
        name: "Yuna",
        text: "(She closes her book and stares at me with those deep purple eyes.)",
        character: "assets/images/characters/yuna_normal.png",
        sunset: true,
        next: "after_yuna_secret_2"
    },
    "after_yuna_secret_2": {
        name: "Yuna",
        text: "\"Shh... Walls have ears. Once you know the truth, you can never return to an ordinary life. If you're okay with that... take my hand.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "after_yuna_know"
    },
    "after_yuna_secret_deep": {
        name: "Yuna",
        text: "(Yuna closes her book and stares at me. Her eyes seem to glow eerily purple.) \"...Truth? Are you ready to handle it? Alright, if your eyes are sincere too... follow me. Promise not to tell anyone.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: 10 } },
        next: "after_yuna_rooftop"
    },
    "after_yuna_secret_fail": {
        name: "Yuna",
        text: "(Yuna gives a cold smile.) \"Truth... You still seem too light to bear its weight. Being curious is fine, but don't dig too deep. You might get hurt.\"",
        character: "assets/images/characters/yuna_smile.png",
        stats: { Yuna: { affinity: -20 } },
        next: "after_home"
    },
    "after_yuna_boring": {
        name: "Yuna",
        text: "(Yuna sighs as if I'm pathetic and turns her eyes back to her book.)",
        character: "assets/images/characters/yuna_bored.png",
        stats: { Yuna: { affinity: -10 } },
        next: "after_yuna_boring_2"
    },
    "after_yuna_boring_2": {
        name: "Yuna",
        text: "\"Cafeteria food...? Talk about such mundane things with other kids. I'm busy, so don't bother me and leave.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "after_home"
    },
    "after_yuna_rude": {
        name: "Yuna",
        text: "(She closes her book and looks at me coldly. The air seems to freeze instantly.)",
        character: "assets/images/characters/yuna_normal.png",
        stats: { Yuna: { affinity: -15 } },
        next: "after_yuna_rude_2"
    },
    "after_yuna_rude_2": {
        name: "Yuna",
        text: "\"Since this morning...? You still know nothing. This strange aura surrounding the school... can't you feel it? Ignorance can sometimes be a sin. Disappear from my sight.\"",
        character: "assets/images/characters/yuna_normal.png",
        next: "after_home"
    },
    "after_dain_new": {
        name: "Me",
        text: "(Heading towards the gym, I see volleyball players practicing in the court bathed in the sunset. Among them, one girl stands out.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_new_intro"
    },
    "after_dain_new_intro": {
        name: "???",
        text: "\"Hi! I'm Dain from the volleyball club. You're the transfer student, right?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        setFlag: "met_dain",
        next: "after_dain_new_name_ask"
    },
    "after_dain_new_name_ask": {
        name: "Dain",
        text: "\"By the way, what's your name? Feels like I'm the only one rushing to ask!\"",
        character: "assets/images/characters/dain_sweat.png",
        next: "after_dain_new_name_share"
    },
    "after_dain_new_name_share": {
        name: "Me",
        text: "\"I'm {name}, a second-year in class 3. Nice to meet you.\"",
        setFlag: "knows_name_dain",
        next: "after_dain_2"
    },
    "after_dain": {
        name: "Dain",
        text: "(Arriving at the gym, Dain is jumping high and slamming powerful spikes. Her healthy energy seems to brighten everything around her.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_active.png",
        sunset: true,
        next: "after_dain_2"
    },
    "after_dain_2": {
        name: "Dain",
        text: "(During a brief break from practice, Dain spots me and runs over while wiping her sweat with a towel.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        next: "dain_free_talk"
    },
    "dain_free_talk": {
        type: "free_talk",
        name: "Dain",
        text: "\"Wow, {name}! Even nicer to see you up close, right? Got any questions for me? About sports, school life, anything!\"",
        context: "After school at sunset in the gym, having a fun conversation with Dain who just finished practice. Keep the conversation going until it naturally concludes. When the conversation ends, Dain will finish her last practice set and suggest going to eat something delicious together. Only at the final turn, naturally mention needing to finish practice or being hungry to lead into the next scene.",
        personality: "A straight-forward volleyball club ace with an easy-going personality. Loves sports and is friendly and energetic towards the protagonist.",
        character: "assets/images/characters/dain_normal.png",
        affinityChar: "Dain",
        affinityBranches: [
            { minAffinity: 20, next: "after_dain_3_high" },
            { minAffinity: -10, next: "after_dain_3" },
            { minAffinity: -100, next: "after_dain_3_low" }
        ],
        next: "after_dain_3"
    },
    "after_dain_3_high": {
        name: "Me",
        text: "(Time flew by talking with Dain. Her bright energy lifted my spirits too. Dain suggested we go eat something delicious after her last practice set.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        choices: [
            { text: "Sure, I'll cheer you on! Go for it!", next: "after_dain_cheer_high", stats: { Dain: { affinity: 5 } } },
            { text: "I'll help with practice. Toss me the ball!", next: "after_dain_help_high", stats: { Dain: { affinity: 15 } } },
            { text: "I'm kinda tired today, can we just go home?", next: "after_dain_tired_high", stats: { Dain: { affinity: -20 } } }
        ]
    },
    "after_dain_3_low": {
        name: "Me",
        text: "(Dain doesn't look happy. Seems like I said something wrong to her while she was sensitive from practice. She curtly said she'd just finish her last set and leave.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_angry.png",
        sunset: true,
        choices: [
            { text: "Sure, I'll cheer you on! Go for it!", next: "after_dain_cheer_low", stats: { Dain: { affinity: 5 } } },
            { text: "I'll help with practice. Toss me the ball!", next: "after_dain_help_low", stats: { Dain: { affinity: 5 } } },
            { text: "I'm kinda tired today, can we just go home?", next: "after_dain_tired_low", stats: { Dain: { affinity: -20 } } }
        ]
    },
    "after_dain_3": {
        name: "Me",
        text: "(Had a nice chat with Dain. She asked me to wait while she finishes her last practice set. We agreed to go eat something delicious after.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        choices: [
            { text: "Sure, I'll cheer you on! Go for it!", next: "after_dain_cheer_normal", stats: { Dain: { affinity: 5 } } },
            { text: "I'll help with practice. Toss me the ball!", next: "after_dain_help_normal", stats: { Dain: { affinity: 15 } } },
            { text: "I'm kinda tired today, can we just go home?", next: "after_dain_tired_normal", stats: { Dain: { affinity: -20 } } }
        ]
    },
    "after_dain_tired_high": {
        name: "Dain",
        text: "(Dain can't hide her disappointment and briefly grabs my hand before letting go.)",
        character: "assets/images/characters/dain_shy.png",
        next: "after_dain_tired_high_2"
    },
    "after_dain_tired_high_2": {
        name: "Dain",
        text: "\"{name}, you're really leaving? I wanted to spend more time together... Oh no! You must be tired from your first day. Sorry for keeping you! Go rest. Promise we'll eat together tomorrow?\"",
        character: "assets/images/characters/dain_shy.png",
        next: "after_home"
    },
    "after_dain_tired_low": {
        name: "Dain",
        text: "(She glances at me coldly and picks up another ball.)",
        character: "assets/images/characters/dain_angry.png",
        next: "after_dain_tired_low_2"
    },
    "after_dain_tired_low_2": {
        name: "Dain",
        text: "\"Fine, do what you want. Sorry for keeping someone busy. Go home or whatever.\"",
        character: "assets/images/characters/dain_angry.png",
        next: "after_home"
    },
    "after_dain_tired_normal": {
        name: "Dain",
        text: "(Dain looks a bit disappointed but nods.)",
        character: "assets/images/characters/dain_sad.png",
        next: "after_dain_tired_normal_2"
    },
    "after_dain_tired_normal_2": {
        name: "Dain",
        text: "\"Oh... right. You must be tired from your first day. Sorry, I got too excited. Okay, go home today. See you tomorrow!\"",
        character: "assets/images/characters/dain_sad.png",
        next: "after_home"
    },
    "after_dain_help_high": {
        name: "Dain",
        text: "(Her eyes sparkle as she runs towards me, clearly overjoyed.)",
        character: "assets/images/characters/dain_laugh.png",
        next: "after_dain_help_high_2"
    },
    "after_dain_help_high_2": {
        name: "Dain",
        text: "\"Really? That's {name} for you! Helping me out feels so reassuring! Here, toss it up nice and high!\"",
        character: "assets/images/characters/dain_active.png",
        next: "after_dain_normal"
    },
    "after_dain_help_low": {
        name: "Dain",
        text: "(She looks at me suspiciously.)",
        character: "assets/images/characters/dain_angry.png",
        next: "after_dain_help_low_2"
    },
    "after_dain_help_low_2": {
        name: "Dain",
        text: "\"...Do you even know how? Just don't get in my way. Toss it however.\"",
        character: "assets/images/characters/dain_angry.png",
        next: "after_dain_normal"
    },
    "after_dain_help_normal": {
        name: "Dain",
        text: "(Her eyes light up as she hands me a ball.)",
        character: "assets/images/characters/dain_laugh.png",
        next: "after_dain_help_normal_2"
    },
    "after_dain_help_normal_2": {
        name: "Dain",
        text: "\"Oh! You'll help? Great! Toss it high towards the net! Here I go!\"",
        character: "assets/images/characters/dain_active.png",
        next: "after_dain_normal"
    },
    "after_dain_cheer_high": {
        name: "Dain",
        text: "(Dain blushes and beams with a wide smile.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "after_dain_cheer_high_2"
    },
    "after_dain_cheer_high_2": {
        name: "Dain",
        text: "\"With {name} cheering... I feel like I can do a hundred times better! Thanks. I'll show you my cool side so don't look away, okay?\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_cheer_low": {
        name: "Dain",
        text: "(She frowns and responds curtly.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_angry.png",
        sunset: true,
        next: "after_dain_cheer_low_2"
    },
    "after_dain_cheer_low_2": {
        name: "Dain",
        text: "\"Don't need it. Having you watch is annoying, so stay back over there. I'm already good without cheering.\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_angry.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_cheer_normal": {
        name: "Dain",
        text: "(Dain scrunches her nose shyly and smiles.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "after_dain_cheer_normal_2"
    },
    "after_dain_cheer_normal_2": {
        name: "Dain",
        text: "\"W-what... Complimenting me like that so suddenly is embarrassing! It's not like I'm trying harder because you're watching. But still... having you watch does make me feel more energized somehow...\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_normal": {
        name: "Dain",
        text: "(Dain playfully taps my shoulder.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "after_dain_normal_2"
    },
    "after_dain_normal_2": {
        name: "Dain",
        text: "\"Hehe~ Not quite there yet. Alright, while we're at it, can you wait until our practice ends? Let's go get tteokbokki together!\"",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "after_dain_end"
    },
    "after_dain_end": {
        name: "Me",
        text: "(I sat in the gym stands watching Dain until her practice ended.)",
        background: "assets/images/background/gym.png",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        next: "after_dain_end_2"
    },
    "after_dain_end_2": {
        name: "Dain",
        text: "(After practice, Dain runs over to me, breathing heavily.) \"Phew... phew... Sorry for making you wait! Come on, let's go get that tteokbokki!\"",
        character: "assets/images/characters/dain_sweat.png",
        sunset: true,
        setFlag: "dated_dain_day1",
        next: "after_dain_tteokbokki"
    },
    "after_dain_tteokbokki": {
        name: "Dain",
        text: "(Taking a big bite of steaming tteokbokki, Dain smiles happily.)",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        next: "after_dain_tteokbokki_2"
    },
    "after_dain_tteokbokki_2": {
        name: "Dain",
        text: "\"Ah, tteokbokki after practice is the best! Thanks for coming with me today. It tastes a hundred times better with you!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        next: "after_dain_tteokbokki_3"
    },
    "after_dain_tteokbokki_3": {
        name: "Dain",
        text: "\"Let's come here often together tomorrow too.. no, from now on! Promise?\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        branches: [
            { next: "after_home", condition: "has_number_dain" },
            { next: "dain_contact_exchange" }
        ]
    },
    "dain_contact_exchange": {
        name: "Dain",
        text: "(Dain wipes the sauce off and playfully waves her smartphone.) \"Hey {name}! If we're gonna eat out together from now on, we need each other's numbers! Give me yours!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        choices: [
            { text: "Sure! It'd be fun to explore restaurants with you, Dain.", next: "dain_contact_success", setFlags: ["has_number_dain", "has_any_contact"] },
            {
                text: "While we're exchanging numbers.. can I call you right now?",
                next: "dain_contact_call_fail",
                affinityChar: "Dain",
                affinityBranches: [
                    { minAffinity: 35, next: "dain_contact_call_success" }
                ],
                setFlags: ["has_number_dain", "has_any_contact"]
            },
            { text: "Hmm.. I'll let you know later when I get a chance.", next: "dain_contact_fail", stats: { Dain: { affinity: -20 } } }
        ]
    },
    "dain_contact_call_success": {
        name: "Dain",
        text: "(Dain blushes and laughs nervously.) \"W-what! Out of nowhere... Wanting to hear my voice... That's too heart-fluttering! I have early practice tomorrow so don't talk too long!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_shy.png",
        sunset: true,
        stats: { Dain: { affinity: 20 } },
        next: "after_home"
    },
    "dain_contact_call_fail": {
        name: "Dain",
        text: "(Dain bursts out laughing.) \"Hey, you're hilarious. Calling right after getting the number, aren't you rushing? Let's start with texting and get closer!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        stats: { Dain: { affinity: -5 } },
        next: "after_home"
    },
    "dain_contact_success": {
        name: "Dain",
        text: "(Dain saves the number with a refreshing smile.) \"Contact sent! I'll text you as soon as I find a good place to eat!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_laugh.png",
        sunset: true,
        stats: { Dain: { affinity: 15 } },
        next: "after_home"
    },
    "dain_contact_fail": {
        name: "Dain",
        text: "(Dain pouts for a moment but then smiles it off.) \"What~ Playing hard to get? Alright, alright. I'll try harder to get your number!\"",
        background: "assets/images/background/cafe.png",
        character: "assets/images/characters/dain_normal.png",
        sunset: true,
        stats: { Dain: { affinity: -30 } },
        next: "after_home"
    },
    "after_nurse": {
        name: "School Nurse",
        text: "(Opening the nurse's office door, the teacher is drinking tea by the window and smiles when she sees me.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "after_nurse_2"
    },
    "after_nurse_new": {
        name: "Me",
        text: "(I unconsciously felt drowsy and walked towards the nurse's office. Opening the door, a gentle herbal scent greets me along with a mature-looking teacher.)",
        background: "assets/images/background/nurse_room.jpg",
        character: "assets/images/characters/nurse_normal.png",
        sunset: true,
        next: "after_nurse_new_2"
    },
    "after_nurse_new_2": {
        name: "School Nurse",
        text: "\"My, a face I haven't seen before? Are you the new transfer student? I'm the school nurse. Are you here because something hurts?\"",
        character: "assets/images/characters/nurse_normal.png",
        setFlag: "met_nurse",
        next: "after_nurse_new_name_ask"
    },
    "after_nurse_new_name_ask": {
        name: "School Nurse",
        text: "\"By the way, what's your name? Will you tell just me?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "after_nurse_new_name_share"
    },
    "after_nurse_new_name_share": {
        name: "Me",
        text: "\"My name is {name}.\"",
        setFlag: "knows_name_nurse",
        next: "nurse_after_day1_contact"
    },
    "after_nurse_2": {
        name: "School Nurse",
        text: "\"{name}! Came to see me before going home? What a sweet student.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "nurse_after_day1_contact"
    },
    "nurse_after_day1_contact": {
        name: "School Nurse",
        text: "\"Here, have a seat. Let me pour you some warm tea. Want to chat with me a bit more?\"",
        character: "assets/images/characters/nurse_normal.png",
        branches: [
            { next: "nurse_after_day1_contact_already", condition: "has_number_nurse" },
            { next: "nurse_after_day1_contact_choice" }
        ]
    },
    "nurse_after_day1_contact_already": {
        name: "Me",
        text: "(The warm scent of tea tickles my nose. What should I do?)",
        character: "assets/images/characters/nurse_normal.png",
        choices: [
            { text: "Yes, I'll rest a bit before going.", next: "nurse_after_day1_contact_already_stay", stats: { Nurse: { affinity: 5 } } },
            { text: "I'm a bit tired today...", next: "nurse_after_day1_contact_already_leave" }
        ]
    },
    "nurse_after_day1_contact_already_stay": {
        name: "School Nurse",
        text: "\"Hehe, good student. It must have been tiring being your first day. Rest here with me for a bit.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "nurse_after_day1_contact_already_stay_2"
    },
    "nurse_after_day1_contact_already_stay_2": {
        name: "School Nurse",
        text: "\"...Alright, time to head out soon. Contact me anytime if you need anything, okay?\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "after_home"
    },
    "nurse_after_day1_contact_already_leave": {
        name: "School Nurse",
        text: "\"Okay, don't push yourself. Contact me anytime if you need anything, okay? Get home safely.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "after_home"
    },
    "nurse_after_day1_contact_choice": {
        name: "Me",
        text: "(The warm scent of tea tickles my nose. What should I do?)",
        character: "assets/images/characters/nurse_normal.png",
        choices: [
            { text: "Yes, I'll rest a bit before going.", next: "nurse_after_day1_contact_stay", stats: { Nurse: { affinity: 5 } } },
            { text: "I'm a bit tired today...", next: "nurse_after_day1_contact_2" }
        ]
    },
    "nurse_after_day1_contact_stay": {
        name: "School Nurse",
        text: "\"Hehe, good student. It must have been tiring being your first day. Rest here with me for a bit.\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "nurse_after_day1_contact_stay_2"
    },
    "nurse_after_day1_contact_stay_2": {
        name: "School Nurse",
        text: "\"...Alright, time to head out soon. {name}, just in case, save my number? Contact me anytime if you're sick or have worries.\"",
        character: "assets/images/characters/nurse_normal.png",
        choices: [
            { text: "Yes, please tell me!", next: "nurse_after_day1_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            { text: "It's still a bit uncomfortable.", next: "nurse_after_day1_contact_fail", stats: { Nurse: { affinity: -15 } } }
        ]
    },
    "nurse_after_day1_contact_2": {
        name: "School Nurse",
        text: "\"Leaving already? Too bad... {name}, just in case, save my number? Contact me anytime if you're sick or have worries.\"",
        character: "assets/images/characters/nurse_normal.png",
        choices: [
            { text: "Yes, please tell me!", next: "nurse_after_day1_contact_success", setFlags: ["has_number_nurse", "has_any_contact"] },
            { text: "It's still a bit uncomfortable.", next: "nurse_after_day1_contact_fail", stats: { Nurse: { affinity: -15 } } }
        ]
    },
    "nurse_after_day1_contact_success": {
        name: "School Nurse",
        text: "\"Hehe, good student. Then I'll text you tonight? Take care, {name}.\"",
        character: "assets/images/characters/nurse_normal.png",
        stats: { Nurse: { affinity: 10 } },
        next: "after_home"
    },
    "nurse_after_day1_contact_fail": {
        name: "School Nurse",
        text: "\"Oh my, playing hard to get? Alright. Tell me if you change your mind. Get home safely!\"",
        character: "assets/images/characters/nurse_normal.png",
        next: "after_home"
    }
});
