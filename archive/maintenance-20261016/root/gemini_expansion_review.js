/**
 * Gemini에게 시나리오 분기 확장 + 대사 스타일 검증 요청
 */
const fs = require('fs');
const path = require('path');
const { callDeepSeek } = require('./deepseek_api');

async function callGemini(prompt) {
    return callDeepSeek(prompt, { temperature: 0.3, maxTokens: 16384 });
}

async function main() {
    const scenarioMd = fs.readFileSync('SCENARIO.md', 'utf8');
    const expansionMd = fs.readFileSync('SCENARIO_BRANCH_EXPANSION.md', 'utf8');

    // 1. 분기 확장 검증
    console.log('=== 1. 분기 확장 방안 검증 ===');
    const expansionResult = await callGemini(`당신은 비주얼 노벨 시나리오 전문 기획자입니다.

아래는 "Cupid"라는 로맨스 미연시의 현재 SCENARIO.md(설계 문서)와 분기 확장 설계안입니다.

유저 피드백:
1. 선택 분기 루트가 너무 부족하다
2. 호감도에 따른 대사 분기가 부족하다
3. 캐릭터 간 갈등/선택의 영향도가 부족하다
4. 엔딩이 호감도에 의해서도 결정되어야 한다

## 현재 SCENARIO.md (앞부분):
${scenarioMd.substring(0, 20000)}

## 분기 확장 설계안:
${expansionMd.substring(0, 20000)}

## 요청:
1. 이 확장 설계안이 유저 피드백을 충분히 해결하는가?
2. 부족한 부분이 있다면 구체적으로 어떤 분기를 더 추가해야 하는가?
3. 호감도 기반 엔딩 분기(PERFECT/TRUE/GOOD/BITTERSWEET)의 임계값이 적절한가?
4. 캐릭터 간 갈등 설계가 자연스러운가?
5. 추가로 제안하고 싶은 분기나 시스템이 있는가?

구체적인 노드 ID, 대사 초안까지 포함해서 답변해주세요.
한국어로 답변하세요.`);
    console.log(expansionResult);
    fs.writeFileSync('gemini_expansion_result.txt', expansionResult);

    // 2. 전체 대사 스타일 검증 (오글/올드체 검출)
    console.log('\n=== 2. 대사 스타일 검증 (오글/올드체 검출) ===');

    // 모든 ko JSON 파일의 대사를 모아서 검증
    const koDir = 'assets/js/i18n/ko';
    const allDialogues = {};
    for (const f of fs.readdirSync(koDir).filter(f => f.endsWith('.json'))) {
        const data = JSON.parse(fs.readFileSync(path.join(koDir, f), 'utf8'));
        for (const [id, entry] of Object.entries(data)) {
            if (entry.text && entry.text.length > 10) {
                allDialogues[id] = { file: f, name: entry.name, text: entry.text };
            }
        }
    }

    // 대사를 청크로 나눠서 검증
    const entries = Object.entries(allDialogues);
    const chunkSize = 200;
    let allOglIssues = [];

    for (let i = 0; i < entries.length; i += chunkSize) {
        const chunk = entries.slice(i, i + chunkSize);
        const dialogueText = chunk.map(([id, d]) => `[${id}] ${d.name}: ${d.text}`).join('\n');

        console.log(`  청크 ${Math.floor(i/chunkSize)+1}/${Math.ceil(entries.length/chunkSize)} 검증 중...`);

        const styleResult = await callGemini(`당신은 2020년대 한국 드라마 대사 전문가입니다.

아래는 로맨스 미연시 "Cupid"의 한국어 대사 목록입니다.
다음 기준으로 **오글거리거나 올드한 미연시체** 대사를 찾아주세요:

## 금지 표현 기준:
1. 일본식 번역체: "~인 걸", "~란 말이야?!", "바, 바보!", "후훗", "쿡쿡"
2. 중2병: "운명이야", "심장이 미친 듯이 뛴다", "세계가 멈춘 것 같다"
3. 오글거리는 고백: "너 없이는 살 수 없어", "영원히 사랑할게"
4. 올드 미연시 클리셰: "얼굴이 빨개졌다는 걸 느꼈다", "가슴이 콩닥콩닥"
5. 과도한 감정 서술: 직접 "심장이 뛴다", "소름 돋는다" 대신 행동/디테일로 보여줘야 함
6. 유치한 애교: "~쥬", "~냥", "~데스"

## 대사 목록:
${dialogueText}

## 응답 (JSON, 마크다운 블록 없이):
[{"node_id": "문제 노드 ID", "current": "현재 대사", "issue": "어떤 점이 오글/올드한지", "suggested": "수정 제안"}]

문제가 없으면 빈 배열 []을 반환.`);

        try {
            const cleaned = styleResult.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            const issues = JSON.parse(cleaned);
            if (issues.length > 0) allOglIssues.push(...issues);
        } catch {
            console.log('  (파싱 실패, 원문 저장)');
            allOglIssues.push({ raw: styleResult.substring(0, 500) });
        }
    }

    console.log(`\n오글/올드체 이슈: ${allOglIssues.length}건`);
    if (allOglIssues.length > 0) {
        for (const iss of allOglIssues) {
            if (iss.node_id) {
                console.log(`  [${iss.node_id}] ${iss.issue}`);
                console.log(`    현재: ${iss.current?.substring(0, 80)}`);
                console.log(`    제안: ${iss.suggested?.substring(0, 80)}`);
            }
        }
    }

    fs.writeFileSync('gemini_style_issues.json', JSON.stringify(allOglIssues, null, 2));
    console.log('\n결과 저장: gemini_expansion_result.txt, gemini_style_issues.json');
}

main().catch(console.error);
