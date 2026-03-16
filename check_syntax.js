const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dir = 'assets/js/scenario';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js') && f.startsWith('day')).sort();

let errors = 0;
for (const file of files) {
    const code = fs.readFileSync(path.join(dir, file), 'utf8');
    const SCENARIO = {};
    try {
        vm.runInNewContext(code, { SCENARIO, Object });
        const segs = Object.keys(SCENARIO);
        let nodeCount = 0;
        for (const s of segs) nodeCount += Object.keys(SCENARIO[s]).length;
        console.log(`✅ ${file} — ${nodeCount} nodes`);
    } catch (e) {
        console.log(`❌ ${file} — ${e.message.split('\n')[0]}`);
        errors++;
    }
}

if (errors === 0) {
    console.log('\n모든 파일 문법 정상!');
} else {
    console.log(`\n${errors}개 파일에 문법 오류 있음.`);
}
