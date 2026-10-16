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
    "애니메이션 비주얼 노벨 캐릭터 스프라이트, 섬세하고 깔끔한 선화, 깊이감 있는 풍부한 디지털 셀 채색, "
    "귀 위까지 오는 매우 짧은 갈색 픽시컷 머리, 살짝 흐트러진 스포티한 머릿결, "
    "별 모양 하이라이트가 있는 밝고 반짝이는 초록색 눈, 둥근 눈과 작은 코가 있는 귀여운 동안 얼굴, "
    "6.5등신 비율, 연애 시뮬레이션 아트 스타일, 에너지 넘치는 한국인 여대생, "
    "몸은 오른쪽으로 10도 정도 틀고 얼굴은 보는 사람을 향함, "
    "양손을 허리에 올린 당당한 파워 포즈, 손가락은 옷을 잡지 않고 허리에 자연스럽게 얹음, "
    "모래시계형 곡선을 가진 탄탄한 배구선수 체형, "
    "유니폼을 팽팽하게 당기는 큰 둥근 상체 볼륨, 잘록하고 탄탄한 허리, "
    "자연스러운 운동선수다운 골반, 매우 짧은 남색 돌핀 쇼츠 아래로 보이는 탄탄한 허벅지, "
    "흰색 바탕에 주황색과 남색 포인트 라인이 있는 민소매 배구 유니폼 착용, "
    "가슴에 ETAURS 팀명과 등번호 19가 인쇄되어 있음, 칼라 근처 로고 없음, "
    "왼팔에만 검은 암슬리브 하나를 착용하고 오른팔은 장신구 없이 완전히 맨팔, "
    "치아가 보이는 밝고 시원한 미소, 에너지 넘치는 스포티한 소녀 분위기, "
    "허벅지 중간에서 잘리는 구도, 1024x1024 해상도, "
    "단색 밝은 마젠타 핑크 크로마키 배경, 부드러운 확산 정면 조명과 은은한 림라이트"
)

negative = (
    "저퀄리티, 흐릿함, 손가락 이상, 변형된 손, 3D 렌더링, 실사 사진, "
    "여러 각도, 여러 캐릭터, 잘림, 워터마크, 서명, 텍스트, 글자, "
    "로고, 이름표, 완장, 배경 포함, 전신, 하반신 과다 노출, "
    "파티클 효과, 빛 입자, 특수 효과, 후광, 광선, 과노출"
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
