var btn1 = document.getElementById("btn_guardar");
btn1.addEventListener("click", function () {
  var txt = document.getElementById("inp_texto");
  localStorage.setItem("texto", txt.value);
  txt.value = "";
  mostrar_alert("Texto guardado correctamente");
});

var btn2 = document.getElementById("btn_mostrar");
btn2.addEventListener("click", function () {
  var txt_guardado = localStorage.getItem("texto");
  mostrar_alert("El último texto guardado es: " + txt_guardado);
});

function mostrar_alert(mensaje) {
  alert(mensaje);
}

//-----------------------

var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");

var suma = document.getElementById("btn_suma");
var resta = document.getElementById("btn_resta");

var h3 = document.getElementById("resultado");

suma.addEventListener("click", function () {
  operacion("suma"); //llamo a mi función operacion y le paso "suma" como argumento
});

resta.addEventListener("click", function () {
  operacion("resta");
});

function operacion(op) {
  var res = 0;

  if (op == "suma") {
    res = parseInt(n1.value) + parseInt(n2.value);
  } else {
    if (op == "resta") {
      res = parseInt(n1.value) - parseInt(n2.value);
    }
  }
  h3.innerText = res;
}

var a = document.getElementsByClassName("a");

a.onmouseover = function (event) {
  const target = event.target;
  console.log(target.innerText);
};
