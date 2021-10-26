self.addEventListener('install', (event) => {
  console.log('installing service worker....');
});

self.addEventListener('activate', (event) => {
  console.log('activating service worker....');
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(fetch(event.request));
});
