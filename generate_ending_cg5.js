const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const API_KEY = envContent.match(/GEMINI_API_KEY=(.+)/)?.[1]?.trim();
if (!API_KEY) { console.error('.env에서 GEMINI_API_KEY를 찾을 수 없습니다'); process.exit(1); }

const charDir = path.join(__dirname, 'assets', 'images', 'characters');
const bgDir = path.join(__dirname, 'assets', 'images', 'background');

const mcSide = fs.readFileSync(path.join(charDir, 'backup', 'mc_side_v1_3.png')).toString('base64');
const teacherRef = fs.readFileSync(path.join(charDir, 'teacher_normal.png')).toString('base64');

const prompt = `Create an anime visual novel event CG (1024x1024). Use these two character references.
Scene: Beautiful outdoor cafe terrace with cherry blossoms at sunset. YEARS AFTER graduation - both adults.
The man (ref 1 - use this face/hair as reference: same dark brown short hair, same facial features, but now wearing a sharp navy business suit with white dress shirt and tie instead of school uniform). He stands facing the woman, shown from behind/side angle - face only partially visible (jawline and side profile matching ref 1). He holds out a large beautiful bouquet of flowers to her.
The woman (ref 2: brown wavy long hair flowing freely, warm brown eyes, bright skin, large full bust) wearing elegant cream off-shoulder knit and flowing long skirt. She receives the bouquet, pressing it against her chest, blushing deeply with happy smile.
IMPORTANT: The man's body should be the same slim average build as in reference 1, NOT muscular or overly broad. Same hairstyle as ref 1 but slightly more mature/neat.
Cherry blossom petals falling. Golden sunset light. A sweet date between two adults.
Anime cel-shaded art style, no text, no watermark.`;

async function generate() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;

  const body = {
    contents: [{ parts: [
      { inlineData: { mimeType: 'image/png', data: mcSide } },
      { inlineData: { mimeType: 'image/png', data: teacherRef } },
      { text: prompt }
    ]}],
    generationConfig: { responseModalities: ['TEXT', 'IMAGE'] }
  };

  console.log('Generating teacher perfect ending (v3 - MC sync)...');
  const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  if (!response.ok) { console.error('API error:', (await response.text()).slice(0, 500)); return; }

  const data = await response.json();
  for (const c of (data.candidates || []))
    for (const p of (c.content?.parts || []))
      if (p.inlineData) {
        fs.writeFileSync(path.join(bgDir, 'ending_perfect_teacher.png'), Buffer.from(p.inlineData.data, 'base64'));
        console.log('Saved');
      }
}

generate().catch(console.error);
