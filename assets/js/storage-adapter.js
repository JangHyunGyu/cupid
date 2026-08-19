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

    return Object.freeze(adapter);
});
