(function (root) {
    'use strict';
    if (root.AiBrowserProof) return;
    const SITEKEY = '0x4AAAAAAFuc4-X-L72BjMVG';
    const fetchOriginal = root.fetch.bind(root);
    let loading, queue = Promise.resolve();
    const message = () => ({
        ko: '접속 확인에 실패했어요. 페이지를 새로고침한 뒤 다시 시도해 주세요.',
        ja: '接続を確認できませんでした。ページを再読み込みして、もう一度お試しください。',
        en: 'Browser verification failed. Reload this page and try again.',
    })[(document.documentElement.lang || 'en').slice(0, 2)] || 'Browser verification failed.';
    const failure = () => new Error(message());
    const aborted = signal => signal?.reason || new DOMException('Aborted', 'AbortError');
    function abortable(promise, signal) {
        if (!signal) return promise;
        if (signal.aborted) return Promise.reject(aborted(signal));
        return new Promise((resolve, reject) => {
            const cancel = () => reject(aborted(signal));
            signal.addEventListener('abort', cancel, { once: true });
            promise.then(resolve, reject).finally(() => signal.removeEventListener('abort', cancel));
        });
    }
    function protectedUrl(url) {
        return (url.hostname === 'openrouter-api.yama5993.workers.dev' && ['/', '/chat/completions', '/v1/chat/completions'].includes(url.pathname))
            || (url.hostname === 'avatar.archerlab.dev' && url.pathname === '/api/credits/chat')
            || (url.origin === location.origin && url.pathname === '/api/ai');
    }
    async function digest(type, body) {
        const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${type || ''}\n${body}`));
        return Array.from(new Uint8Array(bytes), byte => byte.toString(16).padStart(2, '0')).join('');
    }
    function load() {
        if (root.turnstile?.render) return Promise.resolve(root.turnstile);
        if (!loading) loading = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
            script.async = true;
            const timer = setTimeout(() => { script.remove(); reject(failure()); }, 20000);
            script.onload = () => { clearTimeout(timer); root.turnstile?.render ? resolve(root.turnstile) : reject(failure()); };
            script.onerror = () => { clearTimeout(timer); script.remove(); reject(failure()); };
            document.head.append(script);
        }).catch(error => { loading = null; throw error; });
        return loading;
    }
    async function token(hash, signal) {
        if (signal?.aborted) throw aborted(signal);
        const api = await abortable(load(), signal);
        if (signal?.aborted) throw aborted(signal);
        return new Promise((resolve, reject) => {
            const host = document.createElement('div');
            host.className = 'ai-browser-verification';
            host.style.cssText = 'position:fixed;z-index:2147483647;left:50%;transform:translateX(-50%);bottom:calc(12px + env(safe-area-inset-bottom,0px));max-width:calc(100vw - 20px);';
            (document.body || document.documentElement).append(host);
            let id, done = false;
            const finish = (error, value) => {
                if (done) return;
                done = true; clearTimeout(timer); signal?.removeEventListener('abort', cancel);
                if (id !== undefined) { try { api.remove(id); } catch (_) {} }
                host.remove(); error ? reject(error) : resolve(value);
            };
            const cancel = () => finish(aborted(signal));
            const timer = setTimeout(() => finish(failure()), 90000);
            signal?.addEventListener('abort', cancel, { once: true });
            try {
                id = api.render(host, { sitekey: SITEKEY, action: 'ai_request', cData: hash,
                    execution: 'execute', appearance: 'interaction-only', theme: 'auto', retry: 'never',
                    size: root.innerWidth < 330 ? 'compact' : 'normal', language: 'auto',
                    callback: value => finish(null, value),
                    'error-callback': code => { console.warn('[AI access] Verification failed:', String(code)); finish(failure()); return true; },
                    'expired-callback': () => finish(failure()),
                    'timeout-callback': () => finish(failure()),
                });
                if (!done) api.execute(id);
            } catch (_) { finish(failure()); }
        });
    }
    async function protectedFetch(input, init) {
        const method = String(init?.method || (input instanceof Request ? input.method : 'GET')).toUpperCase();
        const url = new URL(input instanceof Request ? input.url : String(input), location.href);
        if (method !== 'POST' || !protectedUrl(url)) return fetchOriginal(input, init);
        const request = new Request(input instanceof Request ? input : url.href, init);
        const body = await request.clone().text();
        const hash = await digest(request.headers.get('x-request-type'), body);
        // Each attempt gets its own single-use proof, including transport retries.
        const proof = queue.then(() => token(hash, request.signal));
        queue = proof.catch(() => {});
        const headers = new Headers(request.headers);
        headers.set('x-ai-proof', await abortable(proof, request.signal));
        if (request.signal.aborted) throw aborted(request.signal);
        return fetchOriginal(new Request(request, { headers }));
    }
    root.AiBrowserProof = Object.freeze({ fetch: protectedFetch });
    root.fetch = protectedFetch;
})(window);
