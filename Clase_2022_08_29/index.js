var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose
  .connect(
    "mongodb+srv://emichiappero:lalala123@cluster0.hl2u8.mongodb.net/BD_nueva?retryWrites=true&w=majority"
  )
  .then(function (db) {
    console.log("Conectado con la BD");
  })
  .catch(function (err) {
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("imagenes"));

var Prods = require("./models/productos");

app.get("/inicio", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/productos", async function (req, res) {
  var busqueda = await Prods.find();
  var tabla = "";

  for (var i = 0; i < busqueda.length; i++) {
    tabla = tabla + "<tr>";
    tabla =
      tabla +
      "<td><a href='/producto/" +
      busqueda[i]._id +
      " '>" +
      busqueda[i].nombre +
      "</a> </td>";
    tabla =
      tabla +
      "<td>" +
      "<img src='" +
      busqueda[i].url +
      "' width='100px' />" +
      "</td>";
    tabla = tabla + "</tr>";
  }

  res.send(tabla);
});

app.get("/producto/:id", async function (req, res) {
  res.sendFile(__dirname + "/detalle.html");
});

app.post("/producto/:id", async function (req, res) {
  var identificador = req.params.id;
  var busqueda = await Prods.findById(identificador);
  res.send(busqueda);
});

app.listen(3000, function () {
  console.log("Nuestro servidor está iniciado");
});
