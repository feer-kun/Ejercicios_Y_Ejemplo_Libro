var CambiaNaturaleza = require("./CambiaNaturaleza");
const { futimes } = require("fs");

var cambiaNaturaleza = new CambiaNaturaleza();
cambiaNaturaleza.on("get", function (request, response, next) {
  if (request.meteorologia === "Soleado") {
    response.meteorologia = "Nublado feo";
  } else if (request.meteorologia === "Nublado feo") {
    response.meteorologia = "Lluvia";
  } else if (request.meteorologia === "Lluvia") {
    response.meteorologia = "Nieve";
  } else if (request.meteorologia === "Nieve") {
    response.meteorologia = "Nublado bueno";
  } else if (request.meteorologia === "Nublado bueno") {
    response.meteorologia = "Soleado";
  }
  next(response);
});

var estadoActual = {
  meteorologia: "Soleado",
};

var estadoSiguiente = {
  meteorologia: "",
};

var i = 0;
var NCAMBIOS = 20;

function actualizaEstado(response) {
  estadoActual.meteorologia = response.meteorologia;
  estadoSiguiente.meteorologia = "";
}

console.log("El estado actual es: " + estadoActual.meteorologia + ".");
var intervalo = setInterval(function () {
  var request = estadoActual;
  var response = estadoSiguiente;
  cambiaNaturaleza.cambiaMeteorologia(request, response, actualizaEstado);

  if (i === NCAMBIOS) {
    clearInterval(intervalo);
  } else {
    console.log("El estado actual es: " + estadoActual.meteorologia + ".");
    i++;
  }
}, 1000);
