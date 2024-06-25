importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE = "pwabuilder-page";
const offlineFallbackPage = "index.html";

// Evento de mensaje para omitir la espera
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Evento de instalación para precachear recursos
self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
      .catch((error) => console.error('Error al abrir el cache:', error))
  );
});

// Habilitar la precarga de navegación
if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

// Evento de fetch para manejar las solicitudes
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;
        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {
        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});

// Manejo de clic en notificaciones
self.addEventListener('notificationclick', (e) => {
  const notification = e.notification;
  const action = e.action;

  notification.close();
  // Manejar la acción de la notificación aquí
});

// Precaching de recursos
try {
  const precacheManifest = [
    { url: '/index.html', revision: '1' },
    { url: '/styles/main.css', revision: '1' },
    { url: '/scripts/main.js', revision: '1' },
    // Añade más archivos según sea necesario
  ];

  workbox.precaching.precacheAndRoute(precacheManifest);
} catch (error) {
  console.error('Error en precaching:', error);
}
