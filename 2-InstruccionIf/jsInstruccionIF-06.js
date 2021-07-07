let edad;
function mostrar()
{
    edad = parseInt(document.getElementById("txtIdEdad").value);
    console.log(edad);
    if(edad < 13){
        alert("es un niño");
    }else if(edad >=13 || edad <= 17){
        alert("es un adolescente");
    }else if(edad >= 18){
        alert("es mayor de edad");
    }

}//FIN DE LA FUNCIÓN