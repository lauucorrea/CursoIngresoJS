function mostrar()
{
    let precio = parseInt(prompt("Ingrese el precio")), 
        descuento = prompt("Ingrese el porcentaje a descontar"),
        finalConDescuento;

        finalConDescuento = precio - (precio * descuento / 100);
        document.getElementById("txtIdPrecioFinal").value = Math.floor(finalConDescuento);
}
