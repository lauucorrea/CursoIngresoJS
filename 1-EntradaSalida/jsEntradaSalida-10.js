/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
let valImporte,resultado;

function mostrarAumento()
{
	valImporte = parseInt(document.getElementById("txtIdImporte").value);
	resultado = valImporte - ((valImporte*25)/100);

	document.getElementById("txtIdResultado").value = resultado;
}
