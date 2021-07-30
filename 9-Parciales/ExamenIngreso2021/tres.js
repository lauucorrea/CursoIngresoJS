function mostrar()
{
    let nombre,
        estadoCivil,
        edadIngresada,
        temperaturaCorporal,
        sexoIngresado,
        cantidadPersonas,
        noPuedenViajar = 0,
        precioPasaje = 600,

        viudosMasSesenta = 0,
        edadMujerMasJoven,
        nombreMujerMasJoven,
        flagJoven =1,

        totalSinDescuento,
        totalConDescuento,
        contadorSesenta = 0;

    cantidadPersonas = parseInt(prompt ("Ingrese la cantidad de personas que viajan o ingrese 0 para CANCELAR"));

    while(isNaN(cantidadPersonas) || cantidadPersonas < 0){
        cantidadPersonas = parseInt(prompt("ERROR un numero valido de personas, o ingrese 0 para CANCELAR"))
    }

    if(cantidadPersonas != 0){
        for(let i=1 ; i<=cantidadPersonas; i++){

            nombre = prompt("Ingrese el nombre del ocupante numero " + i);

            while(!isNaN(nombre) || nombre.length < 2){
                nombre = prompt("Por favor, Ingrese correctamente el nombre del ocupante numero " + i);
            }

            estadoCivil = prompt("Hola "+ nombre + " ,por favor ingrese su estado civil soltero / casado / viudo");

            while(!isNaN(estadoCivil) || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo"){
                estadoCivil = prompt("ERROR. Pasajero "+ nombre + " ,por favor ingrese su estado civil soltero / casado / viudo");
            }

            edadIngresada = parseInt(prompt(nombre + " por favor, Ingrese su edad (debe ser mayor de 17"));

            while (isNaN(edadIngresada)){
                edadIngresada = parseInt(prompt(nombre + " por favor, Ingrese su edad (debe ser mayor de 17"));
            }

            if(edadIngresada < 17){
                alert("el viajante es menor de edad, por favor continue con el proximo viajero");
                noPuedenViajar++;
                continue;
            }

            temperaturaCorporal = parseInt(prompt("Ingrese su temperatura corporal"));

            while(isNaN(temperaturaCorporal)){
                temperaturaCorporal = parseFloat(prompt("Valor invalido. Ingrese en numeros su temperatura corporal "));
            }

            if(temperaturaCorporal > 37.2){
                alert("La temperatura corporal marcada no esta admitida en la empresa. Continue con el proximo viajero");
                noPuedenViajar++;
                continue;
            }

            sexoIngresado = parseInt(prompt(nombre + " ,Por favor ingrese su sexo 1. Masculino / 2. Femenino / 3. No binario"));

            while(isNaN(sexoIngresado)){
                sexoIngresado = parseInt(prompt("ERROR,"+ nombre + " ,Por favor elija una de las opciones en pantalla 1. Masculino / 2. Femenino / 3. No binario"));
            }

            switch(estadoCivil){
                case "viudo":
                    if(edadIngresada > 60){
                        viudosMasSesenta++;
                    }
                break;
                case "soltero":
                    if(flagJoven){
                        edadMujerMasJoven = edadIngresada;
                        nombreMujerMasJoven = nombre;
                    }else{
                        if(sexoIngresado ==2 && edadIngresada < edadMujerMasJoven) {
                            edadMujerMasJoven = edadIngresada;
                            nombreMujerMasJoven = nombre;
                        }
                    }
                break;
            }
            flagJoven = 1;
            if(edadIngresada > 60){
                contadorSesenta++;
            }
        }
        cantidadPersonas = cantidadPersonas - noPuedenViajar;
        totalSinDescuento = precioPasaje * cantidadPersonas;
       
        /*puntoA*/
        document.write("Las cantidad de personas viudas con mas de 60 son: " + viudosMasSesenta + "<br>");
        /*puntoB*/
        document.write("La mujer soltera mas joven tiene la edad de " + edadMujerMasJoven + " y su nombre es: " + nombreMujerMasJoven+ "<br>");
        /*puntoC*/
        document.write("El precio total del viaje sin descuento es de: $" + totalSinDescuento + "<br>");
        /*puntoD*/
        if(cantidadPersonas/2 >= contadorSesenta){
            totalConDescuento = totalSinDescuento * 0.75;
            document.write("El precio total con descuento por total de Jubilados es de: " + totalConDescuento + " (hay un total de " + contadorSesenta + " Jubilados)" + "<br>");
        }

    }else{
        alert("El viaje queda cancelado");
    } 
}