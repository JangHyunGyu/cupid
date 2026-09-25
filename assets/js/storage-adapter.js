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
    var nativeStorage = null;
    var nativeChecked = false;

    function resolveStorage() {
        if (nativeChecked) return nativeStorage;
        nativeChecked = true;
        try {
            var candidate = typeof resolveNativeStorage === 'function' ? resolveNativeStorage() : null;
            if (candidate && typeof candidate.getItem === 'function' && typeof candidate.setItem === 'function') {
                candidate.getItem('__cupid_storage_probe__');
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
            return { ok: true, value: operation(storage) };
        } catch (_) {
            nativeStorage = null;
            return { ok: false };
        }
    }

    var adapter = {
        getItem: function (key) {
            var normalizedKey = String(key);
            var result = useNative(function (storage) { return storage.getItem(normalizedKey); });
            if (result.ok) return result.value;
            return memory.has(normalizedKey) ? memory.get(normalizedKey) : null;
        },
        setItem: function (key, value) {
            var normalizedKey = String(key);
            var normalizedValue = String(value);
            var result = useNative(function (storage) { storage.setItem(normalizedKey, normalizedValue); });
            if (!result.ok) memory.set(normalizedKey, normalizedValue);
            writeSharedCookie(normalizedKey, normalizedValue);
        },
        removeItem: function (key) {
            var normalizedKey = String(key);
            var result = useNative(function (storage) { storage.removeItem(normalizedKey); });
            memory.delete(normalizedKey);
            return result.value;
        },
        clear: function () {
            var result = useNative(function (storage) { storage.clear(); });
            memory.clear();
            return result.value;
        },
        key: function (index) {
            var result = useNative(function (storage) { return storage.key(index); });
            if (result.ok) return result.value;
            return Array.from(memory.keys())[Number(index)] || null;
        }
    };

    Object.defineProperty(adapter, 'length', {
        enumerable: true,
        get: function () {
            var result = useNative(function (storage) { return storage.length; });
            return result.ok ? result.value : memory.size;
        }
    });

    var SHARED_CUPID_KEYS = ['cupid_cycle_01', 'cupid_heroine', 'cupid_subject_compliance'];

    function pageGlobal() {
        return typeof window !== 'undefined' ? window : null;
    }

    function writeSharedCookie(key, value) {
        if (SHARED_CUPID_KEYS.indexOf(key) === -1) return;
        var page = pageGlobal();
        if (!page || !page.document || !page.location) return;
        var host = page.location.hostname || '';
        var domain = (host === 'archerlab.dev' || host.slice(-15) === '.archerlab.dev') ? '; Domain=.archerlab.dev' : '';
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
