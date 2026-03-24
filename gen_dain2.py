"""다인 normal 이미지 생성 스크립트 (Imagen 4) - PROMPTS_READY.md 기반"""
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
    "anime visual novel character sprite, clean bold lineart, vivid digital cel shading, "
    "brown very short pixie cut hair with ears fully visible, hair above ears on sides and back, sporty ultra-short haircut, "
    "bright sparkling green eyes with star-shaped highlights, healthy tanned bright skin tone, "
    "bright round eyes, cute small nose, lively lips, "
    "6.5-head-tall proportions, dating sim art style, energetic Korean high school girl, "
    "body angled 10 degrees to the RIGHT from front view facing viewer's left direction, "
    "face facing viewer tilted 5 degrees, "
    "athletic toned volleyball player build with hourglass figure, "
    "large rounded chest, slim toned waist, wide athletic hips, toned thighs, "
    "sleeveless volleyball jersey white base with orange and navy accent lines, "
    "team name ETAURS and number 19 printed on chest, "
    "very short navy dolphin shorts, "
    "single black arm sleeve on LEFT arm only, right arm completely bare no accessories, "
    "left hand on hip, right hand relaxed at side, confident power pose, "
    "bright cool smile showing teeth, energetic sporty girl vibe, "
    "upper body portrait cut at mid-thigh level, 1024x1024 resolution, "
    "solid bright magenta pink chroma key background, soft diffused front lighting with subtle rim light"
)

negative = (
    "low quality, blurry, finger anomaly, deformed hands, 3D rendering, real photo, "
    "multiple angles, multiple characters, cropped, watermark, signature, text, letters, "
    "logo, name tag, armband, background included, full body, lower body included, "
    "particle effects, light particles, effects, halo, light rays, light beams, food, product photo"
)

payload = {
    "instances": [{"prompt": prompt}],
    "parameters": {
        "sampleCount": 3,
        "aspectRatio": "1:1"
    }
}

headers = {"Content-Type": "application/json"}

models = [
    "imagen-4.0-generate-001",
]

out_dir = "c:/workspace/cupid/assets/images/characters"
os.makedirs(out_dir, exist_ok=True)

for model in models:
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:predict?key={api_key}"
    print(f"Trying {model}...")
    try:
        resp = requests.post(url, json=payload, headers=headers, timeout=120)
        if resp.status_code == 200:
            data = resp.json()
            predictions = data.get("predictions", [])
            for i, pred in enumerate(predictions):
                img_data = base64.b64decode(pred["bytesBase64Encoded"])
                path = os.path.join(out_dir, f"dain_normal_candidate_{i+1}.png")
                with open(path, "wb") as f:
                    f.write(img_data)
                print(f"  Saved: {path} ({len(img_data)} bytes)")
            print(f"Total {len(predictions)} images generated with {model}")
            break
        else:
            print(f"  Failed ({resp.status_code}): {resp.text[:300]}")
    except Exception as e:
        print(f"  Error: {e}")
