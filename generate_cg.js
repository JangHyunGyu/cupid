const fs = require('fs');
const path = require('path');

const API_KEY = fs.readFileSync(path.join(__dirname, '..', '.env.txt'), 'utf8')
    .split('\n').find(l => l.startsWith('GEMINI_API_KEY='))
    ?.split('=')[1]?.trim();

if (!API_KEY) { console.error('API key not found'); process.exit(1); }

const CG_PROMPTS = [
    {
        id: 'nurse_home_event1',
        output: 'assets/images/background/nurse_home_event1.png',
        refImage: 'assets/images/characters/nurse_normal.webp',
        prompt: `Using this character as reference, create an anime visual novel event CG scene. Keep the character's exact appearance (ash lavender short bob hair with sharp cut at jawline, brown eyes, round glasses, beauty mark/mole near lips, glamorous voluptuous figure). Change the scene to: front-facing camera angle looking directly at viewer. She is sitting on a cozy sofa in her apartment at night, wearing a loose pink cardigan over a deep V-neck white top showing cleavage line, comfortable black casual shorts (NOT a skirt), stomach area covered not see-through. Holding a steaming coffee cup with BOTH hands (not touching glasses). Warm lamp lighting, night window view behind. Gentle meaningful smile with one corner raised. Cozy relaxed intimate atmosphere. 1024x1024, anime art style, no text no watermark.`
    },
    {
        id: 'dain_hurt_event1',
        output: 'assets/images/background/dain_hurt_event1.png',
        refImage: 'assets/images/characters/dain_normal.webp',
        prompt: `Using this character as reference, create an anime visual novel event CG scene with only ONE character. Keep the character's exact appearance (brown short bob hair, bright green eyes, tanned skin, athletic toned body with 7 head proportions tall slender figure, white ETAURS #19 volleyball uniform with orange lines, navy hot pants, black arm sleeve on left arm only). Change the scene to: she is sitting on the gymnasium wooden floor, both legs visible and extended, clutching her right knee with both hands in pain. Eyes shut tight, sweat drops, pained expression with teeth clenched. A volleyball on the floor nearby. Indoor gym with volleyball net in background. Dramatic emotional lighting. Only one person in the scene. 1024x1024, anime art style, no text no watermark.`
    },
    {
        id: 'dain_depression_event1',
        output: 'assets/images/background/dain_depression_event1.png',
        refImage: 'assets/images/characters/dain_normal.webp',
        prompt: `Using this character as reference, create an anime visual novel event CG scene with only ONE character. Keep the character's exact appearance (brown short bob hair, bright green eyes, tanned skin, athletic toned body with 7 head proportions tall slender figure, white ETAURS #19 volleyball uniform with orange lines, navy hot pants, black arm sleeve on left arm only). Change the scene to: she is sitting alone on the dark gymnasium floor, hugging her knees, crying quietly. Side/back view angle. Volleyball beside her. Dark empty gym with volleyball net. Dim moody lighting, teardrops visible. Lonely sad atmosphere. Only one person in the scene. 1024x1024, anime art style, no text no watermark.`
    }
];

async function generateCG(cg) {
    console.log(`\nGenerating: ${cg.id}...`);

    // Read reference image
    const imgBytes = fs.readFileSync(cg.refImage);
    const base64Img = imgBytes.toString('base64');
    const mimeType = cg.refImage.endsWith('.webp') ? 'image/webp' : 'image/png';

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key=${API_KEY}`;

    const body = {
        contents: [{
            parts: [
                {
                    inlineData: {
                        mimeType: mimeType,
                        data: base64Img
                    }
                },
                {
                    text: cg.prompt
                }
            ]
        }],
        generationConfig: {
            responseModalities: ["IMAGE", "TEXT"],
            temperature: 1.0
        }
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        const err = await response.text();
        console.error(`Failed ${cg.id}: ${response.status} ${err.substring(0, 300)}`);
        return false;
    }

    const data = await response.json();

    // Find image part in response
    const candidates = data.candidates || [];
    for (const candidate of candidates) {
        const parts = candidate.content?.parts || [];
        for (const part of parts) {
            if (part.inlineData?.data) {
                const imgBuffer = Buffer.from(part.inlineData.data, 'base64');
                fs.writeFileSync(cg.output, imgBuffer);
                console.log(`Saved: ${cg.output} (${(imgBuffer.length / 1024).toFixed(0)} KB)`);
                return true;
            }
        }
    }

    console.error(`No image in response for ${cg.id}:`, JSON.stringify(data).substring(0, 300));
    return false;
}

async function main() {
    const target = process.argv[2]; // optional: run specific CG by id
    for (const cg of CG_PROMPTS) {
        if (target && cg.id !== target) continue;
        const success = await generateCG(cg);
        if (!success) console.error(`FAILED: ${cg.id}`);
    }
    console.log('\nDone!');
}

main();
