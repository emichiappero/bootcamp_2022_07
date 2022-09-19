var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://emichiappero:lalala123@cluster0.hl2u8.mongodb.net/BD_TODO?retryWrites=true&w=majority"
  )
  .then(function (db) {
    console.log("Conectado con la BD");
  })
  .catch(function (err) {
    console.log(err);
  });

//Configuramos
app.use(bodyParser.urlencoded({ extended: true }));

var path = __dirname + "/views";
app.set("views", path); //Configuramos la carpeta donde se encuentran nuestras vistas
app.set("view engine", "ejs"); //Configurar el motor de plantilla o motor de vistas (EJS)

var Tarea = require("./models/tareas");

//Rutas
app.get("/inicio", function (req, res) {
  res.render("index");
});

app.get("/listado", async function (req, res) {
  var tareas = await Tarea.find();
  console.log(tareas);
  res.render("listado", { docs: tareas });
});

app.post("/nuevaTarea", async function (req, res) {
  var datos = req.body;
  var t = new Tarea(datos);
  await t.save();
  res.redirect("/listado"); //redirecciona a la ruta listado (siempre es por GET)
});

//Listen con el puerto
app.listen(3000, function () {
  console.log("Servidor iniciado");
});
