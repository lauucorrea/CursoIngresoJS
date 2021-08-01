/*
Realizar el algoritmo que permita ingresar los datos de una compra de productos alimenticios, hasta que el cliente quiera. Por cada compra se ingresa:
Tipo: (validar "Yerba", "Azúcar", "Café").
Cantidad de bolsas. (más de cero).
Precio por bolsa (más de cero).
Si se compra más de 5 bolsas en total se obtiene un 10% de descuento sobre el total a pagar.
Si se compra más de 10 bolsas en total se obtiene un 15% de descuento sobre el total a pagar.
Se pide mostrar por pantalla:
a)	El importe total a pagar bruto, sin descuento.
b)	El importe total a pagar con descuento (solo si corresponde)
c)	Informar el tipo con más cantidad de bolsas.
d)	El tipo de la compra más barata. (sobre el Bruto sin descuento)
*/

function mostrar()
{
    let productoIngresando,
        cantidadBolsas,
        precioBolsa,
        respuesta,

        acumBolsas = 0,
        totalConDescuento = 0,
        totalSinDescuento = 0,
        compraActual,

        flagBarato = 1,
        compraMinima,
        prodCompraMinima,

        cantMaxBolsas = 0,
        prodMaxBolsas,
        acumBolsasAzucar,
        acumBolsasYerba,
        acumBolsasCafe;
    
    do{
        productoIngresando = prompt("Por favor, ingrese un producto: yerba / azucar / cafe").toLowerCase();
        while(!isNaN(productoIngresando) || productoIngresando != "yerba" && productoIngresando != "azucar" && productoIngresando != "cafe"){
            productoIngresando = prompt("ERRPR ingrese yerba / azucar / cafe");
        }

        cantidadBolsas  = parseInt(prompt("Ingrese la cantidad de bolsas que desea"));
        while(isNaN(cantidadBolsas) || cantidadBolsas <= 0){
            cantidadBolsas = parseInt(prompt("ERROR ingrese una cantidad valida de bolsas"));
        }

        precioBolsa = parseInt(prompt("Ingrese el precio por bolsa"));
        while(isNaN(precioBolsa) || precioBolsa <= 0){
            precioBolsa = parseInt(prompt("ERROR ingrese un precio por bolsa valido"));
        }

        respuesta = prompt("Desea seguir comprando? s/n");

        while(!isNaN(respuesta) || respuesta != "s" && respuesta != "n"){
            respuesta = prompt("ERROR desea seguir comprando? s/n");
        }

        acumBolsas += cantidadBolsas;
        compraActual = precioBolsa * cantidadBolsas;
        totalSinDescuento += compraActual;

        if(flagBarato){
            compraMinima = compraActual;
            prodCompraMinima = productoIngresando;
        }else if(compraActual < compraMinima){
            compraMinima = totalSinDescuento;
            prodCompraMinima = productoIngresando;
        }
        flag = 0;

        switch(productoIngresando){
            case "azucar":
                acumBolsasAzucar += cantidadBolsas;
                if(acumBolsasAzucar > cantMaxBolsas){
                    cantMaxBolsas = acumBolsasAzucar;
                    prodMaxBolsas = productoIngresando;
                }
            break;
            case "cafe":
                acumBolsasCafe += cantidadBolsas;
                
                if(acumBolsasCafe > cantMaxBolsas){
                    cantMaxBolsas = acumBolsasCafe;
                    prodMaxBolsas = productoIngresando;
                }
            break;
            case "yerba":
                acumBolsasYerba += cantidadBolsas;

                if(acumBolsasYerba > cantMaxBolsas){
                    cantMaxBolsas = acumBolsasYerba;
                    prodMaxBolsas = productoIngresando;
                }
            break;
        }
        
    }while(respuesta != "n");

    if(acumBolsas != 0 && acumBolsas > 5 && acumBolsas < 10){
        totalConDescuento = totalSinDescuento * 0.90;
        document.write("El total a pagar sin descuento es de: " + totalSinDescuento + "</br>");
    }else if(acumBolsas != 0 && acumBolsas > 10){
        totalConDescuento = totalSinDescuento * 0.85;
        document.write("El total a pagar con descuento es de: " + totalConDescuento + "</br>");
    }


    document.write("El tipo con mas cantidad de bolsas es: " + prodMaxBolsas + " con un total de " + cantMaxBolsas + " bolsas </br>");
    document.write("El tipo con la compra mas barata es: " + prodCompraMinima + " con un ticket total de $" + compraMinima + "</br>");


   

}
