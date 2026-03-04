/**
 * ============================================================================
 * Cupid - Service Worker (성능 최적화 캐시 버전)
 * ============================================================================
 *
 * 캐시 전략:
 *   - 이미지/오디오: Cache-first (캐시 우선, 없으면 네트워크)
 *   - CSS/JS: Stale-while-revalidate (캐시 즉시 반환 + 백그라운드 갱신)
 *   - HTML/API: Network-first (네트워크 우선, 실패 시 캐시)
 *
 * 저사양 기기와 느린 인터넷에서 빠른 로딩을 위해 정적 에셋을 적극 캐시합니다.
 * ============================================================================
 */

const CACHE_VERSION = 'cupid-v3.0.0';
const STATIC_CACHE = CACHE_VERSION + '-static';
const MEDIA_CACHE = CACHE_VERSION + '-media';

// 설치 시 핵심 에셋 프리캐시
const PRECACHE_URLS = [
    'assets/css/style.css',
    'assets/js/sound.js',
    'assets/js/loaders/game-loader.js',
];

// ============================================================================
// Install - 핵심 에셋 프리캐시
// ============================================================================
self.addEventListener('install', (event) => {
    console.log('[SW] 설치 (캐시 최적화 모드)');
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => cache.addAll(PRECACHE_URLS))
            .then(() => self.skipWaiting())
    );
});

// ============================================================================
// Activate - 이전 버전 캐시 삭제
// ============================================================================
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(name => name !== STATIC_CACHE && name !== MEDIA_CACHE)
                        .map(name => {
                            console.log('[SW] 구버전 캐시 삭제:', name);
                            return caches.delete(name);
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
        event.respondWith(cacheFirst(event.request, MEDIA_CACHE));
        return;
    }

    // CSS/JS: Stale-while-revalidate (빠른 응답 + 백그라운드 갱신)
    if (/\.(css|js)$/i.test(path)) {
        event.respondWith(staleWhileRevalidate(event.request, STATIC_CACHE));
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
    const cached = await caches.match(request);
    if (cached) return cached;

    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(cacheName);
            cache.put(request, response.clone());
        }
        return response;
    } catch (e) {
        return new Response('Offline', { status: 503 });
    }
}

/**
 * Stale-while-revalidate: 캐시 즉시 반환 + 백그라운드에서 네트워크 갱신
 * CSS/JS 등 빠른 응답이 중요하면서도 갱신이 필요한 에셋에 적합
 */
async function staleWhileRevalidate(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);

    const fetchPromise = fetch(request).then(response => {
        if (response.ok) {
            cache.put(request, response.clone());
        }
        return response;
    }).catch(() => null);

    return cached || await fetchPromise || new Response('Offline', { status: 503 });
}

/**
 * Network-first: 네트워크 우선, 실패 시 캐시 fallback
 * HTML 등 항상 최신이어야 하는 리소스에 적합
 */
async function networkFirst(request, cacheName) {
    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(cacheName);
            cache.put(request, response.clone());
        }
        return response;
    } catch (e) {
        const cached = await caches.match(request);
        if (cached) return cached;

        if (request.mode === 'navigate') {
            return new Response(
                '<html><body style="background:#000;color:#fff;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif"><div style="text-align:center"><h1>Offline</h1><p>인터넷 연결을 확인해주세요.</p></div></body></html>',
                { status: 503, headers: { 'Content-Type': 'text/html' } }
            );
        }
        return new Response('Offline', { status: 503 });
    }
}
