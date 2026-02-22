import re, sys

def check_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    issues = []
    pos = 0
    block_num = 0
    while True:
        idx = content.find('"ja": {', pos)
        if idx == -1:
            break
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
        block_num += 1

        # Extract text
        text_match = re.search(r'"text":\s*"((?:[^"\\]|\\.)*)"', block)
        if text_match:
            t = text_match.group(1)
            # Check for English-only text (no Japanese chars, no Spanish accented chars)
            has_japanese = any('\u3040' <= c <= '\u9fff' or '\u30a0' <= c <= '\u30ff' or '\uff00' <= c <= '\uffef' for c in t)
            has_spanish = any(c in t for c in '\u00e1\u00e9\u00ed\u00f3\u00fa\u00f1\u00bf\u00a1\u00c1\u00c9\u00cd\u00d3\u00da\u00d1')
            # If it's just {name} or punctuation or empty action text, skip
            is_simple = all(c.isascii() for c in t) and not any(c.isalpha() for c in t.replace('{name}', ''))

            if has_spanish:
                issues.append((block_num, 'SPANISH_IN_JA', t[:80]))
            elif not has_japanese and not is_simple and len(t) > 5:
                # Check if it could be English still
                if any(c.isalpha() and c.isascii() for c in t):
                    issues.append((block_num, 'POSSIBLY_ENGLISH', t[:80]))

        # Check choices too
        choices_match = re.search(r'"choices":\s*\[(.*?)\]', block, re.DOTALL)
        if choices_match:
            choice_str = choices_match.group(1)
            for cm in re.finditer(r'"((?:[^"\\]|\\.)*)"', choice_str):
                ct = cm.group(1)
                has_ja = any('\u3040' <= c <= '\u9fff' or '\u30a0' <= c <= '\u30ff' for c in ct)
                has_es = any(c in ct for c in '\u00e1\u00e9\u00ed\u00f3\u00fa\u00f1\u00bf\u00a1')
                if has_es:
                    issues.append((block_num, 'SPANISH_CHOICE_IN_JA', ct[:80]))

        pos = idx + 7

    return block_num, issues

# Also check es blocks for English still remaining
def check_es(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    issues = []
    pos = 0
    block_num = 0
    while True:
        idx = content.find('"es": {', pos)
        if idx == -1:
            break
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
        block_num += 1

        text_match = re.search(r'"text":\s*"((?:[^"\\]|\\.)*)"', block)
        if text_match:
            t = text_match.group(1)
            has_spanish = any(c in t for c in '\u00e1\u00e9\u00ed\u00f3\u00fa\u00f1\u00bf\u00a1\u00c1\u00c9\u00cd\u00d3\u00da\u00d1')
            has_japanese = any('\u3040' <= c <= '\u9fff' or '\u30a0' <= c <= '\u30ff' for c in t)
            if has_japanese:
                issues.append((block_num, 'JAPANESE_IN_ES', t[:80]))

        pos = idx + 7

    return block_num, issues

f1 = 'C:/workspace/cupid/assets/js/scenario/day1_1_morning.js'
f2 = 'C:/workspace/cupid/assets/js/scenario/day1_2_lunch.js'

total1, issues1 = check_file(f1)
total2, issues2 = check_file(f2)
print(f"File 1: {total1} ja blocks, {len(issues1)} issues")
for i in issues1[:10]:
    print(f"  {i[0]}: {i[1]}")

print(f"File 2: {total2} ja blocks, {len(issues2)} issues")
for i in issues2[:10]:
    print(f"  {i[0]}: {i[1]}")

es_total1, es_issues1 = check_es(f1)
es_total2, es_issues2 = check_es(f2)
print(f"\nES check - File 1: {es_total1} es blocks, {len(es_issues1)} issues")
print(f"ES check - File 2: {es_total2} es blocks, {len(es_issues2)} issues")
