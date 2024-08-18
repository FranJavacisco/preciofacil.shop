"use strict";

function calcularPrecio() {
  var precioOMP = parseFloat(document.getElementById("precioOMP").value);
  var precioTR = parseFloat(document.getElementById("precioTR").value);
  var precioGarantia = parseFloat(document.getElementById("precioGarantia").value);
  var descuento = parseFloat(document.getElementById("descuento").value);
  var pie = parseFloat(document.getElementById("pie").value) || 0;
  var transporte = parseFloat(document.getElementById("transporte").value) || 0;

  if (isNaN(precioOMP) || isNaN(precioTR) || isNaN(precioGarantia) || isNaN(descuento)) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  } // Descontar el pie (adelanto) de los precios


  precioOMP -= pie;
  precioTR -= pie;
  var descuentoAplicado = precioOMP * (descuento / 100);
  var precioConDescuentoOMP = precioOMP - descuentoAplicado;
  var precioConDescuentoTR = precioTR - descuentoAplicado; // Sumar el costo de transporte

  var precioFinalOMP = Math.round(precioConDescuentoOMP + precioGarantia + transporte);
  var precioFinalTR = Math.round(precioConDescuentoTR + precioGarantia + transporte); // Mostrar el resultado con efecto de explosión

  var resultadoOMP = document.getElementById("precioFinalOMP");
  var resultadoTR = document.getElementById("precioFinalTR");
  resultadoOMP.value = precioFinalOMP.toLocaleString();
  resultadoTR.value = precioFinalTR.toLocaleString();
  resultadoOMP.classList.add("result-explosion");
  resultadoTR.classList.add("result-explosion");
  setTimeout(function () {
    resultadoOMP.classList.remove("result-explosion");
    resultadoTR.classList.remove("result-explosion");
  }, 1000);
}

function borrarDatos() {
  document.getElementById("precioOMP").value = "";
  document.getElementById("precioTR").value = "";
  document.getElementById("precioGarantia").value = "";
  document.getElementById("pie").value = "";
  document.getElementById("transporte").value = "";
  document.getElementById("descuento").value = "3"; // Reset al primer valor del select

  document.getElementById("precioFinalOMP").value = "";
  document.getElementById("precioFinalTR").value = ""; // Efecto de desvanecimiento al borrar los datos

  document.body.classList.add("fade-out");
  setTimeout(function () {
    document.body.classList.remove("fade-out");
  }, 2000);
}
//# sourceMappingURL=script.dev.js.map
