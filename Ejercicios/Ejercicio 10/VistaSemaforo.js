var EstadoSemaforo = require("./EstadoSemaforo");

var vistaSemaforo = function (nuevoEstado) {
  if (nuevoEstado === EstadoSemaforo.ROJO) {
    console.log("El semaforo esta en ROJO \n");
  } else if (nuevoEstado === EstadoSemaforo.AMBAR) {
    console.log("El semaforo esta en AMBAR \n");
  } else if (nuevoEstado === EstadoSemaforo.VERDE) {
    console.log("El semaforo esta en VERDE \n");
  }
};

module.exports = vistaSemaforo;
