//llamada insertarUsuario
var express = require("express");
var router = express.Router();

//llamada al servicio
var API = require("../service/API");
var servicio = new API();

//llamada al dominio
var Usuario = require("../domain/usuario");
//Atencion a las rutas
router.get("/", function (request, response) {
  response.render("insertar", {});
});

router.post("/", function (request, response) {
  var id = request.body.id;
  var nombre = request.body.nombre;
  var apellidos = request.body.apellidos;
  var direccion = request.body.direccion;
  var telefono = request.body.telefono;

  var usuario = new Usuario();
  usuario.setId(id);
  usuario.setNombre(nombre);
  usuario.setApellidos(apellidos);
  usuario.setDireccion(direccion);
  usuario.setTelefono(telefono);

  servicio.insertaUsuario(usuario, function (error, correcto) {
    if (error) {
      response.render("mensaje", {
        mensaje: "Error en la aplicacion" + error.mensaje + ".",
      });
    } else {
      if (correcto) {
        response.render("mensaje", { mensaje: "Todo ha ido perfecto" });
      } else {
        response.render("mensaje", { mensaje: "Ha habido algun problema" });
      }
    }
  });
});

module.exports = router;
