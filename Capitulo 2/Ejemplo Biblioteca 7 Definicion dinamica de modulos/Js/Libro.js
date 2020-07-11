var Libro = function () {
  var sThis = this;
  this.datosLibro = {
    titulo: "",
    editorial: "",
    autor: "",
    fechaPrimeraEdicion: "",
    isbn: "",
  };

  var getTitulo = function () {
    return sThis.datosLibro.titulo;
  };
  var setTitulo = function (titulo) {
    sThis.datosLibro.titulo = titulo;
  };

  var getEditorial = function () {
    return sThis.datosLibro.editorial;
  };
  var setEditorial = function (editorial) {
    sThis.datosLibro.editorial = editorial;
  };

  var getAutor = function () {
    return sThis.datosLibro.autor;
  };
  var setAutor = function (autor) {
    sThis.datosLibro.autor = autor;
  };

  var getFechaPrimeraEdicion = function () {
    return sThis.datosLibro.fechaPrimeraEdicion;
  };
  var setFechaPrimeraEdicion = function (fechaPrimeraEdicion) {
    sThis.datosLibro.fechaPrimeraEdicion = fechaPrimeraEdicion;
  };

  var getIsbn = function () {
    return sThis.datosLibro.isbn;
  };
  var setIsbn = function (isbn) {
    sThis.datosLibro.isbn = isbn;
  };

  return {
    getTitulo: getTitulo,
    setTitulo: setTitulo,
    getEditorial: getEditorial,
    setEditorial: setEditorial,
    getAutor: getAutor,
    setAutor: setAutor,
    getFechaPrimeraEdicion: getFechaPrimeraEdicion,
    setFechaPrimeraEdicion: setFechaPrimeraEdicion,
    getIsbn: getIsbn,
    setIsbn: setIsbn,
  };
};
