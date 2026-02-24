/**
 * ============================================================================
 * Cupid - Service Worker (캐시 비활성화 버전)
 * ============================================================================
 *
 * 캐시 전략: 모든 요청을 네트워크로 직접 전달 (캐시 사용 안 함)
 * 기존 캐시는 activate 시 전부 삭제합니다.
 *
 * ============================================================================
 */

const CACHE_VERSION = '2.0.0-nocache';

// ============================================================================
// Install - 기존 캐시 무시하고 즉시 활성화
// ============================================================================
self.addEventListener('install', (event) => {
    console.log('[SW] 설치 (캐시 비활성화 모드)');
    self.skipWaiting();
});

// ============================================================================
// Activate - 모든 기존 캐시 삭제
// ============================================================================
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((name) => {
                        console.log('[SW] 캐시 삭제:', name);
                        return caches.delete(name);
                    })
                );
            })
            .then(() => {
                console.log('[SW] 모든 캐시 삭제 완료');
                return self.clients.claim();
            })
    );
});

// ============================================================================
// Fetch - 모든 요청을 네트워크로 직접 전달 (캐시 없음)
// ============================================================================
self.addEventListener('fetch', (event) => {
    // 모든 요청을 네트워크로 직접 전달
    // 오프라인 시에만 기본 에러 응답
    event.respondWith(
        fetch(event.request).catch(() => {
            // 오프라인일 때 네비게이션 요청이면 간단한 오프라인 메시지
            if (event.request.mode === 'navigate') {
                return new Response(
                    '<html><body><h1>Offline</h1><p>Please check your internet connection.</p></body></html>',
                    { status: 503, headers: { 'Content-Type': 'text/html' } }
                );
            }
            return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
        })
    );
});
