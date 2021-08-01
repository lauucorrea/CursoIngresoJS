/*Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.*/


function mostrar()
{
   let productoIngresado,
      precioProudcto,
      cantidadUnidades,
      marca,
      capacidad,

      contadorSSD = 0,

      cantSSDUnidadesMin,
      marcaSSDmin,
      ssdBarato,
      flagSSD = 1,

      maxHddPrecio = 0,
      maxHddCapacidad,
      maxHddCantidad,
      cantidadHdd = 0;


      for(let i=1; i<=2; i++){

         productoIngresado = prompt("Ingrese el producto numero " + i + " HDD / SSD / SSDM2").toLowerCase();

         while(!isNaN(productoIngresado) || productoIngresado != "hdd" && productoIngresado != "ssd" && productoIngresado != "ssdm2"){
            productoIngresado = prompt("ERROR. Ingrese el producto numero " + i + " HDD / SSD / SSDM2");
         }

         precioProudcto = parseInt(prompt("Ingrese el precio del " + productoIngresado));

         while(isNaN(precioProudcto) || precioProudcto < 5000 || precioProudcto > 18000){
            precioProudcto = parseInt(prompt("ERROR. Ingrese el precio del " + productoIngresado + " correctamente"));
         }

         cantidadUnidades = parseInt(prompt("Ingrese la cantidad de unidades de " + productoIngresado + " ($" + precioProudcto + " la unidad)"));

         while(isNaN(cantidadUnidades) || cantidadUnidades < 0 || cantidadUnidades > 50){
            cantidadUnidades = parseInt(prompt("ERROR Ingrese la cantidad de unidades de " + productoIngresado + " ($" + precioProudcto + " la unidad)"));
         }

         marca = prompt("Ingrese la marca de los " + productoIngresado + " SeaGate / WesternDigital / Kingston").toLowerCase();

         while(!isNaN(marca) || marca != "seagate" && marca != "westerndigital" && marca != "kingston"){
            marca = prompt("ERROR Ingrese la marca de los " + productoIngresado + " SeaGate / WesternDigital / Kingston").toLowerCase();
         }

         capacidad = parseInt(prompt("Ingrese la capacidad deseada del/los " + productoIngresado + " 250GB / 500GB / 1TB / 2TB (solo numeros)"));

         while(isNaN(capacidad) || capacidad == 0 || capacidad != 250 && capacidad != 500 && capacidad != 1 && capacidad != 2){
            capacidad = parseInt(prompt("ERROR Ingrese solo el numero de la capacidad deseada del/los " + productoIngresado + " 250GB / 500GB / 1TB / 2TB"));
         }

         switch(productoIngresado){
            case "ssd":
               contadorSSD++;
               if(flagSSD){
                  cantSSDUnidadesMin = cantidadUnidades;
                  marcaSSDmin = marca;
                  ssdBarato = precioProudcto;
               }else if(precioProudcto < ssdBarato){
                  cantSSDUnidadesMin = cantidadUnidades;
                  marcaSSDmin = marca;
                  ssdBarato = precioProudcto;
               }
               flagSSD = 0;
            break;
            case "hdd":
               cantidadHdd += cantidadUnidades;
               if(precioProudcto > maxHddPrecio){
                  maxHddPrecio = precioProudcto;
                  maxHddCapacidad = capacidad;
                  maxHddCantidad = cantidadUnidades;
               }
            break;
         }
         
      }
      /*PUNTO A*/
      if(contadorSSD != 0){
         document.write("El ssd mas barato costo $" + ssdBarato + ", es de la marca " + marcaSSDmin + ", y se vendieron " + cantSSDUnidadesMin + " de unidades </br>");
      }else{
         document.write("No se compraron unidades SSD </br>");
      }
      
      /*PUNTO B*/
      if(cantidadHdd != 0){
         if(maxHddCapacidad == 250 || maxHddCapacidad == 500){
            document.write("El HDD mas caro costo $" + maxHddPrecio + ", con una capacidad de " + maxHddCapacidad + "GB, y se vendieron " + maxHddCantidad + " de unidades </br>");
         }else{
            document.write("El HDD mas caro costo $" + maxHddPrecio + ", con una capacidad de " + maxHddCapacidad + "TB, y se vendieron " + maxHddCantidad + " de unidades </br>");
         }
         document.write("Se compro un total de " + cantidadHdd + " HDD en total");
      }else{
         document.write("No se compraron unidades HDD </br>");
      }


      
}
