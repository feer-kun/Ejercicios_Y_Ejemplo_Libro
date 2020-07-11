var events = require("events");
var util = require("util");

var Meteorologia = function () {
  this.estado = 0;
  events.EventEmitter.call(this);
};

util.inherits(Meteorologia, events.EventEmitter);

Meteorologia.prototype.getEstado = function () {
  return this.estado;
};

Meteorologia.prototype.setEstado = function (estado) {
  this.estado = estado;
  this.emit("cambiaEstado", this.estado);
};

module.exports = Meteorologia;
