function mostrar()
{
	let numeroIngresado = "",
		contadorPares = 0,
		flag = 0;
	
	while(isNaN(numeroIngresado)){
		if(flag == 0){
			numeroIngresado = parseInt(prompt("ingrese un numero"));
			flag = 1;
		}else{
			numeroIngresado = parseInt(prompt("Ingrese un numero valido"))
		}
	}

	for(let i=1; i<=numeroIngresado; i++){

		if(i % 2 == 0){
			contadorPares++;
			console.log(i);
		}
	}

	alert("cantidad pares: "+ contadorPares);
}//FIN DE LA FUNCIÓN