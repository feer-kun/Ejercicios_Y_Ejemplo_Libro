var stampit = require("stampit");

var Usuario = function () {
  var objetoUsuario = stampit();
  var Clase = function () {
    var id = "";
    var nombre = "";
    var apellidos = "";
    var direccion = "";
    var telefono = "";

    this.getId = function () {
      return id;
    };

    this.setId = function (idUsuario) {
      id = idUsuario;
    };

    this.getNombre = function () {
      return nombre;
    };
    this.setNombre = function (nombreUsuario) {
      nombre = nombreUsuario;
    };

    this.getApellidos = function () {
      return apellidos;
    };
    this.setApellidos = function (apellidosUsuario) {
      apellidos = apellidosUsuario;
    };

    this.getDireccion = function () {
      return direccion;
    };
    this.setDireccion = function (direccionUsuario) {
      direccion = direccionUsuario;
    };

    this.getTelefono = function () {
      return telefono;
    };
    this.setTelefono = function (telefonoUsuario) {
      telefono = telefonoUsuario;
    };

    this.getJSON = function () {
      return {
        id: id,
        nombre: nombre,
        apellidos: apellidos,
        direccion: direccion,
        telefono: telefono,
      };
    };

    this.setJSON = function (jsonUsuario) {
      id = jsonUsuario.id;
      nombre = jsonUsuario.nombre;
      apellidos = jsonUsuario.apellidos;
      direccion = jsonUsuario.direccion;
      telefono = jsonUsuario.telefono;
    };
  };

  objetoUsuario.enclose(Clase);
  return objetoUsuario.create();
};

module.exports = Usuario;
