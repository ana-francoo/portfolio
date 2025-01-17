const BUILD_TIME = new Date().getTime(); // This will be different for each build
const CACHE_NAME = `portfolio-cache-v1-${BUILD_TIME}`;
const urlsToCache = [
  '/',
  '/scripts/index.js',
  '/index.html',
  '/projects/index.html',
  '/globals.css',
  '/scripts/index.js',
  '/scripts/projects.js',
  '/scripts/holoconnect.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName); // Delete old caches
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(fetchResponse => {
        // Don't cache if response is not ok
        if (!fetchResponse || fetchResponse.status !== 200) {
          return fetchResponse;
        }
        
        // Clone the response as it can only be consumed once
        const responseToCache = fetchResponse.clone();
        
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        
        return fetchResponse;
      });
    })
  );
});