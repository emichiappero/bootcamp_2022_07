var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Producto = new Schema({
  nombre: String,
  url: String,
});

module.exports = mongoose.model("productos", Producto);
