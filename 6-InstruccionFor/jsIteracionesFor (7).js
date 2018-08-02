/*
al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado,
 y mostrar la cantidad de numeros divisores encontrados.
*/



function mostrar()
{

var numero;
var divisores;

divisores=0;

numero=prompt(numero);
numero=parseInt(numero);
console.log (numero);
for (i=1;i<=numero;i++)
						{
							resto=numero%i;

							if (resto==0){
											console.log("este numero es divisibler por: "+i);
								divisores=divisores+1;}

							}




}//FIN DE LA FUNCIÓN