/*Pedir por prompt el precio y el porcentaje de descuento, mostrar: 
1-El descuento en dinero, 
2-El precio con el descuento , 
3-El IVA 
todos los anteriores e un solo alert 
4-Y solo el precio con descuento más el IVA por id .*/



function mostrar()
{

	var precio;
	var descuento;
	var iva;
	var totalDescuento;
	var precioFinal;


	precio= prompt ("ingrese el precio: ");
	descuento= prompt ("ingrese el porcentaje de descuento: ");
	iva=(precio*21)/100;
	totalDescuento=(precio*descuento)/100;

	precioFinal=precio-descuento
	alert ("El precio es: "+precio + "   El descuento es: "+ totalDescuento + "     El IVA es: "+iva);

	precioFinal=document.getElementById('elPrecioFinal').value;

}
