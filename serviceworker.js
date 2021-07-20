
// modified from this tutorial:
// https://medium.com/james-johnson/a-simple-progressive-web-app-tutorial-f9708e5f2605

var cacheName = 'zim_pwa_Socket_Escape';
var filesToCache = [  //add mvc
  './',
  'index.html',
  'assets/escape.png',
  'Oswald-VariableFont_wght.ttf',
  'libraries/game_2.4.js',
  'libraries/pizzazz_03.js',
  'libraries/socket.io.js',
  'libraries/zimserver_urls.js',
  'libraries/zimsocket_1.1.js',
  'libraries/1.3.2/createjs.js',
  'libraries/cat/04/zim.js',
  //'scripts/model.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
