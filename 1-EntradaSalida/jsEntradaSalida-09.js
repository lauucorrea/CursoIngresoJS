/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{
	let valSueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	let resultado = valSueldo + valSueldo * .1;

	document.getElementById("txtIdSueldo").value = "$" + valSueldo;
	document.getElementById("txtIdResultado").value = "$" + resultado;
}
