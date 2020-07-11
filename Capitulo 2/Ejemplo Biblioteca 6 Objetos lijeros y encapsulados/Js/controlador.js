$(document).ready(function () {
  var miLibro = Libro();

  miLibro.setTitulo("Libro de JavaScript");
  miLibro.setEditorial("'Punlicaciones Universitarias SL");
  miLibro.setFechaPrimeraEdicion("20/01/2015");
  miLibro.setIsbn("978-15-678213-8-0");

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
