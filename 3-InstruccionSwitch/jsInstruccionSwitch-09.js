function mostrar() {
  let estacion = document.getElementById("txtIdEstacion").value,
      destino = document.getElementById("txtIdDestino").value,
      precioBase = 15000;

  switch (estacion) {
    case "Invierno":

      if (destino == "Bariloche") {
        alert("El precio final es de: " + precioBase * 1.2);
      }
	  else if (destino == "Cordoba" || destino == "Cataratas") {
        alert("El precio final es de: " + precioBase * 0.9);
      }
	  else{
        alert("El precio final es de: " + precioBase * 0.8);
      }
      break;

    case "Verano":

      if (destino == "Bariloche") {
        alert("El precio final es de: " + precioBase * 0.8);
      }
	    else if (destino == "Cordoba" || destino == "Cataratas") {
        alert("El precio final es de: " + precioBase * 1.1);
      }
      else{
        alert("El precio final es de: " + precioBase * 1.2);
      }
      break;

    case "Otoño":
    case "Primavera":

      if (destino != "Cordoba") {
        alert("El precio final es de: " + precioBase * 1.1);
      } else{
        alert("El precio final es de: " + precioBase);
      }
      break;
  }
} //FIN DE LA FUNCIÓN
