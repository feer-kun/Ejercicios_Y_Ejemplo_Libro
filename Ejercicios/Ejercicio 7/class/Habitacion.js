Habitacion = (planta, numeroCamas, telefono) => {
  const sThis = this;
  this.datosHabitacion = {
    planta: planta,
    numeroCamas: numeroCamas,
    telefono: telefono,
  };

  this.compruebaTelefono = () => {
    const expRegular = new RegExp("[+]{1}[0-9]{2}[.]{1}[0-9]{9}");
    let valido = expRegular.test(sThis.datosHabitacion.telefono);
    return valido;
  };

  checkCampo = (campo) => {
    if (campo === "telefono") {
      return this.compruebaTelefono;
    } else {
      return true;
    }
  };

  getPlanta = () => {
    return sThis.datosHabitacion.planta;
  };
  setPlanta = (planta) => {
    sThis.datosHabitacion.planta;
  };

  getNumeroCamas = () => {
    return sThis.datosHabitacion.numeroCamas;
  };
  setNumeroCamas = (numeroCamas) => {
    sThis.datosHabitacion.numeroCamas = numeroCamas;
  };

  getTelefono = () => {
    return sThis.datosHabitacion.telefono;
  };
  setTelefono = (telefono) => {
    sThis.datosHabitacion.telefono = telefono;
  };

  return {
    checkCampo: checkCampo,
    getPlanta: getPlanta,
    setPlanta: setPlanta,
    getNumeroCamas: getNumeroCamas,
    setNumeroCamas: setNumeroCamas,
    getTelefono: getTelefono,
    setTelefono: setTelefono,
  };
}; //End Habitacion
