//FUNCIONES

function suma(x, y) {
  var resultado = x + y;

  if (resultado < 50) {
    return resultado;
  } else {
    return "Algo salio mal";
  }
}

var operacion = suma(100, 5);

//console.log(operacion);

function mayuscula(texto) {
  var may = texto.toUpperCase();
  return may;
}

function minuscula(texto) {
  var min = texto.toLowerCase();
  return min;
}

var nombre = "emiLIano";
console.log(mayuscula(nombre));
console.log(minuscula(nombre));

/* 

Según 2 numeros ingraados por el usuario, crear la/las funciones para calcular:
- suma
- resta
- multiplicacion
- división

NOTA: la operación matemática, también la indica el usuario
NOTA2: Utilizando funciones, parametros y returns

*/
