const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBifxhf2ju_WBE-neT9D0wf4rZrjeAJ9kc';

const refImage = fs.readFileSync(path.join(__dirname, 'assets', 'images', 'characters', 'backup', 'yuna_normal_v22_1.png'));
const refBase64 = refImage.toString('base64');

const variants = [
  {
    name: 'yuna_sad',
    prompt: `Edit this anime character image. Keep the same art style, same character design, same uniform, same tattoos, same hair, same pose. Change ONLY the expression very subtly:
- Eyes looking slightly downward, gaze lowered just a bit
- Keep the SAME deep red eye color - do NOT change the iris color at all
- Lips very slightly more downturned than normal
- Overall just a tiny bit more hollow/empty than her usual expressionless face
- The change should be MINIMAL - she's the type who looks almost the same when sad, just slightly emptier
- Keep the same pose with arms at sides
Replace green background with transparent background (PNG alpha).`
  },
  {
    name: 'yuna_shy',
    prompt: `Edit this anime character image. Keep the same art style, same character design, same uniform, same tattoos, same hair. Change ONLY the expression very subtly:
- Eyes shifted just slightly to the side, not making direct eye contact
- Very faint subtle pink blush on cheeks - barely visible, not bright red
- Keep the same pose with arms at sides - do NOT raise hands or change the body pose
- Lips pressed slightly together
- The change should be MINIMAL - her version of shy is just barely looking away, not dramatic blushing or hand gestures
Replace green background with transparent background (PNG alpha).`
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
        console.log(`[${variant.name}] Saved: ${outPath}`);
      }
    }
  }

  if (saved === 0) console.log(`[${variant.name}] No image returned`);
}

async function main() {
  for (const v of variants) {
    await editImage(v);
  }
  console.log('Done!');
}

main().catch(console.error);
