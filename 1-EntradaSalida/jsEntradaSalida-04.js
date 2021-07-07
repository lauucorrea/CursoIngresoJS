/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{	
	let valor = prompt('ingrese un nombre');
	document.getElementById("txtIdNombre").value = valor;
}

