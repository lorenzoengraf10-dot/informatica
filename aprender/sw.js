/* Service worker: guarda una copia de la app para que funcione sin internet
 * en el celular (por ejemplo, en el colectivo sin señal). Estrategia simple:
 * al instalar, cachea el "esqueleto" de la app; al pedir un archivo, primero
 * busca en la caché y si no está va a la red.
 *
 * IMPORTANTE: al cambiar cualquier archivo de la app, subí el número de
 * versión (CACHE) para que los celulares descarten la copia vieja y bajen la
 * nueva. El bloque de "activate" borra las cachés de versiones anteriores. */

const CACHE = 'aprender-v1';

const ARCHIVOS = [
  './',
  'index.html',
  'css/estilo.css',
  'js/lecciones.js',
  'js/progreso.js',
  'js/playground.js',
  'js/app.js',
  'manifest.json',
  'icono.svg'
];

self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ARCHIVOS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches.keys().then((claves) =>
      Promise.all(claves.filter((c) => c !== CACHE).map((c) => caches.delete(c)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (evento) => {
  if (evento.request.method !== 'GET') return;
  evento.respondWith(
    caches.match(evento.request).then((respuesta) => respuesta || fetch(evento.request))
  );
});
