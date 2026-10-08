const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

function rewriteSpokenLexicon(text) {
  const source = String(text ?? '');
  if (!source.includes('씨물')) return source;
  return source.replace(/씨물로/g, '정액으로').replace(/씨물/g, '정액');
}

test('display rewrite turns 씨물로 into 정액으로', () => {
  assert.equal(rewriteSpokenLexicon('당신의 씨물로'), '당신의 정액으로');
  assert.equal(rewriteSpokenLexicon('씨물이 씨물은 씨물을'), '정액이 정액은 정액을');
  assert.equal(rewriteSpokenLexicon('정액은 그대로'), '정액은 그대로');
});

test('story dialogue and gallery freetalk rewrite before formatting', () => {
  const dialogue = fs.readFileSync(path.join(__dirname, '../assets/js/modules/DialogueSystem.js'), 'utf8');
  const gallery = fs.readFileSync(path.join(__dirname, '../assets/js/gallery-freetalk.js'), 'utf8');
  for (const source of [dialogue, gallery]) {
    assert.match(source, /_rewriteSpokenLexicon\(text\)/);
    assert.match(source, /씨물로\/g, '정액으로'/);
    assert.match(source, /this\._rewriteSpokenLexicon\(text\)\.replace/);
  }
});
