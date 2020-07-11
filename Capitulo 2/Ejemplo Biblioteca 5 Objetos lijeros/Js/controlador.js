$(document).ready(function () {
  var datosLibro = {
    titulo: "Libro de JavaScript",
    editorial: "Publicaciones Universitarias SL",
    fechaPrimeraEdicion: "01/01/1970",
    isbn: "123456789",
  };

  var miLibro = Libro(datosLibro);

  var titulo = miLibro.getTitulo();
  var editorial = miLibro.getEditorial();
  var fechaPrimeraEdicion = miLibro.getFechaPrimeraEdicion();
  var isbn = miLibro.getIsbn();

  QUnit.test("Ejemplo Libro", function (assert) {
    assert.equal(titulo, "Libro de JavaScript", "Titulo correcto");
    assert.equal(editorial, "Publicaciones Universitarias SL", "Editorial correcta");
    assert.equal(fechaPrimeraEdicion, "01/01/1970", "Fecha correcta");
    assert.equal(isbn, "123456789", "ISBN correcto");
    //******************************************************* */
    assert.equal(miLibro.titulo, "Libro de JavaScript", "Titulo correcto");
  });
});
