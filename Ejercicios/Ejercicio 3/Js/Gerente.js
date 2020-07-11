var Gerente = function () {
  var sThis = this;
  this.datosGerente = {
    nombreCompleto: " ",
    numeroDocumento: " ",
    telefono: " ",
  };

  this.devuelveVerdadero = function () {
    return true;
  };

  this.compruebaTelefono = function () {
    var telefono = sThis.datosGerente.telefono;
    var expRegular = new RegExp("[+]{1}[0-9]{2}[.]{1}[0-9]{9}");
    var valido = expRegular.test(telefono);
    return valido;
  };

  this.compruebaDocumento = function () {
    var numeroDocumento = sThis.datosGerente.numeroDocumento;
    var expRegular = new RegExp("[0-9]{8}-[A-Z]{1}");
    var valido = expRegular.test(numeroDocumento);
    return valido;
  };

  this.checkCampo = function (campo) {
    if (campo === "telefono") {
      return this.compruebaTelefono;
    } else if (campo === "numeroDocumento") {
      return this.compruebaDocumento;
    } else return this.devuelveVerdadero;
  };

  var getNombreCompleto = function () {
    return sThis.datosGerente.nombreCompleto;
  };
  var setNombreCompleto = function (nombreCompletoGerente) {
    sThis.datosGerente.nombreCompleto = nombreCompletoGerente;
  };
  var getNumeroDocumento = function () {
    return sThis.datosGerente.numeroDocumento;
  };
  var setNumeroDocumento = function (numeroDocumentoGerente) {
    sThis.datosGerente.numeroDocumento = numeroDocumentoGerente;
  };
  var getTelefono = function () {
    return sThis.datosGerente.telefono;
  };
  var setTelefono = function (telefonoGerente) {
    sThis.datosGerente.telefono = telefonoGerente;
  };

  var checkCampo = function (campo) {
    return sThis.checkCampo(campo);
  };

  return {
    getNombreCompleto: getNombreCompleto,
    setNombreCompleto: setNombreCompleto,
    getNumeroDocumento: getNumeroDocumento,
    setNumeroDocumento: setNumeroDocumento,
    getTelefono: getTelefono,
    setTelefono: setTelefono,
    checkCampo: checkCampo,
  };
};
