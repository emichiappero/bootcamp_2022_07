var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var compra = new Schema({
  id_producto: String, //corresponde con el ID del producto (colección Productos)
  nombre_producto: String,
  precio_unitario: Number,
  cantidad: Number,
  total: Number,
  fecha: String,
});

module.exports = mongoose.model("carrito", compra);
