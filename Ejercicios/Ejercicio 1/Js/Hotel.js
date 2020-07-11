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
    setGerente = function (gerente) {
      sThis.datosHotel.gerente = gerente;
    },
    getHabitacion = function (n) {
      var nHabitaciones = sThis.datosHotel.habitaciones.length;
      if (n < nHabitaciones) {
        return sThis.datosHotel.habitaciones[n];
      }
    },
    addHabitacion = function (habitacionHotel) {
      sThis.datosHotel.habitaciones[
        sThis.datosHotel.habitaciones.length
      ] = habitacionHotel;
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
  };
};
