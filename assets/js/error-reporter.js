(function () {
    'use strict';

    if (window.__cupidErrorReporterInstalled) return;

    var VERSION = '20260710-durable';
    var ERROR_ENDPOINT = 'https://chatbot-api.yama5993.workers.dev/error-logs';
    var QUEUE_KEY = 'cupid-error-queue-v2';
    var SESSION_KEY = 'cupid-error-session-v2';
    var MAX_QUEUE_SIZE = 100;
    var RETRY_DELAY_MS = 15000;
    var pagePath = window.location.pathname || '/';
    var queue = readQueue();
    var flushing = false;
    var retryTimer = null;
    var reportedCaughtErrors = typeof WeakSet === 'function' ? new WeakSet() : null;

    function randomId() {
        try {
            if (window.crypto && typeof window.crypto.randomUUID === 'function') {
                return window.crypto.randomUUID();
            }
        } catch (_) { /* fall through */ }
        return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 12);
    }

    function getSessionId() {
        try {
            var saved = window.sessionStorage.getItem(SESSION_KEY);
            if (saved) return saved;
            var created = randomId().slice(0, 64);
            window.sessionStorage.setItem(SESSION_KEY, created);
            return created;
        } catch (_) {
            return randomId().slice(0, 64);
        }
    }

    function getDeviceId() {
        try {
            var saved = window.localStorage.getItem('cupid_device_id');
            if (saved) return saved;
            var created = 'cupid_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 10);
            window.localStorage.setItem('cupid_device_id', created);
            return created;
        } catch (_) {
            return 'cupid_anon';
        }
    }

    function detectLanguage() {
        var htmlLang = '';
        try { htmlLang = String(document.documentElement.lang || '').toLowerCase().split('-')[0]; }
        catch (_) { /* ignore */ }
        if (/^(en|ja|es|fr|de|pt)$/.test(htmlLang)) return htmlLang;
        var pathMatch = pagePath.match(/-(en|ja|es|fr|de|pt)(?:\.html)?(?:\/|$)/i);
        return pathMatch ? pathMatch[1].toLowerCase() : 'ko';
    }

    var sessionId = getSessionId();
    var language = detectLanguage();
    var defaultAppId = language === 'ko' ? 'cupid' : 'cupid-' + language;

    function readQueue() {
        try {
            var parsed = JSON.parse(window.localStorage.getItem(QUEUE_KEY) || '[]');
            return Array.isArray(parsed) ? parsed.slice(-MAX_QUEUE_SIZE) : [];
        } catch (_) {
            return [];
        }
    }

    function persistQueue() {
        try { window.localStorage.setItem(QUEUE_KEY, JSON.stringify(queue)); }
        catch (_) { /* memory queue remains available for this page */ }
    }

    function safeString(value) {
        if (typeof value === 'string') return value;
        if (value instanceof Error) return value.message || String(value);
        try {
            if (value && typeof value === 'object') return JSON.stringify(value);
        } catch (_) { /* fall through */ }
        try { return String(value); }
        catch (_) { return '[unserializable value]'; }
    }

    function pageSurface() {
        if (/\/seo\//.test(pagePath)) return 'seo';
        if (/gallery/i.test(pagePath)) return 'gallery';
        if (/game/i.test(pagePath)) return 'game';
        return 'landing';
    }

    function getGameContext() {
        var context = {
            reporterVersion: VERSION,
            path: pagePath,
            surface: pageSurface(),
            language: language,
            online: navigator.onLine,
            visibility: document.visibilityState || '',
            viewport: window.innerWidth + 'x' + window.innerHeight,
            referrer: document.referrer || 'direct',
            occurredAt: new Date().toISOString()
        };
        try {
            var game = window.gameEngine;
            if (game && game.stateManager && game.stateManager.currentDay) {
                context.day = game.stateManager.currentDay;
            }
            if (game && game.sceneRenderer && game.sceneRenderer.currentSceneId) {
                context.scene = game.sceneRenderer.currentSceneId;
            }
            if (game && game.freeTalkSystem) {
                context.freeTalking = !!game.freeTalkSystem.isFreeTalking;
            }
        } catch (_) { /* context is best-effort */ }
        return context;
    }

    function mergeObjects(base, extra) {
        if (!extra || typeof extra !== 'object') return base;
        Object.keys(extra).forEach(function (key) { base[key] = extra[key]; });
        return base;
    }

    function classifyError(message, stack, source, type) {
        var text = [message, stack, source].filter(Boolean).join('\n');
        if (/chrome-extension:|moz-extension:|safari-web-extension:|webkit-masked-url:\/\/hidden/i.test(text)) {
            return 'external';
        }
        if (/googletagmanager|google-analytics|gtag\/js|cdn\.jsdelivr\.net/i.test(text)) {
            return 'external';
        }
        if (type === 'ResourceError' || /Loading chunk|dynamically imported module|Failed to fetch/i.test(message)) {
            return 'network';
        }
        if (type === 'SecurityPolicyViolation') return 'security';
        return 'app';
    }

    function sourceFromStack(stack) {
        var lines = String(stack || '').split('\n');
        for (var i = 0; i < lines.length; i++) {
            if (/error-reporter\.js/i.test(lines[i])) continue;
            var match = lines[i].match(/https?:\/\/[^\s)]+/);
            if (match) return match[0];
        }
        return window.location.href;
    }

    function enqueue(payload) {
        var id = randomId();
        payload.extra = payload.extra || {};
        payload.extra.eventId = id;
        queue.push({ id: id, payload: payload });
        if (queue.length > MAX_QUEUE_SIZE) queue.splice(0, queue.length - MAX_QUEUE_SIZE);
        persistQueue();
        flushQueue();
    }

    function report(type, message, stack, source, details) {
        try {
            details = details || {};
            var normalizedMessage = safeString(message || 'Unknown script error');
            var normalizedStack = safeString(stack || '');
            var normalizedSource = safeString(source || window.location.href);
            var errorClass = details.errorClass || classifyError(normalizedMessage, normalizedStack, normalizedSource, type);
            var context = mergeObjects(getGameContext(), details.context || {});
            enqueue({
                appId: details.appId || defaultAppId,
                userId: details.userId || getDeviceId(),
                message: ('[' + errorClass + ':' + type + '] ' + normalizedMessage).slice(0, 500),
                stack: normalizedStack.slice(0, 4000),
                url: window.location.href.slice(0, 500),
                source: normalizedSource.slice(0, 500),
                errorType: String(type || 'Error').slice(0, 100),
                errorClass: String(errorClass).slice(0, 50),
                sessionId: String(details.sessionId || sessionId).slice(0, 64),
                context: context,
                extra: details.extra || {}
            });
        } catch (_) { /* the reporter must never break the app */ }
    }

    function removeQueuedEvent(id) {
        for (var i = 0; i < queue.length; i++) {
            if (queue[i].id === id) {
                queue.splice(i, 1);
                persistQueue();
                return;
            }
        }
    }

    function scheduleRetry() {
        if (retryTimer) return;
        retryTimer = window.setTimeout(function () {
            retryTimer = null;
            flushQueue();
        }, RETRY_DELAY_MS);
    }

    function flushQueue() {
        if (flushing || !queue.length) return;
        if (navigator.onLine === false) {
            scheduleRetry();
            return;
        }
        if (typeof window.fetch !== 'function') {
            flushWithBeacon();
            return;
        }

        flushing = true;
        var current = queue[0];
        window.fetch(ERROR_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
            body: JSON.stringify(current.payload),
            mode: 'cors',
            credentials: 'omit',
            cache: 'no-store',
            keepalive: true
        }).then(function (response) {
            if (!response.ok) throw new Error('Error log endpoint returned ' + response.status);
            removeQueuedEvent(current.id);
            flushing = false;
            if (queue.length) window.setTimeout(flushQueue, 0);
        }).catch(function () {
            flushing = false;
            scheduleRetry();
        });
    }

    function flushWithBeacon() {
        if (!queue.length || navigator.onLine === false || typeof navigator.sendBeacon !== 'function') return;
        var acceptedIds = [];
        for (var i = 0; i < queue.length; i++) {
            try {
                if (navigator.sendBeacon(ERROR_ENDPOINT, JSON.stringify(queue[i].payload))) {
                    acceptedIds.push(queue[i].id);
                }
            } catch (_) { /* leave the item queued */ }
        }
        if (!acceptedIds.length) return;
        queue = queue.filter(function (item) { return acceptedIds.indexOf(item.id) === -1; });
        persistQueue();
    }

    function handleWindowError(event) {
        var target = event.target || event.srcElement;
        if (target && target !== window && target !== document) {
            var tagName = String(target.tagName || '').toUpperCase();
            if (tagName !== 'SCRIPT' && tagName !== 'LINK') return;
            var resource = target.src || target.href || '';
            report(
                'ResourceError',
                'Failed to load resource: ' + (tagName || 'UNKNOWN'),
                '',
                resource || window.location.href,
                { extra: { tagName: tagName, rel: target.rel || '' } }
            );
            return;
        }

        var error = event.error;
        report(
            (error && error.name) || 'Error',
            event.message || (error && error.message) || 'Script error.',
            (error && error.stack) || '',
            event.filename || window.location.href,
            { extra: { line: event.lineno || 0, column: event.colno || 0 } }
        );
    }

    function handleUnhandledRejection(event) {
        var reason = event.reason;
        report(
            'UnhandledRejection',
            (reason && reason.message) || safeString(reason || 'Unhandled rejection'),
            (reason && reason.stack) || '',
            window.location.href,
            { extra: { reasonType: (reason && reason.name) || typeof reason } }
        );
    }

    function handleSecurityPolicyViolation(event) {
        report(
            'SecurityPolicyViolation',
            'Blocked by CSP: ' + (event.violatedDirective || event.effectiveDirective || 'unknown directive'),
            '',
            event.blockedURI || window.location.href,
            { extra: { disposition: event.disposition || '', originalPolicy: event.originalPolicy || '' } }
        );
    }

    function handleVisibilityChange() {
        if (document.visibilityState === 'hidden') flushWithBeacon();
        else flushQueue();
    }

    window.addEventListener('error', handleWindowError, true);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    document.addEventListener('securitypolicyviolation', handleSecurityPolicyViolation);

    if (window.console && typeof window.console.error === 'function') {
        var originalConsoleError = window.console.error;
        window.console.error = function () {
            originalConsoleError.apply(window.console, arguments);
            try {
                var args = Array.prototype.slice.call(arguments);
                var errorArg = null;
                for (var i = 0; i < args.length; i++) {
                    if (args[i] instanceof Error) { errorArg = args[i]; break; }
                }
                var stack = errorArg && errorArg.stack ? errorArg.stack : new Error('console.error').stack;
                window.setTimeout(function () {
                    if (errorArg && reportedCaughtErrors && reportedCaughtErrors.has(errorArg)) return;
                    report(
                        (errorArg && errorArg.name) || 'ConsoleError',
                        args.map(safeString).join(' '),
                        stack || '',
                        sourceFromStack(stack)
                    );
                }, 0);
            } catch (_) { /* preserve console behavior */ }
        };
    }

    window.__cupidLogRuntimeError = function (type, message, stack, source, extra) {
        report(type || 'ManualReport', message, stack, source, { extra: extra || {} });
        return true;
    };
    window.__cupidReportCaughtError = function (error, options) {
        options = options || {};
        try {
            if (reportedCaughtErrors && error && typeof error === 'object') reportedCaughtErrors.add(error);
        } catch (_) { /* ignore */ }
        report(
            options.errorType || (error && error.name) || 'CaughtError',
            (error && error.message) || safeString(error || 'Unknown Cupid error'),
            (error && error.stack) || '',
            options.source || 'cupid',
            options
        );
        return true;
    };
    window.__cupidFlushErrors = flushQueue;
    window.__cupidErrorReporterVersion = VERSION;
    window.__cupidErrorReporterInstalled = true;

    window.addEventListener('online', flushQueue);
    window.addEventListener('pagehide', flushWithBeacon);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    window.setTimeout(flushQueue, 0);
})();
