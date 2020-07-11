//llamada express.
var express = require("express");
var router = express.Router();

//llamada a la capa de servicio
var API = require("../service/API");
var servicio = new API();

//Llamada al dominio
var Usuario = require("../domain/usuario");

// Atencion a las rutas
router.get("/", function (request, response) {
  servicio.listaUsuarios(function (error, usuarios) {
    if (error) {
      response.render("mensaje", { mensaje: "Error en la aplicacion" + error.message + "." });
    } else {
      var nUsuarios = usuarios.length;
      var usuariosJSON = [];
      for (var i = 0; i < nUsuarios; i++) {
        var esteUsuario = usuarios[i];
        usuariosJSON = esteUsuario.getJSON();
        usuariosJSON[i] = usuariosJSON;
      }

      response.render("listaUsuarios", { usuarios: usuariosJSON });
    }
  });
});

module.exports = router;
