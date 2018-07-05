function mostrar()
{
  var precio;
  var descuento;
  var precioFinal;

  precio=prompt ("ingrese el precio", "coloque el precio aqui");
  descuento=prompt ("ingrese el descuento", "coloque el % de descuento aqui");

  precioFinal= precio-[(precio*descuento)/100];

//document.getElementById('elPrecioFinal').value=precioFinal;

//console.log (precioFinal);
}
