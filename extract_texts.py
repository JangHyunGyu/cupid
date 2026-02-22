import re
import json

def extract_from_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    texts = set()
    # Simple approach: find "text": "..." inside "es": { ... } blocks
    # Since es blocks were copied from en, find all text values
    pattern = r'"es": \{[^}]*?"text":\s*"((?:[^"\\]|\\.)*)"'
    for m in re.finditer(pattern, content):
        texts.add(m.group(1))

    choices = set()
    cpat = r'"es": \{[^}]*?"choices":\s*\[(.*?)\]'
    for m in re.finditer(cpat, content, re.DOTALL):
        for cm in re.finditer(r'"((?:[^"\\]|\\.)*)"', m.group(1)):
            choices.add(cm.group(1))

    return texts, choices

t1, c1 = extract_from_file('C:/workspace/cupid/assets/js/scenario/day1_1_morning.js')
t2, c2 = extract_from_file('C:/workspace/cupid/assets/js/scenario/day1_2_lunch.js')
all_texts = sorted(t1 | t2)
all_choices = sorted(c1 | c2)
print(f'Unique texts: {len(all_texts)}')
print(f'Unique choices: {len(all_choices)}')
print(f'Total: {len(all_texts) + len(all_choices)}')
