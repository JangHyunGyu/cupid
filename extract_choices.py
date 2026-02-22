import re, json

def extract_en_choices(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    choices = []
    pos = 0
    while True:
        idx = content.find('"en": {', pos)
        if idx == -1:
            break
        # Find closing brace
        brace = 0
        end = idx + 6
        for k in range(idx + 6, len(content)):
            if content[k] == '{':
                brace += 1
            if content[k] == '}':
                if brace == 0:
                    end = k + 1
                    break
                brace -= 1
        block = content[idx:end]

        # Extract choices array
        ch_match = re.search(r'"choices":\s*\[(.*?)\]', block, re.DOTALL)
        if ch_match:
            choice_str = ch_match.group(1)
            for cm in re.finditer(r'"((?:[^"\\]|\\.)*)"', choice_str):
                choices.append(cm.group(1))

        pos = idx + 7

    return choices

f1 = 'C:/workspace/cupid/assets/js/scenario/day1_1_morning.js'
f2 = 'C:/workspace/cupid/assets/js/scenario/day1_2_lunch.js'

c1 = extract_en_choices(f1)
c2 = extract_en_choices(f2)

print(f"File 1 choices: {len(c1)}")
print(f"File 2 choices: {len(c2)}")

all_choices = sorted(set(c1 + c2))
print(f"Total unique: {len(all_choices)}")
print()
for i, c in enumerate(all_choices):
    print(f"{i}: {c}")
