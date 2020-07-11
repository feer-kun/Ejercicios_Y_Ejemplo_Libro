var stdio = require("stdio");
var Autor = require("./Autor");

controladorAutor = (callback, parametroCallBack) => {
  let nombreCompleto = "";
  let fechaNacimiento = "";
  let nacionalidad = "";

  stdio.question("Introduce el nombre del autor", (err, nombreCompletoAutor) => {
    if (err) return callback(parametroCallBack);
    nombreCompleto = nombreCompletoAutor;

    stdio.question("Intrudece la fecha de nacimiento del autor", (err, fechaNacimientoAutor) => {
      if (err) return callback(parametroCallBack);
      fechaNacimiento = fechaNacimientoAutor;

      stdio.question("Introduce la nacionalidad del autor", (err, nacionalidadAutor) => {
        if (err) return callback(parametroCallBack);
        nacionalidad = nacionalidadAutor;

        autor = Autor(nombreCompleto, fechaNacimiento, nacionalidad);

        muestraAutor(autor, () => {
          return callback(parametroCallBack, autor);
        });
      });
    });
  });
};

muestraAutor = (autor, callback) => {
  let comprobacionFechaNacimiento = autor.checkCampo("fechaNacimiento");
  let correctoFecha = comprobacionFechaNacimiento();

  console.log("El nombre del autor es: " + autor.getNombreCompleto() + ".");
  console.log("La fecha de nacimineto del autor es: " + autor.getFechaNacimiento() + ".");

  if (correctoFecha) {
    console.log("El formato de fecha es correcto");
  } else {
    console.log("El formato de fecha es incorrecto");
  }

  console.log("La nacionalidad del autor es: " + autor.getNacionalidad() + ".");
  stdio.question("Pulsa intro para continuar...", () => {
    callback();
  });
};

module.exports = controladorAutor;
