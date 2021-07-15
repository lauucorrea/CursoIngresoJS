function mostrar()
{
    let edad = parseInt(document.getElementById("txtIdEdad").value);
    
    if(edad < 13){
        alert("es un niño");
    }else if (edad >=13 || edad <= 17){
        alert("es un adolescente");
    }else{
        alert("es mayor de edad");
    }

}//FIN DE LA FUNCIÓN