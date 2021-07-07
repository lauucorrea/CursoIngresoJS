let edad, estadoCivil;

function mostrar()
{
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad < 18 && estadoCivil != "soltero"){
		alert("Es muy pequeño para NO ser soltero");
	}
}//FIN DE LA FUNCIÓN

