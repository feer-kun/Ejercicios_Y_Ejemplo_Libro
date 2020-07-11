var stdio = require("stdio");

var controladorAutor = require("./controladorAutor");
var controladorLibro = require("./controladorLibro");

function menuEntrada(callback, autor) {
  console.log("1.- Formulario de un autor");
  console.log("2.- Formulario de un libro");
  console.log("3.- Salir");

  stdio.question("Elige entrada: ", ["1", "2", "3"], function (err, entrada) {
    if (err) return callback(menuEntrada, autor);
    if (entrada === "1") {
      controladorAutor(callback, menuEntrada);
    } else if (entrada === "2") {
      controladorLibro(callback, menuEntrada, autor ? autor : null);
    }
  });
}

menuEntrada(menuEntrada);
