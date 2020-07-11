var PrototipoLibro = {
  titulo: "",
  editorial: "",
  fechaPrimeraEdicion: "",
  isbn: "",

  getTitulo: function () {
    return this.titulo;
  },
  setTitulo: function (titulo) {
    this.titulo = titulo;
  },
  getEditorial: function () {
    return this.editorial;
  },
  setEditotial: function (editorial) {
    this.editorial = editorial;
  },
  getFechaPrimeraEdicion: function () {
    return this.fechaPrimeraEdicion;
  },
  setFechaEditorial: function (fechaPrimeraEdicion) {
    this.fechaPrimeraEdicion = fechaPrimeraEdicion;
  },
  getIsbn: function () {
    return this.isbn;
  },
  setIsbn: function (isbn) {
    this.isbn = isbn;
  },
};

var Libro = function (datosLibro) {
  var miLibro = Object.create(PrototipoLibro);
  miLibro = $.extend(miLibro, datosLibro);
  return miLibro;
};
