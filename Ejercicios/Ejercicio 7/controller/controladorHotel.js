controladorHotel = ($document) => {
  let nombre = $document.find("input#nombre").val();
  let ciudad = $document.find("input#ciudad").val();
  let direccion = $document.find("input#direccion").val();
  let telefono = $document.find("input#telefono").val();
  let sitioWeb = $document.find("input#sitioWeb").val();

  campos = {
    nombre: nombre,
    ciudad: ciudad,
    direccion: direccion,
    telefono: telefono,
    sitioWeb: sitioWeb,
  };

  QUnit.test("Prueba Hotel", (assert) => {
    let testAsincrono = assert.async();

    require(["../class/Hotel"], () => {
      //Secuencia via Callback
      let hotel = comprobaciones(campos, crearHotel);

      if (hotel) {
        assert.equal(nombre, hotel.getNombre(), "El nombre es correcto");
        assert.equal(ciudad, hotel.getCiudad(), "La ciudad es correcta");
        assert.equal(direccion, hotel.getDireccion(), "La direccion es correcta");
        assert.equal(telefono, hotel.getTelefono(), "El telfono es correcto");
        assert.equal(sitioWeb, hotel.getSitioWeb(), "El sitio Web es correcto");
        testAsincrono();
      } else {
        assert.ok(true, "Hubo errores");
        testAsincrono();
        alert("Hubo errores en la ejecucion");
      }
    }); //End require
  }); //End QUnit
}; //En controlador Hotel

comprobaciones = (campos, callback) => {
  let nombre = campos.nombre;
  let ciudad = campos.ciudad;
  let direccion = campos.direccion;
  let telefono = campos.telefono;
  let sitioWeb = campos.sitioWeb;

  if (nombre != "" && ciudad != "" && direccion != "" && telefono != "" && sitioWeb != "") {
    return callback(true, campos);
  } else {
    return callback(false);
  }
};

crearHotel = (valido, campos) => {
  if (valido) {
    let nombre = campos.nombre;
    let ciudad = campos.ciudad;
    let direccion = campos.direccion;
    let telefono = campos.telefono;
    let sitioWeb = campos.sitioWeb;

    let hotel = Hotel(nombre, ciudad, direccion, telefono, sitioWeb);

    let compruebaTelefono = hotel.checkCampo("telefono");
    let compruebaSitioWeb = hotel.checkCampo("sitioWeb");

    let validoTelefono = compruebaTelefono();
    let validoSitioWeb = compruebaSitioWeb();

    if (validoTelefono && validoSitioWeb) {
      return hotel;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
