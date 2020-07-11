//Implementacion de la clase Libro con Getters y Setters.
var Libro = function () {
  var sThis = this;
  this.datosLibro = {
    titulo: "",
    editorial: "",
    autor: {},
    fechaPrimeraEdicion: "",
    isbn: "",
  };

  this.devuelveVerdadero = function () {
    return true;
  };

  this.compruebaIsbn = function () {
    var isbn = sThis.datosLibro.isbn;
    var partesIsbn = isbn.split("-");
    var nPartes = partesIsbn.length;
    if (nPartes !== 5) {
      return false;
    } else {
      valido = true;
      for (var i = 0; i < nPartes; i++) {
        var estaParte = partesIsbn[i];
        if (!/([0-9])*$/.test(estaParte)) {
          valido = false;
          break;
        }
      }
      return function () {
        return valido;
      };
    }
  };

  this.checkCampo = function (nombreCampo) {
    if (nombreCampo === "isbn") {
      return this.compruebaIsbn;
    } else {
      return this.devuelveVerdadero;
    }
  };

  var getTitulo = function () {
      return sThis.datosLibro.titulo;
    },
    setTitulo = function (titulo) {
      sThis.datosLibro.titulo = titulo;
    },
    getEditorial = function () {
      return sThis.datosLibro.editorial;
    },
    setEditorial = function (editorial) {
      sThis.datosLibro.editorial = editorial;
    },
    getAutor = function () {
      return sThis.datosLibro.autor;
    },
    setAutor = function (autor) {
      sThis.datosLibro.autor = autor;
    },
    getFechaPrimeraEdicion = function () {
      return sThis.datosLibro.fechaPrimeraEdicion;
    },
    setFechaPrimeraEdicion = function (fechaPrimeraEdicion) {
      sThis.datosLibro.fechaPrimeraEdicion = fechaPrimeraEdicion;
    },
    getIsbn = function () {
      return sThis.datosLibro.isbn;
    },
    setIsbn = function (isbn) {
      sThis.datosLibro.isbn = isbn;
    },
    check = function (campo) {
      return sThis.checkCampo(campo);
    }; //End check

  return {
    getTitulo: getTitulo,
    setTitulo: setTitulo,

    getEditorial: getEditorial,
    setEditorial: setEditorial,

    getAutor: getAutor,
    setAutor: setAutor,

    getFechaPrimeraEdicion: getFechaPrimeraEdicion,
    setFechaPrimeraEdicion: setFechaPrimeraEdicion,

    getAutor: getAutor,
    setAutor: setAutor,

    getIsbn: getIsbn,
    setIsbn: setIsbn,
    check: check,
  };
};
