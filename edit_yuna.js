const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBifxhf2ju_WBE-neT9D0wf4rZrjeAJ9kc';

const refImage = fs.readFileSync(path.join(__dirname, 'assets', 'images', 'characters', 'backup', 'yuna_normal_v1_1.png'));
const refBase64 = refImage.toString('base64');

const editPrompt = `Edit this anime character image. Keep everything exactly the same: same art style, same pose, same silver hair, same tattoos on arms and legs and neck, same navy blazer uniform with black shirt and white cuffs, same green background, same standing pose with arms at sides, same expressionless face. Make these changes:
1. Remove the red blood streaks under the eyes. Clean smooth skin under eyes.
2. Remove the chain necklace from the neck. Bare neck with only tattoos.
3. Make the eyes significantly larger - big anime-style eyes, about 30% bigger than current. Keep the same deep red iris color and sharp cold gaze.
4. Make the bust much larger and fuller - the black shirt visibly stretched by large voluminous breasts.
Keep everything else exactly the same.`;

async function editImage() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;

  const body = {
    contents: [{
      parts: [
        {
          inlineData: {
            mimeType: 'image/png',
            data: refBase64
          }
        },
        { text: editPrompt }
      ]
    }],
    generationConfig: {
      responseModalities: ['TEXT', 'IMAGE']
    }
  };

  console.log('Editing yuna with Gemini Flash...');

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const err = await response.text();
    console.error('API error:', err);
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
        const outPath = path.join(__dirname, 'assets', 'images', 'characters', 'backup', `yuna_normal_v14_${saved}.png`);
        fs.writeFileSync(outPath, Buffer.from(part.inlineData.data, 'base64'));
        console.log(`Saved: ${outPath}`);
      }
      if (part.text) {
        console.log('Model text:', part.text);
      }
    }
  }

  if (saved === 0) {
    console.log('No images returned. Full response:');
    console.log(JSON.stringify(data, null, 2).slice(0, 2000));
  }
}

editImage().catch(console.error);
