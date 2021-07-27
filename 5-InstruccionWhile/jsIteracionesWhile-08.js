/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta,
		sumaPositivos = 0,
		multiNegativos = 1,
		numeroIngresado = 0;

	do{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		respuesta = prompt("desea ingresar otro numero? si/no");

		if(numeroIngresado > 0){
			sumaPositivos += numeroIngresado;
		}else{
			multiNegativos *= numeroIngresado;
		}

	}while(respuesta != "no");

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiNegativos;

}//FIN DE LA FUNCIÓN