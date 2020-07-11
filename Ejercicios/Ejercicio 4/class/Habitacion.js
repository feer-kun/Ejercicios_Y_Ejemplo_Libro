var Habitacion = function () {
  var sThis = this;
  this.datosHabitacion = {
    planta: "",
    numeroCamas: 0,
    telefono: "",
  };

  this.devuelveVerdadero = function () {
    return true;
  };

  this.compruebaTelefono = function () {
    var telefono = sThis.datosHabitacion.telefono;
    var expRegular = new RegExp("[+]{1}[0-9]{2}[.]{1}[0-9]{9}");
    var valido = expRegular.test(telefono);
    return valido;
  };

  this.checkCampo = function (campo) {
    if (campo === "telefono") {
      return this.compruebaTelefono;
    } else {
      return this.devuelveVerdadero;
    }
  };

  var getPlanta = function () {
    return sThis.datosHabitacion.planta;
  };
  var setPlanta = function (planta) {
    sThis.datosHabitacion.planta = planta;
  };
  var getNumeroCamas = function () {
    return sThis.datosHabitacion.numeroCamas;
  };
  var setNumeroCamas = function (numeroCamas) {
    sThis.datosHabitacion.numeroCamas = numeroCamas;
  };
  var getTelefono = function () {
    return sThis.datosHabitacion.telefono;
  };
  var setTelefono = function (telefono) {
    sThis.datosHabitacion.telefono = telefono;
  };

  var checkCampo = function (campo) {
    return sThis.checkCampo(campo);
  };

  return {
    getPlanta: getPlanta,
    setPlanta: setPlanta,
    getNumeroCamas: getNumeroCamas,
    setNumeroCamas: setNumeroCamas,
    getTelefono: getTelefono,
    setTelefono: setTelefono,
    checkCampo: checkCampo,
  };
};
