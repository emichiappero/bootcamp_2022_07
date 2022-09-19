$(document).ready(function () {
  $("#nombre").change(function () {
    $("#txt_nombre").text($(this).val());
  });

  $("#imprimir").click(function () {
    window.print();
  });
});

//Crear un formulario con 5 campos (input, textarea, select, checkbox, radio, etc)
// Cuando se haga click en el boton submit:
// - Cancelar acción por defecto
// - Mostrar en un h3 todos los valores de los campos
