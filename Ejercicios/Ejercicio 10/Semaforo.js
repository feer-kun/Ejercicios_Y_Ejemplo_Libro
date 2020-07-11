var events = require("events");
var util = require("util");

var Semaforo = function () {
  this.estado = 0;
  events.EventEmitter.call(this);
};

util.inherits(Semaforo, events.EventEmitter);

Semaforo.prototype.getEstado = function () {
  return this.estado;
};

Semaforo.prototype.setEstado = function (estado) {
  this.estado = estado;
  this.emit("cambiaEstado", this.estado);
};

module.exports = Semaforo;
