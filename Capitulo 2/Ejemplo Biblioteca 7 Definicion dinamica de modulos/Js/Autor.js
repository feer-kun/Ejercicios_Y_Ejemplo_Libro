var Autor = function () {
  var sThis = this;
  this.datosAutor = {
    nombreCompleto: "",
    fechaNacimiento: "",
    nacionalidad: "",
  };

  var getNombreCompleto = function () {
    return sThis.datosAutor.nombreCompleto;
  };
  var setNombreCompleto = function (nombreCompleto) {
    sThis.datosAutor.nombreCompleto = nombreCompleto;
  };

  var getFechaNacimiento = function () {
    return sThis.datosAutor.fechaNacimiento;
  };
  var setFechaNacimiento = function (fechaNacimiento) {
    sThis.datosAutor.fechaNacimiento = fechaNacimiento;
  };

  var getNacionalidad = function () {
    return sThis.datosAutor.nacionalidad;
  };
  var setNacionalidad = function (nacionalidad) {
    sThis.datosAutor.nacionalidad = nacionalidad;
  };

  return {
    getNombreCompleto: getNombreCompleto,
    setNombreCompleto: setNombreCompleto,
    getFechaNacimiento: getFechaNacimiento,
    setFechaNacimiento: setFechaNacimiento,
    getNacionalidad: getNacionalidad,
    setNacionalidad: setNacionalidad,
  };
};
