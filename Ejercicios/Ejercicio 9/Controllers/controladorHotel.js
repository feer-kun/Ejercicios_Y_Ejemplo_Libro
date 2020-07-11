var stdio = require("stdio");
var Habitacion = require("../Class/Hotel");

var controladorHotel = (callback, parametroCallback, gerente, habitaciones) => {
  var nombre = "";
  var ciudad = "";
  var direccion = "";
  var telefono = "";
  var sitioWeb = "";

  stdio.question("Introduce el nombre del Hotel: ", (err, nombreHotel) => {
    if (err) return callback(parametroCallback);
    nombre = nombreHotel;
    nombre = nombre.toUpperCase();

    stdio.question("Ingrese la ciudad del hotel: ", (err, ciudadHotel) => {
      if (err) return callback(parametroCallback);
      ciudad = ciudadHotel;
      ciudad = ciudad.toUpperCase();

      stdio.question("Ingrese la direcion del hotel: ", (err, direccionHotel) => {
        if (err) return callback(parametroCallback);
        direccion = direccionHotel;
        direccion = direccion.toUpperCase();

        stdio.question("Ingrese telefono del hotel: ", (err, telefonoHotel) => {
          if (err) return callback(parametroCallback);
          telefono = telefonoHotel;

          stdio.question("Ingrese sitioweb", (err, sitioWebHotel) => {
            sitioWeb = sitioWebHotel;

            var hotel = Hotel(nombre, ciudad, direccion, telefono, sitioWeb);
            hotel.setGerente(gerente);
            hotel.setHabitaciones(habitaciones);

            muestraHotel(hotel, () => {
              return callback(parametroCallback);
            });
          });
        });
      });
    });
  });
};

function muestraHotel(hotel, callback) {
  if (hotel) {
    var gerente = hotel.getGerente();
    var habitaciones = hotel.getHabitaciones();

    var comprobacionTelefono = hotel.checkCampo("telefono");
    var comprobacionSitioWeb = hotel.checkCampo("sitioWeb");
    var telefonoCorrecto = comprobacionTelefono();
    var sitioWebCorrecto = comprobacionSitioWeb();

    console.log("El nombre del hotel es: " + hotel.getNombre() + ".");
    console.log("La ciudad del hotel es: " + hotel.getCiudad() + ".");
    console.log("La direccion del hotel es: " + hotel.getDireccion() + ".");
    console.log("El telefono del hotel es: " + hotel.getTelefono() + ".");

    if (telefonoCorrecto) {
      console.log("El formato del telefono es correcto");
    } else {
      console.log("El formato del telefono es incorrecto");
    }

    console.log("El sitio Web del hotel es: " + hotel.getSitioWeb() + ".");
    if (sitioWebCorrecto) {
      console.log("El formato del sitioWeb es correcto");
    } else {
      console.log("El formato del sitioWeb es incorrecto");
    }

    if (gerente) {
      var comprobacionNumeroDocumento = gerente.checkCampo("numeroDocumento");
      var comprobacionTelefono = gerente.checkCampo("telefono");
      var numeroDocumentoCorrecto = comprobacionNumeroDocumento();
      var telefonoCorrecto = comprobacionTelefono();

      console.log("El nombre del Gerente es: " + gerente.getNombreCompleto() + ".");
      console.log("El numero del documento es: " + gerente.getNumeroDocumento() + ".");

      if (numeroDocumentoCorrecto) {
        console.log("El formato del documento es correcto");
      } else {
        console.log("El formato del documento es incorrecto");
      }

      console.log("El telefono del gerente es :" + gerente.getTelefono() + ".");

      if (telefonoCorrecto) {
        console.log("El formato del telefono es correcto");
      } else {
        console.log("El formato del telefono es incorrecto");
      }
    } else {
      console.log("NO HAY GERENTE");
    }

    if (habitaciones.length > 0) {
      var nHabitaciones = habitaciones.length;
      console.log("El hotel tiene " + nHabitaciones + "habitaciones");

      for (var i = 0; i < nHabitaciones; i++) {
        var habitacion = habitaciones[i];
        console.log("habitacion numero: " + (i + 1) + ".");
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
      }
    } else {
      console.log("El Hotel no tiene habitaciones");
    }

    stdio.question("pulsa intro para continuar ...", function () {
      if (telefonoCorrecto && numeroDocumentoCorrecto) {
        callback(true);
      } else {
        callback(false);
      }
    });
  } //End if Hotel
}

module.exports = controladorHotel;
