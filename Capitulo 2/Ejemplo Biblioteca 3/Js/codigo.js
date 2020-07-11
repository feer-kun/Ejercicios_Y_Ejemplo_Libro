QUnit.test("Prueba", function (assert) {
  //Declaracion de variables o Objetos
  var autor = new Autor();
  //Asugnacion de valores al Objeto Autor
  autor.setNombreCompleto("Ismael López Quintero");
  autor.setFechaNacimiento("04/07/1983");
  autor.setNacionalidad("española");

  var libro = new Libro();
  //Asignacion de valores al objeto Libro
  libro.setTitulo("Aprendiendo Notacion JSON");
  libro.setEditorial("Publicaciones Universitarias SL");
  libro.setAutor(autor);
  libro.setFechaPrimeraEdicion("01/01/2012");

  //ISBN INCORRECTO
  libro.setIsbn("123456789");

  var comprobacion = libro.check("isbn");
  var isbnCorrecto = comprobacion();
  //Incorrecto por que no se adapta al formato
  assert.ok(isbnCorrecto, "El Isbn es correcto");

  //ISBN CORRECTO
  libro.setIsbn("978-15-678213-8-0");
  comprobacion = libro.check("isbn");
  isbnCorrecto = comprobacion();
  //Correcto por que se adapta al formato
  assert.ok(isbnCorrecto, "El Isbn es correcto");
});
