const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBifxhf2ju_WBE-neT9D0wf4rZrjeAJ9kc';

// 서연 스타일 레퍼런스 + v15 캐릭터 레퍼런스 둘 다 사용
const styleRef = fs.readFileSync(path.join(__dirname, 'assets', 'images', 'characters', 'seyoun_normal.png'));
const styleBase64 = styleRef.toString('base64');

const prompt = `Using the exact same anime art style as this reference image (same bold line art, same deep cel-shading, same high saturation, same large detailed eyes), draw this character:

- Korean high school girl, mysterious dark goth vibe, cold expressionless face
- Silver-white shoulder-length WOLF CUT hair - NO PARTING, no center part, no side part. Messy layered wolf cut with choppy layers falling naturally, wispy face-framing pieces, hair ends at shoulders
- Large deep red/crimson eyes with vertical long cold highlights, sharp cold gaze looking at viewer. NO dark lines or marks under the eyes - clean smooth pale skin
- Pale translucent skin
- Full voluminous bust stretching the black shirt, slim waist, round hips
- Dense black ink tattoos covering both forearms, hands, neck area, and thighs - kanji characters and geometric patterns
- NO earrings - completely bare ears
- NO necklace - bare neck showing only tattoos
- NO school badge/emblem on blazer
- Navy blazer school uniform with dark gray/black shirt underneath, white dress shirt collar peeking out, white cuffs visible
- Blazer sleeves rolled up exposing arm tattoos on BOTH arms (both arms must be visible)
- Very short navy pleated mini skirt showing tattooed thighs
- Body angled about 10 degrees to the RIGHT, both arms visible and hanging at sides
- Expressionless face with slightly downturned lips
- Upper body to mid-thigh portrait, 1024x1024
- Solid bright green chroma key background
- Front soft diffused lighting`;

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

  console.log('Generating yuna fresh with all fixes...');

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
        const outPath = path.join(__dirname, 'assets', 'images', 'characters', 'backup', `yuna_normal_v21_${saved}.png`);
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
