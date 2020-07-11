function factorial(n) {
  if (n % 1 == 0) {
    if (n > 0) {
      return n * factorial(n - 1);
    } else {
      return 1;
    }
  } else {
    return -1;
  }
}

QUnit.test("prueba de funcion factorial", function (assert) {
  assert.equal(factorial(5), 120, "correcto");
  assert.equal(factorial(6), 720, "Correcto");
  assert.equal(factorial(7), 5040, "correcto");
  assert.equal(factorial(8), 40321, "Correcto");
});
