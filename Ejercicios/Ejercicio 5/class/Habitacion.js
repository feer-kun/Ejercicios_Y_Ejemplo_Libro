var Habitacion = {
  planta = '',
  numeroCamas = '',
  telefono = '',
  devuelveVerdadero: function (){
    return true;
  },
  compruebaTelefono: function (telefono) {
    var expRegular = new RegExp("[+]{1}[0-9]{2}[.]{1}[0-9]{9}");
    var valido = expRegular.test(telefono);
    return valido;
  },
  checkCampo: function (campo) {
    if (campo === "telefono") {
      return this.compruebaTelefono;
    } else {
      return this.devuelveVerdadero;
    }
  },
  getPlanta: function (){
    return this.planta;
  },
  setPlanta: function (planta){
    this.planta = planta
  },
  getNumeroCamas: function () {
    return this.numeroCamas;
  },
  setNumeroCamas: function (numeroCamas){
    this.numeroCamas = numeroCamas
  },
  getTelefono: function (){
    return this.telefono
  },
  setTelefono: function (telefono){
    this.telefono = telefono;
  }
};