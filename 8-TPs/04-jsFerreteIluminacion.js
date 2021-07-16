function CalcularPrecio() {
  let precioOriginal = 35,
    precioFinal,
    impuesto = 1.1,
    precioFinalImpuesto,
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value),
    marcaLamparas = document.getElementById("Marca").value;

  if (cantidadLamparas >= 6) {
    precioFinal = cantidadLamparas * precioOriginal * 0.5;
  }

  switch (cantidadLamparas) {
    case 5:
      if (marcaLamparas == "ArgentinaLuz") {
        precioFinal = cantidadLamparas * precioOriginal * 0.6;
      } else {
        precioFinal = cantidadLamparas * precioOriginal * 0.7;
      }
      break;

    case 4:
      if ( marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas") {
        precioFinal = cantidadLamparas * precioOriginal * 0.75;
      } else {
        precioFinal = cantidadLamparas * precioOriginal * 0.8;
      }
      break;

    case 3:
      if (marcaLamparas == "ArgentinaLuz") {
        precioFinal = cantidadLamparas * precioOriginal * 0.85;
      } else if (marcaLamparas == "FelipeLamparas") {
        precioFinal = cantidadLamparas * precioOriginal * 0.9;
      } else {
        precioFinal = cantidadLamparas * precioOriginal * 0.95;
      }
  }

  if (precioFinal >= 120) {
    precioFinal = precioFinal * impuesto;
    precioFinalImpuesto = precioFinal * 0.1;
    alert("IBB Usted pago $" + precioFinal + " siendo $" + precioFinalImpuesto + " el impuesto pagado");
  }

  document.getElementById("txtIdprecioDescuento").value = precioFinal;
}
