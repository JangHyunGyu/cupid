"""다인 이미지 편집 - Gemini Flash Image (좌우반전 + 가슴 확대)"""
import requests, base64, os, json

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

# 레퍼런스 이미지 읽기 (candidate_2)
ref_path = "assets/images/characters/dain.png"
with open(ref_path, "rb") as f:
    img_b64 = base64.b64encode(f.read()).decode("utf-8")

url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key={api_key}"

payload = {
    "contents": [{
        "parts": [
            {
                "inlineData": {
                    "mimeType": "image/png",
                    "data": img_b64
                }
            },
            {
                "text": "Using this character as reference, redraw her as a high quality anime visual novel character sprite. She should have: brown very short pixie cut hair, bright sparkling green eyes with star-shaped highlights, baby face with bright round cute eyes and small cute button nose, 6.5-head-tall proportions, athletic volleyball player with very curvy glamorous figure and large chest, wearing volleyball uniform (white base with orange lines, ETAURS team name, number 19 on chest), navy hot pants, black arm sleeve on left arm only, right hand on hip confident pose, bright cool smile showing teeth, energetic sporty girl vibe, upper body portrait, 1024x1024 resolution, solid bright green chroma key background, soft diffused front lighting, clean lineart, vivid digital cel shading. Output one single high quality image."
            }
        ]
    }],
    "generationConfig": {
        "responseModalities": ["TEXT", "IMAGE"]
    }
}

headers = {"Content-Type": "application/json"}

print("Editing with Gemini Flash Image...")
resp = requests.post(url, json=payload, headers=headers, timeout=120)

if resp.status_code == 200:
    data = resp.json()
    out_dir = "assets/images/characters"
    count = 0
    for candidate in data.get("candidates", []):
        for part in candidate.get("content", {}).get("parts", []):
            if "inlineData" in part:
                img_data = base64.b64decode(part["inlineData"]["data"])
                count += 1
                path = os.path.join(out_dir, f"dain_normal_edited_{count}.png")
                with open(path, "wb") as f:
                    f.write(img_data)
                print(f"  Saved: {path} ({len(img_data)} bytes)")
    print(f"Total {count} images saved")
else:
    print(f"Error: {resp.status_code}")
    print(resp.text[:500])
