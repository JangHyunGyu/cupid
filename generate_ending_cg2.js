const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const API_KEY = envContent.match(/GEMINI_API_KEY=(.+)/)?.[1]?.trim();
if (!API_KEY) { console.error('.env에서 GEMINI_API_KEY를 찾을 수 없습니다'); process.exit(1); }

const charDir = path.join(__dirname, 'assets', 'images', 'characters');
const bgDir = path.join(__dirname, 'assets', 'images', 'background');

const mcBack = fs.readFileSync(path.join(charDir, 'backup', 'mc_back_v2_1.png')).toString('base64');
const mcSide = fs.readFileSync(path.join(charDir, 'backup', 'mc_side_v1_3.png')).toString('base64');
const seyounRef = fs.readFileSync(path.join(charDir, 'seyoun_normal.png')).toString('base64');
const yunaRef = fs.readFileSync(path.join(charDir, 'backup', 'yuna_normal_v22_1.png')).toString('base64');
const dainRef = fs.readFileSync(path.join(charDir, 'dain_normal.png')).toString('base64');
const teacherRef = fs.readFileSync(path.join(charDir, 'teacher_normal.png')).toString('base64');
const nurseRef = fs.readFileSync(path.join(charDir, 'nurse_normal.png')).toString('base64');

const endings = [
  {
    name: 'ending_confess_fail_seoyeon',
    refs: [mcBack, seyounRef],
    prompt: `Create an anime visual novel event CG (1024x1024).
Scene: Park at twilight, orange-purple sky. Cherry blossom petals falling.
The male student (ref 1: dark brown short hair, navy blazer) stands facing away from viewer.
The girl (ref 2: long black wavy hair, round black glasses, navy blazer uniform) stands a few steps away, facing sideways. She has a complicated expression - not angry, not sad, just... quietly looking away. One hand adjusting her glasses. A painful silence between two people.
Distance between them feels vast despite being close. Fallen petals on the ground.
Anime cel-shaded art style, no text, no watermark.`
  },
  {
    name: 'ending_confess_fail_yuna',
    refs: [mcBack, yunaRef],
    prompt: `Create an anime visual novel event CG (1024x1024).
Scene: Park at twilight, dark purple sky. Wind blowing.
The male student (ref 1: dark brown short hair, navy blazer) stands facing away from viewer.
The girl (ref 2: silver-white wolf cut hair, red eyes, pale skin, tattoos on arms and neck, navy blazer with black shirt) has already turned her back and is walking away. Her silver hair blowing in the wind. She doesn't look back. Her posture is closed off - arms at her sides, shoulders tense.
The boy watches her leave. The gap between them growing.
Cold, silent rejection. She retreats back into her shell.
Anime cel-shaded art style, no text, no watermark.`
  },
  {
    name: 'ending_confess_fail_dain',
    refs: [mcBack, dainRef],
    prompt: `Create an anime visual novel event CG (1024x1024).
Scene: Park at twilight, warm orange fading sky.
The male student (ref 1: dark brown short hair, navy blazer) stands facing away from viewer.
The girl (ref 2: brown very short bob hair, bright green eyes, tanned skin, white volleyball uniform with orange lines, black arm sleeve on left arm) stands nearby, wiping her eyes with the back of her hand. She's trying to smile but failing - a forced grin with tears. She waves her hand dismissively like "it's fine, forget it."
Heartbreaking cheerfulness masking hurt. She can't be honest about her pain.
Anime cel-shaded art style, no text, no watermark.`
  },
  {
    name: 'ending_mayhem',
    refs: [mcBack, seyounRef, dainRef],
    prompt: `Create an anime visual novel event CG (1024x1024).
Scene: School hallway, harsh fluorescent lighting, tense atmosphere.
The male student (ref 1: dark brown short hair, navy blazer) in the center, seen from behind, frozen.
In front of him: two furious girls.
- Left: Long black wavy hair girl with round glasses (ref 2) arms crossed, ice-cold glare, glasses glinting. Silent fury.
- Right: Brown short bob hair girl with green eyes in volleyball uniform (ref 3) looking away, biting her lip, fists clenched. Trying not to cry.
Heavy uncomfortable silence. Caught red-handed atmosphere.
Anime cel-shaded art style, no text, no watermark.`
  },
  {
    name: 'ending_good_teacher',
    refs: [teacherRef],
    prompt: `Create an anime visual novel event CG (1024x1024).
Scene: School hallway after hours, warm golden afternoon light through windows.
The female teacher (ref: brown wavy long hair half-up, warm brown eyes, beige cardigan over white blouse, large full bust stretching the blouse, khaki pencil skirt) stands by a classroom window looking out with a gentle but slightly lonely smile. She holds papers against her large chest.
Students visible leaving school grounds through the window in the distance.
Bittersweet professional distance - she cares but maintains her role.
Anime cel-shaded art style, no text, no watermark.`
  },
  {
    name: 'ending_good_nurse',
    refs: [nurseRef],
    prompt: `Create an anime visual novel event CG (1024x1024).
Scene: School nurse's office, soft afternoon light.
The nurse teacher (ref: purple short bob hair, glasses, white lab coat over pink blouse, large bust) sits at her desk, leaning back with a knowing smirk. She holds a coffee mug with one hand and pushes her glasses up with the other.
Nurse bed visible in background with curtain half-drawn. Medical supplies on shelves.
Playful professional atmosphere - she knows something but won't say it.
Anime cel-shaded art style, no text, no watermark.`
  }
];

async function generateCG(ending) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;
  const parts = ending.refs.map(ref => ({ inlineData: { mimeType: 'image/png', data: ref } }));
  parts.push({ text: ending.prompt });

  const body = { contents: [{ parts }], generationConfig: { responseModalities: ['TEXT', 'IMAGE'] } };

  console.log(`[${ending.name}] Generating...`);
  const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  if (!response.ok) { console.error(`[${ending.name}] API error:`, (await response.text()).slice(0, 300)); return; }

  const data = await response.json();
  for (const c of (data.candidates || []))
    for (const p of (c.content?.parts || []))
      if (p.inlineData) {
        fs.writeFileSync(path.join(bgDir, `${ending.name}.png`), Buffer.from(p.inlineData.data, 'base64'));
        console.log(`[${ending.name}] Saved`);
      }
}

async function main() {
  for (const e of endings) await generateCG(e);
  console.log('All done!');
}
main().catch(console.error);
