# Cupid 디버그 테스트 명령어 모음

> 브라우저 개발자 도구 콘솔 (F12 → Console)에서 사용.
> 게임 페이지(game.html)가 로드된 상태에서만 동작.

---

## 1. 기본 명령어

```js
// 아무 씬으로 즉시 점프
gameEngine.renderScene("씬ID")

// 호감도 직접 설정 (-100 ~ 100)
gameEngine.stateManager.stats.Seoyeon.affinity = 90
gameEngine.stateManager.stats.Yuna.affinity = 70
gameEngine.stateManager.stats.Dain.affinity = 50
gameEngine.stateManager.stats.Teacher.affinity = 85
gameEngine.stateManager.stats.Nurse.affinity = 60

// 플래그 설정
gameEngine.stateManager.setFlag("플래그명")

// 모든 플래그·호감도 초기화 (엔딩 테스트 전 필수!)
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);

// 현재 상태 확인
console.table(gameEngine.stateManager.stats)
console.log(gameEngine.stateManager.flags)

// 현재 날짜 변경
gameEngine.stateManager.setDay(5)
```

---

## 2. 엔딩 프리셋 (복사-붙여넣기용)

### PERFECT END — 서연 (호감도 90+, 고백 수락, 단독 루트)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Seoyeon.affinity = 90;
gameEngine.stateManager.setFlag("route_seoyeon");
gameEngine.stateManager.setFlag("day4_confession_accepted");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("perfect_seo_1");
```

### PERFECT END — 유나 (호감도 90+)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Yuna.affinity = 90;
gameEngine.stateManager.setFlag("route_yuna");
gameEngine.stateManager.setFlag("day4_confession_accepted");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("perfect_yuna_1");
```

### PERFECT END — 다인 (호감도 90+)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Dain.affinity = 90;
gameEngine.stateManager.setFlag("route_dain");
gameEngine.stateManager.setFlag("day4_confession_accepted");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("perfect_dain_1");
```

### TRUE LOVE END — 서연 (호감도 60-79)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Seoyeon.affinity = 70;
gameEngine.stateManager.setFlag("route_seoyeon");
gameEngine.stateManager.setFlag("day4_confession_accepted");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("true_seo_1");
```

### TRUE LOVE END — 유나 (호감도 60-79)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Yuna.affinity = 70;
gameEngine.stateManager.setFlag("route_yuna");
gameEngine.stateManager.setFlag("day4_confession_accepted");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("true_yuna_1");
```

### TRUE LOVE END — 다인 (호감도 60-79)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Dain.affinity = 70;
gameEngine.stateManager.setFlag("route_dain");
gameEngine.stateManager.setFlag("day4_confession_accepted");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("true_dain_1");
```

### BITTERSWEET END — 서연 (호감도 0-39)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Seoyeon.affinity = 20;
gameEngine.stateManager.setFlag("route_seoyeon");
gameEngine.stateManager.setFlag("day4_confession_accepted");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("bitter_seo_1");
```

### BITTERSWEET END — 유나 (호감도 0-39)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Yuna.affinity = 20;
gameEngine.stateManager.setFlag("route_yuna");
gameEngine.stateManager.setFlag("day4_confession_accepted");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("bitter_yuna_1");
```

### BITTERSWEET END — 다인 (호감도 0-39)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Dain.affinity = 20;
gameEngine.stateManager.setFlag("route_dain");
gameEngine.stateManager.setFlag("day4_confession_accepted");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("bitter_dain_1");
```

### GOOD END — 서연 루트 (고백 수락 + 호감도 40-59)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Seoyeon.affinity = 50;
gameEngine.stateManager.setFlag("route_seoyeon");
gameEngine.stateManager.setFlag("day4_confession_accepted");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("day5_ending_good");
```

### GOOD END — 유나 루트
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Yuna.affinity = 50;
gameEngine.stateManager.setFlag("route_yuna");
gameEngine.stateManager.setFlag("day4_confession_accepted");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("day5_ending_good");
```

### GOOD END — 다인 루트
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Dain.affinity = 50;
gameEngine.stateManager.setFlag("route_dain");
gameEngine.stateManager.setFlag("day4_confession_accepted");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("day5_ending_good");
```

### CONFESS FAIL END — 서연 (고백했으나 호감 부족)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Seoyeon.affinity = 30;
gameEngine.stateManager.setFlag("route_seoyeon");
gameEngine.stateManager.setFlag("day5_confessed");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("day5_ending_confess_fail");
```

### CONFESS FAIL END — 유나
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Yuna.affinity = 30;
gameEngine.stateManager.setFlag("route_yuna");
gameEngine.stateManager.setFlag("day5_confessed");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("day5_ending_confess_fail");
```

### CONFESS FAIL END — 다인
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Dain.affinity = 30;
gameEngine.stateManager.setFlag("route_dain");
gameEngine.stateManager.setFlag("day5_confessed");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("day5_ending_confess_fail");
```

### MAYHEM END (셋 다 좋아했지만 선택 못함)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.setFlag("day3_caught_multiple_dates");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("ending_start");
```

### UNRESOLVED END (다중 관계의 균열을 해결하지 못함)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.setFlag("ending_harem");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("ending_start");
```

### FRIEND END (고백 보류 후 끝내 고백하지 않음)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.setFlag("day4_waited");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("ending_start");
```

### ALONE END (아무 관계 없음)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("ending_start");
```

### TEACHER PERFECT END (호감도 90+)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Teacher.affinity = 90;
gameEngine.stateManager.setFlag("homeroom_day5");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("hidden_perfect_homeroom_1");
```

### TEACHER TRUE LOVE END (호감도 40-79)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Teacher.affinity = 60;
gameEngine.stateManager.setFlag("homeroom_day5");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("hidden_true_homeroom_1");
```

### TEACHER GOOD END (호감도 0-39)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Teacher.affinity = 20;
gameEngine.stateManager.setFlag("homeroom_day5");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("hidden_good_homeroom_1");
```

### NURSE PERFECT END (호감도 90+)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Nurse.affinity = 90;
gameEngine.stateManager.setFlag("nurse_day5");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("hidden_perfect_nurse_1");
```

### NURSE TRUE LOVE END (호감도 40-79)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Nurse.affinity = 60;
gameEngine.stateManager.setFlag("nurse_day5");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("hidden_true_nurse_1");
```

### NURSE GOOD END (호감도 0-39)
```js
gameEngine.stateManager.flags = {}; ["Seoyeon","Yuna","Dain","Teacher","Nurse"].forEach(c => gameEngine.stateManager.stats[c].affinity = 0);
gameEngine.stateManager.stats.Nurse.affinity = 20;
gameEngine.stateManager.setFlag("nurse_day5");
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("hidden_good_nurse_1");
```

---

## 3. 엔딩 CG 직접 확인 (CG 씬만 바로 점프)

```js
// PERFECT CG
gameEngine.renderScene("perfect_seo_5")          // 서연 퍼펙트 CG
gameEngine.renderScene("perfect_yuna_5")         // 유나 퍼펙트 CG
gameEngine.renderScene("perfect_dain_5")         // 다인 퍼펙트 CG
gameEngine.renderScene("hidden_perfect_homeroom_5") // 담임 퍼펙트 CG
gameEngine.renderScene("hidden_perfect_nurse_5")    // 보건 퍼펙트 CG

// TRUE LOVE CG
gameEngine.renderScene("true_seo_bridge")        // 서연 트루 CG
gameEngine.renderScene("true_yuna_bridge")       // 유나 트루 CG
gameEngine.renderScene("true_dain_bridge")       // 다인 트루 CG
gameEngine.renderScene("hidden_true_homeroom_8") // 담임 트루 CG
gameEngine.renderScene("hidden_true_nurse_8")    // 보건 트루 CG

// GOOD CG
gameEngine.renderScene("good_5_cg_seo")          // 서연 굿 CG
gameEngine.renderScene("good_5_cg_yuna")         // 유나 굿 CG
gameEngine.renderScene("good_5_cg_dain")         // 다인 굿 CG
gameEngine.renderScene("hidden_good_homeroom_4") // 담임 굿 CG
gameEngine.renderScene("hidden_good_nurse_4")    // 보건 굿 CG

// BITTERSWEET CG (3캐릭터 공용)
gameEngine.renderScene("bitter_seo_3")           // 비터스윗 CG (서연 대사)
gameEngine.renderScene("bitter_yuna_3")          // 비터스윗 CG (유나 대사)
gameEngine.renderScene("bitter_dain_3")          // 비터스윗 CG (다인 대사)

// CONFESS FAIL CG (대사 없음)
gameEngine.renderScene("confess_fail_cg_seo")    // 서연 고백실패 CG
gameEngine.renderScene("confess_fail_cg_yuna")   // 유나 고백실패 CG
gameEngine.renderScene("confess_fail_cg_dain")   // 다인 고백실패 CG

// 기타 엔딩 CG (첫 씬부터 CG)
gameEngine.renderScene("day5_ending_mayhem")     // 메이헴 CG
gameEngine.renderScene("day5_ending_harem")      // 하렘 CG
gameEngine.renderScene("day5_ending_alone")      // 혼자 CG
gameEngine.renderScene("friend_8")               // 친구 CG (졸업식 단체샷)
```

---

## 4. 특정 Day/시간대 시작점으로 점프

```js
// Day 1
gameEngine.stateManager.setDay(1);
gameEngine.renderScene("day1_1_1")     // Day 1 아침

// Day 2
gameEngine.stateManager.setDay(2);
gameEngine.renderScene("day2_1_1")     // Day 2 아침

// Day 3
gameEngine.stateManager.setDay(3);
gameEngine.renderScene("day3_1_1")     // Day 3 아침

// Day 4
gameEngine.stateManager.setDay(4);
gameEngine.renderScene("day4_1_1")     // Day 4 아침

// Day 5
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("day5_1_1")     // Day 5 아침

// 엔딩 분기 시작점
gameEngine.stateManager.setDay(5);
gameEngine.renderScene("ending_start") // 엔딩 라우터
```

---

## 5. 상태 초기화

```js
// 호감도 전체 리셋
Object.keys(gameEngine.stateManager.stats).forEach(k => {
    gameEngine.stateManager.stats[k].affinity = 0;
});

// 플래그 전체 리셋
gameEngine.stateManager.flags = {};

// 완전 초기화 (새 게임)
location.reload();
```
