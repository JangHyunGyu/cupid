"""다인 shy/active/sweat 재생성 + 비키니 배경제거"""
import requests, base64, os, json, time
from PIL import Image
import numpy as np

# .env에서 API 키 읽기
env_path = os.path.join(os.path.dirname(__file__), '..', '.env')
api_key = None
with open(env_path, 'r', encoding='utf-8') as f:
    for line in f:
        line = line.strip()
        if line.startswith('GEMINI_API_KEY='):
            api_key = line.split('=', 1)[1]
            break

char_dir = os.path.join(os.path.dirname(__file__), "assets", "images", "characters")

# 레퍼런스: dain_normal (배경 제거 전 원본이 필요하므로 active 사용 - 마젠타 배경 잔존)
# active.png는 이미 배경제거된 상태이므로 candidate_3 원본 사용
ref_path = os.path.join(char_dir, "dain_normal_candidate_3.png")
if not os.path.exists(ref_path):
    # candidate가 없으면 pout (배경이 비교적 잘 남아있음) 사용
    ref_path = os.path.join(char_dir, "dain_pout.png")
with open(ref_path, "rb") as f:
    img_b64 = base64.b64encode(f.read()).decode("utf-8")

print(f"Reference: {ref_path}")

expressions = {
    "dain_shy": (
        "Edit this anime character's expression. Change to a subtle shy look: "
        "eyes looking slightly down and to the side, light pink blush on both cheeks, "
        "small nervous smile, hands brought together in front of body fidgeting. "
        "Not overly dramatic - just a gentle subtle shyness. "
        "Keep same outfit ETAURS 19, same magenta pink background, same body, same art style. "
        "Output at 1024x1024. Output one image."
    ),
    "dain_active": (
        "Edit this anime character's expression and pose. Change to: "
        "both arms raised overhead in a volleyball spike jumping pose, "
        "intense focused eyes with fighting spirit, hair blowing upward from jump, "
        "sweat on forehead and neck, skin flushed from exercise, uniform damp. "
        "No ball, no volleyball, no equipment in the image. "
        "Keep same outfit ETAURS 19, same magenta pink background, same body, same art style. "
        "Output at 1024x1024. Output one image."
    ),
    "dain_sweat": (
        "Edit this anime character's expression only. Change to: "
        "one cold sweat drop on temple, holding a white towel near face with one hand, "
        "embarrassed blushing cheeks, trying to smile but lips trembling slightly, "
        "eyes showing unusual nervousness. Keep the same framing showing upper body to mid-thigh. "
        "Keep same outfit ETAURS 19, same magenta pink background, same body, same art style. "
        "Output at 1024x1024. Output one image."
    ),
}

url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key={api_key}"
headers = {"Content-Type": "application/json"}

for name, edit_prompt in expressions.items():
    print(f"\nGenerating {name}...")
    payload = {
        "contents": [{
            "parts": [
                {"inlineData": {"mimeType": "image/png", "data": img_b64}},
                {"text": edit_prompt}
            ]
        }],
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
                        path = os.path.join(char_dir, f"{name}_v2.png")
                        with open(path, "wb") as f:
                            f.write(img_data)
                        print(f"  Saved: {path} ({len(img_data)} bytes)")
        else:
            print(f"  Failed ({resp.status_code}): {resp.text[:200]}")
    except Exception as e:
        print(f"  Error: {e}")
    time.sleep(2)

# --- 개선된 배경 제거 (홍조 보존) ---
def remove_magenta_bg_v2(img_path, out_path):
    """마젠타 크로마키만 제거, 빨간 홍조(R높 G낮 B낮)는 보존"""
    img = Image.open(img_path).convert("RGBA")
    data = np.array(img, dtype=np.float32)
    r, g, b = data[:,:,0], data[:,:,1], data[:,:,2]

    # 마젠타 = R높 + G낮 + B높 (핑크/보라 계열)
    # 홍조 = R높 + G낮 + B낮 (빨간 계열) → 보존해야 함
    # 핵심 차이: B 채널이 높으면 마젠타, 낮으면 홍조

    # 마젠타 점수: R과 B가 모두 높고 G가 낮을수록 마젠타
    magenta_score = (r / 255) * ((255 - g) / 255) * (b / 255)

    # 홍조 보호: B가 낮으면 홍조일 가능성 높음
    blush_protection = np.clip((150 - b) / 100, 0, 1)  # B < 150이면 보호

    # 최종 마젠타 확률 (홍조 보호 적용)
    magenta_prob = magenta_score * (1 - blush_protection * 0.8)

    # 알파 계산
    alpha = np.clip((1 - (magenta_prob - 0.3) / 0.3) * 255, 0, 255).astype(np.uint8)

    # 확실한 비마젠타 영역은 완전 불투명
    non_magenta = magenta_score < 0.15
    alpha[non_magenta] = 255

    data_uint8 = np.array(img)
    data_uint8[:,:,3] = alpha
    Image.fromarray(data_uint8).save(out_path)
    print(f"  BG removed: {out_path}")

# 새로 생성된 3장 + 비키니 배경 제거
print("\n--- Background removal ---")
for name in ["dain_shy_v2", "dain_active_v2", "dain_sweat_v2"]:
    src = os.path.join(char_dir, f"{name}.png")
    dst = os.path.join(char_dir, f"{name.replace('_v2', '')}.png")
    if os.path.exists(src):
        remove_magenta_bg_v2(src, dst)
        os.remove(src)

# 비키니도 배경 제거
bikini_src = os.path.join(char_dir, "dain_bikini_new.png")
bikini_dst = os.path.join(char_dir, "dain_bikini.png")
if os.path.exists(bikini_src):
    remove_magenta_bg_v2(bikini_src, bikini_dst)
    os.remove(bikini_src)

print("\nDone!")
