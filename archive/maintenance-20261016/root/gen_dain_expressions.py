"""다인 표정 변형 생성 - Gemini Flash Image 편집 (레퍼런스: dain_normal_edited_1.png)"""
import requests, base64, os, json, time

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

# 레퍼런스 이미지 읽기
ref_path = os.path.join(os.path.dirname(__file__), "assets", "images", "characters", "dain_normal_edited_1.png")
with open(ref_path, "rb") as f:
    img_b64 = base64.b64encode(f.read()).decode("utf-8")

expressions = {
    "dain_active": (
        "이 애니메이션 캐릭터의 표정과 포즈를 편집한다. 머리카락은 땀에 살짝 젖어 이마와 관자놀이에 붙어 있고, "
        "투지가 타오르는 강렬하고 열정적인 눈빛, 이마와 목의 땀방울, 운동으로 붉게 상기된 피부, "
        "살짝 젖어 몸에 달라붙는 유니폼, 한 팔을 들어 올린 승리의 주먹 포즈로 변경한다. "
        "격렬한 운동 직후 거친 숨이 느껴지는 열정적인 표정. 공, 배구공, 운동 장비는 넣지 않는다. "
        "같은 캐릭터 디자인, ETAURS 19번 의상, 마젠타 배경, 아트 스타일을 유지한다. 1024x1024로 한 장 출력한다."
    ),
    "dain_shy": (
        "이 애니메이션 캐릭터의 표정과 포즈를 편집한다. 양손을 가슴 앞에 모은 수줍게 움츠린 포즈, "
        "시선을 피하듯 아래를 내려다보는 초록색 눈, 양볼이 밝은 붉은색으로 깊게 물든 홍조, "
        "긴장해서 입꼬리가 어색하게 올라간 수줍은 미소로 변경한다. 평소의 당당한 성격과 극적으로 대비되게 표현한다. "
        "같은 캐릭터 디자인, ETAURS 19번 의상, 마젠타 배경, 아트 스타일을 유지한다. 1024x1024로 한 장 출력한다."
    ),
    "dain_laugh": (
        "이 애니메이션 캐릭터의 표정만 편집한다. 눈은 행복한 초승달 모양으로 꼭 감고, "
        "입은 크게 벌려 치아가 보이는 호탕한 웃음, 밝게 상기된 볼, "
        "한 손은 허리에 얹고 다른 손은 자연스럽게 둔 상태, 웃음 동작으로 머리카락이 살짝 튀는 느낌으로 변경한다. "
        "진심 어린 웃음이 터져 나오는 모습. "
        "같은 캐릭터 디자인, ETAURS 19번 의상, 마젠타 배경, 아트 스타일을 유지한다. 1024x1024로 한 장 출력한다."
    ),
    "dain_angry": (
        "이 애니메이션 캐릭터의 표정과 포즈를 편집한다. 초록색 눈을 크게 뜨고 눈꼬리가 날카롭게 올라간 노려보는 눈빛, "
        "이를 드러내며 으르렁거리는 공격적인 화난 표정, 분노로 붉어진 볼, 깊게 찡그린 미간, "
        "꽉 쥔 주먹, 운동선수다운 직선적인 분노로 변경한다. "
        "같은 캐릭터 디자인, ETAURS 19번 의상, 마젠타 배경, 아트 스타일을 유지한다. 1024x1024로 한 장 출력한다."
    ),
    "dain_sad": (
        "이 애니메이션 캐릭터의 표정과 포즈를 편집한다. 초록색 눈은 축 처지고 눈꼬리가 내려가며 하이라이트가 흐려진 상태, "
        "입꼬리가 내려간 슬픈 표정, 양팔은 힘없이 옆으로 늘어지고 어깨가 처진 기운 없는 자세, "
        "평소의 에너지가 완전히 사라져 작고 위축되어 보이는 모습으로 변경한다. "
        "같은 캐릭터 디자인, ETAURS 19번 의상, 마젠타 배경, 아트 스타일을 유지한다. 1024x1024로 한 장 출력한다."
    ),
    "dain_pout": (
        "이 애니메이션 캐릭터의 표정과 포즈를 편집한다. 초록색 눈은 짜증 섞인 곁눈질로 옆을 바라보고, "
        "입술을 삐죽 내밀며 양볼을 불만스럽게 부풀리고, 팔짱을 낀 자세, "
        "고개를 살짝 돌린 반항적인 포즈와 운동선수다운 솔직한 삐침으로 변경한다. "
        "같은 캐릭터 디자인, ETAURS 19번 의상, 마젠타 배경, 아트 스타일을 유지한다. 1024x1024로 한 장 출력한다."
    ),
    "dain_sweat": (
        "이 애니메이션 캐릭터의 표정만 편집한다. 관자놀이에 식은땀 한 방울, "
        "한 손으로 흰 수건을 들고 얼굴 한쪽을 닦는 모습, 당황해서 붉어진 볼, "
        "밝은 척하려 하지만 입술이 살짝 떨려 가면이 깨지는 느낌, "
        "초록색 눈에는 평소와 다른 흔들림과 불안감이 보이게 변경한다. "
        "같은 캐릭터 디자인, ETAURS 19번 의상, 마젠타 배경, 아트 스타일을 유지한다. 1024x1024로 한 장 출력한다."
    ),
    "dain_bikini": (
        "이 애니메이션 캐릭터의 의상만 편집한다. 의상을 ETAURS 로고가 있는 남색과 흰색 투톤 스포츠 비키니로 변경한다. "
        "머리카락은 젖어서 이마에 붙어 있고, 피부에는 물방울이 맺혀 있다. "
        "자신감 있는 시원한 미소, 밝고 스포티한 운동선수 수영복 분위기. 암슬리브는 제거한다. "
        "같은 캐릭터 얼굴, 머리 스타일, 신체 비율, 마젠타 배경, 아트 스타일을 유지한다. 1024x1024로 한 장 출력한다."
    ),
}

url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key={api_key}"
headers = {"Content-Type": "application/json"}
out_dir = os.path.join(os.path.dirname(__file__), "assets", "images", "characters")

for name, edit_prompt in expressions.items():
    print(f"\nGenerating {name}...")
    payload = {
        "contents": [{
            "parts": [
                {"inlineData": {"mimeType": "image/png", "data": img_b64}},
                {"text": edit_prompt}
            ]
        }],
        "generationConfig": {
            "responseModalities": ["TEXT", "IMAGE"]
        }
    }

    try:
        resp = requests.post(url, json=payload, headers=headers, timeout=120)
        if resp.status_code == 200:
            data = resp.json()
            for candidate in data.get("candidates", []):
                for part in candidate.get("content", {}).get("parts", []):
                    if "inlineData" in part:
                        img_data = base64.b64decode(part["inlineData"]["data"])
                        path = os.path.join(out_dir, f"{name}_new.png")
                        with open(path, "wb") as f:
                            f.write(img_data)
                        print(f"  Saved: {path} ({len(img_data)} bytes)")
        else:
            print(f"  Failed ({resp.status_code}): {resp.text[:200]}")
    except Exception as e:
        print(f"  Error: {e}")

    time.sleep(2)  # rate limit

print("\nDone!")
