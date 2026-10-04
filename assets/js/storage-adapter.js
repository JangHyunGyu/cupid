/* Prevent visualViewport scroll handlers from fighting streaming auto-scroll (화면 떨림). */
(function () {
  if (typeof window === 'undefined') return;
  var vv = window.visualViewport;
  if (!vv || vv.__archerScrollGuard) return;
  vv.__archerScrollGuard = true;
  var orig = vv.addEventListener.bind(vv);
  vv.addEventListener = function (type, listener, options) {
    if (type === 'scroll') return;
    return orig(type, listener, options);
  };
})();

(function installCupidStorage(root, createCupidStorageAdapter) {
    'use strict';

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = createCupidStorageAdapter;
    }
    if (root) {
        root.CupidStorage = createCupidStorageAdapter(function () {
            return root.localStorage;
        });
    }
})(typeof window !== 'undefined' ? window : null, function createCupidStorageAdapter(resolveNativeStorage) {
    'use strict';

    var memory = new Map();
    var pending = new Map();
    var knownNative = new Map();
    var pendingClear = false;
    var nativeStorage = null;
    var nativeChecked = false;

    function resolveStorage() {
        if (nativeChecked && nativeStorage) return nativeStorage;
        nativeChecked = true;
        try {
            var candidate = typeof resolveNativeStorage === 'function' ? resolveNativeStorage() : null;
            if (candidate && typeof candidate.getItem === 'function' && typeof candidate.setItem === 'function') {
                nativeStorage = candidate;
            }
        } catch (_) {
            nativeStorage = null;
        }
        return nativeStorage;
    }

    function useNative(operation) {
        var storage = resolveStorage();
        if (!storage) return { ok: false };
        try {
            if (pendingClear) {
                storage.clear();
                pendingClear = false;
            }
            return { ok: true, value: operation(storage) };
        } catch (_) {
            return { ok: false };
        }
    }

    var adapter = {
        getItem: function (key) {
            var normalizedKey = String(key);
            if (pending.has(normalizedKey)) {
                var flushed = useNative(function (storage) {
                    var latest = storage.getItem(normalizedKey);
                    if (latest !== pending.get(normalizedKey)) return { superseded: true, value: latest };
                    if (memory.has(normalizedKey)) storage.setItem(normalizedKey, memory.get(normalizedKey));
                    else storage.removeItem(normalizedKey);
                    return { superseded: false };
                });
                if (!flushed.ok) return memory.has(normalizedKey) ? memory.get(normalizedKey) : null;
                pending.delete(normalizedKey);
                if (flushed.value.superseded) {
                    if (flushed.value.value === null) memory.delete(normalizedKey);
                    else memory.set(normalizedKey, flushed.value.value);
                }
            }
            var result = useNative(function (storage) { return storage.getItem(normalizedKey); });
            if (result.ok) {
                knownNative.set(normalizedKey, result.value);
                if (result.value === null) memory.delete(normalizedKey);
                else memory.set(normalizedKey, result.value);
                return result.value;
            }
            return memory.has(normalizedKey) ? memory.get(normalizedKey) : null;
        },
        setItem: function (key, value) {
            var normalizedKey = String(key);
            var normalizedValue = String(value);
            memory.set(normalizedKey, normalizedValue);
            var result = useNative(function (storage) { storage.setItem(normalizedKey, normalizedValue); });
            if (result.ok) {
                pending.delete(normalizedKey);
                knownNative.set(normalizedKey, normalizedValue);
            } else rememberPending(normalizedKey);
            writeSharedCookie(normalizedKey, normalizedValue);
        },
        removeItem: function (key) {
            var normalizedKey = String(key);
            var result = useNative(function (storage) { storage.removeItem(normalizedKey); });
            memory.delete(normalizedKey);
            if (result.ok) {
                pending.delete(normalizedKey);
                knownNative.set(normalizedKey, null);
            } else rememberPending(normalizedKey);
            return result.value;
        },
        clear: function () {
            var result = useNative(function (storage) { storage.clear(); });
            memory.clear();
            pending.clear();
            knownNative.clear();
            pendingClear = !result.ok;
            return result.value;
        },
        key: function (index) {
            return keys()[Number(index)] || null;
        }
    };

    Object.defineProperty(adapter, 'length', {
        enumerable: true,
        get: function () {
            return keys().length;
        }
    });

    function keys() {
        var result = useNative(function (storage) {
            var names = new Set();
            for (var i = 0; i < storage.length; i++) {
                var name = storage.key(i);
                if (name !== null && (!pending.has(name) || memory.has(name))) names.add(name);
            }
            pending.forEach(function (_, name) { if (memory.has(name)) names.add(name); });
            return Array.from(names);
        });
        return result.ok ? result.value : Array.from(memory.keys());
    }

    function rememberPending(key) {
        if (pending.has(key)) return;
        // Retry only while the native value still belongs to this write.
        // A newer tab's progress must win when storage becomes available again.
        var result = useNative(function (storage) { return storage.getItem(key); });
        if (result.ok) knownNative.set(key, result.value);
        pending.set(key, knownNative.has(key) ? knownNative.get(key) : null);
    }

    var SHARED_CUPID_KEYS = ['cupid_cycle_01', 'cupid_heroine', 'cupid_subject_compliance'];

    function pageGlobal() {
        return typeof window !== 'undefined' ? window : null;
    }

    function writeSharedCookie(key, value) {
        if (SHARED_CUPID_KEYS.indexOf(key) === -1) return;
        var page = pageGlobal();
        if (!page || !page.document || !page.location) return;
        var host = page.location.hostname || '';
        var domain = (host === 'archerlab.dev' || host.endsWith('.archerlab.dev')) ? '; Domain=.archerlab.dev' : '';
        var secure = page.location.protocol === 'https:' ? '; Secure' : '';
        try {
            page.document.cookie = key + '=' + encodeURIComponent(value) + '; Path=/; Max-Age=31536000; SameSite=Lax' + domain + secure;
        } catch (_) {}
    }

    SHARED_CUPID_KEYS.forEach(function (key) {
        var existing = adapter.getItem(key);
        if (existing) writeSharedCookie(key, existing);
    });

    return Object.freeze(adapter);
});
