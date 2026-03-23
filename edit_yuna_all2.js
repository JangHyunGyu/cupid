const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBifxhf2ju_WBE-neT9D0wf4rZrjeAJ9kc';

const refImage = fs.readFileSync(path.join(__dirname, 'assets', 'images', 'characters', 'backup', 'yuna_normal_v22_1.png'));
const refBase64 = refImage.toString('base64');

const variants = [
  {
    name: 'yuna_normal',
    prompt: `Edit this anime character image. Remove the green background and replace it with a completely transparent background (PNG with alpha transparency). Keep everything else exactly the same - same character, same pose, same expression, same details. Output as PNG with transparent background.`
  },
  {
    name: 'yuna_shy',
    prompt: `Edit this anime character image. Keep the same art style, same character design, same uniform, same tattoos, same hair. Change ONLY the expression and slight pose:
- Eyes looking away to the side, avoiding eye contact
- Subtle blush on both cheeks (light pink, not overdone)
- One hand slightly raised near the chin/mouth area
- A subtle vulnerable moment - the cold mask cracking just slightly
- Keep expression understated, not exaggerated
Replace green background with transparent background (PNG alpha).`
  },
  {
    name: 'yuna_smile',
    prompt: `Edit this anime character image. Keep the same art style, same character design, same uniform, same tattoos, same hair, same pose. Change ONLY the expression:
- Lips turned up just barely in a very subtle faint smile - NOT a big smile, just the tiniest upturn of the lips
- Eyes slightly softer than normal, the sharpness reduced just a bit
- An extremely rare and subtle expression - warmth barely peeking through the cold exterior
- Keep it minimal and understated
Replace green background with transparent background (PNG alpha).`
  },
  {
    name: 'yuna_angry',
    prompt: `Edit this anime character image. Keep the same art style, same character design, same uniform, same tattoos, same hair, same pose. Change ONLY the expression:
- Eyes narrowed sharply, glaring with a cold threatening gaze
- Eyebrows angled down
- Lips pressed tight, slight teeth clench visible
- An intimidating look but not over-the-top - controlled cold anger rather than screaming rage
Replace green background with transparent background (PNG alpha).`
  },
  {
    name: 'yuna_sad',
    prompt: `Edit this anime character image. Keep the same art style, same character design, same uniform, same tattoos, same hair. Change ONLY the expression:
- Eyes half-lidded, gaze cast slightly downward
- Eye highlights dimmed/faded
- Lips slightly downturned
- Shoulders very slightly drooped
- A quiet emptiness rather than dramatic crying - hollow and distant
- Keep it subtle and understated
Replace green background with transparent background (PNG alpha).`
  },
  {
    name: 'yuna_bored',
    prompt: `Edit this anime character image. Keep the same art style, same character design, same uniform, same tattoos, same hair. Change ONLY the expression and slight pose:
- Eyes half-closed in a sleepy bored look
- Head tilted slightly to one side
- One hand near the face, propping chin or touching cheek lazily
- Mouth slightly open as if holding back a yawn
- Total disinterest in everything - her default languid state
Replace green background with transparent background (PNG alpha).`
  },
  {
    name: 'yuna_bikini',
    prompt: `Edit this anime character image. Keep the same art style, same face, same hair, same red eyes, same tattoo style. Change the outfit:
- Replace school uniform with a camouflage pattern bikini top and bottom
- Full body tattoos now visible on torso, arms, legs - same kanji and geometric pattern style
- Same expressionless cold face
- Same pose
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
  console.log('All done!');
}

main().catch(console.error);
