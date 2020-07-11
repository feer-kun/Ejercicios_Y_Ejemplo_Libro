var stdio = require("stdio");
var Gerente = require("../Class/Gerente");

var controladorGerente = (callback, parametroCallback) => {
  var nombreCompleto = "";
  var numeroDocumento = "";
  var telefono = "";

  stdio.question("Introduce el nombre del Gerente: ", (err, nombreCompletoGerente) => {
    if (err) return callback(parametroCallback);
    nombreCompleto = nombreCompletoGerente;
    nombreCompleto = nombreCompleto.toUpperCase();

    stdio.question(
      "Introduce el numero de documento del Gerente: ",
      (err, numeroDocumentoGerente) => {
        if (err) return callback(parametroCallback);
        numeroDocumento = numeroDocumentoGerente;
        numeroDocumento = numeroDocumento.toUpperCase();

        stdio.question("Introduce el numero telefonico del Gerente: ", (err, telefonoGerente) => {
          if (err) return callback(parametroCallback);
          telefono = telefonoGerente;

          var gerente = Gerente(nombreCompleto, numeroDocumento, telefono);

          muestraGerente(gerente, (valido) => {
            if (valido) {
              return callback(parametroCallback, {
                gerente: gerente,
              });
            } else {
              return callback(parametroCallback, null);
            }
          });
        });
      }
    );
  });
};

function muestraGerente(gerente, callback) {
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

  stdio.question("pulsa intro para continuar ...", function () {
    if (telefonoCorrecto && numeroDocumentoCorrecto) {
      callback(true);
    } else {
      callback(false);
    }
  });
} //End muestraGerente

module.exports = controladorGerente;
