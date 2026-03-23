const fs = require('fs');
const path = require('path');

// Read API key
const envContent = fs.readFileSync(path.join('d:/workspace/nevergrad/.env'), 'utf8');
const API_KEY = envContent.match(/GEMINI_API_KEY=(.+)/)?.[1]?.trim();
if (!API_KEY) { console.error('API key not found'); process.exit(1); }

async function main() {
    // Read SCENARIO.md and extract Day 3 후반 ~ end (from line 2702)
    const lines = fs.readFileSync('d:/workspace/cupid/SCENARIO.md', 'utf8').split('\n');
    const content = lines.slice(2701).join('\n'); // 0-indexed, so 2701 = line 2702

    console.log(`Extracted content: ${content.length} chars, ${lines.length - 2701} lines`);

    // Truncate if too long for API (max ~60000 chars to be safe with token limits)
    const truncated = content.substring(0, 90000);
    if (content.length > 90000) {
        console.log(`Truncated to 90000 chars (original: ${content.length})`);
    }

    const prompt = `당신은 비주얼 노벨 시나리오 전문 기획자입니다.

아래는 Cupid 로맨스 미연시의 SCENARIO.md Day 3 후반~Day 5 부분입니다.
(앞부분은 이미 92/100점을 받았습니다)

검증 항목:
1. Day 3 양다리 발각/대치 시나리오의 개연성
2. Day 4 데이트/고백/벽허물기의 감정 흐름
3. Day 5 작별/엔딩의 완결성
4. 18종 엔딩에 모두 도달 가능한가
5. 호감도 밸런스가 적절한가
6. 대사 스타일이 오글/올드하지 않은가
7. 스킨십 이벤트가 자연스러운가
8. 논리적 모순이 있는가

한국어로 답변. JSON 형식(마크다운 블록 없이):
{"pass": true/false, "score": 0~100, "strengths": ["잘 된 점"], "issues": [{"severity": "high/medium/low", "location": "위치", "description": "설명", "fix": "수정 제안"}], "summary": "평가"}

SCENARIO.md (Day 3 후반~끝):
${truncated}`;

    console.log(`Prompt length: ${prompt.length} chars`);
    console.log('Sending to Gemini API...');

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.2, maxOutputTokens: 8192 }
        })
    });

    const data = await res.json();

    if (!res.ok) {
        console.error('API Error:', JSON.stringify(data, null, 2));
        fs.writeFileSync('d:/workspace/cupid/gemini_day35_validate_result.json', JSON.stringify(data, null, 2));
        process.exit(1);
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) {
        console.error('No text in response:', JSON.stringify(data, null, 2));
        fs.writeFileSync('d:/workspace/cupid/gemini_day35_validate_result.json', JSON.stringify(data, null, 2));
        process.exit(1);
    }

    console.log('Response received. Parsing...');
    const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

    try {
        const result = JSON.parse(cleaned);
        console.log('\n=== Result ===');
        console.log(JSON.stringify(result, null, 2));
        fs.writeFileSync('d:/workspace/cupid/gemini_day35_validate_result.json', JSON.stringify(result, null, 2));
        console.log('\nSaved to gemini_day35_validate_result.json');
    } catch (e) {
        console.log('Failed to parse as JSON, saving raw text');
        console.log(text.substring(0, 3000));
        fs.writeFileSync('d:/workspace/cupid/gemini_day35_validate_result.json', text);
    }
}

main().catch(console.error);
