var UserData = require("../data/UserData");

var API = function () {};
var userData = new UserData();

API.prototype.insertaUsuario = function (usuario, callback) {
  userData.insertaUsuario(usuario, function (error, correcto) {
    if (error) {
      callback(error);
    } else {
      return callback(null, correcto);
    }
  });
};

API.prototype.existeUsuario = function (usuario, callback) {
  userData.getTodosLosUsuarios(function (error, usuarios) {
    if (error) {
      return callback(error);
    } else {
      var idUsuario = usuario.getId();
      var nUsuario = usuarios.length;
      var encontrado = false;

      for (var i = 0; i < nUsuario; i++) {
        var esteUsuario = usuario[i];
        var idEsteUsuario = esteUsuario.getId();
        if (idEsteUsuario === idUsuario) {
          encontrado = true;
          break;
        }
      }

      return callback(null, encontrado);
    }
  });
};

API.prototype.listaUsuarios = function (callback) {
  userData.getTodosLosUsuarios(function (error, usuarios) {
    if (error) {
      return callback(error);
    } else {
      return callback(null, usuarios);
    }
  });
};

module.exports = API;
