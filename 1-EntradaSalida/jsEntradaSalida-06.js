/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	valueNumero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	valueNumero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	alert(valueNumero1+valueNumero2);
}

