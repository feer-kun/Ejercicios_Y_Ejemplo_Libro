var controlador = function controlador($document) {
  var $nombre = $document.find("input#nombre");
  var $fNacimiento = $document.find("input#fnacimiento");
  var $nacionalidad = $document.find("input#nacionalidad");

  var nombre = $nombre.val();
  var fNacimiento = $fNacimiento.val();
  var nacionalidad = $nacionalidad.val();

  var campos = {
    nombre: nombre,
    fNacimiento: fNacimiento,
    nacionalidad: nacionalidad,
  };

  //Secuencia via CallBacks.
  var autor = comprobaciones(campos, crearAutor);

  if (autor) {
    QUnit.test("Probando los datos introducidos", function (assert) {
      assert.equal(nombre, autor.getNombreCompleto(), "EL nombre es correcto");
      assert.equal(fNacimiento, autor.getFechaNacimiento(), "La fecha de nacimietno es correcta");
      assert.equal(nacionalidad, autor.getNacionalidad(), "La nacionalidad es correcta");
    });
  } else {
    alert("hay errores en los datos");
  }
}; //End controlador

var comprobaciones = function comprobaciones(campos, callback) {
  var nombre = campos.nombre;
  var fNacimiento = campos.fNacimiento;
  var nacionalidad = campos.nacionalidad;
  if (
    nombre &&
    nombre != "" &&
    fNacimiento &&
    fNacimiento != "" &&
    nacionalidad &&
    nacionalidad != ""
  ) {
    return callback(true, campos);
  } else {
    return callback(false);
  }
}; //End comprobaciones

var crearAutor = function crearAutor(valido, campos) {
  if (valido) {
    var nombre = campos.nombre;
    var fNacimiento = campos.fNacimiento;
    var nacionalidad = campos.nacionalidad;
    var autor = new Autor();
    autor.setNombreCompleto(nombre);
    autor.setFechaNacimiento(fNacimiento);
    autor.setNacionalidad(nacionalidad);
    var comprobacion = autor.check("fechaNacimiento");
    var correcto = comprobacion();
    if (correcto) {
      return autor;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
