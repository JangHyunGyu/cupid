const fs = require('fs');
const path = require('path');

const API_KEY = fs.readFileSync(path.join(__dirname, '..', '.env'), 'utf8')
    .split('\n').find(l => l.startsWith('GEMINI_API_KEY='))
    ?.split('=')[1]?.trim();

if (!API_KEY) { console.error('API key not found'); process.exit(1); }

const DAIN_HAIR_LOCK = '귀가 완전히 보이고 목덜미가 드러나는 매우 짧은 갈색 초숏컷 픽시컷 머리, 짧고 가벼운 앞머리, 머리끝이 턱선이나 목까지 내려오지 않음, 단발머리/숏밥/보브컷/턱선 길이 머리/어깨에 닿는 머리 절대 금지';

const CG_PROMPTS = [
    // ── 다인 엔딩 CG (normal 레퍼런스 기반 재생성) ──
    {
        id: 'ending_perfect_dain',
        output: 'assets/images/background/ending_perfect_dain.png',
        refImage: 'assets/images/characters/dain_normal.webp',
        prompt: `이 캐릭터를 엄격한 레퍼런스로 사용하고 정확한 외형을 유지한다: ${DAIN_HAIR_LOCK}, 밝은 초록색 눈, 건강하게 그을린 피부, 유니폼을 팽팽하게 당기는 매우 큰 상체 볼륨과 동일한 체형 비율, 주황색과 남색 라인이 있는 흰색 ETAURS 19번 배구 유니폼, 남색 돌핀 핫팬츠, 왼팔에만 검은 암슬리브 착용, 오른팔은 맨팔. 애니메이션 비주얼 노벨 이벤트 CG를 생성한다: 석양빛이 들어오는 체육관 장면. 높은 체육관 창문으로 주황빛 햇살이 들어와 나무 마룻바닥에 긴 그림자를 드리운다. 그녀는 남학생의 품으로 뛰어들어 크게 포옹하고 있으며 두 다리가 바닥에서 떠 있다. 남학생은 짧은 다크 브라운 머리와 남색 블레이저 교복을 입고, 얼굴은 턱선과 옆모습만 보이며 웃으면서 그녀를 받아 안는다. 그녀의 이마에는 땀방울이 있고, 치아가 보이는 밝고 에너지 넘치는 미소. 체육관 바닥에는 배구공이 굴러간다. 따뜻한 금빛 역광이 두 사람의 실루엣을 만든다. 에너지 넘치는 청춘 로맨스, 기쁜 포옹. 1024x1024, 애니메이션 스타일, 텍스트 없음, 워터마크 없음.`
    },
    {
        id: 'ending_true_dain',
        output: 'assets/images/background/ending_true_dain.png',
        refImage: 'assets/images/characters/dain_normal.webp',
        prompt: `이 캐릭터를 엄격한 레퍼런스로 사용하고 정확한 외형을 유지한다: ${DAIN_HAIR_LOCK}, 밝은 초록색 눈, 건강하게 그을린 피부, 유니폼을 팽팽하게 당기는 매우 큰 상체 볼륨과 동일한 체형 비율, 주황색과 남색 라인이 있는 흰색 ETAURS 19번 배구 유니폼, 남색 돌핀 핫팬츠, 왼팔에만 검은 암슬리브 착용, 오른팔은 맨팔. 애니메이션 비주얼 노벨 이벤트 CG를 생성한다: 석양의 체육관 벽가 장면. 두 사람이 체육관 바닥에 나란히 앉아 벽에 기대고 있다. 그녀는 눈을 부드럽게 감은 채 남학생의 어깨에 머리를 기대고, 무릎 위에 배구공을 안고 있다. 남학생은 짧은 다크 브라운 머리와 남색 블레이저 교복을 입고, 얼굴은 옆모습과 턱선만 보이며 그녀를 부드럽게 내려다본다. 체육관 창문으로 따뜻한 주황색 석양빛이 들어온다. 배경에는 배구 네트가 있다. 조용하고 친밀하며 평화로운 순간. 1024x1024, 애니메이션 스타일, 텍스트 없음, 워터마크 없음.`
    },
    {
        id: 'ending_good_dain',
        output: 'assets/images/background/ending_good_dain.png',
        refImage: 'assets/images/characters/dain_normal.webp',
        prompt: `이 캐릭터를 엄격한 레퍼런스로 사용하고 정확한 외형을 유지한다: ${DAIN_HAIR_LOCK}, 밝은 초록색 눈, 건강하게 그을린 피부, 유니폼을 팽팽하게 당기는 매우 큰 상체 볼륨과 동일한 체형 비율, 주황색과 남색 라인이 있는 흰색 ETAURS 19번 배구 유니폼, 남색 돌핀 핫팬츠, 왼팔에만 검은 암슬리브 착용, 오른팔은 맨팔. 애니메이션 비주얼 노벨 이벤트 CG를 생성한다: 석양의 학교 정문. 그녀와 남학생이 학교 정문에서 서로 마주 보고 서 있으며, 둘 다 밝게 웃으면서 주먹 인사를 하고 있다. 남학생은 짧은 다크 브라운 머리와 남색 블레이저 교복. 그녀는 어깨에 빨간 스포츠 가방을 메고 있다. 학교 건물 실루엣 뒤로 주황색과 보라색 구름이 있는 따뜻한 석양 하늘. 밝고 에너지 넘치는 우정에서 사랑으로 이어지는 분위기. 1024x1024, 애니메이션 스타일, 텍스트 없음, 워터마크 없음.`
    },
    {
        id: 'ending_confess_fail_dain',
        output: 'assets/images/background/ending_confess_fail_dain.png',
        refImage: 'assets/images/characters/dain_normal.webp',
        prompt: `이 캐릭터를 엄격한 레퍼런스로 사용하고 정확한 외형을 유지한다: ${DAIN_HAIR_LOCK}, 밝은 초록색 눈, 건강하게 그을린 피부, 유니폼을 팽팽하게 당기는 매우 큰 상체 볼륨과 동일한 체형 비율, 주황색과 남색 라인이 있는 흰색 ETAURS 19번 배구 유니폼, 남색 돌핀 핫팬츠, 왼팔에만 검은 암슬리브 착용, 오른팔은 맨팔. 애니메이션 비주얼 노벨 이벤트 CG를 생성한다: 석양의 야외 공원. 그녀는 한 손으로 눈가의 눈물을 닦고, 다른 손으로 작별 인사를 하며 손을 흔든다. 눈물이 고인 눈이지만 애써 씩씩한 미소를 짓고 있다. 전경에는 짧은 다크 브라운 머리와 남색 블레이저를 입은 남학생의 뒷모습 실루엣이 그녀를 바라보고 있다. 석양 하늘, 따뜻하지만 쓸쓸한 조명. 달콤쌉싸름한 이별 분위기. 1024x1024, 애니메이션 스타일, 텍스트 없음, 워터마크 없음.`
    },
    {
        id: 'nurse_home_event1',
        output: 'assets/images/background/nurse_home_event1.png',
        refImage: 'assets/images/characters/nurse_normal.webp',
        prompt: `이 캐릭터를 레퍼런스로 사용해 애니메이션 비주얼 노벨 이벤트 CG 장면을 생성한다. 캐릭터의 정확한 외형을 유지한다: 턱선에서 날카롭게 끊기는 애쉬 라벤더 숏밥 머리, 갈색 눈, 둥근 안경, 입가의 점, 글래머러스하고 풍만한 체형. 장면은 정면 카메라 앵글로, 보는 사람을 직접 바라보는 구도. 밤의 아파트 거실에서 아늑한 소파에 앉아 있으며, 깊은 브이넥 흰색 상의 위에 헐렁한 분홍색 카디건을 걸치고, 편안한 검은색 캐주얼 쇼츠를 입고 있다. 치마가 아니며, 배 부분은 가려져 있고 비치지 않는다. 김이 나는 커피잔을 양손으로 들고 있으며, 안경은 만지지 않는다. 따뜻한 스탠드 조명, 뒤쪽에는 밤 창문 풍경. 한쪽 입꼬리가 살짝 올라간 부드럽고 의미심장한 미소. 아늑하고 편안하며 친밀한 분위기. 1024x1024, 애니메이션 스타일, 텍스트 없음, 워터마크 없음.`
    },
    {
        id: 'dain_hurt_event1',
        output: 'assets/images/background/dain_hurt_event1.png',
        refImage: 'assets/images/characters/dain_normal.webp',
        prompt: `이 캐릭터를 엄격한 레퍼런스로 사용하고 정확한 외형을 유지한다: ${DAIN_HAIR_LOCK}, 밝은 초록색 눈, 건강하게 그을린 피부, 유니폼을 팽팽하게 당기는 매우 큰 상체 볼륨과 동일한 체형 비율, 주황색과 남색 라인이 있는 흰색 ETAURS 19번 배구 유니폼, 남색 돌핀 핫팬츠, 왼팔에만 검은 암슬리브 착용, 오른팔은 맨팔. 캐릭터가 한 명만 등장하는 애니메이션 비주얼 노벨 이벤트 CG 장면을 생성한다. 그녀는 체육관 나무 마룻바닥에 앉아 있고, 두 다리가 보이며 앞으로 뻗어 있다. 양손으로 오른쪽 무릎을 붙잡고 고통스러워한다. 눈을 질끈 감고, 땀방울이 있으며, 이를 악문 고통스러운 표정. 가까운 바닥에는 배구공이 놓여 있다. 배경은 배구 네트가 있는 실내 체육관. 드라마틱한 감정 조명. 장면에는 한 사람만 등장한다. 1024x1024, 애니메이션 스타일, 텍스트 없음, 워터마크 없음.`
    },
    {
        id: 'dain_depression_event1',
        output: 'assets/images/background/dain_depression_event1.png',
        refImage: 'assets/images/characters/dain_normal.webp',
        prompt: `이 캐릭터를 엄격한 레퍼런스로 사용하고 정확한 외형을 유지한다: ${DAIN_HAIR_LOCK}, 밝은 초록색 눈, 건강하게 그을린 피부, 유니폼을 팽팽하게 당기는 매우 큰 상체 볼륨과 동일한 체형 비율, 주황색과 남색 라인이 있는 흰색 ETAURS 19번 배구 유니폼, 남색 돌핀 핫팬츠, 왼팔에만 검은 암슬리브 착용, 오른팔은 맨팔. 캐릭터가 한 명만 등장하는 애니메이션 비주얼 노벨 이벤트 CG 장면을 생성한다. 그녀는 어두운 체육관 바닥에 혼자 앉아 무릎을 끌어안고 조용히 울고 있다. 측면/후면 앵글. 옆에는 배구공이 놓여 있다. 배구 네트가 있는 어둡고 텅 빈 체육관. 어둡고 감정적인 조명, 눈물방울이 보임. 외롭고 슬픈 분위기. 장면에는 한 사람만 등장한다. 1024x1024, 애니메이션 스타일, 텍스트 없음, 워터마크 없음.`
    },
    // ── 공통 엔딩 CG (다인 외형 보정) ──
    {
        id: 'ending_friend',
        output: 'assets/images/background/ending_friend.png',
        refImage: 'assets/images/characters/dain_normal.webp',
        prompt: `짧은 머리 소녀는 이 캐릭터를 엄격한 레퍼런스로 사용하고 정확한 외형을 유지한다: ${DAIN_HAIR_LOCK}, 밝은 초록색 눈, 그을린 피부, 유니폼을 팽팽하게 당기는 매우 큰 상체 볼륨, 주황색과 남색 라인이 있는 흰색 ETAURS 19번 배구 유니폼, 남색 돌핀 핫팬츠, 왼팔에만 검은 암슬리브 착용. 애니메이션 비주얼 노벨 이벤트 CG를 생성한다: 졸업식 날 교실 셀카 장면. 다섯 명이 함께 포즈를 취한다. 중앙에는 남학생이 셀카를 찍기 위해 휴대폰을 들고 있다. 그는 짧은 다크 브라운 머리와 남색 블레이저 교복을 입고 있다. 왼쪽에는 배구부 소녀와 은발 소녀가 있다. 배구부 소녀는 초숏컷 픽시컷, ETAURS 19번 유니폼, 큰 상체 볼륨. 은발 소녀는 어깨 길이의 은색 샤기 레이어드 머리, 붉은 눈, 창백한 피부, 양팔과 목 전체의 문신, 어두운 셔츠 위 남색 블레이저. 오른쪽에는 긴 검은 웨이브 머리의 소녀와 갈색 긴 웨이브 머리의 여성 교사가 있다. 검은 머리 소녀는 둥근 검은 금속 안경, 아이보리 피부, 남색 블레이저 교복. 여성 교사는 흰 블라우스 위 베이지 카디건과 카키색 펜슬 스커트. 교실에는 칠판이 있고, 칠판에는 졸업 모자 낙서가 있으며, 책상 위에는 졸업장 두루마리와 꽃다발이 있다. 따뜻한 햇빛. 모두 행복하게 웃고 있다. 1024x1024, 애니메이션 스타일, 텍스트 없음, 워터마크 없음.`
    },
    {
        id: 'ending_harem',
        output: 'assets/images/background/ending_harem.png',
        refImage: 'assets/images/characters/dain_normal.webp',
        prompt: `짧은 머리 소녀는 이 캐릭터를 엄격한 레퍼런스로 사용하고 정확한 외형을 유지한다: ${DAIN_HAIR_LOCK}, 밝은 초록색 눈, 그을린 피부, 유니폼을 팽팽하게 당기는 매우 큰 상체 볼륨, 주황색과 남색 라인이 있는 흰색 ETAURS 19번 배구 유니폼, 남색 돌핀 핫팬츠, 왼팔에만 검은 암슬리브 착용. 애니메이션 비주얼 노벨 이벤트 CG를 생성한다: 밝은 낮의 학교 야외 벤치 장면. 중앙에는 짧은 다크 브라운 머리와 남색 블레이저 교복을 입은 남학생이 벤치에 앉아 당황하고 긴장한 표정을 짓고 있다. 그의 뒤에는 배구부 소녀가 장난스럽게 어깨를 붙잡고 크게 웃고 있다. 배구부 소녀는 초숏컷 픽시컷, 큰 상체 볼륨, ETAURS 19번 유니폼. 왼쪽에는 긴 검은 웨이브 머리의 소녀가 팔짱을 끼고 불만스러운 표정으로 서 있다. 그녀는 둥근 검은 금속 안경, 아이보리 피부, 남색 블레이저, 큰 상체 볼륨. 오른쪽에는 은발 소녀가 차가운 표정으로 서 있다. 그녀는 어깨 길이의 은색 샤기 머리, 붉은 눈, 창백한 피부, 양팔과 목의 문신, 어두운 셔츠 위 남색 블레이저. 파란 하늘, 학교 건물 배경. 코미디 하렘 상황. 1024x1024, 애니메이션 스타일, 텍스트 없음, 워터마크 없음.`
    },
    {
        id: 'ending_mayhem',
        output: 'assets/images/background/ending_mayhem.png',
        refImage: 'assets/images/characters/dain_normal.webp',
        prompt: `짧은 머리 소녀는 이 캐릭터를 엄격한 레퍼런스로 사용하고 정확한 외형을 유지한다: ${DAIN_HAIR_LOCK}, 밝은 초록색 눈, 그을린 피부, 유니폼을 팽팽하게 당기는 매우 큰 상체 볼륨, 주황색과 남색 라인이 있는 흰색 ETAURS 19번 배구 유니폼, 남색 돌핀 핫팬츠, 왼팔에만 검은 암슬리브 착용. 애니메이션 비주얼 노벨 이벤트 CG를 생성한다: 어두운 학교 복도 대치 장면. 중앙에는 짧은 다크 브라운 머리와 남색 블레이저 교복을 입은 남학생이 등을 보인 채 서 있다. 왼쪽에는 긴 검은 웨이브 머리의 소녀가 차갑고 화난 표정으로 팔짱을 끼고 있다. 그녀는 둥근 검은 금속 안경, 아이보리 피부, 남색 블레이저를 입고 있다. 오른쪽에는 배구부 소녀가 화난 표정으로 허리에 손을 얹고 있다. 배구부 소녀는 초숏컷 픽시컷, 큰 상체 볼륨, ETAURS 19번 유니폼. 그들 사이 약간 뒤쪽에는 은발 소녀가 무관심한 표정으로 시선을 돌리고 있다. 그녀는 어깨 길이의 은색 샤기 머리, 붉은 눈, 창백한 피부, 양팔과 목의 문신, 어두운 셔츠 위 남색 블레이저. 긴장감 있는 어두운 분위기, 형광등 복도 조명. 1024x1024, 애니메이션 스타일, 텍스트 없음, 워터마크 없음.`
    }
];

async function generateCG(cg) {
    console.log(`\nGenerating: ${cg.id}...`);

    // Read reference image
    const imgBytes = fs.readFileSync(cg.refImage);
    const base64Img = imgBytes.toString('base64');
    const mimeType = cg.refImage.endsWith('.webp') ? 'image/webp' : 'image/png';

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key=${API_KEY}`;

    const body = {
        contents: [{
            parts: [
                {
                    inlineData: {
                        mimeType: mimeType,
                        data: base64Img
                    }
                },
                {
                    text: cg.prompt
                }
            ]
        }],
        generationConfig: {
            responseModalities: ["IMAGE", "TEXT"],
            temperature: 1.0
        }
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        const err = await response.text();
        console.error(`Failed ${cg.id}: ${response.status} ${err.substring(0, 300)}`);
        return false;
    }

    const data = await response.json();

    // Find image part in response
    const candidates = data.candidates || [];
    for (const candidate of candidates) {
        const parts = candidate.content?.parts || [];
        for (const part of parts) {
            if (part.inlineData?.data) {
                const imgBuffer = Buffer.from(part.inlineData.data, 'base64');
                fs.writeFileSync(cg.output, imgBuffer);
                console.log(`Saved: ${cg.output} (${(imgBuffer.length / 1024).toFixed(0)} KB)`);
                return true;
            }
        }
    }

    console.error(`No image in response for ${cg.id}:`, JSON.stringify(data).substring(0, 300));
    return false;
}

async function main() {
    const target = process.argv[2]; // optional: run specific CG by id
    for (const cg of CG_PROMPTS) {
        if (target && cg.id !== target) continue;
        const success = await generateCG(cg);
        if (!success) console.error(`FAILED: ${cg.id}`);
    }
    console.log('\nDone!');
}

main();
