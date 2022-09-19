var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

//Rutas
app.get("/inicio", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/usuario", function (req, res) {
  var datos_ajax = req.body;
  //res.send("Hola usuario " + datos_ajax.nombre);
  res.send({
    nombre: datos_ajax.nombre,
    edad: datos_ajax.edad,
    paretesco: datos_ajax.paretesco,
  });
});

app.listen(3000, function () {
  console.log("Servidor iniciado en el puerto 3000");
});
