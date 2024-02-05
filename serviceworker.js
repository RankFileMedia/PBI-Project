const rankFileMedia = "rank-file-media-v1";
const assets = [
  "/",
  "/index.html",
  "/js/app.js"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(rankFileMedia).then(cache => {
        cache.addAll(assets);
      })
    );
  });

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});