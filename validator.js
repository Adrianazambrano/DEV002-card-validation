const validator = {
  maskify: function (numeroValidar) {
    return numeroValidar.slice(0, -4).replace(/./g, '#') + numeroValidar.slice(-4);
   

  },

  isValid: function (numeroValidar) {

   
    //1. pasar los numeros a un array en orden inverso:
    var numeroInvertido = numeroValidar.toString().split('').reverse();
    numeroInvertido = numeroInvertido.map(numero => {
      return parseInt(numero)
    })
    //console.log('paso1', numeroInvertido)
    // 2. Operacion de posiciones pares:
    var pares = [];
    var impares = [];
    for (let i = 0; i < numeroInvertido.length; i++) {
      //console.log('index', i)

      if ((i + 1) % 2 == 0) {
        // multiplico el numero que este en la posicon par del array 
        var numeroDoble = numeroInvertido[i] * 2;
        // Descompongo el numero en dos cifras
        var numero = numeroDoble.toString().split('');
        // Sumo los numeros del numero descompuesto
        const valorInicial = 0;
        const suma = numero.reduce(
          (valorAnterior, valorActual) => parseInt(valorAnterior) + parseInt(valorActual),
          valorInicial
        );

        pares.push(suma);

        //console.log(numeroDoble) 

      } else {
        impares.push(numeroInvertido[i])
      }


    }
    console.log(pares, impares)
    //  Union de array par e impar
    var total = [...pares, ...impares]
    //  Suma del resutado final 
    const valorInicial = 0;
    const suma = total.reduce(
      (valorAnterior, valorActual) => (valorAnterior) + (valorActual),
      valorInicial
    );
    console.log(suma)

    return suma % 10 == 0;

  }

};

export default validator;
