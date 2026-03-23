const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBifxhf2ju_WBE-neT9D0wf4rZrjeAJ9kc';

const refImage = fs.readFileSync(path.join(__dirname, 'assets', 'images', 'characters', 'backup', 'teacher_normal_v10_1.png'));
const refBase64 = refImage.toString('base64');

const prompt = `Edit this anime character image. Keep everything exactly the same: same art style, same face, same brown wavy hair with half-up style, same warm brown eyes, same beige cardigan over white blouse, same khaki pencil skirt, same green background. Only change the pose:
- Both arms with elbows bent, hands gently clasped together in front of the waist/belly area
- A relaxed comfortable stance with both hands meeting at the center
- Keep the same warm gentle smile and approachable teacher aura
- Keep everything else identical`;

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

  console.log('Editing teacher pose...');

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
        const outPath = path.join(__dirname, 'assets', 'images', 'characters', 'backup', `teacher_normal_v11_${saved}.png`);
        fs.writeFileSync(outPath, Buffer.from(part.inlineData.data, 'base64'));
        console.log(`Saved: ${outPath}`);
      }
      if (part.text) {
        console.log('Model:', part.text.slice(0, 200));
      }
    }
  }

  if (saved === 0) console.log('No image returned');
}

edit().catch(console.error);
