$(document).ready(function () {
  var $sThis = $(this);
  var $procesar = $sThis.find("input#procesarGerente");
  $procesar.click(function (event) {
    event.preventDefault();
    controladorGerente($sThis);
  });
});
