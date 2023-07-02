//punto numero uno

//crear la funcion y invocar el parametro indicado
function next_pal(numero) {
    numero = numero + 1; 
    // se crea la funcion que hace la sumatoria para dar como resultado el numero palindromo

    while (!esPalindromo(numero.toString())) {
      numero++; 
      //Se incrementar el número hasta encontrar un palíndromo
    }

    return numero;
  }

  function esPalindromo(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }

  // Ejemplo del ejercicio
  const numeroInicial = 3443
  const siguientePalindromo = next_pal(numeroInicial);
  console.log("El siguiente numero polindromo " + numeroInicial + " es: " + siguientePalindromo);