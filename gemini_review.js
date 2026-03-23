/**
 * Gemini 3.1 Pro를 사용한 시나리오 개연성 검증 스크립트
 * 사용법: node gemini_review.js <scenario_js_path> <i18n_ko_path> [issue_description]
 */
const fs = require('fs');
const path = require('path');

const API_KEY = fs.readFileSync(path.join(__dirname, '..', 'nevergrad', '.env'), 'utf8')
    .match(/GEMINI_API_KEY=(.+)/)?.[1]?.trim();

if (!API_KEY) {
    console.error('GEMINI_API_KEY not found');
    process.exit(1);
}

const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent?key=${API_KEY}`;

async function reviewScenario(scenarioContent, i18nContent, issueDesc) {
    const prompt = `당신은 비주얼 노벨 시나리오 개연성 전문 검수자입니다.

아래는 웹 비주얼 노벨 "Cupid"의 시나리오 JS(분기 구조)와 i18n/ko JSON(한국어 대사)입니다.

## 시나리오 JS (분기/라우팅 구조):
\`\`\`javascript
${scenarioContent}
\`\`\`

## i18n/ko JSON (한국어 대사):
\`\`\`json
${i18nContent}
\`\`\`

## 검수 요청:
${issueDesc}

## 검수 기준:
1. **선택지 → 후속 대사 개연성**: 플레이어가 A를 선택했는데 후속 대사가 A와 무관한 반응인 경우
2. **캐릭터 반응 일관성**: 같은 캐릭터가 갑자기 성격이 바뀌는 경우
3. **맥락 단절**: 선택 후 대화가 선택을 안 한 것처럼 진행되는 경우
4. **분기 합류 시 어색함**: 서로 다른 선택지 분기가 합류할 때 앞 맥락과 맞지 않는 대사
5. **사실 관계 모순**: 일어나지 않은 일을 언급하는 경우
6. **대사 스타일**: 유치/오글/올드/중2병/일본식 번역체 금지, 2020년대 한국 드라마 감성

## 응답 형식 (JSON):
{
  "pass": true/false,
  "issues": [
    {
      "node_id": "문제 노드 ID",
      "type": "coherence|character|context_break|merge_awkward|fact_error|style",
      "severity": "high|medium|low",
      "description": "문제 설명",
      "current_text": "현재 대사",
      "suggested_fix": "수정 제안"
    }
  ],
  "summary": "전체 평가 요약"
}

JSON만 출력하세요. 마크다운 코드블록 없이 순수 JSON만.`;

    const body = {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 8192
        }
    };

    const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });

    if (!res.ok) {
        const err = await res.text();
        throw new Error(`Gemini API error ${res.status}: ${err}`);
    }

    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // JSON 파싱 (마크다운 코드블록 제거)
    const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    try {
        return JSON.parse(cleaned);
    } catch (e) {
        console.error('Failed to parse Gemini response:', text.substring(0, 500));
        return { pass: false, issues: [], summary: 'Parse error: ' + text.substring(0, 200) };
    }
}

// 특정 노드 범위만 추출하는 헬퍼
function extractNodes(fullContent, nodeIds) {
    const lines = fullContent.split('\n');
    let result = {};

    try {
        // JSON인 경우
        const parsed = JSON.parse(fullContent);
        for (const id of nodeIds) {
            if (parsed[id]) result[id] = parsed[id];
        }
        return JSON.stringify(result, null, 2);
    } catch {
        // JS인 경우 - 전체 반환 (노드 추출이 복잡하므로)
        return fullContent;
    }
}

async function main() {
    const args = process.argv.slice(2);
    if (args.length < 2) {
        console.log('Usage: node gemini_review.js <scenario_js> <i18n_ko_json> [issue_description]');
        console.log('  or:  node gemini_review.js --batch <issues_json>');
        process.exit(1);
    }

    if (args[0] === '--batch') {
        // 배치 모드: issues JSON 파일에서 여러 이슈를 순차 검증
        const issues = JSON.parse(fs.readFileSync(args[1], 'utf8'));
        const results = [];

        for (const issue of issues) {
            console.log(`\n=== Reviewing: ${issue.id} ===`);
            const scenarioContent = fs.readFileSync(issue.scenario_js, 'utf8');
            const i18nContent = fs.readFileSync(issue.i18n_ko, 'utf8');

            const result = await reviewScenario(scenarioContent, i18nContent, issue.description);
            results.push({ id: issue.id, ...result });

            if (result.pass) {
                console.log(`PASS: ${result.summary}`);
            } else {
                console.log(`FAIL (${result.issues.length} issues): ${result.summary}`);
                for (const iss of result.issues) {
                    console.log(`  - [${iss.severity}] ${iss.node_id}: ${iss.description}`);
                }
            }
        }

        fs.writeFileSync(
            path.join(__dirname, 'gemini_review_results.json'),
            JSON.stringify(results, null, 2),
            'utf8'
        );
        console.log('\nResults saved to gemini_review_results.json');
    } else {
        // 단일 모드
        const scenarioContent = fs.readFileSync(args[0], 'utf8');
        const i18nContent = fs.readFileSync(args[1], 'utf8');
        const issueDesc = args[2] || '전체 선택지-후속 대사 개연성을 점검해주세요.';

        const result = await reviewScenario(scenarioContent, i18nContent, issueDesc);
        console.log(JSON.stringify(result, null, 2));
    }
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
