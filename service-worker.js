// BEGIN GENERATED CUPID ERROR CLASSIFIER
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
        // Injected browser wrappers can use ordinary HTTPS URLs instead of extension URLs.
        if (!appStack && /https?:\/\/[^/\s)]+\.z\d+\.web\.core\.windows\.net\/(?:js\/chrome\.js|assets\/app\.js)(?:[?:\s)]|$)/i.test(trace + '\n' + src)) return 'external';
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
// END GENERATED CUPID ERROR CLASSIFIER

/* iOS < 13.4 compatibility polyfills */
(function () {
  'use strict';
  var root = typeof globalThis !== 'undefined' ? globalThis : (typeof self !== 'undefined' ? self : (typeof window !== 'undefined' ? window : this));
  if (!root || root.__archerIos12CompatApplied) return;
  if (typeof globalThis === 'undefined') {
    try { root.globalThis = root; } catch (_e) {}
  }
  function def(obj, key, val) {
    if (!obj || typeof obj[key] === 'function') return;
    try {
      Object.defineProperty(obj, key, { value: val, writable: true, configurable: true });
    } catch (_e) {
      try { obj[key] = val; } catch (_e2) {}
    }
  }
  def(Object, 'hasOwn', function (obj, prop) {
    if (obj == null) throw new TypeError('Cannot convert undefined or null to object');
    return Object.prototype.hasOwnProperty.call(Object(obj), prop);
  });
  def(Object, 'fromEntries', function (entries) {
    var out = {};
    if (entries == null) throw new TypeError("Object.fromEntries requires an iterable");
    if (typeof Symbol === 'function' && Symbol.iterator && typeof entries[Symbol.iterator] === 'function') {
      var it = entries[Symbol.iterator]();
      var step;
      while (!(step = it.next()).done) {
        var pair = step.value;
        if (!pair || (typeof pair !== 'object' && typeof pair !== 'function')) throw new TypeError('Iterator value is not an entry object');
        out[pair[0]] = pair[1];
      }
      return out;
    }
    for (var i = 0; i < entries.length; i++) {
      out[entries[i][0]] = entries[i][1];
    }
    return out;
  });
  function atHelper(len, n) {
    var i = Number(n);
    i = i !== i ? 0 : (i < 0 ? Math.ceil(i) : Math.floor(i));
    if (i < 0) i += len;
    return (i < 0 || i >= len) ? -1 : i;
  }
  def(Array.prototype, 'at', function (n) {
    if (this == null) throw new TypeError("Array.prototype.at called on null or undefined");
    var list = Object(this);
    var k = atHelper(list.length >>> 0, n);
    return k < 0 ? undefined : list[k];
  });
  def(String.prototype, 'at', function (n) {
    if (this == null) throw new TypeError("String.prototype.at called on null or undefined");
    var s = String(this);
    var k = atHelper(s.length, n);
    return k < 0 ? undefined : s.charAt(k);
  });
  def(Array.prototype, 'findLastIndex', function (predicate, thisArg) {
    if (this == null) throw new TypeError("Array.prototype.findLastIndex called on null or undefined");
    if (typeof predicate !== 'function') throw new TypeError('predicate must be a function');
    var list = Object(this);
    for (var i = (list.length >>> 0) - 1; i >= 0; i--) {
      if (predicate.call(thisArg, list[i], i, list)) return i;
    }
    return -1;
  });
  def(Array.prototype, 'findLast', function (predicate, thisArg) {
    if (this == null) throw new TypeError("Array.prototype.findLast called on null or undefined");
    if (typeof predicate !== 'function') throw new TypeError('predicate must be a function');
    var list = Object(this);
    for (var i = (list.length >>> 0) - 1; i >= 0; i--) {
      if (predicate.call(thisArg, list[i], i, list)) return list[i];
    }
    return undefined;
  });
  def(String.prototype, 'replaceAll', function (search, replacement) {
    if (this == null) throw new TypeError("String.prototype.replaceAll called on null or undefined");
    var str = String(this);
    if (search instanceof RegExp) {
      if (!search.global) throw new TypeError('replaceAll must be called with a global RegExp');
      return str.replace(search, replacement);
    }
    var needle = String(search);
    var isFn = typeof replacement === 'function';
    var repStr = isFn ? null : String(replacement);
    var hasDollar = !isFn && repStr.indexOf("$") !== -1;
    function subst(idx) {
      if (!hasDollar) return repStr;
      var outR = "";
      for (var k = 0; k < repStr.length; k++) {
        if (repStr.charAt(k) === "$" && k + 1 < repStr.length) {
          var ch = repStr.charAt(k + 1);
          if (ch === "$") { outR += "$"; k++; continue; }
          if (ch === "&") { outR += needle; k++; continue; }
          if (ch === "`") { outR += str.slice(0, idx); k++; continue; }
          if (ch === "'") { outR += str.slice(idx + needle.length); k++; continue; }
        }
        outR += repStr.charAt(k);
      }
      return outR;
    }
    var out = "";
    var pos = 0;
    if (needle.length === 0) {
      for (var i = 0; i <= str.length; i++) {
        var piece = isFn ? String(replacement("", i, str)) : subst(i);
        out += piece + (i < str.length ? str.charAt(i) : "");
      }
      return out;
    }
    while (true) {
      var idx = str.indexOf(needle, pos);
      if (idx === -1) return out + str.slice(pos);
      var val = isFn ? String(replacement(needle, idx, str)) : subst(idx);
      out += str.slice(pos, idx) + val;
      pos = idx + needle.length;
    }
  });
  def(String.prototype, 'matchAll', function (regexp) {
    if (this == null) throw new TypeError("String.prototype.matchAll called on null or undefined");
    var str = String(this);
    var re;
    if (regexp instanceof RegExp) {
      if (!regexp.global) throw new TypeError('matchAll must be called with a global RegExp');
      re = new RegExp(regexp.source, regexp.flags);
      re.lastIndex = regexp.lastIndex;
    } else {
      re = new RegExp(regexp, 'g');
    }
    var iter = {
      next: function () {
        var m = re.exec(str);
        if (!m) return { value: undefined, done: true };
        if (m[0] === '') re.lastIndex = re.lastIndex + 1;
        return { value: m, done: false };
      }
    };
    if (typeof Symbol === 'function' && Symbol.iterator) {
      iter[Symbol.iterator] = function () { return this; };
    }
    return iter;
  });
  if (typeof Promise === 'function') {
    def(Promise, 'allSettled', function (promises) {
      var list = Array.from(promises);
      if (!list.length) return Promise.resolve([]);
      return new Promise(function (resolve) {
        var results = new Array(list.length);
        var remaining = list.length;
        function done(i, item) {
          results[i] = item;
          remaining -= 1;
          if (remaining === 0) resolve(results);
        }
        for (var i = 0; i < list.length; i++) {
          (function (idx) {
            Promise.resolve(list[idx]).then(
              function (value) { done(idx, { status: 'fulfilled', value: value }); },
              function (reason) { done(idx, { status: 'rejected', reason: reason }); }
            );
          })(i);
        }
      });
    });
    def(Promise, 'any', function (promises) {
      var list = Array.from(promises);
      return new Promise(function (resolve, reject) {
        if (!list.length) {
          var emptyErr = new Error('All promises were rejected');
          emptyErr.name = 'AggregateError'; emptyErr.errors = [];
          reject(emptyErr); return;
        }
        var errors = new Array(list.length);
        var remaining = list.length;
        for (var i = 0; i < list.length; i++) {
          (function (idx) {
            Promise.resolve(list[idx]).then(resolve, function (err) {
              errors[idx] = err;
              remaining -= 1;
              if (remaining === 0) {
                var agg = new Error('All promises were rejected');
                agg.name = 'AggregateError'; agg.errors = errors;
                reject(agg);
              }
            });
          })(i);
        }
      });
    });
  }
  if (typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout !== 'function' && typeof AbortController === 'function') {
    def(AbortSignal, 'timeout', function (ms) {
      var controller = new AbortController();
      setTimeout(function () {
        try {
          controller.abort(typeof DOMException === 'function' ? new DOMException('The operation was aborted due to timeout', 'TimeoutError') : undefined);
        } catch (_e) {
          controller.abort();
        }
      }, Number(ms) || 0);
      return controller.signal;
    });
  }
  if (typeof root.crypto !== 'undefined' && typeof root.crypto.randomUUID !== 'function' && typeof root.crypto.getRandomValues === 'function') {
    def(root.crypto, 'randomUUID', function () {
      var b = new Uint8Array(16);
      root.crypto.getRandomValues(b);
      b[6] = (b[6] & 0x0f) | 0x40;
      b[8] = (b[8] & 0x3f) | 0x80;
      var hex = [];
      for (var i = 0; i < 16; i++) {
        hex.push((b[i] < 16 ? '0' : '') + b[i].toString(16));
      }
      return hex.slice(0, 4).join('') + '-' + hex.slice(4, 6).join('') + '-' + hex.slice(6, 8).join('') + '-' + hex.slice(8, 10).join('') + '-' + hex.slice(10, 16).join('');
    });
  }
  try { root.__archerIos12CompatApplied = true; } catch (_e) {}
})();

/**
 * ============================================================================
 * Cupid - Service Worker (성능 최적화 캐시 버전)
 * ============================================================================
 *
 * 캐시 전략:
 *   - 이미지/오디오: Cache-first (캐시 우선, 없으면 네트워크)
 *   - CSS/JS: Network-first (버전 쿼리 최신 우선, 실패 시 캐시 fallback)
 *   - HTML/API: Network-first (네트워크 우선, 실패 시 캐시)
 *
 * 저사양 기기와 느린 인터넷에서 빠른 로딩을 위해 정적 에셋을 적극 캐시합니다.
 * ============================================================================
 */

const CACHE_VERSION = 'cupid-v3.3.312';
const STATIC_CACHE = CACHE_VERSION + '-static';
const MEDIA_CACHE = CACHE_VERSION + '-media';
// Protected images carry their own content hash. App-only releases retain them.
const PROTECTED_MEDIA_CACHE = 'cupid-protected-media-v2';
const mediaInFlight = new Map();

const ERROR_LOG_ENDPOINT = 'https://chatbot-api.yama5993.workers.dev/error-logs';
const ERROR_DEDUPE_TTL_MS = 30000;
const recentServiceWorkerErrors = new Map();
const SERVICE_WORKER_REPORT_NONCE = (() => {
    try {
        if (typeof ((crypto === null || crypto === void 0 ? void 0 : crypto.randomUUID)) === 'function') return crypto.randomUUID();
    } catch (_) {}
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
})();
let serviceWorkerReportSequence = 0;

function stableErrorHash(value) {
    let hash = 2166136261;
    const text = String(value || '');
    for (let index = 0; index < text.length; index++) {
        hash ^= text.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(36);
}

function createServiceWorkerErrorId(signature, occurredAtMs) {
    // A report ID identifies one event, not one global signature/time bucket.
    // The serialized request body keeps this ID stable if fetch is retried,
    // while the UUID/session nonce prevents unrelated users from colliding.
    try {
        if (typeof ((crypto === null || crypto === void 0 ? void 0 : crypto.randomUUID)) === 'function') return `cupid-sw-${crypto.randomUUID()}`;
    } catch (_) {}
    serviceWorkerReportSequence += 1;
    return `cupid-sw-${SERVICE_WORKER_REPORT_NONCE}-${serviceWorkerReportSequence.toString(36)}-${stableErrorHash(`${signature}|${occurredAtMs}`)}`;
}

function shouldSuppressRecentServiceWorkerError(signature, occurredAtMs) {
    const previous = recentServiceWorkerErrors.get(signature);
    if (Number.isFinite(previous) && occurredAtMs - previous < ERROR_DEDUPE_TTL_MS) return true;
    recentServiceWorkerErrors.set(signature, occurredAtMs);
    if (recentServiceWorkerErrors.size > 50) {
        for (const [key, timestamp] of recentServiceWorkerErrors) {
            if (occurredAtMs - timestamp >= ERROR_DEDUPE_TTL_MS) recentServiceWorkerErrors.delete(key);
        }
    }
    return false;
}

function reportServiceWorkerError(type, error) { var __oc0;
    try {
        const message = ((error === null || error === void 0 ? void 0 : error.message)) || String(error || 'Unknown service worker error');
        const normalizedType = String(type || 'ServiceWorkerError');
        const classification = self.CupidErrorClassifier.classify(normalizedType, message, ((error === null || error === void 0 ? void 0 : error.stack)) || '', self.location.href, 'worker', ((error === null || error === void 0 ? void 0 : error.name)));
        if (classification === 'external' || classification === 'noise') return Promise.resolve();
        const signature = `${normalizedType}|${message}`;
        const occurredAtMs = Date.now();
        if (shouldSuppressRecentServiceWorkerError(signature, occurredAtMs)) return Promise.resolve();
        const eventId = createServiceWorkerErrorId(signature, occurredAtMs);
        return fetch(ERROR_LOG_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
            body: JSON.stringify({
                appId: 'cupid-service-worker',
                userId: '',
                message: `[${classification}:${normalizedType}] ${message}`.slice(0, 500),
                stack: String(((error === null || error === void 0 ? void 0 : error.stack)) || '').slice(0, 4000),
                url: self.location.href.slice(0, 500),
                source: 'service-worker.js',
                errorType: normalizedType,
                errorClass: classification,
                errorName: ((error === null || error === void 0 ? void 0 : error.name)) || 'Error',
                sessionId: '',
                context: { cacheVersion: CACHE_VERSION, scope: (((__oc0 = self.registration) === null || __oc0 === void 0 ? void 0 : __oc0.scope)) || '' },
                reportId: eventId,
                extra: { eventId, occurredAt: new Date(occurredAtMs).toISOString() }
            }),
            // keepalive는 쓰지 않습니다. 진행 중인 keepalive 본문이 64KB를 넘으면 브라우저가 요청을 거절합니다.
            credentials: 'omit',
            cache: 'no-store'
        }).then(response => response.text()).catch(() => {});
    } catch (_) {
        return Promise.resolve();
    }
}

self.addEventListener('error', event => { var __oc1;
    reportServiceWorkerError((((__oc1 = event.error) === null || __oc1 === void 0 ? void 0 : __oc1.name)) || 'ServiceWorkerError', event.error || event.message);
});

self.addEventListener('unhandledrejection', event => { var __oc2;
    if (isExpectedTransientNetworkError(event.reason)) {
        // Safari reports interrupted response streams as an unhandled
        // "TypeError: Load failed" even when the fetch strategy has already
        // returned an offline response. This is expected network noise.
        (((__oc2 = event.preventDefault) === null || __oc2 === void 0 ? void 0 : __oc2.call(event)));
        return;
    }
    reportServiceWorkerError('UnhandledRejection', event.reason);
});

function isExpectedTransientNetworkError(error) {
    return self.CupidErrorClassifier.isExpectedTransientNetworkError(error);
}

// 설치 시 핵심 에셋 프리캐시
const PRECACHE_URLS = [];

// ============================================================================
// Install - 핵심 에셋 프리캐시
// ============================================================================
self.addEventListener('install', (event) => {
    console.log('[SW] 설치 (캐시 최적화 모드)');
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => PRECACHE_URLS.length ? cache.addAll(PRECACHE_URLS) : undefined)
            .catch(() => {})
            .then(() => self.skipWaiting())
    );
});

// ============================================================================
// Activate - 이전 버전 캐시 삭제
// ============================================================================
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .catch(() => [])
            .then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(name => name !== STATIC_CACHE && name !== MEDIA_CACHE && name !== PROTECTED_MEDIA_CACHE)
                        .map(name => {
                            console.log('[SW] 구버전 캐시 삭제:', name);
                            return caches.delete(name).catch(() => false);
                        })
                );
            })
            .then(() => {
                console.log('[SW] 캐시 정리 완료');
                return self.clients.claim();
            })
    );
});

// ============================================================================
// Fetch - 에셋 유형별 최적 캐시 전략 적용
// ============================================================================
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);

    // 외부 요청(API, CDN 등)은 네트워크 직행
    if (url.origin !== location.origin) {
        return;
    }

    const path = url.pathname;

    // 복호화된 캐릭터/CG. 주소에 버전이 들어 있어 캐시 우선으로 정적 이미지와 같게 재사용한다.
    if (path === '/api/media') {
        event.respondWith(protectedMedia(event));
        return;
    }

    if (path.startsWith('/api/')) {
        // Session and unlock responses must never be persisted by generic HTML caching.
        event.respondWith(fetch(event.request));
        return;
    }

    // 이미지/오디오: Cache-first (가장 큰 에셋, 캐시 효과 극대화)
    if (/\.(png|jpg|jpeg|webp|gif|svg|mp3|ogg|wav)$/i.test(path)) {
        const isAudioRecovery = /\.(mp3|ogg|wav)$/i.test(path)
            && url.searchParams.has('audio-recovery');
        event.respondWith(
            isAudioRecovery
                ? refreshMediaFromNetwork(event.request, MEDIA_CACHE)
                : cacheFirst(event.request, MEDIA_CACHE)
        );
        return;
    }

    // CSS/JS: Network-first. Versioned URLs stay fresh, cached copies cover transient network failures.
    if (/\.(css|js)$/i.test(path)) {
        event.respondWith(networkFirstAsset(event.request, STATIC_CACHE));
        return;
    }

    // HTML/기타: Network-first (항상 최신 버전)
    event.respondWith(networkFirst(event.request, STATIC_CACHE));
});

// ============================================================================
// 캐시 전략 함수들
// ============================================================================

/**
 * Cache-first: 캐시에 있으면 즉시 반환, 없으면 네트워크 → 캐시 저장
 * 이미지/오디오 등 변경이 드문 대용량 에셋에 적합
 */
async function cacheFirst(request, cacheName) {
    const cacheRequest = normalizeAssetCacheRequest(request);
    const cached = await matchCacheSafely(cacheRequest);
    if (cached) return cached;

    try {
        const response = await fetch(request);
        if (response.ok) {
            await cacheResponseSafely(cacheName, cacheRequest, response);
        }
        return response;
    } catch (e) {
        return new Response('Offline', { status: 503 });
    }
}

async function protectedMedia(event) {
    const request = event.request;
    const url = new URL(request.url);
    const version = url.searchParams.get('v');
    if (!/^[a-f0-9]{24}$/.test(version || '')) return fetch(request);
    const cache = await caches.open(PROTECTED_MEDIA_CACHE).catch(() => null);
    const cached = await ((cache === null || cache === void 0 ? void 0 : cache.match(request).catch(() => null)));
    if (cached) return cached;
    const key = request.url;
    let pending = mediaInFlight.get(key);
    if (!pending) {
        pending = fetch(request);
        mediaInFlight.set(key, pending);
        event.waitUntil(pending.then(async response => {
            if (!cache || !response.ok || response.headers.get('x-cupid-media-version') !== version) return;
            await cache.put(request, response.clone());
            // Bound disk usage on mobile. Writes never block the visible image.
            const keys = await cache.keys();
            await Promise.all(keys.slice(0, Math.max(0, keys.length - 64)).map(old => cache.delete(old)));
        }).catch(() => {}).finally(() => mediaInFlight.delete(key)));
    }
    return (await pending).clone();
}

async function refreshMediaFromNetwork(request, cacheName) {
    const cacheRequest = normalizeAssetCacheRequest(request);
    try {
        const response = await fetch(new Request(request, { cache: 'reload' }));
        if (response.ok) {
            await cacheResponseSafely(cacheName, cacheRequest, response);
        }
        return response;
    } catch (_) {
        const cached = await matchCacheSafely(cacheRequest);
        if (cached) return cached;
        return new Response('Offline', { status: 503 });
    }
}

/**
 * Network-only: 항상 네트워크에서 직접 로드 (캐시 사용 안 함)
 * 소스코드(CSS/JS) 수정 사항을 즉시 반영하기 위해 사용
 */
async function networkOnly(request) {
    try {
        return await fetch(request);
    } catch (e) {
        return new Response('Offline', { status: 503 });
    }
}

function normalizeAssetCacheRequest(request) {
    try {
        const url = new URL(request.url);
        if (!url.searchParams.has('retry') && !url.searchParams.has('audio-recovery')) return request;
        url.searchParams.delete('retry');
        url.searchParams.delete('audio-recovery');
        return new Request(url.toString(), request);
    } catch (_) {
        return request;
    }
}

async function matchCacheSafely(request) {
    try {
        return await caches.match(request);
    } catch (_) {
        return undefined;
    }
}

async function isWrappedCiphertext(response) { var __oc3;
    if (!(((__oc3 = response === null || response === void 0 ? void 0 : response.body) === null || __oc3 === void 0 ? void 0 : __oc3.getReader))) return false;
    const reader = response.clone().body.getReader();
    try {
        const { value } = await reader.read();
        if (!value || value.length < 9) return false;
        const expected = [67, 85, 80, 73, 68, 69, 78, 67, 49];
        for (let i = 0; i < expected.length; i++) {
            if (value[i] !== expected[i]) return false;
        }
        return true;
    } catch (_) {
        return false;
    } finally {
        try { await reader.cancel(); } catch (_) {}
    }
}

async function cacheResponseSafely(cacheName, request, response) {
    try {
        const requestUrl = new URL(request.url);
        if (/\.(png|jpe?g|webp|gif)$/i.test(requestUrl.pathname) && await isWrappedCiphertext(response)) {
            return false;
        }
        const copy = response.clone();
        // Cache writes consume a cloned response stream. Safari rejects this
        // promise with "Load failed" when that stream is interrupted, so the
        // best-effort write must always own its rejection handler.
        const cache = await caches.open(cacheName);
        await cache.put(request, copy);
        return true;
    } catch (_) {
        // A failed clone/cache must never fail the user-facing response.
        return false;
    }
}

async function networkFirstAsset(request, cacheName) {
    const cacheRequest = normalizeAssetCacheRequest(request);
    try {
        const response = await fetch(request);
        if (response.ok) {
            await cacheResponseSafely(cacheName, cacheRequest, response);
            return response;
        }
        const cached = await matchCacheSafely(cacheRequest);
        if (cached) return cached;
        return response;
    } catch (e) {
        const cached = await matchCacheSafely(cacheRequest);
        if (cached) return cached;
        return new Response('Offline', { status: 503 });
    }
}

/**
 * Network-first: 네트워크 우선, 실패 시 캐시 fallback
 * HTML 등 항상 최신이어야 하는 리소스에 적합
 */
async function networkFirst(request, cacheName) { var __oc4, __oc5;
    try {
        const response = await fetch(request);
        if (response.ok) {
            await cacheResponseSafely(cacheName, request, response);
        }
        return response;
    } catch (e) {
        const cached = await matchCacheSafely(request);
        if (cached) return cached;

        if (request.mode === 'navigate') {
            const requestUrl = new URL(request.url);
            const acceptLanguage = request.headers.get('Accept-Language') || '';
            const pathLangMatch = requestUrl.pathname.match(/\/(?:index|game|gallery)-(en|es|ja|fr|de|pt|zh)(?:\.html)?$/i);
            const preferredLang = (((__oc4 = String(acceptLanguage).toLowerCase().match(/^[a-z]{2}/)) === null || __oc4 === void 0 ? void 0 : __oc4[0])) || 'ko';
            const pageLang = (((__oc5 = pathLangMatch === null || pathLangMatch === void 0 ? void 0 : pathLangMatch[1]) === null || __oc5 === void 0 ? void 0 : __oc5.toLowerCase()))
                || (['ko', 'en', 'es', 'ja', 'fr', 'de', 'pt', 'zh'].includes(preferredLang) ? preferredLang : 'ko');
            const offlineCopies = {
                ko: { title: '오프라인', message: '인터넷 연결을 확인해 주세요.' },
                en: { title: 'Offline', message: 'Check your internet connection.' },
                es: { title: 'Sin conexión', message: 'Revisa tu conexión a internet.' },
                ja: { title: 'オフライン', message: 'インターネット接続を確認してください。' },
                fr: { title: 'Hors connexion', message: 'Vérifiez votre connexion internet.' },
                de: { title: 'Offline', message: 'Überprüfe deine Internetverbindung.' },
                pt: { title: 'Sem conexão', message: 'Verifique sua conexão com a internet.' },
                zh: { title: '离线', message: '请检查网络连接。' }
            };
            const copy = offlineCopies[pageLang] || offlineCopies.en;
            const offlineHtml = `<html lang="${pageLang === 'zh' ? 'zh-CN' : pageLang}"><body style="background:#000;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif"><div style="text-align:center"><h1>${copy.title}</h1><p>${copy.message}</p></div></body></html>`;
            return new Response(
                offlineHtml,
                { status: 503, headers: { 'Content-Type': 'text/html; charset=UTF-8' } }
            );
        }
        return new Response('Offline', { status: 503 });
    }
}
