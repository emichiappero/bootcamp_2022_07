var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//Conexión con BD
mongoose
  .connect(
    "mongodb+srv://emichiappero:lalala123@cluster0.hl2u8.mongodb.net/BD_ejemplo_EJS?retryWrites=true&w=majority"
  )
  .then(function (bd) {
    console.log("Conectado con la Base de Datos");
  })
  .catch(function (err) {
    console.log(err);
  });

//Configuración
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs"); //Todas las vistas la va a manejar el paquete EJS
app.set("views", __dirname + "/views"); //Especifico dónde están mis archivos de "HTML" (ejs)

//Modelo
var Task = require("./models/tareas");

//Rutas

// Rutas Insertar
app.get("/home", function (req, res) {
  var titulo_pagina = "Nueva Tarea";
  var mostrar = "show_form";
  res.render("main", {
    tit: titulo_pagina,
    show: mostrar,
  });
});

app.post("/newTask", async function (req, res) {
  var datos = req.body;
  var t = new Task(datos);
  await t.save();
  res.redirect("/tasks"); //Esto me redirige a una ruta específica (GET)
});

// Rutas Listado
app.get("/tasks", async function (req, res) {
  var titulo_pagina = "Listado de Tareas";
  var mostrar = "show_table";
  var list_tasks = await Task.find(); //Buscamos todos los documentos

  res.render("main", {
    tit: titulo_pagina,
    show: mostrar,
    docs: list_tasks,
  });
});

// Ruta Eliminar
app.get("/deleteTask/:id", async function (req, res) {
  var id_task = req.params.id;
  await Task.findByIdAndRemove(id_task); //Buscar el documento por ID y eliminarlo
  res.redirect("/tasks");
});

// Ruta Modificar (sólo el campo finalizada)
app.get("/updateTask/:id", async function (req, res) {
  var id_task = req.params.id;

  //Forma 1
  var t = await Task.findById(id_task);
  t.finalizada = !t.finalizada;
  await t.save();

  //Forma 2
  //var t = await Task.findById(id_task);
  //await Task.updateOne({ _id: id_task }, { finalizada: !t.finalizada });

  res.redirect("/tasks");
});

app.post("/updateTask", async function (req, res) {
  var datos = req.body;
  var t = await Task.findByIdAndUpdate({ _id: datos._id }, datos);
  res.redirect("/tasks");
});

//Ruta Detalle de tarea
app.get("/detailTask/:id", async function (req, res) {
  var id_task = req.params.id;
  var t = await Task.findById(id_task);

  res.render("main", {
    tit: "Detalle de Tarea",
    show: "show_detail",
    task: t,
  });
});

//Puerto del servidor
app.listen(3000, function () {
  console.log("Servidor iniciado");
});
