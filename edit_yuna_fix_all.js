const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBifxhf2ju_WBE-neT9D0wf4rZrjeAJ9kc';

const refImage = fs.readFileSync(path.join(__dirname, 'assets', 'images', 'characters', 'backup', 'yuna_normal_v22_1.png'));
const refBase64 = refImage.toString('base64');

const variants = [
  {
    name: 'yuna_angry',
    prompt: `Edit this anime character image. Keep everything the same. Change ONLY the facial expression with the absolute minimum change:
- Eyebrows angled down just slightly
- Eyes a tiny bit narrower
- Lips pressed just a bit tighter
- This is COLD QUIET anger - she gets quieter, not louder. The difference from normal should be barely noticeable.
- Do NOT change the pose, body, hair, or anything else
Keep the green chroma key background.`
  },
  {
    name: 'yuna_smile',
    prompt: `Edit this anime character image. Keep everything the same. Change ONLY the mouth area with the absolute minimum change:
- Move the lip corners up by the TINIEST possible amount - less than 1mm
- Keep the same deep RED eye color - do NOT change eye color to amber or gold
- Eyes stay almost identical, just the faintest warmth in the highlights
- This should be almost indistinguishable from her normal face - someone has to stare to notice
- Do NOT change the pose, body, hair, or anything else
Keep the green chroma key background.`
  },
  {
    name: 'yuna_shy',
    prompt: `Edit this anime character image. Keep everything the same including the image SIZE (1024x1024). Change ONLY the expression subtly:
- Eyes shifted slightly to one side, barely avoiding direct eye contact
- Very faint light pink on cheeks - almost invisible
- Keep the same pose with arms at sides
- Keep the same deep RED eye color
- MINIMAL change - her version of shy is just barely looking away
- Do NOT change the pose, body, hair, size, or anything else
Keep the green chroma key background. Keep 1024x1024 resolution.`
  },
  {
    name: 'yuna_bikini',
    prompt: `Edit this anime character image. Keep the same art style, same face, same silver hair, same red eyes. Change the outfit to camouflage pattern bikini.
IMPORTANT about tattoos: Tattoos should ONLY be on the arms, hands, legs, and neck - same areas as the uniform version. The chest, cleavage, bikini area, stomach, and abdomen must be CLEAN SKIN with NO tattoos at all. The bust and bikini line and belly area should show smooth pale skin.
- Same large bust size as the uniform version
- Same expressionless cold face
Keep the green chroma key background.`
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
