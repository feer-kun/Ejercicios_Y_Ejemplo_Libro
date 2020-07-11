const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const http = require("http");
const port = process.env.PORT || "3000";

const app = express();

const server = http.createServer(app);
server.listen(port);
console.log("Server listening at port: " + port + ".");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

var jsonVista = {
  enlaces: [
    {
      texto: "Enlace 1",
      direccion: "/enlace1",
    },
    {
      texto: "Enlace 2",
      direccion: "/enlace2",
    },
    {
      texto: "Enlace 3",
      direccion: "/enlace3",
    },
    {
      texto: "Enlace 4",
      direccion: "/enlace4",
    },
    {
      texto: "Enlace 5",
      direccion: "/enlace5",
    },
  ],
  descripcion: "",
  contenido: "",
};

app.get("/", function (request, response) {
  jsonVista.descripcion = "Apartado de descripcion";
  jsonVista.contenido = "Apartado de contenido";
  response.render("index", jsonVista);
});

app.get("/enlace1", function (request, response) {
  jsonVista.descripcion = "Este es el titulo del enlace 1";
  jsonVista.contenido =
    "Este es el contenido del apartado 1. Este es el contenido del apartado 1. Este es el contenido del apartado 1. Este es el contenido del apartado 1. Este es el contenido del apartado 1. Este es el contenido del apartado 1. Este es el contenido del apartado 1. Este es el contenido del apartado 1. Este es el contenido del apartado 1. Este es el contenido del apartado 1. Este es el contenido del apartado 1. Este es el contenido del apartado 1. Este es el contenido del apartado 1.";
  response.render("index", jsonVista);
});

app.get("/enlace2", function (request, response) {
  jsonVista.descripcion = "Este es el titulo del enlace 2";
  jsonVista.contenido =
    "Este es el contenido del apartado 2. Este es el contenido del apartado 2. Este es el contenido del apartado 2. Este es el contenido del apartado 2. Este es el contenido del apartado 2. Este es el contenido del apartado 2. Este es el contenido del apartado 2. Este es el contenido del apartado 2. Este es el contenido del apartado 2. Este es el contenido del apartado 2. Este es el contenido del apartado 2. Este es el contenido del apartado 2. Este es el contenido del apartado 2.";
  response.render("index", jsonVista);
});

app.get("/enlace3", function (request, response) {
  jsonVista.descripcion = "Este es el titulo del enlace 3";
  jsonVista.contenido =
    "Este es el contenido del apartado 3. Este es el contenido del apartado 3. Este es el contenido del apartado 3. Este es el contenido del apartado 3. Este es el contenido del apartado 3. Este es el contenido del apartado 3. Este es el contenido del apartado 3. Este es el contenido del apartado 3. Este es el contenido del apartado 3. Este es el contenido del apartado 3. Este es el contenido del apartado 3. Este es el contenido del apartado 3. Este es el contenido del apartado 3.";
  response.render("index", jsonVista);
});

app.get("/enlace4", function (request, response) {
  jsonVista.descripcion = "Este es el titulo del enlace 4";
  jsonVista.contenido =
    "Este es el contenido del apartado 4. Este es el contenido del apartado 4. Este es el contenido del apartado 4. Este es el contenido del apartado 4. Este es el contenido del apartado 4. Este es el contenido del apartado 4. Este es el contenido del apartado 4. Este es el contenido del apartado 4. Este es el contenido del apartado 4. Este es el contenido del apartado 4. Este es el contenido del apartado 4. Este es el contenido del apartado 4. Este es el contenido del apartado 4.";
  response.render("index", jsonVista);
});

app.get("/enlace5", function (request, response) {
  jsonVista.descripcion = "Este es el titulo del enlace 5";
  jsonVista.contenido =
    "Este es el contenido del apartado 5. Este es el contenido del apartado 5. Este es el contenido del apartado 5. Este es el contenido del apartado 5. Este es el contenido del apartado 5. Este es el contenido del apartado 5. Este es el contenido del apartado 5. Este es el contenido del apartado 5. Este es el contenido del apartado 5. Este es el contenido del apartado 5. Este es el contenido del apartado 5. Este es el contenido del apartado 5. Este es el contenido del apartado 5.";
  response.render("index", jsonVista);
});
