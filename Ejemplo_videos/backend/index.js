var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");

//Conexión con Mongo
mongoose
  .connect(
    "mongodb+srv://emichiappero:lalala123@cluster0.hl2u8.mongodb.net/BD_videos?retryWrites=true&w=majority"
  )
  .then(function (bd) {
    console.log("Conectado a la base de datos");
  })
  .catch(function (err) {
    ue;
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var video = require("./models/videos");

app.get("/videos", async function (req, res) {
  var v = await video.find();
  res.send(v);
});

app.post("/insertar_video", async function (req, res) {
  var datos = req.body;
  var v = new video(datos);
  await v.save();
  res.send({ mensaje: "Guardado correctamente" });
});

app.delete("/eliminar_video/:id", async function (req, res) {
  var id_video = req.params.id;
  await video.findByIdAndRemove(id_video);
  res.send({ mensaje: "Eliminado correctamente" });
});

app.put("/modificar_video/:id", async function (req, res) {
  var id_video = req.params.id;
  await video.findByIdAndUpdate({ _id: id_video }, req.body);
  res.send({ mensaje: "Modificado correctamente" });
});

app.listen(3000, function () {
  console.log("Servidor iniciado en el puerto 3000");
});
