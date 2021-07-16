function mostrar() {
  let hora = parseInt(document.getElementById("txtIdHora").value);

  switch (true)
  {
    case hora >= 7 && hora <= 11:
      alert("es de mañana");
      break;
    case hora >= 12 && hora <= 19:
      alert("es de tarde");
      break;
    case (hora >= 20 && hora <= 24) || (hora >= 0 && hora <= 6):
      alert("es de noche");
      break;
    default:
      alert("la hora no existe");
  }
} //FIN DE LA FUNCIÓN
