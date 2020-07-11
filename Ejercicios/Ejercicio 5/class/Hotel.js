var PrototipoHotel = {
  nombre: "",
  ciudad: "",
  direccion: "",
  telefono: "",
  sitioWeb: "",
  devuelveVerdadero: function () {
    return true;
  },
  compruebaTelefono: function (telefono) {
    var expRegular = new RegExp("[+]{1}[0-9]{2}[.]{1}[0-9]{9}");
    var valido = expRegular.test(telefono);
    return valido;
  },
  compruebaSitioWeb: function (sitioWeb) {
    var expRegular = new RegExp("http://www[.]{1}[a-z]+[.]{1}[a-z]");
    var valido = expRegular.test(sitioWeb);
    return valido;
  },
  checkCampo: function (campo) {
    if (campo === "telfono") {
      return this.compruebaTelefono;
    } else if (campo === "sitioWeb") {
      return this.compruebaSitioWeb;
    } else {
      return this.devuelveVerdadero;
    }
  },
  getNombre: function () {
    return this.nombre;
  },
  setNombre: function (nombre) {
    this.nombre = nombre;
  },
  getCiudad: function () {
    return this.ciudad;
  },
  setCiudad: function (ciudad) {
    this.ciudad = ciudad;
  },
  getDireccion: function () {
    return this.direccion;
  },
  setDireccion: function (direccion) {
    this.direccion = direccion;
  },
  getTelefono: function () {
    return this.telefono;
  },
  setTelefono: function (telefono) {
    this.telefono = telefono;
  },
  getSitioWeb: function () {
    return this.sitioWeb;
  },
  setSitioWeb: function (sitioWeb) {
    this.sitioWeb = sitioWeb;
  },
};

var Hotel = function () {
  var hotel = Object.create(PrototipoHotel);
  //Dejamos la asignacion de campos para los Getters y Setters
  hotel = $.extend(hotel, {});
  return hotel;
};
