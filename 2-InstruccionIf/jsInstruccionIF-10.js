
function mostrar()
{
	let	randNum = Math.random() * (10 - 1) + 1;

	if(randNum >= 9 && randNum <= 10){
		alert ("EXCELENTE, tu nota es:" + randNum.toFixed(2));
	}else if(randNum > 4 && randNum < 9){
		alert ("APROBO, tu nota es: " + randNum.toFixed(2));
	}else{
		alert("Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN