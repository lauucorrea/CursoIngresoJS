/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/


function mostrarAumento()
{
	let valImporte,resultado;
	
	valImporte = parseFloat(document.getElementById("txtIdImporte").value);
	resultado = valImporte - valImporte * 0.25;

	document.getElementById("txtIdResultado").value = resultado;
}
