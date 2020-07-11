var controladorHabitacion = function controladorHabitacion($document) {
  var $planta = $document.find("input#planda");
  var $numeroCamas = $document.find("input#numeroCamas");
  var $telefono = $document.find("input#telefono");

  var planta = $planta.val();
  var numeroCamas = $numeroCamas.val();
  var telefono = $telefono.val();

  var campos = {
    planta: planta,
    numeroCamas: numeroCamas,
    telefono: telefono,
  };

  //Secuencia callback

  var habitacion = comprobaciones(campos, crearHabitacion);

  if (habitacion) {
    QUnit.test("Probando los datos introducidos Habitacion", function (assert) {
      assert.equal(planta, habitacion.getPlanta(), "Planta de la habitacion correcta");
      assert.equal(numeroCamas, habitacion.getNumeroCamas(), "Numero de camas correcto");
      assert.equal(telefono, habitacion.getTelefono(), "Telefono correcto");
    });
  } else {
    alert("Error en los datos");
  }
};

var comprobaciones = function comprobaciones(campos, callback) {
  var planta = campos.planta;
  var numeroCamas = campos.numeroCamas;
  var telefono = campos.telefono;
  if (planta != "" && numeroCamas != "" && telefono != "") {
    return callback(true, campos);
  } else {
    return callback(false);
  }
};

var crearHabitacion = function crearHabitacion(valido, campos) {
  if (valido) {
    var planta = campos.planta;
    var numeroCamas = campos.numeroCamas;
    var telefono = campos.telefono;

    var habitacion = new Habitacion();

    habitacion.setPlanta(planta);
    habitacion.setNumeroCamas(numeroCamas);
    habitacion.setTelefono(telefono);

    var comprobacionTelefono = habitacion.checkCampo("telefono");
    var correctoTeleofno = comprobacionTelefono();

    if (correctoTeleofno) {
      return habitacion;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
