function mostrar()
{
	
	let mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Enero": case "Marzo": case "Mayo" : case "Julio" : case "Agosto" : case "Octubre" : case "Diciembre" : alert("Este mes tiene 31 dias");
		break;
		case "Abril": case "Junio": case "Septiembre" : case "Noviembre" : alert("Este mes tiene 30 dias");
		break;
		default: alert("Este mes tiene 28 dias");
		break;
	}

}//FIN DE LA FUNCIÓN

//Enero, marzo, mayo,Julio,AGOSTO,octubre,diciembre 31
//abril,junio,septiembre,noviembre 30
//febrero 28