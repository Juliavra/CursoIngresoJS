/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
  var numeroUno;
  var numeroDos;
  var resultadoSuma;
  
  document.getElementById('numeroUno').value=numeroUno;
  numeroUno=parseInt (numeroUno);
  
  document.getElementById('numeroDos').value=numeroDos;
  numeroDos=parseInt (numeroDos);
  
  resultadoSuma=numeroUno+numeroDos;
  
alert ("el resultado de la suma es "+ resultadoSuma); 
  
  
  //console.log ( numeroUno);
  //console.log ( numeroDos);
  
}

