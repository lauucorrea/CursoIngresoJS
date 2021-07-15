function mostrar() {
  let estacionMes = document.getElementById("txtIdEstacion").value,
    destino = document.getElementById("txtIdDestino").value,
    precioBase = 15000;

  switch (estacionMes) {
    case "Invierno":

      if (destino == "Bariloche") {
        alert("El precio final es de: " + precioBase * 1.2);
      }
	  else if (destino == "Cordoba") {
        alert("El precio final es de: " + (precioBase - precioBase * 0.1));
      }
	  else if (destino == "Mar del plata") {
        alert("El precio final es de: " + (precioBase - precioBase * 0.2));
      }
      break;

    case "Verano":

      if (destino == "Bariloche" || destino == "Mar del plata") {
        alert("El precio final es de: " + (precioBase - precioBase * 0.2));
      }
	  else if (destino == "Cordoba" || destino == "Cataratas") {
        alert("El precio final es de: " + precioBase * 1.1);
      }
      break;

    case "Otoño":
    case "Primavera":

      if (destino == "Bariloche" || destino == "Cataratas" || destino == "Mar del plata") {
        alert("El precio final es de: " + precioBase * 1.1);
      } else{
        alert("El precio final es de: " + precioBase);
      }
      break;
  }
} //FIN DE LA FUNCIÓN
