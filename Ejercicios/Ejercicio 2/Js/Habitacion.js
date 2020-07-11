var Habitacion = function () {
  var sThis = this;
  this.datosHabitacion = {
    planta: "",
    numeroCamas: 0,
    telefono: "",
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
    if (campo === "telefono") {
      return function () {
        var expRegular = new RegExp("[+]{1}[0-9]{2}[.]{1}[0-9]{9}");
        var valido = expRegular.test(sThis.datosHabitacion.telefono);
        return valido;
      };
    } else {
      return function () {
        return valido;
      };
    }
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
