const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const KO_DIR = path.join(ROOT, 'assets/js/i18n/ko');
const FILE_RE = /^day[1-5]_[1-4]_(?:morning|lunch|afterschool|night)\.json$/;

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

const files = fs.readdirSync(KO_DIR).filter(file => FILE_RE.test(file)).sort();
assert(files.length === 20, `expected 20 Korean scenario files, found ${files.length}`);

let entryCount = 0;
let textCount = 0;
let choiceCount = 0;
const textRecords = [];

for (const file of files) {
    const data = JSON.parse(fs.readFileSync(path.join(KO_DIR, file), 'utf8'));
    for (const [id, node] of Object.entries(data)) {
        entryCount++;
        assert(node && typeof node === 'object' && !Array.isArray(node), `${file}/${id} is not an object`);
        if (Object.prototype.hasOwnProperty.call(node, 'name')) {
            assert(typeof node.name === 'string', `${file}/${id}.name is not a string`);
        }
        if (Object.prototype.hasOwnProperty.call(node, 'text')) {
            textCount++;
            assert(typeof node.text === 'string', `${file}/${id}.text is not a string`);
            textRecords.push({ file, id, field: 'text', value: node.text });
        }
        if (Object.prototype.hasOwnProperty.call(node, 'choices')) {
            assert(Array.isArray(node.choices), `${file}/${id}.choices is not an array`);
            node.choices.forEach((choice, index) => {
                assert(typeof choice === 'string' && choice.trim(), `${file}/${id}.choices[${index}] is empty`);
                choiceCount++;
                textRecords.push({ file, id, field: `choices[${index}]`, value: choice });
            });
        }
    }
}

assert(entryCount === 2695, `expected 2695 Korean entries, found ${entryCount}`);
assert(textCount === 2634, `expected 2634 Korean text fields, found ${textCount}`);
assert(choiceCount === 213, `expected 213 Korean choices, found ${choiceCount}`);

const banned = [
    ['six-dot placeholder', /^\s*\.{6}\s*$/u],
    ['stock accidental-door metaphor', /문은 우연처럼 열려 있다/u],
    ['abstract silence impact', /세 사람의 침묵이 등에 꽂힌다/u],
    ['abstract warm silence', /침묵이 전처럼 차갑지 않다/u],
    ['author explanation', /그 동작 때문에|마음이 움직였다|오히려 선명했다|피하지 않는다/u],
    ['forced protagonist nod', /\{name\}이 고개를 끄덕이자/u],
    ['forced protagonist grip', /\{name\}도 놓지 않는다/u],
    ['forced third meeting', /세 번째 만남은 \{name\}이 먼저 정했다/u],
    ['forced fist bump', /\{name\}이 가볍게 맞대자/u],
    ['forced protagonist reaction', /나도 모르게 웃음이 샌다|입안에서 짧은 웃음소리가 샌다/u],
    ['coercive favor', /무조건 들어줘야 해/u],
    ['violent stock threat', /한 번만 더 말하면 때린다/u],
    ['unannounced hand grab', /다짜고짜 손을 잡고/u],
    ['dangling stage direction', /\*[^*]*[가-힣]며\*/u]
];

for (const record of textRecords) {
    for (const [label, pattern] of banned) {
        assert(!pattern.test(record.value), `${label}: ${record.file}/${record.id}.${record.field}`);
    }
}

function load(file) {
    return JSON.parse(fs.readFileSync(path.join(KO_DIR, file), 'utf8'));
}

const day5Night = load('day5_4_night.json');
assert(day5Night.hidden_perfect_homeroom_3.text.includes('4년'), 'Teacher perfect route lost the four-year adult reunion');
assert(day5Night.hidden_true_homeroom_1.text.includes('졸업 후 4년'), 'Teacher true route lost the four-year adult reunion');
assert(day5Night.hidden_perfect_nurse_1.text.includes('졸업 후 5년'), 'Nurse perfect route lost the five-year adult reunion');
assert(day5Night.hidden_true_nurse_1.text.includes('졸업 후 4년'), 'Nurse true route lost the four-year adult reunion');
assert(day5Night.hidden_good_homeroom_1.text.includes('졸업식'), 'Teacher good route lost the graduation-day goodbye');
assert(day5Night.hidden_good_nurse_1.text.includes('졸업식'), 'Nurse good route lost the graduation-day goodbye');

const gallery = fs.readFileSync(path.join(ROOT, 'assets/js/gallery-data.js'), 'utf8');
for (const stale of ['메가데레', '쿨데레의 정석', '현모양처형 츤데레', '가슴 설레어 하며', '당신이 당황하는 모습에 귀여움']) {
    assert(!gallery.slice(gallery.indexOf('ko: {'), gallery.indexOf('// ===== 영어 데이터')).includes(stale),
        `Korean gallery copy still contains: ${stale}`);
}
assert(!/손끝이 (?:닿을|스칠) 듯 말 듯/u.test(gallery), 'Korean gallery copy still uses stock almost-touching romance');
assert(gallery.includes('졸업 4년 뒤 우연히 다시 만난 두 성인'), 'Teacher gallery ending lost the adult reunion timing');
assert(gallery.includes('졸업 5년 뒤 다시 만나 몇 달간'), 'Nurse gallery ending lost the adult reunion timing');

console.log(`Verified ${files.length} Korean dialogue files: ${entryCount} entries, ${textCount} texts, ${choiceCount} choices.`);
