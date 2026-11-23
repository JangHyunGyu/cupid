(function (root) {
    'use strict';
    if (root.AiBrowserProof) return;
    if (typeof root.fetch !== 'function') return;
    const SITEKEY = '0x4AAAAAAFuc4-X-L72BjMVG';
    const fetchOriginal = root.fetch.bind(root);
    let loading, queue = Promise.resolve(), retryBanner = null, forceInteractive = false, firstFreeAllowed = true, fpMemo = '', fpPromise = null;
    async function computeFingerprint() { var __oc0;
        if (fpMemo) return fpMemo;
        const parts = [];
        try {
            const nav = root.navigator || {};
            parts.push(String(nav.platform || ''), String(nav.hardwareConcurrency || 0), String(nav.deviceMemory || 0), String(nav.maxTouchPoints || 0), String(Boolean(nav.pdfViewerEnabled)));
        } catch (_) {}
        try {
            const scr = root.screen || {};
            const dims = [Number(scr.width) || 0, Number(scr.height) || 0].sort((a, b) => b - a);
            parts.push(`${dims[0]}x${dims[1]}`, String(scr.colorDepth || 0), String(scr.pixelDepth || 0));
        } catch (_) {}
        try { parts.push(String(Intl.DateTimeFormat().resolvedOptions().timeZone || '')); } catch (_) {}
        try {
            const canvas = typeof document !== 'undefined' && typeof document.createElement === 'function' ? document.createElement('canvas') : null;
            const gl = canvas && typeof canvas.getContext === 'function' ? (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) : null;
            if (gl && typeof gl.getParameter === 'function') {
                const dbg = typeof gl.getExtension === 'function' ? gl.getExtension('WEBGL_debug_renderer_info') : null;
                const vendor = dbg ? gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL) : gl.getParameter(gl.VENDOR);
                const renderer = dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
                const prec = typeof gl.getShaderPrecisionFormat === 'function' ? gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT) : null;
                const exts = typeof gl.getSupportedExtensions === 'function' ? (gl.getSupportedExtensions() || []).length : 0;
                parts.push(String(vendor || ''), String(renderer || ''), String(gl.getParameter(gl.VERSION) || ''), String(gl.getParameter(gl.SHADING_LANGUAGE_VERSION) || ''),
                    String(gl.getParameter(gl.MAX_TEXTURE_SIZE) || 0), String(gl.getParameter(gl.MAX_RENDERBUFFER_SIZE) || 0),
                    String(gl.getParameter(gl.MAX_VERTEX_ATTRIBS) || 0), String(gl.getParameter(gl.MAX_VARYING_VECTORS) || 0),
                    String(gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS) || 0), String(gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS) || 0),
                    prec ? `${prec.rangeMin}:${prec.rangeMax}:${prec.precision}` : '', String(exts));
            }
        } catch (_) {}
        try {
            const canvas2d = typeof document !== 'undefined' && typeof document.createElement === 'function' ? document.createElement('canvas') : null;
            const ctx = canvas2d && typeof canvas2d.getContext === 'function' ? canvas2d.getContext('2d') : null;
            if (ctx && typeof ctx.measureText === 'function') {
                const widths = [];
                for (const font of ['monospace', 'sans-serif', 'serif', '"Malgun Gothic",sans-serif', '"Apple SD Gothic Neo",sans-serif', '"Yu Gothic",sans-serif', '"Segoe UI",sans-serif']) {
                    ctx.font = `72px ${font}`;
                    widths.push(Math.round(Number((((__oc0 = ctx.measureText('mmmmmmmmmmlli')) === null || __oc0 === void 0 ? void 0 : __oc0.width))) || 0));
                }
                parts.push(widths.join(','));
            }
        } catch (_) {}
        try {
            const raw = parts.join('|') || 'default-fp';
            const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`archerlab-fp:v1|${raw}`));
            fpMemo = Array.from(new Uint8Array(bytes), byte => byte.toString(16).padStart(2, '0')).join('').slice(0, 32);
        } catch (_) {}
        return fpMemo;
    }
    function fingerprint() {
        if (fpMemo) return Promise.resolve(fpMemo);
        if (!fpPromise) fpPromise = computeFingerprint().catch(() => '');
        return fpPromise;
    }
    void fingerprint();
    const isBotCode = code => /^(300\d*|600\d*)$/.test(String(code || ''));
    const isRetryableCode = code => /^(110600|110620|200500|300\d*|600\d*)$/.test(String(code || ''));
    const lang = () => { var __oc1; return (
String(root.GAME_LANG || (((__oc1 = document.documentElement) === null || __oc1 === void 0 ? void 0 : __oc1.lang)) || 'en').toLowerCase().slice(0, 2)
); };
    const isClockSkewCode = code => String(code || '') === '200100';
    const message = (botSuspected = false, clockSkew = false) => (clockSkew ? {
        ko: '기기의 날짜와 시간이 맞지 않아 인증할 수 없어요. 자동 시간 설정을 켠 뒤 다시 시도해 주세요.',
        ja: '端末の日付と時刻がずれているため、認証できません。自動時刻設定をオンにしてから、もう一度お試しください。',
        en: 'Browser verification failed because your device date and time are incorrect. Turn on automatic date and time, then try again.',
        es: 'La verificación del navegador falló porque la fecha y la hora del dispositivo no son correctas. Activa el ajuste automático de fecha y hora y, después, vuelve a intentarlo.',
        fr: 'La vérification du navigateur a échoué car la date et l\'heure de votre appareil sont incorrectes. Activez le réglage automatique de la date et de l\'heure, puis réessayez.',
        de: 'Die Browserprüfung ist fehlgeschlagen, weil Datum und Uhrzeit deines Geräts nicht stimmen. Aktiviere die automatische Datums- und Uhrzeiteinstellung und versuche es danach noch einmal.',
        pt: 'A verificação do navegador falhou porque a data e a hora do dispositivo estão incorretas. Ative o ajuste automático de data e hora e tente outra vez.',
        zh: '设备的日期和时间不正确，无法完成验证。请开启自动设置日期和时间后再试。',
    } : botSuspected ? {
        ko: '접속 확인에 실패했어요. 브라우저 확장 프로그램이나 VPN을 잠시 끄고 다시 인증해 주세요.',
        ja: '接続を確認できませんでした。ブラウザの拡張機能やVPNを一時的にオフにして、再認証してください。',
        en: 'Browser verification failed. Turn off browser extensions or VPN and verify again.',
        es: 'La verificación del navegador falló. Desactiva las extensiones del navegador o la VPN y vuelve a verificar.',
        fr: 'La vérification du navigateur a échoué. Désactivez les extensions du navigateur ou le VPN, puis recommencez la vérification.',
        de: 'Die Browserprüfung ist fehlgeschlagen. Deaktiviere Browsererweiterungen oder VPN und prüfe erneut.',
        pt: 'A verificação do navegador falhou. Desative as extensões do navegador ou a VPN e verifique novamente.',
        zh: '浏览器验证失败。请关闭浏览器扩展程序或 VPN，然后重新验证。',
    } : {
        ko: '접속 확인에 실패했어요. 다시 인증 버튼을 눌러 다시 시도해 주세요.',
        ja: '接続を確認できませんでした。「再認証」ボタンを押してもう一度お試しください。',
        en: 'Browser verification failed. Click "Verify again" and try again.',
        es: 'La verificación del navegador falló. Pulsa «Volver a verificar» e inténtalo de nuevo.',
        fr: 'La vérification du navigateur a échoué. Cliquez sur « Vérifier à nouveau » et réessayez.',
        de: 'Die Browserprüfung ist fehlgeschlagen. Klicke auf „Erneut prüfen“ und versuche es noch einmal.',
        pt: 'A verificação do navegador falhou. Clique em “Verificar novamente” e tente outra vez.',
        zh: '浏览器验证失败。请点击“重新验证”后重试。',
    })[lang()] || (clockSkew ? 'Browser verification failed because your device date and time are incorrect. Turn on automatic date and time, then try again.' : 'Browser verification failed.');
    const retryLabel = () => ({
        ko: '다시 인증',
        ja: '再認証',
        en: 'Verify again',
        es: 'Volver a verificar', fr: 'Vérifier à nouveau', de: 'Erneut prüfen',
        pt: 'Verificar novamente', zh: '重新验证',
    })[lang()] || 'Verify again';
    function failure(retryable = false, meta = {}) { var __oc2, __oc3, __oc4;
        const code = String(meta.code || 'unknown');
        const codes = Array.isArray(meta.codes) && meta.codes.length ? meta.codes.map(String) : [code];
        const botSuspected = Boolean((((__oc2 = meta.botSuspected) !== null && __oc2 !== void 0 ? __oc2 : codes.some(isBotCode))));
        const info = {
            turnstileErrorCode: code,
            turnstileErrorCodes: codes,
            turnstileWidgetLoaded: Boolean(meta.widgetLoaded),
            turnstileScriptLoaded: Boolean((((__oc3 = meta.scriptLoaded) !== null && __oc3 !== void 0 ? __oc3 : (__oc4 = root.turnstile) === null || __oc4 === void 0 ? void 0 : __oc4.render))),
            turnstileBotSuspected: botSuspected,
            turnstileStage: String(meta.stage || 'unknown'),
            turnstileAttempts: Number(meta.attempts) || 1,
            turnstileAppearance: String(meta.appearance || ''),
        };
        try { root.__lastTurnstileFailure = Object.assign({ at: Date.now() }, info); } catch (_) {}
        const clockSkew = isClockSkewCode(code) || (codes.length > 0 && codes.every(isClockSkewCode));
        return Object.assign(new Error(message(botSuspected, clockSkew)), { verificationRetryable: retryable }, info);
    }
    function clearRetryBanner() { var __oc5;
        if (!retryBanner) return;
        try { (((__oc5 = retryBanner.remove) === null || __oc5 === void 0 ? void 0 : __oc5.call(retryBanner))); } catch (_) {}
        retryBanner = null;
    }
    function retryPendingAction() { var __oc6, __oc7, __oc8;
        forceInteractive = true;
        if (!(((__oc6 = root.turnstile) === null || __oc6 === void 0 ? void 0 : __oc6.render))) loading = null;
        clearRetryBanner();
        const doc = typeof document !== 'undefined' ? document : null;
        if (((doc === null || doc === void 0 ? void 0 : doc.querySelector))) {
            for (const [inputSel, btnSel] of [['#ft-input', '#ft-send-btn'], ['#chat-input', '#chat-send'], ['#message-input', '#send']]) {
                const input = doc.querySelector(inputSel), btn = doc.querySelector(btnSel);
                if (input && btn && !btn.disabled && String(input.value || '').trim()) {
                    (((__oc7 = btn.click) === null || __oc7 === void 0 ? void 0 : __oc7.call(btn)));
                    return true;
                }
            }
        }
        const app = root.haremApp;
        if (((app === null || app === void 0 ? void 0 : app.activeCharacterId)) && Array.isArray((((__oc8 = app.chatManager) === null || __oc8 === void 0 ? void 0 : __oc8.conversation))) && app.chatManager.conversation.length === 0
            && typeof app._triggerAutoGreeting === 'function') {
            void app._triggerAutoGreeting('first-greeting');
            return true;
        }
        return false;
    }
    function showRetryBanner(error) { var __oc9, __oc10, __oc12, __oc13, __oc14;
        try {
            clearRetryBanner();
            const container = document.body || document.documentElement;
            if (!((container === null || container === void 0 ? void 0 : container.append)) || typeof document.createElement !== 'function') return;
            const wrap = document.createElement('div');
            wrap.className = 'ai-browser-verification-retry';
            (((__oc9 = wrap.setAttribute) === null || __oc9 === void 0 ? void 0 : __oc9.call(wrap, 'role', 'alert')));
            wrap.style.cssText = 'position:fixed;z-index:2147483647;left:50%;transform:translateX(-50%);bottom:calc(14px + env(safe-area-inset-bottom,0px));display:flex;align-items:center;gap:10px;max-width:calc(100vw - 24px);padding:10px 14px;border-radius:999px;background:rgba(20,22,30,0.94);color:#fff;font:500 13px/1.35 system-ui,-apple-system,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,0.35);';
            const text = document.createElement('span');
            text.className = 'ai-browser-verification-retry-text';
            text.textContent = ((error === null || error === void 0 ? void 0 : error.message)) || message(Boolean(((error === null || error === void 0 ? void 0 : error.turnstileBotSuspected))));
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'ai-browser-verification-retry-btn';
            (((__oc10 = btn.setAttribute) === null || __oc10 === void 0 ? void 0 : __oc10.call(btn, 'data-ai-verify-retry', 'true')));
            btn.textContent = retryLabel();
            btn.style.cssText = 'flex-shrink:0;padding:6px 12px;border:0;border-radius:999px;background:#ff4d8d;color:#fff;font:600 12px/1 system-ui,-apple-system,sans-serif;cursor:pointer;';
            const onRetry = event => { var __oc11;
                (((__oc11 = event === null || event === void 0 ? void 0 : event.preventDefault) === null || __oc11 === void 0 ? void 0 : __oc11.call(event)));
                retryPendingAction();
            };
            btn.onclick = onRetry;
            (((__oc12 = btn.addEventListener) === null || __oc12 === void 0 ? void 0 : __oc12.call(btn, 'click', onRetry)));
            wrap.append ? wrap.append(text, btn) : ((((__oc13 = wrap.appendChild) === null || __oc13 === void 0 ? void 0 : __oc13.call(wrap, text))), (((__oc14 = wrap.appendChild) === null || __oc14 === void 0 ? void 0 : __oc14.call(wrap, btn))));
            wrap.retryButton = btn;
            retryBanner = wrap;
            container.append(wrap);
        } catch (_) {}
    }
    const aborted = signal => { return (
((signal === null || signal === void 0 ? void 0 : signal.reason)) || new DOMException('Aborted', 'AbortError')
); };
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
        if (((signal === null || signal === void 0 ? void 0 : signal.aborted))) return Promise.reject(aborted(signal));
        if (document.visibilityState !== 'hidden') return Promise.resolve();
        return new Promise((resolve, reject) => {
            const finish = error => {
                document.removeEventListener('visibilitychange', changed);
                ((signal === null || signal === void 0 ? void 0 : signal.removeEventListener('abort', cancel)));
                error ? reject(error) : resolve();
            };
            const changed = () => { if (document.visibilityState !== 'hidden') finish(); };
            const cancel = () => finish(aborted(signal));
            document.addEventListener('visibilitychange', changed);
            ((signal === null || signal === void 0 ? void 0 : signal.addEventListener('abort', cancel, { once: true })));
            changed();
        });
    }
    async function digest(type, body) {
        const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${type || ''}\n${body}`));
        return Array.from(new Uint8Array(bytes), byte => byte.toString(16).padStart(2, '0')).join('');
    }
    function load() { var __oc15;
        if ((((__oc15 = root.turnstile) === null || __oc15 === void 0 ? void 0 : __oc15.render))) return Promise.resolve(root.turnstile);
        if (!loading) loading = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
            script.async = true;
            // This loader owns the load failure (onerror/timeout/retry) and the caller reports a terminal verification
            // failure itself, so the generic resource-error reporter must not log the same script again (D1 7009).
            script.setAttribute('data-cupid-managed-script', 'true');
            const timer = setTimeout(() => { script.remove(); reject(failure(true, { code: 'script-load-timeout', stage: 'script-load', widgetLoaded: false, scriptLoaded: false })); }, 20000);
            script.onload = () => { var __oc16; clearTimeout(timer); (((__oc16 = root.turnstile) === null || __oc16 === void 0 ? void 0 : __oc16.render)) ? resolve(root.turnstile) : reject(failure(false, { code: 'script-missing-api', stage: 'script-load', widgetLoaded: false, scriptLoaded: false })); };
            script.onerror = () => { clearTimeout(timer); script.remove(); reject(failure(true, { code: 'script-load-error', stage: 'script-load', widgetLoaded: false, scriptLoaded: false })); };
            document.head.append(script);
        }).catch(error => { loading = null; throw error; });
        return loading;
    }
    async function tokenAttempt(hash, signal, attempt = 0) {
        if (((signal === null || signal === void 0 ? void 0 : signal.aborted))) throw aborted(signal);
        const api = await abortable(load(), signal);
        if (((signal === null || signal === void 0 ? void 0 : signal.aborted))) throw aborted(signal);
        return new Promise((resolve, reject) => { var __oc17;
            const host = document.createElement('div');
            host.className = 'ai-browser-verification';
            host.style.cssText = 'position:fixed;z-index:2147483647;left:50%;transform:translateX(-50%);bottom:calc(12px + env(safe-area-inset-bottom,0px));max-width:calc(100vw - 20px);';
            (document.body || document.documentElement).append(host);
            let id, done = false;
            // Turnstile is rendered with retry: 'never', so a failed invisible run is retried here once
            // with a visible widget; the visitor can then solve the interactive check instead of failing twice.
            const appearance = forceInteractive || attempt > 0 ? 'always' : 'interaction-only';
            const meta = (stage, extra = {}) => Object.assign({ stage, appearance, attempts: attempt + 1, widgetLoaded: true, scriptLoaded: true }, extra);
            const finish = (error, value) => {
                if (done) return;
                done = true; clearTimeout(timer); ((signal === null || signal === void 0 ? void 0 : signal.removeEventListener('abort', cancel)));
                if (id !== undefined) { try { api.remove(id); } catch (_) {} }
                host.remove(); error ? reject(error) : resolve(value);
            };
            const cancel = () => finish(aborted(signal));
            const timer = setTimeout(() => finish(failure(true, meta('widget-timeout', { code: 'widget-timeout', widgetLoaded: id !== undefined }))), 90000);
            ((signal === null || signal === void 0 ? void 0 : signal.addEventListener('abort', cancel, { once: true })));
            try {
                id = api.render(host, { sitekey: SITEKEY, action: 'ai_request', cData: hash,
                    execution: 'execute', appearance, theme: 'auto', retry: 'never',
                    size: root.innerWidth < 330 ? 'compact' : 'normal', language: 'auto',
                    callback: value => finish(null, value),
                    'error-callback': code => {
                        const normalized = String(code || 'widget-error');
                        console.warn('[AI access] Verification failed:', normalized);
                        finish(failure(isRetryableCode(normalized), meta('challenge', { code: normalized })));
                        return true;
                    },
                    'expired-callback': () => finish(failure(true, meta('expired', { code: 'widget-expired' }))),
                    'timeout-callback': () => finish(failure(true, meta('challenge-timeout', { code: 'widget-challenge-timeout' }))),
                });
                if (!done) api.execute(id);
                else if (id !== undefined) { try { api.remove(id); } catch (_) {} }
            } catch (_) { finish(failure(false, meta('render', { code: 'widget-render-exception', widgetLoaded: false, scriptLoaded: Boolean((((__oc17 = root.turnstile) === null || __oc17 === void 0 ? void 0 : __oc17.render))) }))); }
        });
    }
    async function token(hash, signal) {
        const codes = [];
        for (let attempt = 0; attempt < 2; attempt++) {
            await visible(signal);
            try {
                const value = await tokenAttempt(hash, signal, attempt);
                forceInteractive = false;
                clearRetryBanner();
                return value;
            }
            catch (error) {
                if (((signal === null || signal === void 0 ? void 0 : signal.aborted))) throw aborted(signal);
                if (((error === null || error === void 0 ? void 0 : error.turnstileErrorCode))) codes.push(String(error.turnstileErrorCode));
                if (attempt || !((error === null || error === void 0 ? void 0 : error.verificationRetryable))) {
                    const finalError = failure(Boolean(((error === null || error === void 0 ? void 0 : error.verificationRetryable))), {
                        code: ((error === null || error === void 0 ? void 0 : error.turnstileErrorCode)) || codes.at(-1) || 'unknown',
                        codes,
                        widgetLoaded: ((error === null || error === void 0 ? void 0 : error.turnstileWidgetLoaded)),
                        scriptLoaded: ((error === null || error === void 0 ? void 0 : error.turnstileScriptLoaded)),
                        botSuspected: ((error === null || error === void 0 ? void 0 : error.turnstileBotSuspected)) || codes.some(isBotCode),
                        stage: ((error === null || error === void 0 ? void 0 : error.turnstileStage)) || 'unknown',
                        attempts: attempt + 1,
                        appearance: ((error === null || error === void 0 ? void 0 : error.turnstileAppearance)) || '',
                    });
                    showRetryBanner(finalError);
                    throw finalError;
                }
            }
        }
    }
    async function protectedFetch(input, init) { var __oc18, __oc19;
        const method = String(((init === null || init === void 0 ? void 0 : init.method)) || (input instanceof Request ? input.method : 'GET')).toUpperCase();
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
            if (((error === null || error === void 0 ? void 0 : error.error)) !== 'AI_ACCESS_REQUIRED'
                || !['BROWSER_VERIFICATION_REQUIRED', 'BROWSER_VERIFICATION_FAILED', 'BROWSER_VERIFICATION_UNAVAILABLE'].includes(error.reason)) return response;
            await (((__oc18 = response.body) === null || __oc18 === void 0 ? void 0 : __oc18.cancel()));
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
            if (fpMemo && !headers.has('x-device-fp')) headers.set('x-device-fp', fpMemo);
            if (request.signal.aborted) throw aborted(request.signal);
            const response = await fetchOriginal(new Request(request.clone(), { headers }));
            if (attempt || ![403, 503].includes(response.status)) {
                if (attempt && [403, 503].includes(response.status)) {
                    const terminalErr = await response.clone().json().catch(() => null);
                    if (((terminalErr === null || terminalErr === void 0 ? void 0 : terminalErr.error)) === 'AI_ACCESS_REQUIRED') {
                        showRetryBanner(failure(true, {
                            code: String(terminalErr.reason || 'server-verify-failed').toLowerCase(),
                            stage: 'server-verify',
                            attempts: attempt + 1,
                            widgetLoaded: true,
                            scriptLoaded: true,
                            botSuspected: true,
                        }));
                    }
                }
                return response;
            }
            const error = await response.clone().json().catch(() => null);
            if (((error === null || error === void 0 ? void 0 : error.error)) !== 'AI_ACCESS_REQUIRED'
                || !['BROWSER_VERIFICATION_FAILED', 'BROWSER_VERIFICATION_UNAVAILABLE'].includes(error.reason)) return response;
            await (((__oc19 = response.body) === null || __oc19 === void 0 ? void 0 : __oc19.cancel()));
        }
    }
    root.AiBrowserProof = Object.freeze({ fetch: protectedFetch, retry: retryPendingAction, fingerprint });
    root.fetch = protectedFetch;
})(window);
