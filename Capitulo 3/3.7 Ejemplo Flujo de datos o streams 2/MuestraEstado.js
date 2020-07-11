var EstadoMeteorologico = require("./EstadoMeteorologico");
var ReaderStream = require("./ReaderStream");
var WriterStream = require("./WriterStream");

var str = null;

var escritura = new WriterStream();
var nDatos = 0;
var datos = [];
var dato = null;

var muestraEstado = function (nuevoEstado) {
  if (nuevoEstado != null) {
    if (nuevoEstado === EstadoMeteorologico.SOLEADO) {
      dato = {
        Meteorologia: "Hace sol",
      };
    } else if (nuevoEstado === EstadoMeteorologico.NUBLADO) {
      dato = {
        Meteorologia: "Esta nueblado",
      };
    } else if (nuevoEstado === EstadoMeteorologico.LLUVIOSO) {
      dato = {
        Meteorologia: "Esta lloviendo",
      };
    } else if (nuevoEstado === EstadoMeteorologico.VENTOSO) {
      dato = {
        Meteorologia: "Hay viento",
      };
    } else if (nuevoEstado === EstadoMeteorologico.NIEVE) {
      dato = {
        Meteorologia: "Hay nieve",
      };
    }

    datos[nDatos] = dato;
    nDatos++;
  } else {
    str = new ReaderStream(datos);
    str.pipe(escritura);
  }
};
module.exports = muestraEstado;
