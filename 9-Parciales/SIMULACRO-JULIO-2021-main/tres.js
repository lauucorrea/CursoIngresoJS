/*
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
*/

function mostrar()
{
	let nombreIngresado,
        edadIngresada,
        generoIngresado,
        vacuna,
        temperaturaCorporal,
        respuesta,

        nombreMayorTemperatura,
        vacunaMayorTemperatura,
        tempMax = 0,

        vacunadosF = 0,
        vacunadosM = 0,
        vacunadosAstra = 0,
        vacunadosNB = 0,
        
        
        edadHombresTotal = 0,
        edadPromedio;

        do{
            nombreIngresado = prompt("Ingrese su nombre");
            while(!isNaN(nombreIngresado)){
                nombreIngresado = prompt("ERROR Por favor, ingrese un nombre valido");
            }

            edadIngresada = parseInt(prompt(nombreIngresado + " Ingrese su edad"));
            while(isNaN(edadIngresada) ||  edadIngresada == 0 || edadIngresada < 17){
                edadIngresada = parseInt(prompt(nombreIngresado + ". ERROR Ingrese su edad correctamente"));
            }

            generoIngresado = prompt(nombreIngresado + " seleccione su genero F , M , NB").toLowerCase();

            while(!isNaN(generoIngresado) || generoIngresado != "f" && generoIngresado != "m"){
                generoIngresado = prompt(nombreIngresado + ". ERROR seleccione su genero correctamente F , M , NB").toLowerCase();
            }
            vacuna = prompt(nombreIngresado + " elija el tipo de vacuna SputnikV / AstraZeneca / Otra").toLowerCase();

            while(!isNaN(vacuna) || vacuna != "sputnikv" && vacuna != "astrazeneca" && vacuna != "otra"){
                vacuna = prompt(nombreIngresado + ". ERROR elija el tipo de vacuna correcta SputnikV / AstraZeneca / Otra").toLowerCase();
            }

            temperaturaCorporal = parseInt(prompt("Ingrese su temperatura corporal actual"));

            while(isNaN(temperaturaCorporal)){
                temperaturaCorporal = parseInt(prompt("Ingrese correctamente su temperatura corporal actual"));
            }

            respuesta = prompt("Desea continuar registrando personas? s/n");

            while(!isNaN(respuesta) || respuesta != "n" && respuesta != "s"){
                respuesta = prompt("ERROR Desea continuar registrando personas? s/n");
            }
///////////////////////////////////////////////////////////////////////////////////////////////////////

            if(temperaturaCorporal > tempMax){
                tempMax = temperaturaCorporal;
                nombreMayorTemperatura = nombreIngresado;
                vacunaMayorTemperatura = vacuna;
            }

            if(temperaturaCorporal > 38 && vacuna == "astrazeneca"){
                vacunadosAstra++;
            }

            switch(generoIngresado){
                case "f":
                    vacunadosF++;
                break;

                case "m":
                    if(vacuna == "sputnikv" && temperaturaCorporal <= 37){
                        edadHombresTotal += edadIngresada;
                        vacunadosM++;
                    }
                break;

                case "nb":
                    if(vacuna == "astrazeneca" || vacuna == "otra"){
                        vacunadosNB++;
                    }
                break;
            }

        }while(respuesta != "n");

        edadPromedio = edadHombresTotal / vacunadosM;

        document.write("La persona " + nombreMayorTemperatura + " Fue registrada con un pico de " + tempMax + " grados con la vacuna " + vacunaMayorTemperatura + "</br>");
        document.write(vacunadosF + " Mujeres recibieron la vacuna SputnikV </br> ");
        document.write(vacunadosNB + " Personas del genero No binario, recibieron la vacuna AstraZeneca u otra </br>");
        document.write(vacunadosAstra + " personas vacunadas con la vacuna Astrazeneca presentaron mas de 38 grados de temperatura </br>");
        document.write("La edad promedio de hombres que se aplicaron la vacuna SputnicV y no presentaron fiebre, es de: " + edadPromedio);
}
