var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var prod = new Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  categoria: String,
  stock: Number,
  carrusel: Array,
});

module.exports = mongoose.model("productos", prod);
