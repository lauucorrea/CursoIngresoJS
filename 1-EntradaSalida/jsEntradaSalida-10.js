/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
let valImporte,resultado;

function mostrarAumento()
{
	valImporte = parseInt(txtIdImporte.value);
	resultado = valImporte - ((valImporte*25)/100);

	txtIdResultado.value = resultado;
}
