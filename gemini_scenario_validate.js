const fs = require('fs');
const path = require('path');
const API_KEY = fs.readFileSync(path.join(__dirname, '..', 'nevergrad', '.env'), 'utf8')
    .match(/GEMINI_API_KEY=(.+)/)?.[1]?.trim();

async function main() {
    const md = fs.readFileSync('SCENARIO.md', 'utf8');
    const prompt = `당신은 비주얼 노벨 시나리오 전문 기획자입니다.

아래 SCENARIO.md를 검증해주세요.

검증 항목:
1. 제로썸/질투 시스템이 캐릭터 성향에 맞게 설계되었는가?
2. 주인공 대응 선택지가 충분하고 다양한가?
3. 모든 엔딩(18종)에 도달 가능한 경로가 존재하는가?
4. 호감도 밸런스가 적절한가? (최적 110~120, PERFECT 80+)
5. 대사 스타일이 오글/올드하지 않은가?
6. 캐릭터 간 갈등이 자연스러운가?
7. 도달 불가능한 시나리오가 있는가?
8. 논리적 모순이 있는가?

한국어로 답변하세요. JSON 형식(마크다운 블록 없이):
{"pass": true 또는 false, "score": 0에서100, "strengths": ["잘 된 점들"], "issues": [{"severity": "high/medium/low", "location": "위치", "description": "설명", "fix": "수정 제안"}], "summary": "전체 평가"}

SCENARIO.md:
` + md;

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            contents: [{parts: [{text: prompt}]}],
            generationConfig: {temperature: 0.2, maxOutputTokens: 8192}
        })
    });
    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || JSON.stringify(data);
    const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    try {
        const result = JSON.parse(cleaned);
        console.log(JSON.stringify(result, null, 2));
        fs.writeFileSync('gemini_scenario_validate_result.json', JSON.stringify(result, null, 2));
    } catch {
        console.log(text.substring(0, 3000));
        fs.writeFileSync('gemini_scenario_validate_result.txt', text);
    }
}
main().catch(console.error);
