/*
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/



function mostrar()
{

	var numero;
	var i;

	for (i=0;i<100;i++){
							numero=prompt ("ingrese un numero");
							numero=parseInt(numero);
							console.log(numero);
							if (numero==9){break;}

						}
				console.log("Ud eligio 9!!!");
}//FIN DE LA FUNCIÓN