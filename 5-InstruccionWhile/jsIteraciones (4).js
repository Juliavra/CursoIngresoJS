//al presionar el botón pedir un número entre 0 y 9 inclusive.





function mostrar()
{
					
		var numero;
	
	 numero = prompt("ingrese un número entre 0 y 9");


		while (numero<0 || numero >9)
			{
			//alert (numero);
			

			alert ("El numero ingesado no esta comprendido entre 0 y 9."+"Ud ingreso: "+numero);
			}		
			  

			document.getElementById('Numero').value=numero;


			}//FIN DE LA FUNCIÓN



/*

function mostrar()
{
					
		var numero;
	
	 numero = prompt("ingrese un número entre 0 y 9");


		while (numero>=0 && numero <=9)
			{
			//alert (numero);
			document.getElementById('Numero').value=numero;
			}		
			 alert ("El numero ingesado no esta comprendido entre 0 y 9."+"Ud ingreso: "+numero); 




			}//FIN DE LA FUNCIÓN

			*/
