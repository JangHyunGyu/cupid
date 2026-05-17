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
    "애니메이션 비주얼 노벨 캐릭터 스프라이트, 깔끔하고 굵은 선화, 선명한 디지털 셀 채색, "
    "귀가 완전히 보이는 매우 짧은 갈색 픽시컷 머리, 옆머리와 뒷머리가 귀 위까지 오는 스포티한 초숏컷, "
    "별 모양 하이라이트가 있는 밝고 반짝이는 초록색 눈, 건강하게 그을린 밝은 피부톤, "
    "밝고 둥근 눈, 작고 귀여운 코, 생기 있는 입술, "
    "6.5등신 비율, 연애 시뮬레이션 아트 스타일, 에너지 넘치는 한국인 여대생, "
    "정면 기준 몸은 오른쪽으로 10도 틀어져 보는 사람 기준 왼쪽을 향함, "
    "얼굴은 보는 사람을 향하고 5도 정도 기울어짐, "
    "모래시계형 곡선을 가진 탄탄한 배구선수 체형, "
    "큰 둥근 상체 볼륨, 잘록하고 탄탄한 허리, 넓은 운동선수다운 골반, 탄탄한 허벅지, "
    "흰색 바탕에 주황색과 남색 포인트 라인이 있는 민소매 배구 유니폼, "
    "가슴에 ETAURS 팀명과 등번호 19가 인쇄되어 있음, "
    "매우 짧은 남색 돌핀 쇼츠, "
    "왼팔에만 검은 암슬리브 하나를 착용하고 오른팔은 장신구 없이 완전히 맨팔, "
    "왼손은 허리에 얹고 오른손은 자연스럽게 옆에 둔 자신감 있는 파워 포즈, "
    "치아가 보이는 밝고 시원한 미소, 에너지 넘치는 스포티한 소녀 분위기, "
    "허벅지 중간에서 잘리는 상반신 초상 구도, 1024x1024 해상도, "
    "단색 밝은 마젠타 핑크 크로마키 배경, 부드러운 확산 정면 조명과 은은한 림라이트"
)

negative = (
    "저퀄리티, 흐릿함, 손가락 이상, 변형된 손, 3D 렌더링, 실사 사진, "
    "여러 각도, 여러 캐릭터, 잘림, 워터마크, 서명, 텍스트, 글자, "
    "로고, 이름표, 완장, 배경 포함, 전신, 하반신 과다 포함, "
    "파티클 효과, 빛 입자, 특수 효과, 후광, 광선, 빛줄기, 음식, 제품 사진"
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
