# Cupid - NovelAI V4.5 전용 프롬프트

> NovelAI Diffusion V4.5 (anime) 전용. 영어 Danbooru 태그 + 쉼표 구분.
> 해상도 / 시드 / 샘플러는 NovelAI UI에서 직접 설정 (이 파일에는 미포함).
>
> **권장 세팅**
> - Sampler: **Euler** (또는 Euler Ancestral)
> - Steps: **28**
> - Prompt Guidance (CFG): **5**
> - Resolution: NovelAI 기본값(Portrait 832x1216) 또는 원하는 비율
>
> **배경색**: 모든 캐릭터 스프라이트는 단색 밝은 초록색 크로마키 배경.
> 배경 제거를 프로그램으로 할 거라면 NAI 결과에서 머리/피부 엣지에 spill이 남을 수 있으니
> 후처리에서 dechromakey 또는 remove.bg 사용 권장.
>
> **공통 퀄리티 태그 (모든 프롬프트 맨 앞)**
> ```
> masterpiece, best quality, very aesthetic, absurdres, newest,
> ```
>
> **공통 네거티브 (모든 프롬프트에 포함)**
> ```
> lowres, worst quality, low quality, bad anatomy, bad hands, bad fingers,
> extra fingers, fused fingers, missing fingers, deformed hands,
> blurry, jpeg artifacts, sketch, monochrome,
> multiple views, multiple girls, 2girls, 3girls, crowd,
> watermark, signature, text, logo, cropped, out of frame,
> 3d, realistic, photo,
> film grain, film strip, white border, white margin
> ```

>
> **안경 캐릭터 표정 변경용 고정 태그**
> 서연/보건처럼 안경이 정체성인 캐릭터는 표정 변경 시 positive에 아래 묶음을 유지:
> `{{glasses}}, {{round eyewear}}, {{black-framed eyewear}}, glasses on face, visible glasses frame, clear lenses, glasses temples, nose pads`
> undesired content에는 아래 묶음을 추가:
> `no glasses, missing glasses, glasses removed, bare face, contact lenses, sunglasses`
> 단, `nurse_bikini.png`처럼 의도적으로 얼굴 안경을 빼는 특수 의상 블록은 예외.

---

## 1. 캐릭터 — 서연 (Seoyeon) — 학생회장

> **기본 외형 태그 (모든 표정에 공통)**
> `1girl, solo, korean, mature female, college student, beautiful,
> long black hair, wavy hair, see-through bangs, hair past waist,
> black eyes, large almond eyes, round eyes,
> ivory skin, {{glasses}}, {{round eyewear}}, {{black-framed eyewear}}, glasses on face, visible glasses frame, clear lenses, glasses temples, nose pads,
> 6.5 head body, hourglass figure, large breasts, narrow waist, wide hips, curvy,
> navy blazer, school uniform, gold emblem, open jacket, white collared shirt, white blouse,
> navy pleated skirt, miniskirt`

### seyoun_normal.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, college student, beautiful,
long black hair, wavy hair, hair past waist, see-through bangs,
black eyes, large almond eyes, ivory skin, {{glasses}}, {{round eyewear}}, {{black-framed eyewear}}, glasses on face, visible glasses frame, clear lenses, glasses temples, nose pads,
hourglass figure, large breasts, narrow waist, wide hips, curvy,
navy blazer, gold emblem badge, open jacket, white collared blouse, navy pleated miniskirt,
hand on hip, other arm at side, standing, confident pose, slight body turn,
confident smile, closed mouth, looking at viewer,
cowboy shot, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:**
```
lowres, worst quality, low quality, bad anatomy, bad hands, bad fingers,
extra fingers, fused fingers, missing fingers, deformed hands,
blurry, jpeg artifacts, sketch, monochrome,
multiple views, multiple girls, 2girls, 3girls, crowd,
watermark, signature, text, logo, cropped, out of frame,
3d, realistic, photo,
full body, knees, feet, lower body,
no glasses, missing glasses, glasses removed, bare face, contact lenses, sunglasses,
particles, light particles, lens flare, glowing aura, light rays,
film grain, film strip, white border, white margin
```

### seyoun_shy.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, college student, beautiful,
long black hair, wavy hair, hair past waist,
black eyes, large almond eyes, ivory skin, {{glasses}}, {{round eyewear}}, {{black-framed eyewear}}, glasses on face, visible glasses frame, clear lenses, glasses temples, nose pads,
hourglass figure, large breasts, narrow waist, wide hips,
navy blazer, gold emblem, open jacket, white blouse, navy pleated miniskirt,
shy, blush, full-face blush, looking away, embarrassed, awkward smile, head tilt,
slight body turn, standing, hand on hip,
cowboy shot, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 네거티브 + `full body, knees, feet, lower body, particles, light rays, no glasses, missing glasses, glasses removed, bare face, contact lenses, sunglasses`)

### seyoun_shy2.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, college student,
long black hair, wavy hair, hair past waist, hair over face,
black eyes, ivory skin, {{glasses}}, {{round eyewear}}, {{black-framed eyewear}}, glasses on face, visible glasses frame, clear lenses, glasses temples, nose pads,
hourglass figure, large breasts, narrow waist, wide hips,
navy blazer, gold emblem, open jacket, white blouse, navy pleated miniskirt,
extreme blush, deep blush, hand on own cheek, covering face, looking down,
biting lip, embarrassed, head down,
cowboy shot, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `no glasses, missing glasses, glasses removed, bare face, contact lenses, sunglasses`)

### seyoun_laugh.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, college student,
long black hair, wavy hair, hair past waist,
^_^, closed eyes, smile, open mouth, laughing, teeth, happy, cheerful,
crescent eyes, natural smile, blush stickers,
ivory skin, {{glasses}}, {{round eyewear}}, {{black-framed eyewear}}, glasses on face, visible glasses frame, clear lenses, glasses temples, nose pads,
hourglass figure, large breasts, narrow waist, wide hips,
navy blazer, gold emblem, open jacket, white blouse, navy pleated miniskirt,
hand near mouth, standing,
cowboy shot, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거�티브:** (공통)

### seyoun_angry.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, college student,
long black hair, wavy hair, hair past waist, neat hair,
black eyes, sharp eyes, narrowed eyes, frown, furrowed brow,
ivory skin, {{glasses}}, {{round eyewear}}, {{black-framed eyewear}}, glasses on face, visible glasses frame, clear lenses, glasses temples, nose pads, glasses glare,
serious expression, closed mouth, tight lips, angry, cold expression,
hourglass figure, large breasts, narrow waist, wide hips,
navy blazer, gold emblem, open jacket, white blouse, navy pleated miniskirt,
hand on hip, authoritative pose, looking at viewer,
cowboy shot, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `no glasses, missing glasses, glasses removed, bare face, contact lenses, sunglasses`)

### seyoun_sad.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, college student,
long black hair, wavy hair, hair past waist, hair down,
black eyes, sad eyes, drooping eyes, looking down, downcast eyes,
ivory skin, {{glasses}}, {{round eyewear}}, {{black-framed eyewear}}, glasses on face, visible glasses frame, clear lenses, glasses temples, nose pads,
sad, frown, slightly parted lips, gloomy, dejected, slumped shoulders,
hourglass figure, large breasts, narrow waist,
navy blazer, gold emblem, open jacket, white blouse, navy pleated miniskirt,
hands clasped in front, standing,
cowboy shot, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `no glasses, missing glasses, glasses removed, bare face, contact lenses, sunglasses`)

### seyoun_cry.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, college student,
long black hair, wavy hair, hair past waist, hair covering cheek,
black eyes, tearful eyes, watery eyes, tears, holding back tears,
red nose, trembling lips, hand covering mouth,
ivory skin, {{glasses}}, {{round eyewear}}, {{black-framed eyewear}}, glasses on face, visible glasses frame, clear lenses, glasses temples, nose pads,
hourglass figure, large breasts, narrow waist,
navy blazer, gold emblem, open jacket, white blouse, navy pleated miniskirt,
emotional, sad, conflicted expression,
cowboy shot, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `no glasses, missing glasses, glasses removed, bare face, contact lenses, sunglasses`)

### seyoun_pout.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, college student,
long black hair, wavy hair, hair past waist,
black eyes, looking to the side, side glance, pouting, puffy cheeks,
furrowed brow, annoyed, cute, slight frown,
ivory skin, {{glasses}}, {{round eyewear}}, {{black-framed eyewear}}, glasses on face, visible glasses frame, clear lenses, glasses temples, nose pads,
hourglass figure, large breasts, narrow waist, wide hips,
navy blazer, gold emblem, open jacket, white blouse, navy pleated miniskirt,
crossed arms, standing,
cowboy shot, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `no glasses, missing glasses, glasses removed, bare face, contact lenses, sunglasses`)

### seyoun_worried.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, college student,
long black hair, wavy hair, hair past waist,
black eyes, worried eyes, anxious, parted lips, furrowed brow, troubled expression,
ivory skin, {{glasses}}, {{round eyewear}}, {{black-framed eyewear}}, glasses on face, visible glasses frame, clear lenses, glasses temples, nose pads,
hourglass figure, large breasts, narrow waist,
navy blazer, gold emblem, open jacket, white blouse, navy pleated miniskirt,
own hands clasped, hands clasped in front, defensive pose, tense,
cowboy shot, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `no glasses, missing glasses, glasses removed, bare face, contact lenses, sunglasses`)

### seyoun_back.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, college student,
back view, from behind, facing away,
long black hair, wavy hair, hair past waist, hair covering back,
pink hair clip, hair ornament,
navy blazer, gold emblem, navy pleated miniskirt,
hand on hip, head tilted right, only ear and jawline visible, three-quarter back view,
hourglass figure, wide hips,
cowboy shot, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `face, front view, looking at viewer`)

### seyoun_bikini.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, college student, beautiful,
long black hair, wavy hair, hair past waist, wind-blown hair,
black eyes, large almond eyes, ivory skin, {{glasses}}, {{round eyewear}}, {{black-framed eyewear}}, glasses on face, visible glasses frame, clear lenses, glasses temples, nose pads,
hourglass figure, large breasts, narrow waist, wide hips, curvy, dynamic pose,
navy bikini, navy swimsuit, beach,
confident smile, looking at viewer, blush, summer atmosphere,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `nsfw, lewd, explicit, full body, lower body, no glasses, missing glasses, glasses removed, bare face, contact lenses, sunglasses`)

---

## 2. 캐릭터 — 다인 (Dain) — 배구부 에이스

> **기본 외형 태그**
> `1girl, solo, korean, college student, athletic, sporty,
> very short hair, brown hair, pixie cut, short bob,
> green eyes, bright eyes, round eyes, tanned skin, healthy skin,
> 6.5 head body, athletic body, toned body, large breasts, narrow waist, wide hips,
> volleyball uniform, sleeveless shirt, white shirt with orange stripes,
> "ETAURS" text, jersey number 19,
> navy short shorts, navy hot pants, black arm sleeve on left arm only`

### dain_normal.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, college student, athletic, sporty, energetic,
very short brown hair, pixie cut, short bob, ears visible,
green eyes, bright eyes, round eyes, star-shaped pupils,
tanned skin, healthy skin,
athletic body, toned abs, large breasts, narrow waist, wide hips, muscular thighs,
white volleyball uniform, sleeveless, orange stripes, jersey number 19,
navy hot pants, black arm sleeve on left arm,
hand on hip, other arm at side, confident pose, standing,
big smile, open mouth, teeth, looking at viewer, cheerful,
cowboy shot, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `long hair, twin tails, ponytail, pale skin, full body, knees, feet`)

### dain_active.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, athletic, sporty,
very short brown hair, pixie cut, sweaty hair, hair stuck to forehead,
green eyes, intense gaze, fierce eyes, sweat, sweatdrop, flushed cheeks,
tanned skin, athletic body, large breasts, narrow waist, wide hips,
volleyball uniform, sleeveless, jersey number 19, navy hot pants, black arm sleeve,
arms raised, spike pose, volleyball pose, dynamic pose,
panting, open mouth, exertion,
cowboy shot, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `long hair, full body`)

### dain_shy.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, athletic,
very short brown hair, pixie cut,
green eyes, looking down, downcast eyes, blush, full-face blush,
tanned skin, athletic body, large breasts, narrow waist,
volleyball uniform, sleeveless, jersey number 19, navy hot pants, black arm sleeve,
hands clasped in front, hunched shoulders, awkward smile, embarrassed,
cowboy shot, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `long hair, full body`)

### dain_laugh.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, athletic,
very short brown hair, pixie cut,
^_^, closed eyes, crescent eyes, big smile, open mouth, teeth, laughing,
flushed cheeks, blush stickers, tanned skin,
athletic body, large breasts, narrow waist,
volleyball uniform, sleeveless, jersey number 19, navy hot pants, black arm sleeve,
hand on hip, confident pose,
cowboy shot, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `long hair, full body`)

### dain_angry.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, athletic,
very short brown hair, pixie cut,
green eyes, sharp eyes, glaring, narrowed eyes, fierce gaze, furrowed brow,
showing teeth, gritted teeth, growling, angry expression,
flushed cheeks, tanned skin,
athletic body, large breasts, narrow waist,
volleyball uniform, sleeveless, jersey number 19, navy hot pants, black arm sleeve,
clenched fists, aggressive pose,
cowboy shot, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `long hair, full body`)

### dain_sad.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, athletic,
very short brown hair, pixie cut,
green eyes, drooping eyes, downcast eyes, sad expression, frown,
tanned skin, athletic body,
volleyball uniform, sleeveless, jersey number 19, navy hot pants, black arm sleeve,
arms hanging limply, slumped shoulders, dejected, gloomy,
cowboy shot, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `long hair, full body`)

### dain_pout.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, athletic,
very short brown hair, pixie cut,
green eyes, looking to the side, side-eye, pouting, puffy cheeks,
tanned skin, athletic body,
volleyball uniform, sleeveless, jersey number 19, navy hot pants, black arm sleeve,
crossed arms, head turned, defiant pose,
cowboy shot, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `long hair, full body`)

### dain_sweat.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, athletic,
very short brown hair, pixie cut,
green eyes, troubled eyes, awkward expression, single sweatdrop on temple,
flushed cheeks, blush, tanned skin,
holding white towel, towel against face, wiping face,
athletic body, volleyball uniform, sleeveless, jersey number 19, navy hot pants, black arm sleeve,
trembling lips, forced smile, conflicted,
cowboy shot, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `long hair, full body`)

### dain_bikini.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, athletic, college student,
very short brown hair, pixie cut, wet hair, hair stuck to forehead,
green eyes, bright eyes, confident smile,
tanned skin, water droplets on skin,
athletic body, toned abs, large breasts, narrow waist, wide hips, muscular thighs,
sport bikini, navy and white bikini, two-tone bikini,
indoor pool background, healthy energetic vibe,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `nsfw, lewd, explicit, long hair, full body, lower body`)

---

## 3. 캐릭터 — 유나 (Yuna) — 고스/다크 히로인

> **기본 외형 태그**
> `1girl, solo, korean, college student, mysterious, gothic,
> shaggy hair, layered hair, shoulder length hair, silver hair, white hair, messy hair, wispy bangs,
> red eyes, sharp eyes, narrow eyes, slit eyes,
> very pale skin, gothic skin,
> tattoos, full sleeve tattoo, body tattoo, kanji tattoo, geometric tattoo, neck tattoo, arm tattoo,
> 6.5 head body, slender, large breasts, narrow waist, wide hips, curvy,
> navy blazer, gold emblem, open jacket, sleeves rolled up,
> dark grey shirt, black shirt, white collar visible,
> navy pleated skirt, miniskirt`

### yuna_normal.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, college student, mysterious, gothic,
silver hair, shaggy hair, layered hair, shoulder length, messy hair, wispy bangs,
red eyes, sharp eyes, narrow eyes, vertical highlights in eyes,
very pale skin, gothic atmosphere,
arm tattoo, kanji tattoos, geometric tattoos, neck tattoo, full sleeve tattoo,
slender, large breasts, narrow waist, wide hips,
navy blazer, gold emblem, open jacket, sleeves rolled up,
dark grey shirt, white collar peek, navy pleated miniskirt, thigh tattoo,
expressionless, neutral expression, slight frown, cold gaze, looking at viewer,
upper body, anime visual novel sprite, cel shading, clean lineart, dramatic shadows,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `tan skin, healthy skin, smile, cheerful, full body`)

### yuna_shy.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, gothic,
silver hair, shaggy hair, shoulder length, hair over cheek,
red eyes, looking away, side glance, wavering eyes, surprised eyes,
very pale skin, deep blush, full-face blush, dramatic blush contrast,
arm tattoos, neck tattoo,
slender, large breasts, narrow waist,
navy blazer, gold emblem, open jacket, dark shirt, white collar, navy pleated miniskirt,
hand near mouth, awkward, embarrassed, dropped guard,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `tan skin, full body`)

### yuna_smile.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, gothic,
silver hair, shaggy hair, shoulder length,
red eyes, soft eyes, warm highlights,
very pale skin, faint smile, slight smile, closed mouth, mona lisa smile,
subtle warmth, rare expression,
arm tattoos, neck tattoo,
slender, large breasts, narrow waist,
navy blazer, gold emblem, open jacket, dark shirt, white collar, navy pleated miniskirt,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `tan skin, big smile, open mouth, teeth, laughing, ^_^, bright expression, full body`)

### yuna_angry.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, gothic,
silver hair, shaggy hair, shoulder length,
red eyes, sharp eyes, slit pupils, snake-like eyes, narrowed eyes, glaring,
very pale skin, fierce expression,
gritted teeth, clenched teeth, tight lips, threatening,
arm tattoos, neck tattoo,
slender, large breasts, navy blazer, gold emblem, open jacket, dark shirt, white collar, navy pleated miniskirt,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `tan skin, full body`)

### yuna_sad.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, gothic,
silver hair, shaggy hair, hair covering face, hair over eye, half-closed eyes,
red eyes, dim highlights, downcast eyes, looking down,
very pale skin, slight frown, melancholy, empty expression, lonely,
arm tattoos, neck tattoo,
slender, navy blazer, gold emblem, open jacket, dark shirt, white collar, navy pleated miniskirt,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `tan skin, full body`)

### yuna_bored.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, gothic,
silver hair, shaggy hair, shoulder length,
red eyes, half-closed eyes, sleepy, bored, droopy eyes,
very pale skin, parted lips, yawning, lethargic,
hand on chin, cheek on hand, tilted head, lazy pose,
arm tattoos, neck tattoo,
slender, navy blazer, gold emblem, open jacket, dark shirt, white collar, navy pleated miniskirt,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `tan skin, full body`)

### yuna_bikini.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, gothic, mysterious,
silver hair, shaggy hair, wind-blown hair,
red eyes, seductive gaze, moonlit eyes, looking at viewer,
very pale skin,
full body tattoos, arm tattoos, leg tattoos, kanji tattoos, geometric tattoos,
chain necklace, red earrings, holding cigarette,
slender, large breasts, narrow waist, wide hips,
camouflage bikini, camo pattern bikini,
night beach background, moonlight,
upper body, anime visual novel sprite, cel shading, clean lineart, dramatic lighting,
solid bright green background, chromakey background, simple background
```
**네거티브:** (공통 + `nsfw, lewd, explicit, tan skin, full body, lower body`)

---

## 4. 캐릭터 — 담임선생님 (Teacher)

> **기본 외형 태그**
> `1girl, solo, korean, mature female, teacher, adult woman, beautiful,
> long hair, brown hair, wavy hair, long wavy hair, half updo,
> brown eyes, soft eyes, warm eyes, light skin,
> 7 head body, hourglass figure, large breasts, very narrow waist, wide hips, curvy,
> beige cardigan, knit cardigan, white blouse, open cardigan,
> khaki pencil skirt, high-waisted skirt, tight skirt, knee-length skirt`

### teacher_normal.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, teacher, beautiful, adult woman,
long brown hair, wavy hair, half updo, hair flip,
brown eyes, large soft eyes, golden highlights in eyes,
light skin, warm skin tone,
hourglass figure, large breasts, very narrow waist, wide hips, voluptuous, curvy,
beige knit cardigan, open cardigan, white blouse,
khaki high-waisted pencil skirt, knee-length skirt,
hands clasped in front, relaxed pose, slight body turn,
warm smile, gentle expression, soft smile, looking at viewer,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `school uniform, blazer, glasses, tattoo, dark hair, silver hair, full body`)

### teacher_smile.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, teacher,
long brown hair, wavy hair, half updo,
brown eyes, crescent eyes, smile lines, laugh lines around eyes,
light skin, blush stickers, natural blush,
^_^, big smile, slightly open mouth, teeth, warm laughter, genuine smile,
hourglass figure, large breasts, very narrow waist, wide hips,
beige knit cardigan, white blouse, khaki pencil skirt,
hands clasped in front,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `school uniform, glasses, tattoo, full body`)

### teacher_shy.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, teacher,
long brown hair, wavy hair, half updo,
brown eyes, looking down, downcast eyes,
light skin, full-face blush, deep blush, embarrassed,
biting lip, conflicted expression, awkward smile,
hourglass figure, large breasts, narrow waist, wide hips,
beige knit cardigan, white blouse, khaki pencil skirt,
hands clasped in front, defensive posture, hands covering chest,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `school uniform, glasses, tattoo, full body`)

### teacher_angry.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, teacher,
long brown hair, wavy hair, half updo, neat hair,
brown eyes, sharp eyes, narrowed eyes, cold gaze,
light skin, frown, tight lips, furrowed brow, stern expression, strict,
hourglass figure, large breasts, narrow waist, wide hips,
beige knit cardigan, white blouse, khaki pencil skirt,
hand on hip, authoritative pose, intimidating,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `school uniform, glasses, tattoo, full body`)

### teacher_sad.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, teacher,
long brown hair, wavy hair, hair down, dull hair,
brown eyes, drooping eyes, downcast eyes, faded highlights,
light skin, dark circles, faint shadows under eyes,
sad, frown, tired, exhausted, slumped shoulders,
hourglass figure, large breasts, narrow waist,
beige knit cardigan, white blouse, khaki pencil skirt,
hands loosely clasped, weary pose,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `school uniform, glasses, tattoo, full body`)

### teacher_bikini.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, beautiful, adult woman,
long brown hair, wavy hair, hair updo, hair tied up,
brown eyes, soft warm gaze, mature smile, elegant smile,
sunglasses on head, hair accessory,
light skin, hourglass figure, large breasts, very narrow waist, wide hips, voluptuous,
gold bikini, gold swimsuit, elegant swimwear,
resort poolside background, mature elegance,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `nsfw, lewd, explicit, school uniform, glasses, tattoo, full body, lower body`)

---

## 5. 캐릭터 — 보건선생님 (Nurse)

> **기본 외형 태그**
> `1girl, solo, korean, mature female, school nurse, beautiful,
> short hair, ash purple hair, light purple hair, lavender hair, sharp bob, blunt bob cut, jaw-length bob,
> brown eyes, sharp eyes, cat eyes, fox eyes, narrow eyes,
> light skin, {{glasses}}, {{round eyewear}}, {{black-framed eyewear}}, glasses on face, visible glasses frame, clear lenses, glasses temples, nose pads,
> 7 head body, glamorous figure, large breasts, narrow waist, wide hips, curvy,
> white doctor coat, white lab coat, open coat,
> pink blouse, deep v-neck blouse,
> black miniskirt, stethoscope around neck`

### nurse_normal.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, school nurse, beautiful,
short ash purple hair, lavender hair, sharp bob, blunt bob cut, jaw-length,
brown eyes, sharp eyes, cat eyes, playful eyes, sparkle in eyes,
light skin, {{glasses}}, {{round eyewear}}, {{black-framed eyewear}}, glasses on face, visible glasses frame, clear lenses, glasses temples, nose pads,
glamorous figure, large breasts, narrow waist, wide hips, curvy,
white doctor coat, open coat, pink deep v-neck blouse, cleavage,
black miniskirt, stethoscope around neck,
adjusting glasses, hand on glasses, other hand on hip,
playful smirk, smug smile, half smile, knowing look, looking at viewer,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `school uniform, blazer, tattoo, full body, no glasses, missing glasses, glasses removed, bare face, contact lenses, sunglasses`)

### nurse_shy.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, school nurse,
short ash purple hair, lavender hair, sharp bob,
brown eyes, {{glasses}}, {{round eyewear}}, {{black-framed eyewear}}, glasses on face, visible glasses frame, clear lenses, glasses temples, nose pads,
light skin, full-face blush, deep blush, embarrassed,
forced smirk, wavering eyes, dropped composure,
glamorous figure, large breasts, narrow waist,
white doctor coat, pink blouse, black miniskirt, stethoscope around neck,
sitting pose, hands awkwardly placed,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `school uniform, blazer, tattoo, full body, no glasses, missing glasses, glasses removed, bare face, contact lenses, sunglasses`)

### nurse_angry.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, school nurse,
short ash purple hair, lavender hair, sharp bob, neat hair,
brown eyes, sharp eyes, {{glasses}}, {{round eyewear}}, {{black-framed eyewear}}, glasses on face, visible glasses frame, clear lenses, glasses temples, nose pads, glaring over glasses, glasses sliding down,
light skin, frown, tight lips, serious expression, mask off,
glamorous figure, large breasts, narrow waist,
white doctor coat, pink blouse, black miniskirt, stethoscope around neck,
crossed arms, intimidating pose, sitting,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `school uniform, blazer, tattoo, smile, smirk, full body, no glasses, missing glasses, glasses removed, bare face, contact lenses, sunglasses`)

### nurse_bikini.png
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, mature female, beautiful,
short ash purple hair, lavender hair, sharp bob, jaw-length, exposed neck,
sunglasses on head, no glasses on face, hair flower, flower hair ornament,
brown eyes, seductive gaze, playful smile,
light skin, glamorous figure, large breasts, narrow waist, wide hips,
white bikini, elegant swimwear,
sunset beach background, golden hour, sensual elegance,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `nsfw, lewd, explicit, school uniform, blazer, tattoo, glasses on face, full body, lower body`)

---

## 6. 주인공 (MC) — 외형 설정만 (스프라이트 미생성)

> 주인공은 게임 내 1인칭 — 정면 얼굴 미생성. CG에서만 뒷모습/실루엣으로 등장.
>
> **CG용 기본 태그**
> ```
> 1boy, solo, korean, college student, average build, 175cm,
> short dark brown hair, messy hair, fringe over forehead,
> light skin, plain features, ordinary face,
> navy blazer, school uniform, gold emblem, white dress shirt,
> loose navy necktie, navy slacks,
> from behind, back view, faceless, no face visible
> ```

---

## 7. 서브캐릭터

### minsu_normal.png — 민수 (MC의 짝꿍)
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1boy, solo, korean, college student, ordinary, plain,
short dark brown hair, messy hair, fringe,
black eyes, dull eyes, neutral expression, indifferent,
average skin, average build,
white dress shirt, dark blazer, loose necktie, school uniform style,
hands in pockets, relaxed pose, slight body turn,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:**
```
lowres, worst quality, low quality, bad anatomy, bad hands, bad fingers,
extra fingers, fused fingers, missing fingers, deformed hands,
blurry, jpeg artifacts, sketch, monochrome,
multiple views, multiple boys, 2boys, crowd,
watermark, signature, text, logo, cropped, out of frame,
3d, realistic, photo,
1girl, female, handsome, pretty boy, bishounen,
full body, knees, feet, lower body,
particles, light particles, lens flare, glowing aura, light rays,
film grain, film strip, white border, white margin
```

### minsu_smirk.png — 민수 (한심한 웃음)
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1boy, solo, korean, college student, ordinary,
short dark brown hair, messy hair,
black eyes, raised eyebrow, smirk, half smile, condescending look,
average skin, average build,
white dress shirt, dark blazer, loose necktie, school uniform style,
crossed arms, head tilted, casual pose,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (minsu_normal과 동일)

### haeun_normal.png — 하은 (서연의 부회장)
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, college student, demure, polite,
shoulder-length hair, straight dark brown hair, dark hair,
hairband, white hairband, simple hairband,
brown eyes, soft round eyes, gentle eyes,
light skin, clean skin,
slim figure, modest figure, narrow waist,
white blouse, dark skirt, dark blazer, fully buttoned blazer, prim and proper,
hands clasped in front, modest pose, polite stance,
slight smile, polite smile, gentle expression, looking at viewer,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `glasses, tattoo, full body`)

### haeun_worried.png — 하은 (걱정)
**프롬프트:**
```
masterpiece, best quality, very aesthetic, absurdres, newest,
1girl, solo, korean, college student, demure,
shoulder-length straight dark hair, white hairband,
brown eyes, anxious eyes, wavering eyes, troubled look, furrowed brow,
light skin, slim figure,
white blouse, dark skirt, dark blazer,
own hands clasped, hands clasped at chest, defensive nervous pose,
upper body, anime visual novel sprite, cel shading, clean lineart,
solid bright green background, chromakey background, simple background, soft diffuse lighting
```
**네거티브:** (공통 + `glasses, tattoo, full body`)

---

## 8. 이벤트 CG — 영어 자연어 프롬프트

> **이벤트 CG는 NovelAI보다 Imagen 4 / Gemini 3.1 Flash Image가 적합** (다중 인물·복합 장면).
> NovelAI로 시도할 경우 캐릭터 1명짜리만 사용 권장. 다인 부상/우울 같은 1인 CG는 가능.
>
> NovelAI는 단일 캐릭터 생성에 강하고 다중 인물/복잡 구도/특정 손동작에 약합니다.
> 이벤트 CG는 [PROMPTS_READY.md](PROMPTS_READY.md)의 Imagen/Gemini 프롬프트 사용을 권장합니다.

---

## 9. 배경 — NovelAI는 비추천

> **배경은 NovelAI 비추천.** 캐릭터 학습 데이터가 압도적이라 인물 없는 풍경 구성이 약합니다.
> 배경은 [PROMPTS_READY.md](PROMPTS_READY.md)의 Imagen 4 Ultra 프롬프트 그대로 사용 권장.
>
> 굳이 NovelAI로 배경을 뽑는다면:
> - 네거티브에 `1girl, 1boy, person, character, human` 강하게 추가
> - 프롬프트에 `scenery, no humans, empty room, landscape only` 명시

---

## 사용 팁

### NovelAI 결과가 안 좋을 때 체크리스트
1. **Steps 28** 인지 확인 (1로 시작되어 있는 경우 흔함)
2. **CFG 5** 인지 확인
3. **Sampler를 Euler로** 바꿔보기
4. **퀄리티 태그**가 프롬프트 맨 앞에 있는지 확인
5. **`solo, 1girl`** 누락 체크 (군중 생성의 주범)
6. 손이 망가지면 네거티브에 `bad hands, extra fingers, fused fingers` 강화
7. 비율이 이상하면 `large breasts` → `medium breasts`로 톤다운

### 시드 활용
- 마음에 드는 결과가 나오면 Seed 고정 후 표정/포즈만 바꿔가며 시리즈 생성
- 같은 시드 + 다른 표정 태그 = 같은 캐릭터의 다른 컷

### Vibe Transfer 활용
- 1번 캐릭터(_normal)를 먼저 만족스럽게 뽑기
- 그 결과를 Vibe Transfer로 넣고 같은 화풍으로 다른 표정/캐릭터 생성
- 시리즈 톤 통일에 효과적

### 캐릭터 일관성 (가장 어려운 부분)
- NovelAI는 `same character` 보장이 약함 — 같은 외형 태그를 써도 매번 미세하게 다름
- 캐릭터 일관성이 중요하면: Imagen 4 Ultra로 _normal 1장 → Gemini 3.1 Flash Image로 표정 변형
- NovelAI 단독으로 일관성 강제: Vibe Transfer + Seed 고정 + 동일 프롬프트 + i2i 약하게 적용
