var stdio = require("stdio");
var Habitacion = require("../Class/Habitacion");

var controladorHabitacion = (callback, parametroCallback) => {
  var planta = "";
  var numeroCamas = "";
  var telefono = "";

  stdio.question("Intruduce la planta de la habitacion: ", (err, plantaHabitacion) => {
    if (err) return callback(parametroCallback);
    planta = plantaHabitacion;
    planta = planta.toUpperCase();

    stdio.question(
      "Introduce el numero de camas de la habitacion",
      (err, numeroCamasHabitacion) => {
        if (err) return callback(parametroCallback);
        numeroCamas = numeroCamasHabitacion;

        stdio.question(
          "Ingresa el numero de telefono de la habitacion",
          (err, telefonoHabitacion) => {
            if (err) return callback(parametroCallback);
            telefono = telefonoHabitacion;

            var habitacion = Habitacion(planta, numeroCamas, telefono);

            muestraHabitacion(habitacion, (valido) => {
              if (valido) {
                return callback(parametroCallback, {
                  habitacion: habitacion,
                });
              } else {
                return callback(parametroCallback, null);
              }
            });
          }
        ); //question telefono
      }
    ); //question numeroCamas
  }); //question Planta
}; //End controladorHabitacion

function muestraHabitacion(habitacion, callback) {
  var comprobacionTelefono = habitacion.checkCampo("telefono");
  var telefonoCorrecto = comprobacionTelefono();

  console.log("La planta de la habitacion es: " + habitacion.getPlanta() + ".");
  console.log("El numero de camas es: " + habitacion.getNumeroCamas() + ".");
  console.log("el numero telefonico es: " + habitacion.getTelefono() + ".");

  if (telefonoCorrecto) {
    console.log("El formato del telefono es correcto");
  } else {
    console.log("El formato del telefono no es correcto");
  }

  stdio.question("pulsa intro para continuar ...", function () {
    if (telefonoCorrecto && numeroDocumentoCorrecto) {
      callback(true);
    } else {
      callback(false);
    }
  });
} //End muestraHabitacion

module.exports = controladorHabitacion;
