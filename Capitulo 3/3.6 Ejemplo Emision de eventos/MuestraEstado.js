var EstadoMeteorlogico = require("./EstadoMeteorologico");

var muestraEstado = function (nuevoEstado) {
  if (nuevoEstado === EstadoMeteorlogico.SOLEADO) {
    console.log("El tiempo esta soleado\n");
  } else if (nuevoEstado === EstadoMeteorlogico.NUBLADO) {
    console.log("EL tiempo esta nublado\n");
  } else if (nuevoEstado === EstadoMeteorlogico.LLUVIOSO) {
    console.log("El tiempo esta ventoso\n");
  } else if (nuevoEstado === EstadoMeteorlogico.NIEVE) {
    console.log("Hay nieve\n");
  } else {
    console.log("No hay clima");
  }
};

module.exports = muestraEstado;
