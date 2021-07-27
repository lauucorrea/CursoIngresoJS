/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let respuesta,
		suma = 0,
		cantidadNumeros = 0,
		promedio,
		numeroIngresado = 0;

	do{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		respuesta = prompt("desea ingresar otro numero? si/no");
		suma += numeroIngresado;
		cantidadNumeros++;

	}while(respuesta != "no");
	
	promedio = suma / cantidadNumeros;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio.toFixed(2);

}//FIN DE LA FUNCIÓN