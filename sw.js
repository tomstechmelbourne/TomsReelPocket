/* Offline: keep the app files on the phone. Bump CACHE when any file changes. */
const CACHE = "tomsreel-pocket-1.1.0";
const FILES = ["./", "index.html", "app.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png",
               "icons/icon-maskable-512.png", "icons/apple-touch-icon.png", "icons/favicon.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // network first (so updates arrive), cache when offline
  e.respondWith(fetch(e.request).then(r => {
    if (r.ok && new URL(e.request.url).origin === location.origin) {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
    }
    return r;
  }).catch(() => caches.match(e.request, {ignoreSearch: true}).then(m => m || caches.match("index.html"))));
});
