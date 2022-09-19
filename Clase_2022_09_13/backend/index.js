var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");

//BD = BD_ejemplo_EJS
//Coleccion = tareas
// datos = titulo, detalle, fecha, finalizada
mongoose
  .connect(
    "mongodb+srv://emichiappero:lalala123@cluster0.hl2u8.mongodb.net/BD_ejemplo_EJS?retryWrites=true&w=majority"
  )
  .then(function (bd) {
    console.log("Conetado con la Base de Datos");
  })
  .catch(function (err) {
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Permite recibir peticiones de un cliente que este en otro dominio o puerto
app.use(cors());

var Tarea = require("./models/tareas");

app.get("/tareas", async function (req, res) {
  var t = await Tarea.find();
  res.send(t);
});

app.listen(3000, function () {
  console.log("Servidor iniciado en el puerto 3000");
});
