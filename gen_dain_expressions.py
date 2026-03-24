"""다인 표정 변형 생성 - Gemini Flash Image 편집 (레퍼런스: dain_normal_edited_1.png)"""
import requests, base64, os, json, time

# .env에서 API 키 읽기
env_path = os.path.join(os.path.dirname(__file__), '..', '.env')
api_key = None
with open(env_path, 'r', encoding='utf-8') as f:
    for line in f:
        line = line.strip()
        if line.startswith('GEMINI_API_KEY='):
            api_key = line.split('=', 1)[1]
            break

if not api_key:
    print("ERROR: GEMINI_API_KEY not found in .env")
    exit(1)

# 레퍼런스 이미지 읽기
ref_path = os.path.join(os.path.dirname(__file__), "assets", "images", "characters", "dain_normal_edited_1.png")
with open(ref_path, "rb") as f:
    img_b64 = base64.b64encode(f.read()).decode("utf-8")

expressions = {
    "dain_active": (
        "Edit this anime character's expression and pose. Change to: hair slightly wet with sweat sticking to forehead and temples, "
        "intense passionate eyes burning with fighting spirit, sweat drops on forehead and neck, skin flushed red from exercise, "
        "uniform slightly damp clinging to body, one arm raised in a fist pump victory pose, "
        "passionate expression with rough breathing after intense exercise. No ball, no volleyball, no sports equipment. "
        "Keep the same character design, outfit ETAURS 19, magenta background, art style. Output at 1024x1024. Output one image."
    ),
    "dain_shy": (
        "Edit this anime character's expression and pose. Change to: both hands brought together in front of chest in a shy curled-up pose, "
        "green eyes looking down avoiding eye contact, both cheeks deeply blushing bright red, "
        "awkward shy smile with lips curving up nervously, dramatically contrasting her usual bold personality. "
        "Keep the same character design, outfit ETAURS 19, magenta background, art style. Output at 1024x1024. Output one image."
    ),
    "dain_laugh": (
        "Edit this anime character's expression only. Change to: eyes squeezed shut in happy crescent moon shape, "
        "mouth wide open showing teeth in a big hearty laugh, cheeks brightly flushed, "
        "one hand on hip other hand relaxed, hair bouncing slightly from laughing motion, "
        "genuine wholehearted laughter bursting out. "
        "Keep the same character design, outfit ETAURS 19, magenta background, art style. Output at 1024x1024. Output one image."
    ),
    "dain_angry": (
        "Edit this anime character's expression and pose. Change to: green eyes wide open glaring with sharp raised eye corners, "
        "teeth bared in an aggressive growling angry expression, cheeks red with fury, deep furrow between eyebrows, "
        "fists clenched tight, straightforward athletic rage. "
        "Keep the same character design, outfit ETAURS 19, magenta background, art style. Output at 1024x1024. Output one image."
    ),
    "dain_sad": (
        "Edit this anime character's expression and pose. Change to: green eyes drooping with lowered eye corners and faded highlights, "
        "mouth corners turned down in a sad expression, arms hanging limply at sides, shoulders slumped and deflated posture, "
        "all the usual energy completely gone, looking small and withdrawn. "
        "Keep the same character design, outfit ETAURS 19, magenta background, art style. Output at 1024x1024. Output one image."
    ),
    "dain_pout": (
        "Edit this anime character's expression and pose. Change to: green eyes looking sideways with an annoyed glance, "
        "lips pushed out in a pout with both cheeks puffed up in displeasure, arms crossed over chest, "
        "head slightly turned away in a defiant rebellious pose, straightforward athletic pouting. "
        "Keep the same character design, outfit ETAURS 19, magenta background, art style. Output at 1024x1024. Output one image."
    ),
    "dain_sweat": (
        "Edit this anime character's expression only. Change to: a single cold sweat drop on temple, "
        "holding a white towel wiping one side of face with one hand, cheeks red from embarrassment, "
        "trying to look cheerful but lips slightly trembling showing a crack in her mask, "
        "green eyes showing unusual wavering and uncertainty. "
        "Keep the same character design, outfit ETAURS 19, magenta background, art style. Output at 1024x1024. Output one image."
    ),
    "dain_bikini": (
        "Edit this anime character's outfit only. Change outfit to: navy and white two-tone sports bikini with ETAURS logo, "
        "hair wet sticking to forehead, water droplets on skin, "
        "confident cool smile, bright sporty athletic swimmer vibe. Remove arm sleeve. "
        "Keep the same character face, hair style, body proportions, magenta background, art style. Output at 1024x1024. Output one image."
    ),
}

url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key={api_key}"
headers = {"Content-Type": "application/json"}
out_dir = os.path.join(os.path.dirname(__file__), "assets", "images", "characters")

for name, edit_prompt in expressions.items():
    print(f"\nGenerating {name}...")
    payload = {
        "contents": [{
            "parts": [
                {"inlineData": {"mimeType": "image/png", "data": img_b64}},
                {"text": edit_prompt}
            ]
        }],
        "generationConfig": {
            "responseModalities": ["TEXT", "IMAGE"]
        }
    }

    try:
        resp = requests.post(url, json=payload, headers=headers, timeout=120)
        if resp.status_code == 200:
            data = resp.json()
            for candidate in data.get("candidates", []):
                for part in candidate.get("content", {}).get("parts", []):
                    if "inlineData" in part:
                        img_data = base64.b64decode(part["inlineData"]["data"])
                        path = os.path.join(out_dir, f"{name}_new.png")
                        with open(path, "wb") as f:
                            f.write(img_data)
                        print(f"  Saved: {path} ({len(img_data)} bytes)")
        else:
            print(f"  Failed ({resp.status_code}): {resp.text[:200]}")
    except Exception as e:
        print(f"  Error: {e}")

    time.sleep(2)  # rate limit

print("\nDone!")
