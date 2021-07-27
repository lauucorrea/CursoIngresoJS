function mostrar()
{
	let suma = 0,
		numeroIngresado = 0,
		vueltas = 0,
		promedio;

	while(vueltas < 5){

		if(!isNaN(numeroIngresado)){
			suma += numeroIngresado;
			vueltas++;
		}
			switch (vueltas){
				case 1:
					numeroIngresado = parseInt(prompt("Ingrese el primer numero"));
				break;
				case 2:
					numeroIngresado = parseInt(prompt("Ingrese el segundo numero"));
				break;
				case 3:
					numeroIngresado = parseInt(prompt("Ingrese el tercer numero"));
				break;
				case 4:
					numeroIngresado = parseInt(prompt("Ingrese el cuarto numero"));
				break;
				case 5:
					numeroIngresado = parseInt(prompt("Ingrese el quinto numero"));
				break;
			}
	}
	promedio = suma / vueltas;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN
