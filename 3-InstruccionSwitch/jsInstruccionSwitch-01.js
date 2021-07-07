function mostrar()
{
	let mesElegido = document.getElementById("txtIdMes").value;
	switch (mesElegido){
		
		case "Enero": alert ("que comienzes bien el año !");
			break;
		
		case "Marzo": alert("a clases !");
			break;

		case "Julio": alert("se vienen las vacaciones !");
			break;
			
		case "Diciembre": alert("felices fiestas !");
			break;

			default: alert("No se que pasa en este");
	}
}//FIN DE LA FUNCIÓN