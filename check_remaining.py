import re

with open('C:/workspace/cupid/assets/js/scenario/day1_2_lunch.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find es blocks and extract texts using simple string search
texts = []
pos = 0
while True:
    idx = content.find('"es": {', pos)
    if idx == -1:
        break
    # Find closing brace
    brace = 0
    end = idx
    for k in range(idx + 6, len(content)):
        if content[k] == '{':
            brace += 1
        if content[k] == '}':
            if brace == 0:
                end = k + 1
                break
            brace -= 1

    block = content[idx:end]

    # Extract text value
    text_idx = block.find('"text": "')
    if text_idx != -1:
        start = text_idx + 9
        # Find end of string (handle escaped quotes)
        k = start
        while k < len(block):
            if block[k] == '\\' and k + 1 < len(block):
                k += 2
                continue
            if block[k] == '"':
                break
            k += 1
        text_val = block[start:k]
        texts.append(text_val)

    pos = idx + 7

unique = sorted(set(texts))
print(f'Total es text entries in file 2: {len(texts)}')
print(f'Unique: {len(unique)}')
for i, t in enumerate(unique):
    short = t[:120]
    print(f'{i}: {short}')
