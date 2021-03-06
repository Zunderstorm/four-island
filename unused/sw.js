(function(){
var CACHE_NAME = 'my-site-cache-v2';
var urlsToCache = [
  '/',
  '/css/main.css',
  '/js/main.js',
  '/js/pokedex.js',
  '/js/iv.js',
  '/index.html',
  '/ivcalc.html'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
//END install

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          console.log("return" + response);
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

})();
