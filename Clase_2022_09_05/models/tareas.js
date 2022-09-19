var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var miTarea = new Schema({
  titulo: String,
  detalle: String,
  fecha: String,
  finalizada: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("tareas", miTarea);
