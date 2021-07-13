function mostrar()
{
	let mesElegido = document.getElementById("txtIdMes").value;
	switch (mesElegido){
		
		case "Enero": case "Febrero": case "Marzo": alert ("Ya pasamos el frio, ahora calor!");
			break;
		
		case "Abril": case "Mayo" : case "Junio": alert("Falta para el invierno");
			break;

		case "Julio": case "Agosto" : case "Septiembre": alert("Abrigate que hace frio !");
			break;
			
		case "Octubre" : case "Noviembre" : case "Diciembre" : alert("Ya pasamos el frio, ahora calor!");
			break;

	}
}//FIN DE LA FUNCIÓN