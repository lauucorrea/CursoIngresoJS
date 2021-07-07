let edad, estadoCivil;

function mostrar()
{
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadoCivil != "soltero"){
	//no hacer nada
	}
	else if(edad >= 18 && estadoCivil == "soltero"){
		alert("es soltero y no es menor")
	}
}//FIN DE LA FUNCIÓN

