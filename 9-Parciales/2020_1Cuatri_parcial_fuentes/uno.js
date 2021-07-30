
function mostrar()
{
	let producto,
		unidades,
		precio,
		marca,
		fabricante,

		flagAlcohol = 0,
		precAlcoholMin = 0,
		cantAlcoholMin = 0,
		fabAlcoholMin = 0,
		

		cantComprasAlcohol = 0,
		cantUnidadesAlcohol = 0,
		preTotalAlcohol = 0,

		cantComprasJabon = 0,
		cantUnidadesJabon = 0,
		preTotalJabon = 0,

		cantComprasBarbijo = 0,
		cantUnidadesBarbijo = 0,
		preTotalBarbijo = 0,

		productoMax,
		promedio;

	for(i=1; i<=5; i++){
	
		producto = prompt("Ingrese el producto numero " + i + ". barbijo / alcohol / jabon").toLowerCase();

		while(!isNaN(producto) || producto != "barbijo" && producto != "alcohol" && producto != "jabon"){
			producto = prompt("ERROR Ingrese el producto numero " + i + " correctamente");
		}

		precio = parseInt(prompt("Ingrese el precio del producto"));

		while(isNaN(precio) || precio < 100 || precio > 300){
			precio = prompt("ERROR Ingrese un precio valido entre 100 y 300 para el producto numero " + i);
		}
			
		unidades = parseInt(prompt("Ingrese las unidades el producto numero " + i + " (entre 1 y 1000)"));

		while(isNaN(unidades) || unidades <= 0 || unidades > 1000){
			unidades = parseInt(prompt("ERROR Ingrese un numero valido (entre 1 y 1000)"));
		}	
		
		marca = prompt("Ingrese la marca del producto numero " + i);

		while(!isNaN(marca)){
			marca = prompt("ERROR Ingrese la marca " + i + " correctamente (solo texto)");
		}

		fabricante = prompt("Ingrese el fabricante del producto numero " + i);

		while(!isNaN(fabricante)){
			fabricante = prompt("ERROR Ingrese el fabricante del producto numero " + i + " correctamente (solo texto)");
		}

		///////////////////////////////////////////////////////////////////////////////////////////////////////////////

		switch(producto){
			case "barbijo":
				cantUnidadesBarbijo += unidades;
				preTotalBarbijo += precio;
			break;
			case "jabon":
				cantUnidadesJabon += unidades;
				preTotalJabon += precio;
				
			break;
			case "alcohol":
				if(!flagAlcohol){
					precAlcoholMin = precio;
				}
				else if(precio < precAlcoholMin){
					precAlcoholMin = precio;
					cantAlcoholMin = unidades;
					fabAlcoholMin = fabricante;
				}
				flagAlcohol = 1;

				cantUnidadesAlcohol += unidades;
				preTotalAlcohol += precio;
			break;
		}

	}

	if(cantUnidadesBarbijo > cantUnidadesJabon && cantUnidadesBarbijo > cantUnidadesAlcohol){

		promedio = preTotalBarbijo / cantComprasBarbijo;
		productoMax = "barbijo";	

	}else if(cantUnidadesJabon > cantUnidadesAlcohol && cantUnidadesJabon > cantUnidadesBarbijo){

		promedio = preTotalBarbijo / cantComprasJabon;
		productoMax = "jabon";

	}else if(cantUnidadesAlcohol > cantUnidadesJabon && cantUnidadesAlcohol > cantUnidadesBarbijo){

		promedio = preTotalAlcohol / cantComprasAlcohol;
		productoMax = "alcohol";

	}

	/*punto A*/
	document.write("El alcohol mas barato es del fabricante: " + fabAlcoholMin + "</br>");
	document.write("Cantidad de unidades: " + cantAlcoholMin + "</br>");
	document.write("Precio destacado: " + precAlcoholMin + "</br>");
	document.write("--------------------------------------------------------------</br>");
	/*punto B*/
	document.write("El producto con mas unidades fue el: " + productoMax + "</br>");
	document.write("El promedio es de: " + promedio + "</br>");
	document.write("--------------------------------------------------------------</br>");
	/*punto C*/
	document.write("Unidades de jabon en total: " + cantUnidadesJabon);
	
}
