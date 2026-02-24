const fs = require('fs');

const filePath = 'd:\\workspace\\cupid\\assets\\js\\scenario\\day3_2_lunch.js';

let content = fs.readFileSync(filePath, 'utf8');

// We'll use a structured approach: find each "fr": { block and replace its text/choices
// The translation map maps English text -> French text

const textTranslations = {
  // day3_lunch_start
  "*The lunch bell rings. It's Friday... Tomorrow is the weekend.*":
    "*La cloche du d\u00e9jeuner sonne. C'est vendredi... Demain, c'est le week-end.*",

  // day3_lunch_check_dates
  "*As I try to get up from my desk, I feel multiple eyes on me.*":
    "*Alors que j'essaie de me lever de mon bureau, je sens plusieurs regards pos\u00e9s sur moi.*",

  // day3_lunch_multiple_approach
  "*Uh... wait, why is everyone coming this way...?*":
    "*Euh... attendez, pourquoi tout le monde vient par ici\u2009?*",

  // day3_lunch_collision_no_seoyeon
  "*The girls I made plans with are all approaching me at the same time. This doesn't look good...*":
    "*Les filles avec qui j'ai pris rendez-vous s'approchent toutes en m\u00eame temps. \u00c7a s'annonce mal...*",

  // day3_lunch_collision_no_seoyeon_choose
  "*Who should I eat with...?*":
    "*Avec qui je devrais manger\u2009?*",

  // day3_lunch_collision
  "\"Hey, {name}! Want to have lunch... huh?\"":
    "\"H\u00e9, {name}\u2009! On mange ensemble... hein\u2009?\"",

  // day3_lunch_collision_seoyeon_yuna
  "\"...{name}. Come with me.\"":
    "\"...{name}. Viens avec moi.\"",

  // day3_lunch_collision_seoyeon_dain
  "\"Hey, {name}! Let's go eat! Oh... Seoyeon too?\"":
    "\"H\u00e9, {name}\u2009! Allons manger\u2009! Oh... Seoyeon aussi\u2009?\"",

  // day3_lunch_tension_1
  "*Suddenly, the classroom fills with tension. Their eyes meeting each other don't look friendly.*":
    "*Soudain, la salle de classe se remplit de tension. Leurs regards qui se croisent n'ont rien d'amical.*",

  // day3_lunch_tension_2
  "\"...Excuse me, I spoke to {name} first?\"":
    "\"...Excusez-moi, j'ai parl\u00e9 \u00e0 {name} en premier, non\u2009?\"",

  // day3_lunch_tension_3
  "*This doesn't look good... What should I do?*":
    "*\u00c7a s'annonce mal... Qu'est-ce que je fais\u2009?*",

  // day3_lunch_choose_seoyeon
  "\"Seoyeon, let's go together. We had plans from yesterday, remember?\"":
    "\"Seoyeon, allons-y ensemble. On avait pr\u00e9vu quelque chose hier, tu te souviens\u2009?\"",

  // day3_lunch_seoyeon_others_react
  "*I can feel the others' expressions harden.*":
    "*Je sens les expressions des autres se durcir.*",

  // day3_lunch_yuna_jealous
  "\"...I see. Enjoy your meal.\"":
    "\"...Je vois. Bon app\u00e9tit.\"",

  // day3_lunch_yuna_jealous_2
  "*Yuna leaves the classroom without a word. Her back looks somehow lonely.*":
    "*Yuna quitte la salle de classe sans un mot. Son dos semble \u00e9trangement solitaire.*",

  // day3_lunch_dain_jealous
  "\"What, you're not including me? Hmph, fine!\"":
    "\"Quoi, tu ne m'inclus pas\u2009? Pfff, tr\u00e8s bien\u2009!\"",

  // day3_lunch_dain_jealous_2
  "*Dain grumbles and goes to her other friends. I'm a bit worried...*":
    "*Dain ronchonne et va rejoindre ses autres amis. Je suis un peu inquiet...*",

  // day3_lunch_with_seoyeon_start
  "\"Phew... Finally just the two of us. Honestly, {name}, don't you think too many people are interested in you lately?\"":
    "\"Ouf... Enfin rien que nous deux. Honn\u00eatement, {name}, tu ne trouves pas que trop de gens s'int\u00e9ressent \u00e0 toi ces derniers temps\u2009?\"",

  // day3_lunch_seoyeon_jealous_talk
  "*There's an unusual edge in Seoyeon's voice.*":
    "*Il y a une tension inhabituelle dans la voix de Seoyeon.*",

  // day3_lunch_seoyeon_reassure
  "\"...Really? I'll remember that.\"":
    "\"...Vraiment\u2009? Je vais retenir \u00e7a.\"",

  // day3_lunch_seoyeon_deny
  "\"...Right, I guess so. Sorry, I said something weird.\"":
    "\"...Oui, c'est vrai. Pardon, j'ai dit un truc bizarre.\"",

  // day3_lunch_seoyeon_tease
  "\"W-what! Who said I'm jealous! ...Maybe a little.\"":
    "\"Q-quoi\u2009! Qui a dit que j'\u00e9tais jalouse\u2009! ...Peut-\u00eatre un peu.\"",

  // day3_lunch_seoyeon_weekend
  "\"By the way, what are you doing this weekend? I... want to hang out somewhere together if you're free.\"":
    "\"Au fait, qu'est-ce que tu fais ce week-end\u2009? Je... voudrais qu'on aille quelque part ensemble si tu es libre.\"",

  // day3_lunch_seoyeon_caught
  "*Wait, I already have other plans... What should I do?*":
    "*Attends, j'ai d\u00e9j\u00e0 d'autres plans... Qu'est-ce que je fais\u2009?*",

  // day3_lunch_seoyeon_lie
  "\"Really?! Then let's meet on Sunday! Can I pick where to go?\"":
    "\"Vraiment\u2009?! Alors on se retrouve dimanche\u2009! Je peux choisir o\u00f9 aller\u2009?\"",

  // day3_lunch_seoyeon_honest
  "\"...What? You have other plans? With who?\"":
    "\"...Quoi\u2009? Tu as d'autres plans\u2009? Avec qui\u2009?\"",

  // day3_lunch_seoyeon_honest_2
  "*Seoyeon's eyes turn cold. The atmosphere has frozen.*":
    "*Les yeux de Seoyeon deviennent froids. L'atmosph\u00e8re s'est glac\u00e9e.*",

  // day3_lunch_seoyeon_dodge
  "\"Why are you hesitating? ...Do you have other plans?\"":
    "\"Pourquoi tu h\u00e9sites\u2009? ...Tu as d'autres plans\u2009?\"",

  // day3_lunch_seoyeon_promise
  "\"Sure, let's hang out this weekend.\"":
    "\"Bien s\u00fbr, on se voit ce week-end.\"",

  // day3_lunch_seoyeon_end
  "*We finished lunch and sat on a bench behind the school. A gentle breeze is blowing.*":
    "*Nous avons fini de d\u00e9jeuner et nous sommes assis sur un banc derri\u00e8re l'\u00e9cole. Une douce brise souffle.*",

  // day3_lunch_seoyeon_bench
  "*Quietly leaning her head on my shoulder* \"...{name}. I've been strange lately. I think about you every single day.\"":
    "*Posant doucement sa t\u00eate sur mon \u00e9paule* \"...{name}. Je suis bizarre ces derniers temps. Je pense \u00e0 toi chaque jour.\"",

  // day3_lunch_seoyeon_bench_2
  "*The scent of shampoo from Seoyeon's hair. My heart is racing.*":
    "*L'odeur de shampooing des cheveux de Seoyeon. Mon c\u0153ur bat la chamade.*",

  // day3_lunch_seoyeon_pat
  "*As I pat her head, Seoyeon buries her face* \"D-dummy... Don't do that in a place like this...\"":
    "*Quand je lui caresse la t\u00eate, Seoyeon enfouit son visage* \"I-idiot... Fais pas \u00e7a dans un endroit pareil...\"",

  // day3_lunch_seoyeon_same
  "*Seoyeon lifts her head and looks at me* \"...Really? I'm going to remember that.\"":
    "*Seoyeon rel\u00e8ve la t\u00eate et me regarde* \"...Vraiment\u2009? Je vais m'en souvenir.\"",

  // day3_lunch_seoyeon_silent
  "*Seoyeon quietly takes my hand* \"...This is nice. Just like this.\"":
    "*Seoyeon prend doucement ma main* \"...C'est bien. Juste comme \u00e7a.\"",

  // day3_lunch_seoyeon_freetalk
  "*Sitting side by side with Seoyeon on the bench behind the school, chatting.*":
    "*Assis c\u00f4te \u00e0 c\u00f4te avec Seoyeon sur le banc derri\u00e8re l'\u00e9cole, en train de discuter.*",

  // day3_lunch_seoyeon_bell
  "*The bell rings for class. Time with Seoyeon felt magically short.*":
    "*La cloche sonne pour le cours. Le temps pass\u00e9 avec Seoyeon a sembl\u00e9 magiquement court.*",

  // day3_lunch_choose_yuna
  "\"Yuna, let's go together.\"":
    "\"Yuna, allons-y ensemble.\"",

  // day3_lunch_yuna_others_react
  "*I decided to go with Yuna.*":
    "*J'ai d\u00e9cid\u00e9 d'aller avec Yuna.*",

  // day3_lunch_yuna_seoyeon_jealous
  "\"...Okay. Got it.\"":
    "\"...D'accord. Compris.\"",

  // day3_lunch_with_yuna_start
  "\"...Follow me.\"":
    "\"...Suis-moi.\"",

  // day3_lunch_yuna_rooftop
  "*I followed Yuna to the rooftop. Yuna lays down a blanket on the floor and pulls out a lunchbox from her bag.*":
    "*J'ai suivi Yuna jusqu'au toit. Yuna \u00e9tale une couverture par terre et sort un bento de son sac.*",

  // day3_lunch_yuna_bento
  "\"...I made it. For two.\"":
    "\"...Je l'ai pr\u00e9par\u00e9. Pour deux.\"",

  // day3_lunch_yuna_bento_2
  "*Two lunch boxes placed side by side. One with a black lid, one with a pink lid. Did Yuna make these herself?*":
    "*Deux bo\u00eetes \u00e0 d\u00e9jeuner plac\u00e9es c\u00f4te \u00e0 c\u00f4te. L'une avec un couvercle noir, l'autre avec un couvercle rose. Yuna les a pr\u00e9par\u00e9es elle-m\u00eame\u2009?*",

  // day3_lunch_yuna_bento_ask
  "*Looking away* \"...You're perceptive. Throw it away if it's bad.\"":
    "*D\u00e9tournant le regard* \"...T'es perspicace. Jette-le si c'est mauvais.\"",

  // day3_lunch_yuna_bento_taste
  "*I take a bite. Surprisingly... it's actually really good!*":
    "*J'en prends une bouch\u00e9e. \u00c9tonnamment... c'est vraiment bon\u2009!*",

  // day3_lunch_yuna_bento_eat
  "*Watching me eat, she smiles ever so slightly* \"...Is it good?\"":
    "*En me regardant manger, elle sourit l\u00e9g\u00e8rement* \"...C'est bon\u2009?\"",

  // day3_lunch_yuna_lap
  "*After finishing the lunchbox, a gentle breeze makes me drowsy. Yuna suddenly pushes down on my shoulder.*":
    "*Apr\u00e8s avoir fini le bento, une douce brise me rend somnolent. Yuna appuie soudain sur mon \u00e9paule.*",

  // day3_lunch_yuna_lap_2
  "\"...Lie down. On my lap.\"":
    "\"...Allonge-toi. Sur mes genoux.\"",

  // day3_lunch_yuna_lap_yes
  "*As I lie down, Yuna strokes my hair* \"...Just five minutes.\"":
    "*Quand je m'allonge, Yuna caresse mes cheveux* \"...Juste cinq minutes.\"",

  // day3_lunch_yuna_lap_no
  "\"...Fine.\"":
    "\"...Bien.\"",

  // day3_lunch_yuna_lap_talk
  "*Quietly stroking my hair* \"...When we're like this, it feels like you're mine.\"":
    "*Caressant doucement mes cheveux* \"...Quand on est comme \u00e7a, j'ai l'impression que tu es \u00e0 moi.\"",

  // day3_lunch_yuna_freetalk
  "*Lying on Yuna's lap, looking up at the sky from the rooftop, chatting.*":
    "*Allong\u00e9 sur les genoux de Yuna, regardant le ciel depuis le toit, en train de discuter.*",

  // day3_lunch_yuna_talk_1_jealous
  "\"...{name}. I thought you were only nice to me.\"":
    "\"...{name}. Je croyais que tu n'\u00e9tais gentil qu'avec moi.\"",

  // day3_lunch_yuna_single_end
  "*I spent a peaceful lunch time with Yuna.*":
    "*J'ai pass\u00e9 un d\u00e9jeuner paisible avec Yuna.*",

  // day3_lunch_yuna_talk_2
  "*There's thorns in Yuna's words.*":
    "*Il y a des \u00e9pines dans les mots de Yuna.*",

  // day3_lunch_yuna_special
  "\"...Really? Prove it. Tomorrow night.\"":
    "\"...Vraiment\u2009? Prouve-le. Demain soir.\"",

  // day3_lunch_yuna_everyone
  "\"...I see. So I'm just one of 'everyone'.\"":
    "\"...Je vois. Alors je suis juste une parmi \u00ab\u2009tout le monde\u2009\u00bb.\"",

  // day3_lunch_yuna_question
  "\"...You don't need to know. Not yet.\"":
    "\"...T'as pas besoin de savoir. Pas encore.\"",

  // day3_lunch_yuna_warning
  "\"Remember one thing. If you betray me... you'll regret it.\"":
    "\"Retiens une chose. Si tu me trahis... tu le regretteras.\"",

  // day3_lunch_yuna_warning_2
  "*Yuna's eyes flashed eerily for a moment... That was a joke, right?*":
    "*Les yeux de Yuna ont brill\u00e9 de fa\u00e7on sinistre un instant... C'\u00e9tait une blague, non\u2009?*",

  // day3_lunch_choose_dain
  "\"Dain, let's go eat together.\"":
    "\"Dain, allons manger ensemble.\"",

  // day3_lunch_dain_others_react
  "*I decided to go with Dain.*":
    "*J'ai d\u00e9cid\u00e9 d'aller avec Dain.*",

  // day3_lunch_dain_seoyeon_jealous
  "\"...Okay. See you later.\"":
    "\"...D'accord. \u00c0 plus tard.\"",

  // day3_lunch_with_dain_start
  "\"Yay! {name} is the best! Let's go, today's lunch is chicken!\"":
    "\"Youpi\u2009! {name} est le meilleur\u2009! Allons-y, aujourd'hui c'est poulet \u00e0 la cantine\u2009!\"",

  // day3_lunch_dain_talk_1
  "\"By the way... did you see Seoyeon's face just now? Totally jealous, right?\"":
    "\"Au fait... t'as vu la t\u00eate de Seoyeon \u00e0 l'instant\u2009? Compl\u00e8tement jalouse, non\u2009?\"",

  // day3_lunch_dain_talk_2
  "*Dain glances around and lowers her voice.*":
    "*Dain jette un coup d'\u0153il autour d'elle et baisse la voix.*",

  // day3_lunch_dain_talk_3
  "\"Hey, be honest with me. Are you dating Seoyeon? Or Yuna? I know they're both interested in you.\"":
    "\"H\u00e9, sois honn\u00eate avec moi. Tu sors avec Seoyeon\u2009? Ou Yuna\u2009? Je sais qu'elles s'int\u00e9ressent toutes les deux \u00e0 toi.\"",

  // day3_lunch_dain_confess
  "\"W-what?! Saying that out of nowhere... Geez!\"":
    "\"Q-quoi\u2009?! Dire \u00e7a comme \u00e7a, de nulle part... Oh l\u00e0 l\u00e0\u2009!\"",

  // day3_lunch_dain_friends
  "\"Hmm, really? Their faces say otherwise though... Well, whatever!\"":
    "\"Hmm, vraiment\u2009? Leurs t\u00eates disent le contraire pourtant... Bah, peu importe\u2009!\"",

  // day3_lunch_dain_jealous_tease
  "\"Huh?! Who's jealous! I'm just curious! ...Maybe a little bothered though!\"":
    "\"Hein\u2009?! Qui est jalouse\u2009! Je suis juste curieuse\u2009! ...\u00c7a m'\u00e9nerve peut-\u00eatre un peu quand m\u00eame\u2009!\"",

  // day3_lunch_dain_serious
  "*Suddenly putting down her chopsticks, quietly* \"...{name}. Let me ask you something seriously.\"":
    "*Posant soudain ses baguettes, calmement* \"...{name}. Laisse-moi te demander quelque chose s\u00e9rieusement.\"",

  // day3_lunch_dain_serious_2
  "\"...What am I to you? Just a friend? Or... something else?\"":
    "\"...Je suis quoi pour toi\u2009? Juste une amie\u2009? Ou... autre chose\u2009?\"",

  // day3_lunch_dain_serious_choice
  "*Dain's eyes are different from usual. She's serious.*":
    "*Les yeux de Dain sont diff\u00e9rents de d'habitude. Elle est s\u00e9rieuse.*",

  // day3_lunch_dain_special
  "*Her face turns beet red and she punches my arm* \"Wh-what?! Really?! My heart almost exploded, you know!\"":
    "*Son visage devient rouge pivoine et elle me donne un coup de poing au bras* \"Qu-quoi\u2009?! Vraiment\u2009?! Mon c\u0153ur a failli exploser, tu sais\u2009!\"",

  // day3_lunch_dain_unsure
  "*Looking slightly disappointed but quickly brightening up* \"...Fine! Then I'll show you how special I can be! Just watch!\"":
    "*L'air l\u00e9g\u00e8rement d\u00e9\u00e7ue mais retrouvant vite le sourire* \"...Tr\u00e8s bien\u2009! Alors je vais te montrer \u00e0 quel point je peux \u00eatre sp\u00e9ciale\u2009! Tu vas voir\u2009!\"",

  // day3_lunch_dain_friend
  "*Her expression freezes for a moment before she forces a laugh* \"...Ahaha, right? A friend. Yeah, friends. Haha!\"":
    "*Son expression se fige un instant avant qu'elle ne force un rire* \"...Ahaha, c'est \u00e7a\u2009? Une amie. Oui, des amis. Haha\u2009!\"",

  // day3_lunch_dain_freetalk
  "*Sitting side by side with Dain in the cafeteria, chatting. She's shier than usual.*":
    "*Assis c\u00f4te \u00e0 c\u00f4te avec Dain \u00e0 la cantine, en train de discuter. Elle est plus timide que d'habitude.*",

  // day3_lunch_dain_end
  "\"Anyway! You're coming to my practice tomorrow, right? You better come!\"":
    "\"Bref\u2009! Tu viens \u00e0 mon entra\u00eenement demain, hein\u2009? T'as int\u00e9r\u00eat \u00e0 venir\u2009!\"",

  // day3_lunch_dain_conflict
  "*Tomorrow... I have other plans too...*":
    "*Demain... j'ai d'autres plans aussi...*",

  // day3_lunch_dain_promise
  "\"Great! Look forward to it! I'll show you my amazing spike!\"":
    "\"Super\u2009! J'ai h\u00e2te\u2009! Je vais te montrer mon smash incroyable\u2009!\"",

  // day3_lunch_dain_maybe
  "\"...What, if you have time? Do you have other plans?\"":
    "\"...Quoi, si t'as le temps\u2009? T'as d'autres plans\u2009?\"",

  // day3_lunch_dain_suspicious
  "\"Hmph, fine. But if you stand me up, I'll be really mad!\"":
    "\"Pfff, d'accord. Mais si tu me poses un lapin, je serai vraiment en col\u00e8re\u2009!\"",

  // day3_lunch_together_propose
  "\"C-can't we all eat together?\"":
    "\"O-on ne pourrait pas tous manger ensemble\u2009?\"",

  // day3_lunch_together_react
  "*A moment of silence. Three pairs of eyes scan each other.*":
    "*Un moment de silence. Trois paires d'yeux se scrutent mutuellement.*",

  // day3_lunch_together_awkward
  "\"...Fine. Let's all eat together.\"":
    "\"...Bon. Mangeons tous ensemble.\"",

  // day3_lunch_together_2
  "*Lunch in the cafeteria. The atmosphere is unusually tense.*":
    "*D\u00e9jeuner \u00e0 la cantine. L'atmosph\u00e8re est inhabituellement tendue.*",

  // day3_lunch_together_3
  "\"Hey, {name}. You're coming to see my volleyball practice tomorrow, right?\"":
    "\"H\u00e9, {name}. Tu viens voir mon entra\u00eenement de volley demain, hein\u2009?\"",

  // day3_lunch_together_4
  "\"Huh? {name} has plans with me tomorrow?\"":
    "\"Hein\u2009? {name} a des plans avec moi demain, non\u2009?\"",

  // day3_lunch_together_yuna
  "\"...{name} promised me. Tomorrow night.\"":
    "\"...{name} m'a promis. Demain soir.\"",

  // day3_lunch_together_explosion
  "*The air freezes rapidly. All eyes are on me.*":
    "*L'air se glace instantan\u00e9ment. Tous les regards sont braqu\u00e9s sur moi.*",

  // day3_lunch_together_silence
  "*A suffocating silence fills the air. Seoyeon's hands are trembling, Yuna's eyes darken, and Dain's expression hardens.*":
    "*Un silence \u00e9touffant emplit l'air. Les mains de Seoyeon tremblent, les yeux de Yuna s'assombrissent et l'expression de Dain se durcit.*",

  // day3_lunch_together_seoyeon_react
  "*Slowly putting down her spoon* \"...So. I wasn't the only special one.\"":
    "*Posant lentement sa cuill\u00e8re* \"...Alors. Je n'\u00e9tais pas la seule \u00e0 \u00eatre sp\u00e9ciale.\"",

  // day3_lunch_together_yuna_lie
  "*Standing up* \"...I knew. That {name} didn't only promise me.\"":
    "*Se levant* \"...Je savais. Que {name} n'avait pas promis qu'\u00e0 moi.\"",

  // day3_lunch_together_yuna_lie_2
  "\"Huh? Really? Then why did you come knowing that?!\"":
    "\"Hein\u2009? Vraiment\u2009? Alors pourquoi tu es venue en le sachant\u2009?!\"",

  // day3_lunch_together_yuna_lie_3
  "*Looking at me coldly* \"...That was a lie. I didn't know either. I just... didn't want to cry in front of the others.\"":
    "*Me regardant froidement* \"...C'\u00e9tait un mensonge. Je ne savais pas non plus. Je... ne voulais juste pas pleurer devant les autres.\"",

  // day3_lunch_together_confront
  "\"Wait... {name}, did you make promises with all of us?\"":
    "\"Attends... {name}, tu as fait des promesses \u00e0 chacune d'entre nous\u2009?\"",

  // day3_lunch_apologize
  "\"I'm sorry... I couldn't say no to anyone...\"":
    "\"Je suis d\u00e9sol\u00e9... Je n'ai pas pu dire non \u00e0 qui que ce soit...\"",

  // day3_lunch_apologize_react
  "\"...Being honest is good, but still annoying.\"":
    "\"...\u00catre honn\u00eate c'est bien, mais c'est quand m\u00eame \u00e9nervant.\"",

  // day3_lunch_excuse
  "\"Well, the times are all different... Dain's in the morning, others in the evening...\"":
    "\"Ben, les horaires sont tous diff\u00e9rents... Dain c'est le matin, les autres c'est le soir...\"",

  // day3_lunch_excuse_react
  "\"That's not the problem... Ugh, I don't know. I'm confused too.\"":
    "\"C'est pas le probl\u00e8me... Pfff, je sais pas. Je suis perdue moi aussi.\"",

  // day3_lunch_excuse_react_2
  "\"Hmm... can't you just manage your time well? I'm fine with it.\"":
    "\"Hmm... tu peux pas juste bien g\u00e9rer ton temps\u2009? Moi \u00e7a me va.\"",

  // day3_lunch_excuse_react_3
  "\"...Someone like you might be fine with that. But I... (stands up) I'm leaving first.\"":
    "\"...Quelqu'un comme toi, \u00e7a lui convient peut-\u00eatre. Mais moi... (se l\u00e8ve) Je pars en premier.\"",

  // day3_lunch_run
  "*I hurriedly finished my food and escaped. That was the worst choice.*":
    "*J'ai fini mon repas en vitesse et je me suis \u00e9chapp\u00e9. C'\u00e9tait le pire choix.*",

  // day3_lunch_together_end
  "*Lunch ended in an awkward atmosphere. I'm worried about the weekend...*":
    "*Le d\u00e9jeuner s'est termin\u00e9 dans une atmosph\u00e8re g\u00ean\u00e9e. Je suis inquiet pour le week-end...*",

  // day3_lunch_escape
  "\"Oh, I just remembered something I need to do! See you later!\"":
    "\"Oh, je viens de me rappeler un truc que je dois faire\u2009! \u00c0 plus\u2009!\"",

  // day3_lunch_escape_2
  "*I escaped the classroom as if running away. I think I heard sighs behind me...*":
    "*Je me suis \u00e9chapp\u00e9 de la classe comme si je fuyais. J'ai cru entendre des soupirs derri\u00e8re moi...*",

  // day3_lunch_single_approach
  "*It's lunch time. Who should I eat with?*":
    "*C'est l'heure du d\u00e9jeuner. Avec qui devrais-je manger\u2009?*",

  // day3_lunch_nurse
  "*I headed to the nurse's office during lunch. The teacher is eating a sandwich at her desk.*":
    "*Je me suis dirig\u00e9 vers l'infirmerie pendant le d\u00e9jeuner. L'infirmi\u00e8re mange un sandwich \u00e0 son bureau.*",

  // day3_lunch_nurse_2
  "*Beaming when she sees me* \"Oh my, {name}! Have you eaten? Want to eat with teacher?\"":
    "*Rayonnante en me voyant* \"Oh, {name}\u2009! Tu as mang\u00e9\u2009? Tu veux manger avec moi\u2009?\"",

  // day3_lunch_nurse_3
  "*Locking the door* \"Actually... I wanted some time alone with you. Watching out for the kids is exhausting.\"":
    "*Fermant la porte \u00e0 cl\u00e9* \"En fait... je voulais un moment seule avec toi. Surveiller les \u00e9l\u00e8ves, c'est \u00e9puisant.\"",

  // day3_lunch_nurse_freetalk
  "*Having lunch together in the nurse's office. My heart races at the secretive atmosphere.*":
    "*D\u00e9jeuner ensemble dans l'infirmerie. Mon c\u0153ur s'emballe dans cette atmosph\u00e8re secr\u00e8te.*",

  // day3_lunch_nurse_4
  "*Glancing at the clock with a sigh* \"...Time's up. Get to class. See you Sunday.\"":
    "*Jetant un coup d'\u0153il \u00e0 l'horloge en soupirant* \"...C'est l'heure. Retourne en cours. \u00c0 dimanche.\"",

  // day3_lunch_teacher
  "*I visited the teachers' office during lunch. The teacher is having coffee alone.*":
    "*Je suis all\u00e9 au bureau des professeurs pendant le d\u00e9jeuner. La professeure boit un caf\u00e9 toute seule.*",

  // day3_lunch_teacher_2
  "*Surprised to see me, then brightening up* \"...{name}? What brings you here? It's my lunch break...\"":
    "*Surprise de me voir, puis s'\u00e9clairant* \"...{name}\u2009? Qu'est-ce qui t'am\u00e8ne\u2009? C'est ma pause d\u00e9jeuner...\"",

  // day3_lunch_teacher_3
  "*Blushing* \"...Come in. Close the door.\"":
    "*Rougissant* \"...Entre. Ferme la porte.\"",

  // day3_lunch_teacher_freetalk
  "*Having lunch with the homeroom teacher in the teachers' office.*":
    "*En train de d\u00e9jeuner avec la professeure principale dans le bureau des professeurs.*",

  // day3_lunch_teacher_4
  "*Putting down her coffee cup* \"...This shouldn't be happening. A student coming to spend lunch with a teacher, and the teacher enjoying it. Does that even make sense?\"":
    "*Posant sa tasse de caf\u00e9* \"...\u00c7a ne devrait pas arriver. Un \u00e9l\u00e8ve qui vient d\u00e9jeuner avec une professeure, et la professeure qui appr\u00e9cie \u00e7a. Est-ce que \u00e7a a le moindre sens\u2009?\"",

  // day3_lunch_seoyeon_only
  "\"{name}! Let's eat together!\"":
    "\"{name}\u2009! Mangeons ensemble\u2009!\"",

  // day3_lunch_yuna_only
  "\"...{name}. Rooftop.\"":
    "\"...{name}. Sur le toit.\"",

  // day3_lunch_dain_only
  "\"Let's go eat! Today's chicken day!\"":
    "\"Allons manger\u2009! Aujourd'hui c'est jour de poulet\u2009!\"",

  // day3_lunch_normal
  "*No special plans... I'll just have a normal lunch today.*":
    "*Pas de plans particuliers... Je vais juste d\u00e9jeuner normalement aujourd'hui.*",

  // day3_lunch_normal_2
  "*I hear laughter around me. Everyone looks happy with their friends.*":
    "*J'entends des rires autour de moi. Tout le monde a l'air heureux avec ses amis.*",

  // day3_lunch_alone
  "*I quietly ate lunch alone. What should I do this weekend...*":
    "*J'ai mang\u00e9 tranquillement tout seul. Qu'est-ce que je vais faire ce week-end...*",
};

// Choices translations - English array -> French array
const choicesTranslations = {
  // day3_lunch_collision_no_seoyeon_choose
  "Have lunch with Yuna": "D\u00e9jeuner avec Yuna",
  "Have lunch with Dain": "D\u00e9jeuner avec Dain",
  "Suggest eating together": "Proposer de manger ensemble",
  "Run away to eat alone": "S'enfuir pour manger seul",

  // day3_lunch_tension_3
  "Have lunch with Seoyeon": "D\u00e9jeuner avec Seoyeon",
  // "Have lunch with Yuna" - already above
  // "Have lunch with Dain" - already above
  // "Suggest eating together" - already above
  // "Run away to eat alone" - already above

  // day3_lunch_seoyeon_jealous_talk
  "\"You're the most important to me\"": "\"Tu es la plus importante pour moi\"",
  "\"They're just friends\"": "\"Ce sont juste des amis\"",
  "\"Why, are you jealous?\"": "\"Pourquoi, tu es jalouse\u2009?\"",

  // day3_lunch_seoyeon_caught
  "\"How about Sunday?\" (Lie)": "\"Et dimanche\u2009?\" (Mensonge)",
  "Be honest": "\u00catre honn\u00eate",
  "Dodge the question": "\u00c9luder la question",

  // day3_lunch_seoyeon_bench_2
  "*Pat Seoyeon's head*": "*Caresser la t\u00eate de Seoyeon*",
  "\"I feel the same way\"": "\"Je ressens la m\u00eame chose\"",
  "*Rester immobile*": "*Rester immobile*",  // already in French

  // day3_lunch_yuna_bento_2
  "\"You made these yourself?\"": "\"Tu les as pr\u00e9par\u00e9s toi-m\u00eame\u2009?\"",
  "*Quietly taste it*": "*Go\u00fbter en silence*",

  // day3_lunch_yuna_lap_2
  "*Lie on Yuna's lap*": "*S'allonger sur les genoux de Yuna*",
  "\"It's okay, not yet...\"": "\"C'est bon, pas encore...\"",

  // day3_lunch_yuna_talk_2
  "\"You're special to me\"": "\"Tu es sp\u00e9ciale pour moi\"",
  "\"I try to be nice to everyone\"": "\"J'essaie d'\u00eatre gentil avec tout le monde\"",
  "\"Why do you say that?\"": "\"Pourquoi tu dis \u00e7a\u2009?\"",

  // day3_lunch_dain_talk_3
  "\"No, I like you\"": "\"Non, c'est toi que j'aime bien\"",
  "\"We're just friends\"": "\"On est juste amis\"",
  "\"Why, are you jealous too?\"": "\"Pourquoi, toi aussi tu es jalouse\u2009?\"",

  // day3_lunch_dain_serious_choice
  "\"You're special, Dain\"": "\"Tu es sp\u00e9ciale, Dain\"",
  "\"I'm not sure yet\"": "\"Je ne suis pas encore s\u00fbr\"",
  "\"A precious friend\"": "\"Une amie pr\u00e9cieuse\"",

  // day3_lunch_dain_conflict
  "\"Of course!\"": "\"Bien s\u00fbr\u2009!\"",
  "\"If I have time...\"": "\"Si j'ai le temps...\"",

  // day3_lunch_together_confront
  "Apologize honestly": "S'excuser honn\u00eatement",
  "Make excuses about different times": "Inventer des excuses sur les horaires",
  "Run away": "S'enfuir",

  // day3_lunch_single_approach
  "Eat with Seoyeon": "Manger avec Seoyeon",
  "Eat with Yuna": "Manger avec Yuna",
  "Eat with Dain": "Manger avec Dain",
  "Visit the nurse's office": "Aller \u00e0 l'infirmerie",
  "Find the homeroom teacher": "Chercher la professeure principale",
  "Eat alone": "Manger seul",
};

// Context translations
const contextTranslations = {
  "Sitting with Seoyeon on a bench behind school. She leaned her head on my shoulder and confessed she thinks about me every day. Sweet atmosphere.":
    "Assis avec Seoyeon sur un banc derri\u00e8re l'\u00e9cole. Elle a pos\u00e9 sa t\u00eate sur mon \u00e9paule et a avou\u00e9 qu'elle pense \u00e0 moi chaque jour. Atmosph\u00e8re douce.",

  "Lying on Yuna's lap on the rooftop. Yuna made a homemade lunchbox and is stroking my hair. Quiet, peaceful atmosphere.":
    "Allong\u00e9 sur les genoux de Yuna sur le toit. Yuna a pr\u00e9par\u00e9 un bento maison et me caresse les cheveux. Atmosph\u00e8re calme et paisible.",

  "Having lunch with Dain. She asked 'What am I to you?' seriously. She's being shy instead of her usual energetic self.":
    "En train de d\u00e9jeuner avec Dain. Elle m'a demand\u00e9 \u00ab\u2009Je suis quoi pour toi\u2009?\u2009\u00bb s\u00e9rieusement. Elle est timide au lieu de son \u00e9nergie habituelle.",

  "Having lunch alone with the school nurse in her office. She locked the door. It's like a secret date. The thrill of a forbidden love.":
    "En train de d\u00e9jeuner seul avec l'infirmi\u00e8re scolaire dans son bureau. Elle a ferm\u00e9 la porte \u00e0 cl\u00e9. C'est comme un rendez-vous secret. Le frisson d'un amour interdit.",

  "Having lunch alone with the homeroom teacher in her office. She shyly closed the door. Secret date atmosphere.":
    "En train de d\u00e9jeuner seul avec la professeure principale dans son bureau. Elle a timidement ferm\u00e9 la porte. Atmosph\u00e8re de rendez-vous secret.",
};

// Now let's process the file
// Strategy: parse the JS object, find fr blocks, replace text/choices/context

// We'll use a regex-based approach to find fr blocks and replace their contents
// This is safer than trying to parse the complex JS file

// First, let's replace text fields in fr blocks
// The pattern is: within a "fr": { ... } block, find "text": "..." and replace

// We need to be careful to only modify text within fr blocks.
// Approach: find each "fr": { block, extract its content, replace, and put back

function replaceFrBlocks(content) {
  // Match "fr": { ... } blocks (possibly with nested objects for choices)
  // We need to handle nested braces properly

  let result = '';
  let pos = 0;

  // Find each occurrence of "fr": {
  const frPattern = /"fr":\s*\{/g;
  let match;

  while ((match = frPattern.exec(content)) !== null) {
    const startOfFr = match.index;
    const braceStart = content.indexOf('{', startOfFr + 4); // after "fr":

    // Find the matching closing brace
    let depth = 1;
    let i = braceStart + 1;
    while (i < content.length && depth > 0) {
      if (content[i] === '{') depth++;
      if (content[i] === '}') depth--;
      i++;
    }
    const endOfFr = i; // position after the closing }

    // Extract the fr block content
    let frBlock = content.substring(braceStart, endOfFr);

    // Replace text field
    frBlock = frBlock.replace(/"text":\s*"((?:[^"\\]|\\.)*)"/g, (m, textContent) => {
      if (textContent === '' || textContent.trim() === '') return m; // skip empty

      // Check if it's already French (simple heuristic - skip if contains common French words)
      // Actually, we should just check our translation map
      if (textTranslations[textContent]) {
        return `"text": "${textTranslations[textContent]}"`;
      }
      return m;
    });

    // Replace choices
    frBlock = frBlock.replace(/"choices":\s*\[([\s\S]*?)\]/g, (m, choicesContent) => {
      // Extract individual choice strings
      let newChoicesContent = choicesContent;

      // Find and replace each choice string
      const choicePattern = /"((?:[^"\\]|\\.)*)"/g;
      let choiceMatch;
      const replacements = [];

      while ((choiceMatch = choicePattern.exec(choicesContent)) !== null) {
        const original = choiceMatch[1];
        if (choicesTranslations[original]) {
          replacements.push({ from: choiceMatch[0], to: `"${choicesTranslations[original]}"` });
        }
      }

      for (const r of replacements) {
        newChoicesContent = newChoicesContent.replace(r.from, r.to);
      }

      return `"choices": [${newChoicesContent}]`;
    });

    // Replace context field
    frBlock = frBlock.replace(/"context":\s*"((?:[^"\\]|\\.)*)"/g, (m, ctxContent) => {
      if (ctxContent === '') return m;
      if (contextTranslations[ctxContent]) {
        return `"context": "${contextTranslations[ctxContent]}"`;
      }
      return m;
    });

    // Add everything before this fr block
    result += content.substring(pos, braceStart);
    // Add the modified fr block
    result += frBlock;
    pos = endOfFr;
  }

  // Add the remaining content
  result += content.substring(pos);

  return result;
}

const newContent = replaceFrBlocks(content);

fs.writeFileSync(filePath, newContent, 'utf8');

console.log('French translations applied successfully!');

// Verification: count remaining English text in fr blocks
const frBlockPattern = /"fr":\s*\{/g;
let verifyMatch;
let totalFrBlocks = 0;
let blocksWithEnglish = 0;

let verifyContent = newContent;
while ((verifyMatch = frBlockPattern.exec(verifyContent)) !== null) {
  totalFrBlocks++;
  const braceStart = verifyContent.indexOf('{', verifyMatch.index + 4);
  let depth = 1;
  let i = braceStart + 1;
  while (i < verifyContent.length && depth > 0) {
    if (verifyContent[i] === '{') depth++;
    if (verifyContent[i] === '}') depth--;
    i++;
  }
  const block = verifyContent.substring(braceStart, i);

  // Check text field
  const textMatch = block.match(/"text":\s*"((?:[^"\\]|\\.)*)"/);
  if (textMatch && textMatch[1]) {
    const text = textMatch[1];
    // Simple heuristic: if text contains common English words and no French accented chars
    if (/\b(the|is|are|was|were|have|has|had|I |you |my |her |his |she |he |with |from |this|that|what|who|why|how|can't|don't|didn't|should|would|could)\b/i.test(text) && text !== '') {
      blocksWithEnglish++;
      console.log(`  WARNING: Possibly untranslated text in fr block: "${text.substring(0, 80)}..."`);
    }
  }

  // Check choices
  const choicesMatch = block.match(/"choices":\s*\[([\s\S]*?)\]/);
  if (choicesMatch) {
    const choicePattern = /"((?:[^"\\]|\\.)*)"/g;
    let cm;
    while ((cm = choicePattern.exec(choicesMatch[1])) !== null) {
      const choice = cm[1];
      if (/\b(the|with|eat|lunch|have|run|away|suggest|visit|find|alone|honest|dodge|apologize|excuse|pat|lie|taste|stay)\b/i.test(choice)) {
        console.log(`  WARNING: Possibly untranslated choice: "${choice}"`);
      }
    }
  }
}

console.log(`\nTotal fr blocks found: ${totalFrBlocks}`);
console.log(`Blocks with possibly untranslated text: ${blocksWithEnglish}`);
