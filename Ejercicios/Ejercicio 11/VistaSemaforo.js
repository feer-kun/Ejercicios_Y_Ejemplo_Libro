var EstadoSemaforo = require("./EstadoSemaforo");
var ReaderStream = require("./ReaderStream");
var WriterStream = require("./WriterStream");

var str = null;
var escritura = new WriterStream();
var nDatos = 0;
var datos = [];
var dato = null;

var vistaSemaforo = function (nuevoEstado) {
  if (nuevoEstado != null) {
    if (nuevoEstado === EstadoSemaforo.ROJO) {
      dato = {
        Semaforo: "Rojo",
      };
    } else if (nuevoEstado === EstadoSemaforo.AMBAR) {
      dato = {
        Semaforo: "Ambar",
      };
    } else if (nuevoEstado === EstadoSemaforo.VERDE) {
      dato = {
        Semaforo: "Verde",
      };
    }

    datos[nDatos] = dato;
    nDatos++;
  } else {
    str = new ReaderStream(datos);
    str.pipe(escritura);
  }
};

module.exports = vistaSemaforo;
