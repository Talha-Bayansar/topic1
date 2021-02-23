const staticDevCoffee = "pwa-coffee-site-v1";
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/coffee.jpg",
];

self.addEventListener("install", (installEvent) => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then((cache) => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.open(staticDevCoffee).then(function (cache) {
            return cache.match(event.request).then(function (response) {
                return (
                    response ||
                    fetch(event.request).then(function (response) {
                        cache.put(event.request, response.clone());
                        return response;
                    })
                );
            });
        })
    );
});

self.addEventListener("activate", (e) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(staticDevCoffee);
    e.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhiteList.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            )
        )
    );
});
