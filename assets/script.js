function calcularPrecio() {
    let precioOMP = parseFloat(document.getElementById("precioOMP").value);
    let precioTR = parseFloat(document.getElementById("precioTR").value);
    let precioGarantia = parseFloat(document.getElementById("precioGarantia").value);
    let descuento = parseFloat(document.getElementById("descuento").value);
    let pie = parseFloat(document.getElementById("pie").value) || 0;
    let transporte = parseFloat(document.getElementById("transporte").value) || 0;

    if (isNaN(precioOMP) || isNaN(precioTR) || isNaN(precioGarantia) || isNaN(descuento)) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }

    // Descontar el pie (adelanto) de los precios
    precioOMP -= pie;
    precioTR -= pie;

    let descuentoAplicado = precioOMP * (descuento / 100);
    let precioConDescuentoOMP = precioOMP - descuentoAplicado;
    let precioConDescuentoTR = precioTR - descuentoAplicado;

    // Sumar el costo de transporte
    let precioFinalOMP = Math.round(precioConDescuentoOMP + precioGarantia + transporte);
    let precioFinalTR = Math.round(precioConDescuentoTR + precioGarantia + transporte);

    // Mostrar el resultado con efecto de explosión
    let resultadoOMP = document.getElementById("precioFinalOMP");
    let resultadoTR = document.getElementById("precioFinalTR");

    resultadoOMP.value = precioFinalOMP.toLocaleString();
    resultadoTR.value = precioFinalTR.toLocaleString();

    resultadoOMP.classList.add("result-explosion");
    resultadoTR.classList.add("result-explosion");

    setTimeout(() => {
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
    document.getElementById("precioFinalTR").value = "";

    // Efecto de desvanecimiento al borrar los datos
    document.body.classList.add("fade-out");

    setTimeout(() => {
        document.body.classList.remove("fade-out");
    }, 2000);
}
