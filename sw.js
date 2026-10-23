/* Service worker minimal : permet d'installer la page comme une appli.
   Il ne met rien en cache et laisse passer toutes les requêtes telles quelles. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request));
});
