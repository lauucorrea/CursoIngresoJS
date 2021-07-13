/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value),
        precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value),
        precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value),

        totalSuma = precio1 + precio2 + precio3;

    alert("La suma de los productos es: $" + totalSuma);

}
function Promedio () 
{
	let precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value),
        precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value),
        precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value),

        totalProm = (precio1 + precio2 + precio3)/3;

        alert("El promedio de los precios es de: $ " + totalProm.toFixed(2));

}
function PrecioFinal () 
{
	let precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value),
        precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value),
        precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value),
        
        total = (precio1 + precio2 + precio3) * 1.21;
        
        alert("El total de los productos es de: $ " + total.toFixed(2));

}