/* PASOS A SEGUIR:
					1- Mostrar numero obtenido en Resultado
					2- Chequear qwue el valor del numero ingresado sea correspondiente con la base indicada / array.every()/
					¿¿¿debe usarse splice () para separar el numero en un array para ser evaluado??? /
					puede hacerse usando switch al evaluar hexadecimal, por contener letras. O debe usarse if???
					3- 


*/

function CalcularPrecio () 
{
 	var numeroInicial;
	var baseInicial;
	var resultado;
	var baseFinal;
	var resto;
	var restoBinario = [ ];
	var contador=1;

	var cantidadDigitosBinarios;		//variable de prueba para constatar q la cantidad de digitos binarios sea la correcta

	restoBinario [0]="prueba";	// se pone un valor a la posicion 0, para forzar error en caso de que sea utilizada.

	

	numeroInicial=document.getElementById('numeroInicial').value;
	baseInicial=document.getElementById('baseInicial').value;
	baseFinal=document.getElementById('baseFinal').value;
	document.getElementById('resultado').value=resultado;

console.log ("nro a convertir :"+numeroInicial);//se muestra el nro inicial aqui antes de entrar a while, pq luego es modificado y no puede recuperarse


		while (numeroInicial >=1) {	restoBinario [contador] =numeroInicial%2;	

									numeroInicial= numeroInicial/2; 
									numeroInicial = parseInt(numeroInicial);
														
									contador=contador+1;
									}


									document.write("El numero binario es:   "); // imprime en el html 
													
							contador=restoBinario.length-1; // Contador toma el valor del tamaño del array y lo reduzco en uno,
															// por ser la posicion [0] cargada de antemano con "prueba" 

							console.log("cantidadDigitosBinarios:   "+contador);


		while (contador>0)
							{
document.write(+restoBinario[contador]);

							console.log (contador+" paso para nro binario;"+restoBinario [contador]);
								contador=contador-1;	}
}