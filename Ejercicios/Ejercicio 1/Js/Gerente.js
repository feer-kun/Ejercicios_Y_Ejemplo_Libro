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
  var setNombreCompleto = function (nombreCompleto) {
    sThis.datosGerente.nombreCompleto = nombreCompleto;
  };
  var getNumeroDocumento = function () {
    return sThis.datosGerente.numeroDocumento;
  };
  var setNumeroDocumento = function (numeroDocumento) {
    sThis.datosGerente.numeroDocumento = numeroDocumento;
  };
  var getTelefono = function () {
    return sThis.datosGerente.telefono;
  };
  var setTelefono = function (telefono) {
    sThis.datosGerente.telefono = telefono;
  };

  return {
    getNombreCompleto: getNombreCompleto,
    setNombreCompleto: setNombreCompleto,
    getNumeroDocumento: getNumeroDocumento,
    setNumeroDocumento: setNumeroDocumento,
    getTelefono: getTelefono,
    setTelefono: setTelefono,
  };
};
