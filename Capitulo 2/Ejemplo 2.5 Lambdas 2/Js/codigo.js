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
  var cadena = funcionPrincipal(
    1,
    0,
    function (idioma) {
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
    },
    function (idioma) {
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
    },
    "ingles"
  );
  assert.equal(cadena, "Hello, how are you?", "Saludo en ingles correcto");
});
