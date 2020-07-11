var Habitacion = function () {
  var sThis = this;
  this.datosHabitacion = {
    planta: "",
    numeroCamas: 0,
    telefono: "",
  };

  var getPlanta = function () {
      return sThis.datosHabitacion.planta;
    },
    setPlanta = function (planta) {
      sThis.datosHabitacion.planta = planta;
    },
    getNumeroCamas = function () {
      return sThis.datosHabitacion.numeroCamas;
    },
    setNumeroCamas = function (numeroCamas) {
      sThis.datosHabitacion.numeroCamas = numeroCamas;
    },
    getTelefono = function () {
      return sThis.datosHabitacion.telefono;
    },
    setTelefono = function (telefono) {
      sThis.datosHabitacion.telefono = telefono;
    };

  return {
    getPlanta: getPlanta,
    setPlanta: setPlanta,
    getNumeroCamas: getNumeroCamas,
    setNumeroCamas: setNumeroCamas,
    getTelefono: getTelefono,
    setTelefono: setTelefono,
  };
};
