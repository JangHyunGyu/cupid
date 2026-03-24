"""다인 bikini/angry 재생성 - normal 레퍼런스 기반"""
import requests, base64, os, time
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
    "dain_pout": (
        "Edit this anime character's expression and pose. Change to: "
        "eyes looking sideways with annoyed glance, lips pushed out in a cute pout, "
        "both cheeks slightly puffed, arms crossed over chest, head slightly turned away. "
        "Natural competitive athlete pouting, not overdone. "
        "CRITICAL: Keep the black arm sleeve ONLY on the LEFT arm. Right arm must be completely bare. "
        "DO NOT change body shape. Keep same flat even lighting. "
        "Keep same outfit ETAURS 19, same magenta pink background. "
        "Output at 1024x1024. Output one image."
    ),
    "dain_active": (
        "Edit this anime character's expression and pose. Change to: "
        "one arm raised in a volleyball spike attack pose with the other arm pulled back, upper body action pose, "
        "intense focused eyes looking forward, hair slightly messy from movement, "
        "sweat on forehead and neck, skin flushed from exercise, "
        "uniform visibly damp and clinging to body from sweat, wet fabric texture on the uniform. "
        "CRITICAL: The entire character must fit within the frame with margin on all sides. "
        "Do NOT crop or cut off the head, hair, arms, or any body part at the edges. "
        "Keep the black arm sleeve ONLY on the LEFT arm. Right arm completely bare. "
        "DO NOT change body shape. Keep same flat even lighting. "
        "Keep same outfit ETAURS 19, same magenta pink background. No ball. "
        "Output at 1024x1024. Output one image."
    ),
    # dain_sweat already done
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
                        remove_magenta_bg_v2(tmp_path, final_path)
                        os.remove(tmp_path)
                        print(f"  Saved: {final_path} ({os.path.getsize(final_path)} bytes)")
        else:
            print(f"  Failed ({resp.status_code}): {resp.text[:200]}")
    except Exception as e:
        print(f"  Error: {e}")
    time.sleep(2)

print("Done!")
