const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const API_KEY = envContent.match(/GEMINI_API_KEY=(.+)/)?.[1]?.trim();
if (!API_KEY) { console.error('.env에서 GEMINI_API_KEY를 찾을 수 없습니다'); process.exit(1); }

const charDir = path.join(__dirname, 'assets', 'images', 'characters');
const bgDir = path.join(__dirname, 'assets', 'images', 'background');

const teacherRef = fs.readFileSync(path.join(charDir, 'teacher_normal.png')).toString('base64');

const prompt = `Create an anime visual novel event CG (1024x1024).
Scene: A beautiful outdoor cafe terrace or park with cherry blossoms at sunset. This is YEARS AFTER graduation - both are adults.
A tall broad-shouldered man in a sharp fitted dark navy BUSINESS SUIT with a crisp white dress shirt and tie, styled adult hairstyle (neat dark brown hair parted to the side, NOT a messy student cut - a mature professional look), bigger and more muscular build than a high school student. He stands facing the woman, shown from behind/side angle - face NOT visible. He holds out a large beautiful bouquet of flowers to her with both hands. Just a romantic gesture between lovers, not a proposal.
The woman (ref: brown wavy long hair flowing freely past shoulders, warm brown eyes, bright skin, large full bust) wearing elegant casual clothes - a cream off-shoulder knit and flowing long skirt. She receives the bouquet with both hands, pressing it against her chest, blushing deeply with a warm happy smile.
Cherry blossom petals falling around them. Warm golden sunset light.
A sweet date between two adults who are finally free to love openly.
Anime cel-shaded art style, no text, no watermark.`;

async function generate() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;

  const body = {
    contents: [{ parts: [
      { inlineData: { mimeType: 'image/png', data: teacherRef } },
      { text: prompt }
    ]}],
    generationConfig: { responseModalities: ['TEXT', 'IMAGE'] }
  };

  console.log('Generating teacher perfect ending (v2)...');
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
