let edad;
function mostrar()
{
	edad = parseInt(document.getElementById("txtIdEdad").value);
	if(edad<=13 || edad>=17){
		alert("la persona no es adolecente");
	}
}//FIN DE LA FUNCIÓN