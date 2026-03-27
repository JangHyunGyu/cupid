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

    # Fix "côté a côté" -> "côte à côte" (side by side)
    content = content.replace('côté a côté', 'côte à côte')
    content = content.replace('Côté a côté', 'Côte à côte')

    # Fix "a côté" -> "à côté" (next to)
    content = re.sub(r'\ba côté\b', 'à côté', content)

    # Fix remaining 'a' -> 'à' in specific phrases common in these files
    # "a midi" -> "à midi"
    content = re.sub(r'\ba midi\b', 'à midi', content)
    # "a 8h" -> "à 8h"
    content = re.sub(r'\ba 8h\b', 'à 8h', content)
    # "a peine" -> "à peine"
    content = re.sub(r'\ba peine\b', 'à peine', content)
    # "a l'" -> "à l'" (before article)
    content = re.sub(r"\ba l'", "à l'", content)
    # "a la " -> "à la " (before feminine article)
    content = re.sub(r'\ba la \b', 'à la ', content)
    # "a sa" -> "à sa"
    content = re.sub(r'\ba sa\b', 'à sa', content)
    # "a ce" -> "à ce"
    content = re.sub(r'\ba ce\b', 'à ce', content)
    # "a cote" should not appear anymore after côté replacement
    # "a un" -> context dependent, skip

    # Fix "ou" -> "où" in specific phrases (where)
    # "ou aller" -> "où aller"
    content = re.sub(r'\bou aller\b', 'où aller', content)
    # "ou est" -> "où est"
    content = re.sub(r'\bou est\b', 'où est', content)
    # "Ou aller" -> "Où aller"
    content = re.sub(r'\bOu aller\b', 'Où aller', content)
    # "ou Seoyeon" -> "où Seoyeon" (in context 'le couloir ou Seoyeon')
    content = re.sub(r'\bou Seoyeon\b', 'où Seoyeon', content)

    # Fix remaining words that the first script missed:
    # "plie" -> "plié" (folded, past participle)
    content = re.sub(r'\bplie\b', 'plié', content)
    # "soignee" -> "soignée"
    content = re.sub(r'\bsoignee\b', 'soignée', content)
    # "oeil" -> "œil" (eye) - actually in French it's 'œil' but let's keep as-is
    # "presidente" -> "présidente"
    content = re.sub(r'\bpresidente\b', 'présidente', content)
    # "arrete" -> "arrête" (when standalone verb)
    # Already handled by s'arrete, but standalone 'arrete':
    content = re.sub(r"\barrete\b", "arrête", content)
    # "ne s'est pas arretee" - arretee already handled
    # "tourne" -> "tourné" (past participle context) - risky, skip
    # "etes" -> "êtes"
    content = re.sub(r'\betes\b', 'êtes', content)
    # "journee" -> "journée"
    content = re.sub(r'\bjournee\b', 'journée', content)
    # "annee" -> "année"
    content = re.sub(r'\bannee\b', 'année', content)
    # "arrive" -> "arrivé" (past part) - too risky, present tense is valid
    # "trouve" -> "trouvé" - too risky
    # "enleve" -> "enlève" (present tense)
    content = re.sub(r'\benleve\b', 'enlève', content)
    # "lumiere" -> "lumière"
    content = re.sub(r'\blumiere\b', 'lumière', content)
    # "maniere" -> "manière"
    content = re.sub(r'\bmaniere\b', 'manière', content)
    # "ou ce" -> "où ce"
    content = re.sub(r'\bou ce\b', 'où ce', content)
    # "ou personne" -> "où personne"
    content = re.sub(r'\bou personne\b', 'où personne', content)
    # "la" as standalone should stay "la" (article) in most cases
    # Specific: "T'es la" -> "T'es là"
    content = re.sub(r"T'es la\b", "T'es là", content)
    content = re.sub(r"t'es la\b", "t'es là", content)
    # "suis la" -> "suis là"
    content = re.sub(r'\bsuis la\b(?![ ])', 'suis là', content)
    # Actually "suis la" could be "I am here" (là) or "I follow the" (la)
    # Let's be careful and only match "je suis la" at end or before punctuation
    # "est la" -> depends on context, skip
    # "Etes la" -> skip
    # "chez la" -> correct as is (at the)
    # "c'est la" -> could be "it's the" or "it's there"

    # "Ou" -> "Où" (at start of question)
    content = re.sub(r'"Ou\b', '"Où', content)
    # "*Ou " -> "*Où "
    content = re.sub(r'\*Ou ', '*Où ', content)

    # Handle remaining specific missed patterns
    # "la presidente" -> "la présidente" (already fixed by presidente rule)
    # "interesse" -> can be present tense, skip
    # "ou" in mid-sentence "endroit ou" -> "endroit où"
    content = re.sub(r'\bendroit ou\b', 'endroit où', content)
    content = re.sub(r'\bmonde ou\b', 'monde où', content)
    content = re.sub(r'\bmoment ou\b', 'moment où', content)
    content = re.sub(r'\bjour ou\b', 'jour où', content)
    content = re.sub(r'\bcouloir ou\b', 'couloir où', content)
    # "He " -> "Hé " (interjection)
    content = re.sub(r'\bHe\b(?= !)', 'Hé', content)
    content = re.sub(r'\bHe\b(?=,)', 'Hé', content)

    if content != original:
        changes = sum(1 for a, b in zip(original, content) if a != b)
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'{fname}: modified ({changes} char changes)')
        total += 1

print(f'\nFiles modified: {total}')
