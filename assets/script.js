function calcularPrecio() {
    let precioOMP = parseFloat(document.getElementById("precioOMP").value);
    let precioTR = parseFloat(document.getElementById("precioTR").value);
    let precioGarantia = parseFloat(document.getElementById("precioGarantia").value);
    let descuento = parseFloat(document.getElementById("descuento").value);

    if (isNaN(precioOMP) || isNaN(precioTR) || isNaN(precioGarantia) || isNaN(descuento)) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

    let descuentoAplicado = precioOMP * (descuento / 100);
    let precioConDescuentoOMP = precioOMP - descuentoAplicado;
    let precioConDescuentoTR = precioTR - descuentoAplicado;

    let precioFinalOMP = Math.round(precioConDescuentoOMP + precioGarantia);
    let precioFinalTR = Math.round(precioConDescuentoTR + precioGarantia);

    document.getElementById("precioFinalOMP").value = precioFinalOMP;
    document.getElementById("precioFinalTR").value = precioFinalTR;
}

function borrarDatos() {
    document.getElementById("precioOMP").value = "";
    document.getElementById("precioTR").value = "";
    document.getElementById("precioGarantia").value = "";
    document.getElementById("descuento").value = "3"; // Reset al primer valor del select
    document.getElementById("precioFinalOMP").value = "";
    document.getElementById("precioFinalTR").value = "";
}

//Service Worker

const CACHE_NAME = 'v1_cache_calculadora';
const urlsToCache = [
    './',
    './index.html',
    './assets/styles.css',
    './assets/script.js',
    './assets/img/ripley-logo.png',
    './assets/img/icon-192x192.png',
    './assets/img/icon-512x512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (!cacheWhitelist.includes(cacheName)) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
    );
});
