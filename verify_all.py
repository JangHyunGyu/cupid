import re

def check_ja_blocks(filepath):
    """Check ja blocks for Spanish text in both text fields and choices."""
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

        # Check text field
        text_match = re.search(r'"text":\s*"((?:[^"\\]|\\.)*)"', block)
        if text_match:
            t = text_match.group(1)
            has_japanese = any('\u3040' <= c <= '\u9fff' or '\u30a0' <= c <= '\u30ff' or '\uff00' <= c <= '\uffef' for c in t)
            has_spanish = any(c in t for c in '\u00e1\u00e9\u00ed\u00f3\u00fa\u00f1\u00bf\u00a1\u00c1\u00c9\u00cd\u00d3\u00da\u00d1')
            is_simple = all(c.isascii() for c in t) and not any(c.isalpha() for c in t.replace('{name}', ''))

            if has_spanish:
                issues.append((block_num, 'SPANISH_TEXT_IN_JA', t[:80]))
            elif not has_japanese and not is_simple and len(t) > 5:
                if any(c.isalpha() and c.isascii() for c in t):
                    issues.append((block_num, 'POSSIBLY_ENGLISH_TEXT', t[:80]))

        # Check choices
        choices_match = re.search(r'"choices":\s*\[(.*?)\]', block, re.DOTALL)
        if choices_match:
            choice_str = choices_match.group(1)
            for cm in re.finditer(r'"((?:[^"\\]|\\.)*)"', choice_str):
                ct = cm.group(1)
                has_ja = any('\u3040' <= c <= '\u9fff' or '\u30a0' <= c <= '\u30ff' for c in ct)
                has_es = any(c in ct for c in '\u00e1\u00e9\u00ed\u00f3\u00fa\u00f1\u00bf\u00a1')
                is_simple_choice = all(c.isascii() for c in ct) and not any(c.isalpha() for c in ct.replace('{name}', ''))

                if has_es:
                    issues.append((block_num, 'SPANISH_CHOICE_IN_JA', ct[:80]))
                elif not has_ja and not is_simple_choice and len(ct) > 3:
                    if any(c.isalpha() and c.isascii() for c in ct):
                        issues.append((block_num, 'POSSIBLY_ENGLISH_CHOICE', ct[:80]))

        pos = idx + 7

    return block_num, issues


def check_es_blocks(filepath):
    """Check es blocks for Japanese text or untranslated English in both text and choices."""
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

        # Check text
        text_match = re.search(r'"text":\s*"((?:[^"\\]|\\.)*)"', block)
        if text_match:
            t = text_match.group(1)
            has_japanese = any('\u3040' <= c <= '\u9fff' or '\u30a0' <= c <= '\u30ff' for c in t)
            if has_japanese:
                issues.append((block_num, 'JAPANESE_TEXT_IN_ES', t[:80]))

        # Check choices
        choices_match = re.search(r'"choices":\s*\[(.*?)\]', block, re.DOTALL)
        if choices_match:
            choice_str = choices_match.group(1)
            for cm in re.finditer(r'"((?:[^"\\]|\\.)*)"', choice_str):
                ct = cm.group(1)
                has_ja = any('\u3040' <= c <= '\u9fff' or '\u30a0' <= c <= '\u30ff' for c in ct)
                if has_ja:
                    issues.append((block_num, 'JAPANESE_CHOICE_IN_ES', ct[:80]))

        pos = idx + 7

    return block_num, issues


f1 = 'C:/workspace/cupid/assets/js/scenario/day1_1_morning.js'
f2 = 'C:/workspace/cupid/assets/js/scenario/day1_2_lunch.js'

print("=== JA Block Verification ===")
ja1_total, ja1_issues = check_ja_blocks(f1)
ja2_total, ja2_issues = check_ja_blocks(f2)
print(f"File 1: {ja1_total} ja blocks, {len(ja1_issues)} issues")
for i in ja1_issues:
    print(f"  Block {i[0]}: {i[1]} - {i[2]}")
print(f"File 2: {ja2_total} ja blocks, {len(ja2_issues)} issues")
for i in ja2_issues:
    print(f"  Block {i[0]}: {i[1]} - {i[2]}")

print("\n=== ES Block Verification ===")
es1_total, es1_issues = check_es_blocks(f1)
es2_total, es2_issues = check_es_blocks(f2)
print(f"File 1: {es1_total} es blocks, {len(es1_issues)} issues")
for i in es1_issues:
    print(f"  Block {i[0]}: {i[1]} - {i[2]}")
print(f"File 2: {es2_total} es blocks, {len(es2_issues)} issues")
for i in es2_issues:
    print(f"  Block {i[0]}: {i[1]} - {i[2]}")

print(f"\n=== Summary ===")
total_issues = len(ja1_issues) + len(ja2_issues) + len(es1_issues) + len(es2_issues)
print(f"Total blocks: {ja1_total + ja2_total} ja, {es1_total + es2_total} es")
print(f"Total issues: {total_issues}")
