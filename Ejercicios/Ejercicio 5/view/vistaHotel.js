$(document).ready(function () {
  var $sThis = $(this);
  var $procesar = $sThis.find("input#procesarHotel");
  $procesar.click(function (event) {
    event.preventDefault();
    controladorHotel($sThis);
  });
});
