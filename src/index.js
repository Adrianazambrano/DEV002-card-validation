

import validator from './validator.js';

console.log(validator);

var formulario = document.getElementById('formulario');
var cardNumber = document.getElementById('numero');
var usuario = document.getElementById('nombre');
//console.log(cardNumber,usuario)

// Capturar nombre de usuario del formlario y mostrarlo en la tarjeta:

usuario.addEventListener("keyup", (event) => {
    if (event.isComposing || event.keyCode === 229) {
        return;
    }
    document.getElementById("capturarNombre").value = usuario.value;
});
// tomo los resultados de validator y aplico las condiciones :


formulario.addEventListener('submit', (event) => {
    event.preventDefault();//prevenir el funcionamiento del formulario, y no recarge otra pagina 
    var numeroValidar = cardNumber.value;

    //  if(numeroValidar == null){
    //      return alert('Ingresa numero de tarjeta')
      
    //  } 
   
    const validacion = validator.isValid(numeroValidar);
    const numeroOculto = validator.maskify(numeroValidar);
    document.getElementById("capturarNumero").value = numeroOculto;


    if (validacion == true  ) {
        document.getElementById('mensaje').innerHTML = 'Numero de tarjeta valido';
        document.getElementById('mensaje').style.color = '#008000';



    } else {
        document.getElementById('mensaje').innerHTML = 'Numero de tarjeta invalido';
        document.getElementById('mensaje').style.color = '#FF0000';
    }


    console.log(validacion, numeroOculto)
        ;
} 

    

, false);




