/**
 * Add French ("fr") translations to all Day 3 scenario _i18n blocks.
 *
 * Strategy: Parse each file using eval, generate French translations for all
 * _i18n.en entries, then insert "fr" blocks after "ja" blocks in the source.
 *
 * Run: node add_fr_day3.js
 */
const fs = require('fs');
const path = require('path');

// ============================================================================
// NAME MAP
// ============================================================================
const NAME_FR = {
    'Me': 'Moi',
    'Seoyeon': 'Seoyeon',
    'Yuna': 'Yuna',
    'Dain': 'Dain',
    'School Nurse': 'Infirmière Scolaire',
    'Homeroom Teacher': 'Professeur Principal',
    'System': 'Système',
    '???': '???',
    'Student': 'Élève',
    'Teacher': 'Professeur',
    'Classmates': 'Camarades',
    'Ms. Kim': 'Professeur Principal',
};

// ============================================================================
// TRANSLATION MAP: English -> French
// Built from reading all 4 Day 3 scenario files
// ============================================================================
const T = {};

// Helper to add translations
function t(en, fr) { T[en] = fr; }

// ============================================================================
// DAY3_1_MORNING
// ============================================================================
t("*I wake up to the sound of my alarm. It's already been three days since I transferred... I'm starting to get used to waking up in the morning.*",
  "*Je me réveille au son de mon réveil. Cela fait déjà trois jours que j'ai été transféré... Je commence à m'habituer à me lever le matin.*");
t("*I open my eyes... Where am I? An unfamiliar ceiling.*",
  "*J'ouvre les yeux... Où suis-je ? Un plafond inconnu.*");
t("*Memories of last night flash through my mind. Her scent, her soft touch, and...*",
  "*Les souvenirs de la nuit dernière traversent mon esprit. Son parfum, sa douceur, et...*");
t("\"Oh my, you're awake? Hehe, did you sleep well last night?\"",
  "\"Oh, tu es réveillé ? Héhé, tu as bien dormi cette nuit ?\"");
t("*She hands me a cup of coffee with a knowing smile. My face feels hot.*",
  "*Elle me tend une tasse de café avec un sourire complice. Mon visage est brûlant.*");
t("\"Thank you, teacher...\"", "\"Merci, madame...\"");
t("\"Last night... was amazing\"", "\"Hier soir... c'était merveilleux\"");
t("*Too embarrassed to speak*", "*Trop gêné pour parler*");
t("\"Hehe, don't be so stiff. Not after what we shared.\"",
  "\"Héhé, ne sois pas si guindé. Pas après ce qu'on a partagé.\"");
t("\"Oh my... Bold thing to say in the morning. Hehe, teacher enjoyed it too.\"",
  "\"Oh là là... Quelle audace dès le matin. Héhé, ta prof aussi a apprécié.\"");
t("\"Hehe, so cute. Your shy face is adorable too.\"",
  "\"Héhé, trop mignon. Ton air timide est adorable aussi.\"");
t("\"Now, hurry up and get ready. You need to go to school, right? When we see each other at school... pretend nothing happened, okay?\"",
  "\"Allez, dépêche-toi de te préparer. Tu dois aller à l'école, non ? Quand on se verra à l'école... fais comme si de rien n'était, d'accord ?\"");
t("*My heart races at her wink. I quickly gather my things and leave her place.*",
  "*Mon cœur s'emballe à son clin d'œil. Je rassemble vite mes affaires et quitte son appartement.*");
t("*I arrived at school. The morning air feels especially refreshing today.*",
  "*Je suis arrivé à l'école. L'air du matin est particulièrement rafraîchissant aujourd'hui.*");
t("\"{name}! Good morning... Huh? Where did you come from today? It seems like you came from a different direction than usual...\"",
  "\"{name} ! Bonjour... Hein ? D'où viens-tu aujourd'hui ? On dirait que tu es venu d'une direction différente de d'habitude...\"");
t("*I'm flustered by Seoyeon's sharp question.*",
  "*Je suis déstabilisé par la question directe de Seoyeon.*");
t("\"Just took a walk...\"", "\"J'ai juste fait une promenade...\"");
t("\"Stayed at a relative's house\"", "\"J'ai dormi chez un parent\"");
t("*Stammer nervously*", "*Bafouiller nerveusement*");
t("\"...A walk? At this hour? Hmm...\"", "\"...Une promenade ? À cette heure ? Hmm...\"");
t("\"...A relative? A female relative?\"", "\"...Un parent ? Une parente ?\"");
t("\"...Why can't you answer? Are you hiding something?\"",
  "\"...Pourquoi tu ne peux pas répondre ? Tu caches quelque chose ?\"");
t("\"...{name}. You smell different today.\"", "\"...{name}. Tu sens différent aujourd'hui.\"");
t("*Yuna stares at my face. Her eyes are... piercing.*",
  "*Yuna me fixe du regard. Ses yeux sont... perçants.*");
t("\"...An adult's perfume. A woman's perfume.\"", "\"...Un parfum d'adulte. Un parfum de femme.\"");
t("\"...What?!\"", "\"...Quoi ?!\"");
t("*The atmosphere became tense. I need to get out of this situation somehow.*",
  "*L'atmosphère est devenue tendue. Je dois m'en sortir d'une manière ou d'une autre.*");
t("\"I'll be late for class, gotta go!\"", "\"Je vais être en retard en cours, j'y vais !\"");
t("\"It's a misunderstanding, I was at my parents' friend's place...\"",
  "\"C'est un malentendu, j'étais chez un ami de mes parents...\"");
t("*I hurry to the classroom. The gazes from behind feel burning hot...*",
  "*Je me dépêche d'aller en classe. Les regards dans mon dos sont brûlants...*");
t("\"...Your parents' friend? Then why did you act like you were hiding something?\"",
  "\"...Un ami de tes parents ? Alors pourquoi tu avais l'air de cacher quelque chose ?\"");
t("*Seoyeon looks upset. Let's just head to the classroom for now.*",
  "*Seoyeon a l'air contrariée. Allons en classe pour l'instant.*");
t("*Looking outside, the weather is really nice today. It's already Friday... What should I do this weekend?*",
  "*En regardant dehors, il fait vraiment beau aujourd'hui. C'est déjà vendredi... Que faire ce week-end ?*");
t("*I check my smartphone and see there are unread messages. Who could it be?*",
  "*Je vérifie mon téléphone et vois des messages non lus. Qui cela peut-il être ?*");
t("*Let me check the messages.*", "*Voyons les messages.*");
t("Check Seoyeon's message", "Voir le message de Seoyeon");
t("Check Yuna's message", "Voir le message de Yuna");
t("Check Dain's message", "Voir le message de Dain");
t("Check Nurse's message", "Voir le message de l'Infirmière");
t("Check Homeroom Teacher's message", "Voir le message du Professeur Principal");
t("Check Teacher's message", "Voir le message du Professeur");
t("*Message sent at 6 AM* 'Good morning! {name}, fighting for today too! Oh, and would you like to walk to school together? I'll wait for you in front of your house!'",
  "*Message envoyé à 6h* 'Bonjour ! {name}, courage pour aujourd'hui aussi ! Ah, tu veux qu'on aille à l'école ensemble ? Je t'attends devant chez toi !'");
t("*Message sent at 3 AM* '...{name}. I'll wait for you at the back gate this morning. Let's go together.'",
  "*Message envoyé à 3h* '...{name}. Je t'attendrai au portail arrière ce matin. Allons-y ensemble.'");
t("*Message sent at 7 AM* 'Yay! {name}! Let's go to school together! Where do you live? I'll come find you! ><'",
  "*Message envoyé à 7h* 'Youpi ! {name} ! Allons à l'école ensemble ! Tu habites où ? Je viens te chercher ! ><'");
t("*Message sent last night at 11 PM* 'Hehe, {name}. How about walking to school together this morning? Just the two of us... \u{1f609}'",
  "*Message envoyé hier soir à 23h* 'Héhé, {name}. Et si on allait à l'école ensemble ce matin ? Rien que nous deux... \u{1f609}'");
t("*Message sent last night at 10 PM* '{name}, are you going to school early tomorrow morning? I'm going early too, would you like to walk together?'",
  "*Message envoyé hier soir à 22h* '{name}, tu vas à l'école tôt demain matin ? J'y vais tôt aussi, tu veux qu'on marche ensemble ?'");
t("*How should I reply?*", "*Comment devrais-je répondre ?*");
t("Sure! Let's go together", "Bien sûr ! Allons-y ensemble");
t("Sorry, I'll go alone today", "Désolé, j'irai seul aujourd'hui");
t("Check other messages", "Voir les autres messages");
t("Yes! Let's go together", "Oui ! Allons-y ensemble");
t("*I already saw this message...*", "*J'ai déjà vu ce message...*");
t("*Reply* 'Oh... I see. It's okay! See you at school then!'",
  "*Réponse* 'Ah... je vois. C'est pas grave ! On se voit à l'école alors !'");
t("*Reply* '...Alright. Sometimes it's more comfortable to go alone.'",
  "*Réponse* '...D'accord. Parfois c'est plus confortable d'y aller seul.'");
t("*Reply* 'Aw, that's too bad! But see you at school!'",
  "*Réponse* 'Oh, c'est dommage ! Mais on se voit à l'école !'");
t("*Reply* 'Oh my, really? That's a shame. See you at school then.'",
  "*Réponse* 'Oh, vraiment ? Quel dommage. On se voit à l'école alors.'");
t("*Reply* 'Okay, understood. See you at school!'",
  "*Réponse* 'D'accord, compris. On se voit à l'école !'");
t("*Should I check other messages?*", "*Devrais-je consulter d'autres messages ?*");
t("Just go to school alone", "Aller à l'école seul");
t("*Let me check other messages.*", "*Voyons les autres messages.*");
t("Go with Seoyeon", "Aller avec Seoyeon");
t("Go with Yuna", "Aller avec Yuna");
t("Go with Dain", "Aller avec Dain");
t("Go with Nurse", "Aller avec l'Infirmière");
t("Go with Teacher", "Aller avec le Professeur");
t("Go alone", "Y aller seul");
t("Go with Seoyeon *I rejected her earlier...*", "Aller avec Seoyeon *Je l'ai refusée tout à l'heure...*");
t("Go with Yuna *I rejected her earlier...*", "Aller avec Yuna *Je l'ai refusée tout à l'heure...*");
t("Go with Dain *I rejected her earlier...*", "Aller avec Dain *Je l'ai refusée tout à l'heure...*");
t("Go with Nurse *I rejected her earlier...*", "Aller avec l'Infirmière *Je l'ai refusée tout à l'heure...*");
t("Go with Teacher *I rejected her earlier...*", "Aller avec le Professeur *Je l'ai refusée tout à l'heure...*");
t("Just go alone", "Y aller seul");
t("*I sent another message. 'Sorry, I just checked other messages. I actually want to go together!'*",
  "*J'ai envoyé un autre message. 'Pardon, je consultais d'autres messages. En fait, j'aimerais bien qu'on y aille ensemble !'*");
t("*I sent another message. 'Sorry, I actually want to go together!'*",
  "*J'ai envoyé un autre message. 'Pardon, en fait j'aimerais bien qu'on y aille ensemble !'*");
t("*Immediate reply* 'Really?! Great! Then hurry up and come out! I'll wait!'",
  "*Réponse immédiate* 'Vraiment ?! Super ! Alors dépêche-toi de sortir ! Je t'attends !'");
t("*Reply after a moment* '...Okay. I'll wait.'",
  "*Réponse après un moment* '...D'accord. J'attends.'");
t("*Immediate reply* 'Okay! I'm leaving now! Wait for me!'",
  "*Réponse immédiate* 'OK ! Je pars maintenant ! Attends-moi !'");
t("*Reply* 'Hehe, changed your mind? Good, come out quickly.'",
  "*Réponse* 'Héhé, tu as changé d'avis ? Bien, sors vite.'");
t("*Reply* 'Really? That's fine! Get ready quickly.'",
  "*Réponse* 'Vraiment ? Pas de souci ! Prépare-toi vite.'");
t("*Hmm... who should I go with?*", "*Hmm... avec qui devrais-je y aller ?*");
t("*I headed to the front of Seoyeon's house.*", "*Je me suis dirigé devant la maison de Seoyeon.*");
t("\"Wow! You really came! Thank you!\"", "\"Waouh ! Tu es vraiment venu ! Merci !\"");
t("*Walking side by side* \"Hey, {name}. Do you know what I dreamed about last night?\"",
  "*En marchant côte à côte* \"Hé, {name}. Tu sais ce que j'ai rêvé la nuit dernière ?\"");
t("*Seoyeon suddenly brings up a dream.*", "*Seoyeon aborde soudain le sujet d'un rêve.*");
t("What kind of dream?", "Quel genre de rêve ?");
t("Was I in it?", "J'y étais ?");
t("A nightmare?", "Un cauchemar ?");
t("*Seoyeon's face turns red* \"I-it's a secret! It was nothing! Why are you asking?!\"",
  "*Le visage de Seoyeon rougit* \"C-c'est un secret ! C'était rien ! Pourquoi tu demandes ?!\"");
t("*Seoyeon freezes* \"W-what?! Why would you think that! ...Okay, maybe, but that's not the point!\"",
  "*Seoyeon se fige* \"Q-quoi ?! Pourquoi tu penses ça ! ...Bon, peut-être, mais c'est pas la question !\"");
t("*Seoyeon sighs* \"Ugh, you totally killed the mood. It was a good dream, you know!\"",
  "*Seoyeon soupire* \"Pfff, tu as complètement cassé l'ambiance. C'était un beau rêve, tu sais !\"");
t("*We wait for the light at the crosswalk. Standing still, Seoyeon's hand is tantalizingly close to mine.*",
  "*On attend le feu au passage piéton. Immobiles, la main de Seoyeon est si tentante de proximité avec la mienne.*");
t("*Seoyeon lightly brushes my hand with her pinky finger. Our eyes meet, and we both look away at the same time.*",
  "*Seoyeon effleure ma main avec son petit doigt. Nos regards se croisent, et on détourne les yeux en même temps.*");
t("*We chat about various things on the way to school.*",
  "*On discute de tout et de rien sur le chemin de l'école.*");
t("Walking to school with Seoyeon side by side. Our hands touched at the crosswalk, so there's a slightly self-conscious atmosphere. It's Friday morning, so weekend plans might come up.",
  "On marche vers l'école avec Seoyeon côte à côte. Nos mains se sont touchées au passage piéton, créant une atmosphère un peu gênée. C'est vendredi matin, les projets du week-end pourraient être évoqués.");
t("*As the school gate comes into view, Seoyeon stutters as if trying to say something difficult* \"Um... {name}. Are you free this weekend? There's a café I've been wanting to visit...\"",
  "*Alors que le portail de l'école apparaît, Seoyeon bégaie comme si elle essayait de dire quelque chose de difficile* \"Euh... {name}. Tu es libre ce week-end ? Il y a un café que j'aimerais visiter...\"");
t("What kind of café?", "Quel genre de café ?");
t("Just the two of us?", "Juste nous deux ?");
t("Sure, when should we go?", "Bien sûr, quand y va-t-on ?");
t("\"I saw it on social media, and it has a really pretty vibe. It's awkward going alone though... Let's meet at the park fountain at 2 PM on Saturday!\"",
  "\"Je l'ai vu sur les réseaux sociaux, l'ambiance a l'air vraiment jolie. C'est gênant d'y aller seule... Retrouvons-nous à la fontaine du parc à 14h samedi !\"");
t("*Seoyeon's face turns bright red* \"W-what?! It's just friends hanging out! ...But I didn't invite anyone else. Saturday at 2 PM, at the park fountain.\"",
  "*Le visage de Seoyeon devient écarlate* \"Q-quoi ?! On sort juste entre amis ! ...Mais je n'ai invité personne d'autre. Samedi à 14h, à la fontaine du parc.\"");
t("*Seoyeon beams* \"Really?! Saturday at 2 PM, at the park fountain! You better not be late!\"",
  "*Seoyeon rayonne* \"Vraiment ?! Samedi à 14h, à la fontaine du parc ! T'as pas intérêt à être en retard !\"");
t("*Seoyeon looks at me with eyes full of anticipation.*",
  "*Seoyeon me regarde avec des yeux pleins d'attente.*");
t("Sure, I'll definitely be there", "Bien sûr, j'y serai sans faute");
t("Let me think about it", "Laisse-moi y réfléchir");
t("Sorry, I'm busy this weekend", "Désolé, je suis occupé ce week-end");
t("*Seoyeon nearly shouts but quickly covers her mouth* \"...Ahem! O-okay. See you Saturday then. You can look forward to it!\"",
  "*Seoyeon manque de crier mais se couvre vite la bouche* \"...Ahem ! D-d'accord. À samedi alors. Tu peux t'en réjouir !\"");
t("*Seoyeon's expression dims slightly* \"...Okay, I see. Let me know later then.\"",
  "*L'expression de Seoyeon s'assombrit légèrement* \"...D'accord, je comprends. Dis-moi plus tard alors.\"");
t("*Seoyeon forces a smile* \"...Oh, is that so? It's fine! We can go some other time!\"",
  "*Seoyeon force un sourire* \"...Ah, c'est vrai ? C'est pas grave ! On ira une autre fois !\"");
// Yuna walk
t("*I headed toward the alley on the way to school. Yuna is standing under the shade of a tree.*",
  "*Je me suis dirigé vers la ruelle sur le chemin de l'école. Yuna se tient à l'ombre d'un arbre.*");
t("\"...You came. (Walking quietly) The weather is nice today. But... things that look peaceful are often the most dangerous.\"",
  "\"...Tu es venu. (Marchant silencieusement) Il fait beau aujourd'hui. Mais... les choses qui semblent paisibles sont souvent les plus dangereuses.\"");
t("*A leaf blown by the wind lands on my head. Yuna quietly reaches out and picks it off.*",
  "*Une feuille emportée par le vent atterrit sur ma tête. Yuna tend silencieusement la main et la retire.*");
t("\"...Prettier than a flower.\"", "\"...Plus jolie qu'une fleur.\"");
t("*My heart skips at Yuna's deadpan remark. Before I can respond, Yuna suddenly stops walking.*",
  "*Mon cœur fait un bond face à la remarque impassible de Yuna. Avant que je puisse répondre, Yuna s'arrête soudainement.*");
t("\"...Hey. Stay still.\"", "\"...Hé. Ne bouge pas.\"");
t("*Yuna starts fixing my necktie. Her face is barely 10 centimeters away from mine.*",
  "*Yuna commence à ajuster ma cravate. Son visage est à peine à 10 centimètres du mien.*");
t("*Stay still*", "*Rester immobile*");
t("Your hands are cold, Yuna", "Tes mains sont froides, Yuna");
t("\"...Dummy. How can you walk around with it this loose.\"",
  "\"...Idiot. Comment tu peux te balader avec une cravate aussi lâche.\"");
t("*Yuna's hands pause. After a moment of silence* \"...Want me to warm them up?\"",
  "*Les mains de Yuna s'arrêtent. Après un moment de silence* \"...Tu veux que je les réchauffe ?\"");
t("*I walk alongside Yuna toward school. A quiet but comfortable silence fills the air.*",
  "*Je marche aux côtés de Yuna vers l'école. Un silence calme mais confortable emplit l'air.*");
t("Walking to school with Yuna in the morning. She just fixed my necktie, creating an oddly intimate atmosphere. It's quiet but the distance between us feels close.",
  "On marche vers l'école avec Yuna le matin. Elle vient d'ajuster ma cravate, créant une atmosphère étrangement intime. C'est silencieux mais la distance entre nous semble réduite.");
t("*Walking down the quiet path, Yuna suddenly speaks* \"{name}, this weekend... there's a place I want to show only you.\"",
  "*En marchant sur le chemin tranquille, Yuna parle soudain* \"{name}, ce week-end... il y a un endroit que je veux montrer rien qu'à toi.\"");
t("What kind of place?", "Quel genre d'endroit ?");
t("Another secret?", "Encore un secret ?");
t("...Okay, when?", "...D'accord, quand ?");
t("\"...A place where you can see the real face of this school. Saturday evening at 8 PM, at the school's back gate. Don't be late. There are things that can only be seen in the darkness.\"",
  "\"...Un endroit où tu peux voir le vrai visage de cette école. Samedi soir à 20h, au portail arrière de l'école. Ne sois pas en retard. Il y a des choses qu'on ne peut voir que dans l'obscurité.\"");
t("*Yuna smiles coldly* \"It's closer to the truth than a secret. Saturday evening at 8 PM. Everything changes after the sun sets. You'll come, right?\"",
  "*Yuna sourit froidement* \"C'est plus proche de la vérité qu'un secret. Samedi soir à 20h. Tout change après le coucher du soleil. Tu viendras, n'est-ce pas ?\"");
t("*Yuna looks at me in surprise, then smiles* \"...That's so like you. Saturday evening at 8 PM, school back gate. There are things that can only be seen when darkness falls. You must come.\"",
  "*Yuna me regarde avec surprise, puis sourit* \"...Ça te ressemble bien. Samedi soir à 20h, portail arrière de l'école. Il y a des choses qu'on ne peut voir que quand l'obscurité tombe. Tu dois venir.\"");
t("*Yuna's serious gaze pierces through me. 8 PM in the evening... Something feels ominous.*",
  "*Le regard sérieux de Yuna me transperce. 20h le soir... Quelque chose semble inquiétant.*");
t("Okay, I'll definitely come", "D'accord, je viendrai sans faute");
t("Let me think about it and reply", "Laisse-moi y réfléchir et te répondre");
t("Sorry, I have other plans", "Désolé, j'ai d'autres projets");
t("*Yuna briefly holds my hand then lets go* \"...Thank you. You won't regret it. Saturday night, be ready to face the truth.\"",
  "*Yuna prend brièvement ma main puis la lâche* \"...Merci. Tu ne le regretteras pas. Samedi soir, prépare-toi à affronter la vérité.\"");
t("*Yuna looks disappointed and turns her head away* \"...I see. But there's only one chance. Think carefully. There's a door that only opens at night.\"",
  "*Yuna semble déçue et détourne la tête* \"...Je vois. Mais il n'y a qu'une seule chance. Réfléchis bien. Il y a une porte qui ne s'ouvre que la nuit.\"");
t("*Yuna's gaze turns cold* \"......\"", "*Le regard de Yuna devient glacial* \"......\"");
// Dain walk
t("*On the way to the meeting spot. From a distance, Dain is waving her hand widely and running toward me.*",
  "*En chemin vers le point de rendez-vous. Au loin, Dain agite la main et court vers moi.*");
t("\"{name}!! Yay!\"", "\"{name} !! Youpi !\"");
t("*Dain charges at me full speed with no brakes. There's no time to dodge\u2014 CRASH!*",
  "*Dain fonce vers moi à toute vitesse sans freiner. Pas le temps d'esquiver \u2014 BOUM !*");
t("\"Ow! S-sorry! I couldn't stop!\"", "\"Aïe ! D-désolée ! J'ai pas pu m'arrêter !\"");
t("*Dain fell on top of me. Our faces are barely 10 centimeters apart... I can feel her breath.*",
  "*Dain est tombée sur moi. Nos visages sont à peine à 10 centimètres... Je sens son souffle.*");
t("\"Are you okay?\" (Help her up)", "\"Ça va ?\" (L'aider à se relever)");
t("\"Should we stay like this?\"", "\"On reste comme ça ?\"");
t("*Can't say anything*", "*Impossible de dire quoi que ce soit*");
t("*As I take her hand and help her up, Dain's face turns beet red* \"Th-thanks... My heart almost exploded! I mean from the crash! Not for any other reason!\"",
  "*En lui prenant la main pour l'aider, le visage de Dain devient cramoisi* \"M-merci... Mon cœur a failli exploser ! À cause du choc, hein ! Pas pour une autre raison !\"");
t("\"Huh?! Y-you idiot! Get up now! People are watching!\"",
  "\"Hein ?! E-espèce d'idiot ! Lève-toi ! Les gens regardent !\"");
t("\"Hey, what's wrong?! Who's blushing here?! ...Am I blushing too? Ugh, whatever!\"",
  "\"Hé, qu'est-ce qui se passe ?! Qui rougit ici ?! ...Moi aussi je rougis ? Pfff, peu importe !\"");
t("*Jumping up and dusting herself off* \"...Dummy. What are you doing first thing in the morning.\"",
  "*Se relevant d'un bond et se dépoussiérant* \"...Idiot. Qu'est-ce que tu fais dès le matin.\"");
t("*Composing herself* \"A-anyway! Let's walk to school together! The weather is perfect for exercise today!\"",
  "*Se ressaisissant* \"B-bref ! Allons à l'école ensemble ! Le temps est parfait pour le sport aujourd'hui !\"");
t("*I walk alongside Dain toward school. Perhaps because of the earlier collision, she's keeping a bit more distance than usual.*",
  "*Je marche aux côtés de Dain vers l'école. Peut-être à cause de la collision, elle garde un peu plus de distance que d'habitude.*");
t("Walking to school with Dain. There was a bumping incident earlier so Dain is a bit shy. She's energetic but blushes occasionally.",
  "On marche vers l'école avec Dain. Il y a eu un incident de collision, donc Dain est un peu timide. Elle est énergique mais rougit de temps en temps.");
t("*Walking excitedly* \"Oh! By the way {name}! Tomorrow at 9 AM, our team has a practice match at the gym. Come cheer for me!\"",
  "*Marchant avec enthousiasme* \"Oh ! Au fait {name} ! Demain à 9h, notre équipe a un match d'entraînement au gymnase. Viens m'encourager !\"");
t("Sounds fun! Of course I'll go!", "Ça a l'air sympa ! Bien sûr que j'irai !");
t("9 AM? That's pretty early", "9h ? C'est assez tôt");
t("That sounds troublesome...", "Ça a l'air contraignant...");
t("*Dain jumps excitedly* \"Really?! Awesome! Then after practice, let's eat together! Let's go get tteokbokki!\"",
  "*Dain saute d'excitation* \"Vraiment ?! Génial ! Alors après l'entraînement, mangeons ensemble ! Allons manger des tteokbokki !\"");
t("*Dain smiles* \"Right? It's hard for me to wake up early too, but it would really give me energy if you came!\"",
  "*Dain sourit* \"N'est-ce pas ? C'est dur pour moi aussi de me lever tôt, mais ça me donnerait vraiment de l'énergie si tu venais !\"");
t("*Dain puts her arm around my shoulder* \"It's okay! Just come and cheer! I'll show you my awesome spike!\"",
  "*Dain met son bras autour de mon épaule* \"T'inquiète ! Viens juste encourager ! Je te montrerai mon smash incroyable !\"");
t("*Dain looks at me with hopeful eyes.*", "*Dain me regarde avec des yeux pleins d'espoir.*");
t("Okay! See you Saturday at 9 at the gym", "OK ! On se voit samedi à 9h au gymnase");
t("Let me think about it and contact you", "Laisse-moi y réfléchir et te recontacter");
t("Good luck, I have other plans this weekend...", "Bonne chance, j'ai d'autres projets ce week-end...");
t("*Dain grabs my hand and shakes it* \"Wow! You're the best {name}! Then see you on Saturday! Don't be late!\"",
  "*Dain attrape ma main et la secoue* \"Waouh ! Tu es le meilleur {name} ! Alors à samedi ! Ne sois pas en retard !\"");
t("*Dain looks a bit down* \"Aw... But you have to come, okay? Promise?\"",
  "*Dain a l'air un peu abattue* \"Oh... Mais tu dois venir, d'accord ? Promis ?\"");
t("*Dain makes a disappointed face* \"Oh... I see. But if you have time later, make sure to visit!\"",
  "*Dain fait une moue déçue* \"Oh... Je vois. Mais si tu as du temps plus tard, n'hésite pas à venir !\"");
// Nurse walk
t("*I headed to the meeting spot with the teacher. The school nurse is waiting.*",
  "*Je me suis dirigé vers le point de rendez-vous. L'infirmière scolaire attend.*");
t("\"Oh my, {name}. You came? Hehe, our transfer student is so nice. Come on, let's walk together.\"",
  "\"Oh, {name}. Tu es venu ? Héhé, notre élève transféré est si gentil. Allez, marchons ensemble.\"");
t("*The teacher subtly places her hand on my arm as we walk side by side. What would people think if they saw us...*",
  "*Elle pose subtilement sa main sur mon bras tandis qu'on marche côte à côte. Que penseraient les gens s'ils nous voyaient...*");
t("*Just enjoy it*", "*En profiter*");
t("\"Teacher, people might see us...\"", "\"Madame, les gens pourraient nous voir...\"");
t("*The teacher smiles with satisfaction* \"Hehe, this is nice. Walking together like this.\"",
  "*Elle sourit avec satisfaction* \"Héhé, c'est agréable. Marcher ensemble comme ça.\"");
t("*The teacher sighs softly and removes her hand* \"You're right... We can't let anyone find out about us.\"",
  "*Elle soupire doucement et retire sa main* \"Tu as raison... Personne ne doit découvrir notre relation.\"");
t("*Looking lost in thought, she says quietly* \"...{name}, I know a teacher shouldn't be doing this with a student... but my heart won't listen.\"",
  "*L'air perdue dans ses pensées, elle dit doucement* \"...{name}, je sais qu'une enseignante ne devrait pas faire ça avec un élève... mais mon cœur refuse d'écouter.\"");
t("*There's an unusual seriousness in her voice. Is she struggling with this too?*",
  "*Il y a une gravité inhabituelle dans sa voix. Elle aussi se débat avec ça ?*");
t("\"I like you too, teacher\"", "\"Moi aussi je vous aime bien, madame\"");
t("*Quietly take her hand*", "*Lui prendre doucement la main*");
t("\"But you're still a teacher\"", "\"Mais vous êtes quand même professeur\"");
t("*Her eyes go wide* \"...You're really dangerous, you know? Making a teacher's heart waver like this.\"",
  "*Ses yeux s'écarquillent* \"...Tu es vraiment dangereux, tu sais ? Faire vaciller le cœur d'une enseignante comme ça.\"");
t("*She looks down at our hands in surprise... then holds on tight* \"...Just five seconds. Let's stay like this for just five seconds.\"",
  "*Elle regarde nos mains avec surprise... puis serre fort* \"...Juste cinq secondes. Restons comme ça juste cinq secondes.\"");
t("*Her expression freezes for a moment before she forces a smile* \"...Right. A teacher is a teacher, after all.\"",
  "*Son expression se fige un instant avant de forcer un sourire* \"...C'est vrai. Une enseignante reste une enseignante, après tout.\"");
t("*I walk toward school with the nurse. A strange mix of tension and excitement fills the air.*",
  "*Je marche vers l'école avec l'infirmière. Un étrange mélange de tension et d'excitation emplit l'air.*");
t("Walking to school with the school nurse. She confessed that she shouldn't feel this way about a student. The tension of a forbidden love hangs in the air.",
  "On marche vers l'école avec l'infirmière scolaire. Elle a avoué qu'elle ne devrait pas ressentir ça pour un élève. La tension d'un amour interdit flotte dans l'air.");
t("*Walking to school, the teacher subtly places her hand on my arm* \"Say, {name}. Do you have time this weekend?\"",
  "*En marchant vers l'école, elle pose subtilement sa main sur mon bras* \"Dis, {name}. Tu as du temps ce week-end ?\"");
t("Yes, why? Is something going on?", "Oui, pourquoi ? Il se passe quelque chose ?");
t("Well... what are your plans for the weekend?", "Eh bien... quels sont vos projets pour le week-end ?");
t("I don't have any plans yet?", "Je n'ai pas encore de projets ?");
t("*The teacher smiles meaningfully* \"Hehe, actually... I reserved a nice restaurant for Sunday evening. It'd be a shame to go alone... Want to come with me? How about Sunday evening at 7?\"",
  "*Elle sourit d'un air entendu* \"Héhé, en fait... j'ai réservé un bon restaurant pour dimanche soir. Ce serait dommage d'y aller seule... Tu veux m'accompagner ? Dimanche soir à 19h, ça te dit ?\"");
t("*The teacher winks playfully* \"Hmm... I have a nice restaurant reserved and I wanted to go together. If you're okay with it... Sunday evening at 7?\"",
  "*Elle fait un clin d'œil espiègle* \"Hmm... j'ai réservé un bon restaurant et je voulais qu'on y aille ensemble. Si ça te convient... dimanche soir à 19h ?\"");
t("*The teacher smiles with satisfaction* \"Really? Then let's have dinner together on Sunday evening! How about meeting at 7? I'll send you the address.\"",
  "*Elle sourit avec satisfaction* \"Vraiment ? Alors dînons ensemble dimanche soir ! On se retrouve à 19h ? Je t'enverrai l'adresse.\"");
t("*The teacher gazes at me with captivating eyes. My heart is racing...*",
  "*Elle me regarde avec des yeux captivants. Mon cœur bat la chamade...*");
t("Sure! I'll definitely be there on Sunday", "Bien sûr ! J'y serai sans faute dimanche");
t("Let me think about it and reply later", "Laisse-moi y réfléchir et te répondre plus tard");
t("Sorry, I have other plans this weekend...", "Désolé, j'ai d'autres projets ce week-end...");
t("*The teacher gently squeezes my hand then lets go* \"Hehe, really? Then Sunday evening at 7, I'll be looking forward to it. Dress up nice, okay?\"",
  "*Elle serre doucement ma main puis la lâche* \"Héhé, vraiment ? Alors dimanche soir à 19h, j'ai hâte d'y être. Habille-toi bien, d'accord ?\"");

// ============================================================================
// File insertion logic
// ============================================================================
const files = [
    'assets/js/scenario/day3_1_morning.js',
    'assets/js/scenario/day3_2_lunch.js',
    'assets/js/scenario/day3_3_afterschool.js',
    'assets/js/scenario/day3_4_night.js',
];

function processFile(filePath) {
    const absPath = path.resolve(__dirname, filePath);
    let content = fs.readFileSync(absPath, 'utf8');

    // Skip if already has fr
    if (/"fr"\s*:\s*\{/.test(content)) {
        console.log(`[SKIP] ${filePath} already has "fr" blocks`);
        return;
    }

    // Parse the scenario to get all translations
    const SCENARIO = {};
    SCENARIO[3] = {};
    try {
        const cleaned = content
            .replace(/if \(typeof SCENARIO[^;]+;/g, '')
            .replace(/if \(!SCENARIO\[\d+\]\)[^;]+;/g, '');
        const fn = new Function('SCENARIO', cleaned);
        fn(SCENARIO);
    } catch (e) {
        console.error(`[ERROR] Could not parse ${filePath}: ${e.message}`);
        return;
    }

    // Build a map: sceneKey -> { frName, frText, frChoices, frContext, frPersonality }
    const frMap = {};
    let missing = 0;
    for (const [key, scene] of Object.entries(SCENARIO[3])) {
        if (!scene._i18n || !scene._i18n.en) continue;
        const en = scene._i18n.en;
        const frName = NAME_FR[en.name] || en.name;
        const frText = T[en.text] || en.text;
        if (en.text && !T[en.text]) { missing++; }
        const frChoices = en.choices ? en.choices.map(c => T[c] || c) : null;
        if (en.choices) en.choices.forEach(c => { if (!T[c]) missing++; });
        const frContext = en.context ? (T[en.context] || en.context) : null;
        if (en.context && !T[en.context]) { missing++; }
        const frPersonality = en.personality ? (T[en.personality] || en.personality) : null;
        frMap[key] = { frName, frText, frChoices, frContext, frPersonality };
    }

    if (missing > 0) {
        console.log(`[WARN] ${filePath}: ${missing} untranslated strings (will use English as fallback)`);
    }

    // Now insert fr blocks into the source file after each ja block
    const lines = content.split('\n');
    const output = [];
    let i = 0;
    let blocksAdded = 0;
    let currentSceneKey = null;

    while (i < lines.length) {
        // Track scene keys
        const sceneKeyMatch = lines[i].match(/^\s*"(day3_[a-zA-Z0-9_]+)"\s*:\s*\{/);
        if (sceneKeyMatch) {
            currentSceneKey = sceneKeyMatch[1];
        }

        output.push(lines[i]);

        // Detect "ja": { inside _i18n
        const jaMatch = lines[i].match(/^(\s*)"ja"\s*:\s*\{/);
        if (jaMatch && currentSceneKey && frMap[currentSceneKey]) {
            const indent = jaMatch[1];

            // Check we're inside _i18n
            let inI18n = false;
            for (let b = i - 1; b >= Math.max(0, i - 30); b--) {
                if (/"_i18n"\s*:\s*\{/.test(lines[b])) { inI18n = true; break; }
                if (/^\s*"(ko|en|es)"\s*:\s*\{/.test(lines[b])) { inI18n = true; break; }
            }
            if (!inI18n) { i++; continue; }

            // Read complete ja block
            let depth = 0;
            for (const c of lines[i]) { if (c === '{') depth++; if (c === '}') depth--; }
            let jaEndIdx = i;
            while (depth > 0 && jaEndIdx + 1 < lines.length) {
                jaEndIdx++;
                output.push(lines[jaEndIdx]);
                for (const c of lines[jaEndIdx]) { if (c === '{') depth++; if (c === '}') depth--; }
            }

            // Ensure trailing comma on ja's closing brace
            let lastLine = output[output.length - 1];
            if (lastLine.trimEnd().endsWith('}') && !lastLine.trimEnd().endsWith('},')) {
                output[output.length - 1] = lastLine.replace(/\}\s*$/, '},');
            }

            // Build fr block
            const fr = frMap[currentSceneKey];
            const frLines = [];
            frLines.push(`${indent}"fr": {`);
            frLines.push(`${indent}    "name": ${JSON.stringify(fr.frName)},`);

            if (fr.frChoices) {
                frLines.push(`${indent}    "text": ${JSON.stringify(fr.frText)},`);
                frLines.push(`${indent}    "choices": [`);
                fr.frChoices.forEach((ch, ci) => {
                    const comma = ci < fr.frChoices.length - 1 ? ',' : '';
                    frLines.push(`${indent}        ${JSON.stringify(ch)}${comma}`);
                });
                frLines.push(`${indent}    ]`);
            } else if (fr.frContext && fr.frPersonality) {
                frLines.push(`${indent}    "text": ${JSON.stringify(fr.frText)},`);
                frLines.push(`${indent}    "context": ${JSON.stringify(fr.frContext)},`);
                frLines.push(`${indent}    "personality": ${JSON.stringify(fr.frPersonality)}`);
            } else if (fr.frContext) {
                frLines.push(`${indent}    "text": ${JSON.stringify(fr.frText)},`);
                frLines.push(`${indent}    "context": ${JSON.stringify(fr.frContext)}`);
            } else {
                frLines.push(`${indent}    "text": ${JSON.stringify(fr.frText)}`);
            }
            frLines.push(`${indent}}`);

            for (const fl of frLines) output.push(fl);
            blocksAdded++;
            i = jaEndIdx + 1;
            continue;
        }
        i++;
    }

    fs.writeFileSync(absPath, output.join('\n'), 'utf8');
    console.log(`[DONE] ${filePath}: added ${blocksAdded} "fr" blocks`);
}

// Run
for (const f of files) {
    console.log(`Processing ${f}...`);
    processFile(f);
}
console.log('\nAll files processed!');
