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

const endings = [
  {
    name: 'ending_perfect_seoyeon',
    refs: [mcSide, seyounRef],
    prompt: `Create an anime visual novel event CG (1024x1024). Use these two character references for appearance consistency.

Scene: School rooftop at sunset. Golden orange sky with pink clouds.
The male student (reference 1: dark brown short hair, navy blazer uniform) stands on the left, shown from the side/back angle - his face is NOT visible, only jawline and side profile.
The female student (reference 2: long black wavy hair, round black glasses, navy blazer uniform) is on his right, linking both her arms around his arm and leaning her head on his shoulder. She is looking up at him with eyes half-closed in a happy smile, light blush on her cheeks.
Sunset backlighting makes their hair glow golden. Wind gently blowing her long black hair.
Romantic warm atmosphere, intimate couple moment on the rooftop.
Anime cel-shaded art style, no text, no watermark.`
  },
  {
    name: 'ending_perfect_yuna',
    refs: [mcBack, yunaRef],
    prompt: `Create an anime visual novel event CG (1024x1024). Use these two character references for appearance consistency.

Scene: Dark secret hideout (abandoned rooftop or secluded space) at night. Moonlight streaming through gaps.
The male student (reference 1: dark brown short hair, navy blazer uniform) stands facing away from the viewer - his back is visible.
Behind him, the female student (reference 2: silver-white shoulder-length wolf cut hair, red eyes, pale skin, black ink tattoos on arms and neck, navy blazer with black shirt) is quietly hugging him from behind (back hug). Her arms wrapped around his waist, her face buried against his back, eyes closed. Her tattoo-covered arms visible against his navy blazer.
Moonlight illuminating her silver hair. A silent, intimate moment - the cold girl letting her guard down for the first time.
Anime cel-shaded art style, no text, no watermark.`
  },
  {
    name: 'ending_perfect_dain',
    refs: [mcSide, dainRef],
    prompt: `Create an anime visual novel event CG (1024x1024). Use these two character references for appearance consistency.

Scene: School gymnasium after hours. Orange sunset light streaming through tall windows, long shadows on the wooden floor.
The female student (reference 2: brown short bob hair, bright green eyes, tanned skin, white ETAURS #19 volleyball uniform with orange lines, black arm sleeve on left arm) has jumped up and is hugging the male student (reference 1: dark brown short hair, navy blazer uniform) around the neck. She is laughing with a wide energetic smile, sweat drops on her forehead.
The male student is catching her, shown from the side - only his jawline and side profile visible, NOT his full face. He looks flustered but happy.
A volleyball rolling on the floor nearby. Sunset backlighting creating a warm silhouette.
Energetic, youthful sports romance atmosphere.
Anime cel-shaded art style, no text, no watermark.`
  },
  {
    name: 'ending_bittersweet',
    refs: [mcBack],
    prompt: `Create an anime visual novel event CG (1024x1024). Use this character reference for the male student.

Scene: Rainy school entrance at dusk. Grey sky with heavy rain.
The male student (reference: dark brown short hair, navy blazer uniform) stands in the center, seen from behind, holding a transparent umbrella.
Far ahead beyond the school gate, a blurry female silhouette (NOT a specific character - just a vague shape) walks away in the rain, getting smaller.
Wet road reflecting streetlights and dim neon. Puddles on the ground.
Lonely, melancholic farewell atmosphere. Rain and solitude.
Anime cel-shaded art style, no text, no watermark.`
  },
  {
    name: 'ending_true_teacher',
    refs: [teacherRef],
    prompt: `Create an anime visual novel event CG (1024x1024). Use this character reference for the female teacher.

Scene: Quiet cafe by the window, late afternoon warm sunlight.
Two people sitting at a small table. On the left, only a male student's hand and navy blazer sleeve visible reaching across the table, gently holding the female teacher's hand.
The female teacher (reference: brown wavy long hair in half-up style, warm brown eyes, bright skin, beige knit cardigan over white blouse) is looking down at their joined hands with a deep blush on both cheeks, her other hand covering her mouth in shy embarrassment, a flustered smile peeking through.
Two coffee cups and cake on the table. Sunlight making her hair glow golden.
A secret hand-holding between teacher and student - the thrill of crossing a forbidden line. Warm yet tension-filled atmosphere.
Anime cel-shaded art style, no text, no watermark.`
  },
  {
    name: 'ending_true_nurse',
    refs: [mcSide, nurseRef],
    prompt: `Create an anime visual novel event CG (1024x1024). Use these two character references for appearance consistency.

Scene: Nurse teacher's apartment living room at night. Warm indirect lighting, city night view through the window.
Two people sitting on a couch. The male student (reference 1: dark brown short hair, white dress shirt - blazer removed) sits on the left, shown from the side/back - face NOT fully visible.
The female nurse teacher (reference 2: purple short bob hair, glasses, bright skin) wearing casual clothes (cozy knit sweater and long skirt instead of white coat) has fallen asleep leaning on the male student's shoulder. Her glasses slightly crooked. A blanket over her lap.
Two mugs on the armrest, TV screen glowing faintly.
Cozy, warm, safe atmosphere - a place where they can just be themselves.
Anime cel-shaded art style, no text, no watermark.`
  },
  {
    name: 'ending_harem',
    refs: [mcSide, seyounRef, yunaRef, dainRef],
    prompt: `Create an anime visual novel event CG (1024x1024). Use these character references.

Scene: School yard bench, bright daytime with blue sky.
Center: A flustered male student (reference 1: dark brown short hair, navy blazer) sitting on a bench looking overwhelmed, his face shown from a slight angle (jawline visible but not full frontal).
Surrounding him: Three girls -
Left: Long black wavy hair girl with round glasses (reference 2) crossing her arms with a sharp jealous look
Right: Silver-white wolf cut hair girl with red eyes and arm tattoos (reference 3) standing with an expressionless cold stare
Behind: Brown short bob hair girl with green eyes in volleyball uniform (reference 4) draping her arm over the boy's shoulders with a big cheerful grin
Comedy-like chaotic harem situation. Bright and humorous atmosphere.
Anime cel-shaded art style, no text, no watermark.`
  },
  {
    name: 'ending_alone',
    refs: [mcBack],
    prompt: `Create an anime visual novel event CG (1024x1024). Use this character reference.

Scene: Dark apartment room at night. City lights faintly visible through curtains.
The male student (reference: dark brown short hair) sits alone at a desk, seen from behind. He has taken off his navy blazer (draped over the chair back) and wears only a white dress shirt. One hand propping up his chin, gazing out the window.
A turned-off phone screen and empty cup on the desk. The room is empty and quiet.
Lonely, contemplative solitude. The silence of being left alone.
Anime cel-shaded art style, no text, no watermark.`
  },
  {
    name: 'ending_friend',
    refs: [mcSide, seyounRef, yunaRef, dainRef, teacherRef],
    prompt: `Create an anime visual novel event CG (1024x1024). Use these character references.

Scene: Classroom on graduation day. Bright spring sunlight through windows. Chalkboard with graduation doodles, diplomas and flower bouquets on desks.
Five people taking a group selfie in the empty classroom:
Center: Male student (reference 1: dark brown short hair, navy blazer) holding up a phone for the selfie, slight angle so his face is partially visible
Next to him: Long black wavy hair girl with glasses (reference 2) smiling warmly
Other side: Silver-white wolf cut hair girl with red eyes (reference 3) with a very faint almost-smile
Nearby: Brown short bob hair girl with green eyes (reference 4) making a peace sign with a big grin
Behind them: Brown wavy long hair female teacher (reference 5) in beige cardigan doing a V-sign
Everyone with natural happy smiles. Warm friendship and graduation memories. Bright youthful atmosphere.
Anime cel-shaded art style, no text, no watermark.`
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
