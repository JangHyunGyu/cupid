import re, sys, os
sys.stdout.reconfigure(encoding='utf-8')
os.chdir(os.path.dirname(os.path.abspath(__file__)))

files = [
    'day1_1_morning.json', 'day1_2_lunch.json', 'day1_3_afterschool.json', 'day1_4_night.json',
    'day2_1_morning.json', 'day2_2_lunch.json', 'day2_3_afterschool.json', 'day2_4_night.json',
    'day3_1_morning.json', 'day3_2_lunch.json', 'day3_3_afterschool.json', 'day3_4_night.json',
    'day4_1_morning.json', 'day4_2_lunch.json', 'day4_3_afterschool.json', 'day4_4_night.json',
    'day5_1_morning.json', 'day5_2_lunch.json', 'day5_3_afterschool.json', 'day5_4_night.json',
]

total = 0

for fname in files:
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content

    # "coup d'oeil" -> "coup d'œil"
    content = content.replace("coup d'oeil", "coup d'œil")

    # "s'interesse" -> "s'intéresse"
    content = content.replace("s'interesse", "s'intéresse")

    # "clairement tourne" -> "clairement tourné"
    content = content.replace("clairement tourne", "clairement tourné")

    # "t'ai trouve" -> "t'ai trouvé"
    content = content.replace("t'ai trouve", "t'ai trouvé")

    # "allonge sur le lit" -> "allongé sur le lit"
    content = content.replace("allonge sur le lit", "allongé sur le lit")

    # "Douche prise, allonge" -> "Douche prise, allongé"  (already covered above)

    # Remaining 'a' that should be 'à' in specific contexts
    # "a pleuvoir" -> "à pleuvoir"
    content = content.replace("se mettent a pleuvoir", "se mettent à pleuvoir")

    # "A peu pres" -> "À peu près"
    content = content.replace("A peu pres", "À peu près")

    # Fix remaining "ou" -> "où" in specific contexts
    # "le couloir ou Seoyeon" -> already fixed
    # "endroit ou" -> already fixed

    # "pas arretee" -> "pas arrêtée" - already fixed by arretee rule
    # "s'est arretee" -> already covered

    # Fix "pres" -> "près" (near) - careful, standalone only
    content = re.sub(r'\bpres\b', 'près', content)

    # Fix "s'apprete" -> "s'apprête" (already handled by apprete rule, but check)
    # "enleve" in "Elle enleve" -> "Elle enlève" - already handled

    # "soignee" should already be fixed
    # "journee" -> "journée" should already be fixed

    # Fix specific remaining patterns in day2 files:
    # "se mettent a" -> "se mettent à" (already done above)

    # "s'assoit a" -> no, this is wrong (s'asseoir à is correct but 'a' here is preposition 'à')
    # Let's handle "m'asseoir a côté" -> "m'asseoir à côté" (already should be fixed)

    # "a midi" should already be "à midi"
    # Let's double check "Viens a" -> "Viens à"
    content = re.sub(r'\bViens a\b', 'Viens à', content)

    # "passe a" -> "passe à" (in "passe à la")
    content = re.sub(r'\bpasse a\b', 'passe à', content)
    content = re.sub(r'\bPasse a\b', 'Passe à', content)

    # Fix: "A la boutique" -> "À la boutique" (capital A at start)
    content = re.sub(r'\bA la boutique\b', 'À la boutique', content)
    content = re.sub(r'\bA la salle\b', 'À la salle', content)

    # "s'asseoir a" -> "s'asseoir à"
    content = content.replace("s'asseoir a", "s'asseoir à")
    content = content.replace("m'asseoir a", "m'asseoir à")
    content = content.replace("m'assois a", "m'assois à")

    # "reveil" -> "réveil"
    content = re.sub(r'\breveil\b', 'réveil', content)

    # "telephone" -> "téléphone"
    content = re.sub(r'\btelephone\b', 'téléphone', content)

    # "serieux" -> "sérieux"
    content = re.sub(r'\bserieux\b', 'sérieux', content)

    # "derriere" -> "derrière" (should already be handled)
    # "batiment" -> "bâtiment"
    content = re.sub(r'\bbatiment\b', 'bâtiment', content)

    # "dehors" is correct (no accent needed)

    # "trompee" -> "trompée" (should be handled)
    # "choquee" -> "choquée"
    content = re.sub(r'\bchoquee\b', 'choquée', content)

    # "s'eloigne" -> "s'éloigne" (should be handled by eloigne rule)
    # "elevee" -> "élevée"
    # "espece" -> "espèce"
    content = re.sub(r'\bespece\b', 'espèce', content)

    # "s'interessait" -> no, this is wrong form, skip

    # "cle" -> "clé"
    content = re.sub(r'\bcle\b', 'clé', content)

    # "dejeuner" -> "déjeuner"
    content = re.sub(r'\bdejeuner\b', 'déjeuner', content)

    # "deplace" already handled

    # "Ou aller" -> "Où aller"
    content = re.sub(r'"\\*Ou aller', '"*Où aller', content)

    if content != original:
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'{fname}: modified')
        total += 1

print(f'\nFiles modified: {total}')
