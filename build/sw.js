const CACHE_NAME = 'ygo-fm-cache-v2';

// App Shell: O esqueleto do site que deve carregar instantaneamente
const STATIC_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './cards-data.js',
  './manifest.json'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Cacheando App Shell v2');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting(); // Força a ativação imediata
});

// Ativação e Limpeza de caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Limpando cache antigo:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estratégia Híbrida de Interceptação (Cache First para Imagens, Network Fallback)
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isImage = event.request.destination === 'image' || url.pathname.match(/\.(png|jpg|jpeg|gif|avif|webp)$/i);
  const isAudio = event.request.destination === 'audio' || url.pathname.match(/\.(mp3|ogg|wav)$/i);

  if (isAudio) {
    // ── ESTRATÉGIA PARA ÁUDIO: NETWORK ONLY (não cachear músicas pesadas) ──
    event.respondWith(fetch(event.request));
    return;
  }

  if (isImage) {
    // ── ESTRATÉGIA PARA AS 722 CARTAS: CACHE FIRST ──
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(event.request).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        });
      })
    );
  } else {
    // ── ESTRATÉGIA PARA HTML/CSS/JS: NETWORK FIRST, CACHE FALLBACK ──
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
  }
});