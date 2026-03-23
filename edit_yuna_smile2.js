const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBifxhf2ju_WBE-neT9D0wf4rZrjeAJ9kc';

const refImage = fs.readFileSync(path.join(__dirname, 'assets', 'images', 'characters', 'backup', 'yuna_normal_v22_1.png'));
const refBase64 = refImage.toString('base64');

const prompt = `Edit this anime character image. Keep the same art style, same character design, same uniform, same tattoos, same hair, same pose. Change ONLY the expression with the absolute minimum change:
- The corners of the lips lifted by the tiniest amount - almost imperceptible. NOT a grin, NOT showing teeth, NOT a smirk. Just the very faintest hint that the lips are not perfectly flat.
- Eyes remain exactly the same shape but the eye highlights become just slightly warmer
- This should look like she MIGHT be smiling or it might just be a trick of the light - ambiguous and barely there
- Keep the same cold demeanor overall
- Keep the same pose with arms at sides
Replace green background with transparent background (PNG alpha).`;

async function edit() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;

  const body = {
    contents: [{
      parts: [
        { inlineData: { mimeType: 'image/png', data: refBase64 } },
        { text: prompt }
      ]
    }],
    generationConfig: {
      responseModalities: ['TEXT', 'IMAGE']
    }
  };

  console.log('Editing yuna smile (more subtle)...');

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const err = await response.text();
    console.error('API error:', err.slice(0, 500));
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
        fs.writeFileSync(path.join(__dirname, 'assets', 'images', 'characters', 'yuna_smile.png'), Buffer.from(part.inlineData.data, 'base64'));
        console.log('Saved yuna_smile.png');
      }
    }
  }

  if (saved === 0) console.log('No image returned');
}

edit().catch(console.error);
