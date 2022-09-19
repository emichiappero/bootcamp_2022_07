//Métodos para acceder a los elementos HTML

// //Acceder a TODOS los elementos según el nombre de la etiqueta
// var parrafo = document.getElementsByTagName("p");

// //Acceder a TODOS los elementos por el atributo NAME
// var p = document.getElementsByName("miParrafo");

// //Acceder a UN elemento por su ID
// var b = document.getElementById("boton");
// console.log(b);

// //Acceder a TODOS los elmentos mediante su CLASE
// document.getElementsByClassName("nombreClase");

// var link = document.getElementById("enlace");
// console.log(link.style.color); //Accedo a una propiedad de estilo determinado
// console.log(link.className); //Accedo al nombre de la clase del elemento

var boton = document.getElementById("boton");
boton.addEventListener("click", function () {
  alert("Hicimos click en el botón");
});

var parrafo = document.getElementById("miParrafo");
parrafo.addEventListener("click", function () {
  alert("Hiciste click en el parrafo");
});

var boton_mostrar = document.getElementById("btn_mostrar");

boton_mostrar.addEventListener("click", function () {
  var nom = document.getElementById("nombre");
  alert("Hola " + nom.value);
  localStorage.setItem("algo", nom.value);
  console.log(localStorage.getItem("algo"));
});

console.log("Este es el contenido de algo: " + localStorage.getItem("algo"));

// localstorage o almacenamiento local

localStorage.setItem("edad", 37); //Guardo en el localStorage edad = 37

console.log(localStorage.getItem("edad")); //Obtengo la "variable" edad

localStorage.removeItem("edad"); //Elimino la "variable" edad

//EJERCICIO
//Guardar en un localStorage lo que escriba un usuario.
