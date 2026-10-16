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
        "이 애니메이션 캐릭터의 표정과 포즈를 편집한다. "
        "눈은 짜증 섞인 곁눈질로 옆을 바라보고, 입술은 귀엽게 삐죽 내밀며, "
        "양볼은 살짝 부풀리고, 팔짱을 끼고, 고개는 살짝 돌린 자세로 변경한다. "
        "승부욕 있는 운동선수다운 자연스러운 삐침으로 표현하고 과하게 하지 않는다. "
        "중요: 검은 암슬리브는 왼팔에만 유지한다. 오른팔은 완전히 맨팔이어야 한다. "
        "몸매는 바꾸지 않는다. 같은 평평하고 균일한 조명을 유지한다. "
        "같은 ETAURS 19번 의상, 같은 마젠타 핑크 배경을 유지한다. "
        "1024x1024로 한 장 출력한다."
    ),
    "dain_active": (
        "이 애니메이션 캐릭터의 표정과 포즈를 편집한다. "
        "한 팔은 배구 스파이크 공격 자세로 들어 올리고 다른 팔은 뒤로 당긴 상반신 액션 포즈, "
        "앞을 바라보는 강렬하고 집중된 눈빛, 움직임으로 살짝 헝클어진 머리, "
        "이마와 목의 땀, 운동으로 상기된 피부, "
        "땀으로 젖어 몸에 달라붙는 유니폼과 젖은 천 질감으로 변경한다. "
        "중요: 전체 캐릭터가 모든 가장자리에 여백을 두고 프레임 안에 들어와야 한다. "
        "머리, 머리카락, 팔, 신체 일부가 가장자리에서 잘리면 안 된다. "
        "검은 암슬리브는 왼팔에만 유지하고 오른팔은 완전히 맨팔로 둔다. "
        "몸매는 바꾸지 않는다. 같은 평평하고 균일한 조명을 유지한다. "
        "같은 ETAURS 19번 의상, 같은 마젠타 핑크 배경을 유지한다. 공은 넣지 않는다. "
        "1024x1024로 한 장 출력한다."
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
