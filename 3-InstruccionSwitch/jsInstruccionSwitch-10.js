function mostrar()
{
	let estacionAño = document.getElementById("txtIdEstacion").value;
	let ubicacion = document.getElementById("txtIdDestino").value;

	switch(estacionAño){
		case "Invierno":
			if(ubicacion != "Bariloche"){
				alert("No se viaja");
			}
			else{
				alert("Se viaja");
			}
		break;
		case "Verano":
			if(ubicacion == "Mar del plata" || ubicacion == "Cataratas"){
				alert ("Se viaja");
			}
			else{
				alert("No se viaja");
			}
		break;
		case "Otoño":
			alert("Se viaja");
		break;
		case "Primavera":
			if(ubicacion != "Bariloche"){
				alert("Se viaja");
			}
			else{ 
				alert("No se viaja");
			}
		break;
		default:
			alert("No hay viajes programados para este destino");
		break
	}
}//FIN DE LA FUNCIÓN