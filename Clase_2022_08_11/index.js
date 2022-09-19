// Servidor utilizando NODEJS (puro)
/*
var http = require("http");
var fs = require("fs");

//creamos un objeto con nuestro servidor utilizando el módulo HTTP
http.createServer(function (req, res) {
    //preparamos la cabecera de la respuesta del Servidor
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Access-Control-Allow-Origin": "*",
    });

    //tomamos el archivo HTML con nuestro módulo fs
    var readStream = fs.createReadStream(__dirname + "/index.html");

    //enviamos el archivo HTML al cliente
    readStream.pipe(res);
  }).listen(3000);

console.log("Este es nuestro servidor en el puerto http://localhost:3000");


// Cliente hace peticion a http://localhost:3000 del tipo GET
// El servidor "escucha" esa petición y devuelve un archivo llamado index.html
*/

// Servidor utilizando ExpressJS
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

//Rutas

//GET http://localhost:3000/inicio
app.get("/inicio", function (req, res) {
  console.log("Recibioms petición del cliente");
  res.sendFile(__dirname + "/index.html");
});

//POST http://localhost:3000/formulario
app.post("/formulario", function (req, res) {
  var dato = req.body.nombre; //capturar el dato enviado dede el formulario
  console.log(dato);
  res.send("Gracias por enviarnos tu nombre " + dato);
});

app.listen(3000, function () {
  console.log("Yo, el Servidor, estoy escuchando el puerto 3000");
});
