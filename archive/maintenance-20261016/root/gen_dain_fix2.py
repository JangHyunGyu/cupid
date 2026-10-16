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
        "이 애니메이션 캐릭터의 표정과 포즈만 편집한다. "
        "한쪽 주먹을 들어 올린 승리 포즈, 강렬하고 집중된 눈빛, "
        "이마의 옅은 땀, 운동으로 살짝 상기된 피부로 변경한다. "
        "몸매나 신체 비율은 절대 바꾸지 않는다. "
        "정확히 같은 몸, 가슴, 허리, 골반, 같은 ETAURS 19번 의상, "
        "같은 마젠타 핑크 배경, 같은 왼팔 암슬리브를 유지한다. "
        "1024x1024로 한 장 출력한다."
    ),
    "dain_shy": (
        "이 애니메이션 캐릭터의 표정만 편집한다. "
        "눈은 살짝 아래를 바라보고, 볼에는 은은한 연분홍 홍조, "
        "작고 부드러운 수줍은 미소, 살짝 긴장한 자세로 변경한다. "
        "과하지 않게 은근하고 자연스럽게 유지한다. "
        "몸매나 신체 비율은 절대 바꾸지 않는다. "
        "정확히 같은 몸, 같은 ETAURS 19번 의상, "
        "같은 마젠타 핑크 배경, 같은 왼팔 암슬리브를 유지한다. "
        "1024x1024로 한 장 출력한다."
    ),
    "dain_sweat": (
        "이 애니메이션 캐릭터의 표정만 편집한다. "
        "자연스러운 운동 직후의 모습, 피부에 은은한 땀 광택, "
        "관자놀이의 작은 땀방울 하나, 조금 지쳤지만 만족스러운 미소, "
        "호흡은 살짝 거칠지만 편안한 느낌으로 변경한다. 자연스럽고 과장되지 않게 표현한다. "
        "몸매나 신체 비율은 절대 바꾸지 않는다. "
        "정확히 같은 몸, 같은 ETAURS 19번 의상, "
        "같은 마젠타 핑크 배경, 같은 왼팔 암슬리브를 유지한다. "
        "1024x1024로 한 장 출력한다."
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
