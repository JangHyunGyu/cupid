(function (root, factory) {
    var api = factory();
    if (root) root.CupidErrorClassifier = api;
    if (typeof module === 'object' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : null), function () {
    'use strict';

    function isExpectedTransientNetworkError(error) {
        var name = String(error && error.name || '');
        var message = String(error && error.message || error || '');
        return name === 'AbortError' || name === 'NetworkError'
            || name === 'TypeError' && /load failed|failed to fetch|network request failed|fetch failed/i.test(message);
    }

    function classify(type, message, stack, source, profile, errorName) {
        var msg = String(message || '');
        var trace = String(stack || '');
        var src = String(source || '');
        var text = [msg, trace, src].join('\n');
        var appStack = /(?:^|\/)assets\/js\/|modules\/|scenario\//i.test(trace + '\n' + src);
        if (profile === 'worker' && type === 'UnhandledRejection'
            && isExpectedTransientNetworkError({ name: errorName, message: msg })) return 'noise';
        if (!msg || msg === 'Script error.' && !trace || /ResizeObserver loop/.test(msg)) return 'noise';
        if (/chrome-extension:|moz-extension:|safari-extension:|safari-web-extension:|webkit-masked-url:\/\/hidden/i.test(text)) return 'external';
        if (/googletagmanager|google-analytics|gtag\/js|cdn\.jsdelivr\.net|wcs\.pstatic\.net\/wcslog\.js|ssl\.pstatic\.net\/melona\/libs\/gfp-nac-module\/synchronizer\.js|static\.cloudflareinsights\.com\/beacon\.min\.js/i.test(text)) return 'external';
        if (type === 'UnhandledRejection') {
            var rejection = msg.replace(/^\[app:UnhandledRejection\]\s*/i, '').trim();
            if (/^[A-Za-z_$][\w$]{0,2}$/.test(rejection) && !/(?:^|\/)assets\/js\//i.test(trace)) return 'external';
            if (!appStack && (/^(\s*@\s*){1,4}$/.test(trace)
                || /^\s*(?:[A-Za-z_$][\w$]*@?\s*){1,4}$/.test(trace) && rejection.length <= 12)) return 'external';
        }
        if (!appStack && (/Can't find variable: (gmo|__gCrWeb|ytcfg|__)/.test(msg)
            || /window\.ethereum|window\.__firefox__|standardSelectors/.test(msg))) return 'noise';
        if (/^undefined:/.test(src) && !appStack) return 'external';
        if (type === 'ResourceError' || /Loading chunk|dynamically imported module|load failed|failed to fetch|network request failed|fetch failed/i.test(msg)) return 'network';
        if (type === 'SecurityPolicyViolation') return 'security';
        return 'app';
    }

    return { classify: classify, isExpectedTransientNetworkError: isExpectedTransientNetworkError };
});
