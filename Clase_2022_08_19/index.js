//Declaración, incluimos paquetes, módulos, etc
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://emichiappero:lalala123@cluster0.hl2u8.mongodb.net/BD_personas?retryWrites=true&w=majority"
  )
  .then(function (db) {
    //que sucede si todo sale bien (o sea la conección)
    console.log("Conectado a la base de datos");
  })
  .catch(function (err) {
    //que voy a hacer si algo sale mal
    console.log(err);
  });

//Configuración
app.use(bodyParser.urlencoded({ extended: true }));

//Importo el Modelo de datos
var Pers = require("./models/Personas");

//Rutas

//READ - Obtener - Buscar
app.get("/listado", async function (req, res) {
  var documentos = await Pers.find();
  console.log(documentos);
  res.sendFile(__dirname + "/index.html");
});

//CREATE - Insertar
app.post("/persona", async function (req, res) {
  var datos_form = req.body;
  var p = new Pers(datos_form);
  await p.save(); //Inserta en la base de datos
  res.redirect("../listado");
});

//UPDATE - Actualizar
app.put("/persona/:id", async function (req, res) {
  var parametro = req.params.id;
  console.log("Modificando el documento con ID = " + parametro);

  //Forma 1
  var p = await Pers.findById(parametro); //Busca un documento en Mongo con el ID XXXXX
  p.nombre = req.body.nombre;
  p.apellido = req.body.apellido;
  p.edad = req.body.edad;
  await p.save();
  res.send("Modificado correctamente");

  //Forma 2
  //  var p = await Pers.updateOne({ _id: parametro }, req.body);
  //  res.send("Modificado correctamente");
});

//DELETE - Eliminar
app.delete("/persona/:dato", async function (req, res) {
  var parametro = req.params.dato;
  console.log("Eliminando el documento con ID: " + parametro);

  var p = await Pers.findById(parametro);
  await p.remove();

  res.send("La persona se eliminó correctamente");
});

app.get("/prueba", async function (req, res) {
  var documentos = await Pers.find();
  var a = "";

  for (var i = 0; i < documentos.length; i++) {
    a = a + "<tr>";
    a = a + "<td>" + documentos[i].nombre + "</td>";
    a = a + "<td>" + documentos[i].apellido + "</td>";
    a =
      a +
      "<td> <button id='" +
      documentos[i]._id +
      "' class='eliminar'>Eliminar</button> </td>";
    a = a + "</tr>";
  }
  res.send(a);
});

//Listen
app.listen(3000, function () {
  console.log("Servidor iniciado en puerto 3000");
});
