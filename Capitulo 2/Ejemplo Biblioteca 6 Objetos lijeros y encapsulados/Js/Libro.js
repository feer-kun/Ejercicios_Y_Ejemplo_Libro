var Libro = function () {
  var objetoLibro = stampit();
  var Clase = function () {
    var titulo = "";
    var editorial = "";
    var fechaPrimeraEdicion = "";
    var isbn = "";

    this.getTitulo = function () {
      return titulo;
    };
    this.setTitulo = function (tituloLibro) {
      titulo = tituloLibro;
    };

    this.getEditorial = function () {
      return editorial;
    };
    this.setEditorial = function (editorialLibro) {
      editorial = editorialLibro;
    };

    this.getFechaPrimeraEdicion = function () {
      return fechaPrimeraEdicion;
    };
    this.setFechaPrimeraEdicion = function (fechaPrimeraEdicionLibro) {
      fechaPrimeraEdicion = fechaPrimeraEdicionLibro;
    };

    this.getIsbn = function () {
      return isbn;
    };
    this.setIsbn = function (isbnLibro) {
      isbn = isbnLibro;
    };
  }; //End clase

  objetoLibro.enclose(Clase);
  return objetoLibro.create();
}; //End libro
