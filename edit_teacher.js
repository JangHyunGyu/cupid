const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBifxhf2ju_WBE-neT9D0wf4rZrjeAJ9kc';

// 서연을 스타일 레퍼런스로 사용
const styleRef = fs.readFileSync(path.join(__dirname, 'assets', 'images', 'characters', 'seyoun_normal.png'));
const styleBase64 = styleRef.toString('base64');

const prompt = `Using the exact same anime art style as this reference image (same line art thickness, same cel-shading technique, same color saturation, same eye drawing style, same level of detail), draw a DIFFERENT character:

- Korean female teacher in her late 20s, NOT a student
- Brown wavy long hair past shoulders, half-up hairstyle with hair tied at the top
- Warm brown eyes with golden highlights
- Healthy bright skin tone
- Wearing: beige knit cardigan open over white blouse, khaki high-waist pencil skirt above knee
- Glamorous hourglass figure with full bust stretching the blouse, slim waist, round hips
- Pose: body angled about 10 degrees right, arms gently folded in front at waist, relaxed stance
- Warm gentle smile with lips softly curved up
- Professional yet approachable homeroom teacher aura
- Upper body portrait, 1024x1024
- Solid bright green chroma key background
- Front soft diffused lighting

CRITICAL: Match the art style EXACTLY - same bold outlines, same cel-shading with sharp shadow edges, same eye size and detail level, same color depth. Only the character design should differ.`;

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

  console.log('Generating teacher with Seoyeon style reference...');

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
        const outPath = path.join(__dirname, 'assets', 'images', 'characters', 'backup', `teacher_normal_v10_${saved}.png`);
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
