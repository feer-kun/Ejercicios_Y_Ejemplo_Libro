var debug = require("debug")("appweb: server");
var http = require("http");
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var utils = require("./controller/utils");
var normalizePort = utils.normalizePort;
var onError = utils.onError;
var onListening = utils.onListening;
var routes = require("./controller/index");
var users = require("./controller/users");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

var port = normalizePort(process.env.PORT || "3000");

app.set("port", port);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "viewFiles")));
app.use("/", routes);
app.use("/users", users);

app.use(function (request, response, next) {
  var error = new Error("Not Found");
  error.status = 404;
  next(error);
});

if (app.get("env") === "develoment") {
  app.use(function (error, request, response, next) {
    response.status(error.status || 500);
    response.render("error", {
      menssage: error.menssage,
      error: error,
    });
  });
}

app.use(function (error, resquest, response, next) {
  response.status(error.status || 500);
  response.render("Error", {
    menssage: error.menssage,
    error: {},
  });
});

var server = http.createServer(app);
server.listen(port);
server.on("error", function (error) {
  onError(error, port);
});

server.on("lintening", function () {
  onListening(server, debug);
});
