/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


  
function sumar()
{	
	var numeroUno;
  	var numeroDos;

  	numeroUno=document.getElementById('numeroUno').value;
  	numeroDos=document.getElementById('numeroDos').value;
  	numeroUno=parseInt (numeroUno);
  	numeroDos=parseInt (numeroDos);

	var suma;
 	suma=numeroUno+numeroDos;
	alert ("la suma es: "+suma);
}

function restar()
{
	var numeroUno;
  	var numeroDos;

  	numeroUno=document.getElementById('numeroUno').value;
  	numeroDos=document.getElementById('numeroDos').value;
  	numeroUno=parseInt (numeroUno);
  	numeroDos=parseInt (numeroDos);

	var resta;
 	resta=numeroUno-numeroDos;
	alert ("la resta es: "+resta);
	
	
}

function multiplicar()
{ 
	var numeroUno;
  	var numeroDos;

  	numeroUno=document.getElementById('numeroUno').value;
  	numeroDos=document.getElementById('numeroDos').value;
  	numeroUno=parseInt (numeroUno);
  	numeroDos=parseInt (numeroDos);

	var multiplicacion;
 	multiplicacion=numeroUno*numeroDos;
	alert ("la multiplicacion es: "+multiplicacion);
}

function dividir()
{
	var numeroUno;
  	var numeroDos;

  	numeroUno=document.getElementById('numeroUno').value;
  	numeroDos=document.getElementById('numeroDos').value;
  	numeroUno=parseInt (numeroUno);
  	numeroDos=parseInt (numeroDos);

	var division;
 	division=numeroUno/numeroDos;
	alert ("la division es: "+division);
}



/*
  var numeroUno;
  var numeroDos;

  numeroUno=document.getElementById('numeroUno').value;
  numeroDos=document.getElementById('numeroDos').value;
  numeroUno=parseInt (numeroUno);
  numeroDos=parseInt (numeroDos);
  
function sumar()
{	
	var suma;
 	suma=numeroUno+numeroDos;
	alert ("la suma es: "+suma);
}

function restar()
{
	var resta;
 	resta=numeroUno-numeroDos;
	alert ("la resta es: "+resta);
	
}

function multiplicar()
{ 
	var multiplicacion;
 	multiplicacion=numeroUno*numeroDos;
	alert ("la multiplicacion es: "+multiplicacion);
}

function dividir()
{
	var division;
 	division=numeroUno/numeroDos;
	alert ("la division es: "+division);
}

*/