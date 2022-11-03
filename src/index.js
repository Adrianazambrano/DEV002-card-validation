

//document.addEventListener('DOMContentLoaded', function () {

import validator from './validator.js';

console.log(validator);

var formulario = document.getElementById('formulario');
var cardNumber = document.getElementById('numero');
var usuario = document.getElementById('nombre');
//console.log(cardNumber,usuario)

// Capturar datos del formlario y mostrarlos en la tarjeta:

cardNumber.addEventListener("keyup", (event) => {
    if (event.isComposing || event.keyCode === 229) {
        return;
    }
    // document.getElementById("capturarNumero").value = cardNumber.value;

});
usuario.addEventListener("keyup", (event) => {
    if (event.isComposing || event.keyCode === 229) {
        return;
    }
    document.getElementById("capturarNombre").value = usuario.value;
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    var numeroValidar = cardNumber.value;

    const validacion = validator.isValid(numeroValidar);
    const numeroOculto = validator.maskify(numeroValidar);
    document.getElementById("capturarNumero").value = numeroOculto;


    if (validacion == true) {
        document.getElementById('mensaje').innerHTML = 'Numero de tarjeta valido';
        document.getElementById('mensaje').style.color = '#008000';



    } else {
        document.getElementById('mensaje').innerHTML = 'Numero de tarjeta invalido';
        document.getElementById('mensaje').style.color = '#FF0000';
    }


    console.log(validacion, numeroOculto)
        ;
//});











}, false);




