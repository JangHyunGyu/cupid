const fs = require('fs');

const filePath = 'd:\\workspace\\cupid\\assets\\js\\scenario\\day3_3_afterschool.js';
let content = fs.readFileSync(filePath, 'utf8');

// Translation map: English text -> French text
// Each key is the exact English string found in fr blocks
const translations = {
    // --- text fields ---
    "*Finally, homeroom is over. Friday after school... Freedom mixed with strange tension.*":
        "*Enfin, la classe est terminée. Vendredi après les cours... La liberté se mêle à une étrange tension.*",

    "*As I pack my bag...*":
        "*Alors que je prépare mon sac...*",

    "*The classroom atmosphere is heavy. Must be because of lunch...*":
        "*L'atmosphère de la classe est lourde. Ça doit être à cause du déjeuner...*",

    "\"...{name}, can we talk for a moment?\"":
        "\"...{name}, on peut parler un instant ?\"",

    "*Seoyeon takes me to the hallway. Her expression looks serious.*":
        "*Seoyeon m'emmène dans le couloir. Son expression est sérieuse.*",

    "\"About lunch... Did you really make weekend plans with all of us?\"":
        "\"À propos du déjeuner... Tu as vraiment pris des engagements pour le week-end avec nous toutes ?\"",

    "*How should I answer...*":
        "*Comment devrais-je répondre...*",

    "\"...Yes. Sorry. I couldn't turn anyone down...\"":
        "\"...Oui. Désolé. Je n'ai pas pu refuser qui que ce soit...\"",

    "\"...Thanks for being honest. But I don't like that.\"":
        "\"...Merci d'être honnête. Mais ça ne me plaît pas.\"",

    "\"If I'm really special to you... only meet me. Otherwise, I have options too.\"":
        "\"Si je suis vraiment spéciale pour toi... ne vois que moi. Sinon, j'ai d'autres options aussi.\"",

    "\"The times are all different... so I thought I could meet everyone...\"":
        "\"Les horaires sont tous différents... alors j'ai pensé que je pouvais voir tout le monde...\"",

    "\"...Don't you see that's the problem?\"":
        "\"...Tu ne vois pas que c'est ça le problème ?\"",

    "\"...Fine. We'll see this weekend.\"":
        "\"...Très bien. On verra ce week-end.\"",

    "\"Seoyeon, you're the only one I'm sincere about. The others are just friends...\"":
        "\"Seoyeon, tu es la seule pour qui je suis sincère. Les autres ne sont que des amies...\"",

    "\"...Really? Can I trust that?\"":
        "\"...Vraiment ? Je peux te faire confiance ?\"",

    "*Seoyeon smiles. But... is this right? What should I tell the others?*":
        "*Seoyeon sourit. Mais... est-ce que c'est bien ? Qu'est-ce que je vais dire aux autres ?*",

    "*The atmosphere was a bit weird during lunch... It should be fine, right?*":
        "*L'ambiance était un peu bizarre au déjeuner... Ça devrait aller, non ?*",

    "*As I stand up to pack my bag, someone approaches.*":
        "*Alors que je me lève pour préparer mon sac, quelqu'un s'approche.*",

    "\"...{name}, do you have a minute?\"":
        "\"...{name}, tu as une minute ?\"",

    "\"About lunch... Sorry, I think I was being sensitive.\"":
        "\"À propos du déjeuner... Désolée, je crois que j'étais un peu susceptible.\"",

    "\"But honestly... seeing you close with Yuna or Dain bothers me a little.\"":
        "\"Mais honnêtement... te voir proche de Yuna ou Dain, ça me dérange un peu.\"",

    "\"...Really? Hearing that... I feel a bit relieved.\"":
        "\"...Vraiment ? En entendant ça... je me sens un peu soulagée.\"",

    "\"...Right. Friends. Got it.\"":
        "\"...D'accord. Des amis. Compris.\"",

    "\"W-what! That's not... Ugh, forget it!\"":
        "\"Q-quoi ! C'est pas... Roh, laisse tomber !\"",

    // Yuna approach (note: "\"...{name}.\"" is just the name, keep as-is since it's minimal)

    "\"At lunch... you chose Seoyeon.\"":
        "\"Au déjeuner... tu as choisi Seoyeon.\"",

    "*Yuna's eyes are colder than usual.*":
        "*Les yeux de Yuna sont plus froids que d'habitude.*",

    "\"...It's okay. We have tomorrow.\"":
        "\"...C'est pas grave. On a demain.\"",

    "\"...I won't forget those words.\"":
        "\"...Je n'oublierai pas ces mots.\"",

    "\"...Upset? No. I just... wanted to confirm.\"":
        "\"...Vexée ? Non. Je voulais juste... confirmer.\"",

    "\"Remember, {name}. If you lie to me... you know, right?\"":
        "\"Souviens-toi, {name}. Si tu me mens... tu sais ce qui arrivera, pas vrai ?\"",

    "\"Hey, {name}!\"":
        "\"Hé, {name} !\"",

    "\"Why didn't you include me at lunch?! I wanted to eat together too!\"":
        "\"Pourquoi tu ne m'as pas incluse au déjeuner ?! Moi aussi je voulais manger ensemble !\"",

    "*Dain pouts and complains.*":
        "*Dain boude et se plaint.*",

    "\"Hmph, you better! It's a promise!\"":
        "\"Hmph, t'as intérêt ! C'est une promesse !\"",

    "\"Really?! Then I forgive you! Look forward to my spike!\"":
        "\"Vraiment ?! Alors je te pardonne ! Prépare-toi à voir mon spike !\"",

    "\"W-what! Cute my foot! Dummy!\"":
        "\"Q-quoi ! Mignonne mon œil ! Idiot !\"",

    "*A peaceful after school. Let me get ready to go home.*":
        "*Un après-midi paisible après les cours. Allez, je me prépare à rentrer.*",

    "*As I'm about to leave through the school gate...*":
        "*Alors que je m'apprête à passer le portail de l'école...*",

    "*Someone seems to be waiting.*":
        "*Quelqu'un semble attendre.*",

    "*Uh... why is everyone at the gate...?*":
        "*Euh... pourquoi tout le monde est au portail...?*",

    "*Several people are standing at the school gate. Are they all waiting for me...?*":
        "*Plusieurs personnes se tiennent devant le portail de l'école. Elles m'attendent toutes...?*",

    "\"Hey, {name}! Let's walk together... huh?\"":
        "\"Hé, {name} ! On rentre ensemble... hein ?\"",

    "\"...We meet again.\"":
        "\"...On se retrouve encore.\"",

    "*Seoyeon and Yuna are glaring at each other. The atmosphere is tense.*":
        "*Seoyeon et Yuna se fusillent du regard. L'atmosphère est tendue.*",

    "\"Oh? Seoyeon's here too? I was gonna walk home with {name}!\"":
        "\"Oh ? Seoyeon est là aussi ? Moi je voulais rentrer avec {name} !\"",

    // Note: day3_afternoon_choose_walk fr choices are already in French ("Aller avec Seoyeon", etc.)
    // But the text field is still in English
    "*Who should I walk with...?*":
        "*Avec qui devrais-je marcher...?*",

    "\"Seoyeon, let's go together.\"":
        "\"Seoyeon, allons-y ensemble.\"",

    "\"Sure! Let's go!\"":
        "\"Oui ! Allons-y !\"",

    "*I feel eyes on my back... but right now, walking with Seoyeon feels nice.*":
        "*Je sens des regards dans mon dos... mais en ce moment, marcher avec Seoyeon, c'est agréable.*",

    "*Yuna is watching us from a distance. That look... is scary.*":
        "*Yuna nous observe de loin. Ce regard... fait peur.*",

    "\"Hmph! I'm going first!\"":
        "\"Hmph ! Je pars devant !\"",

    "\"...Hey, {name}. Let's take the riverside path back. The sunset is beautiful today.\"":
        "\"...Hé, {name}. Prenons le chemin le long de la rivière pour rentrer. Le coucher de soleil est magnifique aujourd'hui.\"",

    "*The sunset reflects off the river, sparkling. Seoyeon's face glows with an orange tint — she looks radiant.*":
        "*Le coucher de soleil se reflète sur la rivière, scintillant. Le visage de Seoyeon brille d'une teinte orangée — elle est radieuse.*",

    "*She suddenly stops and stands in front of me* \"...{name}. Can I ask you something?\"":
        "*Elle s'arrête soudain et se place face à moi* \"...{name}. Je peux te demander quelque chose ?\"",

    "*Against the sunset backdrop, Seoyeon's eyes shine* \"Tomorrow... you'll only meet me, right?\"":
        "*Avec le coucher de soleil en toile de fond, les yeux de Seoyeon brillent* \"Demain... tu ne verras que moi, pas vrai ?\"",

    "*Seoyeon holds out her pinky finger* \"Then let's pinky promise. If you break it... you swallow ten thousand needles?\"":
        "*Seoyeon tend son petit doigt* \"Alors faisons une promesse de petit doigt. Si tu la romps... tu avales dix mille aiguilles ?\"",

    "*Seoyeon's hand trembles before she grips mine tight* \"...Dummy. What if someone sees us holding hands here.\"":
        "*La main de Seoyeon tremble avant de serrer la mienne fort* \"...Idiot. Et si quelqu'un nous voyait se tenir la main ici.\"",

    "*Looking slightly disappointed, she forces a smile* \"...Okay. You'll try, right?\"":
        "*L'air légèrement déçue, elle force un sourire* \"...D'accord. Tu vas essayer, hein ?\"",

    // free_talk text
    "*Walking alongside Seoyeon down the riverside path as the sunset deepens.*":
        "*Je marche aux côtés de Seoyeon le long de la rivière alors que le coucher de soleil s'intensifie.*",

    "\"It's our time together, just the two of us. Right?\"":
        "\"C'est notre moment à nous, rien que tous les deux. Pas vrai ?\"",

    "*...'Just the two of us'. My other plans flash through my mind.*":
        "*...\"Rien que tous les deux\". Mes autres engagements me traversent l'esprit.*",

    "\"Hehe, me too! See you tomorrow then! Sleep well!\"":
        "\"Héhé, moi aussi ! À demain alors ! Dors bien !\"",

    "\"...What? You have other plans too?\"":
        "\"...Quoi ? Tu as d'autres plans aussi ?\"",

    "\"...Fine. We'll see this weekend who you really like.\"":
        "\"...Très bien. On verra ce week-end qui tu aimes vraiment.\"",

    "\"Yuna, let's walk together.\"":
        "\"Yuna, rentrons ensemble.\"",

    "\"...Okay.\"":
        "\"...D'accord.\"",

    "\"...Okay. Be careful going home.\"":
        "\"...D'accord. Fais attention en rentrant.\"",

    "*Walking with Yuna down a quiet path. She doesn't say much, but the atmosphere is comfortable.*":
        "*Je marche avec Yuna sur un chemin tranquille. Elle ne dit pas grand-chose, mais l'atmosphère est agréable.*",

    "*A small cat is curled up by the roadside. Yuna suddenly stops.*":
        "*Un petit chat est blotti au bord de la route. Yuna s'arrête soudain.*",

    "*Quietly kneeling down to pet the cat* \"...I'm glad you're with me.\"":
        "*S'agenouillant doucement pour caresser le chat* \"...Je suis contente que tu sois avec moi.\"",

    "*The way Yuna pets the cat... she looks so gentle.*":
        "*La façon dont Yuna caresse le chat... elle a l'air si douce.*",

    "*Our hands meet on top of the cat* \"...Warm.\"":
        "*Nos mains se rencontrent sur le chat* \"...C'est chaud.\"",

    "*She freezes when I pat her head* \"...You're petting me?\"":
        "*Elle se fige quand je lui caresse la tête* \"...Tu me caresses, moi ?\"",

    "*Closing her eyes* \"...Don't stop. Just a little more.\"":
        "*Fermant les yeux* \"...N'arrête pas. Encore un peu.\"",

    "*Holding the cat up* \"...This one looks like you, {name}. Warm and... clueless.\"":
        "*Soulevant le chat* \"...Celui-là te ressemble, {name}. Chaleureux et... naïf.\"",

    // free_talk text (yuna)
    "*Walking side by side with Yuna. Her expression is softer than usual.*":
        "*Je marche côte à côte avec Yuna. Son expression est plus douce que d'habitude.*",

    "\"...{name}. Don't forget tomorrow night.\"":
        "\"...{name}. N'oublie pas demain soir.\"",

    "\"School back gate. 8 PM. Don't... be late.\"":
        "\"Portail arrière de l'école. 20h. Ne sois pas... en retard.\"",

    "*There's a strange pressure in Yuna's voice.*":
        "*Il y a une étrange pression dans la voix de Yuna.*",

    "\"...Good. I'll trust you.\"":
        "\"...Bien. Je te fais confiance.\"",

    "\"...That can't happen. Absolutely not.\"":
        "\"...Ça ne doit pas arriver. Absolument pas.\"",

    "*Yuna's eyes seemed to flash oddly for a moment... Must be my imagination?*":
        "*Les yeux de Yuna ont semblé briller étrangement un instant... C'est sûrement mon imagination ?*",

    "\"Dain, let's walk together.\"":
        "\"Dain, rentrons ensemble.\"",

    "\"Yay! Let's go!\"":
        "\"Youpi ! Allons-y !\"",

    "\"Hey, {name}! See that convenience store? I'm thirsty!\"":
        "\"Hé, {name} ! Tu vois cette supérette ? J'ai soif !\"",

    "*Dain dashes to the convenience store. I follow and find her stopped at the ice cream section.*":
        "*Dain fonce vers la supérette. Je la suis et la retrouve arrêtée au rayon des glaces.*",

    "\"You pick for me! If I pick, I'll want to buy everything...\"":
        "\"Choisis pour moi ! Si c'est moi qui choisis, je vais vouloir tout acheter...\"",

    "*Taking the ice cream* \"...Thanks. {name} is the best!\"":
        "*Prenant la glace* \"...Merci. {name} est le meilleur !\"",

    "*Her face turns red at the idea of sharing* \"Th-that's sharing?! That's an indirect kiss! N-no! It's just sharing!\"":
        "*Son visage rougit à l'idée de partager* \"C-c'est ça partager ?! C'est un baiser indirect ! N-non ! On partage juste !\"",

    "*Dain and I sit side by side on a park bench nearby. We eat ice cream while watching the sunset.*":
        "*Dain et moi sommes assis côte à côte sur un banc du parc. On mange des glaces en regardant le coucher de soleil.*",

    "*Suddenly getting quiet* \"...{name}. Actually, I couldn't sleep last night.\"":
        "*Devenant soudain silencieuse* \"...{name}. En fait, je n'ai pas pu dormir la nuit dernière.\"",

    "\"...You said you'd come to my practice tomorrow... You'll really come, right? You're not gonna stand me up?\"":
        "\"...Tu as dit que tu viendrais à mon entraînement demain... Tu viendras vraiment, hein ? Tu ne vas pas me poser un lapin ?\"",

    "*Her eyes light up* \"...Really? Promise!\"":
        "*Ses yeux s'illuminent* \"...Vraiment ? Promis !\"",

    "*Patting her head makes Dain's face turn red* \"Hey, I'm not a kid! ...But don't stop.\"":
        "*Lui caresser la tête fait rougir Dain* \"Hé, je suis pas une gamine ! ...Mais n'arrête pas.\"",

    // free_talk text (dain)
    "*Eating ice cream and chatting with Dain on a park bench.*":
        "*Je mange des glaces et discute avec Dain sur un banc du parc.*",

    "\"I want to show you my cool side!\"":
        "\"Je veux te montrer mon côté cool !\"",

    "\"Great! Be prepared!\"":
        "\"Super ! Prépare-toi !\"",

    "\"Hehe... Hearing that makes me want to work even harder!\"":
        "\"Héhé... Entendre ça me donne envie de travailler encore plus dur !\"",

    "\"Sorry, I want to go alone today.\"":
        "\"Désolé, j'ai envie de rentrer seul aujourd'hui.\"",

    "*Everyone's expressions harden. I can feel their disappointment.*":
        "*Les expressions de tout le monde se figent. Je sens leur déception.*",

    "*...No one's here. Must've been my imagination. Silly me for getting my hopes up.*":
        "*...Personne n'est là. C'était sûrement mon imagination. Quel idiot de m'être fait des idées.*",

    "*I head home alone. I wonder what tomorrow will bring...*":
        "*Je rentre seul à la maison. Je me demande ce que demain nous réserve...*",

    "*Someone is standing in front of the gate.*":
        "*Quelqu'un se tient devant le portail.*",

    "\"{name}! Let's walk together!\"":
        "\"{name} ! Rentrons ensemble !\"",

    "\"...I was waiting.\"":
        "\"...Je t'attendais.\"",

    "\"Hey! Hurry up! Let's walk together!\"":
        "\"Hé ! Dépêche-toi ! Rentrons ensemble !\"",

    // Teacher
    "\"{name}, do you have a minute? Want me to give you a ride?\"":
        "\"{name}, tu as une minute ? Tu veux que je te raccompagne en voiture ?\"",

    "*I got in the teacher's car. The road home is bathed in sunset.*":
        "*Je suis monté dans la voiture du professeur. La route du retour baigne dans le coucher de soleil.*",

    "*Driving quietly* \"...{name}. Being alone together like this... feels a bit strange.\"":
        "*Conduisant en silence* \"...{name}. Être seuls ensemble comme ça... c'est un peu étrange.\"",

    "*We stop at a red light. The teacher quietly touches the back of my hand.*":
        "*On s'arrête à un feu rouge. Le professeur effleure doucement le dos de ma main.*",

    "*The teacher holds her breath* \"...When the light changes, I'm letting go. Promise.\"":
        "*Le professeur retient son souffle* \"...Quand le feu passera au vert, je lâche. Promis.\"",

    "*The teacher smiles wistfully* \"...You're right. Teacher needs to come to her senses.\"":
        "*Le professeur sourit avec mélancolie* \"...Tu as raison. Il faut que je reprenne mes esprits.\"",

    "*Startled at first... then quietly strokes my hair* \"...The light hasn't changed yet.\"":
        "*Surprise au début... puis me caresse doucement les cheveux* \"...Le feu n'a pas encore changé.\"",

    // free_talk text (teacher)
    "*Riding in the teacher's car on the way home.*":
        "*Dans la voiture du professeur sur le chemin du retour.*",

    "*Arriving at my house* \"...You haven't forgotten our museum date on Sunday, right? I'll be looking forward to it.\"":
        "*Arrivant chez moi* \"...Tu n'as pas oublié notre sortie au musée dimanche, n'est-ce pas ? J'ai hâte d'y être.\"",

    // Nurse
    "\"Oh my, {name}. I came out to leave and ran into you? Hehe.\"":
        "\"Oh là là, {name}. Je sortais pour partir et je tombe sur toi ? Héhé.\"",

    "*Walking side by side with the nurse. She glances at the back of my hand.*":
        "*Je marche côte à côte avec l'infirmière. Elle jette un coup d'œil au dos de ma main.*",

    "*She suddenly takes my hand and puts a band-aid on it* \"...There's a scratch here? You didn't notice.\"":
        "*Elle prend soudain ma main et y colle un pansement* \"...Il y a une égratignure ici ? Tu n'avais pas remarqué.\"",

    "*There's no scratch... Did she just want to hold my hand?*":
        "*Il n'y a pas d'égratignure... Elle voulait juste me tenir la main ?*",

    "*Her face turns red as if caught* \"...Hmm, sharp eyes? It's just... teacher's mark.\"":
        "*Son visage rougit comme si elle s'était fait prendre* \"...Hmm, l'œil vif ? C'est juste... la marque de l'infirmière.\"",

    "*Surprised, she stops... then holds on tight* \"...Dangerous boy. Let's stay like this for ten seconds.\"":
        "*Surprise, elle s'arrête... puis serre fort* \"...Garçon dangereux. Restons comme ça dix secondes.\"",

    // free_talk text (nurse)
    "*Walking home alongside the school nurse.*":
        "*Je rentre en marchant aux côtés de l'infirmière scolaire.*",

    "\"Don't forget Sunday 7 PM, okay? I'll be waiting for you.\"":
        "\"N'oublie pas dimanche 19h, d'accord ? Je t'attendrai.\"",
};

// Choices translation map
const choiceTranslations = {
    "Admit honestly": "Admettre honnêtement",
    "Say different times make it okay": "Dire que les horaires différents rendent ça acceptable",
    "Say only Seoyeon is sincere": "Dire que seule Seoyeon est sincère",
    "\"You're my favorite, Seoyeon\"": "\"Tu es ma préférée, Seoyeon\"",
    "\"They're all precious friends\"": "\"Ce sont toutes des amies précieuses\"",
    "\"Are you jealous?\"": "\"Tu es jalouse ?\"",
    "\"I'm sorry, Yuna\"": "\"Je suis désolé, Yuna\"",
    "\"I'll spend time with you tomorrow\"": "\"Je passerai du temps avec toi demain\"",
    "\"Why, are you upset?\"": "\"Pourquoi, tu es vexée ?\"",
    "\"Sorry, let's eat together next time\"": "\"Désolé, mangeons ensemble la prochaine fois\"",
    "\"I'll come to your practice tomorrow\"": "\"Je viendrai à ton entraînement demain\"",
    "\"Cute, are you angry?\"": "\"Mignonne, tu es en colère ?\"",
    // day3_afternoon_choose_walk choices are already French in the file, skip them
    "\"Of course\"": "\"Bien sûr\"",
    "*Take Seoyeon's hand*": "*Prendre la main de Seoyeon*",
    "\"...I'll try\"": "\"...Je vais essayer\"",
    "\"Yeah, I'm excited too\"": "\"Oui, moi aussi j'ai hâte\"",
    "\"Actually...\" (Be honest)": "\"En fait...\" (Être honnête)",
    "*Pet the cat too*": "*Caresser le chat aussi*",
    "*Pat Yuna's head*": "*Caresser la tête de Yuna*",
    "*Watch quietly*": "*Observer en silence*",
    "\"I definitely won't be late\"": "\"Je ne serai absolument pas en retard\"",
    "\"What if I'm late?\"": "\"Et si je suis en retard ?\"",
    "*Pick one for her*": "*En choisir une pour elle*",
    "*Buy two and share one*": "*En acheter deux et en partager une*",
    "\"I would never stand you up\"": "\"Je ne te poserai jamais un lapin\"",
    "*Pat Dain's head*": "*Caresser la tête de Dain*",
    "\"Looking forward to it!\"": "\"J'ai hâte !\"",
    "\"I'll cheer for you\"": "\"Je t'encouragerai\"",
    "\"Yes, thank you!\"": "\"Oui, merci !\"",
    "\"It's okay, I'll walk\"": "\"C'est bon, je marcherai\"",
    "*Hold her hand*": "*Lui prendre la main*",
    "\"Teacher, we shouldn't\"": "\"Professeur, on ne devrait pas\"",
    "*Quietly lean my head on her shoulder*": "*Poser doucement ma tête sur son épaule*",
    "\"Shall we walk together?\"": "\"On marche ensemble ?\"",
    "\"Have a good evening\"": "\"Bonne soirée\"",
    "\"There's no scratch though?\"": "\"Mais il n'y a pas d'égratignure ?\"",
    "*Just hold her hand*": "*Simplement lui tenir la main*",
};

// Context translations for free_talk blocks
const contextTranslations = {
    "Walking with Seoyeon along the sunset riverside. She asked 'Will you only meet me tomorrow?' and they had a pinky promise/hand-holding moment. Sweet and romantic atmosphere.":
        "En train de marcher avec Seoyeon le long de la rivière au coucher du soleil. Elle a demandé « Tu ne verras que moi demain ? » et ils ont eu un moment de promesse de petit doigt/main dans la main. Ambiance douce et romantique.",
    "Walking home with Yuna after petting a cat together. Yuna's expression is softer than usual. Quiet and comfortable atmosphere.":
        "En rentrant avec Yuna après avoir caressé un chat ensemble. L'expression de Yuna est plus douce que d'habitude. Ambiance calme et agréable.",
    "Sharing ice cream with Dain on a park bench. She said 'I couldn't sleep last night' showing a serious side. She's being shy instead of her usual energetic self.":
        "En train de partager une glace avec Dain sur un banc du parc. Elle a dit « Je n'ai pas pu dormir la nuit dernière » montrant un côté sérieux. Elle est timide au lieu de son énergie habituelle.",
    "In the homeroom teacher's car heading home. After hand-holding or leaning on her shoulder in the sunset. The sweetness and guilt of a forbidden love.":
        "Dans la voiture du professeur principal en rentrant chez soi. Après s'être tenu la main ou s'être appuyé sur son épaule au coucher du soleil. La douceur et la culpabilité d'un amour interdit.",
    "Walking home with the school nurse. She used a band-aid as an excuse to hold my hand. The thrill and tension of a forbidden love.":
        "En rentrant avec l'infirmière scolaire. Elle a utilisé un pansement comme prétexte pour me tenir la main. Le frisson et la tension d'un amour interdit.",
};

// Process translations: replace text in fr blocks
// Strategy: find each "fr": { block and replace text/choices/context within it

let replacementCount = 0;

// Replace text fields in fr blocks
for (const [eng, fra] of Object.entries(translations)) {
    // We need to find occurrences of the English text that are inside "fr" blocks
    // The pattern in the file is: within a "fr": { ... } block, "text": "..."
    // We'll use a regex-based approach to find these specific occurrences

    const escapedEng = eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escapedFra = fra.replace(/\$/g, '$$$$');

    // Find text fields within fr blocks
    // The file structure has "fr": { on one line, "name": on next, "text": on next
    // We look for the pattern where the English text appears after "fr" context

    // Simple approach: since English text in fr blocks is identical to en blocks,
    // we need to be careful to only replace within fr blocks.
    // The fr blocks follow this pattern:
    //   "fr": {
    //       "name": "...",
    //       "text": "THE_ENGLISH_TEXT"
    // or for context:
    //       "context": "THE_ENGLISH_TEXT"

    // Let's find all fr blocks and replace within them
    const textPattern = new RegExp(
        `("fr":\\s*\\{[^}]*?"text":\\s*)"${escapedEng}"`,
        'g'
    );

    const newContent = content.replace(textPattern, `$1"${fra}"`);
    if (newContent !== content) {
        const matches = content.match(textPattern);
        replacementCount += matches ? matches.length : 0;
        content = newContent;
    }
}

// Replace choices in fr blocks
// Choices are arrays within fr blocks. We need to find and replace each choice string
// that appears within "fr": { ... "choices": [ ... ] }
for (const [eng, fra] of Object.entries(choiceTranslations)) {
    const escapedEng = eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Find all occurrences of this choice text in fr blocks
    // fr blocks have "choices": [ "...", "...", "..." ]
    // We need to find these within fr context

    // Strategy: since the file has predictable structure, let's find and replace
    // choices that appear after a "fr" block opener
    // The fr block pattern includes choices array items

    // Simple but effective: replace within fr blocks by tracking state
    // For now, let's use the fact that the exact same choice text might appear
    // in multiple language blocks. We need a smarter approach.

    // Actually, since this is JSON-like, the choice strings in fr blocks
    // appear in the same pattern. Let's handle this differently.
}

// More sophisticated approach: parse the file to find fr blocks and replace within them
// Let's do a line-by-line approach

const lines = content.split('\n');
let inFrBlock = false;
let frBlockDepth = 0;
let braceCount = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect start of fr block
    if (line.match(/^\s*"fr"\s*:\s*\{/)) {
        inFrBlock = true;
        braceCount = 1;
        // Count opening braces on this line (already counted the first one)
        for (let j = line.indexOf('{') + 1; j < line.length; j++) {
            if (line[j] === '{') braceCount++;
            if (line[j] === '}') braceCount--;
        }
        if (braceCount <= 0) inFrBlock = false;
        continue;
    }

    if (inFrBlock) {
        // Track brace depth
        for (let j = 0; j < line.length; j++) {
            if (line[j] === '{') braceCount++;
            if (line[j] === '}') braceCount--;
        }

        // Replace choices within fr block
        for (const [eng, fra] of Object.entries(choiceTranslations)) {
            const escapedEng = eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const pattern = new RegExp(`"${escapedEng}"`, 'g');
            if (pattern.test(lines[i])) {
                lines[i] = lines[i].replace(pattern, `"${fra}"`);
                replacementCount++;
            }
        }

        // Replace context within fr block
        for (const [eng, fra] of Object.entries(contextTranslations)) {
            const escapedEng = eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const pattern = new RegExp(`"${escapedEng}"`, 'g');
            if (pattern.test(lines[i])) {
                lines[i] = lines[i].replace(pattern, `"${fra}"`);
                replacementCount++;
            }
        }

        if (braceCount <= 0) {
            inFrBlock = false;
        }
    }
}

content = lines.join('\n');

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Replacements made: ${replacementCount}`);

// Verification: check if any English text remains in fr blocks
const verifyLines = content.split('\n');
let inFrBlockVerify = false;
let braceCountVerify = 0;
let englishRemaining = [];
let currentScene = '';

for (let i = 0; i < verifyLines.length; i++) {
    const line = verifyLines[i];

    // Track current scene
    const sceneMatch = line.match(/^\s*"(day3_[^"]+)"\s*:/);
    if (sceneMatch) currentScene = sceneMatch[1];

    if (line.match(/^\s*"fr"\s*:\s*\{/)) {
        inFrBlockVerify = true;
        braceCountVerify = 1;
        for (let j = line.indexOf('{') + 1; j < line.length; j++) {
            if (line[j] === '{') braceCountVerify++;
            if (line[j] === '}') braceCountVerify--;
        }
        if (braceCountVerify <= 0) inFrBlockVerify = false;
        continue;
    }

    if (inFrBlockVerify) {
        for (let j = 0; j < line.length; j++) {
            if (line[j] === '{') braceCountVerify++;
            if (line[j] === '}') braceCountVerify--;
        }

        // Check for text/choices/context fields with English content
        const textMatch = line.match(/"text"\s*:\s*"(.+)"/);
        if (textMatch) {
            const text = textMatch[1];
            // Check if it looks English (contains common English words, not French)
            if (text !== '' && !text.match(/^"?\.\.\.\{name\}\."?$/) &&
                /\b(the|is|are|was|were|have|has|had|will|would|can|could|should|with|from|that|this|but|and|for|not|you|your|her|his|she|he|it|my|me|we|our|they|them|their|don't|didn't|won't|I'm|I'll|I've|Let's|let's)\b/i.test(text)) {
                englishRemaining.push(`  Line ${i + 1} [${currentScene}]: ${text.substring(0, 80)}...`);
            }
        }

        // Check choices
        const choiceMatch = line.match(/^\s*"(.+)"$/);
        if (choiceMatch && !line.match(/"(name|text|choices|context|fr)"/)) {
            const choice = choiceMatch[1];
            if (/\b(the|with|for|you|her|his|Let's|let's|I'll|I'm)\b/i.test(choice)) {
                englishRemaining.push(`  Line ${i + 1} [${currentScene}] choice: ${choice}`);
            }
        }

        if (braceCountVerify <= 0) {
            inFrBlockVerify = false;
        }
    }
}

if (englishRemaining.length > 0) {
    console.log('\nWARNING: Possible English text still in fr blocks:');
    englishRemaining.forEach(e => console.log(e));
} else {
    console.log('\nVerification passed: No obvious English text found in fr blocks.');
}
