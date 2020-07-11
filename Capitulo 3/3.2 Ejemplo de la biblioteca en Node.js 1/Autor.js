Autor = (nombreCompleto, fechaNacimiento, nacionalidad) => {
  const sThis = this;
  this.datosAutor = {
    nombreCompleto: nombreCompleto,
    fechaNacimiento: fechaNacimiento,
    nacionalidad: nacionalidad,
  };

  this.devuelveVerdadero = () => {
    return true;
  };

  this.comprobarFechaNacimiento = () => {
    const NPARTESCORRECTA = 3;
    let partesFecha = fechaNacimiento.split("/");
    let nPartes = partesFecha.length;

    if (nPartes != NPARTESCORRECTA) {
      return false;
    }

    let i;
    let valido = true;

    for (i = 0; i < nPartes; i++) {
      let estaParte = partesFecha[i];
      if (!/^([0-9])*$/.test(estaParte)) {
        valido = false;
        break;
      }
    }
    if (!valido) {
      return false;
    }

    let dias = partesFecha[0];
    let meses = partesFecha[1];
    let anos = partesFecha[2];

    if (dias.length === 2 && meses.length === 2 && anos.length === 4) {
      return true;
    } else {
      return false;
    }
  }; //End comprobarFechaNacimiento

  checkCampo = (nombreCampo) => {
    if (nombreCampo === "fechaNacimiento") {
      return this.comprobarFechaNacimiento;
    } else {
      return this.devuelveVerdadero;
    }
  };

  getNombreCompleto = () => {
    return sThis.datosAutor.nombreCompleto;
  };
  setNombreCompleto = (nombreCompleto) => {
    sThis.datosAutor.nombreCompleto = nombreCompleto;
  };

  getFechaNacimiento = () => {
    return sThis.datosAutor.fechaNacimiento;
  };
  setFechaNacimiento = (fechaNacimiento) => {
    sThis.datosAutor.fechaNacimiento = fechaNacimiento;
  };

  getNacionalidad = () => {
    return sThis.datosAutor.nacionalidad;
  };
  setNacionalidad = (nacionalidad) => {
    sThis.datosAutor.nacionalidad = nacionalidad;
  };

  return {
    checkCampo: checkCampo,
    getNombreCompleto: getNombreCompleto,
    setNombreCompleto: setNombreCompleto,
    getNacionalidad: getNacionalidad,
    setNacionalidad: setNacionalidad,
  };
};

module.exports = Autor;
