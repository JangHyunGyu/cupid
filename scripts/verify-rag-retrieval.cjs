'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

function assert(condition, message) {
    if (!condition) throw new Error(`[RAG_RETRIEVAL] ${message}`);
}

function read(relativePath) {
    return fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
}

const coreSource = read('assets/js/freetalk-core.js');
const context = { window: {}, Set, Object, String, Number, Array, Map, Math, encodeURIComponent };
vm.runInNewContext(coreSource, context);
const core = context.window.CupidFreeTalkCore;

assert(core.getPromptMemoryRetrievalDecision('지금 손잡고 걸을까?', []).retrieve === false,
    'ordinary live-scene input must not trigger retrieval');
assert(core.getPromptMemoryRetrievalDecision('지난번에 했던 약속 기억해?', [
    { role: 'user', content: '지난번에 했던 약속 기억해?' }
]).reason === 'older_memory_needed', 'explicit older-memory questions must trigger retrieval');
assert(core.getPromptMemoryRetrievalDecision('What key did I give you last time?', [
    { role: 'assistant', content: 'A monkey crossed the garden.' },
    { role: 'user', content: 'What key did I give you last time?' }
]).retrieve === true, 'English anchors must use word boundaries');
assert(core.getPromptMemoryRetrievalDecision('그 약속 기억해?', [
    { role: 'assistant', content: '졸업식 날 옥상에서 만나기로 한 약속이야.' },
    { role: 'user', content: '그 약속 기억해?' }
]).reason === 'covered_by_recent_context', 'recent verbatim context must suppress redundant retrieval');

const config = read('assets/js/modules/config.js');
assert(config.includes("`${API_ENDPOINT}search-memory`"), 'shared search-memory endpoint is not wired');
assert(config.includes("'x-app-id': getCupidAppId()"), 'language-scoped Cupid app id is not sent');
assert(config.includes('userId: getCupidDeviceId()'), 'persistent Cupid device id is not sent');
assert(config.includes('topK: 6'), 'retrieval candidate count must remain six');
assert(config.includes('}, 900);'), 'retrieval must fail open after 900ms');
assert(config.includes('window.prepareCupidPromptMemoryRecall = prepareCupidPromptMemoryRecall'),
    'retrieval helper is not exported');

for (const relativePath of ['assets/js/modules/FreeTalkSystem.js', 'assets/js/gallery-freetalk.js']) {
    const source = read(relativePath);
    assert(source.includes('await window.prepareCupidPromptMemoryRecall({'), `${relativePath} does not await selective retrieval`);
    assert(source.includes('buildDataBankRecallBlock(_memoryRecall'), `${relativePath} does not build the recall block`);
    assert(source.includes('${_dataBankRecallBlock}'), `${relativePath} does not inject recall as dynamic context`);
    const recallIndex = source.indexOf('await window.prepareCupidPromptMemoryRecall({');
    const staleGuardIndex = source.indexOf('this._assertRequestContext(requestContext);', recallIndex);
    const fingerprintIndex = source.indexOf('getFreeTalkStablePromptFingerprint', recallIndex) >= 0
        ? source.indexOf('getFreeTalkStablePromptFingerprint', recallIndex)
        : source.indexOf('getGalleryFreeTalkStablePromptFingerprint', recallIndex);
    assert(staleGuardIndex > recallIndex, `${relativePath} does not re-check request context after retrieval`);
    assert(fingerprintIndex > staleGuardIndex, `${relativePath} retrieval is not kept in the dynamic pre-request path`);
}

console.log('[RAG_RETRIEVAL] selective Cupid RAG verification passed');
