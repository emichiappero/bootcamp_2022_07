var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var tarea = new Schema({
  titulo: String,
  detalle: String,
  finalizada: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("tareas", tarea);
