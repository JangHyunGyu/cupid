const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBifxhf2ju_WBE-neT9D0wf4rZrjeAJ9kc';

const NEGATIVE = '저퀄리티, 흐릿한, 손가락 이상, 손 기형, 3D 렌더링, 실사 사진, 여러 각도, 여러 인물, 잘린 구도, 워터마크, 서명, 텍스트, 글자, 문자, 로고, 명찰, 완장, 배경 포함, 전신, 하반신 포함, 파티클 효과, 빛 입자, 이펙트, 후광, 광선 효과, 빛줄기, 반실사, 세미리얼, 사실적 피부 질감, 그라데이션 음영, 부드러운 에어브러시 셰이딩, 목걸이, 초커, 넥리스';

// PROMPTS_READY.md 원본 기반 + 스타일 통일 키워드 보강
const targets = [
  {
    name: 'teacher_normal',
    version: 'v9',
    prompt: `비주얼 노벨 캐릭터 스프라이트, 깔끔하고 굵은 선화, 선명한 디지털 셀 채색, 뚜렷한 명암 경계선, 플랫 컬러 채색, 애니메이션 셀화 스타일, 갈색 웨이브 긴머리, 따뜻한 갈색 눈, 밝은 피부톤, 얼굴 폭의 28% 크기의 부드럽고 큰 눈, 눈 하나 너비의 눈 간격, 오똑한 콧날, 얼굴 폭의 20% 크기의 풍성한 입술, 7등신, 연애 시뮬레이션 아트, 아름다운 한국인 여성 교사, 몸체 정면에서 약 10도 오른쪽으로 비스듬히 선 자세, 얼굴은 정면에서 약 5도 기울어진 각도, 단정한 교사 복장 아래 숨겨진 글래머 체형, 풍만하고 볼륨감 넘치는 가슴, 잘록하게 들어간 허리, 둥글게 올라온 엉덩이, 모래시계 실루엣, 어깨 아래까지 내려오는 갈색 웨이브 긴머리 윤기 있게 찰랑이며 한쪽으로 살짝 넘김 위에서 묶은 하프업 헤어, 따뜻하고 부드러운 갈색 눈에 금빛 하이라이트, 건강하고 밝은 피부톤, 베이지 니트 가디건을 흰색 블라우스 위에 착용 가디건 단추를 열어 블라우스와 가슴 라인이 보임, 카키색 하이웨이스트 펜슬 스커트 무릎 바로 위 길이 힙라인을 따라 타이트하게 감싸는 실루엣, 팔꿈치를 자연스럽게 굽힌 채 양손을 배 앞에서 가볍게 모은 편안한 자세, 따뜻한 미소 입꼬리가 부드럽게 올라감, 전문적이면서 친근한 담임교사 분위기, 상반신 초상화, 1024x1024 해상도, 단색 밝은 초록색 크로마키 배경, 정면 부드러운 확산 조명`
  },
  {
    name: 'yuna_normal',
    version: 'v8',
    prompt: `비주얼 노벨 캐릭터 스프라이트, 깔끔하고 굵은 선화, 선명한 디지털 셀 채색, 뚜렷한 명암 경계선, 플랫 컬러 채색, 애니메이션 셀화 스타일, 은백색 숏미디움 머리, 짙은 붉은 갈색 눈 적안, 창백한 피부톤, 얼굴 폭의 26% 크기의 가늘고 날카로운 눈, 눈 하나 너비의 눈 간격, 날렵한 콧날, 얼굴 폭의 16% 크기의 얇은 입술, 6.5등신, 연애 시뮬레이션 아트, 미스터리한 한국인 여고생, 몸체 정면에서 약 10도 왼쪽으로 비스듬히 선 자세, 얼굴은 정면에서 약 5도 기울어진 각도, 슬림하고 균형 잡힌 체형, 은백색 숏에서 미디움 길이 지저분하게 흘러내리는 머리카락 끝이 어깨를 스침, 짙은 붉은 갈색 눈에 세로로 긴 하이라이트가 차갑게 빛남, 창백하고 투명한 피부톤, 양쪽 팔뚝과 손등에 검은 잉크 문신 타투가 촘촘하게 새겨져 있음 한자 문자와 기하학적 문양 패턴이 팔 전체를 덮고 있음, 교복 블레이저 소매를 팔꿈치까지 걷어올려 양팔의 타투가 선명하게 노출됨, 목에는 아무것도 착용하지 않은 맨 목, 양쪽 귀에 붉은 귀걸이, 네이비 블레이저 교복이지만 안에 어두운 그레이에서 블랙 톤의 셔츠 착용, 네이비 플리츠 스커트, 입꼬리가 살짝 내려간 무표정 감정이 읽히지 않는 얼굴, 차갑고 무관심한 다크 고스 분위기, 상반신 초상화, 1024x1024 해상도, 단색 밝은 초록색 크로마키 배경, 정면 부드러운 확산 조명`
  }
];

async function generateImage(target) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-ultra-generate-001:predict?key=${API_KEY}`;

  const body = {
    instances: [{ prompt: target.prompt + '\n\nNegative prompt: ' + NEGATIVE }],
    parameters: {
      sampleCount: 3,
      aspectRatio: '1:1',
      outputOptions: { mimeType: 'image/png' }
    }
  };

  console.log(`[${target.name}] Generating...`);

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const err = await response.text();
    console.error(`[${target.name}] API error:`, err);
    return;
  }

  const data = await response.json();
  const predictions = data.predictions || [];

  console.log(`[${target.name}] Got ${predictions.length} results`);

  for (let i = 0; i < predictions.length; i++) {
    const imgData = predictions[i].bytesBase64Encoded;
    if (!imgData) continue;
    const outPath = path.join(__dirname, 'assets', 'images', 'characters', 'backup', `${target.name}_${target.version}_${i + 1}.png`);
    fs.writeFileSync(outPath, Buffer.from(imgData, 'base64'));
    console.log(`[${target.name}] Saved: ${outPath}`);
  }
}

async function main() {
  await Promise.all(targets.map(t => generateImage(t)));
  console.log('Done!');
}

main().catch(console.error);
