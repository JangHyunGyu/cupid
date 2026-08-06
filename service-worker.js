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

const CACHE_VERSION = 'cupid-v3.3.74';
const STATIC_CACHE = CACHE_VERSION + '-static';
const MEDIA_CACHE = CACHE_VERSION + '-media';

const ERROR_LOG_ENDPOINT = 'https://chatbot-api.yama5993.workers.dev/error-logs';
const ERROR_DEDUPE_TTL_MS = 30000;
const recentServiceWorkerErrors = new Map();
const SERVICE_WORKER_REPORT_NONCE = (() => {
    try {
        if (typeof crypto?.randomUUID === 'function') return crypto.randomUUID();
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
        if (typeof crypto?.randomUUID === 'function') return `cupid-sw-${crypto.randomUUID()}`;
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

function reportServiceWorkerError(type, error) {
    try {
        const message = error?.message || String(error || 'Unknown service worker error');
        const normalizedType = String(type || 'ServiceWorkerError');
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
                message: `[app:${normalizedType}] ${message}`.slice(0, 500),
                stack: String(error?.stack || '').slice(0, 4000),
                url: self.location.href.slice(0, 500),
                source: 'service-worker.js',
                errorType: normalizedType,
                errorClass: error?.name || 'Error',
                sessionId: '',
                context: { cacheVersion: CACHE_VERSION, scope: self.registration?.scope || '' },
                reportId: eventId,
                extra: { eventId, occurredAt: new Date(occurredAtMs).toISOString() }
            }),
            keepalive: true
        }).catch(() => {});
    } catch (_) {
        return Promise.resolve();
    }
}

self.addEventListener('error', event => {
    reportServiceWorkerError(event.error?.name || 'ServiceWorkerError', event.error || event.message);
});

self.addEventListener('unhandledrejection', event => {
    if (isExpectedTransientNetworkError(event.reason)) {
        // Safari reports interrupted response streams as an unhandled
        // "TypeError: Load failed" even when the fetch strategy has already
        // returned an offline response. This is expected network noise.
        event.preventDefault?.();
        return;
    }
    reportServiceWorkerError('UnhandledRejection', event.reason);
});

function isExpectedTransientNetworkError(error) {
    const name = String(error?.name || '');
    const message = String(error?.message || error || '');
    if (name === 'AbortError' || name === 'NetworkError') return true;
    return name === 'TypeError'
        && /load failed|failed to fetch|network request failed|fetch failed/i.test(message);
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
                        .filter(name => name !== STATIC_CACHE && name !== MEDIA_CACHE)
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
    const url = new URL(event.request.url);

    // 외부 요청(API, CDN 등)은 네트워크 직행
    if (url.origin !== location.origin) {
        return;
    }

    const path = url.pathname;

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

async function cacheResponseSafely(cacheName, request, response) {
    try {
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
async function networkFirst(request, cacheName) {
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
            const pathLangMatch = requestUrl.pathname.match(/\/(?:index|game|gallery)-(en|es|ja|fr|de|pt)(?:\.html)?$/i);
            const preferredLang = String(acceptLanguage).toLowerCase().match(/^[a-z]{2}/)?.[0] || 'ko';
            const pageLang = pathLangMatch?.[1]?.toLowerCase()
                || (['ko', 'en', 'es', 'ja', 'fr', 'de', 'pt'].includes(preferredLang) ? preferredLang : 'ko');
            const offlineCopies = {
                ko: { title: '오프라인', message: '인터넷 연결을 확인해 주세요.' },
                en: { title: 'Offline', message: 'Check your internet connection.' },
                es: { title: 'Sin conexión', message: 'Revisa tu conexión a internet.' },
                ja: { title: 'オフライン', message: 'インターネット接続を確認してください。' },
                fr: { title: 'Hors connexion', message: 'Vérifiez votre connexion internet.' },
                de: { title: 'Offline', message: 'Überprüfe deine Internetverbindung.' },
                pt: { title: 'Sem conexão', message: 'Verifique sua conexão com a internet.' }
            };
            const copy = offlineCopies[pageLang] || offlineCopies.en;
            const offlineHtml = `<html lang="${pageLang}"><body style="background:#000;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif"><div style="text-align:center"><h1>${copy.title}</h1><p>${copy.message}</p></div></body></html>`;
            return new Response(
                offlineHtml,
                { status: 503, headers: { 'Content-Type': 'text/html; charset=UTF-8' } }
            );
        }
        return new Response('Offline', { status: 503 });
    }
}
