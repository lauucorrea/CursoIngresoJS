/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo = prompt("Ingrese f para sexo femenino y m para masculino");
	while(sexo != "f" && sexo != "m"){
		sexo = prompt("Sexo incorrecto. Ingrese f para sexo femenino y m para masculino");
		console.log(sexo);
	}

	if(sexo == "f"){
		document.getElementById("txtIdSexo").value = "Sexo femenino";
	}else{
		document.getElementById("txtIdSexo").value = "Sexo masculino";
	}
}//FIN DE LA FUNCIÓN