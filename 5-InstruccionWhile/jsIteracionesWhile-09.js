/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numeroIngresado,
		numMax = 0,
		numMin = 0,
		flag = 1,
		respuesta;
	
		do{

			numeroIngresado = parseInt(prompt("Ingrese un numero"));
			
			while(isNaN(numeroIngresado)){
				numeroIngresado = parseInt(prompt("Ingrese un numero valido"));
			}

			if (flag) {
				numMax = numeroIngresado;
				numMin = numeroIngresado;
				flag = 0;
			} else {
				if (numeroIngresado > numMax) {
					numMax = numeroIngresado;
				}
				else if (numeroIngresado < numMin) {
					numMin = numeroIngresado;
				}
			}

			respuesta = prompt("Desea seguir ingresando numeros? si/no");

			while((respuesta != "si" && respuesta != "no") || !isNaN(respuesta)){
				alert("Valor incorrecto. responda correctamente");
				respuesta = prompt("Desea seguir ingresando numeros? si/no");
			}

		}while(respuesta != "no");
	
	document.getElementById("txtIdMaximo").value = numMax;
	document.getElementById("txtIdMinimo").value = numMin;
}//FIN DE LA FUNCIÓN