var controladorHotel = function controladorHotel($document) {
  var $nombre = $document.find("input#nombre");
  var $ciudad = $document.find("input#ciudad");
  var $direccion = $document.find("input#direccion");
  var $telefono = $document.find("input#telefono");
  var $sitioWeb = $document.find("input#sitioWeb");

  var nombre = $nombre.val();
  var ciudad = $ciudad.val();
  var direccion = $direccion.val();
  var telefono = $telefono.val();
  var sitioWeb = $sitioWeb.val();

  var campos = {
    nombre: nombre,
    ciudad: ciudad,
    direccion: direccion,
    telefono: telefono,
    sitioWeb: sitioWeb,
  };

  //Secuencia CallBacks
  var hotel = comprobaciones(campos, crearHotel);

  if (hotel) {
    //Comprobaciones unitarias
    QUnit.test("Probando los datos introducidos ejericio Hotel", function (assert) {
      assert.equal(nombre, hotel.getNombre(), "El nombre del hotel es correcto");
      assert.equal(ciudad, hotel.getCiudad(), "La ciudad es correcta");
      assert.equal(direccion, hotel.getDireccion(), "La direccion es correcta");
      assert.equal(telefono, hotel.getTelefono(), "El telefono es correcto");
      assert.equal(sitioWeb, hotel.getSitioWeb(), "El sitio Web es correcto");
    });
  } else {
    alert("Error en los datos");
  }
}; //End controlador Hotel

var comprobaciones = function (campos, callback) {
  var nombre = campos.nombre;
  var ciudad = campos.ciudad;
  var direccion = campos.direccion;
  var telefono = campos.telefono;
  var sitioWeb = campos.sitioWeb;

  if (nombre != "" && ciudad != "" && direccion != "" && telefono != "" && sitioWeb != "") {
    return callback(true, campos);
  } else {
    return callback(false);
  }
}; // End Comprobaciones

var crearHotel = function (valido, campos) {
  if (valido) {
    var nombre = campos.nombre;
    var ciudad = campos.ciudad;
    var direccion = campos.direccion;
    var telefono = campos.telefono;
    var sitioWeb = campos.sitioWeb;

    var hotel = new Hotel();

    hotel.setNombre(nombre);
    hotel.setCiudad(ciudad);
    hotel.setDireccion(direccion);
    hotel.setTelefono(telefono);
    hotel.setSitioWeb(sitioWeb);

    var comprobacionTelefono = hotel.checkCampo("telefono");
    var comprobacionSitioWeb = hotel.checkCampo("sitioWeb");
    var correctoTelefono = comprobacionTelefono();
    var correctoSitioWeb = comprobacionSitioWeb();

    if (correctoSitioWeb && correctoTelefono) {
      return hotel;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
