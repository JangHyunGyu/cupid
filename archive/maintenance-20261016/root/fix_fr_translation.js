/**
 * FR 번역 검수 수정 스크립트
 * KO 원본 대조 결과 발견된 의미 누락/왜곡/인코딩 깨짐 일괄 수정
 */
const fs = require('fs');
const path = require('path');

const FR_DIR = path.join(__dirname, 'assets/js/i18n/fr');

function loadJSON(file) {
  return JSON.parse(fs.readFileSync(path.join(FR_DIR, file), 'utf8'));
}

function saveJSON(file, data) {
  fs.writeFileSync(path.join(FR_DIR, file), JSON.stringify(data, null, 4) + '\n', 'utf8');
}

function fix(data, key, field, newValue) {
  if (!data[key]) {
    console.log(`  [SKIP] 키 없음: ${key}`);
    return 0;
  }
  const old = data[key][field];
  if (old === newValue) {
    return 0;
  }
  data[key][field] = newValue;
  console.log(`  [FIX] ${key}.${field}`);
  return 1;
}

let totalFixes = 0;

// ============================================================
// DAY 1-1 MORNING
// ============================================================
console.log('\n=== day1_1_morning.json ===');
{
  const file = 'day1_1_morning.json';
  const d = loadJSON(file);
  let n = 0;

  n += fix(d, 'seoyeon_meet_2', 'text', "*Sa voix est posée. Pas froide, mais avec une certaine décontraction.*");
  n += fix(d, 'seoyeon_meet_8', 'text', "*Elle esquisse un sourire. Sans m'en rendre compte, je souriais aussi. Seoyeon se dirige vers le portail en me faisant signe de la suivre.*");
  n += fix(d, 'choice_flirt_4', 'text', "C'est parce que t'es nouveau ? T'as aucun filtre. C'est marrant.");
  n += fix(d, 'hallway_13_b', 'text', "*Son dos est parfaitement droit. — Derrière cette aisance, qu'est-ce qui se cache.*");
  n += fix(d, 'classroom_dain_1', 'text', "Oh ! Un nouveau mec ! Enfin une nouvelle recrue !");

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 1-2 LUNCH
// ============================================================
console.log('\n=== day1_2_lunch.json ===');
{
  const file = 'day1_2_lunch.json';
  const d = loadJSON(file);
  let n = 0;

  n += fix(d, 'lunch_start_5', 'text', "Hé ! T'as mangé ?! On va à la boutique ! On parie pour du pain, le perdant paie !");
  n += fix(d, 'lunch_seo_6_b', 'text', "*Sourire* Tu es très méfiant. Quand on passe son temps à gérer les gens en bas, parfois on a juste envie d'être seul.");
  n += fix(d, 'lunch_seo_14', 'text', "Si la présidente du conseil ne sait même pas préparer un bento, ça le fait pas.");
  n += fix(d, 'lunch_seo_after_2', 'text', "Garde ta pause déjeuner libre la prochaine fois.");
  n += fix(d, 'lunch_dain_2', 'text', "Le pain soboro et le lait à la fraise, c'est le meilleur ratio calories-bonheur ! Crois-moi !");
  n += fix(d, 'lunch_dain_c1_1', 'text', "Haha génial !! Entraînement spécial à partir d'aujourd'hui ! Gymnase après les cours, on commence par l'échauffement, deal ?!");
  n += fix(d, 'lunch_yuna_10_b', 'text', "*Quelque chose est glissé dans le bureau de Yuna. Un vieux marque-page. Il y a de l'écriture dessus — mais je n'arrive pas à lire. Yuna pose inconsciemment sa main dessus. Quelque chose de précieux, peut-être. Je prends un livre au hasard dans les rayonnages et je l'ouvre.*");

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 1-3 AFTERSCHOOL
// ============================================================
console.log('\n=== day1_3_afterschool.json ===');
{
  const file = 'day1_3_afterschool.json';
  const d = loadJSON(file);
  let n = 0;

  n += fix(d, 'after1_jealousy_seo_yuna', 'text', "*Mes doigts effleurent la poche latérale de mon sac et accrochent l'angle d'un papier. Un billet plié. Aucune idée de quand il a été glissé là. L'écriture de Yuna. 'Je t'ai vu sur le toit à midi. ...Tu avais l'air de bien t'entendre avec la présidente.' — Trois points de suspension à la fin. Comme si elle avait ravalé ce qu'elle voulait vraiment dire.*");
  n += fix(d, 'after1_jealousy_seo_3', 'text', "...Je t'ai vu descendre du toit. Juste vous deux ?");
  n += fix(d, 'after_miss_dain_6_b', 'text', "*Elle fait un signe de la main et repart en courant. — En freinant, elle a brièvement saisi son genou droit. Un demi-seconde. Elle a aussitôt retiré sa main, mais je l'ai vu.*");
  n += fix(d, 'after_hidden_nurse_intro', 'text', "*En marchant dans le couloir — un léger vertige. Le stress du premier jour, sûrement. Je remarque le panneau « Infirmerie » de l'autre côté du couloir. Un peu trop étourdi pour faire comme si de rien n'était.*");
  n += fix(d, 'after_hidden_nurse_intro_b', 'text', "*Je m'arrête devant la porte et je prends une longue inspiration. Autant me reposer un peu. Ma main se pose sur la poignée. Le contact froid du métal contre ma paume.*");
  n += fix(d, 'after_homeroom_honest_choice2b_b', 'text', "*Elle a ri. — C'est la première fois que je la vois rire à une blague. Elle referme le registre et se lève. Arrivée au seuil, elle me rappelle comme si quelque chose lui revenait seulement à cet instant.*");

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 1-4 NIGHT
// ============================================================
console.log('\n=== day1_4_night.json ===');
{
  const file = 'day1_4_night.json';
  const d = loadJSON(file);
  let n = 0;

  n += fix(d, 'night_late_transition', 'text', "*J'allais m'endormir quand — mon téléphone sonne encore une fois. 23 heures. Qui ça peut être ?*");

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 2-1 MORNING
// ============================================================
console.log('\n=== day2_1_morning.json ===');
{
  const file = 'day2_1_morning.json';
  const d = loadJSON(file);
  let n = 0;

  n += fix(d, 'morning2_greet_seo_2', 'text', "*Seoyeon est venue vers moi en premier. Son ton habituel, mais avec un besoin de confirmation. Dain jette un coup d'œil depuis le fond de la classe. Elle détourne la tête. Yuna s'enfonce davantage dans son livre. Elle tourne les pages plus vite.*");
  n += fix(d, 'morning2_seo_1', 'name', "Seoyeon");
  n += fix(d, 'morning2_seo_1', 'text', "*En passant dans le couloir, jetant un coup d'œil dans la classe* Tu as bien dormi hier ?");
  n += fix(d, 'hidden_homeroom_d2_10', 'text', "C'est dans les tâches de gestion de classe. C'est du boulot.");
  n += fix(d, 'hidden_homeroom_d2_8_e', 'text', "*Posant son café* ...Bref. De ton côté, rien de particulier.");
  n += fix(d, 'hidden_homeroom_d2_2_b', 'text', "*J'ai suivi la prof jusqu'à la salle des profs.* *Son bureau est dans le coin. Des papiers et une tasse de café sur le bureau, et — un tiroir légèrement entrouvert. Sur le bureau, une pile de papiers et — du papier à manuscrit.*");
  n += fix(d, 'hidden_homeroom_d2_choice2_a', 'text', "*Cache sa bouche derrière sa tasse de café* ...Raté, la gestion des expressions. Bon, file.");

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 2-2 LUNCH
// ============================================================
console.log('\n=== day2_2_lunch.json ===');
{
  const file = 'day2_2_lunch.json';
  const d = loadJSON(file);
  let n = 0;

  n += fix(d, 'lunch2_dain_10', 'text', "*Seoyeon regarde par ici. Elle me fixe, debout à côté de Dain en train de manger du pain, pendant une demi-seconde — puis continue son chemin. J'ai senti une pointe au cœur.*");
  n += fix(d, 'lunch2_dain_c1_1', 'text', "*L'expression de Dain se fige subtilement. Elle croque son soboro et détourne la tête. — Est-ce que je l'ai blessée ?*");
  n += fix(d, 'lunch2_dain_end_ins5_first', 'name', "Infirmière");
  n += fix(d, 'lunch2_dain_end_ins5_first', 'text', "*Levant les yeux* C'est la première fois que tu viens, non ? Le nouvel élève, c'est ça ?");
  n += fix(d, 'lunch2_dain_end_ins7_first', 'text', "C'est normal pour une première fois. Allez, on désinfecte.");
  n += fix(d, 'lunch2_dain_end_ins8_first', 'text', "*Son ton taquin n'a pas changé. Mais ses yeux examinent déjà la blessure.*");
  n += fix(d, 'lunch2_dain_end_w', 'text', "C'est fini, retourne en cours. — Si tu reviens, j'ajoute des examens au dossier.");
  n += fix(d, 'lunch2_dain_end_v', 'text', "*Elle noie le poisson avec une blague, mais elle a refermé ça vite. — Il y a quelque chose qu'elle ne veut pas qu'on voie.*");
  n += fix(d, 'lunch2_yuna_choice', 'text', "*Rien après 'il y avait'. L'imparfait. — Le silence de Yuna raconte toujours une histoire. Je deviens prudent.*");

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 2-3 AFTERSCHOOL
// ============================================================
console.log('\n=== day2_3_afterschool.json ===');
{
  const file = 'day2_3_afterschool.json';
  const d = loadJSON(file);
  let n = 0;

  n += fix(d, 'after2_msg_dain', 'text', "Viens au gymnase !! Aujourd'hui c'est le vrai pari !!");
  n += fix(d, 'hidden_nurse_d2_2', 'text', "Deux jours d'affilée, faudrait te faire une carte de membre de l'infirmerie.");
  // 선택지 수정 - gorge→cou
  if (d['after2_seo_choice1'] && d['after2_seo_choice1'].choices) {
    const choices = d['after2_seo_choice1'].choices;
    if (choices[1] && choices[1].includes('gorge')) {
      choices[1] = "Tu as mal au cou ? Fais des pauses.";
      console.log('  [FIX] after2_seo_choice1.choices[1]');
      n++;
    }
  }
  n += fix(d, 'after2_seo_neck_react_b', 'text', "Attends. Ne bouge pas.");
  n += fix(d, 'after2_dain_end_3e', 'text', "*Le sujet a changé. — L'attention de Dain est maladroite, mais chaleureuse.*");
  n += fix(d, 'after2_yuna_end', 'text', "*Sur mon téléphone, le message de Dain 'Je t'attendais ?' et celui de Seoyeon 'Préviens si ton planning change' arrivent en retard. Pendant qu'on écoute de la musique côte à côte, le coucher de soleil est tombé. — À côté de cette personne, j'ai sans cesse envie de revenir.*");

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 2-4 NIGHT
// ============================================================
console.log('\n=== day2_4_night.json ===');
{
  const file = 'day2_4_night.json';
  const d = loadJSON(file);
  let n = 0;

  n += fix(d, 'night2_msg_generic', 'text', "Hé !! T'iras à la cafét' demain, hein ?!");
  n += fix(d, 'night2_msg_generic_2', 'text', "Je laisserai le toit ouvert à midi demain");
  n += fix(d, 'night2_msg_generic_3', 'text', "...Tu as fini ce livre ?");
  // 성별 수정 ils→elles
  n += fix(d, 'night2_end_2', 'text', "*Le deuxième jour est terminé. Le premier jour, c'était de la curiosité. Je me demandais quel genre de personnes elles étaient. Aujourd'hui — c'est un peu différent. Pas curieux. Elles me restent en tête. Ce qu'elles font, ce qu'elles diront demain.*");

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 3-1 MORNING
// ============================================================
console.log('\n=== day3_1_morning.json ===');
{
  const file = 'day3_1_morning.json';
  const d = loadJSON(file);
  let n = 0;

  n += fix(d, 'morning3_yuna_gate_warm_3', 'text', "*J'ai sorti le mot. 'Je t'attendais.'*");
  n += fix(d, 'morning3_yuna_gate_6_b', 'text', "*Le mot : Je me suis dit que tu n'avais pas pris de petit-déjeuner. Quelqu'un qui écrit un mot alors qu'il suffirait de le dire. — C'est tout Yuna.*");
  n += fix(d, 'morning3_react_yuna_1_b', 'text', "*Dain, sans détour. Revenue en classe.*");
  n += fix(d, 'morning3_date_dain_decline_narr', 'text', "*J'observe la réaction de Dain. La sonnerie retentit, puis revient ce court moment juste avant le déjeuner. Elle est repartie avec un grand sourire. — Je ne le savais pas encore. Que Dain avait arrêté de tapoter, qu'elle avait mis les mains dans ses poches. Que ça lui avait demandé du courage.*");
  // 선택지 수정
  if (d['morning3_date_yuna_choice'] && d['morning3_date_yuna_choice'].choices) {
    d['morning3_date_yuna_choice'].choices = ["Je hoche la tête", "Je secoue doucement la tête"];
    console.log('  [FIX] morning3_date_yuna_choice.choices');
    n++;
  }
  n += fix(d, 'hidden_homeroom_d3_reveal_2_e', 'text', "*En soupirant* ...Ce serait plus simple si on pouvait ne voir que ce qu'on veut voir.");
  n += fix(d, 'hidden_homeroom_d3_reveal_1_e', 'text', "Après la fac, j'ai préparé les sélections — j'ai échoué trois fois en deux ans.");
  n += fix(d, 'hidden_nurse_d3_choice1_b', 'text', "*En penchant légèrement la tête* ...D'accord. Si c'est compliqué, repose-toi un peu ici.");

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 3-2 LUNCH
// ============================================================
console.log('\n=== day3_2_lunch.json ===');
{
  const file = 'day3_2_lunch.json';
  const d = loadJSON(file);
  let n = 0;

  n += fix(d, 'lunch3_expose_1', 'text', "*C'est à ce moment-là — Dain a parlé la première.*");
  n += fix(d, 'lunch3_expose_7_b', 'text', "*La dernière pose les siens en silence. Yuna pose son pain.*");
  n += fix(d, 'lunch3_dain_skin_1', 'text', "*Dain gagne le pari du déjeuner et ouvre grand les bras. Elle me serre. Une seconde. Dain recule d'un bond comme si elle avait été repoussée. Elle attrape sa bouteille d'eau pour se donner une contenance.*");
  n += fix(d, 'lunch3_faithful_msg_yuna_2_b', 'text', "*Parce que tant que la fin n'est pas écrite, l'histoire ne se termine pas. — Moi aussi, je ressens la même chose.*");

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 3-3 AFTERSCHOOL
// ============================================================
console.log('\n=== day3_3_afterschool.json ===');
{
  const file = 'day3_3_afterschool.json';
  const d = loadJSON(file);
  let n = 0;

  // 선택지 완전 왜곡 수정
  if (d['after3_dain_choice'] && d['after3_dain_choice'].choices) {
    d['after3_dain_choice'].choices = ["...Ça va ? Ne force pas. Tu devrais te reposer aujourd'hui.", "Hé, un service de plus. Si je le rate, t'as gagné."];
    console.log('  [FIX] after3_dain_choice.choices');
    n++;
  }
  n += fix(d, 'after3_confront_6', 'text', "Ce bazar au déjeuner... Tu pensais à quoi en prenant rendez-vous avec nous trois ?");

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 3-4 NIGHT
// ============================================================
console.log('\n=== day3_4_night.json ===');
{
  const file = 'day3_4_night.json';
  const d = loadJSON(file);
  let n = 0;

  n += fix(d, 'night3_cheat_msg_4_b', 'text', "*J'aimerais juste que tu comprennes le poids du choix de la personne à côté de qui tu vas te tenir.*");
  n += fix(d, 'night3_faithful_reflect_2_b', 'text', "*'Supprimer cette photo ?' Mon doigt s'arrête au-dessus du bouton de confirmation.*");
  n += fix(d, 'night3_faithful_reflect_2_d', 'text', "*...Oui. C'est à moi d'abord de dire non à mon passé. — Supprimé.*");
  n += fix(d, 'night3_faithful_reflect_4_b', 'text', "*Effacer la photo, c'était facile. Un seul doigt suffisait. — Les sentiments, ça prend plus de temps. Mais quand même. Ce qui est effacé — ouvre la voie pour la suite.*");

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 4-1 MORNING
// ============================================================
console.log('\n=== day4_1_morning.json ===');
{
  const file = 'day4_1_morning.json';
  const d = loadJSON(file);
  let n = 0;

  n += fix(d, 'hidden_homeroom_d4_1', 'text', "*Le portail du lycée est entrouvert. Il y a un bruit à l'intérieur. — La personne qui en sort. C'est ma prof principale. Elle s'approche. — Vue de loin, elle marche si normalement qu'on ne dirait pas la même personne qui s'était mise en colère.*");
  n += fix(d, 'hidden_homeroom_d4_1_b', 'text', "*Elle devait être en colère — mais elle est quand même venue. Je ne dois pas fuir devant cette personne.*");
  n += fix(d, 'hidden_homeroom_d4_cafe_2', 'text', "...Un peu. Après que tu l'aies vu hier — bizarrement, j'ai pu écrire un peu plus.");
  n += fix(d, 'hidden_nurse_d4_morning_1', 'text', d['hidden_nurse_d4_morning_1'] ? d['hidden_nurse_d4_morning_1'].text.replace('Matin de dimanche', 'Matin de week-end') : '');
  n += fix(d, 'hidden_nurse_d4_meal_3_b', 'text', "*L'espièglerie a disparu. — Quand je vois cette expression, mon cœur se serre.*");

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 4-2 LUNCH
// ============================================================
console.log('\n=== day4_2_lunch.json ===');
{
  const file = 'day4_2_lunch.json';
  const d = loadJSON(file);
  let n = 0;

  n += fix(d, 'date_seo_1', 'text', "*Devant la fontaine. Seoyeon est là. Elle était arrivée avant moi. On dirait quelqu'un d'autre. Non — c'est la même personne, mais une autre facette.*");
  n += fix(d, 'date_seo_duck_4', 'text', "*Ça semble anodin — mais l'expérience de Seoyeon transparaît dans ces mots. On passe devant un fleuriste.*");
  n += fix(d, 'date_seo_flower_2', 'text', "*Seoyeon pousse la porte du fleuriste. Une clochette tinte. Seoyeon choisit un petit pot. Une succulente.*");
  n += fix(d, 'date_seo_end', 'text', "*Ce que Seoyeon m'a offert. — Mes mains tremblent en le recevant.*");
  n += fix(d, 'date_yuna_1', 'text', "*Devant le café. Yuna est adossée au mur. Une robe noire et un petit sac bandoulière. Yuna ressemblait à ça ? — C'est la première fois que je la vois sans uniforme.*");
  n += fix(d, 'date_yuna_bright', 'text', "...Qu'est-ce qui est différent.");
  n += fix(d, 'date_dain_knee_2', 'text', "*On est sortis de la salle d'arcade dans la rue. On passe devant un magasin de sport. Dain s'arrête devant la vitrine. Des chaussures de volley y sont exposées.*");

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 4-3 AFTERSCHOOL
// ============================================================
console.log('\n=== day4_3_afterschool.json ===');
{
  const file = 'day4_3_afterschool.json';
  const d = loadJSON(file);
  let n = 0;

  // 악센트 오타 수정
  if (d['confess_seo_choice'] && d['confess_seo_choice'].choices) {
    const idx = d['confess_seo_choice'].choices.findIndex(c => c.includes('agreable'));
    if (idx >= 0) {
      d['confess_seo_choice'].choices[idx] = d['confess_seo_choice'].choices[idx].replace('agreable', 'agréable');
      console.log('  [FIX] confess_seo_choice.choices accent');
      n++;
    }
  }
  n += fix(d, 'confess_seo_no_1', 'text', "...Le vent est agréable.");
  n += fix(d, 'confess_dain_yes_4', 'text', "*Ce n'est pas une déclaration à pierre-feuille-ciseaux. Mais pour moi, c'est tout.*");
  // 인코딩 깨짐 수정
  if (d['confess_dain_yes_5'] && d['confess_dain_yes_5'].text.includes('?a')) {
    n += fix(d, 'confess_dain_yes_5', 'text', "C'est pour ça que je finis toujours par aller vers toi.");
  }
  n += fix(d, 'confess_yuna_yes_5', 'text', "Tu étais — le genre de personne qui s'assoit à côté de quelqu'un au lieu de parler. Ce silence était plus chaleureux que n'importe quels mots.");

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 4-4 NIGHT
// ============================================================
console.log('\n=== day4_4_night.json ===');
{
  const file = 'day4_4_night.json';
  const d = loadJSON(file);
  let n = 0;

  n += fix(d, 'wall_seo_skin70_1', 'text', "*Seoyeon tend son petit doigt d'abord. Elle ne s'arrête pas là. Elle prend ma main. Et pose ses lèvres sur mon front.*");
  n += fix(d, 'wall_seo_skin70_3', 'text', "...C'est la première fois. Vraiment.");
  // 선택지 수정
  if (d['wall_dain_choice'] && d['wall_dain_choice'].choices) {
    d['wall_dain_choice'].choices = ["...Je ne dirai rien. Je reste juste là.", "Tu peux pleurer. Tu n'as pas besoin de faire semblant d'être joyeuse. Pas devant moi."];
    console.log('  [FIX] wall_dain_choice.choices');
    n++;
  }
  n += fix(d, 'wall_dain_newdream_1', 'text', "*Je suis resté assis à côté d'elle. Sans un mot. Dain non plus ne dit rien. — Un moment étrange. C'est la première fois qu'un silence de plus d'une minute s'installe à côté de Dain.*");
  n += fix(d, 'wall_dain_8_b', 'text', "*Je fais la passe. Dain saute et — smash. À l'atterrissage — elle agrippe son genou droit et s'effondre sur place.*");
  n += fix(d, 'wall_dain_18_d', 'text', "*Serre et desserre les poings.* ...Alors.");
  n += fix(d, 'wall_yuna_skin70_3', 'text', "*La main de Yuna est plus chaude que je ne le pensais. — C'est tout.*");
  n += fix(d, 'wall_yuna_glimpse_4', 'text', "*Incapable de quitter l'arrière du lycée pendant un moment, je suis finalement rentré chez moi. Les mots que j'ai entendus aujourd'hui n'étaient pas légers. C'est pour ça qu'ils restent plus longtemps.*");
  n += fix(d, 'wall_yuna_reject_3', 'text', "*Yuna se retourne. Ses pas sont rapides. — Elle ne court pas vraiment, mais c'est la démarche de quelqu'un qui veut courir. C'était le pire choix. — J'entends le mur de Yuna se refermer.*");
  n += fix(d, 'day4_night_regret_msg', 'text', "*L'écran de mon téléphone s'allume. Une phrase courte — et c'est pour ça que ça fait encore plus mal.*");

  // 인코딩 깨짐 일괄 수정
  for (const key of Object.keys(d)) {
    if (typeof d[key].text === 'string' && d[key].text.includes('?')) {
      const orig = d[key].text;
      let fixed = orig
        .replace(/pr\?s/g, 'près')
        .replace(/arri\?re/g, 'arrière')
        .replace(/lyc\?e/g, 'lycée')
        .replace(/pr\?venir/g, 'prévenir')
        .replace(/derri\?re/g, 'derrière')
        .replace(/J'\?cris/g, "J'écris")
        .replace(/r\?ponse/g, 'réponse')
        .replace(/d\?j\?/g, 'déjà')
        .replace(/M\?me/g, 'Même')
        .replace(/apr\?s/g, 'après')
        .replace(/referm\?/g, 'refermé')
        .replace(/l\?vres/g, 'lèvres');
      if (fixed !== orig) {
        d[key].text = fixed;
        console.log(`  [FIX-ENCODING] ${key}`);
        n++;
      }
    }
  }

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 5-1 MORNING
// ============================================================
console.log('\n=== day5_1_morning.json ===');
{
  const file = 'day5_1_morning.json';
  const d = loadJSON(file);
  let n = 0;

  n += fix(d, 'morning5_start_b', 'text', "*Dès que j'entre dans la salle — des signaux me parviennent de trois directions. Dernier événement. Tout le temps passé jusqu'ici converge vers aujourd'hui.*");
  n += fix(d, 'morning5_committed_seo', 'text', "*Il n'y a pas de nouveau mot sur le bureau. À la place, le regard que Seoyeon m'a lancé hier sur le toit reste encore vif.*");
  n += fix(d, 'morning5_committed_yuna', 'text', "*Il n'y a pas de nouveau mot. À la place, il reste encore la façon dont Yuna a soutenu mon regard plus longtemps que d'habitude hier.*");
  n += fix(d, 'morning5_yuna_story_gone_2', 'text', "*La place vide à la bibliothèque, le marque-page disparu, et maintenant une nouvelle jamais affichée. — Yuna efface chaque trace. Le vide que j'ai laissé au Jour 3 est arrivé jusqu'ici.*");
  n += fix(d, 'morning5_dain_2', 'text', "Si tu essaies de filer, je vais vraiment me fâcher, hein ?");
  n += fix(d, 'hidden_homeroom_d5_check', 'text', "*Préparation de l'événement. En marchant dans le couloir — je passe devant la salle vide. La porte est ouverte.*");
  n += fix(d, 'hidden_homeroom_d5_6_p', 'text', "*Une seule ligne. — Quelqu'un qui s'est fait recaler trois fois attend l'impression en une ligne d'un élève. Si ce n'est pas une déclaration, qu'est-ce que c'est ? La prof sort de la classe et — s'arrête devant la porte.*");
  n += fix(d, 'hidden_homeroom_d5_correct_10', 'text', "...Un élève ?");
  n += fix(d, 'hidden_nurse_d5_1_f', 'text', "*De « viens après ton diplôme » à « viens si tu as mal » — elle a reculé. Elle a failli franchir la ligne et s'est ravisée. La porte s'ouvre. L'infirmière est debout. Deux gobelets en papier dans les mains.*");
  n += fix(d, 'hidden_nurse_d5_3_f', 'text', "*« Après ton diplôme. » — Les mêmes mots que la prof principale. Pas maintenant, mais un jour. Le jour où le titre disparaîtra.*");
  n += fix(d, 'hidden_nurse_d5_6_b', 'text', "*Sa réplique emblématique du Jour 1. — À l'époque, c'était une présentation. Maintenant, c'est sincère. L'infirmière sort un pansement et le colle sur le dos de ma main. Lentement. — De petits mots sont écrits sur le pansement.*");
  n += fix(d, 'hidden_nurse_d5_6_c', 'text', "*« Après ton diplôme, retrouvons-nous dans un café plutôt qu'à l'infirmerie — ♡ » Ce cœur, cette fois — ça ne ressemble pas à de l'intérêt médical.*");
  n += fix(d, 'hidden_nurse_d5_choice_b_b', 'text', "*Sa voix a baissé d'un ton. Toute espièglerie a disparu. — C'est toujours comme ça que la sincérité de cette personne arrive. L'infirmière rit, puis — s'arrête. Elle ferme la bouche.*");

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 5-2 LUNCH
// ============================================================
console.log('\n=== day5_2_lunch.json ===');
{
  const file = 'day5_2_lunch.json';
  const d = loadJSON(file);
  let n = 0;

  n += fix(d, 'tour_seo_12', 'text', "*La main qui tend la clé. Nos auriculaires se frôlent. — Elle ne dit jamais « je te le donne » en tendant les choses. Des actes plutôt que des mots. Depuis le début.*");
  n += fix(d, 'tour_yuna_1', 'text', "*L'annexe de la bibliothèque. Le coin lecture secret où je suis entré pour la première fois au Jour 2. Un vieux canapé, la lumière de l'après-midi filtrant par la fenêtre.*");
  n += fix(d, 'tour_yuna_2', 'text', "*Yuna s'assoit sur le canapé. Elle laisse la place à côté d'elle libre. — La même disposition qu'au Jour 2.*");
  n += fix(d, 'tour_yuna_3', 'text', "À chaque fois que je viens ici, j'ai l'impression que le temps ralentit un peu.");
  n += fix(d, 'tour_yuna_6', 'text', "*Yuna sort un cahier de son sac. Le même cahier qu'elle s'était fait surprendre avec au Jour 3.*");
  n += fix(d, 'tour_yuna_10', 'text', "*Elle me tend le cahier. Ses mains tremblent. — C'est la première fois que Yuna donne directement son écriture à quelqu'un.*");
  n += fix(d, 'tour_dain_1', 'text', "*Le gymnase. Là où on a fait notre premier pari au Jour 1, et où elle a frappé son dernier smash au Jour 4. — Aujourd'hui, les lumières sont allumées.*");
  n += fix(d, 'tour_dain_8', 'text', "*Elle râle tout en riant. — C'est ça, Dain. Quelqu'un qui s'amuse même en perdant. Dain pose le ballon sur le terrain. Lentement.*");
  n += fix(d, 'tour_dain_end_2', 'text', "*Elle le dit sans point d'exclamation. Mais cette fois, ce n'est pas un adieu — c'est un début. La même phrase sans exclamation qu'au Jour 4, mais la température est différente.*");

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 5-3 AFTERSCHOOL
// ============================================================
console.log('\n=== day5_3_afterschool.json ===');
{
  const file = 'day5_3_afterschool.json';
  const d = loadJSON(file);
  let n = 0;

  n += fix(d, 'after5_last_chance_2_b', 'text', "*J'ai failli fuir encore. Comme à mon ancien lycée. Le téléphone dans la poche, incapable de dire un mot — ce moment a failli revenir. — Non. Pas cette fois. Mes jambes bougent. Ma bouche s'ouvre d'elle-même. Pas de mots préparés. — Mon corps bouge le premier.*");
  n += fix(d, 'after5_last_chance_2_s', 'text', "Alors... dis-le. Cette fois, je t'écoute jusqu'au bout.");
  n += fix(d, 'after5_last_chance_2_r', 'text', "*Elle se frotte les yeux du poing. Elle rit, mais on dirait qu'elle va pleurer d'un instant à l'autre.*");
  n += fix(d, 'after5_confess_no_2', 'text', "*La brise du soir souffle. L'ombre derrière moi s'allonge. — Je suis debout, les mains vides.*");

  // 인코딩 깨짐 일괄 수정
  for (const key of Object.keys(d)) {
    if (typeof d[key].text === 'string') {
      const orig = d[key].text;
      let fixed = orig
        .replace(/quitte(?=[^éè])/g, 'quitté')
        .replace(/arriere/g, 'arrière')
        .replace(/ecole/g, 'école')
        .replace(/marche(?= un)/g, 'marché')
        .replace(/meme/g, 'même')
        .replace(/forcee/g, 'forcée')
        .replace(/diriges/g, 'dirigés')
        .replace(/menes/g, 'menés');
      if (fixed !== orig) {
        d[key].text = fixed;
        console.log(`  [FIX-ENCODING] ${key}`);
        n++;
      }
    }
  }

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

// ============================================================
// DAY 5-4 NIGHT
// ============================================================
console.log('\n=== day5_4_night.json ===');
{
  const file = 'day5_4_night.json';
  const d = loadJSON(file);
  let n = 0;

  n += fix(d, 'perfect_seo_1', 'text', "*Le toit de Seoyeon. Je me tiens parmi les plantes qu'elle a cultivées elle-même.*");
  n += fix(d, 'perfect_seo_1_b', 'text', "*Elle pleure encore. Pas dans les toilettes — cette fois, devant moi.*");
  n += fix(d, 'perfect_epilogue_1_dain', 'text', "*Le genou de Dain cède à l'atterrissage du saut. Je sais que ça fait mal. Et pourtant — elle sourit.*");
  n += fix(d, 'hidden_true_homeroom_5', 'text', "*Regardant par la fenêtre* ...Alors. Puisque je l'ai terminé, je pensais l'envoyer à un éditeur. — Qu'est-ce que tu en penses ?");
  n += fix(d, 'hidden_true_nurse_5_d', 'text', "Mais toi, tu as tout de même reconnu quand j'essayais d'éluder les choses. Même le cahier vert.");
  n += fix(d, 'hidden_true_nurse_8_b', 'text', "*Faisant tourner sa tasse de café* ...Je ne pensais pas que l'odeur de l'infirmerie me manquerait après le diplôme.");
  n += fix(d, 'hidden_true_nurse_8_e', 'text', "Tu sais. À ce moment-là, j'hésitais à démissionner.");
  n += fix(d, 'hidden_true_nurse_8_g', 'text', "Mais tu es arrivé et — j'ai eu une raison de rester ici. *Souriant doucement* Merci.");
  n += fix(d, 'hidden_perfect_nurse_ep4', 'text', "*Le cahier vert a disparu au fond du tiroir. Sur la dernière page, pas une lettre — juste une ligne. « Yujin, ça va maintenant. » — Un point final après trois ans.*");
  n += fix(d, 'hidden_good_nurse_4', 'text', "*Ma main s'arrête sur la bouteille. Le cahier vert dans le tiroir de l'infirmerie me revient. J'espère qu'un jour, c'est elle qui pourra fermer la dernière page de cette lettre.*");
  n += fix(d, 'hidden_good_homeroom_ending_title', 'text', "─── Professeure principale GOOD END ───");
  n += fix(d, 'alone_2_b', 'text', "*La chambre est étrangement silencieuse. Les voix qui résonnaient encore à mes oreilles s'éloignent avec le bruit de la porte qui se ferme. Les cerisiers tombent derrière la fenêtre. Les mêmes qui frôlaient mon nez il y a cinq jours se dispersent maintenant dans le vent.*");

  // GOOD END 에필로그 — 서연
  n += fix(d, 'good_epilogue_1', 'text', "*Un message de Seoyeon. 'J'ai fait un double de la clé du toit. — C'est une autorisation, une autorisation.' Il suffisait de dire que c'était une invitation.*");
  n += fix(d, 'good_epilogue_2', 'text', "*Jusqu'au bout, elle fait semblant d'être décontractée — et exprime ses sentiments en donnant une clé.*");
  n += fix(d, 'good_epilogue_3', 'text', "*J'ai glissé la clé dans ma poche. Demain sur le toit — cette fois, c'est à moi d'apporter le déjeuner.*");

  // GOOD END 에필로그 — 유나
  n += fix(d, 'good_epilogue_1_yuna', 'text', "*Un mot plié sort de mon sac. Je ne sais pas quand elle l'a glissé dedans. « Si tu as fini le tome 1, je te prêterai le tome 2. — Yuna »*");
  n += fix(d, 'good_epilogue_2_yuna', 'text', "*Yuna prépare la suite au lieu de parler. Après le tome 1, le tome 2. Après aujourd'hui, demain. C'est sa façon de dire « continuons à se voir ».*");
  n += fix(d, 'good_epilogue_3_yuna', 'text', "*Au dos du mot, en petit. « ...Lisons la fin ensemble. » L'encre violet pâle a coulé.*");

  // GOOD END 에필로그 — 다인
  n += fix(d, 'good_epilogue_1_dain', 'text', "*Un message de Dain. « Quelqu'un pour du sport demain matin ? » Un point d'interrogation à la fin. D'habitude, ça aurait été un point d'exclamation.*");
  n += fix(d, 'good_epilogue_2_dain', 'text', "*Pour la première fois, elle a craint d'être refusée. Quand Dain utilise un point d'interrogation — c'est du courage.*");
  n += fix(d, 'good_epilogue_3_dain', 'text', "*J'ai répondu. « Deal. » Pas de point d'exclamation. Parce que demain, j'irai en courant moi-même.*");

  // 하렘 엔딩
  n += fix(d, 'harem_4', 'text', "*Lundi, Seoyeon. Mercredi, Yuna. Vendredi, Dain. Le calendrier de mon téléphone est un champ de mines. Un mauvais prénom le mauvais jour, et tout s'effondre.*");
  n += fix(d, 'harem_7', 'text', "*Trois alarmes, trois personnages, trois mensonges. — Pour appeler ça du bonheur, les crampes d'estomac sont bien trop fréquentes.*");

  // 인코딩 깨짐 일괄 수정
  for (const key of Object.keys(d)) {
    if (typeof d[key].text === 'string' && d[key].text.includes('?')) {
      const orig = d[key].text;
      let fixed = orig
        .replace(/M\?me/g, 'Même')
        .replace(/apr\?s/g, 'après')
        .replace(/referm\?/g, 'refermé')
        .replace(/l\?vres/g, 'lèvres')
        .replace(/pr\?s/g, 'près')
        .replace(/arri\?re/g, 'arrière')
        .replace(/lyc\?e/g, 'lycée')
        .replace(/\?cris/g, 'écris')
        .replace(/r\?ponse/g, 'réponse')
        .replace(/d\?j\?/g, 'déjà');
      if (fixed !== orig) {
        d[key].text = fixed;
        console.log(`  [FIX-ENCODING] ${key}`);
        n++;
      }
    }
  }

  if (n > 0) saveJSON(file, d);
  totalFixes += n;
}

console.log(`\n✅ 총 ${totalFixes}건 수정 완료`);
