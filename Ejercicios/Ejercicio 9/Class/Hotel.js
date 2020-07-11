Hotel = (nombre, ciudad, direccion, telefono, sitioWeb) => {
  const sThis = this;
  this.datosHotel = {
    nombre: nombre,
    ciudad: ciudad,
    direccion: direccion,
    telefono: telefono,
    sitioWeb: sitioWeb,
    gerente: {},
    habitaciones: [],
  };

  this.compruebaTelefono = () => {
    const expRegular = new RegExp("[+]{1}[0-9]{2}[.]{1}[0-9]{9}");
    let valido = expRegular.test(sThis.datosHotel.telefono);
    return valido;
  };

  this.compruebaSitioWeb = () => {
    let expRegular = new RegExp("http://www[.]{1}[a-z]+[.]{1}[a-z]");
    let valido = expRegular.test(sThis.datosHotel.sitioWeb);
    return valido;
  };

  checkCampo = (campo) => {
    if (campo === "telefono") {
      return this.compruebaTelefono;
    } else if (campo == "sitioWeb") {
      return this.compruebaSitioWeb;
    } else {
      return true;
    }
  };

  getNombre = () => {
    return sThis.datosHotel.nombre;
  };
  setNombre = (nombre) => {
    sThis.datosHotel.nombre = nombre;
  };

  getCiudad = () => {
    return sThis.datosHotel.ciudad;
  };
  setCiudad = (ciudad) => {
    sThis.datosHotel.ciudad = ciudad;
  };

  getDireccion = () => {
    return sThis.datosHotel.direccion;
  };
  setDireccion = (direccion) => {
    sThis.datosHotel.direccion = direccion;
  };

  getTelefono = () => {
    return sThis.datosHotel.telefono;
  };
  setTelefo = (telefono) => {
    sThis.datosHotel.telefono = telefono;
  };

  getSitioWeb = () => {
    return sThis.datosHotel.sitioWeb;
  };
  setSitioWeb = (sitioWeb) => {
    sthis.datosHotel.sitioWeb = sitioWeb;
  };

  getGerente = () => {
    return sThis.datosHotel.gerente;
  };

  setGerente = (gerente) => {
    sThis.datosHotel.gerente = gerente;
  };

  getHabitaciones = () => {
    return sThis.datosHotel.habitaciones;
  };

  setHabitaciones = (habitaciones) => {
    sThis.datosHotel.habitaciones = habitaciones;
  };

  return {
    checkCampo: checkCampo,

    getNombre: getNombre,
    setNombre: setNombre,

    getCiudad: getCiudad,
    setCiudad: setCiudad,

    getDireccion: getDireccion,
    setDireccion: setDireccion,

    getTelefono: getTelefono,
    setTelefo: setTelefo,

    getSitioWeb: getSitioWeb,
    setSitioWeb: setSitioWeb,

    getGerente: getGerente,
    setGerente: setGerente,

    getHabitaciones: getHabitaciones,
    setHabitaciones: setHabitaciones,
  };
};
