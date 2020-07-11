QUnit.test("Prueba", function (assert) {
  //Declaracion de variables o Objetos
  var autor = new Autor();
  var libro = new Libro();

  //Asugnacion de valores al Objeto Autor
  autor.setNombreCompleto("Ismael López Quintero");
  autor.setFechaNacimiento("04/07/1983");
  autor.setNacionalidad("española");

  //Asignacion de valores al objeto Libro
  libro.setTitulo("Aprendiendo Notacion JSON");
  libro.setEditorial("Publicaciones Universitarias SL");
  libro.setAutor(autor);
  libro.setFechaPrimeraEdicion("01/01/2012");
  libro.setIsbn("978-15-678213-8-0");

  //obteniendo valores del objeto Libro y Autor
  var titulo = libro.getTitulo();
  var editorial = libro.getEditorial();
  var nombre = autor.getNombreCompleto();
  var fechaNacimiento = autor.getFechaNacimiento();
  var nacionalidad = autor.getNacionalidad();

  var comprobacion = libro.check("isbn");
  var isbnCorrecto = comprobacion();

  assert.equal(fechaNacimiento, "04/07/1983", "fecha de nacimiento Correcta");
  assert.equal(nacionalidad, "española", "Nacionalidad Correcta");

  assert.ok(isbnCorrecto, "EL ISBN es correcto");
});
