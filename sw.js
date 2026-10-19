/* Stari service worker korena (v168). Arhiva je na /arhiva/ sa svojim; ovaj se sam briše. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => { e.waitUntil(self.registration.unregister()); });
