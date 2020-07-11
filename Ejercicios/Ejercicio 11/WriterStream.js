var Stream = require("stream");
var util = require("util");
var fs = require("fs");

var WriterStream = function () {
  this._cadenaRecibida = "";
  Stream.Writable.call(this);
  this._write = function (datos, _, cbFuncion) {
    this._cadenaRecibida += datos;
    console.log("Recibimos datos...");
    cbFuncion();
  };

  this.on("finish", function () {
    fs.writeFile("salida.txt", this._cadenaRecibida, function () {});
  });

  this.on("drain", function () {
    console.log("Preparados para recibir datos tras buffer colapsado");
  });

  this.on("error", function () {
    console.log("Se ha producido un error");
  });
};

util.inherits(WriterStream, Stream.Writable);
module.exports = WriterStream;
