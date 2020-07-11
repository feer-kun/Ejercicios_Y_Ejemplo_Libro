Autor = require("./Autor");
Libro = require("./Libro");
assert = require("assert");

autor = Autor("Fernando Ortiz", "23/05/1994", "Mexicana");

libro = Libro(
  "Modelo del dominio con Node.js",
  "Publicaciones universitarias S L",
  "06/02/2015",
  "978-15-678213-8-0"
);

libro.setAutor(autor);

it("Titulo Correcto", () => {
  assert.equal(libro.getTitulo(), "Modelo del dominio con Node.js");
});

it("Editorial correcto", () => {
  assert.equal(libro.getEditorial(), "Publicaciones universitarias S L");
});

it("Fecha primera edicion correcta", () => {
  assert.equal(libro.getFechaPrimeraEdicion(), "06/02/2015");
});

it("isbn correcto", () => {
  let comprobacionIsbn = libro.checkCampo("isbn");
  let correcto = comprobacionIsbn();
  assert.ok(correcto);
});

it("Correcto nombre", () => {
  assert.equal(libro.getAutor().getNombreCompleto(), "Fernando Ortiz");
});

it("Formato correcto de fecha", () => {
  let comprobacionFechaNacimiento = libro.getAutor().checkCampo("fechaNacimiento");
  let correcto = comprobacionFechaNacimiento();

  assert.ok(correcto);
});

it("Nacionalidad Correcta", () => {
  assert.equal(libro.getAutor().getNacionalidad(), "Mexicana");
});
