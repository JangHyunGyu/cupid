/**
 * Fix French translations in day3_4_night.js
 * Replaces all English text in "fr" blocks with proper French translations.
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'assets', 'js', 'scenario', 'day3_4_night.js');

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

// ============================================================================
// Translation map: English text -> French text
// Each key is the exact English string found in "fr" blocks
// ============================================================================
const textTranslations = {
    // day3_night_start
    "*I'm home. Friday night... Tomorrow starts the weekend.*":
        "*Je suis rentré. Vendredi soir... Demain, c'est le week-end.*",

    // day3_night_reflect
    "*Lying on the bed, I reflect on today. What happened at lunch... what happened after school...*":
        "*Allongé sur le lit, je repense à cette journée. Ce qui s'est passé au déjeuner... ce qui s'est passé après les cours...*",

    // day3_night_reflect_trouble
    "*Everyone found out at lunch... Can the weekend go smoothly?*":
        "*Tout le monde a tout découvert au déjeuner... Est-ce que le week-end va bien se passer ?*",

    // day3_night_reflect_tension
    "*I made multiple plans... I need to manage my time well.*":
        "*J'ai pris plusieurs rendez-vous... Il faut que je gère bien mon temps.*",

    // day3_night_reflect_normal
    "*I'm looking forward to tomorrow. What kind of day will it be?*":
        "*J'ai hâte d'être à demain. Quelle journée ce sera ?*",

    // day3_night_phone_check
    "*I check my smartphone. There are messages.*":
        "*Je vérifie mon smartphone. Il y a des messages.*",

    // day3_night_multiple_messages
    "*There are multiple messages... My heart is pounding.*":
        "*Il y a plusieurs messages... Mon cœur bat la chamade.*",

    // day3_night_check_messages
    "*Which message should I check first?*":
        "*Quel message devrais-je lire en premier ?*",

    // day3_night_msg_seoyeon
    "*Message: 10 PM* '{name}, are you still awake? I'm so excited for tomorrow!'":
        "*Message : 22h* '{name}, tu es encore réveillé ? J'ai tellement hâte d'être à demain !'",

    // day3_night_seoyeon_suspicious
    "*Additional message* 'But... you're only meeting me, right? No other plans?'":
        "*Message supplémentaire* 'Mais... tu ne vois que moi, hein ? Pas d'autres plans ?'",

    // day3_night_seoyeon_lie
    "'Really? I trust you! See you tomorrow! 💕'":
        "'Vraiment ? Je te fais confiance ! À demain ! 💕'",

    // day3_night_seoyeon_honest
    "'...What? You have other plans? With who?'":
        "'...Quoi ? Tu as d'autres plans ? Avec qui ?'",

    // day3_night_seoyeon_angry
    "'...Fine. We'll see this weekend.'":
        "'...Très bien. On verra ce week-end.'",

    // day3_night_seoyeon_ignore
    "*I didn't reply. Seoyeon will probably be disappointed...*":
        "*Je n'ai pas répondu. Seoyeon sera sûrement déçue...*",

    // day3_night_seoyeon_jealous
    "*Additional message* 'About lunch today... it's still bothering me. Please be honest with me.'":
        "*Message supplémentaire* 'À propos du déjeuner aujourd'hui... ça me tracasse encore. S'il te plaît, sois honnête avec moi.'",

    // day3_night_seoyeon_apologize
    "'...Thanks for being honest. But I don't like sharing with others.'":
        "'...Merci d'être honnête. Mais je n'aime pas partager avec les autres.'",

    // day3_night_seoyeon_reassure
    "'...Really? I'll remember that. Prove it tomorrow.'":
        "'...Vraiment ? Je m'en souviendrai. Prouve-le-moi demain.'",

    // day3_night_seoyeon_normal
    "'Have you decided where to go tomorrow? You can leave it to me! Good night! 😊'":
        "'Tu as décidé où aller demain ? Tu peux me laisser faire ! Bonne nuit ! 😊'",

    // day3_night_seoyeon_good
    "*Finished chatting with Seoyeon.*":
        "*Fin de la discussion avec Seoyeon.*",

    // day3_night_msg_yuna
    "*Message: 11:59 PM* '...{name}. Tomorrow night. Don't forget.'":
        "*Message : 23h59* '...{name}. Demain soir. N'oublie pas.'",

    // day3_night_yuna_witnessed
    "*Additional message* 'Today after school... I saw you leaving with Seoyeon.'":
        "*Message supplémentaire* 'Aujourd'hui après les cours... je t'ai vu partir avec Seoyeon.'",

    // day3_night_yuna_warning
    "'If you lie to me... you'll regret it.'":
        "'Si tu me mens... tu le regretteras.'",

    // day3_night_yuna_reassure
    "'...Really? I'll believe that. But if you betray me...'":
        "'...Vraiment ? Je veux bien te croire. Mais si tu me trahis...'",

    // day3_night_yuna_threat
    "'...You know, right? 😊'":
        "'...Tu le sais, n'est-ce pas ? 😊'",

    // day3_night_yuna_excuse
    "'...Okay. Friends. I'll believe you.'":
        "'...D'accord. Des amis. Je te crois.'",

    // day3_night_yuna_apologize
    "'...We'll talk when we meet tomorrow. Don't run away.'":
        "'...On en parlera quand on se verra demain. Ne t'enfuis pas.'",

    // day3_night_yuna_knows
    "*Additional message* '...You made promises with others too, didn't you?'":
        "*Message supplémentaire* '...Tu as aussi fait des promesses à d'autres, n'est-ce pas ?'",

    // day3_night_yuna_knows_2
    "'It's okay. You'll come to me in the end.'":
        "'C'est pas grave. Tu finiras par revenir vers moi.'",

    // day3_night_yuna_normal
    "'...See you in your dreams.'":
        "'...À tout à l'heure dans tes rêves.'",

    // day3_night_yuna_dream
    "'...Secret. I'll tell you tomorrow night.'":
        "'...Secret. Je te le dirai demain soir.'",

    // day3_night_yuna_sleep
    "*Finished chatting with Yuna.*":
        "*Fin de la discussion avec Yuna.*",

    // day3_night_msg_dain
    "*Message: 9 PM* 'Hey!! 9 AM at the gym tomorrow!! Don't be late!!! 😤'":
        "*Message : 21h* 'Hé !! 9h au gymnase demain !! Ne sois pas en retard !!! 😤'",

    // day3_night_dain_suspicious
    "*Additional message* 'But... did you really make plans with others too? I heard at lunch.'":
        "*Message supplémentaire* 'Mais... tu as vraiment pris des rendez-vous avec d'autres ? J'ai entendu au déjeuner.'",

    // day3_night_dain_priority
    "'Really?! Hehe, then it's fine! I'll show you something cool tomorrow!'":
        "'Vraiment ?! Héhé, alors c'est bon ! Je te montrerai un truc génial demain !'",

    // day3_night_dain_honest
    "'...I see? Well, can't help it. But you HAVE to come to my practice!'":
        "'...Ah bon ? Bon, tant pis. Mais tu DOIS venir à mon entraînement !'",

    // day3_night_dain_excuse
    "'Hmm... well, if the times work out, I guess it's okay. But focus on me!'":
        "'Hmm... bon, si les horaires s'arrangent, je suppose que ça va. Mais concentre-toi sur moi !'",

    // day3_night_dain_normal
    "*Additional message* 'Let's go get tteokbokki after practice! My treat! 🍜'":
        "*Message supplémentaire* 'On va manger des tteokbokki après l'entraînement ! C'est moi qui régale ! 🍜'",

    // day3_night_dain_good
    "*Finished chatting with Dain.*":
        "*Fin de la discussion avec Dain.*",

    // day3_night_msg_nurse
    "*Message: 11 PM* 'My cute transfer student, still awake? Hehe.'":
        "*Message : 23h* 'Mon mignon petit nouvel élève, encore debout ? Héhé.'",

    // day3_night_nurse_2
    "'You haven't forgotten Sunday evening, right? I'll prepare something special. 😉'":
        "'Tu n'as pas oublié dimanche soir, n'est-ce pas ? Je vais préparer quelque chose de spécial. 😉'",

    // day3_night_nurse_excited
    "'You can look forward to it. Sleep well and see you Sunday, {name}. 💋'":
        "'Tu peux t'y attendre. Dors bien et à dimanche, {name}. 💋'",

    // day3_night_nurse_curious
    "'It's a secret. You'll find out on Sunday. Look forward to it.'":
        "'C'est un secret. Tu le découvriras dimanche. Sois impatient.'",

    // day3_night_msg_teacher
    "*Message: 10 PM* '{name}, you haven't forgotten about the museum on Sunday, have you?'":
        "*Message : 22h* '{name}, tu n'as pas oublié le musée dimanche, n'est-ce pas ?'",

    // day3_night_teacher_2
    "'I'm excited since it's been a while since I had an outing. Sunday at 2 PM, museum entrance.'":
        "'Je suis enthousiaste, ça faisait longtemps que je n'étais pas sortie. Dimanche à 14h, entrée du musée.'",

    // day3_night_teacher_good
    "'Alright, sleep well and see you Sunday. Good night.'":
        "'D'accord, dors bien et à dimanche. Bonne nuit.'",

    // day3_night_back_to_messages
    // Note: the text "*Devrais-je consulter d'autres messages ?*" is ALREADY in French, but the choices are in English
    // We handle choices separately below

    // day3_night_single_message
    "*There's a message.*":
        "*Il y a un message.*",

    // day3_night_no_message
    "*No special messages. What should I do this weekend...*":
        "*Pas de messages particuliers. Qu'est-ce que je vais faire ce week-end...*",

    // day3_night_ignore_all
    "*I decided to just sleep without checking messages. I'll read them tomorrow morning...*":
        "*J'ai décidé de dormir sans consulter les messages. Je les lirai demain matin...*",

    // day3_night_sleep
    "*Just as my eyes are closing... my phone rings. A call.*":
        "*Alors que mes yeux se ferment... mon téléphone sonne. Un appel.*",

    // day3_night_phone_seoyeon
    "*I answer the phone to hear Seoyeon's voice* \"...{name}? I know it's time to sleep. But... I wanted to hear your voice.\"":
        "*Je décroche et j'entends la voix de Seoyeon* \"...{name} ? Je sais qu'il est l'heure de dormir. Mais... je voulais entendre ta voix.\"",

    // day3_night_phone_seoyeon_freetalk
    "*Having a late-night call with Seoyeon. Her voice sounds softer than usual in the dark room.*":
        "*Un appel nocturne avec Seoyeon. Sa voix semble plus douce que d'habitude dans la chambre obscure.*",

    // day3_night_phone_yuna
    "*I answer the phone to hear Yuna's voice* \"...I know it's time to sleep. But... I can't fall asleep.\"":
        "*Je décroche et j'entends la voix de Yuna* \"...Je sais qu'il est l'heure de dormir. Mais... je n'arrive pas à m'endormir.\"",

    // day3_night_phone_yuna_freetalk
    "*Having a late-night call with Yuna. Her quiet breathing reaches my ear.*":
        "*Un appel nocturne avec Yuna. Sa respiration silencieuse parvient à mon oreille.*",

    // day3_night_phone_dain
    "*I answer the phone to hear Dain's voice* \"...Hey, I know it's late. But thinking about tomorrow, I can't sleep!\"":
        "*Je décroche et j'entends la voix de Dain* \"...Hé, je sais qu'il est tard. Mais en pensant à demain, je n'arrive pas à dormir !\"",

    // day3_night_phone_dain_freetalk
    "*Having a late-night call with Dain. Instead of her usual energy, her quiet voice feels new.*":
        "*Un appel nocturne avec Dain. Au lieu de son énergie habituelle, sa voix calme est une découverte.*",

    // day3_night_phone_nurse
    "*I answer the phone to hear the nurse's voice* \"...{name}? Still awake? I couldn't sleep either.\"":
        "*Je décroche et j'entends la voix de l'infirmière* \"...{name} ? Encore debout ? Moi non plus, je n'arrivais pas à dormir.\"",

    // day3_night_phone_nurse_freetalk
    "*Having a late-night call with the school nurse. Her low voice reaches my ear.*":
        "*Un appel nocturne avec l'infirmière scolaire. Sa voix grave parvient à mon oreille.*",

    // day3_night_phone_teacher
    "*I answer the phone to hear the teacher's voice* \"...{name}? Still awake? I know it's bedtime, but...\"":
        "*Je décroche et j'entends la voix du professeur* \"...{name} ? Encore debout ? Je sais qu'il est l'heure de dormir, mais...\"",

    // day3_night_phone_teacher_freetalk
    "*Having a late-night call with the homeroom teacher. Her quiet voice sounds close.*":
        "*Un appel nocturne avec le professeur principal. Sa voix douce semble toute proche.*",

    // day3_night_phone_end
    "*I hang up and put down my phone. The lingering echo of her voice... makes my heart race.*":
        "*Je raccroche et pose mon téléphone. L'écho persistant de sa voix... fait battre mon cœur.*",

    // day3_night_sleep_2
    "*My eyes are closing. Tomorrow is Saturday... What kind of day will it be.*":
        "*Mes yeux se ferment. Demain, c'est samedi... Quelle journée ce sera.*",

    // day3_night_sleep_final
    "*Multiple plans swirl through my mind. Can I satisfy everyone...?*":
        "*Plusieurs rendez-vous tourbillonnent dans ma tête. Est-ce que je peux satisfaire tout le monde... ?*",

    // day3_night_nightmare
    "*...I dream. Voices echo from a dark space.*":
        "*...Je rêve. Des voix résonnent dans un espace sombre.*",

    // day3_night_nightmare_voice1
    "*Seoyeon's voice echoes* \"...You'll only see me, right? You promised. We pinky swore...\"":
        "*La voix de Seoyeon résonne* \"...Tu ne verras que moi, hein ? Tu as promis. On s'est fait une promesse du petit doigt...\"",

    // day3_night_nightmare_voice2
    "*Yuna's voice whispers coldly* \"...I said you'd regret it if you betray me, remember?\"":
        "*La voix de Yuna murmure froidement* \"...Je t'ai dit que tu le regretterais si tu me trahissais, tu te souviens ?\"",

    // day3_night_nightmare_voice3
    "*Dain's voice trembles* \"...Idiot! You said you'd come! You said you wouldn't stand me up...\"":
        "*La voix de Dain tremble* \"...Idiot ! Tu avais dit que tu viendrais ! Tu avais dit que tu ne me poserais pas un lapin...\"",

    // day3_night_nightmare_choice
    "*Hands reach out from the darkness. Whose hand will I take...*":
        "*Des mains se tendent depuis les ténèbres. La main de qui vais-je saisir...*",

    // day3_night_nightmare_end
    "*I reached out, but... there was nothing to hold. Everyone vanished, leaving only darkness and regret.*":
        "*J'ai tendu la main, mais... il n'y avait rien à saisir. Tout le monde a disparu, ne laissant que les ténèbres et le regret.*",

    // day3_night_nightmare_wake
    "*...I snap awake. My heart is pounding like crazy. It was a dream. But... what will tomorrow bring?*":
        "*...Je me réveille en sursaut. Mon cœur bat comme un fou. C'était un rêve. Mais... que nous réserve demain ?*",

    // day3_night_peaceful
    "*A peaceful night. I'm looking forward to tomorrow.*":
        "*Une nuit paisible. J'ai hâte d'être à demain.*",

    // day3_night_loyalty_seoyeon
    "*...Just thinking about Seoyeon makes me smile. Tomorrow is our time together. I'll make sure to tell her how I truly feel.*":
        "*...Rien que de penser à Seoyeon, je souris. Demain, c'est notre moment à nous. Je m'assurerai de lui dire ce que je ressens vraiment.*",

    // day3_night_loyalty_yuna
    "*...Just thinking about Yuna makes my heart race. Tomorrow night, just the two of us. Will I finally see the real Yuna?*":
        "*...Rien que de penser à Yuna, mon cœur s'emballe. Demain soir, rien que nous deux. Est-ce que je verrai enfin la vraie Yuna ?*",

    // day3_night_loyalty_dain
    "*...Thinking of Dain's smile makes me smile too. I wonder how happy she'll be when I show up to watch her practice tomorrow.*":
        "*...Penser au sourire de Dain me fait sourire aussi. Je me demande à quel point elle sera contente quand je viendrai la voir s'entraîner demain.*",

    // day3_night_loyalty_nurse
    "*...The school nurse's face comes to mind. It's a forbidden relationship, but... I can't hide these feelings.*":
        "*...Le visage de l'infirmière scolaire me revient en tête. C'est une relation interdite, mais... je ne peux pas cacher ces sentiments.*",

    // day3_night_loyalty_teacher
    "*...The homeroom teacher's smile comes to mind. We're teacher and student, but... my feelings are real.*":
        "*...Le sourire du professeur principal me revient en tête. On est professeur et élève, mais... mes sentiments sont sincères.*",

    // day3_final_scene
    "*Friday night deepens... Tomorrow is finally Saturday.*":
        "*La nuit de vendredi s'approfondit... Demain, c'est enfin samedi.*",
};

// Choices translations: English choice -> French choice
const choiceTranslations = {
    // day3_night_check_messages choices
    "Seoyeon's message": "Le message de Seoyeon",
    "Yuna's message": "Le message de Yuna",
    "Dain's message": "Le message de Dain",
    "School Nurse's message": "Le message de l'Infirmière Scolaire",
    "Homeroom Teacher's message": "Le message du Professeur Principal",
    "Just go to sleep": "Aller dormir",

    // day3_night_seoyeon_suspicious choices
    "'Yes, only you!'": "'Oui, toi seule !'",
    "'Let me be honest...'": "'Laisse-moi être honnête...'",
    "*Leave on read*": "*Laisser en vu*",

    // day3_night_seoyeon_jealous choices
    "'Sorry, I couldn't say no to anyone...'": "'Désolé, je n'ai pas pu dire non...'",
    "'You're the most important to me'": "'Tu es la plus importante pour moi'",
    // "*Leave on read*" already mapped above

    // day3_night_seoyeon_normal choices
    "'I'll leave it to you! Good night!'": "'Je te fais confiance ! Bonne nuit !'",
    "'Thanks, see you tomorrow!'": "'Merci, à demain !'",

    // day3_night_yuna_warning choices
    // "'You're the most important to me'" already mapped above
    "'Seoyeon and I are just friends'": "'Seoyeon et moi, on est juste amis'",
    "'...Sorry'": "'...Pardon'",

    // day3_night_yuna_normal choices
    "'Yeah, good night'": "'Ouais, bonne nuit'",
    "'What kind of dreams?'": "'Quel genre de rêves ?'",

    // day3_night_dain_suspicious choices
    "'Your practice is most important!'": "'Ton entraînement est le plus important !'",
    "'I do have other plans...'": "'J'ai d'autres plans...'",
    "'The times are different so it's fine'": "'Les horaires sont différents alors ça va'",

    // day3_night_dain_normal choices
    "'Sounds great! Looking forward to it!'": "'Super ! J'ai hâte !'",
    "'lol okay!'": "'lol d'accord !'",

    // day3_night_nurse_2 choices
    "'I'm looking forward to it!'": "'J'ai hâte !'",
    "'What is it?'": "'C'est quoi ?'",

    // day3_night_teacher_2 choices
    "'Yes, I'm excited!'": "'Oui, j'ai hâte !'",
    "'Good night!'": "'Bonne nuit !'",

    // day3_night_back_to_messages choices
    "Go to sleep": "Aller dormir",

    // day3_night_nightmare_choice choices
    "*Take Seoyeon's hand*": "*Prendre la main de Seoyeon*",
    "*Take Yuna's hand*": "*Prendre la main de Yuna*",
    "*Take Dain's hand*": "*Prendre la main de Dain*",
    "*Don't take anyone's hand*": "*Ne prendre la main de personne*",
};

// Context translations for free_talk scenes
const contextTranslations = {
    "Late-night phone call. Seoyeon called saying 'I wanted to hear your voice.' A sweet late-night conversation. Seoyeon suddenly called before bed.":
        "Appel nocturne. Seoyeon a appelé en disant 'Je voulais entendre ta voix.' Une douce conversation nocturne. Seoyeon a appelé soudainement avant de dormir.",

    "Late-night phone call. Yuna called saying 'I can't fall asleep.' A quiet and intimate late-night conversation. Her soft breathing feels close.":
        "Appel nocturne. Yuna a appelé en disant 'Je n'arrive pas à m'endormir.' Une conversation nocturne calme et intime. Sa respiration douce semble toute proche.",

    "Late-night phone call. Dain called saying 'Thinking about tomorrow, I can't sleep!' Unusually quiet Dain. A soft late-night atmosphere.":
        "Appel nocturne. Dain a appelé en disant 'En pensant à demain, je n'arrive pas à dormir !' Dain inhabituellement calme. Une atmosphère nocturne douce.",

    "Late-night phone call. The school nurse called saying 'I couldn't sleep.' Her low, gentle voice. A forbidden love's late-night call.":
        "Appel nocturne. L'infirmière scolaire a appelé en disant 'Je n'arrivais pas à dormir.' Sa voix grave et douce. L'appel nocturne d'un amour interdit.",

    "Late-night phone call. The homeroom teacher called saying 'I know it's bedtime, but...' Her quiet voice. A forbidden love's late-night call.":
        "Appel nocturne. Le professeur principal a appelé en disant 'Je sais qu'il est l'heure de dormir, mais...' Sa voix douce. L'appel nocturne d'un amour interdit.",
};

// ============================================================================
// Processing: Parse and replace text in fr blocks
// ============================================================================

// We'll use a state machine approach to find "fr" blocks and replace text within them
// Strategy: Use regex to find all fr blocks and replace their content

// Process text fields in fr blocks
for (const [eng, fra] of Object.entries(textTranslations)) {
    // Escape special regex characters in the English text
    const escaped = eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Build a pattern that matches "text": "ENGLISH" inside fr blocks
    // We'll do direct string replacement since each text is unique
    const oldStr = JSON.stringify(eng);
    const newStr = JSON.stringify(fra);

    // We need to ensure we only replace within "fr" blocks
    // Strategy: find each occurrence and check context
    let searchFrom = 0;
    while (true) {
        const idx = content.indexOf(oldStr, searchFrom);
        if (idx === -1) break;

        // Check if this is within a "fr" block by looking backwards for "fr":
        const before = content.substring(Math.max(0, idx - 500), idx);

        // Check if we're inside a "fr" block - look for the nearest language key
        // Find the last "fr": or "en": or "ko": or "ja": or "es": before this position
        const frMatch = before.lastIndexOf('"fr"');
        const enMatch = before.lastIndexOf('"en"');
        const koMatch = before.lastIndexOf('"ko"');
        const jaMatch = before.lastIndexOf('"ja"');
        const esMatch = before.lastIndexOf('"es"');

        const maxNonFr = Math.max(enMatch, koMatch, jaMatch, esMatch);

        if (frMatch > maxNonFr) {
            // We're inside a "fr" block - replace
            content = content.substring(0, idx) + newStr + content.substring(idx + oldStr.length);
            searchFrom = idx + newStr.length;
        } else {
            searchFrom = idx + oldStr.length;
        }
    }
}

// Process choice translations in fr blocks
for (const [eng, fra] of Object.entries(choiceTranslations)) {
    const oldStr = JSON.stringify(eng);
    const newStr = JSON.stringify(fra);

    let searchFrom = 0;
    while (true) {
        const idx = content.indexOf(oldStr, searchFrom);
        if (idx === -1) break;

        const before = content.substring(Math.max(0, idx - 800), idx);

        const frMatch = before.lastIndexOf('"fr"');
        const enMatch = before.lastIndexOf('"en"');
        const koMatch = before.lastIndexOf('"ko"');
        const jaMatch = before.lastIndexOf('"ja"');
        const esMatch = before.lastIndexOf('"es"');

        const maxNonFr = Math.max(enMatch, koMatch, jaMatch, esMatch);

        if (frMatch > maxNonFr) {
            content = content.substring(0, idx) + newStr + content.substring(idx + oldStr.length);
            searchFrom = idx + newStr.length;
        } else {
            searchFrom = idx + oldStr.length;
        }
    }
}

// Process context translations in fr blocks
for (const [eng, fra] of Object.entries(contextTranslations)) {
    const oldStr = JSON.stringify(eng);
    const newStr = JSON.stringify(fra);

    let searchFrom = 0;
    while (true) {
        const idx = content.indexOf(oldStr, searchFrom);
        if (idx === -1) break;

        const before = content.substring(Math.max(0, idx - 800), idx);

        const frMatch = before.lastIndexOf('"fr"');
        const enMatch = before.lastIndexOf('"en"');
        const koMatch = before.lastIndexOf('"ko"');
        const jaMatch = before.lastIndexOf('"ja"');
        const esMatch = before.lastIndexOf('"es"');

        const maxNonFr = Math.max(enMatch, koMatch, jaMatch, esMatch);

        if (frMatch > maxNonFr) {
            content = content.substring(0, idx) + newStr + content.substring(idx + oldStr.length);
            searchFrom = idx + newStr.length;
        } else {
            searchFrom = idx + oldStr.length;
        }
    }
}

// Write the file back
fs.writeFileSync(filePath, content, 'utf8');

console.log('French translations applied successfully!');

// ============================================================================
// Verification: Check for remaining English text in fr blocks
// ============================================================================

// Re-read and verify
const verified = fs.readFileSync(filePath, 'utf8');

// Find all fr blocks and check their text content
const frBlockRegex = /"fr"\s*:\s*\{[^}]*(?:\{[^}]*\}[^}]*)*\}/g;
let match;
let frBlockCount = 0;
let englishRemaining = 0;

// More robust: parse line by line and track state
const lines = verified.split('\n');
let inFrBlock = false;
let braceDepth = 0;
let frBlockLines = [];
let currentBlock = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.includes('"fr"') && line.includes('{')) {
        inFrBlock = true;
        braceDepth = 0;
        currentBlock = [];
    }

    if (inFrBlock) {
        currentBlock.push(line);
        for (const ch of line) {
            if (ch === '{') braceDepth++;
            if (ch === '}') braceDepth--;
        }
        if (braceDepth <= 0) {
            inFrBlock = false;
            frBlockCount++;
            const blockText = currentBlock.join('\n');

            // Check for English patterns in text fields (skip name fields)
            const textMatch = blockText.match(/"text"\s*:\s*"([^"]*)"/);
            if (textMatch) {
                const text = textMatch[1];
                // Simple heuristic: if it contains common English words and no French characters
                if (text.length > 0 &&
                    /\b(the|you|my|I'm|I'll|is|are|was|were|have|has|will|can|don't|didn't|won't|shouldn't|couldn't|I\s|me\s|her\s|his\s|but|and|with|from|that|this|what|who|how|when|where|not|just|only|still|about|after|before|between|through|tomorrow|tonight|today|yesterday|morning|night|sleep|dream|message|phone|remember|forget|really|looking|forward)\b/i.test(text) &&
                    !/[àâäéèêëïîôùûüÿçœæ]/i.test(text)) {
                    englishRemaining++;
                    console.log(`WARNING - Line ~${i}: Possible English text in fr block: "${text.substring(0, 80)}..."`);
                }
            }

            // Check choices
            const choicesMatch = blockText.match(/"choices"\s*:\s*\[([\s\S]*?)\]/);
            if (choicesMatch) {
                const choicesStr = choicesMatch[1];
                const choices = choicesStr.match(/"([^"]*)"/g);
                if (choices) {
                    for (const choice of choices) {
                        const choiceText = choice.replace(/^"|"$/g, '');
                        if (choiceText.length > 0 &&
                            /\b(the|you|my|I'm|I'll|is|are|was|were|have|has|will|can|don't|just|sleep|message|hand|take|leave)\b/i.test(choiceText) &&
                            !/[àâäéèêëïîôùûüÿçœæ]/i.test(choiceText)) {
                            englishRemaining++;
                            console.log(`WARNING - Line ~${i}: Possible English choice in fr block: "${choiceText}"`);
                        }
                    }
                }
            }

            // Check context
            const contextMatch = blockText.match(/"context"\s*:\s*"([^"]*)"/);
            if (contextMatch) {
                const contextText = contextMatch[1];
                if (contextText.length > 0 &&
                    /\b(Late-night|phone call|called saying|conversation|atmosphere)\b/i.test(contextText) &&
                    !/[àâäéèêëïîôùûüÿçœæ]/i.test(contextText)) {
                    englishRemaining++;
                    console.log(`WARNING - Line ~${i}: Possible English context in fr block: "${contextText.substring(0, 80)}..."`);
                }
            }
        }
    }
}

console.log(`\nTotal fr blocks found: ${frBlockCount}`);
console.log(`Possible remaining English texts: ${englishRemaining}`);

if (englishRemaining === 0) {
    console.log('\n✓ All French translations applied successfully!');
} else {
    console.log('\n✗ Some English text may remain. Please check the warnings above.');
}
