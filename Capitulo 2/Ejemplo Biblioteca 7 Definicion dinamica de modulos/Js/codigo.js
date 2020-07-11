QUnit.test("Prubea modulos dinamicos", function (assert) {
  var testAsincrono = assert.async();
  assert.expect(7);

  require(["./js/Autor", "./js/Libro"], function () {
    autor = new Autor();
    libro = new Libro();

    autor.setNombreCompleto("Ismael Lopez Quintero");
    autor.setFechaNacimiento("04/07/1983");
    autor.setNacionalidad("española");

    libro.setTitulo("Aprendiendo definicion dinamica de modulos");
    libro.setEditorial("Publicaciones Universitarias SL");
    libro.setAutor(autor);
    libro.setFechaPrimeraEdicion("01/01/2012");
    libro.setIsbn("978-15-678123-8-0");

    assert.equal(
      libro.getTitulo(),
      "Aprendiendo definicion dinamica de modulos",
      "Titulo correcto"
    );
    assert.equal(libro.getEditorial(), "Publicaciones Universitarias SL", "Editorial correcta");
    assert.equal(
      libro.getAutor().getNombreCompleto(),
      "Ismael Lopez Quintero",
      "nombre del autor correcto"
    );
    assert.equal(
      libro.getAutor().getFechaNacimiento(),
      "04/07/1983",
      "La fecha de nacimiento es correcta"
    );
    assert.equal(libro.getAutor().getNacionalidad(), "española", "La nacionalidad es correcta");
    assert.equal(
      libro.getFechaPrimeraEdicion(),
      "01/01/2012",
      "La fecha primera Edicion es correcta"
    );
    assert.equal(libro.getIsbn(), "978-15-678123-8-0", "El ISBN es correcto");

    testAsincrono();
  });
});
