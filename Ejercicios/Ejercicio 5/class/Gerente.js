var PrototipoGerente = {
  nombreCompleto: " ",
  numeroDocumento: " ",
  telefono: " ",

  devuelveVerdadero: function () {
    return true;
  },

  compruebaTelefono: function (telefono) {
    var expRegular = new RegExp("[+]{1}[0-9]{2}[.]{1}[0-9]{9}");
    var valido = expRegular.test(telefono);
    return valido;
  },

  compruebaDocumento: function (numeroDocumento) {
    var expRegular = new RegExp("[0-9]{8}-[A-Z]{1}");
    var valido = expRegular.test(numeroDocumento);
    return valido;
  },

  checkCampo: function (campo) {
    if (campo === "telefono") {
      return this.compruebaTelefono;
    } else if (campo === "numeroDocumento") {
      return this.compruebaDocumento;
    } else return this.devuelveVerdadero;
  },

  getNombreCompleto: function () {
    return this.nombreCompleto;
  },
  setNombreCompleto: function (nombreCompletoGerente) {
    this.nombreCompleto = nombreCompletoGerente;
  },
  getNumeroDocumento: function () {
    return this.numeroDocumento;
  },
  setNumeroDocumento: function (numeroDocumentoGerente) {
    sThis.datosGerente.numeroDocumento = numeroDocumentoGerente;
  },
  getTelefono: function () {
    return this.telefono;
  },
  setTelefono: function (telefonoGerente) {
    this.telefono = telefonoGerente;
  },
}; //End Prototipo

var Gerente = function () {
  var gerente = Object.create(PrototipoGerente);
  //Dejamos la asignacion de campos a los Getters y Setters
  gerente = $.extend(gerente, {});
  return gerente;
};
