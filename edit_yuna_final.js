const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBifxhf2ju_WBE-neT9D0wf4rZrjeAJ9kc';

const variants = [
  {
    name: 'yuna_smile',
    refPath: 'backup/yuna_normal_v22_1.png',
    prompt: `Edit this anime character image. Keep everything exactly the same - same pose, same body, same outfit, same hair, same tattoos, same image size 1024x1024. Do NOT resize or crop the image. Change ONLY the mouth area:
- Move the lip corners up by the absolute tiniest amount possible
- Keep the same deep RED eye color - absolutely do NOT change eye color
- Eyes stay identical
- The difference from the original should be almost invisible
- Do NOT change the image dimensions or crop
Keep the green chroma key background.`
  },
  {
    name: 'yuna_bikini',
    refPath: 'yuna_bikini.png',
    prompt: `Edit this anime character image. Keep everything the same - same face, same hair, same red eyes, same camouflage bikini, same pose.
Add natural-looking tattoo patterns to the torso area - some scattered kanji characters and geometric patterns on the upper chest above the bikini, on the sides of the ribcage, and on the stomach/abdomen area. The tattoos should look natural and flow with the body, not too dense - lighter and more spread out than the arm tattoos. They should blend naturally between the dense arm/leg tattoos and the clean bikini area.
Keep the green chroma key background.`
  }
];

async function editImage(variant) {
  const charDir = path.join(__dirname, 'assets', 'images', 'characters');
  const refImage = fs.readFileSync(path.join(charDir, variant.refPath));
  const refBase64 = refImage.toString('base64');

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
        const outPath = path.join(charDir, `${variant.name}.png`);
        fs.writeFileSync(outPath, Buffer.from(part.inlineData.data, 'base64'));
        console.log(`[${variant.name}] Saved (${Buffer.from(part.inlineData.data, 'base64').length} bytes)`);
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
