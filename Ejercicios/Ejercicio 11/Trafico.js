var Semaforo = require("./Semaforo");
var VistaSemaforo = require("./VistaSemaforo");
var EstadoSemaforo = require("./EstadoSemaforo");

var N_ESTADOS = 25;

var semaforo = new Semaforo();

semaforo.on("cambiaEstado", function (estado) {
  VistaSemaforo(estado);
});

var i = 1;
semaforo.setEstado(EstadoSemaforo.ROJO);
console.log("Estado " + i + "\n");
var intervalo = setInterval(function () {
  var nuevoEstado =
    Math.floor(Math.random() * (EstadoSemaforo.VERDE - EstadoSemaforo.ROJO + 1)) +
    EstadoSemaforo.ROJO;
  semaforo.setEstado(nuevoEstado);
  i++;
  console.log("Estado " + i + "\n");
  if (i === N_ESTADOS) {
    semaforo.setEstado(null);
    clearInterval(intervalo);
  }
}, 500);
