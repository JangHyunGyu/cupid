const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBifxhf2ju_WBE-neT9D0wf4rZrjeAJ9kc';

const refImage = fs.readFileSync(path.join(__dirname, 'assets', 'images', 'characters', 'yuna_smile.png'));
const refBase64 = refImage.toString('base64');

const prompt = `Edit this anime character image. Change ONLY the eye iris color from golden/amber to deep red/crimson. The eyes should be the same deep red color as in the original character design. Do NOT change anything else - same expression, same pose, same everything. Only the iris color changes from gold to red.`;

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

  console.log('Fixing yuna smile eye color...');

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
