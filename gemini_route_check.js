/**
 * Gemini 전체 루트 개연성 교차검증
 * 모든 선택지 조합에서 대사 개연성이 맞는지 확인
 */
const fs = require('fs');
const path = require('path');

const API_KEY = fs.readFileSync(path.join(__dirname, '..', 'nevergrad', '.env'), 'utf8')
    .match(/GEMINI_API_KEY=(.+)/)?.[1]?.trim();
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent?key=${API_KEY}`;

async function callGemini(prompt) {
    const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.1, maxOutputTokens: 8192 }
        })
    });
    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    try { return JSON.parse(cleaned); }
    catch { return { raw: text.substring(0, 3000) }; }
}

function readFile(p) {
    return fs.readFileSync(path.join(__dirname, p), 'utf8');
}

async function checkDay(dayNum, routeDesc, jsFiles, jsonFiles) {
    const jsContent = jsFiles.map(f => {
        const content = readFile(f);
        return `=== ${path.basename(f)} ===\n${content}`;
    }).join('\n\n');

    const jsonContent = jsonFiles.map(f => {
        const content = readFile(f);
        return `=== ${path.basename(f)} ===\n${content}`;
    }).join('\n\n');

    // SCENARIO.md에서 해당 Day 섹션 추출
    const scenarioMd = readFile('SCENARIO.md');
    const dayHeader = `## Day ${dayNum}`;
    const nextDayHeader = `## Day ${dayNum + 1}`;
    const dayStart = scenarioMd.indexOf(dayHeader);
    const dayEnd = dayNum < 5 ? scenarioMd.indexOf(nextDayHeader) : scenarioMd.length;
    const scenarioSection = dayStart >= 0 ? scenarioMd.substring(dayStart, dayEnd > dayStart ? dayEnd : undefined).substring(0, 15000) : '';

    // JS + JSON + SCENARIO.md 합치기
    const combined = '--- SCENARIO.md (설계 문서) ---\n\n' + scenarioSection +
        '\n\n--- 시나리오 JS (분기/라우팅) ---\n\n' + jsContent.substring(0, 35000) +
        '\n\n--- i18n/ko (한국어 대사) ---\n\n' + jsonContent.substring(0, 35000);

    const prompt = `당신은 비주얼 노벨 시나리오 전문 검수자입니다.

아래는 "Cupid" 로맨스 미연시의 Day ${dayNum} 시나리오입니다.
SCENARIO.md(설계 문서), 시나리오 JS(분기/라우팅 구조), i18n/ko JSON(한국어 대사)을 함께 제공합니다.
SCENARIO.md의 설계 의도와 실제 코드가 일치하는지도 함께 검증해주세요.

## 가능한 루트 조합:
${routeDesc}

## 검증 요청:
위의 모든 루트 조합을 하나씩 따라가면서 아래를 점검해주세요:

1. **선택지 → 후속 대사**: 플레이어가 A를 선택했는데 후속 대사가 A와 무관한 경우
2. **분기 합류 시 모순**: 다른 선택지 분기가 합류할 때, 한쪽 경로에서만 유효한 대사가 공통으로 나오는 경우
3. **사실 관계 오류**: 일어나지 않은 일을 언급하거나, 이미 앉아있는데 다시 앉겠다고 하는 등의 물리적 모순
4. **캐릭터 일관성**: 같은 캐릭터가 갑자기 성격이 바뀌거나, 감정 흐름이 부자연스러운 경우
5. **플래그/조건 정합성**: condition으로 체크하는 플래그가 해당 경로에서 실제로 설정되는지

## 코드:
${combined}

## 응답 형식 (JSON만, 마크다운 코드블록 없이):
{
  "day": ${dayNum},
  "pass": true/false,
  "routes_checked": ["확인한 루트 목록"],
  "issues": [
    {
      "route": "문제가 발견된 루트",
      "node_id": "문제 노드 ID",
      "severity": "high/medium/low",
      "description": "문제 설명",
      "suggested_fix": "수정 제안"
    }
  ],
  "summary": "전체 평가"
}`;

    return await callGemini(prompt);
}

async function main() {
    const results = {};

    // Day 1
    console.log('=== Day 1 검증 중... ===');
    results.day1 = await checkDay(1,
        `- 아침: 공통 (서연 첫 만남 → seoyeon_choice: 작업/농담)
- 점심: lunch_choice → 서연(옥상) / 다인(매점) / 유나(도서관)
  - 서연: lunch_seo_choice (받아먹는다/직접 먹는다)
  - 다인: lunch_dain_choice (알려줘/아는 척)
  - 유나: 선택지 없음
- 방과후: 담임 상담(hidden) / 보건실(hidden) / 공통
  - after_hidden_homeroom_choice (괜찮습니다/정신없습니다)
  - after_hidden_nurse_choice (들어간다/집에 간다)
- 밤: 점심 루트별 메시지 분기 → 답장 선택`,
        ['assets/js/scenario/day1_1_morning.js', 'assets/js/scenario/day1_2_lunch.js',
         'assets/js/scenario/day1_3_afterschool.js', 'assets/js/scenario/day1_4_night.js'],
        ['assets/js/i18n/ko/day1_1_morning.json', 'assets/js/i18n/ko/day1_2_lunch.json',
         'assets/js/i18n/ko/day1_3_afterschool.json', 'assets/js/i18n/ko/day1_4_night.json']
    );
    console.log(`Day 1: ${results.day1.pass ? 'PASS' : 'FAIL'} (${results.day1.issues?.length || 0} issues)`);

    // Day 2
    console.log('=== Day 2 검증 중... ===');
    results.day2 = await checkDay(2,
        `- 아침: 공통
- 점심: 서연(옥상) / 다인(매점) / 유나(도서관)
  - 서연: lunch2_seo_choice (가만히 있는다/직접 닦을게) → c1/c2별 합류 대사 분리
  - 다인: lunch2_dain_choice (어제 얘기했어[-3]/안내 받은 정도[0]/신경 쓰여?[+5])
- 방과후: after2_choice → 다인(체육관) / 서연(학생회실) / 유나(도서관 별관) → 민수 경고
- 밤: 방과후 루트별 메시지 분기(chose_dain_after2/chose_seo_after2/chose_yuna_after2)
  → night2_choice (답장 선택)
  → 히든 담임/보건 메시지`,
        ['assets/js/scenario/day2_1_morning.js', 'assets/js/scenario/day2_2_lunch.js',
         'assets/js/scenario/day2_3_afterschool.js', 'assets/js/scenario/day2_4_night.js'],
        ['assets/js/i18n/ko/day2_1_morning.json', 'assets/js/i18n/ko/day2_2_lunch.json',
         'assets/js/i18n/ko/day2_3_afterschool.json', 'assets/js/i18n/ko/day2_4_night.json']
    );
    console.log(`Day 2: ${results.day2.pass ? 'PASS' : 'FAIL'} (${results.day2.issues?.length || 0} issues)`);

    // Day 3
    console.log('=== Day 3 검증 중... ===');
    results.day3 = await checkDay(3,
        `- 아침: 서연/다인/유나 각각 주말 데이트 제안 → accept/decline 선택
  - 유나 거절: "쪽지를 접어 주머니에 넣는다"
  - 복수 수락 시 day3_has_multiple_dates 플래그
- 점심: 양다리 발각(day3_has_multiple_dates) → expose 씬 → 대치(confront)
  - confront_choice: 인정[-8] / 거짓말[-3]
  - 단독 루트: 각 캐릭터별 점심
- 방과후: 서연(seo_choice1: 완벽하지않아도/비밀지켜줄게 → 별도 합류) / 유나 / 다인
- 밤: 양다리=cheat 메시지(다인 메시지 포함) / 단독=faithful 메시지
  - 악몽: nightmare_choice → 서연/유나/다인별 중간 노드 → nightmare_end`,
        ['assets/js/scenario/day3_1_morning.js', 'assets/js/scenario/day3_2_lunch.js',
         'assets/js/scenario/day3_3_afterschool.js', 'assets/js/scenario/day3_4_night.js'],
        ['assets/js/i18n/ko/day3_1_morning.json', 'assets/js/i18n/ko/day3_2_lunch.json',
         'assets/js/i18n/ko/day3_3_afterschool.json', 'assets/js/i18n/ko/day3_4_night.json']
    );
    console.log(`Day 3: ${results.day3.pass ? 'PASS' : 'FAIL'} (${results.day3.issues?.length || 0} issues)`);

    // Day 4
    console.log('=== Day 4 검증 중... ===');
    results.day4 = await checkDay(4,
        `- 아침: 히든 담임(카페)/보건(식사) 이벤트
  - 보건: "나이 먹으니까 못 먹겠어~" → "안 늙었는데요"
- 점심(데이트): 서연/유나/다인 각각
  - 유나: date_yuna_compliment_choice → bright("뭐가 다른 건데")
- 방과후(고백): confess_*_choice → 고백/보류
  - 3루트 동일 선택지 "도망치면 쫓아갈 거 알잖아"
- 밤: day4_night_branch (day4_waited가 route보다 우선)
  - 벽허물기: wall_seo_line_choice → 3개 즉각 반응 노드
  - 다인: wall_dain_choice ("아무 말 안 할게" — 이미 앉아있음 반영)
  - 보류(regret): 루트별 발신자 분기`,
        ['assets/js/scenario/day4_1_morning.js', 'assets/js/scenario/day4_2_lunch.js',
         'assets/js/scenario/day4_3_afterschool.js', 'assets/js/scenario/day4_4_night.js'],
        ['assets/js/i18n/ko/day4_1_morning.json', 'assets/js/i18n/ko/day4_2_lunch.json',
         'assets/js/i18n/ko/day4_3_afterschool.json', 'assets/js/i18n/ko/day4_4_night.json']
    );
    console.log(`Day 4: ${results.day4.pass ? 'PASS' : 'FAIL'} (${results.day4.issues?.length || 0} issues)`);

    // Day 5
    console.log('=== Day 5 검증 중... ===');
    results.day5 = await checkDay(5,
        `- 아침: morning5_end 범용 대사 ("세 방향에서 보낸 신호")
- 점심(투어): 루트별 마지막 투어
- 방과후: after5_last_chance_choice (고백하겠다/못했다)
  - 고백: after5_confess_yes → 루트별 반응 (서연/다인/유나)
  - 작별: 미선택 캐릭터와 farewell
  - 히든: after5_start에서 히든 루트 분기
- 밤(엔딩): true_*_bridge → true_epilogue / good_1c("그녀가 한 걸음 다가왔다")`,
        ['assets/js/scenario/day5_1_morning.js', 'assets/js/scenario/day5_2_lunch.js',
         'assets/js/scenario/day5_3_afterschool.js', 'assets/js/scenario/day5_4_night.js'],
        ['assets/js/i18n/ko/day5_1_morning.json', 'assets/js/i18n/ko/day5_2_lunch.json',
         'assets/js/i18n/ko/day5_3_afterschool.json', 'assets/js/i18n/ko/day5_4_night.json']
    );
    console.log(`Day 5: ${results.day5.pass ? 'PASS' : 'FAIL'} (${results.day5.issues?.length || 0} issues)`);

    // 결과 저장
    fs.writeFileSync('gemini_route_check_results.json', JSON.stringify(results, null, 2));

    // 전체 요약
    const totalIssues = Object.values(results).reduce((sum, r) => sum + (r.issues?.length || 0), 0);
    const allPass = Object.values(results).every(r => r.pass);
    console.log(`\n========== 전체 결과 ==========`);
    console.log(`총 이슈: ${totalIssues}개`);
    console.log(`전체 판정: ${allPass ? 'ALL PASS' : 'ISSUES FOUND'}`);
    console.log('결과 저장: gemini_route_check_results.json');
}

main().catch(console.error);
