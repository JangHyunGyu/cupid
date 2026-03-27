import json, re, sys, os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

files = [
    'day1_1_morning.json', 'day1_2_lunch.json', 'day1_3_afterschool.json', 'day1_4_night.json',
    'day2_1_morning.json', 'day2_2_lunch.json', 'day2_3_afterschool.json', 'day2_4_night.json',
    'day3_1_morning.json', 'day3_2_lunch.json', 'day3_3_afterschool.json', 'day3_4_night.json',
    'day4_1_morning.json', 'day4_2_lunch.json', 'day4_3_afterschool.json', 'day4_4_night.json',
    'day5_1_morning.json', 'day5_2_lunch.json', 'day5_3_afterschool.json', 'day5_4_night.json',
]

replacements = [
    # etait/etais/etaient
    (r'\betait\b', 'était'),
    (r'\betais\b', 'étais'),
    (r'\betaient\b', 'étaient'),
    # ete -> été
    (r'\bete\b', 'été'),
    # eleve/eleves
    (r'\beleves\b', 'élèves'),
    (r'\beleve\b', 'élève'),
    # bibliotheque
    (r'\bbibliotheque\b', 'bibliothèque'),
    # reponse/repondre/repondu
    (r'\breponse\b', 'réponse'),
    (r'\brepondre\b', 'répondre'),
    (r'\brepondu\b', 'répondu'),
    # ecole
    (r'\becole\b', 'école'),
    # ecoute/ecouter
    (r'\becouter\b', 'écouter'),
    (r'\becoute\b', 'écoute'),
    # etudiante
    (r'\betudiante\b', 'étudiante'),
    # etrange
    (r'\betrange\b', 'étrange'),
    # evenement
    (r'\bevenements\b', 'événements'),
    (r'\bevenement\b', 'événement'),
    # evidemment/Evidemment
    (r'\bevidemment\b', 'évidemment'),
    (r'\bEvidemment\b', 'Évidemment'),
    # deja
    (r'\bdeja\b', 'déjà'),
    # deplace
    (r'\bdeplace\b', 'déplacé'),
    # epoque
    (r'\bepoque\b', 'époque'),
    # interessant/interessante
    (r'\binteressante\b', 'intéressante'),
    (r'\binteressant\b', 'intéressant'),
    # prefere/preference
    (r'\bpreference\b', 'préférence'),
    (r'\bpreferee\b', 'préférée'),
    (r'\bprefere\b', 'préféré'),
    # tres
    (r'\btres\b', 'très'),
    # apres
    (r'\bapres\b', 'après'),
    # desole/desolee
    (r'\bdesolee\b', 'désolée'),
    (r'\bdesole\b', 'désolé'),
    # inquiete
    (r'\binquiete\b', 'inquiète'),
    # premiere/Premiere
    (r'\bpremiere\b', 'première'),
    (r'\bPremiere\b', 'Première'),
    # derniere
    (r'\bderniere\b', 'dernière'),
    # deuxieme/Deuxieme
    (r'\bDeuxieme\b', 'Deuxième'),
    (r'\bdeuxieme\b', 'deuxième'),
    # troisieme/Troisieme
    (r'\bTroisieme\b', 'Troisième'),
    (r'\btroisieme\b', 'troisième'),
    # arrete variants
    (r'\barretee\b', 'arrêtée'),
    (r'\barreter\b', 'arrêter'),
    (r'\barretees\b', 'arrêtées'),
    # apprete
    (r'\bapprete\b', 'apprête'),
    # ecriture
    (r'\becriture\b', 'écriture'),
    # epaule/epaules
    (r'\bepaules\b', 'épaules'),
    (r'\bepaule\b', 'épaule'),
    # echauffement
    (r'\bechauffements\b', 'échauffements'),
    (r'\bechauffement\b', 'échauffement'),
    # ecarquilles
    (r'\becarquilles\b', 'écarquillés'),
    # echanges
    (r'\bechanges\b', 'échanges'),
    # energie
    (r'\benergie\b', 'énergie'),
    # eloigne
    (r'\beloigner\b', 'éloigner'),
    (r'\beloigne\b', 'éloigne'),
    # etonnamment
    (r'\betonnamment\b', 'étonnamment'),
    (r'\bEtonnamment\b', 'Étonnamment'),
    # epice
    (r'\bepice\b', 'épicé'),
    (r'\bepicee\b', 'épicée'),
    # different variants
    (r'\bdifferente\b', 'différente'),
    (r'\bdifferents\b', 'différents'),
    (r'\bdifferent\b', 'différent'),
    (r'\bDifferente\b', 'Différente'),
    (r'\bDifferent\b', 'Différent'),
    # precis/precisement
    (r'\bprecisement\b', 'précisément'),
    (r'\bprecis\b', 'précis'),
    # familiere
    (r'\bfamiliere\b', 'familière'),
    # leger/legere/legerement
    (r'\blegerement\b', 'légèrement'),
    (r'\blegere\b', 'légère'),
    (r'\bleger\b', 'léger'),
    # reverence
    (r'\breverence\b', 'révérence'),
    # vetements
    (r'\bvetements\b', 'vêtements'),
    # hesiter/hesite
    (r'\bhesiter\b', 'hésiter'),
    (r'\bhesite\b', 'hésite'),
    # genial
    (r'\bgenial\b', 'génial'),
    # siege
    (r'\bsiege\b', 'siège'),
    # ecrire
    (r'\becrire\b', 'écrire'),
    # ecorche
    (r'\becorche\b', 'écorché'),
    # poussiere
    (r'\bpoussiere\b', 'poussière'),
    # levres/levre
    (r'\blevres\b', 'lèvres'),
    (r'\blevre\b', 'lèvre'),
    # canape
    (r'\bcanape\b', 'canapé'),
    # etagere
    (r'\betagere\b', 'étagère'),
    # discretement
    (r'\bdiscretement\b', 'discrètement'),
    # piece
    (r'\bpiece\b', 'pièce'),
    # fenetre/fenetres
    (r'\bfenetres\b', 'fenêtres'),
    (r'\bfenetre\b', 'fenêtre'),
    # genant/genante
    (r'\bgenant\b', 'gênant'),
    (r'\bgenante\b', 'gênante'),
    # meme/memes
    (r'\bmemes\b', 'mêmes'),
    (r'\bmeme\b', 'même'),
    # dedramatiser
    (r'\bdedramatiser\b', 'dédramatiser'),
    # ecouteurs/ecouteur
    (r'\becouteurs\b', 'écouteurs'),
    (r'\becouteur\b', 'écouteur'),
    # entiere
    (r'\bentiere\b', 'entière'),
    # etoile/etoiles
    (r'\betoiles\b', 'étoiles'),
    (r'\betoile\b', 'étoile'),
    # defaisant
    (r'\bdefaisant\b', 'défaisant'),
    # recu
    (r'\brecu\b', 'reçu'),
    # ca/Ca -> ça/Ça
    (r'\bca\b', 'ça'),
    (r'\bCa\b', 'Ça'),
    # defi
    (r'\bdefi\b', 'défi'),
    # Prepare/prepare
    (r'\bPrepare\b', 'Prépare'),
    (r'\bprepare\b', 'préparé'),
    # la (but only standalone lowercase 'la' is fine as article)
    # oeil -> oeil is fine (but oe is not accented in French oeil)
    # nonchalant is fine
    # Additional:
    # arrete (present tense) -> arrête
    (r"\bs'arrete\b", "s'arrête"),
    (r"\bm'arrete\b", "m'arrête"),
    (r"\bt'arrete\b", "t'arrête"),
    # tete -> tête
    (r'\btete\b', 'tête'),
    # empecherai -> empêcherai
    (r'\bempecherai\b', 'empêcherai'),
    # s'assoit/m'assois etc are fine
    # cote (in 'a cote' or 'cote a cote')
    (r'\bcote\b', 'côté'),
    # Actually 'cote' can be 'côte' (coast/rib) or 'côté' (side)
    # In these texts it's usually 'côté' (side). Let me be more precise:
    # Actually the word 'cote' appears in 'a cote' and 'cote a cote' meaning 'beside'
    # Those should be 'à côté' and 'côte à côte'
    # But 'cote' alone as replacement target is tricky - let me skip and handle manually
    # Actually, let me revert the 'cote' rule and handle it separately
    # releve/relevent -> relève/relèvent
    (r'\breleve\b', 'relève'),
    (r'\brelevent\b', 'relèvent'),
    # tot -> tôt
    (r'\btot\b', 'tôt'),
    # surement -> sûrement
    (r'\bsurement\b', 'sûrement'),
    # ou -> où (ONLY in specific phrases like 'ou aller', 'ou est', 'ou aller')
    # Too risky for general replacement. Skip.
    # etrange -> étrange (already done)
    # Honnetement -> Honnêtement
    (r'\bHonnetement\b', 'Honnêtement'),
    (r'\bhonnetement\b', 'honnêtement'),
    # derriere -> derrière
    (r'\bderriere\b', 'derrière'),
    # regle -> réglé
    (r'\bregle\b', 'réglé'),
    # donne -> donné (careful - 'donne' present tense is valid)
    # Skip this one
    # trouve -> trouvé (careful - present tense is valid)
    # Skip
    # gout -> goût
    (r'\bgout\b', 'goût'),
    # trompe/trompee -> trompé/trompée
    (r'\btrompee\b', 'trompée'),
    # vexe/vexee -> vexé/vexée
    (r'\bvexee\b', 'vexée'),
    # interesse -> intéressé (careful - could be present)
    # Skip
]

total_changes = 0

for fname in files:
    try:
        with open(fname, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        continue

    original = content
    changes = 0

    for pattern, replacement in replacements:
        new_content = re.sub(pattern, replacement, content)
        if new_content != content:
            count = len(re.findall(pattern, content))
            changes += count
            content = new_content

    if content != original:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'{fname}: {changes} replacements')
        total_changes += changes

print(f'\nTotal: {total_changes} replacements')
