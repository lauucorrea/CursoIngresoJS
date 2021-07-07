/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
let valNum1,valNum2,resto;
function SacarResto()
{
	valNum1=parseInt(document.getElementById("txtIdNumeroDividendo").value);
	valNum2=parseInt(document.getElementById("txtIdNumeroDivisor").value);
	if(valNum2 === 0){
		alert("no se puede dividir por 0");
	}else{
		resto = valNum1 % valNum2;
		alert("el resto es "+ resto);
	}
	
}
