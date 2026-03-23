const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBifxhf2ju_WBE-neT9D0wf4rZrjeAJ9kc';

const refImage = fs.readFileSync(path.join(__dirname, 'assets', 'images', 'characters', 'backup', 'yuna_normal_v22_1.png'));
const refBase64 = refImage.toString('base64');

const variants = [
  {
    name: 'yuna_normal',
    prompt: `Remove only the green background from this image and replace with solid black background (#000000). Keep the character exactly the same - do not change anything about the character at all.`
  },
  {
    name: 'yuna_shy',
    prompt: `Edit this anime character image. Keep the same art style, character, uniform, tattoos, hair. Change ONLY the expression very subtly:
- Eyes shifted just slightly to the side, barely avoiding eye contact
- Very faint pink blush on cheeks - barely visible
- Keep the same pose with arms at sides - do NOT change the body pose at all
- The change should be MINIMAL
Keep the green chroma key background as-is.`
  },
  {
    name: 'yuna_smile',
    prompt: `Edit this anime character image. Keep the same art style, character, uniform, tattoos, hair, pose. Change ONLY the expression with absolute minimum change:
- Lips turned up by the tiniest amount - almost imperceptible, NOT a grin
- Eyes remain the same deep RED color, just slightly warmer highlights
- Keep the same pose
Keep the green chroma key background as-is.`
  },
  {
    name: 'yuna_angry',
    prompt: `Edit this anime character image. Keep the same art style, character, uniform, tattoos, hair, pose. Change ONLY the expression very subtly:
- Eyes just slightly narrower than normal
- Eyebrows angled down barely
- Lips pressed slightly tighter
- MINIMAL change - cold quiet anger, not dramatic
Keep the green chroma key background as-is.`
  },
  {
    name: 'yuna_sad',
    prompt: `Edit this anime character image. Keep the same art style, character, uniform, tattoos, hair, pose. Change ONLY the expression very subtly:
- Eyes looking slightly downward, gaze lowered just a bit
- Keep the SAME deep RED eye color
- Lips very slightly more downturned
- MINIMAL change - just slightly emptier than normal
Keep the green chroma key background as-is.`
  },
  {
    name: 'yuna_bored',
    prompt: `Edit this anime character image. Keep the same art style, character, uniform, tattoos, hair. Change ONLY the expression very subtly:
- Eyes just slightly more droopy/half-lidded
- Head tilted just a tiny bit to one side
- Mouth very slightly open
- Keep arms at sides - do NOT add hand to face
- MINIMAL change
Keep the green chroma key background as-is.`
  },
  {
    name: 'yuna_bikini',
    prompt: `Edit this anime character image. Keep the same art style, face, hair, red eyes, tattoo style. Change the outfit:
- Replace school uniform with camouflage pattern bikini
- Full body tattoos visible - same kanji and geometric pattern style on torso, arms, legs
- Same expressionless face, same large bust size as the uniform version
Keep the green chroma key background as-is.`
  }
];

async function editImage(variant) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;

  const body = {
    contents: [{
      parts: [
        { inlineData: { mimeType: 'image/png', data: refBase64 } },
        { text: variant.prompt }
      ]
    }],
    generationConfig: {
      responseModalities: ['TEXT', 'IMAGE']
    }
  };

  console.log(`[${variant.name}] Editing...`);

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const err = await response.text();
    console.error(`[${variant.name}] API error:`, err.slice(0, 300));
    return;
  }

  const data = await response.json();
  const candidates = data.candidates || [];

  let saved = 0;
  for (const candidate of candidates) {
    const parts = candidate.content?.parts || [];
    for (const part of parts) {
      if (part.inlineData) {
        saved++;
        const outPath = path.join(__dirname, 'assets', 'images', 'characters', `${variant.name}.png`);
        fs.writeFileSync(outPath, Buffer.from(part.inlineData.data, 'base64'));
        console.log(`[${variant.name}] Saved`);
      }
    }
  }

  if (saved === 0) console.log(`[${variant.name}] No image returned`);
}

async function main() {
  for (const v of variants) {
    await editImage(v);
  }
  console.log('All done!');
}

main().catch(console.error);
