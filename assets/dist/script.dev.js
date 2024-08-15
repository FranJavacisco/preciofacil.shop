"use strict";

function calcularPrecio() {
  var precioOMP = parseFloat(document.getElementById("precioOMP").value);
  var precioTR = parseFloat(document.getElementById("precioTR").value);
  var precioGarantia = parseFloat(document.getElementById("precioGarantia").value);
  var descuento = parseFloat(document.getElementById("descuento").value);

  if (isNaN(precioOMP) || isNaN(precioTR) || isNaN(precioGarantia) || isNaN(descuento)) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }

  var descuentoAplicado = precioOMP * (descuento / 100);
  var precioConDescuentoOMP = precioOMP - descuentoAplicado;
  var precioConDescuentoTR = precioTR - descuentoAplicado;
  var precioFinalOMP = Math.round(precioConDescuentoOMP + precioGarantia);
  var precioFinalTR = Math.round(precioConDescuentoTR + precioGarantia);
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
} //Service Worker


var CACHE_NAME = 'v1_cache_calculadora';
var urlsToCache = ['./', './index.html', './assets/styles.css', './assets/script.js', './assets/img/ripley-logo.png', './assets/img/icon-192x192.png', './assets/img/icon-512x512.png'];
self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
    return cache.addAll(urlsToCache);
  }));
});
self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (response) {
    if (response) {
      return response;
    }

    return fetch(event.request);
  }));
});
self.addEventListener('activate', function (event) {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(caches.keys().then(function (cacheNames) {
    return Promise.all(cacheNames.map(function (cacheName) {
      if (!cacheWhitelist.includes(cacheName)) {
        return caches["delete"](cacheName);
      }
    }));
  }));
});
//# sourceMappingURL=script.dev.js.map
