var fs = require("fs");
var Usuario = require("../domain/usuario");

var UserData = function () {
  //Para las operaciones en ficheros hemos de iniciar la ruta desde
  //donde tomamos el comando node.
  this._cadenaFichero = "data/usuarios.txt";
};

//Metodo publico. Sirve para insertar un usuario
UserData.prototype.insertaUsuario = function (usuario, callback) {
  var sThis = this;
  this.getTodosLosUsuarios(function (err, usuarios) {
    var idUsuario = usuario.getId();
    if (err) {
      return callback(err);
    } else {
      var nUsuarios = usuario.length;
      var encontrado = false;

      for (var i = 0; i < nUsuarios; i++) {
        var esteUsuario = usuarios[i];
        var idEsteUsuario = esteUsuario.getId();

        if (idUsuario === idEsteUsuario) {
          encontrado = true;
          break;
        }
      }

      if (encontrado) {
        return callback(new Error("El id ya se encuentra en la base de datos"));
      } else {
        sThis._preparaCadenasUsuarios(usuario, function (error, lineas) {
          if (error) {
            return callback(error);
          } else {
            sThis._insertaCadenasUsuarios(lineas, function (err, correcto) {
              if (error) {
                return callback(err);
              } else {
                callback(null, correcto);
              }
            });
          }
        });
      }
    }
  });
};

//Metodo publico. Sirve para obtener el listado de usuarios.
UserData.prototype.getTodosLosUsuarios = function (callback) {
  var sThis = this;
  fs.readFile(this._cadenaFichero, { encoding: "utf-8" }, function (err, data) {
    if (err) {
      //Este error lo evitaremos si el archivo existe.
      return callback(err);
    } else {
      var lineas = data.split("\n");
      var usuarios = [];
      var nLineas = lineas.length;

      for (var i = 0; i < nLineas; i++) {
        var estaLinea = lineas[i];
        if (estaLinea != "") {
          sThis._getUsuarioFromLinea(estaLinea, function (error, usuario) {
            if (error) {
              return callback(error);
            } else {
              usuarios[i] = usuario;
            }
          });
        }
      }
      callback(null, usuarios);
    }
  });
};

//Metodo privado

UserData.prototype._getUsuarioFromLinea = function (linea, callback) {
  if (linea === null || linea.length === 0) {
    return callback(new Error("No se ha pasado linea"));
  } else {
    var partes = linea.split("-");
    var nClaves = partes.length;
    var objetoJson = {};
    for (var i = 0; i < nClaves; i++) {
      var esteValor = partes[i];
      var claveValor = esteValor.split(":");
      var clave = claveValor[0];
      var valor = claveValor[1];

      clave = clave.trim();
      valor = valor.trim();
      objetoJson[clave] = valor;
    }

    var usuario = new Usuario();
    usuario.setJson(objetoJson);
    return callback(null, usuario);
  }
};

//Metodo privado
UserData.prototype._preparaCadenaUsuarios = function (usuario, callback) {
  var sThis = this;
  if (usuario === null) {
    return callback(new Error("No se ha pasado usuario"));
  }

  fs.readFile(this._cadenaFichero, { encoding: "utf-8" }, function (err, data) {
    if (err) {
      //Este error lo evitamos si el fichero existe
      return callback(err);
    } else {
      var lineas = data.split("\n");
      sThis._preparaCadenaUsuarios(usuario, function (err, cadenaUsuario) {
        if (err) {
          return callback(err);
        } else {
          var nLineas = lineas.length;
          lineas[nLineas] = cadenaUsuario;
        }
      });

      callback(null, lineas);
    }
  });
};

//Metodo privado
UserData.prototype._insertaCadenasUsuarios = function (cadenas, callback) {
  if (cadenas === null || cadenas.length === 0) {
    return callback(new Error("No han llegado lineas para insertar"));
  } else {
    var nCadenas = cadenas.length;
    var cadenaFinal = " ";

    for (var i = 0; i < nCadenas; i++) {
      var estaCadena = cadenas[i];
      if (estaCadena !== "") {
        if (i < nCadenas - 1) {
          cadenaFinal += estaCadena + "\n";
        } else {
          cadenaFinal += estaCadena;
        }
      }
    }

    fs.writeFile(this._cadenaFichero, cadenaFinal, function (err) {
      if (err) {
        return callback(err);
      } else {
        return callback(null, true);
      }
    });
  }
};

//Metodo privado.
UserData.prototype._preparaCadenaUsuarios = function (usuario, callback) {
  if (usuario === null) {
    return callback(new Error("No se ha pasado usuario"));
  }

  var jsonUsuario = usuario.getJson();
  var cadenaUsuario = "";
  var claves = Object.keys(jsonUsuario);
  var nValores = claves.length;
  var contador = 0;
  var i;

  for (i in jsonUsuario) {
    var estaClave = claves[contador];
    var variable = jsonUsuario[i];

    if (contador === nValores - 1) {
      cadenaUsuario += estaClave + ": " + variable;
    } else {
      cadenaUsuario += estaClave + ": " + variable + " - ";
    }
    contador++;
  }
  callback(null, cadenaUsuario);
};

module.exports = UserData;
