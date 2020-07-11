var controladorGerente = function controladorGerente($document) {
  var $nombre = $document.find("input#nombre");
  var $numeroDocumento = $document.find("input#numeroDocumento");
  var $telefono = $document.find("input#telefono");

  var nombre = $nombre.val();
  var numeroDocumento = $numeroDocumento.val();
  var telefono = $telefono.val();

  var campos = {
    nombre: nombre,
    numeroDocumento: numeroDocumento,
    telefono: telefono,
  };

  //Secuencia Callback
  var gerente = comprobaciones(campos, crearGerente);

  if (gerente) {
    QUnit.test("Prueba los Datos del Gerente", function (assert) {
      assert.equal(nombre, gerente.getNombreCompleto(), "El nombre es correcto");
      assert.equal(
        numeroDocumento,
        gerente.getNumeroDocumento(),
        "El numero documento es correcto"
      );
      assert.equal(telefono, gerente.getTelefono(), "El telefono es correcto");
    });
  } else {
    alert("Hay errores en los datos");
  }
}; //End controladorGerente

var comprobaciones = function (campos, callback) {
  var nombre = campos.nombre;
  var numeroDocumento = campos.numeroDocumento;
  var telefono = campos.telefono;

  if (nombre != "" && numeroDocumento != "" && telefono != "") {
    return callback(true, campos);
  } else {
    return callback(false);
  }
}; //End comprobaciones

var crearGerente = function crearGerente(valido, campos) {
  if (valido) {
    var nombre = campos.nombre;
    var numeroDocumento = campos.numeroDocumento;
    var telefono = campos.telefono;

    var gerente = new Gerente();

    gerente.setNombreCompleto(nombre);
    gerente.setNumeroDocumento(numeroDocumento);
    gerente.setTelefono(telefono);

    var comprobacionDocumento = gerente.checkCampo("numeroDocumento");
    var comprobacionTelefono = gerente.checkCampo("telefono");
    var correctoDocumento = comprobacionDocumento();
    var correctoTelefono = comprobacionTelefono();

    if (correctoDocumento && correctoTelefono) {
      return gerente;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
