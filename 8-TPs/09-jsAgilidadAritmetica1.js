/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
function comenzar()
{
    let max = 10,
        min = 1,
        numAleatorio1 = Math.floor(Math.random()* (max - min + 1) + min),
        numAleatorio2 = Math.floor(Math.random()* (max - min + 1) + min),
        operador = Math.floor(Math.random()*(4 - 1 + 1) + 1);
        document.getElementById("txtIdPrimerNumero").value = numAleatorio1;
        document.getElementById("txtIdSegundoNumero").value = numAleatorio2;

        switch(operador){
            case 1 :
                document.getElementById("txtIdOperador").value = "+";
            break;
            case 2 :
                document.getElementById("txtIdOperador").value = "-";
            break;
            case 3 :
                document.getElementById("txtIdOperador").value = "x";
            break;
            case 4 :
                document.getElementById("txtIdOperador").value = "/";
            break;
        }

}//FIN DE LA FUNCIÓN
function Responder()
{
    let num1 = parseInt(document.getElementById("txtIdPrimerNumero").value),
        num2 = parseInt(document.getElementById("txtIdSegundoNumero").value),
        operador = document.getElementById("txtIdOperador").value,
        respuesta = parseInt(document.getElementById("txtIdRespuesta").value),
        resultado;

    switch(operador){
        case "+":
            resultado = num1 + num2;
        break;
        case "-":
            resultado = num1 - num2;
        break;
        case "x":
            resultado = num1 * num2;
        break;
        case "/":
            resultado = num1 / num2;
        break;
    }
    resultado = Math.floor(resultado);
    console.log(resultado);
    
    if(respuesta === resultado){
        alert("el resultado es correcto");
    }else{
        alert("el resultado es incorrecto");
    }
    location.reload();

}//FIN DE LA FUNCIÓN
