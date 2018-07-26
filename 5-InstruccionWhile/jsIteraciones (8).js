/*Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='s';

while (respuesta==="s")

	{

		numero = prompt("ingrese un numero");
		numero= parseInt (numero);

		if  (numero<0){ negativo=negativo* numero;	}

		respuesta=prompt("desea continuar?");
		}


///TERMINAR LA PARTE DE LOS POSITIVOS


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN

/*


while (respuesta==="s")

	{

		numero = prompt("ingrese un numero");
		numero= parseInt (numero);
		acumulador=acumulador+numero;
		contador=contador+1;
		respuesta=prompt("desea continuar?");
		}

*/