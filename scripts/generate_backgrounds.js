/**
 * Imagen 4 Ultra 배경 이미지 생성 스크립트
 * 사용법: node scripts/generate_backgrounds.js [--only filename.png] [--skip-existing]
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// .env에서 API 키 읽기
const envPath = path.join(__dirname, '..', '..', '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const apiKey = envContent.match(/GEMINI_API_KEY=(.+)/)?.[1]?.trim();
if (!apiKey) { console.error('❌ GEMINI_API_KEY not found in .env'); process.exit(1); }

const MODEL_ULTRA = 'imagen-4.0-ultra-generate-001';
const MODEL_STANDARD = 'imagen-4.0-generate-001';
const OUTPUT_DIR = path.join(__dirname, '..', 'assets', 'images', 'background');
const DELAY_MS = 12000; // 요청 간 12초 대기 (rate limit 방지)

// ──────────────────────────────────────────
// 배경 프롬프트 정의 (PROMPTS_READY.md 기준)
// ──────────────────────────────────────────
const NEG_COMMON = '저퀄리티, 흐릿한, 3D 렌더링, 실사 사진, 인물 포함, 캐릭터 포함, 사람 포함, 워터마크, 서명, 텍스트, 글자, 로고, 필름 네거티브, 필름 스트립, 흰색 테두리, 흰색 여백, 위아래 여백, 위아래 검은 바, 레터박스, 프레임 테두리, film strip, film negative, white border, black bars, letterbox';
const AVOID_PREFIX = 'NO film strips, NO borders, NO text, NO letterboxing, NO frame edges. Clean full-bleed illustration with no borders or overlays. ';
const AVOID_SUFFIX = '. 절대 금지: 텍스트, 글자, 숫자, 워터마크, 필름 스트립, 필름 네거티브, 흰색 테두리, 위아래 검은 바, 레터박스, 프레임 테두리, 사람, 인물. No text, no film strips, no borders, no letterboxing, no frame, no overlay, no people. Pure background illustration only.';

const backgrounds = [
  // ── 10. 학교 내부 ──
  {
    filename: 'room_school.png',
    label: '교실',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 고등학교 교실 내부, 낮 시간대 밝은 자연광, 왼쪽 창문으로 따스한 햇살이 비스듬히 들어옴, 창밖으로 벚꽃 나무가 보임, 30석 규모 나무 책상과 의자가 줄지어 배치됨, 앞쪽 깨끗한 녹색 칠판과 교탁, 천장에 형광등, 교실 옆면에 사물함, 깨끗하게 정돈된 교실 분위기, 창문 커튼이 바람에 살짝 흔들림, 봄 햇살이 책상 위에 따뜻한 그림자를 드리움, 아늑하고 평온한 일상적 분위기, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 어두운 조명, 밤, 공포 분위기`
  },
  {
    filename: 'school_hallway.png',
    label: '복도',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 고등학교 복도 내부, 낮 시간대, 길고 곧은 복도 중앙 시점, 양쪽으로 교실 문이 일정 간격으로 나열됨, 왼쪽 벽면에 큰 유리창이 줄지어 있어 햇살이 복도 바닥에 격자무늬 그림자를 만듦, 반짝이는 리놀륨 바닥, 천장 형광등, 벽에 부착된 게시물과 공지사항, 소화기와 비상구 표시, 창밖으로 교정의 벚꽃 나무가 보임, 봄 오후의 따뜻한 빛이 복도를 가득 채움, 깨끗하고 정돈된 학교 분위기, 연애 시뮬레이션 게임 배경, 1포인트 투시 원근법, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 어두운 조명, 밤, 공포 분위기`
  },
  {
    filename: 'top_school.png',
    label: '옥상',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 고등학교 옥상, 맑은 하늘 아래 탁 트인 옥상 공간, 콘크리트 바닥과 금속 난간, 난간 근처에 작은 화분 몇 개가 놓여 있음, 구석에 접이식 의자 두 개와 작은 테이블, 옥상 출입문이 한쪽에 보임, 난간 너머로 학교 운동장과 주변 마을 풍경이 넓게 펼쳐짐, 멀리 산과 아파트 단지가 보임, 파란 하늘에 뭉게구름, 바람에 벚꽃잎이 옥상 위로 날아옴, 봄 햇살이 따사롭게 비침, 비밀스럽고 고요한 해방감의 공간, 연애 시뮬레이션 게임 배경, 약간 올려본 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 어두운 조명, 밤, 공포 분위기, 위험한 분위기`
  },
  {
    filename: 'teacher_office.png',
    label: '교무실/학생회실',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 고등학교 교무실 겸 학생회실, 방과후 석양 시간대, 창문으로 주황빛 노을이 들어와 방 전체를 황금빛으로 물들임, 큰 책상 위에 서류 더미와 클립보드와 태블릿, 책장에 파일 폴더가 가지런히 꽂혀 있음, 한쪽 벽에 학사 일정표와 행사 포스터, 작은 소파와 낮은 테이블, 책상 위 화분 하나, 서랍이 살짝 열린 책상, 정돈되어 있지만 일의 흔적이 느껴지는 공간, 노을이 서류 위에 긴 그림자를 드리움, 피곤하지만 아늑한 분위기, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 밤, 공포 분위기`
  },
  {
    filename: 'gym.png',
    label: '체육관',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 고등학교 실내 체육관, 방과후 오후 시간대, 높은 천장과 아치형 지붕, 나무 마루 바닥에 배구 코트 라인이 선명하게 그려져 있음, 코트 중앙에 배구 네트가 설치되어 있음, 한쪽 벽면에 줄사다리와 농구 골대, 반대쪽 벽면에 긴 나무 벤치, 바닥에 배구공 하나가 놓여 있음, 높은 창문으로 오후 햇살이 비스듬히 들어와 마루 바닥에 길게 빛줄기를 만듦, 공기 중에 먼지가 빛 속에서 반짝임, 활기차고 역동적인 스포츠 공간, 연애 시뮬레이션 게임 배경, 약간 올려본 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 어두운 조명, 밤, 야외 체육관`
  },
  {
    filename: 'library_old.png',
    label: '도서관/별관',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 고등학교 오래된 도서관 별관, 점심 시간대의 고요한 분위기, 높은 나무 서가가 양쪽으로 빽빽하게 늘어서 있음, 서가 사이로 좁은 통로, 오래된 나무 열람 테이블과 의자, 테이블 위에 스탠드 조명, 높은 아치형 창문으로 부드러운 자연광이 들어옴, 창문 밖으로 오래된 나무가 보임, 바닥에 낡은 나무 마루, 서가 위에 먼지가 살짝 쌓인 오래된 책들, 공기 중 오래된 종이 냄새가 느껴지는 분위기, 학생이 거의 찾지 않는 고요하고 신비로운 공간, 빛과 그림자가 만드는 아늑한 분위기, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 현대적 도서관, 밤, 공포 분위기`
  },
  {
    filename: 'store.png',
    label: '매점',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 고등학교 매점, 점심시간 밝은 분위기, 학교 지하에 위치한 작은 매점, 진열대에 빵과 음료수와 과자가 진열됨, 소보로빵과 딸기우유가 눈에 띄는 위치에 배치, 카운터와 계산대, 매점 앞에 나무 벤치가 나란히 놓여 있음, 형광등 조명이 밝게 비춤, 타일 바닥, 벽에 인기 메뉴 가격표 부착, 자판기가 한쪽에 배치, 활기차고 소박한 학교 일상의 공간, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 어두운 조명, 밤, 편의점, 대형 마트`
  },
  {
    filename: 'nurse_room.png',
    label: '보건실',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 고등학교 보건실 내부, 오후 시간대의 부드러운 자연광, 하얀 커튼으로 구분된 침대 두 개, 깨끗한 흰색 시트, 작은 나무 책상 위에 구급함과 소독약 병과 밴드 상자, 창가에 작은 로즈마리 화분, 약품 캐비닛과 체중계, 책상 위에 닫힌 노트북, 하얀 커튼 사이로 부드러운 햇살이 스며들어 따뜻한 그림자를 만듦, 소독약 냄새가 느껴질 듯한 깨끗한 공간, 안식처 같은 차분하고 포근한 분위기, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 어두운 조명, 밤, 병원, 수술실, 공포 분위기`
  },

  // ── 11. 학교 외부 ──
  {
    filename: 'school.png',
    label: '교문 앞',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 고등학교 교문 앞, 맑은 봄 아침 시간대, 벚꽃 가로수가 양쪽으로 늘어선 등교길, 벚꽃잎이 바람에 흩날림, 정면에 학교 교문과 돌기둥, 교문 너머로 깨끗한 3층 학교 건물이 보임, 넓은 교정과 운동장이 펼쳐짐, 교문 옆 가로등, 파란 하늘에 흰 뭉게구름, 아스팔트 등교 길 양쪽에 봄꽃이 핀 화단, 새 학기의 설렘과 긴장이 공존하는 밝은 봄 분위기, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 어두운 조명, 밤, 가을, 겨울, 낙엽`
  },
  {
    filename: 'school_back.png',
    label: '학교 뒷길',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 고등학교 뒷길, 방과후 석양 시간대, 학교 건물 뒤편의 좁고 한적한 길, 콘크리트 담벼락 한쪽에 담쟁이 덩굴, 발밑에 낙화한 벚꽃잎이 쌓여 있음, 오래된 자전거 거치대, 한쪽에 오래된 음수대, 석양빛이 담벼락에 주황빛 그림자를 드리움, 정문과 달리 사람이 다니지 않는 한적한 분위기, 비밀스럽고 고요한 공간, 약간의 쓸쓸함과 로맨스가 공존하는 분위기, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 밤, 공포 분위기, 으스스한, 폐건물`
  },
  {
    filename: 'playground.png',
    label: '운동장',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 고등학교 운동장, 맑은 봄 낮 시간대, 넓은 흙 운동장에 트랙 라인이 그려져 있음, 한쪽에 축구 골대, 반대쪽에 철봉과 턱걸이대, 운동장 가장자리에 벚꽃 나무가 줄지어 있음, 벚꽃잎이 운동장 위로 흩날림, 뒤편으로 학교 건물 3층이 보임, 파란 하늘에 뭉게구름, 밝고 탁 트인 활기찬 봄 분위기, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 어두운 조명, 밤, 실내`
  },
  {
    filename: 'school_basement.png',
    label: '학교 지하',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 고등학교 지하 통로, 형광등 조명이 비추는 실내, 콘크리트 벽과 타일 바닥, 양쪽에 자판기, 계단 하단에서 바라본 시점, 지하 특유의 서늘한 공기감, 형광등 빛이 바닥에 반사됨, 사람이 적은 한적한 분위기, 약간 미스터리한 느낌이지만 깨끗하게 관리된 공간, 연애 시뮬레이션 게임 배경, 1포인트 투시 원근법, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 공포 분위기, 폐건물, 어두운`
  },

  // ── 12. 학교 밖 ──
  {
    filename: 'street.png',
    label: '거리',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 도심 주택가 거리, 석양 시간대, 주황빛 노을이 건물 사이로 비침, 양쪽에 2~3층 상가 건물과 카페 간판, 아스팔트 도로와 인도, 가로수에 봄 초록잎이 무성함, 전봇대와 전선, 횡단보도와 신호등, 멀리 아파트 단지가 보임, 가로등에 불이 켜지기 시작하는 시간, 하교길의 따뜻하고 편안한 분위기, 일상적이면서도 로맨틱한 석양, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 밤, 비, 일본 거리, 번화가`
  },
  {
    filename: 'cafe.png',
    label: '카페',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 학교 앞 작은 카페 내부, 저녁 시간대의 따뜻한 조명, 나무 테이블과 쿠션 의자, 창가 자리에서 바라본 시점, 큰 유리 창문 밖으로 석양이 지는 거리가 보임, 테이블 위에 커피잔과 음료, 따뜻한 간접 조명과 펜던트 조명, 벽에 작은 액자와 메뉴 보드, 카운터에 에스프레소 머신, 나무와 벽돌 인테리어, 아늑하고 소박한 동네 카페 분위기, 비밀 대화를 나누기 좋은 프라이빗한 느낌, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 어두운 조명, 밤, 대형 프랜차이즈, 스타벅스`
  },
  {
    filename: 'park.png',
    label: '공원',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 도심 공원, 맑은 봄 오후 시간대, 넓은 산책로 양쪽에 벚꽃 나무와 초록 잔디밭, 중앙에 작은 분수대에서 물이 솟아오름, 분수대 주변에 나무 벤치, 산책로에 봄꽃이 핀 화단, 멀리 작은 꽃집 천막이 보임, 연못에 오리 몇 마리, 파란 하늘에 뭉게구름, 벚꽃잎이 바람에 흩날리며 잔디 위에 내려앉음, 밝고 평화로운 데이트 명소 분위기, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 어두운 조명, 밤, 놀이공원, 가을`
  },
  {
    filename: 'arcade.png',
    label: '오락실',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 오락실 내부, 저녁 시간대, 네온 조명이 형형색색으로 빛나는 실내, 양쪽에 아케이드 게임기가 줄지어 있음, 정면에 리듬 게임 대형 캐비닛, 크레인 게임기와 레이싱 게임기, 어두운 실내에 게임기 화면과 네온사인 빛이 반사됨, 천장에 형광 조명, 카페트 바닥, 코인 교환기가 한쪽에 배치, 레트로하면서도 활기찬 분위기, 일상에서 벗어난 데이트의 짜릿함, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 야외, 도박장, 카지노`
  },
  {
    filename: 'bookstore.png',
    label: '서점',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 역 앞 중고 서점 겸 헌책방 내부, 저녁 시간대의 따뜻한 조명, 천장까지 닿는 높은 나무 서가에 빼곡하게 꽂힌 책들, 좁은 서가 사이 통로, 오래된 나무 바닥, 카운터 옆에 작은 스탠드 조명, 서가 위에 손글씨 장르 분류 표지, 구석에 낡은 가죽 소파와 독서용 스탠드, 갈색 종이 느낌의 오래된 책 냄새가 나는 분위기, 부드러운 간접 조명이 서가 사이로 스며듦, 아늑하고 비밀스러운 보물 창고 같은 공간, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 밝은 대형 서점, 현대적 인테리어, 밤 외부`
  },
  {
    filename: 'museum.png',
    label: '박물관',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 소규모 미술관 내부, 오후 시간대, 하얀 벽면에 액자가 일정 간격으로 걸려 있음, 나무 마루 바닥, 천장 스포트라이트가 작품을 비춤, 가운데 나무 벤치, 넓고 고요한 전시 공간, 벽면에 봄 풍경 그림이 걸려 있음, 큰 유리창으로 자연광이 들어옴, 미니멀하고 깨끗한 인테리어, 조용하고 사색적인 분위기, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 밤, 어두운 조명, 대형 박물관`
  },

  // ── 13. 개인 공간 ──
  {
    filename: 'room_my.png',
    label: '주인공 방',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 남자 고등학생 방, 밤 시간대, 책상 위 스탠드 조명만 켜진 어둑한 분위기, 싱글 침대와 구겨진 이불, 책상 위에 교과서와 노트와 펜이 흩어져 있음, 스탠드 조명 옆에 핸드폰이 놓여 있음, 벽에 포스터 한두 장, 작은 책장에 만화책과 참고서, 바닥에 학교 가방이 던져져 있음, 창문 밖으로 달빛과 가로등 불빛, 창문에 커튼이 반쯤 열려 있음, 하루를 마무리하는 고요한 밤의 사색적 분위기, 약간 어수선하지만 편안한 개인 공간, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 밝은 조명, 낮, 여자 방, 화려한 인테리어`
  },
  {
    filename: 'seyoun_room.png',
    label: '서연 방',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 여고생 방 — 완벽주의 우등생의 공간, 밤 시간대의 부드러운 간접 조명, 모든 것이 정돈된 깔끔한 방, 넓은 책상 위에 참고서가 과목별로 정리되어 있음, 책상 옆에 작은 화분 두 개가 가지런히 놓임, 침대 위에 깔끔하게 개킨 이불, 벽에 시간 관리 플래너와 학사 일정표, 화장대 위에 최소한의 소품, 전신 거울 하나, 책장에 빈틈없이 꽂힌 책들, 창문 밖으로 도시 야경의 불빛, 완벽하게 정돈되어 있지만 어딘가 차갑고 외로운 분위기, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 낮, 어수선한, 남자 방`
  },
  {
    filename: 'yuna_hideout.png',
    label: '유나 아지트',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 학교 도서관 별관 지하 허름한 빈 교실을 개조한 비밀 아지트, 방과후 시간대, 콘크리트 벽에 금이 가고 페인트가 벗겨진 오래된 실내, 구석에 낡은 접이식 의자와 깔린 담요, 벽에 기대어 놓은 오래된 책 몇 권과 스케치북, 작은 캔들 홀더와 손전등, 창문이 없는 어둑한 공간에 작은 스탠드 조명 하나가 따뜻한 빛을 비춤, 벽에 스티커와 낙서 흔적, 오래된 나무 책상 위에 음료 캔과 이어폰, 아무도 모르는 비밀스러운 은신처 분위기, 고독하지만 아늑한 공간, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 밤, 공포 분위기, 위험한, 야외, 옥상`
  },
  {
    filename: 'student_room.png',
    label: '학생회실',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 한국 고등학교 학생회실 내부, 낮 시간대 밝은 자연광, 큰 직사각형 회의 테이블과 의자 여러 개, 테이블 위에 서류와 클립보드와 노트북, 벽면에 행사 일정표와 포스터, 한쪽에 화이트보드, 작은 책장에 파일 폴더가 정리되어 있음, 창문으로 밝은 햇살이 들어옴, 깔끔하게 정돈된 학생 자치 활동 공간, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 밤, 공포 분위기, 어두운 조명`
  },
  {
    filename: 'nurse_house.png',
    label: '보건선생님 집',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 20대 후반 여성의 원룸 거실, 밤 시간대의 따뜻한 간접 조명, 작은 소파와 쿠션, 낮은 테이블 위에 커피잔 두 개, 한쪽 벽에 작은 책장에 소설책과 의학 서적이 섞여 있음, 부엌 카운터에 와인잔과 관엽 식물, 소파 옆에 무릎 담요가 접혀 있음, 벽에 작은 그림 액자, 창문 밖으로 도시 야경의 불빛이 보임, 커튼이 반쯤 쳐져 있음, 깔끔하지만 생활감 있는 성인 여성의 공간, 아늑하고 프라이빗한 밤 분위기, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 낮, 학생 방, 공포 분위기, 선정적`
  },
  {
    filename: 'teacher_room.png',
    label: '선생님 방',
    prompt: '비주얼 노벨 배경 일러스트, 깔끔한 선화, 선명한 디지털 셀 채색, 20대 후반 여성 교사의 원룸, 밤 시간대의 부드러운 간접 조명, 작은 책상 위에 닫힌 노트북과 빨간 펜이 꽂힌 펜꽂이, 서랍이 살짝 열려 있고 원고 용지가 보임, 벽에 기대어 놓은 책더미, 침대 옆 협탁에 스탠드 조명과 독서 안경, 작은 책장에 문학 서적, 창문에 레이스 커튼, 창밖으로 고요한 밤 풍경, 소설가 지망생의 흔적이 곳곳에 숨어 있는 공간, 깔끔하지만 꿈을 포기한 듯한 미세한 쓸쓸함, 연애 시뮬레이션 게임 배경, 정면 시점, 1024x1024 해상도',
    negative: `${NEG_COMMON}, 낮, 학생 방, 화려한 인테리어`
  },
];

// ──────────────────────────────────────────
// API 호출
// ──────────────────────────────────────────
function callImagenAPI(model, prompt, negativePrompt) {
  return new Promise((resolve, reject) => {
    const params = {
      sampleCount: 1,
      aspectRatio: '1:1'
    };
    if (negativePrompt) params.negativePrompt = negativePrompt;
    const body = JSON.stringify({
      instances: [{ prompt }],
      parameters: params
    });

    const url = new URL(`https://generativelanguage.googleapis.com/v1beta/models/${model}:predict?key=${apiKey}`);

    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (res.statusCode !== 200) {
            reject(new Error(`HTTP ${res.statusCode}: ${json.error?.message || data.slice(0, 300)}`));
            return;
          }
          const b64 = json.predictions?.[0]?.bytesBase64Encoded;
          if (!b64) reject(new Error(`No image data: ${data.slice(0, 300)}`));
          else resolve(Buffer.from(b64, 'base64'));
        } catch (e) { reject(new Error(`Parse error: ${e.message} — ${data.slice(0, 200)}`)); }
      });
    });
    req.on('error', reject);
    req.setTimeout(120000, () => { req.destroy(); reject(new Error('Timeout (120s)')); });
    req.write(body);
    req.end();
  });
}

async function generateImage(bg, index, total) {
  const outPath = path.join(OUTPUT_DIR, bg.filename);
  console.log(`\n[${index + 1}/${total}] ${bg.label} (${bg.filename})`);

  // Ultra 시도 → 실패 시 Standard 폴백
  for (const model of [MODEL_ULTRA, MODEL_STANDARD]) {
    const modelLabel = model.includes('ultra') ? 'Ultra' : 'Standard';
    try {
      console.log(`  → ${modelLabel} 생성 중...`);
      const imgBuf = await callImagenAPI(model, AVOID_PREFIX + bg.prompt + AVOID_SUFFIX);
      fs.writeFileSync(outPath, imgBuf);
      const kb = (imgBuf.length / 1024).toFixed(0);
      console.log(`  ✓ 저장 완료: ${outPath} (${kb}KB)`);
      return true;
    } catch (err) {
      console.log(`  ✗ ${modelLabel} 실패: ${err.message}`);
      if (model === MODEL_STANDARD) {
        console.log(`  ✗✗ 최종 실패 — 건너뜀`);
        return false;
      }
      console.log(`  → Standard로 재시도...`);
    }
  }
  return false;
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  const args = process.argv.slice(2);
  const onlyFile = args.find(a => !a.startsWith('--'));
  const skipExisting = args.includes('--skip-existing');

  let targets = backgrounds;
  if (onlyFile) {
    targets = backgrounds.filter(b => b.filename === onlyFile);
    if (targets.length === 0) {
      console.error(`❌ "${onlyFile}" 를 찾을 수 없음. 사용 가능: ${backgrounds.map(b => b.filename).join(', ')}`);
      process.exit(1);
    }
  }

  console.log(`\n🎨 Imagen 4 Ultra 배경 생성 시작 (${targets.length}장)`);
  console.log(`   출력 경로: ${OUTPUT_DIR}\n`);

  let success = 0, fail = 0, skipped = 0;

  for (let i = 0; i < targets.length; i++) {
    const bg = targets[i];

    if (skipExisting && fs.existsSync(path.join(OUTPUT_DIR, bg.filename))) {
      console.log(`[${i + 1}/${targets.length}] ${bg.label} — 이미 존재, 건너뜀`);
      skipped++;
      continue;
    }

    const ok = await generateImage(bg, i, targets.length);
    ok ? success++ : fail++;

    // 마지막 아이템이 아니면 대기
    if (i < targets.length - 1) {
      console.log(`  ⏳ ${DELAY_MS / 1000}초 대기...`);
      await sleep(DELAY_MS);
    }
  }

  console.log(`\n${'═'.repeat(40)}`);
  console.log(`✅ 완료: 성공 ${success} / 실패 ${fail} / 건너뜀 ${skipped} (총 ${targets.length})`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
