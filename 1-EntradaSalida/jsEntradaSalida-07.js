/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
let valNum1;
let valNum2;
let total;
function sumar()
{		
		valNum1 = parseInt(txtIdNumeroUno.value);
		valNum2 = parseInt(txtIdNumeroDos.value); 
		total = valNum1 + valNum2;
		alert("el resultado de la suma es " + total);
}

function restar()
{
		valNum1 = parseInt(txtIdNumeroUno.value);
		valNum2 = parseInt(txtIdNumeroDos.value); 
		total = valNum1 - valNum2;
		alert("el resultado de la resta es " + total);
}

function multiplicar()
{ 
		valNum1 = parseInt(txtIdNumeroUno.value);
		valNum2 = parseInt(txtIdNumeroDos.value); 
		total = valNum1 * valNum2;
		alert("el resultado de la multiplicacion es " + total);
}

function dividir()
{	
		valNum1 = parseInt(txtIdNumeroUno.value);
		valNum2 = parseInt(txtIdNumeroDos.value); 
		if(valNum2 === 0){ //soy consciente de que esta parte es una adicion mia, pero me parecio correcto aclarar que no era posible dividir por 0
			alert("no se puede dividir por 0")
		}else{
			total = valNum1 / valNum2;
			alert("el resultado de la division es " + total);
		}
		
}

