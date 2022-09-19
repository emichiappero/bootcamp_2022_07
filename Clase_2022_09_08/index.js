//Declaraciones paquetes
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var parserBody = require("body-parser");
const bodyParser = require("body-parser");

//Conectar con BD
mongoose
  .connect(
    "mongodb+srv://emichiappero:lalala123@cluster0.hl2u8.mongodb.net/ecommerce?retryWrites=true&w=majority"
  )
  .then(function (bd) {
    console.log("Conectado con la Base de Datos");
  })
  .catch(function (err) {
    console.log(err);
  });

//Configuraciones
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", __dirname + "/src/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/src/imagenes"));

//Modelos
var Prod = require("./src/models/productos");
var Carrito = require("./src/models/carrito");

async function total_carrito() {
  var t = await Carrito.find();
  console.log(t.length);
  return t.length;
}

//Rutas
app.get("/", async function (req, res) {
  var p = await Prod.find();
  res.render("index", {
    productos: p,
    show_mensaje: false,
    contador: total_carrito(),
  });
});

app.get("/producto/:productoID", async function (req, res) {
  var id = req.params.productoID;
  var producto_seleccionado = await Prod.findById(id);
  res.render("detalle", {
    producto: producto_seleccionado,
    contador: total_carrito(),
  });
});

app.post("/comprar", async function (req, res) {
  // var cantidad = req.body.cantidad;
  // var nombre_producto = req.body.nombre_producto;
  // var id_producto = req.body.id_producto;
  // var precio_unitario = req.body.precio_unitario;

  //Destructuring (hace exactamente lo mismo  que arriba)
  var { id_producto, cantidad, precio_unitario, nombre_producto } = req.body;

  var c = {
    id_producto: id_producto,
    nombre_producto: nombre_producto,
    precio_unitario: parseInt(precio_unitario),
    cantidad: parseInt(cantidad),
    total: parseInt(precio_unitario) * parseInt(cantidad),
    fecha: new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""), //fecha actual en formato yyyy-mm-dd hh:ii:ss
  };

  var carrito = new Carrito(c);
  await carrito.save();

  //Buscamos todos los productos y los enviamos al inicio
  var p = await Prod.find();
  res.render("index", {
    productos: p,
    show_mensaje: true,
    contador: total_carrito(),
  });
});

app.get("/carrito", async function (req, res) {
  var c = await Carrito.find();

  var url = "https://wa.me/5211234567890?text=Este%20es%20mi%20pedido%20.....";

  res.render("carrito", {
    pedido: c,
    url_wa: url,
    contador: total_carrito(),
  });
});

app.get("/eliminar/:id_producto", async function (req, res) {
  var id = req.params.id_producto;
  await Carrito.findByIdAndRemove(id);
  res.redirect("/carrito");
});

app.get("/categoria/:cat", async function (req, res) {
  var cate = req.params.cat;
  var prods = await Prod.find({ categoria: cate });

  res.render("index", {
    productos: prods,
    show_mensaje: false,
    contador: total_carrito(),
  });
});

//Servidor
app.listen(3000, function () {
  console.log("Servidor iniciado en el puerto 3000");
});
