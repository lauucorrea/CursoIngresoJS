function mostrar()
{
  let nombre1 = prompt("Ingrese el nombre del primer integrante"),
      nombre2 = prompt("Ingrese el nombre del segundo integrante"),
      peso1 = parseInt(prompt("Cuantos kg pesa " + nombre1 +"?")),
      peso2 = parseInt(prompt("Cuantos kg pesa " + nombre2 +"?")),
      sumaKilos = peso1 + peso2,
      promedioKilos = sumaKilos / 2;

      alert("Ustedes se llaman " + nombre1 + " y " + nombre2 + ", pesan " + peso1 + " y " + peso2);
      alert("Los pesos sumados forman un total de " + sumaKilos + "kg y el promedio es de "+ promedioKilos.toFixed(2) + "kg");

}
