const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBifxhf2ju_WBE-neT9D0wf4rZrjeAJ9kc';

// 서연을 스타일 레퍼런스로 사용
const styleRef = fs.readFileSync(path.join(__dirname, 'assets', 'images', 'characters', 'seyoun_normal.png'));
const styleBase64 = styleRef.toString('base64');

const prompt = `Using the exact same anime art style as this reference image (same bold line art thickness, same deep cel-shading technique with sharp shadow edges, same high color saturation, same large detailed eye drawing style, same level of detail and rendering quality), draw a COMPLETELY DIFFERENT character:

- Korean high school girl, mysterious dark goth vibe
- Silver-white short-to-medium messy hair, ends brushing shoulders
- Deep red/crimson eyes with vertical long cold highlights
- Pale translucent skin tone
- Slim balanced figure with full voluminous bust stretching the black shirt, slim waist, round hips
- Dense black ink tattoos covering both forearms and hands - kanji characters and geometric patterns packed tightly
- Tattoo patterns also on the neck area
- No necklace, bare neck (only tattoos)
- Red dangling earrings on both ears, multiple ear piercings
- Navy blazer school uniform, dark gray-to-black shirt underneath with white dress shirt collar peeking out, white cuffs visible, navy pleated skirt
- Blazer sleeves rolled up to elbows exposing arm tattoos
- Standing pose with body angled 10 degrees left, arms hanging at sides
- Expressionless face with slightly downturned lips, cold detached empty gaze
- Upper body portrait, 1024x1024
- Solid bright green chroma key background
- Front soft diffused lighting

CRITICAL: The art style must EXACTLY match the reference - same bold dark outlines, same deep cel-shading with hard shadow edges, same saturated colors, same large detailed anime eyes. Only the character design differs.`;

async function generate() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;

  const body = {
    contents: [{
      parts: [
        { inlineData: { mimeType: 'image/png', data: styleBase64 } },
        { text: prompt }
      ]
    }],
    generationConfig: {
      responseModalities: ['TEXT', 'IMAGE']
    }
  };

  console.log('Generating yuna with Seoyeon style reference...');

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
        const outPath = path.join(__dirname, 'assets', 'images', 'characters', 'backup', `yuna_normal_v15_${saved}.png`);
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

generate().catch(console.error);
