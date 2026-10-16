const fs = require('fs');
const path = require('path');

// .env에서 API 키 읽기
const envPath = path.join(__dirname, '..', '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const API_KEY = envContent.match(/GEMINI_API_KEY=(.+)/)?.[1]?.trim();
if (!API_KEY) { console.error('.env에서 GEMINI_API_KEY를 찾을 수 없습니다'); process.exit(1); }

const charDir = path.join(__dirname, 'assets', 'images', 'characters');
const bgDir = path.join(__dirname, 'assets', 'images', 'background');

// 레퍼런스 이미지 로드
const mcBack = fs.readFileSync(path.join(charDir, 'backup', 'mc_back_v2_1.png')).toString('base64');
const mcSide = fs.readFileSync(path.join(charDir, 'backup', 'mc_side_v1_3.png')).toString('base64');
const seyounRef = fs.readFileSync(path.join(charDir, 'seyoun_normal.png')).toString('base64');
const yunaRef = fs.readFileSync(path.join(charDir, 'backup', 'yuna_normal_v22_1.png')).toString('base64');
const dainRef = fs.readFileSync(path.join(charDir, 'dain_normal.png')).toString('base64');
const teacherRef = fs.readFileSync(path.join(charDir, 'teacher_normal.png')).toString('base64');
const nurseRef = fs.readFileSync(path.join(charDir, 'nurse_normal.png')).toString('base64');

const DAIN_HAIR_LOCK = '귀가 완전히 보이고 목덜미가 드러나는 갈색 초숏컷 픽시컷 머리, 짧고 가벼운 앞머리, 머리끝이 턱선이나 목까지 내려오지 않음, 단발머리/숏밥/보브컷/턱선 길이 머리/어깨에 닿는 머리 금지';

const endings = [
  {
    name: 'ending_perfect_seoyeon',
    refs: [mcSide, seyounRef],
    prompt: `애니메이션 비주얼 노벨 이벤트 CG를 생성한다. 1024x1024. 두 캐릭터 레퍼런스를 사용해 외형 일관성을 유지한다.

장면: 석양의 학교 옥상. 분홍빛 구름이 있는 금빛 주황색 하늘.
남학생은 왼쪽에 서 있으며, 레퍼런스 1의 외형을 따른다: 짧은 다크 브라운 머리, 남색 블레이저 교복. 측면/후면 앵글로 보이고 얼굴은 보이지 않으며, 턱선과 옆모습만 보인다.
여학생은 오른쪽에 있으며, 레퍼런스 2의 외형을 따른다: 긴 검은 웨이브 머리, 둥근 검은 안경, 남색 블레이저 교복. 그녀는 두 팔로 남학생의 팔을 감싸고 그의 어깨에 머리를 기대고 있다. 행복한 미소로 반쯤 감긴 눈을 하고 남학생을 올려다보며, 양볼에는 옅은 홍조가 있다.
석양 역광이 두 사람의 머리카락을 금빛으로 빛나게 하고, 바람이 그녀의 긴 검은 머리를 부드럽게 흔든다.
옥상에서의 따뜻하고 로맨틱한 분위기, 친밀한 커플의 순간.
애니메이션 셀 셰이딩 스타일, 텍스트 없음, 워터마크 없음.`
  },
  {
    name: 'ending_perfect_yuna',
    refs: [mcBack, yunaRef],
    prompt: `애니메이션 비주얼 노벨 이벤트 CG를 생성한다. 1024x1024. 두 캐릭터 레퍼런스를 사용해 외형 일관성을 유지한다.

장면: 밤의 어두운 비밀 은신처. 버려진 옥상이나 외딴 공간이며, 틈 사이로 달빛이 들어온다.
남학생은 레퍼런스 1의 외형을 따른다: 짧은 다크 브라운 머리, 남색 블레이저 교복. 그는 보는 사람에게 등을 보인 채 서 있고 뒷모습이 보인다.
그 뒤에서 여학생이 조용히 백허그를 하고 있다. 여학생은 레퍼런스 2의 외형을 따른다: 어깨 길이의 은백색 울프컷 머리, 붉은 눈, 창백한 피부, 팔과 목의 검은 잉크 문신, 검은 셔츠 위 남색 블레이저. 그녀는 남학생의 허리를 두 팔로 감싸고, 얼굴을 그의 등에 묻은 채 눈을 감고 있다. 문신이 있는 팔이 남색 블레이저 위로 선명하게 보인다.
달빛이 그녀의 은색 머리카락을 비춘다. 차가운 소녀가 처음으로 경계를 푸는, 조용하고 친밀한 순간.
애니메이션 셀 셰이딩 스타일, 텍스트 없음, 워터마크 없음.`
  },
  {
    name: 'ending_perfect_dain',
    refs: [mcSide, dainRef],
    prompt: `애니메이션 비주얼 노벨 이벤트 CG를 생성한다. 1024x1024. 두 캐릭터 레퍼런스를 사용해 외형 일관성을 유지한다.

장면: 방과 후 학교 체육관. 높은 창문으로 주황색 석양빛이 들어오고, 나무 마룻바닥에는 긴 그림자가 드리운다.
여학생은 레퍼런스 2의 외형을 따른다: ${DAIN_HAIR_LOCK}, 밝은 초록색 눈, 그을린 피부, 주황색 라인이 있는 흰색 ETAURS 19번 배구 유니폼, 왼팔 검은 암슬리브. 그녀는 뛰어올라 남학생의 목을 감싸 안고 있다. 이마에는 땀방울이 있고, 넓고 에너지 넘치는 미소로 웃고 있다.
남학생은 레퍼런스 1의 외형을 따른다: 짧은 다크 브라운 머리, 남색 블레이저 교복. 그는 그녀를 받아 안고 있으며 측면에서 보인다. 얼굴 전체는 보이지 않고 턱선과 옆모습만 보인다. 당황했지만 행복한 표정.
근처 바닥에는 배구공이 굴러가고 있다. 석양 역광이 따뜻한 실루엣을 만든다.
에너지 넘치고 청춘다운 스포츠 로맨스 분위기.
애니메이션 셀 셰이딩 스타일, 텍스트 없음, 워터마크 없음.`
  },
  {
    name: 'ending_bittersweet',
    refs: [mcBack],
    prompt: `애니메이션 비주얼 노벨 이벤트 CG를 생성한다. 1024x1024. 이 캐릭터 레퍼런스는 남학생의 외형에 사용한다.

장면: 해질녘 비 내리는 학교 정문. 회색 하늘과 거센 비.
남학생은 레퍼런스의 외형을 따른다: 짧은 다크 브라운 머리, 남색 블레이저 교복. 그는 중앙에 서 있고 뒷모습으로 보이며, 투명 우산을 들고 있다.
학교 정문 너머 먼 곳에는 흐릿한 여성 실루엣이 비를 맞으며 멀어지고 있다. 특정 캐릭터가 아니라 모호한 형체여야 한다.
젖은 도로에는 가로등과 희미한 네온빛이 반사되고, 바닥에는 물웅덩이가 있다.
외롭고 쓸쓸한 이별 분위기. 비와 고독.
애니메이션 셀 셰이딩 스타일, 텍스트 없음, 워터마크 없음.`
  },
  {
    name: 'ending_true_teacher',
    refs: [teacherRef],
    prompt: `애니메이션 비주얼 노벨 이벤트 CG를 생성한다. 1024x1024. 이 캐릭터 레퍼런스는 여성 교사의 외형에 사용한다.

장면: 늦은 오후 따뜻한 햇살이 들어오는 조용한 창가 카페.
작은 테이블에 두 사람이 앉아 있다. 왼쪽에는 남학생의 손과 남색 블레이저 소매만 보이며, 테이블 너머로 손을 뻗어 여성 교사의 손을 부드럽게 잡고 있다.
여성 교사는 레퍼런스의 외형을 따른다: 반묶음 스타일의 갈색 긴 웨이브 머리, 따뜻한 갈색 눈, 밝은 피부, 흰 블라우스 위 베이지 니트 카디건. 그녀는 맞잡은 손을 내려다보고 있으며, 양볼이 진하게 붉어져 있다. 다른 손으로 입을 가리고 수줍게 당황한 채, 부끄러운 미소가 살짝 비친다.
테이블 위에는 커피 두 잔과 케이크가 있다. 햇빛이 그녀의 머리카락을 금빛으로 빛나게 한다.
교사와 학생 사이의 비밀스러운 손잡기, 금지된 선을 넘는 두근거림. 따뜻하지만 긴장감 있는 분위기.
애니메이션 셀 셰이딩 스타일, 텍스트 없음, 워터마크 없음.`
  },
  {
    name: 'ending_true_nurse',
    refs: [mcSide, nurseRef],
    prompt: `애니메이션 비주얼 노벨 이벤트 CG를 생성한다. 1024x1024. 두 캐릭터 레퍼런스를 사용해 외형 일관성을 유지한다.

장면: 밤의 보건 선생님 아파트 거실. 따뜻한 간접 조명, 창문 밖 도시 야경.
두 사람이 소파에 앉아 있다. 남학생은 레퍼런스 1의 외형을 따른다: 짧은 다크 브라운 머리, 블레이저를 벗고 흰 드레스 셔츠 차림. 왼쪽에 앉아 있으며 측면/후면에서 보이고 얼굴 전체는 보이지 않는다.
여성 보건 선생님은 레퍼런스 2의 외형을 따른다: 보라색 숏밥 머리, 안경, 밝은 피부. 흰 가운 대신 편안한 니트 스웨터와 긴 스커트 같은 캐주얼 옷을 입고 있으며, 남학생의 어깨에 기대 잠들어 있다. 안경은 살짝 비뚤어져 있고 무릎 위에는 담요가 덮여 있다.
소파 팔걸이에는 머그잔 두 개가 있고, TV 화면이 희미하게 빛난다.
아늑하고 따뜻하며 안전한 분위기. 두 사람이 있는 그대로 쉴 수 있는 공간.
애니메이션 셀 셰이딩 스타일, 텍스트 없음, 워터마크 없음.`
  },
  {
    name: 'ending_harem',
    refs: [mcSide, seyounRef, yunaRef, dainRef],
    prompt: `애니메이션 비주얼 노벨 이벤트 CG를 생성한다. 1024x1024. 캐릭터 레퍼런스들을 사용한다.

장면: 밝은 낮, 파란 하늘 아래 학교 마당 벤치.
중앙: 남학생은 레퍼런스 1의 외형을 따른다. 짧은 다크 브라운 머리와 남색 블레이저를 입고 벤치에 앉아 있으며, 당황하고 압도된 표정이다. 얼굴은 약간 비스듬한 각도로 보이고 턱선은 보이지만 완전 정면은 아니다.
그를 세 명의 소녀가 둘러싸고 있다.
왼쪽: 레퍼런스 2의 긴 검은 웨이브 머리와 둥근 안경을 쓴 소녀가 팔짱을 끼고 날카로운 질투 어린 눈빛을 보낸다.
오른쪽: 레퍼런스 3의 은백색 울프컷 머리, 붉은 눈, 팔 문신이 있는 소녀가 무표정하고 차가운 눈빛으로 서 있다.
뒤쪽: 레퍼런스 4의 ${DAIN_HAIR_LOCK}, 초록색 눈, 배구 유니폼을 입은 소녀가 남학생의 어깨에 팔을 걸치고 활짝 웃고 있다.
코미디처럼 혼란스러운 하렘 상황. 밝고 유쾌한 분위기.
애니메이션 셀 셰이딩 스타일, 텍스트 없음, 워터마크 없음.`
  },
  {
    name: 'ending_alone',
    refs: [mcBack],
    prompt: `애니메이션 비주얼 노벨 이벤트 CG를 생성한다. 1024x1024. 이 캐릭터 레퍼런스를 사용한다.

장면: 밤의 어두운 아파트 방. 커튼 사이로 도시 불빛이 희미하게 보인다.
남학생은 레퍼런스의 외형을 따른다: 짧은 다크 브라운 머리. 책상에 혼자 앉아 있으며 뒷모습으로 보인다. 남색 블레이저는 벗어서 의자 등받이에 걸쳐 두었고, 흰 드레스 셔츠만 입고 있다. 한 손으로 턱을 괴고 창밖을 바라본다.
책상 위에는 꺼진 휴대폰 화면과 빈 컵이 있다. 방은 텅 비고 조용하다.
외롭고 생각에 잠긴 고독. 혼자 남겨진 침묵.
애니메이션 셀 셰이딩 스타일, 텍스트 없음, 워터마크 없음.`
  },
  {
    name: 'ending_friend',
    refs: [mcSide, seyounRef, yunaRef, dainRef, teacherRef],
    prompt: `애니메이션 비주얼 노벨 이벤트 CG를 생성한다. 1024x1024. 캐릭터 레퍼런스들을 사용한다.

장면: 졸업식 날 교실. 창문으로 밝은 봄 햇살이 들어온다. 칠판에는 졸업 낙서가 있고, 책상 위에는 졸업장과 꽃다발이 놓여 있다.
텅 빈 교실에서 다섯 명이 단체 셀카를 찍고 있다.
중앙: 남학생은 레퍼런스 1의 외형을 따른다. 짧은 다크 브라운 머리와 남색 블레이저를 입고 휴대폰을 들어 셀카를 찍고 있으며, 약간 비스듬한 각도라 얼굴이 일부만 보인다.
그 옆: 레퍼런스 2의 긴 검은 웨이브 머리와 안경을 쓴 소녀가 따뜻하게 웃고 있다.
다른 쪽: 레퍼런스 3의 은백색 울프컷 머리와 붉은 눈을 가진 소녀가 아주 희미하게 거의 미소 같은 표정을 짓고 있다.
가까운 곳: 레퍼런스 4의 ${DAIN_HAIR_LOCK}와 초록색 눈을 가진 소녀가 크게 웃으며 브이 사인을 하고 있다.
그들 뒤: 레퍼런스 5의 갈색 긴 웨이브 머리 여성 교사가 베이지 카디건을 입고 브이 사인을 하고 있다.
모두 자연스럽고 행복한 미소. 따뜻한 우정과 졸업의 추억. 밝고 청춘다운 분위기.
애니메이션 셀 셰이딩 스타일, 텍스트 없음, 워터마크 없음.`
  }
];

async function generateCG(ending) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;

  const parts = ending.refs.map(ref => ({
    inlineData: { mimeType: 'image/png', data: ref }
  }));
  parts.push({ text: ending.prompt });

  const body = {
    contents: [{ parts }],
    generationConfig: {
      responseModalities: ['TEXT', 'IMAGE']
    }
  };

  console.log(`[${ending.name}] Generating...`);

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const err = await response.text();
    console.error(`[${ending.name}] API error:`, err.slice(0, 300));
    return;
  }

  const data = await response.json();
  let saved = 0;
  for (const c of (data.candidates || [])) {
    for (const p of (c.content?.parts || [])) {
      if (p.inlineData) {
        saved++;
        const outPath = path.join(bgDir, `${ending.name}.png`);
        fs.writeFileSync(outPath, Buffer.from(p.inlineData.data, 'base64'));
        console.log(`[${ending.name}] Saved`);
      }
    }
  }
  if (saved === 0) console.log(`[${ending.name}] No image returned`);
}

async function main() {
  for (const e of endings) {
    await generateCG(e);
  }
  console.log('All ending CGs done!');
}

main().catch(console.error);
