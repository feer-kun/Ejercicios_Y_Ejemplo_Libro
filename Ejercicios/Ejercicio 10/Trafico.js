var Semaforo = require("./Semaforo");
var VistaSemaforo = require("./VistaSemaforo");
var EstadoSemaforo = require("./EstadoSemaforo");

var semaforo = new Semaforo();

semaforo.on("cambiaEstado", function (estado) {
  VistaSemaforo(estado);
});

semaforo.setEstado(EstadoSemaforo.ROJO);

setInterval(function () {
  var nuevoEstado =
    Math.floor(Math.random() * (EstadoSemaforo.VERDE - EstadoSemaforo.ROJO + 1)) +
    EstadoSemaforo.ROJO;
  semaforo.setEstado(nuevoEstado);
}, 1000);
