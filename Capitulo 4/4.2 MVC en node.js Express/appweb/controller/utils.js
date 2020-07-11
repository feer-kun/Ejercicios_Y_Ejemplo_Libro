//Conjunto de funciones utiles

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }

  return false;
}

exports.normalizePort = normalizePort;

function onError(error, port) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "pipe" + port : "Port" + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

exports.onError = onError;

function onListening(server, debug) {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe" + addr : "port" + addr.port;
  debug("listening on " + bind);
}

exports.onListening = onListening;
