let edad;
function mostrar(){
	
	edad = document.getElementById("txtIdEdad").value;
	if(edad>=18){
		alert("la persona es mayor de edad");
	}else{
		alert("la persona es menor de edad");
	}

}