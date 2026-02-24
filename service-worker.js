/**
 * ============================================================================
 * Cupid - Service Worker
 * ============================================================================
 * 
 * 캐시 전략:
 *   - 앱 셸(HTML, CSS, JS): Cache First → 빠른 로딩, 버전 변경 시 자동 갱신
 *   - 이미지/오디오: Cache First → 큰 에셋은 캐시 우선
 *   - API 요청(프리토킹): Network Only → AI 응답은 항상 실시간
 *   - 외부 CDN: Stale While Revalidate → 캐시 제공 + 백그라운드 갱신
 * 
 * 버전 관리:
 *   CACHE_VERSION을 변경하면 기존 캐시가 삭제되고 새로 캐시됩니다.
 *   version.json의 버전과 맞춰 관리하세요.
 * 
 * ============================================================================
 */

const CACHE_VERSION = '1.2.4';
const CACHE_NAME = `cupid-v${CACHE_VERSION}`;

// ============================================================================
// 프리캐시 목록 (앱 셸 - 오프라인에서도 반드시 필요한 핵심 파일)
// ============================================================================
const PRECACHE_URLS = [
    // HTML
    '/',
    '/index.html',
    '/index-en.html',
    '/index-es.html',
    '/index-ja.html',
    '/index-fr.html',
    '/game.html',
    '/game-en.html',
    '/game-es.html',
    '/game-ja.html',
    '/game-fr.html',
    '/gallery.html',
    '/gallery-en.html',
    '/gallery-es.html',
    '/gallery-ja.html',
    '/gallery-fr.html',

    // CSS
    '/assets/css/style.css',
    '/assets/css/gallery.css',

    // Core JS (로더가 나머지를 동적 로드)
    '/assets/js/browser-check.js',
    '/assets/js/loaders/game-loader.js',
    '/assets/js/loaders/gallery-loader.js',
    '/assets/js/loaders/config.js',

    // 매니페스트 & 아이콘
    '/manifest.json',
    '/manifest-en.json',
    '/manifest-es.json',
    '/manifest-ja.json',
    '/manifest-fr.json',
    '/favicon.ico',
    '/version.json'
];

// API 요청은 절대 캐시하지 않을 도메인
const NO_CACHE_DOMAINS = [
    'chatbot-api.yama5993.workers.dev',
    'www.googletagmanager.com',
    'www.google-analytics.com'
];

// ============================================================================
// Install - 프리캐시
// ============================================================================
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] 프리캐시 시작:', CACHE_NAME);
                return cache.addAll(PRECACHE_URLS);
            })
            .then(() => {
                // 설치 즉시 활성화 (대기 건너뛰기)
                return self.skipWaiting();
            })
            .catch((err) => {
                console.error('[SW] 프리캐시 실패:', err);
            })
    );
});

// ============================================================================
// Activate - 이전 버전 캐시 정리
// ============================================================================
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((name) => name.startsWith('cupid-') && name !== CACHE_NAME)
                        .map((name) => {
                            console.log('[SW] 이전 캐시 삭제:', name);
                            return caches.delete(name);
                        })
                );
            })
            .then(() => {
                // 모든 클라이언트에 즉시 적용
                return self.clients.claim();
            })
    );
});

// ============================================================================
// Fetch - 요청 가로채기 & 캐시 전략
// ============================================================================
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // POST 요청은 캐시하지 않음
    if (event.request.method !== 'GET') return;

    // API/분석 요청은 네트워크 전용
    if (NO_CACHE_DOMAINS.some(domain => url.hostname === domain)) return;

    // 네비게이션 요청: Network First (리다이렉트 안전 처리)
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // 정상 응답만 캐시
                    if (response.ok && !response.redirected && response.status !== 206) {
                        const responseClone = response.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
                    }
                    return response;
                })
                .catch(() => caches.match(event.request).then((cached) => cached || caches.match('/index.html')))
        );
        return;
    }

    // 외부 CDN (폰트 등): Stale While Revalidate
    if (url.origin !== self.location.origin) {
        event.respondWith(staleWhileRevalidate(event.request));
        return;
    }

    // version.json: 항상 네트워크 우선 (버전 체크용)
    if (url.pathname.endsWith('version.json')) {
        event.respondWith(networkFirst(event.request));
        return;
    }

    // 에셋 (이미지, 오디오, JS, CSS): Cache First
    event.respondWith(cacheFirst(event.request));
});

// ============================================================================
// 캐시 전략 함수들
// ============================================================================

/**
 * Cache First: 캐시에 있으면 즉시 반환, 없으면 네트워크 → 캐시 저장
 * 용도: 이미지, 오디오, JS, CSS 등 자주 변하지 않는 정적 에셋
 */
async function cacheFirst(request) {
    const cached = await caches.match(request);
    if (cached) return cached;

    try {
        const response = await fetch(request);
        // 206 Partial Response는 캐시 불가, 리다이렉트 응답도 캐시 제외
        if (response.ok && response.status !== 206 && !response.redirected) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, response.clone());
        }
        // 리다이렉트 응답은 새 Response로 감싸서 반환 (redirect mode 충돌 방지)
        if (response.redirected) {
            return new Response(response.body, {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers
            });
        }
        return response;
    } catch (err) {
        // 오프라인이고 캐시도 없으면 fallback
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
    }
}

/**
 * Network First: 네트워크 시도 → 실패 시 캐시
 * 용도: version.json 등 항상 최신이어야 하는 파일
 */
async function networkFirst(request) {
    try {
        const response = await fetch(request);
        // 206 Partial Response는 캐시 불가, 리다이렉트 응답도 캐시 제외
        if (response.ok && response.status !== 206 && !response.redirected) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, response.clone());
        }
        if (response.redirected) {
            return new Response(response.body, {
                status: response.status,
                statusText: response.statusText,
                headers: response.headers
            });
        }
        return response;
    } catch (err) {
        const cached = await caches.match(request);
        return cached || new Response('Offline', { status: 503 });
    }
}

/**
 * Stale While Revalidate: 캐시 즉시 반환 + 백그라운드에서 네트워크 갱신
 * 용도: 외부 CDN 폰트 등 (빠른 로딩 + 자동 업데이트)
 */
async function staleWhileRevalidate(request) {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);

    const fetchPromise = fetch(request)
        .then((response) => {
            // 206 Partial Response는 캐시 불가, 리다이렉트 응답도 캐시 제외
            if (response.ok && response.status !== 206 && !response.redirected) {
                cache.put(request, response.clone());
            }
            return response;
        })
        .catch(() => cached);

    return cached || fetchPromise;
}
