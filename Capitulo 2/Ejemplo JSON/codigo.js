var usuario = {
  nick: "jvix",
  nombreCompleto: "Javier Pérez Álvarez",
  email: "jvix@jvix.com",
  password: "jvix543",
};

QUnit.test("Prueba Array", function (assert) {
  //Indexacion por cadena de texto
  assert.equal(usuario["nick"], "jvix", "correcto");
  assert.equal(usuario["nombreCompleto"], "Javier Pérez Álvarez", "Correcto");
  assert.equal(usuario[("email", "jvix@jvix.com", "Correcto")]);
  assert.equal(usuario[("password", "jvix543", "Correcto")]);

  //JSON
  assert.equal(usuario.nick, "jvix", "Correcto");
  assert.equal(usuario.nombreCompleto, "Javier Pérez Álvarez", "Correcto");
  assert.equal(usuario.email, "jvix@jvix.com", "Correcto");
  assert.equal(usuario.password, "jvix543", "Correcto");
});
