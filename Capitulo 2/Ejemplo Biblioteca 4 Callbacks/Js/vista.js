$(document).ready(function () {
  var $sThis = $(this);
  var $procesar = $sThis.find("input#procesar");
  $procesar.click(function (event) {
    event.preventDefault();
    controlador($sThis);
  });
});
