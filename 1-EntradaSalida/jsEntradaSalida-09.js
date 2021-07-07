/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
let valSueldo,resultado;

function mostrarAumento()
{
	valSueldo = parseInt(document.getElementById("txtIdSueldo").value);
	resultado = valSueldo + ((valSueldo*10)/100);

	document.getElementById("txtIdResultado").value = resultado;
}
