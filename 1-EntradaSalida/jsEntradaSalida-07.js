/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar()
{		
		let valNum1, valNum2, total;
		valNum1 = parseInt(document.getElementById("txtIdNumeroUno").value);
		valNum2 = parseInt(document.getElementById("txtIdNumeroDos").value); 
		total = valNum1 + valNum2;
		alert("el resultado de la suma es " + total);
}

function restar()
{
		let valNum1, valNum2, total;
		valNum1 = parseInt(document.getElementById("txtIdNumeroUno").value);
		valNum2 = parseInt(document.getElementById("txtIdNumeroDos").value); 
		total = valNum1 - valNum2;
		alert("el resultado de la resta es " + total);
}

function multiplicar()
{ 
		let valNum1, valNum2, total;
		valNum1 = parseInt(document.getElementById("txtIdNumeroUno").value);
		valNum2 = parseInt(document.getElementById("txtIdNumeroDos").value); 
		total = valNum1 * valNum2;
		alert("el resultado de la multiplicacion es " + total);
}

function dividir()
{	
		let valNum1, valNum2, total;
		valNum1 = parseInt(document.getElementById("txtIdNumeroUno").value);
		valNum2 = parseInt(document.getElementById("txtIdNumeroDos").value); 
		if(valNum2 === 0){ //soy consciente de que esta parte es una adicion mia, pero me parecio correcto aclarar que no era posible dividir por 0
			alert("no se puede dividir por 0")
		}else{
			total = valNum1 / valNum2;
			alert("el resultado de la division es " + total);
		}
		
}

