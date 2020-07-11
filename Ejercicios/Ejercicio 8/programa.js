var stdio = require("stdio");
var controladorGerente = require("./Controllers/controladorGerente");
const controladorHabitacion = require("./Controllers/controladorHabitacion");
const controladorHotel = require("./Controllers/controladorHotel");

var gerente = null;
var habitaciones = [];

function menuEntrada(callback, datos) {
  if (datos) {
    var clave = Object.keys(datos)[0];
    if (clave === "gerente") {
      gerente = datos.gerente;
    } else if (clave === "habitacion") {
      habitaciones[habitaciones.length] = datos.habitacion;
    }
  }

  console.log("1.- Formulario de un gerente");
  console.log("2.- Formulario de una habitacion");
  console.log("3.- Formulario de un Hotel");
  console.log("4.- Salir");

  stdio.question("Elige entrada: ", ["1", "2", "3", "4"], function (err, entrada) {
    if (err) return callback(menuEntrada, null);
    if (entrada === "1") {
      controladorGerente(callback, menuEntrada);
    } else if (entrada === "2") {
      controladorHabitacion(callback, menuEntrada);
    } else if (entrada === "3") {
      controladorHotel(callback, menuEntrada, gerente, habitaciones);
    }
  });
}
menuEntrada(menuEntrada, null);
