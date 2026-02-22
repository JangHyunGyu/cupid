import re

# English -> Japanese translation map for all choice texts
# Character speech styles: protagonist uses 僕/casual, Seoyeon interactions are warm
EN_TO_JA = {
    "*Pretend to listen to her explanation while sneaking glances at her profile.*": "*説明を聞くふりをしながら、彼女の横顔をこっそり盗み見る。*",
    "*Quietly listen to her explanation while walking.*": "*静かに説明を聞きながら歩く。*",
    "*Stare at her blankly, dazzled by her beauty.*": "*眩しくてしばらくぼんやりと見つめてしまう。*",
    "Alright! Let's get along starting today, classmates!": "よろしく！今日からみんな、仲良くしよう！",
    "Alright, let's do this!": "よし、頑張ろう！",
    "Clubs are such a hassle... I'd rather be alone.": "部活なんて面倒……一人でいたい。",
    "Familiar... Have you seen me before?": "見覚え……前にどこかで会った？",
    "Find a quiet spot to explore the school alone.": "一人で学校を回って、静かな場所を探す。",
    "Follow the sound of volleyballs from the gym.": "体育館から聞こえるバレーボールの音を追いかける。",
    "Go to Seoyeon and ask to have lunch together.": "ソヨンに近づいて、一緒にお昼を食べようと誘う。",
    "Go to the nurse's office, feeling a bit unwell.": "ちょっと具合が悪いから保健室に行く。",
    "Go to the school store to buy some bread.": "売店に行ってパンを買う。",
    "Hi! I love sports and have an active personality!": "やあ！スポーツが大好きで、活発な性格です！",
    "I'm here to study. I hate being disturbed, so let's keep things moderate.": "勉強しに来たんだ。邪魔されるのは嫌だから、ほどほどにね。",
    "I'm not good at volleyball... Can you teach me?": "バレーボール苦手なんだ……教えてくれる？",
    "I'm not sure yet. I'll decide after adjusting to school life.": "まだわからない。学校生活に慣れてから決めるよ。",
    "I'm tired, so I'll sleep in the classroom.": "疲れたから、教室で寝る。",
    "If I join the student council, I can be with you every day? Then I'll definitely apply!": "生徒会に入ったら毎日ソヨンと一緒にいられる？なら絶対入る！",
    "Is it even allowed for a student council president to be this pretty? That's cheating!": "生徒会長がこんなに可愛くていいの？ずるいよ！",
    "It doesn't look that appetizing... Should've gone to the store.": "あんまり美味しそうに見えないけど……売店に行けばよかった。",
    "Maybe because you're so kind to me?": "もしかして、僕に優しくしてくれるから？",
    "Maybe it's something like fate?": "もしかして……運命みたいなもの？",
    "More than clubs... I want to know more about you, Seoyeon.": "部活よりも……ソヨンのことをもっと知りたいな。",
    "My name is '{name}'. Nice to meet you all!": "僕の名前は「{name}」です。みんな、よろしく！",
    "Nice to meet you too! This school is really beautiful.": "こちらこそよろしく！この学校、すごく綺麗だね。",
    "Nice to meet you. I prefer to keep to myself.": "よろしく。一人でいるのが好きなんだ。",
    "Of course! I wanted to talk more with you too, Seoyeon.": "もちろん！僕もソヨンともっと話したかったんだ。",
    "Oh my, Seoyeon... You're like a goddess. Just hearing your voice makes me feel like I'm in heaven.": "いやぁ、ソヨン……まるで女神みたいだ。声を聞いてるだけで天国にいる気分だよ。",
    "Oh, okay? Can you move aside?": "ああ、そう？ちょっとどいてくれる？",
    "Say... 'ahh'": "はい……『あーん』",
    "Seoyeon... You're like a goddess. Just hearing your voice heals me.": "ソヨン……女神みたいだ。声を聞いてるだけで癒されるよ。",
    "Sorry, I think it's a bit too early.": "ごめん、まだちょっと早いかな。",
    "Sorry, I want to be alone today.": "ごめん、今日は一人でいたいんだ。",
    "Sure, okay.": "うん、いいよ。",
    "The facilities are nice, but it looks even better because of the person showing me around.": "設備もいいけど、案内してくれる人がいいからもっと良く見えるよ。",
    "The rooftop? Why go all the way up there?": "屋上？なんでわざわざあそこまで？",
    "The school is different? What do you mean by that?": "学校が違う？どういう意味？",
    "The school is nice, but it looks even better because of the person showing me around.": "学校も素敵だけど、案内してくれる人がいいからもっと素敵に見えるよ。",
    "The school is really lively. Do you do any club activities, Seoyeon?": "学校、すごく活気があるね。ソヨンも部活やってるの？",
    "This is the first lunch box with so much care I've seen. Thank you.": "こんなに心のこもったお弁当、初めて見た。ありがとう。",
    "Well, I'm not sure yet.": "うーん、まだわからないな。",
    "Wow, it looks so delicious! You're a cooking genius, Seoyeon.": "わぁ、すごく美味しそう！ソヨンは料理の天才だね。",
    "Wow... You're really pretty.": "わぁ……すごく可愛いね。",
    "Yeah! I wanted to eat with you, Seoyeon.": "うん！ソヨンと一緒に食べたかったんだ。",
    "You seem dangerous somehow. But I can't take my eyes off you.": "なんだか危険な感じがする。でも、目が離せない。",
}

# We also need the Spanish -> Japanese map to fix choices that currently have Spanish in ja blocks
# But it's more reliable to use English -> Japanese, finding the en choices and applying them to ja blocks

def fix_ja_choices_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Strategy: find each _i18n block, extract the en choices, then find the ja choices
    # and replace them with Japanese translations

    fixed_count = 0
    pos = 0

    while True:
        # Find _i18n block
        idx = content.find('"_i18n":', pos)
        if idx == -1:
            break

        # Find the opening brace of the _i18n value
        brace_start = content.find('{', idx + 8)
        if brace_start == -1:
            break

        # Find closing brace of _i18n block
        brace = 0
        i18n_end = brace_start
        for k in range(brace_start, len(content)):
            if content[k] == '{':
                brace += 1
            if content[k] == '}':
                brace -= 1
                if brace == 0:
                    i18n_end = k + 1
                    break

        i18n_block = content[brace_start:i18n_end]

        # Extract en choices
        en_idx = i18n_block.find('"en": {')
        if en_idx == -1:
            pos = idx + 8
            continue

        # Find en block end
        en_brace = 0
        en_end = en_idx + 6
        for k in range(en_idx + 6, len(i18n_block)):
            if i18n_block[k] == '{':
                en_brace += 1
            if i18n_block[k] == '}':
                if en_brace == 0:
                    en_end = k + 1
                    break
                en_brace -= 1
        en_block = i18n_block[en_idx:en_end]

        # Check if en block has choices
        en_choices_match = re.search(r'"choices":\s*\[(.*?)\]', en_block, re.DOTALL)
        if not en_choices_match:
            pos = idx + 8
            continue

        # Extract en choice texts
        en_choice_str = en_choices_match.group(1)
        en_choices = []
        for cm in re.finditer(r'"((?:[^"\\]|\\.)*)"', en_choice_str):
            en_choices.append(cm.group(1))

        if not en_choices:
            pos = idx + 8
            continue

        # Build Japanese choices
        ja_choices = []
        all_found = True
        for ec in en_choices:
            if ec in EN_TO_JA:
                ja_choices.append(EN_TO_JA[ec])
            else:
                print(f"WARNING: No Japanese translation for: {ec}")
                ja_choices.append(ec)  # Keep English as fallback
                all_found = False

        # Now find the ja block within the i18n block and replace its choices
        ja_idx = i18n_block.find('"ja": {')
        if ja_idx == -1:
            pos = idx + 8
            continue

        # Find ja block end
        ja_brace = 0
        ja_end = ja_idx + 6
        for k in range(ja_idx + 6, len(i18n_block)):
            if i18n_block[k] == '{':
                ja_brace += 1
            if i18n_block[k] == '}':
                if ja_brace == 0:
                    ja_end = k + 1
                    break
                ja_brace -= 1
        ja_block = i18n_block[ja_idx:ja_end]

        # Check if ja block has choices
        ja_choices_match = re.search(r'"choices":\s*\[(.*?)\]', ja_block, re.DOTALL)
        if not ja_choices_match:
            pos = idx + 8
            continue

        # Build the new choices array string
        # Detect indentation from the existing block
        ja_abs_start = brace_start + ja_idx
        ja_choices_abs_start = brace_start + ja_idx + ja_choices_match.start()

        # Get the old choices text to replace
        old_choices_text = ja_choices_match.group(0)  # includes "choices": [...]

        # Build new choices text with same formatting
        # Detect indent level
        line_start = content.rfind('\n', 0, brace_start + ja_idx + ja_choices_match.start())
        if line_start != -1:
            indent_line = content[line_start+1:brace_start + ja_idx + ja_choices_match.start()]
            base_indent = ''
            for ch in indent_line:
                if ch == ' ' or ch == '\t':
                    base_indent += ch
                else:
                    break
        else:
            base_indent = '                    '

        # Build choices array
        choice_lines = []
        for i, jc in enumerate(ja_choices):
            # Escape any quotes in the text
            escaped = jc.replace('\\', '\\\\').replace('"', '\\"')
            choice_lines.append(f'{base_indent}    "{escaped}"')

        new_choices_text = '"choices": [\n' + ',\n'.join(choice_lines) + f'\n{base_indent}]'

        # Replace in the ja block within the full content
        # Find the exact position of the old choices in the full content
        ja_block_abs_start = brace_start + ja_idx
        old_ja_block = content[ja_block_abs_start:brace_start + ja_end]
        new_ja_block = old_ja_block.replace(old_choices_text, new_choices_text, 1)

        if old_ja_block != new_ja_block:
            content = content[:ja_block_abs_start] + new_ja_block + content[brace_start + ja_end:]
            fixed_count += 1

        pos = idx + 8

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    return fixed_count

f1 = 'C:/workspace/cupid/assets/js/scenario/day1_1_morning.js'
f2 = 'C:/workspace/cupid/assets/js/scenario/day1_2_lunch.js'

count1 = fix_ja_choices_in_file(f1)
count2 = fix_ja_choices_in_file(f2)
print(f"Fixed {count1} ja choice blocks in file 1")
print(f"Fixed {count2} ja choice blocks in file 2")
