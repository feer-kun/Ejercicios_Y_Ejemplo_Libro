controladorHabitacion = ($document) => {
  let planta = $document.find("input#planta").val();
  let numeroCamas = $document.find("input#numeroCamas").val();
  let telefono = $document.find("input#telefono").val();

  campos = {
    planta: planta,
    numeroCamas: numeroCamas,
    telefono: telefono,
  };

  QUnit.test("Prueba Habitacion", (assert) => {
    let testAsincrono = assert.async();
    require(["../class/Habitacion"], () => {
      //Secuencia via Callback
      let habitacion = comprobaciones(campos, crearHabitacion);

      if (habitacion) {
        assert.equal(planta, habitacion.getPlanta(), "La planta es correcta");
        assert.equal(numeroCamas, habitacion.getNumeroCamas(), "Numero de camas correcto");
        assert.equal(telefono, habitacion.getTelefono(), "Telefono correcto");
        testAsincrono();
      } else {
        assert.ok(true, "Hubieron errores");
        testAsincrono();
        alert("Hubieron errores");
      }
    }); //End require
  }); //End QUnit
}; //End controlador Habitacion

comprobaciones = (campos, callback) => {
  let planta = campos.planta;
  let numeroCamas = campos.numeroCamas;
  let telefono = campos.telefono;

  if (planta != "" && numeroCamas != "" && telefono != "") {
    return callback(true, campos);
  } else {
    return callback(false);
  }
};

crearHabitacion = (valido, campos) => {
  if (valido) {
    let planta = campos.planta;
    let numeroCamas = campos.numeroCamas;
    let telefono = campos.telefono;

    let habitacion = Habitacion(planta, numeroCamas, telefono);

    let comprobarTelefono = habitacion.checkCampo("telefono");
    let validoTelefono = comprobarTelefono();

    if (validoTelefono) {
      return habitacion;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
