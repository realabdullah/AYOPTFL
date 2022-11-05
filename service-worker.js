var cacheName = 'v1.0';

var cacheAssets = [
    '/src/index.html',
    '/src/about.html',
    '/src/contact.html',
    '/src/js/menu.js',
    '/src/js/contact.js',
    '/src/js/home.js',
    '/src/js/about.js',
    '/src/scss/main.scss'
]

// installation
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');
  e.waitUntil(
    caches
    .open(cacheName)
    .then(cache => {
      console.log('Service Worker: Caching Files');
      cache.addAll(cacheAssets);
    })
    .then(() => self.skipWaiting())
  );
});    

// activation
self.addEventListener('activate', e => {
  console.log('Service Worker: Installed');
}); 

// fetch

self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));   
});