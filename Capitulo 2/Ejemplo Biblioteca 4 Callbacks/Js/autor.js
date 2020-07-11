//Implementacion de la clase autor con getters y setters

var Autor = function () {
  var sThis = this;
  this.datosAutor = {
    nombreCompleto: "",
    fechaNacimiento: "",
    nacionalidad: "",
  };

  this.devuelveVerdadero = function () {
    return true;
  };

  this.comprobarFechaNacimiento = function () {
    var NPARTESCORRECTA = 3;
    var fechaNacimiento = sThis.datosAutor.fechaNacimiento;
    var partesFecha = fechaNacimiento.split("/");
    var nPartes = partesFecha.length;
    if (nPartes != NPARTESCORRECTA) {
      return false;
    }
    var i;
    var valido = true;
    for (i = 0; i < nPartes; i++) {
      var estaParte = partesFecha[i];
      if (!/^([0-9])*$/.test(estaParte)) {
        valido = false;
        break;
      }
    }
    if (!valido) {
      return false;
    }
    var dias = partesFecha[0];
    var meses = partesFecha[1];
    var anos = partesFecha[2];
    if (dias.length === 2 && meses.length === 2 && anos.length === 4) {
      return true;
    } else {
      return false;
    }
  };

  this.checkCampo = function (nombreCampo) {
    if (nombreCampo === "fechaNacimiento") {
      return this.comprobarFechaNacimiento;
    } else {
      return this.devuelveVerdadero;
    }
  };

  var getNombreCompleto = function () {
      return sThis.datosAutor.nombreCompleto;
    },
    setNombreCompleto = function (nombreCompleto) {
      sThis.datosAutor.nombreCompleto = nombreCompleto;
    },
    getFechaNacimiento = function () {
      return sThis.datosAutor.fechaNacimiento;
    },
    setFechaNacimiento = function (fechaNacimiento) {
      sThis.datosAutor.fechaNacimiento = fechaNacimiento;
    },
    getNacionalidad = function () {
      return sThis.datosAutor.nacionalidad;
    },
    setNacionalidad = function (nacionalidad) {
      sThis.datosAutor.nacionalidad = nacionalidad;
    },
    check = function (campo) {
      return sThis.checkCampo(campo);
    };

  return {
    getNombreCompleto: getNombreCompleto,
    setNombreCompleto: setNombreCompleto,

    getFechaNacimiento: getFechaNacimiento,
    setFechaNacimiento: setFechaNacimiento,

    getNacionalidad: getNacionalidad,
    setNacionalidad: setNacionalidad,
    check: check,
  };
};
