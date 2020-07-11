var Hotel = function () {
  var sThis = this;
  this.datosHotel = {
    nombre: " ",
    ciudad: " ",
    direccion: " ",
    telefono: " ",
    sitioWeb: " ",
    gerente: {},
    habitaciones: [],
  };

  this.devuelveVerdadero = function () {
    return true;
  };

  this.compruebaTelefono = function () {
    var telefono = sThis.datosHotel.telefono;
    var expRegular = new RegExp("[+]{1}[0-9]{2}[.]{1}[0-9]{9}");
    var valido = expRegular.test(telefono);
    return valido;
  };

  this.compruebaSitioWeb = function () {
    var sitioWeb = sThis.datosHotel.sitioWeb;
    var expRegular = new RegExp("http://www[.]{1}[a-z]+[.]{1}[a-z]");
    var valido = expRegular.test(sitioWeb);
    return valido;
  };

  this.checkCampo = function (campo) {
    if (campo === "telefono") {
      return this.compruebaTelefono;
    } else if (campo === "sitioWeb") {
      return this.compruebaSitioWeb;
    } else {
      return this.devuelveVerdadero;
    }
  };

  var getNombre = function () {
      return sThis.datosHotel.nombre;
    },
    setNombre = function (nombre) {
      sThis.datosHotel.nombre = nombre;
    },
    getCiudad = function () {
      return sThis.datosHotel.ciudad;
    },
    setCiudad = function (ciudad) {
      sThis.datosHotel.ciudad = ciudad;
    },
    getDireccion = function () {
      return sThis.datosHotel.direccion;
    },
    setDireccion = function (direccion) {
      sThis.datosHotel.direccion = direccion;
    },
    getTelefono = function () {
      return sThis.datosHotel.telefono;
    },
    setTelefono = function (telefono) {
      sThis.datosHotel.telefono = telefono;
    },
    getSitioWeb = function () {
      return sThis.datosHotel.sitioWeb;
    },
    setSitioWeb = function (sitioWeb) {
      sThis.datosHotel.sitioWeb = sitioWeb;
    },
    getGerente = function () {
      return sThis.datosHotel.gerente;
    },
    setGerente = function (gerenteHotel) {
      sThis.datosHotel.gerente = gerenteHotel;
    },
    getHabitacion = function (n) {
      var nHabitaciones = sThis.datosHotel.habitaciones.length;
      if (n < nHabitaciones) {
        return sThis.datosHotel.habitaciones[n];
      }
    },
    addHabitacion = function (habitacionHotel) {
      sThis.datosHotel.habitaciones[sThis.datosHotel.habitaciones.length] = habitacionHotel;
    };

  var checkCampo = function (campo) {
    return sThis.checkCampo(campo);
  };

  return {
    getNombre: getNombre,
    setNombre: setNombre,
    getCiudad: getCiudad,
    setCiudad: setCiudad,
    getDireccion: getDireccion,
    setDireccion: setDireccion,
    getTelefono: getTelefono,
    setTelefono: setTelefono,
    getSitioWeb: getSitioWeb,
    setSitioWeb: setSitioWeb,
    getGerente: getGerente,
    setGerente: setGerente,
    getHabitacion: getHabitacion,
    addHabitacion: addHabitacion,
    checkCampo: checkCampo,
  };
};
