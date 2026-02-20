const fs = require('fs');

const filePath = 'assets/js/scenario/en_day4_4_night.js';
let content = fs.readFileSync(filePath, 'utf8');

const updates = {
    // Seoyeon
    "day4_night_seoyeon_start": "Seoyeon is sitting on the bed, staring blankly at the wall. Her eyes are empty, but there's a chilling stillness about her.",
    "day4_night_seoyeon_talk": "You came... I knew you wouldn't leave me. You can't leave me.",
    "day4_night_seoyeon_talk_2": "Everyone else is fake. Only you and I are real in this world. So... you have to stay by my side forever.",
    "day4_night_seoyeon_talk_3": "If you try to run away... I don't know what I might do. To myself, or... to them.",
    "day4_night_seoyeon_talk_4": "Just looking at you makes my heart race like it's going to explode. This is love, right? It has to be.",
    "day4_night_seoyeon_talk_5": "Don't look at anyone else. Don't even think about anyone else. Only look at me.",
    "day4_night_seoyeon_talk_6": "I'll do anything for you. So... you have to give me everything too.",
    "day4_night_seoyeon_talk_7": "Why are you trembling? Are you scared of me? ...Good. That means you won't dare to leave.",
    "day4_night_seoyeon_talk_8": "We're going to be together forever. Even death won't part us.",
    "day4_night_seoyeon_talk_9": "I love you. I love you so much it hurts. Do you love me too? ...Say yes.",
    "day4_night_seoyeon_talk_10": "If you say no... I'll make you say yes. No matter what it takes.",
    "day4_night_seoyeon_choice_1": "I love you too.",
    "day4_night_seoyeon_choice_2": "You're scaring me.",
    "day4_night_seoyeon_choice_1_res": "I knew it. I knew you felt the same way. We're destined to be together.",
    "day4_night_seoyeon_choice_2_res": "Scared? You should be. Because you're mine now, and there's no escape.",
    "day4_night_seoyeon_end": "Seoyeon smiles, but it doesn't reach her eyes. It's a smile of pure, terrifying obsession.",

    // Dain
    "day4_night_dain_start": "Dain is pacing around the room, muttering to herself. She stops and glares at you as you enter.",
    "day4_night_dain_talk": "Where were you? Who were you with? Tell me everything.",
    "day4_night_dain_talk_2": "I saw you looking at her. Don't lie to me. I see everything.",
    "day4_night_dain_talk_3": "You're mine. You belong to me. I won't let anyone else have you.",
    "day4_night_dain_talk_4": "If I can't have you... no one can. Do you understand?",
    "day4_night_dain_talk_5": "I've been watching you. Every move you make, every breath you take. I know you better than you know yourself.",
    "day4_night_dain_talk_6": "You think you have a choice? You don't. Your fate was sealed the moment we met.",
    "day4_night_dain_talk_7": "I'll destroy anyone who tries to take you away from me. I'll tear them apart.",
    "day4_night_dain_talk_8": "Don't make me angry. You wouldn't like me when I'm angry.",
    "day4_night_dain_talk_9": "Just surrender to me. It'll be easier that way. For both of us.",
    "day4_night_dain_talk_10": "Say you're mine. Say it!",
    "day4_night_dain_choice_1": "I'm yours.",
    "day4_night_dain_choice_2": "I need some space.",
    "day4_night_dain_choice_1_res": "Good boy. Now, never forget that.",
    "day4_night_dain_choice_2_res": "Space? There is no space. There is only me.",
    "day4_night_dain_end": "Dain's grip on your arm tightens painfully. Her eyes are filled with a dark, possessive fire.",

    // Yuna
    "day4_night_yuna_start": "Yuna is sitting quietly, but the air around her feels heavy and suffocating.",
    "day4_night_yuna_talk": "I've been waiting for you. You took too long.",
    "day4_night_yuna_talk_2": "I don't like it when you're away from me. It makes me anxious.",
    "day4_night_yuna_talk_3": "You're the only one who understands me. The only one who matters.",
    "day4_night_yuna_talk_4": "I want to lock you up in a room where only I can see you. Would you like that?",
    "day4_night_yuna_talk_5": "I'd take such good care of you. You wouldn't need anything else. Just me.",
    "day4_night_yuna_talk_6": "Why are you looking at the door? Are you thinking of leaving?",
    "day4_night_yuna_talk_7": "Don't even try. I'll find you wherever you go. You can't hide from me.",
    "day4_night_yuna_talk_8": "I'll break your legs if I have to. Just to keep you here with me.",
    "day4_night_yuna_talk_9": "I'm doing this because I love you. Can't you see that?",
    "day4_night_yuna_talk_10": "Smile for me. I want to see you smile.",
    "day4_night_yuna_choice_1": "(Smile nervously)",
    "day4_night_yuna_choice_2": "This is insane.",
    "day4_night_yuna_choice_1_res": "That's better. You look so beautiful when you smile for me.",
    "day4_night_yuna_choice_2_res": "Insane? Maybe. But it's a beautiful kind of insanity, isn't it?",
    "day4_night_yuna_end": "Yuna gently strokes your cheek, her touch cold and unsettling.",

    // Teacher
    "day4_night_teacher_start": "The teacher is standing by the window, looking out into the darkness. She turns to you with a chilling smile.",
    "day4_night_teacher_talk": "Ah, there you are. My favorite student.",
    "day4_night_teacher_talk_2": "I've been thinking about you. A lot. Too much, perhaps.",
    "day4_night_teacher_talk_3": "You're so special. So different from the others. I want to keep you all to myself.",
    "day4_night_teacher_talk_4": "I can teach you things you've never even dreamed of. But you have to be a good student.",
    "day4_night_teacher_talk_5": "You have to obey me. Completely and unconditionally.",
    "day4_night_teacher_talk_6": "If you disobey... there will be consequences. Severe consequences.",
    "day4_night_teacher_talk_7": "I'm the only authority you need to listen to. Forget everyone else.",
    "day4_night_teacher_talk_8": "I'll mold you into the perfect partner. Just for me.",
    "day4_night_teacher_talk_9": "Don't resist. It's futile. Just let me take control.",
    "day4_night_teacher_talk_10": "Now, come here. Show me how obedient you can be.",
    "day4_night_teacher_choice_1": "(Approach her slowly)",
    "day4_night_teacher_choice_2": "(Step back)",
    "day4_night_teacher_choice_1_res": "Good. You learn quickly. I'm going to enjoy this.",
    "day4_night_teacher_choice_2_res": "Stepping back? That's a mistake. A very big mistake.",
    "day4_night_teacher_end": "The teacher's eyes gleam with a predatory light as she steps towards you.",

    // Nurse
    "day4_night_nurse_start": "The nurse is preparing a syringe. She looks up at you with a sweet, yet terrifying smile.",
    "day4_night_nurse_talk": "It's time for your medicine. You need to be healthy for me.",
    "day4_night_nurse_talk_2": "I want to take care of you. Forever. I'll make sure you never get sick again.",
    "day4_night_nurse_talk_3": "Or maybe... I'll make you just sick enough so you always need me.",
    "day4_night_nurse_talk_4": "I love the way you look when you're helpless. It's so endearing.",
    "day4_night_nurse_talk_5": "I can make all your pain go away. Or I can cause it. It's up to you.",
    "day4_night_nurse_talk_6": "Just be a good patient and do exactly as I say.",
    "day4_night_nurse_talk_7": "I've prepared a special room for you. It's very comfortable. And very secure.",
    "day4_night_nurse_talk_8": "You won't ever have to leave. You won't ever want to leave.",
    "day4_night_nurse_talk_9": "I'll be your nurse, your doctor, your everything.",
    "day4_night_nurse_talk_10": "Now, hold still. This might pinch a little.",
    "day4_night_nurse_choice_1": "(Hold still)",
    "day4_night_nurse_choice_2": "(Try to run)",
    "day4_night_nurse_choice_1_res": "Such a good patient. You're going to make me very happy.",
    "day4_night_nurse_choice_2_res": "Running? Oh, honey. You can't run from me. The sedatives are already kicking in.",
    "day4_night_nurse_end": "The nurse approaches with the syringe, her smile widening as your vision starts to blur.",

    // Resolve
    "day4_night_seoyeon_resolve_start": "Seoyeon's eyes widen as you speak. The darkness in them seems to recede slightly.",
    "day4_night_seoyeon_resolve_talk": "You... you really mean that? You're not just saying that to placate me?",
    "day4_night_seoyeon_resolve_talk_2": "I... I've been so scared. Scared of losing you. Scared of this world.",
    "day4_night_seoyeon_resolve_talk_3": "But if you're really with me... maybe I don't need to be so afraid.",
    "day4_night_seoyeon_resolve_end": "Seoyeon collapses into your arms, sobbing quietly. The terrifying aura around her dissipates.",

    "day4_night_dain_resolve_start": "Dain stops pacing. She looks at you, her expression a mix of anger and vulnerability.",
    "day4_night_dain_resolve_talk": "You're not afraid of me? Even after everything I said?",
    "day4_night_dain_resolve_talk_2": "I... I don't know how to handle these feelings. They're overwhelming.",
    "day4_night_dain_resolve_talk_3": "I just want to protect what's mine. But maybe... maybe I'm going about it the wrong way.",
    "day4_night_dain_resolve_end": "Dain takes a deep breath, her shoulders slumping. She looks exhausted, but the dangerous fire in her eyes has dimmed.",

    "day4_night_yuna_resolve_start": "Yuna's cold demeanor cracks. She looks at you with a hint of desperation.",
    "day4_night_yuna_resolve_talk": "You'd stay with me? Even if I didn't lock you up?",
    "day4_night_yuna_resolve_talk_2": "I've always been alone. I thought... I thought I had to force you to stay.",
    "day4_night_yuna_resolve_talk_3": "If you're choosing to stay... that changes everything.",
    "day4_night_yuna_resolve_end": "Yuna gently takes your hand, her touch no longer cold, but warm and seeking comfort.",

    "day4_night_teacher_resolve_start": "The teacher's predatory smile falters. She looks at you with a newfound respect.",
    "day4_night_teacher_resolve_talk": "You're stronger than I thought. You're not just a student to be molded.",
    "day4_night_teacher_resolve_talk_2": "Perhaps... perhaps we can be partners. Equals.",
    "day4_night_teacher_resolve_talk_3": "I've been trying to control you, but maybe I just need to trust you.",
    "day4_night_teacher_resolve_end": "The teacher steps back, giving you space. The oppressive atmosphere lifts.",

    "day4_night_nurse_resolve_start": "The nurse lowers the syringe. Her terrifying smile fades into a look of genuine concern.",
    "day4_night_nurse_resolve_talk": "You don't need my medicine? You're... you're okay?",
    "day4_night_nurse_resolve_talk_2": "I just wanted to be needed. I wanted to be the only one who could help you.",
    "day4_night_nurse_resolve_talk_3": "But if you're healthy... and you still want me... that's even better.",
    "day4_night_nurse_resolve_end": "The nurse puts the syringe away and hugs you tightly, her need for control replaced by a need for affection.",

    // Farewell
    'day4_night_yuna_farewell': "*Yuna stopped as she was about to turn around. And she gripped my collar tightly.*",
    'day4_night_yuna_farewell_2': "I won't let you die like Sunbae. To protect you... I'd rather break you and tie you to my side.",
    'day4_night_yuna_farewell_3': "You're mine. You can't go anywhere.",
    'day4_night_yuna_home': "*I returned home. Yuna's chilling gaze and tight grip won't leave my mind.*",
    'day4_night_yuna_home_2': "*I had a feeling that what she meant by 'protecting' might be different from what I thought.*",
    
    'day4_night_seoyeon_resolve_3': "Since you've seen me at my lowest like this... you can never leave me now.",
    'day4_night_seoyeon_resolve_4': "......Seoyeon?",
    'day4_night_seoyeon_resolve_end': "If you smile at another girl... I don't know what I'll do then. Got it?",
    'day4_night_seoyeon_farewell': "*We left the park and walked together to my house. Seoyeon hugged my arm tightly and wouldn't let go.*",
    'day4_night_seoyeon_farewell_2': "...I showed you an ugly side of me today, but you didn't run away. I'm glad.",
    'day4_night_seoyeon_farewell_4': "......Never forget those words. You're mine now.",
    'day4_night_seoyeon_farewell_6': "*As Seoyeon turned around, she gave a chilling but sweet smile.*",

    'day4_night_dain_resolve_3': "If I can never play volleyball again... you have to take responsibility for my whole life. Got it?",
    'day4_night_dain_resolve_4': "......Huh?",
    'day4_night_dain_resolve_end': "I'm not joking. You're mine now, so don't even think about running away. Even if my legs break, I'll chase after you.",
    'day4_night_dain_farewell': "*We left the gym. Dain linked her arm tightly with mine, putting strength into it as if she would never let go.*",
    'day4_night_dain_farewell_2': "...Since you've seen all my weaknesses today, you can't escape from me now. Just set tosses by my side for the rest of your life.",

    'day4_night_teacher_resolve_2': "I've made up my mind. I don't care if I lose my position as a teacher.",
    'day4_night_teacher_resolve_3': "If we get caught... I'll lock you in my room where no one can see you. Then only I can see you forever, right?",
    'day4_night_teacher_resolve_4': "......Teacher?",
    'day4_night_teacher_resolve_end': "I'm not joking. You're my accomplice now. You can never get out.",
    'day4_night_teacher_farewell': "*We left the cafe. We walked side by side on the night street. The teacher intertwined her fingers with mine and wouldn't let go.*",
    'day4_night_teacher_farewell_2': "...I'll pretend to be a strict teacher again at school. We can't let the other kids notice.",
    'day4_night_teacher_farewell_3': "A secret romance.",
    'day4_night_teacher_farewell_4': "Yeah. So... don't get too close to other girls at school.",
    'day4_night_teacher_farewell_5': "You never know how I might torment you using my authority as a teacher. Got it?",
    'day4_night_teacher_farewell_6': "...See you tomorrow. My accomplice.",

    'day4_night_nurse_resolve_2': "I won't wear a mask in front of you anymore. Instead... I want to lock you in this infirmary forever.",
    'day4_night_nurse_resolve_3': "I'll nurse you for the rest of my life... so I want you to keep being sick. So you only rely on me.",
    'day4_night_nurse_resolve_4': "......Teacher?",
    'day4_night_nurse_resolve_end': "I'm joking. ...Half joking. So if you get hurt, come straight to me. If you go anywhere else, I'll be really mad.",
    'day4_night_nurse_farewell': "*We left the infirmary and walked out of the school. The teacher linked her arm tightly with mine and wouldn't let go.*",
    'day4_night_nurse_farewell_2': "...When you come to school tomorrow, drop by the infirmary first. I'll be checking attendance."
};

for (const [key, newText] of Object.entries(updates)) {
    const keyIndex = content.indexOf('"' + key + '":');
    if (keyIndex !== -1) {
        const textIndex = content.indexOf('text: "', keyIndex);
        if (textIndex !== -1) {
            let endQuoteIndex = -1;
            for (let i = textIndex + 7; i < content.length; i++) {
                if (content[i] === '"' && content[i-1] !== '\\') {
                    endQuoteIndex = i;
                    break;
                }
            }
            
            if (endQuoteIndex !== -1) {
                const before = content.substring(0, textIndex + 7);
                const after = content.substring(endQuoteIndex);
                
                const escapedNewText = newText.replace(/"/g, '\\"');
                
                content = before + escapedNewText + after;
            }
        }
    }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated en_day4_4_night.js');
