/*
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
Curso de ingreso UTN FRA
*/
function mostrar()
{	
    let productoIngresado,
        precio,
        unidades,
        tipoInflamable,
        marca,

        contAlcohol = 0,
        contIac = 0,
        contQuat = 0,

        acumAlcohol = 0,
        acumIac = 0,
        acumQuat = 0,

        promedioAL = 0,
        promedioIA = 0,
        promedioQT = 0,

        cantidadUnidadesInifugo = 0,
        cantidadUnidadesCombustible = 0,
        cantidadUnidadesExplosivo = 0,
        tipoMaxInflamable,
        numMaxInflamable,
        flagInflamable = 1,

        iacInferior = 0,

        
        precioMax,
        marcaCara,
        tipoCaro;

        for(let i = 1; i<=5; i++){

            productoIngresado = prompt("Ingrese el nombre del producto numero " + i + " Alcohol, IAC, QUAT").toLowerCase();
            
            while(!isNaN(productoIngresado) || productoIngresado != "alcohol" && productoIngresado != "iac" && productoIngresado !="quat"){
                productoIngresado = prompt("ERROR ingrese tipo Alcohol, IAC, o QUAT");
            }

            precio = parseInt(prompt("Ingrese el precio del " + productoIngresado + " entre 100 y 300"));

            while(isNaN(precio) || precio < 100 || precio > 300){
                precio = parseInt(prompt("ERROR ingrese correctamente el precio (entre 100 y 300)"));
            }

            unidades = parseInt(prompt("Ingrese las unidades a comprar"));

            while(isNaN(unidades) || unidades == 0 || unidades < 0 || unidades > 1000){
                unidades = parseInt(prompt("ERROR ingrese una cantidad valida de unidades"));
            }

            tipoInflamable = prompt("Ingrese el tipo de inflamable del " + productoIngresado + " Inifugo / combustible / explosivo").toLowerCase();
            
            while(!isNaN(tipoInflamable) || tipoInflamable != "inifugo" && tipoInflamable != "combustible" && tipoInflamable !="explosivo"){
                productoIngresado = prompt("ERROR ingrese tipo Alcohol, IAC, o QUAT");
            }

            marca = prompt("Ingrese la marca del " + productoIngresado);
            
            while(!isNaN(marca)){
                marca = prompt("Ingrese correctamente la marca del " + productoIngresado);
            }
        
            switch (productoIngresado){

                case "alcohol":
                    contAlcohol++;
                    acumAlcohol += unidades;
                break;

                case "iac":
                    contIac++;
                    acumIac += unidades;

                    if(precio <= 200){
                        iacInferior += unidades;
                    }
                break;

                case "quat":
                    contQuat++;
                    acumQuat += unidades;
                break;

            }
            /////////////////////////////////////////////

            switch (tipoInflamable){

                case "inifugo":
                    cantidadUnidadesInifugo += unidades;
                break;

                case "combustible":
                    cantidadUnidadesCombustible += unidades;
                break;

                case "explosivo":
                    cantidadUnidadesExplosivo += unidades;
                break;

            }

            if(flagInflamable){
                maxInflamable = tipoInflamable;
                numMaxInflamable = unidades;
            }else{
                if(cantidadUnidadesInifugo > cantidadUnidadesExplosivo && cantidadUnidadesInifugo > cantidadUnidadesCombustible ){
                    numMaxInflamable = cantidadUnidadesInifugo;
                    tipoMaxInflamable = "Inifugo";
                }
                else if(cantidadUnidadesCombustible > cantidadUnidadesInifugo && cantidadUnidadesCombustible > cantidadUnidadesExplosivo){
                    numMaxInflamable = cantidadUnidadesCombustible;
                    tipoMaxInflamable = "Combustible";
                }
                else if(cantidadUnidadesExplosivo > cantidadUnidadesInifugo && cantidadUnidadesExplosivo > cantidadUnidadesCombustible){
                    numMaxInflamable = cantidadUnidadesExplosivo;
                    tipoMaxInflamable = "Explosivo";
                }
            }

            flagInflamable = 0;
        
            //comienzo del punto D
            if(precio > precioMax){
                precioMax = precio;
                marcaCara = productoIngresado;
                tipoCaro = tipoInflamable;
            } 
        }

        if(contAlcohol != 0){
            promedioAL = acumAlcohol / contAlcohol;
            document.write("El promedio de Alcohol es: " + promedioAL + "</br>");
        }else{
            document.write("No hay productos Alcohol ingresados (no se puede calcular su promedio)");
        }
        
        if(contIac != 0){
            promedioIA = acumIac / contIac;
            document.write("El promedio de IAC es: " + promedioIA + "</br>");
        }else{
            document.write("No hay productos de IAC ingresados (no se puede calcular su promedio)");
        }

        if(contQuat != 0){
            promedioQT = acumQuat / contQuat;
            document.write("El promedio de QUAT es: " + promedioQT + "</br>");
        }else{
            document.write("No hay productos QUAT ingresados (no se puede calcular su promedio)");
        }

        /*PUNTO B*/
        document.write("El inflamable con mas cantidad de unidades es: " + tipoMaxInflamable + " con un total de " + numMaxInflamable + " unidades </br>");
        /*PUNTO C*/
        document.write("Se compraron un total de " + iacInferior + " unidades por menos de $200 </br>");
        /*PUNTO D*/
        document.write("El producto mas caro fue " + marcaCara + " del tipo " + tipoCaro + " vendido a $" + precioMax + "</br>");
}