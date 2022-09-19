var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var video = new Schema({
  nombre: String,
  url_video: String,
  fuente: String,
  categoria: String,
});

module.exports = mongoose.model("videos", video);
