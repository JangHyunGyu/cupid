const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const API_KEY = envContent.match(/GEMINI_API_KEY=(.+)/)?.[1]?.trim();
if (!API_KEY) { console.error('.env에서 GEMINI_API_KEY를 찾을 수 없습니다'); process.exit(1); }

const bgDir = path.join(__dirname, 'assets', 'images', 'background');

const fixes = [
  {
    name: 'ending_perfect_yuna',
    refPath: path.join(bgDir, 'ending_perfect_yuna.png'),
    prompt: `Edit this anime CG image. The girl's BOTH tattooed arms should be visible wrapping around the boy's waist from behind. Currently only one arm is visible. Make both arms clearly visible - both tattooed arms wrapping around his torso from behind, with both hands meeting at his front/waist area. Keep everything else exactly the same.`
  },
  {
    name: 'ending_perfect_dain',
    refPath: path.join(bgDir, 'ending_perfect_dain.png'),
    prompt: `Edit this anime CG image. The girl's hairstyle MUST change - her current hair is too long (shoulder-length bob). Change it to a VERY SHORT bob cut that barely reaches her chin/jaw level, like a sporty pixie-bob. The hair should be much shorter than it is now - think tomboyish athletic short hair. Keep everything else exactly the same: same green eyes, same tanned skin, same volleyball uniform, same pose, same background.`
  }
];

async function editCG(fix) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;
  const refImage = fs.readFileSync(fix.refPath).toString('base64');

  const body = {
    contents: [{ parts: [
      { inlineData: { mimeType: 'image/png', data: refImage } },
      { text: fix.prompt }
    ]}],
    generationConfig: { responseModalities: ['TEXT', 'IMAGE'] }
  };

  console.log(`[${fix.name}] Fixing...`);
  const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });

  if (!response.ok) { console.error(`[${fix.name}] API error:`, (await response.text()).slice(0, 300)); return; }

  const data = await response.json();
  for (const c of (data.candidates || []))
    for (const p of (c.content?.parts || []))
      if (p.inlineData) {
        fs.writeFileSync(path.join(bgDir, `${fix.name}.png`), Buffer.from(p.inlineData.data, 'base64'));
        console.log(`[${fix.name}] Saved`);
      }
}

async function main() {
  for (const f of fixes) await editCG(f);
  console.log('Done!');
}
main().catch(console.error);
