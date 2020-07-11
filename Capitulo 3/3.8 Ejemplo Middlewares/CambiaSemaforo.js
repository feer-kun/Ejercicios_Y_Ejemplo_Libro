var events = require("events");
var util = require("util");

var CambiaSemaforo = function () {
  events.EventEmitter.call(this);
};

util.inherits(CambiaSemaforo, events.EventEmitter);

CambiaSemaforo.prototype.cambiaColor = function (request, response, next) {
  this.emit("get", request, response, next);
};

module.exports = CambiaSemaforo;
