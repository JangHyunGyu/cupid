const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const source = require('./example-dialogues-ko-data.cjs');
const dialogues = source.dialogues || source;
const expectedCount = source.expectedCount || 6;
const expectedCharacters = ['Seoyeon', 'Yuna', 'Dain', 'Teacher', 'Nurse'];
const generatedPath = path.join(ROOT, 'assets/js/example-dialogues-ko.js');
const promptsPath = path.join(ROOT, 'assets/js/prompts.js');

const errors = [];

function fail(message) {
    errors.push(message);
}

for (const id of expectedCharacters) {
    const list = dialogues[id];
    if (!Array.isArray(list)) {
        fail(id + ' is missing');
        continue;
    }
    if (list.length !== expectedCount) fail(id + ' expected ' + expectedCount + ', got ' + list.length);
    list.forEach((example, index) => {
        for (const key of ['situation', 'user', 'reply']) {
            if (!String(example[key] || '').trim()) fail(id + '[' + index + '] missing ' + key);
        }
    });
}

const generated = fs.readFileSync(generatedPath, 'utf8');
const generatedDialogues = new Function('window', generated + '\nreturn window.EXAMPLE_DIALOGUES_KO || EXAMPLE_DIALOGUES_KO;')({});
if (JSON.stringify(generatedDialogues) !== JSON.stringify(dialogues)) {
    fail('generated assets/js/example-dialogues-ko.js does not match scripts/example-dialogues-ko-data.cjs');
}

const prompts = fs.readFileSync(promptsPath, 'utf8');
if (!/EXAMPLE_DIALOGUES_KO/.test(prompts)) {
    fail('assets/js/prompts.js does not read EXAMPLE_DIALOGUES_KO');
}

const runtime = new Function(
    'var window = {};\n' +
    generated + '\n' +
    prompts + '\n' +
    'return { getFreeTalkVoiceExampleList };'
)();

for (const id of expectedCharacters) {
    const actual = runtime.getFreeTalkVoiceExampleList('ko', id, id);
    if (JSON.stringify(actual) !== JSON.stringify(dialogues[id])) {
        fail('runtime ko examples differ for ' + id);
    }
}

const aiTellPatterns = [
    /결론적으로|따라서|이를 통해|그러므로|요약하면|정리하면/u,
    /시사하는 바가 크다|주목할 만하다|본질적으로|핵심적으로/u,
    /에 의해|되어진다|에 있어서|와 관련하여/u,
    /할 수 있을 것으로 보인다|라는 점에서/u
];

for (const [id, list] of Object.entries(dialogues)) {
    list.forEach((example, index) => {
        for (const pattern of aiTellPatterns) {
            if (pattern.test(example.user) || pattern.test(example.reply)) {
                fail(id + '[' + index + '] has AI-like pattern: ' + pattern);
            }
        }
    });
}

console.log('characters', expectedCharacters.length);
console.log('examples', expectedCharacters.reduce((sum, id) => sum + dialogues[id].length, 0));
console.log('not ' + expectedCount, errors.length ? errors.join('; ') : 'none');

if (errors.length) process.exit(1);
