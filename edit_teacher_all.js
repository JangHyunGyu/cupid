const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyBifxhf2ju_WBE-neT9D0wf4rZrjeAJ9kc';

const refImage = fs.readFileSync(path.join(__dirname, 'assets', 'images', 'characters', 'backup', 'teacher_normal_v12_1.png'));
const refBase64 = refImage.toString('base64');

const variants = [
  {
    name: 'teacher_smile',
    prompt: `Edit this anime character image. Keep everything the same. Change ONLY the expression subtly:
- Eyes slightly more curved with a hint of warmth, gentle smile lines at the corners
- Lips opened just slightly showing a natural warm smile - NOT exaggerated, just a gentle teacher's smile
- Faint natural pink on cheeks
- Keep the same pose, outfit, hair
Keep the green chroma key background.`
  },
  {
    name: 'teacher_shy',
    prompt: `Edit this anime character image. Keep everything the same. Change ONLY the expression subtly:
- Eyes looking slightly downward, avoiding direct eye contact
- Light blush on both cheeks
- Lips pressed together with a hint of embarrassment
- Keep the same pose - do NOT dramatically change the body pose
- A subtle mix of teacher composure and personal shyness
Keep the green chroma key background.`
  },
  {
    name: 'teacher_angry',
    prompt: `Edit this anime character image. Keep everything the same. Change ONLY the expression subtly:
- Eyes slightly sharper than normal, a subtle stern look
- Eyebrows angled down just barely
- Lips pressed into a firm line, the warm smile completely gone
- Slight tension in the jaw
- Professional strict teacher mode - controlled displeasure, NOT dramatic rage
- Keep the same pose
Keep the green chroma key background.`
  },
  {
    name: 'teacher_sad',
    prompt: `Edit this anime character image. Keep everything the same. Change ONLY the expression subtly:
- Eyes slightly drooped, gaze cast slightly downward
- The usual warmth dimmed, a tired look
- Lips slightly downturned, the smile gone
- Subtle weariness showing through the professional exterior
- Keep the same pose
Keep the green chroma key background.`
  },
  {
    name: 'teacher_bikini',
    prompt: `Edit this anime character image. Keep the same art style, same face, same brown wavy hair, same warm brown eyes. Change the outfit and hairstyle:
- Hair tied up in an elegant updo with sunglasses pushed up on forehead
- Gold bikini
- Full glamorous figure visible - large bust, slim waist, wide hips
- Relaxed mature confident smile
- Same warm brown eyes with a leisurely look
Keep the green chroma key background.`
  }
];

async function editImage(variant) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;

  const body = {
    contents: [{
      parts: [
        { inlineData: { mimeType: 'image/png', data: refBase64 } },
        { text: variant.prompt }
      ]
    }],
    generationConfig: {
      responseModalities: ['TEXT', 'IMAGE']
    }
  };

  console.log(`[${variant.name}] Editing...`);

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const err = await response.text();
    console.error(`[${variant.name}] API error:`, err.slice(0, 300));
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
        const outPath = path.join(__dirname, 'assets', 'images', 'characters', `${variant.name}.png`);
        fs.writeFileSync(outPath, Buffer.from(part.inlineData.data, 'base64'));
        console.log(`[${variant.name}] Saved`);
      }
    }
  }

  if (saved === 0) console.log(`[${variant.name}] No image returned`);
}

async function main() {
  for (const v of variants) {
    await editImage(v);
  }
  console.log('All done!');
}

main().catch(console.error);
