function CalcularPrecio() {
  
  let cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);

  if(cantidadLamparas != 0){

    let precioOriginal = 35,
      finalPorLampara,
      precioFinal,
      impuesto = 1.1,
      descuento,
      impuestoBruto,
      marcaLamparas = document.getElementById("Marca").value;

    switch (cantidadLamparas) {
      case 5:
        if (marcaLamparas == "ArgentinaLuz") {
          descuento = 0.6;
        } else {
          descuento = 0.7
        }
      break;

      case 4:
        if ( marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas") {
          descuento = 0.75;
        } else {
          descuento = 0.8;
        }
      break;

      case 3:
        if (marcaLamparas == "ArgentinaLuz") {
          descuento = 0.85;
        } else if (marcaLamparas == "FelipeLamparas") {
          descuento = 0.9;
        } else {
          descuento = 0.95;
        }
      break;
      default:
        if (cantidadLamparas >= 6) {
          descuento = 0.5;
        }else{
        descuento = 1; //si son menos de 2 lamparas, no hay descuento;
        }
    }
    //calculo el valor unitario con el descuento aplicado
    // y el precio final para el ticket en el alert

    finalPorLampara = precioOriginal * descuento;
    precioFinal = cantidadLamparas * finalPorLampara;
    console.log(descuento);

    if (precioFinal >= 120) {

      precioFinal = precioFinal * impuesto;
      impuestoBruto = precioFinal * 0.1; //impuesto bruto es el 10% del valor del producto
      document.getElementById("txtIdprecioDescuento").value = "$"+ finalPorLampara + " la unidad";
      alert("IBB Usted pago $" + precioFinal.toFixed(2) + " siendo $" + impuestoBruto.toFixed(2) + " el impuesto pagado");

    }else{
      document.getElementById("txtIdprecioDescuento").value = "$"+ finalPorLampara + " la unidad";
      alert("IBB Usted pago $" + precioFinal.toFixed(2));
    }
    

  }
  else{
    alert("La cantidad de lamparas ingresadas es inferior al minimo.");
  }
  
}
