$(document).ready(function () {
  var $sThis = $(this);
  var $procesar = $sThis.find("input#procesarHabitacion");
  $procesar.click(function (event) {
    event.preventDefault();
    controladorHabitacion($sThis);
  });
});
