var Gerente = function () {
  var sThis = this;
  this.datosGerente = {
    nombreCompleto: " ",
    numeroDocumento: " ",
    telefono: " ",
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
    if (campo === "numeroDocumento") {
      return function () {
        var expRegular = new RegExp("[0-9]{8}-[A-Z]{1}");
        var valido = expRegular.test(sThis.datosGerente.numeroDocumento);
        return valido;
      };
    } else if (campo === "telefono") {
      return function () {
        var expRegular = new RegExp("[+]{1}[0-9]{2}[.]{1}[0-9]{9}");
        var valido = expRegular.test(sThis.datosGerente.telefono);
        return valido;
      };
    } else {
      return function () {
        return true;
      };
    }
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
