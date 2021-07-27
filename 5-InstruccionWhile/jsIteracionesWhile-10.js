/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{	
	let numeroIngresado,
		cantidadNegativos = 0,
		cantidadPositivos = 0,
		sumaNegativos = 0,
		sumaPositivos = 0,
		cantidadCeros = 0,
		cantidadPares = 0,
		promPositivos,
		promNegativos,
		difPositivosNegativos,
		respuesta;
	
		do{

			numeroIngresado = parseInt(prompt("Ingrese un numero"));
			
			while(isNaN(numeroIngresado)){
				numeroIngresado = parseInt(prompt("Ingrese un numero valido"));
			}

			if(numeroIngresado %2 ==0){
				cantidadPares++;
			}
			if(numeroIngresado == 0){
				cantidadCeros++;
			}
			else if(numeroIngresado > 0){
				cantidadPositivos++;
				sumaPositivos += numeroIngresado;
			}
			else{
				cantidadNegativos++;
				sumaNegativos += numeroIngresado;
			}
			

			respuesta = prompt("Desea seguir ingresando numeros? si/no");

			while((respuesta != "si" && respuesta != "no") || !isNaN(respuesta)){
				alert("Valor incorrecto. responda correctamente");
				respuesta = prompt("Desea seguir ingresando numeros? si/no");
			}

		}while(respuesta != "no");
	
	if(cantidadPositivos > 0){
		promPositivos = sumaPositivos / cantidadPositivos;
		alert("El promedio de positivos es de: " + promPositivos);
		//document.write("El promedio de positivos es de: " + promPositivos + "</br>");
	}else{
		alert("No hay numeros positivos");
		//document.write("No hay numeros positivos </br>");
	}

	if(cantidadNegativos > 0){
		promNegativos = sumaNegativos / cantidadNegativos;
		alert("El promedio de negativos es de: " + promNegativos);
		//document.write("El promedio de negativos es de: " + promNegativos + "</br>");
	}else{
		alert("No hay numeros negativos");
		//document.write("No hay numeros negativos </br>");
	}

	difPositivosNegativos = cantidadPositivos - cantidadNegativos;

	/////////////////////////////////////////////////////////////////////////////////
	/*MUESTREO CON ALERTS*/

	alert("La cantidad de positivos es de: " + cantidadPositivos);
	alert("La cantidad de negativos es de: " + cantidadNegativos);
	
	alert("La suma de positivos es de: " + sumaPositivos);
	alert("La suma de negativos es de: " + sumaNegativos);
	
	alert("La cantidad de numeros pares es de: " + cantidadPares);
	alert("La suma de ceros es de: " + cantidadCeros);
	alert("La diferencia de positivos y negativos: " + difPositivosNegativos);

	/////////////////////////////////////////////////////////////////////////////////
	/*MUESTREO CON DOCUMENT.WRITE
	
	document.write("-------------------------------------------------------- </br>");
	document.write("La cantidad de positivos es de: " + cantidadPositivos + "</br>");
	document.write("La cantidad de negativos es de: " + cantidadNegativos + "</br>");
	document.write("-------------------------------------------------------- </br>");
	document.write("La suma de positivos es de: " + sumaPositivos + "</br>");
	document.write("La suma de negativos es de: " + sumaNegativos + "</br>");
	document.write("-------------------------------------------------------- </br>");
	document.write("La cantidad de numeros pares es de: " + cantidadPares + "</br>");
	document.write("La suma de ceros es de: " + cantidadCeros + "</br>");
	document.write("La diferencia de positivos y negativos: " + difPositivosNegativos + "</br>");
	*/
	
}//FIN DE LA FUNCIÓN