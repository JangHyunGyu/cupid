"""다인 shy/active/sweat 재생성 v2 - normal 레퍼런스 기반"""
import requests, base64, os, json, time
from PIL import Image
import numpy as np

env_path = os.path.join(os.path.dirname(__file__), '..', '.env')
api_key = None
with open(env_path, 'r', encoding='utf-8') as f:
    for line in f:
        line = line.strip()
        if line.startswith('GEMINI_API_KEY='):
            api_key = line.split('=', 1)[1]
            break

char_dir = os.path.join(os.path.dirname(__file__), "assets", "images", "characters")
ref_path = os.path.join(char_dir, "dain_normal.png")
with open(ref_path, "rb") as f:
    img_b64 = base64.b64encode(f.read()).decode("utf-8")

expressions = {
    "dain_active": (
        "Edit this anime character's expression and pose ONLY. Change to: "
        "one fist raised in a victory pump pose, intense focused eyes, "
        "light sweat on forehead, skin slightly flushed from exercise. "
        "DO NOT change body shape or proportions at all. "
        "Keep exact same body, chest, waist, hips, same outfit ETAURS 19, "
        "same magenta pink background, same arm sleeve on left arm. "
        "Output at 1024x1024. Output one image."
    ),
    "dain_shy": (
        "Edit this anime character's expression ONLY. Change to: "
        "eyes looking slightly downward, subtle light pink blush on cheeks, "
        "small gentle shy smile, slightly nervous posture. "
        "Keep it subtle and natural, not over the top. "
        "DO NOT change body shape or proportions at all. "
        "Keep exact same body, same outfit ETAURS 19, "
        "same magenta pink background, same arm sleeve on left arm. "
        "Output at 1024x1024. Output one image."
    ),
    "dain_sweat": (
        "Edit this anime character's expression ONLY. Change to: "
        "natural post-workout look, light sweat sheen on skin, "
        "one small sweat drop on temple, slightly tired but satisfied smile, "
        "breathing slightly heavy but relaxed. Natural and not exaggerated. "
        "DO NOT change body shape or proportions at all. "
        "Keep exact same body, same outfit ETAURS 19, "
        "same magenta pink background, same arm sleeve on left arm. "
        "Output at 1024x1024. Output one image."
    ),
}

url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key={api_key}"
headers = {"Content-Type": "application/json"}

def remove_magenta_bg_v2(img_path, out_path):
    img = Image.open(img_path).convert('RGBA')
    data = np.array(img, dtype=np.float32)
    r, g, b = data[:,:,0], data[:,:,1], data[:,:,2]
    magenta_score = (r / 255) * ((255 - g) / 255) * (b / 255)
    blush_protection = np.clip((150 - b) / 100, 0, 1)
    magenta_prob = magenta_score * (1 - blush_protection * 0.8)
    alpha = np.clip((1 - (magenta_prob - 0.3) / 0.3) * 255, 0, 255).astype(np.uint8)
    non_magenta = magenta_score < 0.15
    alpha[non_magenta] = 255
    data_uint8 = np.array(img)
    data_uint8[:,:,3] = alpha
    Image.fromarray(data_uint8).save(out_path)

for name, edit_prompt in expressions.items():
    print(f"Generating {name}...")
    payload = {
        "contents": [{"parts": [
            {"inlineData": {"mimeType": "image/png", "data": img_b64}},
            {"text": edit_prompt}
        ]}],
        "generationConfig": {"responseModalities": ["TEXT", "IMAGE"]}
    }
    try:
        resp = requests.post(url, json=payload, headers=headers, timeout=120)
        if resp.status_code == 200:
            data = resp.json()
            for candidate in data.get("candidates", []):
                for part in candidate.get("content", {}).get("parts", []):
                    if "inlineData" in part:
                        img_data = base64.b64decode(part["inlineData"]["data"])
                        tmp_path = os.path.join(char_dir, f"{name}_tmp.png")
                        final_path = os.path.join(char_dir, f"{name}.png")
                        with open(tmp_path, "wb") as f:
                            f.write(img_data)
                        # 배경 제거 후 최종 저장
                        remove_magenta_bg_v2(tmp_path, final_path)
                        os.remove(tmp_path)
                        print(f"  Saved: {final_path} ({os.path.getsize(final_path)} bytes)")
        else:
            print(f"  Failed ({resp.status_code}): {resp.text[:200]}")
    except Exception as e:
        print(f"  Error: {e}")
    time.sleep(2)

print("Done!")
