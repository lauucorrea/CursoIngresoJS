function mostrar()
{
	var destinoIngresado = (document.getElementById("txtIdDestino").value).toLowerCase();
	
	switch(destinoIngresado){
		case "bariloche":
			alert("vamos al sur");
		break;
		case "cataratas":
			alert("vamos pa'l norte");
		break;
		case "mar del plata":
			alert("a la playaa");
		break;
		case "usuahia":
			alert ("vamos al sur");
	}

}//FIN DE LA FUNCIÓN