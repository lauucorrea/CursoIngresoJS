function mostrar()
{ 
  let nombreAlumno,
    tipoCursada,
    cantidadMaterias,
    sexoAlumno,
    notaPromedio,
    edadAlumno,
    respuesta,
    existeAlumno,

    numMaxPromedio = 0,
    nombreMaxPromedio,

    masJoven,
    nombreJoven,
    flagJoven = 1,


    contaF = 0,
    contaM = 0,
    contaN = 0,

    sumaPromM = 0,
    sumaPromF = 0,
    sumaPromN = 0,

    promedioM = 0,
    promedioF = 0,
    promedioN = 0,

    maxMaterias = 0,
    edadMaxMaterias,
    nombreMaxMaterias,
    cantidadAlumnos = 0;

    do{

        nombreAlumno = prompt("Ingrese el nombre del alumno");
        while(!isNaN(nombreAlumno)){
            nombreAlumno = prompt("ERROR Ingrese un nombre valido");
        }

        tipoCursada = prompt("Ingrese tipo de cursada deseada libre / prescencial / remota");

        while(!isNaN(tipoCursada) || tipoCursada != "libre" && tipoCursada != "prescencial" && tipoCursada != "remota"){
            tipoCursada = prompt("ERROR Ingrese tipo de cursada deseada libre / prescencial / remota");
        }

        cantidadMaterias = parseInt(prompt("Ingrese la cantidad de materias a rendir (entre 0 y 8)"));

        while(isNaN(cantidadMaterias) || cantidadMaterias < 0 || cantidadMaterias > 8){
            cantidadMaterias = parseInt(prompt("ERROR Ingrese bien la cantidad de materias a rendir (entre 0 y 8)"));
        }

        sexoAlumno = parseInt(prompt("Ingrese sexo 1. femenino / 2. masculino / 3. no binario"));

        while(isNaN(sexoAlumno) || sexoAlumno != 1 && sexoAlumno != 2 && sexoAlumno != 3){
            sexoAlumno = parseInt(prompt("ERROR ingrese el valor correspondiente para : 1. femenino / 2. masculino / 3. no binario "))
        }

        notaPromedio = parseInt(prompt("Ingrse su nota promedio entre 0 y 10"));

        while(isNaN(notaPromedio) || notaPromedio < 0 || notaPromedio > 10){
            notaPromedio = parseInt(prompt("Ingrese una nota valida"));
        }

        edadAlumno = parseInt(prompt("Ingrese su edad"));

       if(edadAlumno < 0 || edadAlumno > 100){
           alert("Basados en la edad ingresada, el alumno no forma parte de nuestra base de datos");
           existeAlumno = 0;
       }else{
           alert("Encontramos registrado al alumno ingresado");
           existeAlumno = 1;
       }

       respuesta = prompt("desea continuar con los registros? s/n");

       while(!isNaN(respuesta) || respuesta != "s" && respuesta != "n"){
            respuesta = prompt("desea continuar con los registros? s/n");
       }

      
       if(existeAlumno){ 
            cantidadAlumnos++;   
        
            if(notaPromedio > numMaxPromedio && sexoAlumno != 2){
                numMaxPromedio = notaPromedio;
                nombreMaxPromedio = nombreAlumno;
            }
    
            if(flagJoven && existeAlumno && tipoCursada == "libre"){
                masJoven = edadAlumno;
            }else if(!flagJoven && existeAlumno  && tipoCursada == "libre"){
    
                if(edadAlumno < masJoven){
                    masJoven = edadAlumno;
                    nombreJoven = nombreAlumno;
                }
            }

            switch(sexoAlumno){
                case 1:
                    contaF++;
                    sumaPromF += notaPromedio;
                break;
                case 2:
                    contaM++;
                    sumaPromM += notaPromedio;
                break;
                case 3:
                    contaN++;
                    sumaPromN += notaPromedio;
                break;
            }

            if(cantidadMaterias > maxMaterias){
                maxMaterias = cantidadMaterias;
                edadMaxMaterias = edadAlumno;
                nombreMaxMaterias = nombreAlumno;
            }
        }

    }while(respuesta != "n");

    if(cantidadAlumnos > 0){
        /*puntoA*/
        document.write("El alumno con mejor promedio es: " + nombreMaxPromedio + " con un promedio de " + numMaxPromedio + "<br>");
        /*puntoB*/
        document.write("El alumno mas joven entre los que rinden libre es: " + nombreJoven + ". Edad: " + masJoven + "<br>");
        /*puntoC*/
        if(contaF > 0){
            promedioF = sumaPromF / contaF;
            document.write("Promedio general Femeninos: " + promedioF + "<br>");
        }else{
            document.write("No hay alumnos Femeninos ingresados" + "<br>");
        }

        if(contaM > 0){
            promedioM = sumaPromM / contaM;
            document.write("Promedio general Masculinos: " + promedioM + "<br>");
        }else{
            document.write("No hay alumnos Masculinos ingresados" + "<br>");
        }

        if(contaN > 0){
            promedioN = sumaPromN / contaN;
            document.write("Promedio general No-Binarios: " + promedioN + "<br>");
        }else{
            document.write("No hay alumnos No-Binarios ingresados" + "<br>");
        }
        /*PUNTOD*/
        document.write("El nombre del alumno con mas materias es: " + nombreMaxMaterias + " con "+ edadMaxMaterias + " años y " + maxMaterias + " materias" + "<br>");
    }else{
        alert("No hay alumnos ingresados para mostrar");
    }
}