const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const API_KEY = envContent.match(/GEMINI_API_KEY=(.+)/)?.[1]?.trim();
if (!API_KEY) { console.error('.env에서 GEMINI_API_KEY를 찾을 수 없습니다'); process.exit(1); }

const charDir = path.join(__dirname, 'assets', 'images', 'characters');
const bgDir = path.join(__dirname, 'assets', 'images', 'background');

const nurseRef = fs.readFileSync(path.join(charDir, 'nurse_normal.png')).toString('base64');
const currentCG = fs.readFileSync(path.join(bgDir, 'ending_perfect_nurse.png')).toString('base64');

const prompt = `Edit this anime CG image. The man on the right is currently wearing a dark shirt/top. Change it so that his shoulders and upper back are bare skin - he should not be wearing any shirt or top. Only bare skin shoulders visible above the blanket, matching the woman's bare shoulders. Keep everything else exactly the same - same composition, same poses, same arm pillow, same woman, same bedding, same lighting.`;

async function generate() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;

  const body = {
    contents: [{ parts: [
      { inlineData: { mimeType: 'image/png', data: currentCG } },
      { text: prompt }
    ]}],
    generationConfig: { responseModalities: ['TEXT', 'IMAGE'] }
  };

  console.log('Editing nurse perfect - removing man shirt...');
  const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  if (!response.ok) { console.error('API error:', (await response.text()).slice(0, 500)); return; }

  const data = await response.json();
  for (const c of (data.candidates || []))
    for (const p of (c.content?.parts || []))
      if (p.inlineData) {
        fs.writeFileSync(path.join(bgDir, 'ending_perfect_nurse.png'), Buffer.from(p.inlineData.data, 'base64'));
        console.log('Saved');
      }
  console.log('Done');
}

generate().catch(console.error);
