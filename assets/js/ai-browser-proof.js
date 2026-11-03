(function (root) {
    'use strict';
    if (root.AiBrowserProof) return;
    const SITEKEY = '0x4AAAAAAFuc4-X-L72BjMVG';
    const fetchOriginal = root.fetch.bind(root);
    let loading, queue = Promise.resolve(), retryBanner = null, forceInteractive = false, firstFreeAllowed = true;
    const isBotCode = code => /^(300\d*|600\d*)$/.test(String(code || ''));
    const isRetryableCode = code => /^(110600|110620|200500|300\d*|600\d*)$/.test(String(code || ''));
    const lang = () => (document.documentElement?.lang || 'en').slice(0, 2);
    const message = (botSuspected = false) => (botSuspected ? {
        ko: '접속 확인에 실패했어요. 브라우저 확장 프로그램이나 VPN을 잠시 끄고 다시 인증해 주세요.',
        ja: '接続を確認できませんでした。ブラウザの拡張機能やVPNを一時的にオフにして、再認証してください。',
        en: 'Browser verification failed. Turn off browser extensions or VPN and verify again.',
    } : {
        ko: '접속 확인에 실패했어요. 다시 인증 버튼을 눌러 다시 시도해 주세요.',
        ja: '接続を確認できませんでした。「再認証」ボタンを押してもう一度お試しください。',
        en: 'Browser verification failed. Click "Verify again" and try again.',
    })[lang()] || 'Browser verification failed.';
    const retryLabel = () => ({
        ko: '다시 인증',
        ja: '再認証',
        en: 'Verify again',
    })[lang()] || 'Verify again';
    function failure(retryable = false, meta = {}) {
        const code = String(meta.code || 'unknown');
        const codes = Array.isArray(meta.codes) && meta.codes.length ? meta.codes.map(String) : [code];
        const botSuspected = Boolean(meta.botSuspected ?? codes.some(isBotCode));
        const info = {
            turnstileErrorCode: code,
            turnstileErrorCodes: codes,
            turnstileWidgetLoaded: Boolean(meta.widgetLoaded),
            turnstileScriptLoaded: Boolean(meta.scriptLoaded ?? root.turnstile?.render),
            turnstileBotSuspected: botSuspected,
        };
        try { root.__lastTurnstileFailure = Object.assign({ at: Date.now() }, info); } catch (_) {}
        return Object.assign(new Error(message(botSuspected)), { verificationRetryable: retryable }, info);
    }
    function clearRetryBanner() {
        if (!retryBanner) return;
        try { retryBanner.remove?.(); } catch (_) {}
        retryBanner = null;
    }
    function retryPendingAction() {
        forceInteractive = true;
        if (!root.turnstile?.render) loading = null;
        clearRetryBanner();
        const doc = typeof document !== 'undefined' ? document : null;
        if (doc?.querySelector) {
            for (const [inputSel, btnSel] of [['#ft-input', '#ft-send-btn'], ['#chat-input', '#chat-send'], ['#message-input', '#send']]) {
                const input = doc.querySelector(inputSel), btn = doc.querySelector(btnSel);
                if (input && btn && !btn.disabled && String(input.value || '').trim()) {
                    btn.click?.();
                    return true;
                }
            }
        }
        const app = root.haremApp;
        if (app?.activeCharacterId && Array.isArray(app.chatManager?.conversation) && app.chatManager.conversation.length === 0
            && typeof app._triggerAutoGreeting === 'function') {
            void app._triggerAutoGreeting('first-greeting');
            return true;
        }
        return false;
    }
    function showRetryBanner(error) {
        try {
            clearRetryBanner();
            const container = document.body || document.documentElement;
            if (!container?.append || typeof document.createElement !== 'function') return;
            const wrap = document.createElement('div');
            wrap.className = 'ai-browser-verification-retry';
            wrap.setAttribute?.('role', 'alert');
            wrap.style.cssText = 'position:fixed;z-index:2147483647;left:50%;transform:translateX(-50%);bottom:calc(14px + env(safe-area-inset-bottom,0px));display:flex;align-items:center;gap:10px;max-width:calc(100vw - 24px);padding:10px 14px;border-radius:999px;background:rgba(20,22,30,0.94);color:#fff;font:500 13px/1.35 system-ui,-apple-system,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,0.35);';
            const text = document.createElement('span');
            text.className = 'ai-browser-verification-retry-text';
            text.textContent = error?.message || message(Boolean(error?.turnstileBotSuspected));
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'ai-browser-verification-retry-btn';
            btn.setAttribute?.('data-ai-verify-retry', 'true');
            btn.textContent = retryLabel();
            btn.style.cssText = 'flex-shrink:0;padding:6px 12px;border:0;border-radius:999px;background:#ff4d8d;color:#fff;font:600 12px/1 system-ui,-apple-system,sans-serif;cursor:pointer;';
            const onRetry = event => {
                event?.preventDefault?.();
                retryPendingAction();
            };
            btn.onclick = onRetry;
            btn.addEventListener?.('click', onRetry);
            wrap.append ? wrap.append(text, btn) : (wrap.appendChild?.(text), wrap.appendChild?.(btn));
            wrap.retryButton = btn;
            retryBanner = wrap;
            container.append(wrap);
        } catch (_) {}
    }
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
    function visible(signal) {
        if (signal?.aborted) return Promise.reject(aborted(signal));
        if (document.visibilityState !== 'hidden') return Promise.resolve();
        return new Promise((resolve, reject) => {
            const finish = error => {
                document.removeEventListener('visibilitychange', changed);
                signal?.removeEventListener('abort', cancel);
                error ? reject(error) : resolve();
            };
            const changed = () => { if (document.visibilityState !== 'hidden') finish(); };
            const cancel = () => finish(aborted(signal));
            document.addEventListener('visibilitychange', changed);
            signal?.addEventListener('abort', cancel, { once: true });
            changed();
        });
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
            const timer = setTimeout(() => { script.remove(); reject(failure(true, { code: 'script-load-timeout', widgetLoaded: false, scriptLoaded: false })); }, 20000);
            script.onload = () => { clearTimeout(timer); root.turnstile?.render ? resolve(root.turnstile) : reject(failure(false, { code: 'script-missing-api', widgetLoaded: false, scriptLoaded: false })); };
            script.onerror = () => { clearTimeout(timer); script.remove(); reject(failure(true, { code: 'script-load-error', widgetLoaded: false, scriptLoaded: false })); };
            document.head.append(script);
        }).catch(error => { loading = null; throw error; });
        return loading;
    }
    async function tokenAttempt(hash, signal) {
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
            const timer = setTimeout(() => finish(failure(true, { code: 'widget-timeout', widgetLoaded: id !== undefined, scriptLoaded: true })), 90000);
            signal?.addEventListener('abort', cancel, { once: true });
            try {
                id = api.render(host, { sitekey: SITEKEY, action: 'ai_request', cData: hash,
                    execution: 'execute', appearance: forceInteractive ? 'always' : 'interaction-only', theme: 'auto', retry: 'never',
                    size: root.innerWidth < 330 ? 'compact' : 'normal', language: 'auto',
                    callback: value => finish(null, value),
                    'error-callback': code => {
                        const normalized = String(code || 'widget-error');
                        console.warn('[AI access] Verification failed:', normalized);
                        finish(failure(isRetryableCode(normalized), { code: normalized, widgetLoaded: true, scriptLoaded: true }));
                        return true;
                    },
                    'expired-callback': () => finish(failure(true, { code: 'widget-expired', widgetLoaded: true, scriptLoaded: true })),
                    'timeout-callback': () => finish(failure(true, { code: 'widget-challenge-timeout', widgetLoaded: true, scriptLoaded: true })),
                });
                if (!done) api.execute(id);
                else if (id !== undefined) { try { api.remove(id); } catch (_) {} }
            } catch (_) { finish(failure(false, { code: 'widget-render-exception', widgetLoaded: false, scriptLoaded: Boolean(root.turnstile?.render) })); }
        });
    }
    async function token(hash, signal) {
        const codes = [];
        for (let attempt = 0; attempt < 2; attempt++) {
            await visible(signal);
            try {
                const value = await tokenAttempt(hash, signal);
                forceInteractive = false;
                clearRetryBanner();
                return value;
            }
            catch (error) {
                if (signal?.aborted) throw aborted(signal);
                if (error?.turnstileErrorCode) codes.push(String(error.turnstileErrorCode));
                if (attempt || !error?.verificationRetryable) {
                    const finalError = failure(Boolean(error?.verificationRetryable), {
                        code: error?.turnstileErrorCode || codes.at(-1) || 'unknown',
                        codes,
                        widgetLoaded: error?.turnstileWidgetLoaded,
                        scriptLoaded: error?.turnstileScriptLoaded,
                        botSuspected: error?.turnstileBotSuspected || codes.some(isBotCode),
                    });
                    showRetryBanner(finalError);
                    throw finalError;
                }
            }
        }
    }
    async function protectedFetch(input, init) {
        const method = String(init?.method || (input instanceof Request ? input.method : 'GET')).toUpperCase();
        const url = new URL(input instanceof Request ? input.url : String(input), location.href);
        if (method !== 'POST' || !protectedUrl(url)) return fetchOriginal(input, init);
        const request = new Request(input instanceof Request ? input : url.href, init);
        const requestType = request.headers.get('x-request-type');
        const skipFirstGreetingProof = firstFreeAllowed && requestType === 'first-greeting';
        firstFreeAllowed = false;
        if (skipFirstGreetingProof) {
            const response = await fetchOriginal(request.clone());
            if (![403, 503].includes(response.status)) return response;
            const error = await response.clone().json().catch(() => null);
            if (error?.error !== 'AI_ACCESS_REQUIRED'
                || !['BROWSER_VERIFICATION_REQUIRED', 'BROWSER_VERIFICATION_FAILED', 'BROWSER_VERIFICATION_UNAVAILABLE'].includes(error.reason)) return response;
            await response.body?.cancel();
        }
        const body = await request.clone().text();
        const hash = await digest(requestType, body);
        for (let attempt = 0; attempt < 2; attempt++) {
            // A rejected proof never reaches generation. Renew it once without
            // replaying a successful response or changing the charged turn ID.
            const proof = queue.then(() => token(hash, request.signal));
            queue = proof.catch(() => {});
            const headers = new Headers(request.headers);
            headers.set('x-ai-proof', await abortable(proof, request.signal));
            if (request.signal.aborted) throw aborted(request.signal);
            const response = await fetchOriginal(new Request(request.clone(), { headers }));
            if (attempt || ![403, 503].includes(response.status)) return response;
            const error = await response.clone().json().catch(() => null);
            if (error?.error !== 'AI_ACCESS_REQUIRED'
                || !['BROWSER_VERIFICATION_FAILED', 'BROWSER_VERIFICATION_UNAVAILABLE'].includes(error.reason)) return response;
            await response.body?.cancel();
        }
    }
    root.AiBrowserProof = Object.freeze({ fetch: protectedFetch, retry: retryPendingAction });
    root.fetch = protectedFetch;
})(window);
