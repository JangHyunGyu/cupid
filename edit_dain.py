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
ref_path = os.path.join(os.path.dirname(__file__), "assets", "images", "characters", "dain_normal.png")
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
                "text": "이 애니메이션 캐릭터의 의상만 편집한다. 배구 유니폼을 남색과 흰색 투피스 스포츠 비키니 상의와 하의로 교체한다. 비키니 상의는 작은 삼각형 스포츠 브라 형태이고, 비키니 하의는 작게 한다. 암슬리브는 완전히 제거하여 양팔을 모두 맨팔로 만든다. 피부에는 작은 물방울을 추가한다. 몸매, 가슴 크기, 허리, 골반, 신체 비율은 절대 바꾸지 않는다. 정확히 같은 몸, 얼굴, 머리, 포즈, 마젠타 핑크 배경을 유지한다. 1024x1024 해상도로 한 장만 출력한다."
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
    out_dir = os.path.join(os.path.dirname(__file__), "assets", "images", "characters")
    count = 0
    for candidate in data.get("candidates", []):
        for part in candidate.get("content", {}).get("parts", []):
            if "inlineData" in part:
                img_data = base64.b64decode(part["inlineData"]["data"])
                count += 1
                path = os.path.join(out_dir, f"dain_bikini_v2.png")
                with open(path, "wb") as f:
                    f.write(img_data)
                print(f"  Saved: {path} ({len(img_data)} bytes)")
    print(f"Total {count} images saved")
else:
    print(f"Error: {resp.status_code}")
    print(resp.text[:500])
