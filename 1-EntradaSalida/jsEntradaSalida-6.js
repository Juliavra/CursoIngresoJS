/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
  var numeroUno;
  var numeroDos;
  var resultadoSuma;
  
  numeroUno=document.getElementById('numeroUno').value;
  numeroUno=parseInt (numeroUno);
  
  numeroDos=document.getElementById('numeroDos').value;
  numeroDos=parseInt (numeroDos);
  
  resultadoSuma=numeroUno+numeroDos;
  
alert ("el resultado de la suma es "+ resultadoSuma); 
  
  
  //console.log ( numeroUno);
  //console.log ( numeroDos);
  
}

