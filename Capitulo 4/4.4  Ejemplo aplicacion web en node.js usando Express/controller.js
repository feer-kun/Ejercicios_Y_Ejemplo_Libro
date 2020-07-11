var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var http = require("http");
var raiz = require("./controller/index");
var insertaUsuario = require("./controller/insertaUsuario");
var listaUsuario = require("./controller/listaUsuario");

//creacion del servidor
var port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);

server.listen(port, function () {
  console.log("servidor escuchando en el puerto: &d", port);
});

//configuracion de la aplicacion
app.set("views", path.resolve("views"));
app.set("view engine", "jade");

//Definimos a los middleWares que modifican la request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

//definimos los middlewares de las rutas
app.use("/", raiz);
app.use("/insertaUsuario", insertaUsuario);
app.use("listaUsuarios", listaUsuario);

//Middlewares de no encontrado
app.use(function (request, response, next) {
  response.render("mensaje", { mensaje: "Pagina no encontrada" });
});
