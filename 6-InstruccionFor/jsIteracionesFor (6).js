/*
al presionar el botón pedir un número.
mostrar los numeros pares desde el 1 al número ingresado,
 y mostrar la cantidad de numeros pares encontrados.

*/


function mostrar()
{

	var numero;
	var resto;
	var i;

	numero=prompt("ingrese numero");
	numero=parseInt (numero);
	console.log(numero);

	for (i=1;i<numero;i++)
		{
			resto=i%2;

			if (resto==0)
			{
				console.log ("el numero es: "+i);
			
			}


		}			




}//FIN DE LA FUNCIÓN