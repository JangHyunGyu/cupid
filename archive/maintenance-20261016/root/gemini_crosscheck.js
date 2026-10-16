/**
 * Gemini 교차검증 스크립트
 * SCENARIO.md + 코드를 Gemini에게 보내서 개연성 검증
 */
const fs = require('fs');
const path = require('path');
const { callDeepSeek } = require('./deepseek_api');

async function crossCheck(dayRange, changes, codeFiles) {
    const scenarioMd = fs.readFileSync(path.join(__dirname, 'SCENARIO.md'), 'utf8');

    // Extract relevant day section from SCENARIO.md
    const dayStart = scenarioMd.indexOf(`## Day ${dayRange[0]}`);
    const dayEnd = dayRange[1] < 5
        ? scenarioMd.indexOf(`## Day ${dayRange[1] + 1}`)
        : scenarioMd.length;
    const scenarioSection = scenarioMd.substring(dayStart, dayEnd).substring(0, 15000);

    // Read code files
    const codeContent = codeFiles.map(f => {
        const content = fs.readFileSync(path.join(__dirname, f), 'utf8');
        return `=== ${path.basename(f)} ===\n${content.substring(0, 8000)}`;
    }).join('\n\n');

    const prompt = `당신은 비주얼 노벨 시나리오 전문 검수자입니다.

아래는 Cupid라는 로맨스 미연시의 SCENARIO.md(설계 문서)와 실제 코드(시나리오 JS + i18n/ko JSON)입니다.

최근 개연성 이슈를 수정했습니다. 아래 항목들이 올바르게 수정되었는지 교차 검증해주세요:

## 수정사항:
${changes}

## 검증 기준:
1. SCENARIO.md의 설계 의도와 코드가 일치하는가?
2. 선택지 -> 후속 대사의 개연성이 올바른가?
3. 분기 합류 시 맥락이 자연스러운가?
4. 사실 관계 모순이 없는가?
5. 대사 스타일이 자연스러운가? (유치/오글/올드 금지)
6. 새로 추가된 노드의 라우팅이 올바른가? (데드엔드 없는지)

## SCENARIO.md (해당 Day 부분):
${scenarioSection}

## 실제 코드:
${codeContent}

## 응답 형식 (JSON만, 마크다운 코드블록 없이):
{"pass": true/false, "verified_items": ["올바르게 수정된 항목"], "remaining_issues": [{"node_id": "문제 노드", "severity": "high/medium/low", "description": "문제 설명", "suggested_fix": "수정 제안"}], "summary": "전체 평가"}`;

    const text = await callDeepSeek(prompt, { temperature: 0.2, maxTokens: 8192, json: true });
    const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

    try {
        return JSON.parse(cleaned);
    } catch {
        return { raw: text.substring(0, 2000) };
    }
}

async function main() {
    console.log('=== Day 2-3 교차검증 ===');
    const d23 = await crossCheck([2, 3],
        `1. lunch2_seo_end: 선택지별 합류 대사 분리 (c1=손끝온도, c2=밥풀자국)
2. night2_msg: 방과후 루트별 메시지 분기 (다인=떡볶이, 서연=서류, 유나=음악)
3. lunch2_dain_end: c3에서만 유효한 "귓불" 제거
4. night2_end_4: 중복 대사 변경
5. after3_confront_lie: 거짓말 호감도 +5 -> -3
6. morning3_end: "약속이 겹치는데" -> 범용 표현
7. lunch3_expose_1: "다 같이 먹자라고 말한 순간" -> "그때"
8. night3_cheat_msg: 다인 메시지 추가
9. night3_nightmare: 선택별 중간 노드
10. after3_seo_end: choice2용 별도 합류 대사
11. morning3_date_yuna_choice: 거절 선택지 명확화`,
        [
            'assets/js/scenario/day2_2_lunch.js', 'assets/js/i18n/ko/day2_2_lunch.json',
            'assets/js/scenario/day2_4_night.js', 'assets/js/i18n/ko/day2_4_night.json',
            'assets/js/scenario/day3_1_morning.js', 'assets/js/i18n/ko/day3_1_morning.json',
            'assets/js/scenario/day3_3_afterschool.js', 'assets/js/i18n/ko/day3_3_afterschool.json',
            'assets/js/scenario/day3_4_night.js', 'assets/js/i18n/ko/day3_4_night.json',
        ]
    );
    console.log(JSON.stringify(d23, null, 2));

    console.log('\n=== Day 4-5 교차검증 ===');
    const d45 = await crossCheck([4, 5],
        `12. day4_night_branch: day4_waited를 route보다 위에 배치
13. day4_night_regret_msg: 루트별 발신자 분기
14. wall_seo_line_choice: 선택별 즉각 반응 추가
15. date_yuna_bright: "밝은 건 아닌데" -> "뭐가 다른 건데"
16. wall_dain_choice: "앉아도 돼?" -> "아무 말 안 할게"
17. hidden_nurse_d4_meal: "학생들이 먹는 건가" -> "나이 먹으니까"
18. after5_confess_yes: 고백 후 루트별 반응
19. true_epilogue bridge: 루트별 전환 노드
20. good_1c: 빈 대사 -> "그녀가 한 걸음 다가왔다"
21. morning5_end: 다인 특정 대사 -> 범용`,
        [
            'assets/js/scenario/day4_4_night.js', 'assets/js/i18n/ko/day4_4_night.json',
            'assets/js/scenario/day4_2_lunch.js', 'assets/js/i18n/ko/day4_2_lunch.json',
            'assets/js/scenario/day4_1_morning.js', 'assets/js/i18n/ko/day4_1_morning.json',
            'assets/js/scenario/day5_3_afterschool.js', 'assets/js/i18n/ko/day5_3_afterschool.json',
            'assets/js/scenario/day5_4_night.js', 'assets/js/i18n/ko/day5_4_night.json',
            'assets/js/scenario/day5_1_morning.js', 'assets/js/i18n/ko/day5_1_morning.json',
        ]
    );
    console.log(JSON.stringify(d45, null, 2));

    // Save results
    fs.writeFileSync('gemini_crosscheck_results.json', JSON.stringify({ d23, d45 }, null, 2));
    console.log('\nResults saved to gemini_crosscheck_results.json');
}

main().catch(console.error);
