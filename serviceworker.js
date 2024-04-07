const rankFileMedia = "rank-file-media-v1";
const assets = [
  "/",
  "/index.html",
  "/search.html",
  "/story.html",
  "/js/app.js",
  "/poll/pollpage.html",
  "/profile/profilepage.html",
  "/login/loginPopup.html",
  "/login/signIn.html",
  "/login/signUp.html",
  "/login/signInReporterContract.html",
  "/login/thankyou.html",
  "/login/js/loginPopup.js",
  "/login/js/signIn.js",
  "/cards/caleb.html",
  "/cards/contessa.html",

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