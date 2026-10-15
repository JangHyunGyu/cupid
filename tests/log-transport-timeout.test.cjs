const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');

// 실제 config.js 전송 구간을 불러, 본문을 읽는 도중 시간 초과가 나는 경우를 그대로 재현합니다.
function loadTransport(fetchImpl) {
    const context = { console, AbortController, setTimeout, clearTimeout, fetch: fetchImpl, window: {} };
    vm.createContext(context);
    const source = fs.readFileSync(path.join(root, 'assets/js/modules/config.js'), 'utf8');
    const transport = source.slice(source.indexOf('// CUPID_LOG_TRANSPORT_START'), source.indexOf('// CUPID_LOG_TRANSPORT_END'));
    vm.runInContext(`${transport}\nwindow.sendCupidLogRequest = sendCupidLogRequest;`, context);
    return context.window;
}

test('a body that stalls past the timeout ends in TimeoutError without an unhandled rejection', async () => {
    const unhandled = [];
    const onUnhandled = reason => unhandled.push(reason);
    process.on('unhandledRejection', onUnhandled);
    try {
        // 헤더는 오고 본문이 끝나지 않는 응답: response.text()가 스트림을 잠근 채 기다립니다.
        const stalledBody = () => new Response(new ReadableStream({ start() {} }), { status: 200 });
        const w = loadTransport(async () => stalledBody());
        await assert.rejects(
            w.sendCupidLogRequest('https://api.test/log', { body: '{}', label: 'chat-log', timeoutMs: 30 }),
            error => error.name === 'TimeoutError' && error.cupidFetchTimeout === true
        );
        await new Promise(resolve => setTimeout(resolve, 50));
        assert.deepEqual(unhandled.map(reason => String(reason && reason.message || reason)), []);
    } finally {
        process.off('unhandledRejection', onUnhandled);
    }
});
