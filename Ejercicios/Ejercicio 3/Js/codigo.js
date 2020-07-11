QUnit.test("Ejercicio 2", function (assert) {
  var gerente = new Gerente();
  gerente.setNombreCompleto("Antonio Álvarez Ponce");
  gerente.setNumeroDocumento("12345678-Z");
  gerente.setTelefono("+34.111111111");

  var habitacion1 = new Habitacion();
  habitacion1.setPlanta("Primera");
  habitacion1.setNumeroCamas(2);
  habitacion1.setTelefono("+34.111111100");

  var habitacion2 = new Habitacion();
  habitacion2.setPlanta("Primera");
  habitacion2.setNumeroCamas(1);
  habitacion2.setTelefono("+34.111111101");

  var habitacion3 = new Habitacion();
  habitacion3.setPlanta("Primera");
  habitacion3.setNumeroCamas(3);
  habitacion3.setTelefono("+34.222222200");

  var hotel = new Hotel();
  hotel.setNombre("El mejor Hotel del mundo");
  hotel.setCiudad("Huelva");
  hotel.setDireccion("C/ Calle N°1 1°A");
  hotel.setTelefono("+34.000000000");
  hotel.setSitioWeb("http://www.mejorhotelmundo.com/");
  hotel.setGerente(gerente);
  hotel.addHabitacion(habitacion1);
  hotel.addHabitacion(habitacion2);
  hotel.addHabitacion(habitacion3);

  //operaciones Backend. Rescatando los datos
  //Datos hotel
  assert.equal(hotel.getNombre(), "El mejor Hotel del mundo", "El nombre del Hotel es correcto");
  assert.equal(hotel.getCiudad(), "Huelva", "El nombre de la ciudad es Correcta");
  assert.equal(hotel.getDireccion(), "C/ Calle N°1 1°A", "La direccion es Correcta");
  assert.equal(hotel.getTelefono(), "+34.000000000", "El telefono es correcto");
  assert.equal(hotel.getSitioWeb(), "http://www.mejorhotelmundo.com/", "El sitio Web es Correcto");

  //Comprobacion del Telefono Hotel
  var comprobarTelefonoHotel = hotel.checkCampo("telefono");
  var validoTelefono = comprobarTelefonoHotel();
  assert.ok(validoTelefono, "El numero de telefono es correcto");

  //Comprobacion Sitio WEB
  var comprobarSitioWeb = hotel.checkCampo("sitioWeb");
  var validoSitioWeb = comprobarSitioWeb();
  assert.ok(validoSitioWeb, "El formato del Sitio Web es correcto");

  //Datos del Gerente del hotel
  var gerenteHotel = hotel.getGerente();
  assert.equal(
    gerenteHotel.getNombreCompleto(),
    "Antonio Álvarez Ponce",
    "El nombre del gerente es correcto"
  );

  assert.equal(
    gerenteHotel.getNumeroDocumento(),
    "12345678-Z",
    "El numero el documento es correcto"
  );

  assert.equal(gerenteHotel.getTelefono(), "+34.111111111", "El telefono es correcto");

  //Comprobacion de numero Documento
  var comprobarDocumento = gerenteHotel.checkCampo("numeroDocumento");
  var validoDocumento = comprobarDocumento();
  assert.ok(validoDocumento, "El Formato del documento es correcto");

  //comprobacion de telefono
  var comprobacionTelefono = gerenteHotel.checkCampo("telefono");
  var validoTelefonoGerente = comprobacionTelefono();
  assert.ok(validoTelefonoGerente, "El formato del numero del gerente es correcto");

  //Datos Habitaciones
  var primeraHabitacion = hotel.getHabitacion(0);
  var segundaHabitacion = hotel.getHabitacion(1);
  var terceraHabitacion = hotel.getHabitacion(2);

  //Habitacion 1

  assert.equal(
    primeraHabitacion.getPlanta(),
    "Primera",
    "La planta de la primera habitacion es correcta"
  );

  assert.equal(
    primeraHabitacion.getNumeroCamas(),
    2,
    "La planta de la primera habitacion es correcta"
  );

  assert.equal(
    primeraHabitacion.getTelefono(),
    "+34.111111100",
    "El telefono de la habitacion 1 es correcto"
  );

  //Comprobacion habitacion 1
  var comprobacionTelefonoHabitacion1 = primeraHabitacion.checkCampo("telefono");
  var validoTelefonoHabitacion1 = comprobacionTelefonoHabitacion1();
  assert.ok(validoTelefonoHabitacion1, "El formato del numero de la habitacion 1 es correcto");

  //Habitacion 2

  assert.equal(
    segundaHabitacion.getPlanta(),
    "Primera",
    "La planta de la segunda habitacion es correcta"
  );

  assert.equal(
    segundaHabitacion.getNumeroCamas(),
    1,
    "La planta de la segunda habitacion es correcta"
  );

  assert.equal(
    segundaHabitacion.getTelefono(),
    "+34.111111101",
    "El telefono de la segunda habitacion es correcto"
  );

  //Comprobacion habitacion 2
  var comprobacionTelefonoHabitacion2 = primeraHabitacion.checkCampo("telefono");
  var validoTelefonoHabitacion2 = comprobacionTelefonoHabitacion2();
  assert.ok(validoTelefonoHabitacion2, "El formato del numero de la habitacion 2 es correcto");

  //Habitacion 3

  assert.equal(
    terceraHabitacion.getPlanta(),
    "Primera",
    "La planta de la tercera habitacion es correcta"
  );

  assert.equal(
    terceraHabitacion.getNumeroCamas(),
    3,
    "La planta de la tercera habitacion es correcta"
  );

  assert.equal(
    terceraHabitacion.getTelefono(),
    "+34.222222200",
    "El telefono de la tercera habitacion es correcto"
  );

  //Comprobacion habitacion 3
  var comprobacionTelefonoHabitacion3 = primeraHabitacion.checkCampo("telefono");
  var validoTelefonoHabitacion3 = comprobacionTelefonoHabitacion3();
  assert.ok(validoTelefonoHabitacion3, "El formato del numero de la habitacion 3 es correcto");
});
