var CambiaSemaforo = require("./CambiaSemaforo");

var cambiaSemaforo = new CambiaSemaforo();

cambiaSemaforo.on("get", function (request, response, next) {
  if (request.color === "Rojo") {
    response.color = "Verde";
  } else if (request.color === "Verde") {
    response.color = "Ambar";
  } else if (request.color === "Ambar") {
    response.color = "Rojo";
  }
  next(response);
});

var estadoActual = {
  color: "Rojo",
};

var estadoSiguiente = {
  color: "",
};

var i = 0;
var NCAMBIOS = 9;

function actualizaEstado(response) {
  estadoActual.color = response.color;
  estadoSiguiente.color = "";
}

var intervalo = setInterval(function () {
  var request = estadoActual;
  var response = estadoSiguiente;
  cambiaSemaforo.cambiaColor(request, response, actualizaEstado);

  if (i == NCAMBIOS) {
    clearInterval(intervalo);
  } else {
    console.log("El estado actual es: " + estadoActual.color + ".");
    i++;
  }
}, 1000);
