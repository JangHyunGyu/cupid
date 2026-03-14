# Cupid 서브캐릭터 이미지 생성 프롬프트

## 사용 방법
- 아래 프롬프트를 Midjourney, DALL-E 3, Stable Diffusion 등에 입력
- 2단계(실루엣) / 3단계(간이 스프라이트) 중 원하는 방식 선택
- VN 게임용이므로 **투명 배경(PNG)** 권장

---

## 민수 (Minsu) — MC의 짝꿍

### 2단계: 실루엣
```
Dark silhouette of a male high school student, average build, slightly messy short hair, school uniform, hands in pockets, casual relaxed posture, facing slightly left, flat color black silhouette on transparent background, visual novel game sprite style, clean edges, full body standing pose
```

### 3단계: 간이 스프라이트 (표정 2개)

**기본 표정 (평범/약간 귀찮은 얼굴)**
```
Anime style male high school student character sprite, 17 years old, average looking, short messy dark brown hair, dark eyes, school uniform (white shirt, dark blazer), slightly bored/neutral expression, hands in pockets, facing front with slight angle, clean lineart, soft cel shading, visual novel game sprite, transparent background, full body standing, Korean high school setting
```

**웃음/한심하다는 표정**
```
Anime style male high school student character sprite, 17 years old, average looking, short messy dark brown hair, dark eyes, school uniform (white shirt, dark blazer), smirking expression with one eyebrow raised, arms crossed, "are you serious" face, clean lineart, soft cel shading, visual novel game sprite, transparent background, full body standing, Korean high school setting
```

---

## 하은 (Haeun) — 서연의 부회장

### 2단계: 실루엣
```
Dark silhouette of a female high school student, slim build, shoulder-length straight hair with headband, school uniform with student council armband, holding clipboard, polite standing posture, facing slightly right, flat color black silhouette on transparent background, visual novel game sprite style, clean edges, full body standing pose
```

### 3단계: 간이 스프라이트 (표정 2개)

**기본 표정 (공손/조심스러운)**
```
Anime style female high school student character sprite, 16 years old, neat appearance, shoulder-length straight dark hair with simple headband, gentle brown eyes, school uniform (white blouse, dark skirt, blazer) with student council armband, holding clipboard to chest, polite and careful expression, slight smile, clean lineart, soft cel shading, visual novel game sprite, transparent background, full body standing, Korean high school setting
```

**걱정하는 표정**
```
Anime style female high school student character sprite, 16 years old, neat appearance, shoulder-length straight dark hair with simple headband, worried brown eyes, school uniform (white blouse, dark skirt, blazer) with student council armband, clutching clipboard tighter, concerned and anxious expression, slight frown, clean lineart, soft cel shading, visual novel game sprite, transparent background, full body standing, Korean high school setting
```

---

## 생성 팁

### Midjourney 추가 파라미터
- `--ar 2:5` (세로 비율, VN 스프라이트용)
- `--style raw` (과도한 스타일화 방지)
- `--no background` (배경 제거)

### Stable Diffusion 추가 설정
- Negative prompt: `background, scenery, multiple characters, chibi, super deformed`
- Model 추천: `anything-v5`, `counterfeit-v3` (애니메이션 스타일)
- Steps: 30-40, CFG: 7-8

### DALL-E 3 참고
- "transparent background" 대신 "white background"로 생성 후 배경 제거 도구 사용
- 스타일 일관성을 위해 같은 대화에서 연속 생성 권장

### 히로인과의 스타일 통일
- 히로인 3명의 기존 이미지가 있다면, 같은 프롬프트 구조 + 동일 모델/시드로 생성해야 일관성 유지
- 서브캐릭터는 의도적으로 히로인보다 디테일을 낮추는 것이 VN 관례 (주연 vs 조연 차별화)
