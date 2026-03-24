"""다인 normal 이미지 생성 스크립트 (Imagen 4)"""
import requests, base64, os

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

prompt = (
    "anime visual novel character sprite, detailed clean lineart, rich digital cel shading with depth, "
    "brown very short pixie cut hair above ears with slightly messy sporty texture, "
    "bright sparkling green eyes with star-shaped highlights, cute baby face with round eyes and small nose, "
    "6.5-head-tall proportions, dating sim art style, energetic Korean high school girl, "
    "body facing slightly right with face looking at viewer, left hand on hip confident pose, "
    "athletic volleyball player with hourglass curvy figure, "
    "large rounded chest stretching the uniform, slim toned waist, "
    "natural athletic hips, toned thighs visible below very short navy dolphin shorts, "
    "wearing sleeveless volleyball jersey white base with orange and navy accent lines, "
    "ETAURS team name and number 19 printed on chest, no logo near collar, "
    "black arm sleeve on left arm only, right arm bare, "
    "bright cool smile showing teeth, energetic sporty girl vibe, "
    "cut at mid-thigh level, 1024x1024 resolution, "
    "solid black background, soft diffused front lighting with subtle rim light"
)

negative = (
    "low quality, blurry, finger anomaly, deformed hands, 3D rendering, real photo, "
    "multiple angles, multiple characters, cropped, watermark, signature, text, letters, "
    "logo, name tag, armband, background included, full body, lower body included, "
    "particle effects, light particles, effects, halo, light rays, excessive exposure"
)

payload = {
    "instances": [{"prompt": prompt}],
    "parameters": {
        "sampleCount": 3,
        "aspectRatio": "1:1"
    }
}

headers = {"Content-Type": "application/json"}

# Imagen 4 시도
models = [
    "imagen-4.0-generate-001",
    "imagen-3.0-generate-002",
    "imagen-3.0-generate-001",
]

for model in models:
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:predict?key={api_key}"
    print(f"Trying {model}...")
    try:
        resp = requests.post(url, json=payload, headers=headers, timeout=120)
        if resp.status_code == 200:
            data = resp.json()
            predictions = data.get("predictions", [])
            out_dir = "c:/tmp/dain_gen"
            os.makedirs(out_dir, exist_ok=True)
            for i, pred in enumerate(predictions):
                img_data = base64.b64decode(pred["bytesBase64Encoded"])
                path = os.path.join(out_dir, f"dain_normal_{i+1}.png")
                with open(path, "wb") as f:
                    f.write(img_data)
                print(f"  Saved: {path} ({len(img_data)} bytes)")
            print(f"Total {len(predictions)} images generated with {model}")
            break
        else:
            print(f"  Failed ({resp.status_code}): {resp.text[:200]}")
    except Exception as e:
        print(f"  Error: {e}")
