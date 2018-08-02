/*

al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"

*/



function mostrar()
{

var repeticiones = prompt("ingrese el número de repeticiones");
	repeticiones=parseInt (repeticiones);

	
for (;repeticiones>0;repeticiones--)
{
	console.log("Hola UTN FRA");
}


}//FIN DE LA FUNCIÓN