/*
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.

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

							if (divisores>=3)
											 {alert ("El numero NO es Primo");
												}
												else  alert ("El numero es Primo");


}//FIN DE LA FUNCIÓN