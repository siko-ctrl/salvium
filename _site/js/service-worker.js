const CACHE_NAME = 'salvium-cache-v1';
const ASSETS_TO_CACHE = [
    '/salvium/css/styles.css',
    '/salvium/js/header_jekyll.js',
    '/salvium/js/footer_jekyll.js',
    '/salvium/js/image-loader.js',
    'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css',
    'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js',
    '/salvium/images/newimages/Page%20Headers/Blog%20Header-320.webp',
    '/salvium/images/newimages/Page%20Headers/Blog%20Header-640.webp',
    '/salvium/images/pools-320.webp',
    '/salvium/images/pools-640.webp'
];

// Install event - cache critical assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS_TO_CACHE))
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        })
    );
});

// Fetch event - serve from cache, falling back to network
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;

    // Handle requests for images
    if (event.request.destination === 'image') {
        event.respondWith(
            caches.match(event.request)
                .then(response => {
                    // Return cached response if found
                    if (response) return response;

                    // Otherwise fetch from network
                    return fetch(event.request).then(response => {
                        // Don't cache non-successful responses
                        if (!response || response.status !== 200) {
                            return response;
                        }

                        // Cache the response
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    });
                })
        );
        return;
    }

    // For other requests, try network first, falling back to cache
    event.respondWith(
        fetch(event.request)
            .catch(() => {
                return caches.match(event.request);
            })
    );
});
