Gerente = (nombreCompleto, numeroDocumento, telefono) => {
  const sThis = this;
  this.datosGerente = {
    nombreCompleto: nombreCompleto,
    numeroDocumento: numeroDocumento,
    telefono: telefono,
  };

  this.compruebaTelefono = () => {
    const expRegular = new RegExp("[+]{1}[0-9]{2}[.]{1}[0-9]{9}");
    let valido = expRegular.test(sThis.datosGerente.telefono);
    return valido;
  };

  this.compruebaDocumento = () => {
    const expRegular = new RegExp("[0-9]{8}-[A-Z]{1}");
    let valido = expRegular.test(sThis.datosGerente.numeroDocumento);
    return valido;
  };

  checkCampo = (campo) => {
    if (campo === "telefono") {
      return this.compruebaTelefono;
    } else if (campo === "numeroDocumento") {
      return this.compruebaDocumento;
    } else {
      return true;
    }
  };

  getNombreCompleto = () => {
    return sThis.datosGerente.nombreCompleto;
  };
  setNombreCompleto = (numeroDocumento) => {
    sThis.datosGerente.numeroDocumento = numeroDocumento;
  };

  getNumeroDocumento = () => {
    return sThis.datosGerente.numeroDocumento;
  };
  setNumeroDocumento = (numeroDocumento) => {
    sThis.datosGerente.numeroDocumento = numeroDocumento;
  };

  getTelefono = () => {
    return sThis.datosGerente.telefono;
  };
  setTelefono = (telefono) => {
    sThis.datosGerente.telefono = telefono;
  };

  return {
    checkCampo: checkCampo,
    getNombreCompleto: getNombreCompleto,
    setNombreCompleto: setNombreCompleto,
    getNumeroDocumento: getNumeroDocumento,
    setNumeroDocumento: setNumeroDocumento,
    getTelefono: getTelefono,
    setTelefono: setTelefono,
  };
};
