var events = require("events");
var util = require("util");

var CambiaNaturaleza = function () {
  events.EventEmitter.call(this);
};

util.inherits(CambiaNaturaleza, events.EventEmitter);

CambiaNaturaleza.prototype.cambiaMeteorologia = function (request, response, next) {
  this.emit("get", request, response, next);
};

module.exports = CambiaNaturaleza;
