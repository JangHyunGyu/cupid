const fs = require('fs');

// Translation map: English text (as found in fr blocks) -> French translation
// Also includes Korean text that was left untranslated in fr blocks
const translations = {
  // ===== day5_1_morning.js =====

  // Morning wake-up sequence
  "*Sunday morning. Warm sunlight filters through the curtains.*":
    "*Dimanche matin. Un doux soleil filtre à travers les rideaux.*",
  "*I opened my eyes. It's been a while since I woke up on my own without an alarm. The clock reads 8 AM.*":
    "*J'ai ouvert les yeux. Ça faisait longtemps que je ne m'étais pas réveillé tout seul, sans alarme. L'horloge indique 8 heures.*",
  "*I stretch and stare at the ceiling. It doesn't feel real that today is Sunday.*":
    "*Je m'étire en fixant le plafond. J'ai du mal à réaliser qu'on est dimanche.*",
  "*It's only been five days since I transferred to this school. It feels like it's been at least a month.*":
    "*Ça ne fait que cinq jours que j'ai été transféré dans cette école. On dirait que ça fait au moins un mois.*",
  "*I washed my face and stood in front of the mirror. The face staring back at me looks... different from before I transferred.*":
    "*Je me suis lavé le visage et me suis planté devant le miroir. Le visage qui me fixe a l'air... différent d'avant mon transfert.*",
  "*So much happened over the past four days. A new class, new people... and some very special encounters.*":
    "*Tant de choses se sont passées en quatre jours. Une nouvelle classe, de nouvelles personnes... et des rencontres très spéciales.*",
  "*I picked up the phone from my bed. There are notifications on the screen.*":
    "*J'ai attrapé mon téléphone sur le lit. Des notifications s'affichent à l'écran.*",

  // Seoyeon couple messages
  "\"Good morning ☀️ The weather's amazing today! I bet the flowers in the school garden are blooming. Wanna go see them together?\"":
    "\"Bonjour ☀️ Il fait super beau aujourd'hui ! Je parie que les fleurs du jardin de l'école sont en train d'éclore. Tu veux aller les voir ensemble ?\"",
  "*Reading Seoyeon's message makes me smile without even trying. Talking about flowers first thing in the morning—that's so like her.*":
    "*Le message de Seoyeon me fait sourire malgré moi. Parler de fleurs dès le matin, c'est tellement elle.*",
  "(I replied, \"Sounds great! Let's meet at the school front gate. There's a place I want to show you too 😊\")":
    "(J'ai répondu : \"Super ! On se retrouve devant le portail de l'école. J'ai aussi un endroit à te montrer 😊\")",

  // Yuna couple messages
  "\"...You up? You're going to school today, right? ...I'll go too. Front gate. 10 o'clock.\"":
    "\"...T'es réveillé ? Tu vas à l'école aujourd'hui, non ? ...J'y vais aussi. Portail principal. 10 heures.\"",
  "(Short and sweet, just like Yuna... But if you look closely, there's a hint of excitement in the words \"I'll go too.\")":
    "(Court et direct, tout à fait Yuna... Mais en y regardant de plus près, il y a une pointe d'excitation dans les mots « J'y vais aussi. »)",
  "(\"Yeah, I'll be there. Wait for me.\" I replied calmly, but my heart is racing.)":
    "(\"Ouais, j'y serai. Attends-moi.\" J'ai répondu calmement, mais mon cœur bat la chamade.)",

  // Dain couple messages
  "\"Good morning!! ☀️🏐 Let's go to school today!! Meet me at the front gate!! I'll run over!! Don't you DARE be late!!!\"":
    "\"Bonjour !! ☀️🏐 On va à l'école aujourd'hui !! Retrouve-moi au portail !! Je cours jusqu'à toi !! T'as PAS INTÉRÊT à être en retard !!!\"",
  "*...So many exclamation marks. Dain's overflowing with energy from the crack of dawn. But somehow, messages like this give me energy too.*":
    "*...Autant de points d'exclamation. Dain déborde d'énergie dès l'aube. Mais bizarrement, ce genre de messages me donne de l'énergie aussi.*",
  "(I texted back, \"Haha, got it! I won't be late. Don't run—be careful on your way!\")":
    "(J'ai répondu : \"Haha, c'est noté ! Je serai pas en retard. Ne cours pas, fais attention en chemin !\")",

  // Nurse couple messages
  "\"Did you sleep well? The weather's so nice today, I'm feeling a little giddy. Want to meet in front of the school? ...Meeting on a weekend feels different, doesn't it? 💕\"":
    "\"Tu as bien dormi ? Il fait tellement beau aujourd'hui, je me sens un peu fébrile. On se retrouve devant l'école ? ...Se voir le week-end, c'est différent, non ? 💕\"",
  "*My face turned red at the heart emoji she sent. Meeting outside of school definitely feels different.*":
    "*Mon visage a rougi en voyant l'emoji cœur qu'elle a envoyé. Se voir en dehors de l'école, c'est vraiment différent.*",
  "(\"Yes, I'm looking forward to it. Let's meet at the front gate at 10!\" I started writing formally but... it felt a bit awkward.)":
    "(\"Oui, j'ai hâte. On se retrouve au portail à 10 heures !\" J'ai commencé à écrire de façon formelle mais... c'était un peu gênant.)",

  // Teacher couple messages
  "\"Are you coming to school today? It's the weekend, but... I have something to see you about. Front gate, 10 o'clock. You'll be in trouble if you're late.\"":
    "\"Tu viens à l'école aujourd'hui ? C'est le week-end, mais... j'ai quelque chose à voir avec toi. Portail principal, 10 heures. Gare à toi si tu es en retard.\"",
  "(\"Something to see me about,\" she says. Playing it cool, but she's the one who reached out first. I like that about her.)":
    "(\"Quelque chose à voir avec moi\", dit-elle. Elle joue les indifférentes, mais c'est elle qui a fait le premier pas. J'aime ça chez elle.)",
  "(I texted back, \"I won't be late. I'll definitely be there!\" and let out a small smile.)":
    "(J'ai répondu : \"Je serai pas en retard. J'y serai sans faute !\" et j'ai laissé échapper un petit sourire.)",

  // Pending (waited) messages - Seoyeon
  "\"Are you free today? I need someone to help with the garden... Oh, no pressure though! 😅\"":
    "\"Tu es libre aujourd'hui ? J'aurais besoin d'aide pour le jardin... Oh, sans pression hein ! 😅\"",
  "(Seoyeon's asking me to come. She says \"no pressure,\" but... I know I want to go.)":
    "(Seoyeon me demande de venir. Elle dit « sans pression », mais... je sais que j'ai envie d'y aller.)",
  "(Today, I have to tell her how I feel. I replied, \"I'll be there! Let's meet at the front gate.\")":
    "(Aujourd'hui, je dois lui dire ce que je ressens. J'ai répondu : \"J'y serai ! On se retrouve au portail.\")",

  // Pending messages - Yuna
  "\"...School. Today. Can you come? ...I have something to tell you.\"":
    "\"...L'école. Aujourd'hui. Tu peux venir ? ...J'ai quelque chose à te dire.\"",
  "(\"I have something to tell you.\" My heart skipped a beat. Could Yuna also feel the same way about me...?)":
    "(\"J'ai quelque chose à te dire.\" Mon cœur a raté un battement. Est-ce que Yuna ressentirait la même chose pour moi... ?)",
  "(I have something to say too. \"Yeah, I'll be there.\" I replied briefly and set my phone down.)":
    "(J'ai aussi quelque chose à dire. \"Ouais, j'y serai.\" J'ai répondu brièvement et posé mon téléphone.)",

  // Pending messages - Dain
  "\"Hey! Wanna come to school today?! Do you have a sec after practice? It's important!!\"":
    "\"Hé ! Tu veux venir à l'école aujourd'hui ?! T'as une minute après l'entraînement ? C'est important !!\"",
  "(She said \"it's important.\" Dain being serious is rare. I wonder what it could be.)":
    "(Elle a dit « c'est important ». Dain sérieuse, c'est rare. Je me demande ce que c'est.)",
  "(And I have something I need to say today too. I replied, \"I'll be there!! Wait for me!\")":
    "(Et moi aussi, j'ai quelque chose à dire aujourd'hui. J'ai répondu : \"J'y serai !! Attends-moi !\")",

  // Pending messages - Nurse
  "\"Are you coming to school today by any chance? I need to organize the nurse's office... It'd be nice if you could come help.\"":
    "\"Tu ne viendrais pas à l'école par hasard aujourd'hui ? Je dois ranger l'infirmerie... Ce serait sympa si tu pouvais venir m'aider.\"",
  "*Organizing the nurse's office on a weekend... It sounds like an excuse, but if it means I can see her, the reason doesn't matter.*":
    "*Ranger l'infirmerie un week-end... Ça ressemble à une excuse, mais si ça me permet de la voir, la raison importe peu.*",

  // Pending messages - Teacher
  "\"Can you come by school today? I could use help organizing some paperwork. ...Don't get any ideas, there's no hidden meaning.\"":
    "\"Tu peux passer à l'école aujourd'hui ? J'aurais besoin d'aide pour ranger de la paperasse. ...Ne te fais pas d'idées, il n'y a aucun sous-entendu.\"",
  "(\"No hidden meaning\"—somehow that makes it feel even more meaningful. Could she be feeling the same way?)":
    "(\"Aucun sous-entendu\"... bizarrement, ça rend la chose encore plus significative. Est-ce qu'elle ressentirait la même chose ?)",
  "(If today passes, I might never get another chance. I texted back, \"I'll be there!\")":
    "(Si aujourd'hui passe, je n'aurai peut-être plus jamais l'occasion. J'ai répondu : \"J'y serai !\")",

  // Default/alone morning messages
  "*I turned on my phone... but there are no new messages.*":
    "*J'ai allumé mon téléphone... mais il n'y a aucun nouveau message.*",
  "*I scroll through my chat list. Conversations from the past few days stretch on and on.*":
    "*Je fais défiler ma liste de conversations. Les échanges des derniers jours s'étirent à l'infini.*",
  "*Since transferring, I've met so many people. Seoyeon, Yuna, Dain, the school nurse, the homeroom teacher...*":
    "*Depuis mon transfert, j'ai rencontré tellement de monde. Seoyeon, Yuna, Dain, l'infirmière scolaire, le professeur principal...*",
  "*They were all so kind to me... but in the end, I never managed to properly tell any of them how I feel.*":
    "*Elles ont toutes été si gentilles avec moi... mais au final, je n'ai jamais réussi à dire à aucune d'entre elles ce que je ressens.*",
  "*...No, it's not over yet. Today is Sunday. If I go to school, maybe I'll run into someone.*":
    "*...Non, ce n'est pas encore fini. Aujourd'hui c'est dimanche. Si je vais à l'école, je croiserai peut-être quelqu'un.*",
  "*It's the last day. I'll at least take a walk around the school. Something might change.*":
    "*C'est le dernier jour. Je vais au moins faire un tour à l'école. Quelque chose changera peut-être.*",

  // Getting ready
  "*Time to get ready. I stood in front of my closet.*":
    "*Il est temps de se préparer. Je me suis planté devant mon placard.*",
  "*It's Sunday, so I don't have to wear the school uniform... but what should I wear?*":
    "*C'est dimanche, pas besoin de porter l'uniforme... mais qu'est-ce que je vais mettre ?*",
  "*What should I wear today?*":
    "*Qu'est-ce que je porte aujourd'hui ?*",
  "*A crisp shirt and jeans. Comfortable yet neat. Yeah, keeping it natural is more my style.*":
    "*Une chemise impeccable et un jean. Confortable mais soigné. Ouais, rester naturel, c'est plus mon style.*",
  "*I picked my outfit more carefully than usual. One last check in the mirror. ...Looks good, I think.*":
    "*J'ai choisi ma tenue avec plus de soin que d'habitude. Un dernier coup d'œil dans le miroir. ...Ça a l'air bien, je crois.*",
  "*I made some quick toast and ate. A quiet kitchen on a Sunday morning. I can hear birds singing outside.*":
    "*J'ai fait griller un toast rapidement et mangé. Une cuisine silencieuse un dimanche matin. J'entends les oiseaux chanter dehors.*",
  "*One final look at myself in the mirror. My eyes are definitely different from the first day I transferred.*":
    "*Un dernier regard dans le miroir. Mes yeux sont définitivement différents du premier jour de mon transfert.*",
  "*Wallet, phone, keys. All set. I stood at the front door.*":
    "*Portefeuille, téléphone, clés. Tout est prêt. Je me suis posté devant la porte d'entrée.*",
  "*I opened the door and stepped outside. A pleasant spring breeze greeted me.*":
    "*J'ai ouvert la porte et suis sorti. Une agréable brise printanière m'a accueilli.*",

  // Walk to school - couple routes
  "\"Over here! Over here!!\"":
    "\"Par ici ! Par ici !!\"",
  "*Seoyeon was already there at our meeting spot. Standing in the sunlight, she looked radiant.*":
    "*Seoyeon était déjà au point de rendez-vous. Debout dans la lumière du soleil, elle était radieuse.*",
  "\"The weather's so nice today. Even nicer walking together. Did you know cherry blossoms bloom along this path in spring?\"":
    "\"Il fait tellement beau aujourd'hui. C'est encore mieux de marcher ensemble. Tu savais que des cerisiers fleurissent le long de ce chemin au printemps ?\"",
  "*I walked side by side with Seoyeon. Without saying a word, our steps naturally fell in sync.*":
    "*J'ai marché côte à côte avec Seoyeon. Sans dire un mot, nos pas se sont naturellement synchronisés.*",

  "*When I arrived at our meeting spot, Yuna was leaning against the wall. One earbud in her ear.*":
    "*En arrivant au point de rendez-vous, Yuna était adossée au mur. Un écouteur dans l'oreille.*",
  "\"...You came.\"":
    "\"...Tu es venu.\"",
  "*Yuna pulled out one earbud and held it out to me. No words needed—she wanted me to listen along.*":
    "*Yuna a retiré un écouteur et me l'a tendu. Pas besoin de mots — elle voulait que j'écoute avec elle.*",
  "*We shared the earbuds and walked side by side. No words, but this silence isn't uncomfortable. If anything, it's nice.*":
    "*On a partagé les écouteurs et marché côte à côte. Pas un mot, mais ce silence n'est pas gênant. C'est même agréable.*",

  "\"Hey!! Over here!! Hurry up!!\"":
    "\"Hé !! Par ici !! Dépêche-toi !!\"",
  "*Dain was waving both arms from way over there. Where does she get all that energy this early in the morning?*":
    "*Dain agitait les deux bras depuis là-bas. Où trouve-t-elle toute cette énergie si tôt le matin ?*",
  "\"Going to school on a Sunday is kinda weird, but since I'm with you, it feels like a field trip! Let's go, let's go!!\"":
    "\"Aller à l'école un dimanche, c'est un peu bizarre, mais avec toi, on dirait une sortie scolaire ! Allez, allez !!\"",
  "*I walked along, pulled by Dain's hand. Before I knew it, I was smiling too. Her energy must be contagious.*":
    "*J'ai marché, entraîné par la main de Dain. Sans m'en rendre compte, je souriais aussi. Son énergie doit être contagieuse.*",

  "*When I arrived at the meeting spot, she was standing there in casual clothes. She looks so different from how she does at school.*":
    "*En arrivant au point de rendez-vous, elle était là en tenue décontractée. Elle a l'air tellement différente de d'habitude à l'école.*",
  "\"You made it. Seeing you on the weekend feels different. You've only ever seen me in my lab coat, after all.\"":
    "\"Tu es là. Te voir le week-end, ça fait drôle. Tu ne m'as jamais vue qu'en blouse, après tout.\"",
  "\"If we go this way, it's a shortcut to school. ...It's also a path where nobody we know would see us.\"":
    "\"Si on passe par là, c'est un raccourci vers l'école. ...C'est aussi un chemin où personne qu'on connaît ne nous verra.\"",
  "*The slightly shy look on her face was something new. Just walking side by side was enough to make my heart race.*":
    "*Son air légèrement timide, c'était nouveau. Juste marcher côte à côte suffisait à faire battre mon cœur.*",

  "*When I arrived at the meeting spot, she was standing in casual clothes. A far cry from the strict teacher I see in the classroom.*":
    "*En arrivant au point de rendez-vous, elle était là en tenue décontractée. Bien loin de la professeure stricte que je vois en classe.*",
  "\"I thought you'd be late, but you're right on time. ...That's a compliment, by the way.\"":
    "\"Je pensais que tu serais en retard, mais tu es pile à l'heure. ...C'est un compliment, au passage.\"",
  "\"This is the first time we've walked together on a weekend. ...It's different from school, isn't it? Right now, I'm not a teacher. I'm just... a person.\"":
    "\"C'est la première fois qu'on marche ensemble un week-end. ...C'est différent de l'école, non ? En ce moment, je ne suis pas professeure. Je suis juste... une personne.\"",
  "(\"Just a person.\" Those words made my chest feel warm. I've never seen her this honest before.)":
    "(\"Juste une personne.\" Ces mots m'ont réchauffé le cœur. Je ne l'avais jamais vue aussi sincère.)",

  // Shared walking/arrival scenes
  "*Walking side by side, we talked about everything that happened the past few days. How we first met, the funny moments, the times our hearts raced.*":
    "*En marchant côte à côte, on a parlé de tout ce qui s'est passé ces derniers jours. Notre première rencontre, les moments drôles, les instants où nos cœurs ont battu la chamade.*",
  "*Before I knew it, the school came into view. I thought I'd dread saying goodbye, but today marks the beginning of a day we're spending together.*":
    "*Sans m'en rendre compte, l'école est apparue. Je pensais redouter les adieux, mais aujourd'hui marque le début d'une journée passée ensemble.*",

  // Pending walk to school
  "*I left the house and started walking toward school.*":
    "*Je suis sorti de chez moi et me suis dirigé vers l'école.*",
  "*I can't stop thinking about how I didn't confess yesterday. Today... today I absolutely will.*":
    "*Je n'arrête pas de penser au fait que je ne me suis pas déclaré hier. Aujourd'hui... aujourd'hui, je le ferai sans faute.*",
  "(What should I say? \"I like you\"? \"Will you go out with me\"? No, maybe I should just play it by ear...)":
    "(Qu'est-ce que je devrais dire ? « Je t'aime bien » ? « Tu veux sortir avec moi » ? Non, peut-être que je devrais juste improviser...)",
  "*My hands are already trembling. With every step, my heart beats faster.*":
    "*Mes mains tremblent déjà. À chaque pas, mon cœur bat plus vite.*",
  "*It's okay. I have four days' worth of memories together. Those moments give me courage.*":
    "*Ça va aller. J'ai quatre jours de souvenirs partagés. Ces moments me donnent du courage.*",
  "*The awkward greeting on the first day, laughing together at lunch, our after-school conversations... every moment was precious.*":
    "*Les salutations maladroites du premier jour, les rires à la cantine, nos conversations après les cours... chaque moment était précieux.*",
  "*Right. If I don't want any regrets, I have to say it today.*":
    "*C'est ça. Si je ne veux pas de regrets, je dois le dire aujourd'hui.*",
  "*The school is just up ahead. I took one deep breath.*":
    "*L'école est juste devant. J'ai pris une grande inspiration.*",

  // Alone walk to school
  "*Walking alone on a Sunday morning. Normally, I'd still be in bed at this hour.*":
    "*Marcher seul un dimanche matin. D'habitude, je serais encore au lit à cette heure-ci.*",
  "*Before I transferred, my Sunday mornings were nothing but lounging around at home.*":
    "*Avant mon transfert, mes dimanches matin n'étaient que traîner à la maison.*",
  "*But now things have changed. I never thought the day would come when I'd actually want to go to school on a Sunday.*":
    "*Mais maintenant les choses ont changé. Je n'aurais jamais pensé qu'un jour j'aurais envie d'aller à l'école un dimanche.*",
  "*Seoyeon's warmth, Yuna's mysteriousness, Dain's brightness, the school nurse's gentleness, the homeroom teacher's sincerity... They were all meaningful connections.*":
    "*La chaleur de Seoyeon, le mystère de Yuna, la vivacité de Dain, la douceur de l'infirmière, la sincérité du professeur principal... C'étaient toutes des liens précieux.*",
  "*The school building comes into view up ahead. The same scenery I saw on my very first day here.*":
    "*Le bâtiment de l'école apparaît devant moi. Le même paysage que celui de mon tout premier jour ici.*",

  // School gate scenes
  "*I stood in front of the school gate.*":
    "*Je me suis arrêté devant le portail de l'école.*",
  "*This gate... Five days ago, when I first came to this school, I stood in this exact spot.*":
    "*Ce portail... Il y a cinq jours, quand je suis arrivé dans cette école pour la première fois, je me tenais exactement ici.*",
  "*Back then, everything was unfamiliar. A new school, a new classroom, faces I didn't recognize. I was so nervous my feet wouldn't move.*":
    "*À l'époque, tout m'était inconnu. Une nouvelle école, une nouvelle salle de classe, des visages que je ne reconnaissais pas. J'étais si nerveux que mes pieds refusaient d'avancer.*",
  "*Now it's different. There are people I know here, and a place I can come back to. I walked past the gate and headed inside.*":
    "*Maintenant c'est différent. Il y a des gens que je connais ici, et un endroit où je peux revenir. J'ai franchi le portail et suis entré.*",

  // ===== day5_2_lunch.js =====

  // School arrive
  "*I walk through the school gate. The school is quiet on a Sunday.*":
    "*Je franchis le portail. L'école est calme un dimanche.*",
  "*This week went by so fast. I can't believe it's already the last day... The trees in the schoolyard sway gently in the breeze.*":
    "*Cette semaine est passée si vite. Je n'arrive pas à croire que c'est déjà le dernier jour... Les arbres de la cour se balancent doucement dans la brise.*",
  "*It was only a few days ago, but it feels like ages. I was so nervous and anxious back then. Look how much has changed now.*":
    "*C'était il y a seulement quelques jours, mais on dirait une éternité. J'étais si nerveux et anxieux à l'époque. Regarde comme tout a changé maintenant.*",
  "*Looking back, someone is walking from afar. A familiar figure.*":
    "*En me retournant, quelqu'un marche au loin. Une silhouette familière.*",

  // Meet Seoyeon at school
  "\"This is where we first met, right? You looked like a lost puppy back then, hehe.\"":
    "\"C'est ici qu'on s'est rencontrés pour la première fois, non ? Tu avais l'air d'un chiot perdu à l'époque, héhé.\"",
  "\"But now... you seem different. There's a sense of ease about you. It's a nice change.\"":
    "\"Mais maintenant... tu as l'air différent. Il y a une certaine sérénité en toi. C'est un beau changement.\"",
  "*Seeing Seoyeon's smiling face makes my heart feel warm. She was the first person to reach out to me at this school.*":
    "*Voir le sourire de Seoyeon me réchauffe le cœur. C'est la première personne à être venue vers moi dans cette école.*",

  // Seoyeon day4 warmth
  "\"...You know, when you hugged me last night... I was really grateful. It gave me courage.\"":
    "\"...Tu sais, quand tu m'as serrée dans tes bras hier soir... j'étais vraiment reconnaissante. Ça m'a donné du courage.\"",
  "\"The pinky promise from last night... my fingertip still feels warm. Please keep your promise, okay?\"":
    "\"La promesse du petit doigt d'hier soir... le bout de mon doigt est encore chaud. Tiens ta promesse, d'accord ?\"",

  // Meet Yuna
  "\"...Here. Do you remember when we first met? ...I do.\"":
    "\"...Ici. Tu te souviens de notre première rencontre ? ...Moi oui.\"",
  "\"...When you were standing at the gate, you looked lonely. ...I was the same way, so I could tell.\"":
    "\"...Quand tu étais debout devant le portail, tu avais l'air seul. ...J'étais pareille, alors j'ai compris.\"",
  "*This is the first time Yuna has said so much. Does that mean today is a special day for her too?*":
    "*C'est la première fois que Yuna parle autant. Est-ce que ça veut dire qu'aujourd'hui est un jour spécial pour elle aussi ?*",

  // Yuna day4 warmth
  "\"...Thank you for holding my hand last night. ...It was warm.\"":
    "\"...Merci d'avoir tenu ma main hier soir. ...C'était chaud.\"",
  "\"...For taking my side yesterday. ...I won't forget it.\"":
    "\"...D'avoir pris mon parti hier. ...Je ne l'oublierai pas.\"",

  // Meet Dain
  "\"Hey! Being at the school gate reminds me of the first day!! Do you remember when I hit you with the volleyball?!\"":
    "\"Hé ! Être au portail de l'école me rappelle le premier jour !! Tu te souviens quand je t'ai touché avec le ballon de volley ?!\"",
  "\"I felt so bad about it, but looking back, maybe it was fate! If I hadn't hit you, I never would've talked to you!!\"":
    "\"Je m'en suis tellement voulu, mais avec le recul, c'était peut-être le destin ! Si je ne t'avais pas touché, je ne t'aurais jamais adressé la parole !!\"",
  "*Getting hit by that volleyball did hurt... but if it's how I met Dain, maybe I should be grateful.*":
    "*Se prendre ce ballon de volley, ça a fait mal... mais si c'est comme ça que j'ai rencontré Dain, je devrais peut-être être reconnaissant.*",

  // Dain day4 warmth
  "\"...Me crying yesterday is a SECRET!! But... I'm glad I could cry in front of you.\"":
    "\"...Que j'aie pleuré hier, c'est un SECRET !! Mais... je suis contente d'avoir pu pleurer devant toi.\"",

  // Meet Nurse
  "\"Coming to school on a weekend feels strange. Meeting you at this school... was it destiny, I wonder.\"":
    "\"Venir à l'école un week-end, ça fait bizarre. Te rencontrer dans cette école... est-ce que c'était le destin, je me demande.\"",
  "\"When you came to the nurse's office on your first day, your nervous face was so cute. You've matured a lot since then.\"":
    "\"Quand tu es venu à l'infirmerie le premier jour, ton visage nerveux était tellement mignon. Tu as beaucoup mûri depuis.\"",
  "*Seeing her in casual clothes feels unfamiliar yet exciting. I had no idea she looked this beautiful underneath that usual lab coat.*":
    "*La voir en vêtements décontractés, c'est inhabituel mais excitant. Je n'aurais jamais imaginé qu'elle était aussi belle sous sa blouse habituelle.*",

  // Meet Teacher
  "\"Ha, coming to school on a weekend is weird. But... being here with you, it's not so bad.\"":
    "\"Ha, venir à l'école un week-end, c'est bizarre. Mais... être ici avec toi, c'est pas si mal.\"",
  "\"When I first saw you in the staff room on your transfer day, your eyes looked so anxious. Now you seem like a completely different person.\"":
    "\"Quand je t'ai vu pour la première fois dans la salle des profs le jour de ton transfert, tes yeux avaient l'air si anxieux. Maintenant tu as l'air d'une personne complètement différente.\"",
  "*Getting a compliment from her is so rare that it makes me even happier. She has such a soft expression today too.*":
    "*Recevoir un compliment d'elle, c'est tellement rare que ça me rend encore plus heureux. Elle a une expression tellement douce aujourd'hui aussi.*",

  // Outfit reaction
  "(They look me up and down, eyes widening. \"Why do you look so nice today?\" The small compliment makes my heart flutter.)":
    "(Elle me regarde de haut en bas, les yeux écarquillés. \"Pourquoi tu es si bien habillé aujourd'hui ?\" Ce petit compliment fait battre mon cœur.)",
  "\"Want to go inside? There are a lot of places with memories here.\"":
    "\"Tu veux entrer ? Il y a plein d'endroits pleins de souvenirs ici.\"",

  // School walk memories
  "*We walked into the school side by side. The school is empty on a Sunday, so only our footsteps echo through the halls.*":
    "*On est entrés côte à côte dans l'école. L'école est vide un dimanche, seuls nos pas résonnent dans les couloirs.*",
  "*This hallway... On my first day as a transfer student, I wandered here trying to find my classroom. I couldn't bring myself to move, not knowing where to go.*":
    "*Ce couloir... Le premier jour de mon transfert, j'errais ici en cherchant ma salle de classe. Je n'arrivais pas à bouger, ne sachant pas où aller.*",
  "*Someone spoke to me in this hallway back then. That small act of kindness led to everything that followed.*":
    "*Quelqu'un m'a adressé la parole dans ce couloir à l'époque. Ce petit geste de gentillesse a mené à tout ce qui a suivi.*",

  // Classroom memories
  "*I opened the classroom door. Sunlight streams in at an angle, painting the desks in a golden glow.*":
    "*J'ai ouvert la porte de la salle de classe. Le soleil entre en biais, baignant les pupitres d'une lueur dorée.*",
  "*My seat. The same seat I first sat in when I transferred here is still here. I sat down in it for a moment.*":
    "*Ma place. La même place où je me suis assis pour la première fois en arrivant ici est toujours là. Je m'y suis assis un instant.*",
  "*Looking up at the blackboard from this seat... Ah, it's the same angle as back then. Somehow, it feels comforting.*":
    "*En levant les yeux vers le tableau depuis cette place... Ah, c'est le même angle qu'à l'époque. Bizarrement, c'est réconfortant.*",
  "\"A lot happened in this classroom. Getting caught dozing off during class, passing notes around...\"":
    "\"Il s'est passé tellement de choses dans cette salle. Se faire prendre à somnoler en cours, faire passer des mots...\"",

  // Character-specific classroom memories
  "\"Yeah. When you first introduced yourself, I already thought 'This person seems nice.' Call it the student council president's intuition.\"":
    "\"Oui. Quand tu t'es présenté pour la première fois, j'ai tout de suite pensé « Cette personne a l'air sympa ». Appelle ça l'intuition de la présidente du conseil des élèves.\"",
  "\"...Our eyes met here for the first time. I was looking out the window... and when you looked at me, my heart skipped a beat.\"":
    "\"...Nos regards se sont croisés ici pour la première fois. Je regardais par la fenêtre... et quand tu m'as regardée, mon cœur a raté un battement.\"",
  "\"We used to stretch in here before gym class!! You were so inflexible back then, lol. Has it gotten any better?\"":
    "\"On s'étirait ici avant le cours de sport !! Tu étais tellement raide à l'époque, lol. Ça s'est amélioré ?\"",
  "\"When I came for a class observation, I noticed you kept looking toward the nurse's office window, you know? Hehe.\"":
    "\"Quand je suis venue observer le cours, j'ai remarqué que tu n'arrêtais pas de regarder vers la fenêtre de l'infirmerie, tu sais ? Héhé.\"",
  "\"Every day in this classroom, I called your name during roll call. Just when I was getting used to it... it's already the end.\"":
    "\"Chaque jour dans cette salle, j'ai appelé ton nom pendant l'appel. Juste quand je commençais à m'y habituer... c'est déjà la fin.\"",
  "\"Is there anywhere you'd like to go? Let's look around some more.\"":
    "\"Il y a un endroit où tu voudrais aller ? Continuons à explorer.\"",

  // Special memory places
  "\"Oh! Wait, let's go to the garden. Remember the flower bed I used to water every day?\"":
    "\"Oh ! Attends, allons au jardin. Tu te souviens du parterre de fleurs que j'arrosais tous les jours ?\"",
  "\"Look, all the flowers I planted have bloomed. You helped me water them the first time you came here. That's when I... started to feel something.\"":
    "\"Regarde, toutes les fleurs que j'ai plantées ont éclos. Tu m'avais aidé à les arroser la première fois que tu es venu. C'est là que j'ai... commencé à ressentir quelque chose.\"",
  "\"...Wait. Can we go over there? The library.\"":
    "\"...Attends. On peut aller là-bas ? La bibliothèque.\"",
  "\"...This is where you first sat next to me. When you asked me about the book title... I was surprised. Nobody had ever talked to me before.\"":
    "\"...C'est ici que tu t'es assis à côté de moi pour la première fois. Quand tu m'as demandé le titre du livre... j'étais surprise. Personne ne m'avait jamais adressé la parole avant.\"",
  "\"Wait!! Let's go to the gym!! That's where the whole thing started on the first day!!\"":
    "\"Attends !! Allons au gymnase !! C'est là que tout a commencé le premier jour !!\"",
  "\"I was practicing volleyball here and the ball went flying... and hit you right in the face! Sorry, haha! But I was grateful you didn't get mad.\"":
    "\"Je m'entraînais au volley ici et le ballon a volé... et t'a frappé en plein visage ! Désolée, haha ! Mais j'étais contente que tu ne te sois pas fâché.\"",
  "\"Shall we stop by the nurse's office? I vividly remember the day you first came.\"":
    "\"On passe à l'infirmerie ? Je me souviens très bien du jour où tu es venu pour la première fois.\"",
  "\"On your first day, you came in saying you had a headache because you were so nervous. When I put my hand on your forehead... your face turned bright red, hehe.\"":
    "\"Le premier jour, tu es venu en disant que tu avais mal à la tête parce que tu étais nerveux. Quand j'ai posé ma main sur ton front... tu es devenu tout rouge, héhé.\"",
  "\"Wait. Stand in front of the podium. That's where you introduced yourself on your first day.\"":
    "\"Attends. Mets-toi devant l'estrade. C'est là que tu t'es présenté le premier jour.\"",
  "\"Your voice was trembling so much back then... I was thinking to myself, 'This kid, I'm a bit worried about him.' But you've really changed since then.\"":
    "\"Ta voix tremblait tellement à l'époque... Je me disais « Ce gamin, je m'inquiète un peu pour lui. » Mais tu as vraiment changé depuis.\"",

  // Reflection at school
  "*Memories of this place well up from deep within my heart. I knew nothing at first, but each passing day built up to who I am now.*":
    "*Les souvenirs de cet endroit remontent du plus profond de mon cœur. Je ne savais rien au début, mais chaque jour écoulé a contribué à faire de moi celui que je suis maintenant.*",
  "*Every place holds a memory, and in every memory, this person was always there. I know what that means now.*":
    "*Chaque endroit renferme un souvenir, et dans chaque souvenir, cette personne était toujours là. Je sais ce que ça signifie maintenant.*",

  // Going to rooftop
  "\"Hey... want to go up to the rooftop? The weather's nice today, and the view from up there should be great.\"":
    "\"Hé... tu veux monter sur le toit ? Il fait beau aujourd'hui, et la vue de là-haut devrait être superbe.\"",
  "*We climb the stairs. Two sets of footsteps echo through the empty stairwell. One floor, two floors.*":
    "*On monte les escaliers. Deux séries de pas résonnent dans la cage d'escalier vide. Un étage, deux étages.*",
  "*We reached the top of the last staircase and stood before the rooftop door. A breeze slips through the gap in the door.*":
    "*On a atteint le haut du dernier escalier et on s'est retrouvés devant la porte du toit. Une brise s'infiltre par l'entrebâillement.*",
  "*Creak. The rooftop door swings open to reveal a wide-open sky. A pleasant breeze greets us.*":
    "*Grincement. La porte du toit s'ouvre sur un ciel immense. Une brise agréable nous accueille.*",
  "*Wow... Was the view from up here always this beautiful? The school grounds, the rooftops stretching into the distance, the streets we walked earlier.*":
    "*Waouh... La vue d'ici a toujours été aussi belle ? L'enceinte de l'école, les toits qui s'étendent au loin, les rues qu'on a parcourues tout à l'heure.*",
  "*Or maybe... it feels this beautiful because of the person standing beside me.*":
    "*Ou peut-être... c'est aussi beau grâce à la personne à côté de moi.*",
  "*We leaned against the railing side by side. The wind tousles our hair.*":
    "*On s'est accoudés à la rambarde côte à côte. Le vent ébouriffe nos cheveux.*",
  "*For a while, we just gazed at the scenery in silence. Strangely, the silence doesn't feel awkward. With this person, words aren't always necessary.*":
    "*Pendant un moment, on a juste contemplé le paysage en silence. Étrangement, le silence n'est pas gênant. Avec cette personne, les mots ne sont pas toujours nécessaires.*",

  // Dreams/future talk
  "\"I have a dream. Even after graduating from this school, I want to be someone who works for others. Being on the student council made me think about that even more.\"":
    "\"J'ai un rêve. Même après avoir quitté cette école, je veux être quelqu'un qui œuvre pour les autres. Être au conseil des élèves m'a fait réfléchir encore plus à ça.\"",
  "\"...I want to write. I can say things in writing that I can't say to people. ...I'd like it if you read what I write.\"":
    "\"...Je veux écrire. Je peux dire par écrit des choses que je ne peux pas dire aux gens. ...J'aimerais que tu lises ce que j'écris.\"",
  "\"You know what, I want to become a pro athlete! Compete in nationals, win the championship, be on TV! ...But sometimes I get scared. Like, can I really do it?\"":
    "\"Tu sais quoi, je veux devenir athlète professionnelle ! Participer aux championnats nationaux, gagner le titre, passer à la télé ! ...Mais parfois j'ai peur. Genre, est-ce que j'en suis vraiment capable ?\"",
  "\"At first, I wanted to be a hospital nurse. But after taking care of the kids at school, I felt like this is where I belong. ...And this is where I met you, too.\"":
    "\"Au début, je voulais être infirmière à l'hôpital. Mais après m'être occupée des élèves, j'ai senti que ma place était ici. ...Et c'est ici que je t'ai rencontré, aussi.\"",
  "\"When I first became a teacher, I had no confidence. But meeting students like you... honestly, it makes me feel like I made the right choice.\"":
    "\"Quand je suis devenue professeure, je n'avais aucune confiance en moi. Mais rencontrer des élèves comme toi... honnêtement, ça me fait sentir que j'ai fait le bon choix.\"",
  "\"Me too... honestly, before I transferred here, I didn't have the luxury to think about the future. It felt like I was just getting through each day.\"":
    "\"Moi aussi... honnêtement, avant mon transfert ici, je n'avais pas le luxe de penser à l'avenir. J'avais l'impression de juste survivre au jour le jour.\"",
  "\"But things changed after I came here. I started looking forward to tomorrow. Meeting people became fun... and coming to school every day made me happy.\"":
    "\"Mais les choses ont changé quand je suis arrivé ici. J'ai commencé à attendre demain avec impatience. Rencontrer des gens est devenu amusant... et venir à l'école chaque jour me rendait heureux.\"",
  "*That's all... because of the person beside me. I can't put it all into words just yet, but someday, I will.*":
    "*Tout ça... grâce à la personne à côté de moi. Je ne peux pas encore tout mettre en mots, mais un jour, je le ferai.*",

  // Lunch on rooftop
  "\"Are you hungry? I picked some things up from the convenience store earlier. Want to eat up here?\"":
    "\"Tu as faim ? J'ai acheté des trucs à la supérette tout à l'heure. Tu veux manger ici ?\"",
  "*I pulled out some rice balls and drinks from my bag. It's a simple meal, but with this view, anything would feel special.*":
    "*J'ai sorti des onigiri et des boissons de mon sac. C'est un repas simple, mais avec cette vue, tout semble spécial.*",
  "*We sat down side by side against the shaded wall near the railing. The concrete floor is a bit cold, but the warmth beside me makes up for it.*":
    "*On s'est assis côte à côte contre le mur ombragé près de la rambarde. Le sol en béton est un peu froid, mais la chaleur à côté de moi compense.*",
  "*I took a bite of the rice ball. It's just a simple convenience store rice ball, but today it tastes especially good.*":
    "*J'ai mordu dans l'onigiri. C'est juste un simple onigiri de supérette, mais aujourd'hui il est particulièrement bon.*",
  "\"You know, eating up here on the rooftop feels like we're on a picnic.\"":
    "\"Tu sais, manger ici sur le toit, on dirait un pique-nique.\"",
  "*I heard a soft laugh from beside me. That laughter drifted away on the breeze, carried off somewhere far.*":
    "*J'ai entendu un rire doux à côté de moi. Ce rire s'est envolé avec la brise, emporté quelque part au loin.*",
  "\"Before I transferred here, eating alone was just normal for me. In the classroom, at home. I thought I was fine with it.\"":
    "\"Avant mon transfert ici, manger seul était juste normal pour moi. En classe, à la maison. Je pensais que ça m'allait.\"",
  "\"But now... I realize for the first time how nice it is to eat with someone.\"":
    "\"Mais maintenant... je réalise pour la première fois à quel point c'est agréable de manger avec quelqu'un.\"",

  // Character lunch reactions
  "\"Same here. I was always so busy with student council work that I just ate alone. But eating with you... it feels like time slows down.\"":
    "\"Pareil pour moi. J'étais toujours si occupée avec le conseil des élèves que je mangeais seule. Mais manger avec toi... on dirait que le temps ralentit.\"",
  "*Seoyeon gently rested her head on my shoulder. Her cheeks flushed red. I feel like my heart is going to stop.*":
    "*Seoyeon a doucement posé sa tête sur mon épaule. Ses joues ont rougi. J'ai l'impression que mon cœur va s'arrêter.*",
  "\"...Me too. I thought eating alone was comfortable... but when I'm next to you, the food tastes better.\"":
    "\"...Moi aussi. Je pensais que manger seule était confortable... mais quand je suis à côté de toi, la nourriture a meilleur goût.\"",
  "*Yuna's hand quietly slid over mine. Her cold fingertips slowly grew warmer. I held her hand in mine.*":
    "*La main de Yuna a glissé doucement sur la mienne. Ses doigts froids se sont réchauffés peu à peu. J'ai serré sa main dans la mienne.*",
  "\"When I eat alone, I always eat super fast! But when I'm with you, I eat slowly. Isn't that weird...?\"":
    "\"Quand je mange seule, je mange toujours super vite ! Mais avec toi, je mange lentement. C'est pas bizarre... ?\"",
  "(Dain suddenly grabbed my arm tightly. \"Hey, don't go all quiet on me, it makes me worry!\" she said, but she didn't let go.)":
    "(Dain m'a soudain agrippé le bras. \"Hé, fais pas le silencieux, ça m'inquiète !\" a-t-elle dit, mais elle n'a pas lâché.)",
  "\"As you grow up, moments like these become fewer and fewer. That's why... this moment right now is all the more precious.\"":
    "\"En grandissant, des moments comme ceux-ci se font de plus en plus rares. C'est pour ça que... cet instant est d'autant plus précieux.\"",
  "(She pressed the drink can gently against my cheek. \"Cold, isn't it?\" she said with a smile brighter than the sunlight.)":
    "(Elle a pressé doucement la canette contre ma joue. \"C'est froid, hein ?\" a-t-elle dit avec un sourire plus radieux que le soleil.)",
  "\"This is my first time eating with a student like this. As a teacher, it's a bit... but today, I just want to be here as a person.\"":
    "\"C'est la première fois que je mange avec un élève comme ça. En tant que professeure, c'est un peu... mais aujourd'hui, je veux juste être là en tant que personne.\"",
  "*She smiled and gently brushed her hand over my hair. Her usual strictness was nowhere to be found—only a warm, tender touch remained.*":
    "*Elle a souri et m'a doucement passé la main dans les cheveux. Sa sévérité habituelle avait disparu — il ne restait qu'un geste tendre et chaleureux.*",

  // After lunch
  "*I finished the last of my drink. The cold can had already turned lukewarm in my hands. Time passed so quickly.*":
    "*J'ai fini ma boisson. La canette froide était déjà devenue tiède entre mes mains. Le temps est passé si vite.*",
  "*I gathered the trash and tidied up. On the rooftop floor, a sunlit imprint remained where we had been sitting.*":
    "*J'ai rassemblé les déchets et rangé. Sur le sol du toit, une empreinte ensoleillée restait là où on était assis.*",
  "*The sun has begun to pass its peak. The shadows are shorter than before.*":
    "*Le soleil a commencé à décliner. Les ombres sont plus courtes qu'avant.*",
  "*There's still time left today. No... more precisely, there are still words left unsaid.*":
    "*Il reste encore du temps aujourd'hui. Non... plus précisément, il reste encore des mots non prononcés.*",
  "*Something stirs deep inside my chest. This is a sign... that the time to gather my courage is approaching.*":
    "*Quelque chose remue au fond de ma poitrine. C'est un signe... que le moment de rassembler mon courage approche.*",
  "*To the person standing beside me. Today, there are feelings I absolutely must convey.*":
    "*À la personne à côté de moi. Aujourd'hui, il y a des sentiments que je dois absolument transmettre.*",

  // ===== day5_3_afterschool.js =====

  // Afternoon start
  "*Before I knew it, afternoon arrived. The sky seen from the rooftop is beginning to turn orange.*":
    "*Sans m'en rendre compte, l'après-midi est arrivé. Le ciel vu depuis le toit commence à virer à l'orange.*",

  // True love route
  "*Standing side by side under the sunset. I wish this moment could last forever.*":
    "*Côte à côte sous le coucher de soleil. J'aimerais que cet instant dure éternellement.*",
  "\"You know... Before I transferred here, I was scared of the new school.\"":
    "\"Tu sais... Avant mon transfert ici, j'avais peur de la nouvelle école.\"",
  "\"But now... I think transferring here was the best decision of my life.\"":
    "\"Mais maintenant... je pense que venir ici a été la meilleure décision de ma vie.\"",
  "\"Me too... I'm so glad you transferred here. Let's stay together... always.\"":
    "\"Moi aussi... je suis tellement contente que tu aies été transféré ici. Restons ensemble... pour toujours.\"",
  "\"...I thought being alone was easier. But since you came... everything changed. Thank you.\"":
    "\"...Je pensais qu'être seule était plus simple. Mais depuis que tu es arrivé... tout a changé. Merci.\"",
  "\"Every day became more fun since you came!! You'll keep cheering me on... right?!\"":
    "\"Chaque jour est devenu plus amusant depuis ton arrivée !! Tu continueras à m'encourager... hein ?!\"",
  "\"Our relationship won't be easy... But if it's with you, it's okay. Together, we can overcome anything.\"":
    "\"Notre relation ne sera pas facile... Mais si c'est avec toi, ça va. Ensemble, on peut tout surmonter.\"",
  "\"...Honestly, a teacher shouldn't feel this way about a student. But what can I do, it's real. ...Let's make this work, us.\"":
    "\"...Honnêtement, une professeure ne devrait pas ressentir ça pour un élève. Mais qu'est-ce que j'y peux, c'est réel. ...Faisons en sorte que ça marche, nous deux.\"",

  // Kiss scene
  "*The wind blows. Their face, bathed in the sunset glow, feels unusually close.*":
    "*Le vent souffle. Son visage, baigné par la lueur du coucher de soleil, semble inhabituellement proche.*",
  "*We look into each other's eyes. No words are needed.*":
    "*On se regarde dans les yeux. Pas besoin de mots.*",
  "*Naturally... our faces draw closer.*":
    "*Naturellement... nos visages se rapprochent.*",
  "*...I closed my eyes.*":
    "*...J'ai fermé les yeux.*",
  "*A soft warmth. Time seemed to stop.*":
    "*Une douce chaleur. Le temps a semblé s'arrêter.*",
  "*......*":
    "*......*",
  "*When I opened my eyes, they were smiling in the sunset light. The most beautiful smile in the world.*":
    "*Quand j'ai ouvert les yeux, elle souriait dans la lumière du couchant. Le plus beau sourire du monde.*",

  // True ending - private scenes (Seoyeon)
  "*The sun has set. I was going to walk her home... but Seoyeon grabbed my sleeve.*":
    "*Le soleil s'est couché. J'allais la raccompagner... mais Seoyeon a attrapé ma manche.*",
  "\"...Um, my parents aren't home today. Just for a bit... do you want to come in?\"":
    "\"...Euh, mes parents ne sont pas là aujourd'hui. Juste un moment... tu veux entrer ?\"",
  "*A quiet residential street. Seoyeon opened the front door. Past the spacious living room, up to her room on the second floor.*":
    "*Une rue résidentielle calme. Seoyeon a ouvert la porte d'entrée. Au-delà du vaste salon, jusqu'à sa chambre au deuxième étage.*",
  "*A neatly organized room. A bookshelf full of books, student council papers on the desk. Soft ambient lighting. The room was filled with Seoyeon's scent.*":
    "*Une chambre bien rangée. Une étagère pleine de livres, des documents du conseil des élèves sur le bureau. Un éclairage tamisé. La chambre était imprégnée du parfum de Seoyeon.*",
  "\"...My parents' room is on the first floor, so it's fine. Oh, no that's not what I meant... Just, come sit here.\"":
    "\"...La chambre de mes parents est au rez-de-chaussée, donc c'est bon. Oh, non c'est pas ce que je voulais dire... Viens, assieds-toi ici.\"",
  "*We sat side by side on the edge of the bed. Seoyeon's hands were trembling.*":
    "*On s'est assis côte à côte au bord du lit. Les mains de Seoyeon tremblaient.*",
  "\"...I always had to be perfect. Because I'm the student council president. But with you... I just want to be me.\"":
    "\"...J'ai toujours dû être parfaite. Parce que je suis la présidente du conseil des élèves. Mais avec toi... je veux juste être moi-même.\"",
  "*Seoyeon rested her head on my shoulder. My heart felt like it would burst.*":
    "*Seoyeon a posé sa tête sur mon épaule. Mon cœur semblait sur le point d'éclater.*",

  // True ending - private scenes (Yuna)
  "*The sun has set. I was about to leave... but Yuna held my hand.*":
    "*Le soleil s'est couché. J'allais partir... mais Yuna m'a pris la main.*",
  "\"...Not yet. There's a place I want to show you.\"":
    "\"...Pas encore. Il y a un endroit que je veux te montrer.\"",
  "*Yuna led me to the top of the library annex, a secret attic that no one knows about.*":
    "*Yuna m'a mené au sommet de l'annexe de la bibliothèque, un grenier secret que personne ne connaît.*",
  "*An old sofa, a single blanket, and stars visible through a small window. Yuna's secret space.*":
    "*Un vieux canapé, une couverture, et des étoiles visibles par une petite fenêtre. L'espace secret de Yuna.*",
  "\"...Only I know about this place. Well, now you do too.\"":
    "\"...Il n'y a que moi qui connais cet endroit. Enfin, maintenant toi aussi.\"",
  "*Yuna spread out the blanket. Sitting side by side on the narrow sofa, our shoulders touched.*":
    "*Yuna a étalé la couverture. Assis côte à côte sur l'étroit canapé, nos épaules se touchaient.*",
  "\"...Don't go. Tonight... stay here.\"":
    "\"...Ne pars pas. Ce soir... reste ici.\"",

  // True ending - private scenes (Dain)
  "*The sun has set. Dain waved a key around with a grin.*":
    "*Le soleil s'est couché. Dain a agité une clé avec un grand sourire.*",
  "\"Hey, I've got the key to the gym storage! Let's look at stars and talk!\"":
    "\"Hé, j'ai la clé du local du gymnase ! Allons regarder les étoiles et discuter !\"",
  "*The gym at night, empty. Dain laid out mats and opened the skylight in the ceiling.*":
    "*Le gymnase la nuit, vide. Dain a disposé des tapis et ouvert le velux au plafond.*",
  "*We lay side by side on the mats, looking up at the stars. I could hear Dain breathing close by.*":
    "*On est allongés côte à côte sur les tapis, à regarder les étoiles. J'entendais Dain respirer tout près.*",
  "\"...Hey, my heart is beating so fast right now. Put your hand here.\"":
    "\"...Hé, mon cœur bat tellement vite là. Pose ta main ici.\"",
  "*Dain placed my hand over her chest. It really was... beating fast.*":
    "*Dain a posé ma main sur sa poitrine. C'est vrai que... ça battait vite.*",
  "\"...Dummy, why are you looking at me like that? It's embarrassing...\"":
    "\"...Idiot, pourquoi tu me regardes comme ça ? C'est gênant...\"",

  // True ending - private scenes (Nurse)
  "*The sun has set. The school nurse smiled meaningfully.*":
    "*Le soleil s'est couché. L'infirmière scolaire a souri d'un air entendu.*",
  "\"...There should be no one at school yet. Want to stop by the infirmary?\"":
    "\"...Il ne devrait y avoir personne à l'école. Tu veux passer à l'infirmerie ?\"",
  "*Click. I heard the infirmary door lock.*":
    "*Clic. J'ai entendu le verrou de la porte de l'infirmerie.*",
  "*The curtained bed area. Instead of disinfectant, a faint perfume scent lingered.*":
    "*L'espace du lit derrière le rideau. Au lieu du désinfectant, un léger parfum flottait dans l'air.*",
  "\"In here... I'm not 'Teacher.' Just a woman.\"":
    "\"Ici... je ne suis pas « Madame ». Juste une femme.\"",
  "*We sat side by side on the edge of the bed. Her hand rested on top of mine.*":
    "*On s'est assis côte à côte au bord du lit. Sa main s'est posée sur la mienne.*",
  "\"...Just for today, no student, no teacher. Just... us.\"":
    "\"...Juste pour aujourd'hui, pas d'élève, pas de professeure. Juste... nous.\"",

  // True ending - private scenes (Teacher)
  "*The sun has set. The teacher took out her car keys and jingled them.*":
    "*Le soleil s'est couché. La professeure a sorti ses clés de voiture et les a fait tinter.*",
  "\"...I'll give you a ride. It's late.\"":
    "\"...Je te ramène en voiture. Il est tard.\"",
  "*The car stopped... not at my house. It was in front of the teacher's apartment.*":
    "*La voiture s'est arrêtée... pas devant chez moi. C'était devant l'appartement de la professeure.*",
  "\"...Just one cup of coffee. I'll send you home after. Probably.\"":
    "\"...Juste un café. Je te ramènerai après. Probablement.\"",
  "*A small but tidy apartment. Ungraded exam papers piled on the desk. We sat side by side on the sofa.*":
    "*Un petit appartement bien rangé. Des copies non corrigées empilées sur le bureau. On s'est assis côte à côte sur le canapé.*",
  "\"...Hah, I really am unfit to be a teacher. Bringing a student home...\"":
    "\"...Hah, je suis vraiment pas faite pour être prof. Ramener un élève chez moi...\"",
  "*The teacher let down her hair and smiled wearily. The coffee... ended up going cold.*":
    "*La professeure a détaché ses cheveux et souri d'un air las. Le café... a fini par refroidir.*",

  // Korean intimate morning scenes (Seoyeon) - need French translation
  "*서로의 체온이 얽힌 채, 말없이 거리가 사라졌던 밤이 지났다.*":
    "*Nos chaleurs mêlées, la nuit où la distance entre nous a silencieusement disparu s'est écoulée.*",
  "*눈을 뜨자, 창틈으로 스며드는 아침 햇살 속에서 나를 가만히 바라보고 있는 서연이 보였다.*":
    "*En ouvrant les yeux, j'ai vu Seoyeon qui me regardait doucement dans la lumière du matin filtrant par la fenêtre.*",
  "\"…일찍 깼네. 좀 더 자도 되는데.\"":
    "\"...Tu t'es réveillé tôt. Tu peux dormir encore un peu.\"",
  "*눈이 마주치자 서연의 뺨이 옅게 달아올랐다. 평소의 완벽한 학생회장이 아닌, 오직 나만의 서연이었다.*":
    "*Quand nos regards se sont croisés, les joues de Seoyeon se sont légèrement empourprées. Ce n'était pas la parfaite présidente du conseil des élèves, mais ma Seoyeon à moi seul.*",
  "*맞잡은 두 손 사이로 전해지는 온기 속에서, 우리의 평범한 일상이 비로소 기적이 되는 순간을 마주하고 있었다.*":
    "*Dans la chaleur transmise par nos mains enlacées, nous vivions l'instant où notre quotidien ordinaire devenait enfin un miracle.*",

  // Korean intimate morning scenes (Yuna)
  "*좁은 다락방 소파 위, 서로의 숨결만이 고요하게 섞여들던 밤이 지났다.*":
    "*Sur l'étroit canapé du grenier, la nuit où seuls nos souffles se mêlaient en silence s'est écoulée.*",
  "*눈을 뜨려는데, 내 팔을 단단히 끌어안고 있는 작은 온기가 느껴졌다.*":
    "*J'allais ouvrir les yeux quand j'ai senti une petite chaleur serrer fermement mon bras.*",
  "\"…어딜 가려고. 오늘은 하루 종일 내 옆에 있어.\"":
    "\"...Où tu comptes aller. Aujourd'hui, tu restes à côté de moi toute la journée.\"",
  "*잠결에 웅얼거리며 내 품으로 더 파고드는 유나. 그 서늘했던 아이가 내게만 보여주는 무방비한 모습이었다.*":
    "*Yuna marmonnait dans son sommeil en se blottissant davantage contre moi. Cette fille si distante qui ne montrait qu'à moi seul sa vulnérabilité.*",
  "*이 고요하고 완벽한 세계에서, 나는 그녀의 온전한 안식처가 되기로 다짐했다.*":
    "*Dans ce monde calme et parfait, j'ai juré de devenir son refuge absolu.*",

  // Korean intimate morning scenes (Dain)
  "*별빛이 쏟아지던 체육관 매트 위, 서로의 심장 소리가 하나처럼 겹쳐지던 밤이 지났다.*":
    "*Sur les tapis du gymnase baignés d'étoiles, la nuit où nos battements de cœur se sont fondus en un seul s'est écoulée.*",
  "*아침 햇살에 눈을 뜨자, 내 배 위로 턱 하니 다리를 걸치고 자는 다인이가 보였다.*":
    "*En ouvrant les yeux dans la lumière du matin, j'ai vu Dain endormie, sa jambe posée négligemment sur mon ventre.*",
  "\"...으음, 좋은 아침. 눈 뜨자마자 네가 보이니까... 기분 되게 이상하다.\"":
    "\"...Hmm, bonjour. Te voir dès que j'ouvre les yeux... ça fait tout bizarre.\"",
  "*눈을 비비며 해맑게 웃는 다인이. 어젯밤의 부끄러움은 온데간데없이, 평소의 밝은 에너지 그대로였다.*":
    "*Dain se frottait les yeux avec un sourire radieux. La timidité d'hier soir avait disparu, retrouvant son énergie lumineuse habituelle.*",
  "*이 눈부신 미소를 매일 아침 볼 수 있다면, 내 남은 생은 분명 지루할 틈이 없을 것이다.*":
    "*Si je pouvais voir ce sourire éblouissant chaque matin, le reste de ma vie ne connaîtrait certainement aucun ennui.*",

  // Korean intimate morning scenes (Nurse)
  "*은은한 향수 냄새와 함께, 어른의 여유로움에 완전히 이끌렸던 밤이 지났다.*":
    "*Avec un délicat parfum, la nuit où j'ai été totalement envoûté par sa grâce d'adulte s'est écoulée.*",
  "*눈을 뜨자, 턱을 괸 채 내 얼굴을 가만히 내려다보고 있는 선생님과 시선이 마주쳤다.*":
    "*En ouvrant les yeux, j'ai croisé le regard de l'infirmière qui me contemplait, le menton appuyé sur sa main.*",
  "\"잘 잤어? 우리 학생, 자는 모습도 꽤 귀엽네.\"":
    "\"Tu as bien dormi ? Mon élève, tu es plutôt mignon quand tu dors.\"",
  "*내 뺨을 부드럽게 쓸어내리는 손길. 장난기 어린 미소 뒤에 숨겨진 깊은 애정이 느껴졌다.*":
    "*Une main qui caressait doucement ma joue. Derrière son sourire espiègle, je sentais une profonde affection.*",
  "*더 이상 선생님과 학생이 아닌, 온전한 두 사람으로서 맞이하는 첫 아침이었다.*":
    "*Ce n'était plus une professeure et un élève, mais le premier matin vécu comme deux personnes à part entière.*",

  // Korean intimate morning scenes (Teacher)
  "*어설프고 서툴렀지만, 그래서 더 진심이 닿았던 밤이 지났다.*":
    "*Maladroite et hésitante, la nuit où notre sincérité n'en fut que plus profonde s'est écoulée.*",
  "*부스럭거리는 소리에 눈을 뜨니, 선생님이 까치발을 들고 몰래 침대에서 빠져나가려 하고 있었다.*":
    "*Réveillé par un bruissement, j'ai vu la professeure sur la pointe des pieds, essayant de sortir discrètement du lit.*",
  "\"...깼어? 몰래 커피라도 타놓으려고 했는데... 들켜버렸네.\"":
    "\"...Tu es réveillé ? J'essayais de préparer un café en douce... mais tu m'as grillée.\"",
  "*얼굴이 새빨개진 채 어쩔 줄 몰라 하는 선생님의 손을 잡아당겨 다시 품에 안았다.*":
    "*J'ai attiré vers moi la main de la professeure, rouge pivoine et ne sachant plus où se mettre, et l'ai reprise dans mes bras.*",
  "(\"5분만… 이러고 있자.\" 엄격한 선생님의 가면이 벗겨진, 이 사랑스러운 사람을 평생 지켜주고 싶어졌다.)":
    "(\"Juste cinq minutes... restons comme ça.\" Le masque de la professeure stricte avait disparu, et j'ai voulu protéger cette personne adorable pour toujours.)",

  // Good ending afternoon
  "*Standing side by side under the sunset. There were complications along the way... but in the end, I'm here with this person.*":
    "*Côte à côte sous le coucher de soleil. Il y a eu des complications en chemin... mais au final, je suis ici avec cette personne.*",
  "\"...I'll be honest. At first, my heart wavered. There were so many wonderful people around.\"":
    "\"...Je vais être honnête. Au début, mon cœur a hésité. Il y avait tellement de personnes merveilleuses autour de moi.\"",
  "\"But in the end... the only one my heart points to is you.\"":
    "\"Mais au final... la seule personne vers qui mon cœur se tourne, c'est toi.\"",

  // Good ending character responses
  "\"...I knew. That you were being nice to other girls too. But it's okay. You're by my side in the end.\"":
    "\"...Je savais. Que tu étais gentil avec d'autres filles aussi. Mais c'est pas grave. Tu es à mes côtés au final.\"",
  "\"...I know you wavered. But you came to me in the end. ...That's enough.\"":
    "\"...Je sais que tu as hésité. Mais tu es venu vers moi au final. ...Ça me suffit.\"",
  "\"Pfft, I knew from the start! That you'd come to me in the end!! Hehe!\"":
    "\"Pfff, je le savais depuis le début ! Que tu viendrais vers moi au final !! Héhé !\"",
  "\"I knew you were popular with the students. Hehe... But right now, just look at me.\"":
    "\"Je savais que tu avais du succès auprès des élèves. Héhé... Mais là, regarde-moi seulement.\"",
  "\"...Player. But since you came to me, that's enough. From now on, eyes on me only. Got it?\"":
    "\"...Coureur. Mais puisque tu es venu vers moi, ça suffit. Désormais, tu ne regardes que moi. Compris ?\"",
  "*We held hands side by side, watching the sunset. It wasn't perfect... but this is our beginning.*":
    "*On s'est tenu la main côte à côte, regardant le coucher de soleil. Ce n'était pas parfait... mais c'est notre commencement.*",

  // Mayhem route
  "*I came up to the rooftop... Wait, huh?*":
    "*Je suis monté sur le toit... Attends, quoi ?*",
  "*Why... why is everyone here?!*":
    "*Pourquoi... pourquoi tout le monde est là ?!*",
  "\"Oh, {name}! I was just about to come up to the rooftop too!\"":
    "\"Oh, {name} ! J'allais justement monter sur le toit aussi !\"",
  "\"...Why is Seoyeon here again.\"":
    "\"...Pourquoi Seoyeon est encore là.\"",
  "\"Hey!! I'm here too!! Wait, why is everyone here?!\"":
    "\"Hé !! Moi aussi je suis là !! Attends, pourquoi tout le monde est là ?!\"",
  "*In the distance, the homeroom teacher is watching us. Her expression looks complicated.*":
    "*Au loin, le professeur principal nous observe. Son expression a l'air compliquée.*",
  "*The school nurse is also watching the situation through a window.*":
    "*L'infirmière scolaire observe aussi la situation depuis une fenêtre.*",
  "*I have a feeling... this is going to be absolute chaos...*":
    "*J'ai le pressentiment... que ça va être le chaos total...*",
  "\"By the way {name}, you remember our plans for this weekend, right?\"":
    "\"Au fait {name}, tu te souviens de nos projets pour ce week-end, hein ?\"",
  "\"...What? You made plans with me too.\"":
    "\"...Quoi ? Tu avais aussi fait des projets avec moi.\"",
  "\"Huh?! Hey! You told me you were free too!!\"":
    "\"Hein ?! Hé ! Tu m'avais dit que t'étais libre aussi !!\"",
  "*Everyone's eyes turn toward me simultaneously. ...I'm done for.*":
    "*Tous les regards se tournent vers moi en même temps. ...Je suis fichu.*",
  "\"...{name}. Care to explain?\"":
    "\"...{name}. Tu veux bien t'expliquer ?\"",
  "*What do I say?!*":
    "*Qu'est-ce que je dis ?!*",

  // Mayhem choices aftermath
  "\"A-actually... you're all such wonderful people that I couldn't choose...\"":
    "\"E-en fait... vous êtes toutes des personnes si merveilleuses que je n'arrivais pas à choisir...\"",
  "*Silence fills the air.*":
    "*Le silence envahit l'air.*",
  "\"......Hah.\"":
    "\"......Hah.\"",
  "\"...The worst.\"":
    "\"...Le pire.\"",
  "\"You really... you're really the worst!!!\"":
    "\"Tu es vraiment... tu es vraiment le pire !!!\"",
  "*I sprint toward the rooftop door without looking back!!*":
    "*Je fonce vers la porte du toit sans me retourner !!*",
  "\"Wait, {name}!! Where are you going?!\"":
    "\"Attends, {name} !! Où tu vas ?!\"",
  "\"...Running makes it even worse, you know.\"":
    "\"...Fuir, ça empire les choses, tu sais.\"",
  "\"Hey wait!! I won first place in the dash!! You can't escape!!\"":
    "\"Hé attends !! J'ai gagné le sprint !! Tu peux pas m'échapper !!\"",
  "*Everyone chases me down the stairs. Why is everyone so fast?!*":
    "*Tout le monde me poursuit dans les escaliers. Pourquoi elles sont toutes si rapides ?!*",
  "\"...I'm not joking. I sincerely like every single one of you here.\"":
    "\"...Je ne plaisante pas. J'aime sincèrement chacune d'entre vous ici.\"",
  "\"It's not that I can't choose— I don't want to choose. If I pick one, I lose the others.\"":
    "\"Ce n'est pas que je ne peux pas choisir — je ne veux pas choisir. Si j'en choisis une, je perds les autres.\"",
  "*A long silence follows.*":
    "*Un long silence suit.*",
  "\"...Hah. You've really got nerve. You know you'd normally get slapped for saying that, right?\"":
    "\"...Hah. Tu as vraiment du culot. Tu sais que normalement tu te prendrais une gifle pour ça, hein ?\"",
  "\"...The worst. But... I'll admit you're honest.\"":
    "\"...Le pire. Mais... j'admets que tu es honnête.\"",
  "\"Hey!! That doesn't even make sense!! ...But why don't I hate it?!\"":
    "\"Hé !! Ça n'a même pas de sens !! ...Mais pourquoi ça ne me déplaît pas ?!\"",
  "*They all exchange glances. A strange silence hangs in the air.*":
    "*Elles échangent toutes des regards. Un étrange silence flotte dans l'air.*",
  "\"...I have one condition. You have to treat me the best.\"":
    "\"...J'ai une condition. Tu dois me traiter le mieux.\"",
  "\"...Treat me the best.\"":
    "\"...Traite-moi le mieux.\"",
  "\"Treat!! Me!! The best!!\"":
    "\"Traite !! Moi !! Le mieux !!\"",
  "*...They all glare at me at once. Their eyes are terrifying.*":
    "*...Elles me fusillent toutes du regard en même temps. Leurs yeux sont terrifiants.*",
  "*...This might be the beginning of hell. But in this moment— I'm the happiest man in the world.*":
    "*...C'est peut-être le début de l'enfer. Mais en cet instant — je suis l'homme le plus heureux du monde.*",
  "*The sunset fades. Is this how a peaceful Sunday afternoon ends...?*":
    "*Le coucher de soleil s'estompe. C'est comme ça qu'un paisible dimanche après-midi se termine... ?*",
  "*...But why don't I feel so bad? This chaotic everyday life... is kind of its own happiness.*":
    "*...Mais pourquoi est-ce que je ne me sens pas si mal ? Ce quotidien chaotique... c'est en quelque sorte son propre bonheur.*",

  // Friend route - confession
  "*The sunset paints the rooftop. I look at the face of the person beside me.*":
    "*Le coucher de soleil peint le toit. Je regarde le visage de la personne à côté de moi.*",
  "*This is my last chance to tell them how I feel... What should I do?*":
    "*C'est ma dernière chance de lui dire ce que je ressens... Que dois-je faire ?*",
  "\"The truth is... I like you. I've been trying to say it since yesterday, and I finally found the courage.\"":
    "\"En vérité... je t'aime bien. J'essaye de te le dire depuis hier, et j'ai enfin trouvé le courage.\"",

  // Confession responses
  "\"...Dummy. I've been waiting this whole time. I... like you too.\"":
    "\"...Idiot. J'attendais depuis tout ce temps. Moi aussi... je t'aime bien.\"",
  "\"...You're late. Really late. ...But it's okay. I feel the same way.\"":
    "\"...Tu es en retard. Vraiment en retard. ...Mais c'est pas grave. Je ressens la même chose.\"",
  "\"...!! Finally!! Do you know how long I've been waiting since yesterday?! I like you too, dummy!!\"":
    "\"...!! Enfin !! Tu sais depuis combien de temps j'attends depuis hier ?! Moi aussi je t'aime bien, idiot !!\"",
  "\"...You're finally saying it? Me too... I've felt the same way. For a long time.\"":
    "\"...Tu le dis enfin ? Moi aussi... je ressens la même chose. Depuis longtemps.\"",
  "\"...Geez, seriously. Why didn't you say so yesterday. I was up all night thinking about it. ...I like you too, dummy.\"":
    "\"...Pfff, sérieux. Pourquoi tu l'as pas dit hier. J'ai passé la nuit à y penser. ...Moi aussi je t'aime bien, idiot.\"",

  // After confession
  "*After staring at each other for a while, we burst into laughter.*":
    "*Après s'être fixés un moment, on a éclaté de rire.*",
  "*Something so simple... why did it take so long?*":
    "*Quelque chose de si simple... pourquoi ça a pris si longtemps ?*",

  // Friend route - stay friends
  "\"...I'm really glad I met someone like you at this school.\"":
    "\"...Je suis vraiment content d'avoir rencontré quelqu'un comme toi dans cette école.\"",
  "\"...Yeah, me too! Let's stay good friends. ...Friends.\"":
    "\"...Oui, moi aussi ! Restons bons amis. ...Amis.\"",
  "\"...Right. Friends. ...Thanks.\"":
    "\"...Oui. Amis. ...Merci.\"",
  "\"...Yeah! You're the best friend ever! ...The best... friend.\"":
    "\"...Oui ! Tu es le meilleur ami du monde ! ...Le meilleur... ami.\"",
  "\"...Right. You're a good student. ...A good student.\"":
    "\"...C'est ça. Tu es un bon élève. ...Un bon élève.\"",
  "\"...Yeah, well. Teacher and student, so of course it's natural. ...Of course.\"":
    "\"...Oui, enfin. Professeure et élève, c'est normal. ...Bien sûr.\"",
  "*...Somehow, their smile looked a little sad. A corner of my heart ached too.*":
    "*...Bizarrement, son sourire avait l'air un peu triste. Un coin de mon cœur me faisait mal aussi.*",
  "*Was this the right choice? ...I don't know. But this too is an ending.*":
    "*Était-ce le bon choix ? ...Je ne sais pas. Mais c'est aussi une fin.*",

  // Alone route
  "*I watch the sunset alone on the rooftop. Memories of my time at this school flash by.*":
    "*Je regarde le coucher de soleil seul sur le toit. Les souvenirs de mon passage dans cette école défilent.*",
  "*Seoyeon, Yuna, Dain, the teachers... There were so many wonderful people.*":
    "*Seoyeon, Yuna, Dain, les professeurs... Il y avait tellement de personnes merveilleuses.*",
  "*Should I have told one of them how I felt? ...Probably.*":
    "*Aurais-je dû dire à l'une d'elles ce que je ressentais ? ...Probablement.*",
  "*But I don't regret it. The time I spent here is precious in itself.*":
    "*Mais je ne regrette pas. Le temps passé ici est précieux en soi.*",
  "*I'm alone, but I'm not lonely. I've definitely changed from who I was before I transferred.*":
    "*Je suis seul, mais pas solitaire. J'ai définitivement changé par rapport à celui que j'étais avant mon transfert.*",
  "*Tomorrow is a fresh start. This time... I'll be a little braver.*":
    "*Demain est un nouveau départ. Cette fois... je serai un peu plus courageux.*",

  // ===== day5_4_night.js =====

  // True love ending
  "*And so, my transfer student story comes to an end.*":
    "*Et ainsi, mon histoire d'élève transféré touche à sa fin.*",
  "*That one person I met at my new school.*":
    "*Cette seule personne que j'ai rencontrée dans ma nouvelle école.*",
  "*From the very first moment we met, until this very moment— my heart never once wavered.*":
    "*Du tout premier instant de notre rencontre jusqu'à cet instant précis — mon cœur n'a jamais vacillé.*",
  "*I remember it. That moment our eyes first met in the hallway. It felt like time had stopped.*":
    "*Je m'en souviens. Ce moment où nos regards se sont croisés pour la première fois dans le couloir. On aurait dit que le temps s'était arrêté.*",
  "*I didn't know back then. That one brief glance would change the course of my entire life.*":
    "*Je ne le savais pas à l'époque. Qu'un seul bref regard allait changer le cours de toute ma vie.*",
  "*I can't pinpoint the exact moment I fell in love. I just— one day, I couldn't imagine a tomorrow without them.*":
    "*Je ne peux pas identifier le moment exact où je suis tombé amoureux. C'est juste qu'un jour, je ne pouvais plus imaginer un lendemain sans elle.*",
  "*Like warmth that still lingers on my lips, this feeling will never fade.*":
    "*Comme une chaleur qui persiste encore sur mes lèvres, ce sentiment ne s'effacera jamais.*",
  "*Some would say even feelings like this have an expiration date.*":
    "*Certains diraient que même des sentiments comme ceux-ci ont une date d'expiration.*",
  "*But I know the truth. This isn't something that cools— it's something that seeps deeper.*":
    "*Mais je connais la vérité. Ce n'est pas quelque chose qui se refroidit — c'est quelque chose qui s'enracine plus profondément.*",
  "*Tomorrow, the day after, even a year from now I can see myself unable to escape from this person.*":
    "*Demain, après-demain, même dans un an, je me vois incapable d'échapper à cette personne.*",
  "*Let's make a promise. No matter what season comes, you will be tied to my side forever.*":
    "*Faisons une promesse. Quelle que soit la saison, tu seras liée à moi pour toujours.*",
  "*To love someone completely is to hold one single obsession amid all the uncertainty in the world.*":
    "*Aimer quelqu'un complètement, c'est entretenir une seule obsession au milieu de toute l'incertitude du monde.*",
  "─── TRUE LOVE END ───":
    "─── FIN : AMOUR VÉRITABLE ───",

  // Good ending
  "*And so, my transfer student story comes to an end.*\n": null,  // duplicate - handled above
  "*It took me a long time to find the courage. But because I waited, this feeling is certain.*":
    "*Il m'a fallu longtemps pour trouver le courage. Mais parce que j'ai attendu, ce sentiment est certain.*",
  "*My heart was set from the beginning. It just took time to put it into words.*":
    "*Mon cœur était décidé depuis le début. Il a juste fallu du temps pour le mettre en mots.*",
  "*I hesitated because I was afraid of the answer. Afraid of rejection, afraid of ruining what we had.*":
    "*J'ai hésité parce que j'avais peur de la réponse. Peur du rejet, peur de gâcher ce qu'on avait.*",
  "*But I finally said it. And the answer— was worth the wait.*":
    "*Mais je l'ai finalement dit. Et la réponse — valait l'attente.*",
  "*My heart swayed at times, and I made mistakes.*":
    "*Mon cœur a parfois vacillé, et j'ai fait des erreurs.*",
  "*But in the end— I found where my true feelings belonged.*":
    "*Mais au final — j'ai trouvé où appartenaient mes vrais sentiments.*",
  "*Looking back, there were times I was careless with someone else's heart.*":
    "*Avec le recul, il y a eu des moments où j'ai été négligent avec le cœur de quelqu'un d'autre.*",
  "*I may have given someone hope only to take it away. I'm sorry for that.*":
    "*J'ai peut-être donné de l'espoir à quelqu'un pour ensuite le reprendre. J'en suis désolé.*",
  "*But it was because of that wavering that I came to understand what true feelings really are.*":
    "*Mais c'est grâce à ces hésitations que j'ai compris ce que sont les vrais sentiments.*",
  "*It doesn't have to be perfect. Because this is our beginning.*":
    "*Ce n'est pas obligé d'être parfait. Parce que c'est notre commencement.*",
  "*I wasn't lost. It was just a process to make you mine.*":
    "*Je n'étais pas perdu. C'était juste le chemin pour te faire mienne.*",
  "*If there had been no hesitation, there would be no such terrible possessiveness now.*":
    "*S'il n'y avait pas eu d'hésitation, il n'y aurait pas cette terrible possessivité maintenant.*",
  "*Imperfect love is still love. No perhaps it's more perfect because it's broken.*":
    "*Un amour imparfait reste de l'amour. Non, il est peut-être plus parfait justement parce qu'il est brisé.*",
  "*I'll make mistakes again. We'll clash. But with this person, falling into ruin together wouldn't be so bad.*":
    "*Je referai des erreurs. On se disputera. Mais avec cette personne, sombrer ensemble ne serait pas si grave.*",
  "*So it's okay. This obsession took a long time to form that's exactly why it will never be undone.*":
    "*Alors ça va. Cette obsession a mis longtemps à se former, c'est exactement pour ça qu'elle ne se défera jamais.*",
  "─── GOOD END ───":
    "─── BONNE FIN ───",

  // Mayhem ending
  "*And so, my transfer student story… is it really over?*":
    "*Et ainsi, mon histoire d'élève transféré... est-elle vraiment terminée ?*",
  "*The night sky was too beautiful to gaze at just one star.*":
    "*Le ciel nocturne était trop beau pour ne contempler qu'une seule étoile.*",
  "*…not that excuses like that will stop them from chasing me.*":
    "*...non pas que des excuses comme ça les empêcheront de me pourchasser.*",
  "*One day, three lunch boxes appeared behind the classroom at the same time. That day, I genuinely thought I was done for.*":
    "*Un jour, trois bentôs sont apparus derrière la salle de classe en même temps. Ce jour-là, j'ai vraiment cru que c'en était fini de moi.*",
  "(\"Is she your girlfriend?\" \"No, I am!\" \"What are you talking about, it's me!\" …The hallway became a battlefield that day.)":
    "(\"C'est ta copine ?\" \"Non, c'est moi !\" \"N'importe quoi, c'est moi !\" ...Le couloir est devenu un champ de bataille ce jour-là.)",
  "*I took the chance to sneak away to the rooftop. I'd never run that fast in my entire life.*":
    "*J'en ai profité pour filer en douce sur le toit. Je n'avais jamais couru aussi vite de toute ma vie.*",
  "*…But someone was already waiting for me on the rooftop. There really was no escape.*":
    "*...Mais quelqu'un m'attendait déjà sur le toit. Il n'y avait vraiment aucune échappatoire.*",
  "*Maybe it's selfish. Wanting to cherish everyone. But it's already too late.*":
    "*C'est peut-être égoïste. Vouloir chérir tout le monde. Mais il est déjà trop tard.*",
  "*Their obsession is already suffocating me. The moment I choose one, I will be ruined.*":
    "*Leur obsession m'étouffe déjà. Le moment où j'en choisirai une, je serai perdu.*",
  "*Honestly, this hellish daily life... isn't so bad. I wonder what chaos tomorrow will bring.*":
    "*Honnêtement, ce quotidien infernal... c'est pas si mal. Je me demande quel chaos demain m'apportera.*",
  "*Would I make the same choices if I were born again? …I won't answer that. But this smile is real.*":
    "*Ferais-je les mêmes choix si je renaissais ? ...Je ne répondrai pas. Mais ce sourire est sincère.*",
  "*There's no conclusion. But well… this chaotic everyday life is my story.*":
    "*Il n'y a pas de conclusion. Mais bon... ce quotidien chaotique, c'est mon histoire.*",
  "─── MAYHEM END ───":
    "─── FIN : CHAOS ───",

  // Harem ending
  "*And so, my transfer student story— hasn't ended.*":
    "*Et ainsi, mon histoire d'élève transféré — n'est pas terminée.*",
  "*Multiple lovers. An impossible reality unfolded before my eyes.*":
    "*Plusieurs amours. Une réalité impossible s'est déployée devant mes yeux.*",
  "*Every day is a war. Battles break out daily over who gets treated the best.*":
    "*Chaque jour est une guerre. Des batailles éclatent quotidiennement pour savoir qui sera le mieux traitée.*",
  "*Mondays: who walks me to school. Tuesdays: whose lunch I eat. Wednesdays: who walks me home... My weekly schedule is a diplomatic nightmare.*":
    "*Lundi : qui m'accompagne à l'école. Mardi : le déjeuner de qui je mange. Mercredi : qui me raccompagne... Mon planning hebdomadaire est un cauchemar diplomatique.*",
  "*One of them watches over me with a quiet smile, another confidently links her arm with mine, and the last one secretly holds my hand from behind.*":
    "*L'une me surveille avec un sourire discret, l'autre passe son bras sous le mien avec assurance, et la dernière me tient secrètement la main par derrière.*",
  "*Each of their charms is so different. That's why I can't compare them, and that's why I can't give any of them up.*":
    "*Chacune de leurs charmes est si différent. C'est pour ça que je ne peux pas les comparer, et c'est pour ça que je ne peux renoncer à aucune d'elles.*",
  "*But oddly enough, all of them are smiling. As if they completely own me.*":
    "*Mais étrangement, elles sourient toutes. Comme si elles me possédaient entièrement.*",
  "*Call it greed if you want. If I can't escape from this terrible cycle of obsession.*":
    "*Appelez ça de l'avidité si vous voulez. Si je ne peux pas échapper à ce terrible cycle d'obsession.*",
  "*No regrets. No, they don't even give me time to regret. They are watching my every move.*":
    "*Pas de regrets. Non, elles ne me laissent même pas le temps de regretter. Elles surveillent chacun de mes mouvements.*",
  "*Of course, no one knows when this balance will break. The moment someone crosses the line, a bloodbath will begin.*":
    "*Bien sûr, personne ne sait quand cet équilibre se brisera. Le moment où quelqu'un franchira la ligne, un bain de sang commencera.*",
  "*But the fact that I even enjoy the tension— maybe I'm already past the point of no return.*":
    "*Mais le fait que j'apprécie même la tension — peut-être que j'ai déjà dépassé le point de non-retour.*",
  "*Tomorrow I'll be watched again. The day after, they'll tighten their grip even more. But these bloody days, I accept them.*":
    "*Demain je serai encore surveillé. Après-demain, elles resserreront leur emprise encore plus. Mais ces jours sanglants, je les accepte.*",
  "─── UNRESOLVED END ───":
    "─── FIN NON RÉSOLUE ───",

  // Friend ending
  "*I couldn't say what I felt. No— I chose not to.*":
    "*Je n'ai pas pu dire ce que je ressentais. Non — j'ai choisi de ne pas le dire.*",
  "(The feelings I hid behind the word \"friend\" might surface on some quiet nights.)":
    "(Les sentiments que j'ai cachés derrière le mot « ami » resurgiront peut-être certaines nuits silencieuses.)",
  "*I remember. That day on the rooftop, the way the wind swept their hair, and the fingertips that brushed it aside.*":
    "*Je me souviens. Ce jour-là sur le toit, la façon dont le vent balayait ses cheveux, et les doigts qui les écartaient.*",
  "(If I had said \"I like you\" back then, would tonight be any different?)":
    "(Si j'avais dit « Je t'aime bien » à ce moment-là, est-ce que ce soir serait différent ?)",
  "*Unspoken feelings don't disappear. They simply glow quietly, deep within the heart.*":
    "*Les sentiments non exprimés ne disparaissent pas. Ils luisent simplement en silence, au fond du cœur.*",
  "(Sometimes the closest distance is also the farthest. The distance called \"friends.\")":
    "(Parfois la plus courte distance est aussi la plus longue. La distance qu'on appelle « amis ».)",
  "*Still, it's not all bad. I can see their smile right beside me. Waiting for the day I can shatter that smile.*":
    "*Pourtant, ce n'est pas si mal. Je peux voir son sourire juste à côté de moi. En attendant le jour où je pourrai briser ce sourire.*",
  "*Maybe this isn't cowardice, but a quiet hunt. Staying by their side while holding my prey.*":
    "*Peut-être que ce n'est pas de la lâcheté, mais une chasse silencieuse. Rester à ses côtés tout en gardant ma proie.*",
  "*Still I don't regret it. Someday, the chance to make you completely mine will come.*":
    "*Pourtant je ne regrette pas. Un jour, l'occasion de te faire entièrement mienne viendra.*",
  "*Someday— when the day comes that I can speak this heart, I won't hesitate.*":
    "*Un jour — quand viendra le moment de parler avec ce cœur, je n'hésiterai pas.*",
  "*Some stories linger longer precisely because they're left unfinished. This season will be remembered that way.*":
    "*Certaines histoires perdurent plus longtemps justement parce qu'elles restent inachevées. Cette saison sera remémorée ainsi.*",
  "─── FRIEND END ───":
    "─── FIN : AMI ───",

  // Alone ending
  "*No one special came along. But the time I spent at this school was precious.*":
    "*Personne de spécial n'est apparu. Mais le temps passé dans cette école était précieux.*",
  "*I'm different now from who I was before I transferred— back when I felt like I couldn't do anything.*":
    "*Je suis différent maintenant de celui que j'étais avant mon transfert — quand j'avais l'impression de ne rien pouvoir faire.*",
  "*What I learned at this school wasn't about romance. It was about facing myself.*":
    "*Ce que j'ai appris dans cette école, ce n'était pas l'amour. C'était me confronter à moi-même.*",
  "*The laughter in the classroom, the chatter between classes, the sunlight during P.E.— all those ordinary things mattered.*":
    "*Les rires dans la salle de classe, les bavardages entre les cours, le soleil pendant le sport — toutes ces choses ordinaires comptaient.*",
  "*Solitude is not a punishment. It's time spent face to face with yourself.*":
    "*La solitude n'est pas une punition. C'est du temps passé face à soi-même.*",
  "*I learned that before you can love someone else, you must first understand yourself.*":
    "*J'ai appris qu'avant de pouvoir aimer quelqu'un d'autre, il faut d'abord se comprendre soi-même.*",
  "*Being alone doesn't mean being lonely. There are things you can only hear when you're on your own. Their footsteps, their breathing, the eyes watching me.*":
    "*Être seul ne veut pas dire être solitaire. Il y a des choses qu'on n'entend que quand on est seul. Leurs pas, leur souffle, les yeux qui me regardent.*",
  "*The sound of the wind, my footsteps, my own heartbeat. Within that quiet rhythm, I was slowly going mad.*":
    "*Le bruit du vent, mes pas, mes propres battements de cœur. Dans ce rythme silencieux, je sombre doucement dans la folie.*",
  "*Even if I couldn't reach anyone, these times are never meaningless. Because I am definitely sinking into a deeper darkness than yesterday.*":
    "*Même si je n'ai pu atteindre personne, ces moments ne sont jamais vains. Car je sombre assurément dans une obscurité plus profonde qu'hier.*",
  "*There's no need to rush. I can walk at my own pace, on my own path.*":
    "*Pas besoin de se presser. Je peux marcher à mon rythme, sur mon propre chemin.*",
  "*Walking alone on a night road isn't so bad. The stars shine brightest, after all, because of the darkness.*":
    "*Marcher seul sur une route nocturne, ce n'est pas si mal. Les étoiles brillent le plus fort, après tout, grâce à l'obscurité.*",
  "─── ALONE END ───":
    "─── FIN : SOLITAIRE ───",
};

// Also handle name translations in Korean-only fr blocks
const nameTranslations = {
  "나": "Moi",
  "서연": "Seoyeon",
  "유나": "Yuna",
  "다인": "Dain",
  "보건선생님": "Infirmière Scolaire",
  "담임선생님": "Professeur Principal",
  "시스템": "Système",
};

// Choice translations
const choiceTranslations = {
  "\"C-can't I like all of you...?\"": "\"J-je peux pas toutes vous aimer... ?\"",
  "\"Let me speak from the heart.\"": "\"Laissez-moi parler avec le cœur.\"",
  "\"(Run for it!!)\"": "\"(La fuite !!)\"",
  "\"I need to tell you something...\" (Confess)": "\"Il faut que je te dise quelque chose...\" (Se déclarer)",
  "\"...I'm glad we're good friends.\" (Stay friends)": "\"...Je suis content qu'on soit de bons amis.\" (Rester amis)",
};

// Process each file
const files = [
  'assets/js/scenario/day5_1_morning.js',
  'assets/js/scenario/day5_2_lunch.js',
  'assets/js/scenario/day5_3_afterschool.js',
  'assets/js/scenario/day5_4_night.js'
];

let totalReplacements = 0;
let totalNameFixes = 0;
let totalChoiceReplacements = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  let modified = false;
  let inFrBlock = false;
  let braceDepth = 0;
  let replacements = 0;
  let nameFixes = 0;
  let choiceReplacements = 0;

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();

    // Detect "fr": { opening (can be inline or multi-line)
    if (trimmed.startsWith('"fr"') && trimmed.includes('{')) {
      inFrBlock = true;
      // Count braces
      const openBraces = (lines[i].match(/\{/g) || []).length;
      const closeBraces = (lines[i].match(/\}/g) || []).length;
      braceDepth = openBraces - closeBraces;

      // Single-line fr block
      if (braceDepth <= 0) {
        inFrBlock = false;
        // Try text replacement on this line
        const textMatch = lines[i].match(/"text":\s*"((?:[^"\\]|\\.)*)"/);
        if (textMatch && textMatch[1].trim() !== '') {
          const englishText = textMatch[1];
          if (translations[englishText]) {
            lines[i] = lines[i].replace('"text": "' + englishText + '"', '"text": "' + translations[englishText] + '"');
            replacements++;
            modified = true;
          }
        }
        // Try name fix on this line
        const nameMatch = lines[i].match(/"name":\s*"((?:[^"\\]|\\.)*)"/);
        if (nameMatch && nameTranslations[nameMatch[1]]) {
          lines[i] = lines[i].replace('"name": "' + nameMatch[1] + '"', '"name": "' + nameTranslations[nameMatch[1]] + '"');
          nameFixes++;
          modified = true;
        }
      }
      continue;
    }

    if (inFrBlock) {
      const openBraces = (lines[i].match(/\{/g) || []).length;
      const closeBraces = (lines[i].match(/\}/g) || []).length;
      braceDepth += openBraces - closeBraces;

      // Check for "text" field
      const textMatch = trimmed.match(/^"text":\s*"((?:[^"\\]|\\.)*)"/);
      if (textMatch && textMatch[1].trim() !== '') {
        const text = textMatch[1];
        if (translations[text]) {
          lines[i] = lines[i].replace('"text": "' + text + '"', '"text": "' + translations[text] + '"');
          replacements++;
          modified = true;
        } else {
          // Try with slightly different quoting
          const altKey = text.replace(/\\"/g, '"');
          if (translations[altKey]) {
            lines[i] = lines[i].replace(text, translations[altKey].replace(/"/g, '\\"'));
            replacements++;
            modified = true;
          }
        }
      }

      // Check for "name" field - fix Korean names in fr blocks
      const nameMatch = trimmed.match(/^"name":\s*"((?:[^"\\]|\\.)*)"/);
      if (nameMatch && nameTranslations[nameMatch[1]]) {
        lines[i] = lines[i].replace('"name": "' + nameMatch[1] + '"', '"name": "' + nameTranslations[nameMatch[1]] + '"');
        nameFixes++;
        modified = true;
      }

      // Check for choices
      for (const [engChoice, frChoice] of Object.entries(choiceTranslations)) {
        if (lines[i].includes(engChoice)) {
          lines[i] = lines[i].replace(engChoice, frChoice);
          choiceReplacements++;
          modified = true;
        }
      }

      if (braceDepth <= 0) {
        inFrBlock = false;
      }
    }
  }

  if (modified) {
    fs.writeFileSync(file, lines.join('\n'), 'utf8');
    console.log(`${file}: ${replacements} text replacements, ${nameFixes} name fixes, ${choiceReplacements} choice replacements`);
  } else {
    console.log(`${file}: no changes made`);
  }
  totalReplacements += replacements;
  totalNameFixes += nameFixes;
  totalChoiceReplacements += choiceReplacements;
}

console.log(`\nTotal: ${totalReplacements} text replacements, ${totalNameFixes} name fixes, ${totalChoiceReplacements} choice replacements`);
