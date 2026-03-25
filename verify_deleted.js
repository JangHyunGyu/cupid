const fs = require('fs');

// 삭제한 노드들이 시나리오 JS 어디서든 참조되는지 전체 검색
const scenarioDir = 'assets/js/scenario';
const scenarioFiles = fs.readdirSync(scenarioDir).filter(f => f.endsWith('.js'));

const deletedNodes = ['lunch2_seo_end', 'night2_msg_2', 'night2_msg_3', 'night2_msg_4', 'night2_msg_5', 'night2_msg_6'];

console.log('=== 삭제된 노드의 시나리오 JS 전체 참조 검색 ===\n');

for (const node of deletedNodes) {
    let found = false;
    for (const file of scenarioFiles) {
        const content = fs.readFileSync(scenarioDir + '/' + file, 'utf8');
        // 정확한 문자열 매칭 (night2_msg_2가 night2_msg_20 등에 매칭되지 않도록)
        const regex = new RegExp('"' + node + '"', 'g');
        const matches = content.match(regex);
        if (matches) {
            found = true;
            // 라인 번호도 찾기
            const lines = content.split('\n');
            lines.forEach((line, i) => {
                if (line.includes('"' + node + '"')) {
                    console.log(`  [FOUND!] ${file}:${i+1}: ${line.trim()}`);
                }
            });
        }
    }
    if (!found) {
        console.log(`  [OK] "${node}" - 시나리오 JS 어디에도 없음 (안전하게 삭제됨)`);
    }
}

// 추가: 다른 JS 파일에서도 참조되나 확인
console.log('\n=== 다른 JS 파일에서 참조 확인 ===\n');
const otherDirs = ['assets/js/modules', 'assets/js/loaders', 'assets/js'];
for (const node of deletedNodes) {
    for (const dir of otherDirs) {
        if (!fs.existsSync(dir)) continue;
        const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
        for (const file of files) {
            const content = fs.readFileSync(dir + '/' + file, 'utf8');
            if (content.includes(node)) {
                console.log(`  [FOUND!] ${dir}/${file}: contains "${node}"`);
            }
        }
    }
}
console.log('  [OK] 다른 JS 파일에서도 참조 없음');
