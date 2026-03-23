const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBifxhf2ju_WBE-neT9D0wf4rZrjeAJ9kc';

const refImage = fs.readFileSync(path.join(__dirname, 'assets', 'images', 'characters', 'backup', 'yuna_normal_v14_1.png'));
const refBase64 = refImage.toString('base64');

const variants = [
  {
    name: 'yuna_shy',
    prompt: `Edit this anime character image. Keep the same art style, same silver hair, same red eyes, same tattoos on arms legs and neck, same uniform (navy blazer, black shirt, white collar, white cuffs), same green chroma key background. Change ONLY the expression and pose:
- One hand touching near mouth, eyes looking away to the side in a shy manner
- The red eyes are wavering, the usual cold guard has broken down
- Bright red blush on both cheeks contrasting with pale skin
- Silver hair falling to partially cover the cheek
- A rare vulnerable shy moment from this usually cold character
- No necklace on neck, keep neck tattoos visible`
  },
  {
    name: 'yuna_smile',
    prompt: `Edit this anime character image. Keep the same art style, same silver hair, same red eyes, same tattoos on arms legs and neck, same uniform (navy blazer, black shirt, white collar, white cuffs), same green chroma key background. Change ONLY the expression:
- Lips turned up just 1-2mm in a subtle faint smile, teeth NOT visible
- Red eyes become slightly softer, the sharpness is reduced, highlights become warmer
- An extremely rare expression - hidden warmth seeping through the cold exterior
- Keep the same standing pose
- No necklace on neck, keep neck tattoos visible`
  },
  {
    name: 'yuna_angry',
    prompt: `Edit this anime character image. Keep the same art style, same silver hair, same red eyes, same tattoos on arms legs and neck, same uniform (navy blazer, black shirt, white collar, white cuffs), same green chroma key background. Change ONLY the expression:
- Red eyes narrowed sharply, glaring straight ahead with a threatening intimidating gaze, pupils constricted vertically like a snake
- Lips pressed tight, teeth clenched in a threatening angry expression
- Combined with the tattoos it creates an almost terrifying impression
- Silver hair slightly bristling with fury
- No necklace on neck, keep neck tattoos visible`
  },
  {
    name: 'yuna_sad',
    prompt: `Edit this anime character image. Keep the same art style, same silver hair, same red eyes, same tattoos on arms legs and neck, same uniform (navy blazer, black shirt, white collar, white cuffs), same green chroma key background. Change ONLY the expression and pose:
- Silver hair drooping, partially covering the face
- Red eyes half-closed, gaze looking downward, highlights nearly gone leaving dark empty pupils
- Lips slightly downturned
- A languid deep sadness emanating from the expression
- Not coldness but emptiness and hollowness
- Shoulders slightly slumped
- No necklace on neck, keep neck tattoos visible`
  },
  {
    name: 'yuna_bored',
    prompt: `Edit this anime character image. Keep the same art style, same silver hair, same red eyes, same tattoos on arms legs and neck, same uniform (navy blazer, black shirt, white collar, white cuffs), same green chroma key background. Change ONLY the expression and pose:
- One hand propping up the chin or head tilted to the side in a languid lazy pose
- Red eyes half-closed in a sleepy bored expression
- Mouth slightly open as if holding back a yawn
- An attitude of complete disinterest in everything around
- Listless default state
- No necklace on neck, keep neck tattoos visible`
  },
  {
    name: 'yuna_bikini',
    prompt: `Edit this anime character image. Keep the same art style, same silver hair, same red eyes, same face, same tattoos visible on the whole body. Change the outfit and mood:
- Change the school uniform to a camouflage pattern bikini
- Full body tattoos now fully visible - kanji characters and geometric patterns covering arms, torso, legs
- Red eyes glowing provocatively in moonlight
- Silver hair blowing in the night breeze
- A provocative decadent atmosphere
- No necklace, red earrings kept
- Keep green chroma key background`
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

  if (saved === 0) {
    console.log(`[${variant.name}] No image returned`);
  }
}

async function main() {
  // Run sequentially to avoid rate limits
  for (const v of variants) {
    await editImage(v);
  }
  console.log('All done!');
}

main().catch(console.error);
