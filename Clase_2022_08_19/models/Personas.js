var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Creo un esquema con la estructura de datos que tendrán los documentos de esta colección
var Persona = new Schema(
  {
    nombre: String,
    apellido: String,
    edad: Number,
    adulto: {
      type: Boolean,
      default: true,
    },
  },
  { versionKey: false }
);

//exportando el módulo que acabamos de crear
module.exports = mongoose.model("Personas", Persona);
