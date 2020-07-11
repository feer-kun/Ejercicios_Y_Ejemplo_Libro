var stdio = require("stdio");
var Libro = require("./Libro");

controladorLibro = (callback, parametroCallback, autorLibro) => {
  let titulo = "";
  let editorial = "";
  let autor = autorLibro;
  let fechaPrimeraEdicion = "";
  let isbn = "";

  stdio.question("introduce el titulo del libro ", (err, tituloLibro) => {
    if (err) return callback(parametroCallback, autor);
    titulo = tituloLibro;
    stdio.question("Introduce la editorial del libro ", (err, editorialLibro) => {
      if (err) return callback(parametroCallback, autor);
      editorial = editorialLibro;
      stdio.question("Introduce la fecha de primera edicion", (err, fechaPrimeraEdicionLibro) => {
        if (err) return callback(parametroCallback, autor);
        fechaPrimeraEdicion = fechaPrimeraEdicionLibro;
        stdio.question("Introduce el ISBN del libro ", (err, isbnLibro) => {
          if (err) return callback(parametroCallback, autor);
          isbn = isbnLibro;

          libro = Libro(titulo, editorial, fechaPrimeraEdicion, isbn);
          libro.setAutor(autor);

          muestraLibro(libro, () => {
            return callback(parametroCallback, autor);
          });
        });
      });
    });
  });
};

muestraLibro = (libro, callback) => {
  let autorObjeto = libro.getAutor();

  console.log("El nombre del libro es: " + libro.getTitulo() + ".");
  console.log("La editorial del libro es: " + libro.getEditorial() + ".");
  if (!autorObjeto || autorObjeto === null) {
    console.log("El libro no tiene autor");
  } else {
    let comprobarFechaNacimiento = autorObjeto.checkCampo("fechaNacimiento");
    let correctoFechaNacimiento = comprobarFechaNacimiento();

    console.log("El nombre completo del autor es: " + autorObjeto.getNombreCompleto() + ".");
    console.log("La fecha de nacimiento del autor: " + autor.getFechaNacimiento() + ".");

    if (correctoFechaNacimiento) {
      console.log("El formato de la fecha es correcto ");
    } else {
      console.log("El formato de la fecha no es correcta");
    }

    console.log("La nacionalidad del autor es: " + autorObjeto.getNacionalidad() + ".");
  }

  console.log(
    "La fecha de la primera edicion del libro es: " + libro.getFechaPrimeraEdicion() + "."
  );
  console.log("El isbn es: " + libro.getIsbn() + ".");

  let compruebaLibro = libro.checkCampo("isbn");
  let correctoIsbn = compruebaLibro();

  if (correctoIsbn) {
    console.log("El formato del isbn es correcto");
  } else {
    console.log("El formato del isbn no es correcto");
  }

  stdio.question("Pulsa intro para continuar...", () => {
    callback();
  });
};

module.exports = controladorLibro;
