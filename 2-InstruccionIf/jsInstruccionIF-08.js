
function mostrar()
{
	let edad = parseInt(document.getElementById("txtIdEdad").value),
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad >= 18 && estadoCivil == "Soltero"){
		alert("es soltero y no es menor")
	}
}//FIN DE LA FUNCIÓN

