function mostrar()
{
	let numeroIngresado;

	for( ; ; ){
		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		while(isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("ERROR Ingrese un numero valido"));
		}
		
		if(numeroIngresado == 9){
			break;
		}
		
	}
		
}//FIN DE LA FUNCIÓN