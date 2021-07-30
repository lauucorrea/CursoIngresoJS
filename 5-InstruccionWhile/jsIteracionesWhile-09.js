/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numeroIngresado,
		numMax,
		numMin,
		flag = 1,
		respuesta;
	
		do{

			numeroIngresado = parseInt(prompt("Ingrese un numero"));
			
			while(isNaN(numeroIngresado)){
				numeroIngresado = parseInt(prompt("Ingrese un numero valido"));
			}

			if (flag || numeroIngresado > numMax) {

				numMax = numeroIngresado;	
			
			}
			else if (flag || numeroIngresado < numMax) {
				
				numMin = numeroIngresado;

			}
			
			flag = 0;
			respuesta = prompt("Desea seguir ingresando numeros? si/no");

			while((respuesta != "si" && respuesta != "no") || !isNaN(respuesta)){
				alert("Valor incorrecto. responda correctamente");
				respuesta = prompt("Desea seguir ingresando numeros? si/no");
			}

		}while(respuesta != "no");
	
	document.getElementById("txtIdMaximo").value = numMax;
	document.getElementById("txtIdMinimo").value = numMin;
}//FIN DE LA FUNCIÓN