function mostrar()
{

	let horaDia = parseInt(document.getElementById("txtIdHora").value);

    switch(true){
        case horaDia >= 7 && horaDia <=11:
            alert("Es de mañana");
        break;
    }


}//FIN DE LA FUNCIÓN

//Esto hará que salte la coincidencia cuando alguna de las condiciones del case sea verdadera, saltándose las demás.