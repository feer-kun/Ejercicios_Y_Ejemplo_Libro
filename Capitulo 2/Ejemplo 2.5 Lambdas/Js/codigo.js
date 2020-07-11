var saludo = function (idioma) {
  var cadena;
  switch (idioma) {
    case "español":
      cadena = "Hola, ¿como estas?";
      break;
    case "ingles":
      cadena = "Hello, how are you?";
      break;
    case "frances":
      cadena = "salut! comment ca va?";
      break;
  }
  return cadena;
};

var despedida = function (idioma) {
  var cadena;
  switch (idioma) {
    case "español":
      cadena = "¡Hasta luego!";
      break;
    case "ingles":
      cadena = "See you leter!";
      break;
    case "frances":
      cadena = "a tout a l'heur";
      break;
  }
  return cadena;
};

function funcionPrincipal(valor, umbral, funcion1, funcion2, idioma) {
  var cadena;
  if (valor >= umbral) {
    cadena = funcion1(idioma);
  } else {
    cadena = funcion2(idioma);
  }
  return cadena;
}

QUnit.test("Prueba Lambdas", function (assert) {
  //Saludo en ingles
  var cadena = funcionPrincipal(1, 0, saludo, despedida, "ingles");
  assert.equal(cadena, "Hello, how are you?", "Saludo en ingles correcto");

  //Despedida en Frances
  var cadena = funcionPrincipal(0, 1, saludo, despedida, "frances");
  assert.equal(
    cadena,
    "a tout a l'heur",
    "La despedida en frances es correcta"
  );

  //Despedida en Español
  var cadena = funcionPrincipal(0, 1, saludo, despedida, "español");
  assert.equal(cadena, "¡Hasta luego!", "La despedida en español es correcta");
});
