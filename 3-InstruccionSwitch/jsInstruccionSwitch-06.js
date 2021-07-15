function mostrar() {
  let varHora = parseInt(document.getElementById("txtIdHora").value);

  switch (true)
  {
    case varHora >= 7 && varHora <= 11:
      alert("es de mañana");
      break;
    case varHora >= 12 && varHora <= 19:
      alert("es de tarde");
      break;
    case (varHora >= 20 && varHora <= 24) || (varHora >= 0 && varHora <= 6):
      alert("es de noche");
      break;
    default:
      alert("la hora no existe");
  }
} //FIN DE LA FUNCIÓN
