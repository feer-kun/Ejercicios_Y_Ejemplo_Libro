controladorGerente = ($docuemnt) => {
  let nombre = $docuemnt.find("input#nombreCompleto").val();
  let numeroDocumento = $docuemnt.find("input#numeroDocumento").val();
  let telefono = $docuemnt.find("input#telefono").val();

  campos = {
    nombre: nombre,
    numeroDocumento: numeroDocumento,
    telefono: telefono,
  };

  QUnit.test("Provando controlador Gerente", (assert) => {
    const testAsincrono = assert.async();
    require(["../class/Gerente"], () => {
      //Secuencia via Callback
      let gerente = comprobaciones(campos, crearGerente);

      if (gerente) {
        assert.equal(nombre, gerente.getNombreCompleto(), "El nombre es correctos");
        assert.equal(
          numeroDocumento,
          gerente.getNumeroDocumento(),
          "El numero Documento es correcto"
        );
        assert.equal(telefono, gerente.getTelefono(), "El telefono es correcto");
        testAsincrono();
      } else {
        assert.ok(true, "Hubieron errores");
        testAsincrono();
        alert("Hey errores en los datos");
      }
    }); // End require
  });
};

comprobaciones = (campos, callback) => {
  let nombre = campos.nombre;
  let numeroDocumento = campos.numeroDocumento;
  let telefono = campos.telefono;

  if (nombre != "" && numeroDocumento != "" && telefono != "") {
    return callback(true, campos);
  } else {
    return callback(false);
  }
}; //End comprobaciones

crearGerente = (valido, campos) => {
  if (valido) {
    let nombre = campos.nombre;
    let numeroDocumento = campos.numeroDocumento;
    let telefono = campos.telefono;

    gerente = Gerente(nombre, numeroDocumento, telefono);

    let comprobacionNumeroDocumento = gerente.checkCampo("numeroDocumento");
    let comprobacionTelefono = gerente.checkCampo("telefono");
    let validoNumeroDocumento = comprobacionNumeroDocumento();
    let validoTelefono = comprobacionTelefono();

    if (validoNumeroDocumento && validoTelefono) {
      return gerente;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
