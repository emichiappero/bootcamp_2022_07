$(document).ready(function () {
  $("#btn").click(function () {
    var texto = $("#tarea").val();
    $("#lista").append("<li>" + texto + " </li>");
    $("#tarea").val("");
  });
});

//Según un texto ingresado por el usario (en un input), agregar un item en
//la lista
