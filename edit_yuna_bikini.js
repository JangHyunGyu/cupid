const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBifxhf2ju_WBE-neT9D0wf4rZrjeAJ9kc';

const refImage = fs.readFileSync(path.join(__dirname, 'assets', 'images', 'characters', 'yuna_bikini.png'));
const refBase64 = refImage.toString('base64');

const prompt = `Edit this anime character image. Keep everything the same: same art style, same face, same hair, same red eyes, same tattoos, same camouflage bikini, same transparent background, same pose. Only make this change:
- Make the bust/chest MUCH larger and fuller - the bikini top should be visibly stretched by large voluminous breasts, matching the bust size from her school uniform version where the black shirt is stretched
- Keep everything else pixel-perfect identical`;

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

  console.log('Editing yuna bikini bust...');

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
        const outPath = path.join(__dirname, 'assets', 'images', 'characters', 'yuna_bikini.png');
        fs.writeFileSync(outPath, Buffer.from(part.inlineData.data, 'base64'));
        console.log(`Saved: ${outPath}`);
      }
    }
  }

  if (saved === 0) console.log('No image returned');
}

edit().catch(console.error);
